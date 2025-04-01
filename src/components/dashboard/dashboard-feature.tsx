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
    "2S5bJ2DSfDoFkXh32fZkhFHU8uEBg42KNnvs2MBJfr7mnuT96fPQ6LwaiPvNMErcL5NEVuVMfM1hchQBb9rg1tcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x245cRsTLNmBQqZ8EEWixBjfDFkeqWPjpsoQHaTnivWACPRhEwDxK4h7YpPE25FDgm8NZS8pm1fmN2XWJz1Lgqk",
  "key1": "3Ud2Kkhg7G6KT28bEewg7TGKCi32jFwzdXsg3GPUZ7eJgBN7NUNvu12VSpu6BAup6EC3qsiXYqwNcTpFqVSWnunA",
  "key2": "3Nz3dUCmB5Y9KDZphZb9gvnsMSb6BJVdvc2PRCWTrpH6VZViZQBTwPj3Y8ZzyC6QRnimKk7qApAHT5FLiWWpQELa",
  "key3": "AgJ1Ae7HpZQjCTpt4moFUXX14UitB67PkBmxkY2nBrBakZw9YFY6UeyrRnfPUr4PNXXswEmfGzdZeKuwn7BQ4JY",
  "key4": "2iCWPYud2UXhwMmiSmUaym4Pcqq4jSSBgfCD3TwHwmeBG1y3uUSSVAMJ7hMtvJg8PTvC9ZZ8azqoMNQU2nnteRgd",
  "key5": "5FrBMXB5aR7fQCoZv1kMCzqRAhn6GR5pdRhoyhKzpLnNsUGkR5xnGRXtcADVWeejVjn4cGFmFG1ePwLTYvS1DvAb",
  "key6": "2MojPnb8BW54cdYu9M9inrMu6rFLbZSwQygm6sJ9yvjsKefkLkaKgVMyP94jHC6u8cCop4aNkL2giWFgjdA4P2Ez",
  "key7": "3QpdmRvBSDbzCkVPJHMcSUFBYzyvVzh8SHYD4UW7mgd25RbhpFdNCEjSe5XfMMJPKUPEv2Kc3wE2pATvCTSUCRpg",
  "key8": "JbkMQ4322DkL6mPcAgMWt6ho3vo1xwDMSHdCuaaQUKYfaHVRrctmJUYik3BbFRVPx9kDxZg6XkcEZ4zSETviowu",
  "key9": "5k9p8JfFUqfPew9S48J8G8h8BzTUq9rT3UXsF8e2dn4fY9nipfhkuCZVvDXhQn71R6YgZeYT6CscSbSi8a8miUoD",
  "key10": "bsrUrmQRCcCdKgx3ck9oyZzfCruSch4fSzwRCM85qyZYrtpWhgSUpydPMz2RTJwu2ZBh9MVk3VCTsowayNKqGkd",
  "key11": "5WAR8sbmAp8JQ5gaUAJex4pYLfViZtCwHzdzif23Mh9ribxw8X7wn241emF5n2MHLjSsbo1zK3XdifSksbmzdbnK",
  "key12": "5qScvxF5LMm1GAB7tQEbeFwMsyqWyw4cixYVNFHvJ1jim6eAxqT9aqWXmyEPSHuwBLDQzQM9ZHdhYUomNfft7CUB",
  "key13": "mCqYemLmTG8UbwziwGYLiG3xkcrFdSMKeBYuzU9jd4o72xFugCFHMvMVbVPwCdH24nTmwHv8qFc2cstVSNYZCy1",
  "key14": "62wFcs1ZXbkYYBoXDxg4g6ZTURwPLwydzWW62CA9SoEek8ceUk7x6yQ8cvHiivg9oDVzCgDnSRw9cVZPv6RuZRSP",
  "key15": "5vDnJau2K1VZu9E2ZeKCBqHuqxJwjb1dvCV6tHGBsq5u55B3vifEkZm6ReyeFquAzgSMVhqxbfBEM92Gs3nKYNfB",
  "key16": "3pfDfKKBKVSZQekeZHUu2Xpj8W7U4Yv1XhcmbfmSfWTRa847XhaZhkAdAYFDy5CDdPQ4hJ4GoMXxLumZYvUinDmg",
  "key17": "3sk6cZKUv4KP65oaz7HQjKwEzHy7182SfHxdaGnWqVRVkNxiTkCuK9EpUZoQELv6MJdkSkW7GdfPqkmzVmRC8wf1",
  "key18": "2gtVRP7aGCC7n6Tp2WyxEQpW1yW9GLEgVtHsM83xcsGFE8XkUHkyPNGhGec9y8nUoTpS2cQnaFNS7mB2w2yRtzWg",
  "key19": "5fsHYfsiWQebTQdvda39wvEZdADLNmUEnjTaFzphbR7Q3MFH42moVe2pqifpWMpMkoHXPvkk8zfYBwyrEYhTvaUX",
  "key20": "zPYo1jwDLdF2QJKu9rfN3a2nuGNcQEVyW1uniGf4MiyG5BuLCSEuQYt8XbkeSaHhyqdEM4YQehoWLburTzRsQ9K",
  "key21": "2566Xd2cvqZkYD2C7ka2q34rRebCr5JHCSFARmaBnCJEUFJPB48wSY7eNPNtzv6RQpeErXQXgF66DTwJF4ETsu2q",
  "key22": "2ZXXZEjz2KsBHtg2imeQtJvMTFD4KYjjffKhcysDVpmQvhxBm99XiwNKU3s5gwXH3VWffB9UN4gpDdGrb2JWscJx",
  "key23": "5aR6k89TvYKuS5HeMCAkUw5arsSkLdZp65WVLXQk6Et8MnE4wYUueiYA5eFQxx1doxLqLK6kv4YPC8wZ9nWEr1Vo",
  "key24": "nDvvFe1SttV3kYQs5nNq1788yx6SrZVvEuuVmc3gkujPcLWhTZTwt2d2bq6vhgnzdmYhSaUWUBfuK8jvboALgqk",
  "key25": "5pwetiZQUUP8Wbrk7fpHMY4meiPuJGSBgXQui8Wkk1rxYWybKkVBw8J9DFtjXcBYGRj7yTdS1DiXGBtWsBHKXLBa",
  "key26": "3PySs11NFCXURkudbh9BxBb7EbUfZybcpwaGkbV7bQ3a3Cma74ViuBkD3CGABN6oLXJDTVay3Bq9YP5QyoyvMMiu",
  "key27": "5ssnn4wHXzcmtT6wEGjTvk4tr4JbSibbEsSmNVoxDoAXokHMjEFZFZej9LAmXbPLGtDexb1btuhUQiFjB4WR7qqa",
  "key28": "54gnjpqWf6VGw1t4keC3EpSf9jiiXj2GoL2m6se4PdhB2bHjyqSYuCiPmzqNuhVVVPUuDXg7DYYXeFxADHEahxKJ",
  "key29": "swG6EKgGo6s3JBq5awhHvSuLAr7fLiBEGT4Gva5cbs9K46GKZRduHnG1EtdvM6jujdeBoU5T4wPvWR88B8561hP",
  "key30": "2pzaWDXcznaSYxrf7HWNDMBZAXmUZVpA9NtHL9FxcaRR7YuPhPGAs9eF1mqAr5edwAaghH9bC2uYGVWq7wDVPCrg",
  "key31": "HRvoqNFVhY9PRfb6G13QWwFMgZTvgc2soiUMKpSeXFcPvH4FBYzbrnQafs58tcCYo3DHhoCuJXu8NGHMY3EG9HC",
  "key32": "38bPBQqQK45d7G184YhnRFAF56TKmETVDxF2tBxDurh4cACDJpJ3LGUTQt7b3oVBGfVNfGvxkfKvBmnPTkNDd8Ew"
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
