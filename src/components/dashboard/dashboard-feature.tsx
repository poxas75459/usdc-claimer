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
    "2Y4U756B4Jq319pVdbwoVUeBoEJxdMXrx7To8iQdXuTTdhJMqFApHypwz4r6S6hnFV2b28uzusaE3mS9g1v67af2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mCUuQMFejzGj5hA8HheyPgVu6PTXkvHc3CMPL6UHUTiV1kZtXbMCZe9N5KANZejwvvMsKoqtqEXwtEYEWraoio9",
  "key1": "2ZqH21eXmaPdLEmBCPNiP8xJjS9bCGNhfyZrJnAFB1eoeYT6LyvfKBQbEUoub2nhksQW2KaE2p1avLhMzhfNBVCh",
  "key2": "3H6xkP94gmuudsLZRrVGXQf6WwsnL1K1NF7bTbqJhrRy3CMvp6AY9rYSMrVG6ABjMSXTScxZ8Qh45L1FG1pkw2Kx",
  "key3": "2212WECbMH2QxbwCQ9oEZwh2a4iGmSTuHPBFJfkdzekqqbR32af2T1Gi5PRiqonJuu8xvV36AJUWy5JLppLm2AFs",
  "key4": "67PwuH4zVshtAxhjsepLLPnmYrVwZS7uSNmfcXjHT7H44pGKYS9sMmPav5j338NQB5hgu548YY59TCKy3JvLfPto",
  "key5": "ERk5NrudBALjx4utyXo79Phy2hCewU3m1y2Evf4DLdvCyvAmxtH5E9UJ2hov1uY64HBJrod7kUTg9Y98K4NxXrS",
  "key6": "67XdmJuvRJowemTMFWNvBHoydUEmXzDXuxAnLvDexwtXMM49AFks7uKpqNrWy4WhBZYPciM7Gs3jxCwZK5PBeQny",
  "key7": "4gnuvPD9gsQw5HwtNg94UMgpJdKkXzgYiRSPU7gdDRmqqMgwouuacGjvZ5pp1EoHXvfLbgd523fKTt22Yjm7dcvh",
  "key8": "3e4jMsRjn7wg4DmGvTQX3QGwyc2PCGMriacsGnrwKUzwwDBywDgeeGosyN9qnfkQn4cMoKEZL4naH96T2ZDLd9PW",
  "key9": "2Uah91KGMcfjcRi6dg41KJSmkTvs3r2dC8kpffokZ3BGwgZogsXQTRFhpEyvtPwtMYZthe8rGYasx4puidUZpz49",
  "key10": "9Fe5uwwPUMsouLqRpEWB9na6HXLuARZ88WAj1nBBVxK4bj5WkA44EgC2kc3G7kPzpLT8M1jNe1ENzjjV6NWEm9H",
  "key11": "3sXEN1t1WSnCitxfrCrrQJyhVe7e44LmazntrSAev7sTHpCarH5kjMoKs7AQJuAj8qEcc2KyLKjPbPwZg3yAqnzB",
  "key12": "2ecRBjQ6qsexhfcz33G3mwgZcjvc7Wx5jWJiXut5hUSm14k43HW7VXta72wazyNQNx4uir78Yc3rSxeQkbyNsm7k",
  "key13": "3VRzzNnxB3JqPGjy7Q1u81KwVh6dbDCPtAEEm9kcwjWx622ikcHmUB1e6WzDbcm249stz2LFCKVkTmFvLPgX731X",
  "key14": "2SaTC2v7PuRiHET2D9M46Bzq1rtwGMY3G6V1tDHqxYK2uXJY343seRAwUSee8qt1CuSjy8iZprec6qB1ofZKhQBU",
  "key15": "63thkcCZfGuw8yL1cgrEZdRxTBZPcn5sRdmaqVJYVaYsc1MAKZ11Ecnkm3truJoZpWepMuMLmH6YFvxoZLbAU7Lo",
  "key16": "21CkVCzyUVvUYVzS2qVCJdE9KBx81YaHtcVcetdJiPxgSFo8QPVBXVrR9xCr4mrijLVKoYKKGMx31tucTGG9tbzr",
  "key17": "5XqSPpXs9k5gheaDqLS5Lb5eBNPxtzFnN4NMTnwqJSGRd6R3Cr5g9UWy6axtiFUCazRPnebePP5Wjpd2DEcUDmXH",
  "key18": "278p4c3pq9c8EL9GUCUXoLa83Soisa54KjotTu6yiqEPdj8S8oX7cpNZy3gtrxqhdfDsqjnVd4CJUjDqNUPedBgF",
  "key19": "hLt19TDbzukYUX6HsEdHpyUjqjfQhmEY7aKYmYueL6QXsaWiB8GAAnVNn81pAWM5gro4bJutaTg5Hfn8YhmznAN",
  "key20": "49iVaHJC5Sy8THpeModALJ1vkAbJxBbt6CrA1bnuys2qct7XbNNiWvc64metmHP9bADXc9YK5ELQUUS3jnaWUX9R",
  "key21": "4iZPWbqYAcGr8YhwHxsGdnH79fzscxKPAn3UcsKoiUzxCqDQDTWf5KqkP9NzNeejREsvitwp5Rm6vfK4TQZ9gkwi",
  "key22": "4hAq7cVfPsfd9gVZeczDatYoHJu785XYccmLu7BjzAVZcGNyWqfWxMFF3J9Vu6cQuAQ9PgeLB2cEDoSxRKRGA1wS",
  "key23": "2d56AFEEBNyzWThK23mRRWGiKTMAEaFGSCHsfBnEgb4qMFjpWgh1ZDbhL33xenW49jg98dfNeQzYfffWL88Y8KbG",
  "key24": "3zGyiDKZkMWu6ugbbVb3XQjCizshHtsMUzesbiUy5VxeFvvnJwcgJ73vg5dGsr3D3D8SxLcBquCKpy2Lxv4tgJuv",
  "key25": "2BVNu1YGrfekbFZVBSGYVnaPxJH1hKMQjDmv3o9m52i9T87YGexV7WH5XpsGJ8afK2gT5f4zrG2PENnSWpC7KbtS",
  "key26": "4qSwCgAvehddDM2MRu31sjGy2mqrWFzsUKH7yudwm5C6LuGDcgBYg6QKREaghiRnLXsn9aRfZph6WRwbfgW3sgrQ",
  "key27": "5iNys6Ri7k53K2NyZvr59fvwigqwYo8Si6ciC8hhPfcsiW9nrDN7Qmhmp4ZBz2bMXPpd9tfuFCV8uwdozikXvj92",
  "key28": "2dsHQuNo46KC3Rkx6sP1sAuupCv1UkzABeAX8XjnHQARv85dyxSk3727iLZarQRHxSTHDswvV3JFpqzaPvPru3St",
  "key29": "fGqxGecB6aHrd9yUmzc8um3emJP3DvZc3LNvs2K2Q8HMmPLgN7seuSoHhsDAGZ8463U8XsqU8vJt7fwPe6A16SJ",
  "key30": "4EcAppRhe7tzwDyHtNS2y21jxsDM8bR85hRd46cBvy6WRiBGx2MarAgttEQK7XsFZmpqArmjR2EEoVTRVjoVBuh1",
  "key31": "2Qjtprw6UfDTxaimxu7uBpJy5vA1RoTywoEhvYBufuu2R1SG2etzLG8DZMTcFYgSZtYJEb3JCVsdcmyDXP4krWSg",
  "key32": "jps438EsyBcSE48V8mFa5Z65uFUv6ocGoW5ajmCBJ6UJ48RPHrzLRHKyZaXJzCcQZc6uJJaPshkWEbvmS7SLsKH",
  "key33": "3SywZpr9viFHBtvrrSxpg2a5UztEVsXDsaB6mR3SadEPT9aNfPWudrxLyaRZiAWGDBqAfszWKyy6vvkYEMEDbGCF",
  "key34": "3xHimUMRkYZ4A3EqwM3Cjf2HF8sQCTk74pu8fahRSYrDeG3wWTd4pstPbauk6zUd57ZL5Mt4gj1i7voF5FD1ZPiF",
  "key35": "xuRVkREcJnCudpEccgRPmErwCC8yvhmub8dJPmbNeHQNaAgLrmxtRYNFH5ivro1j3TT7KXDLKHAhawra1n1iXdv",
  "key36": "4gu6tB37EbkPbZTsmchk2FnXcy9ArEjwvkqFiUtoHcEjPJQkSmXYKkENjpS8NbbSpwm7xvSCkQUWKLXk7MhjMdxW",
  "key37": "41dh8VatPsh2hse4JLc3kKB1LUr9UqeMQp6TpSUfDDtMUwJRWfGXpW11rAWfF1hXSanC4wj7yKcAgzvLsYYRj6Fj",
  "key38": "5FprYHs8QnjLtekG89TcmGPrzA4UVZpDZatvwjjoPcKp7mTrdASmo8ssTubPCsexaTJENzVwLvsqd7ezMYdpT3qK"
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
