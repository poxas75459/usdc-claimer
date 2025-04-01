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
    "4umC1GwQxFpM7HDiMX1NsCgDwG5rZjpDj9bLXc9XLGtwRqDsKCaCieWmPQnerum3QjcyWW7dEC32Y92ANpGA3YLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vc9JoUff1KKSFeaJYmFvCK4hMYkEsXFpJfpNdy8upygdKJxSkDviyp1xQTPa5QCJqfGiGyhToNqfhgVPhGNYAAP",
  "key1": "38bNXeNaqJqiX64XJdvi4ryfB89S9zvqfUV3gJGP7XuGwudpFhSUzF2mki5bvNvkpHP6EJeFQuLW4HC7DDwojGrL",
  "key2": "51EogXrY4BqbFXbQTkCtmKQWb3Rpq9Qv7dJa7P54v7ZYxuYnUYXRGJWS3o3S2MyVEZRnKjRzxLRoMVt7sVRA4L3a",
  "key3": "2YzAEWuZtSZrbmgnQLAvD77Mx2BPs2bwo5cvR3cKa8tHKtFqLagxQGPzeyGaFoWgWaeJRD26AdzjNyiK2VNtoMQC",
  "key4": "52wS6pUYLNmHVtUpxtHxnNzmNYq3wrWN516gfWRpEMetzrweKtQFV4TiwaQUxqP7xwQiawPkrADareyn83SqaY44",
  "key5": "4J3s3mjSF1x79oKUhxDXQKN6484KofmqFadyT18kJUHHQyfCdwGc8e6sCxnupoChhqU3fMuLZhdwtwcFdj42wVJG",
  "key6": "SpxtMTAodra81T6dE12TNaCxKX9fTnknXYpB3LY7uK6TDebSf19BSMBNnLKMdSCw3TtATYeKUJrqMkGzRcKmxYa",
  "key7": "4qSeHZ4sDSq1JjGLiChgEVuZ8YNeXj4NFUhe4kgfHEGhriPECynBro7KVhnDco6sygL1d8NUSwtgRNuUhQe8YbuR",
  "key8": "4tHwQvkjARgk6SaPcWJZyt1XF4HBieS86G1HGQtzsK2yH3aj6UgsFmQi8curBrAXZKiuvAHU9G9A2z2siGYnzRUQ",
  "key9": "4JCPt2dRixGyeEi46PcA6f3dZzDfFpT9Pe7LaCTgMxK4YSoq3TuDUKLpoFwJFLyypL6sMEwM2YP56siZjPWZC5m1",
  "key10": "2GNtjana59ASf25EJkZCVMtTzvHmygmFxAmSHcVRqDMqvbGH3262Rwzzcq2taA8aZoNw11q4kAVSMpmRqmhpGTiL",
  "key11": "2VXMGQx6sXQsgrKMMtMMxhGE3zddziMc1esun5YsctHaZxJbSc9i92Hp5Me5f7AubZRFxW9dKFaNuKz7CVCPKUyg",
  "key12": "3TcLkn6Ds2aWEDEXER21g42rBsmtQsw7T28YafBMyzMZbFpoDSp92WvuLeut6E1tHtUCnXtjvUGbnoEJ9Y7xEQDS",
  "key13": "4VpyHBs2SbgzzA939ks5gm1XA8tKuFDDK65m1H8etjyF5Lxt3QVvGCyZvgdMaxdVPnB2aByFV45iYnM5B4adpEyN",
  "key14": "5DZTpBTjgxi66yxHXagKr7hSBF4ioBjJy1SCcP4tXzafNqmFJdCyQQ4VbmPE9e8p55dx8C64wXMmj4HVhuLdNKRf",
  "key15": "7sQUdiDmBaSteBfT6sTX2ZnLj78nXhRry1kYpAtKdfqfiXjgRm5ECZibzKShdyHzqVG2x8RpaP1Y3yuLSMG7pCs",
  "key16": "3yibP7fnxv5jJNV1qPdbdJDpCubovyFfUS2UVsjAy9K6JPx5DLeNzrGMgAmvG66msigEqJVw1CWBiR9XpQ8HLncJ",
  "key17": "34Moqz3grjeQcspyU8qJtQK353KWjXHUBiMt3QsCcr6XhXXop38HWHhCPHb5YnHFgiCAJUMdCYR2AVvTHGTQpS9q",
  "key18": "647TkLTAN4NYjW8viNcoNk7RmnXfC61GNXZ7mzY7S4w9pcG4pqxR1faqC4jhgQUPgEmBZTNCgmbVdaSZf3UGkkev",
  "key19": "2bDNfvnRBv839pPu5NM2UboPdXX6JbQ3w8xoizuN4osUtHPYuvYyATYqddnb2ca1RYfXJB4UoNdEJ1T8rEDXQjEo",
  "key20": "3V3ebYXE1LiwrfnsVEQxSMg6FSnUkuwaNiXrANnMt47mRqdv9KL4RCweaRozFs3hPac4yzfRdAFkT3tLwXne3qfx",
  "key21": "5w3pjFoc3o8UQ7mbNum1ki1UfVwiTGDo4bJuqLuacEKimbFDQ1y2J8ibMyBSWNrSkgokMCvwfdFrz1eaS84mjzeU",
  "key22": "54yBdf4G3zv2K7GMyYWKTcsFFw92ZChJYZCQKtqK1Yp8m5DXWihBpUbytH6yfcs94duM7sxDHiobL5EJFYw1twMk",
  "key23": "4hj6jEYfhmcnKVjwqFe36qco8MFTixQp42H5V6d4EErLDfSFhBRwCss1Y8XraPBrZ2qh3UT31jiFgZ368AFRfbgt",
  "key24": "ntfTa7Gr4xd6nyaceQqFXv391KmT7RTgF41NfwTzrNSQuxDdtvMbopXXGpbgVtY5rwUEs915XWTXykhfzQe9egt",
  "key25": "2GDzJUuJQzaBmnJNQfKiMStSbAwsDFHHsMqjQcEjB78CNq6Vr3hrN7qVGRgGooqrQLQtDAvLrB2EZMLThL959sLF",
  "key26": "5xAVZk7seyRxtHYsyvwXZnVMJWZYZt1HVhuzXEh6h2hM21L66AWGrm2Hy6aYUD6xJ66v7aYZnHxbK5KWNqzvMNT4",
  "key27": "2J1EFWW1N4GKkLrvYRs4JJ5fgMuNkhsCjZkLowSQooZTSBCcbkfeWm1w8VBVA9iUMWtyrsr8eDNnsLXvgSfxLrvU",
  "key28": "4kdYwKRNU8G2PLwDwsAccFP9VSyPN42T2KPD8HbD65Emo4igjEjs92kYGZdpD8gXpBcZwPV23ZMaW4xjtZ5tSnmn",
  "key29": "23jMsDbZmb9Y4AXWKi4Sz3ZwnZGtmGNSnY5ErUtRPfAPAPHpGiqM4bQp4FB43y61jT2ZqcQ4Vt1YWxxNrZxihgaT",
  "key30": "2svAw7PCL7tU2cPLsoxVanPZUKcwq9oLLE3zDdSE94hr27XKbkHFjDy3swSWMqrNeUyCVSLiqgh95zSR8JfqEs4r",
  "key31": "2RmRvywynqS4CZrifpSaULx1tuxzu7q3zTXBmZmwz6gzc6H6tfzkr1GQEiVjgbHXp1DrBoPoVc44Ug7UpBSo9N2t",
  "key32": "32vYPMzaQx3B12FHjm1WedhgfEqmGp3iBXoMdKL9sY9UbTXc8m1NTbeoa6uMiM2nCT8KxZjqx4G3FwkWZ9VyRmjb"
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
