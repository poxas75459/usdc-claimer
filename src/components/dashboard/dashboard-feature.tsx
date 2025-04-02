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
    "4q5Kzx6ppQnbJqNnGgNjT2Sbg9b3K8sqvCXCEn6ExbJCzF2xwWzYQ6cJTqXE15Tr8QoZKjW1s1EhrmUkuP3dCWaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TLJTizCjN66BtS99wRdFm7m75qDjZjh4uyEXR2pQtYfevS6nk5Ve95pK6qzVvV26WMitycDHPuDFRWVhqZ5XQ6T",
  "key1": "592SZ5zPtYv35Axmz8SSgnLKNyapFrJYtAzxMUQpw5hM51xnUUWG2MxDe55Q9Jh9CmoQH7PqjkVgcUg7Z3W6zcEz",
  "key2": "2TCsAZJCqeByiJw3Sbb2PY5GGe2N6r4RbQVJdM5SJ3eBKdNyRUDvGxSZAS6PDLaApdoAqp3TZ145Po1qsXD4rDEQ",
  "key3": "3LSsS2VoQYfGdFZFYd1RhJm6WqFFaJVuWXEnwfGjcypzrHKexgD8QRi5FCvnbG6eYUAVp8j2rArbyxriLDsbZmAx",
  "key4": "3TtKXosoM5QFMUbEUFAyXhVEzGW1YhppoKdViZ4fWocQsvn6RwD7pbCGy3oBPqGYmv8kuoosC71nFWxzdwxfUe12",
  "key5": "6jM6sXdBPAZBfFn8SfLkN8N8ioFydhefNKHzLRxyrU3Njf5MKexgntWEMXGUc3TFXuqvv6MJae4na29oRiPdm1A",
  "key6": "2tsXvgQhaAE1wHmBVSYu9eoE7Pg6HrRixmgUbSfhycQ5NbvxTyHy7ZmmNVUeQM2STNJJNpJ2F12Lpua8DJu5Ywys",
  "key7": "3F6fWSmCvUsdk4S4owA6E72R9PEh6hBdAb988bTExTXoRrsMs3pEPR7L27hGMZSm4ZRn9asE5uJGz1vpmLdfQuh",
  "key8": "4eWqm3QaNdjM46fMoBSBskXAncFHqCRCikWjHco6SWQRRkwfmnoYbT2UCUsTHrGdmcMG6ZEshYFbS4V45vpN27Do",
  "key9": "38QfkHCR2juuWsSuuwUC5JYuP312gSSyBbKn34qJLMgmhjKGvbceUAyPe9uSZUWc2EdkMSocdjqnpE2X7XCJBhNj",
  "key10": "4pp439u1wH7w9a14e1rbLAneJiXvGvcfkTw4yeLDRXpV7BUysqMDqQFjj4ZxVpb5scpaeDBEaWzTDu8EwAD55Pxc",
  "key11": "HnJmCprfMVudSxUxSEuxETccM2zGXDbqHSUmE5tNkYNDJ8x3qmmUEJ1MBk8M5xm5VTfzMUwQuPhVXLVMmJQcQUF",
  "key12": "4yNrsFFamHpGvhd5aFGdsM5xuzepmEkuMJRUXtbswbZGvoUqGW212jids8rBv33VbHYr82s4q63bMicLFKoJR7iR",
  "key13": "2CwD4wPWJZQm2iTPi7Dp2MgczFLNwXxtgWnsSZiXpSQC6p8Y1ejGPfzKLhMD2nto9G6cLPUBEypBstejfJGYBPtc",
  "key14": "3FTehqoQ4jVNcnfSUMFMkx992oLN5U1ugLNyzDxrg7jURSwVzHDYavh33S3i26N8NLwbfL393N1wSSWWwL2XUmB9",
  "key15": "5ktjL58uV9fZ6DxBpcw1cUViUJW346DRFqx1w7PodUHrrDwDAV4HsQARSffugijZdMbBfc1VUQiY5EpowcYWUaSq",
  "key16": "3N2rYXPstVbW6xoExdR8ivxsKCGvr6Jz7kouFBzHAqmuaYG5JaxKzRAtBj8x6qvxfs9Ghh1V2T6wCvX4iv5JaLe9",
  "key17": "Ukr668465FNmj53oCu6MZ6yUAe46eqYKWNGV6hUrgzf2ABeArMcJGQ5xmBwgWZGTn1C53Vof6rszpNJnxaJ1Mts",
  "key18": "5dAafQdViNvEmiV4HTqP5EvmGKegHnZ16LLCMbQaDggTK8kWvUaBUWTW94PUeCs4u9XjEJpsS9tphP3G9CZVbrcG",
  "key19": "2ef5sP1qnsKazgM6PVryTAGx8r6NqBbRTDJazcMZJaS6BT9R2kqUKzgUiCM57QtW6mm1HnjG73Va627Wr5BS2ZxS",
  "key20": "3AAPhDCCYVcSHq17GJsWHTmbXdpPTuBL6WpJTj5zZwWebnL83hgn5UaaAmgwJmxAr6BVCe51fCpedsrRGD6GCn4n",
  "key21": "4D4tnJSnWB2bGQopTYhMsXAJS9uUhWEZaVr6BkLKxL4YzTnE9AHEMveiQc2T6UyGHeGn4T5d1W9RXvu55F82BcZ6",
  "key22": "GUQXd8NcgaKuckSwCAqhiiLpi3Q27kgBsq6aGQ9JiKZuRTtSj75FVE1zRasc5t368gCumWmZNoKSwrD3qF3FcbE",
  "key23": "5qrp81CzfkKJYvc4wvKseAS2GHyH6UPDFHc5Mn4iBBHXMYccCz3DQJ4T7XuKZbp5pkd9mafBBRPtEdd8BhZVhSEB",
  "key24": "4a9fRkEfXxb7yUCWU2AKXFTAEyUt7XerWf82opcZNCuyECLAApA5fdX7ci6agRVfHkpcZ9tqnsBDBQuH5NnUjDAY",
  "key25": "5FY8vLbMEDDkFsxsaYrBH4WNcopzsUvTJ8nFkR4XmkD5Yw8LVfmW1n8DozpJXgmTF72eM6DYMcqcFrrNoPGYJ4i2",
  "key26": "5GTUPf25QqH9FGSqMXzircWAptJT2nfAjnrZr4Wpuevi45iEzKMcRcfZZqRkK2kLK8Wj7RsmEZuvU3FLvdEXTi9m"
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
