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
    "5NWsUAkH3MEW6Ln6roW4i1n4WBDfR1zGB7FVyGfaooUcffBwDj6JLKVEWoxGeXwyLV8yecNS748kJw6qrXaU4xVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gDfkw4rpE7mN5VGa9ztoNocJMjHd76Eko9DQVRTCdDCBCMGbSJvnYHV1DNuFenLGsWvRZnEq7mwpPoReQEUG3EZ",
  "key1": "24XoPznZY5kyjecJxuZN93oHCegGRLJ7AVb6A6aGNNyNeGKL41D1JuA6x9AmXirvCJtVUHEyB52oWwGVmu7GQGa9",
  "key2": "5gcSZXMJ126c1mJEEpRhh9kfF9jKR8ff3fzNwPyuumgZVG8MZbG8nxWhQcrwoo84afiMNz7z88vw83KC1oCDiFbe",
  "key3": "31zZBju8dC1Fue7qKG44tNnrsbTjCgR1jo27thpkvGf4MekEqeCZLxMLJsJJ7Es1nA4TAAodMhVATtCouoxw9LHH",
  "key4": "4i3RomBMyxXHS7wJtJn3mcLaatdi28BwZ1tiDNnEick6v6ughaPWocAmkJ8E9NhGctoFCWs9RGDk3vmzxhtGfp5c",
  "key5": "2wmrcnKJZ2UkHsmUy36aWJVKB8uWPiuVkLwyLBz7WV936bqYJKr8hSdQths4Lru7fNSHFU8jDVHG3Mf2ux5EvbEz",
  "key6": "4miLxGaM7QBc2ZWASzwjaH7exLKxsDuQtXEVQBcc6xdTexaeyMMeEXSVoAVErXxhsdh5Kh9e9f19qbDDyZyafzqM",
  "key7": "3APzv6UGuZvq7VnTfzmF48d3FcTpTU5Gnai1BSaaBHoAsBXZ2ZbUBXhFkUhxoHjzdmGHbxhZN644zsiaYC8mvyj3",
  "key8": "2hFHQEHRncXZjXMpvJBb3YpA9ZJCMTgagqygt9yWbA59dCFiKmJsV5QC3Eqyp5fnzqmbBpkPyFAn8WnDxqDJSV7J",
  "key9": "5BPNMKvZQzDxbeJpwynz4E9roGfJp7z2JzSC832ZcH5SZw5Qz3WGzHgxyxfqASLotkeTQsC91tfoTu3WSoPexZbY",
  "key10": "4BQgVpRhE5xXgc6L5hqC1UVdKCpkRE7xAsHX4EEZgiTaAxKYosRadZ2uQWo1TH3mELzPF8kKwCtG7hkCiyZtSsqX",
  "key11": "3bUNwsVX7MqchvMQWSDfmDuFwyAaRqHtL1WTY1wPdGuAQBeEe3kdeYBCyPu3PuuNZa4rjGszWKAWwwLNmQetZTTN",
  "key12": "i9NP6gEqwg4pvH7goTY8FzV9bDWHYnHrgJ4gQEYY4kf1bVU6DLSvestQ1T2knfXLmmYioGBGmocjVJ1y73nUYcS",
  "key13": "4jS9b8SHZbxkuUe9ehWseq3pCPmeaFt1N9qhSfB96Fx6hVroLKz2RFzegoi3r8ZrqQM23GjgGu2LMMwvBckgo6ek",
  "key14": "SNWU6V6NAEbG9S86JuT5CMtpFqb5Lzx9f9bBpYKKTT53wW8xBNNiA2WDov7rMMeG2tAQJdxEMwmKbD9SBb2JCsv",
  "key15": "61SdP1rRoJycimYtoDHcjptNwEC4tZ42nwHK39QAAvCPCuHxxCEFcei2ASAA6Q3B4VWSXRdVu2XyKKehAx7m1yrm",
  "key16": "XCEj5cKFQcBQbAh16kpHA2mNJ7hucyrEf31p8hbeUudDA2jqErwpBM7evk7yJkM5TtxMA5q3uKLycj3Y45dcsKE",
  "key17": "3UT6g1WaaCQoMcdcLBVg23QuwUBrzu7TNvAETQ5aHFUku4nqrKwfdhUPfphMS4zq9FyfuqcXt8HYgqNibsYXj8WZ",
  "key18": "2Y6qm6qNw5gMMWYsqNTSBK92g711po6LAQVMps3Psznpd6DPSfawXJiuiGN5qvcQsRyg3DSRVPWVmMvjNZtbr8C3",
  "key19": "26wmQ41QQHQt8ttWdKmFCyAtKt7fC1EXZohCDABfvVaLthPQmGPie9Lug6aB2T3NkAbj4AVCrCX22uJoVwfZbcxo",
  "key20": "5zNuPew1kDb4qP5VbyWv57LfALVn42vth285w7iMdUapuaWyvnacepBrrqZWEEcApzNkZ1QYMvAwvpys3FsFhdk6",
  "key21": "4QSxxmjm5QJna3G2rUx84DW5X3WaqvsWduYHxZaSAHbG4GhSAfhmMPYezTXUU16jXK9Ec53WqZxoq2hxxrrPYyZE",
  "key22": "5cpYuoHWgCpPBc1aNvQtk576HfSgmjvqzyyMbHZ1Pg16sjcpXg7dA96iWeJAdDePizSG4TJNF2cYw6as3UADSYMX",
  "key23": "2aKV14U6iSCTxpK7NtrJ2wbJLKvSyf58ecsMEr7LRrGgAJdYRQhFhhuSSVyWWjuXbHSzt3iiqX95dXRmenyXHiPF",
  "key24": "4fe9Q9GMq8PmnnzAxNAfn3CsquJmyxtfWXtJXYH6SmAvPJ6DQQEq1kaHWV9FCNgTu1dsKp16eeBnM6TpK4rcd2oe",
  "key25": "44UeiA8AMp4oCnKdFdFATzvqLHDqF2SKkiBDHy9mKwsEvPiQze9GiEQ5c7RttSZgPMhqx14AtcTBEa61gBvu1HxL",
  "key26": "2T9fidxkTmdPU4krhXvPn9THZZNVi2QUxY7S734PN8rwyeqgYPJSmvBNd4hRkjYMucrLvRVuDypAi6RAWJvoPe7g",
  "key27": "4UPXkYHtGTnvrhUxpFSetpE3G6Xo87D91TGvDSfajheeHyPwtr1md5XbnbY9DUvoXjhHZWZPenKzoWiZKUiSZSbZ",
  "key28": "23rwp3rb3H8HhkTinj6TfjqMVi3KQHyREYNnRNr6vdv9tU8kxEvotuYipTG8GrFQeWMLeK7CsjkxNW4r5fxXvVYb",
  "key29": "36BHK8R9ogcBT6dqnZJHe6NCHQXMRwVzgEdAYSEuXubT14UZ7pSwkjD81aGtbyczVz9Jdq2FKe6mt4rou1iT2nzf",
  "key30": "2VsLq2my963SrUtvoek1k8Nsb4was56PTnHwUZSQsNajUrH8o7nRykRm2ZHVkGFpck3m68s61ertsWvA5ghBMbpv",
  "key31": "mwp8u8rc3ULknzMGTnMBDC7dzNz9LVDKNd5vMfzq5tPeHswLJpvPaWi2ETBqbVTmoTj4xRL7x9f3aPAZUJ3emtB",
  "key32": "58pzFnnAJ1wQJDAX4bVWKrzxS6jfJZLqX8qWyT25mMoUW3mrk5ucgP8b2H2wZfvHySn5ZeeskMkF1F2k8LWtyiYR",
  "key33": "3GMo8V2pjwfWKHdamofYdHx13XZwbsV4D5gbRKD5XmVf7J7kLngzdqZ55azMbhmaZHbWFC6wi33xw446GCRhdNLm",
  "key34": "3Wheg4MRMrZ7xgkPgqvSUGD6Czeu5gMPmekxGfXGxyDJzfGfUc9DsWF2tH9R5eY9ve4Qv5Fd9WzmjBv7vxAmyWqS",
  "key35": "4MsUGg8kvCHcW1ETkd9wcY92FV73FdDSJyySpemtfevsqEUwqafLmeLqLAesvb3JWYN4d7Eo29MfRPnCCkhHEc8G",
  "key36": "363raDvUHdbvyWWqpNj3Hm1qpjbCtzoCzXQMRcDZK5Fq6Wz3pyqojMDBmGyBpeLWKCuSurfin7h4GjU7Cr9L7Ue8",
  "key37": "3CJgUL6x9tve7ixGdeGhtR13Fdbrb4vwxmjc56UujDTZRuouWRjfZ4ZXKBc6PjpzWuTKTAdccyfeVGH4BV2xucPC",
  "key38": "WoyBAkJqr5NXPkNJJsWoYthEfAZ8wT8CMbFnz6847LXvSLNJugX7YyCVCVj642VrjerC1u3UuJ1LUsk5kBArrMR",
  "key39": "398aiMmcrcQTrpHCJL5RM41PUJoVrxyNAyDnNw2FXmRXYkG3UiPnBsf4KGSN3FxoezuAg5ZSj3yXNiKMiKTio7Tu",
  "key40": "5yzsndAdzq5Xh1PUpSKqKmQguim3Pd21gMxJuSaSZZxsM7oJprUFnGTPjGvTzWi3DnnoZessq72qnStjVDmWntA5",
  "key41": "31bX8DW4cjzj2wAqS4h2BqRucjyc3syYE1xrM8XUf3vXVCy9fzGXQu1dy1pmybyctebRF7XeosGk4dDSaoMHurRE",
  "key42": "4Zhanezb3EWu9Y4oWvh5i7egMAhuom38SFLqsHVhmP8qUqTgV33roUTFgpcMGPaeX5XJNx4K2itGTUFQDqkFpMWD",
  "key43": "wWREtFTNqwFcVXCJ8LaiH3AJCxziCx1DUi6SaP4kfm4fQWAJ5n7PVG6XSpyhqwSsaJbUVMPfS6Zeu8QkmFfqJxE",
  "key44": "5HphpR7FqahwUKvqh8xdWEpQ7nYjBg9cioguNuegKzUDGH9W14wV8yS9pwDnutbtBgS63xSBE4iJjhMoBpmQU5SW",
  "key45": "3E7j3Y3fE1jnwdQweDqo16MxqcVMhmS1xCTDvYVo2tEFPitovuEW43cku5xUffiaLaKrroY9ZbVeR35RygdMAfcB",
  "key46": "2oc9LUGgyEb5UQrfmEULcfqYzHAzuwPHH26VBN5mm8S8yJxrKhiRkoNjgutdFxMDjXUxuECFLqxjVRafQ9P7kveo",
  "key47": "McV6ZjS4KhJbzsKH82FKpubSjfTMRzY5EJ36TU6iadKPKxcnUvq1hq43SSQ6u3MmxRGavrek62ARoPZFJhLhero",
  "key48": "5P6gYz1Mdyie1tksMr1CNaQMcgUhD2jJ4FMrpHxSWoSiLEwCxrk58YFHxNuSA8CXsAkdrmMrXFvJ7RS1yjY8rdMc"
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
