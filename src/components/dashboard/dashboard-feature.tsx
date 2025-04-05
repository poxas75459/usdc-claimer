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
    "4gbywrVN1uT47VzBNAg7VZDay97oM4HRYjKwJLL1RMjFSry9MMGL6a7qrkcKdgdV5ti8dyDWX8EeXzfYYtGuDH9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uu95aAWFSzMbtrhWwxRS6akupyUXXAKEWBJMtutqhkbwKVt6suCLwgcj7vg7MdYzA2YGcFRudpwxVAy34cJZAS3",
  "key1": "4tLxVEkFKyRerC9p5LMZcmjo9GF1hwCpSNpFs82zgvJSsGMExhnN7ExnbYrzi2QFJfgq7KQsiUeK74xQF9StCsk9",
  "key2": "2oSNSco84pdL7NupYBaHhnTkFNMCbhnV2Y2MxTKZRxfWGiLUwdyjpcsQWHGsNrgMNheivtUouUpGqMTdAF4KM5Zg",
  "key3": "3vZSSdUoBsaHiHZbJF6aLPMPqZeydPDuuBSnoEom3Cea4zZuRfwXdPECzCwrBEMkHNiypeF4N4nbTFDseRUhMPSk",
  "key4": "3FC81dShyLbqPbZZuRiiFEtpsC1qBfG8x53cMTFXhPZg4Nyfo4v3BbYYvWSVhbde7AWswxnuuAdN1kULcfHeWnM8",
  "key5": "4DU4ooAGpUbBDoRogE1w2Mwtfbfz8Jnsp7SbppVDjPqqFi1Zwp7bQA1qjzJ7J2w3BBajczG67AHBBxKA51F4XuZs",
  "key6": "4QcM6KZuGR91hPCFHhVTGyE1KGR1JeBpvT5JdmpJit9TNo9H7BEevRw2AuPhFw2Ea6KcCTtHiSGo2BueuQDZKJGy",
  "key7": "52apYxcfWzvPca1Tgyjaxo11Zf4Hs5RRtBZr78jtqtybYLbYzy4ackk9nPVc5CXXGHibXkgqWSNvrgqvrr7vdgFy",
  "key8": "88TThGqBcs1DYUy6DrRnbs5YYYD2tDnaAKpX57EQhsYynyWqoHQCNuYqmZ9NBsk6uabahmQY8vmdXQANxVzAXQ2",
  "key9": "4YVdHmrB2Hj4mDQYL9bvCsqy55kEwSXhcoX2YAant11WRrVr8ia3DxCZCasbdm5bBe19GfuLF3auARQvZFceVM6a",
  "key10": "4ACpvav7yHofcEX6KumMarUdrExG6keZ3Crxwu19uHpcovPf4SZPP3jtSh42FyW6eHh2RtTzus74E3j5GJGQ9FK2",
  "key11": "35AsUahHEu3kKBVKTWkJXkEQWYAcjc6eV545GCu5bhbW7mxJ6pb9BfrKKcVCwLbtXRRBS16AKy9QmAffPcTtjtfj",
  "key12": "3FwBSLhQcueJyvFeVBxNDqciuKZy13vsbs67vNhzSNQde7Tsqc1K9VsfdaSv1AUUKHhZdcM3Kdw9VdheZpJveFQs",
  "key13": "2pdd7xYZ7LS24jNtM2tdq56npHWcKFtGMVaVkDEE2tQ4rKdmoNi3rjrTfbs2MPMpa21mU4rbHaMQJ1jbJhbQqV8F",
  "key14": "2F6MF5DTP167XoDnFecGZaKeWqcTtaUJxB5QgQKkfJRjRGF77HogdHHeAzi36rNnXojwVDMvWa2GPfcx1mudgfos",
  "key15": "3fk35rpr4W6LW3bCnNSgfG1oznV6ddqdU8uicHNWxDW1qrWfDHVop6bgWnG93eKt7GhECG1CofmWNvX1dnBjhJij",
  "key16": "4PfaYy6nuuBP2xsmSsdUDUxzXfhrpzAtdRymKuzaC5sHioTF23QVk9NdA1kiqBe3KWGKyyNSoGKMJvDy7Q5ymnUc",
  "key17": "xvK3qEnDYWZvoQ3ZxhVEfdFoyVtME2SUNEMkBaHCioJv6W4v3vEhEAZDhiRRXvNt6YFKgxJpMcdgftZtBxyjtWM",
  "key18": "4RCDtkxZqrtQV4WXgyhMxQ6djySooXwgbZTHiP4hju6gViNfzBFHuEaLACNaQT8GQzfiNeSJ2Fua8w3ZCCPdpLth",
  "key19": "5PWi9SoHYUmGfGeRbCU29wRANqzvroMZUWJewPQQkwqcxME6Ys9xjusUhzmHsUxSCzfzc7JPCBaCHYu2y1MvViwz",
  "key20": "2oPuRWiCibQMWMeAp3o1TvuebKAqHs9QJ4Mhfp6VdDP7UNwXZWeXp8EXD72EvzjeBCUUWvNUTUCfszoY1atPdq97",
  "key21": "4NCGvuDgqaYMcbJabLFEzcC6CJyzZgwrhqJtG22mLd24PyMSF1N6ZrTWoNo1CTU7UqusqTeaHttk2bqxFwKoWs5Q",
  "key22": "nJZwtYQugSBpoDePG8xhNn6gWMnkVTa1cZzFcDEN1zJn32MmWWtSsGj99NynDMJLaVrD25TLAYBxJTfU84SQFzU",
  "key23": "4KZSbeErTNkVSKa4bT6DT1oUzRmJXkU1adrNzRtmoywWt6Soab7m2GmBHCoSrgruyRpTEH1wBHJnq94ci1w7taRv",
  "key24": "5VFPsv2wyz1WqpCVSrGu3MBWdZnPYiUPM2E1NjDKNyJ5hA1zy8wDSRAsNYJpo8gXLsC3LKMUYgehzSJy17KZhGjx",
  "key25": "SaKZUtLeDGbogWa1Aq4QkvprjgKxSWH2hnS3ipV5C5qLPVGrX57kRxerWVi2HRaXsBG1kNRqp6A6TEG9Sd9sWLk",
  "key26": "2H6Z7MqaEG8Mve9boqjgpMPpiQ1E3hUqKmY9y5mhuW6Z1iefxZFFyefCbGsU6pGAQFQFeJe1Tk6u9TQ5XRw9upNT",
  "key27": "3ca1bh74Q16VXRSmxjuU15STCQH33drwq82g8ibQCXmE8em2UW8kPmuhvPL3Q9GY84tuX5iKP5G7GvNPM9dsadMz",
  "key28": "5NfVXCpFk1vwdFULLC7c9Mi5AbsXx9BhLdomeM5WdDgPQvTusKbDy6kP9FawPMp7FdMUZcqtD9dNbyqPG2N2EhLN",
  "key29": "2gPAYxAocg54h2cdq134yENeF62g48HBYd4Rv8WhMRZCVe2Xp8AwceQM3ic4YoSUwNAQtAjhT39szYwECZqHQiye",
  "key30": "3bzZsBR4t4G3ERvGmX7wpMX3wX5rFXEKTQgjdp25DxJhGqroc4KFpygYwmXFMgZZcAmp19t8A5xWtmpQ5UW2PrH4",
  "key31": "2MqQaQp1da5tDE1cN5U8xEBMzK1dYkZEnBWyg7aW3pAxbPuuogqvVy9MHvXmcA1GMeDgD7Afm9oeWwA3w7HxU46f"
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
