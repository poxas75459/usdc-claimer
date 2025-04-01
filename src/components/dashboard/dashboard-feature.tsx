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
    "5gmB7QSZyhD6TcpyH4ctNBXYTkChbRgLGrnLmqKWPiGQuBVrhyXWQ49xRUHwCkNpMnnQ3iVAZGMNjVwBkboLykJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xfmv1Fh6W4Pomwd556TtFdxbxYYkyMUv6tRmnSRFYkP3AP3DWAX5A6fbwNZs1dhJetbRAaHx7qZxv4Nceh9Ga43",
  "key1": "2GEPsdJJL67sZa3bUHSUUXXYghnf5WuvAHXac5Go8QNWf62Xj3Fe7puq4EuaWDpGF7GnNP3z8KFWWLwUmZZssTFA",
  "key2": "42SDdFgRn6HHxacqVeZbPdMwvPuzdy5LtjLJfn6wPBsiE6m1iHDah85s6jpfhMiqXJ6ZRTEorrZwLkop6Axwka7P",
  "key3": "ph7v4MaYNz3uLNijykmU8edYxodf9d71mhdty9DpJL2gDCTaJ8qdi2SgT9CuTcnNyVhZLH2D4qh1nNEmfwupS4Y",
  "key4": "5DGCQ13jB8YnXxzJJTLQ4JCgjSQS1dRrzZhjZzNRbYAyrEbEyz9EWPvbNBX3vHvk8HJBHSXNRoMgGFHqV2nZu3Bz",
  "key5": "3L6uQPX8Nfev7QT1G3kNpufzTERED1KVasJ3bLccPTGXanAE28FJzzZ3i24S2KL8R7wwguBjKVBDzCquG3eevDui",
  "key6": "2XYaJ7hxq9bW8mSp4PhsTTBvidZHGmfUxpu5fwEgyckP5s6QxA1e91kFvzwzXhjawrSt15V3Y1MUuCG3o1yMgzrx",
  "key7": "48fgNRURkYU2F7TUzZvder6Jw5jLBGsYsVvzhLuTVPSFVENqJzBFKq8DpB3Vs1PCM52nQ5bxt9zvEFg4iykpsgnU",
  "key8": "3ofMbfAAgydnykVTM9VEwqC2z9GNXDdUFHpeXvemePZBjKkiKPPkooxzJGAdXJFtv78DEZwQMDrKcrNrW7j3ohLd",
  "key9": "3f3BghRUGGLvDGWfNx7PUViosmTHfgVssJq5rnEng5XsZbsUVtEZx9WkfNAXdvqNwZG2vC3Y68vAmEhb6uwSxtYx",
  "key10": "FGUwMkNi87KW1vJmDSZoXJYa6QLdDek71yZwp2YbJawWHpFQYy549kaUdY1CfpeffMSy2kDDDCqMm1RMSnfcSKz",
  "key11": "4TqrGhY6pbyXwAFj4ZJ8vKjg8MUqFWdH1GwsPYqr2objSRaT8GnMdV2UpJVocvgKqU4LKmiHULju9ywwQu236zmc",
  "key12": "2nvcZvbAoCaGgSkxmF2jLz2Yyiej6GErWHEeRitzCPMvPpfAt7mTuQ5ztnWQ916k4zCXArPALABQCzvu5xYX2Mm3",
  "key13": "5e7eRaRhkAEJkH22PjyHadXSSc9WujHfx6ZY9XPqzMrHfHv9NXJQMATxAHFptqvckaYcveqCwMZwTbYjKrUqu9AU",
  "key14": "3yLi1LtzaPbrbTLVu1XaeJUp6F1n5ypXRZqQNpjf7NruwVAbfwp1t2bY72KitU6iyYpGAVPsi9vZdxNVBYZPZ6dZ",
  "key15": "5Daibq3vXDzN8dhKUMwPqtbDGp6ChXDrmZoVG3BuKFqUfAxewLfdeZhZxNcb7dWG8hzqB6xLJshx3JMG71SR77dq",
  "key16": "2Cv5hw5RCJByRNHMwoqNfptd92As2CURgEMgreKp8nMpVwZFfFS6tm45qhqy87YGnwYAPoPu95ksC9s7nsiqpw7h",
  "key17": "5UzUt19j1oygJTGRAeQTxgjLotpa6xQNFYFfEemdyjYXSBGny3h4AQYh1E39mBjgUMWJvTJcstxu1ADR2bcpZF3e",
  "key18": "2hwx2h3KwS3WEaDUQeAmTquQAgoSvUtnBrCBD3mV5YDNSLbTv9fZ3FVW69Qyyi39pKgtiCZcZ1AjeCWVGjUsfPBT",
  "key19": "21Zwn2ALz3XLKBJYxNkvUb81JCdWSUTZRumnHRbvbrHUSxt9FNkP37ikLYk3nUKpgWPbkhnHJc2NtcwDiyHMQSVT",
  "key20": "5ohcsVJ9PCnbNo9qi3p9L9BREMgWtcyV1sXqra5tWT6rHE3j1xGXXDRdJduRXi1Z6mQWQ9brFLwMwynF1pv21LAL",
  "key21": "2Cy6GLbPah4hhjS79rAow1e3jEn9jdX6AQGDGJtfvicNjUUXKa1yfkc5QGaHaLDxZfTqrcwJg89NgNJCYGyZaDPZ",
  "key22": "2pVabn6uGSpUGM7XyiZq6S5AsdUnvrxMxeWUp6UX7EmjRhgpdgFqfrZndgZWySkuTrf12692yk5GTqhRoL1QEhwM",
  "key23": "354pFAqnEqa5DjDfrfUcsxgVpRBrU8DxyqJWV3VpCZZGjmY8P4Th6tTQ3fHGPG534kTX624VUD1gF4E8248vVaU1",
  "key24": "3dcQXiUYjS7WTWCZ4BUvv8dmcuC2MEZfz9c1uz43UzNR3rm1Y4qG9iEEoXJnUx6in34ywGoRXrY3hedatg8TZCaf",
  "key25": "4vhaWih4onTHiXGorxejCoNMQb5ji5fALd3g7xQJQVrJn94vNjVZ39C1rp1mgiCFEM6xoMt2wG87fqZ7HuWLZxfA",
  "key26": "5Qm2FKs47j4TuAxFMgcRXUSLPV8QyGe5d1Jidjg67GDuN9dSXLo8TBb3DJzXn3SPkEKbrifUzAnoiMorQJY1FMgZ",
  "key27": "2e3aYJaFLMeTK3BYNFdpzEQoJgmEqLWbDQYANwjGpT7atC2Kk3UyT3uaUa7hJszdqf2iPkCzxDdGwJdVdXWnRxbi",
  "key28": "66n9sRhidnVH1bA1NBnripfnT5LyifDWB7jCTCgnjE8Pz1pfErRc4nmvV4jnzZyyJjMiWDykjtfbsfMte16dMQYk",
  "key29": "5aAUyj8Lvp2aNwFnk34quEJ4YcVjEMz948jC9yfDui96Ah1tgq6SpJd5L2g41wGSGntXNSt7NypFrQA3F3B7juT1",
  "key30": "4zKUzvhwWuRpahmwQUYonmHQFQrZhvUxKqLRWASnKquULoSxjSq6SsryuvxN4DQoENkMuJGyN5efCShVemMSBomD",
  "key31": "5SdRADTH1AKSeaC5zDLukdKnsCuWPbC44UrRA68U6T6dXYFFrxDkm5ECyvY76aL38xpoRdqHyFwH1pQk3yScKQCK",
  "key32": "2jSqYrKzwXKGQk1ZShdmDwRXAVSiSSCp6K7URsLbgm5NGvbmmnyndoc8w7euUzTrddyfLbKD1S3ZGS5LgQa6827V",
  "key33": "3kXURppQY3wG7hQRA5Xd8HMFs8hZeJGa4624AGfGSWyfodaugrZy4cfHuCjPV6P98r2BTZZpT45gkx2dgqTNvQzk",
  "key34": "3XEtbrPKopKnsT9dQxHgEboWmhT8uK3g4Yg1S4i3H7BJx79ZmToX9FbkRzwZnxjdkNQmLZ1rSUj3J2ARe8sxcXrt",
  "key35": "4fd9GvB7RZmV3PJZhszvfJKwp64D6Mz5RzfG9DE8jjzA4j6SpxnsMBtHN3JdwuKLzEegTA7jn4TvUtT8JJX2ctSj",
  "key36": "2j7qddAmyrNgoxxDkTXNzGHhBmhSHhKKQSdgBcdQypDL6fgxvKYuFooR4EZjA5twNbJ8dmWJo1Yn5R9mmfZ5Xycn",
  "key37": "4zEdvf9oYVv9dB5iVNiUuu1zwRuB6bjKPg845ijKgKeQq6t8A2bSsrfu9VUf6KHYWZqJkTvLknpv8vCPs4WbRm9P",
  "key38": "2cUMv8StaiyiYZ5Ly28vqxZwrAnjScnErf1HGyXHxgNg3i5L2K3QvBei8wU7nLNfuybfEL79VqcTKXTBHUwd9WEp",
  "key39": "NzUUzjpLFmmszWdh5L9YW1aAyQvhQV3hYXv1EEEkwdQLERYK9pjthxjX5N6aVgGusLMusbMZEnGaUw5cwTYXi6b",
  "key40": "rTyEfDBNNf8Xjcp76QM8zzrvJM9s3uV4KXs4XmgzLmQEBPENTt2iFAWtuekEXyrqb92K2jcKpF79DYiHeG2AFNS",
  "key41": "25X3TUBJaWrN2hoZGmmqhN9jU2V2jzY2iNi4jgr9u3c2ypKKaELrKHFjWiCcWNXgE8JzbnNQYRYPE8SokVz2aKf4",
  "key42": "67hpgXNDsUHsVeFcw7j32a1pMfynnC2hiPEr4tP7cvV9tqDR2e6AbmwMfamZsRoy9d9HVTeGyXmnTqFiHHGam8bo",
  "key43": "3sc732XbovNL8dE9UmMHWDNSasbwDupoWk5Qirfcv1VRWeMBJFw4vieL9Y9mnTukU3WzYTy7q3dzEsXoBWmmMMGx",
  "key44": "6CoecJ3pjssw2BpTAgMZxBnMBU5chmGyQt7aHwwoMaC7FA7Zswn68corEmGNCJeg3b2tytMVwDS69yp9CNhnKX2",
  "key45": "514kfmeijepbKU2u4RhxnQ7q75eQjUQ7wbf8oQZ3Wde5NVJwrcWJgKdiZpCgiV7TmfB1L7vQ4xnUf1jPJAYV2WL7",
  "key46": "2ZLedE8ywRksR4YW3xHrPrGQSnFeXmaa2QrjvCvZKd3v1iTXi9Cm1SSZUa3DDpBonhgHneQrFHSLyRTSwQJzmpjN",
  "key47": "zstpeShBfUV9RJfqA9YmNDdGYdnPu6kjbFwagNAQRSEbgfSNirHJ24bfq4pmBnFhqUBgSXor5GBmfU3nhZBWwaV",
  "key48": "23KGiFLDBxJXRHRi6FH6Mm3cD1Kw3d7kRwq6tp5cfr5862noYFzWHfNGULCcuahiexcFoBvKBbuHFHzCrk6mm1pP",
  "key49": "678oF1GBY5hECTWhanfAt13FF4PVM5egLgeH2pvM4mmAmdD9ZzQsVsS3T5oJkh6LE4SQDb5aXEqkZS9pKJAN55re"
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
