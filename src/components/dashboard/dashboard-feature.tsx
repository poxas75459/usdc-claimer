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
    "5joCKhGXTH88v4tDGCsKbTLQqsSG8XkJfj94JsQFuda2BcMzHaG2NmscuSLbDeVXJKVc8WFnUTz8JtFp1K7joNd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FnSqfdbnUfpLK9g22acxwkHjU8sEEcP8mRwhmtFMEc1PCPx1rndi7vb9mnQQtjyxFhQX2RK4SGreHMtVjJLYmtw",
  "key1": "4UVF1f8fDN3QEFvwNKh25gvqfE2ABU3WbbtEjhqeJNFdLbPyXE52H8N2e82TA75p7sF53ccu6v5bDgZLDBtLi4Bn",
  "key2": "4hCL8zY4eSwwvNibYVABHBjbhAdL65ZxqCzwjAADh6ptEAK7DZKzqv2kuPaAFtFF4XYSuBA3MarVNcLkUXWV9CPh",
  "key3": "642eL35gjoYAxuz1Fhirko1gnAUknoM68r27XJK7TgVBJTAnTiAdL9TCYQZjz1dLT2EEBmcMny6Q1apzwddKhpy8",
  "key4": "5wquDYXrvaakRsQZtvTLw92CT1AwLaAmFzEi2oyJrbbiTPgj5JdT514THrFYVhEotaXBZ9jXUZYfgcVNGJk1MbgF",
  "key5": "3PupaeJnHRP1XdLL5JNTgH8uB6t4SaiZfGrWCa6m7YM3NabBmXAe1djECYYLeCLCekWGib3HUU3XCfwoUucMVtbB",
  "key6": "HWAjuhJXa6HuxxAJ5auf19NgoaBNYjQDcnptHTNWU5s9hu1q3VeptjWSXrouwzVyERg6ZUsYUBw25hUZFuKS6Qk",
  "key7": "2bykDnaAdP93FsGxMpL6iWgUmFMBVSdpdqqEgaryZZHzut5WhvvMLg8XbaStDJK1KM2GKhtTiQuWkxaH8WR2BcWs",
  "key8": "3NxrrSSm9Yqe8sKFvQHWw92VP24N4V2oh1EXAWaqhcHbQ3TAvpK2XWQboGyrfRW46wG4J74ZSrsRMkDhvK3x6Msj",
  "key9": "4BctBZSeFTgBFLXEtVNML6FrvYivbrsSL3eqJdngaqhr48teR5Pvae3gzUxPqZcYkspn6ocGy48v8p77enznph1w",
  "key10": "i5sL3KpbM3dqjWr3d8fR85ehFnrzuKeF2WnyK5EQWGui1UePYExco9DM8ZByVCHZsgYbTzjjrLnXyBCTj5MBqwn",
  "key11": "2xXWrjUK6EPCZa7z5c6Gjd3Sivr31SnqKA2pjuBHh6sH5vvFYEXsy9JFi2wbK4EyVHeRHYECmRsmrFicoXw3bEZG",
  "key12": "3R1Buojax1Ba7s2ZzUmQfTDVedDV5ggSSu7ULYvwV9WaDTaSFSPFwcWAzZPj5JxDjuxb7smaZr5UFwCtj5ZxCSJd",
  "key13": "5JRQZ2GV95WjHTXY55jaXfAmobeMKyeEj4uDy9tNXUVe3uSmZ6ANo7uqqWeYcTGCoRUnroR2DzofGkKECxksiyL4",
  "key14": "3bHezjrPXdHdAYF16HGJAAxnCd2s6CtvEBMRRxzCBDfKyxLjwGgUs8yzAsunkh8873wqWwzovnHBgoaQ5pzn4sFJ",
  "key15": "pq57F4rKKq2yv6cpB2zb1jaw6MHBo9ZGcAdDGAa8qNowrsrRjbVbZGZLyV8ckauu8BGsHyY3XvEMbp1okWKYkMs",
  "key16": "4uMAYm996x7qMMHGNiERVCB9Ds5oYBjzskQk9GXnWSM16GNs8uwgV5ukh4HTsJSvDxC1tfRrBt3Y3Y6FapbnQvvL",
  "key17": "5pL7EqeegC6Jgm36vDG3gywvf7MoRfKZaBoWGBe44UzAJXDaox51BR1nBx7ojQTgy7UqBFeBqRjmUpbd8U5PsBdV",
  "key18": "3iDJtSdg9xUuQQxjAAHfSjG3wgJFHJa3HXtA24Sh6rrbaJaKL6oQy1nZSAFY2wFA92pGzzEU8QLD14VhLYZNQPF1",
  "key19": "2wz2m9gbgvDTSUgvbJVDprEuzwJ99JXFkXoJoHcGADghG3wCC6nBMHhmpQukkVL5wA7QDH8XSWH2xfVAnPbtFpP",
  "key20": "3dnGtG2mtwvcrsi4yWhiYKjehkF2YaevTmxum5tjCNrbjAreA3Q9gvrCExiut7jR2HrHR3Z4SxFmatku5M81h3uU",
  "key21": "ah9viDj3UsieSBnpXsuurqKLGdcoPZb8Gvkut9LVLBpwqHCmbUxd2XWZ3m1gH6ModUk5WqmkMzX8992ZvxTMVQ1",
  "key22": "Jbh4Wc84Z3v3YSnpRSTrudtCqzESUJeUY9neYth7JaPE9xrBTsmbQjbLxcytbanqvf6WpCC6WrJFGaXX9hq6qSo",
  "key23": "DQfoG61RfkLFGcpVBZb4kyCp9VKghU4bmjzFKXNuvmzYaHot3sXkiMZu8vFKFtAjp122pCvAPCoszkppUJhfa1w",
  "key24": "3VZrMntTUH4TmSrRTjdiCMGESRu2rGxisuXwFz8fpLaTCumJ7fN2yoQem1G89JCCtt1LBfZP3oHGRcJo8sJPn3CL",
  "key25": "4A1hMnbTPYgiodNYwE7QPDzdAmz5B8cwfgJt4gHsHUtjJofQ857scpKv58WJx7afPoTuUw4idenTgB5UsCaLCfgx",
  "key26": "4i3Eq4emxc2s57UAGEvac6xBqgjsavvRFyurrNMidVoWSj9tw5UjTwJ39JUxqZo3xA9hPGkFU1JpiHps2qcsXq9B",
  "key27": "5cEtbzjv71y5BVfTwEMRe4Bj4jywM5jUZL7imT1M5iRM4mqgnrxu25MDpTsvN1dbEDSeFUVL9SsbLyJR8HHhdPCy",
  "key28": "2DQMrzienxaYbAoEiN5gtRTPVaSuFEaNUWiFft89PMm7RPD3oAcyDvpiNLAMSBMkX2QcjHrdztZmfoSZHN4NBFFu",
  "key29": "5MjW6phKr9cP313wRx7V1nbJsZ19zg7odbGtTfN2KBKz1WFN9DrCryaTKFKm2hqjybFXssWHcRuUeBVbp4QHKbmJ",
  "key30": "zYGLYioueoZrSKT4i7t7crLgg5oYLj2y33oQhnYqXo53tb7Mbqi8eHH76oeAsi3AH5DFqh7TJ1mqQNeGP9wJ6Th",
  "key31": "33Nd1KHRTfZtcTc9bxb4Mnph36aYzDwTj1fvTzb5VSFPgsNq52bNe17ACWBF5ydGCpCGBq3hfnBL8eSSnT28rqvh"
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
