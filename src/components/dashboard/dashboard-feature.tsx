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
    "3FhSAGzPGcHH4644AcDk1mg8dy6K5gwL4CvTb89gzaL6zMhUCfHUwN2esEku8X7ore9MhvhQnr9MPiSEBdr5ks2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m11YGRhQsezAnUMajxbKRq1bWvZR9LEXfrDKiY5ckVkxjuAx9JTYGPiyahP16DyB2mrg5NvfdeAYdqRF5HZ6sSp",
  "key1": "3rDAph4ypxUWJWQ3zrRRCtsQszmwJfZ6ktjdJCiJA8897DgCts3wPEjE6CEiBdP6M9gRzsYHg6gZ6pc7SmY5AhKr",
  "key2": "5GhPNxTRAZB5NUt2emgqD4ktiJ2deSzAk7Nky69EtASZmv42j63poAdVGse1mUCWfV4fzgDQk1iwc5MFMGvpB5Lo",
  "key3": "2Pmz7mxhooNQemtMsqvAvjYPxn36d5B7zdiM9BHg1pgGnw1PzaFafFEUJPBfgvBsJNGQaqZdo4xp5uJn4tvBmEMm",
  "key4": "4z21z7stx1agNTBZFEbd7ixDVdsw5z4qJY2xdBddabwrCbzebCBM44jPuwTB2jHzsG6o1Cqp17uxcma6NVtXZL1i",
  "key5": "589e7Mh3YZkEhya34Z3XmTbmjhQdXoVkyPeYqsYGPvHHngaE7qFzA4A7KdaKvVnuwhmTYvmSLo2U1fLT3x3B6jfu",
  "key6": "25Em9eRKoCSMN5K6H9NBc7Dyhs1sEw6iYTnzGCGPz8rn41ALQZyQgP4S6cxVLPu5BP7fkpxKUKadMoQCoG4prRwZ",
  "key7": "3Asfdkb97M9EcNzCUM4ayziP6hscs3Bux4vVBkJ195PbVfBvbqbkACnbkqvKFNwEDtofRKeYtrTChJbYuV5xDXPJ",
  "key8": "2B2fqbZD3xd9wnUrhYerqC6AWyeRmRAQ2XAjdWw3vSwXDaouRMHwZcpneqsvLDAVaFfq9aiLsxU8fTKnpNGu7uEy",
  "key9": "2jygSG76Anoz24mWxAZL8h8VtYHLfEvQtw3zNxNbmpzARDzrFf7iMBLGZfHf5RdXZqzA81NQf6CGCVh77gq1PxkH",
  "key10": "5L7gmHRECoCu8aZrvF1X6PeeUQb2muBjRgcBLe3TA7un5KcqCvixQPWGKC9PSmvuUnHSEbyRT5WABDTHPXxtGiin",
  "key11": "4ymcRnfLjmR1wiA9eCFQnqXEU91DXyes1Crf5R27A9MyLXL4tYbCGQDWJUUVSHv7W4vtvdgriWK4U78KxbvR9vZn",
  "key12": "29NpxneGiaNGMvXMTkWkY6tP5Cxe1kaig5bcgXV1CUhU5tsk5zj7zGoCrL4MGRdMhUmc2uH788nfVBto3AC18cwr",
  "key13": "pQguvFS17GoWYtLdgWdp5fZsutDagoXTnAHuCW1ADHUyTdEFLBzakK6W2d7pgWHSDiA2pi4mVowpCXjtGGKcwRj",
  "key14": "4CBw3J9G4H5hcnWT5ayjaY1uNqENKzzgT4o9bq888LougDERSyakD2bYv1nm12xVVJFKDuQzo2u4eJp6SX9Mzn1c",
  "key15": "25cPgKyu8GycDHGmMsHmHjueyRL6cXLcPQg6ZMSPVdePDP6WFsUAoSnVqg9GKjjErqLTYj83374Z6QH4bhXndiVL",
  "key16": "3QQkkJpu9gGn7BysiihPXn18uar8yi4MRyFGriuGadUKo34emNbZ9F8GVwRb6yx6sWktgYCvuMeXAVqt4bduF1Pt",
  "key17": "3LkepxC5zG4icmuMfszhkX7yZyBgKzTUeb64XNXe3Xzn69KmQFQtJGFkuqxPyujMvypD7wSbCv1Zx7LLNzNpNMpK",
  "key18": "2vG4aJcvAC55sG6VKvuRDcDqXGmKs59trdnBnqJ4BMQ5wuifaiSrAkfhMeBFHupLUWeUFKqoWndZS2znmrn44gR7",
  "key19": "K2Taa9uC5qVAjEXXdxx3Y3bKeiUbbNrMmAK2brAeK6SrFzoDnki7wgGNpfodG7Dkip5gELu7xWcQTmqh15B5gZL",
  "key20": "5vdo8rv7PbSPDfsxwTbj5hHsxA4REF3y5m2a7TQYvCBcqxKwJZMWB3RZ3QBeoxyW57YZTjF3FSgwgv9Ri2dYHubb",
  "key21": "575H4qR8amhhXGZUKKtzkrye2sQ7LzhvjFHrrsKz1gLbWnYfjkhY2EMSbj2xEXvDHN47uq5654f2rTkdGSPXGjVg",
  "key22": "MAqu3MqsugTpMTht1Yi4cMwdL1rHu7PrbjcJcETSVLEp6rfe6KdPHVnaAByd9kfNP5dn16224a8wKaCGw6guztS",
  "key23": "5xsfBH5CjbU9CcSFtvwbmAaywyU6nKoYLwwYnrSccB5pmPf2TcV5Efyo9fkMawdqad9PyoBtwmXYHBFP8hCbueCw",
  "key24": "zz4HXCx6Snmg3ryBt7u1z9tEng19pmdzRzmRNR2fS6EYA9jxLqZEX6Wvkzk3SNioPewMyK6fra2hvNUz5cBoecc",
  "key25": "4EwiNCEtLWN9cNAQ3AfC5eDJPf4FP6QS4VaQW1SqG1oER1HqaeJ6jeaccDuTcVcm3ma59LNEQX7gfS23CYh1rHjj",
  "key26": "3z6sqWuUSyqhiJ8W3UKroUfxWSVPuQ1xeacwg8EZJ5bDvb9zMVE7ErQgAATX58vbnK9V5cQk26qqM9ES1yvzkPAJ",
  "key27": "2ZyTuedwPBxsdreL5GzVpJP5gWFr8yaG2gyjcT65q2hSZLPdUKCDUxbDPaavj7cYAQj5K969A6xdoLvYQq4AqTiE",
  "key28": "iraJ1b2bj2EhN9BG6Egc9yiAEvFYkfPbmvVWR2BmmK9RDiB6bVQUEcsb1zWGwcEZWRf55GpWGGGDBdccEQcue8w",
  "key29": "58e2WAeeNbfXcs9nGg5Z6Jg9EvhVs39rJhKaVSWSExGhztry4xRQG5jdYyYaj7Q1fBbhTA4RoCRumVZTGiedmhoX",
  "key30": "4Rq3trEhXxWPTtTNxDMc3YdsJF1KXcnSbAgPAzLP6JGWqC79agrLXi7ttb2yvc9VeQREHv7b3HLedVxpRxGcjqHv",
  "key31": "4dYz5qcRBuAJFGjKQ3g9bDzbUfU1EvkjYtEfvUw1akBUnHYGcHTSKhf22Q2TfbxpZ9arF4F6mTuNXgifTuX1CDBf",
  "key32": "5gdW2KwEkDL4vrmCtpxEDsPqfkBmYSZMYcgXK8Ahv9kqZtpESX3YEBtwG6Zj9U8zJnehFbsy94UbD66jr8mwcii",
  "key33": "vVmuNNNcyUbuTjQJw3xr4uEQhektW2TL82vpHHJaZKQoT7iKDqpwxM38toqCNitWbcp5AZnfftQxG8JDF2MK3ZR",
  "key34": "2XeuVcuBKYHUJmguDZUDdTs9h7fu6ZQejTQbdcB1D1R5iWtEAdkMSKdzEzmB3UEehbwfJEZtCw3v2ACCDkf2VTkd",
  "key35": "WxnRTCVTeYsRDTpf2P2jU8sD336VrUSeQRck8Q9RUUtuQu6vf4pPBf9HrW9tpZVNZBw7BZDmn5yxG5x3A9LTJTi",
  "key36": "4wapANYTQrtuG4v47enkdGELxUZk43DusiNKQ61SMm5tCZk36tHZWk9yBj4szJiNwqVn4wbh59X6srhqu55pqqZB",
  "key37": "2KiAXqfzR7ZsKH5mS1gogXXFSvbK7vfoZg7hywM1rHXWYDWwLeQV1u2UAd3dXcStHdBNQ9uLCTAQB37SSKgUdokn",
  "key38": "RajaY813p5owqrQxV7B3zmSK2dX5XXtrNnCE6iA42mAmS6NsFXbtAkHhNpvofSgXpJL2eG9TkrxHRW2iEvdouFB",
  "key39": "3HzfXdQM9xp2G8VEQcUU9KC2EseZDE59fBJeA8w7YWjzb1H639cbFEkasC3jGhcERkVaUC3RFhPCQMrjuMjyXDVY",
  "key40": "3vdQirVSrUGYQP24qvGR2Yrg9HARDivcmoACLE1yqb83ytc8xe59ytdsbVqTeRx3vhZHEtYfnpnpwqLYuq1LyMNw"
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
