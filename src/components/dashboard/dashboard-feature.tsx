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
    "2vn8BtYhNVrG8CkCs317cZ5RVzjYNvg3QD6baK336SGzwFsp9UhBTyAbE6Cw8m4HMUTc4jCE8a2hBVJ9YuYzv31x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zN97MjorPkbxKvGnrRSCoWYTxy35S31Nu2mwAap3AgUAABaVZvtW1wWKKiujCJfRzEyxhBQFbAfJrvNtLU6JixR",
  "key1": "3Zpo7G2iUdD9X5q68zMsxbysPfngRhcgtSrRsFsNDMk7XuL5vzDrMbnFceGSbUHEgMDApoyF6bZA15JxLv74ojjD",
  "key2": "5DrSXavyD3DKybS8YfWtytXi46sbP1C9XbP4U7YppvCNjp6TB392wYSbSrGZqQuMQjwva6HxAgNodSrrD6Ga8BZ1",
  "key3": "27LBwchingP4L2JpBxnV9R2wBptbpKSVJoWir2gSYqDhGpGv7GSMgasrLyP5SF9NyvSVbtHvEnhkRUWHM2DdPkHK",
  "key4": "2hhthDdKMkmvAMM7h3YrPEuqJGyVKDwzKB3JEkYnr6RckzZ9GVG5fLmb4QtenwHt3UrtAsnrtiFzmrbqykVQj3G9",
  "key5": "jV6qAEiQq42jGZ2uffdUcMhzaABqzTkMBF1ToX371awW323BgEbvyvRnZ1gqssxWtw2GSirJSefniLjYQVaGTFq",
  "key6": "4YEKuDHTCiroFe411tQfWQtHomgbVZczNmJk161jXQjcUkwDjwmUPFbNxWTPHZbwfyQFKvcqvkuitEK4crASFVvR",
  "key7": "4kbd7xFYpWEuiVYZkwcCY4FTyJ43iVf1S2zE73JJj9DLQF1wnW8sXrra4nkGvz7MVfKjtqWs5gS7kDXDkDygV7z3",
  "key8": "3Kv1L2n3anTGxE3Hgs1VtYrjMkfRBSn1wZrTRzngjZkZy47xA2i1GVdMW7yMVgQ6bCJQL9R79t9AjZhU9Y568BY8",
  "key9": "3EooD6S3jyEsDPtr6etHve2zFmt8nqX8TrikCRBaHg1k8cAsyfRDgtFRu1h5CDPkA29bBvJgSXanPgZ6busqXWuE",
  "key10": "cr5Ta6syHKUNj82378yeEeE8HCqDZmLjJfZDV1TmiUHej2mSoZL2DRMbsa9s732cD6RiVr2HCw8FbHCXqFptcYm",
  "key11": "4QAyNZosWJ7c2yh7UfjP6spamLaNtPBkyAmxmye1ZVPdHH6FbHwvp4bgFGwrsRa9Hg55XYu4Sh1rpmPW2TBYkWcU",
  "key12": "4xKLYF15XapasxAKD7HdKjYLEQ4px82ckVBL2cFz4cYvpSS8duy7c2vPutP6duns1YaLzy8vbNphLu7kmBpfXryu",
  "key13": "46oD3G2gCGn9rzbPURUmvcFqTYadkW6qjstq3sA2kmqyyFTRRfNRkJRpZBdS2PYQ8BZfh2DdEL3y7Fru6wchjwvC",
  "key14": "5knGYT2VHJYAHYB7ZEcbsg9Xmb3SKxJFKQezDkTxRhNoDHR577gj13QGAjENZzoApnT4VExEG5C6yKd7cqZ11k69",
  "key15": "25T8hebpRCHwbtQfBwNy74Auv6rwVRJ1YY2PECp4dV9G2KpgpeNBtXjXqJW8vMNmvUTWh13LkNdSevFVn4a6TwfN",
  "key16": "4iTJgN6XJYCYaQAYZRV8QKwh3Yw1nkWz854oZihLb6suuFVKinKApmbb5EKVZx6jyJrdYzbzGiUipE8eYNmZVPdK",
  "key17": "2S58EQyVsjd6TVNMVGodks9JXFSBxhyYXw8DYXzZYVDD3D6mSU3HtNZ1QASHXpSVANFeYf2VPcywQwJvNedDXfdq",
  "key18": "43Bn1zams6foy27haYHEiydsFeQrTu6ziq2Py5wTEaWbivaEr1SNTxj8DfxNzqFyAGvGq6GoctFuhQmRTAzmZb6W",
  "key19": "3Hc3YbRCNahAStfBXpfMFMCN1moQNSwuSDi76Yxs3iziMZ65RV68m8XQUg5qWzXjH9uiPxvWTTiordswkeHraju",
  "key20": "FwvVHcWiF2VLJRJtknNmFczAmdrmM28wYb6DWXjP1e5HaPtioo6oKd33Go33NZ95J1BxTLzYttdJcR296HFfTN6",
  "key21": "2YQGkm343bkwAi73eVpiyr9bZ8MEejKTtFtpndbpCdsVb98bBY2iBNh5o6yLQvsk72YumQWfM54brKpyAj8PtFME",
  "key22": "3BvKK6vb6oeQC2HQsxdGUvoNDKSYwLGdvKnbb2NLUJ9pksnHDKZRN7icSDgdokkc4BiPJTvCoe1mvpBRajpYX9vD",
  "key23": "3hmGdjVAPyQNiqWatPhb1pNhRYz1UZyi2QBKLxTkHaLED5L9A4KgcHLov4QePukF5p9w2Gu2BxMy1zAhFUQJjqxg",
  "key24": "cnJNowPdSBtxuUvMW4dgsWTQyzU59dPfYScwN5bU1hnvfb5sQsCLyVbJoR5sBjyHnChUNg75D54Yf66a8ar6hFA"
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
