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
    "5ZVMFEPRRt57e1hZGWdiySwJNdyFFVYiJMpKMiaz4vJdRWjAVeNLhYSwp5dMieomBesQvPb8EdxzhAgoa1JAFg7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PrsajpgQsPG1oL6uQbm8Wv182RuQxzy1Q2ZyitwxvpBYJ5q3qsF81XcCMFyWNrgcGLSDeGeopW1bnFSxFREQ4fh",
  "key1": "2jyv1bHe6XA46ytNh1oC3ZJbKCopvUoihrNjTyp1qB2BSVRk2qyqTNY44cFF7uyYRBstytUgbineWzftCv9V6Up1",
  "key2": "om9hYz1BSBqBW3fFggDvMYvin14Eeye62tew1jXK9JyTyvz1BG34wLEmZQ1Zt6bA2a7ogQruBaoRrBBKJZhAsXx",
  "key3": "3kEUUQyBPtjK7tnwrvo8gLTdpiBgCih6NrEcRauWcBjovSSRM3R4SXa43517mf9MimZ4oCy8YHPXfDqMnC9i7C6H",
  "key4": "3erUrTXodBDZ1CRt4SzKFXJNYvQyAB5CM5EPoZMdRziWMJGroXZti1u5ajfnQCwZMAUPTecEfqYt7kBfxK3ugyr8",
  "key5": "4iAYfCBDMppmDNCm8tAU1QrXauFcCreRKxSjwx8ExzqDZBqPSC1uZv3vAqpcK9QSdqVa2siwrEA3LAbAXnen6NwD",
  "key6": "VB83grSePixHB2nsiT2zC68etAQREFakdzaHqLoC6Faz3YAzi3CV8g8e7HVkvZv3GAyzFEa1f74tsnbbgktqFYy",
  "key7": "eg3dkisyaGwLM7wBgFfjmvyyv122W8VoH3SmViYhyuivuXPAtfF33SAbP5QDiwiUh4wBrJppMff6giSuBYycb7i",
  "key8": "5udqEdk3f2xxBYCq2h4aSNV1cTJ5LGxnkzPFQVYgrHdeYqUcaX1KTwBmGC5uSmHmJNUAfb7RrsKJ1xYrp8bYaSgb",
  "key9": "2qA7So6YEAydD8SnTsuzRfbMyc1csVBHwEuB8TRwdYpqqmPVgCGni8qdGLGDfZcPQ73CpYmbax7Yx5WoJKRez1pp",
  "key10": "2fTXtouBJk8cq6oZQqAuGr6KXNXosjFBy5P1PWEqQr6bD55cMeZqvkYd8Hy5GsE942tCURV4m5FPkdWLnmbaLGLi",
  "key11": "3nNi1hcDbuRhMwiD3u8SkVTK9rnkJcFDSgkbAi2XVPE5cyTq9B2U21ktZkb1dAQMRGXZh3Zyin1sLiA6gjthosUd",
  "key12": "3qrB1wvDXjzB4FZ3jh82LEsvn61skv8xD9H6G7mEftwSBxc4nkyXmPjrGRRcXUPTmnopv7EroombCyj15RKccw7a",
  "key13": "5p5CwqH63rwNAjFzdCcc3QLbCAL7HzmbNAoXujKaRpnP9Tswgs7ccHEgFtCDXkkjd19sseCa3jRnnedudDqcr61Q",
  "key14": "ESvDT1D7nffzmUqBcKjwdNWRkf2cGW42iynhZF3CwnxLBzcvkwL35TkqRniS7iLuq2KwPKPBwJCMFJUGgxDvDYm",
  "key15": "WXSawWUwkm33p8fkDaFWDDHHNSJWtrNokrxavSTB7qdY2YJuN25F3JqGCb5awbNkX5K8p2hniEt3B3qFxsskWqx",
  "key16": "4bAZd4mekhbebkBT7XniZqN6qFMgSWFafDEjtvY5eKKetRX1AB5pC2vZHrXsXNfAe681EbriYU6qSK1fVqkgWJWo",
  "key17": "2Ww5AC9LEAdDFuZ1eyH85jUAafA7Ao1oLY6m8uKzXEuQioeZubz7yERXyAz87VPRfSAesVUknxGCDUAEy7zEGYjC",
  "key18": "4ftydz4vL6zzPYxSzcvzRFN5SXXWpu6HLEywarUfRrhYdzCM9gt1poJwNncuzeUAQ1scPTegSPeTb4tTcsKj7QEZ",
  "key19": "WvEpVrYMjQAK1hWdfNaJiEqyQgsLbcbtrpw7gFFGT9nLF8Qr3aJm7kfzhpU3mtsbLFXgRSigqsw6VP31WUSFXZ9",
  "key20": "45x1AhRkoHkCkvxTcBwtP8nsHwDEsaWb52Kwe3f2DBFhG4dZEW4FYqeT5QgUfkaLvWNNHVeimSsVA1dVvLg4bGcn",
  "key21": "41L4LWiC5XJBPuX8M25PWoMtL87nRfcxhHGWP4qsYCnqnXDB5yia1pn6i4B1BRA6tXpE1x3wdP1FZ5u3SHQSoN2A",
  "key22": "37eQCqNbUPPjjH5bDEKAzMtAVySFvmmTC2pQJbsiX4Vm26Q5r5Yq31eWTT9VtPppmQ6mN8aNikTbjeAv15rGoqVM",
  "key23": "4omF6Ku7aeer2bJ4kHmAxWjk3YV7ZHD4UDMrcXUjfm4rmckVVF3HRivWdJqa5Nkre9hG4EsifcF4ffPGjpetfrWb",
  "key24": "WDbw3yD9ckEo6ftRQJCxtaWCNBPuyHN4zZTmARQD8FjSgZ7mA3Lhaif8yGLLsSKi4WhfsVD7oF8hSuNt7RY3WB5",
  "key25": "27wrmuNxKA4XDzC8RkZ2paTjKooYBjzt7M45bjHukFnYAHmZwAd7K88vuPbGiEUgWjWdwvEhBztMCCiXN5wMDDei",
  "key26": "4bLbUZEt68gcWVkkjXGC8eVPfAE3rLq1fPW1UVywYjU36gCX4k9TwwpLWv3Sf12typTkY1DNC53D3XyUrYYXqfSv",
  "key27": "3bWmgtqJsw3aGDqL44k8MfHiVTXBzfFp5Ju4nTjnWkMTC1ufNJY3Aas99v5XGrFE27xYwrvpDpWEmAHCCsVzELx5",
  "key28": "66HxfHLv8Yc9scm1pR5MQS845MiskGP6rzTrSdAkZTFWuTqpB25d2Jt11LC9p5WDfAT6b5rKB1BhYuycWCy7d7k6",
  "key29": "24PCffDDZoqzH55T5GQXgMEhTH6ArpufZrsNia3ArwCfb6PgH6uQS3adaSPoP83TTRL2JJwNTBW5kWps997g7Ynf",
  "key30": "3snK4Te6jXyeCJf6bXeGBNtRPghb7Lp8rczDs7aNgGhXBWbKbKE3adAGJQ4McaUwHwMMp9xAZFKWrmHRP1CNxDma",
  "key31": "5SvGJ8fu7B4AWM7UCMDY4iVw1gih8wBBx9AZ1hkhgL69Koey4cu57YpZ4ZJir9EnmP8hpRghxWpnS3ae13h9hwd9",
  "key32": "3uRtzMhmRP9BkPSw6RrWHP91VpExHdA8VPGrwy7kLsqq9VMoGNTrnxohVtw2FFDw1PaJ3FF7xjxyVGF86s38A5yZ",
  "key33": "5MGy44fjBV2QFiCAczVSFXJCCAnWvYRS944nDNN9QB1L7jVCMf1vjEJM5RQCgVfr9r4dzDfSiNDYoy8fcVHsk617",
  "key34": "5L9rewMGhtKXVTe3YZAy8C6nyZZLAHaZ4WHw7SN9X12eXikt1rL5GwCuDGW8QaTrFFAi24kooYEoHchGyQKK7gXy",
  "key35": "A3BNRHpkJXuaUvuwn2sRqeBM5rAmwMMPFn1hkKaudKybaLrPwzcpPU46zpfSCgw7eyQFLkk1pHhgdeegJaDdyHT",
  "key36": "25bgYhxVU3Ag9EH49mhL42hWiu33tVJ5C4jMxJyZc3fxoWqG5Ab1QnWzBwjpa2zbybbRqVRfXc2sHzkbyZAtmjCB",
  "key37": "5eny5KAxfDcWcqfXC3JyUh92Z4pQNChJDDJMUPkzAKseXNRTR5fgrpgAJsVs26VFdikN5973offnUypbmYPhCNgb",
  "key38": "KvtnxfhrozxaHDoM3KE7RgW6tS5hWGr7LvXVQVD9iWJe74qpfjphDnMaNwsYzEYvcssNkRnje6U2GCjLrKNVrPQ",
  "key39": "2J8uYKSwM8tuEt4SXcBCBFndYPZZuXj4YqL65RByLeVnkTxwAnjN7gL2aNQNQGBSFjfrEEdZ2E3fQr5j9E9Yy63u",
  "key40": "MVsNsTY2nnGS74Mw62NSy9YJZxQmiVdh2JCHDY9ZhA5apwpmf1KFjk8Td3nNDgUKkCAt9gCJbSqGG9HpjQFUNsh"
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
