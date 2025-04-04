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
    "3xL7uZ5skBSLcxqmCYTGNRQdeho83KbA5PNoYVtsSmj5zJeuxGq9xx2cViMFGS3NiYHouKYDLgfdwdMMTQsLYJZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLTw2a8CBThdLZynDPtW2apmwAFaTGZFrZndQXGGmwji6bmte3EzCwLkY7KbE79NKGakNFmKp3aZQtTUE79GUac",
  "key1": "5VC3WmPmrbNgrb5Z17eozvQA7jSCx9jZbaUqgMq1HWefwGGGTgLoPAYsiahmD7SogsJo4yunAsdhrcKAk9W8SEov",
  "key2": "tH9A6gzGn9X6dZmSdrsEkQbcJwbMZc5JHUAJkgmLmxWfdQJQvARcRaBUg4fNRL2UEtYFBxv2dYQ8F6k82odiUgJ",
  "key3": "3YHAHawqjQoACPbC2MhxZNd3RU3pQaevL9KdYYYDcdtGp4pJbzxkhvKD1SWMsZwEMdRDTZJyi8qwezNfApNKtY7V",
  "key4": "3hWwGEHAy6gXhNYk9aPDDjMFbL5Q1QUCbgai6mT7u7ACd34T8t3wQBe4FCPBGse6Ncp7tdHrtPZsTHebaPpWs7K9",
  "key5": "52sFh3g9Yp2tUAk6USPaUY7nen3yz5a3wocb85GpmTv8kXkY2LFMb9T2XWqcqf2UqVeCkqHCjj5xCvZqF3ZM6hiU",
  "key6": "4NjtfwmtPe27mqtzgdQ8Ve28zvrX59wAs5zfo1z2eXnM8FLzTZ6FU8ShycKjvjefyaoFopsmDyHasK6aahcwt9v2",
  "key7": "5Z2hcdUwMt9VuaFkSifjtne8QTfeXZcDvgSBJA11bdHpUBUDw82cayH8hYSWfQS1RLEpyb3y41DRyxSXHL97ddtu",
  "key8": "2QxuxFYbSedwARERNfETqboyNQTXjMS7B5AjLyx9GLReEzHBaCRGgupLdzNhRGFtXWiPs58GCoPzaNxyg6Vu8Hg1",
  "key9": "L41Y9S94W2LD5frziqtmNxRAGgPyL2GwLiAmnExxkniqj4WBD7xijzw5zGjxC59c1j14DShjFz3ZijmzNXzFqzh",
  "key10": "27a3pQH75yoKnszwmhvTcTHyZUifvUbE7BWrjLYkwMzHWdbZ7GAb46Pftg1fhUTs1MeTEchkeWEV1SSEWfEGJqjj",
  "key11": "3wRSedBPNvsGgmBWy1npuBNSJ21yTM9YRXoiR39CPfBoT68y8nDW5Jpca56KqM1XHXCPeiWrFwy4W25sjY1zpJq1",
  "key12": "2TCihjZZe9cZSQgfUufPrPUeScpUETMCTyaASUYjqCAMdhExnf585Mzan9UNwzRXAqAtz2Bh3gXyKEMU8M8cWkcV",
  "key13": "4gZA5nFTgJzzaAFkDUKcw5tT8ChagTYVGxHoQaFHoKiVRWErhpFYKA3m6crR41WukFr16VSPLUhQDsXNqUQSA582",
  "key14": "5mxMVKqZCAzt8ybRrbHP4soXLHwKZPuRxWwc6ZwA6oTioRsQukB5MEEaQj2MGsGKtYsutEX6LovXXQADQ28KpEYg",
  "key15": "5ch1KK3X36aJH9MDrRLjMnD3BUzx4NFGthXh9St5rkk9GutmpNpBxv3WptV8icLL3NuAxe6PN1gGdDxNzYLZQu6V",
  "key16": "4VjaJ5nyM3Zvza9qiBhBwnsqGffeMNWLVXshrS8AJjbmebcCp224UPB11cZqr8bbCgMaX3D4RFD1U1Qvp3HP7hBa",
  "key17": "5yLT51wY9MPzepDuXEnLksqyJmcJbYK8m3V5KF2dKbAP4EjdGxqt8LEiLGbDd9JUAG6Xvau9J2PByNkMj6s4sn9Q",
  "key18": "4i5iyCZDKazcmpGDc3rCZ5imrNA9ENnsqqXUyEcQWNa1New76ZZRQyna7wbnQZVpgWbeoCk5dLAR6kYFnhHh6Y13",
  "key19": "ozjULidq9qJCgtzK5u2ZY99MHMRSSJCqxmKAHmmPUDcTFVoCX8eFM9xNBV73T9XzJZpyF4b8kj7ksBLVuR7yFkv",
  "key20": "2PGqoVJqHJHuHKPMjjwXcjrCRuGMNrx6NdALqnD36993s9o1PmuaDuCmfBHc7UQ2WQAU1qET8SVotKk7mEJp755w",
  "key21": "3EXDStfQnnX7LDX1Yy74hfrHuiSH52UVdzsyxxGfrcJ7iy1KFWGQCYLecCL3G86Ypu24GU8BiM5PeyYiXCR2Nkoz",
  "key22": "3yRbaQbtQEiNPufpneepXZBfKoVVfvYxEBsdGsTHTDyK3kDw175rz15J3j4mpyDUrY4QmFEcu5ypZTB4gZmnsdeY",
  "key23": "5V3pKatrVaDrP9b6KfD2QQovNfV5StGYJR2SuVdzaDfpSgczNwRTBHMC6qgJZW45uVir3S3wvZvFfKVvX8oqZatw",
  "key24": "2Aev1t6SQivG64mGbcDJ6L7n9bYcyaFEGPy8NuWGR4k8VYBP7rFxryyDADe1vi475fZUz1K6Bho9GJchk1cRQsKX",
  "key25": "5swUhFjop6g8SRexZLzWMWLnpexruXS7hjdH4KzDPphM8aRxR9C123xMp7ZgZFAqYJe79LefsuwdqETYaSMfgcq4",
  "key26": "32ZU6ZgdAX9vmxYDK2cKVHLbL6FpR1N2udtYz83Q3GnMzSdbW9D3UZG66L16Z5smssPysCEqqT4zsNS5EodwUqrZ",
  "key27": "EFDZVMhhZXcT2Ynb4dP191Gq3ifJ1vBaRhjJ4wDiK2i9WmMACKKEYWtZigGKTciC9cYWacJeAiq2w3gW5i9B1um",
  "key28": "45GhC6cedsodHYw4aLEPAVzGgPABPHdXHrxaDBCckMJ9MLTiD61VnchDP6DBmYgzKtXMhpDxRvxfR7J7YZNrT4Nz",
  "key29": "49uZLBaK9XHwg7pgbjaeuNpQ4J8oV1AWeUmG7i3qBoidC7ajmQap6kTHFutkWNeL1viku25QpZdi2ZBF232fU9z9",
  "key30": "27zh46e6iSXQ43kYWgJLdzAxK6n8YmWYdDXL6kGixbEzZwUBkn6K9SYasmvHuSs6W3Xz2veCuAM41TCb1whn61Gk",
  "key31": "5MJLwVxBcbV1JVSZ1tgyJooqwzeU6V5zZo1hXyQRNLYtoXnYuxGwEVetAgZosuJhQmsrDNpuHTN7emV8suxoeSNF",
  "key32": "5T6Bju7LdqYck9arJBwXVKnTn2ig2sFUoXZZwxAacSNKJgbVXd5FmDsPmQ3EAenA3aXoFDCYjjM6dgkd9FEEzzXL",
  "key33": "9rhXjJJ8vZT2Y6qazkH6zJxFnqv7YgeWJbSPNodreC6ZJrPVEs2PKbMo1E2QAE5FVJ1GNShLVidGvGuC3CTEDaT",
  "key34": "49jbmoCkrYvYZSt3b5ZPYXjUh1wUz5VkPkAGZmSx42wQVkBxBN5qVfY9N8vz7MSCqzBYgcuuBSVPm7VQexon436r",
  "key35": "qY4Ps5zyZSgKXM1KAzQd5pTn6mBaXvsyUqn1aWBM4Dn2Da3oGQLSGRnuwu7VQe5vVHdxHcYiZVoxqQBJ5EHagVe",
  "key36": "EZZiLFh67cf2obySLxARniw1pv6Scxw6fWT4HkwNENBiqReriNqdDRvLbxtY5A7QegmDeAVRYyFZDPyqwmSpwKN",
  "key37": "62bC7Twu13nkU2MbogbBGhRLEhFLvKcb9Bi6gG2UdJmb3dBYBYbrZb9ZjgXJhzXpMNsTKogjLoAGAa8VzvvCfWnZ",
  "key38": "5pWM3euWirZDBbkz5CGxwoT4VBPNA8TWe5zFKRiFtgG7aPU1aX9bF2rekcPPitwj3nG6ju6x5w5RC8ZcBEhQ9APn",
  "key39": "2csn8mHZXisHr5qtHdqCzHfQwq61ZuEk1eagiTbefztJ6TdtEtG4aysnNDmkzAMcNXZGjwGfUu8yhc9fw7vqVVQP",
  "key40": "4F5APDQqWJ31aDziNmdYAaUarK2E55aLqnvPoZUpvE6vnq684gfXijhzeVkxsB21KsdkuiTLs2MfyYMQRqM83jgG",
  "key41": "2XxEFi4RQvP43J3tbAPjSFLNWs9BCeJkxxXmbbyfLBg175Dz68Up5ciTo9BgdCiBNGZ1XfEaQgXjPpiUS8qD5bt6",
  "key42": "4Cn9Kt4PNe1z7sufnhrDVYkSUmHcKmBufB9kDnezj5eXADgJ9dDD9jp6Dh3G7qKSgzEN13EfHukFHs3DDJo72kQx",
  "key43": "2LyKaRjn4mJnXJhkpMf59xUu5SpaUjwhxmJVQbKqs2vVsdjLc2aWUxTuErsSAYh7X5yWHwxzVZyvZDnx9LfgVvsb"
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
