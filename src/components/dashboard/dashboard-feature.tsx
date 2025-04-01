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
    "5H9Snwsp15imsDL5MZavzzFCacFHz7TTBM6YQzDx1xaRzieGseFsdZCHejjCnytUdQnpnGGkMi3c6y5vyVqqDHtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WcZXaqBapavLyAmSYJwWw4FcXezmrX9azLQFykThVnB3X22p2UpLV3FsXW7fqBAfhM39rdhLxc66aCULnDa8FVZ",
  "key1": "3FskxbR8pot5SGcxmMBj76ziifjY6TjH3piSkgJEhHxWCb1Yw89cZFGpFtj2ziVKK19A6BkGcbZyywELpxDQHqzk",
  "key2": "2155eSSxAPthUP1SDPBsKou9GCzXqNzmZYWVpTrTuStMLegUwKNTHzkAdhuyvgbbZqTBBmex8tVuizYFSkJ6mNrc",
  "key3": "22Nh7FrnqFpiCEAroHzBmwYeuY9BTBynykJaLEHJNwMH63czj4aPfBNDQ8sLDutcq8VSF3v6D8W1NMBsVk3VeGzG",
  "key4": "37uzRuqYHZZddY82rFuabpeRM9Vbyx27DfQfDxeWBvVG11chwCoSR4kt2YhziUqTaXk34wFHF15g56UkKmVtFMQn",
  "key5": "39CUUP3WAHVAjcaqjNfUMiB15ccYzv4PxDsLc6twwhZzgdJVeNMZyy3vTJqffUc8jKp7aY8FzEAqgbwjxu7hsSBE",
  "key6": "4cJjtjEFXy5MjvhfHrqhrMmd88TdJv4dH1aBYmkiwUH7z4gZeCMU5Qd8MVYw92ZZ724H6G7QA7fHFozqk9iMT5XK",
  "key7": "5tFvz94RqJb9rjyPZ8moRJQVhr5PJHMBTutPcNifjdpRC9hayLn16SUHUgc32J8qwPVRmqMwAV6qnjkdUBdZjVX1",
  "key8": "3XHoJFXdSPk9edHCghYZJtU6WsUqh5dRpfuwuR82UggdPnZ2v159mio6wCGcg9BHUWC7TEG2zppfZWoP8y3uZZhA",
  "key9": "4gWrw7HrVeHEUXRUK4gTGxswEWNK4DW42x4EqigP9jBRNTzEWQMrm25zJ3oVan9XAbBKpJC5BopvFXWNMKNsyd8v",
  "key10": "zWXpGDNrVJRD8nzWM2PivJ1AQQz8ZoKsZFcJh15w2yRZAi3yQg3rELrU1x6eK3e4H8Xd8iAtxXSgwD63asbr5jG",
  "key11": "2wuuVHQykW5TkspEvTkoXiUbwcCzgVuaA6cMt473rCQNk1gPuSJueAEZazZf2YiLCQ4aVwhnb8EnGH2fzZHvbQAp",
  "key12": "4dTHic9mSf2PfHA6MMcnfgJNxKtQhNizckHPKXqEEFt79NG3Dr1pyiNRiHgxczJ9dhFfhTt7eR9QqM45ovbm3Bjy",
  "key13": "5pWKnB2ATdE6pysPi375uHxv43ZZGbY6Lu9fKkqEapbmRFnjMKiieG9f5CKr7h5FM8FBDgmU6jWCrpYEoe6Hiq3g",
  "key14": "5kUymgwuJnkyooqLNkdCE8QTYXej9QN5yopKmtzHqq1HCLS3AyDyUV1Ao9SRZ4AUZoeJEPmxT7LhRm7K76ta9bEJ",
  "key15": "3YGf5LnPEDtqzNCB7ejSLb4xr7LgKppoXQpoT2FnDjjGQt1CKXV8jfuP6QmLHAk4xNeU74yAsdxXcv4KnHg7xPU9",
  "key16": "8fh9sQNK8hgbEEERmsefFp41h9EjhY8zEFwADExUi3jiDfFGwCdx254BRADm2j7upvP7FYz3oTjHPn6kU9cKWNY",
  "key17": "5UvyLWbpi2ySEctqs543YqGM1bjmiNAsuH9MaSbpWmBvbCask6R6i55TCakCYfiS3XVW9sseqbvPbVMS7qgWeHi2",
  "key18": "3YzjQDvikirsx4XPLLPjTh1Bg4xwDhm5uafTeyHkTZPyrASNXLjLyD3ZDWEko8QAwYkGqXtooB4ynSwXPb6JuhfW",
  "key19": "3bop6TbZYfzWtaeKt19vEviqQXxLHF7VZZDDmvRpiG8u6wZd5F5WMhfkBdsziJH37TwBEbzZvrEaq9ZDXK6WUbuS",
  "key20": "f7BEq5BQVPSugDDnrbiw3kxB5WKMt2bXWc4SZ99JZuzGhYrDAXjmARMXcMjkgdhjMs2TCQVXd1LRRCpagpzfmmN",
  "key21": "4tBHDNM2C5U8ZZMPDdztJRQzKZkaLf2aFxxVdYQ9pEcQ3ZwV5Ypdo2HftgxRs8PJNv5Sr78CjURwhkb7FrteEnwB",
  "key22": "KfCNndtJdzGHYngTZSrnEQw3u2fUCSKgpr2GrFBYmbAfBU8186JU4ivKXVMJfFw7vmpXYkDWE4WFKzXjULgWA64",
  "key23": "FqbtNsYBhYFmXz4bPxeSDErU8SiVqyAtZor5aPGCcHxpZ6aH48G6sYM5zbzsn28DHyL5stFgLSdoE8qnXTNAynk",
  "key24": "5vevwj6MVYnWbscwtC7tguCJS4jCSnrkuXj2HnAVrULSAtM9R8UchHUoyUyQfvpmJUnQ2v3QSpBmuU7NNt1QQRcf",
  "key25": "eFkFZ1ZtLjFEXueaP6XiuRbaJEg8NKsHz2MeEvcEPZufwGw4H1J8U3Zat5eDvV9oBA6bKxvHwoRG37m4pk1NEHR",
  "key26": "3ydTgHrpkCt9WL2UHw4WZuQ4gUx4ZyRkfpiV7PxGWL1XGcxmM1oktWQ9QZfFJHq81ip5yF5Jk4yiuccymZ776bv4",
  "key27": "2BEccdVxMVXKkQNsJEJSVtG9mQgJwXgWoU2HLmXM8hzB8R7U2JDQgxd18jrXEZ1wttaXBNXNU6TDUvPTbcidFGBW",
  "key28": "3xCnrcJroTRnS6FzRgMdJ3oJK6qBw3c4ojp96jpEEhNGpaXSQKawMhc12r8vyJjKWjTZBtE1TNkgb5haTsFWYpKD"
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
