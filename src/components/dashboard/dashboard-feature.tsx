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
    "4K5Hn9Fpqy3MqbVGVbTfo7beaXcwRLmLncaEezaEnB8UmWFizTWi9V6pBPNbmfrQfXtFYfKrNSdPCWtUpeDbXSyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51W9eqHVM5BgAd2rxx24BF4ki3xJoh1dok75thuJHrQMWajrVMACboXBdxChimCC5pNVG7LNEy9wZvBrqPfqEjVn",
  "key1": "4pXYcLoh91RN2EM2SsM1yCgjsd6j1VMHb3ks75E4pyBFYMKfApuBjTjWJ67WNYsAXJWvChokuUdycekbfge2GBmZ",
  "key2": "YrjLVC7gcTGdBXZST5WSUXsErQy1eLUKS5VCCVBABjtpBXCtABnt8tWUJXiBmq2EYyqhu3oDDKFyMKzKkdNP93i",
  "key3": "frvjJftJTQY5RSNd3GswZY5pzUkZguBWcEhLPU6L6ooioPHJbqBCPaNWBrjcgHDadfHiTiH26gG1Hzg7e68YqCm",
  "key4": "2sSy1RVNNz2t7Nq4jpsufhKJNF4SN1x3JPk1vQqDcjSs3c5acN8T3jMzVcKSLTwGVftoGmSLtuwGoD7RHQqGKpML",
  "key5": "23D9bx6viTjwCzYgQFKs2ktyruhZozNj87Jc4Nnxe2i9Ash3scLo1BxvVXPeA6kXNz8Si7mya8bmh3MkEf87pPAF",
  "key6": "WNd32iTaDijAYYj9Zc81ZQPGqYFiZgtoyVLvPQFa87uynYEg8nTvii3tKd3RQZ3cimJyffDx1o4fv1pqz91kmwQ",
  "key7": "3suPojLTs1XHkaHS8BeG4HtqmcwAS4dK6oceVyAwJRF11hgNgZjj9HmDsGsD8YZeKetFBvk3APDGPhoEDM9PhBXx",
  "key8": "3tZgYfYAfndkZbvKuncPd4Pa9ByZKUSxqMwx41oCFMJd7gk8LXD11aF2aDe8UeEmHFu585VS6drhckkZkW8LHTgP",
  "key9": "5Hi3VqmRinVPyrzvQFLfFy6rwNMGgJBk3RUCJcy3RQq7WoJUjTWEuPTY8EtZKNnAfnu9sJZCEnEqxj2VbKsYnL4p",
  "key10": "4DEbjAJkbF6AcVCsyE1E27zUJ7xi53HB4q9rVvUQDobrakRTatHaeViojiYN3nx898ixtH9Y4xyD9umbvvC6G11T",
  "key11": "ZGrgc1SqDDDnd9AT41CNd95Yf8JZBL1kGGQxdCpNZtyoRDWMybFRTcDiDCU3o3LiKuiBk9FtGtEuiJfdaViY6Sw",
  "key12": "2NEFUemJe5WC1SQiBk6wMJHtfCdhmXZQcGUfvpEvWNc8uRHgyRKTR9ryCgyesKs6txqcWZyZ9g1xVdjz6YzPMq2d",
  "key13": "5D9HYJ3nvxVwYHEJuxAzRz1KD2AaTzz1SGoSwvY9SNXfW9FLVF59wQEYSrBFFgS4AMUoUboXhS3rQ6ZF3has2hED",
  "key14": "3XWBwgRSdT4XipU2qhCv8eGaRymcFU1GG6KQqpMx5oTztCm8C6tGBbxHPLzR4LYSFYhYkxsUCLENzouxh2d1WTKs",
  "key15": "37dXr7NvjQpasRRYiAhEE2ALS3iYZndQwbKk7jFXb1mtejuXHFfPjCqTxhTM8zzKARFrRfT1qGzhUmYEhmeow8jF",
  "key16": "2oHAqhkAgURuct6wxhuh9v3mTzzU6tMLrNcGZGLo4PAyg7pjXk9ceuUX7kD9NNepuQLDNABgPSEd2WCcHt5AvUSd",
  "key17": "4wYY2C8aStzE6GMNS9MZGpt6WCww51Ay3V3UvcGBcniNHgA5GKmMCbDsS4Cj35tZWo2eJpYEfd7w7ipN567982sw",
  "key18": "5sUnXw366kjzJSZ3HvNJYMazXXPJ5TE7kHp2GJkpMUMhxCMSn4Z6H8JT6t5L4ZxrQ3w6ExDjR18zZSzDWqceTUJP",
  "key19": "3BPHHGYMPHP35CGuc6ayka3h1g6H5qRU5hAif6FXTuG4KQbZ49P1x6mLG6Un2B9vPijpLMqsPByxBe8mPegnUYGW",
  "key20": "4nirGZjyeL1xFqqd4evaBj5vp72HTnLTfr4nHFEZuUqavr1FcbB2xSPtFdg6YdSAs6toht7SdKrof6SfGPnn9ZNC",
  "key21": "3nSdFJ8eQB8GocjceyZiYB38ZuDDK8XMMEggqKwHoRaHB5hcmk7b2cn7ReVMsDyf6Kh1GZ4wRH4DgTXDkY5Fqhg8",
  "key22": "52tt6G3wpcGr1e1yrPNsr5fMXtTjmLSt6iY9eRngvZiiVzYazw4wjTdhfR4kBA8xKqjU7ye8FxPmEk5vqE9GjiMp",
  "key23": "kxYFUGf7yTsYgHWVnsfnFiSrRjhmubBMQPgUSFSCxJaJF5jXA1FFVeK1eaE9aHrNC6NC1FUG98RqAftoehMBzdf",
  "key24": "5eJVEGam9e5bW7deXKQzPAuysK4yE9Vh3vN1KUVuPKNqUezZY7EF33q19UfR2NZrMC7J8bR5vh1jcJau5x9TKwvA",
  "key25": "3LDXFwGhpQDBTYX6eMgbcRLwo4hzW1Gv36UuMUELBTkffpfsP4AzhQcmBCUG3i91zUogDo2hejYkiZ4suhLdy6Mf",
  "key26": "Mzw2GLWZcu4Ad659rKyGRXir6JzPaX9nPZmTm9CaQCfrkUmdjHotpGUN7jKALYbAJ69Z1eNvewXxMAvqdaQXu3t",
  "key27": "4qzT5ENKiw4Hki3WXjTa8nsk8B9uLhQ2dgbGuyyqdP73MDJ9b5ErrVYarnad4w7qDoSFfoNbPqJtTREwTmQbYkYR",
  "key28": "2fhYadUmTLCU4qxNBiv2hgyFniRkoQAkzrPVqTtaDLa9uCACfnrDP9i5VQ7hXci4Q6JogdsUyFhtRQPgoYNeTSRx",
  "key29": "2HtB1pinmDh9yQSB1B9UXkci1LY8GYwC3ipuzfaKUPk2Z8AgwzHdxQXj2JcYd8SZuAsKeK3NPdbS7WMKeQANtCz2",
  "key30": "2pLCMJD7i22sAvXg7jL3yCmyQoUvcucowMDwvJtMgu8enr2yTcCeSDnyGxe5CVmawd2SPwkhXDEwfw77NaMUQkCf"
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
