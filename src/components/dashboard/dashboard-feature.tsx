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
    "4sMji94qoAWY4s4JbHUnepmVWp3gDdR12t3TzudqiDZ9bnsCY5rpbhPfs3e6rGMns3PweyvxigdQEDfo28KJNw7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MtqVLP6DLdSZi4eRbaRCoTmBBbBW7MoT7Yx8cCDaRd4Hx1E96dGnh13Psc5brBLWFh1oAcwkAnGTiVuBnysBbE6",
  "key1": "2Lw68fqXGWUSAte9g7Px4vktnLhsLLgkmZMUoiecWpaCmK868z9BRhN9bu1G9J5oWHcjo7Xz1xQx12nzA18hTVhw",
  "key2": "4rXvhiifYUVBn5y1NffxnxZUQ3rVy4LgchjQ4QTSMuNiuVRqivZ12VChoL9viEV5bu9fAiPqCZf3ztS8rXNhxMFo",
  "key3": "57DDo2XiJ4LqgwSK1SMkcWmuaEMNakX1hFvmMizEzQUx19GdYJKkzoL357vd5YswJdUY2sWy48JYooLvbRLGFdp7",
  "key4": "2hSvq9gLFSmnH89GohSNgUdS7s8bxKcPWbra29AQ7rN7EcbccAkMZ67cp2wGryhnsEx8JtfEjNYxibuqZQZDRrUa",
  "key5": "smgQCCyGAuTFeK5wKnytxviSXkQ74nz89QfT93aeoBerFYVV7rRjBrnrUnQYSRJdoiDEgVvDEHKH2Skutig4b5z",
  "key6": "5yNJchXFCvsq6T2TRY3oNnAvhqvVHGkaLXNs4K94A9vgdHvn4dDnj8hD7TX4v5KRUXkJGzNaW532FHr8z35dkRLy",
  "key7": "v2HkAgeJjrhEybbjLG5h7ZWF8NX6DYoFGcvP6LTwf9yT6nks3T1NvdkQRcYXri5eFvVfp8cE224M3G7rsPn8bR5",
  "key8": "3ogqi44wU7YoS7u1TEHMf9gWW5CwYw3qT1GiHwwhSQsES7eFpnhb5qZnVDGgCLYZGHvjArdLqKtu8bqU7wQrkKe2",
  "key9": "3fzciACNktmCQRqY4xiThGJHiPPrYZBsToZcuu1qotCAskh19rY3t6yQV63qobjKo58JFC359oVQsLZTLRULtiXp",
  "key10": "4AjMM2YLkTxnjLfjwyavnx85fGJLXYq3LNos2Ud9r4RerJG6KyvVFskYckj7bAC3UekbaHRiWhNns4i6uSf7B9Jt",
  "key11": "5Hr9WcY9ZKzX22LkjM5eLWWWkgJRy7MLgVPA6gmwh5s8gDsSsG8NzCiCnVMqAPQB4aA9ubWyfF7pHpzfVh7BzBfq",
  "key12": "2qhjukm9jjnnw96qLbLUhCzFeCUvHbDgyBmnqxkpWfRhE8xBTfm4P8gBHXDNaveLr11kfRHWbSnV6t2EqBVorhtW",
  "key13": "2h6psygKVt1WVynJuTstgwEj7mUcbC7hxinPRSArds5RJg8QQAoJQYKsmmkgUsSde5Cc5829XoXTTRpokPbiaLbU",
  "key14": "opj4sTryuiWEmNYnhUSPoACPsGVUUxBv87vibnS3rY6Capb2JVKEg2fC3jeZSQtqsfGNpLBayShjwXCTivvdFHf",
  "key15": "3pRB2JQeEtvXdRdhoshUKLv7Z4JP6eusEvV4Dr8PRGeQe2B6WbnRtreEQxvDFoTf4P9t5fBDpCiyYbdZsyZzHWB9",
  "key16": "eWyA9xmUh2kXJ6cfx7x2DaW5y4RgZs418jygYMymGwf4Ug1mz1YvUNKye3cEKhupwwv7ZYfmSeD7aj9WWwjdbZF",
  "key17": "5idvKMcf5MsFVxQKdh5TXe4qHXdG7mVqLaLawDdEWu1qxPcHPMGzt4ayvV6RPNndeGHaLBjhkq1vW4zX778hW2rv",
  "key18": "4ERh1PCCDD4MxhuffRhY3fjUPi9Hxkb4ZYMGGaHhQG76y7yuZNxn78qYvAuaLiwv3xuyoAXCt6RgYpfcywUS8oJy",
  "key19": "iq8j1M7RwW2czNRZUf7yQNxdKsi2VeH3v6HKmNVjrQMXSWjPpL5J5fh6yjBP26Ppd8Wwbd4quYpe4xGDqSVW1hc",
  "key20": "2Tx2J1shtBp73afcGwnXSVedH4iDzNTycq5eLm2e4bCnoL2VHy9Th26n3tPBjGf1amjkdBP7XDzJBLVSrqTGgr7W",
  "key21": "52JsVizU2cVjuew6ggcr4VcJjnkrcnBYH8TtXqwR949CZnAgGhyTHpFsSqe2uFGqoaknuU9unAGCBjNgcr2HfAds",
  "key22": "4JaQyYesgvQxfBoj9B3dWvYpNBukXZvRgpZdLW29dtzdcDaHnHZaiAwiG8nWynF9AmDPq7CsL9yAq7XCscx5aSZM",
  "key23": "2vntDsxuD3Tj1jdbYoEKkfkGRcpZdfu2VzosW6Cbqhapv52pTM9oC8bVhLMckRMh2cLjnrckcU6pP8y42YPBjXVR",
  "key24": "3x7dU9nD5SczFywbFmqqX5zCzasJb5hHrwJACECccPo5qoNSLiW8p3ofuXR4u4Yd2GnVoqRELQKonYEtegWx5FNn",
  "key25": "btGVwhsKPfhAd9a4v2N81JGXKfSaESbMD1HTmKT1hxd2bZX3P257dw65fvhjmEyspyuSz1JA6foyjcBpm6sFwpe",
  "key26": "2tQMi6fEcQ7UCSBjHx3XSk2z2dfjjErgfHab3ihZgX2CVacSYcfUSH4hGXiegANrtsqbi9eiAwy79Tdg62nco2jb",
  "key27": "4Nkgz8CtJejRBk3iQ4TFyyAibwSzMbAa8ifptSfVpM5AC7wMngWxVRtrLFiwqCXSCZXs7NZFAdNgGJ4QVZ5vnSQg",
  "key28": "3C4bKmkzetWfAqzdtuW8DRrqsbJJRKjLEVtdUfb8Wi9Z2bHa8ZzR4TtGy8jq2fa5VqUiJ1zzEkFVn7meGkNv9KQU",
  "key29": "2kLqSwasDKDQfT6SezxyHwos7G2XEeqBiv1nFE5ZweWT6m5z3RsxAjcU3GJEjTXHN1TzVsV6ez1N3zes7yCiyao4",
  "key30": "3BxX35mXmn5P7jrJowJE5v3YMjuHN9cfvAssGfJaoTWfM26yFmsyiUEfKVhy5Tmf9yK8UrAm2f3mbH1bXNND3NSX",
  "key31": "3wHSnFyuKnjp1KTRRRLvfQ4zsHtMT2Pf5vz4KpEe1JBoCM1U8PvRBkmRUFru2CbxgcHE4E3SsPGkoNyGF6E41jU1",
  "key32": "56nxJAf81akZn4UMogU1wmmXJNgVffNy1erzbUieCsUrzjcoiYGDSy8rAQYaFU36XdRnz6m9nsuCXUH7gZg92k5p",
  "key33": "AsPjCARNwTRWV3qJ24U71Ns8UWj5nnfAhiKAN1DUeQcENkwsaWqZdguZ3QgMxB5cNh14NPKsEB3dhXYUiqTvUJD",
  "key34": "64EE5swYQxaNAa9wqZDx3Da6DWubJA1XzA4AurLCAtN6gxyTP7xLaZoKwmDotBZXzDnwoYYMXMDz5Ejn9DadJyfy",
  "key35": "4QCwyeNpEtJC2m8kaPDp8dSG8oVCYK3ZMMgDsjkZ3JcgNiyhTau7dtssg2ABqc2vgpqQ9CTUsjf17HZQFFJbfnig",
  "key36": "tKgA9Lz49AdFXkfnDXJTnS7qi8Ymui3sxjY7pUvaQZAGdPUnBwC2DMM7WMUiDz1RnTjPFZXFEdQudYdCdBhDVSy",
  "key37": "2q39i7HaaDeXvs127V2hBviKPDLtLjY68jB5d51dT9HTycZyZnjxgwyf349yJg4rVL7VszzMtMK43FMtE2ReG9Hw",
  "key38": "5YWcNKCsEhFa1xEbHf1NQexNwQZFwEsXp8RQT3EQiTg4LsBtE2Re8dutFPZXAyEMyMNaFxVYTVBQdt4ECW1wuQns",
  "key39": "3cLczCa3AMF3VcDW3pivJ7wgeNrMgMAD1xWF19n4p6mAmbrkhoRghEBRi8waUpeJFehxFQtLmXvpMMtELFezzA4D",
  "key40": "3XD7ewqWS2fREgBDnGJqfAinYiiVB6YeREEmT5b3mmc6j891WYCdc9QDBLR9WtjDmBouAwEEPFUfGTXLF8VmpsfV",
  "key41": "563YyqfCbeC9PPnRFawowTWSqRjEguVFM4UkTmtVL1v8gCMu3M3X4WXfKFEaH8pXoL7we3Dn4JrsoC3jpLVZYMR5",
  "key42": "5km77XrknH8GYCCWNTbv9iX4QPvFpNMAgETw3sVHmBUrtnkoDRyo3PWx6w1JQ5N139oZcszicoVZC5SbBscLVHcD",
  "key43": "kum7KrFsbmHMQJz4zWPLCkaNkPH2y65eiFXUxYnPyEnj86phbn6aL6jN4zXPLXf7cLan5LzA5H9LLDxB8jQrfsZ",
  "key44": "5nWJ9wopxhpf1sGQaQT53UcQ9qNhnShDwjfsq2EmomeZe1i4ThJG1Yx3SdtZbs38pyBfFQcVeaDUVCztbe86FHMS",
  "key45": "4WtkYdfw84gwZn8RiybkPoLTcm4NKm87Vutu6J9Fpmyntg4cmBcxKt2rvL2GLu2TG64bTdmzjyavx7DyUtvKnJhq",
  "key46": "AGQjCfH5wGum2aPjc1jkRKfbprGGekCKRBgVT8FiYKcN55RVBmdLJkHvPPMELqfPM6UwaNnshKFfVWMMc1ypown",
  "key47": "42kiiB5iDyUPyGpxx75pHPuXPDC6mkYefiNwNLz7uTWLvn841e4mP2ASobmLmwM8xstrRtYYA67H6mujHSdk62N",
  "key48": "jAeMBdEnSJ8RukYYJJ4fbBGrH8bobTbLQybCrW8ECnLTsaSRroPp5UjoAnH3NxxdM6XYj1LscK4zqz7ZXeG1gXt"
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
