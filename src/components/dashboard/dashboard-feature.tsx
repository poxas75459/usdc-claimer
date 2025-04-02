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
    "4sjryCA6evemWi2eWBW3gqrSf6M4Y63YF7BuqDcr1daj8kdaqsGGwwouhqMbouVz9E2MDXMdMyu2ZFUMHLmAwWzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sxmx8Wm2AknLdxLs6EKDtz35ZDZES26NP5J9rRctGmvCX2CPVN5gLKZqmfE7aequVNTCiFXPWk24C69dgtLuZ27",
  "key1": "1z6HFLp6DeqGmRgTBB3Adf27AxwfTTscv41R2jjyJiM8MzjagQWZxtgqUq44CqA1BQiASy9yoUGgaJCnse6UcYe",
  "key2": "3vQkmxgRxDj8ifQT4wpxrgR1NhCjZpXsDoBBWKeqhxEpd949MrUw42rkkgLbAS8VWSewem1JHNYHypY252SaENwx",
  "key3": "377HyC7X7YmXfET8pY8iRTvGBNPejXvtQ8MD6CmUc181jeLH3XeoVQWxPEkVcmboHJZ9bkjy2LrG6pbhfqv4kW1j",
  "key4": "46J3LwbVYCBYY7sWN5bAEtAfZrLwZ3Vvq4HSApYLNvD7vXU3ykCH4b2ShtdaTxxn5cZtKnVzJucvbjNgDenETVBp",
  "key5": "2pj32atN5RR7b6RCaUaehPFmP54bVVGYYkHu24R8WK7CArvccRoJPySkER39VtajrTU2ME2LgVuKQmuEuQEAo7x2",
  "key6": "62U2hNQHm4HrPJFLzcSEaS7trk9ut3dGi2XLHiYufL2wYzS8u8md1kW4VkjPTbxQvJfQ8MaGTYfVCVybqNrGKM6A",
  "key7": "3rgUhhQ8uGpXBSiLtcwgB3ogTbT5t5TcLFci9rmMVU2owF1YrGkjog96JW6S1rTtiYCw9dpHoK7hpdpJjapLCS9y",
  "key8": "458chcweyALVRxGxU1cT8fEYFSrhPSkW4jLvZUQiechsJbmq2aVkF3nnCxuKCQ6zPdJBZhNZVVvFJMrsSr3e75DP",
  "key9": "5nRXdpWoF8HY4xXeDMDx6PYXfZXRXBKtWS6qmaLqbeniBKLrdTQ8osqiKfy8Yxno6Xo4Emvzjn7BU28Nndr3SNgs",
  "key10": "4D2GwMKmZZtQD3ZchcPmfjPD58S5CdLoHibQberCw4qUR1ewzLx1uQ8zAWdZofynTSQM1XkcpxyQ6VrqAM2ooFZ9",
  "key11": "53szBuTaFmwKA8yBXuNJECWzHdU1qPwPpE3ExoRyqZLg67Z5Gt6ercRLeYNwNB7cCFWmqan7E6eEmVj439dAUmVA",
  "key12": "3DdoBWD9CvbJS4qMGLtcw5dw3z3NzVafCXppAZdVc9jWn8NQMib8PE2Ni2ed455ujees7qLuyKADPGfu3GJcY46g",
  "key13": "4a8YsTLYabZv7vH865sKJpRAP7Y6LSrd2bugLzshGPJzuYrcKMBNkTviKFWqkkXZ8ygbk4pyBEBxYiXUrhcxNvWC",
  "key14": "43ojb3H7Rvy9HifzeG5bAx62K5Rh6w2qAyu2Aoc4yKQ9CWGChbvoaXRQKYQPyYFaKP8X8toeDPMUNhXLjdE1y3FV",
  "key15": "2mmqRg6P95vV4gV2UPxsHtJobHrgvdzuvpizaqX8L8w3o2xUZpQRGsQvmiUJ2t4Qko7Ddkpqfp8FkkoT3VbZxrs2",
  "key16": "2rEsqLoXuEu9pU4sGBVjRB6Gnr2SBiepBqPy2BjMmK1cbgC8M59Jffah7cQ9gRNbR7kQXPPSuM7RkFhnf54yggb6",
  "key17": "2VcdUhcFak5bggTbbS4Rcwk919z6JvwiDkusMuVvTvR6N5e6gkisBynv89SFvQvT51F2rUxocFtFAS8xpTySF5UA",
  "key18": "3NPcidtkrwUdoKBScy21Jpht8i3iSnKKycoBfkiQGBzMbsqBcFykD3XMqpqRBaLGdBAyyaMnp7RmJtMwzBjJPv3r",
  "key19": "4zG4k4ai6Vp9bPjCyinvzjAvRhVHEiW9Pb4ZXkjkS6nDVMhZi85UwHskoC8EwS6Rvt5dnMAWcXJWZu6QbJLXKPWU",
  "key20": "2Ur1RQcVVVCW9x56B6Pku92LWjHeKQastN1wRWzY3WvS28UrYwZx8AzexYsNo4JiugHosrmjffo2jxD7qrAqgz5i",
  "key21": "319KdWywC1JTCrGcnj8MLrbUDygFHiVRcmDueW2ocJYJk2ip3vHcFrQkpZ3R83h2FyLjcgsEQUSuzvJEaWuxXtuh",
  "key22": "4agnhoVXjrxkmZLVsm1YbUveeNGquQcKJTeuKtiPQZAYEPKscPBTJ7Cx7uNeLeJdSjGAFHtjB9ztxGxLDofgtft2",
  "key23": "ckT4ZqWtRT87YzBVH5Vm3XYiFfG6btmFDQHRe6mUzkxHN8gNYajhFkftLPVHEPufT9ZJQcTRFiqhvpBYfj8PXnk",
  "key24": "2CX4LW4CN6KcuvzaBdraf72Wh6JFvGeEuZCMAkJ8ZBpghNs1nji8CRJtkJ4GXtqpWkHivpDv5mT3uBtg2tcSM5FY",
  "key25": "5jCA9fo2QN6rmAgnXUAouMHXE2QLjzafDLCbSJxQ2a31XxGZDhZE9MbYUAC94z5Wyex8p6cmFDqxb1ozqgoxcePb",
  "key26": "ZviAmnWarPuQg8vF1ygpQ5u6cfbcU3MLZqti6okNKSvQ7kgHCW7JksthasyoHM4dzF8HoVnDwSBjhdhXubXUoha",
  "key27": "3FENKEjijd47XWKJ1xT9M8yUDxtzm9DvzJZMJ7dNeF5qZkkLh7tehyWDHXtGWQ8CPbG3aMF3V8hoqFG4oa1Wpgdn",
  "key28": "a8GH84qdSrYUBjyYTYPga3kR6yMrCE6JkhdYPehNABufQwFivzgjbLMdhg4DoErzL7NnyZjStiDwGykBjBmaSac",
  "key29": "d33pe6pzcF83mG6DKyaSFQbypZTtC2iPD9yWpEYvoQ1ba2AWhRZbCp5yumMtRuWrqGTyXNknSNxgs4c6VTfc1cU",
  "key30": "3osWD5bNxtyrErBqrzvydxkti3n5j5YMpt6gcMe2n3Akd3RUgeK4joXdE3uaKunYbwPfvpT8yeQ28CSsQHPh27J7",
  "key31": "42Cd4Fjiqce8KYq8CM5ScPFsRoRMLrqm9yihTRbdEcTZYEq89wis7tW5uLQjaUAFnnmjgge5Vy52rZziwvjN6vRG",
  "key32": "4iCPLJ6rfHVcRa1DuoWjo2WdAhrjL8dSg9M6c5WzspXzevvcK8yjwxH5SByKddbkfQVUUL4KEzU8zm2S79heKCTp",
  "key33": "oi2PG8EwNEuJrJE7PGiQ57RSvxCoA54spE8iBjavHYa6BcqMbyNPepgPveG6HSbyc9F728G3HYNqKPEPGDFj4km",
  "key34": "2eEhHhs3yTpU5dxvjTPbZJL1ifbSyzbrwPJmJvqqcTbnANEYLC7a9HDCknCdM1LoNKeZonxcYwKESAoSbhbsuj6i",
  "key35": "2NDuNXvXW89VyvRaCrBs1pZPVa6AqYvZHXYAKra4Q3zgXJ2FPsx7ZjW9tqV2HPB4rTcfj7rPv6HUWhsqNxqW6kTW",
  "key36": "XYJPmRyRuqXETFpqafpXRG6eyEopffqMDsztkSBHnzg2FbeHZKyYAbMGjMyFVZQA1Wky6dsjhCvntVyxmVuJphk",
  "key37": "3EHNYRfa3zcL4bvh5QFor7FN2rNBx8eRs1yRcVoka8ov6genDLkRvtB9VQqzJ9fpEshWbrY1CC6NY3zeWqazTbHG",
  "key38": "2npdAzJ3h8X6RfZzLrFCnTmjfdmZpcgDLZF9kEJDTByp878MkSTQ1YoPAxNuehzCjHh9pvQJ5yqH2Tc4L3P5mZsK",
  "key39": "26ZN7derK6qhtbRhT7KASCiZKfVn2PH2m1JKjrX81ujyG68ikyjLDCWU3oSmbAkGRgr37L2AyzdzeNaFr4yb9L5o",
  "key40": "4Sqef2mZuSQLUCXoCW4ETnwRhFftCiC6MHsTWhnEmVN8xG2pchSPzmvAQs3jrLTRnVpuS9wSPA2UBGpMFmmYT5q5",
  "key41": "5dVKmyMgLFNNE7NQV9G4cz5rTYxGx1pyr5ZQxdYQTeDMacjdSJcGVq6HEkhmhCjVgvDgHMXeqnHHbiQCyvtkBhrp",
  "key42": "5jFTtixvxB4wMgbxW5qicjx8oj7auoYMhjozGcRjD68f1dcxooRp8UgfC4qzeUaQDhaKUEdfG38bnFjDjfTA3S5u",
  "key43": "3Pc13LX6aUQWYMuAA5gYgtNDbCJ9WWoYfxgDHwtwP6JgFnYc3j2MSRbSAeTUwniTUU2QBSirRrTgb4ceseX3jmh2",
  "key44": "24Z1jSwpz2rbh8fKicknKKk3oFtQV1PX1Y3NauEaWguiVoh3jb1cs26JukgL9HQVvYJ7eENvcMHPGn3kXrfaDQRk",
  "key45": "3jPYS772fJx8GJNZFxtDohPoRY4B6Lni8B1KtF8Tc6Jad6JxS7i4bJtSFbQFy62D2Cn8WyKocFk7vkYhNoLuHoxR",
  "key46": "5QgH7AGFYgZytKvRELcmysKf73zi9nEyH2UMu7VduMsQGsnpKGiRNmFYCCaxa1h8PQeAHuF3Q6qEzqX9Y9kMfmUW",
  "key47": "4ut6o27ViwpeBMK1xE3BadEv7HtTDx1k2ZUka1Edj9Lwz534p8cu6gjDbFUHbF1VwNyxQGatwgCUHTjEMhPxqnNU",
  "key48": "2pGqfai6TFJSbMdvuzm3buNUBHr6aiv3JQhUSbpH2sYQbrQp4tD9bwSixH7wrgCcPErLHdjSyLwVU5bzANCVjppA"
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
