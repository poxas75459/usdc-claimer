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
    "3KpyVE1iiUdSkxgCJNyETw5nrue27DPDEnNiyCdJEmv5EuaHJjxtV1LAn99oWSJyYFEwXcLsASh8nKoHiBK5dYmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ub2NEUC8gXazfm9wkYVjmAd8zDJioZUFXtyUoQ7YjcizcWLJH3wNQurT4jwsEtgKCQGt7sjZVSycxLSkcrdQqQe",
  "key1": "5ZEcGyW7f91tMdAe7AvygWK5Gkqi7yUMC5Ea1Aox85EzUye3pxpfKbV2Tp3uwfhuJMKAhgxKXU4HYmMY4XjUv41c",
  "key2": "3fvBafsvQaqHH3WNXqbaabA7UHzxNtVFBQd27phoU4c4gEVWoxS9Rxk2KKyj4HnYVCD29f5jhqCnpyAKFLwmfFDS",
  "key3": "5NdkjYViUoQakXqHhcFcLh7hiDULTkgeqcqQsZWxKCs9gZ6a3mhWLgMjp34JGPrkqwRUnz3tg8MMbs5un7mxfdsQ",
  "key4": "2gmTGh4A6c1D7CZw5P19U1vVcrZ4xfguFmmxRPHrYvF47gNiJCFNLy2GNBvksEyHgo3xxeiC7FwcEMrP1hmFhSCy",
  "key5": "5QTRdQzLVdFE5gLV1L8eCyv1ACxyLWthrGFBVUjT5ia6SU6VwQaZRnmsUsMc9fDNLTY7gZi975mkMkJJeodZhiFm",
  "key6": "2brSvxBtq5MRu1yiiVbMxkiYaj3e2tShpuguEXpMgX6EDUQNMtRL5gGEgbXUPAbc1FncVxr22By7x26Fkvts3kwt",
  "key7": "63dKA7TLErVvo7cGXVQEitQFAU6cQZZr8X4NtYmZPcmjgr2TmXUGPgDzNgRZsZXVHdgB4gDzvvvU7qD9SfkYxaVP",
  "key8": "4hm2BgnJftYJGQ5G5FdXLEjTHEuBPnqXdFQeDZu9nvSqctMYHKAf3BtAnCcrQyx6th5RFRNx2SYT8KyQfoQGJzWA",
  "key9": "2TmXCmsZZ5SqJBKZ5N5H52PMh3FnY7fMtSJQ5tW5GCzUP8E5sCh67v1qxS4FuZyzj5dhkopT8WYBj3kpvSezsiJ",
  "key10": "4Cyyt67FwyZkxa3sMGq9VZttrEFsD9VxTcD1Gd7FLPB381UsmoqjiAyqv3Qzb6Gy7z6cXQgayTyB5f6F3usx5yKS",
  "key11": "2yfv59abuuGRGhAhub1FsMhRnUjsgt4spg4DYDx5ZB89r3mv8WXFYqQkzTqbpzeHSM9L73S28HMcu8P6zGsrhUD9",
  "key12": "5xin2br2zstVcJimELeyf8LA3J7H2SGo1CkVK1ctvHK9nBot9Rr7xX7NsTSkZaApF2btPpdex9hhhpSKiCSd8kVS",
  "key13": "3YjYqshSYqhBGw2r4qvcQD8Gg5afFkeXq2WU7HGkRJ5GyWxUiK5BSaS5bp67y9KfGLR6W5rKRNqT4rCzQQ3wVLWL",
  "key14": "4dHBkHB2p7zGZWxY4msQb3Uj1geQW6xt2zWX7PBoDQCemgf2E9nGzVD2NkeuZycfVa5aaH912s1ZjuZiFkmEZHTz",
  "key15": "3rGZBniYdPw3NCahMx7dqjv47keSDwfgysE5w9gVfgFoS6vbDTfHJkNdGWHN48K5LpnamPu1xQRehKxpCJTxKDYQ",
  "key16": "wo35sZMoTa7Zd8o9686TF2sh8dEgzbuQMQrsp8tp2ZZR5fpJ6SiG4776ttsANcyUb1Vtu4QkCFchkzFeb4Z69EP",
  "key17": "3YJaytucaB2YiQzjwqomaCjL2sBaU7zJkz3jyYLF8AEosn7UzE3vrQTUUasnQZ3ft3hhAvGJa45mDUUQX94rFfv9",
  "key18": "2LnMvNqcR91nTRFQFEYVD2TordThEyoict8Muk68WgHhEKhV5o8Y3oWAL9wEFPySdrS41iB1kLDNB2rSBYWnz7ht",
  "key19": "4qtqmVtGMNkZMXcRqNngmkArd2CFQDEar9v9bdSd6wirfL5rvCQo6wkvUJ255iE4MjsnN517RScxYQe8UCsPxjC7",
  "key20": "2i4fpQtaSK1uBwcJGrnHEdNUfhQNPtUyEQCydXiP9TEMwLEBRpfXNUKAiigNzcrNunTzXypT14Z6R2dW7K7prE39",
  "key21": "38MuudHKLMvJPkQH37FhGHjGrnKGYNwY52CazKKbdnCALkdgbg3KC2nt8DiKJ6ytZZdsqv9xtGiroibg4tb29Bcs",
  "key22": "JsVxZxKv3yKsAyh7aWCXvtGAoxQzp8TaynVMiUDsDBSd4UXYst6QsDQXHResiuTFMvBnJdcop211Z3iVdzueYyk",
  "key23": "3nKHFo7TWGfHZYZ2g8Wa8XtCwXtJPtmeLcayaGTD3y1BazcVpsYvhuFY3gVs8VpV53V6GVHAd6Y4quMXfGpEexEy",
  "key24": "33mc5yCQ3oLxWTD92yxBpYnZmyjgANqPKUX4PWmXdDcPVA9FKxvoparzkMK4fUhz1uwuDpHBq7beKdQ8ryPbrLHW",
  "key25": "53tpprakqkRD3FtpVf6C9Dd2bYrSomRzgSpQdp2w6oo5N43o72RNQiXS4JwLSQqJHTnZyNaEigWwK6u4kTKc9ENA",
  "key26": "4JX37UMFjeRqJ7ABtqbLg1wLFnmwHp2pbiqEjZRssj18LDn3Z7rdYb2RkTpMcmCWAsv5i1AXQtfqHLgTAycrWJ9m",
  "key27": "5UZtdoEXED6LVBWQDNUjfy7x4mCDCfEWcG6ubHf2bG3DBw51MBg7cnUv1Gpsrkm3RbNvkVj64kSTKyenL2ag74NP",
  "key28": "5dXgE9gQxWDPzuaXXtUhh8jGfgswR3nrbVuZ6b1DYsdMUY6E21EiVwvKZAuFeHWBPtG9Py2KKQKPpjPhcAmUV61Z",
  "key29": "3D764g9P8CYtAPHSHvKsEtP1gbQN92EWtiaKzpb4hBEAHso9o9GDM2XvLhWZxk4nzi9hVXv3btRLAKafqzhERLg4",
  "key30": "GAXRzNKpP2ZMqXQH5Eo26PbcPow4antXoZ4Bsixyp2gtiZTC6EKvNm2ZuZxUupSxw6soqBkNYaa8X2S12RSwb4Y",
  "key31": "jhSgafQiGXWKySYhVPvPK3YcByNgszv7gzo2ozPJST3Mv8gNyASv28brvxw2ULwhkGx7VdcJWQNaqAwS6S8g8Gg",
  "key32": "5uwmhXPFbkcjCCG78j2MRfttYj2xqjfv4r5FrKJBbz3S8PP4rD1jcNmhjhWzpuTWj8wjMLxX75dchHXazJF96yuH"
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
