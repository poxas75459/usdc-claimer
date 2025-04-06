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
    "5ut4ZADjmHYcPXksJPy3ZsZChe8HT6eX3BeNf7YfuFYKgyJ8NKyu5Hj6UcgwBwueD1w6RCoqE982inecdTeGqrJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39tp4fy3QBCyTTuL9Abb7fmX5j61edcdN2skGKmXtCkZFxPL38tMkyCGyZyK3UbefmNB5rbcmHeSEHATMjxAesG7",
  "key1": "QWQ3BLn5ZQFr8KMZgMGBDv8RjMVSpXQdCLX1XiapHiy437gtBPDWRYc45fKTc9LsBXZ5xipN4CBp3SH6t79YZha",
  "key2": "oqv9p59WkVkPV9z9rksp3s5oBj7J48qG3ezk4duZBiZC14LaC87ZbbNrNt9bcXsuUevpv4RGLUMGnf4P9FLeEHi",
  "key3": "2wsHa8rcMiZxTzUNnwZgXyJPCLktyjgBE1VwoFEc4s4HaGKawxzdtW7YeTsxBbTYRYAL6r8DoeTfTCNEmpWWpcoF",
  "key4": "5sD4KWX7jfQKNtkGEF4HYqduTK9etsmDf2urAnDSzWJvwZPmZBsk5KWaop3JpxcmVxRTm4S7ReKv5kuBd1Xm22RN",
  "key5": "5PSrXaGsv37NxscBU88B64FCM4rQy77dy1fk5fjc5BpSdWMBqKGC9cjrKXW4V2isrLDnxh4bstiPPpPecUm2ZKYn",
  "key6": "5mmR4wDGAk6YvCwdVvUJRDwJhwbqQbSGm7LCdSfEND2bghf7pveLCPscAYXtHj6SjL284P2RdRq2jHzUPCEK4A3a",
  "key7": "4UkPySFx7Gb5C4hcZ7UosqUC9HfdLmyiouTxUUrqeNU1Fvi1ADXLBuokU3GZeF3hgksWnjejPx1GHjF8bm1N5EbG",
  "key8": "mKThqFSfVC9uWu9HZMsznPE3o5RFEKbCajKap7qX8uf87GPhAVxae54J9npQC6hvgqJufYJdSo7idEJMsXkkiHw",
  "key9": "2fgZhQDo74X8QYLhWr51Ca7Nb9KEZRxAMSS6GqgEzpy1cZa55Z2W4EH5mbdyd3JKmmLBhNC4N1wR9jUYFpE5Pwh",
  "key10": "3zpX3iYtPEDkgPXuCkS6LvY8FFPnuZx1R7iVgSa2TCGczwomGyKAVhUbBZmv1uBQp1F9rK3GXfxJXWmgiZYrfQkS",
  "key11": "31CjU58KHXUdtbM2xroqWmvCdHpXUKRriJKn8yqCywQW2cemzrXdfbmSFKnHsTL5bPLUcLzhxTWCLj5YnKa13Lj3",
  "key12": "jpL32D5ht29PVt1JfPEZE6PHz6n2Gr4YDxQi4VyqXpPQKJz6bhs44BVphm592Zbef8heEyon8jY2R7VWSfF1oim",
  "key13": "3RJmsqXcL8mu5y4F3RrAZkfNJwG3KJxUfQqwXahQGKxfXMRbNAXBi31NQ6VEwF9uFmhJQ68JT4ePJmbb9WEWRCgU",
  "key14": "3nVrTx9N2yrAJMECRJaStbSfpaMTXJExKNuMT26HPyKchxxHwvnUnMyJet8LNLDbBVcKX6trRL7ZQ3gtShPJjg6e",
  "key15": "3JnLCBs4h2cNEPBdZMURqn53DQgvrGc1NxtQvpi5M8fEAaWyqqHPWPeZVSnph3b4RMRgLfTosKuotLc8P3TPfV8h",
  "key16": "2cxKjy8JFuSHtSHXJYt7qmtVNEajLJ2W7vkKP81N372zuiVsemaf6fZ3787Ucpmh5C4NpdoXY3yLwmmCkZPJx96J",
  "key17": "44yoHhS3BL2k5rpRJTmbKpRYkg2ecefbuzEfNCZp23V6TCuTH1vEd6oyzu2vA3GUDEFMXJeDz4de9yDdJUmUKrmG",
  "key18": "34FGPpmbxbMrJDPNQ9jWaUf96rF22JoG1iPik6gzz3huCa7ucwsXjtCVUCpQfHxdno6goFL6aft5GujQ4LNWUhS2",
  "key19": "3gdNyEFJztKMjeehccfDdoXnoqS744uuphZZSdn4wnVn6vgM31mSRFtcsaR5NzrmkjxjUFRoNCf7hALGDm7wYu2",
  "key20": "SE4MJRKN7ve6BULbs2cXZ8uMuU7kpc9htyaU91Gu7J2Q7FVz9B3qD55G5oqPbZdn9WdfZGKpvLZn8QMC7f8x8x2",
  "key21": "4MD5fRbBLHpiUsX7fPbCAqbnJcVtCzzzqegF5wuoMNLDjJaxHWRiNreDbngjsnzSZzbPCkyGnsCG6pWrLQXXGuxb",
  "key22": "4xMsDcXa6meThwFa7shYs7XZfBmZ8Y3er2YG69ZqVmLdYbZznuSs2BN1hvt48dyHSoHuA2mqUEZkwX6q4ydysyDS",
  "key23": "5547CRQBven5f2Hp155somRGGipHLb8GN6WJYSpSGNq1RBrPXC36mr8LVuKFAwzEbFywbfWYS3ii7mRvja9aat2U",
  "key24": "3CGrNHDoNcY4BC5tYY1MdcEHfytF6axgfrxArr7TaNpHCH66HU9YCLAvTU21Dgrw7n4fcZtVJfTsW7wKnoHAAgV4",
  "key25": "4KSgdfn4CzVTwKwvijofprJv7Fg9BaKh3WA7nGuWafyJG9baTcN5EDGwX5r11N9He1DiA6hNifvzFefg6KaYZ5GG",
  "key26": "fA7EwarLKC7xiVt1KNHXWNUdounPv5cjQdYJ3smM41rRnW6tkD2mkLQPZemxShbTHK2aUMYjgtn476UpPD7s6MS",
  "key27": "46EDnFXQrDd23aoAJgat9ppMRBj3wBhAH89bAe1y7Auv56682TP3M4AZxESsEkhxK34abkrhbcDSMryuMLTZAP2V",
  "key28": "4tohzDqTmR7xBrEyw9Mc9fJQUvUp4WWks1mx6UzgHeAQMB6MDMQ8N93tQWjtCh5z8kKSvrMTFiBFx7T6VijYgsNZ"
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
