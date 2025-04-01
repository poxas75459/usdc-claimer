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
    "5wZ4BRgRRxrkHyab6aH48DaoE4kHQNU6jw2phzKe342fxGtrZmjzf8xkZf7wJJqQe8tM1NQkwjyeFvbeUBvGAJPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmgptuQgkvoTvrDS2eo4oqtP31qyEaTv28FnQNmDjYVdMdPrutPNNGqenFx3YrankoZvNLLJR8cxBdcheMfzuXu",
  "key1": "5TkuQdMi9iXmFHRSQLqPQNq3HeYgZNFT9ijABT644EEHePcnVkLp99NNKu3f7guyB9Q8JDkcbJCxsDzGnPXmt3dJ",
  "key2": "34ig37hc6DwnUKazhjcXGR2NZLQrCZfeHgrdSnfFeVqa9Jm4xedmAPMMn9vWNdmSfnynBzuBL5KUcRj5VjJgR8aK",
  "key3": "236FAhYnNTRVvEjKjsPY1bJQDdGSoosFC6oR9JdsW2HrHv5u2M2Rd1Winx322AuAo4MemcaJKeNyzKwCE4U4np85",
  "key4": "62vsp11GNv88ZbmWJBYqM3KRcnwq21xjSCBM991kmEV9UVoZ51ehd3uer5g8KHsf319d1TDRGyuNy38LxLHwoVc6",
  "key5": "YjjmBAgnuBJdGr2r1MgZDZfcpgPRbkqfRWwgbBMHxHVQmnBuVLY5LdRxmHeXQbvEC35jjKAJfqrQM6iouubSKNW",
  "key6": "2jzaaGZyPpSq8YbdSaDCT1pT4SiEAPQE2iFkU1X1C6TLDcHSGkreERSubo5Xu7nw2AtyL28E8Y1T9WsUtgxh2b9b",
  "key7": "2VAqm2nCuer2mNWh7NThEZBrJTcTHGMjLAiGUcH2gXRaXDGJHLjWbTSRy2DTjdCQpUoUWWvXAGgqhPXrbfUmSPf5",
  "key8": "5mDedg8ZKukLfXy4MA8gd83bH5TLQUAabKR3c8cCGpRgeJuraYpbWsbwYuyaJb8Lp79J3jeCd5rt224W8Kkjac2v",
  "key9": "2b1XsULUFFY7Wzv52gQvNNYBfFBRCMNEUPKYJ4oFRxyKg5vYELhi8b2SGHDhPLFtkAvZ9M669sszE7N3M6CsFp6H",
  "key10": "njdJGqPbYgTB3f6u53h4ECNxfsAmnrp9JdpcNoDLcmYiEm65NsZ9M11aKrbBipk5UYpaiFjWHy8227mRFJQ1yPA",
  "key11": "59jzr9WQMebP5BRr7UbayfhiCK9y2n6mb7nWNngPUfvTxtDETeCjBJXbEczKa3QjJCWHJhZvx5HmMPSRR9HeRDP",
  "key12": "5kMxgHgdkJpueM6fdhTFpsCva6oDU3kWXWgfe5Bu5PmZqm87mX7moBkzdcrqb53mRjBdFdhEvD1dYwnSdikPWVap",
  "key13": "2ZMWaKHZk6TJH3UwXNHqSYjW2ijDJViMqhDAu4gkk7RyM7mnMJmAybrLD12anL3fzAXbEVpL4f4giry67w6THrDW",
  "key14": "5t6TMFtqbVdgy29jCJmeQkSiuAKgG5NAwyu6NDDE6gazjAGzUrALxDW4natAzxFhAFXXHAzHk4mxsh6v366eAyeS",
  "key15": "5JwLnGARoD4XjkrwyFe2wXPQXJMpwC9DnnowrjL8FjbrkB6nKNBjYXWsx4qMuvLGeCN1UzwsqynL4BXpV4RE2tzj",
  "key16": "5W91xRNRB9x6V9tDQpJEZZt5fr1z2pVvhDKMGNuKJUWUcAMozr6xgCms6p4oZBRCd6CioLYacX5dLZFv32RsER2A",
  "key17": "3pfu5KPC7d646ZxHK3sWWfj4ZUDksFsunSzuEbCsgtRvZaEQMbUQPrMfQGhRN1aABF689xhpFAHB8JfgVzeDD7gC",
  "key18": "5jEkU5D86XSGoQnkozAT6gyTZ36rmRHGhufo86P72KG9oHon2RV1XK3wAfwzC2o9qaxdaS7FPGt5W9Yh18hV17et",
  "key19": "5d8CRmcGC8Ke6SybQ9Ag7aGZx5N5M2b1p8ntjz9ycEcmmwPY2TC8DKazAKtf5KqZuxHp9otMmgYq2zK69vbzywbA",
  "key20": "4W27xBU6t4qvk9sFmJTPpHHDevDVs71dzNoMgT5VrUo9uBEAN2twMZFtQn9vijFBfwVBhNTeK3gdhboj1Hkv7yLH",
  "key21": "4Jr21BBr1yiCn423dnukXJeyRh74PgrSfAe2SHgEk8KNuzLZu8xbKob85J1WfHsFcTe28jtdsvLWqTUgz82n4LaQ",
  "key22": "EtUB3b7oZCeKP6EwbBZxjodRAvpzJhNDmbpho2wVzd75Nwungs1875yLMbdj7HAbCfaxp91oo1x28AQo3tRvT4Q",
  "key23": "2k3CgzydiPvBnbwqvzr2vVjrCpFYKCAspkKX5iSKC9jUyR5aYMdxS6xnBzuoyacjicFcp8TLKLPuwdZV2qHTBxNo",
  "key24": "37BzHB28RtEwyEnvV5vVTCX6dqMiZXvoiGJLtrGhSwkg1XXXWPYQT91KHHEJ63Kg9D2F3nkD5bjtVJBtVH9fSwz6",
  "key25": "3AddKTPa44WDwku8LY3fG8SP4X9KEViiXoXFnMiEZwMwy9mobq1tj1fCjH7JAAMPBiHUsGfH5DWB58HLGjQv1Zb2",
  "key26": "3geCD2ba4cDzp41Bs3rJtakRCZViqpUZj18jbb7RKU9Mv5cAX3Q4He3XCgSo6nDifB3WdB4DVxRnxGx3PVonRSMh",
  "key27": "2ATCjGQgQHMeqKBHMWz8UhM8x1ciyxuhLpi9BQ7iL7kNML5ZNb3vc8vaZGuERSVudkuXtrC5DdY4XDSLd9muL5gJ",
  "key28": "35D6F8XPyfoxMpCxZ8d53EQrXnLGsCF6bchEtQDMaUHF6vTrVYcMQzS4j2hFV8YP19gnAshyYfMMk82UfNi88HQR",
  "key29": "4atufE8Dpbt6Zm58Q8sUVXC5DYLWtmaxAreFcc9ZrNNEd2rkScx9rzV5hDYrotCB9GK3pstQ2rBeNhdZYUyPHbCS",
  "key30": "25RbrVWBacDCgrrHBU3v3F4EJ2i3i7DPm4HpDyqu4tBR9JLi1RdxwaTAGjhC2e8Ro3TkYiBELwueSJL5y1CE6xbK",
  "key31": "5MWxGHmByGTrxCh3ExEnd5ex6cUmLKKYL74VzwFLD59RzxtA7UtjAUC3aiSJkrwXhYTmzLzFuT4Wp9zVuPDfew16",
  "key32": "5xwMAa2rYz8FhzHEBq5xXMEx5AEAgnZZ3PvEyChqDneDsDpoukA8fkZbMUVai8SnWeovCRUVi1hF5GgFzqt5HErb",
  "key33": "58o7jeQkwZBVCiPCHgG4EscPzkDtQkRTfaqShqY6W6gJEsyRYkjHiba7idzcK8oRxkFz26YXjoGSCiQAyVr1uvce",
  "key34": "2difxdNi7r68XZFtrRbwtp1edxPjJUoow1UKWYzDJvVLTZwpd5MmTW1H93sLYnrxbVYJGC9m4FJTkWuws9D1eM6D",
  "key35": "3o7oZ8UZqeCratXhaQhNP3Pvx2jaHSm61TSU6zxX6igfR9y2JgndPXBhXpKjo1zFh4vVrDsSAtZmKDgwqym2PJuB",
  "key36": "4ar8eaKQ5VTQHPSTJa46gosVDoYecnPwjSC8vtzxj17Bb4mYjGYsx3CKprCeBWdYsUb4fAwubWGaXV9HKcpXxeNy",
  "key37": "5R1FajhGdPrdFav537drBbHkK5pvPpynQgoZFdnF7xZ5NYq7mVX3LwyXfNhsumZvJREmoHNH9iuyT4NBPwB4r25H",
  "key38": "3AuN3RKp1XzgMcYjvhyQYGz9QgvagFsTUr4U1r7QoeoqRLK34FKLNgZnp71TDNjCyCMWUEGbEzuat9jbqCNu4QSv",
  "key39": "5RAZ2fsw3SzmuP3gaLBJ4bq7U68ZaQ2iKe2haXcgXe1PgkSV4uNdbaREnGVSQ1ftCouxuGr8mYNLxCGrmfStUVEA",
  "key40": "2cBBjgELegRkdqweK8yhnUHjLSudike598kurMqHAdmGYuPWAEbgy6FbFGxvbFrsf1MKHGP9AgT1z2B8QM4VCa37",
  "key41": "5J5dPPsy7VmVNWtBN4Ei2mzy4MDC53tsfH4rKeBjNNHcVmz7wvsV1tuQHMDYzMCCDqUCAm2KKSRwWC32pKqgqGyf",
  "key42": "zCseigFBCdytBpjxAJbUpuQ2q7m8Zg1BgtVGXQRaXZXAsgTiw8omzWLRvL3aVPwmEpkSoaB9FkiUGGyANNLpgvn",
  "key43": "B7NMGzgxziLAFsMNp6trsL5GUstuMixzEzwEG97aLMKtoR9B8eUsXs3iKrx7b73s3EXnPDs8wYUEHvSJv2ifJXo",
  "key44": "2SQGvh8jpyVCkjR4RumyfHzoGk1yeEiUGFiEK97HAi5eQYqKjwjnFBSCu6BBb2V3T98sofrkUQfFFAjRdgcrrjk6",
  "key45": "4uDLS3psyybKqj7a7svhr9d4gZV5hMsY6icewEYxrbxmYxyD3pRpMxcjWY1gYNZmeXwuFXwMSeKxhKMtJjriXBVD"
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
