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
    "2d2zd5UF8rDXyEeGiU9MsW1z7eEH7GkNujtJ2RLjmVchitHgrKSjLjVs2UxAYKc4b7isdenkPWVhBKv97y3cDYZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z1Q5NQftsfBLk9P3Gcp1HDwC8BnX7SbJJd8wniiz5BBBDCLs3cET6Q2rRQn66SaF1XjFryt8Z7W4cANjUTnk82e",
  "key1": "V7QNvA3Q3nZqSibocf7Up16VnDASBf6HpN6pQj4hrV2bBEtvrHzAUEKDkmbKMdsLLypm5Y56WvK8SxjF5uP4uzg",
  "key2": "3HQ5MG3Rie6EEvMojkMyRHHjJVTHQKu3FScRJHphos11K4RYSrResG6uREfCpvTQ2xUizsJNrv8UgM3jD97RzGts",
  "key3": "4mDCPUcBKMhTyRiovNAvdknwqkKBKX35LwuAiy69Je2CMQ2QMFNCbL7StcT6bX7NzLmgmwCXHVXEQgTi1iyxCfFH",
  "key4": "28cUsVXr4B8iVMxUsXLmZSDSDizE24jEMjBLv6Y481LrsXQSGo7mH8hPRJfEvMPdozkyvhKmk8Wzve7GnGp67obg",
  "key5": "5HEdrVfq9MuCANhgqL4GiYtxvecuWWym5BjHucUwahcznLikgSWJRPSZTTSe2z2WWbFCBvzgCZmHtYXTnBXyZ1v7",
  "key6": "3cMfHVnTGX8dKFjm56jhkEEtQCEPrL9DDcT7D8rHmschH8KnB8cek7ZwREvV7mqXzPzkS8KWtyomdzNUfFSgz97X",
  "key7": "zV5wxfWtvB6JFjn16R1qV3vkJozSLv8kB3592JRaYouGLVYNdbfmhEcJhQfvVMp9RBpVNL6sYtjiTgjfMcvRpD9",
  "key8": "2soWGLcSpKF7RdM1VzBMTyWug5wkDQq2p1GXjAsSHBT6MUQvR22Lkvgh8AXWQJJSCERHFFtzkS5z9i8ZZG9NyiqS",
  "key9": "2VQRPegq4hAZejjbHaRJmBg4gn5YRZxysBUZz9FtVRoAdNKrSvXyUGDYNJn4ZmcRwQSpXK44rSx1XZkhXkGhkmms",
  "key10": "5GAhEk7nPvFnuxDiFgQddoojR6DHdsD3d9jvpEgvT1vQhZQ9SY69roFNJqjUpaXdsGramzdj4ZVHyjGAevTiVyPt",
  "key11": "5x4fL1oQNFK1DMmyL8wVuH91JN2AbpLnTWvi2AFEDfuYedCHdiToH956Xsn9Gq6VKuNhfvu5yK5Ru5joL1sAUmk9",
  "key12": "54BLr5deyeJpe63WQLGKjzH9UX5HhMuLwiQ4NY2e1Am7QZ2KmXTwq3hEfFyuraQkWMr6CrakGzw8s5E9cZwtdCCD",
  "key13": "3wszwggLtkSGok3KbLeEs7Xajjsjd7exex7i8fHDiG8jwqhttZBncNgfqoCguyEyHAvpxGcyQvr1EXiJPKuEa6z6",
  "key14": "2DjWZTvVjpU26PoNV5SeBrdhRBWDtGEDxGFUr1rqbybirxLw1Mrp2Mr4xEcAAE8NauGDwpF44fphEtQnvjNrmrTk",
  "key15": "4XvrkbdWB7Xu3mwvEejyDrHxgZijgkub42DRRRLAuUxLvx5HnsSVMxUYP3HqfDhw2tv2aRyWtx18x8fqiCRiNr7A",
  "key16": "fSk62J3S7ACXtpCaX6rVvuMDm1w9Nr6Zp7GWdCaHLJ6vqDNFEpS8QvXvkdZTEKU8x1BHShg5HsdV8RnJZVEP5eJ",
  "key17": "25uUw9oKk6TDDyL8WJm5RCGXDm1LaW3KwRRPE2A4AAJ2ggp4rydLeDRSruYEuRy1ju1UYB1SSdwv6JpJkDzRZBua",
  "key18": "2yg1sebEwonn35EFxRaxHsbneM3zEkkmBW9LYmwMYRTQ1uAkPhRtZgaQSxQ8qAQi9koVkCEgRStgYfnTjFsWSe2w",
  "key19": "57afVx5YEKUpKBT2d5qQHoGtFmv6DMhb1wh4nEKBuaLUXew6Gp9KeJzPqXPKn5uBUMXVxs2MLeTMngkcjRRp3Rdk",
  "key20": "4d7915nSfE3SjXth3Hq1WpDNsGenaxkm93XctTQvUQHuTWuETjYxXnBuZBEFNFqmiR6jxLeAqntdZ4rPjPnmRdRf",
  "key21": "3GyXJuvUkbDdTdSEwCZT3Ed7EySq7L6f9RiAsN1tSygNKiXzZrNinAZ8hKM1xBBmHsTicK3izPP2HCWVkMcQ6fSE",
  "key22": "UrU87LP4LgrbRnYhVp3x91K7qQS1AB9rfSztPpz3UW2gA5zMWPappyKatVG38WkKXcNM3Pf5agkvXMeEszF4kAG",
  "key23": "3HfNgSWabGcyYSpVUqbsWdc6cQuC2txjPpEufEKw1hYbkbbXBN3DriJaGwZ74KWeqd4cSn1XikWU9oBCyNFifw3h",
  "key24": "5kMqk3opDyBNMk9vHDKhwAY9uAhiTnj4FG6SrvQmN6pQt6QnnSqvEQekYYfjCXzUWYEqPeZqYSVwSSw2EQu3Rf4J",
  "key25": "2E7a5jJAjXJtmM6XgNtWdyKMd8funEKZ8gLWNkhiJuRBSczxKL4WF56Evis8esp5RzCUPbSHzZehe5h8eHzsAk5e",
  "key26": "39DfEituEncHKaaBpDexXoC6iXg6TacYN756JaXiDeuJsJSUwuPjzifoAgHYW4xttESR7k99yRoyEQPwxmKUokNP",
  "key27": "2xH2bHciU9XHxLzihV74zefPBmH3sEPjQqbaZP3vzNFuNS4znVswTANAEjZTWNk1ppcpXNXC9wMZvqupP53LuUKi",
  "key28": "bJ7837sMruFARLsY61SBJAgAN7MK3r5MDesgmq1X5qrGJwQnciRK3hE9G9mQLUWqX5ELAz1xwNjLExkpjtkZZvA",
  "key29": "5nKfJ8N4NvFFtUwWtnLSKVqnzETqUBxgaRKfvGgtjsEXhrZwgCbcUGqTVb3Jr9H2z97BucyeaxswcmTZZ1HLeJbJ",
  "key30": "5nC9Fgxoz5RsSBVAp6mbDWZhM1ca6SmTJWSmDqFV1pSxm48pP1TPZN76oiBXGTYXmR1qADe8TDoyc94cbLmdnakq",
  "key31": "4vny4yLMsbSC1bSoJXiJf9przmAiDxtYfER8geKis2rnCo5fGDHCmHiskMGmpCe63Tca8LjAH6RCqpwgrqeLZMCM",
  "key32": "xfBuixVkbP4PFBaHCiF5DxWKpeGK9J9D7wEjyPBb6os73sMXmf9dtihzP5DAP4YEJMkMmjR2vGCgwKUERuexuon",
  "key33": "5NiPeBJJXVeN4Kxi5iNTEQbx2UfVtvL6U2eo6ivvNwiqRS9CjedSvA9NmJArt5PxqHbBnhKbh1zLvgyXekdv1osY",
  "key34": "5dKkRoniM5S2FcqgRHdxHho577NEa7EqHkjGEMPF9CqsCAoBezsXbMyL4qUaGVAvUEmVvKYhev7qU9hf7kgZuyGj",
  "key35": "4C97frdAWpyvjAK2fJtqPVBW2Y2B7jkPgMY5yqxZ6B7iZkJdHav6xBMmQ8HfitWsjt4VcTn7YLSs2nUZHiRAowhE",
  "key36": "4uWfMRPCsLW7KrUYLcC6DuN2kjXHgKqHxouUhQprdLGY2gbwqNJQniAEMA2nrPnvp6bC58c38dx8Bzj6WynrE9DL",
  "key37": "5EZPnJsBxq4kmMhXxmrUp6gF6XcAHCq9vE3j3JQdFwB33zStBqkChRgVjerBMV5xsRnw3YJCUq7Nk98TWxXXm6rQ",
  "key38": "656YTBDkTuMFpq9ASiNgfJiRz31mT8dpcFDNDMhpe5Sd1q1vtosE9qTSXXzy1DTtn2MeuXyQnVhZMECqbbsoYmJ9",
  "key39": "4gspZ5TGZVW4nQi3erJfyE5cG8cjLide7PND7DGVKhAD7JnJtQbAq8v5nvc6jaHKbDqma1JidpraR9hq4C73XXgT"
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
