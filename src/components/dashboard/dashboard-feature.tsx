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
    "227LuXVRN8gR93CqNFqDXG5ErVZRMRHPGwhoeqqu6UnTNRuVJ69hwMqj27dHukaCTpegEZa5TsrGKzkhTgFqBbCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uQT28ohrtjfuhiN5s2ebmcD8jqoaA65mKB4C7vANYKY3iUpCumck62B6iqbD3tjKdedzCKpPTxwSaJpkKru39XM",
  "key1": "59UTpCGxCKYQ7GEKgBqzWDMyBg5biFyagGon1s1tB4rybRb762AuZpH7T7WJaPPfLNE2iWw9PftW2F3mqPuzG899",
  "key2": "wg4XvSTeNt5XVyFdam49riegnWbe3LDfKuAAJSNZ8jqbHPidpbmviZkj6Un8G7TBtPKJdJSeUJVCMD6df7B7twZ",
  "key3": "5hAJzmZNkomfHHvAUVzGW4DP6gvZndF1k8NgkhvJTtA8U3rB9EfcsvsgLiLoQ8pBREmeprXbiKoRybpyQokm1Rkj",
  "key4": "C6CNQHUUVNHmQ6oS76P5bVHcYHmbkwGXucJhkg9WCDe7obXofDrFTtc4157nukX9twzjsRKYqex2WA2bvJVCvEX",
  "key5": "27ZZZsHbgMy9jPg28ckv5VyLmxFhUUcaTb4Z5T7YU15MK6bHFE9sJPKyrX7YeufKeDdF9EDmPS8mKF1uDicPy4CD",
  "key6": "2JreMeXbYcP9iuXRdn6t8tb7nq8TSYtdpfeWrTAR17qx3hkrW712kF5aLyvT5UBP9gFP6dh1FQDrkqnpAXDcEdGD",
  "key7": "LBj939eazFH52Hea6C39zTHPf6t9H3wSTdTUW19zPsoeADLLCCX6ABA3La5KNDyaAHgZpBP9XqHWWpfg4wFD5qK",
  "key8": "3jquNBajratYF9YVYd1oAWfZAEJ8jiZL87RPrjUHmGdKtK13bSaG3i2Xyij7wC1koe3rYeLcSauydGmp9N1ASTx8",
  "key9": "55LEmxRW65kYphW6G2qU73W7u1srNVjS8gDwDgDfXX8eGi9Yj6Q1xDyjwmo3F4RaGh2f6r1NF2PQ3HuYxfkvbJyQ",
  "key10": "5ZWk2ffqFRmqWRty113KyUyoxBsfFu7naZK14L6Qt4PPjbxGiBzfSVK6r5XW59kR4koTLEvWCWM9YtByiDiaj3qZ",
  "key11": "oKEchKzBunGH9FFaMAJSDbDJQ88P4xSdonSTvzUYzXMkJGU8Td2YH9YLsLGNVSBCTx4sxMSPqFAFsiaiB8hUEde",
  "key12": "63eKuxS5rPNJp6d8CaqKBc5CnHr1ovRee82AeL6DwqjsRbRce62iAg3UgRwr4Jfk7SQTNUWX2yGxabYKxDSbxWGV",
  "key13": "5qwkcPZiFbH1pLJEdwvQinRxZ1XphdD3F4NhJvaSQy5gGW311Z4AhoC1XEXNzS3pnqDuBLWAYu9cH9EPbJ84VqdD",
  "key14": "2VdbhjDhmomshXEkL36JibAm2uHCKte6XVaieSacr5ZopLnmsBx9hiqGbyigeK8Q3tDcfZ2dztiVRAAaU9tPBNEY",
  "key15": "tVzztGwELrKG57Ra9CFrg7S7it95iuLs4WCdhaqNMvniEVTBCUHoKU4AQk5v4ZLB6UGqcsGCUmP72givMAPUDmB",
  "key16": "5SqxziMpvqFK81oikkLHpGUFfstfPWW9F8DDecYfaEDpCB2EWgFcMtBuytHjkHJvTV57ntUn5VrLet1GwwCxSSFM",
  "key17": "2TJC9LaphME3TebKUEy6mQG5GdG89WbWxhsKQR7pRDgUR39Zh27qe1MB2m7sKB1KQnjcNyybuZTP6JCEdLUMVL8y",
  "key18": "2JiDcUbvX7cAtFds4yfM7Ek9nXwgyGuoPJribJjbonw5u2RBtWbzGMX3vGjycomcPh2fxty3QKo4ypcNPRckpQY2",
  "key19": "SwHwYaQEEP1GJgQqenYkn2c1zkBzvAqXntsPYdENSDTujmqCVVRaR5BLvJEfCpxuUyF46FpoxkzyF5BT1PCpp5C",
  "key20": "536NqXEdg7dt5DAmLs2YHX6xgjiM7oS4ymmFHAQN9q9X5zsguNRJvz7KwhgqXvvTo3upasxd9KpUoF9ojmAX6Wvw",
  "key21": "5msmcmG2tZx4BQ97hnNzAP2uWbFukSBjjRuFK7fhLximazC3kkfsAHJaLHkom6TPdqVNkNXGHTrakLgs6QQKKNri",
  "key22": "3mWw4f5cJjNJDgyi7x9TwX2KBmytjXPcf9EPonZjaec7RBRtgMw1jwR2cUfNQMcrtcpWt2fVknLA3o851ukmCtkk",
  "key23": "2t429ZbiUDNAArHXo4F41VP7Rb21E4wcGofvRVAYV18f8kEMCcdvhgYgNbpv1SUWprR4LiAHzeSHdw1Ybywy6mFW",
  "key24": "g467DTj39ppt7GZWGwe9icrU7FyVEiCaAKTvVsEwWLq3BttWLoZYbkdrzxywejtFDfSn3Gdqy13onAgLcQkugCK",
  "key25": "2XjgEMyMFaovsC5w3984UY9c9BzCootUXjHQqwWFCGhR9AjjMg4KkeMVStRVbiaTCJay9SvyyJvVGQBtz9VV4YU1",
  "key26": "5uEHyYxGrztUi9kbLfTE6WVdMXcZ8QzzhQxbouNWYHucDHbejRPYfW2Lw7bTfE7YaN8pfS5SoUKBJMSEFrsxWMTR",
  "key27": "56tser6T1Ln8X2jC8dh8qP6JgwBy4r5MFfWjstmUS7uzAMUHRCynHKgGZag6Ac7BwvbNP4AwUwUNQ24EwDQBT4bZ",
  "key28": "2eiAYiqmJpDmpUrksYA68QgpimG9jiPT3oxDfsWhPo4B8rRonAKb7dhkBfEKJ7AasSUmVNBmD1jDaG9oJHs3pgaW",
  "key29": "2aQmWNx748KRgPYhGiqUZSUJRPVq2qUWfmA3yVgDrq6iwWw7nLmBvyCHoqiQ7AimUzsFtYK6Tupm3WxZWMRBEVNf",
  "key30": "46Ty9o7x9pLEEjHT6DZwHZTs9VzViZRz4UQzXdKRVJST5mDpaYLPysBxsZHZFgYSyGLTJyy3xnyUY6YBhtiMxuDN"
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
