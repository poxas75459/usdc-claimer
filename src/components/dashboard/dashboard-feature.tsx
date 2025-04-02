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
    "3CCMCxLBshjXLJT5oW1w1PGEcQBMEWDHXiZv3YfLta9Lk2bCqXQUHmkyUh9iQwyB7jLMDQaUfvqJyVqNKdiqFbkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C5zUfSFgvKY7tP7hMRkBuuMne58NpDFrNaVYhQX5KE7PiuPXHNrcLhGTRkb49v9ErZqLgFAatDTehE7YMUcBw7s",
  "key1": "5KHz1XBgJcwdTBnjBf9znm14F15yavn9YZ8DUkPmYPrXxP7H1ANb8EDSqt7MACagp1PYtoAwiRj81PkmhDdyV2oe",
  "key2": "36n7YPFpddtw8QetaB9BRVi5L27VynCbMwYmmGwDpe5XgfUXiRpRViSbgYHbMbD4UuUijAb21kSgz8nTZHr8GM1z",
  "key3": "4vHs1yMne5Wqe18axJr6JsxBuyByqfQ6h26dYePQRg9TDmvzmvpmwy9xtChk4AFw3xvcDSUbdoRpVUxrDYwLNPNh",
  "key4": "UhsG9uNWCKE6zhr43mJ3jWrJMU8PjehFyWdtBe9G46amMUgtJ17pg6vtgF8tz1nHDyKoNJ2zP3a1EQ5C956qysf",
  "key5": "4tazv47Jo9YMwJo6x52sUweWaFLdeScAug7n3eQN3yQpwqqmmWPNLG1eDKExRGhpVvZAzwpbF9vVFgwnpX879p4M",
  "key6": "5p15Hapk8og5EpSCEmWeC7F9ojs4jBdWB94SCAfg3cEXmqWJZMuNsGbYJtkNF5XGNGyMuNiuDqwM6n2rkNmt858k",
  "key7": "52PteWyCg14Yg8RL2vtcbvzBUsb117LdM1sZssAnk2U6PjUk8GeyYhzMFnLszvA7gZBRpQZEHTZkm7AVSYhiJhro",
  "key8": "F4Jemjc3ANwL6BV6Yi1VbeJqinec1PYtmejsiKyKzLRUG4nZtK6o6oZwfZYiEMaFUPMiwxPv6ZJrLJ5DEYx7oPj",
  "key9": "2F35d7BjCzrF5aA3YyiUt3RckXeFFSMCnUS2gAcDCd3bvhwkwLit4C2qyBiiVU4N8wA1fpd5J4dq3XzzXsBYbznZ",
  "key10": "sCxoazeYcei2DjmKwdpdtyNrXx28rM1d9o836hrQquR1V2fDoPUxakL5JteQvT2quCLH1uztdzou987exBMgKWZ",
  "key11": "3sChDfgKzsmt1c3RxcQQRwbLb21FJd2uba3qTRp1pk5GT7XKCgW55ePhH8GfZZgmvM4DeHvbZHApz9gqqwEzfWAt",
  "key12": "9DuEgdbvJXs5xavJaZJmfWQST2CSFVfaoUcJvZxRdGKTNcTEVTGrusMQhAzETgYgQvRJoUmrcuvczvxxdobLPzw",
  "key13": "37SfFmBgjxisJRMu7Dhwn9NE3yjBsdGgf6mzzW3W43UsxjPsArJQvz5SB3qAWgBokVXZ9whNGcBTQGP5kmwxbYER",
  "key14": "5Zm2Lq9McTLpCYpEw1hoCVNsHPRT8DALWy4G9PYh4fm2yYGLYuKRfVLPUU2Mra65qDm5CeQH8Q9koHDYc769Gx9s",
  "key15": "4qUboYLDyGKWCZ161AsEJvh9GdQbxyf7We2M1ub3HrQwejwiy1wFoVHB1QA4NwNDfLdubGUG7VaPMDBadrSDGoiF",
  "key16": "4fHcLMUuRJPa1Rb25iRYAisZDPC9ptao595t5mBQ6GUpPir1ZZeUttXufRA4Jj7Ve93VcFTQLagaqU2cMtyvbeAQ",
  "key17": "5PmyTFnzHgqu8gCgEZr2vf3nNVjPZjz1E9grjo7gqinzac242tPW3ZYhah7jdE8myu6ejN3qqfTXxx66gry1ckN3",
  "key18": "4JR2ZeGUHmNsgWS1WCYbYtpruwpaH8bZq2FyA9TNH4eWW2x4cdTYPAaHUBmLikUe5LsvfUfBWAu6M8sJ4UEESCC9",
  "key19": "2Xjkp9dhP7xGEM2Qzet24SppHXwMUFVEKeQJ5H9vchDzx938BbtVWf53LakkJB58a8gFAmuF9EnDZdt9jmSTSxbb",
  "key20": "2Kxb2K6LaEq62gsX5rU2sdHfADCCp4sbFVvEeBozTvUhSbpLzx1BxTSWMDG2nEwpTZJnwWBMVZ598obBPeDxdUe3",
  "key21": "2pAKGphX6yFDZRE15DNM3BMx78b8nVcB6txeQeLqcYHPJ1sR2oUztatMKjzziRgnHWdmaLUpwqHMnh1RoJSTKNRx",
  "key22": "4Wje79uDznboNMLw5R1kGAARcauv4RxHRVmwXgJVZvUqwZu2DoKDpTj25y9ciEqKtFFkuTFKnQPubKwnjE5VpAYE",
  "key23": "2Md6Y1azE55Bnrrb5j2mc3GjKfVmkcTtfBkmbJBBWtdnrxiT9vwVcdN8twSfGLmF862s2ZkBUtVWJwDekTDAEQgB",
  "key24": "3GL7jEvmxy2JWr7HLPopraFENMTyANdjJBScAcxykkwSnYnnJuzgzyxsKU6Weiw2z9RtLodRtqRhYsnZM49K56Q1",
  "key25": "5LxnyzdXVemxGpDWWPfcct8BLA2PQ3H4a4kzYP9NNQL3VNQfvBrfELiZVVrykB98oS2iNHe5WPoXEL3wZvJNcUqt",
  "key26": "56SiwctBRVmsshFzYTSUSubmPYLgK5iCBQyobQoJK8r8QxhzG5s4Rx4Xd9rtsTcuwNtNv9CPjSgnZz5gtuoHg8So",
  "key27": "3LPpTc8gLi2E4ZBYYFHMiusXhg7n5jTAWBEMqLr9CiCREALNipR28bTPWsqhJFBd6xm5ikXFBkvAxvbrc3zVRnhS",
  "key28": "3AModLYC9heKpmR2BXwKbU2J6ZTGGsC9si5bt4nKPoxkcC6VrBmYPTDmt1AvF8EAaadeztQzrNjcDE3fRCtY3CTP",
  "key29": "54P23UDvhcjBHCVR2XkNjeGTSoHVZnWyXbSjUgzyG47xvnm13k1SmL7UpzNm5cwYCF4gBaF94o89HFf1W2SKeQtY",
  "key30": "4zNMLaxVAtkrN2LeeSfnLwA8ct7pqPBCXwYi58iC17NyEQFDmmDh1v6VtqL3LtbKkegWGk1k7Zq76thmESWpp1Ni"
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
