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
    "4XSPBB5ok4J2bNqw47NoJSUs64YXRFxNBMQ6bmPc3KdPDyb7baU2g5Eu4GcdwHBVq8X4E3nRbikX6qMwN2M5a7uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoFzLN2KnvjuSP19wiEC7wc5r19cE74gra7W5Fk9XZNnmPWNN9j7Ldr916GAxP5k4GUAYhsFJAFFs4gMBJGGVSZ",
  "key1": "3f8aYe4BrW8gg6nVdYPy68hYY5UQRNhwCHbLDYaLnsrL1LFnEjZwBDwKNYJPkCb5FPeDtfqC8XXyWgUHNiT5SFnH",
  "key2": "FMVnYZ9XeWfHi4dgQG9Yz5g63QoWYK2jjbUw7nAx8nGGfa3pSQJP8TZbKartP7Ziinu79zRr3g48HQemo4hsYRr",
  "key3": "4WvDXEBRp9LXyvrK8ff74a7RrPoUnS6wKWHyssx4Y4a6ytKFaNnWv9ZpMsa68DVEsTrSNhKoV52XQGTAjH8NWkY7",
  "key4": "9Yr5644xF25oJ1VDNLE2VAyuqMPb6wkFDH72pWJvu1dNhHNw5JdLBrjVpgzLQbeGPiN2wFei4ZJpZmVkLJkJMgF",
  "key5": "4nu2duGR8t3iEybwq1rEqLmZ9oUvaxQnJ6uPocC5nvNNDEuRLgJ53HZUXSa9xXLQQVd5KTcx7fZHAyg4n1kmLQA1",
  "key6": "5tRAutnhM6va7RNir9oFbA8N6Va1cRvpLmWG5oSu54CSM2pJrX9bdLn3cDhhuHbNe7tnGLeRmckWcHGQzRrbxoGD",
  "key7": "2q8vB1hSNkQ51unigJx31szRU2nFUookMozR5adfNBaMNmumh2KcoQzvxVbepKYwnZAHRxa5hXJYaUuvrMer7FKh",
  "key8": "5TdNCvUnVR4R1AMujdShemSsvB5hqLaz3fudcpKZR2gMwGiWrfXvHzn8LQiDE3x61HHF6fdPRSuq7sXTJj6hV1dh",
  "key9": "bqw1RzjkfoNi6Jwoy36TTwwfEeeWiLW8jmwedYUqWJxj4kiK7gDsnK4fB2nheHSEyZqb4BWHVEiqTZbkJVaTiE6",
  "key10": "4YvQQHL39S3teunC6tFBaHiWEQthWjXirN9xHWUWf6bARg3C7mmxM4gx6xd5nswPXE7BG7z1jRQXT5xmhZ8ehRnK",
  "key11": "2pt2wBzQ7HYGv3VA71LhJgERHL9atNtijjCzvy5nwmifQNfpSYURuwkjCN8tBtCp1fJgnpNyrquqqfo7GHmK1GqK",
  "key12": "2UC2WounHSJEtioSL4b22Dg4S5y7Wio7CtMdttQD2iBManzqs8iumzsu6nntgJjp6sPuw2tmrhrbTMz8XAuUeTCQ",
  "key13": "5VEebwseFJtQFcp6JP5bp8C8gPHqDWCperowSWcY4V3cHh3focLEBD5A7imdYUC9cna8t4sy3Kji9ukCLFDXqNE6",
  "key14": "xnhRsEAPWQufRuha9zvsFWTmwMW1hmBY7G9Dddv1DoAwTy7uWxsRmiNCs7yHca9yjcRJsAbr9BmLrckSm5i3XNk",
  "key15": "4UHdzfBoH2QMJy9wEPiRKbJguRTm4rgj82hApp77XeGTaWiViWURkYhi8XvVfdjDYroVCck9SdypJDRQhgpa2Tzs",
  "key16": "41G6Q63aN5tQXcfDnxtWAGGVHjNYyQycCFXBy8YX8KeC4CViVY43HVNjcfEkCBynq8onjfarjoMvB2fPqbgpcRM2",
  "key17": "2DkmuiXftyztq2soH94EpVFXJXMgPR5zjmez4a6QwJd5gvWH3YWQR7T25TXze7D1wYry8ibEyF1CE5k5uVVdhwcd",
  "key18": "2dxdHiLes4fqosjhY41dWPMstuKEAfenxxVsaHZ7gxbnJEQXEH824shB6YS7E513F8JVVZCy8CD6SkK5qvofymok",
  "key19": "3ZdRuhFhr3sUMv2tbhMtbYXdMLUq2u8WUX2CGn9HoQ4hJQ2RQRtU98P6GjQtMw2r9Zmz6KVBem7WjFgkRt5Y85KG",
  "key20": "31a3uoDduBjJwaJsm3HWiL125GRHBW7X8JTnfrneJiS7TAWj4qVgJKjuxGUvk9qYQt985j7QVLVh3wVTGwHANCKv",
  "key21": "bWsDQe3DtiemuDSMq8c4c2crZw1cKyeLceFjw3bEMwMC98iMjTR7EQun24PJGXqLYCHg9tqDjQBruzSghSfdyQD",
  "key22": "2neQfFH11pffyXC8wD12JKZHYB2Nu77bgQuYgC89QErcH16WYdWLxVTdhDdogHAR4FoRZ2XNopkJJaef5PNLxezy",
  "key23": "4TJ5DMEweTeLo6FL5kFQftvN6dsDwMZ1wV1NPi1fm2QLL4RpGm17J76cYP4Bi6QgKDpjUdPCbQbBWALq31DqXLWp",
  "key24": "4K24U3ETEgbfbGwjqqfD7GwPv5wZACfZdkgBrpLUq6L6DDfnzBG4Jx7tbwbjjBpPS8gwPr5d8EyTowE4Pqsy28j5",
  "key25": "2XysyDp5uRBGaSdARiYRH3pLSwX9pCtYeu9ndUJrduQL8iyYxz3paymKQa9YvjwxVQjBMakwKPTHKtnbatRmRMXC",
  "key26": "3g5DsdxsDKFgkHosSLRFKYkeE5iezr5VkT15jSzELNagiKw47JchipZ3S5QBithKhBSoSffbabp6UnDboDMgroxi",
  "key27": "2TqTFcvKN6Rd4wEQi1arq1gbKGqL29Msu6PSPjcytXysJ5AdHgV57mbu94BFfBNThUJWrSSH4xgbDkN32CBdPK63",
  "key28": "5P2NX7jkcb2YJx1phoPqRB51aaznDUeABgp8mKqUsbtfGD5BggGUB4cvAYNnaa5avcFoYFuDPV3G3jrTQfuogs2t",
  "key29": "3ZYr7MPyPfXiAV4uHqPGiT76oymxFGq96qm54kpg59V6QBvJ6AnPpA4cMEa6r6nuunUTyLzbGJta623Sgic4Qzoh",
  "key30": "7M9WPAb9R5pX44B6Qpij5qdFERRYS22gVvuKnKb368fQDqn9mAfVFVrMHuZCBcSPMSTEzkviv9z3UbMzPJcADaL",
  "key31": "67ce57UaFe1CCXbRHQhGSWLRcH5HDnVKSQiXqKGdJ6u4USggzKCXb1cSJEE8bZ2HeQpiAcaMopVNgs14CTRgs42e",
  "key32": "LxXNudfAZfTrZyQn7SRBRDumQu6J6CT5s9RouN8CbQ6teFH6nFr7rMSMUQ5WDNK1Cks73ip6QBiK34aRwyadago",
  "key33": "5hjS8yQ2RoecwLZvctbVYmHM21hGpiqLjqdJCTF8yBkKfNkBJYZGAPviVS4hTTeXvTPD7HpwTJmHoKmbi45PfCV4",
  "key34": "66KnabGwqhUUw2qqC7URFu3HsmR2SR33teXUhJMayxuWuMKYtSeFsJkNxFczAShuJgU8eeGqRqW6VXsF5JTNs5Ch",
  "key35": "3WPN1hNXoGEA8PaWiNVDzN2e56mLbibgYtkHC6YXy4vG2fWSFLg2gAL5LqKrYp5qGobhh81dKzxKBYWnee7kt3oH",
  "key36": "3pacHbLRXd3furCjxk7Q8EeknmFR5eFub691j45JoFK7XWx5esPi4pfXNGHKbh6RzSRFykC1XDGpBskvvdfY9RJy",
  "key37": "4kHHxM3MFJsJ42jdirNs3mNVy34NoUqEq1JT4zEyro8UkBQaQUtZtZdHC3D9k3K2ejjsPqZLLrXSzu8RfFxWXi4C",
  "key38": "4gX2Poi9uiNEa8jZhUpPNh386KDZncoMGj2bA3XXDvpa7Zv24bg6ZL78b9zmhPahfbCBMLUZ66HA8dCyUMA83Cko",
  "key39": "5WeQ3Cpw9quUyAdSxBi79oZkyGvqgqkZMCex84J2iE8PRw1ov7dbcTWDSg9tDZABXpM6Sh38yMWTCbGzTGrVXQBX",
  "key40": "4jv4XGyZMcKJeeoyjtMx1rVLTheopcUqn1i9ZC1iv84GNKB7iYSy7HCUSTmduoqGLi3Bxy4zcf6QpHo2z4wZbZJL",
  "key41": "6PpSTpXFwy49vFrFJzP7NU7t1Dbb1RxYH2Qf7GhRnJX41MKPBsa4J7o2K2yB7Q9e76n5q8DbtVnCyZxUEK47gbA",
  "key42": "VbjQKRYJwHXxKcfSZPfgTHYLhHZUikRW8aZXzmiDQYhgVmQxiCnMkSgmDJqPs3qhyaMeNBckqPhtnPUwP3rQaCB",
  "key43": "5bSiR3VjKFrhSVnNPoonKFbnk7fH5mD9ZK1Gm9VSL333kreKA6Bv9rj3Ew3npUVairGYhsq42iyPXm6L8NJeWdU6",
  "key44": "4NTGo7aZbTHRGngREei5R8WKm16m3DLpTXxnuicitr7DutueNqfLFL4Qc2XYAUJHY5r2oU8cuVnAFtoNiaPk7nPo",
  "key45": "416TL79yAAv49Ty6uj5WP5irAnKnWeQoaLLmvCo8T4gaCpdGw5XKDVxHBPLX7UbykXLgdNPdP5QkTBYbS4r7UPnB",
  "key46": "3t1MBq7921B6LMNkDqjrnMGW9yjLdH1y3mE4Zpuo6rjKBNPtD6dtJs2eokCfEuehrBCoyXiT2DnVgYEuhSMWrp44",
  "key47": "5aXJLRZBGxkANwSC3WGip9bkZczvSUNS4hmTAqZ2VSvS2VaZHYLNF32sPwDywnqQYnxYXNBxkU2auaiYwZdpKt8F",
  "key48": "2zmJcWPFd12AYRygLbvtx6AfrvZWqV5DZhkuGpoHNuGDbSZwhw9aMdfz3ETAYi3zYZ4p6CVKa45hayJc7Ri2aMTP",
  "key49": "4xCNaPZQTrfXTZxLf414TtfgH18U7LpZzpQRTQ3F6G6sYnMcEScTBtE1pX8ZnDCVu1xjuM3AZrUDZAm1SVhq4bkp"
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
