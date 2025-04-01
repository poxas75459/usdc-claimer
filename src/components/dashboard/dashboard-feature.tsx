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
    "3BCaLZppui5MADsBNonkHSMeG2H1ayceprRAUfFQ5SAzCQZZnKeHvxEMzT47RDbF4FDYkQ2Pjpjsa4wDQBX4Pbft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikxcuJkwrTF2U6GQTB75CsHDcBrUAEyvTM7o5bSjQPkML68shT9W2CWJd9LSQLRQEgtyPeukhKet4ioJupW6PkQ",
  "key1": "3NaVWHrHBGpKDrHzc7Z55ThzX8Az4RJmoQp5VEmgrDjyGnjfn1NKq1RMjaae69PJGjbtLtQByQg1htSfnsfwkhNP",
  "key2": "RsnwArhHKsoBNzbYasHohEqVWsY7AssAAFC1L9u7WqKbt1Y8uNTwe2CXXYycKqndXbYqt1S5JE97hcqGafBSq3p",
  "key3": "3xRDHKhqnBDKjG1UhwiFp5NJuGXHrzvGkUxEcR8fwQwbetC2BbMvCY32uHhGukcQqcw8aU9RqMUzJgPx3uAJwUgP",
  "key4": "jZGZUgiYBYph9HDk7ks4Qbb7v2AdvXjHQF9W8pmNa4SXKR8ZkiZ3SqwQ9LbDv4CPDa1mT87TQRT2phjHYc9gd7U",
  "key5": "4Mft7oPqSyK434rY2pTw2b9QUtCeC2BHYew6B8MoibetTgg3rwZsmHGcNFrHcM7Q9VcUQjgvBdf2uyBPE2A9U882",
  "key6": "25DMpzdQWTUBKXqerwftsKqbkAtABvUG6MWjRzXoazA5RdqUsgM97dQSjLP1UdiDS8W6iAT5dnPLtJjJ57L4cFHC",
  "key7": "4goz6yZNHn9MrpiZtxrBXnrhewWwrwFGK6EgkkpY21btzGQ8x2FsPTeFubcFu8SHvSqeJgwkqUvwKWLgjoP2UuKL",
  "key8": "vDbon8p5geGeWtJPYSRsvborXNshLsDHVXp885JEqUTiXvvC1Efz7bXxiGw7jtam34ggeyEZorkXtTgxUSQQq65",
  "key9": "4rbbfnCKABvvH1HZCYeuzLz6mKipuprtwSGrQVumZxdCqP3Kq4ybQtqwQwbBET12AtVtzrHq5FY4bVMuz2YsaUaP",
  "key10": "4ognE1tHExEfbFj4yEWw5YTWmpbFDf4j1thfWL7CtBjV5E8XqEv63eZVmgLwS7BaSUA2BxKk3RhaTJ57ht66mSAm",
  "key11": "2uhYE6BPGYnhNxJ5TAskdzcjqFurJucEqfAZjYknapv7wUDi7KNzg2QUWrHCiHReUZLawwAnRhEkwvc17pdh5xg1",
  "key12": "5hMBTkrxDMYNKHBud5JJ2eeN9BYtnDhwSUPBy77CsmkrAhcJ9NF9ByifaCqvodhQC6FMjVLzx1wuJwP12iUTNp3t",
  "key13": "62NpgVH1kpNndj9h92PxqyxRFuGv8iwRBcFCYBjqUZr7VdFvpzumKcViK2P1dxeSG5Tmnz7YmtMCHcc1pREaLAXo",
  "key14": "41sabFqDD8TQkr2D5tr9bgZ8VwCk12pQ8tWYvQcvywFKm8bK6AfeckLyje4rBwhW8m9ukyXWXFY43f6Wg71fpBZn",
  "key15": "2PR7UW5BfsBorXQsHShft8djH2wZKmpC9J4vA52HFo8dTeDRC7jvauDEBq1yv6oFTgrJCNmsRUWLRxMPZjtDsUHQ",
  "key16": "3XVrPo3Ma7QDMfAzzEk34SJ3z5LV3w1QuczFoefmt3NeqNvaL1JqEkeNBGo4J75rMy5t8rEFmRZBA1dKBgtGdPYS",
  "key17": "3UpQaz475iV6H7gcstAsy5vjPSCdKQrJk2Ye6AHB6H9mPHSmG5e1PzWz8ggb9RNZ1AbhoxCrQURGBomcGQfBiU1V",
  "key18": "238qSNDi6yMMgWtVVyeFostcYXqwkht2xYwpV8AYmKNFLBjLaTTdEzy7Ymc2HF2e2jhLDZqxxpfaofS5aANRrTre",
  "key19": "65BFfWZCVEkuppGht8MRJUtdqxoxPFrPEqsPyH9aib4WiRsfeiDwehzi2CfAUGJv7QnqHhe6Uc1mLF2oePgu3bTr",
  "key20": "3jsPPxCJDSRzkDz1aP2KkJUht2jtuxrrUgYvAw6SA612XNBnJitBgHmsgrTX37NA9LPM8knNfZE2Fe1XeusQ837T",
  "key21": "2i4TJz6jcYP1oiLTwgNAzPjoBqBXAxE4aSMZbE9urK4GHxgR3ZtcYZ6hYRwRTVWUg14GMcf53uLVNJ5biCpYCnWM",
  "key22": "6179TLJGP2q83Lsh7bHRBYhKdYjNznUxPH8covVhpJirFiXPZyAZDP5cfLtJmb2cLJYbVss7kKLfJKHYfne3k56m",
  "key23": "5qqkLScFEJ1jnJGjbE9DtVjZaMA4rkpwkokEmAwMsGhhEvmZuLEYp7NhzZstnyY5dvxRUkCzBWdKXeaw8GbgzP6R",
  "key24": "4QB9H9LZJCQ7eSdSBA2LXSY3Zf2fcrhfY3jqCUHMXTo7xgmKDVAm2BuCZSFRmiAaM1n3JYFbx7nHGymkNeYRWHen",
  "key25": "4MvdtwYT8WMm9c78idFTYnzb4e8ELeWqu6ed6J1tkUS43N6Jx5Gu7tj8DbdiLon7mXatpDUVcJYVPA7QxyzBy82A",
  "key26": "36svETYMxF4nS3eTUqhRSfW7aVTgpQLfgXM8Ev77wD1hLFLZaPXSciGLw6kAc8nEjDbgX2MdSXrZCGtNx3UXw9eU",
  "key27": "25BVidfJZrzTbLcDAtRohTPNgPLN2qvqEY7Hizbt7oBWPRPMhiupK16B4N45Za5ZUAfZEWueewbFr1k29gS3wX4k",
  "key28": "2t8ZyjBqTmjHhaZpGiAmhL2P2mzZXMCGySvwvvsPfsvsHiBowZuoMD8NHiucFzXZE2D3UE3daRuHQdBxYpFC6idU",
  "key29": "4sjpZYeovXyxjgm1hsWQqGWJkWfGMp33XXrHWbnTTjtpyEQ1xvYZ5uje5j8Xaya9yK7c5XEg2StDRM8R6g4Q2hmw",
  "key30": "2Hb22RPg3tFKE5Xt4soH5zRKfRJuqN8xS7gzArVJSRKzSdo3sNL49gQdE7x3fjeWYcGe8ZDcVQg66NBJebixdSdb",
  "key31": "47XNXaTtJQmryzhkeRbRgGoX9BQuy6tmYFm1TRJRBScjDuh8kLqqy3GCLbgwr23uZSE1tTdzGNxKdGgGFMzAHmoo",
  "key32": "5sRt2ZePDJTkAE3xm22ebQaHSGNzdocFMGD9ERN33ts8E7gDNPLCjDGFxBsEFpBoDdSxLM82NJnSCUkxRPHWCJBy",
  "key33": "4xe2LWJLh4djDf8QUrYm1eVq3LRqXo8ZBaRkdDG3z2XrDnejMkLvEzoYQWE4V1wa3CvT6hXnjUD1Po1mqzv7BjzC",
  "key34": "DXJjKVijNaw4wpp8iR8oRdVM23NTzD5VgYvPChEQEojWEdPfdnbucMh2FkMQpb2LAnMyA69WYJPzi2XpyBMN4uQ",
  "key35": "YpDWkDqAPdX6D5pf5LisA4LGQkV1TFHo5J4wVP1qLdGpgmABWHhQEKkXyG6wr92JDSUeiy91BMeLdw4rtvmJjRC",
  "key36": "5Pfpe4pW1Puo8Lx5nLuo3ViGsZb19V4bp4vZRB5ENdaD4JgSoqtVEK2GAnFAnZprmEwu2fwzsx4z6sP2UivneJ6D",
  "key37": "2X6MfP5RLJppdZaR1B2Uk8smomg1tWHHxg831Y5Rhdw1nw2MfQT3e6VbM5AH973Z55zSp9LrVv1ahuKNR7uXztN7"
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
