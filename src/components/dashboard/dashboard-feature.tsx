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
    "4oqAZJcBBJtdD68yrEAmoAF7uLjsfy9HbaRfJ2C2D6hturzD8WXt3zSGTYpVAUGdezTJoRQwMAHQfYE9BWurJBZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56kxG4vfWaDA4W2NDxn4jF7vFps9811bF92F3uvHiGfPNR8xvw9PJJm2ZpwCvMrL4pJJkbBBL5n8x3xVoGwwbPRg",
  "key1": "5NdnfJkYRaqmwMN1ykqdCNv36Wy13d7SrcvWzRY7neDZ5bBS7SuVyKDFYB7Va1SdFctmem3Tv8YvV2gKT6CXKGwX",
  "key2": "2C6TdMWsPRnAarvbp4tAsaCPLU7JnT7KRRu5EbYc6oJHYno9v3Js48gbkKhW1Scw56WcfT66fkWj7svcxxB15N56",
  "key3": "osDZQrHPMnUnekCzVDiTBW87bGTQG4dnVmyWUmnphVBdoYAJFCfy4F14uBirsjfjMrsbgdgdxWz2tVXJBCZGrHd",
  "key4": "5S9H1aoQQeigeANwDueH1NtdmSS8pejAD8Yih17McbAAGtJGm17eKXdxkX9wNP1tfCNc8ufRY6o6p58CugsPgv1b",
  "key5": "i5XAdc265eYuPvNrsfaaUk267dkHA3nkBCQNnZUK8ngFAnfibrjFhAYMnb9FSruv89agjxNzrbYcGzioGTPsiuX",
  "key6": "3YkHRA9CeymMsLWGJehwBSsJPD2rXFgTrPQHhmUdsmyas1PGEnxsrfEBdusM1dJc63kxLUgUdDKSKTBDuEVCgYdL",
  "key7": "oUMHFZMx51UPcQqVFL3y1SZj1eF1hAudQykK2N3G4LN93z9Tt2E8ooWzy6YuQMTjFpMtEiZPcLdrSTUVEdzGCE1",
  "key8": "4pVsUyTbfcPHDjvGHTymj7Hb5L9c1QRJEXhpcLqo5iEcqdLwdyk8PFdE94LMBLD61gCaTmBh8hVKW3Nw3w8AsK25",
  "key9": "2LGphwvtdtg7JyF2eWvTyp4VD6nJX9T2wffP1B9wTaxzRHBzGLK67gStJXWe2HwHZwXVM2EmMnVFNn68GALiyvu",
  "key10": "3Ys8fL59b2bX97x9Y2f2t3Crm6YBcmsCXF2m1oi2dPLCYjRufycw9GgJzT4xhPxr4PoF3XNBsGyYkxvVpa1dGpZC",
  "key11": "4H2f7Zhd3ZjXrvySv8YH15FCg8mjzEPZVrCnAWqghwUn5GztegEQd75KuRipPXk1Q5Rt1LPbPBu22RGgmBi1hG6p",
  "key12": "3nqnYmq9KH84tf7zR8bRY5qwoshLUoLoGDXU24NJyqrM1Qy8vTL31g1iitUqUpiCnLh6peuKBge1ZR6r4Lh6e1NF",
  "key13": "egEEHbHpnhKYGQ1oSzHeazthGCan7RJZjGC1t1i5BwzX6CPwVoWmrhwTzb4uGQ5W42C8aUnjKmoaSaP9dBiCyeC",
  "key14": "RV81eKVyiy2SnYHBsRzvWK5wfHWpd2BpcUzSvKvAZh7GMtqpU3i8TShLqeYmdtp1RUNxTUdkZ9ABsn1cF7YktWL",
  "key15": "3N7E6aXUVUSVkKJfZM7TFPqPFPbv3Rg9XiZXQiXc2YqeACdvjgvRDENzwrQzAAGZL7xbZjFfiZ1JY7xyFExFuQRY",
  "key16": "2U5HwucRMfQ6qKizjCfpdEQFxzmiDrRznZRwwrHXiA5Mbh9MTuh3YRsintx7Z7TuGcq9c1srL8zcDeMicExw39bn",
  "key17": "4NTKEXQ5NvaPZRrqJ3xUqL9ohvCG4LFgNivfUmXtXTBsU8UULRbuknUixtKuewmBQ2Wh8yHEZEdXYE9QWLnSXEjX",
  "key18": "5jVAkgmwcY3S8CXpKAQk92gGRE1TPuLZ3ivdsFJag2A3BhwACnYeW4qYLxLmpU7gtBFNGW1XPLty1QZJ4XKEcejp",
  "key19": "26mYAYKXwz3sJXWCFhkSzdszFNciMrHgtzzC1NVyHKw6D4FQphAW744tQuxAzWgTwrfsy9FV62ZvdNr8HHzF6Dh2",
  "key20": "5Mtr7f85DRJuY4USRJTBqtuWsvhFRQr3BY6cGgDepDWXkHPeFwArTPNrgPJFGxbLpt45Ah7hsJi1K1Cw9gQDeGdJ",
  "key21": "53vmYN3VChhK1rqjV5XFpDFAmQ8SWfy7M6RcVeT96opcnCHDVuBe6w69BPgwBCzJ1qfF4Zw8PhZEFjwYbchcmo5z",
  "key22": "2MiZriSrswLBArDqrqwrKgNTFZL2udmTbp7xovKwGfLza3yvraKzsRQo1c6HeM1GzD8m4H7S33FBraugbtRFGCeK",
  "key23": "2RiWUj5shSvcN9UnKq7EgJYLG4FV7MnDYTGy8fGHES2nXCkvYgAoQv1dYAM11VPp11RFErvXiQVh51MkQdorCw9E",
  "key24": "4EEuYN92PruKnyy2jEXFx8ea3d7F8u7U9QPaSRP4nEkfpNsCVCCNqRKsUHEj41xdZZkeF43N1UFPwuDMSkXdm3PV",
  "key25": "57eyDCKAvqeTJukGNbdFxLf5f23HAHbFUH8CUXvCQ3uBZu7Duoa3EiwQub2JsfWtLGMtFWrgsYvVdfiQviTRETM8",
  "key26": "64vRjEkciQutz1daATa4qudyjpwjm4t9raJaeTXEDGaPjwQvoqSAYixX5CJU9UHNQsZmq7vFLWBcW3SiwitFgGL9",
  "key27": "2UsS5xrdeDQNfzsyLeN5uidT8CJ7boCzaH6b3nZxgC1YVWEoi8SfZHNGJrUa3T8kAnMiehg5EKeqnbVp1uuRu84w",
  "key28": "3r3hV2SKcoNRWyMya1pTdyvyJJ4oSgV8bpiRiZNzrqeW7RUqEqTxpb3pAAy1H5hySfjb4n7RSKsr8q3n3ZrLScUC",
  "key29": "4yH1oRgGnDvN98a1qYSR7oSEFypHhuWGnDW13mR1gBDWSWZV5t83pT9UnhWuMz11Dz6xqbVch2RpPy8VaZE4ncis",
  "key30": "5zidehndEUj6V9Jjv3BK4iKGVkvVuTKxH7xbmA1XMaSELdaLkLPzW58QKv2dxTsrrM27wBBRs6RJBwW1Nyk1DsbW",
  "key31": "4wvFairXNkeVgrY1u2qDtK1Gnkyq6hdXVuQEQKALR2RxpS6MS61RC5Gh7cE3WYgNJ8dwBPzusreHCior8DnouS1X",
  "key32": "5QSbj3Ta19n6uh17xkzWWXudD4tGc2tkXb14dbcUrXHDZbyGSJE7b85Gw3Mim4MCjrd1RZidAtKHjYqgwgRpjSU3",
  "key33": "58UNDdKm1tXwhrWFoSm3oXuLZxFVy6zkWdaA3n2mjdKhBkF2ZMvqkh4teWUmwibGejBJ2mN3dQyKfFe1PdSBe6tg",
  "key34": "2sd96jSEgi8aEEdF9tFDifM6SgLJFCwsczCRXaDng6Ze781v4gukRZCZ8FA8nSGipi2MyAd54FgvS1EHK2JvnVHH",
  "key35": "5xrGkUQ234Vz3KhvN4MkHXbiC5ssnDHQzyP3cpXtDCs3ch4EiuDk2bHRhJoZ66yyTCuSzSxziqNppHrPAgvgXVqE",
  "key36": "4RXRM8Ry43oQp5ayX9LJj5AtEX21BkDR2XhYm6GC4KuG2m5g3sMZ2w7sh4VvpkCeNaXXEsfGMuXvdRsCg6N9itD2",
  "key37": "4e7Nd7KmDvaX4zQbCdtSegMt2RuA1uR8WXcYgKbaSGnNBXM4KyPQvyay4HgQF9P9xMftH9wq8PkELowtp4q35AKm",
  "key38": "LEg15Fmo6Dw9djhCrUbQrVXq48NTLN2PKnR8NxtxzGFFVEYrcKceVvG8EvNQCgQbmzvabwT4GQu9tjdFLLgvNpk",
  "key39": "2sQ4jaHoF14hX7Bh9amNjqwuDGUBrwA57TGt8H6RhMyUWDg1WdvjM3hmtqiJ8hJdFpv2MkMq1RSp9SxkEa4dpKMP",
  "key40": "2XZPZP9iSQRMv4NFYTJP6jAJ26DB9yx47snoYNGEVuWXfRtt7jZt2HE442cbTbdk1cUfzvCC4mXe2bQ3ZB8PQzUV",
  "key41": "xoWXtW4tRy9EJSBUV4zhB8cxMxcqSeuKrLNSzk41WCrMD3TshLEL9qbofCrUtruyeNTk7egr9aDuQsf4zBfYTh1",
  "key42": "4BDEBbRt3NE5Up2QhAWL65VT9myEf27rGNYmBPQhNqgGoC78bGPd1n9jND9kbKJ7N9DbEHCjG14DyvCdQbaLcBDj",
  "key43": "5MeGmASFZCSi1h2aHgYWVFGvQXHRtzRXSwwn4HWbvxEcssGVZtLRXwqXxFjT4xUsYvPAp7ZPFfc1hnHSimH2X9JP",
  "key44": "5Z3Xzy5HwFk4KpAo6VkccqQam6D9J6fyN32SNeXjSvs3ePw8TdgoUfWtNGnGrhkGwLRiLx9L6VwmXHaiX1VNT2eA",
  "key45": "4tTeyLbHkqK4nB2zH2UJC9DdNVX2rjbvkDfc6wFzuzNgGGTvbSdzj3SBTw1tu2jEGmaV5qMvJt5R3ib2y9o2SARr",
  "key46": "7Qo4YKJiWVzjjXNMHg4PdccX213XTgTGVLXAqab6xFDJABxQ4GNcFbAKc6VevENNFJgU81ZRkvxkRfGut7cSNnE",
  "key47": "2NTMw7zWR3pDQehpkjWXLJeSGuGrdfYyWrQfr7xRQ9Zp1irojSsbZUZB3JAgSSC6A97HcGpCq8Y9L3cpC2xWd1sr",
  "key48": "2fVYQxjyQWfbq84PBGUJJPPMTao5bmYLs4g8BNFkswjDestWQ9D1gbmcmB3xU2QhYqXVe8Qmm9W3J3E3YXTVak8v",
  "key49": "3T7zR7yAy5ZZXmUhVsGVoWjaejTqwfPQ14h6p8Ghzr6sCYHaJCNMhvv6ELr36ckzHjVauV6YahUWTcK6uvVnChdX"
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
