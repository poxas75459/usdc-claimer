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
    "55z3D1gsrJo3KChQLtY8Uv8WbZE1wgKBiLyboXKUDAp9r5VaEvoUtYpTokjsm7d2VQT28SHd5gZJs9uVCGEZbQn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22rLjGU6DFuvDPqY2JpmF4fQPJKED85RJ7aKCuFwzBsfKL4FfNFKuJjbW52gTHAVNSAotV6aR57NztWZjZ5BRcEg",
  "key1": "4RMQGhCQbModN9cn1ayu5EWVU7UipyxH1QQ1vopYEfu1BYNcBTwq8DDFpHqTiRUMX84HWZMqtmhhWP1jpUiUPpy1",
  "key2": "2vDSJBQNbPuCzLrthzmNiWCxeytMFz3RJC97zoykBnJkYv3ujywinM4Ug5u4mdTfbVTGMBe7Ec3WpacTdkPxdYqq",
  "key3": "4sXT7dVpDGo41XaBPPniTEeySqAqdsH9ECpEqdrbCjNrKSW3gyhmjoJ2BuzhMYCNP4HVwyGrVKEUmTxjbEShmLKr",
  "key4": "wb6f8A5iTquV1FLC8uh4vMbNbJ3zx1enzVZZCzZZriU3cmbV2FhrQMxeoXnhDShJ9UN5TAC4E7xfVP2EVxoAaTk",
  "key5": "4i5FFCuTr5vd7vwBrMiiGvMyNGGKeDJpZK9SCHauihmh8n99nbqj2fLhMEr1ar3HdtXmUBhJAAZP8Bw7McLZ47Af",
  "key6": "MTeEfRNUV6FDML8eaFM4pnqXEzYrNjHpoFSeU3pfkxopbt4oxmvQ6zrVBQu6z47UnR7pmn2MZTZwxF2ejZNfZDu",
  "key7": "eU8yPbK8YnwVFm8mzSogpydK3tam3Ycdn4E2nf1n9GZaJZCevkQLTr8xRxyUmbcieY9SBMPmAzYwZVQabEyvnAE",
  "key8": "5S1zfaUSvCiM6XEvLVXcRL1jgjKhCEzJ739Ba3DXhcifjpuAScvxfDZRxhvq8YQ5XX2PaETc5HGxBUwVjDgKcR4g",
  "key9": "4Wx2QHHNiNo2xuTh4gQSrkCybEfd4ttdAKL7Xzi3akwknNu6G8L6rZXYD3ZkTFSYbHD8ceRfFcMs8NWxTbxq9vuf",
  "key10": "2qncJ6XgD2YHWrmEjYfpYNP2RQVpvUcosNXd5ecebvDwL77ZdudeYBqM33iKCRMSCqdEKLCXjsDvvqCBpTvjUJQL",
  "key11": "3j6rT9pCb3DMSV5HAQ2oeEM8zyo8PuiGxMtUWqRZDqhXXTE4coKREBLsWcqSHJxaoSrin9TALLCHJQ2L9yvY6GVs",
  "key12": "4jYdyJrhbyZgiEh4F47a9CG3mNiiXgu5Q2e18nSs8CX1ZPwCkavhNFs6AGymcy5oHmqE6JJBSWDyXnGuo8Ups5Bw",
  "key13": "2fv2WCK8o4FrFbhyzyovAwZ1DsiFm4eMmRX4ncaSgftf2s9CojjtwxXBLU3W6D6gNPixfsfv2gboCmuAMrVDRzvo",
  "key14": "4eXSRK9WkDczAh6gPxNAyM8WpSoiHH5VFCCAuJg7FPiC5heQUy9PCpD5Uwc32TvFibgnCzpnaexvA288BGSfsGmy",
  "key15": "2yYimBPHai7HsKjkNF2GKtGNGh7dgRG3xMU7S9NYUkavh6T6oN36WRyQdSjDz4SQJDDHo2TCnnBrSJgtRpRnQuyX",
  "key16": "34kcMPfw11vF6PxhX9zMapr1VkgwMw1589YNN7wqFejkA9i1VPL9sC8vSJmBHzGBGhTS2BTuqWofpoKhjJMfX17o",
  "key17": "2UrjXND8zpxM7efeoSekgpvAAbs2FMrxvbQtzLnknH4X12TTYuaqpcxFhsdJfpFkh2QtFu3m9tZCNi4aXWUNZhfW",
  "key18": "5WrmY5iQFkAqKLDFnDkbjHn41Ft7tKqr2pGBctNa9Z9mAaVN12PwXC81Mx7fujsiAzhEcWWoabs2gjqJbRUXCDsz",
  "key19": "sDzwUx17TUayBb5JaG9pB2Gn2umY9dDGJLkjo2H19VB8qmFNQoAmCVtVCvYUne273Ps3w6QJXgMLxWTxhzvjEY7",
  "key20": "2297PmJMbZi11DPQw34yUBy3YD6AXELSqPoKnQSTxrW4DHEhhwCcG1nswhBH15mqbsELQMmYnqNC8w1s85zQNssN",
  "key21": "44yshyTzzZYtei8RJ2MdLDxNvK4yuA7CPXNcksndi65F7gfd5tXPN5tjpruWTP4kmrwWFsMwCu71G5jg8yxzaB9N",
  "key22": "3M9KE6iAwmJAMxd4uuR1n2Qj5Ch3DxJvk3vfqRSipE8Ckh8no42qFwHwEhPz5iZqKULPZ3kMw5sYFqvKVGH47F4C",
  "key23": "4AdePVXdWQsnUfNh2bQoziCNP9PDY2b2ZNQDh8Y1xiC7kSQhCpqik6zBjcvEy7zYQip5xMiRxaMe183ZxBUcXJQT",
  "key24": "4vJHeVXW775jWmdxZvK63wgosQ6iyqfpQyfV51x275jzNXQcf89pmPQQGQTCeKb2iqsxSWeprc4gubVTkaCiLY5t",
  "key25": "2yo88m3m8Pspd88GmbWPgZK3vBopNdQXgGh9daZvLd4k489LGybnGjgJ7L3PDhNH3daUSZabi4iNDc7e4Tr1DRiv",
  "key26": "46Wzc6KRW5umdjAtus812kaANDZ7vJmKncQjbBvPTozL4krHuMVBETXNBQhSpah7reSBJL7v7jh31TFF384JJTr1",
  "key27": "5mzDuyFXFFhLZx6NEwmh9w3gVyxBEynD2BWLBzd2W6qXdtonUWchipk7R3EZZA6tUB6UP9JM7PzCrGuvYYFfM49Q",
  "key28": "2947Tdq3dYqocdcWEiRdkLazXU64fmNTfuPqPP4JZnMFS8vGE9U3V2C6srnwx3rAjUoLpzAv2f7u8vvLbBeU9GBR",
  "key29": "4hEthkU2YCardGDz3aoFQyqnmWB8KgNM61WaLqJe8WNmaUVLzG6ycNftpc432ybBfVX3LnqD7V2T8dQdLvVPiRBJ",
  "key30": "PVMwrLuaXzQ6GY2XTLhpGdBAkeNpsMmbS3Px2NpFRem4e1R3gQBAFeVnNoempCnmPd5zU9BA53xY4H35nJfMgeo",
  "key31": "dF5vvHWjXTfe2yXsYTKqC7pVn2DRwybree6bboe2qGigky3RAUekjt3DJmDyvJnZKfsaRxNH3YQJqviRz6TDBty",
  "key32": "3RLGSstg62ZdhXY3A45xpMZBnYmyPzk9QnnkxBaN56TEiXepiRgfw5CzimWJaNmDvVoL12pGMcYAeceJywEXRt1U",
  "key33": "4miGFw1M9qWeRh5UDy7XWvUvyHogSbgxwqYA4hB9Y4XQmTeSwfGCpeXWZMxCFGcoYAJR6E86BXo1EK8C98EHN1Ak",
  "key34": "wmwRyRg8fBc6Rh6eHP9mJYbGGyHry3snfy21TxbzD9u1osvk28hECPVsL5Xa1isfkrtDUdbciUjjPdP3GQKjCPR",
  "key35": "bueCdBz1yG6Vdum3XAdHSpPM6fKjQJxNTynYjEajtHbR4wfVeGwB9fGoa9ang28TRmRSDkxHNUHTsvCFi5i7E8f",
  "key36": "3kmK9zrwQoSvrhnFzyrY1Zx2m4vtLCRJvyEvw89BgCojYQaoWfn1DbTscQHxYvAhgKKCn5DWsB86BNG9MxJQJafq",
  "key37": "34QELRRShUADXx3eoHXcZtvETqZkn5b1TkgQnPit9aP8d5jD1B8UsVUmW1tyVbBcijNRZna3yQKfk9nYStH676vC",
  "key38": "5NsAWTdKWphPEUGLZ3NA8CdtTP9ER7CbMLDfgRC6FEBNHy27HsxwmjGt6Zz3hGJapckUZQJC7xycoLCkR5QdQNZN",
  "key39": "3PbGJYo8wa7y1CMvG3YDZXHsjXJ6r2nsDSzdk8nnVuWgHWwGoN1cN2fBt1nQQznHSQFtt4GgXdvKvBDb46GgJWTC",
  "key40": "3ZFbQKxHsm2AyNd7t3kpqb75S2Xuj6ZHcqCmHe5NahQg6kkPWCKcixcXy9Lo9pSp11BR4mym5cDg4HCVncT6qEFE",
  "key41": "duD1xA2tsCdDyUJVeXNwzYethDHo4Dua5a2wYa8K5N5YGaDG5hrMA8xats8uWAywwRSjCbmqVvuwsQrKLVg1euu",
  "key42": "4QMyRwKgVxZYwazhxhgXKjhw8SNrxUexLroaF427fXPN3v7zxYMLPpnProqaugyzRoGzX5Rdcb4xip6UPj7m6jNq",
  "key43": "57mXcR8wmReNHwYxmrBhHgfx7jLE5BAwKdwWBXneehQwuognXMxdJEHM3LJP51Rjs8tYYqsSaQxPvLz3A9hcsVL2",
  "key44": "431i9TtonigqfQup75ZuSY3hQA7dZ3XyovzUofTyAKr9yYUUecs7F96Eotyodnm7DyEqZgU6vMKeqk4XHRcwCFic",
  "key45": "3eoTPecdRT63CFCqjZRB4EG1wHxqJ9p2cWqxsg1ikp3YHXTNkLjabEd97FPS4QzZMpWFfGr37eUqbeNgRXH1dnJD",
  "key46": "3CchKhQiur5szs4Ez6ieomNknTWNni76BtYY984rKYXwMF5CQHm3R9MjHMpfV3shAGf18yC8zJxkCPypiryDzCsf",
  "key47": "4XGspH612d2DR2WMjv2jZvLZMKGbewWSp9kpM91YwPHFqT5du5bXEwHWAUm6sq5sziyUfabTyiG7sa2cEWXfXgfY",
  "key48": "3nQcRDYnhWdeyYqGYpgLzTp1Tc2wvpzkffT5kkSWyFQxH9XEBpzsrwVf1CuNAzXSZsmjfGfx7pztLvNuyAeSBJNC"
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
