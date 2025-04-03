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
    "5UVLCBWfd8UjozDCEhLYYvYPCEFCQJ576mmzHUp9PiySdWu8vL9ysynyKDkiQAtdS8KunD96QqHjanUfTT6oWZ8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ak3LKnj87qrYXcnzdhJtCSJZYLuhvN8fTnBvc95v6op7i2d8qZ88y3vP8kivwTSEXwSgmevyjMj8rGKWw4jGNE1",
  "key1": "GqUvirJ5Ta943y72bZXe5PMn29JesEmM9EK4uzBKzy3jGo8eodBC6W1AzM9vVY7q481cU2MfeGorXTaoJLB2Kns",
  "key2": "4EochdhPo9u33HBefExPa5JrwjpRjWunKUpS8nK67cQ9mLS5J3VaUkomuv2PAQfHsUCduzLZz6LCQcj7Ee6rMzfo",
  "key3": "sa1ptFnj6K3bbB4jP4C7XKzHU11vYktijnwMXm8rRwZEAmRv6nZNH2kwXRxTcrksMRj6cQ2rQCV46SZceeHpkeW",
  "key4": "5kshvk442UnDUNVgF5rBJpmuXMbJ5ZLrvoyAnDBTkaRkj2gN6fEbGaBe5eyEnuP1eLisqAq1cFmstFLPUNgcqeMy",
  "key5": "4TwRbF6e67S5477vwMo1LqdrrB24gsCrhuqQ976k5sMJWQgNEWfvUZiZ214ZiSy5jd3UdUQSWzk1Xfp2L9oT4xf7",
  "key6": "66pBfdkc3bJzYXTXmuqpUkMNcK3Wq3CWAQX99rSEYr4nMDrHt5HvZjPJziUfJgoZeknjw6x3mka1wEDjeukNTqJa",
  "key7": "3mrB1XRMtm8M92ia2qeW2zESdaG5uuvfRcHa9eFsD9S5A4Wmqwq4dX4CNNbfaXvudhwrMTnUTDaTjJi7pK2g742E",
  "key8": "4M7sTkZf6roHkuHNKJ93yjnHeHvfRLmdDgcEyzkGUdzsopH8fkBGnd2atD2sJ9nguYszwfHssMJnHooJDd3dxL2p",
  "key9": "4zWAH8zJ5bpSn6UaVBUTJ6BjRfzWNzmfo43FBMDGDjbi64TBVhFsVtynuyJGYwiEpYCvnUAHTJrNhAPpH4L28agX",
  "key10": "2DAGLVNV1G6AzGvSvZffYHxQEBqosueNZefyaneNFwGQAXY4jPxodrXHQ3QX1ceCT5xGw9im6HmKFvd1tGXEU76w",
  "key11": "4qNm56H2ZxJUqUjPMQ2wDfYaCZHuKTxSKLmt2EQpcVHBXy5uFGYoasubzDVu7UyuBxMFoN2QiJinx4pUNTo6RRN5",
  "key12": "3KSFJN2JjUhWVsS1fgWw72nSzRiUkdkmx47jPTecqr2dnV2hSENBpcXGyjJhcmFGLQDcq1qfSKEwGQhAWk6G8d9c",
  "key13": "4NTcua97nH97Cr8qrdD6rMJjCFSSyDqHmHKTu87LkPJJpxYFJPUyNrPEpR9pEyvddbkwRtMBeAUsBQMwJNhxJx3T",
  "key14": "4rXWrZHz9WyWtKokwPRYdijcD4PURnQqcvciBpAi5K3e1RMNHAwT3xzbAhB7rwk3ZQL3aVUXFG4xeeszgHiBK13L",
  "key15": "23m2GDQ7K1p2isn1bksPqwDJMc16d2iXHdzQfmzAjS6HaqpgWugEJ2ZKk9caGJnGjNCeNLjZR65rQK7CbtcVSKGV",
  "key16": "5EKBHwRuT2vanjrHeN3DJa9uaY7AbeRn5c3vfWASzyMh9pUR2jjNqyXBctK33nJDhcdWqi1juy2BcWweAHJhX7os",
  "key17": "2rfj3HGUymasuxjS7swwdxJtnwbYaK3xyKnrySDZUefR1oBp6oCtAPc46G8e2JR59JWoLhSzsbr1rJUhBVF49YDu",
  "key18": "2w3sg56HrTKjyktnHWVxtuivjDjiKaVkN22BWjDCmFxyJ7NGMJU7gRfYzHMtUhrHrWD32sXpKt8ujDaU3PAjisVh",
  "key19": "5nEviakq9QiuNDp15nAHnc8hvexY5STTSwX2UVUwu8e58QKikTFagkWpcHwcLFM8eSowrRsgM71K34SKJYCoCX3x",
  "key20": "3rn1LoBG6oF4f24ynMKhTCaaceeFDViv49dyZJSwLdrUgeMWSU68DjHxdZgc2ZvptzYCPVNEk1zVTJ7qHvLZanQi",
  "key21": "35V86VvjQuCmpiWSXAq2hqRmcG9vfpDubKVbj1eWd67QRACnfVyDqaPft1YoXBXAm6cH5V9gsF3v6shGEmggTLHe",
  "key22": "52SrTk5eLS75WYvggWYgrHDyT4N2EXnRuMCaKV2F7KHA2dCai49z8q9zhSgB3tCBwpuuwV9NRCvprQRoAufBznVz",
  "key23": "YqeMzDLVxP9k884xeBabFX7vqEbYQF6gDts4worLSD1oeC7pN6UAiJqPK3poQBKq7zUW9dzns1BNqsimrPbSFAJ",
  "key24": "64uJ5Bb8wgwjrobXwLM44FmbQbFuT4jCAJATKMhohkWcpiVbb1E9wFc49Gfyvk9ujT3Wf7iedw3M7UVRJtyFNKY8",
  "key25": "4zZ7wJxJMTmnktFLYBv8ucULd387b3bt2fQJSv7HttZRBYUiDVtQSCVkvHMCJRikaSyMUeFiEKBM5XkC82JPnJux",
  "key26": "38oUt6UhvnAyarwnGfQpbc2sdXyEKz35Um5pfpv8HvKaCTW5T2PTGX7Pgy7t9mbTQ9UNWyNy3QZV9Ppj1pRsNwdT",
  "key27": "28B9RHno3b7wA7YhfW6ZpwNgGXvifJGRdU3cNvvxRVyeeLuU3dNAWsh9dDAy6FD7NAf1AYoL9c19gr86xCrqXr4x",
  "key28": "2fCu6zcebez6oggbn3T9hx7NveAzXe6E9fNF6iPoqTjS1tKg9BBEnMaxB7PoiNWUPAf42MHSvFRWFCjK6ZFzEHe2",
  "key29": "4okVRqE4upv1v5ua9uFpQfNHjbY3CwSJm3hCSvBLaryTzZLcrH3Lc4J5KAV3wF37QsLwEmuQ3KzmCjGUsEcUyPgo",
  "key30": "2Hasq4287tdK8vp6Qmva62tH9LpNLCRqihfY77BzXEJXhhiC5PKLFJQcBVFAoE4iCei2WKhdVwhtBWujnEpmaKdG",
  "key31": "3GbYo24qxRkorUkiBufDBB57b4uRPv3fDasBTx6BWPdcvoMzjUbjWFoT8FXrqcCrK2GPNw2v3iRNVkLpjDjrcdqG",
  "key32": "32QnXcQQsF2JdW4AYnnmPRJA4Fm5gtrV6c32P7KX4SkcAtxuchRttmm9cHYKYXTP3hKJuwoyJrBuj3WWdmLDgoX5",
  "key33": "rzMgKssGZrYwM3CiKi3EPisS9iq2bCBfGEKxuKW7WXHMfSwzUTyBo4sCVXWLnW3rRczKnBVPPXna3sJcmPe9v84",
  "key34": "2kHrzccXfDpt9hSZk5TAVtfm7uoLnmSBXqQVQVnDBo6qFx3qUzjggqLHN4MCpypJGBnGFVCXCnDd1qmq5rwadjdB",
  "key35": "3w4EtoizKnCZi88p2MZwd75xkfcw6CaT5ZumS4oVqgJ3h2tYA4PEzTQKLd1wQLPsMkvRHhFkEiZ5hmJSfKrSYUW5",
  "key36": "3cHwTFz3imm8c25zs3ejmn6sFbajp8LyQZBUHR8ALBcszNADyvrvoDQgfi95zEPEcAGZuFkywHxEnt3ZiPLbib8B",
  "key37": "4J372MYbn8zbjKow2Sj2z8J7zccKzD8y1htZoa66TAqSyw6MFxyMTe6y5gSrbZxg2rTJ8vfUpEpPcES3gC52HD9D",
  "key38": "LyrZ3ACnE2DwnuuPVH6CmWGMmqAK4cy2gG2Hdwn3BLoPeKuzXeJ1MUEB7EkvMY7VY9Rg3Stc9MxfVheAddKndVm",
  "key39": "4TDcqFafLdc9YGxrWb17Lpr7ei1iWdivY2mLuHbCgGtqvb3g7exDTriEDCAFYv6FTnY4cxxa9ThTiVez7sFjEsMq",
  "key40": "3WbCUXkf92Py51xXGaTCboKJH4xw7LXn2zAxHoepUCpTPxPNAy337uPTaZ9bXdyJwvvBhoUSCD8HYoVW7Fv9Wy3p",
  "key41": "45yMmsBWx58up2B828W8bcX13sq9s183xaeNQqKdGy2LtnbiuBwHvkmkZPKmY9ZtVwvGMeQzadmcjJa5ZDXg33yq",
  "key42": "Ns8fSm6gkctACLh1dojax2gkKDrAVRXtTcZtUuE3WQcQSDtMHnyaphGXjHpeLGicNYcgdKGcjv4qkgaxjqCQo2d",
  "key43": "9q8MhwH3MdjZmgtoEvCWSHEseyqz44a6XSzPX5YYi8V9GQPPKBWG7BhEDsW5TEj7ghuSAss7cHwCKvQCCD918vp"
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
