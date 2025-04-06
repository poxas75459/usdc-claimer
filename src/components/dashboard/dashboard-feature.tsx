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
    "54pomUgakK9DtMXsCLjTPX6vV9BgbQas78dWJkM4bzJ7xyPNMSuNaMykYReipXwRDn5LYkZ9yHYR5dSnyxmsyodn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cUibFmVzjGHg2DdFhf1qUqYHDuGkoXq8VE93BLFVo2u76q59hPzCVoh4qssE7eZDd24q8XS3wXcHcFGWbM1EweP",
  "key1": "EozpXRxLt7b2RKptYeZPgTH3aPYX74CQw8iWf3R1CnbjSkNPBN3SGtePB4V2EWNCyhiPM1trkGJ8xyEmhVa2VpQ",
  "key2": "2vogH6zdbCm7mFCzv6MvCm53Vh42tMNPnBnRGbARbUyJYnNvpKbPizutZfi7Gb8U9C4zG62xcbhcS7Tv42eYtEVa",
  "key3": "3L2cK2aAPDnBHaabZGmcWpDXzNc2FTBbpNSmAi5k4wYpkAKw1zoygTkYqyLJbjjpANmSb1CXyv7MEz9Ff26M43o6",
  "key4": "Q5LAVpKMfZVQHofi8q2An724Ayga3evAqtUSzGA6LZfsFXuZcGt6MC4aVGm42jwK4EV3czL8VjXTskJtG3DkRaB",
  "key5": "3sAopZHWkySG13b8Vbs2xx4pYPnsPKETfMHGXBkkwt48yzhsJ51SGC9Vxks7mgnWwRcHr5QwbYjZQ6PKaqyFs6bT",
  "key6": "4ScxbLRJoKpTaatF1NavR4pjdM2dFxBquo1b9pksM2cApRUQLMyr6Z3zd53gddmaFYw7NzNQm3A8FLm5HCikbZvs",
  "key7": "5EYskZjLo4gk43ANVMPiyVNabVpUE3KHVpj6hDX2W9rNGzT79v5WHN8YwcbZdreiosRg2od6zs3XdVGrX9VifojU",
  "key8": "3GueVw55Snb5Zu55dpHtbff6ZNcu53RKNbQwwtR68LXi7UyNTS5gLH3qDAcCHoWzYb6rs2rVWXzy133Gz5anNDcp",
  "key9": "3wmJ2YydRnWg3QQkLutWSy4wBh8esG1EwZHdSB67ewaquiKZjTSmC566cZbMJPUEWLKHQc8aiStA3fmbMjYyoTxT",
  "key10": "2SRy3Wn6nWAaKnESmh2Fpgk2DpePExa2JAYhF3y33cjyCAL2DoEThkrqSW3TeV15ipfMFpREF6jXYXSCS3S9HW3q",
  "key11": "44tpiV7gcECKaUGsE6v4m4EsuoErxMWRp77Hbharf54cV18Ssju3Uu2NV8HD7ZjPgQMhdtrNtxsbM5MHP25GmJKK",
  "key12": "3aPGHgjuxaccAjurPp45Nx29bsnnXgRy8TC4gSSxJTn4ggyeA42rRwFiSRqw46WAE7fZza1MmHnh9BETT3T9Lphx",
  "key13": "4N7Xai7t3Jy7SV1EejDC4kxQVN9889LNFHCBDSoNHXYZ4Ny6skUKxkwb4b8FoZcexyPsnU7qZ5Kp6oCMYPNMJwLg",
  "key14": "3CCBabS7Y7a3mUUAAvt3mjbSMAFMTbZXg7ADe5uAYrMzUWmUpZXZe28CFP3Mj2yarm7eVVnn4y22NREvfjAuPNqR",
  "key15": "sgQaxCDC2V5uC6sv6FtyjqBrddrTUtX2mtnjZaNDABrgGhtHAC7Mgffnksp5G6mYc3GJKDGC9Kxbs3wt4mkT9GV",
  "key16": "5yTTErkYmciZNvf26dNJfqVjS6kot9RZxkUW51KN4PDVzT3nrk2ogk8f8EDJxS3oh11adfLzncN4MNMWrfMZxDUP",
  "key17": "5vpnftcQCNVrtwu7CZfmZTLSbyndNqiDK5KdNetP4VLZyivET7BSD6nfxG7KHP53taQtDUE2puRtSpSoUc9ix8yF",
  "key18": "V9j2H1gZjKCJg7EfDUf1EqY2QUoDMMznMJseqY4nQS9Edw6RNRckuTNwde3RU8vfWXJicij3D5vDGQMDnSyz3GX",
  "key19": "3fEbTmnowe9gKJ2GLGWVeWXAVryFEWxatEEi7tPz64DXASNvaum4TAyjBSvdBrLNbzEQLn6nm85URGbjUg1T4tEu",
  "key20": "2jrybJyVBZig3WB7T3JpMDMMctzMWA9Y7euHpf9ypp9vKMGqX5kB1fJse4sPw6hEo1i9ezDNhLVtM6dkY8tnSNpt",
  "key21": "v6haJjJZJMjd2yusofrPpTiQZZMfUPbkeWTag9GZji4dpe6FcFuuQbqjLdfK9cyYhVPDMmj1TLY5kdvSTuc7C1Y",
  "key22": "5Rn3NQwSM6pQiq3rascNYQxAuLaM4V96sJKK3zt8DCuJBgiRYScgwmhbTWTrFRCP5vfzSvYAGb2JqJaxDt9xcpip",
  "key23": "2X9pPwPGGL2ssMb3ehVe4eV7tb9nicvmoKtjb6xAZ1xJSiYHBqbATJ1PvAXPsrbK1taAnoK6DRagjqmmzoMxmhSz",
  "key24": "F17qWjskCr5Z9wxR94aehyphkAJ6bWES4Ht4VrwuqovgZwg8v1EGtkPHuAYmq5phVX4fK86okiyHz9h4FxkBbBc",
  "key25": "XGJ6LnsZYVfFWZi36Ybm1LgJqY9YqXWkrBFQ3DpXMBs1rT5b9qUvFLTfL7WKB8dHCfuuPSUSjmtyQK1sr1hL83D",
  "key26": "5xedVBDQ1g2KuN484P7rGQVKnyfmPqmY5v4PCacDwJhNHxHnfV6ducTNyaLdFJLbjBjfkXefxSEmTsGT3X3D5Lr6",
  "key27": "643upxjdH7dYvBjV1rRksqKQGmo5eXFvpVEA5zNSZXwjHWFH2UZLrs2uq3PSo7AsDN6s5K6DqztMmqbeEuiGoLm5",
  "key28": "qqRmXHJSfAD5gFc5dL3QigEvXPoJU7PN34vKdmHyAsaBbjx1arpmM6LHbprCRQvd6vKbvpP7mP5224PaUXMLc3Q",
  "key29": "5MxPcv38tXKk3U31vqxxiV5y2ivWuoqYe8vFRHzKLAfKRs7rVEm5c21ajUH4qMtGLxHT8zi7LpSeQz9oyz1eK3e9",
  "key30": "5PmdV1d2nApF2PhWwaHFMAH9NeHbrRvAi6YP4h5xasGE8rsdcVYqad7bhpoeAfWh6CgwSJYe1PbSL9B6x6GWQ7mw",
  "key31": "5e6ExaoN9kgB18xhraLs8h2HWsFKBdsE7v1uLjyhyuDjrFHwme8fSJ7kbDgALFruYiAKZQo3cfaNZGkeZTYMYHTU",
  "key32": "2W4sh7PcD9hWvBRkuKWKoqnkgakkPhDNMSEmVXrrhF3SUccif4BzPyaCbriYcSgnbe4CPqHYK6DgiBQzqdPEEeRN",
  "key33": "5W8dWGYVc4Txq6K7kJpw8Qf71mNUoHxs3xvfvzSy7mh8AbttUtzv8osFH4jBeHbNWHj47sN3nVUL5N9NVzhfaQst",
  "key34": "3RAdbHvS9hiaFfv2Wfzd9T8H2PH3rsMkEmqZtwLSoYC4J7fnggJDq8NFNA6cdif93jxwkrKhqNNfceSp8WSmZ7E9",
  "key35": "2smcmctV2d2nqMV6iUtr6n9Rg5eaxCi5MXxYtDDiTFRo4FZgfSTtNh3mkiAo3jFM95NwCteGVUniWUNjUJp6jDfz"
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
