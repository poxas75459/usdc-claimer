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
    "5UkQAQVfXRedBHgEDaw8nmnkVFXK72UA4Hh412Toy7GZtrRzTwr5JdqXSbP1tu1qo9fiTxhowo4aUJDd2WmUL4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hMsR5Kcq8ehSF1iVg7PQGA8rZrHJm9o4i3JzMVuTx8UK8AJ8s1bQea6gP8qYYrKXYBKFqJ9QvnDyTVEJJKgJ9ww",
  "key1": "2P4MMFtM2otQLMYey1HrcsxtwTSx2TcevapuE7EJF5rKXGxbcGadMW1cX6D4wPLjAZvrZpjSDoECzDGWm5AYyVhL",
  "key2": "55KAqf7FVoZCKYADz1TkHebbufoqREddfCMtjSZ7w4Q38Znizv8qCdDJba3qMa7H4zL3q1G69nAvpEqosXDiBBXZ",
  "key3": "3NJoAEboip4EUvF6jz1brPMXtu5ZBaZoW8Df4EatG5oFRbY3P2QaFEKhu3CUsBfouJNusGE7Sn2Pb5dUsQvNcW8H",
  "key4": "3VJDVi2amsT6tiLzE7ZDbSqgVUpdE3cfHwzatphjPmEcnnSRibr7VZt5V4PtENNEGNtg3qX1L7wHnWK9bQS1EZgu",
  "key5": "5bhQxo3C92kQvvtz7da3CFwtWrpY9Xmzk9BgeEXYkMqERQmQrfKSyFAB4FuQKfXgRWrXKMngodn6Gzu6BDdELSXU",
  "key6": "53y6oFsP2rrgr4bkEZEbnu7L3rRC2W7dBW7pfJwrnYkdt3dmkNuLi59fWQnHXJStWag5hmP1gA8wBFtXUFZYe91g",
  "key7": "58An1jzYiQURWZ6Lo2Ecd9bwCwifEtEi6SSPbY1W7eBwm4Brx55LTUgWa7a1AifJFLej2FSXKkoJzCJRr9Y2N3Xp",
  "key8": "5F6c6EjR6tqQWvH82Z2bUaRJfBknefD5SAzfcPwJPRzRg6UPXHB2hy749L3H4u3X1qDYUUK3AG1k8DEV6nxvLwLQ",
  "key9": "9UQK3e6RqfTDTHhDyiv5fPdipEUEuXZao5jmDeQVFZ3uLY96bobt4rqfdpHhAzb2jDSiubwucTkJqjAXBEaFxvS",
  "key10": "3vZuNRMmwqFamiBTGiFezZWiEmsQms5Uz4Xi5C9m14f6biXfZSbeWioxDifamYAYKa722LmP8N71NuobzrvMsHHB",
  "key11": "31mbAgboBYMekapgxYefgQDTCaQrwB4wLr3zzy2fE4LPEikpCuRgGHqeDN7Gou3yg6sj7j1iFzmaqChSyQVgcuWy",
  "key12": "2muByYK9w8Hc6PnTfebhBu64HF7NZietHSPETxXq9iTw2tekpiSMFBa46d5ynB61WmnbtBodBKsrRGPRxAktdF28",
  "key13": "3CLi8jB5KZdk7RniW2rGAGJoGFB3KcQgtKZJcEheQnQWrwV2NuJdYCax1oUKYNS2TD9zXXUFZCYMrjn4qgAs7mUz",
  "key14": "5gNHHbdWhshfYwFkYWyx8QieUzzU9qTDgkBykmqZSL4EShggghGQREw8JASDi8FjrAedUFKNzLdNQnzweQ9L8u6N",
  "key15": "5YizHKDkQb6219X9wDHy26XoULcUGLdhVMrUHk9FYR37wjwHysDbst6LfR98SAJfMvqidvSqoTtrUBMM4Fe4rnHs",
  "key16": "2btwV2LbezCiqDpqtjA22hZJ9tYu6N7BwnKFnLsMca8ZFAwRcqPjJMgGCHhazL19HZwz1cRgBQFJbvU8wcF7hemA",
  "key17": "2KJBhBFem4eZE6zo2VN7WaRqkXoc74ASr5kHFHxo4LD1TjbyTvTVGNkQjSJw3mgXRZzj6HAg3F1VL48cAPsVj9KZ",
  "key18": "rLMrWcAWAf5EfrUM5LVqtTMehn7Qp1GaDLveGuPmxQhXPkmNiCWsCWaovGn544aYwQPNxuofyhEtM48FBMn6kcb",
  "key19": "2ejVYmKCigxGqiqK8cVwYecWQrxd1jeSaFbj1f56oJ69NAJc4hJuVAdnNWULpz5nwpwxXCDXrCTaDv6qfhy5rjFZ",
  "key20": "5XhMbK8qMuQFFU7TfKywxuAcE4zkD2S8xjMPt77cKB78wrMgqEeA2EBSXZMphpQek3EDRo8YcY9cCrqNBgL6mBZv",
  "key21": "32SBk7YhZNWWKj2fdS55ot3UarZYTFmnUJBuAm3yKPaUga6k2GNuCGjNTCZopdgwwxCAtsySwzrxuXrSEHAb8Rof",
  "key22": "5EJDPro5sSd9u1792cSZKU74WP8sLDZguFmcQzZbpQRpXrXwWBMhF1MiVfeTdzQPBfC98GvLKNyD186CLby9bDPF",
  "key23": "65id1XK7BRX5WZ9a2tNyftV45GgxUqDjdoBcJKSQh5AVQTcRfJCuaAC8xRJKHpcLwhMUe3bPkpX7ReMxJex3sieb",
  "key24": "2jU7ciZkdaKXEdvQakAEMdCATv1vFFfwTvVXnpq82Uq9rjpmJ95fje7VFAat9jsKx259KzeQ8xefm1xMcNL4kHp2"
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
