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
    "4YruwSj9WrbWojbifvptYiBHAYwRv6HzheJ7sotfMrmS1EocwK4DvvSBXMGZ8nzDeq6mChCDSbXjZZ7wquk1dQop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ewgkjxYM96aCjGnWsWg5dhArE7wCSsAuAPPUTN9UXcvpwEdFN4niMhx5aUokgAKUfuozGEh3qhxg9zY1v6sEGb",
  "key1": "4xsJZYagEqe1ZFzCxzRfAahS6w4CyqK6jjn2ve237VwEhfFi68AnTZwYGZaLRt9WGmZ6SUNdUs9XAzkF3N9eAvwF",
  "key2": "2Yz51oYgA16FpWmPitS4DopCsYELiXmJicPTMoMa3scBtyJUamgRwKA4sFRWp5Lk9dY9hZVAUvyRjcaH7WQoiKD4",
  "key3": "5HQ2uYAQwfTqJxYg9XznPoy73uZVHK3s3Xt5RQo9vxZwBfoRg9T7oTqiDuubo4MvnMeCcEPv1ieJRMWu8NU2Ujjb",
  "key4": "2gnCkfniT8k3jVUwgUBrWTvapZADQ2hW1fembiS4bk497D2EGW24GuekE85obNUWGBAJyksc8EM5EFJbW8okPDRg",
  "key5": "4iSt7iPprYkaNtJAJsAwKE5or6UzasTSfLiwWowZd6JkxbYqp9dZAzZKJLxf5AfLbdzQK8d7ocKDXo5jSAKQprez",
  "key6": "2hmCvRApME8Fu7YeG4tzdFQbtVoFLYhAi1HH2i9MjsFNXuCwQthFvp7u2abQue9Asm1hXdkHNqLJj9jE5Rd5PijW",
  "key7": "5FYnMV6tdhoXqsPqeZ8bRHftoh4dwxswwf7PM2uEW3E897G9krjcSm3Uf4em79gB3qEVhjqMeY2eQSWv9nCtjBy5",
  "key8": "5h2G9ZJ6QMzkD3YiTg4cNsztNe4MJ2SSSKi5PJ3byX8Stb9E45CwHEvV6n88o2iU8dwLMVK2RjwWqHZmCrc7JAK1",
  "key9": "4NhYowTk9EQhhMt5Ti4jVnJAtnejnLj3ZNTJtqrH1nPUorLVStqgCZxt5ZogaFmoTgqcTkcwijKsSfyup2vLD1Wj",
  "key10": "48Ncy8ZEkjC2pdy4R863iG8dkx5oeWyrAxyHu8SoijAxC2A5SvRhiWGtNv1Ff6gmCye5PzLHwSnPjPp3qWU4zchm",
  "key11": "3ktNjUxVryC1jH9UZMYBpGrfraXr7ZPKFdRD1fEAuNzETrYh6u7yEVFxAD6Rm6nLDsAzausmZAgWAnNcWDwcwTB3",
  "key12": "56XEpMuERcHkSo3qhtqCuAW5fzj59FHcMCcin9R8ghS3dGu4GDyXEirpN72jFw3uLeew3ztyMnot9LLkFhjxYTSP",
  "key13": "5kGrmudGnR5u6Z2WHajejm61tnQVncWfJnno2xB2dnLoF3V19TMHNLtyBqFtPYxLw3pDKGESFqLqg2XocYRy4Hei",
  "key14": "3G4fVcMqTQWb3XSJmaaff5k4TuFQupe5BKAHm1QDCV9F1DLQzJUUpy9xpHJE3C7ygzQfvxfeHnQKMwpP8ytEy7UQ",
  "key15": "2bLpcyKGkkDu7283Ag2bixE22ZS5rDhG5RycK8eA1h5qYyav9KvvzF422quoiw73njSqBEWYvzTXTY7axdnUMd91",
  "key16": "5ndyqnZBjsZYC9iwHftDPKZqPCCDZ86jPXRqeg8NGFF8Wb26boWRKMkKZtomcYqY8BY7sazqsfyE6bLYfYVK6RNY",
  "key17": "2TYxqwxUTg5xSmAxcR3zdNiiyhUt1YvUccqRnda72x1Ux96pxVsUwBFse2jauqm5SGiekNq6n5AR3xbqocBpqcRp",
  "key18": "4ELj7Gt1tiwBAdTWkXGxSDLQzWEPy5h9985gWZR6jtiro5tbX5saAp7qzVGUxTXrqUz5DLhjd413TPR4TUQKZ99G",
  "key19": "5zmH3KhEi3f8YdQuSAYYQzHQ85oX4Mo32fmonyuGDZRpEHmnQuvHpnNGXCiwztjzgrBCCv25KqtmLYGAZYu4JF24",
  "key20": "2tyiYgo5ooowttpXDCtSP6rgpVNFuwfssXhJjUortfJ7iPs2QKvkYEzSSFBfyYihkwfnS2oAFqjYeyRB1nzsYUzm",
  "key21": "2hHdvdFgG1JCR6mpv5FY5aqcf7eApE8rdVnRTJNMCPCCcXrJnjfkJC6spKY1YTo9WBWxeDp7GADBEfXPbip68NbU",
  "key22": "f74T9cdLz28CMAK3xHxNrhkRNVBNRCNgv1y3udUKQJ1V3b76dVCrWtXGw7y8SLCR38iN33xB26qvYgFGdZT8CQf",
  "key23": "WXsip7L8QgopXHb2kxUjVEApXmznVj7dS9iqqMHt1QRjV4YrmAcUFqBt8xQ481u9CebTR49jBrS1Bk5Tvq5jJvQ",
  "key24": "5hJtTNUk8vTt2b8bfFcu8htdn8QeY5LPqEYpU2Jby7HH6irS8dXxrGJvohqtCvT747mEvXNZYfF2Den2K7iGaPbs",
  "key25": "3nuRKXfyuR3xt7FB6yuc7HYRr7vpFzsXBgP3b1sspu9UfZTLGzcibF5RASqoTuTztBaqroRBy6YqCeAk8xbZbhsD",
  "key26": "kC2Tx4kEi6PtyYLK5Q9gs5xBxUWzU7WQithYs296CMvQyn6bQmR2YjeyCz825CTr8kmf7PLEpgS9FTX74XdXYRJ",
  "key27": "4a2U9Rv4MjgYUvuQZ4i2kfAk6VixCQxm24cicxPeHFRZ2UmLcAkqPNZftz7RaSj1UuWkiokL4ZdgtT34DdVkQXJf",
  "key28": "u2B9GBiEoATUpZd6MdWRcNaAqWGpZsTt1cgnZ5V1taX7Dghq3GZLYmfKXu8yQc1CiZmgWF761h7pUhfvUBxLWs5",
  "key29": "41e4Dwg2PxjXQ3t2VU9uXKGA7fkPHWzL5tiAYUYQBpzycjH7UP9Kefx93712RSnG54hJcUoTnWeBysBc3WTyxGJp",
  "key30": "5RGNTxFRqmWAGvsPjhUVJ9DnpFks5GVsyg3BDhKGXnMKq5ktzQpievjyHwMVvuDLcz7PQcT48egBa62z14m7f9K5",
  "key31": "5HTs83nKE7g88NvAQwzQ9vLdHgDHReSmoSb8pncbTJrXo7BY7XckQ6N6g7esxubZv5Q4282vZM3uPG9iV9zcDiL5",
  "key32": "PZZUkEj5WyEsQYgHNuBBmfra8p1aXQQQa84DjB7orrPdWToKWzsybxZQxHwdngoY2hfTdKZbyJnFE6K65CK5GDY",
  "key33": "5aviGANneLiQSWGE5RdscmVg1XPgguE9jp6R9QX61j3aM2tSNVajDuaJPhW4kvEcNdPDFzGMreqYes7JqtmtCXNz",
  "key34": "2LFWAY1PGznkvwZtcYFJeiB5BJX5HdgHZHK932rqPkUxT76DK2ZiTBeSH3UD9oZLkktku1qD2fWAgNPx5mQWJzhb",
  "key35": "5XH3wh5SZB8L7oPrtUN76VhaS3VtAzb3egwAPvcJiM5h1KyQ7gUAacoAdCjHs4Ffuy31RS7jYg6FuP3CK927fmKz",
  "key36": "2rX1o8fwj7LMjPrwVJ8nnqZxnR5X6Vz7K6SuHBF45dYCcd8HA7ksc7wTfc7vdmi7eWm4JMWqvPKPoVpqF9Qy1VYa",
  "key37": "4AFZ4AEUhnh78GwnUkK16E1MMsF35iBGDJqxFKQKfkvV2qYgU7Gs4WFkgadBNEdbwj3u4FSFdUVhfoYHLTzBWaNv",
  "key38": "4StrxZ3ywUkTG14UQNpbAfrfFcaQLw8mmzErTauTdvo81oav8ktDXbStxSXmSpmg7UjQ8kgKMRong9B9TYdXNY2f",
  "key39": "snF2FaEP3ZUrEbTr8F2pydSndVr6kXtbxghpNH1LihDQpzD9PRwqoR3UmFLWrCHFPxCgpHC9xdN6fWGcD8GFVJQ",
  "key40": "cLtbn2PjU7hrqq85hh55wKp9kheAtj5myHCrZL4g5f5WFnp88FL9YPCxA5XZqjnanQb1EJNA8M9DevHgtFfRM9G",
  "key41": "2iqE29qcu26WpajJd5HY79AzVUNfFHh5KW1J9kyzoje1n1DdAPD6psBUwmi1xajBqH5kDyhskhFouHQEC7TVsNCZ",
  "key42": "5MnTuZ5sxPpg4eCuGXZB2H4qwXeAB52QoYFYDMQheMxncEy9x6fY3chjCD6hhryeCrVF1uU8eL1Ukjtz66wsnxeW",
  "key43": "oCu4u47HR8hMvXcWQS3WRUEoetcPKYFsGstBZrDbDPZzxvue4gAPDG5j5gc4t467XQfT3CZ1JpmwFXmf6JEw6R1"
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
