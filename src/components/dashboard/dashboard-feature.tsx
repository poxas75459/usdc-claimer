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
    "SbaUDasK2mQTgzf9cThWMvM8M1xhP1jGrzDj9XVmwg8jjMCLFHUGxbR7uX4W7u4bPrs5jEw6rqHQW1TorQyZqxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RjT98ypD9GiyCFBwQyytZYCKLh7VS5ThyaaCpDSZRQsi7exKFc44ca28hWzZrrLVTQkeE9cVhv61WkVBxFpydsd",
  "key1": "P9twF8svukntjFwUeY8utvhsRcH35GBRbktQuFsAZhUAecxNUxi6Ty58XVVQTMXG9Nj2cpKLp5vnvufBKqP3xJv",
  "key2": "3AwCkQjmzGcvgkCwCgdj71USAwPifxJTqWtwU5EigWZDgUGwZoRJHD8R4K3W5Z5MZr3kUW4inig74uafrzZLJmNn",
  "key3": "4sqgVTx2WjFjuvAJ4JTQWUZ1cjBkdvsncZrhdniGXox7QdByUpB6sJNBkxZFYvwBzzHVNrrvVS6P2VMXacWLiWT4",
  "key4": "4FneZt7QHMtNSWCD17wCQijhBDu1rH1MjVZLs2RLwYfB48eFJFYHUexDfQvkNbF2eYMHRWMy2wZMTveHjPjfCcaP",
  "key5": "3Ud4QswXnBhEptvkgUjuzGrhQyiXHg4uPwsRe4N5eywTRePRdFkcKU9m2Tdu3PdgNj5JYDWLa2ynBPmtm7a32dBd",
  "key6": "53PKADmWmRXFe9gs2EmxoQb3FASr2cpTPZUmDdcEhXRsqEPwzbjfYRXScatSbzccAsv1nz5iNBv3xZ3GoB9tKmbH",
  "key7": "2mMkpBPUeiNuyV5FTyP2V7YaJvtaFJNCb2sZdHxJioUx6mBfbhGi7B8NZp1c1d94G7mPgnPmaRBtwXSiR1QqVXQD",
  "key8": "tmpw2DtHEfaP7VZ13RWWW2YKSXzbBKynreDJKc96Ub9ArgFJ4qGFnjmAx9JKGYZpafcxxHNsCVEmi6LWKiEqERS",
  "key9": "QUJCMsPbTrNDxvtRDVbGd2odRspu2uks83WfKmACxmnijJ78X8jJinZmbgNhJ6Bigbo5uFnHiaiT66dBh9Eorez",
  "key10": "utAcJmEompRLkP3qK9nZjpYov9Rj11Xj3rSsesvQT9qbfpHFSYzZi58NdNMg9cyFz644PbfyGxHFfj7vEE4Gq1n",
  "key11": "2TtQZj1GNyMG3kfwK9LZJ8ainS7X846ivHboXsS6fem8EAxJ76TrYXSuSgq2oVLp3quJn9pr2DhHk4scM3QsGjLb",
  "key12": "nZH7Vsf4ZbEJdn7RDsPyUT6hcaU8NidXnx13U4vNueaNsvoDBp5oTmYtSqm9EpsYuodMWNqKb2Ya8dQ52o51Hz3",
  "key13": "23uv8JkMzAP8SkxGQ9SnbwTzUDD3QhRShGdwfszjLhdzDQAYGcBRHFj3o2Lfv4cZPMjutjmdRQqUDJHTj1m2vkrP",
  "key14": "4XHok8GrztU3K1SXwUVD4K2S1X44bcCBT33XGVc4kP3nxwuebbbGdKVY4YtUJuBShdT9Tzu5gQ6AkuTEgGy8xg7z",
  "key15": "3fi6D8XGZDZGo4reABRQnodbV6ezj7FduuFqEoVJubiuoEh4BVHyu1peviMERGXwQsxDosJdvgdRRHC3c2ZgtNEZ",
  "key16": "3KvmyH9kCAM6XSUqSj2Me9wpsb8vBSSbCmSAdBRdg3zdg9D7YQQc925MrW7xdKe58QumYHWCNNeAM3whDHrE63c8",
  "key17": "3VbwMdieNETbG54zNFU29UDEC18YwePfUhktPW4unrBp6LWLLm4y95UQEyBafiXTdQqFV6WpyT8UX1Hs8GVSBWWT",
  "key18": "3hobNR6itdMLKDyDZDChtr9FYqUnrqj2Z4QeUdruio1G4J4fzXMaN5hGxN4QQP3MS9nQGf7pNgSzqxzBBi1TFauk",
  "key19": "39zVFVXpNibiB4euG1xNLna4JvVeMkPX45RzWTmZ4ZPKtzh4XPjg3nJBrs26KPAcJcXuEhAcyafJxcbWyReGU1dD",
  "key20": "A9cfLqBjPaDUyW7bAZaFKb7gS29ALfMa2VsEJSboNsvDhJHLyZFtT8zRoyBqFGaErEzRCNtj5rsWcDpMcomHgC5",
  "key21": "zKUNjoPrqVzAfv71phPZSFJWqjCnuWt5Y33Lu5D2pPeZYnUafRc1Ct76ZMjkPxK4TFTJBBV6TfxEzgoGkJWMAve",
  "key22": "3M2Th67idTsAKhqdE5pehFqGVgiSJrcM8597TkRZqGPZLhzDFQUAs1VU2eyYm3n8Er5GvY5eDEZ488C5VsQ3MGmc",
  "key23": "3r9YWr8M2Sp68eRjR9nTtXFCEYahvT8hKQbFqa5fHbGvty4jz6amAau58ay3GRiwVr8fhNMEh6t6vR5Z5a3785rV",
  "key24": "4HnYhzkhVvcqdUXTsGSBe3acHzyUfi2f9jKjjSUhgdzC42Rg8ZsMuUcNwpgwNg3Jmv8SNurysFtUHGuCRwcJ4xDR",
  "key25": "5J75HiAZKiT3QpiAhHoY9BJkiZJD2SeSBfseAps3VRXswzArbNvE3ES7ajA4wVqZppnW28EpKEcZnsQTbVFooSp5",
  "key26": "28BfJTq59dKKPaEaKxxBELArTWtcjN93Ykk5JGmZD7P37Mop6UUq3wyv9Dzf9cDKTb6qJkiyFBkNi5XiQvVXLdf1",
  "key27": "5xDE8xFDhCrF98AVzkS9yz7AeX6c6hbyFf3ou7bqRmWShQoUMaMfRBJQoYmKiFY5PUsZhjadENPouv9kSeJrxRe1",
  "key28": "P4gKJJtCD7cVkUwT3x3QkdaFJ8nZ5S3BBTo6mDXVXEZxNrW8EcSBEPWNPKwn8RBisyFSnPM2pwQnsqNUPHTVo37",
  "key29": "3JyWMfyVq2HnEZ5QgHRYKvoniXg1f31dfAM7zfVEksEDV39mMQdPDgSbS4QwfAW5pSVnzh93kMhPiVSBqWcErTrw"
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
