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
    "5wytfq4qWMVCe531KuhUpAbfpKyY8XPadhHKDyrNuWjjgu3mh1cEgXdmjqPR6nZnDJMps1HJiQezSKTuoXLXakLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r38og5J8TYKNATKAuhNdtRWx18Md5HYwADudwz9EcuQNHmG47L4edxByrSncrRg3FURXoz7qCYjBKUhC68zuUAr",
  "key1": "4HALSeR9HoDahKgMBb9MTgVg4UcGUBTSD2XFYuTwndEMXngRftf5FdiVMWEUFoadNFy1o7jkSmMTfdbZJB3gzC8G",
  "key2": "4BikhBSem94sMS1a9d3JeBC5idtkrmYzCoQCaqN2dWrCVoboPQmrp1neJJnEiFzMcJqjc2HCo6vfPz6haV2MXwRK",
  "key3": "2pt6xiAPcFEmdZD89UwrQAZmQTFaMx4b833L5kGatrkD49eJZD7E7h6ebXDY5EJRxNaCYHyzmE4kaxWi5mX4v4yY",
  "key4": "3h9Ff7BpHH61uYKYPj1BpBnNPHf2EUWEVZG6geKVaEJkiAHT81pFxWXGa5jpTiYHRQXdHAo6mopnQ3yMChtjSQAs",
  "key5": "5zUiJV2uFbxWmTbJcsvtyNUFATe4W8eV3dCNFAXjvx8r5mNmZX6VNv1KbUEj946XBfhJoECgW9HREhLwdRCSWhZK",
  "key6": "4nF9XhYXxtQzWiDtSj6ky9cEuePTJt8MFpfBUSb2f43MhAHhqWvVmuWAm9GmCrAvHmSnAXraLdM3ckpcZcmxNK7r",
  "key7": "3NfGtiBdigv8JCEhmJJy83v7vQtjGvjkuEcg925YdrKtzNerJ8mA4r94Ufbb3dF7cPBso8BGU4n9cCPWTssukkNv",
  "key8": "3gLvxFCC5FgKTuojpjX8GGb7sVf2FgMqFoEt2sDYEQPFbe5i4tCo2AzyAJPgLgG4LTifYDSeTCcYNMFiRM5SPiZo",
  "key9": "hafiuxMLTP8PRTvRmg4T6ZaVGYZKTASJccJYpPufY3NE4sP4Wv54FsYkrvTqKajdiZVnDetNhHZWSgzBrtRpDKc",
  "key10": "25DZjbf2m5sPvY9jNff5D3Xy7xyabA8DnZDfajgb6DgdGW4KGq5sse6EE7GvPc1wFz7uwSEZJiXuEfBe87opw9Fg",
  "key11": "4CyhQG53SXYB2qyDcokw8JkrkchyoUAH3ptFyJZtNkKeFhdrdQ7EyR7zW2NAKorBXpLi1y8cVabMYZB7fFbjsuYW",
  "key12": "bCkvHfHkNxegxtTffhz9MSxgabC7CmG9mMLBKyFm88DbZsKjmc5vRDJc8L3JLHtiicQi9ZmPiDXepSfTtTXVsDj",
  "key13": "53WgeqYw4M1KN8M14MEEyHW117g9bmNjW3nbQ4jx2zMnTct4vKCowRYCDjpuf8SEfsuoYucAqh95HG5YSKaYJYyn",
  "key14": "3iukGaSh7B7BQ5CAg3AQrnMNovg32UT5r7fWhcbrJYbcmfsu2JjYqpprh8jthTgAkxjJfu4ibVD4EW6SK4jvCHZ6",
  "key15": "4mrttUG78FxcNgGe2d55rPjYJhkJdLhmd5E6Mb3rTGsNfCjb4CUw4Mecu3oSFe5oY84HxHMyb5vfAwWbzwdKm14b",
  "key16": "244DrfvUxsGBmJ7Ghyu8B2nhkKKbFJAGoP2kCinMb2URrMSz2L5h2jyAxKTnq5pBa1f6d4yvo7ZiAhDuTP2GxuHB",
  "key17": "cTCmv3svXos3zXz8CLehyV1veZ5ewx1zgrPrrc5D3THX8s8pj3Jzc1H5QXAe7ugasjoLLZA1tuanEYKBjwz7MZE",
  "key18": "5PfJQmDxnA8j3amrgR9NmhZ1NUmEfpyDVEwWnskd1ZMNywiZxkvqkf5LhunmfzzVoYfM1vCQwuqsqQcFdfsTFBcy",
  "key19": "5vMfCiFV8GvuenB3jWMSv5kYqrxN9xaNyLPfFFsrrM4gwycAmdiiAb68JBhQHXdf71bjBfV7BnmMbQXt34f6KieT",
  "key20": "yvPHDJZxxUU5hskGjGtmVpPLfAzZjTuLwxD85UkRRpJXv4EAQSJxuWuTGKNNxXLvq4hGmt8TnHLLHDbLSSwaLQv",
  "key21": "4n6uoJZdv3x5DNyb3YggPwgtikh7fFp2xyYqJs2D9qQ5RUWe3YuDer7u3gGPdVDFmAnERztFZkedzL6Musuipgc4",
  "key22": "4AeGhnMwPtg3wKphzK4S28nUWK48XXNYyZH69D8sH2Q5abP3pBN7cBCqFou6hPSm4UkuN3kibQ3gbNrJMFvnQcA2",
  "key23": "4WN8pUR7DgaCJBKpLTrBuD2F4pDq87BLGNjmC4te9GjdBL8jd7BhnawWVf83V4RhYdhu1CYYGqGm3mX4FTB5ixWo",
  "key24": "hWKdHjDX1ahELncWzY2EAsaBxFNJwkfTpwiwnBXPSiKJRCaxeZWWpXB4v6NukpRmH3K5nCbMBzh7LMwnccz99nh",
  "key25": "5z4p8KiJqN64RyPZKLz4ik7cL2guzSMukue3Mt4nurKHn8aMJL1shfRzbY7B7i2iesHH4rdNbcLJ9U5nEp4h4ebd",
  "key26": "4QVyzHTCHQPUCAeHqs6ZTY5q4FeZ1F7sNKkoFZ4PtpfghmR7F4bxVAcs5VDbB496u8hStopoUXXAWVjL5eVHwF49",
  "key27": "z4hhKZeBihHmsbcR2gtYQdK85nrNFBz3c6FZFdWZj7mzQvNg3AKRDgJWqc5NLBFpvvxNrwdhaCgAY74oWNEFbXL",
  "key28": "3afaEDXfibakUJz1qqsnHWwp1Tpa3jkhhKcFeB69e4xo7efKYpUHknUA85RTjFj1AaWSPqKVvTh1HjgqtanQfvkn"
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
