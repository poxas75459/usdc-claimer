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
    "23RRZA2y5N5mLLyuYr6oK1VWWRZzqrb4BL5EZ7KM81y17RVJZWhcoxmvYzen3v4qeYxA4NHPwN2wWdC7ZHYpHqd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SLVh5BkRVtiJdxmhX6AX1uEABBgADCdTVrEqJurePC19yohqwCzADxBxpDLB8BjdGzWHiPwTzmmqggx7nLLKCzf",
  "key1": "3vihJ9sEp4usDfPzmtroRefUM66PNq22nrkKEvjKxhCR6KRm9CbvzZt8g6frU6eenUJXVjPgnqYFbqhrxwwtczai",
  "key2": "3tbSeTcLVVohV6oTNNKcYKpFZRuoyBaxMaY9NFoaDRZTrXbsXmmAULJJihmH6ZJ3uDpzikWTAjVer7jQstkg4hUw",
  "key3": "4snEnsHAycj72mhgRijfLqoj7EpLTVxR4R77Ge8bV1N14AJzhHm8uQ8U4g89Q4LhgyPAJxZZ6rKvZhgpqJRaihAv",
  "key4": "3UtxabcdJu5TKFRApiKGXKVxJcmVnhqFDPo6HcGDAQSQ9qjNCHHgEGDZRWCHq3tnsTu2KeB2DpGygCWMYq8DiWo",
  "key5": "3wPUZehve1hAT5r6wP9uAG7EBuG7uEnEicXxU4gaUUa1cCEPs6rJMsU53QpsErrpeqcWtzz3pEKjPBJF2rnsZbV2",
  "key6": "2C4GXB852wShxTKGWryYV2ohj1dhjcSD9C4HB3zy1bekT2PAmFLwYamyUkspXvzhu23X6Xii98NAsUhHxggTLgAr",
  "key7": "Wvqz5q3BGE3JmxZhMBfY6rSntyS9B88AVwU7E6USaXhkm7uxCfSqfbuokaLRK3xEQhf8ysP4zuZwYLqS8Qdbdvp",
  "key8": "42rFA9abYGJBSkeJZ9X9D4k7xGihapVeKYed3fB7otahmV5heLVPpR4VvVgj96kvhZyaSncAC9Z3YExuvnyQ3NT1",
  "key9": "ss8Hwfy5zcoHPHaC5uiQTNN76tPTgPwNAsPeyAZXFdu3ddnAHet8mf6U3nKAPTLVppk6VJWKCpSh6CJHNBbE3em",
  "key10": "3mEkjA88yXnQ7Woj23DxefMaMayrbT8nH2fTQeow668NituS3bgCU5aXPZcgoYGukekyxnyGvG4KtGZaUYLSYEWy",
  "key11": "2SuJctzrWX9Ty5RvM3ecQ3iJvJ5WADRBmzJ4svENWc2y9jYuNu4676i4waaEQi7eEMmaCvceNFmJFzKnXE4WtW4t",
  "key12": "4sMs5jopeRLBbWBkmtopTsuopKB9QB2KmWiwW37udRaQUEtveXHRN3D8hQ376cxwbpHw9xXgYxkpUUFAG1NHrNdY",
  "key13": "4k7tWS9ReWVZ9YSXCpbfXzkMDX8wECuMuBAcCpHkhJJQaqpupxLMFbovspnePar4PGrsPhJ7yBtfPWvUF7dAr7e6",
  "key14": "4J7SYAoVazDPh3TTo3wCKoYu2oD1Pk5hA36TG9Q2T7JxaN8WWkA7494mvsUPt2nERUtshNYYukUuaL6MtG33QeHo",
  "key15": "2QZF57dqiipx5ugKoEjnKkRowNsAVnwYZkAxzHAyj2vNyDrWKNxkpG4Fyr882W6M4yYxJGm73xH723LDu9FoW1yx",
  "key16": "29PbauL8zdowfGXDhXMdoToKnRHFpbUB1ZmnBm5QpafgRicXmbjFJqBGdLe9fhqptqytdgSb85H3Gh23j46pizmU",
  "key17": "4fRfa1s3iqbEW7TcGXCfZArLoWEqKvpRUwLJyr1XRGT45KEkGVUQzsZ16XTUaxeCxHsrhSDzFD6bm2rGdhX45TxZ",
  "key18": "5brT6hTBPKf661tBphDNrEeA3xbuXAc2Uzx9KJwYY4xmqgmA947kiScaEb5irFSZWGDfDzyhLNsjrsScMNtW1frH",
  "key19": "3a7KGzn3saBC49Hh8u5yaaZCgUBtT9u2EYrLLMyvMSqZhwoUEBfxoeXkFkUuybHVA6LDjezTcur4m3o3XCefrSTn",
  "key20": "3WXggdce9gfjgFRnKwjvevFivKrjtTNAvYokoGZNBz6brZtiTYc7CxdcxtpxvksYuMu9SkvixfusSAarLufEDyeH",
  "key21": "3NXAPoNjj1qfiRQqCx2iQzHAMTAZE5cyhpe3uUM3KWxrmntb4kXjda15V5ff4BwN8niqw8VQXW6RAXwXD3rrXX4f",
  "key22": "9bDPBAQdMyCr7UrwVLoZydzVkNnWptVqVehQdPXB1Yki5ipGgoAHuzZRZzPvq4w2zZCwbXDUCjzLz5Yf53ZYGXT",
  "key23": "3X3G9rfNJAtEEPULthKSTAd9bSH4LS7e87yQYhgeBMfCtSNZxxbQpVbUwdL9mm8QTcyq6DpdgcjHCS23pkmTxKJC",
  "key24": "4LTcPbBXJENBar2SM3VoHDfzEqcY1US89aB3E59vdBH1ssEjWy7yvUNvViTqXBM76uuaBFa9kRnKek2mVuM1iCp3",
  "key25": "4MGobppMxcJq693N2j4318DqmhPFFynZpMF1DvTuUia5WdxizRjCruaxQFU77pTkVN7PPhDzGWXhtLVgD58kMvYN",
  "key26": "5S4djGqD7wgfoTGivKzyxHSWSuQQW1LKA8BW4weaMNTC5fJeaEyVmYSAeYWGiSmh8C7riEXNP3FDfQFiAPMhinnH",
  "key27": "5gYTPDmqjdVzMtJGUVxVosLngTA5A9agbqWT6dgGd4UuxfgSQFstMxXD7cGv4Wx7LuUBHgaxJd6AwxjFzwZTQvTG",
  "key28": "2ZASp6tPxEudRM44RrQuxZPJLvLWC7x7PYBLsmP3sXk6vxuqoa9k9qbdCR4NqbYK97a4TJPgygGEd3rqjfYpXWfU",
  "key29": "4hGJHN4LDidgEVaVq6xbvNrbkSgjocxcB7bVU5ozvuhoLqekUTzoRPnxahDveNi4m2B4TjUYGxHeBfbpSJizq1Kw",
  "key30": "3CUvFsbiYJzXK6YsyLMHhiKTCVFa6r53CqKmxFU6JfzF3zUxLS6ULXfTLc5XUh5BtnhEG1YgWax8nxerdTTvyKwh",
  "key31": "4Nfn1qs1JBEb3UxBoUNHeiEUNvACscYeYMbvjJsJ2QnwJ58UPFHhjNSSM6naPmtQ19VtFoVdcnY3pwGtxUG4jcDm",
  "key32": "wVEuBM1KwMQnZiYv6Y2JfXA2Sdk3kwvpUAUyeLq4akYmnapHTz6DfgEe3JWXjR7nnJbJedjFKhPfXZM1T6T8zPc",
  "key33": "2HHdtky11rUKsGGQsvghQgKoR9GBKjxZoZTx1XRpDbpZY6ZjtrPPhUoWrLMPLfDJZ8pKuDYo96W1JTm7kLgzudSD",
  "key34": "4VacmSbK2desNNZCWidTToPU6Cd91o82qb79s5DW7HiNrkJUHnwrEL71jtWefvfBnJ7DDWmSTb5nvG6AjjEpj9qY",
  "key35": "3UrNcRdnkcusbaJrnGkefs8mCLwegrUCu2m8gxtVqkT44kXCigXmMN1Afbua68RKHhHFVJwJkUQNRgvW7VppMdKw",
  "key36": "46kVsrn9Ek5gGduaP1mvFPzfUPRhkPRmncs845sSkkZUF8bm2g4G7nze3YkZnMLgD5tCsHj6N56DzGfgnwL7V3UG",
  "key37": "2GorPdFz6hfSFQWYnuVVRhkK31r7Cy4Lnt3YWG81VkSSXEPf1Aph9e8KfX8wDC4QLffyxSA5E3Yxk2ue9n7k3vKV",
  "key38": "3XPKBeySr4fTxhBxT5WWSgR9EcUeBZzK3XoV3ey3Aac9saG2uCZE5gFxDmzfj3ZJvQzykstggids3d76nttYywUA",
  "key39": "CYGortsQmdtRSi7sKKECRg14kNqTqUDA6aRagRzSjD13YByVGBDMmWAmhcf5boLkhSm8w5kzSvNHcrDQSoLHbHm",
  "key40": "225aSJYLYCa1V5ZpeZuTeYrkQoZGBfmijnJprKKKrKHwXxTymXpn28qvDwiwUbHYQySwuzLFCTUdoZ4n73eBSwcf",
  "key41": "ZgqvR4rVSQbdHjsQ39SFQfxSWQNLzjprhU32qFhE766RdJrRta9LhyTsJdTs9NGhpXs7GxbMziJHfrzaE584pvL",
  "key42": "9DGTZHMroUf2fWeUsDAaBRFK4KhyN7YKNGpUEqwrUgQw5qi3Q72JxE5Y2krohrXzJT3gSCp47gJ86ztitxakT7F",
  "key43": "4y2NkZaB4RRn3nn2d67jXhM6s5FS55xifomkUwQ84xBWRAZsZn2fNLPiEw3W6vHe1sSvXYU34fkpsJ1A73ijYcBh",
  "key44": "2KmwcBntmfNGcf4aCYBsrL8KHFmiCx4Nx9PxAuzYoKnw3DFg5BjQiDDuNHdz4JELvkuCPwgCx8mVmV8qPcegRWJc",
  "key45": "27nPab9YjvtmtzuJRcK95qzmws7XisnH2pEwzndTsg7KkeP4VxjttNkeVQxVYDWB88gziP5jvhnVNTfGZhcW3hNg"
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
