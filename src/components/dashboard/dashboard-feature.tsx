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
    "3dSUjeGQ3rVnzm5x447jsE2FpX9fwRtBBcBPS44Mntdk5RwMnoJ6tcpVpH9pEvvr56E35NH1AT4TfBmapQVKY2GZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JMxBtb7G6jPYUockeFjPhjpA7xkg7LgjEhj5X8rgFy1zGCbmdouKjYj5ZgjgpW1r2J7o2vvWHQrH9cBSkBKS3uh",
  "key1": "cp7tvEzhjYxYUBx74DnTGyTqt6bBhq73dt18kZTArBf4gANfUHoSxUABgDy9K2YnZDKPXL5L15Qgb2J3M2j5fzi",
  "key2": "3BPvg8Z4RnTYCC6YzMzAwBKQJjDFJn5Ec8vA24VFPf5VbFJ3s4DV5erdWMHWC8JuBPtVbiiqhx38XAMzGPzbmyzv",
  "key3": "566g92NLoNGr9doEm73K4dGRfxZckMYtQga8JHaeCPLPjkbphYePfAPfbiuTiJG7HxDQZ6R1xYAx382mvy4NQVbK",
  "key4": "5sLHENfYvXsitwfPiuCuemh32VN2eFbtw1aJC1YkP6RqnP6RsoMMbztqo7PbFHA7RApdmve5ox1Vr4fU9Adp4cCw",
  "key5": "5nMsG8rhvpivurvga88Sz8VL9awz4NUM8FXFTnVYpZksZq12tYuEne3BgC1x1e9YeDrgfa5ZkTRitEbYk72p7Lng",
  "key6": "5reF1CK9dbLwxZW7pPLzgzW41jriiyoEggit46fa47TPSukXcJhPVE2g6PaEh15QpgY4RDR1NHHVH1ika1ymBmzE",
  "key7": "4XEainPoaS6Cj7cXus5mRGtAKyg81khZmi12ofhreYj1dnX8pfnAbuemENvzEQBtJ52Yj4jtxkBrp2kHZMQMkgEv",
  "key8": "4WxtMH5NwLYVnWudzBwoFs2qTdi9nroMheZYWUMBktqMPwbgauDUaH8jzNmiTrXg4jbARLLQaMubWGBV1WexfJzh",
  "key9": "4pFgrcGTc5tGQ3gj3Mp5WVJ13pBsvy7rSF7DLiFNymnaKpStYtAWeQG9LNgFjtGs4HSyhsVw2HAMzbeuUY65oRDg",
  "key10": "52vKX37w6vX1NP6WyUL5rnNEbnF5yKdn8B1S9WXHkECSFWbc9cLhDEd2LmduAJAo2Zmf4BsQQnNzVoWkVvAEFwBe",
  "key11": "5i3VnPAeNebob9ykiBkvvtZQX3Ei8m73vN7SdxVayRzsx2Vjmpifu3eVQFsv6mVSaZa6jbm1XB5XbA1i6B5KDkWb",
  "key12": "3Nm8fVejkASzFwJ1uWmWnYeV991UhXZS4FLygNy5avwjmAHugecfYVBk2YPk44gCCHv7dTgkEUP3wvQgvRwQxJZK",
  "key13": "4LMDTXRcqu6vKG8da3xSWxfS37GCv4NhMbNimmwLHSYYayezDYLJb2BvCcybGbeWAnRL7xvxsgf8nKddj7KzuVXX",
  "key14": "2WFEiPMNs9YzqV44oH4QznYiPJtXFC78HnoAfwm6Kw8SGQkr2vt37XHP6ssavWwJgwxChvwXeqrPLntdp49MgXF7",
  "key15": "4YTrnGKgPrUSu61GHp9LKpHV3wYNUY4xZ5w3WpW4WNPtwWCiLCukxCbyPGhweikyE3yFRo1neRhnqwbNwuBdStf9",
  "key16": "27WaKp9bDxbofqz1BKjZRZdX6PPwdd2mnJuUEzWFoQuTrHHiGtx4wof9rPMaZTVZgUuPwX5JVWXJZ6QEnDyvA8UH",
  "key17": "2CcxEGtiHfiYuAEfmmXSuU26dzrRbXEfLn2xmHT6FipvRkSp3ZNCUizkAL3K25QHsLYLGvAx7xSGCyutq9C4PuEV",
  "key18": "piHHX4AZC5PwRT4RaczNLmutsZX7uAvitQfVq7WgFHAYCb9WMwsgosUqUdDkeTzdz1cYmmFfLU1grZw2DJUss56",
  "key19": "48KjCRmE8pkkndk8rYXANdL4rDHKpyJW4SKrbuUUNaUn8L2iTzXBm7a8C9FYM53VRLhNFT1EWhhoQ8wx5JMkXC8Y",
  "key20": "3AaCvBFWmNW99kkv9L4vb6MrsV2o2vf9QbNtx6WaM5xvYZR6No1JTZWzFshRdMGfbMJrTzEbLmY2u7ktySuk5iz1",
  "key21": "2rHK6gb1ypFq5TrBgFBhijRP2CxtBaBiNZgmAHA1gDV7sQ8fzi6YUtZBp4hQNvEL4J6zTKNPZyX1DwUQ1qiBG8zj",
  "key22": "3CEVDf4NEy8uY4Fp2i24zYQ4RtiexvtTvfePfB9G5HvBR5wHJXHvm6typoc7qaz8Ex2PyrMdNxdpVHpaevQhgQ9b",
  "key23": "5Fj8fU9FjGWze6tyEtD2NcvsoUaPupvHFhdm9MhAUY6ccQG5SWxDcPzGaoF9Ven5TWf7mYJuoTgZDZ264WCu4eLu",
  "key24": "y8aV7UfhAss2QhvWn8GnSVDRNraKZvh7s9YfZkUXBK9titDtjhKoY4SNTVYfpcCqyQyKrK2i1qDtSqK8x1VBVu1",
  "key25": "5z5mz45N7F6B9WNYJDAWTw5mHJp7Lf4vM348bCAtNfsXm8DdXiRBoxvP9ugRf794pmzh7M7ZKNVWEZYtkdmtFdHc",
  "key26": "5kJAKAMzo1srCFHdkkHvJMgf4SfJwx7PbFRGri1CAkq17XtgkihcEADLkhDqQHvPQrhmNAgWY7EsTnB33wTcrbmL",
  "key27": "3WnrnPsTnmcvQNtNzSSCEgaTknEuuuFCSurdNmCtjfK1h3ExYU7iWnvmDnSTVi8BZdTk8Jaj9kBqFtHY8Buaubut",
  "key28": "4NcSBE8pVVPay5M6FPA4uJbNUjKAwxQYtapHNFo9CtattqyLeY9Pg9yzwG81B8rAHK5gVuNLGhD1V4k5tduq9Vuq",
  "key29": "62VsnewvjdiWUEhewQQu6WzynBTUNgbsta23UxDLz7JwWCujzeDWn7n7Sntgy1Nif7MQhxVdCMf9mGx3YWmKi9N9",
  "key30": "2UWgZYXnxrqDtzzNaZQd9exkaUMgFMxK979Bp84ehsCufdXTZs6exGidAFZ9q2uVYcS3QSFEnR5WgrUThvFcHHtm",
  "key31": "kvXE5fPyjKZU7wSzRfPfqhWTmMRvKqL3XwxbL8kMq1P8E9z5MvkZx7jxGiopezQhYpP8roM6QihwRCGP4sApLpr",
  "key32": "5zqLNp5rK7HBUyRFiw9YJzwBz4ZbsaXcJ862X7qYYDNtN7EV3Z6Qd36w3oQLekTTKznDzSVAZbkKzioRFyLY29S8",
  "key33": "3Je1BtLbMztLie5rD5RGC4vRWhR4JUL8UhkdvxZ9tNXQSFbD3PaA7eZvcvG9PAxKyc3Z4PrVyaPLytsFrwczVVAE",
  "key34": "J9b2DG6NirCcXwpMcuPjwNMcrVamXpXeNwDcVQxDxa6AmRXToaxuATDP2ZurUGzD4YENHFRtrHgQuJ33DEcA9g2",
  "key35": "4Kx3ebpR7vpLLwFmnuYc5eTLLESsbrm162Gpd82TsLHbBDBf89SdXNKy8UNjHKWqmV6NJ2Z5gmMdPYe82P4kfiWv",
  "key36": "1h4KpBT7FRRLEHn7ko3RUU4XrT5casA6mwa4FsCqEEzoof3X6H5pLz1ZvxxdwX2uZzQJ88cGf3eCaWkQLA58hZj",
  "key37": "2M8Gmo6XjF8jNVVLwTvtorYhbkQQKbkRUb5FktSL9zYoLA1C1z3C43QaZLCRTh81sKmVuaEoomTGP6xjH1FmLfgn",
  "key38": "52HzLp9HbhkTTaZT9pr2XygGErBNhR8d9B5jD8c8dYu9FpLZxbUbAVuLDy6q81xEARwTYwSNtGRfxZ5VLshjzuu8",
  "key39": "2bYkN539neDmodEfShytx1YaisWrf3cPLA1PJtAmBTxcwZWhNRscdRYqJrKCCH7iLXgJbm7nYY1RRAF925M91JaC",
  "key40": "3Wfd7fexBPUTs9o3toatbXWVkEjmMR2PnNNwNzkmZX1uy5ZpMxB5oMyDqMhhFJZQ7D5Fu41QC4ABcx7KYTEcdbNE",
  "key41": "4dfZoFzaVebNp3mECAT1ea6b4dKQ6ZU6xRM5LeQQJTjpRDtLZDbT8cXDpJwaBfBZyfAx7QJrV29wpKfLBxRK6a2Q",
  "key42": "Jxh62Yk18q2tJiUCq5WS6TAiZYqKs8UkbCJNDjPhRFsEK1RYBHoQRu68YeTKAaC25aUnWSpAJQLvVKHw6MsLnDs",
  "key43": "5jGcdr3etXjMTA4BoSjpvSVjuE9avpiD1UVskvn59EyXSLdiU7ayRgXBF1k6HiSDfBZu8Gw72HgkHmCcLkE1it7e",
  "key44": "5hfhJjt7Q18dRpaZ23UogU3p23jNm4sM63XRS1iDi1gbFyvRx2kVaz6mKKYW4Hss4mq38ocEnNd9QoHQ9axNjoAi",
  "key45": "2mxgyWEhhEUPELwJ9U2VKtp535r6fTtfKvjnkAPFG7bYj5kYFKv34UtZqzjiqv7xCXcU19gSM2SnW14BtwdZwKev",
  "key46": "31R14LRySJyQY83nrzBbQSvHyFeFxsXQV5UDrrdXRPnxyyYDoQGufhtDt9eMJeYF7nBwhMQDW5apx7TMf6AsodEx",
  "key47": "jYVsiMya7KxPbNFX2mmqxiFg3oB4mUkyyjdjHyBtvdAA8vhhiwZ2EazxUfBmjbWVGuEnB63BMf2bxm3xrDhS9tC",
  "key48": "5kb1nEW5Xqi3P2y7BnYn8kktb5BFF8diBtSKZg5a8rLCRt82Gz2QYi45DXFwTsNFoEfBxYsWwB2L8iEizd51Arn4"
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
