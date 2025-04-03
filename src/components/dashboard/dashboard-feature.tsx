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
    "2L7o2aSmpAU9YzedvXHThGodr8n8YMY2x5R2vACyXtUo2XYqYSKguh7bcbygjxYPLhGMhsZdSLWuRjQUArkKgCSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B4BCHKhazK5BCyqvsoUCMviq3epTyjT8EUhN81V29wJsvjcL46GyLYoMfYbSh14LXh47qBWFz9WCxMrLxbJPGNs",
  "key1": "62fN6WBkTgCPrsRidkjsPkqr1wW63fjYig9CtQ1VZocVy8ShmrXr2HC2nPzckz9t6Ld2KfJMT2ozDcpL98z8TF3J",
  "key2": "5x3ArCEBuyxeNAe1uZTwZDAXEqRfBRrQcpFy8kozaivhr7ao4XeWS2pc2zUHKThxNVtSuypBnQJFMT3LymCC8SMu",
  "key3": "bokQzXD4bgkT2CHeEpf2ZHbdM2qHGNPXbsT5V5NDiCQDgbUvuYppARP7yxTLL4jfigJ6U5mK7cQxWCExyhm7FoM",
  "key4": "2f8SyFC2r6Dtau8xvpuHcsJ89Kd4gfWMKjFv55AkHerdoFRKZQU6Muj2DVZ1o3fzmogyy7zPcVvYDghDQUG1gyNi",
  "key5": "2QsrzcUGiRHD2vMmTZVBxncVpM6ZgRUNhjy2vmVWQ2nrENGHEoned6jw6BVQGf3Mg6JmKkMmcwky9i5vzr8LaefE",
  "key6": "2N1CUCy2afpF26UyZxgJQFK1BMRmuPFXRRg7TD1EeosEbgrqkifE26tooEkygiu3E5wDaswEMPRTQPauJwywPHEm",
  "key7": "FatKDyeCzASVPD2xuorvueEU4XZgTQkET1oV29oun5HVEzqz3FduwA34k94FAXWYzGotFqWw43qA3fa2yyb8tkY",
  "key8": "5ncxYC3q89AkrL4vRh6Kh9nynPxtYVyU69kYGzh1vBDvBZdyjNMt9BaJBmW2FD2qTMK8eWPyvdCfaP925TsQaaCw",
  "key9": "VznGTPgYRqfngEmUXxzSEn9Kay1iTdF1s4WCxv7PNFo19JZMpb4hyfa4mSMgUBaXSyVgVSNF31Ynxbur9njmAxN",
  "key10": "42FGbmkT8kJZWxpwD6FUKyXY2dpSGvFzWKZCGoPaVJxybcbR9UqNGh7CzP3EnF8wCE1J8xUDk57PPmyG9CaBF5mZ",
  "key11": "6YDeUt5meyr5XMk2LqTnFvQawFvamGP9bQvqY1Qq4WA7CT1mUjUiG1Lt1VA23Y7CukJi3H33oPodcm1LG7QTsat",
  "key12": "4iKBw9gSUggoj75iSGKavcTGSQioG2KqS3dSeRCEGBvjBxptz7mzKVfTjeEB53iF75tBoRXNcwJDCbassNpnG92L",
  "key13": "gDThh98KVnt1UUkTy5dLEdRWdHrNeUGfyPK7cD6b66hEaACVdkv5zgbrZpETRDViQo9bPDdCGgUh5JjU69U6V2x",
  "key14": "21xxya2Xp9XVmagFjg5JT5QupmpEF1VZEUicFgBcqjjE3h1Vi1DCsQcG7GjS5qLf3XUoMV3WXNpkHaEPSbmbMv44",
  "key15": "wjfgXpdnRqQdpDwEEsMzuKZDgw5exSAKZhUGRTCG1XpHjCL172QZL4Ud5gsi16x3y92Kv1X4GQw4wtqBHjJDwJY",
  "key16": "2kyJAq4ywRwhV298bVKbxPi6NEzZY7EHbnLHxEodtwMUA5dqj87GJ8Txq9KbL69PCzZwuMNCEDZXrydVP6z4ixkJ",
  "key17": "5bhkr74vqGMEBW4gvNNVfzQ2XxuYav2A6wDhNEc7232GovCw2KzxujLVmVRPyQatbsyAbfJtGfCXrjP6KWwHUUXr",
  "key18": "5PUGCrtXTo45QDKdNw4NxLJfCxdxy6zxEKcqvGpQWLcJG2AY8cM5so6ZTssLSUJ6uQW869jMsVdQo55RppvZygQ9",
  "key19": "45n7d6TgHr6yArKi9LKBuakTnUKC4CCDD4X9f8a6BxDBiqV7T6akYh31Mwqa1swfJnL5hMF4jcxMQY7fQWLaVBBW",
  "key20": "32gSNe27AJ7PhmnZw85EHrH12TNFkEQXYv3fHAfsVgJ88HuZAuoUPRxzaxcse9xqpiUvtiXAr1U7NMLcpqSG54Sj",
  "key21": "ywqrf373GFNeYao4Jt2cbJvgQpspu8Twmf2XY7yrmXbjMMvNc8G8JHWRb8LbKaThGZeQSHuJnPGxAy9M16KaJwv",
  "key22": "43V935GtnYEZsSr9rLUUaL4626nAmHmUstEcNeNZV1C5gTXotU9J8F2o4aeCmhwGaBycR8kb3BAbncVHpxFEPA6b",
  "key23": "avTEV1MZiysTJNrNpSHzcVytS2j8dw1ty4GD5s1h85dUkh1f6kGiq8PQkLYHWdt8bJyP2LEdbzexKbz5dwPDVZJ",
  "key24": "3FeX8pM8b3iVyjgDoiAQeZY9jV3EGQM2q2H2a94UApf1BPepS5efY7jYJLYZZ7s2mRZELoeoSGF6XCUyPUJuj5fi",
  "key25": "4VGyg75tBgb5pV51YBQao1ejiFLo6YGXmzBo4CfmxZte7bYajYrZpp41MZp9CZYxjeJrmZhbxYh96c47rFUSyPAh",
  "key26": "aeHfyaZmmbHnkjSGYzFF6AkXkybnQvA8CXs6tjyBpT6sNcP6cLF4L1uGec1YFDq8RbxhjPdocEPeMwexs67GMRJ",
  "key27": "rRwCdWEa8Dcx1xbSyh1bniY7CW8mG7VGjYsHSZ7ABsWBrXAW6rb2BTVVxuAxkYwjkoF6Lnhdfpr4PqN2SGj6K3H",
  "key28": "3FnWCYAuYYvseKRvYhwPeJMrmTh9qH6shAGnTWTUQA97i1q6NKHPPkxFFPS79aPdnaDhf44RsGgz7rdrAsodjMdV",
  "key29": "3fzvu81M2CqJuKHDQtUiq1XzAAodNuvfzaE9jDZbeCXnERNe7Kyxx6DpH5kJ9vSCCBrrqfwmqbS7qeR3H59viskw",
  "key30": "2iV4wm8URxAkntVknduadQjXa1mbopkDaopoSLRMDhcii31fH8CD5BaL6mGpka3o1cudDJLDXJXXoaH18Vcd1cMv",
  "key31": "4uuHJFLuEEKGn6xcPnKuZPCWBevSPViFQFxeXvAeoF4zpMi1s6REcGQbZwvX3ukmiQd7zNKSLnRKv3PavoCpoBSf",
  "key32": "235LJNHEFrib6x7hsYXQJ9xmcJYYSNt63sd4WneymtRMdPNdJ3VY7q8vHMgDfVmK6YKjomTJfkv5abDPPp9GthTE",
  "key33": "PMx7dSUGF9ngtNWvcHs6gk27JngvLRngtDKREWb2zmgkimhE7bYyKBwFaSEt8duu91tdqQXhWa8HDPRCejmQgr1",
  "key34": "GDwad8isKGDCx5zuCUAYBKALMZ9eJsaEnntsZfuMJ8pEV1N35qHsx8AFTaNYZKX2KBR9qxr7SGdGqJNq46SLhu5",
  "key35": "5AS9iXSKhxaVMbSuxrussGzsrMuo3GMypLViCxeDw1mMnzXPD4jBpVMcrMzTTzQQeNjYJfxaK3tMGozW3kxrCoac",
  "key36": "4dUe91eane8FVfobN78JfQS5UoCjT3uBj5euHg18ftReooaYHSZAGfTGKkVKfHSeZipuKuiXyvGFhnC8UqiJTJux",
  "key37": "MdxnvsCPYT99kTZGLZQJ6uGaqqUGWSSuPTLJ2gZ7XTp83eSNA8BCvM8LRzaePiPX3m1vzK1sj3d1JYEhTz9d8Vq",
  "key38": "5QSVkVPFefTT7hfj6XiQbBoh1W6iPdRSdransC4c7uETEheB6ZEKQ7CEA7ZcjWm6Q5NuWuhBrgnQvaqaTWYJnU2Y",
  "key39": "5c8RKtuenwYB2FNZ6TPRavZTCYy29QMAQR2tiV9n4Mh5vNG8CggCXCHgxmwkDa8BoUnUZ7DYJUwjCAYWPGQxwSz7",
  "key40": "3gnnbxrt2bRsNaiQmsrDv4hpwFXdRqZ6krj9FHxikZvij7Yifi7qn6ejfZMEQq3wHbQXNwpQCN32o2VLHwy5ok6u",
  "key41": "4BuHDGj5Gyxofbv2cqwsmxs4Gx65fL1dm38gdWT8FW1Rt1ERbdCkRznkmnbQbNgqZGPkFxW1kJapFFW9sfhj4woc",
  "key42": "25Bs2rf4XXhUtuLCQs4EQs3HLuaDevQSAswVgpRnhxqfm6bT2yTjcUdDUqxzTbNx2pRLE3zGZdLEV6kAiQm7wV5x",
  "key43": "hwWusdU4pSCG9HB2F8NFM1wjT9GKycroNW5Jqy7iEghdgrupFuWXUN6DND6WvLTssCidZpmWF9ApjkLKNWiU7MV",
  "key44": "4c24onWTr4JgGb7WYhHmVABXtikERHtjecUffuU51FAyd7SsXrWjAQN1nSGTs3HSn5UZqT7osWSM3SQMcqTcgX1Q",
  "key45": "2fQQLMsaBwUrT7aW7HorndAfd9yQhRwKejUhFnbeaj6UCaLEinPcvdwDrbJrWwCx8w9KuMqkZAvQTBQHWMmzWeJw",
  "key46": "3fQUjz4ukmLNpmeco9bva4rbpRsJWSN8iG2HyGMXqnBBToKCGT328XfsncHKzgaJAwH4RVx7vw5eXPcL52Mjg3zX"
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
