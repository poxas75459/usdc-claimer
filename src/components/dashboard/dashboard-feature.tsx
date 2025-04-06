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
    "4V6zSVvYS92seKMwfr19cihWUe7N3g4ht9UFxm1dfzmawFXhpHXQq7ubaT1vxxyXCj44v5pdNyepsrtz6jAS2Y31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GY2JvBrMct8rmhWTxY6Xsv5gyXz416GeuM5g2JjyBqz6E32SUZnwTAjT2CmjJGgSQrnctCf4vdJu51tBmiHLgVm",
  "key1": "5ghneNtz3RyKaHmi64aAAXPfHipMVnN5UtSQs6RSWyjwWiHqd46KTzsYnp3biXCPoxhckk1u52647M8nmS3LCVmm",
  "key2": "3AzpMXvrcTDWfjgEMVn9G4QeTDg5oisojyAuMzZNNqa6c9n3pdN1th6Fj1ruQ5DAPvToTM4TwTDEfLiNG6ApDwze",
  "key3": "jWthPoJiuCxYRTDTsCGgZp5UMF27djjMH6oF3fDVMDNe2wnDgKCmic8yFLKhAU7BAu9zBGZbxeY2pgiPL7WTCQm",
  "key4": "5ryHNrMcaQtaqW7Wa2F1iDkFH6kxjjWp5oqAc37mHrLNQrvgmdNcnwyqikuacor3QW8EXuPuDe41juEbJdzQm8um",
  "key5": "62NALvExXt5BkBPGdyudqZP1y4F4NmKg6fkAKvJ5hDRFVF7r9trc21DYuGB8gTm4sGp6Rn9Vg8peDdnfigEv4X6R",
  "key6": "3KqdBjUQZqw57wMAWexaCarssgAQzFmYcW4V88ncmEgL7L34MF6Me1uwMtj4P4buRgVQ8Xrvut5wNV3kY1nRuR29",
  "key7": "2AxZMoVorFDsoRtuo4Rm1mzHvHneRyF7EXVPBo5vjrox9qUN7GGwxvAGW9yR5gKMJDdGB4W5dP16SipzZUQ5iW6H",
  "key8": "219hvDY84REM4RoCfMHVN6KkGk4aN2B4aXAMPLVTRwHF2APKyp53B7dNx9ofmgVBWUQQ4syAx7ZBWEAcCkqGo6v3",
  "key9": "5S33iKXy8pd6WtdrqXfSCV4Aven5mPnLfx3kyNGSCcCf4pHKFwV9srQuvAoaaGUisuDP1necqJJ4wpL6f6xgTWVM",
  "key10": "4mbCW62Ho5cV8V9GciSjavHkgAeWCWmos9GKSV99dJCZCiMmYfdrMZgTRfhYW9ev9JZBKLmA3k8CEDTRgBuJnkFd",
  "key11": "5QwcyMX2CvVFy65zX34FULFof9YdisEU3Ko8j1wgT8jzuPCe9hz7vXu2PgK4DuXywaiakFDYCbyGZ4rxdvWBDQJG",
  "key12": "kJLYB9mb9DYQszuXi22iSdrTU5eEFTnAjUU7qZ1uA7yKfhgVmrHd4KNuAbSVzMfvTKJuDn4eJeASYYBrgoxZrai",
  "key13": "2SWGtSeTUQjeCqX6HfMhomQq9gYmZWZdd8JVFWdW2YCNznc2Gt2fv8pottyCg8nA8KFj3JQDLSF63YUVoz9ERpej",
  "key14": "3bY1zEzPjKi6UzioybffocqsU1sgauZKiYAi485HBbdUL456XYaqLNtQGsq8CdSQAokQAnkakfQUnxSf95fhoUjq",
  "key15": "3UpVT86pXN96MA5FoqfgWy8UyunwR9y73s8tQFL6Jni4xk6k11wUfgJkJcAbzyMpefuKn7U3nLnExeaf1pJEy5aa",
  "key16": "5j396zWD8dqShC3WFQXHpWwbaft2RJaYQMqBf4N3NEv4rYacbLfUZTy3qtYYRiYawyQDRqV98K9piFhQZYhWUhbn",
  "key17": "5hqzAnim1W3ooAc3CXYHTJnuanFvodJf9qLb4a2gk5tDJWxrpGAsgnv27uq3CFtXHNbDoBDMktRX7UT53itxvDZ6",
  "key18": "55WmaCS7K6FnqnKmcdZw2v2ZKvr5TGqgoxEeaAwzrpDqEimkU1KGGRZhzovQwDpqWCmo9AKaWSMN1ZM2KDKpdDJr",
  "key19": "5D97e73NHvXySWrSHDLDfoqqZc6eUphNRwByABMmNopFLn66BRosZ1bneopWjMphnDdUEAXXHTdpRJ7tSMtkGFZM",
  "key20": "5EC3uihC3QyMKzTZCejE8KAvVs7g4DNRkaffoAWHaozUb3sjwg5Etjpmtp6PyUjoFNxRs3Xh366PmeUmu4UUdGix",
  "key21": "K4QW6iBvnSPRQoXe6pE5crNCZDGMMETV9aEggbtAuH6rZ8z9M5fVBJCgSXxBHiT1hBbuS7JV33FZ38RF1LZU9pJ",
  "key22": "3PRsdnbAXs3j5BBUCYyWRGbdognk2Yy4N6oBsjr3av89r2Qx5KZcgoB4XivywanZuUVEgmBKAb2sMV5auo4MG2m",
  "key23": "4sJH3FyKsVppjQj2NwYYstPm3QJ6zZcrpn5wfp9Y7GuXzCBCiowYFRsUHMC3GSvkJD5cGYPdAiGtCGG7bLFGAS3a",
  "key24": "zvBfmWTrSw2CbpedcHim6eWMfMmnjkP6CCQos7hF89SJqfeCQJFeNH1kXvUsnqRX8rS5Cxx3ZbE7ryEQX2CZUYz",
  "key25": "uetjWc4bGikP8jGoA6Dnhufh4hvV4pvWtat3WpzXkyquH8hndzuH9X6wnotSwU4owE6DGWdeN5gfoLjiUaXwWEH",
  "key26": "supd88uJWRGKLzz1yy8rBwfj8SbcctUkT9fD7k353GtkjesCXX6dFYQhb4hF1Djm5r8oJx1aecdjsr7E58e29ZT",
  "key27": "2kAKEadKo2vDVnncy9kobLdZGqneXqgpmA55Li5tQqBgJK3iSSWkX5Us3kqDNmxGR1EB5nLxdSkCzN6UqVrJTcxN",
  "key28": "2zY3v94YiRZxbm28MkjS5Kj3rT6zU6KrGEsRWnvbWezLpcsJGfMxUnW1c4uZ1vhYnTv7SMmY4vixP5TnJ5ogYxK6",
  "key29": "4BoFTdS4YJmPZAZwk8kAU9a4K36atdtrQuJPoCYAs3NwDoNuCxgxXeVNJ56LHudFC3RYAD9CJUcbsvxJoSSj3XcM",
  "key30": "5gxoxp4D23X6kywM56TakUSYR64TRShLE5oYmo6wWJdpAXKFC4PcFoboEG3VC2GSV7CiB69p1kBw48KjrzSmPT5A",
  "key31": "K1GqoWktb8LZiUvdficrFnunuK3jXhDSkLYykQSRqLqvgcNdYN6bKy1BbfkUHWjJDQV7V5ThqJ7GJT5Je2CttX4",
  "key32": "2X6yai27Tes65j3sn2usQdQPh3ZY979euAbKgtRwbHKJvsBpXD8zVApQpCP6tjtyptEeNq2GKpgxNLEe5iEu9VJd",
  "key33": "mmfBc1Bkc7GPQbDpdBS4o8AZxB5ir9yo9cs4PmJCypUc7UzAJXhua5VxM1RcJq6EkFFg8XxK8bBw6Ut3dHcHn22",
  "key34": "54FZ3Hc6pYUWqjwnNBGvXpjRAoGpfFadYh6DvBTKFMzpoYBfso11ciBaDqiro6meKmRrixGbZ8a9ydAW6WkhpXAq",
  "key35": "3xVq58yXsjjAKfkTFtejbKFPSYpkTVznVDjiooAbs9TPuYK1CFuH5RVFV6ai7A4KmdW9kRGc5Aqe4PvX8gZT5fku",
  "key36": "5BSLtfMEUxkRpb9ytbiYdfgszH6BUuPLzoK4QKgJxmQAZowrpwx8qPXrVv3b3qzKNHz75eT64mr1iufy1cK3o23v",
  "key37": "3qfVdvxvSewmhe7GKLQ9LFu3GR9KXgtkujiUn2diGx35pWQwjgLnAoeVi4rNEPkDd5tHLesPCtYjvLQjCCC6XCnr",
  "key38": "3UicobcxzsjeDGx1BqjTv6kFH5PohuidoUfxHccg2ks6zYjo7MFiwyywUha7EawQUjxTbLS4s9zDxgQHQdpXjG1D",
  "key39": "2eZ4FWyVPinRoS2haqqBR8HUJQkbxaLAN6TKAALAHHhFa56VsgrxZNzPDnDXMeLftjmUtWdisrQTgpXBmWJQso2x",
  "key40": "5YoEi4doZDeFZab7oYXWRHCtU3uDwbcKSx1YZ1dhfVFpfphc7sNVhshF1rbJjQB1tMZ7sAAuwrbTJ4c4mZ9cp6oU",
  "key41": "2JRNTmcDQBd1NdA8Dza2SWb1Dowhy1xin8oS1sBu2mq7y96RBfG2c9QncRCxUGkQj2PZgrJy92djniHV21gz8vou",
  "key42": "2bWNqAqXqwGXBhUQZ7BE27CHtCZVqBCi5VNkg72ycoLwWZHvGay4QJGutrSqFZFhbEcGZ5YZSFgXd95RkcVKEznD",
  "key43": "2dzNrH9ftnY3kjbfFEpC5Q3az24SUaNHwpvXyVDtsB4gbnmNt26qrt779anG5o7evnR3JpAs2tBcBCizcg72tRpS"
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
