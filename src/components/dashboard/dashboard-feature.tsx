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
    "5Xe4kQFtnKpywKJmn1unzWJ6VUh9dePW881wPnCpMp7o6HmxfgTrGWYXo8wcbtEMXaP5yaNYaMNVAyG8p4F8Dk4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvS35D5LCHiULGWP61JfGAKgbs9WfMytSoUQ7kVxVmfjnYzZE26D71we6nQX1JqDyy377YXpiJCfMrebfDGDBZx",
  "key1": "3uir9BcuKR62GQ5BQW4yhVxUSovrojBLD2fp53TRHSGuvDwg1e2HpErtAhiC5zjcrGoXahe2w9Bsu6zWmF4MBPP1",
  "key2": "4gK7JcW1cZGdrYdiPx4iMa8HQjSfUidLMyiuKGKsCqdURB8tgYmmxq4wgEqjxPt4CHxffNcXb8NvZRC7ECBCQ5Ai",
  "key3": "LqUYu8LdFb5zoGJhj1GCBGT3Qt4BjihDBuBRs54pmjLW5SvqQJaBgtzMGFk324DGaJAxjbhduDB7fwXLQaJ9YCR",
  "key4": "iWiyJ4AfimtFhtCnJgfSBj7q3WWaGFjFEsrJqey3eFJpJFxs4Yox84pWAmZvtK7mLpH4XonFyaLKDaHMQBHQCJM",
  "key5": "s8dnkzKzFEjUhVvmvfwikR45UvvQxPFxQVcpM1qfAjK5Y8a85ntqpEuecw6UKaKYPD4byFacgaLQGn8X3PPZ8rx",
  "key6": "635bndAjXZy81AM7p9cBGpCW8762U14bx8B89Jx9WoUY55Lwy33XQh9t1akuszRGewY6BP8eEbvZhb7SFA92Kwtc",
  "key7": "5GiQcdzjZVkvzSy9x4ke4oEiWnPuWgD5QwxTsqULpyw1WX5cqHXAeqJyTvGjeFsLiDbLi9k4c5sNY89yqdsSLZrK",
  "key8": "5ZJUWs9xbcYZEPXhhRSuE7E6LnFkC1WqcwvDXDxy2XYidpCnXSDbA1YBRpPmPDFzinS6CsnkUgVdcmrWMcNAkssk",
  "key9": "27xqMtuZjpmbgrAuByRxbGikxj1vnSQUuL9LpF64TghQyDdAkQmQSKqHkKifCTEj6ADn1MJhoMdvMg35C7iaBtBY",
  "key10": "5oREx9Wx6wGZ3pFH7L5hG6vCvLYjoNJ7HeAygdYiWwd1nCPnH6kHDsDphaoW7KUitRrP5C5ztpkLy4hiGzYA69Qy",
  "key11": "5B7vF92f4J8vBmmRhJziozwguxv5hpJdQgTKyKxQd7MPzHjgqgbhzsfyV37De9vutme6Mgj2HUerT3PdyNDgWMfA",
  "key12": "jkcYDcVXJWsFK2CGHUbPm1GKD5jg2xh28f4dScqrCZU2c6YYc13tbZuz5PRcAnAEByqBUYXv78jbj8CfsgW4CVR",
  "key13": "2XHqsT5ARwuD5TQJHp5nPc2xTsPZT1L2fADpHt1fX5BDSt6CF9FdxeEMA3U7z5zyxnu8rRd5gFhg1ZGDAXpGH6bR",
  "key14": "i2ix8pr6tkgyRRRpyHuK1Fg7QriSKwwNisbx5FMYmZdd1AySWmsYADuCJCmZGoH8hN7h2mwhkQ3fQDPWZJk59sS",
  "key15": "2Xggwn1mLE2JGD9jqeyPDVJwa5vzAY1knJmfsdzkifukM2oEZN1GM5RHkrW2JrGDptg4KCXy1Y5xhyyB3yVsCaNF",
  "key16": "2L2dFJmR2AKDnngDAxFYJbUacptG43rNdi6NWcxejBjgyP7MzG1dwP6H7pLne9vf1d6Z4BBEJTBUNzqgt2g7Z3ws",
  "key17": "4UjsMxzKMwBCczCkZLNimGYjBJP8V8QPxHGQ8JTEfRHhXTRXvN2QxVkxhbwmSjSxpnHXTNeQMBpbbBgrSYmwWSe9",
  "key18": "3jESE5sp6VXm66sXz7aNUQr5NnSXXzpGuqLRTLm4kXp1torzRbTFZyECSWUMZYc7niBdtciETYEqn85mRtcc4L9v",
  "key19": "PiWELwUM6E9NSHJRk7GfwfG2CrgRCGpJEhB2vjzQpxwT3ozTmCepXfXJAjCx7QVC386Atq3W1SBJCs2kY9T6e1e",
  "key20": "qjKpAzfSg63w49oyKwZQpZm2fL3TVXpbprAPBd3LjnB6QWtCZqz28i4VafnUVyhVSZVRNG4ZtETFfeAhr8Laofn",
  "key21": "2NGheoenF3CHHAP8PZaZJmLRptryNov44pLg6qS5ZiTRs44soFDysAnnN6DfuBQUYRGxCuGDxJvwJXiaaBmWNn8M",
  "key22": "65Zu3PV5MdwMWYs346L3UKTMvkRo6Cbb3NiszUy1mpL7bRpPoh4fD5FGACjUtQSysVAAqAd5NKpwgoU7vbGvU7jz",
  "key23": "2SDesyMZAVwtntXbZv5ivYiK2J3H85uJ8G8cLYNYLrFYKYJsDApdjYZK2iB8xULhC6hnPt7DVzjV1NeF8ecLjBpe",
  "key24": "42S3y2rVkbejmC4q27b7PfV35QuCnqdCeN2cAzHc26662ETPw3GsbuZWjN1G7yaEiXLJDLPTGRWKg3DzwciBB4fu",
  "key25": "U9XFhnVgtNdLnYxKHLrSoKq1W8zhevaX5HAgB5CkUTQG8n23qtkFfbSRvAWCdQ43c5xhpgoG2CZLHqGyt3LGiZQ",
  "key26": "mp6HVBRECVqDa4Wy8nnTSS6BibFu1HdsYy1uA9S1tCzWMSLEkvXL7aH9jke3cVLcxW4QDPYJnZp1Rsjuy4bFmpJ",
  "key27": "3kF5PhkAnLxkGzrdySSeevJSXMJsqN6D2ZvvHk2ndND4kuxvesLn23umGTiGUBcdcTWy9cNySa96oA7VHyEjytMA",
  "key28": "3aAWSmfF6WUwHDhPNFFrRCCet356SEFsaf7ZU7wb6RBhnbiqTTJp32JteZstBLHSKtmzXDusyFSKG1ZYiK7hEkDS",
  "key29": "dLQ2c3Pg94ctBwZ1wKWk56xSzbpt4WyaaUYhaYta2a3KqJNJCmDr36nQsy1WxoyxyBnC2xKTViq61fFedTkF3op",
  "key30": "4DQGHSujnNMFhnN4GZfGxqBjW4XZJWfUnTnhnbqbai5LQBQ9JyHKpFTpGYnmSs3dJLb8uU3cct92Df2WjK4SPtGi",
  "key31": "3gYAkRpTT3wYFqChgVzSbmiBKJC7ATx3Q6VSGDZq3BtKzoUtYJBjywAxnP5QzLxMFeUapeepAzDo6HgFHSpBnsEZ",
  "key32": "3vHawPFjspAFdi6d15e5QFSvBw6HGfDtPkcZuLFCBcaEBziVLm18kTFMhuvMQSMGvzkrZjMrpADtmAGgdGYFyMBT",
  "key33": "4XAAwwjrpBKboMgEEh1AxvubdSueRdqgr4MZSkuEqvZU8Ud5b7bwhV5JsEKqjXuBReASSBvM6NT6YdBjiXcBZcod",
  "key34": "3aGDnAHdKDbwMRnPBGT7L1xY7v8TRQRFEMGYAWiSMEubq8BcRTTpdu7krNdNcC3ZsiXnqmn1JEdbtws6FbnAgXzT",
  "key35": "5k9FHFeGJUubdtVPC7m6Nb7gphiJG3ai8fi4iDF5e3SUGCuF8ZmxhiwhBCLP2BwSQ7cKBJNWXeFn1eCycMp2RN2a",
  "key36": "5xJwCbPUo1DRY9GscL8u1Vi7QH9xB2DxWwaW24JRcxmBoP3hGaLx42hVEeg9koXttmNN1DxDF5G9MEoTFUX7iHN8",
  "key37": "2n8mAdRoYvEAktGsp24rq82anT3itvj1rSxCcN7tFmALfvJCTRHKZj1Pvapg1h5bk4UNjvWHh6gfqSKGVSwTWTvq",
  "key38": "3uXU6FpVB4MSVEFVxvwYZtHrv95HYvptGkaxUukkAjV8hLU8rnA2mfqaKzydE3JJfGdVFNPc5FFYCCkzG1GKa8S",
  "key39": "38m1FkQgGhMwMggTRkceu1NPj7txDVk39ajAYMBjwrFNuXsaWmvfKzXz1Y42qUdXK9ZmRBBfL6mejVN968RJ4QTn",
  "key40": "5vHAe7i7mfwPSuD9QuiWcB4tKQK7rQpZnKG3MrgJoGHvmjdHdNVFi12NbBR6g15RSxXgjGCFNFjpqhEZkgqnm5BC",
  "key41": "z7iquVVhjnN2Vo4wGXaVnKVXiwfpNiNe44uM26ia2zrDLv3f6tpbiSg3gKUJTSN844au9pWydiEdxDouyTdbUWU",
  "key42": "3K7rLtoLuRfAxvo52ZosnNXdYTRpsYoNMB2A3dJoB5eX4n37zTxq94GFZZYcogfTzXSksyP4rCmFMKKJgUqvTwWU",
  "key43": "4yfgFX1wFPRFBhehpB32rU3ZnEATmkqS3seCeNSeDVvcD5Aa2vo44VxP4m8a66E7hEp9AX8baMQX3KKRs2Dx3Ntq",
  "key44": "5csQu2xamMAEbW5wZ8jiLTd3aQdp1bgdZZvyEMfdyziDJtjWtQJaV5NwbaUz341zd2Cf5X37a8ibPFqEtnarj8eq",
  "key45": "27ntwPmXjfWDSaKJz124ZedoaeYr6qxX4ob38MDBpkhHzT6ZoXjo7Hd1E5UgxqmFqb22hhagGG7DLWYuZcK2GoGj",
  "key46": "XqHdRMGiY7eeih473YxrPFx1rHdQgw8UzrsfbNdJSZ27aCYLRWUmAV7wNnpbcHu8XiaxTfDJzVgxrUewsK1YaAf"
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
