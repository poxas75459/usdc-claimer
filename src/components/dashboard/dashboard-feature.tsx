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
    "3S46qmbWAjQqYdr6jLkUBWsFXqEA4g9QU7nPqVyWmwHPSnKXJKznyjntS99fMH7ZQd9fbNXVMLMAHg8m9rd8oL9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hxsB5mzBHafkvbTgecfcW58ayK8xR5e757UefdQr9WmUfqRVABprBT1Koj8JnGjNkKv9BmmVfxih78DcTrsY9wt",
  "key1": "NbCB6eHntfaqsRs8XKPSgF4dDX537ApPgeKoyB3VA4xoFjhRLkW2YrnDsuhBtn1DMXSuqNVki1pmJYCbSvinSVq",
  "key2": "3wa3DG2opfB1KYF6pqbtShAsPc2PmBG114gfM7fcKkrFqFtAmiRAoFxv8GDdrbiLW4mARyUj2j3dFYaU7MCK6dSX",
  "key3": "Qr8TFMuWY1VMunQZ7LB45m1oeAkxD1UGUVfjwFtRFbEiEERur1AyKUQZD7n7b4qSvDBtvRgD9nbfUKcu9UpV2Fh",
  "key4": "4Qx4xPjTRim26usEc2VJE71nAPGyxm1wouCACrqaw96NsHstL3LezSKJLFmMAWQKZmC6XC3CPDykrV2zZ8X2U2qb",
  "key5": "pejZsk5e8pSmqiDM2YugggcJXKhNr5LGBeNMidS5HyEHwQWLoTnUMfBaic4gZunR9JXYrvzqcsfXn4aGiHYPPSp",
  "key6": "2UGDQFusqqXGepKA79n3AryHnyqv2DxEDsGUgpnye38QrUXGZX5FKSkCLaoLEBXgh5UoQXRxAaEHQ4K9Qmx1MYV7",
  "key7": "5BdCmmjLMSSfNKoZegUURmeJ1BJXzPiXzMLFUyQ17Hxth8CNAbUbFQViAwkSBaEquGTBu9CASfQ2CZ34tEiT9b4V",
  "key8": "4uFJfTQ15CcP7HLVM4vHQMNgcPG3DJuVKtz9pkepTKQPQ9vT6N9dYYYsnoQaQyxLCvYEW2mDYq9GAaxC83bxDb79",
  "key9": "3S25reWnE1tbYMLmUv8hnf6fmCaNbohubSWPMJtAbWZP1Jc8w3oMHQjSmcz2ZuweNp6vWU7ViRPDf1qK7oTd31xv",
  "key10": "2anYg3qknw7hjMWtcPHNP6hXp9cUyUwmEW51sSWxQLqqvemLq3P2ohx2Bd1JpaKmzAtoEDQwSfatHjEF186dKuPV",
  "key11": "4YmAQhn7f9exxFDKxyL8C6iJNx6NLnSvuJGgqFqN3S5xKX2YvSdJKKdHkrrXd5cCVyTaodnMZQgYHUnrVUDuNeY9",
  "key12": "4faTqAAs5Fgb17oXfSNnaMnZudtNnKHrUvZQbNGyaND9AtpMD2banEKGTFNxrpyenvdZi8tbP4YmrD8pewcrRe33",
  "key13": "59pF19jZ9y9BfYZCyi7ScTGeuLogJPELy4EXe6w5ktKfPEAtgD9Jte4a4q1WWoAa6yvWCsjVkBLghwHLfs5DyJLM",
  "key14": "2XivJ7RRkjBHSE2AdSREiDE4V4rfFt8YptDWekmtghvmkAReHjRkf2449cVJb1dxwtyqss8nqhX4tWFthoBWtANS",
  "key15": "5kuiuP7J8c5rJizrQPdENxdb9xoFpzAyB88z1DnZAc38pqCgWF1t2RfwaySV6aypTTDQwyD6svEQckYQ6PxhKjtt",
  "key16": "4Sp5bxMJS8XS2wPYnos6WP7d7VbPY7zUSeKopD3f7xYXT2d4VGVuz2JEgeVGSbWMqYS1ze8Wuo8RiMAcsTZHLUM7",
  "key17": "5cmrWMtKZWPQBEBNLe4W6YTQPgHqAzNpT1z3LQdSfiQMMumqen3KJ1UdhZ3XE1LBjzZEcQim3RrMF62xi2Hp4ykG",
  "key18": "3mHWDHd1DJ7mTPghrDboqqVMcwxUQ4ryuLov5Vd3NpEi7ECiLLcUmk25ktuDSWzLCwur2RtBv5r6hGXpRBK2aE8S",
  "key19": "3UWjDkdCkFgzLaUvBoUqzTWANmRhi6QJ6muQJgG4BkBXbAE6b6WdT4Zr1hwWf66pJseo75YCiZWFsQwwjJhW74k9",
  "key20": "64LgzuVvE368c1z2nnoBfjVrXVDk71PqodTPbz2Gx45CMiVRffY1hpqghsGAsvVNNiFJtEkVX4WGstox1X6SKgpM",
  "key21": "nYv45VEu4qw51HAMn9BxPMGH6PhDSoF6V5Dd72bVq9zKt5BW6kje6isrrit1hTbNMqDcvVDk1USHQw2DiT28FXM",
  "key22": "2euWG1VCmWsbfeUhoqyCRpzzpiuJsHLGLT13SEYmXgyaie3h7dieqcjDj4shwaMSeyJyQg4MXpBwbHR4kUjGzpkw",
  "key23": "47toW9EUFRjfbYziko2QaQ6A78xSeFkXxFRkVHiuP81hVtrAjY5fpi2qRDEf16JDMQ6Ra8G4WmrguNDku6MQAR7i",
  "key24": "n5YnMPLYajnjhSkHZ6PcC3Q9VmeiG5AFi3yu5LzHisUN3pF5jQSX9psbRwhRXcqbruaLAgQ9NkpapKk253MDY3y",
  "key25": "4vGPBJxzXKTz8thhLpe5nCV3ShuyiG5YS45DqaSfXUBce4nAjRnExB4cLSNkW5Eu4Ho6cXkjwTH3DfMvMfGnpm8W",
  "key26": "4mF2UMHyQhMS7XsdQHgYDJvobgebyZd4ysvpPycjnThKAnQixPTqYv8GdsK5Xt1mF41Zp91A3BRkk1iDJrFMq32K",
  "key27": "5gwcSDVx4mwJMVwwK2NnBBSzELJdPhV6dR1M42ShmYW9vDARA2xxcm8cXJ7EmcQhBNnjC4n534fPdkfDabQfiqVB",
  "key28": "4f2v6d7xruULY9TaqjfQLppvsmw7mJK15ryAorHxxzEj47NFkoLez5XMYRT2zTp7KntHaatmC66yNadyU9ufssoS",
  "key29": "U7HHxZSoHEuAu7Yujeb8mMf89ASND3zx99PFAURaBGAQ5rMnypoWcpEftLcVZu5ZjyMgoXCFVdiC4BNEpVT5dPW",
  "key30": "r5CV9XmyxQS61dX2kFnq2d9hSFh57CNz5rFoPMggzXzqqweUiJ3xsW8mQkdG4teFWSfY27Evfxqzhp3mSpT8cXt",
  "key31": "2C4GFJRmxg4dZf7SAbNW7hdETCH5XY9Cnc1ju1ZegcHnw6niGuVYBKFxCwJNzNhmfVJGN67f8NaLdF7MX12JZPyC",
  "key32": "3YaiWWr8FJcPwmw1tH7H38EZmg47gdXkESz73qrZSW16heukBQoQ8piYgrrgdBuBYMZkHraEz9z7UESgBBf7Da9t",
  "key33": "3XKbmME8e3CEYJWWYeVM8azicoEP2CXTWUvkhH7jMW2bAqQKtb15JtTerrMm1kpgZPPCiNMJncB4UdsFTH3QDyNh",
  "key34": "4JUnoV7cnh8Mug3vnZubwwSE55YS5gqt2j3LUkovTWJyFJj9o7DFDXkFDnNP7DzcayrgJmqTZdYm57P6bGfZYs1b",
  "key35": "2e471Ab1npJkWxbRBDBnjAGJw2C1rfVNFqXmNEfURUkvcp4uwZRGtH4z2htfZ3BBvzm6wfrtrnTu43bj5yoXsPFk",
  "key36": "4cVTXFUX4ipXqusAzD34pFsaZyppKtkXXNcQ46p3nkCMuo8nfC1xU6D2T4g67CicbnurW863bFvWGTZF4KpvYadH",
  "key37": "5XBLh3GTEV1s5KZjzyNhxTGTQNBQUB1EBsdKFzBeDGN55G3sh8KEkuNVNM7ZMzou9rcQmggDWHGJGUhGjustJjEB",
  "key38": "LcW9PTFiF1a12LprFJyESmN8vQz9aL9VcsznUYBpjiUZGgHz6BbDnDSaEpJCsLAqmaRBCtkaEgRnoyWMn5HYZ4D",
  "key39": "5UCJyvKTtJy6Wf3ei2cGUn65ydk9rh6gauuFMxQn1f5o7apbh5iNezB9tncn13cwtFZmesBJarWzRgpSwYMZmiD4",
  "key40": "3Wr8Abg1MmAF6yiNYeJHxRcShhcjUEVeE8u3BoUwBRehSvVuQQPmFucp2RP5hwCDgfmgzmsrQjSZ5487gxQdeoYM",
  "key41": "4TjhMMNGMfePA2XawprB4wn5yC3ap7iYZNST1NL7KuhL3dm6mxRd5bS5yJCFktEdukpqEGa6ciQPeEvZxTHCpxuR",
  "key42": "3g6tQfL9xUbvAFXqFSgCFuxA6ttkFeSs1w2gu2oLHC4CW68tnh12bbpbiizg8KKthyro4wK6V5ean6uTZD3rmpmm",
  "key43": "36kcSW4vCB1T4XrR7BB9NNzX8DZsyCiuxNNFWJnyG25qxLFq9Rdhp41fVbjsBGPfjPMVLAdjk9VyRzfA5K57cqaj",
  "key44": "U1yqEP9MEz58XnXwbyQk4rRbWnWP2uip9G7q637mRWYEFFZpSQERuXXKiCoR9tuHwG2Ukysvkb5Sh6wLYSfFJRC",
  "key45": "4CtK2Cc83vR3jTQ3GvcAg6jmg9AKeZMdqPX5aRyDUid68QEzLLSAZ5CY1YzBh1rRuSqVK7ouD5MF5ugVdcvtsHRZ",
  "key46": "4QQ4XjcuuSigELwubs8N4bG81vnbJLF7fe798n9kk2MWGxnZMQbGoXBpRGCw5TTdhnAmrU8L1QcXVycj283KseAf"
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
