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
    "5DQTUYP4ekvv7GgQYEYq29CC57BixHPEgn8C77NyMBfk1aWNDujsnbLH3hrarXXHRHtUzrLPg2hj77KLvRR9Ru89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37NZ3XE6cFbko2eXYvWYgvorPQPQTGpvqMm8PX8JosgXgiM8gzbZt3Z3BmFGpkRnYtxZskjphXZe3xsjwp6YWtD1",
  "key1": "4xCcZJr64qaNFg5Q2k15vWzFRQVnVkRnp9EECUku3W6fGJuUkZTvr9qXHXBVPY7aHgFgk4z3sWDAaWRmZML1pbaG",
  "key2": "moKKHXYgsUK1pokcon48Ksm6wSjnH1Qap56eYooNu3PucxzVCocoZBbFmJM6nuaZxayrJLMkEvYai8RYDALSBPr",
  "key3": "rrGsryqLWqUeJiWnvB8G11kyWcCUcUxHCoGG5EiC8TTXaaXuWEkixRQGqrUiWPpouEirtY5VMTufhAYs7gCZQNJ",
  "key4": "ZKxyKg7kKfhQPCmKiAtmhd6yE3JwiSoAUUKNRsZsngGkzUPmhbBg3wrpR8o4shQs7qbKqyXMkS4Aczhr439Nx4Q",
  "key5": "4emoXg3oHtZjkn6QR2DDKf8ZoZanicsekkQwvMNZhHE3GLC3BWRzPBC1Uyi571qxxAJ8Hg17NmSJw7oPesBKoC5",
  "key6": "3vXgzBXj6UEubsm3GyQD6JDM8DhHfkDXJWddqXb7MqrWZePfyEq5WyshrQhwvwEQG5VhWEMJEAB6TJXfMsExkduY",
  "key7": "4rFnyygNq8WhXsTNyuaF3iZA8pzGhckUcJYM19TsCpP3YYszHGnfHKa5SJhn9FVZb7HFxL1yHGBcRLpNkHdiu4Jd",
  "key8": "4MxGqRoo4pHYvW5yNZKC2m6pvFGu6w7rNLLBPTh7HqtaZouSQvMjxHsq8QX2jnx2QAbnvGtHaWRisKAQ9WyBrxKd",
  "key9": "7LisTTpiN9hurn8BpoDXWzLKk5LgeoN1SMzXKrLADk3YJ8TVrGi75pruNAw1GRXS9w6kB7DJK6XqK4iU9YWEow6",
  "key10": "2Bfj2cPRKCzBPe4z5DRorRNaNZWS3PHXgXomdgdS68hDC8wm6ZgB5shE4czH72HtqtfL67doi6wEicexNmvAxHW1",
  "key11": "RTQU3sVNfSbxQmCmRj4PnhE7xiFnE8aExHmNYaBHFv7czg6HayeAkD2yshSNAY8cwhh5f6ZF7XEC9FWshbSBoYS",
  "key12": "5WFNUKggiFztoxMGtVU31ogQHjCWy2uacUipP3ZPgRxXtXYvUHPrE18P2oiiGR2CViF5RxVtmJvzYzNWb7QUSEJT",
  "key13": "5CpXfgc2fj2G5WCiRCt9Hw49ae624oQk4JpNF7suNUE2qCMV2mEehvhkga6z4DXtWYFDSaFokKq2S5izCXBhBm6T",
  "key14": "2LYqWa3Mq2bHcPmkSH3aYGafkxLMsFXfjYNWYzyQ3NgCBwF9LMbqmEmF3t8ssWmGhoXU4esFeoNi5ZehggHVafmC",
  "key15": "Ue3LHB5nKB12dFHdwhugzkjSPDJ9kHEpJ9Jex3HBUtUz3ea7H9TQZfUTJG1BSP6n81PLNoqbBPYEKRpfD5vbSki",
  "key16": "4qunh93Zqrv92jqnyJAAGCDJg3MRFy18NKQsQSg7ywxPhJFaKAbfyejmn4Q2G73qKuY9dR3uDy2zYjfbM8MpW2Er",
  "key17": "5dsEpMxY7h88UDvuBVDzpdcsds4kyx8KMhPYj2dbkwZTzkcSbQ34UdAoBXUpmz9xWR96xU4vTfaf7rpwJuZwq94f",
  "key18": "3j8SQmtDnfXaY6MUdfdZRtPoZfXygbNKcRFFM9v4apoKg5HYbu82x3TSXW6jrjLhPZboG7reBJsNDRFPUR2eEcbU",
  "key19": "3vbgCZnRf4BHSGKA9KSUs4kx4fXNtapzKVh7vM7yxtQUPnAk2xN5xJ4btsukT6ArAJrotqos6Md9ocqveqA6U6zj",
  "key20": "dsu71KhpB3ATteguEz8Jzasu63v7pXHoNitwsBMWRnamt7YZvbEdepRGxgYSXxuvdZKQfkkF4pe8f4q3mQtE2ZW",
  "key21": "4etqdEZGvYHv8dckjFcGvMPkmmb8TdvXesj9R6JmEebScNcuyau5WX6W6Z8rKTLhUeCWesu97wxd5qzcLcVF5umA",
  "key22": "5BrpvdRvfNPaTtriqcDfLKEqmv1ZiNkhSFiWCLBouhkYpQnZUSeYm6W6kJHLJA4azya9rSq1HiXfu25o8szaCtYV",
  "key23": "5R6zw5HfmDrJeytYdAgd9X2swWFXCoSYFb23kFF6ecXALBqDmuzkwGnJcCtjxTeoaxSPEaZRuEWRr4FPf34reqkj",
  "key24": "2ErDiKWrRnmBth8fWqGGA4nJr6X4xJfimBCfhhBUwKiDVxeAQA2JwRZ9JjQByVmSVbBxjbAf39Z6drsxpCXd9Qz9",
  "key25": "471x9yK2Dk2qj6R1Pe4CX7ddySFbxVBziJnBeHp9VxvnkFLY92hdkxqnygyW91BvSpL5ra234n8NKjjNmSZDv7zo",
  "key26": "27tk3HdiMDn2eXYnzFwKDDHMfiRmk62UcNCmgFmMX3QKczv1e6xJzNGEDiUHNzVfhqegwLLjEEVFsQRKh1eTaYqd",
  "key27": "5Ly39w2hrCwf4pyLLH5TcZb7HpACrQiEsLr2CJAaS6oCyLiPbwag6knNjtX6oVEnjpeC5CAwm3E2BFq4esFXs2Cc",
  "key28": "5ja4UvZc9LXi455yP1Wsykz3fVCsndhauPq4yn55Nz2fiR31eKBoan3pXhTvSeVekKJe4eUCCq9mxqde4nJzae8h",
  "key29": "5JdrNeHZ5yGKGQP9ZdaTSxTC4vStuvQrKFYrKJi748NupVAdbN5ib2o2D14VQBJyk1WbC7ird8uPhwvCudepGYJ7",
  "key30": "4HNvBxGS3Q65no58YNP5zzig3ewB8S8gvFPdAK4ygaa71FycSzY8PFJ75kbYRvb8oFEVDChRBozQcYVEDVMJpJA1",
  "key31": "3jwnpUrT2e5yvJcBi9h6tU55kjNfNG1mvYBhQHrfrKiVHr3RED2DPcQaa9kfqvJsoeKfoui8vtLf48aWbGsLKnP2",
  "key32": "2mA1hvPmXUm2stPAKTJKqsyw73YbrSeeUhyfpPepkN3p2c4vbRb8dyjcdcnjcx2M7Podu29EHF1UnmaMzpXGEmH1",
  "key33": "VGHWDT9RookWhj7gPpe6oGV8DsRnUsvBZ28BPCbVCAT7g241g3rko1rDLVtUNp3MSNr5XEbcwPkEngTMBLqPCef",
  "key34": "2BNmrtKBn38oDZZrxpHb1JgeJRDqiwJ7ofFbGkEsp5KhRA385idRCFS8eAY3Gxi8MLwqbDw6CjcmB63iGxb5UEg1",
  "key35": "DfwA2Hfz1EJgd84Gk4hcjhPLzZqPrYx2FgtbJGCYvjcxwSh7UAKjASqni82Jmrn7HAv8tg7cUyJd7JRMXeE7UZy",
  "key36": "uqz1wH7gMuELaq2jBsAiAqXWa5wAhj9U8LdhQp5PopV1ppaay6JGHLFPGqqKua6qAbj9RQG6MrTV46Me432JCPL",
  "key37": "5rVBSsgf56yB4cDjwp5jkZvxwkp6TZpF8y6HBJGttzN8UxNUyjzgzU2aiMCjNj93dhfE5wLRomX2YgRmV7JQhCu3",
  "key38": "2crfxwVxkeRy2VvF2og2KQSgTMNAgmdp9wvzTybGA7aJRL7ac7yFVmEUURqPagrotPhp9FqcdSzVKtHJWXEJe16u",
  "key39": "5zYnVczggSkKfbmUpS5kXwMEexouQRcZeKJZYdTys7pKJsVYTswuaAdEoE4qk22TC9iPHFnSzU79GL16g4P9NeR1",
  "key40": "5eVXzULg9qy92FQM6JopuUi23D4cyy3kmrkj7uFwfyNw2MsYzhtqd2afnJDQyuZD1apNnyJsoUrkXpVfeoHATykg",
  "key41": "3EaAmxMvNvEWuJ2E6Mby55uRC1vjiApvVDNZfXeYEwJ1Y5Wqk8dkz8u7bBJS7VRqS7oAJpfjFW7xFHTxaVWd1qqL",
  "key42": "4J5wzEuBvQTsDSSaiFbquCxKQpBJPkQxBcjDrHC3z7GyoXDeEY25fHnT4wTDDHgHYYP1zApSV39m1Pp3jnyQHCYP",
  "key43": "5gYvogMuHp2dUrwKDWUXKVAUt74LvBP7wsQ5YrpGwcKXErmMMNfhdXGCDmFwRQq54htBQpwbAnMxk2J3QTmTqw9N",
  "key44": "4ijLNMQ9sF5KAsSmBNVMSK8qiETM7tRRijA2ZboNkzP6fpXYVWXrfPxjjAPpzpBEiYMaqVbZdy2aMRWAr58vVHFM",
  "key45": "taTM5ppQkj9wcfycWJvgMFdfopS2TnRExSjyaHLdiPhieGb64Ak1hwLbNTfsreZ4X9EsQcjCDJDFFkUmuZgprbF",
  "key46": "2ooSTnToSG6dvCngywCqKuBXfmMy4vkMDmJGYpTksvtKY3Tyow1y6ZRY9L6Pfy4P88NCF9NEVVWavixSLmikVB6B"
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
