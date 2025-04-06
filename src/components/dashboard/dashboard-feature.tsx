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
    "2BipLD6aAG7UgZLViE5koSV66VXKC5RPcimGunReBBqtuQXLZAX8nuc72jcHGRYTPD795av3C3TsSeaXcyvWinDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v156USA9YR3t53aKNgDkXU91JnemqxKVUptSkuvwWxGY729vGhnCiQ3UDW32bASWFFABCrJ98KPVsNkawaq9iPq",
  "key1": "5D6S4ochqvPvE5G1kPyPMujY5UacjhCHowLezarzdcpMGY41umeDfobZHU9Fb5C1r6JiZt3ngkVGBN7yHxdeCYhd",
  "key2": "3KGJgFQtWhsZEMH4S9zcPMignXHejdZkEBSx8ch1PhK8gi3VXB3eGvX8seCjDKQuCTcvDTTw63Q7SqHYHLssRyV1",
  "key3": "4w8SvybGY2vxaBM41dLpsxH1hs59v7b8LF3vvoaVxK18aJrvpEDo5UydBjoHdcubJSMMW6mNMYwyBKGWmxojHvNM",
  "key4": "SFi6USx1MZ5pQThxvS1nmsTwmtUcmbbPx1ASSyH25Au4xDRN95h6cvprczdxPMqore5faMMv9pbFFpLxC1fukCa",
  "key5": "3G6MaYFu5QnfTW2c1SSJyyAXD7J8wYGiSBHz7aDJ2e4KQU1Bf4MRmxdFwrWe8hqcXNUWPi1mgwNejWBRDcPuvVR7",
  "key6": "2QviFgaNNjATuH11ci21CSMdrczexVtJnkQXSNWKaceToC4LzJ1dySoReqA8shtJsHaRUC9dPYrso3xabB44Scq6",
  "key7": "4HpZYMnkV4Ax9hig5cVSFw6WJbGLsCVcsgNgGEcMqsXmXTmXVjk1XKp3AjXVfeiPyTMM5T1e3ZfoQr8TXtKomz8E",
  "key8": "3bih9tdGhrt7YVBXi8PstwnEhmy5cAhL9E5sdadSMpcxqnFBWdvNqZFTXdXKDwGFK4r5KCHYH3xshAS3kV48hdY5",
  "key9": "29cKHLWpQ8z9QXCKWzTaziZFz7TZgHjdFXEVruW4Wv5ae6md5GRAFSUkYBHJTx5KpbSVRU9ar8En6TNtdkKnedhg",
  "key10": "5fz1QinNVDdGXCdVYoSvTit9zhLKo7HSYEXHEQG36h1wqYcMh6dVYNzwqDVDbcx2MeuDzsedxUzBMVG7oyCduZ9U",
  "key11": "3WLtv5VXtuL8tphQyEMz7ZNMRWJkthnvddFcJdrQA7PpozfrQayKxW7x4XDYJYJoJ9gNEM9YhgC95CnCnVytuJWK",
  "key12": "3PUK9jsxyWbNpb5EeQTSpY31P4Vdq4hMY8y184Rfkvbu3RteWguQ6JwmXKzFWA6xBpVyuz5GRMmxz8PtWq95jiAq",
  "key13": "u736gJ8mu8yxgRJgmR81vePuve6RsWwhF3LpmKKVZkgfLEeMivAvtdgX3dycYhMNN24LgqHm457rzRazsqMCrg9",
  "key14": "2BbKvNYPuk7RP4vkRJDSU16tYGJP8aAqCxhdttByTySSF3rq9CkqNN1LzZHYk3BRtdbnbVa9X8Y3bm8KSaKXHdG6",
  "key15": "4RmLtos9nPcbnbtcj5oA3B7VP8jErLCJ7pXFJVwW7TgcLqcaZPL2Bsy9hyeAhehXmPLKQzyZP1wJF6eskuqsEgX7",
  "key16": "4PwMgxx4f2LyFdzmS8E3REnsT9WCQRYXwGQ8dQP9jisUCUrLdRrJAihwaboW7PctGA5CpujskZrMPgryoatJbrTd",
  "key17": "3mhih3LBmVtPdDw9Q7DdraV484E6RfLTnjzso2phSyVBCxzkHwFMVe6LCLYRYe3YY2aN5vYQAo1jDFE1v6ULbo8R",
  "key18": "wiZZoP9svF8YQ8NmBreUuh6Svnt5cQfUFhiNpfBYxm9Xwu3MShPpkym2HqDD4Zk2Pb9Ne926pWLhbixDgpVkfRQ",
  "key19": "qkJCXz3pzmHBMUHbK63jfbCsW9tTQzKV32ewsX2VZ42F5jDADLpUbvKHAjD9pinEgdi7saLnPYDRmLkAhtnZsDq",
  "key20": "3J6usRMT1rUAT7SB3UbKRwmGrYbq5wr4urL5H5ZbX9vDW8JBRKcDMy8G4EhgK5dYktBsnW116EAf48D5TMcVtFZ6",
  "key21": "4kJuodNL8RhBu3VFMdpqw5YMMxCLjVzi5nwu8oxkizBFZgp7DjZR4992ub38igL5qU948wt9KuyjrrizYXMZZYsY",
  "key22": "JVjmxXMoaPkmrcwaS4zTqVQzrsQgPLBGr1LmrKWnYgA7RbgoeVKGBpiqrPx8SqZkGP9MyX86ktdYF1K8pdVNr4W",
  "key23": "33VtjpHmwxYQDLsPYqcznag67mgV2Pow5duZc1mfHPBoC85J1d8JXPMsbMCjnrSyRugTUmUkUdPRNKdWVdpyCxkt",
  "key24": "m7ahhddvt3JMn49Yw2YB4jWeV7RXKARQZkJR79BfhdAqL22Zs2DwTdr2rQMFr8QXh2y3XhM6QDqXRdMLh8HsJAb",
  "key25": "4jCpjTmcd4EXbjmLULJzc346ykdX3wL4HfGdN91RJHPuDyrmJiTwjaNrwCrzfcWVWERHMdeXNCvYPKHLgrhjZLmG",
  "key26": "YSSVBpAX4yfNi94782NF3qXpWpZSrhECqNtg4M6uDb112xSzhkywhgjnoWCsiUQsV5GYfGXx4ahcsUoFdv8jhtL",
  "key27": "4tXWYhju7Pd4iB3inXMjrdqFVkPnQbX4R8QYea8e1Hy4p2CnUPe8nYkG6juBd57Lnx935kseueqvHAVi9fhCsnyf",
  "key28": "44zAmGa9MJrNK1ijJhTnDBpCiA5ZxY5qDhYUcJjGkVri14nmvdJUcWUVn5YBppjB347a2JbQQpjjrVBJw23Akq4g",
  "key29": "2xPRgcyNyUwYuqHNdVKLe3qne2JY39ecev9Xd7mSuS7vxEZaGzrA4RmzBz3heU99KJtHZbKobiiHyWJ29b6JJrW7",
  "key30": "5c8R1c2qPcc3pE91G3K8T8f9XBnurkHF5txYHeYfizUw2ajSX9TBDfGGTAWw5iH8Vww79YK4pvmBLxvqo9kyepms",
  "key31": "4xt94nVA4HxVjCrYnyQCD9q6AaPGtmakf25mCGWZdYrufmg2UuScsLFc3n9WgLbRN39r99VkX1VC3LMp33iyRNJC",
  "key32": "j93e4ZCLwUHjTJ7nq5HjGe3UqgtxdMUYcj3cpQXqE1n7S6UxSwxRm4Dbh5AFossWsF5e4CbMN51goU3RLsVFvJJ",
  "key33": "dgJ1mtjNjMPobFAZdtRX9nTbcRXKjaJPWP9vJrFcTfabf27iFnJjsuUNvimLhZg5zdBdULJG2qkpcEPf2eJvKZT"
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
