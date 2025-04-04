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
    "n1RtnHDxH1LymjpuNkrWGreG2YQmpR3cJs25UE2YE57YYG3osz2aLuLtZ4cozpRYaorMhyiwgcMuPMorFhP54AX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KgNWuj6WrFQydwyRNWya6FJaABibGABD6Mye6TxXNYe9zKchKs2wNQySEG9p4MptN238nEKNMoQzJEUyMuydPjQ",
  "key1": "3uENJHaCnLCpMwNVtvrrtf47MrP9vxUbygmt8bYNRk2kiDQT8Za6Eh78PtDed8wWmua4cDhKEWjSEdaoWrxUj4RD",
  "key2": "29HHXv2jGmprTnuAGSTNm9444cvMnxY1vopfuCbryAnvyUEjxB82F5Pi9N2wpSt2mUW6s7VZHbHY9PJkd3jDHGws",
  "key3": "4KJ51rEai23wYRZXZQv1bYLUHFpB5JXpKRE4hdncoUcSUHbBKvKmdkyursbLGE2eRpoD7zf9yD7uP7HBuiQmN3oL",
  "key4": "4n2iye8oMkSoeVyE1rMhcBRoYUVhvVPPA5zfoLx5rpLynegYE5de4VW5JrhidWzuZDrtNVrdWEHF6zxzi7uSqVx9",
  "key5": "REqHTn3pRp9tR6nArK7zFCZwb5kQtiW16mhkTEtMua6de2QktitsjH4oWknHo8SsnZ3nB6aAqMrfYEsbKUs58LA",
  "key6": "4pQNN9Ko4rFc8nWr7e68dK9YXhNCTLac2GAayZpVaLmbNUDvEj8Msp4wRsMGp3Bo3JJd4fwUNVjdiWosY6Y4NGk7",
  "key7": "4tkAcMEyZhBH3HbZA9VUrbX2C3js2gU5cK2sG37K6LB9SMFiddiAMY48EMXZguPKcQhrPbeqjmziXWVwf8CVYMu8",
  "key8": "FM1kn5yFkvpCRuFybidcqmjQ9Jx2hs6jxAjTA9jkwXNznkhivHcbMcT19Y5Fs15GukKzaM2Js9u2ZNcr64r1kyG",
  "key9": "Lu3LBSNCooC49WWvYKLPTrYUxQr3VTaDdff8k2DJt2P8YAdvGwYm4dfJk2SR8pYgqoUsBcWyhDwuTXwJ3nB937Y",
  "key10": "3t7zGQyDPhnkc797Jpdyf9tm9RapPirktiEGo8TqqoyQftfbDG3Xw7A74vRcrHB3WsVTurMjwNqpJWPYibWAucvw",
  "key11": "2h326DhPzbDNHxTN8Zi3oEwqhBA9mtZK3D4uVY9mLfTyJGyvBtVQqp1xyHRJNhmAxuw4JXhymVoUdn2iCFddSL4R",
  "key12": "4djcp2epsTFEkkhJi3E7wLKri41GVpyW2pwDFUczAejX1hBxqge4Czy3So84st4PRnbUpAWnthRh8rt4xNo84jUt",
  "key13": "4uPvmPXopPo15PJLxAKFEyx8DCoTPam1ZjDLJ5ioEAGrHrwMjpsvouoXhRuXCy3XaLMCzjNNHLum3gg6B6ozsauh",
  "key14": "3g2UZPdeM8r43qpTSSeBh1TAtUTUXLkBtv7pu5LFuff86g3KXZZ5CLc4RCNrSDmuKqpa1iD41b1rt2tVgSgfr2n3",
  "key15": "41NVhojqLrbC2KYNeWXihuYSfjdUB393oCS7gCYNKfALdLW9H93qYZsoFUv9fnnk3cNNd42LXydvMkuzijWssCW9",
  "key16": "2TSaTuVp81LLBvjDd8LFkm1wvKma3jUG4iKrC6546aJEXkHDxdzrxBfCA2RiE4wDTp5PFtnJXAXKyNSh8rvKCqB5",
  "key17": "3BZ5F5YYLaQZWCRQ4Q5E4h8t4KdnmC6PKkECTCPBbtEGmWQM71TXH8yqvqsHTNZ6pDQ731eiNs2s4GPjLs2UatcM",
  "key18": "43tJxJN5j7fVBL3JRtHQETRM4RrMJovmLU1FPSvSTBZLzcbyBPNgx2RiycNMRGzFKRzJtgiZXBEBvXK7xwAfVmjQ",
  "key19": "MVvMAkP71h3VDN7U56th3txJWT8KqTkq6mJwnK3Yhg5NeobDhxTgWFU2iWMFr8HHMz6XjrMX6dVcvtnTcnpYQ2y",
  "key20": "5gyhrcqNV3VFKjgjB9bbtWEdrXNqSS9X4dr9RDvnBmvLsE9mDAyCSAhL1Qc2aSLXohcMdmVJ6nZb3GhFLqVHX7iQ",
  "key21": "3eXi9CX7hCXc2pbUB7JkWakgyXkyXEawwsUtgsBQB9yc7VDEsvciwAEBbCgaPAEqajt8BV9iar1jpnH3ZpFCdXF9",
  "key22": "3PPZinALk5V2iKCNRhwSinTNeaXFXChjKrBeViTJa66pn9cNXT9M3Fpff2nPB6bPJcvwR7Ej8SBpzDTdXt1tQGd6",
  "key23": "2mJ5bwdXt8RAxbw41rwViFMqLvCZyKXpnWkbdD25eDksYhhyjwMs9G84HYYFccoZfkt9hkyga5yafuH2DtzxL924",
  "key24": "3UrvVbm54SBVbCNpuFfdjbNGzDecou6sqxjbi9vSt3KWVEF63LMpSaeKGzFGUePNN5nKB7YmVJgmc9S3zLbcSjzC",
  "key25": "3JPcFYyxRmV6HryfSgxMxVDPm1TeLX9Zn25g5TxvX7TJm83qknDCWY81bsmUfT4aL29UuUdrrpDW7ymLrhZyxJtZ",
  "key26": "5QD5CRQPWSW5K7Y76Mez5ZS6JBL9DFT6WTdZX3vDHbbLFKNfamKtLUTVeZXNgeL8GgwjZkfMDK6Qew59ErSS4MnA",
  "key27": "gEWjYRNXYh1XZVPZgevSD6ZeVRgV9LU9LEEJ2EVJSMPqfCTfZaUTjFCQftWrS8YPxHLcBxcYLAmxM4kcKYwBrVa",
  "key28": "4t5JbFfA8t2fxWbm6SApsoJJWhXWi3WpxTxtKosmdYwUnzcpgLhpcE9JF7XDSwJEgGQUR3eU1bj7ZSXaUibFMFsu",
  "key29": "4QBmFzd8KA5UxLRwdCNPe3B9wk1AcADDFQZnTkjQ5D6X2xPF8Csb5rjoRNEVRjTdyTEm2fGYXx1UR1HXPFn74etx",
  "key30": "iC2JvkMvLCXFzTQdEz3pEmH4pLA854ZnpBRSkuLqC6dLMZSor4wErpod7Xqwxjjyd4EnM6pzAFmeYHk5U4kVCCY",
  "key31": "2MFx9mwhGm7jEnDNiCKhr4UZvEk6GarE7EukMNwhRF7YMQjnu5dLF9qUFviFsxgs6vPafNDYFPiXnQYfGjHDGyWd",
  "key32": "4g9oE73pi5VMupggceyuorx8dLFsJDfAkbsFRSrbzC3voCqdHQ8Mh6bABYEwMueFzvPWG7mkWAxvCiCo8AVokPBz",
  "key33": "4aogYP5ANh2j8TT2kw5sv1o4eh2mmRFMmAokpkRaQM5egUAFv521qN7Q82XzLM3m5ThfyJ6swUsbLLz8gwSsdh7E",
  "key34": "2neB2CVdTMdUbi2WW6yF1Bgo6gcELNjw8ERzcZ6uvDFHZAk8cdTuaETnQGzpb3vvrgDSX1YwSCnv1wAdHTYQ6WjC",
  "key35": "42BrqMdurX2tSPNUCzmXUQh1izDjxMcRH4vmf3vNsConQEF5tTTQP2HVAPd3pUXX13hzZ1NFSVZ1oAfhA1axmPiW",
  "key36": "4uYE3zmqemLs6nMXy8RhzYF34yYReFyrZuUtprshUHiyrpjFDkabYq7sXjPfyoDoDEZNzUrwxor1ztm4H3NVdyuF",
  "key37": "5PVAyNiDWUKmbqhPgZshYgchLPAih73Hf3hbrcTEqiwHGqg8VRy3vq8gJHxTGtddNC4SRCXNsksnxMHoG8jHWjYB",
  "key38": "3FtUhHWGgKmmqAuNEgzB5CNQeH9BjFZLdif2MH5a3Z256J2tNf2EoyC5Fp33fgGHUvssMa9uef431FyFLSxwsiUw",
  "key39": "3RFsnPJW9YcjiSaNMLEM1sgnSgyxcTT5fzLBL2YHmWvfR7KiJW9nd3bnMo7DWCcBKXCR4oSFw7Dj9G5ZnFtRreut",
  "key40": "26DdhRtKHJ2grYaULP6zhGmVn5rYz54LvYsVLFHS9BszVJS3Noy5d43z4cY8xgT7zEeu7t6n5enaH8ouNDCPPZFP"
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
