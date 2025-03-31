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
    "3ZkSnVFZY2oUWNe74fzcmPSd7tkXMTPiLzEA22aJG6TZjruwBxnXX96CC8U3iw1WDgDSR5YbmL89KQcchbh3Z1hV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4adWFv8PgXzNvqu8RGD19HFctERFKcMSS9Co6L8NpVmJ6sWY9m3cUGPWdaNL3rP6o1Tw36ciTGw7TCbqodcZGoy",
  "key1": "ZaQjxdKWhY7k714b3T8dKgAm9bv6QPEpFPkfDDh3V7JsfXxatNSYph2Jz5C5sZnk9ve1cYgvnW8JS5ARkcQSR3K",
  "key2": "5YapEuMrimbwFpiZaghCz45AzxrBSf9hEwQAti4JjFZC723Vk43kfKKZd2AmG18E2qHvtc96oQFrvBsJ7CGKFoQr",
  "key3": "wEggW2LnX4THpygEQoEfVCUrHjwoDfR5CyzTWyjqeTaQe8vpTHcBQDcWns8t485mtxfTizHRZmYqFKiUMMKwyBD",
  "key4": "2Zt4FKwmY7CrDV6a6u1oXKB2fiSX73P98bmkzpGTGLTYpvVJvm95btHJkScDRYzGasgU4TN2e9Xi9pCezsNUZ6WE",
  "key5": "26t3FZjuW2Xao7gUe4Lfmkxet255ePShMdEowwHrUtUa5C9D9HcaGwoPyuZU9zrbs6oqTBMAKmGs53FxPX9mjuLK",
  "key6": "4RKaFZFX5FZ5N412vN12JgWBQEgp3isxQ3aPZuTKf7iuZjKHmUV2DsYhjwxENeaoXnzGdaS65ABGBcFbz1SuNtgX",
  "key7": "4xvgGDAEM6wahDfprt1pBvVXiPmR92xQ6CTAd9rVMPmA689vnARoPq7jkagrqPjPC6NtC8UTzESkFqeC5wV8bYcv",
  "key8": "5pWgVKd5eRkhcwxZYqsTqMvr75TnFC4MR9WtpedcT3L7ENa2nYiKRERMGRaPgMXJETG8yfMhJjsA2p13WHnKrr1N",
  "key9": "2y4abkiZtmNPb748UyvcxcUJSAAypG8pnbvUSMMj9vsRPbiPdaK6J9446VpmBSLGJScpzJx9KHru35GgagGPYUT9",
  "key10": "5qAAxGGGLF38Ph5AU1w7RiJ8otgF6bTdGjri5mLWUsu35sLqLNyhAuwqGYw3PtKcEhrSnBjFZtnsr6uh9zQ5juUG",
  "key11": "5TzMWQJyLeoJ2jwGyp73JcjcYRL74pfgfHQpSCTaxh1MwmNB7RqQyxqYnFmu1yK1gtjdqDf1tvsCdTsgu3ZiYxGw",
  "key12": "58xC92WSBqQHgLSvHmU7FGxMjDB2K2KdecGdUEk7FNya8KcPF11KHA21cchTAwDrxpfs2grKDCsG78pEhcfcoirJ",
  "key13": "3BJc9ra5t48AfXV3u97YgPNdeksSQxRUjEhH3CmxKZ24icnpdeFAWRb8zAYi4rDy6hGvWwhn7mhaCjUa6pRRkh8y",
  "key14": "zAyARJQvVTZA6K6GzbmqF8sNHqu2z4hPViRp63gqF2129X1aXxRKUidFtA8nk4hPCYABLYCMUotgv49jUNKkywa",
  "key15": "5E7zFtKAihy2BTYq3VvZjL5XeKDfjFGgemFCLLaACyFARrrbzGmn9g74Uf6CcECYa3czCMuURh6fxbfY7YHkMoMW",
  "key16": "4C8Z35Ysi1szBeN65tb4nv3JoWBn7D4j6BbT7ewEAFNc5DQXyk9fZRSN8V2i7shjWBFfRv2wkfpFxfMG7hebyhbs",
  "key17": "3hktcM4ssiq2dNGo8J525HxJ1b1TvRFqWGAcMuJx36ktPGwNZkrSY4f6REyurHoaB6fbfV6QUG93bVoXoEvXFejS",
  "key18": "4wThDUtHGqCCSELo5bk5Ek1RWog7tbF2DAtfHDbR8ZT2nks7KNR4dSnac58qAuMj9HZWdx5MJLc2LvYWdLetHZ49",
  "key19": "sLHC2paMUuXZ289oWxX41YM6LxqAerHRpeQ86oESq78cJkyP6Lb6E4KMRp4SdTiVY6mpe6PVV6WPpvDqKim5tfD",
  "key20": "GqvC6kfBJuAWPrcPEHVyginRWQqS7Pd5DDAXyxCExG528tB5cKUaMYBs76fyc7akoD6FMSNs7xyXp6WAeX74YLv",
  "key21": "4edgLFVsjGYQrYbcPKZMXpf98bv28zvHWKVxL2ocLSgNp4npdB2i1MdfPc8mTcvTwdHjqntyY9zL9h5r9WmDRWW9",
  "key22": "mdWL8QLzWoB3AEhjdQ8x7AgKfGuFtQ95pBCj215hk6VKCP1CbdNPWZmESWj2HB8VTf73w6LbPBKCUTQsVeQ2mMa",
  "key23": "53KtLhWZsrasqCZunmhTe6XwTqoDbtoYm6Y3zAHjwvegfvQqXQ3ga71aFvFyMUtRzV97mUtByfk8kw8r7kKhkbyn",
  "key24": "jtC8v4dcsjYWrQSaqDCDoofGBU3oFr6EnWmQmSdbB1aFQY6oQJxU1ZYHkP9guKnGwgdpwxwJedzasnBgo5pefZp",
  "key25": "3NzkKUgFv3z3kjT5V4BWdCmN7SHYicZLHEiwZfqBy7TcQGRSCB3eKUzQnDFpXqiNrPWUBVXfPuRGTpccuWvN3ZD7",
  "key26": "3ySp8423VcgRCN1rZCzzeHEFVNPPYhVaXKo4WE6Ns4Zdzq1r7G5TwZ3EZ6G5TKpWNiYGoibAwWtEBkAAHdK2SgXb",
  "key27": "36DQqqMKxoBvDtF9zyZEmq7XZohSDtzCYV8VGBiQzXufMRB5wTQm59J3VnVedohbsAtG1AiX8TiBFnFvn3VpuWXA",
  "key28": "4VZHEX9pkDeCJ2afXXfWwGSHSDEkaPGLK2zjnB9nmSpBQnDzCDn2fvmvJxqQdFWUTzhj57oi4wpeRoVENVtf8xpP",
  "key29": "cxUThinccuXY3RU572Nssa6EMjja4C5MrxdvLRR8hxqLsfT3qyv8Y8C2G1H3uST1s74XFJHsUHxBVx5PDbGgyqa",
  "key30": "3ReCYnfgRXzdHZCvCJSCiBjrVhu1AziTtZpnyWw4FEzGzZ8LwiQvBKjydxCgQobgyiTGXzvffuFkWJYocrpjPPTz",
  "key31": "5JByWvmNGZpcEKZDAfboCFvmBUDYv84jUcYVuBLwiBau1usYfo3VAFwqgyrmno88bq6omJc67KatNbWq6VpvEiAR",
  "key32": "31mxXjLbwyFEac3Fyk7em8z4267b7QKNr5pS3Ybu6ifFb1ZMVHNZD7CP8RCPtRZkr33hmnabDwRumX9vLyW999fw",
  "key33": "594acib4dmeA3fj9VqBDHpHYWzLXmipJpUw9Yf8L2Evfaurbz4mkHymHcg99ZioeWnptLqzdhviN5i95z2SaWXVv",
  "key34": "3AkvEBQ8TyajvYPamv7f863jUQr1wzczqq5c67ApucmKkUijksLF2oHam69rEY3SBE9oZXbYZoMzPuYq8Dxaonre",
  "key35": "4ooG238ZnTKS8W7PWmA4MHbsyRBWxGfnpJ9g11u2xUrjUxjwpLhEKFrYs89PxeP3GXDEEH5RTn8FmNpZyrVfr2ej"
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
