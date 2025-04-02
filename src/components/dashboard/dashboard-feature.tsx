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
    "5Lof8TcS6n57dM4SdSEoYFwFaSibxr1FnPXkfUsmRA3tBgJCy5VTYAXS9VSxeRdwbbfPPuNGcMnfmji5iFQ8sTNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QsRPBaCEpmcU4noxT9cypNe8MhHEGNoHwWdFobSLV1MSSMXsFUBeM4TKUGWyFmixspALhsVfdWMFs4ewH1CmhH8",
  "key1": "SDr9CgG6nWj16Nb9conhNAyBukmokZjMtx2ysdKbpwqisem5ZTAzebDMCvMwsRbfhtbqGGSqQ7hog9Kj2UaBLqv",
  "key2": "2i6HGA4KFnjCMcoTshyyoaYJ4mLfmRhm2ztWrFTE1NeKTxho95on3w174uLoFJmt5KgjKQSwyUq7Zm8EcvhDktCZ",
  "key3": "5Hz2amZox2tEokZcRRbsSjpb3DReqeQ4J8LYZf8QTdX98jPLUmmfUE3ZfL37UHdttwkUkwL44Skr6Vtxh2GuGCcD",
  "key4": "2bMycMApRrTbYM3RCrsvi92K8mrTt5UbQT6Dsxq2SZ7zS3Cb1cLFviHnmcJR838FXM4Kr91PKekSsHoQuAwZGd9w",
  "key5": "4v4KBSJvHFTKbUxALCCRZFMkzJRDnFdnZeQ65v8P3TRJnR8GzcTiP6ZN6tYGjLT6x1u52KgC14NybSXZgDsmLHVN",
  "key6": "5in7tLDiTWc2A12q3P3pTf2LN55TRRA72RajfA37tWQDW42ZVHj8uBMzXQzdsxSRirD2HfuHydiMj9BGoNtyKTvB",
  "key7": "2kZmUewXFQwuB59cAb7uUwATJvSHqhf9D1hsufUognXQ65qZRbCc6UnRQvUKd15izHXc3wNXUYu2wsave8FgLmM6",
  "key8": "4padZTwFnYfYV4TFTaHujjdCE5bdz3k6DbP919Lx2Be45GmVjZ8pb9uM2kvncCozwUh8KKHE4NNwwJWCu8VkSTvf",
  "key9": "aGsUUHPfzcQFwE8tXYp2YoYQP55WDA4etGPp3eoWdLicEB3F9R68aRfTpJag2Mu6HUgYdHJQK9JMBe44UrT2JAY",
  "key10": "roYnJuFYyo644ULkbwD3AjEmEvA3pstKnSLS853nu6HTxe87iCrgXseHcQfCeXH3esku9AUBRucTRb1aK3379zX",
  "key11": "m1ZzWBdXEYL6hbAyVMDEoMQn5Y7AaAACAbVpQ8dCrNDHTQkbHFKKohugXNBmQDK8dfiVtk4qs2GQGXyqr8AD8to",
  "key12": "2Pc6PdWzxEzLxWfoFK4NwfETnVKXzLdnzBoWWhFRsBCu5s4ewekgouHmcrRWBmkasKbe81BhX1SRpRDo6AWH7b1Q",
  "key13": "33wN2BoWb4cxDCZtQ5w29yNt8yKSErR9sfqJDLM7gbBVjgzNVWnqEH6n8YtDSqxuLpno4ccTry7Yq9jT2LMbq2Es",
  "key14": "5moJf5X6UcLswZTutjhMxxMtDERKszVNByoiwQEiWB9PF2X54FuBGjiHtu62jnWAMDhFunCPreLt8m1KjyDqBQWg",
  "key15": "2t161DF3jNRhvUzpapRjdccwuuLzgcLWDffeMJHdHJ9hDTSRpKvrvZUHmeRri6QhhfcuCzF8w5Nw3VpYnUwQX7sz",
  "key16": "ViCXb9YGSqaEAcUMczGkeQ57r58FnEoBLL7t5RbtJpmaZumB329ww1jfTysTp4bmvLFiXzu8q8qqSqsibEVxXmJ",
  "key17": "5hpyTrp6VSCHaTBXapewuTTEKpKcU7hKcXyAvb9qGo7kGGHKLbSVumhXYe1DptAb7X9FCVkYL7vm2hGZjSX9g2Be",
  "key18": "3R5eSw9XFaqvAMMcE7pgmDYeaa6pLwDQKsRGXyT7qR3z5hVHsWFNXZ8mXPuyjsWhR1YnE2MEQfr1Qrx8qWXoir6h",
  "key19": "3Tm9fg7DHBdUVFJewS23aZEMX9uevs4dpwPZip7GxE8KD6bMX8P8XdPdSMQsY88WgBdepTdNhUWf5knAN2nQkkbx",
  "key20": "3URojqFLDwNUcCX6ogL4qa9zV7L5G6FX8XZ5LQcwfX8evwY6oFNDQXCHXdYHnGnixStCje5mfwdVfH48v9Q3AEAn",
  "key21": "51NoNN3APkFsziMzns222SaqWN7JWPNa8dt6se1Qqp9RhPnsT2hMEFPoAbRjaHL8T68v8dtCRLW732odZtCrmimv",
  "key22": "5sNprxAcP4mmsjwf6N8FexdTt924aV4NNXYs8HwRkNQhe5jH3mpkW1HYMAMAkDfb3StPM3HGmZT6f5yfLrQEdfZK",
  "key23": "4ZenNGKeGMnN39EtVMDXqtaLAd9LojdbVkzBBkKZ6B29L7r2WktCZHjgc6ZnNfLknmhUJcfYccrgqbBz5HGhVokL",
  "key24": "cg7fVamtjEwQPmBKGb57rjfF7gTX9pZqnmbMnD9Lhfzmb8XmyGxiJSSa1qN83jT6Hd2PnH4eA9oimZQnEm5Vxcp",
  "key25": "5fYVqVmnw3JQnc8gkpAhW66fhvAE2hjupsc7kY6tkPPgTiFgGTCdGVpdsH36dP5UFFhhqCBHoGMhu7ayHZPfcexz",
  "key26": "2f4FcgtGB63Woca15tfdbFeQ599YK6SZi8hzVRRBBuLJMo2SjthmCfyfmFLPdAWpKsUjEBpDddLbhEp7jSsmut6r",
  "key27": "2skNshEqeBRxbJyEMcRUPhw11qoMkEJ3GZ82yH5GAyYBTZezrikYSSUV14Ef6Td4WqrLBbeEqE8E3GGj4SM1edYS",
  "key28": "tiRePyar4zFy7cdrLnqSz8LdRnnweaUAaMHKskkDb1Gz1bAL4St7T4YKzf9meVpCFBgngo8cF3LeSFikaK3dozG",
  "key29": "YxH8bdzuo3bTKn3qmBTxSuBYP2ZZ9jbxqex6VfsC7ot86PVrdiPAgBjG61h7kTRymKGZXneru2fWn5YCE6oe87d",
  "key30": "2owk2bevBcVmf9Us2SSaZzGUCKdf1W64H6AAadDHNXFcwumCCiWwpNE3dA69MUzKyUS1PnqYFze899uQpoadBGJr",
  "key31": "Muyfdmt6CUnXNpjMcnbnEsXLqy8YMnun8goqSAAXuK1rQA4UVghY2ayGYJctj2hTNswRnRMwjeykPXMLUk6M4RR",
  "key32": "5b8nGEtqQ1xKmGzeYiBkZCPnsCKyTNZmLugnYvMLQKHdsXW3r6dpt6PsW8fhBM5wPiaBymC94fA55ZAQ8yFBuequ",
  "key33": "2wnyiZY67uojyQtdJPcg8dgBwaLk6WYd84hEwiJ7VaXpJYn8zWgd4m29nn3ZeMjeyg6msBfL2SiPiXwGWwuDqi14",
  "key34": "63gvX8Sm7sVy19Nx1h2W5GDdcgsrKUXRmUPfDqFqcmUmGqqH2gKSRrnFMWTDyFwwcoJU4KajNrs4A5RamXVgedrY",
  "key35": "2KemetTUaQXkQatsJntYuwapvs2cSTALvZXgnCU9gnwvUkZBzotjE4ynKh7PdW8rkCBoxEQKkZnjm5AQAVwkpdzx",
  "key36": "cmV2ZzFFSj3YrAmSReg8TrFoQFvPpTSXtL4fNHqfQqUkDGMSuVDKdqn8ouBEr4UA2KekkbpewRghVMiv5bps7dg",
  "key37": "29BLuvncSj4s8f4MTyhiqgN1ztQrqMroctMFnrCaYAkxjy1HizN4RpjascAfaL5VUS5khQYrww473gZz6AL5NCM3"
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
