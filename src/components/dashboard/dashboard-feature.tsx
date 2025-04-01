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
    "33KaQP8kLDkGhgZWCJ7dLUMRB7vs7gwJL6WYLNzbW8GUtuf3tug9NjcWrNZjsCvbPajgw28QKYrSsvrjFaDvhKkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gdbLnWkYddhHh4nHTAvpMwRmcM61VYsj1DRj8wTeaTHiofu9X5UAZNiaDsQcrC32jmU1uLcjFnA4FU67PKv8uoU",
  "key1": "4JBzwjrUCRr83PuofMLwnvPizC8WVjPCLiDufmTkJXC3BK6gjjCiJirnChdxghZ5kdH4PirppRDGHqqGcdbkV5A7",
  "key2": "5VJg7vrp3qxrVjhuRUA7M2jEzvHhyZxYWaJ4AvkMxAoYMw67Wa5fACourgLcqDg9Nfq3CD5Ckfby36JQRonurVT8",
  "key3": "67ocz8D5mLAFMjWEXUM8nbHfDJ5PhnFJtEajuDJPEmhz9qGadcuaMHB96SknG7heSVkxaHEx5yMMdBBp7ms94K7h",
  "key4": "2zw2yDzQKtSSnjs5iYZETpP8NwCceM1VUvJwmZdnQTHtRgaoWhWjh2oc3gjhXRM9batUEARatCsURoFyMBKPCzb",
  "key5": "3CyBvnkP1uHGQYXoQLXq8QoJ568U2chhsBeb2hVkg6VxizQisAqoTy5KQaB7VLbjKkfqaPCxUwN9fWhZiduesvTF",
  "key6": "4z49DXq9GRrWpEo7xfmCwVfWwWtzhu4ghBsezNwBz3abkSfpQqNRaYXMjDUR6FWHbMieoozh2ZWv3CtL3vxoaBJG",
  "key7": "2GHGw7fwr6Tm8uTMYRTxEEDQ9WzKpwM7NZZBG2jKx1zBt8XjMVKUdhHgNS3p57XtfmftUxNRwoyE1BFT8ThfyH9J",
  "key8": "5tzVJZb7rzMdYsQwA8xNySU2s9KvspswHziKq4JTxLQyTgJcnwRd6R2X7SzLtcxQTrr3LwYkmf6922iDRkNBnBt5",
  "key9": "5VgKGXrjCCFNfRJGbV9htMiqBa9TNjFd5Xczfrug9xLA57pccfJyxrsBAoXAHNbx6t7isz3sdayazs4rCzD4Lojs",
  "key10": "3cgPviXRPSqV9qztSKUk5SHRkihPmp1i5EB1EwqvsatuvedsoRKa9tWrFeApN7BPWPTx2hdkUs98KYQGXE8dymx2",
  "key11": "54yc6pG2jtULP3aHhrmCWjyfR4qzqPhAxYKiDswcKpiu1V6u1thd163xSsq2airTHUz4ZQfHzNG8iKykuBs6nn4w",
  "key12": "rMsE2CbLSaGCR1Dczdof51ZHyjhGSyRC7UC5Wv2mk71BsNSbSZ9wbvXibgg3db67rwReiDU77CH2uZFokBENvGx",
  "key13": "4awHrvJ7YHdbAh8rGGkZubvuWJB4CZv2Sw4pDaiG267wvdDgtUc4UXqGLFSjkWhvq4YYW2Dt245jXk4rSCi2Zfsf",
  "key14": "2YHeV49ejTvdhnLSH4FgXezwVPFUX93meMr9UzofJq6fBPdw4aEcDrV88h7sTKED2hggiXSNCaizZFmaru5Uuqxw",
  "key15": "A1TpZyHauuFa9XVDWuQ8k4YDk3YEoWAsPpfDyoX27BfseQBgdpkv24J3nS58RaoZ4J5XQce1Hn2rBrTVgEwLMGz",
  "key16": "5hbVP5Gb4BtT6rVhchLf2ZEK7vFJRXXo6iCcgQjkAk3KLpuRW5tE2h8wf6m7VxXGJnVG1cX48yM4f8PLs1DSTMYT",
  "key17": "4XyoEdgdMaZKzQWiqjWyT7vtAuCqyxFdZRQdHJWvSUzwex8c8UsaiPdTpA6rBLkYf6pF8WA23TN628u6JKYTjmJ1",
  "key18": "4tTW7hPA9QorhBR8tWJnHTFt8mbbqCFZi9oMMjeHrpbZRzZZP5YU7cKQbVDtgFnUg1HwoMWVcNdzBwUBb6yu66B7",
  "key19": "44G71AMWVN2t25arF8G9bBHoQPa8zn9CbWsxBNPJMT19TtwsA61XcwBkAfpo26kuWAoYzXuPRJ3a1bmKgvMMfFwF",
  "key20": "5dGReUaMk58VeyXNCfbXD6BYDWBgUt9e9Z9tRYo4mS4hR9YLPgPkUW4CQMbBghiMWb7uHfjH6YT5rjUy1pbYFu5Z",
  "key21": "SbACtPSXNq3Cq2YbkrJpnaijtxPZZeAi1hefzr16CXoZgAsuw98JTnKS3bWDGA5FjWHbBsYHqhXyfn89ZiL1XZz",
  "key22": "3mr8cZcsJnTTQ96igUWSdT9qGnWj7KTWg2aSeF3Dx6GiDChE3Y8eDQf2oyGexzkSF1umPJtkLcRXDQLBvj14BVxT",
  "key23": "3UYseYvSihrDSSdZFz6kAghy9XHB5fdVhPettpDwi244B4j1M54WkmKwETRidaZmQBNAz9WAg8bpLUMm8M57Brqn",
  "key24": "27ETRr4CtvbKAgV7thsKaQheBxjS5X1g8vkUdr6RgHeHAZ5Ce5bjpZzYNmTVmtB1RbPZxPBcB8dKs9FcAkLYqSWh"
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
