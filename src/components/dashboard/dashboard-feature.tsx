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
    "eKpwdGGCq5Qsww3udypQhQvv4MaakyLu9FUBegxTTemDUDcVNB1dwf1JxQnXcH2qPLhkcddxkbkptMz1TbKh4KE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UYt9PUJDeWgvUz8Tw3GYScg5E2JWwvdbM3K5EQ5D5CiYGGtB7jmMjfo527Z1n1pCm82SjNsfchUDwmKcyoQve95",
  "key1": "3k5tEMted5hYGtKWZGgPGyBrqbRA3oZviaJgxGJSfLDxcGFegkdw7omfPKtMVXDZbqJzBx3HJE3rXeLFAqAZJW41",
  "key2": "21L8DRq43BTKh2TG7y8J4sQUFHUDEAVtrMQzHNei6V755NhJVEdBBQwHDsnHzjCta98WexF5gDdhedzBeomwWG3J",
  "key3": "4BK4PGc68f9tVopL1PBdXRht7DSjGhGUjHXbqNAWYxa5kDHkRg8BsktoomrehAoo2kcm8S2U4264R6M2oe1eRfxp",
  "key4": "5aBZeqFoXY83p69ho9QHQWefZKYuPbu9TcJXHk3psjDXwoSoQuxuvyXJa3hatiF2yYNQwQvVoDTM6qRGHpLguWTx",
  "key5": "5JYDF1tYFQnZNu7D6ZiSPwHcDVzy25qXjyEYpX8bU8Qdby3LPt4MEQ8MnGBQDm9a6y4mFK5Y7wi3eruzdYeQwbDd",
  "key6": "4XkkeUixFW2yWt9JjgVnsmzk1UQgo6KVuqhqqHpPzsnrE9jQLbruU8u5iyt8UhdrVeSYbRjW1MmT1UuRt8WGGuGk",
  "key7": "5A13XrvwuQPDDE7HCMNhNNHzVCTKPJ34hveZ128SCXDKCdtKFYNUgdzzTvj4gnoMYMndxMw8wAZ6TpPp3oq2ZgT1",
  "key8": "5JbyewHkQMynGUrvJud7boeeTBBgzx4jpbVuUbUe3YZMiioQWagy68dsW63TA9FdvbsgwuubnvpNAon5rAxKLZra",
  "key9": "5E4Q1KgsxkqFWPwBJGommWK6sLwLd5DXKK7v7S7DBmn9tYsmaeh5Qr1Y5DwPzHmodoTBckyYF5kchY3sPj5drM3r",
  "key10": "5hdHmM2ksoLh1MawNpEScog7RBt97cD2JkTQCmmUJEvAyG3BKFCi62yEhncycaS714TmDzn3XPg3khvHPKnY2gNG",
  "key11": "43Z9BDiSkaXzKzMLVaix4CuYZwjLHjWBZyX23RUsMhHcuhvDQqxuLpVGKaE4PAKuLzfhGnLCYaPZeXesvcNPsaMX",
  "key12": "4mTdf5R8NHyzY7YLc2sQii5b6VBWydztH6nGMJWVMaKx6Vv4pEqgmhFyNb9fwvrZjQEN8MJjGZqSuMDiJFnYsxMZ",
  "key13": "4LheMTu8gTtbgP6wUwMVyWwaGG3DqXrXT7pG51Bnq3H6obGqUYNp1ntZNjvycBHrsHxiUwN8KruUNLoxePABrJ2s",
  "key14": "2HzqEaSuhyedu4hqcBx78gE7fUDgrpWwLfpP2RRjyVgS1f1mWw9mzppR5dCW2YNMPu8wiH9YTpM5h47RTuGrRVTo",
  "key15": "BMPzvk2Shhd1B44PKNDcWfdj8XC9t27YXUB3SDepBgQc6uDfpgW1pNSwyTnb1msKbBvPYBLWFiQGaZVxMrsfEe7",
  "key16": "4BkDnovNuo7Wq7EpwD3iGXHbpVrHBKHk2V5Pu6wTq2ZbNRbBPkoJvbMyUsUMWYCKG9Cz26CwQbQECFtbYQpUrvN1",
  "key17": "57Ss2hMqKpu1ySWN1PYxHUwhu36jApPEqGzwzdGnf8UjA7z2X89SZ9F4JavEef6aZT5aAy9vMMvK1mLdZWAjgX6A",
  "key18": "5fC6TeXazKXEriQDu3DSoG8WxpRY5aPQgMVeF27XSaSUHXohnpUN4r7H3qSFWbjnZVeQjhUPLwthi79Nd3frMqTU",
  "key19": "4xwAogcz1LW3dAxeH1YtdL5hsBgMm1VwdndGhJqswtzzvqX6v1LcUvLUauXVMDHx7PmL4cdfjUnXm789USGPoTDt",
  "key20": "49c7vBkaoCBwUZreMDcnG8xZbj637iAg85Fau8c3XEMBXd7Yd9x5797V9rgys9eiP1KzeHVtGaWU6qWDKKs3fP55",
  "key21": "5fKip8BGhaBQJjr6XtcVuNhyMC5XbF3SRBkHjWJwD4ynb8c7yQXTuqGZ2EEx2pFMC64tUbUGPgk6XW1YEMM67bhN",
  "key22": "o6CiZa88SXQAqSB8YW73rjieDqmZhmC4NyaaddybrD9aKwVWvGjfTwaTrguTgd3JPAVadt1jJjUT3dU9mJbv9Hp",
  "key23": "3nx8BkWp8XD19Jwe8vwV5hUHash8wGFCxyWUexPkdTvnvavrFBmpqonbiuvrnGghs9neogva18Febxc41rCpDwGd",
  "key24": "2MgEmfKeRfKZGMC9vmSTzLzNUEBLUiGuASejepMa3HseVzaWMJVQVPJ6cTNPs4av3XHMQHEuwEcKTbj1Cmoxh8ov",
  "key25": "2AVpN35HTiLLHvrGVjszMamge2YLKyrSzjqDUpsehQfMkfZJWyKu4ZyQpR6D1XMJE2cG8BGJaRU6EWjWVC7UnnER",
  "key26": "1MThKVniTvTryx1xhTdf5tBRxfDU1t3JvsYx5y2b2Jqxkr5SeuZF1BuCCHW2F3W177sVy45gDHcNTqWeb51eZ9v",
  "key27": "5REUAR384LQ1utrYMZTcZkLD3hZgnLiAAeKSfjCPWSJb7cKU3QZAnv4Zq9ezP9WjvXiz4ov8t6ePgo1RBHBYA2BQ",
  "key28": "4wWxui3cRxeyn75D4UcW6d9Bgi2ydEDNHv6JXxrzLmarXkA2xiFWGyAXWYvMq18jfc7gG5wkWqq5eQkUKYSkEU5L"
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
