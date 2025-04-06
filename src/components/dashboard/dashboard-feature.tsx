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
    "2v35a38KNVue3uAkw63oXeo7nzSmUhuEmNfqgqrT6EBNrSX6YcUnrR3UZXy76FJWweXVSzmuTP9NY7nkuHHGzCTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FDMo6jww1RErG8bDb3sjTZh4xspsLTyyom2WkRLABFPtVLiDEhbA729dptpcNR9V3Tb1fKJdxgk3p7FKYWSDhJ3",
  "key1": "3FYw7UertzCKhQfWpdL1p1Z3Xtc5wryrU6ebBuW6zL8stDhpjEoebiE8eLdgKmNzbEJwuBHY9N5F399C462fsNoQ",
  "key2": "2MYNu3f9i5NUqPBiFgc5kef6A1cHNj2uxLmEKSYnw1Nh2wFoeLYDwjf3wHZcep5HoMRmmkusWdFgZiBkjEbEaopD",
  "key3": "2U86VsE92vraMCk9GA3MU9WkgiwH5hF4YE4deyiXK3Ct5TFidyavnEdK3gkd71LvCu25EspMneVAdYCBDefntcnJ",
  "key4": "bQcg6yzux8suXKqerA8tbX4sR9wtipY25G5hkZRB3QZeyVF52gYohCEqkTtrKYkFwQL6Mhf8KnKSTmvQTriMhfK",
  "key5": "3jYwEnzvtBG4472bLiiMGYtUXRpgktdrhwfaUKtBqs1kmG4qvLbpn8AvjmZJK1CpyTK7UyFGH9TYJhd6Z437ZMXa",
  "key6": "5pyKwn2pc91XgPa1SDzRGXDfwsXxEdxGyuMghpZ1nYVpG25aeJtDKJY1x6BWB3Kb2pSUqd83QDXuDfJ6PHjza1SA",
  "key7": "2j5F6Qta3mQi55XQE6QtjcJsZiJXN3nq4KTTggJLfrqEKHg4zxtcPQtDDN3FNsFoSXZXVXvhhu92vDgnnc46cmu6",
  "key8": "5P2RETgAx3sRD18GfRoAd9NSCaKoh4yJn6xDkbYTeiuS4nThTE7QyhiBcjpbgQ9xSAjaGWFzZGwVGJf2iuYnvie7",
  "key9": "4yLWR51vuEuUrw45EgJDTz4wb1iybnTYe1rbVQBJEAs1ZpzPwGjSWqhVU5ZZHfNS4qxQhx6LMBUCZe9b6eGinAEn",
  "key10": "4YpqHB5VKeBLNn9j2DDZzNFTMomr9WrkvRd48VXgf75T4Xb4fq9tXY3utAeomimghJfFM7xFGNZ93Nxe2V2iQeXu",
  "key11": "jGK1Cd5HE7CWcHDTHxGHGRVsqf9hi2tncENapDpETb35vk5RtL9j3HNb4tSDnZWuyfpmVkv8decE8HaXe3QwAAU",
  "key12": "2C4bbUQtcaNQ8JZPTz1FdH7MVBTtw7UbStpS5A6j6m1F21yTB1rQ99YUdVwbMmUaEfvreaTRJ2EkgqxfXaHZPoTf",
  "key13": "5tyVGPd5vm8fJFRZ32EMxTWtdooUj74PcHHgTqBKop5ojDD3YEH4q8qW7ktTou9hKBnRt3wc6PkyS5X82sGQwLwR",
  "key14": "4Bn8TEjkoGbj89k1wBKRvx9WoTff8nkCz8qGPTu3Ghmv1FU2CiieUg85URNW1pqhC87oRa1E62VEvApqQRrw9FSB",
  "key15": "56DJE1SWkhcDeTttcZygGDSgwWBG5jTeb7GPjvZ9DcH5VbyiGYDkFSQbQhNtXB47sC5bQxjbZ6MMqTXHaH135fXh",
  "key16": "3ooo2prenbgbAPd2b9Mu9x97TW7JuMhP579oqPRB7WFyyemYKZX78JjXLkesGSzMwdSP34jUDPDphPfuJHDmnD4s",
  "key17": "5HEJY8vjfZ1no7t7JG7VktVDEBkutCiExbn9ghF2EAtPNjnfBcQf2BqPQzrt1epP5afWLy8AfumX8Z2mzQvp1o6E",
  "key18": "55zZ2tp3qTce3tDvDDgTgFBzjw4ySHLK5RRnVjRwiqiLcazAa9jPf7qmgqLczWrbhV7NKsEfCteaz11PvyCTwh94",
  "key19": "53ej6PieQ4aFazTPiP1WramCkgX6aayzXAdg9P8d9JXzrYbMccSb1DSoSD3Nd7jNnybPkPEeM4obRGrntZRhdZjE",
  "key20": "4kNYcqEW1AMMoEY2dbDNujVrfyoKCFgg3CCCzPDWPcMRyfgNVPxuvgr2CnPKFRwr3nwUt24E3tYqZmqEVjLaXeqi",
  "key21": "AtXxTgAzzc3NFB9wke2fGpr1xgqEaWcRj5xrRYioRipnp897V1g4uPyLmTdeNvGfVHur3ipWvN8Z2Gw78C1ztcq",
  "key22": "3mQe3q4acdBZivohPKkKyZZFPGXzsNpk7u9W7BJX9G6W9rfuaAn6hGCCSNxwoKHvmodsGMxZXpZCfGHa2bH2PVbx",
  "key23": "5UtEYv3HYTuSVwRnMC88EEhPYvwvei5emap5VcmfztWbhrKrW3PsLh149VtxivpqoqC6pmRbfSv8zMsHBqmUgThh",
  "key24": "QeLJWJsefC76vtDLQJKoFndRpbXmrJfUUf8dEa1SZXyVs9fXnvyB32VUac1JmbemWpT4bAaTrY95hLqvSo97kzN",
  "key25": "JrEqeMShZTsyVzuh5ckPLt9nTyV3Byw1JmS74yktANdyBFEbpzRNrVaAEqyE9aCwDv37KU1yfb8YPVAQhurzq5S"
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
