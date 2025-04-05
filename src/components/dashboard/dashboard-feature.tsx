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
    "4dZZVUWYR6bMUg9wRAfm2BBF7oqxRXnwMgNpxgbs9V8ZdKySqA248STPoJx7kUE77yoTg2U7PMCS79rKs5t4NE5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHtEy5A2LvPKeNaCNJYne52EGhLTS3wQL7Lu7vigUEhhUePYMNkoiRGRYuDrdTrtbpW8w8KXh2fJ1U9fyvnArC6",
  "key1": "4KDEoCtiy3JRFWYYZ8uUhF3y3BgMERcemCYuHccwstqdto4Vzt5BoNoCN2qYUfydhE2oygg4sELw7aW2bs36SjJg",
  "key2": "4AnonrBw5jTyKxippL6rGewtHmoZVxy44sBmAD4wpBXFrTnqcvz1czYHCWcDd1ry4nmhcGsow84YKWy9KQB9wfv4",
  "key3": "42g8PT9RjxeuPakHLxJkxw9CjjmPLMfE1g2275pZhEiSLXqGR4xYu59w1sDdbktSfRSHRu7tBW4YtesL3ZRDVUWU",
  "key4": "32j24AYhsGkWuNJMYcBfPE5MQXjDgTu5yY61z69UBmvvumg9x4S5P1rrdPwD6NbAwDBaV7m68Hb33cSJPG6sQw15",
  "key5": "5atLDMT2toiP7wp9ErGvrCJS8w3ajwrZvFviPDe84X8uqTa3ynXJTnagiK2jKabDJpQkuXVTrduhgZhb2KFwkVv9",
  "key6": "nMEdY7ExCP4yjh6xj2xKiDwyB5u74UA2CVZJTTGSCYQD2rF3z79iGHVhEwsoTW4NLe6hPTqnGuDKxENBKR5h7wk",
  "key7": "3GJAzgDiMxaALYxxggLep5Ytdq7G1339jSn8z6T3D5Eaf2UiVddY93CXr8PwosZURkFb1zvScXPx6DjgUqBykgAx",
  "key8": "3x9gQ46gXRRLV25NignrkQSKr3KUUqYFKt57siapx1PnMYpQaL5XqK41523xHQaA5MecmHUPLupWeBvwoRfrZbFp",
  "key9": "4GUFWYgXgxvxsTLzhxqBUsjDmJeHnLTMqLk6gyWaoAw3rbeb1AfvNMk711mBEAtYmRDyz6XM1kLZkj9YLMmxvomz",
  "key10": "2Vqe5oBmbnKBQcMtwrT76BaU3Hm4Vf5bie8AizK6zcu5kMTuaobekuKypisFhTV6oG9ucMBnwDKqh8z3GtTTpsQd",
  "key11": "3mHXs8mXQ18z5eU6XiEAxv4iewf45D2VYpbZ7P9L1hvbxus6j9R4RrYuM7Es1qWFP6QVd4JV9QfmfGJrj1YeSiee",
  "key12": "viFxwBEGER6KTqg2EwsVg32PjcxWbmpc6HTJe5hSz5qRdfrHNoUMkJcZFDWUKp3hfJxoGep3Z5AKvqeGeq6XJQb",
  "key13": "5PgnErx5FcCG72axaL7sM5peu8vmHNn6j1bHgDsLLfBZ7bNtqnDLPXSsoQdsm1vfth3TCSYg6rfh4s8rbKALgYvP",
  "key14": "3r4Gn2huRfdwqdkupXKU5mSfqXLvoDYmzG6c7aY1js2PvA7uVCPbjL1pBakvxkGFEZjkJm44pkkiRZynSkA8qA8x",
  "key15": "2GW9q2JS92BEtrV5GytaELyFC8Z35ofZCsRYFdZbBRGhL1782gQU4SYiJCJfzRXC2YH8p9R93PKW1deBLhtBfdGj",
  "key16": "2ByC3a9rmKq7yW6vj2p7Xj8d8apeu1DcqdJPeFLCKTKDwPA2ATHLQrkdyvsMqLhDXsqzsjhLfALvtnBVZv79HUU",
  "key17": "4jKuoxjBCQbGNYom1dLn4ABNN9JUUHHcUpXatm1M51Qrzj3XKGfGrrwBdvrXtRSD8qu4FmRSBSViriCWCmYCJmfu",
  "key18": "45d2Fege1g5oAXGyUt86jnBkwjJGfi9L8ax4PXp3MUfK9Yn28nvEXaeti5p5J2e94Maa56Mis8sZF8ZSvtiX7FDC",
  "key19": "6WFeiBFRyqyz5Ey7hrkkENRRoEJEEkS2FczRsfwmrKgSEwCcjiLVdGs26mYxfXzc7WaGNurjk7TwyxNR21Qu6tH",
  "key20": "44oCEL9g2YLJvpN6vh9tq4kgx12JjesEdjGBACHB555dQWfpmWMUs7os3XW3eF1n5UZJG52j8RaokZUm34VfikFo",
  "key21": "VkTj6W81EMWPhtEdy2Ud4yRGJ2fdhPyJtS54ynfym3X5hgNUJ3TaFzLoJPQcJekdBZXvLjKrHx2EZHSZNPhyKB6",
  "key22": "2xmCEuELoe4i6ZnF4j7KBbjQcQ8KagFtHd6hN9hQchiaUueKbBGB8GMsNhsbcW6fAKZMcBDVxmwSayHApNfyDbdY",
  "key23": "436Rkm8PKYm7zh4K9NZru1B5SP64U346k48JM99SdpXmqExavdgnMwUPrUaR1STE2RvJi8K7ys4noZ6kBKi9QH8Z",
  "key24": "4BKQHh6XNNMSh65qsUUj62Rsu41LUbBFiU5hTThhXShFMEhc4VbVfuCxKFhenMS6bs7yFwxbZsowaFDxmtQwLe3S",
  "key25": "5pAtUgdKA1Hzivt7Nd4yo6eXVFtdfLJ1ReMPCaSNKJKpBpXQfiUWWVnD4Syfb79V5dPzYkZKuZBUTz2m6w2m42He",
  "key26": "2oitaSU8HcWfHkqH5rTiBdY9jDTQeFPxYw6Gn7MPUVipU57rA1kmnTAAPskGDoJAcrKv6vNfp6KW3HBRFteriwWR",
  "key27": "4i4GguEvS6hRqGgp2sYWpSxW1aLPphM7up6D8aMjy8cJsT6JBtBzhyRTuKJLqBbnQNcpVrcmrFxMxQhZ85KMeHLs",
  "key28": "4sBCsQFqEGvXR6jxuyrT6efTeaH7v65mmDu5vE5H1Rx44a7nyVEtyjbvjK6x2dgC8Y1b1BsKTTmUPKqX5Ecvvk1E",
  "key29": "4ppRVLZaFXwFiYGYP24rFBXSyHyBjkib7L91aoiMTsWYRcbXokKdpGNibcKV3FNgt79rZCjBNtSiRDwyLGBj2HAd",
  "key30": "2BnLY4ACwFW9PQpBDF3vqw14RfiWP9zaLVti5jwoG9nUB7RoEAC4Euqe369DzucXYSgv5AJDjxSHY86MfvvjP7Mi",
  "key31": "3VgkhDvviER9qtnVWp82dPh4Hr74EGWwcfNtHG6KTjuoGmHWhoT9kQMGYVn4RJW4jZ4ghX23ZBX48MmViU79AhHL",
  "key32": "3Mf8wBKbqvoTJHj7mnncXZvARbs4W1L4gKowrSqbtptJQmxjMAHyCQLZ7FNc3DCowpCgSvbbDanA7kc9JAh8Kcb5",
  "key33": "5UwxnXNSnpp7E75eugxenmMQkK6F44EhzsWtjTzhR92ZiXVwMnEwc2AECrqkUdZ7ckR1sKdNiJXXokL9EpaPuRGV",
  "key34": "5xbTMoQzn8d4gKosHvAegRWzet5yz4aLhu3UFeKtQusmXe8cvCjxpDjBtBSRpVRqZnuCJr2zuv7b9VwSrZXwFvFH",
  "key35": "44BpZFX6yAbYHMbpKmvr61Zy6wVVQ4PGDSHw1vv4Lhadc9t5N4p5yaFiedTGyScBFjDfX8WayCa5iibmhn6k1Pj7",
  "key36": "66wBwY6VbNDPeCxRKrFeshzNzfHe7gyFmPZi5mEufWAz7dgq6zfETacemvsrVPjZ3ATzijLr3vJ69GF5tSXtqWf7"
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
