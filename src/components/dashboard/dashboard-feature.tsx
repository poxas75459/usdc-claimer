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
    "2kAqs4mEWLdDrbAfP52i1Xv4kfBqUsRK52So3vvCSEN9bf6iwBNKM75Rr4F7dbEkEnHmyrg4kDFQxKMhktm98Khf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NixEUckNuc6f4Fc8q5uLHseWDD3d1L6YSxk17Vr3u53E51mhNomP1dUnnGXMyR32tGgUsEjq2ZDstbW4Y5vU89U",
  "key1": "3N4pEaDmWDtG1njT8eBLGFQ6Kehpgih3eX2L5SLYiTuqiPGeNgpJ7ftAn7kS9BJSVtSXvHKUx6nSEkbEMhfqX73g",
  "key2": "5K1TvUUizz355RTvV8QqKLQvBHpGMrXjwCHM4TbgJLG7adbBxAwnzyp65oEGLgJT6ZWjSceF4mfRctSHAi3GCkrp",
  "key3": "3UYCf3GNMavtK6CPTcwJZPCMpeYbBseLrc9SNhCv1NNokS1Nk32Vpw45ySTLZFFrNtmokwxkc5mKJZyWeqKi8Zye",
  "key4": "SLtUKf32PimABtYzyqFZxv3aKUagkdX2MF1uNK34erxoLffoZNehVKYKcGCYX5No3mCd4xtfutMor4RrmKhtHEG",
  "key5": "4FWwU9aCpL6cH1cZbUDXCZqXY1mZPE2RoZSV8YUoZmz21jE6qS9qA7PmdifeetVmHsWxoudFqCWjx1VfhpKKjp4Z",
  "key6": "YAnkx2N2zu4rUj22ezFaQtbvfa1ywouqwcULuCb2QAGmqzQAb6pxqbBFkEfQeib4t2yEHCiy6BPUkyFxfBEGPus",
  "key7": "2mLo19Abr2BPk97vAmbyApPQirv2WQXZ5skVafiG2Yn8nJWhCVfhDMoBM1o4KwXYQCuiHbjHQQbzmrKHVugMr3vN",
  "key8": "2CDtnBEprthHjEwj6fjV3eYmX3e4hp7AqNQ6Yo5mYneo197ofYyJFKSJPysAXzWVdyX3BAkpEAG61aMkxxrnx72Z",
  "key9": "3sq7WqQaXk1tBmAeGWGTEjv7NKvH7ZK7eQsR7WMfBpUJZ4GG2pzP4DUGztJgD7ZF4h1vg5zcPArK6h59794zti2X",
  "key10": "5n1arA5bcCoa9Xj7U9bGeDs1ibSYvMzQozZ48beX25gNRDJ79wZVecjEsgFwFiz7Y7SW4xGKARtpX3igEffMbaHx",
  "key11": "2RG4fAyNgbmoRCEbH62YXhKkAHnxC5eeSDBBvB5YSquREiCS3bsvBNxzXJnd9pF4B8QCeJfnKR4easV9UKs98Cnx",
  "key12": "4hbJ3akv3rXo8AGkfnziAFddQkVXv6dGAGRgWboempHnwe6dsBFZ1tvdbAPdsKCPZniznkCcgYzE9XMDiQvqcHUP",
  "key13": "5SvMnou84XeJYAo5iCwE6vMApzaeSHRYB7vJpwRkMq7Hy32bFZg2SJU5R6x2gb9WkECVAYh6sKrbKL7rD84cqHCb",
  "key14": "2LAZZG9odziCCXpwnj7JVLndJ94fMrCdYqJFgBg1NRhNU1eKJh5TNbV73qkDhM6GL2beZxyKbRBfr4mvkNBANGF1",
  "key15": "rVXwuwjyE45TPVnx8b3QhTeSZUsAzpYajRckhCwRtadaSkxviXrBtFbFEpas68Bgkx5qMKM8WjQUB7VGkcKzct8",
  "key16": "eku6wxygrrFL6J51ccu5aAGpyEKuThMGVLPo8x36RgoGQcZbxWvARtZVHB9HiqopLknFD5LoK5xCCx1QWub5F5b",
  "key17": "4j9UzaRomhULSsX9Li6eXQGSjByK1tWBTYXTefc8eA5iYDUYT9cHMnBgM749Jt86Ni1zNo2ar7BS3owp4P8mVftd",
  "key18": "2HULv6zrsXSxBgjnZNmfsARbDkMy2eAWRV2ZYGHfLp1YSMQm9CE9rAEv59eKYq7Cnebu4kmQtMrjtTFNNpPRodHt",
  "key19": "2o2hV4xQJP7t7Ur7kuJfsur3grTcpHwv4EY7f8ntgHK3DLccqYURh4KfAtKuyXPe178gtrqLgmaZXYYC11S4PKa",
  "key20": "5PTdhfCd25fQQq7GxCkeRPfhWa1YqRmmoWXVJoPbA8F4HS7MAUDpTa4UTd1jZNWD5JPQ7MEfYC2shYdG1Hz8petX",
  "key21": "56JHjKUgeMRFGsjEa4JrtbKRvK9wUV1Em8EQK5Tqxx3MEwhHBSBgVJfk79MBqPAJtNWDppkB823H4exUu42EMWJd",
  "key22": "28HbNZKVUcw6zyrNu512HBpVrBB8W93XBHVzz6xdqy3tH3AWwnhYSoXsS7TpbYauZ4otRAuxPqVsnLXiWCw2uZeM",
  "key23": "7P7MuDWjr6KR5LDPMzyRJez6YJkbc8uCNBkqbxtJHB5TcNqpwp2yM4gWYywufCSYn9PTdDSq7GinGKjUKpbLJGu",
  "key24": "2yuNjPYonzS3uuNmPGSdg8RRmMEYhQxvuww9K3uXLsnDiXCbA6xegXhYDkc97SehGK7EC1RMN28hzmsJKvDfLzaa",
  "key25": "33DsJoumTLtnD6YTBZuVgaGrXwJFKCsRvXiL5zHgVbKS3VWtdL4scM4RYCNuf2ysEBoUXrZ9memoSFHhCLpMdAXN",
  "key26": "3qcYNihJWqknLg8NQ5rgAGUbnaajLwnzTJxXNypUojpVKJkHouWHGHxgwGZ6EfEuohDomHqQRgoYBohqku4rHnUz",
  "key27": "5Hzeu1CHUNnh9qspfPHqD96HxMfX1UnCUAVb7ge1PDWyDuKiGHJZXoKcs5xJ6VqSqaXPuGSKaUQjGG73oHXJD7fY",
  "key28": "2FtTNHujhuFfAGcjYsTgHgkRnYzFYXSn54ebsizxXxPDo9HLNeNswwu4EfYcwmpEz5RnQozAH2383JK8c6xdTkLA",
  "key29": "5NZzcb31AKg9Php3xLQKjzM8hX9HyiPEthBF9LLkvAnQYnAp9pUxzb4rwhv6cXxzjZc37KVMvgMsMs8fTRqCduP6",
  "key30": "3aeDwm1h1xAfdmQUK7fV29xjrivBhqtkBvWpQc5W4Uo73T4Ea3sLw1eTHb497Pj3NDjnXR9hc1Q99J7f3m6kitUS",
  "key31": "4Bme7C4NRSmm8df8ohXpuAuUaPQhnokt2ENiBYSQC97y3fzg9Sa46WYq4CmMh7FveutfMLDWrF91wEtpKmz5JxqQ",
  "key32": "5SSRedCS2qr7fYusPJL62BrimfTqv4bBDyFooYAy2kZszepGtFsaFnYjmK1BD6ajbQiEE48Cxf7KEeUUR8TQhwde",
  "key33": "4eU57egei3sdKDuRGYx623uQosq1FmBZLexDUu7RnxQQqTpUSH1iM1bd37kDP8AJkDapS5meXDuunVK58hgzDofp",
  "key34": "3GjcGq6gXXszHbya5DXYm5Mv3npUFWyrn6kydtD7UhyR5zVz8XsZRqBGdT4x2EPER7jfWqHgBVwsFE89fZSpBbEN",
  "key35": "4AAzWJMZPnqJoJxzoPqAHK8NF5xjjHuLrc4E9Z7ZDZ1cUn9H6en5K38CrqTD31wjCPcxHdbqiPPF3VVGV5789y9e",
  "key36": "V7zhZ4BKRYH4iWmdpcuH79WmyiYadQsxtJp1evCesbZ91iNDii8xtkDBZQBNppyqGVW5tcqkiEEoPPDPZfipTKs",
  "key37": "32TNSLHLjucVEzRoodPMn6yqKZAdYnRB3zmZ6VbAwFn6czVx5aQ8ijqZgoj9veSY6WLm7jG2by6RBAsJzRBNjwjk",
  "key38": "3E8giThwAUnR7EJi22DtjG9oWx98fBVXzMB2fJb5g8yadrSSVbVhbEw49kEMgc4FKzrET6MWtGppre8SGy1XSt26",
  "key39": "2Ca42J9RrCm4rW259VfmwpNbGUbxVSxPaUSZWhZprm5YdpkNA36a52tUumF77V9QAFzGvq6csjHrZr3Eq7kspSJV",
  "key40": "3jL8qR8fEES6owzCV24FyqP5Lgc84G5wnKbr1Ux1Bi1T278VoZJ9yJpMqwLfKJFjhenW1fT6EtN4R9jERj7QLF7d",
  "key41": "2Ms9zxUfbbR9mKLS3sxcPgYnZQsgh2rHgY7BWJLULmNojzc9JkZHBHQdoaTuciYFAMiJ7cBNNv7K1QvkoA7D1ZXA",
  "key42": "63xD7DfsWDjc2vdn3xiXKHNM3PMSJHsHUXi5XLMjod3c9K8r9rhzN8KwTyCypAbsTtbH8PUTm8YctiDeBbx1uu5S",
  "key43": "5ufbug3g9NPsi6hm5z1ohxvH3Zbbng6AoMmfkZDTdxp45ZzRPo94yGiEHSepYyzJztBvnQmnr159pPwVdBGiXeHM",
  "key44": "8n648MC8WQvGnnBQjKcd5QrScWJuZvpHRtaBFxfeJU6MZchsxKRQZKNGgYkkD1Uzzs8gRjUeRtxkJvFqtniGRXH",
  "key45": "4zKjCd6dTVFLXtZzhWvuvMd3xqnVEVvNC14q1eNG6aygzNRdcrRCUQvEs7XHhzSM9E9waDvhfnW7sDANG3Gn2PM6",
  "key46": "3LpRe3jpjTjnTTXYF17WBtZkHcwoeckt3SCneDBgYnQs3aW1nhnpWf9LGGZcux3AtNaESoYp1V1xyNjzpLopwQ8g",
  "key47": "4A1rBdpQ6KJavdV5prggSiYqcKRK5LcB8L9tB9baE1a8bz4uFjpGEcWLWHb4Bm7wrBWwR6hTHJU8sMYg8zH27qbc",
  "key48": "5AfRJHR8xhkMyLHXMQUsGCo9VHdNzCY7UX25cC4WsRw8osZPMtbiQBWNQSoggje7qbrzyNEBhWpgv63ABnM6h4z4",
  "key49": "rGFGdDkjmjjhZHVpUeCSTkrsTuBgZNJb32hp63ineXwepwmrDmDCBBuVTpcUQSrCnCyqxAabziMKDW2Va11MaYu"
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
