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
    "2oZZRuQMXZ8KYgVt8PfUjjMomYUsxfRtJRvfLxDdDLwVJL38CK5tsZ9bZ7Jo3UFvQ2ghyoV8MDLARrwv5SYvYoCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ePCD4dXDD2MggtF9AJWNBkG77e3gzpStnqXX9VKyB7PDvzrF9BroCXMkTBpTHoEjkeTcCUk8oG99YKu18ftMWJq",
  "key1": "jBxJdnGbTya8gpK417Tv4R5zqM5s2cpQbb8TyCBtUJQMUruk9ezFrUZVKYzVByaW8DgdsuQoN72Vov12KJCsZTz",
  "key2": "3poUr3gJDiY3LFfKC6a8NgoYYkkov1VaAL2b3dzrijQsUeNzPeFSv8zGVdcjhNu9FEKFtTR3sQsDRr2WAUid7qUH",
  "key3": "22Mad73ZxxRLpDkjz2CbpPD2MTJusQJUNLcQPUt5odX2enUJxuj3hmZEnvudy5nqMttom7oZznGbKfZKcoek9xUJ",
  "key4": "2m4UXJjShDagLTCSoxLJepDnQmwev6hySvC7kKyAqBMQBjJoiPbj3suCtNM48JEN8TQjGWsvwCGgnSppYFZgd9Fr",
  "key5": "3Mxh3svNUF9sx7J4KDdCTNS5DZ6wSSR6aQdrkZ8P9kDkaQtkCcmjT7NuMj18vR6bDem9HLXhBLrRkNgTkvEvZQ5Q",
  "key6": "62kNhaFwT9pGqwtsQj2T7HKnD4DrAhuVEKAP9AtU3NikhgoVWFnzcVji6Pn7jToxJttCbt4itL3UstqG1NvuEEkp",
  "key7": "5eP1E9VUn7h68sbctNe5s1vin9URMXvUwrQ7wu2LWW4W6VFZqjpUa3jfoAne3c8ggGJvCom8ryC2f8nHVN7VYWyN",
  "key8": "5gKhdHJQy7GQDjGeJHxENYGiXmuT88N3vWSAct4SpqprYUb7XvVVm5C78QdKnup4EoCjBozpAxr6jdcQNzBTYXoL",
  "key9": "oHf4VXcHScAFQuNyoSzeCUZFcW66Vy3p9yDXqsjnVJ1RGUNgi2GnjPynLUJfsymynioEc8u4yZy13kBWCXVTYzJ",
  "key10": "5wjXkEBEu3AsnX2rfLc2tefWmep7o7ZhVU9f2XCbLMhCKcRzivm9EEWYCn2C1ScxUk5L6fsXJEvaYaZqqeve9EXj",
  "key11": "3ycuJeanSCDQLSgpnvzN3eudJTwGiRUD2pNgysg3Cd3t7kh85HaNeoLWmuuA8pDe6s2bY58BwwhCWFkQLpG2tzfu",
  "key12": "4sHwSh7KnEjBK54FFfivsz6gZvtygikziY6gW7y7Vi95owfAiNdCLqtJe2A64DKYE7iAvWhadabpPFf3NQJkFtLW",
  "key13": "4oJ7Kn5KbSxdsvm18WtD8P1xSS4PbMUuZanSEJkZtb1uAbjTCxTxc6sLX96ZBbxTKUV12f7KePQVvbxdyBYYqvh5",
  "key14": "eovyA2QHcFBy626K8wAVuAuHhQHbuKC6SVVD16ycAXXib2yfjAMSKy1TxuREq7LNbFwto9nqnWidT7REMsrZiN1",
  "key15": "5hn7XyXyZgJgCVPqbkF1bnxbMd6vGkJDDvcV5m7hfi7dX1KmazSiSPAzy3VsSppyvFSQuoRZ6B7t3SpFqvhtMXue",
  "key16": "2bNfCnpbojVB1GGJtGibQ92W1Kx76TkGBeRJgQ7GEdpH5tX9Rf8bHJC2F9Czih58jKQTJsVi37JseFRruFKcfNpr",
  "key17": "35vamTJRp3f5Gfm92PhivxpusPmr3cTS8V7NEbdHz3nsv5zR5S2t7qQtTPueVxti3b8Vj5u4phBwGjNSC6AXjgRS",
  "key18": "42EC8uztinVpm4PgpqiKnkUT8k6LF59XHdw9CqktzPHHe2UidB8N1E2j9dkqWhGCzstcDSmdkz9zGSBNur4YeG6Z",
  "key19": "52XRLA1SzV1xzTS6WpSP3v8pwcfB2atNNh3SfwpKsVgSe3r5zsVMnGgvKW2mk3JGr1ZsujS7tgNyZKmxc15848uq",
  "key20": "2dBRQosH24DL6roRFBAxVXTQjKMmCqTypzrcvSyGUj5yCMY97qXDhgz157kTURnFFF5oR2om7sHSf76Cj8QYPi2z",
  "key21": "GzckKhNxABJR8tirmfpcPbq12k6ufWuY9syLjHS3CvoKbsmKDthggweyG7gGtB27Y6ZrCByYrCJGfzNKhjEc56f",
  "key22": "3Eig9QntELjW13jh5ZN7n9jganzmfDg635E4LNxDSUQVmKR2DVvFUJQZLh9XvoLq2iiwzkrhD2LbQo5xemqZxT1s",
  "key23": "4w92crhNeoefTMS3Lse7sgGarUrinARRi8YrP1MWcYmX1BmsBdj3ohYW5QpMGrnfEN8Pu7mLBsY2hffYtCLhLite",
  "key24": "4a4bR17VYDGCRszJ38WWcb5Uhwv5DEakxZAy6aSwFYXe8NBhrSXD9DU7vpC7G3pFzoB2mAH8Pfo6Ks8oieSwVAcf",
  "key25": "33FDXAEKaANWgn7ZVZfjk5DRdRwkiYYg1ieEKyhgHL12T2mPNHzND8UUNKEnfwM4K3kGT8nRiUrpUyzdsp2At9bj",
  "key26": "3QAvNxiqrdXkCSw5H3ECvy5FZ7xxtTWd2cFNyrn7dJ29EZHf6GHxYgsaZqwv8cyuDdAkU2dsLcR24apgFLaxttVv",
  "key27": "515iHUmnVeF7Qxzge9xVSK6uNSysCpGbjPGG1RB4soFhLhaoiQgkcbUrZBqEe2ibRkJjxpwcPVQz3tGPRreyCi9w",
  "key28": "5HpaBwpTnxw9XaTpPa75kNwYr68R79EH7iWCxC5cBCUTFmvfhB1fHoq2KYkwgC6WoWj1WfNmqfqQgVeGQiHRqe1m",
  "key29": "381qYrcRd8yHHP7DkCWrqSkfzW7WGcUTDWXueAPetHamoSyfL32Xte6qYHB3BYTuwDP9Dyw2orVVnAao4hUDycVu",
  "key30": "3ppivS3A6QBj2LxMYJ3a3wBSHuRm6tMVuxnQbW3dBGMeS2t3bQ9y5VtkJSfYftJ7G8eLJBkjMCX6YVbLEv74qv3N",
  "key31": "5xdTm6ysLUgkCiaovTD6fa37UqukAtcPQ1ziemFK926CvsLMhdNKDizUkEGsPAnYRPPwmHVYPeEH2mHLsJ6JR9jz",
  "key32": "dCBUdEdkyijLyAt2g9YTi847SwRhxF4gNXVvSecuHH8jkNYGW573c7izHbnbdf1VkuhptrpugepqayTJUuFXeyj",
  "key33": "5JQcsroHi5rQyfjrsC9T8c4ZVf8HikgNhXwEj5QvG3vWjfpp7XSBmnrANdDYcJXxFQecdeVKHPegYFv3KoEFUQoU",
  "key34": "2oL1dNG4ng7DxDLq8oUM2XXyEP3hFVypjccJKMhFjjf4Ysnt7xDQgJL8nxWhBwaPrdGB3H4ssnw1vtZNH6X3kueC",
  "key35": "3smMNBpw88zHxCN7EkNaXhiQLfKfouHwxX3wrpbMMJ2hagYoGraAZHcVzcpcG4X1xW49ABPxx4gkbMTL8ruSmmTh",
  "key36": "5Bak1iFXvkqAvpTNqesnA38BGgpCHX23LDYPgaLfqXA45As9LBng42EVu9gWBu51RWohwmxZVkb7s7NT2mwasrrY",
  "key37": "2pzHQZykxhf1zKyZ7B8deXD7nNKWTigDwRib9LLSEBPm7Zvw9SHe8U64JsmcnWPSDNbb177cDKE6MBrz7p5MkMwx",
  "key38": "3TAi582NwUXnDxVHPd4zf2THWzEK78jEFphnU3gFgCGDaryGMYNfMvxfwAnmCfFD3ypnRUqoYubM3V4bQa4VhJan",
  "key39": "4SvwDtDiif6QwKGFpR7mScBanFQKXPPC6NM7YwxVExqrfQDAJcX4ic7AzGAmXmo5AGt779J5FRh6Dw1KsEKog8ZF",
  "key40": "R1PVjHLfpKusNNABYQtZRXZQKiW6b7Kds8wV5JaQzTUs46UMpHQaEnTGW4UzH2eh5FDYpyKH6mkVVvuwmo54vzG",
  "key41": "4nAxKaSRziBBnBmRaekzL7ZdcpWToGMbeUMJ7tZuh9gAc3CsVgHz5nf2XKJfLYBCNHQkPj5G6uKh9obQvttCewPB",
  "key42": "5cQYR5xS5B3F6TeU1mmydAx6w9aKmarpx9FEW4w6T1pGBsJBvGGJMaJR6XVTeCT1tdf194FzB1KDuCe3CHY9iXFE",
  "key43": "37sSN6DH6X774AugivCE67MQ9fxpn91hJFqWLnumpLEkmenDPT9odeYmA3gPhAtmhoTABdByUV7bqRfUznjbDYGh",
  "key44": "5XarZSPUwQ1BVRQEn4tVPQLRJ4yRte95AGcE5bRKdT4XAMUWNnxQ8vdye2WYr7qVoUFpccfCst2rVSYpbGR1Wesv",
  "key45": "3t3x1JhzVBNDgJbko4xC1SjU3jti7Vnw9dEzAh6omgS2H3zk5NpKqg6fccXhDFc9g2kTdMzX29vAUQWym1Rr1PLp"
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
