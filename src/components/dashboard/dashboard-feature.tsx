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
    "2d1DB645sJATKtF9cjKp5hAMMhiHbzR2e7dhTsu2VsCqrHE7ToyuyuMrj3r1AdBJVj8WRQGc1uHXennwhnKuTuw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kRyMonvFoHVfPyTC6i6q3thYtsh3xoracQjLzzk2yUCb7drxizSkeiQWcKXK8VqnqMArrJ4ZmKTHjjxhzP9Pj14",
  "key1": "2286oxwptySRnWTXd5F3djHiMZS3RcKtad7T92eVPqNWh7LAMqUPZg9bCQzF4VrWg7ciNo7UiRtm5H4SRHDLXnf1",
  "key2": "4GUY97wMwBXXp9MsdxTQpGx7NxLWWtdYHV4xeRWZT3h2VNuA2xjaU4s24bTHEox6NjC1k75UJfojxVHA5uzHSJqH",
  "key3": "2eWsDBnJA4hvmCrjwSmTsf3RKL22PgmmibXWKbB2E32CRi3vxMny59fXJkctWnhn7H3qeZXm8KwCGZW7djcyvZ7E",
  "key4": "4LjkmmEnkM319vDZYKfXGhXMQqdEXHk6LoLuJK4TimpueYmT46kU2XLSj861gDxBgN4YgFCr4TWVZPQhTNCCs6ZS",
  "key5": "4aTKpcU3H16obDKj1p1LXvDA5fY4HceoN22z4UcvLeefWv8KYveXhgedHcMwF7nB8A5npE22xF6AWiXHjNCuYfE8",
  "key6": "2NQX2w1YkEeCacYWQkuzewfxJgEznQbhd8UZUsuXvNutBLJncyFW9k7FgUmn4kFzUFyUZdPmoR7XiGyUdGZwyXL1",
  "key7": "2ADkx3Vp9j5hiACm497T8wTYohmDJPYYnuiTqzQwfK6T5eAKzRL79U2YivKJDmhBFGTcoSGARHuGYXPkVZJzuox6",
  "key8": "yztdFkPyK5WNcypniNqv149SwA3gDZovvm3qUU9wrzPmrnDxsK6ugwR4xLHit9hQzdwHMHzTFbEfammib3bCHHa",
  "key9": "57Y2YUeDeo2ULTo28XXpLRfat7J9NsnhYcLmE1xG7RqZWvZrs75GmPerQjPZJBKBwWMNG6md7c4zTf17LMuusk94",
  "key10": "56arPEtKNTDG5ZvU7vyATZd5hWZuLnJz2gDUvLhu1k48Am8VUH6d5rqMc7yow1wxe64Yr53EZsRQRaVoaRegQrqo",
  "key11": "4VRnaMGf2fjohy81sePine4PKJvcmcrfy5HXVy3JZJA9L7c9jGFxKFXDX9xYjBEondTCN4Xka89f2mb6o65fHJGF",
  "key12": "gzXjTKhFafdS2ar7akyAANkV9KRWw51KF7jsXNqxmRUeaL6VUJad5fRtKzvS3tCckGMhZWZLzPmHFko9kigcrig",
  "key13": "hK2pff1VmRyUGzVPxSWNUngjbSTLSBTGpkM2mafcDuZDcJGeiJPWafkc2zTQ4pxphJsnkUJzGii8vuX9Tt2Vmu5",
  "key14": "KVVE44Pi1vWGnik6VpWdKzHUpnESW7Fe6X7mWr54tZggzFzJkyK2wpQnYjoMndfjEefzfB1AZukySCq7nu3srnw",
  "key15": "4SoVLAWMtiuD39srV14UxHWe7uTaUSQKCq8qHdbLp8X5UkM2P2jFJUi4uf9TfZXzq8avAqdNe2RHd7kYTP9SUi3y",
  "key16": "woQXvpjYvtQva2VDqJa4fSwDMfpTKqGGFaaQbuiUwxuVmYxVszW5pdKYDHvPN64t1ZRcTKxSr1idJzW8sWe7Wwr",
  "key17": "6fYMac33HaTtdFvZmKaLpQeLK68zTVaEZV2JE5mSEkyRoucXZpCJVVEm15aRa5c7KRvSQuWk8HCJHpp9bQwvMdX",
  "key18": "5iUcVhHSzg3YadR1aLguBPhVdfseDX58xM2KmJ7mtfLYshw7h5bdqKFpGFAgKVCE8bceCTTPGYwRisBqhGpQ2sYP",
  "key19": "2q2LshMVAvxcwZGrkkFHu8j3pw4iGojCWhsUvL9qiZRxdfEWX5JkfVsDB896pzmUvx7yNjXHNS5jbUXU9iscH1Dk",
  "key20": "L3cgWqdteLeZG4mu7hi1tjB5jYjAwmfQ3Y7AFdTB62rXYne3YNPAHbgyTjqZei1mK2PfWX3nVmUiBVxL47tifc7",
  "key21": "37UPXf8827tUmeqNmxib6SJSvzdvc2syQWLtzKu8gVg5R5nxjdtT5PkLndLozo2jcim6nUer9ZU3iKW8HEemHecu",
  "key22": "2Y9PJmr1Mb8ULxc8pTLbcgYsnQqXtKVZUpmECiY9YsUA7uNUrXjsqAoLLKfzGihk9kqRG5ETqqyoWQj81BKWHcPb",
  "key23": "5cRHFiz7PYVe6TEYQo3ngBoo6BtxmCgHdTaiq6ZKbiesHG8D4VZDD7Ca1XhDFcDFz5cSwzcY7w7LPgoWmxSWebNX",
  "key24": "2f9YGpdX4ordTN2avxB6R8fqfh3uBfLwx7ECNhQybC1g3jQeuV6VXrAZ7KTWcTWwa1hznLbFc5gwYsx8vgBTjkYt",
  "key25": "3zDhAyTVghSp1mivsHy6NwAY23MpuszzBYjqa4bKbSyafXiXcVUn6v7De9ZHUmH5vE82bSP2YceRucWnfdY9Ck7R",
  "key26": "2JRGnHaG4omZbV9d8TDMKjNeBnxX4kNYnbLc5NRzFKaDLMQA6DXYfRkfYq5RBikiKGuftqDEVSEfySTJgyKavx6v",
  "key27": "5uNAv9bL8Uv3NJdTtX4kTWgFWFTydAU8LEhVDKmWWSao6tz9UtYM9ogvvL8H7Z5BTX7HGhyoVJg8dSJ2AMaSoMTA",
  "key28": "22omwwZTYzUnVgLn22QuC413woiG4kKCXCiwwVgzvRfocYDocgTfiy9HArQrtUPBD18fpM8vDgHCM7wAhwYFFN4d",
  "key29": "2bSWawQS5Unn2Qjk1Bg2gsSNTprH3RkrTn9vBg6NRdynRoPVd88NThTAYCVQaUfbnc8hFDbi5rX5GDyAr3mUEuSu",
  "key30": "2bgNsk537L7jTfmLp5TSw7uwfmvGBCpKZ3PuMu1e7QsVVbJzhWb9CavwuVMVrHFAxVi4quYXYLQpitaea9y9VFj",
  "key31": "3eDQ87UYpMdfWtRbznYB6TYEbFBUptRkEkzpuvuWVGjwyhYjko8BsoPLVzfeKw8beH68nkyu6FVbdtpadcqj1z2L",
  "key32": "59LDndKg34mw7oNPEZLYDfswwG7kJriNYLLmQKk37RGZLHkepNt3p2qukmdn14DrRNFq8XC42XApoZGv2wUy4Jjs",
  "key33": "4kbu19CK46Mff7gq6FQFwQkwgTJbFfmHqh64ssX1zMFHnEirtRJDJDRot7DLgdSNaLRWodo5ZDHUh886wMUtuZzf",
  "key34": "27TDCCfPDahTyph9rT2TUWJvYhEaqQCRmEQQZHHgs1sR2F4gwyFHk6qfDXLw9aL6woPd6nF44i184xrMVSk4hiQv",
  "key35": "4JWpDPQrVhYYHnff9a9Nzs3NEiCfGScEA2oVbdVVvzhLwbDXap4MUU9tsJn1CxkDNW77VnaUqKQFbYatuPxBb5YP",
  "key36": "4KXQhPFLJF8ZgyfdpJTrSxro24HEa4ud7EqALXpa3Qj7ZP1JzAenHJvb3sAyCmEG7apxgkyxpCSdxt5A3fdVMm3N"
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
