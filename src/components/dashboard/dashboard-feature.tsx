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
    "oAMN2AwDpfrXKJWmUPajk5XZjdLBhVaE7DUVx5RvWtNf92fQZyr1FdNay8ZWnjfHkVFXVsxRnSW1QG5Lkz67MSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hUYJLR9FPjNxpXoqmu1WDtrXMcVdjkJJ7hdfpesPtT4WQZTw25gYgPmDeYVuhVkArpY6YAPc9iVW1Uik9YVhMGR",
  "key1": "27df8T3qzTpvtT4GspU5tvsGVdpZ7rNTST3kaRjCa5Lne3zL5R1sXuVKaoXvWmyGQkthGEmaxJG32Pun6wJNCWgj",
  "key2": "3syZy8xu8NKjwv3HX3bf283HRvVbb9YBKEkMd5NXypUVoRoKbs3EypmAcLBtVSBBmik4bmZrbX8e6BwijivamYo9",
  "key3": "5CbAqZePu8DVnuZh648C4Yo8vwYwzCc5UCsyUdLqcEuceaSg4XBJwa86TrJVgSzeaPgio72GJTut9tERv5s8u7XH",
  "key4": "4QLgT8weqaGtV78PwAdg6drQVU1NxVP6SjLgKeK7fnQtEu3f8soy7434H4M5tzqzjFpbaUn3HmEocxMACPzRHwi4",
  "key5": "3GVsTsbuqfeUbjC9X5NyftX34GbGF2m4nCU1G8uNHiXahqncyhgSsrcMsKBvnXT9Nj8XMU1BniPgmekaCJuCLMmw",
  "key6": "3HGFwSt77rRBKfFneQYf2hTHJXKbaFTDp6eHBwRfKmrGVENPsoHWd1Rf9tcKqevDpcMdd1n1u5oUnSeeMucVSGJ",
  "key7": "2kaLME6QTQVotpDzFZvm93e8km1vfocazFaGuMnvULg9Mb9yh45PErRo4WUsLxuxPWb8RGgKXrEeSu4HbuvGYX5T",
  "key8": "3XoguXE8Ewnzs6SUvEu3Bk86ED8WV7pQaXuArVUyeNZ6h9RntML1e4iBeZEZc4tRXfMqMRQHG1M37YZh4q9xfrwA",
  "key9": "3cqoE8tT2fBBcAzPLzPfE6RihEJaZi9AoPWmzNZJiXh1vgardT32eDZ3NJY4zeCQYjnebiuRT4LuFxCZfaCAGuQZ",
  "key10": "5Aydku6H1QDKfU6dyu8RmxBLYnQEAA116Go4NcV8wymJTy21YtAYKTNE2thD97o9fcensPy6EuMGaXg7iUK8aD2G",
  "key11": "2MW55VHfXMiKG6qJHG9nAPAQ8MyXqKbNUAY4hnbWzx3E8tWST5Kx6szEqDuFT5Hjv1WY5ZeH2L8WErULRbYjYauY",
  "key12": "5SPmBit8u54U56ZowriuAqSGekKzHE4LAo5XuLC9Nh76xszM3ydrSfUUS5GuBCZhEjhzXxaJzEXZHdrmHJ7Cydas",
  "key13": "5WzmoqojVDaTJbYVuYGpfBoSXEmBmL5XcvmFHuLdwWk9RXX1cvAkaA26zoPvg6fQeGWRfsKBUjdsiZDr9gvECMg6",
  "key14": "53FpJZ8kyCFZ7KJkJSuH8f3swMaEh242VLKPHdQdgL26ErxsCUdGA6VCFDTPbzpXopUP6SYmq7HGxooW7NbJvmhu",
  "key15": "2NzrsLqjPvCpKPRjynQJMGZLXoR1GKrXeKNyfDpwodeeUpdJVvcngnhKnn1JWPyKhZL2BaxZQ14rSGti86JsPg9D",
  "key16": "3ThpQcq6Mjf8V7odL8Gp7LaRbCxsyHqcmo8Sf77zrHj4iySeQmixqPcsxCukiUFYRaxMGnPH9KtJmVaY7DwQfve2",
  "key17": "42Hn8F7EXiwSeDHnZedPruUwSDWhDQLoQgLy8re94iZkMuuAVkHLR9BK1CzKgmEPKbLcYcfVMJ4w2mDdevwfTPTZ",
  "key18": "2MJDToX7ENzhnU2UMSg4SefP8h6RngVowiDPkuLdwMoeYFRS27PMiQ789MZM7kZ3tBHhfNiGMxJ8RPSZcGbN6Peb",
  "key19": "3vmDPB5TcnQhftcX5CwigMSJ5STjG1j2N7qPU1BmSxR1uGMhyLeaNMnSu1BD6k9k9e7STmuAXbZVtJm82D7CkCBc",
  "key20": "5iDmEyf9BYiTLwwJqLvp5XrkuA1BiV4KsD6rwLLbuiQfGy2j3fJRHPt2je1GawbmoXdoeDay9LKpqZy2NsDdvgoG",
  "key21": "dXG9yQDr9a6DL4tc7bvAVybpe8nRv3KSsdKVGcnYHzsFxSq62cqDD9z3yLaTPvVwQH9V8QvgQMyfEHk15fYA3F7",
  "key22": "2iAFCMjUhpLXFzMmgHuvzj8HcuFuidYdEaGj9uN4dCq7HfCzkQffi3rg5m4DsL4Zo92M8MvhMckQXRvRRQvViFLe",
  "key23": "5pxmLJMMBmKBccNWozMwWQxvatLDVGus6omiM7aDZ2wpappPKf9Rpr5wenDtpDFpNVaHHY39RJsZPiCsKzU42txx",
  "key24": "1BsNzQg7DcoDacKowG6zKn1963gDn96DD9U2c1GuPQ5zHtW6D4nocXUeZc9MqqiSDysABqhQ3Y3ak1pJExBkQAG",
  "key25": "2RVmRvymNYFAzbcAPLocmVwUEKnGgD7ksMmADWDm6X7WHyPQZgZtHSEShRjBbx9Rde5m2DGwYqyEVSqye5Los2Ha",
  "key26": "YXyQ7jhpVZ5VMxbcMFqi6ru32aktgznyVPJiSuVEtZ5Khrp2RGH8YpU2ug68J4tYtF6PemNB8BpQmyufZJE4amP"
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
