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
    "3vqKWKzi4GZuKXwEHiFp827hY9YHDxgpoCMS2T76yjQGXPinC7WWN1X2qRW49WyUFQwzrXXMboiTEP9L7L7MDRwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imbcqYhzqriyvv7mp8cyWVmz13A81rHda2WYTvCEXGskvGqxjiSX8kuiNMvdfFHTsTSUutN8zVLrH9sB1TUSKtW",
  "key1": "4L39Z5XFp3gkBwjxeZkWKYkkMcdQQjZAFqZSX3gpgyTApAs1B1QL7Z7vscJm8FQNgoSYL3Yo7NX9uiit3YjtrKyy",
  "key2": "3FgW1CUX9uWBQyiZ765RECjwxTzBQur6WQ4Fibo6zYZQ7ESFRHjRkL3TH6sjm3juakMkVRA32sUDnEkT9dMufJLH",
  "key3": "3jGbjZoYPC5gLJa4ZX6ibS514Yk5ShvBLsM9KBD387PZsGvx5Cwy9VoEWMsSQdGnF7FJuAQHFoQK9APjTTMsedBT",
  "key4": "3WcZa6ZyuMTqWGs6Jigoye31eE3CwBezNHTfYMMQTb12KwTHoLgTGv8U9vqDNuqLpnm4uUvDTzvZ5Hj51sk8mMWD",
  "key5": "3ML3xxzHfZ9TdYRDrU8egBsJxXpsJfdQ8YPXpk6ucArRyj3JPoWYAPVnSpjVqk1LySvKddLBFWrLob6YHciCSJpY",
  "key6": "3VFJCVTGmWXnc2Tw9fcSZuxq6BYVFzqu7YzrptHrBzxpNsSGUnKsFj1i8rwVvDEaKGsZst72svBK9Wcu3SR5dML3",
  "key7": "5fj3GSMhzAFZhcAmqc2b1A9RvTxx3yBXqPNQYvUs1RbadiTHBaHh1ERp97iLr99udKGAW8rEhYWgMypYtrEDsuBA",
  "key8": "2CLsfKEjdouRgy72thnKideQbG1ZYNXJkPY4vCLecTr3NJL5SrBKD9SXpcPkiQDDMD4hPwiRLYu6dBmagXAqE5mE",
  "key9": "NsnGEhkQzLsfCFb7ER5UsFt8VwKG1AHFTiog9qcPjuF163sMSesJGtSVFAaqVGc59ReqPXC1aZd9zgMsrHn6vUH",
  "key10": "41inRHzLjzY8sumHmx9QnVEeLMVYZJF8EHUoJPfyHrUXkYCuCPFB8vgqLWZ35VhXvtsipVBqNVKSNmyzjfEtCU7w",
  "key11": "dvimJBWDVSX7xNjtcZnUC6kEmikwFGY2b7ym4GCmcUs7wDWMeKDB6Z9FcGRSsQKfS32Jo79DudSUtneRS4umdZB",
  "key12": "8n4owneSHCWbRx1Y1woERVqnzxhjvfFs5fkeTnNExgoF5isDNAxvutmcbGcux7tiUtMvr4xxjuceJtqKo7CPViQ",
  "key13": "4f4vPcr7efRnBvXUXc2sPS7ty23ED92CWTFpf7bd6f8oBTb5Xousobsu5fBaxTAemEdfiAnhHARPhBkoTfAGW3tR",
  "key14": "3XhHy5gJ6M79txfXbuNZ9WD5CQxqULxKtqD6vbYoDbaj2VURrwMwwTKZxk8HLzQKGT87nS3wJVDYkUtvCL2mt2uA",
  "key15": "5UXtHmx1s8CibautDKkJ3yHxEf8mxACbTVAo2iFP46syWenFPThS6U4Wwnh1Hm2uph6dEnBJ7gJ94673JtJJNPDK",
  "key16": "3jePAjSRjrzV3GVo4dEmN5eR5KAXKgykaF4CsaDDPQ8rGX8txbp19xfhnLEiAx34qsL1G7i2amaDWh7ZhE19iCtX",
  "key17": "5kG7gfsJbsdC22D6dY9paHqzA9tuid2fHSqLcGauGdb9hAMwTV5yEAwqDcJoxp54TrJ15VrsoXCSbr8nXAhK88aY",
  "key18": "3JgiWusrgemLP8vdX6qFVNhBn6NKDWrwjyW6gMSnuHqaMHvjjVuA1g94NbyhCk5ssE6Etjs7RuaPm2dHRAUbEH3q",
  "key19": "4k1ZBJBrsnavUwT9FYxzzVHbKNw5pCpVrwkbW4Yk6jpx2r5mep2Ju7PEVyWYvpKwSsWdrbFstW1AcH9LdmQKc6bp",
  "key20": "2Lf425xjq6AiD3mqQehrUwqzfvwn6EaR8YxiwQraigudAPoHd494N5WW7ArH1xv2qi7nw8VeuGXb1kS4uVMehwjg",
  "key21": "2j4d4ZQUs4jBxEvFTTKG8Yx3Pn8FLpc784drpYqLmX3ccAy4YSTzHvtwQf8gwadJpgNEZA1M2ZBs9o4WZqTuAhgU",
  "key22": "2rUwGEr3JmLKPCpxSjHPsQDJ22AVzB9jYnwt42qF7SVA4YXyc6Xu9mPBGpffUsFge4TiHqeQ9PUfBAyMN6VXYMAZ",
  "key23": "RTxprFCgKV6N599rCoLrtPt1BBYHsGb1XdHRnTaCBXZKVMoqErxfSCsnGE6eqzqoRgtxDppQbsZURmKz1VztZHS",
  "key24": "5rEKe5cptDtwGAfKwttBS1eFsvKbqXxr5PRGa1fVxn9GujM3TwjLs8QeRrMovDYGvXwaw83SGVhtcBVLx715b7Fx",
  "key25": "3YhLzvq1DjtkV3KqSgkpZaEzBeEyn5VKjfmpJAiuXABijrqgZVXtTYiQVUHUYk8n4VxBAwXE8RJbgD3HrVnCE6NR",
  "key26": "488tNb1AvaKSJqKQTCfmPo1cr5f1jHLTMimsUrdfyP2qTkBEA3zXW72GwJ6sbFbwZqsqXhkH8jiNTKqbqH7cXYBa",
  "key27": "hnFhnuaQkx9s2BeJcXQEzVXUvni2vnmXoHvJ5Hp1wnzFMrriEJqXRvhSmmkgA9LChxiLwfey64WNxhjGHWVR1vG",
  "key28": "5nLCUDD2qToffmvsJC8qKHgAme9tVfV3CPmGhjLqesAZKcyrwEEL9ZxMiRhQ2gZx5ASSiukqWqWnRFpL5sW2A4G4",
  "key29": "5jyxuxe4ShyimEjaqmYDWSZb4SrghsZxS8gmmtGiZijJZsqWxMSy6uVWhsc3pGWEa2zREbdrm8dGGYR25aMJwPwQ",
  "key30": "3Fgj924QAQRKiMbBTCLoWTMi6a1kHGE7Pr4RMUB7sCoSEcq5Ln8Kj1y9aTjMsdXLetHD5QJbryrVTBprmusTVhbL",
  "key31": "2e3sMZVjNiTNDgXXjJN5rUfyuf8vTpLR2rcdRenkjRF3PoBpMySmfz6EnScUTi9uaJ8ojNqtNfgvMbvTZ7v26EJk",
  "key32": "2eS47wPB6SMMa3XfYBw54LvTH7QYfXSuyWHVfGY4RrVTBcenEhBqU1ssJmPRAE9E6cmw9fcCgHVyGPoWKJuEbmfx",
  "key33": "36pmhE5SQYjDgv5m1qiJQx2pr8Eiuhh12FUCw8Y8tPAapXaC8Wd6aKXToPEPBg5ER2rumevUp95YJcN7rxbmMsDf",
  "key34": "2aQRMLSxzoJX7a2dmQvWdzGXgPURNmqP6qcTheD1BZFYLg5RsKMsNeHAQAGwbpujFNG2X2hG6W1vH9gmpwzv3e48",
  "key35": "2gwT18QZ3JTredVCyCWsx6h9RcU9gWnb1TkVrJahCdrF6bZmVEZCbEcDRcKh2rV1ufQXjnhs84UzUwKzVj18LCJr",
  "key36": "3Zu9tsYvtpRV3fShWRydz76K79E3PwL8HHpE2upZ1jSGFV2UD2w1vXu9ztUgJRsz6P1fu7WhjDm861gFJgKgAN5M",
  "key37": "2NwtJipjiRL5EjU7woMC8o2TgHeeUQJdDM3VRLLJfvJ7UXWuBCSi2uefXWGuE7psiNmmPo4AXCji4zfH1zVGqD9J",
  "key38": "2Y6GHum4RNWg8krK2ZyKktUZaa3b8QZsBsQdQrrzuo1dHcPcZGg1xw1YaxAd127oQc2Bd3UCurfsQFd1X33zEsu1",
  "key39": "47VcGPAYLVBAmZWcXEWCxAJtukJnyCEcXWSPhHQ17pViwv8sffsNfbfi5u8aMNeZP9bA4siWLQe2BFnWYFFHZXsY",
  "key40": "3Ea4UnRYr5eze8hwr4cnz5dPqDpntKejCouSTjawQq6TNxCa2pUUPi2kr8Sckxh7nxrJDTH4Dx8kDDTR6dUzyySC",
  "key41": "29nngXfHSrkpaQ7Qwj1mMDHtAj6uv2YhdEzst26v5m9iboQCrdgTvrEUSqCGSX7yC1RtnQU73i9y6kVEreCdYsYZ",
  "key42": "33vvU9UiH5349Zd7jaEAyCEGTSLZmm43pc2HNT2tm3mPC79juon3PHeZEkyUqg7o2ZgoTvcAQk6cki386fKn2Qc5",
  "key43": "i7uTiNSDPEdtCaohcJ4N8xeyccDsfLCSkCL8rnpRiG9AZJptFA4gziQch1wTMHX5N9f6ueHZHthAMPzGpyTBKe7"
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
