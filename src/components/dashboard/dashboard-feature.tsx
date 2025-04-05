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
    "5SPgpn3PZwPEEkpBSareGGg9256YcGFbKh5KaCBdh1ZHRmZC5Z4brfSjSUVroTyBRRZgPPKeeAF3qbHhm2y1T2NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36M1LftqHyN1wPN2Jgkf8uG6XCQpEJyVKiqHd1WZHLxWawYhfC7Ekzmm9qADDYkMWwC62xJVmZyKXeUVaUd8YgSc",
  "key1": "3u7rnaxCYQM5L4FdWxhyrh1K6PCJknaP9jnnRiLiijcV5wP5JLyX7hg24VJi5bmYjo7fTaRrKSEfszFFzfnNJCXv",
  "key2": "4ZSMMHQMqdG67idh6hQCuQRrdXGr34fckVuMM5UveMAN36xhhJrcz1Z3bHVQWoBZGcKRwgH9ypXhqRtiyMjhLhp9",
  "key3": "4mwmP8Fr1fbbKNWywt2YavWaSSEQteLJSU9Vq6RWB8Tb7YHnNYixJWVAzgxKCJ27nXHyRdgXFHtwnaoYFZQyoLUY",
  "key4": "4Jm1dmmDa7LxAncSH1D7fC178TkbYGHoHSZpBgMmoE29WrcPhMQfYsbX32Bu4X2SVYGjb1wQ995wbKTYRhBy2Za6",
  "key5": "5G4RnfUdCXesbCnV9hBCMxpQDPmFX4TPmVK9EP8wqgicTEXmy1AkCLQSH8KJAhJJfmf2vLpwTNqHmgt4oa8odHWW",
  "key6": "5KQghkKMQB6qSYaVACgRXK3fL81nFcbS4eNs9zc6KxZVVZFdK3EnisZFJZPJVTG1rssqn2qTvwFqkar21JL9fC3T",
  "key7": "ktex2guEpqWDe91NEkJrsUJ623vWRZnTbQZhUw5toVUmcURcHq62bZ9AWC8GEyWu8YRwue66JNgL5GR8wu9qTAn",
  "key8": "5rkjKw4L2Q1GRwghQpgfKwFd4KMdepiwpmJw32RcUM1nvswD7MT3gLka2bLxjuvexHXVrN4QpnFqhSZJZgmLJw66",
  "key9": "5f6MK4SwDvarNS88TKuvNzyW5a6YCtPL8mgpw6k8q5NT2ZWo52eR385f6yNAFSJPgJhha62b5ioLmxEqojndwr39",
  "key10": "4DfQoPvNYPy16WzJ7T3LUXGVNyYBUhoGX3QGgwNqwWkZaqAnqf7B4vtNigjcn1NcK3yDXAFf497v3DE6FJJntaV3",
  "key11": "4dKmzVfJRo2DNGE29S86FU7X3PGVHgs2ZB97wRrLJCy7Bw3BF5BxfivS48u34RNmzkE1HzTPFsWoFr5vFy6i3c1j",
  "key12": "4DxyTxzDp1mQH5DAttDruduoM4QHS8tRey5jN8e6xGhMi7spGWcAYawzb7hK18wgZvV62DDqWRkypxH5rvH7nfTn",
  "key13": "3zJYEpiqd1RayXyztKprno9aPdL4mfv2xrZVa74QjtzdoydXKXkAjEDoD8uNY4fGnSg6xCECdF5oVxamtSjUUKSJ",
  "key14": "PAMEWQZMYZ5EoCdPqpFh91gH88LqZuRAswbs4qqMY3U6QYBzovGXF35t51C22g2SVLAxpu6QUQC3rWhA6oJYCVh",
  "key15": "2AZ5Lend5s1YJF4Rc9QgwjAVcPd5s8auBDzfmSAfLdwSSnbenxgmoPuqgpMA4nNhWURS2Z8kmWdWcR2MkZuCbVsa",
  "key16": "36cWyjCbikUnznMFx3fBcqHfX5HtcwzFdif6d93FPovnfyimeUUevx1tRu36odQfwRHSway4KWcamWDYYaZszjHT",
  "key17": "64cdLvUhumGAaPBapND2S6d38hYBcbG6FXBkqf6uEG7Xth2hq4X5uBdQQ69o1kWGZ7KmS5kqTmCvfKG1xdoHRfK3",
  "key18": "4KZq5aD5bQbqWPJq4G89rAeojB23GVpkLwb7eU9aNEAHb3TNTTX4sjjdpAs6aPaiRj2J457QK4XtZrLRVLqtmC5S",
  "key19": "4XtkDupc29uSgtQtL14KeZdZsd8ApzdZyTUnB1UEzaXUbx8Jx7QCvGEzrnTFJTh896s97MDGCssG1i8tbgHkwe5A",
  "key20": "S18i9vivSMFFCMBCHYBPqaApb9DazyHec12Vgahh2cZvGksTEV4YFKrMCZ6P6U3W7ae8Hd2aoqENxXMS9JiXuus",
  "key21": "3fQcPNeDAexkGoBuQpNHUFGCfeEcbn8vNxAPjwrYx6k97PydYegH9K145SqrTwdNWBnRKYj9v7K1TWCCtkWQn4YL",
  "key22": "sZ5CL9HYJ9vvxtH2owdPHV5RzA5Dni7v6DXU4FXrt32S5BRqn2q62ER7x81vBsLLRFDqtm3QESLbwW8eW8Kb31M",
  "key23": "4LK9R6iWnqWSusZM3Vd8oAcxoUX8vhYomAqjSADDpqYgKNeZRBZaX87TZXLbNuZDHGuM2aehjLRp7ePVSkmGLQH7",
  "key24": "3k8CTvHrxC7CCaLg3DjzYriQjCHzoyHc1JDtTP8jVVX8jM6zJm495nsa2TBUemEvEjDpRTWCv5qvoR2YsbrC59XZ",
  "key25": "5kyWQvbab4W4vvDM2WpCDjRALvabpRz55FXb4GjBieimZ9G8hbZT2VxtH5ZrMGX3AoR2quyMCBMzaUNtnQCn7dDY",
  "key26": "JXXVB17UigAtaoRsChQnmtR3jTTanM1ig1xFHUxiC1Sjgfp49A9Ycwe8DhKS1P73nwvHYKojq6nKHGvSBsdjm2n",
  "key27": "3xTUzRYogSYuE4hMQcYQTAqZ9LeiNPUfoAUHoMJuQxBCu7xGwmGKV8Twz9WfpPW5V2jEfVuL5AdUjzqkGPz5hw3m",
  "key28": "RmE1FY1qj1prf456RFNeojzyVfTLWzug6cSHSKinPAb77B89fYwxASahfUkMpRj5QXj2CemLrnqtZwcp9LC6hKT",
  "key29": "3SApHL6YyTy32H5AWnVNpn1gibkTWVih3RVKxKHVqDWAf1zLrMRL72C233EGCcd4cnq46mt52PQkKSNGM6aiEzZc",
  "key30": "QELtWzK1bkMRgDwqizW9CvMWZVtPzJ38Q1PQRsXYkcEqMeM9xJYFzyjiWmX9Hy2yS4DX3pmPtbirdcsXnY1g9fP",
  "key31": "XjfssJGdJhP8jQodKqbdudsBLZH8P8TKPHjDHM9EXUQAypwrYcZudW7L7E4PQNEd6FKxBKj4LWHEc9jR44gnNHT",
  "key32": "4BKVvz6coTdkmQinB1oa1atojjzqNHyvXw9axb9goEfWZWuxjzhs5PomJEfEnzsnHqnivTEkb1PpvntsDEjJFogo"
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
