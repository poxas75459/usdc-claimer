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
    "H7636JZaNrn5p6Br4pnqP3zQ7ARHsgPz6UHTXkARgkcUdM3y8N2ChSTaeQLsh9BqztcaHvM2UxsptNTRN9hXEsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XfTo8kySC5viaCELy3KJjHSfdW5anhqHqmt92fQXxmKaTtLK9wxo5M5T3VAbYMte5B8FKFgh44btiZh3PbSvCb4",
  "key1": "4agnGpEZdJAgqWW2yQPuctfLdF3feMLa39m4ztQa5g8kZhzAjTd9CueFjnydHXqiX4Cq3R1Gtpn8MewaRDWkVkPQ",
  "key2": "4we7gh2wG27ZPmeucEiwr5GmvxrZHzPydpfxHjn4rv6rBYUVBnK2BecTb341KwEpF35NjXXbiZMh1cgZnDtzTkst",
  "key3": "5c2vuPD3DJFaCzkNaTUASYKDoWmfZWs84MYeC8RaJtqQcwe8TsyiNWKgqBxgGP1EX1Mr4Gf2ji32GkLQfneWY8MX",
  "key4": "3xsaDmwPu9FHkDW9Die6JVDoq62rPHSth8uw5FQ6nrbjHeoMfG8cBDPZyyny64Q3ZMtcvA8fAPjcpqrDsD5y6J28",
  "key5": "e7Ue7rw1qepAZkH9qvoGsoCresghpX4KMs69jr2nqmSMJDdaBBB269ChBLE94aV1jdABDE8FuEHL4JSTM7EZG6B",
  "key6": "2rq4DeQh7fLNbEvA6CGjQJJFW4wJM2vvuF6hVLbCUwPZ7gYzBF2JK1e6hFQu6orPeDSZDN1MeCnvB7i4XHXMxK9Q",
  "key7": "4mPqjBy2JY5xwpmci7F28B5PAZrDKsjnUMihRuvqDza1dngoaTtPcvoWGcvHSKjzwswvKYMkDWSwrAGVazzXVjWF",
  "key8": "2mssrLGCPSDLZw3pjxufFaBHr7PM3PntcAaCZK77xqzi74wTdJVY9D3VB9nj5mpVfZP8evskh8WC8KsPRvnhajDN",
  "key9": "4NXvNVnkkgUqWVNf7UZFCJC6UeEaSKfc3xRgFDjX1uG935yTCPaYaya894YtWgDavLwWRZeDPqFfUhtk6JtYXrbn",
  "key10": "3hJXqHaWuWcmmzMpmFAESodMVHeocwVmu2WvfrsZ8eMkAwEfii9KNJRu2cDvXwCf6DV3evx6DJRDYNTSUX56ktvH",
  "key11": "5nZQnjmd3b2UPw7v32SQrwXMQbGnNUQjgLhPHU8U1Xeu5wTUmrCMHuEHajATLwuS8wa7cD4PWENSEHBmJ3FDoB4h",
  "key12": "2bs2xupHnGbDtGDX2rehYQhrNQfoLU3BBJPShqN6n6TuUtBZbEMt5U1r1d2hSgbyYPxYEvxKQqMVXHU5gtA6egD2",
  "key13": "4VWS8DJCqKUt9cxL5YgnxBXa7T8aXNLEvdvwGH5K9v5Xn9wv4TZUEQH85GD8eAVa6hidEDrBwzkPy748Ez2NVys6",
  "key14": "4Kghkq447LcUzLNW1gxpXjgVpWypVuWVkrVj2HfcEAyZhtSZ9wGRQGF8RYTrY14WB8VnhA9XhGxBqQjHN2TphDwp",
  "key15": "6V37KJTUL2TG2wiHWVJRcBku5KkeHRwReEeurswgAXTMVYDShmgRgirExZeZP5vMKMfNTmMR9jRfiXd8ezm2tYr",
  "key16": "osfZ27jpSFkgvmnC6xbqYw9wV68PaRfR6SkYLt3tJ4WzcnEaHVE8oXCqfVATc1DeXN7u93XfPH6irxcq28g2P7x",
  "key17": "2xVk224ymb3CiC58BWUXTVaqvDR13bT3sma9rRNP96GZaaDHxZ5sR217xSZtdas2ry49ZXj9DSVVrGDTNGdWmV4S",
  "key18": "3f674MsFxNBcrQoND5Hc2aKg36fhmCCQUTNxUf57m2KumirVwtq8Duncii8YiehmPeLKsunQ8gCsXZCLCds5fBqf",
  "key19": "zGp8Cf4UQx5zeJ62ggEge3kTM1fV7htLnPxnwzix5coNJfMvV4tkwL1T8aH8dsVxvVJexK2iVBkW3s8VH8E69j6",
  "key20": "5ZX7smur1iFFxUytXBuqQx4498dKzY9W9BCRwZbs8aSnG3wKKhXpHho5LEM7pJCdH5YDW7gdWNkUMNPhM5dw13id",
  "key21": "5e7iowkECboAqC1UZpxPycbjtcV3yMZ5ThaaVZQrKbCcNbA2DfHoWeNWLv32spGn9uo4E6vbSgc8RyTSqFdtP1Td",
  "key22": "4miKuTqcRfqmBKg3qu1w2rrPuZwWtAAPFcGzbZZfch9oaqSMbDSMcq8Ze6XFoNXActRirqvAiEsjpXihn2tj2fNu",
  "key23": "7V8UKyQfwE9mTm4DsmDXnesgq6m55FDjMet3KeWmNPdaJ6spdNbrgV3zqU1bSGrPCUyyZcnWghnadcTBDAdzUch",
  "key24": "3pcR2wkT8HTG6Wf2uALvt7mMH2zCN4RRwQtUmZ1hAcng34eT2x3DHu2QXfKbMxWUnwroQXt8YL5yqMv6NpjRkdi2",
  "key25": "5kiNzDZKsEGZ6sYRJS4cRzTyHSX5Mjy4tuRHWZsmLT3jZJRgyTTgcSd16t3MwFqYjQWPLMXe7RFohPcz2tAJXdem",
  "key26": "2nGwDevABsW9UGUKw4eXuFF3NN3Fhv52Jo5mKocd4SAVziDtAtHougWDfbZV3jiyKTcGvJU2p4UHCkzFcrmts6WS",
  "key27": "3BxoM6ZBsSVcRwhDpHv71aeA81Locgn6oFVxBX27WPyzu2PzicC4ecfHkfmP3jzMq3fsP9q22hBf7M9bsiAte7ka",
  "key28": "L2ejiQPYbSHDsnVh5AcywkcUrRrK9desjUMyFPU8DqbdktjZC5kZPjsfFKVR27fGmH1AfdJrnS1drgod8cBNr5B"
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
