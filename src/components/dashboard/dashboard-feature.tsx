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
    "kkbgsT1kf9eaA7aQEEUzgMuUazFDApwfSgCg1sc5syQ8D8fBTPrWFBGsjXFHk4uNN8etQbUcd2GX8ubWLdp5b29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L36GR4tXCC6wLtcFV6MS7d55rKvtf68NJj4gGgMtMnhsdMcw8CK84DofPAVAsG3syd6UEPWk8y9gJAiS51B1ZF1",
  "key1": "23afi7aG8nbZ4XeHZj6xCvqd1gAWWfESqBmebLpEM8wNzyqH8Sg6a4dnYWh2357qdXpLRQ2qfzCzUCKaAJLq6n1e",
  "key2": "5R5oUdw1bCmZJkMpz171qygJXbdxQqq1CFYzunBy3vVGyiFChEPmwVVpjivorPQRw8Bdfb6LvQn9ME5niEZ9Zkpb",
  "key3": "611ZZVPfD2BQ5yWHkdDGcHit4UmxxL9svMDFGjqEmT5TjNN8RZUGMR4y84EFa7u1EBNrMwwhqHa1MB5rdzWkyxpH",
  "key4": "2ak3GvA5NFmyMbptZTYjM2Qf5BixVP5WU7HBHY5Rrfz3pJKkiQXXMNZpGDoCWepCGsryFHjmNYj8iAUQffsGvQtQ",
  "key5": "2iKfDpRimLdoiHRT11WxkCzTTRUCPFfFAGm3sQEA9Q1S5owShpK8AupWaL9E6RpNvxcmuZQo34vNytjsBXxX5WR1",
  "key6": "2d6tR11ujfvcEqZmx6j9oR6K9hK7xa9rLZm6VSWUFKgA7pbt5cTi277shCFgPn1NYaTGuQxEUQAndvdq6Jt9oXGd",
  "key7": "toYarcutGa5GHQ2EUacMepNsxJyrNH162Dg8VCST2zdxWix29VqFZqoaV99ibGg9mvex31PFwUivDak1sRcii3m",
  "key8": "mhTM9sc9NR1Wz1M2p2xEbr6FdgsFP4aMoCFRHrBwF5uYi9RG9sfC5SvLp2cuJA2Yk2d6TKR1buLYkapZzWWu5Rb",
  "key9": "5W12mwf8PpR3Y9feBrCizzKmx8KEsbHgcuDB832xbQktrRKBTRWEMH2nLNs3jtQVsdRmbnN3H4e62L6x9YiULPZL",
  "key10": "229tppPKQ1FXorEE3J87GgDmQCWT6kMUMETV5iwpxovV8B9PX3y2Rcj4hQjzQXsjaaPC5TdrSFtftcBpKNV26F5D",
  "key11": "22pw5CfDkiT8iuELJMrXqzLsGE39JTxP4BxKWk9EN5mK4c6Lwckfq2dQe1toSo6a9BkdUzk34D2ymn54sNfrfibS",
  "key12": "2BMAHRS7xwdm7upuUXhXG5KSKz89Wzt3dNArqtRXrGkWH8DwEqxJKRATAQ37foa6L9t32ae9FJ1Vuw7q2pdTEen9",
  "key13": "5kCTMZaLaMZ6PP4GyzAmxZn7Y1Eny6fK4cEfHLkma7ud6wdZQCVum6G6G1ySZKx6sWY1X4j7DqZes1ZBpQzWzBU",
  "key14": "2mKByjRj6HYxwJCJJrKfDZcBBwitctHxmGNTECrpPRVd9FJajnwUvZ7HHKGXAQYVpP9hCCRtyN5apHZ5Q1EZqyJm",
  "key15": "7urTZTCsLxwGUt4kJh46toeEBrhBX4AzJZKehkVZNKdzQb95yCquWqXKNyPTusTGAd25B1dhM2XuCLW7PUfxxxT",
  "key16": "47PTn4cBhqnUhGY1eBkU2fBkhgvMuCcTgt6o9A5HwP11n3Vum8CjbvHiJaSv9PZZkjj1G33a1Foc8rxmpA2wq3z6",
  "key17": "61rxu7EU1ofmereC9GgVAnhXuKZc8iVSbaAZS83ytCUq29Tu6YiCmNZfnEkqFYGRZsfnwPTMiRZqQvgzDieEsJNj",
  "key18": "2VfYgyh7Hd7zkrsbfP2xvaWuCAELoy4QtNEi8YMUAFfvf7yBBJnwpALQ94qMNCTNJMvq5GnwCQzz27VQuddtTFqY",
  "key19": "43q3SiWMF9VFrkdqBrpjJMr3uF1hmQmNvBfyugbL1EPVH5sfCRuVPKgAKPkskMVZwBfCwPGBSe6k22TaYR2yF8Ae",
  "key20": "h7E9eByQG4nqDUke1GosL8wzb8rY5bgeJ4F2td5KQAFXEcx8ZYzcEovHbFtTZjrnPftKkpvswWxpqjhKvYo54zA",
  "key21": "4ZPzKTHRULdLwnBiTrxkYaEg9SMzwBUWwPxvy6qk4QFiekeKnqRecLGRf4mBfxwFYAZzYxh1KmrRSSEffb1Wf5s7",
  "key22": "2inQkJ4JXeAZfZCtj2ZPWvjVGnoYmnfcnEgcSn5BU6P7NDQY2fAw5oT9FcmkuaftsiEYyAR3PUZ83MfHmNAqSvme",
  "key23": "4r6e46mnXLL8nZuQg4GqgVPNfvcSaZUmkftFdaevWAbJj7tdLWFTSGHRqiQJ1cGpnGEsugDUsXNRi1ZpJF3gsGqK",
  "key24": "65BjHnTMk61qhJo4UVpDG4imtmS7KB54C1wGMAva77QH4zksqfgGWXTpRMBgCuRs743vHe85LbCTRwxVjyL37zHt",
  "key25": "4vYmonA9tQfbmkZcxbhngpnedijY51NmjnxFzRsmzci1h1t2iERPWJygFrZkbVHvy15hRwoMa5hMhXaeqKSKiypg",
  "key26": "4VyDfntrtQRWu9BtcRrurGet7LQBkWXrPkEsZFzx5ryMJkbJnruxr5Nhs76eYS5ZJ2spDZymPmhfy94Lj3uM3tPQ",
  "key27": "2MUTFBZc8kirz2xTsB1VcW6j92fW1WAU5kHn2uh3VX9h6KtEvxq7URXYmy887fmhNdbzZhRYGTrTd8dsecHPYTTz",
  "key28": "2FSnwoosTTh5uBaAf9dkXjWG6aXnxsswerB6k4FX4uhX9GxjTt6yWbBV7Gk8djch5cFjAAropbTeTfwuZSM2iUyB",
  "key29": "2WC2swSHERts1Gidy4gU3sqqMLTxzqaFFiAPBoFRoP4VQdfeXfNYegByAuvQySyeWv22X3Y38SrfJEqPhTFKGEpa",
  "key30": "2FD8Yd78Q18crrhdYE174cpQFmVQXaK2AwmCSvqcWBEtt5UYvNcMXzPuRgvGXUXH2H97iqEJMNGMfpK71txTP3Lk",
  "key31": "4WBKBMNZoh8MXGdf4xMi9cqoiVzHdRpTjMwKNFTYTQ82EhsvDrC1D2Ui1Pvnb9fk7ktxJzeZuiBVfZUowdbvEVkZ",
  "key32": "2RZ9R3o1NcEbbo4RAY1Dzt64JpMuayS9jBZhaVLm4r4w4LvijPD1GMXq7B71Lnoz2pTPHdiiLN1XUkkhcHCyLyvU",
  "key33": "2djwVaoijTtYtGb2zLsMWFCZqnUJHdnt8jnLsBwiXfeWBgBKEsHaBjdkc8naoEuXW1AwxVq3xHDa2WU14b2xJtPH",
  "key34": "5J1LwhHS23AaBN8ULYi1dyH3K5JFqqA2Rt5tY7vCsmcYAxeQ8XXBPra7Dz3HYZfDYqZQ7Y62kC6bq7EA9FrAuFez",
  "key35": "3sNWuDENPPR8QSjotuJRtg7AEvGasoEbj5Zsf2AUJxzdGyv494nqGUza5oacMFGYMhAAwYiSohCQX1Z2Kthsgq7S",
  "key36": "64bEwtXT3PLbuFtGd5s8sfDarzKNCJ7dMkA2LYKN88YcvQ7d9sg9HUwgcNiN22r4VqGrD61FLUsBc85Yi1hwVrHL",
  "key37": "3LuVVtC6MNkcomXJiLQYQzmpoxs3PiNgRSqWcgDCcyyjwLcnkFBvsHXAxTF5jJrTT4GTQGGmHJ4Hz66hJhr5JEvJ",
  "key38": "US3AZGSunJByNioRFxiDXw8xEVS5tAT3YDvjjkosWZeRZ6c6QqbJa1adRYre3da7U3UDowAqvvjbUyXaTmFAvbd",
  "key39": "61CxfCSxs3p3gHyXJH8odE87jn3tUiKckLX3awGjq1MUsZXVmLpx6xTrdEFX6P1838b1yV1X1pfrESkyM9jgTjNA",
  "key40": "5FB8WeUgzHdi5DU5uczwUeobGPLMguDuj1DKMapCqNqpXkbNbAMp2Kn3PpX6mdbBzVK2qHWumkMEGxWNbHAxZhNL",
  "key41": "4rcWaxRfjTpLrGq1RNdydrd2BwVaBABRNWHjb6CqhH6NWWE51F5ECWzop1uDKNMs3kVA8cgYgrNcuUjsD3ZNHATq",
  "key42": "HzuNCE98rdMieKcX3hkaS8xr8oXueTT5YCB5FtyYbZwfP1FLZ6Mg9r2wX9dFSAPo5KTWYEBfB5D7U4g1aefp7BC",
  "key43": "5LS9K9yaRNvJkUves3Gq5aQLEV9u66wTEHH4KrPi6iYG6UMBbDuPuvHVACYFXqSbC1uSmCkTnZkqb7a4FNAiqZx5",
  "key44": "5EX1rAQru3S4YepnXjzuPq9V5oHG319HpaMb3ukmotDxadCrTxYADPX8ZEUm3wNLV6WfCw1mqhkKdAt97xVGZwEV",
  "key45": "v2EPpc1YfgofxQRBdYCNGDNVsP8bwHxf5TDDWFN2r8x5VYfhma8656gPgbEcNQaKsUdtTpJEpapB4B34MmnY956"
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
