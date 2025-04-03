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
    "cvWPpn4fJWWFpe7JxoBKnRbFxTQJCaMMyX6sqYwKesvxiRtX3mE9DAMAqMC2HeRFC5TGzVWj12YMo84Kshmy9x4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mGnQFYF16Vcs7S1Fgs1G1iakD6yqdYBv6WsqFS7c3hqSCyHDpVQS7U7AHtWRunNPrdcKWHdRpGGLU7m7HTCWUh",
  "key1": "3jA5oModcmNPCVez1PfDtYtWzqPcsH9SKD96QoWeXptzEczk2tXFeLiowAYe92iqHtSPGrrsR9YKodgzTJJNfQNB",
  "key2": "3kDXQRdyafCgghWBmGVKqXbHmYyrEcUvq3qqKtBgAFNKtULR1EsVTBTfB5cTxcqBdis4rymQZ4ofxMvtFshaWAy3",
  "key3": "qPE7YZ3TaYxoArJE9EhmrAyZckHmK1YGydGLoL7a92ZrPyyoHoaMXRRF9m8gEtrpC65FdXwL3w8eFU9wfC4dL9w",
  "key4": "5UwSBpMxWzhSyEHems9ZqjZATimHBpwoT2TV47MhVYQVBAq92S39Xrag9XJEgj28EETQb9EbNGuAgaBCYa6QMBVJ",
  "key5": "64Yn3VDqoK9eKzBfr1kEm7JDVWr8ehkjjC4JSoRAvLT697ywofTZzWFuKcvDiGfryukiScq4S8HgdRuzrTubGnPH",
  "key6": "2WxuzWV5ypWjD9aHDeJxtPv3gdZwn5usessxfcrRzQtxtGDR5co3HBMnREjmo3QUzfCrovdykgacRax34mcfMCXf",
  "key7": "bMQjayPrRkMbD9DebHY8Ynz6W8jYqrbt19aASeWnrHM7P61y5GQaV8J7YPT5pAVZQD5F5uGdtKm2sNKTLjNkS62",
  "key8": "36ewnbB2rik2Qzdfk1yq3pyGpMjW9YEhTtUmreFuymkL1BrkSJiRuoXp7dCRE1zHehXScrn5FWeegaB3E5Ws7Twa",
  "key9": "3V5vMq1gjWDtNc4Q8VbandgEXfDnvkFYxrHbMcFEzCLdTyXftpcy2o5yCu5qBKdBGjSkHTSyq1JL7fBe1R9n2u4D",
  "key10": "3zgrRKbwto9ZS7NizXgCQzayYsNFCAzGZFUeQoS7Fg2eHEBRPoHTAUSMxBPMKEgAScPVo5pcQLME1K12X3Q19iDo",
  "key11": "2eKGyfG684ZQm1C1gj2QtUrrD6TymoQYDJYE8a15PCUzLuyZKsZqFWBxvvspPMXHWRocDa5uGWrg2DjqJ9Bsxvf3",
  "key12": "5pqm9Ej4Z2H1Gn1iJYHf5SMVphroppcbZgp5h5w8gbk2FBxqxcz7V4mye98g8wgTvio96ywEQVopYyQ7WwUdytDH",
  "key13": "3tKc2NAxhojwH86EuKmtHYo3SHNEmPErm3wK7Jyn8pMEiVZ1WqY7U3hRmY9fNJEXMnMiNgKuwdUhjvcFR5Z4MAxD",
  "key14": "5N7aCFZjPiCjb7NpLVU8pwAPdc8Z9hNXLRLwbqPfQXoHuEk3yxeLZo69aQRR6UmRreY9YahX6YQ57tSHQRHKF3UG",
  "key15": "NuGdv4APjPSfBbxTaU5iztWJpNdc38ftzCPyigHjL1Kq7QdLKj7LzGjkBkibRAn9xCcbgGgLo7bP8XPFgNTBM2f",
  "key16": "KXLsxREJ3REvBWZugf9N82tiruNkG44YVHWECiTPJwTXVsQyxswHfQmyCadSc15xKXCQFwez244S1KFWGeJr6V2",
  "key17": "3hFp9kFUFxYx5JvLcGHjmPg3EhQHATsg8pQP5Q7zWWHXBYS3rnarzJ4nJxSzPUskSXWkoCSzVjk4wpuwdiuXTxmC",
  "key18": "3FPnM9uUqLozsvAr8ydyjHZxkovnA9BVYfqi1vFCfKQzgWpNAp9vdwq9YMAgtB9x62xd6fXWCnDCE5B3aBeKZ2Ng",
  "key19": "3EHsdEVtv6XYULAxX5Lu3PKAHPSg3zXMFBawbn9cZvCoB4NcvaZNWBqksj4LjV25uxannvNRL7eExGcWELC8xNp8",
  "key20": "3qHweLzrW4s5oEC3pnKs3MvvJHSFf7YKjW25uVeygo4tiwxA9DbbxbZMp9a9TSqT4UwY9xfXeM7xhb9sywcJR8CS",
  "key21": "53hkqemKw2A9G38bwitVkpXvfRaYmXyr6PVSnDazArTLAF3C8mKiNujYqYPkq4gbSUVg7NX2a2D4q2bpxnFp49JC",
  "key22": "2cVEx33qMbctKSi9sz8MogGmKHV27fR9gQRgYtprKgnBkkeGnxkQPL3wK3W6M1mGG1eH1urZTJp3apqCFvFKgg53",
  "key23": "5j2pfGb8P926rdfAdJXZtdJUwJPVwMJ2Zz9QScRg5JdeQr57v42c9nZcgvixn7uJeyfEeMYcwo21FjwaQToVxULY",
  "key24": "31W6ZFCJBWvfc913cc5mhunsRKyYvZ2zS5DnopNa2oFx6evJ5qi7FRVwcTGT8HrUyocg7UfTTbmTRHDQtnAKi6rS",
  "key25": "2gwm35N16PafTxfp6aiErm58p276FjQXsN16CMsySydKEjREsWPcpMGgE7P1YNt7ponfePBayrjxpSKJRodD3xPX",
  "key26": "5Zi3jKwQ9GsYeZTAMH3saGbV86iCdJfQCEwqeA9HJ1odBWJx3WWXVbu9dnKiwKSPffnGGMxuaH6XDpJQu4WtQLSM",
  "key27": "3F34DJkXs6VMK4eJQBr7j8Q4t61iN6i5vzeB9BVQMbxhtQZBPSDAkE4EZ4BiEuMfhMHiinr3p4nWFdV95KUvyZuc",
  "key28": "UuXyJA7Pjmv1XdCCJ1sxCzmTFrZuFwVhZnQPY1G8AGfqfqBgBFQJE5XVQjCur8sCd5qqzgxc9LeMmnnjiwxYGCD",
  "key29": "Ui5CyiZwKVXtCyf4C88AcVe3Mv8JmnZQgs4WCWXP8FWbrnADYGFx8PCUrZe3ug73dUuLUzyxUfDgH3xhyQ5yNGY",
  "key30": "4y4yZnUu3hcW6dNJH6KCEePxmqLNBMisfSr5aavcNJqdAQvZHdnMoG8ssUiF7czWP3YAHyqnTE1JrHtLvvRJuf7f",
  "key31": "2qkoU6Eip1YXkoPogBRxnJUdTD5VSdJ2nzA44hLXrSokRGqRLqS2RbV6kC4G1fh1kYfkeDQ5GXJ1raLMbnsYnpAL",
  "key32": "3XqtAkrFxEcBWS81pwQZRP46pAU6HhNZJyuU8dV1u3hBtxWojwBwHekZtpAEweykgmYENUmK3iz9GN3j63U88uai",
  "key33": "kj5o7GMQYoATxKmUsdwCSGRYHTv2TFju8AN3sKCarXuq1QkBL4wCoUpZubBjsbDFWmKGhw3X9dCjcmjab5YQYEk",
  "key34": "2Mfk8aDGqqjCg3q8QJtfLCU7622YmsgPWeJwjpXy7k6stWsWDqTFXooE8TnhZDq44UeXzFyEBmHiWzN9Ab6LY5Ea",
  "key35": "3LSP7uT46PdGJEhJQH3WzvyukiMyNF6wQwnaT16rA6ftqXQhMBdp3YiHCasMDUQux6v67MhiGvn2ZvHCf41tB1LX",
  "key36": "4joEnuLFPnJwVQKz99YhgfbhtSchxCD8njWmBm4cLRWmJoKz9pZJB1eULp5UknCZkBLyBCQStiHjRzP4Mm51vdp1",
  "key37": "24KojAPE73FyTJFBcEMvqsuuNWULhhTEKxoQQUK46QNnZ2ujr9dFns76Bgt6rZE9LXvzp9jagVUCMwM7X1W35xjf"
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
