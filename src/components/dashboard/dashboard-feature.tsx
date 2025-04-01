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
    "aDBmkJQCxuE6ZR3uB8xYBwZxf6grMNX6hAjyx6f2z7BmsfiHTwBedW6qnAmraRMoRMDQhVuRiaF2diQbWkxkzo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8LbfaGtTjrVBDYNR7eSkbZNRojGbc1CXzmmE6jR5CLBca64AjY8mejiYAxkFpGwpSHtWLGKEbhJPrrvtKLELXu",
  "key1": "5SbPtK9wGYTtUTK3jppQdmaCaTAwCwKnkNCJNAPspNJtP8A5vvsKzMNqWvgshauZumX2y8j2CDTrVi6TV18bBpmd",
  "key2": "3ctnaSvoebRmxZokDXzCBEHTnxvYJq1gPU2Py1RB2LtgNs4AQeqH5uWGsn4Yi1BaGJG3BwMN8BwAJbDe8xQHfUMj",
  "key3": "K9qku6XASpnUtsyBJ8cf6niqR17a84BwAoRZNiXDDsySwecNhNFHtvbt98eezFZdXzZkwH8xdLJp72BB2o8NGSA",
  "key4": "34os5uT6hgS9fb5LtJDVgLKgskh2mxrir5Q7bGrvhDUwTsCDRGcnrusZcfeb5TrSZSFCMimqia2M9SEURRamWdw9",
  "key5": "3V2apGBaoT8yXDowHnG6jNzE18gCDXmeETFA5eCkrj8AK6pRtFEWJsoMn2YUmTL6TzFe5cErH5r5u1iFFNGhUJs",
  "key6": "45anqugikTtkRUAE5GnSVxt6X19wFtpZZd6nndMTHPy1VKzUWP2fnmMCHubyTHZ5namjDZvBekSssKptycYiEdd4",
  "key7": "LPkULgiihwtcX53o4s1F8mABUGMwmPR1dpbYYiyzk3rBpeAfaRBWq7aVrG9nHKbSKopf7N8MZvCdDYK5s1fk57M",
  "key8": "2iAp2AQh8HQodbfE2mraBM61Qvh9bBDk9NZXgpfuUUtiModwRybGckkoJ12d682JrDcWt2kCSgrnPMYhgJ3uVBHs",
  "key9": "NJ2BHyDtdTykaN1oa5qRVXxXjaxDRWiK8TvJhLPR9WB3mMEW6DCWFUv5XM3h7oudtzj1b58B2TWoWya6g54nRb2",
  "key10": "3qzVyaChszT3z8cdF3xroQWK3mzG1VJ1KpFsvZRYEw799RTZ4NkTU2mBQkJMGpCmNNZcCZZYCsz85ormdN3ad9DY",
  "key11": "3ozoh6LBXDg4Q8gUJHKnLxp6hak92DihhNh7agLgBwzAkvP7s2dJjmUsoFd5Ri3CZbYzPMSwA4oBu7khk5TRbvLM",
  "key12": "4PU4frNhQN7K74Ps95tHhJiMRMZNvAFZAnrB8Z7H4KxhBvdnXMGw5LpF3KwiMktjBwPzDB72tGq2MYMYdP1MPPMT",
  "key13": "5qZWrLdVxLkTP9TtG87XxX2w3nzskfx43k9MjujczpLLaAwVT23dJnfzsLr8naPfbme4sqXT9egGfgQxhp7tcQVU",
  "key14": "3iykjkojz4sLexa1hauJVBY93JVUbDuRVBLEx2cke98F2iHX81B9VyuqZzGrppZygkJgP4NTZg9gwrYoZSCZDWDJ",
  "key15": "2gmpnwPZX3a3FEp19qfSZm9hWKEmacUvugFet3egzBbPFUB7eFesb8T8pf8CrympXZiUkhuNcv8ub2adfRaM8GGE",
  "key16": "3GquTpaTUVPz6Mhje2yCWkimHiyEE49Di6Bk1n5i6tuMru7UhyDU4Pyu3bPfLqyybS5CPGS9Xo9pAYcr3fTdL72x",
  "key17": "5sTs7MdtQGB6aBkK9NzfqAmy3aMDS2iAnWkhjaSSE1FkzEe4eKkBUouYj1avoFU178GBykWCfWc9suZYgHgUjBjU",
  "key18": "48mNJSwMXzD92nroVWjCnKMrmZ8gWtxftCRMPod2Uw7GiG2pjEUPSY5oyf1hsQTZ6vYqUdK8DupzWTLjDPNpAkvJ",
  "key19": "AW5V1qzYsYXVDzNxrqyvKHLFtVVsRszYzz33HmATbxHJfERUw5NovcTSYehd9iBjnFyhkgySzWJvZy5QAEBNLJF",
  "key20": "5Vw84wnh8DPQeGGZGdfqRTDyNjJJiY8dcZogF6aHdYP6r34RYDaSehPR3bNxWPS4wgPPXar8oCkxGgc9r9sx6dMh",
  "key21": "4Hx3whA3tpLAraTN9ELfQau9J8GCTsJzEAcjQWgRQYJ2i5MFrqVXuTCaR9DNrouwubXHeyuALWwZy8nzR7BgTMGS",
  "key22": "4micJHgMokXJuzNiSrLUsBNJi8f8PQSEsA1Rf8uF4xm3R2zh2dRG5f87Sbwts4pLitvjKmaEoLafHtFh5vYsFQ6Z",
  "key23": "62L8Tst9NvBYk4sZx2azQKdW34zdfRfWiXa4pmhBfcR9WG6fi7Xobq5RDLfwsAtXGRqUAXe9kHPqznXDEWABZS4Y",
  "key24": "2ALG8mpGhucfRYqVTEhwtNVsGnSxJ9Fp9FYb9tbMffPGBfqTjmnWeQ77ne4Xbg3aAMTbUxC3Rx88Rytb4rh9GNW7",
  "key25": "5c1v3BfaXDuH6ynsnSPYTjXS3r6TP1de2uETngPbj2saCmyL7Yt4ezW5CCBUKfwPwMZYe9wXuxw3d5EHbKZLsczf",
  "key26": "2W6R3UorCTB2ZaFdQ2d85LXvSu1uuLYy38SCa8adGhKhVCRSRqGXruPMWLqpchMkyc4x8Eq5Nrq1YQE4KS61PskW",
  "key27": "4zU66PxX9ktTkkG1YLhszm7ymu5G9DzBVPm5kqFLjdNy1nDvEC9s8kEUWwLaqFqHQiuRW8LeZbeyU6e4kkCVxodr",
  "key28": "62LDvxetKq93aCt2tiSFL25WQC2Xpk8uWeJj99MqyPGMkahkBZPgqd4gt7E9tGhk4bH1HRgkGMQY7hT5bXXeEcyJ",
  "key29": "3KtcjTAhhLgAeY92XhpzTi7wqCHZ37NSD8ypayMT4iEnruv9yA3biEYGUXZCbzT5EuUfDKdTobbR3pVtSymnb4GS"
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
