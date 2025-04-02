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
    "WYHQouVMe8ZjDcp9wvRsxuiH5MSghMwuEpHB4WQ6BH6cP1a9DXYVB6ibH1ZX4GDypWC6TmyT5uMw8YPHCD7vpyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZeTjnPzKDg33GuUpbdJ3adt4LuSKMXeVFyBvuFCRMEzsTmxrnAfaR2qn6EEAwC2QQuvjqEFsqUrfkSXrKFNbT8e",
  "key1": "43FduugQweVcSQMhYMWCALfSBgyyZfaMDKaurJUCauWb1NMWmWKTNp9nh3mJNz8EW25apV13NWxGbs64oqn8LV8Q",
  "key2": "4S7PzwrqBCubRKoN7PS9THBFDHhCzg1XK3XLD25my5S2ZTVPCLp7Stpii7JyK8mz4mSZxk9iRVZU5yy3UrELdqX2",
  "key3": "5eGYXtXJBjEVGaNKWxo9TGdSzzxEjdRHfm8Wf4621fXkYaxpmnePMJ31bq4oUPS1yRXGzBSiCrbXFEZYUwzymRNd",
  "key4": "5VGSCptAQrSPv9gxSgJwW2WyR7z3iyc3uaGtfzLLZggaiDiDkwpnAyx8XPreMGceVk5rL81cy8TVnxHzJ9vX7KkB",
  "key5": "2MXzBqYACxVe1YsTKCz6Xa2GAhZQjKx9fjX3qSB2sP6efqXYEREprd74Zkmn4Ui8MoW3jZD3HZARHAn6wFuHU93G",
  "key6": "4GF8g2f4a1x2Mx9cbpn2GEUtFMEe3TDLxQrx6noCSudseA7MG9nxCAH5hnwUjcxZ9Bn73KLKZS9bwgP3QPR42eAt",
  "key7": "4CicDydq8LaQsCzgy7GoRourvHLig5VjL7F32VWJ5mJYfQoV39K5E6CRbeaRRLLqmtwjmQHPwBc4ECUdbQemm3ov",
  "key8": "x6ih4UM8beoX9n2MFCWqzddFHfei465SyCDZvDjXfaVF1KvcPZuCBVASfEntSV19HpgFoxQjboVamqpiwUdT4qq",
  "key9": "3u9XZb4XuRi5PmVPyyF57B1yhqxSitT46QgEQ4X9fM4r6vBDhHPKVQoWpjXowV5yxPmsBbGf77bTZxxs5ET1J2Cc",
  "key10": "3zvbR9wQRgUPSTEGUyDMuQLay3fEYgmj6S195UFZ4TjKmzX5AbvF1VrR5gPN2NP3ah8TcNi9FLEkYC5ZbqtfjEAz",
  "key11": "31Jp8NjRQgq1HoCwRvpk3eputfBF7yNBqxNoUXmN3nDup4EchXzzaDZNZxybHDA86n13szHVSQ1H7EHGv37tvBck",
  "key12": "334V9ng7bV1XMe9cRo9nCx46mNKqaMmFeTBzfygcho8Gj1i6HrKjKUGGvGPFMrLa2vUL2ezBpkrJEHGY49WnJMkq",
  "key13": "4wrXKKzsgGj5fmJTCrbjLfTSVsGZCyhEiibG7Ua1rXDpqjB9gjnvLz3ybCkupVs93pPfRTjC39xzkg5UpEmgNxEP",
  "key14": "4pv7yiPNXbYDkV2hRerqyC4KvnF6agbRyF3fv7yLTHZh4xRs5S6Q8R5Pz5B3JGzzsVfJ1gPLsDMF2PYui5XUaXZu",
  "key15": "2epXrP7rQorBZQTyiEhJxRZGc9s6bYWaXB3Rj2pwx3wSBvMzmkbZGdJc4JxeL4WKKLg8yMdJauo5dGkzQd3qPc12",
  "key16": "5zAVJurqZMJtTaJWQvgrrF1fmDPWzvc4SuU3YHQ3BX3H6U8sASCYVjndY1HgkYU8E1u45GTELTthiPjXrjULZJBK",
  "key17": "61zGAsHBgB7MT5jzvi4vCuaUmbJGeBioqohf8RMSgKsZSi9iq8uycxK5syHk6dc6aEwzhQZJvKNxNSZR1ZgMQmgc",
  "key18": "3GEUZerUvPLyfDrVbkd4wRRm6cW5PKFbPewV9G9dgP39VAp4LKL8SarK5p9bRxkWsFD6jr5AaPh548ETLSK6TLVy",
  "key19": "TsVKV3dytopV1KLqsYwMXZZcoCmYkhfmpx3YpWxoHABe5XVTg8HAqaEhEnySgtfhmT6CMP4F7zPRWDuKAZQwaEb",
  "key20": "4L5NesZiqsyMoe6ZWyGPrf4hnFC4JNg7REMMZyUVzARDnbhw7nGkqH5snwSKnycAwKVbGcADoo1KxgCLPGvJCVkh",
  "key21": "4z9vYMgUyXtF11KovAZveYWyr3JJEWcQ8tmNGgHjqmnuehpbBcF5pNjjPfGzRwjTPjPqLh7VTseVKcMik9UYvsXG",
  "key22": "5wd9RWGG9rVA3jHXVp3jEsXZuHmAiz3VYzD9ScMEdUvryjKaqfaWmLVgDrY773CnuiXMNg3YXtk49RbR9acCQBDc",
  "key23": "5HUAkpUEuBQgNdFiSSVsCrfJcQbRu69E3vyFi1WzyJWuRNdrSNJEf2xT4FfS52ftzeiYKty7EizhhP1GczKe5V3Q",
  "key24": "ZcA4PWdic6Fr6JnPiLw4xYatSHKTa9c5azrvARViWZFCyubdHbjCbKKMzhMsZL4Bt38htxB6SrVi8UqJiU8fNuX",
  "key25": "2N14t1fTaQUWXUY2vA7F3omHfJUJXtkgiaNDEFc3ure8MnZFM9C8jh6viePfAT25u1rqxL5h1xyKhcSdATSG38FS",
  "key26": "59e2Km8Hst2Z5vdYhQbWn6ooprTBz2gx5qUCHYddt1G3ytR795v8ZogF8MQePYNFVQ2vi2xDmNMFr4pcZ4xW6QCe",
  "key27": "25dppmwjN2PQSeXA27VZTCSVWUGn2R5tTyUzTcgxCAua18NG3enmzwxPbp812vWQmsySjXBwt8VCzHeRhtCsfDgW",
  "key28": "4mnKHvNFxz7PSJ3xSrgbuYtHVChHmTQM3LdN7zuvbg5Jbh5Bv7vzWfa16DN2TQ3E2MdGKCd5kaPknqat4dZB813r",
  "key29": "2efgiUqNtgeTMiYRV8x3UVDpycALsJUhAyfkG4vqAmqkHRJDG9isqvoKs3b5gSFXoMRMk76ZW36gRQ3764qYpuzV",
  "key30": "2pBdzrBuFj9MJSGvBSWusgVQcaYa5twza7HBY4ahd7zgfpcyr7mFVrWUvhuTDboDX7KNxfmnH1gRhvPsfadZoWYX",
  "key31": "296yeYdd5adtX5EhQjwVFUHySZzsu2UPt7mRwJ21eM9pHWbu8959uk5Tv5N1VnpdS2qVadS5txgkZi3Rf3nZWhht",
  "key32": "3vuecoLkdXFFeLShnrn2ZayQsfn9mGNaLAcicSQ9Yc18sALYdzXWQZeiB1Z9uhjV6STuRJBMuiA7YVqAz9ibr78c",
  "key33": "4o9zwtVxYW1xGy4AhzxUMTpWYsgdsf2Jt61kJaeibTc5PLWbeZTgkmMfRTakziQUhevpkgJHXyCdxTwWYWGn3cBL",
  "key34": "2uM7TAD8y8z824MdAmUCkpZq3ACFcEntMbduf4SSvckPe1jrNmRg6bY94Mx5LBRsHvRm5tSn5FdFu1ACb9iCGDPc",
  "key35": "4SfGGa4QFkPj4yXzCeELdwcg2ZBXYF6RrPV4CvgkouBwu3inBWnJCymqEtfHHUAibziVydkys87TcUQ3SPt3tmiF",
  "key36": "2FMKKvFbzMobcmJyWDu7XqHQR3wGEgEScCUadtaTvfQ8HJ2Syh5u7EftNiCNLF2sAUGAZNapuzjdQjqUyW4RAQ3h",
  "key37": "5dFLZmvJNhofnqxxCy2a5nELeGih8PKAvaefL8prj7Fq4awnZAKkUwrZb6DXLpnvkK8JYVL12QELX2suDSrtGMgc",
  "key38": "4NwZURJ5fDZZpmK8GDeF22doVn1QoEcRuLy4rPs2kJwf4WY9VMLfRoDUJN8W2XudJnfXewUeg3x18U1PWzpEH3DR",
  "key39": "5YbXvyQuew2CSwzJroddd3ymxFUj6GGEAFQmggoxWW3oQgrDwraaWgPQUBv7VTPqJ8Qji8eYasAqW5y999v3ru1Y",
  "key40": "5xFaty8kUjQ1tR8fBBFRJhMfPXUTvTDxUs5ZB8dWNaprmT8JdKT2fyk8Fq6xtPfWjTudubQCCe4U3P95dJYMv2P9",
  "key41": "4QXDcALTUdbqLHzdo4LUNUr8d9zsKzDrWsdyn51MrqGTaCfwd3xJopRRjiaZNBLmTBH21zpzi7VzUVbuJX5y3axa",
  "key42": "4WSjrse6XruLqJC6amMcrMhiLfs3LLdbV8KoXjysNPG2eZoecHCaCnXc7LFdQfhkeKNy4r37qZTqp63RSXLeVMrx"
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
