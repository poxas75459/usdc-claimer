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
    "XctaWac5dcsXWSQrySZzB3iC8SvNJK3yZAEgYR5Cp4anYJpwiDwqs5KpPdns6tVFsKAVLQHm2dKVzJY6dyN9HoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqWsJiPGQZEDKDYJivgdYu92DM2T2W4aTcxXQ7ejjkSMPhxQyYFkBPsg5SMFyis2mawonbnM919iuck5GK3yy4z",
  "key1": "V2qjePguxMuBBRLk8Kh6bQMAkw8YwNAxY6RsS3ysbJpB4GH89HJK8LJukxsVABXGzr4ck2vUqtUfNxKBD7NkdZR",
  "key2": "5CugzG9dUad6PEQTKRVdo4VQWPq1rB9v5eubYX7D5CyCks8gF7DVYSzfUk3Pucfx7gFMVoPSstxS7RvECZDUqSF2",
  "key3": "X3VUfmV2MPbpxWK2Hfw1gYhXeKULpx8ofFUJH18nkX1atUVBw2DX4C5SrxVnpWo45252wxaoshsWxJUT1ugbDKs",
  "key4": "3T4x6C5v7nNB2vxsUM9CvNKc3hTnFuAwKkxG1BfeeiycBCNmj8JZLY1u6At4f6qfCNcKdr6uqtzqx4PCC5jhYeN1",
  "key5": "5ph8H2zsuDtSHgjRiMUohK4WHG5ur9m6ACbH1S29LXawvgeUkz2w8ARZqDoe6BJhcyZqbnga9Jed7t7WtJdpi3S2",
  "key6": "471fLjUo4EGWhev2LbpJ6U8YbuqGTbfwkMwwVCYzGxMfwhNaT4bW98jyG5fYHZzkBTx1VnF1jWUePLxD3NxjUCf6",
  "key7": "bVWqufYrWiw2gKkvUHBv4y1nPAD8xSdGZgaghnpVyMKLatfL7JLToxjpFkQ56AiWhk5ubXMeH2utrursnd97edX",
  "key8": "3vp9sVeKckymSERP6WJzcB3uJNrgFLswQn1wcxn1SUsbDoS2YAb7nc13VNKLhHGjihncvF5Pxp69ZMCxpyqUVjwt",
  "key9": "3Wmb4pp7nGgAmFxLUoQeS8PtkwQ6zvPhnNUnujYcRpvGVcbGcibJvY93RUFeG2vjk924b9fK4iCFrZpXUiCJDoK1",
  "key10": "4GnEx3gPra9FmdBz1WaTyaSqQfCW5kjm9633w7cc57MdLX7p1qU6Gz5U25PWg1xp5rWwZMCje5t6hnFTzCBSuN21",
  "key11": "35yXpwNVH3MaNwv2G6y4Q1WZw2eBLGbycy6W5SWkk1dcTsXUqSLepYuBi6XVwpu1fiGHSZQ9g2aBC2WYsAD6WYKz",
  "key12": "4iGQAN2yYwmvU9ZzGqsDmkKBH2B1aGm3j7YjG9AVgSZZiy8mjmNXHw5tBeb9HnK6s1cxzt2jSS4uWPG84RdSTinF",
  "key13": "V1J3xM3xFzJNiMfr4BtJdVk4qZYJYmvAikx6rsmcswFbBNyTWHEpYrHWeGpcqpPbVo6hDh4wBea6gbLPGjr8oDn",
  "key14": "2tDsEA4viRv9WSMPFWC1QtRDPWcRG3UDiWRe4dm7gDbqdQyP2Sj5z1HSnmNKjCHKxgyhhbpsAqdTexZ8nHy6fBYg",
  "key15": "jHUQVftn4xXyH8QyJAuia18Tfu1xrJsyTPzH7yHFLCA4zFC2wET5HrzKyfeDpjtWY5q6k7uozoiNskXe9shD6de",
  "key16": "4fyJvSa69BJTw9ePqaDSg2JKiDXx7CQyR5ucsTtN7QfyxNFieiX9hPifzQcpuazGZGeBjDSkfTxPUiZ6QxBguwrj",
  "key17": "3psGsLydSSsVyTXBQQMCy5v7JZtcwwdRoyL69iE2bkntbiQNWLonE86KFAGcHbcSLrLXYS1fzkEeBEqk9Mm8iaDY",
  "key18": "9pUXwUr5uBHGkUuPixioKeE77voMKfgmLMfDgzvgSJCYtw48Jjt4xGXRmy5Am11ntchEV7WtvNGakRQkyjoZVdc",
  "key19": "5sjPjyX8ZLaAgpRE66ZSn5K1jHHLWPHhLibM99Qiozmg5eSMFaDpE85yvWHY8if6Jz9BtK5ETMgajLAz39GiAE4G",
  "key20": "5mACTopE7htYjpsykQgyfEY6iX8pciVpCVMCc4jmKcmtcmZ2tUoSpKTfNFqbozbtDMq3wr2481JGRBPftnbBwwCi",
  "key21": "3V5nGy83uPGtGdmQxYxHNck3yf5ush4H22pGkE4pEYLqhkNWuNf6biQjiaYX8ztxYMAYAHKQgnUsj4jGTMoTDozb",
  "key22": "5T4oQ1hEhPvXFaghPL3CKVmaxKZavaVm1YfUbfpT1nW6L9UTWyGnHrAV44MCj2ytT9aubzK6UEeBt2P9JfUsVsdz",
  "key23": "25xa8ugMh64XJLBSGg2eWi2Des2ExSGduznDNTD56L5PZy3YVGEV6EJthoaRP3TQcLnWnD42wyoogHyswrghxrH4",
  "key24": "2ReMiLK7tvdsXFdTxrpSvyTtKEbNiniif2Q9H1fP3hczaeWV2qLVnEfjfnsdxpJDhzSWh9sV4Ps73D8Scg5HssFN",
  "key25": "2FpBfoBYL5Jk3zDWQwmYAysYZnN93T5RapQRacT3AcnzPYqVRdVKiLKbzCJ5h2qNcQudL6e2SVzJ8hc2XPq14zxh",
  "key26": "EQutVChNR77ssm1RsJYL9HG8CxMjk3vzXR2MWWeTcLFgPmLsHKzKpVbyzoibGgzuoKwYjscTgEaBWzvk18zm3Fe",
  "key27": "55ex9CAKx1az9FboYm5r3Brq3WyX2NpfgN4HDqemrTzk4t1h9jkji9V4y2undNQb6pre6JUyXgSzJ3PjZ8ShA8bJ",
  "key28": "54VbkkkTFbdAND34jXrACY9kVY6puUVuYUGx6wuQpy1yRevpcqu6KXTE3wiWnezP4cUqv1aubvfKdtbSam9D6d3V",
  "key29": "5ujNQQohn3hDbijLq2t8eSZ1qvM4gedXUMTMbYtT7krgp1rt5gZrTVpkJGM4qQ2TuArULQZ3QrhgRN6M4peMdV44",
  "key30": "25b7zcpNMSX2iDLFyRQ2oq7ErMeKewEvqCEFjyEPqDMAd8vJ5sDLomZHWZnweXKCBtq8k8uYF7Km7CJXmnnM2kiZ",
  "key31": "2Pd7RXbDPtRXV4PWy53kcx8dyCbQFggwadZC51LK5s2ic6NFPKd3yAdZJjVvJQEwfcrDbsUZLbjW5c2mLwmG6nc1",
  "key32": "3yBdV6XPapPVb7UxESmX8UJixkS5SzVPVK6s3brFw1nGpHFT697G3rD8RegYxxstuyoZrjEbQWPqYJKUjkbuuUcP",
  "key33": "aWUNerzJZRQGV7DvrYGEJCKzcr9rijRVgra2UpHPzQF469AWCxX1Uw8tmwLFL1X3pbM9hjge8wzeB7detirvKqc",
  "key34": "56sTmgWwxQtFh93utFJHGbaF6m87ZiWHXrrNBiQvWLrfs952MVgdC3EGsjmr9eLbV4sWoc4X1C4174fa6fKhp82X",
  "key35": "3BxEKo6CdfkUbLvZo8nvo7iCVRjF5vXT3fGBhp2v9opxcrfmA9kX2E5VU26BZJjFJZkrhUcskt9JpfSYSxTFbEMx",
  "key36": "24QQry4wgQW9rgDT9891qRtVHbHn5ifr7m3r5k7E3qP81A1efkLRhc7qoM6GejHGXYCXa5W1tM4bf9Z5cZ6vNTvJ",
  "key37": "5xyQMW3VdADbnTwJKP9WzRaAmQsFjsbycUPQH7g8EmxjQqYfih4t3TF6V3f4xePPK51psh353URz5BgXGeFWLYFr",
  "key38": "L5UJ7cARM3zzhYGbv3wJZqWyVHM69yMrhfSQJmH9jYkyaE24U3XYz4jksx8gtjps1DSdLu78BV9grRu4tyw1du2",
  "key39": "575CzMAgv9J5idUMwTdMaBJdRsht3sfdnoD1j8G4tidnNnXyGmU14CjeogaavxiRnumRXdPTwQdZRhF9ZH5BH9yE",
  "key40": "2GXCHxCKyRRWGwmxY4VkRdu9vUe4K2DAwU41s5yG7GEsfXg2u4Rn2VpMmp5a8Qf74fB8DxhdZTx7gXADbGztpma2",
  "key41": "3BQ44Sxwh46n1kQHvpvUodsxPuvMynz1RKokucKBak9i8y6fvz2jiEJz1kUV8Vw9hFjB8gTFh7M1LT4WWyNztCMq",
  "key42": "5rEXi7Dpudf3t71kfiaCoxajNFzdKrLbyGpg1RBJcKAXMwm3gTvbJbyV2D7VzdUwHiwVA8ZeoC8R6EHaUn6NakBL",
  "key43": "3b16RfGSw4jR9gVVQomy6MSgtUesiTUpig6ucXKr6gSxKQ41ZhJfSUZss7dxwEP6svMtjWft6kNeUy1UnmUN6drP",
  "key44": "47cURUtnkj1pbz7xQxprctDGjT3mmVvcqb6qd1hXL1oaPaeKbSKGT5QLxFD5zU3nWAh6o8FX5rophpBBBRatPgzc",
  "key45": "RDGqNJenadXUFxF2N5J6kCXuwhk4LraBdmaAnqhcL51M733JzGFULdUEUnoh2EAMGonBZsL6LGHGLNAnr3EGKPt",
  "key46": "5j1wnshrWyGMwaZK4RazwD1YBuBDSfeoqN2WApJduAGhh8hoJQ38JjfXKfAgF7APzGYSFjZkR2TWFV532JPNJn8V",
  "key47": "3nQvFHvHhhPuuBhpjRHxwus2mr9oAoGxDyLsLnMP4TstpZQSxGJWtyb2dfNpQNsFAqn1qs2rAsxZpksFvqVBtNV1",
  "key48": "Ps3of2yJYsSCsd6RXzDcXuzr8Bmyhz9PRbpfCpoJ1e8m8XWtSZ2VxNZFjLUjcWKKyeyRZTbjF8DB7kH3kds2q7R"
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
