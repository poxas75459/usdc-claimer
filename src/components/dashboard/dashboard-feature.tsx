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
    "3CY2h89z2o1CpctVNiqaUSo7sgSQ3iAjT9nr1TD2v8MLTk12APpVo2MCddAmxYTrqVC8qdg2VbU6nGMUM5B4yJ7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dDLFJ9sr2PCkHJJvZybNgjEPUVD6LtQ6bwKwweDGP3KJkKHafthu5TYMsrzdaKt5NQ1Sk8nHFhFH9HnpFdmiedY",
  "key1": "5A3rfLoJZoTQtYduRU6WWgGZajmmJwBbQELw8X1vFDHuq61dEjkHNkTPPwMbaKPVPhaBMnR7QcmQdDB1VExioiA7",
  "key2": "275Ky5ibcv3XCfFAJ6hot6aAfNhCQQfYCweEFaXxV8gGJ5ausP4NMon6s1m6Am6PCPJGi8AJUR1Zvi3t7LJGRXT3",
  "key3": "4GLsRi2sowYK6ZSvLvmyKba24rHvpTosuTCtTe82g14JuDpQ8UGXHqtd2icdu4e2x1otSh5v1rUn3eBt7xPZL89a",
  "key4": "3ZTAyW17w5yZiBszdFzu2GC3U5EKYwppcdRiPfoD5L3cVRsAUxPg7U4n9JxzgJzPXjMbpBiTEPnyg5a1LckfnggP",
  "key5": "N1kWbpUKL9BoiFhopG7fSLvwyVNKRETUwza4aza673QR2dubZRkMsf6DQJuhoEgKH6QZ7WLE12xrjD2NYLCroEm",
  "key6": "jVvtUtdRbMhu3pYs14JdKv1AnS1NcrZvorYceig7rxY8F1BEkezsJJjMWc842HaSphoCSTmYSD1sZCNQHBzkY1U",
  "key7": "Xr8GLQk42id1t6ECVLuC67V8qF2SEzX1R1Cbu3mrMm2FQfmbTQqW95HphnJErqBjhdUTiXSuywPKpwEq9iZKUQ2",
  "key8": "4HfR1Ej4AV9G9jKfxgh5ejEMfLXfXECYA6eV1STng53DqM3sFcEwCPkz7SbPbLNwFWYZvp7iyPqNsfcPvYkQc4cr",
  "key9": "3LRFCMwNJxLbDFhDtBLzvxEPrKN59mQzjeQWbnPunkfLvbRvTPx3WYkSivZby5WaKVbhCJy4pG99SnKn7nu2Amgv",
  "key10": "2rXwuBkCNuMETfMm7sCtV8RQDAiJBPzGw7rg5CupGsTzubYp2FeKsEb8LFEroHyvbr9ii4tG4aVFw2Eyj2yxXEfu",
  "key11": "zJbAFZzmELz9X4ywjYXM6Z8GgWCUMU3M6qwbiFoSkVDeW3eBpeaSbYx9Zaz6pEqVjwza8zT5d8Qm2Ztjw2Ekqu9",
  "key12": "3LM68bKK5JcwKyCGRK7ufSEu7GDWSmibdXxMuvFfovdUpQv64RNDHMwpGNc5FEQT34aJEiyhsjeTJk2PiM6w1RLv",
  "key13": "3VP2cMBF6DtfJiC8r3YWks76h6VcQxK4ZMcujEt5wLvDb6jtonsrPyKvKjFYCxY4KTP84EhEKQ8XQNZrBpu5pEuN",
  "key14": "kyJnqYej79htSwUkuGAc8QQ4VUQZPpcBesPZ9UgCadyCgJ51C6Tdr1rLVmtN6YZe6Nk3dvQZuWhBgJCiiCd4eQM",
  "key15": "5L78PYCZxMo2jyntL2tbbbd2kpeRZCYcY5S5xHNe26kismuURy2FK7mycSgh3pLMq4PX27RLRM2xfopvtk7VbN6i",
  "key16": "u9YSiQt51x8qj4m4Xd8UVkbw4CtcBuMHennhc7BDyyB1LhpP84XWscqaHdxyyy15RnnZnTJGj7WvAu2JjahQHsY",
  "key17": "pEXo9gi3SXmJ9CdkReps5rJTbc59J2ssqw5uyLuEKpUxLxEPWeUcrMqPbX9Y6fDf4tBEL1E8EhHEjgE3gPSbCjA",
  "key18": "5YspSCn9HQtZTkiWAEHEeGViNS77deohydiEnVgsYJQTAQYwDaSKYJuRQsweeMg4pWeVPhLobVM2hZ3ADsGrMRnt",
  "key19": "581ZKQmW2U7pkdwzqh2Jpr1A93a3KzrGoJq8GwT2pG9Kt9H29CpnvqEwPENAbNzdarwUanZT2weoQD3nL6CJJcRT",
  "key20": "4ggS7w5MxYv4HNKMWhMpVEGYY1xMBHQH89mTREmxpbjoTFPJAhNkuykPDzAoETWE2kewt7ZVzPEryAqqHzDUjx23",
  "key21": "9GGkjwxJ21MvThTgpEh8T5gAuXn2DuGWkz9vp5mttV6NNGcjNkH3f3NvK99ogZ22huFZzLg1nZRYbJJNSy8vHXp",
  "key22": "hHKHhbtq3EXK2fb2M9Ytk5NvEYmMR4oEnjpNfMqe63epYCpLX2waUkAntrCqHmvkrGnU1DjrDC4PQsbtqFYxedx",
  "key23": "RmHEV19U6dCR8ApwB6BbhZ2uw1sfWT7E5csZAQiLBLaWJBkWk4dTURZUhS9zmJXBJrvxHGD43MYUttsZEfvfLf2",
  "key24": "kXv6LUUS8M1DwNPLqojXnUNTbbrUiEr8m3HhLPHfFnK95TtKkgMQJKL4LNyzKJTvf27cf2f1EC7QG8NBtvZSRRx",
  "key25": "67jCF98xesQZvChCEbBid8eZCBtuPvhcChVXkkNFX48TZkcQiG5T3pekwhSUs9pBv13BfyRY2aGdXMqgvVrS3NRu",
  "key26": "CXmAwV8akDp2T132qbk69xYpnKpPskJk3jRcKrZnzJBwH5GHnG97t2dy4Diz5oSADgfRZJubaNFALNX1jisCo3i",
  "key27": "5qocPzV1RaTg6wwGzyx1o7DtXPbVp4NspTS3rxLkRvTnVGnmy9HgPp3DK2uLhVn43eKb9tL5ZJtdtuLFACfc4Yi3",
  "key28": "3hCWyutju7LqGeTrqSx3XAvfKsAKRaVukxi2AwLFAKnyUQycUWpqjMy9vZxKQuFfu5WRBNP5czWjNFqA2FPxTatm",
  "key29": "2vc6763oySYAD43LCDBmtFjjz5XEALReSxTHYYA5dfxY6F3ajuUVzZbR5gA8QKUT8hubHCcKR6UZ2dF9x8au6h1R"
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
