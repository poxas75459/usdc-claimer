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
    "59Ap9DSWGM8FK6KyDy9AJSpJ3qxPkYbw4VBRtHRiLgaq8wBQYwek29DEag2rbstB53xswmHG4VGbea7DWCcEChBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4szveRozMfki3tQYnm6LB1EJp1nzctn9FY7nQCvqEUfXKYEWqqerd5p27axYJ265HJPqjrxWxDpjaL5tDyUfhgD4",
  "key1": "N41BYGXUbezQqVj3r78wHVk5R7xFJmdjMAJJT7pdxjwL6ZXw5ksbSqoNFSvVLH2KNbvucUx5zhEzrRgVZ84i5bR",
  "key2": "3eVWbGgK4XnAHmNL4N1LapLogNT8prNSUreEVjpTrdE1Jnza9KJBgGd99Pvn5kqZYKBMC4vpm92p57H6Pee9f3a8",
  "key3": "5B7T9mrZ2WmSU45eM6GQbkSsa2bfjRXkDMKBmR3geVZAgo1Tnpw6Kg9odjjSdwiY4i8AbR6BvtDNPg7ESujinSA9",
  "key4": "2VTwi5YuUw35HhmrGzZgtEiToN2wYtYviu8Vw2jdARYqSX4UuQggJCChs6hgTifQXeQNRxbayUjBxttiYRZvTiUE",
  "key5": "61MxJY92WYDRE3HCK8jhchppWmyDyfNVsAYoJ7KNRD329NCriEqSq6JRvhsbZiqS5NfMsqARpMZT4k2dNgbKjsmZ",
  "key6": "2Q1Ld5x61TupxFku7VnKCPpQfUrPue4Nrri8Xy9ApKUzKNBuWLZsyq9jQ9V2EaYoW2p2vDKoPinx83jXe6fc5w6e",
  "key7": "2XvBXKqtpRvddWKPqXosGuuJRBneDi8btoKLMTMZNR5pnx46zAzYzJZjz5y8XbmKemK7duPnxLLbL1fdvtK3evsD",
  "key8": "qmcLFsEswk3UkwW3tTRUVvGgQ2Hnpn4DRRgbXUUNgyY9EA1DAcSiUXVibikQaEDrPBwctyvTA16Yc8HXxVGBYRD",
  "key9": "3hEKBCHnzQxZtFFfDft7dGhSmpQ5hBuuN8jyhbhRUqqRcFNKnD9LrBRUZU8biuC23U95Hwd878PeNWNdYsiufpbq",
  "key10": "21xDMDfcgXZhX5FB6GNsuXniWSQXbZxAH9qixufHNBjwk4RVN16Am8iscs6YwqD71qtc239vGq1zR2gbcX7KNcit",
  "key11": "2Y5PthkGVNZvTBo4K1mkZGpR4Mdew76YKwn2ohPAPxDZT4Tz9vKpNVPQGR3P5iJEQvBsL97AfXy54xqQ2fkMQMCU",
  "key12": "54gJiPCkWyC5Xib7KhYekx78SXXw82JBuxRfXMyNgBW4yi26Pud9miQNY9V5roqX7b2FBKTBro7v3axjuZfUrPfA",
  "key13": "5dqXwRqb2cUZDU7tFUYx2ZZ1CLMG6EAyppTwGL4RoWHC4dYCcCLBLLNFjkYB7JW5G3RbUzKnyq7kooiSPD7QM2w9",
  "key14": "2xfLxkJp88DQ5euCakkwKxk6VmDYqz5v22zZoZdtiuL9PQCz97Ni4Q2NoLTJkXEvsCDYRq3434FBZ5R3RN4M3P9C",
  "key15": "bTTTZ5fZvhNjmn6k66e7B8peRB81PGAVWaYkuANNMEcPF8qzaWPbAVvMYcBhB1WQqwfdHXEAHXbWNkcn3gaQvSq",
  "key16": "4sSE4pvFrxuq8F6sDeyfNdg2iS1BcWaYxb1h5QUmcZ87xW46t1dHF9YndLhh7QH2bsASg8MM1H3d2zknfafEqZYo",
  "key17": "4NvKDozA5rph4hGd7yHhTk1WNR9E4w4LwCTA8WkbbgwfEZ2ekxBDUgH5Sv6j4YUBonouUtiZFtrvtXbaiM67oCdf",
  "key18": "bvKSwKfvdprKeguAS7jf5gQ9bdNoj4G2Qu65Bo9LfmsVLnCumD1xJE1tiYv7zbVV5UYJ2uzSVW4qK3g8d9QZCUX",
  "key19": "5ifFCoJ8Hva3pCr1oWjZqvUqKndMUfct1XePjnvWnk2pTCLc5QFCcUzB7uD8CV23k9uNBzRM5tVCk5V1bP7fVjbp",
  "key20": "2apJrSMgE491vHEVcM2YXXNb4Rh1nCjpj3F9JyPvbgbW7fMg9dsL3vtvB2eeh3t1NxUkram3AdHHRsYqE6sR7Mvi",
  "key21": "51YuGpPnLUhg8B2whxsgzXJdimVcNX1XMwBNrvRt9qEWrfyvyN7LyGhCzsmN7oNUewTJpedRzdq6zCHovZTp6fau",
  "key22": "2b67Z4382WPyyYc9X4YaQaZ1S1aqRszepG69bPbSxtDKqFKvqKJcj3fsGVH2cxi2kxAtJfDSx6qj5Z1MraBohEcy",
  "key23": "3ADatobpfVSDwkeHaau5hM9DHWh55jMWFrBjmVEV8HMdAx699wwyRc1dbERtp8G4xq1Fkf7WZ2r5v1Nx77oydPAz",
  "key24": "4yoG1Mx4HqFfjzaXhZavmUUFQje2WnwYnYuv85uFoGntrBSTBeQxqdP9DfTk2ipP9W11UovNPzRqGdW11U6Ey2vZ",
  "key25": "53tnpVsPbFkQXpo8rgLyX1nAuLF3v8HssrthZ3VqyMV527e8A8tXJcBAYDtrDJxtNT777hGJaU5KTapxiszpi3H8",
  "key26": "3HRSvJepVyTwDX8jwLZ4yT59Wnmfqd31LKhsXqoV8J9yVmDakPjwQLWHweXPxojCdTdhW6YYrErFMR5ddZggKeBw",
  "key27": "4upWHunzj4PwTBs6hTi6qLTWoFXWaRaGYTD5pLum7uPTRstn6g44SLDHrcHxHBKbZvou2YUde2UvGV2k6GPXJ1ca",
  "key28": "55bQBeBnCPw3aL4ufA7isGemSfg9uWgxkxSfzBAVcnPhrLpjQCkefUBRwnCA9GtGwsgoa8TEX3uCA9R3dY61P9mW",
  "key29": "3q8whxFMC9miu7K9gf3839ZgdW3k9itG16kpVdGMsj8KMeywrJTmPmZpHdpPUYnQaVzzUTTKdHgSV7EoEg49eNfm",
  "key30": "WnNPc1TykKs44jxfA6fBsRbpeC1v1UcwyPf8VqXt5vxHNKbGaRubLVmW2L5q4nhk164whV2bCUPY7qMZ7pvsfUi",
  "key31": "3LexKjG3ud1wJkxexPSaY8kPVBZ8vukpsDxVNUznrLK9WoGiVs8U4TJw867S74iZEmRJLnKEJAgPrf9sPe9RSsRK",
  "key32": "64Df4yptnr6AK5GbTQCevjnXmNPdEKLTteEhNQrPuC7YScrAkt2bszF8AP2t2QWpAjK91RBrkqgC2BcATbqER6nk",
  "key33": "5QfZpNoxJZUEEcUgMac64bQTWXEqWSSsWBLvkg8JQx9U5Zpk4dBxKLQHWAKL1tp1ysaavF6HbpymUZHyErUbBtF4",
  "key34": "2NsL1jioSAQCNJkx7F9ksgy93JHetPGwY8G9CQJSvpC7k3BhiHJ7Nd7yqwPxnwZCZa5zJXjqQEAuVaXLj7iiqdrt",
  "key35": "2RavSPE6XJXhtsMBzzYY6PNfHf9kfKQLzoQVNsKNM1JfNH5Kz8jprxQbw671aZnjrQdi7XqD79JAwSZcNqimMVU1",
  "key36": "5oEWJyjB3du67TyKTm39fSU7VevtwzT8hrFAe9ivEcdffvUpdeNcerB9giE7rktxVsjDy6JgBseXNtmWt2RbruPc",
  "key37": "2FCLzix1kWYTgqAFZhRrev26BRJuGKw22ut2a89Y758kyDRC43hxxFrLyCNFm5CY3zo8umuEVQCsjXJRmrXkkSZn",
  "key38": "5ooNqGLxthj4EW4ySKkMKLx69aQoSynyojwzNfdCFAPtqS2RxHZs9rmJdQVkDYYCngdFotkZxahsC1A2F7ZeGP9X",
  "key39": "3XGfPK4DnCz3bfAT6GodPH6gNsyx6jrZg2uqKdyXH26BEYesFcJ5YxvwKnqMjHfb8GVnpvnfWamBec44zNwVz1dk",
  "key40": "4MdfjuaVeS52SdXyv9gHiMQS1H4EZv5kLokNzuetRiSrWdTMrw3yjnFGi52QrgSsqR6Ux4WNsDsCC3okusA3gAAF",
  "key41": "u1BP443c3SDXzYe26PkR3LvFnz9gFmkfXe6Qi2tKMr5t9Pqh6RGTbnx9JSqbjqW5xsnrKQYN3xNcMHZvjYaEKSh",
  "key42": "5KVxVkDCH6ZYT8XGcJLCkKxCrAocLa55MPSMagfPBbe8ZWd2a2mDM99vJn4JeA5RxrL3xSrAjUBygZmPM9HoRPwN",
  "key43": "53RV4PsFSZGkcZEuxExDFR5f1MHu8q9FokA8j9DNas26uU1XiSVpkLnKbXVYhNCzhZfFsgpN5WVhWzZSVxKQQvNF",
  "key44": "5rXCy4VCXtEy9hSQATF4PBHi9sTBDSyxs3Dw4EudmYN9ecjti8RmGbkWcAYQLi1p2ft8XPcZdQfepjoNtb5fV3fZ",
  "key45": "kkNeQKbqQKFz81hzoFReD6kgCmpeGJSPSpiPDB7Bdebo6orwUTjABFk2VNDg63BY84pVsVLAieXffdnetjduS5g",
  "key46": "D8JT7knZqNjArgx5pnubyEnPikke17Y7fyR6RjTbE8uKJez5joqyh9QHgai1acvk9Dvtozo3c5aXeaKe5nJkyzJ",
  "key47": "3Cz6wXz8GxtVD6yWfJLD43GW84sudh3mobg6txJTTsxfdxWBCpm8czXjNU4VRY1WgYrYefK4uERbh7eFGvyF35FD",
  "key48": "4jBsRqnLC2frdPJRKLrVZY5pUPHiUH3E7Jqh1KqV6Ucq8CmedBMPZwY1Z6z6VwFSNznxYVdFMYAyfgSTjRBoSZhH",
  "key49": "3Ag3Mfo9jeZnZpY6p87bk44K9KDRJbiEHwPLr1NCQDoHchexN5afPWzHvPWKeQneQAimzp9URfFBfmuq6QrRcwPf"
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
