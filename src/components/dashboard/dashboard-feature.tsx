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
    "4wtjjMtjpneRvktugFawGuE2zis2jEC4HMLwDVnr38LyuthTUN9CrKebpGq3Lnk4qxAWDcpYNWafywBHtuaFQaUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cd4fd6MRRjDAhfsNeRxsCXyTR9dDv7UXdNKDRHJunqZtqNTepng8bPN5AmEDaFSotzJ9i4LWTmwUogtkd9Uizsa",
  "key1": "3a5P3ZGQnNbjzU2kCZsaPXU6pJ8WLuL4CJz9hmdspTEQqAahx4pmoyjWq4E5CujR2WKEMxzzzdATgiRM74v9EAHo",
  "key2": "5SFfWH5mLKN3pRL4PKqwjg4Wk8Gs2rSMtn65jQ5kuV9B6nVyVicacFHRez82mzCu9ePFRipynNEw5FrjBNKkLEok",
  "key3": "2CxhKqjEHA1qw9R6YNyUwrtp3xw9dJB9K36ieudN9WYgeNvUs1PRy31CU9QRuTitx9Lr2iyPCt36TSbGsf75XqPs",
  "key4": "B6RasBi3nEHBxojAzcatHQQC3zKjaRktVXUn7ZqPp6GjV8e8EzqBrfvxBd4GCMvTN56sp6uH1zuHTA2AYRgCsjK",
  "key5": "48w19cAFnDqzUBw4VcB26bRseLi32RBZG33M4vzSNjyzJBPcMvgXNiig85obWq1RzS4t9Kd5CqfaJfknAQuZ9RDg",
  "key6": "oPX27VsjJMnGHYxL92937h1ajwcQ3DY6vPcEGNexMurxKqhuCcgM6RX91pC2aVzYg9JeoNoMA5HqhM9QEsNxrfp",
  "key7": "4udPC2sqoZyY3EvfN2rXV74L2ukhF3jhT49YMJ3zFDhqVyPKZaq7JxvWD6kYKSpaLG1WdL3sbNJKkYd3rLiBgHcP",
  "key8": "3mFqWh5hJMVghUa6DxeJ3ny2zxXEa3YvX6STvGgfQf3PbRqxGW6CSsVwHgBRBJQ26TrbQyRr9sSTB1csrFzQyMPL",
  "key9": "2TFFV7qXGn2NwBR7mmUjeYhVWJP7ii5cP1WBiupxrMbMGN63CKB8BgVBJ8yhYYfEJShdNTaQ3s7r3aPuLU59LPBp",
  "key10": "4jLcWnsz6XanHLzxfE3vNTTWGrT47ok2Sxv3rzVKwC88Ex9nKV4J1XHw6hxZVsQ3hbE1KZgwGEVqBnbaNEpq4DDS",
  "key11": "4AMmhBf2yyEW2cFzY42hG2DwiQBBivNVBgxU6hTuZqDPrPy5XdZRnVfyqyaSKusJsGzSCHcoYg2qkxc388AvUwj9",
  "key12": "3jEchZVjycWpgSFLasjXmkmoVVQwTwqKbz7hs1uvQ7X6iCSoBfLnMRt1iyo6v3fSWwZf4QZ5t8PW7qW8KSzNyHB8",
  "key13": "4CRNdvGiqNe4WAdALrT6kdkT7LoS91QrngyweUvKAPs3ZFFKekHym1trfxp4K3m2LkFqbSjL89Gz1tPYFkUWmuKC",
  "key14": "5hKYPEWKQMrezPkZ4Ly3gYjyHpYAhtYXhrYMDnfyTXbbM85LzBspbHtTmRj7pmUAvN4sHb8gDCLoFGZ3aK3c4HQP",
  "key15": "2eS6JvqQQqbCcvP8n2vmrfihMBV2kdgwD8spL4RXBia2AHySaQsNXdoywveujipt4cPGMWWsn7PHSXTdNxjfeMwK",
  "key16": "2tBCpEMEqsMmhwiFrmwMqr8sDXmpbRnLNJd7eY84cd8mQkApnb7dEhnV5H2CN1vF4Eh95zPPEoWCqA21bVsZZByb",
  "key17": "5matQ354z5QxryGDCLyLXJwG8z4J72GiJP3MU5NdtwMPwnq9oZAKdZTPvbYoNrZCaLCTjWzc6SNru2Wtp9NrGNnh",
  "key18": "4TcNGQvRQj4Srts3M58oKjDzdR1YVYgMkSqfymJoMuYr6FaGDwkBaDURN3Me3MBHyrqQEeJkN8AJ2JyNawhEmEsw",
  "key19": "28hpmRQ6F1SU4atgamuESvMaBRF8PbdYvCgQTHN2QAtGanG8jzh9jmVDJ4dpDqA9f3guZNbdwrPeP9UwpCaCN3tk",
  "key20": "2zAfvrdbYM2WjbbUvrtRQC9y3onGAXaPhvBKZvUK1dXryv4pPfi7h6pdAwwj9Pf7XPZynjA9CVFLUUtBVZbmb9cd",
  "key21": "2ps4nWTVRsVwXk2Ej3q1VJ7jggqC3bXptmCvAVK95UqpZbg2BKXE5ECDWXotajuttyyjrfGCmcpupLWggw1GE4o5",
  "key22": "2t4LKxxJoTTJuMR37X6VNe2JNmw4WXji7mj5evcF7rhVbDYUbzXknt5NKw8NBs6vBzNB111biqA49FQLWLqQcuZW",
  "key23": "dQAJQDpKJva3bd2YkcH7vpLQCwzxjCAoHCm8HwiQh3W8kKRfWpaEkXZkkjLjHW9NfLzoEyE8SasD2gWJ2t4sTny",
  "key24": "5YoQhAaEBAbU66PN7KY3ccox4jQj7dEWQh9qMJUQqFaXLz9cS5ZcEVEHQmhqgc12xA7TUN3wvmweR1EaWLKmQxda",
  "key25": "3RJ3pusx5sDUUahf4j9DMSnhJfcgQNHbq2b6iVUbm5YVQgwT2F59QK7pyjWZrJfiPnya6znZfstAJz2zBLn1JMSW",
  "key26": "4o35mSDXmcudgYFf3DdpoEV1egXXQS72aT1pjKde831kBzigf7iBnEU9tPeycYTvS7iZUmwkx26JnUouWiUWqm7U",
  "key27": "krtQK3hAbiop2HxEQtr3t2yWPw2vDYREVLVNM3MB2Xi1TfqkoFYJaaJzTz1z4mPYQq51v3EitcTsFDpHrsM1YVB",
  "key28": "484QfbeycvbNBuv9U61bk5cZJN1yy6ptquWU5SVDmeHtdiPH98rtYCYr2K4ZcS7B34AwUhHSDSikEMATJpAVNM2n",
  "key29": "2pLmcGoe8YtnMtRT6pzhozDBrXv1fmWY4xQrxRJDX4WDsXA3g6GXFvjpsCVdZUDPGty7tRpn2hPdqMaPxGZMHKmk",
  "key30": "2KTMm35kmub6FonoVLzWAtieRQHxFXdej6iyD7TDpmtWUEDwu3NijZAzAo5TvGLX2gVnZwXQnJcFZFcXVqzhkqe",
  "key31": "5df5LfKYnWf4GvsRu8yZ5ghkoLm1C2nG3UmwwHak63umZfvrXMkSPV3gGGSKWEH8TsmANUCh7LtzRjXU9PBdPKQv",
  "key32": "4W33Cuy8kv2ziEoaj87yX85jh4eQyVP9ha9ACbZfKFdtL9Ki4oVjnQYyPdum1zNysKwVjPTd1fgxDkJ3x66EYwaj",
  "key33": "4qJuBZQsL66kQkLaBkP4GHr6qfUWCx6AZvz23CNEdWvXQS38LP1WkgPHga5dTwzneFHNo69LbHN2rfaMhimW1xS8",
  "key34": "45W1uSvbBCp67MhdqMoKXGYcq9LVxskKPyaAzsGSVsM9YfUzUC1qqn9D3uCkvfZyBum1S8g3BZW5c7W3jZVtgbPF",
  "key35": "DtorWuMdkaFPQH76XE7LaKBLbRx2fqfYrXE7uc9ixyP7bMbkjTZfubQgqb1piLtbaRegHqDnPufZueMrNF46Zi4",
  "key36": "rj7dNENtNVYD5zmC4e2D7mDxKSNwZv1aMLf1zmYAPSK7tyCLYbdagi3UN686kbGaYYCyXkWW63Z7cDYsVfTe8md"
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
