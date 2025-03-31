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
    "4oKUdD6TDBa8Xj6wvqbwJcv9gYhErnk9TcxjsPN96LgBKEAt9cfTUR1ku9HKfS7Wa8i1URtA2JH4pUMxeS2XQYaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dSesXuKbz8kFpYiGFPCXSCPo6F2KfyYAgcXnpWFPPLTAF9yiRGBdTYMyA95SBKPzyMzM26ZUp5RibF4JxhduM6m",
  "key1": "3HGCKDjUr8pZPWpaYpi3rQJwLPKPEFd3PpCVjpaRHx1by71nq2dv5819nkSHeJzCJCPdY5fHTfSrh9zhgccHWNEc",
  "key2": "3JfiZEysQyYq8FPozceyR7qNGud8LRD34ek3LRKC848eLRk8sTmDdHNazDmkWe5iriQbGQ27LLzz2JPWAaiSRDFE",
  "key3": "BNyShX5ZE3XtgujEsRHUbBuxjhd3Kou8bwdNbDQizoFrDHZbvoRAuBEGHnm6SFqMtBe1k8zZKDbmkthZnZvVQ54",
  "key4": "3Z3X8ggj1abpgGQKEfcUoX5mVqMX5jwXy85XKCYrd5bGFBho3xaYRFhuq8PtVcetjJzWQuxo5v7gMXJx7JLysULj",
  "key5": "29aUzc4oUeSbEfMK4Zoku9fcJECT7M8msqZRjziPeZj48oX1M1WSGrGgbb65HuZjn4s6vDDryaczPXN679FP8YJ7",
  "key6": "3GH4BWSqmJ6EE6stPjfFa9dVyxZsgLARuUW2X7he5D5vm4BJjQLp7J8H82vSdwY9EkMQf1M4XtXJfbMMA7crNXpK",
  "key7": "2h9EueDHR7QFPBnmVzMrXm42JL9LJPoCt3he677JfJQt9NHpxJpX8pf4e1ZuMZZNLutLUvZjhN4As6rbGrLjw3Ex",
  "key8": "XJFemHsBAng4ZjknGAFMDGNGpJ3D7CCA9kkihS8QppEHrfT6GrSW66cBmbkiHbexZ8VaFL4yra43W23yR2dbfEC",
  "key9": "2BHBzrHnTCTin76tjWrGQZmjKRW9SU1xjuSuMR9gDA3fJue7xtL9U3NT92dhorhsfuz1dpHsECv5JkCttrHJGXL6",
  "key10": "5s4or85FBs3r3HCHnKWwDPnmppxfyfeyd7GiZMDjNhGPAQWw2A5P1QTLeZHz4EaoLsRtLYzrkZrbGfwfgvwLL7Nu",
  "key11": "2okQ2ZQt1fv1Lxmjv7Qja7VVeJDG5CyYQMxqc8MChTNgqLWyPLU5MkUFQtv45dGDWbMLabhLC3SBmCRdhJpZfcj9",
  "key12": "35Jk5AUG1CgcWMxYZfs9wSkw1T8ttiJL5UHkQLqjsjzGUzZ6t28fDzU8ygjv9zTrNtifD7tFpsPWZk3fAocFW5ks",
  "key13": "5QTttdtB33B1FW63ow7wJz2ZD7V9KqiwyQSXZ89WKLpdKAeyBsVh1Y7Z6XgtFP9i62KgqRJNnvw8VyKCFaBJfgCc",
  "key14": "33fUEjfxBMt5mWXrLjqv2u11gnbcAjxtVZcpmA42ygxmtPBHZQ1CUer2yG1XL6Y3Z5KfGdLYMYFBeWcxRY6R7oTZ",
  "key15": "4RuKATGHfuBQGgGNFKHMLhmi2RMbryHZtsoEtEcz8VnpYiyU6ZWAWHuLTkyQ8jUp31RLMpoDyo4hVqLvHL9tTJ19",
  "key16": "2ixh2jb64GcE63hpDvS6Zj9FVMTper4kk6pX5fAYL9WCY9dtkzVzSM3RWt58brPie5Mfn4h8x7rawyxBS7vLKjay",
  "key17": "2yQ1tSgfYJVXaVVVaKAnudmKeGLDyJiHFQdKg2p8dzjFSSnMtoSt6D4T2VxLvffvRYY3jhfuXpwfXv2iTEp5vqoG",
  "key18": "UG64siaE5oxoZVNtQvc9AeaTTtdeL4L8PRE68ppXWC4NgRdLBEVSdZWWsyUFgEy4ngEnJxcjfq32vj5UVzWhDFy",
  "key19": "2hrMUdG4LRj346BKq8GTcCFrRNzeH7rBvxqd8YET8XkGSbfA7B9s67tFsev9cqEmc7woSEHjVtSz9ZJDhVDzGnCe",
  "key20": "522mXJvgStfGaRUNCbEWQde7V9RetAQjoh1oyUmoUkUdkRfuooBaNv6XeGyAdgGXoHjEvVnw4CqGCb8bXrCv8sam",
  "key21": "28US55TKP5jJKJJBEMfTPoBKBUw37vpeRjtondXx5Fw1Ffd1fkiYwKk81DpXXzGU1XRry1eB4nCRYg2T83vzP7mu",
  "key22": "4tSu46KX6d9JUTx6W89v6BdFaR1uzHz25cUDAE1VzFs8kNeLt2X5hws8phMUcZxeGEpYTtEQkjWFoS1i9KPLLLqe",
  "key23": "5wGgxJj3zUKz2dSRLnfHCZyRp7nCrbCaDABP1KHMUnGkFgHM4WadqVNdKXEbrkdiLhZwRtSURWRymPhNGdXdkYYt",
  "key24": "5FMZCf9QDxxJXjxMNSupbxZUUJ2RzTRKiKw7vP5fqRefGf7RUNewW6xRPGaMn2unpLyoaLURbMaHfuaQqbDWepsb",
  "key25": "2kGURyGQcz5FttwbWq3eKVnBkgrAeQKyX8dbep4XDNXzUDMN5qFqZCuFa3up4u6kwMHZ3UXfFbFuuV4FxWtFDuP8",
  "key26": "RUpgQQRHNBBNNm3dyoUPqYrU9Nj6sX4xymTe6zfG9c3Xd5JFHWSD4i6qrgwz8hjP3BdjEBcs1uNsg7NSBYLNk4Z",
  "key27": "4sTyvqkAYK1rUL3pE4KBWt1NGKVmssJaUm4z5gMoQMLXLXdfXzGYkTSSUYMzTRJMeDctSwY7FY1Ny8hrsQhTP7sW",
  "key28": "41VekzrCUMmtPfZMFxYJgr1NKx9LmDpbR95auzyPav9eRmPtgB8DjPZWaWWakb2DtXbjUrDRPbuU5CCa3boGw416",
  "key29": "3xQQvbo8sx9haTGGrzGXWMuhVmvNXpB9jR9NhM9D8rNibXXbdUdvoYSAg2Eg1fmresdAjkdPZnqki5oSoCkuBtmC",
  "key30": "4XV2F5pRJTkoNrJKjT4b3GfVRPbh8sCeA6Dkmm6H8eDVQuBM8mKcUkSjH8WBrLdCBEHkZQM1Bs6Ea5r7Bz1J1Cyp",
  "key31": "4kWgSDvPx7dXYbQwszD2J6hLM2bVSFA8rFhtdauroc8aU7hYF6dGqtp4CxZJmYGReaZQiW2KBgMCXnJ5Uwt5ZFmw",
  "key32": "2pz2ft9G3aNW3DJ1ckCGmLA8igsEFTroQrHUzzaNg8oeJoKh5nKed8Gr4PwcDYjRkv7Q2bwXA638wA2QXKeZV4um",
  "key33": "2XdEWqTAs4A2da969Upq4bejGPSFFpSz7ByXcLDeSz4rfqWudNKNu3YZ2jGKueXveNvD8pv8H86BnBo37D8fWkVn"
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
