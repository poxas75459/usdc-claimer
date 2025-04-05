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
    "AfzrDjCFdTgFpg9hD5RzZKULZcEbBboJhTVeyVb92epjYuduE8GNtYAjPsBDy6HcYVBn7vEhdk4RcbLPFzYs3YW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZqKNP8Skt5DSNT984L6Mj6HdbAtTyW9FgSYY46bLQaQh9QfUU2P5NhcNhgLuRuctaRg6Ryf9EvBWW7mTrqUoeXu",
  "key1": "2WY6Z9QcbLuB7NSnGJzfcAHQ67gysoPZctgiwsLCEmmSkZaBipjs9aEFPvQNVzyK1KrRR81cC5JbXpYPKBCXV8qf",
  "key2": "42rRdzZWP16uxv2FEMuA1eSpp9JHybvWsjkNaDHc61nobMqB8jvaattvSSbsN1yZXjLoqvaWEtFPfMybfCDh4yKJ",
  "key3": "5Tfo13iMeGiNtYSG4YYAraZ4E3fkBhEQeates28URvfktGgRcNQokQHQjcm5qnD1nq7UBmr6xoHrCPoPV42j3szy",
  "key4": "3pSBjAoCmBUf84GBuXXLUQAPV1ZuKpX7j9eZFsSust2MULAqAPvAGS1qyxHQYx4KdCD8wehsHYBVAQ9hUNYnmG2Q",
  "key5": "67Njf7zTfnBjsTzQiziNrVYFYpFtKmkNXu7EihJfNNASRFWJgZSjyKdYLemZPrrKZcGLedc6gNnJc2CBd5zmRHby",
  "key6": "2DXUKomzY9uJ3NsaUgaGk8noHfCGdFra1u7Ng4QRnx7wRodRcBqiwNgatGqaLyevhkXmvfWMVY3W6yf2T3AxNHLD",
  "key7": "2YBrinih6qCnChHqWSxyzcbjHQiv9a6vSkFcNuvb1tnugGFTSbgmSjAKQ4tH8b2o4L9NDm7DfL7xUKeStSSfDGYT",
  "key8": "3CbJcSvmKd7d12EBGu4vUuu3ap5Xc19o33C5bEQeDZUUsBsPyn9a8d6qYBYSxKcKwaCEfeDZWer4GwYMW39yanRN",
  "key9": "5f9Th4axPgkB9AEPQPLy6Jj8YdouCcMKwDKXnQAWpMiqBrH1AXwj6szf14Q184itGaZdtf6oDVeJyG6NQNvcigQw",
  "key10": "2qBy5Md6Qdgge4dGrq8WhBrNcWQF3L6SGXJoPMpVcZjEkYQJ29c2N5Z2MrwVme9531aY3WUako4oKTSA8dQiezYh",
  "key11": "4mRU8QACuVUekQxsQxYmdwet4J1bLvNDgYdh2gmawFg1j6ghjkndrd837n9WvPTSWTLZfWA4dCqDg7eVkbM3Cg5Y",
  "key12": "2dRxqffLFomHPqH5q5L36L4S9nkvKCjk3r7JpeJYX5iKZfzfF1fP6zS8Jf5mUmHr7R9Koh8PUKfimR8yyMXnNW8x",
  "key13": "4sEUULZbysgKCXmRuZ9jQEdpJvgSi6WYdQkTyHb4DaqmZQcw59Yx5bMeUFXwwjst2QcDNuHD3HApJSzf3pjQqD7k",
  "key14": "5bfZzKTu9CzSt5Ww2QpTUCcE72pt2x8Y2b5mo11gRpWRUWfvACFKqZrAiCS5Zdfquuym3edF9jcbJSPKUNuEjkdQ",
  "key15": "5mt94eqvfpRFqnLbBdH5Euy5kiforHkYkiJDXpmFoQNkwND1XQxUERyadBXQMXm6gAUg7QQvWCGYmopwRMLP1Nss",
  "key16": "2kCB8MRfDoqGeLbzWeXwXAGijcMkHcP4cYLMD2R26eXBdzu1jWkxzRzkRjotVgf2UDJLynoBHnwxeRLyWugWd49G",
  "key17": "3hqZaEpida4pb4e752KqXNfSubBFTYGcca1Z8hs8HFeCeQJLfSgs13a1UV2sN2PQoGH78wxYqDrebqLffscCL2pL",
  "key18": "3uHAkjbQ9DXdLn1CcMwZQabv4d3LCwdqx1ARBsCn6iimDMh5QSwyFGnqz23ByzzW9wY6g99nJLV5zaGkbnvnb8fG",
  "key19": "3VcQYDXRp4gJ8CsSLFqbjX52hVhMXBz1TqV53fb4S6VuTuMNWc8ue5h8hTRmvAc5WngFvapDF2v2uhZmdiJUGVBt",
  "key20": "5ZnFvKYbfpkecHEUQZuA9G3pB7922mneG2EM98Aj1Yoz1doLUCBkH5fLFPuX1DiS1c1ShBaYLqxjiGPNhrUsQ2Es",
  "key21": "jpBKg45xaFksLonzq7nU5TAcpuYkBiyPgb9rLb5KExqTfWwVwxZw8ihGM85s7mG3krZd1AYuUEN7zsBPzWazprH",
  "key22": "3JX4dA2yHhxRfvqSPqKsKHR6RxgxrcNMopJ3HaTpAM7xUatyAyhtvzyRmdf5SrqGPsizk2xfRfFZz23awDTGyNmn",
  "key23": "3vYc56ZvtcwJh1y6VaiWPt8sg9quuNw7y76bUZbcpR7K8TM1EdE2wM5bLHiNH4UNdWsZbSScGTHoFxZZAPzog8Cf",
  "key24": "4j5sfttfqkdGc7K5ss6PrCgGGFqGv8TeU9ceJNMYsGynPLzuCRSKMa96NkL5LHmFQLXp46JiMKv8gt2UYF9BfZGW",
  "key25": "jHZet8Wba4ZZXoaoZyR8UdEuPwA5utDz9SqFziFsKtezxN5rqQ61kricWgGDzE2B7KviByG5wMmsehKgZDM14Pb",
  "key26": "4yKkjXGLrBuJhfW8VA6ns4Ukju2HD4ENXfAhhfEouzUMBVxXGwHQHrdodvUficjUYhKLeyUarA1K2vug7CX5goGS",
  "key27": "3ruqvoSK7YxB1RdfwQtxEbRACLv2dTczzqY3mdPFrcUV5PcS9ofSBD5q2XpkYA3Er3sRHNbtRTwYMfBB7zcn7mi8"
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
