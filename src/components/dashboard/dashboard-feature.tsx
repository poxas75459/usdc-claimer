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
    "4e73kgcMsMQtww1c3kwWRbvsLGGqV8trN1RWA3LAb4nCPAizCkMuDZS5mFPs8P4aK6bMhBJLay7CZaQeCt5v2E1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33N1NcBXQT16jCsJi45P2AwSDg1ka5LqUcGyfu8GAvqEJoWvSHBH4fBPp43avmH4aEcSVtnhXx5t9Ys5g2pJwwv1",
  "key1": "3wD1JtTKemUtuvqtojdvATrSC24sNRZpduwN4EubrkcwKLosxG7ZyenJZstmqohBDZs9BTs9avDMFZmfMtSCV9z2",
  "key2": "2AiwGtNRPvWDYmpf6aRGea2cuz9rBoCiN4NPqumVHng3h5DoQXnm8ZKmGPAsBJt4M9qiBswXFm5wQvEw8zxLXhfy",
  "key3": "nFCr6JnoeMv5pBVAtmqfyZR37UUEEToGUpgdViVMQ91HvBstAJkK7yAQ4cw9JRUr7zAANXTM682FvRQ7b3Z6Tsh",
  "key4": "2jXw71vijb1ftgFt1qWLBgyvVwQEdGXm4gKTZ3imwNhs83p9ZymmixPpjTAKzsnGtmfw3bREEYo4HAwUFSf5YZyv",
  "key5": "2vo6XsiRYSqyiZwv1CYRwXFLFiWXUNEgChqvvz5Vxii8aWbFDEgbwLhd48UrQhhP7qtkNJLrCdVsWLyEWZJ4vmdn",
  "key6": "2cxDuB1mSnGJoVLXnygHBFKkWiE57Ky3uUM39fSV5fNfDhBRC6T9iy1TgDbkDGpxsZCYSGwkwvympGm4NGLCn1bS",
  "key7": "5KsQefo3H5BNWjrQLpXZNVDN88oiscg64fp7KofrUMbvMeNS7zKo2jqJ3dn4sdZp211uR5XnLX58EkcwvJb27rbw",
  "key8": "5HTfSn3eJxtZNpbfocHAcdJmwcC4FpLQe5hWuVn8GuMXvk3hEVQsmcHnLWwCxa2o5giTaeEEvBP61bSdfVNKNzKw",
  "key9": "uEC2BSvPtjQGJANiEg3wDAQgwhumktJr9ZUpjfm3hWZm7SEWUwRun1wUjE8mvdjdCeyu4DonvNXhy3v5xMnAFjm",
  "key10": "63bFu1DcAZTc8CuvKbDQyoELPpLvVLvWFjK1D7frA5bqp7xosxmk7BDi5qMHpVwhYBVZHNrQaBHkdriCVfokQ4GD",
  "key11": "4oEAy976AuTYX3dz8X5PNg6aNVNNbh5A8r9ggby4DNnzzCkKSWnpY9drMUQR3XCoGvbqELTYHkPdQcnRjn93ZHbN",
  "key12": "f96ercqthAg3QifrQJQTgtEXLknYVNKmxuemg1auyUZJ6DvDAzFhm2LHPaQciprAtfA9c5je1WbVLsN8H8mTdbf",
  "key13": "XBx659JFLtEVNAYAfXdjbv536MvuJ8ReehK72R1VaxeYkXQU5Ww2aLJaQP2gCrcazDxoFzaH1qMjXf8VvVXMv4U",
  "key14": "3aFfz4Hm5dzkoMGMTf8krBx4jzeEcDvjjerJGq6twjKs9XocrgwJPhWCbjRJ51y9T7MmeH18JYFc1KP6CNH3NJjM",
  "key15": "5y6V7pnVQmpJ7kwChkty1ivWFP7fwp2afjhfX1iUQHBCvLyHkYX5zP6gvMdC7pvxgqZhJ1JhQBYXCzyTYDJYJ4D5",
  "key16": "4YqbNis2ynXsRMtrvUsYSBMuKrYkmNve6N6UxQ2HkGWfn7QnDMNVeEUKadAYWkumAAqkPwE1bFDybVcpurJC74xq",
  "key17": "hEdDWvdshYgDPSyZc5b3YCrd5PVYCjVdfnppwKhdszK8dghRmwaL8DpPKGw3GHMwSXfgk9VnKEMr7B1gHbSY5o2",
  "key18": "MwkWGRGY2MNRFPN2i6T7VK41B16KcYDD8doHrYGf3gjPoLLMwkUabPjAUJaTXsbdbvnVU6Srf2cnAXP5PGbCACH",
  "key19": "3QjBeRvxVFmV3yicXbLQap3RJwy7GY9ki4LbwWdzxsGoVoKTEwuBMSyQ5NDuDjGVptzAdJpqKtyodTmkZoMro79C",
  "key20": "2AAgLPAMHBk4UtRwjatfQHy3VuFMxR2dNtfGdbPUSj72evFvbZ61BaokjWae9moUcMTcVca3JuX5aAgS6RTBbLS1",
  "key21": "5VUnk4UKYQz1HeUW6c3ZMho1qCVBTZrzGcyLMvoALgJWZLry3LmFfx53LrKa9cMzkaoW4YMCX9H3Xpqcxh9vgcDH",
  "key22": "2dUqR7yo7LJR1WaUZCfMnTruH8KxUZzdkbNEqx1QWDs1VuRazjvaqobeVGB1kS36obEojbsQWxR6rUAAsjpzidHM",
  "key23": "27jCx2BcWtHLG6aGFyrs5YVDfwCg4EpP7zbKBCdscRmtBFzD3xPwxR8Q7n74DA9NBdAfY3FpXJH2XXxUw94K9fcE",
  "key24": "5YF3F6v2Hk2Geo7ZP6TKcRKfVr2qjuWPB2omvioMCViYUrsiWHqMpinnZKEtEjoB2PTBmFNEwj9bt4hNzMyoEH9e",
  "key25": "2s8FtR4bEzRD8LXbZxbC29y4wQ3BQoo8d2wGJ4ed8CXFATT2yGxQspeqWC986h4DB2FWQCc1y6LndGie5jpkK3ox",
  "key26": "5T6UZ9A7wvcfgVERSJo2ZiEc6a4giwJTGXuVsuVCrUMZjcvDfxgKtKxT63GM3vdnotqpkJuATWBijGGyDqoUGiqf",
  "key27": "3Kw6NP9kYKp26sv9kioFeqMBx7DZGxZvaWvaZTJ76tLRcRgSdTqLWE7tkSCN74JU7F5rrDPEdxWERnKc5fDrnxcf",
  "key28": "2KcscmwCTrr9DZyAou9auQimy9eNZBtqPJecHVzGc18CUFiSFnAk29zFgqPQh2oYcS9bnKCAzVwST2TgNUsMtCB9",
  "key29": "FnBsc4t7s15sR1twr6we4xwT3fHWQSbEEehx5C23QADxJDiFybqdFGQoatMKKwk1koV8JbFDCVii8WEEzT6tKyM",
  "key30": "3MhmH61tfNRfnQSzL7YDqys4s5S8sMSe6FAc6V6ZFJzxaDrjp8nrTu9UEsv9EZDU8qgxzqRGBXgcvWXVLNdVYpbv",
  "key31": "4pnYoL7yugmjdmocNg8boLLfosRdQHafAm76AT3bMeHktqMPQmGNfJN5tEtsXGvprhGkGjRzgHHtYY5AtdhL7jb2",
  "key32": "59SqT7YapoS2PdMgziNXLW27Ruai966U43ci3qpF5Pkua8fr9L6J7GUKSUhzRqtRY6UC7x6oTBxZPXTTJXei7QwV",
  "key33": "3yHSdeowWR4hHFtdhMbTo8ZrjH1jHNK72uWmajsDTFVRrLb8zoqPEMGQo6Vg5B8L8Z7hkJhkiw29kgxw4bBVSEjP",
  "key34": "3icRHt8pfKtQRnC5NnUMByJXmBT2RorsAjCKaXkd3dxaywffvYyxbeT8WAoNhz2HnksHtWARPQnF634BZFimgS9N",
  "key35": "5Vo66b1YypaC94fvp1knQZCL766ue5NnxZD9VJdrUHjW7DSww5EZ2fDK2Za83gdUFxTH6AGgE9RagXPxW6Ru3Zkk",
  "key36": "2oo8DcH5PdyvvJ6BRwoATwMgdiVoY72Ub2TPf3yDMCVJDgUXEw3GXBSC4M1Qrc5FCfQjz9vymGwVB5YotxkE4UVj",
  "key37": "fPZJaiSf8oJZAoJjAXgKDiqPSRKrNxm1wtdiFKSzHe66FLEaj7jsXd5nNQrURtpDEuisgfQAWD6qS79L1PHoy54",
  "key38": "5AdSsc8FCuEPHkYTiKGGCMbNEsWwAN8SmeXcuAR6W7BhNqRvY9JC7aeuJqPEfT5Vdzz5qRSr1FJLctcQfpMHNhgf",
  "key39": "2K9n4snrAKn3yqRupuzzEnJbkYG4dQVHjZivZStjD2TU7UwN6s3sENpbjdZpoujDYEeJtiPV5ReVJBYCfnPg9aTG",
  "key40": "4AUMXeanQZugJcyddsnAL7Tk6SzD3jL6SbQ1xdNnH1oNv1g8j56kgGyaW81dTHLWd55DmNaRRAuX8T8W9m6UJfC2"
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
