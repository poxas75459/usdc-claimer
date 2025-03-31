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
    "4y6LFaYTkB4BdehHhtf8NkFDFkmh3nJzzfB7LmVdeJikRLEi3SCEQTqqJqxvPm6x2dhUUywddHyEkFCqYJF3fhUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2shVDoxYtiqV1EjyUcKMeiWYTZRksb7eCahHP2hsTYbZbZXGoWJhDRVmW9D3BpE1nQLUMBmec7uPqUbbUXYJfjdF",
  "key1": "4TiUsvY6XUhboEojPKYVp4NMt2zbMrnVMT4EaJr9rR24wonj6vYCGXETmG2Wm1DA9aLWFo54RGvEbhLz4uxVBsA7",
  "key2": "4Mzi3PGaocwcD9b2UTQ1CScAuTZfXhG3VpzjM9qcm5xgf9WrbP1rpYQRoAUmWyDEa8cKhpio68rucvHWa4GRtnfJ",
  "key3": "XVfGniXUbzbi3WnQJYauZRrZbay9JJqwks3RZpGBHqGhSwUnEdeScBUHEaXH2VHZudnquRhSR9wNY8gvoM5tg63",
  "key4": "5TGFB3DdnAterrUqLasFR4hf8kTad2p3Sk6SxohYyEzpsE8yNLmLSdrzVj8xkTGZhFZ4npbsA4VCSSu8NGhQ3wb",
  "key5": "4XdSF3aPEUR9MmAqwrUup3ZQQgfqvVYk6BWk3vBXJuwVBuWiriz8bEut3vtrmBEahWGxriFnxWfCQkRQ82JgfLST",
  "key6": "2kafnCKcpVjnbECvX8CsUpsyxGGwuDnkG65JWGtokENZp4kFCkNCML7ndwM8oSQC6h7hhQdCfTyi4vF6SW1kHGRP",
  "key7": "4GiWWdgxwHvExxzxMURqDD5yadvh3Hi89khFqhKmj5AQYGUd3q21KDuPDzZXfuZc5qWvtcg74XmH6Pvq1CjiiT1J",
  "key8": "J9UgaS41Vbw2kDS87W6LTAp6Lnrmb8sZqvtX48SeMAhUMHUmkLRhMHvRnTRsAKAY3rS7FxyeSGhbL1EECsuUB5m",
  "key9": "pYJUQGVXeWPskPj4kX5dVnDGnBDaRjw4B6WioZ89c9Uj22dx27gxWMLaiEPY2Mqeepi19W5MP8g72o8HJNgQjWE",
  "key10": "5GxJ5i96Hj53999yV9HgCi6BBueJfFoeF9zjmtNEan74GAXJaedfAKWJoWSAuTuWxtNS3cS64DxaaQcbEjrqzR7C",
  "key11": "3FBWdYhwtiyr9sM5QbfTVU5LxvQvcUGrvinsNi68TKvtJi8eZGQreqktAzWP4D2hRtiCy7QgzR4PrePxEvUJpU3W",
  "key12": "4Je8rXcij17TyU1nCksvtcJ2EdzKrhGPUJJPKhAA9u7nQBwoiX5iHMR8Es72iix4QzFuSkuuSMAsi336nN7Lyao6",
  "key13": "4Kh8LPdEicaH4wiLW3u4sxRmAB754KEydoibcnVSZbpVaFz5Y1LA7x1aYAFwFKe9HvMJ9SaexnbZAdYrozj8BJjW",
  "key14": "2W5ZZ6tbnLqU39RYhGkgHz8bFY4TppUD53G1NybMraCJbhYoQ6784ciNavC9kZxin7tJwPEXH7rCuEY3tw4pkFFq",
  "key15": "4nZru66zuVxQMpJiJMHtUxB9VEGK75f2Rh1Sj3cWnfQWkPPoAR92b2iwpANNX3PHJrzLMmCEUNPbQdD4zH3FTrUC",
  "key16": "4GbUXo8eud54mbs8zjSxv3376mygwyAP8muarKjwjqYTwLiy9eH9CZ3xRBm3g27b6tn5fzySS3bL5vW77GN6jDze",
  "key17": "454rgFuYaiEtHzBkco1XTMM4nAoCkD55P82nKqb9BXAFrcSehEuehn5X4vCGGwtXDCqMQrCAMuxzLW2ri7rpZdos",
  "key18": "3CvMqvE5RV7H3xQEBoen4gzb2haNdkPNrc4rX2AjKZbCPJoFUNRNevzVscdy3VegRNkZXmxBVmrTybTQGCiD154z",
  "key19": "4GARDSribQpm177GbV8sbcoMfePtLWoiTNZM2BVgKD2faL28LkXi36bWHof1FyEXz4qh1WyVmRTjDVL8F2KMKawH",
  "key20": "63VCqZAqBW7vYZqvFoiMPsYLTeV1K3fty3Wz8ZHfwzE3jA1Rmy4d7SiBh6L1VetxZL6k17ET6xczyDnQTNHWzv5v",
  "key21": "5vTAQnsAz3A4ZQG1CnQXEUWm8fntrGo2XMvtxTkdfE7nbMgX3nw3WJmVESk8DSE5sxnoyTPVZy95kQoTDRzJY8rz",
  "key22": "5oRpLra2QDSux3ovq3r8nAbxfxtDimuL2DW1sLjG2L6twLmYaJXZA6CLhTDGCvHcwGGKapvqpuw4M7cyZRxSj9DK",
  "key23": "2gNxNQnj6xdGG9dzfpLJJrhQK1y4HbFPcDn8sJnMpGmRdFuRH8ygoTY47WxbBTVZgmbU6de5n6ziRgC33cm2WxH5",
  "key24": "2m8biCZjpLS1sJDed2qUp37QFmC9hhPiqGEebm9kjto7aR7iK1cooP85kYosGxQGV14tNvRseLkoQnuLCahq6T9t",
  "key25": "35APyPDSdzLgQ3haHhZRGyfArcxyicLSWNuXxaWV4J1b3WasHmiES6MGG1s65fLoj8wgYPPdr14NUPgDdFQ6duSY",
  "key26": "5NZ2ZHuJ7eCvEX2nV97XEe1ArkTrYb6rBbcWCa5RXPwjTYh8QdDdTfrW8U8hDf7s4prv6g1EiMKbTYH3WJZKxvv7",
  "key27": "UFWS1AiN84Vfjmnr2Ke7ERT99NQfVP6j1sLMNKSqWDKtc3Nb2TVXkShziSdNPPR8gm1hXonyFZA5WW6MeV1dtcy"
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
