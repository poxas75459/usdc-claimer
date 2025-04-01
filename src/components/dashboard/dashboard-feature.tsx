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
    "4W9qD3UFQ3ap5tfMjtWWGNHysfHQRyoddPWAcY5dBExrYcsEgxeWAEUTgz73Z18dwEejHHyKPbkA6wVdWdHHUvRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZEwaH1P8xLefa3H1oN25i52wGvjAaifR89Qyd3YpvTTjyeeJNXt5mxawpa1hAe1yj7GJpzkd1AcgnHjvbBqc9x",
  "key1": "5YyJ5GAFL3U4nmZo6RWqfE9QApzWYgxTRmWBQ2NBkPYqBL9vT52JJkbJWuSEmazoVEFhuzW4odsNBi4TTevDrvGd",
  "key2": "2F8eBnMJFPB3jve2uusny52zJrDs7f2w7caJt6cDJXrJgwRDjtMeji9r4T4pDuP7XAMNFF8jnhCUgWcfqcT4x7Xh",
  "key3": "2dYKyc5xohkGvQhb3PAPxt4kqPQGE93XkxfF83NfmQyRGpxcbTjyxi25fSxiq22DbQfAvN6p5uqxcaEY268bPr7p",
  "key4": "5Kb4XxPvmDseo4FLp4A48WmB5mpBZZfZYrxL6o1ZCMHeUqHvJS4RA9Ctpc2vKz9WGHQyKeCnH5frCcrSW7s3dRko",
  "key5": "2UKurB4pk2fuc6aDcAoQthj5wQQDgWFtnCRjCZv39Nm6Ni54wTYNiMVXJQSeHXcmVmvr4aPtHTDwbv2yBCBzyDMa",
  "key6": "3AXcQLbfsY6usLFuFwuwmAQJ76RLparSoNcVfSwTX7PwBd23BjVyqEtJWuvLm2eqJcdQwtGb9zv9mSyUwzJU9rCJ",
  "key7": "3CKL2TkE5dEBxFK3yp3vCfoWW5niakHLRw1GyiYYeDoxrH99DDy3JmA1n9aaogcG7ZTptzMUyC6Y6s8dnogZwwU5",
  "key8": "2WfXKzoidpAMEApb3hxv2cvmKVF9AaymBgsNcFxpz7XvpL4bYW1fWEJujX1q9ZuP7kkEDSi4CkrAUApFEfZ8dLQA",
  "key9": "5tNaKa4onGT2smgoaY18tXxrnxem3KrEY33xQoU6ipptUjPFWVSBEmtnjrxaKkumP8H9KTbN1TGHZ6v4TDX7B1xa",
  "key10": "4odJg36z6yZ9mdegb6EHUm2htc63vjuVegqTP3JNBEUUBRtQx4fazhZum4hj88ZqdTSnRb6VdksmTpnE5yaFQ6EK",
  "key11": "UEwefZqSYcckQywnAZyeHvBc3oF8J1vBd8YwK2yEwKGsgmaywe8P3Bbbjnv7Fc4Ahhsgi2V96ubEbxfaY5qfQNs",
  "key12": "FEdmWSejgwmaLFBjGkZtafrDbeoUwPnkvZyR8uNn1oPqjRhnZBFsnGToCVV2WFHdHLxwTx8E9U55U3nLAcErdT1",
  "key13": "5zZiRrySpQLYTBed9mKoCnKqXfNstrvA3g2NKLkECrBG589RqNagw7WLEy9jRtGamj5GPASVCwiVvE4JGURizFsb",
  "key14": "3PxR1dWKKvEpaTMaYB8ePz2cC3faS8FMq2SLq83ddKs72c8iAmLTABR4CGXWNb8j2ho7dGD7S9XKSCQiJmPiecxj",
  "key15": "4BhDkgiYZ3qPZE5FF138cCj2KsgPXabnavoNSrtu2iqXdFpmGrCuJgSwKaWWm4qo2oGeDnFJkipybHhPpVpGRyhU",
  "key16": "2SWDnAafjDndVwYkMZSLekMZPJ2PDovpZBN2RpSyEKDoMC2Qo1BnTyPJUjjBHkbnXuvKUcnHQur6BcwDxyTSga87",
  "key17": "4Gq1ZAHSVVwdyx93BzzHHp6uaKFEAfj4FR88xLSFX7Qus4Ru3xKtjCtnFAC9oGJFunX3CBVaSwnaTkdnYtTsNGo",
  "key18": "424kzxyPfMbayMyxYViFiuDN8zrqrSd3KVXRY38Xm6WRT6jFyroDSJjgELYQKx1Qc86M2heipwKNE2oSPEKjquXf",
  "key19": "CuinRToCzHiACzFQhfbjaMnzvbXsVP4Zr3UVCVPq4S641EnZdDnMuEoRkp85NhJP8ckZ9G9UeW8KqnhY2invBtR",
  "key20": "3zLJQYZnntMd5PuL7nGLAdoUyWALEGYeG3hxiZH2ZVMHZQ6hQQXrRpzMWQ6wPhXJ1Lz5fFzdbGq3GJS8oSTp66LT",
  "key21": "5AjpZkogRJWYCmPG5BwjUcw57Y4ntibcbCCpxtDhZKRNMs1NCPhaN2giRgVyKRPe2zasW6JteNhNaZgK4sCgAfgc",
  "key22": "hjBQYXRvgztu2jH6ZRpPMtuQYevsr3oxaJ446n6GmGd44ZFEYvnfPQQvj59NUFnf67pnxeFLqYEFif9gk2zx8KL",
  "key23": "hs2YLUKYMAcMS2WM2LNiMFRHz16QJybvPpGEkYstbhaGTGsD6y95yj1KPHpTsrdLXZyHWUfHv3dtPNxrbv4jfRJ",
  "key24": "5Sqp8hHoTSTfKf7ijuMLia7cQZDf8qQPWUx5gfpXoQ5XkA91r4uMySCi8dHGgn8RRBN6gHNxJQhU5Fevtc5vnDPk",
  "key25": "3jDYvxU2feECG4ckkLqaud23wZYq8GWWv6z6KkUTdrdNAiJoin8AWv4gs1q67tB5cqNL9UzcGQEkb7sseTosmZd",
  "key26": "JHKPX48HDtpaS7WVNXJUcPUzftuvptWDzcnoMVCgzqpYCgcWToq5Jp82n8auWpQc7vn2pDgZTzEL2ix7CTccUDT",
  "key27": "B12gUnaBfgLraKwrfQTzTKpPYdW4QoAa8JNXdKtUw2XC2jaf1Q83mixnTY1YNBxSRWWpLcaVJh559Rd2Uzh21J9",
  "key28": "5UcQ3g492xf23afsN4zjbyTjQV51JnuXgbvy48CAs9vfqLkwi9uvygvArH97AS3c2BnbiV4EFVLt85aaWiH55N7Y",
  "key29": "2Evfy6HYznrDpFyPyp2C6v3pWWRP7QayDBFSojVqSigvvfPCd81y3BJbynioMkJjhFWZ9rbUwR1GXE76wvYdVwEk",
  "key30": "5sAQzrxwJaSyEqZVBgeDGqhgX9ETZ2UhTVwkJnECWb1cWSDJeA5TvuHs3sTez5EBuZpKXDh5UiQskCDieESBFSzQ",
  "key31": "E98w4AyXc6hP4SPXuD2nmRVcGjaBmsoqc5z9rftf9TBVWvPznng46FbEKafiFNmtxSYtdrzZWNTc6417SoP4oKV",
  "key32": "29W4XcKfhVouzqxaCAvyFrWiD7yBp6McBNK53JMhBoFsKG1h1ofdQx27QvhJ8PMizp6eafBjRmuCu4T9b6k4A5Kg",
  "key33": "2gLeBgF9mRvjtwNTFXcJN3T1vwZRj3ShtmetHfTFU6tGSAvrwq4RMG1pyzVDWkUdSbCL1RE8Voy28Q2ifhoSXtdu",
  "key34": "63SPBN2VemxiGwvWhxTnWQTH9NLNPdBFLTVpXwVWsYCWgB4qDfohXR2tDYeutWHNpc4Xp9gSjPsfLVfSL7LYunog",
  "key35": "NigS2Ym4F5eLETprmc5DXS33gZ7Y22D5tjs2xLBMRkWs5fmR42fm5e86JLAipitzTnmhfUyzrvoSstPEq342rtT",
  "key36": "57QCRFKsReGgKwtwCMyN6qsGMiWvBfsZZR54CukhSnRsjcxKcAvc99J1iCiPH8u2iMybNTjLSVdJyjBG7oeifLdF",
  "key37": "2bPnSC8o6Ym6SZkD6FUmfVrk8c6x3SuAi4piebvwg2R6Y5bfTUrgpq4Lz9k8aMrmiC4wcvDvXWgxJbpTnvX4Xkbp",
  "key38": "3tN2utdRtapH9XuwRak3CsbBMqtfenqy8jMxTF5Ym4gXuAaaoTHzPSM2bJ9xd57sEh9JRX7BMJJGyVyF7zXgaba8",
  "key39": "2bTSmbSCJxwEWpGKmBmj7BeTNDehihBYbgXcXBN9XRTC9zJp42gHdosmmSDyJHERn3cLfgPTqLN87zEUGxFkDqVL",
  "key40": "3Td7tLvtu1LkjsizXqjHvErD21MzDsVZ3TfEsF1hdayofVmGQfuc68EJ8u1Jp3N8fvyG1kwkBR1kG2BiuYWVWZGk",
  "key41": "2uVsjVYV4rh5mcinNANAEcX2BuDcKhPzkvcvDMAqobW1ortKsGAo48uEMbKqEFKigRZuJk2MryNgvGQBWwE21F8a",
  "key42": "9jCZGcme4wQn3Xo3pRoLH4jCY2kJtYyJTqZkjdpeyV2hcDZYxfsrbczerm3obv7egAcupwJZT2HavfMC8qnMaWK",
  "key43": "5rSv3eHUhHJCuTiaCpdMBAnzg71icrYM8jNiNMT4F1M5pjrxnVVtwhMk9bmLoXa9zot8SAC47bJcL3UzXu67SggU",
  "key44": "qCqH78bGRjjYY8mni5HydLL7UGPYiWVhJEtJVKTV6DxmNT5TCLTuVTHGFkpDvtrZLcwaFDNiA9Uu9g9gDzQkaeQ",
  "key45": "2MbaKRTET98dDeXbcV8ajsMfV1nX1Phju3YMLzUY2djzCKqrtvEmcFLCFMk7SHUXGqEQ3oV8PdNpXCH2ThB4DkW4"
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
