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
    "2B5F4RCWDa8p77qddxjtdPuAyT5qRuiW4HLNMoVpV7R8S9CnsKetTB7nV21eAMTZ9ewcrMxEnWPPBJEbWVNta1qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QH6FDoAM86bnpY9M4KFeMBqE3nF1CM9NbVvFU9RJFNuBVXKhZk9nfxPzKakqxRke68uoTt5xwwCpmx38sg1rAd",
  "key1": "4JbpwnR5gNa5VNYDaJGyvkofTcqQnWfgebgSmTP9XpfhJDpPfgD8CvcMSNmipgk4qHbKU8ot7jJXkpQ7qFY5Z37G",
  "key2": "3m43o3r6T3Vd1SqKCk6kgn9DsHGvttc4gmEyDTBw5kYxfm7Zh6ENbzzw3V93JSRMQuAQaYrRoVKee2pVFSXet79Y",
  "key3": "382J4sZY3hFkvgR6KTcjREWT4xi15RhyjjkTd2AZ6LFoAJB57MUPkLiebbT5kqXTGQy3q6XpVsGNV1oTkjuxGHSJ",
  "key4": "5npQadEmvZzSRvxibGXwZ11NNxjm5jk2tR8Nv3RNjuAQChxCmG5bjSXSjvdS4TajgfK8s8X7iaehy8h4Kq59uVbR",
  "key5": "3yhKTwFGi4DmqUQY3Q1rNrxCN6ihKjUPSnCdkGfL1TkRvxTQWVodcPz1449tjnBqiGYng4meys2yC3HD9135CMRW",
  "key6": "3mRQJ1Tha27ynjxLnzYuPbjhKmRJhEh3Eo38iqKyp1Bj4XksJUPcwirNNcqiWi5vBQWiFM3FX9nvXv9j3wW3e5Gn",
  "key7": "56qG79tfuGdk6boS1jUjXtfeuqmG8aWU2cxGK3YdFq7aXxW8uqVSbNBsxoAEi5MPmTyGEKLEf78NkZYtF1UJrf4C",
  "key8": "4f7bTHFofyoispteT62tTdSYVvpFnZ119ryabUAAqPCxtEqEVE297H6YzAqzmWzPfw642eD4vduYYpnVjC1F5YGz",
  "key9": "4E1hSgMQng7B48apJwGiAH3HhB37fMfw3R1gHbXU4f1UZkmWgC2pY4xkZz8oSZ5x7uQz77y6QXVc6jfVBLaD2NNr",
  "key10": "sfApYEUyMbDGGyRZ3o9Xxjh8KdLuPz9KvTGnf8HavCdDLQbywyxH4rSYScNnZ29iuYY8eY4MVSHWyeRH7SirqzH",
  "key11": "5tpXSNFZCF8aAge5TKh5NEZRGzoiBBJPF3qcmf3PNiJb8khz4NjYMSkXkCcaKeYrZqjJ8eDJXKCCqkDAKf3ZTKsu",
  "key12": "3ZnEDVJ1kpGNyEPRt7daakV2rRbnf5MeKWYXP62n7cmkCwstaFebfWaTt384ur1kZ31h7qmv45tGdqKMeS93qZpT",
  "key13": "56tmSSBtT6c2h57bNupmPFACsuYiPHCrtCTyY5zMi4ZAhmKa1EJsHNjhpgZVr3gDZZ7ftQduqSwkCjdZNvbWFfZd",
  "key14": "47UcmecTQ1yziCNSvcdXEJqC4jB5dhpizr9SRiXGhrV7nLG6qZtZ2gSKjqN2iKvNhfJasLz1P484m99BqJ1HbGzx",
  "key15": "3E1iTfSwqipVLPqsSEknJrGQKT1Tryqmsr6zpcmtpgUnRbCG2ABCG9qWACvxHQvjR2pmU66CbK8kuJojnsS5Dxt3",
  "key16": "3e9hcd1a8wPpraCWsA7n32H5NN3JHgypkcW5YuMrGGYeVcBD1aQER6y1H4TEi2sTQsbodQz2qSx7ExC4TVDbLb4M",
  "key17": "4XbWP7M77gGoXuVPbHnD3W6eNBwEsKSiQwWwn7L2wSCJxrkC617jJoRzMnJCYurodhBsJw1YskTtnhT217Gdw7Gt",
  "key18": "hT76dFrNA8i2mPqt7pEv3mJ3t26A1FS1DweL4i9Y2WRdkUXfy8d4mDY9sdDpscvjtVatvoungDuiBH4xWvyCTLD",
  "key19": "4ZQRpwDhzMhH5jVqaJ2GxrbHa9HDFcss9PkD8gwt82x5LhwkRY2dLkz58g3BWyQ2ppf6oV5xFb8UeGKpVcxBmegV",
  "key20": "8pjHVhJDBDKXt5oVuho5AMdL8tCEm6ydvi7GoP7axxAdM6AVSgL6c7pAuDSPshULTG6SX7VniPbPufisdtJyWih",
  "key21": "3XsGJxHLFMAStwfEoJHnxag7mQopvDAYXkzNobBsmT6Zd5JVM69h98eSphgiYh2RPCL2uMii8zR8FSuceNts1As8",
  "key22": "qxEgdpQqfQCSosNbow8PUcu4gBhUXLkiXuQqJAMKBz7Y4ALtFrvr6iaAjfhgpsd1vg5uW64XDnmYyDqM4USKuUu",
  "key23": "5YyA9wYZxpMJVjceP8eHfqSnVeEnPz4xhVYWT1F7wMiGF27uUSoin5qWGp6B7xcBrgEXDi19mRRAUZbccbFfFBqc",
  "key24": "yoP6xRQp3MQUuo6zGCRT8bo1J8gX26Ync1bYR3QRbdhP3GkyiF1cTgx4wnYrUQAAJqwpDJ1gK1f9g8NsU6ZMryj",
  "key25": "tYe5vpQ1uy2Di5eiT353guxxLHvC9fz7ufQEcsQ6erngEChRLs6CHvK3wgdcuq6mqkRJmvEd6XGmfUr8CFAS3Rf",
  "key26": "4bZ5S1UBb9BRkbdd11y2kiNuEc7fyjWDE14WJxTx638KyhwC7G4XGVUFfCHYxrtp4vaHi66popmuvLEQooDhh6Yj",
  "key27": "HG5T9daUimVigXXZ8ZbtaWyJ1TWWCKLsQY2uTaSZrCZB71bfKx3HNP6PJDayLTdawWE5Z8pEqM2pohNUaYiPLk6",
  "key28": "2xaDHUK1uXmS3yjWN6QJmD931ZtDBDZLPMRwqZK6YcsUrhso5wPxvH7CoVVHs3C83crYZ5DXnDv3MpnmuPHwZQjz",
  "key29": "y1a85uo9c7qiDRZYNKczrUP9uSQX2vnfyyHfNDjvjJV8d5X9ecF7RXVH2Kss2jZv3r2XxTwqVekUUfn5MbwTTEs",
  "key30": "uKS4FUZyM2V2cVEpdWGC3ayPSTvJvRA1zPGCT53UxjKgQy1CHLEoH9xLq2iqWAY6HetK6eG1iBAN9N37kyYjQmA",
  "key31": "3JvQKvhyvjePw2mfLs4oWnTpD5DzXerLLGeHK2xyT6HkhL4C5Mzej9bbkZZ2cdfCGkkNWgKBdneLQDE5xwhneLB3",
  "key32": "4j9KciRUyjrTUb52fC1GgSAUV6RsnTQWJGXZ4KjRy29rSgZyKV4HVNcz5JCLgi4ErRMwCN3avjCHZbiPUC6TKkXX",
  "key33": "5SExoXcVvsGv9RoZiBqfYgkZzXyzUygQGhX8CFJxdDUidcozE7t8RRT1ywk8XTSk7eUcbN1UX7w7pNnXDhooRgJx",
  "key34": "5YN6Lcd3ex5DxrojrSezFXT9NWTSNT5EsN57NYBMBBEWewrRffyL1uAJZkV7HQvVRWfP5A4BuUoru3hin6GRRx72",
  "key35": "LqqttKvSvmtubLkpNu6F7sQGTMPTZ9L9JRa2R4pEwyj5bDQGDiLZVywAj2FVMJMBT4N3C388ZTYUbZDXoPxYVya",
  "key36": "53vnmvFmmw5FrSdp2FDQu5Zerp6t5jw8dYoBYTN2Jg7mY467jztpQAuNCfq4ac5vLdvqudtREVQUsokfbYaFjiBT",
  "key37": "2gnyQrtvNvEPr8uJZkvjXNfYqbVucdXLyMQsxqBaQsa43bTfNx694W3yxSmDUyZfXV2kL2mY7nDXXxZMEQiaXwz7",
  "key38": "hh7E6vQw9MPjjA6nTMjVQ2kufG4zqQSaiTdQssRMY1AmZthXCUNodCnW5xo5HvBUMfgXSEQufQWQbHcV3ZcqV6r",
  "key39": "52onu7VWjK4Q7VeYEUzSyvdhXHLAsEMZjCn76nghzpssDpX8TVqvTJCsGQGgCNodHo5ggEaHhLPGjVxHB6U7ebVT",
  "key40": "3CRML1TAVhcjcGZKDNuiqi8htJeugvmsJuvnGndBb2aDuYMfxrZPq4wg8h2rUBuHLkUUzShFYQ355C1WniMyRQLB",
  "key41": "5c5Etq8aZu1V1PjUoCL5KcZy5YrTrfQUYY88WhSTz5tt83WDnZZv1oSQzTF8dwmwhvRNWWAVySSwNspUQNBLAD6f",
  "key42": "EFftoN44wcYK4iBbZHm3vSEvE1wMdZVBJoAcNJLGnKaLjzQuC72vjtGqjYaA9v9eqAzfT2bbc15ahetuweRnCRi",
  "key43": "4Gy52er8L9oe6WJgKQJba2jT32kE8f91ibrtZbjW86ttQug6jC5KRDmS7RVjxqfesXQh7XYuh3Musz8sZ241ZFEN",
  "key44": "35aym5V57jXpMpRu2ULh2TrRJEXG4GqMrwpGbG9A8C3b1EDdNa6y7cr8jYJMz4fbZgVkAXSoxYgWxQ5bi2RB7cBQ"
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
