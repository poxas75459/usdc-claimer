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
    "4KSfPLnFtMiWhktstsDdzYHu2HvmoMs6eSwnc89BMNZv6QfUY9XEfaJFEfpsmpBbdPwZd37FphFLa3CgiUAqrxFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x43JN9i5iBTB21zPz2vjZWPgrzUVWk7eWACyKZZCWXbmRvsoH1AERYvVwygeHvoCMusVji9FShfnpJeCYhxQntw",
  "key1": "4UTRcfqHQ91rXvUoMsHMPTdz8Z4cjHJXyjEYQRuhcmufpxxNBKzTphLG5SUEss4o3ULHjMiFpq92Y2iPnDCbJqU8",
  "key2": "3GGThgHmBRFDxBxffuBq8ybrqhYgPzDERDwDhfL9jxmXau7LbRZuGBkEwZ3tQ5i6BRoc7PVBkhCMkgn6aKrgWym",
  "key3": "2g9NijqfJhEdcHv7S9hXAkCHaCT2131EKz2GpM1f3SZVRKLnVhcgARRrohwVUB1eA5mEAbpgezPvNKGvwCi5iPeK",
  "key4": "4W7YVmfxgRxw9RB6S9LsDbYbcKGagWUphWSxfccntfZswif2du3NvMA3DPkvhJAAkKF8xPYf71jWifxTQ71WEMLy",
  "key5": "54A7ToQHXncnaDYspShYN5Mich7WFS1MN6sQZCY8ZCHj4rbiw3tzoiM3jammdkCLngfsfAQecCDAAQy13rGgGrmm",
  "key6": "3KuqreYaq5GWbxibBBeL6rfFk2ZqHNiXx1t6hKEaf1YgabVstnWbYmx8UqPkSC6P8fEguDN5CGLRY8nJ5fEtCvdh",
  "key7": "4L1QL8hQ21Cb2b8mPL9kYxPprdMKSiHFBUyLGYieX4PTweA2FJRNW4cgMdgh5NchqMH4RWFuerLzibjnZHPymDvf",
  "key8": "58iCLAmNfB9HXcrmbEQQq9GySFj6rpyjvRnDwtyNt6DEzAyX9Mbpe5AzhiqAiY3j7QQg95JHxtyM9A2fuyvYfu7",
  "key9": "2ARdYt9PDBC8hwxQJDUen54mPZxqA2MgjisFHQG7FmbeUkeuBh6AS965ajrQtVccaEk1bnQBfMCRKFotimuBjakD",
  "key10": "4rxNVcqT5VjVZwVaDbZnKYHpAp4wC1smfkFHhsHDWA5J8CKeMCW2nfhZgdMFRtzkfF4krxTcaxd4ybnCyur3uoFm",
  "key11": "38SXfB6Gfhe4VptT9dBHYvqMv4kqqQCrdR8giiFPmxEAUMyMrvpDgtmMNRHiYK54jPxs7rUcXZPi7G9eLumc5V7A",
  "key12": "2xJb77XpecYZBhHpKYPEC1kMc2wsPTCVqYsmewUZ8WcuRbdjesau482A43NuRz8wDxsVwqnNRbqwbxVgWTiai7b1",
  "key13": "yLRc3Fz1wSH3v8Qkq8LwbSDVjrnDeFaQftmrtEqAEL1MKv9bx7jkVq4vk2LZiJAa2PJNVWdzUXBREsjJzoS32od",
  "key14": "2ktHfY5i9jMQ7DJk5iUYBemi4XyUcAvVBjLqTaPTBT91QrP7pH8dxJgBYJvarVaGJFR23dMFN5Vmu4Wo2dYj7PKe",
  "key15": "45R4hBCJiB29bhNPHgTrdquZDr7rvLBSig7PHXRhQuDfthiEsYiJSKPs3KtbWVareh5V3F71Zcsc4ZDSzVaUHvtp",
  "key16": "4QESTT42nxyPWiaP8LYKFNpq3HqnBSsWGYwobzgy6PokHn4e4rVhmA9DcRxfag8iUm2dfeLocDQSDExTGsRqU7Mk",
  "key17": "52kbwp1GF82kpbBjekddtsZXKLEaR4ZGf82eqNKkUUvBRiiGV4cyJ66e7cHQTjvuyAZdpaKSBsvpc6ig1nhoDXiN",
  "key18": "uSPj2u5z7vfdZ4DTLpdHG7mRqcRix16S2LfG8tBzX6JVdmndHPD2MAwNb8dmJUsiYRuUaKCLGskyAJqrbt2MCBK",
  "key19": "5Ww9PH9b6WhKukFKfGuzytHDpL91eNNMVuHhuKscx5TcbXtKyFcad9PaH53wsaexTHUVKcqheLTyL566KvhyFMps",
  "key20": "CWzj5Jvacx3Jnn5H5dsMLCbH938KGUcn4nM3y216p3WKVSibmTC2ouvoktf2te8J8JP7P53tXAD9SbF3GmPgufM",
  "key21": "4VPhwjxVZ8xJPvt5UmLRaejV48byMcrcW1bhf8xP5mKRyvmxiyz5KFFugEV4RYNneQZLjTk2xD6RAq7KSCMZQRR4",
  "key22": "2P7xErZTbw5H5qN1XzPnwyYFJ7At1S5EfyDJ246cuVWxZbAqVQJ1cRW1FzB3xwGjqMcbk7Syv14zQgrV4S2Ycpev",
  "key23": "2VmdpmQL6b56KYXC1QD8o48qPg5p1BKQzBHBgUtJfgoJqh7wPBEY5M2RtQwY1jP3jCNxhsR1sAA4nyvZsqGjnTLc",
  "key24": "3LtSf3eHREGH42pnFen7htaY9tcbaWHMVt3jjhXJA3oWkXcxvLm2ffRpYNHY5wWNmtefBfRXjAmfq62Ert6vYHXK",
  "key25": "MwHAUj8FC3Jg8Rn6cH1dHzU391wsJj7UgVCQZy3SAgK65Bi8m3Rd5ptDZSnuu62QiSp3h3Nm146xiWKgJQb1Mii",
  "key26": "VdFUUikK5vqx4w47osAe8dtXTiKhnJjwKJ1fTRaN65XaRY4LYpjGHa1eknqcFYTqK8Pbhv7zEdgSkiPv9rdHBgM",
  "key27": "42YGnHbXcPxKaDWydg3FJpdHmU7WYLJV7tV1eYeqkKcHdeXHLk27UbyeZMC3VR7iVVLwv7VPBJTznj2LeyQQZNVc",
  "key28": "2bm5sPVxJG57eGe5xf7fNd2Xj2XL6pwrSJhNjCcZ4VnnmnvaLLMpJY4ox4nwvz2eGKBDPxWpV13Sw7fpn3pyHXzg"
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
