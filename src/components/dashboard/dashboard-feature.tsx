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
    "3v7D3TJJfBxp71PnfJgwC6jrh3yc3UEijUtKfbTDS9C1ok4ZaPtvHxjTiKDa1KEoDkhCN69Mxq3zGsdaQeg5Z5Ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QyRXcxS96RarBvzMoXAN7dzccfMUdA6fTwNDutELzXspwMrGhHa7kVz5KixsmvBoTCHGam2eNvS4PKiRdsuVFUC",
  "key1": "5S4w6gQAPNEVhBh3w4wqentWSL3toyFRsTRgm9HpXbv2uRHoZNop1yUPB4gFXnXiScwzNFfcdwpfwVaeSfwaHgLG",
  "key2": "21bpFwopfNXBTWPKRnyZEvSK9K47kdvWuQPdH5uQ5o7zkArHB7sc2ERBvKV1EQucGJMft2upkmEwRtSzVorNXXtn",
  "key3": "4guevESpXvn6Gnh1gQ56cBKvcmehafWyBVQcNTdXYjtvthTaWoUpXaf3VnhMQbYuYTiywvrcfc8AWnWfHNUGckEd",
  "key4": "5tnF2X684QCJ91bsnyRzxF1mGj3e9dgCLTPdKLufWaECg6qw5dXG1Nn49sa7TsDFpvsCrtqV9P4zDKZqFiCV5Mmu",
  "key5": "63mju74Uq2Gk4BjhWuCRXjyq1FLjAKoxQHgfQ3rwfumMm71zxJgBSoCPCXZ8X1gHb6Cm1Ctb5e5BFi2MKrk7SQSN",
  "key6": "2sYnNL3JYwQucTG2Sgk71jcdaMxzgxUBh3Dx8NvvWupgar8fDWGSi6ZVLrUhgCbXx1WJKTCNBvxTNEXcz8WimXpJ",
  "key7": "3Amp8ofwG77YsFjXPyZJLSFQKh8zyZvx1WLZbZAb2hDDfMQ329BwgQ8qEgaGppoJT7RRw9z428aeMVKvrmDQwJSQ",
  "key8": "67du5M7yAvaxSDZ6cb1oATbJnGbbYpwYiuKwzjyiAC48FHTvat1L7iFthA5iRiNMNSJec7hADem5Fdw8sCrUMxGe",
  "key9": "4HdwEgdg4t3AFSad4qUWTWDAGF1XTMSdih3nQSH7wHu8Rp6DHq4nMiZ4qjHmvbkvUpUAnb4CvUqUzwYgzcpQgfNV",
  "key10": "3tCdj9DjEguhDCEueJMxfT5kkNCDbSpbdrY5K6TUveggSjyrgaMjR7CppWXjQBNphDXJs93dh7z58NYNaoFaNV9v",
  "key11": "3xy4N2sEuvhEqMy3NPJF7gHxB1YPWZXMLPQaN7tR3HRHNyt9fs5CZRGoaxPBF67xjMxLiTUijyzFBchtCZ9YgCjb",
  "key12": "4yATgs9KRgARAQgtmfLE1zhQnKHZ3M8cnfYmGioru1tMh3TdP2W4fReW8hgGyCzxxUUmJKMeK8BfdperTw3QmUs7",
  "key13": "4enA7wYb4q7381oz9Pw7MGtqerWqB9zZMe62gwXuM7hWRxwzXZQ5tXhRHBxQVntqevDM5RTnBGF9Zj4an14MtFW1",
  "key14": "jXanCXEaQ26gkn5qLdRKRTw1Mj26BULCsLVnPDUMYjq6ZEiebcj51edP9UtW1p9mK9xoCqMkygoh9y5MrCR2yRU",
  "key15": "4EhX7d26WQingeShfc3RUH1RVfWEEQxZv9utz5ZQciS4wor6ZMZov3quJJuHdPZzwhnyiYaXvFMxPpMLd1z2Cjjz",
  "key16": "2fRkaYNVo3eTdzXrbZJJYK9F6AP6U6pt2zn5cFjsJpKXvZRwaSHXT2fNguqtVozC8yayHE8rpCz9JfmW3GPsSB99",
  "key17": "2gJL4hKq7uCpU6iBA5wjHuzuyWEyw6DVn2rLxC3rtjPh5nJ25FqXiJTu84ZQL5gfFCEBTJVpZ58hYRYGPh5uppJF",
  "key18": "AHM33owuJpyk63FAVkEWtdXKAoBiX2HGLe3THPjHxUKpVuTKyJDvGr7ebsk8Y1gne16n16bJSXWxGHSgEtANpPa",
  "key19": "527W4772DTyvoj223cfFTREncM3AwjadEcZ2dgc1MBoHQ4ZWUtx2Qx2dki7iXSUAYhqc9ahXSvr2pzR7Vetjx7oP",
  "key20": "4Ugbe2G6TTcSbh7CKwSvAAU9dvwHCK3dDQuXcz7aJSobjHFhwkvH6xeXMJXqvo8dbmsJqDRgQre7cBnM3vnYnD1y",
  "key21": "2LevUBojXGhyvrXL5LjJ2DxRFE5c82ZdFfmyc24KbUhwS8krzweAEhH25GCU9R5L8QM9yPDLAK8RmDxESZRXJBYz",
  "key22": "4DaFsVSzTnpTDsXkM4cxE1nXg8JFCAbNy4NDRW8vuo6jFVhRfY3ruJ762VRNYQC44xveN8fBDaRzrAnof95kD2Pc",
  "key23": "VDmiy5euVpLQrkkmwtZ8RE3q77uxqU6bLJUHHnEKVNWvwtMA749yfb4swcneWKtE2bbhjwknP1L8ZF73r6sQxQD",
  "key24": "2RP6MuQA3ZKahhQzo9yLATQzFQNCGxXTKTCmycDHakNARUYYe3LEy8Sj3RAbSWgdZ3Syt3wNqx9btxrDaX3F1sTi",
  "key25": "5JHww8iXd4jn4wDGgHQQDhhBQH4FRB4H8GAbytw6wdea9qKhg1srTa9XVdKvEnD6GA7uNVATjEBTJVN2Aw3ZUKsY",
  "key26": "PwYf8x1Ky1JpKiLx4gjzaXXjaF967u7mq67HooGNFYnBtKNFfP9s6VcutWvYRtLibESriji3TGfJyXrnLfLcuKf",
  "key27": "2cYWsp2cVmAKuBeBDzbgwxznRBABkT5GxBUSggeVaqZijBG3vBykMr2VYKf69sE7n6Tjykzepk2Kk3s643jnCUWq",
  "key28": "2kFNvpbgh9TAad157tPPu7eWXyzYWmhHdo5bGDPpMepCwGmyq5nR5DERw4YsYB3tLvDXGL9g8FQ7DY37GmPZjYqY",
  "key29": "HLYt6GvKmdWGkCTnQ6X1Yg9GU5NVdHoNMFSaRahivC8WGiVdzGQEPC3bBeA5faaPMtUufWcfuKaRmi3AxRs9xgm",
  "key30": "VvaiSamj7bMWAUfasTM5RDE8iNxqeFSG7CETaVc4vyPgveFpuNJVu2QwXCrMZya7DVHPu5uC4XV7FyJmPzMNMu7",
  "key31": "3kk4YqxdCeCarvA4pjQGQmKmYhKE9ZXwnEtn89NUxASNGhAH9HgwJbyZoZjizDePgAU7CjqcmSHxwBRfTaLQRhrf",
  "key32": "5ccopZ7HfBmzSqcFjjVcgymasdxoz7BjxmBReysVwnx4q69s2QY6jQ8HR66gbZZ6kndmkaHaUANHGuXNfJ9k1vGK",
  "key33": "3n7mKEBt4GX2g4J2jmrymJT3WK3TdtUBonwf7htiiPSM8MVNZsPSbbP5DwrLynuCNUZZNgtVxMpXe8BUVJu3z1Pf",
  "key34": "5tJEmvPRr4FCmV4qNwAdhdHPf4GW5pVHfw6764aD7XY1fUBMDiTzcRp4UEYFguL9f4ZsVT2Vs2DRshgjrvdaAQCp",
  "key35": "2orgCe9aJDFxz7phPix8LtUWZ94iAbHR1tmhJHeR66T23WgvvLYyddNdJSUDdErETEy7ypkbVNNfXnQfcBUzZZFi",
  "key36": "2uJ9ccZBFr33C5fu3tynTAdZ7K6XxQpmUx7F17pC4afAKAxyirbk5AzL4cUxzLYZc1AaoqjrJ4cjgM1N4XVNVMGk",
  "key37": "5TMRdf7Ade2CM1KCMLNPrAwjBEY4K38RPsXjZShKa6jV6sS5VZqfEhBZfkwjkh8MqAZrKweA2WAShePLBmAEeUz9",
  "key38": "3Ub7nqiTgyrdWD2xkZXZ3XDErCLmYiM1SEjD97efXhSzPZBZr5RcZMA5WHxHv7dCBoJ6yU8Tjf3L3UmvYSaZwgUi",
  "key39": "3zVcZrcgaqKdvf5dvjUmti3rGfhi5MjXZK8Z1MAQdXAdUsStf5dPgzhD75GyNWHHsd61YX1nM7tvnWaGc7Y1jQZ1",
  "key40": "4iRvVqXUp1oyDNP9FKPR4s2x9uLrtNGqPzY9bZsWEFJcvNbptGxfv5bz9epRtE4gBgZ3UZwRgU27AWXF1jA1hSBX",
  "key41": "67UymLA3yNiNquqX11ZVVuCHBdnwLMBGQPguhWgZEHB1dMnXZJt4xTxXJhL8T1oudE51bUSCFbG1Jtq9DAMJ1eKH",
  "key42": "3Gd5itRbkK4DxivABEry5nTKauATWbTruCmMDLYyJKouQARkWfNDjQ1SzkErq2VsfG8qGbVLt4hy6Xtzn515RQpi",
  "key43": "4UV88BiPSqYF1UTunv8m1uNsR136kPUVE27oaUgbJb9qMDAfqKBNP1jNLsKKXx66ibsec9h7bAbkDQjBNaeCCNfL",
  "key44": "3WydwmiDvPvo5rzu7tHzuwBiuvQo19m17LpFiSzCDX7nYKPpitu8mTu6RSgKjppZAks767rSL3Jzz5T6VhHmmxEs",
  "key45": "2PvWFVk4dLtFkrAfvT35ZEiDTVNUFby28GR6fd4rHwdk1x6FqMmhKmv7qU2uqMEJ63LdBfRqzyW4LHLLsPcKJ39v",
  "key46": "3fnKiYJ2cddDfisx3tu8QGNwQvUHuKkMXjcez6qnsd3grbRc3qUfQYdj6U1E7KuwB5tcKKRW5bNQBXfDnidd3ZhG"
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
