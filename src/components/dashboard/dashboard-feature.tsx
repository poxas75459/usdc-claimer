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
    "JTgPSzxfbVZz5qtFg79sCn7JfRtTEYD6u3TnPKDV3TCjhAojL16NVMNaMK7zJmprsc8F2pTRxCmLpevqkYuEdXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QoNSaedLQgDo2cRq9QGNBZTV3eP9vWTPYM1fpoqwqFPwPyiptL1EyJuDySbEpNZ7wD8dUqujofvdhsn7aZPv2BX",
  "key1": "2E5AZjxehHJYVr2bpC549vNEsqRTm52uV4pjy4Lne6uvDxcGJ6USy37287MXWs8MMSie1sPiHsT38eMox6TpH8Pq",
  "key2": "73cr5Cy2F37vkadGVAZ7sLuF1SsG1tfDt5oz4riaa7pXYcEsY53Kn7apnW3ep1VMNGXLmvmEQqHt8uVaduU72hK",
  "key3": "5YX79YTyK3JRPJcTkgBu66C59ankUKED1HZYuvTXsqbnSBKpJjUY3DBruX67iW2ebzocekGkKrzjkhnUt9XQvxYZ",
  "key4": "4PYnCcAarAzFoN89vfr5KpTkbychRojZdomHKcTmWnNaSNsri4oJV3f5jDUWsdZ9J7VFvATYsWa3vy8CXf5pK1R7",
  "key5": "4uFe91vJqSZnykmL1ZMZyYPzdwC6SAwmgGf4tRNPDgBX5bPDJTTk9PxNxvaDrNsRZFtuJzfbELvQwJQd5BgLSns4",
  "key6": "41BiyHNRQUMrVMiR4xbBk2HQe19ZVpjpDE2ajD1TVWMi5Bk1Xoy5xh11aWYyYJ4JHm69R8CSTPGbofXPDtZqKCjt",
  "key7": "5ow4RBnzrCNXDmMkHJH4UE9b3xxwKBsBwwLVtVKuPtns8iFcx8NF8B6wcXsnJMdhUAL6pMCxP3eaFEX96HCSUNzh",
  "key8": "5CQnKLxeuoz8gvfkiWNYS3kHiRH3GYD8Ng3dE93brCJ8rEtYNvtq9YwDb8foo89pv8rwgRvQLu3fdzc7MgFU4PCb",
  "key9": "3owXFM93tVexXikCYRRVCaotx2xfPQueBhEM4p69ELzRhQ1EByfcMp91b3fbwjooCJgkkJ2s3mXoZWRuaB63kCaa",
  "key10": "KvL18zZ2WW97ig5hVEoAtaGJXoEuxvskfsiPH475FveDUciNQVbqwmZ9nCApQVsyTUfKPUgNjhqZpszg5oCydts",
  "key11": "Gw3x1u7pooyzZQfK1jCV1LqVb4fuDFYgGNmMJwi9roGpQsReGGXNbNjWX66tNcvRzrGrcitBQ1siMtXSACseoCZ",
  "key12": "3fSzgYkbjw5GjrTdozSoGRr5HybFqJ4BsPkdpMLvCqChwMYqSuJ5b6DuUuMmqtB6VqpXzFpK7QUcAc6xg6xSFUCQ",
  "key13": "2681ViBCxanNvZ1ypJ2B9QtKJpQCrxeUdJoHvbxaGCPeunQ8z1qi4nhxeYTEBLP7entknQVXgcbdKYY9UzTRV51d",
  "key14": "3icaK5QBdwGs79Tx1Z3914TDBFt3AqHAyJnjpzJ6xJsgyGLcPVbQ1x2DomJb27EzXV6szb4BY1Y22djA7NgFW6Ck",
  "key15": "5kQU5UuJcqYiQXJNgt1T4WYoDSFLaDaKLzMNbiAVePsZ9Bqb93YwmjXghbqHWZ7LwrVQLSsxyzJjW89KtQPaV1wJ",
  "key16": "42GwsK2bNaMaFmqzKiMAVbvv8UKP2fHa6w7kUwYivw5b31cRiwZQduvVCR5MRVRb9FncTHD4fvY9X3jxhbpUSMzr",
  "key17": "54wkhsUqcEuSHdNjzJCtV9rsfBB7hWvGue7HcddTgUtPeu2GJVoPcPgw3GtEyVUVn1Yu7cJKzsyR5HTRRvd3Mqgf",
  "key18": "2goYRnTwbXmdKcsgffoQbG5kfVPwCjzKHEqyGy2KvcYXHrT83v92KPFiytjDnw5gsazJkXAb8KuExxhGiLuYARgN",
  "key19": "3LJrECxxAAnnqiLkGHxhshYb8Zc9oSSRSVx73wvGGdHow66evqwfSJHYVahvLwr8w5Apoa2ZjrPHiF1GkB2cRbtp",
  "key20": "3RjGPd1zRQLnjWnx5uRZ4h5cS3EkrYa3KNJiJATWhL6Vk5fctgpkVD4aefwYmpCnrEa5wx6eowknJ8AQNXvhmVwa",
  "key21": "341N6B1SBXtnvMBvCTrRza1urRnqjSv74oMS4jmqhUHNW6S4NiA3M7YLJJH7uXjhZgJSgUxZg4j7RmiyhbW6ot1Q",
  "key22": "qQWdwpirhqfRtukwFw6VJYP3Cm6wVkqPEf5Me5ruBZbMWHtGEAFGaRNUA6T1NuWwGjLRy3jcbjyLgJ4hErx4DTa",
  "key23": "5h5c2UaedR5T6wx6hfQrNGzTjJX7bxFWG5r25yGShWYoi3nR2yrvT3GJ2DqZRW6hcN4fUAgsoRskr6Hxd9WMxgQw",
  "key24": "46STYp6noXtXd481gwVEe5qv8W468y7468Jhk7CjZCZJsoEH3tWWK6EJSKJnjP3A3QQgoHtiReh4n13iATSK3mcn",
  "key25": "4B9uzvuU2b3gMNEUPi7yKwFgWMfLMMayLcXjJ56JcwB3Lz98Wf8pNzZjp1ygKDiiW9bXsQmJ8SC9uqRLY5HsuQkZ",
  "key26": "3coudzVcv2hDonxLqJfNKWpMZ7mAcCs5RM14zMe711e3tZfgdgXbspCByGNnkyP8pzRvDYkT5MbnPHRZ1QHEhgwb",
  "key27": "5f23ya4DDyV9ZUzWyPHix1wkDnRgS8TbDg83UKpvpKjnBtt562Wa3gvUcrxCqVhvWsA1Fg9Yz9ggzsyJepRpMd9",
  "key28": "3pHRKc5cws8JTjCwtfKexSpwa4HQj3NdZz4h8HQXAQAjYiNpLi5RPyLYbhcR5yrnXDQjFykANAuJxAV3kADsWFFX",
  "key29": "3ij8iK1LqxVEmCQUWhTJn4BcC7Tubdd8HyfpjmY6t7By9QdMXSTsYbbT9fWMKSqrVLiRxAySrDsTUyDTf9zesNzC",
  "key30": "3APXb2ykvgHKaayYhpsTRJcoYTS3VUhQvAE4LzfA9eygqX1JfmyqCK72wywfVTM5fefXxJ9Kh9aoWZzA7pWcWaJW",
  "key31": "2wf2SysBGEW5cFDVhht198vKBVNX6dSqpK3vZDveWJTCS5AAyBYgzCVUH26LTJhRZ1UQJjVsYzgFvPPpLoAoMvJz"
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
