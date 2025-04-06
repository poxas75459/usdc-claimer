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
    "3jTwhpMYkqaKzMzgSaH2mtdYne5Smm1xyKLD97myxB32vT9rv4MYNYZeDbS1kySTT8xrhPjg6Abev1Ze3R4k8WZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L1CbD425zuvoYyNWU4kB1R3vucExppLo6zKANYAfyVkhVMsSMNphdMKaeGcK4QvpyCaY77JX8MGRPRBLbbWbfD6",
  "key1": "5F41uKd78aWzsQe6XyrMWtqFSg5Rj5xSHxgWnamebBr1JiRGRMrDDYLXsgWtM4rUuzgAj6WTRUY1onENZPg28YSH",
  "key2": "52ybnakSci7wyGavXENsqocCEk5rtesab8oSdXEAiRMUcBNq1pdqHRUKaE7H8tABTpR1XQsWboEeYm1AtQB9JdzT",
  "key3": "3S3tTrU6FxW4ck22u8Nw8Yemrgbs8k4n8jkVjHhqBCqrM9rpnv3V55nCvNkmtdvGfeV6MVPsvc8aMBEyoo2dn8v9",
  "key4": "2xp7v93GjByZodoXwgPyNY6iXX275pPGXzPeBccbwx11F7bWDoQURHBd4P1a6BvvXDueSXVbuj9p1LLxkPYT6BvW",
  "key5": "2eqHz7TAj4KFJ5kCqgLBndyS5RyiuxohtvNkUHGbsuhknGuF9FbPxQHjkFNBC8xayNH1N4jrWb7f5TiGirXy7GX5",
  "key6": "3KuKxA9JYFLKDqGFPeSdgPVSe2QPKbW1qhnycbjHdNYT2TZ7idvzKVYS3LYNLa7sRbhu3dwuodd52fSyMp1PYLxc",
  "key7": "6GjUUtu1cPKKPp8UGnqFe6Ps8V7EGbU8XcGa77F5HRyAyxFEb1VtGa6QLSFR9QjmGbKeLJEjxbJxr6AKL3KLJsM",
  "key8": "26GhXkcr6jzhpkgEzYCnZUibihNpTk5mT6oBEzYScJGgFpHbGdHw78obpNaXMGzC4ybQceXgDpG4tmX5j7ivToMp",
  "key9": "3afQMQhs62sRN7oRu7Ndm5i2A2xw7h64XCsXmAyUxhZnEivpCyoquUS8jS7rV6Jo5tEf19AbumZeQWuTDcatJvZh",
  "key10": "4gZKs9RPRoTYmciLFk5vqARFjN8iHnLbay81s52yfYfrR7BoXyFrG54tAovSodaWUd7izJ32LQ8Xkwb3okkYwUP6",
  "key11": "5W7DNvK4u2KYdvMbQrFriLbaJYwGQc8usGAGbxRycR3za6goaH8U1cMQeYwuZSCcetzxjBbLyeHc1AgjHftLrefX",
  "key12": "RyrjqEwNbK3DtDz48SByWuTrkBNnCQt6utHwW8Li1HXB2AUgxfEkpdrXZCaQuESYVEQEAJPPwy9QMFRrNCYHWT3",
  "key13": "2fyBRBtk8oa22cpU8K5zfhaW2pdQ7c5fg3q8HMXJbsD9p4AJNfChFcYaRYh1bhJgbLGGqqT5M5G3CgWjPWzJ2hDA",
  "key14": "4RJLGChYWLmBkg9hEvaVLFu8x9b5Arncphb7PrJbWNPEuM1rf7RwiAV4omds6SmoT18rWcaqvPJh3fpwF382a2bh",
  "key15": "Ws9wkwiEDjxDgviS64cwQznnAEUU6MLtckZF899HbeFCgkamzPNehCLYfH8EumoxjvfgNuNPw12U7dYGV2TbF9M",
  "key16": "2GWh86TYy2C4Qc1zULJM1qACRsqPWb5CQz75c3doFRksBH428HLfwaUHdFy2ps184qhCG4fpEsHEUkgxRueRvwFW",
  "key17": "5Lsdr7kSkvuzgHQoUs1fxmo7BRU4k8ukfxsv55z5gt9EFV5epkcVtqaRJi9YdsiYC3AfY2vBrai5Bsyng9Hhm3TH",
  "key18": "5wQgKPm4J6Y9DWJuy6LpsjfxyJpUJha23SmB4M69g7QkrHzhyVGTGDy9xXZXbmBdpWhogUx9hrpLaGLVfSBTrdcw",
  "key19": "gUfjsy8ed5weXjxEV9ek3kNgfFJ4YEnbN4nC3mw7fHi5YoNVuMtWjam5QBJih4GyApb5EPe4zALMkGGSZSZvVPd",
  "key20": "3Pr7dnJR6KfQX6PfrdrNmBeVHFmAPwB3T7CqjtAt38YycawLiSwmwGUAsdzsM8s9R1TUkemMRPtVbjnxBqBFRLiK",
  "key21": "3G67ciEfu4ufN8rpaa8or2TjWi7rMiBukM6nGweuf4YoGfWJbB58G28KRYPmoiFoSTNREfDdCpVCaefrER5d1yge",
  "key22": "imPNvuo9xK5yCk9UUe6WHRTRdny9aCNfQLNsEi6UojnEfpqNxpMuSsYaAWNkTpDqHmwfbeKFC4iW2jvTKMbvsxk",
  "key23": "wVtrqktGaV1kYxwXuarz7Xp1Ke79wPP7uhtLXBnNhHEioMSQpLLwHwUqzgbt9YTAPUCRehAZRuDrHsUyjQ1ab3Y",
  "key24": "4JTjV7BQkc91m2rFpYWnD6LbFq5S8FxqBZshDPeNUUj2imuRbXsTJHhTcvJXpfcgb7YrmZ41X5qZmGLsy8ijqTFA",
  "key25": "4Rf5t8GgpVcmoG8CJ2oD7mRkG9n1XZtXTA3sgmzbsfrWMihpJTZ2hB1kmdVwSBqJ1gQ9nhty5rMy7DKJDZjDbY4w",
  "key26": "3VaxaYdYrhcBQYnB8cp7TimvwNR2zXyFgDxn8RpnSsVsyisnmQXLmJuLqfbwWKhpmChD1moWiuQycKzwgYwHesxD",
  "key27": "4nNWpFSWtpVGCn31HKEtkwn1cgb5NXGwdfvAPJ4KARpWmCwpht3yoJj6hK1GBwQNbzW4QtTD8WPJqFn3idWEEjrT",
  "key28": "3LzavFMtoLHrqYyaZJbdFMxJ1DNg62JEodR4w88JZjLmBQM3EJXZ6qzMLv7YQAUabn71cd4uzrnPttpCQwtSUbRy",
  "key29": "3tUx6FJMCErA7rxgb2dTC8HyqSeXxnzNjL6yvKuP37R7GhK4qqRjxmTJyBV6fmYoYqEqXJR7M8hsV92CXiKYiLtu",
  "key30": "218SmmqaqEZeBBbBgMPPCDNbBq1qDfbLQJcQwJufQ5E1c83S8u9ssFZiXvcLJB62nmgSndqZCfEZFkDhb1mKB6Z2",
  "key31": "4AKwW8C8jkEX67crpiE2p5a1SVcYFrcfh6MaDeESfFcwS9FXwDYfLj9Cz39ft9uaSHFs7ACf1Xjc5Xk94nTovXSQ",
  "key32": "4H4Dv4Ke36zgBmb7hFjEH2GboWWvReC2NgHddBR7S4iXmsBgkQtDqBz5HMyGJn9qg7N9YTm4eki7DtZq9cHDHxEp",
  "key33": "ioZEryQ8Vsspmeoj8j56U8yXrn629KzEiiiriGaTwu6RgrZffYGHTNtrNp6G2RUFh8onZ7ijjsgFWPbGjgrCGRX",
  "key34": "5NWyBsAkjAMxChiyrJcioZLLy7qZKcAw7fZExzvNihx1Zof1PJiraDeHqudyVaCzzKSPYrEZVymMh9HYaMaWGYZ",
  "key35": "4S5upopG3vZWUYgsj79Kt5f9yeukzdNjaZj8fzYNXpxvkgoyYyftFoDhgort6fGuo5RSTB4L398w93gMEhLQiZWh",
  "key36": "5Wkn8wrzKtRGe3nigDCo4ZKHgwQFfMhWyK4YCvAXtpKfNogMmmD16dW1NGd6xLYFw1QEUQSqyRvJGpccuueGRLcj",
  "key37": "4tfQ99iYxysgC1F6Uty65RtngAGBUqBWfyd6na6phkXAjLjEpYmJxMg6WUDctio1z3ko9XhePPRZCKrzKbG8jELB",
  "key38": "5YAcH7s4Wjs3ZbzUWm3yryYDFToswRSsuvQN6ADTF2iCJs71dNbW2HR8CFWLEpYqHkcmKJvPnrZpFMehT3fQzaFN",
  "key39": "5ipjFZGMzgHUb6rF7mhCwZMGv6mnhUjhkr1Yhpysi1xaAXGzEyaDhdDSBAgqnRGGNVX6Br9j3Uwi4cDdEoxWRpPi"
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
