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
    "3wD2q2M9G7Bfx7CGbr3anFaBL3iD323KyTDQ4mXHk3iH8bkd1hcA2dr2VbfnfgWJQKQYWDuYhiVc66Lu5ytvV8eU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FcMBQLePdzyRbyKjmchpY1xoSi4VAfehGVjAwnNz1H9TH3YfHh5d5Z3xS11Svbg9Qxe9SGcZSJWtPPfCM2A2SWs",
  "key1": "4JPFLH7LGNhEeiJfzgdBwvAzqmv4YR4ZPbNGn3xSnrMMxfnM9cx4WLhqa5qFdGYFoJ4YWVvnYRsu9JE8hDhUn9JL",
  "key2": "3uPynpTbjqLGWQ4fx72njCSBK59iArT8phXWc7wSjWmePir2f2vfwzoNpiEJyt6xepqcZn8wJzR8tdAykkKHwTe8",
  "key3": "5h1jDATxNTWuze8fc6Z6yoU8t1W5XgMfWNdz8vdzCTmG796ob1fRvZ6Q2kcqNTWxJyMrUepzYhodFqbqujzu7mfq",
  "key4": "58Koy89LKmtzM5T5zpmu4cxowQSE6i7GzokoHtxwoonKr8sLGoLoKgyGfEZbpGXbBS7CvuBWjUHpAwVRTMxvMza2",
  "key5": "3n6hiH22ehFSnF5s1wRRnL8UzwMvgC54kNWetWxEQxbGU5Dnx9uPR15XAj8ra5Ly1zttVzLfDmK2fvoHtQTmaw1s",
  "key6": "1Pz1zTUbpCn9p4y8Jkd88ysQSURhx5CEPQpXC6Htc81mWwp3ik56W8fCdKRUmXVCBM5bfR7kxieCGiWaJAUsfyY",
  "key7": "q2UwC4BmP5MVBQCQ5nQw9xbun8LEQYkn6uc5GgBn7XXEp2VkudtN5XPT2cRonDMHLYXQTFeep5zoEuX7YGrXTqv",
  "key8": "2A27App9FhNvGrAQnQaaWJ4cLEGJNEw9WmYD3B8NBU45RHqLkkZDJC8F5LWsvPMKnmwXSjJv7jQfdEeqzoiURbWL",
  "key9": "4S6zf9PbctMVQRPifYmQDw234GK8G1YYNZjAwpfqJYavAPRsh7nypGTcnjc3DRjvqGbERwuYY2nZUH8zrJEBDA2g",
  "key10": "3ZLxuYVRLyj77bF3ePBcKMoAs1ZCKjc934Krdj2EiMVKMWhrWzk85Z7X1NLd6Kq5Y7JaEjndKoSxgD9WqrZvrrst",
  "key11": "496US4PPik5hEWnqMa54rws9u5vwdJ6iv55GTy2DVupQVycs1Gxiub7YirUzyFLUHrUXTYVY5QCC7c9bmer1Evm8",
  "key12": "2XGGkZejfiBjLaFo3vWCDStKm3Y1pRR3HAxd1VyDhR2vgJVincbCDxb9XSE8Gz1LEo7XYL4ehx5ddjVNis95uG38",
  "key13": "2iXphgLYn6FDG9tAxLS1PdUNVCzniZJePpxPS4HkbpFqc5sXRPSepyW5WC3FxiuJDQruCD8qPLUPLFKz9MoYsgLt",
  "key14": "5yuVdsih4CV9unwMWdaQogm7d2BJ7C2DJNvevHpjERcicJzjhqVEECPnyLADdS2WYionbzTSJkt8E7MvQNCaias4",
  "key15": "3LCJ1N6maPL2FnrtahWHVpupMcbwcMiLunt3s5wrxrLxuQVRWLqkmg5jmMzf3arpqeLJ3uyGGA9pNGH9LHiBDjPr",
  "key16": "313p4s3pYjZbTBpNHezdQ6T9CHNwjoFXsrkUFP3XwQjFLNR91DhxjnnQTEMGGoheyBrFuChBpKWeaRcJHccG7tLN",
  "key17": "5JKvf4q25nMFRBaedBYAPA6QcC2paHnVzsnUsoGkRQ61E2JMXjp3KqPHdiN6sZPcPxLhtmiwi4kQpq5iA3cYRAor",
  "key18": "2XQhXcHyoPACw1FSvYMoR8uNqT36WEDRKEHJU5fVab3Y2uWpdnvohEAWcTh9HxgJo8YEJAFUV4MjybaTHovD3H3c",
  "key19": "odVdj53hVaycShfznqDcx3fcddLncm3fyERmmpaVzLTG7TKyiZAoTCk6VQC1EzK6Kwu3obkTrWDvTX1PRhYp7Tb",
  "key20": "4K64jm455jH7CRVXx1uPqjrEug1mtzZ9iS7u8gJ6gdzNdkXzzinSfP3XCkVX17zq9EqLPHxb9siZayARPh6jNeTY",
  "key21": "2ecEWMTtPRs6G6JmuG2uWq71p8iC9pVNL1Gje74VTm8XZiUMcQdmzBYN7Los6RLSXzTweEFEyXqD58gZKCCRVW8y",
  "key22": "FkXumWHNtsjXjgX9fZzoYMAJiJTF9wvdNy526ntMuFAK3BhkVUZysaZtgtM6NFEWoSxbyQXwvzkg3AhyK89FbQA",
  "key23": "9S1v6oDwJj4erRMDz1D2mqdGiHTTeGzvCn318hFou31SbyvTxWsR8oNJiEtSH9ua4vBM21hKiSeLL7RkTT5oTHf",
  "key24": "5u5bv3kAV3nbMX5YtZz4qfpjuDA7UVUMPprehAAgb82f8s16UaiKqR2wPU2xU8ipct5wHxHvhFk5X16YaVJusf4D",
  "key25": "24Vgxw3LKA6FotuS5PkSRdRb9BkGfZG5HAFNy3XadStqwt6oe3egovj39hJT7fNmvVyQMyiUAoXqJZs62xaE2tRR",
  "key26": "5QSgtKTWCgwPC7yvUm4RtJjAmgxPJrGEKetjJWh2A9L2hBYaAsTnmhhNPju6QHqpAcLHJgc1fvaVQQqfTBUC6AF6",
  "key27": "4rJzHmCzPem63dmqDxWJYTCdGWqJXPPiwQEK8bqwNQfBX97mG3Ly8xfnAjwAmCKXQyoHE8Dzyn2dpL6sXdzcZVis",
  "key28": "3nR98GN3om4qt4b4QMF2EHhnXLzvnSYQCa67H11HSK7epGZ2kGAXhL3Xo68bvqCsMZcdiBR8tPyh376atef9ehfY",
  "key29": "KH2FdPLgBzqNxW9qBqX8pasr85Pz75Ngp6m2ptmbVAkwUeULr7h5Du4WgL5ZqaFTwNRNg1QXVvPnEB7qaAsRPBC",
  "key30": "3nemBLe9DMeFoH5eguyDTj6J26atWMGUpzuYwikPMRGWoCcbsaZbEE2S4b6Fw3XrQMtHH7YpaXCqyJVTt2V8VGWT",
  "key31": "SAU3yBKsw1EGZTUhQ55grajrLG4KnRza4pUZKUG1KbvVQirDfnBwCorg5E5Etpxk9Poynso722brGXcfRAMo8eB",
  "key32": "48v2USGVvpZH1AVeg2XQcyMAHzr95m1m1sf51Aen8KSisX65XSEt4HT2eNePFvcBTfuXoLCchV5F4CWZFncJ6Xp8",
  "key33": "5A5oNBGaee5QeVhbZSmxUxRGXQmXuUd8RCAh6KmPUjpFDqdRMyzYEsoDz83jHpZpARD9eRnyCuNGyy5XQX1PTQpr",
  "key34": "53mzrUxN7PyHFHvKXYczHUVsqZeAoLSu6KuF4g4AuhW9G7vEnm7hFMAexrpFPXyi8aAAszym98GgaHccQCABU5Th",
  "key35": "4arn4R6bNX7BjRuerG7h5KAoaHk9N3CwjNsze96ctbxiPNu5yrEkGGm4eV9bvveaKdR8wB29QKusukoatNk8hoNS",
  "key36": "3NMyQpZEsXDDtm6mNmhRxhWYjb16Vzh9n8PSsPtYLch9eLVfgB6Ryu5xpvsaAnpsWzgkb2VSpbip6fb1PabbVdkC"
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
