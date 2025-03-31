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
    "6NksRnCUZ5ARBn57nPAa7Dk7e6MetrzvAmG9P2dHekXPYNGdBg7T1eA7kX1i9SwwkZGR32NhAqPtoBCrLJyKdXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EL7dx86hHBadVyr6HiWyUcaND9ibMhojQ6PgEcdNN5CRgW1HxZWZUMoo9SxRKEkwbrAaZu22CukApEsEsv3FoWS",
  "key1": "33XUZPsFzvC67aVK9BzkCh9k9ncATFYANruvEZnQ2f8BZwFXEbQwHhcnLANY3Aw8JGdiGT7xrYZKvwzpQPZSqb4w",
  "key2": "2tsWNxu4FbRWuU4D2YsZALQSYz7WgryQxN7WBgJQUVZMze6JGSo1kJ3t21ka3YAD69RP6W5aGhaoSnQNQDobDdnW",
  "key3": "5suMNbCLg3mR2rs2d4FqHVNUtPZcrB3Kdw4eLTTjx2uTRgsKi5GxSuq13S6PwMighvjNjzf3fJhGU7iQH18wU7Tn",
  "key4": "5k5t9KHzM6egZojR4PoYG39P1K9P6rBvafYffDHMdJUbMWCdTngRUWBUv2xQcH7irwCSaKmZo9muWH449RhW6fKF",
  "key5": "5x7Dtg3TF8wpeYNwYq2nwh9ZJmKERgvxkt8zhS8qbt6UukXqga13J3i7kPLranaXAkBXLyduoByY5mptNTgr8uSj",
  "key6": "4iFf4USadig6pCoBcBguz8VhwacE8fj2yFk7vXE9eZwMaKs1akKfXLyecfooK4nZFpoYfq1expQjkDx9URkTCd67",
  "key7": "52ZctsVmRachwiVmeJXAoucmGXaJF93BSRYCMKFbvL6YkCsx8KUqYumtedCyDixL8Phzamv3ZVs4zeXx2mATr18B",
  "key8": "2nrfCwQV4atnemv1y6mnS74TRDrumZhEZRfGdzM8qUx9XTpmTtkuw8vi3SQzHaFrfBSu3kWMUdazRUzTBJfKBMdG",
  "key9": "3tiaaF4tviYjd3rgJ6ZGV5FXdwCrSgXAd33mPKrBjq4kbJbzFye55MhzSw7nXn2y9imV5YX27rtgb5Ub7ZP7k1ty",
  "key10": "4HhtfaDaDLrsrseXvDTSNBgJtyKKXhTNMsYTnbeHvDG6iwt1x3LVoTjmSLJkps3fejcDUQWC8DWmJKmycdBP6iji",
  "key11": "4s3VYBdfFNDUJBpGP3EjftLUqiMercDmLDFNe4Eyk81KCCGUHHxVV6H5M4KkxDgXDzxvU1M7vePo3JdeNxbo7WV2",
  "key12": "4xecRi2W3VN8JkLX1Phn3YgS9bdkffBeeYQ8a7dLSmfdiaLs4CEsNVHrKwedZk27P7wsmbBHqRNYPk8fwLBtDWvC",
  "key13": "2QbxsmZsY8ku2B8YmC6KYXTYenz66n7XCLLY7TyMNV7xc6Q4wuYFTx4yVSezwjhctcApiE5wp3GPWSHpQGAndRux",
  "key14": "2PTgGFtVP8AYUB2wFfQgdyxeVeMgsXSr3KLrBrogT5FN8CoD9eHeFi7bADQXtGWyobjpdrT1dR3WiFhu7RdXFYrb",
  "key15": "b35QfDgBSwKy4yUjDaebyw6XvtP8QsKqiJjmgEEgmzs5JuSn69bFbw15j2VHXzNaoDcP6k6D9a9BHNNZ3aB1gXK",
  "key16": "4AA6TPbapjAUw7Z2g4ZZyVUiarfViWr64QCmTEsXLj4FJyJ8GV9pGCswXeijeTYnzvnVtLKoPHffwLMDFsf8ewYG",
  "key17": "3yTXc4yJxgYmZej7PYXwVRbBvc6FUn5oniKA9YGgEanBsdEniEaHPH7dLoSZGoTb7m1qZENxocd9YjMWwb9eU3Tx",
  "key18": "2uZxyHntHiqUYr7PQDQHtF43FgNGhfEMEtKryphKGG2KfB2TQ45uQkMngfBrWpJKkiNTbpLeZfJ9sLhzs7SY3K5",
  "key19": "5K96SHv6j7cSNVi2CPtENz3rYJA3dpZvk8phG7B3uDvNavuZdoiBPjprE8iwo9H47V6vxy7S9WVz376atgwaZ3GK",
  "key20": "3QuNL2twLqCgvtEffrAKg4Lri9Xv8iXpshyih9EVhZUZEScmigc9ARL8zggoVUdHjHrxxRPyptBJj8FRYu2ZvfMn",
  "key21": "4oVshCwFm1dKMgEjoHPzC2hLzcKNAKofJC8foBoeVs5Nrv57p6K6n27TrsX3i4Hv5iKMrkcryvGnRXSrdiZsuTRW",
  "key22": "veB3yMUnzgnJtR3ZEsRNXBXmzjzRYbnQ1d2jfDbu4mge7vA5nTVpkxp3gs4QJ9V2cgA3RenAmjmHKzjLppX736Y",
  "key23": "4WGcCjgMJPqqtLtTjsZuE3x21xYgspEpUPwNkWifb7R5VDgrn1s2hqEzePPovpQAGiYy1pJFf5r1tY9nD1Bn5gfs",
  "key24": "2NnTMZmjtFsAwctwyMR91FX4w1zL3YUXry29Z5zuL2aW44YDpMiKwoAtv8FhMgTb3gC3DtMyMK5bNZyYaB1mpYSW",
  "key25": "NnXzLJxbDR5pVwWcYK7hyvP6zjFceaw7qYfX4ukztrFftX55niNvyhavMQC8iF2HinXka3RSEodma4ZBaRm3qNT",
  "key26": "4Bc2Vgy9uamr4pfGv2jerWox9Xb2HKYY42Dc3Qk3Tw3JSJ6wyvbWKDC5GBn55o32LS5QuEYAb1E8AVDFeBc6sYcB",
  "key27": "xbEzsHBawKWxftDTbGgSZFBvzEe5mid31SJR9McLhCb5GKpDJg1NLu25q6GhjCWmekbccFh4Z8ezEqxVCoQftgy",
  "key28": "4tWP4JffRRSZp5b8WzEFExWgKmZihfWEpnP1Xy8D8smA9QdSszAPc3TEsgFFPLu8C5HcemcgfcQoy9NueYQELdQd",
  "key29": "3MBrdMUFXyqmk1gUiE48VPJUYue94bt7NwCCGVUBBxyt7SQbaJCqMmWDBAd1GFGNSFsUZupRy2XUMqaqkgbJuzvV",
  "key30": "32bdAVB5JydorThX5bd5iPBMyo2Msz2zePPQDYqEu2kTg8E1R2VAzkCBLHxcZuhiHYJFVXZJrqqLp895f2uqUkzd",
  "key31": "3FXFbfCjRhRzNc7VwPXvZ8hj4DsoJ9MYVPsuFzqW8mtqCRx7wvEdLHqL37QmSMwzj21hWhHAjUmEFcsKzciAgSZH",
  "key32": "4ZxShH2iGg6fuDheXnNqV2YQLHwkVXQGHm7syWtizbB9FeK94QgrCAmBRYz3KLP3dkNwL6gyRFTC6Kx51g8tDFX5",
  "key33": "2ZTme543FJUSf6t8yaqDr3nUKvEAWUQtWvqaN7fjhFkUrLis4fge58ESkcQgCUVqEMfpweiYmd3biNf9UrhGez8j",
  "key34": "3akg3XAcw27FZiZCqpSU6vMU5F7R8zoVeqJsPh35czMxKvxNL8fgVAVbVewycgPtxr8jvsogtQ35GYyv2Sby1XVv",
  "key35": "3ufYfz48rZb4xGuc2noxvvEMN3n5snwbiQSgzbdo7zc13m1bQahfPBwXuTWr2cxT8D2e2yCz9oyufvidmykrDMLh",
  "key36": "3otfbvG8R9kFmzcxjZDdSNAbsRUHkJhd3NTdGPbuasdZgn4ufF7cFoNQBskN1ibrp9cGk6mnZVWWdNXkZRKnzbXa",
  "key37": "2uAkCh7eaeR7HpmKDLh6Ce35CESeDpJ64hKejiwGsfjhvAmvVh6PKtcputUERYa5FvKrx7FYoyyMHYGfWvsKswi3",
  "key38": "3tVRNiNGwn5KVhnQQyUAJC59n9WNTYqRJK9p7qKd2JjV9aCCbZCkjZ7kVBC1ehQGKGrDTPjibKLXp6uLLdGbhucY",
  "key39": "DtEgDDhBC37yvC2yG1ubPMmFTrmha96YmnieErebCm1L792oD5qMmV5NnZ9UxogPcEiVrZsZnQd1baHs1b9yzFv",
  "key40": "GSWzWcyGB1ood86VxNuREijereNrm3VZpnjL8WnZA6NZSJumXN2HUywoYt5dG3GnvWJwPX965gB8wvWSnPmpDTB",
  "key41": "5rL3yY7xHJa8z3gxHCgEGGm2i7ZBKeRCVw1v8xMp135FZXnscsysczjs8grudiy5uX8Kih57SY31nymnAd9BGuVs",
  "key42": "393FYpNEKvZcneMGsvC9ni33rqbgVXbCdVamUwKi3q1u2bpHUwMgZLSBPa8KVuA2udChKqkm4AoohBZ1qr5S5d5s",
  "key43": "2V8RFPmFSX3cfmu4SQ2auYdzzWwuEJpKrcvDMCHDhCbDE57oqKN1xV2GQqzj8wRefroMk3V8uAcjZihpF3gkX7eX",
  "key44": "5V1Hj82U8DizzFeZZz1mGKjCRD2YZsLWYtaAnviNg4sxTvbZzXhgvjvshsUw2RgFGtSUXeR98jXQpwXu6cYsZzmf",
  "key45": "3sJ4GoHCEiZCSnp2QQfWjWb8hhk9SCQhY7hRo6PHBLWCyjRKAECJyKE48UuBYqWzHF8UtbtzNhf6vHEXvuW8NSfZ",
  "key46": "4DuV1B4fGjR3DCKBJJknbh3CV3JhqbM4bofLwbzHmXN9RFbgsMmwK9rQF75QU6vtr5pgtH1PSJxQbfDwT4e3EiWV"
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
