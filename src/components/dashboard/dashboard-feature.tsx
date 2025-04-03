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
    "hBsZQt9fDYCraVojfNFWWa9GiNieCs5U3n1JLtC1sNFdAgHEZxiMHyguzM96a14JsGMhn9sPi4pPD8gaKuegQAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EqGicaRTUFembpwMjF2FM2EUcb1vUuKMjJDk1engwswnqyTc2pFwZfXdjsUd7ig63eJPU7wMcMk3JaUeC6zkeGa",
  "key1": "4fH5Bqj5z5LN42VLcamFM5H2h3EA8v4o69eZUVHuaNCGJTdxsUHjvSRNtvKzsuSDeWXRiLpRuq7h4awwJiPWYGX3",
  "key2": "61LoXFKpyBEn3yKfFtXUuuzcLNGrNkMh6k1ArHm2wbFj3iKJbNjBZgpt6fCUG7QCguNH3A7QPeVgpiALpCgZi9ug",
  "key3": "5RinQdnaXEvxjdHzZAUYHnrEJxVHeSboz2jGhsPNtZ55Aacu6fqtBD1odn7FzS2Tpo16JZxov84a8c265i2FRa4t",
  "key4": "4uWWdQPVW3s21pvNUX5pBdsSA9VsrCh6ePe962exC4soSKaukip6ww8esG8HAigrdtLY2o4zrikXWmvd13cM4EQ9",
  "key5": "5r1QYnxuQ3oCd5a2Z7QJeyZAGuwicHcXJZ4KakU9YiJpK5gzk7TiitRZQaNuT5uTWrhvQuZNezm2ezHx3DFWzs2U",
  "key6": "4dX2Zq9Xn83MAk1EReuD2Fbae56HctGDdxLdo945XDWx456Gr6DgVXik6kULuprWpdBNnFHDmfTDjVtmiqvNxVB1",
  "key7": "4Ptv1KyVM5fPCjjpsr5X4rDm3dtbAEdjhNyTWyRbhhXWYaPhkwd74YGMGdUYVmgSetXDXPMuj32ukMrf8Lq24b4i",
  "key8": "GBpZkSAuu7p7zEi5psAe3NED6S1GbN6Xoc1YxjpdqPEw6v3HEsFgrEnoamaw9znK3Pr3CMiZRYMAurb4vYq2xuV",
  "key9": "4ACRyaGEx5yefg7M7XTuzENWaK9mtZHgtbNoeCG4Ado9X91wWxnE61L3LZzcjtFsuCwTTXM7Z1A8AbioJDMbLm7W",
  "key10": "5ig3zm86M57maygNsvH9VBgd5RCGxkpcE4TgTHCfSHWTAPEods9ischT3h3WjvhrBT8t4m9oGUY3pze8HuHfd5FQ",
  "key11": "5ZsthFhTRbPsda843tbyzwxbbDQaU7H4tKsaT9kWVF5GpjxV76c2DmwLr89b4cPzcCG2VqbaWLLktTn1dtSsYoT9",
  "key12": "3o7ErNcxU1E6gZDYaJenvFZsR7jbJphG8Gb9tQYCfJnqGiGr5xu8ZYaSBXT56a4EzDSLZwHXuiymiKN2WaLgUsEb",
  "key13": "38DUpMt6H2ph3LYT7o1qqsA5bFA13eya8TY8S3cdoFUbbgZBqSeWAKyjj11ff9WpDJYwF4GD83zpWvzXCYex2U6S",
  "key14": "3X9XfmEVzeTpD4kt1DxeVGfUeRJwd4YkniWap2JeLLfYdX8PwfcbmZnTT33uzwGboDVLUUkHnCEQHqAjH7heh6Th",
  "key15": "wr9BApAzE8fJsk3g8tTSxxMbz2k3SJsY2tdhCmjbbs6XRVtU5YkfX4RJd661HCuFn3Xs22w87jrAGf15p1SPhzW",
  "key16": "SNuSQdPjdJ5YqMqAGZPjxCC1PrEko3kGf4oWd4divUsC1KF87bHCgtLCZJLSBcngXmmFhFekEJ2VvBMNULLberW",
  "key17": "5kVuiPqvV8SpzWjdUYCPLFCQZPMfG72Vv2fDgNmBkwFhHgVHfcJnAucDRtLQpyzzWkHF8w9U7sxWt3RiZqTwAgVw",
  "key18": "56A1AehxhbDaeEPCDfRkhkAb1WQHh59rwAwJ2ZhsDMsAiEzKmRY6UuyfNavrDZBdkUnjez2Jy6MwLpLi22xBUvoY",
  "key19": "4Dmv99NsE3XEGAeBUNpy9nUzbtDQ9cw5UnoAdRzcQk3rKsPGUmpqVc3Bkt9aB5SQcZznv9NEGUF6Wjk2T6NtWvhA",
  "key20": "2ZU5SEBU12dut4iXSbxPk4LN5qjdUc23kuFFJ7RZQ1crWK8v7ZkxygotUVWYffmSCfcBWPnZaUAhyRsRM8CZrgyb",
  "key21": "66MdvZtmxeqyen6jwGa6hBYew9A38wmv3A9U94cdP6GAU8yprQNCYWHJUjfh6yzWS8XUua7GvMbFpnweAQ5aJRGB",
  "key22": "42eg3Ubh7fbbHUWPDmDwsptrWs7Kw4oVgyaRS6cYftjtWxgk9KHc1npxXjpb9PicfVGWEbN7UN8ohTjxgiTiceDG",
  "key23": "3aCFKUoUyGz7TvgJorEMEhQxm3zHM9Zrdc4qq5o6kqU2yXVbnd4UZdHUXAPjJ2UmHUjJWaMaNcVoxge3HZFKQVQu",
  "key24": "5EkydVPQED4k938tRDN9BmuQHq2HfFKMmvBrV7osVnmKV1pg5Trt2vmxLmpdYhgNf9s95it1VjxC5kDdaq68F3Wm"
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
