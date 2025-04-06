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
    "2oozJ3BHeVeemPA8XGdzJUPrR6ZVkVmRkb4LnpoHsFAt9D4UVEwv6uW2mNSdDWjCG6z4f1QC48sQoaHnAHJJmE4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fxNrNQXDxeJDVon2pr8J8Nn8ixnnJsYpZu2L6fYrfAz5UnpCFx18Kedk5Hub1MV8vrcLjqAXcBQzNhKurTVBfAW",
  "key1": "3ewYsWhZywQc4QKVo6TLcYWWpHyRb3ikjFHaSQDiJ9pTGQKPx7oaH2vi9nPv67EU5WhtoGmEXaWxYgb2uBmjScrY",
  "key2": "42XZws4wcoCfc8e2ek1ne4SNu3mHLpcUbYJFMRQRoVB8iRsUgysjtwKxsuAcMv9u5UFh9aztL2u31jNejL9fP3u8",
  "key3": "2BHUBonppm442BfG34MRRrhW4swL98xPyU3XViCdKhccK7QjsKoZuJLDrCiG5MQQ8cCRjcmndwjeyZijziJbGgn7",
  "key4": "229dTgBNTvBqoq9Pwsn7UQCkjnfBHbHy2Vf1yddyUaGMaWFGEy1FENZTvdVLxUNerZuufDMZrNHMxDq2bdZT84Kx",
  "key5": "4ma913wzzf9JubMDkW8xKWMyga8xgtzBs9UYNV5EcysSZFvPWJcCsGBck9CEhuwAw4jcAqqw62nm2XxXQ6ktxziu",
  "key6": "2FUQREE8mF7D9h3aGzACQkc4iQJoLq766y4WPPC85nnH5wYJqXyhqKeeYsoGdHp2UWKNK1iqNDxmn3iVd5qGZ58a",
  "key7": "612UmKiC5j2TdZTZNvUcjmVTSQpHxnjydvQMR99R9WxB98fF2Hcj4av7WhmyKj1A7hZDxede4eFpTJTFWgza14RA",
  "key8": "4PP3bvB9XH28Dr3PfwRFuorNMiJMEXyrwS5XynDBws5wmE9MFmQ7vU9dwpBCkLTF52dfCqY9XwsA97nxtqLEM7gV",
  "key9": "2GjeD7bPuDSmrkrbHZNHs6LzSNELi2LJk5ga7jePwkZUqBgQBHgS9ffA757DUSHtS5siqo5nmMMSZaMqq41Tif7u",
  "key10": "UdExYzrqHTQ5SRCmrkpubi2KqGsexZ6TqSfr3cmBPiPoMx8Uka8agfuE2HUP3d7vLgvA6oB5XKX4ZbVwx2r8J5Z",
  "key11": "4WSSHPy3HLsPEH8uYpKV3LxEwC5bnBraPBpDm6LDXkZiG8FFCB5QP7oYrHhVBydcy1KC3KhqUU1nubwZGyi9B28s",
  "key12": "2PUH54vUKmdeqmPbeUDb3rXcM1uS2fgvuPwVdZAgtbbBvr68ULDQ34QfvAtxVUf97ynbJbYSBAXDgo2bbnBNYV7u",
  "key13": "5Gi5gvv6p5dHJkoDbBuErjU5Sz3iPit5uzeuQ4seyHzWC3PyP4Vjw8AH3CkEFkFnPk57dgYLqZmJnpAqNQVpRK7w",
  "key14": "3tHtg6qqGNK6BZ2MLc6PhwHzjFSvRGefqRuwR6DH4x3DUxvY1CXdswFVKnLmsTdz5di83GmnL8BpCoZrBXQDuRRy",
  "key15": "26YZuqR5G3uP12dwxEhf9k8YuTMHAJZmiPQqXaLwPtWNGzQxDKKkNddT4qmSaEFj3bdmeKjYroiixQCkKHjuVRrk",
  "key16": "4aCtRdiT4FuAPigJeqKjd78Cgj9TW2qVVGKVxmq1ximUYuNCUa8ChZZteR61u8KBKScETRc75XdnAd831XKV9ZeZ",
  "key17": "3gfWrJepzgLRG1SDQJGfALFApviXFjwiAHfp1eeyLezSzpRodtLzM68kZtjN7iG1zx9XB3tpVj95teQbV3Lz169T",
  "key18": "4f7ZhyVPdsUMwkDRkcfgmcDBEQrGrSjESrUjpds5Prm9AX4jrN97aCMN4S4As1R4Hs7wDnB9EUhSovWX3XdHcuJK",
  "key19": "WYuwmogkJ1R6kf39PeDDC6bcByouyzmTkL9dNsfNpNg3eKrW2ryeJBFTHXQ8CcbtQiau9J7ivd6HiMzHmMdvnZo",
  "key20": "4Xs7AtyM1jRnXnXhg89L9ELmYndeMH6NiNTrsVC3Dro6E48M4JHVK6uwpdGrAxHLqGD3omjUSLmSKgRFr5in45We",
  "key21": "hgsTr9CN7jBpjMi288UDDU4wqijTNBZpTktX5AWh5rnmj9S9aJBDCHEcM1Zr4KdK1mRc3s4Up5GoJg6odL5W8bx",
  "key22": "2FBQbECugfNxytDJ5YojE4tLa1cSjGPWG1mvcG8wTFxojaLaEsChMpo1EixVYM4sjFk5cwyTcuhSEeSrXZPXcS1F",
  "key23": "5NiUnKxhJ58XzmGFkFcPdusomiMNsbyaEUkwcBojYwSfdy319QpCaxWR5BLhsiQ3V1d8SPvttto5pXBrGHUG1r1p",
  "key24": "61sz2uZ3qU7B4FGudG9SBKHn3DBkDxURwMmML9ULJ8N8vqTiC8oBxqF9fZd2Gvwb4CWHWH6oycxRwJLu9HJ5SRrV",
  "key25": "4wxRegSP3GnzgpCvdwr5KyHRSbJLZ1qonandkVv52WVBMDmovGJ3YN9Gu5uJWbUDifFEZ6Kyc8rgcpJyJwcbQRyB",
  "key26": "59H7U11xoeE76BNrjm8dRBtSqviKx4n1Pmz2bztcrr13meqypxGDrnwvk5at4fpKLieM1jjbtuehKKShhT3pT7eC",
  "key27": "3G4XJ7pXhDR4kSrqkg5L8EezVCbZLeKF1aQEGtoyvCYGghoNc1ngWQWWosT5Q6HiyHfnXU71Jn33vjPTyTz5Rbow",
  "key28": "4gPki5Yn6jaNaP5bwYRHG16Y1srxTd2LcJkg4oAU1jme6f9TmW8uXd3zNMYn6Aw4jMpLKVDqwHbZiwmbg3F1LAv",
  "key29": "4q6jeBLx13c5fZGFiB3wAwCUZ9UVAKVKdKMnLBbQTCc1cgLsBdpTmgPvHXkSe5M2qFecy2Z2Dg4eQEWJNqsJTdDf",
  "key30": "5VYN5fbQK1f4QFm19pKJBe5Aha8DAm3fyfp9ScMe3nLU2WoFVZErerMYhC8n2xjaaDp6pRr7AdcC2r8PC77fBWdt",
  "key31": "3BkxuseUJ4uSTCJAzmCmCScwLEnFoxHBbpxPcTbZzztDopueMf1vDTLedW6enSPVvZSkeBNvoZjSK2gRGRkLDLgK",
  "key32": "CAKSoWuQVsDe7JN7tnC5kCiG63VPWUEAXKdm5ja4Vgh5DSPPVPH7kkMv5L1pbZkaSU79HqhH8YpfNpHjQKvtDy7",
  "key33": "3eJsi38etuP16FyuUmKCePSadyA3gLBwSgRH4ZbJhku67Sq7xKGYoURMngMy9xrbF9KVsazDix259XrsSsv5vpeM",
  "key34": "VZZ4dx8zeUHMSyX8VudGGDDBpn6HZojvSgkKMp8h2LkVYMngRZj7ETra5UdcNznmGB6GSFJ7dUnpYYrECupgafQ",
  "key35": "4p3xQeAXUfSFTaAYSwBrWvBoed9hBSLfUkjnX8q5FezQut4JsMr86ehEzoXgcdSUkfpRqWShDb92HdXrg6q8smim",
  "key36": "5k1LG2qxGhYPshtzT49d96p258jZzhvaDe61MTWpCSVKuKoKZjUsvm2GWZrjyFbJRxTQFCVJsrE3Gf37x6eMwcth",
  "key37": "2fKY2JqK4GX3a4KnWJVYWev6ewpv7WNZc4nNuzLeGuCWHTNP9R1v5kkMxGUebx6Y4CA7B2UeNZZk8G9JD4BQkNEf",
  "key38": "8LpbELZF3DFCpJtfxBxo989i3y7DDnDp8tjeQX6equKvXo32sQZoagzQ2iry8j4x4DX1Wp9Y6K2ujZ9uoBnu7Tg",
  "key39": "4Hr3wY8ePcJXkDHBc7nvHySMGAn6BZDoDDTXmPhhS3jXz3Hp1A6AmmJuUADTJuUYogBjG83dmpUUDsiAUCwEMkxD",
  "key40": "inHNwnJ6ZEbwAEBZcsCLRHMkywstc61kXfZzEKtMPx8nkjG9JRfXwrcVQiNUMGaifVPUCAHzrshDvNHjbM8Zoma",
  "key41": "2Gg6avr8bBNAN3SP6dxPCjr22EArkNvw4ag8wyfCyNuuLRFwiikcx6PSNwu9WZmp4j5mjHVF4JCCCKEXpwFsQ2en",
  "key42": "387WEnZzV7PRdD444hBv62frAe6WBdomfKna6aS3jatvRe8n2Po4pPVN2thbavu8tgMZQ3ZE4RdCyYd6sgXQHJmU",
  "key43": "2a2tXJhrrC4v6k7RZXmdEpMVJZPhHcBAB4JVsp9Vhw6bLErdHrRUxdz9icLZ3Cyb4MqMtDk6aVKd3svakcgzKZTw",
  "key44": "4JrBDn5m5LEDnh1fo9rMxP58L9qhrtqbzMUvJoYUkiBC2JTnvtcpPJHVQeTdRfPQhH8Dmt3t81wk2XrX8ku2HaHx",
  "key45": "2Kwxbo9neCuVtKE9BirHJrMFaNaxr7hxc4TNDqVdiop92tqX3YgT6E8s9Bq1Pzgx8CxKKnNXw5X2FhJZZt3yhdY6",
  "key46": "tadCRKgFumnfCvcqKw8PLdqUKjoJcs3eX8JqjcyGcK9VbfgSJEZECe67PaGf1WFGJU9deqKdZuXXT42c1TwXUYW",
  "key47": "3wYyYRBFmiTNN3mXsXiV6pXmQmHa5dS9yLxFCHchCm2YTMsKG6t9HUA7YwwStdd3KiYXPwbrRS2p1qxfHqWomifj",
  "key48": "5DVvHihw7raGuLmcwnGhs2PKTxe3o43313VAkWPeC8dfHfR4EK1oitBup3ezj5F7JVcHnoKWK5iPjfbkJQYsNMAx",
  "key49": "4vrEa4dUzSsfS2tdjYB8nUWSvWcuqRXAxeF1mY21NHLrCGVFs2ScHZQNxQXu4TcHhz7Mv3uVBLWfDviUSjtSv4Sf"
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
