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
    "4TdZY9xyv1L9nDbZnRtz7vBjmjiUhpjb3xNaeSLHepdu44JamTYQRGJaCeFwBMe8skddaLN3zQXijqqX5qqQ49pT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PWDpVRuBb3sGeYre6rtwmzU87NtmXPGjJ9ETePnKRzTbdgjkKSnYVX2MyD9sv3ShFUDjS1rsJBz4cncGEr38pxG",
  "key1": "uitBgN9hUdcAj7psmGmdaq3NvydkedxrjrcjFsGf72eLhhVFZ3YrZo4Tj2emtyVqUnUG2JafA6H8mjQidME3ZhJ",
  "key2": "2gUG8ZWhptdYQ1wDDMFDtdjb25RuxY7skA3M8Lumjxi4w78CdhSLYXGhNFauQLKULWTY1Dt3kD7bKR21xgGE2De1",
  "key3": "4UGmiWDWF1dSAwx9h6qm86dbaTruyFnF6WNB2WuNjUUZykM1adGzrXzgLpcK1SsGKygy28pMcP5NCgNR6Hq5TCdc",
  "key4": "3w1D991Cg27RHaVWyTsSo6WapspQeJVriNu844aSFbE3zX1C15UUsu7jW6pE1DtbX3wGZUWT4YegH7rUSMRW49XQ",
  "key5": "2HaEFgqHE3hQadBwAAbckVJzmJhTm8Xotuc6vESMGBda27E5oeLVNwDk2XaRxzCpaTAs41i1hdBL6EhyN37eQzBP",
  "key6": "5usWNdK4pNd3ZB2ATmJqjQm1omhpiBksU7Y1dYGkYD5B6TDMremEEZb1xUyGntFbUHXVhDoHK7zXSE1QjFPNS9Bb",
  "key7": "2pF63UPQ2oThtKjDKx5koXWvGnSS4uywsd3c6nrsLEFe4NRZNJyGKquFFmdykf5LyA3hXsHnEVZ9ezf1Fyc749sB",
  "key8": "dBBDKaVufCUV1Lt8V61SzWfNvTUNXhELztgXTDHgUKiUxipSHf3Gpg7iTChReK8iJWBDNV9RxMXpXKX3cJRubK7",
  "key9": "28WnXwoi389CahTwqiFvNScJmCMVERFdhEUnpvKHyLgXokwQgu5hf9oHp8kcMNewRNo91CNjToWgCLuAyDNp4WjG",
  "key10": "5eXrCysDkpsBP3Emf9s2JCiVMAMwj4mftC8D7r1St9GhMx9Hi2nao8NKaatxJaokJUqoTb9aay8sjUf6ERUVHuCY",
  "key11": "3UFGxxNqn9TnF34ytMJKj3W2FK2grvdaND7sHxeF4JPDgCBPUSZscMNkCuAUshwUxj3NwSMibr75irSVjpNsSSTL",
  "key12": "5jaMEG2A9mmsLFaKkzHdzxYfQVC8HVG4TFZgQPyqyPqDUSJJjt5WsnKA3JucgGctZ3ri8czwv7EBVq9zf967KcwT",
  "key13": "42Dao7AwLDkimF4YVxEwJyx4Vgjh1fQx5H9WinrJuCoyJ7ykwtadtvs9Lu2KBgQUJmKV8suit3GRCh1EYUcexQvf",
  "key14": "38ds9Rm7MDiUUuANDohht5Tf8sFBD8Pd1hCHEsery9AhhTutz7VrWLybyZoU8K53SPX38MinL2sPDe3UVJS3WsGt",
  "key15": "uRWJLwkDcVDFWLh7QaRauPCDg2mp36NBrBcQav3ZsGCNtY9uGnNP6vzA4uFB82n481HQyxfS9PcZax2339hmbbC",
  "key16": "3z3pfFmf1pHsSk1ws9iii8sKNXW1uxN8qbphPqkkYddBs4BvcvyxRCw3AebppGMkaX7FSztAzm4sKanPZqHPA9ur",
  "key17": "iMtfuR9xK1gnu5QKaLT5F5vBvm6XEFV4mKDF2vgTdmUX8xdVvfYJWyD816qYsPWTQoCzREKoRpNvqLfhuGtFbJJ",
  "key18": "5DRy7mKfQJ7R41AQUFmd4uSVBo5nFNtuDPP9suUuTmXmM7iM9BPJCJciTfjacqF6sWcZwoqFsEtm8Fdiugwy7nyG",
  "key19": "4gBrLC5gVc6NResas9113T9auWoyq6qYv5u6SN6wmNVtBwT819aUGbx5fg2AmLKf3aEfDAeEkpwBMvbgxm4TdVjx",
  "key20": "23PDnP3VVpz7RXx1JdeSg1vwgY5haHZnBuGQeULTXCxHW1eN4TaAB4JoiGJu2MqQGx7eve5xFdot9rWs8oSwgufc",
  "key21": "3gabs7BQkQ5K8DRevL1r1FqQtMepjDehQ9bdW3Go2QHdpatWAkK2dhSMof47SVbmQGWsKygAKSRTDkd4B1vKSaJW",
  "key22": "2voyPSVtfSCpmZgrYV4GDLeYypZs9TbxcKW8Pn6KdzqCXySHxyDKYYP98tfYxkyLtDc6BgbCr4jwkEVZLw4v2h18",
  "key23": "5gsdJ9tCJaZuUQw7oUbgHhkBPTRk5NAN1vyvY2VakFPUgGupBb6iQE7egp82KPNYCXJUS5RJhrqdMkNdu7HqEKZz",
  "key24": "2C2jrH9siENQBrJeoc5pFHtG1zUbzJsyXmUyxZ6Xk7uuWHSwv1z4WT4z4bQHcJmGiEWkE4pVn7bqnpYEuLF3Kau",
  "key25": "52CRjcb3PMKR4zBprGVow1NGVyMUXUWNk9gG9MepBgnAJRiiicMxZkWMYQAt5qoTbvQ75P9WpjLyY5J2mBgPUq1F",
  "key26": "4gtSNjG9pysKz88BLkdrndE7QTKXg1cytDmYCzYQmcJypukjfzyRhrhsUuyyVpB3ChzDZ89NGEXmAjSxymS4waNt",
  "key27": "2vXt7mBeZr3bnZ2BuooyAVt3KMHEaqohHje8p97VZ2yY9awUqbx7q67zo8iPK3PKNrWTkSpEqZfWY5aN6EQjBg17",
  "key28": "3KcFQefETMxfPyLAkuXFMp2BoynRCB5ySeToB3jdTNmVX2XWVsHaib4UM8a6oekQKyg8AAmEhux4xYEMfHZSvYs",
  "key29": "4i1ruQbiWWFH6JdDoSt1fNqEiLzoinvurf65tUHY4FEAbm7CHmF2Ko3XCMx5pB8imTirjnPtGLoG5kCnTCn2WXZF",
  "key30": "q7JH9fMFdBpCmP1B2zfm7Gow95S4XeRjbK8LFz7wri2Tzv5a6o4oVcNc5vu9NYiyHwAmi2acTXV2nnCEFHi6wKz",
  "key31": "655Cmk8UXqidneabYYvvmtoRsU65q1U3ZG2qFzbFMUHDmt6TWDxN2XAZYuPy8MY3XfEiG2bjAANSuT9JT3p4SH2T",
  "key32": "23EgbLZxSWtnFuAnmFkgbty73bVTdBhJPUZjdZF1KZtP6SXwGrVYiYcr7Jk8HwnC3H34qHyVNRhGs9wKpSFUWrWd",
  "key33": "38wB9xy7rZULX44MYSGNR7YqCJ3NejdDXT8cY4kTCY3sFGkDSGGHzm75ZPZNcHtsGge5xQzeXTEws2FTjqSLrstT",
  "key34": "4hLHbfMK7Sn8eSTrU8KgjYj7UNdJUyjAnuk3mzWiZMyYEsifKkV4gzSSFWBxv9mhjB2BUwETTRFwpfV7NKUzAV7d",
  "key35": "2T3QUdpb3SSgSe5a9Cr7K55EBw6tZcU3MvQwPvTw8bq8kWrNbb7qTWmhbFjHFx5RAs9UrgRBoLJpSXrzyKcvFDS9",
  "key36": "2sNito9X4wHeBMoNfMLvUeihXeiFsrJoKUsdgLAvCiNKxx8pTf744jeBwoDcgeAkiDupha4rB2PY7CBDfZti8LMz",
  "key37": "678MJMhBY768MKPKQAmt23wMsE8jvjvyqzuJ17bp6yAdnaGxCe2P4EWWBF29FaU4hfXFU3xBp9LrcPToZreEHUP1",
  "key38": "5VKxRP8GsrdQxe4EaRAoE6JaLAXxGvt1R2GSEgbc52p4wFFNqfARGvUFwQmzyhibkmoJfT1sh7opMnUUbfUTZKkv",
  "key39": "2BDDyqqpJGG2WEvg6s8buxc1aZEmKwhLwdDryA8XseLNaYQH8sQA9mErpFX691Wen5WQSbuNTZNvgiX4rk4aaTCk",
  "key40": "4BmWGXf2r2zxnAsVgb324aLEZYgecm4FZycj1Dm2JffG79QNpGfcyQVNKwam7bnDfNGfDfyzhE1MNrtv8DTC4XgR",
  "key41": "GY3846fN9V9F785KcLaiBSGZE9sVdHT7QgQLM4wS68Ukhb4djY7WGqdz6hBqqNLRcbWW6uPz8aGRm1EieV9KVBX",
  "key42": "4ZJ2dMYrKjWwDRUUR73GhaNqQT2fejNX9U8wzH9U2fPvxVcyLhAaMFM7ywfmFC19AjsWYxtpak8axQyttnrqwkxe",
  "key43": "43CRLoYma7bFEjfiRrhpQA3SFByxR3UA4ikv58bPPgjbffYrtqVL97geFpKPYnHNLVoRF8d7B7n22yWWjvy47Euq"
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
