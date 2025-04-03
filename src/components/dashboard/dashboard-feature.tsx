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
    "5it4teTwukS7GzpY21vj8N3TGdZiw7GG6tjL9hYT4srXfGwFcSsGGNWRS8nntBaR83cDkiscx5C3BFiY4Hqyntuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5L7nR5fG9dGG6jNMd7Ck1X5f8bXWsUHR5fZiAVtDV44A9pfEE51sRvpsAAhi3kH3MS7iRmu9rsbm11YPxyv6Md",
  "key1": "4A4piXtpTRJaXAwYsALJyRoGgS29ojxtbhg9986WdaNB4yYbfsAEoW2StDmH9tVseDH5n55gqc66T46Pc2Vo5qZK",
  "key2": "3u63QtXbbkQm9cyrAWp8xAfGt4VFzUYu5YGXisAfFDsKnaWp2U2PsCkdSrYkLbkokKbxX4PRGzXiduH9yihTcKkv",
  "key3": "3kYPXGmDHQ45Rk5PJAPsMcR9LUHFRsJ6VLJyH3tqymN9s71QVJqGG7awsU9BmiRxFkC2z847VwJ9U7nH4prm4XbX",
  "key4": "4EmNPNcbWei7edMXfyTVAp7TD64dedjC64KkWP4QHmn5woEwRGocZJEXE6h8kQZnQjX793PpndvU3DG2rDDJWZQN",
  "key5": "4VLvThbncYnxXWNpxsJgutNsi4i37xafYT6tspFXzyajfEmeLnrgFFWiEFmQTig731ub5aT7nTRHszi9SaniZoRV",
  "key6": "4tvxhdoeRAExT4xr1niohR9DoWwRX3dvYY3dH9xbmMR8najXTU7vmpkNHn9XwnQp8KJLhbdNkrdQtNnmyNp5wcyH",
  "key7": "53LUsTiWYsR8wozysqarUk9geeVKgAyBzYNkwWK6vmXVaY65J1d5ZMLahFBvV7stB6iJXPA2WsDqindeis8jeHph",
  "key8": "sXCpKHYYLBmHNZiA2jSZKiETUmnX9vFTtoXUxED45DiAWZP4eJ6ggEfDtFSyUMMy5456Ah8uwzncgLSkxEY8meA",
  "key9": "2YBqroZuN6ZKDoewycRNrkzDyqx6gitf3JDMkaMNiCT51ArK1uM4pQM6eG3HQGADFJeUXwetBUg4Ed2YuhuP6eFC",
  "key10": "3auSNQ3smMM72LdH4eBV7BivThunY2f9UW1D3FLee3A2gX9dWA7z1wFhiEHtMuTuDMByfmKaHe3wfjgaPKcYZEhz",
  "key11": "42R3fUxcbgt8uYAN8ViGMdT5pfAyrFd39DX7SYUBPk2VpDdJAsbgbJMm3KcJmRDgjAeNGJYBcobroffW8sFqYQHs",
  "key12": "4TLxPJ2ZavFYowxX78f38mVoR4wdKukuEvVez8xzgE572jK3395TJfvf8huHemEgahjWJdYZfr3WduZ6ZbALxHpn",
  "key13": "2tzEP9VuR6d55Aynbb46Pjixd4j37xf24wCW8HzUkx5zGRxXPNDWaxYW2zWN82nyR4PQJ2tSTUYJfjnPqS3Pofaj",
  "key14": "5mVNw6gh9476aMDHc7ePziMxGAmQwWr1qeDedCHTXTuz1Nr3mmXA28n5bb6M7Qu6BitPCjfjU8DMgeYqhPduZDmm",
  "key15": "2sWrF6aFmEoKeRgYAjtC4Z1QXzXAhH8Cx49j2p1YpuogCpzy5aFLSxnWZTEUaBzYW5Eyyx2SUciFaJTaiEu3969x",
  "key16": "QTZAzPYFgpdwKkYLBTJ5Un5pzpKBcULf5DXc45fUePQVuzVdoC5siG67VNrkaAXwrFaag5hDXDCBoDws3ihFVz7",
  "key17": "3nb23EgcLSc5UQeBPNQHXabxzER6etZxpgEed86dGH3VdK7Mesw7cBFMc7RsCb7enA1fjbuUdNL1YWBUAprrdQii",
  "key18": "4oB8v7qWjxvEXWUhL8U7KRGtG2W1CCAELUNVKQM5aacJfSwbmwtLUAaugCGmqQzwaQH3GB7g8YtcXiHMJm7w8n8n",
  "key19": "3qzh9qoZFpVf8rMPTHjG8c23W9oAPjhNTJcxuwLW9xTzgaXPyWRYsG3bgNznfu5P438hZDshtCig2QgxMQwTk7eD",
  "key20": "48FRWGqr3AvWZbfxyQJs1GuEDe8f1NxuZoi3wR1gV5RM7vgJYdW2rAdE6HowfytVtXrYAyvRWUP9qkrhgzkBcKp1",
  "key21": "4NGkDfg3SSMAgH5Zardo4AgoNDgqwqsPVUjb5y3sHSvq8CXDivEbvAfp6KCydF9aqwj7TAgZvfNzYn4EvyQ1pnyR",
  "key22": "3BqJoheKU3esoxmxLEy6bJ6xyJxYeNy9JHLejaZhuxk9uft36VZsUKssH2Sv1s7F3n45fw7YFLkaMv78wFdMtzpk",
  "key23": "42uCvfrGKwtZA4JTPZi6gvvtiKmsT74GEpaNYYLD5Y6nWpgtbdAy5hUp4DnLL4wYqgyg9B4FUzM8dUmPvxi3NyKS",
  "key24": "4P4SdE6JZQRyMBPhjLCSfr7eU3StWUACKW52TnWPuGYaVX173XmfmoT5RFY8XUWHbFH9WdDzrJdp158NtMyMnKPx",
  "key25": "qQSNp9GTbbD8RkZ28KUDHYsFz3zUBUBetRtJJGNUhZDS9djnFZSfoscNnC5xzKBgsRwfm8cxAEh7KakexSmfJnZ",
  "key26": "mMX9VPpY24edtrQ3MiXDnoSY1BnneXXRfzUhQdwmr1axw8tGNDqm5kFvSQBaRss1wY87CUxnUZ3ipLCoQGtCLkp",
  "key27": "5LqLPDAU8Mmm7EVwD8YVsgNyJesbD148cXrUP1yg7D72Et56sgxqkHEp8Zu8ecFjFVYUri7c8uza2a7DoAD3YBQc"
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
