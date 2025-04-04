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
    "4TLPPwWan31BbKEruuo4xHde2kSKSNsKKeN8FkWXEjXLkgQNLRoSad6mesjapn55aenpNehwZwbQTNAXv6PmXC62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XqiXaMMp7ssHAoDTUYatvokRBoh11Rb9YWsGL2eUPB6YksU2n86bHz3E8WAFFGgnPq3qQmQTTP5ziLeDmscsunx",
  "key1": "4FfsgkjpVNbWfZHhRjKiw7dd8S58RxXTkUDCbFwiiESU349P568qe5ZAftnRAXDSKAhaWe1UcHq7nhhnkSody6wJ",
  "key2": "5xrPX3f6JBxn3BAJGnhrYYkCJKrtQzHgwZRov8bxkWhqCPRFhHfwvWv5rFsgfbb5jkUfPw3qGAAKvs4B9kqZMd8q",
  "key3": "5cHwdnmyNJSQAD3UypybyBtEhpnTpR1H5Twgqm7VQRq4VB8FfvErQngf1JKpAJjv7NQ6VNFjA1LrsXM9Sv6Lf7qL",
  "key4": "4WhDVaZHiwi44kdTVtXSxgTgz2dKKtV4sA1jn3KeJJJUjJFjYosZcS4JVKnz2aTax22JaHdkKqfwyN858EC34ZLZ",
  "key5": "4RpH5bZM6D7KTiqd7LS2dTkSZARFJ7UBMR63nbPQ75wzafK6rXAov5gxdxwEi3qtkurZDDzt2sDCyFu38L1qSe6k",
  "key6": "5fWne8yAEPtt9ArL3D3emDh2xJZQYKstMva49GncHEQbbQJgWkASGP6pBd3DbEwLz3S8wR7HmohqDgSuJBnJ3ysW",
  "key7": "Ez7NzgopwKSxV1tCP4UEZPMF1KsgM4aoPn8xpZgPKzGznYJu5ZJJbsDEBiGJzmn5pjs7GBuEwUwT7K8f7JWW4XC",
  "key8": "3DBVMiNAsGJ7gocaGiHudi187cnRCUqnLDdeq9PHBNqpWVX5MsPfcrVeCx4kby2iqBy7zGXzao5UE4DrRA425SCC",
  "key9": "5ijk3akByMpnkZum9ve9zLX2qNcmNurg2jBNsMFY8FVBCtHPyp85zFUj5XBtARvQduBLwQwSPSkcdTpLCE4YHhSN",
  "key10": "ZAhCFHvRQoaBQgB6RnAy94mF5eBBAmzA5m6N7aVbFaRdYtPsU3VSUKobU6xGoS5d1zspteHx2cJgQkVvVj89EGv",
  "key11": "2TWmjeSsYUmmbEB1Lu2xSo4xYHLxb7CYHde3AKNyTcuc8AAUbKyEgCjPyiPWSNGsLDpetKdj1ZgjBZ2kewvwXkMm",
  "key12": "2o9Wr25aVeZupLvcrh1oHTDVWLdThEfNsridRAGNcQ3p1XqAPeLxJs43MKTjNSLyVgYxQ5Pt2HVrvdNEchmx7G6X",
  "key13": "2GehmH75eDjsSXAj4ynW2qfSj6YHTmHPpsdeg2FmBNUgVvcyvd348UZnRYYnFPV15TX8yqLxftnL3y8qySMdGd88",
  "key14": "WAs9NJpMUpCqG3UEtAq4Ny6kCDJraJV3zaZCy9Nteq6zvx7Q7g8umZJ3kgj78c3tnn9iqCD2ZNQqiaYMzLky7kv",
  "key15": "PkRZLuSMHow3GYDbsqQzHBG3f1WSJXYE5VMBvr3BoxmpWzRvQVp3uX3Qu7pNsMGifkHYxwmL3zm51YmBaMQyRT6",
  "key16": "2Hy3sk3VNNgkMf3VvVrEr8YjLJ5k5Xww9ZmBUeHmtbEwUtzPbSg4yDPfm6CtkhYjTKutmDf1zpN7yrMb7GS4GUCz",
  "key17": "3N1C6cPFpbGoRQfBQk6Yob6qkmPJ7jbGXjYaATcotWQFndmLLpK7r8Qfs8KVqCVeqmcEtet9CRak3ubwg39bQ8Ka",
  "key18": "4Vex3cbtJsbjdVZGsQSuJTXHX6onnhS32EgYCY2ZufwTcs9E9mp5z32NUXdXLvck4PnzVJvTgARaKGQP3vuXjkAN",
  "key19": "2fNk8AHvRyP99UkDPrdpvbtYtK9igrsvrZDPRux36yiW2mQx1okeMkd9SmjsQMTNkPoDAGPgRBgR1ZZWwh5RErs7",
  "key20": "HjscnwoKkQfAhQfmheuwkPcXNp5R6JPnncLLGsNeniywtD9N4KuTsxiNvvEgdpU8KXAXTAPKQnFaDJQLkG3KXys",
  "key21": "4QXfjHfRzX5owvQBDu3gASeUMKBzFosQPVjqCvLyz3MdpstRmBNP4UxBtqjm4ZTLDmN75F4P4xsuf5cHQ5JK2kam",
  "key22": "36C5kqHD6XjXAUhsJ8jYEDzkPeKUJy6AcguLMMLf68cYzHLmEGCCcdTfJ7uyin5CPz28jRnqWgzKScCFHm4rzhGo",
  "key23": "7RvyjRoT68HXV5Fxm6ZQMk1V7VdYiqcbmYsWFfGF6QNfHY5sWBx5UpLPjog6aaY1FFXMKbTYWiBWK3TjptAT7BR",
  "key24": "3Hv6EUTLMwUhm3tYQYRPGSbYxx7YmHbzdT6Wp4MfkD1pABJpPgEqgwchEidQxbtt6bLyMG3k9xvZok4jcKJyqc46",
  "key25": "63CKzXr9cqux75RTq6ARnAqZwcVxYPWB2ZRSSpyeVjTcPonGA2CEHsfkobkYhSGrDyT7YLwyt6tSzHDVF12MWXqb",
  "key26": "6i9b3n9zJoG81zqZKVa8AnJpY1PbgT9Z2P52z2BoV7QCsD4J63yfVGdpuN8QhYqvx9Lzm8h6HgzfMWwDPqKQ6nc",
  "key27": "r7PcyB683erJYHr2u92pRF1k3NfUbvhgN6bg1UAUVWPJ2VxnWvM9daahL3C6VwxnFxE1jXmyjoqaH6kYru5UGe4",
  "key28": "4MVMoUh3GWZpMh6rf3MRDm4WpinjY4fEHvGNjetz6nr8ELu6DArkgcEWzA4NR6Cy9Z3fXfejahvFxDNjrzjAnbDD",
  "key29": "3JcbFtnaTd79L9BXCKMpRnxjvTbMLSEzjExFYt9qXurDDQN7gXXH6ueHSUQc8MW56r3DWqRDgJhrxvE5cztCjE7g",
  "key30": "2Dkx2Tgvkk2yfYs9UUWMqEGANQ1gAWACHtMdMLX5DWoptt6aettuTEnLfpZrVAQ7qwvPvy66TzgVg9fcSvFeA4m7",
  "key31": "3Nioou2uNUcDcrhyEQ2vHTYgGnucBe31fnhHJEEZX4yoRrs1FPBboEeLn93rWWzmbtpzYj4YmMBFoPMPsMJHE4bK",
  "key32": "4NQgLTWqYG54CnqxciRdo7pJU3Lun3uVNmoJ7cKTK6956XyibXd6EzppC5pLemebMqiig98FbcAq4UKbxi1jxjV7",
  "key33": "4jwSUK2T6KosZTxCnzqu8hk24pumDatJyYD8S4xMJPfeyUfbGndfRkps1EoK2E5D313o1BnhPB8JeUcFD8yv9ibK",
  "key34": "3yg9Ug1XciSxhBhaNAQCwA6shC78HJweFUZVe5Aa2hrwFw54n8RFiHqmf789t44vLCFN9nAXh8R3h5KnPrWkVe1M",
  "key35": "2e7r5wg9WURamrAjdttRhRJFspGcr9de1LaLbdFLoPDvef2bersGwh88qvDPuW9HfF27dZ2sQ8fxpyNw9uJVuJYY",
  "key36": "2fe4Gk8B8dMyER24cSoFXhiRteHVxyrzjzpKC5iVEu2owY7DE5U63fm7VWy5N2k8aM6mBRq8jKkJBy2UiQ2jDRMM"
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
