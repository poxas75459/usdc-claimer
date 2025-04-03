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
    "2GjM5gZrgkDe5XscV18m7n5pQ3qCkNwLWUM4Mm2oRajiDhdUBfMk6i94s2ww1V1ff1PYW9VqTGgK7JC2zAMv88a6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35HNxP4SgHAU2d6Evc5M9CRFJyfqJCn6NR2qxpxbCH8DzAqLCdnvPC8LkMqwud25yKQUtSqrYUnubmhHsU7cAucT",
  "key1": "5rZ6cV5HSu7u3pGRvL49H5BP1g6qmwh9KwAya1tL83DkTo6FziwkqxGJVcvyJsA5w9QFG3rHRVLGLchHm7Xbick9",
  "key2": "o71RJ1q1UuqokdA4PLe6RFnUWme7cp9PBJvUBrjGiptCquCWJQUEDwbs2WX7ff8F46sYV2qfAn1Xy63avMTiRRb",
  "key3": "2QFXHNr4C2e7FM2KXb8E5kScPFTePKoQ9dVmnbKyKLVhvHp8PXBDqs7tXqF7dsKT7erXPxNpZKCx8erekfBBmSC5",
  "key4": "2cx7iv9jqmmNRMhHrmmrwjawf2icuXYP5nJhKeynqfJjL2JQVuSgKDVjKZRzsiNw6GmYUmUszjUGFJ228sLdr2mh",
  "key5": "2vGseKtJryxwy1GcZqk3g4wocoMayAY7UiTt3xBx4nZ7ZsvMDb7BM9GnWLJz5H8CMmkkrBfP72x2UKu5pVEHyGUL",
  "key6": "3ciYgff9B8HyiqpwHwqXw83HPr6vyBwv6FWXkg1Z9iYwUhyWgaiPx9sNoGqtPgh2kWSidc79EnjTPKDLPP5v5g2C",
  "key7": "4HFFaSAa1S1K9GMhoNZgBibG6vTAicpeaEbF8na2dEEVeVWqU9pDNq7okRPptcyZ1RVoEdLkD6PVuvwXivNp554J",
  "key8": "3Lqy7T4DJGFmEnjWDx85gaqns85FTt6o7f89miiaA4mSvpUtHs3nkijnDJ4RhpS78G9e3H1Wmqt2cyR3pZZ5666J",
  "key9": "5aBs4ixuYZqvNGt1TbPdskYg3KNzeasAZkR3C8x611quUpsQLBRmPu63C11gkJuAe4dbTn2rksjkzSSPtb36ifzs",
  "key10": "4q312vBQVWFzBYh8EHgHqx3VH2jtoVewvs7gbm9FvPDHkBZaDULLS3wDmupAZ2Jj9oux2HhfNtbQkLVvnSL9BTLP",
  "key11": "3EUXFJ6FU3sqB7ocpchaxrvQ6awGoUVZTjapdZbH1oyKpK4yyXZkhvmHMUCp3tJcRs5HRVouNMjdETX9bJtaEwFX",
  "key12": "2oxwkPqWt61v1AHzsKiPbr6sZMhQDzBo8mAgYeEujdNLEtnBeeiK2jxhL6z4JpbPDUJvQNoUTtyR7ZzrysifP4a3",
  "key13": "hZhgxMjFJFfmLWmEMn6UG259pSBZK7b4ePkFwQpe2KGccNZTsQyzWzDkpJyyuwnUTq11LYrJUBsMmcabUPbrBrb",
  "key14": "3ZDjrgQdnVTtoXnPFnoZqmZHLN61Wd1ch13TaVxh19zNQtMXYBEsn4zSaPZDrbVzzXC86bzCDxC817vWtjr4YHF4",
  "key15": "zqG9aMF4aHKrucd5jzxuXPfx9etC7ssUSTNQdbJvsFZFVmXEbzEFYa2vMm7kZkcr1btanrszs9QqJLn9E3qZ2tk",
  "key16": "4kWZwRkxpcx8dZQmaXUDr4Z8HvyQhtfVbM1EQt5WHMzK22AFVAUsXmSA9yRZD8yhm55sawNvdm2PJsZRwP3W1PeU",
  "key17": "4DHdJqL5njXb1UUt95TBEaqhXF5zPtEmEesTLrHLa4SfKsXxiGwvAxUnpFWEGrsDGfBpdtZkCJ9o7XqQcWfPVcqe",
  "key18": "2DuPfhc2PZSbdQePktzXdzFXZYrEKHa77BkofbPeYhfH9HrFMrKM1de1qM9PeHTnAhcMjhGwEHGBCYHrPc9HHsxg",
  "key19": "4Jr9KwjfQ4mTJmmJAtpaQ7thaeJZSmuFrp97yUzxKeUKWsrKFrF76nTpMqC3qYaLzeMSw5v5H7fjRqUGnsNBGQXc",
  "key20": "3zkFph23GzGm3DK9YZCUsw4mc8oDYbcNvwhy64kwfVy4de8d5oGBFSqwwTAsCakUxCBrsdqu99JZqMk2jPTBQLin",
  "key21": "HxweecBoavvA2ZYBVTwqMgzjYskSCcnaYFsrStimg4tvTuonfjXTjaAbLVwqNNmZmrpJW46QfdrEoHApdbv5LJ6",
  "key22": "3WTfNwRE6Bkmk3PgaVDiPrrgb1sfXBXXmzdeNbk6kEWTgZtBqGDHYgtPkeU2Pv9d5foVzmMbVY3HjUrZj7msscCg",
  "key23": "33PrL6kvaPc3LzKHayCrP8TUud6tqo5cjZxQgBENQ7fvnxcJTSf4WgBq45W27LV7xACNV5Pqe2FF4E6fnTpP4jt5",
  "key24": "sZ5ZqWjZUcPA26Bjm85TXphTqrJBPGxWHb3P2HDhCcoDFWVsWHoZ7woLsS5G5tZBDurHbvLF5x1fGHvf6ZWFKno",
  "key25": "63yWTFPRggLzhmrVMzUxJkA8U4PhLDAPWGVVo2QittNSB69mxcqLuoLEKa7sQgKHCzyZQYjMmvP1zGNib9JofKwb",
  "key26": "5ycCuLY6yecBu5R5TfUrhNpPdz5YiGPMt9xaf9E6nNZGaYPQbiro5tnGimmygDmBVtn1RhovW1CEMPMFE1BQE2Lq",
  "key27": "3JRjBAVTWKQ9vXF5zwCPHGxVCxNZ7QqNsLwJMz8FeAv6CBprLiKTRsekiB7jWi7xLHPY91xFMZGaEsUqkEpFW3Ri",
  "key28": "4ACjiAFqy4RP8ezT3kAHjsG4JsMCh5Knd1p5e4NUMdJohWpx7yDz7MQVkjgb2pxpW2ej3iKi21V5QnRp3ER1PwRh",
  "key29": "3Dx5hR3TV6gtNX15uWFLFHDbjeLqHrJ42z7Xa2zg4fzdG8McN9wAWMdfbc2CZPAcK3wD7g3Y5tJ6ecEnwy2dJiXg",
  "key30": "3GDvVbaEUqZ1XuQi6RWgUBEFc1hUZ6PRufrRWMAQ6RGJAYDfzJPUWvYxjxwkKnDUJeaTUYA8AziE6UWugXzt9QLB",
  "key31": "66zW18ye9KeF3EDnq4Ntg5JNRRNuyGeLvUYWXJ6GerxLuURCUeRNf9Xncb7QZtmvjvcCtBQHJukxhgKZ1b6VknDG",
  "key32": "5FQyf2KTCfGqhYxR32d7xNr4XQJH9ycbUxPNUwSddUijGmDFmrJYjFL8CaGKe7Wi8y1FGTDhFUmNaz8pUw51r1xi",
  "key33": "4jUBRwB7imeVKsm8ZMo2FpKeNHkDfDGxZrMNKP2N5dg73YJaf6uQ6KqZJaex12REX8JW62F2mZ99AiZ5RXCTdx8X",
  "key34": "5ugynFmgzy3Amwucmi9vrFuT8k4MPcWEydJ8VaA9P5Sjvpbid2mzv1MnFu5bZ1u6rEm48WoFVHwuYHVHnZMqpMW8",
  "key35": "4Pu5T2tgayKj2AP6HHsJEwDaZ8KhpzYJ8JCc1DBKXDPSHbkAGvVutve7UEDhM8wX2YM2XnVCJSPhnuS5FVuE1AY4",
  "key36": "hLj91Vp7oVLCXGkMeo2qEU8hctcdR8cbmmTibLns35fa3k9zHW4im9e8dFoScvUPb3QjHLUVNJpTBRzh1ensW3a",
  "key37": "4qeqpRhDVHpiZ6vp2XeeTf2tRNTpvrD2cEVEDN6tFfSpxshNPP8uE1anLYrQYxWE7FJKThwMXkPuaR2i6AtqE9kq",
  "key38": "4QVGt5hmg5XuxYo91eS7tBNKrgUKjN2khsB1LXj78LCBi5W2TepBiYhwfY6dwYmRJf9unccoUi8Wi5HMMbV11yY5",
  "key39": "2G1pcz9kM4tsqyvAnQ4GtCHFbMAXwaMcSc1gnDNmazFsB6o9YkdfuayN4k8SFi5Je5EtZtQXoc5GHsuZ2kvnx9jH",
  "key40": "5v18JmdHrWfgg2TJM4U6NYgjoi9xfD1bEcfnb6VHtwGYKo1WFmJXkUWriYPZBM5CJfysD9F19Q31BeNkaz2WDJX3",
  "key41": "225eCawLWAjD7wkDzCCYQgRYEzqc5Xc3E3AXffox59sFhZV8TcnVsEbDxTB6iiwpcJdgzkJZztQRZL7qfNMRcHt4",
  "key42": "2dEumj9kPjXZr3Se1Mn4heNTybyWM12J75QHrEr6KyeViyWhAoQWACGpJiGygK9WRgRRJTBjcqaVeijT7MC1JzHZ",
  "key43": "2ns7EcFVVegcx6EpByvptYdsxy9QpVK97x3qyNy3f9vZ4BRuZ7TuCBuSbQfZRUA88J46PRgg7P1MBnJGjH6yq61y",
  "key44": "3g1JYQerF4S33wCJ5C9ugXBRNd3p8o61dLx4ZVqZizqY2it8DiviocY5ZdjQtNCpFkcvS9dbAiPs4xBiTeJ7uXdV"
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
