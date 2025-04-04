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
    "Lj1xqmvrq8f8jsBLGdJpJjKfSYUBoMLrLiWamQZGZf2dMBAPnYmuQj5negUDHJuHbZS2pWesAmHMjWRw3XDUY9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jv8waBAsUsVJeAdCBVC3GB3gYjeNXWZMCbkcrzTNsmByR9zdB43jWXCAjgAZuNcdbHsEYoUiVqA2gVVAxyQiCda",
  "key1": "3gjU5PggfouUznCLaANKWHktSEnNwKg4Bim8mGGwJKMszjs8Jy72TtHBick2EsyJAQVjMSJGQDV5b6DQUdSNtsmf",
  "key2": "32CEwQ4nBx7HYibckHoDWmjn1gGcB3Az6ZM25e5P88nAFzB2hcCa5WuiDfNhKASMsHpL3k26f1MLtXaAQ3c48gyL",
  "key3": "2yDQ5ZFXWibkg4tf6E8fpqdqVBUQCDbW7ZrndQX5hxEHZkckx9hgHS9cBrFhFbshvDkDR876xurtstPXtCikJsW",
  "key4": "5TS99DrbWLJH1dxm5fhT7dWXjYxd4DK2Q5WfoKxtS6GaeSCyzJjgpsBW7hma6V51as7jDYWEnwqbfJVr6a2Lptzo",
  "key5": "CYTzcbVc557Do34WNxZ5BvBhhYgmG7SAzq1tg73npxezCrYk7SS4tRa5bgK678TTsQaXP3fL83mr9v8kuQsotut",
  "key6": "xUri2wUhi4vKafmT3venTZMDPW8nQunUoNAbYViFNdYMQ4gwBP8D6JZPdxWGmtZm2ywB6FfwKz8ZNSCEfgZivTD",
  "key7": "UWg7B83f4EVbSL4LeE3jykfHMoZPqJPjUMMtV4vwPmsvZyVqMYzzkpACGWM5PhsCgCtbf95yLoHZL4u7yTfokQU",
  "key8": "ExuTSUANN4HNskuuvXDwUbcEeuu7zoZogRPGBaK7igJ7dCT5SqFWssK8QSqBSYFygCCdSbhFwJF6MGH5TzWfXbH",
  "key9": "3SPXVy4TmXs1317jBdcQNQguNnaqatKbmsZpfoXe2MFY8K2DN45mbKz2zeq8yuszdVYVeskXhNpYHmDZp2b6LJ7z",
  "key10": "3kwvFu7UF5tXm6n9puSqA6cR7xxmhjy6TBVbh2t4kgHj87mtHGNgTVKhHwjTJo1i1WcY5qB8s48KxS1LrQXUFW7c",
  "key11": "5gvfUmYJpidFcFMzB4W5QNcCMrRsywUCg7w3vai7jyHo7yRox1nBUgB4LSsPv7ATiY8DPLzXnhoLjiW23KyYfW8e",
  "key12": "565DFZ4YvNFQjBG8fEPgtYn4qdATn5QG5LB3SHWnMDEwwdZFqpbKSeDhjxEhVTnd4gq4sQEN8LCZWUxXpVfzZmXX",
  "key13": "4dzPN4HLQWxKkQ7YzEK7TLquoQjYrTY9tAVuX5ydANuZjQAcsbPikCSgKuF3sL3ZduXm13SDTmSLBeunR8MvDQj2",
  "key14": "2DzzwY8YkseNxc7qezLPqaRGQwjTq8L6P2KGN5QThPvehecM3Mr24efHKegdaFR9zj4vA6nGWRcgaTgs8wtFfE7k",
  "key15": "5xHzGp1RhkuvQW6LsTY1ye6Lac2fMWVZ2hvNVbtQqKAHXGYzQWeCTEkz8PNHyQL1mFo8NMbJgwcfWfRthPeQ36oN",
  "key16": "42cVf2shDtBQBtzDNsvLueJasgJkxK16eUTb5yHSnAuTgudEARq2JkPNT5N4RzXvox7zHoifnDpJMqbzrAEGBAjG",
  "key17": "3Rs1fAtzTmcqn37jLUEwqmKkcRvkcB4JFBih6HCXTpeHBFZwTEeq2Xxg2BPyJsNPbqUVEGFujfZyfo1jw5aPEjgx",
  "key18": "39wqrfHrSF3ChKhMfoUUTY3s8uimn8cVSJMoArdgRWqi4ybJCBoREQU8CJFA3XptjxfShR9vLcBcVUoikc2cHCg5",
  "key19": "4HzuVPNfoFwjFFNBnJShksuyTUsSVozxM7aib4t5uUSUBHNsam2mNebu6DgNfFFG7UxAA7BXqerGggrdDURWqitq",
  "key20": "62jmNHGQSFpSZBPBuWseKdBT8pF5CFRSyg9AB6XAFhpEUJrLw8kJrg2v5XJSgJJykycQuJCsmQXdynEtBdWMRzHD",
  "key21": "4zDXtedQeZZEYm1Y8bs14GRGH4oRPME2rkT1PNRpdorzEveih1xmCt2sfeZTtkowwxe86R3uXBgkfpomDmaqw7uK",
  "key22": "oCMdwJe3XCkR5qooK8Kx49DxdAbC7dve2U6ispaR6iLA7tyPV1int1otEzJWijka8qU3EG1uqxisxjdNqvhizk4",
  "key23": "2RmCxF9NSgyi4hVMeSsszPaDt2CJYi5QAX1S19UMfkCjDLwxE78fJJocThAvC3de4pnCwBrVVUiBySKn9Qv3pmYA",
  "key24": "5WEJs7wZuYfVC8ihzu7KiMp4NE4CVe6bXh6mTC4m7W7kPWbKNoda1XMBihP1xXAm8qGELnNGnzmctXnuK44V78FQ",
  "key25": "4tQNYjhBxPJhwGMM4UUA4t5tsBuf2uFdkkF5jeoVcmAP9PdSdWTWna6dJCBud4MvGyb537Af1duyhyiQPyQP2vNG",
  "key26": "2YwMeyJhwdAyera4juk2hqNornX7DFirwkTyMRa2mgW1nWvsAkrsMKT4ZW1HdXq1bd1gCjAgjJNGG8k1fhGzMPDp",
  "key27": "5XAckkEGxDzGP6xwZtsYCYVwH58o3o5zQnUaiLV54MDbZpFJsUgYQrdLqj5KeXWyK1RYFZH6UHYuNQ7qXTbKFsNG",
  "key28": "3JD9BaVboZy1TrgLcFwGyAAuou84kSHq2DFn1BQYTzDUdrivXQH5Gy5hvEvwatVM62xcGEX19cUezgPvcEvRoBrh",
  "key29": "34iPDZLwRQ5sGH9Cjg9aHGPykVY4nZm7ajNo4j9G2o2KReSy9PFDhberMrFwCgDpW8vo28jrKpLzukdFLxH7VWxv",
  "key30": "4wTbNAvLh2FxWFYmZpQVGXcQwSjDrqjyxitibgj6wtw8mDSC8vp7hb5uw1Q383aXGJ6gB3jfXETTx6NYVv5C9d8Z",
  "key31": "5G9oKh1F2yxXopCXZQjRuFBWVgPDGw5fCzrjccAEkBaJAb2wD52bEHZaeK2rS2xmNh5skTfCx62Ha5VfwJXfrUW2",
  "key32": "2suXYDpRf4ZLazeDsTHsqL1agNCttxZoi2iYTxLM9E8f7DoYoYndKvj8QrWnCbarUhPecRGpd1Rpwnx5UVZpVMp5",
  "key33": "5aSSNpE3dVXh68PdYScSUSkw1ExuBnuiLYKsSXFJPuNSEZExFhc4pzDTBGhvzz4tTd1KdZZXvCzPnU9nCDLVXWEe",
  "key34": "3XUvCS75n7bvXhz9PFGbKXMxnY4X7XdKLnP2tuXAfFFGKdwtPxFPLA7rTwNaHscsLxL4aWuUDrv3Q1CSJxr87hFg",
  "key35": "57vyjRsww8nUsozgjw91VdqnxDfzqQCuTJ6tdoVSAGY2eaP3o2NbLw1cuxKTYKqRvr1kXBErm2ZRaejW9DKUbV9V",
  "key36": "3Fv73ToHPVqgFrJSj6xjTE97BVTe11FR3dcvXemKmbzj3vf9pQJTxTFmZh4yBy7VgVe7jDjjA22L9FS2m94XQhvG",
  "key37": "YoX8BG5dzPkpDS7Tx6juQBMbj1wEm6PaMz44YNJjbE4FrQ3Rm1UnPCbqWNkhzj6zvQCCBg4t2hcuwfvB7jh4igv",
  "key38": "14yyLjgW1TZGYLzegjh7uxnx61jNyEEskLhVm6VCGbvdfsJnePFxP82GKu2iyowhqPZhGFSk8YhT39dhzoCjQiH",
  "key39": "3shvKyoub85LYx8bESrHqpPnEVgFwZfj8iQNsNjVRzCgD3RYYgnJK6T36kGZN8bRBLVJTV66Tkm62eGv73fiKcyc",
  "key40": "4uHnb7kZho4QxBawrybSMt5833SQJt7ZtsfqNwbNKZzHVpvV1ERcr8xpV5MkKP21JWUHFzVbpXNP4P1TF4GcN5xP",
  "key41": "5QEn4sXg3y9FsYJSVf7ia99hp53bNrkuqUakSVeeKa3LMWJdaDdJkRHWbD2wJVuB2pok5j1mHQQE7ttXHvbbrToe"
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
