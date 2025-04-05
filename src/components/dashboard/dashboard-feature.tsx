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
    "36VZP8KPnyhk3qecZ3yQLPVPebjSwhEXe1PxPq8Kq1SMiX9XyLYHHwYYAT6L7pXv5nP3Aw4PpQk5yEVNMJtbPdPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "673i7cBLAJqb7oBwYUWnHeXAF7heGXHB8P3tDUDiLUrQfFm7eWDFCLNJgZpykqqRbVD1SPQjqpwxYDqvVttu77cC",
  "key1": "5hdTfQcHvkK68o8w18viozHijSoi3ENguj6MAQniw57NU43edmHcZizN7R7hDpTjPvwhxzvzTKRskWRhBXgmBuB7",
  "key2": "5m1uqywvc9qgiymySovcTTu9SWK3MX6rJNFju6goAT388fhegBGgR8egif9m1jvZn6R8C3fTgDA7fKHfmRi5uJf3",
  "key3": "V7LFtjo45Sqnxh1t6NGJ7EQcZAssezBu5iHX3RrcsB8W2hnANL4bmwMMeeABjBEKT9m2t1hj3NE5MgjJUGxPo7u",
  "key4": "2jFJAF9imRXmTRL1JWBMANUg6tUgLkmXganrDT5DwFoFFSjgCcFjn62X7uMwgp3w7HaEu9LQM5St9pQxfm9Zg7zr",
  "key5": "2HtWmbNQzS2s294bPky1mNd9MnVj4YRFu5NS25JhtBsW9C27xGMbLJzmkCnoddsGoADpvr5xAW6zWkarHkpWA1YV",
  "key6": "2w2Nu19pAg7wy3WiwrJQrH5dkcLJeNe11TWRTgMc8FJ6V2hNhGRNg1C9BthdofrdF8V3xg9LNsGz2uXrpMGu3vt",
  "key7": "2hQrHy1FvebwRWqnVUqUPQJWRDczG6hAtxRc5VX98iYKv36hbDbNyA4NshKABiM6LfM2X2sxrcnxtbVmRSH6ydbS",
  "key8": "42929mdGRaVjP9Sh5fZLjgecVwaV2K4ALhwTaeTaBYUA6AaYYtrRMmbVwDAB4mD9bzET52T9ymj7gkkwAN8jcVzY",
  "key9": "3vqSCrjy78tzkLu7UD6c2Jm2rhg7ZsW6TGNr4YSG6frfPYWqn5FrTqQEmvon6pmBCpCyXEJn2UNYLPG3WMB1e2cU",
  "key10": "3SbxXrRmjcJoPBYj2MofZyTGc74C3bFsmdjgx4AHd7xyakvVotnCuyyKYqgRjvD1ViaAEt55WehR76wp7z8xUWwp",
  "key11": "p1UuGDU79SvsV8fS2GWBBcv3VxqoqqZH8uwyMYevMKA3Rvc5r4VaGBPHKXMu4ETZJxz27Qd5u75LNHDD2rfg9qY",
  "key12": "ZgyAE1D4DLsyUkc1ujU5M3eQy2Q4ujhVorkoCvTEY4VBKC6dRhDxZNJdgipNA76Act6yfBXaxDKdJCXEjV1keA7",
  "key13": "5ppLpcySB2uPsMCJNyCkCCmpoZvjWPxJqJn5CWqMqyH1pwekBbNFVSQjx1Y8XadaZnrmotJsD9piE3vdUFsZNPFd",
  "key14": "2XfVeM7rxh1T3rxHkn6Z5w5qS1DKneTVpQrme9xG4pS2NB82sDsD9s6bu9oUMKiKE9hFfvn6puyEP3wSC22JrhVN",
  "key15": "Vx6XSwfPPWaoJ5Wg4LwCdHj6FvFSUayb6c57o9uUPZksroknop4xmd47z4vfgkK38Nr6oEUR42BqAr7gfnXuerE",
  "key16": "2RnoqGqbLdi6qhwCDUUEHWAsZPYiUbjJamhuXQSniE2BVUYawuCX7MduZy7fnmYSWVhzX58N3Hz4N41PkUWqr9ra",
  "key17": "4shZazfTSyGhbEHz9osJYqnqg1nbmgPW1Mt3FPtFo3UkkvxPXSG3HsyE5JFExGDtHLRY4TTkkVnXVXFgSN5MVEQM",
  "key18": "3ZJqZTWC9Zwy2NHj18Epys6F34ZqHP9J6Spdh74Km7SgnTVSndA1YrrwshFC9aMMLjBw1ePbTNuddHUCJ5ic1VNo",
  "key19": "43u8GZkW9TPpDVGqFVYMDbYPffdZdAqJvgAaDKK6gTvsE9C5ExCAW3UWVL5hUw222kS9S5Dj55dcUooUjwYBbNUU",
  "key20": "2D5nVTS6pfjsCKViuCv9dQfmyhQycgcwKngvVvUUWdnFEBcbtPTAxQArQWcRf4yPjw2EBfVyx2z6jau4jLVSbdqa",
  "key21": "29PMsqdSF9GXaYQidq98fyr2DJ1jVAFVVGY2y5JSVNntsEUt7qb4qGBTksf3ZtnzMoLtmHkVf6VkmiTkSqYLqWGk",
  "key22": "51wEmHwRthfwXV2az9jhibZJV4KXUPhymUJRKK2cJZoTWh78t9iuErR8pRgyh1Df8VMUBAso5bELTLiLZG39dhxK",
  "key23": "5sBHdeoGejsp42Br7DrJk1kAXir62HkkBzcQgcfBV3RqcJnsovaCnktwsAbNka4HsevbMC8csdm1mez7kG2xZGDm",
  "key24": "4bP6o3La8opx6KdU874mEFsRsiyuFP92pURGpmUUVfw7Y5xqHdWiA57iavgCVNCDBDmZMjoKGLYZTcmNiqfWCd69",
  "key25": "3a9HcasK6EPqLnpRuqH1YiQNuZg2RkkQk4Fdcd7wq3DiB3pVM4R1qrQA3orb96VfBwEAXLZyZTy11oFTUVPB7arH",
  "key26": "3WzdQg1DK1dFfpnNEcZGGadW5Q6MUVxt4ziUefjTRUauw9J2STNiRT1X5uHvTyx7jvuu4EYfgCPVeCibqgTKwBbH",
  "key27": "3sAozjUVtJydFspX7kiPQGct2a8r39oDVaFaWJqUxbc7MhKZxLevHYkyPPeNMyLZ3DkexxiAgWPvxciKV4sDr2Ah",
  "key28": "jQmZGQS5BeUkAGKbLZFpNrxr5roXD59Q729TWmVcxkCJcn4pAnHoEAggGhM3K592G9e6KbEP2v5n6SMLt3pcrDi",
  "key29": "3kAH5jxyM4g6K1p96YJQdg7Mwn4RwSoZKXPuBMcRuVNbiMGnqM6j139Lx5JY1zfj3dthRn7DxArQ6fJfBe2iaWHd",
  "key30": "33xQnoFoGrL7rSxPUtc5JEb3nBBV7tF9QGxqLBAfB6SGL1FHqyjiZZoeqe3asgpE6MizzroCwoarUqSYDBBAMNSp",
  "key31": "3JXoyVyqZFp7jDThK7nDCKi74jGuuW792AdEJfFvFN1So8GXH8JGRiBRt2LuHRGcLQX5yDq4y467sPPy6B6qbqxn",
  "key32": "5tgxkJQeLkqkQaBfkBtWKKkgY4goxoV44zDdrJg4SuVF8Lmj5rShE5ZezpfeXEDqhVDnFEHCzTGsm6W6CMA8U6Gz",
  "key33": "3vjCVbNNuXpgdgEUDqRhDBTfjHhC33qNe42Aysxx2njMtHzvomx12ZpQ8WQoninexoaFACP7tLbepMSAuPDjGJEj",
  "key34": "228fL656vZTncuWVumQKihLWkKWU1iRebQx1evSxBtZahfzE59v9hAgtzdzZ8RDZ4kSVFbcmMGYmi9dbKJnja6t9",
  "key35": "4TbHHTBjQKjiwfFVwHm99Hxv4TVwLpkJmfCsroWZhawCwReZ9RHAihxVtWKKWnEKwCcseKryh2QrpNXuaPv967Tt",
  "key36": "2iQiFWeKQ39SQmU156zap3fHadkgibC2NRKeeJ2tubLbzeMCG177EkJQhGyhLsQw15CEUrNFNgU9aVbttT1oZh3a",
  "key37": "RtJtrm43Lq9DmoXVT95T3ortBZCdmz7A1bQDHXmuME1q3xZTERPC1aH3kM9B7WvokktrjYNjHy16UwyuX8vru1G",
  "key38": "3xCoNBJ7pxEFfjRBtMBD48RfYLvS7YNGv4kZnUaNKpPBjSmQ79oQsAXModmBwmXtHSYRpuXu3Poq7BC7fapKy4Es",
  "key39": "5cPeMJTRiNDFiYYNKjcnoMERzKYKqpJNf6fpsHwLHxcV8DbuwSPLcz9rxzQzv2uLtUpcNQgR6sLXbkpjLcbusnTd",
  "key40": "63vGUwNkdGaEdQN9TnAqY6TVZhpA74kJqCjTXHzoudARBdEaELf4jLfvH8njgAywWD8PNBmGzLepeYCn7358nZqk"
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
