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
    "2g5KLkyqU1d8QctVbcKFoAGvsXxvmj2MBMxr5Z98bAAziDCsvFpd6ZcPBx9sMckPomHMsRPQxSMYXyJpn98yc1up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttYxUdCvWtJZM5HdmuwRgZsxySJBuPxSjAP6iap5hcGNNXEc7FQXhL5M547YSs2p5R3CR7taiZsoLdT8Le77m8x",
  "key1": "35dv1rEhWZ8T61PeUEeeb2sp3TcE2rMJG1neHDtc6UnxhaR1h7iWss1gGYPBsYAZHTJo8whd5yRqp3qSwR4kmzGr",
  "key2": "WXYKXN8RVhymJBmkEmcqWq2qRfXyGfhMLqrvYMRAaptmTpFS7j1yvedYqtzCEcm4WvxTU57LVUp4GaqwPMYdQhK",
  "key3": "2R8A8Ri9XGfJBSRmmDmJbNspnkUxMDfTnkt1AB4Th1BPdqUA7rsXfVrfjcyEVEHzNKzQugbDvMDwD5yFe1sJiwFJ",
  "key4": "5TQ47qPhxQnBuEWDc3NMWHypWTbsnfDSJAF2Q4cgg95xANnmBAjJgjV6evvK5sSGNosS8ZhvyPKecJTaSgN1LWi5",
  "key5": "2XtgXL3G8Uy4Wndj61L88UHUsH3uW6rvtkZUvew1zC3sejuuy2VheFNJ9TG7ccwVd1XXhyTZZQPvQH6dp9RCyemt",
  "key6": "5e44NeKipbi1Mj2cTHHazxN2avdtaPchqiLTTMrw1dN1LkQy6e2tRF4KBVatzNz3VJ943pQDXiZqAgnAbJAE2oDi",
  "key7": "E73FGzyELBhCqLDecuqB5tSByb64obiGuomWUfuZPBL1drkiLsEJABBJeYExKRPFHJYQzxaV6pAyjVhUvP6jvPF",
  "key8": "57kdim17ukZy6aBzf6nWUbsBdZt3CsJEdiuCVku9iRCzR4a2pt3GTwZ1N3SqA2jGgF7jfPLeqBNcgiCfEMVD9wtf",
  "key9": "54UttPJwypF31rkcciQAiuLapqNgYsYYER2fLpFjURAEZW2TSwfjDANeJC24NVoyij158Dc8xj1vURnPXRcY5dAH",
  "key10": "4gnwL2P4hWu5ohFfYRPLK1JxDqkZXFzJy2nNutE5qWnV1AoBg5nRX7aK9cS3Voy6ZfCvjWXjGkreHiQqEh8PhTF1",
  "key11": "5aNyRqC45Nk8SyXgobMNsMB3Mx7EdeycPgpvgJ99Xvefq5FBxvLLcDSzGM5eRe6RS2adB9X5Jotd9EJ66myFiae2",
  "key12": "4x15koggEAGSbcEdrJTvAAbRDkBjvgxVcfsUQD9nqd74rggBzXhi9pYSvvMKUWvNMDdD7TsdsYvYzhrUG8FCCmWm",
  "key13": "DKMJUGk39HRVmQp9ukihekSL3Tu1WVYn6KhPrFRZVUhbCRNoejKeHT9BsSeK1ntJK8qW7SzMn69356jLRKtCmru",
  "key14": "65x5WXmi5dWsZFkHqLzWW4E2Wh6KDmGqSLvNUaRcN6gr5uLZRpXTNRoBgXYMCp7YUceUnfooJrrhLV3rPnetRN7m",
  "key15": "4v9avGhpkRjRbF8Q6grHLJQAN5edZLfi2z9vZQCXcYrprfzmYaPgjtNaAZeEbtfiak5HxhYhbVggGJ5Rx5Xds9Jb",
  "key16": "2NBEFszq7AnZbAVJphvhh7QGP8qZjF6K82dzU3PtEhnDuT2vvR7RPoNALAEN6GBhPxnisVvgEgdT74GAWTZNGFk1",
  "key17": "25fmXC7v8BzR3aAZXefvmYtunEmjLaoERsj72uLuQr8oydDD76J5FGraUpy8bHzj2cWu5eomTEDPkxgK1Zxk3Y4s",
  "key18": "5PNDCfXeTx9whTnP4Z2vqhyAJ5BLtHn54uShdhN3ptT8nqQCBV9pc5n6QTLyBXc9LvmcbDTFuabZ5w7ww7oBveT9",
  "key19": "379JHr5qWBf8e53vssf5mFZKC7e7Sbi56NHm8LfPyFLzMVZepqBTW7412E3ntE2DQPR173zeXRTGTBoDzN455qeS",
  "key20": "LeERpUxpzFZxNQUaTMW3TmRx8FnecpY4M5EY8gWqeZXcj9p1eiWVfEfy4VPqC9NEbP7P8kX5VSRMxG5BFe2KoKc",
  "key21": "3GrXkoJfqinPQr5ZwVAAMeR9tTggJvNLbeGYV9PGQPAGcyNDQMdnNawJmDmkeSUyqKWDk9q3QShNLvv6iznPMEDw",
  "key22": "2uEJbha1pYsS6nZ6MUqu2rqaMBAPJHafVCzSfFX5z4sm8qRymZTuFy5M4vKYhUCt5Cj42F1SeD6SW6X4vPupms9E",
  "key23": "2ZapeTDfzmvC32s6XmJ1uFXKymUFwF2hnfjqzxVbsZTbkAXaDkYkY8eoHA7ocbL3D2zWTQG4jYPCMPdq4MQDGZay",
  "key24": "473vzpHquuaDTgxMDX7EmQXqJ7W2ZKrzztm3rxAhiJqMNqRehNvNsCJYfnMrjmEwtueJqwxSpTznx2xdrEEQrFdC",
  "key25": "56itM2BXfdMVHx2VCsPro6cbXpcwBmMbQtpvvjETYCjAAFwa4JSobR9mKxLSyBawSynUDYaLYwWbEuh5nYSWf5g6",
  "key26": "3GxVEPLJhJTWuYCjbGPDxETjMikoTzJ1abFGjfPYXK7t4PZRE4ZrFAbj8cTiK5Nwk9qAFH4SZgVifjnArJViBaqY",
  "key27": "NKS4rpt9KALZa1JUVi3DzohuBMgQPV5Nuox6VS6C5YqpH1VETynJitBnxFYpQQWf2zWtSCpp4JyUGqFb9RbQi46",
  "key28": "51UfwGqRZvBN5UJtWrCheZRkmrkhA5ELP25uXdPmspzEBVvihATuy5DJQqJoZAQ4niCW22VxAm3UBeXFe5VrYkSi",
  "key29": "2VPj8teDRqwCHonejwnPPv7y1wmL79zYqMKYWewFPbu1YkgATtsiiwScMj91Y2tih7vsQ2uJs2dzcmJAVZASxTH9",
  "key30": "58yHe5j7NeaqQ4SybUUKJbMGAnHUHDipZGe87BksPYZmLrdzRS23ssi1gf5c7JECkNgFZ4DjAbQ3Rm7j69FPoEP",
  "key31": "3U893rxQNBSnybMkoCzX6LXFrfHQMC67AGDX3YSqqeaZcYN42VnkHppsWvdXzof9jX8hRbeFayTgPLQa8ttu4vAc",
  "key32": "566WFeMwNe7mNLeVqgcGu8WGdyLTjozPHxvjgTMtkwXruBGn34pfUNgYZysWN4c3N8ZXp9qnMt9y5Q6fg6xtrCeX",
  "key33": "2S29jrnSbxc1qmrZzkktcWMamFCVYgAsdiFsi21Knt3ohYcga7tZ1rvHDkjprWnyyCvhonU6165z6wjtzXsE8TpZ",
  "key34": "4Bf64cAVjSxD5taoZYyFDhL3zPV5xUF24zy4bGvnEsyisaf4JTP7bWhNGBAGNCc1PGAmG2uR92X4h4cuGYc4rB7g",
  "key35": "43F7YeL88f2dk1HbZ3PpTZA6NmC4sXYhfUWAGiomMn2Q49esBpgFz4b8DK4cWb5dMqHjYeid6bR9NBCLC4pPu3cz",
  "key36": "3FTp1KrQVZdHc8oShTMxg5VEf7SKfEkTM43rrsKuBTWNSpSGU92Yjs6KTvuT4bk27swa533y7jDr31jhfd9dbuSs",
  "key37": "4195yxYNpSMYuFDVVcphzEa39rrYf1zZRZaPF1oTJbgB2LFky212A5UH1vCkbUu44CwH4uLRuibqYSeFgHXaYSd1",
  "key38": "2LUJo5KBpiYy8u65byZS9DivNtThvUbh7TBSK6Hsxqjts5c4X6QDBbgoeweENaj9WgbAPiLkfsfo4rMpc3sxDFpB",
  "key39": "49QyBNT4x9iMNFCiyHM9L7cQFz68xyTgvS8hSjRHZhmEzRG3t5RrReLbBjpNj1f4FqeSrH8gXWhBQwCYQuw8nsu6"
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
