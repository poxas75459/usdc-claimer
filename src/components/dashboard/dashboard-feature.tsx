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
    "5fDFrQCex1vcUppmNbpLTBeos2yv2hvqbBEkGGXqgxG66d1Vx8DGmeGGrBu3GQguDi1CnocfGVrCb678NZvmLu12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZL4W7J257MKS5UQ7vGXJhUKczCWFtgP1Q4qhBASH6JCUA9vfrTFTHc6npicynSYhquy12SabcmVwE6DQ5DotGjh",
  "key1": "5KxgUBti3YaHCs97HbXS4bKrhb23E1eHBJXCxGVLVUZaxio6jKjgotcC84vyiKakJfP3gA9eg5Ez76KK8ULfVTAb",
  "key2": "5734Pz4YtbF1QB35bRjg1rUML9L1RqaJfUkYasmfGuk93yfnTgF6eQzD9yNqZxKWSJr2HeGX7ngcWeasfvzVLK6z",
  "key3": "4JeKVbtU8yEN8xVjiB5Pbu8H9KV8EbaA3m6PnixZgfgU89SNedRPDTefKH4mXp4abqSuQKFXGCftCPmWDYTdCa6V",
  "key4": "5rh7BUTtba9pwG2Xg6fwAbtgf3uqi4nCpLYmambRj1c15bc5WuKAEwZLUKqrhVzvqHxTZd2xBXcZRb6RPDjoxqUA",
  "key5": "3fRUcTwwA6YoDBj5NM2DxxybuZfwM53W2buNEuuLHHbKj56M54fXQ2xL1U3nzxEHh24KqsCo8BiA5DHackxkiXvQ",
  "key6": "3Wsqqq4djuCT6aYUksyMsHjWkLwRKPDn4gQdvoGLHG8QA83zQuteGxBWkRv9nFx749arLjai8UtmnFBK18z8ni7X",
  "key7": "4pWKefb4XhRjHLYGJ68K7Q8J8THfBXxuWXH1GXYBKB2PBRDp7s7JZB8DoMepdVo1zjkVu4uy6c9V4chv9cByvE1y",
  "key8": "eBRcK2z5ZEvM22B9xFyhEqUrvnSHSxFpHD9f7J2JnyQrhVJ6DWKJQFPZJuUYXf9i9NiwepqZamUaX7Lc6UBw456",
  "key9": "oFu6mUDMxNufAAw9PkYzSbtuZMgkcMmabuPSSg8tjaGVbmc55HBLDwhxvusnDhdcSDsaA6EBCavKVK6cNk5emb8",
  "key10": "2CNCzXzkFqmqHkDQhzGNEqHh8K1DSYTThzKo3jYs6HQ1tec9VDYNP3GmkoUxCN11aJWntngoPPCAZT4hdijyPp19",
  "key11": "5jBrx5SkkKjU2Dx4m7fYGcDpjxh1snoaW5WN33LAQJ8Li7tiVDb7n26TwYwNiraxkEVvfGuQbHBSase67bvdo3sW",
  "key12": "4GE7dt68mvpuYmB9TS4u8ZFGki1EfQVQx9Ft1yCaMUL8V8Ca4voCvWSn8jcdKEy5qpv4oaDZCb3Dx5gKVeiN3kfa",
  "key13": "1Ws2DrdR4AmzEVPWDt2hoDpnYBEQsCDpYVguRz5LGouPLQF8sbwHZG8SWQReXLw59byQZ9q7T5vY1YRAEi7rFVG",
  "key14": "2QtU3314MrGSH2kXoP9qsQ7unZWAs1vifd2LqLdcgRoWafeKsrQg4rjomyktVpxzvX9KGnhpr2Y67kFy7R99149g",
  "key15": "nHnounQHKkBSUiTTc1rpS6yzZbL17aNGikrL5qWKgCeYv862hhodV9C3zaiwR6WnsbsdFUhycm3KigdZihBSgPo",
  "key16": "fuyEs7GvGs7UjkP5y6kfNBojzMWtFdcp5NuhDdQ2z9cEVdPPLezUBRu6Sju4PJrTSqwn6gmYJFkwke36qPCnZ7f",
  "key17": "3tBnAmUJ6ZXZkDHtgY4ypoHeLUMKhUrvi9Go1kMdJZZFkYMcuAXCohmBM1WNqbBTak2eKS7TazB5gzdeQNGm7qye",
  "key18": "qvLJmPkKr3SjjexVRBU9s8BtBL3oKNeQnnPgeqWbGyVKw7zZADx9SFkysThgmBCbLz9kfZg752cz78C1L11EMtR",
  "key19": "2YvpnmgxSstkTG9c445zWXCXuEKri1mM3XxCxxnr3pj5QVhvi3foEnSNjsMHbDLXFyzNZ5CdMH7E4xPSmXXWWGGD",
  "key20": "4UZKotueJSBM9Z1Xd87PDCaAqqUXk4dvzGkFznE5M6dDYdpHR1svpkQA8Yv33cDJzJxUMuC2v9KXFw1yKSroLoS1",
  "key21": "2FppdHw4M1sEZPPxAE37xV3hP12wp2ZuxwU1CHf2JpRpgKYJ6CDuXocE2cyKZPMvzn6D6kzx2bSNpmR6tXSugP5s",
  "key22": "59Up8pmkznGc3XZwYUmnimCV8ZC1j5yPSEyM6wi9oPcJC59aksjr1N6CjV1Lm22YF153smVN8ZgQoXszTUqv68wA",
  "key23": "2eSQnckRqjdp7yd6aB3mMysjrSzzB5HD4CdwECxNrWtbhR2UQpWWrrSZuaqPu7TY6rvouS1JNoFPKChCJzuPogBJ",
  "key24": "NZvokpy3pB5PZDE3141UHFzN1cjazJUGERpsWk3r7pmQ3DtrsKA7Ee4bqJYRJERKuPgMcrL1VgYypVfRmY71c9w",
  "key25": "5cahnLGGa3ddRvMcs4Z9B73w6wKzemxhZnaU4oT5VhR9eEExcn2urqk7xZRrfNKwMSCmcqDetubJwDroKSTnkgPX",
  "key26": "2WXKBX5eWqAup4Au84A4AdWknrWBtcHj6aACFr8cy6chn7aKMgyEs6nsgEizM85HXKnpoEWGFtkxdPx9YvHvZShZ",
  "key27": "5Arzg8HMCKKFxAfBbCR9MB9zqFWpU7QRvqECiu2vPCtgTy2G8m22hxiV9U6iwbFdNzuvkqz7YvWUaDdnJZViDqzW",
  "key28": "4bcQ16KGK9t9hPNxxE5sNBCPBB86Ac9tn9xCpvMhSs3E7BK5V2KusiHauRgvoHkYeAeYpLVxwMSVZzyhjM8s6EQZ",
  "key29": "4RWzd7EJVjNWcCW37Nn4GbZSCEbgLnFi5ReiiKdS6imeaWWv1hNzTLSvRqzRYY1jafZKtQeBeQqdG5uJ6nRUhqut",
  "key30": "3cuhCFaooJuJ6KMyfzi3QiTyK5gwtaHVBm9CLyM4qyevJWfxEziUGGyzNjXZJViSzQ2QivJNeGPX3pB9oezTw2i2",
  "key31": "4NUMCxwXyKwqXK5AWXq7uHd3JSfZTfaLfAn61Df1Qjq1wpt4QmTHppw5V7iCTPEKyDaDpfTNBSUkuXnE3zHtc29s",
  "key32": "4AGzv9Cd1yhz8cPZSJhy45A1JhsubCCGfnLfDXnGc3ydnGCkAEoK26ut9rthjt7Z35wYsB8bPhT7r2vSFE9dEJGb",
  "key33": "5KWuu5eAZDebAUQd4qQ8dFFzW5GDy1kCQdjVkRbpdJTrWovBNds8yg114gLpULcEhAFbrhp1odGPj4AGMncby7L2",
  "key34": "4iiythwfHaeDXi6wrWsigGW4T88WZkJdRXdSgRsSkMavYNG8WqQMg9j9Jug6kt2Ua3sxo3R2tQWKgnrDkeLZCN6J",
  "key35": "665gFeC7Vg88MKjkeGxxaYQHzL77yeXxCLyMbeKfZhJuGLBdRRMixYgrpMBX82eXoBcDtxrFHEH1zFakYgSeAHtv"
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
