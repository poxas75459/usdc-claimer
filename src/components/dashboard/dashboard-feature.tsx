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
    "4n7xaiJNUbmpF53C9UGFfio3oAesU8cbSWGffUyT3DHojNnFdgnDThxXS6HkFxPcJMh6EzB6e6WT64d38MZN32qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h17nC9DCtvGmdu86p9TaMpzq1h1aG7QKpTpTtFUATVi8EiZwSaWeLqmoT8akBeXwnqbjnATNZjESdqYuxDcbL87",
  "key1": "2Jv4eh2BKrUG3U3mo1zCPy2GjMyCJoNzsy7QzV3mdnaLu4KNXuhLeFSd1RthteUGuD6AaZy7XDx5WizssKSoQWi4",
  "key2": "2sBjyKT2sHm26JtxHrgzkWjZakoMd6GzxiH9CaZAak41mf5yAvvDTr9bzXyYmNfCukxUV1fNqGAmP6xSa1Zuwrj7",
  "key3": "3WvVwxXhac7bL8uTsZARKVPaWcw7jRLrJDcLLu9adrr88jt2DdtU1oKyJ7cTXeHeMdFUe52oeQVzuvAF1CDcsejn",
  "key4": "1TFkvWCtD65h5ScYbUowrHx79N1HXUDsFiqoeS74svKkKrt8hEas7abBhjHArhy3vynrB7nHQKLMtVTz8M1dWL3",
  "key5": "5ueAGsrHwozXG1vEQihM84aFso4XGCZZQuMVd3hVXHwpSZfLzKgVPjUjyAqKVCyoZk5caTu7Lv367YmR2wqPXbAa",
  "key6": "2Lc64yqjLHbAScGAiYTivdY5YZFT1xbeSfkL2DDH5dMGjfFn8e9MLT425JNyuNcgsR19AJ1LfX8DSSDvrRQLKzCb",
  "key7": "2m8VnRtweKJtqiNZuVwJQnDaQNEPYx6aUc7QtAZ9Bs1qzns72KHkE3ZwVvu1nuZM8n5c9aF1qymyfGci1taTMeyz",
  "key8": "3eUXmHMhhumBPF9g6kChiT9LPfP6zxbYjwGCYK5WyfjgMkhcUW1VPBXMfU77FQYQGEvVRAy8zUndGByuBR2mUtjD",
  "key9": "65TbdQpcpyJow33xjqpQzBasfRQgpqM7URzkzRsrvMsYK9VgX456uCTrvdcTrmZTq22HAD2SPxa28UvXyVKu1nGb",
  "key10": "2Ypne2c7MDitZsPEunCJBunXahogpLvPfm5ZM1STFxGuXopPBtPvNumRVqL8REWPS9Kx44TqYRuZWAWN5rNxzRuC",
  "key11": "5PacLgVZxUskMarbfxhstQ1RiKwnF52MEnYLN13ZGrcNzEhUZigEqXVt7MnH9nefM3ZC2ddKwqTdX2GDNRp5TigG",
  "key12": "57ioU9xDKmuTPEMdK177z7uAM2dXHD5RJnuDzhxMwoXy2MkdoAc8gGyAmBbGeAAcThLYDGnt67Urdh1pQsxL9xgU",
  "key13": "51EmxeYoMN4NSC1Lpv4TpiVm23Cg8Jv6m5cQHYJJRsSgCgXWx3AaFEEgDsYeTGNMsWggobREPjfkF5oFRLdTErZm",
  "key14": "2iRV7wA7qGM8CY7A2SCn2aGirdUoxJtwEMAUm4d7g6in5V5tm2yZBpHa6b7wzqv1oXUHtMkphkwVvou8nhxVAG2r",
  "key15": "Emsb9FQKLcEp4q6VTcaLxps6wfbkZFdcpEshST1ZToC5bfZ464eYBjDqwKViCtFYArsT1fYQuTKapUaZnqmp95r",
  "key16": "38tp4LKwqECPfKsLR39hBTsVu1AR6DnpM8SpJNz3mAPy1XzXoXfwm6SKWiPRyX5vrhcsizQdhiJJdbD41AqdXcK1",
  "key17": "4CHXX76do6EeGjPWiNyKcWvfrXi496uK74VzcWtBE4qW8HagbfZyrPTSjr5LRToDTVWU24kFBfRyg2mBbkL5kFwA",
  "key18": "3juWDiGJsipSTmwPEson4ZBWJN8a8urRySQM2onW3smHP523UMwUNtGiKhYNqwR9L5uuJmcapjqc1oep4WYVNBBu",
  "key19": "2NESNYkgx8X8A7oopzuz6pXy9RzfyNsv2j4Yj3paWPNyeCV7YyQVqi3U9cac8meTYnrFCo7BrccNjNUsZMk2npi",
  "key20": "2bncQxhKvaTLs2SwBVSbF3JevDxbB1PA8sy3VCt9vC9u2PNHUism6kj56ZK9ioabxR4jPkvdKSormSyLMdYnfMN7",
  "key21": "fZEhySTovGQRmbCMuVDRvJg7eS7pBKk8thJWDjvhVVMdiUaD5BuJXFS3dyRFiWiJ7ubs7xAzLZdoZNfVrSSiAzn",
  "key22": "66srKYXnU9VGJ4Gms4DhcUjQGUXqyrHQzSP9VWAtSthYqF3SdrfcuYQ3gsBrYt1ZpGvMm8mJJJAEorDLsqf8WTaj",
  "key23": "M3ncdWV8AKA4yfcMmMfY2qxoMN6xpS2cZdCjfBB9fWCQthxGzxXd2n6tsd1FG3LLR2wbz5m6anGYzxkD83kqRPb",
  "key24": "4sqTxD3rANzrWEPM7keSAsmtgMmMVDw1qr5JQvNV9iJX23RRqEMKKSsU4BT9aZUdr5Zazzxz3Zz36kMi9ack6y2f",
  "key25": "261xZC6L8xHn4srJk4Sb5aLxXoawsdzBPEzzMuWrrq8RbSdJUTXvkC8M5RpZAvqH4rSPrHQVKtSqwD5Q88R6w7WE"
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
