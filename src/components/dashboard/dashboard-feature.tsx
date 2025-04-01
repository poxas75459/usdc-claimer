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
    "4t5ABxWwBRAF2nfZTYuLUa1uUTT3vi8fo65t3iJqV3rQnWt7gUgSuRJeM36btKB1F4JtxeDvgAe1dTzqG7QBnfyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WRqaTvnbhkDsXZ8GZTB76sXQ77rMMVDCwkRM8JZxUg1buL6LBXdCKQ1LFCFMTq7nef2sSiiztqvo1AfojsXke9V",
  "key1": "2E2JWPrhbFbKTa9uNJxJ3dJj8ziJUr3G7g3Xwsg6AhSQ2pdA9ZWsUwuNq2d2nwEGiWEtP4Gt1w2YQxxu4B5Nm3zy",
  "key2": "4srozc97BJtdneazd7qdFtz2k4t5XSPhuzD7sHq2jTxppbna1ADai8zN1jUKmS1eqJCjsdh3MbLZt5vDizJK9oFC",
  "key3": "ruL1rAZSCja3Bms5QQPCY5ug5g8PWsWPNSLkroZDwYLp4LbjWdLgR5PapjQByaEtUphV5x9Hii1qGYoTR8irv3E",
  "key4": "55AvNYq4wQXDwRWYrXNA8qi3wjRgVuLk1NcqvwLKyK8Lr29XvxG1EHtDuqp935SJmFc7ZVgYtZSkxVaD2wrzBqEy",
  "key5": "59iEgVYbLHFdzPSFDte4WCA8B2RuvmAwjsjcuRJdCM5cA1YtCwM7imdaedwVLGPLuX9y7Xp6ZnCAVc87ubBQAdW9",
  "key6": "4YbcWbXv25UhLyUJCQMAnUzaJ9ayydqiaydjbz71Lg1F6cTLx8K6ftzPS1zNTj8PfgJHD36ttU1gyuJwJJRRGb9d",
  "key7": "2p4KrVTrd8gP6bNX2TnzLgJaSMP6xoMsApiuNrcVPZZ5XHQs9UkbShaFViyH9kdYy8nS8LWdmKFox7ZrwmwLEbCy",
  "key8": "YGxYSQYsjAxWKSfQRKVn3e6Hq7nUuC4jG2QjUQNoTuSWjGP9AZCBMaWPRfDF25yMecx86jvtREKv8kPpTJ9Nzxo",
  "key9": "4h6udpktqqXbCg7Bp8zo9iaqEqskUpyRihfuH6KcCzVtiNZrHSsShPcFDP4cD2hPyM6uK2f78Uj54N3gYu7xbFZg",
  "key10": "3t4WNsMYi3HgrJrpD24BeGjP1xKKkKdQr19XQC3xsiZHo9jCEU6tkwfZ6L3UyXbEQXHEdF2Mg7UPbvcRh2tuh4k2",
  "key11": "22yfF4Nv7UBn55ozujWD6qgXZfV376Uv754TBPFxA9xg9Gsu36X9EZkx76BEtD1iG73VboJydgDnJ26itYekHEDt",
  "key12": "3qe6rCfmpHbDfznWg9hH4JsLihPVFTC981VbgmNAMeDQt9BMC9tdsGoeV2ocW6v4JJnt7xRkFzPSDJXfrEbc1p9F",
  "key13": "4ahcTFTK9agMyN4bfnTr4DoiJKpvuoATG6JQLofeBxVFFoLK8Ja7Kv6kqPyJSLjmDAZEYofmBKSgJqCJc8peiCR",
  "key14": "2FTkaFuodJYHudpWadAeVxEXNd2Jv6soLNCeu2F7y5GTxPoD6Z47hZJ5Kpaa4US5GfYBZVfe7tpvp59Ke8kWR3PJ",
  "key15": "4WvogyxKymQnUbbhazwuPTwfXXsyQyBZtTeVqEHkC64CBgtjVAXKQSziSrmU77VMAEoatGZg4SVH1z2HjztQ6WcH",
  "key16": "jG35DC3LdXJWd1ourNTCW7hnjX17aPNaop2u5YRaGdipJZvztgJnbwyjJcaREukwXN3yaxC2PMAxSz7sy5b2oX7",
  "key17": "2ibnEFVeeHC5tAcEXipuTBJ3L5NQSqKqb75ig6XtGv1mwEvhT79f7cf4zz9quvQ5EwyCEwhEHAiimRfF2MhCKkqc",
  "key18": "2Y7Rr6Bqqoie8jke5YXVa7eY5ceadc8oMp9fHjs1NCY8bnkzywVxXRdq7VurSvDV9n8BoHPTpeFJKTQ37QdUPLCq",
  "key19": "4eS76NSRC2NAXzZxjqVX1Zgnib16Ro3WFkiRZBcXAPv53HEy6dA2cLCgowearjeEEXrZUcUMxGS7nYj8spS554BJ",
  "key20": "9f2E99F2Ae7QtdV6mhp5BTsPjRYgVsdwxeEcJSFX4LoKEyw2Pdqkh7qMQ9CzX1kFnRSTcJiJda1gHpc8KnqxkWr",
  "key21": "5p3iwFLNTFRbyaJ4UtufYb1D6V1NMVaG57JQtnETu87WNbour1UCFVm44riJoJfrYiYNn6gbbCojyNtysMYn9AA1",
  "key22": "58i84JoNSLR5do8vMvLGHhWWJJ5ybSA7AgLAhAXFDK7fipuWCm84g73R81xt4SFNtejTu1cFhKccxGdsSFgHL6QX",
  "key23": "47NC8o2y9ykxCvUkQdQt9qi9KPMRQBC8qNzwUvX6qvcP2Q3JZm4ubwSfy9orLvs3sBjQgNgwbaUauJkqafSynf1w",
  "key24": "5S172idV5ZMNfE56inadc1VZkWaru7rMXqdxbSWycPzFAiQZd9VJFfBC2yMgSwb5EZb9eN45Q8kMdkc4TPyt6K2B",
  "key25": "4ShCzYFmH1pXtB5jwXdZhSaxcdyYG14XRpA9SwGHQLjCPL6iBxuYjWRhrFMjBgURYNUGKJwEdKNdaiZqJE12C7EQ",
  "key26": "43XnW3sopjpiTBHD9ZM5hyadEaNhAW8vrTZNwuffPHzhu7thWerFs1ARCsTqL5hRoR6gDK1RWQnEatZdcZJLGobd",
  "key27": "MhedFbLij8TStDtSRKvXK1zJEXBuhKMAPY7MsvJyy986tAvdmR5c8WcvM6XTFdLsxdMY6cpVx4eHiXNXid8E8Vs",
  "key28": "57hHmaNJXsD47f9iiEEn46zoiCJzsHMCmNzeqPzmFMzbtsXPDD7g7c8aMvockaKaj1ZkeGcLQWcsxJ5z7JE8cafW",
  "key29": "2VmqHE3ME9wxPdxXnBbKywBQTfo4Pywpyrvqy9ztXF8Nh3ovMosWVYmHim8f1Y9Ygij54Me7CrcQFRx19QsMpHpn",
  "key30": "63GfougMzB2QM6cqkqShwX7cGyJWswCNzoNT6aFVrkFhDg3QHLKH8nmJTmhzQy7Xc6erFXfshtXTQNPDZ5wX7Jnx",
  "key31": "2FznKYp36ZpPhB4Rp1mps9kKtxPjFTXFNK9AjLRe1sEqmBgFKsiojR58JrZsdJnPeWQPBncKGoJQjxt7KaQbTTJu",
  "key32": "5grvy8EwL2PCnNqXuz2h9AKxzEMTYwr4EeQj76384WoW9vsnigHoi1AnRGmX7WuP2Jx77vuwbqs8Q75P7f5ZAHGG",
  "key33": "56Y44AYmHTZzSK3yFDg6bC2EotX7NfNavc23m1yMuG2AP3HA2fTXHsn4LR7vgxd8s9rH6myjYx5Wv4iBtfCvUxe3",
  "key34": "16JVgsf5PAQHgcD5gP1sJMTf4V9rfeR2LgzAdZmy2CCnXBc3cSEMba3VFR9BuHdrELUY3vcYU8wcgCHaqWeVzJu",
  "key35": "4qTD1bwN78JL7jUZ2vmuvBfFyAgEk92pj6g4Dd6AmSv5uALweJ2ij1Pa5fpQfoEFj1YpxWXD4pVH6Wfv9S4WXWcJ",
  "key36": "5QTDUEVArApTkCPDypAKdNkbTu5rME2sSNJhxg8q49pL7fomfJCoxT1eQPc4WoHQ5kc6NFfV3SfCQyJEw1XjcvrH",
  "key37": "5a1UTnD8y9XGDWXR1yAZ1MjsGDrLCp97xoQ5jtHa4GUWSYVgKK96x2HhmPAvDpwDoXWyUTMsZF6CBpYyhy8sQAPw",
  "key38": "2nTdWaZU6qekyPEPjQPTiKvZ3rQsXgasKF4TqCD27ETtQLuLpgYynQDjxTY5jyokf57W1ZmwXmxiPB6PgFGvPk4R",
  "key39": "5CAUxBfrwVh1giCrMDVjaiNcGZvf9i52TtJdNGKeyAVpAFTV3RZ78XkKUXnX1RLhUSytqNZvZ6e6FpNjVERCna6X",
  "key40": "5NuDHh7nnqZ2fz2w1vXXvjmhfGt18MQAcTp1B4xvtjFnhebwyJ3xqGMBZVtPRLZyTtMF5naWNanmweTVMkjtNBHi",
  "key41": "14fYukZ36pjMbiMC8Ge3ah8Tg5PVBHEw482wHa3BUjQ9RF6wKAfwvobCT6RBcsnf6bH2QDXFVLN6TbJ6wuCrMem",
  "key42": "3tTzyoYXJMi1CShB4tf5512h65qpc3edLfgkdLHTDsFmxitH12nyiW8w7n7jPDAMUmDAdWJmeTGnCuAdjL3gn4LC",
  "key43": "2p29fLL27FF9Ea9mBXJwURZbhKUd2dEUohnXuyn61GE2kMaApQZq2dLsFH77FzNndr4adWzVsyuUvegtUpdxhgsL",
  "key44": "4g3FnJXLDELtq5MW21ZZZs3YpXcFWkynhd36F7gUNeyM41GvCW2Ui4HdQjRXfb9JLRmq15ZeDbXuoRpQLwcpDSpn",
  "key45": "zVWeuRRc11JF2XunJGYS7MDAReyUY376P2ToLyNhGAj7R2bvnMJYNbaXEGewkQWqS3aPfmRLvdta2BP7usKMiFZ"
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
