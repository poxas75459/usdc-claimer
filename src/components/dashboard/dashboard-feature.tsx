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
    "3HtQXn4LEDeq9QZ1ecnuUDGfUPsMbs3XTqPJLE657m2SK5P8vqjRZciN72fFJd899ohyFLWjma5sSK7TqgqgQzfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZMYC56CsJxjGtim8EWhpHQSYNVTo6zAyRS3KcB2y8s1xp1EpT8i1dxdyNnuaRzWZtp6oHPf3MoVCpwhF4xQrYyJ",
  "key1": "5FiWHUt7HPiKdCRRXapKZguyGKes53LiPYi3WMQkGBhfRtunEkUDfwxE1y3jd8n5vjYhm4ftRd2g6aMaYaPmECnN",
  "key2": "4mNGw2qvaEk5ThunuHegkV3UAkJMtFhaAfmEty4KhVKkynzqB3qCTejHuX3XGeuJCttTCdu7Wt5vKYzheSpeKSXn",
  "key3": "4ReyRK4PiJwtzRWvEXQXBjHkERJDzGYJf4sKrSTjV5hahyJ5mVHCx9DWW6nKbhhaN6FDQgD6ByGTdKjSy584Hh4f",
  "key4": "27LF1LPQVKGhkxkqDCzEwufuT2WLWsn11UvowZFmXf3W6v6wCpTXMbm54JDqKo59Z1e5pj3hcKseUPkeVB9BEH9v",
  "key5": "28rKH5kJNnJ42hoBnmUGhRsUgxqt1kwaSZYeHm3DZmmrzqPrMgzAa13UiFq5BqQ16rwvjsgeD39uDBZfhxPYiEVj",
  "key6": "5yqc4zPJ4jVWfDX6fiXLnLwiaQG27KKZoX87eGz8NzV38r9FvkteCZysKpqtpm98M5wWDadrzDSuhVXa9m8m5i8B",
  "key7": "3u23pZJ2WTtutboLohkYjwDZyjAgCVqZYCroy8QTn11a7aZafFsgPtAacV1qCppvsQT2snFgR6TFscvbXRe9P21x",
  "key8": "2JjPkgLrG2Y8mWjfNFd381SUwGFKu61gddJUFZSJTCiw4BiQehxk3jqSSa1YFKnvXkrt8fWFw3KdcBeambviRFAd",
  "key9": "25PEJDYhix1dCqYRVp4anw7oXQZB4VcA2WtN2w1TX18mEgiyrxXc8aK4cs2UbVG4eagjJRqqVxPs69bJ6XuQxMh5",
  "key10": "3Dwyxw49D6BNfUW8Dr8ZNwDgaUvN8QpHzfU5BTP3B6tdHxmQxnnUtzmh37zdQWRyb8C25HhK1kAkRn8RTRXCGfW2",
  "key11": "3kCJEgaYkdCyjiFaCbW7tEMVnmueM59nZeHFTKK921XqeAm3BvPSGWyB45N6FxaJCZ8rPPgkSo7NaA2rbLsGrNvH",
  "key12": "2cN6gMuJf3J84PD5tGceamSu2xduDP64t7uZNFVmNnMHNVnptxK8NQKRL73RQykoXfMPVPvmrQeVnM9JxwULJcg8",
  "key13": "2m7FkwNKyt67mc9V8snMkiL4YyUBcHyMUoCq91QRJHsNrJkEPh2uehfoztpT82uC6QfVZpmnoPGeaC4G6J7zC71Y",
  "key14": "63RozYK9aEuYxBusWGj1FLL4oesijvnm7CqtACgPK6iCcupgoKoBH3URYnAbxqxNKbt9DjQPQiaDV4SR8oRSjbuQ",
  "key15": "3zzC2TUWaN7a3NZoHohP7oNFFKumF8Pyr2WygNXNeC734i1va1dvSZGGjtKp8fu7rvuZYQyyko8enNqFC4ZjAc6D",
  "key16": "AjTeVvMuuEBJLTdvfYLu7xXEoWkspyhAVJFWFZ6mcyAiTDPRJXG5eADno9Bfpa52dGZaYatPYC7wJE6MNku1n23",
  "key17": "KDGG5kbemrzD3phyWVSJkYt8EU7SsQXDHvuq2qYz5Ad2DSXmKjMbhYGxEKYkUrW9p2ADbzmw7yCaw8T1jm4EFNA",
  "key18": "4BXwheH2H6fdTuKQUNgTQdUbo1RksxXHC3wELDM45eTZ5di2iiyyHc9wX94k2up5efDTHNxNovxbwxes4qj8rcfU",
  "key19": "4MY6LzodXRKvrE8ngtCm8si6com43xzP25iKkoZrmLMvBR3BTzDwxsZr7TLsTat2nScXBLiKv7ArfDyeLKiPRcu4",
  "key20": "5V3ppzpgyNvqLb3AF9NiQNyG1yx3ez9qJUA1am3CBwXmHpzYknY338nnsMRLfru8bVPrepYZU2da4GzHG9JgSmub",
  "key21": "3ExpDCqgGjEsSbREwrYGJWw12MHSHukUemCjLWSteq8gxjgjPbL1cauDGJo2EWodbHiRM8mpJAbzZFSngkY5yVXP",
  "key22": "2VvWkJQTTVV2GHt6TasfdeMx3L6NXxVK5miXHUYJvto3P392nPJexByhyQ2vWTnJmMZo9912GnHgaNeRvGnzgTjZ",
  "key23": "4Kyqk7xfZinfD81EyCTv8SCyxyybkiS4GDH6P38PbcN65vuCzShw4GL6LSZjGU8tWYKeYgymCpw9PtfV521U8DLF",
  "key24": "62CrAGUp3ZKebVqu2g83ac4F8vBEdy2NjkEUgmKAaJNiJkNyztzKWUYicdbdPPqMtnHQ7TnFaYBMUPmG9wcX3JmE"
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
