/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "wTnwNUmHoYrdPZQZdFG63JcE7Pfg5rpnugrLFHAumSNP1gqQwCANL6XGwAMqLnknoFnct3k8maFtvrxZekAdRBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3jUX9cGhsuwnjLH87azD7WRwxeqr9GmBEQt26Dyd4QqkT3P5ohF65RGbSAL1BAP7p2jryibJkWyQ11b9psaSry",
  "key1": "4R1WEMmMpDGafiMfSn97ajgZtDttyas7WDv6BGhHWbsaKHwvH6UP5mmGThZKeapb8LyfMbxMzbAviV9hPzVHyzmh",
  "key2": "4QdFmq3fHSW9TnRqRHryuNUjD96vt7CqvCPsMwzd3tFxjDazodkZdifYMNNkahshVS7ZyApZvcjYe4a7Tj7dp4Wi",
  "key3": "BUkUg2XwBrgxLv6wbg5CDFAD8heBgMH2X3x4BgGACcePk99wUVxyY49j8t452r9a8Ts26Y9UTgMpiYQaqu3jxPU",
  "key4": "676zf7nBaNEfptSRPLWyHctm6hHXaoToBgo6qHsSA4qwmqajnR9WyrrhZbjVxrhxtmD2gcuVp6xKaKMNUKyek5vQ",
  "key5": "53PrbUjmHoUcfCwa15cpyyQBgQFpGUDrHk4YvJeZgWMmEPi9UTJ1uReKH1vMsdMHQXMQ4W6Aj9dots9c9YPXFMtb",
  "key6": "SNU8sHQP5SGJnxu939Ho4TtmLkxBJjwHGQbdeaakiU2c1jpFH4FahLCQWC71P1YaQc9PZYxkppeLUJNR1nTXTr6",
  "key7": "3zCfLcF5i4Fi19We5qsADDSPcYwZA4zFBcdkVB5BLuSahkhb8DLjpR4GdX5jV1Za28ZNUEarVNArNU7ykEDLNQrb",
  "key8": "AvZzvGJ3YNV3R8d5mHYHUtCG9FD4TT4sfwjDS4MPRyBasBZL7T2Fy5ypLKn964NQxk4cRc6PNqP7ZqPse3WZ6Ey",
  "key9": "65Prv7JnNVw7k3ug6jFZ7TVCmFehYyMP3zVp98KsVpa8dwab2RMFgV6o72b2KA2Xx9eccQCXynKKpr5M3DgjxLZM",
  "key10": "4nrkmS6uTEqXLMCX4HBTRk8FU489UVNXFNf2UuVDMFoLgLE4aWrJQss8DT1AJn35CaqMsbyN947izcUVbfmhnwRd",
  "key11": "5Wmy5VoA2EANrYkGE6EHzzCSmYv4qPy5JKHV7kYhJurQoA5zUk1MEwUgW4wLqSkxkYzcSegx8d57hrQYi3dv2isY",
  "key12": "TfwHAZacjgAnwSQyeQQ6rzQHbvas5QMhWjmnkvuUDdZFULtedhc4nwibJgUH8uyPkfzDUbjikZcxSqEJyChq6g3",
  "key13": "4dSD3ECXnTQdsV14cxBGeckmJGPTcMewb8i74bCmML9MXSibT7emAMNjktfhcDun3iwT4uHj2EuB9DKT2o25ppBJ",
  "key14": "5c6JVeCgxnNyCTSiKthsWWR7DfYn9yHuzMHn75JAwNSkAdu3RhTWQF39Q3URzhmhCgrnnydLR8q84dhZZTi1ibzQ",
  "key15": "5iTMFixQQMjLXPGCxB99eCJTkJU4bmUZaLdxP5k8imvSMMZtnHBxFYVURfvoxS297p1piZMXnnsCGhkfAxUBXTbZ",
  "key16": "47ksJCnWr2wnpQMDPoJX5C7wez3prbPA1Qd7pSRb9GNokR78VdRi57a518QH1Z28Hcw78nY6Qg4n4KsgVafFCEus",
  "key17": "B1be89TFtkv1nBnBkQKP53Bz4Bn857juoLhrEvbxnp5aJLCQWVvoUHthfeGqZ7XKg2iB2mymBiLPezY3nGqHZor",
  "key18": "4pSLCfYeRMt1RqTSpD9V5n6r1BhvtyveuZZBzb1UNbXiLvw7Y6A9kemBer2YgAc4qSD5Ehf2bgVBTh4vYrWb52Rx",
  "key19": "5S95JCknFAdZfnJosV5GcBZrytUSbUYgCFBUHqdMwd7bPHDR7BsCNxBkArV41sZjBFZQnwx1Mb4XufZRsKA8zfp8",
  "key20": "3X61KPLYGPFvSxrvutkQsEwjdCQVEKf4xe9M4L2nQDfPCTtoLx2rdKVD73m6ESUUMhxayzdbRbJJ81nZex5TyQd2",
  "key21": "26urXzvTBTM2H2w2kGdwPALVVxQwNESVGxRiUVAQw1WLCe5vWNn6edHZWdcqyFFcHQ2m3bcMdDWi1ypZPjj17V5m",
  "key22": "4PgrU2FTw2aTQLuK2F2Rd5f147iBREgLtFKcGn26kxETNk4cHj9jmafN23FjUxf5G6Q5QAgK67DxSoSpa7HF4yCF",
  "key23": "4jCLXR7RtApfVEkykPuNtjXGrxjaAzotuCmW5r1Cm6368E2jh7cAzgrYGYWCtMWw18S4miGFyHMz14rZDQxoZvkh",
  "key24": "2QZ7mjgPT3EwbuwxsAgdHsHMavkuHPZ3wCKgcoUCgaKcoRMqc9b6Ld7qyedKE8wCLSLhu27XEidhWf7Z2H9MRh8W",
  "key25": "TDBAZFiUwxFtAFyuAduB4tYVFHAK4x7BfuPhtnqGCurDcMnGMta6Tz5EQ8sr9QQ9QbkG6Gy1LRkn8yZarkaFveU",
  "key26": "4kXDg4JJmWusXEHQig3ANEmgdsXpbU4TFKW8ZCquhAeteSGRqjaMSf7CQ2reat5sLiyE43pcvRAPEqbn6Web1qEu",
  "key27": "4PFrqUCCthUERSVMDJh1TXwDyF7DY3NHZLvfWXztNo5XUcmMiLSsX6UFCfotZ2uMt4MbPmw8pJbcCKgYKSmt7FhN"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
