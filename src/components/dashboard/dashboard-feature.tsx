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
    "4DzVzo7Khh75HdHtb9L4xNSDeUg3ks8goZycjzdLsi4hNVTs7eYwvdMm61y8DCeGcrZM8n8ahB8KpZ5kGa4o69i8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DdBcSRmW8BJfWNxQj1tzVtvBPPPj3XeEfkFjrcMYRezWDjr2MibAWuuJF23DkaWgWHnHqz6TTr4sxwGSuxv9L8N",
  "key1": "3333xdTSKjybADCZocs3tLWsds4R9nFtvMGBtNaFkXVG2QPxgi4oQzudyyDkDuUbQVFNnhxNYMiQ3FptmgcGbf8f",
  "key2": "5ZV5FBPYpYSAPLU55EfyoKZm4YjSJ6LEEJKgakSFQth42x3uQYVin62JPuQt2LmaUmnXWVPLvLTvhoQk9RQkGjuA",
  "key3": "4nqpp7TutZywPrc4mM4AEmVdnwUJrDeBinmFz65uDTLMsNFbFFmwBNo96ff5JFgorgfrB277qEg3TiDqNqKowXMq",
  "key4": "3ThN9HfukdmGRPpsfun5qiPawsEWRzCtc7XNWcqJdw1PNuu9dpjWDMnWWVds6PEBnnfAAWYoKgJfdcUKba7uY3mz",
  "key5": "R5uRH7obHbxRLKFGMuuNRcJ33HjW3T5hdufR4HRJ2q5Wyufq6VnQRRqt792x9THyX9qnLztTNvHmM32qbDtUEXq",
  "key6": "XuSHia1i9umGq8wrTNfxJ9vYWBre4yQPUumH5x2ncQbLwpZNSD5BMtfEbNCxZMBrXJU3R9J8TC6c7vNEwbfisUw",
  "key7": "4iiavHdMscgJmwxM7CRE2wZhyizQ4UdJQTiv9AYcvRCK2J1snPzSTFEQCMLcmCH5zeTbs8nMBKzzwSNY6WRq1XZn",
  "key8": "53SqwjEB3wcoDJTKyojyWHbcU5GkktqjESxGcR16KXFrqZthtnbwa9qS8vJjfdhLKCFb3c6a43PHgT8QvPL7HWBu",
  "key9": "5TbWAWHXGQfdsBKyjsNHPVrFiZr5cyCTHpa8Hq53rgCgJGgvAtjMFepngX9izvMwbeW1hUFcrXUtRraXBXdwtKHC",
  "key10": "2C1MbmNSLtmrBvbAq4X8gTh16ogf3rnJ9pgoNNorkfaq6EBeNHQrmuwM58YNGxXj1S3MdfxNAMPCizpPLqpAu2gQ",
  "key11": "37ZPcL9fDnBdsVDy33YUsRCNR4bDjD38Lj1MWRs9QGFW3afpjJ4nCEEVLJrQTW2xaQzUuXGWkH9LA3Drtp4AgrWe",
  "key12": "MXcETxnYFtGjR4dyFqx7Cfx4uBjC6tw7qWDr5sH2jy2aKMRF3X3vVHwv9tJEaXbb1LTKbaXBR4mnrfivU4HgV4Y",
  "key13": "2KYjPPEhvDjtjEHEmK8gBxxd5S3q5Aesk4oQSf9ZrjBdJgAvGVy6QdamQsH67ZgJCsEx7kFyMoLxFhRJW7EbCYWA",
  "key14": "3yy3tuKF2Mjc6NETsy8EpCEN2k14qZoEFoEezgYySRRXeSjo8qGkgNj5f458P4KJUwxGW7XYYNHiYVTEuV88Tibq",
  "key15": "2SaYcZ1eHwYx7YFBG5kiDwypsLfkPTmSwitrRiX6CsgN7iJWdNYjRVAeo3j33hBh3mr9vmiiV8xoY4cmpNzQHsCy",
  "key16": "2CKo46wRyJPf7exUWvZF2MnBcvJJPFaejQXRtpdrCXSE1Qxfzb2PegSwwz3TqBuhGPyWZXgjUxFaiW6QrAJ1W55X",
  "key17": "LDFxBNixGfr6aqRH8145R1kaXbyow6QgzrNdTh8M9dz5v9qBxUM6qpe7NUQEicKai4p1wrWZFR7WzgU8vthezeU",
  "key18": "2mezxhgtKgqyT7eBdpBha9KFgvakwMg2DrfLREsaNEgpj987TtQSZeXrBi371FXr7KfzyHm1ey92ggxLyxFFPYro",
  "key19": "3uoFKHj7T745V8FFrHTzyd392o2aimaHZqCYgAVmZ6w4Frz6hV2LdRVdG4mELWmUD3FbRSMZ578mKwTp371v9Y7n",
  "key20": "3coUEQEnryHirjDkSy1Gvy5wt4rUwSp1x1Bh8yLgQabJaa3BoQ3xTiyFiBxPBWS5gQUm9e9LJ7axBMAEDg8v2s1q",
  "key21": "4ZWdCGAxZcSEpf177ZrXnatuhqbz4Q6XEkXph1eFcyz7kR8mmojTpVw3AdkHkvXhfJj7BAz419gkn1Ex56eGCkR2",
  "key22": "3ao14eBJvGi4RNZkHLZp62LPqg7t1TVfK3yTQW7gYT2UfrtP7wtVYd8NeAfsr4Ci5fcRv8QC86TTUdT6jVS4cBHx",
  "key23": "XZQ2MAsHXjsKxXLfQdpwZDMd1keKn34od1qgQRyrkqHMMTgAAxfN7HP8JqoTeqfCpPRuuy5JxLopqQovS71kRUG",
  "key24": "5fwgDkTuyhUoAfVJ3PG8HNBqcDBbmUwJb8KY7PRdi6Dxm5hoY6C5VWNzKNFPfzfEBPzqawV3kX5H9j4E9TMWEiSN",
  "key25": "28Vw6tNfHaZ9Pr6VC9Wc1kgRQnGtfyGcdebWEL3QRk9DLwn1t5EVSbyK8aqgr17GENJSPmQWYyQLRfKg67ZjfTsi",
  "key26": "21Ws1y9UDTC6Xid3LjTmHhy13HooiAeU74dE8tW3cRLGxCN9dS6ALoUoQh5s8W14wkzixALjptGWUo4p9fHceMDK",
  "key27": "5apPzB52VtHbk6XXLRi7hpHTu1KAcRSrpdghKhLZrxaHimDwQVMuUeuVPcxJ7cHx7f8Pc5VUCPgJj4KiFmmpvXPt",
  "key28": "3RPZ83MF3zMAK6vrjsEwwCqcovMV7tCem1tS8wHmA13tNmYMq4nCmrSYkdAQAg8tBALBad8fEy4jb78uzENUvxrK",
  "key29": "4F2ZZWJLRJWpkDegeAouPsnTDGVXqkgQJ1zbzDBJRfErzpMRba1rwmxc9fNjBP9CVNLNueoCrsDuu6m5qADwVb19",
  "key30": "5iJVqpNbLGrRFATTXYXLV6sACB8txXskjT3Tjh92nBDvV3uWf4dg93gLkATX4RY82SZitUmfkMscdzoZQd3jXgNu",
  "key31": "4o95bPL1aFnExbSXgM414GRLqbSkj9NeX9hz7kzkojwqREdcEs7JL2mJFh5hpG2etJDTf1PrXZvLrhYkkfgapYvQ"
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
