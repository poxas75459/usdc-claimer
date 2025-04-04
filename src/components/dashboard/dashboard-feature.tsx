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
    "KPD4kxLQMvC5uJGTFfbYknMJr28VtnZzpqwjYPfF3QVh7wv7xMtQh9BaWVbcoASZ3hnCv6e76eebRDZLUjhVPXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gmrVhWt9CgxNh1HXmeAZNuEwiMffWtKJEnfN5NaC8DBVDUETi5kQbw72evAHX1csj6C3ZgRL2dQQhKtnbFvTnrC",
  "key1": "4SeVFcDJba3qQea8BSP7N2EsMhn2wGF7DfqP2Sf2VPFwtmvuaDT22hnjhB1umMg77XDZ9txm2KM26KTMDWBmZWnx",
  "key2": "3XLwpAhb1GmMYc8Jjmpf3J4Gi1FBS2SP8QMSXstLznKUY8ypS2fc8c5y3Vz9XCxzUWJTpnJE2aQPXccSx6rpE86r",
  "key3": "3pn53gvhLQFaxue4dCgsyMaUjaBoJNhqgEzwnTvhyxtXFWhW57UEGABEJ1RR8GscbWGZtXtz5gQYjsg6xhZo726J",
  "key4": "SaCr5LwaowVHhazt2idb97HWF4WR44mvHD7DKbtBm23jQhLX6V977vrMhwdRHR3fndf8jFuZgPMi5rsTx2Jvn9x",
  "key5": "5Wc87HmwgBa4p4zAZKDfSszrXp4etPagdvBSujQc5LU9ggxGrhjvFffy4bFPc58zCgc4Ms2PQCaGsdaUqGHT9GuM",
  "key6": "2PM15z3hW92j5X2mSRd7EyYNCmqWXtX5sMcwuaUQgbM41BNvVemN3YUmv46WoXC1bLM1KTfrKkmXHKLXqEHXzsoZ",
  "key7": "5rjjQHfSfzhTWjAvyMFpstsZEDe25L6q6SoM7g7F3n8fKXCXKqvvAvYg8cUo7zBAV1jxu6HzmJ26DHKSjhEWipVA",
  "key8": "43LSgEnXhsLktAE2Q3gvAMAQSrLeMxvfmBSRPbKSpCG2B6zM1BKiiXapXUQfStYHy434MADVACEDv8kvouztnTj7",
  "key9": "3Ri9iT4EKqVtRPg2N5xuL8ZpkLYMydGvtQPhAJVi9vZ1VS3vVk8RCbWXTU7j4GdYFmxpVBeVdaycBzewa3uNZfSi",
  "key10": "3Z186jw7gJapzpvPfbXpKukuii4WseTpp8aNh5WqWBaU4jb9PvscT16d5MCzDSDHHEnGAKMntmzDJuwqMpTdH19K",
  "key11": "4HQ6SvsQ8xvthfEmviMVBuhnjRRupwbvmK4bSjyJgHnSs8HbhSB2hRGzegooVen8GTGCp5fXGPf7w6eKnP5k8rrb",
  "key12": "ah1YA7WNnZ7us7mG5iVNYXQmrm6TeLg35xguQZwjiKMv6enZ9Ww5HqQ3Xay2B6JyrDTujkXETCtHuvnMJ6PuPn6",
  "key13": "2tnPSeUuUA1KtxuxB5XwdTNtRX5h4MmLu5Kj78YLXyYoMr2DwNsHkbBoBsUsQn4Xz4T5mFyhWYgnLJGxBxfrGanu",
  "key14": "3CXXy7TVaVre1ucqRyr8nBtoz6Utx8BC4S4mvtZ14hhfNoAMHK9b4njPrcJPQQFr4gFMQZ4VU7cLRF8ZUbuepSc3",
  "key15": "24jZ357aPv273QV11nz12AmziDTcPvqKVYjauadk3urtZxGfFqdnekudaN69NRWbC6s8kjYnQXzwMFmj3K1r5iJJ",
  "key16": "3WsTXzv4aYQ9ezZNzJ3M47pNURBZ8QiTzPXuPihH9zmhcW1PvmTMijkSiJQnb7wyVtYCuZbogSaoUjs3GohZnRaH",
  "key17": "9Lyw7sefRxuKvCVfFbCJVyT2kwVjmJhgSezyZGstfctDKpzAao2YWCYCFsYCBiBuSaJcUNqYKQnWnff8p77qFQw",
  "key18": "5RjWJ9hfCzhdMjtJGfKiCmn5FoUAPM2qDQ5zLy5CWw6N41igFufyCA9TWgTsqXwMa7h9WvDU3MkmY9YjiEvC7FDY",
  "key19": "yH4sFDP5hSBqPzFPHLoHUFH8FwG86u4V76i5sJuGRFNYiAw9ojJDjFr21R99u6tiRwAVxtcth9AF1YLHpu59H2J",
  "key20": "44JGhCLMZdfYqPAeJNPSm25aXStnXadydWbSTBhMLX4ZkyBGxf4aubkeDtQtQ7tHi6gLAjL1vXd9v39WC2ooUdt7",
  "key21": "3uh8zDXuEccsZWSR3JuQTZWnBEPPQTCrXbpTxR9bZzQxryrM6c75bA2BGdrke6QiVN7h3wLhScps1XbC1BYegPZv",
  "key22": "5NSCoXm8mauFnortS6sxVEjTGkNzHCdh7BmWjmdktPzaYMjtYMgKoWxJ1MqzBkFL2CXxJuGoovGhVLQKnAw3BMBP",
  "key23": "4FE5Gn9kZEpHCpbZnds3FvKX8oubLdQ6oDYvFTHsJuoWSyaybW9HrBrtjjurLkEGLNYhsKDzWPCf8Js6ukrXb6X8",
  "key24": "3jLMLjUQBCCBvCqmiR4HFYn2d3asWiKTLJbLjqvgEhvRRRwdGaFXxThx38NJS8kXUmxAo6rACmkHgsq2Us7pFvAX",
  "key25": "2SHoSDy5oUb1YTFJjD1RTq2CeU3bDJWM5At1sVX96QQJQ9Fihpkr6xmrEdJTb6Edg7mFKitMTMPNPvvBSiQQVP4c",
  "key26": "itT2czB6WHfkH2vRKiM1h8kvVtVzK5tYAXpk8hrsh35zjhyBvG6FUnMbJttka9ggej18wvvEAJFAxkbyCRen4GH",
  "key27": "2ZBfTFi4AkgKstGFNqB5W1CNmECA4C9WVjFMHSiFYg8ARNtGrmUoKUMMVAVQba91vwRLri2SJSnSXXFaSRsR2v4p",
  "key28": "xvhYseVbJm9Noz8aZUfgPgtnPnoRdPugzBRJ7JFoQrRqFkMrPr9SZJy6BYg3o3YnCP4m9b7DPccGJkbp1EcvqtV",
  "key29": "4MkzvpN7HAJRcSEQxFJtRHCF9xmbfYRdhMjnwsvs1FN2QSPS9DAqSfNkKQ95f6azuWrF4wwv2ZhB8NTi9LJvvkx1",
  "key30": "3MS2dVS13NAxwxm2gTpr9f9ERZSWuNuDfy6G3jyBAZpQyKZhXEYWgbVinWoAUa1KBMiWSPeeE6nRizE4ruFsSmZT",
  "key31": "3LNpKhvZQtzfRctJHRDVQawnMQs4t1d5Df2utec9PA2xqSH8J58QLy4XR7qXVdxHE4xqcnKrpk4iX9QSw8oGbvmX",
  "key32": "9ewApBq1uTHp85GS7w2i1ENmLEEyLGAnuGQXNYfpHbqkWidHtQSYxU5AAUEW5ZGrJr3q9zac5ZpBKCJS3CzSSiU",
  "key33": "5JbvmNyV4t5a16S74ncphZg16S5yR4XU2gK6saqsvcN5mYZUFnDtQUHcKgT6iJ2WfDeFuq9EQX5MPrbnK3Lys5wB",
  "key34": "4Bf3TPArmfnwHhU5LeNAzvNQL5yD4nPF7u7sbRSgmmnuJdzQnEq7zW4eUESGqtVg9aPHdt74gAs1JRnqfkjYwBhP",
  "key35": "2ZWuHm3ZqoQF7NqxUddkTHFyRYZuf3eVDvt84HGm6HKJUAcvuH6A8pqEovsd1tSNz5WbBDaoMWQb4VZozpdNN88A",
  "key36": "2fePNB1Axo7sikW2bPU2XXDAxinSfVoThVP7AHrV2GdfteM4R94Hh98DF74LgxgTxUcxsFCcEMQJqS76rzWUH9qZ",
  "key37": "3CU1ZRXPk27gkaZyGtR6K4ksK7jEGbD8AHzU4n2dDCvWGT2nNK1mLB2eAcs5FRsqfheJjXYiWYBbyVQK2KtgL1hq",
  "key38": "5VP7ywwkhv1SmudtVahqRtrrRNcrtDxkdqngt5EMxd3zg5VASpoHzTknv5WFpYT1LS43sCKJxwLfM4ZT3uYLXU7B",
  "key39": "4Ka7DctY4tMLJrL6DLtU7xVdnaqJVjoMNUzrkv36cwyQmFKwcz3zmXV4LJPdSzfTyzoAWf2zvxwZKA6ZrrGc4Rpg",
  "key40": "5mHgowU8yh6Xq13WmytSCbkMsXWBqbYeQ32gyseCsrqyRG1wrrboAHrVE8YGg2KzXhGDjxz1u2SQBc5GVRpbS1BK",
  "key41": "3Tow2CV6V2a2cpv1Px2JTi5BGLAzf7kFmo7HdUdkrtp7RxKGCzRQ8yp9sj4RsBByyw5rc1HMY6So2p2w9umZyv5V",
  "key42": "62HYAg2v3MnysTsYpCm3oPsrsZkeLnSGuxW2wYUjLrbU2xswA6S5A5qWXkDmyL7VUfwAVkGNtUa75CGuL3PfPvqb",
  "key43": "3TB5zMMmoXAZrYjMbfXTRm5SkLEhhvUWfuLWqkDnNhk4aX1L32eYN4mxf7zy63mXHS2my2qiKstrYR3yqoSdoa9b",
  "key44": "3tLbRkyCXmKETDkeB6f4dAAtKS7Z79siAYiB3L2C5dmKVnaKm6nvNYzvULn89u8cw9pWP7nCZBuHiggc392rhyjp",
  "key45": "2nq3SMohpQEdZETwrg4TNJezz4eszBSuZhzzSXLcB7umGtrhS3sRjYpqacuW2ErnMK8bYSatDzHLf7EFshmwpJyZ",
  "key46": "2byaELnoZXPnPezAs3yexx33tjruj518azNGS3JRSmCwTFXVUUzf3SmUkotzQctA4twerQ6tmctERpeLG5tm9VS",
  "key47": "5kHXmmLcQSowoNcWJbJsW7NYHoYSDm5V7M6sVNBiBe3M6c2XyCFg27K3br6oKVuU8kDUCNCCYwXfwfD84a4G91wF",
  "key48": "Y3vpwRRywS898EzyWrhM9JV678uUDp1Q8UVu6mgrkJT5xE626UrEnQLTZHRZntk4GPGg4sqM79ETMR72pZvQE6S",
  "key49": "3Thr3QSwzGCypiYqVxiUK5UCHfwNji7GauWNsUimX7NijZoUPM41RuRddhoH2JuPUnqpQcUP1XHbzLSVD1DRCqPv"
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
