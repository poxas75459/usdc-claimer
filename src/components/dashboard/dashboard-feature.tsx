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
    "5tUQQTrZ5C8jorQnWgK1jaukgEWjYiLYJ2Sm6DV3MeEqyC75vLMMmJvEwxSdsc2Yo2bnFRUYYq5uYvGvT6DZCSEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WswD5pdGEhcXiGDskGdDD1m93JeUtgVeThiTMmiEinSAj9qs4ZDU8YnaviZrX8w2m5HorzYk4YvfA3nWoDtNEzM",
  "key1": "2dCaovsXJrdJZhdQNgSJxrYcE28P48e2sLMDZeKxcQJSfWbySt2iZhALFMRbBE1trbWcG3gsw7hMQUNLhgYNBRSV",
  "key2": "2vNwcmbxB9uYXqtcoAMe7FYm8iuNxXGcbfsZTunNqJwZFU6xm2jN16h5oKBmQkCRuzRt4V4HbSm5geH3z29MPnw2",
  "key3": "5dkWr4URSS5LfpmfxPVgDhz75XgvFnRqTTrqKLiUCUix1ZmzBdVqvL9bqNQDoFsk62kfSqcEwnxZ1eCb7XddwURG",
  "key4": "2DRAaGTuSizUr8nzjGAiEJFeyzEbi9GgtF4DKC3dVncG21Ukhc5pittjcHmRWJoaui8w6mF8CCgzMPDZeiyQ9xxJ",
  "key5": "5GF3zB3PDFLFRN5NXRcqbtjDBTCq9CD6AyG89djA3TJPkhQNb7m9RCqaUMgN18ZLZ2T52L2DiCeh8qNws5r5YMpi",
  "key6": "3H4oPH7sebcRd2AUWAf8Rpnj3hfCpweAg9t9oL3CVS99Z1auAUTPHHHQdVNEhEnHjUoZ3AeSHaFh4kjbjhrFVz1u",
  "key7": "2syiTTLQHSTsHPrRwNTBvqZedWRZF3rZuCSv127f6Qb8cqffuKi2udWi91FS5j8whb2C7m9RGokt56kaBRJmPLnm",
  "key8": "keNMq7iaFxgj8wo154R5Yyv7sjAR3eZjku5we7r71gMibUfzLyHYxZk6CqVCpuwDbPEjPr7dJWwduoeFP13NeAY",
  "key9": "3Aq4816TWuNX7rTe75S7QffuFXXsadX7EgD9YsUPoAuK42srFs8H3aP8uBMFhc1ko1MrBmjByD86NpsqU42BWTZy",
  "key10": "5vRe23tz13dehaAi3FwBZ9cX6NUa7qAZKdLvwRfmZwtRXYLr4ZfWVv2S2TCLqtVYFeesNySE6BSp5QSsnWN6P6kz",
  "key11": "22ZXu2Xja4G7Hfj97apQsX3u6sEo6Db51Ro1ZJzbEMoWc77CPocHiG6Uupo6LASRckgGemDB1GvwhZj4wQEQjhpg",
  "key12": "2xr95EEDM4xzJZHGBySguEkDZcUM1ocMyTPBqiA4DQ77UGaYENw5nxfEczxuFXkyzJPximscSAXmkx9Pz7syAPP4",
  "key13": "65dt7ZzDqhATMKsX8jqRg5X5pK1Jd51tvSPTcMFSRUfZ1BDYHGy7wE8scxw2su7dioDiZfNWcVHp9eWMAYGng2ve",
  "key14": "1WoeB9HhbXfY6Yupp9cHYy9VexrmwoYE98B3Vb2cbzvVGLZan88y5EbtpB2CaKhEpaJMduzG3ndzyDipBsnFdy",
  "key15": "5JSpCyaX6FywdHQmAbVC5D4QuH2iTm76jWaZotHchnZzDRGHbYq3Rymjopq1TqMfaWNYVvHrSee7kyuHkapkrCw6",
  "key16": "5FWjGvGNR2sek7nVV4Wo8RVNtVXR7UVbzEvxbrWaZ2w6FHSyQjmhc6ogQ1QcqggKPu5rnPGKCxPjsokx6FPWWyT8",
  "key17": "385deJYHrDPeMbi7e2FLnyS2zJU5DDoiK2jmqp2Jw4uvuuVvx66nzQscN9CE412NndTdnHS5jt1AjBu7BpHWuQAh",
  "key18": "4eJFa2eCbJwhC3YxoNcyHrvKoAN1q18RgEcasARfYs1TECd1c66EKRrZdTiB18q5nax5FKo7QgQHFxiPRUEBPG3J",
  "key19": "fw6SV4PGc19fkRYhjEUShtNumEQb5dzZcpYRbkji2QbcQfuqGM45RMh78JKEMnfvuh5ebM9w266YLpfhCkCg9pd",
  "key20": "3mKwmf11cqfMASaNr8aS9u2VqsZsJMnr5hPzwU8m7ohbBbNLwRKibz3wjQtokYjAFkfQZhs3eidBNWPS9GhLDqBp",
  "key21": "5Cs2saFYSKnbUDm42QhsZL4uwF3a2mnYm2mq21Weyq59sn1vmUjJWDupmQBHPPwxhgC9LGPdj5P4hNcWfvWqJG16",
  "key22": "3v7okARqpDvT998hSQRqbyEaBjvEE4wJwcu22ZZ7zUhKJs1sjsbYJEPWhQC75fXrmREVyegJruxbcqp8wxbAfk81",
  "key23": "5GKoHi3yot4iGr6cpbYcD6UTM3owbQu7qvc54CDS4qfEeGd7sPp3NQSpVuzstrrtMsbshzM7RxyNdKXmeQE7HjnH",
  "key24": "2mBZ9JpKJB7o4C6CW7wj1jF2nouZ6gpct2JTuUzPUF4X2MbDD8e7pBYrxA2WtWVKUkWAed81S9R1hrzbjU2cVYHN",
  "key25": "KBGwqvPDqAh1XDAQM4SRXXPBPcr9FaDHSh4jizXcC8JHYEXG1HR5u6h5r4GdnLUmiDgPauXq6g4BXXXoVz1iuJS",
  "key26": "3N4SZfcF5jG9WGGgd2gfsUHBGV8AiWL138kouPjfiEVN6BeY4iohPoVF3ZPuTE5rFZhAKpT1qcKErf6H9HJJUkFp",
  "key27": "3NShDJscVuVPJ4bxRSbjfNujBrnDeMnUBkLZhiroPmhF8wSXumtmYkmuWgCEvc3AuWjK3DEKjdxPuUzFjfhgnHU5",
  "key28": "4HEfBFvLzDy8b1yCdzeWEYvh3yHZPjxbDuJvYbhbzeUShnXLKYT7G8msiDiXdZmN2KJmuNemiexZKuAjTKY4QxSw",
  "key29": "4Ks526HoExGziZ91L3iRBa5mz5PCqGe3iQeMdvpGbcE4CmuxmTL1Cxp5A4pj2w7a8dHUw82Zip5Ah3iGGpUxbdPr",
  "key30": "2DMEJ3MbrbXxorPVFS9B2vzCZyKHg61yBVrQpoYL8DznuxKEeKEdXZ8MmmRtePfPrH7SeruN7szU8x6rDpjxQX9L",
  "key31": "kJLbBCoTNUYLEt23SmTF8QGpSMG6SWG8b82eMpLQ3fPTDZNZTn6TvbUrovrScTyarv6P9FDpAivRZtqwLDzGcGW",
  "key32": "mx9EpzwosaMf1cfV4ZJXEDZD8CRDsJNUbbqSkhPT1NBa464WxyTGU13hdYFoyMLbqpxM9gtYqxB5ULgqoEyWXtZ",
  "key33": "5N5goFsDgkLC1eEF6vNtbBQGyvwFRDFz9V7dFXcfhXstPMMvwkUWf1Q6pDTrri2V9Sy4MMRkJWWJgLaxDDjKjbHC",
  "key34": "2HdvJiMfTws3CoDYSKxTeKvFZWdghiTyViaaSoozs7KGbG5cQaD3rQxc9xbGzhGx1ezX5NmuKzC2XSWRdsVNiSM6",
  "key35": "mhxLVS62V1xmkGRPsJY1jKSxu9heAU4suwnWBKNpW3y2KNKMDtzwn9PjqiBPMWAaysBGxgvn6ucuCNmDnNQPm3n",
  "key36": "4H6BydyDPNBQ9nXqoDbmSCsVBy75Mf2Zvz3id75z6iimndhiWLi6bZjAkV1n3c3MonBkGuSBhsGsZmBQsnHb4N6V",
  "key37": "3YnSHdFzFzVtnV4ybqQEWBtV7w4b7ytjLpz8YiEEmKs7EUGgZ4BmQfJhKt98NaVwwmTc1VGx93mEUF7WGTxg5pne",
  "key38": "4sXW5vHfpGiCRbiNAKPaQXPYTbSzzXf6SkyHxEs9JQfaxuTcPwZE2oxKDyDuATnkM97RdeWW4yP5y7Mn4z9HLKhn",
  "key39": "2uxrDnZe9W8zdt9dtzWTDz3uXRG5CRCHYnWpc9ei5jTg5pdr9BK5oYHL1n1B5eUbk5KjSg287WZdqd1ikr7u3xmi",
  "key40": "3S6zXYTpTm4SF69uKEAuwgm26k4q1mgz4SSQt8F8FhtmpYgWVhrU5eJ2aJAn3WfrharseE4gHdTopXbvLa16ujqJ",
  "key41": "5o6oPJTREMq4dZ4vWF3Dw3XbwVWXf6H3xHwtay2GMMC9W5ZtqkEkQoehzoGxWaRXoAyjfYJzLMjGAUXUqQ3je6SY"
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
