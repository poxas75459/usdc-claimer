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
    "4qNAeFFdzCN5vzSo7zWj5mzP3nAqsAKCBbeVB7eMaSwSE7xytZrr1ws6RbaJXSBSFRdi2sT6yQxrcCcefrvwtefM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fJ47rm5rYTcx2ZBzsvLHX2TQxWGcuLqNLRBBjQyHQoU5sUnX9ytbdB5E8819oL5vEnJKhqPAheew832RZjja7Ry",
  "key1": "2cuG8UQDfFSafrhwhbh8TjaGj9TadKQDaQhATRqJ3cJa5z8mvkfiRRUSkorez2G1JkfQN3ypJPGRauW3v5RE89Aa",
  "key2": "595XcVhBDYMSopA38pqAoRqjHinGRmp7gccrxpToxrpfpGGmK79UikDwa7UyiaLn4xFJaHPsZL2PX9gm16gPYteN",
  "key3": "J425bKG6LaRSvvMDKg5riyLYSEQADrCSTgx8gkvZFeuu1M7RjSrAARYViAvA7G2SwtoRDDwdXEDGRCDGvEVfKdm",
  "key4": "5pG1m1LDAjs7rWejUgEQbWH8siagBoPmd7pqFkztn7c2JQUG2u1gfBMQfYiKazFauGhhVYXBjpXrREMLFFfAzZn2",
  "key5": "2cwgUuZRgmuBq1MokAx2wcTRooFY7yAyLsHewcFQ7xDNuark6LeDGSd3P4PEuW7DDLreU8uxCmKQRii4kMD8hYME",
  "key6": "5WZv9A7UuMk9xWkMsv5EMMYXtHvs6NLuGPYVRN84uYSLWsWaAtcmetezVDnpVoyYXGvGtVcMgCCNU6PE4nuD19pU",
  "key7": "4hbwgsbhZZRzofT2oM8SaNpAPqm6DZsffvP7CaCvc6s4Yv59YruWQ3vX2FBJ36w974V1ihTurfD2kjGLPEJE6gPE",
  "key8": "5yobdCJjSNTsLHFSRePMRwRADecvoVjVQoxz978dGcdw4mu3KftG7TQvDVCJfWbjiWQgvrWBR1UzApDnsoKFHcwt",
  "key9": "4fLbGjdmAKdNo67WyoTdaUt8bBZ3BkwpUgL8J5jZDaFC6cc2X1aaJd2pt1TqUnnaee7uKpR4ZEny2rJX6mkQx5vN",
  "key10": "73WJ5woRyjGH5FEDJJhUv42D2ccf99paQ7cDkuo8vGUYm6XzmQU3U2GbhpA3PLixdJ6LY3CSpZaKUJvdtcvWzGP",
  "key11": "2C7dm7oGe5aBTLkw9QF9pbe5ZpZx6UomFiMqmjUefWydWLeeJNsAhp8fMRheMd16oHpth9tEWtsxwFZPATisn8Dd",
  "key12": "556qCZd41N7GJcUpbWwC6imEFnL2dukGqxzgBqmAi2kY1bx7CCmSoWhRgdFqAWQPLGdQL9TQmCFWA8FN5uqkx4TN",
  "key13": "4JyYrbQzxCKcSW5KZPJvJHr7KtQsac9JvHgJzVJHevJkpHhSB6XEiSTfRApQpCFyz82WXUpUWEcJ5ydmt8SCaNnm",
  "key14": "8rSLwfEv78WHSqJ6dY2P9YigqcfGjaUgyf2S78QcqEaJQ6pTp6587cVAKcr73vUz6eTTqaB1DcA6EhcFDrF2wYQ",
  "key15": "4QqDfHjYbittKuZxQTfggtbiCezYrBqJbLGxCU5DcarhPQivPq5keXR9nriSdqa8MT7fF16EeLxvYopiMz6oh6PE",
  "key16": "31NEWhEA8YDtFCzivQaAyKV1kQCCWkmEAA86WDm8gHF4hFWMKAKPD948HZaBnAdf4cXckwJp7fWfxE4vcY7uP4ae",
  "key17": "3obZUcDKtc6JBY6KurdnCGpUfNQfGHexmeyazpYs2hyNZKuUG9CA2oPQNXMHAype1LWQHKyyZcUfdHA7ASYptUYZ",
  "key18": "4C2a4CjWAVGzEALgSxAsPa3GPYNJW2D8MB77C677uZ2pb5UvuLxGq8nRVojkZKVQzRM3d7TaRAfZN8fp3LFWexfL",
  "key19": "id1znLUT93989xoYq8t4FPWnkCGCdeRVb7xWuWbgj66azk6VD4gyeCrVG46end9wj82d2ad7994GpWLv6SaUtQy",
  "key20": "2e6Kij1xEJYVdDgDzM7KX2R3A7iSdnNxeTrRe4LsDwQd88jNJaAi1F1pxJwUeQwnhk15oR6F3M61cape6mKRjNH",
  "key21": "2Whmkw8aJ92nsBmXjwRoqM5B2H3aCSp1gwpmdkm3mXzvGRBZTcuCEKTA8XgaZAB2ebwPwjVJh7bvJiX3Y1hAy2rP",
  "key22": "4DcDCe3Y8UH4HCbqu8zCQ8wkc5PgjMtfBF5ydHob78WqC1cuhACUif7hYuRA5LiYVdaipV5UAH5RGNZQWLudR913",
  "key23": "2cwnLjn8cnXrokAVvqYMZEDA5JTYjNiKiksYkYVLJnup5fzdT1YnHwp2bh4WXtWBJ25CkU2kcJ7gSDt5mrbnCRoS",
  "key24": "3WkgHXdU48pKQrwHQyKgoJxaUej7s3ZZW7KKpbtefuEjFrPQbkW5H4WXoa4cEbrY4xgujb8iPfFuauyWvbmmH99N",
  "key25": "3eyU1zDfGNsnPnnRarPexFhSbWtS3rQDBkjyuimbduXCtNqquFgbWVQaexHPBvyB7YBfpYYY3A1fJuBhqnpwE9jR",
  "key26": "3K8fcHa1U4g2egK8pPHi8Wgpk2ebViQTLjQUWyMpVyuxuerQKWbsYM2LUTaiT7LFA8sDwtQMgawMQKuJ2BxWbhFc",
  "key27": "RfCcohobG2hEBF5SvQGUCzaHYG4DbHTQ8yykbNaGUQes2hsCTGAHrNZQhn76AYgQb69LyDzekS9dXXtWBRjmWka",
  "key28": "4u2yNKpmyieXUzaq57KfEVg2fSxg6oZXuowMod1t1StB1Acwfm7SM9AX89XSog81tHZMV7Kp3URJ1KJsY6PsZCDH",
  "key29": "5knsvZWAj2p3AehxYmjViLmx2D6xAgRirGaE3CgShYpZTWXTSgqsTzP3RZWx65pibV7AFVeh6ZeVwKbk58sHpxEu"
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
