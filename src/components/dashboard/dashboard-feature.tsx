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
    "5XHfedKv8GcNthitdSxa8rLBHFGtkZtuBGPndeH9VB3UGb8dKDUsL5vGyh4McctXrQCXpbgBaaYRnY7xVXfiDsu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F1uMhz7HAxQMuVDP4nVKEsjt4oea6HUTRuJKZQp6b2G4344DbghvzjiT5Zoj4m3XarUh7vXFSzPDqgn1B6Tow2j",
  "key1": "VbpRacZbSycejbL57C5QcNdz73ytdHxCKVttMtXMdRRXQbjJKYCDKE6eoV1S5PMvrtLbDNDJ9qU2KJvgjWH4Hdq",
  "key2": "gPMQMbyhL5DGokpJmLQFCNg7mH8WU2MA5dJtCrn5niV8KaqFgR75XFUUofnVrCGikLLNmuTHHgqCADm8UpWY2mM",
  "key3": "4FuULrVcKvWqio8kwLUarmenLRYKreto58oQne9UDVnCAUExv3qZqKg9Xto31pc6Lx27VR22tNeAtRHkb4xsCfJm",
  "key4": "3Hu58cHZ876ipQzzjnugtYeYiMMH8V4ojK6DXnBbgJ84tuVoXKBD5Toy619RfS73M1Gfma84tUeAS9khm1MtgxA3",
  "key5": "GspBKnwN6BZZDw8ydVKkmsf9cJyTn8sVNcL983jcTU9f799KBTy3DgwgzUN3b1SPiTdfucfK5ubaQ9idSHCNGv8",
  "key6": "58uBwcnw5Ef4EGSHS34QpidbUf6vkHtSjJrfetyqcUZVqrLgKZ6sEroaoNEzPe588nLzczSCSLyd5J5JNU1fDGjn",
  "key7": "252CmQCqyRwVbkSGGcf1JiZiu6dynS7ZYQHTxLVbmvZpqZRtt7RZXFaZtTmxzvKZz7BHY6ivMLL3DW3BZFHphFtg",
  "key8": "tGKix4CiQg1wkT14fkYLvduFJ6UU5B1QivMnji5xfXyqrtzNwjnUk7jYWcRWA9LHpb3nveJSuNAxouWcg4RVS2r",
  "key9": "MtcV2YrebgBRW6WCd7XpUF9jxh2aqgCSx9S41ZjVHcjDNiRkbqvCadwbhcL5hcYqRpWL7x566tjh5gnpeTFuMZS",
  "key10": "5CNYY2pcHtSghabVtNCoEwt2PGso4xVpBCBzHoWTrTtQXL8C4X8jjkb3vVCKbxwHgbiTXALUD2BQQsUbFVe9Dqop",
  "key11": "4hJpsRLGQZbVnemTLwBdtPf9zZ8A5zzhxrM82i6DCGAAzo9za99TxGjMzm7iFS7Ei5DMQF7ikeXUsX158gBf9ySk",
  "key12": "42PxspR78qUu7NWiCaQPyrEQdt9bKVn6b3KqV2ey6KZD9oCs7Lb9Moo5xWaNbFwbiXP82sYLnA2iHPezHx6dKWSS",
  "key13": "t9DJTJ2Es6xo3j1aAhF3DHg23AArwXJWiaGLfejRuNsaRiVUVd77QooecThVAhXEWXT7rD2UcLiNFGGM1FE7ocY",
  "key14": "2eaYr6GuQumatiUkMjY7FhHrVJGGjZ3JWH84XfHbrQtZSuigxuWb8shS71Qk7SPKhenTn2DtqYuvhvuNQdTUH3Q",
  "key15": "4bKE221yq3chCgdsdDV2SpNbEzXhXChU1hTwAM62ZC8fGuf8d2YKQjA8oodXyQCZAc6oYy874a4xr4qjWdY2Uxmo",
  "key16": "4uwSTi7ujavYN8B1QcDYGFtcVKHfKjtFR8PEYRSXT8ynj3JMjFGkF6z5AaQWXEA3yk5bPi58GRjpS1ZHdXGbiET3",
  "key17": "5WqqLrUXNHiwbJe84fvWKN4RQjCSUkWQSgmEDWCKZoqhUJTcVgZJu8TJ6Yt85B8UosJi2X1ectpzDPM3AG43fs41",
  "key18": "3DKTZ6JdWcPXfcFb8p9UtNrprY85vTQRwNHxUDsJpspMUUzCbTtiVgB2WXdja3j8H9JJo3FmLQc8p7SnLvfiCqBu",
  "key19": "V8c79WQU1G8qbkzNevymRC9nGDSyEEFbo3ejEPqjH9ThkAuL2kKDZ4to9US8VgA6PtTkEgq9fskEBB4PKdjwPpM",
  "key20": "JuoMHYiGS44MoCAmv2EXBN1qJCTv1K6zpPGtAfhdEpsMFVcbN7asjYX2J7uDjtLGoiGMdQMN79Jmbp3J5PFcjK6",
  "key21": "4o8gL5ZQvuzuwM5GpJaA8yAhouV5xePdknvtbBWV3DotMocLrkmv256bcxEBGETXmHMS3nphaJFKW8dr2GwP2abw",
  "key22": "1P4EtqHUgq1GU2x4Du1YWgZ1pT98t8yMTDbDAacFN9bqk6nLtwaaki4WBL2TsUK1Aw57tXLEKifhTeMXCG8rF2j",
  "key23": "3kvBtyzFenXSRy97q45tPnaJCDRh2TDVGZDYUbySNEekzUJSzCsCzZKaeW5hvRMXKoJjBL4pz5eQvMvYicSctuuN",
  "key24": "ZCfnPJqgc3vXrjqXwogwWozHm7KbbeRm6wfUQkmSCmBsY4ksFmiCfpGUTVVpoGVL5VV5aW5UhFB9aYTGmsWkWse",
  "key25": "4HLjeDchSoX3Z3maGycp8Csw4xfZTAWzn4FDcsuSWC2K9WAMFozya5Sc8f1CBjx1rudsRpV1ddCEiD912jy132DK",
  "key26": "2LXMreJPQngzTVDpmePg3YsRsUQLyCZB5xSc9VV3XRLer2TPpAeynMmDA5L6rtPQy2YTZhritq8dVSNG3W9mSUyV",
  "key27": "5CopvvBUHScB3X8BJKvvUrJW5U96kqmeR1Dy4hZCvJ6wZZ4MZLu4A91cmhbkgKDysdCNwQjFDXtqAwZ1HxmpicU2",
  "key28": "2TbVdtZT79jxiJx13sJTQoJvtRP8Y7w64V6E5ysXpdFxE3hNMa461CTd23pssVGLETCpyXLpgBBKaowqcjsz2vws",
  "key29": "3R2zJph4PXv4NSagW3pVJXffosgjcrpfzxBUU2furNQQeSJHM6id3DNNtHDEzBwmGTSL2HY5aiXj3roEz69j1Hyh",
  "key30": "5D7B54UEci2HFv7Z4eYkoLxLSES49vs2xeVAXxe5srNYsFeAGkvabnKDVtvi9kmDzwBvsocQvVWkobBfosorVwJ8",
  "key31": "3nMasJaEV2Vj5HmeVvXV6esdEJ14ESSLZPauUg7YnF1ar29nR6JcqZtXd6ja8JC8E9FKpAg8ri1qTqAZ6qhGT2jn"
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
