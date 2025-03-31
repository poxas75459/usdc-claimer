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
    "3oyaRQEwx6gGa1cG9WmGRFwp9Rk9gUMY6EWQ9qejR5BmYRkmzDE9vf15EUrettCFjKzPtKsNQwHCCzZKCQtqDKg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33EAtFhPtX2DbQm8wVqFqDN4Ucbsoc7ufcNB2oUTTdx4LsgErDXgVG6b5xhDmKoTLx2ww3sZgTbtNzYJmbtrRvgi",
  "key1": "2EAU1if3WfCMuwyf98C4CzyM7vvr296xDYVYFvJ5KnvyqEJnVC9ZXpctGF3BrR8ZPJUgH4CEqoSFPQEGSkEf5Nbb",
  "key2": "3R3q64BybjtaWfWiC4dzjwC1DhYZs7pCDC2MAsX91bj39QJctX5qFD3CzP1aHDr4fzNu4pB95rpKQb27Ab6JkCtJ",
  "key3": "5k5WyCTnpG6TkWVo3hGhbBQTaEuC1AT4c2Vsr9RgjTD56csykHociab16MatCE33bVkWbGMD7U7XYEMx7JwkwosP",
  "key4": "4rjBs922ovX22R8ovjevJ8WCtFJncCBQg762RHP4DhSvPvUwzLaUkFKEou6GvwKtc87yF4g4uUSB2g2oEUDHw6FG",
  "key5": "zcTSkaH43iS1ViyuAgDVXi1BZSFxgmq1EiT4MtVG4cR1ajt4kXDt4bPnvj79cBm2joPF2knoRAzK4G3VtAWGdrv",
  "key6": "5qGRmmEAiYWFi8roc83JBq9impwnHh3KhR5Yw7NA4maCX26u1aTfyvdhDiZGYwg13DgVkm76KJa8KEnFh6txvYML",
  "key7": "Xujczn8SpE5b6gdwucP7d5b2cyPCun5LcdJY3jxi3bR5zFhLnUn9xPpZRrGBBKATfZ6GEorc4QqN8RKa77DEjZ7",
  "key8": "5cWg5UjWuEc9LbiQBVeNYJXiBK5p47V5BFZWtM9zagXeQANmS6xhqF8RWqhYLam59VQnURaqUHs656nqPkKifykH",
  "key9": "4uMVDEuChZm7Rdq2VAd8K1UVJoLy4HxRFtZiqDKWZRymnnAa819NgoovtBWMAPvkiGLV7h5nZ8TbSfRjDFyUEziS",
  "key10": "x1RkaKkc3QY7aa4EahyN1ZJfcQ7hDLD5ACkmaYadKnb57FnCqLzcJsMDu9c3PDSqxqURM244pA7VLwSjgaWt7Gb",
  "key11": "mVg2ooPfXecBecn8n5bZ1XndXjNDL5e8i4inJFwB33EtQ7pSjk4e75DFaNzANtGtF7FH8eADAffZhprMCSQDUWP",
  "key12": "5hyJJhis4ArusyxFdDAvVRhLN6aNx4KuDMoRYRgsUK4eoQMJyPMhPs1ognLBRYLxACAs5H5NwpR2bHzSGDjVMQ8D",
  "key13": "5LNFTJXGMcE1fx44eVyYHQYwXmemXwhZkN2hDWCbVAvPcmNHJE7ru6UAhKjyKLdrP4vtN6qSaEtfCD6dWkf93naX",
  "key14": "2AfLDePAxtaxuS8xDcMFNSHVY217KUi6699U67dfg6qLjUxT7KWVqet5jMQbuAzLtKo9sLSZetwBrQLFFA8KCTFW",
  "key15": "4ZjQExKewiiocvjvbRqKS6GanPr3JnCy4Fo4h2SDMdTp9MuPpFvtR5KivMJHHM7okxrg5mYvDz7vH935bpPnMAvW",
  "key16": "3suhDdSbowwjyJJe3m7CxizeNtMXJ1mnyS8LYWv94SLjo6QNi7Sdi4fAVxvBjtu5LcCPC17ugwowGRGY8HcnudBx",
  "key17": "2iYipqFexvrszQB35sfLFb1G7hLSvagFZfSamzdLc7mjiv7eWTJajEQ55T7nWjtWhZdFoQ2Um7HRkYmKgq1pb236",
  "key18": "2kFXs2rKk3LuiXWTLsACHjbdKTY6pkXrXvzKGLKexmmxtNQ85V1pbW5pH5Bmwwjx2uwPWjcXF3iCQ2hTki13uvxS",
  "key19": "54NQGuKzraerr6D24WG5jj6dYfJqeym6F5Xm1jTaMLMBPFZPd4XUhtvdrUm8Cw12KRyUcEXHEMuXZTRtKi7bfnuH",
  "key20": "5x6Rq8CYTMrSzQFaekWmYr65QShHZg5pj2xNJkzh5zyYvM2Uo7hZ2Zk5MWgPDaCET6wDvyGp2hob3PUvzmU6cAzk",
  "key21": "34x2gtXxH7E4117yJ2osgG9s24qArTk8xHUCncTnCM7f8UQsyemdMPZbsLcEaWpUK8H4fZ9RLYj1tmyZ1yifQ6PU",
  "key22": "5Pi6TN9ByDRbw4Chm7BstaQT86A2janH7PBCWWTsTWDaQkTNHJRsudrCwmqdujbPi2Gnf9VcdTv564mC8MuqjHHy",
  "key23": "4ZV19ReidQbZcjTpsGyrGVLiGt6wKpueCah3ZnZVuq8RH1PtHyJ3LXJMeK9WfqaqpuPmL74pUfVVcLRJCefMz53z",
  "key24": "4PAok5G3Wb9UpbmvtyX8V6QvDX7cRYbhyBxB1X1A7e9sWWifXHMWqPU4VN2Bc2YbauW7Jue4PaQ45YKfzrH6RjwR",
  "key25": "5qeeCQsH4QgqeLTQuRWd6Crg9MYSyV8ExGHNPZzevSrazsedkPvg7zoRY8ZbDUmY91gFqzqo7zY7HrgRxrSeCGxp",
  "key26": "42NbPQzHVnFWStaZ6AQAmcLpTr41ufCPA9d5KNPHqA4wJ7AgcLQipCuaFqM4FNW8XApoesKLtXPgDhGFetAH3cpL",
  "key27": "4L5sps2bTnNEYGA2FEDgRRNxVLAsnYzYva7ixStfFW2oHmffSvLBh277J6yaJC4uwmhs7zj6u2ZYsGMBBLUXDFvW",
  "key28": "4Uc3LwdE2DUHV3simkuhpTrJyJMBz6pYJmzKfsFWUSdF8krsGgBxWUipeQfAAkp4Vm3tYfhdwsDkQqkVuZm2DjcY",
  "key29": "2WhSpAVLyqEJdd74uVhGhSgQTZYsXi7aQbgeSXbkZanTxYDjEXrxc3Mj7QstN3hJ5qjwLBGDeoD3KFxj2fBfYYn4",
  "key30": "3cyiwYXxtuzxmWZfsM9FU2LVPS11D7qxRyo3hMzBavSPs3Sye5frY7LVBdtSejh8HMnBPojTVnCCeDKj62EMT42S",
  "key31": "xcS9VWhJoNqBptsiEq1EB1bg1oKWLUxYi59tbxZ1mrLxms5cTAaNzz4vQwQEoHHeYZVmyP3RyHpfmToZmCWQpgN",
  "key32": "5EKsNUKAAT17u99JEaJG3UNWEt3TAfhdZ3XTwg2kQj7qDVRGQuk3uVp67zX6bvYnVYJCh3YcniptgaH5jxhfYERd",
  "key33": "4ecokp6ULkoXQRzxFGySH7jo4mavXZ6EpPUo7H68xpMzjrBfFZ2QC3Brw2aTqtAC2yWHgMcUdoAtHKVaE97twFgb",
  "key34": "4tph3MQAJykJdwGEmb4fdh2h9Jq72cejUeRiaeTq1VeNZCszCSrmo3dT7ie1vGQsBXKDGFWpNvFNF31S6THGrrc9",
  "key35": "64Rd5nKaQRZZKNdYyjDVQUarKQW4sgExARz9YuASfhLJ8o5NZmSvsEZjgoj8QUzSWhxLGCE7LMknKgxCbjnvMFNV",
  "key36": "5cGPfTQcRpbRgtpAMiTXz6xXMmFJiEokk7BoKRG4oC6U3d5QjDJ9us5vRBiU2avDEmMhZpbcDB3TfDzP6shdsPyN",
  "key37": "HRNdEQVX5Cx4nFszsjjK32SAgXmm654xtL8aRppUEMDn16iZsP5MDU4jYvziNVXRvbyrCDffgExrFTUNtM3qa31",
  "key38": "4vgKFu2i9natYCcWKphrH5AuvymtMQfzxKDqoPcKgCTZ1NNjKJZkyxsRbqj9aPvP8VZRpG69x65bzFGi6pGFiWSp"
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
