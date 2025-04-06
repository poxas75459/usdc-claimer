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
    "5v8TGCZ9wpYro4QCvVhDLU3bg7QzUuVNEsWWZC5iFR7aeYqqH51khdZTATqenSzfTmA54gM7k8abTztA7i9WNFM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5doNtMKSjPajre1DGrF7cpXJJSAgfbgsEVqdYKdyGPWk9yHAdh9cEg1MafsSTBkikQ9P3o3awYKbwnHAC1376iho",
  "key1": "3h36ZFcRJTyq8diYjHpE38CowhmLV4GoUddexh9vH7DhoxaQx5VXAvxAaW6BW7u1tdY1eCeijJn1KApUJYgpbfFL",
  "key2": "2CE5i7L285uQcnJDFwGKfZPSGajrzcxwD5WegdLSAcPMrJtn47q2NfeUykLMawV4fuy1juo4mhkAKQCWGKr5PBVj",
  "key3": "3VLLHCnbrSe17EZU1iZxtk9fWjd1twr2n6aQKEQxKMAAi83yvuwKzKdJ77HHyPtaW1AMycUQVNib6naTi95duwRQ",
  "key4": "5Ff97gh8fpdox8eGuxQXeT1hcDknYD3ULkWG94oyriPXFpqQp3DVq61wzWHNdHxNLiy1bQN5QoiLomsUwGLe5gBN",
  "key5": "SJNZDVJDCSgjk9Lzn1xjg9T8EGZ8fSp71oSQ53BSP122CRV3HjNqahG9Nn8ivGayrDeuFqSyGwNhD6gbj7g8vrD",
  "key6": "2aBxpK4GNRMEaZC4MjUYPdrMV4m6jiAegWCsgV8SJnK5GDXifRMWmQTh8doug7uFzHqjwCnT7ss8E1LkASS9uzs3",
  "key7": "9WiKJVxdtMGfQRvEXjCzJd4U5uMojL2wR1n27bTJiBagZpA6NKakXe9P9yc4gq6McdxXa9wFiwifx9ySw17KFzC",
  "key8": "3FTKWsjUp6WsFQATtfaNZTMmT7AqhcZoyj8qHLjHETFHPQuueoe5vPF21dqHmKAcSjAkBzDf3qAd9GyFoiN6bbD5",
  "key9": "3JLEWQt6hkcVn5wg4YqdgXdjswUUVyDqrfwAm2ytrZe3m8zf8GgegEcprXokcK3fx6y6biyhaWCpcfpfuywMbFWu",
  "key10": "VkapiMj9s7RBwqEFfZwAY5sqmmvDj54dx3iFi6E4q9vZ3sXwRSbuCTGLjDjBm42jtJ5KnoCBiwjr7nsCJuFhJwg",
  "key11": "2GBQT1y3jftir5LUchQL5dQwJ9mPpegC1jiHNStsNvV5SzNKX1NNhnXJp7FcPEYXLzDfZx6NXSA3PoEQcD2Pt1BB",
  "key12": "2aRRNEV2n3j98kCTkdYynCgAFbJurfRNmxVaV7J2MtLe9sLXieff65c5rAxBSELdJq5TwhrbTbebNji16hP7LSKv",
  "key13": "2ZdeF9NvnGQ4cMuoAa2JyxL3zxsFErbw7V6pGzPKLm5SpkXnXN1crYuCCGTrTkgkCFpyy5Mf2qcfiW27WKE45SKn",
  "key14": "LobH9rumC1kTTHPCLLEsgRTAMDNYBAxc7FD6cS22vQETzYPt3kcofknaQGJKrXGdKhue7AW8y1vapjq86fb7eXM",
  "key15": "2vfhc7fNnFEPMrMUmteEUtmZxaH8TwjebpCd96ftxjAmDBKwGg1UqHy8yvbctL8QYnK1sxNtUzz8ae4DAPsQxb3X",
  "key16": "5KGLj8Ch8snQQndr47K7p6M2c15k1HZeyyczS6AySdQ3y2cQqRdbrnPJLSKgX49rPq2rEyCztzK2yk8tEhfVmvRg",
  "key17": "3capjB3H2uudqmfV2shkgLrKEKy6A6USXTYHRco3cY8gFeevEu3asjwmo6FwB2W76REQj4S8oYvBHEkLytex7a7U",
  "key18": "2FN7CMjNQhWt9dwmtg6Bgzwe6achbSE8ojCygt62dx5GSXw8GqJt3FqMYCK5sLVB4WfxmaadjTSzHJstChkkvS2U",
  "key19": "4f8Vm8hcAdPyxNtrhQuBoMaCfaRUeLaKJyEzskPfsJjZftfGKcrTpnzkPCcN3AC2jbaY3HPJuvYwVDqLswmxud7g",
  "key20": "2ZKiifzMWArEck9Sg7yAtntfSjCEGmNtXprtLkdgFGqNeqhPsTZmYVL89GiTawLMEd61NZWHxjE7WtTsg8ESyHA2",
  "key21": "3mrc9n7RDwekS3dMpuhBjyFLxVZfm38RtxE1bLNKxKhsUg8oHJi2YogsmszdAm2LZNXfX9ZepVBTGZDiqFv1paHg",
  "key22": "3bosWhE7mCPD5muUU5e6KKnu8M9MJUFHq3RzyA3BeXfsaLtUFrnNT55TDDRfAAwFDT9npUYAbCbxRqoMy9DuhVDv",
  "key23": "5VM8MFkiBR9itj6qrQNQxTPvG5Nk4UsDHNep7BSjaLLFtV2oPvjMnhWxnhUYJe7igefc6HmVMcWUqTsSrdGGem5u",
  "key24": "5mQihBgfUiE36ktAqYGSpLrWh1RZPYvU82xyhPa1xSRF1s1JPgCaZpkmRseN78Cod6iiYK8KD56QKFicbRqq5o6P",
  "key25": "5kjfusCWpVvM6jeRmBrBcdWiFv8NB1Y6chiHFXBdLXwAbK5X4JUM2iDVrWjahJLTFiUPpPnJBu8DW2VnHhtRnkmB",
  "key26": "3EcaFiV4cHx2x9KdKzsnsyLM5VMKchuPFfXyqBTd99pH8aUFV9b6hSFZEGnWaAHhSKCSAUe5M9QthhSVcC7KRK1K",
  "key27": "25ABEBk3Hn6wCAa1W6ymcNjFdqTt8krrZAbAq88TTvHCJ265FGpZSRLhLcf6QzuSGozphGohBxA3syMNGVByHQEK",
  "key28": "TPeN6JfDzhGHs8LA5eE6AMcaCzDAPdfqv6StEzeMZ1ndHokGhqX7iMaFvvF4XmdTGyFX2hX2YEZ7jexLGNSNaSW",
  "key29": "2QqivJKs26Y7DywLtBsYRP7Z3sAzSNzyxLPFSkDpKKGJUDohS5NWYNEjFPHurZGJ9modnSzZ8whQNvQrUG5ZiSF8",
  "key30": "4hS2j8SfW8bpr3H9jPfnPzituk24mzm6LBmAsybqW4ZegBtbHAisCn1MJd6M88AHsDuHCeUUx6RiNbBxStqFs4wf",
  "key31": "5TrviJ7GbytYNH88HSDnwcbYPPoPMDEhNqJjnBS1u3TS8Wbujss1nrrfea9WMVq8y5h2XqSSBUkAFDc6Zce79G2G",
  "key32": "3D1Ck9jpYw8iwYQuXdKDve2N91M2JcAzQu1DPKByNCk4qAYUBCLZTdoTpK46EoJEmvkUmFbHkXFACRoXgfakMNip",
  "key33": "4d4kajvdZhqmpRx5vVRZC23j6wxwBnpczYRAkYK4Arqh1AdcN2RiLBM51ZaXGfTRSA7NZ94D7wkx2FPeaGdCk5LS",
  "key34": "5cwjvQiF5jqcABkSVxLBwyTesZ8Y3AEv7xeMncYXxo6uPNUeGW3kxWwxDd94GLGf9x5EStRiTXARsGprcPhWuc4D",
  "key35": "46XqoqviYR4D7aqGaFvNvpvTxFWF23LGY3AnPFDrniq4khaQPMWUSXEwSaxX3BFNTDtidPuHSqBhoKs3raGpHsSc",
  "key36": "3vnEwes2DyYtDpQG715BTsfhcQJkHqcY7JpUZx7QuvK91TiTGtAVDL5tUUMqykFaGgjv4jBMCnrj7iuDmyPFgEYF",
  "key37": "3vKGaKP3Z7meEMYYHPps1Am8QPhjRTTLY3XcdG7vVYRqKpwfxW7UTZB1pjMQxPwY9zvUeUctSWUsy6xn6T7KgraU",
  "key38": "5FNHFFJYwyDgoccKC1e3ZSzgi3rT6QKDikGcSigGskyreu9sMWdmDSdCatNQCf8b1PQsStZWyCTfUw7jzHfhcShb"
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
