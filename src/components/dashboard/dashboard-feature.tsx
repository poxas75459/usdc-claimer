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
    "5ovdqUyYdpCjF2T6iaWrgcANnkc1iGpdEET5fBkyn9mDCm9pLUQGB8E7atgqQ7w9McxwerahkR5Eh1zSMLSz9Hvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECXXCHz1WsarqJQHzxjsjSDw3fjViGPBbE4PfGrSVP66n4Uw3M3gqUUy7EQEqv47s6v9dF5csXQNaV3iyH5xyJv",
  "key1": "3S4XYW9FWAC9NyHF2LS7cvT5rhymZsuKRcS2RjrcPjtZhjsSjMUrQruYd93bq3JV4V42pcmDKjSiE9k78tsvavc7",
  "key2": "3J79bEH4HDkXyNys12B1ZPpdH9PKcz6wPoHECxRsiozSxohxycjF24sANCWqd7Qo9p1QPM32vzzoEM52Mdz5jBkz",
  "key3": "3F9DVh4dwhBPpLBsiDmornjsft6Dv5Sk3WV8CXKenVJ7jiMxA5VUjHoQgyQyG7hp4Kr5KKwg4MeH6wpSsieGtZPc",
  "key4": "kqmKLSeqnRyHN3AUcQEQBwFeYZ9pQLvByvjd5Pfvf3Gc3DCpGCPmf7wcECarbfVH7AG8SZAksZ9T3kFTkjqZmXN",
  "key5": "4zUApFubWrwYPCmDCShTrHMfKXq1RL4RjB84M1jVbWTGXBKiAAf8TFt514Bjp3EucDX4kMaMnaZhStBHMx4pMd4N",
  "key6": "J25PLJUkiHcEYFP8xaC5YYB9aPioLN1Nv2M2q8YYgRHEQUH3ZBWXWNmBEUDehFVZLbNQDsUXkyaBgPJhnMVgB8g",
  "key7": "YFPKcZvkWjkvo9RW8F6LmEde6SGjikF8UzwQrZUtHDf863zwasKraCknqHcyv1paGe6Vg4KmuVedUNw7EsWqNLT",
  "key8": "4DzuZgEwDAFi3dfbuSzqsXKn4FyVPhWuTyc55w5yKqWcgzhTMEtamk7mzUTfu9CMtATgvLyuyTVUU31ao7KYHZXb",
  "key9": "65HpmkXKjRvZYy3y7vD54Gap9JdNmFcEPTPFCkFtFGRPorWWPeZ1PBsSkSTafthEauNFVdCNR3i4bpefkeUg5Xn7",
  "key10": "5Pam1gqJf9biLoRXTADbiLxEYDStza6AmR3oGEEtFZABf8gsd9Kg89sox15WBRzcC42HRg6MuDnh25UHDyekurSx",
  "key11": "3bgdj4SQGLCtUmna8USkDkgrF5NpVunzQRKL587jhc2Ga4z7aYYy8xCPQhHZXR2JkiEwy3u9pCnDEw9JStYw5VEq",
  "key12": "2yFMLMh93TpHBefT5Yda9XMmw8UxbxV6Fi1LG3hdDXvu5x57nuH5UwSum1LPc6mFPQMA8u3sbsDod6GmpHo3UqgL",
  "key13": "5XJUYymd3kmjg5VGQpyb35hyukjsn6rTCFJxR4CPuL1NUJgs1irCh9jRXFXP3GJQSTJZfRujAViKyyfZEyxFfs5C",
  "key14": "5CzFAMT2n55wQAkdR37UxuLeK4PiEYQKeZPpYz4a1vx1SdDVUVsk8kdUiKgnDTAAjK7C62HcxeMWwgrZwYqjcnjd",
  "key15": "3WLTAHPYAKtJSasRwSwcvZj7QPuPGppS8GfeJLD4jBMw4anZNj7sh99zmnjFSvgRLuwZjkD3vmitzgsNz2PrNb4R",
  "key16": "3LbqPLENoRAKec8XEFbKuhfTEziGCDXjSYKnNraGdqu7gAZKw5uRNdNxsrZEWnkNgdUck8owgZZXq45fD6eyeoh8",
  "key17": "4z1VswQHVKXUWoA381QswhSzGczQkNsgrkXfcvaFXRBREoXXL8XVqJUz51bcQZMKrNvSJgYozmfiyYKNqWoRaa23",
  "key18": "47viCdqgrKfWtRNxa86D6ieyzYiRRwz55Sf4tZTwaAXPGCo8KTNppYr7YPB99ihHMXBvP7jcfeXQ9T9Wk8Z65e22",
  "key19": "3N5uUEXpwGo81zFBYUwnSGDVfRL1LEnUEkkRpRjqcYCrK9bF2ydDCEoNSgvNpkXLVCA4uEcofnfdDg7QN5LAacc8",
  "key20": "24rBjyZShCh6dVtZgJX9yqKuDsKQgrqjQDjguQLHFzsvsUmxPr7qhiqsZEAUPZM2m2ajcGr6HjvHBLFfZx7pPhL1",
  "key21": "wFN7AhCmYu22cgHMPjgFv1ty9t3PwxsdYgEQY6TDL2MZyRjmQWKits8jj1kEskWYoufiUYqkUpBPtkUdHvmcHNq",
  "key22": "5BvnPU38ZbxULepmoDhSR3epsfSq4X5zbm8UWGMXBqxVCEtfHxBzA8SY7U2x5V3urVP4X6AtiKJvyVcPAa1Z4eE4",
  "key23": "gfDyd8K6UCfqxU5jmryiMnfU4yvZECzQauc3Da1jKgwCx3gD4izpTKPYHSnyDQPKNSBnVa8o3v4fiXh4qTAYVMt",
  "key24": "5Sfs4ZALVusW3WZfj3AE2bMs471nR28Yd9M3vEkWrvN3Vhka8qhduZAszdj5H3ZMSbRcjZunY1Gtm44nWXeePhB9",
  "key25": "4c7McYyJQhMZbEXnKqDW2RvRdAcD7fb49o8D5PsWHBkUAiAJPU98NPH461oVMgoY2RDL2a1K2dYM9NyhHG9KYnuH",
  "key26": "5THoNfDpnKYUXBiMfPck4ZgNVyM3jrjcWu3V92eFqz5vLaxavTBvX6btYjjUVWdHBk9quH64AoVP5eSx8NBVqYPh",
  "key27": "4Z6vCE6dSkC3tAAoJVZ9BQMgmTL3bw6vAEnngwK2NE7VV7FEujKon9hY28QCmwxwkpyUZUijLdCgQDGxp3kXCEQr",
  "key28": "5x1Gue2Lxiai1job7egcaBpyWr6MWCh8CAdR1ew4Jd5phzdFoLSC7mT5tdw3x2bGUgqggV63svw28enHED3Xbg6B",
  "key29": "23SeZa19cpz8U8paTFKaxJ6fKyCahKpmcXrebs9Sq8AkJVPu8DjFBx9n54msvFEje3oeqyKHpuEN88X85cw4pqw7",
  "key30": "45xVWEpYHUY89MphcXQmGhXTuFBVyPfnyD5Gc7zGRBXTGB3zV1Sa1By9qyWTDc3g85N7NX642z9vt7dKdt37fUgL",
  "key31": "3c3myxBKK9rHdX4pjCwk4LZKu4gRjcZZmYiV3SCK3UP37J9bVYKz2JXL3yj367BmUiC3QPtgLRJg1XeS4bZ6NvhP",
  "key32": "bh76fog2aow8Sbo2pDtcSyCz7r2QqG983e8oQd2bn1s3vfrbYYSD2NLG8rf1vYVnM12nKH1tqpRJ5qXD8SjoLPx",
  "key33": "tK1tDX6qdShm1qaSgW1bUwBKXUhqWqng97xu7wSc2cVpDhnZ5kJCr9fYqcfBHPrJZa1NHyEz8NPUmBCGgJ5idaF",
  "key34": "5c1mSFQVk3eSScCvGjfdTu2DnjCXpR4WXdTuhEjcrbrBqhX1Ayy3y4Tw7uzTEDFUtjmU4cWgeYmdWdcEykpXyv8L",
  "key35": "61L8msZueoLS2CDYXKXXBf6Socs4XX7pbofkTNja8VDag9MpX1m3zpvGgLFxWYHJYWB6fdBzuxJe383vdZuxpXT1",
  "key36": "5SFv397Fv3HdnnVgEVhUNprVS9WWZWYB3QfiW6UWJgSkC3tqEGAh5MRCp4ndGsMKsZxoporZEcTvouLmAPqtFARQ",
  "key37": "ess2vJ84bUQ5M82XFEFLEJ2uuYqpHp5GdBQuo6nQ8MszysgZMt1DSx1Bw9tyn2mTDTyLdSECWoGgmPN2Lh8ixzR",
  "key38": "jmkUvkSDNW4neRYUT8ywnCU5wrBjrHmuGqkKY3fu6GbbTtZWddsshFqgMd8avJoByLaXqEzrv3uDDdHHe93aTzF",
  "key39": "5uxgoo6AgzaeGwkxh1EVUT3aRBQmvD87XnqHgp2RdurcK1baZsRkKhCfFpexoRvg1Hs8cgfyd6MFbapWZMzq39D",
  "key40": "5AUC6giXMDfL6QcBwNDM2qBX3S9scoVcoq3n2LfRgqEcshCoT6QYgYs5MCWHs493eBLduYiPQPDRzVVgddUEJhMs"
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
