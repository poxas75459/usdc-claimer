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
    "3QfSFeUgLN9rk8TZqxHvAHyoYNNfBgtpLw9JF2WwZkzxhYMy5RFBGDo9gb3c6BkpHqsbreYhPowBpGYEbhojiDF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdfJUqNEiijvMBvhsrvCWd8N8bek3K1V2eBftzUpZ4GisMW3FaRDKdgR8NqrrkS6Uhjhc9htrxhVa3cDMSKby2P",
  "key1": "6XTMYf4cV6ps79sq1MrUQrLDGQFwHjPTzvN2R9EbfqLPKMLfTNN2KKuGuzU7JQ67uCYTt4P7CCNmpWQkNKcdTkH",
  "key2": "4LZa74EXxNL5ERm69DU9qFQECZhTnyUf94EMDvYboEm2R47UetgSJjzahKxtX4f5ex5uXVjPvySvG8qWN9F5BZ32",
  "key3": "5jqv9fMdiFyFghw2mHXhVbUs11yhM8LdkjsZghjJVVuHMz23WH84WEvPGi3v7YqWJi4V9YQeSJsSYdzem76BX7yY",
  "key4": "TVjNDBGATVRbBZDJRWFGaQ2wYd8ZzphpkaZTuWA6snfZixz2tqKf67MNSYpuzQ8SHYWCoQoR645RhuUfVnPrPo6",
  "key5": "3kqBsSCr6xehMiW4fMPvG3Reg6JyCQgyy4gdKPNZsCp2cYdEpyacTu4MooN1mnnsWb64ie5cJFMAywbEg9WL1ja1",
  "key6": "nWAoL4FKqQ2rskyeC2zq6BPgRqtXSKjPxsWYGCBwsFFYBTjooCf9dJvEpARDRMxZ6eNMcTuh7a4ixdmBJu7574e",
  "key7": "5pRnS3H5GZd3aEbM45wMxFtv3kkofP4xKNpgitnAfehfwqHG7j8YSYLShEBaepUJAtRW2j8GXHw6K5Z3xJEfKurH",
  "key8": "2TX8EanbUaB8vrVnaM3EEDhwnJb96kjBidymSF11kRRQJL9FZFLDiw8yMYv8QNdnJLwSXz9LnChTh771Q7sKhUTz",
  "key9": "2EtMJ6HV6E2Z5jPMrEjryAbdnxvX9cv5jikMnM7zNgYe5AbGQra26nHu7x8mCPPr59ZAW8xC4Ch5rxXmXyhqsmvM",
  "key10": "tM3LW3bEqGxaVeRyoK3ppkDeTYjJvs7NghAuEVzvbVtj4SaAyA6VCqwRh1TfMrVM64QobBCd4gVwAnVVP2dRcGz",
  "key11": "9iaJBdYxBA92DUnNGr9Bp39vh71j9oXStjQLq5T5LzkHmv7jyZhYzW1ugs1kLzdeM57b9jPKqC9XxxYimdF2781",
  "key12": "xf3dTzK8n2kabptyhs8ZX5pHCkJrQo8fCUss7r2kUfN3ALbrGYCcPfubHhaLsGhjLnSkhTKNWnReZYMFNJ5iZuQ",
  "key13": "Vd6GX1Fw1vRiytEZyBoTZLbjZLbnuG22yuDxadEgLNJ355vjj7qmjN3MS7bVgWxTYAg4Ww7edQB72cv28ySoiNz",
  "key14": "xaSe9boucB8errBfKJwpxmdcEcQqaufTs26CvDmQ5n5bZW5wFknrS9tgMvtTDJNdfHz58vMJLuzkL7SZm4J1AF7",
  "key15": "43UEnBcp788KAswYqJYZC2a84RqTa3peniSWtnFdjLT3sYpk3uRCCYtxWiv4c3FjRCsPjMn5rPfaVZcJ9Jh8uMCS",
  "key16": "yG16n22g41pJAmG8Wii7MCdWtgooKQ1SXX5uV1kYdyHcfY3FLaJEZByj93c2QnG6EXsB7AbUWjDGgpdcykKy7vE",
  "key17": "4YLAyPNKwyFP1pCX5a78FLiPXe1j2U2URqi9VuhhaTnsQvVHghn6MkeYZ4JPoVHTDVxhmy8jKjCJWY1aaK5USGJS",
  "key18": "633T4TyA4mxJVQ3ubzK5nR3RytYvnFewUsm8b7LM14Dk7CdwnH9dj2gdL3GbdagzBwKCJShGTrDpVq7tLJ1qhGrQ",
  "key19": "5QLWdtwXczG48ZNtwpmn4vofwQkAHWk9vBjpvuybqurjf4BQKQfsBASMw2MjN8umEcedWvC9B7cwyX3w7jf9oHSQ",
  "key20": "chTpJJWKrLMr8mWLW4csYiSbGite4NF3XqV4ZJkKmVBXPFQGVPLnRiFqnXeFSFDnjfYrnEinAmnXQqB4iqwFFY9",
  "key21": "5moGo1892YsBxGbDceE99wQvedzxaEm9XYjXiWY86Qq4UAfAmnFXJBPXF1XgngfrScitzM938qv4jNDp3Fcdv641",
  "key22": "vbvNJX9czYcCupqjCtrKtxVEKH7h4pL47JuqJ7jsB7ncrmKZH9MFHMvsfjtttXkYXtp7bMUN5Q5A247fMSq5413",
  "key23": "5Um3iz35Cx3Ue1L5ufkW7v64DDYaNRRcpJrLvYBeR33LRkzLY1jg54qhXjqxd4DJ4DmEsNv3y9voczcU1hrxnHxM",
  "key24": "2rMufDvBeYfCsP8FAZMws13J1sCdatdDauq7PTBy1kaBcuEF16iNEwKGMznLedipnuD4XqgGd9fZMT2GVPjheYrs",
  "key25": "3rz3Mq5mJfJYXVgAbiBtY35QPs9SDmdJYBowzB7mGifDZpsj5YRdP575dNGU4Gw4e8pAByNdjaM6uwjxJoQ15XtN",
  "key26": "4NyPsjG2YkfmMANHQqGbYfBRQHjSFJSUkWUTXZzKMzb8ussv7yCckq5uuUrNRATaH6vETmmkTxLWtn7G263V5E8q",
  "key27": "rAasmMBUWFAxc92X628eCvNPVyazAXCqjen6UYpmukNQaf4ASZnNw6Rrfay1L8QbUTzwAKkE9uR71NK72rdCPpE",
  "key28": "56xU5bS8MvTCbjqYAYeUufvkhMMrrdLWkJRhfwUZUp9E9PMxPkoxaXs9JQjWSFLHbEPNrLLpK7CyJq4LjmGPcHuZ",
  "key29": "5E9zZaYMr16k8ohNDFDSGUpg8d77Z6nu23fwDsiycstNeHeWCbDEVBCsB9RWpETF12BeiLdJCU6ez7iFYYfCiG7M",
  "key30": "4EfroFfc1gqfhhXPtdTpcLMzbeiptWoaog1KY1eKtehe9rmeCGcaVAQ7ADU7RsZLExd367XJdbvGs74Ph956yC5w",
  "key31": "GVNPTZZa7gf4uUQjUiRCeaemVFHKqz1AXcepoYSYtPqURLrYwCUzLhGRhgVNnUfw9NzZT7B4wYdsoJxJKnJ32Mt",
  "key32": "2F1PLRErFKPJpd5eVSZTBFFBp3SHe5Rjxu859Y8csK7Q93EbJW9QZvva5jsQX4w5j4Ha3PtbSR6eZ6EAQ9PkrtRs",
  "key33": "3UAqTb8FBSH4ZcZf3X514jpLStpSZ2Kx8WC5k4aHTF1YxAM9MBZKGATvy64r4YCbzWMCvmVdo4m8R4HPdmUeCJeg",
  "key34": "5dpD2owTJ6Y6nyjr5SS1FfYghuibUbZiBLim37EnptSn6oeYNYCCMLk4wMTroFdw4EpPCpjNJAtLyqrx9rYBhHWp",
  "key35": "5B1if8NCk8nyKEJyipg676t1W3iJPU2A1MUgrzoJ29jd2FYnkraPuFTUFKXEru9tjvEeGrzWuct79fdbNTd5LVUA",
  "key36": "52JhqmxWroTk2NN8i2rLGpKVGmq7irNZ1RTeBmek9D7qjyBFfW4dMxMKGNWn6nmiirLxDXuSxsXeCLzENCtawHgR",
  "key37": "4HsyMkyAeVjF4CpLLYWowK4vfchocFsiLNK4N5HqeqXi2dkszRdcreAGCbpjXbFFGaSXVuLeNaN7EAtaBad6jwwu",
  "key38": "47HWgDggKXnYShWZ42JFh3wTc8YJghJPgWfJNdcvJJeCLdLqry9i1eEFZpFYPFxZeEgaAVAXzyf7f5kdfvuX15Hf",
  "key39": "45vACWgjyJQrTjbSxFDAATwXgtBac6qVKAb7BnfKWyCGi4pPRFTyre3TkFMww9hs9EBcZDYkxTSynyJ78Z3zJaeF",
  "key40": "2Vic9GkXscJBRZKX8WggPxtZMb8hjoBfntvR7CPNCnfsmJGSysp1qRQs6miEExVgb8KDZtAhWzb2UcvKFAKttd2X"
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
