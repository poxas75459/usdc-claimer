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
    "3FdAQBofKhubNd88CBYcEKVWMe1wFgGgUgaSj56i4aEmAxjQ9eNCB5vYby5AJEcWuQoDkJC9mD7KkvduS6tuSaj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGsUvHb1kin2z7GKJiF5hTcsPNvSEdnFvuYyfDJFHgP634CfAz3RPZbzzwr8KGtpSSM9RWzjX3UjQKSmbjiLXE4",
  "key1": "4TMqmrDz7TxxGvEDMZqXQdxtXUrUDzqkuCNw8eue32CKSRpQcDeXr6caJGx9Hp7RbTTja3s44U3zihMeo5a6QZRd",
  "key2": "3JkcCoBjM6krxMBn2qpovVyRcQ59Y82stePq4VETXxKbYbPRbSVFE3WZyTPfrdUL2vpS2gZEYLmcPbP9XfatmwcL",
  "key3": "58B49wzQdsNJb51jAAN8ARepvR4YeyzLfoeWquCJYhKPtgTLE24EtzgrCnHbQcgfrMEiZJYratCJdFfF3PTVny7B",
  "key4": "5mE9MtM1iB5jHv5Q5jZevLP1A6GFTSY7YpBozdTmZEA1wiPRoQxHxRfFnEWby4vyqHPNzWZcYa5RczQCN7hMcRVA",
  "key5": "37qoUqUehA18Ppk6Fkqnp7NzzLce1g3MG2mGY3rUDLnohUqJabdZdVHihjLg9Pt2AgzaJDNjsVSApd8m5jaUaZGK",
  "key6": "3Ub8AsVohfxvzh7PVsVZM1uuhgMS2sWiEszh6vZ7gviMVKjgiTjrbRPXgzBsZTbgN8YvjhxFoo1pxXStpgwLXZuT",
  "key7": "4bb85fNwmd6NuYR8eCtZcnz2JNJzw4MDy5kBX5hvvzktnV6zuY9NUzijydmsL4orPWAqDfmFv9CVZrzjwttthfDG",
  "key8": "Wnnu3JsA39xjZSTsjnkabaUX6okDsKePFD7TWwXb3XUfdw5YVzwn5DB89C5wRiZtJqKPmLqKud7XPcMDkdjykhJ",
  "key9": "48YPKX5iScZ76ApiCtq8uyvgTn6yamr7uweU1USNB3pkPZRQbRKaB7xDtYFahZdTvMuAQcPdEHyH3H4jJ4M2ioco",
  "key10": "64jcsjUsfnqw6aoX4WvFRmFtKkLVqRFT6mBor321fbqfhAPZiKKuUnTcAMuCcWrSMbSBAb6HGDLZ2oSWWENHoT4n",
  "key11": "3aDqvEvVwADLVmuVUcWBtY9ghDe4PiSrACudB6zWBUoAbkSA4q6mGgY9DMAAeGPfma1ZRwJb7dZBnUaqZwoteh9x",
  "key12": "3bThmsaaw3sp35EqsbGHTfVpjd4G4YaAUm8jJJpW3hoaRS9LnnFp54eNv1s8aM9fHLPyPj9CwTwbw2SGgkKKBcMr",
  "key13": "4pc3EgKyURqLQNNHZCir6pnEJGqARwxDFHZrE4AAUR2fkR2PmQ8m3dPMvwtvNrhNaUN6YYAJvRTfJspXU6dktgw1",
  "key14": "2g3bGnBPPmPMyjnUkhP5ifAkN5vVYWTUX9MAKLP27HojCuFq2zaBH7yeTWDKM4crueafiU8KFxavs6dpwAL3r4k3",
  "key15": "3XPyxpsJVTpCLakvoSzE46UwaDVwVr2YKw9a5K9fy2fabNtfz6R42ydc9KRyHAdbudv8SAZCCStvLkywidwDVSx5",
  "key16": "2D7WxpaE9vBt6R5JA8JeHDpzAB6LA9peKL7rhXxMLCYfVZ7P5eRAvRHarWoN58GQ9QbyUnUEXmBjwnHnFFuTBfzn",
  "key17": "3yTTGDDYV7DsAPLPq3cWBc1YSAwa3T59H2zneZ1JcTixFn7u2kpJkcKTDtk4p3VdWBL9TCFdjYSrWGE7CMjYNx8D",
  "key18": "d9GNVxm3Yn8C8VPeJHsXVhQH5xSKJseWj89pCnDo4RS2WyCNxxAmfJjNFusPqNCLrHgM3MHA3yNmKMmrMdq4TYG",
  "key19": "44YxwHunLScPjZDMP3utnJhXkSyLp9VUE8RjXuiyvLGc9iJuwW6hPVoyY8Q8Y9UKTPfuzss4RTWr7tkecAMndRfF",
  "key20": "2kWEpiWcDzoB1PVF57zxQ1udX92y8J9S8TgE5Pd1rGAJnQsUN5Kk8B39mRVpUDUj7o45eP4iFf3VJmHP8Yird6pR",
  "key21": "3SoAd1N8KKpr8CqmZNh66psoBXF7oeACLzLnPej1tUQkdg5m5ernvVKKLwRaafoJcwbgyib84G1mqDg97M1jKaoX",
  "key22": "43i4NVBrLBmS1xfSgVZGYmgePgfhpi17BHWKwFHiPHMkn2ZPegfz1JL6a35dMbNpSCZkrWtGsMxstT42oie26C5U",
  "key23": "3ZfTL93i1GifCgYWZhjhzg8w6bVEYZpi2BDyWSPtqttduC3WiSsXq9HWXAPmQ9Xh5RFwqQf3sjBt3SXSrw5Pi4HH",
  "key24": "2JJLRwEM7FNHWzcEJe2KL6gsxa5ieWSrznaRvTjNRJf9QZV9mayQdTWTVhDrsCktD4CPi9HjotMgjqpjg8YwqHWV",
  "key25": "5ZLkTAgPWgLLKk2AFs8caWhEUumXzt9o6ijjMpxAXkGWYggF2rUoDapTc7xAMaUrAczYs59WzYh9A4p7hVEaGY39",
  "key26": "5nGdKhv4UfzsYBj19yXuCTCmSQMi36mGjrb4eSr6BJceq72q3dXwMkK1MKQ4KVBYmV5GVGo4HPm9oXt7W3e9wCps",
  "key27": "2XGrJwUNAMzt3Pjcd8EzkQrawMfWwEpdt84QUfJYFioUL4ugkQ5ui1hfgC2cKRvDhBdQvJHJiFwSboJHwXKU1sJ8",
  "key28": "4vM1Msmv45xMyHbRJMv6C97M1aKfyQHJ5yN14fo57i89PzHMQgbZRNjyDksJNG4v9vrhMZgJs9mjTUYnSGA7PGE4",
  "key29": "2zRTkaXmqw6PtHDq4ySRfZBFtei2QMTqoFse4xwaAJiSaepXoZ51CCM8L5WzW595bVBs5qoadrr5DSgstbEfmNLP",
  "key30": "9zk3RfaMJ7qtrzpVJE9NT8iyuRgVtssTbyNmVb219x4AoH47ts3R3G3FscXh48T5Kqk8Gg6i7QuhZBqsGeDK1og",
  "key31": "22pnNibXf8LAQAZ8ooK7WodKt9Ez4Ufdo1qoGBr7nRQuPsHqqd71btEKtRjp78WCh24gbqs7rVJkhqg86Z7wmhd6",
  "key32": "5QQ39JKFEpyHj4qJgaEEZfUAqGf7TeFo7AHFwuyvqo9Rz6YSbFfWWhMNRragaQMC1D7nkBpdV1ncJx58S8ykEv9B",
  "key33": "N3g9pEHXo8b4CUErsRTZmdmTukZAwhjSQaXsiexrmpH41gScC8bnS82ubaSHm35ztm8Ei9X6tBQzqWx74fJoWKj",
  "key34": "29Zkeb91uDwberEU7HRFHWArSdSh1vJKWxmLzAPjSjmgnFmu8AmqDAXa21L8VTVhsw5Nqyq1ZKXmUBWtTg93iD6V",
  "key35": "2kaFWntcMYT8BLi5RLqiBaHKdat7gfpEBHUyfnsKr8WyNs4syjrMusB8t7bjnjiXQ9fgbVvgMfEaF81HZiedf7kX"
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
