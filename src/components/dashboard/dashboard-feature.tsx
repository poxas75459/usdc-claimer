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
    "43VkHoNEx6KQyiamK8wZZbRQT3KQFkQhLqDfeYbA7WWyprVGxicMxLRCyCrrJFDeByuqr6eK4P1WMSHnQZ6phzoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzkPaMj7pe3eBTMdovXgGvZm4udLw7aVnDNkxDbubzEnNu3Udp8SGNT1waVGP4pvV9Nq44ERnDVXVQqgBrMf8kX",
  "key1": "UZt643sPz62gQHSaqz6HoZD8M85xyD7dfetWb1wN4EW34XW4JF5EgGGahu5Vk8XiY6tgqQ5ygneK6cG1kDHFesw",
  "key2": "1SzELnHcwMomnFBY4g9YdB6bKpoBXDRiyjrnE9wAgoJqivW8TAfCTPnVLEhWu7cFwJpPNrBaLbE71fVwRZfAHdR",
  "key3": "3jSpMkSSFSpw7PYYGBrCyNueCK5gD7FahE1r958THUF6uhws877BPkG8WU9k6rsBw9NojFsdygM5P5PMrbE9QKvf",
  "key4": "4B6pPH8Ve1Mg2GE5qQXCrarzX4j5qXdcMn5uWNvdXfSbVTuA1ohMTvNZvVWD1SwJdpnrz64EY3Jywm6iWDCkAKet",
  "key5": "5y47i1MDwKASWN3dS2ieGX2Pd4hQhfyBUqqZZc8aNsGHLgsttkMVJXECHqe9zkDMqxLPh3JQp6GmXarzeWcsw2e3",
  "key6": "mHvGwHQqmpBWGxyGpZvF6x2zdKMdpQ9vjuXjQpLMAL6fPYx3Hm2ajc5DSTJzXEhkMtAfeBhjFj23Gd7qPPLUPzB",
  "key7": "4E1xpJygU5oFmoRDQrszKbnC8UbDvrKvwj51vFPCcH6y89t1hXs8BNPXE4vCuKFbzn8wznW4yq8heaS8upQkgMh4",
  "key8": "5g7HtrCsGVuK9jWgn2PyG3VVtQxWZA5sz1872cf8Q1LudHp2D1uZ9TrhDTLHZePoFGHHFe4LKG2RQi9rZYf2JA28",
  "key9": "4weP9mpTTmjtFEN5qeC8gcxBh6kJSXw1E4QEZ4VckoDvCavneGUvXHhrQxrxTdfkkdmoeUMiDa9dpiAXwym7QvwP",
  "key10": "3RpiZVg1QGBnhzF5sny89BxTZm8CTYVZavckYCiar93RnVEFvXpXSRJJujepyV6yU9Fpd7f1bfBTd737dtGfQZ6p",
  "key11": "27nCTgGm3PPGucU4T6er8zxzmbc1U5HgpmqvVdwZQzSeR1K9uRpR2L27GyaJGdGXsT9p66vqW6bV8aQ5EHvdYnCq",
  "key12": "36Jxok8PG6AEaDN19hbDeecbuUcngF329ft5m72x199E1NrdkpB2N9FZmeF6ceP4YhPcH43uGfYQNGDuQG92S3k7",
  "key13": "3nXhVHmGvTg6pteBkeKUyvHHRcj59vzBbAfr5QZANnFiGmxbRZa54HzG2XiSuaMGQYL7a8ZTDhouY5x3zxdh7rGT",
  "key14": "5AhTjDjxCUadA8jcgsn8Qm42v3xgjbCXadT5253zL2LfLZMtdWm29UMTkuHsZ5GSBiUPNLChzMEPu4YmTuLA1xYr",
  "key15": "sMgHcntgyG1QE4CUyv2YTRBGBsjKNCXgUnFgq1S49MU7on7yuPw6sujPGTDhzdtBonu6Hn4bXCBxBNu9Bchcx4N",
  "key16": "26x36XQSfDRW5wTYbq2s3qHjA9oa2EV3x5QYsFhqsk3nTnqikPr3LZnogAVj8iRJkrpdyVCEYLrywP2iiCPn2zC7",
  "key17": "5xwe6BSCigNM2yXHvExY2W26rTTkNnX8AFXffrH1KmwRsRNHVmCwQ2p6THNcoJoU9MdS3J8fS5ggYEuBNWFEjQUv",
  "key18": "tQzXs8Qdf5Sd1wVccvuKZPKpS6aiBj9meH1YmotpneGrFRv9npgd6Ke8eZV55Y58sroYSAeWJaegqMZUeinrcfx",
  "key19": "4neRcdFbMqnPzGWzyHZeKKh5bqy5K3KGRShN6qatrm9xVa4PGmRFMoSy6HE7WtPSkrv3x1hFfT6srX8u7Bv22Hmy",
  "key20": "3apFyaSXjWpDtWqtr62wndf8Z8sb7zfcyioiVeRsvdTtCeHWhPjnPHNB8EbPoFLXHUxvEt6cMuUS9ndNbkp3jKkF",
  "key21": "5M8YL6EaC5DdvqexbjF3YKWiCTBxoE2GuYZqwVtzThzLDM161Ei4NmfguLKpCerUr9qj7Gq7F5ECJtpeHh4BVLNL",
  "key22": "5pZupwLrPDAxb2cXvLXgSL1G8Rnz6EPFU48yx7E6XjfnqGkoTKnqx6763NCM8iSmj13FJ3cx9Lz6HhwXXZxUBEHq",
  "key23": "37LdGBgBvWcSj4pfh9tVDBZNNdWGdu48uTmEMGFXY1FyEAvwpiAsqYtzpxNgMMwZGjtK7SemyFnFPpoAtqYcsCLH",
  "key24": "38HqfP4ckEEhY5esdh2vfJcE6LF7fc3BNkpkMaRn66YR7ZD9418RH8F4Frj4Am1Q4aZTmXQVj4AqS9Qx59JJHwQG",
  "key25": "6w8xD7BMnYajSN7WMMJ3nfv582hbvPN47Nkw1P5ZAoaanjqtG89wc2cViPiCbj8LLKADkta63rUyABtgN8sq8rN",
  "key26": "3F7TW9Cy58qkpY3G36ijt58AK5WfoXYPwrugeHtyPndgNmrdabVxUNgCZ1n3vhhBDhwi2Qhg15kQJRipaWuHp9Dk",
  "key27": "3DNmLePzwtkA8ybQdrvw15ZugKxAMmonsxhzZKW6yh6DLds3FC8wpyPQVPnNKKomSEGHwdTZqs7QwM6BAp2tv75S",
  "key28": "JBNLnf9ufDtA9PHk4AKHQo6aobbfRqWYBFfqgdqQ86AoJvR2ugC4JQPVtvxHKUsE3aHqyp7ca3AsxRgeboBmaUV",
  "key29": "2SZjcVRwpg2ACVicz6yexw4xyFYFqDkPdpzGxzBaVZdycDZMigN9BQWffFg63e8sVyom12xfJBGqgx7Q5ZQ1Yd4G",
  "key30": "3bC7JjQ3CZtPTLSF4ME1qw3UkssqNfXRSoyDubKoBv6Jhuvq1asFc7yUgnfC945hDYZBJXYs6pBPjqrLJkVeAc6y",
  "key31": "5MaMsyz8voRUF6oqt16YWceZGPPyq4sUcwPgCKAX2yL2TPpiY9e2yfcssLoM8vvQa8uEda5jeH73YRoHtpbAFiLy",
  "key32": "218Y7cg4jPNR8WKQ49DAPFpENgEvBATuRxER45FjqfJuweR3wf2iiSD1C5xouuCj3bkpyq7zac5pzBdqcoo6Xwea",
  "key33": "3oPmiXwxz88yZfMKGSseMVm7ub4gi9JswjiJ33oGYCQD2WqWfRH9x5NQgPNGLEjhrCCHhuvgESJ7gHX9QHhEaH2Y",
  "key34": "4vKBR7wVndgCWvWzckPy8SYSTAyLr2iLxoGUVAWz4gLtJhbeem34YUfEsJ4fx8zUrXzzUdDRqcsCQjhZF7ivLtqy"
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
