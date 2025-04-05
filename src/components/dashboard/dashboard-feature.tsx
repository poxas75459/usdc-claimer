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
    "5JEmSKhd2TozJerEH38aT6F6xzN3PR2cKquMmxJbfk39Uhf6KTMFQLpCQ7X8wjF6Pej43doRXqZDZPWz4HMNTHFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21DcsZrs38qJ8rENeCBrbZMKUJhHSJ3bg4SEFoRrNRNCeFbHaAMeZBvnVqa3rN8uLES7BDkV64gX9k9X3pnDsDcg",
  "key1": "4iK5dWNRhNFnCuhgCFodX1Enwxjv5JY2WSyZmWv9zqkoZpAC6qvPZK3t9cintHFMhDKm7jupU9HfNKGLJyE6SQN",
  "key2": "1wQvXZKMFAvvGhYJe8NJBgqXD2qh9r2tgJLD2wADKZSvNzKvjNCt3VY1B68ixw7duCvtS9Tc2R5uxbJHyNkhXa6",
  "key3": "rX6TzvSP7A3jbo7fodnqWBW9PJBcpKZoeciXWQqwQZhaHMXdz5fo3fVymd9k3qUtFhNB7quizhpFVCo5Z3tjVJV",
  "key4": "3TrC9Lde6Pwtv7gvZBuZWEU415AUGX8miQxbRUs1AyqG4xVgb5Z3mye1odaye7izknQDAkzW3UZSyPgQBWHUmaEy",
  "key5": "3aopE7eKUvNwqynP7mzzrJFSC7eTSMnEgwBtzHTs11LZmP5zPRSyHGvZjGWYVfn5BRGn5LGRFyNxFYqm6KFB9Pn2",
  "key6": "3kbqyPXYD2qBhRmWD6dLCMD6U8wKnmqEaSpPvAWgYsUnQ2wb17htuSojNWeoKmEWVrk35759mn2YWbymoeGkgGfr",
  "key7": "2Cabn1e59EeAGW9BxSZA9vxb2xDSSGjRjQSB7bg87rgxRJgbrGGDXvJfULDdxCwmkuUqnSzTbXrFt7c8y34aBfVm",
  "key8": "64VvP2RtG6Pa9EJbqrXWxyAKPPU5TzbM3N9jexrGr49Je2gCEUddmDK5Rx7ASBigup2YGygRbHBEd58nqh8t26hg",
  "key9": "5y5pEx7PyTkMz5KWeuwpQsJNoYm1UrT7ybmkQfScfqkfapJzKVmp3rCKHexqZoDyTeiq4kBAwWps1gzfMvPedPQk",
  "key10": "34V2FmbRg6X2BuKvBUKKCWAM5G68m7eLwnHeUVQhLQRSAYd8Ki1BEsN45eqAhPsQLQz6C5JS92pNvfUS4uKAcfc3",
  "key11": "3FmqCw33Ksh8e8aYY3ya7zWemhjM2SbKN9pVCuQNUqVgzonpzUmRvjWFsomMViX3MdPekX7QNdbP6PGo6m2BzJyg",
  "key12": "27AaNt8FBEzNrVaj1ExVXx6FzJwqBRsdgrae81uTJYArwX2i3gwtG5n88iRAqWnYAY7ChKL5X3cawGLj2HVbQ9AM",
  "key13": "5UdwD5sKyAwhw9LLhtguEGVnr9XJ5sWjbPfEBbh3aTakhNAc4AnJaEd3EDeiGPGjaZ52vVRMkYcRNeP1beVb86aJ",
  "key14": "2Xia3Ane3t96Cm6C7WP2CnpcKddsqxPV6LFea6WNMkfMTLvwt9CgZatRNRMQUP7rgdRhBoz4hu2ko1vka89CJWay",
  "key15": "4s5oDSkbSJT6CdM4WmFFsQSMPPS3L9pwxbvjiC9gFjobUC8ekCemyq3GL6qC6tTXn4MjJSLj7K1BX7paEYQFFq2x",
  "key16": "2HdMytUL8gGa2DhhqbTMc2fk5uyN8YGNc3QZ8QViUnwnnzcjCWLGmjPJAjinbXVyuHyB8JeFVXTSxmvTceuwpWb4",
  "key17": "334A8iEMJyU7vee5jfJ64EBEH9eA9c7KqTwnNuSQRHeg9Rapa6e1xWN3a96zK33nN6rJdEJFBXjKfxsrHSAi4Rdj",
  "key18": "aCtjGVsxDcR2dZCSTdspdc3YmRGiB2V4PAYFjM3m6CMjZK5DAF2dRnt454qppRm4u2WVpqKkysuamVzzfXUZuAY",
  "key19": "4wmGoe7Q48wXnRNQMssUejaY3SY3rgdSjkVhXLkWJWykfhWXWtMEzp7vsVd9DQ8SNfM3szfRd6NLW8KHREL9ryoA",
  "key20": "eRKcM2QtKXJKiTD5tFwDXkePFLgxq3gQSKcbAfqaNWAqr5kLt7SrCWJweTsy8kvx4kqjRRsiAQfohc253wYVhQS",
  "key21": "3jPQMKtJ1HVhYpKYBmFaZKPoNEnoYwMiwM6BUm4PsoozQoQJCJQ84NBYBrKDNNE8Q6QCJVEFGShhEci5w5RrHuVi",
  "key22": "2XN3Rkw5j9ToG9rkXGbWThxfuCgePGtrPbW66iLBPgEWkUa6zCvej8SxofPyVZ7kGx4HnfsCDRRRnKUk3759WBh5",
  "key23": "3CoSvo4eyMG6CQe1thiEhzqokcDWaYhNxFTx8j7eRYgeFQDugeTygj1hWZDRgV5zdV8XmuyLnyDXMTfgvpcJMc1W",
  "key24": "4YJTsCTA5Qfh9QEpxYhQkGnp4Tt3YfZoK2myudzLtPHWihxw19sjq3Sx8GDaUBP2cS358ZtoDxeJxeigLHDqVXtQ",
  "key25": "3P4X6srEPeWNo7oHidRhoNmfKJxSVmTpKSpbU7mLm1F3krGnP6WcrBGK42Gt3Yqha68hW2TMAhAbgGjBHxL3TySq",
  "key26": "CsKDePQ6LieHgd5YNPQguN9Z29mGNmyWVfSFMPvGkTaJ5dBxkg5k5tRNBVENc9ZaZHxPEuBGdHcV2RBdfpaYd1c",
  "key27": "5QULAKSKsiWFTWnKbUqm5RJYbZnRFWMxu3k3Vr1euCxjTC2x4CmpaEdQW7gHgCRadZF2rUjHPr3NRs8B2YihBReq",
  "key28": "5iNWziW3cEYKLiDdJACLdGAHYJ6BCLcNvHezE2L8mNYFhvfAYAHsArWJQ44itmLhgShpHSHDLkW3wcnFFX9vSwNP",
  "key29": "TLmEo3GAbX6JTm1dhE8YmTbC4CAbwAzGGYK1HnAcbjLQnZFApj8hAC8A3MjnzgVDRGguF5RymukNJQx7eT8CNR7",
  "key30": "3JtwjUJTk74Y6CrAXtdJdToTPQQLoNDg1QMQNWDZLJmJFCHBgKhnfLQuVYGDhCQpGNVG7AnyKzJRpRytipfmapi2",
  "key31": "RGohBfscdQs7gFpbr3j7di424csEySgDZ8ywGiSaP2e9DaWqnoodZbiUm8PBUmNww38sNrjHxqNDRAHM6cmWKGW",
  "key32": "47jcZYDgoqDQ7VtswqU43zWjABaWi751EMwFUwkv3owcwmAVKkn5N64Gm5gWyk2JWDPWeHA4sozoV6mozgDzNQ2f",
  "key33": "4mDJEkTf3oFQf9mj7bJ2NuqxXb1LHtm6dn2wtnHUJBATEuyCbZ9QGYaSWVPj4LSuzjB1oa5U4wkj8tzC5CU9S1wD",
  "key34": "3pCkXudGw94R6YSJq71WzqH5XsHZU3VUjoeX7q47UoiBV2KPnDJ7TCPp2KjhQ4cS3Ec8cKC1jxRe1TVR36U6ibDR"
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
