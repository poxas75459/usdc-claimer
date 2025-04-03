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
    "2obtFxAZtbNaV9CRzXFjWNoYHq1T3B29Ru9QUeinN8dxckLUhVyE5LfwDmoVKhcARX6sZNuEUPGSeia3AfP3MpAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dFzHocyror7xkoJmXfdBT28g93mUTCDjCiyCasvDbu8u7jV8wxwmJvLjaVzmLcBqkUg8eGZbvk8TKkoYwfAKpST",
  "key1": "5ryGtZK3QcM1amtbw3Bc9ogMNGG1v9u2pRtYT8H2dim7ddc9nbh6kNZPBeFzUn7eAEX9RsqmmaWuh1UGhjxMQ99X",
  "key2": "3K1r8tWLWNWuQFTFeaQVau3xHfAp35ADxiZuAEE6Z49BvpGQW6mFjCqzCaSwgEZ3yj5MEjZpmM7F62enUwPXxETz",
  "key3": "tgpsY59EAE7m5DxkStxJ81SnNX37C1Un7FBTAiU2T2Nx6tRdHQBGPQitt9ZvnTTtx8oCbFWCiSVUtucZtpEmk1F",
  "key4": "7WnrBFNq7XqvyfSTnBHDvQgRJ4Wxk3t73u97bMRKJvP6Kyjbpn7uARJ2LQtQwcmWqMURvTSyFdad5GsdWErSpGw",
  "key5": "3z5zoVpMWMWRX1h4K1MGbypuwzrQ1gbFWwZ3WeS2dQmNGUaH4BFTAywzGDe4uwSrqe12sdWZPvWXKNACpe67XTc9",
  "key6": "wHiXdKMKuo2jKzoGv2TmW1imHkPRYED5Lt4veVeuFNZXikzxL26zmZQmFJocq6wPjVLCc3kbsntY75ZHhmV2c9t",
  "key7": "4NagnAydLnUWPv5bQwsC63k2e2ux3uVBZDyeuZpRL2jsQgBc8z6rjcsjr9DXSd3GAwxnKXzaCT7kcoxeCsg3Wtwz",
  "key8": "3PPwCkAJyERnKjtFAiKrXQYtQx8M65SyHHNKypCRNZ57ds4Q8m3JYsaNb8AYmejijeA8iVn4UR3e7TEkeQBM27Tb",
  "key9": "25HoaBZ87DqWayVhKkrUVjC8dp7NExLZhQ59eP7jeHvsZprNJ5eLQa541uYaYAbjDRGYpxWRpeLPzsrm5L5oLyk1",
  "key10": "47VBNxvU5NRU75XFjvNLJ6VGHup4nAztq1RieRCJt88BRZJ5AQNLB9tGFALTcTkKGeueLULG15pAHhmv43FSSCBB",
  "key11": "4HN5xiDbG4HjFs5cf8deXNsfsWQqjvoU8gjxgQa81Jm1v2ZrySiuSMDKvcDQrutToZH2K7ouyaWrWrnA7mHjQ54t",
  "key12": "CGxviFFRQGWotxaNtwoNLKauwbXsHMXwZjHJE3s8BVQnobxinX35Eh9PKRpndrhAaf7V9BkehzYw2mXxU5EFkMX",
  "key13": "2eEBhzGTLkGCZaYr1kNTjiJTmQJTsRQmb2sgdzxQAt52CgRVzrKG4Dwxg7X4JgS1UiRXLhfYsgBPVBZMWaaVyGSN",
  "key14": "56xuLMj7VEpsJDsYnUnXNzqkbrjvDby6d4BkFLw8Cm1WHafHFdqqEkpFFQ4eeU7zqJNnnvXzykRtYtoJH7VBdxjZ",
  "key15": "3RBgibsZ1myrU5pwNoxqZisKVxH9JrgU7Po8tuaXYP1bn4GDPZwnbjUuKLwR51FSYswQ4GR1xsAowahaBX7EAJLf",
  "key16": "2eFB2ijYJYFU9V9VwEx6kpMeiMndZzK6eHcf4rNiiP5m8pT7yUPuAbt1hCSwszhgtfwVXkG8ZVL8NBCBG7nw2CKf",
  "key17": "4KZtxNYG2YbA4D6SVuHjxJZAjr78G9rCKW92EAJJf5VnHV3AihDN1GykJ5y67APW6UCNUqJEfn5pkXbjzZsdwYxi",
  "key18": "22dbStFP85tL72XSXqCchEfeTkoj1gh8uaUyocURX4pc4jMUtR8sWxodKHc2HHAbeHY576LD4NK6WMM4mQ916bXy",
  "key19": "25T8oe9u57QyLpwDJQHgUSEjU5NGdf4ED3twbfqNC8PgfXyGxTJA5Y6iV2eQAeZ8BiL71U82d3MUEJ7DfmXbdY7b",
  "key20": "56Qe7C9fYA63NTZh9Ssv8DouTQoqrFSQeaoFYoUhehiSm1V4GdvPZkmRDS8vVdwFVLJVQwritEt3QfeLKpy8GtWX",
  "key21": "2igrx97n3UynZwqz6Q4diroTZF2bRvKJTymAhJfAiFL3TupBbcwVJ1CGoNJjWsU3VPA7vpyM6LxC22jM83W9E8b4",
  "key22": "5pD6XZmaFUhwZsXzrqecZLNeRVKLZKesc1vgi6qPJXB5FYqRKV898N3Sz323YHKXbKbmX42j7Zqoifct811cGSHg",
  "key23": "3c9z9aaDfFjPRnx6M5p1md956jn38FbbmmQQBm7dif1TdPN2ZzKf8Z4XXdNqubrjdSiTBKtX8H7YrqycLBcXBJD8",
  "key24": "5aYPxihXpsKj2pdAR9tEu932rGEkBJhdFdgLoK9pcfPoPt9myS7gsy6qAUBe1a48xRzaN7kU8LNFioQXfDWLHQwz",
  "key25": "62HUZ5oZZP3jeQ9at1TyXduS5eiqWyZFMfM65S32j8WoXUbu12AZei7kKGRqj3MCzLmRQbuJo48eD23QdrNYpSrq",
  "key26": "3K2WbgoRQa9YooKwN2FPBC3ThZQyRwjTAfSAvysxwhycdhVjjuVVuPo2wRxAzYQe23gpiumud3FM8g5f7MvHE3YB",
  "key27": "5votL7inFLYkTW8yokvtMU4UfqpRQd8c3kDWRNmJv8g7PAf7gwqcJpQVA3xw3bBRRy64bPBsxQaggzpgmbSaroox",
  "key28": "yUKzfb2HEvJNCZqruTws5EdniAkyCA89zLiAu1BvupYPqrP4jVL2bZd2TVbQ312seyMLMW4pJsQ7ejzoCCov9EA",
  "key29": "4aPuvk2tuvq3oZxQzMbr4Qt5Zco7arfMuwpDcATUwSMyGGr8ky2udEY1wnQP3vVSpxPCVZF4XJEdcieRKZBLXzJM",
  "key30": "DzXoASXtT4XKZRVixGkKQYK4ohvXs3q8yW99VTBAWZwZzSbE8MkHocsL7X8sAHpuyosEz5iTtSQvwhK2D2zhS4F",
  "key31": "5nedHNDM8m42e3eNv27RfVgu6iWsekrHHnhCZSSZdfAD8zdJbuNavEvexoineQLd2UCDbTD1QZveLP7gQHAzLqSV",
  "key32": "4RVwubrThRbCXYWHeBn5c3CrDqgeobzWWsyiGmM3aw1Ti3Gh2e7atN3aNSe2MPeqrGUAs8PSesJCMAaekFmYHe2P",
  "key33": "nULXYiCrTdWY1gAVZf8s8k4uVTAh2ZJu7CbXFEDTedSP44UXe4wM1ZRVnHRRuPKXHRiaM5TNrUmN9S2phwbWAfX",
  "key34": "AzGLfvTLRD8eTPZduXYtpiRgS5PbBT3ciBg9bGC9hUD5BGQCckU2Ecu8KPMJw1oiTm66sWoe9MMnuYcg6yTR9b2",
  "key35": "4JCG9fUjjq2ADQjpPzcfQnQ67mBpQL3tyV2CHbmi6hRcUFN9WoV1zPjFDznVharwA9Dt7F5igzBTJRaL7FbsKscV",
  "key36": "4KAT7WKaC3cL6ipo7ZTmNKXg79SpCfj1EMjBQitFb2HdQSx1MSL5SwUPMVDLGtw6nQcTKi59wA5fauYMPgSwh9s",
  "key37": "5a64wq7mdndUscvuJQ25CNdZFfX8xwHXTYjYvkY96g926ZaZGXetGDSPPQKTqVWbQNDqJv66DTg3GAdWhN8HX7cT",
  "key38": "5xdmbNjQSs2XBoFBiDVLuQpakxafioMNJ8qHd2tzGnqS8rgojnHCaHyBULe9cP4JYZxfeQyoNq3zP3r4oeh463jC",
  "key39": "23gZRaN1ezScbtYJ9g5jD1Cpqm1Pz9NYfeLGMPYZNh4JCsqXqQ1tSz4kqdweBeFfgcAvyX6bjeRkjyVNGtt1LRaL",
  "key40": "57PzBPmnYe32kfuQHwkMGKQsvg6ATSARHwbUACsiXjFTG6sHTugcrCdPCSrnEkxwxFbiWYYCwPJDzKV2Zo4FpoBd",
  "key41": "4yH3rGs59Gv5XeduJxYABRAoskEiagH8WqvUxbRvPWUndRqq6zLvFWpVULrMN8x52gBV6HrpYT8tpSMqbJfET4fs",
  "key42": "5zWk9Az7oGZg6oiqcQ8pG3USHu7ES1abYKcmjUumPvkVzpxSBBa4a5SEL3AVMfEBKdXQ3Dt6DJxDcdAPTg1uxf67",
  "key43": "gV3wFLFNoohSWhgBdNY6mq8U3MH4pLms2VJZm1Hn2tZFPmg2kYTpfWCJDudn2uEnr1fzVAco1TYA6CdKyM3Bps8",
  "key44": "63rGXmyszrFQot6SscnRQbPbX3pZXrYyDHcdMqoYc1giHbnCTKeXknyXDtxU2KBcUvjGZdSBBmdvyGEzHV72ZCfe",
  "key45": "2rZY3thRLnuzyAAZtjKVS4XnRfhLAbVQ3bb9ncwBgPJXW2PsktGwtty1bqH9kA145dwsNXHKdNuJh32iYj7MgXXU",
  "key46": "3ufoiw9KYPHLq8MaaPvpt3ZB88w7fveU9eQJK2gvCEx3RVyKiXzzvF3pMw4RC8xowX964KGt9KJSDSkb7igCRAky"
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
