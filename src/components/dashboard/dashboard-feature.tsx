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
    "23VaMBG8tgZs3d1Lx75ZZpeWZzGVgeUXJN9tJ1576ifiV7pQ7iusjXuuH34T5rGaZ72h9Nyt3uiyRYxENa4Ea9zS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CQDKs4ZwMwcEP96S8ZVXx6Gno592sijdFfz3R7BW3wWZYEMNrW6Hnd2gpyFTaenrzpdEzQrJu5RkacmggFxQaDN",
  "key1": "2qwYQYVnXD1d2Spi3jTkp2AjzLENWLBGdAENuMvgqr3BjX9P4oewVQvp7TqoMHtwCMpr1yiJL5zSM3wSQ2EZiKDV",
  "key2": "35ZXeWeZuSG3GHJpntst3YoBJjiSd2ePS2KcepcfJFU7ei3imNApNHMzkQmP2znCq8LEWYrXyikppdHH62ctYDWA",
  "key3": "4sx2F9j5oiEftFNsg7fDkKtkAbWxbMmAx3i8y4fZBSWKsg8MRHYVb17kdVDkDKkpp4s1LPwg4MY8yLvRxFgZNWwP",
  "key4": "5Hx1c6J5WCqpFD5gnJQurYCDJu1CqpnFBmDEuBFGWbypDcAzuAPTAFYMLmRGY1vhFj76SRHdRX7PUoBsHA5nDUyo",
  "key5": "66xuRT5XHq5ULNUQjT1955hocFL4XZLY8sParhYR3vjF8TWEH5MzgdW4aGSD6j5BiUPFXaffDZHZJKQfpNGHUF7B",
  "key6": "3TVJkiLQJLtn7LFZtF6iui4Gy16atKkK6qTppWBrk7b8rGCT9uMut4tGUYCUaY4LpetDr7mTHMT4G7F24oFSndzp",
  "key7": "5WYnuWtbKSTG2919ATbFTPvtgDZLaFnCh5wvGoPGTub2m4bMmKhHStYhzQfMU7dbPrwiBrREkYUTYboBa6XN1w2y",
  "key8": "5Bj9zBjkvvMQePkzXN1CemchUmahFrH7JwroUPrhQF4VZuVEqzGa2L7MqEfuhdjMt8c7rC2yXkqenri3RAhRCSML",
  "key9": "5dNWVagvnNsbjRCzHyafSZL2BFPtWC3eg8xMrMuAGShVTqX8okaE3yy4HYq82QCuN5dxtd5etxaQdg9tbE4dLhW6",
  "key10": "3cjWbBQsmxYm3NdynfXLY3NRx4i9LsoWE1y3qCjzuvYuNE9fxMSsKCLDuSWeDLwUMS4TpTnDPFveR7we3BeDvcWq",
  "key11": "4L6CieAdfWSKB8Wvd6pDJYCQo52tFYDxHipvKXM7pA1Yg25NPK3BSGHfUwPARK7DUChk6eAdJ1GWfGZn5jAduaVM",
  "key12": "4z2uJ2tSwoZL8jubpTYF4fnPJybaURFfmtnB6djJYz6mY5mNraKUNsCzLjAADYKfHBvCTMx2oqUC8fi35mR5uNcS",
  "key13": "57SgZgysfAUaT64q6NtKMFwpfbdCAeNJjWt4YJ9LocKWANQaWYMjjLoYhAA3yboZ2k3hLg8DkEXDdbdF4pvfkN6r",
  "key14": "5V7cSZxa5PZojegcPr2kT5qPAN9vb4y1D7sENT13UZhyMPNXqSevi8tEDgyLgvTqMDnWM7DT5CRPwvFyc1FBTDPj",
  "key15": "T9CRmaP7WHNdeec3N721hpf8ub8DwgkSZQ5Qc5kEMLZHgysUTrau7LH96Lg4NAum1ugzabUYghoXSA3E3jJWNjQ",
  "key16": "5EThrDLsxKeS9NUv6jbdTfT3gevmhKBGFQsapgyZpr1svJL8hAQiwMkShRXKpc7qdzTyMNJicuHwYMYPrnP8157K",
  "key17": "4r7mGygtC3Gz1161f5JacRGsXiH6n9CCaZMfMLKa3UKnSrPN4S4ayjd75jJRhecBdsF5ieAdmnkvAWCP8vMGsNgq",
  "key18": "5PyBPCAm99oxQ9V2WKdi4RxaF2vKDGuLH6USovAJTJ7vPHfJhqfk3sgqhYfe7b1pjUiTofCWsteNtaYe9v2StrTr",
  "key19": "bsSKEYXjih7RM2UYaummSVcPnkU4wuMUFX2QQnoNaeovuCxSJM7LcrabJqPnnJM9UkJKZD5Wb5HZ7Mv2cVfV4yt",
  "key20": "5QhpWnjacvAzXf6N6hibFy6vWnmS4GvL6XsAUd1eeCFbFeXfSop5jjE441jxgeE1Xt8KT7fiuDahnVZ6z4qFQ5z5",
  "key21": "21qKH4Sq49L1p9HsyT6B5z1PwMfY43HadZMDqf6F7kXrwWe4iChPp8z9VqtRvuvoKsA9iPz2iy65Y6QLjAZhD9Wi",
  "key22": "3GhGH7TLYKDfEWGSwwKiTUwcfmp9tmMuYWgKggdXmDxXTdQpUgrQaudZBVVo6kzD82PJtfJ6wnuTBkh6VwH5r9am",
  "key23": "4bRrGfTYJxJRTSCcUv6bV3wysyJ6dziv2Vbtzs3AVvDt2E8BqYYMnCKBL6FwvCFuksqHvutgJrA8a2c8cvsJKJdG",
  "key24": "6osZzSdBLDhFuKwmHovWGso8pY1vt47L8XByoUddJgu66p4jzkaRwgiis7Yz5JUEzVrWq7XBFxYH33TyrE7e7Bz",
  "key25": "4xt3tBAuuaJJ8rnaFmyZ37icJ9Ke3ixUkuT9aPu1Pj6sG1msGE8cB7eKcKHxVNmigQDVKX65JiZsS7huHzWnFSoX",
  "key26": "5Hp3PFS3EEaY7EUqqEVVntFjMDZEjxMnLYAx5K1dYgaBgCsBQPhNw2FmvDaPSLvrgHkeMGqbkvgfDws9Yth6AcXy",
  "key27": "4uo2Zj1s9gyCgpXD6YRAot1QRSvkJSBAW1Z6vBBkTggMW8SnTX3ucRfkfaC2U2U4oFvnjg7fr9awoQxhVJt3y1Ay",
  "key28": "3VCeu4UGzupx6m16LpNuEXgzrN62PLY3fpCBu8F4pcKFzmc7w4bMaEBA3z4VbT1eoivEfVSiHZzWRR76CzTqJxBN",
  "key29": "21wvbhJeYcUWc51zM1YpZ6aoU7cTbCmjEYURCnC3HF25BBCFaBvgo7PECkiaYNh8bHLuP5DowoCStSjL5qDc8UJR",
  "key30": "2GVCDKCcpTLEmuPDcGXUfCt3GsU2L9GyQfnnAGr1CSbR7TWsD5ZQFuzxhstPgJHsVYVaHzY8Ca4UDGxkFEg9nZZu",
  "key31": "3cdvFsU7rGmekPJsmHMfYTHhRdbivaR6DjJX6hMNTzwZq9d5aPW8Si887xeLy3VSxJtSdSJxfUQwQS9fg4vzsJxn",
  "key32": "2UcAW241mXvZnoeCxDjLrrzwrs8veqzCdqKdkryC3ZEATsyzVcwKDqHLNdxPpL1g9qKPmuWEsNRQAA6L4JwbNRkz",
  "key33": "2dL1pMC6zMxSC94nX5hKt9cesyuGYzp3orQhBxCrczszak5BSwhj7oSTDKHcy463Mx6YAZb3M4W9bbfED2y2Rz2z",
  "key34": "5aghEMxdQQm4FwRWi1EJo4LT1n9bPg4Kt8r8bVtmGpDVJ18oxz69nFoVzFSGkTThLFXNjcvmYESuCkhPWwP3bgz6",
  "key35": "5LrozE8iNUuFP4EUJYE9WtrVxSUqEDrp2u3AF82Lsxw3ceG6oW33FT38Gkp4ZbJsVab2KP2Pc8wqMqPz7Uybwh2m",
  "key36": "38jRPaa1CXMFMa8RN6u2iPQK1kEJ33Rjed7hxP4wPTvJnLnqyeg5eg8eWhmk3eei3HBUhkPfnVMT1raM2uNHUQmG",
  "key37": "322bomiX7GBx9tWqYdWEj3PDFsqt356ERYBkvgVFvQays8qKdHrDXq8iLB5BAP7SMDfPGojx9u7SZR9PigTxs5WP",
  "key38": "5rowZhLWxZqkcSkZksP9dBN1Gcd677LoanFtZarb25GyQCHtrDeFNLkqX6QZKCT8av8JgTdcSyGVHTrZYCbJKb6s",
  "key39": "4Ru3Kg7BjgUJCV6drNGQg15SZxDeSWKCpkVPg5dvSjqrb2MXP9e9JfNeny1z77SRdiRzgSDpc8sJceNDFBGdsHG7",
  "key40": "4wor8xRRDfsNH59FCWYBJNkN23hvFvqGHNJeqyGU1mYm8QDeWCCAuooHcKumhfd751jPGttZ7fcpehM6k2iF4stp",
  "key41": "3kxAeVoWo4k1RxA2xxz4oCCWhwa9TK5qn96UA5yTz2P15s4MvGJ2qybtazfjgWWrWoeEJ9t3mDdbhvVmTA4FG7AD",
  "key42": "CeZPmqKBgzmidb29FFvRfeVQHhb4HmCVJ67TNLNyjN8PnqWmZR6DGDvxLkiEs2JdgRutiaatqoeZFTa3MJt1LPL",
  "key43": "4jLH4iiqP2M3Dtqpa1gWvVR1hekVVSfeJVtPL4bnsT7QVX9eHUoWpwTSGXCrUFDJSLLi8z8t6npB5aZxMf78Qa4n"
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
