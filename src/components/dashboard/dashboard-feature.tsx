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
    "61pvpwBPEKHWA8HkCCzhKDyWQ1mRFChmrQhcgcd5Wy5NMFQdpAVdQ8eovCncaLKQ9yBYNW9X3EwnLMwvPHeRiyza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2knKxf7ngZuhN6ZdLEDbAC5DbPSrAH6fp4Yx36Mgu894QBfoQcApt5oEif6wD5SoLSHwsqKa65PEqKMnxHvvmkGd",
  "key1": "66H9bhTrVGPhVd8LufLLguDZ9pGWrKQhn5r5DFUnrzXeoMKpuyb6Loe43ExiAtG75pq1Xv8s8J9QaDuD14Szkvz2",
  "key2": "KLMLEU2XHYGzTB9LSM4UPZZp6JTNmTHYkfYvXLGK3eAG15KYApnHH7mSRvN6U7v4biDU4ooBfxnWqJCGvN3KntD",
  "key3": "2sGaZemZBzJFLkHy65avD8fAbWVKniu74cE4bcSp7bDUAGiaSfh14pp5aeyVeu3FbL71UgMgdyANgP3Qwr632i44",
  "key4": "5nFACjX61Ad33ZeZwFt57FmTpwzfrsabHfsSfqTCTaqJYLt5QZke87DoaMNdVd6Lw5Yabj6brhmTjZbubZzyt3EK",
  "key5": "4zdU1wy2uoAzmH5hRmP5p7RpzhQhWC4A5hgmrz6zv7ecAf96fP2iz8uXHhoaf415GyzXw6ahDrDkZ8VwuDKojKTZ",
  "key6": "31txw6Nx14PfjfEZtFjmHqik8wPtEnBPSXi5vasGqK22hiuiNQkhW6TFMiw1xa4nfiNu99shsQWuKDVFsxRTijVC",
  "key7": "3HAvppfm5GyafkdC324so9Ui3Sidi8t6hSrrc7He2DsjvFKpckBeVeYkrJSfGzmSVHMzLWo9fPjME1MpWSaG7MqT",
  "key8": "5LYxHbgA2y1nuxbQK3hhhkErfXboEZDZCgLy3ZneuJkVPdn18uyirdEsZrtehhYKJmcF15q1t9q14Rp6hijViVpA",
  "key9": "3T9xSHYwHMMzh9bZcwjs5S7osZcdbs6BKPkFdZAzzQH8bJWpXK38aWeFQMmxyUsJdGuBJQ3Aw5XRkCNZ7jxktLNz",
  "key10": "4zXeRRFEMmGVHLiowBaLAj5idYd4Y7mJAeCPGxUUjNbxLy3jRwJsTYBcuew8s2BKDqT1gvKDRLs7j79DQag4DHAx",
  "key11": "4S1WXxnpXS1CZMfBSRh64muBbAMERQkttXif6W7T3n1gtb7o3Hm16LiT42G6uUNhe69t9vDjBfjkQ6o9K8rctojQ",
  "key12": "2pvCWEmNojeAp5xpU2AD4V9g5NRfDvuqvEWtWamsSULdN3nxVzoZtL7gdsbJq1thDR4Pvu44f2w56hCx3ow349cf",
  "key13": "533QWvnsRh4nCsjjqFrmFT6jQeeBoSvLEHEWU9unLwg5e4u3r7tJpS7UKbvZzc8wKqULk2cKvcMTaJEXQHKHMYp",
  "key14": "4wELx1KGAduoT5UAbtDkQzLCoZFjgSjM6dmYg4NmpwwaCgGBdjhLaYsimRWb4F1wex9XcGBH9rjKBNA9Rfvyf9je",
  "key15": "3kihP7aDp6g2Jy3btCfrN8G5pN7LcMagPhKbm6gq4G3b4YfMVsNYfeJs3nb2ZDHbQb3u33rsL2HCBDX6TaUa5Jyw",
  "key16": "3vouvrzLg9svKtUmLGFUTu3EuN9QkHRcEPBLTXm72NNfb4roDc7gNhwWXfDjkWWtz5tMor3QSrgqHQQA9pLxFxbe",
  "key17": "52LUdiPLniyxhPCUqsQP8SQBWyGk8p9SCBfY2HR5zdVhy2fEf8LyDSgN3Np3KgqBNwFkhEKSpmKdSpwysBcph2Xq",
  "key18": "dts3Xk8d1rSt9FyNgNB29JQyArRw3x2oGHiA7ZCDYqKFjyFV18vh8u38oAWehTSH4VXiHQ9ebg6bVmTx6YpakYP",
  "key19": "25jFw3nuC2hwKwymuzWoskZeP6n725DEDhufECxxPaNsukigxPLnhv9BWSvUw8XqBDQHMgLF9K8K6aB1fctT9S9f",
  "key20": "5zd7Pb4AJgQ8bLhCj9murqXgfm3zzfX7YFiCrKPZd4pbk5iyuUk73Vydsbn1FAUKm9U2t2aFpT9cWHsSYdAdGv3D",
  "key21": "3ecKGngnd44f3QhrdKDqACRTVJ3CoAgdbKGjqdi9KAjzr9qtkDn79pCgNdqXCsRJAX6VLEjn8NG7oQFPyoNUx49C",
  "key22": "47xw2GA2vXpFxN7GeU2oLJQ2hidchSRBEWfQdmbes5CLqYQ4VFMFZtqu2WQzvqywGcTRvVLFVB5dSETjEuDVtbTT",
  "key23": "3wuxck9TyvxEHjjjgg6AcCTVNXJUNa6x951ULLMgeNFCwk8JsSJXNKUBCe15c1S2qzp9yY17vRJiQqT9bRfVLLJp",
  "key24": "3Ytyq5LoqxDAdCxvudwiPFpdPDA1T1JiUQPBytP4kYajXCaCqmqArXGwCXgabaKdACUXMqSZHohRM2XLhyjzdbUV",
  "key25": "DG8VgKDAiQr5YPe3h7jfhKrfYX24QCPqLSdwNAKyKNQpoPooxrakuSr7BYFfeKdThLeTMdTku1h93ru9uEP4hpS",
  "key26": "1f3rTo4ch52LbQTbjrJ31rNS4AWncTW3KSSLevQYJUMzYM79T3x5WFcNFBx1Hh94VjS9wyP6zBTtwQnLEViiyr5",
  "key27": "56g6EvDSHrnZcS7R1QSFf2xuvsUpsNzd4LYAhLadS4BgzJyS9YbTVb9kFLdX9LBUayJghT8Ugu43LXJeyz5PJtbA",
  "key28": "m2BHpzSgZ33CM4BRGQ711E43hswJ4iD9ajpdLez8nePUkesweD8ASPyyaPBEsGJVx3ePMYq4CGtP3CW6W7S7j6E",
  "key29": "3nLoQ5yRQPvVX2ooRh4PH9o3L3716vg9vJF5FMgx7gieBxcQ11RQ4fVjEb3Y8LsxujArFWcvrVKC3ogtSa8Bq4vH",
  "key30": "3NYRKaXhHNKhAceKdBVjpyh1SbUn9C2CUAJSGWEs6NUPQYbNZhXQkbthFMM6Z6X97EgRZnZayn64YzmFrx2EkcWq",
  "key31": "5ke269dkYHaMH4DjC2zh1ymxsXQusZCx96unDQrTaErPkgYL4eBVp4mDJxDLKnxVa6UAKQBqzXH31YBGNoCBckoB",
  "key32": "2mwVC6Czw9Lm5VhsHFVcJv3TY8rUmDV3YJWyeLyE2B4jAp1sMypajMsLmhfaGQbz3NmqGfhqCwh1Ea6nRewmpqBZ",
  "key33": "29h8G9UXyWEucZTbmn1P52XffoqTnbFxEoBd81dEQ5Uizz1xJj2GhM4NV3eKAn27XdD2Q1gdvHtCLiAwDdUYtjTh",
  "key34": "2BZZwrTjJU1CE9FcqV76ymnaa9yncg2pR8LrYGKyiyy12vk7iB6QuXnMKPnrmuumMBUkhQ1r2vmH6hvh8cHkKkU"
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
