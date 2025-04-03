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
    "23a4c38HPHXCximX8MGvq2AWpDCiRgdFyLG7ZivMC92vvuuAn6GmS59PJv5QT3R4Q1PPfpj3SKNegL4Np4mgFaQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Raw7kioqWLieqmpwDbwGTAKNXkqM6xf59E28JnLiFMEJBztK5EF65cW6uEUoUNLJHjK3Yj4xAx87tbBgumX7rKc",
  "key1": "52JZ7BZhe6TyNtWELGTjZBit18dABxbXzuZTLP1Uh7MdfVWGNtvQLmN1LPqVNqmyUTyqtPAAKvQrRLNzZDWgdiaq",
  "key2": "57NzaBFRZoxp4sd4RrBKVrqvqudP1FrFtmKxNPKzitE9atEAbiceZJPt6U6GpL1dEw47ouLnDnyGwXs5QMUomEf7",
  "key3": "5Js1V7dhoyYxCq4c7wGBNygmy8FAYLnubtcsLJyMtvmngJW6efVu1mQyXJ6WPFPG4DPXH9QbnpDFddQtb8e1cHPu",
  "key4": "3PBBtaKqzkap1ZEGXXF1WoZSKBTtEp2DvzRHJ5p96KAVcXqT3RZikoQ8HZLmo1X9Cj27J9f6N9pAM9xhXpBZoWLe",
  "key5": "2LKxmrWHUY9tMCUBm92iZG2DRihMYJiPJH5G8pPRQ5f61MFeTnaFT4hP4ax169FocspZdfwULd4rFjjnzAcKrWcd",
  "key6": "5RWTHRN3wJVFGVK3Db4kQbF3fvv4JrjwdbJ5TmizAT3qAmhspiFys1avDL5H2eT6YUQwP5FGgfSMQz93UhW2xiGz",
  "key7": "NWtLFPjKKgiVeHbFWh7wq9SzL7EGCNdP8UzuQcYdWG9tkCVFNGhGieHmagELeFPepDakb6yQgZrdmWsGK7GrLua",
  "key8": "32DRFW9taFU31xxtp6P2pwddmE6xyXw4AzStzRZhfqczwPdNrhbiHuncZsYX6ZGDsC4MsJwdu32XNJWLXKKGVb85",
  "key9": "2kcsrddwDmSG91GNGRGvRr4216Rag4rytYnxa9b7qBMAb71w2NFZ5iCXj9U2NhyWfbNp45WmJf7QEzCGaDt14pzD",
  "key10": "2aitKPWoMy5fdX657pieUB5BhH3iyUXhLAtCDpTUrmn77mFnBuFAN2cnT5CCzx2F1NHhefqvFevwBZRngYF8KMTm",
  "key11": "3aKMZ6STHaooLiF2mepUUbPY6hSS5HvHNZkngpRfrmhBxVE4ctxxq3iZLrjHTPBbEtsEUnVzfsgSW9ikPxUy9dU1",
  "key12": "2Rg8rqWj8D8HJC76R9uemu7x9pmNBrjjfXPv2efUgD6bVC39w8VmtJyniW4nk8S1H8G7Rdr9U1ymAGJPBqyoCZeS",
  "key13": "4RjEcXHLMEiScpmV1VYeAFuNCcpsPVm743nZK17DoNXaW4NeMdaXpH3R7ux67yygR6mNzcx1mFmaDfuoZgKYMEzJ",
  "key14": "22hHCp5i1jSrGjQ2qjAzEuPBvK1DN6Q8pYabFkH3XvhEbtfNxWzjZgnzyMm5MYGxCv8JxpmTgQ68jLp7WxUz44Kq",
  "key15": "2HP5dKjfoXyMCoFdvkVq22oLVQUZTNgDdbYDxZdc5wiyMkGLGbFVFHXAsxtm24ujo3PcB2Ftf5ZELqbNKpVLBA2v",
  "key16": "5xbdPwxAvSgNmTBqfMmsT9fdSijjaiXZoMAt14a2me7zP53xLZvWxAAnCuVKDHLmTzxedhwa3EiJCwJ1Y5k9gpyQ",
  "key17": "3V9fxM9hezbtFLtndvvzgSSVADp6c7NH2pAP5zx81WYnM3EcGQqGPndHLpjrSSUAAvf3DWwWkHKHSCVhENZoWy3Q",
  "key18": "39VfFZR8c4DXtossmt4n3Ty9ixob45zeVXv8XfuB93ZyeouHZLCn9ieGs86VwAWGKGVAvGJtSXANTPHX4HMfiUyx",
  "key19": "5tkvSTZ2HipWXp9qoEouESYHSitcJUoVW9KcfEfPrARNGHChp1b2qCUWaehwrJoD2zR8g7eVjbTGUG9cwkkM9NAW",
  "key20": "2VSTyt6Ck3qBzxALXP7dkW84Zxp6rY7J2LtXDnUJkGH15K5PGDLq84TDJ1UbZAECBaaDpbWiiXqYJYprSAxfqKPG",
  "key21": "2CeadpjXVKm9mckhvBnXPv5Mz1kVbM1JeFusDh62nDTZV5r1qVCRhGY5hjiMJ5ugiYd3XsKEDDJgYLoMfhe14Kby",
  "key22": "5X1zUDfFgvzwpmmLzuiWE9J9Ji1nv8mtugdk9BUrUS82nhpovzAkbxyF7Z4iip7s1CHSUFaNHHtoCqWhYnAr9aG8",
  "key23": "46V6VpjB9okDDRpE1x816LGDHbnYtdWxbnEtisteN1CsxzbvWuAcaAHx34TwJQX6WTtrJJ3u2BR2636V3U2geGUg",
  "key24": "21cuq9SqdUvuzHpuBBLCkGtGN2h18UWCpobArNWL9rQbbSckLa7Dy6HrttGaQMGKnNVWYaRknr9aQDf3ZjkD3chB",
  "key25": "5L7aYYpq6kbm45VgF71cYmpqq2ncrUJzJoSDEM67vbow4pugsihRPYq74wKyjnS46YGYDVuybTTdPnuYhVg6jzCm",
  "key26": "3A41jUU2U5j4Kt7GkPWt5U38PGKuQHQSmE8h3jAipbhH8CF7q9kjex2HezjoSgherPfiKdswS3fLGMeqDAA8D7MA",
  "key27": "bgDJhApg3TUWsqGVAeKK4EX5WTL5d9pGnkemhHqyH228d9bnYjoMH3MhSjutV6P1jx72y3Q2fFtqKVzxNtumnUj",
  "key28": "bLCR1BM6DzjSZLhoDFoy6JRuqRVH9dqofZMJXka52jgLwEpXPQrqtGuSNK6orp6FtNYWwr8KKVBF4quGzxtuHzK",
  "key29": "2rpRzfhJbDAgTsLcNpjwunmN7vPUFBrDfncxcsLbLw9z5ym3gNaD3bzEpbwSSMmjnQBVvYsg64VyonZW6Yi856QG",
  "key30": "3SriisdgbuDngGcrt2DFwmpaDD7jMCaRDFAPN8Zu1VMh9TtByHPwrJw1b3mRyyaSps1qo6Ua1yS2w6eCfzqLUqmi",
  "key31": "51p6fnZXXETp79SyCcbviTA7VZUmEZyaKsnJFkrZQ3n1Zpzy6pxVmGhKitnhA6zsyb93q6mA6nR8BvjGCP4gioPX",
  "key32": "4rBw86eRXZJiCi5ot56ZgAqGDR84RrL22syzRt12AvBxQojE1uvvYxXNyFHqvKFHaoeHLTrPL1VFWDGvDVEQrLav",
  "key33": "p9hXAw2Nks8ZK2UgT6UcdXikWrakAywGEUt5QZGmuRbaP868gcDHqXR7oSeGKuLdCYZPJpUq7x9gkYoVnZePMVn",
  "key34": "5xeKHUAKedPCGhBYFHpYbqGUJR6fnXkqAWZpFCpqj3f3yWoNNvjMBr5rJCvmFDGeYkduY7JwqDRf7nR9x1h5x8om",
  "key35": "4WCtBAEr82fM6EzAUG2tq8EwNPxLDtWQg14fWfKZmLXuxE2QJDMcV7vUEi9Ht56dFfJjTbu473DddFxTjm8qtLH1",
  "key36": "5AvRyWtvY3yTHyGTSkCrubtk6Z3wU1BsGybJoQYBT2dTdZRfH4FkrEUoYmyvTXAxHmXB4kjUbYqHmKspJ4hkAGSE",
  "key37": "4FFpDsa8c8S5fKTEK9AXkHgvnUxLoB8YYSAASssrUNfMrJwekEAvu77uZutF267udPYuvuU4SU6dXXmcAgrjwz8x",
  "key38": "USRYWSVexyqysyvHEPtyCGU2C6wXfiTU9vuiJwo1dyhrQRHgNiPm7MKguDWCb9GYi5YbNHvMQz5VpGB7Vk9j5Tq",
  "key39": "2srQKXS3gDpc5SKQvtwJc75t4VoEYaGV9gkx3sPXmY2XzRgcQPANiVjZD3KdnSeeXMMWa3QjkBjQbv4Lkpk3X2RH",
  "key40": "44b3kceMV8QXPqK2fBtwkc7hRkfxxYuWEvM5DLQwwAHqziLQifBp5zBuntSG7yuM3PPXntsoSZgq16kjDU9a7mGE",
  "key41": "PV2QQPZckc7Zy3DShn5YdUXenovSBPxvofX2AvQY5shdv9wLZNXbVFJZmgumadZdPC4VQCNfurtJUGZqc2mm3GM",
  "key42": "2gc9NTUJUM8PRVNux1kyeKVXCKk4pc7JSvNAotDcveeS3wdfdvpvj8hkJsCkwHJiWfbRHiNoR7NnYHzswibMMDjp",
  "key43": "5uFx23RpAhLsGEKFDiMqdDpxVSmeNH6twdMJDJo7QnAg7XUbbqjq8VMzZGoGU97Z1mkYSu7GDLrS3EAjv5BfMrdn",
  "key44": "5dGYa1AUTuYim96SccFvjJB6CWRdKqirkFL1DL3TLe2LevoCs91z7MqhXWTtxJqkTHW7gG77Z1ZMyKVwjfNFsS1n",
  "key45": "y6Zg5RKWT2qnW1j4GhBbZAYac1AAedemnRVy7ZBtteBu9roJyVAaDp81FsxbU5FwJvSP33FJwZVPhotzkQbUtiq"
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
