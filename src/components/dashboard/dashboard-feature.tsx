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
    "4Bp1ueWfYtsTqtLWXzRmmo9VeoHvNQ5TcMb2q6dFYXNNB1wsX2hpkq5MhoodP1RtU6N4UQ4twXtueo9REoPsH5zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DitxcjoLWWwjkLSADEBnbVvCGo5KYhfQ4LADvGseXEMD9gnp8f76tD48GrcySzzRBsS8gLc6KPkBjgr4Pz7CsEQ",
  "key1": "5W2zTBjAmTsQNQsL71nTvdmVimpPPE9G5Vx7jT3TY1QFTGSegDzJXnHUKezGKj6gUM7pcPBiqmvFZbLNRvb6hmhb",
  "key2": "4g1FdqW2E4ooMX9aixY4dQWStbZztfzbKiitWz5GW6BSzCgMvSz8yrj6ABRXkGpyvAEzgnegTR7cXcywCiwbuRTf",
  "key3": "5tdmTMqgweJkzrMQYmkjRtH8Wfmjrj2gcvJqZfJzgADT5rjUXBvNEco9K4CrUsrxsx4WvSUQHWBBC9Zw95B3pGkc",
  "key4": "fkmJMporjo6Cmi4YqqudyA76uVZtukccDordsFur57EKy4je6q4PvxSbEPmhhTFJoidrnLfCWhE4BZAAQ9aH6ho",
  "key5": "4kS2EdcVLWy3mXBhPJpv5eWnVCfD37GzVP2ULV62thvYCY7hWUUEpyxaZW6jPzskMWFNf9Lz5d7KKb1K9RgW5Hdx",
  "key6": "aTWBnCKEzazms5HjXVjHGjm5N3s7QurHNbao7cqpQMk8yRrA9UAf3SDf1SzvvqFRQ3Ke6aXfdMN1VFs5ZjAwuyZ",
  "key7": "2yjQJHsMwY1uJ1NBofPcEx1PpksRo1QZRecp7tLWcnTR8r3iYd47UvK8MzsZeaCK6XZ1tsKaU6MsLeofGzJozUxV",
  "key8": "5zmYUSG3ojks3fpfriVbuKeb3fUB2AZfwsSaHr77eYuNz3DB5jLh8m6oNYL36HamoUcrysUsVcypBkCtw66AoGDe",
  "key9": "64MtkncppzNAd9uVajJiBhAajp71mcoaH9MspsYFesb4XNg3h5YRW8JRJbvDyawVpU59Enu4hVRJBYHvANDuakZ5",
  "key10": "5buJ4bHFpqub8PSREidaJvxHEujV8P74yqMWM6MrmXoj3mSFDkjnpbTmJNaU4LdMp9SLX1FffofqXc7WNQ1WsuKL",
  "key11": "663Y3GqFV2bKeFQLUasBLzQrrBHFMRReHzYdT8mhddRB9L5WPAwW78QVHXdDNo5YUEK81FNt55Txctg9Mo5YYb4o",
  "key12": "4gJcUJhnWyKTFK1MDajomQAa8wMbpMBgPCPwTJevAV2o1vhFv9dHymknAqiLPWrA3svUm2U5SFaZSeXVF2XwpThF",
  "key13": "rbvVS5cp68t2y9dRUe4nqgqwhuAbi8mMojX56BNMhDeJiC7XTkMt5ssnxKCLpUS5g6Vgehe87s4iHMFatFqmFLz",
  "key14": "2YfiGfp8D9jR2iYiiXxaiJDj3mahuyseoYyTsgP8J9eyKCioJd3XuiFJyr31xf3ZRMrFUBs8wfqugf4dGZZds3q8",
  "key15": "2KL8JmyXGgEuRHzgQ25m9b1u7dU9LaySNr3c81xpSMQgrMZu2WLQkj1iDgwkV6cDaJmunDpN3of2KEJtxfQXkgWL",
  "key16": "2rGpr6DACWdrqQZax3azHx4f5Y5d2HZYgvXivHDEymp4Qg5tHEa1FgGkj8VRsv4c7PPfYE7drxLvVW12QXC3cNPQ",
  "key17": "62n1Mg6qYszHDLcWS1vVXNjBV4TmHqm9ExMMv8SsRD3KYHGqEUWe1kchqkGzEzcDAwctHuZ9HtQgXbUCLULUj5Fz",
  "key18": "MVj1JBd8g7STepmbLFSAAYBVZYGq9MtXQRvc934LENvs1idEScDqhMQRgqAgLXF81ZMB9j3SdNJJGB9adWoTwWT",
  "key19": "29Y4WMhK3xAsKgdXn1E4vy3upuXNyPsFY3wf9DCyQwDxhx4AtwFrxEAwgW5WfZHpFwFwf9WfVwQAX7nSu4UJryyG",
  "key20": "6yvGfMa6q1fWALiATmteN6rbyqhs1Air2s7qiC217SBzot543c49Cx8819ahXn1tK2SQ1GUeHT7yY5axpqHaGbA",
  "key21": "2SdqMTrtdKqHt4h7jvmbpEak6tMTbE3hu5VFGWDxtECjqV7Zx1UFyzZGzgMvJKiCvUVnjNc85ruJPunjqQx84ux4",
  "key22": "YDnn5TxVhtqaDzbV29FevjH36iVuTYw8cf2NRb4Jw35Fn3hY53zoDUYk8fWdHj9jsMQLevB9bSVpYhTe7CyAHQ5",
  "key23": "m92eBB8Zcv6KhVvw9y5gwrL2AKjSwapZFc7dEEGS49dbr7GjZfEYwoGvJUyRzhNyychvEzUVhm82LQpJwmqphWD",
  "key24": "2r1sbU6udGHHaZso7UcYnX2ewBPaPYySrZDucbrHGgYEgmbxAZm7NZEy9MZTgXtuN92keM4gYXidYdkNBjDqhYCi",
  "key25": "2hvqdn4SMzvLGWLbKyEnGUKTjqj7HeapttWXc2m6VyNkBosWrqG5qazaDCNBrSjkixgrikqLggi4ikZ75kK28rjJ",
  "key26": "k5TkwMkE8xpmr4Gt6pCFjwE74nrGRyiP5cZruHWvaSA1QSkE7BWALaoSL1Apk1fMnkXyrNTwjCsu69mgEdkxxix",
  "key27": "SrCcajTzeZpYCwqRm5TMK614XNzYxCoAW7JSL3EZn3TYWHkwXqz2Qmm8oXidtQffEypfMPZsFScK2e8r7KQASaZ",
  "key28": "4pJNAthvCS6CohVy9z1xHJ1iN52H35PH7gUoJ8SrmzaYB71Cg1pRY4JMzbPNafxPxznZwd7obSqaA2uztBpBLv7C",
  "key29": "59LqhgkuZ9MybTXe8My22CbSSWo9xjn4nAywACFiu2ZHHfdb97UoLoxKjgJ1zmt8DkUukyN8639WY6u9vNQF5HUS",
  "key30": "FDqcfcZQqKiizVniqSMaq9vjW3eXyR2xmFznv61ttvsmqDrCoXUvzQwJKEM15qUAM9Cw2TPrhJXJs4cM7FEXm4J",
  "key31": "4mNcyTDcwAYndkkN6nfWCLstk1LieEP7SVP7RpjMtxHfgnodjWwRCXyBEesmzkftwMtWWRs8NEWh7qGitGSpDByP",
  "key32": "4QFm4cTRrm4PZ6ATB1cC4KtxKUXgFEmsGKB1iVhA5ceoiBX7VphtFUxrnobuHaxvAijr59uhKK857X4XoNgxHPcM",
  "key33": "5XF3ZahvkXjr1u1QqqDYYSGz7TeT38HPFM6EjiHPKRycqsb4gcQiXDsS2NMnJWrZsJWFcM7uHfFTBeL7kwoh1tN3",
  "key34": "4vxKKXV7WhQ56KJQyKN8QGB5aNByuGn7GPevRayCvj6J7fjabocPUUVorjzFKhqvXYQuerSQXr5uppdHepXdifHH",
  "key35": "2FTV1GBEzU1H8bPj4pbDGNAfPfRiZZibAGR3N6M7TaVHzj1Y7KsLb2oVPaabWAZRoj33i35k2eTUVvsjk1sdrP5w",
  "key36": "3UJyBZ13M2HLn4U3cBwY6NxrJpivhFFCK5Lm5o28xqa1ChqqEj2bEgr4MUMWu993zon58AC5GoSuYEaHytgxmp8c",
  "key37": "4fVgPtcTQwPqiQgaKyxdJHp6x8b4aHBa1Vk5Dumm8TxRvdwqSdcfz3mvRsYzVEnHFQPTHf28mjKv4ncvMsEoPvM6",
  "key38": "QdHM4tCyov5snieEGrt68Njc4Ujy7jkcsdD1ALLNZYsjRWqRzu475Ab95JRuAipG8HpQFHkAhhm3gJBF4pSwBeb",
  "key39": "z3hGZHye2vCpEEzfuqKvrktpG41KSZpWCkobKXudG2hMt16PoXQS6WPjCycEyUCTV8r2V9AoS9PPgS8GBr26UmQ",
  "key40": "66vd61GHoXZiNmizAWfiBBhG82AjumT31FycS2c3cAgbY8XEETLvSWC1yMS1B9P58xQaehspWGJaymSf2mesvRvi",
  "key41": "5bV3TCwGkdwpAgYZAgikJC4JVFkmWMPb4ndZL9ufEaUW6LPyDPzWRsyAocpWwJprCyhzmrckppm8TT4bcbDtBydo",
  "key42": "3b3tzF9dFgpYaVmfGAmJFKtCAivzXzZbmE4sY1d27PXP6kKUfgYBZDJ9q5t4H7rLmjHCWow8KpeS5C4H2SbFgpPx"
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
