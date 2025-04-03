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
    "i7C9q2MryKLPBab58Sbde4oka1GxrNk9FdzMDdqZUpoCjQZNb7wth2743q6nXzKiQax3vTtELVsL1zsXX9XUB6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28siURDVjMtkaLPSXNBWngztKUGJcxRtoKfLPDHnECg6Vw5QyXmg857q31DVfSgALiwjBJ5qGnxew81i3e2Vn7nQ",
  "key1": "3YJcEcs4SGD19ErwNeCZnda3ctQotL5afkv3VHpx8LWTruZMeXCHPXstBp2r8qCQtTUVwW7xW2S8CjZXgeHSr9nv",
  "key2": "2FdRDJxgteTMc64BTYLs4WtSrnmaHHkY3UN6EvgB7MJrV8poF6k3GhyupvTJ7RK1ELBB7jTNro9nPXET9nSnJMK9",
  "key3": "2JNK3dJ2QjjB6vYzApt5t6jPBkPh9mzjvGQSDLF17nzM3B8zSYXro7WvbqB4vcPsmJGoC1EZMNdQLbsPwUx4dQJj",
  "key4": "3LcCsSZk3Gc661dBBicd8RPtzP8UXpGUrKdjVWvWx2D7PtSckvqqEcCTtCAf3tKmypHGbhWyvT3KdDh9bfCutmo3",
  "key5": "3UDdnXSciV41TiV2JTjQXizTU1sFqthjA7x92Yhg41vdcthhwkogSr9cHAjQyeiCkYPC749xEm6ZFSRc4yjeK7ia",
  "key6": "3hF2XmZ1C7RTbtGLnzm5gokmckcDhhg5V4nxQPeCmGBPZHpKsep4zWzWqsyHBN9qKvMYwECqJ1GN2c8ZrYAmp1Kq",
  "key7": "uetVmiajgbn96Wdypexo8ApXeoxv6yJhmactWj4nwjtdRdyGJGTtP7JziVtvbrWQae9tQAN4M6PTEzVRfZ3cAPZ",
  "key8": "2WW9uhvkREZanVbhSucYBG7Zwa2aiT6KDAPrQjpMesbDHEJqpeWLtT8TMsk6h7CrbcuumRHn2Yut8frQke6pwusa",
  "key9": "5s7uKSA9f9GtktKSWKVo11hxG5LuBS8bukwiFmF7DrJMFgukM6nowUwM9pgs6rFFcESuXveTKzXEaN2pKjV9ozFZ",
  "key10": "4ck7EZg687unjuhZwucSYQfPK2gM12nE7ojyJSSpb47wbrBUA1FrhJXnjAtKg4w22VqgUbM5cGogNWvvdXSK9fCC",
  "key11": "4zTLrU6bfXuUp81Z7Mi9EiEob7hkz1xKjFGutEfZmSwSX4sYmVyiGaxpvu8yRwkPe21ERp4WjiNtz4C5tnp6eRhS",
  "key12": "24LCtjkniuD9C9eiBJXVyCb1dFpyzrov8TtB7Ry3bor9cdUw6tjijZx6PSeptYS76kbQvN6CKymRG2Zx9gUZvCMf",
  "key13": "3CTeCSLVCcGFTMtEXAjKCEn9mFm9hPKwx42VgRurMUBFrMBf9EgzASmkNnPgpePGrzgjP95pb6nuxH78LB8FE2CZ",
  "key14": "24w5sa1uz4Sei84jdNSXCnpeYudKENodkAkLswykGwWkafvvCmCaGinqMRRewjYDZhpYGUGwduaBAka7QEn982bC",
  "key15": "wCL9BB1FewTcJ6L8iHH7cL1eLXvgSK7UjV3JUge5qyYBErEyyxj45T9hWATEVVW9R6JKPLNxTgFEuRGjZXAq9wu",
  "key16": "4p23TAvapkdo5W6r8LWpQiWRU6USH7bHw36c8z3xnPPSv8fRrMjbPK9EaPbPe9xXG5MujkdGwbAxJ53YB63T4cbk",
  "key17": "2fDeTnj58mBLXL8uwRTv78LDWgUK3uC9rX4f2tWvrVXcp77NVnon3Ct7WhjV5bBEJYcDKW7GAtHcuF5nKwmGUm8X",
  "key18": "5kE5Ti9E1NJFzYv9nPMnr6VuenByv9VaESPpNSCp4rLSpYJML2FiVzLrvRzPxMTNTw8XB3zmZFtovZNEkvQbcytn",
  "key19": "PSg3zywzVm7PFu8gnhPJNrbKRMqWTqE4jN4u7eViFhEWkDmHeQBAZk55gbGQSjr5UPztRmAKR7CjPK2C1wqNUhe",
  "key20": "YxHHeuY4Q4tNQMdzzDxyKiiUjbTSvJZutDan36Ec21hPpd7W4EbvwpVnBwc1hJozTsrSEKnRKtTpBZUKrdMG437",
  "key21": "3Pab4u9ALxRwgAytuyMWTMFtDbHhBYEnKDnXDNF2wECFjjFJ7rSrB8nC5P3Ngv4AgEB2RVz9zgTixDTp7cAXQg2a",
  "key22": "3arySaR6JhsFJq75YweWfY747Et4k9jpn8QS3cUmLp5yqUvT2JkUTSLz2MG8unCDDZiw2y4f5MP2u9xVa8X3mL6U",
  "key23": "32cDXzATfgUSpvJCjXyCRxMdDKGV16cYvHWgH1mVVSFcoMAEoaMUfa69HxY5ygcehMfgwMTkpFzEmuUtXSMKz8dA",
  "key24": "64q2SYsLd1hNebrrk91K9S8s16aLUrY5C6i5qMMMX2iY1n64q2j86vpG8ranxeKKYDjRsdnZ9CP6dtMTco3S3ArC",
  "key25": "4M1yAvJXquSifpXGBE8QAuTNDxM9Tm12yseQfDnS8tzudiPZoHDAMzJrAwNWqFQn4acwDBfj5KmLWb63oDZDhiwZ",
  "key26": "48EheuLSdDV4fGzdcf6VntjhicWMDhvLUdLmXLkZkWi7P5EXrAsLLqCKXaxUvJBWAF4AXcjCvuuLHt7fFxS6V7Pa",
  "key27": "29MfCQ5Br4XGeyY8FMUiY4LByYXQkFNcp2Wb7rd5bfpy9RQPC8Bqv3SwgANE6U9ksEmoHM89j4De9FtCB5xhhDQN",
  "key28": "4u2vwf3ZdGh1TkwydKxS6dvJTgcf1tJHvKVgtLSrTuoQxUfW1XeDbDJmajscdSjr7piFdTwTdTPiteKfD4XBVmSm",
  "key29": "z4xNJL7kLSgqWxEjuaMSGqCz2c6wim9G9BubCjx1tKsvUUH2DjwZpqEa5DDszGtg8ed8unofe4pe9BsCmvYo8dq",
  "key30": "56fnATjEjwycjKNNi5arfsLkRs8YuDNEjpNNSpM99xrmWPker6TvxrswLQ7TF8ss63V9rggyiNnvkB36ojYuw8pN",
  "key31": "2g3CWZqpivR9RX9fcGz9GVYKsjqHzTZF3Ms6EJ9KuBHATUXc26MFbtAGgbUupzUUgqdNCWcBdeo5tDQGMX26rwz4",
  "key32": "4ejMYvoRfsjzUZQFi4BeAvdoTDM4BQtSotMhYytB24KJfrsGmhStamC7F3JrkYbChA6aXyA9T6xva3av7BJgRgFY",
  "key33": "31Gkq7e5kpfothJLFw1WHWd2NB2Wq8kpU4P3H1tTrxzn8Y63m1h37s1dCKtU13Jc9a8nyqAenzw7E6LpnPgh48o1",
  "key34": "2KNUKSQJqms8EpKNXvr3r2Z2eYLhzqHW7qzLFyLBitZXMojc2bsKN6pXXHvgQkEvJDmjApFnLny1Ee7htUuNYE77",
  "key35": "x5GnfSzZ6crV4LCw17BL1kzgMZamsY9VKJMqaJgUtX73q8SpvftbVfs8mVUgBhkAqVVJLB5Jq18f4zf1GmscdXQ",
  "key36": "GkTzX8btNEhm3mPbXHHuqUVa1kC5usyGAH5LdEFCyZwg8WGv41r56dEX6XUm5zHcBQ1aC6kYSznzCLPMAJYweP7",
  "key37": "2n6NbVtTrhxihXTnLRSXN547jkTi3ziHKzHsE5WLyXhQfHS3DqdeCFBviECFUuZMhsMQ59uQmbBSXzfChSBn1Xtz",
  "key38": "4DXAhypQq6CzRsB9K2etRMah7racFeQQJCj9MWphKKpgDjrsFykoTGyVERDLtJ6krQ7WtshGNchudehvHpRgKd5X",
  "key39": "4M9rdXj1eTLKDN31EGkC4LqTEoKd42jTLKZeL8PWH1jhBx4rX9qT58BdoGrGkSC6H79psWgmmCj6EXPe4F64z9eb",
  "key40": "CYMggkohmQJYtRALqkw2haU6jMfS1oGXftPg1zvsdo6ngkbs9LWn1o143aYBybV7Brghcn3XGopV7act4JeqZij",
  "key41": "22fFfj1cFvBZypm9L9AnGLi9BYuFGt8HJk4888DNrMHS5TQC8CVck2nnYvYJw97cn2mjJYcZwNGisgGPAWfnmwdA",
  "key42": "3WncMY7j6me1LWVuHw2y5AWz6FUTi4csmpZtm5VMPNm7nCc9nZuaNbeYrZTDiRroy8UmWFCzLpTPH5YQKSWnYyWw",
  "key43": "5Lx478nCC26VEFakv8ULSQSagWroZx2p5NBUD3nrMw6uwKuVJnHCvPuvRdbPTAJSWJA1qhzinqD4mbqnKqpmYKF3"
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
