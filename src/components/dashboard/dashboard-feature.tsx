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
    "2QEsCgU3ArjuwfCoriPdT12TXHbjgCAVGVDTNjhQLwYezwwM6iwryr9bz5GAAx1Ly4oSGwrZoNsyyrb7HjZ31La"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLHjS6AesKmo6kXdc9yxQFJicjevtsKKcKq3ZncfjgzcU8uJRzRFL41xXjLR8mx4Qn5MMPymqRV6hHN3JJ3oVG",
  "key1": "4akCkauyu55GGinGSK7b4ppgcb12fkKmNCjFp7jpiFqLJqtL7khWGK3y3uoGYDaw6DcfJDJpTvazAPfVsCjLbMhm",
  "key2": "41JwKGxPSWVuV8KQeu4ep2YBCgpsfgxsT8VZHN6XZ5FfT5kcJGFswwdt3bXtympeG8PaKpTeRBDUvwAFwGCXXmnx",
  "key3": "H12M8rk4W63KD6iExnp8Jwg4NibKdevfVLxX7pkq8wDrzmmmUY9C8xabwcT1uTck6CXmZKYve73EhrU6y8MC8Gj",
  "key4": "5rBrGriqnNAxHikUcEZY93c5HofjuxQWwdiG9JvXJc1s6UgXK6MXXBnJeA5QtzsUjD1RqsL9aDG2hx1B5CnZEHaP",
  "key5": "3CWbusHTVQNDKNFTeR2iFy7VUP5d7mBAWRecoUeZqNeksRhyxv6DfB3KzBQpxwY37ZTGMb6ynqxUvwRYcV514RSH",
  "key6": "5Ey2q7Mgs2JndK739HYpnpNKViwkZaK14Euf3gFUhBZrv3iFS16KSo25MN6QNV3bcmWSMUYcCPNeEzFwLo2fyp6W",
  "key7": "5PxSatrG8SvkozXRMx9cy5yuR1mtQ176fWtkWB9bmnujU2qP64zwQoYDL9uSRYVmod9CUd9AwA8eGB2wEP7iCeAT",
  "key8": "4vwv1WuyzteiEAoB255QYbTDAMemzRrsFb495sepzr2K8V1LrePYVDGK1dxuuwAbHVXMN77n73zhjtbeBeXf4Q92",
  "key9": "2hdGh79Ny6xSAfNy7LbuPXtt4PTfynUCwpNWtD2aEZz1oTm5WqeYXp97ThcZKfqju5wG24HGQ7AgBeLheCKXMXUR",
  "key10": "2DX1WYfidD3pdm1Ddf53zbNuawY3Zy9S3hp5SB1Ea9eMp7E6EaZ8R4Yoa5qTqcdFKRMKPsmPetqCTBCPm6g1h8y2",
  "key11": "3kvZhL1k5cAFWD8r4ZQasApjo3N5unrLb3FG51ogVEJwmR8ZSUznDmDyn46AoZH3LfzwZA6kU47E8Uj3n38p8GHB",
  "key12": "4kTcFmU5HwvA33EF7k3gt2rzRs3NRTxWMrPmAnLyauEEmhCd33aHA8jF1YoGw5DgXJbKcJMsMvoUHTPss6nEvunH",
  "key13": "4azQj1hh1Qu8PxPNdg68sTzNa6piqmYvMRUGaCgmjrsizTLUWi5zMuHaiw3FuNVdbd2ipYw5PvgjC38zTAKEZsUs",
  "key14": "4wbHLYhe9xhJrpf5NigaFdS8nKbyq9pXzyznnbRE2onyGakHFungxFTb2mU2ufgyTYwG3eENab5ECFDSqqyipZih",
  "key15": "5A4HCjFZHhRBLmHWpWDxdw7dFT5J3h7EKToRqYPSG6XvDVkN4pCd7QpNA2NU9Y4GJuAzQRmxCaQE6Cu4Jd4EVYf2",
  "key16": "uqUV6yENJwMVwGz7DuPQBxKx9XUPV7n5qkpia9YGCE2JvmTQ9mjcFuDtcFhVBS7MN1tuaUrpAjuMB1V5znzyhBn",
  "key17": "UzYXYqbTHmxVWAaDD4tXkVe1tBd92k87YGHdh7DULEGVVXQs7KyximPHoMMrCL6zTAawp9E1SioM3V8p3UMS6vR",
  "key18": "2As27qQiq3P99BbbjSbaqfbaS4fJMxF6PazBe2NWgeh6pWveSAD9oxqs11HmSTkiBQegxireMTxgG83G8FhDUyk6",
  "key19": "4JTVdUsGGZLCmBXy7FHPqs8b8kLFBRWBHGTa8LL9aNqauTouKh5KRVD7M6YXje2Cmv1oxTpCPfzjdmSLK2sHgN24",
  "key20": "22YcKhcLKa5gWSsypeM1qkk4Q9sMCeKrewofuYxRJhyezExzxCZT2cGyWMRakYYGgYC6r2LudCW2Byq75mUwvdMW",
  "key21": "XVGGFP5DXbSiARqJqEXEYTtkA2iGjqbrM9tPiXCfinPJCbcoUJnMNc7tLjKuALwLed6Ao8P4sEwcwdg88W1adpy",
  "key22": "639yKYmuD2oCXV8BfuJhq45WuLt13G9eXnpnimoDFrp7juP2Cuw27zQ1yBizweeSqZ5VxiBxU8akxU3nkdgnfXdN",
  "key23": "5PhX1JoGPEKZHvH9DH3yVwEK8QeeJpameMmAthwbptn4hukgXWuZcCBPUGuu4WkfsmbXprdzRae5QLFAqBYbCLhm",
  "key24": "3D7ixVgiBTeTiudqGMW3t7e18GC89MC4KraYA1SU6LgKK2ekMu8umobT7wmqahDpXD5mskagY4y8P5yjynNULvGY",
  "key25": "2qG5m1EpqJ6ASC7tMY8LyLeyqZHUDXxhau8xxZzSpKuqc1ivNrjWdjQigHTw3urme7PNcUkgntxCrvacRiRp3AvM",
  "key26": "5eHVQ7TqgeahpgFH2FnJVG4KjjmjSgsY5i4FRTjvHxJVvwPPidVqmJKat2pjFauCVd3bJtQS7HCUDDN6c2FLYffn",
  "key27": "3EEzgJfL3rjm7Tc6simsFq4w72FSe7HhBtskLTmXR2QtvmS9FWNwGGnjhxH9oNSKo5dWz3ZP6m5vUtuwrVeGQS79",
  "key28": "5c9zWorVZXC39mJGcQ2MggGGXpNgeCXD6CrYztvp11WC6ojNLxNupC7mhRJL7ULJY5f56VPaN96bwqgoWNweaf8T",
  "key29": "RpATi5nNWiTbuKnRDocpBagmwrzuYidmJirxA97H7HQ8f1ciEUFW8mRepjbKn1NmepHqjwDu7n8i5fApkvHjbV8",
  "key30": "3s6LggEkGxzezQdWvSPDMHRiudoiuFWadoQcPo6eU28E4mEqkF6q4u53fbtEenZfdGEykzbVCHkwRh2uwsvkfrVG",
  "key31": "4Xt6yfT85PBeX4k83FugGPNcBeRLbBvkLZPvYc8tvFU3MAN3ZVenxPrMHbA3am5KW6pxkwS4ziCJpp4dHoeSPQFe",
  "key32": "5Mz7W1u14D9jfS2ZyszTGE4ZuJz9V2JnX87d9QLPMt868MoSzYCtxTwDwwstV8dcPLi2KQxXQDxWv38Xzk1KwpCD",
  "key33": "4auKr5LjC3Sq45o84G5khPvaG6VzF1NipN4sRggwMXmNfGjDb6oMMQosUFemhGVFR8DgaA2Mr68PyvbtLD7ShuoH"
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
