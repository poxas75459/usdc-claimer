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
    "2dWmqZWRhgHh3SvBCwfwad4zwPREvjmz8ejdjyBMccrfj9DcZ3zxZ1zUC54yPvtH9Uwi5Hzw12AMTEH4V9smc53Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6o7kkGXu751cbe6EzAQZ2JgBiCjXY9QQL2PVJSVK3HAtgjwS8X3sbB5CnDh7iGr1V4mHkHBSfa6C1y2vQBgSajQ",
  "key1": "PTwra7Uj1VuEYXQoCsKxXDs9KfwCrf1j43iAn6gHhaNKEmfgRzC3NQWeyusNEudexFGJqtyMWWJKY8oe9seYdmc",
  "key2": "63468XPazWQRU6TE9eLHimKf6cpboaxRNh3H28C4P22fiPPEarj82XDZ5fP7jnFXHg3tNa7YujjT8twvLhNRHEfW",
  "key3": "4NkMMBe22ceHkobNY8h4PNrDvC2DZMvj9MBaTvjAhe1wAQvSJL9PqBVTfWeu8hckR44Bstw2BULzxe2GGpeVsqyL",
  "key4": "63vT4GQHFP57RzhTzizEhkxzV9bgRBE8CQ4XCTw4rL7gdY7mFdv4VnfXWCNHWzmyws71bxmomisjLb2yUF6NALid",
  "key5": "2kFuZrjvyBmua5bV8bMuKarJuDCR6umLJB85qnc3Y1Hi6BGLKaV8yR7fYSUQPtHQKdtpnxmNqJwkEBLrUyqWKPMJ",
  "key6": "5BVdGBMpGHK2HKoJnA9v6PoseterNAUWfPc7HoRnZQmWauw62pCaehpMVQT6Ne1jzEkrBp6z4MP9DSfECeGPyd3Q",
  "key7": "48f4THtmRNdLeWTf28NCuNVXFtjVarHGeNWCnnjuhXYK7eixdm25y75EYgajsgvVs6JfqjERQQyTX6PGDUzYfkpD",
  "key8": "5WbrqrbXFCikHTdTgPHokmnVTe9DtnoZFtugu5K1QKVLtxiobCVCsiqvTfUGNgiVeBSzk7LseNKQGDy1F7MikKSL",
  "key9": "TcDK3PYL3sxxjoRCsGHjdLjmRrcw2JdyMDdZfgKen4KPTkWdSTh6fxhgE6kqhsEyfp1uDvKLUkAv4TqzTRnmAE7",
  "key10": "2xmMN3SSSDN9ZHHjad83rkhyCbpdPkYsmubP86KXx9mXnbx1Qrm29j62V3KXgBAB3UTGxXahgKg6JfZ9Q7g6cgBE",
  "key11": "54UpTyW4e1o3cL4Mp9DEmUmY13Dha1af2JoTQsSDyYkdQhvEhD1zmgtiSfTAQNM4dYb4QozohJTUW4EnwgmmTfy6",
  "key12": "3hP5Md6vy5TpKpsgoB5Gv3SBW1xsrkCVEcjSc3AcgrAXDRgbkUJkR5YoqZyXogrPGCgzF1dsv1LvZXgnk8dKVNCY",
  "key13": "4B8wdeNTKCeeinScWeptrKSnwcecikyDHUmZZAx14txZRkxDvcBfsx9Mb1bC4Uj3JBZeorHeaCVBTubwTwvu4zo2",
  "key14": "2Uas3DmPK7LK2WpcPrRhD98FJKiycR88Gy5Ls5ZxTAQzT3yQkpNZRbEp7smJHszXLMU3BfD1CbhL3kmPZ6vsj5L",
  "key15": "44QuUgZuUcH3Zn6ZJNmszdeKfXBDfvoDHzpUb9bqi9kJt73HWYd1MuZnUffNXuLrJYFVQ4nPzEdG2dUP3YJjU9ho",
  "key16": "5YVetjAKVmkDizgccpSi6YorhKj7CxNAuoxQpnUT1b6DDymoz2v5qFbdnWPVb9Svb9FKWaBXm1xhDpw8Aog7jPP3",
  "key17": "48KeSD6DKeqKeFZhsKsPWWLs44NkwmyEKbLoxQzNdpozXLT1cpKpB6KV1qkDoABTDiitBBgbewTaNXhQnndUZwEr",
  "key18": "33xyPwJvLoWezkMMJ9voMBQsfc8w9vYaXQ4nGD1Q1B2YDMzqGxNhD35Bbt4QhyMtQMALzASqWAimgHEQc9HGPLCv",
  "key19": "43gmWhPmTKyssJyuNsVJq3h9dUyQBSqNXMCdGiuCfuPYctaYk4XJwwfZFiNz6gFVnXMzPh8UDWLXJvbDPQmR6yuG",
  "key20": "2RmusQTThxSBR5vb7ntcS5aF2wGjjnA6Bg4fDXuft8dqggHxLJVATs3yKXfknxayjTv3eCMn8g4cSLrLCpoFw22t",
  "key21": "63ae4ZMGrdLCy4LiMzrK9cm6Kz3rdPwts3FbwAAzDy9shYv4S4fiiCpwKbmdx97GqFVm3XDF6W7jRiNYKNR3cARZ",
  "key22": "44DcMxhibiCeC8HpUtsuHvAzMRiSPaxjDE7mBQD4JMwTpLLu6M16qXyUyJPh6ck4PoGFoQoH4tsL9spLz61R1fg",
  "key23": "4vV7hTS6mWTkVs788WjPVwkAAdNgnL2g1udxZ4Ki9axx11gjyik7FRjTWiWANomdWskJD1XKbzxckeKf6riwjSoM",
  "key24": "4gjTWseBtveKp5HpNDkU6PV5RDJNwo2tZBi7BPwy8kRzReGXz1aPbgyybjzeDmKgur8EpxmBJapf4q2HXXdky1bj"
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
