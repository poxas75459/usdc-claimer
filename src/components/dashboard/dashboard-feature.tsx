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
    "2mZAMNDFYSnWoJ9SXCNbPRrbfLjcDGRBqP9dTY9WTpjBp7noL7qVk337uWek8a2sWxWKKEgrb7KhP5CqZ8pzKoGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jw8ZgwG882vK2jyHQ59jNiDZw4eswMAjxQArMrXFsMgYjqgYLZpcD58CtUCPoL5nmb4p8mMNtiwLP7vcnmT9iPo",
  "key1": "4Z3stDCDK4EeptPnd5EYn9uxRF6FNrh56J9JdFWeKK9US1pmdqTuxr7n3rcaUtT6ywmucdqADixgQ4DaK4Qmq6Qx",
  "key2": "3MYc2ggqCFdJBzHEHhfa5z9KRDuUR4NKSHmmwsoJ3AcBqGhtDbYJofqYvSXz8KbCvcU21FcM3CHppfqGYaF4uqgk",
  "key3": "3MnSQBb5qsF1iVFBE7shmMV9wvXpiaD74YFoHikiuBzKLXnMmi3Hh85o5erXc7QKcTdbntjPtPhsG19DZcrWygdA",
  "key4": "3z8nbJcQanVDc3AnKqHXChaVutjLGA1f79kB1xMg5EjfRRHDcwx8qk8h91X3kkLay6T5SfuJ13C9fhubMbzcSbQW",
  "key5": "3zVv14J2euF2qSU1VFdxV1tufvjav4HHjrrHzeG2LHLcMDy7Xwx4zYTXB2eP2FQWT5NxsWojBkGKnfFfB23a5YtS",
  "key6": "ZE1zQoFrbj8ZDT2vbTccpZkg1anQ1zS11HQYB9fb4gvYg88chSx96Cx8xzZqXd2hr5Fen2dNDsKU3kNmwK2xyZt",
  "key7": "3pgE8M91u9zkbX9RkrZuW5KP93ui8hj2midBuzFKva946EbueqFzkJKpz3iNd56UsjqzY7xJFkz7YtbVvMigwkym",
  "key8": "4g4ix8Vn1G85B234TQDVQyEncG87rMxLcta5ojTXAnzcvfpTAcyrkNXR5V6MrQVZ8Eiq9RKkooAPKjU7Nyqax9Jn",
  "key9": "3p2hVn64Q7BAKDqZpBAUb7kNJ4yRTvZdTNK6G4TL47cF3W9znkEYSTxpdGC529gk4iCEnksrJKfoLkFoU33UCJh3",
  "key10": "2upYU3EbVD2341oDHX5Eq8pGAPyNKUVihkNaLq3Qi9fuzL8Pwdv3gT18uyyED4WF8W1mS2DQf9YQbLc1nXyELCoY",
  "key11": "28EULNDWJFGbtcP7NbnxGvLrxssaGC7JVroypcK6JudHhpwsi4QyNWUYodNGEFP4SN8MGNmjcb8KWCC5tvhzANLr",
  "key12": "4DK4Qd3hKjFBKV9FJFsDEQBKAxZLobuRJoHDfsoPsSP3bzgE9aE3CF5hPcEC4sMvFbSJinoy3EeojDEWniMQtpU5",
  "key13": "583DLp5hktBapRRFQ8nED6CNebQhtUgwrKaektMaPJR8maypDsScBggUoVSsWkRcNt3fHyCAU5UHcUUrndThXXvM",
  "key14": "4ymPM3hoARWgYoUaysaCBv3ZyrWC2GJF3wfNzVVtYNVCz4YppFVw6Z2mx9KkgtSyzshhsQ2SW271WroSSyjZrwXU",
  "key15": "d17K4ghjJQ3Bcq62fCLGWAApmSgxHjAYhRgLHyepJGmL4PL9RmdgYKDJEbydsrpDTfddJfL13ZmPJbvsG9cuEos",
  "key16": "4mRstLN1XMrSaxtzGaBC3NAa3s8ctHxjmatuV8HAUKS3mpRL4AHa5bXQ21viyU6RhhSfjNxppn2jFcq6VZNi2xTq",
  "key17": "2NcjKAC4qDgxXqXxA6yDaxFzgCk8PwMdpqcw2ZrXHYLjhMNRVz2wHAQFKHwwwCvvSoWjQEtmtYoTTBUM3vcMsXGe",
  "key18": "2ocF16B1DKXrm1coKoULvYwVHD1UaGYmFXJSEpKcJwHyTRdtUE6jpeckC2e5YPpGvc9xrufWKXaNjSS8egD6UJuu",
  "key19": "25ZHq2nb5F1qku4uQTACKKZvnCnd2LNbMWTY4LgNTFBDXD939yqrJ381T7b5HDXu2VEcEQgUzUB8coQ5XzZvFVwN",
  "key20": "4ksR5apc7r8Eb8BeDj6x6Y3fm4DWtf5zmYu2RA8Jfeq9y2MWeiagGYvFMHe3A4T9f5g8oZihxQVDThHWpxFMy7D2",
  "key21": "5NwDwX7ycYs67CC5dktKANdk2sp9DAXqm1hYjVEMyEFbH3aBiXo1fubytSM9eBDExx4dojqdYvs8XmZaUgiSMCbU",
  "key22": "2XD2ocLktV2aupk3ZJdJV4MeKgy6pfkrsxrqQtKMfEm4dc3ynBkyH5aDkDd927gohqgwurQNUoR6JFc1N91s8hZf",
  "key23": "3ZSWwnZsrzb6dqMuDCXQpBUYzrdxncY5s1qc6tDPqBEMbYHvWMikL4XrBTtBeXjRBfrDX8bjqzsStMFQvhVPbNAC",
  "key24": "4gseGcGY9q2NcJHqWwcgcEwkQPATmZz9LKg1QJLqnw5SdWpn3VjH5vDSphDdKMvEFbHpvmjYCCoSm1vqF7fmhNzo",
  "key25": "4feCfEPVjCQhRjczFDLM2ytkvPXFKWSN7KBaDfdm54oFuoTkLEASSBPtaob5diJWSun81WMBsVhYjygL2x7Ny7KU",
  "key26": "3eq9vdVTvpawhxYUcwBsbig1nDiL6sTkBDbgDK6QvNbH9tj8WqkESGd9WQwsVQAUn8cPe4EnuwVQWZL6tscrbNQG",
  "key27": "2wXnP3U1ragkxuM16FtRE9yPke4cAR1XWxSQnYxeipCCuerXKdGJA3aArVR47wFDKesLbCbTvfAy7w9LZBGXBivk",
  "key28": "2N7NpPU9yV2Erzy4bkiVZ6cWfZwuP63GepAwUfbekF4sZw1fb1czhmtajYwDSwj7jS9zPM4JSVWpG21M3DDKWd9T",
  "key29": "4RprCnnioEqDa35e6a5bYFKrLj7yGaPTny46u9zQCXbtqqHYkLEz5ayTJtLXgM8dqs2nhUVDWaRGa3ugz6BbWKus",
  "key30": "2cqTHehEHqdbGjRsYetrDmouFYoNZphY7xq1aj7qBjvozLiB2k8EewdhSuGsvidKHY5d7gVQXahGzBKK129GRSKT",
  "key31": "31m9Bq6my72k7KeCezv6okFETamB5bcTW1rg2yZbpYKmQ6kET9SV8kKvQJY35KjLCe5GYAA5d8d594tSgfRF3LZj",
  "key32": "4pAQMpnYrQizfaJBKqHSZYGDtrPyThq6d58RCFSjRSmKioL5t51jGwViMp9wxbkA81esqRiDAJxny1iUNuuXb4Kf",
  "key33": "3DP5DtVGws8F9Z1C1rf7obr4KR65qqWxBWsjhjYNR6De72YjzE865avDpi9V3JtJQsiMaRm8HJCB6HtZyMLNcyY",
  "key34": "3uYx79cQZKpUkUG4jWmndsq5X5GBAR4qBETy99ahaCTcptKk2HQ8nnCetWgsiZDe2RaZavRhkdMSHK6oaL1kFYgn",
  "key35": "3D9JfhVAcH82DjUSQmU3ouXRiR85ZQmpk81yX5Dr2X1YFHbQ7LPQbf9ZVW9ABfn5ZZGYBJfidyJEB5ZvBpSMN6R",
  "key36": "4c7WCbuRSJiLkyV633bD9MYbVkkULzhuf2GHEy2zPNtzapGtp3cHdbdrwQbZfRRE6yXVtoABCpouVxZ5u29RwANf",
  "key37": "31s3CTwVFjjqFP2tLqVaWh2r1LRULCbnoY967sooBF2f18qDf5k9WDbg1h57Djan6obBFkcVn9wDA5vMpXLbTHx2",
  "key38": "3UemTwmVb8DXpYzo1J38dkALdNDmhyTnipqzjZxvYg5ZnULvwvjSemiQDdpYjB1p3LFxLFoDZCfngJXafRy3JGdP",
  "key39": "2dVvWNKUKLwhurCRDC8q2eSdfudwi8Qc7eiRS4iDteVwatzMTnfTkW9ZemSyrn3Co8VDS13snkACpB2U715nN1cR",
  "key40": "2KXpzXhnf9HBm5o5hfpK9EksK47HfCPLP5fqnAiimW6vgJCpuHrt1Zj4vuGEfYtZ6NKUPeyEoE3cLGnpoyS9d7eD",
  "key41": "2oL8c2A56CcayDNpVkD98XKUk4k1qRpSnWVY2w34KTtpS9G6sV1E7t2WLae8MNgtaTZgkMPCQ3DphqwwQpPgbH2W",
  "key42": "5ak4qm6Lq4Dr6HTMVu27HA6Nx1yqUehNHnVUEi6DPzbuPwzCWW7RE3RWVfAfDUQAvMjuRTrGsZyBxusp8mfLBWfw",
  "key43": "wDeprqvLVVruVEJLwgjgMqJhE4wGnyN4bHz2MxrkzNgSHrXTSqkmJVmygXEo4L9nJYyv7MRzSKPLFt3Qmkg5stH",
  "key44": "3wWuLaiUiHgNiaeAuf5vtg6RjqeQAUsfUtjJJvWB4ykCTaQvzDY89r84pXqBH782YPys3JSQrgaD6pHrMnprb33A",
  "key45": "5X4NN8sjf3opcjgyJJziTEfN2u62MTfrUCLM773Xcv4LBnoXcn2oDx2einknEKU8kb1QTN2VVzNqspYLRx4LW7D1",
  "key46": "5emv2YPQUdW4sE6UqPPCjHkJPECjPUm1ZM8zdbo8APdNGaavAUK4RDcQGf1SS82dTiqFkKhJBB93RDYXbB9ppYxC",
  "key47": "5gJruRAxN9gufwQYD6GjWQU3zJ2wXtWgUCZiudJxPkXRz4wNTycePQ5AUoV6QY5eqMpXFRyD1obaKsojY3vCciER",
  "key48": "4jxF8K7rQhzATpRbdirUSd93mGPBV3pmbpNyTxZjJgxQwXSt3b1tPQuS7gtDG81MMkJZfnxkyD2RwTt6SrTykSUb",
  "key49": "2cDGZ84gGsLWGAUnP9F6Lj4KJrN21h1tAJDYsdFwQ4gTvpe816UaVXe1e48CbcN8FzUnNf35AXnAba9KQYnheBbt"
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
