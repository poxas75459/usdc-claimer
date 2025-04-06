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
    "2dNTszzUwEKxXrn6SJ7SQe6bHkSFBSkw2zvXEZY5mnfQfF5iCCWszWRYgvxoHrpHVfdWiRXMcQxtZMTRXUfEGSzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fe9MeaqK14LJiMFknip6P1TQQDFh2xP6SteoH6LbAdgKtw1x9WGRcoDmyySKgVYPYPARuwHZPYgDZp4D74UMV5E",
  "key1": "62Dps1pk9Ge4nDpkj2UtNyAUzSV5mDNf8TroKg6MRYPbykzHZmGFHkMYgBCBca59EqbCREJ5FaShBEEkahvGUdKE",
  "key2": "41y4TpKk2Jpfj7yYSTKYhbeygkNYChXPtaWdmBqHmB8sKVTbQMGYSD7yxry5jXSvykWfK2wr9HYKu15vkNjuhwGU",
  "key3": "2t3w55E6uqY4DBnwJ4uVyWSTyaxt5K1tqytPdv8C4qV1LBqkVHZuLDuJawFR5xtgbZuQZrxQJTbhTsvjSUN6e164",
  "key4": "3BdvZxNJdU4K5Eg9hgUBBFQ5fLU7Hih5gnZzMd7HPRqViKy7BvBov6ZbYaS6iiirQPEYhfRg1AsUJvkcYqQv3dRG",
  "key5": "4dCxfKSsmJEMjNYqUDfo6SagZ4eAocje7zZEPi6SYUqFoX8X2cFgFe6QwiURTYAqEdU6gpG7HgpwLYMZ8s4N5hiB",
  "key6": "5Q1RHYxMgAnwSEAPg1EzdMFK82QXkYcJ6i4uyS5MHQqsjBArJCuUAETWkDnKgfokeXxaWJ7nVMBAmWYTRmby47qV",
  "key7": "3GaJYjzJ3dLBTEkX6AyTxnFEdcZRtsWQ8UPb3u2vkcW88b56u83tssAHHbqibuXyjPm5cDU5YCBShJdXtm3yRYmB",
  "key8": "2dvzW1Rs1ApkS4hbU6NmZfRQJuZnpKgAyUafPMb8UJM5E7asibkgwJhLG4mAVS6etCWCCGKQVTLytMS64aDEvmUn",
  "key9": "31YxDZGdkQai7nsT9HQPwk1bEJ5jrrhrawBX9gCVRtGKXMQEP7AmrfKWtsBAUPkQkkotvGvFKJ2btbWE53wtiNme",
  "key10": "3JrvxYpThReMLoB4kkwdYEDijgsML92gidfzGgdw9fZmAUEuXr4SLFrK5gQsHTVEuBYmSTeYa1gxBWWV3sV2BsiJ",
  "key11": "128dwosZkEmhNEStiXwaMiMeDVLngdTeDdo1ZqusHPaj3KCj6YvHkywuEZfSF5oD8L9n5MzdTLYWiea9FHNALgwa",
  "key12": "pTvDUhPhJG5wy59vsfYcVQFKFoaqZyKBtXMTybekFYGiXTbcFQgY1pdsfowUgh2xcK4CjibXf1vnGdmzhvxtgmq",
  "key13": "285z5tUW5DxmdKZjEPHbPJmSDYGYbfizhCxHMna54oFzNsT5LVb7Ma1LemC457xq3Qj6aoZqV1w17QovWtKwZ9uz",
  "key14": "5QhsYiXAZEAqtVf2GndQ2bsrDRif5yitvveCaW22tMuHJiyK4evYhzVRRSByxF5k3EscBpGg3DAic6J4AVd55SET",
  "key15": "2EgKGGUNuNwYBQoJVbfGqTC4RZ7icLaEZ9ZLdzwqMQwNSHPHvGagtk68tiLmSgCqkEV16ehyovSNbbWQtcjjzSVG",
  "key16": "3RLuKBEAaP1b87P2dMJ2EREKwMW4aoLi1i8xYjhSCCgJyS6NdySQQ1G4VPr3pLLMRMwtyvPMndLFf1LCxNVYz5wc",
  "key17": "2w7LVuvqQR9aJQGCFawZf6nPxDVSxRCNRBBF9GnrvpQALYYpHXsJL2zGhGiJQsUM9MWESuF5Jwh1gJEYKM1RE1tr",
  "key18": "5hCfGem3whuHecgBvyPWdjRw1X6UH8w7WbouJTkrVQ9ZATd3kmfR7WczRAsjg8e1eP7ve56DYp6XbvJqBkrbPDT7",
  "key19": "2XNuwAf7xmkwKqhdSDQ5zedjEJgXpxw2ThGsFQkhNhefW1Kat9USy31iNxwxgCyVkjfEeGkannrQojguL8uRRjcg",
  "key20": "3G9KgYC6Pe9GM8qkjEc8kBM2REb1EmnAvaKbJmGgHiRVU6xbxsr3kG8qcqmpLgMEjgi5RvxAs2tDkz2xJ8o7YD5s",
  "key21": "2rLZv9BR9CwiLjBn7xZEStsW8R6WmhyCia1SWWDVvAvQ6dzh45h3p8udRPbfynekSNt9a5WW6Gkq8eNASY8okxAj",
  "key22": "rwhZf13DvU2YrUAQesW3BCRMjTuBf3nkZSGW8MJyuSaC1UVuiZsran8W3j5Spr6242wMxq6kCpbZ8j4piYJWUVm",
  "key23": "4tv1BH8XX4iA4da9ztSGGejNzcdW2hgrmzMRwZHkzZFJczMDiHryRUQteNEsNZnPLpHZzCoiVXKwZeSnBuB7tsiG",
  "key24": "4h6nAqngiV2a5k6wnwQ1SNxt17xfXmkkqBDpt47PbXhEsU9qryiCyiK9b1kj9yqGqBh1hBCcWJSJzz4tP6CL8cZQ",
  "key25": "DXRLoc6qeX7dvW7BMNfMZTZNgGLaTS8ybneijLiVy1TdMaWotXgPTMp4GZ9MnJJuJkfpK5QDQ3Q4tmCzxcgbbun",
  "key26": "3VTyoNF7eoSAyF7KrS8wpYAUiLK953rnwLRsfqA7SXLczaQxoypipk599ghHxKnuMKmL5Xn4YsKtWff2E5e6bgnS",
  "key27": "51SzVVQR3mEqo5FtnEoTvpS53XWXySVXFRxgaeCtx4nSw3QCGhyNoXCiMZoKZzcTXVkpnQn3LYRdn4Gq7YqntXkn",
  "key28": "4EoenrH586Le2WvNmE12zxoPynLmVsamY6HauJfsuNpZgwTw3CwzDUsK1VL2E9ecwHa6SqG2dkp8CDjfLoaAG65o"
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
