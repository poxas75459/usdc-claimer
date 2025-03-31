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
    "25FjeYVnYHyfQQJvbooaJCV2FYmsiudskaQb9UU2HAebC14LWTTgbk728qA3BmeCzSmdzCmMmDMk6iuFrNH7r8Uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nLzYmT4Tpy9zu3NjNFUmVSwt1tKC3bB4ExLDgbfo3oKV7qymb5wF2YijhpeKLttJYQsUKQ99rxuSaxotjU8FAde",
  "key1": "4Uty9hXmnPWTPxkRwr7jQpFFqX17JV1zvLUxsAqtZDhjYZNjqHKLEW28UkrXoKKWoAqXRkDPffCssboZX85KKtWC",
  "key2": "5W4BNwZekNTTNEKUYz8GJhabd4azHf8cPkmkhQMJ8inN6BzvBwcGeSmxQSc55FMEsA9KRnGFLriX1c48C9nHKTxK",
  "key3": "4PmLCXKKtwAujrpqKGxyJokjUvLgF83WqRVh9T1UW9VhBfgovB59CLaSX8AxSvvW9FuLHzY6t6TrrBTat8oaJNRs",
  "key4": "4BtfoqWBbNXRGXGeUUnTabkZyz2x8JpZr7S4LKxrvsnfDsfE1r3eFnnUkrpJzKLTZuZTi4Bav1bFTSd6m6K2QR76",
  "key5": "eEwhGsb9HkmLyXMVsZxe7cvaZdMqhnkhdXpQkQEDsPX9Q7oXEGKUDQNRF5hhxoL6c9acja2t1VcNDaWzFgVG28n",
  "key6": "Hz3eZRBM9Vu1ibL5xa1nK31hr13tZV3UHGosh9pTPdDk1oVTsLtExEd59jdQhLivmR6HiQdgCt21KcUpBbAVZMe",
  "key7": "2faCKYpuHFGqkLfQfKQqAGqSX6QTik8C6zsbHLH4cBdTnU27aMmYdMCqxvDXwV6Y9JAaNhs6BcK3TaLsZMC7aT1j",
  "key8": "35at1NxdbfNi88GoZmycgNm45gsjsy97wjEuZkVC9hNxkp2pqUtZ7tNmbwxTbp1rWAEd1xEENbxXWaJrGi4eKjTP",
  "key9": "4sf6RByUUxiimm4RLJJwFV8N6gZA54pxjdFL39X5z1XG2Uq6AnB9d7i4rsZGbPPeqzDu6QnhAgk1r6aRtAUsgBty",
  "key10": "66Xio4Z2VPmowuyZEud2hxZBSjifdRtsL71YvJgL1jH2QQnr9Yvc79kCj6d2Fut7FhiPNd6w5P3Ko38keunNA17V",
  "key11": "3kFtbprdMcfJdkvaV2GibpwgYiqxM8UT7RfvKQ5WKMF8T3Jdbq7k7z2UZZjMEjkjktKDtMYFtoGJ3vxusqFsZjvE",
  "key12": "2LgoWUeQYo8BuWoJ2kcjfJ8iBPv6AUXBDVABL9q28ACnTyDdV6jP8BCJ3wh5tVQGXeFeKvdgvCTN9ErPByDt2bEC",
  "key13": "2yNphLXFkGEABsCuFmE5pvC8NiEjLgjEAAzYqNcMFrtMKEc6SMzcvetiFUq7YAxmEYc5Gwo3baAQdC7VDrV1RCiD",
  "key14": "3mT9uc7qLZLtcpGSQZKn3L2xvTHvemRS3aydo1YTWxufCPkgaK2ff3EkPbDkuBJmoxaRkLkVJH2NDhpxRiyqfUFa",
  "key15": "63tXNTCuCLqaz4WUFk4d74xmUmVpn1jGptcn4mFKLrHzaTXTKdgAFxNUrzh8AXuobUArB2YRqyHTDXj3Y7doa2Et",
  "key16": "2vTwKrZBiaAzpa236EUwxfwethNpT3h5Rdc3Cxrjx5nkCLwNHGfeAf9Cz6vExaZZruoPf9U2zhnPxwfnjxWEY2di",
  "key17": "7voAdCxdtbgpBv1FicWdLguRZWTuv7JodAunZpyqZKSq8vtjJLvHHZEWTLPJ8XfiQbQYhiWhHcTVdJnkyQ5Gg7o",
  "key18": "5Qy426GsAsTFWBy64dKr1AG3rnE9yJmvgNLU4XDFML4Dp4rcnd83Kyg3NMc2h3CtmstcX7V2tNo9mBVS4Nxzfvvs",
  "key19": "McLBZAErEQnks9wRyaGsk5vsuF3dA8SZdtj84i1PbjStvwi1Eh2HDftMLkMDYjMLy9maVNC3opAGCLLYMBGgfy1",
  "key20": "2cfJNtzr9VhdeA9nyfaY6NQ3Cs3zBQQDcMnxkggTQ952WNEepaSfNPtxcCoJAZxAt6QK6v7eYZrFJsUH6ojUMXgf",
  "key21": "55LCvqH8XCFFJNg4oRVa1W8uYeT4M9EueyoK3hb7wMJodvyxV3Si4uxa3k2x7ZYPpuyvgZaxPr5XJdvR7DabGfC6",
  "key22": "3DMxYsQthJXRcP7Ukr83oV5dSX6K9fnBukf3QSEekpjeFRLEEbwWMSKxE8ePPBzZpcGgQT6jpkzQJFoHRJVTNNvp",
  "key23": "5u9bjteKCS9F1f1VssaUozAYvqfCGCE6Shc6y9QWU8XV2Q9pYyd5W6Wfaw5sX1mATdYc16K6B6jatdxwognjH8ZR",
  "key24": "2r9j8pozKNwvWQxVWTUugZ4jRFniT8Tp3URfAFWtFqFG82Wa6dFTtJj8GjNXFA8WDofyfyqa8TgTJEMZnB8Stsai",
  "key25": "4a7aGHK8eHTCgJBd3e78pmxxR4gLgXNaKevbWVKSB6CQ1QXQj6rxf1QvE4MrE2fQB6Z87n5hYiJKEEmL1xZ3qhs8",
  "key26": "61Tiq3K2sN7tRpZZnDQsM233uGaGewhWp7uMbtYZGGVwgMB3WXrcnqnUM8w5TZW33QMWSQbEswy4D9MZszuLdNFf",
  "key27": "4V96RvyvFzngtgfn3TcVmMwZhNdkfEPrKR8TrHyBUMsMMU6mAxwwJsPCMzciCy3wMrCU96FbRgXAzozWesG9Mzx3",
  "key28": "3oZvU3sCmFNf8axUcTwf8chxAo7vsjE1GNie2ouFFngnKYySJWkghVy7uwsi7JEQxnHZxpszcbRCmbfY95myExQ8",
  "key29": "3WJAEX63fWEcZG8eTuWKRznVh5e4u2STW4g8YkRs5y7K49tAKSH22mQyTL51UxWtY8tFsReEPGfKoUsmDy1DEzZD"
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
