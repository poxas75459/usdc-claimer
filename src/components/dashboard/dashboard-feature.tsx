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
    "pmeTgWrKAPN1fBE5s24Rf5LBUMf8c3ePzTRnAbtrYbGwt5Jc1Rp3E3LYQ84c31rtDD55fwMJVQRSi68LFgQaRu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHr44PJRqBK4bZafSnUeHsBkRB7XoHABzETPFeJKtHGWdhK77r1yYkr2gT6q8X48tua9uwuwzGTu6uyiT4qrf5K",
  "key1": "4k1bzYG3SkS17r3VfpizutPnUd1H7WCVkE5eWvUiyuJogFoX8W6VMK5RFwFoA7nsWqDdeKqqSjwGTMtBeSVdrmex",
  "key2": "2TyQyw3Yqyfdfp4ykbXY7SPeZNxJfNc3ik5DZ7WLwyXyBMguqSfm42r1mPgdUW5G9ZSeDAStE3N36QNGDEyo1swx",
  "key3": "5gQdJmYyAyHaaV5u7DjvFPmnXtCdHR2vfZGBUR1ZoiGKUNgWPf7Fu69Qiv8381nZioJ6bowEv73WRXopPeKghnfa",
  "key4": "5cnpfv5NAS9n35nF62qGLfRtEX48wWpre4kwJXD9rsJ7FfP3pPfRzV2SAMEEAPG3MFMmMr8554SN4DczwuwzehA2",
  "key5": "5kVBmqFXhgXU4F1g6H9x5cA9DhYWQffQZDYvFXf8NpkRQu9yrCUi2RreFwZ3eQ9iciiLWaUSJenMi5NqTZZ1pyEZ",
  "key6": "3vVYEH2XYSAD2XLcvx7qX4iz4KEqEK4DEQytupRHxXRi6eSWsRPd6zgdQsfxHaTugvnmva8VBQVBtgv86W3S7Rcu",
  "key7": "1F6T87P7eZ3ymY1LbCsvWw3xhkTBPCX4xqmL6cbcf4nekqz8EDnWCi9JrDcWyMn2ueqKz5itoXcnf8xiMGE7HTV",
  "key8": "3oh5k3z4ed8AXsyBzSJf8L1U5F7EqdVGtuCezhggGRabYLZFCwNArfosdCEA4Q4r6SUjd4ecrTE59pxBKZHDA4oy",
  "key9": "3nuTL2A2WBv5zwfJBoL8Zd9Adk7EAsjbRexeVV2kUVJ1sC2Ukgv7EVnBs1gsJcdZaQCoqaAsfrHsHZwTVacnh3F5",
  "key10": "3ZtYiHaoy17YDQ5rzjYHeDf1ig5pjhKrN9BphH9WrSyuWXnTQdcV9bSMnWiktapsbsKXBj9hysnqkx9rkGMF9BB",
  "key11": "2Z9fHWGhnoacqdyv9TJjmDgbAyHnfQSzdSgBNWRE9cwQ6CZGPX7tMYcyWZAA2ueAS9pQkgwLuUoBEyqYzQV8jssK",
  "key12": "2h8VFBtfXSBzjTUTPmLTkNjGMbifkTy8p5nJF7CuNhRpoPB1RiKsxWPVsHGnGgjFqVAXp2SJ2hFh7Tkx3Yf55UeT",
  "key13": "2yUxBZVJnHBQsxGJ4svBHt9KeXPZ1yQE9EyzbxacZfRZDmayv6j8mFKTXht3ufe9LNSZ7T3SMZiPQZSeL1ir1EVp",
  "key14": "5Zu584mYUm3fggxEVUmrTKXJE9YPBvJcpDAq9Vpm9ueidn9yj1gKxyMhQ8CEtaoBWinDvVytgZA3f99K9VTRviXL",
  "key15": "dnEiH8TDW34GKsJVYT5f7VooAQg5iLz1MSJZWULVeK3kgcZVxpjrHSZUkN5gcg3WKoq5jYwQdcuLicxLRPASHmv",
  "key16": "5vW2Xq7zyV85ahXVhxo35NwzzA8MPAJ99Y3T7hQ9pTe6EEoHdn1uCpg58xwB4uSdKjN7xdRnJPhkUFxs7ECCt6S8",
  "key17": "2vWuvhQvyM1beXjkHFt1DwCHdsBaEV7j8HQLdu4focznU3sURuvhCBCDZbChuvkgyrpDgJ3naPMnXckXV5qPJovA",
  "key18": "2MJ6JMC4p6fqywPcKHcnra1YFXToGvqoBxrXj9EGgb9m5ADA1Rhaxnteej1pZedGJJpg9kgwr9cEViDS64g5XauL",
  "key19": "Tb6rDpuYByL65YC8UPMhdwQpRsNwnYvjHY623enodPuoLqCqt1jKKELcoZTM9iFBe4au8XFqiL5cG4ihBpwUKfZ",
  "key20": "qwuLDkCLJn2EwDeERS1KGw3U51y4ev88AscCgsEcTppELrPomLWoynwv6SN6spza212PF5SkDkL85Jc4egMqm7F",
  "key21": "3ZXqsbupAQrieht8MFY1iZ4LUrRpyC1Yiqi5bgD17g5HUngeNKwacj3oNYTkep6nxQdgwg3QLzQ9nMYDwdbtUbZ7",
  "key22": "5cYnPKRpJfjy5uhDpUEM9aMnBuGkA5CdcxzLcS6ToQX5xwgRctVQ4fgZoDgfXvUi13YL2EH8GiyPpJdcA2PMbogr",
  "key23": "54G6R73pAnx3dPVe2wmjkwUpsjjGu65zweCa6QzTEfeKgxiUsbfxoZ5eDk54Pk1yVyWqFN95ji5snvheTf2KmkTd",
  "key24": "3vZSvuedLDdm8pW6CBbE5S3btqNjsRaKyBJrS6SeqALyGdDFH6FuKfD1giAkyoax7yc58zsQi1Rg5QT8UjK6vUYX"
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
