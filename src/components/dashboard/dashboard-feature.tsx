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
    "5mNiH7RWHjgMtf8frkVaHYckUywEEBbp5GbUFcJouvhsEmVrhwr34Ma5ezm2awUQ3Nha1pbfhFQRPTYNsTAQMkEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PFxkiBkncfTcgRw2p6iuT6VzHYo2zmku67jpSFaD27DcN5en1JNVnYPH4Yx7es9HSF4k3hX7tNenubDXmXj5xe2",
  "key1": "3hR11uBmqZbYdJkvHkPmC171cAqG2c7LQ32tuFAFfX9LcbhsMkz4CSzXPwUHvNJUBCKnjdKw2wcwoVcSkGewdeYP",
  "key2": "3QsR4nSW3Zr3Yoc5VVtkCoTWtmCknRtcdKYE9KXu8AYiczM7Thpofq6neEANuipQpLbTtjdQibTF4LQ92jxytrXq",
  "key3": "6brLJ3yUoExHYL8Lt4hspnoDBdGAvHju86VgxXRwgKCuy6K6fQZaY6QS1VF86VcoHg9hkxGVT9xNzYgNbZmmEWx",
  "key4": "55hTgwDCkp8xioRdh57siHWog3zkH3su9uPUZKzsTST84CKFA533pfx4w7iMUhviNPqRYjkxtgdjLj4g8xrv1arA",
  "key5": "EwvhGd9BQLZhSg7wgnpcg7RVpUEQNUpjKdpTMbCLMQfDP4Q7swddAAwya6gx2az7fDo5yMszFATpskJRkPgMzg2",
  "key6": "2Gvws1xacLpATzxPAh2huehK2ZrHzFfhSUYfcyXtcU1n6KD74GfGqeWbG5ACAdbYeyeDv8atKV71Gwtm5rN6Ppmg",
  "key7": "AXNH1Q514otkDKouaoY9Bv2Z9C2MGVWp4zGQTenVEx1G9Q47uU4cWjwiQAeBnyvDwKssaXffKznesZgWXg2Sd7T",
  "key8": "iveScZu2FNPHxweFDe5hRC4x6b7NK2V3mmx5kfYvv8cY8t3MU4Dv61jaFKo793RQ2jbWtHNbmk2WnQVZ1wG592C",
  "key9": "2EKhAZDPa34FnnBcUdEf9muj54MPttqfTmtjZoriK4mP4VH5tV2JEsBzmBNnKtpET3j44sxZuw2HLHrm4qKqkeh",
  "key10": "4C81bUipPJgVeJi6gQmvnKtqW5UdLQQdjYAL5DzzdmLk2vNDe8xJJzJxtt4ny6LozRLh7gwzedMb7nMT5iBuhfxF",
  "key11": "5pwU7RVHoSnsATziqcau2PbRXPhdEpC1Z8KxdKvDaEzo3K7WSdf86nYuNndPb1Los8RHYJVr98C9tuCwCznvppFq",
  "key12": "3w7WqDUUUtA2k57kXffNGeH4cT3Sa3unFitnRshyTP6NcYwQwbGg1U1Eykh1MnNfv9ZJjcq7fmBmtLd9nu2oeYE6",
  "key13": "3VQFggGWc4A8UcL4HeB3UjUUGuZL6CgWyPV26uEg3jScDP55vmeiwrX8rQqZBKyNfpXWTivMcF8BNdHmTfSNiDkV",
  "key14": "24HdjTbvqshBwHoRJnd8F18aNibGR8CymcmDTvKAXaShB8kHyBNbgxgmt91N8GCe5z77MzmApEg6uZPMbYLjDbtK",
  "key15": "4CJ4CJ4RsmG4KSzm53RBNDUJJx3ZPAjoRy3rWecb9RPUf3hBNoXCJR5ZcnD6ogMW4PfpqjtnfiE83eKcGSMKTmzj",
  "key16": "3kSkCkrD3iG9tBhtZPZrvxNtTuizc9ACVXT6NaaP9ptXJqLrxQSBsYYfcC2KVoSQQpfdf3ab2rXzQJx1dAhLrizt",
  "key17": "3VhTSvoE2q93UABgJAWrMkUCnuKAZitPFHWsHwr3WjiszxiwWbKXpLDHtQLmtNbjSKmZbQRAnxxZF4shgaC9aL8d",
  "key18": "5heXAsUnfbDXgCnWyfNFaPuNEVX6XoCwAhB1vES1kjfxnQYk2T7GUoXFt6gwyVKhM38DiLwtFys8izJkKGgpVuDt",
  "key19": "4w2VEDtdpe5qHkb84CnVW2NPkgPfqv393MWg7BzgkyWSQeoyvNB3anhSXHgof4Pdmfqc8TKW4SRMRWmCJKNo5ufd",
  "key20": "yTob9MQoB7h6fnn7W2h8vc7ce4fBtF4bk3qZDae1qptedAgQ2KH8AZyCRRgLazFQuQ56QXH7gzsqzRD9MFAsPRa",
  "key21": "5i8M8D79FASxUT3F8tXT4k9fNgWifE5LzbkPoRLTWtTirWVVDAiLKYyHbyAVjDimiw9qvGh9aa3uPA2s45HvpYzq",
  "key22": "5vREFmfjW9kNQ1jiUc6DxRGvoLKLaaZBN4hLQvJtVXKTo6X7FNtkVaAwuKUMWddVocE7jEZ2QvHPdQnXW3evQYQm",
  "key23": "619MgWSfAoqHJkirpQwqapu3TT7u3aEmXUymghgbHM1UukEWREE9Vm2zWFYmK9iquXhzWjNpzhxUHBZjQwGLh2dD",
  "key24": "4Z5P33AXHqUE3tntA3rvS9qPVsZ5oBgdyCsSMoZDgdTTaDGPcy6ox4c1w5d3fRYywQDmdgKxkWZMFSSZMBiPUifh",
  "key25": "3yWycwLMVy4JXUw62mTdmQ3U3Vnp7kLsDEc2GmiFzeGgaRc3Cu7rURQo9FjKRFAB6L8FZ5on4g212RUyxwsPUjyw",
  "key26": "11Eg2aiVLus3dnZbDxCAcMn7DJMRf8urj6niFkH5euVHGumD5ZdXrh1KMPaZutSQwUvHkr5X6FpisHEAMVay73f"
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
