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
    "3DFwEMYFBE3sZ3aWXRodbhNxcFD4GriRkjxEMsZWmgaDVdnKBSSsq1akQPFPhiLX1ZHi1bKPCe3tkD6TS1jvfDA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVHn14iG2uraJUWFUcAYKxzagqaAyD9yz7ZnX2bByJC3nuYm49GKDCU1Qj2oBJ2LbmfG3SY4uZLyUrGZUDzN7DD",
  "key1": "4xKhi3HUtSmGbVAumvpBCswSHsRSDB6SZVRi5FERBGpycSdb7Hs7rqkY9BRWYUK16WWhxXwjgGBXLzc5Hg3AZrM2",
  "key2": "4VN4udweXqxzTcP2xqPMHbfFv6NnbqFKNDeGKYJP3RjGPXM43Nu9QDt9Qjvkyx9JciUZ42KXRatXpUec3n1tttBY",
  "key3": "56miY8J7ej4fn8LEgVuBjP4aXoVMhaVp2h89anwkwedF2nnrHMAQtGhdgiYh1m72cjuRUZJKjNG6ZCQpystk97BA",
  "key4": "48xSVLcqYwJ5wbt7Yiofn5xuJtg9oj9PYUdnzg2zg3q2RVNBzMuZXjhUVLRSpaCoxtMenzumKGf2LjLCNhonKaB9",
  "key5": "5kpGWD8T42XNGjsZwQotaiNpp7hNA5ksYT9CxzYP5sJLJsTW3bF4aYPg1wpHHteWBTFN3gsqJGqP6cUhaoUj1rKX",
  "key6": "4aGkGhrJWCokxM6e9Gd9YZPocsN8RyA9vXJc7DagpiFJ2bgzwVnT5qWnqsHAraoj7WFxHTHZzPUyGnH5oBVzu84o",
  "key7": "4xFnJS1Th9aqhsYeWZLSPP4wiYCSsQgi9EGoC4zkxfS7mW5WBimJuy2Fjp2CzLED3hXBHxibb7KQPqRuL6aQHgGJ",
  "key8": "63i5W6jV14H21AvQQQ7CsvQwoKZtRvZqCNZy9fCUcYxafh1UQ8gpSAHRtXZ2YZjt8jj3iryNGT9Fc6N2W5NDd1JW",
  "key9": "54e3GWpsEJXV4cemEH7R62zzCWsSgaNTWWrSwnFkVks4eKHJzQmYBJPaNFv3XdnfBZ8ewcPpphwxQbuWFHvw4Kik",
  "key10": "3kTz993FZUUb3hDNwu6NCdzWCRLdYNqhKFWRP2V2Ps2GU4hukemX2NidNXyMb7CzZANTTZmkkmSTARhH5MtUwbH7",
  "key11": "5ari4LTqjikHvdN2bTYpAkgJ3kQpeJPQ8JmWVFcDJsWMP4nC5UpG5dpQSmxpLPHLpfdEGSxppodfApH84SwxmZFS",
  "key12": "4CqEKunwxBeafv2PPQpNAgxz4mGWVLkLNhUnQu4NBqdsgHpBH6yuseshsXw3dmNBuarFuYNCf3tkpDzU6tASe7MJ",
  "key13": "31AcCRmvCFvF68kuqP6ruyXpBKE3B7bCepvSQMfaHuZEdBgM8Bi34vEtwhvzpKwbr9j2gkvmeqek2RF1iAm7ELco",
  "key14": "5vEQdaCvgz2MLybNesVtJS7ys2iMDE6vZ5r6MprhZjxToQddbbVELzkTob5kLCQgbVoJ4kyAjTh9P1H7wJMCFZo7",
  "key15": "4kRqFoKjytKF3T13FMvmL3k4Db7h1rHou59xo5MrTebR5QUwjfhfDy45SFMnRdqWe3wXEcCW8un7wDr5Gd6HpKf2",
  "key16": "4S8xFVV2uyCiujMjq1MwHjNhcRCCbxUTXrvcYQgd17PVyFa6Cjdj4ehSny6CdEoWpiBfNo7rqDs3iXWWj8KfpfCT",
  "key17": "RGv7ajCZcdBRxTv2mX7owm54gU2SJxPtyUUuYhZfRYA7KYrqjCHkLCfYzq3L3YKYbzkZrdvFEkpSYas25F483Q2",
  "key18": "akWbzXchaGk2bW2sBpy84htyokRXr5nzzi67DGxNR65522QYQJ3iErTuPvZUhuMTmtNcwFKFXLKLZLodfeKRV1R",
  "key19": "3WnX7eXjUDjNM7NxxcDL6amGr1RaPwMGeGMGsxZfpDRDLvvWaVkjJALCi9Lx7ihais6yjti41Mha9Suwrhnn5iiE",
  "key20": "dNbmQGLm22Li8rjXx51MxnKzTecVaGFmgFtjkWzwuKeySSm85kSryczBd2dL6FXSwFbKvqamv4L7FFGcfmhkiMU",
  "key21": "33sGSbHGRS9Tias7RecXsJ4WL3sAd5ezQL3Lg8gPxnAeyfk9dFT35oAVJbZdQraP8ADEngYEjFRAefdLtnmoofXx",
  "key22": "42YmMQoYVCMPK3BjaDAKfHsC2GEzFMocFwsuJYPUk3RgYKG3veV7UKbpiW3oC2D52S3DmtnRmXKfZqy38eTsB4CC",
  "key23": "MbWXGsAtcLbHJ6oELdcHTND4eWwspKFjeNBPy1gPQWWNzFLLUrKv1ggzXNtqgdQpWHmENikVfK7hv8gHbEtvad1",
  "key24": "wz3ZTDR4MbajhgJvG9MhQshVAqoLvXPtkoYwX2gRhhMfqm6zSeDpKH4LLe5G1KNcLRXCBLeW7LmxhTVd5ANPwvw",
  "key25": "34sWzs52nt3Gr62BQneYY8xKrxbvYJNk8NUUSexAJr18QAmQo531ooMZwLBHXFMXPyU2u1cgtavnQcf9WmPsALTA",
  "key26": "2fWQqUhp9QrtTvaUHioVJu5cUSEcn1wqtd1empR8kNkVCBj7Cd3ueiYfjs8WJGwsjthEitSqfPbihwhxDrTkdS9y",
  "key27": "5n9yT4581g3AEm83CQjUqZ6iofRUhnLCgWUiVQCdmtdxvgGP5Y79DVM7b5Kuy2GRZvce63zWvwhRqYv8VyyDZck9",
  "key28": "3neUbixrxL3oM6GVybwSHGHwWWhwJ9LWgJWfjZ9rNfVGRLfZWpfFvZ3CPM9VVNPTKQtcpcxaU7u7PBmZ9YJoRbC",
  "key29": "ZPcyUb3TYEdVgoNSmPxE6qmDcNNzs2gvGjSUJeN9djCYWnEUVJnzoK3TzXi6bWnsFJKiL4ZLsSoj4PBfsaNW5Y6",
  "key30": "5ewQ6CeoLdrCxw3ECXCSy4rKUKjNsmmHKE9yDyjMf3SnAV1YwWQrNdA4X172nLdeRfQS2L1oxR5VmpZJ2XvuHqnK",
  "key31": "4Yno5nNfXcFBvfrgbEhFg3XR7bKpZ86MGW9pqDt1E4tARoSZ1CkeTajae3FsvudAbN1KpoxhSxFaRRf7mSbgFTuV",
  "key32": "26mupvUJJ9B5cJcHxTJudBZNJFvxdYqyK8rNCyfX6DxGixnRaMb4ztcUpjZes5QGFuUmdnBzQbyddhgiXssap9nG",
  "key33": "54HKBYeuJNRvWHU2E3UhQf2Vog4WqwnKsu9tGfGtaFAaViQ8evhZts594NCVmXtBSeaVURv9prDZUZpTpkyiT9NR",
  "key34": "54yywbEtWnQUjLTafxSX9jpWbootZySX8drRfUkJX87ztyvEHiBQhZ4uVwqhNi1DKGYAo12rxJQjiEMBEGSdXMJu",
  "key35": "41kmECuQ3nGce7ty5bWrpBJ6gNtKABoTLp5Mqk1m4TZbv8KjiNB2eXTUVvXUykcc6wzsMCLzUP8aBAuLGt8qwWHH",
  "key36": "56v9eGgMXKWofUEaS5uMvDgJMyNk1QTgwrkX76Y3QWwT7w4xu4DsWMgGLcjS5MzWyqv5CMEHJkhwkSyHUGruEgNC",
  "key37": "42DuyQ3Pw6ZYk3nTYZzK2e829jnZiv5L7uCXDvJLLtex1VxuqPqdzbRnXuKzXszeAaVWVmVTwaZ9kxRa4YxwhkNQ",
  "key38": "4UMngAbZp6LDgmatbLGHV6RcgBgELEVymo17WwPvAdVGPdAF33XwRGAxsJD35Z43KLmh9ZEdR9uryzTULAJN3Hq2",
  "key39": "2pRuHaoinc8PurQAgzf7Afhp2biSQuZhsZcRasMgb5PcdN3Kpnn1VLFq22Ad3ockVAYb2Qn9prBP8Yg7casGDxc9",
  "key40": "2gM6fc9W9cDudJ3dBsbjwkcaRq4MHmWJPZNtFqsoCQdSuBUmaMwKvMG7S84pw1FnLQk1fGGbMDBHPfyGppavPHmp",
  "key41": "63pKmtbPBSdbHzkwov9rhRtron23NU7dx1reQspESqxoM2kADs54fDaX9rEs1ZN3o87wG78WfM24x9dmtuNDvRic",
  "key42": "3pybULZLcEU3TAyMdB1Mp6eSB4LWJbkDqbmYMVpTmWT93e24gT7wmqjGKCWsWdTsa1Cd3dEcg9drgDy2tFK4Ntks",
  "key43": "5ccdtcvEEPGuFqsMasRLZVisRrt6ghGqg6jFiRxiXp3ATSzVUY1dPsg7JDbqbsgTg8FciuFdzPWCYf3x92r3LRUi",
  "key44": "3dmNenYQXKDvsCXGzmWy3CpMBTxU4wHBw5QHmskZGTkMjri6N9wqcVf6kdWiVsLhtQPX9jwBi6Zm2CfWUduf6xH8",
  "key45": "296nuAmLwKq6CVdpv96zJmm4cWrAEvCiN524Hi7dPvthi6DF4z98dLoGLScwPk1D2NT78kXmoBX5BQdTUa5sszdS",
  "key46": "5MjRJEJWchotCsapd8xmhv7VgZMKS8g4Uqa8MKDByzAS5njf5rWWH33zkoA7UPhSMHGUdTtupmaNEmT6nvQvHuH4",
  "key47": "4dWX5LorojYcA61remediA2tgBGidNV5BmsUMa6xpnT13VcBzfZTN4vZT4GD3tAcxucKQsn2MRqYchNW2Nyv8Z6h",
  "key48": "xchqqHKDKJXEyKp3vSvMiP5VHXrdnQuzDcSy2CNmWo8YkxN7SDXg94AcQT4hFT57XwqczgAyQj35h1XUPrEvDot"
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
