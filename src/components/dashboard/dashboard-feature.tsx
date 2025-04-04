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
    "5FGwynKTE9RRwHKMEkJSjvKuFw5a2D3poxmMx7qFbezkQjqWneKXkd2MSi5UhUhAQRmxdtZxDyjSmBu12RF8Na8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51dXiWxmV6xcWUZqo7bjzpGi7PB8WuZ1wkx94zxeRwRAVGKaMpprN5tsZ5x4J5SxGWRyL5rEbqBdV5Mvk3iX3x84",
  "key1": "35BPvM9umqSM2vdBvn9w87pshuKma6CFnJAYMZZGGn48BGhwccASRJp9Haf4b7j47V4VQo2rjGtwfszBvbhEwTbp",
  "key2": "skqspxsC7Ju486NVbVrjgMXuo4pRdaCaG87XgLyyEtc8rZmNW8bzNZAkk95kFbrEcXeCx5Ad6BKZ2ehUSWygufw",
  "key3": "o9ovy54UsLMxTFB8PyMBAqEHeNuRQY6URuoTr4y9WuFRPPa8wfcPzbSGVSBBULCzF5P2sJyrhJyZKzQRfyd83QB",
  "key4": "3oafMAgUmSuRq1jhebG2Kmf8tXSVLBc9iQnD6dUE6SrUPvSTBPWR6p4uJAinXBH9wirAZnXi5P6kvVFSS7cfK1Lv",
  "key5": "3Lg5oT9xA278EV2ij2qt4pqsfT5L7Es1wG99ZWKXbmQyVWQuuKumHnWQpGJDWwiuSnr4J4s8cgc1WKCuLgH663qQ",
  "key6": "2LXqjq6oaR2kAFYVHtxWHYbZHCLdyvcbDfLLwyavmTkFrBNKqH4xxDN2KXVowV68wdu4AYmTH91EFZnoSr2GUMgd",
  "key7": "9x5KfxUWmmPpa5CV1NLkoKbH7UaTS99E9w9e7F93DzkH4zA2GxcSvQY2ueTnTZ2AVEvY8x528fnGYw7hQkS2VQL",
  "key8": "2SGiXg8xYWBzEFY6XizEfTHEUTSKcqPhCZHBvqvwHZnnY8WK3rU8No5NKygocxaDiVKQ8Ju2aJgVdwjRgRBw4p9W",
  "key9": "4bGf95HZ9vzmgKYeydxAtFToK6iapV2evMSgeLZ4JvFi6RXoJQqAveGbFoRWDiwpexPFAsTmZwh9CqEN8wQbEqfj",
  "key10": "514oLDkG6VcLruy7ZtHye7KC8qDyg9qNsAarwWXyrsj3QWwYeZWXMgeExMkjrrrqTKDM2Yp29G5KSARUjG9EdKcz",
  "key11": "3ooWNYtpsVuZA7iti8roUX1tCmbEuB9jT1DRShuMERaXoYE5XUT8QyFHTnNgzcB6zgDqaCdmzfBcrwDr7xszBjLY",
  "key12": "P1Y1SBggsP2nduhVFJ9T6LCDGshf3eAqMgBf4SVte2SMFuEVnRv3WaLnsZ9UMwKcTCvAeGb6pHw3zLrDFn2vwE9",
  "key13": "3V9zFZg9WseQ23FRJpkHTQLZxq6PkH33BYRJWA9cDQJEbAJemuhux8sHiSFEt667h8GNwGUkTUWe3avVrsSCXVMq",
  "key14": "5zyyX3Fbkpw2cJwu2xnFysagRMaVKAPATYynpo8TYvG4fCWzL4Nd5M8F7TCHTAgpfw7u1o7v4JRt6RDU4pbZtKhW",
  "key15": "xuDZRero9nhnQHMN6Cs7vQhuEfCyEPgA5ctA2XrDtDos2oMWYuT3KgSWoQvCsNsmQ6kqNpJnu5TEdKmaVSC8E6Q",
  "key16": "4J7GPDxwoSuc4Jv37v1cfRjvrpdwcEXu1X8byti62DcyQg9tKdaw4MYXPPUpzvSJ3heCQks4UB9ofE4amybMaKMP",
  "key17": "47unRgqxu5QXeF43iPboDzSDzzsd4sgAi9YvQyTEqqSrsiT484p3pUhUuo9G6tsU8xj7sTQjYje47nFAUA9cEhxP",
  "key18": "5YF2N64gtHtRdvxgkVtwPKp1gfZLekRovcqspYLBkd6QdhVF67AFL9A1LA4HqcBfH7XmLyCCexhqtnNbCyR1pnAp",
  "key19": "3L157gfmn9vujj4zWnYTrAUR2r4P7suZoDrJPAci2PbBXyVcFmqVGDMokCPCRxpFqv4QLQTHHCvdnTJKqhXNeYtK",
  "key20": "2BdiXA1uhWwrQrn7sqFJXCpzpRoqamXiS4yVngqtbFe8iQcnoXuJWxwYnmywndmqg5nKzM9zVJWYy5qL15vJ1iyZ",
  "key21": "3kWDrYKwSazGjzuKnNg1ytr2fHUEz3PdrCMazP2Q9QTkVJgqDN17Xrq9j8mXHVG8XBmHWdKqKocqdHa7N4rr66sn",
  "key22": "3ygxArNmotDomKATi6wqd9qUrDY5cdwwK5ScHjNqLYwL4DeVpPpXobXEk1R23RkWUQicTxLD6wi4is55g54q2bAy",
  "key23": "3QaVg6xLkEoqzfgA7x6pJKVtGKFW7R5DZZQZNweEi5w7RSyWmmMg25NwhGkxwJSffKUAV4V9o9oCijZspxNRxcgc",
  "key24": "5y3YBs22st5ne5zyvaoCwWmNhXegXa1bJj3SyWnA4BESY4vWkVU8Xn3hLZaoHNDvwp7DNggzi6vWqcKEtEbVrm2E",
  "key25": "529Rk4pwHPTJHvBrr3iAo3o4iXdYXzoU9SnEtZZZLFLTcsPYozA5YmLkFCZqcYBDNpQYjUZfoosAGL8NSsrpcQLd",
  "key26": "38iY5bjsy3e1uxf2N5hcNY2bDfSjxswAQczsxCmQsQpEEtQbHFC9ztd8S3wcbvdhMcNmzHFvCFPGPEv2dHmL8B5D",
  "key27": "4koaktfy9vMWzH4GFSq4uy1EqxMuxS9BtkKXwjC7CyND82sMk9Uqd4qLX3ksoxUrTpns853J1D3DLQ4S1QJA7EZh",
  "key28": "2cHHXZa4eFyxqGZrUug7RxdBYA7i7T4MNUbKTjozfVTS2Zrc9PfqVQKxsX2iKeuVkTY2oyBoG8mcdwNB6PM56rT7",
  "key29": "58UWRDbWUefdWrMs4Bs5HeUFgGW57h3VitPCTrfcqFZw8QM6HhagVk1LZjeDvgJuykGm628NNx6H9p6gQoBiY4Gz",
  "key30": "5wg9XHw36uxwYt2SPb7uZRHhX8BQXFiVFY7iHFjVZLv8THjwFeE1yRefiDzomzZNRFDDLVahscC7zQKX3e638Guo",
  "key31": "22ergemQ5yAee4F8PTrVpu8mecKPpHMUnKacuCjVeEu8R1KYPKJq7MZa7yUE1JHnGbdSPMKqczMYTw6YSKDsi5ej",
  "key32": "4BrhwBEfwkCA2QeNUB8tzanv74JVxJKodQuwnbi7284K4MpJJbMDsFw1DjrFvSFqwJyuTHZF7Z5hJF9tivbaKL8i"
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
