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
    "4PXeXZvxSF5wfUEfgJTmWtfWEki2tAqxmFWLmNK31B7JMQ6nMWwun2zuozUZuMh13dd9Uvr7jMz2axDxqqCDb8vT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GDLMDKGPfU5gDDMBTqCCXjT4BqxPt78vyTHHxs376pyv7EyD8HkSHasvydFBNxEg5FrAbr1aGNDCV4r7PGaQpgQ",
  "key1": "3MRZQLkQ9Tm7MpWWSkDCCKhQLmT5j4MR7ExXeSzLwPamuEMdy3CNFX7LhTrZsLGjfvGnoRxuRn1hrTCEa83Nj547",
  "key2": "JGRZa6LYHSUmwQmetxpbyZwy61knYAhkBAMPUnPb7QzYRFhoUUAbZbXD1ecUBGtwBhV7zHq2x5BVp4v5eMHmB4F",
  "key3": "2cLKnNm1QFj8xQCeXa71cm34UijBipq5y3b525zSSWkViMMB5tzdijEZ32VxQ3ejXJMR5yJ2Tc2A7NwKBKZABGtK",
  "key4": "56KX7cv437MzQyiQ6u9rt27tpZAMKzP5XQEho47fZ54H7LZHqCSjfKeR4zh6XchGtmMeqxcb4SVL5SKK5qvSvcoo",
  "key5": "3ECnW3bMuiR45i5fjbk8DU5y2KZY95fV7krDSqBd13dpr6h5zHfB5uzPXuDFpQaasH64gSC113rC5QkxxoTjB13t",
  "key6": "4K2q3nnWbogJuF5QcebQtRihNQp3Tw7mmjfbKmg3djCW1bzG24X9Ate9WSLdsfHLPWKuSFZG8VTqTbAWoVSs6PFk",
  "key7": "4doNFfvXy7j93A2gN5QLCXf4oznLExpLoHu32L2a1KjhdWR85yaiv9yhTHfeMrEknhCJ2eqP4XXuN8vRmVukukJ7",
  "key8": "2L3at4KGZG2iCe3T86UKcVhRyLarqz4dfxEpABcnNNumPxKhnUjGM7DyyNgzJ7MUg8qMtvt85dAd8V4veHqKNnmH",
  "key9": "3jJY1nvys8i6UTwJwYyyJuXvDnsf2oHJHWpPYSXPLJrzVwULNoYyo41dy8c4RvmVc1LKDNXipfHgkbNgmLCdvqhj",
  "key10": "27zBLAdGWoukUBigM2CtiTs2WAWXw9SMUTyH5wqe5VsfdcPsu3xPHCFBgNdqLcYpbEtSxzUG9U6hs22S8ts8AtP1",
  "key11": "xjpPWXdWM6snZQhBqDxjk4oV7sznAV2Lw15yyLHF9QWhV7KA5X3idxW9NCQN93sKPdGfgH1fBxwMv9VNavA2BEJ",
  "key12": "3CrqxdX6hcYFN1YgYgTkEx962gZW8t1DAQrp6BQFLd4T9xHFw9AjCvtC9uHEiHuBfQey7NSW6LePGzEXjvMt2Q2a",
  "key13": "3eYnU1cSWLkvU6NWJzTRi5WvfZ8rLeMnTruJu6xppC1dEjc6kjmQVv2U62DBF9YBfyAvsKUXeWL1YSJ6YfNJj9Kq",
  "key14": "4dXK3qscSckiACchGaRemUirLWAEn2h4vQyTHHCQoa4mMc1fZK4dw98fbkcYL2TcHrJEw16yeY1iGLJNChoThuV",
  "key15": "21xGDZCHxdRhNNFCuA7aD4Xb1j6kqrMHSYviAudPTy6qjDLHovnfK79m9SKUugB9mJ143ewr8Z2uF2cE4ewFCapd",
  "key16": "4sH9o4oyaE6kWCyUScrR7wTdywMYXADjZCq9CJNTNyj1L6rUdRnjaaa9Mwd2FyMSnwcjFeKkAWf64LzBaLcmq3oN",
  "key17": "4Xz2AkGJiBasujVkbYbsKxdwqKSy12iXWyDGgXbXREQym8XccgbdzdbqmtgACSyT3j4qQYfZL8hq7Brfa1aV5ovC",
  "key18": "3niNiNDfp2NW4AjRpzzFrZeanD89zdjSp3USEouD3SuW56Zujz5mGfm99RyfzY3nxHn14cxLhJTNDihkJ88FSckT",
  "key19": "2nJiTQhKE2YrGwpAA9YbcfeKjHYddQKU37cvzxBR3BYTrU6Ltfm1UPPRFkGtzFri5KdiBKBVno6eH9iYkoKR2pyA",
  "key20": "2aEGyAhzDF1XgmmWVEdKrLykjBtgvX679PVKWShj3kpHeuEQu9nND2ecYjvpMN6PUXah5muptGtVnhqjLPXXFr7y",
  "key21": "5Hico8UHnrfNWawYDKt5d9jHWCedyJ2VAx9BwgTaac2onZTWFp9GrtdqnA59ShmozBGZKv2WrvHcm1xq6GceoCxA",
  "key22": "e8kv1VWKWuPP6BcF1gwk4UvLjSeNyDJ3XPQ5EommRRoShDoh95uYdFsbPHYTyTiBQt88s4T9Jf2qiJUwPgr3wdJ",
  "key23": "JtiEbVKKEfw6FZQZNJtmbMr5c3QAJh8oooxE9GU1A5FJmqs2bAoes8GMu3eqXDYCmxQb6aiQg3eaokPyDTQ1drV",
  "key24": "5BJSqTGDjhy1MMtd3AfYLav9ikYUo6rNKFDdAoq17rLr43f46pQqxW7ASzmnas1kdqjmUTKwF8LTtRAg6UuCCNBm",
  "key25": "29TNqW5VUNVKgPiPRaDvdRTUGmgh1uMW21PRA7DFG3pbPogg1dSwKnVB4BUdxQhEZR8LtfTn3Je8nbbL9zwgEcnr",
  "key26": "4vnkp1RZJ9sgiEV1DMhuvamUEPSzKMBbvYdLaP3zUTYVE2KM6s4YbYCgAvUgz29P91Nc2jdPMN9A3BtLRTBFTGb5",
  "key27": "4mmHjMGtnLjTyKeBYs1smai3vjGvF2a5DJyUsDHvFYXi4bRjfwCCGeYrNqmapQdECNTLZCPbJDrtwC9vij9V9mWj",
  "key28": "MbhyCC5z7qLLxA3WCHE8UZa9ZcxrVrBw5769dZYQrrDsWxM3ANDrdA1g5WVA6skBv2uj1e97GARFZYu1jwqrCXv",
  "key29": "Gg9NgLMKYFbVwLfp22MAirqkwGyumW3yU948HpeaKaXzy8fWw9uMXotWquRh1CSCkxVGdE7HPxsHNWAGw3218QQ",
  "key30": "5WMknF2bRQfzUkqqvBFhaRPcoZ52xr3X7DnnkJxkB8gahPqyXD21oRCGfKjn38TxwJQMexRo82zrNU6oeVhhUSwL"
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
