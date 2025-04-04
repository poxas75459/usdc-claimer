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
    "e9MyPxVNXY1SjHVTx9MfvWF9FbNAD4TVCTxz5ZaBTSgT7qVjm7oyPDYmhNxmDoLFJjmvSwpTxNMHx7p3bC9wS8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65MjYpMGuE9QRm5Mmhm6fCH2E3qyr6DFBejWpB7isuhEevfXRDWnMF5kkxih1aqQFMvjs424Lx95rjdBigCGee2a",
  "key1": "WTLVrxxMwRhaDkabtGUNTpaxuWW4Jzt6NHMHQgWM4ecyanejypQuZciDiw1f5U2bH8Fi4XWm7eQqEzzUhsuTatM",
  "key2": "54MV9XKAz7XpcxFxnKDnyHhnZCbSapddUcrQJbzB9eYaV6aNE25JWywgfEKComxrrzM1Qabjzb1eGvPWsj2152GW",
  "key3": "5pWkUFguq5Asp2yvLRXKJ7LuZMHXBHF1MMiZLwGqNyJwC68PXEJBkHRJgi2YUzn187XAyNEiVjMLo4SUMqCiwQcf",
  "key4": "3HqX4HovNjsdepFMH6ysT67BNKhwZfHB1LLfM6Ns2KxHF1BtTtaMEKrE1ByRJQUPzdGFkahunfbdNUpa21zYQHwJ",
  "key5": "5qJuV1qRk7xKbTvYr93TyYFzioV9akHyLiDMRNHQWU3HCeT1umqiWBviuUVnjwuBL7vttsij1rYyvcLroMjNh71n",
  "key6": "vP1JPECj3egiCpvxRAsoaYRPbov4SCoYkSRvWh99ZMmnke2AJ44yaJFhDRxkLsUWK2fULKZhYkCCqmFk4kayzKa",
  "key7": "HaXDNS1urZ9GhqHCJ8ivmVmtfo8eJbUv2RMaB9rEFxLMkoMaQz27cQkcPggjcpAYaSFniHAc9QtmwnW7pz92NRh",
  "key8": "PhyhYFpdPiXkG4btDfT6Bv9n61ukSL1ns74SHGnTQttiDh8aptivgwxhSfaaSe3zXC5YX8xrPpYri2WcAGnzsNn",
  "key9": "3wAEbDbUoKC2Vz5SkfYKynQtrQqG6uGTQ14hTaitQ4Ut2CetffJRE8cuYqUbicwNJyED4N7wPh17cLb6sMoB88BY",
  "key10": "5AtdyXrPZTzV1srSt1LdhJCgn32sf4eSwZrAk5tz535hUdycYtiggwULAyAThEAAxnPRmVk5LeZ8GnFA2VGm5aUq",
  "key11": "29Z7ghrGhPB75Ee5xXRcEGby32RTTecb9jVBbLRUXqKnTBKU8TnknvdufjcXJeoJX4qUr1RFXp4w6anexWb9GPkJ",
  "key12": "gZXhM9WS4h9J5ym9U2tgbksaXYM9FXT3737sz94ZfiTBxWfoRu1to4vuFycfSaa5vE7NuVA4YcdYRmoTAGaZSF1",
  "key13": "2ZgVPMvxE1z3y173BYCtWPQ4pQP7Wqz5ANjo8gQXwBCfxZ1nG97t4gWistHRSa6MfuA68AZNKQ44pnD4wEzitzzD",
  "key14": "3X7RcVUKC4cXD429bYuioV8dNnUoCtG16JvWt8T2nnmBg4Wk2gi7KqP8gKyyLy79PnjvE1bCM3yqYZcdMzCTyTVS",
  "key15": "4rCrbhaUukHTUmvw3WaGaj8y2yN6TxAo4fgCnS7QPQcFNWwZm9FU7sRhNtiDrnsyDURq462nDXBg4o8gDBCfAHiR",
  "key16": "4dRGE534EYzEoNQb72nTg52tZkrCLzu3soffX6e8FHk9u6pehP3vZCczcAuPE7tnfYbFxCW21J96fLdLTFxnwhV9",
  "key17": "4ehbiuBkAHek3jMXKfxSJGobuYaGgFH6zwySt7CuAoDgDHQdThWrMVfRzs3fYQeRG9QGttZu9kJSC2bzzzcxwkAM",
  "key18": "5SQsv2PAzxJCrTxqCYeNVsdBCjdWGwBpvL84y2YzCwCbeNBbMR9JDUKx89MZk12uEagP4BJWg5Jxd1QvThLpa2AP",
  "key19": "22i9F7cP7V9j17qaaMfocnRtarofFy4YXhAFNKxiEkG9EkwdUCKuFPwUEr5Rg5sFmtxAH6QsdkxXm9a2498YTxAK",
  "key20": "5hnoXLbgBCGp5WgNXkKK2cidTyHyjGmRvSntPoZzxsvPsZgd1R28KBw2jFZ17onXX4SqnKJaRsFYp67CAJSYL8eB",
  "key21": "4qsvXHgTX1co6n2DvqDcTsU6fghy46aCag1ZUDyXyZuuSdjwFM6PQPp7iqhe5eAHB7sHtMLjesRN1UNU8VzPxxpW",
  "key22": "3CWv5mPCRTXjccf5R5YAmwPZB95cu5x4vR2TaqWxFVzrAtjauwi8anekXc7BWgbCBSF498kqWQsM3a7SirtP7MkY",
  "key23": "3ASZapm9Vb99y3SYgFH3Hgmy1w66gbMELqVzAS2Dd8L8CXCug17NfDzJEVDxPBLjiRAbFR2FACm8mdKyyemVjJpo",
  "key24": "2U95wvJM5xThQK2cYGUuwbEDsLB1NfR17x4dEpngY7xkazuUepT3zGf1sJuhbs9gH5XR63MNA36VTHc4ywz29aNS",
  "key25": "5psjGeme5rbwiWUk8XbxxEu85av2uLYPFdNVSazUqKu55aoVHNN9VsG6s5jy3ZvFg6A6hPVk3pC7dJet95Yqxm13",
  "key26": "2rb3NXNT8LBfzjK7sGM9EsZYe2L63hkcD2XkwHeT8LLCcD18REjZZ4FwnfsUBdo1XFAQYsJUHxtrSjjzqMNmgF66",
  "key27": "4cbYqHkQ73CjEH3kVBQqJvG7CfrCMosnGRSzJVqQ2XjdgPgJUKqaBuXYoVPY5M1Zn7XPtKugvPR8KmeQ2TFCNuex"
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
