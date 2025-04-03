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
    "2n2LHQ8DL2AW12zzp9zoXbFufSeTdLAaA4wRUqXak1ku1P7gBfZspzLxxy1X5DLafmu9Yza6tb57tQ4UDu3JWREd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KTfx4jYkHpaNbDczB7SuCmtSmQ6c2Mm7iWwQvikkx7dcPt15CNSmeWxJx67nSTCvgEpUkWt9fiGDdN6eF3Xsq6q",
  "key1": "3BEcntGjjTX2XDdFxEqgMhiseeQiQvT6xMcHQ6N1zMNmjQvUEqZpaapCsBMeNqcpboTYjykrtCci7t16VbrL6KAo",
  "key2": "4HifChtvzYToTX8NKskrdgKXGVTvTkj6T1N2Qp1Ah35GGvzu5oawHACsueAwxxiXoDrQwykFwoYVWgSKzjXqpzHe",
  "key3": "5HPT7i3Qq45e9XiWSJQ6EueiP6Vx6SeSDidEK56nocchYy8Hamrt5HuxjjgZW1Q1ZG2oPk8pER9MoZAYVfxUULog",
  "key4": "23UKUs7WqMTh1tPE2EQRHb2WGmHtbovipsrokCQwa4gcxhXypKeTUdeNCxqQmHGopz5m377vm2tBKHqPu6QqKaQY",
  "key5": "3y7TS9xCFUmNYWaQmYn7H3SYv3ZFwWF88ku9f4BFPZY43czJwJjH1MATog3amg1huiHDm6yYA1ZQ7MGMe3HpQRpk",
  "key6": "5VXHBhmLSx67oBtZ4Qmpes19TcnLHGWwMEJGAhDb5bc8755fyYM8wEwweVYw7t6hZZ1rNjq6bkwTwBV4Ph6unboG",
  "key7": "2VLDcvnkV7dszHUzMJdyTA499NwSPzsV1rjYcz6Zc18JYCHstcBtfjZbpjcA5o6iYM1VERFvoBF3ZsXqd6o1pG9z",
  "key8": "4pioTu8EsCdyuSstcGtSUjvif7nJj9ZEq1ut3S6HngcA6iVGAJHTJHwpnXstefLNLS3X1FnEEMzQh7iE1UyrgSb6",
  "key9": "3LtNxxn4FLwFNtneMV2p7bFpCti6qAqkbrecy2NHZLwtL6vZQBE9EHzFaeCE7JjJzTA2CPUTbqBywMNgwQSkwA7X",
  "key10": "4svR7itQTNUc9cTddem9LorfxDP6XSK57Y9itrmHUHxjHpH5wcxi9daXqzJkKd9ieaQEpEnYJwDzSTsEAnoQ5sX4",
  "key11": "HawkXgFbM4n8HJ8KJQDea8Hk6MBgDz8e7TfTEPUtWN9tMW8XCQhZkC9DvSjYcum6imFnMz1tmSkGw3Sh3MDoYJB",
  "key12": "4yHZQPw4DjnNPpXxueQc7tdLoFwHEACA8Gt2sNcyV4TYdZiiShTfN1t7qeEr7cTA43aJHedahucpgvVie83VkR6H",
  "key13": "38gjAMk2TNRumtNaLXW1fQ9rubYV6uecpsHMsXcxpQh9iP9okFyb9JPrbCGRWsvrWFRctUrVH5eRPVLFTw9rTqTJ",
  "key14": "2C2Vvrk5U9FTaeBWJxf1Jyk5nWDwWvHV46GCXpavqqRRE7nH9UH5hSShsFh9uCCMuCWH8WWS8NPKYC2twHtQGxaX",
  "key15": "3xJmru9tjMyzCZhmsRSTa9gcppWc9RWS4RWcipfjjr7V1XALdUd5GiEGqnECYuFG7v2wQdViL4XiCuepcVUxZe4Z",
  "key16": "Mcc8paqku9WQrt2QkXLSiHH5T9muQ5HDJ4ioC9okWsxVhQURB36NnH2FYjeW1efWMXVjE9QDMUT7ieBvSpo6mqM",
  "key17": "3PVwyqupLA29529r7yxQgEq3M4kDsS5Atby5uwsS9rvxBqFgLrr5yHNgjcaXsFLFn67apoXwNjDWj94zkaVs2SUY",
  "key18": "53opsPQP5hpvG748222PWLv5puVtozjhwkLPqfwq9JaUSJKRE1SmZkBf35dZqw5nYVRctxP9LRySYsyLqZRT68n2",
  "key19": "5gVxWbvSWCm5MRToGcCJ4CqT4wB7es9KYzouHgF4Qh6W2p8rDB5u1QCWKaapbxhJ2tEjDajXN6JWwnTWkrdkVvuV",
  "key20": "5jVENcfh3WALTANtBKJsuj7Ry32iuazzxkxyppDXz6y6tmptxqF22a6stirKHjoYLu6czR3oiryToLR2wPMSXXbD",
  "key21": "5fEz9rXUxL2K3mzNrQxnftYnzWtH34bYRbS1SA3TFjKgEw6RAnpDmKZP8V8WPrM2ZqZ8eLVk3VEKXi2beEtz1FWs",
  "key22": "ginjLnj8D9NqXmeW9Cteftz8T83CKCFYLyGPNzboYM95XA8MmLutU8uvM7ghsvZg1LHrRnX3pK2B2RiLpi8iRr9",
  "key23": "67qxKXPWrfsXr6ELBYq1hzBAmAHxochiRyE1sUJBPbRct8SVHkRQMGjb63EDU4UyCDAsC1q43kwuDUdbQdW66qx1",
  "key24": "rSN7ZL2ARTigihWJMdkZXXEGiZ9zSQo2i4F4tC94ZNaXn95e3nt4nUeM13YLMb7p9pV66uBMNSwYzC1ugAJeMBL",
  "key25": "fDxH5uyVPy337ZowXpzbmxrGLsSFXpzpfi648pFcQxtaNzgiQvAC8CmB6nLMVDCKZ1ApjQuif8w7nAVr27vA46X"
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
