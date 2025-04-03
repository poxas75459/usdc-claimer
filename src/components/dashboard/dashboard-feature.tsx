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
    "3hBty99uMaiusjbaMsEPsC2ofueTaAXEGF5NCQJZC8jPs4wcbYuV7GSmU2fcuA8pDi1TSvKDjeCVx5yGqzT3z16W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4at7weGs7odXzQ7DswWrjY27rUmeCR4K1gzsEN3H1Hji6jb2DpvBehS9eURyGUt1if2ariyV1p5owbMBZYooW94H",
  "key1": "aGGUzcsJmF5SNGL4jt8JyXsTHLTFn3FrkuBXVrDAnaxEjDwAyfWttKbG43nwJuphHToxoykRX4RS8NNici8LWzf",
  "key2": "7wEnwQsBfS9rrPSKX1CcA6LwenqhAoAx6uWKG3qUm226opfJ6XqY6K9eEx59TYN8x96ThBZWs2gZXUqXuiA3w43",
  "key3": "5mnnUTN85ihHAUsJTkfkiNBp1QM2qrmVSNx11RwkMo5kJWH99o4ocUcwzPFHLU7hSxbj2AiHNVDZxzfLt4Yf54hy",
  "key4": "3mLVGwMg5LZGgWjqvHY9oJCD7YTyWTpQRtV4Dd1bxEFRmHSYYeE88DiHa58vKDtPC2mN4oMpCiPMvAvEwhoqCJPj",
  "key5": "5vWPJDZwxJ6TXr8auHuWcc3RdhiE5NfkUWtGqWs1C8hRiC4A9KLcgiyEo8VT4ZGDbCrXK3uVStvHJZ82RbpTrZg5",
  "key6": "2Ax4KVofuDDKUhKSAWSu3VY6gHeiAkVWFtjPEzf6wi55ckatJPBK3cwA3JyxrJccYTQr1GjJhuL4Jvz3x4qU2pnd",
  "key7": "5aTHhsmsNVUh1vDLd9tWNEok8DHNx1T5fou1iMjDw6foPqmvKJcki993XXt8CjDKgxq9jqW9riSyWfrFQ3iujJwd",
  "key8": "4CoHGCaSMH8NLW3vhDtGoU7Uykx7RaAu4eiA4dwHWDyqRfQUWweojoPv2ywUEc8QwAXkjWu2LrKd3iKLZsmRp7Uz",
  "key9": "5PFAyEzVxn6xtMz221zZgZsKL87dojXfiynsonCJNCWFEPVgULPGEB2prCdMPrZFtCS2j5zJKNL9qr5oaLLKMXuF",
  "key10": "2kuS7vA98GkFVBqGqVm5yXqZjxNCe6Ty1qf13UdAtKYXQs6q4DevA9qqa7Q8Z7bPzMB93FbjhVQENFELVDvSSpbq",
  "key11": "61p9hrNTrEXX7NuTGm8kMDLxHA4DTsrJvbddRXDLNGXRan4kaVF7WnhYnb4THKPuG5sN96QE7GVKh7NCRdhUp5V1",
  "key12": "3SSEgpK953sZi8fGboRGqLxboP5YxPvE3ZjuyUeygZKu1Pfpp2LE3SMBMboStYHfCVc6QBi91Bb2XEb8FDZSa346",
  "key13": "3Uhc3qPuWGZnqS9DPEutK3hWUKz2opNsPVVgRQTGBdWimG4bmL632hNFyvuquTMozbYrBKjarHP8BH9da6LHstX9",
  "key14": "5Ji4Pu81jxELCFXzsTs213BLCajRGQAGeuzVcDhFnbqS9raswF48Wdj1x3JsXoNXNr6jeraM3U9eHproV7YkcKYF",
  "key15": "Am2vcCtGVkb6uWu5NME2SnCLxuA2UerPykrcPJmD6KQMxFav83858Z2ZHsaBMeDWkDFsLwJcyjkuQyFaixYvfAq",
  "key16": "4ioHicdmmakTFSAm44MVeie6aBxN8qgZZvZTxi8yhTGXcACrsvzoG3YHaQrtjVYkA32pXCLSnQBBJTzDNMuzwgHq",
  "key17": "5ZvydaRzmF8rVqDqpND9F9jddWcv6krAa9qBrrmSik63FG9SNDqgJL4w4vHvdoJ3cof8oDNzxxwbAQfRy9QahUuC",
  "key18": "6MYbMiEMCtcFrXzGVeCPckBsH7GLjpkfDMtDc35uJ8o4Mra8cDz4Vo4y6jDTe9pqaMQ9pig2HwRwMBsBSjJTzBe",
  "key19": "E38n9YbVhWuTNEhCWxnbd2cJeQx3eGnboB9xnDJsrjdFXtrx2xVzEysAUuXLcgdKb3xyEgGyAf8W4PKZTmFAtKU",
  "key20": "62UsWesV8BiqTQK22hf2MnVufFfofNiyftGomDL6xUZKjkPbr7PpELUAKtpcXEVUHoMhty5qUh68TyrHFtACwnea",
  "key21": "66hpsnEQFeEjnhoETGjT785Hrp7YNhbzRkxxsLZHcvsTUrQ6Urfa9a8RiKvQrv3UkoRDXZCNsgApJGfEda7AU79o",
  "key22": "4FaaQrZNa2wCT8TFgahaKq6a8EBs7t2ZxDjYwR67YUkjfRRj42M5tNBQwqsvRPus2ZyVCLp79d9HpQ2FxYCuLfEC",
  "key23": "N5nPT7e3L6yYmWKEMGY4aST5vzwt6MUbxDfSKpby6unci8KqW4JiRU8vWvHPPRzb6k9QuyVfoRL888uZcYG65k9",
  "key24": "5rmy4HfWiCanfPbwg7a9mX1484aABxDYxaTZdh43CqdvndAPEfQ87ZfChxdzYYQ5juFRdYAnmwE52MwLi9h4SrtR",
  "key25": "3vfaG9CpDQ3gowCuiEzfks5A9ky4WNETShdHsD3kmhhEQuw1tZEbqUP7YqDp9C6w2Mbh8ecCedR8oSTRJj5tYQzX",
  "key26": "2mc3jbUSCAxqjHWdJFpBPphXE19BPs3nPNdSRfm21Q6dqN4AJk4cskJvV3uLuBy2RwNtYVnDRDHUU29fy6JbJ4pq",
  "key27": "2p8gWRi5J8CfFXAPrDvFTvzCyd2s1hD7CcuQhS92zLJ3NthkcxPbkqKYYGPhfPvu5TA18myXrvxzreCp7sw39Lgq",
  "key28": "3jg4tWWqjnXLaNAAVdpCtJXbNnBhnsepfqUuX54sLtHemxxz2YC963rZkLHCqRckDyHwFCWyBFKoXvCv9124AXH1",
  "key29": "5Wxf8ws5FciP4a8LCrUMZrGdSWP724BPxUZRACUQ4aTAYHVDgDECitwcJBHFHKeGhxCp5G17NPbzPs2is5iGYva5",
  "key30": "28vcU3Bnrs1LAgqrFViPo4rJtu549TLZEpFqutkmkbvPYWqen8QbPXuXNuchxmHKZH4Q3EycvbZz3jGY9VA8WeYg",
  "key31": "3nFzTgi5HPXuiAmd24sXZufzWxAhFCMmKZM61gR4G8GULPKkYm4fxP53kYJCkepMK3mxMDAbrmoMXC97571tyA5T",
  "key32": "21Wue46BfBxDpZLM8aRRSqkhMoQS3HeAUW87RtuzeiKMLZvsGwJFS1DBuUZgrLE66b7HZe3AweznTjPHwe6sSmuC",
  "key33": "4iicjtTQ4BsAGZxK28D7UpShLdU16yyGHbb2dsX2LyAWcjxDStEJE8HBJkqzyym8SnqntnGVquds9DdfG141esCE",
  "key34": "5RWwGFFxbJH7iAHSg2feSDDj4b5ymw2bALb7E4T8bhxftJKgJ9bEoVWjocggmMo5u5KReLbM3UmBHqisXWt1HJdX",
  "key35": "tiPpgX59Pmb2Urx49yuYnd2zAiUE41uzXMv1bvQpyPtX131qhrVN7XMfkpnuXVygpN5hgoNWR7tFpZ19SbjLANV",
  "key36": "3eWUxPaXbvVMtdXdEJBBpy6FsHaniYqYu5hvHyojj6iwWGtWSF5ysvUFntxu7W586aNeiqXnivNPjz4Jwvdkifts",
  "key37": "21nsfyRLjxEpijhsYhLeKTGRzdPgXumQ1cFtSsDHvemuyRLaSVBpdMZgs4DiYpxeTr3LUG4byhgr1qisFTvfTVao",
  "key38": "63qWkkpfoZcUio33c4jA4MbUxnCNsoV2fqaGvd2DCCdCsAt54CjoqXsw95oYeFHyR6Px3pfdhRkciSRLW3wMX3mi",
  "key39": "2xXSBaZSvVpap6deqQthhQBWmNox3t2bgi98H23LQScT2KxVAHornXWbicgmaBdE38ohHBVsyA11zJ91yb7MoGY7",
  "key40": "2q4adHXv1orebAG4BfRz1DFUigyDhHZwRs26ifpprUR7X6VT6dsXxrzJZsFvVMFgDsbfPanrsW1p9gowCeabejeg",
  "key41": "54LdZKV73shPHZUiGahPcLnn8h6L3AVHKv7AbjGEcJFYPvc79gRuCMUnrbpk2ES2iGFwnkSfV7qWWoEF8QuTKcdr",
  "key42": "N67bNuPKnkpSkhab4e9mztrhqJAb3anvJW97uA2Jr91tevMzQVFkvtXEVCTjGheohWn3fWZDKGYQFaRzTen2MAF",
  "key43": "4ABAYBmH7Nbe1NBi2ndG9o9qCou8J6XvPJemXyQkDSGufQgET2Qi6qYr7ovnPjoksshbJu3xSnqWUYbRcr2PTQ6x",
  "key44": "5SVmdraRXJ4hTRmTPfdhLba4ni3wSFzLnqwCgDXLy9PqJhzHexbQk7YDUcR6cDCfDaEaXTkNT957Tyf2CTBirboP",
  "key45": "qJgTPFTqYuYJAFzX9UKhcgF65akb627eKnvmbHaANYt4uah28k7u562QJyvC3UJkmebqfFfjt9gFJMdSqMD639B",
  "key46": "3svATuwNPkZTvgvyPsjgdcxHuhqB4DCB5nRrNUnQAa6m5cod1ksgR4HkF5rFiyg9fX9yBH7TCWsxAkZkScnCWxhX",
  "key47": "5W6u4z2tQfYdBtu4q1FGRg9WjqfcKkwSxigueSC2UW6LW1PBRNMMGa7Cp2wGQYPt3SNDCi3H5gPYmdE7HMZEchN6",
  "key48": "88ZNHkkU41crMxg2CdFHjVR2KfoF8K6Jqaw4EEVV1trMPKwZsgwpyAU3TSo1Enkz611BKANGbebFGk7WVP1Qthy",
  "key49": "2qRzwvfK5wHKtQvKCdKCsyxDpSEEvaMHBRACrR1q3ykPcRn34hBz5Et7mcFP1LvzQ1yJix7uHtvM1r1w78TrztmY"
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
