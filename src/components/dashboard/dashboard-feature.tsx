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
    "3ChRfqqrdUV33yReoJ2J1r6GpD3WQpbL2NfGDBmGtikCSBL3TV96npLHTjkjeKMXVKNESmEtVwfxPPGVbhxJe8EA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FR1J1tww8CTd8kGjtEXkfdtRhtuDcB6XukZHuVigejF2B639et6NUxDRpVrMb9xX5qkCcY93AebCXbBDAxsbCQF",
  "key1": "3onGkfks4XjB8hvbYuHZwH7PwpjB6uMLz9erxtuUe3hTgw9qohewL11ppP8Pj47nyNCsjEYh1pbnkHdYQv4NzQ4X",
  "key2": "3kGaiMSvVb945ckfJrR1GfwtHRbFTEVrbJVC7FowHDthJeZA2UQobDAADqMx1jXC6gmj8AtMqrRe92LF2RrN1dQz",
  "key3": "4H7B91ywywqGHLvsseaKbnSZPKNjbsMdKZFicUcDQSjmzJix3kq9iBtTesHG8644uKnG1W4ViA9jEqjKH9LNVgjk",
  "key4": "5iJpxCehFZs2Jm329x5ZWVoPd8BNbiAfPxCQ9LGBySZ61ajY79AWZtTtASBcuCMiZzzhGBdgVuPHWDwRiUdE3WMi",
  "key5": "rrHirs7q4r9XZoiMumw77D96zijcDzdJUWhPfUKFMQmMtv1vqpEH3QKfwPxhv2nYCwiiTuMUpmuYcCs9dZcmAR7",
  "key6": "LxYE8eizQqqUaxZsdpVbZ7575ycfucWpQ4rSNi3SXBqr4YoN7yoUHp13CMBzkBvMoiBbHsRVLrYhYByT9JQC1PA",
  "key7": "3jVUPZb1hQQ882BgK8Z4thJQVtpwuwvhm6e36ZtBXW7af6Dcd2Bkp2efCSdQFkgo4MbxFkadQZAp7HrFFijJeEgT",
  "key8": "55txFDPZTJWXsTJ1U4CihorTnnMc13NLS3Edr6Up84ggNKuW9fMJuqdsz3tHgPE3Hh8U8njzx9fRuUmgSAEzpisA",
  "key9": "4y4CoozyErmGDdXeqMGs9N7LaDwuspakVz4rbXK8M3e1PtqUTRpXja7fNcavHARrDziJuT3f5ipvjbaDtshTjQDN",
  "key10": "3nAJoCL3PpQiyJGujvY3hZhbifpXSesLEhmRHubFJ3Do1BToh9uRtwxAZjf25A2UHTByrzaKHeaSjvxFyZ7p9vTg",
  "key11": "5d1htZV7tzcMG9PiPVD8mxnkmJrimspucWdPBsvTUVc8LJzHWfKzzQbFissxbFN8LWpSqyzERuzvWH9cp8h71x4H",
  "key12": "Txaf4NNvkTbF9nhaoVSjZne5FvKQFNp42ZAK5fQB6zeaWfyaUxdMDkFuchHj4V63sHqoA2RhV2gNJQqJsLXfdTA",
  "key13": "Kx7X55qhc2sYFR3weLDCn6tgQxNmm7WkFLzF58ffsr1dZcfQGYESjg2zQG4sz77J9T22MoMUAfgMGHgoTFwFhzA",
  "key14": "4xBYFwa6msGcHGoSVeck88yEUHru8PbduugrhoiCgGRi9z5RUYDwTBcRdkNA6pcbktefftWehwZTAVrLJKrEWQXD",
  "key15": "3DmrrGBcuRy7vNKx8mz9CeSfnpniNeSp9XZgeVjc8eGCC9wgzf6vCvwMVXbPauFRgb8BfK658LobqbdpuwyEKuHv",
  "key16": "3c1rfqLiYnGV5mqzhgEbk8YK546112FKeNbEwPriGhS9oqoJdC8fg2fYgLiCpM1eNCkrQZetrTSoWtBYu6Y7XLCe",
  "key17": "3X1NEEK6ZywzmEBp2mq13sGaDsbh3cZYCPh3kCvtM1uMjRnbWJWp5SB8iwoAfhSjNsTctAZ5x3muCCjaugi1cHKP",
  "key18": "5qAQo2kJCpV88j1LzL8DunU2yyFrmZv1NBKPzFtP1raGBhZ56tpfNCdYWcoEJvFtJXkseAL5M2b6k98CzPeZdXhx",
  "key19": "2DoYzYkVsKDm9sP4DAGj3ryELWHwEZZ9tdgKbCQQwVT5LB5gG4oEgdJ5ZGdf1eUBy6qxBhvxxioxnQZq1Yj3fgc5",
  "key20": "37jFnrF6zY5uc9RWMCz9TDy8FbQ1BUwhZdyS4taDVAUmJ5vT3ZiHZgcT3rC1e6jrLSqRmK61moiWQ5KV4LN9GeLi",
  "key21": "sXdaU5uUuh5Abp1RYM4ig7FDUsQZYjV1yUGR9rQEp1GK5zVG1UfAyJBqN8Crv6pgeptiWbYZHQJA2GuxHHd82VL",
  "key22": "4b16e3kj4FrVmKwqTmEU5kxVEWehoU3p13kjvVzG2xGS6pAH2WdUgsBye93vXad5fauBXk3yVo2Ud2i4xm8iagQA",
  "key23": "5PURFs6iz3cFLKukGMRv1LKLw9rmF18GCkY3FYqGaVSQew3yxdaFfHiuhvt4X5tzaVmV9GdyxXkQMKxeCKkkhAtJ",
  "key24": "BkdjxarViv8NjbmMuPC8JmvAmB8io2W5trmVFVuyYkg5DZrrkofdkMT7szR1apdgaTQZrNZCHVN2W6qJCgy7hg7",
  "key25": "5ENptZvKwDMgX2opAo1QWCPb2zMsuDG3RTsozG3DR84frUj3LDwhrR3EB34bgD8VHSDpro5eYgUn1aHLpumwascF",
  "key26": "5nYYuDTq1vfbhv44r3eAoEkW7tpbe7yrE93aNXvhDyTreDxE943F6nZRJNK41n4HPkGwQRmXLTEkzg5MwoY9UHtk",
  "key27": "4hcgwPHs5Qq4gZbY3DPqoSwvgvc1vDnQu1zmLSewcU5rnQpVso9cGWAZz8hZJAeNiSjra9JiiPRstR6igwg9Re6X",
  "key28": "21o92wJ114KF6UT5rt9iUnVc1RHyZnqgwz61U1zMaa5haBCaxSMCBWkK4MxBqmZZcxB4LsNZz5y3LtVsVpWakZbf",
  "key29": "51L8MSmiAoHp6nSzGsX2NWUhxyWLBB73ffTWpgB26KUWi8Dwc9tzfeBsCXsyN2rZMxCSyFa5oyaTwR1oSiDZxQtP",
  "key30": "iGUzeCPjBfGouH3EhqTDxgnuLLH98vQFYvr2MTgUm68anLMHpmX1cuNiT2Ng1rn5GecZcM1iuwMui5NhNKWTW9b",
  "key31": "5SKcGSu7PA7ChXBMDwVNo3t5qBndekqo9gUUuHPR8gaodGb2ZvfsN6YAy2UoGBDKhZxP3jritkBfg6fZtKkYDdvP",
  "key32": "5aJaR2bbn6ofFVJwVrYgEmnYsyHNoBgSsY3yVGWmCc6fJBt2BgE1kbRU3xjJqw8j8jG2SbXKzhK1dbi7QjQL1BiU",
  "key33": "4GbLuhNjpPcUXYfb9Ly7H9u4KMQtaPRKS8jHTLRZdTYFzSuTciMtNM5WZAhKcmmBDhvZ5iz8VJfzWpqE78WELHKF",
  "key34": "4yyWH7wKQssC9X3Q7EYKD2cDUT7R8jV6xScWkHrFBQtXFWYxrV5AxGris1vaqs5Ym9SH4TfDm4yrGsBD5YPmb1SN",
  "key35": "5My7AnnN3sny4NEFoL47G5jBvopaWEgY3Z6LNDw9Hi1Wxq5oJng3sgpVEHkvBp7uTsUdwgSppYrLmR1NsUqy5ATo",
  "key36": "4eMesWKH26oGbdFws3mR59iFTh17rPBBnW7jEqfjRu6dgkob7TE2uA1zKy7yXT787JpWnrtx3yiLbcfkMHQ488wd",
  "key37": "5LeRYhyFTWDDkCtMN4r8hUvv6XZPGYZ2q2Rqa6K9Ey6SaD8ZKigQk2JGV1Mj995GUej3H93PkdFgWURus5953DHU",
  "key38": "4hNVXSaLQeJYGrotT1A19s85bu3iaHHtRDaBR3xzCDzprpKrRUqFu93MbQpgmsR7bEKVEtvxaCMJRzcEYBBGyreA",
  "key39": "5sKJHzqeBMM9bj3aTrhhmDmnnpuEB75b39HL91fVqjzD9h2QYkfPSQMtZpq4B4VUPjWYLSi9Db6eXUVNZ9mrVXr6",
  "key40": "3m6GHoCxiXqvK4yybbT1NHUi7GPJto8jxHCg5eCLURCkBXLkLZrqUHi1eeLJXNeFZTDfAvJHBH17SeBfFZR1PBep",
  "key41": "4KB2a6A6HbDdmgY6BD9Z4EdJtSAgpdV2wvxakrYg4i25bSuSE3PW89evgRV2Zpp5KZ4kkdqKsbGjyNhMHZmsxfLv",
  "key42": "5Gdv842RNNDbLo1Tji8fyLXkjy94uFi896w3oRASh517rgBVKtrg1d1Ji9HsZoq1EUzHxEWfMxZUEgNzBwHecPu",
  "key43": "3PQmzTh357uoYYmRFv5oTxiEjsy4ovL1Ti23iV73UqCByRLymw8U2AhvP69R4SLb3J3PACAEzPTYj8ww72nLEybk",
  "key44": "2NgCZNhzYdSw1qgRHqPtJdj4h2tFAWPjY8tNm6CJLGYQJgHp8dcUXHs9VPrUzNUJJSxozvkxmnphZFXmu9YS4QAq",
  "key45": "3RCjTTyPxQcDhvzysQgzARz6AxihLAbWLRVyGsa3WHZwzrMFkSgMGtQRHpqdfxgMAS1HMqpVjJ13PQpqvsZtRh7D",
  "key46": "oKT1ZJJdWxzc3grBh6JYyGKqfh3tj6KE2KFsUptZXpwj8L8w1KYfCSsfnKaH2e9h8gzV1VnWxXbF4XLZftZvy9C",
  "key47": "5QKeP8A92YDg8AkA7wvagt2T59YDbtg1APtpAeD9TV8GsS7i6ziro5JeZ68b2oDwFUCssSo1S9PZjvCST8kLVgBq",
  "key48": "5Zwu52MT3k8BD6mmpDjqLb26pFxZa3PDLaNJ1cF3JkNTrgEvACSj6193ZKGSVKVeUHRMXU6b1raY5Ye3MDE7UtdB",
  "key49": "4MqQnzjfVVcUYY9aMhaH8diFCkaQfz6kMUthuMo5KbzecxvxZAz9XiK7NzotpcPBBqrZjBAzXpqcZv5Go8dNUHsg"
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
