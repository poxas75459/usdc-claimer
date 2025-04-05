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
    "xfwaiDJvBYW1K54zguvtU1cAV7j11SX4afCzTpTCdmgecB1Vnb2aiHbEvxBxKkDiHqsHzGYtpTrCSbgibUsHLmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rs6XhWVqUBhhUGv9SW2u6TXNjyEjdnDihV3GeVKoRQhBK91JWQG4irgUocxcSj6BtSDeuo3GBuBoqNH1rgRuo4d",
  "key1": "2ufpwUNzQTCvhm5D1ywPVf4KsCAivF3iZMxumAsLpBR4Btq1Dw9jQqTc2ZQphrRMECwfgacwqsiHsKLyivFZD1R2",
  "key2": "381H2bEtrPYxFhu4vPUtnZE3xECWUnne4dnCThYJhiMZShTL2Tk7S7jpajtANAFGBQRSqDWv1tvDEbxPyRwrxPfr",
  "key3": "4aPqgpzGfBucVHPrTzdhw9eSCVUMJAYQr37DQKESX3i7TRhHe9EhTcZxy9jsPbSZMARYmQezHMbZYtHPo2gU7Kxk",
  "key4": "2ozGFZCNodyxdKr5dk4e37mcEdD7TGruwzfFLyi8zoExaYRTjooWpveNUrtBdm6bPXDqksjVkVghNgTqrjZHha7u",
  "key5": "2yFzENyj9NZnbwyyCKgykaZcYNqmnf2wBrdLEW4ejJBAqABLfS8KNyxfJiHGRqM6oTidDx9FDT7C4NkLzwTZFZn1",
  "key6": "2d7aw5kFbRsoYpe5jr8fqW7GFUy7aWgwRx3BhEyb6kHVuNVrTimGh8kV5Myj75LygQyCkf2QQHfPUTk9ik8DKeBb",
  "key7": "4MT4UCFpfRTLsSkhfwoskpq7XVJQ64SoXrjMFHBjxZNtm7hvfMoB9BXYgovFGM6ysMPont8VMs5EkL9dMZ5BBcPp",
  "key8": "4vvCswz7XJVdnoJnir39aunGUoH8gLWdKJibhhRNqojSe6X2gTcJmQGnvkD5HjACYeGLfUJQRZVKCoHYHBP5mqd6",
  "key9": "2dSdARLakSLaPr3U3scf9fFCbmXAWAxMVwarMQ9aZabVWtb4PzRDhhmuuMnipo5sKoPWpbpU8vR9AfBJPzgkkaPc",
  "key10": "4yguqbK4YZ1LeijZuRDqqVJa8aqhqa7ipcaQj3PpYujovhN7PkhBL3i6DDQandairSnyVYTdPd1ygUUypxjkJiRV",
  "key11": "4uAq6UmXrRZcRWsZAZdSxbgPCnf1xq9qfJmvDw3FvPKsZXkNgeqWArEjnpzeMEKR838WsJeHVJT4Eweynya6j5SZ",
  "key12": "3jM8EW6DUaXAcELFpyHTrVQsAdbRuGeWPh1F5MBjoJJiWntapBY11Z6jNsZ55tU6d1TxodfiVA21uhXEhdzYZC8k",
  "key13": "3VduVDupGShLF2MkDHSrUAxxdLiCxdcpP4FUSzx8wAi7UA57ikx4f5ippkbhyJraTqPRuny3rzjrxfxF4Mgec9oj",
  "key14": "4tqhz7aN2b5XqU8jKMmPs2vUhesp8JF1Bpg6oACtnvx7STLFkt3iKEnD8Uth1Skpw7ScRXWAnsUQnshpFSRonP3G",
  "key15": "5uVa93JGaCjZu7heBiN9gTtsddJaovy1BNWs2cJ6wj4Aqq6oqsWSYW73RELLCcbh15YojCYz6jpg9SxWiMQWScbi",
  "key16": "HPQ3A7qX26SCHqL2ztBm3xJd5g1VfJA5cjhiCZY1gJuF2G4TcWk6jQw83fbrmvAFToJ5pinuijKPv1r3WdZUVdx",
  "key17": "4BkZyEh6W4v8LgcJGrCrgSpPiyj5d5YfoNNHLs3589Gu1YyGkzQbJ8mMQhHBfDe1KEJ2tXdVev1wkKJN3oRYckYx",
  "key18": "319xWM4nojg8FYo1An65FmdH6CWDyrNy4k64JbZcdxyWcDct7bh2hnTYT1aiSzPT9ShfK2pn1DUmMsdWo4DnyD6c",
  "key19": "3zWwskgmzfzktzbpuWSm3oFr8nwV6K3rSFVVZXraWtFvY3FVawppnUeAEkaM3X6mV5jB7AhqymgLKX6QMMhs5rMF",
  "key20": "4FsbhBZUhuDVDxgyAcY3tGjdmkP7BW1jfV81ibqxMx5Td18TNFdv8uAYN4ia7us3f4HtG5cFxvqNGPCm2Lw2ActV",
  "key21": "45sKDtzG77SwXdoEBSMjejUXprgqZvERNriV1mrjMCFrG1RRxJvDHmeVKhBD6uhUwJXvkGpgFuK5HyR9fckMdjJN",
  "key22": "5coidf6yyGH848hfPim9MTzHh3bQTNdVnEcW8KakfBX9qUaZ1h7xLyrmkCyGrXc2cbh3Qexq5e6jUtSoYkztNpVh",
  "key23": "42EDfjE5UFq8XMZ6QZQ7X6awFJ2HtWYU5BQGLeNJkdWEUSZAKA3aCwUsZtxrQyRRh28ygeDdhYfWMhE8TZuR83Lv",
  "key24": "3E4S6uew2e7v1BuZLL3gvNjfCqmBmh1BzKCsf7pihEmRSZa6XrsaqMY8ZLwPoeP5hZBn13qRwQ9HcKVWeAE3gMgj",
  "key25": "7UvzZkaEevAVXC5YT3A2RLxY6v8NMM6fGSxa7mG92zSwJFPWpnp38XbpAVL6BmRQFBXRSbiRYFeifHnbRWisnEF",
  "key26": "5RScZCvXFzjSHkJTEdVD5uuPiPTmiZAriauCDNv39qXyGkMPdQ9tAiT2gd1vvWmHV1Xu4RKnrECW83CEsRSY3nQT",
  "key27": "PNPFibes2DvjAZ9Qp4Fcswhdxb3TDqNWVztaXaa6kmg7n36sPCuquhAFUu5fvgVWXpkjSQisfAWve3P7C1cxNFd",
  "key28": "51oYFD2SFJfkbAVMkRhDFSB3mN9p6ZQW94ZXvQa9QDMs2nRnVVLbKa5p75nZUnTTiMLQjrc6bYyGqXcadtqpC2dW",
  "key29": "eDrinSyYGDpoeUmzwTHFDxTzyQNMSKGCHEWzsB6Er585yZ1Q62sm43yxZtowGyRnk5mDfZZmtJGg1ZdwGngQbmo",
  "key30": "3YzjsjMeQkorQ3EXsiHtkiqnZeB48c9ZMtgszfiru3Dm3GUBgHStmcQg7Hy3WWzLC9yGawMK7ASM6QUrvBgwF7pR",
  "key31": "wzPR2oeYByVSFTv3W632cbcj9yHCyMm6fHt5g2e442ED72iznhhS7w2ormkJEiP6MC5TkiiYsYMFFdicM7sBoWs",
  "key32": "3KrqAraMTCgQ4LeuqGw2jcCHMaToGL6svtnx7WHnwcxxBAbuoCtNcZ5A2HmzxirqsiPs4A1p29zjPCZhX4Zou1rk",
  "key33": "5rysN6iHpE2x8a4qLXQKWZhNCNhP9UwfCdQwuoWsLzBwao7EHVrzpYTLU5Zmhk3HY5sbC3nRtGGrxiwHuapCQEbS",
  "key34": "5rPi2NLtzATMECW4DhdYyhBYWSQ5nzUFbb1p6XAK1WdwfUSJZgNhPp4F58YkwbTpKu2Nm7xg89633MnnLmCjskCo",
  "key35": "3BY7FzZWPSu5k1GwM9FpHGh1HPRdRsQZ6EZx8thTA2vqhGUcZiJbEqHHPCjfT38Xu3U28Z4MmDjzrhKCxuAexawX",
  "key36": "4GVK6jNPR3zCkGSw1VrWNCkUZpDpG6dJX9fvfnmb9bYFYr6i4FycAFPPKP4TBEerFxUFL4VccrhWn7qfoYgBbhHS",
  "key37": "FPgg4apDSvGUi3wu1i4fvZ7WD3uRHGhUw692sLMLhJXmanbPMtgLELmMHBVSVtDJKNGkqgnv8gsfLrLG3HXefwg",
  "key38": "3js42yUKCX7F4ET8tKVxfAyktMPZVVNQqUUyF9PVxbitdHiAdmMZ8EBeGkCK459zBUtdJXaGJ8byMrTuRsyUhWg9",
  "key39": "49zTuPqdrtS6ot5niws63CUVKWMcXnRxjehtbVERLM5uHjeyEt7LeWZM9PHcAYdEiXAXgfxVsq1yav7E4FiC5iPC",
  "key40": "3emTks4jDN77BrGyKawbjBVcMga5RpemmdXDyZyAqDJV7E2jNoQ8HT98SWFAXea4EvC51Vd1e6h7e9BAAxEr9eBw",
  "key41": "4wE6LrGH3UhgsXEysrou9r2PeFXQxhyU6KHKU5EXYUN3gHmkf1xqWdrY4cocxL2VfcepRVzsp3LuLJjsiErVUajZ"
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
