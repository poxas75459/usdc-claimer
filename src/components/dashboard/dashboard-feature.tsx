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
    "39QZXcpkXZwPqxfzUZfy7hnFhjUD3xrzSg7TofarBUdiyeLF5kKp6Xdsat5dKKCWEPL6goV2r3SLzGUi2PZwKFxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fTWVDYMTBusKXrFsmUTK2hqx5NJWVRfeqPdFP1GVAaSgajKMKkN58ouDhodEFc9xh8uRYSr2QSq7NyqepgAhnh3",
  "key1": "45eehbRAwRkPLkgko3iKdvCz5u2fg3B8ddTRorXfcvasJg7jFXWYs2N3J7RbBMQsr3Yhvan1eakQDEaBZg97RbTn",
  "key2": "DSoGwxAQbcrdxLjZzm7PvBiRyHCnSrn6TYPkP8tukm9Wr6mbGG6e6SViV1zXn75nRfrL52UV9AGE4hHkvUme5aQ",
  "key3": "52CZCXnVvGErAV5dkTCssq3TDsYHAHpvtLv41bbNhb19eBzeGCFw2BGjht6n1akE1vPGThS3FVfaHURP5HLqF4ut",
  "key4": "5wjR63ixq1orgRTCV8d3fkQAJb43xV8tU2EE4HacE5WzbZMBArUARMUtDzk17CtqhuSpsp4PSrDKfqYQEkGPq3r7",
  "key5": "ctFASNdGGyzjDUrTC4HEE33PWzDrcbbM4F3XhMe53kCWiTsaDA6wymyJMQ1US3kdTC3AgfogZ7mXJ16NHa9f1T9",
  "key6": "4iciPK3b8SNHYvrqTwxVzMpyHGKta8aWYqf5qbxu9GMhLQg8tSw3X4wL4KXYdJcwGPsTLvzsh5agJEHG7Sg3psG4",
  "key7": "2M7kiERbnkgpBr2R4VVnYpxP2RA3899DdZPCifrhh1ebGCGPcFA6PihkCrzNTnwPQUj7KURrDznYsP2VisGFKyWu",
  "key8": "3HgTAky22StWVSoxoqXWiYr2GYvHaizU6MHjnk6WL6TEic7yQfk9zmmgiVrFoeHmF4cLrEivZD58op1dxoZphX7h",
  "key9": "3LpDGf62SAdyDXuiQFv2trukUwMVbA8gXfYNjbTG8hBvmFgj3BEoArL7oy9BmowsJziasEMEDyBJBgqKNnSrCFx5",
  "key10": "47EFr9AZ4h4rPEvvgcHVHWBEuLQhPVr3jhg8CCywSMr9sGf7Jh33SJnfxggXtQ9oG4SX6bjvWLRsmtfAS8KnUFg1",
  "key11": "2hY79ewVjijbtrpVAFzcZe1BQCQKesoc9j9T5WAhc3NhK27nZWMFgWkZks3L9pYkUT5yGtPrcJJ7uese3xe3uB1i",
  "key12": "1Jrk7ioW7QSY8fptHkohjBoTzkR7LP284isbUpogJsUyBxvE8PLBvJ6MPrZRJjd8Db5At4q5gRqa6KGivAtoBTg",
  "key13": "UWvor7Tp2iHxKdBKTMPL8RTDfuJDX4Ygxk2Vdmhya7DbVmCAzq5toWudujAYerjBHmbcjs1uFo6sYo4qnrnxr2J",
  "key14": "3FGYfsdBcTMLZ5XGoRJRt2sufnooCxoTkHTLxkocinNm2u67FKas794fqYhxpNSFLWWDZ2e7M6jaEuiXLCVYDP5n",
  "key15": "TQU3P2eg3XX7i7SwN7JkefAjXAwZVq4qMmqC2z9Agb8znFBhAu2MZh5PoLsYFcPkHRR1eSMLBSSi9wzmo6w1VD8",
  "key16": "5XikDTZ1aw4ai4Hc8AWbXf36iywdWcwQXNLeX2hY7zfED9W7cZufNgWvHJVfCAGMqDqviZ92YpHx4UVTgJozre6h",
  "key17": "2RajHZ48mZ95zdq7geWhZs6a7cwsepC5BicdiowtvPirk7XbsRi9Db9Y6ZhoV7XdU7R5EXD4JKJc5aDzBs466ARB",
  "key18": "5LiqKCauDCYaQPh2hNcYS5txRuHtJUv1JVChePzxfpxKpqucf7339r5cfNQ4bdX6LENEnsXo4Ve9y7UWUD1zHQKj",
  "key19": "3ULx422v1YZBiLh26Jqr6LWxnMHLbeqnbRTNjo5HwJd9itr2TCwKrKsX3bxkUVgavpXy1RUhJ1FmJBf3PCNmHCfo",
  "key20": "4kMFLGfNk2oijY8jf4DR4eV9kxqYLi2QqSFFj4jQcHQLKZw54TcjA6Xr2obGMREkijA1Jn7aGr8NQ9PRQiCNKrcE",
  "key21": "3cSv6NKrzADY55ydbQhx4uWpc5hX7PZ7fdjwFLch9hSXqSq7TGRVKMMahHRDLHwtmL3sr36o7E4HXnmbkQYRGqtL",
  "key22": "5TKLrSqUEW1mudJWZxEqcYJyrjzHFrphQBUAwaAsVgYe11CWSG2p2HTSAa68HcRVViHtKfv1SYdDDrW6jopqX4z7",
  "key23": "31EATV8ot1anh1zP7DmcbsrxWmXwJLt5AqKDnCSRDe3FvU7BvCQFfvHqUtQSsLugNo5C67LQuAaMS6zPRL9Mbw7G",
  "key24": "4mohXwx1X7swCAzGaXSt4toqCeTTjKELag2gm4wvTxaDEKyJfHV7mJLA9BwdriLtQiuqhvNBjDBcfQ9TXmeLLXfA",
  "key25": "4yPNujZnBY23qBNZJJjd6f53xmzHySbke7v5qtMTRThMdnFQMh2trMyM5cZvant213Jst8RpVb7GkR6j1n48FSHb",
  "key26": "64RpHrj62gbx2c5xmES9t1FzohKtNJoixibFZ78EndVgh25oS8nEzBsxMBhtisM54g3yWYJ6MrENomeqF2xjKBuJ",
  "key27": "3NW2EnHzuxQinJaQv83pDJfRoxGyJMHUUBfv4rkfWj5FdUr3itnXjVBuX41nRVy1oQC3KRh8ZE3unke9SnxeKf9s",
  "key28": "5ez5F1btMMZ9qh8HvLcGwxVNRontGxPS89uiu3Ex1JsujVV4R1PiHh72yer15zc4zSjYTJRh648sXX65SPt1jGSi",
  "key29": "WDFRAvt8RTVvVXyWouGFHGYjTs3QfZWUiGkaphu6svUUbHL29FvgrCgu7TxPxE1DNx9tPHUaoixtAia9aaM8XCt",
  "key30": "2a4aNqJm6uEiXxZK4X1jytci24SmnqpY7HGknt51qjFY19SbDaDCZcWo7JBQJxxehSaBJiwwqYpZZ9KNBgAdCqvk",
  "key31": "3YYvBLURjSkyGKaNiDdKBzssFmBNgzQXzGcywJBeaAxueVUE46qbuUMyoJQjJQzvNasD5t3LkAcXM6s1tM1DiqUx",
  "key32": "5rFLDGBCZjWTAKGRsrtBY1HD9eKrrSb8WhQ8LqyyUzQVUSM1At2GHrEw2vqGitkR4ScQTC8pDyxhZqk3urjp11BC",
  "key33": "3XpjMQX8i2p1jz55sM7JSZcqiNsukov1nkvC3rDkQAePXzikBihTGGhora5Ftk889wM3gb1X1BRrXcfhFDqAh4mH",
  "key34": "3qPkJTAJVtZRkNEd2v7fa4Zeu8imK4BGfDRHAo1mbaMo6g9Rh7RjaERsbgF7ntACoEtVaujqkf8cf41pVA5nBASk",
  "key35": "2BuhMUPSxtUoLFz3jsjCPbqnmvCgTgCos91AgRSHssskZsQwPCACSJu2o6D9212XZioMrjrnDcN1cTa1jHPm8jK6",
  "key36": "2KoCBVM1biFX3SzQwKiq6N415iBJ7CmzzxDn9jqvbYEfgwA9WH258E8umh2r7t1uDstztGY8jHYDbBAcB3zF1KUm",
  "key37": "21S1tHN9oeA81nFYyddgDtN4YZwsQUB5Ld16Ue91aesGSXYktr6MubovHrxdQFK2gjwmj7LTtXds5sHZVXx4q22v",
  "key38": "3mdjQwBWtCTv6XrfWv7geaba2x5eZP9mL1Vosp8YNkP6Cupt8hEL2hembap9nZymAvH9jTJS6Y8bLwguoGjdvJeM",
  "key39": "42eQRWdaGhHQN6eATY1SQoUM6bD2QRjmfojuudp3RNHr4iYZ5rKpT2nbV9o1YErmcxxW5b7Wo6spNeA36bCSi3Pf",
  "key40": "5CJphgCYTRTcF8Atqc2csDbpkaxAXtXpmdSsstLMCxetpeCs2p81NSMNYnpa1eh5XLBbyT3PBXrJ2742JpJixMRr",
  "key41": "F5eb9fhstKrYDakSwjBmB2gnuFw6412NNZB7TbkPyFzpDpHt4XHRFZzcnaAaBZB1W1vb34brnvuqQXQfimQHHB2",
  "key42": "x11quGYig5zc554ewedeYxB7kx2RAYizUfR9J4XXRCfvAFPA57soh6P4nh3MDi8xgYPBaFyCudfFiX3PNfF7Dgz",
  "key43": "3kWnR9rU9LxJH4pNZhTcsnGDNskRzSEmiWkDGExLVbrZgFtiDnTvhKDw54YU9a5LeEvNPNfUrmkrE9ZBZ17U7j4Z",
  "key44": "QG2HBmdi3eWUAvCNMP3NrRwF3p9JwKZYuKqjKYJJR4CA3GkGmuAoyW4bTqihuFkYbngZnniCkVQbzAg9sh7aZuV",
  "key45": "5dGN6zXkaqYJd6yQc4XaMX6Jk6hsq7Tc7UgRfCy43w4aZ2DHWixZ4dLPBCDYkQemXgZyyvPFgoERyAWaqnBMXfDB",
  "key46": "5TNYjYSCVsCfD39yxLUZjkgBxGnFDaL6mQVBSz3S3c1gZm1yzcDYu51XRGYetAMoCUeWZW6B2bGudLo84VbZmDFn",
  "key47": "5gaP2EQCEMwmkppTjBX6z6QAzJdzdJMkc4tfCGAW34b5jAMNHRuL7gYTbKgcQZzuoYUjDNU13rwherFEUAUpoBkt",
  "key48": "3ceHT2XJWB3s3XxeZQuzfhbayFR3ximQNA6a1Yf4tC6sLP4nGr9socthXvsiD7f58xsJR9d9Z6c7zXzU6Ctz3Dsv",
  "key49": "5u4n5TpYHxtMQzoRpqF7RQKL23C3EQZKLkUCdhpu3FvnncTajAczJDm5N5Tp4XVjy39eGJBgLRS99RfRWaNCpVhu"
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
