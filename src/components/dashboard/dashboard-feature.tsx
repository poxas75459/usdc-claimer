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
    "4cgyNxgxyHQo4VyuvKi5mdZj6bFbbEoqM6DAxoGDbDzMrsVaNUWQAmeTe8VnEUdBPAhu62T35cWmU9EXkwzYRj7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UZJ2JBFzCwn7jkSYG5hE3B89TFbkcHQh3JwsP6zMZCNeDSBVdAsYkoM27SvJpFB2t9Rsbb1VJS4KwoZWihvgi8e",
  "key1": "4FJpV5RFbpKgnZ1xKxhBjR6KwPbiLRX8E6vT2XigvmuT2pCJp4G3NifGVqhvZ6ZpWmtMewdmPBbzQ7GKX9e47qMB",
  "key2": "2guvyQ3prHh8HHxUbLrLYqHJRDK7BXuc32YNvaQA4AP1eKM1fP3qLg2ch7M7iJrse6iPamMWvG7pCeyifeNEWZm3",
  "key3": "THPkvyWMnGjtNS3aNS5XtZbidbGBuUQpXGgMVBQBpiWXKgJDGNsnpqL72vQ8uw7XAbZm5PaXUXAEUdWPpjPBGRP",
  "key4": "3Hw7hnfpNHCrNMv4QtVuQqaBuvTZPC6JnXCezWHPcKMm37r4mh16xpFrQKg5apqBrvHR71SKvtnosWK5mLfKDpAL",
  "key5": "4RqtSkWP3Bt6nXJtuhLn7rsmegKko6WdeuCSbnPphCXJ39pWyzK29z1Dow71FA1nkZmYFB4Ca3p5cuKW5kmt9aTE",
  "key6": "25W4fJ8xEZ3AU1pqupNxUWJq3EN1VoimvbnyfPH8gP3m4jbwkfyZXaVq2wgjbYkmYPH66BTuhT8xYsHu5gSqaPcR",
  "key7": "3qAqpVGnGGJAW6ZW3YiaFkHn6ZtRa8syFUFC44TXGnyU77wv39UCu7o22Cko2eAmnz3PgRtCriiWSEaCJ4ENU4tA",
  "key8": "2eBykkjymY2GyG4veyegvKf8beENM8wHTcnSYSLgTiUzoZWy1TiYDuNxZhtBrGhadzjBjRR15gHaaFPLcuj8T6xK",
  "key9": "3gLDrmwYb1sN6PKwA76itgaJmgHuFKwrWrLgXU7MUXLxvNbS7phCxKdWAqrsCXuUvgsjMtz7QCbWhy67hWtBxB2b",
  "key10": "61opiTX6gmwT5Nd1FMcfBLimNAYmb4BjnCoppsxAzoWgrGdYjwvuY3DJBBmL1tHTdFj3JMrb6L3wB5PHhi2LtA9r",
  "key11": "sQkHo5873iU6hDCu8QVMfjWPmDZXgcbLNzA9JixxHPiMKniLhY6j26zdLDozsmyX68WF61GGuXp4MsJVGk4ZxHD",
  "key12": "43DQuU2cFnDGaV9S5yAk2bCuBgccwn7r8339Gotanrmk8gnfy9vrsk2TLGgJchs5ThqLC9N7BSLCSUwDBAJrRKy",
  "key13": "4XK1pFEPHGEuKHV7VB6Uu2rrF9SjububKSjKhXqoRD6GHn8MaKKDZt4S95tpPBuF8nX4piyBEd7h4y9P4K33vmtf",
  "key14": "F4CEDYDUfEthfFw8ZDowVvVff5pbqj5ZB6M8DFj72JqVQNhpe4P79qPEgBU2T8BiXr1j1hBR5RbXKpNGvAoCDzB",
  "key15": "2GoYZshf2a8Xf4HiNhLUiE8K8qqHbwEyuL8rf6r6gbCzjW3BpTGK6ynP4mh6qFv9qDugzGTSHuFxKbdsgbJ7Brq5",
  "key16": "5bvLYCArpM27VWrcG32FAHXeyGjU77kaoCe3T45TS9BYsvRGLnkHAjYokZp6h66dmN8pNXYELskoVqxyPquLVoT1",
  "key17": "2tQGK3B9DASEbQ1noGGNXDAZAjqxfdazN7xVdUdZReML4XS3BaCdjsSyquocJoRSdK3NpkhM3HiXeZ9wSK31EpC",
  "key18": "28Z4uqenve7hJHtEwrJQ5YwjbRFG4WhuPfExwyBrsVnLXs6a7BVbkczJYWG3QRWUwVXQVgKXsZGY2oxh5mFNNucm",
  "key19": "4XJH95p7t7hvGjyBhJWeuukCpsvtwC7zNc2MrRCuCA9Y1CncaqthexRWFW87WpnAXhixNgeCK9CgejEd1we3giKa",
  "key20": "4xEj5v2r3ccUcDgHaiYCAKeqwakxJUhRhaPgXeNP1ZJUmp5vRNuMV6uWmZCN45fnWqb8mEPaVqjwmvi1RWgrtfEG",
  "key21": "5BjZ7iHUHv7NsaTmXAxnHqmvh6Y8m4JJw3mKEWGZvqrW8YZB6bVNCvcVTJWa2Bb61WMsqpntyR82J3nM1V8ZGTHj",
  "key22": "3GrKLb4nL41Lhf5Vt4NA7rPJLsD4ksA49mQY4q4QJdsr8MeJe27pT31JUJmpzYzCitGLQZr3XvNMSnPxEbXFV292",
  "key23": "3WfrcrbYnMejuUowv4Evobqhez22JfP53oX6s2zmhi98ChnFb6hEe4TREQ2cmXedRCFMiY3amgsedBvFLnQ6vxNP",
  "key24": "3v8tGunyofsyh7HTCQxCs74HC96y97ABvApqkXLx8XKp9oXso5JwSS21JeAZk2UMCy84DRVaB5m35ATWFYKzxEj6",
  "key25": "2JLvCwA6RPNaXjauWJtU7keRp8ECTC9J7sSodtKJXCNQ1PoimRF2JLjGkQcxPzRBeTErHKoLzTr5vjYiMSR7XnkV",
  "key26": "3jZN5zYUd6au7kcmkJ2compw2c1oQYLsY9FAjK8Nk1YukXjBfC3jrgjyJHVEpzF4UrC86ekAkMKtigTwY5dA3Ytt",
  "key27": "5WbFfE3UiLHEUMyGuLcP5u4B3xJ74j7TSKFEgQJhPXCCHa5UyyLzSEZNjoudSSX1dTAmRjKBag92sA6s1ZUtK1fn",
  "key28": "3GUSb7JWnvRRqaq2tkTcJ3aRW3aom2qkzFTU9TTaq5DxNpG3Ah65wQ2GwG3HGSq214JCncMW2Gx4CWUdSPe7XaLF",
  "key29": "2oiEaPEmUDpJKbn8dwY6hLjV9XbTgnhB4S29Y3AVXMfQfkcJy4ctXuyjnC1N1XUaLGyVRPGpRGxyrFCS9fgNvqsC",
  "key30": "55taPca7XHGvFEdkyMg8dwjoAYG39Tme8PA5oXEFBaJnpjDnVAY8C6zvKFsqhrBsrAMXji6DWMLQ2aPhYZob6U2p",
  "key31": "55NQ5Z9BaPvDxHbebyMuJbnN5r8Qn9ziGn3Ydi5c8X2Fj1KT8eX3uAaeZsVYpbjFQxkkGk3sUUUcJ2Hwy7HxcNVG",
  "key32": "5dKZpahppStrqdGLJv8nVeweVEXKagTNWe3kBn24mQ26jAABeNmHXNv2Q1ZJJWvC5nuUtL7uQ7UrNK1eDfbvHyJ7",
  "key33": "3zEB4fo1GxdbudUNoXbBgfnBkdnomUKUstvaWHwpqQFFWBoNrbiMiS9XSHhGg9k99yjBHPnWppJsJNXXKKxkjBB2",
  "key34": "3CjybkPuApgQ6aXCrpqeCeKnLPpDUzJFV1EaKZHk3dMaW8YY9DUTHVwFVQJP2TfcnnGoq57nnbBZjopGgBCksDeA",
  "key35": "48FmL9fpw2A9mUziYukL7pHB3Z6nStgN4rzfLKDRJE3k2Ke71rHViBxnx6K4g2aAcwJSreQFJskzyLzEKibZstpg",
  "key36": "3UaXTCq3YE7CCydux1V6G4iym5Xi7t9Cf36vB76HcfwRbKcXv77Z4BDSwe6BTziS1dgDfpGvrn6PnUWtbRpcQhLJ",
  "key37": "5NDYwwc3jTbBCWcdM3TEBw6D1maKA9nMUhiW3US3cMgqRGYLDUU4s5ZhHPadAetNfPf2iyL8XkvVmyHL9RkkBeMN",
  "key38": "5Hu723GybSCmk3mCgN1njGvJxQbdyCvKjFcBeZZrPmme8j7ZmWEBw8shZ6XGyZ7XqwiDLpLUUZmHUD2G1k3sicDW",
  "key39": "5edRbKHwNr3qynLik9Q7949KkfhBj4LwWSvFZyNgAB96SnVPvn4tQEmJnksAmnajFCJfRh7hSipuZpU1r4Ptd2HW",
  "key40": "2nj7NSbr1BtSH7isEoDGg4tT4NDhU8Czq7dQa49zLumowrp89BrSHHp3P6HGN4NS4DLNCdnbkzmnzmZWeYCFdNfy",
  "key41": "2q7G81hcgcmCyfnfv4N1B2CHtN84BxShFHBXVpvNeAahZwthZThXxPX7LAcQNC2VqYg1ZGMoexvHv9zsbf6dTeuZ",
  "key42": "55EyAk6prCT5zcqggaSYKHarGbyj7G4GVsNQwVsQN3rp7f5oUzwdEuamZKGA3VpabxpdoAnUFAeL1GxYFp5WHSbB",
  "key43": "FeVu6ZDB3zEBnEwBkrrAB4PPp5stCBQH5mTPuf6CANou4w3Qw613zL8Ht1RQMaZKVi9LmPeYQo49XxhpdueRpaH",
  "key44": "4SZM6mB4mpTFt95jZsdHx7iPXRKuw2HmJ5kjvR1ScFTR5VdE5KVbBtE1qG2JmoYVQ1ipR3WF9bQajn8ctPNS2URN",
  "key45": "5v7CzYMtcQJpoMwUKM7fPtqEWYkaSJLh3mboer3kVUyFdiuCTQNVQUd5gcEB3REfEdz9N1PEmFLRTeVwHWA3JamV",
  "key46": "T1FCdDF2hxfVNSAygwb6gLknmQjLMPW7uPiuNvCtVsZjusY1AWKRQRvvUQn3hcXH47PpcfASDMXD1LNrxxrZnqV",
  "key47": "61fv1KShYGhJ2iDwHzBGiqzgMsjXdGUBC45UpkmDyAbsuLgMqTwNx6UXkFVyKNct4PY9cmhfnUACvSukDk8HDAQT",
  "key48": "2HNxzFojbvqx8SY4Wy7DG55qCXDgA4RcRJDvaGXupqbuZdsTPidvdctVkR16PtGUjVeXgeentfSqwK6QrHDXj5yq",
  "key49": "4Du7MvMPVrYYTSnzxoUFmh8qMGD7V1jAhsh2V8iJwqusAUPTzYaKTZHBgi4HqTuaKDt6vUYc2ewgj4UX3pZuLm7S"
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
