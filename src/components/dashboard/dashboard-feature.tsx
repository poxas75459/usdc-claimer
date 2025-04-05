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
    "4hL6ViFqj1VTfh3XKosPLq3SoYPJE48oBAJHQez9wRjrfW8j9Tua7MbBpqsmTSzedKpovnAGCCTLLesDCSzQSKr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "248SgdaZNowBHUdmAXGS47A7WUc1wu8PmuETVdvnDSJwAigf7tU3urdpGBH2jt852p3ZiYLQk8NGnJLbuwYpDh6A",
  "key1": "3xvzicKGNucjTEQ9iopoMYRj1Bu3cf5fogzSHvQrxnMXLXe2z8KUygDMPtdHYxHPcXaEkodFMcHACJqJE35FvvYv",
  "key2": "oFFLU1n2aYfttjXHukufJtGRkf9CsuCvT5dAMUxeLNnT4vtu673aZ38HvDdNRVXeaMY1Nov3Hqrio8vFKxN9y5c",
  "key3": "2pGo26xN8vgFjdpStQYiV91LTYZH4gHCKujo1Z8ETS7UrYRx8kXg8NdQHetxNJTgReBkqCpXYkuuapfTSkvDANq4",
  "key4": "3CS25zSkdxjNuJ97A2CXXyVfEZ7aFR1oud49UzjwWF2ncktceH7GEnbHghCin3828C66SvFj5uorigwHXwqra4Ee",
  "key5": "21GDDi33X5nDCKLExz8nsWp6LEM7RmEtwYNH7WxPUqLuAiihGjJLQpvb7inCvKzRwuGY84PM1arjHvrFuCc2iCFd",
  "key6": "5tprtSXHWeFiSaZDpkpSPEWjYw6DaYEiohDQnevNX6LjHnEQYRNCR93YMwQkMh43bKRwYHZNbCF96fpZ1EZFe66e",
  "key7": "4jBpo9SUqnG8UfwfXBSvBLcRcM5g1Ry6nkkW5RHit6Dy4LRaGMAJfZWwB3QrTn4PM9qSXCSaq5jkaj3HzNzeuibr",
  "key8": "XKn1qDNsYgc7PjmVvafX6dSK1H6kGw5XpJnz9qs8bEoCuv9tzmM21TKmP9JmrjiZ6uyVn2xR7ha4w4kR1yn1NYj",
  "key9": "2x4dix39bjZxu5e28boHm7TGj1en86o1SYLN1S4u44JFcVrDosBMYnnR5aPpBJ5PuhR5wD2RJxGhhuPHwK9Ya9mP",
  "key10": "47iHkEwQoovR7DZS3z25F6NUs3E3mLnKXs7qvsHXo9icQVRYRvLhgTmxpimL62MQ7bekTdgQA4DdauEfAp1P6dTS",
  "key11": "3Deq9EbNNPbS48d6be84S5nfkVw4UMy5ai24RmzPHC16xHmn3pcoqwH4bV8kRun4FKmVzyES6E2ZuSR1EgMKKMz2",
  "key12": "5N2yitzeFSDd5k2t48VQY9wq9Ad7ndPwbM92nD7mCzujNidM4hemoxAbbji9UnLVqvjvABz3zABM18WPat931f1z",
  "key13": "4M1eWR8vHEikZASpk8cHvTuu3TNkPMU4cWDZpAr7MCGQrUCeuPSkZ7zCuwiJpYy7Gbtb3TihbUQwrDm7cnHoRJHT",
  "key14": "3CME2a71T9JPboHoxNdF7tFfT2rbYQXqUNy4VKcEcZUSUcJXfZgAYKxG9X2ymqhEYKteGTVyuXjyC1ztyDHGRSug",
  "key15": "xh5h3tjjkxqKP4uGw9cQ3SKWfEUBCX4jSWXsywuPwAFacsqxtGRMaX6Qp4x7xkmoz1DXZbU5jYt7nYZviTr1XDP",
  "key16": "3K99iWcugSXEHxh5gybxSP7tUp3UzMM4T3qBP1SxDim2AxubiYrXwJx4aaifGeBSKhsC5b6i92r8GCivrtYDxRzP",
  "key17": "47rVeTAgoY5cQUSq3eZb1zWutASzUFovoUMj4HU9dA1GmNT34b4hc52k9ykQbiDi9W1muCFFRhX5GsZRj1CcqfSf",
  "key18": "3ir8xdvik4HSJwV4cq9r3o4EVtRZf1fTdsjwUzKawPqQ9Tk5LXiHaZgCVipBXyGCWccFLhRdH8VaP5CnYppRYcn3",
  "key19": "2ZvcqF8KAzjBMLvDkcexkDKK8L5QygWXFGKhZgAi5YgzefTLWsiTFHJyb9yvQom9ZdTMAuRfZWzRxhSifNGiyKJa",
  "key20": "2gXe5jQTEy7bW4ViE8GvUB2S8pjCLPjdKXC425TypfqYCta1fPbLzQovKM3PyAHJjFQdCeSAcstFdGfc8bUihosv",
  "key21": "4bz1yFdMM7Hsyy1SpHMtQ6hZMdutRF3D1eAwjg6YAWjMkBzwmuV76N1z7v1XKXKu7gP1xTAtMSr8KcDxfWSWLj8g",
  "key22": "FkdWJbwaBjL9yb9Wh2DP1oF9nr7BrJWY2yNjsLVRtDoWVnWoVW46x38hLtF9vghBAmAs1m3kJ1w41kc81QoDWUQ",
  "key23": "2YPQnSaPNypJX7QVGJBUPwdjvocVQcyo2EuDdUTPurSPTbzPdQ9J1gXSQjSusUTt2bWgvdrCxEVdtnZkG6mm8Ris",
  "key24": "58Mz1KMDZbWQjYNxP2sZpffcfR9qHApKykaosMpXb3y7Xpv5c971VkuFE5SZMiNKgu4FNYA4bqMLA88CKkU4vGYf",
  "key25": "2VLxi5AFSm3zXPpCYtm2CWvXBLUTF7R9ViBzy9rmTaWCAbGs3WVzMPbU7HRWZDQdnXwWQT5oXCUz6ga9V7zoJuYS",
  "key26": "399scWyzzwasiD5K7yeSGAvWPhJdyWfriSjxrpneMxsQCqrUdDvFAmv38nvYoqUy8dTWf8zN4xoGRPpKo5ne3hR4",
  "key27": "3UrBdeQfovsvGtvF2kx27aGmvGDRmkA1cF8YMJfMGtg2cbB75f5vZLPXuQDRXqkMgxPEGYyLU2rGju3g7kEvovQF",
  "key28": "2vdS1VPirVrrJewfniqcZshSBzDZdwJLX8BPC6idNrVSNC9SiKkjDDWWWrWXS7TgyKzDbsiCR3g6bALWnsebhhC8",
  "key29": "3MYfQcsXHFrE3RyN2cKFL7NevF1ZFaiVgqWbRqFGvwVKjCXhgYfSfyVcMsp6wKLiijap4GjwA2otdCDWKiq8usji",
  "key30": "5D66BrA716s56nPp4HTgKdaFAM8nDmWPgBXGuc3dYryCc2i5gZ6Z9nbzR5Nz9ihNZF7JL2V1ntDBL8sbQdNmdeCi",
  "key31": "65Fz6VsvhwPFDWSDMAQCr7Z3Ru11puJVvXWBxzg9LgfgCKXqXTEVJrCQAyBckeFweoAgctLhFH45jCCybtPSoVeL",
  "key32": "656XxfxPbDxJ5rbjvCy6yowj7pfttogRAC79u8xNQkXQ59TRYkaLU8ctCjT6i7rUWKEcNMDPyoLiTPCKozR4gsvZ"
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
