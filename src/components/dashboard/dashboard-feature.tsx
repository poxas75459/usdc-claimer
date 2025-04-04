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
    "2Zh7LkF45tZDPSa4ccsyS7izKoXaRxjfP3ubjopRc2pe6k8m1yuym8rcLephvWY55b9dSNyb4EmX6s9jA2xGnz6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XrQz4PY5usnWh3fZGXhXBANWMBRkFJi8r2RNuPJC518644br5CoKS5ct5kZbP231Zsk3RCBP3WZBx37p28dJsnE",
  "key1": "5n5dSsf8bxE1MWphDFAeoMzjAowdfDCBEuEw9Gse6QoTzeGkgdFrByfd1hAQhJe5R48wbhLtZtbYf5ZKnHKt69JD",
  "key2": "38mNiD1x2e4kCTeoNu7owHoCyzF6ky5rCo2ZEGofSDbmxPtiRes6LMKQPoEtXCd2p9eXCTNWFtLST7pziD2F7r9X",
  "key3": "4kS93vPH4xmtmSe18CR1YmWS4BnYeJ4DTgDNVngaZzNs6QGtLUbnYGjzwapdfpZp53GzRChZJJrHK8uJzUS5zb56",
  "key4": "4GhoAUTDNTxmLdMP6xGQRQsSKa6EEXzrRFAFeW4gmj7ni1iCUuFTwZKfEpyWSPJwn2uvLN3JTbBs43Jw2mCV4JSa",
  "key5": "4ABi1Hz8UvZkp86a8dpvdkLijjyuDhPjtaxdaEAZ1DW4oXQP6acdzCgs5aEf2s9qq3XJM7z1c4n7yV3DDAkzVuj5",
  "key6": "57hi2wZkYQ2UnpTwQthXvCrVcfu5nUmQC7KMwi7fWpwYTW8TznGNjcLBLaSBVaBvegVB55LA9rKyzNBpjLgBqdP4",
  "key7": "3wTxMpPsgyXhD48umKJaDsJk3ZWDgbgyfy6q6FKuz7ii5E4wDP5n4eyRcNYzKwuLUJZLJCgKGrBnBaxZVpCEVqx1",
  "key8": "yiZ27RxyUqEep66Pgqw3zsW2KDuKaSWJCetTi9AP5drybcRfWyRvMtceAmRFUe463Y8WT1LRgbMFdZFXAEk9w2F",
  "key9": "4hmek8pEUF7wezqDCivTQuso2QFnWrMDoXwe1vR4RRZqALerGbMt4pKmRwMMRzj2TKp8RR6nz6YrwfyiAHFKonUR",
  "key10": "2dzYwkq4Y5MVYesxzW2HgdNZA42BgGCdvBb9Q1MriaYXJEpDHMX4n4d5rH3ZuX7Lhc7XQnTCzUCnCkUCr7pqY1RZ",
  "key11": "2B8PQpZJq4EN6dbCibgbm2Aywc1UACcaHrrGyVFnPhZ2zvGUGDAtFNnpbRAWWyb8AHqLYhmzXNqkLcawFey8ofYt",
  "key12": "5UwFLaWV54oaVohKqxw3qza23Zmx8rsPbuP2Ci8WJGskkvamz6Np9NfyetDfn1ogis3k9nUQNbDrAzpKSimNhgrW",
  "key13": "Tyc8V1eiR5vnBWq59HAYVDuFTpw379FjYafJE8GToxFWayhS1daxRGvNCpp8Ji8mtXsKAWpxG4Kcm78i9LSA72B",
  "key14": "j1ESYyxyLtHy69h4Sx19LyqxmzCBuqttFrHSR1UuGxsMQ8NikECgohcWV7FgEKR7QDe9DF4vAffK5TVxYRvCHDT",
  "key15": "fU7aGjfPsYxo8AWQNPxhEp5TqVsCTWMM2JnAWV1pTA7dbtkne5ob3ArEqwPuVry92nc4VmKwyQhzuQ48FqgN5uu",
  "key16": "5gotyt1x4bstZXVdzqXNo99r6C3gA1meDwk5LRSApAgy8v8QZzdvsLyxuugsEFmHRR6PGg7oYDZFQxrC4o3LzgzG",
  "key17": "4X7jGLHc48yYu6SVsqF8fciL4DinjjPvtsFKksBxCLxkuNP4R9eoo6Pq797mvyXBEeNrNaPJBLQ9eDWbsVc3tDTN",
  "key18": "so1HW4HxBrZPdkDKsabobD4oiW1HhXyHn66J2tyZpRDPgmULviXanF1D85YuA737v4DCgch8rQgm9mFwEkgGXrT",
  "key19": "GTiukrzj1jXRz2KDK7QTNrFReEt5kHTwsXr7nPPVAxHaLnnVfizS334w4BVxcWhtyXddLjhkpheDPaoxYMX9RMH",
  "key20": "2cgVmFqnf9JHEUkJ2PgAZS1T3ZMp7Wc6Et1ArbWj8KyK8rJDjpMMNGcPbv6f3Mp8D5UtQvgPTitVfAeqZ3CkLJbo",
  "key21": "4anCgXK8fKLAGVRjfL2uHgmEstig2g5zptjrHmGacMRdc1CFXFNXGYo7FgkXP18Zwu6EfivAR9pDuGxtmCLuJdQd",
  "key22": "5HT5qZygDF1hk3ypF8uVyhr3FnKohdfxEBTuoNT4KRY1nEejgyrJiosmtrgb5yfErUUG3URLxPq5FHT4mmGd44B5",
  "key23": "2MzRRxiwcJhSpg6VL56Asamck3sekYgYPz187GrtFbjxuHQYALGsmT5peF86hiLtw1KF5TaoEfwmwcdzUkzm5See",
  "key24": "25kFZc966oq7ZqhNS7dGFbmgjJveRZCKA43LxRVijSBF4XKuAqFKsibdqTsQJ6b2D9fDtZMYdSYEU2vyTdrUwemC",
  "key25": "q7oV58uR61VTaiwco7K6MB7D5ugniPQMDWKA3H3M9trg2UXBytwC8wonkEpT3uZRV8rDCavanth5tL1TH8r4hN7",
  "key26": "2Ja9cWR8ofRH8Ad9EFwbN6wHdWEQNskqN6FfaaVw5Nyja51geh9gAGqY8MfW8y6CJ3Zj5e98MBsUhBd9PkgV2c61",
  "key27": "5SxUF24rg3iThBES4cQ5SPGpsyuvWJDw3F5Ex8jpc4aeaos4adg4MYQdJugkpbM1i3PsFgLSwimSH2smmAGZCQrb",
  "key28": "538kE79wUc3FBZQv5JVKbecLQy63jmJkZmYY874M86iXbWwso7pjyYoMf5Unfa4vFbfpbuGuWm6EpCaxpziLUZNz",
  "key29": "WCtzJNP3mz4RVioZhwdpuZvozPMR2Jv3yKMLa5BnytCpU262FA6t2bB3h6i8QGQJ4ansJKp9aJBqTxeBsrNp5ZX",
  "key30": "5ZcveF267MPNDAUPdrkLhTuBc6psN7hqCt6CW8FvzxVqU4oYRGZDgjHtx4abFMHY2mHCKpAkEKy6SGy4uKqdHVox",
  "key31": "5Yrgpgh2t6KKn2Bn8ZQXH9zxFzHeANyGmCro1z3i3dXfSazaEE7CwppmBH7jvEf8123wM2LqDGMi22gK3WM6Avs3",
  "key32": "42oGJH337J7ZreNAReKqAQFfbMLqyrMhmgfGfVfi3o8mn2VPuvziErXreFYQXrWBovMmR8rL3WfLhSmoeZDWEVqP",
  "key33": "4oG4fJ5qJWsE7d7wNQbfsqY7s7Fmnq6KpW4WoN6WHWj4yREBNp6Ftnx4gCAadvhttgbsqSrDBppaVcQocDxhTjbA"
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
