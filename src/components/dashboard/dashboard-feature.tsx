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
    "43MQXaJdWcVrje652VMLM5PQDATibnnvP26a25Nj2s41AQwFmVAnr7sduyHKPT54B4i558ZM1swy5BzaPfPaiDdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGVwzsVUFcuWhK5CgmK4CCJYrmBL6311MsRGwBMiYxz4b7KAhxtndfc3iCuYJX8Jguru2ecV9y5jq83YjuJg4iK",
  "key1": "2tu7AR7eH219X47QfXwN4ZMG1nVKVVGHxAVxsEurNxCREmuAZdC6yWWHniYaimk5fUwLjCLaPuaMfECcXwEavZQT",
  "key2": "4zYmFYggiNnJCjQA3yrip8NJzQPfF1J241sXtjbX6JQYww7padkvKFtskew71aeXsPiXrmJa4L5YPf49G4RbE9Ky",
  "key3": "3WMtAuwa1ajGuNnoxUniyR3iWzmqvzt1u2dWva57SSd4vo99aG1P4gBFozAoFhNysWcUpzNwqqxpfhdHN8jVYvQX",
  "key4": "3peGgAtu6zMbSkEzcqBuNHCvjQLWsPxPLnQj1FFKPCAZ3gjc3Avg1KTwmUANsGPgRqVPUxufqhxo4eaa1aArsicN",
  "key5": "5wtQ2jKAM5e3nEDaBc5fRFYKwDHGT8CK5bmWRJeCW46Pn6kAYY4bD96LvVXYwie56WuhoST8HxRWfu3PivgVMAfc",
  "key6": "3fAE8U6Nw5Ng6SPcYxmdcTRsbXRSRFDUd6tMYtEmt5yR2M73CqSwTE7QkxCDJujfP89WzMdrT53xFyyPSA2ao46Z",
  "key7": "4MCXe68aCGaMyXD9nFYzFCvEhu2mc2AbPdHLFc3koctwSpFJazYRKS6Zm6ADPW2osP3uSPNzWLvQiWXqWyHggcz7",
  "key8": "2eCFu1WsBmcnsnTw1aPH4UBHnaoisBbHfyS8Q5nFg7662iWw7F8NdbaDaVM8Ggox5W9vv1eNsV6Zw6zxuFSTwGeN",
  "key9": "MQ6tdfnkXaaivwWoyx399YYGPR5fPfMjeqpoQ3MAeZEfkrSCPTmEdfqgSUk3EZAAhZFS17UJe39TxkWMpQpE8Mw",
  "key10": "37X4HRwYmAJswAFTFWBgoXYw5yhtXusDCVmaTUZi31PyP8zSNDCPmmQaHv5gyXK6qHih1oQm6dJZaNTfNXTn7Pwj",
  "key11": "3KLScqWGKDMk5RWV6ykHHb3QFxupXp8o9iCidgwmPk71h5tJHShih7UWigkoZEXHXhiA7iBV4Apx8dcSUnXEhmbT",
  "key12": "WfWQ7UFeiBFYzXyPJpf5oJsM7y6iqpGVKCMsC5CwBsgXZPCYUBVDrKCf3eUqMe59f3chNHuDpQHwtYg2yYwyBkv",
  "key13": "4wswNiEJHuvgieVWNeVm71RL2HqGDRHCqXXuefMLjWrhXiLGBykgA7Y1THFiGRV7Tqo4VFVc1S5q22m2NAVfYF64",
  "key14": "4jmMDhEiSsjTZN7TucFzUC63CGHdFoZn3NHhNciuSVtPbxeDqdWoEMZhYMh16YYdEdSgxq6Q3VDDkmvz8sFHWuY7",
  "key15": "31xayGzhzfi4anWg2LN39s6mZ2eiD9MTuW2N9YrHXdVpqHYQPujCjmNNppPTx1UCyRPW1TPSEWMFKB73z76cpjST",
  "key16": "t9Kc6yj1EioAN3BPzdrnszjsbsGwHt2Egcgd6MgcKQEizku9QrE6bt8SByMqnUpc5JVLbZJTdT4cXfB6HkrXBfD",
  "key17": "5ZYxb5RgGsoyGfBNvT5mxAWmqLcv5nrrs1auQVNj2RhDkqRHs84i6XT452MyvEJVgHnQQFZVBA6jkVYvVG74Mwci",
  "key18": "3gmE64xWDcMKSvCtpHp6Ag2BXWpLnjkwnKZxMp6mF9nBrjkbQFjtX8hVQjMBoAZau8KXdX7DgcEqPmCaXFGMpEPe",
  "key19": "2r4z515qfmTrDdw9HyHB8wSvZW3uMRmjuHLAVXrpHdHzDWW4aHXRMC1REkNcreXnRNRsmZSnxjgMEnMzmRGMRaT1",
  "key20": "YA7puWEUuZMDbu8jEMJPD2UDvKte33PoxnBhXEhybDLJEJG2stonXEVjMHbM71P3nZFTfCv5G84ZFMCtC2gZ2nV",
  "key21": "57L9jE9QFuahKQ73aqLj5b3JkqixqESXsrJQnTJZHZiwynvf11D8y3ApR4DXu2yGRFCkq7UTbLKjCAGwBF5xSxFU",
  "key22": "R9UtkxoPn96yGGuxc1JVCKW6UEidNb1rXfQPThh4m6vuBmU7q7GUYo2mwX2vv2Vh15FEHGVEkaQgXo2GizjypPg",
  "key23": "4yN9vMVcgYR5tAEXub6RdZ1UG1n8q6KZCrEMivDCVC3dc8VgNrEuu6NoYd4PnjHoQbK8kJ4W2yb1hkRTvQ5STWJH",
  "key24": "2NNEzfnoQ6maYnxGUYaH5esvzbo5wtrvk6xq35rchBu9wxFf1qdnixkgmtUPmdPo1zoJcM6gjn4funf54EeUfYJV",
  "key25": "2p5bkERgE8jWbMkVLLxNPhjgr5TXyPsHEvWRyL1vYkvgWXNikeBkWpvFYPto9rmAHWSiyFY3fpt9VowMHu3Mad6k",
  "key26": "j69dYxMY3aW7mxQiRMd2v2WUPRRLwfai1CGEdmqY7biH5a3wStYtZNjj6UJcL78G6hyaqA3N8m5VbhyNFtbMdBE",
  "key27": "4Z6XbhvXTSTJBvaWihcWReRF6AioCnBKYT1iTSciLfRXix7TA4uQvwkiJfZ4bymvppTzp2afH2GXoagdt3haJboK",
  "key28": "3JT5Fo3mMsC3u5ynhcbKmkPFnsB3WQHENtQFYmu8BxzMsTZTEn7z7QtHVCA6zWVMoTyJnCgtEKvnhcrXheiM4db3",
  "key29": "3d1ieiNVY1KMATfAL9ifx8uA9Bz9xvB8m5Ls8csjMg9jYAYPriwmGNSzYtuLsgxgtY3gvAGbzgJAX2wHALLWGzfJ",
  "key30": "3QJiedC1okD894uafdznFScLtgTKu5QWnJkDRUdzQ5JGRFfhCS2CJNuETMMLGonuS6qYzcvuFXb8Cxe9KQKKnpk3",
  "key31": "4phADKLTQPes3u7CnPBkq4tv2NfMGdpSwRpd8JbJs5zKaJBBA68yx22fcKLLE74QnwnzTVammJP4ercdWTYZAKvP",
  "key32": "59UUrJEj6G9hb3Nf1grC5qmRdD4DwsWexgnSUjVSV7uVe3vCPnYU3ChbpiEwJaLpX8vMRLdC4gWM2PCANSeZ9Y8r",
  "key33": "3DGDWwmZc2dc8Az5ehWbLiS2iqzz83yajEpNnB8Q7nHRzRcwhZt7stWa3HpcGgnuCwJnit4E3JJSXTWCPsu6eqKS",
  "key34": "2j4ZPN4GLyeRPvrLi8Keg8CUgTZPeBVs4RowKcr4Rr3vRuLBwnGbwgUihh2dMFkY3m7DPogjr6x8jfxYmTTBgmFD",
  "key35": "2sVe8otaoYynVnciqexY3gaw5UiCiniZLwqdSvRL6t53Cad5742pbM4xErn4MQxkj18Hc3z8fXD4fDybSqorGUDa",
  "key36": "2gn7Jh7H6UtbefDYwMCYtVyvnfkGXxYwFEzNuFCb3og7KQetdQvfRfUfTt9gnaHL2FmYfKoqKhr9nHBn29vCuNPz",
  "key37": "65ZXya5RNeuiPQgqEWvg4MH8Rusc8KKKsKJf9xVcKsoLyojMdYzELbVuoaUxBemsnNw8WEZHmXxyovkqM3MRq3UE",
  "key38": "2ReTybGXuwz6RgBoyQFtiG6ud9VzxL8zMqhptUpZmhUbRiRYL7TPjVvzLk3ukxDamQVQELUZf58iEwU45GEnojsS",
  "key39": "4dv8YQA2QZ4PUQ4hMcRvePKQrHWDYbDXviM4H5KgdRvf8XP3LaHnrFmzdWCzuKS6kD6AJbHQwVDsqqr37bhd2NSM",
  "key40": "5Yf29ors3QaK8ENfJeya1TbJLYEYPi8P6NzHcH1AjkftTkiLbL8TSRvDkdtTFAyMxXikrpm8Uod3e87rwj7t1xnm",
  "key41": "2zPpDZkck6ohh11Z3gmKn7i7XaVtCYJ61tQBBP2ikfSDygHLEanzAD5pGwk41xSctogwJ3ub41YoPvGAPNYjuQnr",
  "key42": "4H1qQHsRJUXd4udqMUAj1U8MuEMTGBT9N8apu7hsXzSDyoh9fbv6HNcpYCifyyWpvDZ6r5EK9uc4CsDBDbhhrGyN",
  "key43": "18CnovkAgUZh8JPi4TogpsnEb14tjDSfzusVLRmgwHFgdFHN2cWugMQbG4umSbYYpPyDzD8ZW3PSxg1uMKMZ6gU",
  "key44": "31XnYowYwQfEx9vmhVHMSNPADnxFKa3zw3o7JE5uWQ6Mj8jQeArKSptd6Vms2yjWAjfFYQe98Eppy3Ex16Sgiayc",
  "key45": "46GpkbYCZHksr7h8kwdM9vEsihnsoPQFHsHRTr458kLZuXCJaXYA3VTXxPZGRJrUsgr4q3qKZUqeeS86dgYuW9eK",
  "key46": "3hDTaDe3UfCBm3W2whBs7DPydEVv5GfyUZXMUfu847fkwCBadhNTDLV7H7r6NPs5anhSsvueweNnhizCdBaB6n6r"
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
