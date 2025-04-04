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
    "4A6r36G2K5pxbCqvozvMZBfoTwoe2Gerqb2NvZMRHGF5kAVB483NieUEj1yihnuzHzvwHdpQFqbkEJGhLQ92PJNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mz8xxyxH3aiffqs62dRf8VT7aNK9SRbDvqYRVhMqyqi3NUBRR95oBtGcnodPGqVHY2fJ9Wzw9r2nEE5NX7abowa",
  "key1": "2A6pHQDxx1W7riSDoKucMAKPwjhT1eXd4cSGMPJY4BizgLYQV2SJnDsjBxFqJGJcSP5JgaY4zLu34se2WF8xjgag",
  "key2": "24cCefVuC2ePcMhStFA9p3oa8iUS5UyeLPWmz8987VzTija9jJZvSBAiqTxGhcpTVq2LsRJf9bv8tard3XiaT3Ts",
  "key3": "AnQZ21WWA6Jt1N6kuTnrTMQrr5Sb8zcfnExMyhTHpe3uhdG1XNg9rL2P9uCWdgZApzQqFoeWFQw8wm1qZhsXU3p",
  "key4": "2ggU1dchs8EBiTSy7ysciVfwsuQYqYeQsPF8xppM5eDU5eq4LxGvQcfv6q591fX9DAZ7x4rBxz6Z1TNorbCPmtwK",
  "key5": "3MPXbUpuo3cXGmzgVh6u5vqaAPPysMdfiXVjGnqFrs6NcSkXaZYpdPfjv2JpHkx1mXxd7yMyuNqkamBssDL8TnR5",
  "key6": "36iZnAWsquhmDcSoK1nsHXz3CrA4CzVb7a9rocziwWzevT6LbHYbucUAbWgcMyHqPKR2S5Psx3G6ffB45Rc6p4UD",
  "key7": "4RXiJzLMpujARAHRp16EHkEA8FLL8jCs6z6rr9hBUUiR4GLcX4taZocB9M4NEfHvYczPsgTzwmZbmwTxgoUL42Kq",
  "key8": "2hzq6son2ZH5nbsnAwQTPgWDkddnfRyp3e4v9YK4AYRj3ruAtVsASEBpdw1DP8JKybf9eMzbrZmwVAasuASneDrg",
  "key9": "2dw6sqMmnt9thhEWX5NEFTbYNogfvzeFdcVTH4av78g2fJDiz1aTnJfJSubCM6HpPJau5FwNgAhubb8BEjVc7oK6",
  "key10": "3tYSM1o2JndEA1Ti1teMoc1Uu7afQMi3XF98zAKGWNtXGUpHkQp5duGLDRgSoC6rhnfiCbkDq7xptNsLV2jyXsLy",
  "key11": "2g74GmyVzFK1zpxqpssjWp9Gr9eRv8H5Gbi5npqBn21X6MrAmhx5wqhCik5kW2BdWuod9iz36s7Gbn9HyEYG6jtz",
  "key12": "kuZGWF8M5xwkfahfL4uo3zg7Si7XaRCWiZXvJWCk8nVsVYHRnPdRRC5t7y2JM6feBQnoYLf4JcebGAhG8sRcrx6",
  "key13": "Pv6waZtH4TsqysyCatEcK6QaVJyPP29tdx1dhrbwuwdNHeP6yo1LCzBRKU4993jHSK9NyAnm5xN1idvFbYFXUpw",
  "key14": "Mjihc8G27rSJKs7R14d6d6BLSyS1hrbDkgHi3UQ4uQCZ1uiTCmrixvQB1FcDrDWdpFDP2GfQdxwvRFcnd2bYo4s",
  "key15": "2dC8mwYRVLTLMbE1hC5ELw5KgBu9vKCiDGbviWChs4sy6aFAMvm8zMoAR3XtncK7o8ZygTWMmtTSe6CtzZJpqwSo",
  "key16": "5ijj18tfQW1RKBkGBHKUbixPYGFPMXKDFK6aVvX2pGwrZ5Zv6oJP9SLLZxm8LgxM4iGqmdve61FgM4DpPnjRdjJ9",
  "key17": "651mTay6vkkNqGAgCkmRWNUGA5doHKBT87BK8uhKR84MVKaUyApPGAysmH6qRX6HY6jNcseXNxf7xUj6thcFXcA9",
  "key18": "xKLyU7DCSsX9H94mUPNmTA47YjiM3cDG4qv4uysPzEi4TJMGp8yXnsh4KPXR67aeMrGyM5vLKs8P23diAM3PqNb",
  "key19": "vssCvsxY2dTmyXCU95zrJUQKAGV1Xq2HAiQ4uonmYaAdWnuek89Zcb9uhMo2AAYKuqN8jjqk1ikdkMbdDEaGquW",
  "key20": "eHZj5kj4AZGAvyMePbbE6mTKNGHnMgRnztNuGb6qkmLxJ8NXHfcsGHSdvamWcAVCV15UkTekMgSh5U5nRatHeEt",
  "key21": "4sbMHCq3iSsmdiT1Hvqzru5x8uhYmwMB2NkiD3jtYR5t18rsnkSt3jPFopCd4HdnuNrSrjXUzSYRy2BqoKnBHZCQ",
  "key22": "5ZAMQyy5AH58gH7V7LL96MY8hVo8oHjHMLBQ76KYfRbkJ2aPsa2xvZKNYNUyQEVMuABxhQAZ9QUzhaj58Ffor1Wq",
  "key23": "4QmiWrgMqryV2gCm1VPn4yd2TbCFJTCvgV39FRKNYJe6tnc5BMp5XcVv4kk6PaiZbHfEch45rMhd5UwDjCfUSVtG",
  "key24": "2rngwUdRX9Szy7Tpe8Spx3Qi8WHr2VR73N3CMyC3hus4mHUbxUvGYQDJxB83PQevFTJCTbBZqyBUxWmiofpA2TUd",
  "key25": "wwoDPcFBdNLF13HSsuP2pFaf6Npg2UzSMTbYPjeNbGXgYytbNrX5G1UEDDedyoL3cacez48GQFQzEmCvPXKcjr5",
  "key26": "22DCzHWaPPQJ6ErqLHS4xxDcRh2ZgxRNcLszGPi4Fr6p9ixgsiqeYRMbhnjT1xiHkzyiL83JMvx4VGukYYvR3gE3",
  "key27": "5YDNdSKAdnFSsaYjiAxpGG6Cs91YSG8JPWUBjEyKDHJPQ8EKk7LaQ4FEeW9dyhFRAdqC2hZ1unUMEvwMWM9g8A5u",
  "key28": "3JgC5t4ozL9RSqxnXTjoM1MRxoD4UsX9QcpFkyxJunvNF7iKPZ8P6nfcqU21YE1qGq4HDKoo5hnecX73f1S8Hz3o",
  "key29": "597y3jge6DTL6uUzdVG4xrSyicREaRAessXp8fvX34ywCnu4UqyrLJzYjyrGGJre9fdohiNGUdsijybRzJajphPy",
  "key30": "QNePayFtAidHVD49frGL8kHt1gPDUH5YJMGzr33dg9g8xYDCE1pUw2pMc3JqPQ9tVmVczBkk4nKKaYTTjGUcQCk",
  "key31": "3edTqL1qbAmTbbLHq9kVHk7EvjkabwaSpq25YZFs4A3dQgZkUj51tN2p2Rr8HuYXHH9Y9R4VRrazMUXbEHjd4D55",
  "key32": "2oLZ3u2gHjwhJrVig74vwPe16xv9KZZy8G6KPXzRUiaS7ueTWu7G11RNMbtknZNgwr7a5urJjZCUYZvWAUiobkZq",
  "key33": "5wjskghUpCVa3NjdQhPpbXZCiKuEiapTrThEoyacQfHkUeEVakY93pyYdBqLxbrCcyMfH1gmr44aRW9pdiLXHP3B",
  "key34": "5qAoLuW4RN77RrBuzQMcgAfHkZYtmLmPWPjHvPJY8zfVzWMRUWRqBrfPRLZhzukTN9DsgDGhHkxULnGaeXejj7oH",
  "key35": "22SSkGRCiVJ7RHpeGnx51Et6ojehPfbvxGHGvpvyaNvjZAzufSCqc8b7dnUVWMBtkMCvWhpjpU6RG5CHshqZ7Kkj",
  "key36": "5D28drr29LTgeTGjUgEpBfXWRGEGDRALwQksZBYGTT5Ms7P95MufdFmUnUzKeQkRNHkUL7w5QuQdU772nAyBEPvD",
  "key37": "5XRxGtt7YdotpQsFsmyzTmJ6rJzhPsJbLHcm6gpqNGEhRFwPbanzu3tcL83LY9W2RjB37ESBDwpe9d9zzNQevKmp",
  "key38": "5jgNVpUPVNvCSCknBJRwazRZ7zxrKxLFyySNhHiXRG2WHcGaK8mXeZAsWNNzLoW4RPagXhSny11Y5ztCXswge9uo",
  "key39": "5nxpB5DWkn6sKqioTXcbnfPBRXicd6fDXMMuKZiKj7uQqrJpGDPdidXjJDnNpCLgrWn4CPBpvxdkcxakinwGtRNm",
  "key40": "48w1gbN87QKr2Ts56qxMDEvjfuiaAD4B5GnTBssU4x7tPBho5mjoTPXptAAZ6ZabWo6WrKwWK81mKPW8Z2jMr8kC",
  "key41": "64BjJYxHBhs8mmdk2yzVAu6Xz8zgSVS87PCEUeP99KH38hRuUCem1zdvBKpPERauxpYrGytuDh4mLeS6wPxBKWCd",
  "key42": "4ckZ9YmpAo3ba837vSfUYHiD4eQLMBgVmkGydnZqiU7xn98vaKMnNpZHxBaK9q6A19KAVJcKXqGAyFt6B1tkDer8",
  "key43": "42vJ8D39RDgptmpSu9nRGTbAXHVzqLabXhinuzFe4MfYzPqMsDAouTVsgHAq5uSfr6ZWcwUyPSYJspDvHWqWiTZC",
  "key44": "2hrzXsYT87bZi6rzU2RWSY7vNBoM4t16NevvveDQMMVFAVZoBDMayPSJb6qn6jjzBccjgV5WKgPhqszygEJsKcoV",
  "key45": "5oGdHP1QJVRSW9qszWdi6u9SsMAtcnBriNthCzvELZ4fUY1dAmzC8sstuQKXbczFGWHbnpMn6UXbEjKvAvxuxDPE",
  "key46": "4aFB7S4UAkhdthbQjmanZtpjZZUNfmG9MSZDmVckb1bk45sjiQau2TfiS1YVtX826iAWmu2h9B1HPjCcYZHyJo84",
  "key47": "4dsrWEb6xjXLpUtWAvhKW6ryHUieP8xN37kgSsPW4zP9wonWssoSQsdFCmtoVTLcbG3DpaYTk6qfFjPvC5B6bo4o",
  "key48": "2xjcDj83ZzHTjLZjJtFXsHQuygEiyukop58DssXRMVkzGBf9LYmjvXHmV4XHtSXmhE4pSkmoidemQbcCpqCHTryi"
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
