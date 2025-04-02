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
    "6q8RtNBgvy5y2V2DjmZvUeR7ufme4NqgwDVFCubryuj2ETpdafQHMfpc2Vny9MBebNCqii9AraWsexXENygaFMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t3JVBBm21kSY3cVHvBcKAi6Fnk5EfkN1YhaytxrxN7h6HeMKzRhwRoeStB3SQoduHhatbEP8RoiTAPVfbpxs9uK",
  "key1": "5Z2n2JzkcDJhSTBpE2by3aX2ysC2WMDJGGoHbArcxxGeUzXxQdWroCx6dwSaXPXr8eAJHJs1k4qwYc6zNxJGwUiW",
  "key2": "5WRPTh61bjbsZ5xDTDb38883ccJ7LHEDt3MSBvhprAF2qbnFafrE6Rfm2rdwvhxy48PW7kv17s32CCC1yXe6grBM",
  "key3": "2rkbqyT4AEJL6XePRELDKHFAaaNvJC8vRiVfdALpiSkL96Uf6zQiafCtARpfQg25SHRdPpQHPjNtwe4KgU7YqRuG",
  "key4": "5BuyKBAjbLCWKhTFm3yDHBZd7xJubZePmbZDLajQu5MGyvTYtNB3fs6qUmHHwUp1RPwZYquTP6PXsCe7oy7CrCh9",
  "key5": "4tCYT7BoynEMprQGPQ7y5LTFBqGXQAtFAYu7A4UXnSYajrSTrDhtgGYjPVxiLa38tV9SQ9TNL34KwBp1FWiqJFW6",
  "key6": "2shvf61PhadpnJKQwqYXt18zmFzmv4Q1NL8RY9qTYBEyvnGydzNyZrRCa5ciDge5CKFF1DmrWCdgRz5p8EZC8NuA",
  "key7": "5mxm8DToZrAQwsM6WwefDY8Zpkw1kgmCbDamQ9go2AWnvCMamEec3YpnVrtyWQFv9GB6pGBtchuQVUvRmCNJhTic",
  "key8": "2APvmypunqxeaP4RHysDBuvG1c8yecDkhxbhVkZcivUew2MibrEs84zbVW5WLLhrHXKK4SQXzBiEShwYrV7tRJda",
  "key9": "5VJRStfM69i7JAxCiquWfoES4nFpqFcgohLc7cDc5nKbEDPvfQSv999CmH2dPsZJsEGmivmyNZjQ72b4YQhENnzc",
  "key10": "2npnMvEEQTNTftUEHeioSfNCoWywHfUxw7kpb7YN8G1PbxbWJsbf77UHTVEdL99t7xbUJ7EMxut5d3bkK4fuSEep",
  "key11": "2LhJo725VHc5bBzisQQNw6fZhBPy62tQhFh1Cgm49LJ4s5n9vemFUbyHmje5omiAYLsFqKSDrAvN2c4B2qFBWUDn",
  "key12": "23Np5D4UkwbDnsDxW3bYfrU8k7FKmKmgtuUrgPvegzu36F6gar9SDKveGg7CCQ33UFvUZse2vU9Atwt3Qzav3eiU",
  "key13": "2RmioNcoNVeTWuH7xcUX92uSAbUDKxhTCNmiNtSKqmepGbQbC9fdA3jjEJioNarBMLWQtPXQ5wzgs6MhjEGwz8Cb",
  "key14": "4KFsjLS4dj7dXjmJ3DCMRBj1udKQ9Mysky22VwR8eCyLsFZsHvbXU7dmmCBjz1EXZ4uqd2FRoFKUohwtT92r8z8M",
  "key15": "h6MqZt2c3X3e2gx9nhGebZ6HeHjyeajvpwwigTY4jzmWEBv8s9pUpqama2mgpEGepRdAxLJPEdtjUPUdkp8HXt5",
  "key16": "3nFu1UAzjJxSbGL2EDCGSjT2k4BiR7Vd45eGb5CT6RgY3zXqnnriymQrm7hBevJNKiRA8soLbr46Bftz832cUGSZ",
  "key17": "4NzD8EGzVjHTD7Ajw48yK6P3eaztsgqU5M2p4UjUZFqiXVTQGTnh7Ve4qqYscqSF1a56or8RnZ8PcNXBPEFAKEB9",
  "key18": "nTHzftTyiodPcmGbzL9FTSCfcECe1SERbBY1PPz6HxN6r8XdzAY8V8KCvy9ybhdjazfxQp7x1U1rXhV9JrFgJdU",
  "key19": "5tcicxVPfqpumFvxqJTEU1Vgry5s5qYDQD3s8ADXRM4vHkwaEbkmZW57m5TucFYys5vH6PQfMSeBSkSRf8tKVSux",
  "key20": "445EYH2xByZCeik3WP6VmibGZ5vg7CSHXxuy1DNNXAtxhpytVZHJc4Le4HgLpUZjbPDd8LC3uxhLMR72cs45A3Fv",
  "key21": "623716VdDKdeoHx8b8WjAGCESNvmfGZtEgqHAuTYYx76rqQ5vZH1zgRosyUVLkmLFAwpK1soVM7s8sb7iNUn39Kw",
  "key22": "3SX5Fk6PXtrYwp2EetyCp6MfMgFJLuiNL7G2BksEDs37gsfGKVciCg3d6CCXCYgQhQVmRTfRAk71QHzenUcPkQaw",
  "key23": "3fdcAdBbBPZ8Mj5RbRZWqajvozebRLQ2dZ335oKJ8PFMkWZM2136Z4nUaTjcNKKqQJZNazUY3K2pewpvK7cneL7Z",
  "key24": "hdxqEQbKm3wyFaQQTCZwkWwe5BwDZE7m5yyrB5dbnyptiJpGZwb1fAZp3mhpXRKcaofrtuSZVkks8fSGfuEYvSf"
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
