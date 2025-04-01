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
    "42G5nSjha9YqisPbYfrtnYFGQkEUtK8jXcopKYr1xH3sgteAGWPBgN6XJd8QXKgC2vxJcd73rmhd6De3AKcE7ZAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nFSX7mRD6GwoxYnKzSRvnKX5xi51C2M4avKg4jxcrdrc4wS75wvkZgEKg753tRGoY86VsHwLAMgwkKU4z91JGff",
  "key1": "PoEvcJEPTyd5Q92gGVHgeVg252CrBTFpHEo8R1CGcdjEaJvuVux9egcixXcWD4zKoaanc1UrdL1A1ytLbbgq3x5",
  "key2": "2mqURhnkuwwsumDmR2xqY7nrjyEeegUspaAsZmkYxiqHUGgNFJ8Q39EZkaqNENuNT4t3gSQRGioDd8mx9cj8rSL4",
  "key3": "5oUHVTabAwiHFekgH83M2J89gcxwQKhriKY6C6R3aMHV78MMMX34nvyAq4RpDYKcDQUnEwbf5vkRMUrouJwzxiY4",
  "key4": "224ECaLm2GirzeQ5rWEYMsSQ93Mc5WsSQe7Q92iMiDkVhbTdMRZo9DY7PBvMT9X2nSj14YqtgYjFPQXSBFoUZLA8",
  "key5": "3iXDMG61wHGZcCgzVXfbP6Gr5HYHHH6vfj9J5kcow67VUsSn3rqTfcrEEFaEwscDa38DQz9q7PEX3WpJNK5tR1yV",
  "key6": "4qBhdwtpXXGry6dS5gfEdoW2BTfMBbnWvDHga6MiZyDFDqKTdZMp2mNJWrXRxUe97jYSCKwA2oW8BEPJnGFv8jfm",
  "key7": "FfTyB23RcH85sfky6Z4mPcVj5BaiLCiLLqN38dExYHiCJGaSm6S94bYPzTSqUazZKb2an5nYxujnXWEVidv9SGd",
  "key8": "2Xa7ZhsswAFHeWkVVLgBH7W9RH4Y53DBo4a23XHzkTiS11cRhaW1d59GsVJNH7uEZenvTiFT2k3KuDa5mgRnEEX2",
  "key9": "4A1XN6AnsprYM72kfzj4zyCr4es7gBqdFgg4LJMDc9zMzfMPsjGDAmeg4A5EVdX3vXC7WHvpt4qbokRhjHaBqfM9",
  "key10": "ZBSwc93tfvzZZjyKb9b1h2oWo7dNH23svqYTgxUUyMKhPE9LnUpV1itkWteMCUwnpmxuTyh2LVom2dNYd37bMQc",
  "key11": "5fFYMrZpxTaztn5ttGDAEL8G7xnzzBj8tsXe7gaCPk964zRDaAnfxBA6QvYTobUz9KvMdm6cf7yRS96H1BiU265H",
  "key12": "5TbjGYMhAgL6xrCoFE24a53MLYLMgg7xHz84HaSxCMYxK6FpTsa2mterhe1o3AJDdzWqWGzQnuffAfNjfhNmbR1L",
  "key13": "Vypz3RKqqDiGbRFeCaj77mNhLS7jR7tZBzLBjoSY2CJ1xMCApvUCeqz2bvUWP4YWbViseJqQSJea1sjsBUeFE3E",
  "key14": "2EKAVmcQWnXv9brkHwX3xPE26h9aZboygsNBDffC17XcNuFZPtSZYZvjVqB6gtVVjag3ndxND8G3hQxCMVRmerZv",
  "key15": "57WyUjyzpEEEQZcyUgo2AwTvBBGucej5wDfJXBoVSu5m5hga92ddKJrhCxhyQmspxrGMUricZKo3DpgDhyKWP1we",
  "key16": "4n5YeefLYqLxsGNepBY91hqXoyEpkst9Jox3ANVDFjhkHUFYUsbfShxknnkg747cZQ5SoP6u3r2PPrVWoRKAyKzj",
  "key17": "5LQnwinRkMPnHPcn6k37ntMgKJoucs4KHDRsVjj73LFVp8ybpHAHzMiysaKTQREi3Fyw26mBoL67fpzh38RhSbTP",
  "key18": "2dV62Uc2kNrfBRduxjsYDnvj9Qoc4m8KeyJbQVLxLMVpJqBoihUG5A8bRWbQh4GM6NdavdEon9HmoSfZoycXEG5e",
  "key19": "3SHpvMXKcqXRxD5aSv6m2AFhSTtSZvHjxzmioTgQpA5z32DPF2D4tCi32h1BdZV3gty8dgfQsHfqvnyu36sDG79N",
  "key20": "29z6CEDLSY2kQxD5Eb5X4h5LKEqqJv3SVM3Hbxnn7pUBF3n59fPpPh1J6KZNPGuhwszhf6ktyS53xdEjJXvjBpdn",
  "key21": "L3S4wqB3Kn6HUjPqe5BXc28u8AmaMaZJq4kZqTQRrWsA4xYp7ya4WpUfswX72CwBz3L4XHyZDLXVWtnSayDbRoi",
  "key22": "QZQb9VFkLdzANsSJuFT9KCM6mK6WhnviJocjevCHH1YkrfPsFbsVFY9Urn8Q5SAwBb9vq9ZE6VJJhLKwhhjDsp6",
  "key23": "5HZB3Fkn8TiWe3XyP66MCfYjtxPsPit9ZsjaZL8DUxCFrY7QZTjzHMnpvcgQwNDczdpN2tTkWha33GKiQ8r2TqLe",
  "key24": "LRg68d3ZNczdeJY7AKctbJ2i6LDUUvt2XSKAByszyYSnW6ET2tTWbhGqXNiGFq4xQBd8hU389EixHKAc6vvczjt",
  "key25": "4ew5LHGcsrrdaJWnYF4c4GeysA7RAFyCxcnBj7FH7WR6HwGAynCZuBsC6UbbkgoyDVuJwe1zAUjuKTxPNA7yNbZn",
  "key26": "3mc5MBsMgtU1nmdeL5rgFWn41XFWLtcVHxq6pVBaHkT7jZLZqshckZ4hF7hHkfY1g9wwfSQdQJc5Z3L6etp75ivi",
  "key27": "ygYXKEdrB66eKtz3NyLSBFJjv2R4Yy368MTG9GiFVm1M7vM8pzSgQpN8BgbNWbQ6sjpUWd1fdk3d966wdMK9sTH",
  "key28": "qFAM1zfkuRwuqAQ69QdwK1AstriLcaccwJRTTS3FfxocxfwAzb6Lxu9k9sidz2jadF255LYontUEBugeubcy7mv",
  "key29": "511n37gbXwqKsTH57piAFCWojydizqPJmA5vKnRLqmXk8bunySiQNkudQdr9tgDrvzWYg5TXUmLxxAPRmxgQNaJ1",
  "key30": "4quaPSmwUqVLSu2w8PVpo6nn1RbwXoEsXNbTGBdqd3kTfa9JdZVHCrM7SY18L6gfeSHfsCAUuQ18BfHyLSj1uAqE",
  "key31": "39S9TW2zj8njViP3hWjg5CznJkug5eLfi5wKYexr3mHEKPsToaS53QASEkkwMpZMy2Xrs8HToAfkxFpURn5E6Uk5",
  "key32": "mmsULK4b9YDf6yHZeU5EUqfqReEk3U5thoRHEvQJFBRcyKkeaehVu45uNsDb4AGrhhVaZJFUDpCqW2z9rvQq8bV",
  "key33": "3Wei7wqUvKuqyav3F5gXCNd9dmG8ATxoa7aALpxq3QJoYGM4JnjsfPZoJxVcwaJ8vg3Rnpzq9gULA5iTZ7YMP1MD",
  "key34": "5xz8GP3r2iCqvug4noVgMXjgdDFak4hh78xzidU6H1SeN51UZhha6ccL8kteAvSKfVjREa1xJbqqhbNgRpTMCymb",
  "key35": "p6wKZA6fNFpx5WMFvsnwPAi6DkxaspYSMPrPnTJQ1TPZrX77suysp3i4T49YHN6GvM1aJCy6zcgvoJRSP94BuwC",
  "key36": "3Hi3FSHx8Fu5NbGMtEguD3uSnVKewJrEzPCrnWcUYYMiwnhPVpKXZFavpzVyjphkUb5ADLoiXnM23i21FWk8i7X4",
  "key37": "2Qqv1Q26vMQAoLCqHKzW2pN6B7HR9VimySru1inVhK2iTiHk63Q5yyhuWUWQbBC83MaHJY44zModPt74G4eH9oAo",
  "key38": "24qtShgWRnXe6WCEu8ywSn33zgJo8uhkmCSVEJVwcPM1BXmPCGMvAbwb6fHxsjyCtQheQzJ33pjaXWUJV9pDyt2o",
  "key39": "7j1kk8WcczSUJMvCR4ERR1tZr6cdZ8EZy9opGN3ZhH8sqK5kRgJH15D3v1Ud9r1ffP2HjvGaijB8zKAuyN5wtRB"
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
