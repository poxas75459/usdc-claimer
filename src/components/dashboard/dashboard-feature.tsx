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
    "pmqvsn953B28p9W7K4ktZybHY8jCNA2L4AkQuXb3PeSQrQuhP7kzcBPRYzrSmtr3XfZonDx7b8UM2UaFro8ozgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMbEbG6XfEwHDuC2qXSaKc8S25X1sdWY7GsRg8pxRh5G5WQGnja5QanLMAykTGoNCdbS9wNXjv34RFDayztP6c9",
  "key1": "3Gtam4XN89XWoXpDJAB52D4UKL8XovAQaSzDJsQQVJBZtAi4XZCML33Nvx6AC6ro81b3Qx2aQX2JrEe6QyT4EANc",
  "key2": "NzAbcj1Urd2G2Jd1mckS6U1iJs2gHY9NRoxd54tXgTSpbueQhMveHnSY7udw7cXJCD1h1ZHvxAFwS88kyjK6vQX",
  "key3": "5nqnnd8Lso6VSwsv2Gan4utiQow9MvHQdVZnfC4ZLFCd1GvzSxQAD4ju9hyN5mpretH5AJ7RZWVouHhyjaZToLD2",
  "key4": "3CDnqASKU4crLKJH61d8xHtfghn4fmvKQKvTQ347hGJB4qkbBkDtkeAQfQP1UxDhu5pdhzm2aU4ULpbRkXvCSKrD",
  "key5": "2NHy9RMhx1QrZFgFgDHwW2mVKJSrQ9EnX5GPd5AV9ZRe3jHGZDaCdTTP9K1xKNDX1oNiGfzkvU7QTTPGEK13CvYf",
  "key6": "dtyS41ZKKbaFbgkRab2yGjHoGTDfPBE48mLiknZEV3TyG3AehQKZGkBRMTTNgd9dpZyqNrbFsRi7pS7cMNMdueQ",
  "key7": "2TAcNKsyH8dwmZxL2t895ZSMmtDQJRSf4ewkRk53ogi3EMBX1GbPTeTc6aD4uHbG6psLHcjMkxUNfm8dEqLAs98G",
  "key8": "3TBoKWLHTbuSuM847itB3fd8DiDjebqzVu6oLr98mL1u3uf84pzcD9tURL1zhWvUyyfvNa2kMP6oqRSTiAjxFZV5",
  "key9": "5VdnPvQRWtmv7rnHGKLLoKmjFdc6Fkij8m9oKNQUYQ6bA4qz4Qjwe4bCXAvRU9yxjKdz3bRanacbU4QxamvqMNjZ",
  "key10": "3YFiqEXbasjVwsHBWpT4uzsNejKBDPtqXrPqe51Zy9xtpP6XAaKy2oxtbu4bRryuoQWgh5q9PhTNVT1o9EZf1587",
  "key11": "4dsWmodQoaDkME5W2nrMGvLkHeAjbTy9iKJsgX3ovm6q2zeP9vvWVsPN15iPbBisnYrHkWNx5TJtsywdCGnWK672",
  "key12": "sQsxKbW33pecDY4xn5uatFZYmZqRzq7kKNcP3REsXX7dhtpkvspERDfPULJTKYmAMxsva2uBeKp9ZxjUQBrRWBR",
  "key13": "9z11D3pGriqwSGbyaWXcrm8Tp8oK29igVQa9yhbzabF2CRAPF1nJKucHhvNTWHMtmjMmxnhQnLKiDa4ZyDkBRuN",
  "key14": "4tAMTAXToK5jeqAZEDedE4Y1HC37v8as43xck5FKwimq3c3bTq2BnCjuZihfokcCdszUCDFSa3KrBniuBccaFkfT",
  "key15": "5FpjGKrtUMKPS6mJAJwCPgq2p3euYnXqoV9TZ6132imPzaasvGEdnUjtjSBexM7VPgP4SrDNbYsG9K7GovvvZbt6",
  "key16": "4EFVBDUtakwMswEww9Ym9QtWUWB3T6KHo7uNoz2PznmSZZXRBqizMAbW7VJvZG47kNGMTz9bj41XxXzngqzx5KaR",
  "key17": "2dPpKq85kUBzG9o7gkgLXZErqvpWdAZmfqpnd4iYQEQcCMr4XLt5ptgdyhAL8PAAobkS8gh55kwRDFEex7MnC1Ts",
  "key18": "2pCqCgnZcSouCU7KYCU6gkfUTZfo26APusQ2vJ7x9WG8BWPuWv9KDxzBCVZvcWdSgK4tCeour5DuHJyGc4Keb6R5",
  "key19": "2pzdZkrgneMxwCj8r4Wp87F4NPxgceLuZqGkCKkS4di6Kqmih13vk6mEzJ1ChgrycqgibCP9LJJxrUgjZ2tQ5rMV",
  "key20": "42kqxhJ9ypzxdFpPmDdNg6GnQHh7ZPZvH1WWz5WC1Q4QJ8hTxrHJgkU7ZrNaRABVc3zHp3jxLDZwPunveD2KcVnS",
  "key21": "5WiHWwZuCVoHSCbbPaNX8Hu1otbpspchPSH2PUNC5rbAZKouomJD4ME7itbW1iyMziJ2HJHmH5rbBhqpwxV2x8eF",
  "key22": "3paTq15hWT4pYZ2tsa9zBzmQXMkYBzCecXrHHZ5fHAzHDGvAh951y2Zbko6VtYqemnFZkJgjwhwWdFcKmXxxS8CB",
  "key23": "29W2rDsUHssFYD8qHGviKAHghV74mav7TSJeTt9Pr9akMovAPGK9iUgxKzL1U4JacEaE683ENV9NpnW89AvNJSSA",
  "key24": "bz3ALbv9JSYmhw3mVsTehxx9MK4osp9kt3PEfGGakSxvpkSbZqkyJ1eARY7kGZC2PKvQMN1gkgkViXKW3kz2xZf"
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
