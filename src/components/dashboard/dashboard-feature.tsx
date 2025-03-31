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
    "3bU7p9G3KRtvMcZJBsZ6ThtzjKSvLexLi1KNwxzQLWw9nnZpceWMgttZbQDfHKdJYKkfAdzra1Ags5ahu7THnx2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FzPn5EgJnMb1h91pWqJofzrbTCyKS2nVKB8ZYwaG6y1bMJ84VxEBjTHGGGJnAoFkfQL9aBoPzP83RwR7nox4HUB",
  "key1": "4VEKPrtrQtFZDKRvPEdGvkzWii7dqZhgZsGQZnuLXJhijrceAARiypbetkT2xxMLfgjVem27bsJnM4LjPNPET8EK",
  "key2": "2uCLojEwAuAan92LMVnfQ8tF3ZKRc2wwo7W8vWhZJrBdWwXuPnMiRzxsxxXiScL8UBnG4PWbG3hcEtueysjVeS1s",
  "key3": "359y6RcDgAT61FhXT6YkJYNFH6zFnQWbWdd1EjG9hg6wt6koaU8aRU43pAfqggANE23UgULqcp9RvM7mzxZ4gek2",
  "key4": "TgkMurgVVi6HKgT9C67QKWddfdTrvrvB9K1rvycv4q3Qabp9mckkgFJPJhYVtb2FEvDCz2S7XabkjjtCnMytaFb",
  "key5": "92Sf8EQYCWS7Mvnq1GRiSkaXKYDGX6eYrH4T4DUXQZm3dyrjoLDaP3Kinam1mWUbRJGCYQX5yao7N1UARnyfhwo",
  "key6": "5VFzkXNLEiSGUpc4cB1ogi4zDy9DMXZFVvYogw7tTm2BU4bDdaGoXeZLzapXcSJi4cGAQ4rukc9Kg7HJbFDyeL5T",
  "key7": "zsgsWjVdWf3PpGUCyo2W4a2K5Uo3MugMisC3bL8BZKcXS4Tw1LRL4HeJeu6cccFydY8Z5FYtCdz9d8Jofzzahnn",
  "key8": "eA93nxT2xyE8UGNRtfg8gbZrj5vMkUYe1U4NVVjMRrKjH6eWHsBJozZfjgoH1AkcCYZkP7WQhWg5t1bPqUEQvVn",
  "key9": "5GNtTu27jCAGAVdPnEPq2TsCt4BHWqZ4egbbBqAYMof5rYgyzJfitL4Qxruofs25aTfYXfduvtiV8a1R3t9pSEPt",
  "key10": "3jbN4N5gtzzxYFacQEDC6sofY6DoSAdpk9CL48wSosDPwiWPLVyDXo5SMRzDMJAFecKLhBgt1e5F6DJthBT3hb1Z",
  "key11": "opBsxJYZZ3Yvd4LPQjxc6VNi2TA11QcgSoMerxSzpceFrXxdn44iN6iJcypvaXcnHXrPL9ozZBATQfinLTomi85",
  "key12": "4ZraGrX94k4Z3tyf3NNSi3tSLiPdFQJyG382S7TqvXsfzv9qbuYdSPDWtSRV86Nei5EDSSFRaEGRG21CJA5xYkyu",
  "key13": "3EsWXYkstFq5s6jvzYNbeyknWc2eLGzuxwjKqGJATUetM5s5X1LKGcpYUUSmTfS8t9t7Mowmvun95PnjGPaF9dNh",
  "key14": "2DM9oeLmn3hx3Zfed2p47SApfZucotPQKs9qqxGne1WxqRfmdxZPAGGZg9o9VfnpZAA2veDDioG3WEgRK1bwu4AS",
  "key15": "3vqw2K1ksFNJeGb31WobryZmYpkTfKqCrgKQHLvKQpVyHngY7hGGgEoLsYt83oL4rKk9aqzKompSU8K8kUzjJ9WR",
  "key16": "4E6jnuCz7r1ScLzw4rPuSwYXmCVMDfHHwZNJ7s21FBMLUmkvnxxbtfC3vZbG7aWuqV8w7d6q62LFhWQL5H9gS8Hk",
  "key17": "5EtzHqhcVgKf2mQfNKdnybWtq32eHyR5jq7T14woLMmmbVLVA84mTHTdEBdATUXSY3cJAVdwrWE45rZYjJiz8SF2",
  "key18": "2Zg9Nv4x6xQoy94pXtiyeFLqqh4BsMNydzuLdmD3F38JJ4voWdA517j5dG95GzUE7gAdyn2ZkSpAFFhXKh2bS9J5",
  "key19": "29c5TikvSUz3fgGrrQSjZpKkgSfC3jee2HJ6VXSt8zKbY4Epa43DbvLbgWHGk1trS8bZjhHx7s9kuykWabmewrTy",
  "key20": "4durH1zxXNCYcyrQTy7hgnXTttEZuYhg8aejNcPKeophPF3onsCxVgM635Dnigsh7B8fJ4yh7LQt6QZKAm2KTryq",
  "key21": "4WUjf9tYPkYZe9SCCkuNuvPcpHUjqKcSXJvgNLh2JjboCx3x7CMPVwak3tkmzpJn4VSbwfdqGyZZrin1PtzzsaUE",
  "key22": "2f9csPUaSyB9AnU7weJwGo9c5Ldq8Q3GdZu8GJ1sAsxYPgo7ussUpHgBB3sxGEAN4DtXcRVcDTsL2b45mMT68RZS",
  "key23": "41tctGsB5My5uZZjE3gB2fnsF6DR8XJ9sTACf3ENAThU3wSYTxKNNa8VHDW4nNPhuobwmenu2JiVPAR3ZDAnYBXK",
  "key24": "2ZQ2vAH3fvtswQghjfefYBancnAZ7QX2w4nruWNFVD4XzrpAwyPUGo5Q5AtZhs9reD9ZvvwcPu2ruquXY4DJHi5U",
  "key25": "2TLEt9A62NvdeqnStSLxot5WgmHXpWo4JteMAcmmtSyXV9dyRLmHgf42UQ8M46KsZ3bZSRZZ42q3LWPfMa36WeJi",
  "key26": "3vrVfzbQsYi1EybZL2wyhjfV6H4riQMiqNSmWSXo36jQkYBbpJpSsZxVzYYXqqSw8j7F9zS6KtGV6X25EDGtWF1z",
  "key27": "2ArEncy3HiMv1q42CnSt8hQGkoDW5Qpw5oWgJUzktp52RsXCxSXEfghsrFK5BonWGPrP6tGh87y6jUBYULrvdcat",
  "key28": "3MaSpeYUHDZWhnhhTNAFMz2LXrEtV4U63Y2BUyA9XxkV7vwhmnnwjiQDaWSY5nTYBtU46vNCLYXMf8fwKMBh73ys",
  "key29": "xZpeLTEGf7Qzo4aF3KTfzHDdY9gQwg9V8b19sotmzxJKDqubhE7UEo3esqb5SpQhqco36mc7W3BkeMK2VCFuDR1",
  "key30": "42BgJdU1nzgVPUfe1Xec3MaXQF8qMAhcwjEKdzHCxCP1wyZpFeaQSPduNMpYgmFoUgqwSzxc9SF6VjXgyg3cXHSC",
  "key31": "3MZY7DPtFNn6yaPezMBGU8Vfb3cwrWFRyowtkHZHfaWsJ25ubGqffc2zeJuDTdXZoGJELydtULU4cYCoyFj9r6H6",
  "key32": "2ccTcQFKjzosW9AsFwxpt8aYCFwrEniHDiEDD2J69f8JVZfaVvdsGHNXkscB6fkDYZW6GsT29kF93oA7yGdkNNW6",
  "key33": "5BCenzNUFbB9dS3tN1fiCxCjEKvhrkwDSar2j4wHQwoPSKXyScQ81tuE6Rsx661P5jVsKBu1r94Rc916kPZvzYQi",
  "key34": "uLcxXA2Pcrq7Mm3LKqaTNfKZ4w5mvQnb9dYuSh6zNpiLauTNxtMu6pT456CaAFmzcUUVFfJBpfhMnpWTRksYRZe"
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
