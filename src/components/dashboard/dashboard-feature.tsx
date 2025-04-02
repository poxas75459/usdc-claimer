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
    "59Xxu9fM2k9rX1ax1e5EhZTSHZ1AeymjqhB6F6C3McpwUwunxURJD3p5jXmDqDvVNfDoM9Mc4bayEW1p67KBc1DH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FkQ3UjYKJpkdZ9Wpw1BPzvwkkrA7f49a19SKT8WjXrL3TAFCManJEpRGtxLoXYPJUCBL5waVznbfMiYF8nynwyX",
  "key1": "281XgYVYb8YifrXV73cMto4dkWDskvNtBD4MHp7zFRcdg1j3gyf9e5ADSnnMaDYiJZPfVQTH7oryjnHxM9CpiBpq",
  "key2": "Z4Qagbqxvr6ffyWYEo9mmSD3pxvznvK1gA47fZRmuLBYz2LRcicJXZZv3FVsncTMFXq82nicwoPWARs5ccNU37w",
  "key3": "4nKgpY1sta8RXAAsCpKm8gg8UoE1b8PUyPRTq9jamsftehnKdKqMZgAvB2f4kLVTJrjYfimNGg2p1zQRwK1Zvjkb",
  "key4": "RZM72LEeNwQtyi5xQKxVt7vETrZ3HtApydTa9kHJ1w8ZRyENsvqWPFkAanWxnJSGFNKastWTwYYtkRu2A3Q4uZT",
  "key5": "2owNP5EmybbrmyTix6Usb4w9XVJ7dTX82jbXXbayqe8Ue6Cm6gmPnxgXkWhRaxo1Bt1YaZ1SDPLqAaFYrX6f9mFx",
  "key6": "2VSGZkKVMXfKHPWsW7SmPD2qQgFbw6vnmaAbFnuF4ydACm67KaKE8GJpS9iNhZi2VC2eAdJ7qsmKFxf5CSxHFRHD",
  "key7": "4gvpu5xNtJ4zfFefRXsX7s36d5mMfGbEbjUBVv1dcdgXbqLJe5tZzLCShUGbRZkMuwoadh2hRWDSsGt8WtsiXhL6",
  "key8": "2iGcW9iSBsY49gbdo6Zsc6w5LuUoZoTUsigzzCK25mJX4SKCHFFDcSF8mSgDH3uAUS5UoUPfs5qh2vGquBetnSBC",
  "key9": "4MqZQ6njCQX1PPHwgy4kxFeF8Hb8joB4uhogkuYiuznNz9VXXBMjvd1e7UBXpX15dY3T6g7ckSX26v4DNZyxNMep",
  "key10": "nqr3fWkcs4fWLj423MXFGBnBVWAmT25gCZ5PBzhCFmYZHYs1skf2Bv2GinTdDg39pgMjFo3ZvDV63afuySytQVS",
  "key11": "2M7Z8KDeXYuVNaDZjktmcBeKpcEp4NMVTZytdBHPmUPszjBuicJXjGw5h3cp9yJDRCAaN9EP64xgeYrRodDacjXG",
  "key12": "3qfBJfoi8UQDT82nnDXEi3epudtZp8BWNAsDPuYycE2Z7rWLSJ8C8tvuDx95JLeXfER3x5TZufFv9RbANQToxTz9",
  "key13": "4YnUC2nyN6NX8JRxYW4ba4DUZwiVwmXQhvaZ85xgXqE2s4EZQAVWmBF9L11YQZermv2fNm3ym4QbuvDLvPvMdwEA",
  "key14": "5RSkkh6Wm832B2RKy8JaVwwKkrnQzFZyvfXxxfvVqjPMA5a2g3zWRud5nXY8YzBHmfeYQNhnWdz2ZMp4TsYcRRuj",
  "key15": "5hQ3uXHkhSS1FigAcJ2sQu5NmgxeTSNwUTseKhNTgHiUpCu6STvM9bkaJ1ckQmCYpeXbGdsf12wipc4LhPniAe45",
  "key16": "4PPHCP6dDNpaPb26WoXGAKF8ezXpqd6syVV6JisegmTcLhodKAXsBntrWxjeQxspRXqnnnN3WuCojKsvsTFckSwi",
  "key17": "5y31tt3yxRjcr5zbsUUPbxsLqLqDRaEBmBXupLwYfCNMFwKSRhmH4GKk7fn82G8rLqsZCPSh32wrx2e8k5vo5UMj",
  "key18": "2bJkX6QiWp3X99TxeaDzUYPm8nYekApSuZ9pDjJjE5pTMZasaLUwLK49RfDyx43sPgKV9LpQDbiY7YBv2aJ7b1e2",
  "key19": "5nB8KQsBY7e6GuPaDCRb6HXZUmpS9CpELY4V7p2frLsN3dYDt4XAn3EwDVKGuYS3hkF36SvGgTcYshPYhEEe7D9W",
  "key20": "3BE2SnxPSWgSZd6CqX9RgFmyR7TXAd7rtst7irnwKhUGdZWtihPLMTAH1aXKLJoKG4d67WYLiLw9qJEsVhpfKtHQ",
  "key21": "2iE3rGbkFi8BXPRTMCfTpNgHtRDyySdbbJfcxmePiodqCrTpTD9WNXocGYmnErteUApgPy1Pq8d3AUwU5Rn9z5NT",
  "key22": "5vtLZ8yknuC3nz56sbmaXkP7ygjjkqaxjZYHYdY1byjgftg3r5xxet85hLWnCAtZrx4LiLwBiYZF4p2scvjhAAmJ",
  "key23": "bj7XdWzFQ8xYqTUfmpd3ciUHxKWND3vyb6QUBpUdC5EPcCUCuubByypRnXYN9GQmqD1HkURT9ZX6EUg6zfW4f2h",
  "key24": "4YnntJg1roHo7YiYPHGUJdeqCH7XQ386qVaPhWo74kbbDsRWVJehHJHMLoDhBMRsGbAUfNeLnZxXKS5S5aH41o2W",
  "key25": "5DiSuE89XLtAdoMuL9aVd6FPeDab4q9fGk7CSZZFkkaefcKXJYxBJmbk5yknsbBL5DeWqfadDLbStYq65nJcSAAQ",
  "key26": "3kUg4Lh8FnqBXxtobonjBKnUp1S7UX52wxYnk9XuKVDuT2X6pGFAzAk9PAvWQ3umV35AqiVZtpHrLkomVg7iioYS",
  "key27": "3xZwGhePWELoq142bvvdYpQ25nSd4KsFad4tcHRf9whd22h9RE12HoHKnUkVfUQQ9reJxvjtRWpjMPHEuAqEpfF9"
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
