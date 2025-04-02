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
    "5qAGGeY5pL9PqLUEbLyg7bMJmJCTwoidvWYXD4WAH6YLrPcSjZ7kKcm3ckdBuEdCisAK9fnjLv5z5miLuxK7wNaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qWiBkA1pUz5So8XctS8h6dajLab2hDWtbguJEyRYngWkm2AYPApkTrDxNRKNrB6UDJQuLbBeQwf2ZMVPvGUAVff",
  "key1": "5mLdPNXyWDqoctis9CnqHAS1TP7gdPpjP95vdTvD8cRa5a9MtyXNcsE4wnxy7yHbZMLb1332ZjzWR79muBcfCtcp",
  "key2": "x1vhT5UcBUjGrpYGvg9mbRmvN9XkXdim2RrYcBu19kYeEHhwwuVFyGMFHHUHkqpYMTqsVDbJLpS5pTbWiChSCn2",
  "key3": "2rdjegjmV51zqcF7n8Hj1MaWaGpHeDfGxcKYKtUjbP7sszP3hDkLzXYkPkqBJQ1vvxe6eS6sqhQb9LGbULgS6GFk",
  "key4": "4Bx3xw3aCHQNTxnbhKTdEyDLbHWbzWX7XTg19k65NmvvgtBcJQUad9fHrpD9aA8oSeEcTQHahJ7cPSCkEJe6L1r9",
  "key5": "5HiyQFnnqMcGiMyHBmFB6DZ1ShHpE61X6X1QSNPrdvPv27zqXJ6pSwrs1vf7A2RRCf5yiK4TAXepHhnqn2LXmJqR",
  "key6": "5Zb2Bt5DDNi7s2bCSPpHh1zY2S6mQdow2cXqKghowT9yd89mSA4YFLYRdSpV5ebe7ZHdhg3tx5SKfVJgwtUD4Wh7",
  "key7": "9Rzn75wP4uG16eRT5yUa7a1exZ1wzYkCYzq3Vs4cbzMsQoim49HF783wFwzf1mic39dmcEJrF4qSjxCS2HhMtPu",
  "key8": "5UvLopDq8nAamhYmvqARv5jTkeUJCz7FymbZCsJ28w8wDgwaiLTGXPS367oZsmqTrYB28ajVL1gp4Rgv7BFRKTTw",
  "key9": "2zmgkdZTZqu49SfCpVXwBWXivEPSwVnA6MJDZJdBgV1AzTN5eh9CBs5fiz8oRJ78yAaHWxX1zFL5L13PxP74QtUW",
  "key10": "2bdhU1FNTmPLiC7DzCysZ82puqVYZYT6EDtAykj5yJtjjvQWzBPAof2v7cTpqZC9NeMtR9nHowAA5vdui4748vXM",
  "key11": "3X9nHYcCJFiD3Gb2J9wfNA7zYgPfeGVL7ij3BatUGwNXXnLfkRT4Rae4Z1wsTipKDuzFvSN4gCGWeaWh9jn2PQcL",
  "key12": "5Ppv75mjLBtqDE6Qj8QV7x4gwjhhhWYYeUP4uc8ZSaxxTXPYUL43Up48xLGf6osJqqWaQ95pAadbaQA8iku2LJqf",
  "key13": "3EFJMA1PKEC9iD8o56xSTqhPkGCNkEVbKs654qaz9Sno1ZvB3wnoyTKog6pre6uBsGn3ffFS3gbmktsAkC8YsGzc",
  "key14": "4KEE1ViiqiaNmHYSsnzj551zP6dzbxZGypdioEuxbspajThW6bMD6zNYDAGpfmRW3GSrRaMbwYMmQqYezr8XEf6K",
  "key15": "3ydf1cNva4rKYuFwqx9Yfxg6cdzwBf2NCdoLRQn24Xjq9WPYdTAZVF3xKExmakmZwNkrtpr6G5EELM46hoifGnML",
  "key16": "2ueZ521sN6URDYQ64Zx2QsBDCUMXFbgZigSFDiygJ9WiXkphH2Y6fmbHRYptw7RX31tNbX2yH8LhQC8JbZ3UzEpR",
  "key17": "5WxKYhWZd6781gULhqxLho8vRXHoAzxoSwgAumMHcp9WfnU2nwXJrAHt1QrfJSusFZLbyvqfUwU8uFcZZsVsEYA8",
  "key18": "TJGV9X6RVYUU9jzPN4BexoqdP8ifausczQkT7jf5ymUcZLpAqAwQAJKXY6M3EGdv4Xo3kEVeaprCVyK2nmUjUa7",
  "key19": "SJUudrcuvY63VxxuqvWJ8ZWRmaYuHUoejt5gp312XRhWjRXU3BoD1ZJ6L73WM8sTo8PUSwmfJkpWL9Yn7b68nvk",
  "key20": "2saKSy4nhYKViBfCPvKVRyqhD2wTL8Fzbkp1K3dsnsFSPiHa7FyzU7ZcqFJZj1MNfV6PxF1t6USGrzbfJNhXfZPi",
  "key21": "hPNQ9sczMDMYeorvtYYWcGdZxugWb5hxm1BvZxXLdC64xHzuVhkHaLbeQStQaa4r3FE4mu2VVgC3D84w986G8gw",
  "key22": "Mn395kG23246D3KL7nnE6kKGCET6MYcVhFtdvx1UGut8YhL8r1HCbNJSTMG6eyVDMd54kyBtCiPZVcgiRtziZwn",
  "key23": "2TKSxbMvCfRvko9t8owiBYs727byxiGqWmAiU7wWSzsEJ4Hskh2QGT3QLMYngJSMnTtLgMZH7fSVCM5TxwBSMZx6",
  "key24": "4J42HY9JXUTqTdgcgArwnxLL2ZJiVFJduKToev4hTqMd2Pyigwkv9duXMkVK5Govx9LbXDy8anFHWncbYKsDppfZ",
  "key25": "bcd42BqeJC1T2RLTZSzunXKiHamJp2PQqGaV8pyNvfWr5eRPzQrHR9ht8LL2HaBbpqL2L1qX8TdiotfM9FjeENT",
  "key26": "5vxieFp7LdEzHzpha9eXt15xRzsGnyQs9vCwDpC24MMVnPiJfmDzvFfRnfaZ7bLo6LHAZituHvBSc8Sm9JeozCBP",
  "key27": "3Ps1CrQdnkVWB3J9A22yAXD9VZ2VBAiiKaxjFeJBg6UC2NPfKkTabgnBGaRdvWT5DnpdSwT9CsJPkDJvLWALQ7LD",
  "key28": "4MJjB1jF42Qq96EKcuFmVmwv91UffM75hpoZMKDgA1GDugNNmBmCbRQt3JPNzFpUSRGz2JF4iszeAo7f4PaAwaJM",
  "key29": "2y4JxK1Pw2v7xKDx5vTtMycbh9jcTXeuX8igdhN2kDWue6Z5NcZnqaYtNjvFbnrzS5PtnkURxj1zz5xj2FdQYKYu",
  "key30": "3Ygxb1NFXmTJyPmjFKesgDWjU8jQ1Ws8WuSGxKjRBMC8GYohNyBq2dyoDDkvbSVBtu3VuMHP3MDFA8fCC5swL5ht",
  "key31": "5hp5tjDqZ7RVYttpwAGjHFnF199B3D1YyXTAvS2ZUboazP4FKTyG3EgVYgZUZSKF6jgZbVvEmSGPYH3mGprm2tSs",
  "key32": "5UbZRJoMUWeA3ovXCargBmrppZSAmwM3UDfbmVnAsv4p7CRS7gDVynYxGn6R3VsJZa8TpNowAb7miHwQrabou7px",
  "key33": "3RJtYv13k5HPN9FYmJ47BLf46KH73v4hKuFZVsDR2L4YkJZX2W212KwQ6SMY99BouXjov2bkSdYn7spGDRJTXuEc",
  "key34": "35wgvgkWArAow8snmrtTVkLo5TUTCpAtxuBvtiSbuqwdyZMuF4157gzAnTZobGXc8dAwWosea9cwqz8FhY8RES1V",
  "key35": "28TMPNA8eiAmVHo17CRpH6Jy8GyVz1CvZvDrq4rdT2z8HXKnEXDQoRUScAzkRgREg6vo4emNGUqgNTniMGJ4YZHu",
  "key36": "N7iX4rMjER39TYECUoCcpnqdbXneHsDdnWHt3q4h9xpMTW2LxTFz12r3p7yiCfsCVmtmvfgovNgYsQdfPbAde6E",
  "key37": "XixCGGosErTFY7wc8mN7MWqgQhQFzrEhEMmBLER8ZaTWyTmUrB4kddHzEvrMJdUu1BEGyy8PWnChUfkqxUeKsoi",
  "key38": "26jR1n39M1mnfGm1DFDdJpkVc6rum1tNJRvTv8HsircLxrq6CmyeDQcQvpREpN3U1F46NdmKPupecKxhQKhDep7H",
  "key39": "2ZHF9kzCFvNuSda39sKaY7ybpzVwiVmSHJzNT6cthUC7pv4r9cBaQZp9uoJaaHkPF82CqsA8DM7FyNN7U6ZPrpkd",
  "key40": "4ngYks8QSDok3FGyX9qSnGiYb94AJTXmGs2pwNiwM9kWbqHpYQuWYzqUD3qizpbTg8v8DyBDgEzcMhiTpva8Qmns",
  "key41": "3P1Yizrxyyr2hE8Mq1JVYHUtcEhwrns2kTsVEb7jxkqn3VuGnowxC8PKFzk5hbQTmroyQNh9PGu1DaoqmqNwJFyP",
  "key42": "45sheN5ehQKoGpbnsDySdShyxMzzFPQL79c6HgeEnrcGx8Zq9fPAeXrmoLFh7q8pwdF5jsHXJsiSq6WoCktSsRAu"
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
