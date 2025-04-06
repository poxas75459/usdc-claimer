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
    "3HUat4q4UPqmXA9LbHDnBPRyxyGbKS237grYG79ZB8DgmCXynVKGJk2ZynZZGVCgQxFr7xeQFBYSRDJ1Tr48c4S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BrANpn2Ny1cFARiomx2dPfZcMaHgSqF4nPbDTB8hcLsG2uayya2DakYvMTQMLrhKJ4zgwstxrXyL53cX8FnBHmX",
  "key1": "35n9MYazHDQAZCwPWRVSRpKqCPuWTkWf5TtPyFnryKiPWEK1HxvrF6EtscwGRYVAVzdKVxBg6pxhhNyqb2xKyART",
  "key2": "5iEHcXfdu34yHNSMDomMvBHrxX8UAQcEiVdpCppLy8BZqGQVvyfxXt6bfrNWYDc4qiKomNnqBEVVnPgUyfSEot6M",
  "key3": "5QYW3bJ2gXyh5L8Y3m5cfSsJWPTSsaZaPqdNTAY2a1U8HyZTvTujv62B5rrNuVXPhB5apVDhqDf8Qkiy1AHnjcfH",
  "key4": "3LPgwBvtbQ5fJcxVpz99qkrBD3NFUky1DtcPK8ponEKKgMTG9jkGwQWQazoU4CemSpAA3kFfueNsQVQsjrEsjMun",
  "key5": "4JVMTHP8mZC3ew618Q1TMyttyHHNzEkMts3fzKp4LkctmGbBn8fPasn79KsUTigx46ZEX8y2v6eW83s7Jvnsb7E6",
  "key6": "4B4Sk1pSjwHLTwxmxHsJ9pW4kgjpWV29ayfhfNJ9ESkmHWRWqsEz5MVNCkatNR9LotZuswR2sLfo4hoVSS64d3fP",
  "key7": "5LFq182d4YFWYfvPCEREWgKW9uqBdvz51TAZyYcD6trChBzBqXPdfkhAjvNwZ685pi9ZtNXShEBA7icyZZTv6nvY",
  "key8": "3SUEr6baxxLCowazsdXoGAo62ZkyQWshr9bDqsQUNgKtv4kpdNu577M2XRcQGDYybuMAUaEmD8b2yjMoHKQRsDpQ",
  "key9": "5kSNL6wKYWu8koNnkUUPWMsABBqSrh5aDSdRFn27HWG1KQnQekfKuCZx1HuDiyK4Pe9HEA3ADH7vAAvdiMgUy9jN",
  "key10": "2ZHEKuNvK6WQaD7xVjPRJ2ujHNKgyPH96cHD92ckPSGBq5fjxscjRk4YPiGZVpcjhrvBjH4uDRH7rXpCa1VoRC1k",
  "key11": "4o3VY9tU6Qi8KxkpK48AY7asSUvga687g6hMNSRo7UsBYoaahCL3qZG7dcHE9AUTYPxU6Y1PW3HhQwK4hjrtHZDX",
  "key12": "4ieuxXdqdJoXYcbUNhcg39nc1Wg1eRbBHjy4KvzF417bQbzjp5p8HNT3me5XEbvQQZtuSfsTC3DupAGWPVKRahRe",
  "key13": "254761MGafB6ijMX9BiwQQ4QwkBJ7m9YhHQZA8XCCZCnyQEbYX5aLzk6uRDU2uyJPMNSK8sNcJbhiQvdpwrYtXC7",
  "key14": "4MqCaJS2c4opFDSvFtyVHuLyqg3Wiu4MdhrAEQLAyX3GWJT1k5buSFpsRQEWJ7rkX898KFhAwnnbMB2d6Y7hhnT1",
  "key15": "5BE4KAA1QVVuwWErPL3hoWv9U1QPvgj2LRdysiWBj4wgF3aX8wy4gwTHh1bGZWF85L9AGEU17D1z2e8ng5aU59rU",
  "key16": "MW66b8jB7Y62piTEMD4d4PS6UXon3SLNdLcKR2h6pCYXDatV6ZC6ABjGXrbm22NPRc6AcUC962smtxhaV114byH",
  "key17": "5CXYyzwE7WcUHjzkPdoaLCHdhmjKaqS8Ls1anwVG5Z5S1baL3JMuTu2LBto96jP84UhDxTAFkf9FHN3zkEgtskGr",
  "key18": "2CBtbuXJpypYi9JYyiaPNDvppLhmvL8mVXTPCpoRC1qq9YJpeFLM7LjkRoEdYQjRjWmetCTJZZGh6nGt4nkNGrHV",
  "key19": "4XZ4pgecC67puwaS7DyUZ8dfUzC7oGYr6c4ybFcsVKQdDp21dLSNuytpkwdswjPRx4ibdfRTTLAnbtoR3UPLGzeW",
  "key20": "3hh9Ts3GzW6tSimh73v2maVkfegTaXwu3CcZGRrX2FV8QLMjozaZmXFFdpFxtUTwJvKD8io7J7D4iqXjwEdskF1d",
  "key21": "54hsWzNSELJWeoFLfXesZcnzMKqs3ELyV73kQonDPQdnsyqjyMcEfE4yxVi3J3UAVJGKepmFKoXkB1Gau7Af74hR",
  "key22": "33XP26uUDmAYMGCQzAkD1BDmYdoC8YCPmBux2Xb9t6Uv5iswjV1xxnZyUxtvCL3jYCackj8ga2QxRPoufS14B7ZJ",
  "key23": "uxV8JRFNHiMnc63zGY75CKTxerFQuFCyJu7euMmicDkSQLctWod8UeQoufpBx9wzV5mUMUgJ6TsRCcZMuSJtEGp",
  "key24": "2Pr9KYioK9wReawoFLiaGiEP1vZEYHAkAaJMhyXGijVwxYRuZ47qQrdggd1TAmBJeMfXrPrR5cVeNfv4begh3swz",
  "key25": "4T7HRB7J3J7LX2zom9NALLLL1wpSj98y6x4JmLMvDF3ShtXsdgjvftFxZ3tQuSeBmD9X6Xums7RJizZ2WDVPEsQG",
  "key26": "2jRxfj6mTW34jzAUhrnqhXAXxum6M1RbkmkVVf2sFAoLXWcNhm4XXBxNxwYrAHhvAsLcKxwvYNMpAgyT3oqqxfGF",
  "key27": "5hrgB4gbUvoeVdAkUhrCKJ48GfjS77etjBbzTvpUr4RUtnDDAqdj9RarSyPfnvwdYVkJzRpSiaeswfP3NzYH668f",
  "key28": "3b2NgQwq2zcefyYqcdgg3cfuqfQGcpRE4k7xeiaD5uHFEzsGTcod2MhrL4sSmFLR3G1i7un6spNGopyZJwSdFvjB",
  "key29": "91tgV5L9pf7sq4fbT3xcuYSB7WHwFvu9oAhSNfKHD3UFHtkRpNC3BWuW7mQ1dxUeHUQfSRKgESgcco7o9wam1q7",
  "key30": "3WcyvG51MHWjonzHnkSebZMCdcbSa13zLgAZTmeQ4mUQehdzbbSkRdyxDXSfzmRX4uVJp6SMhNCEvd1HUPTwmLCd"
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
