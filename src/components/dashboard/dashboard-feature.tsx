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
    "3Me7mfag4Fm5F5BpgmEDkHtN7LANbs8jJsK7RnNafZrM1VnEoS3BbUp4hHVkBpfatfuU5diCbm7WxZRw2yBvRnC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22C6sZPAKo9fDQYEpFL7PK9R2JGmrRNQSfpKYGsgcbp4QoC7A6LNeSBbvcQZcdYHYYG5L6yAvvQGR5atmfowEEoE",
  "key1": "5AQvsYtssJwRATQYFJe5v3KgAc8xCuKWVqFLtDFcZaUenw8FLeoWBtJM3ShnWvZUWKhiUcMztVx9EB6aSXf9mJNe",
  "key2": "4ABY755z2yZbQ12kKTbjAjHPDyw4cNUevCJ7aSzCM8gxHGCT4Mj1gSpCiBNJuGc2K8FPCHecmaCT5Zz4mPKaBbjn",
  "key3": "2hrV76TGCmyF4EzEP1vefcsvrFYDYm1Gzci8JooY8hbMjRBJVHodiQs3PGxZFvyqVzaZatVm7SmT83S8oLfFrb8s",
  "key4": "4AgSwDqUu4isXGrXYjvoymPTRC8N6G1pBe1qywoKEBBWkr9GSPFekGHfoewimgE1942ktokmNvidmS9XRWHkzCsM",
  "key5": "3i1dMZic4z4hkP8kJdLmNbENGwH75Q4Jyo5Z1JU5Pzu7L3YDfFXevhhuAJ6LCXRAfXJ6rg8xu3GK1NDKUa1NRw8F",
  "key6": "3CWfKyGqnjQpFmDmy2wPjgzRBVMq43mWEN3fAbtCEH52eUNqgAAwNEEcK84uE1x6hCp2NYtY7TbWyv8w8PMh4jGL",
  "key7": "WmLyMkFovFfBiPhoqYbYV4VDmz3H5yDVYbChRCa77F7CeV5zs1MRXu38Z5nEJjTdyu629a2fYzYtTW4DDgqznWd",
  "key8": "4Bd3VkAdUBmxfApcECcmCmkSBiFgazAGWTZNvAcWSdr6c14VaFiTDzcQyVqJ9zwxjTAKPWRc4iy5JEmfPyY6BCuD",
  "key9": "4R74URfyizoSTvMDAFY3KskDJ2QtUtQ8fsancdvJ5cskpyukC8g2kZBBKM4KW4fm26yYNVd25onPFh34Lt6B7iZR",
  "key10": "3stEnUHRhVqwBJk9wke2Lg3upeQToKvipBd7KnxmrNsmq8NaDJYtg3KtE42RZ3miy2RiQ9hR5qf5cdo7V5nFKAVF",
  "key11": "3iV7C9LWMmJyxpXdcd53Sk54Vn96uAJtmtG3jotC2zg8A1xDrq4CMtinVxxRBM4W924smDv9gMT8JWbeS5C4NnRb",
  "key12": "33AEyqWFwpJigN2iEsSu216uCoe1LMGFByoQ2TfBGExELB6MPyQ59nLB74LM5PQcZVeMkgKFQxoppKHihH11YB8S",
  "key13": "39DfVQqcD9yk8D8dWVeYWh4vqRHjqPqjcdrtknmZ8DXGoTnsBmrgAUwerbsG2UQoLMcguFpvygj7jJ2f22J4bsJd",
  "key14": "3ezGvSGGnpGbiJcwFxWfGcBuXf7ZtErgZv2b1T7KLkDus76pzVTyvdBkw6AiBeLZ6GnrDp61cjrk1ykt9KS8fJpg",
  "key15": "s94aKBes6d4XPvNNgrAuoGZRnrEnC8BoRtgo79EYV8smLZUr7Vs9DqckbSWodXCZteR6tmDWK7YnCZ8CDadwgjL",
  "key16": "24LQtrU17EACRK4zHojuCd2BfHamfudf3hnyG2buZiUG3rhvRZYA3gbz2yFSSkzDpXGq2LYvBeHdZnNyY5ofHLV3",
  "key17": "3gFvPjcHvRoDyRRdSHAZkyw34E618KpyTRcSkFaMNVeo5jeo12oh4m2Dh3MLLpnZjkaQUJF6XKJvL4LRVoz8JLBQ",
  "key18": "NcabkSP6A6dgCZ4WZghaLbNmNnUwCJjLuFyZKMrmVF78xBbxKLBazdn9gGQSwPwqtqsLJjaxN3iUXkZxiMUdxy3",
  "key19": "2jivEj9nSPsQd1ghniXrAs6VhZuHbu645HmWCWJ1E9ErKE2h7UgUJRpTQP5Nt2BCmvtNGc6dhD2FNkZ6E4M5Pxvc",
  "key20": "4z535iz8bsEfC5sHVxPH1oLmCg5E1NrayZMch3Lxaxho1jCi6ke4kJsF6wDCZUjYTC9QDStqiP8Ro6buLJgT9tVb",
  "key21": "3vzKPFuBk6RqnAB9UyWUe7bZa5nzQA2817jsKAPRmE8t23igu86icX53UhtxC8c4fL97dgPKpJzZ8FZegwcEHowD",
  "key22": "4m9Kaiu6w8etWqKtQBEJ5wPsFK8FQKismegdZHBdkBHgWzNcdLoojhW3hNCx9MuquMLphLdwuBiKanvcbU8ZNXS9",
  "key23": "28kmmZuLB1aboeJr9Ft2S7rf5ajLUmoYUoogrqwqxezEoEirxtxaDB9UoPLTEFMrxuacRi3z1Awug3m9vwtLdVJq",
  "key24": "UZGWPuyc21PH9YDLZU954mAGtqGsnXPmg9MV4doQaMjnx2UsqQbHtLiG7R2ppEDtgrN91YbWNA8yr2aGzq1Rn3t"
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
