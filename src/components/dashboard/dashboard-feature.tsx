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
    "2bgMmtoeWyr2kKBmoVU5Gz1xitw3XVxiGYrjXw7jqY8VqETaVBy5we2mTLZwZyxovc5DQrXdMuUPQY58EPHn2NDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lz6ZiVtnijKgbwXjYYQMQsiVMAHEbMS55fPzpSwXiJu6XE5bX7HXPZbd3WEn3oDcxYWejeRCWDuxRbMs1YK63N1",
  "key1": "2qd6tVsfWrQYEN26Ynm1GWPf9Q2sEK3cSLqr6rqu5Aq6JoUxfTSGagSDtSbEFRJTdFkitTVdvezCRuUHcbSfPaWK",
  "key2": "34D98SdqPUfSJchYi5iSZdW38m7DXEa7djGr4Xy5BvhoJ6us6qYPLdfvq189foPGMSeUHdKtCh7bKWef5C46Hm1C",
  "key3": "5JBnuMrYf72FDWT87d6kBnWFodYKHtuvQRT7zn6QS1QpNX12z5NqHXLR818cFQPvWvSkKZEg7jcAJBEUfQbb3gRd",
  "key4": "2B4qoXaWjn3nZumpjpfkpAq6XJZuTa92rAmfeCRuvZZmWYdviFtBgLhVeFsjkmgQaUgAgNM2J6s7Ei9GEfcunX56",
  "key5": "5X3YFu9F2fsZVuEmsBqDg3iWTMxW7agv7oJxZmNkJ1YeBJRhgUNLuZhSxEHpaG9kpHnG8JaoBSNDpgc4AKNcDquM",
  "key6": "3CZTMM8UxgUK2DhfYC4fPyAP6P5WDpDs9FhjcEYLNmid3P4LTc9HptGvEzorwAHoKo6LFtAd8JpYFvWC1TdgJPzq",
  "key7": "3xeyqPXqou7w5SRprcfStVPGacLSjf5WLRbdwhoUU6Jdicchvkom5NWWKXJZ2FC8B6rCG4QUvBr1HXvmQ7Nf32dQ",
  "key8": "3BqE2BdL1BZH7asyXtKkp1we2WxqgjqDbZgub2rk9gufE1XLYxZ1NiHbfL6ARcJF4p3bZmJZ37RH18PbBhW4jqE4",
  "key9": "3ocftA1EsxaqHtDuH9Yfsz8iZmwcSmxPV82dqtDT3VYj4tmf9Xp3Xn95ktB4WdTWwWqJRFMTKLjVaqCBb1XEnPZs",
  "key10": "3ec1toszKXESWkFkEwPG7vikUf89jBFYzxWNcAmbBK1zdh3GXRvWUz8eCUeMdgpLz42ZgzgZP5nFeisjMuFqy3Mf",
  "key11": "123EuqjjHwMEqwj9YVJoMC48yEdpaBbzhEWAPWFanVwLBQG9MM9hkZiUNjsasJkyQ8ri8DxdVamdwbhhW5VWL2AX",
  "key12": "2qfoRKjh4FCmhecXQVLaNPM35R2MNvnzUGFQ515QyYXHgFvPXYq3fApt1qL93odiCUgTbWFrZ35CLhw6JgXBcrvU",
  "key13": "4sUhvsRtH1vHi8N4Uz9xNy4c1YYxZJAwdF7h5N8TgBFkrsAjWsDrD8ZE4gZJ3FrKsQdKv1ayENy9BaESarygTV2E",
  "key14": "4spZn7MzTsutsQc8ZahaU71pCa3JtSwLDPzyEB5W3sw4fR1iYNqobTpod9o7pfX58dhShYXpF9RZ6J6CTqob6qAL",
  "key15": "5EUqr3mnVTAc8zxrRMFLFe4bYch5GxPwwAS13QWMi1VCew2PHr1QVQj1CWTE7j6pTx1y5uuu19xa5sXN6HcwXJ3V",
  "key16": "3T6xsbYuP3kwRUmXwu9rVymnWyWJzPuxzqHTT6BAiBCSE6fvRrazEC3yaFAHoenYbPVhiDfZGzZrjDjvB54wstnq",
  "key17": "3UDVfbqGRtsEAV7MHnjeUHDmtkK6bN8pneoAaxsbLmD9R1oW6zEkK7oZxhp2N1MK6HaymhQz1KKUryKyj6jwCpzq",
  "key18": "5nQpfHqFur1pvscv7NxrAkHSY5UNuQuNmawaAffVrmubCGEHJmhPwN4BakEDZhdHHePUk7mSGrbbSNBVu24joSJQ",
  "key19": "2AsdGYpVfAmjbRtpJv4NsLUUCFGvn9RmkxadrYChLYv915SqZRbtYdkjqqSYatRTCDJWqFS6GmoGtAY2y4MSgJ7S",
  "key20": "3PRqCiTwmySVeoD4azm6YRU4Gv9E6y8tVa8YKiktzWpKbps8mnNo3L7x2A2jovaqNqE3XunR1TmkuHAhTJLbAWG2",
  "key21": "5t6Y16X9qQM7Yy8wJhZXykm2umWtLppSNeLzrzDYfwQprCXzBG6pUyjRJfvLjF14GYPBcwPmthafDKoiuKrcVr3B",
  "key22": "5cq3RW9qJDkiLUTVkb1DyQXDe8a6mHQkgWV1JD7pPAinvJAnH8feo5EqkxFDhQCHkDz2feAntSrjwXqnNBpYNXKf",
  "key23": "5CXLeJY7FSSSNvT2HwNpUPJ7QdZDBytgkMgTRySMibQUnWauHfd8cPEh96sU4kmM5HSb7uCuK21WTLR4LneN7cEi",
  "key24": "3gVbRvYAtVJAEhs42RypPhCjWHJ2B6Nwnrk4Qcg3tty8Nc775SDdcuS377q6FA3FKM28kkwxV2V3HAL9QjE1fDtD",
  "key25": "3qwDUXWyEWVAxLaRwMjGwrGwBYDXDP54S2DmvXHu6ueYPjEPjVWQvfHN4zyGYAyDtbzEpxyJ67uM7MmALMgkBVj8",
  "key26": "4RKhCZ29dwtLjNfbyvMYiuYtZsg48zcNGjKG6tJtPdB2CjDy2LZAXLaFMjRZ1pTm6xRYom2MAen9c6dET7xU4Y6m",
  "key27": "2cwMGhkLwWKAZNohNCENPDCmmnky7LptcYkSREqGeN7j8geuKgyUn4a7unEPU2DAKBUyFAWS5LRnQBpjxLtTyrDG",
  "key28": "3yUkE9KehJJrCPzLamaSABm7mRUqHbdnd4KZEG6d3zZi9EuzeJEgxh87rmR4cR5iXU6SkNZaCPYns7BM9Wqh4E1F",
  "key29": "3wUtTY9m9rYbDx1pfzPqNdPAzBmfGzGkPxaLhMfFXh2iVoir1CWBp6bCy8L9uy3YN4LgijiXdKrApH4RYhHzaDsV",
  "key30": "3bWceJDVTqcXQvUQyrEg8ca4n3w7DC2X7hj2wVcZTb2cNpbt3AupBv6cB5qXQduPSGsESb2ZJJ1Ad1bmoV5ubq85",
  "key31": "3JQPLoHCtapJ9v4WwDpYnUSAfbTDr7GdEUivzhusKxBhPZ8vrGBwU6fGxyvG3BxCXb3r63XRZQ6bZcvEnojBHVBp",
  "key32": "3dshpmDoLq47TcBznATTisiwYSMTz2fHVvCN2dEonHPPoGD5kfWh8mqmHrz2FJdAXPE5AN8JBmNZdwgvPsKoxDVZ",
  "key33": "3AVAVp6X1k7Hjd7SFxodspsRTN97B924YBusvpSWSjY86tTVjZh96to1WiopC1YEARQPgcUqWVAAJABnvcdXdjbc",
  "key34": "d3YoMCTUhWcFMBd4jPrNf2tRxF7dDbnptRXfEuq8JBUD3rhP2yTaFMHiW33K2oqXEakvRo2UcWBAsoYVMorhcmj",
  "key35": "2BggDxSyFE5gYcmZrsDBVgSrbRRcoJt2dDY29mjHUcK2TpzbaBMh2Cgd4SVmQAT4DV2zavEm9mrtj4tEmRBwoVLA",
  "key36": "22w9NErUsWPHfd3xn9e78LB9ze2tQDSqBwA4Z25PDVutgffZYXnuCHvnKbaLcDGHZmgAKzJuK2YoQBw4RwJPxhpT",
  "key37": "2ZshzftwGrwz7daZSTpQcmkedaZ5icpRvAi3i6S6W534zimog8treWUZdC3j8T7cbPmcJjW9R2xbNGSwfjPpvoCS",
  "key38": "3cWLPxdogkxDc2dTxD6k6A5NgtPgau3Zf1VH9Jqmh7ZLA7ijPiMFg3vs7imYQd9n5wBaVYtvU6R6RzA42VYNsf9B",
  "key39": "4fNkvrSb8DruZQZgHyjeHhxwutYYZKzPNxP37UumqYmgSC35msQpMUeQ8obxQmLzHPfFrDwNqontyST1PzBNDBaT",
  "key40": "2ShcWCZX8JAwfJWR1Yn8q1DNM17R21bRfnrw2SNxdc7NQFqwHW5UAevAWrxYRCDmENZNtxBUZ9VcGffqs9BYMe1P",
  "key41": "4zrWSSrGvxoP4KruBakFKdNoSFP5HkFCAchecaWPyauCcon8MFKYJLUPBeuXzAe1bogov7fQKbBciDrHxbzJrTKu",
  "key42": "31KCjntAkxP9T2JZKM7WaJLQAs1TwQLSad9BuVQ3SR48SwUXLUhkTGvSwB7WsttejFSZpXPGgsTFj4RNchPVh46C",
  "key43": "39bttBT2n52hH5xZwag7Tx9kHedz2op5yN1T1nq3FMzZ4rdEEgEQNqP3TSJCFLaD6DWC374Hkspsgxgi3is7WaPJ",
  "key44": "4znvuESuX7DmUtRmMeAiPLgWq6RH3ctXST2DRbQBvtL528M3pzQRT5LhCGY7WTudVvHVw7Mcq9oXkk8RXJngFARn",
  "key45": "4CrkYZuuySFEpWqaRXg2WJ2L3eWXFaGvuqwc37XqEh8s5HerJ8EpjTGG5gJWY3EySbGaBtBkprovf9ardMi71vmr",
  "key46": "5pfxsHwAcpexaeT8ukVfieRhD1wCvqNa7QZmHQeE8woJELPu8495nFUMqxGgdf7eRccEx3wDhKbecUL4n3ri2CCU",
  "key47": "33ytg7zEmxiRDCb1JMosPENWBoos7JzykdX4RC6Y6raNRCXWAp1oyGzXBc9TQLHYK6BYNNsMivZm6HQGxsgSaMSj",
  "key48": "2dwcw2FtUcEWGw6eS6SYXyE6pttPYW9k3ZwgxuyKZetZguzgtrrMNbRQum3mg4vFNB1xTLfArTr9mxdcHdxyPcit"
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
