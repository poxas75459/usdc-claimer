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
    "42vVeYLmrtuGUYuNseX6HG4R3Zs1zqw1GdPmYtVej1fZGXdHkMJjj3Mpjbp8CoPoYFVWsYsRZtMqvT44ZaFiET7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YtP99s389YisFHzX6tvjNw7EuGDkSj2zhpC2yveuKdRgwU6ruDR2FnZoWPYzNCidHQBDaqcuoXzpb89pzYPZ5gJ",
  "key1": "4kryKTdzex3HjwjyH9qBJFmrtAct2QkL2GaxaYmfyAtVHCYQDsYu4gHYPQ4YpauZb9U6yjbaVBQeSZ5pF7TBFa57",
  "key2": "5B5Au5jTFVbdWpK14MmGNkjZvvswHdpmrJFYa7Gp9seX1WaF64ASc46cTEwosYo6otFzELa7yauZk7SLscvUE6Y3",
  "key3": "7HBfBMD5DKoZJFDeyMAUYTtc4LAxBUxjh1QETLzDkJ4G6gohDdwjakvZLGCpVyXcjDjusczdbMydVvt6SGyXakx",
  "key4": "652D2ieBxnWYssomoPDenQn98sgKbodfo4DJgxuqPYQ5WBvPCTTuXmuPXwb2WJQdhXnjYhjKBFEJgZcpoJyMsyPr",
  "key5": "3smrpsERrmAvpuqzSzr1EuKNDa8VSYDqvrvLLJdqDv9E5r7Y8igQntAumoBWfvrTDU6UnRjGGeK9d5WmqEDYR6VA",
  "key6": "49U6DgMwCuUVbR5WjHhoNR5dVEUMWejPJSQmNt3kc6ev4pnH9gKRLioWvRi6YZ7PkUnW63ktaHzEacGc6w7P91XX",
  "key7": "2icESx6fQVxpNwtYc6ZjUQDNvb8Vjh541H9SAtzcBa8dppZCgQQoUBZcwbFb3nFPqDFv5AZjWfkSLykKK4zdJ7LJ",
  "key8": "5SHaDAN353WEkkM1CiyvXACafF9T29zQQkdGfnUKbgZppWGxT1jP2YuFNa5YGXE8nL7ECGJncXqgE7q1zhWReSbo",
  "key9": "2cGBYw9D9TCxsexdGbYMpETmswnGqY6tVYQ1BX2Sy5yuGE41xbNHa77VzfbVH9qFpDdWiJfwy26VJ34xWL6ypVXC",
  "key10": "5M3auTtYZjTXC8Xz71PkNHaB8zGEjc1gGxGuaJhVgnFz3vPU1Ub23abvfaerMbiSZ98AkXfNsJBkecjTB1S42RpH",
  "key11": "36D3pS7yufVSVR1cMgocKYjU3vJL1YjFM9Wvd5opejrjQfrkDmTgXvsDh7UURhpg7cXTFkPSGAiz6CHePWwyBoCx",
  "key12": "29FR9Bh97YPF9H7V22KvfGvWRgKKKMFKhHf5Q7DGesGrziBdEPgwxmNtLwShVbe8Z8SVEPhUfr9G5yzkgVE4rJ1T",
  "key13": "5ABeQBYqDZxisiwEeLaCmd8EXCVtoMs7gyDp8FLBbHNK6g6L8RvEs1gMj8XLMjfSP4e5C7fLgQVGG3HppCvmTbbo",
  "key14": "hWeaM8tpyPgaeVD8eyMtARsQ23uz8hiJ3TRKGbyZxB17TqpQ4t9kaLP4LdepYTVTpoKiA1PzEsvUjYSoCiPdVcU",
  "key15": "4ZvginqLS3VBZHKdLsdByeJ5GgExUPzYgjxVd1NCLPBsmATkkcXg4NXG47aS1NBfJr3AVvK2FgqVt9svcM915sAy",
  "key16": "5f3RG35WjZacjhgDhLPHR8RSKCo7kKTaFnCALDEht9zx1yvC8benbGduDsy5mE2AmyuP2qit8mrcakHQz6yccf15",
  "key17": "3tBbFxwE9vG29JFsgL2q1zuurgQFC8vokU3yrPrwFTadpUsVm1WPZXG6WyLFoc5iDX6SaBLXGW3Nwpmjgez6SjhQ",
  "key18": "5NLubLcjmeBaqxgRH3HTWpBd3H3GGZj2CJQvvSCHhcNqVd6iMSYAaDT8GiTPxzMUfZQG3KsnnpbmWc4eCCbzm5Gg",
  "key19": "3Gyek6SMAWBYT2Roof77fyyG8kr3Bduairbrk5UCrYCReC7kem2B8y9AfBVVi3rTS4J8hWcap2vdr7WV8DWVQJh8",
  "key20": "WmAWqkXLaXGvnvgdraFUaHffgKHQMFPqd6pXUeW1K6ZqBtCd2qHw2EY1gz1GuYMruUZBuk5pUfXQTMCLFuw8cMB",
  "key21": "3RDZVHb4cN9QbBh6GMjyFuHZLrV8aKNH45hEjW7Jmve8ren6kttC7An9sQG8hcQtLPft7iCyqeQNcFBywDumfvo9",
  "key22": "3NWetYCtq66YcHJnmE67hyqgEpd45NFqeLeKCMPGbjateqbRgY3asrW5xXqPQAQUwFpMkZMnM4M5BaQxRSoVYdjX",
  "key23": "2b2eXChnuUHvu2xRdVPPDpewrR6BPzTEhDqvnBe8t8dNTppNP9fR9XnPWCXR2mdcJaUETLVJ2o4kTGWHrTeoxj4",
  "key24": "JnPExYniHhrbyV1DfdCd8iZvfe7ZHbUBMFyb2L9pjNCjLyXSQDd2eyMk7Q4wYgFPs9vBWMDv9TTgMZbsx7x4ziu",
  "key25": "64n75j6cR6dnJgHSc5wY83MQW5MKZJSChmv7aamYmHJY8yc2kw5nJHfrQGLm8Wy74LHL4kR2w1JK1n8j9APTuGFm",
  "key26": "3g4fHWMeZJgWZU7MUAXPL3PChkbjZRa6FmDmUmy4576SFgdViCyVH42TDQFxcn5hY8tTByjthJMGmApcYLjv7uio",
  "key27": "2FX3pSbncsqdHGz34eZSGk5yUfSXhDxCbYT5bVUbC8kXA6f9DJxPvM8XehmQaiMFbEJMLuVCg7ZdAxSVamB17A9n",
  "key28": "52AMEofBcbX4e85vhJYJk68uSxYFQq9MEUPGF2urUokEbr5JRshK5sSwQgUNbdUYXWN9kroGWf393MHn1Uz4AXge",
  "key29": "5VXQGBchBzh7hLHvSitnLrCVv4VvmT7ComiVjL6ieUSs6W7JSHCsTVc1Fjawwm63Tkby4hMjwsK9f7Jt77NTciNj",
  "key30": "2noGMBxQ9c8v7vyr2XYpytj92yY9aiMusfXAkxRQgzuDhXiKSGNxswHB8gseMgXqQEsj7rCzEETNAURUCe4W7vLN",
  "key31": "5SXAvXP9ns1M1gH5VncDW7AxKbKiciPjgZ1an8d8MBXXSzYqcgQa3EdHQwyPFo3oWSDY5FBu1ZhX35DTHRAsjWTG",
  "key32": "GZg3DsmkyRZiyJW8CsEoQUCJbT278ejyfVgH1qDUWxMT74oYon5ejNaecpXKfU5QnmcLs63it4WEAVEv7YZ7pm6",
  "key33": "4UaymDKFwetikGX1ZQ4WK7BSfqMTKFJ8wZ6gGD15Y8pnGPfvLqZyNKodrW7dzD1T2z5D1Q6CWG3HGeSrY166cSab"
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
