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
    "jWLa2CGZHY8bp1BCdK276kSuNz3StKCSZBAFe8TM9yzGd9QSemzeMGJ8Upd3H49vAs24fY3tnwq6w1fciQRs2j4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e9BYmeWyNYAq9qfZCZEo61tqYqSvQBJoVeFSMyynnb8H4goD1Tb8igb7Ec6ffpdKuy3EQ6R1bSm71age9QF4xBg",
  "key1": "2P6QESmNX54PxdXaKAm95YpREae3ahYRhwvaZ1RXzcBeTmZEeJLBAKvF4K2CFviaegv9JBmBDa74xeEEtvpMzYyZ",
  "key2": "45XLtXsAH1GZZK6LEh7uH2Lt2exeyBCvUkbBbWDpamgM7wFEAC7nSEWSqn7jPfySbDPbbK5BRthoNeD4RSzndmEK",
  "key3": "29UaUiepLxwbr4awdRADLjLQUWH3PM4AfSCzF74S3qzPV5AsDUv7sjY5m4KiyF9GNaY4AoxnYJDbKNAzFYVyBAbZ",
  "key4": "mtAfuspWW7fgXeepzGVdHcPEJqCoR8xChkY6eNoWm258dN9NeD1uNnoHJP3sy3P7eQxLTfKpG5g9ijv7DSk8Mz9",
  "key5": "4XJGvz7fEB1YJmEvnvJwnHJjxpgnHe2zzPM97LfbM224nmXooD5xHYtd47hewiNcNPv7R9pXhzFuaBtc3VUu3dik",
  "key6": "2skozWsHbJfTerVmQa62GPHFmC7zCCL3qqnMniSXm3jbHvnCRyhoyaHPyGVrwmbN7sEDSTxrKqXc8m1V9W7WXuzp",
  "key7": "53LZ1Z3YrMAVqQj541JNupPp9W8e7NV9NVYgV1YpTWrGbGgEdWERvAJZNDEQpPPggNnhWdDEaSsyUmrFFFaVcdmT",
  "key8": "2gouqpQ48W5ugxZsTfM1a3bggVuYCkThD3axSoXvg3sBcLLeJMoHBtrC6Zs8toe9mHAM74RnNyzmfmHH5pPGsVqj",
  "key9": "2JS8LRZrt9bQtqaATmsMpW7MNJhryoTGS4x7ocWrdQ6B75CkRLeUCj8Hmi6sqX7toCRW2miomavE5Ls7DR5cDYoY",
  "key10": "2KmLJmEY4MfpdkMtZqywsYQHDpcZSFBbxt6ZwnR9CoBbs7bswbTDhcvi16g9p8WQkgd6NkvrXTmyMLb3v4tCdAUf",
  "key11": "3SBDX91q4cjDJZm4cj4injTWdDrgoVU1akpKnpGQf8fqw8Fd6CKSX9wK7ywPZxrwWdhp6w2UEmNmPVX59ZPz7dsM",
  "key12": "4i5EUXTX6wrHSp9FDEBcRqRTxgH9aE9oKShvthe6d61WzEGMH8rUAwt9nUSxXWoDHcMBvpWrVRm5DRrbfgpnPVL3",
  "key13": "JVbB1nraSexRm37aPHSoEV8G2wnqV8SW32sVMFNNJiCRpnKm5uBhPCe3hft7x1SZuBRzed2odaPJEusQZXWk9fu",
  "key14": "49upbnmJHEc72qvqKGVkPvD2MTubQVgeotkw7iFBJw3kZdsuwhff86mvVAdixn6Qjy6D2Swt9GEPaUKKn7ySCsnc",
  "key15": "3fKXa8s1aHfRQG8GEfzzxj1kYoUGWSkVhhw3n5zdanv1ZaqX5teeR8nqTWtNUzMeqjEUgCAY2JNGXj76ANqSU3DM",
  "key16": "2MivhkXhHHojk5SqSMnzGwHU3RuBNL1A6n6YAtEMsiJrPVbt5HbUBBhbmWxX1P4dwUTjX3gMPHKw5vdwpow6qRNY",
  "key17": "gToeqDE97vbY9qBCrWaVHStfTASP6M2ig3Fbf1UTuNUxfkE15wrURg6KD5VcXqLLGTKJcaPg3LQr8iaYYCwfVUK",
  "key18": "43cdnEX4rRLHQpqBh55RdH5t74WFLrHKcSNX2TnEGdFi2Ge99n2vbVrWddpCkeXNcFYwtj1Gh6CUKn6LYrjJ84Pj",
  "key19": "4sDBYbeEspkmYJGXVB1y297th1jV2MZRWPCCgbLpcnPUcLVtp4csQ6FrPWBgbYVbqeUXwtKy3Po6xMAfKe6pKUyt",
  "key20": "hdvtB77KAnBnfeRH4XVMYTQJ6adxZF3PA57tJSW4g27bChiLqnkn9tZbhjM68FC1UDeSaiXjNRMBUoZY7r8ASby",
  "key21": "2E6JjnepQEWoUehV21fqJMcmJZeHuUC4jqv1EDYdTooWrTvRc7gQv3B3GKerHReUbPH7ZMCMvrP1hGZCenPrStNU",
  "key22": "hKnzzAHnhMfCey3VrGK7C5jiM2SaPwqy63zqkyQZBhCfvGGgEEPea5NiXRE4cU8tWmda5trUj5KgPjoUMWyqX5G",
  "key23": "5gyYasGNQcYVwuz8T1M9VmdhkYu31YczMFR5YrzdvhCFyYdXWZRDTBKDLvH99zzES9TDyv3Azz7iHnuwzqgxEKbT",
  "key24": "3kzSExZNFmMsS35BFjE33MDRqM7PGXCo1bQ2cjJFsXdayejgBg8U6W9KpVXHzrVHvztVFL5sYJUJZbB3HC6bqNL4",
  "key25": "FRXZ6AEMvMuS54pHj7SH1GMdPJEzTw7pviRnznbRpRDXK4DvGAqm78dNdhDLGccYe6sUAxX1gu6cSCUYJ2aLdXc"
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
