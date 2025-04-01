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
    "5xLUAWAaURSeJWL8i2r1WXXL5SKtKE5ZEMnUH8LYfPLYbR8Ap7sYX4nyCp9jSQRY24cZGYsvZwEQh7PnAkgP6eq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "487ChjgUGFmwHarkdAuiZ4Ei6hAzBBMdvi2roxSYYzfhc6jT1FfzKR3r8bHDahxKWugzenWSkQ3TNcBgQhn7QvfX",
  "key1": "5CWtaTG8BkASZTikA3JzxDXwdyaF6cdKMUZcd7Mo7sqcUzM26kDsg6SfvDuo5dnzRn2Lf3UNTitNtFhP9bXJkUMQ",
  "key2": "5u8K4kGEkVQ2m2oooFuTqCY7zTjcfw5agRZKcKaTWfCXFap1QNrShtW4kPwRyyPX3cf8aZ6j5tbhbnWabUDpVJSV",
  "key3": "3JMLmQtbvJhHjSAJMvGTTqkRrCWob3h8GXZU8eoGAoUTVU6tX3sY9q4NKpwZjy2CHqvBcnma66Gwk1UxfThBcf4f",
  "key4": "4x1avkXReFczGRMZ4xxfJvJgP851seCwYWjXkk6QSMKERkVnnjSS24p5HJwhmdPf8voAci1SS9nTwZZt7Zkoz7wQ",
  "key5": "2R7EgCQisBJytBGs5VsBxgwrRR7o4sav3DHQJkkmLf95BMTgp7UvtM15wWDoBkCfeyNFakRHbBfiToDGPWwMxJ2d",
  "key6": "3DmBvcpfw7eU9EE92ZWj7BitZQdCJX72vu11vWAMqiwuvH7YeRLf39JhQ5P7ZwGZ19p6rWtYg1PzsF1vPaC2mnfr",
  "key7": "DotCNtVzeBx7bry9hUVw2L415ufm4sTPexqPN2NonCvSHrtz2AQH1CvtVoXGCVQxw9RwiPPAw758eekzEPVxFhE",
  "key8": "3pSJX5qQhqJXCysWbQVmkZpJL4vaaTyh3zPBGJXHyG71sv7MqZRnPoniNi7DjS6TJFokts8SJM12bhvFK7Mf9EnN",
  "key9": "ktdimPJcMQJ3yyWwemgz69436PTY22Dg3tGuy2oKP6WLnXhHnDW1aktqs9Rg3681Jqav18sUdY35fscKvDpvReH",
  "key10": "4ag84SEb8XRSVfUK29e4eyrCqFN5tFfjuMauhkto8XKSNtWPXosiFtsJsJ46fgPe6tkmvGqs3fwhQ8tNuwpTXDR7",
  "key11": "hc4ghdnVAZr5c9vJsf79rAsNJdNwwr5gvhfAPw3AWnAcsAAhPsxmZExkz2j6GiNAjDopgX7rM2WixGe18kQ4dTG",
  "key12": "4C465DCquLkkQTiiqMHkTTHT8oubxt1z7kdNwrH5zERoKBs2R68gw5BD2eAwMu6q5h7BMWrypeSya7uwPou2GgeL",
  "key13": "3ize5T1VAc5bVrzGEPeTa8YoYp5M48F2jrnAYAfxNYizaPKWPHVCiEb7q24Voua2sTorsF2tmcnqqnzqfM3z9oY6",
  "key14": "213kL2iVvmPm3HbTvfRY3Gfv3RhzHZCkjFvwJazoVwtKB4i5gY2BcDQosrnu1ChAVooWEWDd56n5RQg2y7WjeA9V",
  "key15": "4qeqXZD4McqrzkBAFRxtmuy2x5nPK3dfpSTpKCzGYp4smLTpNbAtQnqTSbcKSBmqdu9nFEkWrKKY1r5nvueLMHUk",
  "key16": "5fgWTkwtdT7xesyz6zWT4ZEpM6JAxwHfKkt4EjwaJMcCR6fC3SggLsnyZZwvm64rfLsKyW3cyLGnTHxjwahipFt5",
  "key17": "3MpWDUStWdQ3vC1WcGbvWmDydye5meyUfSh9Uws38XM2z6GUf9T5r1HnPALqabDTczfKs24rtuyjNtTzsbxayzoS",
  "key18": "3W7VsV4674x6mrL2rD1QZJS96ZsEKprP4UuEWoonyoUFwPxGpJJxbZqSC71XD8jR6rSanrsExcBydrALCzSTuJ7M",
  "key19": "3x4Ryj2rcxmdVtjGVLCgU5TURR8bJPMPi4huoKKxhX1moP1khB9LM3SFHwnS3vR8RAJE8yNkeHMMJHcY592Tin9e",
  "key20": "44y1S9qhJrfPcsyKsMF3VATLvzx5QNqJm9bZ7zX9UraGtiNdvn7cP3fqyfvdAd4U9bBdQBRyr94hGva44YQefqLW",
  "key21": "4dDddZcodwb4uyiRZgNBCssnwVHc2qSJpXiAL3CUY44NYqHY9xiTH2oMzdi5gbmysRjhTgjVPDi9fXcPXQjMbg1r",
  "key22": "U3mmbFYEWHMvBHeMEgyPPqShRGmm1C4xg7U1bTATKye3aPtzqEEmsesLJf9npS5GFgM7XStmidiRjXKWwRFRCye",
  "key23": "LzGnKUJBJbcAVZmqn4aMQsL9b9meCh9c59WihMpRnTPaXvkvYkigN8SDirqXhJsk8ENXjXcxe63fQEPnXbYJaCe",
  "key24": "5BBvUDE1gVSQXwvrAYvPnpYzyWdzNuJTCk6iffmoNpJDuMqd1yUh6mtU2UjLzXDCvbfEBaGMME2VxDCqbxdbCA72",
  "key25": "2CwtcdAab7DmcJ2Mb77wikFKfvcJLRJHXshU5dJwCnybCYxzvMehD93eKjkcvWkVRkfxij25c8zyyNB7cZFx374C",
  "key26": "21avixDrCV6WpwJ6eF9cAgcszcRMZtkZLaBpe7HvpFv8Rycf3ueiFoZR8jkFiuVGMi1DPKZjHjQAmVBKmaFGsjr2",
  "key27": "2UnrXhG3AjBb4DwHSKqXPJChDcYPgHUYmh1tLCfShrwBroWG3JokgVYEot3vzZAGfVvKjCWSD228yGWoGEvmTUZz",
  "key28": "2bHQwWuBXgZpUfx1fHoeWK1BRkTeUbi8Y1MKHdU7nXyzqKwSDA7u7XmfMuaCmbw7KfEsUThX7F7orHU8PcMYA3W2",
  "key29": "3uYjAxX3yzdbiof4nkTxWcwKSSS1d4uenMQKLVrrwjCgHkVUCoqfrsJdFnoYcBajQLzkvWTTjUSD6377p4eTbkpu",
  "key30": "u84srRvhcBDiyz2EgJan2QddapXiZVqvv8cF5MzbdHyQ1AT2XkC5GCsXu4YBZrQWggymPucvSZUE4TtVwDateeA",
  "key31": "4YRoJKRABQDvBH47aQ52925xUWFAeQnZLgnaFSPmUyi4GTGvdZrNSymrnqSWZbwXzCFeyRVTYBsZPEJHJrvD96Qa",
  "key32": "2Dgy5YnUzoBhgsLYHAVLs3r8LbjQ7drRM5Dv6KQQPyRKvYSR5gS2u9YVnvts8mGjyGoei1wAGMAK9UDSxF4iFJEB",
  "key33": "fTcFK8icNLpsLqvuDWi3H1UXppchxdJdempB7WCnV964D9vsG1jmU32dUW8VsSDwA5ykfZJqVXhqJGdCtgNXCgS",
  "key34": "4vzpSfRJE7JmNJ2g3nA24es2pMbY1hZo19J294eLb73qpHRKZYRzJMvcH3qYXf9jijasgVkMC7Qo3UdqEMUco8yK",
  "key35": "c8UFiZRmVUy886uFePeaLt9Qy5HAEEQK3vkSTyAzTWSqZKXDrQhmLKCBhATNiyMLGjBPNkNooaaFxFS9AbhBfQJ",
  "key36": "6y3VmiXsFL4MBYBxKVXkJrMQJK4ZB8qqo7TthUWzwhse6iwPt421xzhurHqPNmkWiCAqDX536VUojEqSXBPYave",
  "key37": "iWipeQT4bfQutL6gmitZScmaxm7LbeCCBfDqLHxtGwKHUtDg3zefKMsDaXMtCpbRaWknhmLBYSXr54A54FKv79B",
  "key38": "57L6eLAZWkRwbvhi7PaR9HQHz9Q3WcbjSha61reQnzhC4vy4GVbRePkCoSmS1HpB8pnjUSTgo3YXLsexXrgzd2p2",
  "key39": "5rkUbHFzHJzqvn83BKPu4AMsJZeW9byxSkuYJy4ofAfxn5ZU6mRrFquy8WXZbpYdr8N8aqRqHziy9X6Zxsg2H212",
  "key40": "973qCpZUpDFK7o5MRaFe1gtqxAhZJ6e4rTjFWp9dot24EGyY6c6TAYnWEqgFAEUy2fHrhrPk3CpUmPjdPkggnwU",
  "key41": "4KNp3FyMGZFbqJNoLasLtKx63VUfpRFMV9QxKhB3upYxWgRurV4HwYTdnWCGptrAC8HSG4gBRaNxBs69AuzYAeVY",
  "key42": "3uw53nCJHiuxknH5ZSjKkarvuo3qMVYTQducdckCFKoNJ2p6DSXyb6WyPE4nYzBrH6SzxHb83VD4i8K1Pq5Nx8Ct",
  "key43": "2wQAXptVeohnR5CaywuDzZx8TzGF1eZmv9vGoZgX6rBUx61vjNUiHML9kKzzbyXmfVA6LRFxPA1hDYeu8yuY2qQ8",
  "key44": "5nfXAVMZhgpf3vYtxiKXs6ooyBUD7btahGZfDcQspwNNDbjWzkojfF87RTHYJfgdRDGvYdXJa7TK2rbfQz3fpspW",
  "key45": "J2JXohGEvhMQ9Dg7ewNWKLnc2WRtM9FfENMRTUNWXbNuupEmpgf2hNVN55tJpkDLb691C9FRpz6qo16sKK22jZh",
  "key46": "3n9y1NJVNwZRyk8zeUL1o9rFFTcUBXjEhcdW28RRWZ6CKedaDdk4B2FoTsgY7HhGojRAjbysZyEz4CtV2Kd4L4Mm",
  "key47": "u9i6KX1Hz7ALBdCrYjLSfuTdrpAVNVPbLSZmvdd24LMzEJuq9GsbkVUnPTB1btfC5A4CrbSJ2t55AeYp3GSKEC5",
  "key48": "3o1eABLPtCaNSfQ3q3iThAPqyBCSLbGWL91RXXsg2YQbVT1xtJZhZgJoqhyCT9qgJKtkcK7M3LAaPk6ZSmJk1GJs",
  "key49": "3ifCor3vCmzFTrSDyvdd3Ahz9tjdmCuyUjTsJYwZXz1cdKhYMRTwGyDDHiupoNnMMfK4zPHFZzm9cDTCjLQ3n7mD"
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
