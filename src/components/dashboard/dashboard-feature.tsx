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
    "5r9ugmSYBu3PAHQAp49b1U7nRCmLvUS2SgeGWYb9rPkCzQp4iDAYbDTHuR8tJy1xATCjcjYGSmpskGVL93WhxgFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rS5XgrQnLskWerGJjTVTTB7b9k8ujFo48b4JsTifWHGSUjZ9oUUG32TaXhkL2CyowtUH6NahLQe1e73afQ7Q4E3",
  "key1": "3zx4aqwM7T3swqxrCHUhVX4qHXqHrdUgWB93ie3Y3upqcgmV2CJu6raqBaXbFwmuuRkHuvRVEAaopvotJNcgnRge",
  "key2": "4dXCi1UEdMTnjBpG1nfjzDcHjYykvV5DyYWCpc3BiGjvFQd8fFfnVfPy2Bn6xVoTC1ANbJHJEPC2WqLwojJ12Wqs",
  "key3": "4RQGQ1ptxLrqFufXhXETsfbnhJ81WeQqTChfnt2ZKSuA39QePBiJuJW3cpjzqZKGJYr1TdrNpTnoCgEb7acy5Xbf",
  "key4": "5w94NX7PqnhSTfzimvdjYXA8dpJjx696KiE9ndkrucZdY94WUGZQhF4Jkkv1xYizW2Zv33B84dtcTtKYXZ4cnKkd",
  "key5": "SBUdi4YafHAjNoG8Fi4EWUfVFqmKDg5DTKvK3FDPi4A3WPy4Gy3JbNRweykEBjJaDpkmrYSRNa3LH6cxwwvSWcR",
  "key6": "2qvT95v7ko4jcXVBSrFBn2XUcNBLsmWH6iV9AsBxF5CCWHBVn7R6VoHsPd3r4nWQHwQp5rARNTPspEo7gjiSN78X",
  "key7": "2EM23nTcY3GPe8Wq1iAoShhfdzzun6f6F9oLf6CxdaeApcb4EcvXCr3QYrtzTnkBkPEzUHHtDtDjySGzJJcis1qA",
  "key8": "5RB96jYwuhgucKbaHejoWFRvsB5Y1mP32MZ9nQo5PxxmY3zVMxLHig7faJnh947LdFYdNQvLUhhQwTXvTM8BrHYC",
  "key9": "oa24TjsdU1b7v9fWPrDc6tc3ud8tHQ5q3T38bUH67PyQKMBta7pC91HstFNMH5WKL2UTwB1PDTirG6GZ3zfJwk9",
  "key10": "fwiYA4hRNWToC4BBP7oaDan9mqygvwkhFtYFzA2USu9d7yQCGPvohT9jkC7iGP4abt7RsCani1knMETava5m7L9",
  "key11": "3TwknbbmGbzFTqkp8t1S9wpRy223SNo51h6SKyUbTjKRgGZ83JdLBC8oCMN86L5pb71nSXTMsunMefqD75hovVjD",
  "key12": "4FB9ztztGY4MYngwZoYHG6GEGaHPjZzH3ZWJNh1cbU3cnaQ2xtv4KvZj16ZWN9Sev7AfQqKpzi1Dvn9wSJpKrqKn",
  "key13": "3rHe18zS4YTHkmofh27JCzmS48QPV9X5KaJBasi8wkdjAZeXHqy4RdqA2zehUWw66zMLCcumJEkow1FWn9sMyJ8d",
  "key14": "61MQdnLX8kmDh7zEaqiEnqayK2iXbnnQZp1S8Yefntg35bD7geUgXiuLkFsC4wrbSwAnUoCgTPP9pho2ViCkZfC2",
  "key15": "3ctWRR33AigkXPhes8CEvcg17MkJK8QbexuWxF3Maz62ydA8H9Eg5Vm2zne9bS15dn5iZmjnWu8foEYnCYGxhRHc",
  "key16": "4m49sRBvAzL7FcpU2y4nDagFV52xByhQidKJYXvbhwDaSQZyvaoBVp9ZqaZCYjdaYRX1bbaJ6hCFMbgWYp7BvyWF",
  "key17": "49gGUAiF7BgimcdKCYVpWa7PJXX1Psm5AtQpXzQiCRUfFDxJ1PCjF7DBtWV53aLadCPteaGigDrd4G67Pk6YbaWu",
  "key18": "4RE77cQbZXVv7GoUPhhpPmKECGmd4aaB76c9LUSFXcVRGT58zGZN1QULJu6qVo6DYDLQDAU1pGRS2f3i9T9KQGKi",
  "key19": "3NjvagNSiSsUdyGVTz2hVsgeWoacQ2gdPGNd92NBE3g51jhs25enAppEERe3tYvnSnFrXNCVdc8Hqqx8qQFo3WGf",
  "key20": "2esS4rEP8oqdK9PqF5n8qyFweVVNY7XauunQoKkcUx3DVQQjXepPVS1Ra26THaTuwWnYABYEQLB14C5eeYFCUd5i",
  "key21": "33w9crgCZdLjqovELebvE5pgYH24eUASZCTzUbKPkTV8LUS1BJkCVNKdrCzNbNHjdsPp38RYypyXB3WPhwMpLUVx",
  "key22": "2TRpx4J5PfEe4aJTWxqvjy6kZg5kaVcpmAckxpgKykNX2SaFztnDFzWgrn3fBrpR8Vfs67RFowfSq3Mn6Rcjbhda",
  "key23": "3ATB6ZwmFCjVutrsYwCRaxmDEexDd6qFzPG2REpnJq59dJZMznNVBEbv1mncecoMD464uoE8VCDFu7CywaePerFd",
  "key24": "3cJZkHVwgJj2chn2NZwuv85FeAiGBuKdroQyJ8EDDTE4X2ncx3UDQ6TdnXsCumkYNDw4Tyfsgeg4iC6Y915QBEG4",
  "key25": "kb9mEkfdGfozubeJYcghEbftqtPjo18jqY29bwgrmZc1sY5R9goXdq2LbJDeBVETQAsWJmaorDF2aLxQcMRW62J",
  "key26": "9qXyW4j8sZqRbzLM1K8eLWTziFn3A6SMuQnFDkLE7i8t4GV7Qqna6oVq2TyPaHjXUMqhw3WToQWWze6hnhPWYKp",
  "key27": "5TtBQhBycGHXq6LvYwPcMCb5mjYr9Q7epqgiMf2gGzCpRgF8pTh662ndZB3iSAy5VSVSrJgrGVqPp2Mreg5oGiao",
  "key28": "2pNhGgG9RqVqLR3kxE4m4g3ppmUDf7GDMxrUrynz3yGkqEchyHnmgLb3V2yHowk6ysBJoPwDeK6nmb16RweD6qYJ",
  "key29": "5e5u7hvRjHqAiqeeT9RsZag1qmeTpWGE5jYuyDLSCr2T4xxGLaJDa7EYBS3cbVaCSzteXXQmab3xcUEDF4jVnALY",
  "key30": "4sZkjBNgFTJxKFz8HDGtWZ2QyXMwJGKTDmPbLv7wLu1kFhax3rvHuP3SqtDYstCBFNRzgGWBBFd65vekCmuxcN56",
  "key31": "5ACGURcxt1WPT8tM8RQmi9HB6MLrFevHmnfbtUBXpKpeN1ZZWzogVcRTGH3P76KpgoQtnxbxao9S7ohL9Yjqx9sg",
  "key32": "2WKyCsyTEUCJPZ9Hi6RKmG9xAqtEadRoGdsreXCwD3v1JrCVGa5yXsWbzKeRwjd9to64FKsFWbprBf9zPckLrk4D",
  "key33": "2gWF2nozdFxrRdPBy1CpH3JTgKS28ypH6D7PrGexYxeShxdcvGbMhbo73zzGwPVgw3rawy8ozJHFYhZMSyyQqPUq",
  "key34": "2iRQoD7CnsXh8pXhGHdSgpKHiqkUwazGLoNq3VZGegRg7TyVAg6g4CsvFU4VpBzLzMaxgmHcZ4nEHzeSoV82tQ6B",
  "key35": "ZxSsRHdMiknMXf4miSrw544PjaJN23JeCEFXSyu2XSkr7go4U4Fn5rDepUSFwrguGSUnYTJSwnjxDxfeHBhQAUo",
  "key36": "3AsYMBa9Mn7RiHn9UVJnPLBtVfADMRUL2v62GXdWvMgH7vDrJHWHcHAnt7SgPsQg3eCzwsYeVC4xDQoMdiQVKHKd",
  "key37": "39KreMo1db8vb2MooUrqEhEqcjc5iiAaxMeV4e52JDMSfaZJpoNX1X9tpWmcNj1EYc3h354SJUSp4usnn3KWvBvK",
  "key38": "5ZJe1oyX5xQq5aWb4UbJvrv4NfvE4DxFjWvRDXwRrdQ7XXB6nVLuLTn1TaetoeHzeDbHFi1WReWWccAtDYozUKec",
  "key39": "3KJufNmFbLkootmEceBBuxQxWAztX3qLL4Y91rNfekMqe5tSUWh4bzNFSyQhd2FERKQaamq6pjvPujMzrxBkKxdd"
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
