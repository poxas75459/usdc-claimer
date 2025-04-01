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
    "2GLVbPA6aLey5XwD2N6LsVhRrbYG2T7eP55fxN7kY7BMeSusbojRWGhUm86U359ocpsZRZtNeHmZ1uHyzBX6Amn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nUmr19hm8jSaDxfikbTWm8k3yG4PzdQDMWyT9qJFFVMW2keK7ccfEkj9mwJYwT9Htx6H3GWzuq7oo9g11pVmA1D",
  "key1": "qjwaTV4FFyWpuiZB6yaPV9FmDUhhDeVxQUXdeqHnVrG5MyKdCdH4eCyBngD5q7sG7Cyu3P4boDgf8gdQFoh6tdn",
  "key2": "3ZnUQhbSpQ9zTTfory5n3qX3zDBqwTMveE5435YM2cggEzRBqcQSMLw7RQC1tmdSUU4o8aE9ZUB4GxqqDCfZoBpC",
  "key3": "5TrivcAxSHzzvQ7ZBZaTkHgXT1nHCeNLbjF7rLySvLFWeuJ2eQsxfb127aiprkwRdDSsCg2CseJ2aWhC5wFgW89B",
  "key4": "5JXPpkFHaucafxapXbPNqpV8efgxce9m6SvTVVscVVeMDtJF8UABcKBiSHErt6Z1TGnRX7CVQTcN5MkZr4nw3k1a",
  "key5": "3z4eRzDKyc6bxFuLYToVTRmH1xtjj9z4kYykmuVdmNBLUiVYar9S4i8nhrmBRYvm4Qo5W1Pv23uiRDVAodPDyZZj",
  "key6": "YN3S8KWhjNDPQhHFixpsqUfUnJjtT8FmNUvGBKgKt6adcQmVEy2hhJf7BcurKyjLv12NadgJdV1KNLisAoJK32o",
  "key7": "AWvYtRUHqzVZnQar4V5JArdJ4tcJ8K1SuqZMmojTgdriZDPMe4w4y3PSupSxKwHfkCfxJ7kuwUJ98h1rhzHwLe3",
  "key8": "4EcpgWpW8m9Pq9HDsqrBQR6XwtF5LcApFcbQ26pvpueByhTKFaCuuQZGe3rVTkAmkKhsgRxV1kCQEgrFKoDaCCHq",
  "key9": "2LszYMtj6XDji4tJpuTEUGcVcF3Vc8tkoTFs9gyKGREvR4sLnP49Qtqih1RJz4jW5RJMqsxGytk62MvWHsaV7JKe",
  "key10": "Yty6s9hTT76PY7nvRbNmqKtFVtizf6zSj9mPxsCCvJBLZQ8jKbYNm5wkpxwvMVuSM71UZCatGBfZu1Q6f5hkfUr",
  "key11": "2AK9eKaxFSJbCnVsMCJsn6v3zC6uxsYgjBaq4gALYu5G1DnjyaGFmvPenkST6MLzs3SECrNrek2pPhkFYTbxvd8d",
  "key12": "3aXBo8a4m89FBC9iGTp76ytuir7PxytQERWvFrDEUtcjwSde12uM1wrFM1uDqStMFWgJqERfmRr6NVPMfsUcQTz8",
  "key13": "2hHMaLwpYgwECRa4z1JQGFHmyfShxF7YCEc4Ef6KsxMfTs9iACjH5JYyMDanPUXBg5cxBmNDYbiTe5F4CniZjLp3",
  "key14": "2vz6ejxQWfQUHURytoLuo9teRRyFW67DLoFyVAkSFovwWKZEJzGunzAco69aynTzyGDJzQUjb4LRUaWkDuyNJHCz",
  "key15": "394NsJWJKMjAwWmm42sZk2ZoN8VLct4NY75TXBSFD6Zr76WzD5ad7G4fDWXPfAsPioi4B8ZPUWmiGZfUcpGTn1AD",
  "key16": "4Qe6PvLqGtiW5XjUANtoa99rD9WKF5UBimTcoJKu68Vz2CjtmmUmN3KANEMUBPMgqbUyozGmbTVMWjq2tKChycH3",
  "key17": "3KXNPSTYVCcnQMpMGqwr3egYdacviAaMPmYwXGvyHUFknQ1n49LPjrihFneW4k8CBWh8PFKLN5hCyQdmdqLJcwDA",
  "key18": "SZqtWyZCaeWLyJN2o3JLAhEgSz4R35oMYxTy1y4RHvJFGsa4xRhESAbkUKU4cfQApqGNLx1taLp5C5wumgMx8dv",
  "key19": "2WcXMKVNYYwyg6p7CfPz7EWRqn6RGWPH8Uw4HzRPoCmBJWmSfEMwLKAAyZu81V2vxiLpVjhAsWAahuFtrc5qzXbU",
  "key20": "4DEk4aScLycgRm1MA3VHmJpSH61NUqaVvviiCMZyvGF7S8iUTGiNEHX7naRvGsVxoYBMuQCT2BEmGG8nwEErkKCf",
  "key21": "3wGsUCeeRe9wsCfwcdDQos8Ugic4Dju4fSFYQEqN8BsnbyftNggQqbdJCtpXHi9BEAuuJinkLCM6QVSWmZWZ5Wyh",
  "key22": "VjMTHzFz9Ski9PF1s8UhZXrBQybnVtF8FyEK3kBkz36Ah94dLzVgAVM3chbnPuQENQaPEGqBEXxyGZ484j3Q5v6",
  "key23": "4SRP8iS2RhyCpeS9wYMUHWqEUq83KA8h6WDeq6s9qcE8p4rgBW9TGyop6eaGQBvns2jkXJxM8gx85eHNeTJC7H5H",
  "key24": "3CFmL9JoRVuzsY3YTfmZtfxhoPf8BRXVGWgiytjAYrpy1uikejGKGX8Yy4gS1uBupWDGWfMr1AeCxJaUGyiydB6B",
  "key25": "fo5gvh3p9BhBjgJjDiSYY6B32xCwYBeFrwLrzaRAxGfy39JQauCwXu5Veyad2EGKwiG1m9jyuk5Jmww7EvUCYk2",
  "key26": "2BGHW7zNrmfrRXFdzUPE8yk1NWrR1DdTSzhg3mcxGTAAZYpBUzzgLP31GwtE3X7A3Ey2XhbPFmgENVVm9Uwz3b8a",
  "key27": "4ukdDAU4GXnh9HdgsRGn34vZF3duQtmhaDi1GQuHGyPjs95TeXUigLdtfDzAYGKczzTQnfYih8r8ASQqsxVWyUJD",
  "key28": "1SeyHK7BHrpbWwj65ytWAgxG4Tc5SqDSCEgNC22retQgzSghHujpeVAthhLrwh8L8Dg8VJ7wFvZ62ZnegqC7CPj"
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
