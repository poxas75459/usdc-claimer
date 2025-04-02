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
    "4QfmZTTqPa5MkRyzSCqrLQrHMRo8K8H6BqmdAupLYyXRrVgdehnCvNkA5zfLV5Ado7JefV3aB3518qGiQxZyBV7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KeZWLbcKco1YpS9e1ehtNbfQp7gHY3XSnNM9ynxMWtbABzhZAcqKHPkDrRfWnvNYmvuw6wZ2CWcNB8x1DQNv8iv",
  "key1": "2NAxnw29FAsTHFVhCewFkUzeW1n3g2cudHGTyehRhXccCMgVSn9pfMTJQvhryWjPrMTmSa335zuZpvY7HfLvXfG1",
  "key2": "55S2nqBM8dDZzkhMdvLSdHWkhG8iJ6zXcqTPHbj1TWiWF11pBgjjMN8BxbkHriCBmREG9CieYo3BExyKRXrkphwy",
  "key3": "5JhUY3qPQrWPtaE7fPnZbsEbx3xV8wF2WtdnNZ1aqfYTj9cKtitGNsFDy48QvhxQvrtnZhwfniavxNrNvKXUHoHD",
  "key4": "5RhQciQMf2GoZS3oq8zce52yWf5NAqw3mkVCWA8NuSz2Q9YTBWvNrfUWgcREJGFYKbLm8ozNiQUuqe3Sr17f5buv",
  "key5": "kgbjMZixACfjauc75dhrprG8EPLuvFu5ZYctbPWhd9h2SmvsDhRPgSraKGL9kYKSxFFH6NjZXUcjke4H7QGty68",
  "key6": "cWTyw3FTX1kTVwzRSfy9TtcBqhqqXJdULdARnf8HPGGq8gFbBvATE15c81988jPAsFYTzRXiewscLcEXWamAQyi",
  "key7": "5FKF3NaMccgNiUtMZu8b8QyUjLvNZb1sr3S7onmPdXnUvQHJdGR9a6cLeZ6E1wv1qt2jMtps6jTpw8Rhbj7BrhDe",
  "key8": "3JSor7s1p55KdKJfJsbBt32jDBLyXPJr6j2A9tQdqvwNcTC22dBYtUXcF9QamGDHc9WCFYccgZD1kqiaGctEGduL",
  "key9": "3G52PzMVtVDvkDsMgSbNiyQ25dPDFskjUXjPpFvwjNSoQk8PunaDe5sW36FY9qLGyj5YVrkDXSXD2jLvifzfCXAN",
  "key10": "4adu2mzm4cgeev5SHvq5otYF2ZU4FtfsLZzamy5GrEuaWUhpyH385f7msXXutT39ZLWrtNTpYWL3UJTM8biv81Uw",
  "key11": "4L37Gawn2CneZU4iGuhScejWyysuPLiTukgtiTJbwNgDV65F4YXwynXySNGaMmPDiXUFHwSgVJSQytkqfbQ4Lk7a",
  "key12": "2yDQU6QZmceHfJPzbhHRmsQunZs1KY6pssFnEo63omrHPFXwfbCE2wd8Xmg4RJT5nqZkzhhPHWomy752Wswp3HtK",
  "key13": "4vwJV8cb8SQWwNCfLsom3Cz9sWxArvLdhDMEpkj7CbdEYjP8mdpKCMxXpHhrDgFtKiv4RRphox7GXKdkocNKqoAH",
  "key14": "55QbMEsj3foGLHzMABXKN8JCkNLbDdgWytWG7FnN6NZbBCghrjPc9rpwEnijSz1MhPv68DFTBtjKhv9cZxZ6Pmpu",
  "key15": "7hbGLW16ng9b6CatJKg7eqMzp8RVrPVEJRP9L5s7pR9BXhrVfasi8ahoWSminUYisxo5RK2tJLq6MAf14cG3zMe",
  "key16": "5wP4r2Zg8dR695xJKv74VFCNPLQC876RsBDK86MRCa8aoYs9KkE8YJ75aYTXi6rUjqjrzZB68bGDGqCj2fCEqUor",
  "key17": "3E64shaCt1Q4wkrfnJSRRCzUW3DcoGJq9oYLP3ogzrx6P3Q8y1uAVCMYkpFoZPFkmF5F39ZykyF28FPKCAtj5nE9",
  "key18": "yU7cAYApd1hSFBwncGoCwTw8iE5PNW79Amiy3GroyzwWQHNaULhee2dXbjK3xLNWZumowkhXjRSgAAMykz8yydS",
  "key19": "5A9QTKzhcbKeGzg9LhBaGuJsG8kfWeFYTJWZfVURZ53mtL7x2zZQ3A7wCk5spDQ9CPohQME92Z1oKnUQhEWgf4TM",
  "key20": "3gv4QgdWucEzzqv1Y1Rf6zNxe8oMqbVdZqM9UYGaBpTRNByqnbZyn3P6o8hRzqfg4Vr4BMUWQY3RWeTk4CcZLsSC",
  "key21": "4XWT1kp29eXYyMKP5TpSKpxKpHb3NUS6xTfDFMth7nSJPsjHDpogYuWbT2XiS63Lw5ozi45fMhchgyV69ThxCeWT",
  "key22": "3EQ5Z8Zoeu25y1YpEvwaaon2Pb1e1tXrWNFeS4Jbfe12Yv3EE69qt6eGzvuup5K13bXtWNUB1oZb5iWFAGSL1Ykj",
  "key23": "4Hr6fJvnyLLwEQSU7KeGiGhCx5Msbh8ZLgDCDYjYn2UKcURrSCLPfqNrZekSAzhApqTaE5eHiKbTZSYp4ceFccxp",
  "key24": "3kZXiWZBfT8T1grgZwqVE8UDqkxJvQH1Yfbc7kr5jVoWrkbiftytijppS4YhWcY9KanM9WBEZgbTWPYUTRBHeroK",
  "key25": "dS3K56pSSzrjQoqo5mz7ioPYvoRX3fgP89uuS7Eze957nr2MVLQ1z7Ai4dpcYs5YXG92EN938bDAtPEubJHGNah",
  "key26": "nJ3NzuCHr5TNf6J22mNSoWduFHXVbVgJaYemXHj9h3EuY2SqKgkYgGPPX8TjoBsTJMyG8qQ1CegPYyU8ynUpdPX",
  "key27": "4LQmLGcsivnh4sCfECFRaZnATz3fVPxGfYiSX8RW6gurRfN8guEP9CUmgETVktHyDv9HtmG4TVioMKHNngzxZqgy",
  "key28": "4RAoqaEt5ELrMfRvvbvezowxSeMAvMgDMGpGonJNGJuDwACuA9JvKZmj662L9442Ch9DdUTWt3iGHq8F1Mik8MJP",
  "key29": "67jUVXrB9WE9pWcgnhfn2HiUqY8BnULLRpKtLB7jUoK6dZ5j3iBwQk5vmCGLMH3gSqKDaxiDFABUAUV7AeNsFszK",
  "key30": "2dkcMRZTentb6r2DfTTMUKc1mC6CkWAqHHWvP7iDChsYp9C6gRu5xs4wr1qKCK94MWRScEktZv1HDEhTP2acWU5u",
  "key31": "3URpJYgZhocaQV3mYWdzy5AbjuVZoKkL1dq8hrFgJCa43D5wy9AcbtkPtf1wuGm8PzvuWSCUKoUKyZV4fpMLRo8x",
  "key32": "578LyNRJSSFDJksopmxQXD9ggEe1yNa1PvsaUbsTjc3oumRke9CkTdNfSLr6cSZ1LbVMUMcUGQVdHWftCk55PDqh",
  "key33": "2vXusCoc8eLw2kyUgjc3zkkVqUtFLMn6WVhjagAPUbM5jwKDJcpuREcx4Ahki7mz2RPvZvGbXajSwX7dJKzqvtGe",
  "key34": "q87nMJKuwHJkvdF5KBvSeq2YQcjdxRUiWNEEEEMouvUgrsmo5d1ztdiHXg2gy2yTkC1i65e7bffrcLR3AN8xjQw",
  "key35": "5f1ENDFJ79MBqvkLQqj6K5G8113k48qBLKXuNGppMomRey9YggYkFxMYy9auCnWoud8KbuCehK9MNv3kwWkwtuhw",
  "key36": "2B6JfCAGpYnFfNHKbM7fn7zEGbk2zvYjM5fmjYh7K4f17kcY2f2iTvzaaGCfa2wRdkXpqTPGYhdbK5tZ943sF4SF",
  "key37": "5WaF3YMFPqMwobqSkZkjpEJ6bXcMHhB5xQTZjF2hAx2DwPiSkYp8M6zxAqMkjTxEAHYuS4cD3tDM2jJcV7uV1hwP",
  "key38": "4PtPE1TwDGiC3RhAkZKDPw3htJjYVpuf6AWRq2hR39iDZ5EwpiTuxE2gbC71cfLnRQhjUuHExnFcWUrrdS53qZtA",
  "key39": "2CBhQw3gViJKpZ84jAYV9AiBVf3QKFnYcBDfxJbVEi6FPpYyXVgxneraxJ5Yn8bDQ41BtnysFqFieMjWQJ3NjWAb",
  "key40": "37VL3wXfgWyMpsbKiEpCovrjrKv4CFRVDN9VbEADYeve8MoTS65rsFQxoCVzf3oCkc4WiY6M2fJbQkzebbgisR8",
  "key41": "5gU6LL4gRx28zmHHowTgza9j2HUkdwoGiRP7Mo5HUzLMRhhXFMwRcnxr5UeedGVSgcZZkzq3j1HHHKGV5fBp4mqw",
  "key42": "5VcEiS217zS1jWQMVu5AizfJLa7FUHiEmApQtzn3isvVY8QLf6ex53hmYwrbJE5LJTzizengXHTGDiSub3eBrdjD"
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
