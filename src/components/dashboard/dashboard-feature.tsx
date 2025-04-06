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
    "3gVMAPKY8vKYnjLVrkgXZZrRcuR9NiDoP3aaY7XCurbGo2AKgyK9ewC1eeKo2dFPEWwKhnKm8Ya3AbMa96AXsYeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kj8sieptjbfNfKCYHNka8EGtuNfA82TtsQQTGvPp7etowYtPV5QdVvr38kyF1ZioHspJN9CJCpRY6NpNsCmpeaL",
  "key1": "5LGiJE9tADzVfaLPTpmcA5UKqVY4u13GX6nPd28ikci6qqkPxy1jmtGD5Lj6UF8voBbmMuYQVNnqBivt29wW2x4",
  "key2": "hBkaxaeNRcaNDfGfA6Thx6dPS1kcsrDsArYwkHUXuUkvireyk1bB146Ga2RWWmTdxNYRktZHt9CQCiMfpSeEXQe",
  "key3": "4RBNjV4cMEFuaRdAPqAgrSBbfqDZAdLKsqS94eKMm7c49JBzHA7vxyuo6BRtHWkdA7jm2K1NxLbwhLSjNTK57UQ6",
  "key4": "MUdAgxE4EqeN3j8wFj4kbiZRrKahok3AnVKSDj1nQ3c71kzTAqB1CALBk2Wr2AjSSt4fiW5w2ao7EGcSChQruM9",
  "key5": "2gheLYWUGMeqDrV9SRtkpsQPxMcTxy7457X5b2SiiR8PdnXqySvPzWK1rPfFgKP5Fq7PmEKAyom4aG2mtAEeFHeT",
  "key6": "5R7qhz7tc6wF7mTawYf1Hv1VPdKjFfH2KDMEMjQaJpcrkBT8eah4cVvYcEvxurYpPz4g6Fnf13ixwpvqinRfp18y",
  "key7": "2gA9j488EuGpA5QxbAirxZxS64TMFCJgefw3C9fAZGrQfGP12gQWVHErZVTn4Lo9Eco7iftBbgY1mg2DcHY52THv",
  "key8": "6aUgQ3PMYhk1QfeRrmftXnhGVqLbcUXzmkwY9J4vyCYHzpQmDzjwFx4JMoJ3yQpSSFR6WByng5kYX3o734R8StT",
  "key9": "Gc1Pdc1uJZL2sGcxza9eXc56wrhMCdvfU1eMa5GgikAVmUqcd7r2fppKvSFaV8K1w2QpUCum6fVPtDtFhPeNgJj",
  "key10": "5FWG5wZCkSKSqpE9ypoauqydDot66yC83EVHhD24ZXWGKZFHDzVnDFCDJtwF6TXwdyRr3o7CRrUA5irxvGtwYLYF",
  "key11": "2sJzUfnLMoWyxzoY4MFhCLTJVSoM4RqEhGUChFK682RTw2ttz5ff6ptR9e5ACU4Y2pw7ctqfyfCZ1qtkaZXDMV4p",
  "key12": "3yFz1Cgbm4c2dheYupyMQ12iwqvpgsCdN4Qh63aL7fnJuSKu7YEAAp2rgQmM98KWu9kT5zcpatc58TaerwtxwQgX",
  "key13": "4DSQ9gx8Jo7cawupBLpzrxJi4UWTVgkAJaUDbmiwNDbMq6G33TohBXFfNGojBwK1onayV9qvJ3FyzNupnjwyMmcZ",
  "key14": "33WPmi3sM8fH7Q2k6jpk4Z3yUP1KKFpzvu5FnmemmQMUgnP38jWuGK7a22v2LRWTNNAgsrXB83mDfpk3qzPDYMr1",
  "key15": "2nPAysU9xddyFEwjqUnRVVu2c7GKQ2nKoS26ursAr6enCFKwxDWDEmXKuWcd3ZF4higMqR9WLB6GNdpW7KC7GiVL",
  "key16": "DLEVYxQxTDk8oERfsKdJwRgW9ttctV13s6yGJnxgrf4K2vtMJw4V4RUQ1JC4Px782WqZYXvsAtYq14c7kfW1BCz",
  "key17": "jVVeyKjrsmd6JmqHkPqpSjXn7RuoDdwoVF5qho35Rh7ioWYLb9CAhznAiWXiXqCh2nR5nhSmoeMo66CrpbUyWtf",
  "key18": "5gS6nHMSizmKDpT6xunJ7ydn12NQTWg76hMEb4xcDB5G4xYFRt7bWb2CKS9xyx9B8UzrbDDTHCk25t6dY5qdmtxs",
  "key19": "4GK6WcFJdWNQZrJaPdAcJBWSun96gU6hZcFYdTuf8zPRJGBVRpsPF7Tc1bGxTvie3Lyb6Y9MBgdNvpoRRAkiWJv3",
  "key20": "4tQBFF6gUcxWjFCGxSePLWojcHZny2zn1wYaKPdQuiUur1PyD8wJrdnEZRytbNdrZer1tooNkZMUBaawYKRpnLV9",
  "key21": "3dkPyRoDC2QRqE745odCaUJ4ZXgZ1e1DPAKudAnT4eMLLbhFUtSB5wd6EtFM8jkyh6QQEx9zhmzETMac6r8eTgdk",
  "key22": "2Uu9nieZ12VvAXeRkr4n5KYginGHouL1gGZFi8z3edUzHSXYUgzsTDemou9RrLExrmj8VC1qzX1XjzKRDA7ijbkg",
  "key23": "47e8xtWCLFRLsNyQ82iwZ5SMxGSjFRMXU4NdWWCYZbMqXuhGecj13L4ccDK8EbZ8kDdXAiU8YpdQLESRewhiTJeU",
  "key24": "3FgoWoGDbRYhRw35oJH8VFua9oYVdbymoVQmDmdwvfs3BUQJdwRkWyR1DsBRVtB6bu9A5kBJEkzL3uRLFFnrEmbd",
  "key25": "5m2qMUm5goMe7k6eE8p82Kxsv2c1zhe8EH28WZSmhHrttCunJG1HFmmk9QwdHfzWQnCUCK2ATVZ215h33UyP7Mb",
  "key26": "4P76wq5mtD3vAAWMzvVo8xRinZYjg9UoY5DDWAgztG18HGwZbnUZBbPLqWHNaEfCC4kC19kzVP4T1dYYszQQXdU5",
  "key27": "4K6s9rzHUB1TFTzqP8Adw36c53NPvgZn5xvHCHgVUo1fmAhV4BojghKyfFT34HKfnnWAByVqzpm13yKWRaKJMXym",
  "key28": "4Xhu6XJjT6Tit2hfg3TyXXffhd3bETgdhbgFVei6oeSJ9UC2xvDNBS9dDoE8xuBXH8KdU3uPk9WffgaW8C4RMkvt",
  "key29": "5DZWr82mjuoRUAF5Y2HGFUZNKPLRk1Tzf6pJYx1b5jdFAvo43E8f6WT2P39yNtxguHg3fBGKwoJhGxkyYLZuc1WM",
  "key30": "3vvYd5pybekqdyV4o7CzGrNV1SfXxTXFdZXS4Pzarw4XQEraARJRQusY5cHZhErEMyHMV1KVXs4FGXkAfrZoJkbV",
  "key31": "4abrens3Z4GkapVb2BjzkSwZxuPb6n5NFLFBN6WwzGS75KBNn2mRNSdGsTAzCgfoio5ETcZ1oJBGsa1kgVHyZDRV",
  "key32": "3UbrbkEMU8rvUCERRxxQbA2N76fdQZqZnUW7rNGDcrC5pAype27LMHRcATHrhLKgACd3YpVMLRCaKJKs6w4ACNH9",
  "key33": "5juzor8KNgqndfEN4vYqVwHzyXfmVxENwNC7h9uS6NNHqr3TbdoSbPq5dQXH9fk1Ezq6qsCeKZzyC9iJscKKavaS",
  "key34": "5dSrjaq36hfSREhc2o52868aoqpfaRBW25WeWZgJv7LBfoXJRMdwK3L85sg9P2oTWyLq1Z5h7j5b9iBCfUoQmzas",
  "key35": "58RwhXfVFnfLcH5U5ubecoe48ttApw89heCk2abe1fF1HxoJQ1p182U91rZibt3B177DhGhsL3ZxZTscWLn88Kkz",
  "key36": "5U1QBB7FoA8CtQW3J1z6nJzLq764qtoW6EpU8j5qdT2H2bmxMPfCMygRrbXiP8hdoNhoWnQnjAZJTkdNeHrHZD7m",
  "key37": "Nbng3J3Bxz8iR3i71tYQj5B3u9Lu4XkH5iB5wUccfcnA3gNXbNTu2zit4jUF1X7ig9j3oqZZQAqjZGGrPFadKUJ",
  "key38": "28HrrEbqoYNFjEBnukczFRhN3pBuW67QUAvdLQRrtqbYRzhTgNzvxPPxHzTPbjuRUfrfWHEei3dEaaCisa5utKsd",
  "key39": "5JZFqwNvPxCoqtAQCcS588yG1aEUG6KiJQ1uUVviJj1QDHMG87M3yau9pa4H4yNXxsuMWSeARdXbzRTSFA6Tzhya",
  "key40": "xSmWc6bGsDvhTZSrEZe48yVZzuYNn1g5JvQJMxq6KQTKgFmypKxRUzoVdb8Lyb9QYrvNCjisB3TkMYjW6Xo8Pf7",
  "key41": "7mzV3zqzyTiDkAzsBhprUaGcnRUh4GkB9nxmHLNvmpuNgH8LT8UPe8cg5q3yjQSZY76UmXo2nvf2ajkuGyRsCvR",
  "key42": "4EReiBZFaSwdRA5mJTk9ZTEsuaTZtxxBQ4XCMwtYYufvMdVwNyPHbjTxBJnbzbzBvAR5DSj6NRrLPx2xjtoJRtKS",
  "key43": "4NZ5qbepwCNveH19thbMfwCJW7eZEz8do22j9SLQmoFXwZq4gitYD5oVqppRny4qxaTUTcdinzgq8Ng8ZtBcCPnx",
  "key44": "5wpyGGUhU5jakpK9UMGFJcknK9vKnsqHcgn1wPEJ6jARwvwR2qkausFWWYwCMao1C643wYJ4ogsz6G73n8o9uTtU",
  "key45": "3Ra1FCbzx1Bp3Huz7gRvxHdUW36e62BviojBqrGQdAbARcB2DXN3eCNWQ9fdfvvPBWxQPjukqsqc9GpHf5cu1za9"
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
