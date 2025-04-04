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
    "jFVqTptbpb9Rro4sKCaXRQya7ftP5PiSsJKwUZVqpzhsZf17ywxxjGRZCNS4LVpLF1Zxgu4oZdpXcrMourTjeZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nzqa7euE9XHVeEapuMsbL6nXaBsnAc7YS2ajMctUuEfd8aazdRobJhsr3RqVqUAg3fnhzH6ifWardoxUfjuhiNK",
  "key1": "4U1Ts3GcToEyXvSMEXUqB7qVB75yq6UcPFamDiZ427oSWvW4Zc3ChSCfZn3PaDHjkzJQtgu9Zu7CZt3NnRQAe6vz",
  "key2": "2mkXCRgi1GFpHY5XcPX8zHVVDGyAbntqbpaU2abTkNetibxkeFA13RdiqoRnytVxHkdghjp2zcFuNJQH5f1ZgS7h",
  "key3": "24grDzPWPy8CFtbs3gX6Jy5EKfBRWErbXnXp53EsspBWpbMMAR8RLpAPsqVCR7sgvYpm7FytWmHpB5Xn5HhCvfWY",
  "key4": "K8MmpJbfaZqA4h1P7awRgm6ntjmqAdBUfxQBumDphokBf28gVrSbkSBGuohpV15imcdyJn1i8YCwqSx6HtSJAMY",
  "key5": "3iSZtwsYonH2ss4hxTcUTv7AJmftLG4GybwBK2Lk3LK6bWivqjL4kR6FKWLYDqVjWF5XwhPm55WRytzchie8HYdk",
  "key6": "4kzTz8abp7ZMCueDUSmXk72wGoRUed9hVEJEW9m2PUodUAJBi9e7Um3bUBydkCWm543b7wTdM59y6LtJH2KZ7LHh",
  "key7": "4kCY9a834qVLS8n8SirVUTqsnkAooVuyCKibd2pXYiaEo5iQXdH1dVGaToioxyHofsPmCYWjhaXCmKbHvAKeNLH7",
  "key8": "49n2S7BdpWjVxZqgfWAma5DqXsNDPfhGFyph2tKqytK8fejyAcLMKZuFoudTYAarYQy5LCwCWYPw5fXSicxLhR6S",
  "key9": "TtZAcygfBqKAXrkwm7cZsVBA74A7npsEBAdsYEcBSnJ1JiZNcRMLEuvaRZQgaa3EEz9bJaDPCueik1ktPqqSFjQ",
  "key10": "3oFqaiyXYNogxeK5BbbjybArb7suu8QpSvKsTawx5rTi5vua9pTMGbmUnvoUhzPgd32i4kM2DTaUitmBdi7Mi43p",
  "key11": "4Bj8ZQMNrtq7jn2f32CW76Z9ncRc4PDEBBKY5LN2VEBBDkMi8eai1QtPC1JTqK3QZPY173CLoRxb9z7QSnfzQKLv",
  "key12": "2uk2ajoUjffuYQcfjhJ3qahfKNXwA5UVV5NPPTcgmnphhenuZE6WGD1JBfZEUPkJwBWN76Tnsc4VKRwKFXNUMbqu",
  "key13": "2MnhFhjyMvXCxYUq7GNwAm7fbxoXY89Yb6MSb5ktJhKiaZhfvMg7T8zrjHDwqXkFFt6nfQi7wJPPjTRv6xUhXpTi",
  "key14": "3fDVj7X2at89gf55ZEvQbckhU1rfL2AWAVoH4Vcyo21zZ2tDLqmVMPU6HDe57cwmoQ43msbdWChQdUfZj58XTxRV",
  "key15": "3xoUW6jazWZpAeVntFqBfJfCPKotL4Qy4Z24H9P6Uw5iNv5g7gPqWRJpbofj2KwNCLjBQUxwWdosbpbhMt4zusxQ",
  "key16": "2ENfQFVLDUWVKXGLkh9YjNsvRjaVr7qjUZ6dmNQmJ6v5NtnmkSTUF9J7Ze6JYMccXDUC1kaCLyVD7ryW3CB1EsuC",
  "key17": "Fa5KEEfETfEyXmA3TGVFYhT6j9QA1JVkYt2FJAoeQoUdQyGWUNeSon7gvBbMUEbVrSX7oEQF9nNWrqttaHHgyGt",
  "key18": "66XqgheZMPsQt7Rmd4BhAXdNhqaT8C5UCJgZiMuvghAfCnHhcLogRUoRnpL7gHMeHFUDR7gN2dkKL3LR1ar9si1k",
  "key19": "2ei2JRr3AWDtmREF4xdfgkSTMPNKSYDLJjmSaL4Pa3jpQbGN6Ujpfx4qykxgJeo4GsXqeSUpjqULKVLiT38AwC1r",
  "key20": "TYYt2BdLbjcXj1qkXMTAgMVpQXb9jfpsSHNJi3x5P6z6KVCcMuJx1mYNfibGG4dhWuf1tEAoBiB5ys8WZhNUy5G",
  "key21": "3145igBPvUCcWEFtBE5oB9VXMj7uy298p2rKAwV8PvUs8ULxJj53CfmbzPMWRExuC8jFm6kSuEoYVQoinPepKhWf",
  "key22": "3ukiWf4PP5cDc9psSqbopiqkt4nYCMitgct1R7X2eCKcrbRF3hZLRs7ND9RJVJm6H2Qjk6XukYaar8bQ8LCGRSWm",
  "key23": "4Gu3cW9zGGf2pbjKa4LzrKkTZybC23TbWDTJE8RQbZYMoDcraGb4twpswg6yRurWMYMwpv4cA48ZUNTcj6TJ6C2K",
  "key24": "5dfBPJuhuUwR7UDtuyvvivwdoXAyzXwTiMVM6LcXnXC5YNQJx6gfdj38QnipaFXprarovRJAoDXjQMmQdDdnbSNS",
  "key25": "33GJS3eePh8mhTLYqXf4A7ZFP8HKkj5qDL7SPKTdSJKygXk7kKVCEzLaqwU9SkXw7vngQQ5BrhCrBGtdtAeXWrzV",
  "key26": "4nR59Aykkvu9mnGvLRnsYyGTa5WEE8RbZsgFgBB1qywcrLSeDNPaBaczbNCcyY6F8w4v6LqTE1XNohtYYRHwchE2",
  "key27": "6HXEa8enKZVawnzLr58LKQEXQ7YzAngQSxUk1kX9mrZ36gnkXvmXEq3y2FXAXmxeQSUpvfjdp34vPN1R2s85z7Q",
  "key28": "36Paqv8oFwkoC6P38knCwnwvwGXPm9o51ohxQuyA92xdVDeS1iZcExF1fcbMcuZ8tMTJ21mZ9UV453rcdpov41pL",
  "key29": "585Jcpr9i5YqewFp7CvwyMp7t92dB87NSwq4Tstu3KKRgantKd2zFFP6HPVF738UXh3eBcwBo3SvoEgNfuiQHsNB",
  "key30": "5f2Yo3UubccjBKw4e38qSGxGEkBSmdjHP4ZvVPGovEu94yFm795zqhTNRUBNwXWfvmy799eQdgm83t3mqjRi8J5T",
  "key31": "2xEs9rvbMjKajGfq6vbm91q8vGuq1MfbXiEs2aDk3G2Xuy719Pu4QMrdjpbpmohae1ZdVSZWXZbpamEKuUchhyGo"
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
