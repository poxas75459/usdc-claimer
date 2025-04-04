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
    "3mQyKnWrpFeMXhXRMqFMnpVnnGZZjHSMzsfDmbpe5PKQELJ4TRsw9TseWU7HAXqoWLptfpnFQoxR5abFo6AMiNd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DgbjGatMHCRmzcromQRtKv6GJaf754pJsEycTNfc3tLFBswiazDjYzz1AhzezFvLr1ME1pgXtkrUraGZ8h4vHrC",
  "key1": "3raG4vFw6ZfA1RAx8tPgnzuAbMp4LhDstJyrtmeN2zEA8NA37uoBPfzzgi1izSizBY1FusLdWJFiSFfcyVAR267o",
  "key2": "3ank1sGsShm15PGK1B4BQFBTrXLfJuRBuNiY1WKwk3WddBk78RG9pEJpXcxk43ghuhHTorxXw4WgLTFy5bPApFzv",
  "key3": "4DSkSKxY4i6ZdnNHkcuNUXGsQgdBVwqwjCsKtxz3pZXzVbqBk9LQCGRw9AbHxZEkUaCJpdwYuhdFALUnYhoAB74Y",
  "key4": "3gA8KD66E84S11MMHJU5bnLmKMojhTUaFSVVhBN6fG9S4J6jbQNnhWwSkncoPUMdRRF9NdP3K6Uy14Fztgf42YSo",
  "key5": "3VNPaP5ULDN5a8RaZyGE8sg3icNUdtVco43pPFcXX3Pc46a8Gf1QTkfmdytMpNmCjkKLjiHB1ZUQ974WmiUy2quC",
  "key6": "4Y6b6xMjBe82gPqFS2H9E7BWMcjGkB3pNUHPJtSjrY1ZLztUrsdwa7r1FgeP8VK3MPrbkKa5Jk3sZYatAsd37ENq",
  "key7": "2YBzvDFxhLeDhXo6ueceQ9FKPNLhD6k3SDBWwxrmzEuXRvshtc7r3C6R6H9hsFRJgBpX3LJw5R4ecHBJKdf51DdY",
  "key8": "61Ru9do1wN7ytRpozswBk43ki8pQDoTWBAbjcHihT6W1rMouWKt3LWHZGYXk2rmUvxdJGJVxnd1k3wg75dXBENJx",
  "key9": "4PDqo2NXFSmtVKZzKyZo4Bi33DjfhDJPVqPDGEi6PdCENHAK8b64q2NySf4UaYM9AQDmdKvKPDi4RfgQKu6Hf5Zd",
  "key10": "3wzGPXLwc6h3QoWEXeZ9yk8YDmHoqFMGZmapGxJjhiqBNNw1Rjoa3ZYCJCdi5LkkKgFv9jH2Ww7napPfxR7aP2tP",
  "key11": "575qzS1q7YGBPo7zaa2dckuWe2HKGYqDLEhpuyFYLdnYzFYhb4kbrC4d6kncsPMWKNdXszhkaifYgSvJAviWvufa",
  "key12": "4kH6ydQrWEG4sjakdc7ZVLBSAh8Q6mytqf53zNwDPhE1wVYjsun6fteJL4ePWJPLmvSDs1vhei7Vx4HnnqBbSvEe",
  "key13": "5WLvneVCJKqc58tWMFMgW8TowW5G7yZvjN1a1hp2raBdMgefAwBeLoom4NHbT5J9adoMNE25uizrcGH8eWYyxPWv",
  "key14": "3Thgk9dCZdm9X8s5D57ucp6oAyaU3shTRjjWDb5z8L6cRRJ52FPDsm1NieMWaThhAGbSrcinZGHRyNPiapBw9Dwu",
  "key15": "4iuA9LUZw8BNnazWmJ5Eqn2yE99RX8oSff6ASKyJzzqaKDHVTK3E3NDaTbwGZRztECrwJ8wZeauNt7YLPPAymRnQ",
  "key16": "VNNxPUdabVCSG92CMako5G9rB7HgKgCQ4aFGQCuzSTGkcPCMENJNRzT9chjimhSNFxvWZyEEQ51miV2FvyotiYz",
  "key17": "4eGrDtUMo3zM325HcrW4mPKHT43omnkSxweBLEsre9g9DgbcUKVm2JfVoY4BtNBtbAE8qj5LZpGmwK6DFzti7BKa",
  "key18": "3QAUFeg1TPFPbyRZnxYceiUtrWXrrdND4m8AbnXgACPsezJYU35E941T1FMD5ogJ2VHkQtfD4Gd1PYC7JRXjgrtJ",
  "key19": "3nqBGbZAmsy2zdbtaBLq9D1qXgx57B2BqCoFRNK6N1AR72ydv8HiqCe9hjDXxtzFZ5wACgn66KKgj23GiwXdQsp3",
  "key20": "qX4TBgiZTYfCY4N9CbyMDDErjvDRjmkTsTFvVDCtWvMRvgeusNz3cgapCXZecHvqyCBEWb5aKA3dsQCtFSqm4Dk",
  "key21": "na7M44kUGdgceBGQZaF5Va7wes2JDHnT6c3XPexckjA3D73nyfErVvPUFFSWRoSc1be7AYnE5hcXXaPiC2F36Hc",
  "key22": "JGmEeyVLfZ786R1VFPZaGzDpQtkfh9C28GsZA5p4SQWqF974fxqjTMLTxwWTyUMQ6LbsMRhFDAaNqZdALriB8XN",
  "key23": "3tPw8QVPnU1heT7yKMLhh5kVQrKhCMVzjKoEdQRRuuRorpBBBJuT7TggncPx2oAhEFHi17PjSiDmYxvtncru1ezu",
  "key24": "3rKo5yXb8sc5qBvTLefvy2JPmJatEofpi3pgDhMjh2n62SN7gDhVfekpLoouuG3H1w4nEpXyGQDSpNgUGv3cadUi",
  "key25": "7h53MpvttwonjJPYnS4K8ZcC68T7o37TrSRkpU9RC9j8sgRRxa9dDMwGvwNWkWgLTQLgBDCpvouyJyvixFjw2bh",
  "key26": "5CWx7ZtGCLFQBB6La9HjGMAbEirbr5eLSA3kD72d5nieQ21f9pdkrbu5ZBe5ednbnEgGfUnAxNXCNSc6GWpNY4sE",
  "key27": "3D1mCQAzsBJB6ZxZ5fEW6RXjDWWmp8pmsTQDdg32XfRGakDFMaMEvQbRzWshgxe9jmW2oC2UND23X8spZBPjQ8WH",
  "key28": "3hUSnjCtNDobKcWh8Yp8kcGXNHJW4MLH88uCh7x14LMsNSqAgNHvhkSURzRPB8ndF7RzDYyKnURsKGnRWbC3b3PN",
  "key29": "s7tyCNkjYnQiHfmPNg7EnZM9LhJ7sE9ytDL2zHRETiiAUvqFxakJMK4ogAoLMspJfD1Bvxey66CffE25eAQisxQ",
  "key30": "4myEojjHzPorqY7rmK6oaCmCDhtSSrtF6RdEExnqkmSFcxNm48jvkFqBEQ83rtTKvG6XvsgFcSfCbaZatCBs4p9v",
  "key31": "2HMWfu95B1iQTqJ3znQshHWKVet31VPCXcaomdP4sFC2o6yZvkviGCrUWexQnAaMAAturVzVFCYVMXHPuLYmwTB3",
  "key32": "2kURuqcsfaX12YnjGWBbTHQjyrWnXNGbRraND1Kpn9GGXKAEDbABFZm8cFZ52cXwZH3xvJUP2xh6YfKGtDT3yQD4",
  "key33": "4vwzDuLGJxj4hvbrGYxmVFZewCGJo7yqhZ3gFA4MSH8v7Pze9vYQXChLnMJspCmNwYVC5NNe2RApDLK2ETinzoVx",
  "key34": "icxw9xwzQ7HvSUx6mLfuPJqyHEYda7M95tMKowG2WGnrFNJ8EydPB9AX6aNTf4LnUfFdx6rpsV3VZqYkuD9d1Kd",
  "key35": "5iAoG1RMBi8rmo9sQgmVULnaXszjaaAQMU8jE2DRs4DqdhGpnBvRvWnFPiN3a3BaR9YBqKptmoaZXgGWDst2rorc",
  "key36": "3f8MjHMs8ieBTHxX9aCp1VNdhsRZvyrc8RWLw9dK3JwdHg7B7KynzVU8Qg1suXSwFLgukEi7vQj9VVxyWJzyFJ96",
  "key37": "2JBxg3EmRPEPNUErv4RiWH86rfFJJU1xjZidYgKqFCNod9S8iifvhtGoS7ZEgffgNdCaYPWggzZq83Sz5n4uvcJy",
  "key38": "rKcsBPFLcpjJ9ENfbEfTQNS3xj4uYp91ePNnuuW4eVKhjhg5stUN6fHzpi5YzUeM4TU5UC3yNEvmYyeg9xH3k57",
  "key39": "4zwGc8P8eL3cN33rnfNzikMKnA2cLhoCNM8vKa8hLjwLdbiep8fRtnxQN7mbZU6SKdFDj32uypmkpFh9v3U9ckSh",
  "key40": "joeoLDWQrmmuZ2G84JVZXKdhPDdXYc2AhzJwaMoPMmiCKsZMoJK6RpKbPS6NUwJgLs8s6g3zZ8U5qGHw9XLRmWt",
  "key41": "5zh7hvPBE31Bgz5iyvptUBGMcfTDKLnX6HnhYgUHq4x6rhTZw1XaDmbpqMgUisCtoTK6cvP9xDQG9zm8JXA6cnJn",
  "key42": "2fWjQgYccDoAMN1PWFH57Ns1mocychuYNJPpqAvu9Xe6EYYFjVZy8oV8WpsGCaFZtjnW8H1VND1mPJUe6Rdg8jhQ"
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
