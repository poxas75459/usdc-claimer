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
    "GpcbHvxYGhqrMFFWorP1CmEPw8yGbBY8esjxRxK4PNohm6bHgYt3XMEeh5PmN9gXdTUjuHbhvX1D3erAHD6Ct63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpXYCdXxo1SNL5b3C9ZRVsKZ5rg1thxvMLhnAYtE3R1SGgbM4mXxfqnzFrN2STphSHrRne5QL5PxeLoAtQiDSLc",
  "key1": "5prBhYPj1e1ojiT69WqaxHaFxsW1AAvoQDRkZRgB2P8HfjPxsDeXA1YQPKFrPMFZVjDq46XPPc6BXu3XS3MU7ULF",
  "key2": "4hpCH3RqCpm1SxfvtAhnJrVpUyVknA7ge5q65qLzu2De7wsCXPYaJ7JEhQVdhyyzJAk5hB18PveCz2JmZUNAYBq6",
  "key3": "4YWdbzycbCk6Y49EnTiemHJxV7vM7RVfVUZ3f9UsWP9aMBSehHxxr17MwUS8ycLQs4iR7iL9neVBJrgppMCYdHQW",
  "key4": "4StrDxGGu1y9VAaWCPgYeW6Hs1XsXnqxcfXVit8BUEm2S7LMyjHSdiPEWhFXX6RkyNLZmSJr3kUistLfq1BwRhZu",
  "key5": "3dMxmSTp4pBB5JzvkRmEqYWJwi98PQHekKABHWbMMgYMYFNE1xEX5PChx3SqzzLCTs2AL53YAX2ibES6JGyxVwh6",
  "key6": "2NCxLsqbycuBMj5CiZS5qSyR1NaAtgJMJQmDpASbCTR432bogJ6AjzpuB3wfDTeSTfxaAHCGK6aTsgfT5QSc1og9",
  "key7": "4qc6FY2dJm1LeXpttf7nV26y4cft1dnke6SxThvE42RXcvkk71GVPR6wYLCfBrm9YuruFWWwVsjxPAdf6HLhEg5H",
  "key8": "4jmtYkedkTo9eDDRAxz6GdpUwJp6s8aPAuLhRHx7s1eYXkdaG6HbsEgoh2X45PpUGgg9JdC8EFEKozjfPd2m35Gp",
  "key9": "5q5mZPciz8vcNPNKz2P3D7f5YM7sdsysDVg3GKTTqRRXoXynq1evkye1mEqUCARcLapCCojgjJy8nZfsTJuhRwwg",
  "key10": "s7ZU2wEF4N8KZ5arsEsAeFr1xNVUbGqWuVxtt1hZ5qoaURumwhUG7WtwLG6KdjagVt4qEaX5V2NzEoNqPJZmm9y",
  "key11": "2TcCZydkcXwtzFcoc2RZPEVx5EXd9upnkaPTv8XDanEEdRT4URWoL76vEPmGjGH9xiGvsKg63dYBc35F7z9zxKgt",
  "key12": "3s3hxMtQzt5Go3j4Ze6Gcwh7Jz9TCmMneRFoUud7Fjb6fcb1968gpsAQbNvG2UahAkHQ4uoqBURE72f8wZKVNS1p",
  "key13": "4ciNaY9FM17ftsUAs7v2R3PqxCAWs6QJwrP4RsA5XLyiUdZK7HZ6tVio1PhjfvZBcBb9yCBS8R5LrjqRBmrVeg9j",
  "key14": "4Nie3cuFXh3g54ztMdATZdEME8vu99bKSDAUaUPopCkyQt3S3qAzuGoaa5vApSP5goAfBLMtE9Jx4G2YVunhZJr6",
  "key15": "51mjogJddiPSiFU7Ks2hqvWYGWxQNN6epzxU6RfS2koDDbfN5B4BoeipiEiZiEinuUFgem9supQYq61JwKE77AsJ",
  "key16": "63crPuzhYonxZtDmPg2K2eatVGwSbpS8ZfAQCcxPPKbuDnkUjdh4G6jRZM4MeyvGLwe1tcih61DmwzDiNjT8bMm5",
  "key17": "5A9iwgxKUA6GQuZupNdBgS1hZp1k3smoW1tbgZzuJEmH46gFggRLVyr8XuoF1YG9QLCupmoTpPCpA2jc9pjTJUkj",
  "key18": "4655Ahx6exfaiwvebU77EhqWprwHUqG32gN9S3visptbXhH4sZA5CwxF9c8VZ7w6SdhrYRsqkPTzevct7QpiK3mw",
  "key19": "5qqSTETycBvUizWtvR22YV8HYJpFvsLrDmAKp2ZtFf7L91jJgfxZY8az2Gu5chdtgnGvismN8Vfm9wyDDxogDGr5",
  "key20": "5JZmQDfHvDRWi8svW9G2xxaSAyo9H21FFB5qhhqK2jTE15t7zdRbW1ECYhYCFKHNQBtBXFPij3FP2QCAKU8vXkVj",
  "key21": "2dEcexTNzzencykAnNwLXjZXJm9xbZqp4EUbCL4qFAdfcuvVWjUatuweP2sTjmRYZv9Ht8zj9xPsHc2r7gEieFHU",
  "key22": "2FCrwiy5HRPxZBSsvANB5jYASGpEyWY3joyTxJav5GcmnyoQKQbTqyVms8N2w2e4bbYVrJyysz3BJEQ2YVDviQJK",
  "key23": "bN4MkQErcmZs2QwczNbfoxfsjcBBXoiv2L7V9jpBtXHSjrJnSJPcd8SnrcunUtdjV5hp3Qv19fBQH52DitSWegQ",
  "key24": "qJD9a6TfpcgCBn9gduS9rF7DMinXThPsScx3BHYgeBcvWeaxRc8p97WvPFN4fcrz5aFtz8yPtqfYxe8q3Wq9snt",
  "key25": "5b31tuQWTZUWCwzDDU6YAoFzAh7NWFatXmsM6n6JquSRgGkymVHoNi6Z74S8n5EXP5sQSLuG5KDLNPKKzNirsqLc",
  "key26": "3TRbgdYmvncwEQoLZVepbd6H4mAtHixay3K8dZa37nD3sMkPdpRQ2K6uaBConhaBtxQX5W3YibifHjvYBwZZRAmQ",
  "key27": "44mo4MTU35RQDnk1dGXAj5iRrwUABZapamD4uXijebJ4AYunKxeBz5RV5wHNZVrL7sJyUcirgR7R6vs1EjEqUZh3",
  "key28": "3SkcHJRt4SW4JGsgXdWt4xrq2nAMT31jjsZxAJ2rm3m3xQxr3noYcCaCnVjokcb1nQdvZiWUipcpaiG7cfoq5D5h",
  "key29": "5ypFWjw8xNcaptxVUjccBFvDErvfoVQCfcX1TxJKny5Hi1arcspGuMydeKsAaEUs8fhcTXcbFQ7HFAGwzS1Mu6Zt",
  "key30": "46VXxTQpSV4SXMXsMnWveum95ZDiHComLksza8W3VdUjetMSE6tsm64hVLbRbFf4i7CU5y4hCrta4creDBRAFgXM",
  "key31": "p7FazS4uVhPH6CAvXZdsNu16v76AwjfC2HL7Qme414GxCD1zKdC9JWHGaUTdjzfDyqNeD84VfY8WGiyQDANc8dn",
  "key32": "4pzjPLVE6A4Jdcx5LgjVLNzPzo7eaRkpGbJm1qh1fL5UeeSrtB2gkertqwn5gWsG3crRqMDajbvMc9CPPXvYppFX",
  "key33": "TVw6qQbCfit1agNmKtN8Yr3y2VHirU4uWBqtorBFxumyjG93t9xLHGXR6Pp7nXN5SNXXicckYJafhjpQVmQc8j5",
  "key34": "2U4M14dgP1ujJxgA2m4J7u64r3b9foHttkxGV1mSXGFB7L7haHq7hLGpMukv8vUPzqT5sUHe4QSk1V46oY9Ynvaj",
  "key35": "2CJrUy3MTKSGp2uJEHCm5toeBHcwhdSuD1YAt8k7pFfD1CuTf2MxCaxvHXArtDLnLVjP8yVfDGj1F3qS5kePtNHm",
  "key36": "2qmHvLuALrv82grLVa3fv3Ba9vfkB3iVysoFczhKwvMVzZfeY4TKq32S8QcLJy1C9kHpNeqr6Cb46DdQp6SPABhp",
  "key37": "5nHHAHnLGRwxRCp3ScbuPQinZsiJJyxnpFCPbb4prTPbwRs6z2tmJLVmk6rGrn55EVCUKaRvxMxM6csrU4LsUqwf"
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
