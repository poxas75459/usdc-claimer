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
    "2k9GQAwZfLFrEA22gS5nhVDdTDpzC7U5bb3Xz9vjv2Wnj2ZbELz9x8N57NnEzafdL9XAjXih9DDCpwyJ7mKMudZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGp1Z7Z3w7uUkNGucSG8gRENbVc61Ufes9EgUUcrZ6LCjajXsf2JmQapKrSpdqEnV5mKXamm7WrGimvjimMoKwk",
  "key1": "64T7sZ7sb3yyt7xQm3uYwqyvzzy3vxGQxAkE8znPH1r52WLUPZJ1wboHZf2MnA2JseF88wBkrRKsjT2MHB5buikH",
  "key2": "3uTmgpsC468VGwrL6D2pf4NB6CCKEzt7WNZsNb3miW4fSEmSrx8K6TPDaahYkJuY7gZH8Px4EMnB65z9Lw1uTopK",
  "key3": "3eQyjHJK123Bu51b4CD4zg8sfNoExBmq7r4EaMr4yshHCyA5C64zyFbBYuE7aYigkQES1wkcn47ria6pKmLUYuu9",
  "key4": "23kJaPTpQA4pfa2BBPuM6vctKKkWvTFzQLWHr7ewqWEnn5S39JxJZJtHbDtzbyCPe8t7XoC3jRQ651mMUvUCau71",
  "key5": "4brfSdqvpuM9M6pvTJViZbM29ZWHAvX9QvCoubZmHVNtj9osBiTSeM6bYDaCpSKx5UhtRfkNSpQjGMAyZCTfDg4t",
  "key6": "5FqRohYdaHHdVQKc9Zv1pdE9CLA6E33mdLLuUB8FhhJrhUAGtB5yfypoXGMcD9mJkZL7T7UjW66HQCkN8QLapMSW",
  "key7": "5HFTLPV1dxL2fdZKDZzPKRVAUb9KLGrFj2g377zZrQefwaqvxBdPBdeXsdL1savj7ZAJH85miKKcW3dCCeeRanbF",
  "key8": "DxnoPq24QHjBkAFzt235M6pQgkpN3a8n8Uien8NiZeqtjikv4U5Sz2DbL1vqMjirDTzgoPYNZr4L6Po2dtGHqut",
  "key9": "5heThMo95GS6vwsJUG6NcAHEvbq7xCX3NY9AHkyU8oDVwWVjdnwrsj6ZWu9UoSkt3AjQQtXPzJpMqEGQZ8PvDnRf",
  "key10": "5CYk9Y5b1KHcoBj5mQfZLhMMWmZiQV5VVN2G5WF5bVYWM7BA8xsoEhsuvJbrrxSkAWht5X6A1wb11EtMW5BkhCUu",
  "key11": "5PuCPekWduwmrer8EGnTYZFrAoMKevtbjwAXha3CnGUsmBbhL7mSUNEmiwkEDNd313gtumqp1dtGCyPYEkvHL4z6",
  "key12": "2dwFRhorNW7pm87b3pccvrQZVmLaYNepBtzteSmrLU4gmAaHGJbDhnThQyKPnS8TKCCwqXnPAwDVFp6F5SVhQ37B",
  "key13": "4hpZuBTtHJLiJHQ19bDDrvyY9nvxyB9DJqafgwKeUSFudFVCgRKRh4ryLZbQmdczsdTgwj8LKjyQG1Hp4Ykx4uta",
  "key14": "2oojkh7FGoS7YrCd6GF8LrWZbRkgZGtedn6HyGtmqY2YhPyShLXb9LAHVjE4RVgwYY8Z2EVV4BhhoJ1fpUvU2NYD",
  "key15": "kSgV6ZxwPdQf9RExReZ2DaqiuCUwcjYJmsqkfBdJucgdASejHAXPYLVUPxkzNKCsjpzSWkc8TNoRYJe6kfrCp18",
  "key16": "66wmd9iYvaCR6pZeKTcj5ekyvEn9jnyCEKNH9d9WUhp1zN39NPNrmbR3fzNqaov1V5VWR8b3qjtuuL8mPzVunuxa",
  "key17": "jAjjAQcXtrD3jNyWfbRhfqCffUiGt75eqJUvfHzBD1c29zVwnMZUnLuLDE8mQuizgu55xowukDYUVqW8QFDj7gY",
  "key18": "2CKiv77YAevRYkgPV3fpkozmVencHe7ihMrTvWgBrRbieGNEuWV8XDCeSg9Qp39uGYpJ1qXj8WG7Eun5SAgjMs1r",
  "key19": "5KiXTpzMga17BHWSPJX9Z8GbfJHH6wgqFBDMfHTZH55b6Lvm8rRD8FaqCmYPzJwVx9bdB9pTzhLzUZcLBe7zY2r9",
  "key20": "2nwwNUr3bq85pLpcLnsa9qy6Xm5v68F23nNFPVty98zxTA8oo5cpoZTbVnZDHcW89Kz5Y6jYykMWSvAeDuFrXwyn",
  "key21": "3hRTNWmYCo6r3xjBstDpoUoVhQHNGZX5DDxWW1qpyVdVE9Z3ChvAybviauuhRznMrFVxGat3PkwaHdgpuE2y8TQ9",
  "key22": "5HAdgeLruqEJrf5poj1DwxzfygsJ7yHnPV4nCVatR63oqzvPBH6eZTjUUh2b7eT8mtYRGVqUVF31uXEu46xX2rPV",
  "key23": "2WV41LAQyJGaZuYofHqigPhukWANVMSxFte83dAKpbWXDmpf4nv6UVxYZVNxtadqzK2j7KWpS6CAtZni1p6gNK21",
  "key24": "66jy1kLeutEbGM3kvEXVzfcXY6fkNnTH4vKm1259mjmKGjcoh4CkzNMPRypdRv2pYtq1TVk1HiMUDK6wMY2f4meE",
  "key25": "3inNEEpnWDBjp2NxZPdPHB2KgJmWESkEmzwtEi1Tb33QGPWYLAsPreu6paWTM1JuMsho46d2WgA8Y5irwnNMBRir",
  "key26": "5vSMAbySsussC6YAeZtxZrasFwnwrVt3yD3yM8wqGwuQajHnJNq62cwF8T6xwjuAzT3U14tsatADbrxow9HJXcru",
  "key27": "29MVLs9UuNwbfHHAGtjdn46uQr1awnqChqmqnHNkYPcHGYnVHbtQsuD4HJDHadg1F3t73yT1jE99CUAzaDxubPy3",
  "key28": "3igfCemHTted8pfw5fgKiPNHa689GJrAMYzLxj5WYWqEhAwAwVUjRCwPLJ7GQF82NKQUqv63W1HtCCSUJoAvdQWd",
  "key29": "4U4hXG21PKgCFxkJ6aUhwBF638xCVBFPbi7H3aXhmsCskZ2QUWTCdVnxhneUsmkdR3ZunwAJkm14tBA6QG5cnvhY",
  "key30": "5sgL2EX7epus2P5LcwXXCxy6xsdJK8QSHU2mtnSJZrmCW8CRBW4UbVRaZxPkGR1DvidxNjNsFo8QYU3PCJSw52Mw",
  "key31": "3fRQZ4Gttj9jWshoHpDSUT96sfnH1KB9tC3eHAA2KbdiAyk2rRwwrUQFeyGBjQ2mgKzKKJ6U6wuizc6UsS4RLS8p",
  "key32": "Tg23t2a9NH4AZ2mwWWCV3dL971hQcHfdinHJyj3zm7s9ZC4GTe1c9vo11SHP324NhayVyV5GPQDzUkFPQPvczsw",
  "key33": "2Zy3r4cziePzhWjEg5XPmCLm4yLFYnccVPm9ktAWVL9pvA6sV9SmmhTLPhGuBVJcdjVC96Q3zjHLL273s4PEU9pM"
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
