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
    "4FMd4ahx7xh7qXL6bo2n8y7idLcheQpmR1oqP7WGXD4mujumkTM8sJgD2w9pU8cEUkjHze5c9o2AXvV7AXuYKJSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27F8jWRCY9k9g2uNdKsGine1EbG5NjuiqisRxuUDi5hi7FHcZ9ZPmPzUnyQF1dv84s95R7CGiCMYCAm9sgmFugpN",
  "key1": "2GJ1Xh2Lr63r8u4Jm44pu2maZ27YX89TM6THvBLZseieSsxspGmoWBFAhh8zLDsJZ52nnpD7CGRKAegqZjxqrnEG",
  "key2": "27AhmyVdPtLEoKXWuQHDLVjhBDQh8omyzbeVe3VwGA7pFJQvZ3NWHZgshT9fq3zVm7x6ZVz6BYG3q2T7YUzVzmzv",
  "key3": "5ncF3znB6XYz1VMX45VcojdnQjwnScgSusUsWd4W7oAt94L2wfdbce9NA7idic5AA178okdrLVtxZBMrZpc6KsE9",
  "key4": "4w4upeVbS8mcaqxSxc46VH97yKHoVUEuf4mpomet44SkfPgXcMTapQDGEyHWb166ypZFqbnbwq2AyHMuanpJ6hvw",
  "key5": "46fPAJRpjQTa5Y9AnzgUuq1VQ9GtVSsCyuUJyVsq1KENDSokkTy8gP9PMExe9jNv1RHveoWgnJSiTW1HyLT1L5Vu",
  "key6": "3xQdwpPnH2vMqwoH1rwtSGVCtUMeGUHsKm9Fp8iZNcHpZfNt65CeGsGubEbPGkzkkzwN2widpmm7wJSxL3N6ZHev",
  "key7": "NncFE1aZk6NwEACD6JLsd2qZa1DtSaNfgeSVQz4fGy7Byfi3mYbugXcMVEykb7PMn7VPXYHHxzcU6Nm7tybXcd7",
  "key8": "39Efy5vL25ex8qThJ4DBjxLhVK57dNmP1DqQbdNYLkPgMMy6ZGSz2v1s3kJn7kgoANG6AbZKSdqBXduELqEvbsRa",
  "key9": "32M37zytLpAPh1Jbjd5m79gu2GGWZJsXYCvsmjEzunwL2iQvVWUDgEUNLxgWQBzumsqxErHfPNPDXBmVusugBziR",
  "key10": "229aESxLwvBoDAEUychnCdbVAx4CQxG9GVNW86vGwHoNtbm5FqTnbFnKC9mqhzv4HSrqh2PCfRQtfht9Q2khTEw1",
  "key11": "5WhG3K24vrETGrkkjfMWHM1JbCLJiXzcvgYueM71WwajVhdTeLeAWsxLAwk4Kq85MV96Qr9et2smF1gTTrujidfF",
  "key12": "xB2teEhFjuTXbpyx1iWFyZYc8ZTzR6Z8m4z197f5rZYH2qH9Pe1CQC8Wn5eQeBPtg41XsEDYgkTxp9ydFiJgayh",
  "key13": "5daxU9pyZd86gSyXKXshvVkmmyxqJ2L2hVMtdNrK2VP6jFXwbdxFwGHb41ttfCVQAovcf8wnU6aiRq1kR9koJ9aC",
  "key14": "3giWuaLEnQdgFqi7QkgmVD59LqaGXyXRMrJxfwLDUHRafz8yq5udXa9fPdH7nto8Frd7sJRjQ5gJiTSHhT8Yjb6R",
  "key15": "4ZFjC7jWutFHKNm5MuRwVJCDeJqdjCb7v3m3xWpU1PK6rh9gs23UnGt3rKRda7DsjP2htomHFhcgTPDYuWGqAW2m",
  "key16": "4gkWh1JBvCiprGPezSCsqDJfQMEUzmRnBvwMCUSFG6W6UQtj4z41jUL5BxVzMJMV7rDWwsjRYRQvixcFPLQpCcGY",
  "key17": "5nQ6o17A1DFqCPULA26qC7YVBeHhbRgEH2MsfRK26LWRuzv2kd1yWPgwDqKRHVPqTtYKXPmcAktzZ7yrdytRNtbf",
  "key18": "G27A87UjNbDfAsc67jLnobbgV3fDGFsUnxpg6zqQhWrMWQPdRkPjyCZi4qArUot2RLuMSU6ckTUKCouM7Q8JEBN",
  "key19": "jrWt3CguTJK7oCbZkfxYtxyUPgQqfqZf7PfEoFqANwhR7Fr3kMMu1rxvBKzFFXgycNMmDMsb8PuLWCq1Ltc8HCo",
  "key20": "67WacP2sPtXqfJvkXmWPoe7ii8esvjBGqwnciDTNbM6539ezbxG1j7RACba3mjowKgv7Z6FpXWPf3tzHmXyXscqA",
  "key21": "ByaergDXJgCFBVSud16YnTmHUr1Pzy8NfyK7wu3aV5rozPh93KREZEPDkEarSFsfUyt4gA8SqGmPzUHfmWFNUco",
  "key22": "3h5bGgVsxmaY3kD9Rneg43srB1YEBQM9ge1tJXwh71AQigwxjaNswKSkg2TNXSh1jBHrDrXLKpy3TbzDyTwAZb6M",
  "key23": "4DRniwipeURxgqyB6dNmuQU3zBHYLpUcbNZHiUwKExHvicbc1wgpYzzb1QbsJswSqqyssgRJuBq9vzLdW1ye9ExH",
  "key24": "hrEk7HctwNZaQWUXmdNz9RQJhBEtu1fUjcXzpuTTGh3JrQyCTY5PBc4ffQx3GpcmVg3Vodk5StuV2ks8AiXXzLn",
  "key25": "5jFU7rhAwmMRP1nNF6WDBbmwoYjN4b9hwMPeAwanN2SLeDCMWgCXUcbWsc26kUHqwJW5GGuL79AMBb86vYpEPbEd",
  "key26": "4UR87ZNeyimfwxxn6aDPeg9YniAVvwKnsBCeNjwkrCDGP69Tk65PekUtKdkR5A5fnTVmqDmN2YjfyqThRdFk461",
  "key27": "3dGF7zbi797HxYSxmSbscAuoLKtxLgGENombpKUwCLjNxZkiLyKyoYv3Z3zoViMGQ7sb48cpBMqQMV9ffEvmL7em",
  "key28": "3d9m3ZofRgeVcL1GTNAVcfvfH31j8GdLzfCFEM2953LbSDPGpnKn4R1qajGzVzvHQpxhoQPzLjXTeR233RCv3MEp",
  "key29": "458YuePAZMsn5hF1TMGNJp8r6oDhRS9KwDW1qthbKb5VrQdzrcaAYaEyLS5gV6CNhm1nQmFsxKaJcJodHuEGmqwf",
  "key30": "2Xw4kx22DZHoanLYYXQK5ZWRTTCyiiS8EphtjfppkpTDezKvSWbwCa77ob2fFe8cyLk9NayuVheJSsSp1BdX3UpW",
  "key31": "3SFEBnTXYzg3LaHLNobMJYRCHh9xh8X3cizcXoFMq4Q2dBmzjnb6eABdKYo4Gq1GLuGChTpFQvQaPXzgvEabs2kh",
  "key32": "23WjeBZCdqNzpFHYjC6SvFBSsSNVFWHWZRQsHYZvVpXtq9qX1yZJuv51Z8FwymQ7EzLtQWj281219YkqLJ5znbTb",
  "key33": "2rAtVTsvquetRAHrN4NSx25v5pz7iEzdR7RUJHhHdXBanXGyYnGMJ24muFysy8RkcJDhcB2fsntdoBcqKuw5vWco",
  "key34": "5eAEJUSuvfCuuvSUpCkvVicJDuXzDEvuWz6kHb8D3RHaCWVz6hwipD9nZq3fFo9JK4acCHfbeQEFkWw16V37tofD",
  "key35": "vBtCy641eA5ZdXQMTLQXsvDxtAcYjmjKnQ3Y6ggW4cL3ssvUGVNHsTX5NiTujhYD7ipCZJRMJvrCrAZbVC4iV34",
  "key36": "3aTWDnMQ8xvAEubC9abhgzLB7edtr14Ksq7VUkiRkb5rumgYVwmK7GZkKUtmQdJ1KGXC45EHEiyhofBv742bk5W9",
  "key37": "5AaF3waXHx4vf7wWF6XgSsyuw7JemhtCdh7yz1m4Uz8bZLR8dDNQUiFZw5JbziN3hn3pyerX4aGvk7nLdGMfk1Wn",
  "key38": "2EJLUCiUDXbHv2UvPBXX2C8aZXjR48V87d8wFKwzmAePWK5EYFDrdqrgBrCkdHEmbGXG1bwGen8ZksGQB8UBS5GV",
  "key39": "45uqcxd45LGUMizD6k1M4XpdL3Q9er9tPV4ZmY2nu3mfXeaon8mDDKRYxiM9yAEj5bs2Jy8eYpgAQHJtYxYA6tHZ",
  "key40": "4GgDDomhoTv1ZAbb3L5d3pbiiY5xMBqDkgZB3LqikBrJSoZdgNbLTFu7C7CjVf9FnLcPruqEiJQzpi4A7GWR4SW",
  "key41": "5SwACVqdty7HR9t82nWPsr5ihUjTRHA8Lt45kHmVEGqBv7ZMYRVyw7aBzqoL7JySAryvbkimuHpRi8gVFwq53Ffw",
  "key42": "2f9EtpbTgtHuAQaMuCGhhug6KmETCHyzwXHXmLzpc3212zycYXvb1XgsSpmDR1ezkbAeY3VkSqstQUfwkRj9rWr7",
  "key43": "4ewGLmA1uDoJmhgfHscrrtznLwwnBb63aJeHiRpKAer43kX8Q8gGfWG3EGoxTreerzNAypeXEJBwD4jmTayzAYD2",
  "key44": "3iRmPSHw4JsF2cwfx5zwhfDwPAk2LcZXiA6Brp3K9zEsZQiSyzfHXfm7eBpah7EzvGNDyCh8S41vjvKDZmhXudwM"
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
