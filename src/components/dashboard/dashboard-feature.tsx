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
    "iu7ZbV36s6hXuR4rFve5AZDu2iS6tYEXpR1rNv954ZvUZZEMoECgAx5Pgd6QJmpmtzHomVnatft92mwnJFm3Guh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F2gahNE8Qsbq26ThQqJBYhZTPoTSkuqT8mdSPe2UoAFRxTjPHXeBHLamgTkt3NoqrSMiTX1whr2p3jy6d7sajGL",
  "key1": "5rFDmEfgPARJ9rUZ3mUoZmpvKKykYyV6EBHZPKhtPfswVccvEu8XAeHcgoAmSgZHzrnScSPNQA2ZZQ5Kbf1LH3he",
  "key2": "2wKT3NaFDAvq6bvXqY8RdxWd16CDqivXJHc84LyL9W345pmBkMnnxUU7xtDWvPwifY95iMe3UTtKqd4pADFrCdtf",
  "key3": "64oqK3VHftHdWkkWdEHva3t6u1FbP2aYU4MVY97piWZSfkXwSh671jh326nS6skjiecwdD7cwZuP62JidNSfe5Pb",
  "key4": "3onQQPGwCQ1utQdWFbpeYjrfPTra11Jo9VHuTB7Eoz1ou1XzLRP7uVVWpm5S9GiRTWJdSASa6dn511pQvQRF8L6f",
  "key5": "aPb55TrxdqxymW6g63phpgQYUVMc2PTRSV9KiQfBiw1RZ9Ke5NWK7CHohRLQFnetSw8A8b7zRK1Mp9HdZXeB9hd",
  "key6": "2uqLhCEYLRSzrUT3EfTLhw9RNchEfEbd9qEckaM3GoF7SRK7mX38gWHjceD9RtUZ8bNCGskXdBPNwqj6mbte3QZG",
  "key7": "3x4sZ5H6ufvRpRWco7DqwbxQdhPqD3A5LApTZpnivy4iFQBtNCPoDM5RtrtbZnG8zkEXaqe9nuv61a5FE4cMatuM",
  "key8": "4h6XQZ2iVD9eiZVtj3WLPhfZAVrH84cdZrmiWtbdN2HMJ7sgEQkWyxNdhsGx4bJQUZ4EnLLJQKmFG829xgZfZ4Jt",
  "key9": "38StcVKnFekH6wMWLZ3VM1RiUFjHborLQsMSvUAU19L7NYfXJHr1Y2aEWnNoUMKqYpne89DHYud2ZyK14Lg34JXr",
  "key10": "3R2QWz8g3wBEf3yqbH1kCA9DsD36wSNUtmnEQYJBhKabozudo5eqpzkQPkyDqRtRpyKqDFc2RgZsQxUFKE28gD5t",
  "key11": "5goJJUWg3y1u5e2T5ATzK5HXoN8dwGfoeY9vRd8bMXHqcMva9hxxANmQhairqnArEYPEHFBqgVY57DfvAbQugrgV",
  "key12": "N4rs9cr36FGeinvsADts2MX9izPXqb1URUMkH62SRvNsSJE8XyTFybdmKypXn81gqA1QE85Ro5EmjhNWihzPNX5",
  "key13": "3cBUBW4RcH4dog6hf8Jy5dCfqbPiqzppiNNC9ujzHFfZULQaxdrfF76cj7xaxouLgk5qaJpJzucLJ8UVNwSsTjxR",
  "key14": "DMU5PbGA6K4J2de5u8Mu7FvAK7uJKJR341dm3ckwW9ciAc4ZknZJGkVDRj2U1KTJdn2Z5PHrUzvn3vvbkqgiey2",
  "key15": "3YdsCs3QM1uSZJq9k6MH5shiJTiZg5CQnXxuC4cExPAfY83YyBEXYgN74FDDGsFdmBaqJwXrhtUnVhSEiE1bYXmo",
  "key16": "5V6VshdzLgBFQ2eyLLqELCVgRBjijqUq8qhPFJhhXFe8LJkZHKcE5Wuk3nkm9LhZiACAfcNPbwD12oa2GsuLZRSK",
  "key17": "51MGWhnjEyvMnbd97Y7MHH3FuziSeTrhM5riA3TbYPFFEnJNzQ9Ypr6FsAfvJD5J4Wt757juAeHARgs7JWVYsH1H",
  "key18": "BvTJJZMCPM5NAy1DJfoeKer4ry51DSVwEYUvZRhhxtR7a5Zyc8ePAx5zMrZYFtZPAg4mw52bLhJpoJBH92drt6n",
  "key19": "3Wu18F9EbN2kbafK86r7MHxbtFuJ155orTPTe5RVi86AM1Tm6x1y9py1PMzyc2cDu7RyHAoy2gnVQ3xxq4jD2aPE",
  "key20": "4uUJZHSm68miQnQJBuay1homjZcPveFSJAkxGTcWc11sxGWBTUVPDm1sQWhF4SwUCqdqRq4WrQsh6CZggWYSrT3n",
  "key21": "2rTq1qPmoZ4ahPcnPUp47aSeixrfsyf3nKmyf8XapbqfAYti29v8Rz3Yqc3Ky5LCUkj6KARJdZTq6g4CYrRghk53",
  "key22": "22YXGpYpiwceLQU3AKqySzBZ6Nefgd6TReL4eGbrqmPYUdjRADK8hduV8QrBVei4qGRdmapsjt7LMwau8oL5RXW9",
  "key23": "uGuALM1SQDNXa2SiowhL2GvvNnqWorPMiaJQsG2mKbCvhawvdHQsopqqmSU3An4LUcSJyZgugutBDxPjyYri9oE",
  "key24": "j8voxqCY4peQB9uSQj6ctkmRB6UQA9yotZxyMP3C6Bi8kb1kTvBP5Wt1do4fo8mu7EDjK89LNZ4gQM7NERWnumg",
  "key25": "2CdFb7Cd2bK1BE5PWeZbgWzwEjuBXx6oCj7sh9RneFh7q9URSdxWk6mQ44pGssbsRen5FVFcHmVLHHc2NBvmHzHb",
  "key26": "Ab5osH3CyWtnwjDS3XAxnSw1fKqdz9hNByMX6A5n6gjqUJoXjCk9sxmPubDAJQfp2SotZFeNbyUZjumM39Ykb3j",
  "key27": "497qcSCUAHPBs1qpr3fX1yJP9DrW4f8Mfnh1nBaQhxtMD9233yR6YCGYU65NsqHkTmTXP3n9i1KM6LV5xd9qnWku",
  "key28": "3rXaX2PtwZ3XAbsDpnZBPxiHyQ7ktnFKFPdrEb8uJvTDMd3aJiZnMUFuWcrpMQjfBC77bjySxgg7kbDMTNFqhctm",
  "key29": "5DVuTem8fWLXX9vkjQUwwGi4ZgcnUTvQjnZ1YXhTLvCfaTj1Q7wrBGs5tsWrTNGudC7Qih55E7imRrWRsegzP9Py",
  "key30": "2mgWNywCNDy2cF1XWoBPqZZdCLZicwrFGN4qnSxnTnus1GruVep2uP54zcjJbC1yYNTpVxm5DNZxxELSzZhJ1GfQ",
  "key31": "5HUktS1hNnoAJeNxaFws5LT6Uja96eR9aswux91gCFrUPgrsuG3UznM4giBwTc8Er8WNzgPU3Q4zoi37sgp5Kf7y",
  "key32": "hERGWooV3d4MopDK9K9qHfADwHzdNwYjHXFYeJTarxJQ4SrULyreRS13VyP6Xwu64jCEtu6FJeQBszBNA5htkVK",
  "key33": "4z75x9sc18YzACksypC54aAnUvaQZWreVmLAaPXy48YjnQV85BQ16e7G3k1ubFwnXdUwUP4uV2856G78LGyS3NmD",
  "key34": "DJBCvF3egEuqPLX2USQm9ZJVzKVMSRuH1z9emrQQij8CbLXUcBLM4hcp63QFqY4Qk68xfgHqfezKuNQNnDBx3Fi"
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
