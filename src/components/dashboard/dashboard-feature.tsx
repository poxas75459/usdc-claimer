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
    "462ZSGva452QWvofzeUmbh3stcD2pudtdAcQsSqM6ZfKanSQ5NPiDM5zZmujtCsi3KoTykbS6k2BMVdno5QidFT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gNGdMwQzsr5976PrVF1vQQnyLNiRFJRvWmtWw9ahdoSDVbJ9KEBYDAppZ9xrMbdHW9iiSsEPChjTfpCNWpVAwzH",
  "key1": "ntZCqmVNAPuXsww33HroU5Z7Dm9Bcyex8AzRy1EKFptzsS9Zyw2p5MVLJX1FbVo3H2J8K7svUDouytS3ciLP7QH",
  "key2": "UUiUXmMrRt7KNifDYqMQusPHdGUQtKtY6t2SvMvHmPtFqDjGcAobyqi6VwGu3KszwjgniRGhCoEWsmPfx7eUoc3",
  "key3": "2JdHddkz1adAPYJZGyCDD7DGSwx7Kmvx6sFHrqGN7wj4T4nvqXs7HpdWmvX6QTaVg18nxzUCQ1KvBGyTSZ6DMhX5",
  "key4": "VsNQVHtF5cDs66Cma4MrdK5dfpwu9aFx3soy1TTxcJgiP4EKdKFs9G3mHU9k84VboFCiZgRdNWXGDaoNjHkD3fv",
  "key5": "5gQnniC1PoK7wJU3MVYsAaPAqqJYzsPhsAsNxysDZkazQXkp5xwRKoRF9aNexKrgmFDwS5DjLAT7CTiVXPiPiMaW",
  "key6": "3ZYre3praZ3bhcEFZcgoiBztrURroER7emnGkhqTeSiETM33H4RRkakdX68D5a7qutFRpCiUQLkaWXLimueKs35",
  "key7": "2wMFCyhz9L6wgnBesJdbbVGEULdnKFxkH25m4jdTboj5vrPmpBA8QaGFyRcDkhSzGeuZqwr5TSGeHST3AHVrmVu4",
  "key8": "3LhQ9xU3AqPKZJK1B1yw1SYhaEQpQwgU9Bd4C2gaxT8iFFEzbNskVf9aFqBMfDpQWQ533vcZfUP1x1nwNFGBYQR",
  "key9": "24yQyVahdEM46GTALryMHjKdsiCzw2wsqSGfafdjgN7F6HszYe5YSGMNwhUWvY4L1GxcRr3MPJZEjEQP8b2PbVXe",
  "key10": "38pWoVwJ6G2c7psCSVN3DSh8JdtS8SUs5SSqge9Juzt31WukGqUnfUgndtKKNooGbWC9ykeeLeXGNx8dGgbHdNee",
  "key11": "5MDyTkYUhFMdZFNaM6sG5j3VvjEuqMujkETtEeaeLvDR12EMxtK2ttGSiiWzhrMYxrb6Aay7y8dMVpBdP2ZtnwGB",
  "key12": "mhwCfCnhMtbZ4QBAhGjy135bqzgWkXPeepCEKqVF2uni3WHhEBF6BaiTsjNupEyAVLDuTvoRGKKWh13kufRowKn",
  "key13": "2QCCZpo37Q3PyxVFgdf4m1SNx9MnrZh91hnh98JVzhx95j9hNeN3ow4gTb26QpXvYkrFZg1FW1rkmnJ9nC7bAVL9",
  "key14": "Qcgk311xBLVgXYYWxCWBRVUFBM9VmLF8SafhHQnAQ4KjKHue3pe3v74a8uZJLkQJdYhsPcKw4vRLYfmmVJLvyHN",
  "key15": "8WaYP3jbDr6FdHZ1dP5s49Pqj8HorRu5HzSJEm1n4B4XzXduoZj1YJ3NfZNBaV9PWYcWcUBuuBfafDSYzDEvfhE",
  "key16": "5vxxcotDWbX35Mi9h8asB6cuNXBddv8rpFNTjhiFBH5rq8M3juXtik3EKXyt2s4HE9ajC4Zu5Jb9ALQmL2UkyL7m",
  "key17": "2bypJM6cosUQHHsQyusSdwNy3iixEFpemGX5Eyw64kRm4rHFQEuYA4tokJ1jrghHSLiVhtNECwdGQ4ZNSTkuGUN5",
  "key18": "E2VVMjidvBEtS5F4KuxwJUzKmKCAC2vFDG9vKspqZJvjvDpxi3M58EynBjbrwq2oKrPjnLFKp7mqxYS4KdZpaEi",
  "key19": "oG527MeqrJzrsBtiun2bo2SmuRSDBBtp1Uh9o5UGtgVdRxoPKhTSZqfs3EG2BkuhyrmSQkeqZPBKi2bPp1RmemA",
  "key20": "49nzut76AwT7hjxSKdsHkcwvYXNbUtre3Fref8dRSjJq8kRwhzyH41BkPtyXEqAFTbtoDHr6bnDpgDJzPxs8aBFR",
  "key21": "4AuQ6kMpoBV1C56vbW4jSUqAbweTs4LfRSBkQ7dBRah7qTwYaDVWhPb5o7AZp1vg7hUkn36AdAKbj3tBBKxT44ep",
  "key22": "3tBHQLXP7sBjEpwELxpWFSRcXcXityztQovVSi5qvA6zHjQ7FoC4YP8cyLk6QuBVuiZvwTU7wTahrkMYmw3WWFm",
  "key23": "4phRcxJsBu1WsypSCyuJRBPEEuoCXvKs8SL8BRR5w1pGVajKep65dUGuejVNqAPYCLQCP1Y97uN8Eu3giJ1YQeQ4",
  "key24": "3bmrNg7m1Tpuabf34txrdEAAm6r2KM8uoJ93TEPLC29dR2utKs7WPQCe5rHLcci2gEjT2Hef6Uk5ZBgZXwfsHTr6",
  "key25": "3ckCDKVjsHP6wzUWSHtF6nAoQh5nwqfMnVocnzARLqGyFc1R7TKu7AEMoBarsa9FbXP7TtoLnRVgN5oNXiRAHBnC",
  "key26": "5mdfhF3g61SNNLh94JjM4GhkN9C4ipaDajuCupTA9J1B4QBVA8ULZHutwHkbRfnN4Xh3FXnLx6Vpai7k9FmQKJvp",
  "key27": "31Q2nJMreeLztek9ZiEysDAuko8dkmdaZDyJzATyqhnF8tQkEoNJLxC7aRKoSPaibxBiBJmjGr2dUFkBFPUb8vV9",
  "key28": "pb9v76Uvz3Zgs4N4dURNyfozVL6VuqQwuMM64AfExmouyEXvqDqgrP5oNEkY9enU9sWmM57R5R6KXPnELRcKjSU",
  "key29": "3ozC67RsTAvvWD2r4sX2bnRKAVfqLjkdVmyAuC7ejRCoG3f5R8k89gspbu12MBostXp5zcEik4QM7QC4biCknSV7",
  "key30": "5z5eR38qXz5TVUQ8kSG7eg9YQATF3UcLiX9bYmfaaMnhj64WRgTHvmMtah5kzQNCnpFVrELrLHJqGGZ99sQuUnz9",
  "key31": "3Q9AYmJFPZdHmzxiME5yFbVdVYSrXrCi7evFqKqHQU2d8YUnEeZG9k8BPhhMkSDJ2dz9SFHEhhoSzLxb8zpGNcJW",
  "key32": "65emvHTo16o1mJijfRGi59SD4ErzSGnPPQFvK27Rybqu2xDhqA4QyytPs7yg97imZJKzcFnyH5FA5bLPg67jGSUz",
  "key33": "eEJcqYkxt2c8UNiWEMe5fVzw9QY1JKSmMtBM8PAEbpXVihsXNcP5zYghRZyRMME3PZvqDTgv67s97pFqEgbxwAu",
  "key34": "7qMwuEKHGfYwQtfSxDnd9zGu75vCSR2Jqu3N9Xn71tCxMZGf6ZPGEqYRFwqV7tAP6NPNn6EVU2kCssR8i7b6LYa",
  "key35": "3XV44ETQ3LneGYQ6gRyDF7B5bzczMRqLbSHgcRvHq9hJDoDj6wpf3NEk8rMRixb9HQBfnAELNDs7wtn43r3TWsga",
  "key36": "XeCKAtfq6bdkMTGm8q5niEv2EoNgQxjNnme4DBv96rAdoVgbAMr7xV4jXEPakCax1CpTesKc4BxojnBdfkEXPc2"
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
