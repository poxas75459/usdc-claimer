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
    "4QEeEVSTPjJSHXoKzzoCXjQgun7zJ3xLBgq5tvtEC3dDXLMCmZivh8mdJmpPSdcRZWx5pnuh2zLd4fAWzehE49GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pSgrggFeYSy1YfHsTtx29FPwT4yqmpVbnT8cpo7Ky5ZYZf1XJzA6ySxKJziRCEcVcCdHoWuc5u2GVJDH6MAzTjQ",
  "key1": "2m3ZGZjNDkpi2zc9XHXgBZZpDZUHRyqkrMwtSJDgEvMxDXJb8nCJDrDjsTbvhrBrwmTXHbUPnRmZBqCtho6tWiDz",
  "key2": "63H8kJbjubvFMWvNgZecp3fJXq1u6hLqDgnb6sNxsiGWva56TDYCrBuzzemqrAeQc6mLrjrPokVZZ5QfExD3Kufu",
  "key3": "3BxueBZFFihAWhbFZNGvo8vw3fZHzjTpYCe8xmZQC2hyYuWu1aNMNDiU6meqFXw4C2NojiopeBSNJQ3mTLEoFV5e",
  "key4": "65K8kQjw5DifcS6WXuqsgYk76NMYfHEm4xgTuqFyUwUh7z2gM5TZasHC62FNBpdfkYkoVCwbAVQLPc6qeyFR38ne",
  "key5": "5FCYVjvz6TmUFReRLjHan3udWwP9RCQe5QATJsE6EQgLE8J1VdELxjr1GDSdo5zLSjyZEffXDbnha368T7Vyybs5",
  "key6": "5iP3j39e4NnZgduuzB26ZrXfNv2JzuMMv528Ct8ajGgYPWP9shgATLHXuNh8aEQAkibiL4hLYoyHSYHVnPSJSswm",
  "key7": "2k6ybjZ2J2hNcGhRGdVWm1BkkFuBSqPpKw6SUgRtyYCnDhFmpPswu38DdcBiLiziGJ2QFQBGAKLGPVekqWfyu8NJ",
  "key8": "z3Qjcw5ezh1cqksU7LE6HfRASNKVNpiCkqoGPd5gEKirtD1RxcirFPapVBGnytTwubik54AWEdzaqnrXJBxjipg",
  "key9": "5wRun8dzq4ENy82P2ZjzYKmjdwBfAJXMcrQciNbDD28PGyRJ6LjGdWW5kghZxqPpLpGfysnGVhECyo3s4A5LDsEP",
  "key10": "5cHfxAxm9R1o3Ag83rzrDvdKbWHLCdM9XUoEadx8eUGEpLezW3YcfhdRxqn7PFq2RgF8i87s2aFguM3fVDifdy4B",
  "key11": "44WxJPyiFjkPiyPoGmsqYcXzWwop57d3WGbiCAHiURZKygTXGya9SE7CYxKfpTXEiiVYxiXy3agkD6vgqTSQwitK",
  "key12": "5TtDEvW2392a71iunFNbvAy61q6XGNzxBLZa1rATGNsinRho7QuSZZ1SdC4ETMBEbJn5G6eWSfmcVRC9amfSszVY",
  "key13": "J22yoBa5jjjRs6ZYhQew2JyXx84jUTCu5EkixZybuzdBkm16cXCszDFC93t4pMteVbTtHW4CcrwvjsEpsuL3Aa8",
  "key14": "5tUAeH8D5CK4FsUrZBZyybq9nn1hgfQrpRBieD1kxHeZvSQveqUmufSUcFLCA8bkWHdkzfT1DqhAxYVmsrpg1PvC",
  "key15": "4NxVtAZ6mqdjWgyEBXZnUhA7JkKXVJ3tLSS2XykSqRVpyJc7eGAR4WgPPezcyUT9Q8DJfFSG22uTYR4k1zjuUDRV",
  "key16": "67VswCXqWUUDt3aaGSCmDhR4gtyCSJmraT6qF2QxMYLy93dGZB51k1obJGgVCmvMZYtQB7tdD5Y3YY6FHR7aMJCe",
  "key17": "2hG4sseyWdZC25KxTGwmqzAtpKqjYdznJsoRHweyA3jktwXxnRzWCTpLg7pv6xwyb3wTomgN14Zir43nKFc2VafJ",
  "key18": "DyaznEN1nvEts63kUSvXdv8c9gqgc3wFBULcFk422Up2eC1C4eGDiXt2gqcrMuLxKpKLNqGHuVVnnuC2EcmaWMU",
  "key19": "3ZGNTqbo8rmdb47XsvZ2JB1x3BBTDchVcRh1WJtofaepFJpDNh74v19nxREYgTARqBWdY9mTdM6XLXq8fT3vbZaR",
  "key20": "5gzSufTHcbBDRgJcRi1Ac513fw4UR2ofPPE33Re9aiYYSNQqi1wHQ4bJLE2Rxv3QqG95QrXp82vdQNbMBoY7LJaL",
  "key21": "3JEs7qEveRMhwnmT27nQRuX8mgDc23SPXrLcbKySHJcUUvyKAFMGzVQaGe2rKW13teMPf3e1W1D3R6qDh86NrboM",
  "key22": "42CySs5zxkrcMhkAsUJVgw4zAPQ3ZV9VGHxaU7KycZEvkkXyP4eiNNqkjfJG19pDyDNZmEUs9WjKQe4kw6vMYXB6",
  "key23": "xLtLdJvK6ruMxqBD527uB7uThEmFkcsGNyy5HviqkFoayyBTNNBjVe9LAgGqdYDywvo9gb5nrTHf534iov1UisE",
  "key24": "651viVA9JkRQM9e1kF3koEaUUJtaSaJw2tHLEK91b43TFzF8upuxV8NbiKTAfp2TYdHSzZqWEtduKqMzFoE2JLfk",
  "key25": "5txVx3QZU648rKkLwJCEVWDHtXviqTqfs9TFx1YwoRg5GroF6MSoHzy5HBf7R2XUGoQ7r9w4Myq6LREnu3Wb1Pkn",
  "key26": "2ScsFgUj6PLyMEYMVVd6DVi2nkhfTRBVWdW7rUTWgQ2uViAE15Wi4Dnv39wi7RMjk8UeNtwrKesXpvxA73MVRFbV",
  "key27": "3K7KQfTHSGesg1t31FykY2Y9UGCtFZB6Y426TSSZKjAffyshGkmPykYvJzcaEB6zzcrx5PZCfK37dsGzPMVyJE3y",
  "key28": "tSsyasXZt3PwTuysn2K9yJ2yqQTaTH1558vyX4VZrnGMKafQ9UryPQqYViNXBr4CdCPCXiGqVc6jtwXZqRvuLm6",
  "key29": "4cs1yXmtVcjBxv1xrDbuha4htBv6ATMt3Hj19aECbbNvJTM85nUSv1PxFC9A3eeubHVarx8Qf8X39roTRwMa5WDZ",
  "key30": "2s76iwcWXpEVYGNpiv7RXYzmiCyWPfBPwcZ5ayHew78rdZGZRoykEGN8rC2weM2DjHqzggN3tXAPP86jPPEc71Cv",
  "key31": "2F1z8SSifDHfkRKg6v5Bu92ed8bv3BEQP4mNV9CpMSJLKUNgEU6XoBSDLeeVLUrZtoBsvmekofMWaL74bQbXyJw4",
  "key32": "2njaWth1MbrcxWHtS7cEgYrzKh2oLnQRHSKaBHYcxQQ3gUrQe76dPhbFHgokvCPhP3Bum7XsGxfyo9WoegbQyLnN",
  "key33": "5fuLrqGQ671AWwBSqZE6Ui341chBnLK5KVvv9uCbMEoae6Re4ePS4px3GkNf3Q4VZtfz123i6YeNMUmtTWKBrKEv",
  "key34": "2jGPQVCsEMmhRVYgCLStAn3B3mVcZaSYWFkZNPD8NLrixqAP6TRdkaHwmLb2eWxe3h8cB3gg77gKBYC4vBKr89q9",
  "key35": "3NYWGxChihV4srBrbkCewYR77XDP2oUJaguMwRLiiZXaXbyT6w73ZGPKphTe7pqKjzC96BwQH8roMXkhf4PmZZiK",
  "key36": "2kKQhQE77tPaQmq1CP59qdYefCvN6XRitcvGoCH8UCSrzDuK4FysyVZVK63bWVUWXDphdjpPGSZJaJh97a4YRfoY",
  "key37": "426guPrHKxp96ijLiwbMVDuvfHM5hB123KqnJRgYYpvdJZXB4o67pC6B6J7GXACYkqNYdNNUnfW7xzAmJasDuYBR",
  "key38": "2P4YwJaQ3XtECKopcgruGECtexy5GE4Z5Emaz1BsuLpL1tC8okGBhbQh2BhmAcCkYsMj5iLMY8cghRAggbGsmjqW",
  "key39": "2fp16CqpihFYmGc4Q8GpBxF7KTM12b3MGfuRo9cXwz4bbcNpEKCvyU7ZCTAcao12NqSY8JXUrRzQkv8iPWrGnTz2",
  "key40": "3uxdFpuEwXfxgKJvH7CF5BL5EDyDFPMyCNnwPqDhG7uKHEQYz5NtZvBcJHvFKvK9fiy8mrW3wsGUhnuFh2QVWjR9",
  "key41": "MdoajH7xADnJFdD7JiM15s2D8JvAK7mknktGWkAz89BqX1HA7z23kqnCTLwjeCJSszJZx1T3ZRsQ5qRQEzGU7AV",
  "key42": "2b2rjV865Y2uwNdvYfVV7AQdWroQhdCtsAkpGmvhEn9Jk8ia4qF6tsFYLgBEmrskjout5gvpxtmubWnVHYSgjV8q",
  "key43": "4UC3AAH7KEm9ehgbQUiAmbYgRExSH5KUFXkTD8iBUwi3ecNr7jyk7BuXXkGjyU56jLh81H1pRRKrAR3PTYTiLPv6",
  "key44": "qD9jsLmcg9upRsDGAn2NrBqsd5YMetP4pSvZ4bK42NvSW6Q1LMYXnintVkg1Di6KkwtB5dK84FmVJ2fc8urroPW",
  "key45": "Rtu74jyrnY7xVUXKLRih5sq78Y68pPwyH46yCqQxsUcabnDFdzvtmWkiFferRmuqSVHw8eQn1achp2GSU6eR3X4",
  "key46": "5XyHBRhAiX8712p38HXnu7MnHkrejAVtQrf4p3qLs5DkDvEw1QvS7mwcSP2rzd1Rg4dkzgyYnGqcxQpBvtZtDJgz",
  "key47": "57AvdQFvXJSH8HQzgXFiRUNCnq17AN39AMJKemTthZ8g8S66RWUN8wdLKAMRVHuwVc4BxC8vMSpDoH1UKX1vQf9Y",
  "key48": "33u76gu4dSXXUUPKotGUDFPb4pe2fZSbGTFJE4cVMuAWBuAEqb8vJdunYCDY3DTiZKwPwtCoVd1VLNehfVYshE5B",
  "key49": "U1qRNVzg6NVJD9D89cgE5QqzhbB1kmiuzCqYWEtMCRuB54y2a6m9D2yz9Bc65svknqpApmbR8sax5mkWGYYSUh5"
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
