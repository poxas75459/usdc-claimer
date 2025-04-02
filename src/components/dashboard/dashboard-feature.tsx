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
    "4eca9NaL272JZTwXmK9mZDo5bZHhTH8i3r7SCxLyEgujg3fanTPJwef8AtctMpmjgQUnSc5Bu6k6MTAeMJPWus8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZUZJhBV21XChdQPXgLw724kGvCoEXzXfVrxsMChW8QspwhSUM16EzoYHXD6nQ4kvVEw4qcRjE7XBQXxrxqvHQTL",
  "key1": "5xFfn39eRbuTpGke7rVeNgJfP37Cbt191ME2bpdx2YzuNLrSpEmBLZ9Gz6f3PAZf5KdsuY2ABYJhKoCoQnrSm7X1",
  "key2": "X2DpgRqzXVBnesuYg5ST7AZHu2m6gtCFsW8JRarYCKbS1xso8qzj7K83q5L6LD7HE1qzQYpjwvRLmXHpe2DMGTV",
  "key3": "42iHqR1tj2mbBTx5j2A1dLRZAWgdvw15yxzj6yx6FSxxDGVrp9h2RmKkDBLEN7C7qYeeMW4bmrUNCc1gikLYZrGr",
  "key4": "5Sgzf6h4uBxNYdgVt9JKrGpfstWhipaeGs5X2skRnjqPsHjhRcsmQwgWNcLmnCLqGXSKGeespGN1vKGRjZucGbWR",
  "key5": "33q3d6iymDCLuMc2RyoC8LmC4C4EdSMoVyc5ubb7GcnNohpJKF3TpMqMz4b2sLtQWuEBU4Etr7SmGo1Yj2e455SB",
  "key6": "5pXhnjv9D8Y1hP79xgvhfnecVktMj58zk75hpqYKTo1smZXMzXYcHqSPJC8Stt9a22hXNnuABuxm2vxLHCowJC5f",
  "key7": "kmD3mQniNNAT7rjt9d3p34fQ9U7WSwGU1fZCNLyHdmwXDR5XQJpe6K9WuXZchGZhHfCUxnMm3GxdwbTR8HM1j2t",
  "key8": "3ZqFvibVMgckcGUjPtxp2LTxjMRAvSXdCGJEa2gj4z34iaUQH6DKCRUurJ5PNpkrCuVW157XuUR6cRURRLtaiJ8N",
  "key9": "56JjeFcSDbbWVCwKAsaRDqzU51AqdjMZHjs5wUB69sK3Bg7TXm5idALvkzLSrxzLTUPCta2V6uNfMoxr7BEfUNys",
  "key10": "3pa1HQPmexJKtYXAT8hfM8nsjDAQae6q6J9SW8WoneWti5KXQVwc7MVC46b9HYxfKTD5Ctx9P8eBLiLdE9USq5C4",
  "key11": "3GXS9cZyqUUUbZ8rd4tVsSJKXCbqVPimivGSxMj3aWib5wVdqJ24ioDmF5VDmPCsupJye5rPKxq7uh6N71Zc4xv2",
  "key12": "XtB9icJhPzmepF8mKDpUGWssp9XPiyJ96JrezBbHJshv86yaL6cMwkXDxGUv3Vjydt19dPaumWrP65cqYdGvBFk",
  "key13": "5cvdRTqcw8qx6qACUSs31GV3H72s1bHAmSPePcJKtV8LoxWuSPTp1xpu5MkNgkTURUL82SqpQeJQ6niMdWUnhLCY",
  "key14": "wgWRg5rTEuV4VDzRhKhCQpw7AzAqA9QSpXgn9xQaSnVLewi4NsmNrRrXBd3o7MLjW3TVCigaT7FZZE17kWJv48j",
  "key15": "5Jf7AkDdyeb2YtZicNRCBQtiRywMWL2Q64upSPMW4KEFSbAWZR41WaF9Co7qxXJsautmaRQ6o83nh9q6j5Kf58rX",
  "key16": "2kUJ3JuA1fK58JcKxz81wNnU2cSBtr4cehH3btkXmiS24cPpPtRuujqqDCscbgrwL1D3sySu5ZbMSMPe55tn1QUZ",
  "key17": "3t5RCVdqHAWcCKm7M56omvMadjdMbrJbnn6fwtw4G4iyZnMYFsyaf7MZXps4irySxPsHDdMs8jqzsSaZY4WzzLfr",
  "key18": "2zPsLUEPctsmjCyHuhb6ywpnYuSe2j8JvKLBreqnxZBV7x5UgJhHDvAmEXmfye8tA6itxaYhNikMmqeZfassYDrA",
  "key19": "4H1ZU3mDdeJtSp1Sm8YRRN9wStiJq1uBnaGxHdFmkCHSAyaEHyG5bC7V3Q9V8LH9qfF6MPuUwg3fxuk3MJzdmsN1",
  "key20": "5hE8dtKvNGCAfjpBcVQtL2eyRcoweTpzG6VnjBkZGdVEJw14GiJUveUcVKMThgpXDjCciVW6Uzc446EWhnhX7dXc",
  "key21": "7vpfsSqyKAAhiiCXnQGyPRqmWRrBF9kuLEBUKmYKZXCY9rVX23aBW6vvDMPc95FsdCELdVWayX4AJTCx6eVYHZS",
  "key22": "LpeidbTh1ENh8Waee8Ckx6SzYsujmVoHifJ6J9NnogHHQK578yEudDUiN4h5K5SACBWoMcX42gv24ZAyWyHgX8u",
  "key23": "2WNecMq46nNCUKjUHuZvd2CzM9vx2b9GNh3PQgYWDKSL29PnN28htgBN9A5BGRSQMUNfuLznXjTRjsAhux68HFUi",
  "key24": "4Arcjw5RCJGgkoG4zAqBSz6MHFX2NsUJAL3HKGSmijVww5svy5kmdByU4j2wF4EXMnPmCJneMPLp9DMPTnCzxCDr",
  "key25": "2AjpDFJor5x9CvNUEursmvkSJooYKFartSHyTk5YLSrpbqqAmP3QAJEPxNjeZ3DTAEFbQiFPJPRBJfPMP9iiLv1F",
  "key26": "2V6gRS1qDV5LH97taBXVPRthKnUJHDmGHFNt1Q7oM5tLTc7VUd5N5deTcG6hp8224VGh79chzSJjgpasunjdL8Hv",
  "key27": "2P9MSykN3VKJrXKBe2574qd2GwBrogQBSAeG9wzhdtsnZJ4zVfXjeWedTSrbRYvcqKwHXiTmNJQCuXbvtMJ3XEpc",
  "key28": "3TLaUXqcNVFCMmFufXAn76xhdDDakbnZ7VQnisa9skz12Ft7iqYsRuWknDLCrm1HxPee2V7SPb1iNZ3fvcPHPDds",
  "key29": "61a9AqmXM4AxDpcZNBBd8FQdCJEUy1vDe7dchMVCJF4A3hzL6NZiojSxMwkxCXDDMZEqafWGiMTtBNYS9cD7FBai",
  "key30": "5JWvNBBKu1MsQz4v2FK4btW5c2Yxt5iPeroAzfY4cn6ff9xLTbBDEMYgWXJUmWdihriGUGfm1fAUEMSWUfryLCNh",
  "key31": "66Gsxa4pxkgiRYwoxJgep663b5Kfnz6U1fUeWeiHBvaSWwjsMo3BWfneFCwjT5PLqWXo3WKvz9p96NSEPBEfSeaf"
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
