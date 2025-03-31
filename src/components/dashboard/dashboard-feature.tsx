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
    "4CGvxAsyjDX2KsZkPaWKRp7XzKL4FTG8BKCDxojFjrrTbmNUFVvquKafwRgcjfDaeXpozmapPZ7L8t148GWMP3kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KzSHcDxNv5HP3gEusQFGHQndWDx4YkuKr44i1KhiaPJFUSHcyKcMEHc3nND4m3LWkrj9x7Pg89Xgdso39a2vQRc",
  "key1": "47ZXQUcMhbmK4umNuTurZNC3LdM9yo5MHbQTXpMyW1vRTnEVHBbQWdK6AQHXFmMW85vsBUBnnXAKYoEJ7N6x6w8x",
  "key2": "5Mkpe3z33241X1XpQEEWzHDMi27HGCGJh5WTZQ8hc7GTKK26nwcxN3TsgjyRmDENEtUdgzwq989MGRyfqzFZtZpD",
  "key3": "2jq2eidouiKJAGREBFtzxCFVm8cDJAXPiMAAtwebqqjwedddLqHNrqVTUWZ3uYwP3A776fftPWdF4rQzJpzWncZQ",
  "key4": "54gyb7oaRC5yb2PEr4eRRXSpkVrJf5RJWv3riPeDBKMjGGoVee7XbcBrgcRaaC2Xrq2zX34vBewbhzpxBDakzGWt",
  "key5": "2AYwNmXJFKL1jEuKUMYdsJ7ZEKAXyGHWqev94ck1xFKK2DtkXoRMDNSMaW6CTHnWBeTJ9DQct27pNF6qdKbJYLQz",
  "key6": "wMq3Lfrumt4q8rmcDyPjyxWzq4nWSiDURNnSywKEq4A5otgUtk7Rmcty2Mc26k3PASk1HzdAw9XCyFbdNJjWMEE",
  "key7": "2rCmhDEqSMLxPf8pY2pSxWofzBvzFfyaXdVkHba9kkBnnSW8wSpUJ2BaoqTVjRk77Xz9BdRYE6kSQRYVzLeKVvwR",
  "key8": "582KQfYqNyKanZ9bBLFJVANsVsKSdzv5xBTMHDeXiU2nXpKMja513LdvTVYsaiyv5NGtJeWwJzZiycyvHRwYi8pE",
  "key9": "35RrEEdrToK4cNU9MVMCrLXLqx9F52NBcnEh5iDM7GSawRYKBNJguXCFxAtPUgF8vKbCLg7CBP1htsdwnq5iFTFE",
  "key10": "phgMioHNhACJpdyJt1J2p81QvDb6kWKcXEPafdR1MZZcFNMNc7N7eS5aWuhfG2NBf3yK3VLYzvU6YR1UpLofADG",
  "key11": "5HScN7U3LhcK97ruLtgvWcSK2zc5sU9UhhNGjgvyAGkUwVtf4bbo23e5HNZAfoDoHDGoph7gpWhbsRqDupUFHZ3v",
  "key12": "5zuMnhaWLeANtgHzizYSE4nLcDa4JQMS4znTfQ9v8qx5rjtDhy5sheHVbSD3kMG2kKbsKqkKu9fs7do6pvhJm9pB",
  "key13": "4t7dGZHWRVu99oaEsWi7sxHqJ7VXUemR6dXXeCD7U42zt5jwyNXWF2Vj1JdP6neaDFCPpLDhwoWdfT4HqFN2PngH",
  "key14": "4eLkdhAup3bAS7qwBVmrNwvGnUvmPwxG6miXECGJuqWXWuwzxtCwzqTrYvvDC9PNX576X3ARwmE5nS5Kj7t4Pm9R",
  "key15": "4Zq6K1yeoopsnw6aLLs36YPwX5Pp2WKu43AmpySrQnZ2pXVRFaBVDvbATBwNfWjLJLP9CYhsMkezbFJfu2YPjkY6",
  "key16": "357x1NvB4EbHDNSQadGmx93DJgnKzigXaB5NZqNC6Ms7hjCN5METccJ7BAfmsKfP6HhZC31GwThjPgpKhhGgaBkK",
  "key17": "5Vf2BL4CDK7StAYFtYtvVjArSx2Q6eH5nD4zJzkXAJc4tb8pAPKHv8UepjoCejk3dahyERnkcvrPhGsPCJ2aZCR5",
  "key18": "2bm3fEMh6iaEa4X5EUtAc9TcqfY8ziUwd99Yutr52Jiboy6Hau6FzLyMtTAK5ymm9HhuNxfM3RdibSWrTLKzHWGT",
  "key19": "3k5moZDMaqd5SSSzqL9wXJ4SdzSkfvrr8nF5JZ74U8sxvv2oaSPVzq85UrsmgZ6sdqAog5JejKBa1Dau8H57dT2a",
  "key20": "im3Rn1NZKJZc6yy9L7CrT4T9VSkP6CmQLo3aUcEiEAaMAsnF4p4rwqqqkLpoAcpyp3a6cw8CYbho6tbFn3BQHZF",
  "key21": "2gQ2JyQRJh69Yxik6PAEsvMxYVTZnntvf8Q7xuJow1eLkmCGTo5TDCpffAwQRRQB9kVrLLQdQm7RvZNEuUf3bnCQ",
  "key22": "2EQ62q3rHnNjMScgMm7sVbPKt5x7hym6f8zskSAsDoCLsvwMHKmEbpEJvgm97mckgqbw6Uq5kNKd4LB9DrD3pZwY",
  "key23": "4hLBjA2x7eT6EZHnVdNuW9ZFrbqmpyyiUt9D1Gc6J5DP2eJpAQBtiGKthYUgScFjaR7f4dtmvXo8q9MCqSoZfEun",
  "key24": "3KQ3vt7e3PeLzd5knLoK7Y5jDfawEqaT15gkxr99eiLjbEXaGa1QTRCtBKaGrJVPWCw7GM49YuBUxfZM2gUFW85K",
  "key25": "5uSz5CJMfALK82a6g6ZpeA5QPB9qUJDqReSDKRhqCxWzsx3oksYkcfXf1UPQbRP6jnhTvCLi61Ub1MyY5e6P1W1S",
  "key26": "5kBpsTPzUNESEL38ZmhSMqs9P9pKrnTi7B1XRGofcDzYBCfXif91MHj32iQwc4Cjt3KZCaa8n2QtZ9ypG7kCfFmq",
  "key27": "UHCMqdiatWDu3vaAcEdk6SktHvxsc9hqyJ3HjBNBhpwGpQBAS39bugsqz64WybswKeZsSzmjrCJzsJHPEUSXXHg",
  "key28": "3bTyVpxFpKmu1kuSayxZ6rMiKX9j7BaTfL9nXqyjHvzVnFUamMbi6fibrAHsr8juh6Z6aXV3KPQPk98yDbAnZsbS",
  "key29": "cBTiKxQdjKymzzun75vemQQcRW9bpuJUtnfQDsWaMeTiKQdehEWpDfy7wCmUwYeZDX8YRMuJ4vhWoYKYTvtzZbd",
  "key30": "j6LKnBiryHN9rzKM6AHVrtT5RuCA8Kb48V9WEx5GKonV83Sk5YLwRx17fGQYGG4vCQCWjn3hDiJnzgNTouVrtvt",
  "key31": "2L4TUnfpEHJDrA5XmSVknp8izvzkr8NJ5qTk2EVY3gKZsdJgzi9fUgcU5jF5UkuuRswAKpNzeiVZnr3Ebvz9dmx5"
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
