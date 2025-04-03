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
    "62XGPrGdpKE78n87FRGkDw5FrNrjPrN7r12HHc2y4EGbTzyTrk59tqqAPPUiBWBKzQuZe8F9AhbETghnT42Px5LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wUriBEmem4bh8va6L53D87jQbHJPHYv79xrbFpJwJfmf3yPZ76ThC6abfMaXUdcGA3yK1sQUUkpois5eE4aY3nN",
  "key1": "5qRgzXiWTUvFPBazKcCU5uqzK9rh8xnFa4GtndNcYJ9nMVaZ3nZtYEMkLmdoSSrr2F2xAxnfwG61JWopfwcxZyvT",
  "key2": "2ajJoYKkgC65dmKckBmHZz2czaqSPTaprG4tFB4sQRkbB5D6c8soTK5tq3gKJwBQEeSs7xjXwnLrnpV2nhpYnruT",
  "key3": "2WfESEKPykGyQN5gm71HbEVpFtUfNqWvLrdPqM3YJMsQayz9ekuSjTAjr6pwAtKbP7RaXxyh2pAsB9nACFcPnK1k",
  "key4": "AVUjtSAidjJfdN2GTnLztJtEVwMFKFREocf9LmVwdTrhW2cR4Vn3oUpZGwGWi6N4utV3ihx6XHHGBCanE8S88eb",
  "key5": "4JwjrjsAwNSEBGRM26RztCLahmUAKQUGWKak14PUjtgxSGNN23dkgWhFh6tMnzfgokrsmgULJrn5cskRwGVa89xn",
  "key6": "339CB5b6wSttBo4XJQFpdUcF69ZYd31gLCfFe96jtQfzCEhXVZpPNQJhK9rucSrgqX7GfipbpD2gZYZWbnARMWac",
  "key7": "QHtpdoPSxk4whH2zxC4AsPrA37epx1n9owoxP1ZPWFN4qYDuY55PfGCuHJQwu79srENQhhDyCxbVaV12NhXm3vJ",
  "key8": "5dAqvfashwVsyYatTGrqkRdtDsz6DeRq9hDTjhrdpa8f9dmhqN4Y6MyHyQiA1PA4vD2DX6rJK9NVfpiHQscAtAHs",
  "key9": "3HeCqV7viEVN7eih5pKnthyr9VQDkk6tPDRhyjfQRmCERC5SfogpPF9aCHkSJdbvBpFaMN5Gdp9R6aqjVHeijNKF",
  "key10": "2Y8FUtcJc4Uyj9fJdrkoszskrjc2QhVEnrqowwynqsj5xkKrbn1gjvzfni97zRzPgmAHtbAFXZpYZBEvAaG4s6Tx",
  "key11": "5NVtJr2Wrk863ajhs3L4mKz1fsLq6YJC36wjzpQdincPdTnpQcCXdBaRpE55aEMPjiy42bxqjQVwVrN8UwLS3xM2",
  "key12": "4KNoZc8F9qs9Eajkr17YtMk4Eyb1tL1LMXmY8B6PNP8oHjPFBBzKGoJzcaWA29Tw7nPd7BvDqT26F5CMeeokjp1E",
  "key13": "3E2LEsgU9dP41aFqViB8jwcwGr3jTh1FTtVT2Xt2ySRs4Skd6qGP7QShCqM6nan7moNshmGeKZr8kBashVJiZ7vF",
  "key14": "5bczDeMWp2i25zReSFJWz4oxrPvhqX1cJr1mGgqckPDepAybY8LMLqNpamn3BMK1eg32mf3QTnLjnumGHd5PGeCG",
  "key15": "3sMCSnhadnF9JnzDX8Q5vhCKrFVg717p3ADCuxuJrfpBM33vfX2QqmAoHAGDLte6ZA29RjzNwStF6vpi36kAAojk",
  "key16": "r8ET7ke7T1TbmUt8NHNXCLm4upMbJRonVoFY6jNT11eC18Cih36YWZzGmGysK4f4oYVrBsJnpYneSB1M7iM7sLz",
  "key17": "ccQxmBTeJK8BhTLJA3grsS8SP2gRR7JA55Vy9gcdXvdtbDjVSRt2qy2o1tMLv1jya4qD3U9VsH9LwaP3TwtLoYJ",
  "key18": "4BiD6UhE9h5ZSY1fLnw7TvQrPVxxV4A5TMEcRu4bNoZR83bjSNWVXb3KQhafFBYTrDF9w7b3Bk4SPEmpdjxXxAxs",
  "key19": "b7NeFGjfwtxT1dTcgonqW7zGrNWnyhCsyhNFe3ixV9DH4aftXRh2fAX1Kuj1LH4giRH4WgCH9Cztph2JDMVSK4o",
  "key20": "4Efrw4Wj1iMBHNr13yrrV6JrtdcbnwtKPHyN3n5981khfFdyCnpndoddggzFRFE58iYgaL1oq9sNsEFkiHHxi6aF",
  "key21": "4pywTYMiV12JvTMrumBhkvyDw6ehb3MHScFTTi3FvQBc57FHtjdcm3gtBMMDuSjea1sf1TQ3ufxpfmeGtwK2nuLt",
  "key22": "2xXZz3JNDJ6UnDjUj3HcACUqEuwvVcHsi2YhYD4Wm9eD8iHtKRjNLVjjm3QCnuGkgTsUhKnwoog5x18jKe991jDc",
  "key23": "CH9PviNDzjpTCUETSDavohezgJrxJw6GdLkxziKppedxxobaNtQQtvPESLFZTa46NXbJfqZcCpXcify9FhdZXF2",
  "key24": "hFfHEFAE4iDZSo3ygGKiB9La731vGb72yZn9DsjY1M2EFDiz5JKUZEKatc2ZCh4R3mAu3U1auksATEUEThSgZ4v",
  "key25": "5sxHHwzrQX3V3NxzJvaHC6zcRNVDo6aByhnaYB9j6N1JZQ3uj6bNWVGx3BSN5ha3GoVeuMYCwUEbE3gdNDPNr5gj",
  "key26": "3ZSUtfgzykf7t19rdY5vTZNumedYud87Xm6S62TbarA6Hvn5vwCNcohh8wNBKJq3RFLQ2PydefC74KZYP1T7ppgj",
  "key27": "2VezvGv5Tzwhz8SJA9tAVmrTVqMMQpzWKV62mMifSCP3Kfj7J5R7mG1SGVMtc1HLar9H4VaN1YQjBTEULo5Pbn19",
  "key28": "5sqVoUZgsfNyKZwTRQzhTEX3mU19iJiLVfp5LDjsBcz8hHfvfXGzu8nyXd8PKvP2rRk2mrdKtUsH8i9wz6ihGz4P",
  "key29": "4zBVkXJPvXvVQ7JBdK4mt4fa4j5a5uMsysPH7vSN5kMyksdsDCErKo1MDcbgosxx1Yp1N33ufbf3QTRv8J39Fyqz",
  "key30": "sZLDG2Y3i2THy4snwz218W9VxAFeXhRWf4qR3vdpxHdAMpsQkzmQxHydMivtnoZxbymHntSgHXZrVr4JyLmwugU",
  "key31": "5jcZQ5RRPmnnEYmVEzk6jvTeXndZKDQpri39zUM3rz12PzcertHpmFXgoKLHuzQKKjyfrQy9yeVbtAQbuX7d3ETH",
  "key32": "5Vgq5GPCRGC7rgkMn6kCyGmKw87cyWg2oKijp3DBE2US97BxCr7STivF3XZoPCBfxtJnYwRSxmxFJt5TqvzWzgsA",
  "key33": "5S4LR7foNzzhC2cDXiAuTKzsQctwCWNbahr2fEGVuWTwMpTwa3ae4wwA6fFZT4GNSHUN3kMELdTNEujxW6fV6wUz",
  "key34": "49i4vNNNBRcM2HdckRUZc6pS9UYLTbJMGMHFDGZqj8WX5yavFVyGuBfLvojvvpyKEZwmbfGQtX9pdoqaRwuo6aFo",
  "key35": "5bDpMMiL4PVxDTGG31MMN18yYXkqPGPGd1x4J7TkWTDHPrP95DMp7HCQCsrg86yTd6RzneqkL7Am4DmrwTaenns2",
  "key36": "ese5UmSDVTxkiSAccZtuiBrSsC3ybfKrtuaTsoGWzQmVkBi52rVGviKWSVPpnub3fLZFm7XrhjkVyoh8PR48cxo",
  "key37": "3trPVz8S18ZmRRX6rUgMMBWRgGt6cw3QrhtSHmsBwE5qbNJQ2MoWV3LN2MDquLHP6pV9DXyjvDwyEYJeG2UybtKE",
  "key38": "qo7dYrX3YFKx7csxRw7pybMsFjH2xbc6U6LnQ9FxomuFVDWdnoynsoLCzjGu7a8k4XfTCAjjGw3rgmq9KaVmGY9",
  "key39": "4CJkJ1FJDL35CQz3rXVPEqozjaAAyMDz2z2VCKsNdu2ydJDg3i6mfUgTMNcHuuzB3XnhsB9M21CXuRTHZw7jVK7y",
  "key40": "3VLqoPHb4ATXuTa8RbayeG4VxThW5yNyzf2rYrUPQv53zPJ3yqWxYPZCADzrFD4gPg1suzA6xiPBW7jLKo8bkWXj"
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
