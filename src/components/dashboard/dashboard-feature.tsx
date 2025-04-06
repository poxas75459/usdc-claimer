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
    "2ZTMGpuCUFWDaWCgdcZGLbNbW4xnNp4uPQJGa1BNdGaboAzjCX9FA6GYQkNqBuNf4eZGHKBMbmHKfLypeaxusX7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3xWc8x955PA7tbct7FABuw7YvA1r6AuMvoKEE5yaKMtBs76faGQd5pbGuCqdovz343axs5EDXbQehJyFqNfU9R",
  "key1": "34XVTsnPtxEg6RiHgiF9dQQB1ZCscnqaAjUJyYWop3QEwYeQi1N44gWJAY9p2gqtqEr1VYdcKWG4x1YW2cnfFnCd",
  "key2": "4oJkS75xyAJgBgDdA8GcADuiEctwXhKL7MnMkiLkGw2MzSBeUp467BeMizygGa85oncQ2mfEQLESpF4bovwrR4cJ",
  "key3": "64sYqJUs4Jy4bWJZqjifQzFUE1t8E7QAwZME6zu4onKFvDrqpa9wnP25mrR74r8CLzuP7QoidbqdDcJpYkJ4xNkr",
  "key4": "2RCW25D3EP8qmUm7YKKXQAjyDQ3fkwxFv7fu1ywoHW52w8Aekzd1cLVmtDnX5TueTTSb6xSNG5wDhgx5Pki7HtHJ",
  "key5": "2sn4JgVwL6N83pkfAv6mmYNnF1YqCeXWuM1HzLws33MppMdHvtZosiPnNq9LnawfSPUyRRw1BYhUEkrK8JpL8372",
  "key6": "634rmdJTRrGvAnczJ6LBpXTpNwSCvidorfabLV4o2H6hPhUM4Dm3E9CjiwbJ9jDLdsRcLfq7vvk8ZGByFy5TEGsb",
  "key7": "5JpSkXRWVd8DU8Xg2MYQDqTcUFJsveyYupmyhF4dgDRZ3yDCZCPuiBfLryU7zuwMq7YgP2jqeKdTvT3tyzKeHv9t",
  "key8": "2cax74QvSBvWtSEgdXoYqyoWbiuYWEDEy2bRF3SfE5swjfgeRM7C7Z6CSfyB7SC4hpQqtMuYa5J7ZTFhtgHiTT1L",
  "key9": "2dLtMAUebdxyDzrrkT3ztBZPNyVmrNjYCjcKdZRHwbzEk1aKuooEpdJcxC64eMpQeQeA6nGAcH7VoVsW6VjGV8Jk",
  "key10": "31asfo9HU4TeTEzTicq41ZnJRivkgfSfqv4UNDLqW8LuCGqFycNqNvMkouixLpLoio1feMjH1a2mAFhg8CrhrVu7",
  "key11": "2zt7Seem9f7tEXaAk4tnLfjDvraazM9JcuAPfCD8XqB1GFrQr8NN6BwdUVwV51jaszvFK32zBbg4cCBhXymhEPFb",
  "key12": "wFv7d1J4C4hgFpYi5GeEvTWnNBUBoTVgN4qPBY5DaQpNNKiwFuQWctkn6gP78i6pAkGJ5z8U24odkQoiWk8y35U",
  "key13": "2onxLXdPjAJzbGRToT3mceP8wAm49o8HzMAarT53vmL6enYB8NDgCVQZLfRz94vGsgsHEdBtMR2bwZQa567BZN5X",
  "key14": "3BF4HnA3Bsr74BtMe6AGpbkbuUrUAwy7G8oH9fv3WLqzybTc2q5bE9reBQaTq5sCUEvVdJhJvWnc351FLf5hhZp",
  "key15": "5erdWv3FnjHoSE56tB3fyynsCbdkbgqQ4iG7JyAM4ufQ95cKrNM26CoN71FuPg7fceNUAaQL9p7GRmWpP1kn7khA",
  "key16": "2myZTrfjZGuXbFXQYvEfJ31YNKwLJwgsu7tiPBZyvxPjQ56qkVum9yvMms6o39m7w5sJHUHr5gCaYw97Fy6FY52s",
  "key17": "28pQiDRrWHRHpTmvJgAxpgGK4tbysEFinMrco2KWsB5Yvuc15T1dLPPr2kC3U9Q9c9xZBCfnromwa6ZEz7xPgEuS",
  "key18": "5KVdxZapYdUFxsKqzzrGDSzzy41YVLtg2WuvWu9Tp8xYSn77jCFjg17vP3vDcgP2dkJ5MFxXhYHuPwajc3CuJMMv",
  "key19": "4uNphtumxBaDoduS4CXQZDLCahyyckYUd3GfqyLcihSBr8x6DQ178c4wpyTC9nGuJmNtqp5bcGFxQUmYJ5tHK1cS",
  "key20": "4abSfNrFXM4N9t3UeN1RbMLG66RGRbZeX2dMvksBeDNFMHcRUveP3hbopGL87rTKjb8fofmQnVXzNEwwFekK7WJY",
  "key21": "5e8oGhVw9P48GsZSas9oaq1sAYJV83xq6M3E8WzWjUicXjHHDgLrWVgszVoVqX1dugZHcQwWDponFzijrnGVNYFF",
  "key22": "5CDbX8rFKE6XkbQtFYG7HxNr9nvR8ZxP7fRytAWbPUVK6HJgtdSuPQfnkkarccL4HUWgz4sgs2Bzhrry1Rz57Dhq",
  "key23": "3bMeAo7a5PhqkxtoEELYFt6h8hspNmjYJUwEcSL4Y7BSGEnPyyg7DpHJUhTB8kVhMVGN5shey3DwX7yxspqmRSVZ",
  "key24": "XBnSUUHd8v2opR5MivorTWZC65tXWKF3f7LathFLhLcE7b2Gg8eLz6EPaTDP87kdQneSNg6vHWhGrzJ1pHejc6q",
  "key25": "1efoRApTAGCCaYUxpch9YQvZDazuoPYMq1FTEgFVk2oK68v4X5cvEDERwD3c3MgVZMVkNSjV2EX6rY11V2eneUc",
  "key26": "2sq4VCva5wNcJaUeEVbnfg8vLbDShNR35ENAHBhcTsg1C7BRLG7g85ci5GWtNdYtkT6sk3p1dJkD92omfrQDvvkP",
  "key27": "4rB5stme95ZuJw4NqCmjfdLfyb6go1jNrB4Sn1wzFE7YSMLrm6pg75jz2Agtw13qMh7a9QdTAV4EncgbjHhSQ1DU",
  "key28": "5vuskNUwUZ74utvgkmNEw7hKHYft1NfcdALVzzotLcR75Qs5spk4dWyeJv4NwJrx4GvnLQ3QQhTXVDePeV81RNSG",
  "key29": "3AoCfnr474gkZhxpYJQbz267LqnW3Ti7qegRAmBpQG4KT556nPdiriU8Epbm2T7WKGCBjehc6pa1gGjGbLVKVN8z",
  "key30": "2G4EdLMnGcm5wgxaR6uTLQFfPPUCADnLskLuJH2uGX5JkaDqH4zpQZG2sNpaAvb5SqsrDWwebvu5KcePWrdtYuXH",
  "key31": "5HmRQhkLmrPAUc48WG4ySNFGfMcexdiWhTudrx8frLJrXtY9fHcbwwpGxX5k6By79BTZ5vwJQwaLDoqxVAG8gYbg",
  "key32": "4xdc8pMELZsEobfYMNDSdN7JQTNJdq84fsV2xi3dNEnfbmdo3BQ4pUYesDWbuAgkDA2EagbEZ53edky5ySEaqaPn",
  "key33": "4jJxexYAV3Kd4ASBt9W6DmvzJ88ZrA32LpRwic2CFy5LpjXM2Po74yiWQ83rbH7P2bEBP5x5WGA8q7xEwwishmmg"
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
