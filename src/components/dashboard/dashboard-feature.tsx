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
    "3JXYXHUHikf52jC35SEwzsDsrpixGiFeh8xZn5qcy2j4pRTCZrbpSBJwuuTos15WFiaUehV6er6HXpSUHceYPm5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WBfCjcmBjxBJezdtj4eSbRQXKK5tpSfaqpGHcBVQGm5TNJCjp5S4z6YR9ueywrHienzren8X2dPeybPfvWD3u3J",
  "key1": "5jmhq5B5u64o17ozniJbN99rxFHtBhbkKnizZbFm9CGDRsYTpbGEufCb7MWMYjxhQQniKp9VaxoLFNnZpbuKdeHN",
  "key2": "5HTzdQgQ8NUnXhyfdfQxMXzSQXwFm2exTm9fMe3djZvPxSSkuD2fZ1u9Rqk14xmvDwwf6svte2EZYytuQJ8tkTy6",
  "key3": "3UZQkxm7EGSCGhz3yUV1tEp6gD93Tg8oGksmwXCoeUrNdpMC3KDr7f8VU89RHnferJvdcNV4oqAdLn6a4LYQkVyM",
  "key4": "YuQSQSpehd9Vu6dUBQxKaHnwJAQhDPjiKUmRzCgdv9GGk9CsAfJDDBmjiMDnZwu7kQy83vcAKT7wSemFoHV9NwP",
  "key5": "n5oYYJwuZS9GJeVHjWJWgcsuEWtCG4JeWU4xqFCMLkbuaiSARoK2P43kbVXKL9cushcqQyG39TaVWSJT57wBhgE",
  "key6": "35euqEyH1jH9DumwTeFXrcx2aynntpb6HWaNQm79EJ3EbV9gSzubGFpFMZEenSTLXsM4YTX6hrnxfnEh4eXp6oAo",
  "key7": "4dJWmWUyxuKmekos84Gg1ibprpeHxGyDNxM1g97uWJmLe2fVtyekQZ4YDrkoqfZyGTNdj3D2rkSyzeu6c5uLKjVf",
  "key8": "5QgTDESbBJNFsG8HTtYVVaiAp1E9GrwfAjj1V9R4ecsHCNBtbz37W6PBrDS3vjzNpQyCVAs4jkcwR47KX6PfjNVU",
  "key9": "4XuMuYadCNwcA7Zdzzju4cdxsWUPAuvM5PAzCrrqdP17rfBDjq3qW129o6BeqmNvE5PfHbiromYBhsdNas4Bee2",
  "key10": "54WwfRJDd9QBsHR4cSLJYEunrUGzCPQbPdGSQo2MX3z128NThPNw2swQhqAp9Hi32cypw7x5CpMoTYTENe1tspoS",
  "key11": "4WZRShoagCRUSenscPadUGcYgBR9CoX3qMcfLKF5N3ENz8Dh5hWnuRV2HxCnWy2V87tsrKSYNu5oXb2kNPWEiWaN",
  "key12": "21GU3qeJJkEbLuLbVdTaimAuUo13YSLAbwtyXUm3fRDhghoVydPkE8UB81S9ieC6eGWyK48dcrXaGyXA5DWnxeQ7",
  "key13": "4kAk5b5szyfeTWx5u82VXHEKRNUCXCRW3uAJXgJN9vAb2prYehjDzQqtMAEdTXCikb9EScP8SZ175M4Qk72zEHZn",
  "key14": "2dKx9J9SF6msMHGSWMk1QFTVrMQMepx45nQAVFuz8KUe4gTkCXoF9wxZ612LnTYF1sZrBFuJCcojj71X2eTC5EWj",
  "key15": "3z9GLsZKEGVN7i6wKBPfgLjTSRyrmxUAnkhnRcMTRWMdTAsr3JFoitiPrM89SbgRDfGLu6yTnTiHiwLrmmDJjoE9",
  "key16": "Epsq1g4q39EtTZXFmjS5cr5WEn2m5JMW7AfpPi7vQVrLnQqsUtQX5QaVf2ymsXDUpqYYMWmoGwXP6FFhJMq1myW",
  "key17": "2k1ttCSc3jJsrCY7uPbvVXmEjmwhZ89bJDAn9XUBs4813eXmb2F3pgGseov7FULihDC55a9XvNHbWxFM3gRxf69j",
  "key18": "3uxt22NhJLfCSC6pSShFNGbpZcJfwrvG4mVmu81ZyVtrv8MdkjwRuZx3w7eFYX17cPvAwEKaGHCnAVeu9662ipwa",
  "key19": "3ovon2uQKNpmQJiW88bGqCu11ApHjRiar6aaMh1yXmBSWSvh7dKziLGnJprtMHgfiDRYWo9bCeKYuT5gvZToUDaH",
  "key20": "4c15JKkncXzHbDAAJRU1G86XwtVjjaJedeV4ff97d1U7T9dxXFfwPYQDjZ2Qc3nbVfqeHw5xczJPeHVKkbt7nk9f",
  "key21": "5qH23z6hXueaK7bWkPhzNpRXx8k2yzZENTvjes2M8t3khFkNJ4etQvbKJxkJ5pn3rei34gYQkNN4qfogJJKmCA4C",
  "key22": "4RJ491hXqBytcG9fM2cWeLMigAjwgz9hTwp2cqb4i6WcARyU7BW7jyd3CptF11Y5yraAjRM351Tz3seDEzkT7Fsc",
  "key23": "sgR2F4AuqhJ6oz7fGNE4Nwap7ApXZBsMwDEyyyKvChdv34rAVdv8jGJZooQQ6MiWxyi7cNnm6BV1gh9jf31YnB3",
  "key24": "5SSYekjioGpay9Fh71jGZ7TttL1DZdZDG6kaMqeR5zWiAW69ggivo8XMmVLDAaqxVvYSgqo1R9dDgdGH6tuxubez"
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
