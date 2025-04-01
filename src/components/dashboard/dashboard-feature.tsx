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
    "45bshuA9rTZSAciKqGWnwwx33t5x43SEgC1MQUYLHrAx5qeFBWRr9rGNemiobhpzbKeBnZ14j9pCYevXbjdmNbFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g1j7qsHwpK7JKedjTrVrjgHbUapHP39dak1joRVhztiqNzLGczCV9PxUwJibFWDK9wYuFbLmboCWDksjrFdLhsN",
  "key1": "tWEhzbFyFePVAJqLHdNibWvrwoESYs5ddGb5yVyLhyfMRxWgiWwR9Qcut5idGDSqeViJ6BFsVHH8LMyotwnge9u",
  "key2": "2qdMLPqY8nng44DK9GziidLQ5ZCaLGP9WY78c8LyQg1e6kvqemPboYQpXNQQuMWmyNdk4U68pe9v1u4uzCM1MMQa",
  "key3": "UqZKjPLf6cpX8a5z6WZHHhjNLttB6trpgSrqcwpkXhHEPLp6xPk7HQQZTdv74gPw7pWXk7oEwoCKmJahq2SaEFs",
  "key4": "2rmmmDqQTVipBj4frcWozK85QtQJC61aDAkgCH7xf3t1h276zKaueSdEMiZu9t7UBbhUdtNcJpym35VKa4iG1bUK",
  "key5": "3EUq4fjT6d82vWB3AMML34cexZCPCm16jvDqsNWRXbeRprf5o1ZyJHzkB2rps9f2tUJ9EoxTUTP84u4i58yrT8XR",
  "key6": "5bGLmP198R2EzpCuGAe8e32mvzaJbZryJQLCWJNq4e9FtcDYH1PdRYegD7Gj5Ha7ythKGXAdTxdFDNsQ2EyYjAiW",
  "key7": "635nSunTAdqJs3DBixBNDnUcNtpXtYiUsNdDoKVZM3kjGwN7Vhwjz1nJW5Tu3XzzuHQxmcuyKsz2jTYsbbjWtvss",
  "key8": "5de7FFBcQdLnKAUvBMv786s7nryCVsra8zSjpPTr7LyRBgirJPjYZC9jzrWjBKGUoqvmZAnT4SSqryVGphM9u5uM",
  "key9": "29ZDSc6NyBfSVid2bZKrJMtfKE3XnTPbM9vexiof5jHZ6ED3sUVbLtTt5qaa94DuFBPPPUmsJ9bFuV1nJv1fQL6K",
  "key10": "4DU9Joar5DcwTdp8yQCXt62NAiVefHxbczYSegpK55hh5iQxnz4iZa94Yu4xtVLaYe2LAVT4D7THgsi5VP6iLaSG",
  "key11": "gtRE5X2JdtAtLLwz9NxUEnTyFs5aCiGTJpmb2Le1b7CVGnvBYr6PfeJgVUsUr8sxxqkLCsBL6iFUS7GyrvEnvUn",
  "key12": "5vMcdJj3KkQH1ACLWfFqodZQCrPxqZWVJMDdbGw8ahf37ABXZFRgMzckhQP4N32fuH8tCPF2B5pVFqGZvc6FzhBS",
  "key13": "3kqXjeJ7TyPMidvfb9KK78LZ1LcJra8q8WFaFURUm7QFZP9kkbBcNk1Tu8KVnrWq7dMgRoU6bdfLHAcztaFkP4Fr",
  "key14": "58Nxqbkn6dMDH2eXfrMFSb1ACjCY8AV8gayvorzkhPnnL5vMinpkbyAQ9SPKDHC7cDX3VzXpnwXbtmrgFBJHys8E",
  "key15": "62ou5aggpVSRaqWtqtKGwEMLyhCQnhQM6XT7k35ucN2L9G8g9YVspEr6ruquvfEtkKb5ew4swUiM9F36ocwYmR1B",
  "key16": "3cv59AiDDYe2NfAE6iSq5uCjVVGjcyKnxrMDg56Vhrmc3UaUBtepXNseU8eSLb2gcXQXVi32GeNNThfYH5VY5an2",
  "key17": "9A98FDbvzSvyZB1Qcz1otpi6CBGCMT41Ap47Pp1FL9S2YuCa4k5EjfKiQYQLaWZgHqvvZAtk1W2iXCNhqH2S8fj",
  "key18": "5HEophpehAQx4cZ4FfPWL6r6tyKLrT5hEdw7FK5wJGFeBxoaGGs2jbLR3wi1Ga7ZtqT2ZD32ZZTab5aQmSu3BD6H",
  "key19": "35fcnCRoNtpnURLZWok7zUMSwifFoPg8PEhBBpC5M8VPA6J34xJpU1XyPcHcrBjHPgKbDA4DPuExZw29UtJUgu4X",
  "key20": "4mQpeFoz2Xj5UEryHmvWuBVkJi6EXp8vVthRS15Pwk2bfxgALZSsuv71w5SePhJJrwFDy8nJEniXHxKKjAEh8936",
  "key21": "2ofXYtPnKDRWaiQPeta47wtUJqcJvgsUK1kdTC9QbsazNVubapJBBrP7cTh6rTXuSwQRByyFN79RXbEdZsjyAEBR",
  "key22": "33eh6i5Rv4sVzFimVEdDuS1MdXm3UzBqM3HcgvEJHAUzKzfzRA342ZnPHkfv6MyPzsM2CK1s9G99yzbYUy7VWcgi",
  "key23": "41yZFrkgySvHEQGzeNrUH8MgAZj3cSvyLA1z4drQKq1aCwB1nwTk92T44Z7aZ6vCitU5yoVPwfnZmPkhATtb6Drj",
  "key24": "4S59u3roPYDnkQgDV9aM9eFacKmu3eCympUheTxaFZDR4xRqjDXRAGW1iaawjYbbJQL99SXNA7chr3dyoofEoQdK",
  "key25": "5BUTJRtGST67TKaAMTKmhvSniHQSXnSLit3wx7VjJSJpHwKrsR3cneDZoMZH97ZPs3HbtFf2FHkUCSmQkuJWLFSW",
  "key26": "21oqjF1NrGuqnuhWJEzZBWgQGw53yeHeEb78NfLZiJiqJM51uesqg4PnhA3MSGASVoTmB2VqvWfEshPNdiUzqo4e",
  "key27": "2vLpV5xproxJHuTq34ioyRzoR4WQMgptUBFkqVHHYsabEjidxUtoye5SL7nnAfgohwSKMb6QSZXtNojJZskGPrZg",
  "key28": "3uN4AsXkijTMFEimSrvUyVPG7qBFUsqyihTNtK9yAsn9Dt7gZK113syAVAwakqCqJ6ix6yQsoNQTjyCaqqQuvz2M"
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
