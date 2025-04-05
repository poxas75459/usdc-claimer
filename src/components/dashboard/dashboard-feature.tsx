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
    "2xMqhP2fksLq7NsVLJfiqFpKYfvRPcp7JGiFyHb861SPvGjmkwcfjJKBW3825ewQmu33x6oQGNJfAu19K4foGXXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wbM7r6HZENJX9aSBnzbdJDobhL5UcF94Xze44soXUABteXJAPcyRsHEBMNnxofAWsBxvqEFNR5ugjPxFSwL4hro",
  "key1": "3Sp9PAoa4c7pwp5pWSby5tuZu3Ffb6BPCDza6oQ8NCBz6FZJ1AhTLHAuCNNGS2G3bJeMREKXupQBz8K9XBc7ApEu",
  "key2": "5BodR2sWZ13zSFDUES5FGjzuf2DViWWVDfsUcmSWGLJVYzk9B7nPDWg4x1jMWZBVXUSACorMV4TFsfKcJfvprs9G",
  "key3": "4LVjp9G4hjqD3wr4jvnA1cofBykhLtokL8nT6K5uNsyrFed6iXsFkCPsd3j9PBJQXxpnCS2nvCLVnZXe4Hkqs8w2",
  "key4": "5V2wA4mV34eojF8Yhnj1bnnMgrjyeX4NEPoEfuM6Kn5qVRVPvurfmW3J197dZxrc4cpWt7EkRZcNv1xARRe2Dn9Q",
  "key5": "5R2e3hk41hvYPeH2WBMssMsFSCKUcMqbNnuh5gdorAGYMTxZ3yMsGbMYzJcd6XtLZJvReKQWYs1WP32SSjYHaowC",
  "key6": "4mdnwCX9ShaK35Yr5xXMFi9kdDyV8npoem8rfSecwyYCoFUdWJH39auvP45ayT59BiZ2MAPZjDMcZAynj4zqkqn1",
  "key7": "5REoDRye8JVAeso73R8WcW3ojfB8rWR7nJjaj1h2tAA658AoduYDRuv8CJoNZR9xp8kWpTnkxoRLaee6TvPsL7o4",
  "key8": "5VuUNLVFra6qAZyC4EehHeJ14qMLtBhVgeVBZasKfShyH3gxMHeYng4ktSKrmtXXqj2gtSioxyJiQ6EZfJdmqwVC",
  "key9": "5cKDiJTuZgkAutnbeZRBjCqUnJYPbjSK3yGzpkGthCVwjkaZZCcYKfeBc87ZLL55AXtc9YSD2rCDTHVzee9CHHVs",
  "key10": "msds6mjD82vsNTxQn4JpEigZYLBZQAckTZUW6BX4X4RwWMFY5GtX9c1b6M7Cax8LK7v359T3eLxgMCUSG6o4yUu",
  "key11": "4MW6yG819ExaiBCsocGvGeTzoNpSAwaNTSW25bnPriiHpDBp24jZcCFwMupJC1aFkz5YH57AnsYxziyJPDgwHy4h",
  "key12": "3MsB7LUCmTdm4Z7SQfxHt9tjNr3a4njTvpsSFSNRmkRGGBF9sc8qPGM4TxqntCL2knZ45Z7iT9VQtc9KbiRGBTo4",
  "key13": "4Ze4XfLj188wYxbjJgCtAYktfkLuqJgLWKTKcxcbgaE6gj8JSVVCkzQeradcq3yUGcyoe6u7zMaYKsVTHAmiWAFQ",
  "key14": "54m4Nyspc5U7LWtWZLyNFAhvFajCCPrU6wq59Bj2vvF2H8Lnn2sTwfPGPqEcVXJrNW9kDgEF5zpAASgpBMUS3LgY",
  "key15": "3Vz9iDJLQHsUQwRvoSZMKpvVDVhtcNiFSrzwK79FxLBnrpmMtpkZQ8kmZHbfKvxdgve4kXt5iMQ9AbUdVeyX4Pb8",
  "key16": "Zz1sHRkZ6bMMLY9BfwAt8psGQQ9D5JMzcqJdX35S7g2t6oH7yoUNysy4ck9Ref5ynFh8NVKeZirZdne8FnCQoa9",
  "key17": "3fxQFa9NyaCRB63C41fDyi5X2mpLQrJosJrUho1SuexpYq3PD5TAp6xdh2wByeZTSGa4w9bpq6jxWcBzPaLCux1N",
  "key18": "2GBWbw9TEHfWvDkvV1RKxgqyPaMLog149pZGsrVawzMePmPK1vC1RwtqkZsjmteA9aLamZHo8MrxsAFaNSf5RVh3",
  "key19": "38tra64AhKXnTHTwY3HUPC9TKhdcXuNVv1vR1bPRW8Yt3LWdqEVvdJYS2jN6btvoWpHziREethqsGiYRb9nGCrB3",
  "key20": "2SPP4HhR8cewru48tiSUaoJ861rhckqeUSd7A6FrMhtUFrXmtWSH4CAKmpTr5CnnpoiZwCBcwbyqFgpdEyaQs1zh",
  "key21": "4oX8VCvXD1ha2sQwMB88GRYS286iamvsxiWqzbRmt5yLT2RHtL6HZ8rJ2BpjNo41MLUxp1EM4DeyhPibM4u4x1Yh",
  "key22": "4g5kHdoSpMhY5QdMFBi5JTByb3R5oZDGtA4tjf594NERZRPCE3uqQkwXoJ3vKQWUyWLCU13751JruzJUSV2Dta1s",
  "key23": "5pzamEuofd3GUt796CDFboqbcL9U5wdPCvreAtBFY12NYtYJZahbhp7RhvbaN7DKJzRi4aA6PXLLQTnLELpumsR9",
  "key24": "xQ8GZEsVUQT2XsBEiEgF3s9mCee7CWSgpQFYmzobfYD5c6UuDHNNYaAEbEwoxjZCU4SGvYZZv12CWt5HaWYvuqZ",
  "key25": "3EcV2LwpeBLkAwrydwjt7LWny1cHpXdZZKfPAC81ziirJgfxqA2gMRMpJhmDepnk28tDJMw5Hz7KLeL8iaPoLKuy",
  "key26": "4Ygoau94S32nc7jiA7KkmNgHUKvtZ8RYT7y1RrKafoR7j6fhX8MhXvdMPFN7XNhMqLq1jRfNeDGbPDuVgdzfbzP6",
  "key27": "4ikdypNPhii933RZGAvYCbTKKf13CTHndsbJ9d8qnvryQAHpmg4s1bEYizazsFiwgJXdqNLRtVfvfKhBv2aLGvBw",
  "key28": "akvgEewKTCgNXZpHjYYwNG9U8EociFzPmHH883Rx6s2MuZh6BaDi5g4qYJ4pYv4DNKWaApGYmRSBr19pN5h5uJ2",
  "key29": "2K3kUS35gLQJJ7fdT6sjX9Pk7R4zBWYakaFFhfJYe8cRymx6PzgY5xH3rR15SKieTy1f8LZSuthfiqbwAUALeLak"
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
