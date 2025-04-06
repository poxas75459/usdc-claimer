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
    "3hvUarz1cnwnpAXfHXCo2NCNt5Wsdx6JRUDokx18AUPd1mG5oSaGm2D5AstB7qyYXK2NUY1QmKfEBRJrCesBZ7kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PrtTwfVuazF49vaikckqBfJbmb3A5NppYkvsoc8Vb3WjkUUDL7YPFLmuEFQh139JPjswQDyzUYkEdbeCy4UzLRh",
  "key1": "CRwTgvTLRLN8YQ4NVxqjkHvKqzEW3rMg7BhpFrHPJ6MGKnJzDjySCpsiRc6TrzVXvgAApRMGAkTLF8v3U5M9pYi",
  "key2": "32owr7QJWyf2foxapi9Gg2n2jnyCZkoTBdw4UBWa2Wk8tmyYJ3tTZ4X9vdCHzGvqiSYnbbYXh1JhYvENaQvpRiMA",
  "key3": "5XLPkNmmwwggYdmRZNbLSrkfnp4DZ736vZWrmuV76mvX36Jm2M3GN8wJZwkGUAnRULDeLXQCSQi6txkVFywBQ8N5",
  "key4": "4yv2syPVYpURdYy6Sw2mmhhVJsE613Wv4TmHUMTeGV9bRqpytuZH9f5qvJQwH3tpyoeY4kivLNPbxxUbf52e873R",
  "key5": "qsUiiurzwSnRpTgfcTeo6icQK2FEMTRwvN5ZfW3ikAe4yrdjawt9Baf5T7QC5RChc9N2KExdPqCKEzke69qSv8a",
  "key6": "3n1CZEzhNZPRZ5wZEQAfzC9r5Fjt6LLtrhAKDRFSdipABeZkur6Yvz3q5EbcQxru926kFp4NjhSpbNRB9Z9BfDre",
  "key7": "4QKmTaftdg4mcaFRVh3zD2b6LRBJfsfmLrauH3t3iV1sPp4bG8hhYT7pwtBAmxYku8BCuhAfYJXT9bx6D29sFrmi",
  "key8": "41yUNLGMH1osUEBj9a1PRkEb2rUZLSaQBwcij8qa6tjkgvzKt1HuXzeaxXrdKfrc8pZscGSL9YeLK4TGgcbQHVPX",
  "key9": "4WJTfWY6LAQYdH7tLTQeh8xFSeDrTa3j3YqpLgrf7F6PPt1xEwL6iKWAQC1BogiUGEVLrqG1NotA5bA6SRqcGSc1",
  "key10": "66h7yzF81GdPTHyES6KGb1qWZyxBLmpk4VtVMKw8jg6bwvxH3d65tWms4W6khqPQdowzq3dTv2P91ZQeaRvEfLKU",
  "key11": "4DAfAahvQcedevQUNLVWsrc34ToYR2fhk5CJHZU3tQ4FRafBE8BTEpPUjWg1YSWFSVN8Sx5n3i9fofb5rGDRvA3V",
  "key12": "NRYG8yNNxMxu2dk79X1oerqyM5xrDBG6RDDyzGyu1VEMQp4PX4ujqTFWk9jdNMVMxeBCFtPD6yTmCddy65z9mdL",
  "key13": "4drJLqQvQsqb2RtZJDWZ7XrRejyTCQUowrVEwV4yrqJupvGJuqxUk35eNZBDqx5MuS8pQjbeSJ6PiAgF7rHFQ25Q",
  "key14": "2DtdVQiTv86UtB6z2KYBaWeA3eiPtN8Siipz1bjK1nsJ7D5PDkXUbgxd9wV51QQgNYe3P17bNZEBi9wJppgWJhdF",
  "key15": "2AaWwNftYdiL3R5t3dSRHEquPYMQf3vUrLGWrN5Usj11NyN26wQGVrfw49bA5VFkugZtudwXZDk1AekjAxNsRmxZ",
  "key16": "dXpxYcMfarcbv7N73YR3kshUfGuLVRxi3UJV3dCgA2gJeLeuvzkdY79EtLcbXRDWUuoc89QGyk2dafvev3pi3Za",
  "key17": "53Jr5rY5fzLW8FgDFGmx7eEDvKhZZz46i7BSpJKu1VpDtvUDZSYzPxY9i5BNCvHyttNRiWB9P3RSGsUCRtH7Vb8H",
  "key18": "ouod41YqT9qWTwLXCZohy7rxF3arJcEY3nmG6TFyvay1mz31KKo4i7urocRygBaobPkqCR8kCyLPy25n3RYiELi",
  "key19": "44uQS7AFZZ4xFMwhrnXbmp6xdYwDbTZgHQnfyKRWZ79FoEe5KHcyraDkXC5sUTpyr13n4miNbmPXt6VadAW5Wqrh",
  "key20": "26GamsFJf6QoMCGhBeHPD1NBLbJXdqS6QdhrrjJfGLdi8XRzk4k4nxdK6WzHtwifUtCqoWP2S17aGTNQtwo514kG",
  "key21": "4W9JBNvAFezSH6943K5bDadfJH92pJVfPKkH8gT5H6V8wLRZsrHjs6GrHLCdzYFvZeCsbC6o4A61xohBq4mHHWpk",
  "key22": "3ZAqiXUVcExjSLLpXBBgrip5AtHRbAfEoWNJNpT9u7JTcPTxH7VsTHL6Qxsto9fKx9STTisTh4VCwbB6Sjn1h1Cv",
  "key23": "3Un2soHtc2MX3w92cQV5qdYLN4HpWkatka2C3mPQE7RZGkxbGZhYhyE8VjRDXLkGmvKuu6Qao23CkckAVyjf3aj5",
  "key24": "5NoaPmBg9KbvpYFofpHoKAEyC6d7rvBBnmD5gFNLkaL9QmfS8TMuVtkC7ug2Er3Yti7amXdf9XKgvfeKDNhFNdiE",
  "key25": "5tw8AdkG5WnZjaiikqMpujhubYmeSZK4xN2hUbExK9BZUMB6UzcmxiEQCGibMz5ZtRt5RHUT3riSb24C729ri4Gt",
  "key26": "4b3EZznyYaEgGk7Jg9EDjQrfWBffsjNqmD8NNNRSYttFPS8wdYzrojSvppQFFAiUiCP3Dm8AmyZLmQQgdjdcscDH",
  "key27": "2fdmGRqy2giVc8LsbuFM3wUZSVih473fBAkFgLZQ6TtCUJcbMfVnMUWn79Q9xrJ8f9FF5oHjCYJVg3jsotsrNySr"
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
