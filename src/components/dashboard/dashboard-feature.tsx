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
    "6cE7eJ1SWavML5uQRhhxJLAsBm43HjhmPvHHD4xc8zwXi4HAoaVREL9YYTQ83Py6HYrbwXdtVMqdQhxPRDeKsUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QVZxgNhxDKEuXb4MxeoXLnUxBFGFPEcxXgAk2m8ohKG1yyq2brR1tzsaKhncsUuaQSkZnAXSxrfrjutaQ72BuSB",
  "key1": "3eAsNJxGgdhY1b1CGzzxwjY7X9MfTjomH6TY9qgChVt4Nx2fk5Kk1ixxNEYCPWxYKXQ9yFxgDyuhEkGq8sJM26f7",
  "key2": "2rSSajZZ3KW786tm77CYTV6aQE9W46DeW39KCfnWSdWE5bvuAzvKZcizbwdL7VHs45njKhWV5X5esfSFYqrSBy1C",
  "key3": "4VHmbTWXtbTVA4jMiqRvhywAike7rAsAs9M1EEEWZ7wDjHyjc6ghL32TNz3UchiQ5VfZc6UZmCB7WRywZV5z1ioR",
  "key4": "2TFJ85RGaxfxRCpxJTburbuVHjj2R9T4NtidfFRtvqZ8LVsjJosxykDB4yuQB6oVs1sH7ve3SNeezq83LNiavZ5k",
  "key5": "2gLWufJoWwcAv25KZNFUiGLdtjuamQxZcyZDoy6ETM9neQcHbVfpYShhnWMNscbtw2c7kiPASnXpvBmESMbgg1wk",
  "key6": "5EPXK2Eaohpr2wtjokVHUgXEY815KvYfnbW13JfJQWxAs7ttJFQXn1Suf2B2BU3ikceh6unwbgn1yUgJATpVq3Gm",
  "key7": "5Wde8YhGDN5WVEqTjB8j2QMeSGeqNVKW14U15ZdgG3izTNVYHibfTgffvs9HsZdpJ5LucwWAv5Y7EAJ5PQuXNfeL",
  "key8": "3qcpzKTBeDePoNpGBuvuiDnLykvm5EKmVwsfByxRvgCgV4DJ3Js2F5R9o86KdkiJYcM9g7GkS914XgBdNWz5Qa5W",
  "key9": "4VQwGXSMQ4XiUQcdYHr6b86ffbf4vRsWFd625kkqozZ3HVWebPZB55zWgmTifA2PyBgwXPGGebm3MQWQ5LqRy5dV",
  "key10": "45HEa6F5G7LDyJAb7wRmuSYH2uE5qfXk8YR6J6cSYk8f1xUm6wwREXhGc7yaui5ViP1QtLpr7p7tve8yizXFcd2K",
  "key11": "4TTxdvzmPywY9FyW533xhVMHTNL9di3hmpAQndU25MHSKN56X3N1Y3xLLUV3SNz573nxqDjY9a4SMR7kFFYzKsdi",
  "key12": "5PETCb9e9CnGFmwTR8ppr2yib2PicAqhVBdSfwtN7KwYU9CCWZQ3jLWJG1NuVWD4Dn6bqU8t3tTVh8yszojtF4S4",
  "key13": "68GRU3M33GW1prxkExRZKWUEwCtnGfTRNv9VkmBUKuwAhYCWhETCjydeNn38MDpmo6YxcCHiiUup6ak4qtNecQF",
  "key14": "2U5ZqvEbicAP3H5Cv6mW6tvKjMVxxpM29GDuYrSdRbEtCcULDWZGjWoDnyDbmVQNENYofSXAvSMk6tY2nZZ1bDvP",
  "key15": "mYTWMmbn7G3FSp8NKdCECcxNo5kfDLnCJ6fd9AxVjyKyjn5Spxo2uU2WA1f2Umkt5NQarSv9Rw8W7SXHVQ1ZVWe",
  "key16": "57Touk7Bqdyd8PBxxA6pSj9UEsfUqBiV1SyJw74hWNiCETLoiwU9UZX96GLi6wmfX2eEKHwVGaooBc8S7RsGVhuM",
  "key17": "5Ac35Hzp7cdh4watvdA8BjF7ZxeLjRcjGu96b6kWK1ZjgSiq2iUr1C4C3BvSi52NubmbvSs9qRabYP5rzNmLvhqK",
  "key18": "3MaZwEWJfCyn9gkn1eSpEH4Pe62WH4RQfzzHMHAsGfQWbHy6ze546fdpaqcixZH3B3xFvehtibmVo5cQH2bv5vMH",
  "key19": "5vbLEK936hSed7SSjrnUqF89SThZVfyxEfEqkTD539HJCfWVHtrYgksoMpN4zmRt2WWPH47Zbh4TKcuNPZgqYy1r",
  "key20": "4fPgQhTJ3RmZLiPkmgL2zhUNMQuzk1oqE4xNA2tGCc1VeY9wKPVEbkVyC4RW38LBcguSmZHLDseB1KkCRQMwb9Mz",
  "key21": "2siGPPwBv59nW1gWy66C44C5oWQRnUFvDttQQvGKqQs5sDW8Fr1kaNrBceDHL8gtDpfQ4AmAXo4GtaPGgm8vBjqz",
  "key22": "5RWha66efKyVTd7A2ray6L818HK9YYg3rdT6y2UtvxgNYgvxKvSLBHZMDYbLRyBaX12zgCiRVSrBK38s7QxaogrB",
  "key23": "5K9E8M8pQNFzxZ4Rzdwyzv98bwcpPrn39c4Dx8zvmbPgmDtFdRWxJiMxX9dsYH32dGttgN2P3vqqN2oRs287JYm6",
  "key24": "3wizJ3dVPrj59UQPxU5C2kBjKBN1xN2QDqbrwKRKRYbnV8NtvWLfcW5hALg5FBYoY2UL82r15BaDXcWgdqoWfepK",
  "key25": "4MCQ9peiTQJBfmJciCVMqEY8J5tMiMzNaHrFzUe5dpSueAbJumeMmez8nhPd3YpAPpKi9ipCCDNzQSCbf486YCmb",
  "key26": "46wnBVLJg2pVCKipbDAW7CWRVsWJnnUWakF7C4o4yei9H19ZZv8wnTwMxTchKqLGNkMBmmGxNFCMBFnzWZtKQntM",
  "key27": "4VrM7N7EeEkzgbnz8fKKN12Aqqp6RF8Bv3toHPZDVPAcfQtqeTVk47CDk3uxUSAraUbCB8QpVWrgbAxZJicz9G4B",
  "key28": "25wk2ArVxDz6PY2QM1sKFvpqwbZ5P8Kpih54yQU2zbtYXQXDkKeKMxP7ykgAayh7ynyWDeu42V847SrrgWLLd6kv",
  "key29": "2fv35Tgj2vy95NVdZx1xWLn4tezKupxqzAHrEw4EhFjgExvQFaANXbaucsyzxTWmwoM1khc5dVyWmCnytabweQWK",
  "key30": "5ZB5XvZhzkLzhp4Au8xsinr5quujiTUDC1EDX88sp8ZauxQUfJR4pExXrxexMde2gUcgMnwaDGKrcoDceSFdYqKH",
  "key31": "Pgn443tCqsp6vd3NwEZXVu1wEZZdY19DGBUQ2oif3ie4jbFMVhjGmJX1KFcneRXGBsXGMCUR8bzpznQjDDhuSdW",
  "key32": "5iS18pBA9PJyTxVyJWLW44k9qSTXQ14zeLxBCa7uqGoX78LAqW8oMxtd57VWsanUPwx3ZqHBXoaVhvLnKHio3hjZ",
  "key33": "5hAbkC2UEyPTg82GKyNsM2oiQTN3pZnidwuaQLwMGbNqa28tu9hYwj8caKghJjpWLvzbVwehJXoEW86BA1S5MDxT",
  "key34": "4myPnFv7kMsMujWr3Qr2ckvb7NfGoW4ynY9NLcTXaWLsAyAstdhvLVTxXmgv3wVLJMxtCWAAiqBdMc4YsHVrDCEd",
  "key35": "5mxtLjRq73BWuP3hYHADJY3BwEPugbjBqH7XzFuJDJhLWdKGcxDnYVV1zT6cQ1S6MqMziPMq6b8KJTCvfjCZHp2D",
  "key36": "4JZ3tsvLeeqvWVxAaSuU5gZsnA42qLjJLBi9emCF4gtzGwzGHwou21Pcpnjuj7TaNJyshvqzwKBoeNGdiRb2cxAv",
  "key37": "25zUkZBLDb2mC4ShRe8YdcnPVuXbUrYvsVvdGGbPekSTtsJLhvE93yxsieGZ4bofgJtrTa1CkUVfF3CqxXoBHoc6",
  "key38": "FRsGsUgqSGpZw3egrNMdtk7S8rnVKomjvsWdSU7FmJYzfCBZqDUZdqitB6tB6TVtwcb85WnjoozKRWjDqo6HjVK",
  "key39": "5CZimxJA7mfwDDScgK6ZxQZ54mLhQih5LitHDf3q5b6ebg9VE1qQ1jcA6abUKRJ8pNGKMMCcd4TWRKmUpY59y8vz",
  "key40": "3L68NA7ior5fqL7zDd75siSfuwFWcVTJmSfqsWH4uiN64LZAhz3CYztCVD6aFLuKHkhbD1oqFAdYF3hK6Wb9pNuD",
  "key41": "2QNjvyrDnKMz5ieNrBCjS4DGqctS5VA7JnEAA8HqBzhH1VUNAFYCd5ivmdKjuLEBT6YHebFXobesC3rkeRFLhRdn",
  "key42": "3oL8pHwZdqAc3UpRkRPUDhJTifjchLrK7FJFhUqCvTTWdmNREidaYBehvqv7r1So6PBCZNJarjt3t45w1s1QnLtv"
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
