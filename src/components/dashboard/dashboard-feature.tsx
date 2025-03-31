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
    "4rp7gnRzzWEcrooEZgznnhv53AjKVXgpPbKtKru1Gn1inmb4aPcZADPXzhN1CrshFzRyBJZgr8dhXvUAtN3k27wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pkqeTDukGBqBY7RBaZUEbLnLjC2BosFfHbHjDrGzwa2pp3sU7kt3KVJ1NkX81wPXwdFpc1FWxJ89mQvnuYFxq8b",
  "key1": "3zg3aFkiKcVL6SWJATGtaJZ7ErPnEku96fV7Xew9pX3iA8S4rmHG8P38eeCRv2RnZiHRXonvhLr1vvey9HudyZbU",
  "key2": "5rLoFGArTYAfAUqmWiGzkrUhNe1TR9rdNp9NZ3KUDRwTFWMHGgdy3GdRwjTy24cAAq53K2JbC5U7QPos7JjQJWKY",
  "key3": "Kqj3EhZLYsr7pze9B7GJBU8AhnxeCL6Fx3Wjg2rUhMj6kp6fBBmtSAkdsqB8AGcA1orz3MgZGxgLvB5xiAGKed3",
  "key4": "3JRv6ut1P6n6zMavqxJVhxmf9BowuTzvxXDPna7piytAyTq89jwmhwtRDXbSEso9dd4FFBUJva4PiVr8hLpHjjY1",
  "key5": "5qwiDcdDx4xJBQjNpd2fLpRhDdDpsuYBo2U2hEm29CBUgTk3TnzFiYusMho8gxh1MzpjWDxxPTHk8FVFG6LFXLyH",
  "key6": "41KqFFF6GEzbVAkCi6tLmDsry54zeBagjfqLEGUbSVJopNVPrpKMrGbC3TiCTxDSimqvcxgtGPFB32W75fPN6ZSv",
  "key7": "5eFN8PXMsVFRLiEctEG1m4AZojWZSVBiTpSUAgExrmgeeREMF8VW5YBX94J84hdbRbXD22f693vZ4adiP8Pa7xhd",
  "key8": "nhqdXvw4B94xEYRyDHQqttgrFKnhw4xVD26VLwjxP7H6eNv9Uaho792PsKKLEZsAPFWSk2aKaWwLfuN9Pbn3Nk7",
  "key9": "4am1JgRvLasBjYudh932zsXG1EKf9nudoeSaxezEZyHffdABvNbBLHznNyfEAZ94dwaUSkgn6Zhjy3CchtrU9SXn",
  "key10": "4CkGNWp8qRMoPG2zMbACWfyraemK54kzEJmg3rcVVDPNydWnTBnsEZSy65d9zR4kdixDFm75R5udibJ9duFAsC5B",
  "key11": "ySGXsWwPGzg9y7AAtjkVKvhkNf32BzfLGUvmtcnwP53wY9EbEKEVUPxtQ7a7v7LUxYo6NZgat85dkPdtrs54GRb",
  "key12": "4rVgKpVUo3jmAfeFoMptE983Ys29GH4GQ1WK8KFhVgc6SMqbtQbc2AcXYn7yBgu5HPdvKRd1jVsG7t8ZpR4TUfRB",
  "key13": "4XycisPJ6kRD8ogYEijWSg1kQDCo966f8d7oT6eKP37kqQSDJJZt8eYc2wYEPw4f4w1SyUSfrxusGwjD6VAv9K5G",
  "key14": "4YKRRNhEScAiEZPSqZcTX2vtjJK55dqTNpfXM7tcKdCVv6FDcHfjxTUNUWBBy48XPCTvJFEGAvbjCzzoNSYaXLne",
  "key15": "NupVUKaBPJtaXQG7FQhdiCKr3JAEaQiZPSqfG5E5gwQzkQaR6TAukBWDhTjKLDquZNMhUjKPKf25ChHbZHapgNc",
  "key16": "48KZZmcLoCMjrH3LXhNfEWCzQrtCJMY9JWbDCF2yyd7aDWtc8xyZWMUhGUKuwfHwniyQ1QCjfUxTAcmRWDfvC1kx",
  "key17": "4YDJaHiBmEweX7rf6cxkr3ajC8c8QF1dGCsZHcHicyctAgg5oMYZNg3kR5vLypeXMqpLsoaUwtkgPHwFWMA18LUy",
  "key18": "5xiJLjkVPJupdT2uxQ5cNg4ve98PwX7xd3cafNJFo53oPRwNzYJxi5hZSXWGuUYiBrEfJYB1En9bB5dzaHG37q3p",
  "key19": "2inQQi8iHmMYwWMt4ZEEhR5SdsKhdTXM1d2NEZb4B6NULnUnqcSQmuVLrtApCnJToDtgcja5LoJQWuVj4znMhbyw",
  "key20": "nj7UrbFLqwEGL8hXUoHckJQjw5VzuZ2tVPy6KsLuzjnZZRp9xhbhDiuzcT3wURaqDcswT4Hvg3oVRqUTGS4DYn9",
  "key21": "4joHaKKJwCyqHhEaZPU3k3KGg9zYgE5UtCJTfiinSAc61VMGtHECGwDJLh15pkAe7BT2oGzniascQxZq7HwThtr5",
  "key22": "1Vfct64hPUeHp8peFSQ6rt8MmuX1pw5CsLudU9xUkvZ3r3L6tndFPEqoKAFrwfq6ZyrJNxehawNq8suQ4P9CeBp",
  "key23": "3hsacMzxZ2n6YQSffgTMc52HFxYzPamRP5mf2HCFF4cttGCHX4CVfiBX8UW4SzhapeuhMZxgvXDwQKkLAERYGaas",
  "key24": "5Vz3XfRwACxoy3dMB4huFLuHE5WD3c5TMaDoaXYaNnN7KxQjxzHxHW76r648hAMH9q2U9iaW7D2SyLuVBKSUJiXa",
  "key25": "4G7AntXVNec15SQe4UzHwYxetzBur9zuW3YE1rn23FYY3yYNvj9Eg7HvLNtBpLyyzpRtpvB4QGT9HPz5CK7kqMw1",
  "key26": "2o9MXYqEz1HgxtoghwfpxtPFV8h3pZKMos9EfYHQCSPDSScWLpmQdTqqXLxATfYJHkqeqTTc39miVwN1EbhMfedJ",
  "key27": "4x5UYyB6xonoee8caN1cxGqa6To8MEdKFqRJm1awjUFvJf3SwUYMPyCygJQhkxTHYDB1zyuSiUW6E8vXgJfJov11",
  "key28": "3hi7XX6fqRXANneHrNwrmiCg4rv5snngf5xPjtnbe1ZYvSAoqvHfBB7rk9XKU7am4Ta5raTzttoqXvRD7ma3D9Qt",
  "key29": "rCpNJ3PvvM37T85ohWZMAmVbCVLN6FEaxs8Wx5mxiJzaULUXXfmkoShtbMnKfriEKsvRQQr7M3MGz48Wkh7XpYn",
  "key30": "4ajwkSxAdk3RWYamzfRcducbBaU4ozu5hUrc8PxYHjY8suPtYqXMuKrfR2j9ugp4E19m79ujj4eKcwvBjgYZhKWL",
  "key31": "285F1KYdh4MB4jDbm8JJHmk5nK1sW7Gxf5EhfZX7LH7XxCUMY6Yu7Z28NV43pHNTZgwVET5KYvBoF3NGNDBu6k41",
  "key32": "3R5faN4H2urKryotfPd4k3JfdDEZdMfuxNWKub93d1PZysnhkULKHRmTxzxSFSyjuU6njWQq9oyzwtsfRxhsQ8Vc",
  "key33": "TyA6hDrifF7L1te7EAbhS3uzYRdM8DqE81adJPDDQHvFwYbYixGAhM4nH9MHqDfh3pFoDToDhY14ZrtpVLcHhBj",
  "key34": "4vpJQENGsbBGphgQnDtpYe4NUktM4zfb3JMzzcbASaMyGEkcJbMU5VGgKDqAcB7DXCbrnJ8YMXoEQdkMKUUqgu7G",
  "key35": "2dQTQYA2rApo1xj5RD49JvcTwviKa7KbSkeeD7eJGco44F6FSF89P14x8H5qdgEJx7zHWEnzB8VgMT81qcxbXNtx",
  "key36": "3RmEXg7FACFXcytqzzTB8y56HKWJHoZuM3wP5KfvoXHUXv35qVrCAV7NH1ELdmYWdWxY8GWU2wFiCkHr8Xs1xzGQ",
  "key37": "4u34rwWSmJWXhkniYLGjd5t4jm4WumdJTc8Fp48Q7iHqZDdUL194QwMTube9wL7mHYTjPGryMscYKc3dZxgu8GbX",
  "key38": "43ae2X38ixKagRkxAzaziD99Ezb9rL9hbRLmUBSda8kb7f6V4zcpL5td3s4TVBCmUcRFsoud9VdwgZywdaMQKhaK",
  "key39": "VBHqegpbcYdbbuWdn6pFyT9P9TdexwXp5TJycX5WcighbDh2YhpkaCey68PbMTXiCQvy3DpCUedDCx64eKrhAYf",
  "key40": "4kLqbphi2emQNbefuzmjhLPddDibwChPXScyrDmm8oC2eNrJZd6bPkBC2wECz339roQRF6yzcS5GkrSpvJ4yP345",
  "key41": "4FJq3nXmZ9qKc3BUbUm3EjaDaed3Q3xeWLRfLPJ18CcuxWknZCkEqFPR7vNv4vBfMoE71rG7r6g614SBGsNy2XSr",
  "key42": "4ojP7EKHousuijdLbhAVkrdy1RPepEwp7tmiCzrTMQU5yw27X8HJx8W46NkFmC9SkVya9JsdgCSoSaJ6o4T8Epop",
  "key43": "5FVhCBA45DC8BLgAUqxhtrtKmAoh2tSaw7UzMY2FLHQr4bmZaTKNduHM66eQiiPN69wqLKULZTs5NoLCFcCkyQkx",
  "key44": "2hjmAgK9zFBdxmWUEQdywEahhdbdX31JTk3eCpuMK8iWjPGKnCq5eSDHqe3osQZzEw8942gfr9MztUbhWV7kSJV3",
  "key45": "51L88QbrVJo8bxVpECfFbU5tQN8qKwjKTajUBJLgZTBPrX4zS3WjYhp3cUCemPbEBKe6VzrjKdB5NPpMHNcFp4ki",
  "key46": "rKLurctjwgQA26ejeeUvNyX9a2UcSCLTbnZC4zQpGcgfmD6mm8U4JtNPP8GdhAhrYmWzqq9KiYRYkB76TWv2F9C",
  "key47": "2QkCoG6itwsgbp5XHHyXZV7UGZpK3AYj4V1MBVAKcpMf8kJnDZvipKuC6XXnsoXVC4kAyKhvtygKmm4D1fh269WF",
  "key48": "3e2iPX9wHKDdJph56EPzjFzB3g9hamgbFyJunT9vsiBk79qrUSU1dAfVcmj8b8i4eNrbcK4amcP4iuCkfAdtrujq"
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
