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
    "51N3eEEsSYWhFEMbqnWFKvHx6tjRQz8UC59CFMMsdQ8zEUdj9iQ6qxfZHU27WTMXR38WrhYNwpk331ReMA4eztq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KvSrQV11Z9ZwiV3QjTpotuKuwaUttLMbKBRhsJEbtCJwGayjsBKhFWpVn3f9amyhXBhLyPeNJa1tBXXyhxdSUvE",
  "key1": "4NgoXduQmWMLUtLSDTG5oivZN1REw1CKPS6e96kccUz4tH1tRWnALwkeg4VKWpdKY8sUJMQui8oBxyEnoChZBh4g",
  "key2": "5gyg3KrogsjY6ZofXYsz4s6yo9yU3Ux92QjcK8qhwuLkxyrHH9FvQh48ePPM2Uv4dssCtw9EmHPXMv1VLg5jMqu9",
  "key3": "3BdHqVemm7fTdo6xTJiCBLkiSVYXsneLLjKkMBwWib3KQsnbMrN5t7dFTtHTcpZCbSpkYb4uJRLwnna8uFB7xxJc",
  "key4": "27A9LovkwBNVr7H3BLz4bD35UDEKzL4jjSHXysCbidScAtfDUokbyN92Tft5uRU1sbVAnHbRFUPHtmJwKGwULC6q",
  "key5": "4vZuQVydynzwBD9kapYRCN55jHyuEkvY1NU2DJQjHr6h3dRPCEtwiWAMMszAN9j8WGCiL7Y2H8C1XXueTq8KRvZH",
  "key6": "oXGC5gS5gQBhqVqmFoTDUmjM2p2VB3wJuw5j2nEhbDXzQgMPqFMS7kvfbAXkjNY13XZxs1EUcd9kfYscdcKeSoG",
  "key7": "3jRx3wjXMWzeU4g3WhUQMgQCXyGJ8a2K6uWxKH2ns5pawrW19f2csG2z7B4pV5gjoRReHSbesB2h5Z8KHG7d16t4",
  "key8": "gfHTnxasNfhz2jrtpgdLjRcafeAA37qAFnvWTTwNxg6FRGfrrFmeunDaEaJBCFX75adh8HdqsLT2kSQq2J37Xaa",
  "key9": "5kKeASr84irhg7CCyCVTa3wDQb9AkvesS5nemYQfEGRx43TW3R7kbXbp4jtB7pFJYT59omj1vXmrcaRBaHpSmya6",
  "key10": "3Z5c5eftYb7M2uitygqBCwiKodAA5txV39ysCFhc4JcY34T9qDvHCXMGvsyEWuXT8MS34CY2Q5c3Q2bz6uMJBtDc",
  "key11": "dNzDkhoGmH9d5uC3CrPrwSCcvP9gENC5oydiBHA2MWW4VDfzfpFRV1nrtscR8UwJp62KkgAEB6a1t8wvATgjUhf",
  "key12": "66qZobjssfpGfv7C4DpuzWLs5goCDttiXFcWRXZu8UNwqn8Rd6MC9n2XT8U9rvVisX1NCfqZTyvaJCnBHu51u3bm",
  "key13": "4xyWhBrfzMqPy1nT4K4PY7wteX3bYDczaPYNafWBGS5o5uci5A1YQSWQdeQMiaxcbBq7cKDGGFBFQhGL7EZkUkZY",
  "key14": "4aHwadYeqKUqsA5NxtBWLAqKdGJNu3F4EBfV6VvHjui7zCVXKwx3zF6KhxLucuidMRkw9d7UaVpDgmMbcitiyGWo",
  "key15": "5EDdf5nvCAam713DgSFKCzx3i81eE2PoZD9gUsLSGpTqTQqTYFVmqxmmv5azKpGYZdHNJo4avaiNmPeuQrLo6ScK",
  "key16": "3YZ2v6fmJcqH6gdstJbjqSRbjn3ZQg3h1Ea6oizckMVa8nmT4fumHLwc1QdHUYCsGCYaheWrJD2hbcfyWEXiJXYW",
  "key17": "3gzYqnV6Cxm6LGUk88XdEyRYb4T1qsSqypc8R7UZNYpvTkQWLQN5ADCF6PnC6Q3qyyo81nC3PK4wU5Vrqrwrucyy",
  "key18": "3dVXXEtoRzstfbLhnNPHw8U2ADKzLiDSRGTVUrPeTY5rb3fbjAhUeLwCVVCj6fkTe2omiCiuJgWWSmiFnSJnoxNE",
  "key19": "5Kg2vvq964RHNGhVcdoCMfGCzcskGxui2YsxmKheZ84FSKTGAb5bauw76SUNUtpBwNbz9ZVkjTwzEYRTPibhB2AD",
  "key20": "2S1Vt6kPxVQZ7qVzH91yNGoJKapMwsbZLabmvNRfgmGdWM4m8fbRrViLTdWMkVKFrPSBa6z7ahQXaRvXiBTsuiCM",
  "key21": "5e7aQcQZZ3Agye8hMcd6HVqiDVqutC6ZtxPzit8rUdLeczvyCpjJNqvu2WBp1Hw2319SaEHz1YgVPyLkJ7bosWdm",
  "key22": "44BQfPkz18RDJA2GHtTrzRYua26z1SXsvTeVfveB54wPaphWmMaQ22PtB3Gt24X5yPSHSkXBf6r23gntfNB8Cybo",
  "key23": "4PNYAxKXt1eu2dYuDbjNtuDBqsY26WE93E5KJcDvZn7TFwjNftt8UPpyHpnp6ACRzaZQVxRR7NpGvyQWYiiUnpNj",
  "key24": "3NSrJNwoDiebXC28D4X74mJqfszCfnBw3bPNpqoyjkJ9fCmLegcjvywX3ApyyXQrh6RBy3gUTJPnu7817JPYaTt7",
  "key25": "5ZHjBmQxrASEbacxkGHoTK54hQUtAq2h61W39orzzYbKZKxpZSngBQyVD4X7xKpznFMczmt9ajMT3EuMkb1p1wHK",
  "key26": "5zkM5WZBA2c2qVjdJaSypK2bno2frSVaTeX9dNvMYauYZ1MAVeF2KYa3uX4AzAbQ2fNZ7mZiBgWJ9pZ4b3HAXRm3",
  "key27": "3Y2ivWcV8rdvyJRe78LTSJZNHjCpUVF2SuUHHVwawshW79zEmP8KSiu22arA2CSngkTh5SLCNZKCV1xEFyEHVprq",
  "key28": "23JkLfxTB151CCuWXvUQFHZ5ASjoVtnTLzFx48ufK5L7M5VJYnEmbKpMmxyyW83aTv9qDpav1KnmQB9EJryiVs78",
  "key29": "4mj8ZPQytLyfTXXft2nytWBsysiukvQciWDcyA41cvQjk6mrECu5Vg6AZCQBn6X6oEtmonRGoPtEXiEH9B9GbMVE",
  "key30": "2DHcDbdY2fqVEycmehuR2QDxCQUqNXzzBc6hW9ggeeeWUAKjzn3MRhV8pBTFRTEBynrAuwFtLdpMgRrYTTmND4T5",
  "key31": "5sf7Jm1CdJg7Zyn6BsRmYC3ZJNJ4L7qEsgC4Mkd5uPWkGf56fa6CDp7qoz157jfoHhzbkXNZS1bUHFMFcxJu5tDx",
  "key32": "4EigD5Esw4VtfNsuACdQFH7dwRMsGZs6BdoZVDSzoMMKbTkSzPzbjfroqa3VwpiZ3AX4LEreBNu7tC4UUWMG1v6M",
  "key33": "2R7SySR1LWnmoMjhBR6dMth3tp4peaE2P6GnNskSPWVzvMTToE3wLGTVimAW5Tn3Qs9SUeBQEEnoEdBxth5gx7bg",
  "key34": "3N9jMp32hHZu5qCn5jpN152daEQBcmakDFfmgx5RaXCZ6CVA2xoKWETKdaxoMYqnG5rhNMphDtFhLRuQ4n4Xq2SP",
  "key35": "5Sv3vTSMzyFpw3BXA9K963dpxCEebcP4p6DyV7exh63wzBPQDiijsCc3B4fWNTdoiJ4R929oYe36m1eNMXmySr1a",
  "key36": "4nF2cThWmyu3hkX87B7YjD8mWpTHrTeiQ4hWWc7sQ184wej7o5URW3mpJDiT4boLfujpbZQZCCBD3rqCnrQ3VtBM",
  "key37": "5C9S8waSBQVzUsHjg9RwSvjuHYtsACMpynrm18RoNTpj2jp3dcdqYNZwjdL7ieuDC6rGLtbTaDESCSWBk9w25CCB",
  "key38": "3qfuB384UYZ4izGQ6fhKfFdnrbL8upRcQLnp9koyzYxCEsMMv4haMN9bmwtynbuJqogos9D2xPd2kR59rnFc7HCQ",
  "key39": "3QEjre1xfmmprwdSXsnYcgNRRBg6FTPTaC5Nkzvc18w6vZLido9XW922JoPE8J3nmrtV1TmarfjZFBaB8N5ctu95",
  "key40": "5cSDDWjitn2S2FULtrbAUN9aic8WUKC1o1usxjBNWFkmPncEEnsVdFzg8t3DThnHAq5WJamPmxEbkHwSkt7cqbK8",
  "key41": "6aoWX18giFioDDfp3EjepoAe5K8d51GLUzWmhtnatUNgJKBz3PCq8iNwKoDdbVFPcLT9ZTSfSDs1aeZLwjqW4L1",
  "key42": "2q1YJRyjUmabpS972szDiC6uhd3x1tKTssMY6NuHfgdswBgQx51dfVNSByXGf2u6rLGEJtu2VXdeYZ9T7RWg2iUK",
  "key43": "NdJSrLtMeDSFGEWDKfjw7HaiN2LymuoPLmt36EaJ74SuATpcqtgELZh88YCimvLnAwk5sL3soxB72r5ahRLZadD",
  "key44": "cHzvxHckj5VfbUFqFpeR3SNdbfw3MvZP9gAfGDabZoiUjSjAQbLdNvfxVz27q8K8L858LJ9Vgvcsbc9dZwZ2rPa",
  "key45": "32rpTn2D7qE3GvPS6o9BeRND73hqPTbfQrvbNnh8wfVk8BStvqt7T5tqeBujuyX9pQ79Zyfx4ZSkn6Kyy4my9teA",
  "key46": "5spwoLSbAw19zc7MSgv3DWYGjyLngtpZV32KCYxMXWZYpTEt8xPspJL6rKnbTZRuJtuJryQqVJRQdn88eCX4XUs7",
  "key47": "5ucNeP7i6UMdznP4foL7kkvJd4TXGswC89L4d6XZVWhpozk1J9ebRTKnJjwt59nVkrzp5EZTwbpx3fcnnPn3an5m",
  "key48": "2HgJ6pgBDeqpuxoGyT1Atw4LmBFjjMch1mVn6mSP16TH9oyC2qKuT3gpMA5U6scKUudeGFvBnDNky7jvWCroSduc",
  "key49": "2SHXqznV7B2s3EMjDbTM937F8h9XLtbQn4qtw21HG5SbXDvFxpMqqqoCXRZVHa1LEpG8W97ygBU8etyAftzsPARc"
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
