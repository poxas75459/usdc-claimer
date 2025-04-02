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
    "3ND7Vd6zfH1sRXknjwFE8narEhFxbxkhkFh2ptH6E9WuFU2qaCfEiXu5u7VCGR7K3zuEvEXumtGG5iHWKHLkXvFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q1i9yNVijpLVAFMQRmfbDsirbkFLCzEHJGhhoAiG3buq6HZAAmmYkwYSuEMJPHxneETJm3Fo3fw7izCoDxELiML",
  "key1": "5dFmvNbJa2MFm4jQJzfQQQ12N1jBSuRaUwmdHXoM58o7BAuDYmYayaYBfMqmaCESudmuFjSDig9VpqYe47SWrpt5",
  "key2": "3zTVrzXknTiTxhwJ371298WV3RNCVaLrMNqLU53wAb8YaUAwMfZcii5KMMw488Rdr1ciepzXhcQUR6ohzLEfeKEU",
  "key3": "5PHffEhRfLLf3NQiPz3KTWk2iJDxi4ubjeW7RGxYg6xn434rLfSg86tdgme7ynVWqWZX2yHcg1JP32VQSJ8PcpNd",
  "key4": "4SD2S62UFHvcog3YTM9QY5tH8irQyU8eYxqoJGt4titXmiWb6tVuWjmZTqu5nkgNdSFaW6PtSBvmesNXgTz2A3qe",
  "key5": "4GNC8EuUEWbjHyyDBBQUZ1UAHib1KYztyc5jPwdoLaZuB371t3DCqVmiY4WUDaRqn4fHKZBgti5HWbzcRQHDjHiW",
  "key6": "2q58KPseZCSAYUpR3kmgXhoxGTbo4vtHYmCgrx6SgeHUAWZDuKGgCWzZ1ArE8eyk54iaPWp2oVPR76gNbn7ezB4M",
  "key7": "31qq34VVAa1SHRowVbxbaGbFNA6MYB7ZwNtH3dTYbgxVbuJEHStoPjLwznw5jXQi4fHu6DLvnzccAnkREiyoQgvq",
  "key8": "5pk4SNwg8K6uKPokYJuQKx7q7zxF4TuqtJDPBRo8cf5vqcwMxh22gbWQ6m5z8XnDyEVHdZF3TuwY47styafkxBKT",
  "key9": "tL3As8AuwtFgUUEX3HrgVtnDn5WrhddVjne3b9VtEaXpMQymiC6gQ8nEdKJ4sNugkcDaCRPnjeYaM3RQWwJESTN",
  "key10": "2gXemPBddY65mkCzqNe7xH2TtNLbLUxSabndqNczcLa3nAtUSdWaLsUU1YvRDrGCYZXFkmAfW9Hxw2F5LEZJ9A19",
  "key11": "4TXm7S2GvvhfQ5h2vSnWBq5RBo2xBCd1VuFaLPFk5UnAJMDhPTCU494ocTJ8yiwLrnEuEpGoXQVYj38trxfvhxNi",
  "key12": "3Wk6NLCL8jUvf8NcPgokHtJrdCi4fWhFHo5KDPwVGDyMSjUHoKNVW5ESvNpiwH93qYZ1KhuSzGFNcdy2RNZ8GXEs",
  "key13": "5XyhXTD1UDpgzSarwXQpYk79swYokW7iyn1Ap35yF5KGNAayj54CaxrcF5wuzaFfkCEdEDS18Rh4SDNjUwXSQsrd",
  "key14": "5a5BruJYnfGUDacGL5H6UEguCcuZYcxS8ZmZhaiF9rGgr4CuBJrhb6rrxE5S7UC3E2EPbCb9SW1vi4UZZpHhybQv",
  "key15": "3cTRdEgANDXCgTE7n9SmhggpsR1Y77H9y384RaHwLSFx36QV25ET3r1jXppVkrhcreeSmwdKjBXdYG4x9Ge4HzP6",
  "key16": "5t4es1Qk6VZXqSqKe1XWxZBzWsECx7kzXBSNHMYX2qhMWDEQ2RzfieNz6tV8Vw2FTH4Gq3g3F17AWXDJs6afESyw",
  "key17": "26HDwDXcAri3E5bz33JZiVDosf96hxPMiT98Zm14R7CZ5oRSS2ZLPe7Qq5AjMggTMNTcr2Wehb4j64GpKQa3JPhL",
  "key18": "xX3WdEdKpM2BV8o5P2ABTahAvd8Zu1AyvRrdn4AcYyk4sxHhLgcqTcokNTxBf7TpR1BR4D9wZq6XibzgjYqPd6F",
  "key19": "BHAy3ASoY8fDJwao5QXNZYxg9kiwNKJAqPF1nyXqxgau9EEk4Zo9tW88cdYPs2u8ArpBtar8bKYxaGutrBJK6YB",
  "key20": "2Eo9XcCCAqCuexTuCaBfVV8N41BHEMahJVcZPdxASYwdAP1iD7wUvBXPeN4ukdafpdcARdeX1cjTc4M5xbA2WTzZ",
  "key21": "2xiGoSFFvCRR7khcbaw7bizkyWKT6x4Vo3EKE4xaHEnusZTnjUue9ZRNAHH5wU7Sd4Hi4TR5RYsFHZR9PtRFdKEz",
  "key22": "3B5focmM8xaiQm5C1oXwpWGREkM3X4X14FiSsYnmKomKvWDL9ZsmekLT5QpGoPMK1EajjiFwQpjovr8nXhSjs5ZV",
  "key23": "RjxZgwi2BgGuGcCPqbBtGVHyKzXEQ6cRvo2JR7jaW8fb1Q7HZNdBkzZjzsim9mgtaRd6CYbEjHJmm3sTrZq2ypF",
  "key24": "5dHg3Z6GzhStUXKj6R4yv36oCR6NRRXk4JeiaPbD8BJKXB5SecuUdc3Su3XyoyQV68B5s3AZNNnkLodbMiKiFf2b",
  "key25": "h57R6St6XVkbfrztMbiPJ7sQkkBCj6GYVzAmgkm4eigRx3bme9MxMZG29LdUq7SkFjgxSEzgF5PYFG4xZD7XuEk",
  "key26": "3pQfKwfiLW4i1W8bry8dHvbnnXJ7qErXeUmv8EGfvP73k2B6Fb6Zn4pheyokfkz4NYbPwsq6p54VrJ2kUHDuxdGr",
  "key27": "fhY26Sz8SyN1X6fAdQPrKmULwCidUuBibMDgjN8bzohzCSTLzWNGrKdH7f6tR3EL19suW85frCB3xQp4MaDZSAt",
  "key28": "LQdSXgVCzVaqjuEFYbKopNM6iCsojHqLHJczHVprzGTg3XKP242rJ8iM1pS52eoFDaTB5dMhFCQweBesWxLcps5",
  "key29": "5B6jeUQyCyCzDfsa6bHjsQMhkNM3kJm1yStHq1TjjF7Ja8ZfycqQ67V2ZevtRnvU6utNQn61np1jBfUzGsbppavw",
  "key30": "5Ysuuop9vRsxECHgZ4eecRLEzB62uA12xuL6UppS3fKNfeUEffJoJGtH4RuJSHKdNLhi27y159aaH5qf3JqMJ6wr",
  "key31": "4dR2SipTuJ1DhaNKEVGNX7SfMnkyVTi14owDsunzuyFgXZicqhuaTmfhCCVD1tFPs7KTw8vMzV9uMZbb2uPBhk3g",
  "key32": "3Urm81bzebjcHbSz2NoSnGG3vMQesEF62AcSucbajCs3Y9vNJpmixSmypQ5a9k9EzhUvbpBpR7pabpav22vn56QG",
  "key33": "5jagEHAeis7Tyy4evJwnsvczeYyX6nyvKHjWQ7v7etxjcHZihjGbVVftsSoo8ip1GGQso8JqUUXy2JrQ24fPWEM7",
  "key34": "3S1TBJmEeNUjz2eVHXG3XqaK6mr46uSy24waJgof4i4LjKF2VDnv9S5qLrDvqcxkqY8ZrTJc5jp1nFzprxc6grtn",
  "key35": "2Dsr2SXiGWSCaDAezgfxR9NWgd7x3jjn4r5PuTxEFJRXZd6FZioUziasipVLm7xgEfEe37U7U4Px5scSAEtfa827",
  "key36": "4j2DJHjLzBErVMCv8Zg6BW3S45qrnXoqr25uzSKeMhLNA1BfBTQmrVRVq98TsmrMuiyUsBr5fQCEj5hUdQvuSov8",
  "key37": "3Ka99WCkv1TNRPamjNVUneK1sw3UT4Tj6RyiMsG9Zs2opWj8eXGEWGwQdqpEW3M7DfapqpdrnjGwtog9iRC2rcYY",
  "key38": "4wKmCzHLbndiMVGcpHir6PqcyuMvnmetAK6hVuD972L3eucLCo8nRNuwm3KJnHNWNkHKpdaFniNHSPCZsCWh1pYW",
  "key39": "5eYbsp1oVRTBW2T6KtnCPBW8uqCL3c6o9oxvqLtV6Cgcjm5kGMqKQJiNHq8MhJDhBkdjT991bR9heMfbKoRvHmH7",
  "key40": "3cw3ia8rN6tNh4xgk6RY5f6TZhuxK8nuRFp5gEjfJjwE1JFYjj4ThUtvwPr7vTbWmRUG4CEvYXE4UJCjKBUvPUXx",
  "key41": "33zhnGcfnvoLr62GXcVh1XnpbFt935S4QcKrt1dLu1vaNH63ksjjziu8JZbU9FFWHEDqxXUP2BCeoYdRaW875Zea",
  "key42": "3ooLENnJVLzhBxtkqWT2duyanF1LDaFA8K9xEDwZh6jFJngr4UvjGjzHaVpDgwg8reLENs5mPaMXXFvzRXdmWCQX"
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
