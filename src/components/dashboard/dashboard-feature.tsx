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
    "3b6ukorpqvHznVgzoB1DWb7vSVPdrz1KeRuAgNY1RSD3oaSLhHEWaeaFW4N4k6QmGKVuwZJHUBiRBK7vyS5vJgUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41rTan6V4fSeH6x8MGwJYQ7dD2dvpQs9fvBs2dSFvZGV7Ehz7RxCHwH7ChL6B5TyLtecnaWAE24t5Ja4qevS8KSr",
  "key1": "W67LyQ2Ur1mgfhFkSFV5RuJeJv7B12ESWURuvqr2QbS6Wp8gZ8V9rzESNpDMQDatfvkfWngRz2o5BND26BBagLL",
  "key2": "51xbnedFTzQg2egerRAum4U344r4WWSWK4C4k2VznocH6fzKkNXCERee48CFXuKaJZtqqsvi91JTckqTyrb8AFXX",
  "key3": "45t4i33HcnxYYnf8zXySwt64DJzeauFVNebNVMCQhjKp9tG4QZqXPPZhWxke4gQKXnoMDJBj5V5AGYftP7PLQm7R",
  "key4": "3xdNh2aXbSS6sorTDHWrbjuBjJfp9eCikBUWkSQqR2bzaeUihDksjXMFAb73etwvxc1tbcYqAQWNZGYkuqsiFgcr",
  "key5": "3AgwsN2LbpbNT1fjnRnTRcitdTiZVYU3T9SkZjCjuygCNEPUx4TpvVyGSSbxnVxhKEUHjT1AxrLMwAp7HhBZkSjF",
  "key6": "53hEKAJotUaxWJmoythMSrKycmN4jmqzQNB3kvRgj9P1tba6TNCjs2bKT8Xy4H6PqobFspvKJjNA5VKdeQXNsaEM",
  "key7": "4Ce8hDmRA9fvHVuP9hzhxpFCwad5Ja9YzZokcYUwZSqxwwhze7XKP32sXhpSMWWnRx89FnJHufALD6R4CwVjbEmh",
  "key8": "51YQdkgLhE2rbrUoin6g3vmCS9jKjJyp6wZhuDk2N115GKHPi3f996paMqoJGEWSfonCVuRy2Yar5Qhfia3vYtW4",
  "key9": "3CcrLfvUYcXctYqCLyezodnjLXWcJuG5fb1CexL1aDK3GNBUuqP4NU4uzA7UbDwhuY29jN6keEfDpVXVQxvd1Xbt",
  "key10": "34Xg8CvK5WEXDVH4MtMXGwAJxVZTHmPEkdzv6XPN33xNEQsAyhCApuVNycNLae8xnYcB1otYpQJHSjW3HHsedVoY",
  "key11": "2VZ84rFpLoXaLHBDU8bMEA9DHtRzHxYDKRLojQ3iSSi6Rx55V6tk3SH81RZVos5FAPWZFsMoQE3i1xESXA1cpfEE",
  "key12": "DwyBuTooCyLpkV4af7M9aDBoTBBsu29pHt6biWbPUSvDfupPPiF2A6hesQ9Qd5E8kZ4DVZsExjmKef8YCC42Po7",
  "key13": "35xRZM7kdT9SgsgBm1weEc4hGp8aWyoAK37NKwGiDkepVBEqWu2SM5HV8nR2pBBMjmWWMxGYhGRegoQGvKJpVQ13",
  "key14": "3b1GEZNV6spqBs2jjz3zueGjNia7HZCMN46tF8MUw6kKmNWFRu94nKA3rTnfJTzevFjNdGT74rG9J1dghZg55mTr",
  "key15": "3QumrBAQic8JFmzaS54vkiwcYjyo6ExvFMN4HdW4na4YGkHrq1EQDnKYJhyHstr3769WgZuYLSHJ9L2hZyrHSiQx",
  "key16": "4qcpSgPB1TBYb1rkRREnBAh2iKpSbp1if5bLBaSnhkiygGyUWSVT4whLcRvZ1wMxwKBi2DwmprytrNkhBawFpRuW",
  "key17": "38DYxEKzkXw6D4rbWtXBLYRLM5fDNS4ixCi83abp4eSpxqvi9YG5FfgGfYL4pxDgPhvuXKvXprGkbvf8KcnLfC7U",
  "key18": "EtBgkbNQGqYcK8SwYEAKG96Jwg47btJSdQqgHbbAGZBnKoWirpV2FhkAAePok5PWLdFCSh86zGXCavGVbFmNeR6",
  "key19": "3ikZSLf7KRQDrpRiRW49Zri8hqvUwAdaRE3ZFzJcL6MRfRVPwbDJ4syurD2e1uPQhTZr9So1yfwxTydSixz4cx5r",
  "key20": "mfF5fju6cnTUMy4ADxjiBHtDfpRGcYdxKKzL5zF9bfMABQuCn5joBBB19GoZHpwSB7gskFEA8haStfKS58uiqij",
  "key21": "4GgKoEqzgZ5hr3Sb1FPD1QaUvrKM5VcyivgiMsDo4KzmGsPwiHir1c1V6W2hgbHpf8dxXWiRT4EA763JYKGASusb",
  "key22": "4GSwKYyQ2XPKWMHE9WVmWDffTE9nKy2gH89JD7zyt6FfoKs9HJRHfB1GbP6NE5bnX5XSzJQbNxokzpG8Nnqkp5Me",
  "key23": "zMMFz9YK7CAStD3Gyx5nrWVfEfpw5m7UN2kQ8qG3R3F8mGUu84wF9QiaYTjwm5vmuKmMq4p3YqKiSPa1JYo6Rca",
  "key24": "2segWj9ewew7K1dkeWdfCEHnpzRU77vdpXacrzGdGZ3zkkgoCtnhpR4Rb8PupRt4YWM9ou1bntCGv4sVQNCDDS5u",
  "key25": "4ij5tNbStpWg9GVTCxzsRvJP6Z2GC3byE63XUjo36NuxNAWLTUeJWtbRWZ3mBrKRxXQPxWV5pKm3KTv7zAktFmPq",
  "key26": "4YQGnP8N2LLdVL7UTdMnVTbmDHnSfugERHe9YxbuBFWjewQacERx1SZ7R6Lj4Xj8Xa5KksKeYKAJKjhkd1gXm6Qh"
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
