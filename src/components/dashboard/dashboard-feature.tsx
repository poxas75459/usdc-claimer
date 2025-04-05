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
    "3Jq6rNpWjd4GQ3nYbryDLZmrvH78CKCkpaFm82DAynsJqADyW4mNY7TtL7VsopspQhbyQ4KeDNp3t4nsjiNasMYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9DMMbTUDD5jLmxpbNxQcWufkvuDW5FTUm6zVWNnQWJ2U6z5diHeqJtL2ygq9EcVk8eckyTKWmi2WsSqQksFbde",
  "key1": "BR7BF337uF2h54PtHkHdqF8Pb2oCTtoagB8C8EeKvXht6zGoAngN2U6DwUnrLMMByWdyXwDDrD1r5LKCAoKCZ3j",
  "key2": "2r3CCqPfWWw4DpbKULNUDKpsEC5b9fGXyJZWTiUa4MdkxwSUmCSnxJbsCLDPuh8C5xAS6h5HpNowhiv8kauaoSUC",
  "key3": "26GkR1YraERNbTA9gmqHmB2PJRwrWD5nuMj9w2TKsSsHdnarmFrWG7vRjB644euYUnjhoufqq7pTn8KNCjnFSWFT",
  "key4": "5VkNeZMnyfCn2SspCST1aCAvPjTcY1q3WMxJWmb2eAdXGPAxkJdBEJxWpDJ99YVhd5mTuunff7KUXWur5od9Rsep",
  "key5": "5yZnahnB4E4kdqwwUzsaHwx5EBo7yS2X3j1e5WrhmTMaRSgDjUQ3V7kn5YAVHYYHKwsNKjiBLTeB2Z7wBk3r3zJk",
  "key6": "5rGf9Wqw5J1UAKYhgPBGpWMgi5CjVseWMJZerd8oEKUMvLW111qfzWKyWDmXAEGRFXt6fak9kMwH71yMPDRN9i2j",
  "key7": "2VeAsF8EgdUXVbw9drhpG2GMdf11d1WWVCghGB7MU3kY1T8ZxuypRvcGQpm3eeBM2xypkPofdtchnPhNprx312eA",
  "key8": "5xDFEpHWRUJmYjZfPAzDTRWrMmMmfBKMxH6NnSKFyjnPk3iMFbhpdBr7fumhhECF5Totj4jUYEZhYAy3HxSo6hzY",
  "key9": "3kG1WJk4kBPDmW4t7YWCB7qHqH6BVMcUyLwCrr1e3a9n8FffzwHmK5mGvNURhetUJp2LhBe8JNmMkpuohjv2xSr6",
  "key10": "4mQPowp2VMPsZyGQmYwADaTWJnnVX1HsSXgeNQC5SbQ17ikbLsF1J8YCYCy7xmn1bidEHn5qUk7ZNCiKuHsmMjzU",
  "key11": "3iJGat2PjKPa5roZTabVLYfmgRGmEftvEumQ84YdWnAKZPB6Y7NsYRfTmAn5fN8t6azBVnCEY5m2tRDX3dxgdTAt",
  "key12": "4yARNbf4hPkMrsDZA97bEx9vKsjNr2jSDdiLHwUYQ4VNiDaotictmy7MUJwC3qGkLZHGiDwYpWohJL8Cq8zhSuqM",
  "key13": "YDjzFgqmCobr9pZc9mgzdRVNPzBojSQz14GodAeeBCPmqf9t42AR5LcHbevLnmPG4emkJaKqgjk5rTwTf4VEWmB",
  "key14": "2huXe1AZ17J7gAcPeUb79XyWwSkibm23cdqcfB9qSgJYmrPPcoiimUKMAgYUgdUU7Cr7ip8wZfhnYrcNhZRUCbJy",
  "key15": "29GYD7ZaewJ8zCfthzGnHE2HjKjuMXk6xaWYFrLDsMSCNMnUye7iBuYhG4qEgioAHWwkhLiZkEppykXeNSMr3CyV",
  "key16": "4u2KjqPEvcrwozAYn69PTkiFACvfhhrrkGdQqM9ft6FWfD5DwaoBcgz4HWhbVkS1FvDQZWeDPL91NJcYX3synjpg",
  "key17": "3tqRsj34T3sMSpBqHeWiLBZLfZnmD5npMZ4EPj67yUJ3X8gxqfWXapM8E54QwhAgpJeX7NTS3WJ8TerTAJ84XQHw",
  "key18": "414SJiR72A2WJNvp7YLbNm6FLFqEaviPxVwHb661gSewzVBKxkYhLSMcuxV585iwuqcKyb4YZZrnbypfApgVf11b",
  "key19": "3dGZWyCxDrCF6mjvBCLL4orWZY1ueY86pWGiJZzFGbNkvmavMPxP2pgtjyBgeqBmvqmQVZ8dJxDrU5A8ALBxRNmZ",
  "key20": "3hYvtrs9G2RRsShubTuyNwp8BwuYCg43it9sWx4Q3fMPe1i53EK6NiHvntjLm1R8oSzxKoyE2ZuANGQhra2cJJJV",
  "key21": "4AGAgqgBkLm5FZPPFQXWXqaiqqUDYa4HgkxGCg3XUf6cV1ZFCSaR2QA11jPamcG7CuXi9bvMupuRfedYRLT7dhrz",
  "key22": "47hkVYpBfSjvGRRmUqzqQG2QTrLy8EaLKXoruoPU2qRzuiiXSnk7SA6XRMhNUFCxW6riSy2PjK5hgsD5o5D6QSxH",
  "key23": "5tCGf3ZsdfgfoxFxSmXCqYLbTcRHurgq99PofxCa62RAMH5n2dLBdnu7wpzXc9TywjL736YNmTYyG3GYxZR8xPmb",
  "key24": "4JehdLdJxvNEaFBKZ81fSnM9wFg9TaWcE5XNFesyq1xB4xwThF33xySZoXx1Y21vh1Hnfq7DsU8HfF2TAQxzA8y9",
  "key25": "subqreNJ5cNQ5NxuPMDi5F34sAixJ2BNZQrtNECNvJWdYQahRnbf5sgPgc2Snxkj96PPCw1Z2cqHt1N1FUDRYVy",
  "key26": "4fN9MCumoSMfEZxN8FVot649tmjBLaFhyfL8ry6Nhpk2ZmsHSgyQmAc4cEewafGfTBEwemxCM2npBWL4nmDnH7Tq",
  "key27": "3Qfff5s1G5kjBm11kzXXbjdPtC6Bvcwhs8UufnV9mnHgnoYDLFUdHoJDbfGgRrh7o5cS5ZnYU1HhFYaaC3qgCZjg",
  "key28": "2oesiSWv3X4SJ5dtAsULh1iqSFepFJfSpY5rsm148SnucCU64S7v1qBFGXqhbir6yksHWVgezQtiNzRqgQf8KCES",
  "key29": "5LKHzdkNqx4HiPkVR6iumZPkrbtoV4iRiEmyKG4SxyneNZNt4d8HnK3UzGFV8wcgQfm1jKobVgJS8uuokQiakaXU",
  "key30": "64ZTKNtRQHsZ36ZkdGwW193cP4sJETEvwwitmBZyQwJARYTCc3E3eRqcDpLhJ6aSxbH6naZWSZJ7REcRHPp18p47",
  "key31": "5sALPosEKLvtHeRfJBvjkttxQQLfWU1Kgy9AEwWc6e9ZQmTwHkrA8Rmtnwhcq9ydTXV2DuNPVtVAVFEf9KU7qEfg",
  "key32": "3Mb2CvMfjopvGuEriuW6LCCwuAaUAkxRmYnNgr3BWf9Kax7kUUVQc42uZFFCD9ZEEMaVVHm279SrgUnTspwpmjTq",
  "key33": "3ZoqkqRMwN9sAZa6QpQuNog3vLEuHuWkRyXGyUMzTEXzPsAk6LkQ2HJSHUN2LjrfCm2B5uUhb9SPHNfHE7oh6JxQ",
  "key34": "2zDDVcfRAY9pv758AgLWmQoS81dkaAv4M1r1iT4ZZzFS23dSeLw7aZ61idP9C6oZiFei87igj4MkDY8U4FA93MP5",
  "key35": "2C3csNHXFDdGjapjX33Z4MbfzbRsSyVBcJgn5DeWtZEvHpQEwnCG3iqiBN96q9qo9b7hJ8MbnceDscMLKPakXEZq",
  "key36": "4aopuc1MkhRWstkfmAnRkRjuCBqoP37GjnPWdSnxL5Bp932SDfDyDwBVDEsNxUVousCQuRJ49Ewrd3i7CHuUQD3k",
  "key37": "5a72rFN2EnVqKnmPMVZexvEtaSv3ryPmrk2JmXhYoNZRVj7DM5XvA5n71yn3GF13z65TR7WGKJF3nMV3zKpqRhFv",
  "key38": "59E1FvErpi8faMVj7Nd6mbunKWMvLpvcf58sJJ3YNcHfncN1YAe7YFcWKYjh25bWMJ6pyW6zpJhxAofuQsetZBR3",
  "key39": "4Q7wLgdRJ2eu9qZsGNcMjtNENzbT9BKzt9fTX43C6JXWKKVwEHLhziwZtThwTBjY5vFKbD5aic2M3KT8cPpPP3xc",
  "key40": "4r4kf5TN4V9KnX4tq3VeYzRdintSj3mSu2GYpfauwSuKbGMnGyZHQ43tLjqYZsANhCnCKi5zz9e3jdZXHgKfwyjp",
  "key41": "hcUV9g6PwF5rQgFUNJ6e9s8piKs3jqNtaDQSbmSY1q3nM5cskEPtwj89wC9PmPnDrhEumezXdRSqZ5k4jq9m4Q6",
  "key42": "4nRDUdPhUtYYny4FSbq3nLjAmuonH5JxuaVez2TfraLQru3HNXW3jYHKPAJujWuhy1Xxzc9TtfzBvajU7QMTP4ww",
  "key43": "27s6hyyEzUr2z8hq3QPMwf1DSU4bTu7kYVXrvx7nLkcMkQR8NKG1Mxc551EZBpRm96wEWCWs8UVWfSkyYKu3o9ai",
  "key44": "2ddvhMWEPCM2AnZzQcUU1Rs8H4jAtfhr3dYRjsaEehx1C2kaAHwz8kFxmTewa1SAMyoY496qvpBccZsz55VMryCu",
  "key45": "26zgMUfDjNdZfsAZvzV6YgJ8eUMStabT559BZWFdtk75XCuXDj5rs4Y6X96TCtXiMpMxyTvZFZanfCJsEU7qdUv5",
  "key46": "2d2oKUVXfX5gUW4CCsQTtn3bHWPxP8FJjnwit6MoxqWdEmMuFsDcrxdjUrhSKCySvYXShZxKEXiadfMVev8p6oPh",
  "key47": "2PLLXQbtPspMXiZdf5Sd536rvgYdWc1GRAfvs6zJf9YqcXWFBgqvj1YmLtTkU8AsGZDzgaXhzRVL8HyA9CTgWqSP",
  "key48": "4FMvyDdLm6WcigkjX91pQFJHQwpiojaKN1NbFRKYt5FHTNv3E1MnkvF4gqMt9o5qeZPjmZrgUfBfeYBh8T2RGq3u",
  "key49": "5V6BQYCQtwUF4PqhUato76nHZhAPwEGiL3joBEZvRuyAbFMk7NiJVTGzfvgijhnwLc2prw95AhoQ9LxDnnZLj3nt"
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
