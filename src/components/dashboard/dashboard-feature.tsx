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
    "5fgtaVjNUXjxyFYwmNdUBsFHFzmTKB1oH24TEBSgMUqXwUn15kb41Uyjr5YZBoFLZkrBqtS8G5ErherR7pasp3Vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dS4ubJzdgQDCHBzfpBeadESRRhxubTYtnc66atCX8nGXf4Zeqk9Z1BkfrfqPqGZwDM697iF2fDup2YYqxvZRTeN",
  "key1": "2PJWmEmwznou7af8PV77HkUNY2Z3PkkMNpKZHA1LK5WFeqfU2cQ1St5JRE3PB2nmEEGs9jVFS18HhJwq7Dguobf6",
  "key2": "4oKWHMecWivQZg9wtnft4YafKgH87rxVLgWmEh5zGEV54sJ1CncCByYgUxw4jWhhhzciFvajMoxMnxGavNvKTd26",
  "key3": "3YFAWWMtGZboUCgQPYf7xAQ8wRTJSqU3rqo5vf9vAhu4bwB1nBMkE6mLneXYkvHvAWYQpx6RaniffuzXvWvBVgvd",
  "key4": "2Y7HHq5F4JX23RqvDgt8V4BdyVGmX2hmpLrhLX61peXQAKm1tMSB7Urff1x8naw5hBDHuHN44CK1cgMNq2eYHqQ3",
  "key5": "3eQ5jGPaND39rLzV15FGc2PRmGX5JCZXMA4TwTreCahk96HH4pTTiMZzTh8FxmpRe4rQjFGaK44i8U34yyHqPWpV",
  "key6": "zy6F1zrRW9J5VabQJZqVvE6TgsNVKdS7jz8gzXa8PYC2uhuYJPKcqJHi1CFj854hw1zDW98qUvW7xPb1SYGVQbG",
  "key7": "5DsZWKEzR4jpCousQMEPxsvkETseM2wmqbXViRkt8HHSjiTdLVijocMXn1jPRpSv9eQcX3EXAZud4D4bcSFDJ1cd",
  "key8": "2ZxcXiRVYz9E8PF2ejgycHYiBehZ1M2qu6qxZr5kdXSLeohZXGdUvm9gX74tDoi3agzvRPZoVUFSWarNdu7DK16r",
  "key9": "EUyrJZ8YWX4uqPuZyxamXxQULjredW7qtKvW3p5gF2VAFT4316kzynrz2q5h6NGXCG6JiMvVwdVthTW3aYmrfad",
  "key10": "4qMDNp4aFaU9oMF4SEeknhPPdWpfJTMsJRThNe6x5Q61rvkjP4U9w56LJd43w6jhuy8kLM4NoF4zVggcRStYixWx",
  "key11": "3qMbxCpgbh363fJ6tyxgzU1oeRa8MMKPKYBdccvCKccosztyVjtVctUudA2HhMrEZJsAsZTbjpDZBBuqdCpdHEn6",
  "key12": "62KqgQ1haG5dpTvfVTNnHHz2jaMCwEhoSSWGmFVDCJd6vB6is9SdJZr5i3K1nW8mXz23sW6xqbEdeRKPo2fdChkA",
  "key13": "5NmLibKT8myjPXjPS3notjwVPzVkZa7TopiEoM9zqjMj4s1DSMzLB3DSifx1Hhfwkta7psJWdweWeo9xqGUR5L2r",
  "key14": "2myDtZDAgdmiBy2qpdifq59Ye71ChWZJMwPM7mCAqKwL5dzdYeKJfFQCrvonEUqTEegt184y9d782yAQopZ7UgFJ",
  "key15": "SJQipdi18ASvuxZxDYD8EyBjambshxPay2W4mtYHVPJkn1N72ZWb4rpMhQVfc9q6ch9S7ZGEmCKEftXbNCHamKH",
  "key16": "M73XW6QPVTSs4vyFgPm2TjjGEycLNdUtJBnM8jUvhiViSQ5FkZgUGLprVFv3oyA2oo3Ajv6PESWLLbRNz3XucTT",
  "key17": "bwP7KEVShpeCeay6jWeCy4HBWnEhSmereCKcXEZ65xyebPmKxUtJxnFfbuE8Eh81djEztxjVpuVkcUH8LmXckBw",
  "key18": "2Qb2ZkLwnUKQSr85QSSFnsbk4hdt3iumXHMvDWsJYTsMGgErDxsVB8KyoEVDWevnS2uhhcpu8YnypMJ9gS4j8hrQ",
  "key19": "5JPDSPjYFGC96sNe5PDAb2dQrZco4CobuPZubZNsB5XiAz8G9TxhAyZhyM6Hnwo2nZHCik13XEJiGidreyD9Fiqn",
  "key20": "56fyeyGdLXZorzySy39AwtpzpoCiHEhmJXmUZdacDirQC6MeB5TGJSF2HGRF6zbHvn8irUXa2ZcgbdeUwhivrqcW",
  "key21": "3ynzziF4i8BNbr9q8e5bPHuGpEeG6XFuCacgs4vdwbmxdRKvAcQq82hk2JMvbiWQEpzxftuX1kjoit8oTvurdo35",
  "key22": "27TLhm9oxxyUjv69Lg7pDRz6G3PcqugMGHfec4vPUZbEm24oHSoqnWVGymyGncRCoWZB3aGCmHAJG2bEujm1UFgW",
  "key23": "3pHLQwDEGYAfsWdditAXCBUQwta43h57JoiureRYDA5VAiLgvNP9TxfyjcVZoMXSgc6tXmf6ZdEkVhHsp1qfsK2u",
  "key24": "3tgp1EXncpkwJFce1yBpxpPHszwm7xQzSPsydQxeXMim3EVfMd8861oJRBVWt2EVVzPuj6ZqBMjYSYofijnD6681",
  "key25": "54WkCghDLc5VwJTaZXj4oPmGDUeFLmApYit5dvSR8qWVWj1Abv8CpRMKoibhArbMg78kXKR5JZoNZemaeAK5Bfgv",
  "key26": "5M7NMdcJzmwAt1inEB4XiaSv8SJRekcXkfNsxF8kSwETQvF2KoKaHhrHprFMNe1SLELz4kRg2kRZuWQQLo9MbZLw",
  "key27": "4mPHRvyGbkbRJgFqbT5tBufxpAH5ncMamUDLF8FPF2UTk1s72PT5gr5At9tWMmCErJzYgxqcwt2PKdWcXgWNfJYp"
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
