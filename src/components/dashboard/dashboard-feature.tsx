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
    "45vfaq99SRpcp9RhDXXFJtttq6AT8tSST92MQmJqMwtrYCuUqj6h1dAoP83i7aA6Pcwype4AZ9zVXPtKtj6ogsqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jbn9CXAa5ccETndfWXkPYWUxFsktJrJLC3vDx64H9A37nsFVnqKpr5u21v81Lrikme9M3vgrT63o6tjX8kWtBVf",
  "key1": "42GeNWn5KinZeAT2p9E6MTALX93UrsxGwJ26nKsfDw5gqxPo2s22vYCyVmz8dJMX18Zq13qncF2FJ8o4heiAX4kk",
  "key2": "axe2Cu2QMDioLyzYp9H4ruLsTqqkLko8qSesGAhWkMjbRTJ4gKqwGmSdJQ94kZ3QzQ7B2Gj8ggwK7rTMMvL618T",
  "key3": "4XKRpAaUkTTXmaDDXyXWFkcPe47XZb55ZLdea3S1iREKskNt1GSbVGfd144RcMHhX2dXJMLbzXimKUAv5hXYyxZj",
  "key4": "2syvgv1pN2dGCYMFiTVv1cWyWuZuCrfywepL3dar64e2uV7Mjd8wgJkUqLSL4QU9S9AKumSbQkdKhRuwhpYMR6Ur",
  "key5": "2ouhBqKnBeJAz7pfDTBA9Z6irgdu4EtUdKzv9WEVy3GUWsGNTRUmDPzQUKb2FXTZxXTXwzBM2J71aYurE2Ldw7GJ",
  "key6": "5eGtVdkhS4Wr7XRsao73Jka6BBjrWyKDfFetgFD519qiEJM6vDgRCR5q4yZLiovgrnHMv34Gku4u8cbtgFipJ1f4",
  "key7": "5VaKE3oqcGCTUxMCZXQvchnFvuSqRr2mzkBvzFfxrSRxpM9hiSfZa1XnyUjjrPP1PUHC8E31xSJ9o9VADWp4xnBR",
  "key8": "593wekkMZHZXTehHAX1zZqEJKiNS5Xe6HoXp4rgWE7GZs9SVKDmykpFhJsPkMrSQ2wdCmgUuZPMuG4qoKkYHwcem",
  "key9": "63hjRXqd3413s1wBxipBwBg4fKFLSMpeTtScwaAvQT7PmvCwqTQxRcYRov7SuMgpTz25bwbNgGkM5q1XGKzA6hBR",
  "key10": "hnZLR7Arzby2yLF3RQTjB97WpC2s5fnJBmD39K8mDgiwFwni3ti3QYiGb5WQ7g4citKjUAH1gkhnnn4nKNYFRqY",
  "key11": "66jnaQYZuiRm8LTBaei7dxMuuoGJDLBXy4WGqQnXmYYAUfLFW1Kg8StMWkP8PX2na6NQDceXvumEEyLKD2xK9TXH",
  "key12": "2xmXWawN8PRZ2hKRYZBvb2ppn9vgh1gahwyKfoWuR4HiHHaxFGekDN9cA9UiEmMs4xjCnFbws35K5HQrxyW9QNrM",
  "key13": "Qam4Rw8XrAYnHkJKdYtbkxgK5wajdTiZLYUgp9Foz6gn3ktXaECfyEAK7LmbG35UeUqFHoXe4QVp2xLxCFPpVRU",
  "key14": "34YqZj31QdeCPnvQSV7R6KPK6FzKTZXEzWS7LJGxPMWtsLgGbSNUNzC8Vinq7V3E31qJbisudxXpmeNuPHqyHhCK",
  "key15": "4LPFrLD6AaEh5iUV6u7SQq4E4uKkB97519RNu4rVHhaysHJUbumW5jZwCTx3BSH66zTyAoqWXxJLVF1gj55ugF8v",
  "key16": "d8LX8cJBkYF7hAwJYfhuURpSJhrgsRakzmRYsHbtjdcwvaca8X9NyUEtdh1KrYQh3YaQZQjyrTK8sbRNBjekktH",
  "key17": "4omARarnZJDV9gHqwa8RRMhLPNRvpNApsE6oH54jTrFyyezq5kgHt6xzrzFZm8qN2Stqny2CkZbicstaGKFnYHyD",
  "key18": "26UsCiLNUf8MwMeJFD4axVpVWpGiPpBM8GUUibAtVbFTG7p8KDBtmxaiWux827D2AR8aCxh7VSN8aeDhzunwHAi5",
  "key19": "3d8QiPvg1yTd5kEgpeNwR5kiciV57KSpMRc6xt42fk4FRHeLoMbVVJ8xRBsYn6kqhfeAqsCWfDczESLmdG9DUQSr",
  "key20": "4mg19TQoUvPzosUPE2Ame4zFszVizM5NXAC3ZNsNmqjudJfDLuF4HL1BxXrhmdMWwC3yLsiAnRxnkFt44ZY8GkRu",
  "key21": "2VKeaNqwHwGXh3z2G9rkHF8JwDJD73rBGnPJxUm3sJsuFnLPF4amtygjVpiw966rFuKpdPnnHp7dHwpNCtuDyAKr",
  "key22": "2eSN9g69yLdd3YE8CC4n8mpC5nb1rsHxiGy2vDJfz7SZK3Wnm4Zbk8AQWo6FHwC6vLmnHdigGHi9zaLej58Rr4oZ",
  "key23": "3EBxNTVLufvpGyM14kvhhJp2WY3ZS7TmCGXchKqq5WAyBQ9TG2vNhz5ceg52LcbMjVemCbzS35vkog6v2kf4BJ3Y",
  "key24": "2dvfz4DZRfBXbn5xdJ3SQdQU5trxFCPm5yU2rRss59v4L2MhRG7UhE8LzkddLUyndpPx5nHUnfmYPp5r2GHSgsGa",
  "key25": "2156vh8VmHUrko7URKsKvXeXEjoiMW6hezrfeXp9sRRUv9fMZMkxRYB2c1CrbAtPoWaLY4tssvwUGAvw6mxTMQmo",
  "key26": "32udrqvV6yBmsijW2v21BWZyN4hbXpmj5VUkw8nzhFYwfRyvyxzUXsHuvZFpiZDYEjSgthafswds5Z4nq3MxJag9",
  "key27": "5asbkKWsf4qW3CHUqYmADjCW6QeaYdCUHMwivWvC4FG5QtkKvnKmHvj6SVLysM5LeX1fVMddeyLVn4dRB3u8SLf3",
  "key28": "3RP6D4nPE1ef2BD8kobjr1GWLHHom6fwXB6adTDSZcXPjSuzwtdMACrUZHur4c3wBVwk7qN3422LQtPicVwnY3HT",
  "key29": "4MQQrNDPioiKF4PtU2CofAAEar7yaQutBAHTaMJPBktgNAP1pAahKDyGJYA3NhLUNi7gEZgNwNP87tMHTNpRbVzJ",
  "key30": "54qt5Yn4WUubHMaseHdSLD2oWvoNse91pesGK64poWU5UkdW4RAzUWcFJuiRjkCRx3Xr6ATAwkzYHrYbUisHUNoy",
  "key31": "UYwxt9kPqVzYq54DCUb3nXXMXoVoe2L7A9T5ohyAkY1iBwvtqFWSjY77c8ER5PMRAfWTSW7piDg2yTnwboD4Dbt",
  "key32": "5uEzmCxKyQvAjnV9FWRHXWgZFo7YM3w2bAE7xFYkgBDPLaHC3DbLLNcA5HMWfmYMyvkJeMKBf1yXxvbJmBGkL7tL",
  "key33": "65W2H7ApxAv49HvCtFDJfHbok2GTf7uotQTKSvQSxmD8JZssGQSohv72AJ6Chvh2Cg1xWC4kgyJmefofhCHYCy61",
  "key34": "9TKmeKfseMEkmdTnpBtLsxssmhyVXbEaBRtD3rdPvrH43zvYs3L3Jza81bg7ixvQymKuDSgpQfoX46EvXbNDxe2",
  "key35": "4FgawSA3R8VgGVtUUkYkyYLmrZvtQiJzDQCNVwwqCNwkWFfXUWPBFxpdTZTgjqCQ11JyhGhG6Fb3cdpLDRuuMk3Q",
  "key36": "38Wb8p9yidv3AkgNREt5dzrjEhSzoKpZzJmUpd4bMpX6yBacA51fAkaUHokg9EN2R61vVFwt9TgKNvV38vSyVH8c",
  "key37": "eUvsTjbJd7uuNHd8Gx39JQRtuzy5EmqKt7aXnhyH9zbVYUMjgvaB1LdvZCGR2kTipzksAtPic1q7AFdhegiRruF",
  "key38": "2U4ZmZWro3orMX7g5wBSioZSZs9Nz5s3VtnLzqMjiQRYT491QjSCHyKj2jxkwxYxDu7dHSz1NV382xXnFnZ65RMu",
  "key39": "2QWmS8farQCKfPVh4UsQYiMoupdpSjmLkxreKFLbvGcW6JjKeuF46xSpogZBxms5eunLPBr9cqSCi4Mq2nV1N5wJ",
  "key40": "3mMd33JkF8CzVLmFMDsh88uaHnU5gWg3QsHFJuA4tgoviMdDG1rFSuPC9WhSygyvaq7YbTs3YssA4sh5Z2JR3TeZ",
  "key41": "i3HoXQKhX9KifaZiNmhVboJnzyAqreSZ4ngKzLBUXwoWJuLNawrWYJM7kXJuzMUV72BSTmH2t5AAZAdcc2enFkX"
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
