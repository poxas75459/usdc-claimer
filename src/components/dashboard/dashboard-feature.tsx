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
    "5KyAXU18fVDugN1RFK3jLuoUeci61ZNyrj4xxQkGaAiFmuqJxPXkbGHuCyWis6AFuuDFQNTmQhnx2MCDH9WXd4qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51yh44UoDvhvCBxZkkoWivuDeNHWad2YzxYEpVTffprHX2FV8wW9KUkCQKBPtuDAhmC6NtExp7YEzgNgA9kZF1Gy",
  "key1": "2QEBPEYHkcXzeDRtZRMLQAFPCMpkPHNCRLvZVHiAZRoUfVo8f4AcrivrTUDRpPGi98t4EKaR9yFSLfsmUbNYGgmY",
  "key2": "3wfaDtgW8N77JgjTgjV58m4uHFdqeKrwXPXiEUPF6CkDHLqBNkGghcGJasoF7yNFA3fPsopCAyaM2nWf5AhjwUus",
  "key3": "2FfNQq9svTQw71FW8sPBY19qUZNJusmVwo6gpGhUBSVP8HKzzUCRaoLsaJQautnt3wX2VcNXnQABSzVTbFiUNrd9",
  "key4": "4UAjGcfNzV7PM6gVsKiSY2PpLoQPfLz8kLMHb11P9PcCtsm1dYYtfcbDr6EZR2Ssojupt5HrJzvCuL5tWJvkfRsQ",
  "key5": "5vEgrRfuUKEtsdKQumjWW4Cbgo3kUWVhXipWPsX2kAuc3CeSsmeKaTbLEv8KFvtvAiwY25fNfdddf9kuryk9f9PQ",
  "key6": "3GNZuyzMcef3EPtSdZ2CxhEQSrwaCoVjdvpAadn6d45Mx2UDjzPCak7TSWqLymoszDAGPTE5LqoLn965WRotnFk7",
  "key7": "2KBSJXtEwhroYUNSJoGASWVkDi6iTkA9tMo5SMMDR5T1cuoAfsu9f38HuWV4rWwUuoPkhEWPSBbdFroboJiHaVs4",
  "key8": "3YpCTb5c7HhRKsfe2mo6YmNW17ofCk3QDwu4LFKdk5K1Ly8Ks334yJNikb2NRc2DiFASpDkgBm6Lzqp2qjXt86Ap",
  "key9": "3jjS89BPbq9TUjiEF5NSfSYAg7tJLg1aTbREPvgxWeR2azPrVmEDNw7Xfx4UgNVoNjRS5ZAMvR3ZcemQhcQAJ4RD",
  "key10": "5z3i6qoCcqm6UTjo79n7wi4JuSZK4z6rkqjf6ZL5fLqhwZWDVKGbu1wKCigWsLvH2cU3hC1Zk3Qb4Q81zQanLK8J",
  "key11": "4oXwjjVSy9yCGJ5RWKdjJtkkemiLWcSAGMs2s2tdbVpBPrbShdAYL8DQJAoFWddwEEYQCz1nmv3ESCb2LTWaSkYf",
  "key12": "42wjnHuH11FvetphYs4nd8whcCtwwRF7KRHkwxxxr7GvTaaFuS2WpqUKjp5g16dQ8ykUao3TUnH1eNMZcpsNHBFe",
  "key13": "3TnDUYB2ESaAuXWSjiwwEo2aFSBzcy6ESDRyy2mn8GEgU7mU6ak2swC6rFbQVJivnQJNtBbsiVoa5yD62XP5ZQAC",
  "key14": "4RdwucnxkNrGqCc5LR1mmFUBQW7UeFv7cnBziecjXH8AAmuhyyr79Rmu4fGz91NDNoLeRPqs7QB61Lq56ETxWU5n",
  "key15": "5iEqBjNxYHPtJvoNP6f2dN8AXmF9fBeJUwbLom738VRfXsWBCU3bTHcac1VUwCFNZomVWPMsuNam3qQAYEb3weWe",
  "key16": "3Zy2d7ncqmQccEq3qTGdWdacByzRquxoqUTRVa83CRuD3FxQxJNy6q5TxdMNseRMCmr1JUyGDpnPnRH7Fgoq3z8J",
  "key17": "7BbmsvLWeqhdwGP1Bek9Gq5gVYZ9bPa29c3kohKNi285gKUMyBC8BbAdzWZcF3LfK7rFXa6AnNjwm98ewikD6Ws",
  "key18": "ZQt45poE3wHNfazgMxzgx6oq6yCiF8i3dUeRZGsdxf8gUd11CkZYNH9DG55ybApBNVJJparbEV2msAYeqJiMKJ6",
  "key19": "5aokwFYQ1qiZj7jUkoJH9ue22AjvN5YzvGMQHMLsTJh8VhUd5sj9zhMkkZZzQfbVZTKtNK8VSvJSGwVr5NfBSfhv",
  "key20": "66oFa53D2GoW4ipo4qXFMAFnKNwy1DXFSAA4S6sHwf8UnBLN2w1mfGcxGxBX5UYjc35VrtfKHWonf982ksycJLwT",
  "key21": "2X4pnaiYH9Dkqjr8KLk7S8SvLVUUG3YWXN3k5m5QYZEqTFRkzwBXzNSp79MSFa9j263Chu83Ta7wqytsRFNUG9Q8",
  "key22": "3yZ8hwpYqE24N5SDh83r1HEa64Db1MZNyFeTjr7fkaX94oTEsW8CauFNaFgUaLXjByvCSzQGRqepMRgd7eYVFFY7",
  "key23": "64dCRydxyvfUzVkmBjW3svEN3xeUd7w7636dAWfSCQhGgCB4HK7x6gegJgxTj4FfMFscgDuE8DKZtDsEyk3hV6vf",
  "key24": "58kGjFHRHGDdLpenWPiDkBtvxv5daxtxAAhonPsPxW2dXiysVeKYmp8gNNXL1uvbKxqb83jd2aWm3QN74u7RcjNZ",
  "key25": "5VY5kyiz9aA6zA38QonCyXhZCidtoG35tBWxjKDufCjZgFuc3YQQE9Zx9pVHkHMafG1bmaDbao7BCkVYA22Ynycm",
  "key26": "23pygJMRAU195KFfSZoMNX4DqRr4fwryNh8DvMQkJC8X51VBNmzLdfZGHRRHDLd4CAQZ3UsRHeynL331yNbuBvpk",
  "key27": "3EEuCtf35RuPsVxYyzPxbivdbchTzbYgtKuY1YmW6XHSJwexajcp55pXNx4QgfbgZ9eVBfJjzjygKWv63Q2qfXeW",
  "key28": "2eGnJ2kmE2JrbzAW7FtdJP6QfDJQ15h7s5vKU3ZZNc7Xv7LdUWEG4YJYY5yCwF9DAawwqUrM6peg87HpxttniCwu",
  "key29": "5MjHFgSuEKQT8omPDvqq8egFAqSz8cK4eXH27LWii5YPe9FfXjFbFqZwJonQ3rpuDhaG4B2ZBipoXPf13uzu8jP8",
  "key30": "5KjhgsWX6q2HJDVzfPz3PYHCmX7DL7rMezG8xV14vgLBy4ZrrV2Bb9BC2Ei5WoE3A6tEg2ujmLKuZVbSSVJYy9GP",
  "key31": "3NiBgKe4ibBYaTgNCkhqU2ejoNhs8eCAJP6dWam7ekKQJbcERxd8oPmvV92Hb45Pq9GFnC2YNnRovg9ZkFJF8gpR",
  "key32": "4JKHGkAx942Wm53ivnp6UQZ7B7VmDDGFvsunBLyeHrgKV1FMGumjd8HBd4iqWXpmhjxw7DGB4aneKyqsMnUbstjh",
  "key33": "4jwVo9QkDTZQaqxYCu6w9xapf4L5wJGEVR836dbMY7ahHZneu7uev8ZT1gf391BfuqCe7f1oVBjPV3tt1Ru2uWjM",
  "key34": "4SnwAEJ3jxzo7bmfNQ9sPqexfMT78gp38SwZ45ATa3yeJeRuqjWR3biZmb6FgZLALhzQQbxgmmj5t8C7qdBSQPdn",
  "key35": "4zNfXFB9HSc3x7Q8TMH1tRzTYA7jUsrATC53jceFkPrdd5KX98uDZMtk68iMVzyimDvrsSu5rag2EzkUeyrFLdXb",
  "key36": "5BFvd38bmy2WRwbuSJc2iBcGsQWuHEPiae6Gaq2nVCLbhvGs9DaztzgEJvMvciX6cCmLLbTqe8PzXapBQkrzfbD4",
  "key37": "5r4VycihUUeysRPk9yECa1yjsiVpuHn1Wtu1WDoPZWe7VrAsJHKBoABZxwzZe3XB9sj6Xxgf5Y67b3V2A8WKqyfy",
  "key38": "YHyBa3aNmWT5UX7NtZ7mNmJt19FkBGPCpJYHzKScptKZ51nqAYQnn37us6raH8hXyjbNvttNhcheHf3YNxjx1UV",
  "key39": "4dgagdB2Jpa68kowB1PRd9JWtniUWagcP2prA9xbeDReEWacGtwq5za3re3GS64KkxSftcV7VBKxfXkdNtRYe5ax",
  "key40": "3zWZKUh2Pk71egAQd9yXTA8Py9x577yrYFRCwotHiQ8x3DHkoX6xmExdTyPtiNUrDGnnP72YQhi925b3StMnwvfW",
  "key41": "4s8FqJ2FYqotX1RAcq3CNcnSodqNzjaPbgxttsm6eP9nfHSpLxWxWnVjt9itwonwRFDViXM2y3pt5yj2dXnYUegq",
  "key42": "5SYxZZToFVzpx9VRpT5ihCk5djfHBmMMqghdFVuUmp6uSzgt6L3WXk8Wg9wwgre3WV4mQyyXvfLwdqu71AR8gZKY",
  "key43": "4ZnSux1EGh2Fc1P59Kd317KuYE1pvwA1JAiyhnFsoqJeXeDpprdrgLW2BTdcRu9VFxZ4VPfVndj7xxcr2LbizqUP",
  "key44": "411pZ1RwsSvnrjyn6YDYBiKdMfCAD5h2D7XWsMVtgEv2TjpX2NdahQKnHCK2MhAZFnbVNCfVwqhswoDXApEQAbYn",
  "key45": "2hJMLnWkzUKoJv2gsy2cHA241zLybR3fYkKf8KPZAJonDsj7wfDNgdo5iSN6uzM6D8XVLARvLuPd8yw4XVcAr1u",
  "key46": "zBvy5hoDLX2WgGaeByXupZWVMYXX4x8mtWZBxcVeoSjqyzzabEMr8Pu3xjpuYS95xwExs18tCiwwcyUxqKyNpEp",
  "key47": "2ZSA5HWrRU2tUL4nhcGWjutr1QY21fapFwyG2rW3pAeN7PzueRGayz4pu987oTyuGrdQcMt6hHp1FcLmYJwEfhRU"
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
