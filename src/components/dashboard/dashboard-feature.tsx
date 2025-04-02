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
    "wvZbBtRasFgGxa1etfqeBPmcfqVXWeWqyURZtBivABe8Xcj5EZodr8dTxhtt7NPyLDmwKnNVQme6sbYZFfAEJSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gAzF69bi5ZUYRMDDutbi6nceiHytqiisDzKYm5LRjBn5XbdHxsaRu9XFG28KfARXXC4oBGcpo83Y7FjBXwMMUMW",
  "key1": "Fuaqf4eDfaWuGHE5curDR6DjP8Vze7cBEmbPL1WBp31xWL4N7nEAaF733wnzgyPsgESdSkY6f51p1zobdzLtRjZ",
  "key2": "3EZ1FUGtENXrowyruzDCZDsBNGbkrqjiQKfSYSUJdSBp2sw3nk4ZpF72vKbxSNRzHhvkyT9mayuxfLUUZnx6RLCE",
  "key3": "skkN6VjdDsArcuaoENg2uw91LZ7WLo67MM4T1vo1DMu3UCPzFT7tWiQqrmRcHsHfvxnaPXLr1B8ABxe48hy5gjy",
  "key4": "B447FyVF82thYS7a3rcq6qH6qEBvqykjuuEnkxmBwdTGhszCpqcgkijKpWvRR8sfNpu5wvSbjZPkcASbj1XZGuf",
  "key5": "2jHYXCFfW9BMkYnHuL53emTexyBDQXnVcJatsAbThcZjqXDSxMMrmrKSTbQDvfBf1Pzj3aw94tzAi5hx6enT2QJM",
  "key6": "2Hap7ri6DFGN6MKHZ9kMMvvFVuUEFqqYG2g49LAjqNvA77SuLa6Puqk6D7g3PYaRDVF7oN2939bLpbnrxqVXsUvZ",
  "key7": "4A9ggcaPUBEYp26f8kvUetyipAKGj1QKoQyLTy3Gf4CK31LVwxYwHr1oBSJerzYi8bamrKdinJU13p8pRTCx7VXH",
  "key8": "5PsAh2FDqWuLUNtGkr4HKp7J7rstVooqRugaF84urNeNUL2PaKDXz55AC8WdUjbkydMEcKN6H3gmW8LGK5ouL134",
  "key9": "5uFVrCB3Qf7ZKaRMQqH8aPKQN9QaeQPwbyrjUjiXHSS69sUEdTQwcMy9ZAKcaKV1dyNSdzPFzpQ4yeP3C5r266H9",
  "key10": "3jVfhsZb6RtHYrcBCCfdnc37UMgF2XXHXg3PAAbtJh9htyDxPabeRscVioxeG6Xk8nVwuoULXXNsFgy1zfa6FTzx",
  "key11": "mM1DgGSyxEtcrHndT4J1JcVQkfCNXkU6zxEkh9RqdBYcDfqCgv1kMzsmYdHe7Vh3Rng8EWb7vUiosmCErjKxdU1",
  "key12": "5hVdGy5Fu4k8HvAZyERtjFsHvniTi2UKtECS7GYiVPTo1G6PT3xr1R8RhwXKfbZj8X39kYwNBwaA5NkLUJG2yrrR",
  "key13": "37YwDaRdVBC1ncG6Db5T9px2B7MMt5PMM5M4ce2q3a7iP1sJ9AiAPBNNM7PHbWzGinCupJDnZ6udFudm7Md4DesH",
  "key14": "5eh52gsTmeCgGUptqmNkFGeRpq8JqyFHY2yvkCXLNy7gvPCg7qTGmewc8tv2oFdMxjf7odCWCFpaYHAJ3WoY83ag",
  "key15": "hpwWHwT6Bg7u1p3HaNpDKd4wa6RTKCXVJbhCWtLqS84Bg5VUCUW8C2RNoQyzRaLqrC8CSXefN9qC2K3X6vBVamg",
  "key16": "wMxkQrB4fbt2ZpjcsM2e24UFJN4aSZBgQjqh8gY7DLxvPftWd63MSQAa4CR8GoLEhRWYSbFhQti1H37axNj7Cof",
  "key17": "2HkoYSAFgKiqjoMUAUWu7QKVbRB2yW1FFGyudTLqfuuky53THUti3A3JgoQUsRCRD5K8toWuyqCP7LtBpZabyApG",
  "key18": "w1DpPDijGGFWM6mJL78LpMe84Yfrops9PsWKm1Q16egWRKodHLDGzMPeTrSavoQ2hyfDWax3nMDQkhuEHwuVHKQ",
  "key19": "4AWqB9sLQtbznkQJCq3VqGfboaCVAJBU2gxYtckdPotkuAFzRB6XvQn3dsFvYCjY7dTXyRZfChZ6WpXj8YjsTqUV",
  "key20": "3mjSjAnnqvc43R2fdHsUKR4nz6QSkAaFzx3fucveTznKbAHDARVxYLuQMeac2XrU4SckpjyFpmeYezVugwq2yAWQ",
  "key21": "3MqUKjTvg2N3z4efSC6FCpv3C2vcKp3iNnoAsDz8TmgrfqP34BA8abbgnyUZXiFtVvAYYC1iB3Ca9DGyW8ZUKJi5",
  "key22": "4DDZhoLbvX6ymZDxqwVCvQVkEBfVYHwkMhcHJosCBwCeCBvp94yL64Za8SSEr15ET1nsme71rxYnZ2TWt83meo3",
  "key23": "3nqkX6BMekcJ6dehDtCv85H98SrjF4CqkxubEHLCryrFtvm1B8AwzEe7sfCAYa5vVRHJsqkSXih3AxFYzBsnFPo7",
  "key24": "48zw5cT8fCAtTswfgbSpb2xSdX7xar3H2zunoGQLP9vcow5EngUjAJyujTdRmRHzz3v6KjVWfJ71zVUNX4ErRaDw",
  "key25": "2rbY6wCYoUeTA78a2UsJJKtujxNAP7FmMsDXvquNbVhaEww48jtDx4Y9e322VVaYakDrZmAqqD5aBT4kJ9si5XPd",
  "key26": "V329Q64C47reZtdijv6HCSpmBj5CijnoU2nAZxMCcTRfiQXwM9afwV5iVYcQL8g7P1R5qtxvhgbvQHUh4NHRxq5",
  "key27": "4TqrVSHGwksZxiTu85nzE6RNqmXyF9M67CvWpUqXRVvFthk5P13GKCB8TroWzJxLjK4L9HYyvBWPfN5KwtoGNUuN",
  "key28": "ktGFZeKtH8zeoPbsNcTCo2HHw522YXfkj3prhGs9JYMDMQZTgx11RD9qBwF6hNq7xoRgzdKx7MUGtS7UBwjrxr9",
  "key29": "4FyuJyteRG4DpHs4wWMa2Z6mPy5fRgPjUHqqwZe5z1KPkzdvB4CGw9BurS2ggtQCuZ3nsGaS4onGKPaLjxKXjq2k",
  "key30": "5pP9n1Danu9XC5g8NwN2zYn5d1aYENA8MxAK1AHC5YgCsDwMYm5LFm2kDtVYBSikdBrymfumV7waLVX1ifCZwwam",
  "key31": "4mms3j2cwNkWQaspLRh7whyrmFoMYE8JQYyw4monAsdqkhT4rWP1Kd2UG6yMV5iJx9PdZNEp4Yvv59qkCxbNAm5G",
  "key32": "5D55sD5WEgM47ToRN1g4o2SkGR8r7ow2n1C1Pp3oBxbstHRzEeMispRRmvs137zXzApHgn9JYaXrEfNpGDdGXnEu",
  "key33": "2wxbkMPYSJUR9JUM36wV5eyv5shUKc4GNN3kkQDjAKR8bpWSDuQe82d9Js3j3xDTRdtJCSxjeTY1XYvDMC29xEDC",
  "key34": "1vtkn9tVJgAMbcKwPs4jZrQtx3urYu5gXcDsn4XourrsNyoR6dLmBY2aYoU48ssQLsiGUirQJtfQgdcHmxrnR12",
  "key35": "fj2C8SG27cozgWJiGMFQttK47PdVKdKx5Yvv7foTTGjhziuJkBSp2hTx1shWLRrPVx3nbFBr7CMufLkJmQ4Myh1",
  "key36": "3e2Lg16W1mvcWdmVBwYXxm6RJ5jsQEnJ4LUcWJ6zjWLqJKEZr57LQon5YRJjMtnM3TyTDThU3vDzrXhHgEXq9tiG"
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
