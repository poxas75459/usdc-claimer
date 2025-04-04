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
    "5BsBQ2v7r2qpr25yxadz9UytFy5nAKtbmSpGGyEumuJ3kqX3PSBbAnxmBSWQhBvnHvo8KJ81vPoK7257gB3LjzKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ed7PfKk3uWC2qi5CQBtmuCWqSpzppP89MSUT4cwymSVzGcLGRXZVp8VXwNmkZM3MNgjaSkYGFosLptB42Mvxgj",
  "key1": "533ueZPEVq68p4MHhVkmtteBmoP6sGkdvX3gcr5E4Sd56ij4h6YyPKaSmCibU1LBD2nzE6czLq43DkpBC3jTodeR",
  "key2": "2EEfwBZu7MfaZHtRmp1GPEcgbMwPZaPq8JqAWmS96ic6Ez3kHm2ZKFohhzwANMA4FG3kzn3GyqTroTtrAuKXm41u",
  "key3": "5ozoc3Jd81wE8btnznN26cfdvERKR14HPyaJTKj1mDEVu6mBpbBdxHnw7gtMug4LDJifmrh5aSf66dR3W6tbdfBy",
  "key4": "Lyow2MNxfJzYU9a2Pv2PwzDTnCW17VJz3zqU3JVksUGVMhd43Cfp34DxM78GbdqoKC9yfoqG2R6xMn4YjFxs4iw",
  "key5": "4a6dU2jjzfC6BNMdE53iSwEKoLRbdsj34dMt36EBD3dpWoSGcnRVs5oHFaXBq9EmqLcyzjiinMZKciEpKXi5tUoU",
  "key6": "5Mih4JTEocv9BxFBM3gZZRtpLe9QusHbDjxTpXHFV7grvk5HjhFnGZARHLvfAgCkCZ3Tpjjjtcr48i5jMj5o9P2v",
  "key7": "4acJbioqY2QNsytV8S6FRhz4BLug4v9az2FE4MGoUKT8ZuSVL2PZX342bjV3PwQFN3b16H1MUv3SPR6QX8gNp4Q",
  "key8": "5XrvXxwuroLHz64PzSqfP6kuDCMkxRgZGTxCxnFy5Sz2yg2wDbJL9HJ9akzaUs2QSuVZLUS7GSFcvLxQbPQe9EQQ",
  "key9": "5xpWwfErmipB6MRpTMvp4JhbMg1EREc5TnSZzo9NtsRgffK9cagfqEVsSY4cBxqJTSaCWuHrnqwxbjHVP9qin2kg",
  "key10": "2KhRxhQJkK1WzkD1rgZTtod88Df527nbUco9mijippxBChhHHbxEofwVgX9g8Zwum8oJU2E9c6JjUj3tu3SgHnSg",
  "key11": "3HZao36rGQNHtA2XguSx8gHdNA5aBFacAgfNh2Ch6vcEprcEVSNqJk927VBbjs38S7hWRQHmV1fUKEFDtSJFe7mj",
  "key12": "2iPheiimW5jY1YpYXY4XFkXLSW3xzH2BtZj4r7TwjcxyVbUXxkezh3mqUDTbjSh4AdDMn71swg84h7PwZEPQFPDK",
  "key13": "2j8ePBGAFTzPWTAh6GhHJ1BWYm7TTNYSnkhJ5VWBs4avUTsJxsHmHpPPbCV63CQdyT76ufbvALewBgoh9FYfQPur",
  "key14": "5BikiyJgPZYVXu4mrvefa6HKpSMHSo5dNvVGVmkNH3D83CzsZRbT54UbWduqS375epAmqwMzRfWCYjP1FkShWCdL",
  "key15": "vpy9P3sh8jPRxJsu8GeYUDsYF2UyBJ891HLZwjwJZvEyBFcCAjdaDeJn5wjP9s9mrn5Zdva5bYLzsXL87v72JCF",
  "key16": "2F6RTAeUqAQS63a7whzcMmDKK8kwsGmmXUWm74FzWALVhqQ8yazfnbsgGxbTRgk76eMMWWsztMGX3doeGqiv3TNB",
  "key17": "RivkeniiNQev8pL6Tt5PapxiQV1Wvn4v7uQLWtP7wpaTqmGsscbG5uiFGoMKkn7WbG4hFB1eUgYW9ntsMG6VmRd",
  "key18": "2EXfJQ79Tda32xhUpqVNNiKr6sE65uVEBy7CA8dykjtNrjaC1bebCLpxn5943hBQw1oraHJd6RBRkJa9k5xNY7oQ",
  "key19": "4nMgJFhW2tFnkyzkVrijPpNWNQ287LYv7kMr8HNWjK296VckGhPmGMWijXdhvaSgkJsrgDEEKN38DDJpddbwagLP",
  "key20": "2AD6XEjRYzTaQoFtT7aBrH1AAdaLoibpFEVQPCgLqrktTz9sgq3AUieZccDahTML6cZQiKb4qYMrBRLDht8h6enj",
  "key21": "46rZZARQeYEsh5NTfvZhouF1bfZrJUgcAQuHyqxuG5NdkNQDafnHZELRe9rqbFqTwGRzA9NzUJyzpiCBpEkZFy3p",
  "key22": "3UsQcs43gscrXExE7R46HtvdvVwnx9Zdm3rLwy3kjQnopgE4gNMqZoD6nDw2sbFfcF2Rcj1Y6n51dXyu9fbuV1du",
  "key23": "NryWZYcD9JhoSaBuGi3S2StUqPnXVGsyEUZ1bgVr3bvvpm3sFgWVLg9a1AqSktMetgSUDw8Vbg5be9Vp4fjT7xf",
  "key24": "4Ck4XY3a5tCFDZdvJ2ZjnH313Cj7VyGxDHaYiZvkyac6FfYdzGcEbP95fPWRRMRhkbCKiGrLPVmj3tk41sHEsp8d",
  "key25": "4aYRFUZSRYAYjWws5cWhVaeB3pdwiQkUD9zHMS16uW1wX8xpXt8w7RaT2WFGZqMRVGpfywPrSJTZ5vGRgGTxsjuV"
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
