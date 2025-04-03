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
    "3wR8vDecs1eesCKhDNxVxSoSNMsMRAEhdeCecUPw21BJYwzR9F6vw4RYwpcM5q15r5ZAoGJzLNBPwPUvvRPVHBKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xM4VTUZhFkckG4ENgmrJ4VdJorvZEXBJQ5UECL79cwdPPixHTBUd3b1hHgPeWAgKtBPbTffiMfShaNvapFsosXL",
  "key1": "2KWQfoKAQddUghbbHR4wwm742Nay9e6b1b7d7A9GZiovcm8XhBB7kr1Zdds5XmKV6pVb6Tfn2S8Yuqm9N7niEHuL",
  "key2": "53fwKHkbr9zFGwJ56bcbb479UD88vs748ZLGxnrf276iax41uXYiH6JMYHxwyAZgK3KhjRZyxJ78XJnfig7ZngSy",
  "key3": "7vFeFSzAvBBeBx4W5wiBJngdsJNibyXtpZbx2mb3gXXHyZ8mEzAe8J92d4pUHLNWHLq56rjM31UNSYXtwuycgn2",
  "key4": "5WYecqLtMfL7Wh4QFdPgfdxNf2f86YYAygN6Yj8wvC3HoY4S2d45VFWrbtiDEDc125bycNJXi7hoq3vVWiPeS4Pp",
  "key5": "4ZLUFnnHbodcJiCvRSU34ryEPXvu9mNyPANAYwLEEbGFWxk6EWYxZouEmscfvXHTK1WpitM75cbbmpm9JijuBDwr",
  "key6": "3Yuh7ZAPqhr8PiEzyYtDs9a3WVsg9UcgHVttzBUDdR77pXjG34twPRwHw5gGvXAqzp3NTTennMZFTq9k7fSaFKPL",
  "key7": "58i3YtqyuuGX8rwtUKAyW9GM6qgzHGLxfZmengNiLugryn2Mzpzef3easTRqAi5PfJ3RZUmJMCk1vMpPkGK2Qjmc",
  "key8": "5PfcGjTaBR8Sk5vBftYKhMZM8rfLZcoyqdWC6aCmLhcKb4roT2djWSgdjuyygmb2yz5d6innxFCrqUNK83PgicEF",
  "key9": "3J8JFTeHugUoFiN6svfCSLvQLKkCkp7YGH8WDEJooRDBK5dNSvmT3fWtirpf6aqxo6hZLjSDtnCZb6Vu7K8xYaWb",
  "key10": "3fxHUn7HN37VJ9CUb7Xugzd5urUwwLMLUVBnmzBgEgvEjnfMQEHAkRz6kuHBG2oaiaCi7joGJmokekTadnx4BdH",
  "key11": "3ZnA2DLGfcx4FFD5R8VGTjdoNCz1HCkqpHMjHu9CEW3D4oN8AdchiK55P17UtTTmG3yUU2d6rTZsdsExAcSDFHhv",
  "key12": "9sCYzCb9SvYoQ1mDSxVGdNCyoeAQ58JHy3TjyaFVhF6jkrNqZrE9mWaJiyZRV1nKsUs37ub2zWpF3HaNKemC6ue",
  "key13": "zHyRuumHJWRy9ZeGE55jmN3cuiSawaatCMMVG7p9a2S3UmJpU6CFBvcXu2BeF787tdeKf8g2hQXpT4X3SuUyJr2",
  "key14": "3JzrAr6vF1NyFHWgS3d1UMqVkmsHx2WFeRWTaBDTcvZPSaU4wqTzKQ5qcGaWLpuvBJwd9iwvcLvAyFtzFT9KVZRm",
  "key15": "3uzDYvP2bTUCUeYrLwpteNXwzm8fVA748wDugDSVCbi87np4q463Qry1wz3gao7HLMTd4eAP2euzsJrEfnUqJav",
  "key16": "2L3wQoWGW4ZK3ncC4MeXh1HA24w2VFugYbUuz2JmC9WxG3GwMeMSfoqbnijLU7q6m3dNk3RkfS7rKXe3hz8qMPz5",
  "key17": "tvAtMPLyah7p5wK5EnEYFqGQXyX2mWjgevXgpT3NwXRajQN7HCPvBN4VHG4pP9b8XzN1WfY46AefT6PWcxCw48y",
  "key18": "5Bdj34PY7bsxx75Qcv7ZHDkY56vYRUJzt5FYmhTVL5Wf7SfbEBgYLTNk6HzrG6mWn2XZwGEgUDogL29Ztty9NHF",
  "key19": "4kJSEGv5kkigywonVeqiZEvNCJnjPQJucwWtb1RK3Mc1okFpxpWXWc8xmXbPxgBUJJXWbGNhpVWgYSGhRtPiMuL8",
  "key20": "4Sx5qzU4XZ7v4gnFFKMz91EbnsyrMxpRs9nBTHhs6b2c4GDL4pW44b7gBAywvQRoh9S1VZncFmp3nvmfGybFRcNe",
  "key21": "5QxMgwemo715GNUP8cYWqF4CWKeL59VDUQ3uz2xSS5w1ADgY3Ho3S1WUcGqVo3bV5nD6yvAaAbGxcDKyN2tgQ5Jp",
  "key22": "4RwWTyHvwosvNkruyxAeQntJGZdkMsgNmr5h6JRJyAH212fpy6Rasy9gzoTzTfWxTgbXaVSDrqbdH1MwK2gBYKM",
  "key23": "5hmbXDxiEfV9nUvCKtqEXHbtHa4QGVt1PxxGyXWfTNiqaHy7tPZCFugwoCwwc2LpsgjpKdgfXMLr7VSk6s9NdPG8",
  "key24": "nR13AeKzPK5ZTy8XSRg1jsD4se33u5oD9HeWdYhUKVpUUTi9reYwmGWdbUHk84xSGrpjGahY3MUqRMvNeVAHicD",
  "key25": "3jcf397dA6vJZzyEyAb24WSsk1PaWJk7YXWHXnPm1fgtDfgpwysdXQoR48p2aKt4Bf3Ub21cAcqvUWRs4H8sLsUY",
  "key26": "5kRry9ZDKZ1Y7fxbkhN924MVkF4TwoYK7rARseNNWYy7U7XfNwER6CnKiWRdp24t6KDD9QgvqNd42VcTBwRSUeax",
  "key27": "4SVAy8We92oMJVJQfU8AkRuMXu9WajJ6vNZn455S2AqB1jUAvcBhBb1GLbfMswdLiQg5jNEYTTucwQie3BV1jwMs",
  "key28": "2r4ureSwbLGPSTro9r7eB5Rx8iLu52hYBftgKoFZZ2N7mUpKxQzvDHgvF1nayog4WWVuVrQCiHKNx2rDf29wBdjP"
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
