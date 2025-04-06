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
    "TKvCj7CmM5qTKanpuxXaCR6rtyGL5G63Mbu1xkP4tjwSsCeLQDzxe2YEx9JLjRMYa7B5RSmEPpFFnYf3rweVRdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NJBip9nTapddugBKSykdJdou12AATKtUjxpLZ6QWwyG935Hop3YGJxaerR4AEZJEunScQMmZRS667y3upHyhTWx",
  "key1": "KkHaSEkvMdt6z2V82vE1wt1m8aPKp2MnChAFSBVFZAbB63cefVocm7g7zaq7HJifhmW7VY32RGY2iyur14qL2fN",
  "key2": "5dMZtsZXwj6DBdHBuRZXq2XG4Dh4suFLt3AyLEG8dgMxgnYkJ5tj7yDuEXLPzi5WDgSTAa8KVdatVfndpcnymVNM",
  "key3": "2h3rwZPBcg2V3Qn6JuTBMGZAs8ZLdCCmaanJ76cEzFwQoxsh1tZd7xW119iMAzoqq5wUhYAgaVdMgSi939rwqHsL",
  "key4": "5J1WGb7Db2Kpp8hyn2Af4Raa3WtJcE7We3Th1eeEsqAizLJpV8Qyv3hgyxieVZTFa2Kr2WQ2aNbkrLp1uy9zxjA5",
  "key5": "4XZfMh4ocL4RW3cchRUyRg3TCeDMTH6LdM26Ecg22QVBkVQm2UZJTy1m7KXH2Vc7DQbTKsYyw9gArbMn7RpcrjZG",
  "key6": "34f2c9ECMwAvqxHKqyzzxoTmbFcZM293HkQTvBxzGMw6TiuSoLeGydACaRDLTtHBzDEsN71UG2MDYCCbyupzL3fG",
  "key7": "2EMU1yx94EiGteDbrxGog3Xux6Dg9MBL17Mn6ym4LhyQvMR98jMDxy5rtTjUvjWX9vMfeF4aSWmtBkWjkriKjUZX",
  "key8": "5vK4g4LVGT4jgfeSvKJkXto8ifndRPqHQBYb7RUe1yvWfMy6rty4v5QQnr4Qy4gGRRnMc2uhZPRBqzrx75KpEAvC",
  "key9": "yBYFYYaD6ApCCVZTqTxBVqWvcJBqFFfLoXSrhmD4ptnhTBREGmu2f8bbLLAefEweeyHh5uqXwkELs981sxqPGJ5",
  "key10": "2Q1UPh3Xz8FoT5RUtoMVAyqKdfBSH5yJCxKYhDYXLBDxrz8GR4DF2XudKFsWcB5zjjR3wQvS9tSfmnWMe3Ef7MD1",
  "key11": "3HYSfZs5jaF4ReoWmtpKxt2rK9cG51CJeKhYJ9X7CNrr4JobpLSsAeawgjT9oatBdjWsghu3avZpAdCKxuSBYsnY",
  "key12": "38naYaYM9fJaasBBu6wM8jrqXFmTskGTpKXsCgqNH2kJ4qj6YQLCgWU7xx5TtBHGvRvCR7qNn2sgd2iNTKFgyPBp",
  "key13": "433kQn9XRGDHxQqzar4TgUg8nqT39JfYaBjUPjvdXXZ8jR5dMEu6Vpk4gCWnNjit8sF9qEyApjXMxgDV3ahhrXcF",
  "key14": "2nq6tsAdBTkY1TRSYTetbruMYJVqsGoiU77iqSzk7dQx4fgFnRurcPbbM5uRFqpRmBrQEDBDkHWdbYKhPt9EMFDQ",
  "key15": "62ZgVTJheo97cYgX1qDSVBtauihyNZtQ5wCBMfdJrkLh4rRL4eJVBA3VQFGA5GdGJ93w2CpSywaKJEYAdGfBJ5FL",
  "key16": "3ZApeY3zzDBggn2jpLZnyipfsyKcGuFFGTe5CWWjuShBEv7Q1ddqd6U1ahp5sSTEj35M6tvdSCecNFXJrrr7Hht3",
  "key17": "31nCFPUeFJZVFUdb3XeP7DqL6GRCHyTZ1QSxSqEt6r8gv5V5fmtdB38hySjrP4NBhu6ZtdDjnEqTZJRUYvNY44Zk",
  "key18": "GhBditoniTrYJCq3TNwoXBwBTwDwT1sZfXxWWJFM75LH7ts6yU5aHfkPPKHzy6zoYgD4kSZe6J4PN3dM9PF7pQZ",
  "key19": "3T2FiVpn2EwDyT4WZfE2HjnPT3QhC65nKC6X6oe1YV1CAk446xsCJzuhMcxA3iBmQR1WsQgV6TTa7Q9xZP1DjYnb",
  "key20": "2XjFbCFRidjk4D6e5DQNaYvxmQ8ARsqiNT1bqhc6Z34tFthMxHb7MN9Aopiu8smkty6dVoU7t4ZARU6trVgfsCHX",
  "key21": "4j1EGB3d9AE651St7mvUci4Yk7gZzaX2FPLJbVnpc6AHrC4rowi8Puwuvuxyk5zkRFNC53wXq3VYbm63278qU3gr",
  "key22": "29FEdY78bprVYjcDqpYDvMLzMZaJpDJqHMkUECknF55DMNbzMHFCxbKJvw3hUUqALmKm4NeSeBvdcdVNefZSpYiP",
  "key23": "5qn4VveCB95q5yUJtN2Dae9dmMZe9RgTnewGyDrd2ZLpxrxAYZFAjNPbmJEsZjTRSGzEZTAwMCKD495vnonAwkPh",
  "key24": "ZvA5jDKN9JyGvs5fvcZoApNNuiwLgeeKfV5BPtVsywWHRoBKcfFZUZ1kYaL4dSVN9q5pb8qbp2wTHb2PHSKr8gV",
  "key25": "CtZdRV3PNbD1RdVrpbUfGy3okjNxPPFeHRwWGWLVdYfV8s1NoJYrA13Zj2psY9jQKn9nQyiU15s5EiDWZ5hfeoa",
  "key26": "4nx4uqVZehUttFc15LusRgdZztXwvsBLHZqad2p2NN2CX4UNcjdEhAUq9H9XaNKr6X5d2WkytoVyPnkRFE4GKtum",
  "key27": "2UvpyxPBEWJjgRr1QktHGqsujXyiRGmHiMg74GFEaEGAnhSWorvz8b91qchw77LWgYM1LEpakJ1d2JGc994nGgfY",
  "key28": "23m3fPAuBQRUSKeJcLyYC7pXnrfAvebDDhkqbnaXYbezmxCbmY8yPRvJ7F5HRg9oLLr62BPEn1SdWVih2gcCdd6i",
  "key29": "27SGkyqQhgHSG1Y4uusBN7D1Uw9LqLajkxxzqnvRmxsfSEU3idLoeLRTAEcEVgpFo9Gt59YJNC7Qz7JTBQBQBKHB",
  "key30": "X1rJSZNMatZroEJnoKHHYPtLvNyUmztpCvcwaeE8EqA7z1nCSBuvkbG6Wwg2qiYRNZiYnqqs2jDmPPXUBmMQutr",
  "key31": "dn755r5kSB1NjuXtT3SQve3Rk7vgEB67DJabL8Y4CDCHBRPwUgMAgiXX97T3MSyxSnZo3ee3jRshz7t7vWCyUxq",
  "key32": "5Qmc1WNx1KDVPjy8dnmHrXQJ3d64PrkSKbr1Bthh93gVYKCkwBJkUpXkexczDgyV6L4X84LXDvimfeVCkHF13Bzu",
  "key33": "575D6uSTJdC8C73LNNjcr3y4zBtGZwBAcaJC1v9bYt9urYGWzLK86vPRUUKBJ9umZLJX3CXi5bQoH1rqYhQYGXLd",
  "key34": "5ciKiuLGkha8967NSxgspxio8QF8FFU8fXpiqykbz2djmNTcPM8ZHR9x1UqNB93LzBzQMZjMis8KPh9ANqPgxvr6",
  "key35": "4sWGGrxgAeZBxvkngim12zpcXXcKLDcAn8fLSmJsNsYm6oaZw13uoqJKayrXpdPAvNbJBoM1PGb2MVsrSUd76MkM",
  "key36": "4BjMMRaxqLj5xeUwRxphYt2pZxc4tQoBVfQifgMPB9LchsHGSDx5P45BcQJwsHyDmq9wNVvWkmb6vjtk3RnQyvxy",
  "key37": "4ocbpG5Rt2mmhLakXmBBqKH2aGfHZZmsRK2RKUPWRfbwnSMniSTWAxEWr3zcmYSRAh9CJmPLgmZq24WpwEJfxXKa",
  "key38": "mYcvpSXue12Dy2PJWZdZz6wnSZ5T7rDGCMAqnuTAtuBqXZggg9cWu5uRm5hJzLpSJJ9tDbNKk6FGreSjdU9XVX8",
  "key39": "217kznMDdmuWenzxb6QceybH7DXMmd7VyXPRhhR9fwUVaRYu6zSYpnDsrNKgTPg2drJC4AWMFGAjhwSQKdnWheeT",
  "key40": "28Kx6uJBfxV6xW6hH4zHMCq36grFbutSCKyq7e5RT1YjQbvvXRnU7vGq777Rvr94iLN2X8H4g5W1XvuSncSSVTDa",
  "key41": "3rbHVKD4t4j7uNP9yfiX5Z8ZJWyNexG6QpJPCowyBj9qUFMrPojGJqssvvHjfQLDuTt4zojWsGaH1q6ARVdzFv7w",
  "key42": "4VD3d1p2Ph5z8oRcqehvpDnMY7KdxK9dScbdwBEoEPGn8TtPKT1aReTnVEw48BKSQDRJaYjJvWwRBR7vszPyUfjZ",
  "key43": "3ru82RxjHJrtHSNNbFyBeYWXP1MRRHaYpoAEHgVMueCfaAgUJkUUYGMfNa7MpDSuvbWgqC1YLgVgC1Xhs18GnutF",
  "key44": "2qqxLhUGWXx25mTU3MWydKKrSQ725Pfexb5n72bvtkRRyk4vGt467ukjwr8etrrEG4p97tCPht7M2Juo2oL5nXAD",
  "key45": "46ao5V2LaJBZLddjKvppfPhRxy1YPAsuUNkAWeZjAXPMP9hHktxZUhQ7i3h9pkwNzRse4BezFtTstV2H9AD4bFmn",
  "key46": "2vhjvu3HJeU7BZX9XX42MtBLyvn1J3jtSa4W2nKtdtQYe34U3r2LR18frRVkMqGEffWSYMyAbruuPdnx9Zf2ZPwm",
  "key47": "2AN8aCagcWkGWrAcf6CtVk3qqUuBjbZxBebAoaUozX5JbJeCP4SJfsnHSDJ2RXTmJrEELMS5wWPACpK47byEngod",
  "key48": "4MwCJZgBy71UbUPj13tzoLh39pGzjXtp4rX3sTJxF8F1ssaXNFW3smpp8EEnuCZ2ThQitUmC3JT1Lm2LPMQNFcjG"
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
