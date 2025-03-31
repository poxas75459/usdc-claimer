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
    "2194WhDiZox2wv51HzBcjHtbPa7NDQYEFQ1MACmBiHsXvuQ4nZz2VyDmLiv2DTAaPFegRSxZDZhUsMm1XL2um7U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mz3kVX2Kg7gYGKfYdwwMzjfBpx9jApfy693SS1NU8RhjvSDHw3YtmYYjYd5e3eru7DZvTuuSCUQw2a5hVzRqNsk",
  "key1": "5jR79ToEFyBuz1vxTEycSGtpfWoEgPt5efLCT1fXdsAEV6iMLoiMMMafe32cmBJHL5ZrWNWz4esximDSwLjEC2iP",
  "key2": "etCQDvaT8zFwW1yVdTQUEmoPtB8umvvAkHU4Hgohx387Cb5Kq6y6mNWqXjpSu2LdEBHdhXWc2mPZgsdrDDea62Q",
  "key3": "2RpHbHvyY1n2LwtcyJQNodqjd3CEHTBR4qnANHmsGZfN7g5ZrxeXioCikyJ28A9FvAJQjoJ5R4qutFEEME94zo14",
  "key4": "5rUugmTc5MsoRikwt9Dc1jtov1UTrgsE4kSGcn4ugLasJ2cB4soY9W5DWhgwZLpHMwYpqdpYkydQn4iUfJPKgzJj",
  "key5": "2U8igtBqbd8rfAFGCx7NNkQFbdUAVypB9fp4HHQiCVetEgoscnUypWhExGc4o1aZWXA4cnKAFwKs7fMizuoHz85M",
  "key6": "SVFAxxzGGFSFDeyzLomKg6YSor17PwrFaczXGu8NYV1QEnGzREGj1F1AEXa5ENDG8fhQMVZ6UMG278hez23MWgh",
  "key7": "4NJXdh5wXQRgWW94qJ9kecLgg2vACBC85388pcnY7uHErcR69fw4VX5L6fA8ZxunW5aT8pdx5cogVbxU5DXN4Lkc",
  "key8": "3M7KEF1953wKBrE4X7ntVESRwQK35s74ttxLvfaa88RqdwRnkeJsECQECy6q5CSaaeY6tyf5f1G2BPTYJxCbaaq9",
  "key9": "4Hdy2LUQcWVzjhshJWPLm4WeqaqL6oVhkT1p9FYYyeEzkWmEVgrwLxXpRzgCYf3CfMH5UKcmCBpoor82vFToiWD1",
  "key10": "2uUQTjyDxSGuiTmDcXAzvthxvYAD3oxvbD4CdH1T7ACYXz2UULoxbFKVDVN5omc4cebZnSWn3fNQvgKM8d8AZRuF",
  "key11": "pjcB3ULWpmcNLaEYyv73gxZzh7rGVLoAvFeStRNoZWQpLYWYYpYAmwcLbFNzmV8NHV5xjfHfLQStYwwgdpcPz5u",
  "key12": "2oawVA8CE5KC5JsgQ3Y87nz718uZhbVs4ioQuJUqbosVAkD2shwchhzASY6ZsKcS2UJ26UZ5ngrgXDFRV8f56HJt",
  "key13": "2ywNRuvT2eNg2zAwRXmT81DvdkzfWKexYcDd5VCCqYUS79baa8mYRZHtrGB4NK1kD6bAMJuFRTTBaVzdmfdbYdaL",
  "key14": "4djQ93kZHn4tdVGpQVoqnTSproGHbFCM8rB3HNXDY5e1NDWuyrm6q9Uj9vyi61qNTnPxK7Tmkv23ajr84grQRkgj",
  "key15": "5qNDkzUXEWHoxrDBi9jhpxhtSfZUeiRiBpXQpTkEvi6iq6rYE71ApJcNmcqBmMoMK5521a7c7tjavYNBWeze2UHk",
  "key16": "58wZiPio2BPs9uKZfY7BtwZwP1wwEHRYYXTjhVaYtuVcf9pvUNRUFKyPmxPAD9Xzs5gdfp15AJqZ8Rzy5m7SGsXn",
  "key17": "GGfe81KuGM1pc4SWPfgcPPipCkfNJxGBQcWib4vP6GwENRs1xBGN4wpNBSDiiiJXoU9Lb6db6kdAZ94HHxB1v1n",
  "key18": "47mGNfaHLS8nyy6gYdSNwbafwAi1rfdqckCtZYjiwNoGYHnjLz7Muk7qimGfFRhymGSwyANARBES5ZbxmdjbHGm8",
  "key19": "65Qxytu6Fktttohhm5XhB85X7kR9EDdxEiK8it9dDYvgYsPEZGBsEgVEvgB2evAbjZYomrbWuQheu4nxzfiCJNex",
  "key20": "2ETTAaiAT84cvgY915kmeNDsd9YjmHQgMVNVr9WYgW6dQGocxH5gmGxPqnVNCzKym1tXuK4qXCUGbFyQ9PThyMcM",
  "key21": "3Wu94gPubGbiuh6mrAY6VcbmunnfqzEfFasGS147GpPfkiorisS69kCBacW7oFWkm1s57wrg3haYrwjMfpfv5q7P",
  "key22": "3FNkf6vpV4Amy4YzyBMXBXKXCrXKhaWa1fBXCHfg8HoGKHNMpo8KbgeCYUG5JECA9fpeAJEgavzxgiC61YSqoGpk",
  "key23": "2fWrgiSw5xgXJeNGxw6zTL5F63NBMFatzpAWnAkkU7zrHuB86M7A7yWzYHfYo9mvYmhx6KZNdHppQ2VT48Z2AU7c",
  "key24": "4EUcQeUEGL2pTE6q5gfW9eph6cqm7NSCB6HPpWAav53x1jgxZw5Tg7TvizeV4n2rkMKSAb345LEgo9x83AshUUf9",
  "key25": "KWjLHiUvdtZpddQrPn4MVEbHtud784CRHWzDzJGfW3N5C2CoeBckqbkLLVPt17yBmtnGqwSXQFLDyABQYehmcUb",
  "key26": "4yRXTtE7cpp8bxJa8gyqzsn2UM2GsX95CEtKyxMeepa4o6pPVfuNo8W2rMbwLN7JjG41H36orwZeR2899a37iqfC",
  "key27": "5CDWLvQu8AgALd9by9JTDBzKig5F2YYkrBgGfoPwcdeoxUoVhHm1ubjGshyEbV5ihTc4VWrpWXhdYPXoXRBxAfFA"
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
