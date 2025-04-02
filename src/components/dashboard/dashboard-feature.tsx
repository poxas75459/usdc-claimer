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
    "53hrqw5hocfNr5fL7PonbfHvgoBCaq5TctRQSrDDTGqhxC4VdXo3ZCgmd9hUQxKE2aUKw5BgqRGdNYcNXCLc1z8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaUhwXqNN5zz3Px2ji6Z2749G7pnEWmGmHzN5JniUMKKPQKzEHGJzBmL9jaZJNAxzhYMWBboocgmRhPV1ncgNxP",
  "key1": "2qWX5prvYS78UpnbE9TG92o2Mo7vBUcAQKZMpi7j2Y8MogezWREUjd7RLt6xdHWR8tfUmMDL97RKmf863Vt9EW2F",
  "key2": "42cgttoXxD4kbre7QiVULVZVGvAHsXv1rbKP9xYoW6cAmgfds8iZmv6NA9ug4SxKu8FLnWuU9kpnV9tHWTDRLz1f",
  "key3": "3J3kWeNm99QfUcHgZ4BXKi91wFaDHLSvRaJ59Lcb7zJL1TvBUEcc5fMQQMgoSTZg8QDetDWWdqLmEisQf8UyaCoe",
  "key4": "2oPWBgHxTe2q1o4YCSYFsMZBtjGSMcUnAnf62kdYT2sDcdeUFL3VGmzscHbCVr8vuYPZGcPA4K2w9R6gm2fTKXVY",
  "key5": "5UpJrk5vKcJvj1E5GAcApKGGdmzUzNdRGT8vnis7ENtBxxwpMMEqHLqHsZaR5XEWJqMZBWdgTfkghAhTTgLq9Ebc",
  "key6": "VmP46gFiYnDfbXNEBgMxcVcPAcLa7bR2TjGGdEhJQkRMqzhfo9E6PTJJyePjqYZKFnTNQuubrPgsGVAfUfdpDvb",
  "key7": "5DFR4M17T8EYtyXyASBgoSdcZERvbkqQSxyHBb2373fXvjsZg64HriPxWQFU4jEnnbRMqrQr5nPPp1em2tApo5Q",
  "key8": "4bLsDQvZZtYeFPsVHxf62BQf7fNXZr9az7MpcVkPy1BAfvqb66XPg4MfFv1yiE7FvrkDrQaYZTcMkaYPkUoQGJRJ",
  "key9": "4zKHWZq7nNKX9B8BTF7JFcFdpdhUXu8oQPEwExh2vu2URZU24BB6fK15KLfKqa2LcqHC6Av7BkczohLxyV8FLQ96",
  "key10": "3WydST5mqdg5Em18fC8uU1TfAhSrPn8QK44Kbks7g8HUK3St48PZpBTcnr3ZH8dnmpry2LFe1cVdXu8Fc9EVSG5C",
  "key11": "BmPYMkE8smzXmS8gMoZ1esKm2BzLYrKWVLizz4pJebgNuYRf2fS8iKzFY5fukfajRYLggL6QoWAb2CyExdVVZYh",
  "key12": "5kJbs4RVnLnw5fEnpjcUKi2ngE8fUvoLVYNFQtmQbEwipF32JRqhSWvahgzxLXLzTD4dLVj2vVpSFvGWshk4m2uv",
  "key13": "2wXUaWPUEkRgbD3dNzgTWvzF8fBApPS4VGfQUKHxEknNmmCzzqievafF5oZf7VjLmWaArfqnaBbSzJXRjYDiDwt1",
  "key14": "5wfePv7rpKqoeawvzFhc13kzfEVAiWcuGCYo1ysd44xmQGvEwzbAEeTkPHuUJAhgcH8BBTAyB4UEgEWS6eiyTe6d",
  "key15": "MN5gukxZfHJtbbDa8xvhHdVPKXMoFbnTreT2RAEFaxroDjYFMrNNcDumBZD6VU1Hq3eV1dnkmMb3m3pmB3sHiqq",
  "key16": "47i3u48qXqbDSSaHMrEqidoHvUaLRsTaU92NfVsufDGHWhmdfzZRtacwebbwx6faN64Bg8GSWBHAi8bYL4XVFZkP",
  "key17": "EK9EaHqAswwqMRjmPLjpnH3VAp9PyqdUUmAMXeqPVGdfTdTet2xAQr7Zew7mYQBeEqRPTzPSLcazFBGhxJ7DQ4R",
  "key18": "54pw9YqTJfLnVKsiphHNB1b4pT8J4pzhgab1ABfdJHVFMKxXW5JtXCdcu7M9Keco13ZC31F8BPT23xhCNJtnQWd5",
  "key19": "2ty7VPL16NuoyBfAMo7XwcdftAcVZHQFGSFkpjfhvxps1Zr1AGBzREy5cQhng8rycuELX2qV3mUShaRpWahQyG2g",
  "key20": "4LDz4oKUMck8g8znXWkiBW7S9ruaCoM6JLzRX28egYXbGSmHMGwmMVyhATsf9BDGaSRNVt26Ep4vDxyiaPpgWBoN",
  "key21": "5sNYF7oprJeXJGbWfDoDv95xHGsvrdZZeT586XM3xL34Zp9MsCQTzJnxqH2cWswHZC4GgXqyHECVHfF7X73tC9Ky",
  "key22": "3Sg59SoQ7Mq2QwquGn8d78Mt4L1bhV2Bh5bRByhPKRWdyZNtqw5rBMFuUvmHndLwZFZDYEb74P3WAzjMztWb2XJ7",
  "key23": "4LVatPokTMJmgxKkkw7LAtzKL4nCyqp7p1m4HsLVhFMzBH63ciifRXG3ybMk1Z2A4wz8QXjvjGocV61RVAWMDXPr",
  "key24": "5Cxk2SGoNEbjNqurYkic2EScpai4pCfR6yNvwHjuf2yNZMboN3osfSQ4LMvbi9ttabxgtf6ZNkqaeFor8gW95Vxd",
  "key25": "3NS1kHH3KKmp8vo7LHahCHV3GagKXwaNNV9EGACrYFmT8kWYWhdahk31ea22v4eVMZpZy5SsGK7rKoxRwbHfNCDL",
  "key26": "2y1jo2eU545wJcysrxaBoqbdCwF3CkvV4mftYeJKLwZnWYGJRmufDnckqwDkA6qKw5itBbxMSLayQcAp8aZwyhfK",
  "key27": "rskmj52LhwhTWW9rFYjysoxSudvW8JpjRPWhesvH4ACRsx7hzatno8vdcgYZiupuQT2rcRrPXcBfxwULR1wH1sS",
  "key28": "2nR2xB7cDonsvC9H1XbZNwmZRBLd1deS7YfxUWfeWNfqnX5B4yGouV9HvzbDeTQtQsRqiy6VuxCA17XtU5q3GirW",
  "key29": "42ojyhBWqchAwn2RegTyx3L83nrgzD1MfPdGLcAYoo2gEgpb5t7vD92R7pbmKkJ3Bsdg3WvruJ5AZu1qrRTcCK6s",
  "key30": "5WKF5w6STbds43Lvbib7FPt7xD6AeBvGTcQ5dMzVETpzNhfq9AgHkUBcm7wiewqXMgp4rXKssA554gUwvJajctYJ",
  "key31": "3dffkLottWnwY5Yr3byamTXguQg6KjayEYcwr2p2cY4mLkaXfSjP2pknWatK7iaxBvTaQmNBiE1VNv4tQev6bKnQ",
  "key32": "565je2ZMjGeNFRbDRVUG8QfCZubVynej9ViMbuTbvYGnYi8ZCwsHZZLFVV9xNvYKi57RvQdgUXdUkpeDJ8gpDUij",
  "key33": "2HDbNfah1pNwFXfcGoTW7JhVedAfBsX931ydPpJoDz26rW5WjGejEcGNWz5WMz1nHKiqy6nZntvDfQE7GMwcACZN",
  "key34": "3yrxsaDGhJhqkzdGXumPxaqHUay3a1GEUmHBjKKtwGcE14sjrrCfMgN8xydBLXcspBFDyjXeEJFEAE6PTpChiXBk",
  "key35": "3ZuC2E4yt743Fgr1UbJkthSvuN3zH4nsdHt6MG4G5KHyFVvumWKtRThoCCeWF3k8RgYJvsj2esEBjEUpG4Jcbfoe",
  "key36": "1226jhnXP46pVeyvgmnPrq1ceKqxHNMjVgHKVZSzHHbwaTqWSqfi9FQaHoistxryDm4J1qRSXWqm1ZCTVZqJhUGA",
  "key37": "45FgoLk53p5XDoTFTaMgxbe5GXThzRBwQYhFVckDG8BdMG1iFadXJzQnf88634mmAEC7EmiQ38ZASDkzp2gtnezq",
  "key38": "2pJLxKbZxtfJRX3pd1nmz2WUq8sjbjUn9H4w3pkH5VvJ2oaWozCX37EWRGR2VD6cqp2j9tLg3Lyn3v1LfsrYYYpZ",
  "key39": "5REHKsv5HbeXv977LBtppPkmTXeqQtMfDf3HouUkpMCDuyfJ5iZmd8epsB4qJVTeRBiB5Cbqe2rqaqnYz1G5ZGmk",
  "key40": "4vRso7EJz5b3VQAwCEdW4VSssSDawGASvmXBojaW4ok5hctYiF4cShpwySkXKir3wgYTG12t3TNWuLga2sPAXPxC"
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
