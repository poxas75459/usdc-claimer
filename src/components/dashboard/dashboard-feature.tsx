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
    "Y2Gdsk5VCiqgJ88FQ8vnbkdhUexvN8LZT8FcEJQTVP4SzwKr92KNyUHhHLuab4wvmirpn7AYkMWLnWWDMY2HGNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58nRgxkv7CYVmydKboTZL4S7p1AtRz7MFDaXXEEg3Q2tbfU2gwcVUR3XQsutJUstp9bJaSsjkRhMNvzziMYKG91i",
  "key1": "WKKHMJmKk5XvRcNy7T9JZku4q68CuAHq1RiDJ3YydKZhqNUCQbAHFMpba3Ho2qdtg1YdGvE8bjeRQuyfv65TkqD",
  "key2": "2VozEqEdQPPv7nmXoTbYBokwsU8GWiyRQ1uv59ZoeuhVsFauNuPQ8HpruSVcA18kVkNDveFa6Sw2TUrtiDLBcdVm",
  "key3": "4cvkXxeFKGZ2PsVNXhd2rHWsLzmVihDem3sMShP1fF6WdDVTe1j1cYEnM9aDFwnN8DZ2Bv4KV1g6waif1ZH8CNNB",
  "key4": "51SW9o7z9nHYheJ7qbd1rVZy7kMrTKxLkFk5dxmMJLELXKPLDNdavwH6agBoTDixzbgp45Df6vz9nT6DUk5wiMDH",
  "key5": "2kkinWL9D2RsB7ZQ5ZXNzEir8Lsqu5Zy5wrZ3Y9mtot45pHX4LVqpRaGWroBTTGgUJ8aFLHM1BDsomB4SPzcUEXJ",
  "key6": "3YDnXy8Q8ZLD5S9Eu2Mjo86AQ83FhuCZtYYt5a7DeX5GzYvDjku5av1VY95iq6q5YiZEWErhqKGRyMrE51vF9JXV",
  "key7": "28TWXMgE2ThBhDQg69pXJVWbdETQKivird7FUQCwzP48Ntfr4XMCgas84vAmEm36jev4xgQqUJvk8jyDKjcpViUH",
  "key8": "3gRY6DrEe8Qat9LmPfexuQ6sknuff2JzECSBST4ZCbohZsQtTYN9DhHPQ7pcqseznv6REs6epHS6TbEoeCncNvjb",
  "key9": "2B5axpT3vYG7tKmvDAQoZ7TTkwHgk3vA52yFowAnaeea9i1JT2whmwtB43iW7CQA5HqzRpximung9gXgMEyk78i9",
  "key10": "cyDVvLDaf4LcVMinwxYLeshLTr7TxLWZZS3FHMBsWuxDCvZ4zRJtoS4zt7PWeoNHAyj63MzX8HgwZsVW7E9ErqF",
  "key11": "H3VyJTob2UPAuM5HvmtozCcXwhxyxCYfd2GvZWu5VBdTmUNkuBUf1JQ98nwQdRqtHxSh3zDjNWHcifCCK3gWx7K",
  "key12": "3Cf9csY2xScaH3v1P4ngd8JFVAQypCZRxBEV9Jg8eUEAJogtGjHDGojeFuhfCQzAE2c7AhXchFsdFHx1AqMuJ5XZ",
  "key13": "equ3tsRE2Fezv5W1wkbpY8Cs8qpBAmCbkjBuQyG85tAGR2RkAJeroN77KpR9foNyMsVKY9obrS8S6pPeouJ31z5",
  "key14": "5mDYDQDzPd8i4FnQ63MaLXD725rKm6R4NcvMbDHng6gdV839CvpQrimdXmcJnFB4zg6NjS7hb5gqqkWGcRCqknqW",
  "key15": "3bSimG5xhkeL9vWHAxqQxAM7iabX7XKE7K49t82EYiB1MKyiWmMm8KYoWnLi3JLSWBLdPt62D1PfVsvmvXiygTFG",
  "key16": "N1o4sJpUENJypJcV2FamagEuWZriqcPzHJ2JJrYc4vZQ6y77niqW9zHSZegCRRW9U26TwftAeKV4xe5wSXw6yvT",
  "key17": "yVi47oqpsbffxwhZmZ6fHtBZxASFWCS1ACGLheY6EQ1eP4eHapBDhsaRxN6qBuYhPRgexgLLSDgk1g4JyMaAkAF",
  "key18": "2v3c43qErbg7NLt9vppoWCaMoscB3zMtNVoDRxGL6FK2canSLn73HXzrsgHV64eKuXmHGc3hvsEUnQDxTyDoWfiT",
  "key19": "4pvw9NdAAxL32iNwxprGCBGUunf4RdHaggM197ZXefZHpt9GRp13n8UW1xQce3164HtztTjbpNVfQwC87boTRTGD",
  "key20": "3mzEe51ULQ2H1r3RB3urSD1H6pGryZCVhUd2LNm54U3mX1t83aKanfwc3MWMWCq6oABQdnwtZAWJo1uBdpgUBk5s",
  "key21": "2wanhmgBKkX2LB8TbpzbUbCTDGxryCv9VYzYydErhkQUDDM3yhMDr5gev7kKs96QtfCajJoX88DKb7dZAUU55tTC",
  "key22": "v9VCoTzBt8wWAW46mS4ow9AiDHBMdFBtVKKP6F4nniCNfBGhYd2CyL1GfM5G8S4G1nkQFQcvxb4AEgxwaQ9aZn2",
  "key23": "63uj7Br98EM9pF4Sq4ZPwQd2HAqVcm5UrraSEC9r78dnjqLa9sfjoa3ESVKLTZ1WbVfUsKkzifPGCgTSRMzxnQjb",
  "key24": "5nfUBb2oDJZyRYn4azTK7PVnGDruFscAr7JAYGhgFMf4Sa4BnfdQEPUGgfvaaFuQiYAE5gavMgL9AJ1wpvRxGx8w",
  "key25": "2FS75TZ1kwLTyEJn4QeV69e8WcUhETfsRMEgcNdxLRQHG8mFWcZdNjBw4VLYd62CpUQjaFr8MUvbXubMaoW8Htqp",
  "key26": "26NGxdKgQMCYLnsMwYwKY3GhUVMoSKqM566VLNXz8X4nrbGUhiMdsE3vzJoEjiM5krwUZbqLepzpy4YL4GSEjGgq",
  "key27": "42BnYo2fkt6omyazAn3rX9NwtNhSEQvyaGQbxkFWVCpcqydp2feJZJGKiUjVXXiU2T491s5me4thz9NuDv2n9cSY",
  "key28": "5TgyVySfCAGaAgPJojHfai1QgkArJiS3v8geLMyxFNE35WAnyfjefZ36eBWHkiadYwDtYSKaqsRs7pUwGmdgppnW",
  "key29": "5mHx4kUS94crGMrDpSKMDCg2trwwwN91z3YmJDZR4chZZc1bXAnhWJGNbZVA7re7LDUM35Ahwjh5EbpM5D7cS9oJ",
  "key30": "63yitWzoDJpTg2Mvnb3XMUJ4DktvDbyJn68sfFZTWz8p53H4qfPk3pME4NqPwSpGkDPzd2EqRBWEKL24Aahnrxxc",
  "key31": "3cHUis6397dBeZmeJ7maWieDk6dvP9qL5MUg3TiYXiwZKaj7UHXkG8QQZuBjaGzTczWjAAesEjn8XmcqZw8QSv2G",
  "key32": "3c3V6dsf7HWeiFyk4oHHeBnLW7m1Y9hWPV1kMZhqm44WVr2PmQ8aF5H4CZyYNm7GgNVAuaH3TDhScu4zSm8urnYb",
  "key33": "WLfbXucgyfYQXpcmvXqSXzp83PWBZFfSBhLG7S8JyRTjJ4Q5HMWRf9EerQGiL1QmDGFvu7ktebSBpoZqRN3Q1Yx",
  "key34": "5aQQ5xreQW1hZVt8bV835NhgC23o4ezWg7D6m5T5uLH6BWJWx7bTouh1unhTZrhsYWYz63pbyRM7QLvGyfzd77dz",
  "key35": "GpwwogNq4Ny1Zx48Fj5vbF9KWFDRQRWtdsyj2nhvpb5BJN4M3Yx8xPGdfHPgeiPaYEm6K1ZQQyzeMpU6uP92N2W",
  "key36": "QYA3irFpSZ9rW9vcVDMnpgK6jjAtx8ZKPCktvqDGnUwXgATXewmXB5VKLxUz3Pg4f91rwyeER7FWLpLA8igbfsS",
  "key37": "4UCpMwKbhAwnvvmjKwjeShUfbG8dGBkfpkUTL7NeEMEh5q7zqy8pyd1MTnhZLPhXDEQo9WReZThz8SiTh3EEVoD8",
  "key38": "2DnF9E4p4ELBndUyDcBq7mzzapfipEHLU1nn9fEjmDx8EMJE3Ukwj2VJ2fQwcB7uVR3DUGtpXZkB2Lo1k946gWKY",
  "key39": "KLEFMjrHBNFtCZgoEct3kjmV9sAvCDx1ooFCbExSV3YGMoR7KkHr1r5Xu4hudFfQbG2NaxQXhvV7yd5KSrB3gcE",
  "key40": "5zq235jWF4gokLAcZwdgF1o4Wnf4jwjBdsjLjPLwTsLKuby1igh2WtE6YzJXBBkBMqMw2KKbCnY4vkGdg5hs3US",
  "key41": "5irV65GcfrYf4zwwQbRCHTNf95JvN5qCmsL9WBbq1vn7sxKkEcwGgJzQyvhXi19GwJWswPgns2GMNWmXqFoKdGPW"
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
