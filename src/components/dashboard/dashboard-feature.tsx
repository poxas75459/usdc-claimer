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
    "4CfcBVFTyzhb1tTwfoR7tHWM1YL5jdiStPchPUbb2HaVPRfxXuFCZHCugYEw42KUHrGTTaNMjTQbwzJkdasmyMba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WcYCHxCRNokWchaCNcKJr13arATAunQbq3AybkE3fN5BaN29NVV1NJWFQg5fuodfWocu9zqZyW5VMoefxioJ6Kz",
  "key1": "2fBesrXmVwvhj6Z8r8V4SXjY5gTnfp1msjbRDS6Sbde3C1i8GjjEXUBwybeyM3PFPZH1Mw3vKUpxSzsL5wbHrcUs",
  "key2": "2rn36cpQj9hs15UzqRMit7zAVqsbswy2SqVbsWauEWbSS87bamnSrn9ng6x5WzBUb7iYNkamDvUdQKuw85yFudbg",
  "key3": "5YL11iZu5iAhAvxtwDXaCUnRqc6H1rpCVUMW9b79uUjm3U8ni7XL1oZ2dDguSuxBdoCTQnXQYkjzJ4iPoo9PUMvD",
  "key4": "2bE3rWAef2BRemkzNNuKExiQgZVYyWd8r8gsnQ7uFcuuFeNspkKXhxhmGhfj9J3QwzEdSGhTMwvm241uJwBuA9HE",
  "key5": "64NqvoteYNHNHaiPgr6jM6FDLDgk4UqGfe1kFjd7MU9WDDMGXaqxRqjT7dibathdfX8vPfRsYSG6efu29g8wZwVV",
  "key6": "TpFBoyzhtbjntV6btpKFi3L52pMihHebJjWWoLTxbot3ta5t4CFtw8Ze7AEn7uqyWEQaHxRH4owrh5Eqy1SWBSq",
  "key7": "38HGJbXCoQoJ9jK7sxziBJJdv8P46NKfvrKnTwmqg2pbBtPdHtLuVYZi5XRDMDHjrZLdkWLRf6xhwBWEaKfTEBPX",
  "key8": "2kCsrirKcBbxQhUrkhnGtbM9ggo3mUSHTULsHzheEGuLJuk789gQKYhSqg97CZL1V2cppSHr4crSgU6GbhWRtUYW",
  "key9": "2ZHEoFneUTVbUgyNdBX1GM7Fnb9n27HoWMnvDuf86b7Ez3Dym9mH36reYtyRMfp3Qc4RXGVbTKfcBzgBCQF2qr1B",
  "key10": "2fFpqVrxUMB2BESSZoEYKo7XB4Uothigf2rXsQnGyvDcUAynSRu2Uy89x8jWfetzTjHfwkBALxVyx5F2AHKnXa9e",
  "key11": "29wf2r853mPbaEvkPPcnxZmJLDzokVgs9QiqKRPDjpapaJWsjCTvzjrhyY4WdQdaWb4vitDmrz6peuWpwfSR1R5A",
  "key12": "4vhyRKJFCmFtnxBbHvZoNcnQWQdqjDxj4ana9YuzWFSD211v1yKtxrALB468mq459yp9GtMPNmBqMcAwudB1tsfy",
  "key13": "WKy5pn1PDrEsj985GVrpq4VoUSWVnXk1nP4YnJWwLTLtaNsPeQWQT6myHMXRAwjkTuvSe5Hfg3WMQENGNqoo4Nv",
  "key14": "5ivu5wsaBRyfthY6xcR6tr72fRhpuUqcTN7LBpnXqdoV7q1sTKWW9R8D2hGpVpinyFEjtYziyP9xmEY3hGernbmm",
  "key15": "61SZK9zRWAqQxR15NDbdCwwt197UmeiWeqJwvoKhCn1wwpBu76HnNUPYSUjFXiPx7xfE8jNNnBvnquQNj9gY2GdD",
  "key16": "21sAAKYKYQdzac8pAngjJvDuUJrStQB7PGvKiH41YdjKTUe5GMeiJA3KNx1hT3mFRcKNFnGk7XGYEG2MvHXMtQCg",
  "key17": "5Mb6yKrX2BoPM5Fh5rt7nniMcbbvDjfo9uZ2HckcdD32t91pNfN5vLGi2sC589G1YbRaYVnPwm5urhb5api1xCqa",
  "key18": "4GWqzp6HcQpDMufrBaDoZ6zJoZAXCPzUDtaPJARyLqJp37XGBFqJaZLKrJXsJiBPa6JZCUJ1NCrnUbzAyKcYXxJR",
  "key19": "3xR4dRKCMmsjMqJsLoZ5SYmM6qquaw5BfRZxtncZojNQHZxKEA7uqsrjaB3s9TZoazreP9Xs4Dgs4E1XMjFqzaZB",
  "key20": "55U5Ch6XrzY9DqMiNmaYnwgzMuLVP6RHi62weQoyoym73H9Mmg2rftEm8L2xvtg8wwCNB5rHjauGEHpPH138SfF7",
  "key21": "5xVmVDjQU3vFuU8CFCmNi9A5uCkedpWnHabGaJFE2kC2MBvujzCXSzmcSoTJH2CV9C4gAN6kvzQm25HFgQtmvcza",
  "key22": "ox6q8iyZ5iaQGH26tch4PKmVufNbtAmNKksuzGdxxUAurdNW44ZAZ3j1Mjy4c5PH37XVPnntzmFLjH2uus4MGvh",
  "key23": "3tWeAQTKeDQ2k6oRwSRALQEPzaarzxSmLXc5ngAkWM7no3ih3XH6v5wcGuP9TNEonzvVrfUYP1ocBRnGKJDF2th8",
  "key24": "5KNgaxh4nrgSiW5jnQMfTzJcdF3FbpbRxAvybMYh7785rgoKZUofmBxhTk71QuVp3C68geutYeDctC5RQ5k9oqkM"
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
