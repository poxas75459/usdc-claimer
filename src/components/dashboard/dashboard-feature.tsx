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
    "3mi156tBAxbYjND9pBE3UJs1PAYSnZcW3hiPjpTCvjSFWCNgeBj4vsSL6yGcvsSuM4WomYcSPAGiPf9bWXwbjj98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pcyMNk8PKVrV26D2dS1qppbHMJZ5MF9GZqrqbaH3PMFAYHJdBzCVTRzhJyKyurtC2DQjjJnHDttR4qYtamqkXzB",
  "key1": "5tziQEwYpPb6QDUdYfJirGf4Q48VBrvrf1MM2nCFpL7eGVX9Lx8dJNQ5uQnDvNwViK2Jidjxhwny5mGtgq5sd4PG",
  "key2": "22GLdug5nRUDvPMueNz6Hreo53myLy4VXF9yAiUYHDGWzyV9JkmqLSfQmnxvh9MMibP94ohmo6uVrwdX2HHmXdyH",
  "key3": "4M1MMszv1M9xv6xte5oG9YKKh3s1cmDoU7rwZwb1VpWkXpMbt9xefXtw6hzJ8L1YxtQi6avnMa1M3tdnamcucv8w",
  "key4": "aqByxZBo6byzfE1NvHvVFvR7DZLwcB2cddSHcR3KBva2KCv6EHWY5B9rHiUm5Y3Dx7U9d3SPsh7SziSRkteAYLk",
  "key5": "2QuAnVQyunTE92EboCGFgrGdJRNFm9tvwEnzQHXPvJQWDA4crXFxJ6jXSkZjFBJ7aGcCZMqSLVtDmGepy7RazZ2u",
  "key6": "5qKsDnhQ3TwvdjaPr2RTbmgi8v2TsHQ1G7p9WjPcmmb862DgsfUms8oYUr1h28NEHDrjRhKZ8SPgEpzeoTsK52GC",
  "key7": "26ERfxYAfnb85DpgEEK3BouiWE8FAxuYTYApvEBnTjtJzBqP7suSWfnqkgUj8zNG3rKR8HivrWbhgvNaGPoitUWD",
  "key8": "4JWVvY5UFgxEy5FQ4EKNXBbukQ3t8FBfvTzkrLWA2hRG6nRQNc3HcU5vmuCsZ6u1yjeoAMvi1qeoBFAGW1tLVbKq",
  "key9": "53FiMHd4kyAYD61ssybve5mXDZHzrqgzUPUSQdfAG7NkTze9uncCMUL3ayWJXbAbGvgkXTRfoD5Beuto36fN6DSt",
  "key10": "5yshiR2aXn1CvGtAX5JqfhS1sP6cn3LBqLAigJ3Ghuosu4A2Z4dL47oEdtGMMUUzKggs39fvP9G3MbsAXLLob8L4",
  "key11": "5aALfM63KiBdjDG9V3EgWScaaWx1EYBQTUP9JLYpzybxLn89oeVc7cjWxBTpvZsQtk1jqyP4e2u2mG6LgDFH39v1",
  "key12": "2NNUEarJPf4kF9ZpdBiRysxh3dnitVcT5ub882gLBGipqsXV4ZodAxYbWxUxkDf63VrkoBuvKNne657QesY4y6ZR",
  "key13": "4V4mNUf4H48TCN1ZDgJsc3fmfeh9GEAgwxdufWyQgrWPUfnsyW7dtdrHXJuNckY3xvmzrB8XNtUtVAFQLm4tgbaw",
  "key14": "Q6Vj97Yz6PTf9wnzmrvkHMvk9u76nWoANhCeZ7fA9Cc7WzeitJHSinVw3t4WTePc9SUwHVD2bMUY8JqZn1txdxE",
  "key15": "3oxxS47j5P9vTHVDg9RWWCMgjqqLDFAjJC3XdwAoqPMBmeXueacHp8tbsJHTWXbXCEvauFDhmmr353QNwH3HHFWv",
  "key16": "5aD9NG3kmxj1P2TqYmTcWvVsdYkVEmVrZvJRDFqp3h2Xwajm1iA3rji9Dg2g1eiZAJnZrMSbtw9ZxTCmEDbnZVzs",
  "key17": "2JQxNne1YrswxxMXf6wjFa8tGjsbHbE4Toi3TsBEQn2LgEPUyJtQK8n5XaHm59FrSa5z99mXgRBasF5kmDT5M8jk",
  "key18": "3KsSiwJQtetLsqZqdmBvqWzLHcGtKK2wozbAqxoLa5QehhovBtdxGjaUwaHERyBET3C8ZCEhXu5KPiyzEgNx7Rfo",
  "key19": "GQrrQm5F52mUpb3YDMHjuux663jgdoQQGznxcYGyyWW6n6eAUEzDLryCkqUjaobAZZ76frmuDDFMVm3c4NzZstF",
  "key20": "3QXYQEH3bb7uQ2xHqRNWQ5SAFoDsTrzj3NiighfPDV7yqqDqnaqENthUej9KLQ2n6adfQ8tJ8Z4fkFEFvg35zgXS",
  "key21": "4FVm4D81sZeRbYMKxxzbK21Cmjt4E12X7jGpX18QH1SKgFrfzQrmz9S36okDVgg3N3XY59YCH4Mu8NpKEHaHxdoU",
  "key22": "3CAD7i8z6hRCuL5LNAkJtZXQrEZ1JyTBaceyJSndXNYMFJUNDz4iDzzsWcJRnVPpi9ZqFGQZvZQadX2m9ugpt8wV",
  "key23": "31CuWBX63zusWY7XFYJXdobL2C9y7AdYfS4j5eKSZ57ipAJEHrwgfW4UeDcVkjqXVZezbZ1penX5BjFRY9MaeuAo",
  "key24": "31F5QAxmkxeparKSy2bZNSeppwfttrsX3qR71p2GWu8Yfbrmoa8JmBj66Q425yrny1j6MyMozrDApFqvc4BZgLe",
  "key25": "4VhkdCJtj2NhZtW6HmPKvhwx29rEQHYvMe6yXo6MdvayjDF48QdwhuBQQiqj3uCHqsLdvTRG2aEDDGjgTAT5rZbe",
  "key26": "vfCL1vtz68XJ5YkrcVmRVa8eEaQajEVtEkvrHsRzXbzkQDeYkDL7z736Win4bNUv3otMtT2AAw62DgWQVasFvVD",
  "key27": "38jgJDte6ZrUMLRbcUbrXrBKJ1w5oZTqKEwbu6SrF4Mr4jLfsW7CZkioBVdLgWT4bwWnPWHGN9USWgtWYr4kK9Mm",
  "key28": "4gTBkgV966FFpxoZL3LwgXjUX1a436YLuCj1QYHhZAVzbKXoSo2oGGpQymyFRCB49mFwoXmdcDSMrAACs13ocbhp"
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
