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
    "5FG3Kgn7bomiCrJp2UE3a8GGTBZLmsDXM1Yy8EmTaEdFxAeNEjqwzgcnpAvimC4TSS11f6saijdmr5AnL8yuPoG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EsCcNk5tjXd9tZSBmbpXCS8pWRVekQnZbxG4oEeqEggB5R7LsqbwBEMNCohqS31Rn22VpfjSMk3BZ1hd9SeFdBn",
  "key1": "3KbcAqp86eUEpZDA2egswwP8GikSrtGUeC3urafpxAQn862A1VQ4QaJfBHGwPqqHMK2EbARs5J7BTpeUN6qUUxqr",
  "key2": "3Gnj1qfAtngf3xMXRiA423TqEvmrtJQPikNqf1g3axFZJo4s1ekFytdQGhGBtiN2EW8KfXVaEKvaWJHfBbjMnbVF",
  "key3": "thtsLgVo8GgKnBSc2g7ggtj7nsgihCivMJvbgfu8PvdfkrN5AVwK7yK9ovJtt3dConehU4geWkCSvZ4SKn4Mg7u",
  "key4": "4fTgvH6rfuW4gL4TK7KF5DbS7yUc1GmyExQ9i83qwYSwh5aLYXE7a4wrk3oDSG4EK2FP9NRQzCXP5wZttwongyzT",
  "key5": "ZMw6HZQMRcL3frxd9Ew5oJQ47B4Pi5Stm5piwjDeLXG9ywBwRVakevovrwwLVXGWxZPSFdPdj3DXY4qDkcFYs8q",
  "key6": "gL9ijKY3pjCZAFWcZKbNj77HjX2wDg11wvVzQq3KStDrBuSvSDouvyU1kLZGyQUSo94YrVbQnykBejpHUHdykJN",
  "key7": "YE7gDxwBfvpsArwvNBeTPdqADxZFpvJHThvZipBTWi14wbk6mhXGc5B4i24wM76zRjBLH9bq9PHDzXJyyeDJJNh",
  "key8": "3yLhKiHfpdTj1UbAm28iLF9yHrDB1pJXFFCaBXEoE2gXdvSfzyi7qCqL6TRWk24fkY5aN3efVymcRFDrnrH3c8FV",
  "key9": "3ZB9qDKXEpcuaf5WTh5DZuFA8C2pnzqyUkU16mdMqw46QoSusWGKaNNqAkRHTc5TWwUdm3szgfg68w812xnnCgj3",
  "key10": "5njFzpZLaZwCoLKgHckhKNq6dE6xtEmmSTCtoWWyMjusefDFBCbxJ6hp3vFQfSsamnMNejgcj4fQgmgUho5jGn4u",
  "key11": "4gK6H63jS9U3nVXA5NatB3ak8qhqETtLbP1tGhVw8ypEDSraUpAR5ygS1eZX8ok9uDdTLnKJyb54XtZ4AQajQPr3",
  "key12": "2PdSr2hitPf6LehZpZk7QE6w6bNoKFjNNt1oviiSSRMaSdkSXdjpYiDVGZUcsydtmsBcf3UQFCvAX559nFmyeUhP",
  "key13": "T3sowXLkWao84rZJ5ybLKZxN3u2FdWjSAWv5jB6BStg73k9RZpPSyAX7wHDyoYcbo7x6Bdyj76KDwdRvbzaNAoH",
  "key14": "5u3pqcWdRzKJfwLkabaxDmmWtVuLBTmbvtDaURUkCCr8YU1H2nRtBfNHhbYjRMSPQ6XYsaVp6tYceRzmvLns6jpS",
  "key15": "5yzpZCbffiVJvRGM9go8VnZHFRoRoSorVmgiVeBkoxtZaSgA4azVfvaD3bJudHSa1GZQDZb4k6PotqirpnjJnKVD",
  "key16": "5BGXPkHdHiA4sCu8Uiesb1MQukfxFh2TVFNQAfS5GfM354dL2t2fkjz3VTNZ4b431zq3DBW3n6SwYjHq4sU3o8XQ",
  "key17": "5etSNJFDfmzQoDCMdtNk3TWEvuMTDWRmPZyFWe9pBsJYkCHKtuYRZ7tY5MfAugBgPRirGJ4BfnqSsVXNiFcLtgfW",
  "key18": "5HWYreQe8suQX2NdMX9JfKoPrwYwB1E4WoxgDNSxD1pEwMmMaWXy7tbjx2re6Ckr2grekPFiio9ZF5gix5LVqwQZ",
  "key19": "5WL7NRNcSiK7HPhAooQUY67f2SvxJjmcuqZ427waK2TKU926WcnyPt1Nsm6S2fKrzBkVCFrVCRxTHykFRaz3Cpi8",
  "key20": "2PMh9aRYYfEXC7xXnBaHthh2ZvmV9D3iFFM2pLRMC5n9SkZLvNJE2zDUKAo3WgdezF4mF9zvCX4q7ww9ymu1P4z4",
  "key21": "5WoAsGM7h9C3u9tvJWQGX4aZ4AeZgwPv1DeLqDeSqYe15KYsy395x1Wjmt6kamrFW7EsLY2dscuk8rFBrQeS5hqy",
  "key22": "3Tt9nignaLau1pDniuv3qvRwVDJUiwBMq9zaugJiUQYDt5Nu37foXgy7k1Hh74WBFp8r8e5XBmiSxUGhYTj1Co4d",
  "key23": "aQ35G6W9ganyetCZhUQLpeUsUQtpkUmVFjD2p46NB4dBgiuvHAPFXFjHXcxgEA8wV8VVGKiFAajL9uQzsHkTzeD",
  "key24": "3we3vdxjhDG6iVJLyp4FAMUf5c5tvrmHnvQvxkrncWeWB9QX5x7DmXc5FyAbeqPBGdRk9QMpTGtUYX6Ucq2zrdXB",
  "key25": "DGMwwR99YbCjTLB6AXaWhz2W4GoScKMte4qfMqoR5jqSREbivpAZ7Z7XGBeahgMzzqVnJczAqbSttA2r4Z8jbZe",
  "key26": "4n1Vr8rBtFeGCgzL7oeZGXc6D5EwaNnqDZSCrurdDxnmdCcoivy7xwdaEUAe2qj67tVEKuN2o4ZNMFn6NJC717Fn",
  "key27": "C9ZQ2tCrx4bdr7KLQ7HioG6satn4a7iKS5wss6HcaPD5CqCLazmH4hZ2H76fBUJHweGFsW2hgYPV8iJrw8tBhc1",
  "key28": "3v78kDY7a2zC2a5mjiVZgx4VWAdDJCfe38TVJesS2ovvrxSLrZ9h5m1ADGEJRdCDNBuxwHhuJ5GVsjGvS5fxheyr",
  "key29": "NFHCfsghHBamqvgJw3s3SP4dAU3bJWdk5rP1nHvqdpY7wNPKzKbao7c4jFpHmRaCWFxZDPomkfYr3NbqR2TXERM",
  "key30": "5A1eHzkUmoJQQckkdZuY98Dt39PKk9PmcdiyYHVSgmtYPor67bSxPsoMR5WxrU7qVKaCz4ydYvgu5r9Rc67mm41z",
  "key31": "3mhmY6vkAS3KFmSzjK52bAqa1aDb1zmZS1wNGBHdu6TG3tYkEu4WYnz4bEQtikMq1UBdPHFwBkEEZm1ajCRncdRQ",
  "key32": "66SKg1vedwmSJitAfUGA32LnbWh7YzhE8Qc3CSC5VPUW9CH3Eqjup9q3gquZtXpRngTq8vJEsAG9MGMBDV7wWyce",
  "key33": "5DLhcbT2DSjEcgbuWv32YxquSZp3NGR7ycVczqdzS5aqXAJ5zLCwHP5eLcxBRxr9J352txwtH3juLkCqWmbW178n",
  "key34": "5r3cvKnSmY1JFgHxiiXD9nkayJVLKbXn97GBp1JkavpSsVFCm8Zvsikykk9neDCPZcGmxWQdRJUVxgCcFwgrrQM3",
  "key35": "3GH6kpFMCwG29U6yfXZcdncgNmPeiHLvRQJRqvvjsLc5RWB3CmspjgBwYRkRSxMnBTtJaQGW9LNuoZH2HEpcsv4K",
  "key36": "5WBSdM5SBXA2aSDACGm5YDwCWGqAcXYendkQWdd6mBvBFAaJuVbMuvwsmroapucc6rAXskNB1WvTKL8QVnm1VoyX",
  "key37": "2iEivTikF2TccUzCgC9VpTdyqxc2qELA9R9BFWDjP3WG38btBQMU4wWvW7Yk6UAvWCV63bBDQHFnYZB4irsR7oKQ",
  "key38": "4EquzFfsbK9rjRhSLZmxNez1WBQGaxEBRAB6A1qGSxAheQUuwe1ugV7r6sWv1fX4GR5XikQeZUvikjF1AjZHzBL5",
  "key39": "25wcvGja7mk71gTfsuvTBpc7y2Y1BvL8nEhkexxK6ra9zRo9t7W9yMyhY5weVcPCCDovoiy61sqjBPNcyfparasQ",
  "key40": "3nXT5UCpzSYVxhid5ZKssg1ocoQgE2z7E7DxoQvzMqw79N93DQ7ykBrEVZyVwjRrUS6xc4hJm5ibmF2U2SbeD37x",
  "key41": "4CRJV5kbEBswWTy5Fmu2xd4LgD8vKgsSu9eJ5BW8SFP7tfHiCAMxHBWB5cL1niSPbLMRKmZcFwCSxZM2zWLmFMA2",
  "key42": "z3j3LHkZsKG57yDAd6AE8FGbqZ36UbrFGoNvA6kopmQUTRejh5rukpex3YmpD8aESYxUwHtTz553w5UStZAGoiH",
  "key43": "5noTEtmzmfpfDsfg4WGpmdU3Zbny6Z6ZUT3L7EyyrL9hyU5LHm5BwumNhebPYbcEYfBjcUwD58FwBzqsc4uHNCMF",
  "key44": "4EGEpgpJCdM9w6VvxFanEzKKJcvswuzm6Q9aYhGzSpjkyYztU45cHvkcCR9vT5nWUWzg3MVYbn5GuYUnhVDYU8ox",
  "key45": "4vFdTZDgBRfkVJvJVNcQLS7RJxMWsmNGiKAraxSqqjQJBbPm7fr8xWvDKxH8Qg5trCE7ZPSgmpRJcHbzK2NbAw1J",
  "key46": "2TfyKZLzmHrbjeJ1D9VTXijStK1vY9zaj4V6S5w8AVx3tYx8fUdvK7nZw1YAjkJM61xMvSjA2JKcQ2MChJS6aDnF"
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
