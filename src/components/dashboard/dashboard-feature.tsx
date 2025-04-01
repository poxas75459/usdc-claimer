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
    "2B3jRvfCs2gUdgAhHKAK9rkP686L5QxzMoJhUajFi7HDbjZDPKKUSVyS1VpHE434NZZBizxuxCYYxgzX87gv8Vzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AXopFVHoTx96LDz1AP9rFy5hrmX7bGVNTAMhcTuRUiv557dyfZEzCLd3E4EAKBq6DdxLqbp6LNg4Vk5R7RVjEbg",
  "key1": "wzTTfiCB76kjgVtfAt77mVxLwK7fvp7siUZfD8i7EgKNVW4aAuaHZSL8eMXq7zv1kwNT5P93vT2meYJiFbk9BsE",
  "key2": "2QM8TNqejMNLuekq1PEtC8TrY4scYm7W98qBH9wmfnddA9qCRAYxP7zo9aRTGDhtir8bYHhgTnfnkjQX3DPZc6Ho",
  "key3": "5tnZPGesNc4SPKmZbXZvJoRDSt4j32GiYmxXUzRjsiwFhyruStMnmMZyP2az1fHvVhdifs3MxzmhszkNzSSLY3Rv",
  "key4": "3qA9WFAofkgmqvuk3vos3QCmuN3SXfi6cFLXumP1af2BRcsAhR2T4CBaeWivTsYbAhCchwHcBc4nPcch7afVj16t",
  "key5": "5PFgrtxriBMqD1wtLeLB1oz6uUM84nYRhDxjrZmEGHevwQes8eeuoXZEmcr7x7t8kS4cqmVji93Za2T5pnAddC4t",
  "key6": "25xrXm8Sh7n3X9qQQtnQKTFs4vgEFwKozs4g8UP7TgZAaiess6ucHyeCbmgjxkr5vvY5Q3jxAJf5DaP7aJnWSgp6",
  "key7": "2jaWxV3nALdco4ZJTwW1fwb5e1QuBWqf2Rw7XdiDyiPkUrVPXfaRjPBTwLg6ci5EZG7hkmiyxMk97pp3kkPDgMHg",
  "key8": "2LJq9guoh1oRCMEezrYTo41iTw8aECTnMuW3x61xLqThihCoHevaiWcC7vpkiQSDQuh1xhbRfRFd1PeGiTQBTczd",
  "key9": "4Ugyiytb9Uuu1KXKBk3kwZbZN6m6XbjMcGHnsbwuMd1YVzBcph8ZeYxrEc2wuBX6UKhMP6B5Fry4LmnKTmbK4JG9",
  "key10": "4M7kLAeCB8TQstWV2YtiAYLBGvKhQNvfSdYcPbMESTnnHNRMEdbmohU4grbaHNhHXP91qVnvHWf93G41u1vd2EsK",
  "key11": "2eaFm5rtbGUVFTVbrJeLGjufkhBNh2ZKYqV3RRH3WV6tYKKdEFEQnWTzAX5pUNyhYsmedXSrDhUYJGSLJYuQb6u8",
  "key12": "kSHgX8r4V6R48kefvUiUBTkRp3VhCPMQmDTgzHhqD2aoqFgSC1DUDJZJfhsWr4Up6s6fRNsKEsnruL1Tisy12oo",
  "key13": "CncdB5Um8g9KHpUAFPu1w9u19W9h191qVDSDx9i8XQTuFwF6WrvWWkPPvct1jEmZVaah9Sgg5q2AqVxgVAzfKsJ",
  "key14": "5KVpiqwTYMX326kRxUM299sDwGf3TL8Ctp2Czvjq1nAEcYcNVJAMLrYcfrezKZvQQk72Txfk95qntw2SZApNqdvt",
  "key15": "3F2epJk4M4CwQo5HKYwUELWcVrqQgB5yHnhXYfiAQncdDWBjajBY2es6AyBV1cVgFC3vmpFcS6HkKVVyUatSHcFv",
  "key16": "3KW2jLFdG4zWhv7Nb7Swho82yeRxhG3EaAyWsHZBspYJCD1mx1yEYPCDoBN8SVXjo6uDS5USdCPSgCEYxWftizwU",
  "key17": "XrrACEnNFwhL24CGxC2gjF2mCVwp29Cou1fexTtU1TAqvF5Q6hujZePJLK6LZ6cyvdVbhswdhR6oFQ7YeuehRdq",
  "key18": "5rmPxMucKkKtmLnpVzgRH5fNh9ZbPQPsA1aRLJ7LnrHBzCQCRmgAHNyFUzyk1jAQ6Be4MDGPrgBtNviiqAfpdbvv",
  "key19": "2ALgEb178brSzyxVqyiZBu8kmxehPcL4S8qsbXVKVwrEyvQtSso6a2psmpdEHEEWBjGjdXesCJj8yTULrJNYpS4R",
  "key20": "5nFGsVAxqsCkg4FSrF4SWVPLRHDGgs2MTvUv5zj5yzYCiRyxjeR4CRLornm5x7Fzo5UByzfR9TVJmsLzJ522WRTD",
  "key21": "2RTRvzmU7FBkX2eq4BafeMrs4ebAWdy4WnwRDL1W8xmmp5Wao4T7QTUSFSpTCVzxN6Y4bKua791ezXMPwHaAPpYw",
  "key22": "3LYkpjZeFV2Jd2NPYE3DoNpj3uej2Hh4FGUYbaRdn99UsiMFVQJ5M23N2wM9bTE4saurGUxoH4eRf1YoMyhg3YNb",
  "key23": "31hgn721zY1h6AuyzSbrjdXuYfWGuBvcxDJfphrvYvpyjaHGSajK319J4AD5nw4JahYEE9s5G4viHEcd1ZKNozw8",
  "key24": "4YmQsEnaV286gBda2ASgZZ9C13z1jYXT61y6CRyM9vKcoMyxVJhpbuBEBKoGkgF6cQ1fm5t2q5hwodLfgaYdM8nD",
  "key25": "3d2wjLhEPv6RVusaPnxDz7DGC79Aq7XCDLAZfVBxMn3G6E8kaEdnR8SqSnxLySRShhWGu7J87ffoNAsKtJxh8CmJ",
  "key26": "PPv9UDerUcWTjk6L3FEfEqgLAVihhFvUhWERrKH5qeuvgmPJZFV2NNyjA73CfqwWDckVNyAJmf2YQ1wDfqbsJ9V",
  "key27": "5ctukvopXJthc39hpP8zQUJzT6wULJ6D7zZkv62u3YEdegWc9Y4Jt3vpyca6d3LTHcxXnhJuhTmBiLed9BcyPukm",
  "key28": "3qEkP5ZUUyxV1cEB3bY85o3YFbD9kjrP2z9eXBCCmYiu1rudUedHa8Hm2MP6RcSU7hEHPqXo4WnLVd99K2HrFm5C",
  "key29": "34KTLwKNXAiGbRYsjkyckuon3sqHcvdSgmMY9jjceqGZiBYbDfyRwGiwHXA8fcmX31huUo4gCerGXWRnPGhB2HcD",
  "key30": "67nhNDPSaBiCmdATjyT3BW6sCUq87tUoYcY6nFtCJVx5sk2FrZ5tMKEVvhRJsBxnQCXaVpr8YrVYgQCBAZWS2M11",
  "key31": "3JCLSzAeySCFyXRAieBmeQoNLxT2VBzVboHjcwwXti9vdQagzqEGCsEqWeK5XQu1hZfQxkn4hD5dHbhVYQg7VPVR",
  "key32": "4FZ5eYpwdasNSTt4pbB5jrwcerhBboPknUNwXtg6rjgmuer2jiud62riFF6Dy6gbosGGN2Ait9G28DxM4bWKKa9E",
  "key33": "3ufw5Qs6Veo7SiPXkTpg7Kxx8KTmP3uJyzrfBUYSwyopyzqdLcyKZ6jXGjmxpYNTXpmDtnpCGtZ4m393NhC5P8E7",
  "key34": "4E4AVEbsgTna1Mng8XJVQx4DpxsgJHNw2cFY1rgzhWdxLYZx6CdC2ReHuuo8bp2c5fbog8gGqG5bqnrQHtU3C5A8",
  "key35": "4PEUyh9MsMuqiYRK8ukkcbUJStn2JykwtSp1pVy3oMUeXZKB4dH8fWd8ZotThtHhqmExebQ1ekLQ6A4dgXjnT9hA",
  "key36": "4CQGwhMyFk8UTtV3NxmBore9DATa3URbDw7f17AUFT2Sv2L7ELcMeZ9T1HVhRqtZ9HB5SsK8AZze27jawnjm2Ntf",
  "key37": "24uJnxNyjpf2gWbK9qzQQagQ4jejFK9G1EiXawEM8mN7qNo3bM6mt5iRKkDiubzPv1drFLYSaF4HMRZVbkB8Rvvq",
  "key38": "3PmreXbU7akEdWBGGK6EYp5ZFZxEL5pqSxA4xrxftj8nH26X8AvypAKPkfWGFv74Hn3XAoXtr6QBgBgdVGX2PTn2",
  "key39": "5dnAs8ReWT1vwCmYJVW9KbM7X686H5UwxAbA9oPH6ARn9tk7eMEbxypDBdP2Sqh5oYtvVpq9GGEmWR99i2giNNTN",
  "key40": "2GLQaQQydd5hWXKanML6NDqKAbv7vopUjycqFQLBNX4KJpzcuHMxcfea5hyJApbfTAB4XTJUxFFDu54kfqLCcE46",
  "key41": "3dSD4cCNL6qmqS45WToK4AeCMkeHYQGULw8rNQbFk1TNU2vnReFiEJQV2FiHrbTxDvrjT3aav4ouqai6cVg2nKud",
  "key42": "3NCT5gBnisnHqxFe6eaAiWfVU8AWVHt6RtGnVP4GFU6UfxwMWerLFnYeWJQBUKz6eCr3MzyWRkyrRYFoQM9wD1xZ"
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
