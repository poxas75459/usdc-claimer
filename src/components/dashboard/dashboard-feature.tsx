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
    "2bdghkafHZpdAeQowxvVSD2R1FpHxybzspuSussbqfG8Kmf33sNunNjLLjUYdYDfqxuMaiH6xcgiBCw9pJfFM7X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LB6biAcm34PAAUD5zaufDYxq5rQb6aoQn14tzQ4ayZV4M5RkKJ3tMzvgVC79cenVXa7C5btwPdADgAgrC7i1LbF",
  "key1": "3FZ2uPFUBVunvt1AQEazYBjwJJbsPvC7d8oNxzbESR2mfyp46GKGbwAdSFVRo4jxH12Umo3da7YcehcXVmtxt7dN",
  "key2": "4ywgR34HCVqC8UW5ixg6xFrdrdXH2eK4WLnfXxG3oS3G5LN7kpxivzkfdVKNBaVpEzQrUGYJymYRcQ7onH8aga8z",
  "key3": "46gxewPRYzBxdaDokpiiLT5PszQG6xSdVoPQJMnxCS9ptSuS3mWXrNA4Td8q54yxY7GjLuStPWBZq7ueD7C14FF3",
  "key4": "wPK44ys7gYvassi8MBMGr5XtgeV6trbVDki7cDmV983b8it9cgcdSuUm1QqT7wRJRFTDiqRwBuxYRjQtxJgDVMH",
  "key5": "NEaEaLPK5SdaKtKpNKCaznt6tKz7JcRbuS3TUrAjxy7pFCFGza4RsWzfBqkRbrpAw8SWGebxfkxcdqTw9M5rmX1",
  "key6": "2z8T6rh1k5KyYP4Do8uD7CqZNX4zSzzPGsrkBckjxdZRTmzrcmLgdiXNSeUTbrzZGCHZ75qzE1LcLX6FdHZTnsEW",
  "key7": "3ACKMsVs2geKy1Th5MCGgKpbtAvY2SHuM5ZgrpUT9k6Sc19kTDjZuVL3xLh1JAFSm4zo3DQbBZ6YKXpVFBALJoMy",
  "key8": "2Nof1MMbxj5rdobG45jif4XY3UKgGmieazukuA94bThoajDEJsMVdGwePxAWyiahqErjsg4XYrarLAkSeW4TLqVP",
  "key9": "3htwvRxA7Vrr5w4FUMUEoVMH5QsmDHshCTm4JvotBkSK9iFGNFagBgFsN49WmVRpsm9UEgXcZrabFnT5LWzyj7Jr",
  "key10": "395BVhLcwHj52bEXN2gdRss5oZqcJJngFpH3Ka8aXFT9R4VN1GqPAA6BXDYw82XXiPdNFLQjpbvqZ2WnGtMVm5XJ",
  "key11": "3sZMNnL6QnpuCfVGhFvS1oS6QpfYs9DqeoCA4FaRAay5ffsQRAfoAQrMTU6Y5oeJWGzUWGVwr11GzvKrkNAje1Vm",
  "key12": "2kRijFoM1s5U3szH1EGH8aoUXCNf6NqFivKY9S9TKe4gW9S8p9J5UuiY43ZCLUx3ggnGp7SiWraHwk7tJypCNoDA",
  "key13": "3Cpv2q2r3TzvGxT5eErZjAPEXrLWSKtmtuuQEFwJixe3J86WBypAJiDREMZRRbs1n7Bey4gKQVhzkYU38WwUnqij",
  "key14": "eC6uXT5gpFVmecZwa3BBdttFyoLs7NBBq8Q4M6s4pvg157wV8dG7KPtYbJPyKjs7yaVsgvhgCQkY189ixp8yVYk",
  "key15": "sWGgcbPJyKZPmvJTwYaCtqaRNw7NssfT4QTFGcyUEVP9jnE5X7c7YrXANTm3XpnsVDgnsWieSLraDBXYbVL8bui",
  "key16": "5iE9gRYvoAQPkoTiUzstr7NxawBPXfL1GdRD1YKV17DmDkHSgPSMexhNSivNyX9MRVsbD7BWj5fhekHSs9BhAti9",
  "key17": "5UuUDomDD1XnivNj5rxXePWY77RkzSbbqvzhCCLvvhGzUQ8uAaEsVjaaT5zfexziaY47RsJGEWLVPe6sX3kXL6Tt",
  "key18": "2HhiDNVaUQ4NwKRu1XbVYoefzGw1J1mAs2UrrsztUGS1CQ5WJXzUG8i2pH3ZWZKfKmgmq8oEybdHs7RDXGrthiJ2",
  "key19": "3k7s2P9SQec5aqzQ4vPwePER2EoKyNZ4VkALs2Ftr4sktGGJgj5pYWRvgvr1sMfV1YNuoTNM1jekVkYtJcSgwJqC",
  "key20": "5KX8RgAnu1Fc1YbkpDhkEzG1ukx2UzXFWA8RSiAD65CcfiUBvaAiDS6Z5LN2TMJpcWn5r1dGQm2bf3mj4SiJkJQu",
  "key21": "ZRcGqmnvvqAA6uVkYikZt4sqDJ63akGQzXQjjMn2a4GdqwD2DXNR3unkxwvrAPE8tYUMwR5wosh1LTry7KTNLRy",
  "key22": "5KscWehS4DZtVue5L94EXECVwt7GNcJRSQmMpNh6YFRZHMg98AmRMNn9WmCD3C7KnESwHy8HHJevhpPmhUb43QxU",
  "key23": "3fpS9bAAm79Dubycata38SugLhy5eSG6DfBbT4Gfh1Rd7BwWGUoyDqd1cGggYFNK7piwyE3BEo91N6LE4MPhHW8g",
  "key24": "5Waf8h4rwF6jhEAAiGwPmD7rmeRC2BZPAR7RAuJbTqjBMQe4WUzxP8Hemxa3yvDGrXHQQ1SqKrA6KD55CWZXm5LX",
  "key25": "3r5BjQdRKq2rgRruvh4HivgkXSTMyv5tXQvhrahfe18FyvPGwAGWiYg3pby4CzV4FXdRGConWWZiNY9wXLG2Ueer",
  "key26": "27xDFuhJdSDDYRkvLMHjawpWZaG7tbvPgvVFUC5LkcUQdhqumB998rVPbapqhwpCsgY3ZxtUL8U6c6wcSgHHXytu",
  "key27": "4cxTzaQnzKi4LaARbWiMsVAtGYcDn5ezLv4gMXR9bLgpGZHGADkav3qB4ctUBPmDD17q2VmKywMgJ5a2a1hjvCwp",
  "key28": "5bMzFrm5VReztqym7qVmY7SqcmgRWwRvtTuFvaKdTwDrv9YLkCnq5qzPSFRe2Uy97y22bMAJBHZQcUihGbVSigsF",
  "key29": "4oFudLMonCXy2QMaHoszqhRwvqdApYbDBi5pftAybVnTy9Vzvze9ncVRcogG4SmR7DppbkhgZ3EM6W1Zvj1g28wH",
  "key30": "51Bvxqrg26Q7bPwdtCrVkTt3ZUML5uGCpE56ZrmW2bm9GmN3vW5YTA5ULL6agCooAyNLTXLyR8jhK3gi4CGXoc5i",
  "key31": "46m47ogD71HHNmkF8qV3unuTWpzytVxEhUSTeB37bfvuuq2eukn3CczZ4f77mn7AReEvdsWzR6SiwdJptPfgGDPj",
  "key32": "3S3ExH2R4xXchQKzNwyxckrxEJvPbKb9D6xzZqn88f3Chex86HZ2p9sEvTteTzXbnhbLX2xAu5ToHnjkgh9pMnju",
  "key33": "4WiAESm7GENpD8uBhkGhxxsJoayHpShsu7Pim9e376Mgb1urE6Vgx3RRS6qgAGKXBQknLMWqnw2MQweoxuaj1zts",
  "key34": "jeZNJnx9x6x8PZ2VfAXe6vqQP3mgEpLvKoZRKXkJZDqVWMnE8BfxSK6bUXAQA14Z9n6LUagqXJM2qk7B97YbETX",
  "key35": "3W2XG6164U68JP7XhSKqmXmmZnW8PMhhXsoysYKqjpZ8UDzfG9Qjeh7yPTitJCzDns4ptha4xFLaivDkDXSBK65Q",
  "key36": "2neMAsZv5jz7t1vr9RujBDgfC4Z2EPieLWj17SmAFtJZX6fYUFZmFnEwgUkbnJnszjJmAXePHUXdYWuagZUGkGRY",
  "key37": "5yvj3y4YoMgXt7qsCA52ipxo4gfwuF9TbBA7H7supKdLNzXL5kvRdeASjBGNn3WiWu8Azc5XJmr3eGi4ZJ6dKczL",
  "key38": "4ehAHeBi623D6RnK6fZ6vAajnBcFrFcShadvqcDMEhiwsg9C7wYnBgjhsEGiot6UjBBegRBipVcGzAdRTMMXpBw5",
  "key39": "e46U6pZWyRbGs3kK8wG81kkwwXNSCbiDRBhN3vh1mraDg68KyGdysd3qdUwe6bEm6pnbW8vVNzqmakdEWyA4W23",
  "key40": "BoDtd4PK84whng7xbCMj8G8y2LWJt7XeF9EUurDokTisEQFccbeFmzET8TLddrX9d9JfhiW46gLDNjmLgxh7V5g",
  "key41": "4GryioLY9kFupzFyL2HmneccNBF1CNengUc1KjxrCzfiL46um2ocAMkW62SjZC3fEYAviij9WmpoA2aUZUGtt4PU",
  "key42": "2P6iwZeoctXq3vuDtyTPdSoxo3Ui9VU148mvTsCJPrZcPGEAFh9VN1i8f8tETxCozcZL5VKahk7y23hNYA4H96E4",
  "key43": "2mSDRUr83ztQqPKuDDMa8tsqYNW4bUhESjZFFNSouRKvE1ewVUuE4su2MrJx4Zou6PKGNG6pBU8KigRfWPyqqTEE",
  "key44": "3GA2BBdqAnMGSc4xbg8AXhA8c1k2zc8m3NxqpZFYkWo3dSc1Pc6n2NMZJcp3Mpv9XJ5cADAy93gCdB2UFKYkDayy",
  "key45": "4tmoapUVmDLqzjfdzH4Epmz1wMW3WhMUe7sgSrG6GL2i6GG9cWzXePvFQ745bjZCznt2yufturp2TRDfATAfmhZ5"
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
