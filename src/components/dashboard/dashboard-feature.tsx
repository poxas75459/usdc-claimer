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
    "4sgpPaATfqNGB3HCuCzwvauF1xNHb34bo7PaS4ddwn7UuhoepiuSv4JQkVWHAHWJErP6pXePSqZn63zBuWyHJcXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vdLwnrBorsAgxZbNostcLotqKSosKWUJiV4mESyBo8wF6qNt4FYYBfpwdTV7fSuazWzWCfVFTE5DZwh6bxWhhtr",
  "key1": "2e6ntcyYj4si6eM1dPbYchusVeHjsHbkf82tKpxp2KEv46QxgsMebj7DHwWSZZ3WMXGTSc2f3XgH9Qpb4KjYkdX",
  "key2": "3YT7M2UGiyoh71eBFYWi2mY85s9DenYHdXmdK5tpb26PVUpgvqKCUdS7517ETE9KgSLs9CW4KiiT3ZZpMSYRQyhq",
  "key3": "35Ejka3J8RzYdqJuWTSZujEfBfr3PFBWf49WR6ahJVp1joAQD3KNhkAk7MuFpXaxPaoJPmfuGj5CuRnWGMr3SZKj",
  "key4": "4h5wBQ1hyDhPnzM9rgkpA9udj2Lu4j7CzRRgj3UHra2areZgzzQ4a5BmbNmNmJRMczjabLKjLV87wfPkQFt4yBSP",
  "key5": "4BQxJ2PXUp1ULBjBGqXimCmLANS3WwxVT2VKfcZJ49dPdMLFnnYPpSaihhALSQeN6zjJ8g5QxHELq4ZqpH3j8c3T",
  "key6": "2rhYR3mRC6CravMDAbBm5p8pyMt1JhCMUKM2SCncmhh6k3cJ8nhzKpBRutud47ptCwaBMpAwGp2wnL4A2Tqscx2w",
  "key7": "9CHTL3sQnS2YDNbor66pVYn2eu4h67pvBLyJcd5jrfuicprUf83xK2AqHXDL2J2jLpLTPut4BxE4bYmR1HrB69d",
  "key8": "5fFHdkpF8Teq28ZQTwyu4nmB8SfxqPGdYrz2xQtbBu95FNA7vhgXa2DyiLLkQzKDHPoUv26tLfo2M33nGKKFkwwW",
  "key9": "631mbtEM7KeP9fa4H8MnSnWgj5sRsuQtwGCTYKeQGibsN2r6BRQYT28icfi2EVnPK4J7tC2LhGBBsZdSJpMGe9CQ",
  "key10": "2HCz1bD9TDfCAkTnViQkKVzZmm4wB8N2ZuKqNjNqYEFtzwvFX74aKipq7u5uWEuxkr89GShh5U7ABks4qyuSb9eP",
  "key11": "46mJwLyrRqVPv6LY5wcJWNyATLLomGMNyXrnyU5yZAouD4a8Tg2fYzNXXtADRDkALyWqF9SWnsmcBmhm1rHhwxSt",
  "key12": "2whPbi4HdJWy5q5XQdGqbp5y5N69JQbLnozmseEygAdHJruxcYyPE1rRE2CUtfmdMVT1ipR8wycWzdB261Y9s5vb",
  "key13": "2eS2r2JsRHtn96qr8VjSzBLL3P6vBkxSUciGhFT5bStr9htz4RQcGe1N1jn5YBCrtZzG7fPCYnDKb5pcpmD76xiX",
  "key14": "5WYjZt4kfygi86mnxn3Cev1dUmbEK8PTaMPJtwxLVgT7PnPg56nXk8G25GHzERF5zzes2Qfq96ZE8xzBbLYwBMfj",
  "key15": "43aBVfutHHoGCu4gtkssmgaen6GPk3ZVuLi3BS5ZqothcKP1nefd1c8dGwgvMd8ddRYJAFD8hfVE83fbdQ9JcC4Q",
  "key16": "2ApugE4sLiG8DUEVZJsTXwR5o7785mMyAGy7wV8ee8AXRLQbKzJX9YN7ZFmDfN8fuUcrcoUNoJ9uyXcEUBypjh2H",
  "key17": "4CmsWns6HSjbjNv67XXCzrTfcWj8fnDcDgTf1V9CsgdR1ZiQhX9octm7eA65Vo3fLgpJoLoDDDJhSHc8qSSFSxJP",
  "key18": "26TztVvhJfbRfvMFxPsE4Q6fs883yJHmJcAwuQ9U7tdHJLPwEdM3ufkAdwh77wB1ViWjRuyRF8ni7VcXYgadTtDg",
  "key19": "EdFiHT1NzzuBp6vx2eZqGg3tARGrPwYUpMvcFb1CBK6BeKNJ8dFTw6AVKDmTzBM1d8iM4jSmXp85q81LUEPusFe",
  "key20": "5bc5ShDUKGDnAbfUiXBzhCu4ywA7ugURmgUkmnCVsLGqWyJ8gxUkjyEnYi61X54o5MucGrkjcGdDdnovaUwTP8TB",
  "key21": "55ByGh4u5zz5ocfzuZk2Z3LHxusZWLUNk2fMyAdoxcRa4Bu2qjMyeUMzGKVwEfiXmhstfXeVDyNz3rAASqypkrwj",
  "key22": "2RAF36Z453Wrw8WFivH12vzcsNjzHKH3jDQTLavLidy5z5N739vMGyNE5Hyyv618KBoYXujZUR4WyKJ8foRsTVVh",
  "key23": "PMJLZdRE5DSHq49prBdXd5fdjuawCpTBTwBf19cPmzzPAjBp6V2SMKfDLDQcpRAfiTS29MR9LBDanhhSvinK5dy",
  "key24": "4wptGavHfToZCkRJ4WwnVButt9hNixj4kZj42P3xkDQs1myFqGKpEpGqr3s38Ke55pvyZjzV63deRUjnLuK9PTUp",
  "key25": "5HxZCu4ZHLMYVZgQeAGs4kASTw5N7HkJ4nqf5nnLpiVo6diTfyKf48uSiZ72y8d7MzBfuE3699FamcsYAYFFuf6W",
  "key26": "esJtp4pjFH7Q4EkaDkTKrZy1Ym1Pb9BnhexTz4XWfi3mE1qTdV4aG4mu1P1rHKboDa8NbkSgXkMPJVhoRzFX3ap",
  "key27": "5wa3M5KvAY7sr4Teb2ATpeyPW1nAQRmQM81wJd97Hb5BmnGw7koPgJJak6tiB7nduFprub8edwruhgMc1ZkqoUU2",
  "key28": "3jzDyiAvetd3GQLSg15ao69pLKsayj8bMogxRpXYNjcgQgUyftNhvH9LrMo76SYgn8YYSFdYE2b2JhRHTF5H4RqR",
  "key29": "5gX2y6mKit8pLZtS2CCCsjx3UcRr1po4WZDsUTRSzHHxfxExVChX4q1vw7Zpwd5ozjG3qaeRFjnvCm7K8hcsZKRb",
  "key30": "2hP2J1eBysUELasyEB8yKJBDvx7PP7YTKw92MA2HFqzmTM94Di3bTSBbNsoFe4AENqFHYGNdEftnYmaVpdY98xPi",
  "key31": "jL5sy2NPKHzaW7aUDvr7ZxH8DckJbPnrYpm1Y2pq9HUq6YWfuiuzFs2e8xu3Cb1k34uVyz4eKSJe29ZqPru9L8R",
  "key32": "4BzncHjRGhyE6tcEiiuC7StnfP9EBsLhHzLaiiP5emEwjXdu9U8aJWuDC8G2aPFPXv7Tyha6bCuro9sNHS1fnSmu",
  "key33": "5DpcH6TZ7YbZRpiE1MfKgL68ADmG2UEHaMY1f1RDaK7WusoAn7SAve62AwEuCBqcUc2vzsWvQ3WqpUBWBxHE3bzs",
  "key34": "37FFZqcJRjrhDXrmr5iMQiCyum4QVPhxezNFCE6uNcixfdac2kngpZQu8xNFfTZZq86sYW6rxW13m4F8NXK5p5qx",
  "key35": "2Jq9wKht8QBLtATKQ56M4PJWWdt3sfFDLA8hSU4GKtM4yeEfD36JQxVtQa9TUpGgiKPGTp6kVEj1Tj3NNwq7ae63",
  "key36": "55iCapSPou6wCQRpicig7wewVuGA4C6ipsy4pnGN8djcidUix4gZiv1fdzHfrdq9YRQXwTGMzoEtGqaB8uDQHiPR",
  "key37": "5mdvUG4WfUJH4MaAbF3JomauQedptmrS8Qp5ioPVZkZhSaFsfKwUcJuN8b5mwRQd4LpJJ9nJqYYDuGV1qiAyLSsv",
  "key38": "5CXfYLH2wAMuomNrS4cPYuTddyUstbZjRjxzd1Uo5m5MvmA9DWQ1mEDkhU6TUMTm932dqu5r7r6Lyg984bEb5M7b",
  "key39": "53tjeLXJRjd82QWUQi6JGm1GjJTFKszLjJ8igyu9BJe6dPMDxwZqX31JHBZ6ujvaXh1DdrYTmuNmabef7FX4ym9e",
  "key40": "4inoKZt3bu26bPis8SJYnLkZZ5vVXzrP1ediyendpk7LVeDSpyvNie2b2iqPTiJCbx8oAosfBWFXg4echN6KsThw",
  "key41": "4EjFrU8c1gxrSGKsoRzSKL1jhFMmY2cSabiFBCx4WaHdjXCSDihbFHw1L7gXjmH6cEiTgZGkwxrHki87Abt353nZ",
  "key42": "eKjekGKuLgDDX3sMwtq1n3Hfd4p2gMojFsBnVgK9wBnqkUpzvJQeoHE4XFxQ4cgC54vhXhskDkfq5wYXypirYvz",
  "key43": "5ErmhjgGyPeZCgAH1euUv51KcQ1B3Xm1MierVNfCEZiREXDh8dUhHvAABVbBvKqsnmpvRMuw3tw5XxrvBZvTLPuG",
  "key44": "5q99DQGryzVJZHa2LjSXziiPNipgD5x2EkR8kBtBMDZuGYDZyCcooUMq4a7HvR24jLj7EUUoEh63id3NDLVPJGSP",
  "key45": "gFxNRwTfWSEp2LT7UgCkho63FiSZ2Qf7sraG3BsRD4WN9KtPyMs6zvuJb25Hnd4PwMTRqpLCq6ERcpYLR3W4eow",
  "key46": "29u1BYaoQScuw3jUTgViZDxnUkHjkFn5f5SicewFh3pHo82JLfJLynjpLUVVDAPCAiRKJynmLUD4i31NX99F75jw",
  "key47": "4Zfj3hVQL5MdQauVprMFqJzj2vwzrapWvESSssqFDJJzFufF7CztP8PsPnFbLfpSU7UF4BZ5ustERyXemb6tEy8F"
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
