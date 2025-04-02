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
    "4X5uZBiD1FZoKV6d7xkkANuCHuRC3co66WmJXbKduniBbCxNw1i6PkPiW4xxsRFmCTPzLrfAYJg6psWWEGiZkZLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZTXYv39823G95ALMyf7X4KgtvKq8Nth8u3Q5SbXzVS1WTatS7usYhzEi1ZWyk7qfH45DR75Dpd7Qsae3FynebzD",
  "key1": "2ECKvA7JFm3qFUipn22HXsfAhEMFgaMH3oaPRB29UUaXQY3Hpkh9ABcXdVeWaNeQ2et8KGbiL7RDiKfJJ8ThiR72",
  "key2": "3o6nhSaTKDF6cznP1ijbnBvehUy86VesyLTuEipYeEtFntfUd4K3bqGujQhBgXTary9ZfdpDkGJD12hkCssnYWdg",
  "key3": "hSgpjYpxWfHq2aJx2TpaU56DZDfiPnre8yNjFR2354bUDMoKUAZ2jU4vuxu8z1i7WuGPSD7FzHnJztDXA4L64eV",
  "key4": "GYRu85xmZuvB5JfxaAtAh3CmFDudBvEtzQYMxgvAYgytTWFW3M8pCBbMmDNE7RmLjt6daeH48goaBVHM7XBSaDo",
  "key5": "2dHB6g4iCTSAsmBjqCXxpaKgKccGNugar8M7R8ZQXn5BpSSiLarL1DSPkGqPo5PyKw5oZc3WMPDR1YfFPw6Qvzwq",
  "key6": "VH3vNcZwV8Rxy1itWK53TGxtYRffNBaRdHKKU3MSzxPg8xNuNni2phk9tC3cZYA9v7Wy2QLCAj7smEBm6fgLx73",
  "key7": "2Qrx4zqKqx3JnKiGAFpWpQrfhjhRHMaWg7HrbY8SmEyYa5eAjfAmSn975qvykqbxENcsKZ4NDLwy7UQNWF99Dsao",
  "key8": "32ucnxN55yszE95DSMnToBdr96MtaXmR1CnW8ypkMePHZfJezJF3g8cqxa9T1cVmefsgYKmw1nHaWkiDLzjRXd6W",
  "key9": "udf8mdEbBRD2rq95oYtMzGB98RqWUs8U7NxffTZ58b5ju2kW3HsUJqt9iR2hqXpDDoXTPmdjRSoJJPP3b6bqohQ",
  "key10": "2E16qGWHZG72FNudRkXGg5AQzbTBy2LCiGcJVarvgzYT6kFDiWYzPrQrimfu7TVy4Nd6jAmNrQUSJBfzoiPeptri",
  "key11": "3R1bqzVo35RkXvWTUkxYftBwhXrtJLyzUJWM2ivnz3rVcCqJD1jmeqgiMaSK2Sw6Kc9uHht3AJdXtD9V5oEGFSPc",
  "key12": "3XPY1XwnAajuQh6RGgfRRbSHyaKeYCx9pR3CPuNd1WCpPsPhpZU97QtbYHf45LHZQhALejtr1Hua73LSdDLCqyBh",
  "key13": "5stiKTNAa7A8V9GcuHHPzspjQDjVNYMbTfe4cdRHc1mjMHNHFZSqTg5aHWhXbH1hKvXd6L191VrK5tFeQaiZZiLh",
  "key14": "3sDmZR5iMoAzuyc9YhayC8qizRJiR2AJE9FzafdQ8zEKMo6hzWQKBBpoMChwFdJmtJRxa2eWZX1gnFydGAjJ1TuM",
  "key15": "2rc4qB47dBxjoqs1btFb5YBZETZj4vmSkiLN32XV3Ju3BTZvzF5NWTyKXrQjtSLSieVNBsQnCcZb53YpBxuFgFjS",
  "key16": "4BaiJZMWGyGyRkExP81HjFTeM29PF48iRV1urBRz5pSoFBfyx2zRSKcMY2GLN3z4Bq17Ez49kKsYk8JCSAyLVRML",
  "key17": "2AMzqfwPTXjc8enFrdBMAT6s8Q6usLCwooGjqAwhppcfSoJkFmdEBUJJ8PLM6hF9sUCqHwpBy8D5qB3rMBTE53aL",
  "key18": "zeqn8AqWHRP94ZwhJT7kaKmewVwUcAaywuKz2sqUTsAH23y8dhEKrrkFD6sRRZW5boRpTw2n2qMaBbT1hCmXK5k",
  "key19": "2DpA4FXJFxwR9r2xfU55eDmoS6mxuWA5g89TqRsejsb79G2EW1wssfhEJZTtDnn1oriboLARSMW4Vy4jhcuNAUxQ",
  "key20": "34sGRFGedTpvaHS2sfJFWrThgMBghzTBxw6d9Kmtd9vVtD631Ago4hcWi1FbsSt8tC8Sic3J61YPJg1CYAk7sVWU",
  "key21": "2XW1NPWcuoo9sjG6DAwHF53nMZPuDQpwdfw7GwrTUzEhus1ARinRnnhacqzSGgRSDmc6wxYnywtD3Psa1WgeW8By",
  "key22": "3sTFWJ77KpdDFoS73HhEH4V4u9unwG1m5fzM3qoEtgUPza2ew87Ru8dR3CjohFh2C2YZ6SEBDy2odVSccCJiBATS",
  "key23": "5pMB3LLvnAjfHSx2yDRYUE3np3RU6tY8ddwoUX9gitdzMo9UjwsoPQBdT6sgnPJZYzefmrWN6SY2XYjZv4bdb8bU",
  "key24": "452UWCYjh6w9N7YiTEqbQ6LYjAKf9TKHQ3epYg89CsJWD27DM2THYebk8868nVYyzQNfbgJBUD5PN9wCfcJpaHk",
  "key25": "55CgRmyx2aawkmkkY9DXthgHHWYWnidAtJRmkdr7w73wQDY3naNeKuH16C7zXzwPjyYrvvijJdZoSpd7t9YyMbbM",
  "key26": "2E5kdUHwUZgn1p8CBfKrf4V5kxqVjjQ9iPT3zsTnbcCGpe6hgyZFWB3xPhe4fJ9or1N8ZccTfnUv9YfKzfjW7mRu",
  "key27": "4EuwW6DqWhkL9hsKTV78CBvJXZBPsjNNwAx6hKdzvngTC8XFRvLxxH3gZuGg7cY9wZA8kWUaLZVf7UxPFv83u8Xb",
  "key28": "APhLBxpei72ZkC7aBJtDdDeoyjSnRAV8T6uACXDgq93xFaiPBa2ncJtEwS3WgnFYB3GbEz1V7uaD1nEdKNZShrQ",
  "key29": "67GYTnAu1Wto16MukQ1iHMUXENqjRqzBxqrnErXLap8FhUAA9mnzLEeqSZuxd2wfTKW66AkjHNJ5VdYQE9XHJo8a",
  "key30": "45iBX3QQCvaunwb3fBcwGpELJs9US22X4HRUkoE8vmuGiioRpB9sTDT9JCt5gqeipCzrR44sxEzj6vKWjqvnFu1r",
  "key31": "2KHxJ3rkpBJNEqnrubbus9Wk9grA9d33To45iCfnEyLNLxeGUiPHBXw9PVDvugMJfMNd51BGk4JLDiDdhf7Rn2Hx",
  "key32": "65SYBcbqUC1YCNLvPUVa5W7yi7HM5T7ofWrTT1r3wtDXCwE9P63dBWcPGh4FYcdwAjtSHGNid7bdNChjUHpiEtYt",
  "key33": "44xxaRESwfahMAi8iwtNCR98FUmSxVAJ6PwQKK3ZDWnaGcDaeWJFwdVSTKyLhZpumnyTz6pJ4VgEyVhox1P7o25A",
  "key34": "5RNCgCAUpCsgTud5kxkNDFW7ikKgfepNkG7ANwnDnV7xQUfW4fkzkRWbZs9CamHmPqzm7PkoSEJ8MBpBpQsieask",
  "key35": "4VeNAUhbTNT9CzDZFPfuutpHY61PtvvyjfjqPw16Q14P2or7Kg4QMRQh9tkG7Rc1WgMjyn7Wik5UfUqcJ33gUQxV",
  "key36": "5pKcyHTiktVACs9t8Le9exvFnrjgnXzGvbmH1wAGtRZnx2GcL2ugpXXxpNY58GkaZnsgrLpKjB553ZSiWEcdpzCm",
  "key37": "TJ3CVv4EA8ajZBQtJtsgJRn8SpaA3VSeRxzWcNHNYurLq6kkmatb2HokcS5yG5FkJFkJP3Sg6rxCZVHbYLrGBgQ",
  "key38": "vdSCJJbatNDagVjHXEviZS8ytGBvuXy6hFSx1m1zyaSE1tvHupfG8LKYY7T1NuudyN92TeTZwMRBGPTuTdKUqWb",
  "key39": "5Au9hE5JqXuQKe8YxKzKWtBZKTyHop5Tr5Z6vK6B2X6Dpj8ucDDpnnonAhMXAYuUEv2JZpKgcy8WZEo7pqsgritr",
  "key40": "mXz4wvu5Ky9tWKx9RNejihkTgjAnSsCquTyzozrpirugM337d6hxSxxCjs1wmBhZnMPGX6rQPHJT16abJghSHG9",
  "key41": "geCd9UrFJndAZpNCpsKSzJnDCogu8du8BGH2T8LvheLMfdeQhDg2JzMKiV3ep88QDZesAKxetfSqndaX8xEnT2b",
  "key42": "5HbRhAN6599dtCYjiwUWFQeQuu8DmUctBm1S9W4CV8dFueRFU8i4uv23AHnTALQxTwaaf5FNg1ZSBSLRmi8sbRDx"
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
