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
    "49pWUcNMn865MwtumsgzTkuKH1Mi78rWhKpgBzprgbh4bSQRryK6KHGyVY5m9gmrJPcWb2xsuM4Y8DhmaVMifj8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35uuyr94tvXc935Tqmoa5VYTUbTxju3Hy8VBbD3YcfQsoMm7uA34FNAPYebK48mesWczg5SvoX9D3iXUJ2KjkV29",
  "key1": "4NamUWL6oY4UFUEYVZxVeGgeACpEdKKkWMuYweHXQiitVx87Yv1vga8vC62ma9mZSw335BSUDDMHDZNk4x44f2Ng",
  "key2": "2KYM8kqqqBVWR2C58wPJQC6Jj1sw6KBZXagzApXiZdTXjfQNrxAvgspvQE37fs23FSczgh3mBFCp2QRxfTAS1qkK",
  "key3": "wniRRbdiygeWJ8NpUKfyuEHSe7Tb1661R6GoXzi4AfWKQKKoYuPGQ8CQNFRYndR6ArmoL3WMmdPGuGKkvspGbgx",
  "key4": "5WK9GsERf6JqQEC13gtdL9Zpn5BtS7esBksQ2b6B8FsCYMYhwsKz7yYoban2JnStPUTLTEdABvXBy9CzEi7ey8Aj",
  "key5": "4o7vRNSLKUUXbgV2BYGKpCYY564riBZdRfKAAMBZ7gLkctVLjUnpCHt5kAwkeG6EofpBv6wtDrKbyJVC5rqhDR7p",
  "key6": "2VxUcxm6P2CyXNFaqwqVFwdmDyLReP1mrxdJdv8AHbjwWGRtwgCLzmPDNZk1xKpTKicH3XAK5zmzMgTWvKwMEcSn",
  "key7": "4PN82VFnLhmJR2mMJuL1iceecMccVdZZkhX54gRxXcgSow42MR8bB4WPxVWxs9CuDVecA7Tr3ZuBBWL2HSLzGTaW",
  "key8": "4Yuxh1uUjJ6qvF9sKWJL5XWvFVxnGBREv6MjqQfdinYPfyy6FTYitDo3kUtv1dTyXGsD4oFaw6zWK9RxaEtuturr",
  "key9": "5WsQR48dpBt98JswyNNjJ6aZnFktPSSDcNqL2qVukDgoh74SkHUTMRDNqa3f2G6yJa4zrf5CNmBVyzkPmXEPwvoX",
  "key10": "2CW3AfA7vtY8YqEhtNadkdd8uPv6tYnQp13e9BRoRdEAuXJJikyFs1xQFkz5sL37CKt5WesqrySyoDBETTUXjYDD",
  "key11": "4fpeg2EYwZwjWq7s2Nku88xahccbCuzbXJiD6EWu3C3BrM8ZjxNjKjYeqEacuvMeU9PgJTiHamY6cEzUjqSAJJJb",
  "key12": "2sSdZDKPfLzxmVpo7qkt9HibNxX3CwFebYu69hn8Va7rP8PHz7bMicf8vBSjYJhzTquw429yfuPXGaQxsPC7uq8Y",
  "key13": "5i5cMCBGTDXG114vzu1JZqJ9cTd8trYJtMaqroNkbrNi6c7VeKE9HJ7BnusMaWYKfv4gTjRgSZxZwhLiw586Xhrd",
  "key14": "3WgTiKvxf5kkY11pF8yapkRjArkKGT3RfFsVfXwgeH3yrCaKLJB9pvQ6tXcU1r5j3zhmMNh7PRwpXAgwf5NbKTiE",
  "key15": "5vrbGTgTFRsCme1g3Xztq37jZZzYiq9tKkBhAthCzRqhvsBXbUaEePEGyKNyPRMPkxpwCjqbJ8raciRLpc9PyWpF",
  "key16": "eMdbvunjtWdSuDcLDJnVE92Y4AbZqVW63eSfa8v79PhGwvf3mZzd3Qoz4JT5VQ1DggUBt6WvkFLLxoErZLdCfGq",
  "key17": "4ekQeQWkxx21TkiRYPcoX46NZRpBeGW9m7KbGtiNwnRbiG1eaqpDUafe6VDcHnAeoePsp1xHHWuSnUnxCBvQ6txF",
  "key18": "2wkVZqq8Mn58eaLmtbhFWwQt7SwZ4rPCTgzJVEmMS2LqdpA1cTgMJMDsiyk7TwnSSHbUevNgtUWbrgrQL3sNtVNy",
  "key19": "4bYhvQUL9qUWa32jeMbRBQssNUK7o7qcZDFZnRuxa432PibGyw8p2eJYYq2mq73FDZ41qdzySnqSGTgzKgQzL59J",
  "key20": "2QcwnbM2smY4tvXdmVhnzCc5Z3RgPQgWTstKcQ38JcZBWKkaaYVJrd1g4YafzknoS3cxevwch4f4wDJ6VGuTs95m",
  "key21": "5mYa93Mqhkc2dHs45vYLiJ2XgubcdBsXvc5sT2nQxWSz7NXzP1b6cuvBsTegBr3qZtYodwAykMk8fFonUtkvPrGX",
  "key22": "41pG3zBHsTSCDp5EV8ijSjzkfTBs2DArgz8dHv88YKuqegtCWeMDsLVKwwXUnHkr1s5oMi3TLqvU891E5pq7nsKC",
  "key23": "4etL99aH2titeKMEV8Qo9918WWpu1fbZtsF1aHr88BvQ7zeojWdLBAvGVcqN57CHkLe34MA7XA1Tg8NQb155KYMP",
  "key24": "63MwjbWWj742AEMSqc78wqM4muzjnfmmiLBAUqHbdRwkTKQhfeWMaLMkw7DvmgPoVaGpvSYtY2GnbvPUCiut1VvE",
  "key25": "3twmW7orJhhcDh86iA8buxkqC4GfBWB3G4QXcfztD6RC3qdxp97t8LqZcRgFaGC2KkghQF63d43s6s4yxxPGCifW"
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
