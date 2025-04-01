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
    "5ACQorKjLWaYJvtrsBJvayngU2JpFZ6tBeHECWHsqSE6ztMZgFABqYxUoi9k7YJnbx8qkgycrLnEnJC8RDHEqd9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2724GMNoT5jpQKn5MW7XSZ836GLYHz53bJkrpA6o1fXmJaDNJVA45mzct9UH2ib7jKXDiacVr5UFihuovrZDiCr8",
  "key1": "3WfivJ2sJctmCfd1SqcQx3v6veb1JiWrm4ygbuqLfQanAeXtWaaH6NYa1kepWQTKTB1f4LXFnRpgZAtvtR7gYFp1",
  "key2": "5rDDLfXKv9sy92VP4yGem156DwkbmMk6VEVCE7P3QWj3YkpNBtBhst7bGZ7sPuLmN3gDHCKbwZR2ZV9B6k8VNesp",
  "key3": "4pMxLmF5RmCsFLEjvwusgAziMksYnT7CjHfTU9kUHM8CGubvEgrtLmomJkfqzbD3nQsU3k88pskRhybja1eTyNcZ",
  "key4": "4fUxjjpsJEHLiMfFvMiCfUnSaLA82vccPbQ6Pp2jkgnNpt7U9j51dKR7PzJMaD19WS62RbHEHJugaiuXF7V9uRkc",
  "key5": "2hErvMWQzmMB5YLQcjQRey9GLrWEkf33Yxoz6iJpXyoWGN1gDq4xbhGoV4SUdciBYM2tLZeZaw44SjUnexRUUbpj",
  "key6": "XHzdM1xdkXhdqT8Tivc121ron2Ts79CQQ78s8BQtDQxHaiRKH381DcgdEUxiPeJGhXxXtt8zHoqinmqdnzVaSeC",
  "key7": "tJHESerxypwSRhTuXoHRyDqZi7m7PkJPKBjyGGP7P9CaJ9jLn48kEBuXnQct9P3P9ki2Dq659bU34gwAjcvwSoQ",
  "key8": "4QtVcQtTGWv1JbNkkPikniMrCoCaBSZzbNgRTRknew131w2WQqzkC4A4F21kJ7yP6Qv4Z4F6iUgjvez95ZHehEo2",
  "key9": "5E8W5oa5u3aEza9o67tMUv3ZygJgVa7YFNt5CKKPd3SJ3n9e2Q4BcfZaFLhrwFZxZkb29oTsWk12nZ62wqpycPwe",
  "key10": "4RN7UjqbLK3pRLDa5pbsLtpBe3V4K2kBYH9MHjFW8hKAssjUsAKA5awWxyTbbJXwykwcMBhpStZbDaSuYbtkXoYS",
  "key11": "23GUBZivFQLtnmKqvKKTYQqZ1c3E3PFvpK8jE2MEXGizPK3MZ3x48yD8wrM7zu2yaPnxjWVQVseLBLUaL5aYVFam",
  "key12": "4FGbV9Qzbm9Ufb4mujBUuUwq7K44D11J9LUYjA8t8SBNytrfG1BoRqyrFhNwcxsE4FeWNPagF4Ey82xResiUkqmB",
  "key13": "2TR5QQxj1PUxvpbrRbXS99REtJ7aAry6XqETJuk2cNxZGM2QYokYwYBGMVFk35HMaV78NQeV9rSkxf2f8KSfvteD",
  "key14": "5upzXtGgHcPUuG17j5bjSneTfy6WNJ5MSdYhMWmTqGGTjmCrFnafCRZmPwhhGScQDowgV273E84eecWcbeDjWWfD",
  "key15": "3z8rRmjtA2PtT5tpHeifihj2NFNejtqDY2JQxK1EeVoUHZT2PFRa96VaZw27j5qGuim66seLJhWXUs54HsHNE1Ws",
  "key16": "4YcUx57avFbM6Ri97NUcTV6xVFgXwtCKPVGv8Gmqgk6BmZ3JJL6g8Wju98qVN5wgz5KjEoY3NaaYzAapFHB8USsF",
  "key17": "65bahA6QwPjCVHRB5HE9pKMf2BLbKYSCPtS8MLK7boiFPAcNgsMRRzV5m17QdoNowLSyLpb8BambXetMdpnPJgyQ",
  "key18": "52z7ytjhR6iTgqXvgGdhhQqZQfNVKUpmrfk3AqJTMxxj2AEY7hehYnHdzMSSKTE8weuD4avav8xLVfZaKKzsJmQe",
  "key19": "4QVeQiLRVz2JjZV2TNU9aRaExvuugm41FxniWrVMjHM1SMhdk6KHzzheW49MkhywhqEMLeYsnUTU9GFan7K2swt2",
  "key20": "4kjoxZatQvDDUf4H9EnBThdam2KthNwVD2FQpoBap4pdPjk1taoStiPZHFQJUhkoWh7yHuKYWZLtvnRiS3YGcYFS",
  "key21": "37uYAUuNSPAcQ2QcsAdwD8qaGiUbrsY2KFiS1LZJziaf7zwAAAei9497SoKaT6tRMQHBSoRxur8mnqZm5vezMEhg",
  "key22": "NHzXCCLKcscETSr4UDnbbuXmm9V3BtaQacyZCNVDTFkLE3oFLKPSUyXtt9ZpFY7gwbNFJ5mtQnN6jFMSgR5gtLH",
  "key23": "4WnFDBGZF4yQPFTdsZSFsbKVkQimj1kbFwJBUkuCTRU5pBdZDNqJxMGhQv7FNXq8YbbLuhrnyFS3xB4ZhQoceX5R",
  "key24": "Mfbm25dGxjbFnNxui2Q4bV4DSWEn4fQtTNrfNG7fNzKderdPgg3V6xhQF96rYCoLYmtYueR418SeUyESDEKfbbk",
  "key25": "4MaBQMawTDrWsFFJ7xbJ9c1hHcBkfrX6sWhuJLefcEKJbj8Q58ADDSCnyu6YC8ZPL6KnzTuhb2t8MZhwfzyBB3Wf",
  "key26": "33UtW8WDN8PevzEUT8YsQZrYoZ2xZqrfif92Z5sR7qotHTHpvTWVZ1o5xkDM4oEGDtDjNY6gFw3vpFodC7C4nMxM",
  "key27": "3RMRpEFxSoP8qnk4y98o3jZTJ44vPGqevBPcSXowpxCnbNXQRXs8A63PBsxigc85W7cHFAhTMsnKYkQAGsPndQMM",
  "key28": "4Yfwk5AGcQueSWseimSCAje8WWaSrz4ZEUXZD4sddEaZcqSK6goVPZzWDr8wBFhTdvmXqnXbVZv5Vj2wZ4mDsLgR",
  "key29": "54C9qfH2NZJ188cfLNdpyYrUL8dzpo7PqxLzBRvmf55ghxQKFi6k4wPV3JGHZeAzq3XfsSGBQM2HWAPpo1VeeCiJ",
  "key30": "3SPGUxRP2xfXPqgWEhxz8Che7g1SNeuQUwv8tfbX5ijvukzsokWKeqv6uvTBz6S15SVJH39jksPDa5e9wN13KSoW",
  "key31": "3k7q6vywgY4VJuzt3kP57zNtpdiAe1JZLvmxibhMmNxY3vbLZPDTV3X2q924cyeTaPmxEfbCJUGEw8ax3bWdZ14i",
  "key32": "35qoHHcQ6v3AyxmRK6GujwozTZrLZ7wYczdaKuBmGTy9ALh7HQLdLujdxk3VDb1nXG5Ne7ue8umYJYeDLCvY7hmT",
  "key33": "5v2qTvPo7Rb5qer9o2hPGPbtwewVz24hNA3ZRW474WBKynZEXq8CAgR2LANG7PfwnUFPP32CmaxHvZe2fddockAh",
  "key34": "2Ue1EpMaF37FLGwcyvexb2vbMiyt87Y8YTYmcKVqfJGW4f5w56rjS6dCfgChZr4pXgPyKsUp6epBc2YVurZgHAMN",
  "key35": "3cMHujWZJN2dMA3jV8HTeMaiyJPF4QFd4N2jcXGNd3c4629iATGDVTtvSXkQ52xi8pZBMYUvZuuiBLB4yZFzBrV4",
  "key36": "4eo6DhwysLGzGiE6gx5Np9pvxWVj1qvKAowwrD1K7aHQMzSor3S6vY2n5Rgu89badcgrrVcYmmDh2XmXdAqBsKqR",
  "key37": "3gphPNsJRXAkJiRNejebTxuerHWZ7xSy7hphwdzQ7h6Tu7bspfExV6A6cdYm9nFnuUYBhkogEvPqF4rFay5xvHmd",
  "key38": "2Lib4pAGnbLyH7xKjc3kArqbFszXKRYgwGRvxSTz1ksakzoHuZPdhbjjcBQ4aGwPo1MMu6taYkq4oLWrywBWw3Gw",
  "key39": "2m6tWipzV7gj82GYVKAwDG8KohzYsnUnd2DhSQNCrPi6rJBCQNW4x6cA4jYgXauUoB6zuvY41xdxfQzJ3zZ74VyE",
  "key40": "66Mw2zqTmYujbLMjsdjq6aEttV8ZjVeagW2jxpiGeJA6xjYMdA4S5dKRXjTSW6RMNmRn2QcReTv4eN5z1czGg7Dw",
  "key41": "3Sv9NvxGwxgi1ycZhBtV98q3kgWbgRXHPXjL9fF2beQUkexFDSgKW4FcMjaPtGFMK6Kd4V36octKXwD3zuzTMDTc",
  "key42": "4K1CYwggxWp4vUMwF3DgPrEgfu3HBHuTtTE31GeczxHJtaSFPyy5xgEZzQsqjcQuNa88xnMnKxVGjvZE3R6VPyvC"
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
