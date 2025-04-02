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
    "r6sDQaevdGEnK9pbthA2kxBK6zXc665PnHxc3Dr2dBGXsJPW33bQzXEnFUn5u9dfmJmt2AXS289zL9N4etmbQbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BnpEdUCu3Q7Zukc9biBKe2C9fZoHSLiWmbemhvhFPkPDxHrz4XK9tNWX6HLD9SXNo4WhjPfrVoBAy2A4nN8ZAAj",
  "key1": "2N3nEtbe5zFtiNztry5xHiRitPa53aSP88PQzVk6hFJXLDjbgBjZgPYEkNkA7tMgqDesaHifqaKV5RAKsQrVPrXM",
  "key2": "2xKLaRwoji288gutrgkKox4fCJkLSnZtPdJi2fq1VauBoV5Y118EMyypZ5bbLLodtrgRgMwZujUTJpyjMY2iHEs1",
  "key3": "5zyLvacdYAxxG9c4FRhz1SmwJcdSgqT3BZaUZatVNxyKx3e4w8DFr77Mc8FrG82Lpd9bFarVcFgeAWXRCu37Hy2s",
  "key4": "357ENjpeVgrjoNBeySLPXFXFnMkakpRqiKLEHBTGUyTgsKGuUBAYt4VvZEHs3eMDmWGeNzPJEiUSxTCJs3kv8JGd",
  "key5": "2P8XcAMAKde3LukADHap68UXsSvZcB5UYjz6SRjuUs4rXocbWpDsueS4WTJG4ru77UUBD5tH5WA6kPyCg6FsobAi",
  "key6": "3L33HhTF5tPLumr1NjA5C2qgCLqJgnWCXvvAi2CzkRGwZ5fKQyPJCqJzWt8E7NQ4jaxhw84sM2gfSRyBRdSEKqGK",
  "key7": "LDvA6EVkFQMEccoxyFoyMV7frCLX1tAvvAzXhi98my57UMqSwKqQYZh5iHS8rXRaid3SPPwWeKrgPeEAkxsbh8q",
  "key8": "4ds3GkDTE8AFp11entDXsEwMnjrTa81Ryqs9zJ7MFSV3i6pkyoRsMuZUPiUeP8ctFy3M1vprgDnYAzAGdQ1daQYv",
  "key9": "2HQGcWo7ybAzPNv9qc9YfspxxXhjJYCzd2RqiTuNHKcia9KmPbeLU6ym77zw7eNN93uJqHE3y3iwy35AZwnPwhyd",
  "key10": "dovhRZVJeY1CSaAfPzAkmuUKJdvHTgPoZ9KmotuY4WPt23EwtUEDaZbiMngoG1g6jnhtcFhD1YSznYBzcJt8fiX",
  "key11": "3LgwTGckjUt8dFc44GY4u93Q2HuK41kLVNpLHLUUHn5DeWymNv8CJY3XJQE7aRoBTxcT3pRLcuqoobqwp5ipc1gB",
  "key12": "5epEE7Xj7g3gVd67z46PHfwUzRBRFUX2ZK7hytXEs9mUTUskrdj2nEbvupekvJp6K62UuZ7GtxcGYa1UKRtRAHhe",
  "key13": "3L2dUzijE8dLupGqj3EYb5k7vz7MjSziowhKxTBTTxB1wdexDrSUu8ssSjHNqtBwqZA9dnRtSpnNyQhysN4p8Ueg",
  "key14": "5TveUzRxgvMXKMyxJnn69fsyZiRfDCVYtDZb5SGeEqZVdht2QSs7sNJQT3rvCTER3hmNXWKsLbk3DBqQ6bTNfxz9",
  "key15": "3G4nHk7uvbc4j9xrfJ9hX9DLSRr8aFStgb3KwuCYuvt2GEeYxY3C8GHif2oc99d6A6nBiGoVVQpQZXWHHqhRbKpu",
  "key16": "ZJZWktxzmFGsD8J3vrcq2ooamXMLjsrPsC8v9ESjLQaN3f4zfpB5DTeD7EnDrMbhLzabwf9T1h7as4RjHaVL1KF",
  "key17": "M22Z3iTDCyv48J4qsZRfBiQynDbK37Pd8qKPAyG5hK9hdsaiVDpjSXScdN5YRt6BQcoku6WupFPw2idD5NVjcNA",
  "key18": "3RqfKrcw9Udddibtoi8xEgmtxVfqz1aUYfRu5yX8WEdM1sRdNNdH9YzjviUut77mag3rBvybVHUF5pXchCBTc4jF",
  "key19": "2aL22UiMScbbWhqMmHeCS88r3Lqvrwu6JswrUnWEUVF75mWMfSj3qWET58uMtQrScuaUEeuq2ohySHS28ByTSCbT",
  "key20": "4PSSwCVSRJjSEKuBv2f88YEHxdoDLJuLZurHf5jqTDZQP5W4UykTYrbRksUyH5MUmF3WBRwhShjrvnseiCJXkGVy",
  "key21": "4AGJqkZSMVqij4EmGSKJPfn6LQ9t8L2BWQjS3p3vzHT5yjiBKe8g6FUuZh6hprzemP6vK75ddJioUbMuNyS29Hkf",
  "key22": "4kThmXo57q9p4PafGhJtmZjiSt3GqMRjpZmDETUYu64bXj1szWHTPnHrQp9KjSa8t5N1U5uoK1QbWRi8Z4L2bo49",
  "key23": "51wbjbYbGKxsYDrS6fuHyHwJqggGEvxD2djgrgeJhxyJA99jNZb2cncqsFp2bX83NJaM6iLJaJTFyte5C4dt6pvF",
  "key24": "2fa3EBPY4hRoJUJZxNPE6xxLVi1KHwpjA1U4CFjv4YKTgomCVe4KmChwHWToPDueGQKZiQVoStN8irvkWnDPvRw1",
  "key25": "4cJzAMv2yJb6VhkZwCvckeaRAq6nguC5GrRJSXBNTF2JxiF1xRmoYTMnUbUq7Jy2j6mHZ9QERfJXprgyZF7smGL4",
  "key26": "3A67sDva1NGmvxNzH7Va91VTbJ4jXeXr7kvxPaahZP2Hk1kvA5znMu4rH5Dm9EC79chJs25hrNF4becxSZnvawZ9",
  "key27": "4LoypkUL5D3inyqfFVEpC2fNrLMKUxELPL1yZVS72gNm94Kakpi3f4J8Y3UL66PDqLY3zSadSEa27mms5yh7g34V",
  "key28": "4Q4WkL6bN8qC2h1UyfCEin8pE6Gv7ewg1RHnEHqjjkzh86tj9t4QvSoPE6nAEZjsmkRF7q7J2ZLKeUX9QZT3cj3m",
  "key29": "3zGA232JmA3s6XXJczYFQ2kB92ihaeN5xS2LUv5ZAGJVwS7xZLgLmvww6PQEFjn2DKQNfKjKboNhGEugQE9gfbY2",
  "key30": "cohyx5MzrRuSt5gt1NybTtQCobTkfVMjburjrPGcdoYNWat9zMJDfb1sEg9MPnpza4TvGNKQiRJhZCAYkUQdTqV",
  "key31": "2dAiVaKkbT6Ao2XM4gTnxHfmjavoLfcN2m5MKNAVvdws3Keoi1QWoM6y1hMxyk28zKtGKvWE9CtGeSodjcfMbfe8",
  "key32": "2TCNjKKTVbXw312F65uf1eVghteW7un3TGsWFKxMjeiGBSc8CAMnb7HqCTe5NmqMdW6sd8k6U9zq5TWuAP9zjGQQ",
  "key33": "5q6PL46hTrv6add9WbdxS5UF97rkGhPcyXqQB1HUDynyuV3w7DBDYarCv6Pog8G2kn6RkpLFLHXq7KzQMWDDQgQF",
  "key34": "m9CRCV7DHyFphAXnGjx1ritncL5kWBnL7nXYaKKudPAi7hoC5VSgCuYJa1N2wHRG9xcgNWnmJfo7tp4gk2f4FGq",
  "key35": "oGkD7MntwoKctFeKHBtD5oXCqPYcjh9mTBsdLoB5ZqCjfBaAKCTFYmdzD1rUNBbzQoyrmJk6QYeDGB8uDtbFTuw",
  "key36": "3YM4SBWqRvajyZMCNF65W4LiBTsdjcYWtofS7H9QU8EJomhLjZUoidswLT2buLmu9ZopjQC7QUVJZuLKK4dsBiY5",
  "key37": "2KTWhdCfJbEPBD9pQj49wnGDnq4iSjPxmfFv5Bv2JbmHmbk9fzSNmgbSjpsSesEQFn3GD9PDNBNggosHaSgNtc55",
  "key38": "SHS2a2bKovprgHG91HfiAjjPK4awYLLBH6YLsmdF76YdYodDHYNCDkrQtnJ1vYmQFSN6FCd6LKmanJefW6efZki",
  "key39": "2FTVrGbwQzChEjEZqXBpfMPqa9xXyV8MdZUzewks8H9MGreFtcNSEjHJzb4YtDcTXtRwbBkrQCbExT5ptyZf5kSM",
  "key40": "e1NxF9RgwdACTBgwsywLHnSzPSpadm7TZA9GGY5eGTC76eyyuXFqGRmQdAWiNqHCQDpwrww6viRygQ8BWiTsy9T",
  "key41": "5Zqh6m83SidzXGJyUer6WLTYCGYzaMtymh32LMGJ8FQ5euE8xjWHf6xzpaKcHiLpf8C7ZK2UF1ViBxmt2WMw66wg"
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
