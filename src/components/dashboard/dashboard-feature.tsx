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
    "g8qktywXnBVnqgTMjonTgZR5xDasMc13Drh9uYyap1JGbfxoTd3FgxoFt4B3gRBKu8R3UfTekSSfG2bDHVhgt9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JJF7mezi9Svn8TB9T5nMw7k1mF6JHsE6akKCtuGgj2aaXmXJtH7sVzvdcW4zEyAk1Pc7bD2Qi9afsn53cUUjD39",
  "key1": "LBwBwUXTPQs1CRVCRnMpvghphApcWEMaggDQnXF3qSncUVzHRyek8parA6pwZG1AsdgQBhDjrsxf9JWYrSktFp3",
  "key2": "5BHcyEfUtKy4TdQ1W1gUDuWxLBydRakprzoeb6izwZjywVf3Nz7cicFUzRe8uGgJyP1go5Q9Kvc2ApL6Jd5Tgpav",
  "key3": "22bzJY8pxyHg58UN2QnnByr9gmpXUvee7AkbsEVgf7Y2bgZrhPZp8XiabZgSnCFx7voSRziJkXaJWQh1wp7HAxwq",
  "key4": "2F2fVEfp66sWptnXNYggsWBNKJJKhAxxVH7YKpfBdVUuvARAcNbpnXgkYgtRAmCTZKXFtt52oPeiXFHUF2tLiQ2M",
  "key5": "2pnB1g5dYhm7uwLCbE6Cr4du3gkHxwvp1yVPjZ2umZpNao6jK2SNjMBYeCns64VYtxAL7hA2MZjP56haFTneBxLb",
  "key6": "4iPkQNHoRg7TbGyemRWgy5sYXiHuoWHr5UkFH7WZDy2ePHeMxU6reirdYMa48BFfoHEbQzh1214MZnVTQwLiXRLE",
  "key7": "9yiec1VsgbbATa56VDjfX8c6xUaEaxwrfKvZDfFeEEpfbRn35WhxVtvJzbQpcpMEjyc5GEAcgHtoBMXnYC3sDbj",
  "key8": "2SNPgchsuxDnmroKz3wNFzPGpnpsLe9Q8je9jrJb56PjtezDECRVdJkAHsYfQtjwLvv6kj348bFj1t1muYXCbEcg",
  "key9": "2sN9HTHweQ2DrQ5iCN7ezkdfxd85Rm2x5ijRQrXJA24xgTDfnhrCfb9TtkoKBkTwq4Yi1va1bV7sSYDEMJ8VJUf6",
  "key10": "3Sc6FZcwCzf5xLkKspLfvdemMpTux8wBeFHQudxGGXVvwbYYP7ky7Sd8h6nLqwTWn6uNg7GbWQRmVZMmqdCtK3xE",
  "key11": "4KvtAT2xX3bYNZ5GF9TcDHCaxgBNojF6ACtVVqUheF2aXkXgbwBZmtZxCLghJxqJ9VL7AFAXVjHGEQxk6JiiD3Ee",
  "key12": "Moxabyv4wEmpdh5vFTS5eFQYtnrs3vdzqzmaZ8jj9BLALoLhwSDLQXqvSvBcvB7FjxeggxykKEmKCjPp12K6Rzj",
  "key13": "87iKsDWk9KHESA7My9UouthRgfqQagmDgEy3URiW7GFf18WPtkczQF5nWG3SDaqAbsmeSE1MFTZyVk7HiX3TFkS",
  "key14": "5f5hnGVxVHHkzBh1v6YYCGNPdDrPedaJM1NEBN1BFMWwq9WR4jCcpNCuPDhtjkQ2bo48YYc6eGaYGVMU3swhtxt1",
  "key15": "65Y9BzqLnXMPFrCzvuGLtKkf9xShodVupJTPrBsFcMCJtgMdGN6N7UFGDvxePCcNrMXokj1fjZmoBrH1wpevSJR",
  "key16": "ZeEnZ22eNyVv4Fw6U9ULGK7HTaBvF1XbeCaLRbo8DyYFKQP6qQ6cRUwE9tkCYx4dj7XaxmFCMXX5xRpSdLqPJzH",
  "key17": "5irJWH6jq4ZtGikUhLEsN7kLXqS8EyCbJ1PnfXfN5ujg2roR5wjYjNi4kKf9ygrkJDKJPAnD26uw8xbfyaq6Fxws",
  "key18": "mDL1vvj3RFZCJh5WGooX7U3bURZidZ2qJPXRXS8g4Kizih7XjfZCxSL8Gn15ZTcuJi1R5C1WyNuLGtwr9vfQiab",
  "key19": "59TKxuRDbc7vsWUmNBmxsCf7AJoJg37VVpuWB687g8hSYgruc9Aj3DPfCgQcnSzFG5xJ3n2BZT98HEaxB1Gc972D",
  "key20": "65rduexkCnxp9e8uLeHTvhKTeXinVEpMxzQq5CMQBm9yUWkXHPiBBcowLkcibL1rtTke2QdDAZBn2AnXiAdBhGjN",
  "key21": "2JcztcprXYBqWwdmjtKqe4e2D3QTUN1Axe9sJcRdK4i2qhXYQfmunxinT5scp2wUYiTKWCMh5G64dVcA7nqzAVUc",
  "key22": "2e2W1VLQdQT1UQ8ayGA3DR2vb8rphaEz5ybtWzbQ5g3fyBhwGQjMpkbAo7tQ3MhgLnmWgaoyTQwp1QqT3ZLYEwQN",
  "key23": "3gbDXU3GuyhdR6kNMmERcsVNsNEWLghkm2vpRUwyf9jiFgsUhrCjZtEAMpRWHMo3iQWu21KPPbRE6nh3hH85ZufG",
  "key24": "5A3eniERqGUHgECyWNyPkcvLszzCdBUmmp3pELxHbfL6SPYzQ6HNqeVKVpkmdqEYMtgMD7KoSDKPwyij5PpXi8QF",
  "key25": "2oZ1gsgxZ5hkw22D7ZBj5fqNb4BZLmy76P611DSTTJbSb38rzFeRcHQwdXAFZHY9uxTdnPtd8don9GVS5JXKnBtY",
  "key26": "aPqUuBBNki2Y1rCWLiDSvu4JAPbBrnN8PkjB5Ly3M5MyuQHdV7dGP4rX9Wd8a4xbLRMAbWRycpHyqhxykpJFcPi",
  "key27": "3ahWs1wEyDsdKurvPoESANSsD7CCFUc4QLFYZJMfDHcixsdeYJ8xWuzFxNXTjy8oX9PtfK3d7773SKw22SfGA2Cy",
  "key28": "2HrjcNpQDZ73bAxDELVYbwrS7rEvmb2FiNcZPWMCXDxFt7nU68eJHrgX5BJVJR481FfZcaM8nWv1FSgKMccamQ2X",
  "key29": "44RmEmhspoucN7tvxAbcFwSidgzKRVharEdTyqzxeacspEUXsjZbwTwZKM1vd2MnQ4rBJfo5tbm8XGHV2wAYUcVB",
  "key30": "JwNwFA7pwx5eakSsAEkM8xXqDVQA4SMXqSUy3LtWtH3bDAed7cAqhVs1pcSc2ExQwSc9wiJvVWfLn8Qha95eX9A",
  "key31": "2ieSJJAvQcQ2ot35wQuhRAku7F55Z1FXmF6W8uf1BNtxEMBcE9dsRUPcunmf25Edfz7j4izjNN3guXC1Pw59eeJG",
  "key32": "67rgBrAVn6JEF7DXq2faKPVZVEfoc2Ehef58wV5fmF6Mh38gGjCAxVzoTTptumAWbEShHw5K5tYPN2c7Se46qzvq",
  "key33": "4z1JvUVBPVqDpUjFwB7ac9EBREBKhNG6xwr4PwDGzUGyUZvoLyHn1tbif1AsckMh1pKoAxATQ2zfWxqSjhktYNmk",
  "key34": "3msvVEKdpsJf2Rp98DGLrrm4avXmHWK3D3grV22uNh6pj6MYeo9QrzhhH2dR6DQ1UrnMx2quWdT8e6h3jBcdLUL7",
  "key35": "4pnsnXV4dHqjpXaqhSgev316ie3x35YhEcALYBXqbZAKzWjPoCPCGk2JwqCZPRtm3hVhUR165yPQbH2RmUXekdau",
  "key36": "2NBjMtRBuhukkUucZwX3ySScvYd1T2Zsu2H3Sfz7r7sT3Ym718Pq1Ha4v3HW41XYdg4HW6fAqJXdiBFddQgxW3br",
  "key37": "3nDiGutnPdR4bgnQjPqRPyqHHCKwjsmV9YZarjMHuxNhjiQKZ7ypsrRDxdFXr4zUR5zAaiHcF8iZuZ144kCYgkeh",
  "key38": "5JA4qNNrp38SX8eeFFsvKqiZgTvrp63EcMpkofXMD3eVNySys8jge5cWDQRth4EvzcgedE96q63zMNc8hyQsbtNX",
  "key39": "38jptUYD1kYU5HWPb9v63oqXRFDSB3d6jGXFyR9MUg4gpJ3dCbqMKzLfVTtz1BCTmNrZndmF2wenBVtBSj57eLCY",
  "key40": "duKYi3ZKh4qFPbzbcpNcYfBRjwjgjYcwqMvmYu88YTucocz71qx5FXpAM1CHpUCh4ge25hUAmVvQXarXi9zQe55",
  "key41": "24WSGJx8wuF4uaQT4F4PKv86Xtv3GM6Zc2HtQNreD3nAKU1TLgRqBJsK1Lpr5D3wXvzi8wVuDXFvrb86N7bXsy1a"
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
