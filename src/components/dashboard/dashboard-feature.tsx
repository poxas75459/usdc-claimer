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
    "549H4khGmro87YEtjJphXBftk2XmfH7JAE72B3AbCX7xBu53nCnYhsRUBcS1jTrnwpcDfH2c8DRzvK2i2HE51LZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4poaWXLuC338KBfEAVek3ifgVMDFihgAnTqU8FYQC253utgZzP8Psoo64CRzCXh6HSEtiupSgqbScgTCpru42UUQ",
  "key1": "5vWDc465uzyJixE93abWGyujaNMBjYqyHHzBZkCURvVKjsVZx6ZgARbjZsdio7HjLP6qxAJfJwi8X8XkBq1LANAL",
  "key2": "VPXuG3rqNWUdpGw6At4N2JbZH2htNDKLbtkggEGexSgx9FYMLZ7whHkDkFeaT2yLjyuMaU4CtwULCqUwLcJ7eZX",
  "key3": "3adJToJkYaPBXXyg3SMxNijyt7i9DQEqvyWoAMUjbdNHiyHeWwiwbMPp5rfmSt6iRR9qvX5QvhSXBVinbUFvWjS6",
  "key4": "CvjXx46CJ29PSq251ALMD3HEDh9Ptr1MFHV3aQB15YHenA67sqZ7cXYN7X3cnaZtapg9GMztqqgEnLzGQ28x4kW",
  "key5": "EChaKYoNo6yS4Yo4yYdNaWenzxiZxY6vB7X3iTpmRnLKYCywwp7Nghdm3rjG4RVQL2qzBYSNL5pumhSfRTVB239",
  "key6": "tLgGuYRNRwHtAZSZT8t1P2qGVNJgczr33MCvT9sZxxAv3dnXZT67P5f4uUJm7mN6Z6t9Gy18iQD8fC1vVba8ZcX",
  "key7": "3XrUCZe3exRAVpWnx2V2zzGbn9ZLhSuCcnPc9XcjJzBrqQV7G732qFxh1HLk1VK9aUPPfpjmo8zRcXjRDagXq6wh",
  "key8": "5PbeajhtFGTqUAVVeqUNSGozthXStppfHmbc4MYcNzVXBL6gUFdiAbB6nsFwty37J2BCWKAcxokGV2LytTV817aF",
  "key9": "4TUzbYR5hYTwNBLKPLkDG3uYd3SWuteNL9B1mktszRwB4cDx7XELnJK7WxtqpWRCXdNU9gCRB3sLEg7pQXaMp8Uv",
  "key10": "5tb94C97xTYadmcif9nMKFegdYcZmfWP5rS3hbSFnRYzViD3oHttWXU3dQTsBu2Lg2rakF4K8g6sXBodyh1PPHZ",
  "key11": "5Sd4EnfxLdQ71EMd9coANhQKWXNpAMQAEKpFVSWjL9VYSACad5xgwLU4qz4Xz6q9BafnnHugH28MYowrZmTuKXsn",
  "key12": "4HntbP8srA5zcjWEBBVdH9uhocTVrGs6fWvUGJGsd3UFe75Rtjub7KPJd9777qU2RtxJBsopvXC2sJC7LbKMmdg9",
  "key13": "4EiWP9bteS45s9ipEgrJ19dHadUvDTitvfX2NDrdzk3kz1ojahhLXX3yeJmYmhGXSdffzse7jWytkBAgmG1zvnTx",
  "key14": "Ghq9X7uqDVboAoSP5CvN42znHpXcLmswmRFcP9a9fs1M3LSH6pproTsEvh9NtHV1tBD71hCH4nj4QjXWzy21UNK",
  "key15": "Bf1Pq1q37bbCGde5LNAXYUYTFQ52NaP3dkW9FJRo1qeu3o249oqwsWaTtQM4gdraqq9MmLTnGNSdwpyTMLrRr2P",
  "key16": "4bKA9ujKmnyhGycJMtgL8PcDkvBqP3WTKmheHmbPpeSJcUTQKnPScv6q5JoGd88EhguV68gWTfWqMEqN3qevVacQ",
  "key17": "5FKJnxkxM8pyWF33xRhmseYKyVbMUjZAvCP3o8G39vPHg3PbjTYDphedQqBioVZeqLn6nSAjYh5YrcFTaTQw9xuy",
  "key18": "4E1BPEhpF8j9QejYtvvchYy8XNnGZ4dEBt5xDBThoKJTBMEY816YSfbWYHRUkbtWFZ8hebxLYQdLUSYhEdYs9Q5D",
  "key19": "5hoUAEVcrFFgxrry52h5R6rtbMRcmyLWCzTa74xjEVoP3o5bvX6AdfJJxFg4m15CVBqTRnC6aRimiXYvZr8NcAFu",
  "key20": "nbaPnLmRZW44zGj77gps4xQ9zSYGWSyonXpooAFvxXevpuAVa6Sp8oBQfXV8vGtQ5wJ5Drr1Xsq5oQTnpgzo5Rv",
  "key21": "3679PbqwHTTf8gSPSs7oLCcs7uuYe77x3P4f85Q2oGPGPNtazt8G9xKvfckBggT5VkuhbFckF6iqP81sx5xxPvXv",
  "key22": "2qjYUcbKaKK66VocY7bUaEnA1fBxscA4F2oHFyUTRujupvWSs4weXj2yiDnBMUwhRDPb4bWPAEWWxjCmK7uTV5Mm",
  "key23": "2bx4qxRofY15SfbVKa8bhsBNGjpV3uAxfxRhW5bvrV2ezZ1YwueanX7wwivauHUBJ2Gg6dGFsm5U6RY7NbknLyzM",
  "key24": "21kh1rxRKztRinwxXeJnGptq2cr1Bgvy9AaWMARiQiQc2uCKk3tJ3KjfWnX9yiPDSJGVKLJNWMpQp2vPbw83bqoc",
  "key25": "125zmab7erP9jYvbopefsXSsDKPJLuoPq2AUMTm73bHQmSVJDekvx4Gf3DmtYdeeQCozTMcYqFsEUJQ9xNdk6Kwx",
  "key26": "2NKEFWgbf2heHZYmMg3QY7FK1XPumwVykpKmD2eEo85JiZ9iEseGysr4LuozNhV2fKypo9ZJ4QeZsm12CEgFxPkE",
  "key27": "4hkg6qfHRMatcGisD1hAHVUArt43V5DyX3rvcYkjFJktPibtn5ePUZ5G6yqqBnwD2ktMVYrnmWWyVkhj5ds8k5X1",
  "key28": "KfbUXD8abf9HtCZscCHfRn8WGx3RvJB5dP4ojxJjigWQEADVqEbJRpXZjCBCJhQTtqWPzDS166w12dTVTfK9S27"
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
