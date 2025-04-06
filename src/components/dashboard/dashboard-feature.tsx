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
    "3ycWU4Pwq9zQyUCdFCAR45QL6CAvtHp88nyqUw37QrmzRVYx3oPbDHaf44aZquTiFDgrk8hBYnod52sCjnR9qdaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmwDQSGY62cWpAtvmzcGczaxFiZuZysY4hvvudZzBf89jBcKp5PG5yPuHvmPJdKHG6pGumE7KE9r4onYMBAKmDp",
  "key1": "5gVCX5LnKdq4wBeo6JyRyQo7tzM7G75YsXRGLndM949hd6a49QF3eiYgVJrgeGDbZ2dF2VrMGaLHrZRYZAXssASc",
  "key2": "35s71z2WW2akRxwcyuRgNHcRo6dTFp6HaFH5oqZtMo1JCafDtjQ5juuo1HGzdgbKHrMy6ZrQF9ztj8AzM3MtAvwU",
  "key3": "2xCEGXBhNPpuL1ukSaYnrdAvJGR5okYmpwhtc1JafAgMQN2akXbsy6Y8RR8LBt2myaCCEdThc7RyCgrkkSZpdexJ",
  "key4": "5NpB2Lv4hXqfVS9B6KU1kRV2NAQFLwPvnp18D6fccwj9mZKRF3reazRfbHEH4CUGABg8trqGy6hBRWuFncjPiHEY",
  "key5": "3MjJaWmmiDFexv9DQ16FX4WtbDsnDcWxv49U45Rbk6SxrGA32N4YP8xph2aSLbUeFXirRMpHoo5qXgL7CdqarnWf",
  "key6": "4PxKwUWhLJwQik686g6cfgSY4dzQb7SGx3iZgNgNVvxUYXT6Bpw7VnWzZdzCmTWWRAramkpPok29ph71iWK4Mv7F",
  "key7": "uiFHgpdpEvVoAcmxvz9Nvf84cESW3xvCUtvqJX95Z91kfTrXA94mc6HhNiupq6ho9yytK44QZ6cw1cM93aGkQ2S",
  "key8": "3NoydnaaTfhySWuq5bhGKpvTLa4iEjocNVZzVde8cXiie3SzXiR69pqifqb5SHCv7Y22iLLurXynZ8KrQun8tRgB",
  "key9": "5wn8v3v9LKh8VEtxymFZjrcJU6ZTxmPaoyEUBaUbJXXJAbnsQsW6mXDwEBRfugRqKSPjgL9Q8vrCpENXfFdJBqgS",
  "key10": "5Njjj8gByEZFkTFCBZKUZTBGBA4czTg9uzNez3NYrCX3HTHeAcw6FZFJrPybuPvW4evfgHUQoDLfDgmdAPnDLL2v",
  "key11": "2x1Db4YNSdw9VabcVcftoCrpEigctcPCAZj3gpnsFfV4VLnH7TdcLH6sQ7zPRWbe8tgdc42NetDkM99W4giqGMmm",
  "key12": "2ibCPYie2h89xzA5XJZ2tog2369NLvegoqmP9iapQmci4QexZeB8UKBTuDBJ6RpxtnAWvv69pErp5wtsTdBpUTvB",
  "key13": "4PPwGB9S7eBBQohKrbDAzgBDzYATExcwGTfmQPWNH2ZvgKRTmfsCjq5yxw7QJH9SggBJgUwk7W7spLjQZ2bqLG1z",
  "key14": "4eE3oMpbcjk9Ff1sPQY3gXaLz5Diu6LM61oaMyYLTRnKD2wNz9SgXtQ48Tok15ooPYacQSK7HgU3A8RWiAxyMSZV",
  "key15": "4mBCay3PRMRZXyqKdzr2QoRLHYPqsM82Dht8yYAnMdXj6CGJxAumEwEJ9JaETkGpjSc97kvY8XZNqCq64mLkaQGM",
  "key16": "4h1q2rQSibZHNz6t59wrNB4UiKsrEWThWKjMPFnsxjsxRwiU9aXKtvK7KNHDYUDV4pNKAv6z8gNQ3FV2q38cBXtr",
  "key17": "x2HADTaJnPkNaWamDCgQ4vnDJpxdYi3vYo5BWBEzemDysPNoNcpR8rSo2SWhZVax1CAYKYTgeX6FayJsfmYnQt5",
  "key18": "ivzDDjomc66B9e1C7vQ5168PCY5sKSSraH1fXcsMNoNrnpbTYhQ1W8peNx7aGAVmPoAvXaz5mSDTEfY6v9Wkdzk",
  "key19": "KRtWtcJtfd4t3ZqQXdtdkveTKfudddG2ck4wYG5PhudjWo5Ao4UwZr4By6E6uSkySzhJpkoRtbko5XDrbmZuhTo",
  "key20": "aWaBqpp7oBsBhGWGwMD1yQV829YL5p8DAheRG1x9B8VWXR8egWSptccVZFSpWswodi72TDS8MmDPL65oevWxmqE",
  "key21": "5G6ATCmcadfhRq5Ubdei4M62BjA5VNeq65eDTRwfmQdMm8QzZSWkSLiir6qRVbjZDZ1K8XgHQbKz6vZ7PZC6V99R",
  "key22": "2LL6U3ShH2upabbMjn1Uucg6VH454tRbXpWzThX6HcEr3T1cxvQrf12HfgC29LWpHe1FkXAP9P9FUbBWMCc7pDmd",
  "key23": "4pwoXkuY8xopeBYzkEULbhumaY8jyjYaymcny5A8VZs6uvPVtiLik7w7oXZE9jxz17u7uBUF7DWkJ8cjAvQQH5e5",
  "key24": "4FF6UAvSMRjRZRDwsjwitmQdv7qaJ3y64YuAXW2gHU4gE1H6SM87joJAcnAVfRcRS8s2Y78ba98Tv2G8AHaM2hwU",
  "key25": "4SVm1usV5EQWuBQrpGczYvzM7dCo15YeWjZpiMJLE6utXYunBAzEysfe7hmh66GqSmtSPJq4QtTaKnxZhiNptjko",
  "key26": "61br4sZ51iZzbrDwRY4MaYh3zRPMRFwwCpcTjETJg7rTVxhHxea5dS3xRmNSqkWkez37SqKPbnM6G8kxyg1PqitQ",
  "key27": "3gqnD25hKZDQdbN1yjUNpXmggCUGz9tiAwczG8xkNKHZhAr2w2SH9Kk7aJeETj9BcgwevH8rsAMj15KRjbnT2onh",
  "key28": "1jSbn6LGtk49NwkEk7gTC6oU2qHwXgcHz4imenS1C1th3HYZnHsR5R7YbdYuMEMHDCRUrUjnRb2gJw3xUXAAGy",
  "key29": "2SGSqJAYvvsewC92wjiyD5jaZzSHCfn9h7BNWbk51W4x4axtoLHgiGaV8GYV9tPNW4G2jeQGipfEv4hZSGmAVTHU",
  "key30": "2JFwG4S1oD9HenoPCYW7EsaPQxuzSihKhMaJ3cxAAA8nWPSj3GFr8zPUbDDDtzTDJXyg6JCuUTSrNUBK6NCttUaj",
  "key31": "31NswRNU2domhnmRtJbeHeaWXGZTTVih82oEcSbPKT7vxZkSDti1kFp14RdNMMHAT9kyXYygsZ4v7zMn79GnF82Q",
  "key32": "kN8U62m5E88XSjHYAV2jcgcxo59uwuKqZpdGyFJaMvSgskn1375kxj1Dw6khQsTMeSjEEGcNDyhnrmKN5vy7YQ4",
  "key33": "ic4XkV4k1SE4Fpbk4hQgY6LieJywC5C1gCZURd6sQKSYMHCpGUhBmh6ebzzKQLvaY8rZeZV8CDPUyWncmgYzHdt",
  "key34": "BSwvVtC99dsk6JLtVACcq8MeShP31BbLxpV4crPkTHbrtbtjqZVfVorCFQgVHgLefZkGLj127gGrQLW8Ysyo5d4",
  "key35": "5SFHwQLi3vHkiunyxWZzPwBqVMugV7teEfKtHMNk8CJ5JDUJ5ZYKVEWhyZTTn6eJnboAPeTipWiPRU26BzRz9X84",
  "key36": "3u3fE2x16fM2HkDy9dsdSFKStoJ1ftjKXj9KYrCHY4MnTrjTQNuFZSdpxiPg1F8ATBCdbLiRoNhtTvwdRjLTbt51",
  "key37": "235HFn93SPQvtSSGfrGhKHBzLcPmaC686tRhq96CPi6v2kyGHGoBxrSrcbmKDfx3wbGknWfbkdv4JXJqVE9SkqN7",
  "key38": "2vNAJTJ69oAmvAMhMbegfkvRS6nstpYCBFF8ntp2ERqG3qbPYzLPkovhowNxH6Ks6Acw3fUVCEuXdvAPxphWk1Ym",
  "key39": "2Rai8DZUDDE6ZbQpe7PL1xPzfq1oXbs5m5DzmnXheZ68ry7ZN3W1HVYJdayJBLVox1nPgumbGL39TywJxZmkR8sS",
  "key40": "f8qBiqzH9rLVzZS8zkoXfXZvf8Z7sgB49CHbShQVHPqCCe42NcYp3mLBNQNXb77SD6h6sY7YaE6Q7oQpupJBrxr",
  "key41": "5rKiYTcETdbJKnzLgcYUT1sNSeK2eY6WwxGTLntY6f8AtkSQjgaQn6ZqsXX7YM794RtUUqgpq9i2g1SSGLZi36Dm",
  "key42": "4Lsy3X5nYHcLyfLjuBaxhg2PURKiwEdaPw4v6VtFJGdbEEdKGrPFgnG3xXPEcUAg63an185WR28C3shsPTBPjJv8",
  "key43": "4Can3iw1ZgzWRtMrE3DDHvLbGsRyrJcvsuJ2oyYjhoWK7d9AQ1Q2NvJyRo4A3D98tWFH2dZD8rJ9zaEwXT4EBCBj",
  "key44": "3eUqu3eETJ7gQWBiVfqPSpNPgSJ5ygVfB6fuWfxNxgHS7oLcpNhhWkTV99cAuo2XTxw3fj7X7LMRC14LECKao9ox",
  "key45": "4MFr7hufFbXn6NtivLAtsWxsTeoT3q2qtLYK5WSJdSFmHH454zBbLAKyPHiXW3skq6P2DfkcdxgRx5nNPDFz6hxA"
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
