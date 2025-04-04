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
    "2gs6iXGNqQNTG9gYEvWctyH4ade668QDrorLMFpAuEb5LC2fiBo548XNC2Ko1XBQqAB57yRCrC6fzXyFxhkJmuCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TdqdiaVnw3LXQcPYXkJ9Qh4ygTkpdYBdBTrHFDcupEupAkR2S61TNPu328xJApNn5TbTta5ecq4o8ihHK3C65aD",
  "key1": "2Fyg1GbYxAxKUVynEfbYK2TiGdCucDmZcCbZVqwkWfDtoMCGTLXiCYxsMzJ5g6ewEySjBLv4HaqGGsUX6MQBMHJr",
  "key2": "4cgs5c51VyUP1XKZu9nRSXJEhQeCiVKP8FuJjHJYa7BmUjKr4TXLCpAWwvmKyu8pENrgdxShsQcBWyNBrbs2FWHs",
  "key3": "2jz728hjbFhxXfLSkhDvacyTtheTpbprrgZYVX8E1A94QHC1Ad4QHcnmUcF7Pfn6JBdyXk2Z5VrtVfkxrxEsv3NW",
  "key4": "5JDhPZgyrXnggp6D2b3Dcwds1pXV1HezAVQSz71mGTy9VdUxfLzF3p2y7mrk3HFa5KzArz8Whs2tHyqdjCL2kGiT",
  "key5": "3dWPhrRhrySdRkCWywYuckNrbhzfBYP4B149n2BoviRdzb2sKcE55ZJxDXKG8xwa1pYZJNYMXKP3LtTgLV2s3A6d",
  "key6": "wWTMhxtW8yrj9bmioyYyjNhS8347z32HWe2AW34WrFGqJPkWfQicKoAbnnUQZBeAzaZ4aBrxY7AdYLJpMmNM8yH",
  "key7": "2FTQtxWyGD5HXhe7tq2RUHuuAEfMFoTA39FXX15Etgj8F6Z4eQfhuXctTbPxJvxtZNwTuHxAQX1FeFF65qWsuU7x",
  "key8": "4wS2DKzGoo8TUeYHFDfX6CUw9w88ccXpC8iuH5JzhzmA1NELPAhwBFj1k7zhyRCEP9YYdQ8dMwLWdzP3yyyge56i",
  "key9": "2eF9rPm3zFG2u7iTRQCLU9G91943aYr8qC8KmRZ1qBQGzm48PN9ts7u9eiQLXKgLjb2raQKCAQo43ssVy9Bvu3Na",
  "key10": "4N5qcB8w6okzvcjfauJSFdsGXKR2uq4eXyvZYMRorvGLqbm9TcpPwaGSN1MkcWwVu3anQhKRBb5A9Dcttz8v2Rsj",
  "key11": "2uVZ6dUNTjpYLPNZh6aqz1Lip7kS4uCvK69CTBr2BLMAEbfTZD2MDm316iMwmVMcrvyfeNNL5iMKbB2MgZyazrvH",
  "key12": "4F1pDuxjr6v4e2WhYJKfvTthK5D7Y5nXJzx47LxfvVYHuwrd1ahNDBn8dDwVGCrS51SXPTKXERfAXiHqssVS2So6",
  "key13": "493FJAbDZcVWHHirsZHPvuMdusbaEsDwumMZMpcfVcpomXZCnUnKUtSBYNb2NVjxWoUShqyEghtsQZGZRvz8EmNe",
  "key14": "22he5dftLxeRQSLUZmjEs39bFTAQATcmSMbBsnCswHLiGn9PRQxMbELCpCs8nW2zZA9rmtfxTausEHbbrGLRjeHF",
  "key15": "4CE5J4g1mKKK5ZsKHnp2ZocYL5mPPYjuQ17zuauFWNreshgMsyxPnYr4HWMGSxqHWEWfo2CQLwhuXisHrMwuURaa",
  "key16": "5vE4c3wcvZJ54yRJeC2yzvyFXGdSPsUoXdoT2wCNnLt2yrwzapaHFF1RkzkrBTWjBroYHiecYvDFoKtWZt3asUSx",
  "key17": "WrQ8g7o6DknMt2K7tm9qakHZ3bQ3Ykp4chEN9Q2izXxuegDDhSpV5MqFNAHSkYAjB79koTYArkVUBTFw5pJipoa",
  "key18": "vo9Zouv5PN2woNg5eTtGiAar59KNBFF6XRYyNDN5z3FCmDoZN1g3zY6jXJKxx8GF8wAzDXDXzmuzXBaZvUEosQS",
  "key19": "2Mgwo4f7tvCjFqVPAYF24Bi9jrecrAoB2XiscYUi5xonYyFvDN92jkGLr7vCKRmfDvKuEYhwsB3GgYfRVdnjLpAv",
  "key20": "5cahAJqtZk52rSTVzWMkueh428KT3g6DezkznK4J68ytykwrSjVWXFyQy2sRfw6zFJpeRma6sVQFfKN4VFqnJRP6",
  "key21": "4ZqBC3bh8bQzs5XWaPzkVgMfuWu8dZVCu1ixmd9YWqtDb4mauPqZTDscVdnmxj4HyybqzSuAVLRPEkoy8qtPv6VB",
  "key22": "3Kn5dyGAnuYMhrwrgbSftfJJUvyNngqqgL6gr3ZREb8jAY8rBMUpGhQoRvpRfbkQX1TDXd1mc1nEicuesbb1Cr5Y",
  "key23": "2b1aBayEw5BTaiwo2F3mGxpwDTbWmqNcSCZx3NBoLY1uM89WKFjth7hcyWtM34f53GgE9zFASjLvwXaaDc3Z32uw",
  "key24": "59QvbGtew4Y1iv8u54zg1LVouUG1gMMZkNQxePEzaUi2AGjfC4e9iRgeLpAqHARexomqquVTVojJYpQBz1b24bXh",
  "key25": "2zREVyVuj6J34Ki2jixgncvLBtSk9Nwn4wL2eNGA1scGtobpDeiUWUFNUVZ9m55ESGwCkj2jf1hgyWCoyxPQKkij",
  "key26": "3NKDCBxGHJ5Ssjwhp6h9Ysxvr6yzXghtu1N5cqk5isT9UbMU38ai7Jou14dccYnj3vwuHeuGWcZehSBB7REPDYzR",
  "key27": "3TV3QeASJtpyaVVK4oZABRKvpyecjD8Ft87KsZ84rCc2jPVB98ys97v59CqZzwTA9xk86h7gEiD9RyvRehL3ubuQ",
  "key28": "5XikvzwXRm95e9W1TVYZkuytPyNzoigjmqq1AVB2HuY5rgx9hXpUCDHvgmeQbbrwgPuZhP44NcvoFFTH2XjVGk5z",
  "key29": "4vXJgqnvgZSj26EVZxGZtCx7TZaVFbv8dDde94o5M5b53GNPCvKxQb4nM6wK215nrgGokFtW7S9navW8PXkCo6Rd",
  "key30": "5wX69fUt8e4ndp7froJBhtAJvPo6xgTPjAdWa7v5CpTvmpAFArJhjiFsKi12W549XSPk6fj7Ena9CeUFddf2GTAx",
  "key31": "xv4dynnn4Gw9js24GnFXdscncKFmFQkEpAFXs77wePzZko53UJ77BpzwtGgrbaumuYQEu16xPYPWczCQMZm9fRc",
  "key32": "2sqgmBjrYctfc656zx7Nf6R45iSJm1t5fQPSrfVj5Mg9dfh2bT1pHBRZhqoVvoGfsAxVqaQnmoJm8AdRceMfKDKG",
  "key33": "2RZVuoQRCBEttS3rn62oupbthUa7CGYNgq7cWWQdmVWx5Cd624JKcHeHjwKnhY6GiXZxNnAZqU488jPXVkprgGYx",
  "key34": "3gv82nq9BsqnLPt5azjf4fdu7xPEgXkbCa64YhBVU8Ne5ENa1ubpxFg1MrEkG8amAsESXrBTGMjCazaHYHcctBo7",
  "key35": "WeGEfxCiUKqYwpVC3jEz8R7w8tfEBjXxjWxmEYFuXWjSQK12BXB3nLYh8Ksn1Kw9RRQXo9wwamRhxPF9MrkkCsr",
  "key36": "RyHtA82Kj4Z3QrvWFjTQxWU4apPo4ZFBySjusPt2QGnShyaTPPRRc8fytPnG212FCqCijck187izUq3zpCtaAGc",
  "key37": "4CR2drJNG2jHAH46Xmb7gs42y9M9ww2cTkVRTEF2UQkTT2KSzahLzP3Lm3ELgCb3Gdn7SLFUCEWVEsMpUBdTUtff"
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
