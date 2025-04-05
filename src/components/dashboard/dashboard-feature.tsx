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
    "2fj39KruAHfyhtyKBi9oTfWcd92b4TyNkMe6WnNwqRAVmqwjPQydwLi2BT9VaeL18wq47t65m1rZUikAY1hHecMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ljyq9pM8izFXau272a1n9s9uJcp2DYWb2j4C2NfTKKZ8hqQfjpv7ZHHhp6QSh9xob24DRfu4p89pfosyx3MzPqf",
  "key1": "4vYWpg6Bz3GnpTjceqdGoxY9yMG89etN1bbKhqnVU5LhYJgb9kAqDBfn5QtAUTcmtrkrghBLJ4AvTxLbGczDwXYr",
  "key2": "raByUewVhWabDvmksqyUCgmugjbHeFqEktDUwD5B4QHkHjPKW35EFtR54xaTQMTvuVjLe8qne3fC8ZHv6Xqu2Rs",
  "key3": "4DrA3CUWZM4WSom6axW3rgPp1EjDzmePZHFGh3s38tCN1Nhwp3ChLp4WhwZZMJvDoWSohL6yzdVYWuT6zKGcJNrK",
  "key4": "2KreDdZz85W3Y9KXD4dWVURLrLBjtFpGviqj87hXBXVZm2phjepfMzsJVhJ3WgLHt25ftnCMnkxx8UVeHa6wDeiD",
  "key5": "2byrXbJrYWShmHeZcWYt8e7HVZT3QrkNE2H1cjkE5ZsE6j1D7ztDopsruGVQvJq6K7KB7M7usezcs7ndstzD7Wgp",
  "key6": "4dYEV4CtFi5Rv68vzEsXWqp2u3sSTst34XiWpezJHw42kT49qn14rr5c2BhiLLA6UrXgdeGWYHcmSckq2m5tXuWf",
  "key7": "3vVLsKmBX8VTiVzaENFNSyaXLoiFrnsTuL3J1qxXp4g4cvg6emCF3M75yrfsj7pny3FTY6ho38YQugEvLgVdP422",
  "key8": "3YTmcaQfXpE2Y8Qte7kh2uR5jtSefxtWa3SVBbWyx7t7akZNPpFnz5Cr21NSiguJjugbP2UGt5s5X9DY7M4Nppfi",
  "key9": "5p1skRg91WARNPM4tMp1Kq3dEFxA92tn1oCQkGqLR8bZffPkaeaPQtDVGpiHrbHtR4XtkSkidvTJjbsCpwJbNcor",
  "key10": "fTw5TCUQqFmZn869xvtgDfLpsxpnYLHWQzh5GwimQywg7Y5zkJ2jeF7L3nSWsXiv8gCGExV5xbUrdP29tVD1GsM",
  "key11": "3mV4mbuJNubJuqCiUYXX3WVzN18AxTr2Fs6gu6EPktq2f55tFNUx6oLxunmYuKMzuyDv6SgaUMhHzWW2bMqSFsgt",
  "key12": "3LXB9Rt6UiJkcBSuj3sdM4RcGFj3HJk7eYnwcYz9cNWNFni5HCQe1oagSbZ1ydgDw5j7HigAp75AMwyYXdMmQb6F",
  "key13": "4nxnhYd4p57iMSs1C7rKLjFZQRAT9FWxMpjff2RAGwRXVqN3Qj9L6hr84KvYchvgMJ91PfxEHn92DXnSUCBpydDh",
  "key14": "2UNB5SRZqixyZF59o2SwkN44hHSsSFSPnZBagiq5Gns4aibK6vhvdqXBZriGVh7UQf8w6uJ6uf4QXXtxmCgJ5Wdh",
  "key15": "5Ef3RaEGpYtdrusDgnsCTWrdZemohopsqF5YjC2Z9e9wzEXgkcC4kFuw5CFtB1sigwgoAHi7C8p2kAgGhsxeK2d8",
  "key16": "5VFrzunPYJPy6c8ui5kF7MaXcke99P3w6d5x8athYBrVYKGf7eZY3Q9JvTNAuVGYkKoVks8uHrYyNerZuB8wpKHs",
  "key17": "3kRSDmjMjjFwasaFSkTsNQN3vxPbxNHtCgQpfPaQT8dGYUiYvHuzMfKQxfWu7E7qaNFi7uDgR1S9CEctJYGzTR4z",
  "key18": "4uvdzd9FUCv6ViektiL3ZoMDmNhffsiJGUhRiGAHQDYH7pCyNKN3EeCXcBDieXzGZKpbQyzt7LmZkxzQcFwB4iMA",
  "key19": "5CMkRu9tnAVFsXtcHqKabtep4yWM1d7oAFQCPra4bP5xE81bCTKfg8FswXjWZW4i7tVmtBQ1RejmBTTARBoviqXk",
  "key20": "5FmbMbmJRomxPzBVL8hVS1kG3NQy7bEK6CTA5UUeQG9u5bCea3eNESTNy9gq5xCqrhXhGiiPQfANcEggD7nMs3Uj",
  "key21": "3QhkxfvjWvUNENveJJ4U8ojvvfodT57imZTRhrWHtJhLU7FD7KaLNAdv6Am7DhW2n9WV81hioL9fZ1Mo2Y6NrwY8",
  "key22": "5eX9vTWEx3xQrhTxF1mBW5MmKYHmSD39W353nwCGXUyGDKcKBXssM1NncsKBFjgGdMJZBqKKs5TnYsjTKawGeTLo",
  "key23": "ayoRzdyJfoE8PNqPB9BK6PwMmXMUPWdp2cNWirXDD7P7idkoaFCRXEVfCYU3wzKL2gPegEzTPMvUEVAnBb3xj1G",
  "key24": "mThbZrXWbvwbfYmETxn4JLKTrfmFDNSZeymDBvJYShjt5PNE8xg7e2d2537HbkK4Tg2Tz7kPeLSfBeBnutcDLHN",
  "key25": "2AtzL1g8ecikstZNGtD7ufA3QqCPzVLrpVw98AXhQePJWjWkDFnqA8JaxpeB11uKcyLZYYr9bZHd12udS2TVGZL8",
  "key26": "Y69Tfnr1yo3WKE15DDrHWFmwseAuKmCXZ599pwxbgJHehSNjYAaBiN5JpZCqBti1boLvRw4xKGgEJLS8Xuj4Tg2",
  "key27": "3iSmSuf97TuorE4Vxo2v9DJf155UjuoYfDX8Sj2DnHweDZdLU8VqspT42cNpB9jmzAA93gG8FLU6ebEMmgScebqf",
  "key28": "38EQY882D2RQqp5Te2D5ushdzJhsqqeAgz4dCaV4ZSfZLJzAKn9TegWKfYhYEGq9TVQn1yQNPTJZA6DjMH2Tmbn9",
  "key29": "2qVxVs6RTGHGPVFMdu2GpTuM8rqfXSCtX3gUBG79DMmXaiFBxqyv9NvxVLVxUrQdgueRp21Mso1K5oRfj93nKBtf",
  "key30": "5RZ4uPGz6tHkPmagTJjkBLjXVk4riMLFVNV4pZsqLxcqz1kVRFHUbAPUuoxg6GPctzES6LiggZrPTuY5neghDskt",
  "key31": "apVEXjxgL55PkvFeNgmC3re3jutpnt8GoSuyYsfzyGRVfmsLnEXYNQvecNHYkJaWPrEFgrdkxybWeLXosUVTYqg",
  "key32": "3Dduo3xoKg74cwRMgt5KJwwmpdNgjYXLejUGYTQDX3z5DqEeTg9UUAbxb3fCfE6pK1acmj7nBHSsUHJB2Z2hQRZz",
  "key33": "4kgmqMrrY5uX858vyKn1nuk22PFPq5LKMertdkr4k8h9vUELzGQFU5vD1oKYXYFqNBuZuWNMPXtRmTN98rKneoti",
  "key34": "2Fg28t5QEPUBiZGhzuGyN8ucVtaycgoiXaLUkh3eeVto4m4HsCGRxBy7ruLHDAiXHYFo9qoAwD2V4GzTaabuTULX",
  "key35": "4PjAkZpxEMoUBabbx5YMtt7eV7g3ZC8PbaDsVyeS7Hi5fUzvmPjwvFWPMrxxKBeT8kXa7PwUzX6yHeTMzd2uGDPB",
  "key36": "5xPqbN9d8Gs9aAQ9MxdhbGbJ8yfLqTuvWwbZJqnyp77mpvHTBkGywj3v3kBZxc37K4eefnFwXGGrXrq5WBnMmmR",
  "key37": "3Gp39ceTsygCscLaTgedebcsbJcyugX4HP1EvmpLWktmH94a7WxpGCQXZ2JH8pGctQUevCzw97EbqALXdq7NTJQo",
  "key38": "2LtxhPicxWyMNGNe9AzWiSvsNLvPNLPUZLeLEsNNAjcBXBoUov7NnuKw5Qz1eGcAiLR4MpJ14Fuw99Jw96Z4fQza",
  "key39": "S1urZ3htsspkAAtabJvgWQ19NEs1TgYMwS75tyTjAfd3F4NXCmF957EdYzM41U1reNpG896wZA58djmLpuTeLeN",
  "key40": "5kXDEXTdp2CQGA9nJGDi88eYdjf4j1PMzXkDnRxtbixSZuTgtLuMJWrXFsux1Wx2wUGcsyuYaZyKT8z8zU6xS38i",
  "key41": "5Kwtzpcqo6zWAUMRWMcoRzcsTo9Rb9qAqB5gJp4RsVzidLVYDnCM2Ar7UmbgiZFBwJNtS8VMV9CqqinTULrCpyAn"
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
