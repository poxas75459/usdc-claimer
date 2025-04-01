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
    "5zMCyU9mUC8PR8vKYP4Gg7MxJj3HXXHhXyZ4Pxdx8J6UTz7SsjaPo5LSMq4P4KqxVMRg6wfUwWGQR5aGnNr9Z4PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f17r4hrxoVsU6p7dxmh2LcQdDVbKVSS9JePeXJCL2SkRDQBYNrTu3STEFz58X5bKpywT86maTnPMTCJBBJZ6oR6",
  "key1": "325WghvZJDEy3YcxhbWiu7FYw8Ew3SAsBGg2Z8pvabWaqWkCMP8R97rQpqw8dno8VHmm49NJYAd52tbtbvte9Sut",
  "key2": "2keP8YWcixDfQuXB6mCUQXSuU6VPaCQ1LmEhdBCdDm8Umyafn7LcCHfGyJcUkLhCVuCLnUA6eQDy7aLsbhttSxTn",
  "key3": "95E6riktz5kb61cuJjbuNnTE4emiYR3Lk55rRVzaMfEr1dNjVRnnfFsiQJFagykmnvyqFLk836gSocMGFmYdkzv",
  "key4": "5bexeAfLMHsp4jzFCCkQjQdbD9rGbxmfoiXd6DRfMUo8rMZpcDSUiZCEGj17jmeTELbzUuLN355gsGAsk2KRdJuF",
  "key5": "4abs723EQPipx218XcqEAiZ9iF9fqcyu9QmeUvjR6KTQzUJ5a4hq2uCd2r7vnvNcxJeLt9urXrqWCnfeQJykncfa",
  "key6": "41we4knTGhNwtZxPx1aBWWctG9WE5dKYzo5g1FQe6gbnbpzk9AtVphasQxDSrbV2EzYTeugYWkMgGcUZk1ATDC2m",
  "key7": "giiTtVpWjWtLjMYgrWBRQbTuMEPLjh9taSyQgC7vJ5nUHMeaBGDaoFPAonJYubdGo4P5q7wJzwenSmqP4PPqrPq",
  "key8": "59Cfxd6RQ8MWf7pAZp5xNA8MamuJKU6jsmhugS1RUahQPJVmKXroCZXTue8kozddcJ834ryDETi9YYkxHEJMD4sP",
  "key9": "2W2zfACJWKY5yraYvwUrbibxi6NCT1o6fA659FwzvvsCWcWoRPH1MAu3fV9SLZcZQxRnKLC1F3jQA4tbiX7drZYs",
  "key10": "5mSQV21ifqUEvnjPFHcJuwSanLm2MHL2ynVnTMiFGceZ7Y5ZGXg5sQohrXRE5hcAFRcoUozc545QXwMeCtKqaYTX",
  "key11": "Qy8ouSFz9qSTF3yzTDzbjaEBDBBusE17qaQrpDQAb9NVngp3irnDyDkLFUPLoQNizKnr8BrRemqiqiGPAt3eA8b",
  "key12": "5qzowxphvSLCPBPka7CPEhDZAmshDbreszDnsX2vns6wDYDYXm8qy2LSmJhAkmPy9vdFRGegdk836YQy2y7w7msG",
  "key13": "2qwX3PqoqZBubjomvKEozvUeg4BbTr1U2mK7iMqYD4Rdx7aaRbAAtudMbSiAVYem2bEe4cdsER4GBmcTHi1VsgbK",
  "key14": "4od8KhbYXiUzwCveP1PVJz6j6FFDz9JWRbZqB6Ebd3tKCMZi3PpQHCKB5QjrtkufRmw3wjjQjfA6S14urwhyDg7B",
  "key15": "5wqBXvxezWoXNRn9Yiu6oAV7Aosv6qqB4iQ6fmvdy1T8MFJkwprQzcTd79PRj59R5V7opJEtWihJPweKC7ZNdijs",
  "key16": "5gCHK51EojbRQKarPpeoB5tc7Lxh9heL7N4CQNJdtmpuLYxUppVP9Kypq6DYmVftTeQ3dHuaqdK3RnDZFRuNt685",
  "key17": "4RLazEVC8rXPYYaKyya2bFxgdaD7Qz8DMFkSdWBdAT7yfdj2HjsUDq4E97KmYN78MWQ2HgbS7WMrVGpQ4A393pEv",
  "key18": "53z1L2aUMHxEsZz2pCDcTvvQWDJtbsJCvox7J558E6X3Rb7EauJe8uh5efinmjYymmNL2uouZ1puNHmjnDxVCPys",
  "key19": "51hDLqbpS1wmMYeZu6J2NZbyd9G1U6rBAN4M4fvNYtTWgwTmGkXEGgS24uafua3WxtwQmUFuu3DvMfwKRx1xNK55",
  "key20": "vBYtBquugvvhJPeiZVKf3ekiqVK8JrGNsHAiyvAVoRK4xfhK67nFE9HEAeq4wpaopCaVzGasrGcDu11Hmfw2Jyp",
  "key21": "tpHuxu82eh25EgKYPTpByWWuvYQCSEjrgsMRRzYBJjjh9xEYi7PPTG8FPQjhLtai5wRN8YMbhScHXTbFNAyZrYm",
  "key22": "QxuSi4dmxvRpFvUc7umtVPFwxvi3UnGN448mw4cgAUSUFPm6zF44dEwmtTWHQyq5K7EqYXc7fdBsTtnDyxqFF8g",
  "key23": "4bqrewQBBW6DmVhmQ6RJT1pEnRahW2bwondnLxa6Nk1wQdXthnBrnTiAddLSWk2qJuoyZNTfgux9tGkves1hyChM",
  "key24": "R5QumXZRkoKcYmXsyawJzYAs6TCPFaQYQV5avLngJ5jEE7kU1oxp8GCw1Arvo71N9AHtR929JxMG49Prv88ifLk",
  "key25": "4WX17xcvv4tuGnsXt3N4pqLzviCbftB1YRGoAYKoCQPYiuqagAVYoDazQxgVWwqzZFaUjteWAdSznnXhRFEA6Q7e",
  "key26": "4P4mQvLaN7KGig5dwyxin1yAPEYpagp23bmFdQN8gX5dUNSuz9C92v4jfULkNkTVWQSQNeZCdCqDPSKwQPyCfT4M",
  "key27": "iugUKNUxM3F8KToxD4cXwNkbD2UB7bs3p1DwDSbuc4kd3bKSZZqYxTZBrqL3n2KAsvqN8fJ3hfcku8spFS5PBLN",
  "key28": "3uXarLCXHcCpAWU47xLZ47SVucakREvxszEZFN1WiXKtwuVRM4WAXEwdsZgatvapGfMh9RFK4sBczV4PFNEop6yq",
  "key29": "3Poq84kMDhhBLo4VieETSFTKporS9jbYHNwCntofnZZsYoFFm2EJosdmZ16aiMoSyVJefGio8RvxYWoiZ7h8wgZM",
  "key30": "3gi8axmarRpwa5spW18ben4jWxM8qJ775nrr7Wh3MNt2VaYjGpU4wij9C4FsWzu9A2omUgLk6JNpARVfaG8xWTiW",
  "key31": "4WTXyRssN2n9XoQTHe6WvAw4sErwpDhfMTn6xWN4xqDYDqxfX21WV2G1mHh7x2B7T2vpvkvaVda2ZjkBtbjyc7PV",
  "key32": "4iKmsh1sx8jLVnAG1nf4U3hYcDwNvDo3TLnzkjZW27DNSZpzHFnUuTiZKWy6J5WzKs1mbZQUNDA2ktNKaip2o3gw",
  "key33": "3RXVssF1C59Pv3KQutAzMeEmc1tWgmoNmGJacFmp71MreWg8atxZrbG6JXz7dFSLDfRsU2PZxsRSy5UFoHcpaxgc",
  "key34": "hqDP2sBRrSBp79eVXYMDjWbLuCveyD1ozksP4PnMoXvNRQvEN3KVdkMemxDZ9RGbSqnR95M1XmxLTxRcs35VYDq",
  "key35": "PhRZwVrPWaZiPq7EtjXbmgNQMyR8TLhWwcmfX4JqKBroVVrEtDw4QCds6U9A7YkBCSDocWxxQ1BjKgQ5NQbEyGb",
  "key36": "43DjZujuVyn87w1XKQhhR3T9j8LQadDQpovc9dMoZd99TA1o61Gk3mSm3iNiftBjvoH89FXuEJc4txhySyHEXMdF",
  "key37": "Lk3uUVm6m5YoRXrgcGuppLdh9CGuxTnyR4aDfJXwchgkbf1jPWczESrGtN9mpT8C7qF23UahktSKqA6UJNQgfVP",
  "key38": "43GQtJ1mjhMN4vqiZ8MscqZu29RXAsALjVHtSvhtXA9qk1BjigZ1hLaFdiTvcUCK8uUJcjnTv7y9XhhiHmeeBWzB"
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
