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
    "5Ysw3sfQJRkrNGhrq9B4XvLZuabk5PeKGoGCDvTtNiix4YsMhbRq61TwdukbCfZSRkW8ZsRnWdW1EVH8D7rLwvGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ADUfraSdRwqwiYvfhma2goTSjTq2Xnnj15bUNwTbDykmbANEdKvx6iVWEmQw6YULrPwkPgAMekA86aQaaP3qEsu",
  "key1": "3JYGKyTeu5x6ZGKCJpdtixnpnTwMPKL37JKjCnGfs9uSdsKjWwqvAoLszgANw4DxiAhhur8Y6zbLchnXPq2wVrVR",
  "key2": "61JBk453pkJQBZyUNG9bEs1L4DpbTe8EYyMqjtVqQrk5KCK54D2mEW99wonN1XrXPwLoVxExz9zd5KU669xZtw1k",
  "key3": "5uGdy1qBNLrCup9mMK8XU5sY4nufTY33ATP26WJqpZAnXuZ8qXKBUdeBn6dPoF75h92Xw1GUA48236xwyK2xtrh1",
  "key4": "xwYoqernVU1TUVZPdM9h5UmLcfYjoCRAm5a2XtcKPbM6mb8jr2vSbLSXdTGhVvcpp3K2vHd1DnsAqpoKudfLQ1N",
  "key5": "3WEHSC2R1iC9BpfMx5o8SzaaGwBTpnwznBLjczsfGqo9AXisSr2vj9XFZySZS2imq1y9EPjzip3cwozWXTFrm88v",
  "key6": "4FYPX8DPrqDn7pSVceDs5xRR29hiBunkfkMcPTQ536Hb1H7r86nsEqQrmocUxpBLvjXWXunVVaFxC8a4p7UfRYaX",
  "key7": "5RaYxNLPLDSHAFNRhitwwbQRc33ye24o72x21Nj1iAWAHJDoJzX2cDRvEuu9Lr66wdY2raX6v3EaoAi1VJyu6Yub",
  "key8": "5yA4PERkvHFTiyQRkY7ffjJcsNQoGsv4M5JXH94pt1rLtpEUveCfYJMkoNbfDJUcQ7ukicDkaSaTWamAi74THWeN",
  "key9": "5XZDSUufwfewcaNURq3WoMrwxZc52j6xVRWKF1M6N399oeTi2CneBmJVqrYJn68hjtFxWZ3Nd5MpdXRd6EMUZe1W",
  "key10": "2W18UkbZMA6ToHsh4yX8ZRrtaBqNquZsKqR2cABr8BJyanbPztxqswCEfyg9RcPnGDhjBA9mcbM9QVZxpVYoPQaK",
  "key11": "5c47iHCKtMmDGebmv9nmNzR12U9vc5xtrJViaqiJhZfG7kLM3MLHbH5f1WX8Ao6pE5E9mMMgTXHmArBmvaSpomsX",
  "key12": "4w3Y3xMtsZf3fJYUuwQnNQFdeVvNyuUZ1LS6h33Xo4LnYDVEuAsbhcz7p1sKhHNyy2KAQRQwB7pekva6EEgwYG77",
  "key13": "LBXpgCEotoqahSeBMMo9BiGHi1apzTbTMUZgdhTdtGWqxf4r5XqUrwAR9dLUTyiAshAwhNihsPRwKrz5ESt43Gi",
  "key14": "4emm8qYrtm8Pt3pH5gGcGA75brdCSvZV1MMrtvHtx7JAeVgaGZssMjrCP5JvRpnUku3i5oRzjP8yJmaM1afowktx",
  "key15": "3xvhCUnMX9fErBo11QWw3gyWbUwwzzesso9ku4yS8MyGiMmy9GjmzoCLQaDAqvDe36t7okphSB93YgdNCFxvqREn",
  "key16": "2cE8aAK9JvzRcTXh9o1NsHFeN2wYBfS6GjLtTcg54JbLsrxiS8p6uGwqf5QstnTJ4CzRDfWoTp7B4ERNsHBH568Y",
  "key17": "41cUx3NTjQhhBS3rKPPVrdt26NJi5gWuaNJUYcTVegbXjeym9nET1VJFwvNuw88YRFVtqMjz2DpyZwk4rzWCCYbN",
  "key18": "4dZkUaR2zrRorJLSP5G4Fqg59BgE5yn1QA3HXbs2yCsNzmXS5Zrzq6axguBRVyUVtkaUe6K4hiCzFTYbhNSFFS8j",
  "key19": "3dD2Hfbwm89bLZiFHx3MDeFtRdGNbVHmmhiHZNjVcrUYWbjgJNsxEFu1gDJz1QU5TSwfHBifK2yAn8EgcksXgGT8",
  "key20": "drA29T7DcKtZ5dHNE48sqgcewCXZABubWQ1pw1rrTQi7pdJEdoVnWRyEqRSzomcEyAWRkjaGutYUqusDQi1C9fq",
  "key21": "3NVD83ev4oqWkhMi9bn8gvocYMu9JEJCMySVXC3v3eRBRetkSCKUCQW8d18ti7E9PQ6XQqyJucDeGFeYhva6qu4z",
  "key22": "4FZTah7vtM7eqvNLmruqn3gYF3DpTDW4hKozrrhLiS8YsHSNM9kpAxtdrnavBfWq7PgEXjDk758fKfkX1XZwmCPK",
  "key23": "5LDgEL4CXnNSZFFe95ijE4RD1Ujs2G5ky6vYkCNb3bEDy9NJG3axxMbqXLJ9Gkgbrm9xk6ubEFu3WbRG7AuvT4hG",
  "key24": "3JoKjrGQdBUucGRwM6k6y4XDj19hK5zkiAZpdLW7xCg5eyqwhENTENZKZCd9ZpwFEKdxBJYzoDRsGorxD3RCDmH8",
  "key25": "3GxgDvB1dZbP83PVuEc5agkaycRsPausrzKANeCAHaoHbmMoF7EKTQTcswRSEWNVSSPCVpjPS7haUM6HbuHcNa3j",
  "key26": "4VGAR2uct8s2uHnL7cgHJho3wWj3FAJWogbPy5qCPQs4wkg6mZE6BWSx24EPME4grMEn9E265tJhdpDYR4Rs3BSX",
  "key27": "4LH1hDLHcSbaFZYcZiyHZcwT46CM3QKuseSnaCdx23VdJcF8twaYLmMDw9BAeymRHtNkTpovMiHD9JsChraUdoeA",
  "key28": "4X2rS5w45UYKy2ko73zyN5ya6Zugd22Qtyh3ygJVqHvwm8Jxs8E484uw8Q9TJwAB4tznmrdoyrBwc79LKCju8cqX",
  "key29": "2wJiuBPP9u6AnTghqCVLGttNHYboZ4vVUezYpvpoppvTVnW63qqyF1Wuhh1j7U7nNSq37zaX8wCgnA1Wee8Ngvmt",
  "key30": "xw8FXtNm99isfURSYWEg5ojPvMD5N6La528mk157sR4wSZjpfeESrDDn1sP24q3BFcjfZ4jbSeWCreqsAPtmTah",
  "key31": "NkGvrDw5rkijY3mKmBsmsd7upJJsT6xcmaYv2EZb2cUHtvWS5hVZsDZ6ie8y9Jg6x5CBqsdeEWV4Fq6oQzq2Dyq",
  "key32": "DG4h8e3j3a9jB5LpT5rp2pJnAr6gzYhSY2Dg2JMaEEMv3mKQUwEYCee4XNvDUDeHv1kmpvqVjmGXDXnEtooB8aU",
  "key33": "3fMHpRfiwvkPn4HQMKHdiUMEVRkN2sYZfi6MS7XeMshvAS8b5edhSxnp56i8mc63jD1Fhfwistgn8VRi6Ht7Pbgo",
  "key34": "ijDA6VPECZMXGkJwRVrkSjPj4FSYhR4YWgsSVBQBS1W1xFeUJ9TEH5AinqzF7H6YLw6ihShLohMbvgYYzEuJPiH",
  "key35": "3NNhPUN58GYB1HwvoriPsf88W5nCdK9gCtx41GKoicrtdBzm6SumKNLat7Tn8Xm5x7smgszdc2qzwcbVKhtAoahC"
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
