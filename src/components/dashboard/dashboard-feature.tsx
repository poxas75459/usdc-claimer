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
    "4vteFLP2wYPCCUZJJpRoPU16Zja2eGXtA9EW4rnL44bb53cTDi6BHSPDZVBrfD61DMAmjNxQkympYPtyW8nMPWyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7rxxnf4JwMk3Xm54ZPUYsjaf6xpPkVxUXP3mo2gBQBWzsm2KWM4X1TcwJwty7tqQtXEWbQbjii6xcshdF4cA6b",
  "key1": "3RFWmJ4ZNSW2Y1Vh3NMHMeEQx36V4dQUfjekXt11UWMfdWpyPyi5BcQoq9PoSpDHCReHLZPEa636JR8LaCtVpuuz",
  "key2": "4M4XEUm8x7aCEUpq5W47TNUxNxyWhLevJdqVhB7D1HS1VpiViyjJqyW6RGrdcockvYMco6dgnsAiXMyisc8TBuLN",
  "key3": "5TL1BKKRJ29oRzefQMZudNR7vfM117GTxBJs2mnUkPQAfuNJqtt6qHzqK2khGK3SwTRDmjatXoXy4QuYPq1YFT2p",
  "key4": "4iKzM3xECVxXKmxXfpxUbvkimm6hx4aL9ycqCPWzPRsCWm8qfokUPEAw3TdyzC7KWmBELzz14Gyhz5TKifFnGzcr",
  "key5": "58hbCs2XeoeTyghhfs1PwVWqTtdYnzV4NSNvp2yZ8rNV3v7AgtdBEsvE7kGeNXAsGwNnxS1bcTkPDuCsXdBnKvhN",
  "key6": "4RHDmw5Jg7wZ3hAkXoRWA7ZbEGBqVBxWpNTHQdrWEadvaiQS252GzEv4ghjUSWTAwJaenSRjjCDPKfzsAsDQGbbG",
  "key7": "4J4wiyx5u2f8DkbW9Bum4JS5uh259oDmV87vorJSwhCCZA6URgNL16HHbjrCu9teektB2F6q4szQXH2XQL2jeta2",
  "key8": "58FBLCeyd5fg2ZNfXGVNpkLCjJKg9DkGBjA5iTBjXV7K739B5tnN4QEV9eLNkTfkfx7v1b5hpCdtzsksvnd9Ru1i",
  "key9": "33y5dKNhPVGqUygnwoJ4uGHA9HCUkzxJFLP3w4bP2KtbmhvdbJUAmMUhDs13Rb3fv5R8PQyoCRnVuTqYk4tuviY5",
  "key10": "34xxAARVdjGr4VzcCfTQNyrPx2wxaZQB4tWD4vafNKFFFhPoQwCybxz7GNCUvpyrmLWzNy6uNP23hGW5MeK77aqK",
  "key11": "2CnJSZbB8cihNEEN8cpz6m41noLPVeVHg2LRr8MYfB5Pd1V7W7vJWVr4qutJL8RjZANuXrUMw24Wm1Gne5oGjhtz",
  "key12": "91pqD8M1RkSpyshZmVyFMBvrboS4vFGfddFo6iXAYV2Q1g69nQNkGzq7Ezc6HqFqDVNGU5tgNiinqFR422FnbgJ",
  "key13": "3T9xCruBu8KtFcv44EA4j6jQsi25qeMd1v27X6D5xiNB2vgfPKZvzieaPyrs8UNdWe3D1d2Diqnb5MF346bJgF3X",
  "key14": "4seoKyw7JKq7L8yb9kvZBUCLssEph4xA85MdYedY9NhKV3jsRLjyLx5MExNfQ7mTLziJsTRz7juXpXbUMtfaXsYT",
  "key15": "2GAagEPsQy4Dn5MfXZxSaohkHdwyHCApTggFWDfYJoSbz8RSV8Q8PWo3pdP4ANH6W7MoPAaiiA5xFBw7MtFxhRi1",
  "key16": "5LjheZASAkdHtX6DmVSNTDtFWHEQSxTKp71z6KfUGMagzV5RPLpBkkEzfJcavKq4ZybDu5kj67YoCbVuDVtUoL2m",
  "key17": "39PNRkKgP3kVCfu96DCh4pqcQdrdAAFuTCoJr87Bpmy2zugeb142MFVvTjF1VZrddpj7DQsgV7QNf27gNkG1bedG",
  "key18": "b4iv9ZkRxb1PWKZq57MrjEsKwUocwJFZr3v2vzdR2WoUjvoF4TW75KU8wC9FGeFxW8otayXAnagn5SLn2HTmR8u",
  "key19": "2M3JBmMNXciDoQVNKeRvQ8mnwGpZjJvnmht9N4bHBJSAo8qP5q6M7fjxgcVVUCbZbugtd64jJuvFy26UKsUJ6Dpr",
  "key20": "4n7T9ezCQQmsvjDJcmehQ5jRJ6N1UFeLY2bAfMnAPgv1RZ9Pdj3eE6qcaAgtprtCpTMvjKneKeT3nxeZ3DZQbW6y",
  "key21": "4uehZt7FCppxvyH7RHMkLSYdyRxSAuVXoLjEJygfJP1pnNaAFjZXMuQ3TE7LzeE2NvLH26ggXXuDmWDrafndQXga",
  "key22": "NUebGUEZJHk3V1NQRbqJsLkWK7PKEk8aZ9QHNjNsS53kY6AZpqAHFKbFf6ZPp3RsESfEoQTyf7xoqa4YUNQVFD5",
  "key23": "4AnqfjCEyjc8v3jwxmXXJ36iYdsS77f33oaaPLu8qgNKMRRcsjcigqPk2L6dQmW7Nn2EebkLAMihLjYQDmTnX2Rb",
  "key24": "3Y7iMD4sGHZy71j4oPzhXxBrFFiCbjpxq8sowk5DcphoJ2NGFswnAbuDVHfzdHScEmyH3yfz8MiMj19XJoKTDxwP",
  "key25": "38buikY41pEmr1UMXeHsGK85j8urCgr1a1XNzyGi2EfTjNBvW6CkcsRQYZC9gRBozvFYFy3iXBkgKkkpSMnqHmgC",
  "key26": "5wLZkd6THLrpeHm62AmYmN1chpEsS9nBBoMmTkL3xVy1yGqPiATaQ4oUNfrbB31Hw2dXdpvJUVVA16cbRHv43HjK",
  "key27": "2KDjtMPnokJhwdGTsZ9EYx6v2odqBvBmDBgR6xzW28mxhjCp6VsRjJufRQwuA12jrYsw1KTwHMt2xB4tgYzw1Cks",
  "key28": "3UG79sBGhfaK2H5qYXWK1YwwjKtbmcT4hPc1gXxHr5BY9k5HLQe6VJxjLXysayxgzeVrJCw73pehS1YUHWGCCtA8",
  "key29": "3oy8o1RsAcLhohRtZbzso92rHYtnG1aMCXgLpyUvynoNHw5jthw192ogPh2NGhsDeGZAJpfQ9Dcn4CQZtAuhz7QV",
  "key30": "5tJNkHHjKLagc41yi9JsGgJtxHS8PU2EP4CxHVtTjgSzF81ywPAAcAg6PLqytDKtTpqF8qoyGxmvUbbm3B3q3jM8",
  "key31": "4FePn1MdStMVASm4Vs5ikgHjxQkPFA5MxcM7BKtJ6iBWgg6m6Qvj8v2DaBeKmhrmcGV4y3uXpFyq8fwXVvEy9gfV",
  "key32": "YnkHZM9d4XwAvS7vBbDKwDdVPjs8iEgHYfs3BPzedCDmTmH82pUsG8jPw2mg4QhuUR5Ht1efpFr9oP3YnV4N2w1",
  "key33": "5Keozqkix3CLT2k3uq2FQbapPkv8jHZtuzmw3K1Lsr9sfLWWnJWr2wquAouDWUqrhLiN1iMkAQY7Q4yaXBLjhQPh",
  "key34": "2nJhXjDDVmQvqjv767q4q8kmvDeYG1PfhegMyfRB1WWN316wmoAxmboDFnPox15bMSu1G183sm1zQRtgSE92q78u",
  "key35": "5E6MoiB7KR9cYHteTkJhUw5CiiomwH9wwg8wsx21uSChsaTPza6WyGueeHy3QEeHDdPYDbGpCQqUTnGo9xLZZyXp",
  "key36": "pfcJsR9QTuRtEbMo6ymgx9T9BXYf5i4muCRGJL9WbBUwvxDwqsvksNybF5osXe6sv6UYbihvXcsAmvJWuMWroRR",
  "key37": "4Nkso8gxUw4oyjbDk3RgesNHHnPvZbMv1Uuk8y5sA3LdPgUAPBHFThFeCJXKKzmArE7NeEKEkLrR1d7PSoyXWdm2"
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
