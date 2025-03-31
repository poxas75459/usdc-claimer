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
    "4b7pAT7cY3HaAgBqnB5FcxjHvoNCEYxbTPk7KH9LtoBN9XFMczQqbhAQY8MsAQ8XEUu9T2nL27abtV4hf2wNXNkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CNxgVBzpR5ShEYb2gh8Bx6kfEA7VDNPFhWwcXiT4GF74wpPMmDu6ZLKFE9qfTPKU77Uruv5LSfneHsgQK7UHrTV",
  "key1": "4QQs4s3JFXVz5JnFYYNeCgB7reTsh2ETgVLWspyqnSHcsQDEud31jSJZXwXPGaCH7vyhZv8wy6Uv7rVA2yXrg1go",
  "key2": "TSMokP5pgXNrkkkRqro4iMvjEL62eJpGTd2ri9A76kqPUXoHKqQiyFL8RmXEYPpjb9TzD43AnguX3tQH8gCxg8K",
  "key3": "3LwCN4CihdMRU6vby9jsCVPJmUMaieA3Zvn2Rr7BxSbsxBS2Qynnuid4LpvuCZPSyeX7URgiWebjt7Kg6p6rwypE",
  "key4": "5zSDJNjqBR3WKL4VoV1zj7fv717bQQxmUWn2tRKKm5J5jgg7k8nXesfsdyZsbaUYZZzsxeXqTwEGTMd82sYKDtqY",
  "key5": "5k71mNNT7A4AEb4Xsr2MR4GF2omMpGdL3xp8J3bL3Q53oaA94LKfPETok7SkjcT2JtS9FZazNEZvLuVXX9Gipg7K",
  "key6": "GJFha2813hsVd1MJAVcAnUdK1Lxj9wcDGe9Vheag3W8c5uj8icQmKJFJx5zPPjN5MxfN98kaDd9LgNkMLZUZMuz",
  "key7": "3WHy9dob7Xupoj4ZMHgX3aZuTCUnLCn7Mq7cwDZehYKEntSfVaawVAsvjfYpV9WDDqEBLsiYNN5CeCqAxNDVpLU8",
  "key8": "4NDk14ptiBAwZ38597FHRdvv2izYfAvVcAfzAuWHBKNMnSwuDiNFifx9tpGYWR8aZUj5DKy42oLRaX7jt5Eom8rD",
  "key9": "361bTE8Z4L8h2ERZfVw5Tnc8PZaj6XbNcTNCc7yekrtQ598whGLc6hHucyQFQ1WZ7WR2WBgB7jtYyetdkTvbQ9cB",
  "key10": "2JcwSvi9z8UUgQjnvzccPJ5GWbHAJnEcrAseTcEoX7ohmq1Vg8cpnWvRTmMstcjsFMuhg9U2EnU9ML31BsqSVcdk",
  "key11": "2rtSMeFTqt4AyDHxD8uJfCuV1qt1GH5SUMLhDMfCFVhmAcmXCM3xGy6BA3rnubZa8zatcqUFkt7ZZgK9AJMcHk3A",
  "key12": "2bPbEgmr1yLttbyaZqmgSCDyeN9ZjF83b7Qm6orBpVHGmxVGVJhnq4nwPyAHzFC2k5Uvd8oSJi8qwNcgf1T3xz2D",
  "key13": "4k3WAaj6GD1keBW2jtFR2rUj47MeSkPE21ATfM84wXEZVofjEED2uNRY9KLjTNaGa5SPiUnr823ymKyAyRf4XDf2",
  "key14": "5L1fZrtFDdh3tiDyUxjUp86zkXi5nVMJxyM9o8UP2GFPrRPN4xjDSj4LC6qUqq8LoSyDm8jQCtH6pqaLCdzQAwT3",
  "key15": "2QUfYhe31xfT47ZEQtMpX7zVcL6dQHzq6hmEkVSfxrMMf4ETLze9wehUp6pEx56cadbYkhDicnZQV9VbVoS6DcmN",
  "key16": "3Wab8KN1H5DM2x6SKjbHoDkE4JUqJumpCmW7cLkmawT4UK4kfnzcbKEDNgLWoqW7grsKeXB7bNPuDQ4XwVvr5ReX",
  "key17": "3EptmPaDwn7MwsquaFAbFuzpDybm7tJnA2QPPWoUuTVwpDqcZikDKU86ESKGa1MK14BKr9NRCy2CEeLSvC2oks4w",
  "key18": "5uUmdm7XXKyh7FTvQaJLjQz7JqxCZGz3f12NrqTga89qzM512xgR6MkMKxKrcrBQxVXUZK89t6wK3qomFV1K6UQd",
  "key19": "33N2pGkbSL1tw8FzyMWeFzyeLanTKAK4bi34Vatw8CzWunGXKoJEqBo3ZYztAx9deXTXEdCroqzA4YZtaz5dHNNp",
  "key20": "5ttSXWAmP6fUYcHJvaqn2v4v2Ci5XpxEufxgdvEMbQMnZHgxtZn3Get8rGpTyxCASwPk4YSLmenuYZRmx13Qg545",
  "key21": "2v5P62SrhV8szpxpnqEtN6CN2EXUBzMrnUuz8Dj3NdRZnZvfjMXmc3tkge3PqT8tavNvJ6Gd7pgrhLEYTKzdfZHZ",
  "key22": "5yGPe5echG1Vt2jrWuxZZQCVC9TiQ47HiggNtnbbrTxMoExfzqX8DidmmkAdmtXzcRw7idttuxNe3jxS96XYs397",
  "key23": "5ESpzYKessdcH3pWqJhMQZ1y66YiWmRcYHM9uhToZPemYSMPh2S6BJsLC653Ey8hWqshcEsrsem3NTpd9owuhQ1G",
  "key24": "oYRfzKffS2Bzk3q6auXYP5PXTApEgjKf4JJkRhYhRVSpwDY2WRNnhdPubazKd6jcYRjLDwr6wAbtvv2iXHzJSyB",
  "key25": "51dyQGWQ76aMsZ1gqm4dcXr68HngNwK59A2Qt36hPizvjpmsoR5NiWboYNqttQNvTSJ5PpyVvM3zaNLVtEvGUdDj",
  "key26": "eg2bZ9Hm8ZmZwmdJhgBZ5Wy3WbXJ21JtSzLrrSPn2m14mME14Uov1BN5s4S9T9A9t39ENANi3RTuptNBZYJfffV",
  "key27": "2QxRMs2MKG38FWSJMco7Kmeqm5UYvaFAqDJ75NWrsGXTiX5V5rc357X9g1kBCb2zmQpkbQHLDYF9dpNCJzQT9m3z",
  "key28": "4knzKWg8WYa5JBHMh2hbqTCMQQzMTgj67ES2veiFANeve9cyaGdfcAWKXezcDfQAid1ZwGqYLJvnJaPcvY7vpKDd",
  "key29": "HzYfT2qLABreJZEAagpc93qtHbNLCGAzPc5onSQbe5K9Pbh9mvSDNWTw7LZuL77YAwwGHkyRT7NSE6hB9kAxgfM",
  "key30": "58jHD7YGNTDALR5dDCzcsjaBPQGa591YDP2gepnRK5unzftEToiHj9QHxtv1kH7UkknxNWgj3MTEyQa5MmyPH5Rq",
  "key31": "3xnvgHDunXyApNy4Tzdg2RbZ7dexquTYTVXYsBtz3dxQcA9XEy8S8rPVRbCDEv6J3GSFyV4fBmJRuVCCQzP8GZmU",
  "key32": "2PAKi24drReJhATmNGWcrLJe3XRXJajXjYfW8jec8SyMuwsw5CpKoL5Euagns2NdwoHGDSFhEoLnZVTaiTU38tq1",
  "key33": "2GWQdscb2E7PPyJqHeEKLzd6PYnRHQkdW9Eqh6LtPft514QVQaY19ukzFWJQuUxk8d3bNkt9XgjDLq4VVtbmBC7m",
  "key34": "3z1SBDAwprncEHHnpA58odWAuyhefaJs7Q2mynyyeAbTnQvi1cU5fTzKCKVCwz5N52cfHZtXYbyuyuwUJ65xnhEB"
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
