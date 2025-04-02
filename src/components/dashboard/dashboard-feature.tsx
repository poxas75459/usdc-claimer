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
    "3e6dgw9v38UG3yKH33gD4oANdisurHemjxryPHiEsiAWz5cyfTSkzm2RHm8kYkSWG6Nkka41B7YHkkUUMdCi2W5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A7KeiTpAAYuohDThCJ5hETSAgtJGQzzJD9KRSFFVYcgPWvp1kXHcTbp29181YzdXiHLETLdgtD6Vn5FunwAH5h8",
  "key1": "2kxx2QCporFsoDto8LBZWfVuem7FveMRfcish84peXT1o1kqLM2SoJEj1EWPrNTyQhvSpxd67BV4SwUXF2ENvGQc",
  "key2": "2YyArSGN2dADbmvpEPF1jcYrbgq5noPL4kj9D7bkdrZ5vLuVhx4spktaby8zCrwqy8cvXBaXFbzfSCqztNFNtQLv",
  "key3": "3hDPncKqrpgBe1GGeufsKACf9v3jXm9rUdHuRfqzTguQj7gdgUWMBic32ENUXJSvuEspd1zBRKVp9a2Ev5LVLTSj",
  "key4": "2bacCo4q5QzFoRejmcRhsjN99jvqQ3tDeZtPogyjt626egNDDRqJHQ3PR6DB7PxHmgnmt6kBsjZWi1V9qtW1mstU",
  "key5": "5i5ZGnJA9tM8fteVyK9eZXysPU9CZ7s7ueGA8cLUdccCn5eLWPTU7CqWsMJRgzotCT2eU8iFDkKubLECspi5FDyG",
  "key6": "5RqBaLeGNGkcS6UHvmgW9iz9mqUbs2YXHppUqgQLasQoTBfByRmBbr6ZhxWXEQgtnUDA4T1B6Ez4TMorrfBrq2AD",
  "key7": "EGgR6Y37okgBiLdEdBromffotmdVUPJVxs6GCJ6YC31sj6h2bx7VF3TM5HknK2PUFQ55MVxBkPqAMEPEp7JNyYp",
  "key8": "eYWPHsegv9JAjabbqxHAWTKyxV2BGuhnMg59LCWgAu6wMnN7dEos1GvZeo1rdh4RFDGEF5BFNMPbdkTRC65bHbV",
  "key9": "4EMrYx2AdxELUYwBQZczTfY6t1CZGM7Y3YXw9xZgA2nwnkXJDUsLQMDdw1EyV9zGLYZjB1GMD5ZGXrygKuNhT91X",
  "key10": "5isP6QveatzLAeLj2CtZLJtk3zN4nDWS6pCfxXMCjNkQpUA8sJcUbNcJ5W7YcBpxvuA9dappfy4y1Gq2PLzRJdam",
  "key11": "penNTGc4jrMGXP48zqrMZjajviWEsubnv2nqs8316CLnF2vFYii4E6QVpVeeJBuhNKriourJcoznuMpYkcV7hjv",
  "key12": "5PVfBurwVV4W2swjbyM8rmMtyaYCfmgBZ9PdKGTJR1LUJaLgf8gRVNsKvpu3XPcbphL444abTcbwnfvJcemnjC9M",
  "key13": "5vbFjF4xwAcP3EiCzrhtSR6zH9LPSxBSyESZaPKS2bfLjvcSaFNardWRCZPcvitNsvRgdKrTtamfFymuLtpNwb7d",
  "key14": "XmB94aC3XnjBS8r9WMWLBLpnbW8SKaT9HfeDYum8Kup7Ae8R8cSr34Z9cKCEz4yVMF8bMhzvCMhiAgmRdoH9hXC",
  "key15": "5HKPYGAK8RvcjQxeE5cyytbAVy2NoMSMhATYT5Wi5ezDKfnGv5JSn6a2T32BguoRhPuEqaM8YqYeKTBsY2RDGDkX",
  "key16": "3kWmGLASRceJd2EtTP2AbdqrBirL8FLSt5EqFnj4rR79nFbGTZ6cz61CNxu7XMgf7Cy14iCEfynXUfJvs7WQViYU",
  "key17": "5BDEpLhVHH2LQFqDvD6TahPzDCPo7UGZvTAuq7GiD2fznteeNjrDY9DSfYxQHwWkHwiPApf4q4TC6zfC4C4d6VCQ",
  "key18": "eYM6Gt5VnguzVq31R8KiNfk591JSD2G4wFvgZBryzFD6YdPTsHZCHxJ96VCs8jamWENsA3zgpF6mWu383vEUNHA",
  "key19": "5AqWrh9LGGUHZu3yPsFeD5TCfp4KC5HVK5VdSTQiVxBwshSnGw8MonVhUoSyuvrfEt2AkLChmKMgRL71AEb6zZhr",
  "key20": "2MJJ1zFeN5cgdGaKcQZLTdKCyugi1j1wxS535K3bQq46RMc9UM8Eu6RGiJHefXcNTuwzh5L9UF3SSmosa579u5T4",
  "key21": "4odGpZ981L12KpvTDktrfksNYA9gxuZW7vgtR8JRsKJkmSQv1tqn3pJyqNQrCBzWwBXNNdWSJqyeP6oMHDTHzAP7",
  "key22": "2P2zVZjB8DaHufbLqhvVr9hZTTQcjD7Wza9TaKsoEFSv6wLqUBWeWDRjrxAqYi6CoYHKvRnStHYNt6GVoQxmy5st",
  "key23": "G7w7mFLyxkAQkWM1qw6MwisDFVmKY1C3DpzqC8PTC6dsHdpPziaqsiCZWadr97UWWKBj59i8AdBkHcmZGRm7C2S",
  "key24": "j1BH4GsCe9iNoZNJsckBsr4GDwMAds2T6fbRGvsdhjo9JEaLHM4PEUoxp7PwspAmDWcZ6gDmyPmdjgeX3FS5hfx"
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
