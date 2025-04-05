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
    "jTAUsKzuytn4ckVemd3j461vDt4kJSkqNv6bA3bJ1H9vsb2JcE81Pf49ivEFTEF2RBZe8CAjiFTwiuhULDgkMgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YyAbkWQXK86RCN6bV8zK5DXS5C44WKgVxQ8sN4CHz2f56miJgTGwKzuhSkXK8RjjZJRk556g5jiF5jeAqTkikNv",
  "key1": "X3JRr3ySyANLDxLZGbck1EHM1QMAwuWRf9wN8ydKsW6q5wEJyeRss4Luwt17txJrycVZ7E1Axz8wH5nuJ7vPxP3",
  "key2": "zRZN5fTjUBHpoB51yADLTPNNvGkztijx2Zyt9pHh3RhoL58jCzca1LWRgW8tHJRfUyFbc1iahZLhe8PMBRUy1o6",
  "key3": "3zz3NUQzFYzXsq5Y7DjSMCM6AiLYAaSBHe9Yn4a2J69jNZc4GBJRZwfepgGxB6Uwri5KLgKCWqmTxaAXt3gETsro",
  "key4": "3TarTtWcHaMbzfu7U3NKKJBZcaP5Vu3LqFUrkcpToVxgZseG1Lit4kxt8QikBLoR14akK9xVQchDE6Mxa2LupnXy",
  "key5": "123hyrCchy8w4MwsRWWD7AZaANuR6HY2QBDpAKbTY4rVEhRAwLNVRAVUs8uSYgwKx19T4kM9dUvR8jBZQnv7TnyG",
  "key6": "2xRRmZrcgFUXjhJVP4aji9zfuYzUMKy1tGjy5eY841Edwvn6fuZqunph9ApjRZfiUifCY2b8YGakUWcHXA8JxgpX",
  "key7": "4iiR5cMCzNanLYBr7RNTpsvWvELCN7QxNBtRRUtBVTRQbDAYKESf3Jres2Mrv48rUBoH9q3LyQBRqdZnQHMAcC17",
  "key8": "V6vjkijBwgwkFKss3VFYGq3qTLEHWXEu6re2SMr7VZWPPkRBSLqh9RXtfLQP9a5zDcdmLNuJEP9uQwPwfTKANWd",
  "key9": "tPKnnorCUQngon2feFb2XQ3DhXvjaX8UUywjM63ZqKwrN6CYU9rxTsqjtjNXxaXfHcojmmFAasXg3SHSHxRFaPT",
  "key10": "vwaaqxhGZxB87hB4HcZLC5n53S3cSXFonDhag4NeXoFUeGGYZ52CrV4AaroHBebhiBRcDoaSpNiwjoVEiQQpPca",
  "key11": "27eZTvYh45KP4CvcTBCXzGLMbZFUr9BYrcnGufvVXrtB84iJS5t9KHhumZpDf3nP9PwCNWd1aAY6EhxL5TgyDYUh",
  "key12": "2x2x5BAzXU47FEwk9tf8Fjq1vt1EQB5dxj3voffesasveNmm7VPLQqvLEasPEM32raB8b6bBqg2sx3UQASt4g43y",
  "key13": "4S1MZUQcQJcpkC4Y7DMCh7ys1MmmnTdekkNAQF2DTKvkSvkzgf2zYUcEwXvjG88VuNemptRoAkPwjP2YzgtTdaC6",
  "key14": "3pmQy5fgMzgL5qwYAYLjXWsGGasrVBpfr6fK4YVq3G2rUEABdFANoGeYsYheJwuHQipzLugAgidPFrZEX77JpRDL",
  "key15": "RSMpNfYfutKmNXNXsn9oc65ua2o1X5hjeP9A8BPTNR95m6F78eHEF1yL1ASVptezvuc5EN7yF53iH2dmkB8krHQ",
  "key16": "3imjqm6KTGXyFFmNpW3WBAY9hmZjpUkoGjdsrvm15ap1ATq6GjTiCMvQ9iqo7uTUqhGnWi4DNwKuHeU5t6zCMTyX",
  "key17": "27Xn4PtYa3tBzN97YM7pbZo1rKL7eiuN9W6NtqWZgp7GiKaZJE17Qm2gMBNwQdeMhyiMxd1WrES4SDsjktoHEG7B",
  "key18": "4GCsNTBW3S26tMSUUfzZawtGpzz7FzwU3DAxNj863Ue4u4k5AgiESZEAWJC7tgL9NoZxv7AiXGoJqJSMv1SyXXUM",
  "key19": "5DVNrbu1Wc3XfvExGTMF4ScbpRt3Dmzp1t5tZEp3sQ4hhN6ELYattNTZuTohBmuSw38RoFXhotdZ6iJYSSqCGamG",
  "key20": "5f7cEf5XzQ8pNDonCvdVnrLzxyPM11mg5gjMAkeukkUXjDRv8dfeTXJvYcCYrQpAqaSj46NRi7xkcFpgVGRdLooT",
  "key21": "4xeiNkSpm1WrXS1jBs77a9X3H71Ee1H8rTacsqV5NoxkqbXkrJKdAjjGng6Jt7UTkM1kSBHCvvhHSSiytBtCD6Wg",
  "key22": "4kQsedb8HAWWHQXfybjHDgy2xZPaDPqaqmAqzGJRjuUKWjMXSQzfdfBRaFDwLL84vHN3gfRqRhXHL9XA1WX5nJLQ",
  "key23": "3Awx9ftLxTqgrbK4n3Uo6PGJU8fN2sKijoXrKka2RWgiuQxwgD5ZNeZf3MUxDsPYJTvgu6VBHyyZpe6mLnhp7EJt",
  "key24": "5hFp8K3TwVKahSwW593XnucwYGKp1Cs5w6YKi1nMycgMd1b4uJmJdA9rvx2NXAY6a7DhJknDMUw64oZyyN7CH3DX",
  "key25": "4MZNScb7pYyZr6iNs9KBSWxCcVYXVtMHzCW3W5Q6rKofgUze665bVLV2p1TcU4sNhwcjRN8JeagQxfJVW6Ldu5Mh",
  "key26": "3svh9iy3rnrRv7WJ2n9v1wNjuHUPBJ7aRrLkGwzTJ2xVZ2u27woRJnoTYSL4NZmg9JP6rkhEMuvyUEKxZXzg1JQZ",
  "key27": "qq43e8waF24wHXMgGYmjRjPHSL7rJJtQijb1KgqwjQ4t1ZzwPB6C4A1yKGCDT7hdvQsT6VisseKkDTMKHNYTzjJ",
  "key28": "2DfqkjdmPKUYBLbKCB35ErNC1U13p59YHVnuBVqpNQuZvaCAcCTEFeVDTRmvDW3VxkFFV82JcAaucktDJKYtw5YZ",
  "key29": "kVFTgUkVWEBo8yXdsKs7V143JLcB4SpXaNB6N9sm5WUzXCWdor7Mj1LgtNVE4v8UrsKPeT61ipjRZD3hAyTJxY3",
  "key30": "5nzD8YeX4rP8WsJPyzw4YavUxw31xA6K7a22hhKZvBeurWKjasRiYFvDgCSwMAMm7vZejgg2jSxnAMLQ6MQd3dJ",
  "key31": "2Z4rLsevnuuPeAtsWj1Z2YsZH8hJmuvxrdm2zMKskQRWYkc8P9MLApK1SCTuHfqnvpdeXMYNw9eqsD54UXKiHMzJ",
  "key32": "3vi6TjyZGiwvfbnZASdymJYNsD2a8HEARHZZupvzX6oBbe7oJtLRvVhnEzWArtB5powdGo6Te5hJnQpBwrzMzVkx",
  "key33": "5WAirW98y2PRq6QfSjSqSH9MvaZ5LuYGugS8wB1mith81at1EUNi16wikS5GvPxd2opxtgHGQfbFBr5oid6RnrUZ",
  "key34": "3qFDV6vHgqsV85PBn4dWhHnLsz8oqzMQWZSF2gawSWbieYdxsgNJQ8zGuSJMyAv3fmXTqF9HD99T5Fb7KCH7iVcG",
  "key35": "5r6GVsxEhDpe1PEv6JrLRT39TNP95WUxMJ9JL6rTu6KRKsSCNZNfLK8NaiMPaxFwrJWsRAt2jLJQchTPDc6jsPFv"
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
