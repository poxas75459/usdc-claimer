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
    "4fdEPD8F9Wcfx2ucCXTNJmsy5rjJ4v6MkTkQ99uP6nrLaDwDxzPjaeTk7BBNhVnSF46fC7hjYRC9d63koD9RnQK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vGXW5xYcfiPHY4HoG8fHbL3RF7axP5UTLSNYYC6FF5YsQUZHGyErP7CKBRtGTWq5nrZ1uJT1H2ZvVHn8YDApx1h",
  "key1": "3Y94LVHzNBtiYrPjnhdF6jRbyBVB8YAFZHKVhynmKQko7RB8jo9Yj4f46XLE9T4gsZ9j6WdkCBJZt6np6q2b3LKf",
  "key2": "124B2DfViK9XYghYNgHufH1W4CabYyGS1vzEMjS4URModDqKV4iYvQoJPG3V2bhyzBkULdKZUBJZkzR6VUASeh7z",
  "key3": "6KdbYr9MukvqXk5dJzfKm9FHNiWQFk61MhXkdLwNdTdbeLRwsSqZ1VvS5tVSWmGfbp5fsb6F1ynHXfSo2uVCE47",
  "key4": "4Kua5qGe35iR4pvRXQupUsPx8dP3pJbZwRro9mMyEwZiYRGWwc61ntTbDP37BAA67mG5Mwj9YJGqEiBCpq1ZuU5d",
  "key5": "3w6YE6yYfoxvdZXdwr1Vdpu92Tx8CLjVVm9Tomng1BbLzihUZ986mk9aMd5tjhFszZamxsFqB3GakeE24ecVoJ8C",
  "key6": "4oQuHj82bznqooVtMC73EftEPuuHZs52fo51hYeyZ37xwRFn3W7sG5aUecakdNUeBhioLLNXzE1PYtv8QUpQ7xBN",
  "key7": "eHUKmUKv7JRvMvZ7iF5NJCzao4CDiqAiaijCPpnbTYnTizM7fARtbz54wGBmyyTCLFE1ijwFcStKDM4j7aaL5p4",
  "key8": "5vEZchkiTs3jb1tf9aJEid2kGYdVzP3irAq58XK5CkffkbEVV6ugdRbELWQeq76sjz8ysLApdwXkUDdzLywPbPRZ",
  "key9": "3WFPbuRnqJyKQGKBELHxmgZJYDy4r63fGKKBsdFz497ksZedumi8uaS6s3kpf3HE78tDwxpFSsz8TKZJ1Nxm8DEr",
  "key10": "4ZFgiAae4NvKGeBF461CuyGnj3iN8veDYDnWojhebVrDGdb4ZPiauAapvKdtseH3xxo7Dj1mdnNbb1oKiZJRjMuM",
  "key11": "2vHs3JsTytc6W9MXAyHafPU9dzftgPbFwQAZocGGXFeu2eMRLYKLikKxWGPi4wDWKWuht3S9LazTbm2MK4J8iJZN",
  "key12": "46H4cqY8LLjTeY2qtPKizZ1Aw31JgsiUXL83scL9WfamSqwsaH4RRJGbk2KFrgFoNK4EedWhpKufqaFcBmSAx2g2",
  "key13": "5kywBS2SdTFhiMQmVL8hASLzo7jf7nVaSVnEJVSjfHkpiXyVCvakfvamMdELb4dfjmRv8jQcvvsucDYS5DKCSCeH",
  "key14": "5ZC2zao2Z1ZFQ9DZQmEBghbndbG8rmGs4yHxbAwPEBpZuwHLWrgiGkAhT1EX6Xctk9UFaGsVx7ZFWzo9e9gWwNfY",
  "key15": "5YoSPJ9ipzG5BMrPHEJoMu6QuPETu2vtLXsg7Zsh1MDiyNAL6QdDLYA2maTWZ449ieZzbtgyvEJx4YfmDXgawvxh",
  "key16": "5QsaBYihryhTJVk3WNwHWXpvYfV2wgy6xszSkd9DrvRgTrJuegpwJMc3bTkYFWrUvL8cqqBGCCvfac1AJabkVLkB",
  "key17": "2VyfJv8YByu4YkNyqx4yizVVXeaQVtpkCvW936oLBRUACsxGHFcicZgJnBui9k1V65GqosiM6dmPkmjEjkYmJMgJ",
  "key18": "5hvvcJMayZHFd8Ekt6EnfJJQS24gfwbTA2sGVnnnbYjRwxri8ArM6guPXXtun1tSbAWv9Znq9embFiS9ffZrvkw1",
  "key19": "3pwRnamzPJBSgr5hrULYpmgsgmq6Fkfw24r8xjMu9D7E1qs6Gqxru6mBY6stn6RqJsbo6vmMrKG9dmMboDbHSYWT",
  "key20": "5MGVhiWZCR4am2F8Cq9SsguPYv8V29Eib1QmFioD8qmQFUe1GCRwkN7JnbtMujjebrr2mwycB72bpb1178zPxoYr",
  "key21": "4YMPB2k6g9Gc843b4NsrK1GeBv7L4ywXijyRLywmozj5vpqBztxSPBzK1i2DwCXP5rHvMDkUAVcf6TF5EZddzjkn",
  "key22": "z3WBnjzf1vH2Efau6fJr8d9epxRpNrbxrF1NEi9Y64YjdtVR4r84vxD9AeBWaUcgvcPit3U4j8htoh5GwEmEchf",
  "key23": "3AW8XAk1EaZjTg4aEN7UKFU4pVkk3JXu7j64gBMb9MuL3e69SoKgYkmRzViYauFMv3xwmceJSwuq4siKwdEZ8kwW",
  "key24": "2GNghtGcQyLTmUeUGLMmJkqmntL9VkGCNu3y1o8drz4y5aRfhLLc9qwRwV4PczWTF3BeHqysdM8Ldic5xeVuzPzE",
  "key25": "3VsF7mUNfhoYKozj297TZXspYy6XxZibvnCuBHEgFWQQkKncLwNPjyFHuzgDrnJDuhyohQLrdwPPtm7XpuGHbQdc",
  "key26": "2bGauVYNjKjYWcsHU9AnZkTnrwcFoiRVZb1Y6Wkq3ydr82LR8juwzJqQpM66rz56sXiVASfHTykHAVcfkKBPCg87",
  "key27": "5PjFLTJuFePq4yJX4sTJDdvQtBqzoXjBy4asqX8CyxSeXfJ832SXrsr43KQb4vhtR9B95edXBD1Bz32uyC3N29Sb",
  "key28": "59cYZ5FB8sFm6JsEBQqKREzApBJoXRxcRHkBnXMQTAVzjdNKfiRazVsidqbqgYfqesMbQ6HKjvgPCPeHgrVDX42B",
  "key29": "5tJSwRJgYQ5ik7zfJRBtjLLosWhvejA8Ar2epajw7satoCjJQAbrvTYfLXpZ2b6LTfNzH9acuWaibH9VtNiLgRaV",
  "key30": "2FFdrw3p29Q9onNVJ75XacB3xDY8MSme5NWiJWHHM8kXUA2tgUoZGvwy3T4SbrmmwfZZTtANK1etHzicvA77CVmz"
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
