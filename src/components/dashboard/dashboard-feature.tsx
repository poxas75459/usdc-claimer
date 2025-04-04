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
    "5iYc3mN8Hpz3kZQAtU7cWZZowvjYwKgvwwePiEeZM8rur8NfCQMwrgKSK2AmTFQSdR5DvRAV7E52p22AmVMEfVSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xTb8hy8gK7PeZyZW55GwfPtx2cy6ZeuMc8bKQeeStV4uUv9Ygv1Q3DLXWpnbVfYz6MZfpwVTNynFNhxJnmGk12j",
  "key1": "4tzjMAAqfYeFqd9BWV7rr9JikNtiVTocBxFhaKqjkaejJkYP7TGWJdNtAB2m3BdhW5MuJSmzQZeM5deYbqQew5Yk",
  "key2": "KtZKX2hwWujUFgYdbeTjeyb2sAV5GkKactVVjdUbYNkVvXko25oRskTYpmQGHaTtsJ6JX4FhSnkHUM5fTTCA2MS",
  "key3": "2KZknhoDMLRc2dRCvA4MBXgHN4HtR9oigLKxrZ16X85aYttaHMWeWZVaWe8ocz6G1JaE7L9eWADdXJp82PifdBkH",
  "key4": "2fVi77bgi2ZEaq5hE7edYpqqNRXH8CSNKEM3WrrtChrLeLWBh8ocwkcxVa99CrAPo8j8B5dKSRzbhgLxSDdpV5Zp",
  "key5": "4ZoEVwHfVnfhfcxDyhgUiXLca3V6sPFdKzh6gmtPgQUsPcmkNAERMHJiyj9umAigHD7e8rvGMY982BE2ZFAXP5CE",
  "key6": "3d6wgxXNdNXNhZEkZNADpxQrmnjtJENJa3fNkUYCCYmTE81ZLyyugz2Q6r9Zs4BhqwyUcb9zfNmyDTJed8fEVBct",
  "key7": "2PSRDNDoTzAeFVGLfKhtf9uUcqdHrnBuhDpRbLncE2xbGMGZZNpVcoTXofFWKFVBrkFGSRicGHwkU2XUkQUZhAhQ",
  "key8": "4xGxntiH3rXZwDd7SwDgoXYvai8wtwe2xyiECGCkkoxBnZeksW9myKGpZwsoDXhvDSZHyCkqNtpUcLwYjf714RcK",
  "key9": "538YG7YEBdY7YVncdDcgQGi9r785grwzv93Azhc2v1Zf8u8oq6h5eNW8v4v7Qa3q5tEWyh8rt7XrWyPnwfE6a3hq",
  "key10": "iqSik1KsHQMi48uF5sXnHVRqN4bLzL9metYmj8fYqvWVKCLnNvJBhkZk2w75MVtnP9fY4y7ny9dtj7XZJXACbef",
  "key11": "35kSJvRcCcGiVw2uemHnduxzcYYx4tu7ae2nhDkFX7NjwLrGe41dR3QRgYwSnH4QcFh8kEJqG38UNXbncbTuM347",
  "key12": "45htifqkq7skBd7J8V7khSZ8j7GrdgrF3tqpG44Wm5rE5NJzg2kGu7aAs3FRk36bHy5AgNWNWX7vs7SP6c43Dyey",
  "key13": "2z3SWqbBikPUJNN3wWNoeoGmDPS32NToYanFBv2UQZ4TFBAErpDV753sVrjeaL8Em2VDYQorwpvSoECUc6EC5DiT",
  "key14": "2qsgc58fUx3MhodXB3GbeJEwckcxEoamRGnisRGKBq9o39JB4snbctEak8tUbNfWLgMaEqUhHUExB8BJHjErKywk",
  "key15": "5Veadn7URbGZu45kdTz8LPTwq4autT7TkhHEe8WFkNhzJnQcnAcPbcn4gXKPwATZ3RTxdTbtoYaAVz2F4bqQfpn6",
  "key16": "5QiyQDHg1aWVpkbZPMxysNBoem2EuPv6tdR3z242fey6AtiGqubSpGvtknRFVfSxsrTpjFbftsyTtvXn9yEZHiaH",
  "key17": "2XCh2pS3xQu95VRXrm9qRapjCEdPEPJqsLweBhtC2Bhk5pZfk9SigeQnmqSTCaAMC4F8gSrELDy6terC6BqA3CvT",
  "key18": "YeFvEsqPE6E1XHCyvnkK52yDfBmJHxWAxMXMwasxReaBBVJVzSEK3PE3cvBZLU1WZoSS3QPcipLsiNaGP3psc1n",
  "key19": "4der7kR5QuHcb4XfuFMkV1APuMRVGob1htnsaHh9EfHdweyxoAEUcSpK8qK2kWxtZyXCBBuXbGEFJg8sNHHT6SGY",
  "key20": "2pcpxoBpDQDUZjm5mBcAbvrvxUpeGx3txiwjNCnzsnbjjfUbHhomakxPDGuN2ddNPDBgsY5SFm3dK7DsNiqYRE3t",
  "key21": "5FPq5eKE8aatwrZgttYifPCXyWRZrdJ4xWe1ekCEp2KB3KVFuywHfZpJHdVkawcK3xvhJygt6iakXFiDeCgYfp5t",
  "key22": "65Co9DwYkNn1ysf6A4pdpHxmM1QqPHZ3zZ9TcvSrqTr6hGYiwqA2BDoEcF1ZAyoci5fSkwviugaAhz4gNfVioSKq",
  "key23": "25FFytr2F16Bog3i9a3R2oGcWeRMjxjVaTtbgQzkPwCXiDyitEXkUSfNTuLJq3bvws5ZZXJpvWTub2HnXvp1a1fu",
  "key24": "4y3tRDtQwmukchhALHFFr3odyAKybjFTioWPaEe2yxUE2qiWaPb73PQa3Dw8b1FsaBwkEVrg4qj7cYeoBPEajQpU",
  "key25": "3uFXR8ffuMZWSYYrFH2kh5kEgBdGWNHRtYY4a4DkGUKA1LM1wWNFgHi9dnTyB4w3dNV8UP1jP4g17ooXoAjgzrKh",
  "key26": "39UQVKLQLNj3RsdZ9HgUtV86Q9oyRW3TDfquQXtv4wEuQN2ZuNzLeGsXfCDe1wUJXKEsTfadAk3xzTRxRqJyQHdU",
  "key27": "7Urz527ASSr2SFqzTQRzxYtfq6yunCCm5Jep1DLKaBi7tR9Vp56c56XfFAMk5o5FzKynT1GG6J1393C1Vko7ijd",
  "key28": "3GDvNKe8gzYwcTcktAwDsw77UyENrxqg6Ms5FKRbjq1CQzxMA73NEMpWaSkeN8bYziK6gtcJsMqJ7RCtZvAtLf7J",
  "key29": "9vam4UPAz9M3RzvKT395gpghagU7uHLtpAj9BMRaPeE66PVTzdeG5T9FAbpJwvvqwpV8rVbd8uTNDHfRvJmmL3A",
  "key30": "5gYqBT8HC3FTD5NvQ1RLrpRMmkwxaq6B2z9w6QUYBWftRVTHpWcyvZ9jPoSodAB7DJKzZYBhjZ69eLGWhnvmqqGx",
  "key31": "4J1cmq24BG5qomrWiVBc3poQiYXTwv8y1MKzDLgMEAvLNRooWGJoL27w46VmD9rDCnApV5so7wmnTqqF4ZRjBL7q",
  "key32": "5yLTyLjSdnyj5Marozyc5PdkEMZ8NfWT4iQHT5Y2BvEQ4FxGAjyzU9TWKBF1psL5jSSDrs63aLNV4Y8rj25qAGth",
  "key33": "4FNJh3cHG2FLdcZCFjEuo9A97FgJkn2uRpz7Wxc2vDF1tBMtRyKEz8N9sUSiAaUU6bRNqBLQdwF2cWj2fFzuxRk5",
  "key34": "4h2eiqRuRrr5qUgSBPfyDUVT1mtezrKMU9rk23jYCuGfN51VwL3vm6X1tupZECqDJJfMdWwpb2L18dkyDvDzqZzi",
  "key35": "3pJhH3AoqxWjCEoCGsFerPtpbVRWMT7WJbvCRpMwaaoQCzppEj6coRgs19kDQKsknBsbgkoU3bYgPyp91gtHa4Pp",
  "key36": "iM6WEgQavpEEh1fQ4mN9CYqAMi83sQEgXq8cwWpJCknHwQhR3rTaUfV81eoAVYjSmXbSWPDhWVWMActdQitCciu",
  "key37": "2FseyZVti9ivDFsLKS8tZC99xmtdjPzoGKwiS4omgb1h41UME5MqYA65bcSdDc5NFWvVXMZAgLnZ8HUD3AyC2C1e",
  "key38": "iyaivyKS8h85ZsYwzyi1MPaVeje1JkhoSAzA7QMTQQ4p78z78AV9tuaHaU1zebPCfSvmNKDhx4oK7eiJUxhLGAK",
  "key39": "5K4kyZNzH9DAVG16JFSgVzbig96vASzLDHLxhGy4GpWzFWmn7XLaYS8d4dQwkwtpv6fuxVBt5MAwWeP6Yc4vXPC6",
  "key40": "2asDwJjzj6EZxhdUiiFbu1A7kyeMHzMBXmCCrd5atSWhNRSRj7E36gy13xqVkLYyxPknpEmfyTgezbkFbXWuQp2v"
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
