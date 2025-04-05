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
    "tfuxAHBtobAVjbHt3EZkYjAswYXx4G625dDu6urb2CunPTYJXtMrngX5TgJC687SNgP3uCDnPA77mXxWjhCzEcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kxkAWh7XXsMnEeJTmsBk2gBEjiA3VRosboAZTixm97bTjVJbBWVERDjEiLU7YCM6hou3m4UjJPDs5JvzP6hhW7c",
  "key1": "3okcDqAag4Kt6NcnSvoCAvoSeseHBarmBB5S8AYBLvbSWMYH9dac6rL11kGx29TEU73dxXf4uLTk4m3e7skwJwMf",
  "key2": "4V4hX8ehgaYF5Ee5rUiZszdxwRMea4a1VrZqiyKoS6azvs8cGnVrNy69oWsy4s8hKPjjuTkuvy7AWqAZoRe3E9FJ",
  "key3": "3bEn7Kv1YRWWY6o9Ptg6sgWgdCqMuh1CAM2wKyotVh1UtF49kdJ2oEUhBS8aZuCQNufpuZKkomFFGYF8y7JMH7HM",
  "key4": "52YdqfDNgF8XfmLHT84skGFEPQKyTgMwMwazr6rfGEKwrkDc83DtaDWTzSJtCVDdBLKPZsZ59fxmn2XYBwTPLHQv",
  "key5": "48gSG1k5psYxbSUm4WMgPU6iGC4c9YhtRHov5W1cswe7ZTojCqMPfH5Q7tSxbA3z69RJjSucjXS9pBEzWmA1BwYF",
  "key6": "42wNhuvtKMm289pBPpMCS8CtBpDbBUCuBF4LhWGbPbGrE8it5TkstgWhhnCM1KvXhD6nzTfPvenTqbXjVkzr8vDV",
  "key7": "23SKC4woKEXhG58y8roBXRtKKwiPax3vdY9ULYLy87uDFe7oVad6gbp3SE7LfkgK93iYGKGjRyCYLNyKsubuUYDk",
  "key8": "G5VKguuwiWAq59tMrbo4ZhY2DZcy8XWfbQaFCqukJpvUCdVeJxVcRUS954qu5stuXkznYzKddJUHZHBftodEuu4",
  "key9": "3mMmocdxWhZnSNqfDyhjgiN6sGKxi1dyf1R3Gw5GdtbkpqTTbanst4jxrcnAGDQMLYCNjQbCHuGM9teq4vjfy3Bj",
  "key10": "3sPJxMwLuh18Aq6w6A68U5Q2pQTGkgFG5iw8VRtTZgyQ6B63gQSDUunyv1FMoDBgFsTJydkiTNMf357cFZ27qnB4",
  "key11": "BY42HaoZYKxu5KPGvdGuzdXEwwhjJ86xnqSJDMBwt45V3UmK5R6P8jvMGoigoxcTDvxCZz3zaz81Li7rhHpx72t",
  "key12": "5giSP911bbYL5nrTycegcREY5MFBwr9hX8GXmRvcwB727bVyPrqotx4S6DJ1ivheAPJsBpHukwFfmj1Jzdze8WS1",
  "key13": "3HM4DYLpHEcfQXPEBt58NFs8iS9jvh2PzKCxDzkZey3HgxPTbewEZgUTD6iJMuwxZSshjULDaFrydeCdoZfgg4tN",
  "key14": "haBaQ67eBkAxbGNAWV3tcaKiRXshuWunAyqAGATQxQQBwAWyZjbFpddVLnt1QwdiGKECPXBvg8dJUCPVDrnHfrF",
  "key15": "2bDLpujmJrEWuV35rkhTXaFyed8f9VP3jxR9Lo7bGbFJ8jHUsSUCLDMqoB8JEEbK6Ws7v2mTLU4bLNPr2JXz1hzP",
  "key16": "649Js1n65P5xCgjYCdJBtBUy2US9yoqv5eq7TS9eZwLPYFrbLWUnEfSVp86apss8fNDjPPaJ3Z17huJiX1BAe4GY",
  "key17": "4qoopufVgEqSeAfC35XWyiUi2aALJppAwJoYRX7njYfjok74FqsHgGuMu24etwTK4t7QiizrBhabueg7Q4XZQeY4",
  "key18": "4syzJuXCUFkyRtUWeUW2u8whd4bYUUVZ9yBGZr2MibPUPY4REZA2wqXEoc8gFq38u5dsSFzKaarhJJh9wHUtjHcL",
  "key19": "4JzdfEDyQLbvXaJRATuZ9JaH2iDcRWJZ17iHAoCMP1arLKLAx2v2c2ucuzUvpUhBzV5vkop6HmdvofC94YNS9rjp",
  "key20": "291jHJKDPtDCrDiC9rG7UC9nKQuLA1cMe7k2KHRirz4QcR328VXsunJJMhYAT2ybvLHu762hAtSUY5P4oZquieew",
  "key21": "5XwDUzujVhfZhYr4iBXpR3A4k6YKtqozRYbkbMwBBEDMLEXwUMptKsGGAoqbNKYhWpEhCwZoHayTnUMz5QJzWy3H",
  "key22": "NPcZn3DttemmJQxnUW5tEtH5ZaeA46dZw9pG24PhrBGeBNr5bikjTjYDZ8o77LTCZam36wkLrCd31qxyYFJSqzz",
  "key23": "5aSQozsZVVwsEWj294Tp77k2g4sdBEegMMyKTPKYuoHEHxRAtjmJGTr9cN4x14qJx7zRxDqddZVXmRHXGmmd3w2D",
  "key24": "AptYkKZzpScvYytdtTWksbPZiUBXjepUytufgenHrthbVbBpteVjhHAo87k2x7Wox6diQHkjCRx3yvhi7wyRFm6",
  "key25": "4Nvx3PLtVgx9mRczUb3MFWoJ9KPs1TkF3mFQwWxCbTAr74FDz8sxyeM13ZZSHewk1L2h91irXCyWaJ7VBe5UsFf7",
  "key26": "2VKpvH8nXKLRg8jt3TpGL64HU8aK1X5BPQ9Tx1vVpjqPviuMzNqAMYnHbcWQys3Zzz7YLa18wDkwHL1NhVZdgsjz",
  "key27": "3EX1jfVZrDrvgsqXYTRscLJnfhJQtN6bAszqfRU8oSDEDqgkrwBQt6mvhnPv3y1DvuHFb2SpRUWy5peaQYRjC2Er",
  "key28": "Kzxq9ZsNZaMkLT5y8Cvq6TDvDqck4uWJLJwfUiqQtY9bd3hwQc63mwXU9KKDiR9hE546cmsbf3cKaTMQG7GutyQ",
  "key29": "3mcEgbXnyhDXYwsbX95iaJHEGERd5mse2QWrAZtJxwCCCQ7YW5e1TLwjxWJmwVwwcNUhTZZ3GThtLqpbhFYfUvDa",
  "key30": "2JMTuemjhYLCUhMRoyRkJ6skHbn1ePpF4j9rtfC6eFmEgBnxNqAbLkjHpV5qARpekFyp3SH9gB7SSfdqBMw9NGqU",
  "key31": "3eGGZPBEkTrQFFRM9sTQhUvzyuEo1mNjfGsPixUDGjtG83pz4qz5V7ZYz9bazSAq5MJs3UK2TeKr94DxftfGuFe3",
  "key32": "Z99Wmok7HuatEbPAX4NX2FeRSipkhq2kAKS3npxps1rPJXAPNDHsFd8QS55KvqZt266RM6jeBfZWudVzy6SZMCj",
  "key33": "4rFG97MXvhcyGnEVtccg7SF5u4zeWKy43MPYtsiGf22nH9c5nJyKufnSyXrA4swbGtwhDexrZTVWs5Jd2Sn9xQJH",
  "key34": "5RyDmxecvebuL7Z1GwteAxoSvVdkfCyqzVBnaxyAFGFDGtPs374tQpKiFuKLSGHhBLMuMjkp6juHn94yYKyHpvWy",
  "key35": "2Q38mQV5ohbLNaLCikFUrMi9eDfRqXJJGxp2iBvyGqe72Hgx55hurMvi1jod4V9sj23ZzxR8jUshYr3MD3T35zrK",
  "key36": "24GgThi8CX5cKKiHmB3W6ZTygEDRkCYGdEV8n9QrLNqBBQ5WfxeZjJUirFvUb2w7FZcn2RFzwPjeX7Jy1DkpWTxd",
  "key37": "2bnqWiyiXCSczjqFbbjpSisuFaq4Yq1rEZB2iNp8LzLeMhpMWgz4WrtLxLfiqZnT1nr8vswFDs9DptQw9cjdwMQ9",
  "key38": "46C3bpJEwRAo4hTkxAMBCkTY7JXQm9MtfGs8arM8VmJTWQgMj2iLLG549ZKMeeXaeXHn5RF74LFNBDQBRwkkRTvM",
  "key39": "3TJtRXQp9qjVzLisTH3PSRxKUdJUeeANMmcQTbh4MmaoR9rFULiiCApHoYu6j3MnXkePzNBaryN6kGbrY3fFR9ao",
  "key40": "9AtZwGphvLa9qL4tuGaeJtkXMYHoQhjmRrDcA9fme8Ss6AoVTjy2YrQarn7JpcGgozGZzkszrCZ6CTjLfw4UT4H",
  "key41": "4Y9g4nxaMY22qMYRjGpiRD5ZuWjgSuDFKtDc67PHqrQd4PmVpNpBPGVywFqkktcCjAPod5Ak2fKVdd9CLqUnpS2L",
  "key42": "3NAwc6KFb5VPTydiiVTScvz8XyqioCU7qwJfkPj17z3TGPnYZNCpcu4Z9RqvSLyiSfxuRoK444mcA9RbJ55erth1",
  "key43": "3P8hceZSejM69mrU7uSLvfpW2ejNZp2y8ELiaAsdfcjncuuBwHTqjhrzxToSU8g1F138PqxdD3BX7n4Qvh5hKmWY",
  "key44": "H4wyCTRXkibw7S1NT2v8T9bGgH6EUzbUDNjBDzUGokFUVdoETmexYoBPJgTRezeQuy5XGFYjFoCqehEqhDaJgK9"
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
