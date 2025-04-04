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
    "3fCoTBGidKukG5RP4VvNVC2HtPpG8Fp8GFThpssZznh2tbPDhA51eRdckAbR1379Ga3jkWaaJEqVYvyfPsG1L3K1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WtiuG8v2QhxMkHcXPqYbmbntF4ADHDDBquimTkYAs9XD1S67XapKepVpKGSZ9BRjfUJKXUEP8xu7sGGJbqA5ck9",
  "key1": "JxtvbyquvNe4Q85hz5HVxMDVwcpDjQt8UdPnePKazXo1jx44kTosWLy4B4gArZ4bepXfcxBedZnpFxM71aG5Bfb",
  "key2": "5m8pmr7T5WdA6mB7H4Ni6WzrPwE8WPMXsQFEeB3YaSm3WkKZK5qi8tAL3rBHg1FvrQXq7AGbRvY2Rk1W11PpCFwy",
  "key3": "CNMEQiS9pDVFUSEQ5Fx69kXVytUucuVrphezn91RGYEEso8ZF7YcZhEot3VzEx4aa9tqzpGXeU7FuV9LzcfwXaM",
  "key4": "3sjwRrxvYnWYXzuP4MqSFFiy4yywnYQaYoP9VkY5bKVYTdGEBFAYAoF5kR986YTmUiRGC5tADdpJhymQd4xHxGmj",
  "key5": "4mn4mwizXp9UPAWEzBfq8SsyRA8rACrkEWk3mWG2UgRFU3Ta6uMwaE91FwygaWu1zM1oedH1JUwwKA5jkgQmUxHw",
  "key6": "62BHe4jpvjJz6Btqtxqw1CaZydxgk1H3H8KQpHvwk5PupnZpZjmjeRo2NYQGWDxJypub1CutePdraZSUY6LxMkPZ",
  "key7": "48ad32CSt9L1bjLQisBSivVT92umJPEQw4Hd1BrmZyTwKkyGT8Ltw5WNdHmkhxN5MTSTs8FbtFNCTSgKbjVZoUAa",
  "key8": "4HXgwepBJuSjjEt5pXLz8ntDjMdXwPbM8Mhg4qGH79yZeWqmPMW1vHHxx2L8qgLdCtsHHGBhhLabjGXzJ9jkJ8m8",
  "key9": "dDuBfyTPKyLx9bvH9ZJk5LYE8f72cshuiw3KnrMmWTbuoqpjiKSUrTHCEwjcwS6GspBw1Rw1PXeaaZvzVHcHLgn",
  "key10": "2GcDAfsHQDnnjB3Pv7wLb9ewPFe4mwV32o2pAZJ6jDjMh2SiQWW2GHTw1rdya8jCeAQSiAHV9vuk6hcfkNjUectt",
  "key11": "6Y7NCZshDpkJL3NnFEegD5vkzeUpHM4NL8bqjeCiKGPm3JatvS2nVFK6BTnju6m5mk1UA7Vf8YHp8jKUNxeDH6w",
  "key12": "4M3cWMCXERxQzETj51VYASTjpsiqMBHCZTaMYAZYpssqspKrfpEeCYev533PDt4Wba21MpoEWMCSScQTA1n3bznj",
  "key13": "3ZHjtWx9wg4q9GucS1DLRZb6J633LScASJxVZkzVKU2HfvCkXuUE6TfwuZLd7RWYUs9EPg7jErVK5W2CyxZyNNWr",
  "key14": "5LufbY8BHMFJmbesdJm1bbeAusHCzM2pHg5qZG74gvnHji3q2EtKzS1WNyTij97SyTXJ74fwJm1csJ9XPscT1zg7",
  "key15": "479pMwY6v4Rzg98DucixwneymnhxNpUXtpRe6mHRddeMozd8JXR9BbAredxQ762osAu716uu78hpgUWUVJbGvACd",
  "key16": "2ZfWc28Ntib9UyvQH9HhD8uENHyUmMNZLQuua8vyVQNnzAFZ65Eso7JrVLGNUZaxmfq8Eah3GfSaLVKtHnuRmMAU",
  "key17": "4xxWvxwz4ZwpRJsk78tg7BfjieHzKrntKUR3VKhdSQyxkRwhBPWMxvHXKnsKZ5eSU1BqHStJsiQfNjfrNhAqn6pQ",
  "key18": "42eq1wqZTyWzwix1ugcbAxYodSDnbYaHndAf2GHyexCkuygzsLntn7fEEco4Bt4qx33VZqVfwwY92ah5AyCAXe3g",
  "key19": "3b3jKVue8Z1sBuLMuHKJcdvzginE15B1cTRw5X7SCuLtAnKat51543skAWdSyZ9E6Mc6ka4by12DPj25n4CwftrU",
  "key20": "5sLkQVUmgdhqx1XhvKkBMjD4bN8zUmEVD91atGKY6sHZLFkujJyeC36HeCyWQUw88mpj6qX5fv3DJJYqk844YtzM",
  "key21": "4gkfY8nCtBHk1LEzcJeSirUJXzfS6G8p4oSt2ewr9TskqwdBrQgwCXtvHhpvXGfPxmh59Vji7yaxAHWUAF9EEDeQ",
  "key22": "EKH95H8mejm6kS5ayqPRptNQmppsyjhCWYe5PXq3hhdLgd1phmyLdCEdAnMVqXZkVZkwq4ptvajRnXaPbVWU2Mb",
  "key23": "djTLGpxoWmzCeMKchFfbzHuTmZm1XtcvSpXLpJMoPVYvpYToTfjC1iWnKw82mvUyqavK5XvjsiAVS8Mxfpjohw7",
  "key24": "36M8HkpCyiHXMdmiEQPSS14mkmMXcZJs4Pt6H7u7QESWFDFTpVG3qyTd2mxupUcG5g3kqDfMZxBXZpMpDAaxMorF",
  "key25": "5yZxKBV7vt3j4yAPC5mqbLYg4bFPQwAfAfgCTEkkC7Ux5E7jKUAzkj8sJ1HME5ZvG4q1WchAiV6GAXHV4Z2qZAuV",
  "key26": "3RtR6usBrvnrmN1Fmh1BeRGgkTPu6F9yxtx2Xmx2TV1PnKG9TRHZUGhhrBvXqT1gsXYsej4R72bo7bDQ7HdyxxR3",
  "key27": "Rgw6fb47hyDrpZkGUHnw7RfNgL9auqsXMKMB2rg1yJ3asht9rP2gnT2596NB6Js2yu1RKvAS62MBniD6qjcLb7r",
  "key28": "2EFfzgDteSCGn66VPhzN8Rj4YjSGHcwwa4KfkCK7MJrmzj2w6QWkTiE4MCPJGwXdPZ8ouhbsraYjrCQtjpcmkhBg",
  "key29": "4EbSPmq5m19UTphKtwAn6KwB2XuaMJ41tTM36DG82V1wq3qMBJGn9ddwjSbL77ZLQaEBZMzyD62vg56JvLfYWaMx",
  "key30": "GrP7RjVZpGwQujX3qc5PBNczyRWLaN2LuKoV4PAyoxznDw3xh7DdNuccre2kQ8RXMKhYRvw2i8Lkf3pUdEY2k5F",
  "key31": "2PGmNjB9wkoha6VxFJviTdLCrnLgTHRuFuCYpjPesCEJTZty6GDDKnjMqWScHscpUCtxysEDJHdxHd9iBHGKFCRx",
  "key32": "NgXyiG5SwS19DntC9LLTWgYFW1gVu8y9uq2CYuedAv45YJPgXhgRshTVX3ZSpXYyFNdnnXkHdTX2RAgeHKUEpYE",
  "key33": "3Wa5zb3uBZ2bWoMBzhc4S73ar3PXYRwrbojvqSc6F3PajSaHmUmRNaQgyZzTogVxatCEScaNncPNbTjJoBov8f7f",
  "key34": "4Etq79HtnKoEM7Ny9cwrugjxPmK62sQDUqis8rssSAECkdzpdcLRw7yWmZzuLFRZFTZs9cRxq9ZDY4Nxg3jjyEhV",
  "key35": "ZcTkRoCj3YYzSB5d5bZa8cPcT3gc9JxSX7vaoqq352XwiWQHy3qzZLHdCtBJridnrzSKwGwQR8PgxtdwhMk7kc2",
  "key36": "3Rtqohx4MtnBR3fwy7naXFMSWmg1c6s87T12cKgAR9N2A86pojgCynd8T1iUTEJQBTNyBL2b2FhZrtNjVnD8eVJk",
  "key37": "5hjn2hDKLLKtSqV3tCJeqXEPjNzwm3xjiLo7j2kECjwQHz8ozNgjfFgPN29rSZMFLUeiSygcGnU1bvADZdMzXjyK"
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
