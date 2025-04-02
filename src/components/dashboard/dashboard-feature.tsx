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
    "3cUjoHsfRxVZwsN4uVHvYV35BuhpF8qobzSWSMYvASzupwVGoh3XqqdwNMs7yKbve9yUAmXxtpk5rfY7KsKLMQmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pPhFLBN8BFMLmenMno1SkVcSXoxXzP6JU2n2ZKdFxowMJvnNp5wfFrqc1FvKV31zoLsKujkSm2LSJaP46APwo2z",
  "key1": "4f17MqKAXHf116dZM3W2ZXxEwaLJeaKMKwTXfFXEQ2KXvancagZkMxdtucbiP5Dp1yRDahsnsVcMw32wbDJpcTKG",
  "key2": "k8YZt4hn74rHGgpreDbE9NkBps8tWFhuuiBT75ERnUgYJkL7rwGY1n6Gixf82bvSNcVnooMUgXshud6ion4bEkd",
  "key3": "588WWqcb7H8sX67ieX4uUJWnX8onaHWtnkAX338tg8c6DPMMBjHS29LKiktNtvV7xbfQc83PCEpaZQN6Hi2WqhyF",
  "key4": "4XRayeFhKXk3ztMTc8FcRFvJfMLLCkMLrz3eQmUeXfsFVoSBjsWWSZuifQCKazRMKaZqWUvZBDdoLcsUJ9ffyoUZ",
  "key5": "3p9WVrHwa9yCyxAuRNaP8FiSng5wS39XgCB4T5JPA3bfiuoHxJPXCcHawpJrXP5XSNwsHXPM93yM2mrVqWYWCWUc",
  "key6": "4ziBekWsqH8EBoGhDXyda7hX6EKavurY1Pt8epMG8ySP9ZnD43jUAXxjDbbVxL84TtyHCSnwVqw3totnVTzZCWV9",
  "key7": "4m6oc1hGRfgn4Dq6A4CKQVBrUsUjGjDBCzr9jn7mjaeLV6E4ZXebDFfC32maWQA8H7Tz4ATacNGPcDoZDQATuQ17",
  "key8": "5gL41tgzDebfUp4hBA12rSHBfpJE1642quCpjfGgaLhquU8kBmx5f5VGLMHFh3n7ZHGu4yEjMTsD2RVnPE8WCARf",
  "key9": "3K7dJKdzrGKmoR4cFwA6Zoa1Lg3rTCqTdKScqTBPSNLpD6J9XirvH32V59RtghZTaPb8CzSGPcXjYY7P28ouPANB",
  "key10": "4DMhBN5gF8oJK1pwsQcFz6YoUu31Ps9jREQjE46P3tHrj4WZRoRpQpbN5QKWSLKjEmWyHPdZiKijjziBk84aTo5W",
  "key11": "65GwrtqGvw2U7APbaFSTR34xN8u61RN1xgUwP7ofg3aEARH92Tp7NpsjVMQ3U6GzUXZQasgg9D5WVUuae5vXb32M",
  "key12": "a8SekyfV1UKsbyXXutbraQBzgi3A2nN7ix1e2N9ajpu4sqtthJyT8n3SaaVWA32PXmzUXDP2T4HrPundKM56ihe",
  "key13": "4qr71FQhCsMf4A1oUgsVWCQ5d5fFA1BdDVHgSi5dYUnqfb1s1HkpEqZX4iZRFiZfyPCQN5SyScdH9iwMSXfF9tLR",
  "key14": "3J7vCETcF8fJkVo2ayvGNmcunGC2KMVLaCYF7eNuyEygRa7UFdbnHBfbwmxhmFm3kRLGXJDDm9Nkz8o4eEPA1QCd",
  "key15": "zpxpFPV47LBuWtNdNpkq9bgnAZFmJ3UzUrWY2tmJzrrAVHkSrA4BVSju6aXUcG2fy3btd1Hbfn3ZMNLdEo9gUyw",
  "key16": "m8p8mTJXktdCdgNEQgEjnLJUx8ntT8iNCieHtEepYwVu5EdNd6THpawn3SSP8PmcHGgAfwRnw3tMXS4VH8B1zGh",
  "key17": "3Mko45JT4WyBBxuSGTyXG3C7f6NPF6NdrKFbdH5cq7i4xJmqeLg78t9JCW21xgtVbURP5cRBiMgbZnuTK2y49njt",
  "key18": "3VEpBMsAbjeYihFm5EBhDPVddHb8bLU9h1gJJ7oGAm4RQDTNacACkmQ8TrsLudyp1uEVRDVWyNzzhV169TUhbjKZ",
  "key19": "5tx1Jr6QcRBh5kfBQUPg91dQyf5AravWnXHS6RPoFxBjzRBDhBN7nyeTkzcC6T52dqv4o9ShWsnPJo6btndDz6jq",
  "key20": "4H9PmHPJvYcUXiJ55FqvwKgUjzGVD9cepRavqhz5fCXeBL8WbMzy2SwAFDCwnyubwDxpZ3cTTaSiGchSGhMce9SV",
  "key21": "3k1inLAyMDaPNthuzxupervyoHokNVfeiANTrrgc9ZEidZfvbwc3EFyW8jnszXmyzeC3q5dhM6wgSvRNW3UDA72j",
  "key22": "3JDJoDUrivQyMn9is4yuoRexwDoJiafDjH9qAuv2fMRJZJSQHxmAR9PqrVPdrndL7tyKvAWkh2Q4e9nsbyjVjbrd",
  "key23": "2cRKgVf2sRF66DaYj5hLpWvH6KgASw55fZB5TvLQ4QxHM57wAByGFEmkwZdbG1v7SeGzYgmKraHgre96AhrnNpb5",
  "key24": "2Kf8Dsay58FkhGckXKMgCrk6epRUTHpqMc259Ly5VLSVxYt2KRwqH9jM7H7pjgr6sgf8MDtodxm4gTZ9iUWKvvY9",
  "key25": "Y1ye4Qc4qMb2LXEDfocmkJ8PZ7MvtNkdFXaQnqKYnkPTyZ1ACRu51Q4zg8rk91d35rpLNhJ1g8Ftf51MjWG9VNS",
  "key26": "4K41PjCDkpsPDQeb42H9cTGW5BaAZLMimAYcrdSPEYfWTdLboiF8vX9z7dVjx7YPSTbNgZq74AjYrBhc9Hot9AKN",
  "key27": "4TBWR1SiLq6aD5JKRnMedzENU46jqTjR4YbphVdNwo8D4s1bXGNNRajyv8DmZtKg6tQZpcruiLat2497NSCWuhPu",
  "key28": "4HXcgNFyzZtdmAGKXtRfYNnUoG1mcfLzuWi3gui74f9vege6F4EkiRcEArpgXMAGeF9FUYgwmLYX2P9gMgZZHcUU",
  "key29": "47VjQqe6U81b3eZw7VDLYMc3iYNfu8cVJ8e8cSXaG6w5EPhnuJWir5kfCTeUUMwN7jeb7UHP3EK47wuog2PBXaDa",
  "key30": "4z8mQJRRs59iLgdYQcRUYq3dAgkPvzL16Unkdpy8JZgM2hXua3XCzEDjfCfkzpCZ5vrx5xrSCKn9sViSDRYtspMB",
  "key31": "2wr689ZYggLh8vSLL55HbJ78mZvdUMiXAa5HcBHUDfyu5qE53PKiXWP7YToxf3E5jF7HKaTTqBPY8Fe4SZv4D89N",
  "key32": "2bVsiCKxmFmxUsULuT2SC7RtMX5REfZFbpbwzZZr6S8RYtp2Bntjk771Rh4iRUowtN8zbmbhUqAycmy9pLJBizvR",
  "key33": "3JPuk86W2cvT3fmQVHSu4K8RjQaMD1dfm4K4bjGCdYh9fKDPj2T6wmVTqHpfDhiohtYprUNSfb5MrcqLffzy1Kar",
  "key34": "5n5gn86b59DakyV7PZyvcyd43hUDSqE6F3fBQLNutDdkfJ6bQ8FErftUorXW7KcwcCh9HdXyUsn6Auv3mqJvESw4",
  "key35": "37bFWRUfzUQMinZyspUucs2uzEMgb2dK9CWYfFaRQpX8h35GHhgqLWm9NDAyvYLrTjmnKB6kGR9HBfuZucZJQgRj",
  "key36": "vYMESKg57oZMenyejD43eFEqiPE1wpf1hSRAHTFFnksxxKYZnVrdQQK4HjhSKhQLpenosAjTsG1hrXXE1Epecgi",
  "key37": "3wY1muwp8bzfygBv48LLUdYHLxqDE8ikp6EwmsUQh3PZ5whybhELFCL7xjiA7iBwEbZCoYko9nmr4fePtqu8RuJG",
  "key38": "3vwJwvmyYbBakB8WRdSjfvLfSiiKc6s6Sv3SABGSqt9TbUoTtrW3Cpwqjt2BNACD5SFjUmjzTeVZCdWhE6DrSsww",
  "key39": "35LvKNMFcAGRKM13Ln7E2Wh4aGtVBDkpwVeuAafCP48NLUqf7yaEw46RAzo94opFVwHWQxdaQ7kbjcLJi1THetBh",
  "key40": "3KCzC2bUCLy6Ntc78nKCqb7soVgC3vyVDLy3CvSEMGzFwx2TH7gWCq5xGGCXnQ8UEMFmcZEfAVSWGRe2si5VopXF"
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
