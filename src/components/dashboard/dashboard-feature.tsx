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
    "5kZXosLnD2RN7xTQTRPRZFgAgYLzHB72MQT9NiaezmKEPS9iKHzLT7nAKx6SV3R3JruaM5eGhNLhoTabxjEB9tRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45XZTEsoZ3WmiUK8XmBntUFJoBtousNTPeEfNGwxrC19NWzAtEGWWeF3znmgREDCfaiMqWKgFTdbH1zpAjUhFdWx",
  "key1": "39kVxVJfJFzX9XELdQNgukDaU1AUnM4sFQ3YAHJUGTjXtwt6t5Jt32czeC46TRpoe69R7SQCJXSKSPLYTNXD4TLR",
  "key2": "3PCd6YYsULq5b2WAgFj3bYm7ejkHYk74g6zEXoTXv5NASqEow64ZDRnHAdLn6MC6BoYdVDyN2jAYpp99PNGNpTt2",
  "key3": "5o84rTeQwtRUoQf8awpED6qu38iDk4rJmuDPUVmVyWWT8Km97uiVeZD23owLJYWGPQwEr1YVqG59HaPQJrZ47iyc",
  "key4": "2KJFgcsnDApUwcAxH9pA9g4Y4S3ZJe6LCEGK3XTPqfqHoJ5LLQkhWRBYbmMkAvdqbKfzF9LWXZXbwqJP5o4GSc81",
  "key5": "B4Aj2fgfKLGLPHzmLGcpEnkgJCiHQ48EQuCB6kgkNSmkAEAMJK9wZ7nCSYaSuv4UUCXXeJgRy6kLgZ2Xwi25HXq",
  "key6": "3Wp8P8c9cPPbSgfEfjkgFMSqfC6DfQPUKa5ewaQpRmP1hAkDtSBHQP4ND1cvuFCds5hB3nTot7jvuXpus94tqSfm",
  "key7": "28dWWRRcGoMYz9t5dhrs6Dbf8RSeTci2otWG1xTzseci9vG6Kjjs1D3M8QjkoYefjBoG9KK6QHyNMZfgPYXqp5Nq",
  "key8": "3n91R9ZAqnAfKTLnH1MoGdRPyRD9dEPETuxXCAw8sVJrHprxMw4cpodfBT9NwuFQiCo8m8RBR8YSeuCsVuqgQ46M",
  "key9": "3bsNsxhzatdqF6C1RuSJyJnXCLd1XE88BgVQ1vgqAWm2Zfnmvmr7TKbZ8gjRCK8sZYk5TneeeyvaPG97h5LRES7A",
  "key10": "3NYezFUSX9xGEwPHV4ufdaN8QD9T7EcECm7tLLsU8NsNe9nf2Bu6W5a1hUA2hCHKc5FW2hT115fZMFKEPBGXT94r",
  "key11": "5j8Rj4JEuYQJCCidDqi1eCiwshMo4fkb1VhSm5MA4DFypM9cazokxitfACRVeirg7NHWHiyQeCCXAbu2D1KTq6Wv",
  "key12": "NDsaKJpaGT488g342Ho7JEAzfFsnummB5Pp5SHYrNae1aGPQ1V5wFewYZqdBtkLqawvjFWnvc8tQt3G7jo2aasU",
  "key13": "fy92NxGexTTGS2spZsuFNuceXSC9ZhNDHBJW94bUNCXz5ki8U7eXEym64UPzUZcgEnihDHt963qvbgrBVLsZ4ua",
  "key14": "t8Apaqv7CdhZT5Dw8fQmqzh6v7CdTZ7BXjpptSJv7X4A7TnLEh8dZh2fE5nYqtrwWSY21DT6Lh7b6jZEPKhmV3o",
  "key15": "2VKBGgtNBZzq9a1mWwpWf8GMVrzkxb4TtDHZGBrtwtKX824uPo72eXMXehT8C3KHJNi8NzzErAFrVoSyrjA6WRjp",
  "key16": "3fAXhrXGQqKDnMHQMYAmWmf6N5rGLDEHDNS8czGR99YSqqY76gvteuBTLdTUhNcf82LBZJfW2kcH5ALAYbHAkRv8",
  "key17": "5hGsYBYvJ3y6yUbAKBr9PB4WTp5pa51Ajg4ao7GstkWjAMF17aKmXKoqpWhMNMk4m95zZKnu9qog6WGm2rb7hUhy",
  "key18": "5aYno4rMMbJaQJAcXK3jFh7FYiMcKDNcQcRg1ddoWd2wqoMhyKcErJAKXZLEpJbctmwaRXGkVXpz1pJJj977JZP4",
  "key19": "5QoqHF8KiQEKUwY8VHQRHcmW2hKaBqfpwtcguzhdXUtcKq7exdsXnAtwCeJeyf8TpYuWWHsQFgPpjU7BpC7RFojG",
  "key20": "4JCnmqPnurpoWSaFSXC1DcRKG1SagJdwuQeRFEmnpz6ofSBFfFRFqfR4ijuUMq4FD5u6RCz5S96773SGX12A6S1a",
  "key21": "4BcdSfTn6sFkFE7dLjM6JzNo8wFETpM26c7iv6Bo2MsFSTPZN4uFWGEXm1qzuMdfjeV9qNfi2fwnTc47Hi5ktBLV",
  "key22": "XQuQDYkoEwhDdGfqPZpVzZDzUuNQi7WERmvDxpAfjbE9Gjp6ZUCokSEdGT6TWtMa41vj7GEYXE7LLtXxsV7tH4p",
  "key23": "5BprQyipBDcJ5fiZFHz5de1wduQ23VhCF22B2kdgaB9c3xvBYHeLTJxmoizW2afofRsKe3d3kyHLdQRFgJNau6e",
  "key24": "4qGRPyXKkjRx2zicmkxKa4BtwdsYbMK7DsY9HEfVjpgBz6A9FrbjNTUUKnGAJ3fxTph4oGP2ZFcJumihzNtGLarG",
  "key25": "5k2DZKtW6s3dV8rvXFCaQLUBZooPJtJ419RJqyyRjypEAPx3aRyvhs8A7yVZqJWpMgqF5LZP7kEMn4qN7HKysDbN",
  "key26": "9Vhaccw8gUWTcR2jpfE2ceZrH5Y4siwumkJADQ6M6uJjLbKPXD7jLHWLtsdTxPWo9i4tQSgGQDL2VBq6gmrNoTS",
  "key27": "4gv6PyN5Se3at7XuqTXZsXrgXXgyjkVzXrEvrzir5tYyL7j3k75WWFNNCmoWnSGVDg9XfSS1BdNErfHCfaZmh6NX",
  "key28": "26DHQYjEUUGt33SigXEogXm29WajAPRh4CvNhAfuL7rd1MQtLUpvo5uXThJWJStujshuwoAHb3NxPuDdNDBFTuXK",
  "key29": "pqKJ5nap3jKTuiG3E34W5Wk1FsGDNUdqYSZop68XZgzUf1pdVnPKaPVxZUSvEn6wkBG8pHQkGZG2EVdJAKWiiCb",
  "key30": "2DiVkxXMjmCAZyaDm4bH7UDZnoBoVx4bmEQrz7PjaLJcbBH5zRLWBf4TqTVHCBQ2JQTbLRxhG3cXdthpnoiu1hv2",
  "key31": "kaDLjWBhQnjxiisRy3NDPkfrXQKa1QHzX5ejNnebq9HS811yzTV9Z2c5ujCi1WNvQGjC6tUzJ4PvADKRroUbNVX",
  "key32": "4V8nabfa3GRLKr97MkHDsMZLbVtULq7aKTDiRVHcV6y1corARu1L1qc47YKqA1kUVqANy5fWnFBqGa6E1GigP6HQ",
  "key33": "a75TcXgtaSJ5Sq3mZosEywsycSF5vL2C5fK649Fc34ojdqC5cwrJMVUdXrUA4RD3iDZtDKN1sSJ54MM6LsQB9TY",
  "key34": "2uvjqf5F29VTFPCnXvoAvFV2vjaSEARJsxn7wH53pENrkbcPrXHMhR9qXf2eKZQKZDwSi2VmPLhBcvBwWJPTyEkX",
  "key35": "54G5VwciiYbvqcdFfQna3T7tPoHLoGdh79YVYS4rzzMGvMiQJhEmrHcnNwo2Bop2eaXwsQQFp6qBzBpX8X4uptHt",
  "key36": "37s4Y2EvttGstX4kfZ46eXj9Tgu2UtEz4C6cQPoVK14mcRDz9nyEaUqDgNGAMhs3dk9iWhN5WMZUX456UQyMoXn9",
  "key37": "4jPaoWFbDfm3a68jteBuBRr2dTUAiT79cavqHpApxMiaBL17BPx7az6FkJ6VBLfVjLxWRnrQ4uaRscXAvaUb2ghx",
  "key38": "a2NsViBUcYGaZJWaxYxBtYDJNE4g1i2bkQNwzv9AbYESLfjmVXhE8hZYaE11YxnW9y8UVAQ5CjBXcB4fu6UsQGe",
  "key39": "4unpEaFgZrnoT3YahsZkkPoG8Gnu2VzYmACctrAmmBq9z4gR5gMdBvR9s3ErFpyXnEKhZmJYxav6CaanMUBpGLWf"
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
