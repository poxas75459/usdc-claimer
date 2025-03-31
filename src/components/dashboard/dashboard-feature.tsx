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
    "3XNu9z6tT1s8Ea49qHXhCkt9xaHQhrUxkmqmXrXUck2XckcoeaRFu5nrFADaCgyduV7WaX68o5cpMENYAZtfG92H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YNAFNBhk3av5HgmmEEWcg8F8QnkSvt5Tj4buXCRcRG3W9k9dbNyrCjbahDqUKCXXBjHTBkbTyZv2RpncVsxVYjZ",
  "key1": "zMhRC6J1QbZvNfLYPLxBBVH3pFBiQQabwk7C31Vench2DXCRopWisuU3J5bnLfVDrggzG5WarN5Ep7wrT83aBCU",
  "key2": "5JuWvBWZAGXGCAGtpyegUNkxk7CTYxHRgfg9KhmkWBTwtgHmYWm2JHbAiX7utsztgyed8pjH23NdsakhE8ZsBvTX",
  "key3": "2tCA4wpNgRNdJggkHt25SK8guCX1S6BnC4wgjqtwvj7kxx3Vgw9iT8JBN9QzXhGjgTWVsVevSmEuKP4f3nX2ZabL",
  "key4": "3hrxyXBFSwXhEJqqtZT8kw5etHaRHBuJDX9Fynf7s31aSHFn3kfkx2Cvpmck2Vw9NNmvPhxYC8W3FqdN6o6AruUB",
  "key5": "5ZZWsbRnGtwWLrCeoxzW8hCZz3zULtncjufodmxffEqkGjn1HSzhnekfu7aLqcpTvsFUvUVYSFpUt27wJZ2popgq",
  "key6": "288N8NvpHDDHxjWWSCVsiDAANEBGTtjRgVezFePmwPAxRhG1YpHoQE5eJkDztSJZhLLwPC3H5tyxFugga8jtbweB",
  "key7": "2wtT2G6RX4JwsgFymnvV5h1tVNgxkySnRjRtQRJjiPeRV4FmkukDqGqWCNoedqSHTNtWW8DvxfftJbye7pevk3js",
  "key8": "3abAqaZixrU2Cw4b5cQ7Xy1b67YnBE4QvZiGLKvcmnFi8EWp59HDC4bB5Ewbff3bTjGcXoSuhuJF4EH5icKKdFVM",
  "key9": "3usdrRxHL1uoEZypKcvXnPFr2Ud8yizMzKCqy7w9Kp4VGbrSs4VtCAKsxY1HDdNf8cFZHWGuZQMq8n5oRfvfrwSq",
  "key10": "32YTmqFYWyHxy1e5yH7iVz7cmRxK841oB2ib4gMmEg4AGzXMBspGQuBnff4s444ZZjYRhBsyJbuAw7CYpcpEkWyU",
  "key11": "MBpmGqviC5H1UjAoM1YrktnRHypaPXar9TWGNH63YqZw39YjkE1gHadqgLA27esXuxk5SXw89MiPFNUZGqeauMn",
  "key12": "3aYQo7N5HrmcSU5odG1D3d9e2Hv4kqrogS8enfNhN12XFtFyT2nVrgVh1sDfErwoN1tXh6BuJUUdgSQbhQCefPWa",
  "key13": "5uRKbsXaHE5y57tPJ3dDFd29cHBAnCMXQwGuiV4G6CRKgQxbnESMifEDc1wTsxP1uHXqytjxAixj6nEnT8g9eYJb",
  "key14": "4FKvfjRkqdvz7jgkTPdVnCCG81gaoPn1PmDngjW7qNC3RL2NovQ5SCZP3g3G1TmAWXadiw5vLDBNJepxFxGABvPJ",
  "key15": "coyAXUjhz4dbLN356KjHLb3xQR1N4bFdxEw7H6uv4cAYvQScjsCkeZ8fqgdWVezvSPgDsjtRoGvHUsgzW2DbdBr",
  "key16": "Nut4P4bT3hoEAU1yXGV5F7MfEWxoQ26fGRSMdkRnxcgSBepZGLEoi55N65qY4NFCXz5j5UchvQDCsLR64urkHhU",
  "key17": "2k1K8DXoDahEELkCZLpWmmfocsNN9D2ax8WB21Nd8UEfDDx4yekTXLQvVtSr9WMec8mfAZwDBmg6aCTDoGasda5T",
  "key18": "3szsM99mzMCQ9SMRVwnx5yjdt2Wf4BX6xFcGh1EJreGsFGSicG5AR3PJNgcYKc6ip5sQsZYr1SjNL11U1DYStWyc",
  "key19": "4p52asbdQMd15KZuN4vcKrdda8AxoEdLrvLAfbMNgvTRS2BHkp1ryzQF849d8kyq4zwEkpqFA5WiBZXkZAcZPo9G",
  "key20": "2s7GNwGHtnT1GNZ7FtWrGsWqLnZKB1HrebmkSRRQbVmFb3BRGjeMi7swnFhUV6SLhLrHKmigdkeZdq4Yqppwvo9b",
  "key21": "5oD7BvdYetUdGEJfg8vQdzPwss5T47XVjXaZb5BuGzykH3mLFZHBi1ESUunrko3rcCLFFbvsVxf8pbnKW4jLv7N9",
  "key22": "ChZtukbertmfBGFEijwRA9eLrLA6uTmjvXS4UE6RStwJ3GcPFmb1EYP8PideWX4Lgj6HbqfjuwDL2BFCK8w9wAm",
  "key23": "7KPdZRLqBYh78pYY2Qy5YtLuM3fEE93pEWBh56efFpKx9g39TLGMa1czRgUapSHwjJJTFHDQRKwiWWP6wcGZo6x",
  "key24": "2S4RzmdLTGN4uZGt5vj2ZpZr7gP1cifkBeJSNEMtpz8mBsEa7coRaPta9xLJnrDqKSCsswtSDtnURZScv78DEW6m",
  "key25": "bujUFDx3GBzKEwTXS8SMiDRYAtK5Kw24Y95VC1LqdykDa771wR8U8XDJMUjWMtUW3e4qE5B3x1EzwkdmYnB8wEn",
  "key26": "36zhE3qvkKu5jjumYDxZBu9K5mc7kwhfv64g764M3QmN2PXJoxEPpFdAQw1zra8ytVTEhRbu9iHq3WM9VFeFM2ec",
  "key27": "2SsukLkW5pSXBFkhBCQJFzFHKYW2X94JSaLZajrBy47XcGWWzQF8WpLhUbKxyDNYQDtavF9hrWei4A7Aexa5MFqf"
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
