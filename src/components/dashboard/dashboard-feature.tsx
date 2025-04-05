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
    "2P8bzT5E1QRJhTVdUKMuJVsmuBMKSsVY56uZbLWVb2Pg7eSjWsnqt7XJnk1sDE5DGNri6w8ThsVgsW6JVe9M1cFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ZUHJJBHrh6dPwvRiLxx2ZQhFKBkdfPoB2VrLB8yUbZkyC7z4TG9q3WaFSFrXw212yC6CLfP1QzPZfbJTDFtfFh",
  "key1": "5953Lgx6mP7WhcatzYFWqYus7b8i9N7LiwbjV9QNjLkmxLGXWw1W2RoQzj2RF1SR85HuYBPZsfHZY6wyTzVheVfs",
  "key2": "2u8xxgczyWth1xrENhiQ4NoiFUDVX8uja7gwFKpZAAA8Cgm5gy99LyuxH7t3JTCbi4MZLoChuWySLoxM76kE1c48",
  "key3": "5EiyRmVhVTEesyLCHZZrVVeEzZxnFc8C7BD87PECJ2w7vNAUwg8EPP1A6NtM88AUJzuJGfnXf1CBwg4FaFw9W6y2",
  "key4": "3f1y8isdG4Pj7G2U9hYYJFXL9PD19RMDn4WsYKKXBX7T6iD9RwKYD9QdeCpL4MMJEpLHb6PcfSW8RdmgtfZSiQZS",
  "key5": "5QrU4w3ckcA32Y5Ue3ZtTpacs3hpH63c3JDXR7mRMi9eGgJaMJd7e3dPAXCg5Brv3S68yLCTtaX75q4Yped8A3ag",
  "key6": "3bxic28NngAQrryzgb93NnSBCGq5Mb5Kz6nL5tFfsjbe9uVA6Rh6tstGcJ2sGvo9qkvntHR2Cn6YdJBrD8tEbrfX",
  "key7": "3iHwdi757oqYe3i3TTMDEHHeqYt3jFdjyxBXJHefCfEoxorBkbQfs6LGS7aotrS6V6MkcXYT3Y8uGEtx9V4da7i7",
  "key8": "4d3z3UFjQUKjyNYD8DQEJEP6YrqsqEYsBAk8x7k8njNQ7bPXB7bSHe8A4TWMtDBRJukZex8KeoKv8sF8hdGnNWrx",
  "key9": "64xjfBkqvLJRx3hknACHffYSe6zSVf9yvZrfoFbcVED8EKxpCxjk3rF7ySXipdK89inrUa8upp5YYveYYJYvXTsX",
  "key10": "4Bcypd32UJZx1kks5WxqXayQ3Bhshbq6Nyt4xsEW7xqYtcYYdM2LC7BJFhxoBmvPyUBcMQfc1Pw7vgHBHgTvCxWm",
  "key11": "3kgQSWGY9gXnLbM1SGRwkDsM4ShNjvzCSAcmjGheC2BosAwJAMs16L7CNGYdwrtsLu6WpPUtyBoYkBR7ZyixBKaR",
  "key12": "2P85YCMegndS7bXRCTXE27QHLyVTz6edXDBmUSFTrLuiccQ1DZagBxbG2xj2pg7jFXVa3enK74RfiexytVHfxgoE",
  "key13": "3w6D1kb5eBaXsFrbHrgJ8TBvZ4R176oSkng7uMWaE9CmKvL85yod4tZBZUsqwUPxHAWf8FyfbNzmwx1fGzNGPBYA",
  "key14": "2p8ojaDCVNCvFUBKxT71F9jDvWcHUnwXY66LZBnACQwx7BmWKw51vDTqKx1cQndG3sKwT8AuRhXPg6t6cbBBkxoh",
  "key15": "3qAWKxpTDvFRVeDvvdKFb9a2Caq8VSGAFBMh8YWCQy4CW8mV19YrV8K5CoFkDyfCH7ht7VHqtkMxyeBX9zVXWNhz",
  "key16": "5rFy1qEPxgu3yKdaxqZEvDaYFA4kmZkDP2CnCjSRXqE4HiyN2gKMKDSSBoBp4MrKqUYDNXCMn9SV54DmqeqDMPv6",
  "key17": "jrB2U1NXhHoeknKZuA9ApyB3KBdtzTD8XUzXpuqFKDbi5sEYg5Ujix2Zk9hhUbeUtNn2i6ZehYvHznboHDLVav7",
  "key18": "9yXqrcdKq4VwTnmq34nSZ2EQbpipdkSCrJ65g6L8jQv8qtkzUamD6CamWXscffx8ak6mvFydFycasafiXkCJJ1C",
  "key19": "4BVQjsQAURhjJGsUpmTiHFURsJBaToHcf1rDccgTzH8QBoVZXFHupKkZaqHsDeF7TW6U4XCLo1mN4KsKy4U8UwtK",
  "key20": "5Mjrs8xqsaJo8iBKYx1ddkRKMViRJKFFDywNeFdKYy7yCEygv9in9q46snM6u33rKd7VB9QnRGeBxKL2EMDJEgbB",
  "key21": "UXtTt1bCgdVbb4dALkaPqdLHi99xye8MSMmgD9WoQW23nWj4bURcnifCNWJXWm1B32XzLFgpZHENWxGsYo5vqiT",
  "key22": "2QmxvRQfeWgnhDu2nFx7Myi9LHrohpnw5J41jNt8bNxFHh9v3aHTCNL4NRjhmRNseD6CyZryUn52LNT7VG48HtiC",
  "key23": "3ZHV862oxtn19RGkY9Rzvqa4k2Zhseuk5WnPvaCA9m6k7oXqMCmKnRD1sctkQ9iWEBrjZtfNHJCdU2EDXBuWkTga",
  "key24": "cZcRU7ibowX7msEQpLzE4TSj2aaCQY1bihm7rovq5HN6MS7j8gTmBLMfsi2pYyg8upQTZf3444DDz7cVPfyoGru",
  "key25": "3nkthQCyauZExV3iZ1VNM5AVaBnW4mEG55MUahZAisGJbthdabqz2A8dmvqV7Ttxq1RZL1f1PgW4hNRQAfJEEy7i",
  "key26": "5CJm9CdL9C7nqS6bLhC4NKEzGNQhPdWuWLf9qbX5Rgsnyd54gLENYB2g8EXLCCra6vPCfxgDPrRa6zpGWga8qtso",
  "key27": "irYdrX4W22CYpNZe14hWC6Tk5n1wWWJyf8XpsepuioisgUsLVcgiiHxRUkPPEcp4YGZvGSLSc8sdSLdJitEd1HA",
  "key28": "79Ty8jhDBVQ1ZfFTHAKRVUc9yrRV1BigyivWBqyj2MUSfpt1xce6mYPgANtyE9iMsDtHunzEDn5LquzmukQcSzE",
  "key29": "5bPZmHSYc9z9jDJqTVSQ5gG3xziySymqqXrMiDMAxuA9JCu1QZrYxKBR1sYGW43KUHqPVtkLY8a6TmEmY8wU7fLg",
  "key30": "5uZGPDtanDBCLgKHd95bhmUHoY9G9SH2eUSg6TAQZ5ziXJCFgPi7GcBbsCR7z2ihNNYuZsJz1Mcb5DWi6VsiFaL6",
  "key31": "3bN3DFvJicN7fmRajk9THQmBm6tgX5ZASmDjfJvWhZzVVsEQhG2kE8pvHR79dB9o7YdSJXDdUqDJrjFkaK2etf4q",
  "key32": "4Kkq5VvhW2MNgHMrp8irqmYYfdi7SrVucLKdijZvC7KKHgWbUx7mqkysWR6Tczt87izfgsq5ChTEYCPAGTKWCtAp",
  "key33": "BAkhXNKxGJFRT2eJQm69iDrKR7HNEVoJWLBstqSqC6TiXCx5KpP66m75wBg9CtiT2BAM9pddyo2thWnaRqdej6D",
  "key34": "2AdfHXJVV73sd6nwsRfmKvnYYEofdXWCDMWmL9qego6ziDga6gVcZRzvco1TLGrkUQnqV1pT2KJBLZGZpVFEXiui",
  "key35": "5d7CUTjYPjqAasrwDuVWhM1yLrTiTCDT9AuseA6W1RwfPiweAyWkW242WGVA4rQR8KATyBFTC5nnLovBChAgr5CU"
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
