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
    "4e3vuNEsrrScPXfpTTYFtiEki7u3beCUHUmcDL9uUWB3nWbDdDKKK9yU3pz5QxpvgkuuKEwBT5uu5hEMEfG8TzMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQ6QkvPihTeRrsNNmrDD3QucEZBE8Dx5BqsSTpNdJzqud8hNHfsysuvtdSxSQKyASR8SeeNRuxsxoXvm3nBvG2T",
  "key1": "2MpscP3uUMJBhD1fsLnFCNFARVGcXNm3QtWBekcQcywytuvLVxKCZDZB36rYFDgAJiio7orELu4YwEXcdkGbF63Y",
  "key2": "4qemotS1iW2GhoySz5U7XSQD9wPvr25855jYHbwLqEy5Sr4Pw9LS6NEP7VHoh28mWXVSny9e42yQmfjPiARyJ7Co",
  "key3": "5G2iWnUVoNBa9mT2XJfKuVqqGXdC8PVD8gRoW6BhLzu4dgNEm3PzYx3EGh5uzd55B2vFwBqBkU6a1EFFm9ki8x8f",
  "key4": "3b3NDNMsLbL6hLNVqJXnehQbdK6hrSWDp9ru2vGH6zTxNJ1j4K4aafHd5eSbW64Udwws61MXjNApyEWYEPRzpWXx",
  "key5": "H3dnnZk6rLDtGgs9wfhnCMEdTjez1xcVbU3mRWXbfTvHBae9g69SPAp6MeVt1rWSyjPEVmc4c1MaEN46zUnaShw",
  "key6": "4eKuDQ3TpFyLyb1QDFxss9aL2voiFhKKYPfNsqqUrg62EQvs6bz3che3u8rK7bpSAUBN9cRuDDPs1SSD4N2yj6QC",
  "key7": "5sGr7d18qzhNy5zk3SBwny1bkRUtA8V9pDMDCp4DbvSoetjcwyY76diAtHUsSeE8gz38q4sjrP72KWM3PAJyQBsq",
  "key8": "4bGdjJvffc5gdRch8EF3VMJmiKrNj31GmiLtATdD3VCNKFd4b84D7qDSaMLF9L91FatbTw2ZJnFom4AeJ69ccz4E",
  "key9": "5BkbY2iqEqxVb5pbDstxtupcFtXgTDbCDQrGAuwDFJWemRUthAKnYTCSHTm4EUdwvVuSbvGDhCNxWkR4oaK7G3hE",
  "key10": "2zm6mZ2F9HdgMzLxWD5c2Q1MghSpaNkg9v1Sd6dtR5D4Q9zQUePJ8wnBWCm319vN4k5nZrmhkCUiWPk5BYZ8zdY",
  "key11": "3gsyB8kne5wbAKvr4ew8rTswPabi5L9fPXb9xbU3FWZReyBXT7H3eg8QUzevL5sEUDB9zNJNVr9rozG46frfeu6H",
  "key12": "52N75FSimcnWCWiuvteTFwAxm7ZmkDbymnFHXZvjyDK3f4WoihSP7BKuF8Y4qudEtEKHFdRQe4UhjbvTWaTPs5sk",
  "key13": "qKiFbvgajJ6Q6S66g7Kx1ictGU5RbsxfhnCb4ikRNSdjEKXBwn5cnWp5BKbCEYWRb5qpcnx1imGXXFMEsiV1vSh",
  "key14": "3BAwX2ygr9pk9zoYoSKjemDRFgiPkivoXtS1n4mmMveKnm7JmaJBPsSTcKsg7An5PWNvkeUuFoRqCPkmMfAxhSEu",
  "key15": "3JVWTR3va3f4kbfGUCGeECh4pL8Uz3QvWahx6u7ZGrbBbxdXZkbvv2fncYaz1LxriXPWSFqnv6nBJV4D1edjUuhv",
  "key16": "2aVB86a2Pya7SfxcSUhzgDCjZhXFWritfuUmKmg72vx2L3rGaQA9FrrfwTgnXzerrg22P77SsW7o9UjcF4rAtr5h",
  "key17": "5eisUDuLffni5eKQuudsBU45BK37dXRcMUmmGrcxBZBJVwDbj9AdoBHyeYWZiA7Es5Y964RXdXmM2cc3JiaCHd6a",
  "key18": "3KSwMU2Dt3eqbEtSkemLdFiqz1vqBE1J3fxbQNJ2DQqRDVdgZCWVTjR8hEc4qpxN1NKLnS6pBPbbwzzjMFQGKhUf",
  "key19": "3ny82Zf6kMngox9aG5n7KrhJLdKBagNHSM12bWdi5gCB5K46hFiW3Qd1ymvB7V2TAnEbB3DGVSeLgY3tPyYFgerX",
  "key20": "29fYNw8pyAqQQYYnroob9ZvnQRvMYKpH2mhVrBenLyFbsg2P25kf3EFQZXvbrUg2B4fT4B28vxgbh2cKK5g1YgdS",
  "key21": "3KGJecpJfhLmaKCm9XvcMPE8n8QnEnf2Pm9SfZdn4K8VKRWyw7o3GU5xn4scsCKoiuZv2F2TCbKkb9TfwMZRwoM",
  "key22": "5x5ESPue4kp6zibNyjP2KTsmuT365LKmGZqBL1J8suBr2AvyxMHoa4LuwGJag8yEzfr69VjxyBQmcPcdDT2pASiX",
  "key23": "2bSQdEUD4CVz44AH6yqrmNzbeXJdk1M8y3p9vRwMgMNSyT8DJxQT8HS8n4qiUVtsEZM9Dg8fsDv2mW3XVJR8zFaf",
  "key24": "47PZ5EQ6zRm4wjwZyWaymt6rjqXeA5fq9sChAejMpa4DBbVevbeaNWTDJMPe5fCsBsxd9zpMHAapGFomi2ByKx18",
  "key25": "6QpMuE8Rh4pHYYZe24zas2rP5oMhE6vdekoFW8xNqS5RhGNeu2rxaZD5mYwUFkSbXGVhNspYTn12LDYcPMCKA39",
  "key26": "kw5pwrBgDAMkiHh7tT5SrFEjPecjDAE5L213WNhCRPrxM464Zz7L5sm77TCd2ktYhjtYpZShFseNs62yXbSLY2j",
  "key27": "5Do2LhuyVZg7nUgAUf8CDksYQ5NoN9cbU1z66arpMgParFVXHQtGzi4fc9LPjgTEjFduuLdEfPDWYf7po9MWjmqv",
  "key28": "rmrr8keG6x59H8neUihg4h9XJoaVGVRi9ELRxxCDqtJxRmRF5r3HyjSy7oLBa22dYdZDh4szZQKFPyPJA3s5Sdm",
  "key29": "35y2QXPgqWX2jFgZcc1UZ4nKueF4JBeMuTtEjrfn3qvbVHjuouN2no6HuCBPHnrh9ggyr6N3gHPhRFsQ387ddSxV",
  "key30": "2D3oJQL6vjffS2MjapFoSBv7rFKv52runJeCPVjprECEvsSFmPCC3rHgosLh9nMLu5LfBtF7Vt5DmbuEJC8XEJw5",
  "key31": "3jodBWqPjrN287fB5gBnoWhX9GnKzy88Ncun5fyGLbaQ4Hw2JKBkKUacUvyK3cVkHmQURxAWKPVd2bhPAESFzTEh",
  "key32": "67AXZw4wk6h5VHkSNWHD1wEBy8kFEAG7wsBwpLU2TzvLaR6PNMkkgNY1Uq6gxVuUTQqHUSCHnq1QkiqfYhsXVnZB",
  "key33": "3CTVHvMsSya8tcf9Pnriy1pE9bxnq341EKc1h4Qovy9HJGSYUCG9JTSxrAFZz79dPfcmTXjr9vH7MaGxWyEaC3Q6"
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
