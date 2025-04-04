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
    "3Cs3m3e3Q3MgV84FRyBr8a4h9zfwsjb3BXcxXTW6cuUs4GGqQYKKdHH6XzrBwFpqSGJQC5XBKW1WCQi7yFMUFde6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TaMMiwUjYJCBJQ669QTqZLuo48EdK6AYGt34Ufns84vwvU7PSfmVi9USjNeXYkuUtiPw3RAiRv75gJaFRkxNkNa",
  "key1": "4DCW8VV8Z91gYWaLQhLv5iDdXFHVLR4s2VfDMiDNXKA7QSEMtVLzhmdKwVo78Yg5kTP1DXQ93neAUCgcrVyqa7Cp",
  "key2": "5JssbXUfgH5HmWbdgJyrZrjPHdX2Lur7MWBs4rfbrSHZ1HhTc9UWsHBUExAuCrA1uFYkViFDEMiYzypDyNJx2xbm",
  "key3": "eX1vJPMpZG6SVJ3j2XH8s3LxEBu8dd3BgNPsGyyUukrVDpd9YYQWVMAFYvrZtw8pgz6ZN6txrs2hQQC7tdmFxGv",
  "key4": "5eqBiZDZvbPu3hdS2SXc1KfDvDS2AnY17HNwCtPB2ewUgHuxpjt8LiNzHK96hhqsNguaBQ1Am3oVupQ8vo5LZ71e",
  "key5": "4b3JYxTrAp5DJ9D9jcs3eL9U5LYzLQBfEmxMCrdQycpeUmt7NNF8MkVBrZWekFvoHRBdnQ17GkhW4Rg7hPoUayjp",
  "key6": "2caxkq9M4XKVrrm22QX9z7LCx7eMe9S4YoEDcdMeBwYuMooBzVXrYy6ntvqQvHnzf4wRGTP8dByytXLeqyGZUas5",
  "key7": "CXT6eaaW4g4MTnGpVPnynuEffp5QvXJmZG4JGZ4gWAfR7UkvrUbMFQarNLpSzTWawyNuezSmbAwPAfYDvqRw2PR",
  "key8": "uMHJ8rX7AXWSyh5y4US1JjgBAXqVoY2LDQAnKqKfb6G8VMNrZkZVkPm1Hf2YzUVryvagi7gyx5woHpN6x47UTtG",
  "key9": "389k6j6vc6MyUsEt2X2i58tTHUGAda6ddYjX9BCTugkcEnJnbYqMpwgShXPmz3ugDN5GPree3ZTbe3UppLzw6M62",
  "key10": "LGzGCApUmU4kseU92GHroFsdgS9iT7qJSrDvCkrs3QqZY1Fe8dVQgmgRtd2CdQKnFn4w68iMfhkyeiJvXR5Top5",
  "key11": "jPNMPCw9A2W4KZ3QRp6eiepXEUVaBBJ75WYQ1SmVkVkrRJ76M1aJprdThcYqu4ezVmuDmf4etAMAR5u9SMxtju7",
  "key12": "35hV8uzYHoKtZWSuMx4VFJZ5G6b9NgEyjp5TtLYXSco5jayZSgGXe5tMZUT8ybxZ2TXRxqN12XGMnMccqHCFj3kB",
  "key13": "2d1Djj3fSms8TU3vYPGdXLqaZLVN97aFPHabyw287YZKe62b4rRes4LgG8EF5JLA58m7aY1NCnvaiSHPgz84iUUB",
  "key14": "2BxtGCvckxu1BsGso3vCpj8gA2mm4Frgb2fuXPiCGy5d64mCwEDsfoXBXaHqZToTipcRNjbmZqhf4Z2Kqy6ZP1s2",
  "key15": "rwSMFES3Bg2413KBW3Pv7hFZjAd2wEQukZynCmRTBG815wff462ZQWUDGeHxruJLnpzyuYa1RfajiGgzf9UUqFT",
  "key16": "8DW7kY8rQt19EqySKZbYbJvkB6cq6sE2xV4B5ZhMdY6XLs9YyYtQabQoWWepEV32E6bT97SCzzxUHLM7w9M6ytM",
  "key17": "2puQseFcqei6K1g4Zn75jVbeW8D1F7we6F33K4erFK1K7PEw8fr8uiNBk7v6XiYKR6RTsvJeJw5bARCz7SMa39G3",
  "key18": "64yZ2bZuzWtKnTWodLqe4vbTKEiLi5f8UgPYanWo8djFPrKsfN9jnqfCUmEwdWUaqr2mLi1Mf5dZycnczB4L6516",
  "key19": "25u7S644utMdnYuFWBHBjoqqL7dm9qpjUSbEgjqipwAfUK62bQNQs22E2NY83d7WPtteMzCi1zDiL3woy5jURPep",
  "key20": "d5TccyZaFfkkB2Rhy2fyjuLSkoRRrKNioXWXxW1H1nqY8dNwSZGct46TnhX9behoVXdvz7bNy2D5FWSKPtskTH6",
  "key21": "2zUhY3WgZtJxcuB7uP3CDck4Ah6d12sakpnBF7HHR8a9R8yx2XgS7sFzAx17e8CE9waiUMb8QTyEenQXh91AVKwu",
  "key22": "x63gD2NwfQ8WiHm1hoVZyEWVi1oG2NdrZDhLff3QWZu8b5jAFytCn8X9jcbxVkkbiMmrjkQN2NvCM75swom8yQR",
  "key23": "34AAwKZjCNSLT199a1owNoxkH7UdumSU3SciHhVYbHuTLKY7ngVpeqvCrAd3yZSEhjkbgJj41sdsW3ST1MNja8cZ",
  "key24": "52Umqu3JkdqrRZ95XU8McZe2gbCQXzE2Vw97xJJpGTqRkWWam4F4K9fvsW5At8NJKbfMRqVi7UNXw5L3MYYd8Gfw",
  "key25": "K5WPEyH1aZLwnKEZigGu1mMamgFUkW7wu3F5yJS4uBhhGCA3JK1kifd8yhXbjw5ffPzz2CdePDfbjz8GCV5sKbT"
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
