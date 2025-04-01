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
    "54tz1uPCpmMuxBFceP33N1TbA4RwyDnatg8FKesSntzU5Pcnkk3N9PkFTKuuWcGvPQjEk93PDi8JDGrgwMMFHBs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4kVQeX6vWA8ZF1SnYKNvxCCikersCRR3ShqmszYS9SvgytrGTYQLLv7EE1U7N2Mi7VwUmbZRgGBXxRWBst6H3Y",
  "key1": "4pGimfbj6hYBV9tJpssg3pRnmUzEkmpbV2qX1sqGDfP6B3kZmmZFcHKu3wqYvZzcAdQF1L5pvKNPPMktb3aVuipc",
  "key2": "4WQ7WXAkoJ1j6tszhb1vS8XgHAtGVtaNZ3aNgAqPWcFz76BcDD7JE6mzbfTwv56yeiJKXwRnDmz77L8okwfP8Xth",
  "key3": "3kv5YeveuLuTr4bypw7ZRiuPysHm6Bo7FDM9bpKgZHcAo1dne674w59uX241dWSG3mtyBRkrPGGjQW2FaS6aW89S",
  "key4": "epE3FKUbiQ1uNPbUJgfhx3gmcuzX579GdjwQBvy64X6Q41nUKXZVWo3efaypLESbRD11U4tnbnAtJJ8ppMbTD9w",
  "key5": "2wsYoRHhuAvM1Kix4iadRvKSN9gxbKPsoMkAxerWLqNfYBkmYAmq3BE8ViPLdGPJqZV4EKAmM9JPNeXp7HH929fb",
  "key6": "5v73xhZUBKUTTbeyYwxQzyksJrdwxqkeTFin8i2vWqvrtTQUwCoxSEou8mqmtfStTB1arUj52kzWJZHfJ4PehtSr",
  "key7": "3k42FPf3rP8uZbeyguzeyUuSEW91Lfw2bSqSEkXEkavBRTinDLKPDQYCJWcoQbKNyvsfsDEjm5b479YV43WzVdcJ",
  "key8": "KABVZ6iZeSrtMpuuX1aYG3MZrywKYw4Dyo4aHCSdtANkPAZkRbuKYtcWux7R81WFDiPpvyYv9BAr9mDiYSe94kt",
  "key9": "44ZWRX3E4rE3Wuvq8uvjbi4jZ6XrCpwh1hUfw1fkVpeZEE4VSxaNPKgLLDZwRXdPEMYSwZvVDuEsFFvfqRdu6GwC",
  "key10": "2eu6uXmwwGv3A5hYuCemwUyUqtCUK4Su58RoDDV1QE2TpDaK97r2CpVCR2Wbs22MuKuZmpSGKyKzYfWGLhZXeqcQ",
  "key11": "5weJxVmYZnFvaRXS44TcNTDkSEMDUdY9ekMUZe5YexQDDSBbjxbf8j5gNWjo4iAfySFCmoEPsY2hfSfVJ1UCzqyz",
  "key12": "4TJDdctZMNgHzVmNF28bgdwEJ2foRiJ8LnLWju1cqHEgdx8MJoEF14ruB5Bik84qsSaP3ZzVtVYfKvqS7jUe7Yfn",
  "key13": "33HbxSHecsrSX2x9WAj4R3bumSUFjTTgSjFnJ5zDoQXv1b8ynq7WGJGw6WyX8u1YvnQgZ4tzVJueJ3kG3RYs8gni",
  "key14": "4Rn4nfympfEcyCNa5cKwFGAJxpxamFhJd7hbF3cw45KufLzQsUisWHuY1HxBKxRtjJPi4qWQjNCNAJcKe6DvHxAZ",
  "key15": "m9FH7MctGzAu6i4SdeUDkBuVnVNueL83zcdE77YhrjEBAsHZi7BVuQHEDyDTBokYhEqD8Sqg9o3ngPAsq75Qc2j",
  "key16": "3QJ6EiueUxFWeeK7EVTVk46n821ZBCpozqCGqt11dYFTj9u15C5CyFBUh8hAygrB4N8r8GvWF8cdSQ1aWRthi5G1",
  "key17": "5qdpYS7bmvURNncj1JVojjJ3NhAyTjSF3LLRTog2HrJY2JJb9DvoqorrUCMT2LK9oiaPjrpjEfW9LGvasCbdGm73",
  "key18": "62X9FgMgwfpTqPmvXrsuKWug9jDcqiroMrF3YPXXu2xwUxT7FShFspc92TM1kuWAfS3KgBq81xHEvtXKt1c9T8Uf",
  "key19": "5897UQzF85kcDZucS3bhoHa2Em2mavNiumcviSc4N9H2oKjK6sGuLqv6oawXYW4vL1MDD51LDQNCNkBBJcrydhYm",
  "key20": "2BerNfFdfHcxGiy6rnUu9Lsc3Dkrz8Pxz9G3VWNaxq3QYrhx9bvW7EzjP7gSsBD4L6oia42dfqWJ6NFZwnnwi2Hm",
  "key21": "4Jst9nnxTnHedLJQbvH5DKHbSSvvrWr6SWrQx6NJCVXgnAB7WgCGXKow6Ub81TNTnfQHvAByFuhHYMsaZtcPnN4d",
  "key22": "3fbk3SceZax9r6TToKi1RpdEYwqF5EvbbUx2qgEpCJZCJc5yFzRdJzD1HHu53SJQLqp3iHAg23Nfirhxve7nmj2y",
  "key23": "4ZCW7eUdcD44113JfiC8tEzzBKwUqc2nhm3JudXpdCcy8nTZwxKrP8p14WuuMaTMqbNg7bN4p126EV9GPf6TSK3r",
  "key24": "5NfZuQSFbnZtT2GaeioxzagnLPktK7HetwigaZvbzg9deT5Buv4VT9R1frSdKo7GV4VWYanY1Qv4GRnZUAgPCxaz",
  "key25": "61iJ5CPiqamXuGHaqksWSXegKE2x7ic2mqg8hBHiQc1xouE5bcRWf3YN1tE2tzx75YMnR31f3pBPoTeArpQfeqDR",
  "key26": "4hvWMQFNmiGtvvQgesM3JaArexw4bDrbeo9CZXjSFWq2by6BRYFJKs9wMaLpVNMP18AwFC5cUFk2uRyWgEpkX6mT",
  "key27": "5ETdB1XJgAH2Z63Zbzz4oc5ttXMMn2ybY7x5UVTBmuNFcGGxCm6C6SMSxyEW2XaEosGXbnWz59b3QBu8piCEHHV7",
  "key28": "2inrVVJ3PVC1jjLTdewZT6SevSBVsd3fGDSRHdGC3ecFmB3CxYa3BsbSKqKsXdkFpVtz3NdW5Gqcii5vToffG1qT",
  "key29": "2iXAAn1E7U7Qm9hXPjj73zBeEi6caSQJ4d65UfWqJgahDoKhjsd73hPMoytz7vBaXJv8T64A746qmCTqam5fFQs4",
  "key30": "4LEkjHg2Mys4NnurPaY5KwYxSZ2e3YBhvuC14PATdYx86spqq5kw1pGRgnXUX22hSrdruyvsS55PV2vqLZKdgXXx",
  "key31": "3c1wwqxwzJkMNL2yyaqtPZvagFXSxnKVxWKpS6aymXfJRPavWMxxuGreF3aAikegJVoD9xUxbBN3goLXQ4PsVLvJ",
  "key32": "4iH4xzxFFX4BJebzGzvHg92pqsBVziyf7C12ynRNxvoQiJxeJDjhqunWPG4WQBCAbNPwqSitEGBgiJoh6Yrf2V8s",
  "key33": "2kH2Sh43wdZPsrd8mpCEmStbAz8Wbn4knHJPwCo9G21MNz88zaekeNw8Pu4qREGfmxWPxkJwxWdtqvJzwU9zZfTE",
  "key34": "3LxLEVJmpqQZ56CRWF1NVvivsa2THx7iRhsPk5cJ8UiMRFfxXj1UmDHwU6jcarNPswvzCQ45AGf66oqDVSXZNx19",
  "key35": "74WsUyvJLjangSo6AxU93FMxjHiCvS1wMj5nnGZKV9V1CRpiRswLNWrequtdkFmG3Fg8v9SD2CrVYybiUdXVtxD"
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
