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
    "4CgrwZ6u5g3hM8oZo7cX11pb8RBR6nez38tLNAsWfT3fp4G6xCWJiFUYQ8Vgay9AoWBpBrm8qBnnHf181QcQwDD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A9XPqURmtMsRqFRtUGYbidKqTY4tXsDvasnArQsRTFYMWgvRcJjrttaAtnHBzRtEnYn1nxCxmiAU8xotppMQo78",
  "key1": "5BJig6wy4kEQsVo6rgWKz7R8d89trCq6dNCjYhTf6bynw3BGTSbfUCEeqRhmtAnwRLtKaKXQSFLi8n76zua8wgfK",
  "key2": "4PDbSVS2jXFxFZFhHgoNbnMnA8oTtDMxxU4ic8KRrVMFMax7DfbsSqPro3DRx3raPSsMfgeQWAKkHH2zvDgy5DRM",
  "key3": "35K2k8FWSGsm8UXctGSvsxNFBWdG8WW7NfiZoyqVLjicVGpvS6GM1D9E2gcDKNGMReHDrSjs4SxqBN19oSWrDfnN",
  "key4": "5bt3J5NHeVJwRYVSyfDydtTyDyivAbYDTUcKhtC5AZG7o1XKjwaKEtvTUT8TJifkh5ZjpfC2NcwA6BZhAxgBeY6s",
  "key5": "164t2uf6BYLaJ63UqyGPwaNn4Zvuujtn6DDHQ7pqPis6f22Gcb9U6qeZ6kHfCwU9cD9m7N1HepZwsT6Kk534QrW",
  "key6": "A54urQ8RC7WmJX329faDYDcs2iE8ysqb7emgSn6cAveM7j8vsMHSvo2HVxtVfyfxfzk7So3o4zQuWQ7LkiGWXjg",
  "key7": "99QQ4dSTzkVBW1VaWa7aqzDLz4tWZ8LXfopzhKhdyKh7ExUkc8Vsfkbp3QG1zkaDcbkXbAMZNT1yCgLr6g11nfU",
  "key8": "2B4o1FqZ8hxXVMbP5A36oXHPw7BJiDLkVCD9Bkwm8toX9ng9cUE5ohwJFbs8WmYeoCC5oAhRhLhEy3KeJocm85be",
  "key9": "2JMJQVkHmLH3x7BZr7ZK4Q5pMiY3mDSPdU4SEgK1SKM7MpyjoMxkTW61g58TWNrx8mUoyphkzp4YpzSfZSFJ362B",
  "key10": "3iSnZ2oFeujNqBHdsF1wLa9gC4uR7qiyMURBiPVcBWHqW1shDvJkCn8cXYnYYhZn43kRaLyf9cefpBYx4sSnsVvF",
  "key11": "tvpzfNCy5ihWrr6BdjzLk6XHnYNvfiW8aTBns3jP5gpU7SHMRBjLKH1Edc4EQNv3Ar2FFo1qmmPK9Mm3Bqxnt3z",
  "key12": "5mSPuxZs6PmcQ8pAomSt4Hh4ygdteP4WMg21i6dUMCLpUmsnqfrX7ZKPkb6WCiYMiQ45hiE5jn7ED8V2wBTbKLXr",
  "key13": "zp5WbUjyRexvAATAmBWRzDu2yXQmAuW85K88TEqqFg2H1zZ4KWuEaL5cC1c1FFr7aPwxHaNhc16UJtoVS5hWtDt",
  "key14": "33awYcJio34cSj6qiJyATJYnyqmVwfsDqnQ7wcdDbzg7agrFwZnhRLH1FTP35BEwWq5qUfTsW6859qzYpQrNA1t3",
  "key15": "3tByqo6xuBvwZuf4NMAPjPiRWhV9fVHNPmaXGQhvqqJ4uXCdRQUnDRcfAh7qtteUZPbZcWSj4dZwq6ghkv3gDCYZ",
  "key16": "3M8uKAVFpk5iwnBBnfsuaAaQaEDepLJQ56LLnQYHKdyHXTTAbbdwdQweKkG6jSZKdf8Z9ghDRq94bxtARCYKw8DT",
  "key17": "35QPyr9WjASiHFX5codCN5GkCbyan8Uxi9rNprNGkdmh16ehUDK2mmbp87HuiPaa7GGmzWkviqgrBAfi2WKcTkgW",
  "key18": "2E82CtQhedToc5qcopgdJpQPBAmKmhZNtHkGGPKdLn3mxXZqCVsMi7c3RC149ixC6PWPqv3NQnCoTawreosKpLjk",
  "key19": "5ALb7FYqNHnkQc285Mz134QMCx23gAzNffqoALLuPSkgb2Y4te3g3GWFrtXkCf6TAbTsXiHpysh4RkS3iuwV3CWb",
  "key20": "4uGdtq6erDobtJ8zRDTfFqM5UgtEhsYnWT7L5WZpCLyvbh8n4jnuK9HnxQGKwNMRXRH55wNXCYomV2dPq7wjg7Km",
  "key21": "3XimPybMW3YEMQWsxmC4e8XZRw7n8PWr7AEmDRpjzPGpZy2FAX5w6UZV7fBVzibxpyqqWkzhmcEteYBn1XNhUitk",
  "key22": "42rTj6woH9kYDrYqiwFra6vesowuJkdZzJMKLWj5ywaT4Nf7T4iJbFkbDu9ufEDfUwy955kgJjVLeZ86V5Y2TgnX",
  "key23": "3noSRkzEPS9uWXBTQC1aGMdotCyen2PgRVKDSPxw44cA1XwAk3yodYcfRR6dqacC3BEGraRhbx7BHt6qCRrj3tKS",
  "key24": "2FrvNMynK1kFXjDTCvBoztKV2DBTj4nEyK5F5AY5Pr8ZNkwdVBAv7gaiu6ny4skbp7paiLuNzfgDpeBAtHgT7yDQ",
  "key25": "5Yjr6ZsqSbKvLf4Te5JVyPRuEqyJ8nXoAKPpQAs3UBtTuvnxsf5MWZFBYmeahaoqiSCHo3npD5Qi8ycxi3KC7Yi6",
  "key26": "5rji8zjxy9MsS8E3BaNcUuYesJnrggokd28Wm2LLEj9GmyfVWefaTz3Ec8rvbSXAMF5fdw3yNs81hPyXqJDAaGLn",
  "key27": "32jukgExFei3RgUDnjVV5pJHkSFtK2fK8HL76ywzquhdRkoa9SFW3oKwZKEPogvTwAP1SRZrUv212AHA29HioTge",
  "key28": "45jZtVnAft3YJsiPLDrKEmqUYrsy4yGAGsMkYoSoo1h3L1bVYEXnyB75yr2Vt8kS6qTFfFovgfQvfXu2VJFiUfzf",
  "key29": "3aAh1Doju3rG5u8pjvxDkFEazuGnHcxB7aJY2vu6q34jzf9f8NJAMAPrGxHiBvpHiLjjL9VrNMLnu3ZtKThdd2fh",
  "key30": "4sm7RBXRoAbXgziBt6aN6DQPJb5EUERNtvfCZ1stJ3YbF4dFP69BeHPoHTk7yBCVBaookhJ7whgSe8Xv3i5tjAtc",
  "key31": "62i2utGjBC8YkerP8jZoyzGY3jjBFzqhdWsHJeD9WXseWjJw4uVwxZ4aVuw5jmJF33AASK9Pj2BKDzZ7NwgfeSH1",
  "key32": "2UdpJNDCcGQpb5gnbqwsQ7uUWvidVZodZ9492bJkNScCpCNs5tvthVGqCaCkXMnbLCNAPY6XQ6tMcci15qJJLDk5"
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
