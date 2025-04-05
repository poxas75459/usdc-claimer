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
    "eKjVgSaLCBGJKeXhjtLeM8tdkimAW32rRtXQMpmiTiUZLGY27s78oYfy5b8LdyHwZcQUJiF5rA3a1KjUZePUhr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLgPEDSWLNamnigrPECu7JpMDTo4YDY1BjaaGTC1g3qVjZhZMHmz1m6tEbJtpvhhWhWykg7SNFZxvaQ3jfym5Gj",
  "key1": "4hoNB1QCBUqnDJLcJL9jytPP6p7m6sidxUDXCVQ4Cn4hzcRGTT6dJoodXPqro9zrzLZmdQC8AkXwikBt26bjDiVd",
  "key2": "4CRyrRdUmDoZGz14iiKowphYoMqHCcsvWxBLCdyPc7FEmJZk3SHmncnLwfBGjCDifzPLfrw39vnhPXENig3JzpMX",
  "key3": "Wz9mfxwv4jF7v8vr3pNTd9nFNPg3mZ4Ye4EbG9KqW1aVGkG79tXiZFUJDN8ChEG7hto9vjEfjPwLHHXNo1RYEMx",
  "key4": "ZFwhgAd5D9yB8Xna54GMyAmhrCm3upmagavcY8tJY7J74xRR5eYEYKJKhwSMo5tGoyhewB4Z7Pz1ZPFyM4crbb4",
  "key5": "46Dmz1kU3gaVeFeN6REw2ycYWgExUJJwfHEiZUrzpATtihWLXdjr2gWPCyGEAghXa6vDRyb37NqXeyiuc12Kiyw",
  "key6": "3afrPiniqN29tTJHcJ9JJQuVtXb4fppr4M7wyaNAsQ9hsb9vAREadTiQZatQoRobU2LSYBSoRCXApAjWsAPSd78H",
  "key7": "2P6Pn2szV2nsXpUr9EVhtDE9787XmQqDphViUNF71TGHj5oj397ZtyUxkKAMrMvuTXBxQ9hvWCY8bfxiPSsxKVj2",
  "key8": "3DECRLGTUbZqi1VAPWj262QB4QiGPgLALzHrMDhhLZ3XAp3GjCynY2DniLxEUirZ6qQBsTYfEyoWHbzyN4xtSCV",
  "key9": "2FtQvHyEnmUabY2MLophWse2JTHtKcut7ze8usJoLmSHisA3gog2Pb4eUPsp2Q5GUG5NosxMV1TzuNP6dTVRqe9F",
  "key10": "4yBcAcMmRm27EtAr21nZXsu1b88GAC5psMM5RCBCoMw5YFQFANfoUs8fiaX7n8zgr2o6FRd8LMkDDZWMWwZXZFua",
  "key11": "2YuzS7zmweahL3nvxGEvt9HE6egriRw4kADNjdNM8xYYbaFygf9N4DU9cwZUTUQn1NZ7RJqaD7MU3QAWs8G4n1AY",
  "key12": "37c9kbv83t6AbDiJr7Q4GF3DCDGcMw4wRcwRrFJsyf8WnyskaraNvD1hCf1uCpRc44PEqFKdMdyQP1qigy9ZdoQm",
  "key13": "4pKRFGKnsqUREnFeaDqm19gn9YZZaC8BP1E8hJ32sDG4xjr4pXzMfSzhPNx24mKqLfYaDSDp7dfYP5mjyV3aEuzA",
  "key14": "5Et5mLKCYuXBeW4P6rNxhzmb3E1MvVvcFKhpPxcEq2osCcvTd7srgyivy68VgtpiKZMFS4Y9maNtDNQKSZ5LvAVc",
  "key15": "2dMn9vHRUewA3irdKa9EpCDoKB2yv5QkyqAo2ZxYzPqQ4ZdNi6hsB9Y1QA89NPpgvtJzTHEJhiwKThP22wvcxjP2",
  "key16": "5xwtvosFkvqCn6MqWVNyhNb3zL3SspbEHQtrtdEkna861NDpwRTmvuk1EzFKo9gQcYWyWD8jumiTgvP4yUYPawwW",
  "key17": "L36mSbHBb714gN1SvSE5NWZJWkrY5KVtWRNJxeQodCsiTWX8xtEjfqp1nHcroCt8F2NRdPjvEnTCFrAp62vZU93",
  "key18": "5VS9kwZhki5rMAU39W87JyUfHyiyaDPHMzcuS7MqpxJgXJFj5txN6nV6AioZz2cptTXF12GLBt28bcsco8X8xXJq",
  "key19": "5FZCoPAY2bN4UX7zs6wCXJcFwS9ybwAdrtnKrxjS1TUQX8kyY82reH8VybbqiRNqU2jNH7NwrWLGr9ndkMzfG2Gk",
  "key20": "35dNsFdsoWRDo4dYV8WKD3ymJCezNacpAie788bzMq3ewwudvMhk1YmLiav6Ed3yRV1BZKqndcJn7WisuamWfYSh",
  "key21": "3njuC9YV2YFZCACzCL5dMCnkaVFn6yFsKPxJ9EPeYWjCdwGKAgVcerRdt9dqULKG2KxHamJL1GPqSqnMFMMEYfMX",
  "key22": "3WiKBZuE7en1zNuyxf4vQMHfedCRnVjFyuCgocNB3Yd3LMVEuFYFKnfZhr8bPswj8jjrDtHNt15L2axLFHhgySqm",
  "key23": "63Q8UFb1eATVPPubviivJYBq3mZAWymzbgBNUPU9rEWy2tmtrR87Qj49y78L6fHopu1YyvdXQdmWneCUSbzdNGPx",
  "key24": "2qxzyxGpsP3shDSvxNL9tac2WyGtBSLFLonVM8pCG4o8JDLj7oQXJpwScj6bHxAQeKtZE8kmMuTmrrrrvq15R8G7",
  "key25": "3Cuv6iaFQRp3JqCgv4MUAkiH6TtBz2VfBQw9FoqRZP72aWWyw4vxnBLuTBKM1msUPEmdtzNA6gAVMmShzhBddM2s",
  "key26": "b2Tb6KtiCf7WdLv773z68swsF1Pb44GKcw571Bv2Qg883XEgpc87M3t7B5pbXSDfdZhd8sBd6dHH3rbE6fnLZPt",
  "key27": "5Mo2TBWit7RjdbEVnwzQpm27JNdnLQAip1wMVWwSgLYdAHT4WEDPeUzEMVyKfG8VH2HFFUFL3QH48JjSi1utyiCM",
  "key28": "DsjBtexaj5x4iwcyScqABQHbYwXdAfha4pSjf8LCBBhc1aiCQ1iGMpU7Z1EJoWWkNSyDK38QW46TK3grBPrMTHX",
  "key29": "4BaACSQm8JbVGEVUN1J9dvXHmnzmCBwD5xdTZ2xb6h7utysQeSYGBKkNttsfBzsnge4nkirW2D5AHb2NAe4kaqJT"
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
