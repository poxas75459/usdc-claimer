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
    "2iCF7NoUe7UEmNhGTmASobRcxvewfvjW9pXMJS2X1xNKB9yzHcJz82XzcRB7zgnamZmgPfP8tVLfq2zsfqZTjwF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HJFzbQVspJ4EUec67Y8b65VPVyyxvgumd2K76rjKVUfHdTKZcE23mPeVpcCcZLNDeGjG7tgG8WBYuwrBjkxES6",
  "key1": "5G45Q9JQ442eiS5CTFhe1hKP9ewneme1fmSDmm9ov3UC3mcxWDpFp4MqxCuttxCTpWvR4BHbYC9MVDRiRwEJ4Eaf",
  "key2": "4MYEuUp3RPWCJifurBjCjfCf3FB1Xp5SLxB4hjiyWoPbAVcbMjVmPrYnUzjoSwt2KBrBLiMik2jZg9D594zWCpqG",
  "key3": "4bwJvq9jqfEwWsg4NyHNvsMR2MbBQt9KX46r9YFteXfkTevvD5TPVH1XtTKCKxkYc7E3VcQkGSXwpBJ4HsrbxW7L",
  "key4": "5LNtWGoMG5TXaMfT9dpANKW4MxnSNC1BiEuyCmduvaYHVSN75fThHCfcV9hN2DBLuP72pbbtU91GE6LB5AG1726c",
  "key5": "4XHrfJGkZmbk4ahvDjuAiNpry5qPmCY7NGP7i2e9CrPWuX48MtcMj9EoG4zj6kK6kkWtjWUj8mvPSvGwPTQqsEGM",
  "key6": "2kibpfjhAyqNyxS2WwjjHx5BYE3QmS84qGGF2aLMPfA8yLMcNS6A1MiMryfCvUaQyyQR48nTBrCzfdmYRWguC6cF",
  "key7": "482XQ5JZYFs1TVGeNoiTMP9xo67J4kFXbYfdsC6reg4Fyc6AJQEAvc7LsVhiLGZj1zZzRBi6bH2XmFtjbiQuHbf7",
  "key8": "2V4wGGHtnWZpM5CnxkhKUth786vRQG1ZRqNxKABf1BSigMmndRLpWy9LueGtxCN3fvrmStuvajopXezJXjHHtqGj",
  "key9": "4694cjoBY5ngVMai1r7yy7xu7DXxN55Hyq7hRREbEbVck3dxSRMDHzvqZZFw2rsHNXYz2qUNjB58J8W434dajZCd",
  "key10": "zoorZR9U2SuSYyXkz9B6PiCQ1WpWRNSeX7NW9nd2ZNGqRnjPT1uoqjphkY9kkYjoAGvZM7PFdxbGm7u7LhbJHTc",
  "key11": "3ALF4SuD6YAPURihJ5PSukDX9KFb9ogG2qggxkCr8EksN4iB6nEnxabdFvsUpXKCzD36KtpZb5oMxQcw57H2U5Ke",
  "key12": "5wfoiYZkQ7qapzL8CbJQqcs7Gqoh9KNXSr5BFd52N2XcRW8QdnugBNC34DUGsESuhBKUBGeYrkcKHnmNFVRGPnoE",
  "key13": "3PvV6F6SK6fhrYncj7NdVCA7xk28GNgx8nXAnj1T6k5oA5sSBK9nrVUXkRAgB2H4194MPMbj6hTiUmFYUkuardcg",
  "key14": "4bXPY7g9atw2QqBFR1K4ecMmieDPzUvF7tsqXNQ2tUky3g7Rt5g1Y6zSAMJxvkZFdXm9MC5yv2eYYucLQyWsgguG",
  "key15": "5SWfm9fhiPLHrBNj2cjcJD81ZqXii4BQjesNJt6cnLi5CWXAnvkx3rSVhsTK1LcRVsLgfJQdT2647J4MBwv3Qayx",
  "key16": "neTN4jM77WBnKxc7ZNVDDBWeamTksCXfEr5GVo3pbEUSQkvPMWE1YKhpxNVjoaHhgPNrgRyjxbQ8CLVnEBVDkXw",
  "key17": "v1pzpsUW7Ddyo3KfnJ3vf8vbaX6hAv7aJ8roBmHY7yH5TLdh8Cpqx5ZBSa6oXFwqxJw1nfqSB62QThvA7ifP7pZ",
  "key18": "5EA28dtJGup5RixRh7h1AuH8bqfksvDz5ChfkzsrpKoRGfYCdFPYLz9R6BwSdCgcdrc4YggaU6u7kzmkeymSTkKt",
  "key19": "2rshEThUUay37iHsQ6DurTQ4a1rfJ3H7AqvLCgVxs4gPCsRADYFrNpqFR5naqhmdv1B6HzdYBxbojFqxne8feXqZ",
  "key20": "3faid98PgNZq7zMzyKuaxRTmWgJZeVndZM2f1vcg36SJMLVX5Dd2qTmU1zLbzMqz2SHdhczbR8qCKXYNgP3Pqfm9",
  "key21": "4ABTJXipcfbwb6EivJAZTJRSELi3PdiAv4neKksV3WeKMH4697iBtB7y8RWNzRbsKDUg8oxrTsmjXVraKRCyS3H5",
  "key22": "5kfgchk1GdVhfHQaRKnL3n6jT7e2nf7j3AuAPw6hvTcAupBvYv5T1vpP8UASxBo6UHAVnPiZWtP8Qwhp1qBAYkgd",
  "key23": "4fRSAYXCxgm7L8KHgsmYMTVWgf2zTwRT7msy6kPwDLeHNih2GowRBqUZLcgM5bpUUkuPszuAKEufbRY5j4oEDqgp",
  "key24": "5SZ7gMyBdwb7ukc3qoZBCAeQP1TEvyH4ioCJDxnW97BxrcKnJDkaBo45J3UD2hEsg5rb6uh8uhrPvEHzAMPw4tNp",
  "key25": "2LZtVnQnhDCw2yBsGNxZCu54K21asZWWsw6d6SA69uUwZhSpWfUEHyPparXUx9atRbfLKQy3suqM4TXme197bRvf",
  "key26": "5VKAs6FzPvBRA6j9eVfPS3rwcfxHnMf1Z2FSY4DdUDLnhpGbdyjdr5fJiNWZmyWCG363KryN1YUVKBTkmLAFWWER",
  "key27": "4TrTUtcBakKGReJVRDXNhKqTTJo8mDLJmZdte73tgck3iTkE6VzKBH7F8Ww9FpXSrAC6mxrer7oHu3dz8rEUaQ17",
  "key28": "4ETBuTCtx9NX5qNL96HgsccPTrtMwTbLg6uy1wWTYxyRGiit3Lb8prLBW3VvMWYtnToPXR5n9irw5cfv7PzUgvmh",
  "key29": "rnaawv9rRAWLFrZbMEPQvr3wpG2sQcaq2eP31AKatrue55uazaheqtPMnKbmuJWmGcu4VrZ8mWr5UMXUQYtpyyH",
  "key30": "23F6rdxaD8KN4hpBjcKo7ziDUh81AHnaM5XD65ZT6te3EvK7QrX5Rj3XZ55FXXctiEVoPMRHrB6qDNonLxscLiKS",
  "key31": "5VCykwKwKYNbUn1dY4TCA9BtZy2BWKVudKy3B8atK1qy36ALMKHnvDivp2kyVn1vPrQET9KHpAhP5VfvgG4uSMU5",
  "key32": "3FNoqXh2S3YzQSB78wbDGjK2or3hnpbPpwdE45Dh3YAcDZtdRTnjt47W6CXcfN4sZEYEZwrk6WvUcc34hK9qRhkW",
  "key33": "56ofn1rshnYkRFRu5VcZuqHKYYUbcBi8NpACy2a7S19JUhdg4FRUA5xCSvTjgj3UPsDQZhjybwU2jCYLkKD4F43S",
  "key34": "zynvB3167Xombuxysr8TdtB84ZVhcCBkWPWzCcMRVVUpyY2Xjqa3jpXAGAfRx6H99r1BSz5ajowQWFAbHrwqWGD",
  "key35": "BknHsGHsZmCk2rY1vmdBxND27pTnWxtFzC1LZ4GB2c56FuRYYwwmGno1dUJ5pD6UWPp6myqRN9aBkbr2NtYdZBz",
  "key36": "2WKeHopFHAwvYfB6Kx4icDmG7SXZrUYr6FpVfwLG4uboSTjDVyrJQuM6Z2ftdLuWsuS8PBffGoDmEo79L1o9Dqij",
  "key37": "3VgZqdgjzNMudKvx7KUEgXk1x4mAZBm6PMtxNTBBX7CTbc3psyJ2pyojch5RqEjy921GJ9csVWyMP5k9HNjgdXm3",
  "key38": "2YboWnxve3z7vDR7J9A9wm5JfmoXwPuS238D7Q3wQrradVZVGPuPtriTRBuajENa5w9fegM95NKi528AWkSpHLde",
  "key39": "46U7czQGpECE5SaQxGzosgqhwfVef3sseWpfR3reBnPnQTkfQL8zj9g69ajxsxrfh61oYQTRmA7CKGhXVEmJWN4L",
  "key40": "2dKLudNMPSJSgmKqTh3jmhqSQJvkS5tmJPemNa6dSAAGywWrPVKf7msxUXHtHpgkyWt8TnbKQtGtf2xPvtZX2pzH",
  "key41": "4K8N7UQrVjWsk21jXTu9o8RuFRH2Cypi9heMhp9wuHHy7yTW45ywRdLeyP2vWRvTP7NgWEo4p6w8RNERwXs3sMxp",
  "key42": "4m8qScuXQb3LRhLqSB1xTXfVApN7jiKifQoyFBu3RYpG5DVE1ViqBLU7VRxjwxinyqPHaoDMaGwMaA5BtXC2E8G7",
  "key43": "34LsbpCiTZFPwVXAjP13obSiq9eX4txoUWJKyciqPiAYKVwHwHS6JCsJiFnbdBrBeasoTT1d4eKx2rm2madcB3Ww",
  "key44": "2XRghZV1sdEUSNTJ3eQMLaAmBZmXZCuTf2fQmX612PBFQokZ8KZ9jgEdtMD2suPG1ie61kj2dms9GEX2YLLgSqZd",
  "key45": "3dfzhbN6AfXD2HJAu8esmAqww77rZtd7iWrNupc6VYzCU8gtHuJLrNS4sVJwQRz5PBGBM9NHkuv226RYVkEjJGzW",
  "key46": "3n17fmoeDjHNt4XadUi5ghEHn6qBxSw1tKomztQf7eCAwRLsc2zjuVW3DodYAHWkahyY1cHPxr3FKNpTwTxtn26N",
  "key47": "KD3gjjCZxryZ1K85W9L5TbJfGx4Xjn6eQpQnFuCyyhZ3x5ZjreWCC68j6VacfwAPQ1DwJFqvH3jXBt1KHKotFaF",
  "key48": "5RJwQb4Lkh5CjuTrSJhZJu1PuCAZU3vaPMpoCHJBNcjsCnoNuK7kzhL8xSUCWUs48qdRwjFoHDgH9bEcE8eKhEzP",
  "key49": "5GUTYfpCQ6ezdZzv2RZbUh8WqisHqRg8cgLy6VRmPY5cZoSzHsQR461ufTCpBvQUYPtTG8A44kMgT5tGdhm1977n"
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
