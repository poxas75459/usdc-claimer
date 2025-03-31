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
    "4DX64X7imQaKGyCQBCv1oBRu1SvHDRud8Fx5iTnc6rusLhnqZn7tinfSPHFAHnoUNc3CUw2UkCPCuNCC8eJRxr93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EWkBBLkbG1MSV5HRhGR8iia2EUx8d6zqdrNeQtgCJP4Nom8eDSgK6xX94boZjgtUTCyAGM7WgGnWSBub4nT2yse",
  "key1": "2Z5kc92b2QBt1Y7u66K7oaktE4i5EJ6gVmCupQnhREzRzVEGK3nGj12VGyxfzjSnxeiMFdBF3S1TznWtApzTTSQb",
  "key2": "3ugmyZ7mtdfbt5ZLuTrSX5foJvFD2nWWFKhEiacWzcEhVLTTZ7LNBVW1Nbs7RhTriB6nk21WudJuCz9YxJQCAKwg",
  "key3": "3bCtQromLS7MSJx8vBRTewPjMFv1Ls5FE7Pqd3VHmXE3wh26mNYN6w83NhtUA4toArdSUHm3fsFCsesWbVhmyJwE",
  "key4": "2wQuc2XjJLKHDxeU4YuArCu4pZh8fZE1E1yoXZjz2Bn7RSSxMzxsks79qZYDieHTKVo6qbxFm4LLSRuNR54vc91u",
  "key5": "5hYkmsQgUU91VC7hFaPWhux2ZF11xZF2A9Ly3wazhP7B3vpyYnhcfWdJJru8cZ2SWqw18Jma9S2fUWw2E353oAc",
  "key6": "3DWshLNrpz5g1uqUUAThog4kA4BhmDfrJ1fvP5btDQHi9e7w5E4Xjozt4VtbtUksftcfaXVd9ahRMY4dsirFutas",
  "key7": "5UJauVre3eA5Adstib1CrLws2cLL7tbpA9iguGsA7aWwkGngxv2n461YKVzwj4wAaUWXQceDHbTyCaENGZiwAq3d",
  "key8": "51qD1jj9S7tbF1xfXqiyZhhfC1YEfLbjTFTSbgj5kVRzAbD56aKeXbjnq2YXo4Sj5CButx4R76Tmfte8pAqRCLqa",
  "key9": "3jWYh1hGnfEGCW34Jw7vD4eJHnaHdchLB9avUwFYYtk5LwCquVP76EyMj1fuWHkuYM2e8CvmjhmR6mAiPHiUu3Au",
  "key10": "24pvpy1qLjbFw94osWv7yDDZTkxiiK8RsAzmakjBtsfpFuWyw4tf2toHdDfCGB1uwguKXqSnc1fQoudi2Ghab9yc",
  "key11": "5skgo1SAmV9uPTukxns8mm9gZ9tfdaepx7GrXMnVr9eQBkiVTquXwYnyTsmHr5eLdeWTkb2ojp3Fh42g7oZiSDwQ",
  "key12": "2z963buECv7dYrtSnTc7cPMQ1UmC6uRxrbfG8v3J8WwYfe7xrbfK3fS5Uz7jd2KYpm3jjzSRZjHpVLwDoRCHjE7j",
  "key13": "4kJ1vXhwRgTtnVRRLu99GZqA598fo5KASDDZUtRUb35ghX4VLBLw2XAThDdYfhqK41AqgULbH47APrvKBaeJnojH",
  "key14": "5KmqXA7eqXzEvrf8WNgoTC5avdmhmd2Avf3wfJ4MEVVX8pwBQhgnd6rhUgqtGGXbiK8gegKZghAvrFNRKYF7SEmj",
  "key15": "N9yXPvmWWDeDa3MJxiTPvPMPSfzpWZtppSeAAcbqDPk1tGjWeCTh6mWYYdXgwTsKgLd1MYjHFDaJ8QbMspGG6dW",
  "key16": "5qExHfPRFa5UE7GgY3CqaUepxTSgFn6qmkB9uBtAHGrMuF7jZ7bnbbULucV7vVuoALqDvrfUiD75ySwxNra3LtKj",
  "key17": "upXicCuJuLmSZ2PRJgddAEXVTfjBkuLgEkkWnxBwsKtZ4Kg98N8f5XBtiWTX8eiA7rovXmXG6qfScLZg1v3UoUT",
  "key18": "58MpsbVvoeTcdqeuQJnvg4Ym2mP9G9nqLARSDdEjYm85GnxwP6PadrHjRxJM2dgJGeSqVonBeNBMSdkGFm9ms9TH",
  "key19": "2E13VRMAWtmMLGHHATbvcvoDJ1pe2RhPRtecoD1Wry9HXAwBnHU7kXJRroJRVWV7yANoPAS9WQpwox2diTXm3FxL",
  "key20": "EBh5yTffKyy2vqLQ8eqfWA23umsnL1SmSJFokT31pd7npMTSbwyMgW4SQUPSPg13zvSk4ZED4eoRsA9Z1LRE7y1",
  "key21": "ShdiZkeTHE6JFbQ5Yyma811FjnxssFWNVQnwBhRnrXfssX8USBxu4GnE4mdJa6Z6cKhbxpmGkbKxpJDXmk9oaHB",
  "key22": "5em47nPd4H2ViaxPxu9LJ5tS8EfxuMyjUhkNrd5wBvACVWDabsdLkyGkSWTuxymHvG1kvYmNZBmvu56wqeuqHtNU",
  "key23": "pXhnGK4LpDVqfwL7dfmMuM9vxzdMNX1ZhdHhySFfs41WGm6yWZVUVy7J9K44Tv4HEJJENpSxKuGp8xkCJoTDDPa",
  "key24": "TDqshMPXAwtmLH7SrU6W3dLS4g6pvaGsAYUunvz1rSyTojNoHaH15BVVJP2GZoAE4UNBivGt5UPpka5gAaiEscN",
  "key25": "2DA4ZSf1FsuWsKV3XwxGjJbd444uTL6SBy6cq8hkLSxEWj6pBspXXnyoxfRtkU36BySaCbX4dNnxvKin8WjsPpT1"
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
