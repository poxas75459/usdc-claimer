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
    "5VSVtvkyP1eBQMorYz4QJ72KqrtSWYZuj3PBAXFTt4Ymbs4JbsGLAtYJB2p8JQ3mFmib69EC2uR4c4Us9yN4XqSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aRB2CNVCADP6QzUxr12oQrHUfi1wAp7Lv5wg24Crk8v8eTjiPuG5KfG7aBXUkKiLay2RUBKbsxsLqY9dbLcaGXH",
  "key1": "4sdVHLeC5CcTK9pP8ghp9TV1VyseJ5CD9veLTgLd6qETYAZ2ChRwrGW9x6bi7QBJPWq7JXNst915Xyo9cWNdytHk",
  "key2": "5awVp8NTTywzZdb38GjjqAWnHmpkGAYkGnMg3izJ5XyjU5SEwyon2AHPTip2Wexoqh4sK5KP25n6mgxWzVwfq6ud",
  "key3": "4vcfqJTiYtAPbd1EmomNqHvWRqYxCxbDd1nzGUN16tYP9Cbp4zMiDX7x7MQL16mYv2LShsPxfwtsuF1ZswT76UBd",
  "key4": "5GwJwG2yfzD4Wgi65nPe28m88q9P2CpNmZ7zCBdFjWpFYCmiv5AD2byo3Nf8pq5R9Untxsm3f1ew8GmdFD4nbXDb",
  "key5": "2iPLwW9sfnQZGe4Ln7oEKnPsSpDPrehfwJTWKmuk5pWXgsjdXpfZNxLAGSCiMHWmeobJTrV3Ncgebw7qf5DvpZ9Q",
  "key6": "2pyhyqsbqq5bipu2WwZAUpWzxEQGWnh14y82MZ1FXLrPhAV2N7J2cU1J24qeRMRV5th8JNQvYWqyXCzSuekMKKRR",
  "key7": "2hoKYvSFT94szX4VmPNg1rniPSAxRCcBLh5Y6oALff2sKuN4rTnXKzC3hNNWKpYeYYkUexsPzSprHgNLV9bfEr68",
  "key8": "4Pq53nSS8xznRbk9a1tKW9Y3vZMNv3VjHcbiZaJNWMTkP7dJEcDgQoUpumA79HQQbe6s2LUd9TWcWjZPJZJgYD3Z",
  "key9": "412D2fRxcb9hjsc3CmwyXWksKuFLF5A2UiqM4ZpHK2aw9pYsfzM7zUAoLi3SpadfqAz1FvtbZ5Yj2KGvMWHj8rQh",
  "key10": "37ABerYZ8Zy5dFsyGXVo4VRALHp1msMFcALnBuvuf4mCb9fdtckPYF9j9YbTjcZ4MMTEJi1gNdTaN3Na7sg3YXpK",
  "key11": "1iBrADtuVPSjPFbXRkjKq8sDawVkLny2A71aYm1eRVbzipj7JYTj1NkvcPFRsyGUwFB5EcBv7vSue4CxMfNEac2",
  "key12": "3Yo5V3jpxZ9mcZ6hX3dBYDZmvV3srXcg6H5FuEtNEkF4rTfgCSDX17UXTTxB6RBpewmZ137AvG3ZS6VcFa5KNVw9",
  "key13": "2Zato1M31DkuyiegC48CbGJSFBa2WTgW9a2xT6ntgzTsx7YMzSdceuR9aThqDW6mvZWExNULvhfqQoyevSkadJqX",
  "key14": "RSGjdfxLwigUfZmTwj7tn6gFr9VZeaW279fjnvBgj7cUQaq9vT92Yv9JRgWijKRXUafvqr9itMVPzbtgF3jPwmk",
  "key15": "XWyA9pKZXQTCAFZucpjLrVbmxk2UBy4DS1CKSiL35Sc5CiBbALdQMgsySyTj3kaQNmZJRNST5pNGmisP7FU2GzB",
  "key16": "4BBRKwKntGrCcyhnGoKRhcj4DcVoqCLrZPH4HuzxbUQX9dpi8vJ6hpWZc31zELZfrUnCU8Po8fNTXWcVKjUjHr7E",
  "key17": "64Z6Z2Cf51zCGx6VMqrb6nU7i2ocxahQmF92tGc2636huETNzZyyHtKAMF31cvpFesxzN2GCi9oT12VcngQKcKLi",
  "key18": "3Tpqa5mPvPwAqQNrJ8XpReJkSGW3oZDMCHx3WDGuHwC28xZVHNwMkZmN4XdaCVNur4rBcZRjezmYwPrq56SyJMZ5",
  "key19": "5zqMKyiKE9V82i8roMaJ3dZxCqEvJGnbQdz5eJdsfKdJVqcoSu4K9hSekXN8HtXpt8whNwfcgNVMHHJ2geeeBsaP",
  "key20": "4ePNUBFCX3a5EoXWEYperq6KCpP6saLYgEEZUpo2JVRZXsZ2cSeuNsx5QFNUMpthH5PWBEP8mYpbyAkotB9zjKxg",
  "key21": "2JsDNLnHifAn1p5AjhctgdHFMRTJEyieoTJE9A3bgFYHafVzmcbprjSshC23z6J58baaUkS3DGzoFaTY18En7tbY",
  "key22": "2iXVjUgDdzaHNTjnpmwZ1SzKtYw4tXSnrGVGMoBkyDhXxBJfBid3Tz9V2zh6J1FVQ7cras43pgJ1EeH58HZMTvko",
  "key23": "3VYZK5BeGaVHAzuxNwmjaJ9MygHkFAtDw2rUZG7adUQ418LTN2F1iw1qhF9gp9nikTVBJ9NSvDS3A5Vawhu8JWYw",
  "key24": "2pkXxmdAKNvkNQhABEPsqgYKNsKqnyZMD5c2QmYQY2DCqXMSTu2oPhnCTStueoCxY8nC8Z674FtHaAHCTwbqrQTZ",
  "key25": "2Dt75Q7jDk9tWVVyVR2wQq6yzEw6aWkWGSQXJMYVhznAgg5K4HwrcqpaE3pJyvPB7MsP7ruJJ6WGdkEGKcL99Ba4",
  "key26": "5trGibeuVitFVoxtKptsChCuVjTkuDBtTRRMgyKPp5wC9weXSVRR4JK4RHKPTKRb1s6j5BamkJwBqyixnSwmMFpB",
  "key27": "5QAdcQhgusYAPjqMQJT7JN32Y1LsNVQJ3nfRwx1PAPyABnTgzrdwezywkTVLQCDiFR2ufyGAoGErHxuoWcXRL1Li",
  "key28": "63eTMkAYgwjZhKsidDcsW1MZB95mGqYAg34ax22aKcR5LnbiXas2m4NwvdFKgc6efd1Lpmy3y4yTqdk1GQLqj7Lm",
  "key29": "5KfZPKqVcKWnNzt9aBLFkcht6vAnR7FuFw5WxdEyy9QwYLNgy7jsHewZeJyYHBXzn5ZkvufeUmimBBE8ZpDSyPov",
  "key30": "4JeyQzjWNkP3XakyfwyBGpSjC1Lc4wDiG176wqrNFj36K3c3Rt6hCsEHMvap6A5KFyPvP67uc72nj82YMd9sVTbd",
  "key31": "272sE6LZSfQ6apcxY11uHAs1aaS6c7uEzPxB9ymobtGjP99kRuiLYrHBrHkN1EVCaZcX3V2qY7DjL3xs3oa16YJZ",
  "key32": "5xfAjfppVHPKqYJ5kGn6FM2Phy4caoWaDc26WCweJAZBzbJTZD8m6b7SdFQpHWdnAArwYxnUfUSbwCHB47zhQ84Q",
  "key33": "2fVrj986vFRFyuzDY528mKTnotAd5uW6eRChRhz46q8niGfwa9FysotKU1JVXy2w9RfAyr9RddadVEST4gfQk4nW",
  "key34": "4WrexDSfJeU99zhazv7Gi1bUrcCgeNxWBHgVcCFKKJPjgGT8PWwV16SjN98TyFNZaKiVqcvmRQE7D5eGYMjbGpsp"
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
