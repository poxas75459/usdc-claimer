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
    "4XnU7kFZ82tyWoQXJvqaMKqi1a6WYoURhcUSYK1ZyfiKnQzwKESpK8rxxFsqdoMpnF3F7p4ohGUPZELXL1EaaG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PyWYY7zpENaX4SY19WGFQDhA3ToHUJxY4pDKANJvjr4nDNkzzqM3aPPHZBSyjyuDcqqqBeQUqJ9q42eCeraapcu",
  "key1": "3ZJrp58oMsJAv9EEqWMuAe4snMNC1X2iLdP74xHJrcjCj78DAJoFcvsTWh7FBjqT2LCY4TaS2fBKwzkizhQmfWJT",
  "key2": "7yxqiFoee5RvQfjjHhjLU9RvtzUqxwJxh76yAAgkXvV5SWv55CcrfXDaXjJGAu6vNRdjrU99j3kuSjsRdzf3ok8",
  "key3": "2NTstrrowuNkthsNRMw8CQ3rTFi2mVUVjVxrYBfUMd2NfL34pspEhnJcKCKLf314iBuHgJVT8V3WPyfTtRnv72zr",
  "key4": "5fxKE47ELBSXWcngkQaNPfNVjX3d8k7B3hbte1XRHoxNnMQBiguc89DdpJ3ZhjPTk9QoKr7RSv9aR8bD7YqGRroP",
  "key5": "51LHyoKCo61tMHtJ5Zg9UtZezAqHcgZARyQ3b2zixCeGyYmVsPESF37WPSTQLVABZPYjkdxPZD439oVeU745EFP1",
  "key6": "5y51kMX8phYXY7S9JzFXSV1VwPLhwvGJe9Yfm7n6hspF1ogorzbmwxvMmLQ7trsnHTymhPzxHXZHmECy5eSxUDAE",
  "key7": "5vHo2SikcC82fBkJRMK6ifhzHWFR6YwMVGjdYvY11rrfSWMGhzZgixFRXQswLQZGEqayUBhRBjAtAC9kHqdmW56g",
  "key8": "zFvLHS4LPd3CtVTsWXB48b1s4u49f8BsnwG7aedkouLPt4W5ezrMaCpUtRNaepJf57okHQMPPXBG786KV6fVqvW",
  "key9": "54bN5eQ54VRKN7o4DJPN6691PdHY7TiQPKwjDRpYwt1LVHqXvqL4hhMLHLu2uFVqGkmXztqRCW9x11AnSBQjJJf",
  "key10": "2BvreRTBsJdUi1Lbh5kcDhFWr6hxuPgoxZgu3xxs6GDLhufMHpvcmV5WQnneSjHZcU9GY4ohK47MFNzH69y3FVWF",
  "key11": "4aQzoaBFyJjiY5t6E68zHFRYZK1WZDHxVXhECGdPNAkwQEkerAwAeYznipCAxpMvdowReYoHathksxNRQrCRf2aT",
  "key12": "kmPVsVAeEEUN5zJEtryRwZV3ogNLkXmxvqbEpiHGD4bgJaQqZoKz3avZMwGBYnxCCU2ncK1yuEhYz2QaHQQHJhM",
  "key13": "bwFotEcDEafdDGWmBth2XTqi1qdGzLP9c19dXG99MWtnoxXjj9gDen6dM69552L3Hd2SxkBvWM8J12CAx7MR3rz",
  "key14": "5iAUpbHebBCvDdWquebLwXP7UkviX5MwkKBuR4RCAV6DTdfUcqiihH6DhT48yKr1YYN8shmaRyr6HdrmW5MMYTqq",
  "key15": "36rZDr1Za1PTtWWhuBmVcDw6xQMzDrsF7KodkvkVpFd8hSGojyV85ZnfTMgn9uWsVKKtZsi3TkZxAmLpFstpYdFA",
  "key16": "44D5et8HBW7tubXw6VteYMrAhpBU1x58DnSZjZxMVQmAE6cwn8egMjdpBTVEniwCWwCmrkQNQJCPErgvN8Cja8Lu",
  "key17": "62KTrX6XaBL9dg1cTWQZNzwwe2PwGhDjonsyirf22Udbvx4xCxXJsRTFk2YnExig42pp2c8p71euGRNq48d3G17f",
  "key18": "4RYjwjoxYairSneu62Mh1kkBKM4Mp1WHgFhn7HaqDPsUzHsmgsou459hFeHBQECbmuTpJVqAC723PQUvgUhUUT1a",
  "key19": "4xeJaAMd9F6bTKNimZrmEBGE6aV78MMAjovX9yRMQg6qW8ix5FnGqGEag5erceSrjA5vVyFHHRpsvnSMaFfpowzo",
  "key20": "37iuDco2qbGf8uja7L4wU5YJyVNYkdE4md29Z7RvrPLP8PgMUp8bqirp71LBiXkkNq7B286QFSS3xuApHbGwMr75",
  "key21": "66Y8onhH7ujar2TtsohSibZtJVLJNZbcBbi7LnqKRiEGPyJsWvtfYhAAGuTN6ZJvToSFAiTyVPSfzTKqBAsxD53e",
  "key22": "2wBNzV81DAbZgzAyWRuHJSybhSfK2xaJXZG2gB5eHweVCDqFrAHbG8JVNUpmMgd5K74TFvhvwx8t88kU4KkDf9hK",
  "key23": "5YdwkgfB734nx7eVZ3U7q4VFNaY6FoWj2gRTmi8EVxNrBuLWLRCHCj9VBKUkBQUWFQDR6XiQca7zCUSdd7TqiWXz",
  "key24": "2XNJku81Zuu8EzcwZEFw2w6NwFJFQLyJBGAJoijYv4G8mioUXonYaGboUuEDFug2vsHRKfN56hWfJkXMjp8o2rg1",
  "key25": "5D2rgHshf4GN5Yw1Uetsj2mfQZvAKjJzijfsfh7e1LUtzj7MhQMGADazyaebASzXjLKvNA96hoZci5fvzfg11o6N",
  "key26": "3fX2MS1Num2gXrU7Xd7Mr2c2VyuUQACKeSHVtq17Eq37hKbiHRdq5JpWW93hztcsoPNnSDZJmfybqEhPoT6hUT6w",
  "key27": "2hSQZBhPKPLXMkMUs6vxqgTt5Zi2UW5URYfqMfSpNtskaCf8vf8eDakcKFFgbDCpg9yuGazxojS2hkwL4f16t35N",
  "key28": "3WksgQgydmMDyictosvJg1Bm44JuHkmoH1HqPgh8ni1jJiU9rX4srDHs6EBNLoEwwpybSsRFxT6swUk6SqnWPAJa",
  "key29": "2SWbEkHsePCcBzRJEQ7JS3t6jjCrhABMjQXf9A9aRjh9FUi6WY5hDVEgvF5LnGDfvU1XUCMn5MC6fk7L8dBDE2HC",
  "key30": "3utV8jLQRTnqd8J5iqviDqSK4CiuB22vR5geejhLHvZ4d76WR9Fkp9J5ityCLAfxeVvASHumg3g91yCpjTKgqs9o",
  "key31": "rLNtgiSXwPXB83As7mZcUCWc3NS1eRnw2oSWiHq5di6QexTAb8KJABCviFBbYaPVrEmWBkqrMDodD9nXnLWBvKo",
  "key32": "zXFVgq4J1AJfsRTs9Ke1vSSMM2TmRSyksLqEg9tkVn7J6QQ6KutUppeFAxVmNLaCswKTFknS1vwDK2H23924RZh",
  "key33": "2qVwvcyR3SFXZ4xjSKXUudgy3eb9GiUPJ66DWF7YsJh338iDU2y2RWG1Rbwiw8oZ1Coe1Q4g3K6GhKSa25i2LhUm",
  "key34": "5uDhuXc1o6kCry8dCC1Bq6EMXmnBo3eMpGS7gnRvZobg3MEZvqQCBK1mBnhKSVvkX8idwDrmaMteMJArBeYKn2EN",
  "key35": "5fDxN7kQb8wJhmHAj1QfXpR6tkpJkCmq7NbCdycX24EbQoB2UPFZFBm3WdNZ9D2LoLame4m2Ufvw2uCvvSQNgYTJ",
  "key36": "fX8QXEoH9Nu4VURx4gif9aYZDyb7RjXZ62pFnpFVTb39jTDNVxzJtBm6kzacePMkFGB8xipAq4jowpCb6FB2nS7",
  "key37": "vFMQKCvSyF722t7JwWwbCRw1UiuVVeFRRZjgYVmJnJrKXtufeQBXipqk2TX8VLQzvrnYNPzVwJRNgCgsoEsjJJP",
  "key38": "62kzfqTTqxbjQqmfc6FFyEd2J46R8hEYADWv1JwretESXEAkXUGQzrPyYCVapDh3wV1QAu1u4KFbf6V1bKoEewad",
  "key39": "4L9nTGd4NmkUYeLka9qys4ZNc8wPtkJbN6zwdD2KkLtcfma1EWS2K5JJdv8J2xs6RPY5B5voHaXkVbrMx4w9iPL1",
  "key40": "2Mq73YSBEZ96QUU69MbC4R45J2SyEePEK5TD8hUyvTHYe3kR3VzsmNJpeyen4kvwCaQWWNeLUxTMg4i1Q2WcgLSF"
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
