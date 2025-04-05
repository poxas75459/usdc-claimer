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
    "5Y2sKFc1osgLjBaePZ3UoNaHZhVA4SUcuiVvv58Co827fg6gMiW8BFH98Xhz1vEg4qBXPTDPxs9mAQhypCQhbeQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "245xb3aH3sSVnA2ztRnxSW1wdoBjsmMLr2d8d48twH5Cw4LEvRzeTFz1bZyJCEnzXjAExqH65SQL6hcgVeEDjPG8",
  "key1": "2jkyKBBgHaupZcaXjxgTGF2mu2r76eEYgH63KNKz96nqCdPyQHCPSJfBGiE13ZitFWP142bCifsyRMzUnXoygZJ9",
  "key2": "4nPLZSSrihTA9QanuQU2GVwYhaiAQFQcw21jfQDsz6pDvW6XQSzQQDnvs3vDaMYgETzhyQcUCpmWswZ3pMcKUrUX",
  "key3": "7SuRfCVU1T7NS8toxX6P9vozN4rhQbWPDoa9nPRKEZFYvdwxXBWhMybn8jBHn7z8gSRgf3hotmv9raz8Qx8c192",
  "key4": "jiRy9w2PMKEjgeY5oPN5WFsDeumHvFqiE7ZgMkVsHhexNX2k9QCkfS5ZjRXA26xPci883rfbjQudfkoKNseJoML",
  "key5": "2uVjp3nwmDeoFuC7t7PSR5YEGpBaRyF7Fk4QfY4uwRnDqCDoFyxJXmwsuWJLKB8o5pQjSqVv1uj37z84znJYdmHZ",
  "key6": "55MrE5VYB6YaWPJsUP4po83spX69JV8s6MT1UEsjPjK2Aed9RXLgVGZ2SMeq2655pWQex6TCNZKU23oYAiFMHpgd",
  "key7": "36titkikLZwzrzryndEdJUrY1gQdd1LaLeEVCzpmmbaek4dJ9ENfKqVajzYFE1e92VRmnS7aSmY57XAgKakhQrF4",
  "key8": "a7JdxNZXsUPHseMFT5WiiKiWFP5jqfqhTHoBzLmN7tYmdEkNHLnj47XyRSkBvWhPukFt7f5v7P4qdLX67GLCDk1",
  "key9": "P6k8ok3x3iwAWnhknHY2EASc8eZarJNXtC71QA59m9Dap1AJgog3pUgRQpuRGpnCDRkdRhrcGNFkEQKN5baDNWM",
  "key10": "Bn8ajMM7vfMnkkaTgLsm8cLJF7knYxnPQzjogkBuWDpzGLYMiUriqu7wUysnRB1LEixeq8eS9e6EttHWbNCRpy4",
  "key11": "JYxoSHDxFuDmbeZuw5UgS5aBKDcZ7tUytsNZ5WMcvRDtbie3G8P2DreqcJUAdAVrHdtqCY1cfjEk4rbGAe2AZHy",
  "key12": "3KvBrKn97aJ8yvNr9wvkvHP2pNQppdpnVqAxVDvhx1HEHTu3FncBmdvRUrmZa2PWMa2hvBpw4kYBQ3N8qBHzSaB4",
  "key13": "2cNVo2PYyAiZqohM62Z964Rmw4CGsCf3coD4KzzH4Q7KpQQxw8PoCwy3i3mdRj9NDZg6Vte4MWoLQ3aaV7svaUBQ",
  "key14": "5HdwAEomiTRtk1LaWfDdnghGtesrFSaAYkxLLCbTrX1DcmuadRNqoTrp4X2TKNepEHBBzNLkF7VDzdUbW7g2HmdQ",
  "key15": "qqumGLhofMhHcFhkmkqKpdWCCJGecdyyHg7ezn6fTNV3YL1MU5qY38PMmF8EN83Mm4dSPK6EpcoGCMGXoBCywpc",
  "key16": "5AYta3iSxLLX9bZCCguGFYiKzBAGuuN4Gd3znsMaGixySaL11USmtnu2Dvyv41hCLBQVegdd6wvZsvzJmVSSWj7k",
  "key17": "2mbyFo85yVN3n96mVimEFHFbNRkZ595fguxZn2iTuofCNsKum2nioHGECTXfb7d63g7BYzEv6pWzrWedj32acMUS",
  "key18": "4wAtdh94ktx7YXZnw51w9crDqMRnBjJPFy7omudXChZheYBwpo6it1gQYbU18V693tUJts86EiQHvL29MXPHZcAS",
  "key19": "2HnJKimiRxrpYeaLCRnremZqfuoCSFPphkyTpLBWKesskCSmKoALSEkcuHVq8DA5tgY8V3edqtMSqawqknPUJZrw",
  "key20": "3xwnj7eWP4RZAEzTVEJ1U48hprhhfUkAENZcw2zwk8dAo1726eAUAxt946FSxg43BP1FBXFjhSjeFWdu6LizFHgf",
  "key21": "4Tmnh88a8zEHbpjSsNL2PpKip42ve3Wa9eBHSH6UEGdvNDWLEGxbTjWN4UdUaeDF42vnqzN6WD6nHoK8qyS53nMQ",
  "key22": "4ihkbEyjk1wpp9Gi29sk8Dyf8YMUy2y38JQFvYczeKVaX3wNij2ZVh9C5GzihEwZunDabD24L4oeDqYQW6BsKPkg",
  "key23": "66tNQ8fgvUHcyzqhdbEfmzZnF8kSJrAUwtujATxW319LcUBype24QvsBgSdmHpXjiV7rDzJHT7fsjm3nXpdxVzJS",
  "key24": "4LTxRUHubJK47nphCEzjWrqT9JZPmympnxp5S2v79jP5r6UtA9aJ72jKcsidXs5hymzWdmu2uNpd14NenUH18iA8",
  "key25": "4RarW4auPK5CTzMSqu8aCENHFGLbs8Fk38EidVa9n13x4biQsRwCsb8AYvFtqbXQZiXa9eJiJAk67kikZiATwKyP",
  "key26": "5L9TMgshieiozZF555anYWjg8gHVrs8ocLEp4HnsenwhSnTcuinBZoEywPGVmJhadFxbLdrAGNPB3AUk4KX8NtLu",
  "key27": "64ACd1s3Wvq446Y31zceaZV2bzthRr847g9EfUGqw7JHU7ipR2GqY4HxTobc7FWGhQZ2kBQEHpvzu1emuPJUbaHE",
  "key28": "4Lz2YHZUayb7tChfUpizGmdygc4zAZKwPfrzLqHi9eW9uYYVWWK2jJ46uaSRcmRaQFBhxDUuWagRrQzYTJRkdDKg",
  "key29": "65mxRieEeHULy2wmGuNXAdFqoBZa1EqMsm7qwQ2tyhW4fJkBUJUfkNR6tdCwCgW3JFq3QjSZB6c9h3N9dhsZLTzo",
  "key30": "37rDsZbnPy51qSZZdPoXtx9B17nx4YNbsWQrs2MKmFELfh3KHDjPiYL3MxUoqkoJK9BVbZ5s4SEkLgU7H3kJNpf2",
  "key31": "5ULqc7ffR7oqMnd3e7rKYHPVrDr7oYTxHyN6aFUJmDL1U1JR4Kr1bV5WEQP1HakWSLfvVTaaQ4dxsQ14gzqNVP6Z"
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
