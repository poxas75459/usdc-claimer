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
    "4NdRCJRkyYyLKbewPhaXQU1mjWv61sfdjYjX9tPDmi9FX1D4u2ot6YCXspWGM1soDwHZrvqMEXKVMBgvUbF2pxtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EKzGvtoNvcF1efzjAGZAQ4RuCehYfpJRcYMkNUjnKtf8aK6pvx4cmiEGV3oUzkNttBhRpFCUibTCtZcNHMu9ZFn",
  "key1": "62KfyfbYi4U1oXpanq7xkJ5vRuXLSFefmHyGUwuQBNX7qZETnjBofGwouwTAwqVamLX9A6FiNgoFQMMhqdoxZpyG",
  "key2": "QGMA6trTACNiNRP3kCiGwNh9XeS64TesF3Y4dtLZL5cP95J3PWPnhimrvrrsXUwVaK3kizaYgMNqeGoAozb4hHw",
  "key3": "4r4ugHygXss1CYfwdc2VmQFkpGHJecitVRUDB2Gs9EQCcEDsmEQFqr4ZFtBSQi9XUAZtRPP399opkiithzfzgg7D",
  "key4": "5G4kBFG5ftsdi992Uf9SPK1ErXjetX6wsnQx5maVQUpF9693tFqi3eaUAAS5Uknnb3dYLwoxzytZGDeS54jpucim",
  "key5": "a4Lh9NPdqnDcEEhVTRQ2WQC7iM9c4z1Sf1WSDwHa7z2hESGE5vbQH71DFWdhJUTmR8rByy3ciKgXmwWsiPUgeAs",
  "key6": "3o6oGFPhaEBdskB8QrMbsDyGcDkGgLyS4LgJivmVYL7nsBBEW64igAsYwk8DfwQF9DvKZkxzUcVeE92fRQb54UjF",
  "key7": "yrahReHbiyPyFkaHaLZkwW8MV2pdCHs26a7miEpMc1WdiaWqse3J6mHjuE4wYuNnxc5S3MyCQGTW86iGsJALbZm",
  "key8": "63xbnAi9GkA1ftmBRKt86anF9DNT446nBSZRiUVy1Pk5RfMSbam84Z2jjHBEsmsuPonUHCGgbruQ22jvRWsBe47g",
  "key9": "55Xns1Y4AKRku9afbpkcM5tvN7n7sJ7vaEHZHUTHmFc7UgbdD2qDwFyEsyvhNxYuuX6d5cC651WMDvCfu2An3NCe",
  "key10": "4LAB5y1qH7QpUsAYPvbMjo5pkkyFoZRd9MDuWZJaijHMYQb2AyotusXAM7Fw7S7cuc6YZ8Ympiex4efE32jEaYxs",
  "key11": "43gePUTi53u2Hjiysvyb3iX8u7kxUcsjpP4jB1LHpEgumuAZJcqhLY5Wxe9V2NNQxbvbYDxyH4QzuTLJCuW5NQmp",
  "key12": "2e2CoKgyiTpofHZeLKv3PzpMoqo2tg8wPpr2vUwxGiiuJcEdfBtwEbf1jtFokxFswLBnsSVPFbcu1gBBQkUayjPu",
  "key13": "5PUHQd3RZWkfQJxfDktVPTW3qgacJFrR3AtkBmFg3KkFEF9h6qdMLHhrbpqSvsoEvZ9ZT9mYRfVH1oXp5pBw52i2",
  "key14": "4csNd8iR3vc17HGan5J9SQMQQv4CF2bfTVpwwDDbUemWcqst3MfX7Ue8CuyHoJ8XrBy5tYw1L2jqBYx4nD8qJPRA",
  "key15": "3yPpCoEj4pCSwdqR2CDT95XXXdYMpEkEkPYWTxhoSQZQtBqhrAHnMShxbC3GoPSyUeGbt5trV9ipdGXBMw1T7NPg",
  "key16": "guiZvra9CJR8CvxfVctspC31EFEvDcD2okoFb8vzbXaaVyknpLfkZyD6WsddzRJPQKoG5Wqb9aSe1yJ8fULNJbF",
  "key17": "NNaxD7bHqxzYuRSXJBLgiFtUoeCAAGbYRPF55KEv5ZReqZFoME9WgF3NpfxbBZkKVYp423qNXiazJSHbScqykLr",
  "key18": "33JZB4MHXsrA7BsUHc3tECHfwUYcxjxxbP8LGR1hAmiTQbJd5sN15PJ2LPdmUUoqG3iBvPyZBAMz9LkDMHTfzDwG",
  "key19": "2kFP6wgd5EZNJ3BDGjcPui3DkC8LZvN9vioGFVSnPZcNzdqa9fEwzXcfHtpw9YTSJFHxR48DsJKEz6SWph68wH6a",
  "key20": "shgSQtW5m9Jn99Gtype7rFqAm89N3h4sh4LvxVsg665kYuGaVyDSTuSCog4b2BgkzdmXgWwoggSzrMCTyvDd8AB",
  "key21": "4r9pn4wECT9xSj3yzhcSdQb5Gm3thJPCgBrFeQNBV6r6S6T7kHQNRGoNMgHUddDt5WuwX5oQhTLgESjZh51vv7DP",
  "key22": "5Niay6F3FRhra77Uym94HvJ82RD1gwRpKxhRNZYhAbvLW4gqs9QY74XhUkjNQaJmNPw8mhQHPFyUAsWX29KPZtNK",
  "key23": "4rCtqbjMd5Kd776YXSZg8AkJ2SuXX4PmwACxUD9CnhJkLfkTk2mdW6iHpKJjmFrhBYdqDsLytcyceukW7nWdoBdx",
  "key24": "4ZPc3Cy4ySyijvxrZFYEnTdkVQzVTYUJw16QgH379U387ZkKtx8Vc8Zhr9PV8z9pBCTEetus9uCokCQZyofv2WqP"
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
