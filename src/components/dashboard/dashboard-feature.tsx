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
    "2pCWKKEwym8vb4duQPw6X32krLcjF8trSnuySRbLhF2MtfPmWTCoT6nDzL81owGR21NHgJgN6wvPXYD1tWSG9C2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybBS2r2Pr52xBmSfcxfuUDGWZQqKbiEudvcpCNVBKQaNE3kffND96e9HGKV5vUSgab8e6ocVr34CzkGB9HH2znW",
  "key1": "4vQgpFAjrxjECgiJLrVBUyUWWQm1KW7dhFrj7yu7pwa7ZyhYqwnci9WqaKTzNJss5my3BqB4V2VfF1w3etKDZp6c",
  "key2": "56EARczLjHYVcwCGS1ZsTQD5PfB6EUoGUiV6s2tGbsoYs9STPZKU6RVb2rXSH4BoYC9pciEfvskouRRLymbp8R7g",
  "key3": "dgSFHQhq4i7w7C1TRYoPuJfJVCfw71VTc9uS5LAeSX8GYhQytCDS2RVufRWyh6hNJvyYN6oZhtgVJoAVuPZUErz",
  "key4": "3q3qJyV7t9tEi2RoigxgwoCCZfU5S56DHAp7s1m2n2dt19zU96UnLx4Dn8RCbehLACo6fqYmpwQjBpcW36Tpa13a",
  "key5": "4ESW4MotmxhvjsvgiK4L6VLdGYSyWodUWzjtZaPQYSqpXKji3pHHG88w4DGxvxpYYU1sm5jjBuTTZsE6PpQ2ijcw",
  "key6": "62YgVeKFwuDM8McNTjJRhwCpnfpYKYB6ortQBcAzvKTWMmBHURSJpowqjAsKPWTvb1ukffvgyyvQg2GKrXdk3u2y",
  "key7": "5WHE8M83Z1c6Ppj4ytLAnPf1RE1tVhuP6NrCqJgQTKH7Ps6DQH9FjJcZDzCPA2MHzwpuHEbexP2HzMW32cYSWcQK",
  "key8": "EgyPViR3m5i1UChfh5x8ceYdt2tAk2F6zdYtr1hReVzf3SWVr3vSDmmGijCu2AHJ5g4bWnBEdabFpWmbJoQe3bW",
  "key9": "2DzmQ9TUBNHfqSKFNACNSYqCmyRqXD1mfN8bKZkpR4FXUrq31C3xQs5zunBxbekiqk1HoaHCJ8HTKbZhDsGUy2wJ",
  "key10": "2kn5wJ6NjrJvMBkXUZ5813dp5daiH1rRt7P2uGDyqf17LD6uhDwsifyfZPLArSMbYtbSgCBSKraaTz1EvCuEqjFc",
  "key11": "56VEZio8y5mTS7X7tQhi5BwvDjdkFd5VuqtxxSUiLTobsjxuTfoiTo1Kaywvdi263qihcJAGHjVipVNMrRx3N6j8",
  "key12": "2yUMBRNLeCXmcTojyMHwSiHinWSZu2oFjgoMipcaHinejC2VLXiNff2q7WLV4crYjm5U9zQ9b9ZDcsSXyrcyR2tm",
  "key13": "5LGqy19EJwh9LZSE8jWoEnbrtt9gTNtQHZuMSAEpErmtXvSdmg3ZP3iSschA7RnRXCUZm2Gn7T11XdaK9reCSqJA",
  "key14": "7j4W14XT3tCffXybohgqsuyuWCMhgiPfte4qTCaxgLcKYn8nbRBZhLmD1ByhEiLgXDKAjANyYNrZvBp6BuHK7oy",
  "key15": "89VnZQ3HB79LFVGsAECoQVoR5rFMz3GR2nxF6ynF71YJ7mxQQn62z6pFud6grMYCWveMzmPcvSF47HYJYMtoNeD",
  "key16": "4btEMYTxV3zmLKgoM2nz7dyc42sDxzjPeSeUsBWERb6HKeewTeHusQpgQRCaNKFXbXXVhSrtC5FdDXWdjt6FdyL6",
  "key17": "5hBWY68hbXUrGUrJHzvUoUk7CcxLn5igW7MWsSVyoa6SKg8ViNvgAgSDY8mMKRg8UAYpdkpMYvP9HhGgSHQ41xN2",
  "key18": "PhBP24UnjtpBCX7yS5MNcnEWczU9AddMpXPeuh2SKndhqiwpXqWy9ZNCxjgBvVGUukHGJCAoA16nMck7ztf8UAq",
  "key19": "hYdbZkxiAPPC2zwdfHaCMVMC9vZLbVyWNkk8VNbbCjQt9K3jQiyVC5pbDc91ZjD738oTvL9Agvt7neB5HyKwwSu",
  "key20": "27V3jX9ZpGcp6dBee3ueMAJPEjZ4mJUkoZMrgtaV5BvBme5YNyyPoiCwRL8cff4eXJbWSqkfMnsFexVw96bs6wiM",
  "key21": "2tzsYcZN3BqwMS8AA3CJPNfNcFEhXmG1RUxT6EQXatXzLSqdskGtUEHE5oArZ4aL72R6fRxUvsgLeUvTXPAdj7po",
  "key22": "5LLwej7RsARVPjTHKsE4RK4PT54n57x2QN8nFnKfoyz8yaNn2zBsRVvsWQbjKAZdoMyP2XRhAnmucRnneccCoNow",
  "key23": "55nuP9JKSqn1PnHE2Fev2tna9Fqp1LbXAiNf1SEpNGez1FBAQDKZ2C1ESf1CHJZHqASKA3PamK8t4acaqYz2jTJR",
  "key24": "5sWkfJoQ6fZGr9aEnHrYwct2XYu2byMAX9xqjkpstjhDXxWPWb5h9ejip4y9CXSkczM6X3UFropmHe17cczM2Nua",
  "key25": "2FmzSjRS5GKTfmXweGeSockV9bvMAJfU3v3dRCfAhJzqM8DecTiDX3xqWZLvoWoUGm2ztemYPWoHCFQzgT9Wkrhk",
  "key26": "XPK74Qg3cBkxBgaBoY7nqyQvauViZX5K2VB6JUFKWsug56o8TiPAW93SQNxeMEpQKNFgij4gr4biAgHQToCw5ut",
  "key27": "5WhiVBdKqvZSBE4rUt9VaUgLiKQKtKcVXw2x8pVbD13prngogm6BCwEpJSnnfAicSKCksBBFYmH3FP1cyHvwGeSv",
  "key28": "3QJAJkH8ipjy616wLezpCZaVyYmtw48LWN6G7W5uqFezGewaZDLXSuUbYwx2CbCtFYQiUXsuDBH5LcQR9cVgfULU",
  "key29": "33m9iAM2EvcDkuf5EC4GZEW5kEAgxArnks8t4KyRYdHFvXQ8ko5s4fJ189cBXbnL86fzUk543PoLBQZ8E3EXUkWN",
  "key30": "4ByfdiohdV6jTR3RW4K8VvtS5kBVnCPK3uk81ZrAnNM9BNETNXWacwnUrEsFUUNMzJyPbhn6DdNA9aZWdUm4dtjU",
  "key31": "3hFsFVndqAKDJLVxFtPUEqJ6sLV9tei7T8KC1ayXMNzopP85o9VQaap7tcwfKPgCjgAjwLBvisbqZNLadRw4Phfk",
  "key32": "1Qu9TKZ955Z7kyG1i4KvdcwARaAvEafY2fnCie6xrkdXW1qmxeKJBCsECWi6HUfUW4YvSvDJbkJgvv6vMwXaPVW",
  "key33": "66jQEXrgM5PEiteAuuas3yzSrYne9ZMU9VGWBPtGZSzTQ1UL7zd81r26xSkrrZrL4dymXLVncvv3fZ99hNspkT97",
  "key34": "5F64UFg9UJ3bhSH2VkUoC521UUDGGcRMN1qCFf2hDkbGbHULS7nNgcRRG8hUrqGauzgmSwWJNCq2fn2mFZ8h38JC",
  "key35": "hn4MMnN2XTcJd4mN6C4JKtk9aHwvRhnmccr6CFsunZkEHxWb7VaFkbqXBQhtBod7yM5KN22b8NiSGr1C9tKGBg5",
  "key36": "4csxSGpAQwjoziAF4KT585QLzFDumYNf5uA11wUa7xxZm7Ex4PrM3igPrkk2pS6i58XPUWJLZhzThFitJfwCZPs6",
  "key37": "3JTNKyyUcsiJ6L94LHWhPBycmfy5St637ZZdEGaMG9v3t6Lj5jzfUng8KQBBquHn3QnZvJ7muTe5fh9ztPQTuKHr",
  "key38": "5e7te7XHtsuqpsPmr6nH4YAocTsnZd8qknrVyGEuWeEGCdm3gcwmdPP4Ba6y6xqA1HxeJkLZumviFKFPJArxSpjr",
  "key39": "3KbD7y6JXwQmmbSyjnbztfNVRK8hAHDt4fbWKNZhrvF2rT1ANTcDvTKKd89woHc8XwGVNyzGBdqcjdM1qPWffNj3",
  "key40": "JoqPUAvhJwnjs8Pkex3xoag7MSWHVHCNEjM5GcWxbV2id1P48Mykbju1fH4TFsaBBjhwCG8LS9woQcPMadWvt6A",
  "key41": "4Fs7UvvCVDoEFQm4k3n6P7x62VX5vZacrrRw5jBBKnyPAgTJ1pTh4F1Mr1FQX9k53yFtfjsMWhwPcMrJyiErdvDf",
  "key42": "4HEFpaGc3nFqmW24eqev2GqxysYfvMCojJHnpf68jCqB6A8E7bhdcntmvhNs6KypVNHxo3PNLyw2wzeVZ6xjqprS"
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
