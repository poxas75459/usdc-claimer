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
    "5tAfWXdGURuNWJYArQeHzxPs1yYSwTYbYnLvfLK2Jg6tDooDibhSDBanq7SdPyXevcg83Y88bK84N3eZhtK2mR6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hWTbamECLy6ZEHorffvWGsBsKwVGr129mYcoEN8YrDCgod9Gfk7CzGthFokVXDvt1wk8VkaBiJm58zcprF3wFdx",
  "key1": "4qGfU2rCvxnHWybFo8xzPdTBeatvUK5d98wstvahQsuw5Zi53tvrHGfyCrD1ciqkr5wsz666fnxGe86wXjK7nA8",
  "key2": "2wv4koB8vnmeagAdSpoNRthFQEqxiqdDSxgNiGw8nhMdsGaLYGiSkom9zTQQc58QXxVu8Dn1YXsxkuXCAGxJsWXF",
  "key3": "4a5TdnW8ya5hCNnjULTi1xJeAj2sdT6GkKqCtwwGksk5in4yFi6GVeSRcumbUS36V88pTVgBU3EScoEG3v95F4mk",
  "key4": "2DrJFKBTH4W7JDVpDUKvqBPxXfVFLE8VtZrFFotvm6mF3DEMoBLQFD2hVtrqFgNTAENdxrs7nvLa5xKXUtZYGLmK",
  "key5": "5rFjqfKKj4vjQKjPwpr8eeTsKsViZGTLxinj8SEZtQgyDwZBZatM9Akm9qCi1f721biyiaX9jgF7tJuGYuc4cLb4",
  "key6": "MEPByniEjNA2eS9RrhexZMni8fswsDx9fd7kytJc2u3U9EgoLsYQZnWYgz9aqGiJyqBYYWPUCHAm32m6bg3KFnR",
  "key7": "5GYDvV8py61VccgSBdUt23oMyY9V2WebLQjQdGQrfAYW8wj8XgmCGVBscBgFeaPyxUhMqoTgAe4vWu2DApAtuoU5",
  "key8": "4JdnCRm4LGjWdtWQmJpqLA1uLsxmCwTaj4NDeUaYhAHnNE7BYKzwSC2sfCFq3TKUveWes3RmtGS8M9iJZZCLw9Zj",
  "key9": "NDz4VvDKnfYEHK1rUpzaeW1U9st4niNfUEZ2C4etKQYdbEiYwPGYQiroBATzTpsyYBHERXpWbvq4nUUAJspynjx",
  "key10": "5kJLG3N4egVKPFezgpogN5oQyWt2TTkMBxZE8oyFCt23cQBi1nzSZHRBi7BDvvMDUFKXeVSJ5Fc6fAE4PkLRePWE",
  "key11": "5KYb6NbEm7KcRyybM1AZgPACCKc7xCGXtRqxVx5KnTYE4VSaTHWobYgRmEf11kohmmifuVUh1H1gnsxhTTTVrVzm",
  "key12": "FwZVNRHKZbXdmUHwD6Htumrfc56U7L28jHhsQpL6rhhSPzbqa8yiZufHuPQEeUZmucsBegyxXFuByku4iFbPJhG",
  "key13": "5neiJ2TTYtkh11pPZUTUS2R8FH7yfw3iYX7g8QE9DPXdiEuUktmGKhZ9uhpanvrfatcNbefXyo8rgyjs1gHYGTPt",
  "key14": "rWL9dCZqCcpnfjrPz22We2sziRJigdqZmUeyvSp6GVgEeyMDbjQ9ksFc8z1BQYfScv4ykdTSxCk3kn8YYTaDJDD",
  "key15": "oJXXc2iEFpTxpjoYBzUE2xfCvDEgvuYM31e9rCapYJzpw3GRcKxQTYhQzYfsuZ2M1LX8oUFX6wMXM5wBxkdhhC2",
  "key16": "3575n1Dprk8rnkbSY6MFpFfSXh4zAsD5fHSaoL4rpurpvgQcC1JxYv8v5fJHDpcFnnyMpsF4Pt4AuuBLQinKoePi",
  "key17": "4LLmXoy8adQeveM4vajZDkGpWxxuWkuU95V4YpGAQ4yxikdABBnM3Xft14LDjt7YG9tGoL1qihdbmGrrYtKcYUyS",
  "key18": "3Yk4Qik3rJ54DjdC8N3fu3uHvBnJG3m8FXQhegh2aaSztdKQLgJTXBs87GshJ5aYYdxGvauzgkQzobUwtqxCvpHu",
  "key19": "3wLhrKyPbAiq7WwNedEjVg7Mo3U97qrAbvMkCEGYjLQbyeQKXsk2jsBoh1fWhauMCi7hgGB6EepPEafnbie4o73U",
  "key20": "PpfKmdiqtWTiH1HsKGiHBfxmci1xeVDaST2HEk2ao8pbJdRUMJWSEQu4uEa7yN6oL5oEisCV8oTPQryjCb54fQD",
  "key21": "bLxuWCpqb8CeyDhGuVYguDptT2NgyBmcBvJuM36eQCALuGqEN5Q8tbCqU9hHfc6HFpAmrwxxpCyR6k4eLL8d3iS",
  "key22": "2rjzk5a77n1x8WfgYT9ABFUwPtPHDk4ZknmnmuUquafHEgrbU9fZ69shYpFWqZYrrP9snYt16mWzpV2P22TPQfyW",
  "key23": "2oNeUWKZBBy4qFMdqfLwuifyfGPHWgSvXYgEdKKeFEJmP3yEGScVHkGx1YLjhGxrnEksE6b9tidSEMmFEdek5C3v",
  "key24": "5kYLq9vZNeS24u54F4MyDe7Fq5Bgt6U1CGhwNU6nDLzEH1t3yxEt5zZYAqFkpofT4WtXkNGr12rcLw7QPetRoajN",
  "key25": "37XigLQdGsPSs62MX23dSKBDgK4Qy38CpU8jSBSXujPuXT5kM1mCsHTthJuRp79bZoqvShxhM79WkRGiUjSFr9aG",
  "key26": "5VyiLVyzCWQKcfkkiaqgAQkuPud7CSGkBzTm9kArS8KZJ6reLMw3yneDSCi7zwiMZ5jprGnzAK8Qmv1ZWHBbzFfk",
  "key27": "NYtC3tHhqaWt9Le8NghzY7samdzAdarmCuvNHMwtJ1B42tqjsEfDzzqnHdPRZoDy8edjeSCGt1qANRA25nZsBd9",
  "key28": "3yJ8PyFeQSAp21GDiv2zSmfvaZybGMxKFGrCXfWcV3yq6Wey66qxp2ydLFFmJA9T4CvpBFcLmDKLgFpbT7xCy85V",
  "key29": "2BTSfrGT5WYzSqXVjRsaJexdUbeRBZ29qUEkSnCahAQt7ZzF5ZmKEtof9ZMUb7sFH1RFGwqtv2UsjUusP1uH6c4t",
  "key30": "4tx8T6BpNnx31oLdWbKromC7t5wbHJuuVYnnqxwqyUy2kMXk9otU4GHiSJ77GUHHfzp9ZYvLFM4PLYUuWueBWNFZ",
  "key31": "2Bhw4vGuVLuHQPMMuETugHyNyzT4ta7DpZKAb5CfqSuv8jY1GFT5uDzy4NQPxQd29uMok37XZZjRuXfeQEGBB8s3",
  "key32": "3TQ1gi91fqKQP9dNstv3h62ADM7wsYiMfdL4pJc1AY8GaW1TWvibwn4uv6fBpNPWVtNwy5RhmaKJu4NjvGE5ggyQ",
  "key33": "4Gmsbd3ziSpiYUfShh8cSvyV4dfQhG18m5pyMYwtfb2q26QkLt8v1rr5qtPk6D2wAeLbPZa8LAQjasN4bE8czQ9V",
  "key34": "2J9xHnUTYN1AmSG8pGzGdN7MHAdYHk3KxJdsXd67u6rGDMKbMaPPg9boKpeQBTy42Yegvj51j8VrysLh671ABGxF"
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
