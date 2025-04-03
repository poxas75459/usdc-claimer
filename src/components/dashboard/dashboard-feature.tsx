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
    "njVYgQQjPxWVX8orD1dhE716BNDV6jzPFwMhtX1JEKEpUEarWzjUujspzM8nWDS9HrMnaVhgmdiWbSFZX5HcEiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MoHmD68syPEg68Npx1t1gcDo1o3MZn7FVnQdeCCXWoJGCWPuzEangfG7fUpToUUGfDGPvP3sXX4onCq6yWUxeu",
  "key1": "2xyuAsaM79r1zwS5NxthAtsajBuAfPjCV2EXuwsUrJvihgLBTC5PR8MaYJZGWavncLHpM5cihar7jp3gPXatiB2i",
  "key2": "zRYTEoDnDzV7DizRpsK9WQhTaXJadVuvptwR2hhpuiASNhPjMPWvBZXcEf33YCGzHfjdyTnuS1vYczGdyjHxGxK",
  "key3": "5tGY7yz9kDYSwt3kokr1CBT6jtJkcp8xnqjaCbsaVMZDCB3Prox9KGV6CjwtQocHZzppdUVCciXzMjwwtJUU5Awv",
  "key4": "4zyN8jQdTbY25MkoZVimWAe7VmSeqLcvdg9qnvNwotzNHiMHKibwzNNfPnoTBNBPNeYzsYxVvPydaSwK4ya8ypcN",
  "key5": "327nTD6N2S9GZy9Sv8thqmoYzH6ghtEdoDV3b9jBgpMi6KSfCMWUKn14fegMdT2sUPrZyMg2iJGGnH6XKPaRSBgP",
  "key6": "2FKE8kd9V5nukfCCMpLegsJAu6YBZgpHPiD5JbiDENzmam4tSMUqzDxwFEKYdJhFoRBoyXyJ9snQiMhErRnuHSDt",
  "key7": "5LgfjuxRMAwzZo317zsMgAEwrwX9PLdoSsWmQZQduXTcwRAYuo545Kww5RTTQVDAVs1WBJ4zD1uqNmxQ4aa6cfj5",
  "key8": "35ZryePQXYBn3mTKdvzik5Sg4qmBQ58zXRN7e8yYmBLhFPqaXfkS78mNesFTRVo5beLiY3n8rRXFqyNeBst8m2W7",
  "key9": "udgA27tR3dX8L5E2wVAxRZDTvg9infpf8kxUSAgZhs5H61sRKsnm41JNEdcFWUyRgnHChYobWbFeiKtnbuFjbUG",
  "key10": "64frTUnbPaf4PK2AegJVJfZURbyy4BHQRnXPhnn8vZHSy5N3DkjVwSmq8jfRJis6pv5JkKEeGWvZfrtGxfzxHnQW",
  "key11": "3AVxDm1Zay7wrYR3LsUuwdmfT4dm9NvhwxjR3oWdB64mo76uUHHdb6nwMMBMTLa2jFRuM6oRnY91AKYvK1LzAVN9",
  "key12": "4i1ju1GjUH8RpWNQgXUhBRr7Yy9SMhgwkrvoLQRhqV2HLJkGWeM7CzLXnvb6pKiJyrh9TKMuahe3Uyg8PoZgBZjX",
  "key13": "66x3gmBVuekzDWsjJ9HfGSMSNMhB8t9QPooDf6oSkQsNAtpzwLAvb6riNS4ETsHtrEahoMeBCNz6BPQERkP9hcAA",
  "key14": "5Qo6D6iW6KPx8y2wUTy35RpB7Aj8ajZDTE5SuCgX3yKKELCKXiox1wJbDWQm1Nj6R4sAprjXufVBsEYCmThAUzPL",
  "key15": "xun7dbWRrJ29CMsA6TmuJVRMfWw2epM9JnDJPap6icgXiZpsS95jdJUpZj4PZQwykaihaV8ku7kABdYqHM8HC7s",
  "key16": "2jMB6vJ7haDeqjTWbpCwujQYY1NpufdezRu13pGwaAsVy9E8ZQf8NZYXboqmT8Q46P9WvXY6jqoQEtn96SifY6RZ",
  "key17": "3iSAkd3tLTvtSujDtj9h72VT7gzDpG55wi9diCLdK1BuJnSBxuoA63ASRDddKNF8QsFnh52nmZfssruyGzwMLSfZ",
  "key18": "dZRnqFyB1fiKhmf2WAxVt1XQBh9wajDD9FHJeyPPdj8vufVeV7diNaqVeCWb3dFVpFYRsNj6fYRMRY6CHWtxYuJ",
  "key19": "ooGdX4okiN8VRPtWQXhFmx7bh69jviYEq8m2DBubcR6pcjbiP3YQFH7UMQPAPPmXb16uKiYv4kwYqXqbaox5Fcn",
  "key20": "9sDPLTwiT3Z3SaH41jUnHAXjakQFVhW14NRqZCGcopZFopXX6GEoHETJNdLhzrw3dCt9rQ1ZkMCaZHKqirC87m4",
  "key21": "5V9e26zs8YdoWoSJEXiT2heNsGSmKJpXMcXFwDiPxnnu55Jd32Fwepven5rCYw1WC3L1BeRtnL6QvMkB8LLqzvb2",
  "key22": "52tdeQngwvj4mjciLYdvarackTPXhDDXLiuDrKERSKoUVaGSpn8NRUee3b46Ca14VNSviRfDYFJkkWT5HeMXB7Am",
  "key23": "4uL2UzUyHGwdqFkKt4b6rXkooRqqJRuvHAe8FskKSDhm2daU8MQTREWe6Gz53aF2thDPnDf4cXrGe7z8bijrRoj",
  "key24": "41rrChB6UPAUZB5nduYguL2NZvQdCJriS4ocjKGYpmcfxhCuZL1LSLajAQmvSeA5dGxmBkzAGGcMykGgACkiw7kF",
  "key25": "22L9JQgLNQ43oCYFrjws1EPGKzLdDve895PCpL115A9fzwTXQrtnTqVJvvtyyJ2mHm5JxnDjbuBahbjfRCN4h3du",
  "key26": "2e8xeEzJo6KHhb2KBGp7txEm9YgN5MkCr5j25m8sWVHC4q8Q7d38ea5JfPNa9MbjvPwuXtj1VXGpDVPQ9XwE7wqG",
  "key27": "2GQdKyXkcwJ2UPuPmtdJ4BCUrcX5Kp97pPEJMcK1rQuyNdM7M9s8U2EMkJjCf2fZP394ozw3EniH2ZpCTSAW74AJ",
  "key28": "2x8mzSY9SAYmAngp3kZX49Upt32MnD62cFriek1bskwUYnw9sq7ytnfQpMotR3tzXyqKjjTJSaV9wrszYqZrsoLU",
  "key29": "E1jkB35REwRvK11nE5ENHpQpKRWqnKjfJnckAMNkCcpEUqsE32jmXR89a3K5CN38HeCDJWyiKftXJuHiMrEXjUS",
  "key30": "4opKHM5Zoh1hDMHi58DWcL2at1qWt1qCqASFBLfQCFZSRmVnZLG61ASnfCeNv7zBnEFNPRCttvt59uHEFdGM5VEY",
  "key31": "z541mAotYRpvti2nx2NcSRZcPE63Swmdkbo2vgTfveVyAPcsRLKLiMpgaV6w8NQSVZhUZ9GPNf34KoWLAqQxmsp",
  "key32": "4crXrRPsoS2geah4eLbwKeamnERMFZwDJvuiaA3nXwdmBKU7j3fBrmh48LiHH2FevuC6NiswC7wyY9aS6V2uri8G",
  "key33": "3FmUVohpAEDHggT3wRx1hA2mAxkX7NxtYfUAWJkWgzmDiAdhx7mgTUbPG3eEFZML9M78TZMmGzdHt6qYoeRyaPmP",
  "key34": "5EcBkMEcPSmLpb7Cfmqtaj2ijyGhhLnYoMPSVkYezscHPEbG1LRaftRAzXFCBV5QzJzHviw9YbQcLBVKDXp7WxL5",
  "key35": "8GtHqSgGDFXDRTqgqyhLLHzqvdmYBwGFfogwYQgzfQs1zoyyrnheqYp9rtYZ3TSeF8VMgBiZcqxtTxTRZMR4CzR",
  "key36": "3iavutJpxroD5Giee8NMotX7z66AuE55Wy1pvbjEzbqbhKvgmx84MbdcbEScuQarF3Jw7Ni9apj7EaXYuygopE67",
  "key37": "3HEZTVZPUYmLo9rvFRyQC5SXUrZvwC1Z3AR84HJRM98njnWryxXvmgQ7GgVrprd2Ge3JdKKN7H8ddutH5VXxVHbL",
  "key38": "2gEkBEjZxYc7i97i8A7dhoYKc2K8Px6XkNRUD3KawBrBTM7hpUathNz7US2KhAvx2nnMvS8LP7cf14Ft9W2ffjix",
  "key39": "4Uc1fQDFdNY7tnHsNECbREj74cL4fNCKSovqtJjJBTBHgW1E4uVzSJiZQSZkJLmHEjZPWgQa3FLuY9RqJrUJXMzL",
  "key40": "4EuLVpG9BPQSVpCaffqxN8dSshHS4kcKcQbGxxx5XXEA4Xbz68GG5VXAgvRcgZqmsLXGMSPhPzrxR69YumkPnNAm",
  "key41": "5XBVMdX2XmUHDfQ5ma45MuKMLg7BbamfAosiSd7GFa7Gev3FB9QGpTxZwaTzNK6rSGiuoEjCEWJhToLBDMVUVzAe",
  "key42": "3DCgMmJkckSj7wN982Ra8EePAFXPcyZ3KvQbvx6CdCwLZL57dt7jbKWQEKX7Dx6YGLv7hZvZPVUNi3Vgv47RGNHY",
  "key43": "2qYBiNgMADQjvMNJQw2FhMbuFfHMZ5bwB9Qu9PmdeQCBp7ekZJr7Y7KY2qa8X4kmgCpgxGqPgv4LG8zxCtBQxKjB",
  "key44": "3ovLZEeqkXrRR576ZHumpJMMUokXr3kXs3UF4mN2KMJdL7fdX7JHkJqc8BkcakgBAWusmogvWKj94XMjsgNASm9h",
  "key45": "3vsMD6ULSiXjcrJNLH5Bbj6xLpmPevFRGA9U8f2VN2MiiBp7mvJ1XmxB7Wm15oPoEhm2Sj5cfRHJ9aTfuESjuAKz",
  "key46": "3fSqfM4SBGQxbG3j6oFcp5b8Vxm3BSvPFR1M9gY8rT8qSmQHyXDaQxQRfHmmHQvudiaVuHGCNwuxNJk8zQpo32rv",
  "key47": "4yu1CeyNcyWwBHrPZs4XCYQUSQ1v7Sc6uLZXtKZujfFc335pgfqLEoiq4itXG9HgSnVFQhigRnnLgz3uqkVTMxMc",
  "key48": "4dRQd5AjMVeYW9LrEUtn4B9rnak3uqTsSfpjt51foBWy38Bo7GyyTRscBm5nXCNgRz6TiwFjiMapX7QyQtqnv1w8",
  "key49": "4GxumGbpFqXHWv24Fxp3C3nGGFiuQdGGRgETV5uatVUx7Gb7yfsuYgedvri7RFMDxwe5Zy22f5SegsXum4GJ6aU5"
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
