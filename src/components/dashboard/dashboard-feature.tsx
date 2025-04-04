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
    "3P5yUCXpBSw282T9QNGNyCNEeTAVCPsBKWiZMje2N57AwecYBwatZsXF5XxzrvXVUPacPYothusxPa7t1nBDJuvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZZQidqW6kdasMhxXJmbUV2HgNA847ANiB6S6LS9P4aJabFSc8v9ZQqVUQ6JCWqZVgfGVF93xqNGfGTUisuVQ2D",
  "key1": "2YWCrrikCdJ8k4FgZFNvuHjWD32BaqyLVUGUQsqRt5ztr9YeHr2uvJquzKP6Qk7g8D8t8A8ZFkNezFkPQsQw9itG",
  "key2": "3EFueaCy2xxogF34AgazvUaCb7mpqKyjiXUM1eVuidVTnLTaVtihraxNjbqwy6mWscMaUtiR2xKciaW2wsG7oGFQ",
  "key3": "4HRNRSUUof5S1DwC1WK5GF5LSDrgZ9m9VbVeGeM1a8ufbsBBdZHmPmMgDgVZ4tmPp8DrhCZGNjRMSzWMkuAcp5gi",
  "key4": "2ZAoj887vojCor4xheVHYHRFH2d4mkhDujzLDEdWpdP2i5dQocd4GaHkv2A44QxbQHWJk44SSnkfydECnvHYPmpQ",
  "key5": "2DpKmBmX228h9UF378mLGExe6BstfbuFLLxWLYToZyg21gXZHbRNzEqDog6M2u379hvT3nnqWPSc1bp1g3ptT5RE",
  "key6": "4o8dsCk1LkqpEGvJMpxuoiuVuPFEDaYBzA4An3MTki8e5tXbAtguxUv8V1UeP1ES6jCGa3jhBATVMVLEXr7gMynP",
  "key7": "2AgjXBxEPmzsY2vp79RM9sk17vmkyGBjdSn77gVgzs6ThH6rRrfqyJkEdrtamscNbxzD7e1cH2H8jMnojHdBBteR",
  "key8": "4sQc3DZjEeTLFLz7TTZEXf3L8TN3LF6Jc5HKqX3fp9EXvuNyJKNDcrM6YDAmpda9M2fobXX9CyZ5yMtV1YiJ6bqz",
  "key9": "3JVxdZ32PTJaHt5iF1j4LMbfKpx27XkwZKg1XCERsDdQDstffMpcT4xNn7gAHe5ESL74HHStYXgGdPzJGKdvmrnP",
  "key10": "5345UoLwiKMEcSpwazsV8TZ9pivmYrMDQTAWBmy1PuBrk4td8gkQZqzRrX4pLpbRfM6DbDPbBUaS5RdrnTrGet1K",
  "key11": "3A6kVBVdQnD3uh9N8Nk4oHxktNmyMaqG9SUr98ieiUKFpsZspbHXt2F4pDMqQmNuxMNchbHU2jciD9vhMLYuxfVX",
  "key12": "5171f91TnZHb9NGp4rVYEWYyhmkfP5yhbxeY3w55gn55UkUYYvo9ijp2VDcZmj8v73oMVVcZjt58UxNpFrw12P1a",
  "key13": "5oYgtHusoa4T6dDLUuxc23DsbPdcm1iGXyvrZP6oGhCzJL6rt8oabML7GoFP39XXAXXJZVoYZ6MvMLZegC7pe2jN",
  "key14": "rgsBcjsezSr5ae6v7pX4NBhJ5zt2UtoFGHp244Ff2X6SJHE7pPcXZVN8MB375JsohF4FnhFSkNDoskhKqJXg57D",
  "key15": "2V6m6zUK6B2svNqaBHxzCQDyYmzQufZ2Jc4z6PkuRyED75C6rdkUbvBa7bPiVr7bS5ABSWkkQc5vovGZA6MvdyXR",
  "key16": "3oeqjPEJLv4y4v7x7fF7dWwbtPaSS6ghgSN4kxkKjbpf5n7aFucfwmJo2ZsAAczNvPNHzrcbq8k8ZA46D4MYNsW4",
  "key17": "3nWK6vMkJZ2wj1C8L6xNSnqUHxZBkKuWSxEaUyRQQYDQzZd8BAUg2rxv85MXMfSBLgPja6ik1uMJoKxvXk9hbw25",
  "key18": "5U5q3FG4jE97fpWgDbwfgpqwoMRfh6LiPGpFkY316NhU7V9mKrs3VKEwv9ZTeoPryQDcFLUkxiGfMkXe33U44mYg",
  "key19": "opQtz8xRjb81ZBAhE7Wdpw3sSbCHSRnYVnJ8BwHzFF13nzXrUHiWL4DKAvmZijAW99f7UGrYjhMAfsahNBEdDZJ",
  "key20": "4PNJoU5fsv5SQU38BaQkqmH2W55JJvsfH1916SgwxesB6BCucJ8zdQaF5Fxg7YHTP84yxrnaujpG2GqA2w9VBida",
  "key21": "4L8hf3847W1aJi22m5TDyfmDhPGRZCDyXQLRpaPBYjbFRdiUrVdrrhGRGzcAyymq7GWD7rgHtgomSnB8UBLDTZzi",
  "key22": "62mZDrN4FgtS15LWAM3wM9jm2F5FUwqqhBHqDmTeR6CTDsX4EvBhFdNbx958nVtveeiFDSExtTajxvhHmhjtbUYw",
  "key23": "3GxSTG2ZMG7248t7bTM5QiYAUdLtBn6Bt73G5dMxMKAnQccJTm6QFXHjGVLtDSSN5apdcZDQ2VW9gAdTMMsjYUjy",
  "key24": "2hRmdZd15XJfQhTTfDgESvpwjeV7rnvhFtfs2RtxoofusPmaTX8L85jokuUCaFx1t6nvHoBcNbFF1Y5dMYxgTT24",
  "key25": "5QaCdzF2Ur2ZCp1CtVFPAgi6ro92N51JrXD92zAnVEDABvgi8qMtjLAh8u9BWhJCfRfpfxY7PaHqPyErgzawYRkg",
  "key26": "3fTF16xgXgvyHboJdP2MayRUyfgvc4Be6CTydRhsNkuS4wa4xYgq7Ji3kV7ReRtnQKGp3Hthpu7LUbddkEFPQ2YU",
  "key27": "4EyKtbDiy4y9EcCRroRsf19r3ZmwLoyR4sR8Nf3gLoe7AGNRUDcfHLz13zDPCmeyQmzrAwaEPMTpMbJ6Q7fJgTdL",
  "key28": "5Q4s2NUVExRY3iqFpoxJUfr6a6S9cqYGHLtiXdJoFKnB9Us3e4uq7Zy5ox9ttpjXWJbs9Pkjs5NBCnEbjxh3jJqM",
  "key29": "4Lcs1T1aDWr7ucFXM9piexfwJBJM7feY3u58vhcyXfw3hF2L2uGcPW3t6iCPZDaEjiafUKzaMcpY6ZdwpfBNdWk1",
  "key30": "46ZWzH7NrCJgqhVxjH1ytFdxtpFQF7f3BkaZbpiuHr8BzaXkEkYwDKfQyPnVZW6UmKRM9RDDNwBCTMpG53EdNzv1",
  "key31": "3osmEAeMfybTc6sNeKcUER2U65MQVmisb7y5YTBvFxi11DtAS7wR71P2XQjLoxV5SuiWD3yKfEZpBU6PnxZgjv3U",
  "key32": "4GmeGwDhsq3752xVZ9FE7C7a9dvToXMSLvdkQoMSP9qi8CJvi4axJP283rLLPFxm6Jr49gQDiRQMjcZxvqiy8QsU",
  "key33": "55hwLbXq7GVUESp7RvynLqsDmKjxuA5TJ8LJAELVN65ZQjWXqSWstUAiurAP7LY712shb86rCvBSgtRdz71aJNeu",
  "key34": "9be6qCTUUaFPt1PwGRGsVeyrdXtJvTsPjDRcrsUq715SoSwg7d29P8A1vidtwsaPW1b6sxN7bBesMrZnuzUJBPC",
  "key35": "2b8nLun6M953PuBUo3i1EQtoeqTgnMSbN1WhtocPZKUuQyBqTgbaFnUNpnCRmJCh9KFpoap7eigrk7kdT8DMvuTD"
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
