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
    "4UynJ6mbKkwC3hmo1ZazwBJGwCnYfXmAH6QQ14qVq7w1tHduk7YMGkLuRABQhd4Cfobik2bP5pi35LNuG54z5XXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v45T8fYB3oL68JLWsdxYU8TJm3p3YpEEgU77PHpGu3QQTM3WzPxCjyUS57JZkk4HrrsKW89q6ZEEBVrDG5fdyok",
  "key1": "45tpQRPYkKdA1SdcCVRLxob4VegJk8jUps455Dow7CnTs4kcg4wLzmuUEu2DptQsXSLVFsMCgVC33LhBshmKND5c",
  "key2": "3dKmtHpeQXWTDrT3BZrE25Mb7XgTkHbDJB44ZvREGsNxn9uJumJtTPpRsdBC4DKmd9ghhNw2WfcHKgp3nmNUncfn",
  "key3": "5H1x2XkCfG8NtgNhVHshQroPJ8rLKaPAiaUWDuXpuGaQwKDS4vk7RmqHJVJWwbKgoXv3JZYEZSTbMfL12g9zPPcA",
  "key4": "425JQvyL6B9B6zayNivRjXwYCW5g4ebqsT8YMoBXERYsbUTuCnCsfhfv4te615Wii7oMk219cg3XJ4PzH2Mp8Wax",
  "key5": "336Si7EmK4usbpaqy2WaP31uWYZADggbVA9mqS7AvLYgNrPeVj74K1NvZ9ckGZxmFXxvCdzAVX68hM9dmLZNBVtq",
  "key6": "47AiZrMvjmnjreTh2JkwGAkaSgaZwcYDBNCHvNQUW9ccvKi5BsCfE6Kmp6i7PxDmtija6ULBxvjhUhCkzatqiYJd",
  "key7": "3fJr3yZnR2Qp8zQpE9tAvva3o2ZGWQ9WddD4oTuC1YJrvXey9nu6K4AqY5eGRkwFZhcLVxucfBCa7jXQ6ZTAjqcT",
  "key8": "is31bbPHa5QkWf9bx3gmmqWiqWuWEKq4NqC1sCaxgBBgtJ3fKMY6dcoozKw7JtDhFLqBe9dpWwgaFaECHnvZUNY",
  "key9": "59dhdzeWtswDFpAg9qkAg3koQoVpC7bDEpyYU6eMW4KUMzU47tFbEFKKNAUp9A2EKCXxTqbaSwPAqwjWZB5ypRWv",
  "key10": "298nUgq5eRbzD8gs7aN2AuaLaGoHVkNtsXFFxzK7Zk3c4kxTNqcYYsusvRiUnStb5gvo4eP11AQv2cB6xr8pmaCS",
  "key11": "4UzS3j7M9hm3KrMnQoNWqXuHYKKi4xZL8y6rJ7NBcb4U1yDommxLc8RgG9ax3HhzQbbm7NswHVrsk2ZfZbLbHbn2",
  "key12": "3h8hTWYW5jQYGi9dkhjeMqw3urwe4ZNokqTomJvELE354dPySen4tYC7YLzu12DgmdDi9RbsjAUsaNaMFePzSDCp",
  "key13": "25jfTZT7MZ8ZUUtZREjQ8LeuwhHjAvk92HCJ6WUncCzA3ar64H891fXjNRABJP9pCfhzfqpUy55CpiHixMBgkPoD",
  "key14": "5AXg9N72TuuJJUxUv74RYh8YarvVLBETxngvc7JuJKUYa7GbryeYsNkLdjbvMZdD92CJL29DjRXuZXsyP8KwmoMA",
  "key15": "se8EAg9GZebQQLVMw5tUFhwVDwhM7BjmXg7vXoDqkp17eGySFPBusXEkJGMEHGmuMKuC1mD4hnuhFSHSQ1Z15TP",
  "key16": "4MMqK6FhZEuHjaATboAauHi3hTSTqY67vEHecocrQ82ybx6JkRKuT5WoDm6TxDFfvbnv9sqyndkezTHQKMmrJN9r",
  "key17": "G8Vaw8qumoQgDP2nBuiR3zPvdA2dir4EfBN3DtvaewaRSrKgvLYgjAe7zXvvXFcXR4fVAS1zw14nB5GnE4MPWVx",
  "key18": "44CFt3HCdjdFFT8WgNXnaAHcB7SgoNKv1jGFUu4CZHJM2heNTxh4R8UjrekgtDn2PUeqeGQqYn5auF8Mf5mmgsd",
  "key19": "3EKUpxpLSDdzMVBqbH5dgYuAvqKWcwJgsdP3yeSRkUSGf6Fi6ufVXmx7c8o4MDEFHkBxBu84ZE75QtYHruP2hhTB",
  "key20": "2zs8FKSX4J7RFTSp4QJFtoiYXT9zAiUGVWieMWLTzhqvFNhRszAroYz3xCAeZpReLwtjQovBRoVvXToPUXZaa6rd",
  "key21": "nZbAETbT8giWF1FHW2c7gyR5BzTRtL2mZf1FFwyjvxrywD4oCeSKquyn2WSj9zsFQVjFADxX72BVUgx2msxE3Bb",
  "key22": "5XYFPaAa3mQBQRwKfBqkTWU6d3xeXS8E6cKiLm647GvJsM4gxqrJxQ2mbcNuNhBUrPzYNaSDha2bhuzWTRtjbiUk",
  "key23": "31MWKETp3pATrMTHzb9PAyX8HmFeLZCJuWPgxxpLxTs9KMSkh6cyWrYUkuG2ZWLVqCwz8NUZDE47kNRqDYaMLmHx",
  "key24": "23zaQhoy4avW3RySdJZGm5ztnxMLudNsoJ7eWrgzoG5gSHW3Y3J442epxw6Q8szogyvxrVJwNTCrdeDHmoaBTc7y",
  "key25": "J6D1nSUnQksFWBjq3jEUgwaC6pqFUFijoiMQMVwJ6sYzoRQ8CfUHtH45dtkJSZpiTv2Hai43Y9iKEyc2ntfbcWs",
  "key26": "95KKTjPQCcXfKMR4SwMRhNYtsTfvx8yXi2Y45ChATm2VXdXTrQsnnB9G3fC5h7o1a8pFgPcUsviprb85mornpdX",
  "key27": "RqjQj1ns413R5H39YaAdS3kfUWWB3yQKgvKLbM6cvJvcu5qBMHVZsU9gKMQAat6Et9A7WWmEPwnZVEnUcsbePKG",
  "key28": "4CHJvcQ6VMevkug1LXPMjDqwJ2czTZxzYLq7qpgM64YJ2CiyFb8VnujVwfs2gWdVU2DGX2WWWprYEyJiJF19reto",
  "key29": "5Ndk8Qd5KaTpc6KMFocomU8Brj8WnpMV7Na6LNKzeX1csof5vRudfuS1wLJe5g3Qs1exnk6AC3zn2tYibbVs1JF6",
  "key30": "4RKGihQzFZm6FVS7P1CpCn6CWbAu1AdCkRqutLHRh6BpzH9ioVziQcuga9icckUabsKiUqWjL2B6Gf5eztN4ZAJC",
  "key31": "4JCUUycHWEG6e7KQ1tVGoPMfjthAJ7p6bWdiRVgJLS1CynL9VPiJtZCXVqxcWDodcoVvYtMSGoVaa8RbXh3932yj",
  "key32": "4wL9Uto7yAm1tPPG1oSBbrjgTVbKwHNCwuv5jgdj3MoqJxYet3Ya2RSSvfsXXD4hJyGB6Xws7sPJLSPhG5rdvKG7",
  "key33": "5hqg18inrkp52AQN67vTKE63QBHAsCwums6Dh3pokg7mJi7GwsuXieB4FzmzYwLJS1JNVgZnWbETyuqECdFgAGtp",
  "key34": "3bAPog6oYmH2qnZaWVXYZytoouhcepFf3Rmg8git7oPBJ71m6uM9zQh9gfiCFXz4WgHHCu4eLWCC43TBzJ4AoUcV",
  "key35": "4pEuNmMtbieW29QZfdd8XaXEPbwZxbjhZSGasoN8cM6494AR5yhW1EYzcR9UqWWy6fjVu1xmvgwEQwonviYVaT3P",
  "key36": "5REniuSBJAd4fc5Jo8xwSdWGX1sS5woeu1DaNTMspihPF2sUNZ5GUbnt8cizfiZDX4vqmYv9QcbahkA5tE3eYQKh",
  "key37": "1zG4EGXY7B2gSTy5LKqZynZ7MGPRmPPvBYcLPqoDUcDaeVfm1T7wzSZTyCG71377LeVeoFZcwdY4rbZT4nmEZFk",
  "key38": "3BTWrrSWTz2QCXXaGss9RSS1GcaKGKGNQVWHeEuh15ya8w9uk73PBU7vG1B4WsQoQywusG8KD77mvqqkZDpsUXnp"
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
