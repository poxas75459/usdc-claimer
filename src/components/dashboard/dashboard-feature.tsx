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
    "baUYAAdmMJJtYfP8JQPKRQWUHTJeqFsbrMw1HiX7FkqzYUG5hnHZrio2NuYxmqyey1MfSg5ebAeUCmvAaUobMKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bwcHtoCF487q9EdhwD9ohwpPDXVBGyy2bMxVA8QTP852FkaBEq1KY3CjxrVG4F1hE3QhM5eNSy9Pm9tGLjPCTjR",
  "key1": "24ut9u8wqWCzq316LoxHZDDebkzrDB6xVznycXc2n6hqxY6NDJSVx5vMmeMuS4YVSDMJGquNHzQMawTiGnNoNeZP",
  "key2": "MkugoqTireaxGUcaWfgvWzcAjUwUaLGGQukoKDFKfHFdt5A35WRu2V82iuLWHep1ut89TXT7x4Y7oJFnLv31Ppk",
  "key3": "3UiPzsV3qnJEXq4UWvcM5h5njdCmGp9LBG2LDbjKB7xiiVdP4QrZKq7sYrqxoMqpaFkTma21uPfgViZbyijTiNy8",
  "key4": "3iQJSjr6weTBAaVRXA4JrUrX3rBitUNwHTWySN3KzvhGU2jUHWmwEAYRB55Un3KWMgzdYV2d55JQEjC4NJwHeV1g",
  "key5": "eF57bPKvxzQMNN1BtzV4xF41wnrhR5ufT2eRg9NmPgZQbKTHsjjBJAJS6hSzfpFddtKMUeTgS3x7VNwBMq9Xm4i",
  "key6": "jAQiemm5iTvK3ajNnUum3JkUBFc6X6WKamFvrw8ioAfJMYmzrFJFaHQ8m4Q8u7Srq9vSyetGZbEChmNSwXuD7ZL",
  "key7": "44fi4KfN7Z4Hd9NLERRbKFWyq423vtVzeHBUnxH2XJczAdP2W7tCKcaokMV1NsnuTyadpXUqUXZnsn55L93SRgKu",
  "key8": "2JhexyK9fRPr5ApamSvMQg1PwMgSEKKBCxWbyHM9NnGFKpoZznc5Lxk3pVWu1r9j5NbjXHDFLCBR5rcXiLQz5ypd",
  "key9": "uXWacnsA8Lm9sAonaF7hwQouEms6fK9G2nRcCo2CJfvxKh7DhTpopCSc9VPhmsHRpTtpBKgp98yKBLMzhjG7Gem",
  "key10": "3s8Ud7aYbZwNMWmta7itAR25fiN1GBmftfdEMbeQNveGnahSmUBndRwAPtYFUq3JQg14t4j9FY7tfQnrXG3PFCjy",
  "key11": "5vzsLFX7J6pvP9K3kxFxMdaPnQ1db3fGPai5WpUFSUHSXMLBsHZjdK66iqMDgWFJYTXieN67zSmnoNXaDQAz94ji",
  "key12": "5xzYjRFUHXxx3dcnuPsX6mkUxhEotUQrhmkSFYKg76TuSPKaHb77b3gMNbunJg9ynmqQ5GHnirYBat7JGb8sc7ya",
  "key13": "T9C434ZUFDnp1JN2k9GHhyUddrKPX64yt2VrSRmmThthEo2oVAJQXYBEXQxruQkerc1gxPhyEqXb8njWzgR3knr",
  "key14": "A4EDjnMLFpVc2rKy4JvbnALnyDrKxQ4aAYoPbJWZ9m7khtH3Fa8dTTtmeeKgZGD266q3JudzssBueK68gP6YWjQ",
  "key15": "2tonjXMWBSKMKtk35CyHyzATsaMTf11Zqy3zXmV1R2fSBb1Cs9xGsK7FLEzKWBLAiF3iN5J5tZ4qz7fFFvoWwu5A",
  "key16": "xVEdZDHrt4fDBP8qVGcJtmBqvTTGr3S4BsYU4D8qRLb4KqnvUvH3cFhQHpbrdBSYRMzemxB9C1ToE8K6TM9L7Sq",
  "key17": "wDEevVYaBpCWMgWy7ViyRa2jdLuLnQdXoJbbMD5op51rtbbCFTkehU81ZxjwMFs1yvKrM4HosYgD2e33YmyH7PX",
  "key18": "4G2rPXHRmQP9JPuzrgqdzkLriFPrASvjytBXbrMcRjWY2xNXVVb38VRxZXtkRSnDao6FGjgEHRwiDJY1U3NRyMs8",
  "key19": "2NSj9mi29J4YCx3bMV3uVejUzRbzpqEpXEWVAGGxfW4iHSramHGFc9T2mQUrKCtERBuUiRbfpN9zNSxwSo2tMTdK",
  "key20": "5xdqrNxTcVwS6r2QkXff7WgWrVYVPdzkMrbQUc82eLZS6zuHpDSgnrvLUUaHEF6yzejgzsUYsCYeSY5e5SdBfZei",
  "key21": "48G1yCuYUshuqC1enyzcPzeZrfNpQEAsm8KGYAwdsh5eh1MJmPnSmftjjvQUQ9YPG6DhecNRmfAzewfdZenMg2u9",
  "key22": "2dvorsVRZ722FkreCD3XmziZP3oVRamLbAd1JuB3rqNRSMtFSEBWdpvZbxw7uZn1uRjZqYFQJWQjtDsMWoaJetFv",
  "key23": "2FT6DYaRaUQj79drPbgXBr6V9DkzLC8J4CvaNPrKAkttHoiJzN5ZDj5BQ3B1y8TX9zr2uUvNs6m6cwdymxe9HGUV",
  "key24": "3ku61MsvWgQc16EDoAWo3EqiEpdedzFrmwxYvHyzSvTbKhZY4gcE5hmB2av33STtzxLQ88YFRF9dKPq5Rj2peWED",
  "key25": "3FcNNgE4GZJfhKZqvSFHSk24ezEUv99VfGjKyiV6adwdg17aESMFD5kzE2NrcivqsKgxzc21kQmyvYWTQ9m7YpwH",
  "key26": "4RU6KLULUD8puQaeWPrFwHWVNDbuN5AsetcSuwFFnyZK2v2WmBBVLZL8VP1N3yNtng1zdYspdqCDuhpfXWbU5ovp",
  "key27": "pXUnqTXMZ5iB6xYNcGaFhbpLrF2yaTiasgESSDSWa9NATjUvHV2BnLRYDg6ghd1zXuTTbP55fqfEe6G3K9izvq1",
  "key28": "2Xx17GVd8UwyxQrBEStDZCvf4HnVQHybWM4MjoJziheFhZ5hsDnEcWxzRcW66kcbPSS2oCBDCzNeGyAaHuSxwSrf",
  "key29": "3Xo3WW8LveoQT2kmYJ3KPsXG29c54R9p5egwNy7y3zfmVY7ryQhm36XdYf2UR1DF3YuwTY2459oPaCzGzyv27Hog",
  "key30": "4ShZEv5jNSj96qFR5rEJxqwvAogZFr25r8DWvmStBP2eTkEjipPFF7KfdAKfMCSdzt788ZxJmwX1txZS5g85R6U",
  "key31": "rbLuBgG8R8yrAZFpL5NW81w34ptN2QSRy1CPJ2a1D86vyruXxEoxpcD8oCa3uL1VzWkR8Dunv68NC3NaxRiAsuK",
  "key32": "4786cYTr1TXcKbRCoXq73phhkwUZQ1LFbdbhV9wAr47gqSDpV3GtQB9Ziv9y3GXoUk8Up54mhFFhQuu3oMPRq6BQ",
  "key33": "42fxdTedX1eH8o7b5p3AaD6Wyg5ff8LBn9JH9oSWPiTyeUWm7d2dQPzpWbf3heEEjNt9Pa6RykHWiZYPzHAQHYtJ",
  "key34": "3AGJZwErxUwiyvxREXwXD2NsSjXZRY3Z4MwtwLaZeWSpyWZ3YE16ci6NF2tZsgExxbLpyvnqthafku3DeKppTGSN",
  "key35": "2kGizzTra5jwDzY4Mqz9Q6qqYj5ZEigkoXNLYKXJq8b8gghnyrJrx8M4s9VubSccrupNSDv7J5E7hQQE2rtCjgHc",
  "key36": "3eXBKPajQ5uRDbA188jY33P8yTnJ25THaiHrWiuLUF6DQdCmPog4Svb6Hp99cJBuP3SMuJkr2xJ4gTX3NPeXujzq"
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
