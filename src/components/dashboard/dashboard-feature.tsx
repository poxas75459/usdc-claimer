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
    "3Ct4ZLRRTTVEHyBCBbKJ2o7dHEUCE2AXsptjWCsuW5D75EiJoUpUE2227y2ChxwCvNYTqDoN7oEaZUHGP5KeHdGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CCwWkxMhSVSSQ95n23snb28mmZ76Vv2raD319pvpHonLJRWiEs4LroQTPj4X75CU2zY8EzmV6AEWnQ33A2bqpkx",
  "key1": "2h4AKvsr8XEkkerCrNDPLHkbfUo49wLf9L6aBgRZHoaisqW6owoShca6JLjkXKePf9M5cjj1ZkmLs6bXQhkPgogx",
  "key2": "5xSEsHJ1fNa8PrpfkZBXvvze1swCtPkrtnjn3Groo2f4xasXnXfLGXiUTfxUiTANTywi3HLokq7E9SnyMe8qCmLr",
  "key3": "48j1aitLsG5J3EcmxqCAa5LHyynHghTBPiB6ZgywaexoM2Wrx6BktdDnWjkDGFQFDzsiAweH2Xytgafo837WJUce",
  "key4": "2Sf9fPiXmrvPBufQainxirEgTPGkXPXFwtPJs51m371oEXCSFBbkN8kKWNVBaqkZmLtT9P8wQoiZcsVRVuknP8we",
  "key5": "3Qgdz744SCvonXRMeaMPcxiBTAJAe5VWLvF2LiE1hW3oEa4uig4SToLKtahqvhEHsZk44eXdMHGDNoxVJSiD9NWF",
  "key6": "4AvhsUNv1Zq8nua4PnQfXuNc9nAofDD5tj1Fe9CbKigvHpnPdcoFSiQCy8Vtk2RTNQgwE61Wk5eVU6uRhfySU8Vr",
  "key7": "51jokF5UjMYMjaFgT4Typ9EMUqHhKRg762pCnst71TKta5edh7fLjSV21KRoFYMAzgEJUbkbPbFDvpdaTpQPFa4w",
  "key8": "2qyxbWhrsSvt4rrimKXVswnCeuFy66vKUpmFZq5S1JxkxxS3Yxpot98kuPbDycSKd6GRE5aHduL7w7ZsXx9nfEBK",
  "key9": "4opGnJrqE6fWj17oHXVXJ2G8sPaNncdrUFxTeFY3rNV5tHXS9cTHEVMeJwjATx6ZdFuze7eQFtFVXnVDMuasmYVf",
  "key10": "252gjod8SweT9eSk9x13awULcw7GNywxUQi96JbFfAz1UWzcmZaFX1x5N3SN4KL4BRY61G9jK3665E4EGPUBmds2",
  "key11": "3ggPoSdT3cNpEWzRHk6TaCMuaQhsoMmyTRgJ9dCByThRJemY22zcwrLs3zbJs9nKh6U9q2FkhWJE8io8toqUBhNZ",
  "key12": "3bdywDd9yUSxxwFpgZbGoZJ7dTnXS6LDjZt5Pzgm8YepY4z1gaTBF5Nomq25rWWBRZYMHuxz2kATXRXYYMthcj4e",
  "key13": "RPseE78GZmF7NEJht4RNut7o3QHQTfGqegjngcuhN2yVV35L76j55ZyHER97wQraJ7PF84cjfVhtEApz2dNXF8K",
  "key14": "4NzR9umNuAXTabxKifCP28LUEEavXduXZbBuNyNvb4EGQPLKsXe2HH9WtHCwUMam1yVMnFdoZW58mQJrPa1WAF8p",
  "key15": "LN6RH9Ui8zP5dY7FvY3acFMtQcup2wGWneAxnxXaN4YUrAf63tCV8Tf3BaCd81PNEoGkzoKDhBympWMT8LL2bzC",
  "key16": "bSYzLRTjBBWc4DQmdemDuH7tpofcHh2ct9U9f5LfL518AkTuTmDaGoTnPtNXjR6wTaeAADiHjxoW9yaRznByMgt",
  "key17": "4ymK5mmZuhQkqQxQn1enLpB4bUYWBYQyt1ofDV3b4DGmSWh4PWVgr8DzpZALLqB87Gj8pxTjMqgndhXhm5rNZiTA",
  "key18": "5MXnitHKPv7gS1KFH1g9qAGiUw615B9SSn9vAL7CYgdvDyAMrPWNGvpteS4xs1ZfZj1TWgJg4dA3J6T3Gtykqqj4",
  "key19": "fm3uCxb7exhVbhGmMZZWZqjkxDYYv2PoeWo9auWwwqgpfMihneX47UbjbBfiNuhghpvWFCvsVyGSpmf4nxbT1Gd",
  "key20": "nsZs7MiTNXswvr5ghK5CrAattK1hbJxHZ3nnjXzNTGqzopmZouUstc6ccAHSTjGZAjxVPSKHzjb9u57Q42aEsRf",
  "key21": "28t9n62EPFf5hGGRMwb2fGvkgYEafHqxLzB7Mse5YTU6MZcE43Qox8yFZkR4xj1daPKeRK1vLR2u3qoCZwApUokC",
  "key22": "2fkhFtXRofr2GnFJM5sGzyGeMYhV64UVNzvJgzVxn3zdSTXP3Ly23KdP3SdNofg8BxoDHr4kLPxVFojW73KLXv7A",
  "key23": "4JGB2p6Fz47oKPteGW7wvEZ6qAN31nCiF5srwX5DbTV625UGBGiiXuW53MRugvuKyFdqfRNw1JvXrP5gtgqL5ddP",
  "key24": "4JDzeFm3LdWyLNXfvTdsczqCPh8soLQfAozHBCpWw5HVjxmG6aWM6781Bd9Kb863exJYBeQtv4UBNw1D1TNXeQt",
  "key25": "4FaKgqeDW2ozhzsWLv5SuRmkA6DxgZ8pvfMziJU3aCFsPbkpxE5uEtPb8c61g9z1s894q793pSMsZRFeJ29i8jQg",
  "key26": "MjaN4M13re1QAv5H3tCfK5jg5oFoz6icgi1EnyFjjZfMMhzsLWtLBqF3TjsoLsWKjr6N7AByHvef3rq7kFDYPGu",
  "key27": "2NQjqXgH3NgTtAp6iRAv2v9DkmvdxwA4ALTcGbJxAsm3DhcgmMGWFM2HAGmeiJzFYFYuK7XMsrbvUoUoD1xemEeZ",
  "key28": "4ofkUeEPwKhPQ4G5FG1GfupTcuyt5q6pz1yXzz8bNyvxt95jjxojbUzjVDEQMaX3u1hxXVgphLhCMSkNmgy2VV8Q",
  "key29": "3jANhSoHjgBoGU5JET6pcyMDvuQXfoYRJY7YbjHAK58Z7fwZyoUWaJLqMnwuobawvVAfX6bBf6YsrzKcP2wPDk1A",
  "key30": "sUxguqn5XgPH9RKSBgfDoJRJAixxYM9thWACQABEAH68FAUzkaYXN4vi1VxtUMos4a4PSmZqxsVYMcQvZLJPhUq"
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
