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
    "3WQi2WmEE8jGdsGw79g73pHjLKKGdKKfcVNAbTxuKR9biYszJsYdpGmVfjBHTEt6oEMvkCxbRdhG6hoLZJpsCKbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428msYxx5PCfQ3EHAGZjetEBd1thX87Bb1nF3LqdzSyHFNaZRiJSK7nuYbXvA5hJX5xzm8sgkqcQweaboH4GZmSg",
  "key1": "5Wrf4gukS6bMpaqEzE1mF2849fZfToCXycWYajNFNPQGFZqYtShkdA2T3KPm45eD7K9KNG9rAcqnKo6gv2LrkfNW",
  "key2": "8f7gHJEjAGvMzJztNpqtvaoXQeCfdSUjbc7GgKjPFXhmnp3qeJXJeRtQf4ndW8v6BqRh3NnMwPPyj6Mw9spjfvV",
  "key3": "3i6qQpPf3qVjW7sYLRKzwwLLMWU2SeVT8ri1Runu9azU49MvmRW3yFgSajvoQ6Muhtu8CmqVj5Q3Avgv54ZzNJa7",
  "key4": "4hEqta7epH6vSMXy9i5vNB1jSf3c7LyvoHzvfAbWmb5pASxxMvv9MwN79qMb1tseRkTF6mxYdCVy3zDr4i8juX28",
  "key5": "3mMUKJVnmg17tsG8gZVSxTaKrzh9LXbwoztqZXW9WnGrnCiqVU6rUGr9mj2JYeF5vNfYPKdM548AHJzUv4pssNqf",
  "key6": "5tVd8FT1NfdP4KVoQhyxabUQ64vtzvrvMkPArr4PHMXV3xcvzD29Rd1AGvyAq4P3C9pqoTzu5wgKLgrxmLGT5VFt",
  "key7": "4erGtw58F4xZ9x8VNTiv1ASqxW9o8MoSRWaRTNvwtBuriMx5t7aD3w3aShf2WMwX2UCbxEbQPMftn8vgzsy4ceJC",
  "key8": "3A1dRXmXj9SERMzz2cq2zwdjShnnmEnVWrFGipizkVWYsinhxiPkBDgdqSeWHKzcQokeqpyHm9WisdyXvBTPKL1E",
  "key9": "3rvxEtijhHEAPaSmxbywLM7ybnm8e5PPcWyCwydzQVGPCAL3Y9wLQXhKA7fkmHnFo2MH2WRv5MLdagrQKWAhnMGM",
  "key10": "bFQsYFpZvvJHnzghGDcNCDo9AMPXRc3T8U8xakaokSFisrtXZoPr6eWAfTZ1Hdn2c3Lp8K3CGaKpi5QD3HnE5zo",
  "key11": "3KHb24gdGq5c3uMyMtfufUT5mqEAaAxB9sWvEcBGzAUEzpMx2AYdoS3JGG6ym3cd9AF5Ght2GPTQSch6dkTxA5PY",
  "key12": "4kYm1fcmtXWfwx2v1ShFTDgEUpY35znPtfnnNxCUTknps3cGnJADNsL1i3uWjmJJGbddTSWDo6SyeUo6hDdC3nGJ",
  "key13": "5NCtQ55QVwCyBQF52h31qWR98oN7oeXhkkx5mCdxVV1aC3vRXekztaf6VVhzAj4Eo9yxq4qebGUT6A1hAaWeRjiR",
  "key14": "4xdy3MR7bV4i2XeqpdbbCNo6htu11E7Gb66V4mDiEwUgEfbHoTTz3yeYbrckVnGocHB9P6XV15XpNQGfeGub2rwF",
  "key15": "2kxGDb2Tq2JRybZEAZScuWVN3jyyRr1MEpF1kPWf6YJBHSKGVo9FsTa6SysjtZzokzxmbBxYDX16JhAp7wARntg8",
  "key16": "24FaHeM7NEXu5DdgfjJW6F9YLX9J7qiCRzqX7TA2KHp6h3chsWWooLyZdPLEc41VVEFxs9FdD1H1A1QybP5rUgxK",
  "key17": "3JWaUVyTva8bEPZkWgWiKwbjiKPkEX63ASkyeVnFoQHR7tjQav12QwBhxYtxXSFzgjh31kYjkkUuWnB4KEYZsaY2",
  "key18": "5czQNsywGAvJ22LkZMaFSu7DPErcRwZ44Xu1Krd6KhEjSMuBH9T2eCPETEwvPFpb3vMXyYFFoERQBKEuvtQ4bZnz",
  "key19": "Cj1m47Q6SZ7Fy2HcXD4cRYTDhdgMAUKBW5XjLkNpedBSXnfYReSaTZGYAQWtJgkNmykKr4AmZBfQLyn6vomBWiV",
  "key20": "2XaTBAPwYa1hj8qrcAJDmaWfFNgqcSoajcivcXR6fKns4uBMW3eeXe3dE4qCzdPfHNNKaGf36sBegpf25evgZuMg",
  "key21": "5oTeoJiNqxEy2Y2Z8Ci7hZTDALiYbZnEKnFPDezG63LdkpeUmmXmNY8Cz9Z5ZP3VjJcpcvjBo2DeCE1wdE9ojwH5",
  "key22": "UXCAFbNF2h2J5KeKMcrS2MJvjK8dG5HpouPREWJgjDWQVubvjY7ReY1uEzA2mjQmDsqjd3D1HMr4EV3dJL3nN32",
  "key23": "48Z8K1S2Ujd1aLekR4MyVL9p9XCGGtysHSKW7W15u8PtnKriMrQC4zyECGFKcPeMpHA3Z9ShTCiKpLD9XxByBSa4",
  "key24": "2AA4aJxsCZrhmZFAn9n8xF6obHM25Xxshqir5xhyBJFtYWrJf8aG61G8VSspRtxwBCcHMZGU71Bui7HmrxqE9XcB",
  "key25": "3tT3iSQGrX7DKt56kk4e5PdGnmP2pUKZ7RwpTkRvH8vNUWFLowHP8W3hTruH5h6TvjhcmQ3bmF4Mdm2n4urf6VK7",
  "key26": "7wPsBj7ZswYazMN2dn3GDRzRdgqQkEfwuGhzNd6ov9P5thDu8p1WMYcHfku9EmMSDD1PFLBjytVjJaKCqamQw2F",
  "key27": "u6kpPX2faxMCivqByXGkXyuewfCrYbRwkK8zwHpW7x4XRLkuo9HQbkxyCcUQZVx3bPmgsb3R2MTRaNaaUHodUBU",
  "key28": "4SDs1LiAmKzkCHB3HhiSPNgsspNWSmnswwTw32rYJ9r7YhM1GibVEfrXbH2DPZ6uAW9bp4rdSpGhjpeysaXEDFZt",
  "key29": "W5t3cdwgDHWcwyaaE5Nmwxm7R7gwtiFWkYXvfoH6ZJCrUqtbXmuWjTsZBmy5QmUa4iftiZaVwziY8EDKwF9uUAL",
  "key30": "4w644MgY6dYPudgq3sZXxhmLgoQZaWqgpKVUUT4EXNG8jDTdXCh8g76YfwPG6exCaYvxpUGeYducB2C9bHH5WmYT",
  "key31": "2UoZGHbLzggRRKDWf7WVLvAeoHkqe5nuDa6qqESXMtVD1kdrP3s2Xw3k6UMTUa4ciXY1yusUCR89Gy34CNYhTPcg",
  "key32": "4LDfPTm2QTGbu1zb8GNBg9yJhD44GaWiEbo1vDqPtD7UVoif6AbmaxPMDzD5ZbRwSjsDFbMHGTnKsNURPzEFPCsk",
  "key33": "4kURPkHPmQEM5d28V1fvAygYPCQ4guji93BKk7gbFzChg8yAU2yjZ8spqVkYqS3qxpjJwFWHzmpDkjkdDxkmTwSZ",
  "key34": "ojJjD2wsxtYm6cxGJrQZWVU523epitgWtcTAtz7i1iQYHqnAvsMxUbPw5f4nKZTuJpM1EMJQ43TLpwXVvS8CUMx",
  "key35": "4fhmXZjSUJeBuJrbzmTuMnEMaDUSnCzYFbET54Cuut1KV2mWyhQTMnwes3dJSCHu9Lx61S1z5gu39nn3pf5KB4Cx",
  "key36": "TrPAmCrsD1wjQDUN8DVm5qaZN5RDNXGCnF2HTUhoYqria2kv1HmrrpUGZMmDdhVUbjRjnU2uvid4RxJQVddduqg",
  "key37": "5XDqGQsibUgnmaaBHcgbqXLrAebLQW7EPQ5QNKZqcN2Kmy5B945Yk4FPALVU2meoeXMUea7MtEpk5LHeEszcT5wq",
  "key38": "4mmkp6kp3PRUsWRroAhGx7wUnF1iodceVxHLZokXyKWtfPT6QGuVL8ooLewj8oxpWrCkJT3gm1RpH4yMeodxnmhE",
  "key39": "3KQgt6k2R2R1whDFDJXXAwAADke4XCRp2PQETZhgCZumsY5if12TETr5ZJHARTeqcFuCmorV7Jfbg9pbWfnDVwcD",
  "key40": "5pkhXVQNpshPPAzPmZ3VUs9nrsw3CCUkiwfjvVFWpzcfFHAfmzfc2BPxjGH8qcuVt188wzRuZroz59seUDhKgxzT",
  "key41": "4QLV5eJeLoXHP5Qk2oBcgZXNGy51h9qGUHg33PGJ6FAG5JCz9Y9zED9LeHARbmnofzwJumqnceReWg791BZiB3PV",
  "key42": "4kPtDFvr869Z6eRW3GiY8HrHEv23pSKvBLCLMH84JBAXbG63sFXmRiAWGFWzCPun24T6QkD6eTyvxt441RteradA",
  "key43": "36B8VAcba6ZEHSt15PUPT4DR8wtEEH9xPchZxXTPYJqnGQGmBKyGMqakN5RPJy3JBi4L9RzSptoKHx8DCRFndCBr",
  "key44": "5ZYfN26oQ1bV9EzR3xAu1zHVBvLrtpCmaT3jwznAgRMhQ9quMXMB6vveQWEPz4ezGT6YRuwk45F2VbBLuqoTeQPc",
  "key45": "5DmtLyrWWEwpTv34Tz8E29mpAWNwHWmCyctFDrkvocRMSSQDqerYvSMjWsSrgX2moeiy49fjMjphsZmoTnd2gWhu",
  "key46": "2gcTv2GxzfqqU75eb7NC46gKH9Zg2kuKhMcw5X7Nx1miFa8M377J6vHmx2BFsvrXQLibKZxxELS5gXkMwvWXEHZg"
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
