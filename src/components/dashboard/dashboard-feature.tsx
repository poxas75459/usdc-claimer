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
    "5SB8KD6TaTHpmoTvABZqUNZkMc2mCFA5cdHFpXxUer2Rm8FdGUQkNEkWBTwo4izTVhe3GGtUyDTjQPx9HCHE8S4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ugum4jRKQ2SsrhN64ErJ22aNLERfPzYMTVG7LtpZknSHiUvyyxEoTJg9fyeT7XyKyU7xZ683A7NxWvtuN7soUBU",
  "key1": "4J6RWMgdytmjHmHuPKofT2JLXL9ZG6qRc5gdifbNRaKbwxEgSvmAdKMBxFRZxY6mKWWNdV2NTwPR1soaeJhE8rLz",
  "key2": "4QmURDBpArSK1igi6QnpRpiwsmT8J7SRPwqSEre7G8K42AMnwD6BPWogsSwo6z4PJpAY27twydU2pXajxbbbLgtF",
  "key3": "3P4eN3bRo2N1LfZzkm5uiX3Dd7eXgnBn16zZLoyEtvP3ACQnuiYLqQyf2vxuJY7P5PkJRQ5qthCxAfaGyJd8n3PX",
  "key4": "5CAFYEmFLcJKUF4wj178YGD9ti2Rob3W1QLMdbu3xrt6UQUHVjMwCKWE8i2ieTgqznn72zRF5NtgG9GDbbsUCYBw",
  "key5": "2VaPu82B7Eoi6eEJrqv1RpHTs83bm8qHTM1mDe9dnB9pkrmGtfwNEvAgW91mVqnHntDshre3e3LwevQPQTf4s2Fx",
  "key6": "4mRKoRkWbVNcLg5DTQP5YzcpwH8kPGnuQJ92y4yutYNZTSbM5NCG23UMuQdTmFU4yDwAUf23Uh98kF6TQsTnDeSR",
  "key7": "4XfpgzeGddt3znYKonGo6a1uzNiqjvmYHvtD4Z5C7GuxbttresMckkWLXoG97G3jpECDvUhqJYgEZ2VCxcd6D3YB",
  "key8": "5YmyhYnrsbm4LbEaWAXDZsVGtm2TS8vtQjWRwgwZ9MfAif4NdYACjymHNVYPy3fGmcZWDqxETtNNw17tNhBHCkn2",
  "key9": "5yPWm7Y1zmFbxb1CxEKzK7sFTTZopARxfimnsi1m7xURYq9svZJ8omCzpJ66NRdMeY16jvcvDy8CuQ549W1hWzZ7",
  "key10": "2sohwq47HiPsRNz7N5DeyeUiNxWgG99ajFcaKP559rEAngiz2HczjZRP3KGLpqGkzEyY98unnxiKGU11iZ8bEv2s",
  "key11": "UDwdu53SN9VGLe1KnWW9H83KR1YpVd6brx4LFd7ay9Kv622JgJ67PQFyuBdMZ7WjbgwjqASPbzCYxWyiFKt2S7z",
  "key12": "2dgG21bA4oJsiff1QsXdsiSGUUvS4GhZbtrNo7fFmEWAc9xFid435dK2YEwtAuMPrABB2TPVmtveUgvNGYagHHi1",
  "key13": "5Ef8gN7TRvTs6o4Fokzxnx5gaBv4UoynPR1849guGeGfPXhwsCAzpDf8gsYwGL2X539fu9BMvbctuMb7cThhc9Nz",
  "key14": "htn9g5MXhWs7kA5WYg63v2Z8283Embyi5nJY3Eude2GveGmLLxmbfuAGJJwgByYQH2KXp3Jg7g6UYX27WJitBqu",
  "key15": "5N6NsYrzN6RvFKB6AkcCmnQ8G4GrASbSFa8DCgu9CjE3QT951j8HHhSTVKjGbUH2tsZEd2C2WbGmWGtMjv48Wk8c",
  "key16": "ihanvXjrq4uM4pdXafhGtpEg69FCcPGPU3Y2EC1NEzYKxmH1fqWreNTDiLhWAfwmfF69HGEbVUn1xBnEsP587F7",
  "key17": "5VzMigMo6siTnckMtdX3UP73st2R3i9yfqZStbuG7JAHuas5N3k2wimoBaDQbyDwsRWNqxq1j3ViLrqErzdH58iC",
  "key18": "66aYqJHHucU9R7oi5FwWDHvn7GV2E42RQGhAmnQ1FmJTBNZqExENRnr7Q9fVAqhrU4Bhd1qM5xkd2DHg8du1PFTN",
  "key19": "3tDFwSjBZhcSVWSzd72PFQiG8zvcseMQgo24MqjV17DCWfZiXtxkvc4iRQjppKm7MP4bvHB2hUSb2im8NVGd6BPv",
  "key20": "2RzuxkXV941UFz1cV9Mc89McjXqh6d7rR1hyyVskEKTmArWFsLv4jqPPL7mGAaYvQe2cQJFLzrjWKcpGgnptgcUr",
  "key21": "5gCcaV13Yi67J9usqR6tkDA4Ni7UiSLf9hAw6uYNgQrSWVwMF3uWuwpwcyGU2n6zvM44NhTy7Y8ujucEpHXx2F2a",
  "key22": "4Vd6axfkvcufggnfjXamXH2az6onnzz7kBbD8r9cQ713AYUxs321D2NX8KYYG45rdSFvGrZ9pRgxFbvbPZb5USCV",
  "key23": "3bPjDjdvgUuA7i8itpgb7bhVc36Jk3dGq8T6FuPFLkTcTbEbeQnfq1DCKV118xHkSkwiJ4VBbQuerdVRA79Qvhei",
  "key24": "32cgAa5APvfUcm3r1cwYKamDVkArPytme9XY8JxakQ1mn9kGEy8NMFfvReNzWMnmYwLZJPp2juhUbS8UMUviTWrf",
  "key25": "2QWpoWENwf4Saoxjeqp3QjkHYuYwjg4H9TV55MPKRQR8JvwVxpXTg6CZg6F2jwJute77cZbAQb8qmb12NQgvfw2u",
  "key26": "35aWaU4E4YggnzHYDvDwvWVH3dD7JBp977d5NHZXxDgrkqB17ePkZzStRgYujK6xpoL39NYpXhPKUXBBaAG6W38k",
  "key27": "3J7g2dCnqxvKxevZ72nHNcpu1UFPyZhTMUg2fRhGBhdgxvDofWyYakZYbPDrYVBnvUx6yrzTFoNu5MqfY9yayxDJ",
  "key28": "2mXzqfk8qZXnDcTHNea65Jmpg6QBxKckSi3dFEjn2s7oFovW6cT617tMJCJgjahVDEpehXRsW56DkVG4Qq8mLMbf",
  "key29": "2wpKPpoEGzPUHk6HDUfPgkPKSvrqGUCAt99oiYrBynC7YEkEfqpULDrhxm1PqnePSeBr18RUuG7SVSMQwHf1sXqX",
  "key30": "5AVFthHcKE9ZsQHHoYyKySony4PhmYuqSSHbRBododn9K9vmo6rwCKkVVCUrergqYkDibbu1RBkuzAN7Yr4hzJTg",
  "key31": "28VfZfAVBjdFRweqUXjc8Vd1ZyzJkeMKquF4cj388ECEEKNoVhhjWmnxGWJ9uuYyoUnQZaQSC9E1metPVKCeLSCK",
  "key32": "3Ho2SnWbLXFuqCgN8Vi1HaeDDrZpEoYBScMU7EtQ7Qph8Wdxabj7hAHHFLrRNswmkstoguZ9gUDSnX98yQ9VsvTo",
  "key33": "67iwo5SrwEdM2AFJk1XpRTXirSAdR7wZKnxoHaJnDHJFwgso9Qvc32wZXgGbGbJNsCXJqXgC5ZAb1qqo2yBbGdMM",
  "key34": "3R3jbuj5xbDQBUQRXYp1RwWRnudJzoxpSTTHLEEgdzdix5wBrhRgAHTyzjGQUQVTNfsqxQ92xnxL23qCShyPVxeM",
  "key35": "5z4qUf7Xr2gdd9pDPXnddAuMmopJ9xEQMvqyjNnX6BgN9iLC2YwLbXHTmxQ9B78EV5NCHq56MTvBtpYppJtea5Zf",
  "key36": "67fQc8dx2eoff9EWcV2omhxRAg6EUuLYPBxn6vQ6dMqw4eFmuUHZ2nQZ9ggowvtrvSbAkfVAvWYLt6khkThZbCCh",
  "key37": "Xt9GRBw4saofLUD91f5WGDvyrqVQMwiyRhZcxKfnXN6hYQ2ZQgJYWUA9TriLMPaWJFnvBwAK6MRpE13Yrzd61cu",
  "key38": "8MpmPjY4DrDYfQxFKFeM91LMTjwyVsMjj3PYpPmvgkU4z2qjEAYxgTVAVcE7fcvuaYmzpTHVPyCukWPSER5koZa"
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
