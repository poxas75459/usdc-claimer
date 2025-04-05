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
    "VgD4VPwDuRFmb2xBVgZZ5U3pksXMPvH3qmcUFYDnEnKBtDL7cDgdin9kJPpT6n9DHx9VPFj6o92ruttvwoAUWne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41dp7cQqtyvELFAGoWGUGBPkRu7jpaoR2a9ggqFzo3vPhbohQdUgn9J3Tp4mNYJsApyvZP2TthbGGjhXKLYvWGGE",
  "key1": "4EavpghgpMx4auHqzyRk6sW2Wrca1czfZTvApmdw6DWKs6jhDpbkrf2LNgPfLwbZCUGXEUkL6uWvYXcmFJBce9hu",
  "key2": "5H4eSt827xEja13zBmQxxdB37gxdi1ByTvDfotxjaZHH6pBBzehQVwMDWf6zZp4uVCvgDqDYJQdb3Ba9CjX6M227",
  "key3": "4NGAvkcMgpZbGu7pNh6M3ri6PXM1Vr7hhkM7cRttWbBB9YUaiGXuLEFgw4bdsxCLdu6s49SaHQ6VwT6Nr5BjHTDR",
  "key4": "3hWfgAdJ9PWKDDYoAnAegKspTra8NMCsjmrKqiFqym144wFPboA1pm4mDjtz1ucKfgf1GWPxmpZZvN4X7zwyqpHu",
  "key5": "3KF4pjeDdGjYSp8ZnSNedPApZyLRz5Xpuj1AmagnTCdjK8dukYSDQcb29c1ukJsp837TDsHuKAgYWWs6VH4wttGq",
  "key6": "29cyTBZ7cWXdXo4aRsYxxiGV9snnW98YtjhQw2hrWzKzySvHkxr9h6DffvbGgNJ2mzkduzhXM9HfFoaiF2Y6eVPY",
  "key7": "3fPiHM7upu5Dx9LDhR2nxyKLLBy1ZqYRfFPunC3xeSbyoaXtPCTy67oQaiAucmXbRkEf9iH53EP7jW64gJMy7sRz",
  "key8": "3MFKmzfAvAxovSdMTHgAVPr9zdjeQtREQB7LrpaoRDzRdsyfKNvoGNGUzpn5SCB1DVgSMCxcwokEw579vdHGsHcM",
  "key9": "wmA1BEuHQUsJ3AcmShZr9AKbSf3Afd82fm9S7AijsrvYAz2Pz46Tv5FyhsSJhihpjCkUn9cJ6kFfikgox2GJhgS",
  "key10": "233jKTc3eiVBgQSA8yXxDr8o7XnXu3JaocDiLpofBbUkYPpq7N7DKfb38izwME9HLMekZZ9SkyCtoSwZLmBJkYdq",
  "key11": "2PzJ7joSQNZt286V5v2Qj9uK3z3CnhvsTAzck8vMBMPLFovjqzuT4gZmYhyuyVjEautoykBvpAKRAFnRA3CTZM7D",
  "key12": "3ejHikjEGNZMFnLeRteQZ5x89xmUuAuTYcxZWf5PNXfDTXd4RiM8WpKe5PeKqHgfwYTA9t2kNzHhCL5V6SzyJTWA",
  "key13": "5hMW2naCt9huYbis9BWWLa45UM9S4NLoEP4oNRahdjEbckfqBTKsTQDC4oBFJWPixjg6HNQLzA26BFPq2GRQq657",
  "key14": "2WEKwonWvziGMSxTGPTVg7aLJYCDcViuZAuNrE2aYWVnZwZ3pSXMx3RDYNVh6Pr5H9N4jpR1ECSbH4KXZtfwQMMD",
  "key15": "4dcNY5vcxsk24qDPkzmZc5B61ZeGvb6BmZ7qBwTBYykNvrZyYFMn3QEXULzhQZiPNtTRza5X5L9wz7MEJjRC2aXU",
  "key16": "412KoBrGH1TcjThQMQC9NySpNp6mSmd3uN4pwLghfkP8e3krgtf2ckLHJPVh3Ru9C4dm5pRceRLpaG7TVN5WHmrC",
  "key17": "5AvwRa1afuWAppqeRjwMQykbTFWTQWcnJsWvqFTJtynU2h16r3fMzqo9uEi5aMbiqP8BDL3Kp3REK5t7vH8M1Akq",
  "key18": "2LJ6quAffDwR4Chv26fA91NebLMwoN4wB4sNgMgEnenmNGGowzDAiZFPcd8AHEHp86YnSA9JdiYiN4As31WbMWmd",
  "key19": "5xui9d2f8Js5DActFG6PZR2uA8rzm3ST9PorR3LUi4Nj59b18ifKQG8wEknjU7Dhf5Lurpit1NxAPtDQH5cU3Ts",
  "key20": "2uW1PhjfKtw3U1MdZrZxzeZeDNMmABcJBEBtBzLDyFXzXYnRu17WZATANG6aytUan9TiCi2cfTXJAWhutF8k4kyS",
  "key21": "42QXrNrqR3MEKKWcfsX96Nz2q9hoZbjU45oSw5rRWHD2vTH6rMiVb7iQaG8K5tcMAi1tSGW3RiusqzyR6azMo2jQ",
  "key22": "436Gmx66Lga94d6neMAWHsvYK7tvQz3FBZwDU7y1x745o26kyyXMML6wHhadtiFsw3yZe663ykkpCqjoirczgohL",
  "key23": "3maoBdU8y6x7nf7gCN29wuzzyvBu7jbo9ff7BLHqfGJnCD5UNLs6QW8y4QCiKxmm37BQt3C1dQgErLLi4332S6wf",
  "key24": "3Md2MtJY5vABrEBajCiUR8agZqmF7vpmfo7kjYXAEMB8LCBkyr6h6Gxjd9cLr9ivfj5SFKBGfEAkkq72mtAmYn5N",
  "key25": "2qDX5SwURefn1hcka3FtbCnGL1JPmNPcH6KLNxRv4JFmivcKbtRpa2Fb7WE4CWtzoXY3xwTbFRS4XK6ziBwoTBP8",
  "key26": "3tDXYAs3pr42B7ujKjG4ChGPCuAqJnSZjgZZgDvZtSURwsDEq7gtzWCbeqKzikUkxxyzuYGHuF9iFmEagCFCRsPF",
  "key27": "4VLJ6Kx1dq9deoHPzEPyHQAXm6Qho1j6jETsharLxkSnGSLT81e1JcTQC35vxMaURJYr368677RQ8NgBHkLbvo7j",
  "key28": "42GZi8w8TiVzEN7WVqsck8veheGneBB3puPZMHFRdARWGCtCygWsW7H11tkd4Vn3voy5KnicrBv4j1A7oVHUraTM",
  "key29": "3aTydB6RDSGK5pnoukGUACMu2ocCSERJ4y6bb78GjLibWAXcnSTh1Dy6SXK3MzAJ3wgMJxhnTTPhQowjQnb8xiAK",
  "key30": "32Dx6bt9DhBngrm9XiUUzGXfkXNffLmJ5Ay25DBbrAqsJJBxofXmNJm9LoQNvadDWucDdPfwFFdCHz1FovvUSp2c",
  "key31": "3BtydjiVpp1RRXLSHegkfEEdNd9wLUhUx7c8wEoJC3u2eLjN2PaCXfNssLXaPJG9d1kMaxzxGwRhMyR9rHRmoMKc",
  "key32": "5zm2ZEEjUrnTHCDvbh1eP7ijPFZe6AUz39nutKftmr7pM4etZDDHTBLL1NP1exmQ8QVcjJo3CV8sbQLo688hDoRn",
  "key33": "6uk65tRgSXVNHpDQg6CP1jT1wAEaV9btGYdsKnfn3V9up5RUfzEngGhvu6LLvgMyBPoJxqTPGjggTvvraVnQUFp",
  "key34": "4aS56HGiGNgMMUmS4XTTwrUXxgrbnRGs6uVZHQTuhS7YJGvGLYmXhMXKnUDVxsM8RhJkEKM3fvC4RBBjmTV7uGtb",
  "key35": "2gCAzSHh1qZAf6AZ4NxiK6A54FMJQg3NnKvzsEUuPoczdg3g3T3mDZaEZ9ZAwnYnvdUWRPbvejvEdaGejghSnaVJ",
  "key36": "4wK5uUXhyxeTbdQ9jF3YcZ3Ja1xP1ZjFh646JqXNcnMpQ8ciK2p5riHLouKPoHgyf5qEJKAWRLRfCtxh4WMFSRZi",
  "key37": "41KyMWu33oEowLPvy14B2UjteuYw1PFdjx1HN4U35tLahe1MSwUzE5pJPUL8GjRRud2RuWZxLingzLDTGrEPVF2R",
  "key38": "Z5t7mXNNw8zGuxjTkqyepwvYEgUxY3FEDGJ88Ft3UX15dU4rKFavV7gVv12o9ogJPeqR4huNLd3PzstihJKAweS",
  "key39": "DjbrHaAH5LFs8hdBMxebGdVgrpYJVCmpqXgJzayWgYLF7WBM2FY9aw8DChFDT7PSqozfizC46AsShTg8fD8gXCG",
  "key40": "5RYW5Q46x8d9nf7JGbC1rQ7PqdYcECVcjC7H5zWfb6u4djEGYAWmprCpt5BUXEFBhfGN9w6RzGMVwf9hzXcLWtDi",
  "key41": "2bxfbBCUbPoXVH2yWWXYxfJBmbwZd1i4y1H7p564u2h2kTPXcPyoeGu4srLcqAUzdexUaCKVtEFNDGpswrzCDe6q",
  "key42": "5FV2Pg8VWjBUxV8xRSF7B5zQmcdSq9QpHNkdAcVVsPGhBFk4ywmpidyquzu6KNkPRE6yTpzSqyja1emUGR1XRenv",
  "key43": "4LPWE8StzLJAHiZucyRkcChsqDYoHHGK9QuWi7zF8skxXYKfrX7JvohUF6Mbn1CjCe8Z9XcMUT4UsEAxucBbFNzz",
  "key44": "4hk12bZXxgwsmnX3rFgYZ6xUfZee2v16K6TXAUDPqmjL7aXECcbfifVPNPJYnBCupVsqfNH3bTBs6MpGhSc8VCTx",
  "key45": "64vHn6tHRy5n2ebj8fyWjU5QcQfndBrvL5UZiFYMStBKSeB8g23kF4SjjV88qS2No5so6u9Kf9NhFiP9m22TMwP8",
  "key46": "33pWyt7XBM3SHpSMSoiKB55djVjEzBJuuLGNF2DLoZn7VQ2BhBQBYtBo1t7ohpetuoQ3y7pQN8pW9RCb4tWvFtKL",
  "key47": "RLrQ26YaFQWAC5vrgoMpg9NC7WVbiPEnHFowqhePoNSCRTaBk8FvDfGrpV6WyeRs8WFFskwXGTizfBkwZgJaprB",
  "key48": "5CQm9fm926QV344a4AZY8RcwanrxtkEwT35bVy6cEzK1mkjePQAyPJK2gHd7nRu4ATob5auZHUPu6JYkEbNJVXCb",
  "key49": "Pa7nAob2qoCGEGMzzVS7TiVs2rviLofXB2WJfhnuHnZQxueMbn4ZQsJeE64nWwEHrSpW3C3q7uBY446B8a7yNuX"
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
