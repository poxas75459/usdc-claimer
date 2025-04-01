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
    "o1Ts9VyVuZ3bJdExDR7qtfTYSA3R4MjCA3b2DEzkYe4adkvdjhLEsnC5KCiGtxKJhFFAj2s8tbcn3pQQTvBidAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U7KwNmpFmvjd7VQVgGGym35HbbotzRxJ93bArVT8k5eRqqYVF54FQT5vBXxcDNzfTAsC3HThmjYiubDPPPW8KT2",
  "key1": "E88CAy68i4Q48TkYdAUbqejVPmLga7mGdRyrYhHAJ1KdWByz3e2qQFoDkFgirBmhXTgsPg1DbcV5PTvEJK4kakf",
  "key2": "223Uuex7GHbmhj3TpKBjpr6B5iYpE8JiuwhrCpF4bz3z8cbSe4Cuycp22AisB69F1Y2aNzJT8CsFmeJcmbyGLajc",
  "key3": "4NrGAu6AqxKrGqJ4TeVEnu3Xg3TZjk8gTTsFE8FAJKQBnuMfHjSNSdEqrLQR3scbFtMrCbXw1hzoeZeoh1LR8RMr",
  "key4": "3r1SVR7qRdSTY44EdeUmAkp4NnWjecpajvRpSoBoCL8SbNUZuvaJ5YKFU9hb3UV6smZQ6gVUoh5ixfthPDeiqfxZ",
  "key5": "4FHL5gt5rZfVRiKnXp7532wkuZQUX9gioTH6C2NsPv9jofCJA8PosMXZhHXGSmVHcF2kGQyoLSK1Gae36vNbNW7f",
  "key6": "2EavL5YS1mF9n4bmda5sXmuqhTdckmrz2L8HbFRUjJEKb9DhrnJFKLXAPVtHxsrbKqefKCEW2J4y2u2Q6Fc3Rnxy",
  "key7": "21AjLnsT5E7TZm7rT4wv2JF7HVVaAcmQSS6xcsckYQexaaRMVbX22bAHfM7VD6tELCUDow6i4Mg9CmmBxBucdgu3",
  "key8": "2M5KzR3uSxfw42UsRk5thMD7fgnqDGrJawhZRuoGW3dhxwdR8H47QM9n49TcLxUpLXh4JxoH33vxTxDSSr2WyifT",
  "key9": "35jCHidBfWiZxGeYFHXgKj3heyzz3gS7LyM2b1myJsx6ZAnuuxRX7k75AscJ71VKXYbxHSj6dWjBU5j4uRAhL5Qk",
  "key10": "K1cugYe7UpQxie9e9Xhy7E4xpgKf5Emnen6cVSt4HqScBsAzfEgL2NbM9MyzWdQtLvxV75XVcvwdrWWbF8RZ9Zc",
  "key11": "3iZ1ifG5UiMs5FTL8x9Gio8TguJz81fiHqc7FRYaucWMjA8kmgF5oNxsejsGEnRG8eS366ZSaUJcAdqu1bEbQAGB",
  "key12": "UFVivymL3KEYeTDJspCW3yYipFhmpZW7UnDZqThDpQmPDYubWJD7vrU8m8gV3TiRRdyDQeM7gYvYZz8pdKwPLP3",
  "key13": "4bbdcbSR7dDibs6qeRWsakNYPFdDBF61j3wTXaGGFVadoLaL7Sov7e24NR53tZLEzGPsjyZbDNLAFVQJbh6JE5yk",
  "key14": "4B5GdcKy3aXHBQWFxoqciaRJdbW393E4oRPnKXrSziDJxfe1xCpW6KBk4WvACNi36BuijJ6pnzVFLMzG2vx1Jh62",
  "key15": "43UtMXMJAkov83wWgj44qQtVzbVsZ5Mgiz8JnY7cZwPiqPCcVdPom6XnnuXNvbJqYBqwZt3iGcJiSJPVmozmKKNo",
  "key16": "rW3ocuC9y6FRyPKGjpJLBmuwUmvrs2cLk2Hf4w1MMWWwCW1vPvkYUm85bsNzcTnys8MVUvciDkXAZWrGv1NTo9o",
  "key17": "3DJg2SAQ1KzrQsL1WDuLi7HFhSYRnN1o9FTSSgZwDSTwrthboLPxEcKY2F95JXd13NfVUftL7xF5wqP8amGbbtia",
  "key18": "3XxeCqbXmXUgZxRLYRw7TjiwaXi5mgTFH4y9jRNmGsvzVwpBTp8bvRDPzP5tCAAwqU22TacmAbDKNnjjmoTJSj2g",
  "key19": "ks1wdjNMfVDwd9DySXT7C32vctss8nCbFdNusgrBLNKWs2S9mSZU3jUDnWTVeXZjBxN7MPWeJKzzkWw1sFUpZ52",
  "key20": "4HbxUpCLG5PLkU8PoJWs1Jsg9ovUgNW4kHRWUwvMzxbsdnkpQFSKJfkJfHuvofMD3qFXCjgBuEt5cuEnjTTGrJ3J",
  "key21": "EuXX6SH164tCKthUKjR55h73e5DLdNyTrqncZWsmQ69W5wvYh2grfG11hDsSn6Ctbpftc58UGPjQVeD7gMSwEqV",
  "key22": "2cYvWzzVdHVwSzfUBPkkM7bC3kUcpVy4fvaBjRB7dZL9yqDsg9PCaXM1xFTSBxRohhYQLDwyLNnWgcGoPEM1MEih",
  "key23": "3afKmV4jakavrPG5o44H5GZ3y3DpYqXyz3NcY4bFUZ1rYcVq2PKbLGd8d2vBKx531Ft4fkqQYcw8L5DKrvjUM3qy",
  "key24": "5Z4aQiw28QRSem5gMn5gAsgVvhctBe9h5W83HLPdDjFxh5bPuqgGa6gB8PcWULEGeQX6yrTcGC2WeBEqfRqXXzTt",
  "key25": "MpnfeYcWZvDyvzsASnV9VddAU2zSdsKbbYHoHqS197p8nDvgZJCTVqmswUb1X6tQ1bZpumigoFPi9TaguEhgBkP",
  "key26": "4BStLZZfsqT6VJXxZAT6jD6T6S6kyZQMJpexK4BheuRjh4viXYDrnfZZEodL41fzr5yuT1KZNW95HkTbr7vqggGq",
  "key27": "5RJy3S99yNPryDP7Qz3HtAyXC78bbpALDiQ6ry6CQbbUjcwz2eWLDrkFB5kh6wHBHzpwQ58EMjg1NHTNvyndZqk",
  "key28": "2BaaS48qqvJSjBjMXtRYrv2867QJeN2HS422fTR6Q1UyprJQ5rnnVb8uFW6Y5xAk6axaEawmMjVKpVS8viFk3TbY",
  "key29": "GkjmnEq1E8v48CMADytHrqHsL5AdHzWoQk1eqYSbzTQs6HmD3dBdRD211Fe8ZxcNgJhaK6XXQ9hi5DctWKHxQHM",
  "key30": "3UhQE2pfR9SpUmDfkQpu42kri2VES8Vq7KZtt9XiT5ChdCRxq2aDYWUt9vogrhws2RH3PtUPHu9H3WqN2c5oMuMT",
  "key31": "3yR4fugGa8Yy4ariFuzn7HYxpyQCkvCwUw7RJ8sArje1zJ54V2ZeVYgS2xumKDXRXg7xbFJP1skCw4ta9QHggLAK",
  "key32": "3WdDXd86UPGwY3LaZmGwrECqrJDYZvebxKBXK5n1t5eqxtt9rzvzEnvWbGABHTVjgz5zS9DoH6Xq7pxmsoUfdv1D",
  "key33": "3ik4p5RYFiWFYYVfseL38Bv4SmUtEHorvusxPZQja53LUF9NJ4nA3Spq6GLV4yw6yNJ9ZFwtnd5tdYv23dZbfSu5",
  "key34": "3iB3JTyjLm77WwCPMbUN3LiSgv932P718wEfdK3mvpF2d7LoyvNGKkbmLES9ZTSBCq3RTom1WwC2nL576UacNji",
  "key35": "2i9jc9Lf2qua2jDLFBW5BuVV7nqXpqDqwY424KeejkxjosGtwjqmcoZBm6vkvA7vcnRmeS5GCYF8HMHADC3Y1QYz",
  "key36": "4aHD8EJwEnviJLKT6DAtyX33aLUveFr85ihgy6SwPxEcwKMgTDYwjifSm3icFdwWdJnjnXWMLozEXP3g9Q88zA9M",
  "key37": "4JKouKzBhm2K6hZ8BLxjTeJJyfjEzmn1rF3dprZj2feAHsRJYmPksj6JjwPWSjFfJqDZRLdySrCZ5vos9D5Dj1sC",
  "key38": "54yN3Z4gC7t1uVhkjmHEBiL9N2jJFCjd4RgVyj77eUDKd7qycZysaP4n6A39oK4W4zntb5og6tNexF5kiv6kdL97",
  "key39": "4a6LdGi4AeXbfhvT7s8hXqxCPAdJkep7PwVNWrDF4p6gztvfkiwJN3DYNYFJxENRPuCcqakiEnDfHnPtQ6exiytZ",
  "key40": "SwQ6jQVhD4aRpcN4F3NL54sdWyUYgQ6sHuKgjE8iS7y7RojymgrawnwWnKqyjSQLWHXWgVH4nUACVL9J82RidQE",
  "key41": "4RXaFs8FfMsrij7x6JaymPvkSfGFvcopu4K5ZkKYHzgCfnNqfw59v3cAB6C42PH5qsm49ept72SxRhEJmBwd9KDK",
  "key42": "2F1ceFbUUwcyqBohJgmK5uyzqa79WgkMpVkg1qSC6T3SBt6PwRKQYvCze4h3FEtjkZCTpiAtr2HPvgrQsyvZnaae",
  "key43": "5iBw3T5LxfGisK5JUus2RX4vhSyaNBJd2oAfhUZGcNJ6j863nph6sW2zbEqYA6g71bxvqt12q4SuiCqCBvdPeqWp",
  "key44": "5oT9v3aX1fFSG95njwd9YQ5zkKv4Rex47PXqx3XXQdphpGjyMggh61ivDChwogi7xyc18D6kx7zUimJvffLXXTfA",
  "key45": "67WFkFPf9bXMVxdePx65PrhofHYUnJiRdJSLgZ51Rc1jvBUD7bbf7zznwqqNRW4xvN7Ds2ZF8ZE9kHd6ZmXcaG1S"
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
