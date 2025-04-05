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
    "Th9vUZmLyLb3q4NmL2McZJJGRocEVkPdZuhBLuxiwR1yvRgHqTFGmHs7zbdwhBBB9h3FFyJrD8Qw4AEpevgqFUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pfyktdJFVWvWcc84Hbtubvae44EeCgR8xPho2HYRfggRxa7SRZsrBFof9J1Qr2Uc6ipugkHYQe4fDiPkoj35HBj",
  "key1": "4yffs8ZD76oMDSgBRbPd557cVCkuceCNqTPnAJHSjW7XE2XpyML5oegi6Y9w3JtvKyCx2Quc2JG9dKuS4Fxmom4h",
  "key2": "5XWkmFR4QaCwnNna1djGWRJY34GMAjvFxCqWGYaZgQyz1iCzDartt1np2A96V7NdKhfv1gcGFDstifCA7cy1Rkzo",
  "key3": "24pFo1VvSPkfj2pVxrNqZ3iULUq4VxAEjNGcUs4ru7pWA77uJLVfNA42bjawYbiBJh6GdwnhVpfwn43kSA2YsYd4",
  "key4": "3AFFNr4v9ULutU4GvrwXKJycoxkz7yDBXderCvxaUuS35zmmJtd42jYGW7aSRa6MrsaTQkq7KxcjYExyiKXAzi3q",
  "key5": "4cAUttjUH9iLnxYkjUdTQ5gFJusv1QQ8BTXzxvsDPPMSmsqsg9ZiULktK4dgBxgCS4dehU8RnqFtmt6ALfnvQF8x",
  "key6": "5ceZnL2fDz1gG9EyDVbJMNwoFuVE9v2Z7voCRi3E4DHqAfFfXGfiqmiUW5XfoLqZC5y3nPxyxKPk4rq3TKKjnqYH",
  "key7": "29eYVdsBFY4biNV17S22BNQjN3heSKb5QVgWoP3hAGqHKXzfmo2pZB77Ntnmk1PLgbg3gA4Mg6CVmJ8iua2FAm4C",
  "key8": "246jw9kgRPudjsvxkpY5LY2LQ3C388Bcs11tZGXvnYwGP2NQbLPNYkujHxMMnYYMPwxiKLNPd9SMYg2ghXZ5tc4a",
  "key9": "3D48qV1PP5TVAoytkQx7BWik1nqaZCdFiCd7Gqx3NSMnTZn98Vh9Vs8YFngc7aP7px4y4Jm6eHmd8hLYprgaEJf3",
  "key10": "4T5aQUQ9o8eWNNqHBiBC9LZdNQobP5STBPBXc841ndHxUVg64tMVPpbdeZY8JmKXXwKMCK96rGYiX3qYY2DgaUA8",
  "key11": "4fcbR6XHK9mwk8j5XoqDaaRysVXWYoigNiWa7zz4BjJWMaoo9P7cb3zbrZj5hX12dUC37S7cyYyUd2cHpTJGNn5u",
  "key12": "5BvLsnSLsAKN6ydUePpDdrDhHQWX4x4ieVafJVVbYuiJBRqMatthUWkvEkFToHkYH27aCNME3nyS2hdLD6Wdv4uM",
  "key13": "4HDbyaAziACSQBPJ47YRdZ4JKyc5i1RcdAsQhDbX4AL6mpo28yLypSjmH5UZcwtdXSQ2MJLHMKdnWXCgveFF1TU2",
  "key14": "hJ5DqQ9GmQhK9LouEBurtQz6uLEznjmHY6U2MfT4QXnsQSZR4Nw5jMkzuNf9pz8wJibj781Bo9yESobUkXRJeCN",
  "key15": "5QoNNheZEZSet7kDp5UuvmD8Q6VUDKzaQBWqwRKrW4jAuDTgY4HX71cqki28ot5NwW6yPqmNz2q6ZGE3hmBr6U67",
  "key16": "ikgAz7DZ1QB5M1mEn7VAQLMzqc4HLYbAq81t33xw8jWF6W2QRHfRXkitFi4sBq6suQiciTbQi7T3o3oetzR2QER",
  "key17": "2Rx74pogREns1AHwSKWYEkhS65ycKFgUfCh6ERWKyn7s4Y3ytQ5UJ9Vy3VcnZCypNH4M6MkHq5t5udReXtmkLX9d",
  "key18": "gVEJLFQ4CNUh1JzSBpAbpkCF9kr2MQ6Q3784Kmc8yLBvmV43pvsJH9CrnYo3fvVRDcCtv1nNANXUAn5dmkzU8qe",
  "key19": "333XdAjcbMk7gFF1YLYcs578NB8qdLvmLrKfbS1bjUZa6sac2LCYbFsS5Xpxc7qAcnXyLGKHp2s8ZQeG3Q6QBFa2",
  "key20": "4Spt4tA5pNax3TC3dshBzhvFVXJuDpwY9sRcmHr5X1Y9F64citsDKvmHrJ1gXKpWysCmd5RXpufPLRaxyGauDGSK",
  "key21": "5SXC5Wm6pviW323iRoVThkCbhZdqwoagHNr2XKx6n8Xh4QKtzJ6ji6K1onBsawCdwsDdXxCbU1zeCymbdhJwNcE9",
  "key22": "36LY4aA3h7mEZwYvejTsnKSgNYoMNrNa3oB5q1rrBm1eJaihgeL8cuXff2pgsJqFBWwUg8Jy2zgYe8pRdrsuKMaH",
  "key23": "2FwLGZGqc68QRAduRAY4epf6we8yTzG4ZrLRnHEgH8jB1CMHzHQXyzNwNTiHeB1zoFHgWd2o4bvYYEkCYSXSABRN",
  "key24": "2rrbuYe25szG1RmKaqKRfpTmHe3JgHa2s8ywVagwuBbiqjYiHRjUTJegFtF9BisWvgCHaQDATuEAeaojdJzAV6so",
  "key25": "4kpYdHDRnCd2Y7aTRWbG8frZxLqEsmEyGr6hPoASSC4JsfzMkLC2XpakiUiqdZvf9PvbaDThmQcHb2dfduunsHHg",
  "key26": "jbbMaofYoj6STK2wJWNagj8XhGZCBeYxAWb8brTwbpmZCsVso32cT4U7RjRFszbb58LfDVZrDtHi2jFLRCwBbsa",
  "key27": "56BgNbZ1pyXfQcCciuJn9umYEnesqf4yDGCGQwwmzCeRWTqRbyGwSpmXWNFsAXq6RappFsCFcyBM3M7TqqJRPmK7",
  "key28": "5vpKgvj58WrezTqoRqGDk5N4wknng4gEANh2a1EF1NTwDmxna1dKx4cSJpXeKz3WvoFbKLukxTbXRitCFwtdsZL7"
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
