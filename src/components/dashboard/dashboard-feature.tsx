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
    "3yAg4uBTsVkUJhWM4hP7TKsc5Ao846eytda6EC43J4LvjnWFaLsFWb9r1sX4uUFNngp8JcPwhPZr7UisvnkRT4tn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YakhNZ1PZBonagBnarFuAP4RTKZeBDxHz7m7KvkqzL4VZeg6eqVSUD595VGn8vriHK6khXKA4iHm3wpnJPXxLK1",
  "key1": "6GERfZEvEHn3hrHnwv5iKDaXvQaamfS9WTL4wisrQmBcnYttYhwgegAT9WkmoRyxDPpFuyu8GkAh5gmCjZTvGKB",
  "key2": "4ooEMsuYjuGaijph38sKmD1u9siox8X1Re2V1jsa5YNS7MEZ57WUwuDLmsksyxYQ1fX7fCCB4xahN9fpSvfYTVWK",
  "key3": "2fFuRzhq7rv8vD3z5PvzZCFGxWRy7HtH1aoVrpyMVbuqUhmPC7MTP96hUVkqPW5uDHgEU79xCjHCnSNxJd4vdGyu",
  "key4": "5AvD33UMwvGrS1uss6z3xothNiANyWcyek1oXSi92jJGosBiAErkZPMeBjQPy4aofL3ZpdhhHiBhaJovHLYeWhMk",
  "key5": "UnDLYn32dwFXrKYvpAW8hoZCY8JMpufjAPDGXmMr77ZUiqxiUAJF81pCJVqbrmnmkA6QG8Xkw2EaKZD2k3nGWMY",
  "key6": "3CxD21CiBFnhXyidqqwSt88gyrZF5RS3EDgdrzJVNBFE94gSydRjyYhvPW6KSzUyWmDMJ5YYaL2yzNYiNnHEuDh9",
  "key7": "5mdMdo99E9nESn4rm9zgGUvyyFfrAcgzUfMVBDehN55HrhCmajKgmxxxjEEWNAZ5pMHkPcJpiCkVz6kStnL7NBAJ",
  "key8": "648YHsHzT3RaNDXhcz9PZk6SX6H4duzfkUMSJS4oL18hRaPZPJZacDLTi7CuuBcWERCWnVUGfKi3yQAEbQjkhUJ",
  "key9": "3EicJvG2ETJdWzVxVYawpHEiXWY6WAVtPpCszDs1mirz2WjJF5ySBtqWsFhDTNpTMdr5xgcLQE6WPCDar1zxTzMA",
  "key10": "452wdN2gH7RQcekVnXi1qtkAg3c8fQCK8RfDksB4ne43eTc3EqcbHvbWKYTbTTFRXbkVX7UsxA144AjtLzzbeeEU",
  "key11": "2pmfSPbJ8nrw85SaszmG2cEFT2yJQrVnHaAV1aR3dYAcA7SPxe3RWboNfzQTC6f1FgAkSwfg7w3ZSV4FqY9h9Q99",
  "key12": "3CaDM89qV65X9yGPUrggmB4uvmTNyZKgrkNwU4KJj7tAPDeZCH5Cf2uoRtyQd4JPgew1hmex6qF2xiooVESYNG9f",
  "key13": "4RuQraHuBCJzFaYBkeszR57oLEQttAdjpgiAdUBvPCSHnt7igDtcw1Z78zuaEm2BjYcYT9eRzNCDhfnMTNfL335Y",
  "key14": "5U7DJcyM7QdFZr5cMqKWi7TiqzAnzcp9jLsScAtm7jEN98AuCrjyQMLD1dkB6LqMEHP8D6mEQWB4kkBBz4Dq74cg",
  "key15": "3YVaLvTmrkF7hHaXXBQgw2bdcDxZxuhPQ87UzBUwLLk1TWCjF28TZHfCLzHK2A7JEN5WyG6PnePAv3gAXzVE5Nky",
  "key16": "5hETudSLUd1UC5ABQxRaYXWx9YsXPH1mBGJ7ZJH9NKqby25Zc6RNHZ8zgWFBpqnBHiZbLrQKZiDV1jc3K42nrKTC",
  "key17": "5CSb3AWkxxoYGzpZZbE9rDyNmu8taQ9zX5h2rcuTjoZ8RuZC44UjMHedjx4VyhN7SBmjdts278h4wHYqmFB5eVyY",
  "key18": "24ckBcrmpJoZsbTGg5zPrjkixrpH2LuVuf2j7NvgFHTY9RYzSCQDkWw3XU3vHuXWXiDhBQMSJa4uWRSRNTAxvZQG",
  "key19": "NDXPvobXL7CZcutV6sidWfbQvsu61bbRDfw7NQCuh6WNGGHNXqGAQgPWrhpdRbRtErMpTh4vuyyJr9gTMihuwkA",
  "key20": "2Htxiynid8YfmX2BgUaGPD7ZLzeCUVPPixgCsZR3vXnkdWTCncmvhxS2EcHAT8qqVXRcEAhxC2Ks1g3LqEQizaTJ",
  "key21": "2ifvZxSbChzNCfT8wvxpwQZUJpC9XdFhBNu294QtYcQf3SRcKByPba2zJWG95nEjTTfUKmcVbMVE6r18Ufj9PHac",
  "key22": "4VJbfvMFigD7zoRdwvg8e3J4djM21JJHjGEWv7dYSz7hJcke4yxZJ4rVPpT6y8Bpst9d28fhzAvcaw28cHukojHi",
  "key23": "3JDpatvnLaU1vgS6pMT1iV4G62562sbQJKVQmmyGfMQe3SNoyFifoq5kHCCtWr2TSgwKMUgqbaoem7oePj6VRXqu",
  "key24": "66icMyJPwJKEQ18jWzysLeuPMgLKo8c9D5hEeoYJspiTfFM9tNabJpCEvRX3F6r2ALQEHLTsJfXx6ZQue2e9rn3c",
  "key25": "Safx65vEY8c2v1atcTCzVWjkk6QwJ6nZ82R1S25CbrNMXwDYCt4fZVoB45skxuxgWQeHE3LwEsxgsroj3R1dkvh",
  "key26": "2ePMZJYzgrAgzvmDo7qz8NrQLu7BXoZH5iJKvnHcTWFsFrrcXx5wGUtcMHprRAm7skmrJUaX4UPjjdt1Wgyopr9n",
  "key27": "3gNGs4EshtLH4ksoRngmzCKT8rDLdecvfgL3NpGdySpmkCPgGRTkVu27ckMpHPgTw5B79vupAG9A5DAYw5YZKAPu",
  "key28": "31gy83fwsExe2N1ZKGMLCpc3x2jpGetdrwbqSfQmRjwQ7uRkXwBV3jau2fmpqoozwoEb7LpBL93wfvr2r7NehThb",
  "key29": "432QNRHpGRjs6XhPg8V7yq7AU5bfDw9xmVaC79gMVoNnrjQJLwwMg7LFrnCXBZbBtxpKa2Ke2VfenHrKkuZQGBKP",
  "key30": "2vefSt3aCkx1hCTzDRJbSupPCsJwrtuvouNDXPViwmec9Qa5kpPuNFJrihVXEiKCfkMQLGTgWXzV7ifCxMi4BBpF",
  "key31": "4r1o6BaZ52dvFKSve5Tytk4Lmk5gWB1kAQCGh98WyMEBjT16HLq9FaNkJzEPesgNmpMwN6qBd6awXVWRJkgsiniQ",
  "key32": "5Yjetn1FrWTZrxgFaQSwy8Tbqbqpc5EGwDRdkKWMTusog4apM9nDtUnbDmLXx1E1f1DGR9sz6WzKNGZFkMeS5ia",
  "key33": "2uoZFGMhU5Jym5RzEQ6AgjCFmQA13QKLUoSabtuyqRp77QqxAtphL639y6HbD864ozWxnQgdxi2p2sTMGS8MB6Rj",
  "key34": "45g2B2TMv4oCdqxcHYszs5Vn7CAT6Rck3HPTMWWMWXLkc55hYXniVYPcRXyALA2pUnHMHUWCc36nJkaBcxAH4bLK",
  "key35": "5W1qNksAD8i3z72HL7HGNNfYcyo39Bat16d9dHmhaiMGP3eSaLyXH1eRBxDzdGFEBsJKC9bSTiBbJtX1vytcii3f",
  "key36": "4HJiuZdQ4a7ck9hbVQ3kJEjVfSNeERMQ5VH1XQs938a63Wp1t7We4QNrLbbAZH8CGNW12c18p7qnFT2KJgspLWx3",
  "key37": "4Dck2vDkaZudRcG5i8SF1ezZTfnWfRoozPZMNkXfg4Us4zhvLPxYVxpvyu4Pr5SboE9ZRmpELaYP2UNgibdXK93y",
  "key38": "EEoBpzUA68hTzCfE4EUT6UK6P43Y7EJqtUcMckWbZ2CEjGr2LmrpYV3zcn6zbp8tZvuAFVLRvEQjnseqBVYHNir",
  "key39": "2Suufiy4kagXVZn63j9WFtd16993CJtxZ2hRKtab1mEg9ZuCzxbjiWwhZ7QUAMLVDMhk8286sVpsq6hnUUzXu9iN",
  "key40": "2uJfvxDp4wkjBsTBDY2m1Lh9k9GAUQh4CMHdQuzcHct6htNgLXAo3aWWrEMCFgTfzsMytKHgeB1F4nxCLA5Zqzg2"
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
