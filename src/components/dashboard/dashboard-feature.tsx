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
    "5ci86cXrpsfPBiT7yKw9fgxXAvJ8qks8PT4eUyk1ixcF6KgA9G1G3QRMjeHays3Nk9sZFA1cZygiw8f651Xyo7VJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q3bkALTyTJxkTd6wC5ZWJ8aUy6FjNC4RdSNZLdNXQ68VqmCXmJdWiTXQgtf8QryU2CBo3s2yXQSLydGarnqrWY6",
  "key1": "35TBaa673k2kSNNk6B3KEszS7WsxSHnjV84VVXGs1YMKVEqqgMUvL6mq9VRbgoCRe4XYdzir8FcRapXwdNCHcE9M",
  "key2": "3rCbt7nJqWnrnuxaSG5q6c8YWdSbNBVJaPWtQFSevM2qB1pbQkAGcpg934tNbmzbW33X3A5LgQ9FAJfK9UqBuC3C",
  "key3": "4zQMPAc1NkwkXWVD6PX7MAqgGqotMfEgFTcayvQDAQSPByw6CZcm8QUJCnVhoKDFaAWuuSvnntHB2Fv2zF6HztSZ",
  "key4": "2D8Ak4ppqRvpa15EsJWZ98VNZkNxMi2eaiQjzwebYirdzgn91K7cLmnvzdvnDjTuwNHdMUHQQjZQvK6gebadC2Pm",
  "key5": "59fe5ops8at8bgKXtyE8CvntpjDX7eTBj7H12VEaJVXzdpbWACbuWxRaPfWAv2u7UzWQon3GmNowMdCDscKHZC78",
  "key6": "2AZK5gC41pGjLw5eyz8xx2An2cvRt48XJ5S85WjM7nnkBUgSBXr8FzgdNBDh1zAtDn45MLUupXgdYUXSbtpSPQVx",
  "key7": "4qra5xz4VGSdC1McnYHMRkFE5Uv5U8q1xab4g5DF2ZvH78YaLajookUMxMjUkqo7Ty2SFFjHQfH9YFG9Ms5aEsQv",
  "key8": "2gN3LW9aK8wiTtZjYxCyUpymxHStrmkm5sad8ScM7zvDAx3o27NhxJaVLUCN5BrhHuZhAfsmCsWx47tc6iFZWX6Z",
  "key9": "3nVFc6imronmB4Ecp6ewcdnwwGsi3S7VGeuvn9j8MJDHo2TVNwANcwKCz1CbsQBqwsB6dLKfvqxZ7yA7YA2fBEES",
  "key10": "3P5vdFbJn2d5zG5rRdWCJTJ1XL8waEJGwdAMJsbyHLEBnKbAHZ5hmNZ4G5ZrNMxbmGuyqDzdHHJMiNqzdRZdNCf2",
  "key11": "2ERsDh2yqAsZERfYeCPZJ3uosAtQjYj1XN3iBC2xauJzXkyzYcL2XMWKH7Bh8zwDuDrCBwGGYGmfkpHTWcaVWaTj",
  "key12": "4ZgNs3WLQrDBA3Wwj6i5dMMdzCHe9LY1PzUrF93B5hZp6jhvwmQdRTP1zw92ooB9Jo2TL8PGSwP9QeyEvd6rBNyX",
  "key13": "55EPua7NKBf5iDSG2sZgmDT3UHt49cWSSriAXUHK1kJbsLWgt5zVBf9o4UkoDmuT1VwfTGUSPir51vRUqSqqjdem",
  "key14": "4nPC4QVnfrRZZBfdWZf5ptcqRNLeuKaU3yXCcNbqkvND6AyvvBAwHHKYTvB3GQcMmBMw5dv52Jqfmw2RcqGZcgUe",
  "key15": "4PUAmY7agjKDLMVijpJiuLadxxsHKeievzzrmj4HSzSbkL8jYdrUUheu555obpc8uQKUYzKCe1vhzHvJj3Z9KEST",
  "key16": "4jD1zPH3j6Mp5yQ1CDfPwzuhsW7RGhGSe3tCY47UcE3WYEYbGhGqADukJstLoUsXvMoKZVHqjwgf9RFPw3jDYvhG",
  "key17": "5bwtdpKgf2GBjG5GZNG6HVsJskkq5V24Ta5FjXM9ZZcK5m8NYDKADNN7vok9TqvjvF9d2LwyqZX2VRJiUCzrEJZS",
  "key18": "2Wr8k8VM7QwUsKKt96YfYtQdh3xKt6EFASw6LUYUPJnUa74FQFUFb97oYXNP2eEjyWeC8hqzecWXJrYna7koUKXv",
  "key19": "5ZtP5Tqehg1VQvo6rdYBExWPXFMdQ8sUiiUYj9EM8WuiqryQtpqydj8eF6WkLdKcB6i4pGVxyhqQeJ3TPJGjXF3d",
  "key20": "3G4vrsNoKFXbzjMAZDzGdX5p1e4hf6PBhQ6UWRfy1i5xCTM92oxAAMffpEHXMc5TShVVXHPbLWKgK29sZfgnqj9w",
  "key21": "U8Ng9orb2rdmYUGPUBDCYZWXNZBMi7b5d9mRgd1orUuRXmGQonSYg6tEczyUixDDfJr8XpRwouk3UgXvf7p2WZf",
  "key22": "36UehLwKZ2fPJbsrydktEbJv6XNMfnTYtth7MPApV9FCDTSVdTVMaaTkq8nixHymW4hZQSM3psRHMPbHLNGUs62d",
  "key23": "36Hiy57aNM2moeCdQgdZ3u2rYZqcMHvpU8F8HdFhW9VRXWRfs64TFuP7ZAMWjhwf9x1kXXBQJJBhRmB4bGMhzE7Z",
  "key24": "4Uu6ojZgwg6ooEF4hgyFVmYx4oegu5QtUfwa8zZXupXPTEUybYFDoL59AcHNJoXMx3ry8FNUs5WMBjw76VNhs82M",
  "key25": "4gmzxocA95potkk43xYr2iPnL8iUGKmfGg8ji1hARrSJDmHJSsNTtEeB7pym4rM7tpLvvCoijWxq7dFzj5EMJBwn",
  "key26": "2SFjfL39qU6828maGKCzLJ3TVYb2J4xMSV2ghXiEwqu8JyXYTxTkeyH2jxhPukquFm18rwbWcEb6xFJdhV7RAtUT",
  "key27": "55GBAhzWhRJaM3k3A1xJgmQjU4iisJZbWimXdDBAcec9mSeQSizhbU84M935o4yeBJ7ktsC9i9FYMUhEMpSJXmP8",
  "key28": "5LM635tgYtef7v7CAArhsFt4sdV43jLbZXXxKin96qPqSwUJoDRLcwDQ4Xb1FXpVr8CCJUmtdvLZc1rNxwuxnddU",
  "key29": "3Zof1enzJgMg1o9uF2D144vTy6SM4KruboRxy4m1CwZPr8PVC3bhgLJZtCokKZ6dSJ9qPGUj8ZdYwyo5e6JFrZfs",
  "key30": "41dWKte1Vn86wJ2pvbp8Ar8CQXgAASC8ZWAr5jncXJDcTHqZY571p1Pf64P1oHP66sNoSVNi4WwPeWxUiC8GeVb3",
  "key31": "3wmns1z2UCQajJ4tbBbJEJgTNbBNrqDmG6zsoc1gBkZ6bTkz2oMPhuxPcTYMrNVx22uTLtbRnxWbp8dQbd2GaMXC",
  "key32": "2vxu36aFujbc7gGNKRMZ6hKYFvhftSAADPvSs51UhFdPhugyCSydrtpjkryA1BTTvAVj25LFPJ2Gfjs91Ao9FD1t",
  "key33": "2JJ5VLLszScMUE8rZvjSKbbzg6owVbAc9vhnZoY5ZxzQm2vhHsoUEbdqdsq4wxtWhdNRSEJabwZ7gegf8dnXDbtM",
  "key34": "49myLhvfsCK7EoCLRe4LbxUmiViw21bMidoSj6YHBs85y9YAgDmA1FUdEPhySmWAEJaAxJWeomRSRQ7vGMnz9WLW",
  "key35": "2pU1S5LViiwA1jbwKNCYx3QjGVR8JsyieLDySFMBqCBxSy3TMFyyczbYMPLYCHe3HM57cQdM6N5E2YDJfqCLXta2",
  "key36": "3t5JVrMb838LDbDF5MYkNTBCfEztAzcyg9YYoKCd3L7b2aZJMu9cX5tVTTgApM8kMxVZdAhSyqk32i9nHiJTz2FW",
  "key37": "61khCqLpREJmG587bNAannRN3jVdpsXYT2Ue8QnZXpbianrvVpWWgzaXibRmsPtFy4pph7rNcXAvvBG2nhTEUAu3",
  "key38": "4RGbbayNtCNXSBdWyifzZ4e41imgYDWZasceh4duAJJZFReJPGX5JWh5sND26fjG6eCTDBRmPdy9CWw9ywPb2uDu",
  "key39": "52sxVREzCaDzyDkiRg6oEkGvysTn6F8argUZwvpx6o3pgHY5ENjEazesNKJMPCDU4mq2zQXBcbU2jFSakRYGdWd6",
  "key40": "5swWm5Y1rpJRSoudfwWdnwpnzt7pT5h4ziigictGBoy5XgbTFz9K7L5xef3baKBgSUChHykxyjAsc2heNfR57q7",
  "key41": "4oVWuuNGnYukTqRb5Urzun7uwTWqEzh3gaYtAdZHXdeGK9ai1b2FgMpySweDTL2WnWHUmnYfoxWAxabefgpSXt4o",
  "key42": "4v6iKbbBzmfqvJBehfMmZDBUL8fi1U3Pi7pzZMVy3Nhmgd4oTEPZjwQhmiwhmJxDbidLjH3g95anj7isD2e2XqxL",
  "key43": "4N7Xc2GqJ42obnyUHgSLWHZ3HHqLnT9sontZASWzJfCfGgMdHoHFWUoJ48LvJ7KtdC36cZoBGAZ6DM9FuaSo3hWe",
  "key44": "56aaxUFG4ded1eiXZsdrSCMSkp4EJej7YABNM1ZRPa9d34z6XNguH7H3w9S1bpnm3h7VSLNUmDX7nvy4S94TSkXH",
  "key45": "2i6eg5Hpss5NvaE39d7gHJkL7oxvSoAquEQ8hEZx6krswBtT2eYqodeGTumbEzhJR7CScv6dHAB9ZL8QGoRruNdg",
  "key46": "5kb5k4fysctqPa2AbrGq5XSSFwUcjztWfKhq8DAj1CZo3HiMV8WnZKuUhKjYgg73yhvqTcsJAmxd7o4YN2X6Uu3E",
  "key47": "3UW1UZmFmFsm9JzS9f3mqm33qGbr1HLjMVsCj5xigYVL5KEcKWwmHF2GQBCcrUeuocMy3FTFJ4emksfobqQCHjEC"
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
