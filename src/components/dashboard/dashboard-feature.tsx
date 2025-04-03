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
    "2dWdmkNizt55A8Snn7Vx74tEahCCXDu37HsN85L25rhMwCkJxCWUfaQhasAQRQ9dyUM8BEiNueXsEwrp2WCZRE5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jYK3v649SgpEBPTMYQgdvuAVQM2fQHde4FDE48uNnFgBYZkNJZXdzjYh1g7CwzMg8TjDjRqaW7pC8quw1VixG92",
  "key1": "3BmpzMqLH3QPhhA8RXewnA9kv8kDusPoLxkquhmNFDEwFQrrvJppf8ZaSRLexqwSbf1bNxkBb93q8LzH1byLd8HP",
  "key2": "2mSczyPTPCUpeWjbiAC45s47oScEwkskL8Wk72G1ucxSHWp3NUqMjwXUjs9kegTmGjuXkVkYyGoCNedHM4SBBSfN",
  "key3": "3QFnau7Uu2tGmFma1s5H79CfpA7vGEc5duPqK5U4zPmM3fb9vvQHRQfqzSoqQ62JsudVWe9649NPoa5SSXGFgygp",
  "key4": "5ss5DHnGJvDTUGH6jLyShbxsEDjqbe89GhsKPxXCZ6oZ8zmCNGaT8q2LimQr76CBcfH2NPqXUffo9Sr4wvSGK9cE",
  "key5": "2zWu3HfVj6otMuQAj6uyFbSyUWynkRNU9e38RiA7S3ciLj6m4ZHKT4CtMG6rsX9fpQTMFeRMmMVT5zKSxwnhphPj",
  "key6": "2xVLkL2wfm9TjcFvTsqLEgHxDABqE9WepXFPMtwHgzEDGJi5BBe9DXrByzB6UePAD8LGzRJmik7eDLDtesDbZhEn",
  "key7": "2ezhGmfdPAUmThZyF3oBYVjpdShrrVg4NyaE7GRHKk46XKdyb9KXpuucZPowBvcsQE4XygmjAxCXN9B4b6gqYmiw",
  "key8": "3HRWmU5wYHaNhtmP6nBY1f4WT3sckoaGrz4zZXifvM8J1BKxDcHYjtFSQqrhBeTH9gHeJjECCZcYSyQnPdXbgKY5",
  "key9": "63zKfEgkN1symXgzRNhEaVHQnVJNp1JrimizEmsUJN8DYwZZg2LCEgRDEDhFFRZVyVRqYjVwNxvSRgVupk6q8FCM",
  "key10": "2aUPUFHf4yvanWrAVLZ5PLSJmJq94NESwid5NUtKKzZRTctQafWC9JKLVAPE8o2fKSudHsr1GXRzVdHUmvexz3EZ",
  "key11": "4n1qQhPJsDirxX1KAoeET74MWFuTMmoD3PD7GwrtQQuwxihv4cwA2BYTHLRAFC3qanvzvh3qLSj6sZ2uWmyEmpH",
  "key12": "rMPXPSh6r4U9m8Jv9XKsqW1nnCbcXnYVRAcgUbvnVfXqxBveRk1FXc9o1peSDVTTAFwRLSDtPozLWzvWzLEtEYQ",
  "key13": "5TSPTU6YjzDr8NFh6YUnyaAxkpyBpX8W4CD3qSZfis98d28Ze9eS12VBthdJs53ETGru4rRR7tx5PwjDpQA7K1rj",
  "key14": "43wZWFUs2Kuwt6NjiJ8o5UgB53RCeQXEKVwo6mgL2tmivxXjXdwzUEhHmUUfeUPAUdv6eQ5yjwZBuEFnf9UjyXwy",
  "key15": "4vXrQknrPk5g2y4mRRrwpX8vTur1fU3uTMiTUZfA7P2wZ2f4Dykpu2imTqfkJmM2tbvpH4gAy2o7yvEKYYPuqheE",
  "key16": "hLHSf14oAxMWxzXBZnCNSsTbW4Zid4rmC8QwjGLfVBxh7biRTTnMQYbrdwfTdjGKirpL5EP5zLVmzGzqHEs9ar2",
  "key17": "2q1nPSNmRByywRQRyyXJfT65vz7hWgr8NJVaVxbhiY8zBT6v6FwuQ7ory5HoeZey3QPzqPxSYLvbkRCr8Ht6tEvN",
  "key18": "3iwpCDWLGqu6EERm2SCMUghCuCdt85sthbB8Zn8W6ynForL7FgCAn8FCYDMo1gFASpouc8QjD7BjyuvUAe54KoES",
  "key19": "2j8XEhJotnuTDBMheT4oTiV3U3RF2mrYt9TWF1rYZH3N9mqaNCruUwU2LskpCAJyozEPKGanpFLy5BJzW6MXozev",
  "key20": "2PLxh78EMy6fMFqQhZb3v9xg2rRgoAjgHrfEWnhU7Rm2PdW1dQKncKuKRUFfxusqKRbGnpH5mvjELuuJJWutkvDD",
  "key21": "3y9ygsYXRvpxTfXJdXDqtkv8d6ATsoF7QqAiMFWLbLFiQHubEh3ZEyt5UyYcQUVDgwxKfnxBHTksnhH2b9DzDRHE",
  "key22": "4SCKZeDHmnS4wafeMNc8VB21R7Bt5h78wKhnjJB1zxD3yYozJpDKWGHZR9gHvk2y3pmsT5cHY97aQCgp99zE2gpR",
  "key23": "2wg2ZNTXKvNYNLMui1wrXKYY8bqMXTUCy5UpZHPmdzLcToRmezmTw2BgVyKtpy99eBqSFfjf1BEzLMoSNw766McX",
  "key24": "3u9KMqwRDfHXbrkAmGgouu31ecEGsdWb3gttnHfbi2gJJTPKtQRSJda79Xrub31X9UfnmT5cDxGdqgdcod9aj9bv",
  "key25": "FAwpNfaN7SjFcxWxvzdZpfkhzrokx2BYEvP8kNRLStB5J4dXZDvMhnTRzvcaxUSyNZzZsrRPcFt2yVjZjxxQztR",
  "key26": "3D3qu8LmwyQG7ZdoRRwGwUuaLiupWcHf3P7HU2FDaGgZuHywzzjrncEDPn6AGwXGc7ghvMsfgZdsGrFvWe3D7GQC",
  "key27": "6T9HttpUudTp9oNFZMSxNYjcZPLQcZHs54W48EoGasN82xjqi7GyXoBNgk6DGwLYomDQothcEMJDtfTMz3kitYa",
  "key28": "gUAWUpdBmZcKYkaSADcNgtg1NGkHq8g2sXuQ6rVN9PivFAp4MFC4wmY7hznCFzSWQqFFGu1H9nwBRk4QLCkQRnn",
  "key29": "4r1geZ5bLqgFEFTsjGMvysVtcBKoDNW15AtbkrXgCL1B9F1kcqK44nkmpZnDRmb7FdR2Dtn8s3AoWPAgUCeuTT2D",
  "key30": "3Qjemivshw3phfHmdG6ejHVhRjKyKMkXmct7kSmxTEuS8QtU2o4vSZHSRHTiGdbA2trjrBRXNKnesxbGLpL1gp2Y",
  "key31": "2LckgC8TQoDjUtUBbzbRVgdB1YP2g5XfTcTVPaXNjC1JAigcpaJAZamaZYaU7d13avJKrADZ94FUF4w2Enf8MYRS"
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
