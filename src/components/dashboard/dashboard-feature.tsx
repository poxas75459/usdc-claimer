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
    "4FLNRq4Gth95v9jfr77n4QdT5DNswZFAMAb5B2mSHWBswMjqTgwqDyWVLc1a9CUq8V42gw5zwVaNdt9BFQyFrG7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zgeieJtNkoB2LY7bTPgnPxGqUdAJhQYrqhTbuh27t8HEwrT1ssFHSZJexWH3Xs7noXsrecVnwPNEkoNWfeRf1PQ",
  "key1": "cp4FBcQg9Bk4htTL1WmJqQLTK8WmcSCyGvpS32UrRTce6zdPEafjfA8NcvevMnjrLLe7vczZVTS73aDqrHNSC5u",
  "key2": "3jK81RLrSSX6sZVMrCwc6i4djHoar3kea8mc9fjsVefsKnKP3rmRPJujUpN4Me3fUMxB1DG2RaqajVgPPW1bLVLW",
  "key3": "2zxfoCsZ2gmxjzDsdKz3FBQULqA4mY2AjdEFwvp2qyFS26h6hiYs9aC1kbXJyBuDmgm3XwXdcGfkXfrGyrBbPLer",
  "key4": "3nLDeSNrsVaGkrRSaZe1sgitam7obEoU56DzKZSYjDDqJrX1G6QDqPemXTrCCQPgc9owHEgxhYAFDkB5kfWPihzU",
  "key5": "3sCj6YmAigoMbGYhB9qc2cmHHmtioXy9byD8UEo3mJ8vpEwcEUfRPFBUZ7xvYikvhFVhNZE5HQE7xbVS2ynfrVZi",
  "key6": "554u7eg3jnAqoeMom3pgnA3fzDtYYFzxbiwAW9yCJRT936afpDhuT8keFTNWYAXUdGfx7LAVLA2whQ6QGYouXWr5",
  "key7": "5WxsrA5oDoS7hgYKTHiB6VWvF1v4NdAbeKa9WFFf6KnnUQsjiseFKhEaQvbETrBDe4BmkkkKcX7QUvyhGxBqhGhX",
  "key8": "kBtoCrLgj2fGYowrykGHen4RBVN2RDfZDeJuLodPKqUEzvjySXddQBDLNhErzqqAhNJoBH55C3Nk3pcXiTokLno",
  "key9": "5Vhn7uFzDwmBC5W9yrHUmdfw9XccCFzT3FZ9NenDkTAkqvJ4Cg84kXfvzaywKTu6ugXXP46sU3rJCTUTbSNDrkTm",
  "key10": "32f2SpWFJ4fzqcySVE9CdMxAyZMxzukXNAJZ2W2rvNR5b2FZ99DePD8XrACMrvZNvZ2KwPF3rQX9Rao1Q4eS2JV7",
  "key11": "5o2gKeeZNKcLrEGga5zcVfxarEM622RgLytVYS4NSg96YnU17PfS7xAbzb8pmPasyWaBSLiRKir2RgT3kCyVEtQV",
  "key12": "4MaEX4ebjKuFQhqAdd1GZZR64w7xivJQTV49tSpDqeupzhHkcQeB4ZqpYA9Yd6ZM1ayZLA75zpDHrJqQmBtCaCmv",
  "key13": "2zh2GHTCgDCq4VMeLZGPcCY5Me1PG8de4GSvrPFtYL8fRSYBpbm5fY6BJEm1KVdr5vjjTAKfkYUPzmDtokZ433pc",
  "key14": "4Tu7UYjJKPk82JWBBDRKRgqSs3fsR6dJzoqgiVgnJMPUouS8QCt5sResDTej9XWWJxSDZ853J9wVP2SFuXwNxBcz",
  "key15": "5c6CToxVnv1AkoWZVcCcj2kgYbBTDFpFGAqGq9U44PYSrgXDdFP3E6GC3vVSummaAxRCurz5BbhwUTQDGMtiiTkw",
  "key16": "2g7fBGEJiTvnxSpS8zBPYpvkh7bRkR93PFLda2nwbBgZ1xjMbgpfX3pCysg9j5NMMMfsmLKvyAf8WpLgGUepAbiW",
  "key17": "5r11xVTsgQ8cMTnCyXaPMiFijczGiSrWGZ2HHCZNbpb7jwHzbGeVUTyALAuMpEUPpGZTJkGL6DUVWn7Tk7xW9vbz",
  "key18": "SZvrPer8D4syYGy2jMvjyPTUJEwQcQRzJwRzfMT2PEPLXt2hTvvN3yPNGocDzHVcNCqP9guD1xf5ruYqKAaezeM",
  "key19": "4vLmtz8Cyvh2uE3xzixhU4vgrpoZ1JgFPPsGR12oAoVu8H478CBtjX77Q3F28XcaABNG1Cb58jPYGV2SRSepj19H",
  "key20": "23eN75cRVMQFYcH5vzGGgbz3mcdPE1wJ59ubAsJjujQ6YcLNWXHhMUqiuFU1LKMYFnAq87CTsvUMAKyPti61hrwH",
  "key21": "5vbY6SmPLQPCe2JHVj2v1JqnJQMRQvN6AQ7Sscc9hX1HLGVHi6nmM4NhaXVuwUan29SheijupPpLwfwo6XxBXp26",
  "key22": "34kYXQMXN9NUmBJQyn7nCKNsLApLKA4oXdL4eq2P2WvkFZvRbkEGj7VTcPQ9HoFxToqFAspsE6PxaV97HjjJmGn6",
  "key23": "3DfDnEHKSeYJsGTVoJ3vHNWUKzkauUxugmEeJAjpArbZutgVZKsvJ6bPREX31rRGSRjEo1Zm2owE7BmHAKdSVi2x",
  "key24": "4RrqZ4tXa98GyRb1L6GT7JBipR9JAv1R4rzWYHfCsgm23BbjzqkMcimXymAXyfBCAHZepeRVE8eMTRS6MQXpnEky",
  "key25": "3uTgn6wRyfX6sNGQs2Ft1KCoK9fTEtFBjFCUCjE8UuFtXXYuavnQ1nZk6RCN1tEoSaD4XjPpe16g43r2QdUwJg4D",
  "key26": "4nUovWSnh6adMtcpd5qu9t3h3YfiMpTPHBopQZfnwXhmnYBLa3NciaWNkRiHLrH35dweSLSTLE4gvXru3NFMvGBD",
  "key27": "37UtPcieJHx2wVXTnkCZd7Ntn7oQBSUmc8FGNmpf7A2vR84JV9ezQKYJ3WzDg1dqfSt1FVZ7BtyAKrHjvxYa2vpu",
  "key28": "48YjpQHaEhoUASboNLWvNNFe3PYnWtrcoULDEC6qTy8tLQQD3WhmKiYcakvq8NpMhyYFGbTDK3jQyTMag3C3Z3dJ",
  "key29": "3wc6nJpKg1NAamnSwrWyiSpvhK8Yxxoyp5v9S61LREK95zvdqtwifoqDYUrTwv6xU5SdkGfnqngKpQukezMsgwDQ",
  "key30": "kc7dJC1ysFMFvPg9W7ytmgKnjxbrXYsD5MfiC2LPCJKgQoEkFa3E4tXu9f2d7U6JM583RN5sftbzWavW5HegnHV"
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
