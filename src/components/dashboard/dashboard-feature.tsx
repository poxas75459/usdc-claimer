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
    "3RsxZ6aXz8aL3JcbVHmCQKUVXTkwGRnEk7s2cCHF7o8J8soLMDvfqgoVB5LusnBaqyaJCvDRUWNQELfMgbDMiVe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DiCjnktuDxvnjGMVKFLVXvLHit2hhLgByZCFSVtu1cG4VNfmzkD4jtUEw6pZPxxNdJm5uay1XpaoqsAfytqaxmX",
  "key1": "tYA5j94noJadFUizT3sN4QHySoy7kpPLot6VZhusxEuXcF8ZcfPshvNLLWRwJZWCan4KvSE72PT6EvLAbxMof28",
  "key2": "4YxNrsYuUzocKLJ9RDXXm9JMwBy5XY4axEejk8mtLA4PnmZwXqDBzqEpGSYR6gbkoZwNzwjqNb84c5PzNDt4hdCN",
  "key3": "34MaogVKnBPbSS61cZHgyueg9u4G7iuCJzGURqy6esnYNdE3s8b6HbCHM6uaBd8A3D4Qq6RGFyPBZRSPCCWXd3i3",
  "key4": "2gK3M9fWkQheG4MVN355n32mvBsCW1aLxQp4Y4LtNfUsXRpnt3n7V4QPs31zFYrUNSYqtkJfEJwwNDXnf4YF7EwS",
  "key5": "PkBfinjQnTX1NyNQDgNotobeneLCpUKRdmjEhmYD5PfA32X8P5hXKcmxsbQ3zqFPmDJL9e1YbEmdpSbCJfJBbva",
  "key6": "aqSBhWnDrmZHxXKZKPXtLYDpx79JCLqwttEjM4szB2bvnNnVax3Hx6C9geg7qvT1wCdRp9bQGo3LLSw4925dd9u",
  "key7": "7moySMK9mwngkffdysqfXKvqyW2BzxUMf8XysmBUo9B8UrMN27fuiCwQ3nufPefEYYp7SCnHJMcmEyvYySZEEuN",
  "key8": "5RSwN7nZEkEXs6jxkmuJL9n1KxGE3N9YhsN7YNMyibPNoxkfQzhLKFHVoWgGrt6SmH9cg2PaNzL21VBWRx9fW8E2",
  "key9": "9eicjG6A1DNcd3qV8UYNxuyLqVPEYiXmELYUj6BPjbxCwG71T2ACJKma3ywcu25qdx69b5qwqD2te76vfdAB47J",
  "key10": "3gQ4opR89DGDnTNQVdaynewCKbdzD1XqjiQEaJ6AoELw4TAiKeqNmo3yneKx1b7NJZZ5cFW2aDiuMH3tR3gpSBfo",
  "key11": "2KhNzch6p81tERT8F4cBu6u1hGA4rPBqkyURrEo7NqydbMP8CxidzkikvkFey7eu8AEPdo9YHFbYCMSossaiPt5k",
  "key12": "nyGN2ZKJEUVWGnkwuAJLv9QDxBEYKh98kRUVYbd9RLLCKaT55VhgvDQ5f9tsPFRpwcBNYatF23tpGCYrSB5wD3y",
  "key13": "4zBBdeYrJoyU7Ph98tQ7HJNbZDVLSDifiZkzjcBGJoFjedmEGf37BRtghc4P5Ruvx8XqB9ecJVMvQ14nJWsze7Kv",
  "key14": "4F4yfiqSNb9ve9Dn419Cj2Uh6ewfHrVv5zArkVJzQaUNf7MNof52hfgnvJeNujaPRoRVKbD3aUqSGRtT5gGDmLww",
  "key15": "2nNWUvRHDD6bZSPUrjctPbuxpDpAPkK1pjX7pjrmjnJ9G8VfgwqrhaijTLvyYcNBJCznC9n8eCKNLAGEFdgRxxBz",
  "key16": "4M8fezS7JbxpYuotsvuEhXXenRWQQg4oMcS87v7EbEJHPjZQTMi4Vo9b3aab5pCzh7DsGKJBGxFLCdyAfL3mN9hb",
  "key17": "2ydYGyJhmtJAwWdLYTEHgqvgcHc2c3biKYY6Wd7N28AZgpzAEF5iUom8XCFnBqR7NFwCBv1qjyKi5kpEzATBWurx",
  "key18": "2vz4VYmAQYQwimi1ogpZgg4gDk5ax2AHxzXZKtDei9pnik8o8CFAocYJ8NxV6i1Q6RPynwoS51NJwmTGj6bSD9iW",
  "key19": "5NaMCiTgAXF1iaW1HcBvKKMxxHSnJRgNPfRUL7KC1kJjeDwyXraEdywHzNjnfiStG8bBr7ZbF1VFQMZtfxoTLY3h",
  "key20": "4JDpsH7f1YW7MfDfXuRre7oFB1vUoTioAkVAHBnQzQDAAoZuMcxQkcimGWkPkJN2ed8TM3FqD43oZMRbhWWy5o6d",
  "key21": "2aS5mMXuVRg6vL6RgWXcKMK1bSyB2sNgwqV3nSyEK5bH1sZUZ6GZkSYbgvShPPHWCA8qFBopjVm4oodMySbfYeUc",
  "key22": "MnKeq5BbMgbcDJSC3BknuuVD3pZxNvpcqKKeSrwPxjoQJBbgvSkkQGU7BupvBALDU2AMHRXgWAkRrkWk7vTpWh9",
  "key23": "35cwyAEQ6UYdnFbAg8p4yrKNLo5CThUq4HuNqAELgkdXtN3MLYepfN9ZLt8KrqkVssKN2id4naNXVmpSdjkymXf",
  "key24": "2CX7YWPXtNRpJ4Yyq3iYgJmQxStbh4hkrEocPmQbjLX7HeSsBsBs6q2F4bdAPRLXLNf3FT3pvvwJ7TSFStZG9Ka7",
  "key25": "3Hjd2ajjqBnxz1RxfgkpuVWizZVvDGSLoAgT8aZ3iU3qH4FRVxH7haJ8vVkuZC2X1dmpRtp9VqamvKP41pzf6n2x"
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
