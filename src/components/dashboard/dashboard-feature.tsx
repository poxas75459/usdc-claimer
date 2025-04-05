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
    "5y7DBc9qQfG2JFVvZJTgJJssNw6KDccBBbpaHtLFUrMtTbs16tEXJijXoPtecQVLJTqXHw97Ggt5pKfQfzMP9eyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34c1qCFZEzFpZwt6rD9LfuwTPhYQjbNB7YVDRbiM83WVJdRGqrULksT43XKUqmXtpJtuMfdz5RHcZzGsAVkFbRDB",
  "key1": "3MLyL6ELpkVpWrERYWrQmcnfnRC4pPKMou2LammhyPzrD2UBPMCMejnjbhdeNkVi7jN5Vn9ReFs7YCfo2asdLJyn",
  "key2": "5wirhFS84C9HYCnj1tpBigjwDZ8coUGJSo1hnECfqyMnQ46H3ghmpSEfcnkS8BPSuyeAsSdwRQ82mXvVvqeSoFYL",
  "key3": "ZZCKqyxT5BH1oFmZ9bd2Cn2GnniXvajFV3TpQYJzYTmRDFKvoHfy3Xz9WRhu5sHyT5rEv7y6YKCwUGajstYrMvC",
  "key4": "4JspQt2LGrrMHbFBjtoye6prGXqUVSpcUzvabCmct11yU2aBCLNKqsu4nWS5hxDGnBvQ9BsFsq7psV3d5zgUMEN4",
  "key5": "4HmfqHSjoceEA6ifUUa5DhWz99pfZRSo5nX9TwTDkuLQenC7Hf2PwF6HMDwRntntUkrkEwegtPy5HyV62174tJs1",
  "key6": "UzQ7tzhPZeG9qZmWn8bZAiFWVvdRfT23uFa5UuDK2h697yvmTEPr2mzW2hJsSFhg6HetJG74U7wP6QtShk8btbk",
  "key7": "4cKgx2M9mszi6Fk9a9rxaghnaoGa1drGvMLT9swLcCC5yCK2QnqdyB2QpzereHmE4HdPgx2m9Fuv2AMbuQQNoULb",
  "key8": "sAsBVCip4GizAR8EanUSdT9mJ4b8fRh2TyuJee3nPPWrzpwjmTo1xZ7sdxjGZfb1BuSKsq5z33PZ2774SDsQhNb",
  "key9": "3qBa2YKhHtvHnTbXqvpz4gzMCfVhWNgmmcqtgcx134oUzZPKLUth4xzaMntoApX2QzS5od3gwQWxgk12pSKmP57R",
  "key10": "4wiiCUccbo6bC9oCjpk4Rj4nFHTkHrxtu3vjhn1qcwRnVURdXnU4sHKksdzfgio4hYgDJW2GAsGT3vMmyiBPeQ4q",
  "key11": "3KvZViHS1EASmqcmpLhb99C72XemFFfhcrNPawr1KPUbrXZAhgasxVBJ6x8PmTu1FfCDCJS3xhyjpVeBw4eowSYD",
  "key12": "4ehED1m9jiY2hmHpsLpLxWufGut25wS2sUU5hfFHknm4DudXMoVYVxefCddcxjMU6GyCFMfzRq2Qmp55z7xrSJ9c",
  "key13": "4orBiTWUptvrJ3eWePaArrtpCa55fvMgx1fho4fD9oBpBrvtJeYaMSvdniwrVWQ8tEuEgnJnR2sDogPh6TugYSdR",
  "key14": "2srepvV9ozRL294ij5FJhVxjMm3P8NZtvt77eESv4DEqyudActLPjkoStKqLeNqB43vkrpVV4Wp9TDBbGkqwx2Gq",
  "key15": "5F5dgRcRp54vq4xNgvUBp4sECtfdPRWntjFMVtJZR9peZQUD4ohU9ethrUWCucDea9YDmAXoMf7CybVzW8p7dbvg",
  "key16": "58zRddDFby12Xnpzaw1NF6wqkbinrCH47BznoYvn12g5ahyYZDoCUszETXR4yAyfuhv5j8JK9c8Ms83seBpoSNNw",
  "key17": "3uC2viquyTaPor3zSLVDqwNZRtZyTupZGmqSiUHXoFjJQPvhiS7t8xkxymBegir9NNfmFpe8s96ZLPZL1tHd3DQV",
  "key18": "3o2A5eU5Zw1HEMfnBFBfTrVLRkfV8S7PtSrdrizfFs8Vhkxr66ikFbRXNL3WnVKaCr4y7gJVUk9VLdMv7HLBCVXw",
  "key19": "3gTJpVocTWevQ8UsfL3JF132SUU2erdKAQVyBrjYLjpKfuRDMUzBca5wpdsT1XxGiJxcKYSM1i89kt43ARaPUrG",
  "key20": "58vB2UuAqonQpmnW3YNsdHe8zBYEh2hLUPucbgbNUQBg5QJi8DveBQjSvY5xsjG6HizxHJmZVHRSp9BjuT1Bx15f",
  "key21": "kzV6tYPNCYJg9N3fgfZ5KLdUvJZN9xu7ffdeDCpDHTkDrkMGJNRpzYfjhSU7HqUULkW1MoHfa51pDJZYgnqT7gp",
  "key22": "2ZkrVLFFrCyuZU4NrRRvTQLEtE5By1ZcBqHpkPZYFFaTHNzNN2KBvooo8e3n4KoVfcdvGu9Atrxiirh9wwVj4861",
  "key23": "8iwoXjvmF7NfpnaQ1B7ccBDDV6NmFW7swvgRzbRJzNB4HZXwY19nRKoY6azTcAPawxcMgek33kRfMijgQNrAz8s",
  "key24": "2F4dndgwcxhTcb2ghgQUueDhnVg8JhVBS6CHdUtJV4Bhyg5rRicUAC8NxVYAXL6JojQFVnjWtRGLFbe9ixGKJhUd",
  "key25": "4zVbKp16pEs3XUPSRvxADsoK2q1ZowDQZccmi64h9FK8EfExixz7gne3rJoiK2SbohNtYAB2RezdKRSw6eScEBxR",
  "key26": "2ff6zcQEE5QEP8am3Hy12jszEsD8tZBUY4wF1YPsfLxBf1vvK4QGafKJ8jWTVeVhJhcUiR5PZt2cuFCBF57R8dyV",
  "key27": "5zt4f7Q1frDmwn2LFYYtZciL3ekFbhmW8gV6N73afwdyB3XdvNMLmRsstfR2GUD3GMJHi8bKLbQ2cV1WczA9Eqdh",
  "key28": "2tqRt9FXno67oPQ9Pe9dzJELi3ZuZhit3WxBQHiBjJ98ChMxveCHGaYBQRUFMykrJrXSX1pYY5xvHoeATyx1wQ5z",
  "key29": "2naYwcPfkGgjATTpvmUg8uRb3q6xpTCMvuUgTK1V8BgFQNYHfW1uQ7UeTm8J4aBGYp8ATVxrNcHd6cnpD2F9K7sq",
  "key30": "3npY4QiNDKZe8qYxqFscep5q9Pyh3Vha3trLYyeUtuRdsUrQ88o4C7vGwpqt8RiULDd9oU9vWD6yKt6GLXvR6qtY",
  "key31": "51HKzgGuTpQhZoVtvMWAWPxARTnHmZmeFMkGnpivmXD5BkLsjPWn4YFwciBYMsx6zi2XatPCpQykVLhAziofCyiS",
  "key32": "4tfvCVQEzRkiSy5BxY8fsvH6UXPKLbwVdXqXCzfAT1WdyWRGHnPpXqzRi5gMyvVWW2nckv3UdmRdbdEu8581u9a9",
  "key33": "39dDoW3xtHVC2dw5t6DHghAQT1ey9xfEaxcsdQgVZq3LcFTQAqbQbh6APLn8rH1eEkcZA1CCuqCZ7uKYYbRSZW3a",
  "key34": "5Whf9EuURL81mKnFXdvN87qP1NwNmguqrH2hyt5F7ZUjsoQQzfgXcpMWh7XEDY7nRRpVvbbcq92N8gQ9EUxJmMSM",
  "key35": "SDtnnLnD6xnzSKzV4iArXrefgc8BQ7jbfxB5WfrfdYFfmVnKMf2HikoLyWvNoz5PoEeD43SWjm12TKNe4EZNRPE",
  "key36": "2RhCY9NbMfvDiU6QvjCJZNVqRnieRJqutVPpatAqxFVkswqRu6frWrzhYAonrQkrd2hVigCZNWqWaqr47VtrnaCK",
  "key37": "A4n1ePWR3beCAmAM4qPcK6BDAvCVuzEctc6mNuK2oNGNajDEUwQCUhAFAaaUuHdYHnmVVDMtxpKC7F1xKd1PyB9",
  "key38": "2SKjVkNPjxUteEtrDEdHLkQv1EjJVU8fBRxGcuQ1PxXyi8LzRjjWgYCnWqkD8YUEtF6d3VQwXXkGNKY5XimbbhAA",
  "key39": "5ZavGgb9dLxdF51k6SwFW9hsHaceZdiocpTP76tMqAehS47Ez6QNvLqJBWAhg5ZaHSM7kju2sDdofSgeyhWBxf6T",
  "key40": "35DN4ZkyABHbm9uW9myeQMGQ2KzqdGM1wawQYXeccnMmHPqiHo6Lkb16fwEEiXZ2S5BW4GvYkgh6xuUb6eCi1uE3",
  "key41": "3gJzjRtPmFkKWnDMmo79Mmv9PXWoaJz4sd4dvXb4MDPCEBf45x2Mwn7vk8fHqcCRnSHVe9UY2dLVNSHTxdjHPVEi",
  "key42": "3kySp1ZxroaoV7sU3mqT7cSUckG35NJRanNGQVMxjstRdoaCzjVXSK9wBNBBuWhLbTJVuHngWDvnCrciXeYFFDUP",
  "key43": "4yWLLKnFjy3CWzrZfDVXedge2GSHzoFtoGCrA3X2d5SbM367PjogFcpkhpZY1Kh92d19mHv8Ko5f2CR7uQ14zu4F",
  "key44": "5G4qGe2a5vr8r3AHQc8ntwWXZC5zxhjv5SRapigGzRXpvwvREVqMEt9rsTEDAxUg7TGkES4YqTWSGohzt5cg8ubF",
  "key45": "55EEGnvSsJbXF3Tt9dtwUpTv4dQKe2iyPFQR8wPhff26NMW3JgghTQQ557VspZXFp9oKQgJZZLrpXbK7bxumyWTr",
  "key46": "4Y21hoa88Rq1D9LPnm3CexaVmZyh9PjPhQwWZ7Bi7wAUuTsSCMQpPuyvKMnnuPQmyxqSRGUUaeH1tVRVYW4uy9f4",
  "key47": "T1g6istD3y8qS23YMsmWP2Cxd2Vp2sEvAHsL18NvLRU2euRFwnJEGT2xX3hdXPGSpTZkXy3SdDQ2iTY1Wc2D8EW",
  "key48": "4veqD9eBMqCbVUZYeY24FXLWVi89Vu59WMWXXQwxUvChsmxpJGXDVkscGamiAfg68xadfXJ6BGZZCygyNgnezMgT",
  "key49": "3jM65sCJaJ1oScfu9cGoCQ7eTj9wod8rjUTzJqXsq6npJckDL7FtnG8cof7Cwpq6YM8eGc5NbEyUPSE7dVZU88X3"
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
