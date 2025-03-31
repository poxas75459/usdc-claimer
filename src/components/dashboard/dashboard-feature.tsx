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
    "mAiKCGw89EhfGZgtfaBGJqZjoeywhrvcPKy3P8Ra5LkbakQbEywupAuAjAgrJq1BxNYL1kA85fs4CMcMJmMPVYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c4kyoGJ1KiPPxyLX4zYXZtyqrkwZxGN8SD7BaRAJVtcC3UvoWy5U9Ck4KzDJqPfuUD4BnMgcD36YMTmGPAiyafY",
  "key1": "4makengFvVeJBCnwWbUAmcxBo1mJAtuQ9DxP5vTqX1GHKwsZG87VGAraCuEX5PNBd7pJCY9q7PptaQF5zwzBvHnV",
  "key2": "3azoRYZV4fNtt5nxxdKfhUaHRgTM5WkhDtXYpK9oCHWmvsKsuvw9DohNUavS5gTKXuDL5PvFruwcpxRwNyyAXqNa",
  "key3": "AbVa1Ys5jV9fxUiaK3tQU9NQdd8Gsm2EWEDkWzXRtyKvtiRGJEkptCzqYhcZx21R7WUXcLY2JP84RTfrwN9Yymm",
  "key4": "5hiYT2okcx5A91Zx3nNzP3cVSm6GsbXyv8jHGnRFE8QWtX36Ukkadk94VzqqRZrvK7TzBPu4Q8UQXKzgVESYCSy6",
  "key5": "4UdiGtDVbpdm8Coa9jcPZVuKoX6pSARUn7dcj2Vrxjih5dRXHK6N4w87PopzPBpW7tHCXCnvRZQ1UZbgVhaPhtGE",
  "key6": "5iXEJZrmbFJF21HQthMziuvrwkeL6CRmRx7G6CzWbeTSysHLhFsgaP5YTLaBan6Qr4w47arVpAdoAuAa71yB6baB",
  "key7": "2PpQik58f7jMMehpMyU4n9pcaRWHZMSaT2xCnWZ2u94NthThSCkdEc2bR5ZSXVgFEe1shhvoWLXBjAYCSDUxVsvG",
  "key8": "4Qjgmt14jbfBAG7bDPRscpsWX7yr9yXWRE6VWpsjzzhMQtvNzz4tajDEuvKMGLjv65HLkag1LV2Wsc1Tyg4HE536",
  "key9": "3RUaCUiZd9eKG2JuGjFoQXFXFFscgy8KVg5bu424kUSMpuhf5FryvjhXVXECSv5r31Mqcoh5vGattDyy8d7nCa3N",
  "key10": "fSwxGRJvcJvY6rYRp7mX6XqV7rcRAzcivtfovkc1SeHaWpVsUfqC8YMwdKaZkGaQoHZXJ4L6JEGdCPA9okZm6Z2",
  "key11": "4gN4Qg8kMU2NGb53ZopxibBnndUJzQz1ZcC5iGkyZvwc7vP5p7GPXDkccrt2oWexGJNPcrXkFRJM3rHxNt3UXVmj",
  "key12": "5pD8UnabwYxmr92XwU8P18DksiPAB8iNAFEauCEEQzgQbMXHTkFEhd5LjXHkttev49u6q8Ww3ej9KPvq2C4gDR8z",
  "key13": "4po1ywMdfacQhcE9ZorvJmhZ9gLUAVzomMB65aQyUSNGugMMuEtkmdSu8ycCMxR3Gw5j7S9JheTFbHA34BLumsKa",
  "key14": "2AWCFx9rVfzYhVQEV4HQa1ncrw2u4vknChpYcLzRExFSzhw2Vx9AoHrYcioY391KqzwLJ93SnAHNDydLGyjAtBZ8",
  "key15": "2KfmhrHgebXAWSDuTSHTWLVwyQR5Xcjxr6hyuXxcsufwMWFjPDk6VddafXnU5aNvFoTbGtdvc6dRf4v6zA17AYxw",
  "key16": "4oFZLjS4fFisDNyDhugMqkFzmNxYgN6VRtPL1b4hecC5p6RjzHTC5mKH5JNPeTMzi6qdNGQ25iNUsunUsnZbJFt1",
  "key17": "29CXEoiSX3Etzq9Znt6YHZKzbaqzbW6UuD9dfu4tgXGdVnD1Z1u6fDTZLKtnj2EJz1pBnUjLFdQmBo2RMEQc28yn",
  "key18": "4Vfi34tNuVdu5sBGPVhzLA4EvvEiJGLkTG8zJmg67CTfwKTRbc6t97goYkyDfSGM4P39ep1ELXbhNEuhTXHdeS4B",
  "key19": "Lp1qEjTDxNRkRb55g6DMoPcDH3oZDexCKATodPCXzbPgzxKKd2Wd9NpmWkgfMUrxxkYDgk1ZqzitJb38S5FtSiH",
  "key20": "cutTjZUhKKgCgUcxY39kSn442YtkfhouhT7rmgFWdXSYDCsMwmMpxFUBoMDBmt1t3LpGmySPvntEPYyfXxpWCMS",
  "key21": "23yJxh4E3tBAMmoazCRJH7Hv9hTFdtYruVcRHJgkVD34SmhiSibM3bZJWMgQHesUkfv7kqV1VoS6T96sqxgnfzYD",
  "key22": "4nnJGWcbpjJJUuTh1szw8D35XEwn4VdxiiET32htdMPNzm1fSex5VG7Dm1W9PFRMRZabdp42LL6U8C9BF8LWADHh",
  "key23": "4gUdr9um6s6Zps3K46koTNTXe6gZ8tpYRPXrtA8dqfaVtRnPiNqpTMnb7xVbYSeztho7pDqYsagvAJrDi7eCmdXo",
  "key24": "2GAhhgbQsKKkJXh5zzdj1BBBezV39pGo93sdSBc2YaymYxBGKmyLZ8vkUX5chZWKhrb4uEsyMoN7jqhGq6ukSt27",
  "key25": "2igCoNejasc1saDV8xjMu7pD1Gpy6GBAAf4EnzFfSk3YrDqujCSunh8S7HPinwszKSwamZfZEvjzEk3Mb1kPn1wn",
  "key26": "4SVHdcHd8XYxHBZ9J3Mf2Z5CtRWbNRXRLU2bzcs42uQwf84Vb79PpBM5gjj7CPfX14y9epBCSY2Ch6LGA1567s2H",
  "key27": "2c2ti6G5aWjo1bkpbAZVNBzEZYGoKnP4s53si8EFPjK9mjixSfQyTusjJt1RL5Azd9xD5M2S2VNQNLq44eutcL7h",
  "key28": "eztTZWPUpLdAUGK2p9dLnRREPz4MPoLxsuadKGY2gFgi5yNioZqXzHZbdBNYcoGkL6iYBYJQVErDtFhfCLU7WtD",
  "key29": "oH5v8dREUQeZgWFwXthwNZgUpGCJqwbfSqwhzow5nwiAD2g6SWk52Jin5A4VSvx6g83mG2J8z4x1FNUFtGwW7Db",
  "key30": "2TWyUMQSqGoAMDN8yxBr2pE7GHb8jhZuczdyzEViYLcx4WWHRbYS1KmZfRir3jrrJG8jUuxvdR9f4M9krRZm13hf",
  "key31": "3X1EH8idbUYFAHi7vsvJefCTbGkywXxP54nEDCH3skJvuB8DCb3Mka5TTGZbPTNgkHT9Rxs2mbNvWp2fBVAzTkuY",
  "key32": "2UvSyUkiDsPChWTbxFHDJX2uSqgjhADzYWwu29hSFEfQx8iWp94KjisNSn8wfXa3F1dWKRyBQaZoQwfGFevyNjNA",
  "key33": "43MPad4wJH73METzPwGzU3JycNsxizsWDg2hesZ41iydvzK7X6MWJExE3g9dAf544u523AjFHJMaAdzxF1jZi9nB",
  "key34": "4enNJMNVKFsiE2MMRN3dawMWLk38uH4PZycTD9NWrh5QqJPGhNM83mceRfSXdUezUYDE5sgq9pPzzZhvpvwxioJd",
  "key35": "3v3Mex9K2r8GwhTM2e2KYy7pEi5DAxi7g6CvPUUttpqXdY7wiZTCP2sQD64f9PuEF7V9amtbwsvppW7V1TYkpfWD",
  "key36": "3FiUJipAn6fNm5ZSEeGdSgHDoZv6SJY2cfts1bVPAL42W5RCjYaBt2qZtwuk9LnhSTmaSeq77FAjr8kNmmTKPsPn",
  "key37": "3kdjNnyXJDLWBGviSjqMT7essZVzqGFuj2Wct3XjN5g6RMy22m1EY4XXx7htPth3ay1ttwq4Bfd519aVwPc1J6dF",
  "key38": "2Ga5YdZE6DbZnLf7KHB7wWrQFZNREz2U8xzcRz3dpz2A8oZd814bhDGgwtaUu8SxteSe5ZnMw83D5o3L7kcakume",
  "key39": "5QN6C53SerfxUdju3V7DMEJh2TEP1saK13gAiTGown15bvEEk5vfmjz9cDzU3m73c3iZ66uF5meKiraaqmXfnQSx",
  "key40": "4rCoQRs25PJ1ibCa8CCJJqRGNSjvVf8xZBkwPttgZENVMBhxUNY8YESwDDR5B5dhGvSUQYXuVg5JsBpcLyXKt3dy",
  "key41": "DqWise9P26fiJP65TTqiYrbyEpdzQRixNMUuE8v9kqapW6VuNgKw5LncJ68RKnmWN2g3tAewyFw5KaQpdPif9Yn",
  "key42": "4KrhVmk2mkMLkwn8QhSTfttx6kcHpitzJ1LqDvryUEL26t85QVEMU4yqphSp9gwczAwT1ffM9kDunzGx611CF7zJ",
  "key43": "63ejYjykFhh3Te2LWFjmcSHZuibz3Kq7L8auqQuAzhDkqPmng21kQoeRDTcEV9hQUFAMxgqgn5D2CGD94tWA5Wk2",
  "key44": "4tvYtddyL7buWTc1xBM27T5sDDCq7LS7WzxjHw28Kp9vLkPGizFaXhhzUMtL14YdE2HACxrTzf1XW64JLxzevg3k"
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
