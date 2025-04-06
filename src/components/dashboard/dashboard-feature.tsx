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
    "4iSXaFAebZb8ae9dVXVdMfKXUw51V98tejA2m12cSHPfJaj7skNS76i8XeHxmox6pH62rn4vfgDCybXTtiDgYwLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BRp7KaZobLrCVpxTJcw5W78TNi9j7xZcyx42goxyUAVNM9Zo6yxmoAKsbmkTMErM3y2Khe8gW9GBkUnQHwD3oKp",
  "key1": "3sujPgtcjDFC2NtARHSTNg4pje9GGd5BXxRi4KFKC8zCT2TEUHHWxPQnXhbhgMsKKcwaEj4BiaAvrGPxaZ6uThat",
  "key2": "2v1Grt4ho9P3TMxLCkuLJK2r8AhDGuCw5erYpC6XairhebjySnD96aA5oZMoAmd4qbjfdsF1GYyGi7kAZjMght5z",
  "key3": "ynmndn585PNqneBd87osYM4hNyHm3UT9nm5wv5JqeZ7Phqi4ZUknb7HnV5nDQocmhYwcPpNF8KzcXnKLdH3ZzxL",
  "key4": "5EK5FNL9HcfH6Ro34qdN8VkbFM2CvkeudHjMf73z2Hhv62Vbb6VnEnkvZNfic2d45gNNDdUqCiT395aw3J7xGckw",
  "key5": "2mJxtX8D5NesuvgpoKVShzVFq3kyNLFunbBbSpoawhqiTWDcqRbpCHSxdHYyEWpL7aaYLwHGzf232sHSG4Wx2a16",
  "key6": "5NCekMPZ9BaUomLMaPfs24ADmFE2vuM3jYw4ZLCSRz18cgYuwLDH48xXVnXgL3XffncmCXQmMi42YdEdYdbtNrvw",
  "key7": "2Bt4MkuPX6JYYf55erCQinyvau629mapdbWHMCTzUnYjaWjd1hjHiVFM5AnLT5Mr9eFRwiGxkaFdtTNQMYqSYYMJ",
  "key8": "47EjgwZMa5XP44AaJ8DXCiSPESGsmM51FM3DTN7gpJg6nvjv8gWysN2wNbQ6gVomjnF92SvWSHJSDJbHZvxAA4ft",
  "key9": "4UkU1S8Ti1vRNZsd1qNkyUPEC5cXhxgCd5mv9vWcpKVY3YprxkdxjZhyTQM7uVbk8TB2Da8KkFFGx2648vJaUG9R",
  "key10": "5UTfRw2rk6SSKeu4PAcM6s571JtEG3ZHnnkJjQ5huc93sEAuT3NZ5rnGALSDgXbJgjcY1VKW32VfEynGUMucsiom",
  "key11": "2qw6ynZWZhCrCPJRho311Z2zC4c3onZxBDE57yNgg2aTuzEqW3MXnBRqs6pSr2WxRGKGKXTv29N8E12Huq6DVooP",
  "key12": "2PLB39XBSWnsmNdPRwZrJnwNdVWif9vsbBqrp7HH4qgWQVvzcWmt4nbNNywTb8mXYCJB7MhM1jnXdJVjfCgUjE4A",
  "key13": "5tXqNDkN2pR8cTRdbnjqR4vLEvc6HwBdzgQGn6kM788pYvT1GbkZp6Gd46SdykXPwn85d6kd5xAeZKgkNYbwn1ff",
  "key14": "2kkbhURCiTuM9DbHnh7YV7ZQNzZxxF8Jeq8LUALfB8ZMkjyMvXFY8fkjh7n6rmtTRzdBKb2SBLgW3ZehZtCXxidn",
  "key15": "38YP73dzusJG3KJJuG1rn5zK98A6n8VBFiYNTcixYgUEj5TdDWHE3Vd7SkEM1SZtrMfYQPjLSq7CTTeJ5xLpkwfC",
  "key16": "4gr6HJ8NyCj2v33QK1QQ4Go9VG7NFY7AhRJLe1tSrQpwvL115dwnxA4azginGwgq4CxsTuAm2x94PxkYBA6onjrL",
  "key17": "3hZYEpbFNT51ysKS4B3sTcWikhnQw9MvxeWVBJaGoqLGeMvv3ohCaVXBkc5P2evqe1CqyqSCABw1cSWcMhpp2xGs",
  "key18": "3vSKz4na5y2oEfnHfhJ8YY57MZZdHQLcoiGFTzeGaDBikuNfrJyL7u9NQ9QkGmTxnwZbqsdCNPYrT1cW5UZiSJmh",
  "key19": "5tYHVGQwy2Hd4PAz9db6XmvCrTkgDAKQQfogN6U1wzWMHwWpHvYr1dH3AmuFVG4UKJzFaVUMY2aikBvzrhPNHS9W",
  "key20": "41RLkLaMWvZqW5ZrzwQYm6jQ8yytgrHFFDRnf3GktPpLNH38pDSQdiwAikxuSSVm1ZZwXfzNZua3KVyqq1i9yZP2",
  "key21": "4w2tQJ9E6PrnjCJeMyRywRJQ3g78irav3X49xgBVPEshrCzoPEy4w8CX7GP1ZEBhTu2iv7nQCuTg86JeCuWJBVL8",
  "key22": "28KxqscWTwwM853DifoCpFtpwuU95AHLFiDiupYTKwfVNvwXreDymAdyw2Lw7CDXBDxWJjuBzhoZz851LDyzZnbE",
  "key23": "2kStRYjqpaBnPSJTniuJmDBNuW7MmnRK3oTpBzqfYBVXsqGpYjDUsrEua7Z1n8RGmUrHeeJmwrnZDUz94AktSYxL",
  "key24": "3tzy6jALp7ppwE5sAGP4tNekb99VorvLggqN7hraWYPhYYujX1wW4UMwnpXFnX4CuVB6bN9SubCWZH7AgKZuA5Do",
  "key25": "2Gkj6hwGdKetk5xseJsHSDDv2BUiTauYYd84wxFM9ss7KtbRdVccTP8qbroxkLEb3KqU8ks65zDkfj2s3n8k65wU",
  "key26": "55jkTxqh4pDu8CpLFMBXjqwambxmUbx8V7u3QNKvpsFMTp7FjUiV7CCyX8wkB9t8RqGp5UgfNH1XMK2ffUmSBbfL",
  "key27": "2My5C7N2UY8qYk7WpAE5i2Jwaqyx6z9B1dY1mjS17LPanSVBLRKzbyByJBqqK2CPFCC1wUxYSwPtCMatefcRcVmR",
  "key28": "3qPma7WDs1b9SGEPDi24MpqPwsnPz78fWJZENwkrafSUUNA6bChUzeZxF52qFZ5WypVrYzmEvdps16QebC2jHCge",
  "key29": "3pqS8iYwYteP6q9tXDWdk14P4KSPQ1gZQBe2GbtnrV3FxGjf9YJ6cvhE2wnhpwJx4i5xXtTyUTLdXwKoqmLJirYd"
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
