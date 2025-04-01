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
    "3rknN76jP3TyYTEi7YgBDa7434JzjkJCq4RMEU7MWmrULFvRKKcdYhSnkKg3om2PkVMrS7HBRFmVqPLGuP3aqpML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K3KS6CuV7D3at7JVz3kn7uVFo1sJehDjBq41UuDW2y5h2R1cXcdR7xjGsJf2mtjjp9JZeS5fU6CW36DyAaHD7G2",
  "key1": "4x2U8i7iVsr7VTKyrUZ72TqxzyYGMy3PmKULw68KtpmZP3RysJAWfkMGkCDPVAv6onHq1NANXVpn2SWFFNNUet58",
  "key2": "418AJkMnQKbzXKikFN1zJHsPZCUzYGREaLVgopn4WWRbrgmUvec6G1ZR5VsbPMSkQF6bKiAB2pSTexL37Z6dREz",
  "key3": "3gHubVNZvZdVThfFZCxG82gYiczVs1eV99Q2s8bKiALgFCs8pFkE1idyaVhnWaMKSBuxsi4RaeoTAJCkYGihjRmE",
  "key4": "g9idLukXzpiyoER4tpzneXm6AFpmJVyjZ1ZsSVKyoZaxHWHo5uUEGLVxz5LZSbhmwdMUTqj1cXMkKH85qHVdqME",
  "key5": "m96QHL8vEZHqnRhBg8KXqL2dr7RfczF6dXiaNRRJvJsFRYAk2UJrePG5bf7Lrp6TuLygds7suDQPVL53zngPCE9",
  "key6": "586yxZu9re3My2ScPfvsyZa8dnas1ty59iYLidojQm74hrEEQ3jW5XDv5VCqfRZrXgE8Cj8A6eWPJjuHdQCFdAqt",
  "key7": "2CWRoCm3SV4ZkYcH7V14UfJZtmqsGxThLzjFakSpqi3ZgHrnaPGGd2sDkQCpiPZd6EybKra3EGYQgCZubVQGG4uJ",
  "key8": "Rwzc92cAa2euZG2c7bnRjF6XLCiX7xJ1VEBtMYQPzaFtaFrerz3zDQXZZrGyrECMmn7jb2ehyPfgbMQZMgHJ3Cn",
  "key9": "55XB7qXdtG1Dez5geVu85y44QweT62Zm8XixH1oBB8b3UxDoL1vCeTQVqGDkvPL8T9FHgBiR7VwJjvCA6WatKtng",
  "key10": "5n4DpqkbigHXpiBaypMj87ZcKdHJo285hfHiWpaCgcCyAxB4HR167PNpVbHB6DuCQGsw9ov1U8gTUrv8MQ9AF5RG",
  "key11": "t4KyDVaJyr2zbT8zmPbtuXqK5v5HeiM9NQ3NFmng4Ra8CvcAuZ19HcLG2Pz6iHrbxbqcNE2xGfjH8DRRt8vmA8e",
  "key12": "53Uj2Aj1gXAupvULX3u1LBPDxLS3gjEf7P2mvzdHzCpx2GR3eNYJxm2GTTfkqrTLW4NjZCK9EJcid9nLTNH8ds4p",
  "key13": "2XTFSaN7VEjuASXsUGyw9CTqvHn4KtttTc6mwwQLWq3TEmx3e6dstnibENHATMcRftv3X3u9pYLxqvbfWMy3qkUV",
  "key14": "2ok3cSbqgRMf2ohpH2nW9HTXPv7s76vmu4q7813TPHXgKqpSFjotjWP8gn7dxzRbwmzpB8YbzHyzrXSdx1X3wRBB",
  "key15": "tbYrcNLL8fVy2pwT9PTjsNPL43mhSxPZzzgheL2RcY3h3CqG4gqcJ8E8DCRdPU4M5W6j2mXLNYpZym1j6gbJnvp",
  "key16": "UmrTXzp3ipsZAvpkizpc1e24PQ26Yeq2f94dXAJFr48bpyVtFMHxNKHzTGtU37QZ8pE8Y9AkLNwJ1kmrxRkpXtZ",
  "key17": "5h4DXiqqKgJhwa8bKHEYkM2879meM9JHAQwbZtw6DpeYmCBb9ee9uyJtUB6819y2q4ztRDYJzJRNdjsw5JzLMETA",
  "key18": "4D8w783188h6J7wK28wuMxR7eJ3AQtH78k3Fp3gtBEhP1nMdqo7Wx3Jqz8TXNkbLnVHAxPYWUrC4WH8xYYM6TDL2",
  "key19": "2KS4TwheBB869ukcbbvvup1m8uE9vPphAxWj8sCYq3yo9x465JgDyTb2x3SxVZ8zPxKLVMMmDGJ78CCoAxZEUUnJ",
  "key20": "4hTAGby9kX2WqAXVhvxGhDzebmcpnG9yw6ZgfaWm5gDmUxbNzcdSrAR4q84buE4NhWQhRVt3n2BYVEUAaSqN9GfS",
  "key21": "8nP5BwdKyrpShFJ6yLvD1JeA6ZNPNiS7a35EdMix53CoQwCH5ZxwvepZypiceJ9pgimYmGSu94FTRBbXwK7U9pH",
  "key22": "WTeEERytgwsRFHcyxS3g5ocgqbAweXd33LM4V36oiXMMdeRndr9wxXwDKBCMtyZZLuxSzkta9VdfmhfUmHneB3o",
  "key23": "5QmR5e9HEUTv368PLc8b66TAPU5ALQfmfrA1YXdXUaHwgVLNJT5m9hAscvCbAgnce7WWxCA4DrjztzkPRPHowP6B",
  "key24": "3ECBzSn3PqXaPaSvMtU3PK784XD49RBnV8iDdm4zH7d381YJ9Lneo92yMzwQT6RGnLusXTk17xAyUNsFhfocMPWs",
  "key25": "5BSoRnkqBHDsM8rp7oc6uGop7mDwSVn3wkwD7U8NbTL24GubK6QH1GDHAvhP5oUEPQe5u7FFQgryptqXX5HeE57x",
  "key26": "2dMVZq3KLqAPbXDYbtQHdZud17awQDoaG3VJ64xVMJ5vQLcFPwEkPZf8YxWDKt6HcUZTrgQMzjYAsLw913yn8XjT",
  "key27": "6D31taj8EhFji4WHGLMpAEuAVQdmzT7bTHF28cw8ERqxKfF4GkHxiMZC9BvtSDDN2yFMHJeG4dsbdKqKkfLWmX6",
  "key28": "2VKwbo5jFkoP23QY5JJzHwA9EHHWirzvAhRZk8QXr9WxBTQf6X46qAMjghLvF9QAbdQc9nRorQdGMPfx1jJaj3mH",
  "key29": "iRdLoF4bzBMEwmFanMXr8X3yrr9RC7uDu8hppBwregYEQoM7sEE4Qthdkz1aA8HPE5JZQ9zvcQNp4ZHC3Jeszoc",
  "key30": "4arTaJE5A1FekUMXmVrJsh4J5Cwd5p1f6vFYfmJJ7ojzaAH8YvUtXHKeLzrbh8YtvcR72Yu3n6P95kkmFmTx6pA4",
  "key31": "3zxGWwdPvsoW78QvKfP1Ti4KAnhGxdu5eEnXjvSjR5cYQjuc8Tc7biaN19dMVYT9zmyhYtqEbKofv4Jp7YP5gxLx",
  "key32": "2yFty2aRds6XHHz7z6gfZ8FTdHZtt4x6Gz8jKHDeejQaj5iK716ShWMoHZsGb62kpK6wWhG9pZnFBFBY31qa3Wa3",
  "key33": "2Nr1DCVYe45PJ6isz9ocxpc7iNnZKd7pUpGadv1Aq3e3ZAo1sfoSmz7rY4ZpRYbJL5Wk6N2u8BMkPazKxppVcMGL",
  "key34": "3TaFEWfi7DBgaAHoxT83pP7aV3iNdLAYc29gwAn89E92ZfyW1csCiZVF6u5w6jSJPj7HCCN7jpdT97qY4KVn2TvX",
  "key35": "4VdX6YaY3uJnY5JX8TXn5969X4aKts85vibhdPbi5onbUNkZgCJyLprRMRKxTPm9gcYHGqG2gjUDkiqWVWdK5web",
  "key36": "ubFhAyiTtP3qmtSuj2iQwvdNfVuEphnnQvxiNz9zzqkD8G7d6xRRcFh8UTLN8RPZ4Zs82nxXn2hZhpmFwoiALLw",
  "key37": "4ubazJpcRPqspa4q1c7wfGwYEuvzXF5mkjp5Y3DdmdaNwaQrBcj4RC6eVxCH7JoUcPvcnvy3cTiKYJGCUnZwWzP8",
  "key38": "5CGboKnwERAbAtWjTpH24sLqzh1AGwTWhZ2kqZVEEB5X4N4oYLWkLGHdamPL6KSz5om662Bzrb4s6wbjtcFAtP9v",
  "key39": "21rG8qKc8Ccg5rKhDWJpmveJCqXyesJsk9hptiudSadVj7yEUHqn4LkCSKM1nvE6BaABRHiYWNq6vQRr2JNfKyLq",
  "key40": "4eYMzSHVSHDiNh7b8XL8nUfVo9ic2soAusTerDY9GBt5d2vxgW22sKpxaY9bjj7w12F7EKXTB2bvuKAwHncVc3yr",
  "key41": "65rpSJydq3n89nSMWDZkxe92m6JF1uUEe9MWoiTby9pWh9rPCnsohKkwJbP8cJuyY1MvKAxBK3wgyF33GJQkAr9t",
  "key42": "WbZH44nh67QL6u5KscPLJHt4RxYaKciDMKxZboiSDLBPcQLf9ACPNBPtXhwrNaAKbYR2i2SjoJeV1abNDRK2Gdq",
  "key43": "4RWFRVpNSUhWTAwoG5rwRwScistoufX3weDqHp2d22MHRhWNNfUhKDPVtbj1qAw4czGvn6v23TkVZjd8pqHZEXcp",
  "key44": "3tKKHo2bwUNaaYRQK9FvAxpHfcQhcJvGmuaNymQRJTrTqjJHMwo6piEHyrFjeFF1X73k3SCDevASHrrvzRmzkppU",
  "key45": "2PfnZ5UFbnErjWJLbC6rg6dRpwaVxCU49cYi4ptB1AYHiLPv3GvccBwKRuuceu9ye3dTx5wUiK8E76v5QGiHZSxL",
  "key46": "2FaZMfHNTeLoNX4W4vs98uTC9GATq67a6ZQvAa3rzKXDWaGaCy6Bcb53ab55P2RUFXkKs8kHm86j6rKE7iH17c9v",
  "key47": "3Z7gJSTtysyCM262gBZXBufnEXZ32tgsUTaMx9weLvrU9pP6NTiXoivH4VJttGScQ8qUoLVLUHPCDNKXERTAfkKP",
  "key48": "2kLePgkanso6tKop6RSAnAJ28rEHGaTSCEJEXxPDQaXBWrqexo5z6g5KDbdKBekauUFTGwAsF4VRX3559mv6PHKs",
  "key49": "xmzBEwMx5cY7ss2TuqRnzQPQyGHeytdY9d2nafxcMA6qCY2BismxEQC4tYJkn2YXDW8crei74PdPBCL1D2JsAxk"
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
