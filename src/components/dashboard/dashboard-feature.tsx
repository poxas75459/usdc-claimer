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
    "5vjCDZAAamb7zxEE6jrh7bt98fwszwHsbad4iT9kcfif98UCPuS8DAKMVG5XXVHeLC2h1E4fTbTEmUByfVYYUzSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G7RSCMBm4fw3wkpFX7esVymkj92AifPZoJtDWfYLMsCsYFfJszw8jYQjv6FLdaTjri6r6Yv7j8jFvreZFJdWkrP",
  "key1": "24R4dsbuifDyE4BggvrAbiWk38TCU9aHzXXzJNRFFsk3aXQBqzcs4EvdonM6NEMnahqWJY7Y3L8RarFs5JwLpi9C",
  "key2": "4s7AKb9S3Koewey9RihJZQZdKMYRXgnef2g153d6uBH6jr1zs3vDLDt2qyUBNmuvhwckMdqJuzG4XGoH5dY4dqLa",
  "key3": "4d1kvxbucTdKy6RK8G1TMgQuJwxGtjb3mzb2wPJfcuHPzov1TnLQYgwFpfjfxvyyYZjFSm6e1nj5nEuFMMPhDuMY",
  "key4": "2R9L1e1Z7JNWx7utHH8NSbHQQvrstx7JZ3zPMnBEF97NbuzR3x8scUFypCrM2w3wmW5AZDbdSC4MXxX76xtVgeHw",
  "key5": "2mXSo3vm9rS99amFWm45uwohohHSMx1WGbCAvisiNtvLy5ewH2Jd4a7ePBHKHquYoDEqaCQQh4HGvdMzVViyTuXu",
  "key6": "3VZGv9bTXQ2w3UrPPmEGD6h8Yja9gLtdNPDJNDXDaMN3ymU2wgihsG8okhCEvcDoUshVyfSBLN9opRXUXbEzVvFP",
  "key7": "ddmAhsNmCKWKBHGzacAh77hisn6MzgPG8mj7p5mfNwgZFNvUFE7jZHkXQeGGtJAXDxumYZMxFo8kc5M391u1ihh",
  "key8": "GivS38fbx4QKyRFXjR27wdbjcfjEAYM9HpPKUvDgRMTPAew5djePDHbrkTiRpLujt1hQgygZsc3XuW48kWJzPdN",
  "key9": "42YnFzmqpYH2gr3anyoTq5bGKCo4kniG3nrjc7V3FF8LaNAe9s4qfqy9PuwADYG2zWEyPNF3V375U6m2kjMtU1kE",
  "key10": "3pLZ2CdoAiaiK7c4ht43ukWujZKfTVBBCVPaDi2ZkFRm3awqdrpqGDJXVhSZCMsZamPQCTvsoBovQEjTQEFDKeon",
  "key11": "2zP3CbqQEj87eKLRWc1eiimntE9Eu1gA9khAxnNYTWEv1rTifRjBP5m6iiy8K2GVrBFjsAagSD6NX2QHk5gzjBHK",
  "key12": "33uY9nr5ZS2a9rSDvSAw3pbbpKSPj87cwt8hD6AJqE5Eja8nZTLQv6biotN41E6yLdY75yAByGbXXGoy2WgqCykf",
  "key13": "4QqMKTXEACJbw7bKPaxLDLZXqSUnpEYQZ7LzBA9mimkSMCjqXZq4SvFccd6ZxfspTcQfy7Nv6m9ZK78fYW7Siecp",
  "key14": "3zB7zvWnSZiijLdadAWkdiVqrbXgqUe4fH2GpuQTvC91wAodYxv9Q2615Danbrkxdm69YY9ZW6od6fppp2aUoYrD",
  "key15": "3aivAZFttoPDNQqyXoAkjGGtoDnM65NCqVK828ttveVBw9KCotoLGxbhpmmjvqR2Rm1qeuR2BVRJoFS14CQgZLXm",
  "key16": "48ruUA7fYJ6STBZB8uCTcLR8maVH5pv7omFEkeRE9fTpkWUCFshTdpmZ1R3N2bhvGgRUDvfJ9azBvKn7kxLdtciJ",
  "key17": "2ZedX75g58odN9v4Tq23NN2x6UBUed8Xy1rEeXzDWukUG3cV2y8WVDXDpjTuyeyPdEc4jDhDhqRtWFfx1WHCRUxL",
  "key18": "2vC6jViiKtRqwWyJXzfY96wNwkK2fuxaFVtqzG16TEjA8SxfKLtD55BVYs8YRcaXL6LzdemGN9K5xv6EcX7ZhvUW",
  "key19": "36x3X7Hf4cEc3ozN99UcRMDrZrcM83kHmmvBjL5Vx35LiG93vRfxkPMoGGLR44UwjKYUqrhTcMvMxo6cArMAZSGT",
  "key20": "kz12Dym2AuYUBft8uEU8YTZsNf58vPpDyt6kM5o48fZNGGx6fUHWGodbq5WRfsPjUroBYgKhH7tAf5eUC3b8z98",
  "key21": "5YNVMRwXNtiDt5s6MFAQSmPa3m9Fa86Ee1dvWHFS7bAomFrSAs4ZFikF4mKLLm81qFxJFjcjCg647yoTZWNNjHu7",
  "key22": "475TcJKKuv9pxcHv3stjxXDhbMD9o6t6MCZMv4QGk84Qnp3edx9rzBmuomFWJNxruaMkiTEbM1LwDHiGpDxprRjc",
  "key23": "4n2k8KEWm5G1goYUQL6dM8n2GnTvHVEem4u9eyTv5LMYT1YXhLgrvtrhCRJ4LTCpcBz9b464ny2fXB5jWpSnnUHL",
  "key24": "2vYSQ6i475GyiLSJss5EUPnCXGof5BTN6usUyVK4oBimoUdn2EnUyKAsMmyAFH6yGgBSnPgZtESyrRivTuHCcKG5"
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
