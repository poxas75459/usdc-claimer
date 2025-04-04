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
    "4UL9g31eVXWW6izYt7Yu9njgfBA9VkNeTtjMDZXKXNPjyVJuNVDTgrYqDr5NpJ94d55X15H6YfNSVHofp1HnDVhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pnmnL7WJFwnSRfwy6tqZvSaaT8zbHYy58gmAjKdLdkmLttKWYWFK3ohGF9iZDwtP942RAZ3TwDd624cnfEoJCJa",
  "key1": "3A37sqyYuFyqrwjJU1gTu4JDwYE5fH6LSGgXatDAP6AeerfQdwa7dC6S2s5fbzSawYD8iStpEKRUmft6BrxY6LRP",
  "key2": "4Q4GJPjyRSNEHBXagrKRUp1vHPZYZYzv7Eks7GnpD5k85U2RTVn3W5cDcoSXWSBBGiDyTgzUB8pMxcSXGUYvWVuZ",
  "key3": "5H4Kj4qLxcnGLM2ArpD7jRwfr4KterxJDxTbM9sFK7gFyNbbeBBpmrxAJP5iSNa1k4qUWjknhwkVDuxLRQgmQTSi",
  "key4": "2ta5rBLwNy9SpTaMr75gLe1kSQy283V96NJMbZPCK81VpUipQZmQKzSFNP7nAptetA7hA48GcmhG5PKu9KzTbX9M",
  "key5": "3mWgwyKHyRS3oisNdu5uJPd3ure5NbZUHBmPLWFGY9dsD3j7DS2DmzhQc7WRqgS3SmmXpSPXBmqevh21iigqX38g",
  "key6": "2EQUeYYs4bstnDtrTa6ZNVnN3hZyrY1FGdYJKzq71SVBc5mRrSmFuLb9DWkMqmPQm4oFgTdaCLzFnK5yukBRKqPB",
  "key7": "4ALfAeuyr5cccRx5LYyCRKvxZdLVUgbt8UvQyybgjXW8SopdUzUdh9KpNP8XnJ1QFgvF4PZANgbm6q8kQxsf1EQR",
  "key8": "4SdrNoCxsJdyMu2jbWx7g4CivxtVPGwRufV5BtEdqakfq53ayvPwX53am2sn9qs8q7k4Hi3RapwqV3Pa47zJSW1E",
  "key9": "2AtM35Ui7BefmoHNX5NrWvBRjErdAaeiMe9qWTHdt1RtH4CTkFqThxPMir3BK3Bze93bJLjT4Y8h3idRywzp4xQC",
  "key10": "5CpYgxpi3FHrRe6CKNGZ9MUGymbQiKySgX5yJ1yaaRRdD1k78BKqzaCN6CGQM1Eom7B9uBzYxmB7MeQ97pRNhUMq",
  "key11": "2u69zWsQaXRa1HnpXUY1aPyYjJEDS1JPdx4NN5nxf8L1q38LxU5fLZhZbwHZz7ja3RafZHvRv6Y2SG8mw2U1L75N",
  "key12": "2ap1KsmptWPv57V2x7JLvaxtPtiTN1Namrx6n8wEWjBduhwjxz8XzhpkaAAgLggYRNpTTaPLaaQhJtRhDdjTSDNm",
  "key13": "4qspzsskFuHixtWhuPFf3YU2GSikV3maHNZE7kM6XEZQ239C6bQiioCS2a2eqYWzyMRYWWErR2acGUcJNgPW4hH7",
  "key14": "2c7XHLyY9YhrgbJvbUPYdyrTVxCN16Lf21XqeLpWqPsDYc4UvNAF2jgv5sQKjGdBxy3ixPL87nybq4sYe2EeYrQc",
  "key15": "673wHxjAXounvAkhna9FNNtAyidJCSDVdVEbezDwqsnwUEFyfiYWY2P1ocY9vLHQFqLwhGmQ5mtssbwaE78KoDCa",
  "key16": "3zyqWWrzPUDF7SQLwa986cgFcAaMWr2csprZ7hATHDhktDrafzLdt5EiKBPmLJi5beYdfUP4saZPzBSxtf5rTqq2",
  "key17": "5M4UzXt373TCTZQK6v3nJcHhfjhZNaPTPxQqEoNYF8wq2Ggm133NHyLtLyaZuN8kkYZyk6nv1Joi2phYfdiKPeUS",
  "key18": "3AkdmnoRuaMUSydmGCQHFL2jpqzgMrqpR1E2AKAP9uoysbNZibiY5HkGVwnBgDWMTGSQSh7SzUXfBtTsHis2X6vq",
  "key19": "5JV2m4SBg2VDTggdp5VvssKFmmgmq5YtcTH1foGH1yZhJM4ufU7gQCfvbQWYdtEyMn5ncpuokmewvsfQhDKDBHSx",
  "key20": "DCPVkf7BN6rtd6qA4MYvny2vMZkk3fDHgan2aBivn2UhXicsV9PxB8UfdNSaM584KxVV9TobbWaQDn1wm5VFeMa",
  "key21": "3tMcjjPF5WyJRRAyrkE2uhcAr3tj5qPoK5dfVbCnLqWje26kGg6SVUVKKKiBCHPQZTx6GGLux7qH5MQSCkd51WJu",
  "key22": "2i8QF88EpKJAUFELmmVBzQt15VmAV1BBUagdg9UWMNb9TmwiNyrKFPjhPHfERg4nvYWyZcskSELsH8VziwcvwJhy",
  "key23": "2UMUh7W3zJ7wV3EDJYNUwoEnYoEUWZox27LBpscZvAPf8VeibkT1QnVRDJwMBHNR4EU4w7cb4a2PG4Fdhk45myGx",
  "key24": "3vQ29M4NpjvGQBfLT4h5rjGcx9taoBK6zv6D79mRSJ2rSTmkRMqqYc8kfeF1wP4HNXstBXToN8v3sx5VzuiJrSfx",
  "key25": "kqypwUDXxsq39ZKjKCF9diLwbMCqmXV7VM2xWL5yD1hr4PFT5Ljhqyg6FRE1hidvbY5WqsMuSPF5EngjqtBzZLz",
  "key26": "SN1hMG5QVaBXHu6izocvv6xsqsBqTWftBTrhKgu39j3P1zgHrWUqs7G7pMaHsifp6nZFZzCWi5PHeu4GBnR7E2H",
  "key27": "5tA32v57E3FEbqmkugAn2ZFrtYT4B5mbXserk9i2B9soUhGGfLZHJ7P2LuQsPY3he3hdpR9SCPTj4HzcyHkaHFUw",
  "key28": "65i6v37ZbAmBo3m7si8t5qtggNkZLA6CVRHpnwJ1BYBXuGEMcvdcK3ET2M8ihFHXa2SKh4g2677aaYC7FWC5XFTt"
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
