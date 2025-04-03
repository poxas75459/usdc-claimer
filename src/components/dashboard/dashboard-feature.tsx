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
    "2iMZ1AjaUFBdwTjJK2hoVrgTn5rDrcMgU8hu73Yi4K9NCo6tyUQuDegqrm2kDUnVUwtZqnqdAg3n6WDLjK2LYPgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FuquTx9HnRFCEkozf5pnXitDZVNeUTdr7JGHGViH5fUzHRpZxNLrjMgSThG3RKvDqTFgnYdUxrzr75JApsPwJ7",
  "key1": "VyzbnveomFJ5yXpHmSSV48A41K2bgKRUqYvNttRBcYxB6Bpmeh1rAdgPiB4FuhdF22tY6oDbfLRuKtoPeuvpEYV",
  "key2": "2dkxQgsb7NskQGCV3zfs57EeHExxceCzPKJAT8oNJvfCatjJpVFnUDcWSGZsjndLnVL6EAJpp9WPiEbrSGw36CRL",
  "key3": "m1rgurVpEszqhoAk6DXZksJYCbRocgXJLUbvjPxuuiwXGK1Zy8ZqP14vm3Gb5ZdjeexjDNYphKt6mktVUTCuEb9",
  "key4": "5xChNMTStYdqYTS5CRRxV49PCtS2W9vtLnYC5pDacapeoXYW1RRUetXvsq3sfLpFoSqHCEdoc2YeVAdW1eALMdPT",
  "key5": "vL8D4x43gjzGZMFtEuGCP6ZTPjoXUvNxucg2EiBCCsbgs6g5BiCBtaJcgLf1tuoZemTE3zv9JbTwgsnVRxZeR3X",
  "key6": "2id5jmTv9QBGgTos2fpqiZEaXyL72YEwYxPuYXDbNn1DCPR8Xndc3rMuKANpdqNiNixBJ9vahsvtd4jAnr7fK48d",
  "key7": "2PPXfXsGgs3HTkCYVbnDNf75brXat9sYhgPxPAeT7gh4nSYzPWss5dja8z124FMVksEFfNqq4JR9pUvTtaRaS4JZ",
  "key8": "5cNh66cSfVViTHywtDabVCDKgPTTmsM37C6toEJRtW76MP6Z8qwm1DvxKj1iRNRG7crFJBqxQEPLBk3JWr6DXuwS",
  "key9": "sdaTCD8zc4a7iRWdr754R5zkM32X2UrnVGu31qRkbmYtx6aQjNGTCCGAfoGaJ5q2DV5FXM5Dbnd2cae19ahj44X",
  "key10": "4YG3sP4FgNHoFgJcJHp9PmteakSjjz51smawTwwFmdH7asEzHYFdcCFA9FkbUujVAvMHky9FRzVKUxw43Utc6m3y",
  "key11": "2ZhxksihuUS8Z3hcW7axqndXS12REyaY5CLds3yPaEx2QpC9QV3dAGNuT4RmXP47d6cMbsdnTjyfYPNG7KZRn7vQ",
  "key12": "4FnqPEygiuCyC6C1YzJdtreVYqoCvsfZugKbFbbHecabxYYNrsbn361EQB9vnqbUDXwwE9jiE5AsfFhLuYvbCkmx",
  "key13": "3jmKFAdvqFcubyHSpa1PUZhuzxD3zPxRE819NrJzaH4C4xu9opexZQ5zSNaZgX9WvbYFCmqWitd9X9FKL8zUZV9y",
  "key14": "4nsZtCZZnHYvCSz8bZJaSBNv4CuyxfWPrvNw7r2fS7k2N52uosRh23R995NWx7Uwpob7qxKgoJXstuNyEK2KJ8Sc",
  "key15": "vGTQAPtMWN7f9imY7dxdrLJnVM3PfdETZyipUFVoi3bT2fAypM94z97Fwa2Cq5wxVfcJtQMVXtE3TPJyoBFbXHN",
  "key16": "2Wr3M7sbaBvjgtAfTMtHFGPBrJ6omkH2cTT6wq5FStpoe6CKGRFbNNU81p13hDtbzaRAsGNBrCmY931ebvVMrExX",
  "key17": "5XEn8zWwDdM3PjR4kN5gUtiMyZRF6S53HXWjRfYLSsNiuS1X5YZkriGtKNPBp2q6VRRFdUBjvfkdjyksyiLKEwFx",
  "key18": "nCVbmXBpZv88629NEToJKJtLfoJB3KTbvuoWJLnfM1NSD4zLW92Btpk58uEvZgypGfbLdFt38UnFLdRsXfuzEgA",
  "key19": "3WtjfszFtfLdwXRonEXmwJZV5qgyRP9sa7oTKzFpCG2S7VohbkRqK3RbULwaQDVBqH4JVqTPYJ1KqGnYc18PMXZm",
  "key20": "6rnCpxBw3MjUUruPTTEcdJQqD9PTAgzvsoLcUPZhxfgnj4uLx7vzzqbkn943QZdERtAj7RTcoUAY3cB3VpU2Yue",
  "key21": "5XNzg7Fm8bYvjNW25jpY2jpDKUrekCvBCfoUaQATqtiMppJHW9zcDRMYmMVCtpqed1GVcMx82xrHRDWRxAyn72NY",
  "key22": "5MVtKQLbt6TJmSD9EBNUxtTQDESXKn6HFW6SnYbtEm6AdoKNCBHo2bwYArfqARtNatJWP36pUwgFmk3B4cT2PPwR",
  "key23": "LNt85uxSDY4QdJBWcJobM2qBG3nEpL6neqS8fZ4rMEnN1TbzPMcUCpVhSGokr6jR3XYXxTPRb5PX7F9eT78ePoL",
  "key24": "4o3dPQHxHTLsNg8dbK8i842gAjvffRtc2Kryi7U4tQoD8pyAqqwSFo6kHx2qRx6Ph88o16VNJPUMMofD7HsDwkzP",
  "key25": "5ZunPcFHKYPYBvgzvm9oyCW8ahxDDioPiMHnRi9AQmZ443fq4Qi2xGDn4sribrmD7cFEa4ubHVfTYE6ZRbrAHQhH",
  "key26": "4zQHe3C3DYG72dmYsgYJbVn6ycT4AFcuo45FigQAxseKtDzzBdacn7dKeZ9MYmqGndG85GL9i2jEfuprFGnoUJfr",
  "key27": "2cFT1nJYmwjRZeCarJQuQyKqpQ6DHqcPc5kSGzso2EACLxb5SESuYq3txW5bJLrBYPLyGgjnfykLazzzfePu7P9L",
  "key28": "52mMZouqibdJZ6AwWk5Fqiqhak8mgBcrhzEoANQuTtEDCFYh2VAU2N9SJtYmMX49wgevSHeHX51gnNuYjBAFiRdP"
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
