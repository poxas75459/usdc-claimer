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
    "4fDgQscXheNkZXh3KKJm5ohCDts47uuZpvRSqvzbWUVnGYuQ43SrY1rj2qWv2txf5LCWMpZgqH8CTrYqdz9d8my3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uE1nxbjwVTgqtddtkq4kcZr4qvqsDhhxxgMWnvrS9Q5M16UyHSMcg1T5A5GVAim3yfjyVBGoRFpFstatmJEcCXG",
  "key1": "63Nwni6Lpwb95puzNkvY4JyCTPv12E8RyCW3RASaY14gfQnJ4vVB4xGTGV5gaYKSk6Tybg3ruCTNUwtA1WieKkyY",
  "key2": "2Ba5u4QmkNJAiuJw7sydWhhFeWpsM7btLmQcZascNnANxsQheqVDnPXcfMVB1x6eGRDhkctkD6TcdsKDmz7FexZz",
  "key3": "2q6AapLq5FChVBcqcSQVH4AvwNEPtQDFxdytfHATVK8hLCGwsBFwTmeDPNuy4Lu5nD8X8XjWHGqzZ1R8ciXuhhzs",
  "key4": "XNyRBi1RKW9zACw6ccPx8LhEnqzKRZ988rnz2ZRnHbSEwJRVy9KSVz8RNVH1QSDh8MVCEZsMM7qi8W5C2aPMKJ7",
  "key5": "36PH6z62RkLM43Y3Y16KT2SaXQABEbjRBFMZgjSDFpbNMB71ucyo8ndcevXisMpBa1Vyv7u7e2EL28uGYj5LFhEH",
  "key6": "3v7DxEegc4bNZg3tJopR3jso1yRGkbVhyZ5ngfbTx1gViUqPuPZJVh74Jy8dGqzaPsaiwh9iBoivcRV8GaTyM2KE",
  "key7": "2x49fx363S9gwtsWu3mouxWSADTAQibrvQxjFKzPiyRNebXWUQJA4GjLokEpfkZfqanBZWyu8vQn58aqtS8zRwGX",
  "key8": "Abiquea8p3EmVyHFNds1iWDRDVYyJAFMSAXBS2WfU4C79EGnoK3zRKoYE5AjwYxq52RvQ8i14TT6wbNLja5YzB8",
  "key9": "5zsY1qfysLVFYpua8tKMYjgMY2tgcn9czLo3xDSoq5Due9ZyQYP3Xz8PBjCgYBPeTVmbx8MjERdSm97EtN7JYwER",
  "key10": "1F6NKNSqjJ8TwJDqtthErBk9dx9qnGqmvJXc4c2crXmXmuqCm9izDJEfpYaCYr2qSwo222BiiiN9APKuWSsvr17",
  "key11": "5rW4GtTfgpJfUBjt6oGNpCcTeB819jGJuRvYBRBCtJMg1gdLpDKkHYukib6VTXUaf53PEvbKMCX6APNgTKBKyX31",
  "key12": "3itt3d9umTFwbk1tXvKsPQYqNdzcoeD579Qqm7Gy2FJodYDgg9rPt1PCcuGLcu7obijksQxob3ttSy5mHmpB4xMf",
  "key13": "3ChTfKvkFprv36LL9PTps7azdv2VVyFSvSvccmc1nFdUuDghJRnsNWAukcC7fRsuZCuNGLzDDWeRQX5tcvJJsFLY",
  "key14": "4n9efknGNk9zbynk6USjBq1QpunAELtHWA9uaYfofo23mx9kZtX42nf3LquWZoP7FtafwwDWA4ooxG3k6vv6Ubsz",
  "key15": "3ov2Gn2uqQK83C5opUbtB3uEVe9HzUkq46mu311zfm9LMdKS1ePDMpQxyVkCsux5CmKUFdfLv2UqX6CyZDL9Hkkg",
  "key16": "QstrpU4wNVRwjrKCN9oBbtmjoVHpjw6Ewjp7q7xBdnoJWkpwaKF3vNid1GEd4AZs6G8hYFasVqacQwYS54CvNpw",
  "key17": "3NM16YkavdHzdUtQh7e52PcrUFdCH1nsfLHcDmG4qs9hdbwvSaQcjM5YdFyXaGvVpqK3KrzLxUFDyttrVPW2tWu3",
  "key18": "3dYFZ9jdn616Kryi3XogLfNALxwaZynCzkPsdhxaQaP4z2E118pd8dP3ya4WexjvRNyKc7NUpmgmLuvfeFJZibiv",
  "key19": "5tB9pJoVN2qttwvwk7NGBCzNuEkZh94Wy2QugnyBM6DT5mLchsfcPXkV2vTJPKpUjo3TsgHf7j95e495n8yomhgu",
  "key20": "3nR2oJMxKioSHcgoMz6bKxTJCWXTvqB8zsp7L3417yxe3TPu3eCMXRwKYPYfzKorasGKu2GXBLm6NATPMWvU9NYj",
  "key21": "3g8nSFwyY7MATbhHhihxdDCmtH6KN9KsbuMiGS7YuwKEBPVhSeUSUSiBAezXUQsN9ocdaTd7X55xX1QRGM15Mayz",
  "key22": "5k1UrrqUUEB7avbUVWMgx3Gy7BxjfcLBvwEBkpBAZT8RfcZqVB3amzN117vCDb1kMCy15tGqBCVCUXWMnnUoJsKT",
  "key23": "5RxeHNnufS45mjKswk5cX2zYkZ1DZj7dhpfpGSRXcCmqXYUPquVeRC25jpt4qGATavpFCfnNXXunWq9N3eY1Z2TK",
  "key24": "DhkbjMS71WLDWzewKrjWix5k1txgQSQN6sRcesmehFZf8peK8mTDwiopRDyiNkCxDkmg8ZvDVn2vzCpc8pc2wAt",
  "key25": "56oqNcL6afryhRLfbc5CgdA68snYu6wrqVfHE59kJ9o3Kzg2V1Mor26gQbF98eTuVRiFpBaCFjoGCSzhHd5BZkdf",
  "key26": "ymGcWeWwWyDMfQMXfdcFF4PP2Y95u4z5hv63drChh6w8KTZRsd8vF6rLk5KxetZpBbUTX6mBdNQoztDFtpxbcDK",
  "key27": "3RpsC1PBHiMVVGoghPk94Nat1VKNeASy1wFTC5g87o3Sy6R41mKw263R6T1jqJznKckczpmcYF36VEoYrBDexyaN",
  "key28": "64U8joQnihvx6okrCL842wvMCiDZhxCvmKLSSprc6SJEEdNDu4LZxi2Lrd5zeehupD6i8frW8ub5bokRHfy4a3fr",
  "key29": "5noNrgmFy1SHowfxjCn5fUjFM2oCcyr2jLoUL3ozuUozR12vardEBUB5oHGbpfdTC7VpMgrKsRdLmcweqcYrQ4F8",
  "key30": "3AEnNuZ7CP2cjJdAzs43meJKMoVm53Joaf3MWNCFobRquBhtfUXzohyyEfet7orHXgbPZxi42nUAZs53aRr5HBwU",
  "key31": "27aoAkwSewVFFwQBGZC6qGNgYCHfxCNqoXJCK8TVG4FdQDjSp7MvesZksYEFPqEmkCdrJTfZdVAHU8axKfR497Vx",
  "key32": "bLuBCuGYfeuvjeT8idZ81kiipRjsGz4nr7qwj9XDE8MQJ6v64rKCXM3cwM8jAtQhgLPFPkQ7z2DkEtbC4FJiS23"
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
