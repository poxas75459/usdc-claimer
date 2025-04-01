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
    "5pe8BSCZ1Vd1BdzRn7zM5WoXKGdPri9bRwNmLVuBCMzayEuC3MXuyYwsfe4ySenw7H98NGmm2Pprp6DkxngsTkn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nheC3sxa3jAJrBqiMsrgDMzbXNMnK3E898Gx9DEoqtL6K8DnPTZTtQFQk5hwd1cEesntw391KUKy9gvb78iiaS6",
  "key1": "L1r7wAQXPgb4s7p4RZzPKGZR646XuRPvAhZcMEGt3H3F9NZH3niD6ZHLDZdfeRbBFLDHPtKHa1mVML1Na3ZTWFE",
  "key2": "QtMQ2rm96Tm8vkqghyVdxUyjBW6bgg4CyZpKQGSQLyQ2wVYKY3nen4AwQowsYxXboVQbKMWJhtFLNjLKZPVb4uH",
  "key3": "5rRRpQ6bj4kmac5VAgYZUtwiCMGCEMMB3hkA7oqorVmx5doDtunyXHevXkWR1uaG4QXDd5AfkKYniAi2Da9Cfgqx",
  "key4": "684awf35TCpa1CRZ5BAwUjNhwC4aFgKBtHRXLW9ogN8BYTNPpXuWRmJJ8zj9gs4aVaaS5vifJNpaNyw3D1459wx",
  "key5": "62msgoYXFBSBKC5TzKczVnVvpMR6Eb6XCYWCxs35T8zHhRsir8i7dU9V8f8GjD4pCMCGpzkmcKczV73D7gyoBP2P",
  "key6": "4auDYXzBG5FpLvbA4jRYzHbCBNa1fNwYHMDxt1xjmKrkmfESh2ULsu7RCZ6eCv6hw9jFACCxSPSrUxhrcsbNPVgS",
  "key7": "4nypwqk7jQvZPQQZdQsF9d9A31cZ4gfSTzSNXc9aP1qzzVj9hTMqmoC5HZp49QfLjGg69TNz4tR8wxUHx3c8Cjn6",
  "key8": "3fJ4UC6XnSbSfu5RWJSQgNphfXa2fFstdCHJfhcEkSPXRa68TRrVE8N8HReoq2fywypBzJNtw7X9McMNm7yiBPK9",
  "key9": "2sfYRBdgJsiyszcqjnRkrmWar3AQrY9oBHVCZGxk2uSwiAi6kNbN3YGK6YCBYUYZHJ2K912hDd8oPsJ25BeC7Egf",
  "key10": "3Cyk3JE8BRgTFofSTPTWXvusukkJZ7vbAaBJjoTJEe475rfSWzRUo7jC5JXAAgjiWkjvigVn8a2Rm9Ec1Cza6vk7",
  "key11": "5eWmmD7pz9H53fQFEwiygC1i4et61K6vcxERWo4crxdxDvbrsEdjyFC6S5GTNmSVw38rGUHS6a78Fqix8ifNLTr5",
  "key12": "28G4N1CSsXJcjwcWiLfe2wbWXXtv5iCAGBxTbUiFLooyignGqBwXbGYN9rz84auiYYLnSWzb1PEpy7f9nESzCkHt",
  "key13": "QS7jr2C6Xk4umevvQoyQ9mud7FAHmB4aWniABX2reC7GBXdiWechCDtAXGTQMnCa5bmq1RGiffop745nTBbbCn7",
  "key14": "5M12YTUATBgNB5NfPaDydo3hhrbVBMphkxcZannocvpqiKha3nAvxvwUqWfHmxdFMowCTVgoah5hq7cS7jctD2uV",
  "key15": "3yYKMtZqA1nvpYXfB6WXXJdadhTkL5pWnoaoeCM1DhP2Wnceduow2Lsp5g9SUQ5t8RZG9eWS7RRRMBHmckmBoybo",
  "key16": "2VjfDkewBqK3ATUudFH9EXKBnMsK32UGKokFu3i6AdNfeBfuUBDtZhJGMja6LesJKpHqEZiRLQ6NChD52DQTguBY",
  "key17": "5RyCNR7REztoyJh7FqUf1Q9p7hGCTgrFxejyfhea4zQ3TS7CcSQNUyATu1NYR3kvQCS1Ytbc1po6sX7JFjV6rCZ8",
  "key18": "22n9phdYSGCERVZrHbwC8uNv9Y1hYet9u1exhLqDxpheo14Erx8rVXy2paP9aBTLY2dvn4DLu4YW5kVkiWQC8fa5",
  "key19": "4u2sPPtYz6JVxUC5iQfGDG9cbL94rsGH3brLSQqiRu8B8m1UprirTXdNd1RoXju3puKSnC8xASi2EuF97fDWP9G2",
  "key20": "5XGe8Vb2JspbcpvbgZu7zFz8pL4fZjgqPPPMSCSU1vjTyyWbqMZyQxxCsFfSn8pjK7d7cnGcp47Nxj9BxxWgrhUR",
  "key21": "39yHwSEYbdX6E3CXkhVWwkbUZN854eogN496kdivLYvwzTNtBAmtHZFoWjrkXDmssVpFcvek77rgrUZvtTrUWSNQ",
  "key22": "2LxHwmHAapcP7E18z3mNkPyxpd4z5nxtYdjcrSTANYw3AxJq7m9r2nhde3P99A5HS8zJg5Xvxn2e7uU1eCD7Efej",
  "key23": "2JWXiC4jASdDTVZjpLEjikjukkMqzA5Gd6BhXMMMTAYLq8Ya634SQYak1AkDaLpJCAQHmKPioxJxfsAe6gHyYaEh",
  "key24": "PVRmsPCm4HRLxqYSdMAKvRhaPgnovqQDbzLuQ7QPVqYxqarbZ7Kt5TcoScTJVeffydjNaHXjZqWmH9M23U6uV3P",
  "key25": "fm35TJEnEhd19RAb3Wa6JsagJXm2k3Uq43YU6myrARcdXjgVMpHi3Kxb7gvmUKv2x7FV53wBYffEdXG9ufYz5yL",
  "key26": "4Q55Kab7TzZPp5FHdU58CZzhwFN7PY65L15hs31btFoX98VC4gZjys3Uk1RgHEXq3Xpw5nvLyczW7FWam1ofG7oe",
  "key27": "2kzgiA1sSY3L6PjCK3jDtnqKuRpsNyT469WNvAVXKEsEfCV6qvqNXrv5Ud4MEX2byYv3tK4PoPvWrNEbJ1drjmUS",
  "key28": "2YHoW6dvAoBdzfkx8sYN2sTRB5Yb77P3HZsVusQpicdsugkbXkWEgFDwgmWqhMZkGQQADiprtyVdU8vHzt37maQj",
  "key29": "5oEMCcGoTXu6N8rBoWAPyezSpHuq69rVhcoo6DfoJG7chKsuUrvtdExCt9XfZqukcpDFEFoyMYG55vzfpCcJpS9P",
  "key30": "2pSYG3oonTy4WuAq2YHpnbnCf8cNE6zEi6UPVoRCdB4WbUQXeaFuiWv4cFpxPUzKLB8UyBcrWP59UWFiMDvsovLJ",
  "key31": "49vReUQBFvizewY1f6AxEEb6kSfqkFuBoKsJtkWy2tKaveGAqCntmNprt2HvBXMeZP2uwXcT6FZ1DkXrf9F54r1m",
  "key32": "4A9aYAtBti2TeaUBPiKrVmuDH2TujKmFbWeWL6MkFYSDiEUPz4gtQMszfCqvnynhXNzxLjrJr23BiPoq6PtkK5U",
  "key33": "3ferUVyp1EBkamr1Nin696PjtGTGKHfytzzMxJWtp1ETwxMWn7948R4gFb7rmU4yY1pQn9JVYkKvnMuJafKhs4Ws",
  "key34": "4kDEwtSqFtSSiFnCcRz7DLKCqRQsSvDzRQLnLAEVk5EotBj2x4gPjqU1ENEj71jE6KLJuSnFrdczJ8WwQrsUMUVK",
  "key35": "2hreNwJGUJ2srSpR9o72aoR9GdCE1sNixiUcLohUK8aKfYopFMe2PvJbPGNnF91MxewwC23V7U7UE9FgrGkYFKaP",
  "key36": "5ZL1JwY3TxSW9rK5HBuX1nxrpTFjLTkrXqi8D1ccQJLMcuD95zMGBydLrhF9BDArQaisCAd3Fr6SgzAdyHRfxENE",
  "key37": "4dCCnmvDdFA9ZS2gRRq1cA27GdxQ52yPYXX4P7D4jXfwEKypzisNy1KbH4HqQBboNMFYpfhCU4KUktGdqL3DBfhR"
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
