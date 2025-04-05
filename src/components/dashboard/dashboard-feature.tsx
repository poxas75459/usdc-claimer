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
    "27JK9cpzcChCWWCpVBRaXWo2kpNexUL6C6rNaFpu46cjVRdALX8vj1sxBYcnXpmPfBTRJaf8r9T1CQmHqGH8gKE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdDe8YZw2JKNvQpKYcPjWrpu44qHLzeJ9iorqjq9oMRQ3kyANzcL9Wv6MmEhTaGVNkPBHQNRrrtDbz3tstxDwDc",
  "key1": "4ySrQ9EFGHUVHiEknkMYg1M8HLQBuCSczMVpVxzJY9Ga8ywEmJf6DoWKXVKni2aQPz5729SZJfkjDB2LPYE8coDw",
  "key2": "5auDaSdRycQvpSQcMm19k6iAMEGRQs5kjuQJXa5pzkDUahRtGELwNQdpqV3Zx97ytWjLatVTH62xh7oApDe3ooXy",
  "key3": "5uyXkNaDBLiEK2MEvh7r5e9kjtN9hmz4ApqyjgEm9gNhJ9h3WHAGV8XKwXMbUV7eZETnCqQ9MFUW2GHNfhtfmVge",
  "key4": "cYjiyN2Ltx3eW839y78jDH1gs4c2VNr7YLQf6Lm8SvuqQDYrdm3PVwxbC2PE92U5DhEJfpeT2ZyzGWvR5UcwV4P",
  "key5": "63JoTS1PrYivLjnZtrJN4MRNixzMgEtkn7ELGESAjUxRbaDjwfgjHPykxDAiBUcE39pKQmjeEyrSpwjaPksKsa6Q",
  "key6": "4Kr9grCw1kd99G1DnwAxPt1kMuiBswkDLbHDwTZ2cRpu5V24FSwtmfLygLuJX3WU13dFVDsEjjJ556k93WajaAzX",
  "key7": "3ahKvgwRcEpgENXThWBssXSGHNHYN8YnswKvqHpJABRHaWUwx8u4CVFRxySESndRxispeTxWreZ3o4PmKcTRu731",
  "key8": "3amZkftKfJr19fpC2A5oG5Gg3yE59QZKLhAhB9Dy7PorKS7bZ4hPi2ejDq6oFrHaXkUo2moztrtX38ug5EeiCmNF",
  "key9": "QcVP2NaNGhriMHNguQjSoGdPL8M5zKgtcN3fn5wLjjNoDYuNhqCfpDCVRmQWymYgjai4jWz4gLXoca8CpAkbZbJ",
  "key10": "42jdMrnevTE3zunhL2FHWynaAkjjNJ6sk8V2V8xSdXHzjdN9HBNRKKyPsEeHvo8XgNbMFX4t9Z3wHu8degyjSrBF",
  "key11": "5pfbJtQbW7DHQeniUQjZq94rQMD6qHhS42P7AceZ1pWA6swisb8wjsSNcDcrVm8oSX5NJweNpAAtvjK36LBe7KU",
  "key12": "3aiQGMRoSB5tH6dtG8gYqopNNfpoxevQzcqyZEsTzKcHWyt2id9jM6ZaKHmh6sJJPakpWf2SJpfWyKzLyutfaUQJ",
  "key13": "3y76p5yGS8jbWymrMvoexDgVpcCgAjpEchHFD9WkmggvcMcNeThdkGXnGcPZPp255Vb6pRxUY3ijE2SzsyLvH3wD",
  "key14": "32nZ7tTb3ZvNr9kMUxGmT95x9nSzBsuEYWu8gjF2gpT8dAVWQvnYSkdZYHD293UfNNVsKGfycnWvfD5xHSiF5zYD",
  "key15": "2ArEK9uUDMsDd77qBmQqBEht41kNfwqxGKiAA1DLrEcT6zXcqKgRLFj9191EqMZ6BV5VZwmKA2Vx16FWvxJkidBB",
  "key16": "5bhjsouyzX9NkMbrcXmEoFRMm956hGnvRGPeY2ZpCYP4291Cc2G6rqeakhMgo7pwxcrNapzKGju6T7oBMzsNcvD8",
  "key17": "2aFbQEXRDHzEUqXDy6UkjA74CoH4VSHGf8931jtjRJQa6DA14N7kiW4MX4nzxFnivCgWA1G2M5ipr7ohgfGXGECG",
  "key18": "5bGroxddmGWsULKcycJYf2XwdxFfy77qpLfVjGWTBxLKXsq3SQ95gSYu21XzAzWqTuZq4ZkZVtYHDd1b4WPD6gpT",
  "key19": "5iM5nFBwTXYrwHQhSFt5su4ccCGFp43MJES8RzoMoeoKNGoCHR1fu9GSyw3RQbJxMJr5kXuwKV7JjQFiVnXQR1q5",
  "key20": "3PjVwkrRLijrjdxyaBENSitRbrnoyDouTpuFutzV1mhu2pDqPuN3F4ASSjFp87a2wUqeEmes1A6a2uQUiwL3A738",
  "key21": "5nD9x63G28Y5XDhgawc6brUBFr3c17iET6zgbXrprdnRuw7vPbFS97WYKDvU54BhjmLu8eCruf7fQkHPvFM2P7nj",
  "key22": "4uJ1iRLHZdcJszYJL1x4rrKfRTeSSPjR4jwxvF6XbP9CD1KRWtCr1HLGudVuQdht2bk88shBUbajJ9NnKtnPMabs",
  "key23": "2TckqsR5HxECKoQmeLEWMXmXRvQCU1rt9MwKHXoZJW9ijbA9gAF11wVs329m1mJStBdntkDsiFrxPv5GLwJNGYbf",
  "key24": "4a5sYZRnwebtQte36UD1CUiFes8LEQDVTCdJT6UwY4z7ASzvNGWVLjRFEGfob6cr82Ymub2Kr8DRxoxxXG23Cizd",
  "key25": "5zpy96EmhiEcXPtaCYrgDPDUcikgD7avWzmYMoKQeWJS1xbKDEXjsByuvFfvQN4LhbxcdMKBYfhVqvjmJydspaZ3",
  "key26": "skY1Ywr7CKCSXqN17AkVc1H9afi9xtUzm87X5grSWDV5X9gyTMqWtP3MDJJW9digqbwK7pz8CZEXeHPXTfhpYBK",
  "key27": "2JRpcUtQPSdZFqweL61UC5mN6za5TQLjaAysgs7kboF85fwNH6TTZG1tqpMFiEpughggaLWU1XWkvWPoW8phojrA",
  "key28": "45Sx3nYrkkwqf3k19ANq28eMWTgqBzP9kzD6GmhDTjNUKFTaC3L6RFBhcJUeuXZPKuXZTDJdENRWExZT23kZq9y6",
  "key29": "3yRoAhjbiPdXeNwN9YzEQvPjcXAdg3v3WpBZ1uNSCMJj7r7ChuUv8sN6eZmJcGbK2Zu92RGnma6bNvhj2vvxKY2X",
  "key30": "2wjqWbwCWUStqmghgfD47XzSUDe33HCQNfXe24yRDB4fjemjpfc7DUX8jZoTaFZ9NAYQ7KWZrmg23W28vad6uP3q",
  "key31": "GSTjqpT1bJ4BgV68X1yesbQ8xf2RHgygFoMpf596YJqK3nL9JM9x18g8d7vnBMkRvPTzYBNQLGpTQrZFugv3z2C",
  "key32": "2ffFeiWXF1nhTYmb8E1qf3NbYB2Y8obvQ7YqS6oYutDq2dLVTKdbaJoV4FJAXmYuAXf1gVWg4gaYZhHJuhjbH498",
  "key33": "jsznhaBKKiwBHvcGfX2fnacJJK3iDe5QJHnbRmq1rnhQgzNmXmuETgAjorJ7KtbPwCd2PVhorBD5tg1uiuriTjC",
  "key34": "2Tqxkd9e28yqRfQiNqhhvM2NEjU5kGtwqCruehbMFoFDD8nYShJN2G6RXEwSMnJqTDfD6gmYoUoz3BtiKvEAuLJ6",
  "key35": "5sE8nb1ezprBn6Vbv7Xvp1Lb8qeh8R6X23nSBRciH7DjJBo5r3yRf2ZG4YNedhxSHRFYQndEEfX8KeJRnLK9uxDY",
  "key36": "5WEQom29dxj6oaWKFRRdcM5B6GzToWf8vY3LXDHyJiCMd14dWE5DzNYzXaL8ek3ycYPnw5NtZVEricjuHL2gNokj",
  "key37": "2CVfaJWySQ3crNKwJeRvKT8yKAdXhsauACcs4F2oH1QsSQe9u1s4sQpEkV2CDzjztxnhhMoZso3D6VqqvoEK7Utb",
  "key38": "4wnZLaMUmZ7RUN1JR55Krib2sB7Tge3wVL3yYCqBp3nywgk1BjqryjLTgzEdKAMjPLJ3a5PFdBtZgJyEunDomJbR",
  "key39": "BMeg88zg4AWce5rB4qs8axx4nALUE4xPQeB8YuSNEqCkYFVZ18DvShzaUBDjN1wcDF8cKivvVwdsjPViFXfw8cS"
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
