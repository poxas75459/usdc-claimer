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
    "4FTyPsVCXA9jzoyUzemXMQDyYzQRNBgZBew4fb2qUa836WCoi9hgnB1B1GGboRDczgmX6A5YnT8mrgNWmB6gTChM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VD1nC7hbQBfhP1aCttVh7uKj4PNJWoqi9BEgUCiSA8NfFSfkxCGVhk6uFkF1fRK5CH1MxBGBviPnfLQaBViWx1p",
  "key1": "3TTEhDHDLuSSpiYEdnpFHFtocE3473uFY2U8D4CW8qnSTWzfnTadxpqXchCnxj34iKnQDHonkHmpwCNBEZeeyJvK",
  "key2": "42PKztzqGDNMRhJJEcuNqKqcZKfHyPCwk8C3zG9ktGAzdUZPCZGUWUS15AC8qbMpAW3KwXAU37jBoqQGC6Y21U45",
  "key3": "2Nfw6UZgX66PgtJuN17gwsURVjc2gSHZPhoCKh5RiRsLMDJp1W7Zc2oXx3xtBG9uHELgNrgwc5LntrBJexggZ6sa",
  "key4": "4ec4Y8CM38iDDTpMpL55i8mN9pzcjtUiE2xV3nYkj9dANNcSxkz2me6V26pQhHBbPyWhSsfmvxv53wnCU9dPBu6J",
  "key5": "u1PxhwZptaLEgkzfD3NTYEMHk4eMvEL5DNsFWG3fcjZzXhKE8CdTaK3VvT8GUmyPEzqBRiaAyHqjEKw18nH76MS",
  "key6": "41zyXx92BqHy8m9J4ghjHKeKybNjaArVX37SbD3zYYbQJDbFyWidze9mFgc8nt7WjeXpmuoKiUusdgQYBdLfR3XG",
  "key7": "3LTwHJ5TJqAptfDA6BBKXsrbKzTV98ijNkdkuh6AN1koRkbyASKcUrGC7DBJD9ya2AKBhxULjxeYozemHu86rsHV",
  "key8": "1tGXo2XJbJnVhjiiRdYWf8uCzw1bd3tojmUs9LdW5cVbbJY27UCSq1LW78cm6vSkR4vUes4ShEt64KcKeKxLUWF",
  "key9": "3fPzEpw38WHMsTGisW8Ez17jaKkdD3yrA2ms9TDgYkBQ4zbNWhcj9fX38jcTkNsiGMM5NfwTVEDPFRrW7zogqDvg",
  "key10": "5FXsccyDrTe4mM1vrJGhgGT5iCkL43chMDXQGeCCcK5vLcVFKSXCscFfC4LyVjaa9hexNaZvmPoNk6HVbwktxUtJ",
  "key11": "3MWmbkj7AZ3fp7ziNfHpYQuY7D3SgsVtkgVjVbSrRtvuPfrwqq1ZfrwbjAxUj3Q7k7ZSguaPkfWpxUkmYaoq6FgF",
  "key12": "4ErWZxRKEPAVxkKRByNpk6VmPgx1896hM1nhFahFxgNGc4EG25hHRcc3iW6KbXqi3Xdjt2DdJJPtfJafhqw9ghY",
  "key13": "287jiAvzS6iU4zAiVA3jFhcPuZedbaGtykng15QBrkAKNcW6SRwoS5qbEJ4ic9cSgP6YbcjdeFHpWxBVrD4TkcGV",
  "key14": "2NCUzmXnWWFSct67kfB34mH4sH7H6EDLmVmKgRBW2QvePDmzVwGfxqfoFN5oKv7yzyGZPvnhkuuLznVhDEK4WYga",
  "key15": "n6173vDjfNyV46xLpMmFCsdgRPS5asaK7UMZeiHvfkxBMpf9sdBwYesiJpx1U1hWsz5Er2p4jw6ezgeeb6w7zP7",
  "key16": "42kqZMSdn9eW5G8HjbXvaUjzGnnPfFmBfVgzQbQrFPTS3PQhrCT84fjEPNqfmDfX5WAP4bL5172vD39q9hqG3aQT",
  "key17": "2hR9AVrqvY6y3DXfbydVGPt6a2VJ6A5KPn2xRHxWccSpZk6zuwW5R7S2SwMhLv3Wv9crS5aFaEt38k2NqmnoHicJ",
  "key18": "4WoA9ZJZE3qCSgysTTBmYKH812xCJaqWArHEMqycnXASptj43tW3Z1WGz5fWvwTLjHceSGkWfKZMw2MXrbsGGDCG",
  "key19": "5ZATB4KwKXN2VRFuHDrfEbuStidABciGaPfFcC1hVtSPQtU3jAroAcmJgAynW2p3pTuT1m9N4xEmzYMNM6Xb5fjT",
  "key20": "4yAfJmvSwjcehZWix2qTt68vGwMJpGx2stBstb45691iYUr5NS2uZj4HN9NMivCneByAhjQ33fq59CJvj423gt6P",
  "key21": "24iCbopPbQ1kwve95RAdKH7ywbucAQMepyro2NBLocjZM7gZBaqnPfTocnMHoh6ArdKAjsuQ3Cu994yG26FsBuMt",
  "key22": "2k287teyACts66XmJriSeMa2s4N7RAYPymwwpcnnZiXp2utNUHypyfdqwrXX9HP19QGRqaW1oGhUs4GXqdveg8Dw",
  "key23": "5ePYbuqdJ79mffNdEbfpkCYi17LzQaGu6tc2n5tGbYcCTftSQiSQE729yhS9xCA2U5nm8MWXCZA4SckoCBJUhJFR",
  "key24": "2KRAS8A9wDdJV9XjMuZUGs3eCSdvK43gQuJ5A2YhHuBNb2eNBXRX5mrZjfQxyxe7384nARzxsUPe7fQoLoenpjSe",
  "key25": "2UC2fYj2quBMAt7zixfiR4AU5HeTmhCRbkVdwKvcpMNidRwPZEPHiSYuVi5ZNbDgHBHLWZwqmuV3AFPdhppxQYGy"
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
