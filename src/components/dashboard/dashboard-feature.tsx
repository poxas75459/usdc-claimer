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
    "44UtUiJrwJYrJ51kH1W5NaFMEekNtNqu4tz4SeUmZJ2oJ1NSCSNZFDcyjHzhKr7DMVUJ8VEBujJzFDtAvj1Fh9AG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFcEonRHJzGC2DMjiy8DxMo3FKt7Lb6Lpsvx6EkNqv9azBLH7qPGeUDhBjNnndNByCVaurm7WLECautcZiYtyQ2",
  "key1": "5LmaojV3ddcbp3Ap8oErnhAZSdBQSyhaYFAcmmNi1emtbuEX3aD7mcxDo8f1h6zUxB8XdCfpMUimrFimFGA3yc5n",
  "key2": "xBopWUrV8tb3ZUtJb1UjsGMjJFdHKQPAChCsqAfCruoPKupvoPNV6KuFiLvTRdVeYDL2ry57Ec8VbNfy9sAwcsU",
  "key3": "4D1Km9fpKffn5D2t7VpKnHFWuukGzxssXi2sVZgJwsqXRAs8gheU7wyK4xUS9ADZiFuWgBeWq1vgg7dstBL6ybfk",
  "key4": "4TSaPHgsYKqa33EP7fSxTsu4fLHFibsBwQzKfTYEMjX1BXsneKEBhYgwCJzVqQzdZwdvTZXRZeyEGFqunfMUMY6x",
  "key5": "3HJCp45dhV7PHgUm9SozQedkaDCzRVe4pCpkew3FZtfus7n1cArV9URoR2fxfaXGbGPAmrwKn8m6wZ5DorU55bLp",
  "key6": "ZHe4iECtJtCZAwccYE5o4scoC9q8tEq1mE362kFe2NdwU2eZeMFKzRxaEZQeRLrNXowCmAoNqJkMWeAbg1coyNi",
  "key7": "2eF7GzZeYfyTCezJJJnnqNLXV5zLAKPP2hNcByTk27rJU5WeQAQaUMT7ARF4BqmbmbRMpJdKfLPxVfWsYB4g3NkG",
  "key8": "fzdPSEwtYazxrm7kSFGXpkHjRyLoRuDSQeQdy1SZH2KQmmgmfDFWdPee2LYzRRX8QEsTkbrywUfKZ6cBh3noBPE",
  "key9": "3NW7ANqMQdtMwAbvTQLyUfcxdc42JEPbFskRiR27Qo3W2dFEK2UbhoSpGfwSrYs2ks2YJTYUbhPCBdnCxzBJeu72",
  "key10": "63r2UHwWdaMuCE2wexyhdTw65N8VLAh5aVuB2c3gCzCR3dLCS9n6anKtqQMfh1uB7gWvTiJu8YNncC8btf9UBy2i",
  "key11": "3Vb34QSJWkTzwXGHXJkbdW2pmPMtVLMYEDy4BFghHG6oTnUcxRM2T3FYT5N6Jxk5qZAYPmYduasepXkLG82AiEyh",
  "key12": "24bT6S2kUCWnB3CZHfLmtnJMWULrsGgJ8Yy9jgXVp6wWeHjTbLUAjavy4gj9J8Yh9DzDssAtwgjc5WgWC53GNwY4",
  "key13": "2qBPQpA1xB8XG933519JE4tDjgE76FdUrVz2vnELL7xgCX6fenpG3xnkS9nNo14H2WEKT53pG52yvwxD6TkUm6Eh",
  "key14": "2zjfYFT8oLSdh2VRnWF6SoqR32TyVXRths5AYLMLKeYktirUDY6ByBRhhwYGwgeiBTmAqFcbqnTgLc3pkEeZHTmM",
  "key15": "7BUjP79qNj7VeB2szfheDrfDCUFhuKSe15NRUmauvVf5KBS7uVdZb3z6KUzARJn83eQNydH6G74uh8rrCX3UR67",
  "key16": "5DQBQEcqQFo832XpBH5ZozTtcqSZDswXuQZay1c5XjiQVZD56KbAWE6rgodyFrHAWLpwiCntNpeXz2tY42RbmPPY",
  "key17": "29i9ZU45hSA7KKD7SU8uRhqwgP36Rapj2q1XjqbKBHSszJmhGogDfX9zWD2PHdyDViBpxoLiZNKP8sTJcVC35Luw",
  "key18": "3VVgPqf8FuB1ebsVVT32SYBByg96dhmxt5VUSt2kmvRCxoXandF9cyxf5HdiyD4eX9y7GNybwRuh61ghv3zkLyT3",
  "key19": "318wJEvZWgV3qSB89KdmEeG51yLHMpKk4rAzMfwssCrVd4rcevr2XiJTHd3uWzVvG7mpdndEvWLb72oPi4ZvL35z",
  "key20": "5zN3wSGgvoLXTZNV91vhmQ2BEA78NNw8FYTAgUSYP8tC39NevZFLWztQThDhXxTMJ55viT2U9JvvAfRzxr7yX3Us",
  "key21": "3SvjBUoS3Z1GfC3NtHSKZBop2ASQ4jETc3ZCDNUpZsyqRJR2JmPvYFKBXPgwLiYGkwYvUi22bY7A9TBLcHYkmeMP",
  "key22": "4mF6116vTjzEgXTKfEM3XxCzht9GqUDTesVHDwfEdsppA7qfn6Yd9FGy62u3k4AQXyQJr1Az697hyHsBJURwxYa9",
  "key23": "sBR6oyB9A3ZDR3Vdg7ij1WT47jmKhTuEgPfa7PBcMe4soQ6rU1ZxB6Rm1KG9w5xKSZsNmkNd9jqSfPcif3L99CN",
  "key24": "D97BkTW7WTKy4A7fJzcaFZUy2diSbhxZnp1cBfVrgSpswEpUuShvmie5qdSJMrtD49hyCseSobQtcdkH395j8BQ",
  "key25": "53DvmtRhHN7B94x5qFRWLQmiFTspUzR8ANv6Y5Vfpa7VKzrwfLaSaxHtX1mT6HwuRVwHaysH1ZAkpk9YgPGbFPSN",
  "key26": "2z6TBeDBca7Zpps4vPgzRX1dfRSS6KTVqkVyeKEqa6KFWL2CG5WawU8vHi8y2fYT8WAVqsxvAxafqhKpxb23DEXV",
  "key27": "3DXSQTkSVCM6JxYvJPeTFaGZVNfdmqaEEKdrMnA8VGuKp7Y7fGNnTU1YBFehXk4JeJZM2X63r7bMbNWrchWtiDb4",
  "key28": "3zvNMkPpHZZhGZZ56rkNrh4YRxzgkhMRUjattrWtuh78QVUwbbZyzvYGVERxH9J8LU7gh2gjqb6sYrJFK1n6pwXc",
  "key29": "5No9pPJ5xwTwHpN97ExLwmruD8AT9QUYo8avZmrsTD3dN1wdvritvSj1Nen7SUJVA9VVzVfFWbqo4rgLDiuMevzD",
  "key30": "rU83PuD2VyEJsVjYsWpRMnQHrKSgwvzZfsHDQmp5DukkaNn8GDYmwnLwgbJjM1gaBywDAg4GExwREFVS9g53SFi",
  "key31": "4TKkPZfG4t8gcbWpnc6e4qBWjSqxLQqdepJPmuq3aAFWYGFkabq9YeNp97V9c1xxgRkqX8GuEb6UR5YUj3RXfxdH",
  "key32": "3fvEQX6y6JQdEN58tLn6Ujia53UQ2CknMuko5USYsHh4ci4c1AuryFUPjwri7toqFARgf8Db8HBNHubW3fG5LLVH",
  "key33": "5dR4VSWZADfXKbVXkysxkkgVY5SBEuA8Q3YQ94WU51KyxfToZa9pk8qCyMotfZJTa5bpb27iZ9tYJnf4CAP3Eiym",
  "key34": "21cBYYiACEqRQyL2j6AAw84KvvBDiAU7rSPFx63Rqm88EEr8kUmfHA2krqZkiCtyACEASNXEL8xw3DpZHJmkS563",
  "key35": "3ERNwQHaoUQDyhruGUfLi7QJsYKaif8RBXkCsJmukzHRQ1CNqnH13VY7pHdi5fmWvgmm4V9d5DSKcUyUCvRxVeRT",
  "key36": "EHwLQGT3WucCHoXrSoiTex7zZf9fks3K3YSe4a9tG1Htx73fxR8UMJimvq2XcbMLBbXLvbrRrYc8XiBA1iJ4rp2",
  "key37": "3MEwCPYD59vnk3vsL9AmnnN9LvhhtYoGGSWJYoHxbtCXAKkj6EHHVmFEjgYAAvQKq4mz2vaozx24KLQMjTC9kKnZ",
  "key38": "4L9K1PSK3QLUD9cwgw8HndHfEn36g5jQ4xPnxfiaPggwPm9hfwjLrXcX2d8Ttz2SSt9JDAn21T6yfj7uh1Dhn2Hc",
  "key39": "Y4Vy9TMd5J6UAQyyeB16XRhYfAkM13BggWUhXa2NrW78U1wKjDKd8j46UcBkWaEgxaDDmoEicLCnfkx5ig27Lbi",
  "key40": "3fSbGkCVNgvjD7MQonmbxHzJGDFRS9myJoFGKj6LPCHwDUvgoRAtELrr1d2M6ibUCnK7DrZtQD1JY4PMwFb9w7YA",
  "key41": "3fmnJKut8f8y514gsNqimp6TDNBa7mCSQRLqNvLV9xexcRy6SDhjw8RvjiR2frHUvJSch1KJFohMngxWeqJsrNEN",
  "key42": "66ExzRnieveZFT8EZTw4Rotb5AVEFB3uyt5GnTHPPXjdfbhNqWGTu6HcgpjGkkp9BQD1uZqgs8sX2RwC4FkBfr2a",
  "key43": "abDxFRUrtzRrvmfJMjMyeaexn7biZ7StM62SwB5kffdVLmSPvZghe1xrxN9kpzQdTZCVTL9KMM6QWef7jcwFSsY",
  "key44": "2S5TDj2WTCiMYwGsgZWT2gcbLYPjs2TSoxsPp9q4WeLatAinU7fJnLAX4CwiSrJW3bc9F4BNFZfKugfTLVCPyYUx"
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
