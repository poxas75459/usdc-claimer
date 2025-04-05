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
    "nTHyJZLKCXZYzEWaLtgjy98mBVzRiw3vtgXFe59drS76ttU4YctEzJ8f6yVRBf7BiUoNCjF5aNThZEipkcmhMiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RXFZB32cHsMy5ybfrBhjNjqnTNLQewZye9Uxsebw3E4R2mTJHViizdLUYkTy3VsxinP3fdPN1QBQGShJ8KEKbGf",
  "key1": "2FqiGvgdTZ1gYVRgnU5mrUPZJrXMWTeMWR1d3qgqs8TZqLmD3uq8KWPLZdVmLKhtXcUt1kw58tvbwtmXCpKqPXbk",
  "key2": "5mHLDZFvSu4cnPS6iTDMDMXCcrxWSdDKkEss7uGZ2v43NRRpgkc5vfFx2yCWxuPvkSKpucF6zjZuEV76XvjQvYxt",
  "key3": "bJQmtyZL5E53SarPzpqHdt6pJ9L4U375xZV5vQ5suxK5qswy1tbFmrerFVWWogrJXr7NE2eJpJKD8NZBDYsXciB",
  "key4": "4AMFgThPWHXcfemVfvgwhU9Mw1gSwPXhVdUmNHEfGxBzXJMXWTKd2say61nNU1EMMgy8hZvf64HXj8DNz6LRBGnh",
  "key5": "fdHWxs7xa8adGWUwNzWEdSg7g4XjKcCY2EUgboVauDY2xh6hNkNFAKg96Wj1AQ3m33ri3RWRsq1TGz9ECK16DD8",
  "key6": "3xKYVNHYujWnZBwxrBRaiXAz5RDz9qz8nJaeP85rHyxBPNN4S4UM4V58Z25KQLzn53tkr96zg7noQL3An2wSnYEv",
  "key7": "4nfdb4yvqPd1qZHsDi94L7LhvtvESQfZGXpszf8pRCne2qs8h3uDnA92SdBUM4DH5xzXKc5e2HSvAerrFG7gmzhQ",
  "key8": "4XJJTErtLewpvTrvRGM4VoNkTxM2sqPirfLUCnFLJriheDHmANwnuAf2fqKBv621wgXxbojxeP85NFEiL2DSVNaj",
  "key9": "3VTiBbnrsgxbiYueWgTehoecwskrbhdDB2mfFB8eND8ggMReEMyfxdswbH1QE5pyJcJrmA8rBSxJN3ZR4SrNi18K",
  "key10": "2riJwpyhjpjKikqhF3hDc8F7X4CfzbQuTCucuiQ6rufCRksoE2QFEBj5NXx3LDpjA6h4CvfPoCRybHAJhSKXCXki",
  "key11": "4ghnQwH4jj7LPmeEs7qTBU9qs9LK1Sgnj8CukpqwWfRUnqmJ8dEWzvd2Gb14jK2oCCK67uB78VZZbPzwepRNPiEX",
  "key12": "v4CNUusFXyBpYgFSZ45wCURCVkc86eX8BuhjSB7PWKwT9W17JzZCqyyDDaQg8jxfeZtUCNXFkFCnJBap9j5T1QU",
  "key13": "HbGhycJQK68Bc5dnPesktUVx1zh6zeFFFbQ5XGKE4QwWagacja9bMyxkahK1caoDFevQUnpPUQqgZejtuYy6Z6z",
  "key14": "26JSfAKEHTKwgAQwv2UwhdKLzHuxKec4wkUzErP1gvxakotgsdvRsgCwHQ8N5pugF5Dbm1gyid4Wb75gUiPLVdZe",
  "key15": "66Z9sujihWeErcfqNKAQzToe7LEpJwpneBj3EMbBJFYsqwJoYmHJH9eWzk4FxpWusCTurX1u9Ns1ZiwEy4QTVhpG",
  "key16": "3UHxd34XTQD9mjBU6usgoguuxScUNbMZTc9iJbzmMoYmRXJMcADdkoQ6qRHwpmseVirUZBUMHL91yawfQAb3FGr7",
  "key17": "4dVYNQSWbhKm82uap9zG9tikvEXq3ez968WEi59X58EDjSnZAQ5S5swRQFe7JbvK26uXVHXsYHKeucEv5sv7r6PL",
  "key18": "2CC8mrbCMyTVZsXQXNBTknFEN2XkibNhKKAxWH9pwQ4y9F7eC72jiDxUcctUTJmeUAdFgrhA3RthRxiMKqJt1C4e",
  "key19": "bdNYp1rB2ahSCWpi8RX7taLVqp8Bhr3SQWiYd8SZ6MogQX3y9qkdp7STdnT2AasAZjggGhBKVDchEQG4gzspgWv",
  "key20": "3SyjKHAXmLU7Ayw2rXnmV31tqEp8LVF8XVBye4m2JDbyDw5R6Ly8AzjsEDFwWiVmBQdv8pjzHGKxvcPwmo2cMP1P",
  "key21": "2HDHqh39CKcJ7zZX4eHEj3wXYZT14TSCd2bFnLB1HjEeE4wU7rpgatFNLJofkcw8JpYHkryTNq5YyRtg7LDgWfTB",
  "key22": "37NSrFNkrGEF5Gk1yGAq7mVEYAkCYqR5b3Cz9jcnKqhKGDeb1WgEFWTysM5evnajP9CWnd1QtFEzDHXmoX3ZrZKW",
  "key23": "3VMCaLdKpjhhWsHVwSnRAuYaDJWvnXtnZtH8eWvC2gU6AREDqVzN3Rcve3hChQm97HfX9FG5MgYwkGZeRUpQCoVx",
  "key24": "4hA1M2zL2tLbfEoyPTsQzjLbdwExHNDaBfWiGj1BsDCf8DNcSxqpTCT9Z9CcsiLvZwBcSgyzdScwkUv9ooH6TgmA"
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
