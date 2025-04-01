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
    "3HHrdBc9XuN1nYfXBu9SaER6JqtvastTcg6qp2HfLurzyMYqv6uiJXz9U2Q7GDGcTVRVcMgdJ8PToPGdD6Xcb2yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fGi4ei9E17GHqLaZerXzAu4QNUaowW144cJdCc77SjAuoKiJJSBZewkSTTRaL8FGVJFAfbUhpshR3PPYAFQRenS",
  "key1": "29npQzRFpuE3F1Sj9ykm7LHmFUcSFBYzeFVm3gnFoXrzrzSJNJEMStMTbo7SbCgBxHRPKUyQBdv4UPs6qUasgrgr",
  "key2": "ovW2wrDxkDpBgaua1kmdbgMhUQuxWVCpHFnkhWBnvtTQZSYzfbxLY9uyyx8TXNCKgXE1fnzksjMswVhaoAxqnum",
  "key3": "2zPwFwPwFRLdgoQxsxBGgmRToFkrxahg1aHxPfXHuX4DLvui8WsPUFwpzqBixQa9foghSNPkVcEHHRomj9EPUxsi",
  "key4": "2kUpNT67pBXtviYvpiycDwxDX3NdNnrjgx91ZdQMuRgbMCvuBCFRaMfkkn7A6s2ctQAJExt3D1bDjFAypBiiGdAr",
  "key5": "4y9cuMarCSnMnzs2m5sEmb2JsWwkq5EwRH1TCjcLw4MU3G63irvJQP4bgawrh4XRaJaFmTgVJnrZKKpmyjihbz1x",
  "key6": "43arbAhY1tKtTXoHjLic8kt4iyQQNu2pHGKUYkDDphiTKGGDLf5zvTK4UEkVfbfvstmCW89SFiWKtBpBZH4651T9",
  "key7": "5PwbhunMwZzoYpeVJFPcLuirxdQiTz1ZkKuHF9BM4zFS2uG85QqwSniB8o9xDg1A6AJGVk3J9sRY9zWYhCgq1n3G",
  "key8": "2o1iNccDBDVWjrLs4xs5za1E2BdhZWFNKhz7F8deU5zD6rAFiVfRKjwZBF9ybEVy55Kz1cq5A9C8xcbczydT4NGq",
  "key9": "2d4BH9qvXLE1zpAgoCpsPfMX5PV4w4B5bvAMteApTsbzY8hSGHBnBFgUj21U2nrXPP1Z972UsQaNpTJ1DnqHDkQz",
  "key10": "5Y1dqdemzYMKHGxr877ZTxM7y2sCaeTctCDtqdCPvUrYCQK4gwqBqhEMJvpXciFUkRn5udckQsszTYAGEJ1sNfis",
  "key11": "5bYL5AhYYu9SdY2c2ATdmzBiaHwVhqRsTTwHyyghYWbpVT4EotbxjqHMzvqSScwWQx7urRv2ixYcpkgsGsTPPs63",
  "key12": "VW2awpNHMhM5gxenasTcF1j1SnsogUaHSGzAr3aWSB7VWfxBWNXpUUSZbkTrYaTaKbJjNrSTpr7sctdxUC9zmKj",
  "key13": "51otSKR9nJzwu1Ufj4eUyRft7hSmAce3iD6iXFfeqjE9VTTMJvKnUBybq5WgWtNHhmvmRwV9pVgiY3SpxqtEYkJf",
  "key14": "5mFqj6edpc2Wt8v84n9rs33qfMRsMB5RqsezHwggZTchKw4B8uxiaEvzVhmeE7KK5XJm54CMpKtgd6GMG3u5cwqD",
  "key15": "2QS94Dyot4FFT5bP7dMhib4KYHJzDBSsa9tRdtNjddT8mdWXCFnpSfyFoCL7djA2Ay6cyxA8ER65DqPPJFa2WKQB",
  "key16": "2RPrBDNrcRQgN8rmJSHYASqXsooUiZxYYHymXyX9ggk7ADUQKh6Pfns8u6YTJs9N2wouHoVYk5g3qRDPesrMWSmk",
  "key17": "4XrJRK2NbK8vB1yiPXTH8cjbXqVCmYy3HoaUVZm4V2HhQDXXn6jRyicpKP2Q2XMzUPpZTwtCRuUGVxneGrAVUCxC",
  "key18": "3knahbfC5UT1YUAzHa8CY2vzSrwh24HLHoFwg4hPSznSkxehiYA82rLeyEKPdip5exbJ9rU9fXRJWV4JBWNcLC4a",
  "key19": "eLr3v7qXnDvwJUTGonX8fV9e8Pf6JBpkE6mgt2bHXiGPkM9uFpm1JpTwFGuHLKQn1e499SDZuvSuMsHASfdmGrh",
  "key20": "4ycmEtyhRVai715ZYbmnimeQBhUFoq54H3hHYXjkus4AVrgQ1osq6XHMU2pnCGdC5KQcHQ5YmcM5fwfxX1bs7nEQ",
  "key21": "63vKfHfB156RJmEwrspWM2MM4kz9qMkc45zwxCXsoGrPS4SUgWF4pxzakgqNDuvUvVmbt12mGA6Bb5XtSDDZh8x",
  "key22": "3KyPyDNLuATQbBoUkqoUgxpvPJvPMyVME4k4U2jZEFFJNaJoDV2NWjE3xzfwg6kAm673guU258Y4Tvsr6gw8dbZK",
  "key23": "4kKZCAhZVU43V8rcNxxKLdQ2E8hBNtJJKAGm8neQQtaSMk2QEVcVrpzzByiSaiSC9xgqdrsvSsu3pWvjVnu3GVUo",
  "key24": "5TWWRWwQFyHEJ42kusHRDfdfNV1jLqky5pb5qRvfWiqyeLenivwQ6SobFS1UtQDBKNaySeuih28N2eRuHYgXFJTc",
  "key25": "2vrPSCJ2ZkLfVATgPQ2dwamKwJSDr28qN4xZjZCgY9hQgxnB3EDmDiQUbPDJhhtF6hRrrwrWDJy26EVitJ1VGepz",
  "key26": "fd9xrG78Rm3WmimG85KGapksUpy6QPoE8cc45kux7Jh3iiDuYfejkjAaKw2Ck3Dtipm9zAKGvf5eok4HkDUwTNF",
  "key27": "4PHj7XvaekBcB2VgFg2eAVUgGQj7FzbRTvtgzd4jJHYPaFPcQrjXBtr3ju5cs8SqEB6QpgAyxpGXquqdurvPTRUh",
  "key28": "dY7ebDdn3xuUX5Pyv1VEJLUZwQwMwC2FmAJU8nXWxjatpU711zNm1HAELQWA3LjS8WntqjmXRMTF2YbdvLy91Jz",
  "key29": "32bkQUMVubE2suN4jXo4AcQTgmAcuf25DGFkgCbXdXPcpJZSzirma7X7jKqRuDhpb3QTwgtB1a5gBsJJ4aHUMZNE",
  "key30": "31WEgN5NSJ9vdiwKDFK8tEv8PSqbbhWmdG4YJK8nJ1TDMFm48EEt5Mz1yQ2RmpT5PhDV9MEJgw4Pkg2c7XXKT934",
  "key31": "2CPhBa9qTkeE7xux1PKPGe6T3FaGUKPx5hrEFimqBPkd6RXbGEc8P27xaBh9mFv2HVCt1mwXAMz7AgMq44k8QYcv",
  "key32": "3Bb7qj4NuCiwXrdaiSoaLtfUtV2no2qLyC3ZLBHyCSvR1pzYQPLLdDZ53bxA6UW9fGNegFDQtDq2bKLScEziwV5y",
  "key33": "5kLcBHHWwtj24JgsmagfNT5mzt7ZopLhaFJeqbQ6apyaabt2g2zW7n11vxdCXmzKUwoyPSWZi3aQMZtYTu5hZ7z",
  "key34": "4a6xcxPumxckrLGZG3Yve4LQQEcLb3Z93idjW7LrV5wEPc8CvRP6CZ67A15Fdup1unkMVWLptACsgfr1Hs4nYJXY",
  "key35": "2iJ9q6L6QTFFNDxWh3GsHbvfKkQkcAUZfKpLBUkwU3T6GRnMmQpPdGT5KVJnZVNXjh8JQzmgmfwCZsdY9K3FuKWY",
  "key36": "GYaAUsKrTq7P7SDMZJrypWiBNR6KLTdrkNqnQsYxPwHf4MyZEFe3ZTd2AKoEKzL5q63NQGUu81wiUzk9PPTwrQe",
  "key37": "2i4KutanTCheUF5oQXMSdFYPxRb4NXmvqX4krTRsYjG6r7TWTKjCPz9i1KNFjzh8uthJgnA9mDHCxqhC2XB3s61d",
  "key38": "UUui2iz5qd6Umu6SQR4meMvc5XWUxtrpgYNpqUjQzo6mZ16Q1GukyfovUJXsjUbBXUHKzEEV4qUGQpV9ZUDVunv",
  "key39": "AZezybZ7sa5cEMsgTSJ69cVZ5LN81JLFGkekxV6xtre4n6cWmrQK32owMit7tw7H6fyXhH9U9gSQVgCuFBodUXL",
  "key40": "5y8wgTSJWFggBxg35BhKbpAXH92fFSzMMfXCk7JzwTUcYwVG2s9TuTVxNZv4mQzsTVqeLx2zzs4Rz2ysyXncXT7w",
  "key41": "3NGSC7yxTayvywfJn4yTVXcJj3jYrdFFFDPy7fLu98S5dF6BuSpTAzmeAC4TD9dw9zTrMxYAUYKcwzNNmsmustcL",
  "key42": "3KCwZJCw4e9u5izJZW1UVSWC8Ud8Jk1uHV4uVBDtD85K9eh8JrXLzSqRwbHZN3YsT4E9N5Qa2kG2r8dW1Xz2dTcD",
  "key43": "4Lbnh51mpdrvN7KPjT89UfyteU1y9swcxTF8yCzt9rqZLoH6ssJEt7cHboSHRSq5ybY4wJjkmUnuBzRx8kj8i5GJ",
  "key44": "286ftRQrj74AeYaKoMzGMuWrEzox5JpoqF7JeWMtCr9cqJuffoLurFXuRAdXpQHF3mp3nDt3CyNsrALH8MjVkgin"
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
