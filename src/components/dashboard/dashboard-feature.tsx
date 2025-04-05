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
    "4n2XZXL6CiTzZH5ANdHWzZZyzg85PdEfDKkdftEA7AjhBDbq7GavfX1T3Xceevb1mDYgmJ8N4kyJzp3Vj1TbaXZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CriEJDAp69o8togBvUSaav9Dndfk54PXS438sAoM3Q1XFqTTy6jJTqsqNq1HGVa47Y2NGwvfUdxWeahkdbkaeeU",
  "key1": "4bPxMvkshkvYWHb5MQNF9QAUenGUXi9RcFU1UUSW83dbJQAy6yq9ThNBHiSw5JWzqPiv19cxPZqJDDM2FAEPW4tM",
  "key2": "35buohyKMLjsQePDwk77NhqxBtY7jmUN4od6JFLJxHhLik6a3Q6EzWapo4uCaVMK7Yz5hX3HY8vK5giksBgrwe9B",
  "key3": "4Qpb62Hf6sWE53xMhqTqw9Pi6UqzDfAgBe7o6414vEszRFxNXqdmU6hbW5qc5sMqkzyz3p2MFC61duWEKCNKUwTF",
  "key4": "656GRnfuhsES6vvPi7388GCYonWPMrhxsNBBL27TkwXopmfYuz3TVvXy2EyUHgqxBDLYSBdjyEmTAENTqd5vQB6E",
  "key5": "5VNr9JTxXYyPwrDtgFHepHhFXNAruGJh3WsSo4VjvWKQcnzd7FQZvvMX8BbcLd4ZiHw6itiWD2J88izJHqiHdmj2",
  "key6": "2zxNkKoQ6gk8qiaN7vJUW69vpjoivDEPMgtxZ2QzjL1kfEvBybrXKp94rXnsPS9XquWWRy86WFf28y9ctrnWA1wb",
  "key7": "WCyyNtw2oy2qjo7QGwbwRxWEbiQ5nhPcMwwxdCPL4eW4nFxja4LPYD4WQRzuednwFwaWExGFTKBnSxGH93BGs3i",
  "key8": "2UKT1MZXoVutYiT49Uw8D5s9qpsztmshduViY2uqrSQaWxHFe7uGAafBUe1wqmFjZAf59HhewZmyvAZUXc36ip6H",
  "key9": "3W5aRDnyDBCzJFPkS3Ry3DP2QxrrvdwxyDJWy6yBJuBmD2beo1vvhMzvesh6DZjmyStY6fYtYpejPDLztDKztt1V",
  "key10": "5AGBMXRhTSN3PQwSz3GxnXf6dgJXuxoDFw2Pdjaxcf1C2UxMeNKtQ1hXR2C5zetzvjw9A9XZZcPS3QT4XodU7p2J",
  "key11": "3oNgy4BAd8bQ58SrAsABU2HzQXQUTqoAq8mktyckMApASXH1v8RpkrTfrr86jsmZmfBPrZHYuxYUEZ8bLRxmMcZ7",
  "key12": "ivAhseVWwpg2BdS4q6VximksuBgVhRtuS967e3p7fYbmP2oFeEgrVMuA542ZaamZgdfajbUmRpcvJVenHq9cA9S",
  "key13": "4putscz12zx6a4TH6PCKLdoqmC4bgoDZvmcceAiktVtD3Y2NgrnMvZ1itSFsBQqzGQxNipsyYGGBqoE2aJSpcvox",
  "key14": "3d2Z9Ccq2jXduQyfWoyZKnzcUgZtJC88d7gdP4XJ2FCoqUhpkw2KCgCLCtnwkhgEc13PtmuSzJSeLoaAVmjTfQj5",
  "key15": "64HZdpDtHJEq9jLPH2tq53xkjqX413uL2Ck7MzMB4XS3GGo1G7aCxJkjaZW9un3vnQE5V1K77NvykpVAAsjDPAKd",
  "key16": "3s9sWM5kqpuhQiEuNMJomawttW76N6tGZdK2YW9ZzdB1QygZtLz52MmHVRPp9busvdh9Jq3PDqVSBVhzihqG2Hhm",
  "key17": "brK5LwXqc1wHjS9RGqKJxHcE8SpxgznNAUdc3LEzKwPSKuFzSfxHbpLffyVJURsFVPr53LLt99sX5gwA1AEAfrq",
  "key18": "5WrpnbQKuYJFxESc2iTrPTkCbF45LWfGXD77wHwSYcfmiQT8J2NVEut57U6egXCKiBwZAoLZEhtiScieHL22jQJs",
  "key19": "5WQfGZoUo6Xmwxpu8G9wWoz4JaVCFmyGPsoAZGexu2ZsA23KVcmcbPP1uadY6SKZbj3GbsiMQDsfLi1LANpR2hnQ",
  "key20": "L3mPtSL87vz87n8JLpWLnqenkcrFMq5xwvFPBekemvXHb5d5S68fo8G4jD2AHqu9gqUUuUUrJ3c4LGxTHa78sGr",
  "key21": "CVDaCPmzr6pB7pqkRDuUB6XCwhyAEMg3V78mXu8g6e8QzYgT6gBjK4jPU7ERdMtYuTz115Exb9f7Qyd7rpSPHbE",
  "key22": "2estvhJpnxsqaGRMxWyDk2rzkQthzQ4NzGMHk3munqKEo9Gkn4DL34mgSmk5M3xQN2WDsKu9HkVTNducJJQgZi8n",
  "key23": "3455niRouaTBpQRLfm6hsb1WerzY77n5GKsA86dcGY1iv1GJbjXFAypzJUuJjDTpVAyKXHeyHtcHqWnfWTkDQgSE",
  "key24": "4VxuZtMB2HLS5zUvDxC4QAuUnpS4SZuJ5Ynn5pzYsJ2Kt5qHKKWe3aK9qmLsVjvKdEsaqoQSKcvuPqpN8PXBA13R",
  "key25": "3rYd5pCcfTqBQqinM9gqsvzmNsiFYBKeE5CP1UW7vnDtEbQWCSxShd8UPhm6mRbp1rzreEYnwpcs5f5qii4oUXVZ",
  "key26": "z4jYe6hiLdhNM9JtdbBVcy7Cu8AvaHbrbWDYHnwvVQtB23yLmdSSByHwsZ9UrGU5q7SuW27rczbUoa6nPxi1JLi",
  "key27": "28L3gh8y3BsFJmJswDbazzw1VXV57ABsvKMBkwWz4JSsD7xbGYmrbrnHxAL8XCPReYeqyoTeA2ssjCyrRFourqUQ",
  "key28": "2bNxWzayptsgoxaLAfaB2Y5o2NuAugpPwwiSzYykFYzUU9k8o1aUrnoKtN1PgLMfJh266QBtQjz4qGVQo6YXPsxE",
  "key29": "mk7R2kVDFgACnTgouWcG47LNDbRyoRbn2Xh9Vb86Dzp44Zj7unFMMy3EdetELyW7LEBAhzTqFFRm4CSVobVQhHg",
  "key30": "yRAETugmRvBqW8YJq69D8n5ocvBWWY64GntU3G7cBuY1i726j4cZqG8Z1mU5T5W6mYhDhDbs7j8qpXkoemtTt9r",
  "key31": "MFzJzEbms8FHhNPXAvUDCdSozZG4kqfpAUqGPZCfiNbPWx5Zz3ozDHn5Wzddr4dTFgsWAASnMcGTC4gjp23U6RF",
  "key32": "271stwYPa3fwTu63DqwAnZhie3yDZzcf49yL3Lwo4qTtCEtLX5TKoW3jwn6dn86Psv1rA8x2DDfXfhNurgumNvaQ",
  "key33": "2jFr5MckuNZzGmffAj1PSyr7tLd9A63y6jHw2YnXkqFHgj9JudF6ojc6xWynvVDophUPng8KRS6oFAisGBQA7oPb",
  "key34": "4qZJYGFCwhGMh7kvRqGuRfkNzn2hxEgJqFdSv5vhRNeHX551fMqjmKE2DTnpZQx69g4D7CX2g1JwyadQ7Q4gXfMT",
  "key35": "3ZCdfLXEMcovHLwYk89tvM96ZFasRaWkBV9v8Qcp7xt4v91wjr7Wp9MaAexujgVZYxqgp5954dGc7QUctC131Jk2",
  "key36": "3kY7USaE6DDnNgKB53UzgVZKVKmwbxXDK2rP8WtG1DFKSX2zpkBMJBWNChUjcvrN6DbDLdUrMJKxvN6J9n1jxNjT",
  "key37": "39smfbCN8zPkUEQx3CdfR73WKEYiLgqqmKKqmh4TKcteWLcgCT2iJVchd7oTRj3CTMQUaWR4CEbeC3c4KHVUYiyM",
  "key38": "5A1aSwd5WhS5pvu6ZebinkboZysyCCwCiHbNXUgkA75pxWhStLBRGeKsmFC6bd7hFnba4F7HoUWkoQ7JwhXHCssV",
  "key39": "JUdNqkotGcJzkqJbPM21hK3hjawYkyGhcD8pjY8UveCUAjLN7F1B6bNpdXSckHBL4Sjaa3k32xFdireXYuGXbFc"
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
