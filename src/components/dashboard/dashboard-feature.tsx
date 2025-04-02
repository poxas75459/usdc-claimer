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
    "4XB4hMfGNnUHgapQZr98gvtDwy2FipJiBfFfX71GG19Z6Gf13nq9y7EY41WxcoHSuJUhWx2oYACiAUpbX2niLCa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sdQEkEG53yjkienwiDwDQd4G8nV5z8S8yQ1ueDMg7MU8SVEf7MGku3mNGHpNCu1c6vsiFbpJJe7vJw6y3HMMWXS",
  "key1": "35YLgsHx3Apj4TSmF1bcpgStnUKhZw2aXSfnZ9WmNgsrwikmYahAyAQqK6JJZUH667sGtXrMffVm8xPZpDH648um",
  "key2": "N1oU5QPq5ASAcqnBRpqWv5EGeZQFW1wTiFnxZonExkxvev4jcbMNvSSrctoz473TctVKfdBqqY1oCJSBnEUH3Cx",
  "key3": "2Yn2a2rQGd6GTzsNSRPt4n34Nyg4jWJbLXDuAwGFgbnxb3PjnDtX6rvZFDKKoFZVuvWwTPzf8vfqJ2uRj5SM36pn",
  "key4": "5JB43SxZBzt3VCZ43fqffp4CYWtviGkw9iMsLY7XkHQcWQkXoZBtkuug4rD1k72vauQ34x7fJemdb81GpxeLCMmg",
  "key5": "xpuyuxqvF41oJM1ffUHgFyuPhg8EajRVRpdsarbxJM8Qd3d6KHSETPRrGrCt4CaLYE965B4cjs6zA8fUo3wp9gD",
  "key6": "2wBKKd3bBLXSiFgjzxRGWnkzBuNaTFZBXpUPaM7cYvZ16U38mS1YtxwWpEVEY1erpUXBZTEhyc9Rz6WRC2G5yTp1",
  "key7": "1k412gQrJuAXxfNPXgGiq1XBbnZWSXCQuAh5NaRKkQdCvwCTixxymWRMJ7bZEjm4cQaWAZ2EzEqZYr8FLnPkia4",
  "key8": "35TwK9Lda43zdj6WkLJ2RPfvodydPEdS6RWX6o1MfuStX8fMxXKpyPNYmkyGhduxgx7bRvYvFVyrpAXuf15h4Ymr",
  "key9": "4cwozwMBJNGG1K67QkyzpfBRevQY9FPWMNXDpqz3N3xMV3PZ1NTTsWcnrRbRWj5Kd44Bgia7veeagSAqYC4oeJSA",
  "key10": "HtMi2ZqNCz6S5NMTWGzorQU1r1AgBFMih23aDr7wMgoc1wH5BBXUko4njKgDSm78pfGxZ8VSYaZCmx3F8s9NxNE",
  "key11": "3Ue1o2G49vS9DfAE7gZimftotdK3FDbmJhQUcG3afiKmNNomV8j8S1JiLrEHvzBM4DbzwdgCxgZsvLwqoUHDREZn",
  "key12": "4u7QdbscVmg964a5jeXF1Wht637cYZzgUPQtDLyWER8VkNxTNchKLAafQVzsHPVGncZ79AuGcTZWgFoMv5Gd8pKf",
  "key13": "pyuskNoJUqQmEaheNhGUTQr5dNhEBQMWZbTxEerQhjTVW3t3Xc4FemyuSWbdSDHhfHF2cFSSGM4aFmv5xQaZ9Gz",
  "key14": "3Nc8eLBhMahXc9zqsgCtEThT2xKjNaLVTwnBGkvTrG8XxgDU7rtteFgz1fav6XhVmqWw2XTqCeJKNFz7ML1A4zUX",
  "key15": "57SZb2ufzN9ePr9EKhTi6Vks5GH9s1b6RNYyUGLaCihaCSrR2r6SyPMbpBx379vTGKMAnake3FBLCtgLkFaVQz78",
  "key16": "4Hb5enLvtGznQKPZx38SAC4b7YDBBiRZvoYC6SxGGQxjEjc1DN6ccVKrFcEPujL6CjarJ7Nrpq2vG33B6kXo6d2i",
  "key17": "5UCTvnjtY22FoaEDUNRDw4TNpsWiSVLUbpty25BXhnz2WppB52f3TKr3GkZDfWd4FrFagCB63tz6dQzpUj3gMdKE",
  "key18": "4UyzXFjrF5AAmqJvi9T8tujfH9FanCJkddQGhx2ZmH2GBiSYbQzYU3SxXyrqQn1ArrRyxFdQyeCCgJ5GDhRa4Twz",
  "key19": "4KgegQRkqHemZ5XBzCDHm1XmbbPxrjyjck6potXsKUDmAf5KUqrE7Ax2Y6uNoeDpJSqaAmsg1EZXCwgpkhTPkUFX",
  "key20": "2ii1fpaBPgPwvuHZKS3KrPVBYhbXagj4WuqR55nJneKAH7aibSQkPehumneYkvdkN9EL3dJLVdH29KykuWg3jCnK",
  "key21": "3JmvZqFSYKaBYaEoCUYw8SnbvZKJoNuhGDwaJTqLSWuxgYXKH7jbEH54pvtt8KhTBZ876CCBYupwjPkQhUNj5Jn",
  "key22": "5gACPWA53TLzWX1WccoEPZ6YmET8F5pjYUnFWq3wYYUxPZuqYji6QqoYaaL5WWXHy6Tac4GnrDBCA5u5H278N9Dw",
  "key23": "581jv9bkq3FCANANjbK1YtXLWjpvS3W1u7KWGJjYV8DV56Thi3euyxHt5DxoUnUsx6KPUM8NynRtc96TJ2A1FJ2X",
  "key24": "4rdpTnCEc2vFFAes5NE4UvEVgwSwWnLtz7YeHpkC1j6LS2P76fSBG3z4MrK4QKvQgAw5GZUvswFarTgXmtrixfoK",
  "key25": "rkA6Anb2LbHXFFqnAYFzBQUSPHhHNycTqRrJCDa2nuJG5QnUuY2teSLjzd1sMsnZeUWtBYpDpqa1M62oJ4FWKsv",
  "key26": "58pLmmihVkA1VygXGu4rH9Mv7R64nwijewYvWtw63akVMLEsHU6gbmfm25aoxBKGqWJZcS1XiKbHSy7Pc8YZJ1c8",
  "key27": "dmSM3bgYAc3zCMPYpkPQEGBRBChMtMMwZx1UUHnRCQz4cjSzKeq9mM3Mx6SKefPpv9DYyR1QpMGcYKoggZ9Z3yD",
  "key28": "3sCed6QL9eZk2NNpUqwsXbkPaKg1GiCK83iLnZW973Mnv2js45xcUGCHsZbkCEpL6g5DA7HowVkWR2q1hUqAHU8a",
  "key29": "61QpWw7mwq72vzGpaLDAciZ4j77GPaTCVNCfJ5og5TWaFXAya9cSnqX7nmszdeyHedHbdwESsRXspPUUihL6jo35",
  "key30": "nG8AQL15WHSXZdiKpBm6bcohrwiXQptpkYVHkgm3HXyfd1LQQYkRVPkKF7U8XRmt6biWsYRQ6P7gRXV9rtp87DH",
  "key31": "58rgkjcWHkyspsz5Rvtxmv64LcLgSDGGFGw8qPmaRBB1EBBBpXQ76i5Cm4DsnGpCCy2Uo5YQAgyckb26owNmESNs",
  "key32": "4ESjAZCi9LhdKEnJJpURjoy2abDQ7fseoAAy8yzvLvQYAusAQVPrHBqeU5DwLLrnVaQkwwWHeCcHojishiq5Yr8",
  "key33": "4Noppmiej3WecVTHfQCM9HZhD2D7MQU1siVs1uWjLf53a6vTrSy3goUnUHn6hB8MQYEuvGXZgMnXZzjZV2umE9CD",
  "key34": "2yT7Zsr5FdkSNBnqA2PJzYLna34tNzMaaX9kGs72AfyoNBqWHEz6JKG1WkQHz5jwy2dXmcEiEEW4JkVoe2SPSJ62",
  "key35": "3Gs89SAnSD3oHz3avPLbkKvVKc3fEeVudKeWhq599eCt3SEWyYCS4v3fJ6y7oV6Ww5VTMmgmLteBhv5tNB8SLyhr",
  "key36": "4eAxVxpcfWkSNDDDTHsXZLq7yaTwVFP7qzMtMcibXgug2UxEdz5fQjj3N9WVQudib28gvBs3Af9Dw4jyNK28KNSW",
  "key37": "4D4KsuCrrV9rLqXeHfCgqoQR26xRUytHRCtcamAxzZ3Krhp2bBDwLeCyT6e7JzWAdFHrUXgbh2UbZF88qax7P7ZA",
  "key38": "41PgdB5Nk7xoQseqoANpuyPyBikHkB839KfXuDKDk2hJogrGQoZ3TiYvRbVhovUspv7DGqn3iVnejouw2TbtXsxQ",
  "key39": "4NnCrfzbDyU9W3uqvZiUgwgmYXaUSk4wJKEJyWWGdqDsw3gDxYsrtYnkdhBNYcWJ8YeEDNz5DRAYyGakgScmFoY2",
  "key40": "2kKcJ8MS9j56TsmWhBJfMrqEtWUkiQofpj78sZAnwADPwbutRvk5279RWZopBACi1QeJe3qLZK3i3ZTCDXivvocH",
  "key41": "5ZuH8J48aBCSDdMRrkhF1FNvnt5L6qPVpGYHnrQY4QxME8E4DiQRWgTx5gU2rdjGUz5mZmzKQBZgNyJqdXjng3s"
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
