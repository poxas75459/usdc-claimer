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
    "4G9wwtnGJCqbtveBj1sdum9aTH4Mb8AJKz4tGnckeMYdwXYXA7HAAtEbXovo2q7GTLLH3RBRHAy2mjoboyrZENd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YVPQg9HMBHxfpVK4EfcjsCvwNndtBHZtgVNfMnH7dr217GJiJqaZSte3hTrLHJ379ZQY5rqiT4Lv1kCtXFaZH9T",
  "key1": "2FytJownqbuErE65M3W9aksdePfWqJNwD45gexBvaVk1r1znzPgqodf7FdtayEwXSRb3Kxh9Uo3T19FjsniB8BkY",
  "key2": "3m5SdDQBm2tBPKvTMH7D5w37vAmzC4aH4hcYapBGUJcs7JuBj6BtT1V9gF1Wf48BrgfSBJRJpRFjumiSnTq5V58Z",
  "key3": "4svxw8G3kgpu3Gm8owsXpTfCBpCRCoVXoMZEnhBb9fXD9Mpm2MUBqzr6ZVJsD3Yp7dfnZHp8YcqQ7Qaxmzm4FTMf",
  "key4": "3VKzgmawB4jweL6MVUbf3eLetntPCVKGHXCijgT5G9puHFkdxSY8rYnqcg7bybVf84b8Ciy2wC3H6g1PCn8vB1Um",
  "key5": "494Y7MLeWS6SCyk3up2gzGQ3XLZLZ9ZFbhmcsLG3BU1auh9G3bt6KCW422LA6SVuW9EqVViM8AoT4JrsYSYJFU78",
  "key6": "2P1rGeHpDzTj7DYmtKCkrMB8faAvVokVM9h4e2aXVbfjAYKP1CNHbp2ZtLEyidJWw4Fv1Usg4a3pSYATS5sbiFR6",
  "key7": "5U53Ax6XVXNRMKvaeaKtVj2zv6i6QxxU94N7aAaXvcC75hv1iDB88Lk82L7ra8B8yq1o3UJcNySz1jiFx59J4vkR",
  "key8": "2yAqPS9astZPX5FZDf6XeADLYDYegEBBDzG18FEjqK1hBGatdTKkTu4T51KBpQhcDRa8LKcciruDMKfuRWinpG77",
  "key9": "27JBD4TJ6mxtPoeFh5MTaFWmwwja9mv6SqSJ7Gg2RsaCSs3T4rU4WKdujPuwnnxrjhcwKsrepvzLcmewojukzm7q",
  "key10": "2NgkydVn2SQRrQiShd2kS9gA6a1cPVHshvNjTKyjbcFKCMY2io5R7EVviywXfGzP1WxMZ1hVChjEhpasUAQQgV1F",
  "key11": "2KWg1CY9XARLocx7sEYacLtKXCPFx2KZosTnV7CAtXeueSPyoiQZdHmcvUXzAP8ohMPkUh69A6Q3tipYkA733FSr",
  "key12": "2vwLhe8UVqYHouV6JGbX7FHT1FjP2Lir2uw7LR6ANoZVa6kY6hzhCnMH7EZ7bcGNnVz3ve2ECMQhdu4GvnF3Tqua",
  "key13": "5Hcm8ssYXR8mqqKdbeopWuoMJEG2KNWmj43EGAmwaXwGC7mN8YqFqf6jmbfD5BTDGY5CMu8estJfyGUxUasUwPaA",
  "key14": "29ERfjQCyw716euPMEGU9irMzvm8DumkoKzLq3n6vHb9hdE16TexSkGXUV4X7QuVBGxFMYaJLKh2jD6REYNmp6kX",
  "key15": "3ukkHfPZydP4datmeGPQExwomQero8TPnRr4RmuTUC84HAxCMP2niKAD2Hpgm8M5fZ3xyn7oVASBvakLgzTHCVPC",
  "key16": "5FXBuxPwMSibB9k257jSYQQeba266zKPtpR9m5zLMmCtSVNMEJdzW8hNQ29j2kDmBfUKBdV9GHL2GBHVRxeyjuVv",
  "key17": "3PP9asjJwJj17tcBj72dD5FZftXKBEarjSDrGiQjzZjupZjtDfpBB1RuCDjTqt5m7xiew8rAXheBzxewabErX95x",
  "key18": "HkVrTyMxfDR4pyS9Wvc6UTgvxAKPAAnAt1CRgjQ2pm9Xskgiv1sRrrrQhweYcRh7ZemvH1UnkgVVD7AroQeVq3d",
  "key19": "61G3qJ6NkcumiEGAS8kKVm9rv9vbebNCjuEeZpyfgDH55Atrdd7ALnMKWEAPPbuG5hpE6GMy1HJtsUGTtb5YpLan",
  "key20": "21HhDCPun6aURU1F8WnEuvKjd91X4Mhq6yNsBHLiebgfsqMmGrRDGyxiwqSWDooc4MXkizw1LhpfFRUkCTGg6589",
  "key21": "3L1Xa1GRSU63Pkm2ko52JvjLwSHdwsJRXjMWo5RbEzqHjXryuSawV8pc9pdcQJLTU8RWtTeZ9t4qbKrRHyvoeKe3",
  "key22": "4NynpLNwGQkREypdwwrJLBX76khLuMpcYpohAyQGaGNuSqbkMvFWH8MkwCN2SXKG7fjyEoimt9KECQHXvUhpUh22",
  "key23": "4EZbwHsbvMqeV527V4GBFKQfCC5UFnM1ASHFGsHQf2YtWVS2RW8cPWZgXcA5JoDrYv7xVxso2hC1hem9bhQDT6Mp",
  "key24": "2atLRvM1N8QXQViY4SnfWfGsyRUTY6nDwh2htWVWySJXaNexr414FSq5iYPWfUngkRrNWDNnr9tqKq1fTSrFWoH4",
  "key25": "AtZQmm6XnNhsUQvocWVUacN4Cs4bNThiP1XD1H5dC4bawff5u1HUboDVyLA1CLtkk1BP6uoDvBi5ZwxK8SsEWUw",
  "key26": "btn66PjrQnveoTU8FVwsxSqHPRHwZcSwcHL9r6gTG9sJvaYVwcoyJGGqqd1FvbyVDiZW63g8hfXtGhQruZyoBMz",
  "key27": "3Jdzkymsgs6qhFy9YfzkXia5ifAbs1HhEbVLfTEdgUUVvFMnKBKWDuiBXcjft43JmR9MEyDFkMUjFEr8hn49xN7J",
  "key28": "AUSGsW6wQrBdHeyX8WjacitAzRhMwfqfNqbtWyiS2aDPeSCkHPpS4ie2BQr4pm4qCxrnvuDBNiXiHvhE6uk659T"
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
