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
    "5M2Q14cRy6HTCQBGtvGqNKJTH5WnjeqGwPvw7HXvZaPetdXpfGNd1aLwQsp9VvBGZepwKhCTk9CYPpGtYGmqLFNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xmERVphfnZjSamPYTC7BUd63GZGL5XepqtikZdfpDD4ozA4bv2f7GGEobniN8eE81GAiVqevFrF7HpxJUBu5X1L",
  "key1": "5YbTYZjo5EQR6mhQ51y7mZdyN1nXEhRb98nBf3SvLprN4T1ZCxH5h8zup1zf7vWFWBXJeXPmps55RrMPQ9fw2dWF",
  "key2": "5LUetB3sBuyDiSb7Qppmo66bFvm9Gj9EpH8pm3RUXaozvVv44tSakZ7RASavkQHNhqUDaVNFhRGfcNagUAiG5wfX",
  "key3": "3Ef5Xm8o7tmsvbGs7acguQz8pSiSH7F7ibQoSQHF6HmwYn2fzNZRG3aNS4EDj3XfTCdi1p6XF1hgwvpRzpP1P8uC",
  "key4": "5uy4UWpGY3t7Vg5xsX5mjkh32neE4t6YaDJpou6X21ySNkbqiQjFTDXqrae8mCoJLCGRDZyjaRW9d7sqnwcTQDUA",
  "key5": "pZ57K9pcgQytvZc42mwQFva3smEuzbo4GMNR1oeP12P93XpQHbGiJfs6H6qmDRo9eBedjVEsuHMuJRr7QSs9Gcz",
  "key6": "5gSkDG3ZWQsEuRcbHa4R2mCFKZnNjzTYh6RrhGHoQ8W6UHeACTxuEhrXfm7SaZq1WbwKmJsAMsgtSRw917q7VZvV",
  "key7": "2fKfQriwabnob51V9N2ztVNkxjWB2hC5uf9EnthwMboUWYjiKPkJo91wWktjt8mLPyMkVHBwdMPqnHWNEsGDFf44",
  "key8": "2zkhVgK9W1YxtK49djVjd49TqPUDBa8pvxR6zYwUWBQFDDfChaewyjhpdXhBBpk6rbv4hzg5s6YHbDb7U6UMWxyy",
  "key9": "3VRg3LWrDWNggGWNpfJ7hXtaEQu91KMD7beZMvpjvmx1Hxz4XF9C6J37Uy7b1UPqXQD8sdvPAfqNYS2FaDFEQBJs",
  "key10": "4g363jsHiQfyzWXrrnnvAxYyeq5PqPwenPUzUB9ATc5DYehUe7srfY2DjBfv26dzoQTPVnQVgJUm5GfKws1N66iT",
  "key11": "53pLhK1X73XXxACTUZL3k3sUXMCcAmvTvHC5YbBTg9Jw66HB71sLFn4Z7VgFdpy6ZP7GL3hLbhysawkv2bJroC27",
  "key12": "3w9WwpR8dekP3nyWFQHQbEkpuWyfQKeE5SrkXajk3VQR6LeRmafDxiSbDfpHc4BLXE9vtt487HKjvfpTajFWBLxU",
  "key13": "2X57AAnCQLBgskDFi84ZB5z3DhcS9o816jPDjXANp5BQeAwsPRJSMiFEpDbHFmegtY18EAx8gBLYJVtqAQPAyQNb",
  "key14": "HjtAjCy6fogzVvaN87wabs5BN6AMvBSs6kj2ZxAAEM93AzGoGsTR4kX7M5nHJ2Vn124m67hwbdSRotyrvMLHQFm",
  "key15": "4PnVmcaJUMZCTEJBtm8UaRyyeoAnkhAzS64c83RPXJEcqrMpTLJLaE3CjHyCmEpTmV2QqxiTkYiq4uvjfPb4JEzD",
  "key16": "3dg6q8f9qFMtpch1LZBi1FYZHKfACRhuZ9z5QmNH1PYfCZ9HAPZbfX3KF9GzZ19EY1iYebS9jquEtbMKcH3rfEVR",
  "key17": "3vMAVX7Ztx6baSZyS17G72qZZYiUbwhn196qz1tqNh1HGok3VqyWk8Jx7ybg4i51mBVah2WenJt1sFwjo2LWajYc",
  "key18": "2S7KbvsXa87y4ZfKojjPiBjitxtRB1WX21hgvDL3LCFqrkF4f5upQhjKrZpH627sEGa1Ue42tAhQbNjioWpT3KS",
  "key19": "3aPZzzBkcQRBtW1FoBwZfLg1i2dn6eNBj7VzgBdWUatcCeXAK5w3CHGYe7vL6dJwPtS9YohBHCB92tRJ8yJWU4vH",
  "key20": "4tFow7LwN59SVu6M4aArPpizymScmPH4jbUN3WBTamM9asD8AXSp7GDimPx9aqbax8it1WnkPo4Q2SYejs7C6Rny",
  "key21": "3rPiZ88HP49C55gbacBZGT8V2pircWJQnpxuCfYxt1qUepQD2tng8ETYti5nzH759hBig1QXecfEZudFSE3VmwPj",
  "key22": "vVDgR3Tgatomz7W6pB64LoedPCUBxTVFhjBDfzSBGRrACJqAKhSgpC5LnhuM71tmHGnNieEgn1ghaeoJEU1ZSFx",
  "key23": "5jHzxf4baQ14s83T5gz2r9ynHw5HvrSCdRtwUA6or7Eb7rPeY3MHdY26dGdnwnJveRcY8vmmz321PbBATehbKJ5f",
  "key24": "22KhyB3EHMPDbwHENPiWGyyiHtQ96LEjiWGFWL8kfMQowr6XhY8kBS1Go51GshcXuiDePotN9J6afRX7Ry4rxUZH",
  "key25": "4ys72AcesPB6qjVuYXekTKeRcUMU4XzNvXYR3rSgXAFfRm17PCtphYErXgRJP62SRxFWgAVrgYrySF3nWZsQD33T",
  "key26": "5tD3nPBkp5dEG7xkCrdQnBqtVefh22NWLihQEwtxFUbbuzbNM8YA9JGdV31WCowybkhmKTDBnexyNW1YPRvVcimt",
  "key27": "4BGWYQZYT4vtbwCWDVx47XjUoLuKzAgB6eRGrMoQCAbLMhLXijo1mM7CiqCx6qJcJRmLqaEK5ZynDtek33hGUJu4",
  "key28": "3PUifFGC5Dcau87TNkYbU2eJ7G62uUY1Zn4RAPtbGquC1fRUnbFRd6NsNNxJKxwto42HLVphr1nkCEyoMBrmu8Xg",
  "key29": "XuAeQn65vR89n4b4zAj96NwRkqs6Z5ZiHGuNjoxkx2Mrax6b7SLfQ4FsHNuJmCvCRZnURiNgNvxWW5ugtDKXjU3",
  "key30": "5x89jwGe1zEMxigYZNfFMcZ6f4uxU9zPQWcnshqbR1QLLinXBeeBDwQwWvhTwenYaCSnwQ615uxLZctqU6csMHoS",
  "key31": "3Lc7JZZ4iXr56aEmA1ytDnjxBmETkEXwBMT93eciNBNCNnycegyDt5rcaXbM5LS7UD73kJuG9q5PfK6g81kH6Eea",
  "key32": "23YRnrtAsGPAypGKW95LfB3dpKwXpPwXGvskVbmuwYadV87Jod7dBt3YWLm9uJJpWTnKTGtrSzCH5ag5jWwebgEc",
  "key33": "5FqKr7RXap3cLgtM7kLuqqjVYmme5bPfWABidx2RGnS4isf5LLQEfumAaGKSqiqbJ1rQSvnGHeJ8AEFsfm1hMNad",
  "key34": "23L5x3v4qh1nkc2oZaGRwafGX31Bj4JocorNyLxiHY1jQGW4hWoSfbFMj3hfLb7BoM6uJYwARny2pMBxXqrJkjgr",
  "key35": "2cPDViyC3D1pdyp6WcyWK81768HQVMrsU2D5SAsaSFPtjJaVxz3PX6CFHvcrpbuoxGbcqDtctcLnNUnj5KFvVGNR",
  "key36": "3SMp34NcNCmujP4ZxqWZUvuS1DWuxBcDrRBRYhr1nwvWj66wKZtxRPMLXwKYpfQAHwW7vs36JsD2m7LmWQE9L2Ed",
  "key37": "2BSGZv1Tsq2G7mY4P5XiGcGpyPvpJEHwxL7JdgJgF7QiqjmLdsbRgeWqd1pKbXvtGBJKndahKctELruqR7zBNcii",
  "key38": "2Di1GUj5X8vEuSDm7mUFLiVQaUgVuYgBTDXSdqGpXucGX6xPE45RxStwGJ99P8j6Xf9BbEXb8pYAbSFJuf7cnGDo",
  "key39": "2KWcELxdFw7TWzKbvatgENWwdvXfrkJ9mqDTYZ7TgpaF7iTVnmt5oCoaaVaeh6HakrsEADkMm5Q5aGyJCy7Zru8t",
  "key40": "3DZLfZSUwrxp1PsZxD1QFEmz57qhQpJvagJrDoM3rip9toveVTrN3j2f4mJRvSTuQr1sYnisJa2FRtQyGhFuthvJ",
  "key41": "gyisrYub8nKmr3wCsyuuaPxQF51AdiA1iXyenXxi1UC4FMBtQFus3GtjuFSeknEDGW7tAABFCjCV4rCSCZFa8Hh",
  "key42": "4Kv5nPeGha3yN2RSs6C1Z4t7Xz7q3WFZyGtq6kBwSGkWUj31UE97xsHLLDtmwd2iZuEF2bw4QBmLLbd7AnNx9ohA"
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
