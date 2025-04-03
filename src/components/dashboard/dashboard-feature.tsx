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
    "22eU8GktJSHEQsuT1o8fCWjAcu42sQKnk4PXQ1vUrc2ZfVjCUGUJhcaqT4P4VEK5XDr5H9qj61VVFXhQ2Hf4RhtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FN86vdNrR2CxoyTnuDtRS7TPe69n72u4Ruk5xYc3kPw7cg1PK3D3Tj4wnw1ajNZmzcmfpDQgMhLjPo6RLT1jNEu",
  "key1": "VcEtp5xoCcs77xmuh42FNZQ7DjVGZAvm3e2XHRa3zvyAn79sgidgRDwBdGTToZGf9Uc2MHyEkDu2pi1gV9vFCvd",
  "key2": "5NNqHpRAibVv3yRamrYTXvBKNLs13pD5UGMwtR7DZ9eNkCYE7pxobYvUUtsVg4qjnfKwTUSWRZkD7ey8wccQ4Por",
  "key3": "4UWuSatJmXpQBxvqw8gyhqhzQ9VxHXq9SvhUPg6ezBHRwgMzQew264Y6tDfbDJhqPNQHFsqtCAhoy2iCWecexWDc",
  "key4": "5pENbNtBmgxd33gT2GPVJjnAbLJ1HYWhaH6sPBu3Q5ks4THMZKqGtmTSSm6uzgxs4dureREsNygfjpcczesWY9JG",
  "key5": "3FJsd7BZ7GiVFSjYTRBhM8hNyKHJUspw1BnoHx5HWYrG3RnsFTHBqViB218HuY3aYfYfmuUChAELBsaryiQvbFbH",
  "key6": "2DrMsrBA9B4hGqBYgZT32rmdJDeT5WGrHXgJEyAj4QaMHDvBqjHcSqqM8hkkUbgNV6Y8ep8FWE8vghb1YHornTyc",
  "key7": "4xyNSQBjpwaEWvFyiyA6sEupf71m1EfmpAAqc4E3GXbkFnUEiGmfGDNdYaxrQChfZLy3ke1EZptbtSzXXNARLCVt",
  "key8": "2iW4LLeev8i8dnusbMzCRDvyKfsCtCgnPYozAfycP8ZACxgvB7yZP4JbQq14HQJUjKK2kca2hQSeiPZsPij4yx1m",
  "key9": "2THhGuwkJwJ2nvaqDfFqKAdGPKr8N1HaUPcLFiwwpcZ7BTDaCYvPd9GHPEYnPQRwJkmr42puaGmmjCRPPYsEh8bu",
  "key10": "675XnZMy939w9rjDiFPSPrHYBFRrRVtQfG6mvBA149ZcjUR5mcuCPVx2fALe6PDA3XTcLL2NpSjnF7suPeq1FZfm",
  "key11": "YsCwvM9273rUiQhQfaj2tmxC15qxXkJXCP5cW5n4qD2SbMpuuddcYSPfyPNnemZ6akYv1W63SE9RWPReYk65bEV",
  "key12": "YFcagSH3nUkEcP4iS5fS7ZFitAaXWQF1HWTHQq1EC2wM8t54iwndrhHFnWSDHJCMxseE8aWqfN52J3pfAqZ8B7T",
  "key13": "2Gx7XzLzR3MuFMFGjABs6JQqjnjNsFihpr5rBRuMJc3EPP1zYtfsgVjGFTEfNkEw7HDsQHwDt4TKV9shXySL3bdG",
  "key14": "3BtKApaDSnhY1my9qWhWsgDbUhRbSo6F31q2oyASD5cALaizAX2wg9mp8A7eGb83vMVp62ovdzJQXAU4eN68xCgY",
  "key15": "ZkVuPKMdhBxHH6EzD6GxSAsTccksV2HStCw3EFJrAhC8hSjuCR17yvxnB8k6hcGW5ZEz38eDkZ7v4sHEs17utkV",
  "key16": "36uCHbK1K3wkuGDncDfj5jo6tix9w2dPFHignjHR3AEGzZGFss4JWvR3XjWdQNo4ybyQ9CUc8FDjonZ1ct2xe4Cr",
  "key17": "hjBKC5QRAro9vqkFMFdFpUnooHY5B6Gt74GfagZRoPEN4GtAsioTu5uPfpGtBmPcLubD5DM4KNy58jtb3VB9kUj",
  "key18": "2wR9MmRCmeSKyRzPMSU9wDfmAQdAuurXyPUkmR894xiWGMEFJVHw2JNthFqd2M7VfgGLYdQqw7fYRSQeQF9eJ9YA",
  "key19": "2W7H9DaLYDyB3DUUux2rXMoPHnfrWvpJ2aNqK45c1GXJEGdnnbvSpdkvuiBzDHYDrBjUQdapEJhojyGPdmsv12V1",
  "key20": "51hYkPAkY29o4fw3EthK82aNXaUoeNjBaCPKCCyVaov6jyJZfE1ahKrCuup4pSuqLkRdGB2xbvsritBLQR5mFi7C",
  "key21": "4eep67Y3nzLR3em5DaJ5C2ro56g7GvC4bnRV7WrZec4Wjf5NZjuK7PmK2pY7pgK9aWncn7haur3sQrFXHNC5c3sJ",
  "key22": "3dZTtcpNetK9g4zDFcRzg7vnreuQVdV4diAWfBZNzaeV5v4aUTQrZr71wTUcJK17xP4mJwwFdCjArdYB7Jus35pC",
  "key23": "3VzScUUajiEPZ4PHZp8d1i26gHGQmdMkcbGVYXhRNcVBdNdbcAQMczYHFbRsH4hyybTV7hf3zBm8J5SwDDtVsU1b",
  "key24": "2vynFT3N4tE92YDQySjqd5QFP9zvzyrbbGySgBWjZ6GkEgc9z5xCmrKjHmsR2ZsKfzxSmGvNHD5MjQ6aG8eEje6S",
  "key25": "5HpERPSEYE4Tkdb1HEq64TNtiuSNFWsPAzmWhbiR5ragT1bGHoBj5Zj8RGcwXHhRNzsZM2q8ivfU1C7358GZSXzL",
  "key26": "MtSnSC7C6C94FMvJ5KxmbrtMmLTkxaA4ESseY4vn8RKAXQe5XL4vP1n6xHLK9pkzX1rw5N9CLhQPJ7FFn7yLtJi",
  "key27": "oHEmWw3kQxKFfxchoHSBcswhmitxfp5hPMLc81KXaVNy6WEWgpJa8JVWyHVRWJMr2T4dkAvwEAz9MZZVSFriNAi",
  "key28": "42VN1RUsfc7pH3B1bjJq2VVJbxwi7RYH4khuHHseUKRd3EaNAA92C8yd7SfqQon5Byu8Gisi3kjfHfzZYy1zDeHM",
  "key29": "5HkUy8W4ewtVd7z71FMH5MreXRJBXPvSuAahatiB4uJha8bKQLDvYCCXhiAD9sMHh38FEZQGupcRjXBZUT79eP5V",
  "key30": "LC5WXxndTh3npjEYcj3Zfwq9ED58UrSG5xqDb6LkTa1HsMMD6fouaYDC96UgET2yqF55Vc24XTJZP9aCrtiFB9r",
  "key31": "2iiGUPozzLdpbzNyppzHUYe5kR8BCcnBsomNupLuHgqKCsgzq6H5pYLum4ohCcF3LZ1GGFn178CL4VUbgHjZXHHs",
  "key32": "DDsYzckuZt6zChrQpV877HEqr74Avnyf5ytcacuYVZSajCh9DVRKhqcxR4gsxah6jje7e2YkaRX2KnDcqxAFeZr",
  "key33": "3Xq7gs6ZVZ2zpJi2shy7fY41jASed4oTcF8Ua8fe5Q9tzefUbzNjqXYAoqd9LZUAcoQYQcTVfToC5sHwL86gs554",
  "key34": "4gwUyhj3onVfGFaRBLkrmYzdufwrUA6eUXbnouSkg4mArDLLFRY796TvnMxtkcNm85EMivWA7dCWt9cVreXeGZDT",
  "key35": "5NrUE6iZqhH95PR4dU3bU6kfZJpT1rv3WUoG7ypNDBF2ZGhEJ154aMZ8c2W25RjJKw1Pk5ka5W2NniA33d6qRXjD",
  "key36": "4N2TLKKS17YsCZuZFwACTuQC2Gk6EAafatSTmbgW4pFc4RRy9uWohCuFsXgP3AQhrHgXdEUCV6hK4WdUhCPg4Ym6",
  "key37": "27pPPNNxnCED8LhGcNvVcZT1C47tHb1LhMBRyrSvQpFUGVk7fNH2nk4gp6huMazA11BYa68BaGVV8VFkZQSt5XXc",
  "key38": "3SY2aiNi1hSpqm7JGfbvMgW1MjM1uJhGLBM4DDjoLcjNct7QAcaBYNNdLA37BibmPmqjzJU8zK7jesokpAa3Th81",
  "key39": "2cuwFNgoZRbj9M4YeG9PZGDcyDVnEb1yMwtZE3RHpY9TSXBGfvt4U4c7XsVEfmN53Fz6xQ4Rb5a7FgjMG4nmHNYL",
  "key40": "5SHkHMCtp56PQB6dz6Bk5jr9btGZMZCRHWmo6f4pF1zXVjRtYJMGrc6ZDexcR2DyR8HftsAG19FRb3xn9S2kjcpw",
  "key41": "2ZofC1ZrAtmsZf3xRD74945JkL1vqwxGZM4vWBSp1RbzWVTJVwj81MpWuNP7CjDgpzUn9moy7ywbprTzdTouDgzh",
  "key42": "XifLZe8EBiBuWMDif1boj3jJNrdfdutUbFWMNZUjuihjh5D28ijw7NC3KfGh5PiAGERXeHwoqyN8TB4yJkPg6vC",
  "key43": "rXF3BDj8VuqR7krxwqNGNyWsc6CmV8qai9F9LV6bHFaUFNBmXnehaMjfWn3TimtQYLeDt1BdkHuumsAW9tYk6E8",
  "key44": "4sghtsEhnVwuuqCs9tLQrvWYnY9B3Tdizey2RnvDkP3cr2y5WDGrwqXac1GFy2GRjtGXDVuCTH7Kurdf5APcBwT2",
  "key45": "2vhhcZdt9f9ZVMfq8tth2nbMb39eTCbWcwEEtWd1dQjSeRYnMbL98K6rSE5QsScznRbmXptgZf9cjhtd97pAAKXR",
  "key46": "4hJqZgDQqbUj1pEZ1exL5jX3hX14bwpec3PQD6Ve7dJ7X1ffbG2XPRsVSfg5UY8UN6mi1Qbp9Lg7MfnyYfxX5egy",
  "key47": "622Jc8z3nWV7ZH5wg9tqPQoyJ1F93GVmTAog8JMy5sEJoGREGitM9bbLM8fmj1vyYUv4TNK6T9GeqyA85MwPHxJ1",
  "key48": "3APzqFXLRXLf6fMkwHt9eEKs3p8Skswb8VLXbUjRdJtf5RY1XotekJbwhkPQ1WNDmXAJfcB3S6MjWKWkxfAXT5Vp",
  "key49": "2GHZrTJn6v4j1MS7PLu9N3hvyFmEg4AdA4Z5yFx5peNqzPRA6vBJ9AFLBy2svxMc35gKFDc1Y3Tgm2PsxumqbcFq"
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
