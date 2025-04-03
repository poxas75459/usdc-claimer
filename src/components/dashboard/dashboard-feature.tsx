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
    "2yxbghKbWTCZF3FoaPmtU5tFU3t3Msnvxn7YWFijAWFXKo4WWYDgwnqRvyrSd9txrH7TV9uFdTR3ApkCZ5uumfKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58C7wVTJkjBdohcsbajA1TqEKJhMDtnwqQMDKoTBShzc5o4jnY7ea6pcB6jnzCiHTo7EKxBtrDtDL78Qv2eiLp4W",
  "key1": "2tW1Z6DaaHgkm5agEe6w4AoR4QRJL5FDxiEh5cnzALf7Pf1zeikzKVDPMiR45r5wwHwvzRD86cQC4AUudWYsVYUQ",
  "key2": "5vVhvNNhfQdxH4PqNf7hpjq5MRoFsKT4pdLUP4NEjWcmLDsQnMym1BaXT26rkq1wbYeE48apoXhCGwLYnxSPBWpT",
  "key3": "2qMyUZ66vd8EoH3QVEnwcC5zcuAn6v4M8PG767F3QdNfsh1acTQjiLH3XVD8e1tc9KnfX33XQt6q3CDoUzeyrvZ4",
  "key4": "58FZRSvkZ64YYabLFC5euqQECcjtWhzAyDYiqCPUvgCEkBQ12GUQu5w8U34qK7N6UEyABAy8N8xr5YFY8kYmyfB3",
  "key5": "3HTDSEJuq4kiCri8WCx8sLR72SCcdwkFXfkASwAerYZH9nQ9e2myvC8EnnwdDm8zn7Pi8XD5Bt9AKGpcUH2VvwWD",
  "key6": "3gtBCod63wTKsjCkdfYyWrLrFKGJvoHQi1sk9D3dCEoHcYqjojpWrfMmXnKC9Lz6JfMbQrvtHqhAdGjvGDo3uJBK",
  "key7": "wKw9GxXRd7pmQXwj6DQocLsR2TgPciviu64tUavph2VzXoRgQUSPpXCatxfDqxLaTp3YMnx6v9o4PAnGEz1ea4R",
  "key8": "3xknY2tUxzMG3aR4S9NZcsHGyJrvuTkFFSGeNvvx3gJ62WYVSMkVJCm5fAiN7Dns3JFwMRMMpBgKYgxSyHxiozqG",
  "key9": "2RDPDGJKYLCbc7dWF9Aen43odLx4Br8SrJDugyo1GFJFqn6xGacJEwmFbwubr84yooBq3mQd3TGef2g6i5osQNoq",
  "key10": "3XFiAtvWLsCiCjCqznswhS6pbjCB2iGvRKPbjDjyQSREHsPvFGCJWiFyHaYdFLqhGSN632tJJ46vqQfgnU39fyqE",
  "key11": "53aR3CJZE1kxe7LedeycpVwbTpw3MiWgR9dBUQF54S2yFG7Z2hZ3kKUdwHd2pbmaeqFRSC3VrQ2jct2Zkgg2vcE",
  "key12": "4gJBdjzq6eST3ftR8voCf9znMzK8pkrGLcmvdw4AawrywSgXxzqjFPF2TA7JJHphCV6jdRp7nJgfo38CRB4Np3Be",
  "key13": "4xD51jhRFJg9siesErD8NBSqzpUJT4z5JvQJWsdUDugsNixcJ3dGGHojJET5M8yPiS8MLZqoXufDLsUaQrjEQDwG",
  "key14": "31K8VC4cVJRNcVo7TQYxvUyWPNjCibNcveYqQqpM1V4Xi1ZN8quM1HauPtnw2XFSjE99rGesV1n2vY1dRS3BYCQB",
  "key15": "249bK81wjtN66rGNo1p1STLr1AVTsSheP8gi7xuDYwmUa4tpnkmDBBVq3W4cdEqP93PUb1guuL1swuC6oruMG5rm",
  "key16": "4LXLX53NKsCpTL2ijziNAHrWaPXguWRutqDn3hShohsTUmFv4UqWLvnQamWYRiocePG7G5VcuQEw95sP4uGXJAWr",
  "key17": "2go57RmL3qSbWNsxe7T5xPYJqCQLScphGcLpDqEmAYXND6HuyJu8mk1YucnoKXmFHxNoSm9PW6hKxAuGNnx5gfdg",
  "key18": "5pKriQoKmdAYys5TRT2ecxTtZErHHmdNmxK7kHzRvbKrV3vGfouBeh49nrC5uVCfboUZvotE8raV6AR9nJpCjbcd",
  "key19": "5eq8ygLUhR9VuxL5rfNhMQUBhX7rVN6VNaSpEw2cmuSmQ1qUZVfq91ad1ZjWcJDM3CZYKTfdCvPTJRKxnhY2fPNk",
  "key20": "4vfMbQPLr2NHQR9SupB2bY3Jovt3KF7wDFea5cJ9oTLRNFkMt63Jpi3vMA6iDWCJGci6JwJZFpUzo1rohQXB9DVa",
  "key21": "5PcCubR4hMFtAfXUVDLmCK2JEMyz3ZKTRJ8MsxZ6jBUP8P2u5hqh4uK7AuV43vjNCwvkUNCFFGxfJLk5H5XhxK7j",
  "key22": "3AE5ffCbBBCkXnrbXJzZrNJHUpAXWa83Kdrf1tvbF4MbPAkpPJXXpDNhQUBEutuAppE1cQh7keSBbkDx1sz54HiB",
  "key23": "1PdfudjhFJY5SatzrREtzBBZtNuoyUF8ZSjCU2WdVq87GLbqnHfi8XnkwobezooXR8gifzF15Hyz3ubLtBwKgxq",
  "key24": "2kQyttk6cJWtZV3XuixPi9djamsjsbsQfxYKfKS4CT7cjGAVF1EVP91DvVJcJ7K9iiCR1HPM9RVyPHhK8aYhbJSo",
  "key25": "3xUKMcj6KBXJjwoFmU1JURErhmyvdj58wgyTJbc5c5WUzmj7x7GyiGBt6mGR7vM56eYAFM9mzS8FJZ4VKJJY413e",
  "key26": "2pRMtXc8bUdX2bRag9nKJzVb7MVR4FJedrCRpgsoSVHFyBwyiV9x2qEQcuMb7LPiRwcBZWr6rpVa1jXsJaPzQqAJ",
  "key27": "3mLqtEbYXsZrQkLLrV4VS5fQTY7owwtZvSRs1TXWXStaHPZHWbZTYmPgX8GLDfD8SEjfBAEAMQZbEi4ath8Km6wM",
  "key28": "4swLDe1PQowLb3p7Vs3DMgT8E7yELx9nTtG5rCdqwj9q5EsmHRt3i3JuFjfkwm9Nq6i77iFy8VnGgdcW9VducvY1",
  "key29": "5pL6caPFA7qWmVqmShKGUybWmbjumL5Gibg945W3hvv73sfV5vVrMTfyjDYQyWt4k1cQpcfDermGJ1PDGjfd8P88",
  "key30": "5hRSH2pv7PdC9HtZFhAkKjQC95SyZWmBJpW58AMWZ89GGadtco7okwGWvRsCntmmLRjxqvREQNSrMLivq4G439eQ",
  "key31": "4kPiqaaNDEGdJCXCrz5of32VqzPFBWpf1wwFJgxaJ4gp1QWcvYwUvc2DT5as5HQRJc5eHc9Sh8dcHsQKKducBzqH",
  "key32": "4Dha1LfyG4XBxQqYs6eB1Wt1H4VGZ6wrCEPEdDn4pLgqufRE9QhoEENAcNf3x2pFMuaL52ami3qAWyn1abefDhFV",
  "key33": "4nYMJ5AgLaw6HQtAFKuAzNL57ZBFUPjtkzqnZKyoYNkab7JPnZtysReAxSZGqGu7rtX86Z4X11cn62ASFGwmaemG",
  "key34": "y1XnpZgW4x4q5Lvoft4iGBG4PshXZADnTVmDXTbD5YePUVva9kqYZnxdNLMEJXdPHbvhaghBFDrtU2FqQ51gdXq",
  "key35": "nrWdMMsVFm7hRSQMv7cNsy1gkPv2jk8crZ6myKcQ6WJJV1RQ1QadqU7ruK6WZAiZtB8rBf8i6STUDYZVUVC7B7b"
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
