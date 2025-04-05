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
    "5psET8h5yS9BHhrY55FpS66wmr4FxtyNXEAL3zFgQBA5RNvJJMnCUGumX86wivtqtZZjQavLzFW9L6wUQjhqABD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TtvT4dxirE2ydgfk9XrKk6wR7pLADNmgKY7xwcaE4R8WTtiLn2u2BKLZ9uEyptxLbdeRxrbL85RehXHQDPqDPKC",
  "key1": "5om5r9RWpoWSinwq2nQUWuGiWa79NVZ5YAqEK7ThiGvGeLgn7scxbJdtmFFudDNTnTYv8Jt9HCuNBELCAZ4x3iNr",
  "key2": "5HHYZ9kcnPDtoEKh56cVQ27qkHxuReMt6sxUR6WtwKVwcjao9xB2n9UJG7kn695nvEcQKqd2H6gqiDuAfbGaGcAP",
  "key3": "3srjC1EinizCfjyQfBkRdJuAzfofwyyuQMBmwugaG9VtmWsngjYYJceP6vbMr3AbkmJf56saxXMeGsGDsncDTvUr",
  "key4": "5cRYFGfpktf52a83rRFtGfWPquo4Kgev6E1ZC1HXmwU8bS8Z21Vt1nTduk14qtsY9qJh9AS9PNDaMb53BWoejC5D",
  "key5": "3JYQBVKp3BUjUTnM1VtDfAkQF2FZZsSNbobBHk2wSPtVLMMXV6aPCMAuye1jBiBpcwFvmu8HquWvZy3F2AWjwe4Z",
  "key6": "49AN6LhmG2JFwJkeqXbftYNjHSTyTabNccnDGYFYdZ7WNhMKfp4W5w2ZfdXa7NmRznNzqYyghCGEmxNCzVWwUC3r",
  "key7": "2CkXXXHumooT7yHkzHEvvjLbEhgVNTwxSTDtSaxVhWBV4VCf9MEerg6St81gTxLxZacfENruiQvs99WcJURxYjsP",
  "key8": "4T95BBonoghviTMPYNu5TcqmEvw3aYxnXb2jCTz1RVTJgqfor6NeRfKYsexnBT8mjNwCsidjj7kK6axSrs3D2C3o",
  "key9": "4ywcMDaYE6edHvUnrEStaHr4YoNjQsrDTQe55VEc1HvjfgmpdZog464xo2sbF6SETtWqzFnDJGzQveBH5ad3MXtr",
  "key10": "KFQ7K6vaacCxnQV7BXYxCUG8mbLeJJcJYGyh3KkW1zPDQR7tgYuysKU6FHoSMurZqosRfq4QQcnG1HQfRp54nCT",
  "key11": "5ar9DaDPQvMrXWnzCfuVy15QbGmMvupvEqztqi4vXSJoNnJyYrLBUAHG5a15kRfzzGTHFSMUxxzN5FLokSPcNWYS",
  "key12": "345XdEd7UBuT7LhWkQzPJLoFq6iodN9f8VU8B9eYqgs4qq9vUqcggqaSuPvJnZav5YCwotfjPpixQxuGUjZsHY9u",
  "key13": "2gWJsCY5eSFrB4jnVSC3J19ZJdPSr1CRQQM4sEDdZgUFou9XFm2UQxT6cUJGaVDNvWGFfJmmQdkbKSSD57fnn58t",
  "key14": "QiDeptRKxX5gtsr7TJUvjWJ2AioXa2c3fu8gKqL6abGY2VjtPvxDsBj59P3mDv7VTSriZNHh8ceNYGnQHBeQb9v",
  "key15": "3mWtAk27s26X4d5YD6QRu6ZSaKZ2MPYdEdQbXiRceMcrmPGD2PaCibRcrYZPh2dFAc22cbpjQNVsXa4yLbBrJ8rW",
  "key16": "1YAUzDyxkUhQ7krLUpYP2mynwKCCjJLr2ayRMWCm74i68KRdWma8tySmsf9UD2snyawgt4VonZwsK4f6EbkVGRf",
  "key17": "3vxb1uHwwEpcxVZv1KCD7yyR1YHFXuu6V323V4DipTLiYCYfTqCEUSxfuS9n68iCVPpZD3JvwJQA13TNHSaLjQGA",
  "key18": "3T3sfPsJ8wgbMMbJ91BMCkqYCtp6erAoVvUyZyf2aUD5ChGXQokq2jGr7q2T1px9UssnpQF85PCd7Yvx66xKMmcf",
  "key19": "4BbUtiuugaqer4Speaf2oRF5HAdf7hK7seWPH8DT6hKbftvnH75ScVkLYReprhRcowAEXNfy9nbPcpERjTdVvpVv",
  "key20": "phsAmZ1EKr1F5z9oCQRReRoD31gqezH86AE2x45ca5jUk8ftut4soA5hy57DYt9Wro5Vj6UGLx2ZWUyqgEUfZnt",
  "key21": "3VssACtwRf1X8f7uWCYnyiGDnscFErdADzmtXTafhkB6gmMS91fw5UysWhqjZJ8XoaAK1jzm2THyN8ZEX2eA5Rja",
  "key22": "3awDQ1hKuzC9Mv4Ugmdct6KFAV9JCbXLcQd76SDxnsTanCkRSTCZc9BiLkHRnPZ3pgPmkfpuMtMPkuoTDEwbq49e",
  "key23": "2pqNBbAy6SA46gBDfZWuReGHTkcV6QtDuBbY2yujbMHqtWisChHGkEoZjgP62e4k6ShSiyMw3XXu5ER65iSPrgEZ",
  "key24": "5aPssonsBcnTDgnq3UDBAbKukoNKrtxn9a2hGi3uAB5MF94zHnSkBENrEisxqUfqDiCVPgRHQawAnbRi4oCQquC6",
  "key25": "4YoeZCEwuQFEuhX5AibbzpBZ6bcLBf3CHtxs9QWPvjFBApM65yb5MLwp9wnH9TA7D2ZCW3hkYnpCKnaZtMnMLbk8",
  "key26": "5qTNK19UwJHSwHwn77mcUgkHu1U6ohNarr5GuuBsQQNauWw3yFnA3buC2uMGKGBE5G2sgt38iCGoBUVS4NRk6RQD",
  "key27": "3bxY83DCJKX3qEBGCEcEqppq3uXQe9zRVLwSCWW21ofCyzYvpjGeJU6p4uYGKeec1a21aztdNdNdfrkP4SVsQ4J8"
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
