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
    "qauveDpepQJkppwdm3xWK9t5tCc7w3NaNB76UwrQpjijnHsrTff2BCWwU3K2E3otnw8TSRBpDY2LXaDUzPSqBmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hBzwoHv8sZ4s1auvYGjfFwRQrckpUd4gTfgrQgBBNb1HnAfp1phxnRHsCxWGu9z2ZJTRguYG8jpU4h5jut3q9CF",
  "key1": "5Uw4KooEuG3pWdAjgg33itwmy9RYC2pGYv9wQusZHrNUXgb94gxMh6ktxgESRwtqDqZqLTNJ1JiJhEaFwxG1P1Aa",
  "key2": "4CCdE2AJUb4AVmbhN1uhBqmoZvWXKZAmqxWNajBiYhfyJr1SBu3LwCMx3efetxiwg5UqiuMe52YZf8HA4wX5ktSg",
  "key3": "5cd16KqmYJowpViYaKNW3Xi4Kngx5133SgeeawKdA3h4eNi7NFM64qKyXRpunxNmU3f7xx2cx9soGNTTSZJ1cvfq",
  "key4": "35PAfzbNkWPzt29pcPEML1FZaz7v6QrhxahqSNc8LLryrXphWPwKdNa9J6prTV2bf7o5CZzVPodtZS31mdMT8hmh",
  "key5": "2LCxoUTfaAAt5EcyETE2DHdRTGixHq59JGBfM8HSpqvWkCpwpDnuPCXBPff7yKLWNHeUo7cYS7GZDgbngF5TmEP4",
  "key6": "3o4i4ZQHaJ7hmhRipwi3MpebQsKjQZNMJ4jP6xaDAecMcxQGvbDWfDxoh48KsM42oEJ3KCTr3UDvdH4YsAwbrE4u",
  "key7": "2p7oW1RxY3CDT6yd5LVBBovaQG1haDp9jeVpkbmiedAFuggdJXoS8pXpoQX4N3NULYHuHStKVww5XTZ6cUJd7cMU",
  "key8": "3fzbPwxZ4D71mz8isYy15uz59PSPAoRSSHmsbvKUrGE7HJXBNC4xJtBPK1iZFg44EaMCNJLzgW19nw9UJ7Ub1CEN",
  "key9": "5yocicbEZmdTVpNdGsH6xYwfABhqZduixQdeUgJFTmXH8ZhXGqc1TtEBKybWQ2dBGwVwczMmEX555FcxMvj4aejD",
  "key10": "12243WTZNXQUro3g6GpBPTmJvPWSv9XnsPXtjHCmQvm8Pj6ov3qy6STh8KWDQAozrz9ybYZ1WmAg2cKcnETAhujD",
  "key11": "3d2xyjkWLCf2CZmmi7HWh95U9QDvHQRjEbcHvZq8fn74yrryzW5vWj4imow2PVhpNi2Y4wVncHS4FawpKG1YnNBM",
  "key12": "2DvruMX5XYWmkVrRRgSaxKUaMJ3Smoa3u9dpV6CVbG5d8WN7a2iXktFsegSwXhWG2xRLZtvn7PYnSyAk5emLz6hK",
  "key13": "255gtAN7pp9GZEor9YBeP5oQETGLHVZrm2ZjvFD8xXMz4oTKQsjaT8i3fSUNqsZQrHaAt6BtS56SGXudQTYhT7PT",
  "key14": "2ung2LbVcNCo6xNu8aQyUbXLxp7qosYUhH13DBZyrZMsACAQYiCEDRn3PJ1PYFC7fLbuHyBjsVYU3m8n6hDbK8km",
  "key15": "3kBD8Zk4sTmEyHnpSbimQU8caaPKZNUnSUw8QuJ9SrS9aMKj8jPaa53e4sz3otY2MmZXdcXVYL3Lg5qDzaERNDgU",
  "key16": "3J2j6YKqx1rNdn1Zbygm4LQ3VfpqcsAjUmRdVuQ1VtwLMCLJJQf33avJ7Hm5JX1nwxjUAZeQVJeF2Zc6HMgx56TH",
  "key17": "5Ykd8HQGvAeNFdZevvit3YJjonZhxd1ckLWJiF81me6ToxQZnCAnjgffMeartqwh4V8drxRQGYtR2rieZV1ygjrn",
  "key18": "JVAd3uGBJKvqfbdJB4SzQzP5wBFVHQXcxDsqbAp7XfDxtDBtHTW3J4LLtCK5ieEnJBSuXmwx6aTnDkv3K4xCLsM",
  "key19": "2c6PUyUuYYvGfofSfqUUkY8jg8MMwDX5N7E61zvwqCAe6tJHdExz1ANErTWBuXs6rx2M6yxhNF3FiVyHRhi7ssov",
  "key20": "r9aHVhfngwtcRbd6ezNifFJFe6jhdKK5iLkHzZErPzzHFmprZoioN6M9xmSdrwHztunX8cffR5H4XkMRuESdRyw",
  "key21": "34cdtm69jCNJ9LRdpEaY8YapGVsyJiRa7WJF81MUfCuWMdTvAVWSYVkY6rwbhpmMQG98qD66qtctNQoRA7zA14ZM",
  "key22": "2GF8TS9wE8nrRD536U7k2TR2d5Xeq4fwcMiSa3moxxG2wunHGMcBGrF3JoRcZeYQgFvfTmnB9K7yHYiYNs6PFjcf",
  "key23": "3UUgguWVKU2wYjywrRL4raqhrARQHQ8BLSeVq8LJ2VMaAsT67vp5miDkonuVUz241jqVsu6VAr4ypFMm49QYVKhL",
  "key24": "5qNrnuA3yqZkq1KNYq6mxntHNMdwLTcUSwE5GMhpMQvF5qmEUMedsxQynsx5jiQXFZqXxnEExh3ohHNkVmVyMUQg",
  "key25": "61dDDp7hwuFnd6KnmZXYNLJqPV5ZTE7FSt5wrYSZ9c9GHSiV8ViJQdevBUjvkCQRBqLu6WgvejUPiVHjVgaRqrUU",
  "key26": "GSTdNERgxvTubjQejL6xgZzn5yCynLS68d12vFkWcFdD5tRp2ZpnuPSUc7pg7VPyvKR7akjuKDTMhrLFt8WapgY",
  "key27": "43eKFrW1URdHcv8LEqtpqC3cJxywGHgDYSLPXJ7ozyXENmtSEr7gVQB5by4F6ADAqX6gn7gTVJmkJXLyPyq6U2C6",
  "key28": "4xpJRginHt3AgUH95pKezyoHs8cSWhtctf5pygkBo1qWUBZxAYa9GeDKnBrBTqdhis5u6TazxTQwUXh8EQsbDKYv"
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
