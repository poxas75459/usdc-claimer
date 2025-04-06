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
    "41PfPRzoQfwFc9jjLaUtEYdbB2prWRvmdxMyLgpY92a3BFtGngNp88EGdw4BeasoMH83SaPB7APqtgQ19LpfqeJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iWJAfN6Y1iLr3EarEgX5kLdPdCBEgzQvue6DjcqU5QYG6qKuyZDjK62BL7p11VY57DCDagqp7kB2F3WQjM6R69n",
  "key1": "2nCcFQATGGLBq7U2ZXCFHppomuDUqAWbmXNieNUGQR13t5YDYKWvZgmV4JcfW4h1gyh5tNMEVfcw7MxSuQ3WnV7D",
  "key2": "4LkEgBh3Q3jrnAhneqBnVJQ58UVxGJTXpyRKF2VWo8bFoHTRVHU5ZnGPn6RC3iwvbDt6rRb8pGzjpNnjnwSYMBhU",
  "key3": "3XaqB2udt4FgaHbtpxBhNGWYV67RWmkQMLnJ7488f7bKMwVaQEojwbgrUXdftNJbmxebXUa2iNovwAcUXa2Neexh",
  "key4": "Reo6a64JQooCgd9BDTTnrq2UrtfRhwFdrwq63xBnt3GeUXMPkYykFZePE4WR3kcbkHzfjScXEPSzdy3WTZ23QCQ",
  "key5": "2NcjBndfkKj8WkDLrcEkwqZJek7RA49FoB5oZVTBszySm6ZLTPkJBdJZigcBe3GqFPsFbQxXEBv4ddrWHB3u82Hr",
  "key6": "3UiAcsgx2Q694MdGB7rB1q6YtC26U2JsVtYYifKAtfGVaH9KRSEt1bYzKFf64pLEWUfJJTU3TY9ihcA35eumhN12",
  "key7": "36deUmH341TcHPJZ8VbDFw9gdHJW3BvQB8tmCMNMrxyvgcSCyTgHwSiDoG3rTsUwfZzhkUQzKW3QWRKTR9B5KCD9",
  "key8": "yBN1sb5bLBRMKaLiFXJ3cMMfDFfT4383JEA3hwYH2P3psssaYEudUNkBxxbRKKagkeubBvs4BcmUPjXwzr9CnRK",
  "key9": "21fGtpQtBwmVY6nCk7zExfEmuhAYLShWPVMyd7bN3oPYqbNW9Pv4HXHFoqfDY46N5y9UzMyEZ1VdF3cpmzWRymQx",
  "key10": "4oESza9xSYLnBuQrK7hBPDQ6ZHKA4UzGRnRraB7EyKo4XrbvUpCbVmj2v1cs3GYSjb1QtVHgrWK68uQmYD2X3xA1",
  "key11": "2Vi9TWN5t2m93LWBNE85XBwxK5s1VF9cBgUBcNxQ7A2gXZ4fC6WsdfLyzBsuiAgxz63LBKukjB3fHsfaEY7RAkWF",
  "key12": "34mp56r4XHNohnxKuEnvqr18jGTCbt7CUMLAik1FcRFpot1NRczBPxR2rSiTm5omC8S1HwrVjAkMEDVEnxwRKPNr",
  "key13": "48mn4Cgjkb5BcPeFMv3N2KeT3DVxg6Y7gtt84zfojGTSqqvRLz3ztrdLBw2RhUPgCdcB6vf3m7PTaoQEsTpSaKEz",
  "key14": "5VP92h2A58q2KQT8nMgRhxsvqWyvgPaZAvbLVBcfguDdtEjTpQEpyYXPA1YNbpM8Zf1hpqRa24mwdDqPcjh1MU3Z",
  "key15": "2g4Db3aSrH1ZrLR8fE5aTHZS5vDjiWcdXUGAYTTmRj7aa5KkGCLxCGP1cAQv7BVVoMfr2Bnf7Fugpg3D6suXrkQR",
  "key16": "3A3EenXgPRqdTRg4JKrGVRwvTDvoX24N3AiWcCv4AYrAb2HiyCVHJd5AgGud4QGXXfVk3hBLwZsgmvuT74JvpGdP",
  "key17": "5gfAhDE2Gws56KCczEQLi6GjunjKhqoHpmrqqvjmWLUpoxJ46WWd7PmKTxsdUj17tZtBJtR9rDyY299wXZqYiGjG",
  "key18": "rFbU481q8zaPYonCdSNBS9ZMiGGsg1SxExgCm4QzM4eXK4jUrxANeWVProqn7ebTcsS8oVeV61fC1DaYcGvYkfL",
  "key19": "EkSeCsK33JjD23wNaxTCDtqkcbagCMLHVw2H4KGETFnJddePTfsg5Ctg23rahABh7gu2Gd9j8zMb7uUXprWpz2m",
  "key20": "2JgTQkwaBbiCmGED7DkZj82oMkdr1qTie2vxs11yWbhJwqfFmFMsYNUNGJmRcdjmhCjN36ZVWCjCxN2zxgt9pPi1",
  "key21": "4CXmprhuhHrhqrat4vAgy8Kx3eL95XLMBhMehXqJQ22CKFYkYvqVGLCdp4boaNB1Y4dbi23yRi3ygpVtTeufsR1p",
  "key22": "2N9Dt4dciWkGuVGXM1aUNy4EWKGEb5LxC5gJh1AdvkcLQDDADmP93NQLqiEKgqDukTPApFM22mwrm8fPMHcB2Yup",
  "key23": "4nE2kD2ZnYwSwCNjxzwXpBS7nkY9MvjLBfuHi37pJy8qZ3DV9xTfwx6wdZwTXGVioM9WtGLM836KFM6uKvKJMy6U",
  "key24": "b8FmEihvqHQRDYxsQoC8mnRC6gNDwMdDDxCjtc3eAtdgKPNra9LVdqbaxeJiYmUMRpD2zdwhgiV1ytxuP1FxNZN",
  "key25": "22ioEG5U6pTMEUuCnqRbKcBvhAstFV5zRQaFGhBEMBQ2VYECRnEj52F4bajtjovjUBFtM6U9L8A7bkGHf89YoWQa",
  "key26": "xbUkMvsEn13zcGcjHiyeoZ1nyDdB3sCW5JDWzHiVw1Ueo2HnFcU1NNRaiYTtFa3nMLWBPrTWvg9nbDmtdsy68qf",
  "key27": "TiNAsdhMh5h1VjsYqPFnQD5HdxGqRtdXzPi6DuCeL2KVEa5WTxeaMXY13jVxoE3wnjngjCQiVtdtsNidBA38QUa",
  "key28": "3TWp2kn2Xx6g3aHfKUzqrb21w1pr4Z3ofYpQMsr7HJLgdpsfsWRDB6ZTTDAJJEAdxjyiP66zooDKavmMAsFvZnDe",
  "key29": "2TfvJkByzESRUCz27g558FxrpL1N8Wo5uDDEf5osxzZ33unXsMULEkwtC7PETUhZWZvW2MiFCXMCWXawVRrFqu6V",
  "key30": "3SFcBpZwYdateWVSb5Vcn5rwuL32b9ZDZj6Bc3m8gwuZRUtS5HnR268maHDgU6cCBENk6ab4tAtq3rfKmiEFaHAc",
  "key31": "5FtdXj2hW4BbpzkMdSAMcfF4SR7GkBA5C8sWKa3iHjWFaRcF3vskGSAZaTYQpxYSuftDWWtN1LZqtQmocV3d4kty",
  "key32": "2ZmTQiom7khsxczHLW4UZNQ5odw8dJ7YPAQ8Hq4PzB38kwszGWZGg17eCQt3xysm9JspNWzBRxV3vaRV7XJgwShU",
  "key33": "4TM31oMBDk8YYusbmnwdqCWtp8HptwKEpmTu1jxsdhBgQis1qWr8MNsNBzCNf4d5WGwNd7eyavz7VLhU5sxKdQ6k",
  "key34": "4QbYK4k58YCEFvoyCGfVk6MHBYcisGuL4GcrQ9F4h1UsU61YfrdgA3poxo4JSv5vDgdXjPK2VAcSJcuQqrDhxBsH",
  "key35": "5GCf7iEHv3tiiSyLAW1QiKRgLw4eRscMJbrzJ1xK9rqMDPaHGbky2vx3cENFKcjpPPqmehEobQ9EanTc9F22V4iL",
  "key36": "3aSv6sDGPjjbPACuQjMZXwcSsf7wcWoK3YgVhqKhzNCnsBnQTQsaV38UzqL7RjkWyxakgDPB4XWdDz7VsWutTNSq",
  "key37": "3bMST5MCjxWvLfKdRg1ru5dCYNKzAqzSoTVfn76EHNBXYqV2wFV1QJteWXsMhszCGmBHVd6JwBSkzqeUisrqFSiG",
  "key38": "eQ1EaLKeE5neC9nhquPWxCUbxSMpSAKsKE8keDfPCU1DiNSvhXHsGB4dKsLVfcufLB6VsLfxi4gp6A7KvQHiK9D",
  "key39": "Q3nV6StPuPXwVT5uy9YXZaGwGU8Hrg16XdkUvVhraH5aNkFcW6GeJdXdjKRdwzaDM2pd2FnwS2Ukniwqpc5mbVG",
  "key40": "4qX4LTZh53UAsqnBbYt3YeXChpZrua5nVMiKjHtSXYeBUv11yGUNVcLGdQdpsmdLbNzWEh8ovNgaKWZGo3SyGkAW",
  "key41": "36ea5ij9aSV32s9cgUfcDZE4sGi4EHfMBUGPNS52Qi129dP4b3xc584Yy8kX6YnFw8w9cZMykeQBUVV1UXHpRamW",
  "key42": "3zrfTJJRAL8TK6W9sMFEaMcKdWGBZZEPrhgDT3A7qppddsRaZioPuWQrKqdeZWkfWRgonLx5UPJ17twPHadjgBUC"
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
