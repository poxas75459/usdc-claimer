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
    "3UoGAMm2ojfmE5R4kvj6bjpJPYbxrW9M2FUcX9EueGhwHLbLXt47eHxMPxhw58dusNo31VnYu4sYWNhdpH8RtPJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mC9f8FkEPdMBfixSYoRQgY5oNQjBR4fEQ4HxacXs3SanDZx644UQmUgkyFerupCsN9MeRuz18kAhTLtLo1NnMyv",
  "key1": "ohSedaEXs4P8VjnqB7z2XkFjy3bZz4M1VnemB6t84duPiVC4DcuDHuiWVH8NxxT2BUyiXtdzr337tDHijkrnm36",
  "key2": "4qxgkz13ytbv9RRKCEeU9tVFYeKmg26pPJDUn1cWcv3SNpKu2vs4uNAQGrLcCiTSi5eidVtzB4rWhCKKatFyKXA",
  "key3": "2psRvnSKK1gEoR9Sv4nmLJX4idRqMamq9CmQV3XApHCu864UpVo2izHCByXfiZyd322SLPViwBMm4pskSmwi5b3p",
  "key4": "53xE2PbKqDsxYCur7hfaGUQ7TmdAXTXuBqJaqFVQvNEzZ9imuXf7m6zxhrnmni1SgNstve1amKJDufb9E2ewFE61",
  "key5": "MCEqC7o7Lyqxibooi94uQt3NUPamBjGZiyNVgTPL2nDVcgRHRdyuCH8H61o1VsZ4UcFmVfojZjARSJiXw7QcxYS",
  "key6": "5pDCGVvG2Nfb9m4juzk4vL3AWfFEPhbqvR4yUKdsgE9FdCkcrd1PdZNcCWWaDH9e76t5FioLKfbda8x78bnvaH9B",
  "key7": "2wWYJes9XvoC5rEDgEaC4VM5NbCnwcUAxT7MeWQoUrW7GG7yNh8tvbbt9PV5R4KZ8Vj2vfHYLXbkaRJbN3dMkuZa",
  "key8": "2kjkQoFSctHiBoAb163C6Y46c3knW1mLGyVtTXx3WW75wGarw8WbDzngN4TMiYR21f2Y49dAjjRPJjLjNp42uaHw",
  "key9": "55HgZmcWE4wonzHrWjpnZD3N7g37F7FSX66VZMmhAfJR2XWCjvyAcDMAoWPbKt8F9LxP8GeX6TXmDW8jTZzN1Sw5",
  "key10": "1cSYrZnpLPLovpZ8wi7Eh4H5ftTgyuR1arv6967u21q8dbXciuLKSffEXWCnq1tkLXiN79oCCNqkSY7meEKB8YY",
  "key11": "3LXTQnVP939DaQ6Tb6RX6vorhDCRCTJByGXqbp6JkKhpe8MuQeX3pwNjFFpmr9v9WjqagYvRVKi3UX1C5VscV3P3",
  "key12": "3mJ75U3GGh5HsEgAXf64kR1mgXUSHah9D4BF7DBvm2U5R8S7Gbx8kVXqpLwhU51V9VUQPaQuprLMp2TXmMKbBcMz",
  "key13": "62LqC9kT58LEG8cMmNGyHMigp64an1n7JBHUU7DbkBeQY1QZgG8NL5NmxZawqzKHjXqLd9XTVVNhuFENaudCYe1w",
  "key14": "5AURCW9YtVUu4NxSLx8yHgZW3suhm3yR82kcHkii1APizCpQkgVpbCpv29LfSrg5pbJeDa1BJfRC7ETnWETHKEqp",
  "key15": "sDZizLy4h5Fk87zjBxa5aLfpMAzucAAcdMaAKFynxG9aca8wTafLpkRaHXSGYue47yG98vY93mMWzZyQJLqRNew",
  "key16": "4mazQjotiTuAscfFhMQY5UUsNvvpGb9uHgYxaA7cx1fj1QQETuz8BLJUadzwSeNAjCJ7vDbWvEN8TE2WwxmpnEGF",
  "key17": "2s1TuAbzTqFr99WP6Wx6b7ept8e66HSVBAqbwQBgnPJwC5dc8WMAYcBQRFeVGDsgYK1dyb61TXnQ1P3uqQ8w9XtE",
  "key18": "62udDorvtRdFvGFHJLLqJPLsm7LBfsyu6W8ym21K7TGYxN3ctVK4h2AHRiqFcqzVopCf6mt8dWmYYAXRRcya6Kf2",
  "key19": "4zj53rjdZxmgugUHj9wKN3CEPJbJB2obo8ceaSn8SdbNFVEsBykYVWEevoEn2aPCazQernBgwgFRuWac4a4qsVpx",
  "key20": "67aMMdbGobPNLaNSgP5CTDeiqDNKcRCQE8AZgViXcCoySTYaKD6UBcCD2pxGuiYM4J7eTL93DSKjtZzSqMPnmbwD",
  "key21": "2aQTvAMVDSZcda3xXNy43F2Xas7E9zpkX1Qgs18KWj2cVGVBb6ecS26pkX3E17SxKEBkS3TfcFoL9PQgDPbCXP87",
  "key22": "3LgrcBhhoMCYFDVJ3hJN9DGzVsNgBRM6idjPtoDLKt4hrk9zidkJyWHtUt2QQesrLuyhX9wckxvefixbeQ24jjyd",
  "key23": "2gdsB9fj14tdFrSVhsRiZzxnKATvFCvbJcJ6kSpbgngT7Aq3tmmcmkioGsfoTKEjdXHJ2apkHEs1J8sdoy3qcLMF",
  "key24": "51vm7hXVHLoUgkrwioJekmgjiSrkbt92WX4vSMcnkgDk8wK9MrxzGNm2e2QsFAcydRJoHUcqrLnFsyChQfYATMP9",
  "key25": "5gh2Fe8PFytq1VY3kJ2doh85jWuEBiKa3qAthV8K5n5cCgNyA35Ruqp1Fu6wBLyNj6KC1dmLsRGg32VVjiBsm4nj",
  "key26": "4t9S74f22z8Z3MHkoJpz9sS1LTqBnnU7Kzy4AFidMW7azRXwHT2rdaQ2FhTF1dGvjRoE5DNzPquPMPURZb7jxJLF",
  "key27": "5KG65uNZUsRkHA8RSvPFpRqS9itunCC93zg9A8xZurmMSubNGTXroHAzQcyuvkv6SrPSPjoFni6rxvhQSzepACNG",
  "key28": "DV8evwSi1HYKcY5U5wCw1CMGwWkaAqoCTdavDf7N3tEnUsyFsLsjL9VgYCi1kJinusBTgERRFCjaEaF96ekNYik",
  "key29": "65kXDrfaNkLQf1FH5C2AvJjy6nM8mRpkYrtqQ7NTqTxEFWD9eQvj59bwdRtN6ukJDZ3MpinJpBZu4dFSQw6NmdeX"
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
