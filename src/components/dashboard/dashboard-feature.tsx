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
    "ad1EEHaFWNmauQtzqmopzEpc4ySAtwXPZNmgX9W7bn9AL9eMg6T5151iDdYacF8PcBsmzfb9R2P3eFnX8JDyB4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SaWqCicnvkGkRSRU18Mtb3Yj8GCtn9LBxqUasGF1EEhjsEELrPxst25KhEJ4DbXdgfaePtxUecuzPsaoMP7xeu6",
  "key1": "5MNYuZNfLwzNoytCRV4jbdgaAM11msrNdaLLqd6m8gP2ScoAzXPzJmUyKEHmqji8Bjwkedw9Gpfbp5hF6RgsvZNr",
  "key2": "4ZWQBANLtgyvLz3ZoTePMMgGY7HuAsgwwz7QhFMdfTkPPgafjfcJXyJCUpobYkRVKgkT6KBskgDJhCgk4wDR9CSQ",
  "key3": "L5auxHkd76cARdEoa5KRWr843CR2bBKtty3aLvn8f8umocTvwyEk2gDHvpG299cqik8wZ5acX8pijpLbrzMsjQ6",
  "key4": "4g8xZ6pHryUCgoveUkV1LHpzvpnUUGBoMsqGWEjgAxpidfhcNnA3SuaiAFWpidEaRAV73W7tTt9oqKngad1mxeqw",
  "key5": "3TPqyiZ8fRZdQtzCLX7eXwwpWaAGKRtq2B1BMMuQRBcGgeJ3zddkjHGkujNVzxuf27szpmdTmgKPmjQaHZH77BE",
  "key6": "3zY7yhEQqkhQQK99mu5Td5vqUxhLqe7s78oBLmNkM2BzWpUeTzjUiSC82Mg8fp5dL542C6Qgen5d8t6BaUrSDpZc",
  "key7": "5NWeTaPwrbstMxMb8HNnPJS89zaLDdB8P3gFnPgqgYLqPK7XvtPd2BL8cBPRXGkf5eCqzzgVBYzQ35BUvo1Mhqe2",
  "key8": "pTBmZYFk3N2mLXZjzFZwf5Gi4xdA8MPXr9raiQAq5eDyRLZrFpwmgYEHq5CKUTynraJWGRYsqynwA3hp22WJRQb",
  "key9": "3ZLmVZACSxLJhWSSy2Zw6C63nRKowEcoStH5AREc1vvS9gXeG2nsB1XjmzkSA1LDVGUSPS9A5vX8D4MvWo8CBAgf",
  "key10": "2YFA4eJRjjkUZECVYCQQAu4CGteRzrqwpgH7S5B5NZuZaUS3mT2hXuNtUUd4SGuQLbNrv6fna3ujy7wbPGMFjy7S",
  "key11": "3oUKhPRuXqYaCCj8e24yTdhHvKN6d3RZ7UUbHeAr7k8yHJL9Un6pidBLMZ43PmeNMGqwHW7f1HRNXyQZwJYAhDna",
  "key12": "R74B4MTeXth8KoY1Gn7TgopjhxiqtfwwLJbdoWTg2Jk9tq9qfx2KS2a74sVd3Kz1XW6z2aqWX6UJfq9n2m9WDh4",
  "key13": "3dP8yrY9wX5SQzJrW1ByqQ6w1G5F42LSrwJRwEVKRT4eWBxUCfxRPg38YPZy2fET2L8XrCKfb8BT5tXzfynzp6Pf",
  "key14": "44CSASkdaad1ugueMTgVkhg7vgXCsNBJEoDCQBYggseCMyy9CZaEbCBAo2g94W2oHp5M9yGZuuA4YLfrX6UoosH5",
  "key15": "3TtkDrMhCV9EtC924bdnwYtB5GUMnMAS4UcorxgNPgqLZvoAS8jpfkiTJPMTb89C9guf7idoJnoBDiRAQj2Mos51",
  "key16": "2aKUPUetjGibU7bCcYcTtsVFDqF1HMZU4Y7A8kQQBLgPY1MGRTLqvpmC4DAhgS5AUy4Q2gxSRLQ4xfKJDYF4xfDF",
  "key17": "4YwENVKKYjiVDcfbgBvtKpWeZUZCCRbEbaKqhPAuCEQ7xRt5Cyq3sMsS6WuBc5W98ADToguhunvd94Hp8YZy7gv5",
  "key18": "54pXJmYnwxuPix1DAAChq8DBaVRkgrk31YDW6bwwrhNL8QWYcKhaYpY7M2i7vQYSxUxz32b1Wc23fGiu1ZSsBfTG",
  "key19": "3dE77qSedUt6eDyUQZx1JUrHQZzX3hQcbMyS821rTcAZKPGhYudWDxYCrWw5LJnwzaXRuKKp57v9ycYUDjwuq4PB",
  "key20": "4jkLm2mHecSnYHVAXFNvYhqt2B1FEL7wxtgfihWFyEH3b5qUDsW1Ryk4zwSMiMMxvV7N858nY3GEw3TXV917TCgT",
  "key21": "3EbPoauJU6ddQytTME7fqU9eMWMs5b4TTyEfK7F64AVboQSkPbUDzMPwVdJxZmiXJqkyi4XcFiLqMZHn1xQA3qSR",
  "key22": "p7yv1MEDB6oz652vT1Yd5huUQpN6eZrvcpsGvoEPxSeF5v7iMCPpFUeoje76NrnH6ETngZ7jVh4TVE9r34asMEx",
  "key23": "4KpSxTsmLtso1VDv7DGChdJnu7W4prFgTqLTdY7ZuPSypZReGeiy2EX7vSZ1PPQfukFPfsETUbCnmjkaxayYchp7",
  "key24": "3tkajEqDJmXZXeJbTKfKpHSzo3rcKpoJzH3fWseKP7kKHUb9ite2XCJGJi5ovc7ka6RS7UDrExLrsJLvoav71ndL",
  "key25": "5iyTNfE6myQSmS7GztPp9MeGcDVdVWLJdMy7GSsC16MZWMZRqiwU5SsnGX6Y7xpS5QmNAwFk8p8i5op2kRBtXyv9"
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
