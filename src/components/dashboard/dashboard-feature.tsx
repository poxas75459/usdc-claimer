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
    "4Ab5C76yMQT1c16RBfhqFKboZnaCyf59TXcw2A2PPwGurR8uzjochKvbya5e3QQmqmNK42ePe6xPmYRAQwhHCff2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PnsqZsgUjrng127XUX3UHJ4AFFMDU4CHn8u4NY4KGpCP4K1RQPCr61dG9NoNBDx9wpYvQLZ3TcwRAGYbBiiu9mF",
  "key1": "gR5CLH77jCzhxpgdjAG9p4FEq2iXVQqt9BLgq7HbdSNzsPHwo3fcfmjGfjosmR9MiiipppfeBr6KJ8vhth8HeRT",
  "key2": "4XzP4gK6qoMUQFBFRop8kAGnx1NbSxrVY61Y2TQj5PwZ1NzcqbfmejmFRTPJzBu8P7T4LQjDYznPmUfLTdnQgRCa",
  "key3": "38PzKJYZFFFUQoVwBEbYTKgNmMz3DqAHHm5p4AcJCYJmosoNB2hi8z8QrcsbnNGZuMmYdxXKYmZrswC9r58SUr4S",
  "key4": "2vC5wx7Cyio9PVnpE6b8brXLmuo4481xXaHmwotsyXEEwQNu28VpcVuFe5Tsc6An6cMvCEQESnx9wh2qiP5spJ4J",
  "key5": "27KrBEvoVtT1Tkoy4R8p6XY4WuvDXPSCPETja3DjR7GWd71xEtjdCEr6sKivymd2RKwqoiEQB6QXFYPEJkhriwfM",
  "key6": "3AECANgZ87JupbouvRDxRSj2BZ1ymJKVuzUM3NnA8RgdoieKvpZqSiAiqJr2RE2p6wX7fZghtCaKxC8htz6D8nhE",
  "key7": "5WuCJhmQhb2c55xzyQbxkFzDGHFxdHo3tZWXEdqMA391hL7dm4348n9NLQc8hcXrVi8UMhHx7tTkxLrvCShEaUSy",
  "key8": "HDxaKDMrnkUSrxZJhsVAwKgNTEthgdRUfYNWYibgs97tXn87hbWhCkTfQxBFBqBewohGsv6MbemdcUvNDeLDxuf",
  "key9": "2joSKpA5QNNBAsqaEpSNwroEy683ZFozB1iQVddnyyYFYB14WoE85iaQ7HpKnKEMwBQTMLXs9NroUfHjVQCTJbaP",
  "key10": "3nGkNqaS3N9SCgfzdkq3t8Ybz1vsvxYzVtSNYdX3yBU5xqfe7VCxdbu1LyXzmCvhUHLUeKxnoG3amTtbg2LRSbLM",
  "key11": "EkS7mxgXw9zMsm3kS9cF9biFmSK5VN6VcCtQMVZPb2Brsxo4fCw4GwLHbb3g3Kxv1WZhFwKUg8caJk5d1F2rBGv",
  "key12": "3aw9m8QX8QYBXxpuBan9BvxFLJ8iQjjvpLAQpQu5K2Aas5Hd9jb8pWgEVVY81MEPPJiNRoTPy1VDaTiU7VcGQmSU",
  "key13": "J7ReNvTE3Dfv51jbyt3jogFuSDyFNwbEsYgEt96E74Vjnqube4UdnmGmo2eM2X3RtfW79r2JgbsGjhnPUK6qVx7",
  "key14": "4p1dYGG6T39XwZ55bJU3ct4dWzRhSkLEghVXmsKpcGWd27zZhyN8c1BQyYXrDUSMpKCQA5wCWc5YSvMXaTfnD2bf",
  "key15": "5PaZk1eW3TcUcpF84iwUobRLjYEL2SWwJ5yU8CpkGmZm7pNPKjirQAKPduxNNrfzUJQJX8YZLZraQJG287ha48og",
  "key16": "5wnwe4Wh3gdBBbX2wA9ewj89C6kSRF2moqFsUUxQKweWTSRBsuGcAxHMv9UDzhwzBuEwZnh76xeLLnsvopd9Nh5Y",
  "key17": "5XVcSEuvcMobU4JrDAWSyJM1rtJopcUgFDUtGA94UhW7nQMkSZQNvnNBSUHn1CbU7V4RJDY5eC1toZBzwVf6eDvn",
  "key18": "5U2mvs1P912XFm7cadAnCnBYubfT7Q1quH8jkfspG2TuqjRM5YKa7PER9wkTjjAp9abAV596drUFDvcDJR38ycJx",
  "key19": "3rVLA8y6ratzEY6fXavfTRsLVDtNS6w9TsEwtvpT29J1WKAqXhXd1cDrMwyb6GqVuPobHuAYryGxt9amjbVxY12v",
  "key20": "Ge3VDs8HrswrNzpEo8nW6NKMmKBEzJr5e3jPdeSuSqBMZkDt5GB9GTWjgXkDtRcGcXonRxNS1EffozLZHC1FLYP",
  "key21": "4MKALetpem3QTEJM4PCP22gHVSefgEu811zHPbbNu3JQRp2F1JdZDT7bsVg6NjzkL29sUWhNPGzf12siDy6cCNoQ",
  "key22": "5XyNdgUu41SkSwihMgb2pAvU67CuPFPgyNKU8eAE783v5X9nvuuTofKGREW6QSuAmPbEuH76bgRQRQ8qEfQHt22t",
  "key23": "31t8Xxd1QqWB4eUB7Zq2ktaaQDGjJ5CCvegRGqsQH4TfA5suFCgwRd1nXEjug2VjtcJx84kaVpaLGErPPvAzJid6",
  "key24": "TGEPfVGDm9XTzRtwt4Lg3x6vXPHXAXGTP5EHv5As5Rs5FLX2jxGEVntVyu3a4A4Hx2571cYeENUYT6UAPDzcuZS",
  "key25": "65d1GNpNWWwr3v5KdPEsg8X4u7nv7dPaEmsPUH3oZjkzbg75SKv68wpeVMaSD4ZNGa11NBoJPngTiZ6F9irRWGjJ",
  "key26": "4wX7KvrwFNQFkMTb8iiw8g6NVtAykk6JBF5Gt9rMAamGmuFFtAYrwnd3ZjtbexQr6bfNwDYRnU2FV3N2288f2s3z",
  "key27": "4k5zc8ViQT3SLZJtKxVYtXcYWgRPm15rt9dSBqUmkZCzFAVBsRP8HQXNu71T9ZU1Zygp2PotLUCJc1Rnpydce4Ry",
  "key28": "5TUWorKSRFyHnHNA2yFEztrkEwigLufxeCUuhEEUxks6BPjmu4b1BBUMJFVmmmU6d3YcDCm1szqGHy9CyrGj8yYm",
  "key29": "4YBKF68VmjSrZqXGKWbvRLMiT5H3bQkj5ZtUc7NAqYxRsUrXEJuqKwHrBHXYPTyGDgENXMjTnLJhZSyvc6emqTxJ",
  "key30": "3qeZgKgDE6sX67x5M7s3fHKyYoFXCwQ1H3HXk3iA1YWNzZoEFmDDBFcEQZDQYiEGUNEUfma3nDDsYM6V1Pzr7SwD",
  "key31": "FyLVvZjMuzBt9yxbrFLr7EriCzRrqLwoVWioJxD84tebQDi2VdmUBsNyuzYQEyfMuqoiBxBPefnGBwyavoBdquZ",
  "key32": "Qiyi2xus9RT32vZfGY4MsvQVvHTVyCVdEb3BWTJF95gsLUWZJMgsZnX42xU8v5eAXWtHeS5cv8jVfxyLHSJWpzE",
  "key33": "56ZuLpxJbMv8CmDcXTiPxQuac7mM6QwT9upFmWsFJF3h1jkG58c54QwDcT2h84Dsx6JSevFohdpCj2fHz2eL8A6k",
  "key34": "38GZSj2ax3xMS647X2WQTYQZUohmKz8jnRkVHtWNgEov29ot77d9PzatYCwNbPDV1CP2HnoYVnt2daY6gUpWjPwu"
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
