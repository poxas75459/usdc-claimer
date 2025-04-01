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
    "5QEhGaEjg6bVUZ1qbE6pPFmR34pyKx8NVwgYedpZxzAcwczkEBPSkjYCgfU68qSrKiJYQqQyHaTnuGtGmahrLcHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62uBqsPNCJ5wBVLYYkQKQyEaaymXVZ62uvyX1Lxpg7ysFRUe7qytFsAkgDtv9w6grAh16wAdSQjz8LteeXt2GpZ8",
  "key1": "3sME4iAMCF6YjZ615ex5HxMPf3FJFBRfbuShEa5HdESFxockKutgzK4ckkY9SC1HPDqMfLayMtaEXbM1g1L3VuLN",
  "key2": "2RE1B4ZUxpeZvLcPzz4gCjKv26rwSFebpvHGchszgGvFKteMs7tfmsKunyTiyce38p8GL5rk5JFKuGQT3rggj5pM",
  "key3": "55PLX4fN73LrcCooJEfSUkZSYCgX2CBGgdkzo1YuphyE6wZ6JvZ8V3BV1XAvv1WFvd2vT38PdVuYmn27bZxTtGLk",
  "key4": "KvBWpV2oSVzhQYTSN4NGUKQ7gaawYVrfA7mEePDRrpxSJZLP1ZNmGyPtYKdMHYJ5ErMwCLCZoePUxjmagdE6hg1",
  "key5": "4vp4gRRKjPfAEWCjrNtRqTof589uZvSxAYZj9thuzCJwNBSperPfHesQhrjyau9WoshqVqmWLXQXjkscn9K44bRj",
  "key6": "4SF7JHnFy4PXKoEAjaXVTr7bSG6cPQdwjQT8SR4c94VdbUc2bjmjmrf2rci1pW9JUkasJprsgEuyz7cg7y8knGXi",
  "key7": "46CqaZpFStok7A1csnDeeSrGdWAxWSkj6b6E2hYQTMfsRBdE9BBj1KveF5uVCyRRanqpAquXwwBTro4yWs5oM5Cw",
  "key8": "2SaySqViLQhkK84GfX6ZuUBY7x1XZRyoXwLDSg62xECu57nvBAxsmTTGAyqEu6zPJsMa6v2yoaikGx4NijQoFDSG",
  "key9": "5pMvxvixNZKkJ7GfK9CJZi2X2CT2f3D4Qs7F4Sea8XPuuanHgYeYfXfxKPx7NHu1ZAqLhwSfvfazqz4pAHoNZqTK",
  "key10": "4bNXokUDH1ks6tPTkJKWYCJFHhUkYbQgBWk7YMKwXmXpnc9TA3sEJXRsnrpn9bvaTwze1w3fqpCao9Wgd3VSRYrg",
  "key11": "25R13VHQ9yPiamYtjgsgzNNwemz83SUEiDjpLkkb3dAXDF1yzjG9tiHikt1RTYVH9fH8pGfbPJvM5DuR78YQtoev",
  "key12": "3sARZ1wR6QQg3UCkcoN4YT3sbFEhN2bVwcCoDRB54ptwR52PeqmuCwQYcjbWyU78sWygTjFxMUshQ2zmgn1dDE6",
  "key13": "JDawK9V8PdmzzaUVtVMtK4K18K6QTBk8xBWz8opU6csovEd9ZDjbtamU3Nr6ck4XdRQMjo8RGZ3KuZQPuPKKZ19",
  "key14": "4roAktPuHqqBYHHUKFH8aw1AbYPPXUCU4g8YHMKALSctaUZu7vQg28vJfC3GHMybP9TG5HcqJeDBimfnGrG8CNjb",
  "key15": "468EAJQ2HqZMckr7J6dYS5RFd74Wt8rPc1VmGFUCyNfr3sBD5NTtjiYDxD6jSK1x5JZm952NdiGWLz1jnBqgykxH",
  "key16": "5fJFxCm1pzVFsTfbebuWVuLoyVohekFoQyKMzebeosbNX3tPajnh8ZwtZkbVbCFDm7S33pJEZ7V1sC5wqLCF6wB2",
  "key17": "4heBnkNeVjjQNi473dgs3oCGqMYsU7nadNUbAP4Puzic9XXnDRKb2GuT6Ms9zUHxTNgXnVpe6zDVcK8ceWt3BPRp",
  "key18": "32g2Dm1na3wzSHb3GPPyGwGfmibSwvY2CFay8xdraVSmtdBbytmvEn2T2Lk5t5Lxooxvp6Aj4z9Q4FfFEbD2UDqB",
  "key19": "3ig1dVAz2sN2oYkdSBvab5L91sFcZgSmck1XUFEgefvjYk3ym1rHnBUeLC9dqVEjD6bemxAbgMZ9EiKhVvN8BbMW",
  "key20": "5KuF7ddJKZeAjKRBMqBKhnquauBmsrJVxmgVKGbouii7rmkoo55VYAkzYSpDir4D3Q2wzjPGkSUob9N1ym8Dr5yo",
  "key21": "3Evn7snpV9FLTnxv45Jt4YDkpCHMv6iMehyJxrxMirFGj25WysttgjsobYyayqmrVM7PqJDL8yS1UihDN9yrS7qa",
  "key22": "Y12zrb93nzLToMhBJZbjNynPDwpTX2MWNBi7GEbCRq9u1NUjKzLhPRRVDqZJLBPprAwPUvDAUVoRsXgn6KkrJ69",
  "key23": "2JoRsMhLoZ3TLyob5qu3kWt24t5aPjMdmCxbpi5mBbrZuQZPLzLgHLhnDacSRpbttq3A7DG46MQAgQEumdwq8eG",
  "key24": "5uZM3uJqgnB7qFkBoLrcJ2kSkzcptNNrusEwvLVk7EcLkS4tJy5werZe9kgw4YYmQmADbGg11DaHrLJ6fJqt5ocH",
  "key25": "2Td2Aj7vbUZzXrexB3d5UqXURNw6TQyHx1F8nAdzKJNRUmKJMip9N2rHbVsdUpdGUAC1Bg6U7Wpffp3W7iGFp3DF",
  "key26": "3Q275En8LJzgtJ9MKXoopvbCs8DeTzQwEFZwuez4ug2UuWKJsABC546WHtjuZYfWZ4ZPAFE18JaknoCoQEaFg3Hs"
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
