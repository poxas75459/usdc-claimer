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
    "GktK9q1SZgNha3iie65g8FxjMg3QyRYDjxbug8rKiJsHsFjpH2hMpgapXH2khDPGJ6QAJQSYMJmhteVz9rd8VMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBoMM2TmoevANbYF5VWay4HiBSQF2cLh7mmp1DDuuifK6rKYv72iaq168jKxxq1xxojTMn3RznKfuTKrfbHW5mT",
  "key1": "4FJT2dE5EbHWuapiwG1WrsQfSrjSxZQE2Q1pV7dSZDRxBvEJYDNWzonTyG7r62AYzbewkV8k5KdAHYXVtPdoH1vd",
  "key2": "2iqf3TmgNxnMp7kqvbkZrVjkm9kvPiw4hkPBWCygJD6ogC5g7EqBChVZqi7RT9W1YzG6wZVu7Uxeq5kRdb32SDEG",
  "key3": "2w7gc5YzDqnqTA4aKrUh79hNvVceaPBpWw1vmmFXJhL51C4ZM9dkLej95R3DcoWZN2N444oWppGgoDfTsazyt2V4",
  "key4": "4MYpzbW72hmiZYZP2fuLUTBMtzYrCDqgpVUMsuzEZT6GvdXq5yCmRz1ponYi1voq2guqaDFTWjodEH9BrF6oKGCE",
  "key5": "4Gnt3iPFAjJtzcvmxR6zAMFvLYyGr5E355bcR7H4mcwjB1PSyVfQ8pddQQDTdfSazKCwtKhH7najFm8RD7SigoBe",
  "key6": "2kbgHyTQdhs3F2uxnYRnBhsD6KX5Fjeq7J9xB2sHjoPwaqqe6gkbRkQm7yzRs6kzRucYVbBdcNo5PNhAJbwY3pqh",
  "key7": "66fML8w8DdGfNrhSH8WgUFLHfq2zBGxQghkt2XPkdrqg4Nmn5pYRsEr8LyXicfvNjsiNvnF29QXRqmBtgGG7X749",
  "key8": "5U2oL4huWYdzirEbywtrpv4itV4KoBSgbzctU2NeAn24P6GK5WAidwpauUarHnBCfKCFT6QZouj2VFfgj5FUGAkp",
  "key9": "5H1qVNqoMzbDpm2yhb9HJhQK5iQgs3t2kFVEYqDfULZNAPztNAGSRnZeGY6bRiH2vDrVg6bpVX4U5YF28mSfUVbn",
  "key10": "5WVK4UuArhD8rqzHazaHfHDCPcsJub6BNwUsQHinreFMJeSvXKxNXR5UVR1Yya8DgKYWgJn75UeRYfwdGwC6RUYN",
  "key11": "KRQuQ2KJ3m8ioeiioj6WYyWb9qpYqHFjyivA2ZnbrMQzBnKofSdRVC5MGkHvqUF6j2UidbafrzJsMrpagiixFuC",
  "key12": "3ZYG12WJChAmMhr7VHa2odXSEZL5DHZa1eXju8rbAMRTA27LLUEWJs9yRD8swREBT8Kmf572NSHhNVWSkpyrULzt",
  "key13": "4u7KcsaN3aAthZdjrhENykRGQUofEWwTcF5wwZbPbaoMLaZESZSUTX6mJU7fXSNEAdnFSi7cHWaNXxLb4sdtAyQR",
  "key14": "4Q3wDDpJ1XBUaxeDcrvbVS82XJwFn6iAJqDZHNS6PxUXTHBPByfewTRM5jgASUp4K7JmjwM71xjxQqCuKWYmw9Nh",
  "key15": "3pH7J1ARpKvhhC84EYmCcb1ENSw8L6oAp8V6q3vjPd9Erv1GkgsrNM8fqh3Jpq4RekMpNzPgLGw8MB1DRG4mqreS",
  "key16": "5TRr1zC8G2Ma2YQbH85aQAQvuT4m2kccSyp4iDjvEVT5nwDvJKKwqv6TQWN7u5M3ja6gvP4MPNb6SC3siy2x4J2b",
  "key17": "2v6RbYikKJVQTxDeVXxeuL35CZgQBCbbynHYc9CrSpAHoTBHSCGaJgNHn3qdiyedjjyFJkPC7nyTWmZtqemXeKR4",
  "key18": "VrTosEVb1WUQys78fxdePKJyWpg5ML7ATbwJsxpwb57k3oqcPLF2cfWEKWEAenusGYMQiVBzacU2PRj6KEkUBpi",
  "key19": "5oFxmgSCk7R9kbnRKS4Ur2NL5CEQCDmKQpzBuWtT8TPowp2kvkmPPmD3aexHnQMtiPyfBH6Tq1Q4eqvZ5vjNXSb",
  "key20": "3SopK4UVpsWom32dQRMYqfqnU7Rc4PMBArVXN3amEEdgAkeRWTAnrHpvbkAwEejL6KoVV52V59Jhq51H8bsJUfew",
  "key21": "4U5QJfTpxgTtGJHHehXbkC23C4gjPj9n4Do43s5HxkKpLmb8QAJNxtHJz91Q1tdjFxfjoPZSEwwfNXo2uwceUoph",
  "key22": "2WJ7UNmrXTuJDyTx778FmP35mqxxayTeMj7bWoAhZMB6MZS5PPcko9H5heLo6TNr1dCdwN285mCRu4mqaYszXETL",
  "key23": "2EDS5MikNibc3Py4xgWPnL4fKJwETgVaCWPrQVEZx1FwAPxWjGcNyPdzVoqCrSa2pRJVEUzRipwesFqoZ98TZ3vg",
  "key24": "3U1LwKTP2gkM4Aam8mD25u9s2gRHjby4EqyXkZ6DBh1W3czKLq5XUARjdgCLhWswu4GhqAeL5qHJHG5RomfFXmLg",
  "key25": "34VUPEswowFku4hvJbJXFXPJfQJS8KqA2gvp8jU4Cx5Y9cnMGkjq2wRaAzvxwcDtuoJesDySjBJcR1G45Ng78tZv",
  "key26": "4W1QNPCop5HTQS1asFmZtpTYPKLkTXSWK39LFegkrvk6sw3rzg34ofyghrF1cTMoRUu64cREPDqMmXTQLAZht5MU",
  "key27": "5BAjCUCvAXt231jqvU3mzTg7CJJVoxXt6PxhkoykZQVmzMsAGY8xo2EAhUYfBgiHZcbDebszzmTcs5UAMafNv22p",
  "key28": "3YoNGdWSniEntxPfqRDm14PcUX3nofEvT47tNHEzHrsPTRX3iEJ7M3JyLRiG83EH3ApqPL6TbBMF1GGZwwtwvunW",
  "key29": "52YRRSqPJ4x8mj3t6Pygj3GkFJBMHzt6an57oCNhHxb7jVLnJT7YFYa1XZYCYrMt2Ze8crB1nLyuGkhdSHNuvFf7",
  "key30": "4PyVpH115BhHcSHwkGiA159tDuJhYoFz6LdGFtyr3n52cR5zyZQ1ievhneaMcgHBXmNMWpG3kLfP4WiENTjehgJL",
  "key31": "nRSupdPVSnP5ad9xBMH7TrheY59m2eziSDVHaBrU7a2fpYqhVUGcakA87Np3mhjB9W97nqDc95AeBvLvxuKBUZM",
  "key32": "4M2v3xvVB22ep6kXx6ycPwyaw9GXeAq6CTzvGxD7G6J5tfnhEMpe3hrCyrtfNg92fXucqLTBqPogC7ZSxEihh66b",
  "key33": "43cqEc6mWhLeSsRcnpbDhsZ7HahMLyetXTusFBxf2GJrH4qaobGSF3mBjcgzLQ8761bDzpuSBJFTQNxRGkpsUtS6",
  "key34": "4LUNC3eGjgbhyYedp8WrB9gEFvcb8TiHT7HiWAzFwNfQoG8BoeXgyzbdpYHPe1Z4X5TuABx47iFN3psznWhkqG1i",
  "key35": "5QYr7ar54ZVogVGYy2YTtrTohuoe6mZhGVD8yLnTijx8kSMmKn72qBUsUXRakj593GmWiJhWaZsU2uNri7qyNPgS",
  "key36": "4DB5sLr6T7usD8Vs4Byr2RNGgLdyLuLH5riZCCgyBmxn8mtV2NJwvV4hLsmWfyWUdc1hGS78oyy6XABo9pv1VyXf",
  "key37": "5gSM4agS5Rgs3juyg6L7LQkGxkgLw1rmYXewNPaEoV9w7P39RTbvStP577gjDBTKFf9EwVag6cb1bn4dWypSdzT2",
  "key38": "37PyAHGCvGTZehuWqQEm2hHESRuzMSPZgpsTDmNGYBHi9UKAm4c5iqMU6UT5y5w18rLqfQdSVSVFUVTLVG1k2hA3",
  "key39": "5hCMoYiHTLk7QzUMGdWyWaPZLpqktBtBSQSSbuYx8pQMhrhf6x3fRyF8Xhb7diEncz2Hes9gmSwKiAvhAsc8NVhr",
  "key40": "4F6DkKM2KqE2SjnJCE8YzB8fLrs2PYCGgXYi6NQGE6YsVgyHikYPdJWNKheHL8HUSe6McJJifcx2Un93qDxpg2L8",
  "key41": "3eykxBr1qXAnu54apEr52QHVnRHkPrLgoFNfuBPREwQb3ZEgyXqwtWDRZurhufvMkvivpeAhGhZWuVNqcQjeZDKc",
  "key42": "2pWxe5dBaAL7H3yC2RGertp5XW3s5Rq4uvsx5LNRt8jnGmovk3bcARH5uLzGSuhvbxccMqi541Pi8stGrfD4WNf7"
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
