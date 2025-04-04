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
    "3b5Nnk7JosNqyLP6FgHA4hCCZiZMUNHmbbbwVq2hSbduxkfDxq6hqqoJfwjJwUgyQaa7KcDeAZMZtTSxoPJbyfZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gGdubEozJp1DyRS8hWEaNj7wRt3KRn9wjnavycgUTUKpnSgz1btJMmbsSh35wgLoQ6Abr8nyDh2sKZUNcF4mBvc",
  "key1": "yCnFnw2z87h8fJK4AU6TubWiNjPnUNHS5anNiUgmxJxoib9U6LHyDCjvSPs74CftC4dArzXzf1UVmx6JLtMNzUi",
  "key2": "2FcAKgF41NCoqE35yLmMSuFhgf6CdhUpLN1DAbeReMqkrCPHRDLXSxJQgESfYhuhQJgfroQTjiB9k8td55qDdWqE",
  "key3": "4e4wHYXE86GGwCJiMwdBgx7sHcqaUfbjsxNkG5Qtgt8sUFGMow3JadJ65gBPKhXNZFhRkr4KX8kL5qt7VSRwUjHF",
  "key4": "3g3YsLXY2A2ZnDYaH4sQ5bY3i6KtNF7UQfLDTX4JsF4p55PMPbrNHM5X9e44zzptt7TAu3jnxG1JW6NMTtEsgYxc",
  "key5": "2SYUkhLCn7Fo8yh8vL96WhzbRCUGx9oTCDZAAoC5hCbT5cV8TG7ipHPQHtMDY5QR81VYdCpDLwRBugTvmXp7eZuw",
  "key6": "4m6SNpw83ZzABUYsGiCUPzco16VbTPvHiVAutFqzJhmw8RXiSGPqDzFNHTEdMvaVxJyKKy9gCf8AHwEe2atJQFHU",
  "key7": "5mYivp2Qs1qYxywTmweE7CPrsZCoPoK8216GQhJuqqvxA7dujhz9tAboXcPBeVVR9Q9TW4dwenfTsuepBLh1fRjG",
  "key8": "37b1X3rr6Sv4eVUZHdNcH8dW7RkAmtV2MR9DW2ZpzceFjXHHafoZttq1qyHZTBL3cxo4BYuc2ucgEr7yowLRoD25",
  "key9": "5DNmLD7UpkTCLaiUSMpLdH8NDDtwexpSdmhZoPRHjhxXfqErWoWECFkeG7xhuTKESvcTSLzcKZxG1zjWLXuDWahh",
  "key10": "4wsWbmrV4e7oieD7PfYJ8n9GvJy6AeVehnLm2kV1qHcJtH6kLHaSJtibmLpCfK4gRK33woRoCJqSeBQcnRMUXXZZ",
  "key11": "4kDA9xK7MXrmpzwGkN8ZHVa1d1yn6YebiW9GSL8mUBHgVaZ5oKSC2REGnBw3hT3dUy6jNjcQxvjV9ARk729DaErj",
  "key12": "2qXdmcmYYAWR2tBhzsWQQHqxCxn8MCvTU4dq4H9D5NowAhsit4Vcjta87bWVeTrEyGRLLPMuEN1gYkVCXopUL6Re",
  "key13": "3PwihqpSiGy6w3ndTA2nmB4JXdcfs6cmV5nhu4jGkJWR9k5aTrXnTrBKG7evpxxhSWAijeBfukQrPH3pfPXzBwSE",
  "key14": "4UKZgEPiCnvBtZ4DNWNc9KsawTCyLRr3e15c7VzEj8BzDKfkuhYKLRFhjPhPTWTM1f5rxSYD34Sehh1kyj4AAwCG",
  "key15": "2iN6WnD1vJVDU2wjAGmN45i3EMFEpfWa5rnUb1GPjy9qyNG3EnrEsYVm5UxevK9Ddu61Dy5k7kYzUyhAouqUd6ds",
  "key16": "dudR46nFdxXqFW9QbB8CdmHmNYW9tuuuojz5NPGoLAcYTDSwEpKdVCxbh1VNKrRBeAZStZ6D1dfUUAVKcPvbi18",
  "key17": "24qQ9MwkKsoKaoGhiw5nrNXgxs3WVPsy9JtmmTU3hhLLFgx5tj82RnQzYTT5Ba3TuYm1nTvGJiA3pymhnLJWs7Jx",
  "key18": "25vDLT55m5R8jc636cyRgBF51MAyAvzXW1CcCTT5U1TUhFTsq8KNvJxoykLMxbJit6GvUd6FL7YzPY5dms8tcFCa",
  "key19": "124HCTPm1teBu5iSdV7Dvo7GDEV1htQP18mVeRAbefd9uNBXvVVLnhWjKJkZJRqKLfJnVxDSvfdhG11RSPefHbdw",
  "key20": "43YBYA3ZpnnF5V4GYgCUbVBqt6eVaP6pogCBgFBabUSpYAyuy8SMMjmYZGm1rqJrA2Pm7ryBTemABNWVUejzkL8Y",
  "key21": "2yd6ATMpAh9G87Wv1YJLQSgKGqHHySDqTRzTiV1svC6rHpNqruqwTPjBq9tYhht6aPzQQ4Wk3TsaXthR19RUsT1m",
  "key22": "Mx9rpxNBnJsnPrH6QHb7iSPjYFkBsQNxfBRYfRWKFzh6jesLREdrW11cKpwmy6DmyZAsvtF8tobKR3sYsr952og",
  "key23": "42seZfy6WZMJbMQTeXdGWWCEuTwTLNGL4xC9E8Bsdv6FrYV2M3ovunPSowbWRrgCRBnNtZPFNCC1zTNVvheG2JRt",
  "key24": "2gFyF38dtbRaFx9t2bDvCUzcLC1Peta7vu15eVfvG7adbrEdVqGVusZDAgTR7BaaN1XQz3289xQTU6YDWTr6p5th",
  "key25": "4TscN3suYVUy1w4uD24Qa4rWPAUHi5jBJZhDgMnExkAJ5b2jFb3UQSDaZniLtCQuUc5dWoaMuedzuN1pz3EhRbJq",
  "key26": "2J5dP3WCQieNRZWAe7oVqJM5PM6z7e1eDTDwvka6vgnDCEkxas3pMQKYyrEUNtbEbW3bX8pr3CWtyPRAKqD8R21H",
  "key27": "4L5tkrE2XMBWTGyxbbRPANaqgPwLMdEuCFHsM4ahANeQn3N3va14FtjLSPPZtSdpDHVTa8rFgnNeSwNQC4YRew4H",
  "key28": "3MfyfNhbft5cGkx22RgJH6Nwtza5u2SNBMD6UfX6NEsWvbnQqPebkLWpHVdJr33MyqJb7JGm8H9dVT5MBTsyTrYU",
  "key29": "3McdVQ2VgxvQeswcEBSGe8MhbtNXdwgBTKvDdXcNo1cKw6i1TzLuqCefucnQtk6wcWcC3VDDz931jzqfvgeqZ5h8",
  "key30": "4khF27VP6KBtiFiWuGn1DijP7ovVcC9sz5iboLRxCCPRV5nRWJp3uygwVShUq3akKMFWkPp1J6Z13h65eBE4LZ2z",
  "key31": "4XepyZs8kJQGZCt424RCvR97Tix4fWwip64wc1sM6qDdZYv9iqMuj6A66TzQnc8R9CfHPXeCk9qR8ouZ3eKuDKaq",
  "key32": "4od2dpNJcmDumu27UsVg8SyRmgHXTWszzn99MJiQnhRbtYsSB8743j2V9XJ9KvLCX4FgfFnHKRL42yhYhxLagNjr",
  "key33": "4FbhDKMmxJXmeUzb7Ge7JW2dM6WN8LGs9bPY3VEoKScXPtTKhf2TaeKqMDsS4svZnRWjJs2g1NZGoYM4X4DGTfCb",
  "key34": "62VKK9vH9QLM1GP5qe5pmVBGth578P1XT96BtoEhTtVZGsTv9JnPrMBvRnwg1Qf2JNn4xaikDgHzitVPK7TqgMLq"
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
