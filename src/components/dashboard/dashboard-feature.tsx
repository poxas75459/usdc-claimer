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
    "gf5evn3rvqdDiWP4XGGa25VuLNPBBeV7EvQeY1CxLwAxmcXBYwQNiPTq35omD5toWkg7tQEr3n76tiqdFxxHRtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6fHZ4wLArt6nkyTqk22sWZrst6FLCFVfpfN6GbAufrhRFzH9w7XYeeNNefFdXo7HFzn6XUg3DP2aoepmMF5eps",
  "key1": "3stGNjfZFyJWxtZuW9jaze4c7KDtGFDEwfut6yu5XSDPK3wmgLQ4uJwonyibXMNFGvutMN5UYt6qEuFyWkHUu8hU",
  "key2": "3taZjEGx5BNxAKr8QSjKXyRMbREBmCMZn2x85TpRtKC9gHU7K4q74QKy7Gj8QN3ptz28GfbMZofdt35bfqeoRN59",
  "key3": "3PJ5qdvoEuGEt2xVVdagSXcZg3eFxW21PKMrRXTzPzCJbTBzrR4hWdtTBxgBcr2WTkw22P8fYaakpq2hpEZJ46U8",
  "key4": "4VB8dGXVvCYhXjWKxAZdFmQtDEJ5tzzf87Abyu6y6e1cCSKXgMFa6zhJex92QPFnnZrmxV5U35rKufG6v7dBWkEt",
  "key5": "4kLAskUnn4qCqY7ge1qWrmpvyhhsyoq1JdU22sJ2io11XZ7sACh5CfkdBo9WSQVJtSczWxFrPQfoEKbCbeMzQEE9",
  "key6": "5sf4DcVoEkSMo7N8RA4q47g81cACmZoCevvTRA4tiD3FC9eUmnoUfKqkJsDG6Phix3dn92gxFrvBWPd78t4JoZ7x",
  "key7": "44vJaDs2WrWJWYb3uj41VDjkw8VdvJzH54vWF1wPMSJrtqGiRUCdUqLm5iM2f3QucYwHkdbRzKGA5ow2mN4VmUio",
  "key8": "2aVhtQTcPxDhbG2UaSYbvQiX2sHVabjv3PJN3QGFWaLqkoEpdzuk7RqFgCgtCtLUdjbJ4PdXQ5YwdYLsamrfZ3tX",
  "key9": "AV38rF5H186WhnZesJpvfA4aQjVQ6tL9oJLvY15pKRrQkZyoiAWf5KagCxJtZPGz1CeaKpR4msnvwCzd5GBrk7n",
  "key10": "2ggrmbmAiCnpVVKa9z7YXna79uE6nNmXFokbVqV3nni7EAkYAvL7HT7QVkz8a5pKujqEe7nmoAyA4DMwaxcCPFJH",
  "key11": "4rsucB6ZS9xZx1vmSwnTpnsD81URj181e9nRPZKVSjzy9uxvLtDFmpPQiWp1tfMNvkZUZyTR6nApWGUG6us4cy2H",
  "key12": "Y4cthYuS8AwFns6Nj7GP4RCbSB2BhNaM7wBHSrCQaa4GhVovmGN1GciATCJGUhS1GSywKBnwBZMW2dREyiithmB",
  "key13": "2xqmEUNP5Rfq7oyBWfgFMGfnTDGiW3LATXs1WSqYHEtKEAQJA7BtiPCAx5J7TA4nhLq1HmaRUafwgv9JRQwaGtni",
  "key14": "3NnzFXcsvKDZCJMGmbBLgDKBaTHYNqaB8Z7tC3FNS6QHokTNsTu82pXzmuGX39WrpRL9v2Df2guEGq3YRohetA3p",
  "key15": "2iLrrS1h6eyqTWsoZv9ZeJCqkqTp6yDnx9ZbZkAgLs7VGob7wdwYBwDETp4Ur68rG2w1j4ZcRK7Sp3WhM311yMm7",
  "key16": "5e5GMYRhYFRFAbxCfbDAyxUgLUhSpXVxUBQbRobhJcPe3WhFZMxFy5aXnP25CRpLucC8yDUpk9chUYNanjsLTohC",
  "key17": "yDWKVFqTdzS5vhzMxLLMDy9eEE7RsKgxnwySrZqZruiuteapvAe35bLVtp4J6qHGhcW3qkiqn9EvSKGNsrxs7zm",
  "key18": "5Fvmq2tzocHUxxFM5RHZJ5moXqqaaTuYXW5aQXqE5Lgv7aXEfbZ4Qwqj2otg2z2gaLGksfcjEX8yhjmweG4g7zuN",
  "key19": "35si1o9tYFUpXBdq61oRd44J9DHJgJ4T6q3iCy1znvByXgs8HcfeGr4swtjUeugVFqnUkgEHJo3UXv4ynYyuXeuA",
  "key20": "5PKYeT1a3egM9gAvsuU64rUT7NNLT3JbKGLR1eDayTcxNeyGzZUp6bt3bthitB1LtTaZsKsnmvWHsUsNAs1B5E4A",
  "key21": "2qMahWouN35ww1fXqoftJQzbzYoPVJVG5Eg2BdvmN9QQpHw7oCZ9Dpx5g4Xor66KUoXbRi9YCDSPuT3NqPbQnaEb",
  "key22": "3ejPgpQ4ZxhLQwnh4fxydFRCiG7qD9WGyx7HJaTFiM4QCd5YZZ2G4zL5Y8dHfgpkLdWWVkVSNocPE4g7EtneYwWc",
  "key23": "2dfw1xca7jmRkQfkTrZrt3YJf8dtdVnT2E7KkCQmwbXJ6MNwq98DUTaQW7Ts8mJW4tnmNp247qxND3e4Kc7fqahX",
  "key24": "2GxT8xKGXkSp9a6vD6n1dma3JRmiY1GZSTKqqcppc9V8wST2HqkS2VCWjWY1n4k2R5s3UtsyMue7KupJa44e5KPi",
  "key25": "2czgMbKPxb2b6VAbo4TcDbgbz3J4YwSamsAif3jdFwCt1oFhEr9cT4Cu6Roo8yEFjxsACtetpEV6LDxKFhqGCn4f",
  "key26": "3HjHgbhbF8JcYrn2pbdTHToeWRpmK5G5uaov5WN5TKtPVART1aCzaVe2tn94DVSq7UnDwBBgAmurjEhAxKSaXs6X"
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
