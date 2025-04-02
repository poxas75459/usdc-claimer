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
    "5EhRpWQ6e1T4ayUC1QJiCftCjYgNXFVqajNJsKgzQc3QRqxkejRaxqVWGpxY5KVJ49zxSNfsqsEXtEAi7zPMA7cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BmuB4zQdNQmdm6wmxKUq2jFZCtfb6r3RcJ9Xs7dSae6ZSatBKWaqVzXRN3ZJugzSuXgaRmLsNWjqPNFAW2byKpY",
  "key1": "3XDKGVdQY4GCESuvvF8XUDvZYFX5GWcynmBmdAtPWWnZTJ9ie2EdiabcL4KEmxAaDoA14DXp2sFbx2befrU5zRcJ",
  "key2": "3QZFFjbv5ajJWgRCjpaQWNPehsMttEEgSRih1HiyadKFEC8FzSjFxqNxE3smuMKR3CDBEZrw2xQfuiSZtdWXgTgB",
  "key3": "3jv5svLKmUgqwVo3KCJaiQjfVH8AuKm6D2S248Bahji2Mx3U4dgkKpENN8441kStKiY4UPj5xAbM5XPs1D7Djra",
  "key4": "4SSorCikXpmXw8XzC75vdizL5meaMDZzzMLEXHpRMfxxAvb6BcSanG861nrdTVCbrjgiEeLsjxbULSjykMkYWz9n",
  "key5": "4UGykavzNPBr9VpGFjK3MtRiNDEwUJVGzciLUdJukFXD8XLwSMjMRWWbyKeUmLH1DJtCQ3QE6m6LKPZ7hT3HWXL6",
  "key6": "4M1TjSi5hRetWedecveZVX8exCf6VF8WjCLSz3dQkaazu1jpKVv2rrPshw277AYqRsVxeVERCrWrxSwhxhqZmDPz",
  "key7": "3mbGXpJ3wR93ddJMP1GxxWMDaWUhCciur6bGHQQHTgQhJjyutuvswqQZfBF8kmaK3DWnVJVC82tmfucnPrgeSB82",
  "key8": "2pvn7Fcf47n35hwjDZAXAFif6btGoW1RkXJrabXLojmiZbbAbCX3Kw3pPi2XAUjuJFQ6SsamCGXzo7EX8G4LRtzy",
  "key9": "2tBasCiVhnJyNfCjPs13dTnziimeCf9i9FQwFtH4r4upBYLt7XxDebNuhDikMut67kGoGRkDXwvLGvYqzNYocZ4K",
  "key10": "4XAMJ7nM2eqMLgigkDFAce17APbWQxoiWd7dmqRqYSd32V62B5UBKTCP5n1SYER3R5PuEUUksrzHfTiaK1Cxzugd",
  "key11": "5o7t1nPhiRCkZx2hxJLCoz6gpXYMnY37tV5BoZ8CzUkbkKFum2D3b2b4AnCoyCwuXRwUkyFhmmiTLJvok9JaZ8pF",
  "key12": "24JZSjQUrQPDxnfZZALZnFzGdG9TtvyZDt41CaeKYZ2inFwemT55suhb5dJSgLbfzo2fCCthe37VHuWerzvdPXr9",
  "key13": "5PtmzSjsy7TuZEJK7HVCNKUAeQXSzxRDQxZLkxWDjvPry3nzXEGcZ99R5QXRtRZdVLhKhbWG4FN1oR3VM5mEGNK2",
  "key14": "3hUodToTLyTpf2Rd7Jx1tHyvKvBmQML4YiZ3HXdEHDeXRxXZoXtRaz1ohsqMcxuwj8sqCovhwFGk9rXipmUX4zVt",
  "key15": "639mUJUk3uGfNHhKxko31ppCmRJXwYbEaHBBe92NvmeiXyn8MNX9ooALwX1nnaUFnhAcmDk6BwSC4q4V5azK5eND",
  "key16": "26jVToyWRRx3z4AzsEeoH5h2Sj1j2etX8PnerbXvc8ZVLerJAmUsgHc73fpAyMS1eKPW5bDXdPJ4we4AkbxoatxB",
  "key17": "4CswhPBueYaiB4MhXmVKoRH138UxEKyCSHPHo3qxJC26dUHVLp7YPkhUvWUemgcmcsFLmEyLt9TVPk6qQ56Ao98u",
  "key18": "2suW78qbEWzSducwdm2JPR8hK8SshSpCtFC986Z2m2jpyrZoHXGJ2kBkihGNTvgV1DcnYCPsJQNwQbjokh5XrXJT",
  "key19": "51ScaWKBifEivBAUaXLXxd7zTLzvGsx57KqrpQydLirZgGvRqwJq4VrFi3okiv5L6RambCyDQj6RirQUzJdVfedR",
  "key20": "4rqexkWkt3JYMEsjruy3dhxT4PpUpzZ8EbzxJ4QZ2RGB2najMaXTFmVw27AoCBbhwfL13kEKBMLKAE6LEUDe6f5G",
  "key21": "59s7Z5CP7ipovCyz9YQMyXf88rwPYFfegJTKd9ZandYTFLTC1xedgmALrzY3DjvoNFELUJ98h9sWP8apnQmf1uqf",
  "key22": "4UnDpJqCQLwLPjVbC9d67mVUps2rP1akBHMnuEFa6FN7By6efRwE3FGUNDh8t1zqJywhYpZnn6pjUwYqdwSU7Jzp",
  "key23": "2jBqSjP2tU3zFZDo172qkN6h4RfWwT73oGjN2ieGnhA4UWaDj2CKT7yn5T6Nfp5j9KgxTkqwk8ZiFH2f5hqQ49Hq",
  "key24": "4nQsktgNNnqFebwmQPk7N4eLwv4v7VZssgvgwrGUjLNxZDa8LxvZBxZRsUWfDbpUs2z4EFVxrxQ6r8G64uvgqka2",
  "key25": "afDHvLqMgZnpZYYy9qhgvzhKaLo7BWXoyPScsLgxRP6JwFGFQ1fX2dkWitg9v3LynQg3aYfNsmxovmagLZmfNFG",
  "key26": "RRGzu87RuG13EWpqcuesRm36Lq6pCeNegmQt9Xao6kVsoCcMbnoEdnVmgzZa3p1WigxLuHD3jyFMsmy7Wkrg4FM",
  "key27": "3A69yjMaHQ27auB4v3y4RQsvbvqWr3BqXjjjkyFYd8NAQZczg3RnVh1gDo5yvzi6hsYuXR1fDfWVZoTJgYsmCyAU",
  "key28": "5qGQg2quCXkLDXUQhBoKv9YkzCAphb5eDjJ3Pvqw9ioNDMQixWyYVPQxCseQSoxsd1nA9T4DdaFZf1gQDrECMDgp",
  "key29": "5MSbJSm7ZjrCfSfgroySFgrMhMzVjQ32WRZeavGh33ZXy9wA6hRqxZf9Z68dCCMhYpPgf8SjkZX2KV5xczGLRKLW",
  "key30": "5Fpf8qUBM2nq9DsPnQ4BuzvcLMYkNna4VwA9zFZNMiYvbQvNpvGGnBTkA95EqiRz3MAU9c25rmkpV6wMzGJfQbuq",
  "key31": "4bhEGAkY3ds34b6kaW9pRWKFsqhKnCrw8rs5vkPXbQtkKHg13PH2VCeZZ74Lyez6wUUh3M6NF2fRmWHkiu9RV1Lt",
  "key32": "3kzhCJjyRwpRMqdke9anxiNAzjYtxKmcGF6DyPYvtjPWLNywKq8HHdWLyMroFR69k6rS19HKKEYfuGUP5WEGbAfj",
  "key33": "2n3CpcGLC1PFU58UgxWUfQBnPcBvUvCB4ChmmPeJJXso1VawgeBtpoxXVd9o8qQH4GFNE8WJKoi3mgZ7eVRU4LjN",
  "key34": "2wHFwavGa3SLKYdAhJ3vLuFm2FUsGRWb3hhnT9sn55FzCrFNWft2VaKJRT5x3VnvSHnzCn9pyfxYYVncwgyCd4WJ",
  "key35": "5P3mq6dmAaVrRyshtyJmfZuCuhuZP3K6THyMkxA3oXACL3ruBzkM8jV6UhyBSCAryk4xqpn1qLeFGRSPwMf2x6Rb",
  "key36": "2iegfCaBUQf3FxFschwFnLmko7EKu9gJxi4p4Wh23cNFYvqfgyqvsUQrgvVGxmyVGL58aaZRcVoDCdMqoWvNtAbT",
  "key37": "39xcozj9JZ1vLq4iMpDZfC6VQgis2TLZ7i69YVFnz2Uy1EdsWsJrLZXEeqtcToQQP3CmiXFashLLPPKJuGAv1umU",
  "key38": "22rgr4NcTuh9eucV5P5MZqqYV5uekZw6uaEZEByYSYgKSAhqfZaGM4U3yQ4LwGrVxWK7Q3sf7G3pWmAyY8c32tkw",
  "key39": "pjAaaXfu3Uj9EnGN8GtYiM1jhMGQ8JmWddpde7qDPjuTikZXm1kXAghrXTbns4RTQgbRviih25VddZokyf6C8MF",
  "key40": "2vwZbUnKmT68cM7pptEMN1Qn7n3UJkjXrfDKLCLYYPdhahdEZGur1CYJTb3389zT6kuDB6VrHgnBZXwH5ocgumQ3",
  "key41": "53nCvV3Rc6kVxyugMq4u7cHFHKqVAfZxWwWxVP1xY3JFGcyRBPb8XjX7eHRTUK2UyM4FYA4He8tDTF1ggji9HzyS",
  "key42": "45kzH57rMihgV1K4XqFrJxhZAVD5MoJAr5oR2wpcCaofHtYSZQw3gUysaWbtSDmrPY8fPobPZ1k7zszFYps2NKTd"
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
