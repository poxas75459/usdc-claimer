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
    "5SsDgzEZ1otmapuTFGQPt8nfzMT3q6Rm6NbUKRabct529YSF7FWT5xeNFBYTEi7nawz2roTvB6iwJ2ZWtveA5M3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S7Ri3K1XedEogpY9NLzjbQwNcfVjHqCTjmpPxXjwP7JNSunybcHPHB7dyYTkXyPSGQit49oDCR63Jv8eZEYGEJ6",
  "key1": "2TSuvmku6CFQC1Jf2PVZ35RYzQvewpusyqBF2yXVPjyVazkoTxVinjx5q2pNeXwT7x3ioDGgoRSj9Q6g3EUg2yeW",
  "key2": "dvdvrsdzZ57pje9YfMhtR3WEuP1aG7gqPwMR6vW6vSDsbGTdtrkjJihLvUHfm1mZPvtoCy8htxDqhcTdzLrdUuq",
  "key3": "33D6GZafKipwBjwk93Pe3cxNXYEEyKt4g9XtUtJ4i9AXmteJDeu43okt6aWrhWaZYYJpTWcESozmMJzf13NfKQRq",
  "key4": "643KKECozb4gFGS28i4a8Msw5jqr9ybAyW2tdrajqjYKeo8psmZzkZzvPd6NbAw5rPSXwMvASDbwjhnJK6z5pA7Y",
  "key5": "2jwZMMXi1HEXcHDTmUgLcsKd9K2XgcRivkPQjQshcwGLB2UJCpbet5ef7ttQmfjudZLxsPohYwoQvohexpTRSv13",
  "key6": "ybjeUaHPAgHiGJQykfK1EvbJEc5RkEpB57VQLipmKczmqjjX4Z5C3tdMTJvN2XiauXEXvbLoHfq8LGqh9iJSesQ",
  "key7": "2fLXavtUMzmR8M7vg9B6buG38fX9TLYASTnsgCB6Don5vUqKwPFbz1NZtKY1zSc2ZgqUiz4ocDKbtDvtq3JJpU94",
  "key8": "2nZppLqb2UDF1mMz8LwDXVtMEWCMNkWjMQfea3vZJKaPvby186v2F5rAA9huePr4QTgw6oZQzopHX6Qcqsfxewpy",
  "key9": "2KUva2mD9XZxydVrvqQ4wy5bYmHeXiXWXcrQ3FDw7UA8zFKrLh5enGvi8GehJEQsTnrbyW4xraFqfPvYHissUJP9",
  "key10": "5ni4zkgrGhyRn8cbbDMp39a1m47CUJtQX5zSj27tpMMQdXRf3gbbtnoRbPEEZQJ58zgG4jesWkTKteSYAzWxQApn",
  "key11": "3nfsrdpbSo98C8HnfsuJ5nW2T8ugHXERDS9ZmvwJ9cYNGziXrX5L5FtgQww8Xk6gb6XbR6nSJweDFJ6AX9dtvHhA",
  "key12": "5g5TgRE3SEEj4JcSpA58LF4Bo2wwWT5YyRQWvF32kVPi6BrHDdbUzN196VpwNsyLVsvUmLhjcGZji3UgkRbWh9L4",
  "key13": "2nbiLytSaX1e3Ak2sRGykCxBTHPkzsFDxrKF53N4u4aik2y5DzR1WZsAjYEnXLynyua7URgiXVJ7982vwfDNxupa",
  "key14": "4HTZwvNqYKsXeFpe4fzXiLhxriuDhi6P4bTnzhp7xg96bXUfDoVmuZCEXYdtZKo9DvCpevj3EZkSVzQYLNR6FdTo",
  "key15": "29tRRQWm6A5GGFXfz3dLdu8YB9zZzoNmiucp4QFD53NdycLvEz4DJgJxoKQCxGhrFW7Tq8V7ULUogKVjTYk1UdJn",
  "key16": "3uLRV3hkHqhYNpdi3WkQ7FwPKA44kxSaCYeU6BmwdZ88aCUG5RTrtqHfc1WRVhnLMuGweCKyZASfS68z4MrCshfu",
  "key17": "bjJPteFvCxfBVmXUwQZ97yJzfGTqwV8e2ufUdCZjQWN5pwaVWL8RNMEVuuDv4JXbPDNgDnT7WoP4DeHhb6Siyeq",
  "key18": "629yMu7vtd7mw8XFJyPr9hc2KtkrhP9H1p7dRC6gfqMZsMkEC3vSLQ9JxsuB4NuEyzax5YK72ztHZWvqstC1Uznq",
  "key19": "23iKGzDUNQsCiKCrfi1znHWRnLUssVTi2JW7jLYMHED8FM873hN9andAkEWjJucAzJq5Thn6zehtDVS2fitCyiYC",
  "key20": "31ujzmc38BJpjbjE6hFdrHR7d5RKnTRs9nWY7M7Qq3dj7uahonypCxBBpm4Di4upKpphQ3wX2uWNtDnYuCVmjfjW",
  "key21": "3CWndXWmVpumbMCgPpL8CrEahuVpkzjTjnxMRer6PGijoxmjVXJTRQAhYmC5einkkQFEcAXHUANoDcFbikWx9Cfi",
  "key22": "YTtTZ33cb5syPvLd1FAVhAgGTMYwHBz5oTHmiZGsy4ArmG99H4br8nhx2jbM7R1sqXDRAyX69NuqgjfXYZytyYM",
  "key23": "jDJRnjmTNBqdpxggTGjL62MCTRKicU8yZLF2Bbwgc5KYfF3C6xDhkwF9iKDRxDEWhnvKvqqtGvrWKaWNuXssPeY",
  "key24": "3HNYXybs4btXT5mCfZG6F5GkbuWgmzDzTDuXyzegF7gzMhjbqovDkyXkoi9JREtcZJQqMQigveY6zyYSvg52nByL"
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
