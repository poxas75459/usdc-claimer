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
    "5qBn476PnoCsjGjSdzKYkTYdoUBKRuRX2UhwtKxzR34EJtfASvegQG8M1TrynYZGJL7qgtgNRcfRzQvjZVJQoj5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uaMjyDiutTanapgo3McdcLsnLP8iQkfTGyJGBN6svCkJFE53C7PaRTAPqktgR41N1eMo41kJeMwG5XF62AKGDt9",
  "key1": "3T6KfeFr2ppdj7sUvp1KRz1jXHDWX7oFxHnPZChvv6WVUXGTk4PL2f7WUvJMLVSCGxCPWXcdcGHzpS6gfvtvksi8",
  "key2": "5XFK3s6Vm6AphwwBmHxU86fsR4taXGHxmZX1Kws4oU1cCGeuRxyG9EEYuE44zRCDTkHoDv6VoDFRsmhz1zJJMZww",
  "key3": "5kRtFfmCjRK3sNaesxJNNvtzFpGfjb1MchdbMQWxsCiG63YthQ9N18bz7bgyGA9n2u16UZ3oC5k2SRnFRrbS9FBB",
  "key4": "56XcHes4sANr1pyAg7CrPWGQWReYxenLi8EL9ndJxrrynRVurZHbDsvycaJ9BkjGR7tnFvSHznkmAEVK8LCrsaEs",
  "key5": "3fDHcra4axbzfsfrrJNn139LAn2RCp3VZ5N3kM9cCtX9aWdaxpkDWGM21kAGSRhYGuzN5JYchjaX5XaPbY72wLv4",
  "key6": "2qVdWxHnJMZQTdjpuXFuYpQpj5Y4EyjN657PFpFHKxegz2tXeHLDRNFwTGBZP89P2cyRjfdvRrix76Qq4QTCpG9n",
  "key7": "36xQSXTRSfukpkcpfMxXtrn9nbVQg1jYFNDNqTF4U5bp5Mr4rDXmtu1A98ZPZiNYZNgvNznpVjR6Qk53uUEXJvfV",
  "key8": "32CynqcwXGfTg97ZsqhjWd8wvCXZ6bKwhpsWEy8zuVy1SKWsk2aY7BaiZ5fU6NftJB6gnXduYZTeEqmHSnkZEBgz",
  "key9": "2PDkMKzMfGsZq5NQW7EXesSKjWoS2BCYvw8fcprsUy3TBeXy97N1ZoiVwkWMZ6hiWv43vLuYhBAnhmM3ThyW6Any",
  "key10": "4UHKc1zQs84XZQbRNaoyntCbunNuuv6cLZC7NAQPFuANZ2GBzsBg76ko5E1P8131mU9HPQG6dLWsqpuT3ZwxvT3L",
  "key11": "66VHqsZtumhvi9scEtQvFu4J7bEMDaPV9VK52JqaVdcShiGjAMo76U1CYoyJEZFbC1xnpg8YaS8ZSby8x6s5RKrA",
  "key12": "2ypFSZugKXnUVJwEHUebo5H8Gyx4z4pQSvfWHBXeMqYit5m63ZdMSjhdtKe8Lhnar3vZ5STtxXGWUpPqTvnYkSTt",
  "key13": "44nyyhgiHS9ewwtYYwmCD7W6yYTjCt4iHvspDM7NV4cnMf68djvbWYMk7N8JCCRSr1MmfBSfAMsxziT6D5qoNrJW",
  "key14": "47kq5B8JQ5Kk9snpo8VQNZ3VxBwPPTHCTmmHVcnQBHHLshZ3SdbhvxgYoQd5Cq5wioLsRhTZAfzQjztZtHzD52Bs",
  "key15": "4vTEAvcLMGcfuyCMarH1dpMSdNgUga1mpiAUBWwy5ntwM8N9n4hNYMqoLsTcZmeu2fHPRWy1QsFU1fnwsQnAZ8Es",
  "key16": "3YUNakdDrgceswvntSrKFgLqaNC3kMBER3oeTkjAMJ8j3ZVVaUUR7y4ax2dnhqpZewmP5U4wHUZHVuV1pgE2DTWB",
  "key17": "3Vy1FyjA6YWN29CdDyvMCq4sZVoAUDxs1U9jMY2WMkdnr59DcoMdMz5LNXnuSpmSdfCyTSUGkMqdALKZY3wRYHTu",
  "key18": "5iawpXFgZTnqiDFqxa8Dj8MEtGzJpNcahY7tYLEapictGeZ7SK4idjJvi8yBAY8qfeY6Ha8DbLs9NKmatRvyk3XS",
  "key19": "9pt6qPyUhbmYCARovD4mjGG8xpZib7ioS4uuJEJtkqcqDK9Wr4x6vk3DDbdhF62xjb3sLrT9eCWcabx45DSyAP4",
  "key20": "2AfF8VkxeemCjnhAeTAuKcncQf7McRjsg2MUkEc1humEvCf7eCXayRAt8K3cgQSvRuFnZvD742rMgyFdgBW1UCDp",
  "key21": "5w6wofNq426942vSv9koc9wse1hELK3dufhTXggCECEGHaqLpB7boe4cGbGj24Vceosx2n4nFBnz3XhMt9z12pua",
  "key22": "3Yo8XauNafqx7bi8ihXWC2amGCYAUjqJFLLx8KsUiK8h8vHZsjGWZwVx1QLNLUTDGygk55eXfBYZ1VzQXS1SAvmF",
  "key23": "5mzYCr42Ja7gwx8PmLT3xFBgBfBvzgHksRaR91zaA31BzZJAqJVr2XjeVhcozgdLRobzh4ub6NYX43mGg5rCNBrE",
  "key24": "129RLPFiaxmcZbZ34eZjHdmiSYwop9uUzGoVuFWp56LvRrpjAWz5CSgSF6CM3DR8cu1pvZ4m4SMmiDBtTHYeQwrK",
  "key25": "3sMbxmHDeCHCcXCZSZF2iTdpvE6y1cHGtq3STkZXAxe2A1sKebRZt3EaJwe2dLNj8edZLoTjGhvSXrqx7smmatG5",
  "key26": "4RdYv2rpsghWEbJSM46NnHkRqxojXHNaHtiYNnnBC48CPjuj2n69itMsmxpnJT43p4MbBVRkwQ534tfC3CuPHfRH",
  "key27": "4ywYYjXdqeaBAkbprWRMCEXDLR6fFWYwFt3Hjd6yV7YQgXFcz7tkriXmNTWSt68U8Qs1AP6F8JQoT28LCzGBE5D9",
  "key28": "4RA2jnCgB2K8ysjkX9mfbvhPJ4fdCb2y5LY7LSKK65MUBjh7YcWPVUuBvkAm6sPHSUBKUcnPdVrsh7NYRJmvXNZM",
  "key29": "5EV8Ha3PuQ9dxcdSigB1ZmACw5dzxtbfXhp4hrQSqYfxyQjrARU5aVFXxjmppYBnq1AKAfbE3CvT6KNABJmvzffh",
  "key30": "5PKPkktViZFAdUpvDVwZGccLD56XuzknQETSqWkVGRJE7DSHB5cq4W7WCi2mGdSrWdwa1GptifwprZjFJfPW7sxd",
  "key31": "3VEtBG37FtS5PsNQ4SkfF2DgCQJbMjLfALQzDxg916zXTTHGKwGzWjqXugWRBLBsT85Xv9WqPHD2XdncKsyM29pw",
  "key32": "4VC5dWUNyMD7H62Eow5wm9sQQX6733JvbssCo1WRjyLL1SgbC11kkKUtCTQnJYXZ1CmPMeQysti5HXoeJ2UQBmci",
  "key33": "4zgvTecKpw3qBVM7LiM7D2fSp3RKvnhG6TQiuwU8Pv9Zd4o4GMjhtFTXjG4kCWNaYVDZCuyJ5n2jsu4hCMTc5VFi",
  "key34": "DgafEaG9KRKMgDeASxNUgPdKtUJZnDNTaJLfYyw58HzhUqbZm1X7rGn22dw7f3QSGXqy3naMATxEbDK1DRDnoVE",
  "key35": "5UXgxy3oetDQr3A62Yq41JEVhdoZ5qFds63oAfQjbZcu2Jz4kCXym9xvoh9SwomF6wz8zNEdzxFrKx2zv3P18qaM",
  "key36": "3jN4FjFJn2ma5mMYmC1qgeZnq8DhdJisEJ8tY4BjsC1NFyn6j1y4nySgg2rDiunKB9b9bgHyp2Y7BMz3ex5iCj7W",
  "key37": "2whLYpVvf7SL3bhXUunbKVdT66PKzKzbEWNy5yAkSU2HCTqywzPEsC8bhyqzqpCarDrBhqk276vtuEUxSMpbyGtN",
  "key38": "DdiHwLJCxpVkkAXPrxHSS1UA3nBjfoUiod8C1YPxB7z41maX9rNf8DfDrNBkCb8HLREupnWme9VVDAJk7PApL96",
  "key39": "3BMnLJgsbqaHoC8pcB6NdKrRzSBHLNrt2r9xtZ26srfGq33jsjcTePzGc8bBns3XAcj3x6Fv4hHvWcuyLEdHmaSL",
  "key40": "Prc2eUvpmFURS78HsKJ7NBWdVtaXsVgiFt7hPmBXmV3pmRVkcz1a41u1mkWw1FUPhL5UPgVLdy6WqdowfpqnBn7",
  "key41": "48WJsGtGxAQvRHNMWigLCukWVzJB7YtncpQYmTyXVirKr4cQdtjJLUnt6fBq4MVMjgp6MVnie8HejEZNNmjSZQR8",
  "key42": "2rxSkUk5rkrqcxg8k3uKxkByXJ2J9iSrTNmdAs1NKf48JRdGNM6DbdXYTUCsUMeXu5cnE7zUcTdjMYZ3mHbghR3t",
  "key43": "3gfS1x7qeyJbQ3Ee8XupZBsYCZUfo1eWmBURoKXspV6sp2qSmc9uscFd7CKpHmKETMvoZgW6Fy4rBz57wmLsunSd",
  "key44": "hiCU23mAamh92NiRSftGBogpATUR6vuTmG1k1Cm2prB45PPdLW9fkKLNjLdJ9fxH9Z45RvWFq8E5p7b1Qv2ogas"
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
