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
    "Qrv5fUqn4t1G7Eemz1N6MANDg6K1edAjDHSTGWVPSaKaqiKKqd4XASvbEn1FGHB5iWgypFZjkmBYE73KXDJoZo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DGfhF5pyfPneqKDfvmJoX2aqyPBRRuhEM3FCUcC1NviHFTiS5PpMeWF5eyTic6so3ABj44Sbj7rbYL77eGkbE1f",
  "key1": "gBW7jhwE6iMC4mnZooCVgHb8bTsFrfx2Zygf3m3iBU7g9KVcwb4bv3PTK22KBix6bhqDHyS6sAK7GFa6N5S7eZ1",
  "key2": "2XH1vLdMtJ2GGvWquE499e74czaMbRvKN7iXhdVrmteJP6RoxzBhsdYY9U2bEsHY1r9Ljn3DTF769xLJaoiiXzDb",
  "key3": "5Jhwm3nTDCVrDRMyHQYhh639pns8dbqrkWaGKo8eN2BqL8bx6Vu95KBr8HAoZ3gUmtR1fUu2wBJ1b6BP5RDirFBV",
  "key4": "FATQ6ffSMpqNoQkhCy2ESEE7WciCx6Um1PxFiszyezwztVu3AuQSKzTPhiNgCoov8JfbXwDGupkPPUenp3ryUA6",
  "key5": "3GxSpfpp8BoZAwB26i6N2aRtwuSiv8gvLHUHRukM7ovWp4HJ6BF8VhmvFnuZAJV8fb4WQwrJWhhsA2vJ5RRugc2Q",
  "key6": "4ZneUpvkfLpvMgBEKLhnNuqzK5jmCxgKqZw7jnsfDdHawNaa4Ng1WA3pQ4DD536uFqsLAoinK2XsSt4LRRfS7hon",
  "key7": "4CvtBJJrwkG6CuJx8fn5UowsBCVb6SuB6R7d5MS14nHnBakYtuivhyy7rjStNm4FLaae4jGgqu44Rf788uPtoyKQ",
  "key8": "2YDRzhKsCmoudJjry8hL3zR18BT7sd8bpSeiamkGmczy1mF7vLjgeDqgrwho3sbE3fsTNT4VCUvpipao4Fn2og4S",
  "key9": "3hod8T4z8Z2aLKyNFJXBJQAdcgqPehipBZhU4VrxsLs1QZddVmb2WS2TkjRRKpPoBGCs2rmsLJcxkCVNvE5r5Va1",
  "key10": "5CFg1uSDxeHEncvdkZSg4yLXYvUVYfuAJrpQHj3sW1QPscTT225BmKZ5hrLvshnK78xqWX4MNP1cDM3qneHXdY4P",
  "key11": "2dBAkFvM1tBMZAxhcT75E8TNm9fGDeUiMMAMKMYAg5LZhLXgKx3zBbUsqoiYcnxTiHTrVgT2THCbxjjmJso4J9fo",
  "key12": "5zSvKoGXMNxR9Esf4eU9Acbh6zhGTwGcexHyBLjj4XqWdZGs8j3qAcKUkfhP91PSGSVoRyJrfFjXypopSjfWFgj6",
  "key13": "K9btreodkQoXfo8KwQvUiqCyUVfzXbt8b5Pr91jqQR6Zdsi2x1DtaiEGeYYj9BAsxuLfV2BBZgqqFj33XJYS9pM",
  "key14": "RxbvUGf2LTk6raXztG7cU9W63wg7uNbFuXTU1Vs7ayumaSsuyfHtgNZ4YSDA4cp11atsuCz1Lm9S3LKxFZ8iR6M",
  "key15": "5NgqDDqc68U396YfLePzcBgubgWzyreVEPxUwFkdhr3EYGtYv9fEymh5a4v4HqWDQLJNtNpDCbHD44EzjF9v4kZH",
  "key16": "4nehYTRbSh8SpDryDVcqbbirbcevXycAsXn5XksspQ31zZ7vWxqmTeDAgYBBSwV8BvHAWMhUeDrvtZZ8BghVHKku",
  "key17": "NTMMkzFj5yzE1iFts6KQYt8K4rYUw54yZPn3RzzMxoEqwrV52gJNAMpfhhYEopMfXfknnBuHHGRFUxxfn159JVj",
  "key18": "RLopu6wfWkXsd6WRSW8qsoLRFHK77wtTD3erKhppQKAenPufP9qJyEy9bC7Qurda7xXWJkuBZURzgRMXHBynJgP",
  "key19": "2qRtvgLpRt1uxR6DgipoXjdg7Z7hpUyGFNhqVDBgHaw1sLfUv6kFFB1yc4jqk8aFj5JvU2jpTw8S1va8cZPnhYZ3",
  "key20": "3jc2PNynQ8TdeCq3sAwEyp5eZYLyqbzezz9MQcFuLUY5mMb9v35M9H4T6rtww1BiPM6DqrfFewU77RV5nPgKmBQG",
  "key21": "46uGYBaJRNAAXWr45W2YifRqibpECcYqyyUFNn5e7ArvA4crKJUadncpMxq74tPWy3m4ktHJPsGi45EMffeQya51",
  "key22": "5vzoDNPbJJVam2fmGJYjPKjUJgQUwMN21o1PzhzNAmdnsqmMXtpM7XvgVPFefuChNhHKKqPCgGSstEX151TUmyxj",
  "key23": "oM2BimWB9eGbgPCM2dZFH4AdEof1byywbWPLtBevDRNqWaX8c8JN1BVMuP7E34eydVksF1CK2eYaruHQT6fBJca",
  "key24": "28uRZf5Jjid7hqyVjBAFXeETDjkwHCycin8mwMGqXDYRa7ZxNt8AiU2kYRNNLcwPPgBMSK9Duu27LWP8ufg2Hgpj",
  "key25": "3dkPhfm4ZDe2aykB8BtQdSFJD6ZcVjzajJBL3LAr6BFaWwW7fhkdFiqPHNFmm7W2SrZLQDtzQ8DZQhZH4rAvLZ49"
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
