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
    "5FXUox8sr6dj9mht9xkHFu5TTu9kavLLCLXjh5ifeMZmB1tXFZ2DMrT7WEtMYjYoZShDDNTLv36VuM3nzmoFCyJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ADAQ3j9wKA5bN4Stchu4V26sRUkXmTWAJxXKTqaTHgDBD74sU15X6faWSpRDqKK68NwnsotxThgaBfKGXrT51S2",
  "key1": "2rUPbTw5SWTN25MoZVhSqxeU4btvxeS15bz9GSWkCLgZiPKiL1joQnid7chgu5hLCBf1jnpgZxw9nx9hpD1sCibo",
  "key2": "3LfWY2VyG2NnAHCmacr3CUQ9kRkgExSdZzF1ySTG2suNbQXfieLQhuiUQaQ28k8mDeVQyRkx7QWW56dcXgQZsNbh",
  "key3": "MMuf584SkrZjiW6DRBqdgKqhhzQEMms95aaxggLjBm6UDVuv96mzeBywfXhjDRStqDLzxhbD3fcDrrtMnE9Sieu",
  "key4": "5uGUe1DfGyF8rwtR9662SxZG2jDCu3wKAxCAVdcSBb4NfnLXQzT44g8QaZPUwuMCSw9xZ3wzogt6mvXsueL64qZL",
  "key5": "azuV7XvZYFXDUtf3oFCg9AgTk11icYmSyUzVfQWnt39ow1y9VSRTYRJTySLBwdxNcQNQbK96PpFF2bfCc7MtQfP",
  "key6": "5SmHLgrByvdRBdBWsgh6CDoL72uo5dwfqsoTVAXNU1iPmvoAUJEMoguVe7KFzBhQsbPYu2fdm3KVERD1aCDJSZTp",
  "key7": "4c1u2wm8ne8i4WsJkNW4Ndb3n2cfiFM1oevBZutQZC1TZBNLgTEeocqdoj7HwAMbiZ1TDogv8qRrvPCAFiVWxN9X",
  "key8": "5vcdSu2hLBrfiKKBaKgepfhUm1hQECHNZCvgVn8nKAxSTHM8P1DbwJiogDvqBj9qG5ieUzoAa5KThxtJXV2KnCFG",
  "key9": "523e663zChaaBRc3WedWCdWtTwZxCyMHFaQzY6obbwpKa7bhQr4AkdLkgkHKadQ8Wz4ZC4VHDHJqFjyU2uPieJx4",
  "key10": "5L9FNzbDQeUR6tCVfvpKBGTUV8CpD7ZbQmwgzFtcPNN4mykPB3miSdaXM61cr9rdWwp3rMiouokZ7oHiM454gz5e",
  "key11": "2DjhUQYk1pqBFtqksj3Q4sDk3mdZVMK9N4oXLSjXQ2G3tZPonvSy5PEcJaUV3jVmWLLYsrGdwEWHLnntLzo8zaxg",
  "key12": "5JbVMzdzf2NgXZRKmK9tgdnUBQEpg2QFAZH3boHAAYGYjnHbjyBhZh5dwpdmCnLZfy35eg213syBWJVBq3efnKSd",
  "key13": "37frPcMaMADQ5m2j7o1GWcrfACQAL953dZ1PVBpPJXM84QBNACDBLi52qVoosMVyLsQF1QjfwnXdLa8XUADQ8ETx",
  "key14": "53VUrGBEERy56NLjpegGaaFXY9cKJhrqXUAArTfvvbzcowNx8fqLFAZHLEdNZXm1vF86ZxALxy7WiLsTgxYxQFo2",
  "key15": "2RN4fzdb37SAHfS1vL9Wgsa72HJy6QsXYCyqT3qbMioW4fo4fn72yC2PqCZQHFhdKMC27jbeGw2QzG4yVkTkbi8L",
  "key16": "2hgCi7zdAWYGKMnuWAHbFVS7VZrZZZNid1GTKLCKbpM7Eg4CzQ3FjdaLuWx7JVTPBG8ssnPjW7vtPRtbpKYxixwE",
  "key17": "4LAa1rfDEk7mkzY38iyqmn4FDqkJS2CHHnJAjdxne4i5qA81MJkj92cbEJf7QTbGXxA94keNzMapAjjm48hZEbwo",
  "key18": "4CnTYLJnXGPWcsXgFrMwFwFdE1oKPkuTprG9ajx2ujtRJoVQXj7ebj3gAoV7YYWEfxfRur8t8BzL4NjnoYDWC7HH",
  "key19": "5vbXqw6fiEBzqTjBFZv5HXV49ruC5PHRqennCAdqcn5uva5exzqLCtLjCpVKfk4T3bkcDrku9MW4d4hLnSDtLVPS",
  "key20": "5yN6wHhYm89gWBgWF5WVQ5VEWzJbmJXc1U9y2HmLJQ2UL2UMxFbvRTvY3ZEMr3h6csMH9YsohdFWdBLiUYqct87C",
  "key21": "5F3mLb3rkaPhiPmvGsfL1NCrJe2wBsFYsk9NESgwQcYJReaBrjsQ2tXAW8sabj8MqjyHKKFKARTnvvLLyb2JEEDR",
  "key22": "4kSRPg6xzDGrN9g3S1vQa6fTxgjVxtyUc6mG5PqLYkdKrsPvVmAqthwwTmapHi1DUMoCmRfhRnczJcK4UYA2Vfkg",
  "key23": "3eQEAsLEYrCr32ZQRwdbAWiQjzacYrK8x9uyhwVhro2VFsWaER79eFZd3coE1HsBZnenVTRvpsunzTSdjS6sUoVH",
  "key24": "JoYLRASzQ3E3rERTtJce7e3YAzjCSbPoEgx6vE7AVV26pquBMgGrhRGHBp4WZRDFHPuJzjuJCvpkm6p1Nh2taTE"
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
