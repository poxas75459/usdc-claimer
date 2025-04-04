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
    "KmAjhD5whic99FNMED3cthLcuQSS6L3AA1Za5dqQUJFjFnTEA2tJzSdmjuSZWgZMok87fYmkRcM8sSZzFZ6Feu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xUJFuMA9TknEh7pkwkTVyGUABKVMDMncs8KNtnSQ3pDt3Mk26ZE7WmiGt3zDh3GffceqLzciVvFEgWd4HLCSVp9",
  "key1": "3KYLwxE2GgDzPeFDcW3MzuyPuTdid2UbXs2846pKPzoXB2wYews9LAWVgTXhLKSCtG1qHxMswjEe1GPQzovRhyEn",
  "key2": "NmcqUdjyYMyCqMP3JpD9t7WiVRSw9SvXiFo4u2ekJKoJUJk1YLh4fwL6zNGJ46wvU9dPahrpMCBPZZFAsuonyZs",
  "key3": "4zaCMJkXAizgqQ9pT7AidHXYFwD2AmLqko5LT76ybBRQGEANnXGgUerzW8Z8vUHgy6F2vpkygckZLqyr67WqHGAp",
  "key4": "uXYx5Zp2T8C9YvB4bcHAu6gB7jawaAtPoV6gXRnn5XegJjgLLkSMHdhq3343rjQYTNVpQoVTx2Hf6JYAVWiQy6k",
  "key5": "4BMdSG5QTeijMMKQzgGYvSpwz7StrCq4JFj8gg7Tm6kxRLf1RLtxWSvxpKFXTjgB2hEUqba1hXLarQzk9ouDYuyM",
  "key6": "3oB68ENKGo9GjXqrA4kLv3ibWK3WfgF2ysL9TTp4afhfoP4ZsswD1yP7LuPNFwAS5nhRgARWmxdmvhKSvsxkc56i",
  "key7": "3qCDnE4r3KFhbsHcUW2uYFqLKQXr34i6kVRkEp5nJBiXqFU9REb5SHQteRdVSGy2J7Xs9Uek8D7odTnuaQFjfew6",
  "key8": "4tigvkAUnrigV6umFe9QegEvmdkk1prAThXxSU9hjcFgcqkRt2pBvVaicj79rGqeQEZNhn4F18s4fwiuXAkW6R5L",
  "key9": "63vDBccnuwvXnHFEM4it3rjJUmuMKqe9xfYTvnYEMkfMGAtaSXkd7ErvawusEHZNy3AvbYThHou8fqFgqhbkFLbn",
  "key10": "2fzGveGogKXfBt9EkHyVKirgQN5VA2z5KDeWFgcx1LBXPrMeSwjE4YmEySjs7aEgUaUpTvDDVE2i7VFm4p7GBaC3",
  "key11": "5bSiRy4hz3KVUZUbn3K7qRyCbKgEP2GwzU712JVS4xaenVFohdSUpK4s3ffMeGuHUgbHRDcQcrF3pdxZzxKnD2y6",
  "key12": "3QTPKRysvFUGpoHE8bZP6tDPXHiB4t2Bsv7gH6RUcYG4DP8xAvYieoz2sMUe7VKpsmfLumZCXuhCQTpjymyFD7GR",
  "key13": "2cKm1sLAWXDSQcAtihkzKLz1LgVpQvmWcA7CrsU53wbQHvbmpC2LxbzDjoHYG9tAxwHt6m383PJSF2S4BmzefisL",
  "key14": "5YJxyUEZ9iLwr2HHzvGpQZ1Si8cksFDKDLcVGtRukjVedMhvM9guNHVatNC5oe2ZyfJgo8aotZUJ4uuZ98jGiCcV",
  "key15": "5LFD9hYakfJJpLjgazAjUy4xHLmxF6jhZ2LrgGQSyuNwv2sbAz1oqHbUXtuS7ArNC5CQojmso3p9TL1Du5LFDdCy",
  "key16": "AaPPg3iwtqB2RZTpUmozh5eHnWziveZTH32g4E1jmWBmtV8u8GynyHRoUU1YqfLQukGdCiJMJ5LW2oaNus6V49n",
  "key17": "5Ge8St334nSH6UXpJpk6ZiJjh6e9bWurjcn2waqKPc1Qm9UrFkMNEnSPcSg6yqPAPakeoJevUqRAN4H4tSTKyGgH",
  "key18": "3ehpXDWsMVWFujuaaUaLoHGpF1fsipjkF3DPPkZQE1gmsMZFzuTmrCVWK9UnQoUrxSVKv9SAWft7XZQskHxEPyg5",
  "key19": "ZjCsXtahW7ZWPptdFcpefVv8rhzsUbXPf83EdL7nCnQpoZS4BzGZgX3r4CYBd2R7mWfSJac8U9BBcwmq8DVSDBB",
  "key20": "R33faeESpUH25f6dfajyvStas5fnfUy1qDe3LbPyWpfKQEyfX49fnpG3p16FiS6r4NwhByfJJsoNhKRdpXC9pdZ",
  "key21": "4i2yN4p1hi63SMTytnjL1EwmwyY6zc56sggD4DBzVMEiXZsqYq4iqyxRDWGexaUrUX7zz5W2zd1ezU7aLHvNGKyR",
  "key22": "47HA4MsZEkwVWnTgkaecu7pRuBGrbgoTJYz4NLR46mrKskpoZ2o3djJ4iKPKMiXGozdhjP1PgjzWuftfMqpZH4ST",
  "key23": "2zLjwqJA9yjBesfSAtbpfH55KcciuCbLoBjY8reperxaS173hQHFJpVeJ3CjJC7At46RKhhSfedXET2VpRmt2rdN",
  "key24": "4ZXPHTjZp39gHhjbDbFcD5ooc1yu72yS7gVyz2QVQGGKkEJDtYuJJZZyvfYY5zsLBADCzZYPanQ1prfn93drc1xx",
  "key25": "4oneAL62eQje8u8oNH98N1VgRbGCmAZbPZj8LfBhKDTzJK2aLZp8CSCD84qVbzw6RzUkHwotip3a91Am5Uztjqjj",
  "key26": "24fjyPDTS7opBSZ1vEw7erjVEVKW9vsYciny7aGb7h8LsTtJ3np7FFpGZEMxspXaDn24JREaq5PrMpR46HWXi5aw",
  "key27": "25BYFBewHKYFuQ6CC84BRTkUgYELuD2n5LzY9ftqZ99qyEQB92fWzM2ZbPjUr8YA9w9yEVmiJb4Q7kYSwjFasCYo",
  "key28": "5tr6Q8oDGRgxHeWEohSm9fHQTLQR1hybZKxmQTfbY5pBjzzJ51oiu8UcKHgBVdYjPpZfu36NBGr9Ri9qayVKm6Pe",
  "key29": "3UimtKuCAHzUDeKncLhNciKEfB9jQwF5mE9uY39JSwhRDN1Zp8TVa9fhUQnXLRwhABFmyxiZEpBhykx7LyeNXQSf",
  "key30": "4KEnRvuUiNUsCqc8cSHa3WcRkrvmL42SAYAu7X3gyhejKMoQoxGqMN1DwjgR42iGJeafNMfRCgUbekH2jbRMHyUb",
  "key31": "1JYNiKpD38qdEQ3JBikJVGx3EYTHNhknLQrWzoXMChMdPyopyWNAbReV47TN7q3yUVjKe1n8f5eFansq1b38WC8",
  "key32": "4Cc9jQrBkQd6DQBoVyQQGG53e8yusyfpYWbvGKwS8dgBwZfr5i1e55dVUWGJTvzBswCdACRSUHhRSZ2yiiJLgobE",
  "key33": "4wyCvn6uYP6KUQYE4jEBHtEXZhhDV2gN3bSUmQhAw5SjwFzAmAJGn5VanMLAQ8cpnsTrCFLi65tWs6b6Vd3FZDpc",
  "key34": "3TUUb5eL3ngVYUw925RwfYgzBBpdXT373sxcaKq8b8GjvZyhvmwAGm3MXUazHPggMKcUtkL2nbi1c7AuuYvGrVne",
  "key35": "3Cr978CAryYkoxBvV3amm3VYhcDK5Q9m31bnEnm7miRPnm2myJUH4Uu3KN4kycXkwsL8p7ig6JUc7s45QR1jQ1HX",
  "key36": "36L7tRXSKpmSJg9Evf8cQEEbummctskSVAsAcLQ8cVp2mSkAwQ8n16tufm8WpdycWBxY1rrtTHD38wx2WTj8HujK",
  "key37": "3q4PA8yuFA38bMuSkNDUPUaFhitEJQevsv7NtJqrnuxmtxQf7ZpgUiwDMKVZmAAuQEhU1z4avBpACxddRv4shR82",
  "key38": "5WPoGnfsRh23qEneejYp9eyTPkcq7YPAGcq5ue5piuxcqH1r7wzatZpLpc4fy5EECCnJS5Xdhug74PxmzoiGB3me",
  "key39": "FaxViQT4szFirHm54xSZR99y6Cbt2m7CKU2QnQu6pdrcQ3KMuniTP8oFJHRJfDd2UXyTcQTwVDWK2j1hLagm5Sz",
  "key40": "5iF31rFpuvEZ5zZwnzNqgJme3V7GSYTfGHvqp2L77zsK4fsvxpH3Fu1YCXrUjzj7tVgNbY53yvBCfDAkNGCgUquA",
  "key41": "3KWHDiPMmF1XpNcdgNd57CX2CTSyEYVTBQ9JumesrY4CxXqwAvNU8JEkJyXLjz3wHmbK5pXr3emCMFDjdV7z6UaJ",
  "key42": "5gDAauT7ysixHUFpyLzUuBQEDVQetNBtwkn3adPbzExMo8dw47XHRCR9A6J6brvZL3xpqUfd7HZ24RogXBP16co9",
  "key43": "Low3dCFxqAd3XDqJB8WoPvoiep9co4w9qWW2sFU2yzGS6WmkSpV566Mosvs9qKVssQ59oU5U87fXpt9ZqZfAf7e",
  "key44": "1Rno53bLYs6tk1aGKqJv2D5LV2s66epgkqdrxwUsKjA7rE3vsxZmjHo1pCKVAT8oxNEyhjQvtDUNwGABeFi4bqE",
  "key45": "2caf1jS5xgbkvXbd7jFikrSGMKhe34ccdHfDiBvasZp81LUAZ88wZQmPEs1rTf4Uo1FReDm41ayG9KpVDNPRRNrU",
  "key46": "5mWGmnxK6S5JTDDq4uVS78jjo7ZzEY7shnifXGYyysd2XYKh5SjT72DMQmgXsKkxToXaHrybk6ybNPqyvXQW83TE",
  "key47": "XQsNZ3opDnVvxTgzGogZZap6tWChx1NkZcEZnPbZ4oorm8ETFgqSHJxkyNZexeTVRcSZt2muBCpZJDqKRaA5F1q",
  "key48": "2gpLjDHxRiVkz6iaeVrA8N8hmJpas3ing5uwACNgUfVtkbbbkRnvX4xD8Y5ZHwMU9x7wSXpRu8LLTzMvkRVsecMz"
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
