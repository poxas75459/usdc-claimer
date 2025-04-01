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
    "3zHJJWLx76BcU4o2B45pZo323MxgpaPg9vPd4YW9wYH8tJ62Chb16MG3fCrEfvS7Rg6aVddttq3Vy2jGdjArXz5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CbydKVjMeAZSocVtQZXcs2vgyPQgXT59MhVLT4mHgZwBBiZeqANiCxDG36TKduanDfWYGLcrHcT8mXqD7PExWSB",
  "key1": "5cvbbZWpbPGM7zEdD5UVhkGdDBe5EggVR4WJfYy63h4XKdpBT8CjZ3dgaC4rKHQnHUFPk1TCWNQGPZdpB8E7Vy2L",
  "key2": "5PaEgH2KaHC9nw2Sui5chqajgA5k4nnCRTtbxoywtH52CiUZ9eMCk7iZP4kPnzRg4fxPxw94pdDSssFa5neda7sx",
  "key3": "4AXMGcxutfoowxfcGQnztgkNuTzfJTMNygnYvWpdhJPGqkpuSnYdXZ4xuhT3iQNSbdEHZQ49JEQXgmvYyijxa6UN",
  "key4": "4oc5CBbMqgsQ8QYT3PwQCMDr3onjEjMTG6fQKDVeL8NmMWApf4AZ8FyVBYM4rGnCVqtfGv26QcwdzDZJ4e6V8Ama",
  "key5": "23SHVStLm9UFVxcR52GCpsdaSLykx4EEaMpyRgUvVmw346gcNH57EcoYtSCazYfwJsALHyVzu6UgxrntiJXZhtVV",
  "key6": "AA2uCfmLNtcKQik2dNHFg7xxT1TLxsptPqpaZ5kSxqJ2tHa5irUTrsArcA5fDwzFh6LvdWxS9dYAhYYchbyokX3",
  "key7": "4X3AGVoCtLu8uguQTNL9LwtMokxjrff69Rja3Z41Eg8kKTGUE2j6xGtYQgdhQsqq6utrjitcmPvDjPBMK7jud37n",
  "key8": "rt19f5BhTW3qQsWxNtqddWUtjLqqFhKD7QmNfJZxRUvD6jrNHsVgqDjMtRst6Uf7WJGuYkrQcGeVV2rvpTn7NR6",
  "key9": "4UBYreceLfdxqdaGzdM2bUXqXdt82vPrhZrAB1oP3bJpgUc6dHepjMVaapFgnfbBB2yMcA2Q3uN6sbaN2AAmxZpg",
  "key10": "2JhBuhm8tEjAPghku8q22P2xjxfeCjm438bqSLmce2fKXRGr9ccEmQwcJTjbjjPJAcHxaUNMfmD37w5S2TPDfHTP",
  "key11": "5oentriUjZdSVxLpszqJ7k33XJyG9bYC5gUewLAcz4GUZY1CLbxszWGuukZ19wmnt6LwyZoCFVi6vYEWW4xRT9H1",
  "key12": "23ERXro7n7rk56qpzxzSoEask2oN2z63L3pLGozazaaMXcCZzhpZY6zNi8x7ZoW5rDJ6osuWWKkj7WpLNdjFpbxk",
  "key13": "2XiHm1oLuJB4u2wDmjJtzqKoqUrt9gdjKzmkCn1vFXS2GYboaTjAL1ELp2SeoFLZAe6ydnm8sdtgAQma21RWz2jh",
  "key14": "4wkeBEoaeB87WmgVCncLsCyNcC2QHqJ7sgBPbbcvQCWAtW49KAkCdrbsNiCRQE7jHUCsrtZwfqEMGRDdiWr7YJoc",
  "key15": "3Ga7bbppcMWc4ytZkJpv3azT5bWpDAfzSQNnr3g2t669JjJJHtNHC2eML1t1DPL3i9P4WQGTkNYH1tJg7VNAAXYp",
  "key16": "3Cx14e3GjgGuVh1MnHPpdbhmPHfXitMgKKomFMGw6yYdaCHNw8fJveNGPjSgRT8f113ktgbx8AZZJ4Baiy5t7hdr",
  "key17": "4EmNPdwahdKhuYJLRmKsATuy3BhZspWiwFM8huBCBq3qYCPwMEpTKVfqTzSLe2o66iyN63yaEKNoMYatTixrj7Nw",
  "key18": "xW158YrwfjA3J9eJp5xKwHZzNx9QdxmaTmnJgyDSNYsiDLs7dohBgsADPtwJZoGfr38XLAxWuZjppzK2qDc1NNF",
  "key19": "57pnkNQubnDm1ZAD2NjLsCoSRW8BXZaWh2NujSdyPF8tTF6YALEMcoJjYuZsXEsVpuXqxHLfiL1tLsaPCHU5m3X9",
  "key20": "2BrhqUa2CcgPJQ4ZD6vfkWtnSBsAbEH25WJjP5ZESeZrXRYkhpN4c3Pq6oVwoEDj6qPttNDjnTDwKVu9vLF1KHtS",
  "key21": "riym3Kcb1zJrbV3LvcfKuFUNNKvsnE2XeY1pqQfmAt1n6Upnqntc3oA7gxhGyb2huHSJyNKFxZWeu4iaiWh5epi",
  "key22": "2KWF6m7fokHyS9DXFoDhaCELdgg3Ymno3nCKJUUgcnJzwn8oASnBtDKHphSwapLk7XEFtpxKbDPY8UxyPzNPYzqy",
  "key23": "5ZntA8FKEyLtbCkA8jYcSVeX5GW7ePxB7n8aq8AuyT9ijDzAnt5twBm7KG2jhT7rMX21rYUfSyBLgD3a194xbaMB",
  "key24": "3e7D3vVjRBSpchUaXVFuxjbahejbwNCU6XcFv5gdA4dTCjJ1JcYUdSdZrLfxFjWVEXAyYbvjCa3KwvMocHTvvHPL"
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
