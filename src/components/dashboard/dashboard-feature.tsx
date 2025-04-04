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
    "w79tjj9kjeGciAxmRTrqFQTZFAp4ncFoc7wYAY7gUQ6yS2pUhpkFvWm7vpwxA4Kvp4aXT4g4daNScjvCSt3u3fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ld1xzqwVy5Sb2qT4xuMWHDasrC4wwhz7pt88EXxVSY9RZTBsJ56gQkj9URH7bA3bRWuERGmvFSWSPPAiSEvsqdA",
  "key1": "2JeztPzxvFvTbnrubFMxwAGAeZgAnPTg4JjwKx2pSHfzbx8znEhYshHSXnAkBuHtNZqi1SsZHdw29Fe2rb4YsRgX",
  "key2": "4u9b82jE8mcSTkAypzMvB7e2u24e6gvHh1Pq6bcfKY7njQHrviZuqygYXotsFnuBk2D1C3o6mAt73ZBpuMsnHVwu",
  "key3": "4j7UERkAavXTA4tbQUxvGRihJtLQWXqZ2rDgwuNMhVsoVKWTo8Vot5d9viMozRHa8SGnb4AF2qC3bencSCKYJQvu",
  "key4": "5XvK3Xq8zgGXB9Soe7ubB3P29pNyjBykpoqQ2WLFG5H1JJqxza7GMSyaSyC45CtovjcStJazPS7UxRfcvjvQztgX",
  "key5": "eBQxQdzojmLPNXnwaNvqTiUpeCgYxtK1fvFJ1VASoDF6AXQ3HaoWqLAMqHmA9r4yGg3LoB5XSonNBNrH6djtZQD",
  "key6": "5TKse7VeLECisbZC5hwWH4WhBQb3NHqaGQ2eV4SCAqaG35zejtF2VGSMWj3gKsQuyr8CDeMQ7ptHQkU16R46KQfv",
  "key7": "2V9QbunwJDufFpiNUGJThxYJYygxRfZjHpTYrKMGwYLAkncZUP9t5hD18zhYgmXaWLFjRGhCFz5kXkQPh1YMAcfT",
  "key8": "5mqRtPBCbChrKmVqjzHtZvNjE92NB5LjswNyYd46kJ9A3kQARzyPFVrXJW7Xz17uaTi2RwDHiznekyGi7aKd45FJ",
  "key9": "2zhMT5UWNnuMAneCA3vfTDj7Sja3j4dhjpx2MeKshC6ZSDYucQ7FDckzJXEaFMyoRYXN7Gf5SUBHKEZDcEsXfefD",
  "key10": "5izJKsBdGqbMek8TUBUqZE47rT9oBZbepATbfMMFmSonBWpyFNG8Js7bJGHiYd8oWzXHYo3xGryFURqKmMS53dC1",
  "key11": "5Noa1ABCtqxE7JnpHNZCfPVAdJ6zYSx51krB6FU4HFMAhYgrqFms7LuVHV1qDvU1GfFY8P8ExCDm5WthkYabSEkb",
  "key12": "54APdjpvm9NiqTjPqhapQHr5k2G8L1sNZfsqf2urpXjmyNAWbwbEefD8sbjojDamHEY9YWF7wY5U9RFjuPrvSZmC",
  "key13": "32zHuLRAXMaMLty2c6gShnxWv96JBWvJMFwNtaC1kEGF7kocxwFBa5Mdysqo6k3FeYJ2GX58Disesqxu8UG5k1bX",
  "key14": "2TBZKwGPdTpbE1c25SYGNq6pa9Rjt6JmTT8zpzopsB8XrHLsFyXySFXCbyHhdVEMHEQyvueV6TqkjZRqebwK4kX1",
  "key15": "5ChCjoJrP6B5PWqnDmvAoGiVMxTkkUkDJKZSAkGW61b9DJn2eDVTUNe9QX2bgwcZfe2sX15myqXjpsTYS2kUCD66",
  "key16": "3uEmfwiTJF7hFbrhxqGs2k2TDt968q5AHwAHQ58ZFa3QpzMkMELfXSi3KxzN4g2tmwnC8bBUPg8aBNdXrcnq4pvj",
  "key17": "9bHrNtgAbdN7rn3gyVpYpd8g6CVfF28AV4oRmHNEtXoGQMjDu6mG8J2PgXcQrRcLbbCxTgUyGBqub7ibeJvVFqX",
  "key18": "4J7ULoh2aS1W6z1qgsJzTUxHRquYa7qGqcda7shDeBRKM5wuZFHt5KYMJnFqK56A9fqRHHsLT6yhiTKCju5KRtqB",
  "key19": "My37eKZn6sW4fxJCxuzhCwqX9UVgQ5u7nWCUE3VNZFbdow5SucihuUz8JtvFhSFWcwx1TQLYKWp4QsEsFgHu7CD",
  "key20": "u4W1uu6XuGR85jPb9cLgjczwCvjMAHjEPK7pQ5PaEjY7XJwEtsaGKZDRzY29acXgqjM4Lo7xC9SL9Uz9bSN5EtC",
  "key21": "3DKoYznbnm6pb4Mq735sxXxoCBgjDavYE89gSP4MnbHPuSmiDNgBnZzeB3bXxmSyS8ZowQ84xzYTseSk6YgNnRCh",
  "key22": "3JauHhHw8T6KERUgRwSjYLZ5kPaXKj7DoMVpux6SQa24rTSfn5uYGt3Bg7qfcLxRCU6ZTqBr5GWox3ANBYgqZACV",
  "key23": "4AVeZLAvbZXkpDJZsgegpDanLVXUYQj37pn7KjHumtmARyXXXdmbUWhuxjDpeisxFk9GKdYBuo2SXSRGh1ocCsH9",
  "key24": "xP31PgkRQ3efKqTLU31sTyxGZjGLmPp27bnk7Efsnorw1rq51puUbpHk8VFsyLhZesxZYHhBfhr4q6hY69p18yE",
  "key25": "54nTA6bPCDeGGrz8nAsAx11qmpEErhwUkG2bwkhS3gfZRP2bhs4GncL1RJwtErM51mGS6LCSWk9nQsRqsvc2LjdH",
  "key26": "5gDmpC6LzBkE3AkzZbG7bzrXN1Cq4oYsw9By8e95H5JNinSpRU7QWRu5nUcBtJPteBhsDHEix99inoPSEJdLtWeJ",
  "key27": "VFnUZVDYDsFWEZvS9izR8z7YXcZgYSQkX56WZEydNcYZbDpuVXdW4bNBGAXGyR6jnYBUi7pXCPZF3mmkc8yV26z",
  "key28": "4fSwGLD2vrhLUwtzy437cX8NtGfzsxLMrewU5LEino3vFwcrqn6pJGmuc4X2MfnpWMw8mVZiwXo6qdyFfE2p9Jzx",
  "key29": "5ft5iuf3YW2uq3U4RhgeQCYRkjJm7sxd2RaWbm72JYs4eMukenr5XWZ47RbvTi1PfjC65CbNbhbD9VPG8avZPXUP",
  "key30": "3VLUBJxr8s3C5sLwtuuqNqbtgGpcDg95Eak7kS4xzknszhmmyFHiySKCM4MYs69BNTUbHqK1kz3qwn7JvdUvs5tX"
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
