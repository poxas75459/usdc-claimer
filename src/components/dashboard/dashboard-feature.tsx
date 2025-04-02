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
    "2rDTPBtdcDeRJEnzh69dmW5dBcCF4V9CnxAy6ReWdcp9HFjFbB7CkYZuQsaNXQMGcRaJVqmmkQziHdCefQyJu3rK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p1aqMLXmqVnn2Rgombtbo7kLcAkkrG4igeYgidJe3D4HgPUoa2M6dQ3AiHgH8qDfSbepNLvZxYQfxSroJTS8i4J",
  "key1": "4K8qUV1LE9c9oF5wGcVmiSGAwDXkphQ3yAgSgwLEEXF9wZdpbb2DA5FTeQgpVqktg1RMchNiHoU1aE9LELhQrD8",
  "key2": "5cuTVAZwmpLRuQLUioNiMqq5xGamGtdo7JG9BK7dn4dVwT9taBYtimvedjdkQgk4r7M64BGNAwzxC6pVEcmDv1cb",
  "key3": "2xHmQSwXMrPceKNMvp8zoZs2LkhsEH5T8jBVdGSspLr6ZzRkVTvDjj5ozAzJ3ZVwJ6BbQ6rKxLZv3oLqXNhgWdct",
  "key4": "4AV29qF16TXF7nDkgZc4Ywfv8TxWFqMqm5Tmr9nBbBC7zXEZHpqfftjHAmjmXDEH4WwrxJpiyqSPJNfVgXXMCrYV",
  "key5": "5R1GGuWDi1jNZEVnKDhMyGikrUmdrwWcmJy4YWvsNaa85s9tnyZEeM8AHMHbgybQCmMp3LipKVGK89Zbqs7cotg3",
  "key6": "45b2o6FznPjaUkBAxtpr9XHwQaaXY9svWMMerJbM3T2DhdXYVDSWCzCpb7gEQa4frGnwp7RabvqcyiL2RL3TYDSr",
  "key7": "4GKHfdYE7UFXvVBGeHf1vBd21rNvXHgQkcjLa2jKSAom1QQUZb3ApKyT4tZVZ3dRMtsZBT3W9p7XGBNN7PYQ5ptv",
  "key8": "3VoBY4fQGSSwTFC4dUss7kRWXTY1cSzNTmREqzegpq9X7QCHJw6YLu1SHBKZX1BUzad6oa8SJKGQQTJx6H81ipbK",
  "key9": "5zoTcwtHRVxQtzgHHEi4EXqthBFGU93vjizsR7S6KfRA7UqteuF4DW2jczyARrQ8DwSqc3ekmVqEncUwvT9mWahM",
  "key10": "RLftgEuZq7WuVoULbVEJdUivY2g2R3ZadtHPbUpbU1Lgwd8NwH3cycq8K7GXEGwPcF1WiNuLsuTnR2HTv5C14Jx",
  "key11": "5pR3sA9dQnG1WMePMtQkAsRYonayb8MML3wuCM46C5Z7znQXhasuKuJXYPeF1bpEVTz2PbB4DAC27SqqqbaV5jPV",
  "key12": "xABdREyhcTYmhkvEYaUGT3PNVQ2faFLR8bKpzcrWfqs2njYrEzNw2285a798ucPHPf6KDer7SFiSXL3J6ie94ui",
  "key13": "5Jr8v1qEmQAPRtZvGvGHgtPBAi5uP4pgn4jGsPk55qmGbp2MceZMpPzQjgLywoiVRe8s2d3MtdEeGq5KH4w8F3Rv",
  "key14": "cKNQvMpey1Bprx8vkuKNUyDChP37UZ9g7HTkJyf8mBgR4wD5utsvkaDzpipB1tMDMFBnqY4d6Wvbof9vWUXhZX1",
  "key15": "4nExaZR1WuwzPckFZ7c4HV4a2uzvKDw9xi7R6K1q9q2eUy1DZAywC5G4Fv6gUtGrmoAcBMvGQ5ixeKeuPpkAbAYu",
  "key16": "5GnfKQpAbNByasGJkXzgU6S6WE5ay8Pzk8Ae1khuq72Qv1CyxZeUWN4JBFUg9EV5fjcV6w4UNdD2EY73jgXpciy3",
  "key17": "4Gc7vCu4hbw5W4SjM8FDAVK7yih2TFZmMAxoB5YjpPKJHmccWH7mDqLBSz9QWLCmAmaamYdcym1YZyfiaU5Stxya",
  "key18": "39PArJyAYfdqSvnRXJ3cWM13JXnqwVd6bSbsoy56hbgLCozM4B6jC2awHDkfBtutTZoBNJx1rf3nYthKx4KZat5y",
  "key19": "ewwvRwvNhWzLz8Hj2vVTjfVwFiU9WgmqtJb2WTrfnM7N2fZ1MsjaYx7ARLTS7e7f4G22rvcR6i9ptDEKX1eGHUt",
  "key20": "3Vat5NEBZ6wwLVYmFx3eo3raBu4u6rXxrgHDDyv2nYma2p5PXCcVpcP13ZTAS32MM8cutqo7pnEx8VkBur7aiS3A",
  "key21": "3eWF29xnrHaY65AFmvrYDWy7NEj69GobXi8VPfBSVpxG7LBrx9Y1xHq9DbZXR1GqZQVt13d2iDcjghEqkTtbTsQb",
  "key22": "4GAZ6ZXwFudguQHrmsbWTnHYPoeVq26TaqVfonFgSoZYrY4qjDJJ9BTGMbSGxjDidiEunYVfF1C3wNn8UHDZ2wpD",
  "key23": "eneYmirPX7iFLJoU444fHjwiqFE85oa5oBfTzkVTLkcWbGv2xt6F5RnzcDevfUS9aC3ouSzUfU9cAHNBssvvooM",
  "key24": "3PhRTBfEeaBETBXrh8VXFx8rRxsXsag8hbth2qsNZBrnRTi3U1JTcGSdKyLU7m59t5LGmFhpe6posajgHDBoBcwW",
  "key25": "3gouYQaykEdhKv6WKRUsVMtBzPwmRBunSZqArqVyDyuCJMyzKgvKHUASjzmf4v195eBVAdGFHRL92ZpN2TNvg5eM",
  "key26": "34UuL6YsaDKxZPJh1B2mo9dCvKdkK2DYPy5rwYNU72SgintgVntLtWKesftdZrLYcfoDdrdJdxgUvEN3hW68dvaE",
  "key27": "22nHfCGxf95Pt9bEMbWJdYtyGY2AeWThcu89e3HaVhecS3E8hYcsM1Cx37H7TiPRfit3pTNiwgCs8Fqt41FrJFdF"
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
