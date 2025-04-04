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
    "4SuzEBtwQ971cTfdA4ZrYHg7958gA1j94MigAoqUkVTLAzUqVo1DxAyiM9jVmif4MfQRPY23M17L2BnBUWnATqBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FUTAy54hMRXD4XvA2d2ZmgqHAwXAo2pVVivKpbDrFYuhEAezaBEGV9RYdfKeThwQz4TasczMkMpwsBxfxKcoyQ3",
  "key1": "2KM4JbzhKD6x23fouJevmq3xUSL71FVVJT9tiRQNB3r5BpmXqRXgHETCZgk2HeCmH6WoomLzcQZEVaoCvipYEPG3",
  "key2": "DpwscNUJ9Mx6d6fbpTA84b6EEpTfuiAiXE9kgS9RUs8Hwsub9SZKi7GmLFKgwz2mfEdwSQV7vyac8tctAJ3Bt3N",
  "key3": "33u2XqrCF3kdxe3YPznjPsQpEqPX1sHhR8u192sQuHF5vbyk1xieWqcwM9g1zvouAEARska7sxLREVaa6czbXd6K",
  "key4": "43MJGwqtTYciLvx49p8WFBfV5i62QL4iH8o1ZLaC6zWwv3XMThJjz9PY9vM7hL5p3aTxR6u5DzJTirkgWkK1aWGX",
  "key5": "5NzfHTxrUHt3jGvdz5ftXuBcXED56RkeL222ETBbEnT2kBKqrTksQo3t9P6Yx2ec6kcTgSz5Q8vzT84JKhTBbZuV",
  "key6": "2CYBkmtgBxsUeDJ2jzcKHxQettnzms8XxAA45gwFFvSBLk7GjKm4JVu98mzYPCEgdJ5PbCCxuHpcL2pydFmwECDn",
  "key7": "3CKtwuJwBdkJcki8KntzaD6ieHd4gbDaf4998yT6VCCzVoG8sQBk7d8AG7DhvFA34kJuyirVohnu9kycdsoiQBFQ",
  "key8": "2FcT2Fu7Y66V2cJfy453H7gpFTVNq9yCVq5f2GCH8uECSfJU6b1fsh9vcJq42VP6HYaxvWKUEbBdb2THpB6uXUkJ",
  "key9": "39A4BFP4phtNWBM1mBFFjQh4E73ch6P5shE6MG9xAwoWNzNVdyFNSFmPzvfoAqg19unJRezg8pzfFFMiuDeWyvDM",
  "key10": "3YWphHwbmeqPbG3quUQYhWVuwyT4RMK5WHhczhqpUqdsuCUzjP7pwACSSQZKtkk5CzCcnsviuS8dPThRjwzWqSEz",
  "key11": "S8nqQK4z1dV4zyXqmLUV7E394JGoqFcdKLFSnA9iG45o9GQKUwhvgPz5Rivsvf6qti29UdveSJNaGDnYGt9f5Kt",
  "key12": "WbWUCXi14mgWAi5ydwiumUEx492YA4HkETHrFU8wMCyfFbVPZdEhLc1TXqk1YTYi36MgfpM2WiX4dPEHkbMfv7A",
  "key13": "EMY5a6e2gQVMjRgZ3MPoYQqxkMdRAJkeNEKfcYEV7Ky7KqMZ2bH3Q5ktXyqvkTVZYjLizzhAUAXqHJqCvZJoWgk",
  "key14": "5VjPtjy4uqhUnBkonkfUhXXWt8oMc75maQAc7Wvtdfvyi1dJkq2HpDSvZ1AVikaJv8xs7j8C3w8DuWgb1mG1oeqF",
  "key15": "b8iMj7bRkHzV4yzCcjUhbg5U5r1kJFgzjZf4HWd8cS58A5N6Vdz5pC8RK5fD42fUR9NviB2NEUg8vK455cAMArd",
  "key16": "5dWxNZPt9ZvhZ9tA4NSv3t43isfeS62GmpATNxWcDkGgZ8PowBcE5ADocAou6wghVR2ccrVWZdDtx9cBgD1RbNdu",
  "key17": "3RsLXymPLj6EofpZEgqB82mocqe7pLXY58a61zaYnWUB9XAABUbJgyoQnUJqSgmsW7iFEiTvLc78Wqctk9jF4mKy",
  "key18": "4GTf9NwirK4HErHntsjXfywgXG7xYkBCde5AkNGgLg8WusLZg3Z6dmV645RjEDgpZNevcuz6j94qKjushFJ1zxw6",
  "key19": "5cGU4S6qyjt45z2MXGg4meec4qp47vmeCxafcrAM8ZJ91tur1cJbtUBkKx9ZwqurtuyGDqhSGhJkJHv6KDLjwAD3",
  "key20": "2TwEiByqAzMPQm4gDQoN5qyQBiAo57FKHy4KD9v7v9ot4Jcv6g16BXJbBfMBTRUAc1peMdSwK9Kz84FRiswuWA8q",
  "key21": "2MPFgox3r5Qp9Nq2FRRihexGScb6JVmUoojgRNJGjZZxtrFkiZQacJYvAbsAtTxSWBdWqPPZ6nru7VW7DghUkrvX",
  "key22": "2LdGxfnjUrAPxR1RY4Ln7yJzSMpM2W9ygGiEBCCiuJuCx9Scye4i3pUdEJz72z9WU13x9VtWvE5eZDc3ui57oxrQ",
  "key23": "aQUsLCE3YGh7XdXTUqq3X7Va6PZcYjdJ6ED1vZKQVdukdSuxEScwXUqHc6zB7bqmdk3LH64FMz4sFQAjGz7MjRX",
  "key24": "kvGhhZfo2nk11f6UZ3bwvuAQ8R3R9NMT9b6Cdah5NRLGhpthB5WGjsWXm11gBHwXyhsR9bQnj1o7uPt51aQboqm",
  "key25": "tz2LrrageEznE8dckPucKLgCWRR7y6b8nVQB8wmwNHSJZH67RkPW7sfr6FxdfKivK4FqRbUgZ9kJF7U8vY64DqZ",
  "key26": "652UpRrzrzd1Q3AfaaZC45qUescm6qyxVt8KEJgGPgNdN8xGUo3bZKAVUs6Vi56Ebk2oHiMoVK2bKdmgvVa1Cdxo",
  "key27": "2ELWqEwRuq2sUgW3txiHats88jhQGWqw3irCnFka4Xd1famwu4GQwTh84YvNihfDHS9WVra6KrPdFr4D6JjCnEaS",
  "key28": "2EP5wxzLaj12z5wFWRrdHmNrDyJp5yhbYDm2WV2cQfKkum8v3NV2wn3pjx77Fb4pWQGu3yysDGNonP5WGmXecnUq",
  "key29": "2GySPzYnxAeDdq5PTFwivzucs23TDp7Vst479W8EEz212nVFhFV3ajrSRBiVrExtuwkzsybACDwLCABjyDi62YfA",
  "key30": "38jirg4yPZcBCRZnNXPQC6Sk5kshpRnXVj5wnJgpnAbCSVGTbHrRtpgPe6tr1S9ZtNBeMR6wbP6K8VMAtBNUG2h5",
  "key31": "4FGEmYfxwuqzSQMEJx4C3A1iQrSPz4bhqL2HEQ6nNhYR9nF8dbM4eAqRLte6n9DWBtD31aKZfKwj3a7WN1X3yRmx",
  "key32": "5cfbKVj5QHxieECWrrkXMXKw2P7HrFfaYrfmrC4zu7uSDucza9qyycbCGJcNkpNicwg9YrimqoneA4gwNPnc6dyn",
  "key33": "23VYJsJyb4bZSwsg9mjVN6QeRuK8RUsxVe32uSbknM7wTGrizK4cwq8AiX12zQCwRcXsGq3mJ1vEeCM5VYzfEjmc"
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
