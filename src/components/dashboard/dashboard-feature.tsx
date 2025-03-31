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
    "592SsYFGgyRDupoFfxPJxzsujoLx1zc7DAUPWDt5882vD8FLyDz6BQKvygssgLq3FCrnzJ4S8KEuqeN8boTrHY7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrH5av3bpkhWeugUWkBcU7DFPpmUpciRr6ukuEdLUJJFz2eqEcXaTQjkVsczfY4PgnNZvhFSATSKuaQxWPQCJfi",
  "key1": "58vkqUR1UGHX6GHALE7SKVxQsruywGnwXhwY4MLsHtGoejd3VcbPzumyEBTbfhB13UqMQoTs9TrKhMWZHo9eMryL",
  "key2": "5MTSDdz5AzvL1uxFZjqz4dqg3qRMA46dV3Nq5H5U4S4wkRV3PKiwLTVfz3twZg9JdLesSQ9ynj3LKxjJf3HxpknM",
  "key3": "29Y4yvqxNFpJiQaz4py4Phx2vUs6MptwoUTySo7TzpdD7dEXfBTG8mc8F75D3Nz3SpchrLxwcbaro2ZWeCZQ4BAG",
  "key4": "gcQTz2kSdbBrjshd3dV3epLkDpkZ31erbqwssmvwb7jdVsG3rx8GNRoyjVvpLzX3UJZXC1fgX6QC53UaURFT3MT",
  "key5": "2cypLvGCE2zs7E2oXCCGLKs4G3KHTAGHUJa8ndTi7QGij22My9dZWi5oGFzJCTUUqPyh4dnLdYmYPVnZM6dwHRt2",
  "key6": "Y3ZdAXNDEBmNqDNbxdWmma3X4k1jirxmU552SR3uoKUaeeFqBUitP7tVgm547gZiebXroXhCV6P4VZqL3qvBuBe",
  "key7": "2Zqfdwbxbp2v8RUfVoTYf219VPmAsD3dHViDmFZsZhyZx5K2BofWDzYt1d8owW85aHBGpWMp7pfDQ6HMFBBdx6LW",
  "key8": "5HEwPJULBwbECsEdXfCoMmtTpepDKZxrU4CPpG11dpQfVbfTw9LCULWkVcNdjGNLPFS7Q2bnKFe5QWT4hx1hXuef",
  "key9": "3F5yFiRwPy6fnMLwPsSttmwQqLrfsodfMBCN2Gec1ehqEJD8mwJdEf4yFDTeBZ8M3YsGCjpaanRWyUzawV1R84Pq",
  "key10": "3tDsGJ93nbnFtePtrnrCA6tmTr2Ytipg9n5TVzw5BRfvfpE6ECUhZnsdXX8ZNe1CtYx47DRQkMDV1QC2H9EUuriB",
  "key11": "3xK1DnFmhE94DpnN2yH2J5Qt3Rntdii2RCPC6obxo4NYfsFBm4oUdy3fBSQRZ8iNU1CympB4HbYc3pcL57qLDMEa",
  "key12": "4REAKfB9edWNv2gV6Y8Mdy9ESxVsVhvpVc3SJ2VnUtfno4P8bnNUJAEVSaMBfQJV72cSDLdjiCD5eJ2qZXkg56ra",
  "key13": "38Grqim3Nh96nNq3AHQ6tJ3AiQMkwGErXRNuYy6GCWjaJd1Q14AvGJi3p3auLCXC1MNjBJnwZjLXUugMhU6c2r15",
  "key14": "4TMGGCFXETnNYJK9aWUEM6pZBh6CPp2eFracyfRtHUbMmGwsSPwnsg6BgtBZkMXdyaiBvBDUccUUHxiHJCrpRhip",
  "key15": "5YPnBQuydJ4a1mVYJU6xvaHD5JyqaEkNV8kKqYAyHpAazWjRKz4hRdXimBkfos2rDfFY3jF59fEiEX4cPwXjNdeV",
  "key16": "2T7jf162E94ZuZTSGwoSJcFNxhZV7sU55wMrvvvbUWqWGTms2u8oDu1yKx7NR6VfPL7ARCXoWHA5ssTFAQp7LfJp",
  "key17": "4XbGd6DBfhgtxR96qxA428GAu3s21KTLuDHsA9E5EqRfw9SNJbwG9Ee5suYKsURrS5dCJT9QH8DZ3HQM4svCe7e8",
  "key18": "2ai62uEHfvRAq5JKq1wqYjs4GdXQs4tmyPzcfqmkr2gCXJZvQhTYNopCstXTxymMLqQL6W1ZJfUH1vEKQHDUjLg9",
  "key19": "3U2XWx3cRxtgovkAA53UN1C9mCXb6YKubtRudhga98RLjGBxyyjJZVNvY1SEgneYLchowWaCvvJjNDM3NihWSatJ",
  "key20": "5yWucKQn4CytP9C96bFeaSzKph884Tyam2RNu6cXjNLVZ5WrFuKYcKNPW47xVm1RF6cY3JCFC2jJDJqbm1YsAwJM",
  "key21": "5sfdyQ7B7Wyj9zwMawEsGhZwV1Zp3VFuPfpTDvQ8M7wv8ioaGW3MeFoTmP5DfxXC19bWFvBLUNjxT6UFfHT6juJs",
  "key22": "4EJuHVqjwtprUCdPXJozSfHyeEpvwyTm7wpPSfmp4ww5wsyAL4Vmuf8ks9smmbMPfCemkCuwgixtJAQBCS3U4tYL",
  "key23": "bBeP7UXtkHNPUQs9Csr6BaWd3gsxXvcGcxM6Ddr1gsHLR5nZkA2PBwD5jt8vcQXScaffMwcN4bn4rnSfncsEPvp",
  "key24": "JdCR4iHNzNu6Qm55DFYDiwZheRuQoCVZ6PcTpswMTPYo3VqZ6QjPFKKdscVP5dn5MoR1WYRVn5MDBuMDGRQdUwz",
  "key25": "4ntXokoMuFPUZR6xkYj6xp8upxVwnTn8NrLn9nAVQgH5v4BWKBXZ5x6eE1MAB8QMKQ1hPk2Nbx58o72HdmnQrciK",
  "key26": "39xxCxGK1j8zaphUQzVjqZS96nXuXvhp9nzk6YCJGkpbaU9RETRxjGcB4jzJjnTo1eWfvf5yTSNYzrTPV9EsZKg3",
  "key27": "2eJG7TbmGyCGZNWpVSWUnoiZE4kCmD7fF9RrRR3LDDd536AVLWMHPyUyXMrYTfV3NR7hj14bC6msH75j4URxL92j",
  "key28": "3gqRUfjq4GZ63bmS7L5ZEn2N1vnZ8Btd3AXk9F6kGtnfS7hj2ebPcTeZWxV7Bnpes2gAmKErLrKZsx9dtyr8uqur",
  "key29": "2H9P7AqmoL5hMK9AGEkSMXgtAV13HbdZTprtn8ytd42VtKB16LKAQr1vZQdqhfm6UxMK87PMKPNmu2SMpTJSZ89N",
  "key30": "4fee85npF8bVfEi8NsqSYcMY81yW7YdUThY84tjFQoYFJrzTyfY3Fr1keeoyxKRcDFQRWRdVmB6fPAgtw3t6fQ5u",
  "key31": "4TzjedwRWf7jssrY8Ajr5PsxnooGy9qvYov5yJkmCzwja69rpkR9NpYCNgTrn34yHoDLPY8WdiCJBUXduksJksz1",
  "key32": "2QomR17WaNfF3K5CfxNi6khwMrVDj6YrjVHg1bctt1XZQmogprfTcDQb6uuerx5kuLEnLGsTmhvzkXLCSsYJ2Gc6",
  "key33": "3yHrfa8ebaV5X1yTKWpFA7wqHxuPetfrARvdc3UhEmfKUDXdPGXgAZpqMLem815Bo6J4dWz4CQ7iHnVaMQe3ygNv",
  "key34": "3Reg3S3p6J6VDnUKQvSG49mjK1HLcDdSgmb3Wos4b17BnGeHibXczBb9sTJLoXBoaTAZBaV2BY6uAcBrcVAuSPob",
  "key35": "32wz9vAqRp2MmMsQfWoFDeJQhh3ByvVETeU4P7kMSpXwqrt1ouRfimaWSzZX2fvKQ86rnEmbWMSkVkpjYNaCxfkQ",
  "key36": "CXnkBTZdEqpb42GCn978qKVz43hMBjLoigKsRWUZKhnEBuwuKrZRtFUH9MA6JhEkag9tJyqsKcCtqCeLa9M7M15",
  "key37": "R1DyPKqyJc79MDGTWHC7AoPDZBkvM5AUAAmHR8vcKDNySZG99oNj2Myu1nGy1SGzmhQ4jD3k6QzJcShoevAFudY",
  "key38": "419C9JWeLQMp5NkeKBhgazmWszCYknnf6myt8ffvahrRgaR5iA6XuwW6DjGV545Wn99KgJAmqNvw2oBMdk1tii29",
  "key39": "2j6ewtHqhpkbFppAEKy7iB32nNpEg38oJE1UCF1kC1ykHi4sV4RH7CmGfryEB2zjh8ZgWBZ9ecXQGC1qC7CrLF5W",
  "key40": "5E2DARYLo7Yurf7JUJi95CGT14H2ys9mhPNWK5kZc599epskFrY7BWyEBrSJZmriB8feN39yYpSr8MmyRc5UeBoJ",
  "key41": "4ck8emies1yUxdCPLSb52XN6sh3Brx52XeASUqzVCFsDJjH3Eusd1t57asaYC77ducFwWKCn7Bz2mZJKdjCJN3S1",
  "key42": "5WsjkVbLFyCnARzmQoRz4XSXXkvy7grx9zyu5eTrHFHU9sGPkcYjNKzTx4yFbaii6hP7suRYz5NzQmRfLvGRqHQz",
  "key43": "54foooiMVLKQQuK9JuofdWwG2wdLnk5qWRNvRu6AdwqUENtBqqVNYKy3ftUEstMsMJHpFJumeVXYWoVFJP9rg148",
  "key44": "3s7YskNZqYL7s5yyQeA9mB8q4KTkShdDHQNugaiqjQYQp532w5iwCi5dSYe67Qe3bcA75dJekRsFmfwRxdkup8TL",
  "key45": "4wv4LwnWPg5ixfPVNjXNxb7wvCzurNmK7b39zhJ3XZiM9E9wq7f856mRM6pbKpy3JQ99WXWSzLTmEfMSQKVSFKGn",
  "key46": "4n8U5akXrU9XZ87G12x7rEtbSz31GbFGK6Jxgt8PywJZQvZHP8Cv6nCwg56izQQXpGZkuho1UT8ZMkdWPe1fcKj5"
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
