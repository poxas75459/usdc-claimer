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
    "cq5XoUDmHuiVbwxQ1AffxG4GK3Zkgnr3rraJQWZzkMhChASU1N16ro67udWkXxoAmoz4GvSg1bNKzGXrXKPEMQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8EnnpD6eg5un9GW8Ygk8tp4ThuPC9vyFyvf8y14khFQ6ytHtnKX19xQT4pHa1Ah9CLE25JaEbxMw2RyVhxZ6VzJ",
  "key1": "2TVQQsAvRm54tY48FPFb4CcG8LauLC1QwHezeZB4Mfbkv6VB5PPJpSs5ng2y8deP9DQSZmH7LzmPz22hydpQKX3S",
  "key2": "3eX5V5tjbEV1Ne9R1tv9mWCSd1puUDkagkbPmGVqDfq2MtCPUHNm4teF92aevNTYbMn5XpxtGNNSHK3HgS5FRxfF",
  "key3": "4wZeQrYsC4D2heVXPXWLmuxbELPHgEB8AvEAPafV1gUGA9vPWKWNmZyh8kGLwTBtYPJbY1u5jQhZdfm6Vi4mZ7yV",
  "key4": "5DXXKQPeTVJ2oLfego4meKmoBCXjGDqtSZH9UUHF2zkdKGxR3eHkhxc2AsmauyRVVmdAGCJVd558kostweVdYSC9",
  "key5": "24NWMhkvPWRxFWqKQZD1hi6x112tQDPkPGrP9J8y3o5LLtBi8cnW4oXWabobXsqujvsSm39L1NnCWV7S4xbb8ukC",
  "key6": "2rdnC9CCdQFh3BpfStF1tEKAzXJxiQh6eww5QqVE9FWe7GdKYBMMpPm884zcVv7w6GsPX7PjCvav7VuJ7xWApYrG",
  "key7": "3PNRhEQp8EZQp9ZTvudU3fREQovYpH9i6anZj4A5KwYLpx4ZS94QMc6S2G6tJxqJr7i8mwoLCHQtPDrnAa24FxQE",
  "key8": "2js8gyPBpWXzbifsrEf7qT3VXWB619DKDLS9ybwsc63TUr9PeTeTcMAeZ1EEPsuBZCJPpce3NbxvGg3WyJhKKm7p",
  "key9": "5oVE2z1tXeNCj374afeHHgz1NNoRTZjSMMpdb5jQnVvRsCAz2vQWvn94RGg2aD5NALwpLrn4iAQvi1EvPSKEvUhE",
  "key10": "2x852h6YQTrj75H8AhZbMRvNV3Qwihq592fJaC3vBTBRnuAbHDwMJ58mFutusypR15BVDFvHYM9sgtATf5dd8iUe",
  "key11": "5v7yyWmG26z8pTHF9Snza2NnvBFoRo8b97SupTLkoVoAGQZZmvWSvGrSjN79LpWSEyW4wEH73SaZzHCC2uLydaPh",
  "key12": "39tbVSuTQjdzZM5Tm85kPG6DTKwNQNYbStBj6YtJhjUXU6XRCTja9BZ81rik7cv8cZSLVRWAxxPpyBGxKMVgbCHE",
  "key13": "3SJuP3FnXw4NWR2jSMpjvdJVdEobCtD7eNGvjnSKBUkhdsDg6ADbPD9qtQRe1vAbsRxSo8JPV2oR7EyBroBeKmNx",
  "key14": "2mgAh8vYmAv9rrbcFYpHALLxZ7FZLdSwXVTQPvGh97VXsStpNZskRpX54KDfywhjaENAZpxsUyx7QYia8gyhqKbG",
  "key15": "Rn6JvazLeoUWpi8J2hdC7T7gcWnMXZpbRmUdvkTDyvg89KF1sMVTX2z59coKkE4guDBhmaeRVujh2gEhj1QsfJR",
  "key16": "3zPTRiEAidZjz3zU8Xmrixe5xa92NS2ZQeB7MYrAdCp8eWw4Uo7m5SAzMtK16L9TkytpE9keeL5uovD4Wsaqigkm",
  "key17": "z4XAAjsXuR5y4WmkGboSiuMqfLcsDs5BWfNtC7ubNF4b82d8ZRDEbYjsEBLTBvufpLxbb2C8uMV3FC7yVod4FwD",
  "key18": "EH5ok91w5i5FwGxkvV8rfc16fvviVT5E7oLqszpctCsBFqx6qb13rp6xerxhAX1K2wAYDyvoeWn7g1d5vuyC842",
  "key19": "28VUVrTzwsqW2KhzhPuK5C3FpsTKCZL6cga67NmFc1SNU7VVVPkFz5Z2cBosyhJXsDAgMwQfsS5w19A7TvdBuBxH",
  "key20": "C2TLoWZhboS9uw8ur1XWzGL2nBkJmDGxYWPuxZ2zRxTinZt44RvAdAQ8mmMcSrE4xUCAhvikcdKQWzLfXazwUfY",
  "key21": "Yxjq5kjZVbRWUR6ZU77PYdd5iu9YpMHmftv8eH4pFUc4YzCBvWyvU1544yV2h72n8FMABY9pW8sfdGxK8D3iozA",
  "key22": "4hZMr8aYGTscgkZrk6TeKUq7fukcwQnjJNoX9yiNffrRT6BPCu81TNi1YZtB7c5HrKPE6rtZwT3ksp6REiPybZMp",
  "key23": "2h2QqEQxYHqLfcfEvrzCDskZs4UYM9G2D7aXCN1FrqjuGF5sJjaW6TzXDgct6kiv1USYpP5vJoRmM3uQJkFkiqtK",
  "key24": "7qGGxqhBFSq7weMG8LQwzwKr6JixbGyDVzav8Y6tCgc3FZ2bWLHqyA4iAJ3LQNkkqXitxEWKRmtE8cAjuSng4aM",
  "key25": "2xp2bJdC7cSJ26Heg4fck5zvVGPrRE8vZr574PS2FkCngzV8qZCMvLNsCHMnJ8jjPivZsyFTG7zv2Swji8eArpp1",
  "key26": "3nf6E4yuqKbAhLFPSdnom9bWuHY6rHV6FxMfGoiwpzu6BVFhWGe9i9CETEAxRsNi3NuCa5a9Qt9ztQJ9bVYgsSBu",
  "key27": "287iDyuguJYfGyhb5WPV8nfkht3KLAfQS3hRYq2FMst2mohkzK3iFsLZ7b8di5YLWALGknW2ZsrdrwgnEaVxynup",
  "key28": "5EHhw8se21ocr3teFVzit4E1d2swvr1MTHkG6Zu3XxRvD7NGNEi9CJVdaaNezxZxWZ91zvABsrgZGjLSPVEvjWJ4"
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
