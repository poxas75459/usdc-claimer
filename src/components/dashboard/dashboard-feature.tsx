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
    "4y55R9Uptgs4TK6WciNQsjSos4ERJzecGfZzeNGxVKTpMKoFQJcetfTMeuAzugGbZBtsyW5uGAxKdqJZ6qyPaNiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nNiPKcmAYcvtZgj94Qm555eoP6AwBhobriv4r5Ahx5U15TFivopPz1w4v9ozgoz7v9GMWXpsnozHUkrcFhgWpS1",
  "key1": "pZtkPesnuvMjYRo9PSxJMCCxLaVYqdCwWpVzNaK2MpcCthbFx6oyUFzivHhpprws9fNfjV7dTZjhKPXo1RHcWQr",
  "key2": "4mf6UuXB9bRsRMTS9jJGBRdjS1ts6NVmNU2hJGf85yMuQC6kDkGQ4R9c1m3X62v5c7M9ERquGmiBHy74bu2tBXwu",
  "key3": "5htAUnz5Ks8ogVt5jdEdwzGh1NgxCY2gMXm8T8VVCRTw49Giyan4Wz9y8jbUo1gsd2xwpFEgjTwqtXRPgBk5j4Et",
  "key4": "4hZLRrACmqJN4N7RT4GcRP3GUQaUpziuk7dQAa3xd782qDUj2GCnA8YgJxVhRst8ZKpLyiVUe87nH7xymMz1zhDC",
  "key5": "2bJg6EXj46x5adMjtHLfW9VrSxYCFQf2rk7oVMvxQicV2yvUQr8UWKHyr76ohFzFS3Quv3QVbk1XfuzfHD8bAqJQ",
  "key6": "2g6CJnwcn2PzVS2h3hRfdEhJubjouVCumyQ29LWiARjcmwrudQLwMtUJ6xxBLGBhiuRKdjA2P9yYSSVrb2wEqj5Q",
  "key7": "2emqboZWZLmcFaq4qg1Mz6DsA8ekyugq6s4WcfExr5rE8KkLCaeJaPek5BUeXK6Q3sNYqKpQqEbdiPZQjCgCjXq8",
  "key8": "hQ3ksfCQ4RhY9bQ5uyPKjnmLMJupupsfSLKMYooBV7KKDfznViUHaHaqwR9vEmvBCJFYfBNvERc96qS9ZcXEVfY",
  "key9": "5UzkmY6XPZ7BQnNLGM9oiYrAgBASVN3EW1X1chtVmG4ci7XLYHmb1vfReU7hKYm2iUv6cBXbsfsNxYAijGwDJ88V",
  "key10": "5Mzxkgv9T8rMk49wwR7bgD2hfM6E3skg3AC5UnNgg6YYVUnYKJm9hg7acAd6bSqPiFLCvierXdAuPoM8s8cn7AsQ",
  "key11": "61JBCoJ9uzzFSbZAT4XME4X5W3fzbpc95QHfdtpjxrTvZmnEnPraZCES13ANMop2GCuhhzedFtyniJbeyJurTqsy",
  "key12": "WiCAHQCmb2hVMTejPLUoF9ScF6oKNJ6THvibXZEgVbLLH6Gi5i4LegfRX2s1Xma9ddLUwL8iBuSyDzRkpTLFvZF",
  "key13": "3g266YbXvhHpfpNY7ShjfFWLtMCJ5mgrUFjRcPAGnJ1kh5oFwKtWQxEhgXPz8JDJnUfds4mWDKPWLfxmpxXYqT1T",
  "key14": "2bstL1b9UWCDMtJMjPQgcFZzUnVrw9ASQTxaywEh2Yf75StnMF6tt1mhCitdHPgTApZdEnGMXbnpB8CXqy8K7mZU",
  "key15": "2Ej4Y2E3my9p4TWtjCWPJDpWZe93bDf5We2vcgoBUKBCtemMqvDTTsbt7FbtUBUKjkqvXnk6y595ZxVtQUbRiVDh",
  "key16": "3CRoYp3MenecurPyK3neWVwwALW5iK2KyLv5Rvuc6CEA4YEtHBxSfdnqzmoYwXC3ieXPc34fS4M7hURpPBF9SFuF",
  "key17": "3rgdWJTUsmdmJWzGCwf46C9sAmsDjKbWYiLH6BFJCXvpWkLaLqow49Ewj78eiUeEn7bN8dECNmMLH1oHQPkfyvFX",
  "key18": "27QiGr4cEhrB9gMUfwged947W1Jab7GBN3jnhw6g4eeHt38tXouexnh8GVAuAg9JUWo7giy2xXJZAwqbhThPQW7j",
  "key19": "3KAZXYyNzLy9qfvw41LVUjH1vNhg6iwCYirGpr8Xa47pMpRx75is47tUyUhYSWrcLNeu3c7R9H4Wgij5qr8mPdkC",
  "key20": "5z7Gi9Pxpw43x8gNkAabE6PEdcvyt81b8sbwmWTEe2nMkuFyaNX9mv22TdFosqkf9VWR8BgDeUdixUqi75ahbkQv",
  "key21": "35Us2K3uANSdusWr7YSBaRaGpRGVdHajZRumK6o11Gjh1XYb57PpyWarXvvA7iYaqNwc5T8G1dUuRij1aKLXzkTi",
  "key22": "4jK2ZejnLrTDL34P6BGL5gi2BCV3VgdynkgKzQ3ZiuhNDNxaMBLBRcWUQCQUZqQqmM3gtREdh51N59hsgGXMS98F",
  "key23": "37ttAMPaZbTBY4YgyFYn5TrYg5F5CxTvhNgzJUiGeowyaTBxJ54bFwgj7ZxyvRj4Xp5yJxzDE5C35wJjsUgNwHK3",
  "key24": "2q1guVvhnoVWtXE1ApR5TNgDesK8ENS5NKdXNEzHoCm5eva4RSo476PUYKtb1TKvtnqEHeTGm9c3wcjnuYT4fPXR",
  "key25": "43FgJZZfv6wb3zL3PcX1MXAK3AE1TFv94dFizPEFJF8CikWYNZM5gAwHbSeWrwwbpVrgiwGtb4PNttmqFtNtCEwj",
  "key26": "5wPQFvBTWdad8X4pP3k3n9vg1bmv8BwdT1DQ5UpeuGVVmtQj4b2tHE6eDN7tGzQGsj8RD4JdwbsRBb1R7MdQPohh",
  "key27": "2DJtuP6F6UFYj2HvcpBgL82mtaLQGLgoNbzHcSHJM351WmuoyCeAgeBGbHCfwUcrvGDxwtUCHBRZ1u6nf48TrsXQ",
  "key28": "3qm2Jk9NmGsoV62FBPrXKCAkBRxEd4aJ2AR7MHtnpzMCVgHQAaaramtMFkH1my53Luj6WpZXqtWpQhTdH5VZAFR6",
  "key29": "24dgnAihHfYECPenHPKj4VcjDVaKdPAak8FNPnbCRSEbKswwXtFnEvw45ngRgBD3M2f3dCHyBogrYSCuBr5n4tBL",
  "key30": "28kcWaiCGZ2qaEz9vdnH1W5ESZvWhXKQEKLS5N3ySjvYctkEJ4tk5nBBHzbXDCApVUNxRvynTP7TjV6DnQ8qTz6S",
  "key31": "2TTxjJYxSubBZsg9caPZJHh1hZR2mir1rMFoArg5qvDX1BvBnoZC3qYZDfK6XuYnqyRSd9UPUzV5hUKTNKtsPmXE",
  "key32": "46HHhyH2xxuMoRX5TxbFxCpsRP3Uk374fHQ7ZrbcxHgaP3itP1dLDhYEUYY8vW6y8pvd42nM37CpSfEyYniWHvnY",
  "key33": "4htLmi6NE7AphDwhVGYs9kDqpvRkGbwiNS9TGfro7YWT7aWQpY5FE5y9GSMWWQwRibJWkinb4kE5YKLfMSz61SnY",
  "key34": "5wvrv25EKoN2wbnu5hbv6V2JSoHbY6TEVBCnVjPJqpGrhwUp89MBtKyMEcWq1YsLDEd4jhKw3xCf6pWr5ko9Cabk",
  "key35": "2r8aNGjJXnBHUQpZzfLgWjboGq7Z7NXJhcNwgkPco8w8XkZ4pCmcxsMs5fPDQVaaUNA4UPfkFgvhHh8jVEstCohQ",
  "key36": "JXw2DTchLtm5tAjVAASR2FHwv5HwEuRrfUkqdP7yCybqwkDzYRZ3mXS2pfyb12Syu2izhPhoRDDScMYhqFsR45P",
  "key37": "3UYuwDieuwtry6sZ4ygjFdu7Px67PkC9RygBeR24eUsnN9g2UApwdquEcoeERjZuWbip5WRGUkUgCK39E8eSUfJc",
  "key38": "5LWGD545jtAF6ewQWCnWPLFnw6VTRW3eAWkzpJ7NZ7Pg3hKcfPshUNbzJ2EaA8EfNooV6Mpre2wSPTE2BgMCvhQ5",
  "key39": "5kS3iwCBCBs9UAJv4wxuCBZxtyYQwMw4rdapjYdE9MYPea6g93R1n8BJmJtH1sXFrdGJrW7T9wiqZetb1CVz7owX",
  "key40": "5teSnTHSjurUf8biaXBFYTyDAEKMSKEgSsK1sXuALpLfgJ2bjEYQwFbrzoLYt4mXVdUYBGBK2wktxnYQyZ5vYMS5",
  "key41": "25q43FiCt3bZFPtcDq4ujBpJYXjeFD9wVDk7ckbr8MXqhKVTYyTGDT72ZRR1utKyFoeQgKShjMRQuUwELHSV672Y"
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
