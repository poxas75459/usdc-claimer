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
    "3FpyudAL8Q4tFoHs7pAMpUMnAUG6qt3vkb8NqbH7tgpgvfzYnrNLhDR6idHBpc6pRPpCvaoZM2NppXdcJjyK2b1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QJGqMZpe8HfxAYNUBcPRqt98jCFZ5w6h28qDoTybeJCK2BJAsX7uiNxFQwc8yQu8dQD1FKYrJLrcjF97PWWqA5i",
  "key1": "47RhauMBGSxFLYH2Cnt71BXue8cYbU3NLrpgdwRKMWjmjYokRE2EaQMbfZVCsCFbfV1LNyESUFUSwCe4hnyu72Y6",
  "key2": "511ATWx37SAxUbyQKhhjBrpco1Ckst3MnDfVufeaKkQMLxcSzDxKqJQJcxLz3h491Hbv1GVTPsSG9oxFygwMaSLC",
  "key3": "fv4K68Se4GSSZkFpimNkyzYPTZ9mxVvqyCVaFv6qQhda8hPJdpx8wg56HUMNqsZeGU8JfzhtksyLVSYtwXu9Nuw",
  "key4": "4emw2noDMih9Mqc2AW8MDaGXghouEd3PALximw45wcyLKUQ2KpzxtkKQQ3eHxpmtBDow7XwqXLWyLEd9LApvKyvV",
  "key5": "5ZtR92mdRMBGrBct1J4RA51GjZr1cwvjdbnXHaD3rV8q9anJxegUvzWGbB6kJhGDxe1t3N7E6LQkwPcKbVCrKeCN",
  "key6": "5NFK97Ez7CdKLNMCYsBMxb5hWizd5Bn7gn1dxRNZEEbfm5W7ihkpGV6YHWM3ZWCbsqysJpTsgKZR32WUthBuZuAW",
  "key7": "2f3iZqyWhSEZqCPEmS6DaPsx3qEhhAYqRm1z13UA5StEZoezi66vNahMDyYTdi2izzi5qjSuWSveWq8YGmWRS6Pq",
  "key8": "4XKXdGrxpEt4XuDD3zvyGSQE3Y8x6frFgbikanYTAMXRM5RMN1MLZakGceSdGr6omoHj556qTwLmrpiZixo5Yo4o",
  "key9": "cSXVuoYJwXKhgEtUvn4JsRHqAGQ2oscVzg2mVg3rngwutSTeyVi8EPStNZKTG2rK8CgVLD7YvreD7eN48REdRRo",
  "key10": "5FsFnCr67NVRLuDP8w74yRU2iwsNYN1A3P3dR5WBnQz1tiNT1iDhU249KeBiU73RgTTD2VYq9si4s8rvxtiACEY5",
  "key11": "2XwphE7K8TGWPFUyqRmqm18amrtyfeseHGSKF7p1NR5bQRe5foiN3bctLhFkxoj53YrNSkdQeXTgHzCFej79SU6n",
  "key12": "3YjuiQys38Nea9VjKryNVvjecu99bZRHAcArC8vvpna6pks7P6oGZmSGsysZQPwCEzorsyB4Fi1ddtmVLg76Cuju",
  "key13": "5khs6BNCNvyzuUQcNehMoP2WUSEY69Z1h126SazgWkkuRBGn1r3tQS7SCAxokpTk4sfrschJb8yWorp3qXHLJtcq",
  "key14": "3wapjRBUNHdn6kQWps8kBnnVoXSsPfprEnEgfK9oTsNmqfRZmhyxPZbTFE8pw5azryJquBFnnPtWyTAy9zkfgSF6",
  "key15": "2XEPedxhRUmo74n5KYkWxFH1tqZ6zZena6zFhqgakXHmTtGxvPt4FwBWgMx3j1gYRELHVhjYmvRWNZf2fUfSUptD",
  "key16": "ciTLrRcuDwV3ze5iGkJrZe2VeTKhyvk9Ba2Mpu4fxrn5wS7a6Kj6T824Ru2GGVSHxEja9Sf2JfkV2RWL1wPDdDc",
  "key17": "4LkdMKCGBsgVMBh5ZGLMyo4FXUDQHiBZMqsmvHFcpyEVx9tEd3Y7MK15ENK9C8HQUbXnYjGHJ28EGnSEDe7Wxe1P",
  "key18": "2dBBMVTwA1ey5mWPnEAs4dBZHB2mbcdmmwbUF7Uvo8NzuoQg9G73uBzzhCDD8XQkhfaPCwjyoB6w3VNMhEiwtpzo",
  "key19": "X9fuFUftyNyCife8ytSPZphqtvfouMSemChxBmXM69r3cgzhvEYgpauHdoD8y2CTA9h5tH4b8LnTLjjgao2TrUu",
  "key20": "2o9X1fPFDHuMwDipsqkxya5oNrpPPZazB1p7G8rJLfi9LpfeG33FNEPxtF8g7f2yDqEhwGwTYtM8HnEcP1odAuLB",
  "key21": "485cumQh8SqxRCMCrDkuK285FTm5sbNsQVtaC3yuFHRv1DdvtTyCSZJcrwgMwd8KZYcS5XWYTbAh1wjA8AUPcZyM",
  "key22": "BtA9YtnoniZfQA82D6WmB4dDvjQn5UG4kkrfUsaPE52tEqQ2czoqwoocj3dQtykEXjsCi2N9x8m4JBhSqzcdz3b",
  "key23": "3czraeuoQBfP58473Wu6etxmQYVRkTDsr3wKDCxXTrqtcVoMYnQzWtLzxaX9omURtargADSbVHpXZCJAfxM6fEyx",
  "key24": "85aFSZbE56jRwz4eSGUjvgvvXQzxzgdiapSXGujyiA8A8ifYX3PPAiKGStrNhniuqEinAn6dsndNxiuG1euGFq3",
  "key25": "455BiJyypxXKpMeUJyVjXqTTy8Ywn6i1Z1uKTQP3cwrR966NdQfXqTMzGPhPE4ApjMd6FFApn4yKSFonmkbdwyzW",
  "key26": "2xL5qeuoPdGrjCDEYHJoJab7X2ZW6hg1mqTccyfj1QWjeneu2XFb7Mc1MygZHkXK7SUZTzHEFfYgD96C7nWxJBdx"
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
