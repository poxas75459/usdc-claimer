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
    "cTnEoby2eQ4ixsPw46wi9x93QKk97C1GbwkWBSR2CEaKCkxb3EPZ4k4fCPDsicSiXHSCt6z5MZ51J6wim2JZdtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23vGUSACDS1h986CPuCgDjgpUJy9jYRmJHj4U6rb21BJJ6M2cUJ5wiAPFXmV3aMH5fYfJu16braJAKF9zkh1qEzK",
  "key1": "5j2WX3x6D2s82bfmAkxhcCBmG6Kn8bqcj3WHdSstS5dhjfJHvDzXQUu6nGzgyFeiPcc73QnNyYNWEnrsjifja3Qt",
  "key2": "47EaUdVeqRJjCS6Me2sNDBVgfGTH4sPJNBmetjEytuHefhTm7Ux5Rgs6C17HsSoJ1m87c7Eng3WtKXC4HziPUAmL",
  "key3": "yT9K7F65iLZjnEq2e2piGKpGuj6csgFKC9shBMLcwdGZmAP8vxZ11o3vjo2EmAJ2FPez5vWc36GiAwjZGkHWNc2",
  "key4": "X6NbFkupixVobrLz7sxa9xhsVnNiec8pSVweh4jqJUun4xcmZXsYYWWvAWL3sqNSu3UE5HfypVC1y2EwVqArB92",
  "key5": "2Qr7JyLVm5JFaY962naiGVegrdMG1xsg2jqDghmSZ3XDyNWnKpyv8DrH9wvgtjCVouGTMiQF6XqWyqoBwhtS3aHd",
  "key6": "k7o5wPJJ87Hvuw3tawDRdvw79VxtbatKE71wZVQakNLk94Kj4gtHrveYDribrKeEUtrmh9cffRWW6quNAnZZUgA",
  "key7": "3oQgbwEUtQRDvWeBi7RGV7wRCfKMrnpKVnjYVU8dpqDdBBpGiUazCuqkokvZJsadB5itLFxtLe3t8B4JvHe6Ee6X",
  "key8": "2D1aNbNn1Y17XPf47DsFuhScsXRQubFittEdvqd3vSSmAmNPe3wn2RNRrsN2erib3inCjUYjBBAMVdp16sBT3dMV",
  "key9": "x8pNE9t2pRuLZCwZwkzpXTUVDF6GvLHRbSBk1tiUuAcUoepxd5izeTW1J7PWBUJeECd9NuWeCEEBe1krvSdG9GV",
  "key10": "3g6ZntVvgST5aVanAdMonxBNwbg9LG8xLCkZatVwKxJqPe9xNGXGqTsRx2NG5V5TrWDMpifSCARcgfR2VhoCSRE1",
  "key11": "21CERKzW6RfLJDr2GQhQcSybq5vb9asUiFFZZEhjTGaQ9kVSqVcMaHbu3DrVsdMmfLiQPKsEvXghV9VKVr8mFLzA",
  "key12": "h8PeuffDEEt7PFXSxdjzLQoC6LMXfQJeDKyZVvwR1VSy7mLR3SmXbFCtuEBexB4Ehr3XTcDR3pTn7FL7GNPrPJP",
  "key13": "2Vbat6m2aui7VuaDYEPo2cfkdzTgcT5EqqmgfB2F85sZbXbTFdJ1DSUG5yA7x1Wb8NhQYeY4ULSJSVMG3j1Dzdw9",
  "key14": "3yPLVJyATwbArW3XwWndThcJZUVJf8LLCThLcVRSrpWfQVWuwYtSaVhsVuEXHCeaUazhZRHmLj9JrUshWgPYmZV9",
  "key15": "5CW4ZuEwZQhk4B36h6W6pmuoB4cqgtxXyPV8uA4W8Vq9QCDh1QyubXA7sowMHqFz5ZiATbwqWoEFFGCrp3aE1MbF",
  "key16": "5au4Gofkz3Wb6drdv5mey8UCv6uZ6DNuZV6QGyd5PPRVxvT3DDmkQudcNS7ZnSUe77xNAUEhmRKnnW6jooYENhfa",
  "key17": "2REMBdf4N6h41Nf31oU5fYLs8V7t7ST1C8S7v9EQMEQwzmxE4pAGcksSwmpNghQ3EMmySHhKPtGVCce7fsg5wkiN",
  "key18": "29A1dPx6ctPaYj1N9rszFiJ2Li6zGRq26bQ6AZQZ8Zq4RRxExALjYp5zWZqdwqNFYNG5YHiSjWC7QUr2pZ1CsFkQ",
  "key19": "5GA8QhXcpAv1HJs5pQG6f2pvYji7UvatJ1mPBNTt2PUU9hfr3aKmRJX5h6MNHbdPRZG92YqjkwV2ykaXjc6k2Max",
  "key20": "2WapjANoqQ2abjx1pGXrB7EJ8KmrrVb1cTVP4RkXHxTfXd2EhSpRWg5GfirrnzNurMYX91aj6rrWD2Q3ezvtih8W",
  "key21": "ZGYfv2wWbPpm68vG3iT3nBwQ1v3sSKb2uaqbPXP1CNs8cZztc8MpZKGokDdnpKxfbjM8nMBgtQFoR61qZj369T6",
  "key22": "5b7muTEFLTuuz71wuVg8tVWqRMmchH65KMw4smWBH5KKD6mcigPiXxH1toi79q33cyuMEdcboTGHPqU5NEPBYCja",
  "key23": "2fZKfPFFoozg7K5cfUd5pj7XS3fquDPgPVWdLQPLNGoyJa9QoXTXpk3pzUsNaM1oXM1Kuf3zZZ24tU96onfwDXBF",
  "key24": "iWmGbtniTdRx6TwWcooygyVpAYFQGGtwvvVqnJsrKKYhqn5HB2UNqkXjEyg9mtkumeVZuD96tWVGzKLauFJ9Yet",
  "key25": "2k1D89iG5uvDsSrci1pk4m19Yoimc83zUzL75NAkjYJdYJeKz12cxCzH6EGGqwVkWa2YiiX51pAM6xYT6GADLdVB",
  "key26": "4gryoWh74jzKJKoshuurCsnqZdPtwHobL5iFZTbmnWCn7N5CTMhXKbaACzqSyzNyTGzxLkf3sNyGEkcn9gPJb8xr",
  "key27": "4ZRPDnGL7kCwkTQLfngnEJnxb5S4GtvzfyDDkQLEXr1E5yzYH1j4ewQTvN6vTyrspMtSgG4AmNq7fTEYgcejmShu",
  "key28": "598JEGR55XLhwZJ8TEWpmS613Y93tjtrCUErXEQPrKQhBCkKutxpbPL14BYPVG5D7DBc3hjqZSMcRUN2M34ezmgS",
  "key29": "5TrKodz1Forgu8LLSK38q7TH6WN3SDqTjFSXLJ3nDAsc1FD4GKPyF8JxS6NcQAdzaqbv5oBzHP2RKUnEErQp7Ras",
  "key30": "5o9KALP7TscoJVW3dn8BNNzXuXiJqUK95vU9fok91yjTrSiJh7UmGpFk34rYBJ7eRbETGBPtY36Dj1gctUzPn3Ev",
  "key31": "5rYmZt98pzMaxvYiBcZPj6k5hfpvC8aJxMxpWPNJm7FjzySbJuk4aD4n1DkJ4JGTECETCWumLKGCX4C91RWdZKMH",
  "key32": "23K7f65s1VdBCdjKhpN4pdYT8yVrabQsHSKRpPK1GkJ3VGLdDScmUfoF76bS64XxV9oq9Y1gdm4JUdjpWiXwgAt8",
  "key33": "5Mvu6mZPtSyJmenbUSrrBog7rMoQz8THcq4uLkmH9rLFY5D1EmffhK48N5ogKxmUajhFzyQ1oJ4CWywdnaaCrZHr",
  "key34": "2WDSbSnuZC6BKD1gbmg8J2sJ7NMdhS4bBLHLEJfpWFhbJu99JKLgta39WQP6fxysXva3e4PQ7Y9dyv4b4XyhSUfX",
  "key35": "5Km7ud9jb9fTwM1Ry7Q7bMgkPdExLqSeJnjdHgwzNFoYUt6jb4kSUDXMbDRyzCzUV1GH7GLgVrjEwaJYpukf3QYL"
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
