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
    "5MukSs8YnKrBxbCZXvpQnMVYic9bYK9siobLhgKvebF2yz4xopaBWHeMhxRVx6vNkMjdRXcAjZbqWe9ewjp1gbTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hhvHYXfJe3MTYcd24aGTgUZexyNEr33cUoVmrGjQua5YLXhD3RjPrB91w4ifMMogqEz1dg4EZ22TU6b3FqWjuGk",
  "key1": "5CNtiiC5Xayp8WE9o1ERPysMAyHMxzAVDgYf6buFsFwXnYGpizxAsYoTHiua2jx1zDSQfJC3e56Mobi6Tb4b2tXg",
  "key2": "2MFro1xk7aq7vKSifpyi1rRimyFH1r4iDaJw476ZzNvmC648cJqkTfqVrCSwD78q8MUaYM69L8TKWx1S6LgAxsg4",
  "key3": "4xKDPtEjXzqrRs95XgFezZ4SAfZLVY9EuCiqzwpcUSJPHCpcyisxnRHfmzxkWTX559xiAUqP5bo2WxBrdMuDvxhF",
  "key4": "2R91if23NbkcKPeC68gcWRvbUXRYdPeH2C2sNcn4yK55qF9aA9wc7aKtLVep746bue4dZNrgk5vCbVxkkiNbqyTq",
  "key5": "2MN4XsE8CFfbGUaUqixNf51jLMFdZBCMWFtk6AhVhk24SZHrMjN9CMPDdPCGWn43vKKbcqvE7ynJkcL7mGGsVZex",
  "key6": "4cQF8WWuAQ138VDn2Cdz6wcheAxnKpAa7Zmwqtn3RyBDVMTHcmFG97pXwMze1amx7G3XpN6A7gh3rx67RMPCss6X",
  "key7": "2ukycf81REzHWozZhwe4tvaQdGEQ737HJWjSsz7gdkyfCQvXzwLxXDXmy1L7Dt5n21Habr26FZSLmV8AHuWbx8qX",
  "key8": "eYEFFL88AxhZboq1MuyEzmjQggExiSxDFHocdZMo4QcVPJRTjz7FpuCrBSPmWoC5ykhEKZs9RBubVLFkqTLfSaK",
  "key9": "5K3tpLhzZzvooJAUohaeH3VpDXpBuVYZoXeCPKBtvKyxSTJBmedhYGLNahEkpA5wTsHNjJXo3a1FZWxmURoDBsgs",
  "key10": "471VoqCPbKAfDNBnnm2FUqyUCgnVH899X7W7Qfq3msjDN5u1LShkKeyne7jYGo6g69iJ642h3CWqTfk48LhpxmDh",
  "key11": "3BdXTGhhcDz8mTMqWWsUabKR1QSwZDPQjm6iLPdPKYujUPfM5HEHUkoCsEgiV39anvJyrzPid31imotcvc6vhY7a",
  "key12": "3UGvpC8epJHPM3SaBDJ1cAfLbUsZQK7hkT1T5Dk8bS1yZXkJcCtmDfCuF8eS91SqQXUAyj1Lf4qK4uMAv1XHsXfV",
  "key13": "3cWBNCx7eyKnTMBc9da8X8NhpvVzWRYbTpGxJH2SnwwRj2PSnXeXGJh1tsEFrfbsCjkaSz9zGLUhvoUtrgzd9RP1",
  "key14": "2psRmbvvU3T7st1WLUbfwCC6nU4C8xr1WvHN2gurgngtatdFXxJZktBRgxsXPimxmz5UdP8i8LGyUgBQLohS6Msf",
  "key15": "agh7d9bZ993zymUdv57e4nDod5pcHCbA7CAWYtw3bfqnjczyCnBiSFocTDHww1fxqLm9CNFLj9F8XJg7w3gGeYT",
  "key16": "58PqfBDSpS9DExJ3MaBEB4jRbbjvTmXfzLkZag77Nu9imo3X1NQFXL1nZV7yg2CKHkM6GrSgrYEGDeeC2SQZwx4E",
  "key17": "3AjghiKGvsSDCvnDogm4SiBVXA15KnwCGNmeSC8iwMb2At8sj57c5ZwaEBNSHWEpHt3P8axbAMfpUUkprrE32Kwz",
  "key18": "3oUVPdnSFmqLRKUdGfqoEQjrzMe5s4VndJ8Lkzs2xikBGWd9bVdL52ELxpoJJcZv8BdeTXCKGJkvujwsX5ogPe4W",
  "key19": "AnVcY3d1u25HDTysajWcmb5s9gae69jaHgt3yo2AyndBc23tZ6AbUGaD9qGC2vhAgmWYb6tKEt54WFB3BCR4kHh",
  "key20": "4z2hp6kgDCxRQANiYewX2kkcGuoDJWDER6JkvNwYrmwCeisHFXRbCPWMtWvHmwV4Kd8k6YxiAWe8kDxMvVrZvaGN",
  "key21": "3NqBUoMjoZnSndoDUhsi4qgiQnVAcpZfJ5swJNikJ9cu7NBUNS5GRDnA6Be8MrrHzeLksyzcoSnQt4MhbSnnowBf",
  "key22": "5sBpY4ReRsM9ePL29GDyVq2HGeeV3TiWW5yQ7chw5AWYFWDDZ4nHudtNRb9eUkBXK3JT6ixnEfPiLkzVTphWxYvX",
  "key23": "2uJDYmSxN1N1ZgX3CFPh6sqaakZb3GCFiTaHhw3CWwkQR4BBSfEShFQxqFuQhRn1jqxPfx26TM6KbwYPDFHanWTC",
  "key24": "2sVcwNZ4NgybcczGdpLwvyLUpAKv8rGYDzzVoRwWRvsWMz6CCnTcj238nRNps3CoGoCXCLhEaJ6zTh7zLZULP45R",
  "key25": "5f11YhXo2BGDQjvw5RZepKYoP1wpq1GxUBkZXguEwfgFyugBZJ61whiJTijrWd18H2ZAdEWTm456MmQiunXKBL1r",
  "key26": "5vAsugRuH4XLTmi11iniCxz1FzFJ37DSSkmKLea5yyDLrEhYtLCYAE42yfaswHyuF5v3qRCokT9oLFf7hgQhqvNj",
  "key27": "2ipjhV9tPCg582n55qsEJo4cuFw9o5i5MpmbQN9n8AFnfrPtErB1DAs1XuoSNEf4MPppeHmtLBbGUYYSyQJWLVdp",
  "key28": "3zGDkM8UYXkNnxXNTB1MPrseR8P8yCMeUYFxXpapGHxZhZuySAmzfcP1G6aHeppfg5DQKS8aYgzdH8kkBSjwrqnY",
  "key29": "4iVJeoHR3rPeJVyNFNjekhKwiLWj2F9EKCxJMW5D5d871jYhGKgGKoVQ4wpLS5KT4Za9DTatQ8iiB2D5JgN6sZEJ",
  "key30": "2Q9KtABTb5gm5nzj2jMNfZfTFZSQnLeUXTXQHUBGLdvZmsb4Dtf1pHoqxrGs1NLWKvZ5JuGDYCKycz7sYzok2Da3",
  "key31": "MmwEdTrXYufDvVmyLkL2hSzTP2HDGccSx1UJvgWeLctkKwaEE6GaQqmNtCLRbQqASFMSqt1K9fukaVU1TTFPPej",
  "key32": "2bJzDaMHtaxdtN9t3ujoAvcCn33tm28F1FbUbqQb2uh5t5V2uSi62RCFYeVsstCZ6TKH68FjXndHkcC2brPzb53y",
  "key33": "2c49SHtQENCXkzBwAKXN96Cr8s1WNDbC6HKiwcre2AvYB13PsZAepZceWvbGs1xQyPw8AejvtguXpNBiWdXMdS64",
  "key34": "34Gep8hUD4KmFJYGEkU1DDF2bB5BhAbCup7mUECriQ1qJetQrJxqHR9wB3rmCwG16oUcAWUBd1jbZrYjNTZ4RmXg",
  "key35": "5LjTUF2rNSNNNfaHZWwPve6CvBAn2222HoVfTfzfUbeQFAJym1D8bcLFDJ3jeCrabLqkjQkmNvKTKDnrz4tJMGzS"
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
