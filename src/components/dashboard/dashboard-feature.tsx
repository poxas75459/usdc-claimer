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
    "R4gviQCv76QL9A3YkchW46jaF5E98jddmjqnDoqstLA3h41ntabASkSbneG2wfCwz5BMr8Ne5mMXZHfZpMbCS6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PS7bkEHDzWpPRaVy3y8n49C5DwpUAEBbfDHAMH6Nud8HBYFBox7QPcr7Kd23gMZesmU1tGLnVYrYuwyR7S6uenM",
  "key1": "3VShdrrFee79wyrt48LAQxEQMDDasVkvoPz42US9qadYvee2LoHttaaXJ51c5pyg6o5RrnhqZ2b9S94dzr7CGVdG",
  "key2": "4tmN5DAeBLH2ijheKhBFAErzrYbwWDefxKXt2DauQ6xJ56tpTkAH4vyVbPYZPwGCXmES66iuDPhV9g6TY7a7hUsP",
  "key3": "5QAFH94uKmCYGJ9yLgQUQMQncnjmjG8cqeMb6nhrZCzWWMk2CMHS3kGDaDWDMFBZQWjv2qgHVL9gNLVYsK3RsEpc",
  "key4": "2cdvpwYUbQGiN4nSxzjDa1fx3XF72n5PrnxZonBhNZsvWa6YXeBMywShmDAsKaws7qyrDzVpTifwtdeBQ9G63VPE",
  "key5": "2XRXJUAQkRxEmUMAdSmw9RRXpsdkvx2cmW5cy15n8xZfXgkuookyFeq2nWr5qqsTYeSyxhrYPSvkkzTVk89ZqPKy",
  "key6": "3fuq9TEdV2PmgpER2oAWUdgoYG57pGGbFdS8cwLBBtpDQ4ejg8fZxrFyijjZwy6Updi4VDSzEonpGhe6fYpcD9Ty",
  "key7": "uAfgpDo9yhXLTNYQYoqo4hwS64KjkBtCULocGhqmnjcGNaK1H4NV48EzEjDf1kkboCVMSJzgCdHZ4uyFNjhxicf",
  "key8": "8EYnCYnknwgptBA9gxHgcFre1wJMYqALugsBMPGFebmt6WzodvZzCn4kSjdsBppCi8VVYPuzKBQuD4Yz7ZdSQ9K",
  "key9": "5KLZHR3JZvVziSDZrSSztyhLS6T8o6tZ79KDt7DM6uBYyyzKNpD7Tr8v18VR4SqRuu4T26Lw8seujy3eFL7pJTnX",
  "key10": "3nhsjMYVLBZ1bfa6oePP4PB3GQzi83QBA2oV9zy1wfH48mou6VXoRq2sfUDcX16LA7w1ogS3z7Nk9MvygWopEe2a",
  "key11": "2CkbDu2JcVbJZCgsU175F9dPYqenwRbfbzqXMTJJzPZhqL1W14GZhDZxvRx7jrYhkARQVJpbVDTpDQkT8ogcHRLC",
  "key12": "4kp7TZiEMJDFjj9SgEeyjkSyeaKCH2jXKUxp41SKSSSYAbGP2LstwNyRA1T1gpcXq2TiXY1nVquxVY6LB8iBnV7J",
  "key13": "27ygsm7XTZVPEsHN5r8KpgkxZC1fW3hZ83w3HtgtWrS2x8quRfJWwZ7xRyHhndDqrdVqzegCMa3JXsCtzkZencsb",
  "key14": "4XKbWVohZZDEpceAXwrj9D8atn2MAPU3hfrh2bpotLQsHsGsoqe6bUrkGvVjqeDrSQWJoF2h1pxusQT3TxVWZLwG",
  "key15": "5Jcyxj3PyxDE63rfrfMYh9pe2nJBCwfNjEfoPBW1Vgt4MVgL9M89ctFLZQczSX2WjfE99mSozuPnvDAu7wYj6c5w",
  "key16": "3RLsi7AUsU6pqrWq1We9szbe2QUjed1bZ5gGiDN8beCMjY2AAfnyFNZdxRjsayAJg9toP6xor5UdFC6Cbh525YRu",
  "key17": "5q7VoY7Vxcjr6caoSQeMxPdx6p3Ywbzh99BzfnVkFEjxh7Des4K8xCiuBKVHeb2t5ZWwaM3SeiqTSNpB22KdCiqQ",
  "key18": "4fzpKreTL7xZwKQombTXpKQTnyf9gsmUsQ7geJVFaKmWxY4YmDteY3i8iKMCznob1i9eiaGWLj1ZusVZVHPmq2jq",
  "key19": "4ehLbCdzzDQZhk3x7oXSRRQeged3CyeVh24mpRvHwvioRyeE7ucR5rzDeGSPwogYg9ChujKDB27Sn7cHetEsw1mf",
  "key20": "2rBH1M5gLYWFR92EUzYW4wNrZmyWzrgQLijygQ2iCCSHQceDQnS8wmfKt3rGXubxDZhCjPGcBNUZdwvT7298Ub42",
  "key21": "24JNKHX792fQrjoNmprhbgChEG9wCK4ggnsaBFAosYLfQ7f8RA5SB5opFypEvWW5VnQTFh2VysLLpqUeo6AgzsBD",
  "key22": "2tGN3t4hEcqCgGNPLfNbPEY3xbXDxfCgpcScv4MgBjqzBMsfRNY5b8kXZftMfPXnYbG6NnpWB8XxnUADPy5SkTRP",
  "key23": "22EygXQJF4MeJrFQF1frG7kYoAsb79JFVT8PFwxQsPVnp3xQbkWkGAcu9kNVwk5c6D9W4LRP37DmRjffrg7xxFuj",
  "key24": "4FV81qWCuYBdfk14BHUPJBQz72QEgZHsiETvwUn65HijnjrhUSt1WK3a8XobWRHa4dAM6tU7PeVRbWJDRkhZ6eZ3",
  "key25": "5tY9akdPgeCicM8yvXCMMYTRhY4fnLgPokJ4aFsKWnZYVpR24hDJejUbNNyuDXGAromkCFaANHdCVmBxas99Hpmr",
  "key26": "3b5cefPx6rB8QPexSQ2XBPvsdhfZdD1pFKQf5LujHxnRS5Acp4NmgXfXXiTi37eupZGK8cX53QgvLH9fzkgAGmFx",
  "key27": "6RuLARgk2dRGVdSZX6xYWFhFRF31Zt53cQNSq5udcDQHEwQBi25KAvr8oELGLpTkqD1C6DEgNMah21N7394yMb2",
  "key28": "HmvH2UB45e2Ng5fUnsUPVBp7vwjrVwuFozuoQMNNJbTswPwVvVBpKzdnQ3ieFHhPCNH5Z9BaznxFhWH9xDYiBpD",
  "key29": "3CxX1Z1JN2Ud2gxdV6mDwBdjuCuw4r4gpgCJhJaemsFwzERvzvA7mgSM1chCMmz7w3A5bScdzMKML1YB3p2BTruM",
  "key30": "5rq3wSV18cAhu7rQeECuQPm5bBLaZSmxsDsQ6httsYW8ViMWYkx5sUzWSdJQpwETLXnXb8W1DMdxgev1NsmnEZmM",
  "key31": "4f5fKifZ1ssnThh4997zBjvR7KQQbAg8iyKPpHWyzX1WwSk9RoBshL97SvWC26gMbx6e78HkMkcaAXN3z1dSkThR",
  "key32": "3JK94NYhhiqm3zRqP8Pvmw8zNfznhYiKKix8AQqiZsuphk28N2MWiVn9pzFp6rcNtQgusdvoNQvNhgpqgphx2fcM",
  "key33": "2Lpjnrd1SNpqk4fP6XtrydT2jcrzBCryZAkUuKjJ9ZMBeW2SsGQjkAxnR7TK7sLSuhHGXBtNnDXwzCmBir8VJhHJ",
  "key34": "3YMvWVNsvXAZJbhXafw7ZxSvfRuNRT3eUBQpjK7hom6AocTAyg1BTqa2tV1XumwRW6ohFef3SVLDKKq4YTpWeWSs",
  "key35": "54EwC8vVqyTeLtQou7oJF3vGGaT1qo6JCZ1JXJ5NPkEaariTLDdwNFugR6S2F8wj5q2vSFoojkMKAhmwWG5vepe3",
  "key36": "4NSBXGsL2g1wj8hgJLHgFQFnF3x4tc6po9YS3XvvZ44QPSjnJmWVHwzeSLfreqQKQy1oX6uffaKgjfjWFbfiazuK",
  "key37": "52B9Fhhy43vTpMvDosdwfyKwgy3UNDUbiGdWKHefyqxWABemQ9Y82DVEicT1ejVV5YQbyPkT7RVwMFbAJsX6SBiX",
  "key38": "4G4uTZkPupdahGWXbykDHCGXEohnQfbJQtKgcNNyjoD9jWoy1SsXrXWoA8VFfbNDVXrVLu3Ww7eKefT8VoMFhHtU",
  "key39": "rCN3nLVwEt8PUjedh4574ZVqSfZVD2GrgpTu1uy8N6WZvV4gtKiCWoBCGw5mKiuTakdRJLPX2dPbfM6jXxRUc37",
  "key40": "pqKWCVmViCvtZa8pik3YxBfztNMiGfEEWQMG9JFfCSgqjyofWL96xGE6SJ2c69yTEoH87LG1KsHFyuey45HF4wC",
  "key41": "36kiLaYXATEiiZdEWTmjorKbat4pG4MXPUg3bBi5zBmoMzxY1bpmGhMRQRCFYDrX8VMgbgPqQ77M7MRmTKqj23mU"
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
