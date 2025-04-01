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
    "5nS6z9P26wRojYd2Voo8emts4tQcRCwtigFn5fbv5DBVhhcvP5cH7MD59p9W7g3BCNsnePVHRe5d4YpBTQTT2wQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nEmSVZivTwFhzQYGS56rzSkqoqvLAzGp2jXUtJyDEqyVak5tcsFr5tzdbeq7tLnbaBJXRcV6Lr2fWMHneV9ePAN",
  "key1": "5Pf6LrRUZQppr2JjU1og17sBEZ5gPf8KXbCXxmcJF82gwQRGEwtomDcisVQtkqGknzncPtLCBex2hCrB27RSZKvW",
  "key2": "4zUNc4VzFmM3LxaUDtnFD2dR4oUQ3R1VarojbazQmTPgHPXQ9cdPVG4kym9xkUKDeWmrusa3z7bNS6bxghrHsy79",
  "key3": "2X8dRsaZPBFkuh2WrhCgYT5jgBJPD7ivuEBgHwfYdUbQG4YqeCb5MJnEUtbk82ErJx5Tab7hGGvyxFEYENp4Khup",
  "key4": "2n2w3ezL6LBMegGh1vNAMhFv3qTJaS95aso89Mg1SX96focoQJEST2aWfeoAf7WDWurqP3PGga9RkW5eRbWAB5V4",
  "key5": "3GtdJRCqrQcpVqj7qvtMR9Z5SMzzzHLw74kNRDfDr4uCrxGSAue8qayqCXVPZhWVV6TKvP9RajZNDGjsq4vgUnV7",
  "key6": "5Lk1b91dC9Mmt222E9Yx5FTSPq36NnGbebC2LsdjgmYq9NhNRNoKXxWDEZMjbfgvk5az9sJeCuTYBCgn8kxc7ocA",
  "key7": "5XSUzCpZnj2HTVYcX1MBL484vbawVcE7HdTsBNdUBxBZH26EMqNigdrTxooJjAd8YTn2ehUrUwVZjJqNymE1p9aK",
  "key8": "5X35X9S5wqgsWsxHVfgDdzDFFsZEdFNmWTmeU5ybw3LAzjyCpgYoH1CdAvMUzDSWoFZPPSBJWHW6E7mNS3gMNRnC",
  "key9": "7soRVJyfJmbuvnfeLUnZ6s7Q9vpd1scf6fRF9EqTefNefaDLJySQdEXdiLmyhjUiTj7nEVMMFqgGwLFWsoHyhDT",
  "key10": "3fsUGTu7A5qr2njyRtxXfZEKqj54zcHxXji1Rwzr5EEn5jkTHXuLBYAKy5KcY88c1S6cGE325W4PrVtLHmerRAGz",
  "key11": "48hMVDcyHEAMm4YS37NqLEUxDBnfCpCT4ieDkZdTWQNKEFUncGNhTK1fQGxsrr3o8h9dEx2MQXkthF9c8tg4co8D",
  "key12": "2q44hE7cCLVJUAFFgukYrQcKwp3MnpRWagajdCQJuXFyUZ8mCsFQzjbcm5fMohxBcvUdqCGyXeb23sZBK2oxxkWp",
  "key13": "H8AgJ19P9BpSt4V2J8JvkBx26rXh2ARoL2qnt923AVudb333qazPjS4TiTJPTdjxVtUJmnNKYQT3wJWZ5rk8CPR",
  "key14": "3xgULCG5h7mRPBAZcUvnZR7MdW84vYR7ALQ2XwiZqdqmZCG9vRuykYNeqDrjSh6MNf4cqMPQGWuEU7NUS4hZKfjx",
  "key15": "4YHVKNPTE4NqGW8DHwruuvR9V7bA76eycsWm9KqPtJ313ouauRenUB8mQHfaBTWCQiDW6xpsToVnS8eekcMeDkfT",
  "key16": "4D3fhVMMyThe85PReuapihehvPp6VecgWxStSSAev74K492RqUZJkCqtcHAQu3P16qKeobbtt2pLminLPnAH6bCC",
  "key17": "439XtLKuuM6q84SiQ1af5DRNc75gQJJ5FRSxohKqzDSRSmUTFGTiSAXkvWTuSjnqgwrwwVioMjBBrxup4wtr4s8z",
  "key18": "5Uyf9bYNjCoGCBqH3o5ERazbYMpBeMd5WN7babBrmttnw4czJt1Lu4BZ9ACJdecaF9ZBLiSjyWEzRZVBzfbxVeHZ",
  "key19": "vDfxmo9sT6cV4kVjZpKvhrjbKaoddNQ5hyRp552GjfW3U9Mub5reaS5x6MqGQeFzb2vpenH94DRvjD8Hh29nxfq",
  "key20": "3KLweQpShBr8gfVWp4WfKYjp4oMrkhigLavD4deZrVPyGdi5B5ZJs3aFHSMAKLAu5dLJoM1vdrC8wdsksTvDBCRA",
  "key21": "2XKTq2recLv3Z8kV6HmfgehQZGKNo8MaT2ubPNBdtoAuZGawHKD7pmcQfKBww8tZKnAwyb7NRZsoRSDpf27XXPyU",
  "key22": "3ebAENF8oGhqTzpWHAzX7Di9QHbK4Tg4DJEWGqRz5EUkVuiYpBz9TdfTCNcrRxZfijGTjuvutdpCkQkSeSAhEn6q",
  "key23": "5onQDjwqDF2ofdXB2nkxAcL4qh6vFeA9RRFM6CTdFEdKfbovCk8ifCqKLdHUkEPTpve6fQRZ4hWB78cnrAY6k8cB",
  "key24": "2XoosUbxN3s7ji4stKZ1gcbgeCEy5YAGFgVHmWsz4PcUarTnWLQ8dL4sTnNbQGTzRLwsduK7MbjgSLnrNPhg5vHV",
  "key25": "2bkLPaveUxQMj2ATsWvSEZwimP8h7jsEhnGxCv7LkchjmDeiKmQLtwjmQp47Mb8jfQ7JuNkQQgEnQ5KZmnNjbX31",
  "key26": "2HASaFKqtZdvW3bFWExyWA76qncFCymaVyiuyawavum9Pm8hVn1GoZ3BxGKpmpEgLey3VAjabhH3Ng12SeayU9eY",
  "key27": "4e2rVQFaSQLLQfLEzH57UKMu9acekDKJHBaVSxyCe9yfvW4d6T6gSD7J8UTdTY7nqx2Zca3jA66RGbAu3jMrEh12",
  "key28": "5KXZXid3myyHFtfhsx5nhrteh5nSiumFukJvZHYfUtkji547CpGewQvSCbcjwWiozebmLC3sKu1GKLKvA5YjTDy4",
  "key29": "26b3RkCaHbuARMvt4DW7ces5xpjVfR9pba8ph5ZkoKiGxcTK8tzG4ThNw4d2FRe9vmmVuRdpGhKtiFyeqcV2hvqX",
  "key30": "q6yi3gLPhzjLrCgcXA8rPQkzoEnuDsaXiSXX47j1ruuaHDa9uzcmjKG1wraezMEvfFX4v9GZf4L6thBJf9iW9xY",
  "key31": "4gfsb6WkTfBe5HCXcfhA9mNymGmUCcEip6Sk1dMo9AQQzb9ggVwWzTAcuE1LwkLtzwbCSbJ4jiAty27uvEzjjNDR",
  "key32": "Vc6RFubkosx3WbLyz9m8vc6B4qFYgYnEQu64pTf6axdxoMYt3uofKWEU9V3wUcVW9XVSNKHGtkx3TE9FSNKTdYh",
  "key33": "4NFhuPJcVobhsh1HQ2RFKG4tUrbTEivfCxzcJqhnAMr5TCqfz8B9gHoeSmY5nuAgQ1Mra6xr9EruPwonE7NmiMxN",
  "key34": "2J1ThkreJhGhs68JeAJM3y87AzmKcvHo4grvuHFDVKDMfgz4J6D7kVWZXf7w5RhS2gbnFF5tcR5yHnVNEBzGR91Q",
  "key35": "2nXnVfuCHDdtDUMQAcQNF82YxwmEa4BXo312VxrGbEmPFuBDHTeqaYZ8JGS1MQ9MByH8wwhU7mH5h86xwQmpTjDP",
  "key36": "2aK3fwFNuwUaJfVSiocBdGC5Cbcvbwu6Ly9qRdLiZ3jaVsjQVwYMtPhyYMBKa3jFE5j6rKcNX4AdpqXYiL5bMfZr",
  "key37": "2UCy6goUzy9HyPTUkxDejyfxxWPvbzFeJ1ShU8gicT8xEzSVhU5EpsmscY8G1HBo6ZEmvvcQBYcW6eLL9fr6sj22",
  "key38": "4NHtmCuYtLJoBywqJXSNTZ56BkKc5BRZ31WT9hSHg5gUVPuE6bZCDT5TFz9wGs4tLqgvNT2w2fHiGhi43gsTpWnU",
  "key39": "54942qMc2GE68hXxF2c7p4sTZcyHikN9a6mGbJZjAD8gXJKdrmXBpdS1FaR8cAWSjhDXowmJ6gDtHHtGtCn8u27f",
  "key40": "2Ri8uoApDRFw8RyJL4V2saD7N9aat9scKmoGKykdBagPYCZE8yVydgGi3uyUVAN8ezdxF1FcAtrQNChGm9dxLf7K",
  "key41": "5iPHsrq6uCbwyD36Qn7iH5BiWitB5RBDxDpGcvQGZ9msF5JqvLFJvtMrgXmGyCpUzWh81L1du9M6anyS2c55K4J3",
  "key42": "nmfqTyHPkJ4uDpefiXRA6NnZZxy3ZHNsWx1eRtf3Wg1kc386n5CxVPHMw2CX2UKYPAdMGenE2smjeAJB38CkAfK",
  "key43": "62MceB9EeAjAfg6kcFZz5W1yRZPWD9b66vdc1iETS6JbByeyuTHhrx26QBG9Ki92y5Cc9inW793Jip9UCmmWqXtv",
  "key44": "4u8Pt6XVNwDDMiyYLpagPKnRSP3ne8BhVNpPyX9k246Z9gHDvLeHvbJPQwCjMvXGk62QGW9aABAxeo1SzxmekFyq",
  "key45": "3gs9w4v9vQxJiL2anZjcMjEq6GFS9jXqFNLQyM95VKuPTRts118mcsEsshx4qNy4hwAwo5j8dXuDLVtbPV3JTprv",
  "key46": "xA7HuKkWouw9HmTmNC7yUKUTSsWAr6DBFPEHxPkrcx9kajW8womHzCJm9oaJ6TXiRKBWaSAYwGuPmyytHtGNLEX"
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
