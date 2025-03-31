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
    "3EEovDzncx5PsgjirW5QirM6Epyfb1PUrkxQ9Z2SxSfyhfuP1RjDCypFj7WzJYPHY5cGijBQsNiUhFVdwfJ3HfzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46QQ6JCi6ws69tTnagPo2MGmBhSXbQSca6kAuXiepKDh6oWoqJiKVo4voB74TVDjYTsjwd66ypTzs1tZihfuPAYY",
  "key1": "5NPcmLi1AtsxKWsJkGzDB4qdrJ9MvpmZiHh1NpQW6awRbHNH4QMjeyhcUZXm3ktewbYrQtjjVbKqWnurbcVVuBFx",
  "key2": "45TqDpwLK4GYKaW9HCvH5yWoehgrEvmYKhLhZkYBRBHxaEe86BMvETGmDjE6Z9PhP6RcLADrgJPaPN6UdnnJ1FKb",
  "key3": "57pTZ77FybZVmN4ugzoKUPukhmiGjCWu13T8mtEGKSshZ7MhWVFpGHFhYdUPZGzCn9pGN1JctQfczxuqaiHkRarb",
  "key4": "5DtUN1GfhTmTNbc7Fy5hZBRFL4yedUXRuegtHoT7RRiprSkyG7BxMANGPnqC2kscTqwKEsr5Zkxr9gzJ7sgikxa4",
  "key5": "2VcsNuFd6gSogptUupsKuGnjc66mXxf1YtxCFkvVzGdCCSwvfBi2zGWimW6Wfde42xBPNGk5556XdhnSwxMZHbgQ",
  "key6": "5WXpo6i58a4UMb3zQFRi71oMpYmYbwHy4NNnzieLUfGp5Mpt7cVyLcG6Ji4JidTvspAbKvpcMdXvxZFkw6wEwfUQ",
  "key7": "42PFaEWSgXxtLTnuo1U6ADx74urfoZyxGQg29STHDBGHBaGFK6RDeYCKijfAAExSqPJrLyvZtQ2EQ7qhx8LcMqJq",
  "key8": "rhAD8EyWgHCxwCE5tz3VbvCoTasVtWZHZkxN2gvB9hFg4d6mj8dwBTtPJnDBNECmAaH8SEzM9MUbzdCLJfYTziK",
  "key9": "4tVTvv348dX69Q1oBJ3LdRgmJ5JGmaKgWjtbCxqia3MSwbTxKK9uxYJGVkYDBjiqVJMyz7bKdxU7ts8bJmoqoDJg",
  "key10": "23379p9Qr2dJARn79jpUjTANudAJU6p5nxHr2vgj89swMBaXoyAALTKx5zNqo1bfBSJb2Rix7UQJggYbT697cr7H",
  "key11": "3FPPYeLtgSqA5UsAtwX6cc8LGEbPTCcDbMDZddwnzQXvBAJCS2coh1VES2an51fmCrNcKX6MnD4YyfDAUL8gB7uq",
  "key12": "3MFi1c8vNTBdQVZ4WiWYPGeRvT8Wef2NyD5tC4iC7ebnykF2XqZYzBNCgJWJmBz6UmcGsvzmiidtEyc1fATxr3yB",
  "key13": "3C4vjpnmDicSJxsHuF6vYjPcxdNXWKW2FGzP7uUSzvvTmm3VsBaTcR2NbzibSHUGeyFKnjg3nv9NnMCsxYKoD6ZD",
  "key14": "gxqTiJ2YQFFqi82MN8phVGgLtWi2MRpnf2bnNCjWLAXqos8TegAQJa7apYw99o1XuE8HXA2mqNkhbQp6f2Wj299",
  "key15": "47vZt7iGygSkjRoFURJDzBuqLbrUWWinfnECFH6y1kyttk6bv5MvpuCUYfKuqE4qPBiUB5chjgzwVaaKukNyxm6k",
  "key16": "4ozwDALsfcPdPPffNG3bjnW8VA6bo812d9MEoRHW6fj7B26TdxZfmXxDECDxpBGzrBXczfnPPCVChABGG2zFDL2W",
  "key17": "PWDYnZyz1QCPKqSgkfKvWNVF3wVE3Y5P1rcnR8q6TKEt6sRXycR5ePzfpEuUD4TnhMAv1AiyQkW9xvpkPzkCVR1",
  "key18": "4obm2EvqvS2pEJ7SMgePfwQ2v9N1Neau52jWiXoxJkmiF5CeuT1WKovmV9HWGxzu7tuJrXsyhhQ9mqNFikHgkmBM",
  "key19": "3q4Z8VC5jQm1Z6UktBLpYJLkH8AV9xxH7dyX8ySkC61dbNLwzXkgbrMHQ3XiXfbnjJf5zgrenVRRfTHe9Xq6ArUZ",
  "key20": "3K5fVFSSQPuZhEGqPj6nVwnxrYet6Qca3KqucNZMDnQ7ZqFVaxSb5RJYp44CtX6dMHs5VDWhZHxv22YiuG2et1JK",
  "key21": "3MFo8PBETvWtMoavV2TdZFqx1JL4yCxGxGAWyNeWCb6spa9vCxuzSXyjkWGrG3wQtseqNqGKViKJyWv9UejRJcVb",
  "key22": "4rFBUfaaKfHini3CvjE6TxCxp7sPiWrKfVynAxce9S9pwuwQbCUN3ax7EhivcqZ9AG5PFwZf6bGUVZAZSvC6Tqh2",
  "key23": "5iKoRmTK8JcHB5DJkFz2NLNArwhXeriKyRDNAdVu2uYWvVoSt6yEYZCkyAQTnAHjYocsi26tYoyeo7BDK2SP1Jrz",
  "key24": "61SebcMaiL26WynHi5t5re93DykAeLbkpu4vBMDvQ9sWBQQZLBfDSRKMFNGrGPLaq9NeN8qCn8nvXY3vK5mdPLcf",
  "key25": "24ebs3CVAWeDfQjuNKTowaRdG3EtY5db8PeCSn98BjVeEeNNsUgPUuk3qsQJh2X46EmAbiY1mgN4LC4Zo1wK4pZS",
  "key26": "5cYkGzCTQVhiNHTPmrq9vkuzHuCMYFjYhoVjQtuZ9jpX7R2QhGcZD2GZ4XWAMHpVseUbyh2PcnnetHGosDsMCzpm",
  "key27": "4osXCbyzedZxyD9RSmxEBtMu1Mbh2WxAa9m4jFvhHfXtejKGiYUpSS8jmiENffTMhcXRYPUVFpF2TxJ96zUegVLN",
  "key28": "59XtqUiFfNQ2tok97vtXQn7KF4eSUYZMTPcBxaiWwXVgFRNmSswatke1xZZaYaVXG4QRA9snS4P4oQ9RfAJmUuLr",
  "key29": "wPpRch9xUjNKyaUZkbQNaYfVZjJKV2tkbnHsq4oS8aD76BjyWFrEg4b77tbCsVsMFktt7fKUogjmrFzkh1Gizf5",
  "key30": "2QZDsssSDtbH4WfaNuHJCZCM2NfRz36e9uSwZ4Yd1tHHQ6aqN1AdrfNDzR2yvDbGM9go5vS4f8auQ9Yg1yud1dAQ",
  "key31": "UdSA1fHoj6GMpnbiE7SEHs17XhAymn3CXXvqotJamudkN36boB1SHZLFP1PKuNsJXM15tQugrn6aVho7cskCJHF",
  "key32": "2H2NwUWBvtDN5qSJRW2Q3etgiShUdynjrkydmK4fwaXrPNkAATkrwuZyDQ983x7xVkgk8q6k46PzvoWJvmSruRFP",
  "key33": "5jH4TeE8KdDrRYQYz5ZVT921bmjs1qUmUGVwm3zJULAFU8uuKFMeXQ6PmYDepphxATxmnNRS61AZpdV89ggnLzVx"
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
