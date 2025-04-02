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
    "5nYuMTqzerZ6xzN8FVg4tHccpDGx5F7TJP9WfbEWRJozASjc7du55guGuVQnh5EGYGTEiJ6db2YskqLDbiyeonr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hDUJN7RDvbwUwk3L3yC4a2j2Sp88HurKQsQHZvNbEStCipYMDPcoaPqjU9xgLiaQgDijL8dmoH6HWVBURvenHEy",
  "key1": "5zyAivhtc5XZKVhJrWesZ3CNbCarmF16sERB5c5YqfWLQWMQhS3SnoTib2Qc4thCfWShy7es3XTzYpmxg8LHNtRD",
  "key2": "3chSTqkH2jXAs7Po6Hs5da8WNU8ixe9bJZPChVozkNThBDQ75zZyoSuLcKNhovmFw7SjS6f2b889WoLXNQqD6gdN",
  "key3": "3umW5fG2jiT4V5L2uHTG8dvZWGHZrTMCzQQvMdApVkqzmGf8nPF429s28XhDw9othLGSVNaSR9aGACPnp7UdAamg",
  "key4": "2Pm2nzGHTf3XsbGboTkz5BGrmEHT8vagTWbZmkyhKvpH3X6jUjp83Qg6B7ovSEEtBKXYDH2ENN7HkRRxCUdL6b9Q",
  "key5": "2jAQvbZthtzQCj7myB5VVpVqLqSvHYAdznxqmDwzkwu9rWPPLN2NRfJH9KzNKYVeRGjuLgLVZMNBgdjYUL4RjEWp",
  "key6": "5e3hiPrGmwnm1iANQXUNeBvJXWoQyUMi8K295VQBVZKY7oyM5ajHS9tkYMgesA8V93n4VGAJeBBhhJTSXtRXz43p",
  "key7": "5Jc5dHca2UJoeveQWiVZJUUYSXoF9W2ARoDALCvCUicpcm4cW9rPEmk3TeKvjECB6AJDwqV7KuosVFmHrvJH6drr",
  "key8": "5yXWMvYN5dWigFE8HbWymy3C1QpCM9YXpzFFjdTz6ze1nG1S9VC5mY7bUNSUipELsM9CZDt8GPfVviv1NA5G4fkU",
  "key9": "3Rqo35zVB3eh2CMW1wUvH7HsFa9fcwz9w1wpSqLWBYBpBjZ6SSsPZ6KiUBNb9ymDCqcq2hb4ppv9LdjyDv7LCY6A",
  "key10": "581fhCqqv2oPeMRrcTbHcRY2YzworfoH5QjTdbCZhYe5PQZPkx1XmFXBHmHYA29gXp3VZTebmLVQiDJcC5L14yLx",
  "key11": "3R7aKiLiwFx2kyi6zXeKtmL7oFnwxbYF4tVo7Artrf35G7JmXkGbCWayzfs6QH96owr9iAwnq51DE1qnEZAQawBQ",
  "key12": "vbt8zsK3dfvx1A6hu27RRaVFMLLQTaJLuRRAPD2dC4Fgeoji4Kc5CZDQuGxwW2CuAajCTYYytGCPvWHheFJcfSr",
  "key13": "2xKhymLcr1JEMxxXqe3pjsjXUyn2UUmqzHddt9YVTe2kQbgfULNfo1LfhuYLBCm9eMdxBCGhZz3SWkvSmayAF59p",
  "key14": "2TCH9jNFfP8q2UnrBsmpaa7UJt7CQDmV9Un1kBPjebNkQbhhur9QANb4rK1xB3pbJcNhMxz7zou9zg8iRKZf42T1",
  "key15": "3qtxsZJpRNPZBJREKWUocq7JduorxPxSrpmBWmyvgGXUKqxpr6r3TnSrMf8Zny3hbPkvMRKuXJDci8JdqDmF4fpM",
  "key16": "2jf3RuyedTNfjyQkM7P6CmVEXQqq917kV8dD3dRnX6XwBmiuuc7Zn8GE9dNgzmx7EQgL4NfwVE1c712f4uoMHnid",
  "key17": "28TkoHGsMQBNobDSK1EaxemigukK2NPnK1KLVh59njt6BHRppkBCvK9cyoEfT8nZo5T8UmrQHwcJSucNZdbYSzCa",
  "key18": "4fo2HPDXby4FZDUgF7NfsGwgnFMk3qKHGY6d6iGUm3M7dhMKbYa9hMLj1UKoNGZXEYPYyX4YsPS5TariB1qBskRt",
  "key19": "4Guu47mqj4SiYUQ5Vgfixnpq7PkQM9C8RZCjNisX7YManMqfgC6Dna7zSssUv8rSPAsYzivVv85H94YKdw9AA9KL",
  "key20": "VomqPW8Bws6YX5SbKRNrKX4raTmXzVsPdGFD22khyGVMFoQu3JfDJkzgAXRLKo1RuMzmSmUaHSfzmdCvtrVLG19",
  "key21": "5jRxZcGXXxveupN77YLTqynsT9dFfNDi62D7fQMAvjrYo6hzX2YTSji4ru3JhVMYGKAfn1p1drz8biZ92YNqPccL",
  "key22": "2v526CCZWrWXh9rdxaSdByythPg5UTXvBsKTiK5gzsErGhFmy4aqbwiEnbdfRoAgq6VXaQ7ryaJefqVANkjERCjc",
  "key23": "2UGeeX4DEstHXDxqmpmNCKazxXm4EQzQNTTP6uYekErt1nKyVzoaAfCV7iLk5yGyP89eAiNnMUepyK6wDywNVFM6",
  "key24": "5NLHMtTqBk9GYFHiGEcsS3zWrPrrS22EhUjvmUpRKapjC65rZVktKtoh9zopJ3TLaG2sSDSRi85nHRtvM9hC9rJ9",
  "key25": "4a9922eaXdeRQoch4TwakHD1pFVv6ducAmVrnPnFHkZqyoEyuNhL9TCgn3QXPeKPMSD822SCWxnarUb3T1gHo81p",
  "key26": "3nrPQFA2mGWBmfu2NkhFv4zoc3LBFg9wNiVAQDJikguu5yVaYXa3CfSBSQrQSrik4nmm5ayZ2Pu3tgynEuYFF4gX",
  "key27": "2AYqBQUB2f5PMiX7SwQezz2abUb4uFUBh65o9TM1TRS9apziBz8df4vtGCEdyBihzJGnAFnnb3k3BGjvzZUzL3dL",
  "key28": "5FaDKZ1dDyog3QNEMRpuBryXQgVcAD3raHTKsUTkMkT9XAtz1aoSqVv8wov2snfZWYWE9sSjp5PDKJ7WgQDS3FVD",
  "key29": "2D7PU43BJh5ddyPQTtUuRQxWexd4f2i9K64UXsx5mM8hrpEdFe2QB6zuDsULjyibvHbsGjQQ1V5uJVbt3MspRBpT",
  "key30": "3jF6BpcffxBNeagWRipg5DmuixtnafqXY37R2jAdmGw6Z4ybonpSeCZYf9V7FsNRcMGXdoEiyUXVvLBCghHKftEX",
  "key31": "4G6yqdUNaZdgoToRDuTJH9XSSp232zXRMn6KaTAK8F6tQTzqxmqzSbcZQvaYv9tusQK8QRw3vineuDnJVMq2MHY8",
  "key32": "44ExMrQ46YHF3a1eQ53shm41XewQXBf1jUphr4L16JWH1XpXQtQQ5uf3eXJDExR4SrYcUL1CMmQs9vyd3c7Ykbuv",
  "key33": "4rd6gJe3Tf8gYYBviJdVX295o3chjM8LkZE2jLSwQ5XAcKDKZMTQma38W1cDsQC4pGuT83JXq2YD9BGC6LVe3PeH",
  "key34": "56u8c1sMGMPka4ZYdfpb5YW4Mq6dohqqxvsZtPEH6ZrESBjqfoXjyqdWS32zVVyaWJYoNriwB4jkGkhr54wdoc53",
  "key35": "3KbVj4u2SvNkFiKCLN2AicZBgtJUTxNDe5feJMC3VsRT9dhhS8EepxFQVrKfjwbVjGxjevEPunMU3UjCAyvTxaBM"
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
