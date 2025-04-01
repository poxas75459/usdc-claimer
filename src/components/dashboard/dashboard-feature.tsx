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
    "yFpHh3UhdtjTdbSxqwExdxJwLxwiTZrNeLctXzo6NS3F9pjsRZYLsUwZBgSxYeZHnsnoJ3ug7SHJp9K3BJFXTAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cJv97aeE7hYvkGfqwu5GxxpciaRoFmugkuNdGp1XfP8tN54mygveUbrFsZohUUCa9Eh7RKQtDiyuoRRCxqNKSEJ",
  "key1": "3Fo455GNPeqM4GwJ5gdokeSFFPGt7CNwqh2vyYfKJNVtz4341gBAHnMsAZ7ahYSk551gfFGJQMUk2EzgyfwLXz8B",
  "key2": "5zGRqhVSpX339XbC1RrkZyCfKujd3BowQseH3462XAHahgyyqcTYVQepwF9fxfue4Qh9goLAw6VGMRWjv3bVT6XJ",
  "key3": "32RTpBBJ41Mpb1vAC2Q9dzX1ad9e16FCRcNCfxDezuJV7fQrU1QsCB3Fk3VLTxHeystQrYH2gCeM6xQitUdZs6aF",
  "key4": "2fuRLWzx6P9sxQ4mMLDWrcbG3j3RTKrdyfjrjB6ZsQkLV796kkp5h4Nhz5H5mUjKquihBFJpqBFySmAp7i351cU7",
  "key5": "55QdezSJNhHpnyA1Hts9kfH11hBwSahP9XW5BAXcJqkTTECSSQ1ayBtRf2xcyAGXsaaG3n45ATcsCWZLwTQSadiY",
  "key6": "3Q91hdmyF5uLZEFWTc164CYYrpoiSbqfuWtcguZUvpoyWhGsDav8dzX3qPiRKifGzrcJXbkcA3hLUd6siRqDhAUn",
  "key7": "3vQWDi7PwsJXfYFVuBgATHx47ZHyj4691NW5zkbaA7Gm4Y2VhxDAhMWkSJzbXZCXqB9h677mpNZnjY6Mx6ccy5QX",
  "key8": "4Pt6GpfiZvQXTC8yx94wQaFtRetg7NzPkFDb31PXGTdmyxL7FKxvydSBCs2ZgT3H7mVvWyn91m79pzXS1sCN2WC6",
  "key9": "QY4tiXhYwQx7PRJCWuQJx5SCTvUDgo57km59CsBa9ciDbgrJdeCVsZjbXKQEQPPhypBUXmtAjLZZ2Zenj3TEnyp",
  "key10": "d2HJ1KHLNbe5Vs6jkm8vaMSC4z4zu4nn78xRFyKwB92dBZmGdnW9vZVJu79rgPCyzFiKjLBkCBnwx2Wp9XbR1xj",
  "key11": "2GyAq6cNLz6b4t9uj9kRJCV1c92fnMbtdZRtRuU98pBNm5DGcCsVWEg84hb9NWwR1wTdronKM6JpgFR7K7azebxk",
  "key12": "2NuhMjGvQxoN79QWWGDyq2QFyEofvgCYKyKHRx9ZvjMnJKp7VRh1rbfhcjLxSNT1YCsetnc4CuijGW2cSj5FaCMy",
  "key13": "63Au5196o6FDAGd2xP2AZ8ybShResaQ6czSFw6xdiSRt69TY92KmyfMqRZ7WqW4ZGMDuLuysdJJXLTnDMps7w83F",
  "key14": "zrS3MXW5H2iwfA3bQkvTPDLotWJ5HpFhV7PKyXRrQZjQTavUukf8sonfXKgs1yQZvTRwmxU4JTbU2y4BuoPRAia",
  "key15": "389gu5PNxy83LaBG6JNmJTNQC7N78TmvqQMs9hyQa6XVnHRrn6GJZ9VnhtC4K1HJK6EMHMTU51jo4ZbgnKg9DGfY",
  "key16": "2P8KmwBGM2o5CVerJrN26MGAQCeznQProqqGXWUvQosq31ftTjFNgizELfWHp4iAFjCoUbUbZnBFB1ziaa3oHTSZ",
  "key17": "3TmakX1xzJ7m3tEWKYR7Y5Qt6FAnjnRtj588MGoik7HgndhMSwYKUjQi3MeAKjWAuKLGXcowSbFNRLcDf6W7ExZh",
  "key18": "2RWJUWqz5hAyx47uYzuqbXg5rTGbJXX9fm2wpHcMZNnazF98wT4EZZEC9iYUZ9BdFKLP31KxMaZBAFcUmGmyNkZ9",
  "key19": "35tkr9QdLyzAE5mVGFkb1oPqrknkG8HxnRj6wTAy5FTPU88CbLr5iMNFsiGFQJ9jAhcHkf4oFz4UomfCuzCePZ5q",
  "key20": "5CmiuPvdXaZHvEVMG8531bARFQmmWS7Lxwm62xDn8qejtnxKG45RMfqtWHh28V8Jtp5x3DbvaUMXpjAGWDuvojiq",
  "key21": "5SUa6ffXoXYEYBj5nxv7fLtvVsvEJZKYtNec6L1AUQFHJ2WBL7GdWcdzWZeBhmBKBDa4MvAzRSAiRoXEg9Jmhnsa",
  "key22": "3LvoPzSTLupmn9eMKeymPgzWZWcqsqeWgjvkWWQ8DA59mRcvWHpMtvaxDLXmcdFBBBNEB1GjDXYi1imCHK3FX9Ws",
  "key23": "45f4ta5sDoTYAsHfWCqPFFMYug531EfTpojaJgfxmjoQG67rMZQX5LdwgGnW4i51fqHLvLBXavEAyU3ah5u83eSe",
  "key24": "1XGu5ZSRZyRd1J4j11nu4tWYa6hZXk7dLsK9g6jhNxgUs8cWWF4FuPVTV4S6TJmgb1psKboLkd6Q3wX6tiDdw1Y",
  "key25": "3UA8p4ZzUWJnhmrYbs4fZaQFqV7BHBs2ZLzu9ZJtSPZz8vv7oHQ43PGFgyGH27dzMxCCCNQPPVHM9oyaFUcvLT8k",
  "key26": "M4epdtQ5U344PD2cS2rzaqTA1yKaxePNpMKaV1rJGxAZBuVnrse4BGtRJ1EVzXeCRFWtVgriiU9ZrjtGboNphAy",
  "key27": "2t47UypwEDV2Q7yr14ZWdeGLRT6KnsdMw7f3rMK2ribQF7dHnMzkzkE2zWgBMbZJwgeVWA7VyK1HuZfjnyUt8yF5",
  "key28": "N6yTE9h2h9XWVjCVxWUyGS1yww6i384eW2WFiSpKv7hdRaby7pgmt7718rcESF7E419FrhXJ2SdGe4YpgwFwy1t",
  "key29": "5qMV3TEVg3uWaQ2Xy6fvz1NVPhyU33wZokeUkq8r6RrceSkKNPUUMTX5oUhyvRaECV67LkZCNZhZ9uXcPScMD4rJ",
  "key30": "4hnUU1TEGoYLsWSBCydvv68VkdKzdqUtp9RFq1BJhVNXwxFEsaU8jXFjmW2MFgB3F2Dp5MY6iANDx8sSWeMhh4zt",
  "key31": "yk8KhxDE5iQYDRBbYjDzWj3K2FYpRySyo1EyAQnp8HpU7J8rzNqCWCQSzfXaXVqGqWaiQgFi5k3xSu1PFz1YpaG"
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
