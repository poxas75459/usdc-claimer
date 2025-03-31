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
    "2KbnAXc8uhmAeKifwpKqU1NdABWrBjb7xGLVBRe9qrD1S9Na7XbX9QgnAWACpYe9prfgbGa2yAJZ4MNFenHhnG1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTyriRY5ck5Tvu9FuAyf53dcp82mAZx14RBVphdrX4VV6irogVymTZXNqHrwvrGDN95Xj31cf5dGMs5WAR4ZTZY",
  "key1": "5pETNvGDRiyxZ61uvChJtLbrgboCfftDrt3oiRCatiJZxXwJ2rinHyqtPzDACZnfx1GU4qwm16g1YFdAKjWocDfN",
  "key2": "2cyvb3RUN4cbUYzrUkhCZ5ok7s32ykiPmuv7xB3KcyoWgqN1pVee7ooM7DYQgckNJ2iqr52h3RSXjyw3myxpr7fX",
  "key3": "66LDiNcukcruKbYXGpqTVpe7ayWoLThYRXuYRG35yZDgkbhboFxBbe5eYcgDN4LH8xqjUKyQWHDZay2PfLHTNicf",
  "key4": "5ecKfr7dMwiuoBkwfs2nhEfhVLQXYHgRE6RyLgoQ1AKo2Rfm43tPRXx4d5ic63cRJafGAP4EV9TpYBwdBU3nbtdC",
  "key5": "2DnDFjRyRjgscg8ogkvEzMunCA6sttZiiLs7EHG5a5wiHTdh85GL9jE54bXhPt72fzfGocj6jAyrh2bSNCRR2pwB",
  "key6": "32eUYUBKLxaiG3eN24QjD5svqb7t1TCSyFVgbMQaquWXECScqT83wk722DNi723oauSaBLQjfY7oipE79KdCzqJq",
  "key7": "4S5mzNmCPanHqMMDdyC7ew8xPJemV6w3VBYRSVevpTWbGbnm2Dv5LgZDXc39qtCJWNZHEvAbNbzVFQ62e9ezneXH",
  "key8": "5T1qqqsqhquE23bcuKHB3ukfXCBZPxXGcZ9KdkqukGncPihXrW9mRoXesZRc9TUZNQ1bTebb8dkuSXVgS7gdgUK9",
  "key9": "MEXp6sDFb3aVqrsNB7nSiJkjZuEGtvmT5kQjrxr2Ls5cdnZEtpC21RygspDZUSzwmAHKoWFnsAKt55nZeHGXoH3",
  "key10": "khfA3XL3WGp8tG2uZ63HugCdvESFo5dNNS8r9xDoFz832xYffshKZANJFJAZRjoSpUntUvG3jqiJqwwbQrnmGxM",
  "key11": "1AEG8HWz3kvzbKEU7MzvukJr9hH1m3tt38RAhEVf4vnnL3uaxAa7YGNBLpLsmYmBksHurG8jnHqfcNTK1LqbSRQ",
  "key12": "m2QQALFEZx9r5ApMU3uj4MyddpWBUkUGvnvtLdwwBgQ1zWFi4nfqEDMjJcahr78gtFV9Hc7jzV83Vbgh1iQBcgz",
  "key13": "GkZa2LZF68a2yM5TpXZAbNLt4KGVBaR7minAt7CpoQ5FR13oUe4rp2C4onH5yCAtfdoBanE7cLcmomz7TUwNcxm",
  "key14": "5LX2EPkS9je2AijxSVR46W4PMHUgE4DhbRy6RSBA6pGppqPVCBDu8u9qyd1hjQNgr63Y5Z4mxEHrG4Nvgbps91cM",
  "key15": "278CUNj9n3SS87VSf1yqEtrbZjaectMC1A2GGDwv6qe4qdTir5JJ7GzNDvaC7Y5qckXTbScCU3pKGqXAw1xZi5pL",
  "key16": "4MVksSj5qjiGUGfQntBrYdoMYZtn2geymrkJEaCDckK2CSa23oti19HktEZ4r4hJpWcuq6mx26NLng8RKoe5jZdL",
  "key17": "4xxxjV524AbtaVYpVrnAoWHernqeNappM4dccC7RJzPgk1V8JnZLii41GLuCZwUeTAfysuVQVKUihQZHrHviWZMS",
  "key18": "2Z549c4GDFEemWMKgf2KxLe71NWsYXvE3KYuZa7gLyu6BmQZAXdBpHgUiC2zfiT8sMKWEMJ9yW3udzGLzoRwNN6e",
  "key19": "5T5iCDc4s8LtQpEtkGQa2yLVdpgs6W4TYhdKFucjNtMZ5heyahWpth4TKcV5Zp8GF4hhqou9bnSn1LBCf4f4yRzn",
  "key20": "4ZNmtgtd8GF31BbKKMka4qAkL34SAHkxTzxk4pn11trQyBaL36uu62ur9JLCmMSMe1qLg6Wqsnwo7WrxcBFtGeho",
  "key21": "3u9bbQonVjZjaVpVcXLpvUKbSYKoStXeHM9rfKwY44TJDdzPpn5DDBh9WqbXz6adKwzXzPx61iZSAKt4mbd2wRY3",
  "key22": "21UrpLtSbXsvZQWsFqPksmxnh59YRKXx8XB1xuU4vUnyKZNVaDaAtgdjFgvpvyhYfLkaDjmoNcc5kn87hMek2QR2",
  "key23": "3ghAExBiW1ocJ8iQwBe7XDbFwsyCbD85QSH6fETaEEntSNtU9aEWwSoHdBc6pBqyDpDdmxSGz1yoiHd65YJaY7og",
  "key24": "4Uq3dmKML8Du7XRNeK2wrPXpG5nVznor2Z1724yADrjcwpu32GET4WXS2xgZL4ALbhHN9Cfr1yqHRR6aCQm5xrGf",
  "key25": "5Jq1HKstq6Njh7uRvZfJTYyHpkvcpf5DCbYqfz7Rh4YVLEjNoJ955YGF3kXTqdJzUi3xogA4YZt5HH9KfaUh8hmy",
  "key26": "4eNfuc1Y2fiL7Bv8rYShmVpHrGnQkz3WwvuPDwpMh5AmvTSdLiURvAVreqvQqo3SfSPKeAcBqk7DzqadE9YtCKAo",
  "key27": "3B8wPwkcxjVQJwTGyLvUpghfyozhLEtZFAYhyTPyW6EtQRDZQPb1oHPmwzRtv44cPGnVFf288ryofTHagHJTF2o5",
  "key28": "38F44rPmgT1YYfubjqM3nNQAFZBQucZBCo1kkFtbQYKQhyMX7zGEGZoLnX8fsYr3m1gSjGaDQN8zY7JdJ45rCY4M",
  "key29": "3Se771PdJ8X94epC6iZWUpWBXWkHB9FYXaaAJvQsBHCNvMn8EarRfx3WyCmtb4xpJw7hu5MbAcPq2uZTE2HTQfKs",
  "key30": "22kRyHo3odroVrqtKaNfJm4YpjYTeLtJqLDDWMVXQDWVVZKEz4axcfhjiCZ3cMuWsDVKNpgSDRpMZYnGABC9zok5",
  "key31": "5PtiM3VoQRANHhG8M5GpLgWTP8fCXBuVNjdrGd1AjPxr4rYzwb1t8qZebmmEG5vCs1WJmdL9rsfhpx7in1uDVvC5",
  "key32": "3PT51eEHRd3akCYqYRTL3gP6LWuBL4S5Pby2rqi393AbZ1SMxaBLZ9hzMQE1nEFFj9MP5W35oKMsUmqsF6dHMa5u",
  "key33": "2kYcFozzBdhHszowVsPLT1x2T6bw8iv2qfr9ETPep6nwZuVXzWkB99AK12KbWxo8pLmsDdeK7SsfqytX3s1tS4J4",
  "key34": "4kFy3tHG1ZJJ7Rt36yX5GL5bxzaYmAGyUgNzEetBFN3LJgb6kSZufkKXPPKuT6MQ1sQN2nfa1mdsF7zvnvP5qFvY",
  "key35": "27dCG5fir78PAwNqAAA3WtHdWgV1JXmRzZavdLDJfXVYdPR2Zuo1gaigjHsX1ZXcWgMZ1U3wDV8L9WgQTKNc3d12",
  "key36": "2AeDnNdm2VTaaducB8MjQ2gskDXXxhKT3iTFinCCuT6zxieHR9GKJ2PQHD6sZQWnvuxYG2ryZF7AW2i8qzRrLib1",
  "key37": "i7sB16mbVjDvrh6XvQUtQiTGZezp364Z1T9FV2qN2NB2rUJhNg4emReAVtwCv7L7UpnFNde8Tdv8ebp7n6N7216",
  "key38": "3sgb6uzhgVKKrZYvhp76zx4z64uTKnQgYZszUawJMBz8M9FAswmWbL7148gZxzRKYgC2UCAosZ8JbWiXvw84ABRa",
  "key39": "2k7UJdB5fvLavuoSo9yzr6NiHm6DrC26A3z7w56smJGYHUML3rZ6sRJhAJT2HLc3n7Nsj1VpUkeu3Aef8DnTb9P5",
  "key40": "3PPmiDSyLLn4D2XiTo9TEoP4p4U9oSSWa96pKQwBjChntfZasrdHrkwuy6NfkR1gCc3srYwxEYNbCx6ryyq287do"
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
