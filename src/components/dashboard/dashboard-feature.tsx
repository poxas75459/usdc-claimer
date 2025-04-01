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
    "25ZsmNqkLT3MysBqiyikupk9cFx6LxiKuj99Hrf7SPbWbCgeWFid4dSdyimMzz7xo7tdJ1i4rAQqKELv6EmgnvKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XsziMmPpdTioW67TCkBvKsHWP8SWCvCTfJcgDHsLE3BeLpSrJYrkszCPHmZ8PqtbsUTyWj1BEevCq8FnLxT7Q4J",
  "key1": "3ujgxzCjG39erUm11VAijrE9JFYWaxKGSzd9ymYTFKPgdDcHwF1ZN5uNTEVFNoJurGv4YQRqGSCniHjAHY8NUddA",
  "key2": "CQ6E23LrpxAp2hQNdVbbyWAS2iFTLWbrKZRWoo12hcS9Jes8XYQkLb2tBdZcGKStaDjr32dzTjNDWfJeRidb8GV",
  "key3": "XsPpqKjMi8Z6vVNTFdC7FwV7YKmLdpt9XxFEtgqceKKVVcHs5uWoKwVXaSKPnSXuijquh81phGQCtCRURmXHdT3",
  "key4": "2APF1uQDPiKB7CGZLWEmoaKk83YqkX672aTGz1UVpqWLdXMg28g6ynfDfcz4RycVN2rSjid9WckR5jJt2AAAHkCy",
  "key5": "5eu7v8zSc2KxkPF9wzdTKQSXtaBjMm2Q6s4z3yJnd9TkYoEBNXEeeFvnUR1a9isXofAAeq15sJvE31WRGpFzHfaJ",
  "key6": "56DeAu3C67UwXEkideknB1dqVkkGaLTj9pcnZjfv5xsrEWAJfxof1wHRAQrHjUQhYVwxjesMJdh4B2yL72S3c2Yq",
  "key7": "2EEaVBVk1g534Af4x4rsyFGxnn39wx7cp6QrNxyhWYCbhQeN8MqpdFJQMTYk9brTaFXhXFxYPiceir538L2TnHPa",
  "key8": "5S3ryEvtc8UhGvU6n9s21qWEY4u9HW2aLAGaMXdqRqjbJw12asmprpC5AEem1PEuTEhnned7ynbuEWjRYcf1STfV",
  "key9": "BArifprHqhnrDy8GyxPqkJ6jgsZrF5KzQYM3eTStxwjEJ5cM5xTzszHXgXELefigsXHBTnrgHmWeRnbZ4XvDrwZ",
  "key10": "3Xv78vTyTNV5Q1t1wEr2Wqm63PV4JYX318kEo2XWx1oA1hn7vipAYP5FkpqFUnzZ5BkDoSt5zwHWHMW2pxJQeWxa",
  "key11": "5S2hNJrsEY3ygaCgRjs5hWVtcS3r454Uni25CgiYzsrN7V3QGrLP1YzAEL5n6f2TyEtJmoRi5ekuJ7UuuHvVnXc6",
  "key12": "51gmU2qdjSsJN3hGxfkNT43fabBwktcdQ2bxbCsqWvx7yUck4toyLdbzKiG5biDdMC4E9wXDSdHnHpgC7pW7seWV",
  "key13": "oh5QMxD9ybMmNWrzyUFuGTtaBhgPFqard57TzuA6v8rK2i2NYn61qjKfztXX2PK1J2o6UN5ML5kzbTSXnmQU2gQ",
  "key14": "2zF6eWExukvoEhR57Re8ufXgRUq6ijcyo9FETeRRPPu48QP4uQPCzXQDQZpspMoAbRK6jNBvqSbJCE6WbbEx7gtp",
  "key15": "5pmqwvoe53TSZbC1vFMBczGoS72RnwAiqTmA9Gr83WNkL3WDof6oJLnZ8tupaAxUoqjmSXVdsp7msY91HY9PjHFW",
  "key16": "5ticbZ8GogDpHzrW7Lc3ghiadbKJ7tiG57DRPKDJysZ9fWnKa5z1DSV2yDfwzZUstCV6h5BJbKQBQZsiTWv9kKcc",
  "key17": "21EAzC47qoqUkU9gqBvUcHAk4USeXmM9dR9bdK1NsDZx1yqQ7FqKZy6tMbJFy1DQRgZjQm6cAHEhM1bs1nhDmTGA",
  "key18": "2wJsiQLkYnLajPbWXvZbRPpjHtAMdhUzqMEHJfM3vECsA2YYLnTZ55SfeH4YubqxCoUfqKaKvGpwfsSQ4e97wzeq",
  "key19": "31r4ZZZVmosDYr8Xkn8zeHPuT5uosWqGRJtm3XBHinoP93Vtg7rkL2qF51yQuZfQW5fEyXPWRV8cHYx2poeyxLUr",
  "key20": "mGrYR7UkM2hUYv4FCmtXBkTzaGqZqjyEoxvEUycG4ULK1Hb1pR7XNk6Gjo6u2ksnEDGDwdsDzQSqaLXuf2xaK8X",
  "key21": "476aE6U5QrKzxQfyi4c2kdrpsPyRA7zE8ns7GZT2WQ1JEiu4HfSvU9bJgWzk4JLhFLMC5JpWrWdFWKRcmvokqwCn",
  "key22": "XLfQvhaDdk1WtgqeuvSFTWzgorja5ALQJETpb6nwAFJfoH3GSDbeYrHQcQFPpHPf9T312wY68LgKPAngV4K3X2K",
  "key23": "PN1VzRsPYs3pomNWK8LUCjycvVsnPyEUU8zp9Bdb3Gzk3tuR456HQpSLek8YTbtBVgBkkmTvThmZJqzzeWQ5kg2",
  "key24": "PmTqSVwX2moK6kQFHzbvXQx9RYCq3YWWVJo7trMW8gcrzmQz96r1GqQqxgBWQc7TmFhRy9XpQzyW24kDz79g14p",
  "key25": "2qhX4geCg5CLTdUwsp76DRFkXkqBFEnwzj7NYY8PPFXZHWmGnXnMokjhADdAUj8Hk2pet4uea6qEWG93fdSzxaKK",
  "key26": "3krDB3JzpaBnFNKqdX4Lq8GnLfc7hHxqggMinfnGSVRA7nF4VN6cRfCASEwghoaG24nL7QEAnVbV3Sn3TGSwGWMb",
  "key27": "2V1yhNBQGaSUgYZbVa49yAnXwWXVANGz9MNHxiMat1wRFgFaoLnXtScuFZEYLvZMeTuzvLcNe4pdM4hD5TvRWofw",
  "key28": "5pcL1JmuAHYNaoPCPhvTmCV8FJGYpqdeCmjJkdcv9oqSHBNaeCQa8v1EFLSLbNgSgT7qhpQpxqtmQNy4eEPcv7sJ",
  "key29": "2kAbbt92ANAm4rGMh8VrQxpdcsY9sSxipbvGzzG8MwcBA7z5U21NhsUzgA1eRSiEje8WLWYKoKYZNuKFuByRcKaW",
  "key30": "47G4p3kUmVMU8EA9GCzgeEETSdhi36Y6iZWQ76FWb4aCdajXyTek5u855nKV9t9C3ZcuM3dbaWRF1oyUfu1aKPei",
  "key31": "53sAbYVzYWDSDj53SM67xGEEjxJmrJe8Ls9jqotXD1RsepfsWFsbdZiu8xGv5hGBCPU87NaLvP6LMNtZKUYCRWND",
  "key32": "255e6vQdPXrk1hzDwHbHgMbkPjkToX3QQqUXoCW9AbzHvZxCswHsF9rn4VrZRHY4MupSrakTF21Ai9mHZDJmdupR",
  "key33": "gLLr4EVgH5Sjeg9KoXLgrT7CYefK6FsgrJKLePjAgYR9ogTvrXDr99E7y9RhX8WAmpJkfFsoJYh39iHAmeyRTG9",
  "key34": "5TA8XRrubJbvaUCzoSE14oFNRV1L1aQJedG9WAZAWqMEVtmmAKBTQo4F8kKkTYvCUJYa1wwW1qGGj1vB3bREtLMx",
  "key35": "2fxtYMSsRDC2z7a5LedzzBidcFY2aoDux9Vu8c1Nrvxm26VSRmZRdQMGJfqmiPsDFEHU1RktFZMchx94HT82p23L",
  "key36": "3yqWrhVHdwTmMhjy7NzLKYcTXcSv39ETSaPcorh9Qu8V7DMrh3ywSjshJvtFMLSxd2Cey1BxMtD5tj6saqywMndE",
  "key37": "4QxrCrB62UByk8PPSD4AYW1bTmgPPFWsQXrTJXpSTFyeSw337pLNbex2cua9N5DUkg6jszgYfjfoUxw23HgspRoV",
  "key38": "5Qq5yGrCePFmYeyHQYjxzW4AX5shyU7kwr7yUeBA5786FZR86drr54HMbdKMxxuBVN5rPRjzka7ikJiNBDDq2LLG",
  "key39": "h9kuMpwyPHwXx2rNiobnP2mviZrdbgWUriNLHNGxLLsCCMLq8QftGNoYZA5yBGt3QSQYRygp8EmvYKxjGe6Aq2N",
  "key40": "65FHJ4Uz5yzHk6mniNXRskG7nWUxLwBHueHn8rXVgHzmfkSJiQT6ucArfsnxAYvka6GmdkPn1TcDiEDp6qAU38iY",
  "key41": "5qVM8bVdrZaJHc5rURFUWZ8rKR97rkqpd6yYamWHqtaW9zCnZvf4gReV2Qh38GW2rCssCn9H8mWbFxXPxm85D33Q",
  "key42": "4WHBr6zQf4n1rBvvtCcSSx89iVa9aqaG9oy5nMBdAq6i3nLfMj6B8BhWH7GPvpMCAXHdb38CJFrXgW9nvZyFhgzW",
  "key43": "51VHvhwrnrG6z87p2L2bpv27aU8e7ew26JTEvL9J1DpzG2h7ZU3jvwCJbRkHv1VBcRrYpbkyBu1PofmPDDqd86px",
  "key44": "5HPL1KSCheaPS8b89AiCF43vGPgsEku5cE92HNCfVhP2VphLsjdTGY6FXaoPjBWdaepqqi3zq1z4jN3J5ekfses9",
  "key45": "3RttvYbVCbJ8nBYHpiiWuv3YSuvBrnpZ8rDLDChZeWniE7XMCZC2iy7e4RreQU6sHhWCdRv6buqrJY8oc9kbSy9X",
  "key46": "35NMoWnxyLAyPBhEU3CgdoJak4AKXCeU4rnzWA8TSFVx7cZxtuh2qnYDr1mQ22jzpDpzT39jvhErWiE4pwKm6NrK",
  "key47": "49bQyXba2yMps99FVjQwYRnDq71ojBLfoMZUTbhtvLCFFQqV7doXwMEDpEYiGqvgcqgJEq6w2JNodRfa7QGjZML9",
  "key48": "3GmzcGaFmPajeB3eYk2tCemASfwkKRMV8cCbbWdY8NBE4bVcjudR9EnXKf2gqKQY4giFprcvnb3AoEEzEJidKGgu"
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
