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
    "SctyiammVfan3FYBGhV5yATvDCJymzMomTLgXwnmnCT9xzjx68orcuHV4rgzk8idcQGJDnGpktoK1dGmQB2GWa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZkFGcGCavmZ6JyivGdbzKnMtHexY2rSgsRv4zT4tYcUTtJzS4w7mQMHNonqNwLodoQWXn1NVJzwumGSJJ1wf5yj",
  "key1": "4GZKg3PiWDUXZvKupuSjDDTsTPDx3QLJHwL9iD9tNqmc6ACYvVH6BBenGZD7P77sofP5WGJgCrT9PUxKvMxNWRJZ",
  "key2": "4LXBygvsFDVr8hForW8kCMRBNCDox8oAw1L2ZUzg7pS3MFTxqDYRYnNTCVHHGg6bfLKhM6jcqbDDYq14sTNgFrWq",
  "key3": "5piw53tLaaWAVziQbBUHDPQZtF2peLvehBCjafntPLuf1BPYxon6F3GEpg52qp5DKTDbkoBA9jq21YUbjzmY6YvB",
  "key4": "2bheF7vLFarZgt61empxB8nmzS4JzkcJGGgSC9sHWB1i3nqCfENVTGyqK4455TJW7WZe7W2sGnjzC7bRvyvgyurf",
  "key5": "3VfU8kxFtT4bVJSUvaW9gcyEko5kXErQQE44UfwLSSX3QrJRp5jWauJXCHbdJd923aa6fQqfrpmVh8n18t3nsyjk",
  "key6": "2eg2y4WaofrdNXztpoENwy2JKScXzFEzEn5E8Jc4ADwm2Hs7vEZnDLdxmW35vrP1bbZfuF7vNRzMRGiZkKFr1Mw4",
  "key7": "3H8rRG7CDXdRv9DqWkkvr4CXepE4h1a7YeHWk1reHnn3eW5qVKegVF9durQk3CxbC6waVY2iCsvoxpGRa3mV8wH1",
  "key8": "fL8fWNaecJX4QBUyYHN7p3nmDFy3AWyaum21yUGqauXuRRENy6iNaKaoZte2A29H5CtXSZZRpFjJuvTBB4vpMX4",
  "key9": "MLcwX7GXrkfQsJHWSJcZPvTKRGAPNxHLnkWRN8ohzyhiT7M8KSRootdQdZdEuRaXVv1XYBhy44j5w34HxcuLpAw",
  "key10": "h8y2kuerjWBGibVc9y8cwnAkHT1HGYDEyyXiVUAuqNHCBPhrBHVRGq8yu16wMEqHQEvWawLua4YzFgnS9FPpPwm",
  "key11": "5JsMNzJGxrB2mTT73pSzCc9LB2gf1j4yZG1k5Wo61hPXea6p65aftZcxJnQR1KHNfNvvAHtZpYC8iDR11NRGWUPV",
  "key12": "5pA4NYeh85hQd64bUa4Cw8gB8BzNaNhFuc2kHdJqjeJEvcjsqB1zeAkAnf5Eo3hia5Qf9vAZbhxNYjpFMSzwi2BL",
  "key13": "34Rr1heTHPxiuWuC2qeDi6yAa2TTS6xSTtCotPHargRQsarbjTuCybbD3heXBcWuC5U533yn2Nsq8oX5CCgCgDwd",
  "key14": "3CA88gaCpm2FhhsrUyHxVeBeFg6b2eQo6Cd1dhgjzdtYYrwL6CUQbgVKYEjyNWQfKYR3F4kQ3e8XN97G14LVE3ep",
  "key15": "2UsB2ekAVuYdZDTAahCQvdyAxkjfsra9yEkRpwbN513YSJ3BAcoKDaTGk4otS7EBbVzjP5JQvraZhkbBGkjh8rmG",
  "key16": "5sLwkEm1kFZsSPzGfS6U4paNt19zcmou69F3xHMHsdhkvoWpNo4UVyRmaqjQTsRtUoedCFGnZcV3Er4MCmG6Qbmm",
  "key17": "ruxtftS7iFpd1rrHFJxiC6vuFJD8CjBiHkNEQK3s12NCwrZdANpndf4TAzg42ZVij4VMuRMpXFkiTybRSybSC9g",
  "key18": "6rTyc7HxSRLDGTH2zqurz79CFqmRHqNqtjCNNJB8iu62Ybtk182nmAN2i9VtJDLR7X1wxRYCKKnuDZjUZZ6kCg8",
  "key19": "nFTRRG7LK134xAnKxh2dHm5tVUb3NaZpRdLbqRXWy9Q1cHu6Ym5xnhFA8XKciJcAjEL8fNzq3Xr8hsDcbm7QjTs",
  "key20": "5a7zVkGL8taLJaLEd5zQCbZrXTCMKXh9CLpz18Uyrp9BJ2gpQHz8CWhBTnzzYR9pvRZcgdFs2CYbCo2XFpif1AB4",
  "key21": "QtWBh1QeF7FyK4sm5DNM9u8KSZS2QatycjXgv2kU94EMvEtVi92gfAqQ9CxQR5et6kPtUGGruZhebJQN7U27bCY",
  "key22": "3ctyxvY12CdZNzbM1HLgZ59k7i64bXB2v2bGY5s61SpQM46TyZ3YyLYeA12jxhvGARVweBPSAXMJUnu3qEBzPZfs",
  "key23": "xMG5ysSAXfM7HEjGvE6vXhtgK9nciqZTDKwEg8NjSHAogXggNpGZQ3xoAtQwLxBwdHCh8rELLwZYttXCNAuSwmH",
  "key24": "5EjaHW8UXzMCcqDz7uy1atVdezQmYspgGheaNeuL3Rh2idCegRPVY8n4CKLLhRuURdeVjn23AaBbxaaqESbUkJvf",
  "key25": "3W3YaRokFw7EzhGYEsmJ21LdvcXVPJF2Mci6BwP9PtbTqHr2yL5qGATwbrZR3cM5KoanJU99igJhnzueSpKQ5ov",
  "key26": "zPCu5xz4shZKcRv1BZMN3hKz3FfUT1FpHyo4sZGSPw7hPiD4Jrh1JUQg9AGaHMCjrU23WREPgQEyAT71hH9ARwh",
  "key27": "2sJrCn4NrCSG92ESE4AB6hNMtrrgpkvUyYgWhas4H6BXBFmmiRvWk1kty42SX3paCZXisRPxmE2giFh8X9TyukUQ",
  "key28": "sziaVBN7KkzxqzkkoAhkpcFfn7eoNSHPQov94buM9znqLHHQfeVWTZXfDp3EBjSC4XYbEqJBXtrqdv3LCYzjrEK",
  "key29": "5as4zSZoo6CB4ER1UNN2fyF4ZuRqtVvkMdNfb3fipiYTQ3JReSaaMWyrbf3J338dZNG4duZfbEdNV2D7b4ARX9Yk",
  "key30": "jpdJDyL1SYQe62YTGVzWPZCVzw3vtfP4inFwZNXiK323qJZqPifAFwt8skaZCX8nDhkLJYTKtvDbXXZG76NWout"
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
