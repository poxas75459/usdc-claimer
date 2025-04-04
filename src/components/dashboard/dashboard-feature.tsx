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
    "3gBXU6Hb6AVCxAQj1e2yeG15Fhxtga9XoS8u31ydfgE6HHhdYcbGcdw9nvLboVULwW5qd4ox8CpXizPwkxpdTi4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jUK7igbKpCTJRnveuap9NKqZeX9gaymbHUS5sLc5eBTzVbfXN4PkyN6E4sR2PMPNK8bQmJyqz4EAb36xfoPQyqA",
  "key1": "3Xd1XZSUkYucc9uNFVCNGEbjqqNcbKxQSbge15DBYEfpL1KPNL3nqA88FgeHVwJpKVsgV5PRjWYs9sgDsFzQz5u3",
  "key2": "4xwa5xkDxTJYG4BKqUmXaDR6oy5YkBaZoqYW8Qve42PUDixXEfNkU8NeU2GmHEbMeh8i8zPxvA78gbpP1yT8yW6E",
  "key3": "MXNawWBoLmVkT8PaYUy1RTZQNmdbYncR4wzZns9rF1RiAbJXKC3E6qXWvEnTeUdN4kTzCwDh2m1LbzJDeoKjiUQ",
  "key4": "5xBnsWK8mGm7Q6sXwhfMktcCJ51ZUq2ZGgbweGQtKNiJtBqZZs8wx2VML8C1QzShryKhqRvLMQGJv3iYY8ZPh8hM",
  "key5": "o6hXg1PRPPPySyVWzYTHayWNQQEqjEqHQQE8qVtp8yJr5T6LbU119NsFH1Djz1dh21hMQdw8ANbMiUxLBDFJG9m",
  "key6": "2Mcwnycz2CNzF6bzLfiYcTUGcpciYSbGia3rJe1ThBTVhaPrw7wgDVo8NfBL3VnaYsc1RFaRmRZQ9bGCrVCqzzEZ",
  "key7": "3mWvH4qipaMGgzaCmRqHjNT3QHG8zFygwHKSRMCKrY8S95Xx88NQSzJc673Zz5vtWQicncdv8K276p4ChCY92U8i",
  "key8": "3GEm4t4S9B5kszEiW8bTYSYZyx1dfBYvyQ4Wcco92Z5h8fzjA45E6ZySSiD9MWLWhVsdpPRCoEzLrEFcsC7Yhbgu",
  "key9": "65BhEnMUvDkZLw3csSBsmdEfjToHU7nNCC7BnC6nrwz4y3y3i4N4qwRJ9YDCriaNFPChGF9e8BTMBeSMcqQLsmMP",
  "key10": "5xsXFjQPnUKCfXgZbc7pqnb8LgTa2uBRhVVehMJTfUEqjfRNLDX8BUfTKVyqUnZm2BoqNaZLZ5LcrPKKZa4nykrB",
  "key11": "3UcHfG4oHGVGo6UTB8yBk43Tpc9RmasVJ9aFTbc7xHCsJrJz1cKAb27DyCzcbnH1aSA7zpa9nZP6J7YqpDuDgWbW",
  "key12": "apnhfgizreEczSKtSHcbngZQRXWRa6R957dyEopALZUjnLkqAwt7gYzDoja15tCR6KJaGEvmbSk3ZfGtCVsuEm1",
  "key13": "3MJb7EiNREvmxag1EknHjyoJGn28W978ou2FJZAVRV9K9mpcZpbpnM3vnMdx2fNwxqx3MYfQysiqAvw5W7mNV3Tk",
  "key14": "5LXtnfLUvPvvWmrae1KzfBrSE9K5b6BdxMiXyXjh1aWebTMvikJ9ZY4SYmhmq2UzNmnB4F7aLfXQV2DNUHFMTDiH",
  "key15": "2U4FCUZCtPk9HvZWYeCCkdjyzbkMY9HgVzuLCT19KptWUJAMZeC3ZUpF3zbgYpw9Li6E3CpiW3Bpbug6fLKYdtuX",
  "key16": "3jg5tfgqaUzpve7Fq9pHTiBE3S7bh5j6vLftBSPADSKvSd7UhxSFcUWmcQYbUGzV6vyyMHPw2P6KaSfKk2bCkrKh",
  "key17": "5CxY1NMH5Jvjdh9se1MXuf4NkKNLYZeWva4UfhPH1seFY8U1JEH8pBHZpFhdy83iRSTKySzuZmpYp13RDi969eDw",
  "key18": "4jLvt4qksmYm3RbGCRdNPuyMivWYAGCGFcpCazWdXtYJTn86nGPDcsHu2wez7Zyirbt3sUXykW3qQDFctA6tnub2",
  "key19": "4ocqqKCfpCSDFJHeh9yynCLWoc97TAEjamEzCpNi1cejEGS62eEbekEvaET8oBTaDpcppMnZLiCMGZjMNijtSYv1",
  "key20": "2WzisheZrNZrVRZAY8ApnuNatpd3EBE1gCQBhdBPzFK3daQuDxw46BqswxAHHNxiBnMUvaT79CH4SvK9QeSR5AGC",
  "key21": "2rspqcdUqe42jyxGYgL1TbsY4ZJj685WS3qcSASKnHZiHsaECTqy14nX2MqQvLgH4ZXwwKXy79N7BAvrF5C8oRbR",
  "key22": "X72JEM6U9KfyGtv1zWkg3jAhTeh7ndSbqBF4y4eee5jPmhqqa4r6xpXirmEDxYXvKGjo6RLJTSpJss2vFFdyabh",
  "key23": "45pGGnaMB1ZAALoxBj4HWayV3HgHbLKSkePow9BB7XMSPg41uDL3sy75gTYp81yz5nYoFh8NUy19AbvodYz6FxzS",
  "key24": "5AYzUQAroKDbATxLqpDgbadQWamvwWDSuTfTpj12o8tpoTwMSogosRrFdMzN9ugM5iJimPr5friog7MwgoJidm2F",
  "key25": "5oEUe3EyWjP6L2BNrZypr9beWSuJUWNxqefsm2QnsXqHrKocCRHYsfB7D2ShB6TN5CHgmE8Egg9uYsVAmbMN6iPG",
  "key26": "3Qwn8XkiU4ZKJBawy1QdmBn1EoFevEEqgUGLwhtHRkByMjxNpovVQ4kp2pwyqep7cTVu8CgKwUnW4tR1ndU1herz",
  "key27": "22HEejs4KJ3ZR6fstpeLbGCjFvyJP2JDke2ni2ij8iDXV7ET2jzsvEfraz7zqGoVWtN6KM7XLGc53i9xfRxSwV8A",
  "key28": "29E5oxCgBpd2S1FJrWn889kFVATE9t9GbBZtMLenZwunbMgV8WNZjaQsjdHKyC9ftc6R4Z1ZHYNFonexrVCvh8a5",
  "key29": "n1zRTdzFTqDQB5VKRjGwwML8gatRr7P9oKa1vHZCWnqiCdQfRNY5ayXXmuQRZXuqJs21MrUMGt6jojhV2SZmZFe",
  "key30": "2TiJ39RNWnzNyiEUUh81yWENHHm3tt2K3YjvALEKvuV3LAnojQ4NgjuPFL1ag5Mk9tAqft7AgYspwTBs3H9BDK2F",
  "key31": "WZaWE8LLg9kbqEncjz5njSLEFVFCzgmdYMu2bVgcegnKivzLvwckU5AKXwHgPHVci1Yrrv5L41srYgEHdiMf9yH",
  "key32": "3Lyb9otME6iiURErnu5y9Vxz2cvBqD85v367e34EJQ3kscvKQV74GGvAhCJwAqUqZpcfRqwFpai3Wn7wHj9whX5E",
  "key33": "58PQtkdfuFwqLx5Ap7CQfhWDdTWtmAVH3CE7HJyKpXjUg54gU3sZrhsAaxBnHsM3Nha7zvwFNoDApqMM1598eEM5",
  "key34": "5cubDkFKQzyffkz6228Tbdn9cpcxZqv53zoLeqUQeJPtmHbaZTTH1RSiRueATUxRM4uYtpabyGvGLsn2DDYLSmR",
  "key35": "5C3voAUP2LpQ255SYQsNLTE2vYNzD468dAipcvv3jLJJGmfr1Er8aCtTxPM3FGXsFUbFHThaRM7LNFVzQCW5NrFD",
  "key36": "3EJeAukpqYsLdUzejzMqPYbZt7TcxQMiPuYsURdpZXPfPVw2P6eh4vyXpGqXZBZ4y13D3prVrrvPcAhsSKyASYYZ",
  "key37": "4GMNKtW6JzzjgBJJbVnFqA3C5Y4vkwQgX4MCQWvQi7h47ZPJEahNPQDbjv4j8iZZdnyWt2g9Gd8EqM7LJuZxfikM"
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
