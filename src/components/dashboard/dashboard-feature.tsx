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
    "5nVhbbbNFx9FEhGbzfUQtchxpu8rVZobEc5cTXG2cDCL8RmbB2XNvt1CjYsLHyWV9qFzNNLD74SsLtYq3tMoSKth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jUSMj5UbVAJRHNYrGNYhfXswXuW3akagYn5MKfqA4ZW1uoqYRcP2riaa3Ni8rqH6qSRrMgpBbbCEW4tucUSaJk2",
  "key1": "4tdo7wwLjkgFs9arKRJMpGyhxfS8r6VqaBi4jPZLSEW95CZodQy88gWnHb1co9nAhSVV4JgBZVKuccTxduSDRFVN",
  "key2": "4CcVUqebFTmMaqA4M1Q5pvRaTGLxa93fwPVXCpGbDUxsEZ1Z7roW7SZEf8tUb8hCYL6rBpBdJn1tV84XukTwKPB",
  "key3": "3szi2kdvooRSJW51QY5TE4XmraREK1DRuUGT7V59GSwZPffxgbJ1xRg4vHLuzF7kBzZMrJuykTaNJZemvMoyvkgp",
  "key4": "3UWCmbizqadF3W9eY6G93XtrfHyPvWVmCk3o4XmzMNtw2p36FE8cwmg2zehMYf2754AzZ1x2Sband9duADz1fv5U",
  "key5": "2CuMVBpgff5nJkuJ3D7up11Sx2pJ54eN4wNij6t14MYsZKXYsFnb8Tnyr9zosiLtJiCJdS9MAzQXPmFAfkYFWyFP",
  "key6": "3mKt7XPQpmJEcRx5UK79GEnuLV813DRBY3DUFNxgQWkLcmET34ibSN9doYe4s5bhqSHY8mDGBiwkbLKp5W2sE1V9",
  "key7": "48n8TxVrpx1jQjhi84bcecEMM1jnb8WVZ4kqEN95MGd7CNzKh8HYJCqwe2wGmbNBDzVbyYyTU4eTiwwbcV4subxf",
  "key8": "LcD9gtTWoqKjFihHADudragWnkdkYZFmAittKhJhi2attwBFx9PvTS9c1UobzD2oN8TcviVpDGhYe7BLH4EaomT",
  "key9": "5ra1pLr6UnZswE1ue7EzBJPJ7wLdNKFDWz6iTJX1HyMLrHuE1Ru2UNreUHc9a4i1pszcyXqbKhJh21aWcDurwrrj",
  "key10": "b6Y2ogN4tTDgTgBC2MKKpwciQg78w3zbTSaSFtYFh2wjhKtpzmPtufE2KENibr8TScFE4Np3Yn8MFrmVJW1Prfq",
  "key11": "BjeapN1G1WCEXvD8ZpQYZYaHDFAxvpSaHBXmwzWies2arieHMbYNoHPXoRrtrtHNfYdp8N8ekezvMMM9Mm3a8T6",
  "key12": "3Mb4qrwMbFju7fAM88rAxXyyPPsvZ4sKiB1uu4AZX62e7RGLsLUUuzb6R1HW2Mh3wigHW913fT6ZoeYwKNnRh4ix",
  "key13": "JN9uLkB2LJPVrTjjF2eeP7FL7uLJ4T3eb1Twqkyzka2ijer4zokZTXGRcUJoYTVyq3RorXGF35JMk5ESkQiFJEh",
  "key14": "64EayZG5eV6xVF2yPMR2ZvsC1HGp9YmK3fKhLPQrEVB6jqqfacWRdBQa7DVmieZMn8jzcXdvNnom1dhLAjeUeXzF",
  "key15": "43deu81RzDeTjrjf8aNjA9Ua2xV3s2TvkaaxPnji7KXWRbZ8z9mzutuS7TZPxQ8s4ZmNS5KThSRr9efvZuamRWS9",
  "key16": "3n7mVuKPK3LRXdpjBmLQWb1HuA4xBE78RqSrA2q8LBNKprZJwe5yVcEYWaaC5jJMVKmzKvaNN1G4ZonT5Uyy8YnW",
  "key17": "Dp3iFBUZWQoft3p4qxwXXHu574bwKdXWNp6LngcnsihtRV3t7vPmbUMUsbqx4gZwPm51PDoEvezAuGBTNWTtXqP",
  "key18": "2f2Db3gd519ntWwy1u6Xx9gtYckKTYYfwysaAV5MKgLSXe9LDK2JesffoJzrDi5dymEaWSv149Grr3k99sN2uXeK",
  "key19": "5pqagqbx1dVhjpD1PbwANxjun3aWNim3KnWKPRaNtsH5yoYh4NcoajFnPHPyQkFH774jx2anMNJZR1mqecxQktFK",
  "key20": "4LHrDTJqKAXQVNncZidxEq6o8AF1uobF69oNArodhtg5MiwDpouwDNrsMQaTQLLffx5AAqCyddE2u4v7hwKJWXJ5",
  "key21": "4waT4KSXb4xwjSVMDMjFTJCn81wqdyVou1TqkhrpTj9VoSyuP8dVmWYThPqLUWXjVVZvtSuXGEevA7KsdKohYsrn",
  "key22": "5cp8dKtHVTFmycQJd3fexviH52sjyo3Si8nvHFP5hqTLzpx4mEYtQfkvJka2GjntsUysYQyUkcTT2xCbWcQSkHxz",
  "key23": "dumXozPr4nTvg4rfMU6B9Q6KZkiJ19KswMknBvxTJ7TtbhT7SJKB7CySe8Znn7fCNCrAKfRw5ZU4BqyxYnGgt5t",
  "key24": "55A6gWEK2r11NpXHJSDGSysrzsjXX3itLxJSJ9uHQgof4Ac4nCqS1SABnhNWEYW4ZYwTsxDMHZW1Cbw9Ww89rwup",
  "key25": "2pRiRTGvjw9y7xSHo2YroRrFqgRRL4xH1rVmDmyDxn3usuPKdcUsbBMQdL7az37v3K6pVkj1W4hFVwGm95wrdSnz",
  "key26": "2prSk9CDd6tjMBic6wNkmXYSNQTusHjyT5UzTF5mjFvsFLFpTQLn8SQphyxh9ehV1Vy2XraFjVMtD9BF6vcMm9RJ",
  "key27": "USh2cxvT41p7jEWe4bW3kfZf1E8BRg7DuzkiPbnv27HxpSYHPSiFaj8J8PYisFj5yk5ScnxSypA63wj7VaTeQr2",
  "key28": "214nURVKGzAAPfiJQ97BrmNhRHftctseZAwCT98RWYpENLzprsAwBo56t3AJXPNrwEBLxHiF9EXL8e7bnTzxjsui",
  "key29": "5sPWDygFCV7if17wmSq57tz1zKBskowJGqsywbbVe85x1vETSn93hEmo2aMDEsJhHDuvd9y5Ky73dkecLwbwqowR",
  "key30": "FpEBGrBn5KiqH6r429LeqCtuHSfmA7P5cvYfCe8t45FrokNsGVmrpmUjvV6zeK2Zx7TWBrZU8fA5qPB98KdC5tu",
  "key31": "2P5kd22Qcxw71RxbHCLcJeTXCUdgTPnfSXRwrkoX7fB6DGFcyy4ixvmXfDNPGH83ApQh3WeG6SGgfiQdj96ZNd47",
  "key32": "owt9RqaeygjrcZGJuetZQg77t27SAhfABGgXCgkfFFsKLaUAQwU7k1z9wizk9F5rrHkbLqd6gfgoexhSvHYgtEb"
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
