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
    "3LXysnsN5ZMLn9jPeppRwM8HM6S4CUpo4UzA8hNYHfyDvsvQUt7RYYK73e4ED2Gf7TfJAmf85jYVGYkjceksgUrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xzPyuQnznuA7RUgrZ3ifjcprJjsHJZ6uDXkjkzSGZgEA6KzigKNREkgivJEDYNdbzZd6hrsz1BxMj6YLXASxXRw",
  "key1": "PDtn9QTkD3ifnfkCUCDJGHDBKcWdJokEXhxnZFmzVd3LQ8xKzRGHrXrgoATGhmPgagSnQn9b136GzkAZAWB9TWC",
  "key2": "58VpnHkxfCGGPPTkagWiyo3Ut1EqXGnK2WuLNXokG6k39Pws67tmb1Zx5TMpgek7EaMjLR5mUqZuzUrUZAe3MAAj",
  "key3": "2K9UowQuNsWn9nb7bVLeagXwYi7xUyYoaysdNmJXGMtmUdinVkXmhr1C8DV8Fv8aN3jJtPusAZDVf84VXz1DpbAn",
  "key4": "3XWopDQsJGKMLcc31paP7unqsegUf2cQ4NpouAzjcQiS4Dxq9XHoTrRFoQwFpZVM6Syg4fYGrN7KBRkBiACZ9dPE",
  "key5": "2GLPGC3iyaM85Z9iv879D95WxvC7sMCFBZ5wv3PuDaAS2mN2fdkQKuhUvEnrtijkvLLaaoFvgKVUeNDGiCLUfdXe",
  "key6": "42oijXCYWMnSpw2LkQfBwRiRvPtWH7sDJLzg6Ch7cn1HMCYFYyqouvY1zUn8tnjSS9VQ88qfNmKS1K7zFGKxYMBK",
  "key7": "4JVbwa8X7XEXamYAcNS1nFq7NENdXcfTik5BMkEKeoATUHcirxEeLJMrSE8obTP2wuRvkgGJJyhF6ETigrU89PTu",
  "key8": "5QPSc6D8SKjgPHVbb7QYZdFB99tzJJgNUhYax6uLwqgC9kNitRGk7cmfUFCmiCmSQyfoyJD2FZ2p62c6Nbwbntq9",
  "key9": "JZYKUW7y1tpyCarFPdDdiFqzq6E5u9Lkb5zWVF7DTeD7YFY9D4V5Gfm8hEYosBci7qbc8rFXNcyBfqUCPnB8MFa",
  "key10": "2i8n3CeeD7JphfZTGdC33axTrh7srxvf2xVci7Rot4vc6SESPgqc23jm8KBAFKabKNQRAcVxNdYPYT5ZBhivsHN",
  "key11": "2v67EXmfzuderJb75tNFmZwvscnm2TtnA9Y1CzMEGhU3ZXC1GK6xypaYbxYcPrbjEqaN5uHk25QJDiRBnxDfpn6y",
  "key12": "3tp8oQAxa7kfsucPwJYMBnXMag1BbXkStfkhD7Actmc6bR3cyU6pHDy391dq49z3Zowdcpaiv6hLfLCjHU7sf6wp",
  "key13": "UWdGReEZTvK8PeYYpHJQTomngH4aCQeiBCUtav1JxMBkMN5b9nsFcJay8ENKuwqNrCTtzgKMxHHYzDwTfyXYz3q",
  "key14": "3r92yi5sYA8YR17ypYWxxn2VM7unpKY86KAm6WLHxExRmhjCrsNcLqXtqxtL3YnkYMwi2LLsDFc96eVNyKZo9UHe",
  "key15": "3g5WqbEBxsggbsbWY6CANsPCiRMVZdwDcmJGP8ChC1MXF5uMwyUUJtw2JBdC9g1PdcTWkSRZJ7Fi35xsLXWGFMJZ",
  "key16": "24DKwTqdxQ3XtUc3tCY38nLPsnfdFyu4iRCmrqhLWiYhoVWdPFQgmGs9fXupUW4K32PvB3Lwi63sffZDHmUENrZ1",
  "key17": "3SQ6LMe8icZBVM2gawJZD9q2KoYUMCgS6miquBJEJLpYgTHx267nWt2WohZ4fmYdzUFsBkLpPXYns4jBFh8BFJqt",
  "key18": "5VxtLpfD6EitDoKJ1CjBuDcP653WHtrAYQaiHuEDjJjBT9NtcCiVnv36dTdcZca413wrnvLqss9RQr3u72rQewVe",
  "key19": "58Gxme5LbPKPfDfQZJoDEWsUVtBK8U6QUQYsticVGCYLZsuGsjE35QQXb4gYssYpYFDgQmCHT2jevbk2PnqNUkmm",
  "key20": "39twXsPAmhY9cCdXnf1VzqqxqgkUz9eTBS3qKEuUEPYcmWAkeJmc8Lik32d88tc82jPQZyLPUeueDUHfNboCwXdH",
  "key21": "2qVfgXRFRD7ThxDMCGqJ17ZWAMfp6FboMcc2n6S4inwTnLZgcWwi7EprEmSAtPKD3tseAWBufx3WMgivAxio9Zsh",
  "key22": "3hdoQGJfMMDJrcKVNeqcVtdfZQ9qnRny255Ye5pgftkscp7bGQYXSNfufCJB1TUKeHmYQ12ZyNLr5PUjw2PWuUnY",
  "key23": "6431q7Wr5idxNCke9gqkpTruB2CtyabBsgU3kmyfhL9MZgtuqGtvo1Q8tNaCff7MYUUFCJjdmyes44tVmnqsh2ob",
  "key24": "4S92MbQgpvSCfGs7aTix5s2mSvtAPZFB1eT66znJ1VngL6PckiNujgUw9hHVooDfzLo4DK4cYF2axLgeFCcMGAG8",
  "key25": "2UeqecbZzMHscNkTmK5gJxerVAq5mK2tqPXEJvznyq1Uyipfa3H4XrVHmjPqrxgTCSSTPPSNQm7KPdXm2mB7hnkS",
  "key26": "3RDcdGeaBrowUsFxeeAyT5FR5LcugyFEJoJdpWWdYaApM8Jaot1Jew4pfsc39dqCSmWQXckWSxV6FqVWEwfsUDqj",
  "key27": "3gzs52H8T5ThVLGeE7pDDBKCi2Gjo6N1ARaEMnig5HT1o179sJAo4B963CCH5XQM5zmGGYjn8iy8Ew3qHWsQ23VV",
  "key28": "59XLdfCsz6objnooZGKp3t7xW2wQBzhTgpVWTwNngEApd9LNY161jjAvaeRHraD51fQ6dyXMoiMhYJr9onyQR1V"
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
