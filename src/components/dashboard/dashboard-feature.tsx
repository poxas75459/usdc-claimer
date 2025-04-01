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
    "5Zw9qWRySF9CxMRn5T9XoYz7dtQZVh42RVs5KVDJAEuCUUT6VhL22amYGCvNdScUFqditxoCoyVc532i1CMtPn5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jkqdqqmHVrzmaJEAgP7JnAzBorG7UhWYYsH2NFJZCTt6SaHw1ffRR3WvEVp4PMvyih7em8L92msX6yiqD3YFnhc",
  "key1": "N6gfjW5GYcduLLqdqXYZXPvMxmcKArNgtrrxrBtBSYqkWxSSNEvP9Z1fQecmxgAc9nurwudPcbj7Fs1rzV37A6i",
  "key2": "5NPjykWSWRW9vAdgBpi8ZsfUMjrkRZjNSBSJ1ZpCPBaLeec9pX2PEEfDLxpEwx6ogtkogYxmGRTxFT2zz2SPieyx",
  "key3": "4dWDR9o4DwfwJPfNE3khiqENfu1MhQHfSV52DSVSiWUmGHrec8LJtpSzJEkShKsrrV6fpE5Uu3YgUJWqhzqSpsFv",
  "key4": "4hdSHE5VrznxpyxH86jtpMZcmNKoerm13FtCqWXwoxpCNHnAKoTLsJCzaCEEhytEnDa3xd8aMeXTdytTzr1hRDjZ",
  "key5": "4TA8eNYg4r41TNFFVeQzEvF4GU3p3j9ReF9SsFyR2We1xdbJLwFbzmESWRdmZ2naWsxCKLmxBqeoRWo4S4Ad8iCv",
  "key6": "4KKKRKek3EckQydEQBAatMqS5TCpkVZXTYJcGNQyAiD9FtxMg7Jjpb4YFkrAGL2uzTnmPctTQYWFePU4fyX3t5R3",
  "key7": "3UjJf5rXgzFeFhbktvVv39SMc8Y6evBLjHP1rEz6eno1JWft2tfoLVS5BFqKafw9AYUswR8HA9VMh9mXSofzrmk",
  "key8": "3B5kYQ5S9VEC2DvtJ7gdC3s84zvFm6nZWQ23qYRyUW4hYznnFrodkKfRLSiBeBUUgGpvr1JtrTxDzQBtszVLuVh4",
  "key9": "5izQTeoSpbJzaUn4iwQnc7nLSecN5NCq24BUH4zxggtkGPBGPgsxkFXNqeF9LrFL9gydhZWBsjwKCYKwJkqCzxpH",
  "key10": "TsFdFiPfyKyZtZSFtCDeeRNQYRTqj4fSYTzNnV7FL5qRDtbw3AbS9G8bC6yAF5c6XSNjcx5L9jXuYyMjt6JfWn8",
  "key11": "4X8Y4Z9qGB91r3pwtwDonEEnFQvUqv9iTNZZDVfcuBa2qqKcHgjwjogG1Y9NJ7KoJFNiVZSytS3vUt4dqEymysYQ",
  "key12": "5so138awqnczv6gQUxbZAJ6zQAzJhFc1vFQ8KaFy526r8jVyrM2dF31dALZVBDFwM8oWPCuwcVPTciMnM3ctEuMy",
  "key13": "5abPXULcZmtc1nc5iXidq8pQc6QoG6YmsQjHQaX6J93ijFBJt6LiQ5iogeEJjJr2puGZa3CvKi3jjvCPcdj9L4mn",
  "key14": "iyE4fuhy2XAEuk8qBYmfDsM8Gey9W6cA7CqxAwzSHKqZ15PypR4NzycAe75xrVmdFAFqDoqeoForiDXnoMww2s3",
  "key15": "5CUnmVPimzBhk9tg5hqtGQrP7A8656SQYcFzcUpZcsa8EDnsEXgWP4faXuoyuWs5CxDZK6PmcSFJSLiW2dFa2kMU",
  "key16": "rKME8dshsUEC67kxq4SpCh3Ft2zPsJs9oN7GJ9diQUvLi18F3chita39SGKnQB6iABC5tig7o3osRTQhoSZbUsp",
  "key17": "33gJ8k6SzFZperKQncDNWfPXZKZSBJWyusDehwLRitYjeUCGgQDGh7HX96K3UQmh6PfeAHTC5nJHk1vms58TeeL5",
  "key18": "32F3R3eEQkzhF3BNkag5nzQdSdCngZXmZv6F2TYjAxbsiBELVqKgMYDGzpFo2xpcTX2Sf1nvf6SdxUXWmQgpboEE",
  "key19": "3vJqf8GZh1j8ycaDLxqkegFRNkxnjXfScud8kJhg1bgzWFL4BbF8DweKuyTtatD7AbEJ6QpTrgxh9iiKixUQHrte",
  "key20": "5nCZ7REe4SSKLVHMfsbcdTzkdhFBpGMxYZgi3TuDwCixbxnuNghdKr57meNvqjRgteYQE266cUKbFzeACcWvhzvT",
  "key21": "efPH9KjLeXUwbpH8BSCokGcUwGCKqc2hwRXBpYTg12pSeQpHwP91ghYThEydXB8WAXjUnLHKfvog9pVYzYD6T8L",
  "key22": "2opq9d9JNzq8iTvdvPr63cdFgBz2mHup4TSZrQozXfXRc6sn9rRuChCHhzFhjH3Lp3hxZEXYYE7mG64YpjXKwm1t",
  "key23": "3R8SFaDcj5znxkomYGffYnwg2F5N8qGHWhSKwb8n55vauRRD1B6pBcyzrUjhUUmyk9DvvR5yht7pRHQeQy88MdYt",
  "key24": "5MxyRQfBznyZqjvgrj9YbuP8UvzJF4tgD65BcZwmRa3GNk9e4gosUYq9oZaEVFm5YTgYRx9WVvrjsyCNjwByk781",
  "key25": "4r3g3bUaxYxjMyJY9GW1A8wjHvX6oM65fRAQ5LFcuhA6Y7XX2pcipKudRN3yH2ggX3173jxmL6Pi9eQhyzGEHNud",
  "key26": "4imMGCeyMpNwQuKoUEAatiCZRevFGSPnyQAXmHac8fuAZft1MTTZ3CmbPj9nSgukjWvGrpimgJ98KfcBzfRZdgdy",
  "key27": "H3YnuxrSLuradW86H3Smq4op9szGkr2APpghuwyJ4Y8MbNsW8tFbtmaVyEj663RXrodysB25Y94Ge8z6p6SsR46",
  "key28": "5zp8eWr1swS1ffebfJ63YnVnHHZVytkKo95bczmgvz29APqHgBS5J82FCSwcB4KeoaomzQhaGe2Ny8BVRhxK9UKN",
  "key29": "3Tcy3UKhS7QoCUVxKc5XnSAiUPgTtjTiMafUGjyMEVksB1kqowmY5X1GAZZtfnBS5hrhrLJKJkZiRrWRRptDxmtn",
  "key30": "24FZ6vT1s5ijSSwGE4H9mHdUgt4FpjV4tu93dXJWsPPY9jUN16XHiCHEsvG3z9Dk39Z5Pk2UAe27kr7dwH1DSmBw",
  "key31": "4gWwe8ghicvqJP8m7w5abvh9N5Zd5HgcaJLKCzVezTwzwWBcaiHJSiXNkrVpBGQtLNnSurwY7T6zXnnTmCa9pYbp",
  "key32": "4QL2jKi3nYH8m9Fr2po3xiE9BuoffqMKNLai6tiYWF3kik9Qj9Urz2HLk6YMqf5SkSMn8nVkvbFQGQkCmyPZSnhi",
  "key33": "8Ntkd5LHVujNNSJppteWcTYhKvExvgBfEi9MNDPv2ppk6N2pzRnDrN1YLo7KfHnA2oBTCX35EbpJiZcYAPx2sc9",
  "key34": "2yeg8BDSojRhY86AztvKeJhGiKMFbNQUMBhrDFYvz79HtCF86stdcpAtrKH2tt8FR4uFFr6AzWReTneTRbKrShS6",
  "key35": "2xrW6hfnwRsWzeV2qRGGkCBgEVxr16QXETQRNbo6excpXT41xhaZmGP3bn1pcEp9uKX82o9nTNSL8ZNVWAiSkCfr",
  "key36": "3gNDfSdUASYcAiinpyrGyshV2euTqNonmY1cmDxottspkLvrgoDvNXD4ya4VQy5LPYcJyKhjjce7ivrXGbWM8Wm6",
  "key37": "4Vvjw6PoRkKL5oZ148jmmmR5JmgS56gnTahhhiRnLLFosZZGkzHJYTBEA3dbDnez5jD7J732nRWMWuobCyuNAkRn",
  "key38": "4djFfBxrQJjaTRamnZkW9eAUhEQxxjiHe6qWJ1WWeGBSzyqkDGHRUcpMyYjnLGYmNWHyTsH8XPkRRy7AL7TPUVyY",
  "key39": "4EGevkYsX8YUyV2q9KpqFeRoEMtcgmWsd8uYNoXsXYQeCuoP3fm3kHcTrnRMa2pEkuk6iyNhovvpv6gSkcocqVTM"
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
