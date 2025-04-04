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
    "3T29VgUn13GB1SiVi7mujGm33zMEHUsMpQmqaSJ8XDZMMyW17e3SiAPeZjXQxCSkbHBj6mShqfrDTQdNDiByXkbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d31U2KJBB5XZDFnTvLKwkxHCbzxgYiYtAgPLbe1jKEm9DvasDTbD3RbXPQqxuFvmSLXbLVuomDCaPnRCWyB1tsH",
  "key1": "5cUuGaCYyXQWDD1K8aKAfqxiVkKATb34DBPZeQXaZStJb625fmS4KFeWCynVjLhmRP6myfetrdced41twsY5wa15",
  "key2": "2kJrvutSFBBhbwTtXHC2U4Z4R4JDVgmk597J7uGiTmT55wnBEcZYAJWnVrWwKJGhz82xo4nrJ9LjzvcBkF2y3jCP",
  "key3": "3eKc5jDS87Dtw3zrvzs21AmddeeDPQfyGg3UBrL9ZC7TSJabCerGrhbcvz6QGzRaRj4TgagnZ1h32GvmzXnTvbNg",
  "key4": "28yH5MkcZLb48TEGghr7W2MURZQxnUjpbpDg7jtYy9YFRCvGD7JjJq4cXzJQfD8J2RjrV51XE7MQ1DdhnWWvjBs3",
  "key5": "3bG5CaiHyRDuH5XSSGmiJUgZXQqMMMcprwjycWDTeUV4tnvUD49EmFyxQBXFrC46SVDtsRsd8f9ufYXYeL8nMvWH",
  "key6": "2DTr8tFkypvCFVd3GrYdm6yMbo7iU5HHmcVcgN49hSzLewS8F64Y9atwoaBwK7yZMPebj4LBvmSEeCxCzLnw5tCc",
  "key7": "NeXeJQrRLo7q3DzmEQXpRb7KjrmB3WbYJJF7Myv7HvSKQ7NA9F37DH85NMiVg2UDP6zTjrmCMhr9AvoV1WrW8j7",
  "key8": "4RnkTHEXN8SAETfgQiyFyo2xWeU6opQABdPcJuXzmHf9VpNDoCxjTvLULzpE7RZdcu2LYh73H2Y5rYLMdHe9Ldyo",
  "key9": "422TaBWo137zuHoWVrLicqcPwScZp3gHu2veAr9RErXQQPsG1LL2dv1mjoNXnSst5Km1Gv47S1k2VSWZmR59pJ3k",
  "key10": "3BjBqapdEDi1nQo138sMxeMpx5o1FyydEchDrqN13JMFPRszVXXh9dSPkE1XHoX3xQd98dj7WHsTsCKo4N6q4LnN",
  "key11": "21CCVQY4DXoXBDrf9AN1KFgCuwTVx23kgAUdmeaHFZRo55NSDTkJHmVNeCVqVEo2eagAKzPFcanSrYHdYVry4RYc",
  "key12": "54N8HcpXfZskCfH9nWH9K9ybUpKwyfs8XKBousKZpYHVzbjbzJkfFtexpfGcgyatB92FzGZLdibSwZSqDFN7XTim",
  "key13": "4DYhgzKqUzqJHfsEmhQN6a3PcmR7fX7pdSqanXXii1bqNwcW7w6n5sAUoFS3XuCn7mLePt1qY9Fr1yhbTiGs3bjH",
  "key14": "2TUhTMKbeRPwh8KGm6ceFSTEz4S3y26Epxnh4adsMq39oE8ZB14WT8Ww6Y8LhP25ymbWTZk1cZFLVzH9Vo9hxZmi",
  "key15": "4pFjxoVMCixWQTxkCpQXcTSyUiSqcnMXqgEALbaKqfgQ6Nbfkiw19XKKWYCbG4pACMgmpbYfVCYcfg9UQ57WDdNs",
  "key16": "63ETGCyRNzDBJus77ha35TzLRWpzjuMzVuST6TPS2VisGyqfAVWcVxk5YrRf5FCHpCHP58owy9TqRyurE9UovmgT",
  "key17": "2341Z2XrS35FHqnkrToQBLJrD76PtFhMkdqyET26Zw2WCQ6bStbxhrexxw11pcZgUNYyQBhS6QthQa1xcdPWqn5Q",
  "key18": "2DG9Sy7pPwXM2WfNurHw1J7yTAHUWh5ZpwLUodbGnCshBaCF4AsL5F59x7XTbwr2pvsVHisbRqKfDp5TqNFiTJHB",
  "key19": "4CRKrmDA5f6Ku9PoQkvTtCaWow5jcoi33WTNc4qpJhPNEm3JdBgJgMtBwd4TGqcETFcgqUiJtZzbbWhZbnTiXriM",
  "key20": "4DhrKd9ezckrTTE9sLWJrgBSc9pEuFtgcdgPTQK5nWbcshosPiM3U8RmqQA8VFaw2k4iHAC47wyGVFeg36SZrLZZ",
  "key21": "5WwuDduVS6fqKrBbwKsXwSW479mh2kTo1HZFFp1KEe6mbkXaiQWzcNHPCChYGjCXxDHQFhyJBAXjp8im2FN4JYeA",
  "key22": "5ujDUhgc5prqQvmobh6J6Qirr8ndiKLdnfxZimuWg3N2NSnpDacKem6bQLqEDTCQpAbfdLvUggcqi77sobpaLiBm",
  "key23": "U3YNhzeVVmxd4jZVEhMhukLEEqjp1qoHwg3uq5VZjCQximG244vskRfJVT6HNcZ6MNeTtr8hSHe7xcon6N1HQGc",
  "key24": "MHEbsgERv4bJPB3DQk3jdH8pKhi3sMdCeU3VJHjL23cLb4DnFtqVh878VXxGE1Hvg5cqWPBgDJZmkqWBwsPWtk5"
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
