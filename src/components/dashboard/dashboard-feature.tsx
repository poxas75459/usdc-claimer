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
    "2iwjJuw7T5htGWw6acYCC1N3nXsy5PFpR5GiEDxBJD6TusT5RXfCxCyFDGP6Z7JmLfLRBN4UPXeWxWbXcjUpJdPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mnbkR81SXNmBGwtChcHLGVsXZe2sg6LnfW4TjE6wauWtta627GtgiyeEYTDkqUDEJ47YNvbLnTYpgWzuCdceLJ6",
  "key1": "2N9gLSY8HtGG2HmKW5UdQiDQYx3UnGEKW2oeABUsZrN9qc3bc1TxQ3uqu8AVo1zCEWMZWiroTYqTxvDhsKw7gjFn",
  "key2": "3YZ4vLRn9kr7jGCo6n28aqmgYzwWeHivz9qkjVYFpmkN6wa55LnEsarinGwHEw6VbUTAhV7Ah4p8iBQDMujz6iLR",
  "key3": "5ephHKEnXc7oQnge46iswFjUZX5zokYb7vKbJDDJ1DqaZx8pCWmSg5C6mS54ixeCrr9DsUZE3ZmmH1He7J7cQU36",
  "key4": "3UVuArnraCCFkqKqQ5G6TsW5Kf8we6UPaeKpjdjuwRqzrykUy4gbzzndjiBjtVEerzJHz7JezD7Ev8BAHW6xJQzV",
  "key5": "B6uV2p5vX2acNdWP9Lb8mPXnNkRQMRkESQj5GZrvXcf2vNwBXzpRNAWva9qYEWtVngrhU1H2ScxoMhR7f2CRsFZ",
  "key6": "5m6T7iTZ9W4jbT3TCBu8rpQzeakV8bQm8Ld2Sv4GGtb4L4cWbhp2YzkuvuqQkoN4irxa2f2VBZiBnun1f1BQYmoJ",
  "key7": "2jS6fCsvs5fk8ekti4XQxsq5KBgY4XPkm6QWog9GQZKVL5SaGBFrJmZAHQAYSpwwp85SiVsmcbroHKygJant2rWN",
  "key8": "5kyNHLT5U7rfN9YsdTigRjnsjh1gFe3jaGFLGBvAmFS9d8zWkqf3UBzkdJQyroBuu7RYiQFNGH968iztoc2JYS12",
  "key9": "5JdWd6cwY2ahN1wj75F8tyxyG61B3yhqCD2m9rHncEmADCFKjhwnTyjZFP8b7fHKMZxMurTzNYGFwqABgcnoFTxS",
  "key10": "4qpgVbgrkQuaHoNnCHNBtyUhXX2FWFWTgqjEL9Kpk9kuSJ7rVujosKQKXTx3gtvZP75ftYmLMW19zQYtKQisxV1b",
  "key11": "52kfTd2NKAnE43rkTStxbhyEB4AGHiTTiMtrRa4RypswHjejnFotavhZpKaMig8tJ4ZbrEhjLkmkLbTcRsvXaT2B",
  "key12": "5oaH831yv3sGXb1emrwvr3BHEVkLMuwpgfSETczw34oVAQcFNegZgvRULMJC4nRWtsMzm9ZU46KoufhAQspsRgQk",
  "key13": "3aNZapscqDPoCLoiP1E2c6NyWnKdKgihcJGXK5FLudfn4QfF6LPtm57j8Ed8aNsjfVwZT1u2dxeVS1mzXrzyzoMq",
  "key14": "4VizXV1BzayLQH4m197fJTntCBJ5Ls8sKKoMyHkbpwZB8vLQb5CNon15M8gimD7q2PjzHJGGAfN6Lsbmiu3veRwE",
  "key15": "3SJatQ36ZeYzrTUp8mwaohP3r1qjnXr6YXvsz3kHwKPPdCtuhDKcun1WLkkPPLESk7GaK9yndbK2AyT5dEkh7PFt",
  "key16": "K3ftULngMX7LDyD5vW25DN3riyEYH8kQnnH9Ffu7YDN5tGJAm323reucziZawEbewLGarYyLVcrQcCa8gv5vtFy",
  "key17": "5fjQ44ck5oBqiHyPpgubtL1Wic7WKb2EB6p2BXzFXSeCtZCVjQJ5RfKSBEkuhmAhDTfCyFSdoVFuwNcw5eo3ok9p",
  "key18": "hKXeihiVG7TUXVKn8v2JKwovSjDfTUyXhGyhWTLG5K8iCbvpJnKW2kSw5bpwdC9cgg5fqboSgajFLUb9umrzXFu",
  "key19": "4MWogEBUxsybXmRw32ZoQkYjfGQ4EXaoNKqdRrAXTHHveHojchSevRMb4Qhau4fkEnTJ8urVijemcQ1T7wZot8z1",
  "key20": "aLTTY3rbAVs3EmeZWQezVE4c2pbDKmND3iFCd1iEvAWfZasNEejyciqYPkj45rVanPP8geuqB8fPxrzvxtLoG77",
  "key21": "5XBzwiRKVNoUpHf4spwceQVxsHvhsdaihJp16cchstE8W6Gq3diJhqsHn59zX1QwfSE8a2nwDRePNsxh6j9oXEFo",
  "key22": "TQ2VAV8unV2dQNZvWUsaho4YSRchodpWBFtJTC4dLKnuCL5cuYNt9HFsR6EazzfcLfQ1z66MJbkAuozQs3MmzaG",
  "key23": "2nP4NNQ2tGAvJkLXq74PeET5SzeQVvbxt4UoELenNQFV1Br8jY3NtCkBCru3dJapScWRoP25w443xDxs5iPB97hi",
  "key24": "3koNvrbeQvN3VE6Xkp8rZJGMxBKpuAAFKru8h8Jkw1z4abibx3B1yqzThQzKTBi1yE6DFAe9VU3Eyni2mcCgMyGU",
  "key25": "4xGAz937At5Ttw6Ye8F2gjgWouQBRZbKXtCrAd8PmTdipQMYHpNAThpCYZD4hTJcf65BXa7tgpFFMDx75rTfqF1w",
  "key26": "aKGAK33SW49AfiwNkgXyNtm3zgxbXtc63KiGdX5DJwzfg6vSyd5oYTSh2Uy2vQPyP6LetsYkNGa3MqW8Lk3xFQp",
  "key27": "47znPzPHfYvXWDD8SxZZYvU3ERs4hEgv4urEi1HitRhAGXVTug5DHqsGVEr6PadvAC4TsBwcmJEAga8Wb1W7bKJe",
  "key28": "x97tLwbjRVxpTZ7XiGZJvheM3NFdtCjGFxwVa6H5PjLfm3JkoqmR1s5tQWiatVZV1TiDtjZMQME4uN8F8BX1oey",
  "key29": "2SLvBDwgJ7Pry2CbP7EHToPQuENJhBjtzmy6gTPMHxiUJY2G53nLpsN2PRRtxSQtMyacTdVUzJBMx65KNsWPpxSa",
  "key30": "3DS1P6UzEDE1kLZims5mvgqjSYYAKiVxhnAXuzGNDQDXT8LfRpTuUxTdzFHxkWtWotmNkeLwN86xAB5egwpjZ15X",
  "key31": "2YxESnndhQ5XsXraYWD1oFwyxC3KcuydsUdVZVrsBUBF1YUWD7D1iAJZJ83ncqfHd34N7KJjMMAF9yoX2DTt9ekS",
  "key32": "N9tTYob9odgSGYdoFhF126cdqqZN7hsCdSLh3B83BYygGMhKRxpb9puHC3QmSxxgJEVkKYBrqMJY9gBvEb31wyu",
  "key33": "5WrhnJGWXCDWvDZXNxcvQfqDCxMkuMCSXD1F9FDVq5T1d7wutGGqT4wfxAyvXavw8T6BaFu4CLEfLcxUP34zTg9i"
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
