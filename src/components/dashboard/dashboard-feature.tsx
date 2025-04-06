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
    "tfbLFWDSyCgTAK3M52TQpT6AChJMG5wwys7eZsDP8dfJYxLejbFqD4MdWD2hVqQbBAwrpM7APhHUURByCJPdLi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hxwaPYKLX5hHWQHNpMWjsc6j1HhbNSFA9GrtBshWP4j1yXp9vscz9zuuyh5ikCUGCxro2c5CHfDJpLeg161cNy8",
  "key1": "2NQh4fzTRNir7BBKavcNGHWutJ16swxT816TLT3jnEi8SPxKjoCdosR3LYP7VqpSnTQANSrYDNGDA7x8FcGaBa2p",
  "key2": "614wLVhTsemkRgKoqGMrN9JRKm3TsyuJe86qRFyg61MKivBJHantrekjpfnNLw8zqx5AqWquzTiHQuJTxFHco9Yb",
  "key3": "2GvedKpvP3fmJbvnQPvPTVwzaPUSXgWQ4PcKzzqrWs2ucoxtYVPs1sm6GmYqSNs6vgBdSjswWsrMz5oqDxu5Jmo2",
  "key4": "5cUM487BpxPbGusN2NR8AoeQof3dmtnrxkP2o2wMuWf95Kou5fXp4jmKtwEFWdrkU4yxqKdom6BzcuyD74ciH2G3",
  "key5": "3atLy6yJzLoCaaxkSFmo8tQMF424rbPz2puPJNfGLWGJet9iWs3ycfkcmWKQcHP8Dmj1pMck6NDjweumU3Wr924S",
  "key6": "3XdPZ1mFDm9uxKZZhExgfGuzwnigw9TjaWPEN9nLETdn2p69NXqhwDnt5UE5L2Snydka7aGpyG7FS1CvX6xF2zrG",
  "key7": "2BdD3DuqosGbBnLLXmfvfQu5UoRNvqsrXMWh81NFr33iUpdNnVtuU4RGtZJzWZUBxHnAetHyLa3UC5VdQfQ7UmPz",
  "key8": "sJ4tWi75ijDeoRUMExkKqJvfmptPXJph81xfCZki2KiczJ7HL2xfuJ6mtn5F4QALkuGrYvLo2xjETfvYBLzUioH",
  "key9": "Vq86uXLzdX6iSotJ3AoNExtfd4tk4J19R5oFRUYz7x8XLEAUcTLwgFAiCVDJbijgssHYLWE9KK9UKrftoyK2hFj",
  "key10": "o9mvNfkaLzf6QLC82GxHiFP7XRdBsXvnjcaHXCgGdpQnqzd6DpzyG9pa1NtpXyhRsYpv6H82v7SGE87vTWCaN5M",
  "key11": "3wBKwH613vACTe5vrUgVsxPnrvRw7Yju9xtuE8AhPxRmuvE79dw8S1jNMp8Xg6uYEmwzL2mgTizg6ZX1H7aXXqa",
  "key12": "4LGWf9nziaJEChYYYTJGpVLkgbjuY47rU2EUFBw8bnbnCKNzQQMd3ZmmsSSrQrXRuVJpMkyvyP1MXQZF74u311p6",
  "key13": "52sLJUkVBNJuCJDknnVzz7sQeUH7twWqUfmsYrzewcivVcpKv4XxxG2u7nYL6TCniBTyWgei1pnBg1n93cUSTfHC",
  "key14": "67T9Sz2snAwGuShEoKY1EUpPkDatavfyPZ4T4XDavyTUwE3v8vHg1HzPELQY4z6SaaWinVwCih7jqztV7a1Gonkf",
  "key15": "4wUsExErP1XnAG8tgE3VbfGdGsBCvRbFZVxqiAw7jjjkv67BkWV38S444zyDoK671MsrJDRL5nW85WFHhpQTyCAG",
  "key16": "5HD2SKJhfVbsBbHEGByGQZyLmUwtDpyzjYdU7sWYs8HV5s51KtaKVj4NMwtNKDKLPghVNEArBdJKS5JFqUiSN8Lf",
  "key17": "3jEKe23dzCL9CEZkywJki9PmQgTLruS3z9Au4jDzyRN9r68fbDEyxN5aLd5C3e5zznFF7vjs4uJSqKm6xdu7RtY9",
  "key18": "7FrPjqCXh141rxW8yYmGgBSm8Bgn6jEnxkTbCcx4mQb2EEs3jkpsAtC7GP2QWK2qKN3VsTsqpvcfva29BBsBarg",
  "key19": "5Q1X99tZLmUZ4tYzDeT7iHCo1fq4RocXd7NnmSpPmzcVsqruCjFLdTCRAkhjYvSLJjcpTvUwLVk9C7GCDR7NC1Jr",
  "key20": "47uhemj6R4SKzKS78VcHL1srGGqsrHETAZZuRDrzrVVpaMrZUuTKPAmcdaXV9DAamjrZhVushF2c9mWEwLujjPBk",
  "key21": "izRnbdU2TPyKhAuUgyDkAeRU8uFAJcuqa4QqG61X797QddPsPLZsRLa3CNyX8Ac1JnFpCRt1exgy9fSCx3VQkYN",
  "key22": "2cLtsU2NsgBjjK83J5EtUf8W2yb8bLEHWfr68TE3WqRwceN577Xq54ZZbcgfYHKKdMUya8o4Cf4ddzuidrDFcs9q",
  "key23": "4PsFhfmSpT8KspAznnFMYiD3duQ6UrAkFwTygntARdsJxcfyptaXCjdxqbH1JiWZmUhJYHsGozC7ftd8YZzhvMTH",
  "key24": "661QwzcHE3xuCrtvSzqaVuru74qpwBEA16GSaezHJDTaoycUFNMYsC3WdBHF3cZNxFnqV5VXKtoCkgyhnrtqw6hj",
  "key25": "5REBEocYTcypZupLXq2CURJvQYtGhDyBsJEQxNq5Wm9xRrun3JCN1Qf2JaddAZQGvT2QmwdvJPs4SahHXSPRGJL4",
  "key26": "zrAzFM3D77Gwj2YhNmBBQXcjxB49RKtPDboX67ze4Fvjr4FZ9nVF3Ug1xLG8HRd24dsSGn3XNXyEFNAAroUYJ52",
  "key27": "Y4gdGAU8FZyu6Xm8BUPq4AZUWVYwpTX2wMgC6SgK6FAFG89yEbgvEsRxbwPY4YVCLgcpcyjJU4P7vpF4ieeYJ8r",
  "key28": "5kXoYJh2UBDfp7Dop4KAMgEFZu6fmBcR8Bb2TYzPc143rKWJUAGQog96CyKM13FRkQQYvNhREeJ9W12dqW2MbAz1",
  "key29": "63DW6D1gskcFnk9D1KXpHRCi5g4G5W3D7pXrXEEx12H1WMDrutq1UiFpzwfG1x9zHGro7PFg1iFgX5uDKW7HTMcS",
  "key30": "3QYE3rzuZXUA4DkBA4H42pZsnQdei7JcvurRyewPegsB82fo3bAeLPr2FCN3rHnfsSzWvga4Ut49De8KoZ3DpE7f",
  "key31": "3tS3LhxNPp25VLTh9vkrJyRdoiFhQjRQF7uYkmRoZsPpp8kSiSJXV2AAHwXfCVBHKR7x62p7yWdA2Hg6ZLwio4Xh",
  "key32": "3qvfFU6D7zeetkkjq3K8NKNP4ZW8u1JMf9Uv1cnpdVqiTTU18MzqdeNhdDfuDg6AedH9MAQB6mJddvGsJAbYiTpY",
  "key33": "5jM8q2DifqZceJvDa6HSAhP1TCrMPHHC6HpchZDhJr6x1zBYxTXKVxYpmXTeWbE7krVQ2h5GqgeJraGk8t8Fcq8B",
  "key34": "3HcpVgRzLdiHSs3rKtU4Cv6jeo2aDS1Ddm9KyoKWvT3bbbdBqW8JgPCYtswwcBbyuCMH43wkXUcuEqxCEwzHFsX3"
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
