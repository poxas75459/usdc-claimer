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
    "5aTBiDXRymeTKEyFpXzQZGeegySZve3GjbnZgYW7ERBwh9nmPUEvhp71k639NGnYa8FGS7TCZYL4ickhv9zUoQQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jZGabwt59BcZUZAPLMGTejkfCCeuus6u2HUcTLEfEKjfxtp98SHkekYRexbDXGnhfcxAZz262hjpA56vmZQ8aat",
  "key1": "3b25Pjds8J1qWDi4oQKT6fmP8dwqHVyuEhEM6YpDmwsMgCaFiD2WAXGunaVGjWdhbe53M1iTRSLeNLsDKYWYALyv",
  "key2": "5HzcXr3LesLSsir77qeVK5DdYhj6nm56vTBfcnnkoQccdm8WXGLSNemccUVN7WkYiPn4YT5GtfFKvwj6yEyT6A1u",
  "key3": "nkqpv2y5sjSCnE1GGGaL1amoECRrWvNygVCZWXo2zdAzX5TzusXzs7UJ93Qi4M4QYhqNc9pLFZFpCBXMK1dZQK9",
  "key4": "dB9XoHbuQWqGHMEj5iBcazK1cFvQRAZfKc6r5iTHK6EYDKi91tarJZoTYgH1fK422nJSRtVrU4LQ18ZreUoDHFM",
  "key5": "4xtT7Luhc47MexWbzHd3asV8L5BwkAaxZnVHizSDtHt5TxWrwYqTZuCaioWsnNMnMhjACrZDPaFZAnk424i1STW3",
  "key6": "2M81ajDhFa8e7gvu44gUzXBm3MxC6C1odX6YHAakGA5a7UNZpZV3F3VU8C6mYNNrS4xdHmzpq6KqXhnvtWoP1yVX",
  "key7": "4jsV3vKwtNWX6fPNytFRk5GaaG2jhKYEyZJivCC6DWL3TFnpVhRW7yGbkMuG9W8Egk9df6Tv1nbPEteNxzNZ4kq7",
  "key8": "5fwkTeGNBiL52Tw8SvrHZQMNtyt3cvBRP1gV7C8kz9jzgz8N4R4hjPffLTDx2q4mZoKbSvDtRdCoPDo8AkQg4jTB",
  "key9": "57VfDCwuVYJUsp8kBJsC2jWRhxFangDi5SdxTE98xzeBjUQwTSMEAhJTacUHyrxgEB5ASZMQQujoxdn4FYndevxv",
  "key10": "4weL7yuvnsMKE6A3KDi7X3w2RA33n1KtD8qsLVEs98VuTwDTEwpS7j4HkdjHABH17q73a22j2Sa1jSbUkyT1MhSc",
  "key11": "rp3V7DD7yKpm9P6Xf1wAATrvEBRtz29mYTirYT2FVt48EuuajzETi7JneJHsj4YADnUM4DRuaKV7ddszwVEe1p6",
  "key12": "dTLQfGfihrGbjYCAgYQvBEvQmLiRuR4S73Cw6yxnFZtmaQVRtWP6aLKA13h5yFok9qE6TeB19SwBpgkNMLzr5aK",
  "key13": "37PgVD1KJ6zLj2CkWCiPKT2cAv8J9pvr2RkhvgRoB7rNxLfnB6wDLYhCtveaoE2j3YjPhM9Y9WqNmnFepLMiVWGP",
  "key14": "4U9kUXebniju9jzi6iDP1fnDKWJ5s2ZcJnGqEw1RPViu3JPvQE2AAK2Vv68Tnw3fRw6oYHPKJPa7rp13qv2h3Y2t",
  "key15": "4RuW27Fi5Ygk1MMfZNvC8efSqbmTeytvxzcxnBSLWpYAUkurBWj6f3HL4Acktkjr2w727UguJpGZUXNHGpUQHQkc",
  "key16": "2aqHGTicCgSgxmwLxAjatrVN83QqwWTEHoV3QdCNwcpido9dYqiBRXMXkDSF8hGH2v9i3bCYBijd9xfRoJMmeW27",
  "key17": "2LGEUDDZCQ6RyYmseMRQiEaWbQCVhzzuCPcRw3jLrQSvi2VeamxKWBBk3y7swXn4M9abKfiMfzTehkm1HAwehunA",
  "key18": "2Kgg3bnDoNjJB3HmsC7TzQa2LcQyho8YLLnYVbC2oQMB7VhmQ8ToZK8e9fXU3CpCArLu37znZhDXzuGsLKGcpUVk",
  "key19": "3S6d4AJAj7By9bV16uzG86rQSxSioThKohChprTt43dPPQGWbMJjsLD3xsUVFfr6iaYyxZzTfZ2qyqJ48A7VhENx",
  "key20": "3VD2LrrMRFBJJhYPgWthixaY26dD3wSzfpCDyfgUkF4qbASc9w63Pxc2NUzxGYBBnjdnXP916z9KkPRNFwekFj4A",
  "key21": "3X89K83Tv5HpW1vBjsxcfeN8dvfTyr7RuSWPXcdE1WAdjXxMoybtw5Ek1jL4Eboed1k2NA8yijiYsEwx6wpjGMQh",
  "key22": "2RAncp9FrVMq72bj1xczCskb4uQE9ZsbNSrwzKbYaLBJhcigSnneDGyecNR93kXgVK1iEf9NGAojKNUBHmjTKyg1",
  "key23": "33YF1tJUKB8UNmXT7tzr6dh34LFd74i8p7C9njUXHPp1GFTa2cuZoJqcAYkVyFHTojTPrV3w9MRVpwm76BhWW8Vu",
  "key24": "67ignA5VNJqJ5kAzryU4fTeJ6jHC9uvjpMhfHdXqSd9tx9N7TBPgbbn3zgGkW2teTGbJDzm6hGGyKYN49MkkfMBd",
  "key25": "4cCbs1C87L5oM9NB66KpRv3bQmN9to4BbBYT5sGUjqBxjvP9RanPDLbgEAPnh9XFRmgeT88CBTYGk6fKixRdb3KL",
  "key26": "gE8A2UQo1nSsrX24yRdcTsZ51xT7eyMUD75QtEty2yy4suTvacXvkPvT8Jxza8PeGFoVuMUfhf1hUxYZ5RWCycw",
  "key27": "4DvvqSh9jyNGr8QLZUYpYFD8iHBVozzEQE2qjjU4NpDr6aPirSM2yAdGJndocyKb83ATtkcaBpnp3fXsijKJFqUx",
  "key28": "5dbHXYPBLANdn7oL92ANuLQ1NCGbDHkGgWwMfZCyd9hBRotj7Xin3ErNZQZythXbe6JhX7yPckaveCZwPWwNTfSk",
  "key29": "CS7RqmovcVz7jWjfUY6ithVUVQqAa3N4XUbpvW6jr1MM1Zt5Xcw55R7VjxsCYsZKneU4u4tTrMCtAgdmyrtVVJo",
  "key30": "j5z8EntsZ2fDdYCeDRtWfuYagUfh1KX6QAPJxa7AodWjfg26ZfGyhDj8WfFovjSYS8BaX6152RCfGxd1pyzDgpj",
  "key31": "4LwDVRu2L2dso5CU2P5Ubfxyy9fzUbp6oSXqLaXJic3F8aKCW4RrN3iYd4TGGKzepBb7jMNmvjrq7deZh9wWQTwR",
  "key32": "5izwnw3hvjs9uR5sGdrH4eYmfAX3fWiECRG9ESRgTWBCgqB3HTTbVpSsvykrNJDmycNT7FVLy6Ean7Cb4evZCPoV",
  "key33": "5wJeRiaqg1DUT6npdMH8NL6nJZQw7rU3da6jG2epUASZBkmJbRj4tx48E8hmkage4eZjEVhmJr1gSofSjW512cjA",
  "key34": "5fb9gsQbrh7Pk4UfVmCtvNAs2ejho5fw33xEkyswLkuaxD51BYJqdw854kmQaANTCrB18Gb7at6fzorzLKBMn9uq",
  "key35": "4YE1FdhFTJv6kcYXeEkEpPQdjpBcZwTXBnLaFzdQedEBz2TD8FLa7QJyyZYdS32SByzgiWGhiCAhiyg2AAUMNtm6",
  "key36": "2oJkrvES5jDwfyBCGomPgmbaqfUKLnPa9wcETkxvS2Nsh1Wxv8tE3faSARSFvnRmkFbUqSvTP3wbLECJymXPUY6f",
  "key37": "5b9113dzUFpHPCfFvVfqwXkqe9LUt5gZC25WHicLFXcJv13qtsvJcvNi2UEKr2CRvGkqBhvCZpEQhawUx8Dhqhoc",
  "key38": "3uo6NCF2BPYpZwPKsNg3RdntRPaezKSTmmPgKHEonkX7VmnQZgmkPwqch8n5bqka3C8PkpUtXKuJvrJHw3cSDuR1",
  "key39": "3u5aVjzwLUzxrchvy733WrD6reA4xm2Q8C8HuouV7dyyaAWDcDj8U8KAB1WYFEMCiVhg3RLnEJ2dTQ7NaSdjuczS",
  "key40": "55ikHvkJ1QPqRTPs9a7pD52jWfYs3SVnpcDVwiLvByHL7wjenyfa27GtnPhHPapxsGa8sg7tVwGwZXnR1HZSS7hb",
  "key41": "2T5gQ9MdvbDwDCzxfytrg22qgFQzbDiaLvQ3LD541XwzshxvnJFwBrvcgUnhSdGtdz6qN2LSrjzS9czDieKCfAGg",
  "key42": "5RCKLiYc5Uu8MvKdZ1mM9nUDU2RNWKh8FgrMXPYNy95TXT1c9bLYhhTrsMd4pnirSZoqZ28BfK65PzmiVhxCw14n",
  "key43": "4vbyXFrCuCe3EFvJEZizmMhwtuwMEd2smAiAhF4HGtxGDUBUrSnx4K6iPr857LbehQAeK86hLd26sod722dAA1Xu",
  "key44": "5g2YJXeS3VHEotvjvrXb12rfx3bFXtjcd1iz19kFCqxTXQDnoA6tqqLiyo5LK6z8bak21ovvQTRwSeKENUsLzYLi",
  "key45": "2F2uFTBzkTigzYEHiuxGCeGYVVzP5FB8BArX6BnZphyN11erAfjtNgEpdVMXFUm2ForFqc7rHJJzVFcU9S8KcaoS",
  "key46": "n26R3WF4PugXdBYa4orwNNxZGT16BdwgGNf1vmZSAMwWvvdo3CxGEefo8TuRKHh4kmbbVzZu3NipNuNhXzCnu8m",
  "key47": "4FKqjS4cBWtt4vKDx2wS6Y3cq2fNQRoaM97ktbRn7o3E9pVY9bjUuidMqTQMtsMTWsAYmvoJwvQLc94srkbswsBz",
  "key48": "3UCct7Ff1cEZHCTHsVwK8y8A7gzseuvfjogdKt2F8qSWATPzbgYQUSAMjw18jo5psc7EoBfGV4VCdpZGeAVqw9KT"
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
