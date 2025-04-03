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
    "3qN64WPXiAcfvQksaN4oYpPMo4bu3yUyeprGmaga2LfygQQXa2xsbZN4PGnCoS6FdCuXdUM4g6fDymeaekueLFAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f4UpczU9JEfk972Gt9AKGZUYV9ZBFSpAR7WGfujdFBeTGPYLsdUe5zxwxHEyWzymUUHD5vyhdd8p64B3ju6Nwg5",
  "key1": "4WwtQLGtTfFf5bUu2PPWVUN4fTToonpCgomT3yU4fx1jFhxtng9tNQcLekBQgWivNyf8R5MxDwzSsjFczp5UwQyF",
  "key2": "nVpjeHJW1APk6VTqz4qFa1pAMDZCr7PEk2w72UUtCRGuZ7NU4ymTmWgoGRTQpQEkCwQc26VGJ6MbT2LD3xQSzif",
  "key3": "2FLYLnprVhD6UMRtnaUuGc6R4Fyqf4kvoSaBamUurPTugxSUxDjCnqieaeJGakqoaYG1fU4BU9rugWasC5NfeGaB",
  "key4": "VXbKz2TQKCUUHeEBFaJdiPhqQXHkda1et2YTCe2ZZ194okJWaHQgRcJgoU14EWhVuxKMUH9XFrSbaRKGFdkq8pk",
  "key5": "5zGh6SnAfBAeb8NUWsKuyvoB6PgLT4egkS6nPaeNQDWXJkC1wwVw9gCbU9WbmBf2sa2nrPefo8CzCV3tAFK5zFwC",
  "key6": "5UHJQj18fvkHXDTncacCdihSirdmhrajG8YQ4i6zZhLXc9HcsPCcQqhg695VhvUCfWnPuBCCwKZ4ZzxVt9gARQts",
  "key7": "JNARKrUJqke1S73r8VGwgpxiYyR2L1GcQwWcTwYkcPoQn3DULsTeDTo5yK1BhfqkHxCByANxNG58mMh6PTYB1Nt",
  "key8": "5Da5t7xWFH7DKx2Zk4VBpYN5fr1WHgwwDPz81ZjeFaSBbGrS7uznKr5GhxY69uHJYhz3go2Cir41Cr5boqT83Wtg",
  "key9": "3aeTvRqGJwsCxRBs8vfwUBkbs5sy7s3Q3XgAz4vySzG5pHGoFgwARumQiz8yHkfwKVyqYJq8kzbBBeaZ7nNjJSXN",
  "key10": "39jKagERq5dEF8vSJPyUVduRX3V5tp6Y8VuZ6dP4Mo49CimVac6ngjDsZAivnv9953mBvEHjnyh4qyghiaGDdR1p",
  "key11": "3PHEfK6kbYZrVbqauZ6jzZ1NGukbG2kLqSgVEJf2m8i3kCtNykXrjBbkqy1HJdvU9nQG6p2RtvwGCsHhMC5mh89j",
  "key12": "2RoJrmVWiHinzpcZoY11G5uxYPSuNoPdQWgVW5xPz9NbErA8kz3EUb8C314nNkKj2gB3FmyDXy6NFXX8WWukdNde",
  "key13": "3q79Emk65D5Gt5f6j6nGBPmoAn7bHmkBEeRyrW9rgu4LAvmAaSx7h4DPDXf3nCrx9KNDtZGUKVwqKh2AkV6mufVB",
  "key14": "33XZn5bzjwVTFrxUKfwL9Ywf3rS3wkWsLdVHpevdi4ynqusRbwCrcpXdj5S3QJAGnPKqtYuhLpB32d1PrHkDi1qr",
  "key15": "48T1fUokXaW1caLX9PKpoM8BUCDirmGNMG71ADd76jUYhvSkDp4qepnCuz2v6o3Fh3dQwJjyB3LpqdcZohgc7dPA",
  "key16": "4qAzw8gdeovRhQmHaHwBGfbxeWcLNzRwQFLep1dbEu25iiCckut4Mc1FZqgjXeSAC84kd2goncaZ3bwwoazH3oV",
  "key17": "5GCR44naUDKLjvymhKx8DceM7GenKZ6ZfjeJQkxHaNQV6s8kW5XuR9AWmoXTGdtTV1mG7zHjkzK9ZGFabRmqgYjJ",
  "key18": "5ByoSHdRMwSyLy3YnojVodhr9c4rWGvGLqWvRFtmrZ2SeoesNVz4YgYnD1JMYLhvkerJz49hc54SLRekqr2EbPZL",
  "key19": "Q9jK6fUoxrGrdieHUorBtUZ5ETFx4FU6mrTqEsvwYxYR2xbkfCFWvXPyuaFZCa9wpeFS18no3u73PAHKcjJaMHu",
  "key20": "Cw7fCq33RHUopYYFc9agV2eHho1CSiyzPG8RoMTL1HYgMHoypZuBZ3zYGPAgNDtpxumUuzf2ULkBRYn213HjBGE",
  "key21": "5hYtuw8sm7Denn3xZ6EkQiTmSmQ4X22BVns8gc7eYibTVbTyEYMsMvchMgvwJpKU9YAVuEYwmXWLi2iiuXBRDRUU",
  "key22": "4LyXFuueaZBwCKXFppqHsiNdidwrUeZdffawGtnJk61hQjj7MHaicZoy2cCJhvKCyvxmb5ptryj2eCT7rP71ysQu",
  "key23": "PEWb6qSpDAmRbwK4ybXVhye488hmnNBBZ6KKJcLgccZmYqGe9bLqUeFZh3T6goyU4bBPxP64SJEEeTjkubhaK6N",
  "key24": "5oTHJ63xtFc8o6Y8YEirnm97u6o5qfmx7HAodu2MpZRSNgGsE3y1esbwKMy5TiKJNaxrJ4nZc7R8oiHoy5Yd7vpW",
  "key25": "2iz5o4HexibEwzrzKMePewkGy7LkxkUxYU99KL9ob4KifqKsUmH8YTb2YosoKK6h4i1PqXyUbRUknXaq1qx74pKz",
  "key26": "2oExwGdz2LGLNK56aCoJKEQZfTA3ZMg4Vd3PZqKSp4an9VC3wQNwaeq3VVwx7PnQs2fxQ6YsTxMw96wSpQf6Ai1Y"
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
