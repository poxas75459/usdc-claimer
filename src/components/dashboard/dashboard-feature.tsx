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
    "3PJcLnz9mLhntE6gDgFZFamoPw67GaUS2rb4w4gvhTSawkD7B5kCPhL1DATdUMsWTtWwF6zAYsZSGDzeePGHe7nX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4czbcmMdGh3tcmc5NqpTF1QM1M2DRn38NmYNQGiwznesvhMuRiMATTsqKCpgKosc6YkVd98F4AHYpx8CAyE97xYe",
  "key1": "57GN4JcKjeeSW9ofsgEmMuTvvzEXt67XohTskKtHaH8vjQsVmzTmwLegrN6PSYaR7zJYRbnZjUxkpYAbbYrScj1g",
  "key2": "3G5DmwmmqsSMng5ya4UHQ5FHUsg55rsaRqM4QXvGjtP8qcCoQFh6XnpBgRMmySUaNHr68Vu5e8XiwhGiX7PGx5gz",
  "key3": "5rfAm5Lqdihv46QUNKr4tJHs1dmAm8pWPa3QGWXU7cbKMFaEDW8XpgGrFGugLFHiDD1dv17o7p8D5Ef2MKMjCMES",
  "key4": "2GMM3jo1fZAHyxzzdnPYVHJoezdn7uTf4Ah8Zx797B4R6UEQuxRBKXLs7PpkTS4Djw1gN3wzRxxjmAjASpoN11W",
  "key5": "62RocjDSwD6W3NsUFDX5mbF7Rs6CiwEMqzeD6VPqMN1ZxzWws6EeM68x3oCsKRmJ9Nb5kJkE2Uwyp7dREPmkyaxX",
  "key6": "4VCKf7pWLBWMCgkJCuC9FpmELZgtsU8yidpWZxsDTn5SH4hwz4YhjR5WB74AYGYPwsAsSiFG5ZjbNQr2T5vNJ5DT",
  "key7": "23QzpsNTg5jjq83YhikkvMMifUgN37UDtLMVtM8uxEFfaVCNDnGto3HMMgbKTzDAhQABMCYZYj8ReYBPxt2v7P4u",
  "key8": "TiqVF6HwqVV2ifngJRMLymp1vJfNbHJwCoe9Q84MhZdtKdsryYYvooCQdrgSA7zYF1RR2L3hGCeBsek12VLM6Ue",
  "key9": "5uCMCxDpCE45MuexEFXkankiESB5YTL3T8juMqxccQ4qNh76cghKCZDg1iK7BtYUY3hMEn6V7ZfVWo3nzuWKN6ka",
  "key10": "3NmQJGYtThzhwt3nBSegnPYdGnrRM6rUXhfsJcnFTh1yPGu5MNnBCy5wHQWawSHiaGoAFh1yJg8satxJEhfKH6Lz",
  "key11": "MUhxhXPGqRjwCxAioNgEKQm2wBYJgSgQ8t3WU86cKFCWi4nk81kVw9MKJ2PZsqvHB7iN15KkP5LrTBLVWb6rPFe",
  "key12": "ouxA7QQR4wHpuGaQqQJ9en4srDM7XYKFCMDPWt8mD6h2sehpfoWvF9pJgVu5DN5Zt76d51Mj2asysHy7cLZZuyf",
  "key13": "93YpaBUzPP9ozujK8XGy3GWbDe6ykh5LUMuq3zAup6p2RyN9qbA958LPXxUV5kanjg4fKdeekUbwExS9iKo3HVe",
  "key14": "5WqXWGk2mK2WFeJwdYxM6eKy1jb6vxdzpTMHC8qAXTrP34zvJkPGR7WWoyv2QMdFm4YFxhX4bDoC9LC2umv3zMAX",
  "key15": "32YYWLCesfKEq5zafVxkq3Hw1mC2xRqgxF99ULPnZe36Z7pXxBYZ1ExfJNaKQ7AA1hcfSkZHFSbky6mtz9ByodtE",
  "key16": "5Wj7Yz5ecDPvtJsUkrFjmo2eGd13aR2zGEhfi2zbhnX4eUXAin5mchemakS3SNFCHkJvcntTbXEBPP5vsCaebU71",
  "key17": "3MmfjScPDRtHdAHJS5aQM3DQ5K6ypyzGhBVqvpv1KmLrjRe8gaBd9zMdFGzzwC9rMUAfFEd813fZEUkfEdWBbCPe",
  "key18": "4RBGikeuJS41cL5XVY7AZTCdPJgXMbTyudxK9cYRafiupWazhMiF2bBQx1todxMiaQoqQTw28ZLsT5JgEzSi7wtk",
  "key19": "kG5iGLXEs7oKY1Ag2DF7KERX9CAH28URuC5P8chmSrYerE5C3E6PTEu9RP73J1Xg3AVqKxYpoHFibfhqEuUgNYK",
  "key20": "29JRhzS8Kygo1bS6bgu6p2PZaXpuMNHi9TPJQXMpKVSyhGb9z26hc7sjAiscwCTqFo7QJtJCBarHhQ6Fiw8fbptk",
  "key21": "r3TvBBLC9FbJtjQozG42AjaWfuGJSPy7h5izepnPJrCHQ3QsDyQ9XEE1QKNzyMaFqPbebuzZKhWCvQzhq4GbtFT",
  "key22": "EeZ1NdVDrfbfKEWQ4Y8XSD8wSZU4RcrxqN3yRbbHpm1HirCLr8krMCCTtfUGqjBo2yfhhk4SmNvzgkMxTykDWgJ",
  "key23": "3vq9xTJ1LGho9ayuxbc6wsacqPZ6cFFgs9nEziGfzEAH9Pd7nhSdXfsQd7mbWiHpW2qCV5WAXSL3hUocaQJLrSws",
  "key24": "5fxDguzvyHbirssS9uHjBMWvibK4A5rwbtZvrH5NSPmpMZzcwFyoYhfmAAeKsqZfdHdk4gC2nRDP8GkhbH39VHD5",
  "key25": "4ik5ZjF7e8fP5rartBahWfUVEorJJgpMK7U4W8GmiYXmJct64UkfHxZBwCTYdv4PfRSXBBALz6AZmZBgGSmvAojY",
  "key26": "2eiTKEMpoLQAV9StAaeuNFfG3H9fPsSFhxFZAFo25oo6tnLWFZxkmfMcwuC7wipuu9zxix4GafN7s1fyLLaxe7dR",
  "key27": "45xnq4nvGW8pdf3sPd8d2aRhpwhUWBAxwGP324dJ73J7VxJtychuL5VLtSDVc7v2NcsHeaSHcRja52uSmreoXugE",
  "key28": "4Ps1SrhmmJz6wuSJh7uSUTFFptjEYXtSN9SmS1opwErDznqfMgMxAMbh9p29hNA3vwyoVrEnzybM7dSJp2rX6JLk",
  "key29": "ZBxKbFuBddLge634ix9EkxzBCkbcfCXyX5SzxEpmfd5J7eTyFTm2kYZFr2u37afSx7wLVmsiDAdb5jAfwfd3pU6",
  "key30": "5fdcr8GMgw4tJbguWs3uXNb5BAB7iW7ZU5NybneYmAoJTTMHqLZpUp8MLqWDAtUi7pboLWrq7oGEoJckKPMvcsZs",
  "key31": "2Ca3d93eUvG8Jhau3FS7JATdXy87XQP6EbDbMdkrm26U9rEQ1c7uiDSnPSUMSJn1geytHCfnJLUh9cBwEjGFJBjh",
  "key32": "41NHAVVyez6uWrTw4RM1PPeLND1ANGzh41Va7Aucuwmu8R7fh3ZgSK3VVcuJ7mRLMihp5eD8X8JNqGefULpw5oU",
  "key33": "BgUDVgmWExbisebPWngezDNfekRLNupKgtP8NUt66SD2g2zDQUfVQCHNTQrGhRLVu1BEyRLtEaz2DoBDxhiZWNy",
  "key34": "jGH8XtcsAc5Z2wDEzHzvWuwkwt2cNENQUYoJCDqZcvjryj4GSidmFCfhuJTXzQqTUEXVG7azjfKv5sMEot62k2m",
  "key35": "5kyyQ6cqMRFc6gXKmvd737N7v6kzC13fUw1157kbSW5yRwfF2TqmHbwyzbUgJeSfHNxWcwPKhnBHTnGigFRWq6Cp",
  "key36": "2kJVKLShnCnJ62VvJ9Gv8Uq1Fed8aoUk2S1ePoKAUt6hEN295AQL9QELznQ8hmeUJVHnJoxMU7ZsDUpyF6nJMbt4",
  "key37": "53Z3wuS4UQkTLsEuRsf2SfjoGsSwpQZF5FXXDP6DAxBhwUL45HVjxfGnZdGzmFM5ikqc6R75FLAfJdTD84qMWC3w",
  "key38": "2zY1SYt6GEEJaABG6PUUUo4YTpKtkw9GTCawiy3sAerB7UyZ7a8CtHQQuVtXPj4d5gGCBbcCnW9jMSebsxupazBk",
  "key39": "3UjLKzCSEzXBWCHr6h1JsRcm2QXTGQsujZ3WKQEoSmjHq9HXszKKmoGreaoXi7ufVf8oeZzyVaZM9LicfzQr6yX8"
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
