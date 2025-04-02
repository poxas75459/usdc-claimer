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
    "4BAczLArREe1yS7DZ7MpYw8BQECh2jiipdSGZaGiDVi6Wz5rRpEPSDGcxFSYnXiKaDoVNBmYfUKM5y6vXPbAg61m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJrBE6ohM5mvHkR8nPPyEPuFmrXm7tUis8LXRxwBhgKMaMCf9g9iSbcW2RjxEQcHZL7vCWNWKnzbGJ4FiCC2BiS",
  "key1": "271xLs3yMYc6kyFocEBBAm2Z2cCumzyLMuYK5iPpn1jWgTDnpkgTBp874BpTjEAx2asKQ1WLv2ZGFRFULVrXHico",
  "key2": "4DXyVUmbMTpEbtbhKyBaguBUgarWN5xhDP1qYnVGyv8ERVjrAPTARNa9KHPppDk6kT3JAQ8cdBhgWXoaYasGA1KD",
  "key3": "3UcGJzPfzajrdSpGFBgvxvTHspYzLHdk5KgqJutLDKH6VtKUCt5xQjzbPUruoSug37Q8scqQckJC1KCMLCmXyeu3",
  "key4": "63j9jxzjGPYye9hLvBxDHigz8QJ4m2cmUNwwV8jVsF8Gzaow3zZ5YXKJUGM4ShKSZCcKVvtLDbLMCsbRHCNwUgy",
  "key5": "2qoRZ16CxbcAxehcgonG8n4M4DQ95qBLrv8V1KtY9v6vQw9mUkEHpfBAEz3yKXgCf1JUf3GKJWuqdNtzKH2HPN7g",
  "key6": "4gMdatPxr1iS33KVjkT18rWYXAKJ7DMkMfs3YAUkxTofAvSC7vzTJ6spGx3hEta883ykpfxEA8nbz8VPwUTSvGRp",
  "key7": "3WUY7PP1YpHFXvckfJDSvwFWiuMCwQPyrQHaXB45kx24wZd8J6an23EuWSL94Nhaq4L1JcE5Xj9Evxaqtkh63wNR",
  "key8": "5WpUhwtHjuveAcrrYVj5THcFxRUiezCzfdvrX126FMjnsiwYLwGkdicsaZ5HVv38ESYNvwufb5sNKTkLFTESxFgK",
  "key9": "ytoNcC6qepBa9iKnDsd5F2MASd2n5wJTq55utDr3Fxscx9B4AwRizPFstQeFdQDKcmqnP3xcYPqAeD1yAozoe5B",
  "key10": "4nxxuT5dBHbCESQYukfci668ScrZzGnGBVLmyFfTktrXM24sfxnsgwUUGzeDECXhh4J8C31RLe63Hh1ME8c27ddN",
  "key11": "L75yb8PwXgFUuwGc8QUNttxA2B9Rioz8dh2iW4c7yNAmRL9heC6xSnJJvdtTBEee8V4wzQjSbnrYaPJh6LnVAmA",
  "key12": "5xw4pVFF54yH8ZSdNfP1dnrZeba37vXg2vKUeeMhRTdMaz2NxSxEn3N6nrWsSesP4BYLoH9bAVXejAavB4ykaLpZ",
  "key13": "31LTYhcTeCV5WWhpfyzwNmyajL6WHkPuQ2gyHrsQVQe8v2CpqVXb8ZXYAu3tUWxev9QdgSZWG1XJkAD9rKwsV9oc",
  "key14": "1vaYmuSMkgYNSCAZTLuKdtjHfBKKEaNdtuxThGXDaoEfh1UXgBY16eDEfPPcSnNnhAcB5kKxc336NveknWzhUeA",
  "key15": "3aYjAC2gxJeNLaWXfVUNgUocvNijt7qATp34doAyaJGoXpXiDbfTi1NNPQSkGxNBqrCez9wUsy666KccYJKmNnJu",
  "key16": "5B2v59jVqvSnYm2zNaFn6pxg1D34tzrFt1epNc3Hh4cTT1RhD3y85NKcvjVf6QJbpmUWAkHjirCZtu5X33rPXtZ2",
  "key17": "4J4RX8GkkNtg27HZdRGKFdPb3R2xobWe4pU72meBYpaU2fGMyYdf1MhbVhuKPzEMrNYW1yhzEWR4Vy2BVPCBeBhf",
  "key18": "2QaA8Db1KhX8qTDZueVjhgZ9axhcySa3PEx7MgLj1E4oiawbxdwMG2tTkeXu99gpnL46hhr1NLoywuR8nraSLANn",
  "key19": "3eygbqNEz3YASiYuCdasCS7YKyf794NsW5aEUwDPXH2inb6fpdusXqcX6zJzF9kFuLXerkgUioNfhtjHvetYt9oD",
  "key20": "3dbYaJfi8UbU2oqXCugdn3ymkup4DTA6oPsSSy3BreJShdH6THczazWDEZYE8m1vRZUjRgP7YPmxUeBeXrkxE1Q3",
  "key21": "uxvWdAX91dSpSi7swLQRKrXYzMNvo89tDUWNRz7FVs26yNEEUbHhpc4dtNtDP5dMNE4h5oQrqQkc8LDP38KnKYe",
  "key22": "iaNhxDpDpz61fFYM3DJGcjadehic3KnZttedEU2uGZ4ANMVw5vARG8mjzxZWJxVhkdCMjk28rrUREfJRJwRrBH7",
  "key23": "3xoTv2EvPYF1RGf6NqVjVZP6KWsJ4LZoQcAVxNpho9o7iM9BMYc9Gq28N2D1yYje1MFTSD5zhByAL2Z45gTCMJu8",
  "key24": "5uPW9xxu4vPgrzvsoaUz2LwGc4GVcbVLTeDDC5sgiJrRdCTpiyPP1f9aCaotJH4BRyaguiQQ6afSKLtXvVYbRweF",
  "key25": "27Cd1GBMJyzXoptjpcM8PeQAAVtQ9DviLDZ8ETCHjmgNQZLy6aBEcKZfUxViq6BJv9pKnajwevpkKA6x5rCAH8cf",
  "key26": "3NriQvps8yr1ZKzBywEQxGTrMyTwugbSEQQN1wKiPZEFgaAcgna8EkZ8EJnoA4pou6nwC1RTVZ1fchR97xCFjTm",
  "key27": "4e5TcrdaoVpUyCYsqsrzboXdZNXJ42ssS4uLCaWBsYfJKjBxJhG9jwdfMgH43WzhMUk24MjvVRE3UfjZ8wPBdSsj",
  "key28": "4tV3gyZBFsCuy31S4NvRVeFgJXJbyxGc1PrvuryLfbrNki3482D5ENbLuKmjCdREtf1dvGqbEJ6eeBtiteY8uGms",
  "key29": "5nWydZUdqMLEidfp8TWzF6Dx3MQFwbbnVw6L55aCHRgJgqHM2tnu7oonFVYV1pvMNpG6yo7Mg53Hw8faPSkWtg7Q",
  "key30": "3GVz8gWBARAoqDDK3hbjwSeigeD1A2qiHnpWG6LMQmotwrCBFRjJ3WzziDeNLDq1EEM14edktszPJtVzajasyvtM",
  "key31": "2obzBfR8ARu6oXeo1q2Bt7UwzvjjkKhM4Pk8vX6TiUCN5rFe3eJ9iqmidQi1kAeTpJaKGWPugFRb8NJZ2nns4qij",
  "key32": "5q4Q8r1oQmqshXg5Ab9mGbD6UDFEEHaXfKSGaAXNaZEaFGuhC1tqEnM8MWvbMivNBqq2ba71ggfQaRnsWys3HVrb",
  "key33": "5H6C7dLnjv6va1J536tLNQhPjSPYNxn7EHCp24g2nrHuzUUko9Zm657PZNwEZqCz7sZcuGeUct3bm5VSUK9f91Qm",
  "key34": "3KCi3gwL83rduujYMwNbs5hFMX2Fh3tnBcWCvkESphjh85ZeDHqrafjUKhJrpoKJxwv9DSsCk5iiFDqL8BhapKZX",
  "key35": "M4ATY2t7xyp2Uy3QiCGPg1bBgnxc8VcapfRoTdTkebeK7xnfy52i6VhFBQHNkhHVnsBhtYWvpH9EBcV7ioUc6yB",
  "key36": "2B58XU9LusjnddMdkJepm27wS4QHVZ66xeDt2BZvSjhRBLGGhFo5G5NQNTPw4yxvxp2oB9WucEXdcCTUuo82PEvn",
  "key37": "4HhgHmYmQcZnuJJBU5qhqPXX2WNqCSKTpf71jdnsbvG4ruaabHxV5UpcWqLqzRef66iTwtyxdwqSk5SGTKJsjgfe",
  "key38": "4ut98E46SZW2Cdzoo836UtP1x9MEmXDyfhNJQ34TYnj4875inyiWcgvNHvQw81gEGmVPMKjjY6QRcTXwQdwcAfR6",
  "key39": "5rb6eGMaa1wqvxALSF4EzmhSoSVmiPfMRE6STPbPjdgy3ahowa8f7RLbK1GYJci5UsfTfurCdnLGYw2JboM2RbNa",
  "key40": "254hMDER3142eLdhNareyPQ8vAGEzJdU2iWnpL34WQMREkEFFWExu4mAR74AjZvHuqjvh4ThqdKFfdSRH2quPeJM",
  "key41": "um469FEPRUvv7SWqug3XDUSpZTEBVk5m76MHyraAGdowFBzykyWH6xdLFBWCLDLM5VuAKjNuNSdGspsfQj87SkF",
  "key42": "5qiD94Lz8rYSJJEK2DDCxU6H6q7Rk7uWfzVQ9cSFxdorcyzfNRvV717vd4Coh3yYKWRjLzLA8vmH53Tbap6zu1GY",
  "key43": "GxqBbfmVW3TKukbrEBHrY2z24fb1tWjg3axUD9wQNkyxqv15964swmE8n9QDaB9mQernczJU6vUa8AJvSMChHye",
  "key44": "2cVz2xAXLfzryjbgU8vGeSnkauTwuUoN5Y2HZ6kxCCzFwHnme8RZJzEFY4veCGNNVGzVXQb4GepFnD7VcqaSGP4p",
  "key45": "5zFUojQQCHaJwHFSvNa3u1YVrC6aZeEa1APbhubGZ9gznkJxYR5yYim2wxHNNFW5ykFFve5pYbwhkmc24beacVVo",
  "key46": "4zjQJQZUxzTp68hbVvkEhYGbxB8JtdQfJcjfx456EDLXeE1j8bKMhSykqXpzZFTLkmb7jzHYcPCZwTkKjTqCoUNC",
  "key47": "2chSAD43mF8ZBhFowV69ZoVE8LLcoioahQaXUkwsvJj7wCGmn4DBgGnJkaTcqAmq45tdh9N5AyLRRtrfQ55wZnMR"
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
