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
    "3B4ZYWhdWubhic9gMoDdMR9WcMU7S5wtJ8rQKG4JtKUWACwcWFBghHeSYKiEhC99XzGf1ZVHaMNMGN1qJ53Rsz4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e1DUKYneUv7D9xuMnbUchgAa2nYAJ1Za5N3ZmGMxZpbU4DVrqCyGRFNQUfDHDpC399CK5LdJvGPa1aym8cua5iw",
  "key1": "5azaQjRkeAdCN58xEKaDKtUCX5SkuzF4wpcWZYeadcgELD1jsPiDMmxfAmzG7odcr858ydEPvkYnHpCT58ANJ54f",
  "key2": "Gc5Wykfo9TwHY7N8vVMMKMQW8MBkuHy5DirvGevhkXVPcEFLiFYwcYJxSbdJhWh3cdpwCCbLq7VPqB8zpqzRjb7",
  "key3": "3mLGP2AkhRxWuZ2Twuydkv3hMChLXXb7YMXehcUqXChJGHoBbzFae24txBzpeYa84fwAPnBwSN87CEQnxWQdPesu",
  "key4": "3mEPEdXZWiMg5dxtrsrWWxhh6BNA1pA7sQzmckyLdYDZ5yELvWmvLBb8NfnkGMbqqfhXwKPjBXoJu8wzJwY8Fcka",
  "key5": "2TMUbgkycARxjZngt3jK7wjPCEmaGwWUPP63wepHH9mmP3eE66h3gxBE1fPoCkaTkh3WezRGdFRhAPbRipiW4FU1",
  "key6": "4RcinntLUcEn5VZwp7PXxCWiteZKDVeFTKrh4X21uckFs78pJES5XVMVftK9t26kL43Kz5RZdqaChiDya3Dt1wae",
  "key7": "4WP7KQzkmQQAsRLTu3X1c6SHKFNxXFegHTqjaFfRmpQHFgxYudAQsmwkyVtJ1Y4gqZLuu1X1K6hvZfXKuG4eexXZ",
  "key8": "u85o7ywTCLSoFJurdTnNeyaji6njojh9jAWWCtwnYeD2syhdm6KibMKGWwoU89A6UCES1Ggm5E37uHM5dXiARdq",
  "key9": "23LNwy5pH2XuqcdokwvQFCrEkySC61s1Wc6Xu26NUnD9toVVTggGvxRghraV3T5NCadjXiE6jRzsvh7SfSm54KRx",
  "key10": "cayRHy8nAuUNsCZkgUn6Mr4rR9SCWChYgaCsABWTJyKT33Bqf3KDBi839BPSy596mwKcVZiUGdqNBmpPCkrv1kF",
  "key11": "5sAz97FRKZvRF1prTQGEYaqDcfGSnumELRYVeEm6S3Pb2XDGyNQ5ew3hkAy3sL5FMgDRjXZURqhGmQ4R7gNzecoB",
  "key12": "3W3hGceK8mfdeXMUxG9471vSMCro31ajs2kwpfz1z7gYuGPx2bF7yzBF8zP6CSgQaGuD7Fre76XSMTiWgv26CrRB",
  "key13": "3Fv98FcAczzffw2jKMW3JnVuiSicV4VFNrqV9PmJS7gffpV7U8A3tFDXktjviVTyiD6izEUsYryPTtabKJhuQE5n",
  "key14": "p7L1e95PVgYzAbKm7RWDGb4tMDBK3N51kLf5A6R4GJJP7AB8kbBiLBdnJ5g8aBKaKtZ1WKZSiuShd13H6usH3R3",
  "key15": "5PoyPDdFk64noB84eYRwENMjXecrE1H8MbYTmX47hSNq1A4oRqXX6GfLPMkiu1cAi18ndURntGvtKnRZq9iSRfDX",
  "key16": "3B26zpLHxH2BQKXEFLZKWfRcbsvoeyYCEB92b6EmEpckzqQ4AECb32fCSfrjTxTTqk34jUuM7tT3aJEMCjiks4GF",
  "key17": "2FN8uJ5TkpXxT6zeFSVbb95ZWDDdB1KzzPVBEtN3huqPwDaZEqfHsxHm1MJTzXfBaCAB8aPThZgRi7orC19EPmu4",
  "key18": "51hGtv4TYDQSv7K7Pcr5WK7HK2DmE8XCujNqRuH5JTEUhDZtRPubcVq1NmQkSjAKvUNMP6sFjkTEo7KaVkoaNLWK",
  "key19": "4aHFzTMQ8RYB8zQZyBMiETcVcxo6EGc8fCUgJ6JLukkZn2Vgzno1ewNVcavCmm3hYcC2NAP1jvMDfym5VGcSzu6H",
  "key20": "2vs9UZGXF1Jk7FKueozpz9GpvB7X6usRT4DSnGoP9LoH56NqDsYL8k9xnYuyxY4H56as7m3BhyQpZh1vsyo9NiTY",
  "key21": "5YaiXQG7w9VWARa4yqu14qsQAsX4nVHizwJnzsiVQaaYLBwYjSuRXdcm7D2PcUFhGrYpCZDwZTY7g5W8uy5XoyDq",
  "key22": "46D9cXEawchKABjwBFNFaebN89zVXU5ruy7yZAfaddQibvtxyb6qCheu9CdJJ2RDAUFddmkzaMow2sCCqADpj2vm",
  "key23": "2rKjUZ4WQuBDe3RLo5uHWJjFUshKGvxE1YGdmFJqSipg1rBwZua4NRTW1Gkok83SVpsE4Eaw816sYvu4seHXs1xW",
  "key24": "4DEHbXKeQ8QK5HH1MgH6obBdSMEutV5QXYry4tYxUQRCtEnZw1CnZjaXCzdxbDGYTWFzTmJ7x83LdRkMH1ccLEWF",
  "key25": "3rxnf85VC1gFKKYpDrNUm54YsNuKqizsnqzNUXnKr9q3bZBGiMS3vVS2kRm7P2bngBYCBTXtet7EyFu442Nz9yYu",
  "key26": "3aCPihRB5abWR6AzZxWCrbLKcL4fhUp1MdF3qooqu1Cp6nnQC7yxUBLFAvPUwVi8MGtfuVwRMT2Aobk8w8ZDVumv",
  "key27": "kyuNoyQtG7cQGUgt1pYiaVrWr5djBa7xnAz89j1aWLsfads4zD14YLs5hhk5oHzPLTvmK4JuZdBeqEumGCi2opm"
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
