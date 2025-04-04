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
    "3VXZModFggikhw4ddzYjrnxqdpssunzYa5kSzCE3YjQ6uZtwDbJveJ1XLDNZQrHiJdFV3ThryPBdHaQJBYXfRsHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NSTd5JRQMaKYGdVCCXy4FrtNWdtnNk3GmEtDQWaF3wTzurSALfZt9Z66d76KXuJjCwgu5mAizTUoTbtoNFvcjN6",
  "key1": "2UrzwYADtT77NZF564yELVWBqqo8pfQVcX16svWbe1sYf757Ff5bMWtDtm7EcZGjaGFJ1XsKHaQkknUMWRUt9JAw",
  "key2": "4hPjnfk1ows4zM7ekQvd4NE35THpB4ThparFrKwDeuNfzwJTR3os6nJzdjqaqn7fNqcrfJrqntRZ92BSq3QrnaKS",
  "key3": "3MBi2CVu12iekWJKh9Yw8srVRMGWQyFHqEwmSQ576FnQCMBH5g9zGUf6gpHQkYh7Wnpyn8dHN2LJMWUZifu1Lvee",
  "key4": "3P2xxdntq5L13UVb3H9SQPS7zuiRbHh1GCJxfnYzsA1Zqgf9fg5X7AV5K5TfowFkqbZBGwTVgwUXjc8bKY9oHn1X",
  "key5": "3TtDofRBqX6HPebDLgyXsGiSQfsnM67PYTtrpYZoEPePcKVagMBpwQCJVYPpxhdsQ7ysejGwRC1EwjqKTnJssHCC",
  "key6": "3Lb3sMtLz1McHaoK2sZsApNRv3tCoxxHMkwfqPP4BDZc3Lfgz6ByVV1ieqrF8Bn3BwCvWGjbHU7byHt6bU596DX9",
  "key7": "3QhXPRGgWj1fhr3yrPiHXd3qbsVEoa98c4shvPLWxuxrwrcp8UKSrEne2RaWKH4CzBsUQPNH9igo93WPNrACuyH2",
  "key8": "oStYMZmEKc1uF1Jx6uBAZyuGyrqgH4EAjbLAmioCSTqmFvqMBG6NCYxrLcisgJhMncExEfpaMev3F5MgBRzsMUm",
  "key9": "3DoeuM9cZZt1VyvLChRUqTJtTSvjzkpmuRs3omZb34Rn6hBsRKRK9GEQvdYAievc2CQPtxpDo8aCzT6xdUXYoCNV",
  "key10": "QBfBzykXtgXHWqhGsFgaNbEWrvnYD2VfSX5wy9gdGg52kFxWnvmX2F1tKpc5WqFAivRyntWfTfoFfraexaS2bRV",
  "key11": "4vEKFCGjRcpvHtKzQi1XdTLrrT3ePKLdcwia5accPscoFSYUYc1rKuqmng8kaA19AdA2JM3RRxNSbm1D2SP5J7QW",
  "key12": "5ftsUNZoKk6e84zzsdPbTPJ3XB8ETEDabR8M2rZ7W3NjPGtFRjc3jpvj1cw3cZcEwsV55DoetcGW3dKkNWhmUAGh",
  "key13": "4gNXVc493sAQfxmoaCPsfba8zUjfiEK83NyH6zuu73EyHGbQhiZaV2SahCnWh8jTRmBnXbmHDHxHfWxPmq6FuffW",
  "key14": "3pZ2CmhwuqWd16FTkBL6iR5nevcXxMEJKEWZe2NQFSAfujTZPm6AorMcrNm5dDAvj5o3YapjoSyD4gN9bHM1wNzm",
  "key15": "2zqmyNrHiggFsGpc3vtz9tqtfYTHC9Ut2fv86dN62F9zVqZQ65kMJXF5GuP6cqNzPMN3XJu4yb24FZgzRFLn5c6S",
  "key16": "3uiAKtp8EeADXF9uoSpJgVhCG8xqp1dMRBrU6TWx3Vg2UhZT44f18bNZJ5uKsBY7GSdyFNQ7ou9opn4LpadotnZi",
  "key17": "64FfAtNCHYiSj26dCXsK8Zb8umhLTqSDPBZH7nR5pdi1tsDkpkZ9hZg5yhVREWheSMWE68VxmXmb9ezt2JvjH1hr",
  "key18": "4RnbUKsVtDNcabFLwbHEkHFxV8zN3JBtLqkfPjdxH7ceDbRVFdyjYRVYTfdcNvFmTZNpHdfnmmX9R7edoSSvwEW5",
  "key19": "XtUMWcYy7R2vK78f4TwoyGyPZUkyc8K2e56zNxa7W4XzmLD5xUKh28aAufcTFoZVwnfzpF5rPnGEZtvxxVzaKSW",
  "key20": "t56fxXqbmGnzzaKJ7s1hCnzmMerYdCVoimXbJig7yuZqHeSuoF9gbA5VL2Zupz459VSabuNWq9rG4Ue2n4tKXMA",
  "key21": "3NvHbeW6RNfNMA8JuX2LSUbAoH2qceyg7zkETK3Vkv3rmr2uZvF7UL6wri72NdKWLzG8hqvFtv1F3Q4pYuzuqH4R",
  "key22": "5Lah45kdzsAekbnhFShwscwkRwb3QUQEcXRPknU1VxWqgcRtEcPVEt7aix1P5zbrwWie1vbxu6YGdBEv27i64byE",
  "key23": "h9Vh62KZTTq2pQPjd9d7uZwLzj7CB5oQs8wQDn9kuzW9eYhH1kQPbpHMWwMVN69HLMGrzD9x8nEY6NtedHLdEnc",
  "key24": "LRYgUi2LG2JZjrR1x9ShXE38sRfvEgy8VVg8Z6GcXbKWtUXMnYGo4qLDyLk3DTHzEC5a59ZtCSm7ABGQqzTKJN1",
  "key25": "37fXddeCjhZdWZaERwcABuEz3iDT8RgbKsCTd6ZbQvRbAA5Ehq8ZJQJ8hDnz7v3xabiYMNLufD9EgvsiMCYXoDp3",
  "key26": "5xdde2bGTMwDnJNg6zMKYtgRwfS69171Kyi3qfrxy8VxPDrkYxjtJNuformuJhvsYTHFXsJv8vgGBuNLXGiYtB7m",
  "key27": "4ZkPj35HXgbZmwaunZgqfeh3GSF74seXxvMPzgtQoogZE1gBbY8SNhG8hVaiYBa8zayhSAAojbf3rgr9iE5v5Xh8",
  "key28": "a2PkBzHfzGcJz5K1non5ZTH1u7ga7nGKqv3WXnBbNpRbZCNyM2Q7YPorpUtuqDcDXYDkRiN7zrubN3dJoQzpbg2",
  "key29": "wvQ3pWM5xcGy1mjoLx6wr57EyvD3kW6VLjeCDX5pNzJpL597gJ6ZRJuRbksRxnnkyfCQrVH3cmjbk5mNJvf5QL7",
  "key30": "43zFyYnuajXXdQ4qkoFeeRadE6TYxi72CaUb7zRuvYD9a1jH4iHNjnfAUbKCT3hkfnrdr6VYpM3DxR3V3zCSxJ51",
  "key31": "bmgKMi9zpybzz9yqz7pPfHhzvp3QrY2ZMjVZPSTH5kWXpYwdBFuHVqJuNVwapQhti8bdBBnEnU9gnik2P3ybzfy",
  "key32": "jpCFX6jQrK7wfzWvHs4vW4Ar9UTLG7q9dJ1XGSsJWLfKJyWYnLY3vtRfDHyWdmmsKq2cXTFT6wKoDuMAYJ9mQ93",
  "key33": "5W2SjUiCRSt86hbF4BPJ7HGQ4qPAnp9aBqrGuXLTx84n2ohehnfqngTVEXXgavz6f2BTmdBZ4NVMwwvbBeQiJ8Zc",
  "key34": "2p7dkYv9BfjrBkp8HfCNtJuCtzDFj7Rqpb7aGAyfxdNJHCgpW1nSaDBb6gkboE8ESJV892EWJo7gxXGkQHHD6eFh",
  "key35": "5GeSesk66K7ezDg5Sbrj5UK2eVjKTqwAuMf6ruhp3MunFjgW7Cwj5vkKBPgAEYuCeSQLtxWuF1KcVkLy2D23kSea",
  "key36": "5ToxPuMF9GHir9bVaN3MnAmFTa6XBEcLfzxgRBEyFBvGA7DGJTgdQtMj2nVNBBFGLjgLUso6nonqiL4x1cXfRrMi",
  "key37": "4xCE1exwCJLHJndeiH4jmrLpBC4oxDy5rdzAFKQopWRctw1g8XfWrQa3DB59m8hZBNN3bJEZ7a5GZCrLW83FVQM3",
  "key38": "AQJ9nkB8AGMy946wqEZ7hzVUxeifNX716XBMfGdnk1fdddS8VZMbELPY3wsjVCj4hGFVToxt54vQJMXQyodXdda",
  "key39": "3YNMY1d4KDtaXcfAqBE6qVp8tv1i2DUXs9ftLWymrU3ptyrDs5uXAwbVFtd9g6gWuBdjjjMbXeuLvS8FqcY69vQm",
  "key40": "a7mWbGHUTBZUpaocK7buv19su985uci8SwjQ3xARyT977mRyUY7n72AcbSkSkbZJjn3haLCDPn88tBueygbfstQ",
  "key41": "63nP8MHGPPQjtSSziRaUi5sceksWC2jSCNZU1HYj6zU1ebBCY7WptsSv2BX8QQ5rTyhsrAXJVwmZu5WZEt9TRbL1",
  "key42": "3omwB8iSw7kuo799QJH1HESKFdA4cbYWyoSuwDMcJ3jZGMHenBndLBBd7WhreJarLbtmgzwA1TWxgT8Dg3aaZmrh",
  "key43": "3QNAkW3pgNrMzctJoFScGRBfchKLcsWD6qUm1pP4wrfEv1hGQPAYrcNAn8NhjM33iTMBPtGRRJMFY4VaEKfCaYJ1",
  "key44": "2y5DPNvYBnb3RUTCRZ6LsgraWf66umKZpXf6L8tQ8dcfCzZR4j7tsGApvwy2EET8A4FE6BsFDQ5gUzxaMTG6Dmp7",
  "key45": "2Zf9jTS6ZKG4XYz1xbK78AeUffUeKZpAQhd9izj9sa8YiTqHZP393JsjW7EBCU6VjUGWfE5jPV2NrtcY1uEQmKsV",
  "key46": "3X2LsPgsgtCDB756iyjRQBrwAmGCC9iT4qRYuZ8hvVrR4iNDA9rZEP82DB5UgDDkNeNzf3FibEMxy3cKTT1vEUF4",
  "key47": "s7xRwYxeccNU95qPdugaHLWbs9nHyEK1dwmZHvtefHLCeD6en7xvaJQoLZSy2YbXr4fKUou5R8vA5rPXYSAdFDG"
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
