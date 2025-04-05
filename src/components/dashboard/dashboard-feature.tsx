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
    "CC7A631LvVQjoA8tAeP7vx2UW2pJV7siKHuLMPHxdWQzK9C4nC73eggkxze1LBAVSQ5iQg5SmobujZHjMyVNwNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6TBW5sLfdyVbfW2p62zD8e5KfZ58wvKuPF8YaSxPXN4nBgpidmnTXSDTBhMfG6YiDj3seHbc3B15WSShNmDo9Xj",
  "key1": "SdF3vsd8ULAeeCiMFaeVFuRNHsMnRXDuRus33Hfn7BrRqAPHz7hnhg1LWqdnwf62gxudW235Wf1iEYss6FKgNZ3",
  "key2": "2zhEmKy22ZnLBByMz1USRTgHfux67E9xJFLxU3BnQminNSeJjMSe1Dfaw6FtqHSgGmAGZxVewZvTdqnkNev4y8nD",
  "key3": "5xGGQVf863R6Q7ZRWdhVkj9rmbMQTBAKNSPgBrTVq57rUrgtx6wV6gNouax7j29z7otiWSZ9npuPP31HmKH3rP7v",
  "key4": "EUE76zKhQiRqdVJYvxor1hsMDceMvNiDVTVb6rYRbyWCTXaczBaFkam6st5woNbjCtw7w9fuB8CEZJKrjiRZVbm",
  "key5": "5ve4mp31kULSpcfL79VJV1qWopS5dYnF9ZmYiWfDdPaUMubWvvmCgdD39dAL5X6A44Qcvq5wYgJh7U6CrosSQNmr",
  "key6": "a2eS26NStLmpdBZd6VpVhJcGRX59fLvdD2v6z163q7XqxAy8MJJ48oApEiFYcmoUZdARWoMGWHe8MscivMzDCLQ",
  "key7": "g24dgTpeo7Kdd54i5btyjuYy5AmLAXpEWCg9NzoSsTegPTQMhTKmnPUJtAi3WLhoFu2Aq6T9erHSNqiRMcdfPYT",
  "key8": "4gYKRMwpyjbeHdMDhb9DApgo7FZCzaL4heFFtvgv14cfwEBh358WnN45f61aCMTvQuUmgSrZSCP1G8bJMvqkLNvn",
  "key9": "Pxbeyxf3YLhwcRnjkwJkkYUPT4f14XLpso9rCjH9szZAtoEuzMWEXz8sN7h5DRD3euXgzgbWY5Up3x1vUXP4Yv5",
  "key10": "4JaPFQCQfuYL2cJuoAwmbQmmTr897dzLtBbwXzUnuFoA9x8BmneatF5wue4RSmQzK41EzyhAwYvmkaahWppBNzmq",
  "key11": "36z9Ae8QDtUcaZ3gPBCVA7zQ62Jdb1NHhQZK2f96Nx75VEz7grzxB6qyWPjJP4rSVnr1pV4yFcsXcEKW8tjfqCcw",
  "key12": "gEw9kUayXu9BXwfqqsqGYcctYihtWTjmnoeFpAuEA9yfZSkcibBiXzLG2dWERY4rwijxK4B7LeZdBpBz6ymhgrx",
  "key13": "2ayCbY9oSjxsjMFWR1vGqJ78sDKuUwoUGPawBC4V7Wez7NTbLixv6dJejvf36PAu31cs7rBM46n2gHroBFJyFr1z",
  "key14": "5Zmt5H2GVa3gD7jxTDvKeSZBckdWwC7MzJkc3GFPEzcGiYPZaBQgzodjGFd5SehqgD1b1LZBzrFwk3pKcDJAeunw",
  "key15": "4ciRW2jQiVbL1E3NFiRUtu5S592ZGchm8x4DA3Z76vzNmeEvm5NgkCrNqLHZeqWqhf6vAg8ECHZ2nKBVitkJTzq7",
  "key16": "5ESD32NkvX74tYKarqxQ32ayhLDkdjuUVfciTo6CnT2DirPRKcV3sXevYfXcfB6Ys4ksC1suyKLkXWKWc8fs2oBk",
  "key17": "V9drSTHnmF7jefv539oV2icuaQMF7ARttVsJPv8jBbRaghqe9GuzVNTaye3n9CfdzkhDvbAXQLvVUmSHrBViFZy",
  "key18": "5WcBmh1P5LDebD4FsASa94iRpWoVe5t9HU9QdEW86epnALCxwnuxLpM2xkDVn6nRsdwPU6xEz5juwYkNeE6eDkqx",
  "key19": "4JqStX23WgKyrrSyK4eAYRvYYUEALADQ2WZvhCZuSQzn7u1tu6uoEAwZURyM2iu93zFoj1o3c1DchoQxASc7KXWQ",
  "key20": "2JbHdQfjhSp9oYmV4ogBGzziHvVdgffYjgGXdTHqsZTDUG7WTH6YHtBxYPRkcnJiR5bC1Jw4jV6NJWbdXJZRmfeW",
  "key21": "7r8eFpBCPyKkMKZsTEqCfqXqsMUmvQtv9PGUB5DCpYqceewUPnZzVEwgvt15vrDWneXmDHCq5kxrW5KbH6a4iaE",
  "key22": "2xamW2YeCzy4Jtjrg8MtZp6MHaayWoaWxMgrStqhDiTHoqS4Wg33MHzChEMVpfQYbGXCgTGMuRsLgx8WmwfmUf1N",
  "key23": "JVNkyD77fLbdRzLeZi1azgLjVz4z8sCEj8gVejwg6TBWBjrbsSr4uTpfGYPVX4iMFyysLSt1YoadCFGDYMPB62Q",
  "key24": "3H2poxkVnxbXFMJBsnYBnF8GzU7sjXBnbW5nBhMASpunHXKdwEXT3YnnsmGBMRrG8X3HuAfZCUgWmGJwH5JcLyC9",
  "key25": "4MDMZf3U64bj5aP7g46eA7758CeSwtF8xLNzQ52xwF5ScYyrjzfAiRbmUGJ3w8oZEp12EyPnVoiCEGAkSskHyXtH",
  "key26": "3xiMDRnWnb4HzSoqDPgbs513wFK82KQ2LPwSy16F8V1X19Kcd3xJYqVcDaNRDyjVEipkaXFAi4w7gYEX19FPHZp9",
  "key27": "2gwz9p3y8jAprc68DDgj7dz1wvDzDS9t3s3AGqcryaL5xDWQN6MhTsvrFqVGSXNB2eNmhpDN8UdALTGVKjGffpge",
  "key28": "2eKcRLdfCdqAU4QTZ6yXVFAzsgMXfLiQvvw4PdQYC1qTWuD8P72pEMeT2ppqUYk7qK79maxAvavHjjN1XfqDTX9x",
  "key29": "3eU7MhWoKg4UGp8fayu7v2eSpZPbzSTmN4dZijKJbbs4D2XB7Wyb1c311hnM4Dg21DUgRyZxRK3RRcFk5qrqXCSP",
  "key30": "245yXfg74Eosh2px6mBcGsrFXfuYDNV9TwJmJJnec4Tc4DZTo3VDsiocgf9Lh3kRkYfYFTQS2EamLfDHiBat4SfJ",
  "key31": "J3FrfEBoAuEnGVebkhXJHSThmGQXFqe1Z58JvD5UZoYCFoCZu1pb4BzgtYFDvjEUa3dNNZSmVTbNw4iNpxZpo2s",
  "key32": "2AtDSHgrx7273MvvLx9W2h8rAJyjq9ZFjFCakwzfWCRM4McvGPbPqCg6PeNyXwotFWR7sUuJMH6XNGjyzwMKnFq6",
  "key33": "3uD4uGUjue6J4B6s3hK1eFXXmS8h85nnSpBJruRFXwpEMnfJziBFJLc15Vvs7kycmaNbTh4uNHm8ivQQg6kTsgN6",
  "key34": "2ioJrN59zgmpMAiRmdXYhnLi7MDYN8cb52XqEj87TQKaPxuR2wVnTYQm34X9m1wvZjHCad51trYnWkfT7CPFgHgH",
  "key35": "62im2L7CDFe5ZMnUiL4guNAZbC8NHczyrRqvkH5GdLXYj6bDqwkreWD6v6HPYE6ckGYFKEDB56tWc7cz66hQKpbY",
  "key36": "38tJ3w4odEYdWTdpaWjRV9TodTQRydcjSv2KPXWBHvyDXbrUNtR1DD6iTPrqDx811uuDMt4tqGfbjjo2ovPaCP4j",
  "key37": "3NCTenf5ihNSGkRkCiatmLyii4DRyyqkMifFa2qqzRW8WzMrRk7PC1cVBA2xT2XjQuwsrZLtCHC7kdPgVRdjtcMw",
  "key38": "4ncwnx6HMuBRNJKcBwxaf6hfogGkD1txyBZjqZavJfCgJUguU2fZ8pt2ffWiWeCbLYGewczoEnixZVT1k9ppWUS8",
  "key39": "2pJ3y3MzqDQRFw6Ce4xrhfJy9aUt43wcagcYqCnjYN7VuinNzhQmbUUsAzFrGajaeUS2oBxiDjvri7quBZ92djfr",
  "key40": "5a3pY6w3AymVK7xzJXp9D7B9ga9Xv6U7fR6FYyUby1ZkCmRaxWae6PHS5B4zsU8Yk2opZEuFAt74diQqBRhhRWUN",
  "key41": "5MPUotvdAgk91b2ryNYAizC9y3QhKPGZXzs8xn52sYyRamZMjUE4SDh7hdwjtA9oDoxwkjbPV3qV536trQ8VVKkG",
  "key42": "xKyV8QqQ6VaV1BN9QnsJTugqo3rKu5Weq8bNnJNTzVwaKHJ2sonHBPmSPQtumufMWpBN84769sY7Xcgby3f3P2z",
  "key43": "uURGkKMPJVkbtrZJbc1tmXskro9z3q5hcb18pKhrsfHndrn6bfvfAU3gYEkGK3sqghiyeMZZTAAeApGJ3TwXQYz"
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
