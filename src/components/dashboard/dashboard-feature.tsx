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
    "5o8RrkJWxnHA38ku7AwJAbiNs7VCfbYhCorcmKEWVLFuYAKpX6bBr58qnBmYShBogxu8MFBVGRM59wNpym8NijY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kt3eSoZH1SWgrTkgffgUTPpGanZuvXyo5QAZLGpys4GAAQ9QEqUtrGnsswJN9uP7eJE4kDfR8BjEPH1y7z4fKqS",
  "key1": "4Ypkb74VMi5GC9bT5qDKSEKd8aHJ7nHcHdrj7H34nhLmUe92iK4PFNTk3TC8FU8CRG27oFqTdy3JK6pi5RPUY4D",
  "key2": "4BS9cGUuAPNKCYyr81FSg8nJ1j1XRoePXz8rdQJhv3xp8z6bp3bDoCjJasc3g2s5EekFHddQLWgLVSZpAx4qqYXC",
  "key3": "3DsSfSMgcvnvKm4wDZoRM7Zh8R9AUz7h1pQ8Sk5UV4fSC6BgLQBQN5BRdS5RGrYaLS9reqRU5mcRe2cm59LUXMiF",
  "key4": "2EHytv2AXoD3eEdH58yKpUgKxd9fQp4Ry3Feu79SR2ny3J9ALmFxaujiaPaLaCBwJ2LrEiZpK79PBWt9dJawRT3P",
  "key5": "5sMvA9XZgToJWyQaNFAt2eB6tMosEiRKF7KtRZ98Jmn3kPxsonb9c4fozas2wzaRVKGHL4xvfCgb87G8iBVJcQZf",
  "key6": "5kTjFrr9HPSQ8c3rrPJo5y352eMPJSxqs4RWU4f9oTc4Cbmw5BUPgTaWJUJxCP975oRD3ehZcCncuScNNwwCobuB",
  "key7": "4AeffdKnFYdxAeEsNZRhTTsuDtps64eDDQ3spUEPiy2YhDLHCviESupWyTFiMTfUUJtb53fpGfw2W32M5pCHQtz5",
  "key8": "2WhXCV16Hwdy4emiCcT2jGtoE1k593Vo1khkRz3toUZeVeTCF4CStn6dA64nsaCYTuq7vo6PRAPB99uxp6aaZ1Zu",
  "key9": "52E8V5idPnAHF2sszNjDvBNN1besVwwr718MgKwkJTry83zsSnYECb5nLd4ZK2WtnHqvJZ94bXdhoyTqjQScbTXz",
  "key10": "2BMQso44CY42d1c3onscjvPiXdDiwLG7q1jBXNXVRgwEXViHUKzc8egnepZQTPgjJpVPb8eZaas11W2Tn8qNiBSn",
  "key11": "K3Vs9BEcnM2QLicUUuG8cUv2hM9UrB4cxXLiJikMverVqyraZS1zWzLNVFv6BQMGv8dTDsdfnMhtAfffGxfVn1G",
  "key12": "4EqeaERrhRokdyNhbPNpkCj2kcpTbSKzJ9Jf3fNs4M1EcANnMWeTGuAgvDiQfzi6PQ8JTEWGJGbdCijpY3qvqnBP",
  "key13": "22zwHuxM5ed2F8PMYo3dPcQZwFLMf2DFHpGmCtgNz71nmYTeyVouK7TkL5m6mi5NtG1XvWKhkpSJFfSbByP1bjjK",
  "key14": "44UMV3gxuMVR4ddNWPFuBBKNCfa2ybShk881wJpQTsRKT6CKFsb3xM4GLnTBkh6EgBHmg2u4WTSbuLuQm2151xcQ",
  "key15": "5J3SscZFyoojeZKdS9zwpuKE79euAxsMr3LCVHhzhHygUjtsS1UpvbDbXYLvfBAk4xcAkW9UC2HgfL1uehLdq3zw",
  "key16": "LqbKNKUSmWmALoX8UtV2Dgzno2kCikD8ZFbQ1X6yNsR7pKCHw36mpoNRMdc2N1JYHkXaQfTwAuQS36L6UTsnN1L",
  "key17": "5kqTZ7We9qLe1MXs7NRyVHjFoiBwGa6L9u4MSBya5dKaoHCXmugdnhA3VDhyvz43hx1sM5J1oyeFKhf6EdyAFwAF",
  "key18": "3QwYpVYKLdDF8GuXCWCnweezsRxd1vSUpPf1XexU68hGFxnEYnGgerjjNwAS6X7QErh72iAFL3ksx88J2q1bWzP5",
  "key19": "2WxY9QAitdgeV66YH417oaDr3VeV88rUGRNUMLciLwTkBjGea2gtQ9MPR8pRit7WNwtEj2DosbKopEKezoEoNnb",
  "key20": "5pcY2NjyAVvFsh3hw9JVR9n2N5ErCefyEpcfwnxn7hwAjeyeerT6iJXVocS2DbTo2TyzTYKUKFmphUmFinmbj4b9",
  "key21": "2Q9x7VGCXwtpRywr4Hkrgm583VppRkLsBPqH5ZzGyiStxrh5Jb41bdWuEdjirPyLakBhWDR6KZqx8aKB4m2o43bZ",
  "key22": "5SfLdDahs338GJiQKrhSHw7WxQiFyxgyHWKc5L84vRgAVTF69sUdmwcT6XUQ4AYHXUTnhDjZkCUXvS554cY7oucz",
  "key23": "64VFmCKHtLNVyornUPQxbP1BXEzaeByun1MNcHtd8YmpxFzNgxjG79bZFXzX23g65XFdB1AgRaGapQEYPxx4CYWB",
  "key24": "5EbKooMXffU9jbMFPZB9x6dxFuFSSfLqwSbFZ5MG9ZfPV5hQwmSTDLjVsA3fraNky9X1qwfkPBeQBF3iD5LvcT47"
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
