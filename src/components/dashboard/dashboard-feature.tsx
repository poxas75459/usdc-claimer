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
    "ysdh15LX9uHEfxN5ZEcV3YAUKm6WrqjMr9RygoLgXDvTZVq9Kc3hV8wcTLQSoTA4DKTcW244a1fscF3KX6TRHDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "345x3oXgYpRF8F2izrVez9BrQuVxJfEdPzjpfoWymHbKA3FtpfknuiJCNxGu7bGzmrqtm35NkKeeFwHN5xBowjGD",
  "key1": "5i7HSeKHdG2tUFYPVcXT6tRXsfSzufCWw1DPiRjo6JnDr8u8B9oMHPAzkN2PV4JDhbWMM67qAiHnumSDrFxufXZP",
  "key2": "3pRfyhrAT8vbtc4RDb6psq9bz7rWMDKcAC1V2TZj7m4fcUNw8NPJ5w6P1Mi6SsmFs3V5chT88yabnamE8FeMBsDy",
  "key3": "K8hu63nFTrvryu582r3Ep9aLVk2qGjDNtbNCSXb121d9eWneSayZQQ8EBKVaX83ZyTKZdPqT5RikgFvR6UBRDCX",
  "key4": "2YLBARciq1GikTbqfXVKuWJP7p2SpBatP7voqhgJ7mrufbgA1YPKdgPpngutJqBYpD462rb8f2xam3bthfGD9mKC",
  "key5": "3yDJRGB1iQE2dDXvLEovL4BGNEpbcWt3RrnWkCZFwJr8TmTSTGthSQFc5T8c8Snu9KacjfforbcRM3T3mkNkNYMT",
  "key6": "4MbS6FtgwBdjyYJUs9o59PSYuVg6F9B6FzU6nCm3i3TWK19Ypyp3zHTZQYEMbeW5KShN4RgQYhERVvqKeKtWyxi2",
  "key7": "RSn6U2v2Hyjh6nTWM6PMakit2HHqo7ZCd5C2trzs2zYDxmjsyB9CKjA3xZaJx4j3Tghu4r5XrWNRc5asXJdmyfh",
  "key8": "LvCNU67RiUXsDwY8anzjxCxrVkssmVfiuKjaVnmaCBsvjrXy2vRmgYpyrvh7T4qDc1cpptqPL7RdbKAFov6FokP",
  "key9": "2mvmEBuBzKuaz4zzUhzmKhaTKkfVRmGyHiFyioJJtThYksrfzouNf6eT8uWwfh5kb42mDVWV5umkPmU9rjZyFR8a",
  "key10": "TZXH98xv49vw1apBtHPt9K7zBrD6h8S4DomL9JknPbbEwHsXNbKzq9U5weyN9FtAghvuFjZ1qX4Nfv7Qb9rZ5Cy",
  "key11": "657w6EY6HWJToSm4GrsgHkvLF54b3BZ4qvJzoww6LS45VgK5h3JTJup81ctFb8Q3vfdeS6QzVjzCWpXrgypcHPKf",
  "key12": "5spPaqzrRYyXZFvTaJMRvCevwRjze8G6sEtjNFWH69sMHtkVgspvc6QabNY89GiJkzijHQ7tupwUzuQozTHGqTnG",
  "key13": "2Z9KHux4M4Joodcm2t2pxDg6jcoiZmocynW5Jj2GyjYRDJHAAm48A2RBFqavnLkNoUjZMusXAT4QrUhDrHX1YE5B",
  "key14": "nKs9qFSzZ1hrUSRR97Xnfw56PFtEtY5u2AjNNzMoweNYQNv2znEfnF3vZq5oVo1AYMsCeJAtKXAmyntM2JD3aR7",
  "key15": "5kHRk57wVpWwr4B5b5xT7X44BzYAMFhmfsfmHQd2rP236zTh12G4BTkjF68UHCPySsB4LxXYSPnYwYKbL63EHmxw",
  "key16": "pY66vVUTqNnMJx5J1ZxFvezJWAqXWoQTpURdodZjQngkLzzENeVJEhTitL5wRH55E8fhrmTcenoHUovYwH2qrRf",
  "key17": "22u6SRgUkeq79cJu43tUTuangHkRQCjbcj1ZBTCmTccSdxEfesZ2z7Uy3uijxK48XmcbuH9GkkgXhkZC7grPERcR",
  "key18": "57DDHNUtbSRscydy7VCDcRDY7jdoTJbkCR9ek7zFXaRrRrp7dCr7V9yqJEBC8SjjkPkp8wYLjmAKawzKKgq8hxce",
  "key19": "2TZqakfuv4Uk1uVDwFafEX8CJBYaXdF447W4t4eEeVnz5tL9iQnCheNeov9KmTQYz655TAWAKyzS2VpXAp97LGkM",
  "key20": "2XSKQ3Mm3SQ2kRadUvaiqCs4aqG4NEtu479aYxtZ1Y6JUbuNkekURa6WZ9mcVFcU9R2AzNm9AwcaJPci9NQ51R35",
  "key21": "2sxShYKEVSc2MkYWH56XkkqYTjmiiXF9J6to9QS65M349ukWvQzL4ehivYLZAHzs1SDzEgQT4pJRCythHyoMDEw8",
  "key22": "5AdahiKxLuVoernCERtymLnUmVtabP2BtqcTSDQj9t1TPLqiko1YDPtji3NJw9ZL8h9ePxKZtG9LnHXYjDDeBN5i",
  "key23": "67RBimiNuTnXEpR5dRjDvn5R44tKWzaNRZYkDQGiKwRWYXRCj2PVo1uDZ2UfUCcAFvazQoNQ5Lf8qJogozN6V7AB",
  "key24": "4tuDua3gm6qFnG5BmSd73v6Jb4xCz3861L8ua7a7ADATWkcvweurySyn2rhgjLsuZ89Xx2AQZYyM5fuyuRoUXKqd",
  "key25": "2poxudVdPhUTmHNs4nHsznXCxipziTMkhZMJL5c2Qy1ejcumqWRUuC3mz3KLyGiJvvXfkiRg4f7EysxKk27FhBhf",
  "key26": "5Jr5kUXVDQ8AzJLLfRQHFfWx5EB8sgc8HqeZnw1iR28AZQH3AhfWVm7W69swUKojrHvi5zGLkqBrfccb3e13K5Go",
  "key27": "HuFGDU5Bzv8ojq1HuwQKtMrLFbusFZiw68TgCdz95XjEtzKzGxwVL5HE3c9YH5to7oyrBPD4vatps8qoSBou5C7",
  "key28": "5JwRnpx9J4SKf41DBMAU8GQazjThS4XMHyZedm6ovHeb2yKHsN7YEe9ocrE2DPprFayXsD7hAwNqzR5XQFTAkckL",
  "key29": "mB6rETDzPywyLmu2GsgAES8NYfsYDzRuCTbNe5muaK8frjxgpshDavrp313qrcsNbeVRvWJmt8x8zT8VpzGAXkt",
  "key30": "pCeFmKQsy2crNWv7WakJP6DTumE9hPX1QgtNhrQTFFfgTXKcwcMcGcREyh2FH74NgZheb4Vhxuujz1BKD4Mwo5Q",
  "key31": "48ESMdrJU6dJD64CxqncXkvUM6WnVZcj3rUHWJcjzTkxtWAGAeHwV5ENaaJJn3eBdfyrjYMirNL2BHDeHJMgqohV"
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
