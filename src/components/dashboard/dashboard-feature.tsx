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
    "37fmZcD7GWrKzi2zrMn2xRYqfJUtkMCPiTWbpZsHsWoUHcm5hN9TdpJz8KhU7W3GNX7CoCgDEqwbVZxcm2izei8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HRckk1gddgx2fMa6a3dcXqVeizLxoHmDCtyy4Kw9dD1rQKtYDgyhHJ2SuXBVtsoR32LY3BHv8w9mbqUTRWwwxN",
  "key1": "2hSzHfg58sGsi2eQi55ccA4sSKzw7WFeGjARbYjbd6HsVZd54Trq398phU1kR5BYS5uzWeKJ6z3q6Bs4D5mAPUsx",
  "key2": "4Gma3CVqvSY3LYYLoh5tqscevRBTHt1PnNH5oAzRVh8nuZUeUN2m7tRvCmFUmZHyN4iBDvLXRguKd7ZTtzgRzhCg",
  "key3": "zPWUCQkfr3dMAtokGUupRoV44U8jgXYAiVyviF1ciZmsyDPUCjdeEhZbkkufVqsbS7zRhS1rWarB7rYXHvUgQ7Z",
  "key4": "3dhAhQYbYiWHGwYTtZNzswVpn7YgiWtU7USC3g7Q5DJxyPJDjc725etKHPe1VagM6cMYmuDczoArVi5oXGvrhG9D",
  "key5": "34R4L3Ehfmf1bMjmnTM86B5znmBE9o57P27Ds9xdxetyeHCWdAiCw226xnG3WeGnZwxEixkAe3BdNwyUUD9dx5nK",
  "key6": "3regjRZ28FAxaAJM5PTiv3sh8QGq8hLPK4dQPnqjbWXvTfiRHzXj2oP3yqNtwKddMgMmr42pnGWMDezqVLr65h4v",
  "key7": "4WAo8FnKhhuxRyPTfoJw8YgppLv7w4rJmVqe1FfiP3pqCbYE8BxFTA9VRr9dVhXn1gGWiH1VHBTWWHi9Ag52UNHX",
  "key8": "3omVVQsdKnVJRaG5YAKZxPeYSRrySJSSZURVzzL4N4x2GJRZiNzWmQDuhFohD1gw8KvVJsC6w9a6HBjb3Dxg3vHo",
  "key9": "5bxXjCSmA7i5F3MRoUspgnMR5HkWwTUSW2jMk3y3ZVdhCW9FAzNofnf1YzvA4iJ4WeANuArLDYDcqtvfeytGm8gt",
  "key10": "2s9aHzHnYvYgpppKKFHDmutWWQguQLHKq5HhAuqfZN3pU87Eyaksm4SzxA4LuCwdFqSxd3BtuzCGbpWLdf8jXvGv",
  "key11": "3faqsTUcB5AmE8p65ZFgeYi9wdVZrt6iH8vACUmXRSYxeMEY1v9QkyHHqVrU55YTNBSVoWSjCqkchP87WFbeq1Zs",
  "key12": "677XWR28M1xZhMxjTEoa4SAzrwzWmeGo8psVYQzTyhvLWjJAyQcz8yeyLzNRA8eYZYM6NrbzLmtni4qM5jso6Wou",
  "key13": "5BbwnwL83CU3wbfSab7v9uYmLrNP9UEsJUkkLsHHTLxrLrBJrNRTZnmeSgedkBUKZwVSdseNRP9j6BNVenKipUf1",
  "key14": "3gWug4isYanhFfNZ4iwUDQ8SFU2o6G3rStNAGZib8Gz1gXEU87wJJrTLnivA7bhSa2WMABUhFrbBLKGkYqyuuLff",
  "key15": "4F4RkcpppaZjUWRGyinnw477ck9ZAhimotL1HLbUEyEUqaMeSbp9QZBxYdZMrfBs2RKSdigT2WLFhTgGaD7LbJeQ",
  "key16": "5oHPwhvSisp2oNE4Ty9YkkWW5vRLCF5tquogBuELnetR9rG1NNVGzdeyw48zbAHw3zQsJkBwCGAmxZnyPqw3tFLo",
  "key17": "3s3sFqQzfJ2i9AdNdBppwv8nCwfbrBzszmj2r4vggkdhtjDjyVCnxC76HK3abKQjBDArxV3nexbagZRfMsBEW2xr",
  "key18": "72uD1DQ2aLP1338ndajVzJfxXkwfrG6e4GzzwPArrPa1b4uxBasfiFEWW42bLktHk85Vs6RXqaht7qHAn1FZtwW",
  "key19": "5jUPs9hbH8P7WX9fiXpEtYFRrtJ8v7itZrq29jzJsjxxrVzxqMbn2J3NWtTDgxomAAJ2ka7g74gPGAjoTNo5vBvE",
  "key20": "39H7CnW1ZtRVEFS3fYGe56oYweEjjMD9yu6PrVbLm11QEdW1aqV591nrGaSZjLnM733bTRVX1gQvC6EUXKvVfN4x",
  "key21": "4MV9YJeURd47WmYANXfbgSaq8Qn9wtnzf1yV1iJzLty9bV9oPvdTfUCmAezpvgYWgYYojw8DEq2uEdFe8Gp6ZtJq",
  "key22": "219qhHn7Jsf2bS2uS4T7oPaVmLAxdFXD6NdL8Fb5MEVfYB95cdPTh6HQoyY8iFXoBUXNJDzMMtbBsn9KCJQvs7PD",
  "key23": "331fArE6L7Rxwf7v7iqmYWPnDCW2QbrxpJUuzeWSGq23Xgn6rGHJ8GLpPfThxh3fxP8spsdT1GtTvbesJ9AfPwxm",
  "key24": "23Qmvx67PTkSC9SByuwiovqFKyVXWCtgkfNNtVK18N12JRVcDXXEftw3cezRkqjbyHc9zrBUhPnFP4cWRtZER6g9",
  "key25": "3AS492Qyku2B9XLGEbqdFfTCSzB3ee2VZJJmmSyT37cf7nBuWRPebbfVSFwXRapV4m7cXbtL7izXkfdtYPTXvbwu",
  "key26": "6623oiW1kurrgT3qe1iUkqRwzJNwMfLTEMuLyqAeG6dX4HA9ytbdkuEpvc91w4ZcWWoLQA5oeGGEMUp8rtECmEk1",
  "key27": "29qBTn4z91ZSNEkqpDbP17hjtR8aKGn4wTsbyx3gCiPzw4HvLRjRBPY8p4ubLuub1ZPEgH31gpKZ5M2GMi2A8pBL",
  "key28": "5RLL2259c1j6LNjpdvbvk1utgpPn3XFmteoCeRUYtwobgKwn5PovWyKViaa8Ka42BvZQgKZ3ENB1Uz9ArvXuPScL"
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
