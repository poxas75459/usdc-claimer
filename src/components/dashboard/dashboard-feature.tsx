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
    "5n5UaemGv8u1bCWELcNTWghB1jvo7QG4ENE2Z6jGyXjzbpicXpw4pDgApYStryQ3EbpzW5fYPV14CPmosRtrftXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQrB9y23cYXibcYg2YZ7GEHiodEoXUdVeqDoBxwWbSC6N1mr8A2S3n4XioP8ch9M3MRhVid1FSJrgNzVF5hXGs4",
  "key1": "5xszn2fqdhzsS4vRLqi1UiWNTjhCTUvhX5rHmPJmZ8wrduVmhRvcra6fDAmDVFMUhgdJfqTdYCSoNXn5gqvQ4v5o",
  "key2": "2CUmj2jZ5zXyjBuheGcU6a6oTgnn2cNoM9535UwCJ8WHaenX3RpSEFkLDMjmg1M4mnTyXN3Vbm3eCb2fRuJXHTpe",
  "key3": "3CWspuJtJwiCymP1ih2KoSwbjbH2M6EkfDhMyorZvAbhmBRLqyjVPZLgJha2BdhFXqGf74NLMXLCbz4AEuoN8Wu5",
  "key4": "5d3f62R2fqwjEikNGJzbAayKLGeCiVGApWXcudF6c75otsAKN6wsNkgqSEsgPYUNfZWBLui8bhNg3DWwfmGz6smc",
  "key5": "4Qz6gweDSyCs5RVkAwZivcTHGRiCmuD7kDi1QMx1ZZD1oKUZKM5Qo9zThWD9DiPpCKaYEJXK9ynxxb5yWsnQWSz1",
  "key6": "5nqeoJwX9FYp7zPAjFnSJnm5BQ2jz2RoEr2BWvk1Aj2BP5pcftL1PAfB2ZSTQL1ER6cKEtubYm7thHpkUrT52XRH",
  "key7": "2jFcqtQi1EQUQ3xatGYn2BFLx1AVWZ3dG44x8yZiJ4PpM5S2z6u7utqK86M1ynJcYgLSE68JBp9Wcnm3C4QgcGVw",
  "key8": "2HMXbWB8MbkDwDTUjDjBBkgcUuMJaFvgWPN8MXD7c4x3jKEaU67kvxJ8vEna853SqyMUSGSSmYyXFn15TfhLqZdm",
  "key9": "3baSk6Po6nVbmCoEU7Dzkgoe9jDquQFx3Ux6JqAWhJFggxf3yDV9oVLibWxAMa5YbuShUKwfijUYeyVgSRGA4MxN",
  "key10": "4UeWner3Y87JjnTTjPsg3Y3WX1LNrmex8p4RLCjviHm9HJk7y2xo2cewTWJevMZiarvrVjtLyRU2NK47EnmMcyxL",
  "key11": "2xqcrYk6Eu5iEnxLitKrU3EBrYdZ9enHmBqZztxowavyb1pcymsMTQTgAGG7fR9chf9sXdQ2cLkCYEdCzvHeMxvU",
  "key12": "2qUHHtWjj2w8MmXgXSX8YPohGe82AYJiPR48t6c9pgnpgGvpF1d7niPGqJ5X24ixrFohxZzbH8mREGbjAqN5VcqD",
  "key13": "2x1H3CyBhPywX45iz4Qqm624vnTYa4BKY2GUDKDyBk5ktk1YNPVb3HjRTAQmk9DEuaiGHQKgxpcnbdVxBEcE22Qr",
  "key14": "2aCHVKGUREyFH14PGGae2NBYPa4jYjqnX4zt2PaWK4MwSMmt4cmMtevaMFNG9mWPgQbF1LXn9YJ7Y6Qy4D2itee",
  "key15": "29KTVigJy4nMf2qu9TiGLXZ7EX53ZDtS6bChm2se4JumhFbvTULHPvL2LY6aB8D2mPyUjbnJ7nyYd6EFEdHuLuYv",
  "key16": "2nHqoPQntTY2qBnyVjE3UnAFaCjRWS6tiBsFwr5Tth899T8j5JudaJwZhfuSkYJahi4HRLfZJz1N8xZh1zmfaWu1",
  "key17": "2XDoTEgu6sEsAVXfq8bedCdTQo9Pfwju6isLe213Ucmz7Y2WTXZk2S2ZnYtsCWSBQTbH7ctiQ9q1SRJvNbAFdy1g",
  "key18": "nKnEL9xekygVLiZYC3kCKDoUTwA657qJtjH6h51kHDZ6tzxx4ZenGhEZiLcoqGpmxJunMKGtUYL53sY5qdfLYio",
  "key19": "2b8EaKyLxmJDxwZSuMyFFWBdX7dS1WqZUzksAfa5BrpfTtH3HmwwjE1tEjbDt4QsvJRkhRxcwqo9sYRktQpMhSD1",
  "key20": "4WybF9X4TqQqTFmMQAMWqy6LkWwDdkBkf7xfR1CoNy5BFRNfFk6dRJKztfHTqHJpxRGNzFebTKnqgzCvTGuASPj9",
  "key21": "5DMUaU6nN8tjfhjNMEbjy3ZwYh96vazNerE4LDo6W3Z7QmNa8kvq3PvZ1rFwTgfbmdbwWR2jFw6wkGoEgstocsiU",
  "key22": "2NhHSoeQf3vgB7nxfKvK5g6MNjbHq8Nb8eY36EaFdZBCtCVmVaC2rbAQQpcwtAu669gPDcokXwpiaFd1o6jRwKmj",
  "key23": "5as8tEiaGD2yr8LWaFu4X8XAcz5MGdCvNo4rHbGSoHyAmMPhV633vXBxgSz9DSME8bXuu6ubGWraZ6ZiaK4KUGum",
  "key24": "5s2nMAYBqaju1PgCFxrVZyBihHbdRBDDYZZtmWP1sFCmu7f4hT3qZDbCc327GbzHigYqAxuYHYmcyom6da2vf6HR",
  "key25": "5Uye1E3tggcWsTGE7L714DU2Z9wWH1NMgUzwYAUhWUx3XLiMJRywJTvTq93gMLvn1t2mFrCd7z3UiF9xtEMHz49T",
  "key26": "4mYqjsnwycaRQBiJxBvxBDZnxFEnWpj7D5zp6pRJnyUtSu8hUioZW3cRwawENUb9QfwjPQy8aP7MdePMJCYmGwCA",
  "key27": "3fmCN1PMo614RAsxGMxeWrLeGSXy7i5dJSTgby3PWp2kvsQKHrqm3pQgRNftHJxEvrW5NA58mUF5V9mZTnYKJhUs",
  "key28": "2YQmUnS5UFReqdyfzgXKTMZTsjkUghuxLAKPSF4jMiaLGAEPDxdkxSh2KoFJB4rxLnbdvFvc3Q4zABeUNU6FjQsq",
  "key29": "5VGVGBwnsanyNCW9dKoiAWmiNfECie1FPjwXJG1aiYy1HYuQBxcJPDDffAaWmgdX3i5p81pkYJDFir7TA5ZG16MB",
  "key30": "5jTejpab3PVZdRwE5djJHiyF7TtbM5qWRJjEgMqoLj4y5S96Vzu9GThdQdkHvG3rVe6Nn3ceDN4CM5kzKYGkALv9",
  "key31": "4kk5tyaFb1b1mzsyYHsvcZNTS5QAvk2tCwSaEoeCie2ta1wtJoHpeWE3UFHcS3khT6fQ9gVm1wWbxQMo3btgKw1D",
  "key32": "3FtzWom6X3pRhw3RcdZSH8BNguy3T6GbfX8HmwKcEmZRekxbEGbVFQgYK9zupYQheKAnnZ3RDdeXBTcTF9dM8iUo",
  "key33": "SFVC4TBZYin5tPHiB3fnHx8nTVcuvkHHm57z6MvAuuceMKZscUUhwYvj5FkoZH8gXdKrCpXPzScJJ44CBFzMQcW",
  "key34": "8AD7Y3mKPccHAarSbqJRHaDRtRUzGFvVVayXoTF6EyGSzsmvrAoBhVojLVyMWSiBcGEQM3fF8ZShScREqvFVKWF",
  "key35": "4vwQAfemD9VtHPuySzknRwWyvCQgeyCxkXC338wv5iHyKHDgV8qSTNgS14HuVLyE4CPzMeMixriYxW7XFNKf1Pvz",
  "key36": "ndZ7am2Ho1EKyS7qoB5SFkJHKKE9cKXGWV3SzabErU71Bw4UoAP85FFUMuyBghLXy9FYXYonRVbzVTmaZqPZ8yp",
  "key37": "3FdZoRTx8MRwidNhaTMkC1MG1nVUJceToFxbArT5g2r7Pz8mY7xktc4e3AgWsT3Kqvf7Ds5feHNaiqzokkjxkS7y"
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
