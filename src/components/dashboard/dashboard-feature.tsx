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
    "2vZsxP7wVnWNDQRy8mn2qSQZXkcULqmsDru4FcnUaxA7ZkVSJ99hRC79HwJvCEgRdquVstbH186bJ37q9M41BHBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EVLQpoiPXMpvPvLaRGYwHXdnVehqbr85LeTMDad55q3vENpxBD3vx6WqVnbYX39jCmPrEu5XKeqhdHWPszhk12b",
  "key1": "4EczdZ6jbP9Jov6WiH7FdzvbYv9JCDyVjXv5djjzboMRSHjK1keV3Dtv4cKFUSCP4Zsw8gVEVm2c5qBo72u5KP5b",
  "key2": "4xDEaosVgNCV5yAFRPbghdUf5ubvB3dUcGsWE58XoCaEk2pVsSw7TT9Ex2EbLEvj1gfLGEBg4h7iMbufkPEpBJyr",
  "key3": "5Gsf75Uk8HeqgWtHCSc1wB6kUsdvTPZ1anKPW9FcP1Z6yVq15UfP2hzDZYnwu3hi8r1R4ZoawNy26S4NTDBHCdMx",
  "key4": "5aFAhNZYZj3oYCxuFGEPNncSRG4v3KAvGArPVnrcuuzpPJB3jj8bXLutsThDcnC4Mi2Qr4eP5nGf8HM2yD1jHKih",
  "key5": "3HimjhBy4qJTHSidAPXfXYxXiAjq8CDnDQXhevbAWFBP6N4Mu11MevVaC5ymeLunpjbVt6sySwACKnDKsh4E7LSK",
  "key6": "3Vvc6y773fAd6gPdpSjh5uABKmWG841XPA9EAtVYYe35LDt7VQwSieifao899eZ5ZTWWHWHB5qNNk6j7wAqWowuC",
  "key7": "iV5hwHvNXtdkD7VjyLLpjz6XomepmmygnJxw9CCtRpm3aHEgb88wp2xF49gQfNoQjtYsrav529QrwEzuUcR5K1S",
  "key8": "3zPbE4HDoUSc9TZppv61k4a9u5oCwKW8GzLZHuBkA8kzDL6okUK2EuTEyw5MWaAF12UiUieRBP23gaquc21EFrMZ",
  "key9": "2PgQSJtkwhmJ2W9uACvkjvAVRoKThrxneh6vL3J3JyGJQcHuehEJ33HkLdy2XZa2VD6MEZXMgWcXHKQaUPp5Fuhv",
  "key10": "25yp9KFRsKhhLPBDYjW6rM97d7ZK6khjBMBYyU5jfihBvGhccgMR5UDnFwvMnf8cTozBcwPjeM2xJGrFmvN4RrE7",
  "key11": "XoAUKBm4WAQ8nbfUT2EV7hg6VQMHsfUcWpjdQbQ3yPm5WtU5C9GMnWytcRv6eWUNvNHCyuzMmZ2kQRX2L27dbuA",
  "key12": "37bNg6dHKX9ZfAp4xU1RP9zppauQhmMfgZN2LjZ6ABXWqKsfczqtcis3pxEHrA6zY17iyQ6vHawHThoVPd2Yv4aB",
  "key13": "5iMm3mVdcYo8ZKM11zQdv13sAeeRcxv8g1smsgNNgfkVCFozMbAQefWAWURVMxP5yJmFNmKh3LVBfq8g4E9T5bry",
  "key14": "gd1zcFH5z7tChLxoKpuUr9ds5kXdy19XcbFHeZjAsiFmKebbYaVEmNg8uTySassTxDs5tCTz4ZrimJCjKSDbWoU",
  "key15": "3UYVVPdFHev91Dxfh85eKTExm1VwycJS7ixhzuSXpmaptJMjvr9XDA1y7z8tjTrycjdv5Rvb9KK9A4iiBi8yMvwF",
  "key16": "63KmoapKyejNfYXw56WrEtQhLkqdVQk4VRPiUDa6Yn8E74ADkLKFeegBugp4rasYVUt2cWJ5WYKDm1kbYHqZhUG9",
  "key17": "cavjiSSXDvPtpqu5KTPf6ASDuz87cuDMBBPSHSR5Ri5hsAg8RzQvwRTzqaRCcdAgVrUXcgtSMFFEeWfpRJRPpiR",
  "key18": "58TVvq6fF7ZtivRgKyZTpYsUbaeS4hP2rwasBtoPwx2EJMqFVorX2jZk2Ex3Ud161kd16EPU2AQhV3vMyqdRjwai",
  "key19": "3w9i71aGUr84ZoHJShyV182b7t4PZMayvH4iXn9SCdUDXu3UFkzTCfr5kVfKsygM2iq6vehW6AHsKqt7cycp8ixe",
  "key20": "PoyqpiYyfqJPePnENydpsVLojgJMGhdrDpcN1haVmtYsd8wixtLyp6djt7dNHk354uj9hocrf6VdPkd1iiaAz1o",
  "key21": "L6K9rQRom3BthjeNoRhFdSsycZB7QutuA2muPGqLPPxnh3sdYoqZziTZwbezjTH7LvrNgGY2o4Sf2UT7t535LJg",
  "key22": "3US2wCCws4GEq5KzJUromtkvHMegftPDJj11k5mLYSmvKLH23DsJEVAwtZdm5AEjDYuSrhC2RGM4V4C27ajPPmBE",
  "key23": "4BjXXYEeJPEReLreoQdpLB9ATVoUYYP15fJPcZ3xPiBkRCYi2qyvZZkuGcypDSxV42xGyYM89w5x8otUQmaGZmCa",
  "key24": "4bdjCgsgWTM8UiuDB6xZSAdR8mNtcgJkiCPtS3WujLoHixdXMn2eMoGPajqHeQWLCrW6mgFfZaduX6vTfGussWos"
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
