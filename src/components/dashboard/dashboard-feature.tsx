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
    "6fK3xpshv439oTyFAPCHdbz4P9xHVBCmaJxPv7J27bm9NtL6ydrJJwCrRbTXbRgBAoKCBsHeyP4woEQqHhBvMos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yQisq7P7CTPEdu5DdrLbVbNpDyktbwr5zNitirBaZhpZe9FVg9tfode2B7cJ7TQsHHoPu7oGiVQPLqgrny8oJ4Y",
  "key1": "49xSXaE3F2oLeP1gmCwVT2XAxHxSUfR6YADJtAJUMsR4fP3iPH4BDdUrHhrbM8uqQekGY74qqogVwvanFiK4cyy6",
  "key2": "2Etu3V7whVxzWkFYec7KyuKLqxK2Goks6GZQwjZp7ZccKBjFMF6Qx6ngNN4PDpv8aD93Za9D43FLsRiaoFDYbo6j",
  "key3": "2pzjDmVxpxMbNzm1j9WofaQpwyJ8cLLREPovi8QNJHsXk4S6YcScxnC3ci3GDKcmNFqRAWDYnRVPzFrgtJZSYs3x",
  "key4": "4cUQoCkyLxnpLYEe2BNXLVPV1KYEeQUbzdcyKPWzoNWCMcx19qQFgXnHDoYpiomx2HjEmeE1kdkyaKF7hM676UCh",
  "key5": "SHb3kDhAgLK46ohPRkYnAoGEcEPWaDJY1W3zLL3Y55u2jPfTAZDXSaeT5EuaRrFNV4Te1ndSqszRcJNTo9icFew",
  "key6": "UhL77Lh3mVaai2D6D4P4L6tT3cPzcG2BYrc6AoVUEwV64jehTKiUpvyBkRqm6a6T4VUfRzHPmo2UviaSuxK74mY",
  "key7": "uAQK7RuAK5Zr9zuBRPqcxWnjtLoxyZrks5dCs8ue4NUbbppzLt2r3qbPb3FpcR5ZSeXMRNK4u1AxYJb53aLM6pU",
  "key8": "4j4NFjn3eZdn8rPbARRFRuuFAGRR6MkWPTatrUudyKb9VSWMj6ZG3Ej4zqGWwdkbxoZQF44i9V48jZjzUJ5KXHoS",
  "key9": "5MfS1iynkLJnHBBc5jgHSeDjDuSKCAzF4evStjrgHjxFnvqtkGGghQZb9j4PU2saJFPrh6bSZJiHrXkDZb16XYtn",
  "key10": "AjmT1svuS1jvhrc6iW2hvubHjnRvVpiNcUzCV5NHFGPsKHuxgNd4M29eq5BwzH4S9UQbnaX48jcCkeocqHCXecP",
  "key11": "4bLDYoy2KFQXgpRdXWSBNQivHidgx3hMRpgAHkoxudj2VJLT5qdaVpgFah4LN9DgPKZm5JygMAFsr8CAoBDDsvzg",
  "key12": "5rQUHaLitBYiYs2wuWsU4HE4jKbLdzPirzoiwUCJT87Wtz5Aqe7f19C2Zh7jmXEoDtWCcygadYikYyEndnuJKpMp",
  "key13": "2NwP1nZ7qsxR4K3QnEv349dg54vFYeyDmNJm7YRFHwURVFCVSsRFaWsoe3ZkrqoRJmL57CLFVNiTw59r73hC5KeS",
  "key14": "4jHHB75bkzYF8puhhSsjWxczzHTUUZQcbjE5Y1oqzVjLyJcpXY6M6e7ubQvMEpthUuw633rCnnuKPcytAG4LNNbK",
  "key15": "373379wKotfMdwdAtriBJBFHyUmkapnc1VPBNd2x13zFU3R2HPDJKC5vV2Q95r5vNJ2wM6dRyY5Yu4eRNaEdQN3m",
  "key16": "3nrARP2fqshgF39QbYfXUHTzQvG4Yv9tqVtrWKmC7EYiJyXzaNJrE6USEhsaNG5ehsaiyMPhgADnXq3yfqy14hJe",
  "key17": "3awkyBZYA7U5hGa51BCCFT6cD9jW6hWezdLRN7MCM6pDQn2QPgEypxjNZX3t3AxmyZ4qSrc3QpUTpghQpAaYb8aD",
  "key18": "DT1ki4WXNFeDHNzaVDHejiSo98E3smbBxTowCgAD1pg6qdqZfrhcwJYReDAwjVEZqYgyYSPUmbHaycmkAuDJteJ",
  "key19": "3yD57ahLuMNFrHofB7vw8B5jELafaVStLGQNdXiPVSYPNrF41yzs1iHmH44qR42UDMADzGqEKHbzxDxG4PDatoa3",
  "key20": "FKNZq9Ptof9huRY8sjstU9YWjP4YV7ga82xwKJpWcs81nKy7STCYBEu2EFaSc3ohAJ5EGJxNnvdZ81ersnnrKjg",
  "key21": "5zagpJeBmUzTmGhbSKo5N6CdzGAspt9e5bCt1kgZoTLa9Y2jSVtEshnqXWYUfzx7WkzqmGdeAWyQtPqdXGFWXzYa",
  "key22": "3eodwLGjALEZBDDgfh8cL3BX178dUMgP6tSFccXatB3EY1CWqX8Xqhc2yeNow4zFdVb2PUkkYURnZuSE6CqP7tqu",
  "key23": "xLwkS7i8eLSYDi1L7dKsdZ5fh8giQoLQ22ZZPnuFj4n9xWTarLxKxAJRmFntFNXYNPTetEthWgmW4sRJaGK4Dq9",
  "key24": "4gDwCuDZBq8z9Q7cdpCWNDf4v6K6HPyFKMMoWpXhM3qx74E7mDY6Eir69fY4Te2Nm6pMdKYD81AFWWEnhu7utXmm",
  "key25": "3yiZBjseUh4mHLGh95XQoERhYxDz5xTV7YgZ7bQpoa8X19uw4PskbwQ92bPG3i1it5vZ9nkutCmd2GqRWAtjz5Le",
  "key26": "2pAbPHkhRoPdokrywm6b8goSKDQKosyvSjViJwz4NSBL3wMYVwgWSjmTxRHVKgBXJTV4v9eSJ37T4CoKMYXUnDCB",
  "key27": "4iCgix8xnM4UKidkefNPeVdrWNos5yDvKvPQ6D4cTshjgSVNDmwZzzdf5mQ7JgXXmVj9RGWTkHFwLmX7AcjAHMFt",
  "key28": "5inrbBpx4s9T35Y9QeLpvUJgcwaqQYerCGpFz7WFTbbVG2Buua1sxvPb8MoHy2MrZ5L3FNTP8xXc6D7xQnp39GsB",
  "key29": "u8zYyuWF9fhcCWFyNBoduJNktdMT5UuQGLxa2ZKeoWGGY7NEU2eqfbF7pSS7CRF73VpwKJDRdEVjR8kfifacK1T",
  "key30": "5cTiG12iqQ8huBMV1rU5ov5EqBmsZ8TQRFfqj1541jiVXtaYNCqWStWQh8BCQEmEGMDyHGxzKMKxZzXC8VZ9hXou",
  "key31": "5sLePd6H3cDVx41BU5BbFHuQJ6m7aSjsDoViq5dMkk4BQyVP9GDwykA9pkAtKGTtXJWvCAMcrkGumAgQahh5NPXY",
  "key32": "24bBWSvcqnTqyNTcA5nDDy9KCkMPNC8TqnK4nVcoj9piSVRrYimsjEVwtYfgs6RH3fRStAskNzLcX2X8jerLpwpz",
  "key33": "2wkt1HPrmcdJzh1NTkZqFDHKMTrQqNmQb9xDWPdq1v39tpwP217f7HkXqDPhEBXkc7gTRtyMafvYup3yrtrfvpVw",
  "key34": "4nNPxLwDHv6vPo3c9v2eYCLAsbwhpJMbtor9CzCcQZxynkpxZ8oJKSccEHppM6zXkrS3yKPGm5fcCbkjouwMjKch",
  "key35": "5BaUzVLe5MGjkGBStc3c4zeY2DAx6cd4xXCASqtCjjFv3PddqXgEbwmP7ZUmUMitnW8nnamQEuYNepknRU5tPPHG",
  "key36": "3fMDYev1sZ3f22rDJ9yWdrtZvqFxiqUngWqSPg76Yg7wnmmQ7SrGmkDmQBeoP86RARgYdX9rZn8Lrcofpn9UzDoA",
  "key37": "5tSNEi6eQbkchV4ix9Xyp75rZLVBVSrcBwp3fN9vtoVnKsWkXwggiKduvsFgZjQFZQCqgeaEcs13iRkd52mTpXzm",
  "key38": "zasTLp6yiD1e1Yn5s9DU5UTJNjJJyF2HNgf1oDQ5mztzzV6e3NoJMnEpDTqbq5PzeB3rF79BdzVP4uY6YMgsi6x",
  "key39": "4AJn2Cpszipw7kNaEjEwKKmUAj56yysbmF7Apk8jbQavocBKgrzsyLpGCuGp5PALRpVTjqn6ev7xt5t4amncu3mo",
  "key40": "57n3aGoCn7zVCAbsT54ePCMmnL8SbKXPtda7GjMrqPDsRCBiExo5ui2TCejJkwp6ng5aKWgK4Y9pV8p6ABpJEYPa",
  "key41": "4DKfPsHqcativxkb6zUewJVcj8oKsTVPAe4v33LmkNHwCY6bGk9ce7nSHr33pbkwcTroJHP8F2kKDpUfq3qDUZQU",
  "key42": "4EBReddXYnMmKZR6wbHHj9guVnwVsRgchB8oTUqPwMQf9Zmr2VEJRVihNDVpjpWWhJC7BXZBqkjGgjLnSzDtQZy7",
  "key43": "3g33qfjGdnYCexb1rRoYVMoUXprc1RSi84dAfH6ckR1fe4JKbQLK4Zoax2cXmULdGc5tmR1jV8D78j8Fk8F3Va81",
  "key44": "5j2dVrUvuavpWBwWZRLzJuZwD3dvD7ahspRjLH6dJnxEofGXz21M3BhCfH6c1NSggsDYeksfbnAygnKqHeDH9SMg",
  "key45": "Enj5PVXwCbnX1eBpgmjAKhFCRyTLvUdRkN4GPaS4VtbsFCGqnMBU7ugxLj6tPnYby1QSMn1UTPPVCqQgiA1N4XV",
  "key46": "BduUYJjG7jxXa6fVobwhFERPLC6fB9P41c5rRnT92hb6pNi3VLG6fNZbxeC5ZArgP15PrCUMKLPPLbaEcN3F2tm",
  "key47": "2wNWCaQAw8Z57BqfRMkwk9H6pc8DhHFTNTN3JPWV4z7VmgEmYXhBGkJMQxrmNsMmVA3hGNxbJgF1JTmrqRJKG6CJ",
  "key48": "5ToQpS7HDFkdMn3VgxoYWKVQ2WUXPtbDiRcnAikh7LWWcnoywBUwVGoXqq6YFWpPNpjub4ZV8HnHXemKjMdBEdvf"
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
