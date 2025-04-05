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
    "362AAmvmVzoJb9CjQUp3NEFu6nv2VWDLfYdT4aMK7JMrNoTBQgguU8asxErsctBgtJhJKrMexkQD6dCaY8GfQ2pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FcZdX3oMa7BtDE9ZevcA5RvX3aewRYcASPYA2F5a1B49UQAicUjFRxfJ5wjJbGz1bVtNAokgcYPMbfSus6miQaU",
  "key1": "41Kd21JuK2ucqwLtXtiRxLSUgJp7HheXCs329RWtGXgTvojAFHX3zht2fhsbEXqmnkZEegbZ3tmr3VYGLrEdawd4",
  "key2": "65nY96ZgjwXq2CxubKWHLznoZxxTKKaUeTbSBL8ULw6UyYv1WJmPMs4WyGL5FE6aEHN1wLth6njBunQ667AXRzxZ",
  "key3": "5rU47cQ3oEu7J13mFMTErtUHeJtMtgxNkFX9dDZ2Mr4p9EhPTfWphjGERiUxFzJpDvVQGRFjVziyYcW8Y7eB4LBR",
  "key4": "2v5rJ8t1VtBJrTXSk9jQ7ytY5ceVLoZo7Wy6Z3iP7nm2tnf5QT4tjSomzWx7u8qa4sEQGpR3NiwzP8kZ3LXqgvEk",
  "key5": "4YmzTyhAXeMvLhLgERYZHMyZtj4p6Se626Xjb7MZEvXAnWBmYu6M3JRijP4GtRvVEJaEpmYWeqnCiHpKrr2j9kZ9",
  "key6": "2XynQqGjKRC4tqxbPtpsEdsc1JU3o8zfTAkPdMZFzwx6ZsRQc2hLFEqPo5yJC8cq1CUti2Twd2vF58w2uHkddNsm",
  "key7": "3UJnnG8wWYZ7HYmcFpXHifczMfgVmy5KvHJDakL3kGm9ZvWotUjHT8aEnh4ySr7mGZcoCXhtjnCxQ4edDHBQLbwH",
  "key8": "65BsuCPBLyjLjtjDK5dcxBjyqjqvKcqG5TdZHJi2EoVpX3gtuUWzNmk1PKjhJ3BzShA2QDozvfjZTcHdZrL2TDAG",
  "key9": "444Cka3ashELPwt5EMsgLJogDMSUypbytJjEJ8L2uEQQwavUvBmo16bT38KJd7aYEu4zEAmzBrfAvVXoTUSpetLz",
  "key10": "532Dm5ZLUkr9un3YjHkHpdavgdhqwjMKcZ4o3yZ1GWHECweXVci6xTYi8D4R6j42U11mkTSDDRzZGh5ZCQ3Hg6Do",
  "key11": "5tg4TwVJyKCdbbRx2utnqWUvHZAykfmAHohTiD5hRinshXmBfGcqm4E6cwbKudVcfPVpymSS4CDdudB6HyPfj2kb",
  "key12": "5rAJTNXHBfxjwFx8T9jHTEXymP3X92q6mFb1BKr7V7KEjfZbXDk8XD91qYkN6f7gdTLDcW32prVgFiacDJJv3kFP",
  "key13": "4ipM2pYLCKkxTDfHwPzZkiFu4KBaf5P5TebrxZwnQnZdbVCGBYcKBokMvDQ5dRopjYb7pPoF8EMPuUbi6LpNwdJ4",
  "key14": "4LvfD55moSZQFB8qPLr3k3vNqBFKc1tMs5mpRUiUYrB6xKKuJrsCYSoAR9jhdwXm8f4Dn2JuGFDxtySxr7fwnVVX",
  "key15": "2j8PBKjEbhzWKBDs2HF9C72vfeyDcQZ6mWmx5KvXUoSPDQkVubXjWWZB6ZBMXfM1b565ErXzsoQiM4S3yFg14MPD",
  "key16": "kCS8MLeQ8PWJbKESNZKM6d2tue9g18q2ZPCiKHnSyFLjtUf5UCBxjGjj94DZHtWYrwTBeZCUPhqAPnjB51Ffmpr",
  "key17": "2vX7A43eKA5PZciP3DZBtwSoFrHzFJsrVePzEd2PmhiukAhcKwc3virRMdaJReUEP1W5NrcAywP1jwvxJuKhFTTx",
  "key18": "4aRGaeFJVV7Hdvr7G2cPGneTruHfE7rz9hm1M1wSnqJZsXQfTSzS5Pn19ZzafMGb5dXnqonmmrAiFk15nrTbdkAb",
  "key19": "4fNXEWuqJqz9QuLAG3b4FHtkpb5rH6E7oPyK89ZP77tAuYw2CRiovLN8BAsRYR9Qpijdhh4mWhYdDdsqAddfkk1C",
  "key20": "57sZBUWhFVXhCWh4nAiguptZk7mFgxDPUN9fGShwY8qhaDyyrmNEBcB1QEgrDFmKarKWR4NoY4ZNE8AChVHLTAaV",
  "key21": "Z9WBYJgbYh15QeQe39ko3HjCTjyoQM38HFsjtNCQacUQdmfgdivgpx7Sboozz57XGPmZedXWXbY7uJF6eBaMgn9",
  "key22": "5eifguW69wv6QpgJm18u56woQGUYJQ7J9qyfYZxm1tSrakpwbxzfE8epwUm6a86w9XeEsgzXtgXyJzq5cofc3kuW",
  "key23": "5gvnTHPXbBDRDvdtQkDCJ5bEMR9QTjUCBWndXPsAsWWZ5FVey1wKc2zbfHwfRR7bDVvt7NmX8D7ndHTYV42eVaHo",
  "key24": "5P3DXtJbEhmMQFRNST8LUs3LtZBeZYjA3KN2H6F9fhg2zrDuDJJirHCfVSkuh7JAKTCnz6dCB4UbaMiFh7pvyUGq",
  "key25": "WqFp9ZRHXdfM9mMk1E9Vst4c1GWccMnrUtQFV5GjiMt624taTFUZYsy3WZD3s7ti4xoeVU1Qe4ZgNmcfP4gPpLz",
  "key26": "2Tng8b5NZz7FyVT991RceQX99yaC2qwNeij5G1ifFGcauWHcHPmayLw5rsBNZ1XfyFXeLnbC47oVBEFGuupfF77j",
  "key27": "2DdUccmmS9eNfHGpGNtCE9cPTyDvLfcUrrt4V3xARQzNvnumDfCQskQD77KhW7bAPjSHohQqxbBFsqnp82MxxsoB",
  "key28": "5XyYkCs7tbRoS4VvGCiGrHNA1tvqhnoG4c6N5rasWtXrkQTyRKruG1VacmeDKZYTpZuhqm46u8o3G5nSsiLU2WHf",
  "key29": "MKhxCd9VXTSaNgaMn4NUKQaB9mXnvn69D2GSA8gyFpHybziH75T25PJqK7zGUAPvyhLXdHJQjM3L54Fxwqm1VNr",
  "key30": "4eEnrGRPwF8Mpn7Mtqg8LEjLyYKrSj3pHP3bCZdwLNiM33nkGSM7u5mua1k4zDZd7pX6HFZiGHkSteg4tcX7r2i1",
  "key31": "3zVAbzpMAdfoKKYnWwKunazeqTp1iEiYW6dDjEu9BJYaj9XXu7QYB1xpB1CVJTVpApgp7jKCqiz2JLNLQxb9p5rF",
  "key32": "5c2EexUbUBo7sYae9RjQy2bDc1zWrHchYyhXWGBaiKBe8NgJqxubH7m3RBFpQB4YDeaSfpkWPVzQiRroEoNgHdpW",
  "key33": "5eVVsDDm1RC4fHYy8YQbMy3mWLiyycRwRF7Mr8xKknpD9YELoDU9X6cnZqLQvr6KzZTLGBymo4ZzDnYsbiQhsp6Y"
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
