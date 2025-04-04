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
    "f1BqZxD71YnnzKs5ZENQk7mbmv4H9Hay5VTBxbNdKBj4Rp3wZu1231PhVERHxbZHxdNQf9oNjS3eJAAaqanZCJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTqiBUU13qKZrfXtbMEThsJGiJRoDBe5gSndxCpz4zKPJCihyiVuGxvpcdohjNjwPts4fRKUcfo7hENsyFVHAv",
  "key1": "3xiup5aUnfxJmXXybc5F3t8TuPYmMtCADDF1a98TFWZw5euyiTSWHAcLRUfBsSURsPwMsgawRHszT4U9G3m79xB8",
  "key2": "2xJBs991CECWktv2abx1hdYhyHQKuUu3FtBzfkpdwbrjSGBRN1cJDRvzYAiJb8FGjxjVoUQRPEiZCCx34JbVM64G",
  "key3": "36s2RVSeUxKqj5gd8XD7ynU5FRF7uvTFbAD3TFQN2pvnpKgaYFELXRiTNX1qksFb2GQfB52R54Vz7VEHzo8bqoZy",
  "key4": "4rZu8mp77FUdu2tA5gXduUp9h9RXXKa7Y1oZPUhESHcSoq4dh5tT1AC91pyoGamLefSiC3ECVSyWz1v4JzDU2wd3",
  "key5": "4DYrLmbSYZwqqVRKNaJmxTEoQaTUeMn234bNPo82kERfTdtxRuAk5sUABveBVwamNoJZdJmYs1DLRNVbnNJ4JGo4",
  "key6": "4LrEPy8eKTvLn9Ajw36cv5cxSN9pJcuMnGBRnBETP8YuGackoPkGB28tPVqei9oYNFCqTLjh12CuBo1PcJAx3gDQ",
  "key7": "xqH28pJrZBNqaAyugSt1mHcY53dGyWwcv3taC4FrCMCa4XgF6nkxSouEbAA6AqsdUJGEgE9BWSY9tjdEHq2qcdt",
  "key8": "bdewwQHBd5tBPbepsGg8fu2hbArrsGKYrin2h7vggNZo6yjywseaMhhi38mWiMWUEWjqQ3kyuZjzHBSURisCQeR",
  "key9": "4Lg2JacaJ4bLwmcVxFz71FZq181FsJBSNNgRZAJ6HZRwseXQUxThFaSkPezEfnQKEeg5rMEt5N5C1Y5C3KDLy3Mr",
  "key10": "3xw7KinhcJmNMUXiuq5LmUB797pvS6SAFq2yr4xMWzz6BHyvrEmLXx4kZXHiRdVvHcJK3enB7dsV4by4jVy9sqwk",
  "key11": "3d5rxWS86wJ9BKxCa2BuaVY857oD8jvSJG9mHJ1VyoYsJbahhBXBdBHXHUtmvYLH6tGF9Ls2vffHFasmf4B4GbFs",
  "key12": "4CrhQriKgPniMwjGQjBAfzTDKQYBQQAze62gxr3PP9q4BbMFrfuvRK7rbANMbLtfU37HRdXgHNxqf6odbjyZK7W1",
  "key13": "NH4CZqhNxTkScwf6dA952vZZBKwwdWaDni5XkyBCmTHjQSX29tEyUsxDTn78MKX7n6CpSV2v2And4Xqk1yWwZnG",
  "key14": "5DNRQH1MYkcaNzXmiUGtpJ97PC5Zay4j7etexk1Q1uwjViTgir6TXmDLfXF3nrRH8uU3Jp2UbFHuotSHbtWjdP3N",
  "key15": "4odEFiFoxxVi7PpfqLDpaUmFt3hn8MNFkYW1gmQ1LqmAZjuSxPYHeGxJ3TRzqc9huCmxBs6FsZtXcRUVuyyL5m1s",
  "key16": "5h6p71mSYHkKA87gQn3aLVSa3DK4cpBiWsFGiZpaRbymemaGXasH6Zv1PdrThuyHzTZm55ByCzj6aq5ohHPbHqmN",
  "key17": "21JNf771KCcVb5kMHuk7wqyt8UNfvsYPWarzY6uuPteLxnaJ8kEU2r8nvfxWCNsN5Lap1ntd7T1GvdNzbMTsFKVx",
  "key18": "2ZnY8Trw5xLFa5Rpr5FDtHXxmLbqUoFoDF51seeAs6dHJFYuiCg1DYdkA9vv4PJ6St61aeDuNvqRjTGJd623Y8ac",
  "key19": "skyXQPEsGmPcpkZL4g3eHGFx1RSbp2J4mheoTRzkUZYjwCUvaEQfe2niBBC1nxWFDWuT4bNDbGnCXKaZ7oRss85",
  "key20": "43msqCWa53iRbuSBRTuuxhxc57cVWaTH4Mb4ZBtkny2ujduXjL4sFheu74cWErBLea4ZYbb3DyRMjmYYS4KZEsVQ",
  "key21": "2V1gPTpUojrGEMLLmsozSRv6yzYwW6NGRCC6aBMm764ZZs52gatZaUPAeiWVLRp8x9kydSCo9DhTkPUtBAz8wN2X",
  "key22": "3UnHHBX2u55rWcNsUQTJi7rgbkdikFFjghF9LL5TPC6Di89pqWhpiR5mUCwT2KcnoFASNCudurNaLkihJv1ZdXf9",
  "key23": "67r7gCr4WPH5rm2ceuSQx6sTHQLnwgZAAZmJyrwtZvyV2BeBFn3RXv7J9tWna8AKE7sQABV4zYFSoCtdUptdyUpR",
  "key24": "4oCzaSJrCW6p7z6qJSGDpWNndJCCJffBrD3v8u2yGEZAvNkcb2yevcmThtWUZLxVsFA3W687Gyjc3XeuZNaChPRD",
  "key25": "4Txe2iRhwwYCzWoQo1unkkPAi7AjYftkV7uRCbDLL1A87TLxBkKvjw3bo9L21y4V9Nyq5MC3RvffKkq1Vt2sMSHA",
  "key26": "2LMQwZ7nvQ5CMXTyb8jsD5ZSuMwuKiYeZKPc1nBdyExDaERQ7WyD2ikPePshifgUcHz4dDTAMTeep6oTMAkXcNkK",
  "key27": "5tQjQptaNT2uxiLiHAkM6hkJra5xKBrHMpM86nqeiEgXXMqbk8eqbD3ZPyeDv21DpMgRCHAX1w8pqn9wtF9yanuk",
  "key28": "4P2P2GqJTGw3xStpSRRVy3qbt2rn2wArPAgBCHkKMJiw34CyFyRG7xfHc3KB1xtrH9MyVG69Axz1iuhLRVVT9RiQ",
  "key29": "5oCmnnWktz8g8NQWJi5mtvVSMm2GgqRPRVKxj4oYAtvhoiZTL6hZCbT3QNXPFGxhr1aMKHKJruXAVqwDPja67zxy",
  "key30": "HfjBDpapax1b1LySezVS7sQZW5ckxPSxvqBNqVN9cV9riBkdua7j28Z48N6hp8ebF7WKcAzrkkDehbzJDRSCR9q",
  "key31": "5ZXu5sm6o36Q3BXcU31f9vumnt8PXaW9EmACcUE2NfLafYJ1uV3SnMmK5C4RKgNjSWkvHooeTHKvaiwhcpPxKG68",
  "key32": "2uFPqW7a74qNf8JzwPm3BfDqd2cGfmxViAuXdtVwqdgQC8hFZzzS2zgbizPqCSt7QAAaesHS9A8gL4Qzyt1DNdRK"
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
