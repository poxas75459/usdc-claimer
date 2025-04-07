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
    "CXELdGmGvqVGjhYZtLqArHoWgTa111XrQx83UMQWvze37HBnuL93Tdr64gsfUzFCToAPycxxwy53UfNLgo1p5Bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313SF8v2JHGtghiovYpAugmKHwmBs2is2khNiEUgv4w979HoLKunf2cahzcbsLoQ8YQDQXNh6W4N6zf4Ye9WKnDQ",
  "key1": "WSDxx23CQn8NZcDPUc4AxHBcFsUdW3MEV3G4Z8D8ULj25RiuHSZJBKs3op98qxtGUWNxaqrHoz2FQoxzvJSJeq2",
  "key2": "53LPF38NUxqFQKRTW9JEPDMqfZHZnC4vWYV18LZNe3LKydbCdsf76ai51mWUt5pxR2JaSnaE1X9BnZxPc5hw5gsj",
  "key3": "5ELzcq4DchKkt7xmdz5vBpCEpaDgvuLKRcrE1KG2y7BxjK2g9qSKxXrjKkSUg32uyXyAQVLDkaPsuZLz39H1e4kL",
  "key4": "4cDhQBCXT12x6pgYHYNzsAKDjbhE3Sy9ULtSX9HXHiRV8SxWNMq1vWyMDTMiHYKrhtXEsYsAaghxaMZRSkk2pzqu",
  "key5": "4gaFd73nRykcHN66pxwFvsEQRmwW4kfyTWBAgPKg71VjzroVjCXi45fnDcAz8U94XocQqeey1Y9d7p1fw6nky2uS",
  "key6": "2bsU64JpajTLqz9voYzJyMEw8PtJ8EuVsHMPNgkXays9B5qhTumRsCfgDXS1g2qqAcLWK28NyiNA9SZH4KurDcUQ",
  "key7": "4bPzqiPZGwR4TH8MrmaCdb46fJrz6qnYMzv1S9HB1BGLQ8HEwkmHfJ5DwhKvUXmvWsWfX3hst8LknwRoQnwFYhFE",
  "key8": "5JXm8em4z86kjRDhXMhWCiBcHDvVqnAg7LpARJZ4RuPgQbMYyP8KHkGRF8MWyw5rCvMBketYgC7dkuU5zmYERs6o",
  "key9": "4ZcUqRmyg1Ww5WTPHCJCfAnsgeCArFjJ2KcuM9opeWLGkVSbnrtpKBC2aiwK9KFLrBKwo2i9JFBStE8AK3qnBxBh",
  "key10": "4ka8hTC3bnDn7cc3Z1t8YSZoz8Yhx4PmuLo63En8hD1LrMXoQp8yZd9PY3w4cSTqqy8LSoqBx5eTspfFKsCPVJzv",
  "key11": "XsiLCR5nSevd4fyn7EZAe863rAZxRdPxjpSAEMxqh6tK8BQ3vKXb63na6qbJjbeYGg3dja3PikyZDtQbiBupwQf",
  "key12": "2qbqtturockfUdeeSLVVnV5dzpeNdtUJfZzmT6edr3MTwarsEskVigXfEoYxe5hhiyamDsLC4gBwnUUvkWx8m4Ws",
  "key13": "32ZStAZv7V9ueE5bZmnU1QKvJ8DJ45T5aNSYPpRczoBu3yXD1R7T9PL567fpugWG7exi3qGsLM5sEei4daNNdjvB",
  "key14": "5yJNy949BWzTMXkFT2GpmDZPSWKgEKwSsceEWTmW3iiCbQbG2yhGo5JzxhLcTToqmxUFx6xMNjXbBqof6soV9BV3",
  "key15": "9FPdvcX9wRazkvDRzfagrecch3tXCFrbn86qx5oc7aNrKnXNkG6DtDHoDRnvkHcbofEfMHzZA8ZA6ise24XaCeJ",
  "key16": "2YyZnHUXjTnJLaHyaiBwt1TpYoGGZSvw3FskNx6Q4UcAzhATdsarsfVgDg3X3ZFdLhFt9hcbxTaRzXQUkfpVnpvm",
  "key17": "2EPSvgHWTUMCSyBK71H3ZdtL9WgWjgffwF3kCAJQQnzgWQ4k2FigwraMXRwZsJFzcFebBoa6nkbeYCLQgPTs57hc",
  "key18": "3iS77deDcrXnViePMfBAtSosJvdFZ8swPGfoT5xV6HjSB5C3kHjdBrLtUjcpNwT3MKpdCTym6cVxj7reW2gVVtq6",
  "key19": "4EHJEdy3RjLBD3dVxvqAowcWwXJCxeRxhYXX9K6CXk3JN1ziPqXKGuCeVNYvGjPp1GUhRj4eCwEvLAQkKzqgJV6V",
  "key20": "3LeG7eJuFL4Jw2ovAmAbmy8naHNr7FT8st4exDrL7M78o78r7m3WQqFJWd51GHQGJe8kLPsvjN86KvbmFofcRdcs",
  "key21": "3CHKiEamaC2H8eNDvUX83aUJko7igxkAMMx3bmgVWVuSxVdQ6UrY8nzK2QTHhTCUGwvBmZJtP91KmKCN4fZsdGe7",
  "key22": "5jGsGSgdFBQJ9LzoeHs8vQRZ1LvhVPAquYMt2JzhP3zBQTozXANR7w8PCXpDdMLCE5N2MsBpaX9mdhqN1rEVCqF",
  "key23": "3rnpyMyLyZkGiWpJinKswYxwNv6r3YjiG63vr7YFFYa5r6PmvWRjEVQkr5ZtA9opTRfBCDWiHdaGisR6uZmfNyuL",
  "key24": "29fpTt7kmqcsXtcbvGaSmWN3XqQwyCA5mjx6mpQLQcTau3cK7Eg5LDd5jwxyW6fZdcapcDBu3AH1inc8hS2Vejju",
  "key25": "BkQcEtyTzFyakLcdps29yRQ4Ejj8DwG6iqE5WvMFVSBge9tKMvWFXkSSM8GAdPdzpyWhbBPZ3BpKabMay2Tpqha"
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
