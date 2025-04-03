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
    "4anE7X3WWWxdvACvtRjZGZaZAvmrKHxF62n1e4xfqaUEFpw6EGBYbwGKu2WimRgtFGnpbqqNU4B3MDK7QUbYVgdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ejiMK2iBMNAbkZufGs4ZcrxowXiAttvAq2HnmLeYHCxrW4tiuFHwFgruxh1xR3oiVwZaeGA7XxhrQme5mc4zuL6",
  "key1": "5nAXyNXm1mREtbmg7DmmC4TGdiUzxn6abEQnfpKoh6rvq7ypes33NsE522ow4Adou2ReeUg5XKHmCLr5YcssYqAN",
  "key2": "448X4TrveLq4wQdxvFGDH17KN1mjdocrBccQdyBgNoahS2T12TPsKnERtvvBbFBBPSRjhNjDQvAMKFw7a2bY9q8p",
  "key3": "4D6Bj4trsEavtXRqd8hBQZGVqLeNvu5BsnHkqxtadCz2LGQgqyeEHBf6fA7XND1zVfqorELznyTFx3cSxALdHc6g",
  "key4": "3tobJxnGbdrhC1sbH9GjbN9GJy9XS4FC4krtRcWjTBRq5Auz5r2mfa2MsbaGXZHmzxuNHQT47WBTZfTLnNzTth47",
  "key5": "3cUQ6kZq9nG7qor9XBN7c2xQgiKnihFNxV9LsdKHzJrJ9Q4uNoJAtcM8N7qn2GBFjbW1DJr4m12xMvoyRyRxFtBJ",
  "key6": "5cxUJ6HWCieq6WHLWJyGkiXjGoXV9fEvqMvhMoXs3HtrXb3HHVaiAMh8J1xwVoF1BHKkiUaRXxTvD8mLLUD8REJk",
  "key7": "2LrK8Vv2wFLEF2ahHEBz8xb53W5BRrXzGUyMHuWfn4zGaA5wKnnv1fkc7wWvchhewARbUe2pjDBSGo7CJsgKsZPG",
  "key8": "5u3H7vi3rbaAHdqySJvqxEJVNYxvvkYr3jJ2RTR8XF2PrqaDbqKR88X8yyySbhNgmzbhRSbh84hmCVNu4oyddWq8",
  "key9": "EPbPw9guPuMsp4qHzZurgsV8AvZUF318ZTPpC7a5xeFJhMNarz71siZzZmf3zkm6w251w17GfSJjTCcY3jhprpg",
  "key10": "X7Re4ETY5dFWNp8stkHwLDWX9z3krDgvFDP1xnNYXAbdgiD7PvacQQF7HaJuEP6wFF9gYWGNmuTs3H1HT6PNuWb",
  "key11": "3DSq6b9j6ZZ3pHUbuoFgqwaoVsFL58G4mq4M7EUUBVf8dUXQAczuSb7pRBGri5xc7tBHdF1r3cFTZ22r7RdbiiX9",
  "key12": "Z9LpbKEVGjiNY3yC9qj9nGmS7g22yJiHUuUHHGfgYCk5EKFm1FUXimXHiQhcHMMLzHASLVs3XWgjWw9JcynX2kt",
  "key13": "3qfSgjw1JnmoBEYQJRfRVSjy96YUrr3dbfSV8tGnxMsQMokHPcqU19JQufNadzL14fcPkB6cRDR8tVD8W8pv7RNt",
  "key14": "34Xj53yoUHEX67FrtUukU6B7KTxptoVFu11bQWYnRur1J8FPSEf1p7cPEUJ94HxLusGaPJJm5SkKtnUMczafcGFK",
  "key15": "24hHpi86YMw3iNvmVUT1EfJqPf6PVhYNeh53oTcCCT9A2vqcBv7vj56dfGUArTmetTiW1nyiNEX1zW3iszyniNgH",
  "key16": "2Ecr2czYCtazcN3NGiknR5exU4kazKxgyg2qEc7V4Zug6ZwfN7pQG2jmuXLSNQVHC1McEKnjLT5JfZQJSmi2VbEk",
  "key17": "5sPUHQHNn1hzPT4i8UTtpNiiT7dP4kmsLgpqeGmYekaECafCqQobnUsPE2rm9e7M3712Kw7pC1s9seekvN4uFgFW",
  "key18": "2qg4xruB1nUrXVg5m3wjGpTSsXkQLFbeJGqCJuxTT3Ls62jSFEkpgLTT6DaV1fwVu8fn8XWowScdxx1t5CPawgyu",
  "key19": "djMngMuMLJShtC78C8zhcCaPPW8ptwqHxiwqC3nHKnCtLWxr26iv3QH85hAm1JJ5JzRBjGaTfJw6kHn57hWDnkd",
  "key20": "5U9DJfp5eC2K9c28g23zdF928Va9Dj4g8anbeBYH775L7FJBTDXbwdYQitEfzdUr7ou9D1p64cSxKBaGkS528Yf2",
  "key21": "2rCBhTuE52zmAiVeKAWkNaBxJyfPFzJE6ivDGxZArM9rTLfe31GQJ9wfZQ7tNUxyL9tk41J5Ss2cYe3xdFqVjN1M",
  "key22": "3xaU37LxEFoC82JqraBvwjhi48zBRGSuU6i7TWothcvVaC6putkmPQaGQXmNpdoL1p3P34yNNWTAmz1aYkrWnEGe",
  "key23": "5UxiBt2vJj1WPoN4WqR9eiKRE3xmrboavCjaVofWWyrQqMvtd5MpSNoHXiUmZDabmup23ewTJRsX8dhwVBwMCvPZ",
  "key24": "5riCadxoQuGmQVhpRFYNbpk92dNqNfbWe8HjNnBiApbuqu5pXn76rpBJ15tYFDAnHQTTYwBHpn8sym84mxjy8SfG",
  "key25": "5mHBVZRJFtb4mZLmDeiYd5DsVDMPBAKo5WX3T94Hwz6jwSZnQhd6upqC9haS3WRk4NFMmb2kgevQsPpMvpAvPv32",
  "key26": "3R5qZiavHxf838TCpM9WrAzRMtzrCJW2iVDrmEswpAouGQhYS16sRy4GSMRgVpw4ck8dc8w4aDW6ECiJ4yU1kWhM",
  "key27": "JBV1gYAvhAV3ZWQfThoUfhn2WbDU4VZp6NvKEWQFkCkxiEMWDut8ZgGdDbGADchNmnVgVxdHqUVGnDq671v32x8",
  "key28": "3cMVEpq1MpQrQggpniEpWp84io6vuh7h6GXQqjHa62ZU1H8ycxe8C77LVCZ1GVUawuuj3H3Gng2wwsXzhhfeXEsY",
  "key29": "3BChN42aPXrBTnn97rh1c22WqtU87rQNDpt1pEG5QidvEK56m4R9NicNgkFK6Vuk8MK1q9L3cM42WjJ94WnX8PEc",
  "key30": "5YKNJ9gQs7VWzFZpk7Tfq9MjSEhBmyGWnGcJQ9o9cLCdgESN66Au2FabKqgVWhPeXd6oExkEFsCCW9Gktj2zmgcw",
  "key31": "xBzr5guHuLPWzejkgmcB4WQuCxN26xrFLWgTCWwP5VfvNfu4hWADPySr9miQRYEn38eABiWccC2LmwLbjgM5ZpQ",
  "key32": "27zu9Mo2u18TRpnqk6vHbLnPtaqm1P4qRgXEpHV1Dr1WZ19Z5U2jJafeotj9csCFRMSBRA98bFM3rmbj7NxUNbo3",
  "key33": "4Uk5bxHiEpyoP356JQ7nMTJU5BTMQxRGrDhPJETMtdbbcfHSCqYqWAwhTd3zcRyj9tVT5mEibvAfXq1xB3A6uFdB",
  "key34": "xD7LzegXf6JaXPR8otymy8RJ3TiEGqQq4TLY8uBh59x5QvYqL7ACHCdaNwCp4p49Wyn91Y7PfNpSJXmnvT8C4xo",
  "key35": "2xYLpFwEu3WrhqQMN16GqVkh5GgAA15maqWKRY3vG8fEUQuThRA9emisjdEzZtkx2wHz9hA1jedAc8Na1nyYYwVH",
  "key36": "CvcqKdj82UCU5TcM2ouVvLANaNPCWjQRHR7NeJeC9Wz5Rcgkf9oatRCEXvZV2NABrxaakttwjnyxKUL4rztngjZ",
  "key37": "2wSXiCPTTUVzk3WKxQECmHkaR4oHv5nhY26izzRimhJsYkaQxyxfg1FzEJM6tAngbfawjACFeFBJFAjCC46uUNqQ",
  "key38": "4HwNfY3M2txreWRBs5ZPYUzBqLEgJWrHk5nLAvSa3mWyzo6am6r53WAeKkRChxvpWogohAZo7t4CVmwcuJCwSiZE",
  "key39": "4F6xRXKSgNsaCRnuyUkkmaJbBRSBEFZpYEMGwPN4DMdbtJpJGE2u2qrhVtbtpWigSNbU94kb1L31kqWgtQTXGCGH",
  "key40": "2vmUCauRwBskZk3fs3eihpwthAu69BVPyDtCqPt4WpiutW63Rzrpbr5F8UNKJ9x8gkz1hBg5bmVv2KqLk8RKWPDf",
  "key41": "4sHDUzi6Ms2DLvFHaTWi79FZBbbzE97cBbj7pmmmV2xfBVJGhDQoGs5YRAXZecnHeYDNvWVUhpKgJ8tGrkKpkLKT",
  "key42": "53e4K3Y9CDb5isst9TwaFAdY4Fnj1YS1otXKuYe5RCdyzMFMLjgeY2AKvcHUYqhP9WWupY5GMwcA9oaj8BJ3uHgL",
  "key43": "38xS5xg1sw222wY5xQV6mEU1smpxvUcUEqTM6NWx4r4ojSRNz4gug5D9GzmSuYtLVeZnxU66iCTShLmcLvTniY3Z",
  "key44": "ADQN2YJkk7N4etK8t5YMRuEaBLqbfTeai2pcVLJPsE4gNtYP8mLj8uZjuGt3MMJ359WpH3wbsTkbxJ6Pj14SKXj",
  "key45": "5bqSPVfxLcAxiaivCGMgcykG3URurXGRhcDYZo68KbgodurMe2UVZRSFsf1KrFsB2WG8yzrypaoMYz8cUaysEeQH",
  "key46": "eLvbg4n71rqh578Na7R1LBPJ2EJHktKiGvGrmjoCfveeZ6kvtwxu8YJdh3Z6ozPiF7rhASCEUAX7pns49nGGium"
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
