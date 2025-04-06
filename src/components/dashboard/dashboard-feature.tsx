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
    "5dsubfwa3nU9wuhDzJJseP7nsPcxHjfkeZAztfJL9Lhh7kuk5G6aFFdupAKy858TJGuo6VRLuUuZGaCtVqDGvPvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9PExNjCe4eEhBdf4ZXHDXtMLULfVsHXpMbzwkQ7ejzTX6A9UYcjo4UaEuiYyu4UuB3oLYjwPQg2Sa1S35SLPZ8",
  "key1": "1b86KYStPSMe5AT8Ade3H4Y74JaetNBGh7Ai8q5Eh71h1jCnnoY4sy4PVnacNHJQh3C9ci6PMiJZLzvPRgE1wHu",
  "key2": "5YWkWTvTTHLHSUS6RdCXzWeEv8DpSJAeJe2nZEKnLt7yqrrdFttADMFCBhFoH5AH1TrdssoUeGHu5pA9Fp2dibsp",
  "key3": "22LHHBw2BFD3jFdymUcx9gqxgmHXpYxh8jx9GDi7USDodnvgezqYHvbisdSM6otciNYiVwCNUET5jCQEsWChBhti",
  "key4": "5JeBUz3yP3WgDq62dwQSe9CRPSTumZY7F3aJCCXAxikPLkhAWWtvsNc7WpYMkJY9uav57r6HTFdi2YVewafmg9hZ",
  "key5": "3qwAFsdrkfmHagQQYQjkAW7Z4GShBpM9Ke2NAhRHCquaDBdHNbRUX13BhoMhidEqaC7WPKDRZZUBssyNrc7i8nnY",
  "key6": "3u9NYzhq4JZCGRnVzDPyiiFrsVLS8MHevBVp8Bf49fqgR1vdRJQeQs1KoZmkHTGDjaHvgPkkjNjiwfMbdahkG8P",
  "key7": "57XdAMB8MntsGYEizsvFRgV8mJdwFyP4rNLT6rgsAbh1xeJuvKj2hT19QuDAuKEqyhQqektaPMoyEkj3QWnRw2B9",
  "key8": "4YKB2bQLAFzRfcmrkGYLJkA49ANAhiVhXjSwPLurR4pVDLDvdSKALk7mu3BYvfWFG9EHUDzeM873K8kB8HjPYRVh",
  "key9": "5k49qU3LD8Aebf4pMAbfHB3C27pt8dQ8kZ4j5JYxgBniLq2wJPq2pjQdWq26kRjZTEUYmudjwft75oWJPnzpwvk6",
  "key10": "3X6Se48RynYfrXevtGa9cjdKCiRKKbKLyinHiwQiM4wRcaUGyoou3wui15BcuLwPZw9dseMLJTJyM6sGc1AiVdKV",
  "key11": "3KKZcK2Aj5NArGXHymRdeCya4eizvVD4gwP2FsTHKw8SzY5jw9GaNhxtF2kTvrVTn5fbLc2idrK7Czr4ZVqvH3Hf",
  "key12": "4xYpsknJgQsKGqviPM32RfcNS3xCWZdYMGrcSNZqW2rnBjztoQsWEvABWN9o3uYn5yjRctVUSoMbu6ZpS3ktmruy",
  "key13": "292SGtpciQyNBqfM9KzXFxcAF2yEsaqzWkU13YgQVjz7rZQBe8SSxY8Q6VDiMKfqa5fomqgGMH4bknpgX4AwXbfX",
  "key14": "2SFGrxSNvnuYD2RHvhoaq8tWzV1So3vPB3PdsZyTjTK7RE7WRXRV2esuShmg78yNjBFuVZnQjnyMwN9pt7bTYvFa",
  "key15": "p4qoYBcwn6ChAWeNdG8objJzsmJd1zwKEEAxrbwzDX1KLbQhv9ZqTD3DCqZwN7U4LTABFruykMyfdEKcHZogkkp",
  "key16": "2XG7Tt9xT4yK2qRmkjygQtPwpWuZeFfnE8j4n3CpWGenYezGH4eY7NjA1utcGrVR57RXQquHYjGpHgzNWokwrYAo",
  "key17": "3yQcwqneFV4xRo6Wx37cqnND1pieKazdmaNmjSLxK9DhxTBdzGi8vUeGBa2VcJjZZhmHCTr3AtocwxpXFARPZpn8",
  "key18": "3wpU2JExbnacUTv8CiYrkG26CqDzyMShtvzAc38S7ANqr1iauTVM768EUcK7tSXj7BhTEUCEtJ9ZxCH8hDPYyfJC",
  "key19": "3KLBLPptvYZmrdNNybQNCfTcJKKjb2b3bwZ2Hyg9SCiTELiigY8vhiBryzFFnkucDjFdotogSpvbA946uSmdtik1",
  "key20": "2QE87ect85Fa51maxCQJvsippYN8npWsShSRiXeeHXiZuvgn6zDgxJDv7Wq3rs86fDETVr9QKXppFQw4rXiMu1d9",
  "key21": "55iy8aYkz7N4FsgX9s9SZkkVCpm5W6nxvdkLydebjAnLk9K37K1MDMGvUtzVq7cU9d8ARNxPG4wtKeFg4CEGbCUR",
  "key22": "27peoZnwhBQ2Dm2aJVSz4djrYbQWGCNXNuPPy1fUB5C5H2s5RRS5hhU8Fsg5r6dh1vduSeEM8Msx5YFTep9v4HMS",
  "key23": "2arvgs14jPpwSV8wcosModRp9Shk9zcBnmYc6y7u7FSfikJmkKJY11ybnL23MvcEQ6rmxLRq2fpv62JzyhppwiQs",
  "key24": "CA6z8jdwhGPvcphHioNbigP1qxGLskkY5rmxtorbsDD5StPMGnit9TZ8iBtLPFbwwgwRennPtiPAUbiDM3pd3Td"
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
