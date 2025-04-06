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
    "4XUi61Yu1W4baeRVcgNceswAndoZDH59goSTGRMWf4YAj1X4tSjickzPBwJtEbzhmZEcztxiHjPKe8xqUWqxxnCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ur5hUvCaQb9dNpUHmo7bj8ARKeVLPbvSxFsQRyws9UA1kKtJ3NvTb3AmU7BZ2BviYmXZ4xoEvVZGnvQ9ZDfqtsg",
  "key1": "4mXy3ubPjR42BhSqg5UfpFEtEhcPZxQQcW1xgfGZXzwahWiCVtCPTDWD9P5ZFZCSfxUHnV7NKqr96K6bTpXRQJEw",
  "key2": "2uaJ9zjSEkEz48g2SC5VKy4LyHEMmPvbiJEAjkzLgQkVMyvKjrr15fT8jMiYNcaoKngzeSmpPiHcVcgvPrDs5vXC",
  "key3": "5jvdD8guVnTDkH1ArRLfnVWjZTY9dV4vzvYZbhLqw4FBFLorBeWd8uAJDi3qK9GW54iMSbTtzQGhTHDTM5QtcgoH",
  "key4": "3os3JTNAun8C88KHqJ9dGadV93kVrgpk9E6QtMtnfzrDWY9kReCUgA7T9bueUUDoDqVqMj1BthpLnazFBM6fZW8T",
  "key5": "46vXnSC9ZTnjwVaMkmdxQo36esB8USNwgGpbhUps46b3qFGqBBUTkn1CtyJLdgva67MAXs4Sm9s8BAodrovkJY9o",
  "key6": "5zDtD5SbGx5UpdY8bWVFTBBsy2TjRmE99fHZFTz9NnyJjEz8oQuZ1BMoSDPvBRbuziZsW8VQbW9nM6WPSMdLUJSV",
  "key7": "5g1d6E2egjtbob5UM16Z72VqGrFd1oQcCq5oMRPKtZy7b4knNYjnPtrbnSvtrvpsoYortqzDU9fHXGev56EmG25w",
  "key8": "4t74QJXHTR7D4J2xteDMEEbMjr4f2em7MFVWZCZoZjfqZj6y1Dcr59LTG1AxvFnrktZRhrHkKFr5Mb9wjPYdzo5B",
  "key9": "4bhDrCLGmG42FJuDUzdqkb3FjKoBninF7aMDyM78M5GebBxyexDo22XZpXjuPECe9Pbv4zt3M2Z8EwpxNzbBsH98",
  "key10": "5aUGN9DSdmzyTjUM9knkiaSavmRGFmf3zKHS3gMWt1awubs8BdSENsqAjbjdPK1iKEPfRkkSgJRB3h1NSGk4gytE",
  "key11": "2PVYPJJL1c4JaHoHq7Nx1qbLepnyo315UM5QdKdhJmz2LTrgk3LtNEcwdiurRZmDF3DmWcYyc2Rru7ACXh8y2tEB",
  "key12": "2inmCWs9jqchqB14iayeq5RetUmiQNyqgFBUw2n1QEoBPNr3miUbYhCNrJDHMB9ewdohwP2rTZuD9jRagv5E28M4",
  "key13": "2gpetsNuZAe1n3a9if4tULvtJTgqYVYbESZabgj8eFpsCV11SoA8CN85p2Ur5iND1dY6t7Taee9KoBL5w3iLKorJ",
  "key14": "3TztnBWCwehDmeXEA29xS2XwnGukaXk11nd5k3r96YRq8Z3wLMH3TiQqSpw2gGT5NxkVwS2rKfww7Prm2s3hheAw",
  "key15": "4R286FJhB8sfoBcNkAb2U8jedQpSG2JR1p7UwABNkskwSMvbLiWhHXFp5hFYfawhiHxnqsjyJ7aSCxPnzS62LWMa",
  "key16": "JWSHvW1Si2ZkeqCQehSyh3Yu2zqW9FWtDomxP4G81ghKvtTRvcAYm7E4mzMuGZCpuN6krqWX7UafraY3MbhCkP7",
  "key17": "1tzR6JKuC6WMguXmcbTeREdgeyJkxGLNjAzV5DNZiysmYFrDBGASCHDLx1czzpcYp3qeQH58HMvsRZMJsedn6BY",
  "key18": "Z4y4Gfkp3zWr2RjKwmfCZ5ave3eHJGrrxTVmEN1XBPSgtWCcUEeDq6u33kLiKPTutuRdWNo1x6dsk3ATFs1usdy",
  "key19": "63LeYmzjpiRLQDVSnnzQEMzJFoZh9u8jdJmtpMYcMVU24Rj1jVuzH3dfEQMBW4inCN5FmbwSvVytcMr2JroYbopZ",
  "key20": "4yy9UvgMYS7zZ6rGyQhTfedB7N5gwChWM59VRLceyfyYX9fPMhGH1R7AfzeYtXMMRa2THbnnVsTruR8g8yWRjoyR",
  "key21": "5bbRFKtRQ9yJH92UKiwApWungqQsNyTkUuzUxTG3TLSyFByP6HjubJv8TYnNe3sXTjdwUYWZdpqHKpWpK7zkJcwQ",
  "key22": "3qYszph6tTPk9ahUaaaaFArPBecXYWHS25PTeEmTWcmnsmtWWzXBGyqfbCme7ZR4GMRPzo8FCwCKmFG6FrQUuzrV",
  "key23": "TBerwt7nVCKM78nYFhb3La5QLnyc13fiXzFnJUQrwughZavCHVnZeo7coNRvvox3QyyyueZAvytF3J5vqCpfYWG",
  "key24": "2N36SZHS4BU7Kbqi2yA8GwLDgDxvekuYNYTerdB6rSnv8eKjijWMZHG8jQTKPzRuX3Ap8AJX2rPah7FivN2kFJ7s",
  "key25": "3QMYgTrvwGu7ojuuBa2wBuSxLvREVA6GYfM4xDcAwckAG8vFsTeEabKJWiYDoHfhqq75zqupDwpK4sncmNt8veWJ",
  "key26": "2h5toTfQpfXAjTxAgnaYVob5ZYzbUr6gu211Rg2RgUbwcTp4yGVktSzr7AtuUrvQ1sj3tvJTgnqjVq5UuNvBy3qX",
  "key27": "512mGj1Fy7QSwHSTTBGCStCZfQbMyZvm1JTeSnnrgEZ1hXDWEoECKVhtxYSf3BiNHufJtTPmRcYg388EAWtMWKhH",
  "key28": "5ashfy4k4btjvMJobwnPuFfcmpmyqfQ5CTHhdc4Q9aPwjQ9R6vtVsoN7vc1ohVN328TL7QCkxRSAVFnGcZM5Kocp",
  "key29": "4CWXWZm67NddiMJFZP7XJVjNqE9B1BAWRiPTCzHYm9ASYyqkcMs1ZSA8tjDTAMmviYsiEwdAgyf2f3Vg737uqsSc",
  "key30": "bC3A2NKVxW68ZPsH5aWbZJWqDSqUxfabJh9bpsqxUjPKD5jNj1cPcbJCwTz1eihmtw55JADRgnzESwe3MP5GWFV"
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
