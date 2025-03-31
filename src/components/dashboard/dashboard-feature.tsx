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
    "ewFGGdnGfWyPe5YQbHfQNuBnUWVt1xRcHq85rEazFRJuuenePbb9nJCiVB8HrQD4iG7FVPr2UmNJwRhgU9XfWzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTvHoAnJkZy8WjfvQ9VYBQpfpCbYrUnTDAb3x1NTyTP2wioKXt7S9DsMjzYsAiFzJSMGZSSuFUcLNTwLvAE8mNq",
  "key1": "WzL9tN4pdJxpU6LdgECquMekHK6u5bXG9CdV7QyefLgtY9EPN3DU9LoszGV3mdviu5LmfeRpCHkdbiteYiKNs3h",
  "key2": "3ffGjyUgtaTnPHNHrrp4DFEV1hHn89ne3GEBKT6ncCcDjPMUvaTZPDKtaPU6THB7BDmEnzwiAbotstTkE3aSyAuQ",
  "key3": "Eu8iLJ4DNEBUwUFAy8tTeqYGxMaZugq6giiHCwS2HjsmmNJfvn4Z23rW3DkE1vkbaEaiuEhDbgGAs3A7GK3B8v9",
  "key4": "5uFuHsNi32LKNBTqMJ6GwXx6yJ1Vi7bXoBJrrpRKjAdB8CR5P5nf6oK92FCUrZZpvNohWQS9k3cmj6o32BGiaeJY",
  "key5": "29Ph8S38b9fUYbVMFtzyKD1pEuQjsw6HZVHbk5pyeSWiayKJSJJUcv92BpZwZfSQyQwmX1ZEosq7uPhQNN6TgjYX",
  "key6": "2kJSTQkoKgoGCvXcAHA7amXxoHyangkDAvrivkEEpEm4htuPegeJb6H4NYUDRSjp2Hig2gRtNvDeXZxE67MDR6Jv",
  "key7": "4t5m7hXPUvpBJhniAvFsBubMiR3K6NAydCHgsQ6ivSZkcQByXXTzjHQL2VTBFYAsppeC1ywEonktRLuqpp8yjdeQ",
  "key8": "vy7PsQhqogqLLq4Rt3mfFeoJR2SV88wriHB86zBA3fFFSDLf8CbhcwX6QbaubF3wgJ5JLK7WsMowd1k7RVFHtXe",
  "key9": "4xXud7XjFRxxdZJe2Rnzk8D6SmEWrtS2ezFcwDKTbX3p5oWry3GEJmpfk3UQCd4XToLtrsoZ4qij8VemGVQotxWy",
  "key10": "2ioQZ3wLooMwwNV9vimW5xUzeuGmLjBCerQkQMYqbrRG8iMLkGkohthiwup6PvA91qHajNoguk5qnhfrcV4G6web",
  "key11": "4AwSgJy1AVWhQoxj9nxmmPpEvyPNqxYbY3ah7JoSQAeHd8HAT5wPnc3hRGL8c97NRyzcskwg7zQfZER1fBdmjngQ",
  "key12": "39Dqt6iB2oitJdJdxPd7dFBru95QeWYwHPuGq5RZWZH9UkhaGKh7cEHfX4uARjm6puZZkM8Br8EunTyXgdNU2Vba",
  "key13": "aDaGZ6EkKxyzCM8bgPxGZUrboef2ThLcET4FqavxhV4gs8RwRYTqzgHhvh7N2NMMtZUwcPiA6tcLwdrf9vUok57",
  "key14": "31BL2NfbYdVHRNJNkvuAvjFvymZW67RXaXPhe5gS3AmrpecETR37PndSsRZJCuaEoSLhQ1dU1bRVuemtVZ3YRgFj",
  "key15": "2BH63JX2tKunbgcbMNhpbcwRvkC92q165XmuSbbCoQC6FUT5w2E5Qg1yLsNhPNeBKwCz3siNWC5u3bQdYB6mahqS",
  "key16": "SqnFRm1mHVCkQF7CWLw9ZcY1pQxafKbVgrZqCAzSq1xg9ttCWJrVQhivGKDp7rgvhC6vmMg4GR852HGhVuMHGUA",
  "key17": "uoMmw2dEEgMMhvKuz4FUtJSnUbVkUvuyCEuw4kx2BHqJJggJn3Ph8xPjRbXTGqjC1eXbmTU9vtA6q8DmFC6cmFi",
  "key18": "skUUYVsxgbq2qqCJi3mGNYQmkWtrTXs6xY3VwQc8uAeXmpnucx3WCQVYNapoWv34ajCL4S3zXv92aEgRfJH7HwG",
  "key19": "5jxjJmAyzUPaPBemnMXWiTEL3VtFFUrKLVqZZJVYanbRpPF87fB8oQ7yAFSFwWs29rQjdvxuwijX2g8dxf6PxfGC",
  "key20": "4bHVc7TqZUXqRpZUqLbdFxgBd6zGwuir5XuC6qfB66fpDFEx6v7hRJ232eLbUx5ay6RPoRHJzdaKivn7kJ84dram",
  "key21": "3rm4HG2CFMq3dfkknPANaeDckW43bYENPVWJt6Uq5L1ciAC23qiCQAQN2jGXqXNfaCL6MrHDhrsPaAWYGBsSx88q",
  "key22": "5RPHFp6i1XaWbe8C14BaRLMZJ4qF6H8jeNKP73yABqq16TAVwzGmT4qetyzHCxDQxdK1t8g88RLUrY6s8gMauh3",
  "key23": "jiuN8YPtkamg1RyGZPyWwntFgCXHA4z7W9rHP4zTW2ARbs33sYc8RWJYJSyCbYApBaXdBNZU72ncmvW9A3EEBhM",
  "key24": "5S7WXjiatvEZdN7S44CsyoXm47CXKG24LeVjBdCYSzJbEjyrxjkxoGfsap8CAZHsVihM44zxN1pN6KpBVbE6Gut7",
  "key25": "3Q2bwKfJRNXin8fNHDCEkz1Sj2uHVxCo96uUakzkGpt2CwmKerXnE8FxvJHQXuFZ2fQWph2FLC9RRfV7iEN8Hz8r",
  "key26": "gdst8ZsfCGmkCyVwwfPEQHtrKkha2PJGCogJBsp993bamHxfGWEwP965rq1UbYfoNwhXrpySzXNj5NhReHBBDG3",
  "key27": "3uKtye4Edj8fNdG1z2pkJkHDNojgDEZd19FRK61pGBnBFwubUJCXF6YrvPiZJiLi5iPYW8QMx2Gg63rf6ygEXNBC",
  "key28": "516KynoXjhceBuBBdQYhmgyMXYNCF6fFndgvUeehT5g7Y5FZvEnksTqmbnzuDpVFxsyagAevjqt5b9EJadNmymXb",
  "key29": "5Tgqs98vUsu7nJyx3dnQPMPnfT1HxJretywydRKmNSGQGLdHo7WQupxvRadLENDTAg9pjbPaYz1aq9AJN8L3uoBk",
  "key30": "xnZYkxCmaFHync5DwZ4LNGVLeH1j3fMHrTDs3bVgATsjrBBmdG4ztgrSmENMbodT6epKgKdHW5AkKkoXu37dtGJ",
  "key31": "2uWPkzXuUEXDugfQQEpTrz7EHhUBbysr2g3qEdtz7tgJQ9e8GUHikgyAMvZsM9tV5WqD2ksKGcA6fYxaUdoqhJPQ",
  "key32": "4MLAvsFNq35Up2Lup6RRihpQm93rdzG4kp2goe9S8YFqVHVGQBiyB152jUsQh8G9ZStSK5uPSgqFRfeMH9XzZbbw",
  "key33": "5ywkoc1zUz1KuyLXpYPADgAt2GEXgA8gSAEHPqNRgntzrJBkvfGSVogoofKsaocnT69tLhuqfRDSvc4ShgsvEDZB",
  "key34": "raVvS4Nih6UCMwsZigLmMsxJxabb2EEhsZ75hLuZ9LTNw5uR3WLiuBJavPiSemMRb5ETRhhKpWBPmFvxG7nrnwu",
  "key35": "4CY3jLQbcugezKhxsVvZhecpFEWwM5iNiux5rMj5XmECdwMzeEuaEikaXpboHnjRMA4QvRY65twnBqPYWPQZvvp7",
  "key36": "4MsdGXc2ipSHY9erosUHm8sC7x84t7vT7f7SLoSiXqdsRphEe3qFAaWuRdNkukXKtMBeHregkjW2PdGoSczxQPz5",
  "key37": "5jHB7HnqDCcKLfnFpSAQP4HfTxmys93i7viVnqZPagipTEjLZVmqcEYd6XdWHYXDWBikWrmoR8JTfoKnD3zr1qaK",
  "key38": "3LYgsmrfkSakoZKSgRdwNi9xdhcvD76iM65pYPZqJSadft3fBpcW9yc1HhB4CVWERpdrsHrJjmrvkeq3Ha6ghp3o",
  "key39": "W9wTUtWXvTQorWcZ2Paqh4Y9W3ySwtaay8Fd5LB9eddKVbkuGGyRtFFXtjUBmJn45a1yn5KbuoCd1fMSYsPmgFE",
  "key40": "4oAHj8243rsX6DZyjvjfSD3c56oEbo4bJhBE5HxeMgzoys8fc9ku2HVpVkHyDv8CQPhSyTytfQKad44Gq7ErffFF",
  "key41": "5Re9jtFD3SU3HSi7Bk3isyPC9q37qcxWim6eYeY8kVgyz77R9jSgrbwkWDFAcR12DjcpWqeLnQkKjBCkLuFnw1Jq",
  "key42": "4mmvM6pN2Sj3UXx2nqMnVtxqJUM2FXgX24rtuoPXdBACGprVHjeZkRbprGEuzYe5ss9aA8A1h97wsLC6oy6YFfB6",
  "key43": "pPwQ4G3gkX9zUow4ojuTHgivPvNsz3x852AMo6iXCLHQKLTEuH39c4phpfHoztHzgQ1dWpeGYX11hkP5qGcwBu6",
  "key44": "Dg8xedv8FLpkwuDXMCUDqwMwd1aa2DV861Y8L1o5bzxJVpwwFb1vgWvE3bH6ZQacpyPbiEU9xDdW4pkaCqABAMz",
  "key45": "kkszt9u8UDWYz29TZh7ivAxbYyVnN4Rjx3StFPvxNSM5qjGu7Ma8LcxrngStG38M8vZdFu4B8mzEzo5zTbf9iRn",
  "key46": "4kpVJmA5NqoYg25JbW7mNwABeNer5NTUGKwqDnhow5gW8ZVP14FuahDAScT2w5L7SuPT6bgG1z4LzQcDx7yiAnJN"
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
