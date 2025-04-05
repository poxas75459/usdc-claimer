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
    "62jHMGgpTMHj7Xyb1fszPLx8YN1LZTw9U9koHhygZD6cZRV6ejiRbr9P9KF9Zux1B5N5PuuCATaJqBWEkZQEELmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g5Vk3DpHppAMLxJUnQJB6HuBwddxwYH1q5GoNSDhgnmnrC57KoZudf2PsHUoZDeKGKto1jtiEstee5Hi9qPrFs5",
  "key1": "49N8dUpcTQupcX5i9kBAW6hBVpvDf1wnLLiCzAisXrm4XQqKBNLk3xs5W4jQ76k4ddNGQLmvaiCUejw55fPRSk2a",
  "key2": "2EwydQEbUCiBfdG659ot9QrsYCYW5bDBL61ojrzc1Uo7qyUajzDXsw1EQPjS6ZUEWaMweqxGcvXN1U1D9ArUkLEh",
  "key3": "2rThoukkEd1Taj7LrScd1RWX7AbWzux1NDTXFVNt2nJMrkFTkPHiJ4yGmuSRzhKdW17wr5p7Y6cTZhgaTX8reKY1",
  "key4": "n5pFc7NihywcTdw2HNyHVXSNgJLyrz86Zpgsbz1TptcNYUDKrx9tdzXFHKKz2xP6h38uuRV9LGmSAkEwaex3R6f",
  "key5": "2MowhA1AtNVnAEghjAu4TeVgQxUmxSdCCBZyCehvQFzRc2TBzrGA2ZczPm1YTmn9z7sHYo3FyEEpJFShNt6jdi7M",
  "key6": "3BDUKUZrZqkmQA2ff45FpnZB8kYDh1ovm5FmwVkzPJivWvjpSLmchp37iaxpMumVkdyn9bCiQk37GnRz1LBfa1Qd",
  "key7": "4GGBKepm9BSdPbjhazaUwAVJQxsKEm5aSbtA4vD3fBhegd4LL2nDQq93F8wWsboow76KigFmmEhLicNx9SoJVYj2",
  "key8": "3seLXHBLsu92TWwykZ8Eh7ESGPXU3wgoextzzPdarHx4GTqBXmzK36fvCyF4L5FRexNEx6GLPoeGe8tc73DXp7vu",
  "key9": "5xQBsLP2EcXVkw3zge8GFYPKYUNKhd1VCMuKNoyA3ouvRGVfBk8WPZS3t5ALkFmYRF1QTdG8Vbuf515DFPJZvfRF",
  "key10": "32PZwqayaEQ8VxekLg7Z5SSeJ3vNuS7UCEMnZyXa2fMdntVvG1JDdBR77iYHLLuAzi6u5w2R62YezTmAQCzukBPZ",
  "key11": "46acygHj6k6v1xmnFDnG5URBPXeRNw2KCa6LbAUFXpLKvCPfLZgnKsLifQ4awM4hdpiJPMb6LNAZAwnBCbWV1uC3",
  "key12": "4rj7gdjmmFsvZfdrhMoKERXDVXvwpDixxmRyjmdNhWBvJuCnRx7KP3aMBR2xFf6bx3zE9Z9ZPo5cEVTbkw7SomH1",
  "key13": "51L3deJ3ByF1kgJCFN58DSjMf7VsWuvPG2cbvuLfyEWaDYCV4JTVoVjvWz7hbJ9AwY2JQTJZa9w1v9gj798ipZxT",
  "key14": "2QpBczw2zvz3c66Zmnd33Z3tjF2TPB7j2fU656wUuoodU9CeasHGjZoE6gryS4pffPkxuaBMgor7iHGPy7eEacWi",
  "key15": "4XKiACfYdwdhrvmfrajAY7Jv58G7ctfkpkvsrQVcibmXoKYR52inycMEuqiwMr8ghBaDCBdRubXA8scrYiFvDUNK",
  "key16": "2HQuGw1zk1BDH3hG8YNFHDojhA4UFPYaPzRP49LNXHADtipDQnDaPMv93SJUE56QAYjVhfR7iPQTfAbDMNv8N5oF",
  "key17": "5W1XmnCZNoQHRMtfnLjJuCqz4cUzPVKHXC6pL8FNseczwQwEAmJxipbEKHq7q2nxZ58WcEui3YZhShzpdhWRGL6T",
  "key18": "67GtC4VAVzfr4mLshERKGDKRczHX8iPPa1RjmDKG77YhMytvVxgNr78gKmioB1TzQ3oew6hzx4DQfpkYWxmKchJT",
  "key19": "2Ga7SuERSEXfYpTf4LFpPW1e5sKNRcTHRCVSQhGpGcmGU9MZ8KE6cfWzBf8Rrci7iDbPXtghUZfYWsUaRzBbFaa1",
  "key20": "2JQNNKy7sw2o1iBoXeM8jXbaUJZ76yDU2BaTREYgoA6NokG242PAvcA7MCLDnc5zGjoGMNhuxuKMgtKiC1RuwkDR",
  "key21": "5tCZoPrC1bLkVSoXGvKXMBsJV4iWHsbLdxf6SGSx1CoS3d9qdVoVdMubFgmyh3aJscrRa2DJbLpkRrT5XTdCckjJ",
  "key22": "u7KzpRWEHYQygt28cFqtZzq17kBrbTKmUPyTwswrnSFtjAagUnJimQY3mqxAaBY1ubmPH4fUw8shRVzA3TeAd9G",
  "key23": "3FvYHxxY814dBhnLNTKbsVDxj4hJzjn8y28nRsVumcu1wL1RAp3EGsnWCQvAqs7keB5gsA87FAG3QBcTsr3nhxeP",
  "key24": "62zbWzfHRgsFi3uAj8ThQ1UrZwj1yViKDeNCYwC9RBxSe5PNY7eLsWeuSUJ6rR3mWR84UMR4Vk4tX6XZidhR2QSb",
  "key25": "kyDp2MEyxQSPxQrKu1j6zBqGHCPkSz7YvMoEwF7Etx5Fp7HWE3hgNmAUzS76vS4EqguxQB22Fxza6MoT8Gp45bz",
  "key26": "9WYrfjarCusTNbPv799Y4MgFgahmFGSkkJbUhxp7MBpanPqS6w6LAh3MopqckruEr2h5E5D8kBppnFSUpGD6DQN",
  "key27": "2CPfZRo82NPY1ur1Un6GaLrZ5Lpz9z7khEqd4ed2Kk51jN1yvKsCFnXb6hbsgEWwhRD2FjQjpuGPbHUQyjwd4RQq",
  "key28": "5M4itaE75MZqkcFnhH3MpgiuLsJctXHmGWRgU2A7AQcSecAHRqtASHRqWjo9JQxjTmdUuBfnDp2xfi82bjHCxYnh",
  "key29": "2avCRDNFa1ZDUcSY7mUU4efcz2hUyGfJb1v9eYs8Mnuki8aDu43yJBDAC6tHM1S8ZHNrGBv3gby76BqcELuJRL3o",
  "key30": "3KVtB6KhBnwyuRbskVCzYefXTzYkXrnbih7b8Mq6DiDGBgBzWeQ2ms3jF3UN9VTqYge3dkKnkTYbia9yTUfFKdUg",
  "key31": "Zi3gboETvrF55YypoPWc68bSTA3ADyCSRkeF5rvj5y9ncmBbt6fz3uKv17MEPS1gP9nwoeA3QUjGE5NLzgRkFew",
  "key32": "4xNfmryD2UCH2ZvFwAK4PDzCK676xqpJHg79udXhzHPNQL4mYXQvqfUxw2MsVemhwaNSCD6ezAM3cgzcF8EEzUHw",
  "key33": "57KcFQsrGGhRr3ohF18FrLJcd2EGT2s4mrSad5uoxi8gpLgQ1Hpd4ZKHCpgYBzQyzJBb5yvphi4As3eZaL4BmiQg",
  "key34": "4EM3G5vcqbNgaqKBhpGCnui8Zvt87zkbPJdgz6m6VQCboGubBpysuszUQer9db4e5pXGVrJrTucgwtwX9RXyTuQn",
  "key35": "3WhLAq46sEJNVnkfujMkhf45f5FoqXC4Y7M3neU9CwNeq85rpQtUAniEH8KhLyTjmDAYCQEQZYTVQWunmTxvfivB",
  "key36": "uwTMRmDeJ6anwj4Zer4eCY1b3Q6u4mwSZgxuRJxy97aX5eUP51LUeXRJ6UCgpXNpd5RgoGENBEPjxbcnPXYWm5o",
  "key37": "2MZNJyKDBV4YgL6eVLmmdFbeXde5fmgvG8xo4FwyT1Jsnawb1nPAbhEX9pJTiSu7YGfz5TeMzqC6yQPbs7XMeNgf",
  "key38": "WbgLZgE91KxZRpkoXKEwNCmNUHUo4D6GjD1sZGUDH8P3twyW8qU8XGPx8VAD4HvbNMAcRRMvqfWeWq18koh51m2",
  "key39": "56GPUr8q4fCc4NFAEAJajcAVpYXoJLshGZmD3HP6zrAssbHk8qBbPFEEcb1gZnxq4gM8j35JZkhhPdhSA4EuGhqW",
  "key40": "25Vq58epJBTxipXsuVA7frpYp1gtk9ooe7bQsMvR5ojTarwggQPXxzNrJEqVJ84FawteLuoQpoG5TH7F3yYHKg1y",
  "key41": "3sh1esh4wbMFvxUPy879CwgnNfCvrEKKd79skMbcAjGKvEY4BwCT3horKcNDrQkPJp4vbPnAZjFZ2QeFGAkyTSFE",
  "key42": "5W6JU3HdGJbnzLhT2nVtwG6fQSicMRJARh1jbJXtjPhRUmeYRSaJ8SF1BSr3X3ASdk8oZwWvdtNp9ZqDYzVZFdWn",
  "key43": "5EaKnj1x674UgCL6Eqo8ySq57eY7jR1oeQk9EGXJRa2pNby7EmDuavbAANq4TasC7whsynJFoBFoNDn3TCjrwsBF",
  "key44": "3BBMFT64weQugkiQgyznnjNYtLDSmPCYjCaNazohdWGZEQ8rCAYB2A8sdfF8fk9y7S91qvpoTkMsEesAjokuj3LQ",
  "key45": "411Npsi5U23aZf1H6xF3QPJicGPPZPpd6Ynyn2mTT3H4fnC1MGSidrseRDoPRWNRGaN62uDMAVbGPMmWqSUj7z3T",
  "key46": "42qi4QvT1DHkpjnkqameHs9LViRr1LufXndioMzSuxHCiBZoCXkum4VbrrgucdrrVdrAxWzeaF13ZGreLEU1FssW"
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
