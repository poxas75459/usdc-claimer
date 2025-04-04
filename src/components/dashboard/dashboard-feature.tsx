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
    "5KyJTcrTWWRgwYupnpvx5TMYHzStT9da3hj9XVw9kyVmJgAe3PjUUxxNmCcjJ2M65q6MkninC15eFFnvcDNek6fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52xGfgRg2TkMax2zK333RaeudythqHoZSQDjLMLPZz6cGfjeytGvMCYd7MqPQydhoS9UeoUfJAdzM9Nu2vrLxGuj",
  "key1": "4xCjQNzCRV9o7aFDppqEFrD75ZJMuNcZxJBb2fZqAiFn1ds75ggE415ws2MTF55xewKoiUCBSnvddqdLc5ksw6ay",
  "key2": "2B6azoXcjEEE7B2DDJKKN2sYHNzCjt1cXovgXWv7tBa5GjLNAqdNbNEksZfvLV6iS9NbCzYe1w8iqsSF5Dng2Xqy",
  "key3": "2oSWtHmdU527gAu8Xj6PnRttWLj5YESugjKaSnEpgJjAfKeab2ktNCRo6rArwz9DHuNzLJX2eK7nQc65rXDBjfjB",
  "key4": "3K68RE7rZEMcfbMF4zeB1jxGVESVVYuroNEG7heGUbyNLcHUYXHi74NpPuUAjKVHFKjHSZpnMPhP52epawBq1PMu",
  "key5": "2rHoNR63t4BKkRQQviavGfEF9g4GR63kjNuZwVouF418iGBMf7LzrynqiXf4m1TrPKr3onrRKCDWwA648Ljdw6nB",
  "key6": "3Xv5WMpkHQYvYMuJMSsu87J1TyP3RWouwMcUqT7SDVhxQchnj9MHYvfVF9zAqUsjyNsQwThG6EwWP5GuMWGYAeuC",
  "key7": "9suDv6itGTdTijfkN7RQw6iF3civMtghsxVctnwKcfzVEPUfdYJJseD3RXYKof1SqngzDmUq9h6RtLRnfidJEKG",
  "key8": "2nBXwwgAFrBk2wsysQAK7yRhZV2yARhpYdRCRSAjUUDvk1yXmck4chUmuXTZRteWDBQhc5XSXy88EhizCKTka313",
  "key9": "4DUa4ZFv3tfcomGVDGoSpC8nH6Dj3TUH1NPdAEax9be2pvJpBR5NB1ZWuxqzTwfNDYLQyGRDv3QZ9JchsdEzfHUy",
  "key10": "2w6nLQPdjxggKWqAERThVzXZUK3K4qroUQzR7WXQK8ymJofLpAiDkpbq34hRVacYPQBPwiwNggQK7W7DKVtUarkt",
  "key11": "sjr3BomAHhYpZVD5SyxZ5ioJ5WzbYw923UWQh89K6CJhFPhFc1FGQesZPpEHHRXTK5JUmMRG8fBcVFnx5FspdDV",
  "key12": "4wYuaTsBXWQRKP2SGCiv77uPS1Y7i3JYoDZ4bC7fyUV1ZSPbzKnPejs7sAJn1c6a421ABAsmRrpPPxMaNGyKBimb",
  "key13": "24Rgi43MzqrtqYLmqDwWzzYKiFDCoqRGQ3gifLN9psm9Rzs7UNaVZUQovUJdZMrVxjSGZM9zSvgHgvLoiM2ZwNiG",
  "key14": "3YUJToFrrrm1cvkjrhKiLNWeVLXK1rvUPmTtZYKk3QG7vwea3nsYxcruKSdtbaFDh8mujFFWJe7ka9JA5KkMszgE",
  "key15": "4kzuQBq5hc7xwNQLnKWhvYfct9u2BuRSesnf3MJDpddGwZq8xBJbWNsadpWFm5EAR7xZBe7T4xqwJBfCgytSBMTa",
  "key16": "2xmDh6kMUdtUJm5C952yEabrszQkuzwCV1R8aZzy3fYa1NVUXsjWumZ3p7Mvud1RhybzNA8cJqgbHqxHkBBnntpA",
  "key17": "NCevxQrnd6NBkALA5hPggBBWCeCX6Huatzsnz6gGxBD3vKukYyjWWc6tUQMkZ2K8VVFTYAG9CPBtpRtPNDMYupi",
  "key18": "4nLuCWzAu9YseJT9VC1nC4ASDdZB4m9fSnkST6uv4yWp4ugBQULn6vySQf35WWx6JC36yuvXerVwixCVtmF4KntX",
  "key19": "3zRrK2T14JHgx3kzJ5hvKM2ro6HjPhoZT6y4fCV1427Xd5UAYZmJSM9D4yoH9DaVSpSvWtdpd91xUWrRZ4fS2cdv",
  "key20": "hnDz49sV6wcKAXfmK3j6m3N5hhjuJ4ktSjaZxP2p2ww8ZDJ2dPsB24YGmep2DueU4yoBLEWbXVXPa37LwSfCmb2",
  "key21": "5parXJgQ1VpbgHRsCpBweCMR1FnMQDqrjPjyGKNAYc1ytRmuWS7NJHVjE7SeaWueCC7QNCymnjBHJtxmBttfwE6T",
  "key22": "5KM8TBcBUMUBwfUWYYiKujxxAZaHu5Uycn8JpGFahTN2ozTEXWYid7Tztkm4TKiFrpC5w5Zb2FW6gTMPHbGyS5QX",
  "key23": "4PHaJBziLhHoSEasHgXpLiZuhTRnc7DKQNVVWeWDwcf1GNaKGsZYU7upZwhRGEQ9LjgRr5KZwRH2J8hbZypfoPBs",
  "key24": "5cy72YESwKGyA2r4Hz92rkEKmyMnwx1s5egnC1ZRX22VU3jY1s1BEgs1uwoxfAHJz7JySzvjtDxkKQ92v2YQtYax",
  "key25": "2LKpuJSFLocwZJY3F8K6synyZmy6eGe7co3tj8xzkQQyuP6sV5XCggvVNsN4DPcmJCqaLSv8B7PdNvXudopcY7VY",
  "key26": "4WfhpYUs2houyMetM4TysiB47p7aeHrJ5ckgTCuntcW9u5wT15w8KSVg3yuq1axLPpYMdNaBasFMiwTbqTsvmYym"
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
