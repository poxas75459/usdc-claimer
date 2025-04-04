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
    "oCcqCt2mLczpr37SN1mYy9zW1pPwBdPbkTbL2TkUKofftLsqEyam9TYLKobA227kr34oFDNwWYp2H8r3opraEGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KtRxK2DsykvgoHYhHYtAJzR6ZQ1veUEvhjx6GEcTtkfzE2aJvNeAdCy9XZZmwq2UhiCKqdsuqSSpagKypzEczzd",
  "key1": "2nZ7uJyLFRi4iH7FyZQCHW8nTmSX7JcHZz7W3NCS9U1mWCoCXxQYjYMhpoWmUCgkwoHahJhaxuiBbnjfTSAATZ6W",
  "key2": "2N33DYYiZqM1s2VyTgfmGyuhFn7ZgSMSutJD6GT3uEbc6PGtvc2UHP8w6xb3gmC3KMZeChH4JUkhwLTaSLxcvW7B",
  "key3": "gfSDZz19ZWmNnZ29kfg8ViFtE7cHSe7pGUuyaas8iu2wTzevbGyhMp2QoqhoUjUssiEJUm5A7Miy4b1xAfon1PZ",
  "key4": "2KRVahrZpxMT5XiR56HtV2UDkgHpyjf4hmtZDC3rebG7jk6kHzUsgtKQKJGuPwHiyPUaFTPdrzfA6mXr95dpuuix",
  "key5": "2nWGB8MY4mm5HKKyuatQK41xjiRWS1FEWe1hzbwybnQafwKNqVCv4N4hV517tVW17Y1UK44Upgv6aHzEETvNKwPP",
  "key6": "55ESdJho8ChBdWLibP6srfwJKcGRSXmjV1vYV6oQc6NQdCSLW2Dmf77pDBZqCTYuRXW2UA9gKiZNbZ27E5rd4US6",
  "key7": "4sdFT7JHQ8hM3uHQ7GCkKg4S7j6pjju3wKHy9BCBBtaQr8Tf7n3M5Xg1Jc9Ggya6sgUUzXQ7JmFMAkfA7CLA9DVV",
  "key8": "33Exu6KyyahXk9xnR9X47zB6UVQLjKNqAg7hLxFuzguwpoobdfzcCk8tkxExnCE8ZS6gzjWc1sQi1jXiQ5Gsdewy",
  "key9": "WphSsfjkB6zzHtdwKQcUioiAyDFG68M33GW9hntV964nzJ4e5qkGF9ZWDXPnbpC2888utKJv5w6i8jJpSmqhvyz",
  "key10": "DW12hF9XDzW4cbnRRykaZXgzcAkzZigX5ytgiJVg2j2oUaLLVC5Z6w3khy7CJY6RaPAgqkAVZrEaEwpmbmVTPGJ",
  "key11": "34cF1EJwJx8cXxo3wSP84XHuf1nqiTv3CkoSjh3EsaDwrp2JyXxdd9997yihxBkZ7SbJ1THVv1xF7YYmR8onM4ST",
  "key12": "4bUPvePqZj95HmvK995PGdvAcvVPRTCP5YqVycf2mQ3WK57PPBLNFz3nDPtZ6izf3DXK7mEaS3DZA1gPKRmGnPHk",
  "key13": "4Kt6ee9k3uhyiBHpdhpxsPY4mxRU6JQSSpqfL9me2VuHZqKRD5qhA5ntuQRKXKJZfGwwuCPb9GovEu6K1KVhemBU",
  "key14": "hGt8ypR3VgRWpJxBFbmwhMASVaxrbs93aLSn7g5LvQsaqgWLRGzZL9GqZ26moK96KKiQQCvMEHCTj2cqaZX8esp",
  "key15": "4NU6QYhSrJwoR7r9x9H3BpiV2Y4hVcuhFdj5Wgpn4nAkBeruotEpN1vcjbqaxUeU3tKLnRXWuHCBnq3nvaEHJSjH",
  "key16": "5f881AxXKxxf9FSSeSgciSSpBRpzEUmt9djgUqCrTqzpRKrxDvfngKV4XNArJSqPQDCx7gJQEVz6aktvaAgQFous",
  "key17": "3XZWo9Rbp4WqWqcCfyfdwfsbJ9QBZsgJ28mEKafzmwFZD2mZHX7kuM6Z4fHngV7sp7JC4UbEDiMN3DJZmriLiQHL",
  "key18": "4pMkn55cZBxJT57W92eobqWqKUbb7H1EnQEuALP1VvhVbV9Q1TNRWDtnsqSRD3QV11vgFW6wkjUFSGbbH4DYc9WP",
  "key19": "3nMY9yKTr2vDMEEm2aStPVvLPyj2Rurn8pZBeWwi9AfdsQ7mtxekTnLu7oVajtUMLCMByAFSxhVPWu6wVaDLUsDc",
  "key20": "4sGBGnJmVT5N1c3qtPQZhzCrfdRFvoi3xDNEMKfxsjPJAYiXW5mPengf6hZygYCxTfEnSJsNqjxaYxrrXYimgDFH",
  "key21": "5ePRB83EebUK4rrvhekgyd1usEdZyKKbK2xcaQ1TPzNR8crNNVHye18Z7MucsW6MW4nRndwBCu22h9jHPFajYrL5",
  "key22": "5UBHkuTubcfT3Z8NYPPzGMruCiPqcwZEJA34JwVnV3rL2Fo2qSG6yPgRBKgnfJYXq3ACCYcVJmeMb2px5oFwPHrx",
  "key23": "3rt1ZrdpqqfbFM83dPJVmcj6aaVZ3BgU2XeW23uYXzmqKgDHWafN8yEC9M81qMj8FSiV1sHzN1QBuqL5kWJLTNgZ",
  "key24": "4ZRzqe6pMPGwLHg735rv5a79BJDtvWMWiyEPPXWqpnUZLcXJcBQhnwh1oveoA1b26spAA2uY7m3oZ8Sdu5t9bYLt",
  "key25": "4fTTjgzLjLF9UNnrTqWBLs4NVk3KW6oTeVbF7XBzSUcc76tDYxTC5hp8sfgnAcnEgYPv6KevaVxnMueNh9T8uHwB",
  "key26": "2aPUTeEp2VhXGU4xtUxcXJdcpvdqmS3a4KpUYDmJMGeu4TNrMrdcWcrm7PzcP3osKhosgJKLKx7z27TYN2yGZPtH",
  "key27": "uD5szBueKu3zkzan2w3yapraNNwVpp5PuaqwB32U64mYGYk7CMu1CmvE4EdYtQDi2mNLkwo2pJBFn1o3SLoAufe",
  "key28": "5fWgXY4Nzv5nzfWdvgoWsT5vGmVqr4umRMMSyCRx7vWAoJygBCSVXB4Ht589V8cNfVyRbtNkwBK8h4JZRcbBAT6S",
  "key29": "3Qjcdw5R1XozyGZr4K1Q7necLLTEeRbW8msYceb1NV1GmgeXFpBu3rQ9n1dJS4GAXFS4W8MfrcigpJ2jM3uh7j34"
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
