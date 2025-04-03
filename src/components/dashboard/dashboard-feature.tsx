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
    "3BYu9Kabtc3mP4f2m64c7nWciCuaScNjTab3ANj3JjMuUokfE8uYrWZcvKbi8PDWmDHahnQv6v7TC4iCoLUNFqh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nefsY3pw4cUxkgEjBC1c3XyUuPTzsnaJbem4PLfjvxV6ZY5BU5ra3wqkWKyC9u8F9TGuTy58YxnPHNekz7W7vRz",
  "key1": "5p2PYi7ghjzdnBzQJzLkZ92MyZQguS9XvcubCW6MTNYdFgUv5kEjRSQkNpHuvv81ramvqX2shRwnoHQcHqBbirjf",
  "key2": "F4jypjLCL4LkUwrGwJEV2QZVV7ab6zAEwkG17A44hdNi9jxqK6g9qW21vDXwKHf4UegjGGHJMAoWPdnWhGyRtEm",
  "key3": "3mxAJTSY2eSMGWk3GKKA3k6STMKgwCyu7g9rAXfn76XY1zu9berSqiRXSYWwPv3vDUvHu62Liv8VJSCLWNuvuKBs",
  "key4": "66Jhzj4AnXxb3JipDhZ15THUwWVVSnYWDyskb9TVZXjG6ei3DXb4BS9GRnHH3fi1tgSqBdeuXQHYmKzx1qRB485S",
  "key5": "5fRqdUeNaJnv24dNyP2zQCSx11nJJXU7aXFXbEyZDxZeCERzoEjhLxjXuDp7pywKrRHSgnERxydQYnBaqQ2JzAuf",
  "key6": "yhwhHojBP3KcsjGo6qFizXZxGPf1i9KYmoV9rtDHvhf4JYfFvoE1UcnyuXvBoNoUysm5qD5feyHK9uRQ8Mg3u5q",
  "key7": "2kMneGJmZHczuaUXWD664Jmqyt6fXxzcrTehtskZBZpfCFte9eBoHZ9pkk2tD4jyW7wP89swCxmaJpYMbPwyVqkV",
  "key8": "22kYSortCu7E7TLR77nmeiEeG7zRqpeK6tfdEFD6E8E5jxsgsResvyDny3c5MTLtaWvvbvxv2N9gBYxtzjuW3vE3",
  "key9": "2t2xBgMDSeWcNasjTNodgzByQMZexMGfePPtHuy6BGCVJmbdgAuzmbLQvFJZYcsFMXrUcC88Z5MbSJ8NF5y9Nc7e",
  "key10": "2J1ZqPPQwXTmVwGtozRvwjxgyWxhiUHEPNZKPKoiYH253DDWrnDF4fM6JVwc9ABZQ6k3Bjw1W8PY7m6Aw1Npcczj",
  "key11": "55btsLt1PLdSXYCAx2sb8dtKA2M8YHTTgES8WA9zuEL8xnkCwSDgMM9UMjp2h7Rw2uLbQzutqtYqaSnrjyLd14MF",
  "key12": "zeY4EvoHaiqD8Bj6S2y11qvsa7gR4WniWGcQCAyifJrsuzJYKfps9c1AofFZrZ2tfHTnkffcRjbdZsmuLwNsPde",
  "key13": "437XPwGmy1QJLaYvvFxTw2838aBMPyH5aVWKNQVuz6XYQB1ENhp1E1Kf8PptVrMPWseMa6MZLuAiq7EmUHa2Th72",
  "key14": "4uW1S7YU97keMDRrRsdQfSJ7XLrp4kvKsm8JSpF3UjoYvrcpJpTTrUrNkzAqQUQdfLRYyhBT74fPjoB7eP4i8Lh4",
  "key15": "52KrU8DabRYNTjogujMupKNb1zohxi71wYfS6HTUjev12vCJsR6KtfBtzf2RNd3PBmNruQYgQFyFLQZEaLQbzMER",
  "key16": "3KASNjYbYsPsueN8tfZZS4YayCvt76ujfxwrr9CAuRCzTgBjdN7fYfUnZXHrsAS7uJr7KE1c5fkpxtaGLvHar7kn",
  "key17": "kCfpJWoGevYhdnsqBSE6QML4q6Phanj8RyufziZDorEHeZzS59nvhcsWbxh1kdVNfmBWmVBNbtroKjpTmVVYKHr",
  "key18": "5Pix5vsRUd8PdXxwzHoK8s71xVwVQwdbJUxCSCMnC6JWnbSqExsTKZGdAQ3hKFPt5J4vikN4rYF1PJtYNAHyC3yU",
  "key19": "4tw1mQTgQgY7j4X3aNj9qym615zdmnHMesVEYDLFdxdJX3n124is8tRKwyKcn5eHoTHX3KLorPto6mb84RMtWuGQ",
  "key20": "2hjNGaKDRUw8CWyrFDYnoct8DENG1TFMkBKZiUf8peiDu4B33beNceituxdm341wUboDNyfheGpJeogy715d4RDq",
  "key21": "5q1piyEjQ8A8snmo8914Q7ELFypnt6oN5aBqabYDwjJLymmsev9gfUrd1yrToaNtvyhNaVa7DK6LrS5DRsR3ngTd",
  "key22": "4i3haTXSdEPRf43PivRaaQPvBAu1C1FaxtmdjQyrsragYNypmghLyvSHusBMQ5tQxBFxoF2uBdbydkgsahpYVgHV",
  "key23": "66yQi1UgDh9grZsmn1utbShGEEnYptwy167d5kWPE7tNVwr9pbCMdZYb5g3MZuuHmGutocbpKG4kqAspjzb3FBnQ",
  "key24": "44MHLJGPWfBR6XsH7ckiumBcY9rc56MdjsU7fBgFXdLsKAKmAds3Y53x4aawx6X58dwrKT9X4do36D8juT8LGgbT",
  "key25": "4qHe4YaUXvu8tTmcULkPAHHaJysBYPiA8rLAXDGEkSoCar2FyrEDL3C7DrNNKLEYhDbieY5Ps4WuSQ1iFiaeVk7k",
  "key26": "2E9pjRW9r9dfS9Rz9tTQvD5pLjmNUh1dr9J6tsdpUCnqQGteDhdG3Yfjx42fKbvFUeVByktXPpdFhHVj1Vfb8CUC",
  "key27": "2Swyn9ksNnJYPzWiaNHJr78YzUnNqJaeWWomgDHQHFhJ84vKeUJn89MfHro23y6z8KafhasHsrZVKzTcbgGcibnZ",
  "key28": "5BzmTXfK5LYkmC3zXNHR5Mv9RqEYTaz3F3AQpcGMTDyNTbE9sPWsT4zeo5U5R9B9kygwnUrF6F1J1ZB8g7y6jeNT",
  "key29": "5kBbaj9fj3qyg4cKSRAF5S9jensqosGoff69gFz4sAMNQ5LCzgwWowGfeAeGvTnH3X6dCxtv1SmGR7pKoBvkTHgE",
  "key30": "2J6fFrnaxzHkk623bpDhcsKW4YjaFAnf9TAU3CUTK9ohgerttyopm9MCYU3wuaq5MiTx3h5ZHKTERWTW37P3c2iz",
  "key31": "Su66JGqK2tq9BEKvKHf8eyAMbdA5dKtDZtj7sAsSefRuduehGvs2Q8WRP2ZjuWFPvdGeygHp3C9HJdAFtmfVC8B",
  "key32": "4Cpnr7s2PPURUry8gNpnwqrNGPxQnVM4XCLECp4CsQd1s5K3pTzBmd8wkXWsu9QXzz28wDAoTjAeXWErz66sg8yr",
  "key33": "4v84FezzeWxV2NQqRMCCLm6H7zS6LnvbsZjFKCeNZMz58n75PWGAa5cbyRXWdX6esEniqM9nQtE3jUWCCtUYPfqj",
  "key34": "2NcsxzXu4cMa15pn7R37NBU2Z74oViXipZepH4um8xyFBEHwMeNGPU1JWn4dNGDeVUukKp7B4d9H224b5qqvmkt8",
  "key35": "3UWsEJVKo9z3DHe4sZwTk324Fnoc9mBenG9PghNYVN1VQfuNgbdCmXBz6fUcU7HmhHb7KF7xDzHMiG4qhLeeMZkj",
  "key36": "4WW1zjX9eWi13a9zvdVPbVBq2wEt51KyzBrUWiyPKR6fUJyyUZzeyFzMy8Kcuy3JUVi8Gbmb4NuMVznNokyg5phM",
  "key37": "2FtKFNrgbPtVthsnTkcyzRmavvhRNNRZ6xAktGmSnFVBnYa44GQKUrQermAmQEVoEoFNHuvUPn8yX4LscWHhMbFG",
  "key38": "4oRUgm2UrpR5XM6hYuVj4kysBgLRXnJqX8zecFT4k4Ajfp37ZuPGgQ3Uy8qGf9458rg8NDr4ELHiJctGSnB3tHed",
  "key39": "3DrgWcFFWkucDrwFjWnAkv9Cj5qgnHcGJUWysC9jUJHKBi9waN3C2mCGpxRLWKL3giymgLK7NTfcZW3MGVzw7k75",
  "key40": "2hWg2JuLtCJcTiWLA6X1GVnyuqrzYTDbJXXpW282XF1pujL3tbmMKkqn8peNPxgbcpBFTaNhDq4HnE7JA6LGx5Vs",
  "key41": "572cLQdaDfC6svRuh7XkRWViKYzPS3z2Qp5AgE2XQX92eg2vdqkdx3wiSikgDZBoxcgbDQi82uwWeac7tFA7FuQk",
  "key42": "2j9uwyBZgrLyYETGsaP827kqY1ALpCMNuZGDZaZZ5qwDjS2X7D81XCmQt2gPr1jw9iprxgSPc5gZSMdYfSX3c3Mw",
  "key43": "4R37rEynXhXPfY3SdgvJBa6trVEZRx94JHuASHX8BmdzAMn9FvxLrkmwwuJikLJndBrUHtScosjXg9kqU27rKATc",
  "key44": "2rwC2Pg6NvpCpaMmchBZUSdgyEzGbxdYCFHHAfZcFXy25cWyN5aSqiLhJa81Dp5dLwKvcN4viywt9xzyrWjNWuTj"
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
