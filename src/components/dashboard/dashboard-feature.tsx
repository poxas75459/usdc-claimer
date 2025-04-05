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
    "3qWQsdtH4cofWiof6Fz1ri1hRakFrzXJWZ3HDAK7EmHEn7jGDUQwN9ZyegUpHqHo4Sy3sEaeb34PiXu4aRPb24sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBguM226u6u7JfdPXvgxXxhfGcAxpDfbvPXPoTBa2L9EgZmhKQjqeYm7aw93UnCzwYttuz7JzCyxhNxBZH7EW67",
  "key1": "22xRikfYj3aE2RkqRqCaBsH64s4SAXTFpetA4F5KKsopNm7tfJ4H4NeEBPdpj1kVPSTPCYcbVBEbtQ6BGcnctkty",
  "key2": "iAUirRZvFPMQ4VhfYwstCS74xnvgpy3bjT4djKdpyv5GgiJSjvtWZrr2SHbNaX5rZhRFx8zbSHMhjEDxUYKkrwU",
  "key3": "49kB2WRNw42chvzGar3Hy61oCkQfWHv5g6y24SZ9gk1Lgay6RF1k4FjcA6HxPnh8ELqn7Fin9V6HbPzh7Qc3oepZ",
  "key4": "388mDZbht7xW1MS1Ux39j9f7NeTdSDSp5WeW1c1iHYHcQEGMzV6cg14oYugScHo2VCA1zCEzmmCEX4T2sQukk5ED",
  "key5": "2o7z3zxhfjvW2pwA7nVfem7mUmHYLscEdwyketeUH5KveuFmPES6QzotwYgE8kzSmo5DMjbpEoNYtZnReVsDhuGL",
  "key6": "5UeFecT1X5riCzJcuFhsKRdXeu7uYDV4mNk1FMkb9vrSMin8Vv98yXzMJeEsUpQr5kYKkZ9BcvWEYD9jyPMmaovf",
  "key7": "5EfqBtBjhH13zQcS3EEUzUpV4ZMvZE8Tq2pY8yXbCZouW3pzxjpkbKvfevbYgRig3D3vfRWeNxoruU9kNYwbLd9u",
  "key8": "maq8zJvnwyB6bbJHiP5fLy84EABqZ9ziDqSCE8UFDTxPD4UDPC2d8BurPwuha7BwVVBdSFNkEC2W7oQQN7A2ME7",
  "key9": "3LnH1oMGTQzJdWW3PUwbYNpq6Z5CvZxweubbzAMNRQj5eRyRZNiJuxFVPyXXM19P8L86dgLaTeEwWRW14TV2zcBR",
  "key10": "4gwi7BGCP3PPqhqa1HGfzhmHpBsxCvK35F73daMvBREypmVf45jAn9Kujwv34w3pAcduwjn7RGGQEMrGm5HkD8ZP",
  "key11": "4BeTXRAsavx6QxJFZBN6kLtW3aANBnE266rWRk5XvVNZqxjxTqiBfgrqHrhRwXfXpe1kKCYp48dWizdNq2LGehZj",
  "key12": "4MwzscSMkeeF9eQyjpnKmShgJw9pV2kfY7d2d5RjAjvsxuU3M8MVBBM4XvCZVdJLvTj2pwAFUrKzk6iLFygS7MCe",
  "key13": "JeLhhFTiwYAcKMRfUCURtMGAn271wtEy3rsjXBexrhGyvj1iFRSYap5NBhWphiCRuWiMRq6Ww4RPBsXhWas6QwM",
  "key14": "34ZpQ4uZMfJRzjNFmfu7WaokryRdKZncPiyfeCc8264LSi8usEgYmidQXvv7w9wBvofdetrf5HrvHstuDDogvWxX",
  "key15": "3JWddL7QhyV4CtVWyzieD7H4vAzbzGnDLyerQYXX5PwVrQd6Nash8sEY4HpCag68PW544Q5DbHvLKwEaQ7MkM1bY",
  "key16": "4stTi2ikCdx3S6PNFJNCKUx8Yv4XXeLMEnF83pDf1zdzGCN4Yv7an7sjbjWZAgeZXDtBquXD3CjEEyjh5uvyMojt",
  "key17": "2FF2fQM2Yq89KyGNrMuvaKbSK849fLUiuRkn6KWBz3hBiTQ98DN7bEtKn5GhTD7koJfsWsL1GFLyDvaFzzGP9djZ",
  "key18": "2yTf5ooxbpZkhZq1JFqZMdTHv6MemYDYztuAzYB9LUtwCjyd7Bds8TgTh7MSp7vSFctAN92LV5x9ZD6BEyr9ijhz",
  "key19": "27pjL9zynycCVHZhDarhAoEPBMggKWR1ArDBZ7a5ewu9ntrqzJTKhRhRzdDMRjLjjKeKtYRnJun1SBh2MNVtYf7y",
  "key20": "3TUjdnVrqrMV26QaHzJTmQUjKpg7pYPMfcnaPSZnSsgvkKCaFF4GcJpZDNb8bZyyAppEy8v2Y1XHuCoLKsa383Vi",
  "key21": "2SiM8cub8JAdqKHy8z8oe9K6zYScGnXPnToTmkvafgAN9GSQjnx7ckZWmUpZDjqbbDzj4feksknYgi4oSL5AoZAR",
  "key22": "5WH9G6jLXj4vY8zNmujUPNoUx5FQnGyez6NQmu963g5aLgJUt9etczq25hrSKLNav1qYwkNKLvNeh2VaVVbRsgry",
  "key23": "4YxLDLAhZGeGks4z8ry7g6EGxbiBEYFBDZScNiVTVQnDC6h6j9WaPyPiJhUpCU5zhAkuNR2ke7J4deKGiKaXE9KP",
  "key24": "3TtpBdTmjazcyn5zGSusQMzRHzyjkKrCnsATjJNgFTQm189ALZFTMzjRuTQdeQsoZj3QYfGeZzcdybtWecYwNBBK",
  "key25": "2fQEYJSxMsTH8xdr6djuHSdBbDx1eudN2Z8NhafF9sWLwGV8xGfWXd5vdJFHfRMN9gKdQ5BfJci3xTPmbFKiCNuW",
  "key26": "59vyoa4JfsPxraQc1h1gEyxCnj6jNnpRnL3aGgdkBVHAC1oNvnafGj5EH1cknBkSjakhNBWFkzjpCG1CHa6feC9C",
  "key27": "2FRXuD24LuTebUXecUTHcU5ht5wFnx8PQM3w9Tc6vxoTUvfdhXGEx8u9BxmEK3gziKoGBGjQbdXQK9YYg4mGsK9m",
  "key28": "pBem577J7L9o5N8VVTcJsumwLztwT7YTxfwHdvbAppJdVZCw4Cis2GFqsW956tPau5dcBS4tK9hZR4dgeSPxod9",
  "key29": "2248ZRTnQRCnnqbQP3TdrXw8Du9wLFvadAkUstKXjxqP6MPTUzaEJUF1k4fBRiqCtqZ6NksnrrKtumP97rFbT94B",
  "key30": "35CfY94aKzT4xWRQ2tjMWb5fnFDpeE7DboKh4b89Zw2e1eFfKsaF3Gq9SfsESog3ab9SFXhxe5hTVRq2UUmmnZwK",
  "key31": "zeabeZVpfo7vPzRRtm2k2vkyGXJTmjXe4WP3RM7sjHe5gTVtU85D8ZudW5e4dMvbk3n8UjcArgwPctFCbFDboe2",
  "key32": "2AN2mpWAVxWbN8ns8GZn8uo6Wm42PXzpSQ1uZK8hS113qPwwrLVBEcgYasu7wC7YvFYtPuQZ6274KtVJtkiBVtvQ",
  "key33": "cQL8bubCXjqqGWpuQG5M1EsmZQWPHNtd4JoPUoPv1JETD7ixcgYvxQyF5yNBRUKPFa1LDq8Mg5uNr5KcsCXYXvP",
  "key34": "5MYEiuy4Xc82CpgGCgsoZ7Vby4eVvhE6yJL9rE4zQmiw6W4ZvofirZbAdcKhtBnuzCESfDsLy73fJEm3oPHhZRZo",
  "key35": "dRwHyYjcojof9rPDeoUU6AudJGbxEgiaKoNjidHyUEG4ZFGQdxfXraDBLJ8pCHeygoC9zTdk81kyeCAfz9qCWT6",
  "key36": "2j6etgNxa7a5jQ3oP7xmWKPETgVCZRLX9ftdq1mXQfEqvJiWgvhSDHDWQirvmLSaWsXMiY3PjGrouaAzCFriEfur",
  "key37": "4UdayfjCbkz4tmbxGJd8bvLAbbaC7iV9KWmXoZBwUhLhZqfj17qhri5yc4XacFj75cLxnZUwdug9FQ1YUSt6x2Bw",
  "key38": "123q3CRD29Frxz1EtSNnfGJZhvc1BqpCSyn3ALqfnEaXwikbCxX6ZbKQBdeEQoYiuSx4jPBmrpWaZtQrvDF4ZAVP",
  "key39": "2zuqbfWAekTXezsgsvkhRbnbxmyvgFtAcws61wGFTuFBGcv5fniobhk9q9JiFrM585G9SYdDbcAVi4Mr597Kvdzb",
  "key40": "EijTrpTEkPx8DTH7kwpAMat72mf22kq3ZHxRqUEtizfq6RNNVR2C6KAFCJGuSCNkh7cXcox8FxfwX3rpCeXs4R6",
  "key41": "9oydovv5d9aPCbT5Xp1ih63LFGzVy9mwd1d2Yy8KPDzF6jNFi49S7XtMozV7pZwiiVQ1zDCD9o2fNpFEQjNGoGe",
  "key42": "5xApmkKFLDtF5RmvFQvK2ZZefcM3c2LUQZvTFvmwN6xCLJSJKMa6sQz9UBYuztGMueR3vmUsgU84JRVqdqZdnvX8",
  "key43": "3ZPWxZa2nxs6AFVvDRE6Xmun7ZzudRpdUuX5pCneXaUJr28Fu3ZYJMCJKuo1ZmgyaS8nLZKnCej8PeyWBpxfwir3",
  "key44": "YWRfMqGki5Dy8TvQZnSf5MvEw7GprxysJ3WBNz3EXcW6zmz3URbcgxnYqbgFTH3ApT4xWyekqurQ5XEvHgie9n9",
  "key45": "2ogfJBFhHoW3hy3aT2iUti8cPmduahnZVQ4G7gz7995gnfntsJkfm5AZFiDKWqDbcRzvb7HbMp9tLQJGaVAV4pRM"
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
