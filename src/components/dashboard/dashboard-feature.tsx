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
    "2zqsa9f56qGtN21piNPynhnsb9TRsBEoXcFtmQztXAyCj4ApQZs5YmVRAvUD9LafEgGuQmmYFkqGVt8YvgwsukQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48afm8aWxuJy4XXVv7QGj4dMu7GDnqA6xk3P6zKSD2NJJnr7MVU5bsKGk669iEmRfKR15SNuunU6gg1nMkj5es6b",
  "key1": "5hrWhfrkFxSfaVfTb1SechCoitWDd99kEoghyDxqTBhZpcMSz9gh4s31uxL2F2tSmdeFKphHpkDnjNBQExgTGPhi",
  "key2": "3wBodixa6wS6nFoh4hCqszo17iPH37WPchQdgmNJAtfK4Y32vrSBTrUSS3v5Bbi356Qm8Z8A9YQNxBc1pv2RCcTm",
  "key3": "45hAX75eFQNsUyHPRmGutu2bQ4qhEXM98zd8tRhWwvd2X5L2E6BMjuiMkFpA6NdRzt9WVoxSyVoR7cfCHWVSFhRS",
  "key4": "g3a4yuWErLp5CvMbL2wMhcdxqVbrLbGWuC5b9TLhKxW6BE5ZnXtuDKccNfqRyHU9SiqQQmje5tLqAtziufVN2bn",
  "key5": "5PyCPBsXx2YB5VSeq8msHN9HPydmMyUM18Y1YRno4xZCrutKbiQkPKUpUxwnWtxKG1afH2NAzX7yMn5PtaKQR4o1",
  "key6": "3DSvZJ6j1JFLCdvdU2hKyHZorBUSSya2vMhKNLRCeXNpPqJsgQLNuwQwRmCMffydETJntJQzZyPcs4o27Jov5evV",
  "key7": "4vn7nc1oKbQy8VX3xDvsEiemZY67UeDS4zC812FkgCEvCwEatN4tSPBX4BTZJHpSQikQ1buRNCq8FSNvn6g1mSwy",
  "key8": "3YtccofdaDc1zqkYF2waQLvRKjfyo3K3jbEJi4p1Ti1M1pqMLwu7voEozKh62paFyVfTw4QTa8cFbvH1kpwdBzMm",
  "key9": "28YoGdzAzunQHB1TEK7JR9em68SgznAjCnuVWp25ipnBWkPFt51FfKWHA2UxCuVoQMKm2Q1BosihEEqEDPw1G4fL",
  "key10": "62D5W6gY1Aw1rZxD7nL7vtG6ft42xATzL2VTj7txnRZpDZVKWXfxdwKGQynkUpNDZt19pTNheSeZdUfjATQfpXJP",
  "key11": "5S2Q5ViVqbcdf7y2kX7jjaL8u8iRsE5dXyT978YvGrA4LacoiX8VKqZdyRuHuhwUkw3R8PZpwTTCRcabWpSJes3A",
  "key12": "F9tGyR8oDZMQYPd4Q8GWt53HgWVGcGzEVPBDaRpT4L48vFMBP1YBiLtA1i7XzFmqEqAJ9LhH9poqc2ymbPJA2pD",
  "key13": "4wYPJPpg6Dju1M5iEVvQX1o1Fq7B46mACFBPLqYLhyPdqNWfvgMigCiUxrvCATQaytVQKH8Jy9KDuXXQc2fu73r7",
  "key14": "274qQnRDVnMo63y8KrHinmGd2fnrF34kdxSQouMM2SZaooTeYNC5g3BHc8VXa3RtKctLFg5Ebm2ofDy4FSSqT46F",
  "key15": "4ua7qcgZeurfgRV7fou5mRvvB1SNrCR5Cu2aEm9cEMrkj2dJSmzUQJge3drABkxQVDJh6MWLDsE2CpSqDkk1rd21",
  "key16": "2dtKcG1sVNLvPpTgjTSEZdnAnPE299SWxo4i4C3sBijfBAo2GwyiGb7NXeJmbB8EGy9m76wfFHwAUawfHqD8VXcW",
  "key17": "3R8yQhnqTUfEWCVLfeg694rbugXwJwJGc2TJxfMHkRYw1KFcSFRhyEePTy7MVCCuUowwhrg2rYVKMYb6nXmsrrrj",
  "key18": "3TEx7KojecBunKBxkoUFwTdeKLTHRKWcEJHnTqs9U4Ta4sVmNQxDopjjJvVMRWS1iEJjXsRC4KGixpiGRn7NA9h9",
  "key19": "2jiD4y4YBn4JH6xs1qNGKtAtgrvGnNr6v184jdKit1SfTmPKgvhVGg5PDqVpK1VgCE21JvriMBqvJVxciXNX2pzE",
  "key20": "4PSBYz7SCiEB65K3DqzRRLfLGHgzBxr3ikovBFyyJ73S45i8wwjBgy79cNd6iT2r5Ux7QmcrnfctixQ2TPvaSA6u",
  "key21": "3XYxvns4H7GTJrNK4EjxPLL9wHGMpqb3EUgSjTQdCUTdpQM9XFQutbsMv5U1zWvc2nFTgU9Ty2tMQyvKpRCKof97",
  "key22": "46XFW1P5KPE6ayTPtGx1dNR8boAesi8kBvnwQHZu1ajea6qpGHX3BbshJEqE69Eb1EnQcRAUMuvMzpcntPX1p96m",
  "key23": "3MZFeohAtbYjkEUyemi8WBTMJR2m7NLe2EznJUKpvAvv5MTGCRSf3TZUzWzABSxEmcVLBAPGLoGNdw7gvTvjwsdb",
  "key24": "sfZr5eELECM6FsYqVKx7tATcZhUd4VYXiLudxcZJj5qx3N4swTy5fyZKWNzktccvtjo2dNRwFhvHiN3CFNmw4Wn",
  "key25": "23AdXXQpaBqgK1nXZbrFL19ZMANNuEe4XrHUs8B41XNZPk7yEveGS3zgHygYfGSe5LepYMLu9KiFJyzewnRg9E6o",
  "key26": "3C6HGKfeaoEidNe1nJFfJ6FXu9wJHJzCw3hPKMAaVhnRAejx83aRTtMqHKGirfif3J3eMsArSE1rCdKgJBwDx31B",
  "key27": "56Mp3nDUDkXeSTcMKtt9TGWGqktnoRBVk38AojFPidVkjv5HK2nQS3YLTmDHDDfKK2MreDE7aox5K4KcrAE2o7xs",
  "key28": "2Td8m1yFnJ33rkz2wc3e1cLzbJ3cXu3rVPYoqu6QK4nLtZEXWjaNPAmx48sAshVerzwVztpYFCWNximHxPvGmmK4",
  "key29": "psnaMjebPvBB9zZX6u9tNYkC358jKUtuqz58zSJcgMC2W8uymuo2sS9hcebu7sdP7QYm6s8jzygfCqzmeTFGzp6"
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
