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
    "5jw2PyPyToF8zV6ag41ycfjgSXKtAUkkKbei36ZPR3gGvYj2wyLredALtVHErncwzWNRx96gvrJEvYFLYghGEBTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKnP1r4PkasuiKh9LM9keQPRmuz1AMUykBcKmpDEnf1x6a74EspyYZHqR1oyvVC96BMN4dJdJwkM4bADZjTfFyG",
  "key1": "534gdNZnQG58DPUt1wnSPfyWGNXFUmL6E4h7kmJvC7UM8gwHW7pPHxGFJHdnJ3QTmufSBbaToaDL7Aqq3JXXHNBu",
  "key2": "5jDtc2iQLwrAyT7rZMZbrqDmrEV98JUwv7vcYUZeC3cVxx2KvtyWpx8SWSThipKVdnpWRJyjhFRA8ytvNrHhUn2K",
  "key3": "4DxaPZQXqpcDB3aitTbb9zsxvhfzNpzr5qacz61dWu4bjcMQL2Q9PrjhJV3vsDX4jMySddGvQWYPL5q2x9PGzZ1V",
  "key4": "HhRAZWMFqza7fdJPqjVLaTJPR7bk6YSyxUE6MD6xCYJHP4XQpdKhXhrHAK5jqS7HmYqUU9cSZgSUaDnS16vs2v6",
  "key5": "3PRUY5PvAhkNz6wP4rrwue8v2tYUcZGnKTxfiuWHJ1TbXUTK3tfrKzAoHvRpEjEwshe1Rn5u7QhCv9LHeN5GzaVR",
  "key6": "3FgczwkJjmTtvCuacgyUvhV7WMV4DKbXPmXHn9Jkejx8JZyjCPCoKPUQWNSBxbZS7K5hEmx79GZv9bXFR8g8Zrzt",
  "key7": "5FGK7hLWd3kGNrjs5qqwbDrrLBvjwUTTfC8NvduFc2crPakUrZzCHzp86w8igWxe7kpvo8iU59ZU1No7kD3zt1TB",
  "key8": "2y8SRNBSoW83YrLn9XffSiHHXSoWbcGR95FpPRM8VPKNzdjiHvp7hiGHasD5fNnZVSLCuekkKSndXopkFELm7sKB",
  "key9": "3hq6Epj83RmzB1rzo6H4o3veTi5ZnffSCQrrPi4agfafL2XYL2Ez1wc7n9ccEaMF7LX2ennXryJA7SwrbVENAY78",
  "key10": "3hKfnz58WngXHrEvZs1v95c2xZxHfPVKfbNaNrPBKyQ4EjAAgP1cgBw9TLngas2GwFHEf5tdWCGDXkDpKQpubMHw",
  "key11": "YvQc5gwqgK4byTA1owNKUpBWfBNzWB5jBaSsDrNKuuPVhjq5eSX4s7qrhNhFia6RxE36xaYzPZNfFaFiYfq9Ca4",
  "key12": "57tFNWwXbjgonfsEKk6R3Qpoy5oKG3FXRgaNViVBSdLt6Bajd6GEzHfWe3dftUJkd5kBgjqsjgNeovE5xk2SYQtD",
  "key13": "3BJeeqJPJ5mXnbGzPWet1ZjKitCjZ2eNLyBiitHBrumSQRF41RjkRadooGTV1FX2nnudimH86QKvF32dLBV6iaxw",
  "key14": "63ziDedjs6j2M4P1ZVGkz2CgJZPfp8S6DYetWmV57vuFQ8N2tUb3kBiq4V7dAtckAKeihtPHpPsg9DCrvVbf6j5c",
  "key15": "2hEhSZ2zYe8CMW3sxZbkaquFoU7yCAiprSyW1UgefzJUM9UDSoWyjfuxfb1nsN7CNznybftLuUMKuqDiWBSvUQrJ",
  "key16": "4vQgTcffeKGYXYMtubgqegSpD4YnaQ6rS52XeLwtSajbkYCwRPg5UdGfJiWmvd8u3hFMphYX36CBxbpHFMZgyW2s",
  "key17": "3QAYJfmudyKKqCN5rNxBwLFF1GH6SCNi7AmpcyvBjADBNhbKPJ2CU8bQf4NxBpUA49LhN1oET4HNiF5noxkm41zX",
  "key18": "3mRRoBg8y5ewjNKFawMoLmAk4rsm25TiNRV8fuTgwqFitY2GRM5emo97wUYiQh7QJpsKNFpVh8AHbn9FqHt89bfW",
  "key19": "5n4nt57c6Ak5QtPkuEaxMTwXe9B74Z92csXomf441QnNjehpef3885QeYTpQwJ2kuzt2sGfwQD6J3sbcnEx7DMFF",
  "key20": "5zVTiwFRoptTeoytFeuv6zhg1zsWy7vt7azH3JJn1qpggdFDuP41JYy7GsPBdmhBmL1HC9dPYdmihhaKJ4HqsnbB",
  "key21": "5Bk9ibD391FjRrwc4GCmKUp5uD54Vh9y9HSo2axbXw8DDYae23ksv4PGrwiauViQH79jJrecWx3xhbHeWQjnUmuS",
  "key22": "5wi8skbbfYAU3iDKwUjySnS63GpA1bDzoQ9fJ8S9QEvdfKVoNzDd5zJuiFhvKkeHTj5jVtBm5qwPtuGaEu7G6yQ1",
  "key23": "5RtxmQEVYAvfGKM2UvKTxeKCEc5AiszHLEW9yT2jmmcFD7goF7EBvts1Lh3CuTSHHKS5mwwHQAwoXEdHawKAgKF6",
  "key24": "2qWCWpyE3pqunM5pbhUhgE3zSrXPxZ3jmdN6WD8ygMihkuqKsQ8tkXFVFtTTjbGSFL4aB2Ndp4zCucjpBRHCh1Z7",
  "key25": "Ndos9jZPkdmD6uUkBdjGC9xHJjSaapsEj6sxssitk9NcGaRtzP3Buc8HuBe3JR7L6L4VzExqDebGCRWtSJv6Nou",
  "key26": "TsAYNNNYiN6Gu4LF88d2CmFyNjPmAk4EaZGiPUe9FEHnxjcyUoW5LBxDP8gxJgVCHMKCbYohi8EQ4S4VDt8ko43",
  "key27": "3p3YehsTR5dgqWXLpXMuk8ugvFpncWtjXdGFQrSNPn2xHRhjoUDNZJoRqq2yZSGvr6uobYgRvBbq5FeTngZoUJ2e",
  "key28": "5QQE1nSpZQPxw2viw8C3rFabxyDSZj8u9Y9JsJ5PTmKYGEjj26e99mJ7JXZQH2p4EmjoTqkNatwXLdPRAUv86VFW",
  "key29": "2mLccmCKmDvJriHJcNosAowcdJere68EXZYYpcvpXP34Yow6481MW7Pqc5pkU8ZbUQA57oVGQDyQmCeCnDnmkYh5",
  "key30": "2TsUwL8dC9ps6srAQqLv1q4NHPwvf7sfV1WWceqcBLYQTAd2DpQX6zHsVby7KE6JcnibuYZLX4NRj9FitLgPooAA",
  "key31": "5bzbX8C8Vtz9CrguNeG3dAokexJ2A4htPGWua4pp8bNzqabSgGGgKx6qAkdttiAkdd8ev86Wf594gtwTcBuKtsLf",
  "key32": "WiyEGnyeNKUf7H8cVv3AqkQL1LU3cngKaqRSrermhjWTt1SigPd6Sv9s7St4woafM5DAbf7TRp9q3xVZNwmNzNH",
  "key33": "5KKt6vhMUYspMxSqWTLs8dKqBYafeYysRqYNDPHxS8fGhZmLoYjRWWPw3DSVjbGaVGhnYnsHt6gew6djMr8ZwnoN",
  "key34": "24kBgtS4RcFWLS3iCxf3MDrReWtUmvyiKpuuZG2RW3mS2yEBQyrbxUgHyWCAyEgMqd2VwmdRjyou8g2Lz7AwTYPN",
  "key35": "124vEaP7sZBfHGxNJmeoK2pdVZ5Z2u1C6jP7dQwB7UAiptio6gupqgRs2QFT6faQ3s42S955qXDuDTbacyWy5YFA",
  "key36": "4vFVpPt5fiwAFAzBPHaZ2A6FRg7jFbHSbMAXxiP6C4Rkh75R7H4MKJCaoZhbHUsk1NVwT4tMGncESGFd6tHpPL6",
  "key37": "4wrZBsRcb9SKMZppGkzTMnrX9J74gZFFNx2BUvguuHSKFZhddEGNCsB2cmicdQoR5Fn66Guc9YjDpwS4hgy9Qxwc",
  "key38": "3QC58mhRiGLpmqPH3aL8L7FZySpSu4ax7xbM3H14fneVoYEhqAs7ecmnqJoagtMMFTRWUQz91fhkx1jfgqCWyHe3",
  "key39": "4yadi8Mjy6W9gT5LtKX6C4m8QuYfdENW1LzndK5pHY4pxWWEnaR2CxmG4S2GcCpDsMW25jwSp4NEtcHa64BjcGef",
  "key40": "2JZu84oCQSx5Z1xuBwQmAYKKZoNN3uE2Tti6a5hwDUvs74nugFG5RA3et3ZHgTPyPBHFxrsgwh2QFP9TmjuTRs69",
  "key41": "2MRPY9b6s1mxKXCx9uARWCdX6PsnXVbcorBPcSwMNmCBitrzgauHbdehy9JJxJ42ChrohF6vpRiLyWtucwzHUtHo",
  "key42": "qPmSSUZqtfYpL7foDVM5bJemdRmsFiiEEHD26VHUyrNGHP7T8SdVQBjrT6LQmC7WLcU5yvbpA3vQCqQMkaNE2JN",
  "key43": "x3v72XNrxoKL4utZcv6DwYzhLGaPFHoRP8theV3khUWkeoVrcCXrEtATvEKnQhZofeJje8PZFueZrJUTDHP8iCy",
  "key44": "Kh3kNXAPCJkuK7YD1Soz48oaAb29yeCK4eh33UZz1VhTiiG6HFkcPm29LQqx81BgNzuwC9RpMT7a3MvgYUyy141",
  "key45": "482Pu1T7nXihr37vMVz3dx7LeQBpshwPVpK3GKyqFMo6m5UQGxmcKou2BBuzDTRd6dqjhmrjf1wAUhfutg4mRZvP"
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
