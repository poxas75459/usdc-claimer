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
    "Vf6X1xiq1hgw5Mpzht41s568kh7afyYH2BsftGAdcHCgShuyZuzvvNp54aMiMEeSMvTyuAMq4zXYLXFxTpS8fp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QvQzonX2xRSxEHMShWUUBgfGXPddPeVUWgG2u97vF8dhPHPYfAMsqaMNEFPLdxQRnzvTJ3Ufx18qnW87og2jkzD",
  "key1": "3t8hjhAEprUBLZ3dDsDCBb8zLH71piSKzuq823wjNtRUfvbVAGfd1oWqk2tPENC3dAqwZWNVA15xk8ZToJqBL5w3",
  "key2": "5Pj3vaNUwqjUtsH1fudBT7tWinUm5VrkVVpFPNvkwTM86quX3sqdNw1fw2Csy3yCn6KmKuVUbaUodehg7D2FZqDg",
  "key3": "21amsFJs3mGoL9JRErU8DxKEjmfVnHnJUD5E779WNJnTutXRC8npvYEgwPjvk6QjyyzM8y9EyVdSgrL2gjaE3qSy",
  "key4": "541qXiAGDzwfiLDfLXXNuw3T2TFdgD4REXuLx25qpbTaYfvLhd5ThL8swPURuJtMBPXdP7Y92oU2U8gofykQRmiX",
  "key5": "4FN4v4ZabzL7WvW3a4762ZKCLrj28kUAa8gijuZ2JX3H26YwfM2jiaAgmXsK5nAhePGczcCmobaxkQoTPMrkMXCw",
  "key6": "5dgft3eFY5CnM5mAcKPownLEE1efXKUuvh4NaMHT7WJ1aZipLEoESGjjYZC1hjUZgffMXt8fmNYoNp7xz4S64RwV",
  "key7": "2M1YhzmBnmKH7gPXF6xWUMX4z8BbSX8GQKzyWjkdDpNec8bTAj3Csuw2M8mwRWFyJ3RnKVvqszaRf6fKmUeeCFX1",
  "key8": "CPhLycJqondXC8mQMG9j6T8vaDPL3xtPQGFtLD1z9KdRrHZb5NSL1zn4CTgbKAsCbXHinxCxkazoVjyKMXuWXWC",
  "key9": "3ydhwNp3sUpzyebB716jY4kBfvqXk71fTarXbyyuJLf8ra4Z7TZCDNgX5euREnswhudTD8X3XJSCrHcdAZAYYVUd",
  "key10": "3waVgnRV6rTPSYvGsAHXxJxMxoj51DyScuh9f4Bx3erVAuqeJq5kBtoe6A2hSencox9gZ1QGDMH35UUtvRm46Ukh",
  "key11": "JvahzRM3y3usLFEUq6vSKchtcaBeyieFTH8Ca34Vqu7GMTYoYZqxPTtuXDhp5dNbWWjrvqvtai3xfcGMsKc6w4c",
  "key12": "4wPPJper7mnhC1kAVcDstaWBEPrUi7L9cBxZB3jncpDePKShGWWtLxDx7bQu5RdELqJtYPoEuQKW5rn4M4rJUHDn",
  "key13": "2taGqMy8dxPGNPtkrnHAzbw9cRszLjmihjU3LgiJb2tSkgyojFg9aMSHqUYrv6ZgNcB73hcQwnruFAuRqTcd3KNp",
  "key14": "LxD5Ep2svnkpubbdGvnCAb3ASiJRknAfQFF932LeoF8JrsSZa6qqizXmCV25vkb6egGqELhsodzn3Tf2JcdbXYE",
  "key15": "4xaPgXVwJNYxdRnXJPeRDuL66UekPGfnggogFX8ksoQwXXeHr1PizSM3GAmhXsbL8T4DGiwTzCpAYWNaaBFHh38r",
  "key16": "4QoZcq7EdmHM86AcHHbNpKVios8m9UVv2inhnQLVDJQQLjC4wdBJdD7KnbhyCVX92mBYYyYHscv3ubWmvGrjWkNV",
  "key17": "5T99MxLX1j58LmtbGuw2U4Y53JrECQAZzJMhm2jHkSC6X939kRtPiLVGCEBTAaUmcyVAZ6zZH4bNWbZQv6jnyKfY",
  "key18": "5uEFW1XANiGeUeocP4dyYKFkRuKuZ9TbxkgYFFC5XkMVnedEvjJTMMuiAN2tx2zwawk6PVt5dhVQVigh6VBQu5Sr",
  "key19": "4XgbwViEvTnR5FvkpFoQKx3Tfc2RTnauJ9rcSJbRYAFmY8vpF9F1KbYf6YG4Dzsr2dRYcbK2U9rU4GfWwPd11nmY",
  "key20": "3Y7axpZCW6xiV6c9WPhPa1yEphQngN2Cx1ANkpwdLcVSS5DEivjtdcKwU8KXxZS5HSVJMzhk4FhEqNHqKUGgZXhP",
  "key21": "JkBasQKY5JRUAcWs7KdWtVun7ty9KvCo7iMuZYcV5bVAPcdAjUS1WNB63LJdpPtc6YCsGu1ikYNFrXNYUfkFC8d",
  "key22": "3EVcJXTpvgrFdk1mp6tMzGbQctKPMCSD5ZMzRnzdb7Ts1ms3fS5RLgvaZpXdW5bUqEcyPHzZ4YtmK1Jjw884NQh6",
  "key23": "3ZUTXjK46DCZdiK4bJDfFMebQMcbWSHcMF5fbkFYDsiAnkPcumZf86bqnf9abCnbdmSVxUAVD8jJQ8ryFcv64jn8",
  "key24": "2AgfSsQUU53fAkS55rYzYPaQJWAHiwCPNrsSMka4i1yi8VKS9suCuSLSfRTVRKBzPAtifw48CEMnapv7nbehhQSB",
  "key25": "kDhEPRzaEWhCrUExprw5gMrwvHa7anKyc4PcKwTyyCbSqVQnPBuvzn97JhNnBaJKwesiCHhmqMG4EAQy6SSDicV",
  "key26": "4a4kiMG2qS3tSqoG5jrYfhFptESfMbwCLg1urXLrtLzAmukVvg8jVajZUhCQY41BsGSqjoVH6ok9cKkdC9Fg5wSf",
  "key27": "44AVRHDgyfimcj1Q7PKD1fdNLYQEhsKhdYEvCQJ5WAEioxtyxBQTQgFpjYEP7sJkB438iNrzzUbNYtqm91jSxAh9",
  "key28": "wmTBRgbxKU7dHFxdkXr3TvqHo1ANBoWk8fJPJ6GJe75PFcpWgwxhs5iaLYho6TCGc2gAhJyPnqQL9EDHdGSZERB",
  "key29": "HJ1Nm8U4qWfuu4ES5f8ssj8cXZk1rzsQwKC1rJP97HWHP7QAiFvHKPFvQkhzrT2iJdPN9RPcC3QsWrVRrYF6tDT",
  "key30": "Dx5oUwG6vRS2yi2rxjjniiaNxJMeyXTi5VcBtj8aZdDoh63mZUJQ72Mo63RNQPNsZ8drSYDGdk9uWrMAqbeFnjc",
  "key31": "3Ya6KqkiP1GM8VvEjFr9FboSuWXxBi9LQCviWTYTUt8Gjrr6ehwSySMoosrQALjyL9ych8EcHqPF1YHQRPS3WEnU"
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
