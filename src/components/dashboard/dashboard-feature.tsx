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
    "5gtuyVPqVigViLAJu7o7xbyiJsVxBNhrRgfXnYMM5zKqQLHMXuLx3cmN54gfuzA6qK4ehi2eTkjWCFXcs9EQ1Ho9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xw1HWggfmFTgWtzkAV31DX5Jsq7BZsQAT99droPRos4ua32SiYSeGEFYETtSP5Me5XQt7LfN1qRoRu5WT2QnYuX",
  "key1": "3qLYj4Gex1UCRZrYueNvywDhs8pELGB3rNez4ABBZQbidGeroQZBNVe4dC4rTHRBTKK39FCW5KxmXn4E1JeyvfEu",
  "key2": "5YbRj4k5caQSMohGbXEQdqbgjh6W9UHN9ifcQhVZPS2D9u6TrXjdSepyeceRSGkSiJG1yS39c13z394pgpbdBzCz",
  "key3": "3ahSCSsPSe6CX5RS2iEdqdFb7VG4VKdWUV3TJJ8S5EvANDWiiemkKH8pTnqmvKt9DXQHjcEA3iNBQUrnhqoFm87e",
  "key4": "3bLGwMhjDa3MLwAWVTfctDRWHebHZcWKbgPF3zvXwYXQE9ppCFwGGKnifpLwnB5ZcXzBHY2EsmHwynbvZifB2F8q",
  "key5": "4QXJnhCeqxw9JFVd59Gh8kgoRaRYRP1XhbJrZxuRtAjCTgqbDPg61uGWPQT2jHKVuYVsq6uzHzYa6C5rYeQzGKes",
  "key6": "5CG3AfPSQXkHRabVGHFDVxYki2VPK9j5V7J23EmNPWfNh8Q7hwrCX6nyA1oecraxdYtGhbgwtDTVZuubEHekrEqE",
  "key7": "YgtQcQeqrfMb1ba863NtDTFVj8Wc4hkLQo1oPtU1mAXLRqUM5oQbx1Pd5xVhJ1pwwp882sfnT8XEEFXtS9FYZEW",
  "key8": "2iP3RA2DWjwHmKz4HTYb46o9BWtQuFBKyp8EMosG4Vok8kfd6YeFUE8EZmbNUt4AeSzcdFtd2KoBWNjS5s8yS4VZ",
  "key9": "vyXgfUfUKoJiJzbxCpS7XSBTVWP1PxyiLu4AnNCnJr1cqz7LYANidei42xSE1TKP88jnwsRJ224sqy8BPrjbTjU",
  "key10": "22JNw1HKPV6vys2GcgLJHrQ73kwqm3Pmnznp7k1rgqwzx3wowPMe3CL4wJgrrmxmgXsZYcT8V3i816kXqpHjN9jP",
  "key11": "5LxMkfcdSee8wh3cEizrcWbdU8gp3sKPXGzMYTETU6rVjxH84Zhq4YaVoy2fLVEAyrYKpHDZW3ZTLhLUjQKUtRMv",
  "key12": "5vbWgs8CsMU5BFXSHxBspsbm1z6xxBBgSuxA5GGiujznuqkKMaz94c5cVDZZzhK3Y3JXkL2NqNEqq1whirgKJHUy",
  "key13": "5LnPdDpYp11TMVUafC9RwHd9ydGoiE15nbmyxfQ5E9LSUwvozokX1rhdv9HtySiT3ZZ7dnG3XUfmLLSTcShBkaJx",
  "key14": "65SHpW7GoMcRvsAGnJjCNmb1cUfehtYBN2pAUGDnzjM4ZvJktverXT42us57dfVVwYjnB2y15LBTKYXFZcwcWu4m",
  "key15": "5BxdsFzuuVGpZG5CdD1RjuJ1fZkGg2RfBDuVwWmmiCzGRWpPbVYLZWP4HMVqGqpLVeWpgfNUjqyWpcS1bqJyEfJK",
  "key16": "4SvBeKNSfX6R1P3iuGbJsokBmZAP6n2ryovX5wrFivWvSKC14WVExCjiwPRsQdSLWdmV3wVVE3ZVbbwg2Au1axeL",
  "key17": "5PhL4HtHuwtGwjzJNYHZPmtBzgMkB5BAXJ7XEsyUGQd7rrmacEWs98mmJLNB7m6C4tSFudxCXEN6Q6zByzVPHVk",
  "key18": "255LJTLSUkivrM1oUbTddohAbVBsJqeLuvCBW737Fu9h244xS29VBHY4kfJowEDHw4nwkPTQd9ctWK9FS4nFNxUg",
  "key19": "5tbN49q5pFVhAN5Dujd1httrUFzUf6GqKSDtVULoatk5gznWUMZ2DMwBiycVxN6Es13Vhd3JdkTnxPVhyz9BoCh3",
  "key20": "2gurJ3rAYVqCG8E6wXdCTDJ6cDTKQmRtM1VGKhSzhmpBFcfUmEpRqpsbvcSt3NYjZCk9mimfsMWh88hxGKeSeDDL",
  "key21": "5dTdJAw2af2jdgeaJpasVA2WxUHE93SeW8frUoGiRdjjCAM9MiYcPVpcyv7P6PfBpLhvL4xSMtNuKKiu3VXLDiRJ",
  "key22": "5Z7QNhwcCHbfD4gNy1c7XgXrWUeeV6DgKmVW6Xx6jDaTU7Ry3e9ndr9ittkNHvDKKGQ2WQGPPkxum2qTrTFBKnGL",
  "key23": "5byMTzPf7k2RU92A55vZbSWaYJXJZ5RVL9DWo3xgdD2ZQ92ZvyDWLoPaAempCWReexRiAESQKAAxhHZts9fru3cE",
  "key24": "5LAgNWCW44hdJgdqrU8MFMqPZNXfo49yMJmTpnjFvh9brCCziixhBrX6zZVJeY6PXBHuyD8dr9YUvAiMTCKSHEQQ",
  "key25": "5Q9gXt9zVZRFx2buEuzQgkwM5jcWj9GoH6dWXRMWJktEAvWXJvFUb3yf79xi1qYQMkt7U5hztdEFVAF8ZwyJ66n5",
  "key26": "46cU6NpeZzwdcWhFkBGPZKy3T8LUBrEHdPrLXSeY9FpksbYpXYZP3R6yk9J4bJc14jdwVgYbpmm9HA13Ytjz2xpU",
  "key27": "PL4aKZPbcrTo13J843Tpevc4BTnH4FzBQfFdXCjxH197XNnuaLx3W9qws5nMYqqXQHECZsEujSzso6XGkHEfxAa",
  "key28": "52Mj8Rs4N5Ah65n7TPSzWSmNfdJr49fhwX2GufqeRftTfEC4DM1B6CKpG4iUBqZcJ7fR7UrAYzGojcRkRJaBKEHm",
  "key29": "UQxPS8d1njFzpkgemh2tLPu4eJjFUmHJhUHKfMJrk7Wrk1xAyHNuLucfrRZL4kDKN7tcwDesY5Ugjh1p9ibcMwx",
  "key30": "3SfJ59ny2EX1CEPgbD26S7XPmgxft8VWj6gkQ5bTsy7ZJWZdZGL4PfEKk6ViBV6PsUNJx6VvRb8YwkXcK7VcDZJX",
  "key31": "4XFBL8ZiqGN3tPSHjRT7yRNaJpbKrR5h6TZBE8hAqpsTYmAUdgKGCWyviPtSTdeC8c41fEVKd98Yhz6uwL8s5XSW",
  "key32": "LfkdGaTbR6sJPjKx4dJwAwAwNJyFUFvjK59QkWe1qw3iVF3Zv7gyvTWkCKHPqDA4Dp2cujbJxUMG7CYNdq4Xovd",
  "key33": "4ug27mj9FQJRJW4WAZA1RH37LAZsDNhWb7QYMvSJBe5rKJvXhYMcbwCTfnBdhm6Mkz8XmppNasfBmTmgBzM7wQFi",
  "key34": "2B2EU3DoUwLgAyRyfFCTzibkrpRmyzDJD1hjZQFkTZTLinDn9aSXFaPo7XtbGYZ74UKTNERD9o9X2m8adXExV7vL",
  "key35": "3A3FCWZNVixZE71syJeD7tTZmFga3e3vVncdr4w132x9AJRtBJP3TQu7Jhh7P1xDXc8jkUErTMK4V9fgjGg9teCe",
  "key36": "5KzGoi21fj1HVv7sumwfzAX2cocFND98FfjcCAYAabCT6a8mAsrAM65osH3KQaumf953pzEpFhgbW1ugeAon4Lc9",
  "key37": "3WGd8fQRsrZy4FkUoHsVFp5x22qqQn5Wp6NyAUVLUf7C3GEMqrUC2j1Ud39eLWJ4SdPs9ErLoHC1hx81YXsZ3qco",
  "key38": "3YxaqL3pEzmHxNLXAwpneWG1SRWCRc7bsTYNzFCvsSm5nRtybCWhWJVph36npeqhZTWAnmjdVPcezeqLNrnnRg6C",
  "key39": "53zR7qxuUDc75jb2yZtRPTNRNhyuex6wHWdgn7uQijFu7ZV3yKUyV6mgEgob2yTbL6GTkyb2bWL57s5y72meTb2B"
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
