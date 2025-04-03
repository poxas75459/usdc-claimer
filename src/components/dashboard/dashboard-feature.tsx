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
    "2A3EHyJpnfGfb3SRwyxZVKAswCyX6Gqb3UM4BuoyEidtNn83UUeGt6sHd4YWU9oZ7JZRFXXvyXVZy5FvY6rb1yZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XZPLcNaqcgSUXzVhysaLVoXmLxxHCyifLD6Y2RNY9MWvDEbntEf2NeKVtCnetsAMKjGaNofTCgE8SsLt99AefNz",
  "key1": "41YrYqG1DhTpFVeDjcQaNYgwBRNm438uovUXyXcbUReyvLQpohohejVKya4jJKisMDicPWpma3VydQvLFUi1ekou",
  "key2": "5Xn6U2f8Lv4xzC4xgVWpwSdDvPkJAaJ4VCXrUDDpVhfvtvr8Jc5pGA4QVQz9iH6iA8mtgAb1XE35UsU36LskVDpU",
  "key3": "7ZRAmVnStfbA9NFLqeE88TbJjE4k1gS4UHmbm8f1N6AKVADWX16FViiYnud8rzuVD3z3dHvjCgHV3n6ph3Vw7M8",
  "key4": "hFpbcEGPEYjgRDj4AM3HYGV8LGtzBDLY91BkS5Vng3ZvkYUdLFM1pdAYXNZseFVWFo4xAm4v6E5tmzwNPM3DmLV",
  "key5": "4QZdzKiVwLGZ3Dj6pL4cEZHjtbVUDJpTR85Th2VBffkHbFP9VjT1JNDM9JaeeVAZquhn8iTaQ9EJhh1G5tZ2ptsQ",
  "key6": "5vi4TKbTm2i4EtGd4WBu7HzvwgptwrrmaEhcnxsh2CwdCCWYf8bmazptqLX1aK6dxJdRHALnmWmwoa3WDx5MxXdp",
  "key7": "48UFWodavCJoZejZPoQ4RxZaPEdL2e9hcG2QRXLU5AZVTrFv8gJpwh9NySLhN7eNCjh5sMMGDWmdkFMfJqyDuecy",
  "key8": "2z1wpJeMBv34PJsMF2MtiuM2wK8rHSpLrzhRg1n9xyz5rugHjNEqiazXznyWigaD2ACdYEf4ZYKG6w9apjqtvge2",
  "key9": "27pzeYXt3Yd5KDEUhfnyS9jJzZxc5tuSzR1RwrLVsbp3VYBuGS6zW1qUpzFH374Pvm7XgADVPnUiPePGCgtE68J4",
  "key10": "dU3UoweCkWFSmaMt1BZsVL8ZBFsJq7tSpBdPxUfeXBYPWdnVX5P4XPPpooukzZ7NXBo43MsPeEqEQf2kgiTa123",
  "key11": "51v8vQvnNNTY2UATMoqkGkxLsQzbiz9Zf1UrbnUcS37xBLqoLs7YykzJsmcxHvNBtBrpMDLsYn8ZhfJ6mBzXkMot",
  "key12": "oGnnGeWMCMQdQ98svtQviDtLTGYBwZ9qTktHK1RREZkL4z27AxgbfF53EoEFMW4oYMT3hZbZcAW9nFJ86U77r1M",
  "key13": "3rFvjRQY5fqiBiexzZFMWEER4MW39MBCXcbQjngnGpNsQdFw9XXGSH4ATBqkcKUY3JSgWKLgBGXsqaZNNSuF696w",
  "key14": "UHG589Ktbw54uzui4DyjWFFnuvpNMye3cMwWJADfsci1iysz4XiNJd64R6p4r1RQqUyUR5WuGaUBN5wuZ5CoWdr",
  "key15": "4cYNqQTkp8hDwDWDKR7GwmzK76ZzUqjAC4Hfkju1YZWLi4nVDa55PQKZmCrvRqRkv6NJaQLxxQhH9ss7MPMYNVmm",
  "key16": "3xqReHvC3c9NykMwPsrUxfXmzNMrDPD2bnB3UuSk7ruwqNY7xanArHf4peZrq4iXWBnRy1fbNbGZgubNToqBPomy",
  "key17": "VERfCt9RPuuHhYxBULnahayhKadurWdBra1JaF5hqaQdfhAkhLr6nvRPtE52GSba3FbyhNC1sW5a7K6QBVVUe2H",
  "key18": "55VHrgmoBGhkf59LfSPXDmeXpj8nDYV5E6LB7qrvBJjuSXRWT8wkQ3D5wbvPi251fqfgYDvnKbwTrtNAxw6x9tcR",
  "key19": "2YsChefDMbBeUU4KvKCCRzuFqtWUr95Bs8oTEiNJsQ5WMxEBKjuJ2Hq1KDdPkcga1vyzUvN132BuDDJ12MdEhpLj",
  "key20": "7Sw9Yo9qufpm1HmY6NQi7tVowBKUqTjXYTkzVXkgQeZfesMPvra4VTTRbrfiiZ4vsuH2YrKw2q3caabyR5avQty",
  "key21": "4UFsJ6jsSzanajobXHdrdon6mJjumgQosNtX47q9zZBPwebGRrpyTWjh2t3biZ9KgucyrRsuSAbgT293gCt1pN3b",
  "key22": "2BV7yyqHT1F1351yex6trwJ89YvwGoaQ4EfoqR2dpkV7hC9pzhyg4cL3C8r5ux63btdeqsVujPf7q94CLrTbFHP3",
  "key23": "5NMyFNzVZt5cfgCrmxwqi2JYhyZwKhqfocTDkQBE7fRSAfsJ9EE8hak4yRxBNiNr8NA7V39vsbzfXc2Jek41tVuq",
  "key24": "4wqWghcPeJHmk6F7TUNqNdvE7yoxfskj5UmdWLyPdYJnxPjxTbJ7yNzShMjibFNc4GxApERzJJRmZ3zAx8G6L546",
  "key25": "2PJvvbDcYF8rCW6acGmtrcfNtf5h6VMDgpQbTtbAuQC3cgMhFow1oBn3mfwoS9FdQuTnmEwREUu2bp5NeYKHoGvh",
  "key26": "5trpPYLQyxtB22JWSaxaCP5zvwUdMVdwLm29Dp2f8gp822yms4TwsSuW6ZSfvqtVMhWRouA4Q4a3BiP1oudH69QM",
  "key27": "3EMmeZhrn52hWu2uxxwXBiwBX5qWTFNBv5jzHc7cxk5BuyZWdDybPfuRk525ukXTeKAonpfZk1EXTNY19hymY3gN",
  "key28": "4tFTbAFoWtbtsJeumi7vouaYFfyQf7fovZnPQiLLvco4r76ZWNvyFWMiJ6VnAjhv8QRpgxkw4AwRCEnybwJ4xcnT",
  "key29": "WDgFxYkSpKPZGxVwC8Qv5R52kWVVPmoGCvGwhhZk7sa43K85gugWGTmtFsdWaR6eDbWcCn9Tu8LEMnp7azZSjUQ",
  "key30": "4axtJZtFNapNm26BRWL7cdXvujB6yzcpx1AquZX6atCAScKi3e2hSitjqsvm6n5RtptcP3S6JUXSGdU7oWhsS6FZ",
  "key31": "FvVatSW85xaMvjDnDu1NAkGXP8Ms4Rh4QDYgDtPDm4P9uj33HYYfnxwXYT5uKUdodBGiCXA4cCAhU4BQiTioTLz",
  "key32": "2gVDKChwyKUFxfg4QxmSxBr5Au9F49sB3sAAM3pm1wxuUV41FM2bBAuMZ1Q6z8ABFRRf3tP6uDPgGPAx4VYcL4ki",
  "key33": "y1oxXR7UEsdBfBsg7jm9KAGPayEuVmEcMX6GNBoushZxTTuwj6JAEtE4GnMko1dR7kerNLGxt92BektVw3QycaT",
  "key34": "3Ef8WGcvp9WnDbWkPNSRoP3wUBM2Fux3e69YK9p4dTVqxiDStsVyXjsrAesopiy71yQNBXizTtQm41Qz8CGaxHXv",
  "key35": "3V8EAkHtLDvoW4pkzYHmK75wucSucisKda8akZRDRdx81gVYpnz3C3tyNRPxDxzwKab7kwiRZZ3P8PE1kYfm26oF",
  "key36": "5s4F8rnX2pgAC3TJfuVmPoVmgsdvtPV8aYuhJYybTwgUHPibi91TnURRnGhzy7xETnWDF8jbt6srAJgJX7EUPfF7",
  "key37": "585APDrzPntbcXU8MPcB4YeMwCtvEfabvrYja3zNTQ1jCC1UimawijePQ7bdr1S6vAgSmT1eQi5LzH92KXF7pAxV",
  "key38": "2j7JRFRxYhVeSsK3MeE1ePLv4nDnAfREDxEaNpj76E98hsYS5PCNLcJwRYrmTrcnUzDeRJ1jen9sfAEtSFsNnY3Y",
  "key39": "FCuXgtUuxNUEATsdgFGE6CBAWVnaEYXkVteV24ZyPA3boJZ1dwS2o6SQuQaK8KZkMD6uc86gQyVCgpLzPU5jLzK",
  "key40": "59GVuewDz5upVz2RMLFJGknDJjSK1vSLB19FyxGoo8xnC5mGYt5GBmib2LJ4id2bwkrgjAXS5RBWp1GxNBPszTKf",
  "key41": "63xj9T2PXY7b5zwRu3rkMG3xBvDwXh4eWVRHGfmogu89YFzgU4ohZzyzjUmc14b9QxsUD8yyQsSz5VBdgoVzVtAe"
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
