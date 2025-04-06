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
    "2JCdJcL1HGVE4LMsegh8rdsUjU4tMizJuppdVP66Aw8WjnqboojCpjmDSkMnxD6xJaTavVAery4D4AxmNPmrFx72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dkfuuPz77GKQ9xmA4YfUp3FWki1AyAwwPGfUrZZWmPYLDqmfY4frUUScYAs2bkHJy9Ykiz5AeKhqx1GfkGZvwrB",
  "key1": "2XseKBxwktdupfhLLgBW2riYxRT4bQncTxKkRNGe4LFHxiSBshPsEEeP3Yi4iQLDC8fL773diB1zknA6AUjrqFW5",
  "key2": "5nWWspw58pjhDNLvnARszabLnA6C31ADPX7TD8oxcxJG3J5jBNzJLuHswGby9xoucKK2RjfnpTaprDvyEgogJr3x",
  "key3": "3VMUugwJ6z7BQXUhU5MQJQUJsR4PbPEJio71fjXkZxHBB6f4QisqLK8v8v9dBmC4xHcjpwn89asqbPqMXCfFT18L",
  "key4": "4gZWb7z1Kkzh1iB5J7JvjbtzpAveTBFctYxrQRPv8Y2CWhafJKK2zoeW5EcxiHCLozpRBvFyYgS9qSGdca74eyXF",
  "key5": "QHeB49vrHUye4ErZYNjdsNFhNUz3Sw68j3Pnqw2yMTpgYmDknmiRJ7SPKwAdYbLLwHdbHLz6GkYoSVG2ymxZGAg",
  "key6": "r9d9jTP6m4AQ9oXZCzAnN45ykdnDQiohT66Jomu7JReu2DDr9Qjhq8Zj15qSR2uRh8tf9vYywabJx6kiCySknre",
  "key7": "2j8Zya7Swke9a5MgskCpaiMCJZy6tL6b5rRVAUT4W6r7rG8uQiDBBe81sVeYLSogi1nm7sishy2drU1xhE7WCPey",
  "key8": "4cW1uvNoYTXv6UMEP8MKRCDnrVSyosfcAS9vSL4CeGRciuBXtUgZ9Wxp6GK11ZrSYpgz6gcN5skdxRQLBATF2K5B",
  "key9": "4deqYYGy6YgKWVNeCATQEoWTinP6ZyHpKcWN5o5xrURF6JiJVJAzB4t8AritsK3fnymxevyUDqgHa6VbHDJMiVjg",
  "key10": "4SBjKdeRu4ojkCQSjJZE6NM3oUYakYLgXM2UEsLRW88bSwCfJwEWLVMRh5Spr5NSoi2e6LvpJ1WFd6Sv8iZh25Kq",
  "key11": "3DDG3sAtabbYQnFD4vUnV23MqycgbNRCjhsKMth8oBjyNJETuSpk5nrtyz3F2bwCjqAkCdrmvJQnt2UdMqe5rcMo",
  "key12": "58BsTKnzWbtWoPaiT2cCmQVcBWck6Z1EX8u5SS4gnVqTCZ8NHH9HHzBWjWvFLPWKFJKnmbHXEcoK7FQ3WEJGN7VL",
  "key13": "2XARuyQaqaT21Bmvjb9yB2fCN5FTR7Md7WK5MPiqG42VuCWu3wZBB8u1TApQAGgTxkQYTbcnS1swF2fQicqP2LZ4",
  "key14": "37ANbiKg4PzLdRomDZiZYqmP29VagxJx82tBLTEHsJs2YTKFhW12PYmwreBMYbjijVZ2hXEHVkV7g6q9JZEhucNb",
  "key15": "4YrfMLWfdAKQS4ZH5bvPW8VjqRUcKckNYV44q2g2JaMA3Vn3YoquMyKgu783Qnf987gwhrMFXbXGZpQhRvwok8s",
  "key16": "2kbrMCYtuK3azwjEQabxn1sQa7FmJ2EC3NC4kyDrXiUKwD8Hp4HgWgjTcmHdjEQhsHeTdRgijkmRm9kTtmjTjzqh",
  "key17": "Ma6LQsy7QB3AVfcvdJCkGeSuDqjQJCQerHEbqRBHptfWLCzLyW8n4pi8x4wcwVF19ztdiJZw5uxpKeYTGqUm9a3",
  "key18": "57CQ81nsTk9YgY6SpRVk9A7uMRUdKNqHwmADYpwEbrMj9iupZcpzLaep1okHizaDuwVvp7u3kfijgCorwqhRiYdC",
  "key19": "4F9eW6oW6Lr2nbobwDE5yFjhn3Hm8hYAaJczTptSNPBdvFefDfk7iDCrxv65w6bMSPA9dioUG3J3vWYTh4rpNU2x",
  "key20": "4BRWmH7She2QdhHc5A5bm5rdRGJ7vpnFYg9F9BpyxdaYiQkDyVLfKpthpMpVrRdDZS1f5Y5h2B9EayVowaKaVjER",
  "key21": "sYX85u6xoA6wRoqp9T7j1v3t9XbYubtkvrFg6g15gz5fmLFqGFvkPGvTB3svN9aH9g1G3P1KX8VsuJnkiKwmRHC",
  "key22": "4mH7fL8yeGfF6StVVuBRDxj2xo1vYAViTJmLjHWddYTJ9KegxwkbtBQtDZBAaHypQ1Wr2XfTdmimzRhxCqf4GLdk",
  "key23": "5x1ZCCvZJhXk9f3sagm1tvxXxKK2Se97idTAkuwsjxqoAdthxwSPZfSP3CVmH2xfNdXRQjiueRfC52Ztwru6xPV4",
  "key24": "3rrgP8Db81FeBdzmgqAps6iUDCxzS3ZTQNmPhtBdnMudZtzyfEGkUoE7nX6C6TZMEhusfeW5SzrqnU3qsVHKXDMa",
  "key25": "2ZXG9Y9bJUjvB5BAb86wUX3oxGGhvsiE1A6iSK3DYtZwKgmf2AaGaYocyeMwqY7oiMpjY7ebZC4hxEtiYNSiDWFH",
  "key26": "7mtx5rLdTG147zoQXPubfbafqeFjromiohwkvJovKiE6M55Wta2BtbhvKRfZeJ4wfBQQyXLYLeYUh2hMqqKLxZK"
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
