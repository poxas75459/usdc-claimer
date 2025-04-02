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
    "63FUQH2WzobCM9jcCXg8A4aDdmhU425roQf5bb4rrJc2qaprFew4xqvkBvPZ6VEHtYugMz2BiRFV5nq5NmYe7GTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cy9JCLnq4F688Uov7UPw5znF4uT17svHc9b6ffAjQgc7rviBNBheAQTRB4EEvFzmyCPHPCxRaB7CNwptzfZGxp7",
  "key1": "4VAKhQW2GojTHYaaZfeE14E2e8PhQYzJXgqdGTazHfgVPYGWkFmst3AK7r7MBQQDDtq6MbDwnDfuyK7yqxh69fp2",
  "key2": "2SBvu7SrYDvtCSkZkH4NZvVzD5AeusRoYzKAynvj6rQxASGpaqiEe1fbcHMH4wtP1qfc3qvNCyBS9N2iUKAV5sLd",
  "key3": "3t6Au3wbpj2e1YhyprLd5DNDKRr1p4dXNjnPJBxx4su8P2m4Y5zRZqbzhG9ftLhm7cRMbhHp2SKqNuPLLEUusFJ2",
  "key4": "2omCAWGoTvYamxZW1kDhwnuDf9sJ5irh4M8XSspF3HcpAxAmVGbxFyhPKUc11BQudBDPUZKSFDwBh8p9G625xzvV",
  "key5": "4bnDW6pqmTQFV4jtyxkhhQLS6oet3KvfXQzDQoWdJp4vnCTRXo7zPUy9TWgyj5GwfL93sgwo3iyHLiFj7wSZ5rYQ",
  "key6": "4zj6MYGyANpeTHDnUHeM7k6sZQvwHFJiLCGCFEF4Xf5Ws8kut4r6a8hXK3pEPhAwsoxT66cEV2PBDYSYUJqtFRgw",
  "key7": "4aqUHcuA5f7Sec7ArdDoB7UwxPaDy7oNmcwXwitju6mBLvWR65wbewz3qhLsVxxG8oh2Cgz2hbM678e9H4SPWUry",
  "key8": "5pfrHvcWAwST9GPvETauvwgjYSwvjUk99fHDVUqGkCqJH8Cz8vnVP1HnDPHSmY6a4hAqz1mjxs43CvizgK8KCCU1",
  "key9": "2pGUmA46mFsCgXQVbkF646g6GCcTnRFqh5qrXJ1c1VMMRxHaHyngjUyUt2ujp1GTNfKwYNi8NMC54se6tQMKKL2x",
  "key10": "pAMjM6QWx5dJD9yHS8NiFt8wLyanMqa1m9jtEbGej9gNwn2tFkmC9Loh1qswHwVdnm9pBhFnicpRBVizDCguPPc",
  "key11": "MHQTBydNsRyueCF3nGqBchAGTqYudiEDTKCcZigwpNFiyFn3f96c6U84hBtAACxNJU4HNP23Ezj5A1QABcozdqN",
  "key12": "3a5d5HrcHVsNUKLCL8HekAMD6C5FhPWbmsqRHdSuMMK5nXB5iucMHEWawc1unhYityMDz7HMx6NaptxEroPgGk8W",
  "key13": "2qDWR4TSk9gtM7HN6cmMdZ7JPKkh44YJQ45ArCj9rMwthV9tMMcNHCbba3ww2N5vm4gGKzKCL9riYmnpXNqedzMF",
  "key14": "3iZZ5pHuH9t7szfhkCXXHqqV7S7KUqehSCkcEYncpbKsKumDrUiPYJx1BF8ixEuUjyLHsGPcCGkfkbhz34Gt3qPD",
  "key15": "2VoktZH8aeCiAN2dDiMpkXeTZgSxxsqMRTwhEGrGff75WukSpJTjhK57hwjRU4hju2hRg5oWkbqEWNcL5YyPBgvJ",
  "key16": "3gPHuJ22GU1kntKWA4WzkTsydcpe4xN6yCU9SBDJT1aDFNUKTZZJJqyo6rdpQvMrKr2Ab857fCmfXkiu4X1U3F6Y",
  "key17": "2kNDi3yVMVi9iZ64XezZViprvUEPPZGRwnPsXpQJhBejGzcEVuAkfHfFgF3uSrpvPWan3R8byL7LuaQeyixwyVuP",
  "key18": "2xWR12yJu1UddB17yTYKj4kcEyWN3UX3xipXTCn9huQGNT6ZZxkuae8mAyGKEFm9BRCn1Xt1pi9BQhnQTCojRDqk",
  "key19": "2g3RjvCicMiUoazVooFN4BgRqSvySzvfKrLw3T5zAwiLLHx2tEoBej5afZk39HxWk7n9RfUxVCfqYpKsbYQN58w2",
  "key20": "5o1xnyQ3SGQtDRnD8fpx2367HBgpfr8RE1McFaTwUvhC6guvaFa3BSYbv4rzLBeeiQ3bwZiVGSiDkZeDFKk7GkhH",
  "key21": "3UZL5DkB4b57QZn9NM3tbzEy3nPAkDHof7x3Tm2eowHrTwu3K55gcpvYXW69afVjA613qL3C4cJjPYfbgHNFSEAA",
  "key22": "xgLzpCJyb5U6KaqtMXuYbyN7bwdaBvaVRJGwHt9BMXVE4ELLsx4dWKg4VyQQyDHxfackoy5rHZBJ4MmyKFTkAsU",
  "key23": "5dpWEAj1ihGvTShuTd2jc6veoWgSYDAGKuCpFj9aTtHqB8yTZgK8spNPdJCd5Ui8RpopUPG9bXqCqntGDZtDq37q",
  "key24": "5C8sgje76XN5ZJeQPggshEccop2hHAp3YaLA7SxN4jsFhRLjMbgPawQXByQRAZFXzJfREEtgqAmHpGSg2XNc9Z6c",
  "key25": "5LkmFBSV3DzKPC6G7UYStZqTgWP2wT9A2nG1Zw4nJGGDPxwundcqjGcu3zysvqWhZJe7dPsUTPjvpjVufb8a6YP8",
  "key26": "JLsKzCMx6qe7MstPbQ1oUPefUHvK9B2boDL9ZhbRRmJQsF6EUghzzGZCHFLrhsxiXF9jLmRruNyxihdHi4bFrUh",
  "key27": "5E6MaaHMCu73PbufAZR8LLhx4AtsNP7xDNHMZPTSSQQUvQ1r18hg1yDFJxjxRidxxztpYxUdvpDs4tARkx1Jb6Z7",
  "key28": "5aZdzyrQoN64NNSreV1sabhy655nfQte2cP5z2K1GJNbWkFn1SjdX9yphRV58on92oNEs5ZteMbKLwpt5AAUafsk",
  "key29": "2JW67ab3aJytqBKRZXfBfNb7Mc2MY8L42e3EGkqHyZr1M4PtmXsn3LQitZecChVRWMpvQkpDTVW12abAGv2a7aGH",
  "key30": "3ttqLfWCt5RBqExkm2noWiNnE4ggHyfpARKo6dVDyFtp2mKsr31nryqprYSZwn2BZEhbvRgXUtbsqGB4kex1qbge",
  "key31": "58dBx7UcVz9izQ1Ps2Lxo3nY2pguSQ8SssbovmvUjYZC6cE2tTeqHdgs5zjTiv6c5AHxLQcHAeW5CEfqwNsPuixU",
  "key32": "5HNb3uhardq4muKTwKdZ4ac3VC3kuSSFjejUApYyP39sM2jQqZTDQXhyfbu5Y3ADLrbVGLechsCpnrJcvSbcrX9p",
  "key33": "2aEtyFDznE5kJF3mAWHZkmvTBrUUem25N6s5PUGxWsJGKs1qVchiu1QYJfs7TY1NaebmRQ7d3zHTNkEAjxghuoFz",
  "key34": "3whaLgvz3B6GwfZ1U8wu3CjwnxJKAEhEXxcTfVMfMEamup2s4yJ12BP9wSF43VtC14rqo9ELYTrDrN1wGcHDHBqf",
  "key35": "3wRQYjHP4AFS7BBjDiUhRnEKZ5WJDLqpFZeWRZDeSa7Yfn8FLqPVWDRxBvTtPC5bdkVojhRuvAnqH454TUGw46QY",
  "key36": "25dGFbMRdQGgEqSZnnLmctdAetSr1GKoYnL3DvCjDNdrYkSZprBLWC6poxtCox2UnPcWA42NxToTWVgvUdZizETg",
  "key37": "5aVBCUd3JPrJjkQkssKpSF6p1WefjFg1CHgY5hRPSG2P7REATMSzFUPSZNa9h4MoyrqmsKLmYo74xijNQtVFdi5k",
  "key38": "3RWcrZvD2arTLmoSXxn7j4wq2e14rs6J7WVVjx3GHuHpnMP3TQ7GmkBsTjCci7cBie5DZvpKQY391VqYubhFH7Tc",
  "key39": "3KtDRdPL9diEJsmNpwEqTeyc1wyRKrKa5t9Mvxd3GSx3pzLavyL83AKuhFJCskgyiHrj3De6NUnRM12THXSVKsmG",
  "key40": "4uLCKhwS6qy8zZvGDiDaeh1ZVRuw4vUw38UeJuegnxvBYgMNywWLGHRHavuy8wd1s8S9YFZe5QcRZhGRZG1zmB4w",
  "key41": "5S68fRXx2dtgaTySt8cJ6SXtZfRU2Uv3YjC14V5BV8C69aTwPAdCVWYfWByU83ZwcAPkZibdQUr1FtKZWMajGe85",
  "key42": "5vuLEQ59D73um9s2KvhqADv9EnEDqFZwYQF3dbfVV9caLaqjPpdWmJbw7DihX3YC6FKDTgtxxscLgKT1SyJHyTq5",
  "key43": "2s3YDTC34nRG7oCa2opNjcDT8wUNYkytDy1Xfj1zh4Loxkvs7GfwpGgERy79mh1v1wqqxxHMf5U2A5qK2Gfxf3BF",
  "key44": "2WautWVnYM2S7B4kxBkeoHJdn19VvQ1a1JQXwmypU77xKrMdtcsY4xsopFpm1EECQpqRzLm1qgDfUnK94ucKxTuL",
  "key45": "4DVVMySTohHK4YLetgWtyaHve44825nAnqSspgVxg2VaeXDBEzgbWyMCfrMT8pheqk3KzR4BEzG24NDst7LdkSLP",
  "key46": "4D4GMLNgUuxbeco34xAQ6UsYGakMDykFB1jzWLGeBZSMxmEfZeRtr3PSZfhHqrYPN8zQFky9Sxi1F6CZQGfvcgWe",
  "key47": "S9agvooE9wpjtUpRJR29NyViZTRB4G7EskF2dmpVkXxEYFiJwEcmKEzgzqdMQ5s7mUAdp4CFgKokweVK8XdHdVK",
  "key48": "4ff7cEhrbpDoPXEcUmnSUZwR6DFuoX5EZQoiZUYQsY5yWvgTmduyo5pFb2Rjwmrmcp6TrkS2CBE31xBbW2rGZr1x"
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
