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
    "4BRnqrrSAJgPuSmyQEnMjQ7WG4Z5Fo8whARu18Vzqzd3e6w5hKEeNnAkP8zUnyXa6yH6u7zHEZc7ZPbEQNvBcwcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XN1ur9TJGZnMFsFatDTQLPXDYyfsCkac8wZBJKAUP8fMFUrwmRosFDvRKp5d4YMN4Vfi7SAmYoQY86hSegxBjZ",
  "key1": "gULf4ZV4csHA6orii4ZXc59dbL57LZmfvSxdUT4PUnUYmmCMJXdGV8gqYDXspEDHvCwpb3crnPNrXDBtEcCzy3a",
  "key2": "FzTEA21Ba8hDxCj5xXdeqfZFBLTGse2DMcYjombXWDgVF3VZdFkc7S6H5o1Wn89L7XgUpFUQVyFSegbtHVu3jtV",
  "key3": "5wSaFigwiaJjuK6s42H136DNaTELRkLdt5oK4Bkip2DzsXQdW8gQWNLnTKVycKqyCKat5yfEKxS4UnWZhRJftqia",
  "key4": "4Diu4Gj1YzCTsJyzfc4TBTVoPB8XLYAgLc3LwVW5UqqsQX1yp2dsneuMT2NqkV7jBjR6fQshkA96wYx7DuxKFXhP",
  "key5": "2HsMxRwLyoUpY4Ud4w9s9sqHfFTHzEufXAPJ9edF43PASaLWLAzWFcWMbWVnyiSCqmtKdyiVNSeNXmVqtg5rmALF",
  "key6": "5yxnexvMiKqCeZic3QAM6JJgTr5pTWzNyu6Y6EUT4C6yT4AUKvaeHhFBJVpVdxwxkuUpLPPcYXgG28dLf9A8WTV6",
  "key7": "2XsqUjgfnk52K6zW5RgtcBUQvZDiTZdfrxE7zHmFfoBMs675qihreYKD3Kpp1u29ZAKY4shCMPmhLGCLTsr3JiRh",
  "key8": "5KSnsC21BnESAQxN5u5GubxYUfhggYswHX9KFWSc1R4CpVhL9zZ5uBx9jD9hshXCuNDa5CE7CBx7kakKKNNBDCnY",
  "key9": "2Q7DQ6PkepFsXDpComNCmi3k12fA5QntfYsRodDSTRBXLb4XvjkobCBWKzq7VqWJks3X5M62Ba8y744ZAXZDDEXa",
  "key10": "5vWPHESB44xPjvSsengP2wLw4YUNXX8ToBv4yVZhkcBAzFpgAZ9jqWVChARXyuAgkGPfJ9cYmCWuLWVnbQ2ojHfE",
  "key11": "2pAs2sBT1fE1QHzxUbJXUpTbMCNDpQrFCrgMWhQ78EDKa1GDZ8n5p6ZKdotjCpstxnLDiZzXZTMY75boyBNWJ8r",
  "key12": "RETwTQpywVBFETwnhLh5QrSmG3GNaJgSYfaSHmvAPQgLerLFnLu5dLJYszzCPjW2jUMg6CSzwmxSHNQ432zi8ww",
  "key13": "2JEFu8NcPhR3wSaZ4GTSGtGKnVeJbVyPAcHT89PzzEorEYLeA4Tczhyec9Ax6PYHSfeNgZVGBCWAUKtmbjCWcPw6",
  "key14": "4HuDviwXVAnaFRrRP5icvgr2jhhAm4SYqYELrAXPCzeBSafadGCQMZWHrpPcW9C5hEQGZuaNuSiPzvAdn54QnM6z",
  "key15": "2RQgqkUaNNXnniJyywFEG1TEBM1poADQamcD7HXJwh1aBNzjFrETt99Krt89AV49EmahL1PQ41GYkWo5cLSrF9ft",
  "key16": "2XUpfaqxrMBpMBXGdd7BnaVBv2RQ55nvFev6zztcJ2bp9TTigGtLQou1qf98o3t6zn8QvGGFe3ku6Zu7kSqjyRG7",
  "key17": "4hBQepKiXVUysvfeBBop7kYbKJ1kQ3tNDT9HfBYJRF7gfyh5mUVCLbL7M4HV8V1ewyQvj1saHNq8ARHkBPswrJTY",
  "key18": "e8yX3AQyU1pWiskq2SeYQaEVvd25FRKExWshVVYRpQSGTzGF4kjBrqbZjbyuVneytn4Ga4exBbg7WAK4An1Ukyu",
  "key19": "5EstB8n1EQ5nJ1VGzDfLW4cJcACofS5vFqLhBNMypuSJNtt7248YnA1b3WrMfFk6QdzmbSkqgGbNEkCVE7Ytv7VB",
  "key20": "55E8ePMUHPJrsBxkwLZXnx5gLNpQVGmdkz483GXxnu1ZT2UbsL2hzt7zqU1u5khtoBhKfQdmX84a2bAd4o4frTMe",
  "key21": "3NAPkT1MvmtnhDhDVqpeqwuiJtei26vRkdF1DQ9mRSUGDFUjJvRVj7pzi9GkRWoKcjzRgXe59b3QR4ewKhxKYWn6",
  "key22": "2G31CHpQchF9PZnruC4xws27dMHfs5yWrci4bXiVWjKBj2Tm7PeNZYbypHAcazKgu6sMouN6MNN2QDgcQdnqCNe1",
  "key23": "Fz6jnbogf2eJ4Bt3eQKjDVJLfRg84JuWLq5F41eSudGADxKeCr7T1wWJaBUmMSkLpo5rTdrjV111SYhVFCwYRZV",
  "key24": "2C99WXEYVQnMfnTpXj43JV2iQvS5ctjCEYLu5fwz53Jr5FpQvhv5QQRg7TW5EjzrxSGLozjVgcyQg78PifCaJVmp",
  "key25": "3pNkeUW3dRZy8KtjJkD6a8fpSezyfBkEwYDMD47Hxv8cUaPUW2KmstSAzi5UtDFDy2rtYhB5kzUTQa1XAPY7Me9b",
  "key26": "3wiGmrUtTi64L6RRg6Kawv6dS1mr1LLc4XfpbSfcdF3msTanNPKCeoXMt52J3Zeo3RVrdu47MywENTEsnrdGWtCB",
  "key27": "2oEcE5oMM4WaDsmAStBcgri3LU6NPTbsQLv9Bps9yCEqhgZ4K16HqHzaSBFFDnkkgcBEFiLvJfh8EHCKt6KfMjfF",
  "key28": "2cmJ7gfGdaiRvZqWP13aFUhvjDtHF6Af8iLm1LrDyyCGKT3C8HmdAuypCfgPD23SkkiAe5RCKWFoRLXsM4wVY8VZ",
  "key29": "YAakDRThTvgfKjf6Y2Rh4AFZyvKKCP2vxw8UvKAd1AUMRwB51ti2FyCfa7Ed3vRzSRMNqHLhkvwENnoiSaPw4tz",
  "key30": "2NRjTE6CpPkccvVGbzVp48RK36H3eW49UXJpSNgCtNPpDaYEkhxiRchG96TW6yYLWc2CpZCvfhu6mSmJCbcBmrrw",
  "key31": "3dFBsHnQpYXDNfxyC4EiBhmaTcG8nRMDqSCAC6h1sLq53bJQLTPQRnxfMLV5ZALvVaAZzmhaBV9RJFxYS5dcqBaV",
  "key32": "EPWVkTeMDfKZnoTfjFhTnFusJtfS54S7ACywjJzk7k3Ma79iH15A2vDjehCpgRXSjDizdFSXxCeLMqTBUDkkPzH",
  "key33": "2CyTWfcRpVgUwNi59WSWe6kP5jacyGdeUXsbcqtQEThfgyxs3eDe4Brv5LLJxDf5sbFJ4MaPFRfhBnF9s3Lzu1ZM",
  "key34": "2zkMhHVwSnjrcBww2eFjFkRYmENwHunXwvjjMYe5oKVyAxTPrNBcXyShrughL7Tt9opyz4ZxSTB1TyvoykcFhwM1",
  "key35": "pYTTuZHvdsiCaSC2Ud1rFAdT1QyrtBhTNyMdWgRHGNKgrD7vgzdLXPCbAsq2VeVy46CbnGiWPG4ZH9XeC6BJQzc",
  "key36": "qeF9wWmFHF43SEQWjb6b9X2s6nLmwLSdhwSuimVeYfeWokSPck7KVcxw1ujNpsugpUWdS1myAWZJM3KQSSWB4ys",
  "key37": "58hhLwAoqapZfSL4twKNLHjgWaVFYib56W4HtBa8N8Vh6oGKAtgjeHSdAQsYnpKAgtAZrSCXacC3Bokxhk8WF4HN",
  "key38": "5LJRqX4oJfXez9RPrhYDL2P4KZYMEFdZdkcJHTAAwfAjXrnzKXG4ZpQzesguNugp2D4gcYpbyurXwznsojcc1iKU",
  "key39": "sdTLzZyzsLs1d7fP3vaDX6i9K5d6LVVTxVesQP5SPfibBL5yCpPpe5diPLYmQTbog2QtJH2iYrGWCpQDgGNBW8q",
  "key40": "52yYD9vSGk2WWQxKkBxqdFGiKFNbqK3odnNHDv51859V8KEbpoVDAPgzJPF72Xv9Tn7GG7p6qSz8Rj4jZZ8Zkm33",
  "key41": "3FAJhLkuv657eYvttx9jjkCxqttTBbVDa63WawnzxtJYVcW3DZi3EfaR6Sm8QQcpmUY1qwVkXUdFq5mmehzgi8Me",
  "key42": "2MndA4PZiGxkRrxVeRmFdtfmAGCHbmzzvCN3VUk5hXxzhL4YwcA1guD2zVy57PjmscM7coNgQoV2UWiKgKx6GscG"
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
