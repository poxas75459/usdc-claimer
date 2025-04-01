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
    "3Q2SSsbi3N1tffFMsRMdEhGTewiMYFYSHfHwZtWBzLCzWWoowwyW91SXv9L8goiJi42xp7D9W2mhVQ6U6yusSStm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zkZQ7YaS8DFEMRGYAshJiT49bPHB7cTV7NbFRRwutZeFs3ZTHmYmq1a5eEb6mV79GdGb3EP8JpThNif8bbfbERP",
  "key1": "MDeHR7iXpmjjM8mFRJANtHg9gu7WrUSvLge23MaVcDPfkSS1ZwGYYvqdbCdH1gw5rJ8PoRDxSFfMM9SmZZwjKAT",
  "key2": "596jW3DnrT6AesXBn2xGLwaGJQfMnJAVHF3PsBFBZkggFjqDVCwcAKYzwDGX34nBqgvqNVBPRGJZactE8yCaoLUp",
  "key3": "cbQVQ5e7JAnWHFZLUdNgevgmK5GzeiWyu7kH2aY3T28qf3V9HBS33gkwfzSjajonwssG8yXEi4Kdw6p7kuGQyfU",
  "key4": "UhmLN9JNNjZueN9ihbk6DhqoDSH1rrawo66H87RkMAU7ttHXtxy4ZaFjJJBfJXmVzsqnL7DR1ejMvBRnTnrpjWz",
  "key5": "yzyeyzUnmjuUcA1egr6R84JjAj8REFMqbaJkMAJ6mpTcVnegH5bdx1zvCqbnowSxqw4HUeXe477TsB1iPBjiErN",
  "key6": "nKpNzq82svF4JpG9RxgZyoe7HBxiSAwkWP2ZGvgrqB9y4ULTBXXT7zhDEkY6n6ngetxoNdHWhUEmfKEx1KvntaM",
  "key7": "2s75Vk4Dk6qn6ass68NbfBQMthmkWd2GmdySj5eFy56s4EBgb3UnqU2iW9WpSDKS2Fh9AARFVxSqhABHk5txzhxY",
  "key8": "5sunmK9CcCjpthXcENhtd7q6thFBEr4kVc926HBNqQmR2FaasCsrzzXKrMgL2qV92cU462nd3Q3A4D2bm3bhPZyx",
  "key9": "2JSqFMWWgwiiDwFBoPE1JbforKthD673uQvYNUoiHQBt7P4Tq56qVfVuGY5jAEDUMfxFdmiHansXFgjNTXXFcA7u",
  "key10": "4GMsNAQJdUbNoQ6vmbhUHCXCBoJUCsPPkEaFDsbVYC6s2B5hRMCeEzVGBYkPCLKyGrA5LDFtuN6uxsxtcySYMj97",
  "key11": "567tw5R1CQri7NxECeqEDVNQFtp9i7VdDZXWJMUUJDt8rB2gMi3vNLbRDNZeGje4ik5tep8Fghm7KNw3abdCnNA6",
  "key12": "46KGHyoZE2W8Pwo1sZ7v8hLmLbmmBuw3eMShJuwKEVmP7yHM1hf91tFKPB6f3j198wV7h5Aw5oxtd1mYSdJwuKf2",
  "key13": "3hcBNPXVLFdHEDvNtzPfDhamKE8vutJsqCn3RpSCsFQUekaBs1Pk7GnKna5Pe2qz73jS3R1GroMNUWCT2A2nGhU2",
  "key14": "f6q8JYiy5dzhY7aqLdwnWjWg6ophYLgXAMzXyBhizrFUfkKRBPCGEPpP6pMd3cfdETQdbiSNxAmaLHomAGJd86W",
  "key15": "3kGKWYZ49upUU45UDteU4oZzXt54WkdZtFXMkP4WFF616DYGyUg55Nj2JKLB6fKAEsV1p8GD7BvfYhiAeVtMgBDZ",
  "key16": "4J2BDHWBdre6WNuFZMhd4JbpiyfFPNQbfYUddFDzgem5tdq7s995ZFsacEYYZutd7n97YosxSXZma4vB87BPoTTv",
  "key17": "5nLdtRxyuTqASNA7cLkdRUtEhqTnB5f7YfaffgU3oidZFsCoC9eoa5TDaGP2xaxbJzA2kyzZWUbhnD8droP3DPLL",
  "key18": "4nqYCgmeK7mAMCQgy39ErJZePH9WEGfaQFe9AYNDF9MtEhhpH1Hw26VgGJoTCd4PSziDXC8XbRGJVF2uF92gi82q",
  "key19": "4dP3xr3eS52DAVZsLjNbTkGw7r1vYzceESEXUaJrQJNiG6L8a7LKozqEnuiYBSDusYUNr7UmCmDw7JGeioFcMUVr",
  "key20": "5dSSJfY5rRB6GDrQe4JC3To3V2sK8GLFChipDBoLHV7WbPjJMyQFBnfmZBKgvq2yJCnRnFzq4qRs1nnSH8qaYnGj",
  "key21": "SP1J5trKWCrY6rYWSrYDtBMvGj7anS2wmAHupB3DKvkhDn2m7uq5Mb1eFdbksKjSLowCWFbndgSTJ9vqSCzCuR8",
  "key22": "2kAVE9ZkpCF6MvQ2W6oan3MChobQ9QhfH2y1EKS7uxW9xtLhN7ff2tV4vZUPscrEW2vwYJhGnMJwRyiwqX5gv8qg",
  "key23": "5LEjNw7YBu4hFSSSBQoZQ5aXu93eKr7eDeDkyap4WSHxbAFUjRy7sJwa6xqstg4D3poqMkmvDndvUHRmvegXZobL",
  "key24": "41zA8rC92Bh9HA6m4zFfo1A1o3DySRaV2PZVdQkwxo8yNsC1QME7zvFD1BMdK1GYUWQStsq8f11gg4BEGvGApCJz",
  "key25": "qToEsvLSoysH6bAUiQXVz4HTKoEZtoayf3mkKR7BjeyhoXH3qdiU6W3RCNntH3eq5Y4ub5sfBzGagrbnP7XPWQh",
  "key26": "3G9YGR74V9RAdDLRuhqX3Dx22SttS9bKp8BMGdpA8m4PLjfbY4GTQHMGk5NTn5ECvLspgM6yknQX2cpfyEBY8Vs6",
  "key27": "2NVcaGseMAvTpU37c1Cdbri3CDqdQw3VMsuUWbehdS9LhfLjj91FY81C9P2hWK2VgiUiUdDq7GTFVsXVqnEYAbMB",
  "key28": "4zbYqhKXGiKVhA9VUoEhuS7WhbyXmouwfN8bAxVUKxVzugBbfyZBdfDSWG5LaAM8SkvdGipv75oX5cTgra9aecct",
  "key29": "49oRhEcvJZbBXz8rVhrKXXw4H6dD6Q8nTKPKzoT4qHcCmAqM7FucggEEzrFBMEtHfqbArjVZP5FSFmQhE9cVDVBg",
  "key30": "5PfwcM33USfXNDjywcTEYAFHFKYrXqa841ZACvMpoU6yAK4boD3QHgirKTcnozuauUWSv4p8TCqGevMT5379PGfB",
  "key31": "3HVabvAMPyy4C6iJkW5m8NhscBEUoSvxHMJgAP2bviKxg9kyCXrCeBsAbupr5Y8hmt4bmvcS9FA97PkYWkPFax6X",
  "key32": "3nWiuZZ6NFDj3VaAiTJD8k7b28pMy9pnywEHWB6FMnYYg6HucZBzQQGsP4tBhsgfBWwc6MbVmQCgnZ9GXpTFTZQ3",
  "key33": "29z4jtDNPsdE16K4TYdFHe9kJ8HHiUmStXn7EYXRWZVSGXWBFomhyb3T9YdNqp8sepB161ZZWFanNEyLZrjtBqKp",
  "key34": "3wFttn2c9NstpVNZUQXoFznGfs22kqsoaXHhQzwHhLSD7qTu2bt7SaVy2x6YpUbBBTdGnFqKr6ihwapRYgzRoQUZ",
  "key35": "5wrXDrmg4FL8zFs9Di4bsMWT7NxneWaGRramSnm9TsNNYZmCKcebNnDW9tD1srXc48cHpPuL6pU7VgNGQqPkoC41"
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
