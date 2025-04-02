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
    "iUqWrdtGwKkq3pNHkGw6wiT71bw1KVeG6Gxvy4CNN2i29uJtgfzk5QpfeyEGZHSHPhJRvYfPuv7m1QXDXD3XgEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sNfVb5bX6GkqweTKCVaFiuKftFjfKVe8P5LVyh6ZaGV28aM8xvTshGoz7gFA73T2AC6wFc8xhiXjQU9K9Y84SSQ",
  "key1": "ymLWbybHVNiBu28bg29U4s2zTdatDWJ4CqriG2Q9vqRK2s18g9gsqNLfvacau3tVhhmG3fUQTyifvMg56ph18Pw",
  "key2": "59NDwKT1SBwyZ3wxrHUEMrvFrWJ3rKDgTdcf2hM3s2eLTrLiadyxxgqqzbf1qzoV2iLWswCTyddYM8xpX6zFntCi",
  "key3": "412hx4ioT1j7JY3kP4uXV4H7V5TxMiSsnyzcg5HxsygnvXsRWMj8YNpW73jV3CMrNj7qiLCKhVLT5gM1tUnWtQXw",
  "key4": "3AgCj8YUnPnb74BkNTRho54eCAyZzkVsUR2h1H5JVJa96STM7ufg5kehXYv6kNh4MizoANRmjA2HeRusSzz3DgUu",
  "key5": "3S34CLTraRg3yQV4UxdgXnnMuVaNeB6ibG2Z3xjoWBaPNvkQ6MFRaPsDs7q1xNGMbCSPNGm66vNnwjYmZEU1NfUv",
  "key6": "3EcX2KSjgzoYaz5t6pRtMtSydM9SKWfBc9pFTxrHB2yVneywPVqh8jxX7K8wGX4b7miCZRvijwxmCGe62GNoDKzq",
  "key7": "3wxpw9k2eWE8yiXrokyfzbvj74y3cbn5BYAEQJgvwpwL95q7pLJbfrdgYxxhQSf7koyMs4uTns8aUmmU2YNMsni1",
  "key8": "3cMYyF9WBBdEG8G4xf1QVT671v3MFw36KnzdNHsZgB9kjFXqCFH5RDNA3LuiDPkNhvdJyRkRLP8tjjS7RWzX9KwT",
  "key9": "SvPw9fNw3Rdqdcc2qrvu8KcLxNzMjfUnwpWK9SeTNNQGQtMLLnFsSACuZpsb1cDL4JgJyCowMmSENo4PR56KibG",
  "key10": "3icoN6FJZpEFzjZU61SgssGnqVhG4GuUwt1KwD6WdwbvnvrmoyD6hrTLZRxvJtGQegQopxVxknfE9LCJVNEs5Cv9",
  "key11": "3JNFyiwnLPAJsDtZoScAN8ciWCDZMZPs6tXcLE1i1GmSzjrJHp2nhVa5DJ3nUc5MRGzVSNoVmUaBWKaQEmcViheU",
  "key12": "H3n5zSUyEnJk9PPjHSKRTqwyG76UaFZErCeRagF8npdtgUUmV8M1b1vL5tVB3fbwmQyhh9VQdYtwr79suUnYodx",
  "key13": "2T1WiALkwjFgJmeiViZUYFBLMBCvdaenUfqvqbiGFAcMLdd72ZjXNuMiiAvjsi6bVgZiLREm2aCu4TNvG8BMqe4Q",
  "key14": "2XViyCMv12iMKuX6MaCnfixtyHctNb6itPmsQLaizLSWCtVoKLceEGWCwa2ygYzwVTQTpFQLPvWSLD5Zkxa2HxuR",
  "key15": "2H8AJeRSwzBrLusAgQW7jzYHzSyMysosF8dywzvueipMvDAFFd24z3wEQRxzUwwGma4u3Lffw2Q9CGWuZmKZFreA",
  "key16": "VboP9BmGD9uei99tvJoCVm6oUcjdLXTGqp8sJakq2NQJHxYBaQpGbrx8Ar8yUZadv9tfLbxKBakb4pDd251HBkw",
  "key17": "3t5QS3PFYWfzREpt4xrD7PFt5c8VgF1e1dT9QaTTeTUoT6kxcaL2Y5isNHXYGs4hLeLvU9iwDnT3V3XkxhQA9iJw",
  "key18": "4F2FYDHQqqK5WP1THcRifhQuzVdWc68DcsLeJRhLbvBBQZCxLeKPhZUY7ybpVwrSH6FQY7bj8tV1FA7JdkjF4YgE",
  "key19": "3tu6ZGqzyUesADstDdZSgcB3uRuvYfKMJvrJeh11P173f82Er4jntGyeqgmsPXVGFGdKwJRuhVRoUYkzvpdWepGJ",
  "key20": "PFt9XuwDwZACvZhMFP68Za7LkkcQm6RaigoJUUdyxVYsXKq9p1eC6b2TakaLqa6mpgCREQPgwb6vwkGbStgWyRr",
  "key21": "4rMpP1A1JEwaAesgSqYR77LTm7tkqkrkKX5vwKdWEv5DzRdaSHC9isvaYF58S5TzgsuWKCaviuV9DU93KEfRdc2M",
  "key22": "4uFG5Y2sLxE2LSKCqssJ2fNQ5aBjQ2RjoBZE4HM57Qj31ZiZBFcCrGq5MUmidKSpnen3tTDoywTfyarYuqhz6eXt",
  "key23": "dVt31cPGRSWS3maBivnbB8WwgAuB5ae7SBUyq28yYcEbBt5BXFLuNXvFbQ8LQ9NPVxiDYG7xWcRTgcR66cu6F79",
  "key24": "2EnQ65KQ77cxu3bjGTMgGEEx7nGTyRFHwKdHLxUhvgZjLp9VX9yc4rnHxvqwNPTEv38Dgx6bLWyQToj4YRXHGy3D",
  "key25": "2Q9zm1SC4XeNjpPKX9Jb5WikbW6xGVK6PwMaiDibzgzv1mP7DZ7mDN31sro2TD6hFda7h53m9SFWrfTJa8fyJdKn",
  "key26": "XvwTCczL1cvqCYprPVhcPfDS8oLvYiiWwu5m3kKThqrVdYiE5BhbrUoEFB57fibNmdrHhDK8GmrG5WaE54RXoqm",
  "key27": "4pXL7j434TTbBTjTRiAkTYZ881Ri9gyQDA2WEtMdWQHjHNPbG39eAvTggVvBe2JhdUmS1MbzXHUC9duDuKC7iieF",
  "key28": "2UGLv7qTWqXg8Hj1vd4G2fQMoJiFJ1UzWpVP5uLrfqur473cfCp1e3gDAbvrTHTgnghJNrQxE3k6FpNo5bUufrFF",
  "key29": "wipPRx8oqNyq6N7bsnZevK15iB76DVC9pVw7pSSprmJ2vFZUsv2gKZfgzQpBtw2xaa5GLw1wNAYZFGC19fFmWrS",
  "key30": "2zZoG5Vk5qbk6a3vFEwtAqxmjyNrPpRQt5HMv1eX1FrTgDprQ6EYtYfV3nU5ispvosMEHU7FBEqHsRq1wMGXC8w",
  "key31": "2B4Fybz7BxB2xF6a2RPWgU5YazW9yjwsLtn373wznHCN1z2g6F8U8vTyMhJfoPE1Rin68nGQ1hEsBASbSA6uodQZ",
  "key32": "5SdnNFGe4wmq7iLiyHK8JFyfhWNWQjWKMjm7WRHUTA33kzwgN66uiwkZaZguLNLB3ZHd4zmBm9NVLjwaZRtvaaKk",
  "key33": "2DnXKJM7o2vbyE7Xq4WrAbip6fPRbN7dYY7ufvGZpSJb3hmgBYXjgwFpqt6bMUvqLkzqfQzqDEQnVFXyTVaU6XTo",
  "key34": "38WHY9BpDoftg7iPR8ZSWeCirA1fWQKjA1dhqwP7N5UxWAE1ZDBVKpgnYv9YuSt4JZqsaa6roDsP1hkNbLCSpoZg"
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
