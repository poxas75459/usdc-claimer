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
    "3WzpTuMKA93zoCYedQwHu2ud8Kr7LxcFju2PoFQjeV4zNzzMk5JGFSGGCsiJqKH8FW3RZkc2HLXmYTxcxnv8vwZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xojyKyH2tVPoAiMqgiEDyD5gnkJAAbW89EbJUaFEMzNEsFvHuvPkEKoQGLqKEvCvAUpo5MVKGaNDgj915huKqFD",
  "key1": "WosZ3ffWRhXif4ZLWwVWwDCkQwgeRgM68P2dKsdhm7YXtrhtSUTBEAaEkWA7JXcMudHkfYHq1iyL2NamUbtFjiX",
  "key2": "Ex6dM1FzWbwUKAccsXnCqzZTDAfgsXa8DQQgtNnC5T9jf9cpJ2C4XaydDa52qAFebw5C6KzyzjFkggyH7zoFPH6",
  "key3": "3JvWsC1JwtzbNu8eXb399hsMwzjZ3CFgsaz8PPg9xw5j4fnpuR3RGu6XYdV76HeLupC4riRpFfmGCiZs2gaW54QB",
  "key4": "2MJ79wqtYPZd1E2xBgrYygL8WHQbnN2VGxbYY1WW2Ge4sopW4dixLkPGQ4CJCtitD3nuSwbNeEtB5hhMiHbykHqg",
  "key5": "5ibE788JBfzgxYaHqVRHospu9UyCHJaWyhqjNaDZiwvYfaj3CjS72yJEK37UJkAWypKELntBdPSiy68AQhQgRqA8",
  "key6": "56W2PFwWYnTyFmBpzMNtCF1c9D8vDW4YsJEvq3b14wWKUcHzu5fAAe2sTmRTxq3UvEeLvGTATEUDCFJc8UVRXWmW",
  "key7": "2Ah5YTPAzBTbJZ3s7udS5Mo6g6CNknEH5HWACtfRKgu8HztFwZ1qn2DN642kAgBUx1VxvrAnxmBEaTpLucGGRwsh",
  "key8": "q3kdYBeUpfnHYQBzaT575Y38x5ZC5unz8GCyPcb9mQt9vyxaj4nCJL1EUyc9J4fWtg67EdUW52YtZ4r7oXGHk7N",
  "key9": "4miR4JBJb7TcntPumwDyjN5iUehqoCXzZkfk35GvinV1gHLYHEk4PVrahpm3vdxWg8SR279iMWxwzagpbqyviqk3",
  "key10": "5x6jaaMVBVm7snfxHHc4J5Tz5qq1rg114eU71FnAaUQamMwh4NCxxCRkGmNFtHCzwvex6N1Ecm4hVzjEXzVQGQxk",
  "key11": "e9sbdq1zwkrEEymwRNfGxUjaUKA3kqGMBztvqn4T9eT1zWe49QCedTFP7ExFgy938eBRtesPDuRgh259nU7eqpD",
  "key12": "5eeq5vFZtuhfPqyRZPFGPDWNQV2w7CFAaUCRaH2BvrTU5LczFNi8T3G6UVncNxQ7ZM881sWtEVvYW3iRhpZMTUEL",
  "key13": "652yCpGuLF6QMvHpnjquRLPZZ3cJqB8yPP5iijaYxge6AXhhHLZKz26nhMcfs6uKWtrNY2DgRFZztoWfe7PE4p33",
  "key14": "2QXm93rYmoWAaFdte9XmjqmAy73FjZGjhCyWioFAFphF24GHV6h7fUoVeTWki4dwk5VaPNaPC23VXJTWDu9ZdoSW",
  "key15": "3xd9t9kmeQMQkAheFNpcynJq8fyHTXQjByWHxEbMTkSiHrXXKBwrgYA1u3mv7k4GKMpvsHqZzcCeHbaGzk6JxX5Z",
  "key16": "4nsRScFFgqeSHefwqMHjG8t2bm2C94KiPMmfcXKR6QMPrtw9iwTd2qnjLowng4G7VRciiiqcHZYRsAkED9yrPEFb",
  "key17": "5yBRjtQDMjuVFzETXRnSePz5oshL8oZoQ1UgWkJJCJoog1Ewz85nh7fZ1RMbzaK3y5g9TPDQwMzTvkPv3wNm335M",
  "key18": "Cnw3LVY3tEmCaHmEdUvjNsrH3WJt7SPYgyrXdjL1QmMgUAc6en9UPBTG32pHLyp8roNSMHJVjVj3b3iTLMtQb8S",
  "key19": "VbvqRq8K2YBH7Eham5AEfwAjiPTHJ5d8D6fs3a4DeJhhMHkfNZucyoJn37GGKmMuV8Y3vs5rh7tdCMRALGUALrt",
  "key20": "bNgBZxsRGnHJr84NYBSoAaSydyrWH1Qg94aap7W8Q6iSbSCf7jeDPGAJrzvavjQ4NQyxNu1wMk6WZaMH45gdEbP",
  "key21": "3sWvzXaT1zg56dAecKhwWQdwcUPpkwVUdFobqMCdDyQK7PVsWujksUkFQtqLKHZBtzwgEiqnC1kewM5fstDreFQ4",
  "key22": "3gGbua9xZnYLcuUaSzjVWgdkFarXoxo9A86ho4AtzpqcT1bNsgR853e7GtpVE2asVHAyXzqYYdphcVYVc7GicXjM",
  "key23": "3t6kH1EX23dwq8Jpwfrtuw2tPa9UiKCsW6XhA6eNbFuxZvrD5kdjaNCXaUSB36wMGTeSjoi2yJHzip7opbJzxqV4",
  "key24": "mbZTH5F6CBWtxPuhXuNWUHYZm2YuNJJEVR5kVV2RskB8iTpAYJY3agrpfvP2zZjXmuLp9nRmESVpp6nq8UUmFm7",
  "key25": "62KEGanpfBxdDe5zQzXN2SJdXGPRppaDjRXwBJgWfS1NJhLoVbUznryC2o9wXJrmJyMf22CM21yDjQKLJ1VjExmS",
  "key26": "61xNmzuVVTEAAkkPUwU6hELcfScVNDq3LrDHKSv1d4GvgVDG3SWUXFPrZuikhDtn283d28yA7wGDNqcRZBEAsLYu",
  "key27": "Lrn42vqMHgUvk3Y3YgzstGAqpkbYmXs3bRybtevgGsQuCCjbCB53ENtMtptwTSQMyGYrWafN622r9D7rp4NPqJL",
  "key28": "eJgN94rDhnDA7UjbGTRBvWSHUWUrpe9RuE9SU1nku32mM52R4eAuMSv5yaVUoqr8TxH85NSG25eXpHy7ZByCQUK",
  "key29": "546cvi1xL12R4zKgbtbWzn5MPSKXCqpKgnmt3XanoZBFjT79uvYMQZBKXYMn7fT7jxnv4Dh94kJhs4r9uYNdoZjY",
  "key30": "MNGYKjmfPFsz8ccNA21rpbZzNmz6WCi7wAzGaLtjj7XUsXDexHpgwHuLxjYjVBmTTzWKjtXh5yNYSRapkse58Xa",
  "key31": "5DJcxCJa7ZcaDBSeXuqBTBudQFg4ewJXwZCVCCE3ac36bNEtiXxg1Mvuq6Xguehpz73zyCnTzNNfSWncC1RwVMb3",
  "key32": "hdH85PoRxEupgxffNrEM3ucs8PqDF9tYXtGniVDwuWND6EByFy1WHbT93yyBLqpvPcgUzv7N3w5e1M6oiyygvmH"
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
