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
    "4oXjZmHHfc9K9fpZzPHR6fZc4RwRNLdsJLhqSfve4LYvBtkbPmVYT4HDmHvGTHcyFjFSp228AzF2Z5RJW4CmMJFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E6Br6ZKxAsYnRMJpPBRuSH12DRWVoyMfJYEZfa9vLApvARusqeyjK27E2gUerxVH13SbUecMgK7snarWZs7Ja3B",
  "key1": "3rGENc6bsqQXdKDrQfpuC46mA41K4Pam196usP1XEd6uqtY1ossGwx19ymKZZHSptFXzhoQxRo2jTZQLipH33qJx",
  "key2": "3sUk417hdBevNC5opqhXuNVYS74FRzEQcVrmJ2iceqULmnKDKSCD1FVpA7vnCcGMzuGNPmo8hty6U1FKu3sDhm3s",
  "key3": "5m2uxpKJYq9yFw1qC2VcA5sJQ9jdVLjrxSPAvEvZsEvxJs3wbCXMfgbprooApXvexsroC8Cx6umjPbu4dqSxNJ6K",
  "key4": "oBsz8wbvoPciPkUBu9R2EPxWhED8eaKKiYQLhVhP59fbjoBkoxGZsK6jBD3maLPZ46oJDPzv78VgvhvejugXpUs",
  "key5": "2JjZTRbwn4QJvdSwSRDeZukH3KBPHeUD4ZUyotpkysq3CFutXhi3dYSU6MrKg2gQJEN51tHDHA5dUfnUoYjoWg8u",
  "key6": "3DZ6GYE2HvLyhrDUQSwgQhA3x6sw3LtuqpmnPjn2iTR3aRn1ZxyQHWoHL3gbiMfBBNGsgxEXyrXwFWLZxdY2d5uJ",
  "key7": "3WEktvzDMfFgzHHLVJvy3jzD6oyW5RAnhyB3WBz8m2bRw9AQ2zwditr882GygKV9Svj8a6aiyHRadoja4YfxwkHJ",
  "key8": "4G7a2pacfhpEZaJ1EuuRrqvLmZ9FkyKhQuB9ehDpuGC5fEqLXWDsLJsts7UivHA8ADXcNXQnNiLRwmoYtZkd7xtS",
  "key9": "DdbFdcGm3PbBgTvU6RtvapPzrQ9dMLbHkuYtQKBBePtLgT3pMPdkU9ChMuUaqjemw3bKmnAcD59PnBfFDyLvWdM",
  "key10": "2XoJjKANGmRm8PKsaWPoYLnGhE7rMKSbNDvfmG8UKToMLsuwKgUihHmWvGPDH7sFdxRKWUYxZGbiiCXd9bowVoab",
  "key11": "2K5C7hbhQzh3q3rTSEPnLpVmtRReR2FsvAruns8oWS2AA57prqdJh6xrEHGCNBcW1AZrduJypgxMQnJ2PWKvQiRL",
  "key12": "2XXqwAViQmFyPH6eKJhMQ6S9KZYr5LXQ2qTqgF8EZA7Dj9jo4B3Qjs6s3rv3BHU4d6KFTTFK1gLnmeFVXqWy6wBT",
  "key13": "Zb7YVNHYVPpqjV1Cp3LLsHg6ZhQdZ1vhyv85VgtUTubHBSFVPifwcFeeijziWAEWU7ckvupnoDJkbcEZVjrMnwL",
  "key14": "4vcmkCpqc1UyfbRsaNazQMWt6AFsCs8BXub1DcNmapNsDsPjv7TW3aRLwbN9WSiU9G3HKGDjdxkfkm25fBcG3tzQ",
  "key15": "2aMTnap6QZPTZsvGxK37qpvhGw2JCJXahnzz96JfWinpRsdkVDpFGmvkagUBR6SWHveo6KzsvVpzzgWssMbuMFiM",
  "key16": "5G7A1neDEBoju5p8FWKomJCAH4nf758wQUxLUBQAHmxyA2F16Twj6ehPzGhBYEiWYUfCi7AF8wUWiAY9d2gRDnof",
  "key17": "cMQ8jbnQETvicDCKdHmPbo2G18oVbF92ffqXirwrHM61n4FkfdpxAz4SeJzugKosp6uSLGi2uxsyeAEAetzfBsU",
  "key18": "idtcZC5YYZWPLW9X6f55yZzHwzqKJYdjpXrdoghe9jwpajQ22kCfT3E8cZWRYytp9tfjhfqMW6jgPuzPmw7ETbc",
  "key19": "3r9nj1tUT6Q7CF5vPGa8PC32WcJ7pMKgqC7Y8Uihx3VeKwynPpxBg31omddVpdeCo5KNRebjcoMdE5F5mLL94fma",
  "key20": "56Uuj7cJXpVeqGN8sb7cndpuRsznLYaEwE6dSGYHXBbZux5sn2hjxgNNgQFh7MsyCMxG86cSHhxGnAvGjkhhe22u",
  "key21": "3K7iAaP1haaZ753g6R9fHFogYvG7hyMX14PCuA2N486PCZXr66UZNdH925Jfoa9jf6XeWhbvDvQnSEvpqfSovgB",
  "key22": "3Ab4ChAoiVcQpiqthShfxaucHZTBM7bCdb9j82pWmeUQbY5WwiWmjTpxamr47MSSGvrzpJzbj95FEAGKVvcMYBx",
  "key23": "27x12yi9v3KQQdDpeScxcLdiCHQP3xqdz1vtKC4qG2P7wgiwDkwqesoR4e9hbMhpwPPaRxSRWMFAH4gxbbYubbv3",
  "key24": "62pLrMsY5rPBopdYsWj5kFPaPTHdcGA9HRtPQvzi2EXNuD9BpSXefh5MoF9ecswRKxYuWXwp2ZjWwsWxxdiCPrty",
  "key25": "6k1gGAJYThh2NN46EuaffLK6DDeZhhAMk99KXDrKmhkjBbRNid9NKt49pWVhnG62XxFELcCjk9eFBizKDLQepKp",
  "key26": "58erEfGMxkAH3KGBpavZXC7emA1DAM4UW8YSvaFzusbyswza8td4Eha1dQmv4inT4neKV39EEWUrhPS9VmsqBeAT",
  "key27": "4RrQNwG8SPawzrcxQjWZSrwQniifShYeyPfouYnsL5spVF59po7SFfbfJBp9nCZ1igTThHXN7uEpZwXJDEnMpP8f",
  "key28": "2HCaQiaADEMZ1jdmBozHfdEjnrEj6rvBejp9amFpyCTg2pSBtVSJCPhbjngtMpB3RQcGgiDE7wNVLDqthKgdU3DS",
  "key29": "57pt75mUdLJy39eUA3hio4LftA47sWtdshvp4dhgUAqHgsdvyirUizoB7gZz9zukPHZGeTvKRLn95BtLmJ2ewTT7",
  "key30": "2PMemQw3YQYy6nGkx23FTpXbSkCeXsNRfSXttrutnZXdRyUaZrHiAmSgWV4ELzQrn9rzdKxrFRC5nbG9aS83QEo",
  "key31": "29b37BwntZDuUDvBKvGqqf6Lq2Rrx3icFfDFrnvhwpVfUL8itd1PXzfPD3eUbkfS8Nor6JiRkJZ2wYAjiSd6ntcA",
  "key32": "3tEi8nfNxwaZb2xRdy4816i95TgtJMzVfn3D1Rz9ESWEAHaJ8uE4ixqpWNd1uFHS5SbduU5uTmH9dwMjtJR7pMRh",
  "key33": "4myJatbpxX7EQBqTDFQKBgkjLUjfUzTu3Rb9fWQv2SmvF7YGU3VnJtLo57kzWF6uMQ7XCDz6h8ViLYnbYPFzdSfV",
  "key34": "peKBK7KT43XXYv25TvKDeb9s9HwgsobwwfiSRh4qU4PEgF7bZQFrtvUwwreAZPokv5ECDVyRxhS89sPseDZDBWZ",
  "key35": "333bn8z9EZ8hb2ESyEoKv9PA7kCswexvp3w2FJ1ferqUwHbBYSV8sbvVNT5TBHLj3U22dE1ifvqekiy92Wr3SpMu",
  "key36": "4MPmCi6TBXgmV69sGM4pEAJTnugtb5nPvoy8FWPMY3P5DYHxSW38bfK7b7fu4xPE4MAVKakvvamaQX8TFoz7MSzN",
  "key37": "35iWV7ZTxZBks2r5SCyJxLTCKV3GvFJnd3ArPjLrvkJLjMsnWmVYrD2zaBeTT9gN6XTdpWDdbKMMjYUKjz8SWPrS",
  "key38": "55ztnTGTVUkgPvSSF95QzFskjLD9X4B1jUydY4BdrhE3zJhZY24W93uuknqCwnBwaigau7qDSwBoxuV8rHhZZPL5",
  "key39": "63KM83kbAZMAx8T9rUtzouBLt3EA3d8JpNuRjRCgS5aM4n4m3x4vyJhn8PQgVygDb2sQrh74Fy7JqkYUZfAEALmk",
  "key40": "5jEPXYMHY1NYQwbTLDWHoWQY19Bhkb2GhXpw81XMP4sPcWshamp92zCYxgzPCSdjcZx7ZaaeN7rtSKDhhShRbULb",
  "key41": "6743grarpPRYmToZ9eYFEZcxBUcMbmL8WFqwZY51h3x7TmWdKw9vzQkojvBbDwp8d66bc7dZ2MWV8trRaktwdQRc",
  "key42": "482GS8nZEixx6RbYfcNqtdYdwEZTXH7JLXMAZ5vTKewu6XaXNQDWhoY5dZt6w3vj7afnHgr8bW3nv6zHQsrWk1zT"
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
