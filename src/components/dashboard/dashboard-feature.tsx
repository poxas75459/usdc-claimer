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
    "5THqZCT2LCmYDeAPAH5WPMHhttDk97v1rz5mXHDU6u9BAt9RMYwfogE8u3ki3VV6bzjhA9PrUFJx98B46NiqAwmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MXnEVUwdzb3iyELckvU5Tht92Zr4qLX8mD9M6B9YhJYxuwXJwapxGBBNdZADrK1tcEnuuHmFGVDQ8LFekHpadRz",
  "key1": "2MsNixyprcNVLARiNYz47hTJk17sdHRTSLW3PMS3LY4PZiygDbNG4J9cN9gC8cY2mC4jGEtNcgEBvqRKbdjKf5d9",
  "key2": "5VGKqJgWekDAjzLNVzbppRE5op9f8RrWHwXY1jErGPTPGSS89E4DaQzQgxp7iKeUxinXVwfabopwMN7BScDHPufh",
  "key3": "UhBdafRpVugdLL1w8MJ7DJ6TEtG58B7UgzMNjojU2DCHM9PFMJDLKQSVVpKEtEpYNkn18Hgw8xGtxWiNfh5u8tY",
  "key4": "ymCzyh4RoWiFau6sdLBtx7RCNeVwGajwmNopUjJkGWsXdPHej8hwMmQkX6ui61xP7jneWnnHLAg3w1B9CBRJmbP",
  "key5": "2H1mzrugcqqwdNe4thaNbmhG6ex9CriJDiziEKxjLKoYCywpa2qV9W9U9sYSnvH8u2rTZQTgBrSk6tcNfdobznKq",
  "key6": "2TfndwSmDtcvxsuWjWNWonM1K2iUPUoYCwVBrtXARaAtQySF99tJFasgtuiif8t6BRdWZTbaTohdhPz3eSn6tCGW",
  "key7": "4BCvwGPEXa2PKQGA5XSNAHKGBniMBuMfsdgAfga8QBQ6TJDg4BtxNumCBbAbANAfGeR7Guid7sQ2hXJhd25amZSf",
  "key8": "3NMUrtfcJFrBpS4HxLwWriz4AvP3KJZsBfwo4wY6MQyZqrssqyKB5vgvQHjufKCrnjiQzSsrDYgBqfLsASrHm9UU",
  "key9": "K4kUprzUtBNpC49SWiB1b35nvZmuv6hXBFUZMzDyUozENnrPVHGv48B9JPFdKTZ1DLuwNd3iGfRZzxWQJnUdVXc",
  "key10": "2RpJATdnzoeejjYuxxDXxpVYh7Wp46drNxfooRFzut8JMgGya2PeA3R4pcF5Q7nNo3v3M419j6nZDjdprp6NqA9j",
  "key11": "V7T79FEoNp7HTYfRy5MPA9zyrHxwwU3fyGmfEZVtPd7tX2yirxkC67CxAxF5kziyL399A9VF8h2bmgXSRz15MLh",
  "key12": "n64kmAytefHw68tHJb3XZHuMroyLnmcnQq9quBqUoUeQWpRGd3pbrBrX8kvU3BheoNUMWJNsFaujo7x74bGZaXE",
  "key13": "4fskaFjBM5diaQVwLwnd8BjyLYiwNdF8oErqFqLDJgFQUG8ENTPyQa3txJsDKsJSBkaAyypLt2dDJZKitM3p1zoN",
  "key14": "3oAMkR9wcEjuPXg2mp3F7dC17jTe1VjaJ2fbtGuiEnkSoUjYXzzPqp5SGWGuy6xh2rfTfmDFBZar7xp28nCtBqbo",
  "key15": "2PuQA3wWk1tThbeBjYQCe7qQRPzex9ziBv48s3NskYKRfn21aZuXoJiA9PbDu6A4AnL82KFMimMWY2wf7f8qmGDM",
  "key16": "3UzM2CbeiZx7gtNscbacdeEYAjxH2Zp1KxdTvfLrjwG2ajLJ2WkpUmJU7Te4c8v5bj8eofszgXaK99wV5cVNUtZU",
  "key17": "3CdGWbgAyLjsaoBovKkEsMDzkRQw7LrknqUKUKwpL29VB7wVPUfzujhgZcNsePGAWHkvNGqzaxwJ2cJyxpXQszxc",
  "key18": "4efgweSQVTn3vVRezJXsdRC5qY5VvyBdP3jduQWMD6BP63UDJbxEYSkHPzNp3kZnNPvNM4sJXXwaHFooMP57MGr1",
  "key19": "465ApwwDJARqLr6KxDs9jcPZAGhE4v19Fj6EkXA1hAHijZ7aW7Uvx9XsVhYwjp3KYJqRPtGoVA5gpG6TUS33KoG5",
  "key20": "3Meh9zHbsQjjkpFHgphY8nJU3rXEYoCJGFyEd8ycEoYNS38aE5EBtx1m3kH4yjACvdRrGJ9Y4c7BTMq2UdYuHyy1",
  "key21": "34Ut3wi5Pe9v99XVPu6hCWg22FxZF7tUZDjQeth169WL6d6htAkHp6TzXhJSqnVkmWxn9GGBBjm5MwyTQ5NXTXhS",
  "key22": "3JU7jw7L6NUP7dihqG257eoi2xTuW3iEBK4HSunWAfvm8isqw8qCdtWS8ytQ5bFN4LoSMci9xFpjzZQRWPRaqbWf",
  "key23": "3PDSuM85z4V5ybmQdZcchTnZ4eeEwyRmakA1YeybEovGKimB6gqiDogFd367EyyhmGMDzCowQXz7TuPkzMdbPsNe",
  "key24": "4VrkgtduAnzLkvWvwqxDAY7MPPcr3tZQ5LDcgocxJYih4bSTGVU7MM8zzUZtgB9m8pXBpbm3EYnjFNCcUtc34LH3"
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
