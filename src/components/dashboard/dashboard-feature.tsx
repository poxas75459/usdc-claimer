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
    "2pmXfJcvidRzLph57GfhzM9L5jtzXMDxUmTJJve9C6MRcztf57Kptv7KpmgAoQ6jUfmypJzZyshvLHXuZL82hk2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EkkJ8gDuo8dPb92hEQtVC3674KEuABjUc1rwiixFu9h3yFB8RPYTvWfToLCUFcXt5ZL4zSHHoazJEoaCcrtXxxb",
  "key1": "4rpspeJYGZoAmYNkArUfX82mWf386sXriPBHD855YQcFfRgvcszBrvqTwh7DvB7SqmHjEkPbR3grFrxQNLjwi1A5",
  "key2": "4BTJRjXTNqjEzP4sDGFRmKFYSidbZzVf7Ndocb6fRgVF1SvDst4j9WEu5t9epJwGvp7pYsvx5r68vAtNgdfh9xuQ",
  "key3": "4yoKkAeCe57R3iLnDtbfuChWZUbQbXiDWLPMaKATdKTJ3P5igTH7V2xgG4UAV5zPJ3pgNnMwat3XaZVZZVDDie2X",
  "key4": "3AAAcuzwPfKEFnpgyEAbdLsYzkqiHiDRLUZr5hoLNeKSZCTaifA6btWH6vjCRQf9wJwBsy2V7EL55FEj1ELLtxny",
  "key5": "5pEoK4gbpTxrsvo9qKrpUF8Bq3Vxvpri1AagtyLEEhkPcXX4KuU9HJ5wtMgBL9zhni6f8kkE6dAusHhFJQdD6Xae",
  "key6": "5VWkFWW4LcWbBVsVmSDNBPT3MouEg3VBD17G18CxVZvyx1eVeKwJCT2MNGHBJuq1onjZjT9kzjbGT2W1m3cd8Mj6",
  "key7": "3yBXivCUT9yDQQZDaYT4GpZs1YPzS7GGv3ZAnRusuQL1bCeW7nUYUZKECUJgypzRrk3hsMP5YAQhrFbArNhzTpkA",
  "key8": "38hA2hsuzQpGeRJSTsCWiyNs5oiB1Qky21V36eQcVGy32AjLCodAmttbVxvEMDCb54BoKzLUShUvb7RaXhr8VpLr",
  "key9": "62zaDqssPg6qJkTJvVnbjyKTbNYsdsc3hAhPuxX61fdnSeZ64wL5EJjqAGmkPhJgmC5tkvowKq1TV4QSueeS82e7",
  "key10": "5ZsgXgP8z937mfWnLaFv2gsQTVkt18NcJcXG41uHBEPQgsu1wrU6paTmoo1j3zuuDZk6nUsSjj1agJC2C5L6tZF5",
  "key11": "cH13i6VS3rQe2nsg4vC2tJdUDLcxZHnNV5ukyVDwhUhs2RRrXht8YNLeRXTDKnGxgtahBXmGNXtb4S8Sd66Stbr",
  "key12": "56pJCfmRFJm3e3j14Tg8C5SKgGjNDNuGg5mYCSqA2nhdUEXCSfcy8Ua9qa8KaBv9bxRojnrC9S48YGHYeY1wkg3E",
  "key13": "5kZNGJAq1nkExgLAPLUhAcJ7T9eckhbe4scCfvKfWGfZH5V8TJGqWndi5Svg41yCdmxaz67uQM234PzzUbH19b6E",
  "key14": "UCptk8hNRhED4yF4YbG6xLppAHU3BSKAXWa4tyMx26XZm65rxTthENPgdV9UDWKwyhgwggnQq1EjwBq8ZYLmjNA",
  "key15": "62E6oG3LtuZmUi6nBPerkqPZ7ev9A75ypUvdqiQwWDw1NRZqUvZiCEJ4sCMmDsYp6aEu5iXPucHswtBgPhK9CY3P",
  "key16": "5ShgdDX2m2dRssDE7c9D2HdDg86oaamKGMa8Ai4vE1ffueVdiS6vBC8J5BreUY8UkJnPMrTzLg35jxMKL2nytzRm",
  "key17": "vKnhrpFz43qP7qkYdhfg2kusSfkEkGSahS745BXjgsgfs3BBsauLThhg2ZnewjaP3wLKw4VFUmNRHusqvYRQxnD",
  "key18": "4UoRk7AE7EWv8k8Cu2Cic2bDACPcodioUwmFgSSYEujL16SMSCL8sAMsa5nUw6vdtbvM4hQ4hjg58QGG6wCd5g8i",
  "key19": "4exiWQgp5rmj8EgPcC4161YWtwEoSJn8YxhxnyFFFFk1i5TuVACs56jUPpBsxRxufmXqrwfNGCsEZtjCkQV3fN4e",
  "key20": "3CATT1KHTPA6U25oavkGriyKtqnhWL4j5GMQ3zTgx56JJGCNwxUxa8C43i149fbnJaN8FuUQRXG1aDq8Hek7jUoJ",
  "key21": "4JzW8MHDs6LKxwha5SW17rsyTdrG79Qvt8VTazWs9YiyGh64zmp6sTAevKk3WCH6QXx1VPaEcEt55giQR3rXrA8f",
  "key22": "x1rEab3AEZ4u5pzWQbLLFXXPSRf1SP4xSPR4FeECR7LEscnMGnxRGTVnC6xrJ6yZ7ZXTp7LXpkrC4NhCAVg5jXf",
  "key23": "5pzG3kdQ91R3h6QmVM2645dv3qcMa7zJeXgfh1rN1F4oJRA4ufQShWn7uFgt9aEkMm5NUReWtT3k3983fvyg1AdZ",
  "key24": "2fyjyRFU3raMtiorc7HgQZHWj5k76bBTTWx7d5wiejoSY1ufpkWtw5zrK4zg1x3mrDjB8x8cPTP2BTfuUbTugLsf",
  "key25": "3vTqZDQCeZf8PZcWtvgb1h4dPke3QUW1Pe3WLWF39sw5BFxaA1ZFp24BQKhhmFrVFhETXDrNSe9gBRYeWM3Q49mo",
  "key26": "5rTZxA1K9m1V1bpeUfrb69i3doajdMRwr6g8KsJzfxU1Cr91Mz1py8RrnKYTnBxpJqUzMeQL2BYQnQ6AchbbE5zE",
  "key27": "5zJsKwmvqiekHSVaepz1b5J3jzoqBrdgu8xxWNVHrcKfUimmLFFFqzUzoQVQezUWCMWneziR9SyopFVHBcdRYFt2",
  "key28": "nyKZL8dBQX5PEc7Q62wvBeoGELp3L2sjgVdfD5CVt9nkzCeeS1ArpcdnT7fDvj7fbXWR8TNDoQu1qF3cdfSHXYj",
  "key29": "5xFHD31eHa46yUcDq2y265FwfF6FC6yff9pCDqJNBYKCF2y5rCikQArEo2Q71YsNkUgiFNJHkf78T6gechFZtvFH",
  "key30": "4chEMVZdtNDQ5vPLYPLcWrfCjBLPkyaZHcztgoiFV2BgddtYhx1joQ1Rgm8C9ARGW7N2aaww14MWycZXWwk7MAKz",
  "key31": "QJAkeTKmnBBySKXRJBXtV2QJQhxriTzRPU8S8QZLx79jymdxe1qT5VjXQmWHJLBu13xhAKYrmMDfb95XuaaSry5"
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
