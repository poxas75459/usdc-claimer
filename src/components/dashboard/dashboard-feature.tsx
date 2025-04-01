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
    "4AYqzhNstLaAPKx494sVzLgh14kpVj6HN5nn7CDFZM6GkRDYER5BkciuSu8kh6wGfjTYjhVRNnXWydrpckqgDfR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkcwGoTi8UW38SRzw3jfdsqh7Sifj2zbMnjbpUB8x2MMWepuYrU4kmGyH7nPBiReLBGYLnBqNU2fjuSyexshcFr",
  "key1": "2MAJFfYsuTW8DL9DD8WyfVjr8JnY9f4WcHqWNT5f3rrKZMRiNc1UiimVY8yBcWYk7PSzxRc7cxnNvNhXGZdftMdF",
  "key2": "2iFyivovf1GXmHgkqVVUoNzBWvEhEpYEGtZthcQR1BXrHyLWW9Em6U1ojAfzVzRR8B985KtLMUQ7ffqiJ7khizxL",
  "key3": "5gPF7BjAfpYMTLBh3qrZuzi9Uz1PLRKNCJpLYfaVjhQdRHNSCHDoNjhdjoQDqGQWtNcbhu67nqqFUHoVC4UdYiW1",
  "key4": "3sbMd1RwG59DkUob5jmYtrUqSyH54CjpNojAc1x8PBXhPSXYpYiCDKUfGpq2eQT841BEFJhKaVVMK9tVGXGEDpRh",
  "key5": "2ewqtTAcRQ93paCq7i1Sn5rxg66bzDSNRZc8sDPv8rd6NsHspvNPU1HwjaRdsgL26sad2iDU7WyTCDXyfGD6euQA",
  "key6": "4W26ABRvoYMiK8TJZLV3B7TV7wweEBS5PpCK5AWgk4sFnkZCzfXToqthUjiY7ghhBJEvfxxfVgvagTDJj1ZtGvop",
  "key7": "rP8PD9XiCZA5Posm1Jq9VgzUe8fEnrMFZsn4bwEivTEcmfRGGwLM9FtD1ZqzLRAeLqoPpJvcJrRSLP186rao7AC",
  "key8": "3ToVWLncu6EokXmjUN2ZCTDPnyoCC3jmZC2T5aVxp1xCmDZ4Y7nyPyyWBtGcCoHzDiv8Vit2EFPFHxQeTR29pbBm",
  "key9": "AAFECkLqks2pTYrGnDoYucLhjDjRJsW7pWU39r6GYjUi3yASHNoTggXCZNx2MoKyzbYwoi1Qvo8bLULkMACDofG",
  "key10": "cx8CmW3YmXUE2Koex3vzmVvfaPJJUyyGwUifZfqZVGDPL9oERPFXWiL8sdNh9qAzDfNJb876k96hdfkUHCmgM58",
  "key11": "5j8REzPkMYLxNM2tQW116mPBWrPpE9nMHGCY3Q9j9eUTvkPpqWqkhuxJMrNJf6BJzgVMSrKpUuk9m85XV21qro7Y",
  "key12": "sLPmkZFvBpBQqk979skxyV8EJEHtYUDTNa4ZbpYBTZ5ksJqaP2eHMFUMWTooh7JtpTcQw1kEA5fadbkfttNUmoV",
  "key13": "tUR9rpidPFVpmCw2gcE8F3TdyESLQSYYqANCkeVZ6YcQD3mz5sDXhAQXvfHHmVLveta5VKJHswbvsvVffiNhiFG",
  "key14": "46cSydoMDngzseUbip6ySnrEC6FEtHuutG7VMBHb6jDysSkXF3qqn7XsAQ3Gy8XvBtJssb9xuRmQDdLnfM8KuR5i",
  "key15": "3TPhHnHvXodZS1KUxvqcY3WtyMz4apf7bsZC2zScEEgwfE5WucUBztiqgTi1ztoW6huzKqpQ5G9Y15gZA2fqGsnp",
  "key16": "2cMKkF98ArgnRpT52ZbkucdfkpZF8vJ9XP9G413sQUSkgmLCkMcupwSQXXQetM2W5erTXbGDJeg6HFuae4SB6BLt",
  "key17": "2Mb9pYxULFNamXGaQWih28R8YmRqibU3m94ZDtDhRgoEjvdydLT5wdR4ER4KV8pfiHgX53yULogBnw6KJeL2jwj4",
  "key18": "pTRhAPdtR1P6mUGuX8fnba5CqqJA4nNkMmRQNDtpzDs78cWTHdvJf7RBRvLCcoHjwRgv8eWs4U6CJ4HeB4w2C93",
  "key19": "5D1kkFfZbVePo82p1pY7Q5QKd6Wq8YccLTi5ndmtQyGZ83BhoGc1VoLWQTLUeWicGkKc5RH52byFrsZgWjoskWUP",
  "key20": "2froTUaNYUd2SFDkLvF4dni2zcVChYiaAFYckVDC4MHEvakUX2vbRvoGv4XTeGruVgW7f1sC7TBStswYA5hk3Jdm",
  "key21": "4BCNuQHVVmf21JVKQAPbRC7xuYaF8btXTbo7SVf4Fs9XYjiy4H9jdWvaQKTPpsWjfUoaYDT2x5EXjmSZssGhzrWs",
  "key22": "2W8YjzNem6gAi1VrZ1xHwhPNEMLCKg9o1utZjZ47BLq3QNhXghgKgFoMvuUU7DhTVVFmkUJNdjQobd3PAXLE3znB",
  "key23": "BDh6WEh36FvgWDmG8KnXrGgBwmmeHTxPyffRGcJhbZtR5Nh73LbW2a2Qe511sXYaxfCmZVAM4W3tQYvoGHZwG7c",
  "key24": "3rvGpwFD8mn1XQ2pbaVzqHVBhJGj6EPjvmLxSXFfPuPhinMuJUs1EAzbhpRTefsArmxU3kqvnkwG9RCu6nDab4kg",
  "key25": "2iqXpM5XjaQdXsEPd7qf6mFAabW1nuaFvpLLSbHufsG1YAKeJeoMMJ99FM5YY1FaiaCK39zzhanfZM3nsFMi5rcd",
  "key26": "xENmVp6iCze5613iwmrwrLM2L2P2spN73v9S9Qrb245iFzXvEP4qKSrzb1CzfecF7v19wHGmmbMyABTcmiB4191",
  "key27": "XZQFB5heHsoxwfKmZtWzdcfTZgNW6xrsnKA86ztQXNjpDpNngWzPmzFNHzQgnhgWHEqV2Zfg73t9igQ849NJySy",
  "key28": "5yPceAUxTssT4iANx9BRba9GPKT9E7iwqA3EC3NzNnkbiz7UjXsAXdwyKzERib3R8XRYjD3XMSatD9BpurDACiiY",
  "key29": "5o44CdPzT1NVDFcRfYo4bCsN4hGWmEMxoSHe3gAZNZRT5mqgXNtqZNLH5LPMtYN1a6qTyJ2MYd5YPQQEXqTnxz1j",
  "key30": "4H12ARkaK9yR3uhY9YwpGpo5FtwMEkx6b69HAtgdpZ5E2n19JkdzoEghAMpByACnPUs3BrrRoPawYciXaWhaCrHr",
  "key31": "3dg2wtnMXqqmvxA7aE5BJYD5GfNbnBZtdNwmSQdG7pocDz2te3mXwC9W8X1oG2a1SYZQNfaFxXEKwSNZRwouNTY3",
  "key32": "53BttSNcihZ13o669ZF2a9s5MkwBkekaGiujbUy3aDkTReRb4iiEvp6GipT3Jn3T6FxT6yDDFdLJrWcvK1dxKboM",
  "key33": "3zBsgpX2o8tLxmSidaRH3USwXLAxL1UJApifHKpwDuxj2QZnfvsKpYfyDYojSW6qvYLFbUtu8Q6cYfBoFRkD2K4J",
  "key34": "3ZG6uWFnPmF4Rdz1Zk2mVDhvaLWxafTcdYpfapRBxxxwX5tjq9mgs3L9zdUFz5eLKcyJvBJ35CzK1zDbuFWVNRg",
  "key35": "5vzHfssqjCWpJEW3Zq56KcZPb2bhiWmXvCs8w8CMrWhgQAyCrC51eRePW9nf66aNWrm98FQ297AkBE8zexi4oagi"
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
