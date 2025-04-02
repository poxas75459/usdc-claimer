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
    "3oZD17mMh5LKQfjQQoT28XhSTPQGg4dzAp5LMxj7KZE4xEt1RmkJ8LHfobBrcxLW1uhCwsyAqeNWTVTtWehkCcap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MjtVGVK4QFLasAbXAgqxaXqRVmZUPCQg8xjJpQGQ7tcj9KBx2kpBKSyd5cpbyFAtTcdXF1byFyHNL1fGCv4UkcX",
  "key1": "2a7kbkYNVn4EQpjNhZupbehkKpYjoA3a7nB3NAAtfQYnD7v7p2bqjYzkmGR3wsktTiBAcbm2Mgo2dtUtxN4wt7cD",
  "key2": "4vfYzMxXWTAgfRvbeDB4dh33fhQEXdv6tVnS7xWCcJiSLSkqW1XqNBMKTcmuq44UoZCsQW3wztGa46NtynCBjDWv",
  "key3": "3resspLRRK3ZSkJb7btXu4nSBovpu7m14oLFpajYddrg6UvCs3oyu8wQjrhAJsEV1SnMn7TNj5zxUr8TZLApgGmJ",
  "key4": "5ZzHbkt1u9EhiqN5ppnPARJHs5os3uXNqi4Tg1Mhf3AnmwhmUbnjUDghJDUKrSDNxjhsudga9KTJpSEHT6NnnuQm",
  "key5": "45uBiYFiYxUGWRdNEYmm5HGp8BWw7RBjNgDviH2oEDd2ALbMYSV9DSRtQ24D4xFjZmxouiUD5AUYpoqmSGN23kJo",
  "key6": "3mmeGQ7JCJx1ornoyUV4xy7SHjVw5FbKbk2ggEAUvaAAUa9mw14cFd4JXRdA6vHQHF1wmPZmbbePYhaP574d2zku",
  "key7": "4QzSUDZmKWGCXBnThRUKcG827eEgxdNWsrZsNiLcEyQo6GY3L1wqwAuUDjCQNDoH7rLDg33uqZPMU84hXSb97coD",
  "key8": "rsj7drc6nAMrF2zeGcNGweM19Afe9w7RRrDUuFTUbGTCMKGiQD1feg6PskEd67wBkftexG61THhR43QcDnLzjGY",
  "key9": "2NpTmmEVtsfnf4c26dTWxdM21gj3Qa67Kob7hsEsUaS7qrQEDksw2Uc6qDqzWqTLnNYMmvw7SAHBhLm559MKFpGK",
  "key10": "2GoFeLaVxdTsyQCwMtSg4MPdiLKgbm8X8VnffhGzVx5SprqC37Pzu8yBp41HGHZ4jXtiyTP8Zc6bBTNN9rDyPhnM",
  "key11": "3v43Rem59yf3MvWjZS5ic4xFcfR4iLx5kQ8GbSfgRLFFd4E4JXufaVz6QFtTHM2JBhw83UcKLgWnD7PtkCvzLgZM",
  "key12": "4Ev6vZwn2DYKJQ7L4qak1izCKpDFHiNCQe6zHfustoSMdktagMdhQ1mwbQXhFsfpQ3o9j19jS9pvWqH77mw8qzzC",
  "key13": "5pfRsW251i2zACTM5u1LUD6L6qKcL8HL8U5x3uU4GVGjfEDwSwHwRTMPqaaLtDko9suaApvQ2rrw5NZ4YCKWs6si",
  "key14": "ShxUaM9QQjYF7ZcaaKrT8T32zNgSUeGCXfb6UBsFJaPnFCaRPkyW3pBKr5qU5YUFcbNSYRkzHKAotyiSwDs2qJg",
  "key15": "2GmejGrtUFAowpCHs2zzEyprqLaCEqCXA6juHJRBNQmC5dyEUENcaegVMBRtYhzKf94abhtse6gPwxt1PR1okhgw",
  "key16": "5J43vmBKmiaTxA7AuTfGcSyUL9rihxFQZ9RdsyuxR5ebQSkkRQEYFpRx5BPWidHpx4VrcoCoAfEQa2iAvtZzLrY7",
  "key17": "3nf6oMuxGrWJNdrcFtCaWEUJPpssbx32r6k72xFxa5ufsDJyjmXRqvuWeUsrjXXeXSqcM6tQgtDyKrP28vuyfwyW",
  "key18": "EMqJGEAfB73hAx2XvTP9cxZSmH9EbwrvXGDYg7SqCJ3UBvkR3JJ9qufHXStNXLW6MjaKyb3LgwGmN9jXqy5Xcsv",
  "key19": "2PSEYasntRiJXAoB5HszE2wiJGgkGtd2rmtxtNNzQ2EAJ97vegwkLzeCkcN4dMee9jKHz2M25y4uqzqLhzne5vg2",
  "key20": "39RxishvLfTMe4se8CLwvGP9ZLsdZDCegrdZ4e5pzGZFzxbVjh2gQg1LLJihkoW8L2TqBHRmaGehzaQsbRfNWhNy",
  "key21": "5uCYjm6baaF4NLRwmEWZCLedEZiYBpurrqLRRZL9U1eQKjYXrCkZM5yJbjtSQbB15Kv5Z98v5hebViKA76V5CoEH",
  "key22": "4h56rSkhqcE8V9JvHUETYbvKVMUae312gbjXcr31CZT8DLG6Ka1VYTgX828xu97t3JdEc1F97bNdLvmP8i7qbtBv",
  "key23": "2c73LmYDkFZdEei27e6nKYcaxtUd1MHTesvhysEgbjEp7k39KJPvE6gFRR2uYXjpjm83sSDAHTXawc7w5b7CPGEn",
  "key24": "2s3oT5EAv3HvSNRP2ViJDQK3qGTovWwvox2ncdMYSHBYdqjFyVdc9g8EX71oGebDarS1pADcFJC5pB8d8BAbiFck",
  "key25": "2yMYW2UfrVogxUfUauofLNuhM21TFpktJtM3v1aQxxd4x1z8YJYc84pydyKFktWgiofv4JoKu3HeFvi9UomdBaWD",
  "key26": "2ZdsinFXvgaYzdzkjAdNH9oqy6wdBKRiG1HHd5BP4GCfr9uLPSMxZwYtrvQDeX4Rym5xxDv2tEk5wzCRyyAhV5nh",
  "key27": "2Gih1GyemjtR4sAmTGMZWbh7BzzHJm9gGxhbvz8L5gbLAqfApmgJ9ARMyb8wUNXXZDwQQi8Cea9aoz45WQcharQu",
  "key28": "4RaqxSkAcmgoW29EwoBJBT7CaBc6HhJKwKnUiannDF4pC51wx3JWMMkpjfVmnaD32PJRcjQwuhJJGTsbzYRAETDt"
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
