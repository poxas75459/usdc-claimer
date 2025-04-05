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
    "HXYhZzts19E3rmTRYnCzXcUxtxURutPQ9Za1sF5m88CqJGryPqEmjh42iaVBw7bgrjsLZ583SpNWfUHHRLdvGpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46K7tViMtSgK5jm9tXMN4AcCBT2RNK2Eka2WZfnMVW65TJoiXcxSom5couhwzLof6K5qeaQAKGi1DJ9z1wVm53S7",
  "key1": "k926WgzexEeKqfXwJthUsHowyYkR3Gf5tHo2gMzixnRUKmA5B2TimoQhRHCu6Ps52qmEJW4WhrVuWj4Vn331QeY",
  "key2": "4gEdNaoxKy6GjhX4wSr11SttWU4AKiQzGSk65BYqoyRG8pfFcLJSokM2egKapgvY4ZfWQYqf88Q5E1nSrbG1T4mM",
  "key3": "wQJYi9anZ8PvShSkMhMMjEQ9NkPzCEP8VWwZeqJQ18GWzrdedKxknYMYavYUSgZCKLgWET1b98MdxArVJdh8KaG",
  "key4": "54hgYfro6BfzSWLco4wSoKoAXUd9Z2ec8ci96M16GAhxfi8yS9fWvV1gx7YDkHWQEKpGCPGcKdcNxVHL4V4tPn5n",
  "key5": "4aTGrS1kNyk8ZfnFs43Sfrmgzr8Rb2sCH2yPgRvjz1uRENFX5DjiA3XYEnFCMFP6yk6pj6is7BtqmvoFaphzgqWi",
  "key6": "aK25eC8eqUJcy2yhomBtr9CHANXbL7oRG7o6DyZWC8TvaHJvcVCvuvkpa29FzzTYr2FsjGwbnK5s7pKAWiaHHMj",
  "key7": "2Rmt82XUJdaC9ggYDreuCfp4cctHjcUw7X7qahuuTEk1wwm8mPkapW2aVUkKov7cWQEbVhZ74zERNiCDRkrJGCVJ",
  "key8": "5dDWcLU5g9EFuKkQf5UbbYaLhFrNTJswEznH8VLgjjLh6aYep44p4HwMybKjudRoQvBis2h8KR4KeQ3FvUigoauq",
  "key9": "2CtWwMtzEPQg6sL8HD87u999evLK2XP2Tg3ZqQzT1wi1LkGLP5hVUbAnPky4FYZiXZ8T7rfozhS954bGn8XFDFxe",
  "key10": "5semi8J3mimuAofqp9nx8dEmumAcWY9h9buWYj7KXSNuLYDSoUYtdNTSdp1joJiV88jgMJtiL6A6TxvaUf2tkpck",
  "key11": "4ZwW7BREBqt3szhhwhBcN3B2S5QZe14XRT6rj764KPeRjq4P2WhXoRMrU5XQrWQExk4gnge3uR4ZnLy9VNpmh2sD",
  "key12": "4gW1kDPX7U7KvrkgZ7159wzrFLtPQNWR3wt86yFTQyXkuFoXt8BnVvP47zx55L3XyoLHrxXbPTfkLoyci8YhHUWP",
  "key13": "4H1cgB8aVqctbJBwuC1r8owD6k5ofmEx4WCrk8zyRFvdbv5vDuLgQcDd3fx4Udc7tg1FuEKYBpXKcVkmXr2jiQF5",
  "key14": "DbgYzKY8Ggqj8ZpNg3vKbKq687qcKwuH1zZwYQrshe5uTZbtuzRz4TQJcL8B8Ds6MVnKznGS1rYy2Vq5tVwFkbm",
  "key15": "49LXj57Z8XSoYrQWXqL177o8PKC5HoMJAwLdLfnE53RThAjmdJv84X9kd2zpTu6vVRRAs9XsehjxBBEgKu72kyGP",
  "key16": "59F6Z6SZYeutZjUgPQEm5jGBYHbhXDLVjqRyMUZdu3LLTt6gpxPig5h3pxGztrzFNVkvqdzQrHDUCtqVQn9h91es",
  "key17": "4Eo4euAda9fs8sKwR3Z1t84RPB9P644xwFW7Uzr2nLiaQ8VrMY9429kMj84dJpww7W76nYgPw7VP2HP2KuPZ8wgX",
  "key18": "zQzPhWfXLsYQsRMtTwgJVwhnnEh7erB7MEryDDBHM45gGRf8iAx5ZfY2DpFsxT1bSqYjJqhRWrvpjj8G4ZsYDmG",
  "key19": "4yUeNN8B8hPxLmL45cA2DYAxJU1D7nKoGEXQjFPz26kamJ15ACykx8823ZSAZZGbneyrZ2eQREShZVvPz2CD55L6",
  "key20": "3GV48ksCyjUjq9XrBXrVSD2acAmkpAkaGrZ7VPkRhGa8Smopgc33mur39fEDM4tweRdnBT9Dyd8uCdBFjz1VspUf",
  "key21": "uc8FAkc6dd8TDoaab7SzWWuQTr83mhRKY5bw9LVegcen6n1noGwB9qvXoE3Yubk2AruR65q37YM97hqEpTgQiu8",
  "key22": "5mmdLTJSz3VLe7FMepH41cdKwfRuAEmdsNXg71fgx76fJ4e899xNQxwDjz54bY2ieNENg4tQA9vmSvfYrxKtgiae",
  "key23": "2UNyfuXGy3cPDiRNjJwjVGxctd8d7KU1oHkXgjAomqEKB2xHHYQ2yPuktVPQSKhHqes9ohQtQtF3EsLjh7g6scka",
  "key24": "3bSQH9gtf1WEQctxidtooir1R4NyM7oLi3vEfhHXU5UhPUX77JfdvP7ftSx5MV72QPLCeHmoTMjcighTWE3HyZfE",
  "key25": "5gF3Ub4wFSL5YYVqLyvdpPU4GRSZdDLXPsz2FYJ8vFZLx2YGWa3ZGJqPMpE117YzCrVdKDw8CNjeefd7pG7VXQa",
  "key26": "grpAYtuTMYcaqqrd4pqyxTQN8F4AUbPJrFhsDMpoBNjkG9Vmmy38oT74sjcSNxekU4NNGCXRcEAbFXNKko22Fd2",
  "key27": "2Pqd5YaBmmuGtSDJ7FRz729noJVaitqqkRRLjMDBsEcLP4ZiHTSHMTbD2cTeiwGZ86wQ9mjXdPiupHw6YvhLAA9o",
  "key28": "2axbzPLPA2MxWe8XfVqCs8opiUk1EUPx7cgsnxjNgG4ajx7UuTzFg3vJGN97yAd9iZviVv6ijo2H2MZ2tRc3ed8z",
  "key29": "5jXcBefAq65vLwo8dCP4uQ6b5xVAnh31RPaHnqhyfNBNT7xjLyXcp1DpuanbSV5UagLFA8HyoUzSbg8tcNo519H4",
  "key30": "5dkSef4JsSSCFaWRUWYpfeTMJF5FVsSBqGhXQoadHrss5Jti7Zb329vab88iC9KXwiS36muTPgFbtsF3JJBXjqk5",
  "key31": "5PrEaWWDCUGMsZ5eCZpxp1hTbxBhgfXqQsTmHeGeEXE8UBKAZGEvj3Eq1cGK5xWGt3iMiUWGfswTJiswVEfPT8C6",
  "key32": "7YyFTmdCTDdUc1HQ4d1uuNB5pL2ntusszG3t6Tk8oJZXb2qdn761nuVqNj8Cgd3E2A5CDkZS43rs9w4zVGyLayQ",
  "key33": "5R2K7wac1YpRXsWh3hq5z8dFFDCaEKh95iox655rgAnrnkug4bzApKuTw2AipnRzmw1uvYPTDtaBRXMsVUarXsJ7",
  "key34": "3zsoEhHEqwtVzi5Ye1qyoyyhNNBW1E6L4phUgG7EtLvK5YtDU67ERuyasvZGBQzCupeTMybLqektUBBefujT49o2",
  "key35": "QWVsjzdf8f9P3kNSgzuWwcxviTXN2k9kwXL9veKFVRiFB1HWM5GPeAEyYYCDJdc9nurjwoJSLwF47uMDHf6wx4e",
  "key36": "4g9ucJkTSgJ5L646bQLPNygp5YCNFPf4fpUP9mkTqne2zCzZn8VLtBQqNZtaG7DyxUMSEi4ugxggLtFZMQ4D2wMQ",
  "key37": "5AdugePz8uYpLmAPAAf1YjZA2wYLgAzpQYXj3DbmcV4FajZncn7GokaaxpW3kVsi1nQPMsyBPef9ggeJS4pv7j6R",
  "key38": "4PsKoA8JDsJzSPQ8BYXgcaK1H4YJbxiQgueqSnVc9GmfjMLmoAAUrFXNZ9Mr9v574yBRDHS9pVZEJsUcxAszmfzH",
  "key39": "4xCmsVU1WhWGFBwwUNGb5ZmydoxQAWWoYKTy8Qe4NLsE5r2cgnb69e8Bqbktux5BBWoMQxQNmeJi9WLQSsBghYW5",
  "key40": "2qhyPsi51cjJbH6HXZdx1bUzbGLf5GWJwoxFxFeibHewDQ6k796PyLZMCSon9ByPAT6BrHAMwc1xHzDrkT7rmiie",
  "key41": "5Eai66hGvAL7v4XBuZVDZq1oFLJYXNqDgnFMHpzJUWxgGc3N4V5kTPyM9eJ1rawKz44X8ThRd6cKqgqg9godu9dm",
  "key42": "5dUw2ZF5szAsV6V6ck2VYUrcqoFM8sDm9Wj7rNX4rA1qovpxhb6qTryQ6WAqHrReW2CH4Lm83bBmkP1c7WzVCtUV",
  "key43": "4VXVDJbNKuYNbziKSPGHxwLhcGGE3yg8oBsL5n65yPbW2pr8NDTe7MXV3q75s7jAmMacLoywDAw1hNdHxNKC83mg",
  "key44": "4kMBpQyVc65VLi8FQvbbwNExhs5rqV5AKrSVF3SLwJKwxJkcWd3kSxv5Lymkf7D9RM3m4nxUS7stxQCR2etmumZm",
  "key45": "5URAT1H7NfKxUCERpm3FgVJVaUEGDK3UT2hbfQQrFJe6UVPdAviL5zwXiYSsmmhbFdwYa71qezMA9qGHu4rjnRf",
  "key46": "5kZzCMiivqCeXm6wziXZsQQuwQRe8vLRHu6GDxzNpTY4Gi53MdcGq5yYYKomq3dRsDuQzEffSKGHUPGA8EzfTAxd",
  "key47": "2Ub3MaZShaFb9k3JmCHCsbXRxkxcRz2BDbHPTys1ZeqTNgkiDoKPKQe9on8cNtq8HLoa7mXupC3PvKJjeUcNxi9Y"
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
