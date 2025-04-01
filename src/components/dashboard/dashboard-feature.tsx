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
    "4iSXYC1AMpbA6uxCUmmJvWZz3tE3EVU23ZCapvf5JVdw3pmqj75pEU9eEnsFgwCkq4kECmkcxZJgZb4kAKkB9nX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "387bftXa7ZCoCmHdxH5DA9F63EgS8YsCKLJ5z6WcZAUohXqbQn9JvAnK3cWyhCXDaZLdjGkbUZDWMBB3J8vn9tLN",
  "key1": "Siz8WK3WanQ6zcNasVYRFGvuBBCkMLws8oiQYYE2NW61WtqXSEPFZcGY3rxra6ejZgas9T3u9uLvoPKVNqkZK92",
  "key2": "2eiTkY2NN7HE26L6FRxuE8YuMBUeN1UFybKn42nSsSpLjHSVwC7o79wUXwpapaMCA6hMjqq6bs5PrPi6aqNgmgzM",
  "key3": "2n6oaCDkGWdoohcPacb2wr8FP1LBWPS4j49RhypnR1DdsHEW1cA3yRt4GbdBDhhgGqfwnxg6jgcXMyiKwrY7DRjM",
  "key4": "5NncEQakQBGRKwQRKkb2NzjXAXx3TdEV1S3eH1yYkqoTuT4FVvkmxKcXLpFEV3d4WmZ2KjoYyJTYVAKEkr6XvZip",
  "key5": "3Da7hMsvT5aFLQ7BGhmi5sHYhcNRZH78z8V8bQ2xi7yGt4sXJtFyEZspYRov1n7CQPWCAPZrCnTgRmS5UPERQKNc",
  "key6": "2C777KbWdh6qz9gRz1bAFNEqptW45E3WMBdZrS9vjCiXFt8ToHPrDFdDhUkYznzD4kVxskE7mZeprQg2gzMmkUL1",
  "key7": "2x5ChmbcvsRog7VDbrMjbWLiZvELyRKEYCrqhWgCbDFH25WZW2nXqDw1exkqJSJPseiEeGoX5nYd4V8h1ZLoN7r1",
  "key8": "VtYJdB51ciSG2vX2BEhxP7Cyu1c9gZ6QMph9RaudWydc7XZkhb4nFkT4KpEag81vuuLqNWePZuh4SnQMddvkiG3",
  "key9": "2wSyhNQqH4ezZXy377V2MhcnfJZZBun7EZxZqNEyr6Tm8FCJ6LEVT4AAkwX4CASE64fkWwGYt3NzB74z3cJsYb3g",
  "key10": "gadd5h4vXSCVsLhbsEWvVwFCZB3eP142rXdnDu4TYiEHwfvJb75u5btKdoXLTFfj26wdgrN1BFvytx7EHxJrh4v",
  "key11": "3RTaUfZbpqLX1dvJHPgwraQocp8ujhngBjAdwowXFcv2H2bSGTH1GPrJETpyLSScrm3gs81h8m2kVkfPEYDygTy6",
  "key12": "51AKfNRgGCenpxZRd27qXdrNGGAn4EJqtSm9w7Bb33qXeQCfeWzeqHL6FucuJSrj2dkHNrL77YJcQ4m6H8rDKiPm",
  "key13": "5TQpe5bnAu6NNRBo7BTQgchhdvSn4v4zMNc8vPz6DqmVM8L4k7zBKXFsyrHNTa6DP2PXrrt5k7WykCi4EU6SWq8z",
  "key14": "J2pjhe7MAmQH8CGGQieH7i21PN5LFsf4DbcRAVeK8sX3miDeFmSamV9cvXZQJsgYXJH6yETtZcPssJq241u5oNw",
  "key15": "5LAA1LMxCo3RgzypT7EFiFw4kGTwgz91q66pbowaU8Z6oA1FK5WiKr2CUxg4dXgZXfj5FR2Zi2yEr73gesoh4etR",
  "key16": "bfw2jyPZXTuEpJNXDs71Kv24zWq5qm3RFdFqb5cc7QGK6hyYkCx2wd142AvvgAKHFhw2u3zvDidGg9prU34bau8",
  "key17": "4kojdd9YjoLcVLt6a1SGxZQ4443axuCbMfuj8r5mMo28BVKfMoAUp4a1x8USuDq45PNKn51e6qFjkQv1PvTGTDa1",
  "key18": "4XzqE5DNN5fJNa1cPpuXxZ9t5ZJN2XXVERXk47trsYCqbENekiEpzkzgZ4fCHEz3sX8MnfuawZVbsQWB9UYA4Kmv",
  "key19": "2RTfGzQmwGnnSKg5evGe6ATcD9gV5vw21zvghVJtbyHRxevbtes2GWFEVHwdqb992nmMnowGt8doG5EZrw69rPmN",
  "key20": "nWE617V3LXsttizjFEYqfCYiBRkQqY6seyASbuWMqRPiHnCi1aD8EeSXZsQzNcxsdr2bzW221MySKk8NFxMRhjw",
  "key21": "5G8JZRxHxzRmwpPVwbxx7rAiWH21VzWHSQ2HCrzzQEj1PsdQKRiAXi4WTKBfFQxJ7hkrRnC6VkpwxGuHK5L6G32b",
  "key22": "3gLHzwsMKporeYrx3aaNfsEGdNr31aGbgRHyva7k5QeoANQqoSBZavoegSk4moXqfUJnq3RdFXNDx2mQfzwb6RqT",
  "key23": "p2ewqoTuhJfTFVmNDmoAwah2JK2iVRe5sYt1SUDBjditHdPfthNPNa1ZDptfMQ7a5RnFUgbjMJeKSuhpYuM7UeB",
  "key24": "2yi6JuPQz3krFcULuMFg6ttZScd9z6jiYkK6nojqTF5bMKg69RuVy6X5FgmZeeiS6gf9nniUecwnkeCay61H39J1",
  "key25": "2VDFLDHiNwCEjgryeo1DicBgxpFMLb4pCXrtwG8GRtBhFKh1qDtGrAFhk4rf5u58S176L3XwT3rCqVExyd81ecqi",
  "key26": "oEJcPZmyiDJyG4Xe2adB3iR4BsXXphy19YLexSMpzXcFHwJXDv3wXn3VxdRSHodD951Qa8YXh5g5ywyjh25u7rX",
  "key27": "4he2CssKubGjFgNp8qj1AJ24MRmekqUayx3VSY8ckjSiPkZNkn7xgoJpU4ETAZY9atdBwAua67Hvn1pJpWqDbxrP",
  "key28": "3CGYsSHPYXVf2r7J31N7ynWqd2TKY4dp1n9Q8oLW4Rr5CAvfKYGVF2qiPRdsvpoyEv6Q3ZXgEnwmKaT4ExDoChba",
  "key29": "3K4U3SACuZi69kcGuUkDUNxUBGTNk9Fr27at7uCczjmJncye1r8ooHUaRRA2CaaDeh5F7wFXijDpcHSP5pH1SRr7",
  "key30": "3V4AQSNTRhaZk2e6H78PkuA1pDoeBsBTGqQ8Gv2WNs3G9pxZMyT6TqZfcCFbmzzA2bBfSMspCf1KX7wtUgGk7YQF",
  "key31": "5YsKfRySyYt5om5HXqaRAgSvB3NpippDmxsEwn2vJjv7CtNDgN8PTCubdbr211RBYLdYmATadPUK3BbT53EVGYqo",
  "key32": "4ebrK8ipQkkrNpvn7xEixoDhxgcXzcqCas3BUfv2faSAYyjQm2X9wBbbSFJPw2R5xTfFe8tLbP9viJMZUHp1NCDF",
  "key33": "ZREVkygoYNd9etUBweDYug1xWoebFCvSam99egrbXGZemvd1hcKwN1fxzHpoet9sfKtGrmkKD8kJcSjjPbCB85J",
  "key34": "4wA56LZT1yTBQt2Mqc92Z8fS5UTWxUf5CJdN6QrembodzTjt3EVtf1zHfsuLd5vvRRXgokrHa4JDXtYCiJRSHz85"
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
