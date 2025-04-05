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
    "4zkFX4v2cLcU58rEgXKZqqmeGChX4j84nSDWfQy1dkSf76Ku7LEsGbpD5Xh5PEyh99MqGTqsdf2mx3e69oyfJRCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPwwhaxU8DZxMpzgXRvapK4ZXBCQqzRas7H7YoURSgwDg84bDCTnBiobcu8695QmN43evD4NMShAq9EiQnhSxis",
  "key1": "5Jxj3Xbvf41L7YaMU5C5bmfZ3WsGZh7zDBJu7ZWZXB7urb7uP384JnutN1QXVavKoTo8G2x3aWxTEp2TTMGPfN6T",
  "key2": "h72Nk2xhvmNhxzx7UtUhmHBZkKkZQjZCbiBnya75VqvVa3hq7Yg9PjFztwpF8PjTHt9YfLCt74ApJsuRxSKbMuB",
  "key3": "2xLmUDbMWv2YAYcPixKYgRqVyqqbb2z9tFAwwKeAGuDMaXTTAqv3SUazorZzvzV3wZNNAAFnQaxnzsZwwtDakCmC",
  "key4": "3hNvtAgNF84NeEVNGYBxgFramcqcuywnnCTT7CtKGAw7G2FYNdewiAByxA1VWiaMD7XHWgxjzA2NxWagSfAbxWu8",
  "key5": "3GrARksaDVb9n3qiXy26w9ShTfhNx1RUeNc4rPzBvFYbgcxcGCph6aYsrnM2ErRj2JBAYJSmvqfyrfXRhnna3Fg9",
  "key6": "4CKwC2DisxVYCnb44KhmeadZ9cpaUdYYcttoNXKCEEE5jCA4gGSvBgPqs2WqE2SqFWZE9nvkJQzxd87J4jtq9f7H",
  "key7": "4Hdn4tngv2JCddnyeWEkCPJosCmDWRk4T7B2VQDaQUR1dZ4zmEhEhPbg8mc7v97sfzYGEjN7CRP5tXwMXik5cLez",
  "key8": "2BJ7eZZ6hjK1yUANwmzPQ2KJX4X6pUywb5gnDZunuW4THQJKvf9jpkE19rFP2nfTB1kBb9UsuEPEQUmSS7SWgWQP",
  "key9": "5uAgs9aePbs171b3qQwXdJ5DMuSmiEDczrGLrGv2w7kEHNveRNffMfTQmzPvodPmhFSiSF7dreNeRLp8tjr99857",
  "key10": "633Z9u8pf4PoYtLLNDm8zsUb7aNbF7DNUys5gLvVhMkFpF1Lw3p2PPUXp6xxkMQebv5PF8YEP4xjjHgxRJ6ncawk",
  "key11": "4kAdSDSQPCa4rhgvCYcWPCzeFYqMbU2y7ZaQFPHhkcZGjnxFBQoTNXToRSa56Q8Y8XtrKboKfPMajZuEma9yJGei",
  "key12": "3S5nyK2wzEGotsLiFSLtRYveGZo1tZmHPA7gBfDxZjPDrP8BQVdYfr3MXdhxFRRS7NdU1RLR9FL6bG2eim2U4FV6",
  "key13": "GjAksdQ6NLdEkRZoiW7fZvGUaAjyfeGd3aGL1dgrr9mSVqiVjpWEX9ZG8kqiWGY7jRMDLTHYsDqHphj9kL6TWPM",
  "key14": "45nkYETBzfUZT9NiYQSPSLVdAxbEAaJzbTDBb2pwRhkMJ7XevZNMz3pby9Sbz38s9wt27cy3UTiqkc7h5YkENJdp",
  "key15": "7rAUYoGj1G1xxEeJ7mksbsnGqC3zgV2AJQYhsMt3iuf8iVPUf2GDTGSW1p3HbACjV1q4Xi3DbKBNGoQCkxMYEqG",
  "key16": "2jCA8pUgD9KUUNxkq8FZx9i8tu6Vd6F6wgcdgxJBS9AM2CfF3cSScU75LYXaYJF2h4uAcsxoA9wMAwbBLg5DYYNh",
  "key17": "3WL2qEZd1B1dhEeEvSkNMWDftb2ivAYBDa9vrQEC9UhtXjH2ubuLcg4gEAp34ag87p4VVMrYKkoUzdWjfLbTNbgb",
  "key18": "4e5qFJMNUdhp6WyScoeRW6zpTw9stiCaVVFsyjsRwP5Th9bant9d3g22s8ZrZARCmu6GMhfkKg8tSZryW9WZKHAR",
  "key19": "3xN7eqX53rT6LDet1SSG1X63Lyi3VZjshcGfpmqFGTB3g61nxUswN8ZU5DhPCJ9n1e32pdBsdg6CtmbhkLqAQxC4",
  "key20": "367Gtaxu7B28dauYjhiJsa8TP2iZqQjXLNbcY23CR15s94GpDJZHe9CtdtpjqH7LhLtwhEUrFzbeyAZk4KjCyAB3",
  "key21": "5Hq5BGtiRQNxHhaL9kdqa45p5UZYuoTX4j7igfLEG1YSXjAtKggEAaP13eLzfTYd5cXgCGHBt986PXkU8hVjmZ9M",
  "key22": "4bQXVmuRHh9guSnmvYwyrQ9oY1bvFewzvrQb3ijWWz4pmvy7RYuHww1rE39ApDQjfviGrXUdHYqKBwTJmnPmkRb5",
  "key23": "41ptq64MtFvpbjKpUX7z5AETMVKxraKeEihhLrJXf7BB8iyeGKYLBuXMiDu9CW21kzMEmGX4EbET6ahkoLsT53au",
  "key24": "4qev7G3ecc75n12QRfQ6Q43er3hmHusgzoyc7VHpBVWsDWGLoE8vRXKD925Wjv76CgyMhF3RzNsgZcqTz4XMaBH4",
  "key25": "8v8WjcuE4GjGeF59KqEonBJE9fGqZumU5Nigb8s7JLqsrn6DYTLYmMnw4G54dnzzpRUP74nTSF6UbDK5c5SHi2Q",
  "key26": "2MbbR3hyrrzyt4F3fN1Bv98s3tLzoSbCDFj7gdbYDNSSKqbGKdjWCABhkTYCbYsxwkYx8e1TK4EVGxmFNbeFcpLc",
  "key27": "3iEX6Apz78uvRUQMhcSSfprwLXqGfVHfjPeJUJDs3krBeRBAEQgeZ9paFN9SdKNUHXmTJhS4GQ2Fd7o5VmiTgQ1w"
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
