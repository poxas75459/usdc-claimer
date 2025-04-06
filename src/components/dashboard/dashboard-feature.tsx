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
    "5L1CgcHqY9Cqq5AbMcvpQRspudmN1cj7vUzkDL8XuF6gzgeEaMV78fkMLbaNgyDuTUTXPEeaeD788Sh2XFhURzUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLPYbT143sxpGTbXjGbBbqQAVAwDD6XFFr61MwLN2HuXd3QuXcbLNzoog1bC9wbpX75qrBgqx15EDc6pqBzASnm",
  "key1": "5bAbQLqhe3VdjceYJ617QfhQxXEook5wyjgrBB8n7QqMK5Wfr8j8pn4YsAYQsHEp89ANJ8Q7przUUjHDmAfzdMe8",
  "key2": "4cHmFsXwcHoektkbjw3ivWnCKoWXL4tKMRJn2Gafb8tjJotV8jAaeth2wFMhpNTtATqEP3bqPumpAeBSCDURXv2A",
  "key3": "5Z2ggefa6R6TvoQ8oNeNvME3qp83kQ5ncrLfxzrMDgr7Kbgkhmj81pKNvr7RBTHjGs6dRujLt2qDsaDhKz9bzNzh",
  "key4": "4H7V7K5mdFyvFu4euqsHDXuFaT4GZjA9LrZMKdw3ERbuccnzvKBv9yZsdH8jbxKCSoVshk8mJDMjxN87jPvBXvDs",
  "key5": "4VFS2LTfxrwQN2rM9T23J8URCKpooeEgbZ4SK2U6F8J7Rb1jVUATmgzq4kFJx6W7Z4vWiupav8qGhrEQLoDcDtFT",
  "key6": "4Mpc9ny8D1uqcWgefS8M6XqiXVHGDb4JnMFoK8tpucQNvhtUmojjVVdUkqJaM5q7qQ5vDM5LEJXYRFDfdafGC8A6",
  "key7": "54SkRHE5U6AtKpjq4GN8uuw71R567qVbUPFxUabCBQdG5VLcrgqzNZTRxvdFv7Kcq7rnysFu3T8Y1FfvLVHViX6K",
  "key8": "4xWs83jY1WigS7W6wKtcxVzmkqhWi6NaykckLnc3pfN1duBtxa4YJJTGuohhVtfhaGDb5DMtLQQeWs8TsVvSBPQE",
  "key9": "3Mgbygined9uyN7sigWZc26EuU8Ga8yXrEKDHix4DJYAV9GMqiFyjq1babZkUgLbNfU2v3sM8AtJ5pGva9MygA9P",
  "key10": "49L1VbitvaiAkBqRuAhv8Gvv1k52nif2DbCjKTrUfX9CJEw9zvU6ss1z3Ao8arzcYapiZZDvVHyb4ku4WsB3H1FA",
  "key11": "3snwCUxiU6Rfvem1rCSoEM3673aeYwU1k4bpBNaxE9aHQ6rsVNTuUnA3GCTErZXxtdcqjwNFaaTepvN8HeCXskCb",
  "key12": "2mhmDSkDwcpmHwaJECZSebo7QtMGRQbvF84Mog5eGtggC4ssbttS8EFAwvRGj3EsvUJD8ud2sKsc4wKDkb5U2qSt",
  "key13": "Ru29QcvhefCh8iLZ4g4DhbSvfXvTACsFYYmqQn2CDFu7tAPsBfFaK7awPjycDXBbNhZ8uF59eLXHHPgh77rURnW",
  "key14": "tJi6MgdM3pBuzxbnJzYhmLJU2PbQKMwoAs7B9T9bRcZ5WnUaHXtThNpYyuzaaG4SjFR9f4nVzWzAkG55EAMvYQX",
  "key15": "5nikcBvTE25WtyaCgt4zspa95XTzefh9FzJwZC2KMAkbk5DyJ6QGYqfSUZuvBLWxQ3gJXaix7ozaLZNzF2FEhKhn",
  "key16": "24vkwr52BKKi1AE7Y393XJdSWDcGBcVgFzvtQ6pbqtzJtkkvrYDYfLhqGR4R15qgH1esinp8Jt6MetULSqrW5ocf",
  "key17": "kvCMPhsp5cBEEG8aXBKWw5nz5p4FeAEAxraQZk8tur8hCMUYuKkDAE7kknCdYqDpWaNA8EyuoqnHcYJvkqZwgsh",
  "key18": "3QCXHoFfq7DU2uSQCQdpM1jxmcAQRt2CQ5tigHwvPh9eEasiPTQgQxjyADqzt9cYEsKYLtdccJaq1hGZwjAw7mc9",
  "key19": "2ufxWnHK9sAU4VDJMu1kP4JqzRuwWwjmCWfTcwP2msVcHUDYU4dFnGr1794H1PGfZEFUWZk5SHP8AgCB3ja1UBst",
  "key20": "cmq35QNWzkpAWV7Wi6TwGj3gyqAJj1TxQy2NvX959HXo69XsV5k3arFiDKFJmP6MCYZFmyYBxfrYJoGXwDuCuAZ",
  "key21": "5A4X681dZ8qfu1WrXhYqMxktin7S6yUSm58jbsXvxXs5UNoaWmXbwqpDuedDParZMBS7ewZtQteKb8YW5Wu5Xxw2",
  "key22": "28pA1DBShFEm6W29dEzjX2mR7V1RexAbGz6hNk4yLFSVHweWS9PvrQVTWRLxkhE2gg7S7jXLRneNnFeMPGFob8J6",
  "key23": "3pTXM3vjTaaC7RUMWy1RtKSDKG82MvK7CxksLjsvCx5TFQzXgmEUnrc5aN11AMVAKbZC7GgSwBK8GeXBBmouyx5Z",
  "key24": "2QCgSVfHRyaaqmgYCwVHq71qGry7nfidXtQgVLmAgnT63NXGP4BSY8HyQrgLFCBesFGYRv2RvxtzNQehcEh3gfju",
  "key25": "5stU1we8naFs4RaKPaJV1a4zb1Ykpmjg44DaENBAxZUfJy3ZavSeXibnx2SK9pWBLhCCdn3WornRPTGAdJNuN8Sx",
  "key26": "5A2R53pPsAjFq38Sgghnro1WjJi5EwERE69emKaF8AGXnxXtxVZiXSdFGL8vPnxy63BDgF5KLrFjMEeeunYsQguB"
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
