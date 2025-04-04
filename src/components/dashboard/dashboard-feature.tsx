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
    "vwbkqXCBdFc1T9hpzJaL8sFr9yFL3fgV1Cuagbori5LtTMFQKDwPaxciaeqmvnxD9HnWwvut2ZmjmghVeVkQZg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wViyDYNqzhajoJMeiiqzQVYRhuGy89oyDhERUbVNrGUPtoubX8wsrpCirwwK8aqUEmRjhtT9FqsozV5Y8UKTBKi",
  "key1": "WLzJJE3RtyXvvZDiXhnDZdm29uhAKLEicnN88aZ6NsvbWgYQxLdfaCynigf1zbw88HzaGupJhmv6dsd515k4Q6t",
  "key2": "2oiv3Gm9dUPrRquGBrGiCSSehcu7K5qLCK3hpSSR39h5nWaDh9dRJv9P79AdDshYJahhGyn3htr7ob1Qpj1vkmW4",
  "key3": "WFH4DqmirPbtiHBF5XFa1BbXjVGL4ax2ETWmSWrgWmTMGHw53r9kmv2KmNoxvTZxsfeSVmwN6yZvUh4VG8cqq8m",
  "key4": "4avrQ3C4tCjQwSqTwUc89t6RomdF22rF9z4ym1odE7U756ySFjqgFZmCDCrowny73ZdP3w2r5KDKZVsxP9WbYrG9",
  "key5": "4vW6Vapkpfgn3wH3ctRCuppiAmxN1RJvkUfmKv2CngTZpHkfqU5opzEmYbtUYemn317nbe2CGHkTDgnfQzijwnvv",
  "key6": "5BRCPiUafsNM9jsu6oA2VaB4nWPrcSeyMU3Lfc4oJHQRaw29a7ex5RcMwsGmDLHXycWpidiT791gV27oTytSoVsd",
  "key7": "2bBGqZk77UGUCZFiFYSU4596YEGmtvbG9cFDeNeJwovVhuRvPweSB7shGvbhCferjf75iDk2HunxM1LuLQw8KDbU",
  "key8": "2PC5aHYCj7PbbqY9aQf7KggkQjqLP7dN8L1VYbmqJokCdnEVSn4A6q5WLDou6dC4ox345kjxjZ7r5WyqcZ3pT8Bk",
  "key9": "4bSNw2VJAjJg8WCZFhYEYqbXHi7u1q6bWpHGYasHVai9WnqfSePt6ajzzvuK8MaqERRKx4JPurmXvvtwbf8Y2Lj8",
  "key10": "2jPMZo5D7K4AGAV91AwVgLPajdkboZhBhrPuw8WnoavJjGnthL948twa4vtAzf1NroYLVcqT8bM4kbfsQvZceEZF",
  "key11": "4D4tb2Fikyta2216nNXvRka5q3bs777UUbBKNMcig3awmKdSF13xfQnCZdPnZXXrHnWbTTsBe5R9bpzx6oJRuQEn",
  "key12": "hg41TKuzCbhVkoKUpwgqoxqEpaunu7i4uDgH2KZvWFZaQj69ephCq2LXZjJsQnhP924WnMgtdXu4UkCYoZr6M73",
  "key13": "2hALjw1nF11kaz9FXLBT6W1NpA891vnf2E5zQDSDdYsLJjXv3wHeQaBS8gPn1MEp46nR1j9uA5bLtb2TLPzL9Rw4",
  "key14": "4dTRTHP3Tz6uck1gCSqLZdJXwAwcm9ip75CHSMGg4w3a6fkFDgkcBuSPQ2Zax2dvf82f9oQ5i9qBkD69DMRJ3bXf",
  "key15": "3ccafiurpghja2VGbrSRx7MBbGaFuXd7V5cqjrva9t2pSE4nULs7EKR46DFJw2iiFp1S9zEZ7TmwESEKpa27uUEz",
  "key16": "5VQG659vrAYQbSgyrMHEc9vza6SJtA18CVDUb3zQvCkL6ehwmkYAcYuFQAdKp1a3vszpAokQu49fyA8u9kq7msXF",
  "key17": "2aWtYhC835a4DyUvzesovXL4dkdmVfxugBcAeDoxRz9bNdG7jigUoaE1MJVGLDUnLXTyzE9yQnwycWNaLAXJuVfD",
  "key18": "5bjKEsPsCJfcV7ydxiZZgytakJr5JGjYZCWMP1XAijGneA4cd79Bp2ibjgDB1fEX3FQcjybD7yVg61YBGhq6yFiZ",
  "key19": "4iNuPexNzg9MjBXTaFb4RsD7EyPAhpgnEYiyzZzguBc76dSxGvxrQ1HWua1YgtXAKvmhvPw1nT2hef6shFEK8Tpf",
  "key20": "4eRFRQcjPMbdw5QdLFsa2U2Q1hBkFWehVjMcxFQSLjK75SSnXjHynK3TKNzawfrvPUHRdRXN66Eut4f1CXug14AC",
  "key21": "Kdb4KmjLerF4xhwSz9zcfmZyz2rcTcpvTgmja6SvMzDVWAy1nLy83LSQYTEpHQSR7XJxY4zy5PdWK76znE4Z9zV",
  "key22": "59jE3j4vggbsiLW2Kwn3JA1ZC6GfcBWmYzt5D3Y51s8Up9AfC3YxVBYDQERm97K9ccrXtZxUY6MvXMnd9zpfHqeQ",
  "key23": "4DfsCAvm3vx6DZC1CaVbsukPzyE7999DiqsbgxwUUG1Zz8wh1D2psAkyb9u7Mgw1DdUo6MAdtAnyrUx1XVxK83ej",
  "key24": "619Q9kpo38vrMMbUKTyptg8bEy4QKfm4BLyS6246qH7xypG73VstTfcKvhFXu9b14berHdAtaKNJHh1qtjvTZQsT",
  "key25": "2Ak2PkkMeyCkAzgq51f6suPHUJ5jXJusgeVjzCHxkofuLME6SihyvwJfA17pMTgSBxgWcFrNwEYRwnJisFywpEmT",
  "key26": "WZuVbid3GHa3j93x1PEdiwfibDPguU9Z98hSCfWMfdbsxfMjspGRf7ZgHeahd4ZsohEjf8W2od7bcn1fDpPceA5"
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
