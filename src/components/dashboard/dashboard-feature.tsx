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
    "5duaP3hHgssKRKmwofmFUeCFQFDwtFrtjacFYoeiuGmPXDRBWd1uUruVURRdfVo53rLDEp89BHnwX2nbySUcjWSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RsnEWK7Z1vSUPUrDXEizVs1bwRUG8VNYWBjGrBnZp4BNPVpx3aZxV3cfiaLqTM5PxfKRjDMpPckC1FfPxu1ZBdq",
  "key1": "5fwsC47HgHyoHZ5ewWgGuAggARVScL6UXZDHubjwHH3JiPA4FZ5SpPMCuefgpg5fHkEkDWjwhHTJFZDb8dCC6DUB",
  "key2": "2vvrL6fAaDaDgSPvEkQ7bsroeYTNzwTuKtZz1MukRm9BNSgysDgpJRbUj1sCDJMCxXqRJdoCDR7sL8LapbNUiuUb",
  "key3": "xbb7zQNFTyuJNFf6WoVCK4btnkpGdADpH1nFx4u6P1QXuymupQRBgi1vtjXW7XRNNjVdmyvCidmYgg8syAVguzY",
  "key4": "5GiQMpj2QPRs3T6u1MJAmwfyhBBhLtY2vRj3CgQDsdpM2662s13aM11bybJ2M69gebo4SfmvJ4YGva2hUPibefgd",
  "key5": "5uSmg2hZoVXQzjsw2drWgmbEXoP9PSE7iaPRryqye1WZiLEXm9gZDLWUHzseQCE4EA7uUzQDqohBqihzszmK7RcK",
  "key6": "3bGH8j2FCgWvesUT7Fa8PQzivQ3mMWdwWrs4eWZxhA8Uic2nGVbjcMpfF4JtAn69mVjxpuawSedtumPfudgrwkYg",
  "key7": "5RX1rpr94RSfvuygoe79qktoRpdMPZw3aB5YLPpAMfZZu6ezfkDHsPPdtf19i3CErMTRTKGgocNf5U5ohh7vCxjE",
  "key8": "42WvPEtES91wR1JCgW69CoVnzxB5hyHrz7bXvVg9rvTVhNZfLQpfo1dG5Pyyf4Ktvq678ByRvBbs48ruE6gWbQsX",
  "key9": "3rRRed8UUEBhzZGWCnSNa1QhqANhWz339ZbzboRqyMDAorReyXXcFoRYijCtejJTDFTLFePd2mgYsB5zGsrw863g",
  "key10": "3J6hWohRPy1VpvBY72JCECoNNyW4UJpkGdddnk79bXtK7BmTCbwLVwLB617S8fW1UsLrLsNcGo8pSSeFWfpH9qdd",
  "key11": "2Bt2nGca3rQNskqASJ3qgLZNDnLnLu3AEGP23dZt13r1YK7CTjVmXhvz3tw7Ewe518sQhu5bJV4qWocEBJfBKcWr",
  "key12": "3oyGJBjPKzeUrBgyURzUmr1pPztp5p1hXPhMPzw1f35GRXXx8HFzj4rpBNiMiQUMAEU1ugboNLmxo8pJeqhXTEWU",
  "key13": "r6yi9Y2UdP4MyN5oQTkfV2XouWvxVJF3JRQpaew9k4PH2xKt9uyUhQvSNBJJCkpi4u9s9bRWoqm5oRJDtqWzQvm",
  "key14": "fdVyYbueuwDpnQi57vvGHKyzbP9Rs13gNkWHwBkLMojuyNGLxKk6NGxbEKnUyMKNfmQZYgw9p78QBpTumFgHYdW",
  "key15": "Zh5Xoe7ndxw7qb5DQEcE2XhRquFuKaz1PQg91XebQXCW2oK6JVnqafJbrRrgoF597Vp1nZdYEVevBQUSDnEGwvB",
  "key16": "4HiEFRTGNu8ihxZB6bSXnjJ3WBwQF155pywJFNVGDDGwWct2fvmDoa84FQbdxCYpkvrEPRgU131siB2ku3yaiM2f",
  "key17": "2WHdswnmxVV8a7tbRcC2ei5QXPgpxfQG6MQXKGMT5ub2XyFKKgUaL3EbBVhXJvNp4SWYduVkhvxPoatNQ5jjbPkp",
  "key18": "5XFxGSXTdkvi45TNYL52UtUnphP7ZgTQWLv578kLQTj5EFk8zKihtdyxLDq6m3qH1U4CsNC6b3dyQHr4Brc1UAyM",
  "key19": "4CLaZzoff4cXvSMm4dLAc13A9oCLsGuK7QzQLWvV3gnQGqty4Rq6GkTxe28FrZ2UWUwSY67vnKsUBTSpjHio48Zx",
  "key20": "o7gouFENdojciq6jsvCMh5CmPVP4s8nYkajQaiEv9oU181L3m9zEBVnyriAqWPZRGSvcizTKepdaGzDt1vG8zHH",
  "key21": "5EFNVvYNkCoseu978a5gjxaaKdJBqq29jiv7GqeZGYkfAVeoXaH9BLpXLBmcMe3bQf5by1mdzPjEdNi3CjxpApwX",
  "key22": "eTjCVddq2WFieK3GNTSgTLdR258C6AQxMpWVeAXxdSwigySWferXZ4xiUCeeN5tKGT1YpzqSJnn57dzcHFjqk9C",
  "key23": "4uLiHHSjKFRYURoVTnGT3evAAaY8BTodbbFAJN2Mjtm1TuVS1bb7fHcqzc88YUxjn9ADm1JVKNZ9aJb6MY4oQM4m",
  "key24": "UfycEWBznmMewJS3JZfpoMWt35KKw1CUmPgVzh8isLwEFqCp8ArKVFvUa5wBencKRmQLvAWximppxVWHrrATUv1",
  "key25": "2MTUM37TEpLh5mPbA6w8R11Ri4pnEGuBGVPSn1yBvdjHbS3MyUsBVT4aijTPFxdPuZvNZ52EfUGc6xhrW5BVH9g6",
  "key26": "aGMrrfiM2P7H7kXj13uYW8E9PR95mLCkAZvVvjJ5fqS8N4YK9jWTyvwry64ZrbCK5CswkH5KN4iatvV1zppnSph",
  "key27": "5siwFrKnadGJQNVdQ6wDVdMFqSsD8chxiadLGvFGzNZccKV4nG8P1FmDLEynWhMPAPnrmQDqZ8B7tu4bPVzwP4ZD",
  "key28": "2vGfNTQiwdhB5NHJ4KqENTg7ufRU1ERF4vziCUhE2ZE8YiMjtT2y5LoQji8FnNVyvz1rv6hcoXi56HJxY357fRpj",
  "key29": "3PDaP1KcFfKnhaTuA3GoSiggqvSbnuy6d2qXyJTfqUn7BYSxspBTpKTUivkULQbeXJLS83qe1XipHUtph1W3LCrj",
  "key30": "5zHcUo6T2tpqS4uoqmG548fzWqJb3911tySWarNHBG8M2MNuAdXx3ZnnQLh6vFJWnsf9Tf2umhzGLTeio9Yy5qeE",
  "key31": "3FTEQgAdib64gFtYcmrWpphAZTGv6Hv3PNzLR1nbw5QjJ2JmGLcnh9MXK1B733MfF8M6rFcgkvPVfWWfw4yskf4K",
  "key32": "3x4zYuPB5bn9rthJmMUqWTcZaMsBHN1r1t6P99cgN1YLhMsum3M82Em4g6GxVK1gEwpPeKR2yj9b6gqPHPK6EnoE",
  "key33": "61MTHWpVCnVoLKqGKpL3su7wvbCZfD6kHtZ77rNxFRhao11cGC7XNDW6XqEvTsKvB29JyLZ1sGrLZR6vHothtbZN",
  "key34": "4gA9ifhLSJ5ceRz2d2vG9AWSHongdaoEmJ31KSKJoV4KgiaKbVKTaj4GRQoXevQ8Ub551J8ufxCPcgzeyk84L1pT",
  "key35": "4f7PtPNKuKfXVZB2Y8FaecVvEsKwJw4juiRz2XoqjNGyQWq3vnkBWc279Si6DnGqmaoXVkAYLVysRgSWs6cbr1sc",
  "key36": "243qF6aFjSRCp2mKjpxq9ri4cWcJ7rMXXU5n1jsa3JfgUL7VUQkyuEKoE141sRhUERscwzXhNaFhdQLW6UZ8n3oo",
  "key37": "2WNfVQojCuPNKNp8M1vWzFpBXNQrtGTD97ScHQ5ikN5uFQVJnAkCcw64YxWFHbk2uNeVJz7Xt7XoQbMoZLVUbyPy",
  "key38": "kE1RWaHNpLrCqvu1vXPPVee2iAmKjwXZCLZsdxciqCificWSw2JGgDwVLR95PWhsNPDKAUmRgCsi2RnKcyos2B7",
  "key39": "48Lf2pCfmgENuCzwPg13DVPsr6TaGyDZ4ta7DUb6hJsTmHmki1ADukBjvaPWisZ7rB3oSJuThXDrPyNNMDqLzMPa",
  "key40": "3AXPDUDGStjRMvyXSPeUHVTP6ifpbqhggNdCNbjB1uY6CR1BS7TRns9jk6RxA7yMvx8CqvpoBLA4vDA8SBZpKLhZ",
  "key41": "3TU7hDd9BV1QkRFnMyZPeQMmKLAUA9CxnhV46GaeVz9MgPRhPK1dhTusyKwMW4RrqdTzvRUHC4y3BMSkXCaKh6iw"
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
