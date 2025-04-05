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
    "4t7cDrHC5GWhtrvVjGWRCZzcqMhViBxSasrrAA1AjHGuXpGXc2bkbws4N1navR2Et4UFfegxBuVJ71tMvcoLGbEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oyTZ5TLjrmJGn7iBQ2FnBXKVsWUcJDSj7LDJL8sZetKmSQvt2SyD4TjqUBPnN2gZWaLDNr5ZbqWs7svw9XQQK3E",
  "key1": "35sYz5m5FfDuYo6T8f6NGUSQvjKCSoCNXC9UpWiaWEHbwpkGRjy31UFiu8WHcGz4WEUHub3AgAciQu26jEt2mqqt",
  "key2": "2NV4uwqeFKK8PZNcpqzBZxoRsLsMfn18fAdELYhPHSE6EgVSSHBnr9MBeC3vYhVSQTf6WKgFJn9JBh8R1VmSr1pW",
  "key3": "5Tdzmnda1fHEcE9bwecQU5eQRRoLgTLQvqhzbH7JUbiXGeyX2PMeWoucaWsYFHqf7wGWzSQ51YwK2vbbNPiFHtoz",
  "key4": "622iXvVXvt4q7Csfeeh7oL3j1aEkKJpw9iyqQqEpTfDzZs2zB231QffEAwecgEELEVun5fYXyRZLZQFnEXTHJsAP",
  "key5": "2wyPef1hXdJKiEy8p3J9VrrmLJKzMcurnCt2wyg1XrSGUeqUVMipZwDKmCt7W4xPv1x8k7Py9b5WxpcjDL3E3rqC",
  "key6": "95QZqHibu3bdWkrzFaDfcePbfKzYGsu2JHFHtgMpuhTEAcM9vmj3F9BXNo6xEB4SjY7KgipkV6mTAA8EdEujgh2",
  "key7": "3AXZbvKb2iu7SmRpnt57eekHEfbqkDj3WsZJRepnnKqPzVmzSQriULt6zvj4AUfaApp8uafVX9K3WCJb7owKtEjq",
  "key8": "NWbRXYsGmkTbYLmdxPX9i2WdwsF8x2G5pTGppdXj1fUMjEV13HP9TEP2BHLn6tzPYLWJz5Aya6wU2iPHvaAHSDX",
  "key9": "4eT4oXor36LBLG8ia96FaoNAbrzHyoxFS4bZNZZmqwBYcGvRAHf5Lvc19wxR5VEoE8DT6XoPPzWN9XbnwRZixWDY",
  "key10": "4iFsFa7StHi8yebHDL3suN3dQdXGYhN9VUx3o6TwyDnRZpUpvfYyChb3jczzxeY7Cu5K5Aqg5E3zT7gsXDmtvo91",
  "key11": "5ABqwthyKRfTeHXBgMWosFynYjoB1Virn5MR8JgRSm8iDBAjDeEBaoVHtMLMA7SeDBZAUqFXCmux266kaSRcD9JE",
  "key12": "4DEXdt6F3NLQ5EjWEkdnxKKxujuWBSfDei2nhzmLXKPk9j3kL9PKsBkFuUeuw9DBz2MrwJJHmxa2hnzsJVdTit4Y",
  "key13": "eLcCwAioKZVdSdxux6RrccDRacov4NskQcsV1vN8ECQTtGvqckRqVu5sTFV6LZvDuuft44z9BXc1W7Xafa1RZyU",
  "key14": "5XqcgVzN8dTWDTzjnPeLVnLLBYZRzWb3oUz2bCbh48mLHUbkWazZ8LEAoZ9hn4G6RmgCazmPksg5vRuV8qTE4x6",
  "key15": "484tfq82txKiUk8fmvba8wLUrf4yu6B5je8PaCa8RRNgokPrqxNN7UBwLxBxSfgTvWEzFvSxLBNexETKa1fn3XRx",
  "key16": "2kndjAP9R7zSmpFqkxuHkJafZSs7nEYWifrGob9WVcVk6zynqCPAfgCFQDACvv8CS8QMiUhsuTwCBXGYmCYnfedK",
  "key17": "4L82emB92dD8s71DrnW5zPAAuMhWpgvgwxufBvuw5TyjsdFmmpQTrzWGb6oS5RmQKsLLomKjM5cehRrnWVKseKS5",
  "key18": "4k2sbfoS8cYHm863z4ypmiwPdsn15Hd29nE6sgmxKcPdGJGT54eyj7yg4416vXWymwEEWeboaeqCnE8QeJoZk6KZ",
  "key19": "29t7uS8etn5zquRAzpgAnbUm7rnqFY1ML8YF9TsKMNY1WKtG42kdr8815Vq16G6zq5i1zX43HkoR8CBxp6c7iu88",
  "key20": "24YUoMcXjnDZpaKCQqBr38MbmAtetYcxLDh28fBZ3kYLQjoGHKA519G3Ypn56PkzEMpq6nUqhbHmPeTWQLAxmucX",
  "key21": "doLfToYdY5nd2bqne2LjocHFgtVxLnRCayk6G1wG7FnA5sFhHSsMyzYwnzBAKfeALpc3G6M2Qkacv9wRAmT7GLW",
  "key22": "5ykS3ZozW2bjcNSqhCN3pedh1dJvomPHcucnbc7AqccWrJwvLryMXMGsgNiJDeeAtQ6Pyiiic5SgUfiueutV9oce",
  "key23": "5tahagXAT4WbZkHNSMwfnuPXs4bBvzxdk8RSeH2Y6LhR7AmekmM3drL7z7DE2g2a8sAGNQtB8ymcuUz9yprJCSgf",
  "key24": "bZLLDoydgsmURkQK6Tz7DmwWJABvzyPjCBU6uNrhzqg65qYaqXEm1wvcXWT1UZHRhp9bhUMRucSBwNgXGW7Yzyu",
  "key25": "3nZ5pzFa5fd89YMJxSpyxKcuzNcWb63rqXCwSnCmJ27MT3WekJzpqYvtadVMy6fnuexQJAsvDNBmGysJNPxFbZP7",
  "key26": "2sKPNkTAv8NX1w9mDpJ7KAYL2dCvH2jo6oLpdovCM7erJ6pXkajJzSKpWtbXvZ7gDZFvGf8oRDWodHgE6NX3XoGb",
  "key27": "4ihqBQb7d8ygWdHEBfmiQjsCU8pQSfW6QeAonndUL6ry677CSymdUaAtD3CorRuZtQdexoidnNzR9JF68vJoZDLG",
  "key28": "2wBd1U3GFUGnftAawBQv9FSRMaXUnqdhuMYsbDjNgLSPU98s9LSQDCmbztq7vZMqAMsQipkwW4EtqmL63MBX67Lz"
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
