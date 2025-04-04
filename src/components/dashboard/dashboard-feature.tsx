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
    "3uxYisAaCTesK8wJ1QLqvXkcDfBNTzLYfNcXXhxEWVtr8dVBK765rrfTWSfdwPH348VrH3ctdFjRSkDV7CB64VBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nhxvQ7hFZnU4LfwGM4E4p5ebrtSxo5mN5aNK7ukd3Eo6cK3p9RJTQdUiQyYzdKzXEQ7ArwYJvvzxvvzcfyryFng",
  "key1": "2QVHLBvj8d6Gy53dGem79rHoX5MwTkV98HkN3Zdm83cv4BY9Qm4MF51ndrQjGvPrTqNgSsoXwV2rmnVwoKZqzzU6",
  "key2": "4dSnQ7iGNK7mAuQa7pQwfCpyqZSaPHji7RaT5fU2tUasQnoDCnc9chpsU1buKNibseEJZUZxpVPSP78JAz1C8tnc",
  "key3": "2cZ4WWCmou8uYKqy5ikopuLuxgQgMt9oUgkvnEDhXdG7fWC6EKFW2vazydARdnv3s55U56YW26gdbcCGG4mUmFSo",
  "key4": "3Sh8nW8MB71L6a7nhFri3yiEerKeydXj1MmmfQW3RsS7MKC93LZBko8T6dwggjgxP1HAHwHrzLfsyPKr1WhV7RDY",
  "key5": "2etKwyUzhES6XWgB1iWuPvjvN2W8gdMyCBiYreodeGoieCGSoDNENjAgbBP1qC2PnJLRnjM9i47iVpra8f9CskeB",
  "key6": "2gDKyPfj7pr1QhbrDYhAawCSrAy4Nhy82UrNdzbRsSrnt4vdzVJCobazcDqX5ejLvxoN9L99kMJaLP3VNNEKpm3k",
  "key7": "3A2Q22Q7Le2BYShaDyrujcEqn9zUjLobBLcuPmKk1tGDkZErYTaP6sLNquy5NWyFZNPjz6qj5KN6j6Y2hHR4C81n",
  "key8": "3YEbzSJUQRPQS3MkiDkNreCnCCRr1s85nguYtxhJGSagPQ7u6iaydFBQGJheKQ99rNoidQ9iT6hJUabLU7rg9iEG",
  "key9": "KgcHAXGM3R7qhcexkoHGNCTLtaHyotuFiik4JF49Q8QR6aosBYtfdMw3EP65cJUfVJ1h39GXBv3A3JypXchM7LL",
  "key10": "22mcZQssBkb9B6RYesyuShZgWz68P7KmBx4esmVRcgL4TwtpG7kuKo7QuUvSzoiucT3uL5HKtsuWSX8JJyecuh6Z",
  "key11": "CeSTMqb6tSikntgvxT2sQwyVUVUKdjp8zYFZ7sdvMXBqRJQryFikTKW6VMZyJYwuBL8Bz5TGZwayvmHkYQ1b7u4",
  "key12": "4eLaY2GTgNeDjo21an1NmSSu1xF8ZkKKW9GNFkZaznV5zmNLnmvPpXt5vDxK3NoMdae6A4zpryYo6zHmyGcKRKiF",
  "key13": "4zQbLQ2E1AApzbqf8E3y5qf9LJ6CvoAnqy5MBNiFgtpH4WQyHx2NeJSGD5aZhBu1MQ6iKp7qxBofZzRf5HAwy6jY",
  "key14": "t4d66Wx4yat2Bakxad8iQeazWCacYtsfbmHWyHudZDV4itxfnejiycrXKFmuNNgGRmbKhk2oirGvLFUs6FMTbuf",
  "key15": "5edkQLBj79gotLBLhzRi6JQBSkC6eE2RsYVuMCmbEwp5VZ2Na3XEFEvzJL3ccPybbH5iycYkrkfZHb439ixiWHbv",
  "key16": "4yGtgdSnnGq1q2my8DeUPh4677CGmxmWapqYGz2GShMMkGHf93EvjyYGh9mNZLSU956Y2AJ2vkm77UZjrtWsxWLq",
  "key17": "5CkpqqB2mS89qQ7BEcGNVAKsDjR2HGseDedR6KTrZLk8xTZ5hPk4s2etX44eG7XtqXcc8WgN3bHZprXXDSsxJ2KK",
  "key18": "XrDEz5AmpUC11sDXKNtpmZoxyHSrTx1BxZSBXYpwN2waCLtu7Hr5TexsmcDYZFXP1uDTiHmemqwjKaMXT65MFx7",
  "key19": "2DC3H5Uq9GghpkRY2GcN9YcxcShw1wjPgqrUEksZzq9cR4o96LwtqodzAV4DpBsqnQvNoZmPU94ozCtHq3JmpUoo",
  "key20": "5dViZwT4ac6yb1mao7jycbkKNDWLGseVviJQ1MLm9aGJ4CZrJoyWP5YaGUgBbL6ZDZxjd4DnMHctWudTBs67VrgR",
  "key21": "3R2hKuHxNS9cMHZ2qWggfgEqp3sAkbvtoxh8Pm7SxLY2GE7FjnJKfDyEgJcmMqoJYqCLuSUtM11VuwR57z34tVBG",
  "key22": "33ARE3tNzq7fDv9VkEerNWDQ1scotHrxAb3JX44MpeGXYE6CoYXifAsJ7ketvDEf2LsWksFxqsE9h51Vo3h9qrSd",
  "key23": "N2LpQ3S2YfQ86i1123qTy8cuBzqdk7AjT38MHDGmjvpqFqP3GqW4zyFMsC2ZRT3XwbVjpwsMsq6EhkkKFA3B6Ls",
  "key24": "66eos6SY1idWnuRmLmDT3BPZbjP98QLoXcPHrPts7YsCaLDj9AfXYaA9h3PCGipQ59DgAv6sxFQp81or4pQPzPTX",
  "key25": "5VdhDErWnT8Bx3GErjDCQvxNpgbENVZGoRRRZ96QKy3kUkRvAnzY5kYPDuRhT1EK7FmPwyYtTFPu3cyPD2sQzhzF",
  "key26": "2mhEzqiydrBzJQa2oXCB8KnfZZTEZbSD5fwkmVR8tgtx7TiKGqiLekfWmKW5bQsHPXqMyLbhpq1HnEnzsQC6aRCp",
  "key27": "2FnLkFzhBWiQYGD4wDFe2QFvo8GXoK1AopXYvmxbyrqqqHMmipvubcHz4iRba3ShZdFLmkcLZkuSEYiKeqUnjiT",
  "key28": "BU3LunsUbkBbqSGSWWeeDQMUqe2UGx7XdyW985G5Vho98cNeevHtP6fr2oFq5HceMxRDtXFsaW3aNxgvtN8DCwN",
  "key29": "2NhBAN8SneFFCiKSGrBKoEvznUpaSuSqxAnEDUbpgVHWxJ8TpPCxKyQn89WJvLD8d2d1oRsvbsexxSHpEJhqqEtf",
  "key30": "3bL3LMDnUMP4VgwGSYT2LxceYSWvT37RK9zWy4LAm9i5zZbwLKfcr6V6i6KaM6yi9a7X3ZmaZDVGsrFXVfYKPr1d",
  "key31": "3eEbyMcGgVz23cfCJtEeBbRKrwS6gG5FAUfVvy9PphLfvWD9CXGcCAd4rwSzZWhBC57xJe5kpn5rbfEU8E9BnjXA",
  "key32": "HHQVtWzdLcBZPfN8q58rwsNmzijWbFsqALW2U7McH1haGC49i6HByqYn1zywdkTENX7BMXANP4PfDmQymMPzznG",
  "key33": "5XSZyhwcb6uxSwfWmvQ5bCQGC39Bc5o3HCxVuRMRGSJfAKNmNs8ASZR79ZCckHyVf1e4ytt5QqqrLa9A5AV2qKik",
  "key34": "259R6hrWT4BRA18XagZVpSLeMyJizXRWJhP8hmnvp3xBDzzFMrKwzKKxvJjJZ6DdU5p1SpP2SABMRjST4yeK2TcM",
  "key35": "5qyzDPn8MPx8KMCES1H81q3S64sd4fMaeKCzK3v8d5BEGcWEEAVXTpq23r9utgKBKpRSVp6uZrSJexeXSfz9B2QY",
  "key36": "4pmvXr9bqULmDfxZg9vV9p4TgK1ojA87VGA6LXkSHq7JMQQP4dW7awNTjuLX6WgHX2TTjsMEW6ikMs9qb8K1iStg",
  "key37": "2SZegZ8muctiATeKCNfqh9kwEcjmmPjHMKVhwCqPqwQ2yV9VGy5NTxXNxrbRhF9ogZdJkSmUgi6vKokRx9ch1CUo",
  "key38": "22XLyRrWFomD4ygfARXhatEmyikcvwpUpE2BKnKpvgHiKpNaALPc5DzidodVtSkeVz7EwX1of9XkiZc4JQHzFTfD"
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
