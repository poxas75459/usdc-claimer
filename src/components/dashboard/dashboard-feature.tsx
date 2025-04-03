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
    "2NMNdfZq8ribJAZAJxFPcZm59n76p7dZmgXgSm9ZG1CbMSHJU3QTCcxvtXsYWBUyagSHwsKF8277fZuC4R4noHUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2excyaVyRCrhJYhxPK8cF1wh5UnzWdnpCSoiv6iKmmHJwf2C5g2GUHdDbp7JFhEpYsMXm2NJSkhy2jhf19e15Kx8",
  "key1": "2gZ34qG2qXjg9WUy6gdRpM9RRkqVRk3qdyfHjha6niJ4M5vgyFdbxs94XTjfXUe1RkbezhLr9LEMhAdaUbCMrWoN",
  "key2": "5miKZsMSFxNz6B4worfsELhTTd6ZJzG2SMD7gFcqNjKchoxxR3FBSJjvkLZn1wByQgmMDbMNG2X9xYz36VW71kEY",
  "key3": "J9paKTBZTB728CdhAFiAuEAeQJ724TUr4ysNgKjz7i1jEPedPmoz3QBCvJyCZwLA6Bx6FEu7hCbWAxP4yobAFaw",
  "key4": "2aSu6LTy3ZDNxT2kxDZ5RPRAPJZ8L2dqPRe53vnsXbZ7xihE6H8DhupGspdyFJQnF2G2ZozKEMfCoFPrnBT6ey4s",
  "key5": "4tuYzytCXv38AA3GR8hadcEXNy5WrZorPvDU8TfWTnUjn6wgYaqM7nGZiacJoAkMGPvHasWJECaDAyGYt6DDgeMz",
  "key6": "32Je3LEPfmsFU1L9w1NhxCpfTHoaWCLULntxcSHSgrycYEB4ShtnKrfdtSYVoHnE4qt4XiukFUadY7DBCCTpJJ6X",
  "key7": "5DV2CX21Abe2BoNaeYCk84br6K1jGZA2CjdqPPGR5A9Q4TDvZBrrgKoe9smVir4iFxZKXQt9zT7NbrJQPbS9t3Xo",
  "key8": "gwo5CjJ4zaDQdV5Zr1T6eSx3S7KfsHLforURoRrmfXjeU5pmxoFkHzP9PNCFKvMqN2t7eA8FeHo2NQSgXsS3en5",
  "key9": "2xa1En2VwLSE8suvtjRY1D4TDP1dwoBNoPsL283nfoWZfeVjrjRia3Jm6jWUY8ahQLgWHnBxqrUAd5ESxRvFsSMz",
  "key10": "Af95qFGXURyKQhUSfaaKwHddqJcvq1Z2pDiMZDhciYojppszjnBxFTCLB26xyJXKm4e6eCVphNVAFgoLZR7Hd7j",
  "key11": "34QDXgLjLGY3UxPmERJ48tyKc1oDEmfr1yJMMkAfHhtw3Qk5BPgydWYsEwps6ZNn9CTGHEUCnSdbqpv6RH3TK3B1",
  "key12": "3gSNVfwBFw2pnADzu2oPXXXWdMqeSXE6YXUUvcKFTBKE9XDFULaz2AgSvAChe4tzqC8zLjQ5Rce6zyR6M2k33V6h",
  "key13": "3gAhbuvy8XHycpAw1X8WwLjRGhCqrzURvteoxbByhBiARX33tiaX8dX5aFRHdGPmy7fFfhHhEvEnVu51HmjqNUa8",
  "key14": "27QLxwi93z8nXzZ7p7M5w9EQZeGrFjhtiA1CaZA3KyBG4LykrUcCdAg1QD5wdQWT5TTcyPo3EFjHAR8u32TXiF1T",
  "key15": "3SULQe6QXrm56k5AHn1CFm1iZRURxZJFk5ADy9GcXAzLH8LLHKYvxtYmkAhRdqvyjKKpsDRuQpuWUPYmFwzpRcs3",
  "key16": "2QybCiiEaWUdcjjujD2jyyxvbtsPRdWJpcxsuTiTMy9G2kfrT2bz1Vi2eTxNdb3qdbZq2zxkBut67pebhqHRE54r",
  "key17": "3KeB5QXKGD5Ba6YYaXBw5aqNo6KQhP8UHiFBx41eqB8DotNjQisRNhRSqXQhZnutrQEUoQLTVKdnLfFSnM69PsdE",
  "key18": "3JauNo4DZx9D8uhGU7pHHZMz9gGRRgwKVWGJb5brdCfHT7xQazpQGNxVq5BAKQBYotypffZMZn7YGBF8w8GmbHSx",
  "key19": "dBCsVYxeibUNVS5kpVxB3Sdeu2vgRemtix6GcoWUdPHsP2VfgZXkcZVgTS3ue8ibsRm3AqLYwhA4YrmCFCWJwcJ",
  "key20": "2d5Bt17Po4K3e71p3xr8KpJc2Y1g8LnDiYizXdjW6mHe6PWLZyKMdwrZUAVPetNdHprkUbfZ7NPaB9Jh9VmvHajn",
  "key21": "37uknsszMsvzyfvL1Jh2Np5M6ezD6D7XihbPPxQX9BKoiSBBfk11aZUHgpA3oC631Sob6Rp34Jm8DCF9qhrKrBHv",
  "key22": "5z23WbCDey3H3wLE8uCELHWjy6noPYgWWpNZjAJQBBgdKvdrXk6jWHywWQpSkPpaMXecu66rSmzxUvVZ6qKQ6heF",
  "key23": "5UiJC5hmksPp4VQKBrkLqR17ct1K1LtJNsQJ4saTtbMAqcmY7Lr8sv41rGYTUXukHvPEBDW1NLAcmdkoSGVZxBaR",
  "key24": "GMVHJVdmZLeqhhLTtsJUjWKWRgqjm9SAEBtb4Eud4HBLATAuTGv82X2dmm8HNvyPpm3r5vrqdukUk4tA5YMR9Zm",
  "key25": "3wn7YkpGHu8uFfDMuXA2ARS8UEXY5dQGcNtC5e6P1LaYKW76e32Q1zAK6tbQZBdFWv4UmViK5yFMDGGSjuky8AUd"
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
