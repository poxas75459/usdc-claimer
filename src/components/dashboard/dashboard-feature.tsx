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
    "HmAikYyaqSiP2vaLqE248bVuqkpEbgzKMQ2HCq6LEMYH9NGF4yeo2oVKPhe3beAUFFvuBFBCyY6F1FEY9BFVERA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tFwVCJLs2Krt2kyPmGbn4M7Zyu99DLNYEWYgU7BmJQHYHCT5z3USHgYxw9d2T4sgSPZs1kdkLZDQjWgNjWBiXio",
  "key1": "2SMwapFsbt6D9qjEH9BQmyWTXaSG9rrfT9avLqm2kuv8dL4grPMF5G4uCh3hVrxCqX1LedzRF9DkQ1jBbFnAE4N6",
  "key2": "5JiXPHAR9pc4a3ZbQm7nF13mi4C7FPU1TJXQMKe2cU1hHaYMgYN27NJPwaHS8choqcPKYU1PaMkzdTR9HYPRzTT7",
  "key3": "2fUajiEVShp2rz9xXM9tTqdDkm3U8js9XH5Xu9scxTbPztSid4petChFynFRvamtkYNpGAKEsYeRoiDRTnhiSqyn",
  "key4": "4Brym3U1LWtxgqsdzaNn8rYArPmUbPy1SFhnni2SL6AA3AP22xgSgrUziTUW8aHiV4BPDao6AnLh1rD8HP9ManXc",
  "key5": "67JJa3EK8vzrcGHseQ69DEs1oubD1TnNdtDHn1nnVEG6XxEbFWEUfCsx8W31LXv89ndGWnDz4hiuKYHJjsHuvRv1",
  "key6": "524YpY8uU8CzCzH5rXWkPJ2nVkaTm4vsgqfh4gvihyt2L5ZCeqYfTZHenQcx1sZjUSuQQgLhAPX6NiAtnycYu5me",
  "key7": "5BaXnQEuFdFSmTdNVxwdDA6FYePnMoxPbwsVnHow28ZxBanWc6uBva2TVfZsrd3r9uxfjbcsGviXmQdS3SzZMgcW",
  "key8": "5JahsNH3ftjDewdT1LHnghxVAeR918kbRNU5Ex5VPAiypYk4GNQ3eJwEXYDEAsbrQukuZkefZSFj33GJQ8TYRrLf",
  "key9": "2v2XXsyiWK95ktCiu6j6s1PxswQBXRgzY4RiZs4sJ3pt7FFn3HRUzCpuLJEpnDdiKLT5jVkvn38c2s8eTrCDmVXA",
  "key10": "5Co4DKra87Fq8Eoe86Vsjdw3QLbPa1kFzzN9zWAyYH18rw4L27isFC8h1nx8EVggvUDHCVw7r8mGvWqb1SwqpHzw",
  "key11": "3bM2j5bcYhiMJymJ5aLoUw6ozT1376igVs1xHUMWrK9AtrX5z3YpcMZYF88voVburAgJgpUPc9pCTtp1KUtcXakN",
  "key12": "2kcV7oaE7952zFNSev2iixnLa4BgbVDrcaqv5imsQghDJGkCT8tQpTDa1yXDY2xjYsz8bRp12MDVesEofF7wDxe7",
  "key13": "5zCAfq2BEJBF555bPuzqraSL2t4UZ5x9t4SdAdHaQLBc3J8fXJo5LvnwXbc6vgBu4u6u2fY4gKnkeQfMfecNvJDJ",
  "key14": "gshUVw5sYdG8VpEFEwLSwF5pQo2F2h5ssHTTcq8JTHZYf7J98eaFV1hDiGsYApWLA81pH89PeJpGToAudXK5wtq",
  "key15": "3taB5CwHs83L4sJTtCZ4bqW28T3JrLpeLDot33JvWr1TwRi7NmmYvSMKU3VatxFXnBjC254rg1Q7WGN5V4vhh9JJ",
  "key16": "5eBg2X79Cy7vaZF7WicqAgevVTiEVX7oT5iiArogKLV6oP69CnwxKH2cMtwcaueXzJq5w6exLVsutnukvfZwWJzg",
  "key17": "2SuQABgoGv8rFQdxm3fmY16gQB1Tmvh2ifi2fr2jZEi6BkPgcssBctwEwF1fHi4X4jbeLzKayfXsp3VRdyPhJAMs",
  "key18": "671uwjkAXZhcp8R7R7VpdFwLAUHSbYN6HUhdmfKLcKoDz69vC1synQd8kDrukoaMcGp8m8GyQA2RhrZYt99E8yyg",
  "key19": "4beFtzSS1tdkhdfqKarcAGcrUvUnFCn98szSjDoQ32m5ea5nSQLyCJwGZ8rus7hjJCxSKFtoUnXq6rMs5Ytj2t6u",
  "key20": "3ErckPssfCt6dycuKPzCDWWgvT1pofNapkpUVktPv55haFHiHdhnXu33za4LdCCwqSEFCXKF4R6wMi3zDESk4Xpz",
  "key21": "5xnqyo3RW4cXLALzE9wrJNn8xbaLbBiYTLzRrpVYjfkAK8GCRNxq7CyzwZyw6YnGVfXgMXMoDMDNVunq9ChF37uG",
  "key22": "goZgGdzZjRj2KPcK3kMtqkRLNBaWmwyZGgYkyeYpmHg2cd4pK2cn4f4dFzoTcyu8JMuviAzUbXaAUNqQanqSCiC",
  "key23": "3GPEtfcD4BcvWropL4t6LFXcFVpHPJuHJUwuTPDgsmGqp8UzLrPcTK4dckfPFjd5vtGTy25uS3xXnYtuxuC7T4BE",
  "key24": "5a4sFv1mtZ8TabmHuxzxmUYseZca82wwyEJeBFPEh8bsk3vHu3iRQBhAqeUXiJRcUxFKUNzXdw7HwEZBTMDZTKa5"
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
