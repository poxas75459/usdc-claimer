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
    "3euha5vi6XnhHmcxhupbAbtTzSdzPwgT9kvDLcB5jN7FFQQzjfAtuLuNjz3zA12hh79Uj8UaSA6vsVcKxnsy8xut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bpX7Sc4vh3HLh8qTGAH2Az5puBY51rM9JmABhgr99uzLoPSXWqBx5UMDQ9f4PWEksAYQz7Df7QLTMAJ7FQok8jP",
  "key1": "oaVGKadnjyQH4WaHbi6GAaExs2YW9TGyt634jCQsbEK5nkXChh1fxYA5MS6c25L5kQ8c7GjxBw1zHXZxFZjg8ey",
  "key2": "5DRL86Mw5NvYXsRKQQAWpxJkdV3PvfqpRuXtqKzR7ZBfhLzchbzo59DusU3Y2q2JJ3ziPXXPeDLS7X7wtHcHxLYy",
  "key3": "2zKRBGeyjfH4kDTDfPTzuBe9nd1cGvkvMSy2jcDH84KFUmtk58GzU8EmpREjv9HEqPznQFMHdS5p8xKUmCEHCGQC",
  "key4": "SzLwwSHMqeBgkCVYFGCxn9sHcK8pJBVvAKcxqtfabvhiedyp68HDndjCXaardJkbxH3C3aCGwVvd9m5vgSnyb8h",
  "key5": "2HmSrJ1zJEGndgZGyPvKGpTZ3i736CCpxUxkHzwEqER12CjZrTXNxVsvAqZZ9Hu6dVGsQ4Mm5jfyYPDEXHCcFTxR",
  "key6": "5hxHdX8jvvKz4fxsZhRpymfStjwB2cpGq1sS7M82i9YQGACnCgGzFEw98ZoCjkqo4FifZVahQVGcoTJS1yC2yTLW",
  "key7": "eepM2YZzGSeuo2o4CMShWELhHM97WRDqQii9vAvTDJUYGGfv3sWVeW5jkEXbZSLSXJLhhdHee2zC8HsXksVvafc",
  "key8": "5Y1DHPbQzb6tk6dpYjXPixFTeq9eeQwFha6y6i26qtiErQsTkjAeg8KNY2mhEmBfuAvneUvftFHip5HULWPpK6Qt",
  "key9": "2Y11xRQhUMVcEW3Ja32ADb9jPGL1zkzYc1hta7okE1uLwk7QeRbyNoXCu2QajRMh1V6JRopeDKnEuE2RbtGegiqc",
  "key10": "2MYBYqBrQ1XF6njHD4sPZ14hJcKwZRjScEM2BLybNxVPRig6H1HdRh3KJNbufNPcC6seaJZfRStPWBpxQBzpUzzL",
  "key11": "39Kpaszi6qQhKmPc39pbc3W85vbsLmMTZcdjtyDh47vZNzunH5U24LvypRgueKHoWZg2TbAB2kp8c5M4cC4SVe1c",
  "key12": "2mPYhM7GJqFKHy6QTFRVDEryuCnb8iEFBGCZgK8iUi5yYffrG7XTECRz3EezP3SowquqGmHws1gNPB8tv3jY2kAz",
  "key13": "4VGQ2JGssBv6T1pQ5PhP2Xe4Y17VZjsgywod5QtQSRCrxWuF8ZGiTd3x863YhRfsFqtXxvr4dcnfPGjQFj899mir",
  "key14": "3J55dcfZEiUmVrfC3aj7sxKKbnWLsyJFMUJE62NzwGrh4orHoLbqEv67iM1MVmdohtqPPd8kCMyAVHRfEHrDDqyh",
  "key15": "43FxxLuyV6rs6bHqjWbqU2V5SuBoPwaseTFWqFcycion79nUNk1ojHkZW3hAs4UDprMg6tDoyvQ7AcaroXTZkFMj",
  "key16": "45HxFjtjhf4Se9gu93ZNwQaEK6ARQQFuy4ubkzsmRhBmr47BSNqi1RgeNuyVs9Y38t1aNmSfSqqvfEVCKrvggLBM",
  "key17": "4yWTJq3eqrFHDZXGwWFSmNbpcYmrDigU8V3auDhHJZzPENiQg9WRy1JdNZ9w3NbVL3VVqeWx3p4rDwKFLQjgPSAU",
  "key18": "2TAqJXxitngtMezNyTQSPzSo27V5Vu87pMCTcqa443s6oGAj2ZK9d5YvtfEi12rqEYAGf3p9pQ6vch3ffD7qo3GS",
  "key19": "614rbVpBZCX9DCyaR1Un9iPrdkA3Q6bdKmzhy2hwiiP5gzw9whTgkpbfJPoXPxF8vR9wWxbJoUFfCL9sRs5DnMCX",
  "key20": "AMRiLpDBmbkauDi4JWqaasEd5ykVLPPZc72unGZ93R9KqeH3WEpr1xraB3rVfNvZYN7T7Miu5Q7hzWwXtkvo98a",
  "key21": "5kecF2oCATe1JBeyz9JAxzvwNu3WuirPziaXU3NbuztER8Eiv8qP6K5rvz9e2zs7P42dCCDg4tLYrXqkKuvNkZT4",
  "key22": "5ZspvLCvG3J7wTXSiNv9QhHU9ahsgC69EUiZjs9QVD2Z8vN6f2YrGaR7U4fsM6n5612ScueQzHydCJicW9h9GC3X",
  "key23": "5BdWjMSW1UK81UyB7JATxXMrWW1uE9ouiJmWYxmUzVD7SyX2QBUM4morHd8oRXfjk8F4XaUM1AratczJyHGftM3Y",
  "key24": "5XBnT5Gi5822C9dDAtt7ghyypH694jZqQGJ8AF7UZdDq9FRLkEvGMdHtyrZh1oSXpgftkbUPzZRnDiBqd4Smn9x8",
  "key25": "2TSNox5RASwv71PsjJRVorEvwetSYYWkvs3E8CbwWXsBBnRNSH3WJ2wwfj2621q9ZLNdsykVkUjbV7tWYMGjsjwz",
  "key26": "4E47tZWFeqSPC928wHHG3zoaxeagW9NwhA4YDrWo32ascrJfKSRKGQvPt21rZ8fgf9P8UWjAL6noWZH1eUhW2P9k",
  "key27": "4zsUtypK3kGX4pJdSq6CcdCJyJfCgdBL8p3n8HCATbpHTcgAv8SjVqKh7PZ9u9Kkvu6opzehdBPXRurTXKQbMQW4",
  "key28": "2n2dDjoTVdknKg4Whdn7FfYY9UdmjUZVUx4ckwqfBsCiFNXbvkQSwBuxpCK3Q57v4pqNmEtNYK5KkY4kYyReEmGT",
  "key29": "3S4Hha6kV3QbGCQt8mYbczBqUqaCRKhJv492jzf1ZX69F9bvpdFwv4L3ev374zwYVqfKtJ94heqqk53BcTg2pKf9",
  "key30": "5ZC56FUzCHJQs1eRdweJLgK3g43Rkqwq5UARAY7Fp7PXSHvwUBP6AH9aZSDFVgBiEL61RhuGZ1HqtaM1j1fXEDVR",
  "key31": "3wCHDruTx66mP6oeGjtNWjPqF17HgEj6MQzm7e6GCCxA9wemoNLRNaw1UPs797kAE5r1LJKUnCL1wbUBTLWpyfqr",
  "key32": "2DGr93buCKLGgPauXroKnEzj7nhPRvBfkhcUqAFDHFC4Z4eH9GmKfvGVAzmmCch3SuGwt7rzvyaPHZHQ3EzQgDuu",
  "key33": "zNFyCXKMqNJVC1PMDnsUMJoDB6N7D1RKxjjxUP7XdMd7BK1x16CMuAW2vrZN24uqyGYw5L98dGDybbtqkYBic8b",
  "key34": "4FDK7rkBd9YZ1TMx9yhToPafGi9iciPpcZwUZb38Vb5iuJKrbwqhmKTdWvB3F5h1wgmpC9XVrEXKxn4bkxNZJGXD",
  "key35": "34Tkun5yzyzbvLcjysTqbBLxhG9cotZsGSFPm4tdznGRGsig2gXjEDdW8tcJSwiCj9qn2nmap75fZRMZ7trfc3AT",
  "key36": "GyjyQxXSfBQXv5YVdTWVEqEzD3ZY1pryiuQxX8KJvJrEBzdVQM2aSCbkzjyamiA9mWyhRoW5D4W4Euv5CtxXfJD",
  "key37": "5botfsU3mEu6R77qnQKFyrbta9jVNrFhTpkcGt8WBTpozYnDeypcvrCj9UEXZWYhcRtG3fAJGgCgXBhJpm5z7g85",
  "key38": "5k434T8MK4qtx1ZRzeowvJM7xMyc5ZgPbNLyGDxp4PiAqooYNkZQCMDLpuCmmQHHuRhrRtQ8tqXmhJUg2qRUCp3j",
  "key39": "4hbtmddKhCKEhaRvQE4qUyA7QCjgDS99g6WxEmkJVDqiTLzgb9V5vSjfyrC4y4VkTiEHBgpwvXTGgyHUNWF2rp4U",
  "key40": "FQQhyQX53W4Tp3T5fjRdC2Yiu6Z1ieZSXCmEz6n3NMZervytTCSJ2eGbxuLmzdz7sNHRMNACRnnAMop1YsfWT2j",
  "key41": "26B8CknvrmWmHHXCZu89pB5qdv5cR8UHfa9kiymEmKmGDUD85AuEMxudz3unAbCaC6e5FAWjNDSprSrDs3ggxfEK",
  "key42": "2d8XRAWLLggFYpDFVmcc1bWEvCUBfKfZKL92XsvxWPNtAVF69kP2ZUbuB6FYbBNdgXHAzEAqDB5PUKkbAPZsvrbP",
  "key43": "5PsYmmqJLEBiGNbdsxhH5aodV8nsWLYTN74S3VcZUGo5s7dXcdohvob8MavgUEj9d8UYaydy8R8bs2ENb5JVSDgC",
  "key44": "2D2Jy8vRLMzswakCWuk4HpVpBwGYc5QVkHJw8auLzj34WFzFXqHBwr7oyUyzu2iuTnpMm2ZGAiirxXxyGpZaWedG"
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
