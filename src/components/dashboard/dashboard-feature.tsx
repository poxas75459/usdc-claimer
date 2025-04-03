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
    "4qSbGWSGDvcj5796snZhAg6ifr2BSCFUYENQUczEWERTyRe7gzFaB2XGJTsL4x5uv4PD2LegYQffejEF1EWqrtFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ty1cVpPJ5ZacQZC8Zc8HMYvUWcFGXTpzEa8T7hKPB5pNSH6sTZAdueGea9nEmStzTMDiiijcFGPLaJQRxMSckoB",
  "key1": "62aJsysEBavZc25Wd3cSv91UXhZusxn7YDjECLHPUqD6GgvzGAf7peJnyrPcoVAuxiFE52fyDiwSKoWSJz4LajKu",
  "key2": "5f9TTWSrqWiGcr1cr63GGc351PbZEtViX6TfyHbW94C6ci9NVxhnT5TA2FUem2TXzLve5qyvw7tJvHQY3YAQHNwA",
  "key3": "5iFmJ9zn8m7xUSXfuP2JGVSL6E3JAdToyTi34kCmoY7YUgovz1qcEnqiYwT1CMw1SSjWgF8MtSVSrqjrER49bpSh",
  "key4": "44SMhu3UkqnYJXBmbBcDXjEKrB6QPea6qo2im2ao3dCA7F6JXT1MMLq7WfdMccdT66hrtQFPS5FtPZpn7xp8cNRm",
  "key5": "34iuZL5Ez1mtk2LJgcbeFWjpYoYYiS48LtiTLhpQokCtLStqJUqjR7J7rGiNi6F79UzZfbPdhLi8U4n6VzBetX7N",
  "key6": "8YH9dR5dhwiCr7dmn4StVQYvq6w6FcSWhjZxUyNXeHThA59pfRgyPhk2SyNiqvKqFojjzD2MgueSHdufTZKWzQ9",
  "key7": "3oi2pHHMrknu9m7zcRYV8ZaozAg8CyRtQLHJBt6RMPbzHtuqJANQ46TV3xdwghDvZobLqsC9bPgQ7PxEhNguu6o6",
  "key8": "44289WEeSxXRth9EzGnpFABixMuZWsFq27Jw7xe4qBTKGDcmK7pUzsqYQ7ewujJkrbwNC8PhE2fto5JHqvFiGkXB",
  "key9": "n8o9bkWU6BKPWYmmiREYUTVLbqJmXYeHarvNhsKZ9Ym2TAY6VZ44HGbmvWZjgGgZYxJiuu8WxN9jggNmbeCVqm8",
  "key10": "4FU65S9QMtF5j9Kn7dtRjpmUDFRzFEMJ3xkfkAGmGsgcnUNsXcr5iQTtd55UXMN675Kx27xTCJoN8H76ZVkLdf4f",
  "key11": "4PuXUVHgzthgLqsZVZwabb8PD5Y2qeJRL9XRfvEZehep531Ce2HQx8KiQS3coK7mqHsiG4cMYHbtRbgLWytWQekX",
  "key12": "4EwjWTRXKo4MbVsmJmAdf6NjKgnYoE6yjNUCuC6e4NHJ8y3yzQntYwHG89JdpVhJWMrhLT4BQjAH5T3D1Vi2g5qR",
  "key13": "32ab1uCK2h2aBNXnTPiYwaiQ2atvDPL7SN15jcNtjFLDJyaD4LTDXhmyqcTMy77XejqTA814VUTmFPyzVJ67UGr",
  "key14": "c88CJtaUCRFYWq2zyNmfBhZqFwT9XJEvwGBhWWdhDSBoAUmV3FmMCX5qt1iv8hA7BvRcdKhnactMxqe2pWsED9S",
  "key15": "3SVkekNG5QfCPmoK5cJ4toUxEWNCoj9mY7yoGCXfPAd1T2Q8YFKsLR1UELCz7sC37xndBXrSftf1NSCvotefmJmG",
  "key16": "24k3APUxJv5RvuJA5spcuaGWSpXoTRPc4Z9WuPvrXpnN23jherQDFZMqFEzdS2u4PoBgLeXjy6HfFTgvyyszYrgk",
  "key17": "43pv8WCi6pGaeqHH7qDC3uYfezmwmfC2edYoRNHuDDDgXqHpFERWd1AfeViVrBKynoLw2ZV2gm1Eu7MjKuWDyDeM",
  "key18": "5kaebqqjPKWeKY8MauTkr3FL4NCtTZCskiHSv9ttdY8XeEAhCP4GoMuhoCVFWsKW6qVFsqxnoCHLqAmDTJnw1S2w",
  "key19": "3A6aTtMDNy2YbGNfpAAaSZQxq3iE8ExhhdNApJtzPuCe59AvPDexkxGYzJmh2jCMfxZMmt2nbL5Zs9SWE32wrQ3Z",
  "key20": "44Tsvnpre4RWHLq45VSvHUdXnkMxKX89tm3rZHz66FxzcJZDGgYLdVHS8yd3enKeSG94rAjHukRQ7iW5SwGQm3rr",
  "key21": "4H7vTvwYSuAihSzyFdAk98P9Cve5y86hTtNGv6wW1jP773xtfBJhzSphhxtXGFtozekD4C7dQkfnCEc5tmNxHFyF",
  "key22": "3TvRchYP6N5Nzk7TFYZnYjHi9N436i9cKDiRNeEcgSLGgB6bBUjMPWgJ6zzNArdAd8oVu5si4ZewjbcB86ZmDzMy",
  "key23": "5sxkX4RBknUJvxCVKrsB16XQ1hKbkvUa859AwrMbbBzHiwpcjGyRkw9B1r1yu7gSqEiEHv3e1FSPwz1ctPx6eAs5",
  "key24": "4r8EwLBa4jLsWctK45YzbosoeJ5PbvNZEQKvFQnY7XWQ6F644XPc9uRwqgEwrNLnh4Nm4EbYH8MWEvFdRfVEhHST",
  "key25": "4jY1Ppfv6AKWoBzoRqQMgq4Giwqg8B9sTpKazcTATudcevptBmgo94WWrpL89DNn5q3nTfXG66XvA2Pu8Grsoaav",
  "key26": "3Emj4xBYGYiURXcCCMnsQopEm73c2Q7sx1LaRKML4jDYL5dY7A1um6Ne9P3sYr8U3BE1xxktKjS5xr7BYkb42nni",
  "key27": "5mAzUDdvM1bmygHAsKuBVCysF3Yk7ctcdF85BUueJHPYm6RiGeoCsmtxWwMCg72Gne4sUTH26hsEPtjRgzLmuj1Y"
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
