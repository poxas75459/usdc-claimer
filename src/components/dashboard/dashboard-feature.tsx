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
    "3sxyY6LJnzJGhST43zZvgvXoUk3Z8m7ABmsxdQDnyPjNG5bV91fybjSQ7D8dEetG2sKcpkau2fdX1Paoa1cTySRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXVHeq5HoFmtnswHGSnNFNTzwGJcL6a9UJjQTafKdbhvqdkBzhbMmACMRXhQrmqqVwsY2t2gy9in4Zpe4J2JzBe",
  "key1": "5zfWY8JTgTEvi9WW5WfQL2d3jsZJukccf9VnEfM9gZg5mJmguaaBZasah2g3Exwg1PEU2JXNEZ5WQJD1SQwRUftw",
  "key2": "2Vkro365z3jEJm818QoJyrd9o64GP6s2zXYqsxCCg6zFSmC9ebEP5kzZpFwDVwXXveMY5DqikaQ3qaErc9PyJ4gG",
  "key3": "52ENXx1gnpwrGhEPahbJHz3hBZx7k1vEjEbRLgjiq1xHdamnhcGA2FGcTFQTZHhwFAsoMAsx7BMttLcaY8QmRo11",
  "key4": "4C6jy3PZHnkt81wdb5xh8nR6miTmXsNfg72jPWGC2aWca7n2Ht3GMBNf1D6TE9i3y8nSGxJADc586Pt7TbrUSGGB",
  "key5": "ELUfhwLUnMAGmg7xmvPsc4nZw9MPtyGJ7S2YMUp7Q3dLgqKhWrBfkv4t51QZx4ZwwcqabyZBSiQyY9b84R3vFUK",
  "key6": "2rw1vAZHyHqy17mYNhv3VrHN7notDrjn3fpUVxCCwRSifuqyCnKgYneH9dKQTZomDvsNcZFmpzJXvJuBhMcpgbKb",
  "key7": "3Ys3NdNQ5mDAaF8GmUyUyB7fRLFc4qjHHRE8sxDFZPp9Unzifr2GPhM9TYTZB3nLF1bZc1F8fdLnwmpjqAXTGbCT",
  "key8": "5zYYSbit3e6prMo3jgU5PV7xgDHwEMme4XTEnUt5uVcMCkqubkK6kmy68wWujcQ2B5fbEPMSuCU2N2SMYLzQoiYW",
  "key9": "3fNNrJhVWv5wTsyKPKTgSn41XuBF6dA8ydUmLkeJpnPu1BGshw29zFmaEBvtHmuNu556NB8Tf6xi8LRQgUUUwHrY",
  "key10": "2fkvdGtxUYzJnFWW2fX6CRYAKaGZeBiv8DzyHbwMXQ7QQDt4eaEeGMiZcfbH24b4eWFc4Z2hHmZJNG2Dd3iP4xDh",
  "key11": "4gAUpH5XVmuFGKi2P8cQkAxXN2rXF7FmcGRFaFRvB1jbvjH4fin3XNP4egP2FRG48zSR1XoPBSEmeAZLwhdcnGXb",
  "key12": "4mvxJsLKynaUy2gugz7GHoBg44YMUz4C9pBybcA5fMsuRBsXG52etrYtomvksUtkFzYw4u3ebJFyJ8z1nfugPByj",
  "key13": "cwhaZQpWMFXhfcsMr1gZkykR6GErFBA5n4Zgwp7vTUsgNLQo6os1vUErkGUW96BU3xj5bPcjx1rQqk7hf8LWHQs",
  "key14": "4BMW2dMVF1Aj45c3Z7igKaSkCPwu2QDZBMx7oe3dypAaECAr14mZjuoNDDnY9eqbZpGA2Safo9UcBerWutJ1Rhfj",
  "key15": "2GVWXJ2oXYdPmxXdjz2et243bM6yNu5JT8xqay9UJ2oUo3QCySmzFTo5Tk88CEExLZd9Y9EFPaYkYjvAbm6LLwrk",
  "key16": "3gu1fpnz3XwYC66KBManTraakyRUxZD88uD8Mb97FGCfotbDgAxxckzi1NXrDoXvjcpUEZgPm1yDWKwiExF4vaTW",
  "key17": "koovGR2BHRMrKumjEDgPVhg8c5UYjBRutiDVxcmNyfDTrTUAvVGZ3awFbtGWXjcEi9F6sKLVfUqAHQrJX2h9gAf",
  "key18": "31oRsRRqmWPAgsUXh88bFK7u7ij5kR1ggKTNoKqWiA96s5hNsU5Tnm8zS6Xe1XnP3Mu65a3YcPVbaWU1Tr6KqRAs",
  "key19": "3UBQvrkC5M6Wfv5CRdwxBPz7KaA78Yb3HDoSdFGdjPpgsqjg2YQuG7aD1QcfaajuisoLm5LQzLYqbUvRYhi43nx6",
  "key20": "2vMnzaFvAk3ccnupittzkNcWdb4bzbT1MBUvoRhm8d9sK8rCYwMWLFh5ovxLAtuaM3TVEnZ2HUf4FPGLpirQCvjc",
  "key21": "4XuWXPpJAFmuu2Kk9J71Nnp8LHcEFmkHbnv8oG5S18r5jSmPtHrktcpDogLEEUmPYE7UfZGmxAnGrHBcN211TgtW",
  "key22": "LoeP6WmzPqnNA9457cqJhuTkz5FQRsVCYGZUnSYw515uoRd3JSKBymyiiqt2PpL2MPgmH4LiTVqFrDQJCZLaSHc",
  "key23": "4CTpBASL9biBwzNTMjyDu7AdixFcrCySZDV3WAHTJZ6TwE9oXvdZYnBrxbs9zgE2aa68jg2T8AXfU963hXvREbqq",
  "key24": "3Kei5t82aHHWYkPPeEmkKJiuAHDpZaC7TzLX9ajzswBnZzFcvtqJ8roDpnmSedWMAmRonrvMWB9cdwJZZTff8Usm",
  "key25": "32F1me6aC6HraoqumrcbTkfYft8KHcFr8GPENEVQfrzytQJkYFP8Mr3s7FBknCvUkj8AvpyhsAzjqiShUGKkyySc",
  "key26": "Utmjpp5dR9kMRUhmqJG4WdYQaGMn3redZMt57wpRbbBATeQWmtzEpG74zGDSFX1BNRM98GU2ruajPCiDEimQkAC",
  "key27": "4U7THPcJvos8p6Mo3whD2ziBirR32eMKTRtjzbNqqCZWYdxVd5c2ANoEgVd1rnLfySDfTFiK9s5WPFBr48fr4U41",
  "key28": "4wJ2BRWSyfPsqGd44BFiFevYn7dD4TqB58sjSotdEUX6EzR1PMwgM9bMuoxWKGSEhssPkuLjAuJVK6i3mkYvLjNE",
  "key29": "4K4K2YRxaA3hwRdQmuVUwvQXk82Sy2CiKwijHMbAD8sxKwc4rMcNP1zjzpXB8kLiRiUjJwbUKKtup7hPno8LEAex",
  "key30": "5AFqVjC3eyaSg3aHYUGhk5nVaEKGnS4WHMC7REPtBtBY1cyjFRjUyAv2gfiJRqmPYd1xGbDu8vcoNnMc2XcwR5Yv",
  "key31": "4Uuh2SjzeNXdoxUocTg9cLzAUtvDfPbjb8wmtbhueFMbQp7vvd8a8TixqDLQWo534A4acZzx6Xu8qQBBWtVgPEN4",
  "key32": "4JBeuKMdot67VFUjd7TAgZQXhUHvStxL7hvh5vqa8eKmEK4Hvb3nonR4ER5kSUJcsddKc2WzrwetMrSzQPzFYkoy",
  "key33": "3ajX2F7sKY3sY2safLuNRDRZi4zvhYPrySwpv86iM1wZYP7wRUzhzN75ycCS7FGQeYiD3hrifaDswpcw69u5HPZq",
  "key34": "3SQTmSQQ3RCpBPxbwrQJidB7CP2HcC38Kr432cEfPioSFoWp1tWdGMzKmvtDhNRw3perktLNoZ7Bsj4LJcdpFn3k",
  "key35": "3HhqPpDAPxPPcwi3TDULqikqEC9wRAevi7Z6gTjmpirDCAK71t35CWj1tcYjKh4urgd8nxjtwkowTSsTt5tx2jec",
  "key36": "U4PeviL2QXDHDNs7v9N3B6sCuu3ovHz1yBE2xbARyHdb99aEbf1n4N2iQwYJkM8iGXR8bUMfzEyYjLSpHGVxiqg",
  "key37": "4HxRYXgFmuG7KSdrrX3kzQvqwMCvgH6RwkrNF3164x7GPb1GjbMc3Noqexhz1qVnT9ZiRFReUgxUt9E2nmY2LcFm",
  "key38": "x9yum5H4g9xeCXdTWv9GpzxrCSTBPpLANydxbNBoNr6GA9fQMDDsDzB2SkgLc46yjmUGvE2dPPD5GQsFk9RVYr2",
  "key39": "4WFT9nHLeTwmvVGRme8tsVFRjTZ2E1HWdw59cAv7W3E68ENgryHn53g5DS2tTA2i18VP7KuGoUQX8ih34DqFEJkb",
  "key40": "5HqxNUVBHka8QyCdNk9ecFPQ1F4Hn3oZASj3Nb6iGHob7eq9uQnD8ioLd6uoxqWBXqhoZJ3feGPa2EpuTvUAXXYN",
  "key41": "3GZD3An41v6XRvBVoYiuqeVYiG4UKryeX2r2ZRgFEhNdMe9wpzkiR2KvkTLsuYp4e4t6rNhSFmCmxZ5fiqRApu3j",
  "key42": "4FyNvyk1gh8AEgVBQVaBB4YKdqtV5CCHsxBXSwxhAmBG6Na5zSBGfsJ77JBAgWpEhd7FWvY1rqSow4dTYCN8hx98",
  "key43": "UiZmyAic5eGn4d5ztznpc4Wj9sbg3SswGUg6x9FwyVvSTCCXDHfLcUEnSzTME5gRsvpY1fQtCLKb2d3LYsabZsA"
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
