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
    "3zgKWKvoaVxs48SeAhRDC43pEzu25dmDyucdzBQ29u3KezH1Sba9BaJxvjm9cFNQpFc14e8QMdynnNSs6C2DqiAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Uy7Tazommnw2kYbmygUnGfC73iC7BTBfbcMMumJvyJs93i7FbvEvGNC5tuTb6v3LViVc3s9bMuoUgLwbqRH33w",
  "key1": "5FyMJZBzzfTqLWdqU95aYGGxiZSXu1uYRUwK5CfNvQshpzUxfeqeCHMyG2H3YfdWbnjQ4bs5u24dcm71QszRY4To",
  "key2": "4gpESVhs19auQMgFJe2MJja9VJhpPMACgvLAkRd5DQQJWiRRTMRE98YycNfTVSuQAKd5ztk5RVHUD8dSKjfE9tq8",
  "key3": "KDFFzTQk7h1BFp8iyF6QNFCNPYjTKtWJacmmbifGU3DjfaAyDFX4NAsXWfXYBpMBc3ZuZ7x3gaZFbQroTpJefhc",
  "key4": "rUu1XLusRJ41NqpMxxHAwRgETAJwb7wKvphgCPRK4vjzcKQCHPEG85Lsm6STSUWv3oh58TzSyu78cfUWjk3hUTv",
  "key5": "3UqsBQnTRirrbSUbQo3XUGrjMY1jAVKSSQgef58AncyBNKk8DXAaTkcx6AbkGP89ZePztY6sHji368roos8AWJkC",
  "key6": "51EyXoLrhUwZHN348hWA64PcrmZe2mgbW1Uw319dLFpqZeMUoxeUwNgSmz48g49wZyxanX8EDN8z66GkaEnq479E",
  "key7": "2VuccgMBsWSeLitaF7Z3DGCyTDSg288qn3vE2VYcTPXvbzkg7tbozVXPZ6kK6drk9WsB68mFdwReDziZsbAakt7v",
  "key8": "2aaLhTNxZTgCK2FnUDDs1fy3XK5LPt6kTzMSFhzHwHPgjrm51DUaHp6gSLRwjX7x9nMXovwui76DhcYh5JsRd563",
  "key9": "3V8kJgWgAzdyegonoFt4KqNGVYTrwwcGz2eHnAmCNpwUq6iUYyc8aqNYXhieRHuEVJRfNehALQvsgH8a1JkVvBps",
  "key10": "N6bS2X6hxzJfXU2LzPavWLBUgAUsKtQVU7YMQhCuVbycTSkWQJyUqFRnFRUhEPQZVTkXf3wsafMcdaZaNJMxa3o",
  "key11": "4Y7V3x4h16uf64zEoxz3BdRaVDC3CK6DdDZRDizdZEUpnVoga16Vg7MKuetQvY8gxgUw7b9gYJX1Bzgmrw649UQF",
  "key12": "2x85aq6PwUTrRgmxqUN9uipMrKyMJ89KcK1GA68Y6Koqotea4Tt7DZPC14V7eHKEov2zKVBxeSxFVoyBqW2sZwEE",
  "key13": "3nhcmwjZRMUCmwkqHiyzEn2t7DDVsWnnrJQu4szt3wduaUhrziFM5MSBdAyTNU7vdSFC3Es3YtNqaC4jEjLZKGiX",
  "key14": "UgiWYKW9oGzJtVePWtLTVjaWkxF3AbVS9PztLWY7iWhHEPU7iBqZEwbg1ur8cy8zAZJKXvsBfvBZHVLqhz1pDpq",
  "key15": "58GxreBRvgUT4jtfdhrDq8jgUBPe19WhCN967h8w2nL2suzYBgawuUWx6YwZMecGYvEgsvziD9EZU67BKCF2Y3RZ",
  "key16": "3QcRDcaTdPnHbYB7eLpsem2LXu6HT4uH8kwmBNXnAPLTxWhxnPG1wB43B4UcB9AbSWRgHPicXJm1R1aPTmk4UuQR",
  "key17": "412LkEXiZEzrUSMCAEbzFAXkxMJki3L3esmtWKxsp59GMMMUnHDS9LAhCRMNR2jJd32asEPxAcadu7SK7pGfdWi3",
  "key18": "54fm3AohK8uE4PgkNyCVHcFMZ7qCG9ZQxqFBm6LTxvmnFWp4ewhDUjKqoZ5wPLA3PBvUVxVUHjRQxvtjwTtMZrMN",
  "key19": "4Ea2c3wwo8d4trKBj1msZSFYnEmeLjPb4dS4JmHyD3P4So7trrvEtxJNZrBUv5CUb61u5UYeYqLdxq9uWa7cZ5s5",
  "key20": "Zeff4y9sD3crJfoVYbD4yDwo5BeFrFxQY6D5oH12cYpus2KXpLjx1Jv7mezmcx4sqkffaPbUPY52JoWcEUFWBmJ",
  "key21": "62oUKvH1S7NeQ4EExoSqGnsJYZWKnCgQyVUJJWVRzbpLy3ZNCepVy8izVjxqPunFubPwKmVpheUBzskLmJpXZuUn",
  "key22": "4GsDXqab7nxnHvTa9b3iH3A8P34q7cnGFHMHzz6KPcoqDMUPsbYYuXJ1AyzjP5BCn8M9NJF4mf2QGjCLbVR99ACw",
  "key23": "433psMBmMvvVGtTzccmzyGuGswXutEr18TynYgzSxv6dKFyfC4XsVu4SLfSL9EpRUgoU6e7yQ8HJNqcPeUnJFn3K",
  "key24": "287K3fCk6GaA1UCFysEtaW3m78U67jcxkULSy24cbfkQbprSuvDrxvZFSNu5qF743P7TXe4SBsWxp8fcmyaD3wFY",
  "key25": "3eBJovqbSS4s1GNABJk9YMaTQiYd1BavoeefPobutu8PUK2q25m9j1XntmsG5Wc1oHAuUK3bF8ftZ1vv2NL5nrfx",
  "key26": "5CDfuqR5uKCd9CnBvLjkRDHqgbpdbaXym6iPGQJv3gAhmm9zb8oYSAgcb4eDu3LgGFMZqxkrq2DachX2hPb7ZPxh",
  "key27": "53qrUMR56gtGuHCEH5gVRB696ErTVHe8ehSqUWSh9wXJbeyKrG2bNvVze5EVAhvqwQ9ac5UqVRavi3EC5zcbgr4i",
  "key28": "4s1njcKQM6W7JXBTn7U1RB6EeXwB3pcY3MDZVu8XwEt9p4LaL2uuTphKV5bGksqTc8Zdk1mnCw4e97cfcp8k8BEB",
  "key29": "479S6fpuf2LhC5RiZcojUTiJ9FUULADGem7BU4gVpaLTKUR7kRrUBPuYG69p7uKhBuKwTTXNXxaiArGnqXPe8tYT",
  "key30": "4h1N6imrbRArnDFvzgM1b1kKpiX2kSYrLehqeN2vWvadZuLPXdcvgG1cz6oBFre3VhxnWJwVoDdcUBFWQxT9dFty",
  "key31": "aZdefFauRB4bkGRATtxjZEVMLkUEdXVzJ6B7MRDLFqFYMeA9CYg2ymNzV3w5Q1xyQJiWQxEzLEZYoMjBQpoGEAH",
  "key32": "665hBjs5RLWokS6o2bUFKZUrXLLBLb88mSBJXHWssomWHA8M36VJaYKgXXKQKRoHN5ZJj7Ei3MCgvCN9f7a6VvqY",
  "key33": "55EQrDU1KtW5zW5brJHjUD34Wtf3KCiNACLVcTPPr6SLYf9MZnr9JRfzYSZQHbwPn4XCv4AsRncgA3t7KGQAvuSB",
  "key34": "zfgB6S8njbSTdLvfEeBgXap4idDpTUabhiNQSYk8eDKFcazWw8KKjwUUvYrTUDvfubsujfk54YqfTJd9a1G4hQj",
  "key35": "2tUzGGjato4VQPVwRpAumKYS5QocXyuLrLqEnnC3FL6cPDWoAeS7kyj4PRFeatrtZ77ANgj9g2B1LzgL6Gxjc3qu",
  "key36": "4z3PDFWqHLM7eFe8VhAaJ49KUfyytQVjtQtFjYAGo5ygiPFc2kot9jWRxoa24xgELmvtvQEyxJhh8hdxSTHKuvJy",
  "key37": "3nfwaM9AeYGdw723r4AjA3FGNo3XHS7RvCfqeXsHp6NWbjt1rz1RvrLp2WgpB6gBfUJLju4C7xVeRiEZGas4wUAE",
  "key38": "47c5L1jaKvWYCR2R8ix3NqFqZTBQVZnWaekoGVZVNRnTdmBSAo9Yay1AnAb17GqSRMerHPDstNjGtniDpzq5Au9t",
  "key39": "2cYCMKA9ayzpXV6V5ZUTLgZ4urNUbyFakmQYq8TpXXjybAkRP9jFBjNV8uoSsyRQnLuerdkbT3RUiQbQpvJLocdp",
  "key40": "5VoBSKwmS9Nfs4spNSVN2otwUPFoyqhGHvULmDKj2pvUaM9U8zwtizd3wRhYHa9FKsB8U7HsevCtCcFCjGNiJxHA",
  "key41": "4E4CeC5woe6prYaUJFMrrAMtxMJQjVHxj9pZsa5NNziUYih1v28T3rPReAYpLp9nsJqHny3FPVtaDdu1YTNcXte4",
  "key42": "Zcse9iFr7v7jpyPnSDANc4f67Yv7mdvfKfcj7cVxGe3tt92VooEFHnbo6a7AVieAzrVZJmVA91BzewMRY3tLK52",
  "key43": "3Jb4mZamvLvXYqnHuaLwJQXNd6zP4T1iHBxLiEWLnt3VCzn47DKeztqGnh1MECs1x5WhQzg5istQg43HCDXnJfxh",
  "key44": "7AS5QSp8R8hLAFtuLiH3rZuQ4BoVRQMyeQbaaDETSVrVpSeLyFf9ovHdBsoYtw9NT3T17W8ryRwaCcDuUph3xYL",
  "key45": "31mcaLR8EeJG5EdSjhB3KcQfhErdJBaRopCxtw2UGeSZ6GpfydwzqcWziE8YLGY8nk1Jq9CFUXGDqY2fAH945sp9"
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
