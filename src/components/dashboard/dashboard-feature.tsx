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
    "4fbJzk96frUcgVTvDspEGVNDhKffaw5CsUTfZV3iCbWLYoMGgcr6yGaNDEuPcHSg2PzxCEC2zWKjTaFS2Tg2mNRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bWc49WpE8yqwCEURUeqBWzZGvsbf8q6oVvCtX84PQ6ZtpfNGisdqC5kw1r1wUw2i68DJyoEcJYhoi3JXMPs7AvA",
  "key1": "URXvKUn8ThbkqCQDmYXn4dyARreGtvmKLh6fXHex6Y1bGDeh4yhUfqWwEfsCi35KZ8TvGSz1ui7UsJCJDpB9qTL",
  "key2": "2cYC7aeUJpJyHh8bi4suvcjDm5829quR1C3E9DkFt1MUikC35XWEvYzw3k2mrgRijdSSYwUpoaP3G485LYttoosr",
  "key3": "3J3shncnm2hpchHuShf9HQk4MFsXCiqbs9DNqj7EzV4dKmyj7q7yjin7rzeFCoPY7WPdLxpKQJrHhwLKSHyjLF5K",
  "key4": "2PnBym842ECWMZtryHsYDqunC6PtHy8riacEqkDQAnszyX4hy4UkxoxySvR7Wn81agESVDiksYBG8bQ9ubp49aQ8",
  "key5": "Xysi978Yc1BZxNXFA45V2YkRjPhpDAw8ZYKPJgdqyFnD3XGTLDkGBMmXh97g4QSEphgtUUD6jSitAcnDGkKTLky",
  "key6": "5LgB4QRWTEBhgmrz8dYtYEqNicGyy1A2rYAMwz3v4yMzV4ymC6tYGYq36QBBXGYrT2qSyoQqh2qNCwQKUAnMp6He",
  "key7": "3jx4k3PMqJs13DZmd7QcNkqTgGi1injdciKm55Znfg7HVmey3QTS7skCR9X68sNgPvUSjhufTc5DFYzxYojN7rVR",
  "key8": "422YXKKHzA9zJ6grXMD7MZwU6bWnaVzNKULyrKkBPUzPVxNuMeha9y9Ep68B3QA6jTMETcpYHZcJdHTzxhJXV51h",
  "key9": "3U1scn1o3LgWJh2j7YAyyFJ8yyLyf4fMkQi8JxoVCynfzF9ktDrRsa5tBpF8DMkDRAq6vFAckDqK8Pm7Bj6hY2Ck",
  "key10": "FWzk9pwZzsmJ7eS8aqoM1kGoxD5EyHnGWB3cvWwQRu4Cz9bSzhbgJRw3t9xpqHtwFftjViAMr24LSyk4Whq1KQu",
  "key11": "3tCZVLeo4Z65uTAsAHcya4vm59L7XES1CtvpcC2Pv3L9gGNYHEQeJMRFTTLconVzFkifPpiBXqrFG7qMSHGjtwpH",
  "key12": "5cp1yhLToYVksvGheYM9hosvkJZVySZv2x5n5obEEPC6vjFUUQst6NZPmRrLgx44fRqxyStvV95ZPAgEZo2dScKz",
  "key13": "2r1KoPjmxcwG5JHq42PFNqBg5hP2c7vw3rWDmSRQ9UR4Xkr4UvrEaKR374KFNxxYEvsy949SosAfHiQU2ubFczSi",
  "key14": "47JBptENxmPoZxJxzdF4qTRUoH7AU494D6EKM1M5ezwKVbA9bhrcjgRoSXoq7RkH9ZtrSN2nfq3JTx1BkptATVBW",
  "key15": "32rHKvtyNDLHgYR8myNn7quAU6NdWNvpraayYKcyFjJSR5kEmLN2cdLXJtjuu3NKrt6gpApRyJN6sUq4sQSb8hC5",
  "key16": "62y6qsNtxgnB9rgQjrQZT52JA47hm2e87qKrL3ZxCwf71g6jKnYj4XXuko3iYZpEDdaCtGEy2uP9Qq4QvRnk582Z",
  "key17": "3KF7jawBRwgMqmhu4Y8UvfUSpfcFnNLb1jfoHoJdGSZWHyVjPan7VUfsBG6ZDibgV8qNu6b2ibsYsdpQn5swvZ1g",
  "key18": "2omQB9yjMYAtjN44QFsXVHzS8R53dGiTVeBJjBzq4sAVhUhZqxjuCRjeR8kYf8U2Yu8FKtd5wTDe5ice1T56cb1Z",
  "key19": "CPq8yTX3b4oUbdRCYiqBML8eAPBa1Ne5yqsWJeZMBLKAUCCjT6hpowfCokcaNGtsVdjXvBBdnBXWsfQTKVvNHRB",
  "key20": "5tX8upwYSXcGPd6dCf4CLkXHU64CZUqZ4wxt8ZzqfvFHYdAGHpxfDzWacYwmYyNsZmE5vKg73EbkpfySw6EaXHk6",
  "key21": "3yhqez2KJgxGmPU8dviGgWqpoKvwprFCcCRU3nrnYFFQpe7tSefojTsqGABzvH7CG25ze1cFLuHubnfL3hcK4z7R",
  "key22": "4KYvAxHpGGioyJaiaoQp1VH7ZGNXXrwm82u4KvGkRerQwAEP1AqwaQTJyWsH8KENseza4A6ttRkQG2w1sVsc6QCW",
  "key23": "5JfezaBTLLzqS7z7jvGkTEu4A5Ja3uwwZBdvgRwdrgrxsUSerBAMNvpHdivgFm9jVTut5zLDNock5H7FKvM4ev2M",
  "key24": "mwuLZ2vi4P6t16QnqYcBx5cDgkst88x6TBCP7yUHAb67kep3X5VfXp6cMaxRnqNpcgPEYuWDaieT3BEeKqNZove",
  "key25": "5svtuXppNTL9AAXua9qLXDEeNeiRxgEKQ2bo2noptPychBFXSsJGHae3j6CBQwtZYaetgyKMkLbf2RCRjgWXVi3z",
  "key26": "4JR2VTAi6hNv1fvuVj67pdW1MyQXE9xQ9dNPCbuptFB1xRR8swVwNsM92qekHePRHpGc4NCqRZYVL2tAhTJn9Q8a"
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
