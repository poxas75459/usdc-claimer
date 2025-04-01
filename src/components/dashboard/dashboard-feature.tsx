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
    "mqNyJ19YvjPtNvY1Scbb97ubyiHntZZuUHTrGe3pvosjJS8Na5RZK6xAe6YL62io3T7AtYa8UV7oJP9SHiUsX8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RBH3EsdugHHhR4dRscqDRxFzJiCL62ak13ZpFNSoAgRDWBpVpfCLgvDaF9sa2MGm4ZkuApJAHn1B4jyQhT4ycF6",
  "key1": "jtJVCSTEJ1bg39YiEFuHKGMqGAjtyT7hLDCdCmL2tcG2JqgCQd41JBDFFd6KA3UTFRgxsQigfTta7JmwoU9h4fx",
  "key2": "52vbbNHHTLkqFJ4tEYXkEhsnWQPBTPEER9TKnPFTXZdrdd8p2tgUpLH7fJGqnbpssNdc9zeDhjrKohx5M3bYZSpx",
  "key3": "4hZRmKYco4r9v1tA5xECSiB4DTZhKzkMmrxzyZxnWwf8hSbiuGqNfWypkGdDjsKr1tyVBHJCEJxw3TC7yLPmjGVf",
  "key4": "MmsGT5gpahf6LMigfZDxL1yRCokwH1xNdnmSoGN8ypejRUkGZxzXWXfMPifhKQ4PXsFCUYkBfnyQFRyKSumExEt",
  "key5": "3ap9BxRG2fKtihRqEtvBLGiXLGim4T1x2f7XEvkjUmySaxEKGCJVsPoPPBuKSXQucV1SqkhG9s6r6b2RX8Snmoe8",
  "key6": "G3DBTuhNwzTQDSuhCNckencnhFURCrjh2t6rLgQMB2GFC4Zc57S9ESPDvnBsotdWxH1ejJVJWGXtwG9hdK2vVst",
  "key7": "2F55efudqZGhfWzoMa9t4g22q7Q5jJBh8iztwb66rb5NqXG3YtMfbndsn1fYfE4VKzp7EU15crBQ6ZVvPxb6HnEh",
  "key8": "3LYtRh6x2znpPUohMzePysMesWZkbGc5TGFxmfZNanysSzKLfsTE5rRKGEfe8BinA2PrvW4rf2n9ULQoyAjWZtrt",
  "key9": "3siDNGJz99CBKsPWs1znBP5nfgjRZL5pfiKDz88L4nw26shG1cqQsF1D1DLNj26pZ82McrK7kxDpGMxdS5sUu6e2",
  "key10": "59Y9eas24451rN1eXdDBCvPgpguirVu6YY9LvisPV5FnTsCrYN3Ksyqbf1eGuYpdzYp25ifoiDQpxYyrrxbeY2DA",
  "key11": "2AcFthaNtPWdgvSYWRQJPZtMCaZct22q7DUT6BX1hAoMkmA9Wbni8UfVqVH9khercj5iaVPcTKh99JBFApvpzJ9G",
  "key12": "65CTDE7qKMhgQuFeV212yUCFxj9Mx7iYEAViQbsPfbtc575RVGCXLAg9o9d4RP6Gv5FTjtgyu4KGFD7XQ9SUw291",
  "key13": "2X3kF7Z3aUNUweg1Mx4YfUUVoRtJQyD5BhKTDVm2tPqKUmN7z6N2UBE3sUYCWYSZLFfqSLU4Cu2FU9sJy5dA8gGX",
  "key14": "5a8MY3P78gk5jLxDsCmjUnF9BH24b8xU62hstTof9dcdr8cni21jMVtkYT3SqMouSqNdkSqcZC9CFZSmgW1zR74R",
  "key15": "5NPU3npNz2Y4TL7byH4c6zu2ZHebnvL4hkwsfhGGMHRto5MsvE4eWCbL6TrjWhMhjdecbbtvo45NHSEVM6ebjn5v",
  "key16": "L1EXQH4dWcmQFL41C3YSx2xvAsgsh3DwLa8gmoCUnCXtrYwumNdwgnXNhi4ovwGRFvnv118nsi1z3bto93D2DHT",
  "key17": "3942KWJU8oieo95XnxBpTtJwPysy5Z8LtPfz6LBKXoPapzBxQcDktsuDWGsWd5Qr1do1eYfBtpjbuf9LomNwoK48",
  "key18": "4YnVKkRewebrATMYuMQh4W8cuKbrvMPcJEWYLXffAkqrgXXgtCFkVyoLFgbuniH4fN3iboq12fzCX1zyAtMEFyzP",
  "key19": "4pLGaNaV2kfZjnTWwUuD1bzSnrFvrQakz7sxr6Fa79m5sKn1BKo8d6vf44Zn1YcNWUMb8DWZRpQ6P1NbLworrYey",
  "key20": "2rhqPRQqv2B9fKWgASf1oQ4x1bgB1mNXQfspiHcKCQRGqrM8xtF8yxKCRnHkQdjgNVCdDXTvgsM3CAEvJfTN1Fr",
  "key21": "59CprMTcUSvaKZMnPon4EMJvA8GKMsWfhWzCqZndJ954i8V7qgoytxdztv1icizqGGZoTM5C8cW1DykELgRgJraE",
  "key22": "5Spb2M5yYXCNTyiXUL6D9Wk2kgP7CEyQAYN1vDkhejCYT1Dv4ZVWgHABGcqYDAirMrXTvhWALkyDfMW35SZSTpf4",
  "key23": "4XPR8CAHdA8BCud4geiRRfHDEwvhxFS8z3M19hnZuJQoCXHR4Psfkc8h4werwQ7ekRpMJDfARits3ZCdeGX74fzV",
  "key24": "4kDPaUNgcnYVSqGRCqtS2QurftkrpYrAeLw11XXdUTsrKc8EViPLU2joGCTXdqRAaJPQAgFRCCX3LRhe5VXwVWzZ",
  "key25": "2sfu1vK6w8R5p1ihSFyo93UQ5PDwimKhzFqHCGyDvpNQJhwh1msC4CVpMqQ3RmKcdsr1Xs9oM2Hg2d4RUvWjkidR",
  "key26": "5mh1PhRCbsb3SnXgSeLPYnDPGJE34azRPkFvhLM1wSVi3owb56oyvmZu3PMBAFikhb959psZtHkqSjjKT31tmoVR",
  "key27": "bhwVUvJeAmggQqui4TcXzggHMwzAAsEuJBg1cTZGy6cvtwMXjQUNSyMYiN8ZvinZ1TUhHLW8rGtyXemvpqxXqT8",
  "key28": "iWoVXJKLsoo8RjJy3cKhtx6ZnL7zKP5GXtXoRetLn4u6a4RrVaiFKdjxromTBKpAVQMFwsTZ6Wj5TwZ6xufiTLP",
  "key29": "3GCi41wFe54CG1oycWmF3eRoXv93He9aBd7GnDdRa8vksU8fhjSkVjz8EN3YwW1xEnWHhJ5kJs7Ei5enP3yUma9q",
  "key30": "5fxg4zsSe9y2rDJWGKNHQzYjgXu1KW97u4HLfKrhjCuZnbmwF6i9CptcXWbFdc2CPC2B9bmy6EGKV7xVx37yrbyU",
  "key31": "3SnduuiyWPrWVjRkGXUM4tdb1VpofxZkf3aVqFBio7UGWY9PMoi8gPjZ7vr5dUgfwUp4yz3v8RuLDoy3skcx77wm",
  "key32": "3roAW68FyTdh8s3kaPazKGdiydGj4pvEqrKnzdiwGAp5X3RCEkLSeyJWGdobrKZKbaeF6BbHE9uG8dkT7q1J6HXw",
  "key33": "5fcPicjhaoCbgRXv5C3jfLW2PiHZuHNWYnAN39Ys7xZokjjLMgpB6APSyuDkRUR75Ze6rmU31d5MZaEexRg2D318",
  "key34": "2QuZxaa82tQFSaRkTPDNQqPjuA8FhzephArQ3YStG5vd4Lsnoqn99kD6tHhpM5uLaWSZC5hkuDzM3QfHEyh4tNsP",
  "key35": "Th7V6xEEBXCTkC3UqDUnMgYY6sxi7LzDDMrF17HX11aegbcSw2bisDNLqTebooQTqohnorpc6hHPq1WdwfGaMbK",
  "key36": "xk1bgVnbSs3vxUY2ujXr8FAjesJK2YxGJ6ZznGCW7A5rrDTMQ65qdVrWDDqa6sST6CzqcFShGraTbHBnGLHrWUL",
  "key37": "SmSuRAtDbxTQc1t4RprY9Ci1TWxm9RjFnpS7KoVT2XjB5QVCkpRQYavs8g8Bir4L77B9MCA4oiuqjpaHuwPUDKL",
  "key38": "jWHac6kAw7p6KX3Sbag2DvTVLt3xKzr6KGxmFdUZLJsLPv7kSgVVnY14ET1yWucrFxF14u1dHzzBTTd2qNP9PZU",
  "key39": "5SWE92hqcF9d82LNwxfFQSRY9evt3PeStin1EqnM3fFKoijxE9DwnLW45sna38HsqjZhyyzJJFH6PgEMntwmpfgo",
  "key40": "3wsUNRe4gm4yRfHtPpGZy1oX9GDx3db3f554qSTc8M9T9KuFjZunCx7wjSwcVBmdFWVhsNjmKpk2NUUiTggxgEuh",
  "key41": "YYjzDeqr29hyG1w869Hp27cGErzCLrtAoZizxhEmSc6XeeAAgbjAyLfmB2zKfy3Nhj7syjT23HhZoBzwgU1A3jR",
  "key42": "2cKnM9gNSTjWeBaeU2bUoytNSR3kTKoW5LoKY57o34nSkUF6dPu69oHGxhddgNCPT3DFNFhZJNCeXNj1ztov4YTB",
  "key43": "3BVPwYJX5GdcAFn5rTXPFSNpGacjCWHmDWieFE75Y56NBVDYw2CY3GisYcrz8JYvQ8DdrkhDcU1Q9oDjHHiBswyd",
  "key44": "5b4igDGMHHjoi76bZ4bkBMrB1jvMAWR3gFkThB4ybtYFBNdUZyCS4QEZ91KR9wjjVJRc6iwVVN55i4MubtxZ8mZo",
  "key45": "2UiN765M4j6fyjQp4VzSiQZKaSgKyZjuk59wkNStqvdKAgot4S7Aiehda1w2vppCLBJTx1jtNddJE24G7UJDHA9q",
  "key46": "4DYxJbvd8JpTTWNsxEBSSjTNt9T82uarADYzDWhR4f1EhTxP82ruvjifZBbp8qzjHX2fZnrNkfw8GPwcKtKwyWJ4",
  "key47": "3pEZfGBAjZaGdPeko2KunPGd9fw19sZCm6RWe8PiRe2cJsBzFL6Yaw2aSmPCmTFLbt5XPqLL9tRUYWe1iwY7oQpe",
  "key48": "4ouyGoi8RpNf5HNUtVNvcBZAXSMqDWWUcQkHdQk3x1SkxSyv48fL5xXz58wQH83etuM93zKJjcGFsWoVr5qM35CN",
  "key49": "4EdyGsT6yWEd4gZyX7BxB8rRVPLZKDQ7aURu6YPDZwXpUFMrQLsb68Ympc6XvK4JH4t9nBD2JyxzddmTrRFwbqAn"
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
