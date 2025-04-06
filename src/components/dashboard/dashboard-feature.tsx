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
    "2tnAw1564YJQeJFgLAcQRsBSzRUshQ7sV1ScRqrQV4qM6Qezo61ifkdzq9XTK95KzbtrswfDapUQ9JiEnFSr8bBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrHuJF6cNwYdv1hHrLJjzijDKwJFWNL9L4HnS4Z3jaDP1av3zYbJXVJBCEFasT6J54GsiMSFwtrNPTAX26SqoiU",
  "key1": "3QjjZodQwB4Bx4xNFugPDWKVWqTcnfSQYr2ZvdMM7rS5q4Aapjjyc8VKXzWZ3Mg2zE3bsFqPSrDHfc2uAc8HuBbM",
  "key2": "2jztbxU8outkiwDbvNYVk3hB3auCBPWDmVJbavTDmEzs6dofe4kxzQPX7NE76Bw47R1DAWD1XYEoQc4MfWjjEtPE",
  "key3": "23sy6bH5FSTe7PTkFBh6o5VukuptPQSmUQK91wwiLLZvvxVK6cnjhyrgmu5mDBLr9LR5eqxgBbKKdJGbayyF4a68",
  "key4": "5eECZtcuu3y9FVQTdgyqWAJtEMApbietTq8ZQMo4nUu1FtNFuDW19aHJ7UARAgk1JsDHjfzXikGi6mNzPtUjD7Ln",
  "key5": "GN9MaZUoxA4kJzh8Lw7oeHicnoiHUCCz3FvZFhTuK4KHrdFzHxZXNZXNKbxohXnHwH3bDmqXAoYQvezc2zQMT1b",
  "key6": "4jn4DcnjRwLmdJZAUvmZNysLvX6KsGT2jgXp69sKjbNFd4jgW7xmVR3ns1GSqd2EbRvd5tMxHy81xzrca5JCmSut",
  "key7": "whH2EzgpSPLEwibPgEy1n8JgGdPCFTJtvbpCGZKtepzTiYzdNxMYLxwqXjyGNL7GffCmuwHDqMDWWvNnpznUFmH",
  "key8": "2VW9GzTaGxfswkCMpY8qfkd9GXHwXP9QaNb9G15eK8zsBm7zWMSCvs5pRdVdXLnUtDEHUFHAossiS19UQe5yNJf9",
  "key9": "52KwGi2dGkDKCDChLTAa1a6WASsz3Tm9sQsxcr9pQEBbhtbrsAmou1oDwtovKuiRsmEkk39juH3bxkvgJWsMZcf4",
  "key10": "4iKckU8A9uEzPD7b3NDinU4SuHbLCG8M4i2XK3q7jpjHjc9KBvi9aoXmgR6zxDgqg6W5np3JUa6r4Yr4TjaqAyqu",
  "key11": "51xhodX8nJ9aV1UWNMrUKHJYHjEhtcqzQxrcnYasN3RbdZRbxpa2HzCQVBNQN1PRMFFZCxswLfUpnBWWDJM64dNT",
  "key12": "sTXMrpE66eRYw1mpzoxBLeeBPZTxfpXFppYEgLdE1MKYw23Ww1KwKWE54HXxkzky5Tj8LPbLEpW2MXG14MYUBSE",
  "key13": "3cewFdRrAtnreMfPBgwmCRKXTfjR3gCESmRmWYtWoxi8fCXmF8wG3aKbNUEqR6ds2nzeNzsDE58cf11Wf9ok3zhk",
  "key14": "2gpyCgKhJGwhECww7X39R5ckhTEm1MLR5gV2EoyfbqFuPeXNNhvq9d3C7S4uM4Ae71BVXzB922xu1s9U9uXNS6zS",
  "key15": "5AUraHgF6DE9VAomzMT9QscZuEvZ3CrCuSSJfmztpA3xqCcoAjpD9KH9eUCM3nt9xegg8nWLaYJE26e3c8CHggWE",
  "key16": "64DXCCQqg1pYz1G5tcdNx3fXiRXiDYML4Wqh5i8VniSb1DKP3djcEei943JShL9oRNDrGv2FzNuVHyy1agFZtcWw",
  "key17": "2ibczqUHW7o5aWZhShMp4DTagccWUeJm6QCK8yoEQnVeMUpWGTErTRB7sPBfmnpeDC2X4tAj9hYKB3pvXPf9QDm7",
  "key18": "2FquiANbCcfG5U9Eqo8EtHoug1wgJuuFL3S1Mguz6dFrUFrfiUZhqYioMrZGuRq3MJxFDtHFrwThxmftrRBg1TDr",
  "key19": "Q4SGHdcrxSQvtkV4fQZnW33JoXDZctBaGFeBw85euqALbdbsgchBzyP5vLorx7naPrRtswPVHa9AfepsKu4un86",
  "key20": "3Mwg17K7J7iPC5S3MSWonLqTnaU4DJTVQFAuf4H8zjJr8ngrNEwwE6ktnUmySo2iZFWKRtvW4jgMBYVDgXu9xcZm",
  "key21": "3x41o5LMs5NtP5kPVPnLVA82Z6mXpbyReZT7f25ohnYwFmv875ZJejkAAAccn3E4CAXY8eCbbmeRrqhpgb88LAMo",
  "key22": "5goGBXuheypsfuh3XjqHZ2Ae4jbhVXrFrxhqvQEWqpDaHoZ2fdCrSGdbrTx2gj1j8kqY2emCtKbWGZHvz8Bi7ZDk",
  "key23": "5Wn5kv6jz4WDAxksDTgVsiK48GWLZvSZDCtpzQvMvZzxcFZfg9fUsn6gEHnKtWJ4UztY37NHHKMhV1vYm1KZRjdc",
  "key24": "2uycJnqfmuqCQWCzfWbURyqSGNWA7SHiGrFRwVfXMLdC8RgKwQVz2TA6bTAB7vWuWxp9toB16YbXQ3xQaHSgE9DZ",
  "key25": "5FpH3DiPh6qHQbsJn4weGgnpubB1yXX499NJDPdzmpHrXz1UkghCbvnhqCuepjSAwGty9JFQi8yXchWun6Z5maXV",
  "key26": "67iQPnCog6yP3J49j9WmvAbzsXP1yEvuceYN8sKXvQUcZV5p5T9XoRMCLW1isF3wsV1FaSDo3BzSscaTSc4YekJY",
  "key27": "3MtSnzKWpdvLsbxQ2Q9DCsmuVxbVxqjanaWprweexBosc2XJWt25ZBqQhd9HMJpkXrdBuw51yre7ouDLDmDC9zDn",
  "key28": "J5c8XbADWQdZdyNEcAXd1wrAWxorbq45sC9AfFmhCTm7N8cbYD4zxjgKD6sqNnAyzpGSdFTLjwQMEe9tYXXzGJD",
  "key29": "5Do6svMWL8FnVGJAdevtB9NNFKifr68SMBr3vN7jXVmg8RSW3gu113u73MaDTjjsrFKujBF4BrH1Uqe6mvhrtjZG",
  "key30": "2ZiJGKkvFnLLuWvoGtQYfV1bBCkx9mKrC1GAu4p7DBh9tPTJDkSwS89PUdxwkY3NLP8P1UPPXkt2LMS2BdJH9Vb1",
  "key31": "5TqPXXwCuAW9JtkmjtQLeMLuXE5NrXKfwTVF2QLUcqTnu2R64sKeAQJckYuv4AEBMY7VjZEDeAZRGU3sxGsYa3fp",
  "key32": "4i67rhxisbLbNY8sqGxFgefHfUNLAqKzsdMy9YWvpzMTfBnWnLgBq61SXf5C68YvGmC6HZuSJz55oeGzr9ARA1fw",
  "key33": "5KTAJ4mdxKKP7SzxjiA4tpCKmEuda7C1dq9652e2Xb1KctC1PXqXoWKJZdsN7DGfxqxyJwsherrSDoe6MMPDq2qH",
  "key34": "569pgVCHqR3VMpmG2PQXMvE1qYVozpnNjEYNzfz88h9rqWR9fHUjr23co4e3zA23h3m9WSZJKWKCXRoLH7hoVhvi",
  "key35": "2VEgo8udZDgTJKoTETjz8mxskCzHk3whSv4mDPDFNdhFYx1Y11ddEiq35rd6UUh5tbDgXUEpqPvKsKYfNHwpBnAu",
  "key36": "5MSPfFtzt9JugJpobrKE3L5iDpc37AJaZ8mh9vyaS3ShpEJyFbvtpvts6txAv54vyZQvNtUrecdrYfHx6fdNaxNK"
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
