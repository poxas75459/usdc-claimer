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
    "5DfT3Uzn82WxyYoS8p4koVd4ZGdXF5us9izJwWDQUCaZCfoSdYsaMReaw1s9aWZRpxtiwCcMgwF21vcQQMy9iMBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDJNkYcwyySDZCZHUaXC9knoVyRt9Z1S8tRXGKayGjx4Y9fKkQ63npww5DqURGWj5LVWyXLT7idmS7aoqTrviFA",
  "key1": "2GyNs6Ne5ikBmsuANeFnvT4FmevxUFHkykQfqSLAXiiCDxVfEnMGU5TK1m95jj8y75u5x5qbJAYpqFRk5DmutLoQ",
  "key2": "4amme2tzzA64y1gHZPn9Jst4VheSa855Sr5NaqvLytbZQRswXceAcLckdJVcYtw11p1G94VTxmads2sXfBCZ3vey",
  "key3": "5eUZjYFxEHvfmPXs3cgmqxs6WZ7H97j84HnTcxRqgyJzHeokRurvUZ1cXuzGpuM3y6SRBacda8oqG75qWwjPDYkE",
  "key4": "67DkvaqYrDMJMP8WowGWj35TF99ce1oNiUYwfDvQ4XhfYPt495Le25ZcKwz8gPKYfwDmvCJsMowHQVHVNGJEUrzZ",
  "key5": "WfDxPBsfWDJpQ7AY6rcBSbwA7HwYrYnphmirdFdVBcF7Tuaxy2aSoPHihEAtUR2VeiVMmxiRtrhPPoA6UzsmuZ9",
  "key6": "5VUyreG2fdWMZzakqAna5z6g8oTqfSjbXizVF1UWqiCo9NuGLTX32A2P4xqZrimA37BAcxn6me3po4m2uaeXnxAX",
  "key7": "5r1PGDpSkTDjQ2u79F7DmG9qQAaaugCSnmDu6smXFHNrMG427TgcpWkMAuGraJi2ARqayA12FzYTnrETNVcJLZEd",
  "key8": "58RWn8BDhEvPmnTxwbP38rGVqNMy5PcDZ5qgaqS7YRg29tDSuVjNrFip5N7WkArwwiKNXorjcg6EQTiLR5nuaerp",
  "key9": "5Z6sfJ2JAZjBgfgiJXoSUbpYdDPskcpJcQw2MKvEcJNnjB71dxeiiNvfqZ71hgfVzCyMmgymGEsWfuk7qaxGcpk9",
  "key10": "n42PvGBAWDrgmFsAPQM4vX5Zs8jwMURh35JWtJEZD7kSSLLzfdnkh9E5ePk14r41oTgVWvcUrvXm7ynNgdETG7D",
  "key11": "UjrACL9TTBfdMT5kpjn81m9oF3JBQ4NY26jtkdN6ZdQEU2YfETdcwQ7pNSdEs9jxNbNW4WYArAC6MR6ED8c7J2e",
  "key12": "9CrCxo6PxKeK4sD3vMuGhos2ezEejnqWvQ9S5QcHAuQtcG3byGNfjahfWxynb4Rwf5fjLPgCdLSX1DtgDEbY2Gu",
  "key13": "22hzyjxsPV16KF4iBvx76CryBsqiv4z1MAueKBEtYYuFGjKZ3hmapP28otTC2GdaLVgRJodxnurSEUhCXXRUuoU6",
  "key14": "1YswR9fCiABHth8ByM226w4o4DRDV5iJakDGmiCpdZZNUmafLkZsJC58dpCCQWTbaL8GpsTD8HQhqmR4aqZSANw",
  "key15": "b8jA4ETuRSjTqDCxM8X7L4SV5Gaq7FnBr2JcekmrKDAjTHf7zvuEqTgEsVHGeFMNT97yykncc2iHt19STiFV3Ra",
  "key16": "5m6bF2eAfkTXimsngich18Cx5Sa61g4jd69C8LDLURdCyoQCceFN8a2JhdAuiZqGXXXsBiSF9j7xxqv9t3cKKjLc",
  "key17": "HXD9ffBMu9VkmYdPPWqj9pAYXJAf54Wz68kzDesYgaQJ7R19LHrdhTEDPDU2uPwHZzZ3fLn7NGbUvs2MNch4DEP",
  "key18": "3462pZiP7criZnfS7Z8EGCYRvVcUngmqhjvNVuhdNH7sjzcDJV4PoS4TLky9DCgYHbi6EdFkD5Xao57Q8tGMrCo7",
  "key19": "3ucqYV3Mg7KqbkYuHnfzUYb2yositZd7uur2LSrfALhVn3JKcSFHRxEoeagweaN3ZFpf6Ya9e1NuMWm9Poun1UHw",
  "key20": "5svPYdUKb7KPEHFjYTWMQTqsPPziipMVci8ngGRu2MPwUT7dAJ5MjtWacCy4PNL1e2pqCpXg4zvvxmqXVAGHuHqG",
  "key21": "3gVxY2fHMfYakTnrFJVMYQG34FDWcLd94gs6qHbGYFzgUK29Ki7grha1P63cFjRD4X1qNo49FNsdE6FEU6WJQkar",
  "key22": "3wUEHf3wx1NaHg1FnCwXsy5bAXhZjCsCyKeCXPp3UWjkd1esftW29E1vzLXoTXi6KTp6YdrYEosDFLH5todDCuai",
  "key23": "48pyyb1t7C3nY49Q2yqSDqJpZzbqF5CtfaiRaXvbLBorv2u4Qjwsh4oRbHiLf8nfH8CYyBP15m9tq2DBZpHT8x3n",
  "key24": "4rgXbph8EUyCAGgnDSd5mb9LiV7XeiL26iE5QmDwVJ4fi45tK7y4jZ6b9nM2yErpU16d1AcfWvvyonTJdbQ8Ch8U",
  "key25": "kUZGrJF3hvhoVBED6mFYHGSreE7fs1fBTopbZT38k3bvGZgzRURGLmqphcTawXSC2oihyQpcwrhNzsuQ3Vw6XJi",
  "key26": "4tzf6f5ShgYwjeH3Yvd9yGvJcotkBGkyB9bPfAx36EDSsC8DhXRJ7Lrp9KsYJ7a2VRkCcUJ5t2wdaVsD1iwHjQTS",
  "key27": "wo95ZtQyUruycLqvM348juZAC4dnsYSxAebXNbp87etoo6dazCZd83botqMpBKeLcePNRpV3d374v2eV2qh1Tz2",
  "key28": "5F89JNjTyXGbyfdC8xCXc4dFoLRXssVzx9oeqwQFhCWm99NExxNektv4yhnTzvVaXKkSkJ5yfoYrRCXSHPppr1Qk",
  "key29": "KCDnJKUHxBT1zr1cnSFk7NJJ2hWN8AHFdR4W4mEF13ZAH82TbyrRPLkvrZnVunTcgLXRoHBTXE4iWg5Hc5GYZKa",
  "key30": "4pUeCDV2VSPB4XpRYwxpb7TreWUWoWHhSj933oXK4q2zjrsrRV6zJ5Xk4F9ctXW94mjDjxSSReetLRjTAWqBxMrP",
  "key31": "bvNgARvk7fFCCWMSiFpBdM9CbX9EBUzct3GW4na8BPM2xFKtR7mK2LLLuP8MqqduQz3QkA2gLh7RTeZnujnAibn",
  "key32": "27zx7HCtPMcVvB3jMW7tRCw4CgbMrmz5BW7UiFgv9cJtn51hsA4Gd3EeAQCxaH26VQ78uP5vptJkZuVVi9gvpeDm",
  "key33": "5y2bK5wGw5SC6k9UJugqcw7A7oXD1nushBDdYQd9jmGS8or2DbbkxKZ5mUvWU6ezrFrxSsr61uEX89JWxtH5bk9a",
  "key34": "3SqwgoHuPir6sDQNVqq5Y1kNbJaDSi1NzmXWEQ2D1kGWhD3zT6nSpSNmHqUeu3RVyzYMnpfAaiavqdA3URFnddBT",
  "key35": "4wjAQPqcRNaRjJAcoNf4DyLrP43gkcQtViLpQYcBMGYwWnyGZQw1nzWmk4PZuST2iPkv4C2CbozohJZtjJAprsGy",
  "key36": "dELfC8gCTpTgoDpG2K6jogV17dPmh98MdeWZi1dERDZ5PJhtjjs3B9yYpiVrtVuAZ5EgnaJKLoUfuL9GjME6ksr",
  "key37": "27gwMmSPUD4oJ9iVB8jJDLAg7NcMScambqmbkE6qLs9umivTH6FFHwkHaetQxJAYAnCHNvkYHLkc794q4DsTivZ5",
  "key38": "44gdQr8Z7mD5ffxrA7JtkywuNehwadfrNuyGZQ1ReYAfrUjh5UdR4XhMLwvoqtjpzZF7YmLhXmHwgBzq9x51WyE2",
  "key39": "2Kk3vixmkpwqAjZp2TsVofN2rusaLiwZvjQNwwmgtNDWJstvgUMZhsR1uj5mo2KS7Zb4JwGtrfxwXzpjywKmkfWS",
  "key40": "AoRmTdQe41x1P1b79MiKgafxokXMZVBmL9iQ1evHjGR7WmQyvzRcCj1hwDQ99Tqfys7ekCRP6TfugNKSRAGXfse",
  "key41": "3FFDZT3MzJ85MvRzjapcKH7d26WnTEEefjk1M5Dv63K3zfCSaYnJVorHFeiaAmSxfzdXSf1JqdK4znNcKXVjGsVV",
  "key42": "3jFydFugnPMqMDWmk6HUSD2MY2w8CUMjqvYxRCDFbSvenFWwYXv4JrLGASDSWeBa8qTUsaNgKKWr2vsq8ZFj67gY",
  "key43": "5yXvVgZjV11EttngLGqFVAR1uTEieWVTW1BgxmNEixhTkMWG4qzdoW6B5Kghk6As7iRMFHNeWgJMN7xdp87Fhe9u",
  "key44": "XghMiVyf8dcPevVSmDfQUBkMxuF88Z92rVJzD37Rth4esY9bTnLdbFg2bRT91Uf9x3Q2DKBVqDPkEVQYcz6qYio"
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
