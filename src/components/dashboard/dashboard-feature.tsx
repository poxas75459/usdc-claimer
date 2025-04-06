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
    "3usLL8uAGDwAQCSAnNYUuoa63egUgFhEwVUaH5Ri6wbUeJ4qjV2yYKhS5ijCysjQZQip6Lg6aqTELwTxwTxZ72KZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54KyYWpSe7H35RcS2SRt3Weoi9iyfLhU4SsxX5WwYib7MqttRoaeKtZqfy49YcBkNcKpxXi7LzY6XdFrGwa165rj",
  "key1": "5Eu5U1DWBP299NajfLTnqti487wmtspeXyvCB7VugmJXAoideZiSNgCJefMmvuYqCybbwirXBpkN5pVkv7Rfcobr",
  "key2": "3htGq6jvrK2f8yr83285mvix4NpfjTueZfBHmrJM5RPABEpmACgmwgbxnkYoJZqDwACEHTebvFrfE2Vpv4D5famA",
  "key3": "6289orvSqYiLsbXq7i3kr54WJ5EQCLzGZqT8e3Y1udnHB3McPca7hBUtruzenEZ6C5QdTqzuikNWsX2Ljq6QdMxB",
  "key4": "f1XzyMdHcdnm9aPxijJWW8VPHVossVso6aECtp5Qb5senX4nsBf6HHvkkpdnH2nmZJPijnGARVaWk5TGjDcwhLJ",
  "key5": "2unPJkUEnEKq59XWMjh5kCmMcxMMP8PSuyUEvdie662NR7gjYLhoLXJRgipwrAaG6G9WwuCuHwdhZ4MYfwpuEjvV",
  "key6": "64cM2Xp5CtwizuQ5hPYpYvHEvAYam5oPBpg1T3FEN64AZEwDgtCtT4dkdANaP8Mz1vGxXkhmMhhcrPB7fKPJQY9p",
  "key7": "121fbJUCPU5YshgbdM4URjHKniAYUzhJ6AhKmGN9MNxdz8dGZiKPuS7ZNExh7DNiY58jDFooKuBG4ByxFKu8GcpT",
  "key8": "61mZGt2msFXsCsYmzoEtm9nTnubQPh7KR3AqZrJL28p2xyCVeFJpgkU21yNYm2k6DfseCusECUzXGdB3sQHTWwZK",
  "key9": "3satsMg1NnNhxAc34W4mvzm2DDseZfRYedEtQ1oZWSNg6U4u3EDU2BRz56V8ro4a7jbE5m9XCJVZQR9YdGq347Wq",
  "key10": "25jc6mY3GAkRApfc9vBEwc2UjaaecJmBbUKLRaejkJPc5iZcQewQaBCg5LJ4Fb9qdtCw4zxQu3RN8D111qDpiftE",
  "key11": "i9cdcjLKcnZZnPxXNeMvWVVstf4fKPNnQ5mwoLRf9Q8khnbuUjwVToqqY77XLhZFSQFip5JipKTQuJoRh7qt3gB",
  "key12": "2gWBdEJ8Gc2cjXWnMuTASMk7fsUKWWEtUPLp1b1qCZRoGLezn3ZpTkiDFuq4BaG2kqtuHC31JBBPPAHciThGLviS",
  "key13": "3GdPdCqDQNCM9sCDmMpoBr7FspjG9XaaYfGb76MQnRQe63pG8yxqk8QgtQVjwAaq8TSDdh3y6aTniXTg5coPwuf4",
  "key14": "3ovHCWoWZXfGhYH49y2JNNd2iHfhsfhgpDCmC1q5QrKKGMjBaB58zncUKWbh3A8h21q3MZzje2RHLWV6qjc3fMPh",
  "key15": "2M3AcM7HuDEUhUwVnRqjxfdN54ZCutd5sL65fTWPNNnLtk5UqxcfDqbL9i5U9JhBLxSpkSYnsZ5fkCEFnQ4W6nEb",
  "key16": "tcLzcmqoe7khQ3MftL2UsRgihaqWszeyr8Lbn6raKLwvNZx4ps8kC7PzHFtf4B9t6kxqLkncd13VYDqAQJs5jxZ",
  "key17": "4dUCZzzRdkpY2PkFgpSHzXfT6aVgvZKuw3AgK9yYMvbYHPxHPjMWExgmRnWeiBRKTMYCjtcxtpkV3Vgpefcgfktm",
  "key18": "3xfTEg9vzw2pmnB7epHWsbm9oJdzDVkeCcwcP1JnkY9G9Nc554Rp69ppJaHLwMSCFL22nu2gfsRQdFAeX3sUVtCG",
  "key19": "56MnrFuVCA3PJfmBvekDrxhZL1nFHaseooTsbTti1nFV4fWHucQyZhJk2w8hQtc8WgDBu5DDu8N1PiXhdX36DoJ",
  "key20": "5HYjAzZZkCCKSEqqm8s58EqNMMVJU68SkiUShMruswMvfpHcmscNEwpgxuNgLNyQAaC2pnQxZY8Wv9YipzY4oHDM",
  "key21": "42CezAYLvZCzpbt2sLT2QVcKLoo2mhjGQy2ASBv3hwd9zd8YmRfBqNn72EuUEMdLsodPur6RkuqxNBtL6wM1t6Kp",
  "key22": "iCDTA9wVyMvYo9FGP4qt9JqJRVqkyNo1da5YQYzg77wuxoqLK3MoaT4NYNmopSDk2tqSUAjShwXzT711wx44G6U",
  "key23": "4WMZaT3tZ1D8usE3reWJ1g8SxG6GCswxXTDCfYiNNSSQ6zjd83MMBoiU49LuYWxTQjrGRAYpdGxBh2XDNZ2N15ug",
  "key24": "227iP9Pf2PiKkoBUcmgHZrjsLCiTeiuNiDUzbBX5LKzFRWeVM3q9zbbvAQWi8pHwmraHQKiNgyCgbQdmpzCuJ8UE",
  "key25": "2BMpxpjsM5QKJHeKefJprpgSmjsWZQSypStvWhCg7BpWfRTSfJnVSGAsaqR2ByrwNnsqqvUNBUaSDcVvDDf7MVNs",
  "key26": "ASFNX347Vn8KW7CPaisQz5iC8sB7rt3Etwzm5NP8poBYym3RDPP9z8JXb7Q85c9Z2WywxEsoPG4ZRUr7bf6V9Qr",
  "key27": "3dFTNBKnZqzDCJdbikFNgwPZys916DDTU7rhgSXTKnjUqEsdczVkCCuScHPXaYf7KN2xDGdYgGop5BYzx9rBSEsX",
  "key28": "3oKF54RiXDVTQLA87uk4bvgqRNocGDg4ZswQGmTjsRCeERD6k5JYD5bz5doBkXEqxKxEVLAvLVKTZPvD96eDkpeo",
  "key29": "NjViAcZKpFWNGfV2VXy9t8NgKhh8MDfscyP29sPaUyJaqexqeyUDLAD7xVYoRumBm4yztywVe28yGBomoYBQeBs",
  "key30": "2KbCgfUWHaeNWGg1xj9o2Z1svfWYpn5qLMa6NL2Ya5uq8Ux8HiJgGVEUqn6xBLKjAsctvSguAsqL9hfEnHEwz52Q",
  "key31": "3rB3hhQS9hEktyG4YMS3A2jM5d8CnG6dMgssEhAWkL2Tq1Jz13SbzfvMBvq371L2h4TXMSGCGHBpG2iwb2k5uNBX",
  "key32": "3X88mZPKkg81bYtDKRzeikvMvnJRwH7W1aUPVD53tPHRAP7dcVeLgprHyooXRrd2rXGgtF8r1rccXQnnhq7zc9uG",
  "key33": "4hoSF5SDRPuCtbJFi6JSsYkNwFzn1LqHZPa33DteYk9nGw3mjRrawwaKoyjoVhWnzuHTywcm81oT3ztCmrZMjy8d",
  "key34": "5kNit4aZKBpwsoca6wsYCpkszc8eTYR24N56jqyAQFLPDuVFnBpiZfooKQ4NFJtxepkrKAf2Eo7cGEXF4jW4prRC",
  "key35": "MU44SZCjuhTFUoen6WpRfK5rpxtsiwDgoYiAVQJ298HKeLqkbvpYoJVZH6D9GAyZ8gJGbwGXNZr5M73TPWU28P7",
  "key36": "2DiAaGq4qbfkKnn8UTKk8VDbmLFEAcwzQ5GrcwbJiwXRgFJZySEw8oobNU2qZCePHjLtriEWnSC2ujEL9zpQ3vzJ",
  "key37": "b5rvHYCsYbgZim51KbwT2SDfvgJ6sP34FZw5JVHnxu7v7rxNKBttFZdULo9Kvw64vffvi6HpKfQEfcxmbULWS7y",
  "key38": "23zQR8pNK8mTmL1dtynzL47x92i1uvE6mRzdphZqA3Wgf6ri7Vdj8dj8T7refodvjzkZMrAyi3ZWSQ8tyRRjmqBp",
  "key39": "5pPFCW4snZJ4AMiq5fJNFLiE2LK4oYNETu2y9c3jT6k6dxVZh4KXDHPWM2iUWwfnupLgPehRvZ4TsLrAFR3RBf23",
  "key40": "5MoFi1Dws6RKDtvBQ65FaEj5t5oM1AkyPpnRYeJJGox1hSM6mff9D5JeCeaS6BkPFkgiPvSf74yFpqiVKeMPmVfd",
  "key41": "3Zc4fnfdgimQvCNwTR3shCyqBTJtvHya4AowSyDaMEetZ6jKhn1asqzcLBrmF3uT7vDoCuRuhifyTwabXfUi1w3g",
  "key42": "3SPTwYtmVX1Rw7HpbMAB7rW2H2ERwkZ11i9k9F3YdZhzDrdHV7EeYz4Bmc4hHuLEtNcJpvz3YWjFxMWP2Hcr16rW",
  "key43": "3DJQZ9NdDh3Amu3QG5fbhrkgKz36x3RZLoM3g64YthPqUsamcZcYpeNgCyMTHX6jPaZDdv8QJTQMfxCqzMFyFqNb",
  "key44": "2juoMYkfoEnPoThq8HiAaystsgPPCx287EL4VaTfLhr7pYxvChP67DPzSPFJpRrBRuwPQKNor8pnd7vKY2jG55wx"
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
