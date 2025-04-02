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
    "4JEnoLwFSG2WUA8xAdBnKgwNSAqwjGm9L2aZtZW1JYZqjLwxGGnEpdPeoKnXhiQhmy4L3Svvd6pzQR722eFiXmsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NybCDciuen41eBgKrzXRBBHSNnKHNSNELcxsH5vus9upn42KW3YbGzABgSNWkgiuKeLgqanh4xrGLxUi2Fps67L",
  "key1": "4MLoELzj3yEZcvJvgFhaaK3Jku2mHdyS59qfHZDxan8KwynYvMzK8WtwSqQ2ZoMrxuxooP14vrF2V8G21oiuufBT",
  "key2": "39fMQQBwndqMuJAwfE69yBPCFzQ63q7SEzM7XMz1DDLoDNMdagHMWfGRXiQ7yMXhqEgPbpGGrrfTwEhH9dvicjys",
  "key3": "3NZztubAtMj9si2n3dHDcqJgG7LTZ6acKLn1HvH4QdjHznYW5VFZgHTiFWoBUaphioMSxw8fJXHwwt1NEg2acRV2",
  "key4": "jwzLUd2wphy3NTjoS6oarCTwQVSXeMsVP8UzmjzTS3wSD7jYJW59rhUUNdJ6geUQXKYzHfjz7rvZnJqA1d5XntL",
  "key5": "2g6SVDssaFMWPDD95yG4wojQ4K2okiCFYz7uUevvT88P6jgth9LLH4tS379HyqkKpKdkpxH8fU1z33FTAoUnCXSF",
  "key6": "2gzMtfwYDadyUfxJiFLZVcQTXymxdFKz2NXq2rwrzCUY4ivMRuwVC4BZxNYmHu1zcqA6CxWNeU72qSytjKDTiPya",
  "key7": "4wrhYXFSiC5BJqjbt5KwnRtN65VEcCR8sbFa8Lap9Vhdq8B67XmKZunpFVw2PuQkfJmR55SS4jxainqLzSkUDApq",
  "key8": "39ZxGFdvmSBuqyTQYReioWBzWpkYekvyDigxAZPLZpwynmXym5WcCtfd3yVmG6gZRsGCpNcXnbrXNrAKP1SKoiFt",
  "key9": "EyuAiLyPzMq8rJKrK6SwSRVJyCj4BANmoBVNreJLrmo5rMouZ3TKGMs7L117tL8mfQCDjwLhRhCVGNgRBc7QsvA",
  "key10": "66kD8qA75tm8Fgn5poa1jSQBLY1RmhAwEUx5D4T7cDFagUSx2LafELXaAZCGWJ9s89GSEUfVKrSmAUE85stuSuZo",
  "key11": "4Uj5dJxLK456N8Z3XdXUAiMuFF2wUTvY29iTfMnghoGfpHbdyf9jPCMeGk5Pw8VubvfcbskDbMh12UirRb5xfpop",
  "key12": "2dqtvfMAw7XQ5zVzhEQYV2Kgu1U9Tz8SaTLAnkqhaTij8rSGfJVqYXhSXwjYMLmFMZ4o6QnVfPBf9FxL8XCyjAmj",
  "key13": "4wmoKGEJbZ94aduckGG9EGLpxDogdd7Er6aodB4EGH1fgUbEzJcsZ5SZjMAEXhnwkscti5fsvrLVscaHkzsaryMi",
  "key14": "Tm3ys1PZrGcvpNapiM3C959RYLFpPbKNKHtEow52Zxknw6B5sYjRFodwhWnzU3wEnxqr8jCj9RsNkki4rmXEAvM",
  "key15": "5i6pKgE3XuuxhadZhTPGJ3nbCzy3CS6KaV6oqtP8Cvnni4SyDGDAod3TQtBkibdaEdrQyT8zKWpuX4EKiYXz6RwW",
  "key16": "5Xa7D5L9TcXFWG3drQZn4FwUUf2coVa2uWWwLhZRo6cfnk2e4Vs5n98dscBJL8TihEhcGDYFpL3Kpy2MmVnPQqcm",
  "key17": "3GupXRCNPB9stMQin6U9LLrSLdqo82YzuecaRWxVEJAJ6Tos5jJoYpN6terxVodZF3ddXm3hvaJzv4HAw4T8dS5c",
  "key18": "2HUFe5FWG2cgowLDATfYXGWgFxRVtbSEXVhwTMkGmNRoUKKMTiSJJSL2EWetkpWxoREYsdVH3xaxKnA8aDDMcHLN",
  "key19": "29TP8yaMSmAzeLbEVbjegTFGs5mHXBTsMWwGuFZiVDTyCvxwCXAzwryGiiKC6iTxutcaqsVK4xJpVHoDiQUxg2TK",
  "key20": "2JYyG4ePBZUBBtPKQB1ATu7seELB2RQDEgK2LmiL3oDeiBfWaJiPxVSiR81SL2daWaha7nuEY2uYEdR4icee94AD",
  "key21": "3kFg6DCcHKQcK2bzfBYTLXpuBmvpBF4d5mCb48t7f8gvEFL1dbAEGAtbr9b3rcVV392GHqGxWvRaMdWSpH6v4Mng",
  "key22": "2GckpGH7dQvA2N6q5C8BvJoKrLJ8pmDAebTSjx78AvGHKGMJznVFFjxmkPdwENZG6opCdYJz7hLsUrJtd9hVCu2k",
  "key23": "XxyeByPAc7Lhdank4myPR29QxT9EKTfo1AMban7kdhA9MLZmoCvYJYGxUXGRQJuRNLLLTidr8s5wYWQRjJLeHfC",
  "key24": "5inZb7Q7jtT8TFC5mQrqzR1yn4VrBMuJrGbRzrHuZkgeXS6kDhge23wMivca48zM8gzDJHgpAeKLLdDy43GbySpo",
  "key25": "35hiw2Go7oqr9CFcVstX36dxg5Z2JG8KiQ4sA7xtJzFY8iVpgnqPAwMEUP2mdhaakERJRUzeaaFcZDAcDhGZCcWD",
  "key26": "vj9a1e7Jb2ga9NdAGeasnA3oiQwefXAih7VJKyCUqE7K1YbymYN9MDd6vKkahuggDLHRCBbMWwfVCqRjxtwcFAz",
  "key27": "2gvpJsZsRnLCAXh1CdhrSjsrTUywPiHPM5CXfyHxSLKgX7f1PvoqH61ngW2ZkeS4BjbBbPt4uX412ciKPdunXsV4",
  "key28": "U4S2hsBwGwx2sMbvZWeGN9tzgeQG11mZiMTo12ueToLqDS6X5PaaHPDWuPhdedXNgkJRm1azogiZZ33a7Q6WuEr",
  "key29": "25V9Sjnog1eFhEzBK8abnMB4NhSoCmLDJzkC5sPKFRDN4zYDcGbD7J5p6SLkKfQUMEbrKeTvTSW8aDgSaRomMGGd",
  "key30": "4EuakTcMj62khXy737ozrGtCcSgngvRXDwaeK9KSDjseQ9iK8KgeHqLtUD6eBUvtaUhhqgkj2udBuZuEscc1LT1D"
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
