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
    "49K1HvL9vvuKeJCL9fBsu6BtBG58aksvHhBcZ8FYVA9THeqAvKzohTkxKBKX3aukCpRnYn4einPzSQb4MVT2yLtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o6cVddVhA4JVxc7azzd5pyG7y3xCQXKNx1YvaiZs4UCWiB5NoTxjzaxmhLrmbLntFg1aFZYpjJSLENc33BavJGb",
  "key1": "3LBqjKyqC4T7pBiwPS9sEwB9qxwdrZiX9zBSFQ2DmEc4hnBYuPfFqhf1Lf1iKdmprij4Dw2d5HR2BQmGAuYay5QU",
  "key2": "2FGQQhiz6LtAG6zHRLySScLiiZs8Q4kNSmzaMFTfFhefWFSQiDL1zK32Mq6G9vkSJgfSzmThwhnU7mH9rdPc3QEH",
  "key3": "4UdDDAeGi7NgFpRWxfuGzZXcsobhtmw2z2MugnAQFjkFx8YBHnbEYpNY27UaC3oW3xUwa13QddXx1ANKs4qqsqoa",
  "key4": "2Jgz94TaStZDR2eMp4vmwQrFXFUki1mhpm9NJKcwnXzutCvBHRRKzgT1QU1DrEXTCWDTUd5pyD4Ei5C5ktXrrci1",
  "key5": "yNPGzjjExqYo4bJxGmRyVAfzsZSiiskunyCLGEjxG7pg7jsHS3WaR5D4zTgPYQFQNy2FUCS7FTBuVQTBN5ZHPXg",
  "key6": "5p7vVCqMPRBv9cGQDgxzsAWDdf68geFURs6sXaoQyjXTSt1aVRzWjYVDqKiVVU131db57mP2mjH3WrAUbDsCvE5y",
  "key7": "32qN8ggJoF6mCKunfUgectAgubVQhLqABPeQgDRPH7LELKzEwNG89YQsrUrjWxAVdZdMzrAh6S6Wx5wwzTpPNEAP",
  "key8": "3yjNjZEfzDEFL9ctY1cA5apD9zpKb4nmpAPDPTcTEG7cnANdNvLyvJjKrfxxnZhHLRW9yk2ftCrqYHhsjaQkF8iq",
  "key9": "4566GeS8iWbZWTAkNraKvics15k6MWPnXRKBrCP8BXdALRscFP5swVvBJgXAoUGYKswhJfVwBaNa7gYQpcimcZPs",
  "key10": "RiJfjd2v6NUhHuNasPK9JH7BpXLViztfAZkprEHCYNR1qW6VfoSoCYW9MitUQvzobrNRWgPqRWy2XpQGnAZUuJZ",
  "key11": "2iPUdtcsrbuRvBAxx9AirQqCnpY7d61FMrCDekFq4r8XoKFpEjnddvrNC3SkwdzZFiwadnSjvgjaMPSJp2BbxUs5",
  "key12": "82oo2JDzyPR3Xm2HnzAHuvum6NjBmGi4hKDcMdSQZiScBPhrBpK8tWB5sbhRDUoopTeUrEkyK83azBR4ALx1Z6M",
  "key13": "4wgzigizue7h5JvZgiyfJesyoCaiuAnnh1gHTjkKgNSrpEyeSdz7Gj38dMu8gENoENJ3jx8jEn4bhRjX2bSZSknK",
  "key14": "XVAEZ9MQH85bsason4hZf1JmQ3DH1RdB8YK597AxAJrEN6doVct4PuhFdzjTLoqgXEoiaJUFZCSiqhzA3soW9FZ",
  "key15": "4pbeWReiXyjVD8VRfmmbe5mAx7rwzBSFnLmiwY5cJW9ZRQymA3Jz4RC1ZACShPts4oNka8CFsFmxCc3tL1C549g3",
  "key16": "2j4hNjW1YvSwnwJPqfVf67CEeBTESyD1sGWBiSQZAJG1Xcgek5gZoYaQUubmdBVnf5oTAMPMVhve3jZPrEQF1KVy",
  "key17": "F3yGpfmynwM9a2M6RPPYUUotQ5d6Kj3CQejweFP7qGaEwBNqjNNmwL1UBqFWf9HHEcV5sehNk6c39e2phfDU48K",
  "key18": "4aj3Hp77sQQzqoCeXJnPMBZdWt3pDGkG7u2o9eZ6B44uTdwXcXcf9fR6Ja6HXSZeh8ZADbTbxfaUEr5pzWJ89W4a",
  "key19": "zMqFG66jXoeB6eqrf4Rm3gFRhiR6LWBKodAcc5AKoXUWMxqQD1cjMhd4sLzfuEumwZo48TB64rif2Y2vX6LXb1J",
  "key20": "2pq6WDrGP7M2BfDK9mrBW3HpVXAZJ124shvsq7WiXPXZH7QUCYyGdBCpKu4Qb1FMTxqwouawkphibkZnsYqnJywe",
  "key21": "5t7an6cRimZMDwkNypsv1suMr1ifJYFzK6u29c1YXzcn6PEaHkUQpLVc89UHKeecvUcBw7uTE9inBSnjNPNFT4xV",
  "key22": "4BW1uee7z867FXcqenu9bnaDNxJBzGwpCvWKrvqPw17SrSwmv2PPtBpLN19g7rZSd31YXkBzszhra3ZuWSd5Uh3P",
  "key23": "45Gh88R7w9jmndVAxADMTB36UY74MUgfLZ8eMi2jm4kWuEZnrUzNecWVAcdJG86XHgonCeDbFqrW5xQAvQ3yGV2S",
  "key24": "3AvEfdzR8LiCPfZApGPJqG65Qvrpx3eTHYPvy2euNphu1ARJdaQCsrtgYYdRwxc21ZV53D9654CZXQPXBFQJ613Q",
  "key25": "5LzeWY2JHjBy4QYiJUXSKNnUbuQqPnejE1hJYPSS67TfqM2CdVhEnLe5b94JzH19Ty1RriT3kN9AjbARixiyT4ff",
  "key26": "2GFt6dTGQhBvWRKrYmYCGuLkbeYz3tXURap8oM9iuzqqYQaEyE8aDZQMziDMcR1QoeL8FY3jpkZKBjir52DCmgm7",
  "key27": "5QDmRqQ7M1GZ3191EzyifW6xeWxgcKMt75tgU4BNrKgajRia5TjhjpTDN8rd5pwn4Yywp3T5LKAU8WAxN1Vun2xM",
  "key28": "3XoPuqmksVubA8JGGSHoaznNWJUBp7sqYTNxSvP5eqMn7dwJt68BpVyybo3NFno6xkk6mTt8ZLKpXpCgb3YLhxAV",
  "key29": "2b8gdse3MTe11oHF9NG1z1YGyxEwj8WtVXbCtutakyWHyqusWJ99VSZcBUpRe9BN28QMeGB8Zexp5NP2drA9wzK1",
  "key30": "5tsayAhUrCgAJhnZTTC7UV44M8dtj4wMovsxV6Sfnq9CfKwea1XRM94AUP7sj6BJfStBRvuVSH16LKH6MVsg7Cn4"
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
