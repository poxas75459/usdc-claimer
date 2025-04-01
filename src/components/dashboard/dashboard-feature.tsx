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
    "nGXZnRyFWNk7oPNWqBtYMpnRqT8krz53jyeVestzhNz7ieYu3SEXgPNjLRsoGwBbAehdveh7RSRcoYTwQuc69hJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53mSmSKCrdaJtoXGbewfbDQJXL9Txp5zvJqVpoqudPc7FHZLUGc5NN8FyuDvjybUJC58yD7o1kPN1EfjwNQjY9md",
  "key1": "4NieNZ1DUtbnFeCHeYvRFQs8eGfvSa1ASVPX4m8TgRiPHiBp6jLAMSMxkUAHKfda1mceEZFGu8EJCuNU3ZGDwFAr",
  "key2": "4tJnQZMpiPXNwhKn15ybWCfY6M4Q5RiNjCA1FFFfQ16kVdAursT3PcDETx82em1z8QBtvSjb9RyFYZ5TFGR8Lwa8",
  "key3": "32T6aXZRNBxmqC2nUFXs4go3sopPHx1ehgPK4PU93T9mJ4uyHdLQ9DLkDikSu5M6hH3H5CbpimeFongtAyak83Wt",
  "key4": "4HabFThrUdFWyEFKiBFDsVTsjLG5tVfGmrot8wUfPQpc5if5rF9JdrJ54g9QZvXfGrSLdKZwQ5DhQXkQDpUuycrm",
  "key5": "563NgqgwZvj9SmwdTcswe9spj83ov4CsSgvSdrXDKYHy4YbZ8SxMb9G492nsG7xSP516RKMK9ReSSJa3D49b895i",
  "key6": "6tfuSArsarHuQFoLBLn1y6ZJjJb6pqNLfz1jYLqsqnKDdNoCGvzC6Qar5ErbwHLjoBxU5c1BwWeohALF8eqibrF",
  "key7": "gSJ6fMqRz1urnVXR816wVJztzecsSvC14AbitpAUeC8ntgADC14TvSJSqYiQEqEBYXCdhCG7mPZGftAYooNucaB",
  "key8": "3dtkUir8rCuLtm7EApvnMTEm8EKaowc9WMmy2TtoSZkjn7oSXwPp2RH1VV3iatgnzEBHZJLyJ155v6f8SNUqDgHV",
  "key9": "2HuDRHk5xFm6UcnCyd8GX3eaVBavrj9qfYnxk9KN8hjcy4Mo18rDvbnYsgvo9gNXsCUiYJuDqSJJEbESL5iHxkbR",
  "key10": "41qUpUZzgvwLDsq54ZEiCALpPmiTT1JJANLukVwp85kEDgnqdtkZueyKYTjtpyu1vm8skmT6TFkq3b5PfcC3uqd",
  "key11": "5bYnYmvkjAkV7C7qdpJMGccTWxYXJhojRDwDWFHLhaLN6MHtWXEqKD2FURDvHs7Z8SEr6pY4XevPeLva5UPN2PWF",
  "key12": "2ezssTj9wdsfW2fEcoBhrrUzim4ToBBsnR4gTzGNAoiJmy6PHAKvmX77Qgi87uVhzG714jxB8m57Y2bX4FNjqV2m",
  "key13": "5ZVvJgKFeXgEtdXo8CPZaTRwCagNxspjWAZgKthmXApqy3oWmiKbNJVpY6HrD4ZJY2Z2vwZDSgfo3J3QqL7Nadm8",
  "key14": "koAiirKYKcSQBPkaKJaKAadg8W9VLbXW8UawPLgf1wnXrVhgjWsU28AVCBSrez6gDA64dRQFk1rMeu2Y7kvtrMe",
  "key15": "3vA8Gc86eN6mQQ1XVXdkSEFX2ZWNjEm19QzjoGKKTidiVeunWsdG3jQHwUBX4jiMHHSm8sR86iTT7gxj2AhJj9Gy",
  "key16": "3HpH2UbNuszbNG3TG7LJb1Gm84qXuAxGVhEdfrHxR1v2JvS6suzKuApRmmZkT46e26SnWnZJUBNi7snrK2X9xQrW",
  "key17": "29fPmTaCWpsHomPc9qoSfEJ2YeBRPib3hTVHN5AP5cTFdfAERoWED5vBZgrUbUYBJNbAGiParLhyH4Yx2tjctxyC",
  "key18": "4AxwK8x7fCgU7WK8VLhPPnB8mSCaXv8bp1VZgRu5dn6u1yfTZPiZ6XvmwAWzVZAnCnZnkVkugTS24xm4QZXxFnH2",
  "key19": "xr8VY3cPju6FRNLwEvUHV3uq9ZAF5iYpdXb6bCQXGJXoSH18iLbL8Te3Vi2G7Whq17Dg9RDAdCBdAMvU2yGNVPQ",
  "key20": "5WnZHf4g8vcuMF6TC1SSVA6CKd4svkSAPXXn3hTYErKAwF8mp1TW9vcXKFMGe8UdD4duNDCDkyZwQYkok6Wrk2SV",
  "key21": "2sEW31ZTmc3SeuzRVabvXNQ8JK7tFajsEhBjd4ARWEBx28gf5qmkfvCiiG1Tzw87qpydJwZmFhG8x6XxLZaUYorp",
  "key22": "35TrZaBgCG7QMAWTnZFk4erYE1eibApP88CzHLRET9p5pMTEQEmPdnBrfV18F8xUhAdMUWJBPMahV9rKAGtBRiSP",
  "key23": "4vWWx7WDDF1abppJZ1ceWrBBbGEpxPDb3gkDZpVfYu5PhDS5Tdj6n5KHH8tYq32TVMVvp8SbmhCexMm8hgTHcPX1",
  "key24": "3zsrkk7kb3DGrVBXqnDGD6bko8EY85gozcdaLR2JUrABiHQxEtc7ymNHxYjqPnZvo5wppFRXkQNnArbVqKGaEqCc",
  "key25": "58UeBBiQqipr1YJUeLNEGC3dEheJhgX8CQmcPx5dQTTcQNQbKvvPz6Jj5HWfHnd4qjLGwSQkqVBKSf3Zf8c1eDbn",
  "key26": "4taG5HtXhXNcmCwXYy1zjqkv6rJSPuvDosbKHpB8R2TtLhHJNSzczS2z8fYeMWKf4e9NFjw1tZah68JWWVjSBrJx",
  "key27": "4fZNfFHurVP1qtQLDDV2ixYJj1GuDXGnYB3bPPuPwBeAgJc431TH5AVV78Kzr5qqt6ZQsZdECmthSqJ3DPsmt9MR",
  "key28": "3HgXsBN1gsXwb7G4dPCeuuDLqcDV1yNwVj1yT3DzntAoDKfuNCt8N2jgMe7RG2airAP2MA7fGUspt2ELaYarQVeT",
  "key29": "5Q9fpfWxMgfA7iN5v25TQu7v2HLjAgzUaRi9ev5gzLLHAWwqzmuYqobsKDSoxgtRh5qoBEn4mTeBd2vKnygWXWpf",
  "key30": "5crBAmfb8H8hKQcNjoB6LfqctRPXVcjpYbwtESBfTPzn6HcpvqTcRfYU9F92V2MSRvqds9At41hzef5NN24Hx34P",
  "key31": "3o4tEZaeA8KBBxJztsHkJcsEtFDpRLYakAkT7QsGoHpcFm1pCx9zgs5uH5wEP8KKiniKVKq57pJCpiQ7CvqqMq8w",
  "key32": "5VnjMr5vKF1Q9NbUDgrmwmPB4nr21zhxSjF9Q4UPZDC8SAc8TDeuimg1gZNA1qYqoP8nBuawJqDDgNwL63jtBocU",
  "key33": "PaHev7VHo5ade5hBmUr18dPY9fJgGiuaWNFFFfU3JjjHG16Ua1C86wXu71NwruyrUQB8AzpfX9TKKgFKNYq5GHz",
  "key34": "FucrtTUUgZgaaPp7oNZ8VZj6jinmL2yLqj3GuZhmXEQcPEPfoJj5fbvyKPvqeURMXAngCmhGL8q4TiUGbGYUnh6",
  "key35": "2XmmvvBnL9xf9A9kQiaaYUz1GRdgiFQpY1hnz1GGyeYAjih6y18i62TctCqaaSfjUzndxTcbgnCfqZbrxocZ4RoW",
  "key36": "35yhPrc7ry3e6i7GN7LFZjXbkiAucZ5PjTR4Wy4i7HzWevQ6F52v2ME28zJ3EU8iUSwfUgAjc388FSjUWWuz2zbL"
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
