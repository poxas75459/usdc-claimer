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
    "49eDnQqYKh7ZL3nUeL8tWUTDeCxRWjyadHjhQHDjVxCM4kZHnxnYJ9Fei559ySjdgapgxDKJxRpnucsW4KKRWnS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X9nd7LuG3vH5efzyMJSQTrzXUMsUcWFXnZSzDjUL5sdTn2C4s7yrzTUsL29HQgPaF6CwyR6REcJNKqQ8Q46sqvj",
  "key1": "2ZBc3zdvFxdTvxidetEk9cHxZq2aHEokvYjcAf7fa1FhxkEVwCf1SxgS9zQNi8q9wK3Eerz9BVPeWkGBvUzWFgko",
  "key2": "4r7xCKk3bsTvZqgWva1462tqiUuCwZy4TUS7pt5GV7du1KPgwKu7DEhCN899L6ZPKJwAZRXgZ2wafQYxMD5YZXhH",
  "key3": "3eq93G1k6rrbqAgNmwLm4LAAN2jDFY635UHxGhM34LGkx5F91PjqAKQuhLXwnwc4WmRn7J1b4XuLBrpmmah7gGEP",
  "key4": "35nqMhwAooQQ1TQyH66M5EhetptqjVbAzr5dRBc5c4k6YN3NyhFnSMzDfbLRDP7THAHfEsXhjtN96vhB4dMxYhp9",
  "key5": "ucz2mcyJut85V5dKw6xxB2AriGBkUBtUQQzjmCEL1SkHEkynQ2LaCsr1wP8bxzXJUczgM7mo2U3MNpZfQ2B5jwx",
  "key6": "3xZcyp5qCehX8er6g3VciyBsGnT3krcnDddC89RoZrSRu6NLF2nU7YxkEzWhiSsBNaZK7vjar84kHhUeUkBpvLaG",
  "key7": "3St4fEGgHdNDP5TDV9FQWTBj8vqgvCQS1zz1RqAbQzwWEpvcDF2gX5DEfkXFikF4aL6iwZ3cgd6GCiowjHqiN81f",
  "key8": "4Soqa9LnJy5f5kedaULQQqdvdBBhzJJvyJTE2bC3MvpTaFU8qvrSxDbdAi4Vwdm1YqKnfgzhLv9ehaSaoVnjktft",
  "key9": "2XPjhKg3A64Cn5ni2s3MZnudPJ9aqWQmgNaN2j8wjAUUNwUoEf3sY3GGEYNLeou4jthQopRQrBeF8RPqstC6Eusx",
  "key10": "rGGGfugoz8WgCTA55LUNvb1JU1ds92nWS8Bgd4ipEAchtFoccqjPKe4ogMBBWfAcFVvL6RoeMu6W2oULKmEP4t6",
  "key11": "4i87EcMenwf3uCD1f8nrDQEjuhHpfijRGykscHkrCMncYBnj6vDehW67VJdLuN89krFbtSdKQ3z6HS95rQJJN7Hn",
  "key12": "3cHsxd4upWmJqe5ZjwKv2W1RuSo3MY1dWvUQR1McbXGeRoB5znoG1Vgx9Z3JzqE1h45B1zfYNw9AtkMpw1wo5ZWT",
  "key13": "4RaZGZEV1t3dqj3i6zfvr5xu3UCwJ1Sg2uF6jSxbqxRTBtGYJkSbhjniaBbWGLKSSvuL2MhvM8yTekS1juwZc2fE",
  "key14": "4aLzowPZ5RgY8Dq3wUmpWGDkZaFZu1KEEAjaJiTMcc94VJdYCKMB999zNtuJyYVsUUvBtGDJ5SXdAxua6yd64ECT",
  "key15": "5Nsn8YbdMympB8ECGG6y4ECjLkW18HDGrGobtPznLVm8EurXyCMqJRznyq72XpmCtqDyNFEwPRhUwKSJwYzUkhaD",
  "key16": "3aiRzR7WZdV9saBzrHvPyvoUefiqx7MCGa3X8VpFDD4di5dC5vdR26siE2aFF2jsTzau7484zpCNbmXY7VggNYiP",
  "key17": "2e9Zmr9Do4GPGLcrRyaqZAE366k8xJ6PzNpzbEQEkExk7rxNPWn9BTXeLj9NadCCsessCPKtYcr81UAroFXy2j6s",
  "key18": "Djdsj9TCaDzmB7yrUn1Jr4cLKZ3Peo4ERbErVzxZTGdYzbqBSXwRFSJnYpMaAaXRVvLndLdYqpBUuzuMstFYRMX",
  "key19": "3mH4wNu1yHhimBvWdPWWsASjcLFfq6fBRPetqQcf5uQJsKQ1VRUQofK2TGb4rncDvQzsjegjEk5PpMCisaqg2S8p",
  "key20": "3Ja2gpYzqCae4TGJkyU2JR3uBGWjEhLzVZPZ2vDTtd3oTTyXju6dcQVBkzxQE5bxTjLAoyzVWtwVZssVxgAz8W5M",
  "key21": "3fNKc1x24ANRUgeW67ZipTyxE4ESySKb2Gf3cDGEZESFb2CguMAEeuqiqW5Gbbpnqnv4vjmMY4z5pTMMS7SKSsSB",
  "key22": "3v9QuvTx2N4YEwZS3VCETe9gH3gpfk6MUZjJYsQYEWJuJg7qGrMNiiRboHGnguRrgGTWQXtV9zLdjdSj5x7iZcy4",
  "key23": "2ZKW18aeKtiHuFVSsdNMc8zajffWLXVCkRUBNzWvr1d4ACbK2oJmf2ra5xRqpefhdr96RyVcXobXoXYqmw9iYSCf",
  "key24": "5M5TJAxa8EPR5wTGMWNbH7tnrtBFmrspYpzUGxL9dJoYCt6sZRMx9oB7MBxyRnvqP6xUnTMy5gp7YqcWyPXmt92C",
  "key25": "3VdpH8BowC14viMo63EjetEK5kMMJ5q3ZvSQbmN8mYg46tvZYcMf9q3GoKE9XJscTtLJNt8D8k5VNEPoLFgppKTZ",
  "key26": "5rCxPH14msEwYeNodmUXnJATiSXCbPtGCTorbNm42MY2TCtX9vn1KwZwjjhMJTLmakiCwS18S93bc2FeYg4KaQk8",
  "key27": "uzEmyvjeoHtmDjbQeEqFSfPnAHynoJ7BKBqXknbV2bVrXaiHPhZL3E6AKg1xhHjKgyNJStsLgQyGCPWWtYj76S6",
  "key28": "333t3NRkmZ58YL3RosgZVTiU2snfmMFuZegL1cNp92eATVmnnk8tRs8uYxDzgtPGsZVQELcTMXfzLqVtTcPTaktG",
  "key29": "4tjvRsUFzDwpTwfkb2J4SjeYwSNoaxLmZ1BMS93fytzJXXRTqnfzZSwM5q3GzvejV5MhbfzBgFGfELotAjX3Sequ",
  "key30": "4KsP2sj9cRhg7neUFNX5zK7bpgw89CfZcSde6oGRPPfue38MhMYRXc7cno1ZeesJM4NzsLHyDou78Gn7v63SDX2p",
  "key31": "aNRmHzhrEGfjS8YAHYe5qWU2ZjMVNK1L3kCVmwJPpvrA69WHq1rYDW4JWztLTqzpxSzfMycQRdH9qiGX5R6f41F",
  "key32": "Qy8o218PgXf4GzoPbsx6KAKicJxpBN1ExrzFUo6KUXxq1JLzGHadhkctV931Yu1z2nD6rUAGBrX9fUw2w1ThS2W",
  "key33": "4uFbQ9ctkByorTeGBXTgkunZNfnNzxUxP9GgtCQnNTcjcocL91cYGo8dDzKUzPBH5UDRgCfohwh55tB9MsoPurDv",
  "key34": "sSAu5hgQVQWGoTHzYyTvcNMqdLy65NtKvRW78mWFK5Ymx3ENxSLbeL5kRMMPCvf2KYBWBGeMNCFdkm2TR9sMKzK",
  "key35": "5HuxFtqBMZEvoXo13fDPYXgn8drzXtWKREUJqzoVbm6FEs5LiXpKpyY4QHphLqoHGZ9A8kp2UTg1pZ1W7jHsWxSj",
  "key36": "2KQKq3KnfXxS7zxKzWf6mZzQusgGGV1FLfYafgfAUs6JLoHYmiiGAFVNVrxaZS2vPZu7n7W2XdoUBUx7oFiShsSY",
  "key37": "2UxaUD4aiGvdBbgjEXiAprX4EoRwuiQTTY2VUUmHKxKuZa47HZuEHeNZopammzWuXcWEf7prySLAoenUu1WRtvhz",
  "key38": "5hE28UbxEXkdasJuGM4aTQZskRCCYt8SMgjLyZkzNLPKYANxgiN8Fwupu9cy5Zn2Re6WGAzFxCqTyeJWD5aqd5nF",
  "key39": "4j8aXTbQEvb5y3BYc8hzpP2zFcQVEeo3jjJQGxaRFtdfqdNej2LYAVQcjvPxWhi7tysUo8hRE42DRBg7cvrjyrPx",
  "key40": "26PeUh9PVSEZbMiX6UuvPfUxYFKH96MaJiAUdtroFCdg8P428vEcszAtjeP2xe72VPvdwG7fQS2jjQx45ndc69K4",
  "key41": "4vwHKEMiyHQKFEZNXHryXQySSsSh4FYb5767G1mHWLKsH2gK3ugMdMg474mk7Zvks4HkxZ96EY5PY9R9ZnSizURJ"
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
