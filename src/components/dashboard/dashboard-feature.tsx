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
    "4y7QpBbi8nSyLq5CuBhf6cXP8gP8kAcKYrh8AYWKHVSBRXi2HDMAzogdvY38YBACi1ypvkDLMJk8s4ao112bSTJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JZZDhhA5U7j1sx1BryGaWvBQxwBfuEStKMovfKPTZbLz4ZZ5dxePfo6amxsBGXMeB4e6LDyWH97iyeAGJwcUa97",
  "key1": "4x3mN6H3BQKBosbujz8WY9zi3x69XKBPAY2DpPrP2eRrKymxb3T4LUwt964FmaDB1GFEMCZJHhAcA8gRUtqLirzP",
  "key2": "3qAFZxsgeajsamtB8d4Nfc4bS6BP2EFZxjgSQ97VuEytTvpaVHkCkstUfhyMiErJXtD9FeSpuaZmTRPYU1vYBE7N",
  "key3": "2k4totn6himbyiTwaFmMazD9r2wy9QzNW4Kn9RU8QAN1gULhabrcQDrvYeZdfz2M4NykR9j1UAcL8SijTeVa4Zng",
  "key4": "4fPfj7mjxuSutFA8crg1davaBYwKp64JTsm3o4EhbYHS2rMf2yw5TYP88vZHsaLoyJVU7o7kvRdA4VshVCtEL3ML",
  "key5": "zhcKtrkC4RGwtabrxBnbHVSsYaQsvNsXVZiPQoN2HWDFK4FuC5AEwihDREqb14mJVoYVZoubfASsqbLSuZvqt3p",
  "key6": "32HPqNoER3TycnFUNYmgPQ8ixrjR62jvNQKEac9ZwVxNZP2yuyfHVLa8vycdQAUcwp5UXSUx9v7XsK4fmqZEpARk",
  "key7": "3ixucu3gNGKH46a1XeEinWJFPVaSV3TqN6nGtAf8hmPgtoAEkC2n3dpUaV8iMkEaFmDx8QsarafVpcvsFFZVfFL",
  "key8": "2EeQbRcznaoaC4cmy6Z9pgMxt5T7gPM9AyMnHLo4TU2QbkEgrxx6h6LjJ5a4hRe2tk5i7WXdb5DWbieEYJVJcrEL",
  "key9": "62HHLbY9dSmYzdyLGtVRyvrt8NgNX2ATpgdaeZvoZ1oqj6YfzDE21vgvgSjyfm9gYXwPzoMSxWMzvxToSEzXdHHz",
  "key10": "4vYRFsE45pfH54qDSmAFsEL7MY6yDma5rnp5tikS6HtAnX4VDz6dDsSoDM4bUkrvd3HoZ5acKYqiw6LAjvviYUhk",
  "key11": "5yxpWdUR1XWJqgeqowdi5fAwm6HZ5ckpyiXJhSC1FDCzd6bo937cpC94v2x8eFzDW6wuLpR3S47rvfvJrxrwnqrU",
  "key12": "UAexAWWh1fWrTp7BWkR5fwCpKwPj86wqBBzafYusBRiny87YRvqY9a3KJYVwrJDSG5ZHZfLZYzqLJWmx9z2DGmi",
  "key13": "2FVCu5sb9mEEeU9sHihA2F1WDxVDjTkWYcj7EApzZQhXM5Gi6ULZpPbscpzP3HLnPxSah9eAkeqi8BVNKFnMMfnW",
  "key14": "5y4MD9pPY1wmiZoAuhkxnUMcg7UTS7nWUWQvZ1WzuCe5ZYAv1zkVvFZAfp5GEgsicGibh6qGMQmnPFU2Ni9uQdy2",
  "key15": "5aDwXZpMBREW8B1NADmnzhudmS8QNpkScHnR7c4ihYqZhCnRmsQYbET8VLzdYkF3i3UCsbJP4P9s5Z1kiTRcyFKt",
  "key16": "2BRLWwiADpe6AC3pT1146qvfptctUTA91kXoEGGqpLmPn1s32wyb3B11eNNcgnWwdEBDQgGv1XGCye5Wrabi7mSh",
  "key17": "63B29qGpbBkTkLkDW5cMUJLFniR45gm3JkPkGhuLasiku8w7vuBARow9BExJuSGV3kEDLX8eCXousihNEWksm9gU",
  "key18": "25jQ7J9FErQjGJ4rzxJ4iJ8ce1iw7HAxAHqYcMZrbxoLnxP9utQJT8M2eziL9JuH2icJT8PjouDxESPYxfwPeumK",
  "key19": "32nFZXqpmjpcerZ6eTwzwa9iEGxPnUUnbVBApxeYxScZ2mDm3v9xdcDvDprNVJjSANa8zZJfnfR7PS9pvuSDW1Br",
  "key20": "51q4Sn31K9z3FiQ81ejqnVpJtvbj8SBFkBTeMwNEVFMvSUhy3wg6Py4B7nPuzemx8TUqRuMCp6i4TWKTV2VvRAAR",
  "key21": "2y831jcRKxdC2W792AaH1SvSDAnoAFFSH9zBFXrj5eN92kc4mtHYMvLVH5ZjjjKn9nnRHkBwTTxRoh5xhzXG4zW2",
  "key22": "39KLS1hG7XFFvNf57A7WdykQRbBNLpRGuHLfoe2NNBM3Pvy2AHfejbmREsVooQjfGo3ZD9KX2VtEGbJjzccpDUtE",
  "key23": "5wp1bx3LgAmrqp9R7345W57MyHs6Mi24NG1Q8HJSrz6joqoJoaRMkg8DsE5na2ETghz57NdLPh8rYiayyAGGRZxU",
  "key24": "2kpKgzmXGbrgRW5QGV2MstLk22ys3JELhBStcqxwWg86LtNL3hupw5GV3qAFQVUKwtWiVaBn4XvigZTaqcTjQZhw",
  "key25": "5PZ9K6HGCpsp3YXiUuyioFWSuEjWgJjtW7tdzdnHk87kWgiTFvNUhsefZjvFPtW3FFeVpL2HDiVyxZHKukJ7xj8P",
  "key26": "4jiRAU5PgVei4teXHunWDd5tsUdmWL5EKdsk8E9vUUiwbU2sSRgXhegG8KhCofW4QcTz5aGjZebhMzifz87ZqcMB",
  "key27": "3YAG499FRxitCWzLbSCengLAcz3yXwoWnPQhmwMdC4LXqwK5fCtL8zdYAGjgQtJiqDCfbPJ5bn9Mr8cFQyiLHRgQ",
  "key28": "4Kf5zdXwhAaodT5h4tcuYLNcKFtgFoW5fMvSezCdjcqkgwqBW9NWrMjqJELknaqbrnMoijpWVpuyFKfNQ2GWCTCv",
  "key29": "2diUtV7w1Am7MT1YyCAt27GyvDpRrPMwuxRkBkAFf75oHDL8sz7ctin9P4BsU3doem9fLTNxU96V4YakUQ2DsYHw",
  "key30": "3K6Wc7baWEYmu6RscThFNV3bkKd8ntUtSehjLHK3cMpjofzJweGD7bv1TosbVihJR3o2r4YVNjkbY1B9KYX6J4Nz",
  "key31": "4fzVXxQogpc2dpqbPLSUyceRAeovJcE1fKkoSzeDszmhed91o3eTj4znDdnrokNrGqLH8Qu1ZkvWzvc6XAE49PEj",
  "key32": "36hykQwfDTduL2u5VMtD2gWZwtTQALsaVd8uw8tgVHeccXmD51XHa7fXuRuaAZHxCYqnqnDXBk9ubrYx3UexpvcG",
  "key33": "59XA8GUJgwyAb7SnEvV3wSyV464gokdwFNuNjEtfxRj7MgxeeyuGqNZDFnvqZTT51rs2xzK7tqg6rXtE5waFggEC"
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
