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
    "3gC7w75ZAeVbANKNHZkogVh5hpL1WGjbyuHdvfEq5w3YNeZsrHwP9AVrrPF4w2G7oW4hzFWEFY8mksYzgFaLyyPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ggDCCwt52WzgSuaXQS3nrYAWRQGLPS2UQksdGWQ7nn4wDr3d57adkBCMsX5BAmGmWcrxo7gzUwGedMjk24ZSPbd",
  "key1": "4TKrEMY39WfZp3RGqQEZBsHWFp45KKi2ADLRNt53S1otWdWYDRUUbnGLL3WgF3TJNdNqn876ePzjWauLawmp5BkW",
  "key2": "2aFPVYpgSinpuLUduz87KPRDnFb1ir37SDD5mE18FLipHF5CWYbT5Di3zmKDpJdb5VyTTMRKJ7rp5bZENnGi5yyk",
  "key3": "2LxiBqdsgy96wKGKFQMsKJqr2xZjTyf9211Rues3uK134Bsq7cfiaWKtxPPcNtH9Cri7rFVozc97FMmgE4hS1opq",
  "key4": "5RUbsQLyJ2MiPRySiuMmU2FF8GzsCFcc29RWD1owL32WG5UZJWtvMqT84VvtYFMBYMoN8bNk6JyMj57R8NYWetYD",
  "key5": "5zr4L7R4GiiSy1Dpg5yuj5nUMw3EaSUSq2zFvRshgVRYS6ALLY9M4hWQzySKzB5cTeXiJBrVwZpAJ7NXMo3vXGu8",
  "key6": "3k2mEf1MJC1g9t93JkHoV6j4sFcnN34NKc91bv1i8Rx7pd3BTK6gxxpgBqYG5xvbHLpWbQACMXtyBggh2PNeN2c9",
  "key7": "3CDC9knNGBBEGY9XpJxzsZr6uX1XBnRxWEhhTqh337Ng6C3iiyZZ79Qzbw1dgnhYE1G78cViZ2g3et4tbuJ5TJYd",
  "key8": "3qDH6H5KAfpaMaqarpMvnK3NVCNsPfPMbzkRiYbyReT15BvxHWnL4fFvmQ3TVM6cK1DMYKh3X6YV7cpaMNArb1mf",
  "key9": "3ShDfo7H9ket6ewmMKM7kjWseYJ6i9aAkTA6fgdbwXKcK8xPd3ptTjpy1Z8cY26gRpXz749nX6XCct7iZGtZvHPj",
  "key10": "5q7WmCxRcYhHv8BjU31GGUCKzDwgyF7HW42xf4wriU8hcnjWLhuH8pgXzhDwwwD27ZB9wDfrpXd6dMttYZAER9Z6",
  "key11": "58SEK68iew7Y5tzZnXdN1PLo7MW669fpr77AFpRKHoCHRR78h7g6xtpKqtw6vkhW8FZE1N97h1Ae5etvZD2v3LcR",
  "key12": "2vKCzvDzNvt32QK6ujk1T74SboWb9XxvoojYBk46vbHu3wceEnPi5rBEadam1RCKs7GUA9fujzzLmduj2VX64vik",
  "key13": "41MvDV9r2ahf5MGAjYojHXfbA9tvzAupFaUNwm99vj2G4o7p5DMq5dGS9Uu82kSdzA7CQJjCpMXDx2gyYeQ3xaEz",
  "key14": "42YtYGvWUabkrY5bSMnsPzeVu2qXFKMMybpfu9KnQ1jR3U7JWaBVZDLjQywo1Xi5wXzA376rAdCJjSX88zMAnVhR",
  "key15": "4uVFrYSBji6vu5pDWedge5owSqHDnSQieHDhs3eevbm75uT5LcfAPhEgvweqop8LiizfVRKKJMP6tFi9bStDnc5t",
  "key16": "2DNG37oLxwXnV2wGwckjJTCqktpfpipRRPEG4tP5jgc2nnjKropvLagd81u6yyzEDMtUH3CYyrrCX4Yw8YPrSGsr",
  "key17": "2ZomAgxpHJwmnvzs8BvjKkWnLGKjLJPEppFWBx8KFgXgAXoE2T378fJoNN4vGXbWKC1eUTLACGZiS9ommt7wq6hw",
  "key18": "KMLke3LimnAnpQeeqyfMqQpa6T9AU1MzD6qTwYs1ssz8jvNh9jzVVAWHDv3rH7bxsWFjwfhfZhtoFpXqaJ8WQCq",
  "key19": "3MHFXtwLdQxytTGupDRvxgn6e4QT1udGMFcnnGmDQyazmQYwjYdwtHier5AuG16K6hnvf8pGGxuEMLhcKytthMY2",
  "key20": "3cidqxywB3gVfiVbVwf3R8sYc9yDt7kHageGN1Q4Y8ojQVYRgoRn7SmcFKTg33wBCEAEFhRotw8ZFe4wBgqzM6MV",
  "key21": "vq46rtwe8icJgxHKCsdN6Zuh4jkWLbqxiG9GvQdVS8A7HmFuhyd8ntWEi7Ed6bqUqoSkKBDhHAtrVBSdoHX1gX3",
  "key22": "3KpXrMvLucDc5kVFoMv7BBRep3MCG8rfPZoi8gdM4TjrTmSRh36XmVgwdLPjyUbsiuE51YJNXUFF12nTNW36TE4D",
  "key23": "5qRDASXSSuysmcYUgyTuYstP7ipvk29T9VGoqkkZZExpk8sg1tp11KsgxmPpQ1ok5cT55FXhYajBErzVXSmELNbH",
  "key24": "3s6di5SAeVP6ENtDshWME9wm1LuyPC63BNm2aM2xxVYErupS1SzsVKEwUA9EWdE4SRyqkU2Nq5cACFAJ68yTCGKm",
  "key25": "5qvFd6q6jSzcJCE99Lhy32KP2ue3zXRXW7xNHRED3BRTRDfoTVNJWMcHvHyPNGZVYMpjmwm3YGZW3v4ba7LWm5Ds",
  "key26": "56d7SyYtHygSPcFmiSb8d1vB7NaSqCYbkb1SJfoAMx8BEoEjgCXsgVRFvhu34PudmCBs81vxcEGZS9ShYDx58ewV",
  "key27": "5a4e9XyfjDz8CjTQBKmy7TkspaqnLmvUMvtKy4ofAufzW3bQ7mLuq36EWtiPbzoTUyW1Q3hxoiEuCmyCCR935KhX",
  "key28": "2x3WYKmQnmsu5DWp5BKBjsoeYDn9h6DUposWgv6Fh5FLJafnTKPKsrtvoYU1ggfzDazmin4LQjjYAoN4xMQTkJTz",
  "key29": "Vs3m6suhAAb63bu5EAvbR1cPgMWNet31DG8JPzGp6dCvFAWsnh3M8fnsdKdxb9vwFfd4ecvHwE4sMheDbTqQQ8a",
  "key30": "2cSRfAuBMHP9SPbKwzvaCuBwzCPUqoqhffvd3oeCSDtbeVDyey9kxzPu1dT5f63VGXmUVDVjrUzaYdxa5p4xCSyF",
  "key31": "dPyP19KkkD7Lr8QmKWkPGifVBt7BedhGRzCwkDUs9M54rq3oS5MRbQWPKJnqYamx3AfjfaNHD3dCiMPyE4D2KkV",
  "key32": "3HWiokzipCHzCy94UTENf4QuNvL1YpMnGGqLrehZSWzvM9QmcfhGi4deffLPAEssjZBAWF8X9PL8LZMibuFpUBr3",
  "key33": "5yDaD2m3eGryKtwsMeL6TmzLpcBniD5ATQ7Srv9Smhf41bWMvogVHV6qAneS2wFhrH1BCb9QGPZitYVy2iW2ssGz",
  "key34": "ZGYKMqWQw8dnXNSrQDRCzLUAmbvbg43jegiJEcyXr695M7KZfFERaaw7cMh7Wy8XuqPUgokmY8iRxBJYvDL37Rt",
  "key35": "5M3nzzWUzUpMLrDBFGhfrfvqQuqnuHsWkcMWMXvDPtr1jLhkLd5VL5fnRHdxajnNXWk9xJacGC75zBZP6m2Tb78p",
  "key36": "5j9e7Y5HW5DN8EC2Gv7Dw8ggV5W5CXghWw3ybNQGaN33KGtQ8ZW1KiKJKhTugZ1WAdExCUmngXuJGvF3ceHNLEuZ",
  "key37": "ymmPjYVfuAsndkr7oVZMd2LzVhkhQ4MgL6ZVxekR66pp29URoEu6VzdE31SP4qG45tHgceePZQxSTW3yE53UkME",
  "key38": "2e7qUuecz2mbMpWPdAuq1rc1oPuxYSACPow9m54rWL4kX6pshrPuncmpZxPZ2FpCWepfSdDjkumwccvuGv1AU1WU",
  "key39": "31MjUpdBKZsV2sGfDSuqeCcyPC3hy3gznpLG43f5rfmPiEGRpnotY76VdiLSVLtXpEcthDfEdbpaG15iNZ9wMYRG",
  "key40": "5HUSkxQ8ugFq1pSwYmF5RyjPTAH3q4nx8i31meoxfy4dbpvPagNUeAgVTHrCjcKmyfuXCKVDiPp4QMeXnZPKdZuJ",
  "key41": "59HxXpR52vTyvHn4hSgZcnZPHttUuxmhijf6CGF9nL7pTUPyHqppkoLU4vbex6hWGHh5975frVDX6i5iu6Wufb26",
  "key42": "37oMZPGzwiCySpx6Nv41aDmu6WJTKnwddRQ2kWFGe2bS6eRDmVBGtagttsyJsJNKjTCuKg9Vwd5Hhpqqh9vT9ApA"
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
