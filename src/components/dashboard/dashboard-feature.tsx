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
    "n1QfX771vfMxBqFby6yemGj3GyTp5zVVa5R4t9bnsrsW3m4ng5L8jz4nudeEe96Mm8v7FBD6seNeho99doBPxJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tT6aSqNS8e4BmBQiAaksRpBQb33Kh3ZZMkahiDfcgDwBqnYU2pZ7cSDeL2zvZQ2wci63Vj1z8SYABxkvK5vLFTz",
  "key1": "3rvyJdWWG5rZjJhsmDWnFa2v1UwkqN9UCtQQq7eP4TkUfuwSqZxyGFAyDqabbBZWJEimDFAietVRCuWNNvysfmh6",
  "key2": "Doyuk62dQ8sRoqtBM1BDfiLgL65TcfaSNWXDyAzXdKxaNBEQxxQfGXgzhTs2EHHsTuPBmFXetmneDAajZXhyZaS",
  "key3": "4ZH5ngooC4RH5nRPRtVfmqd67eaa4xf1VJCEenSLQk6QMUhmYeUSS9gjsqqFhMN7RdYoRF7PLZZ2BDiD7JUsxgy5",
  "key4": "2ae3PsBVkKKpLBKRJaGvvTsatpnjZLopHGqTn6N4Ad88fdd9siHJ9VAxEd1AUrinW8d13SXSZgb36sMwCaQeKf5w",
  "key5": "LoADh5GBbNXvTYP6Nv1LUMe165NeQGbJRjzwJAMzLfkUsd6vc3PE38ZxTowh8ucvsPw9iusTMR3gKxBQg6QrQvM",
  "key6": "P9JsK8iNULiYcwgAz4PhV3roVdmUnTznkxjtEgQpbxtJ2ubKT2LMdW896EH1neurpg1tPcJCvefo15M6UehvkY7",
  "key7": "65JXvugwLkbKsbsKFrpBzdKYsaRnckXrMByamekza5jdAS2kT5VYbRUVGw54xBivJswvDCMvyh3nyQvMZsmNL7Sr",
  "key8": "2CPX6GEB6yz74VvbcGZTz8Xt221oaDKJ81LKYobpjpJ1CvQiuw3ZGp8ucaAR9eQtEMpWPFsXwtLE6XKmcnmsox2M",
  "key9": "2RXwmKBZyHhdBmNYZGPw3HnYSVcXcteHFoE2CMUHqzqm3P1jkX9unZdUEgH5ne4dRpZGCseTRbzwQkPpCLq2JNZu",
  "key10": "5rkb3Z8EFRm2NaYPKK3Z7kW9BrWPDmWQ1wZcZ2Y4qvQzg6GRRCuDmbjiQQEdhkw9MCG8sY2GYqvmvwVg59A6tEya",
  "key11": "YxLC3nKwGZWM75uPuwrVQEftqCQvVj3T46uSeqeRta46RwpaFnMrCiCN5yPJzKABLmEdzxFTe4LyHsnxPTFyKSL",
  "key12": "t4pJfDrMG6yjMEPiDH7eR8tUTmuFxjKTwPAWQqbPK8PTJVpTLbCqM4xEToFkyB2RKFBYPoG4epWW1QohPmu369h",
  "key13": "WF3pf7iJpUkPa9C7iFjssx6QqCG8hT4phytHxb8QApPyNGG8XbM4vT47U9BNGR2XV4mVmepMnhwPuRWPXptPWFi",
  "key14": "3XgtJk6cb33FM41mkpce3geo2BhpD58RPX4U4tLEJ9Xfa7vFxS1KZPEXdp9dPTSjB8mS79y7X7cTrCynJdf8pUoX",
  "key15": "5LpU2kVi6sZtGehKu9tq3tozk2kyzuZmi36paghsVMfxrXqd15jBS1ZAwEXNhre6cmxtEt1ezU8NSk6fei6M9vYq",
  "key16": "2FVoVAN3QPpS8EeVV8w3fHMrzVo54Qe7yAgJTeVhk62JJUBq8bo1ankMujLXaApLH5L6eiqnszW7rerLE98YWXER",
  "key17": "5EHwMUcLkW2cTSEPKguWMkoGYzU3y986WM2rNMjsJZWF2aq9cZLfDqDcj9CNC1W8dQ3DdHcAzZ8YW4NG5YfZ4eqE",
  "key18": "4LEZ9oqsYW63juA8kB6kbuGnihuTsrZ8bxaCbVijSCxjHBw2C8m4d9wu115TzBvRhT9ghJ838rpR661Tnqsa8GVz",
  "key19": "ZJPFcbtRxnHNvnSbgHbEy9rk3gE3NbNvAFSEPz46evjv4sBJyFiuoDJxWmCAdHw3TAEhxHobMS6RrFQPA6JPcgk",
  "key20": "4LuKELWtAxjGihP1K4aZ15pNgwYUDSufDbCjRDLB79ZBQ6VhPtTyTmD6VYWg7LQRf7pnmdv2MxFR15ahCL1XzvTk",
  "key21": "5xxZyXHbWPpMEZKoDVhQEAut3wxA87JqaUDrCPUJWoTALNKNFvzGvr9qDEaUeHtKg5yyaohd8hETPaMk6zpE4XCd",
  "key22": "3dwjC58PNVozs5Urk4wRE4JYH2zkooCawwfMYvXmfxLzaWF1CgvTqNsceTuJBhaHXAs3WfGtaFiLEuGyaRKdsHmX",
  "key23": "4kZBHtspjSh536HFXQPBAAsjcicxTrXBu5gcZpVBU6b4zhsj4bgvgQR2txckB2cNma2ESKDyAkmQgcbba13PC8aE",
  "key24": "2xFHn6DiDTicuinzogHhBZhN8PjCLzJXy4KJhG4FFuZRn9zvwY2Aa1uTtuTxsS4T9HdjMfBCgZZBKQctFs9pNT9V",
  "key25": "32swS51UH4DFMicD1TK9JngSVagX3Qs927zkzsn5H87DiiRCCU6a6qfCPHCs79rBMpBXdiQvLEoqQoqBG5SwdYCv",
  "key26": "25iJ66A8wsNMZT858E9ocLNmKJ4nUpE9Lr6aVuGfQd6gbT8AeMthoGHWxUPfZoRwjitDMxdAvD8jP76H3exKzpNw",
  "key27": "3m5Paq322LYJpCReX8rUJMRpaSyzJEJX5AGtX7tsKF1GEo8rL32zkhX6ortJoHXUL2nYW9zcRNk2KhsZCj31pFH3",
  "key28": "2eMNi7zPX1n9u5juvgEJZ9vN6xFCTWBHqXKsa2q6HUUShWZa8F2XTfBXJnWsC4NspQv1nrB3QCQ32Xisq1cEgnSt",
  "key29": "4YazQBHCuxkMK16BdvSTMrMDqc4EnyhTzLBzzxTqhqvHUpmZ2ftcbeDeuoPDi8MnNDSnBrerGztxcRbqZmnj7UfJ",
  "key30": "2gfx826x6Azz3EEj4wkTBtMfWf8dycRMboL6GMxDS84FpdkyJLVyYCL6G4CBdqiy2vS81GnWJYXbN7r3nJtwNoKe",
  "key31": "UzZRmuo6FPRDjHbYJrN2hsHh1f3BGbP91ZVeQe5fDsGPoV4xovo7v5X7JcCsxGmZgChDhijLREbnkEoPLpBLreb",
  "key32": "3nZe5mVneCn1ophPxFSviF1sEFpvDsLif8kTAg61eQA3i4n24EcdBSRuUyvADnaKZ54htnEfkGDTgwjsWon482nP",
  "key33": "NPPY1mX6NMFidLqqKkR4QYqZmAfm1SiCq6zBv2R1LkpMZ5qSVTFzkjCwjMVffskath2vGujmX7k4BfzgjdowpM1",
  "key34": "2ARFSGwDcF5tActrWYJWDS3ipgJxXYKq6bJ8HEdFyicMqSnvtw8unf1n2VTmBXDBXUFz25SSpg26MoxzxvU6Vy5u",
  "key35": "5AEF3ao9spScxnAMxk3uUUsWcKoSDn7j4Hg1mDzNizNaBZxk26djfLDAeNqoUPu1UDiwpkV1RTPnQgPF7XHV2sRv",
  "key36": "3WastJucWtLkN9zh47LkMEmwBeMFq4B7oBFrGfetQ5NtD5DHD7uETgGG9zikvXtGiRSrww7Gzn9GZnRKec4M14XS",
  "key37": "53FSw7aHpNF4CfHgnNU8biubf5bqcHC9Tp9zKwbDMNThr4FvrJGnnDbBaoDwzvYHbgA35DnW62QoqAYdFoDedcLY",
  "key38": "3HQznQtzUHZgZmHKkbEA57tD9NefTWP1hCvV7qYjiP9Tdo7ukzP3zt9Gm4WvKL2xwvj6yU1PGaDGMiPGZULnn4qn",
  "key39": "4dTK8iA6pRH4nENBJBwXxA3xCKZbyxHJF1WqV3HBjG9wL8poTQCGjBVPUNbYi1BRq15zShyRzGi9crBQCRA2kJH7",
  "key40": "45HWMCuVomT2VtfNxybj8r7ukZSUdUzHVPfVcQhdttC6A6fs5Ybzn1JWorPQiv38PmiVYHdoJm8gyjK6ePucHQ8A",
  "key41": "5XV77iAU7yyPqhK1JytkRHnnPeeMEL5TpriP39RymAb2AiS2Gwbmtv2FAXf1VCCJUnosCB5m9VuT8DzjmJ3wJF5v",
  "key42": "3wnYzVsc9xAdY6rKE2hUKVrzqgWYNWkA4HZgtmU9eddi1AhuTAhBE8gdYdxJsmyJqy4cLWTkRu6WZg9Cf7PT7aSH"
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
