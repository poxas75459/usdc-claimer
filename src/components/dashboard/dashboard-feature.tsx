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
    "5PWHrM14oD3NLpTekAphPCXD8CwFD8DTQAegXmKr4i7VjUWRtcCc7C2JD2G9eNmgWVfkkwHZasC2bUNtpfKQtE6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TxqyZdLZzRfqsM2rpVNKbS6ftw7NfoaMBpkEesPCh1sE2DLjAeaTWuQMtRragmuankLLNjPizaWSoA8pi4cvEwq",
  "key1": "4hJBD3cBSHhuQEVDVDyJESRSoCRUXvLiei9waXFCygZ6cij6cjgDWwxos4LtQTKSiUmB2KpCSxKKPKuhxMnvWXAK",
  "key2": "5CpbZnbXJuBskAyeGAXufzS6zVb4cAr6zg2MK6Zp1eaeoACQz1JFzh25bbQz4MWUwLSiyx4gwWhg9zwYh6efNNFA",
  "key3": "3tYvayDKya8KmJmhQectCdE8pWsyLzkDhDDvf8VrDiWgDvYaoenAKBmv7Lj8NQqJLcQRurPbou9bzy2oCEYBpzTH",
  "key4": "nhDvNWenGTyxrjFLTmwFGp1QgejfcyRWyWh8hN1bLi2ppPSnpmHFEndrd1WTjEcw1P11XY9CgaQwkJS5TfgYu1k",
  "key5": "3zmJDUYruWERMV1KYE3zEKhsPLEHdBTb6gUTUERyqg7jgkb6KLaSJyFMeQnN9EMSJYYmxWjocBWuxE83XFvwQajS",
  "key6": "64jToyzAxBXd659hbVD4Tzv1pjBTpcj8JzXwFJ1CCryYMCA9jq4fCtK6wRfL1DScTYStQ4WyZWHmgnKPRPDxe7cK",
  "key7": "5CTwj3T42u9egbyfa893f3eeRFsDmKCr8rd28ShvowXx2JAWn6X13xaMrpZD1nbzF68x7U5cA1gJ5GStkUiAbc2",
  "key8": "5L5ajySGrVe5XMuKFMfDej5WKRcTp86Vt2yczvfvvZRcEgoxSMYJww1jcxSLqXYHzcYa55XMTivizGca2WYegY3F",
  "key9": "3mojVjg8EutsBtsojnWPRpjNr8uccp6nNhd9xdm8cEmFeTTTJ6r3QJFRZbbGYrqtqutmzJR7DQXWQfaxAn9rhJdp",
  "key10": "22ZuzVhyfCexnkeQRUzSMdR5a6u6muoZuCa34jxdfrESjrPbFPb43b1ecDcby3U5vgckULAovTSczKP7F5KgSfas",
  "key11": "3aELqB1mqnvtBsnRxxHRAzsDo6aAzgPncKHKgJrnC4YAVLCDUFD3aBCpHHqCtPfic3SqwXvDu2ERnDuhv4kbmBJX",
  "key12": "ygTqyq5u5KQUhq8VWKcR2HCg9tYz12hBEciUxbJBFAAcK5NALMSupv6Y1pdFNRaMm5DUw6vKUFYR1MHJ8ApEo9Q",
  "key13": "453k1bacMPMHWsYWA2q6psmpE2NyGXM655CjZVY1vt5MHvWTP1fwF4PmWYLJYdWuoW1sVmRDH38zR4vd4Fu1khY7",
  "key14": "zXyBnVYjeHyfADgx6A7jw1JmCuQMer66BtL6tWUzDtmjWBJturzsvx4vjKryiMuingVzA4TrCc94sVtW9BJrSPJ",
  "key15": "2NXVaoTXoKsqNvbQQwnKbg2zaHrefRuxrUEb1X3pdriWwnWZvNVa6Ktr72ZW9p2YTtkP54Wqsp6aRuV5JaJUCTuh",
  "key16": "5wqf9iVTSpWsSGZqBKpazUbRJa7Y33GakHWdBXYUKoBY9A4SjdrhGQKX7vKfr1H5LqHbfXaumWFgXzSF3zZ5bAQC",
  "key17": "563VXVXog4EbcD5YmkviydSkpK3ezmdekMBZucysAxHTzp6a7j7haSsLb59ZUHvh6Jy2MiNQwBtkaEJxmPKgNPTH",
  "key18": "HFkeJV5CgdZL4WRmtQnYSdcFfzPvXyCCX3gAZC1abTwSMNn1Ru5MFZ9zqsUGh2zshkJK4VM45A2BcTYMt5AetR2",
  "key19": "5hc9ai4FexYmWjbTYNx2Qmp2B1h6NafaLZAv1bXsUS9hyAwm86bXqGHd6iZ3GWxCRvH8Hhny2HDhGD9yt3fxwwsn",
  "key20": "5ASBTwpP9AT8PdwTMQBYFQhFXNtA9cN8SpowcSVf8euUwvifZhdB7M181u5TqRXjLEdVchxLEjqZmZCeZM4XmdyW",
  "key21": "P78JcivNQXR8vn86c2Ncsb4Ezs9gXh2jKkQ98o1jBeVChjNHUJo7tw1NwoHRP1RjUaUxEHtxDt8bEiWDKi7iEjo",
  "key22": "C7J8fVieWzdkJbHr1waFZjRt8JwsRFsvC8YNic7ZAGxt2YztGSr8Gttj81ucbGpuWk1ENiv46C5E6fasv2ccFh4",
  "key23": "3FTH5tGsgAj41XD52dLaAb4QZg6F7AGRDQ8LRnYRC8tAREWnJZkB2pYbAv9bvWzjGL2xKRJHR9oXGUCvweFQeqp6",
  "key24": "44az5DXd5BpdNuziGhzWNQ9KUsdDXnXXQye38hUxjufQPZZrw7Knq56i6C3otTMSbb6zRVQ2mxLqhQ5vK7GSAutK",
  "key25": "2tsePKEBiS6cU312atKwb6ZnHWyHhKk26Evn2GRrjM677znfgnGJt9gbXsZSRoHBme4R27MuADfcRgpSyNAbdcxV",
  "key26": "412tD8TjcR6y5Sijvq8Z3P8SmEcfDTX46ofT86z5qjK7iSo1VUVQipCCNUBP77BxdzaxKZB2sMXoanKhj8Ef4Nit",
  "key27": "45G4nURtGcWFFdzCkDmpPha2hnrTYY5VbqU8Phq69G5Jd874pbU8siDjSQj6KHWegFRuF7PDzxfEUFmn28xZqzs",
  "key28": "5BPhYEBgyLDPJeofLVDBJgTukKaJaKyqpXX4sQ9vgZoDnBUox8VNaxjEz6pbXzPRcbyLf8ZNUkH1gEKNa52aURmZ",
  "key29": "t2xRjf29DKPbTB2PtfYuAB4Gs8jZJUX5zvs6tnsPUiU6Mnm8Y2uZMHfKd5hUdz8tzQJ37um1Fbt4hDrNP2VoH2o",
  "key30": "Y57vhAgwkexg9Piu4M9GcgmG7pgvX26hPWE5CYUSM5rHDJi6vnaMcFBsUYNVWvJCwVM8JbtmFp8HKjkxgSQ4LZX",
  "key31": "2nHZC5mwcTUd6TDPaNfnFaK5Bh5CHA8xGscuHU7Y3qNoh8sCxX7Uv5QfADZY5Vv6jzpJzjTjMHR5ySb1uBpMp6eq",
  "key32": "62kL326AH4vJ9SkLtLSeXu7D9mtvMQdjad78v8ZN8i1SQiRR2d4wwhbGAXUFFvwgtsQ4YFyBE7UvVg3tzcW8FBbR",
  "key33": "3fYDaaHsUkr1toLLVnD9TAFUrhXMW6U3fiJNPvTj84g9HFYdPAUck8G7xRtthXBQKXvgDvitSeSXsQW7ohsZNifA",
  "key34": "4QwHAvW3Ln7GYK4CQbVQJWHaXELdyecDoZyq2QNmeWNxiKRo4Bzk28fzJz6LiwneWftAuCd5bY7SdLhiK8dWmu2x",
  "key35": "2RPBY9r9Tzu6Wj771jBZqynUzp43r5G9fkEYpfpWUkRRdSF5xLemACp4M214JgPzNCA6UkF652tAqsjm39QWCun1",
  "key36": "N9f55as5V1HHt6qQhuuybU52LRGnbbRr6FKVDYVhDdEEjxkfW4JiAu15FphAjwqRthCEp6638vtQ9FMnt87CbnA",
  "key37": "3wyaBxEB2tzCvWRUbU5m9ztBQitLWBwje9N8scSJwrR9N3KYZQQkbAGtSwk9tpXuM6GLD6sAmsnkZoTvMNiCQ4dm",
  "key38": "4D82RyScYQRVmjAC452HL2gvgoarsVLqcesMxTACU6bEFyWxiw3LYmPJqPWFkUo2zSuJ4GLG4uFTkUSvgrF7peCY",
  "key39": "2fc2DGtNG1AdUtYuZ12ucxtKNcXa2C3PBa4oCx2Z6vszz59UMSaVJcwLoXymFcjCjpjdA2QZeWXAX26afpTdGvQd",
  "key40": "67YjWWTLMimvM5SHHLC3bo6eq5XdHPLKiP7rqxy7EcKVigSX9EawvRvaqbpmnYeop8UQfgiUaSshRWhNVwArZxuR",
  "key41": "5UzXPSasm76VejhtZXHUNU1aimknh2VEdTZExDputz73RerKSqWgPxaHupGFs7rohqa8951xWk5cjE2QudJ1vs52",
  "key42": "2rBspzzTwAAxq2CkwjL6AigXFfhKKnXEEby8Su63uP5sdEZzPPrAEcyeuKP3Cr88vzbqqBXECifr9XqPhk6giN9",
  "key43": "2FCvMuEYG2FuGJEu6XiqXw2gw7AeQueZsQ2uN9eB7oV8eKaoJA1HqV8iHQjbk7fSs5DANBGomF51DP9n1wSzsyCR",
  "key44": "44AFCFkoeZ6XwMDre9nF7vYqcUe5FL5MWacZaM5bghWRDiFjeGWbamN4VLPGt3eVUZ9H8bVsgwrJUH6LD5GQf1SF",
  "key45": "2bNopiWcSpVxESoGz5SixNFNuMgLn4SC2oHXuPr2DAyqZLMSTUZwXFbK6SgZPySvKMZugU4sfMJHN1EKpfoY4m2W",
  "key46": "8WjinbYzip5WZPcrq3Cbe3cUdQB8VV9JJoRdhJAqBHGR6jdd36P1etMcb3UzyfDBuLqnuscmPdB53nZMHbUZNDq",
  "key47": "2h2zhiReyKYrH9bW2YSMDjpy6C4oLeU2DSMn8zFrPtkmnBs2F5B3RFGFm1ehqUqWFmrL32HBpTpixzXigtgY9dMV"
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
