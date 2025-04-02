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
    "5caEUnY44ouDJuZTmJwHjwtkJWvD6ch6DU4MjhP11AXxYWyjTrdsDjbS6d4mwpkbbqe6VWr4ivfhhQmRVqNsvZxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W2qtVj6jtTSxcz1iR2H1dTqCCPTgRgcWoT3xaFMgvpd7QRmLMhzkHwvZQAmtAi7Z7KjnpbqxkWrQAmKL9m9iejn",
  "key1": "3YcFh2MkedQtAswhGs2isncPWCHTL2F62bCypa8fAxJiNiPhzSJX39a85gmBq73N9Ti3Tdhh11xJiU3mRdJNQbvb",
  "key2": "2f9HCPDpQaFM7pwE6yYtr9XnD7ah2xkWQG4jwbSFGH1xzkHhXCcWJrfcVw4AQgGyDRyTuBEywF726o29Y1sH5TFk",
  "key3": "5goLEb394QQqmwSgPvGzpaZ8ui6A73uBFXKTXoBXo8m2RKW2DNmY8Yosw9uYduEyKaj32KneeoBkKaeAP8s7iLt2",
  "key4": "2757Gdsfy3f8sX8tRJV4zVYo7XBvpciHSy9H2zcts2KSTYFgDtTaLKdXRMbPYtBfrDsxhKTCrZArEgCEK3rTK6tb",
  "key5": "2Qmjtpm9ZFq4zmmr8GPwnrCmPp4aDePuCd6Kh3RbpTYXHNTURoe6E9bGmrG1CgjmLKACnxpQ9rLAM4JLj5r52xTx",
  "key6": "LRnSVtTcaVv6vkT2sspseTYM1K8GQfp9yCdZ3K23b6z2Ds2RbnwPBxiRJuGk5GF1Czq7gE5pQHrRK423vXHAScn",
  "key7": "4JwtxTLzph2eAaFPz9bee1SAfjZpbirwHhMqW9QXH5uJUDXVHY8RKTBbucuEvsBArtYm5RjDWfzhFH1azyTX4YTX",
  "key8": "5LJCUEf3qk4gts3iJfmAKgPSBeeXhVsqZRhH5789GhdtiiEKCXA7mAn19bVETvPHomim9VRTQSEf2cddsZYKzgZ7",
  "key9": "51tdP9KPdEEHktysnBL32bqgv6N86odpQQFTEzFqJfqZvzXKB7VL3FyXKKn19EzumFC7FFTdRVxC29Dwe2q9xsKo",
  "key10": "5kQSoaMstdA9cpdqzzV7pWmb1HvjE3s5qKDKBfjGi9wpKYvcMxDJ5GJnEGbrhsh9uChwYqKuB9ceN7t8NTUhco9X",
  "key11": "2xtpRevKqYr1BpEmY2VvooA7B4PcF4Pa2xCxTw7WwREScCrvbErQLuSwrgQvqJDbS4r8ZCJBDKoVZcR7usmnmea1",
  "key12": "3jf7PL8Ztw6ziJEt9BpVL88WrbZHDJSGr5xZibY14sEQNFZCP25qGHqRbn7U4N4pex1JZHPsuZDws72WnrcG1Zad",
  "key13": "3i85bw3RfevMsSs8xjkLBwz734EDEQ1fFKKNMGoXBk6n3DErPuEh8hv8ipsLadFtmEaE2RxrgDLJfsx9utcfhxk9",
  "key14": "NEvTo7jTxtZ2RQ11wasf2mgZ3JLJ9tLfCnJePFfPKP3anpxCVGPXnLftjA1CacdgY5mfHtf46a9SaCXB6jJfUbY",
  "key15": "9HratfZo8sCK7LsfgYbpukkyTEpCFBFozSnQnRYkfq7Nf7ML6zqmBpeyvobAftQLmGaCtS43AfzdeC3HLuSyQuw",
  "key16": "5k42oAxRunWBpEr8qQZmrXwxmVDz2BAC2YV454yERNjyx8oS2QqMTiHR4bW5rqRCKMmpXYfsPmM2bxgEZfLujHmA",
  "key17": "66dyGvTq6aXMYD7PXeMQM1eu9PD6cLr7Zp8PuqfcZGoeVru13NMR1C9Gcwe312icpNR3jjz7bAxQBztii2yi47aG",
  "key18": "5djg82HhT517sUJ9sicrmNWyCpn83cPySXBHj666ThspFdbtthcHcLqhyHRVv3bAdtyJx7f3CjG7wNQetEjiotRm",
  "key19": "9GwPW3BQs2oaBCt42ZY9zDce1qUqBzqU65to8TAjxuPN3PmCVpJVz319HdLhKSCzW8UrnTGQ73z2jkeiMoVmUVw",
  "key20": "281Eitc8vw7GGGys8mdR7NTzUyj4urG4rLF5kK9gwbpjREt7ggM328NpeyL34gqvBncfXfiYbRdtrDigFdiR1mAi",
  "key21": "35F4RP3JoYWsR85im5VsiMwo8cufNbeUP3xtVBAUTB8cgCQgdYibupr2zvSkrB2rWXeRZuQy4AGAnq6CZDZsyqt9",
  "key22": "anRnsVnpd7UCwkA7y5Hq9zx1Frw7GNHdA6v9wbZ8RXATrVtNmw6rYGDuCzJMeLUA3RdxhJVtgN6yLUArvaU3pSE",
  "key23": "5ykLzYuKaZNynHGA472f7tAW6ijeXxT9rWCNpebNKwnBr82tPa2cG4Gy3F626W1hpg6YBGYyrX5kVHgLaop7VQuP",
  "key24": "3JkhRz6ddzDonLYkzBhLFjD84dZEwHmydo5v6miDmjmKzcFfeU2ZvKzezddpLzM1N1o3rbXdDgzt3pZBvkQnJsgD",
  "key25": "2r1JiHttZDV2Q95z8ns3QjXUxsHYKn5g5Rfq3hiS1civPwrqjmcCixhwvJVRckSGWmLNtMh1DtbCt8BdGMpnocUw",
  "key26": "2uLoUrsgDxnM5mNFsg245i6j7BHSMWgep1vLE1ATnmDtMt6UjvxULsEL9KeYbnN2sViGfgR6QeorzpXMxZzCpdZi",
  "key27": "5RMvmGyRuLnEcddkVT73eb6cCj5puM1rWZTM2ckJrwoFhJd17S9cRTnwPq7DgJuxPwSSKcHVFUn8Ntijs47K7PFk",
  "key28": "4bMf2TGxEnEWS1PXrsHZG7z7dwYY1fQqb4mi8DUescayoWSDex9SDCFjheQfyi9WF2na7BAB7gLGsDydzaz7wyew",
  "key29": "qzT5ZESwKEopXkReVmvFcNndD8f1QzqoP3kuuXMkTF7t7iVAfX1U9TZh4JaAXCqYDZBWxSmFwyoZDJfjkFHihJY",
  "key30": "4hPJHCZ2jNh4fYmbG3L2gayU2ZWrNDzsTk7GKcTXkuFBCLQ6enURyQz12RmMZbebi9fRCdqWmqS1f3nK5bE4457U",
  "key31": "3eoTA64sQDTB69gqRkJxACk4n3B5mMYgFWBThKNqNHeENoViu1bKeobrsufhcsutFkmKNZg8oyuheo5HkrcnAsug",
  "key32": "2ii2986ieV7GdMAwGF996CNJUsEBg9dAFDqcSpfFdCjejtsqSZMxxa83XWswt4P2VWAjREoqFvCJfcUBASm3Ck3Y"
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
