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
    "2fVqswG8Xd2HJb1oqjw74i51aTCASBCFEs3mV2pGo3hV9S6qo9BLy7sfAidixegXkYgCbJJx9DLcN3taw6WtvcHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sFc6T2bo2ZASny2QTFqCh18L2TnQ7JTAsDnedBmYdECycHQSt6EmQD4oZsKdKB4PpxhzzmbEAVJWAzkuKMYn3RF",
  "key1": "53tLohpxBJ5tfYyZbh5oUfMK7dXE5mkRokfAM1XrJkwCQ18hYPC8EHdQuvko2Jq2nvhvs5KwUBJSjPKiVdDjG1D",
  "key2": "4TrWz9m3BgzMNj3dYRxr3VwsbqTBnrmXdLS6Fzaggo6kBqoU26Q5qXuEf96drsED3B5Aaw7EstzpqrKEMbnhwBgg",
  "key3": "5iScGXkmL2i358PsrSHysynXKZ9gmzyGG83aoWUdX6g59MhPqWqRJcausFzGcBduCmEir1u3HSddUNoi2PBXrTXq",
  "key4": "2Xwp6LGyunbdpdpeoLMhqUuXaA8WuyQeBUrTj4iLFR36burWAfu616dUzuU7sFD3MMGUTyF47pnKyCpRBA83e63A",
  "key5": "5APygEf7RieaDcr8AJBUhar9p7Y8Zb4wxR13sSticrymvRFjjMZ2mt6EybkphWFJCcGuJYQbMSakWtiyxULDsNZ2",
  "key6": "2Jah7tW5Ae5SxfVKvVckdZVPWxPvUxfWY19odEdrZaZ64CEtQoNAZ1iQY9u3dhx1dSRMor4T6MGxFitP2SQpGUZq",
  "key7": "5jbGF4Y5EUpTgFG4T8qFRDxw6najPYhqo25Gd1xL1JR8XUWiaBrbD3ditZ9NGkoqYdzyXy73Q4eRwg25DKUH3YMv",
  "key8": "fL4D6R2AtipPbT2GYZf9BhBaf41kG6oT4Z3cFwDM5Lwxs7RRKw66LFYSjs1yt6zN9L1qKAxQyqXWKSqDmpCs8Fk",
  "key9": "4adt7dnWzrJHs7YPa5QrbFhMPXY1JNYG7MT5R4DnJLTjf5863sBsJkjTJ5xETAJVYcMUrfxBeXYDPox9cWy2dm4r",
  "key10": "3yMzfLL9eEqAvwTnk4KYWFXHnrF6tdyPDGU4QhwFZYu7XLyGVLi4hxnoXhG25Uud3uDKAz3d1uBVdQ61Ay8J7n9W",
  "key11": "3thUv6WZiCwEwoNroMGZk3saz2nqggBvTBvPFi5QKJimLnDcwLpqv8vnFHpH3XWNqgVBcvzYezsqv1zT2u92ZPqq",
  "key12": "3AHhGYaDKPmBX8z64zbf5MBJnD4jGspznrDMue4oqDzpqArQNU8qWo6Ybo7u5YCefq7iQK6hbRiLTnQG5ymontqV",
  "key13": "PNYDPz3G5oPwkJm8dAvAEX8c8ext5JbLstHVryHSzCyRJYM48nNwizsg48nF8rTa67U16GhdEMT2ypeXnKcoo22",
  "key14": "3FAw3RSrQU3h9HEr6MfgPy43WovPMBuowfRfyFzGjfjtJ2YSf4gXNrwYyoiwnUG7RMy4oRcmhvqo8fwTPrjTAjna",
  "key15": "nVtfGg7CSwKfPkVPKPevVDsNGi3FspccJfhghTeK5sWdQUerP92RLqnYxwkvNgLtBvWg6Wy1KV9mc9nXAWfRP72",
  "key16": "5gnBdvLgQ4T1BsJXwj35RGQYXD63wa8NrwhK7vGRtpQ4hWvS9rmLTAQtAeD9e2dcxNYdnfHcdxzh7JVZUbZ1hUgx",
  "key17": "3LTMGCC7jsFZhJ9ckZADAWWSFrGZRZhkSt3TPkNKY6Rs3zWVFCKg8GzYPfay396FdApHbB3jvHpNsnBP7tv4vugX",
  "key18": "4ZikF7pjg9J65fQa1RVw461Vm1EnMxz9kc8TDk7nMfcAYzUjqmoi35o8XEPmZEfE9Pz33tuiqGMxzXz1Fq994QZx",
  "key19": "2rb9Vf4JyGYzW12bb2t2s34yTW1qXShxGVvqhUA8TDnj9893WYiAuELWNn3u2VpmgDhLPWtrukdtEfNKAP3jLqwB",
  "key20": "2WezZKMNXzzDCcEzBynnmdwp6DXq7ykiLyX9sHwz4M8Voq6HdYutBB3wnacKhpKKQsovspegFwZdgQav1WkNqqqW",
  "key21": "5uicvQVYzuEwheewbw6Cad8hJv5mep2HFnYZr5MXixj4uQ9f6PSqdhD77Sp32YmkmuAUoUzKiqyGPPWvoEPar3sB",
  "key22": "5dRgYUZdte1r25AMpap8ncigUCuXBwzSJFSpxZfKAmRHRYWgYUbzBibJZ5qLVNDM7MEn25GTv9Bq5Ps2i8y1Nddd",
  "key23": "5pWiqNtMyYwRrFy2paPftNJuyEmQfTTXZcQYthSJaVdo8J32tgZ46rdhjjrnxSqYA2FGMdjeJ6T4UaVPtCxX2GpY",
  "key24": "45y5DBNDrgRi8NQKnwTk4zcKkg9ZWsPF2nsu9e2ffTU6Q1YJw4gznJbDmrCaVhoNp3kSQKZ3k1JQmPJTEvvPnYB1",
  "key25": "515MxvXbHbMV3Do2wYb7iGMRwGtBA6xHhGZ3utuwG3EC5p5gejhantb4DfXwUqtTwPsW8Q9n3cLNjUNEuZryPtST",
  "key26": "3cUTansr14nXXumfqL7bkpcLqsdSFXNvuSCgEc4ujnLi47zeHfCLsPT93HhYtFCj8XWvFv4FtLHwrvRh7MLYe8tA",
  "key27": "S5tMAJNSEP8k2rZGKz9T9VRXq11Q3bhYh7ELBki6f4Y43wq5FjLVgzvxSJqyMP86vrFjrEMSjiw9WPFfnAmG9Aw",
  "key28": "4gV5uQTa2E8WaB2y6AHuuRgRUtPyfJqmd215K8rdnUtqBRFtDJvE84VrrcM5ihiE8XF1T4q931FsE4VtTjSjyw85",
  "key29": "4wKrym65mj8c7rEfRvrvT9kW94FCzwYr9PHreW2Q9JWsqQGnFGkt5GDqkAfiGrMqrUbrauD8qqTMuQHJQ1NMid9J",
  "key30": "8XfnuRUJcJtDe3B3nYpZ7SMWAUFzFcfgRrNKxH44bdhJCLsAikCMqhDu38toLn2AcWYq2vCcicBUDKMTYRvQZWY",
  "key31": "3BcX6Bgsk3j4VybhioNVHLxF5u5Cgvdrw1D4HVj9E1oT9bpCt9RdnoDMS8AN8Qb8zC1k7K3NgVr47Ev4cvCRN2Bv",
  "key32": "5rkP9hx1ZE2HW5THmddeb2L7HSaGfof4BtnvcrvmzQP4qQ6YdGj7Z5cMqjCuTiqzRM5xeLFn7aLqFTC7HAtonEWG",
  "key33": "2WBS5oy5v3Fbx3KoYL9DKDQwTpLekR3Ta2LxYJnpcnweGYtxu4SfSYYu2BzzDKLEQXKCumefvD5TcMieP7g8vcFW",
  "key34": "2XdEEYEEpWVuEZ33iuqRhpQr7XZD3ShrVeNsrATa6VXqk5pRh66aDCarfDaejTBUHSqJgKoRiV6J9jPE9CDc2rmc",
  "key35": "E4ATHaEmqPFfm4pzWfCgbLrsZaGqoukE1hqVDCHYhtngwZb5ejTxhjvqGJ8uu9kkXwaseGE5oza2VYimy3qcFzz",
  "key36": "38VqXQ1ztXNYKH53v8HMQM3SMv7HLuiRJDZNc9kC8P96r3seCBUqNWbWBTMbu1SsPtNVavKo2Vg8ppNyU4KgR5xF",
  "key37": "67ELk59173dZtgQE3EChcsrcyjfVvkXKEohLUgfdJiWgntSXuRqKEzkPrAFziBHTLk8kstUCtoM2Hg3cVUjf3cSY",
  "key38": "5LiZhz8ijJRADZj4oUKprcd2MsEnNZvDqwgMnDXaEFyS6ey3MUmxRSuviCiH13mKkPBTiDvyFZL5p9ZVhAswNEJC",
  "key39": "djPAYpWUaqG1UTZbnN6hnvb3UMJLaomQLmBciSZZwu1w6VagmzUoh2gJWCSV7GpsDQYXahUJsuNjz5J1udCK5VQ",
  "key40": "dWeqDXdkLyByb1WfYfg4BEJsLqdFqHP1WRE3GiGxLgqkyMq2F3PRYAWHBHycxq3rreoTpWFhwfYaF1gmJEMhskm",
  "key41": "2oFAj4T1GtSp3Jz3ry4pgwHPRbjKYtG4x2ZCHtvap7PBVzY5qDMVSpr29JkCfcxhxVpbgW5BCmQnuJ41Lac5hRfU",
  "key42": "3ES3fc4TPdNFSNrFVsP2btzZBqH7UoMefGncFQPgxyaCntk7aNtVLfdDpwrM99vyGbt5Lu1i5qeExiAFjtRDcD2E",
  "key43": "6Qvd8eYQMA94Miutwjr47wmkxFyT4bL51DBX74Y1LcUrfzf4wC3RSx3WSWU452DGKrnNZ1f5kLXEmHKDxLNu1NC",
  "key44": "27MnMk8ePbhP8pLjQKNdNSfHYaCRYex8hC9xU5Px422MJ1Sd6CGEUZQbTafmq5cCqJ3iYPJSTxchWMZab2r9Ptgx",
  "key45": "5m3qp2z92wwuFrNLmAdmtj3iG9WaPFwi2RYwV2jp9xj3Xaug8PSCiPWijyGwZkSanmHWMrdNrHV4vhy8PCqatAYn"
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
