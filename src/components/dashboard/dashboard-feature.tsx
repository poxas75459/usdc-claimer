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
    "nBeJkp8pQjCUxtZW5zUPPiBTQnxoopxbzQD5HmMEcmZySM3kH16rD21KvgY6NLcQyekGmQBPz45HJErVMX61gcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHb2UX1tKdBUQHeiPjNSdGfs4M65gridoBGCdT4SAotsXACTxd51if1b5NLJngi5y2G66UzW7cpTs55PaQhaMSN",
  "key1": "2g3YrRB62u5LQhKToTFAnDPifArkbAZpMy4AEzyt7G375cGGgKj1ziATJPfPgPCsPn3ZmNic99Pc3WaNYxyFZmod",
  "key2": "HHu27nioBnoboVzwW2vVrJEoUGjqJAd4rjo2atJ9NjmGYZ3TeB6CmpbFJPYPVfTcZRwweJZ5CkkiJJKfU6AGDVk",
  "key3": "4pJJi3P7EJhfS7FjeT1ZnujZZ3dZbZdEosVkCy9xnJd7KuQXnbjQZYKG5F8f6Yt8BGxZXjNgoprJFiwdgyVuDRJK",
  "key4": "2ciKtQ5r3JGrkMNR6FR5gsJezEbt5d5uZyEg7SGNv2QfR4NXRxBLnSpFudyMHGtRXmZ8vrzRRzmsUgEqirL5sXA5",
  "key5": "NhhgHGBgq14sbbynaJHJxC5rbWqM6qHksmm7qU9gbWud1EnuLq5gT47AvQgMBnQsfQf3a9XD9E7aG3x2rEd4cKe",
  "key6": "48NUryHLifeM8mGbG5m8LyMg3quiMShg9pD3tWhzL45GYTr28Yh97Fm5guSaaCHBMNE7jfQYJQnT7tvw1DS1rk9w",
  "key7": "2HQhXpp2fJATrhdGf23HhSC2n4fBpTJ5XTnJtPvRkCrkRkSRoLpq6oSripYsC6ghE6dWNAKceYJSShgFfK7d1339",
  "key8": "7jv2tYtBk6UBAAgsguuQsp6g1TwHM8h83NambrcdX7j9ZqhCHavXpSJjNnhhTsqCdJFAsHu7Bd5Q47kxwY1TYzg",
  "key9": "3f2LU5bccTYYAZtZPi9taCdev5VrLxa6wj1ByfAPkphs3j7uYrDugvYKjNuj8TiTyMtR4Dee4yiK6sPiguYTQCVV",
  "key10": "4ej7JJDi8MwobJ6yRKHnRcokwVgFCT5Y5kNSJiGifuDZpGe4WscAErZhgjThMKWUTfLPG7t5hA9rSbUXBaTaLLRn",
  "key11": "2D3xMBa6iZi5NkTun5JmujbhuF6tHyYpfZS84qPBkFUjykiy7vj5pxuucG5PBmKg7TQVbbmAxoxvUj2dQQFcjM9T",
  "key12": "XeBEk9eJh9Wd8P6osaX1xwnAtCJp6jju43i6bZ5BmN8M5Z5qJknXWdCiqRP6GiUbjF6NBh1BUWBeEE4GwWV1e8D",
  "key13": "motpLMihmWX2GLWcKNC8iQKEpfhTPk8QfeUh4k2fcAhhdVCxbFxvVvSrGPgLkq9yDxVJTYs93o65wzXHhK7zNAE",
  "key14": "5p5rr6ya4pxwEX4PM1nG4eJZuzPQY5ksWVR6rWW2Q9fcutAj18BnFrySWA34Ge5kVqY3X9uVt6pv92tRZ5N7YU9U",
  "key15": "5F7LZmf8xaAZZzpbF4VQwVf7XcNCyXMsAigVdUL4xrAGx32E1zhkmV2Qzwta7fapVyHkQFTuZkEwD5992PB7g6hH",
  "key16": "5ChHDZiiKLVKCpmcn7mDn2SnnxAfsi3sJvxCufPERm4t7cwiHCyiJa1txyTcfLE4nt8uxKfcgXDedSJVmeziwvPT",
  "key17": "3BgB8mzbQdbuB8PpNFPvP8vkPiLdCjFUyLvDJCTj9Rcx2R6AEwFkHTH9VDjZMhRA8QQQupX7LvLUmGkbupXPno8y",
  "key18": "5bt5GZteFgFx3q2ctW2pPhCcT1jQnkmEYHaChyQQowinZLZ7XmH2Hmm7SbJTitCAiea6GtGUsemFgKXN9WbW9sHG",
  "key19": "5DNKiaNLCwJP6Y62kWVFKv4WPm5CBYd9XWzxyrza7AXwWHRXmmpsWfuNnX2gs4ELECyNeCG68iAqDfBtZK4YBCRR",
  "key20": "4Y48G5tMswgc82WNsJJvEtSFMSNJ3wn6UAcEBFTFjG4Sq9Q5SM5aShbeK8trZprrnf9ZuQ88VTanSDJRmx7TGc3X",
  "key21": "5X7iLe97SFrJ9VbzSLhZAzExHM6ZEQmBkNSMyT8o7YsoyNUorLjjL9yx4eG1qCiZ4D4NUVW2uhGoZuECNjsvCL51",
  "key22": "2WuxioSE2efnohg7VxabMwhxGYW8phgdPfGWDzBv98aNMbxfbQoAu9u2cXAxcdz7CZNg6vTNHMFLjt2eWaF7Zm7v",
  "key23": "4vT6aLX2Eu5kuMaXAwL1dGs3ogAx6gjeRA4F5aTE3P3F3V5VXhJbutaJhwpA1FjpRzq3sztr5mKxwipzST4dNTGP",
  "key24": "5AMWWCUvwKSm4HsokJnevuoAz6wLAF3yCUdNG5FXRoyxy3cRToBmzBmt595E2iH8sYCLvZ7ULMzcZnzmPLQdTFKP",
  "key25": "2xrfze3Q7bi5MnFvrMHPnD8N1JPyU3u3jfcRSPZh3WegH4NnFa5xYDPdHTyjKzMAJJKFu2QwzKnVmn7SeKH6crvT",
  "key26": "5CHsPq46gaxF47VMpLjfrubEqJmoGiwUxtyEn8fnQws9aj8ELFJBTo65XzEWU1qGjCJkBcfaxoYSA4tuvmhBCFU4",
  "key27": "5BZFn1UA9UotHKasz9Vvk5WSZxxcjUBXnYDzQEmtBC1BKRn1M1CfLubVXvSpMdiKcA48vZoALPVZT82QXuktnnLC",
  "key28": "3SF7mwRa2vpHatTBkbffcJs6oDaXLaTo759TTWf4A6BRc1W67UcozmLxjeRMEJTUFKEj3K8XWuqUPFpztGyZWwUr",
  "key29": "4MZeETSUDKsYq7qU9gztbNWT3dBBsPrxtHz85vqbhSCbTJhQZxWBStACKwxB5uUGf7jq4xVKFrEye4i2UfmczPqW",
  "key30": "4RaZMaNXpdomRMpAXo2q2fEWYMUrpXkE6suWrwjggL7Kegrw77NEbTGqa1Xt7Vvay61HqiGjsWLRdAs3iK5GMWE1",
  "key31": "2ZtYJa32YwXoGtoZwyuym9j29wotZNct71L3sZGwNiCahiLVpXKosvKALMBXkyTD5huTfPQJj83fknWwpYixR473",
  "key32": "hHiX3hZTAJNiiVctFn1Pnig6RJT8shyrtqwQFeUEHL8Yr2uyVVmNRBAiuPXySBHPdpVkRFmYF8qUYzRprB3V7sh",
  "key33": "5w7XxaaXxP86StwEUP1c8M35CithipSqbXoy3RenG8cdocM98cNoTepN79quUNjtEmL6FjJdTY3r9fzwzB8baTDQ",
  "key34": "2TXK2sdFzBqZX13QuUuNjXvPoNs8GVnFmGCMCrPy5vtB4ZBgE2uC4bp5zT9zt4S2pV39eFpMVyg9sNixiwPYd2tK",
  "key35": "4aHoop1p9sPjwGLHhuXx6qydGD8vR7ybjkei2J7gdUpQ8BeKZxXw9D4ZxqRgBoA4v1xVJKto86LBZDtGn1Lvc3to",
  "key36": "61QqCHddLsoHJdHN15oXGG14CCYQ9GB65fEqEb7F4DWfbuDH6fAT6xafRjuX5gUiAy2wNTwrh4RLdjvcDu3q3UC7",
  "key37": "2F3XTuJJsYkXjQWfxtuvfxkHrDJVzV9KLJviY254hugZ829psPiQ1hZ1Gd41JWzCR5xM3mXCpyR648RGDCCyZpaS",
  "key38": "2JmHzaHkpV8ukHz93WdEP4CnDhMj3GadGd2wxby9ewfyKC2PWZg883k8w3AFYGYf9TtfrDG7t2KMEFrBVV9b7qg4",
  "key39": "5xW5qT4m9qbrH23ueU7gzBRSzbbcteNtxWsed4Krq5u8sFshFRHmH78kjQBsUuiE3mPeTyzCkBob7bGBufSErdXy",
  "key40": "4Zm73GUtnKmRjnaLpTGAFcbrMfmxMWPtLoEMAmHtysGfS7wk64sbWb6dCyPAga7os22mArBgu5sXP25ZmcqWDDuV",
  "key41": "2bD2UoxxEhKfTsx4hC5LLHjq7t2MhADdNRJK9MWbqQFFhJTG1XPaGEEJhuB12k4Bw3jse1XmU3n5Lt7uG1iB52gU",
  "key42": "rFD3NE1rz1hMwYDR6iGD35yKvJnDRFAzHQToNZKirq8zn6b2zQvuULx1jVvgFqnwuRNGuyCkscB8bgJs6tFdW4Z",
  "key43": "2nVfomeYt8Ai37S3kqJjQmktuXUpDgUQkuLirMXB63Pn7PHtCza55s8o7kNz4DiYp66UezbZtRWNxeSw6yZ3f2f1",
  "key44": "5P8H8o5LdqF5EDQCv8Wc1tb4YiaN39QPjeS698PasajysyWZYJKdZh7M4FUaH4qEGY6aH5eSo6wSDhbHDnnELNYc",
  "key45": "4tUeTtkbtw1Lp9mTZK44n9mqDjYKMMGD3jccp8wAV6KG3jnnpFnh5XYv4CVeTjybbVKbfBisdvCsovRSBjyKhaxJ",
  "key46": "4Zf7MdfxdzGtUe4QKZHPkvQBPeG6Cips9wMTdmzemuZuML6LAz8VKGbN71LcGtavSUuH1596CFrqhxttT4wgBGzZ",
  "key47": "4Sh6nBVt2pTEUs4J8VeX2Qs6W4CiPfzBTDg8aN7Ls4XQqqXFApG623j96LZBCLy3A7yskXv6aA9MaJ6HeedW3uFA"
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
