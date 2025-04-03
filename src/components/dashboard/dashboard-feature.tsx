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
    "27rgzkiHdKCxAB7brNXWfruAhBwWh85s7K1vNdmuKj8dmUP5tachNEHiYdCMjGZzMQKDwVVwtKYLBTnvCp187JHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gB9eMZpyD2WCbb7FTf6mcQapGZhxD8wFb4BzJKWDJfp4WXwwoQmFFyhXUEHwjQ9wp1o41NxXndg9yeHskTV5nYg",
  "key1": "2tRQJCUWGgMRQE6gpUy8pHz5y3Lv9iz8Ej7mEZxuWFtYRGTZK2KumHq84B1rqBCMWiBQtZeXdhhxei6DEuVjz8gC",
  "key2": "4toBH3jXpeWRmrvddVh6DXgrAHhm31NdLokddeVK4zXnePwYHswYmGM1KTqKrQ1Xi8P1EMTtTPyoc6w6UBYs7x7p",
  "key3": "5oefkYVx1JZGFduwarATpsNYqUL51q6jTnuaoaRiAxhBdmsB4YGWR3vjUdXVpzXW18dG9LBXzZ7crhrieqKDUSe3",
  "key4": "5yHBKKuzW8n8Uh6gLPgK8n75xJwBqaS144rdLhEw8tT2p9T1o4MkzbKSgtKD2kj18zjSYUjQZuxF2EbieAzsmgGd",
  "key5": "29b3KzG7b71BXtjdfqRu5csVogzvygdk8Hzam2qFs7LCNwrY4V1oRVPuuWCRZ3cgeHb6YtCHrDVQs7GsvnBUKyZR",
  "key6": "64G8rLjLdYK9XKeCQDjbnWFTWpGa34yPFktZ6FXPFT7rx8D46fDvPPtzJqinEiiJSWDX4ornjCZ98RJnVR5phdeV",
  "key7": "44WRbbduY2QzU7vdEuT728qSXG9XXCivx4QsKBCRxzXHt3zztG1byUTnjVQvb8SWUd4nb888NgvSxkkS8csCUfVv",
  "key8": "4NoqoTaL1rPXVACz3jNCFiiL9scWxyCfUzpmahAjAieZDNXDoaJ8EU21RXtiksWgyT21a3iDNaZmJcAxJfrMU8hM",
  "key9": "4LkfDpdF9xNZgxaiNeetNjzReKZVnFJtNYQHEc7XaghBhexSvqpBwp88DyRnWUBybxHSeYQQDaAQmwWixCr5zkmP",
  "key10": "2CxGhGevd1XRnZsRKV4HnL1j5GmXAhvNGkw1muwEy8YYDTFftasxWrRj9QQy1jEw1d8xuR6uUSDnM1m55UFikr2j",
  "key11": "2gJJLhEHZCtUmtUKpZfi2RHxkCAwvCdLv48W3Fyq1iw3TPXnDMAiEydqgnL42M41rwa3C9irmFWtPEos7ap4Axit",
  "key12": "129JHZaoqjWLprtnruacrNF8deeWKRM7WJoKWwNwuRNALJ9GiZYc8nwjTG92XNrSKn1QA2LY46j19542uwxmYdcX",
  "key13": "3J85pDNHjUVDXNUEzRNX1G1Zs7hRrL7tdqGGCBcf9z1b79vjXcT3PcpJRkwUSdzG2t4s7r9zNUXKvs95qQieSfTv",
  "key14": "4VzozN9JfZpRgpdF5Nr78vYLZyf4N3XbcKVwp85T7w8veniBxXGb4hATehU5Aopq81MKPfQo4DJksAz1vu13ePV1",
  "key15": "4CZPSP6W2wrxjsoGZSehWt9NTGXtktChz1B1uR1cqutZLStha2uzEuYRvSY8ZZDdxedvXRdgtxZ3i9eSdULHgTar",
  "key16": "2CEG3ugxu6JV2MXPB8bfiPbRb438MDoPigU9CAgYU4Lut4gYDWvutNzt54pbbrcAqcQ2T3zJJKSRf7iHWu1ZBHkz",
  "key17": "2fqbzcPkXuLFREHdaPjqHEE58C8bU6dUZN6vpr14ckUjjezvFJRGinbqEvDaR7vya1bDtvp5u6LkTaW7RsLwXLok",
  "key18": "43vYKVpjPQLguVhLqB8bWZ62V5r1ibAMdbp1J7kHBkjhB94VeWJ59UY5Vjd2sTnGcweEnutyS1sPjyK5TkST17U5",
  "key19": "39ZNzfw9mGQQbdFTwcqzUGkNA755jYocKg21Vawa67MvoQi348Fanb2Gb7FYnggrNWFUeGEkJPoyPPzC6crkV7qj",
  "key20": "5Rf31zmiAdqHkEvxChemjijkjQZJ9r9PEN2pNQu4Aor994KoKAhV6hrZkxtzMiXjiDyKgKXdjgq93WAxkf9yS2RF",
  "key21": "4Esyc4MwreJRTZDKxzXoTUSJN2HWEvqfNqWjPWaVTwpvGn7Gwr1qxjfUimKcQYfxm3BQ3y4nZyQ464itmAq3eZf",
  "key22": "2ZJdWC3VCxV5e4L6yjo5bq9EC9PETm5oHnVw44NjSYY5R5YzxyY3ozszQcRx9Jm5dbdknFkRkA8U2pf4UShgNwnd",
  "key23": "5nqtZaW1giVMHS2iboCSf9bFtAUMn1E3cKYnvNwQaK1UwXUUknhrfzkD2XzHgCKKYhHMJCk9ruyKE7m2eDGNixxt",
  "key24": "2VgAA1Hc9k7D2tWCMhUhQ46vbhdbXjhZuhyCckxqDecFuCJBDcgw9k1CabKs8qDQtEFtBAqdxUjhs7Rs7b49n5Vv",
  "key25": "5UpMQeob2jfmwEkyp9jw9qHyu53ULMaCM28Bm7cXXT5x57n8DJpxUUBhgghTpz8HbZVtEvETyUMkg1aoNh13qwUc",
  "key26": "vzPFH656d2NKxBB72mpFFRY4zKvzRWb5r22UgsdDn9AoiHwhAnd6cTPRv91bRH7vR1N2jJenAYePQjJB1ZN6Qfx",
  "key27": "3ZnJk1zG3ZDVgcP6G64jh8KDbRbCKAqKpwkpjrJUeGxC6aHLhdsM8AxmsNuTxYtaw8ZiTBbxcBZUpgZ1ePHDuY1c",
  "key28": "4VmHCVa9RKCsfuyCJZ3NWnuWpppv24ERpbB3nyaKnuaRKdU4y4sgixJh8jjcFg7BBMnfCGJGX6g4MDWPy7z8BngJ",
  "key29": "4RFNXJtyeFpcqrMcgoGh99YeyiC9mAwq8mWw3KH7kHa8FNKR2A4iVjJPHZYiL253iD8Lh6jUm22afvAPHPpicomr",
  "key30": "2sdDuXK6aZXyaL2vyuQmWWwdKr8CqftLh5q6jk4JSxb6mZb9ekzAjAeDaoj3vp6joRND8tUopBYgbPyPUf7w1AQC",
  "key31": "2Hgq3jW9Bd7V17ntj3Dr7USMMuTPPn7JVszHSNmSkPUcdVmeGsPzrgrF76r3SKcM9yoCkmqgmGiTPu3jywEKe9tr",
  "key32": "23oprU14HQFLgV9kwanWjEVa3kT1dVwikwo7ZZmYrwSdJiZFCidvp1SuewDZaKJNc4UgGVMvRmoV5hFRtjP32CJC",
  "key33": "5hMemkWohnvTTtywdmGRJ3eitJsU6nqgCgzmpqowUzT51H5ugJ27a4D4M1BxrhkUJSvw72v3GWJSVkTxrdXTE9UW",
  "key34": "34umWD8itjfWRPZPhUKDu4d5xsEQLEy3DmG6MwZGwmVxq9MZRbSbamCSqukHCGWvNkNgfiNeFcANfz3ThVamhwWW",
  "key35": "5uxj7wAyv7ajSEJ84wt4YvcxmrPQiiJHnjH85RU25rG9Q7c1ACP9QKwdjQxmFxfPV3SYzf7yru2xTEWuYNg2hmcQ",
  "key36": "5JZ1NHRptwF8Qecf71VKWBGukuavJu4hq11g6fwzZ6jBqPVRNzur3H5yXaYZGbtBcs8r4TQ2BXfckLYy7p7yhVKm",
  "key37": "2aBgvCNGm2bcithyPsWfiyRwDRPhiXa4tSFYp5SKTpoBPviu7V4gL472oCZeg2KVphwmAXmLcyQKphTEiDAGSmeH",
  "key38": "3v5Moi9hnH7S6gkf6hf3myCw2ZzBWgXtftkTFdzg44w3BVJm218EBAA4MEYisa9VLUQ4TZ6jA9QEN2vTkVFihPzT",
  "key39": "3N1GbwK3t9tmLXGjuHqM9G5tF5UkuqnJaLzLoVfpsx2oDF4mSEM8TU79m2t4r1QuEcXD5E6SHW8zfPmtDsmzVwrA",
  "key40": "4MG4NcHF6QDPCwfbqy4BeT1ZBZRuSkwjTksAqQ5kZDWrpMoWmdQ8tASuaXVc1V1rG7pAYJAjB8C3W1Jp5hZjLvH8",
  "key41": "2dvn5rg36EDiXUkjLsPoxaUjZo2CReYabzfp1B823WiTWit2zuFb5j5gWwPKdYei8MHkj23xgkXgGWGukJazYZps",
  "key42": "363jHRsNmqencNciqtuTqEDYdh8KnQtTx9GnLsizaHoCBcZ6uHdoREwiZz8Q7qLAkMgQJ8EH5zotr8TcvVDTRYaw"
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
