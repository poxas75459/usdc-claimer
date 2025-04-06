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
    "5auwdhAAtbZwQ5wr5zAaUABo7ys2Uf5PTJXqxdA6e5TM6jPZcnJMHdhdFVgfoxZM37w8Dae12T9hPSNLufmw6Rmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tPTfd7Fcy3Vs9hSs67W8PjNXVsZ9UGJnPhUGXTPKWCShK2yefKGtwowoNYZri9VZQSwk8WYUadP7Vt7LgAmKyaa",
  "key1": "4nqABWfN2NWEcjmfwAAKrRXKcsh3CqztoajdD1vhVj3yottfE4EL2shmNfjLTeQeqwzRcoxbuEA9XfTXJGGfSipz",
  "key2": "67g1xmhhtWHd937faXdmJzMxUszdgH88MRR2a5znYU2W5Z7MSqLzPr2YMki4d4TCMyGapt5KNjcBjJw7vXs4goS4",
  "key3": "35phPUFsSfgHD89NheyUWBgAiFi2Ujta9QBNomF1BT9ro255uRB7m5oZa4Z4WhJKg4mATG6bajgkUeJmLPMVPC6A",
  "key4": "B63benCN6nq5BriLSqFES3gJKvW8PoirkAa79wiTHsiRjok4mssgcW8mgYZPs1X5sEGCsw1SA6RxfYNnPJQxhh6",
  "key5": "3qtBRvyoTM2C3JfC3Pmn1GR3BqbC8SsPgb4MWxcxpZN7kUh8QqtNSqwUQV6UNKorFk6GikWcR7tEY1BkxNdzdXKc",
  "key6": "4mzTFdbUTmvZTa5AYX19kiwEEs9Trmvn1Ym8SDaFQocCYdbvxnFTcPa6jYbYaRYqxeYrTFR38NaWRfSrydVo2Ahn",
  "key7": "3xXctKNoCMAAKMBMwYfweGWik2yx6BhS2Mfe2bSJmAD924tNqFnpnfhKXdnuXg3qtqUdjpKWK1abCGC7ejg96oEV",
  "key8": "3u461usJTqJx136783SJTb1DWg3e5kQQ2AnV2rQ1QXYKkQgqXg9U2T3uqMuBe74sMMGuH2BgGze1N7jAKh22BCtw",
  "key9": "3zrP2q9YJioF6rBWA5PC4MTjcMEVfeXj2F3KCRKjKoucu7cTrwEa9mPsPbKa9efmFKwbRnpND1jWJdtrdSsDadMh",
  "key10": "2SR8wRJafK6vbAXA6knrM5mWRcPG7usT3BKk155wRU2LfGpoS5TFa4Wk6z5Z6RsqHM8pws92yqrkQw4VacAhpceK",
  "key11": "31t9cKoWzVCDLwnzUJTDwBTyRc4jmAU7asijZzuMVfYfrTt5V3QKG1DGoA85Fcit3JqFct5rZMJKmHuagmLYPdWB",
  "key12": "2NM5T3g62NHadrMvN27GTSNErXz3JYEXQwtxRTjkxtZLAzEDcaZezT17Hj59bz4HP1NYU9BbpRFkXRgg1FtKoFfv",
  "key13": "2ycXK9dk7992s2oK2bdcQ5Drt6FQFpNpZgd9mWsMv2qrcgqeho52fhnxNa36eJWjnQABQHBxN5p35Zp11r5nbDXS",
  "key14": "GiqRkiiYoeenJJHPQBvaJCf5FJxQGwFVtJMH2TAHdfGpVb5Sg4ES68MUUFp5BzdnVARz7MRbHGwK79c6bE7dohQ",
  "key15": "4UnmibMu3CQ7PCkVxuWzX2urLE6E87VrKGaaF9LdpZupyH5eZSxcMd8ikMMA1Zba1WjdA4tAXD5SbXXqaoDj7cTC",
  "key16": "58j3KQK3DnoH7TW64T8yu629WfYeBMGcBexzK3x8QHHPDmZ85Krbxzh22gyUZAepf3RvEJRcKTcD4ynPz74M2wpW",
  "key17": "RkmtLBYywokYFdQvPDF4eyqF4rardoUjSg9VDkJBfYBE1p1WHa6BHY7Po1EXgnFTaMUC1NsTq7o1EGY432WTsi7",
  "key18": "jbUzjBtDqjhW86VRAVsL8k36XSnj4TypTSFtk1yC7w59WseyXeQTgvJ6eipZvppi9ciXr95kcmwKs2JBgX3AApu",
  "key19": "4Dm6dUJ6BYNhTmrmakN5QQCjHxpY93kT8ZbnpiaHBhbij1sY7H1ojcyE3TUxxJs9hU6moYc9AhhnRdG56hG7zEsN",
  "key20": "3Mnd66ARmM9mB1tTTCXwRx2QBWxmRSTadZDWKAH379pHPebBfLBe8G7tiG2NZ8pq11cM9WtQvEHr4XPpdVXka34q",
  "key21": "4CuSmiDGhAuy47RpEgPZ67Fstvuu5Ykc4bGkRCcVDtAtuous9ijgw5maZYzNvnANvg2wXQUSYW7E69Wa9G8ezm8L",
  "key22": "2PL3fUmU98CGrjUcky427JCbWyhfEDDRdVvgYx4KJsqefWNta93QSy6Mnzdown4KByvwjcAmS3kb4GSSFK7ynnG5",
  "key23": "3tMicPvE5E4fLAZPkjddwDGhZKZsCDAfgq6BH8CYVzbZt7jZ8Cnnjm149Ew2s7PiHaLbRxK4q43rCnZuUQaXrVEE",
  "key24": "CtzEXNoqfPQ24zBigMgNdTftMoQcN37WuN6xZqtjPicfJQtevSZEJK9aNU11JASeUcCns2EyY6T87zF4x72RNDH",
  "key25": "oPBXB5AiVQcycUY1L9in38XgFSecDDRyjP2GhG54ZH5vPPHD6XDy7CuehDyL4k8WDrrH1gThDpvz2JgVnbYJ7eM",
  "key26": "uckSKLvJcBx53PCLiUEus64uPaeaByXZpmUqcUbNaXaawgF2JF5B5iWYNVkESgcJvnuhQFjjgWFqDgx5SkoUheM",
  "key27": "4sAPJ8WeP5NBbdwHYX6cTVPND3hyZYoxgTzjyo6PynXCtnjoNm4XuYRavTpAMBnFdcbJ8RzcAJ998sfL3raEKV9A",
  "key28": "4S61XYZ44bzSk2KpLp8g3EfNZ8aqZt6E72gzasDbHW3uiqTnajkoafx6Dhijqin7zQxHt3CrSrKJqm3Uf3qFxNP4",
  "key29": "5wPCvjAaJxNRtyLD6frBtZmAaegrN692LvE9PxtYW4vgRsUn75edeWSB1jJWgudoaapxGouqVP2Yd1KAE6NzkNhk",
  "key30": "48x2EfhYUM8JQcbP3zuiLWbUmm49L3HXGM5DZrWFBuBsYQsDC7WkgfiEHqQis977xiBNq7nS3kovveHA3RQ5CtJG",
  "key31": "ni1wEheHz3sSTfssa7JFm5yEoQa2xzWRGoYMyTuH5k8ktKiCF7QgTSCtrFGESiRVmGu77jkv2NVtKZugTpvB4ep",
  "key32": "5yYn2eyqMM8iF78tsDrDYcZigi3xcxZkaTYqScRTQMCMzw2z1a3voic6jTc1WB1ZhidgLozn2gZNc2yxiUiWkXc1",
  "key33": "5ZxHvyyZ5czu5rS17jmYv4ySDGJo5tktL6p6shzoSgfpZXxrJgbCQxEfjdz8ex6hH3WRxddTEyEURHeeRsH9zYeN"
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
