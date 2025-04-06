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
    "yKm9uHoDoumzHBNRKS1wCC4LMFeuo4eoS1CafLX6bXv4KzWtbpRfNY5UYHNnnCmxtwyAdkFrwWkQhTJFE92ZDMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J85s6DWyeMKnxXeSz2GWWwCMnjHWjhcAGZtySALgeS5rtTZZCuW3BnaMngG6u2XwKSZMcHaDSoogkA7vU1PbZfH",
  "key1": "5BGiA6SJGdmGuduikFNxr6uPY4xfA1Vbu124shMAmbGwDMBrNJ5QZrPrPM8NCZaB5vA8ZjFk7LC23neov5KyM6jP",
  "key2": "56RQwg1nxKdFgNUAyPDvHvekti1qsmFNC4AhGeUCatZvmS6d8NiDt8YrnhjcABPGWUMZCtj9FT2h4xBwQJK7jJkd",
  "key3": "4Tc1CrnA6ZFBNFwgQzKopG5d6i4YgyZrrxC8BaBRUzvDYWKzTbc8di78E9EBandW7wcSuT4a99gsdUtgQR3edfar",
  "key4": "55FzvHbc9LXs243J798xMB8SGaEMnsHS8w3DzJnNBQJ5h9yq9rrd7d6hEr9qjpB6qxV6XMpLTEGjsC8Sk5nzehHQ",
  "key5": "vkMvR5EV9CPkCDSc3yQzc8b2d5TsXd5YqysBKwcRWw6row3qx15uwrXG9zfJTKZxLWKiy9aEC2oLTNwFfzVwF3G",
  "key6": "2W4BzfUWoitS4ZM6TTRtFkwPHk9wqrq5iautfUq4mjx8eEog3GsVL3TwVdvecgn1MoQ6JqbNpEHnfvSBZQoxCTPP",
  "key7": "66dz7WaKptmRtbpbxS6SDzyQUWnYFSfftzajPggMA7iHRtNfidRJBU4hWSubWjHM8fPCqjKTvm53hNJyiSd4D13b",
  "key8": "5WkRfYuwsR3r9nbxfEwGmd9YanrM1stf7QZ78LJ3xTTF9S9QRbNbKBZHqirKK4YQbCqkFhZrkrpup3yiQNqTFskv",
  "key9": "mKZbbnGBezsFJSaVRCQ68CjNpfrTsHWDUhn2p7tfmSLcBPbJ7Nn7Txz4CQBEZTSgoHZqSbJ88neRsmWhHv924rW",
  "key10": "HXaiAUqsktmCBbmYtjY8EYT3FeEEG964uQFTdfu79q5TkTBdGqzxUczSUpXYhsAciMVNpRmbMwRm7wRyVdBNsZy",
  "key11": "5wcT2LhJ88v16v9aa6uf2tkjiX6L3QXqDBpauXPf97VWnis5K4nsEPJjjTC5v7igzJAnaNPE4EfrpgwpCm4siSr7",
  "key12": "35GkPqGeQQz54UUShJhrX1qRvqfF1ARnvQxMFUydhAjit4Zo1SejVcrF9DJitLfqSZUeNa4VScugXXM2TxDLkYpc",
  "key13": "3C78asjFnd742uLUb1fVnatAaR71822jFAivEkEUWA3qFbzhM91kAmJWH2FJKsU1UkWJCk6mSmBkenQYobbvSEXq",
  "key14": "5kfCzrkvpZiZoB4hu1RtEYuHjGq1MrJpXfAPXcmRb87JLWg3WtwxyewZnSTaCF3bV1M1CJATnw7FvrcjZwTbgUT4",
  "key15": "5a3xBqFjqXnHaCxyU9AABs7iWXzFHTvd5NgJAv3Rv7Zy4tsqG88DJDP8uCDuM7csbNxdxCNRt6Ayh5NDHtFs8iU7",
  "key16": "2AuRbZX3aTYhhQ9NT2Qt92uq9TnZd6vMnEcACXEZjPXCpaensw7JvMm9hrGXvg4d654E7rqTENsSuA8u6q7ovgEy",
  "key17": "4Sdn36RAeSH31R9B3zaeoN1FYJggt1gsTpNKH9fjj2RauXnsXHZHvUy8iW8VpeP87HKbYeVrSKsyPLtWaKihewCU",
  "key18": "5oprPLKXuSTDbSRXobeD5aw5CqgnJCLJs5n6x3bqAnwJCTVCBGraofniDoYDtQk7JxrFbWUdZnm1mC3HDmDXZxXR",
  "key19": "4hW3DxbWJshVSyHfQzPZtAmm44vLrwuqmh7qjToAKUyxm2H4gEdZqvvPFgaYTPxsAJgsEuetNXDu1WW3mohhp2RK",
  "key20": "4PyhxPZP1sMRZHyTNQjDHjM3YzB6xyoPkDzRPSfx6Ajm7cGDrXVrHVWUFDxE9tMDF6wnfdd1NETE6c2VL8x85i8T",
  "key21": "5n2AYb7gsVpxoHHnf1YzPzSGHaLfh7oY3a3LbPPJ64evU3jFqbtptcTkuMgDTpKmTrkJUEm1QXh6hpkvS9Hi2KJg",
  "key22": "2Pb5oJy7Knu5sNx41LEkxHZG1Pq2tyc1GfFXnUHVdUPk6GQ5EBKxtngciFBMnXYNhitmbrTn8hQseayasS8WgszE",
  "key23": "3pzfopGTtvTmVsGTMEeouSc2aSNSBdZWB3sN4tYq2U4pSSkKm4ARMbDA2fGkWcejP3YdXMoRx6SkxsRPyarHgjno",
  "key24": "3d2JgML2wfa1kutqs2ZPjfYzVqybNKGiXJG3sLW6dkSbjkqwzv3Z8XiwCfcQqtDSEHn2iQcbRx1MeXrEFXSNcrr5",
  "key25": "bfqtWFGQreJEzHc6kvvqTgtGW9H2WyeAwXNirDcwEJooGENW5Qaqah4kx4p1kpEQRvmsUDcpMh7irrfLad5rpUX",
  "key26": "4NcywSSHaPPiXGGzhn2xXvdPzQGoHbFsbKSdS55JZKTFT2N5W6pHy2fB91P7C2QahxjnLvnakSKN2MiwaoarFUrC",
  "key27": "5v6uyvoR13ru1hpgvpEz19mfgU2G9LZaJBq9u6d46VcNqSAZRvRAKC8EqjRK6HfiQQBhGH1ibiW2MbrXLxJ4gJzk",
  "key28": "36fAN8743H5wC6mLgUZtWQRFqbAjoFxo6egUDNmLf4dCBUNxRpCk8DXPv9sfobSzavjeqxMDUyEEg83rZPVnejF7",
  "key29": "4P7dGiVJtXyyhJvwTAfFPJbhb1qJBi43nqq3zEwLZbePFrSRMF8Hxgm1qmE95GfNHHn4TAEM7qswL2wNoHEdZAWR",
  "key30": "2mPqa9HwuhF5mvEeHQrBpEMeiVEhmKHXoSwrXRePwdP5WNGsonyiMnKfnGHTjHxwHNDp6NUnBaveSLDgiaUUnggP",
  "key31": "53ha3KCjc5P75cGPVQRNPnSLmKX542SUuToxQSTpK2EdhfL43fHpYFn9yeT2VhXVGZzBmKrUGn81dmg3Q7558qyE",
  "key32": "5eu2LJBfXehBzqTwWfRvjvAakcLhHaFj7Se156ruNJbHMoodLQne8GMXRxM9YeQJj2rGverswWQQaFPvoiUgwLYp",
  "key33": "5w2n2AWN79wCaZGqyYnR5Xs6LN9H4X1xP76bakEUhsZuyvoNRNjfH47TzM4h6N4ZRMXTZQHpZJwhqStWidMuGUKZ",
  "key34": "2r6MJAG6dGNqtkBPKFXrEyNZfdoD3yzaBMgGgW3C5LMBXhra97FroGJX62KXELP5EDdoYDahL8PnUM8AAqS6xCpm",
  "key35": "4FoaBo9etQ7S8nH6XHxsydLrbpw8ygdn9PbVUg61APkj1ydbdUGcJmmNS6iWqfYahv7S34nhUY2pSrXt3EpujiR4",
  "key36": "62LCKQkxyLN7v32Y2MTnZoWLoSur1ioegu25HXP8LCTDw5NWomudjzEoFGy1S62XSPAR9viShiHK9uWmnKzWGzTP",
  "key37": "3kX5dbyLkwRCuWuqfwboMkqRXp6W9cZire63CkL94epV3AYZuK5yrSkBnP8yK694TyHLaEo4Xrg9uZQKJYZmLy4S",
  "key38": "Cf3yZAKREt6QfdM688fE51QXpkic6w8SkW3FhmuDxZeAHbSK8fsQDqi6fT1QCHpVTVwUstykJK1Nq1dhLxLrHAA",
  "key39": "2RV7aoBdh8bejC349f7gPKVRAamUy7yNZy9LPw8o9NSwWGBHgY8DrfozC3izoRi27xKtMKUgJoKFhcBE7Xk4EJm9",
  "key40": "4y9KdgSZe3Et2yL6SM2h9e9xFPnXMdyfMNT5K44B4rybDoMcjTJNa74H2qHf63sARihkcoo9bAWD8a5cjEDDfs2X"
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
