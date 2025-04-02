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
    "2nxontbAhdGyKvxy4GDd3mcjNa45YdvVRYAerXoekBabohcarpBLBsUKux3CX4BKAKCqbn6fGjautpL1LzyrwWMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eV8n9tk7rfd1diePM17bTHrNZMJCtNm2GtJMm5CMcnCrDtHWjt1UBNMRQuo5qZMtNfNtvgr9Ku3HUMEu7JeNMEq",
  "key1": "3fTcf4QZFn98Po8Z9wYrC8yPFeot5ierbBks2XdE5rUeDepv649ULaLotvar2567qxtpwWogbeirqycnmPMx9fkY",
  "key2": "3ZNWuWboi93ZcwghnQFoRU6xypqz4DYg4XzaDSpTBKcwa9uctz6HQmSuD58GDgq4KDZxm3a8bvyxB41pZBSTVndY",
  "key3": "3xQKUBadipTi11GRn6FXE18rSnZjuT1YN5sFae8iUSsgLU4w7eNhp8PsEEBYRqGDe2qRqoHMqHpTQR192vZKkC4L",
  "key4": "2W2FVD6tsQhSVMQWRYy88t4h8xTNjSeWAMLTVPkdia5VABRt2SvdmW5uu54uSJdumsSonYTYs9zWKG19fdZwdqBv",
  "key5": "38x6ZDrTFCikWDc47scspL68CCSKGXGBcbgvR8DAKVR6aUKSrK3mwkL7eQtuw2er1vK5dWUmMjsTXN2dDmmx7mtC",
  "key6": "58hj757qEECTZq8ipZ65ahuKr12Sdqny7qdZ8rmjFDidB5g8kz5fwiG4uL4G8yhi1fCY6SFGrzhj8V7XSjjyH1J",
  "key7": "3JstsL8AWFgkKwTaNDYjSinkb5qTLgpxxGZEJpm4qkLUD4jzAhHj9dNKi3z9qgFdxJ3NvKQN35YJB4r3dNerCupQ",
  "key8": "2yJECGdjK7rFfYcJsemxiRfyCeUXZysdr7acWhm6ZLfMW8kawVSrht2t42Sxt2hVLCRLkzyRJeoMcms6sYnY7y4k",
  "key9": "2dnBtfK9HhRfqHjj1AKEJHP2Rfd21zmSJdFN9sdPzySx9FqV2m5iKDpmxV6dd3L88Zd9UM1JMF1TEm1DrkYdpQf1",
  "key10": "4akuYaNzxoTn2ari2KWJtA6S8VNi9p5DJeQ5kvF7xwwerKRiu592D1MFjJ4rUAYWZK8bBYrRCzZUkBukiEvXyHAc",
  "key11": "4MmFsMi9SwdaGz6BVSHG72vrAwfeaHpqRLXiorLLd4u191CsRX4Y99bZbxLicu5mrj2PzHc4AjhrGVfaiqGYnYB4",
  "key12": "QjnRmaYqQMG6avw8UFjPLw4eBshyCjsgKgYMSaVE7A7pUhb5N4c4aVF7jX5Dwre3T6SRJjDV13w59FGX6gPcbto",
  "key13": "3MA7zE5og9ehp5nrdrSxEBkB8vju73Z2rdrgLciBNEFcDdUNvuUVGiR8fjRKm85vb8y82TE57pPABYnPWLT8vt9K",
  "key14": "Th9bR35i9NXFtJUw4tNNfwbM9YwmiiLX6ysWEGwCq66oPJymTFZ9qcyGPhnn78m1JHJoZ1XdxjQ9DkkzxFm7bph",
  "key15": "2xGgDtNyi3h74zGyDV1EAPeeZ3bnrZXruFfBFTv3RqxoiCqyptt4h13Yy8udJti4GKZBbfRpZrcWGQFZVFZiDmK1",
  "key16": "4X1nFSKask7Q5HJazr44iAkqW4zT61vxPoSy42uHRcoKUBVyQ8iGZsBwb52r6DiAchdp6gxXPnurimtrfLAimLnn",
  "key17": "4Xmk1cKvBKA4fE4G321w39d1xq8VitkrDTgZjv5rpykQtXcw5P1euwNn2yZd17sLQRQdrKAKfEbGuUTgVMsSQT2R",
  "key18": "4ci5dFmxjSkWswvoEJPBTvBen3Ysz7XEX4mBskbCq7icdPCuFzCTx8JW4Jd6ozSzkLM1T1wfpwamsgpqp2hyEiKv",
  "key19": "5Sj4j8Mx7H21jTKcf41CZ1KNX95WUFSdLSVfnPiTst1EvKPoAh8hC3KVgK4sbtHpR4zGQrHu2ad96Sr4q8jKeZZG",
  "key20": "3jbk7PgGyYb83oCTefQihiqrZJ1jzxLaXiapTTxFmkxQiRDf2C52kvPhzZTUBQp7kVAzpNBfUDgaZ9X3r8Vuvk6p",
  "key21": "4cBJU2e11C5Rde92kj9cERRAR5QuA8PzHYRu9E4fXYb2fnGKZ9p3uFPDfAzPt2vhTwEFH1dfNgCa9BuJdyapiu5g",
  "key22": "42FBbqYAwvRgxE661hpcxFJz5um4pcPCdAeqYiXQbQSmr91QSD54dMji9Fs1ubqHRwL88uEnH686xabwaiWvJBvT",
  "key23": "2RV7aohEoWGwjRvTP4eR2nask5Fcw8VrQxZGuCWdPNErdnB6Zu3gHbfb6tdbg4q6pcB2jyX4Zbnv6gzBpW2o68Db",
  "key24": "7dWLpnX41f4yQ8CDwP4dvACGBdidmbNTtAxz2uT181uKRJ8VQsgKXKFStCPwZPsysh6y3xQDwFLnNAS9HmusEAp",
  "key25": "2ihCXXHEQa7MwbXqt4yg8eB7BCm5ABZhtzsoQ4ramJT6W9969QEcgegAZmJxev4uquTFFNLRubjJmz7TWcWWHifh",
  "key26": "4AGbMCh2q1WttmqZSPpE31TXMRsQSviAyJLZe87X85N5X1zUZW546ALxXWYSBpTXdJ5YzGxsAtAsLoW8Rwwf5TWN",
  "key27": "3ND48mVSo4uyAWTiscz5UaV6634E4FqK1iCQxfnJW8UYBNdha9YMR5uWr2TXd6ZNW9w3MJgYsWDkLE4Q7Kan2e5t",
  "key28": "4ExceAxqKH1vsBy5bBRRjpp33nz1P9rLhwttYz8QfG23x7xb5oj2x4rtCvGHeTWvA3csXNpUUwBVFqXF4nZq2qPi",
  "key29": "4c65LKpr42jhnXbgrajbmJfALrc71u7ZmdWfLYNsHarAoDfhQSdDPMmBvYKWtE6j8mRqxtfnPT2iNrRunDo97jkj",
  "key30": "ZtXYNkFTtobbehrE5DpAscPyAwcfQc5936L1pKqrfoH3SnuerZTqqTSgptH43BaSJ5oV3UzCCUrCPKBk8AmeNz5",
  "key31": "2XQm3b5yGPBBWorRN5hn2NQZJJcVq9UNLcSUC7sTXB65z83eND6RiSpttHE9EcpukG2LiwcNSijkb9iP2v52KbTU",
  "key32": "5X52z2ZoYatDNdHNBgnuWi98TfkguQKhULM47x4Gju2kd9BsLNH5KgzXwgQmHAsR6ffM9wvxxLmqjYvcc2hvWG1F",
  "key33": "5tJEg5uRhUwiAtW9ysGr9GG6xpJH7wYZojuBSfE4aHRLHyM9jDiw32YbbQDLswawQG3mH9n4ChHrvDojGrcbpMRg",
  "key34": "66qkZHV4biAL6e7Pztgx32nLAQxuLYLRdxernfL5xFmniUzLPaYDJB4vTbsxLLCEWQswy3Y9tLgX3m4n3VqA82QV",
  "key35": "43Xwknv6SxCCAjmsBbRv2qAAKQxiYnihn9PoumvYEeyqJw4h6LxcvDDGTX8a51SHXbtmm2z9bm6rrUaf4Z5jXfZ2",
  "key36": "2akSZhDScZkDNr6gmikjKZBtqtceyrHrUf74a8kV647uUKZjvBvrByVnsVH5CRFFhqiiR8zQiXyTAUHG8ScieM9H",
  "key37": "2A1KsTusKBE6mwHfbjooyirRFMsLb9f34GBJGLBxtyPujozsKvmJZUg11KRgqajCRuFAeLR6xosWSjmL63qEbkJv",
  "key38": "43HvjrBnE6iKrbiiDyJ8bKMXkPCBp1M23c37WHokHpPshR75eFLu1z9UfWj1vJoDKYcgnnmDXJTVzrrT2jF7cHWa",
  "key39": "39h7jkQBmyrmq7ZQJdxfaRP5DvSjV5J4W6EQNBHtSJPqimRmZQB7ph6tKyP5Rnf7JNzm5oxjvgxM8nKNwTVqW1p2",
  "key40": "2A3ZGC7X9MTJWNJDM7jADVnt3Mg6dhmyUuZ9xRoRidgRYvqXYRNY7XhDeiQhRTs8LC5WNGDKRS5nqvmzDUC4oTq6",
  "key41": "3vAUwdz9Ewn8hz4i87kEoFzVLvfzz1RAu3j3Qk9hxRuyqvmcoCzE1sMJjzyiVGHiTSnZwZMw1o82dTSBFdPw5Abm",
  "key42": "5Feg655vVPVL9AuChBwFfnS71tKUPnUrRgAABvmEfA2pp6gAjkH7XQKJRuuX6HykFSt2t2pPEBNW8mP5bqVxzsvm",
  "key43": "3wNFVeS9Bw5PMEoJLQJ3sWo2UgWwqEkV35XktxmCGxJutB7X8hN5jppRRqS2vUyL3FVdqCuoxGiSaES5oK73MmNQ",
  "key44": "37MC5m8UtxP6QrEeMhR9Nb31ctwP7Tc97c8TMypuLBkZthegyVcwrgGEcMvgG4ka8f6VM7W72s7PG9uvgQkNAeiB",
  "key45": "41dap9xhyPcM1FSvnZ3ZfAjNgY8thqXePPFC8vooVpkkQemSh6ACdVpcWnif87fniBfBSvCcZXYUJRz5Ce7wkVq4"
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
