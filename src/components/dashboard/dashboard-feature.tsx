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
    "5zUqbRt8UAdcJPXVv9Z4BuEq1dwsugKYjW7HJNTHu1JvAAXMBekzarYGfA2taB2LNHrXUPce1jB8511SFBj39szZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N39sT2h7HsyemFx7itiaYeQ4KJFEWedpQz8jv1MgsD5LNu3izdHCiqhB61wrpXgTeHio6XhyEjZAWfyyLexsSZb",
  "key1": "49oNJUdxFh5CbxBpy1jScTgfM77WhdRZUNutcuvH6gTaDcng1Le6P52TLsF9PgXzn4hvmhe1DVKrgpv8sDum3HvA",
  "key2": "2oCnt193kwnvGJzURkaCbwF1Ako5jNeRxz65XNw5hMzsfaVF1wEabuCoqiEwSoNjkxYNjaqZX8u6DhsnkJKrxo8F",
  "key3": "2QHKHfLNoJz5fPTsD9VCXJxjhbSuZeHJVFz934nww1nNLg8QL2v1892yjxkiGQZHUFxtTbbBHneAzSNv2VzHV3w1",
  "key4": "5ESL4ZYFDL9F7ihqdXbuzBugArSXeCCirkUBZS7HJPxH9gNCWHTjEhm7kLGn962yucTZDijmwrZzEp5M4uXRwhf3",
  "key5": "2yg1F5Q9ybfBTfZqKBbPa8VNw6iZUEpTBeyHt9ezeWBQVfoCnuK4N2ea1xUZc9eF28bFktrEzGdMzRiMjjemUrUz",
  "key6": "3EUqcgsozx6jDQ1PWNeLuSi6jzk5fZ7FqrtghjWh6NQ3LstRQNb6CWYqR9rZwh6sJkV6WD43Q13T5RJRSAApeoc",
  "key7": "4qy2XNY9wqfa3YcjqChvMdvnFREG6frzMPQ4dpeG84p8RXQvtoTvubbrsLX68Kuhb9fdLdVQ1b6x7tzYpkX5NjaW",
  "key8": "45RamhrbLR9jEkwXFte5YNXVrqq6Vv2dMvbfQQFm2Tktx6zTj8uqmXfThavf1KnbZog5n8HpBQLUnX3s8QE8ADht",
  "key9": "34k1gZkFp9zms6LeUfo4qz6BbqeEDLUw5DGa3JSXQiAdA5hm1AKDvzvqKAVUYoX6TAPnryGKBeecFgdGJdcnSk9i",
  "key10": "2J6hhEqj4thfPhdHssXPeEYzwWBxYyisyWK5A6CAgDz3FbMpF5tcDKtj1DeJLGzeduFpvTDqeHgGmwgUcLH2gfs5",
  "key11": "2bXKYamPcMmySyC5zaasHobHPTbDxQAsGSqUiYzqJKjZMjp6od2mGWf4KcFhkRy7aL6n4X7seEMyDx3EXACfFPu5",
  "key12": "2yAEdPgZsjJ1Ycqq64qqpFKnsjoSvKi3dLdUj32ihD5GmV3JK6ShuafzNmxsyGoGQRBS4xk4giTLx1nsyVWUsNEr",
  "key13": "2HAgUMFUMdXJFsN7r1ewLrEeDKuXNBpWZeDjTLKo7ZM6xs12Zp7y1ccV76gWzJuc66y9q7Zz2qHQyGKg6ERMVJcm",
  "key14": "3Dq8r6XbmpWdJQVSCcYWnmoGehNXfVsTK5X6KYxWQK7X4mkehF6zNHSB2LBqya1V9QrKx3Na3B283szekLErxxKy",
  "key15": "4133Lnaq4zYk5Z8F2TnEkRcCYfGEHSL8SjEeN1LdoSkVHgu23HPyQgJam2NFvpsp4yNyS7SRtEpYCLhox5qdqzhf",
  "key16": "eKV6xha2rUqYpkNmmScNQAZYUMXkPtuWH8KrjZ61YQ1qDX23oVndnFNYPTNYNGmdAV1Bw4Uho3ns1cKPgAMb8Gh",
  "key17": "2o1KtqVWVLNVujJvBDPo6FWqtb82kYaR3MVknYZqNEQscjfVBopm8jYKosJbGA89nLMfNgXWddPN6rG34GoVFaQ4",
  "key18": "5P9p2Y9nEXePrBwDy7YcUVJa9hHZSA7Xqv9YmVURbEkvHPcJ9LtxdYwi4sFrCC31GEe3UB17bcYXx6pAaxRtWo6Z",
  "key19": "4Vx8E1qPSZHKTpJSbKCuADQiZuCv15RHVfXzCpNphdRhQr2G2xjDZWtX58zXJFCgyJBRf24XLwLY3DNXPbea11Qt",
  "key20": "4d7VTBQqyvm16BYNCmepXjBDYp1NbWCodfsZCinAKKt22r7vrt2ZtejFhgdwx65ZQzP4MZicKptWR3t8FbahKwfw",
  "key21": "4nd7VUvjRcxLy2n85cLmvRWAFjViYiVyNwS5igBvD4S3uaBS2Nr15rYzpFLmv5bLvPTkTiMZwToeUn5PS3S4Laxi",
  "key22": "5RYLSrZfgzgPXSqjRtnWJACMinMeEertgWFCk9bMmFsnGXUHBENoV69Kn3B5JhN4MgVnRuDLY8P2tgZWC7kwz4zV",
  "key23": "28pgxKBbn2qmCzpSXhHYhBDRZSgFgMqbfTekRitb8YZv6mUA7xGYsjX2kxj2XG646T224BwKnMoqoGjFPA9kdkFC",
  "key24": "3tQCsTvdayDptzhhFYCbpNtmuu8bdeNa9TpK9PwSip9dTJQV8rfz87ZMUyLPmPLbdgsHz4R7B93ZomPjdM1EX2LQ",
  "key25": "FxQq8gLuCUvAvayE1JvLXECwNMiZkgXnzsCmgWbY1aBuEZ2X6CRkuozZGS3ew9AdKq6PvtfjDuC3dPxPjEuCpyV",
  "key26": "5h5jBSU8R1hm3f9DucjYqQXLb6FypQLrM4HeqkoxBioM2NwaGedbC2jwrdWg547GhB37WCoumGedJD6P4Uj3sBNY",
  "key27": "BkB4GS5KgBV3ZMXVoBehKJYZhyBuTtsCGaPcDdq6Li38uPwWeB2brgYS3m6WY7hBoDQyTamw57dkjzoK6tDiGa5",
  "key28": "3eJzowHLkLuXcGGxUJKSuEJHuMDhgAUz1cuYNfLsWy9ZUkQmuKWB3wEKt6bvxzze4tUndm8G9smqs3forLgCi3nJ",
  "key29": "3ruHaRBTZG5rZxsaXn8zv71LfduPtrUCBYkDP1MDCEqPQPgQFofSTKm4WWRfhKnUUiSeTsgitNEXNrkzAewYJYiJ"
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
