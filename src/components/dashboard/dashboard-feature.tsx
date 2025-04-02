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
    "5zurnBW25Kx79TzAdU6NS7c8dHo2hAe4wQmMmuhmZWehPdJ3Ce9Bm11bJjwhMvYDvLiXheqpS5hDp6t8Jds4tPYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hV9btDPh6myvxw2YPTv8xCwai51RkLajG154NxMC2Ynzsc2HEV7uPLmsVAyCkwDLzUnu6UAcKZUgUEZ9xBQCnKe",
  "key1": "4xaGjdqFb9MJpCeMCcNdKs9GbmsayFeBjfvtkzYAumFXWo24QgNZDugd7BRCK5WmrzKfk9otBJTx8mCDfaGnaoaQ",
  "key2": "3Xtmz46vxYSAn75nLPyx1jtBgSnXEdXirraNfh7f1u8iTeNBhzxdSLS9JykP3kh1NEZwitbAiPWiYoF3mfuGiNaH",
  "key3": "5hRD4qrHbhSVwp8tZehjS83f5FHKoqT8CB5FkhnoU33qXc1PiVSJB2p2fkGq4j8sMuhWdDPM6A9Er3FPLcaQ95Qg",
  "key4": "5cjjWYozMhDc7LHLvLPyoDfq5wxBr2pCweDzB7UW3tWn2xm41PvNQ9C3ueTG6xQWTDgirp8nxuaSzBWFvMRaXqEy",
  "key5": "57QZqfdikv8q7wrWhnHZauqRxVoZ9b3rGVdmUNSBHS6DDXFZGhYeUwtcAp85vJ3WEtphHMPt6XprwdhUEs8QqXi3",
  "key6": "abGQccGZ5RVuuv1FgSf768mZF4Spb6Rnd8hPPySgnw2DyYXHdzpXBqwZtKo7bPcgDDUWTJEy5SqjR2P6cm5xxhw",
  "key7": "gpjj2eQZy26TTEwNjhj9bHhrypxTZhsdkYEi2tCoy2aKqrzag8ZGNZWZt1mn52xYLxLgix4SMdgsYb41YbWqprV",
  "key8": "2hpMauBWizBbV44DqLfdYmCQB3g5PRsogfDVFGLYX8sBeEa2p3p2Aiqmvup1QEDycj6zSWKfypAN9qDFu6WfitKr",
  "key9": "5Vqv4uAMfPq6TCfusgg3iRQxmNFXGNXiGvRMoAR8HsZLTAymzxNtpsR8Lir5n6AuEvWXnRcVBtvTAdpmAc8VVgAX",
  "key10": "36T8bunSiNwTN4haZFMV9FTTWwsoW32yqdDAzhDu6RTAGGbnaEVCsQHz9YUrXmSRUusJkArQ2zRR1v4U7Jx1KFPZ",
  "key11": "3stCcZNLSTbLmrDhbShWfVC494TxGG9H8uhAQ3Vh6CvodVX95z5QL7L5LUCd8nutDuZRRdmVyC8BaE6wLYtwWciP",
  "key12": "4pPRx8MbZ5hUzS7CPfngGFKFjNFuVAseJeY7kBRZ4J3gx4D3nJYCF7FtrdfWDy5Qx2hvtuQFGy9J6wRJ1g29ah5J",
  "key13": "67LAjteknNNbeRXF1kqWBb94Ai6xbxg8RehBS4dQB4HsdVTjRWDAdHUU9kDbH3zSHqxk4NYdGembbfm2tRSHySRH",
  "key14": "FjnMqSW3twWQfnqpNk2q5xF2c6PCcynuBk7RoTyYAuJWQuA6Gxd3MubTxnVv7WwnQrXNpyTe2S1k6gum3EhHKut",
  "key15": "3DYmYwKkfdgd5C1YJAsC3vrnm4hSe96jh7Egj6pGQDxssFhiLDzfs3k4EBYMpRYgttPyBZnbfXfNKJUc2Hfzat1w",
  "key16": "x2ZY2D6R3XzmThtMtAYw7EpV9Di7QoS539WUfRNyKhbyvuTHwNvdHdH4WLDGX4zBXetuAPCxvwus1ndrJbbCjXX",
  "key17": "3jdUShdJh26Y15nUsRWhZScDidRmmQZUUanZhdLMPDTKkdWhm4pERoVYMiUPQAQzCHnR4KWdeDaLjqGuJguDE9FR",
  "key18": "3v4QfCBVgpAYGom7NjCq9z4Homd9YgrBxEAg5LxXf9Y7wdUKKPdrTVaeCUFk2NDfidw5PCgrsgeLvVLTqSEfzDLR",
  "key19": "5JcG8ZfNTYKu9Lr4Mnziu1QQHSDYHiZAtfWzv4WGQkPPnJfi7dURkQ8yPcrBxdd79vSmpbS4ety8o5XSZHAW2HU2",
  "key20": "wTQFTMbpnk1YBE8pNxU9db1HPk7pVarBJPi4of9qhYEtKasjUwVouPNGiKTj7fDjmbgXKKgFEQoQcNVxSWW9pWn",
  "key21": "66uApZPSqMyGBuRwuE4Rm9mPT6MR9XE6ogpD3HgVnXjTHF9p6e63DdmwH9cRFTUvRfUQcxcogskH81voVb31T975",
  "key22": "3Pgb6vbSemrQCB8Ky7aSQb97HTqVBCS5CUsKVtSkXeorjzmzVwDY37urAu5tVQF4QonP8csKWq4XFDAFgVxHvBQs",
  "key23": "4vdZLJyPryCAeHcb4PCrfecCJQtGMX5ekXaBWHgBzEP3mttEyzUdWrsxaxGpNBGGTvDYhSKRbytFmAioVZtG8YsY",
  "key24": "n6zdmkByjWvtZ2v3ryvprNi9JuTCmq3gCwX9Ws6wKAS6nakFQ2wGKCzjAKGkPWZRQx9BaU9XP2Uh4x7aP2kLGvX",
  "key25": "3u7RNtndKozg2WSP7a1rbP1S6anmuUV3WQdX3Qx2hEgKZGEqjmm7V1X88DvAtJ8iRAbiZvDNPigvAt95aSkDuAXf",
  "key26": "2REMJVBnUCdpbRtnTPBpDfL2NCPtqWfZP86hjEreR3GnXAP6CPdR76u7jT51H2DPRAPXEPjP9pWAsyW21w4VTujP",
  "key27": "3t3BKSerbZgnXBCXQAgTp3gveWksB9Nwq7eJo2YPTYA8pCnzVg9Epwm27YpmkwMUWQeJ2XbA2qz5T4MZ1hWczHw6",
  "key28": "389EDQWHL4KzsMDstQmQfa91jMVJ6PmYSYMs6dQMtrYEm4dG4JDfZ46shbSFZqzVmA9rs9WRXmtRp3FmUWVJNBvB",
  "key29": "3GUNKdHxZiatgrAzU5492qE4qzDb6Kfn5dHAvWLHqzzSBhKUmiFwYUjYQLZZK2F66Tu1qGAAm2QLrL81gJfejL4j",
  "key30": "5jjvy37ncYYhj1gJx8BV5TnHSYhdwQCzqH7qPhLnpPYgaw3HkGNHifabS2uEnVxVxgNtm9n83zY7DUwRU4AoT367",
  "key31": "3VxWdCm3AF65XgJuCvQ5nVHfcUfJsZrm47EWsjXkrD7rtHD9oS6pVRJPRh8jQc6svwqxFPb6Qf4bYCyQrdNRutbX",
  "key32": "3djwNjQ9EZ44UuD2DtZLjKPtnGteo6UCSxs9ApURd6s2PLteDnELeEPctnur9voVmCsby5wczJE5yfo1RbQCqewj",
  "key33": "XwimkjepUaQKnnroENh2Ny1knaGCcd3kUj2xFtqVDCXeVVnfsV3foBqf2xioCkHnzmY2HG2pHywe8EdSavGucAe"
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
