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
    "2rU37QxGQ4t87PfBkWwNTs5sZvJdn9wNWsQ4fCbJ5QCkeY7D3HrTmMqg64bz6Jyecn17WYY5i1h7tWBUJA4bqxqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f1Kg83w6GBAaPF4ZrHiTBXXsyDaohsVnSyDG85oCBkkfXjPfiDh7V8ASFmujFhbRAZswCExrBN4fVQi9pC5D9cF",
  "key1": "26DeumSN66rUsF3oJiUqH7oV65iABwvcExknHkEzaDDUPGDZDAA6UDfHbuKC7kJxVw54vWnntaz4HZniMZqXMLKB",
  "key2": "3JKcdqpaYYgr8FMS7ZL9aiggWGjosK66r1CLTGbvdnMntxgdjkJjQyNmx5S2YRzFFHeuvZKDPs4sMQaq6qGCp1J4",
  "key3": "54eUAdVui3fK466VBUGF3WBY8o1MdEf2ZEas4rWHhYHSTdSZAJXPW5wKvj6kzZUGH5FPRa8Q7gC9TKvbaKCoe5oB",
  "key4": "3iu396aj2srWynV8KJmspeQmJzqua7ScokLyvzMvPMwzKVLfHMqs4Dx5s4opsqvTZR4V26TqGuJCs5XBr5mCPYRe",
  "key5": "2AwGwduAUmhfidRKALTEbVDKabPKc5zRyUFXkEExAkDy4SrShuu5Vuw85xCMajc9mxZ7SjTknAFZQqFaWvSgiYMe",
  "key6": "toikh3wA7Qo23zzCWBWbaP9iByXcTK7qbV654H5whH3srJi87Aerh1kWbm4XUAemQNXGy95AYcjdWX9qe9inemp",
  "key7": "5xJEbF7Xoxmu9VZPcAAbHpvSAeQijqJ6C6b5pbWuPYVfsNunPYbrBHfPpHSXDKam3kk7Ny3DBpi3uehe2TW9rbuM",
  "key8": "2Rsig9B17oVX45XXwUYRjWPnMqZ7mikuQDxbhyRfGcZoivvRnkCrB4mwoCqM4vP2j2mXtVVSE5kdvjNNHHyRCjTT",
  "key9": "5id9YfA3BWCxJRtd59B2PjxXY4phGDgXGFBHZ8f3eFPw5Qw5Y7y4c7s5NYs3cszn1WEQR5sAYZ6AV96WgwUofop3",
  "key10": "2xU5yDd1fqTQ1FtBJPJckM52xnuhCnNzBEx3cuLVn5cDEBs6MN5vdWpkdohos2KLXHmq3o6ymCXtGP66TjBoemmy",
  "key11": "2SukF55kCxXg9zyHRJ3oPY3zDhTVCpTLVUQWh6FB6Psmr6pBhBws6hvsA716NRZRhPy1M4Vhrt52AqJwsP2p7hPj",
  "key12": "v1rWAdeeqv4guiadvXPG9mA65RdChffC8hs5Lm8683oFYjXaPv59eXiT9nAHs1obN4GQJdttmHDkTjXmWy4Jchi",
  "key13": "3QotENLioKEaYumNstB1uVXNRrJfRbXHAQdLyBj4oShEkNpFqRiR5AnKojDkKnQ7CyYQywTmRki6ZZBxcwcktAvh",
  "key14": "52RxmNxBSD4w6xPhJSVKeyKcqVeM822gSYyD6iHdC11SsrXNFYc3kZjY4oUiZpFhHohJFJHcgKqk2eMhPfWnqyts",
  "key15": "4q2MK1MqJDxE48xbLEsjTUe9s7ueHa7gsrZ44Hn259TDtdgbyfcTzaELrrv9pe5eBk4pGGEkiLRBTYBoxrznZv1L",
  "key16": "2HC15JuT2mjXMcun1zXL1wqbkV9QPbn438GaUgbiyKrjssFcSLdedG4wNQ9v97oL4wURfLsqJeKdArJ8KkSX1JUj",
  "key17": "3TM7UjVFRkmMBkvAM4esZZ13cATCtjFG6qC5dw6qkVHf3F3U2pynQ1K4yF24HzKXsf2odK3qQQ6qimgAnmzbMgae",
  "key18": "3BLRQtkZg1wDEhBKgg4bWQv5bxEAKjhUHqmbsmBFaZwyVtFUzSXwgNEGTnbiiQcYzCXaSwwFGFr6McCDx7rifAgY",
  "key19": "XY3k2ozP97VdGJqJJiFFG8EK4W5M5dd4EfutVeE8tj3otLUEMtWFfvFLou9igRLS4vp5tJPSSo1DoLouWLUphG1",
  "key20": "4umhht13R4CcmLqJ1rQKS7FUwpgCjoq5mzUa83tprbrpv5rhagTPak296xJDTkHFGCAH63L1axYoVYNvsg591rFN",
  "key21": "5ZdJs9KorQkemzLSm5d1gssHEqCaU9UNmUQNyzdUh1ozhh2u154NCChsyKQVQf4DzriqQYLsRG16mAdcydZHntza",
  "key22": "5HqK9DjTJQLcVQRHDus1YMvyJJcEcbKJwn2QhCWxzZ6CuiDUGfVFhKBJVs27MJG5ewZSRda67PyEFzGxQcWiQKBx",
  "key23": "3ybzvmJRWXCEVKQP4NChvktH6JRSuoRx3ECCnmSbkg4z3nUCfFarhS3DgeuguvimJaQKNDpahoTxQ7kLfkqbE8y7",
  "key24": "i9aagjBaeBmm7LUmtjvjxBe9GNLN45uhL7iQu4wiRPSVhF4wiCDFuCMbQtTvAC6er2S4cSoKt4syAFgS1nNdtMK",
  "key25": "3i7p8CGYAtcXt4beGjmpYQTncAQ2CSsdADHndhWxszR818FgZzQ1qNysEKork5BKcnuPwh286KdoKuJPydYfRV6z",
  "key26": "2R583WrUeQ9SXNokRrRgAXjpcDWfZzoKiB2Zi1AJ7m9bgD8oyj1rN9ujL2GmjgxS6BSscpndGHtx9Uu7dgspppfk",
  "key27": "3s1fokUQuUExw9F5uS2TTP5VooGXBHA4d7TqLygm6mqz3ocEGXBMLBw1GCdqSTMHNntgXrFtoeWZ8Uut5GgUdwkZ",
  "key28": "3SnbUvn2GkzzkS3Yfx1JtoRhT7F2E1CBxgQhg7gVwzjVfGpmGyTyiumzBcZdujJBcQriQjK4qaXoTupHEAcqakeV",
  "key29": "4WsCw5d8iwp56XAtfzwX5638fxChAKKyFLE9ZCV6LMuQgP5qyZZCB6DKLcshxfxxXH3MH6brXXa7z7K3mahUmZLW",
  "key30": "5fLnUaD3nrjCC3k3rrdGWr3XjPuRMSEZdABzcxnkpPoiPFxHkFseXtrcHfnNDtsW2y5msaJYiSbtbtTqYSRy96b2",
  "key31": "4AksPchcu3bMkiZJevS4VF6EcUQJffM9hegfS4PT6EzvnZXcvsTwV9WgHSdptJ5fHTurbPxS5L6V8cRgZ63wnvCp",
  "key32": "3dMzR2S3TBffeXQLVFSk9z7BgpF6o6dshkCycgwCc2LiZ6HnJXaeVdLgJQ4THP6wreXLmTsyS1ts8S5ja1L7pKYa",
  "key33": "v8oy82YkqqkWapwiWR4vJb3FhX8qq5xH7Z5LQx1mCbGMoWZX5YQes85yokWMTd7YkEJkHMVFi3nrBmiUSX2FPLD",
  "key34": "3WkvRDw9dVqdSpJJcrozzgofXNC9HUuHjHCvd6bLQxHdNJD1RgxqrUdruJbSZ2K7bTcoTh1v6ahGQzERaNE9Bgyi",
  "key35": "2jfryoCggr5u86eRQWnYKAJjPMNpVQDCpv77b3ye6be7UpdusphnYzs3TJTPwgfYMEcuDvZQwwFAhWQeEaMmUJsv",
  "key36": "5Tg7W2ai6bBozr8eoFGS8u4QzeFgKqfazsqziiS8h4x78jqc9rjL4qhhvAS9HY4xsg55wvaY2q6v1M4hvNJCFWv8",
  "key37": "2YzhdeemxR8pSmRUvPBu3wBb7Ss3SUDP7JS21LNZTF4ttKj78vapH6vgQzoanTXNyy9ksJYaK6vs4ranPiGbHkrF",
  "key38": "63mZRy5ER7Sa3dvSWmZrWKFAbwoGpo5rXVwyfnHRB8ZZsFrSGHfEEbkZamLQeYD2bBmhXmKoKg7jyqryXV25u37P",
  "key39": "2NGSSYobkH5or2T4ozDT6UcirT8dQcQ5faNJ68ZxWXKiUAuU329iVTqc3DpUN8wWky12QZeWEC5uXrC6q1Fusz8A"
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
