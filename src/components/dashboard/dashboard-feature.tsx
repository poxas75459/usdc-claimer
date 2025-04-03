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
    "2u6L8cnjTT1TZGsMUQVry2MKBDtf5c5pHmyocJt52aHUPBcWfSAQx6p7vV8NKMj24HVSkbsKFnhgZFdTmDhZtBt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46oSaEqhCxqbB9Zm1tpBBeiQ3FGgSd33mU3mCtygCp55xpEPQqJ4CFaNQAbtYvpbb3ckhpKHP9zFArohTsSL6T5z",
  "key1": "2Jp7ZA9JvjoxVt1gBmzQzd9wLAgKBikXPk1ssbBmBWEq6VTuWMMqU5oj2Kn77qHLnvBZSMKeTP5mquwRhmF9vmPz",
  "key2": "4tg3AXcMt2cwiQ8TagGLp4uZtRXmuntXhuBp2RJoyrwq5pwqviixtzGqCiieMyMQzgcYiJ5UiMf86iT1QbmwBC9A",
  "key3": "3pe4ETZ3dZNh5o4UiBmYzxHZvCWPFCokLnYbwSxtCgPbxVQtxo9NvrD6aTbX7Eyg3tQmhTpoJ81h3pTFyQNrwXDx",
  "key4": "3pC55xE7EmDZbpZkPc2SF4hUsYRzo79mH7k4iJCKGyHwBMZkttXLU7c92MsXFLfxjP7Hh8h1nyk5qg8g2QXnwzsL",
  "key5": "5WxaSEhZLpvEsuuibWWLsGLjqmNoexg4Yr1xQGTqi4yrEZkFY4MYuumsTVMt2gCFkDUTtTub4jEsJ6WXpNy1kgvX",
  "key6": "v9BK19F8sg93YuGMmHC3EsZMTY1U8mDsweh1NcYamQCJqcbQFgmpD7W3WreP4Umvs6npE7jFWXpzaq5PVThE6Gz",
  "key7": "3nCzxRQYG2htGn62MVx92VYaE1RcfhCzyJhAfMNCVgTAcb4MLQMDaoxkVrjF7vU5PUE5Yp6mjGkQfjhpSTXWYJcE",
  "key8": "5kxgSrXrEb6taE87RBmUbi9qjdu8DfXmBxVAKPwAE3h6CLcV85guWQtNRS8qLnPrp6UbG7a31oa3JBekini5TAmV",
  "key9": "aEJYFvwigLzRQfJ7ndJodwFgdtiiNdz3QAf5vyWvrb5qDNt4yBL1q3UfYjGZbpK9f2zkNzech1Je9h4BFvtxP4A",
  "key10": "26Q2v88PC7pnTx47haMDJDpJnctes4Gjmowu3gTXx4HUEVGmhYrh9hnUttwD5WCdAQZmL7b6oUUymdswZH4v5wgm",
  "key11": "5j3Few84HR9GcwHCvdAyZNMRG8dykFu1ueHbeqXD3dnvNenPpuwTXuWVhWU1zAwFgkgSt1fFbxBD6nsCQtEUxwJo",
  "key12": "5X5Qh4QvxfB4x1JaCBxBUHpKagz4dDk9AyXrxF6XiRWQ4Yard31XE73c9bZha3NQ5GqspSgxuwiViQc7gWYRWrVd",
  "key13": "JaEanzFPyPCHq94xFiEbB1BUet54qToBEdr75G3Uct3hEMo4BF95ig1RQs6sgTEu4zou7m2PiHRN93SYyY8AbLw",
  "key14": "9PSNahfX5P49VY7Q9pu9bXWo9FwLLYWjz5cbwhSqZz5iwTDPVPTBYAU8i4Jiu4g4oDPPjxcZQ6MRx7Ty7mCm4MW",
  "key15": "U6GN6f2xUni9X7nN2hgCxyqo7uGfFWa4RvDpwg2Bur23rvXiUH6HbvWJFhBYVm5wuUnSwJG5Son1682C3jtaDd9",
  "key16": "5foigtFN6gCzANbPxhScwboS24JV55tgUFfzZFXn9WDZXLDAjayr4wvPmr5ypX78y2fp9ChHwTFZCLHHjKZ4JRqi",
  "key17": "2Lk7bgq5dNCHXWaTAfy91BQSSen3tGYQqX3hhyAMttxL2BuHBKHYWP3qjqbT3ESZXUQfBMRz7ezF3Rvz2immQnCv",
  "key18": "2ZPq1zaUiunBwk8KA2Ppj6R2SzCiYzvPNDbv6SyQYYkvbBhKLkrfGnccs7CCBf4kUoL7fB1JdqdLhE2YaBsHC9p5",
  "key19": "2EJEKuLbqrAkXFiMZmqGJ5P3oyR6t91Q69DQmq1bH5EfZi4DvZBgR5ufTu7HWzrwKkmQhuqsR13T9MY6bBevZGGB",
  "key20": "5CvpnYZA29kGncrP9xuu9KJRuUZJppbMBk2rRE2kLjR6Pie9BZFr36yEk9NXA395TEioB31vBYZxS7abpm4pU2oi",
  "key21": "5wCRWtPrULFCsDyJttijPMjDFatuk76qaVSrfi8Pia98NZWgn7rE3kQLsu68NDg3yKzPoRrB7rYFhGjxRd6qQvGz",
  "key22": "52WQpiDknp3RtacsCgMtKetJrrmECBPogyrM38q9U41RSjidTcSrGboaor723EJqnw2hqaiwpL2Ts72FsRztHHEj",
  "key23": "4db5sk9d5h6Dj3qyqPoNRarHJyS5pNX7JnU56SDiSkP7KzUsEAJYkzDMzr6mmjCzEjMMHuefMfSNYxWnCpDbfGLy",
  "key24": "ZQTGxWxmuPwHdnXPhr38DFwNd692JYvMLuW6TCpGdNnQrbxSB6Vof8FSoiGJcdmQByiuj6TQzj3o52qvfWADQUv",
  "key25": "3sfHqtNotWpCNE6RkZUJu1VR6ygdsati9VUpJ6f5kUuyLspNKJJuzXdASa8FJecJa23n93gHWEAnd9h9EUJCbKqS",
  "key26": "3qmU5DvtaAo8GgjDK97VCYpVHiGkbw3Z19QsmQD4CCnmYvEUaYdz5AbZj8qXycvcJwaLwuEeHSW7DM2VAMSfT6xq",
  "key27": "2vScZ6hCt7CPVsLuvfUMrpYpFWTLrCopxzWnE4zFx6Tacvagu7WP2YJdedvfr41i1U64oJJcLAkp4wpTjfAbA8fn",
  "key28": "5iY2TzaTXbQ1nMp6varFYC8erR7seAP2Mjp9nkRCfY54R7EAkE9NvrUuPbkqcdWP2L3fwzL4SqSgu65pNpwjAnWj"
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
