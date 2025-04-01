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
    "47mCEAKiiZZp3cwPzzYjcH43uXEo7LgHRvttjWGaUznVuhuXysFBR4ttUUSvxdZq4jesMUv2QCksjiMEzAW7RbNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43181xi8FU4JoipGuMmqFrqUntRH6Mxuzfo8CT2GAT6ryAfDsED5yDKFeYi8973Q5mrdMiSPGYWqrTgyHK4FA4PH",
  "key1": "3GgiZAkyh4fJu1zKAoxGT2FWbzsdBwPb834Lfen9zo82bvZLjbwBoKExv9frKkVapUMpFuAigQufoA3ANQPHr6DV",
  "key2": "5eiqsV91R7qU42dYB1efABUoGRYZRUT3ATm2MNuVsvVfdyBibanR4CuWTGcvNQbhBmjdMxZhsAPUVxXh8dXgeW85",
  "key3": "gpLcwTkeg7P4mhjQVgdJPQRPX6prmrx49tefhfQ5emp6PLm9v4yJL6HZm6jeaMDP3mt2pTq9iT3whdM568VCSXk",
  "key4": "yVqAQ2y2uc1gJwQa7pR13FejGVKLBXPxaBew9SzkHrUZidUyxES2Eeu9pGK6EaufFpHc8GRbbAuQa8FpMZb1sMQ",
  "key5": "2t9ZBzQbw3Pd9JWnYPtVLWopRUa5k5Br2d1pcxsmGjLNPg6t9PhoNWpdKyfdtfiS7NYrhUJbeCcb6ro6cXXX2mKc",
  "key6": "3RXhNNTCB3ZCA4wRbN21QMcg7B5ueW6i6vJND62kQaPKZnCYShr5qDddSWkihojQVVhqMDXBodeLX3BH6QmadzEg",
  "key7": "2wC7ZvsL26UG2kW7dxgicUxFtwX8uh4d8uo5Dpo1ZqkUvy7hzBd7u6YTaL36rvjhSBnTcWiW8VtKswZW8Lq5Ng54",
  "key8": "evR2mcVhvGaBK7KWwqfvGp4zvFQ7wqo5w61BxktBRMnnAUruAARfLW47AQNNB4kNwy3YEFgba7xWSGbbX3eaQxk",
  "key9": "5CMecDpzpxixJPFbFPqyrPjPS4jBJVbmfimjPLzHsFgcZUgYBH2ZwjdUSTQq1eiydsq9TrArbcqKdTfyGn2bb5xs",
  "key10": "3BcdY2qjf3je7ES8gwdKEYkRkYzwjFPk77SeuHLp68DDsyzGYgMkRLeGMMrVxUfXhiDQ2eVd7uQPNAVDhs6NW1RX",
  "key11": "FAuvg8qkJuTVMTXuRSzGm9cZCeYozn6LTCcPkEH52TVWDYTSWFz8epaQJE6TafN5Cw4LuBvRQPJu3NXZKmDy9kg",
  "key12": "4uBUyBPbGU1hfV1J5qnk7T76tEU887SCCdPAcAmKHpWdfXT3Stihg4wu13h1xuxnKfJ5Lb7WYJGBNLchGuwbWfsD",
  "key13": "4M2UbthLr3BdMp2qP1PdJqpdNTeKCp2hXCW4xTW7uT9Nm7DpbeEDxu71chKjy8X9pUrMGx8911oghcBQ31GzpQj5",
  "key14": "2haaRmC1LdiiFnnR8ZsqvdyUcsCKaZSUpkckDXxkZDDzFiBBrbCRSboX12A1gBrb4Jdmb266sGqhwRKnwiQzFZBP",
  "key15": "3fKE9Ydw56xTMTiQcotM2DWM4ydZKFF5DiCF98mEu9kQUpa7GfaHrJ5mQVjQLun1zmtawjBnUCT6FnwekCZBBCuE",
  "key16": "kV9WSstGrA9Eqye3KXX6k9XRHYDnb7c138pQmEqCppomMsydRLgP6pYYaS7UbFpm7xwReUcbz748tsyfpJvtNZN",
  "key17": "3pXJtKaogCJURtZi8yZKMEPKtzjaNhUkCQXtJPkFbHNoV2mffPCxrhLPLftrcq3LXdxxparMaZF54XGQaH92UmHx",
  "key18": "3Faw5xfmozcNao2m2khLT5wWLTAGYpj9bVw2hyJ79pcuBUHoS12ZRNj7jm8be7zEHJcG7jGq4uetjRffuMDSSTYG",
  "key19": "3onKvBQDiW6zkwPi4CMEFoxRXqzQEJJjdZHSiFfLwdmjJWF7HnUWwaFjhTqjkCDJtJBt3y4MaTxtcQsh7YvsMbv1",
  "key20": "4FtFjpmEcbWEN9QyDmAPSm9HurUHjTEhKiFKfrdrFgnCgvc28kH8SS5MBzCrXJpwdJmj5zh4PnrzPzenpSUnCjnv",
  "key21": "3gozCQRpxLGzv4wHWqGWfqrYotZLLC4bAzBZUbnrWCcM5UhxXc8cSAstxEhSSohXM5NPUrw15sVrWxbnrYrhXW67",
  "key22": "5zXkcKTzkvv7kM6JoKSuj5JVoHAWQthZ7SRguQtDsUgDSso3q6qr9UXKUfkYHBaAowm7pmwAEiG1gHpXeYcMXbg7",
  "key23": "3mGUWQPkgoiDsojEu6wSEPawmw3YxZmVBz5zq8qYbdpjedWZJokK443V68Jvp9rZUHY4Q4XU8cgb2puELxwhZh1x",
  "key24": "4vQ3TuANeoHMfX4ZXXwwA1m35jKkqVPgmzYyzQRNZuTBdZdiK7PwdiyySGcLvwp9MWYNby38JRWAhLAH6fjGKWZu",
  "key25": "2B7vbBL1S92dynayxWtcUzDZgakkarkL4XoYgegH7LSwAcmx9Ji1fdpZ74DXvz6VynGc6zKEoRLFedYnADSb2mV2",
  "key26": "4BJsiupVvwBQT2htpo1ta9gusgmH7wCmQEdSp2VtZH3TrRAcS8n8vT7s24KZArhP5d7uXYERLAo67cLBQPuhpQhm",
  "key27": "45a8YVQa73mabtWAJkCPaqkJKvBj4dVBk4zGtNBwChzF2KnzXnVG7TQcicRMNGPCmLDpqbnGHDa5hiAQQSD3hVQT",
  "key28": "4MePnLewnTTmxjZQHygdSjJZzNrKZ53k6eEZYpZv4z13J63LRAyeb9EeVBZznD3ka7xBD28fdZzUn9xy3pCjvQkQ",
  "key29": "2a3oqiYtWbgb9WR3DFhFSij9Q37v5RKR3ytcQmUSFvLDuR41tX7egmHMsYYNGSQ63wgQ1UwJFozMXU8YXeLHBAJ2",
  "key30": "2Ghgt9thx8k4vuA6qTcfbTyiWL5SyRMdvGRDNqXdrn5DHezXAaRNtXcCFQmqYdLkpPHE5WqphVQgsRGqAVae8RGH",
  "key31": "4T1NT5C4YDMGNBxLkfpTAbLjm1VgYmhxf6ndeNYXH33HB9zdXouzutT8m6f4BDrHXgaUwQMzAS2eBfZ75Yn7mt3v",
  "key32": "33LiJnxQuSfhBkpS4skryq1gziq1FECRnvNuXwsky6uiLi4rEQfVeThq5LixXhEcNcoyivDVAGN1VX2ySCDCBi76"
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
