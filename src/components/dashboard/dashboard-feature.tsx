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
    "4XU6SZX5YhLJ1GaAqduAgTgx86aQueHVP9nZJfvhaJqaL2zmjXsMgatQrWnvywoLRs59VsxUZRXjkgQ15jimZQDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R2PJ5tC7s4GUJ5T8nBiP3X3eNAhM58JSG8WjfmGamj683TMbGPYrwb6L9tXJR3z3BfbG4wb2wU2WZV9yH5177x7",
  "key1": "ZRh4m1UTzbZCeJ9PgMVRKhUNbyxmijZwbg4aPJbcJw6EZjCAHoSdDmqKuzh59KZUudW7ni1AR9qMNgCNRqgPJ97",
  "key2": "2tEnLQJCp5J3jWZVmaQCnr3z1FTyLTdzzBt5F8xKfCmyXRhC9PbAmM4e5K1YgK1LouYxs3poRKP52szb1cpte8nV",
  "key3": "3MGBh1HiqJuHtdHGSUeBRnJkDZNSoR71Rfq5cRynb8zKfErc7MAQRCStQ58CAjAEVtUFKkpSRcf3G1x8eUvxLQan",
  "key4": "Vhi3NCvfnF1tAzW7cBd1vh1VMp2Ex2WsAX3e719on4hSepyEWzyZ4PkzacD1g3GnbDzCfdR3RaKyuov1h8Qw6V8",
  "key5": "4SL6EGrLS1yz2gRizHrB1KgKTTayMpVDRAkhKt2F8aLHegpexht1gebGQbovpkBbWE9xSv4JF752e2V5VDoTMux8",
  "key6": "J9wv7asRSzsfE7jRuMqLts3h8y8fbCVPrXNM4MnAWh3JkayYVFxceELm1QrShq8GynL9p6Z7kh68ZjfHxjYAYBb",
  "key7": "4DLcogioT4zjuPdv2jBi6mw5B4hH4sS2ThLqwHhpgRJpvcDKLRPc6BYoVBaJn6MtHwnc1f2iTjbpAozvkwoFLQ49",
  "key8": "2Q25hVNMdSDmcshdejnwfiJzhjVjGeDsisu7pk8Hc7GpGAC8AuQF5ztJLTPwjJoq1H6Xn3kcMQmcVZzitFBySXQW",
  "key9": "2Ajo7Jk2rYV5j3XmjUq9m2aCUEPvxVg7t1cjNqMcJAjZmpi2piiQD6iLK2Nw93ZayXoVzUuwpME6k89n417PYjRy",
  "key10": "57JfSUg9RwP1HHUB62MPxC1XWHqd7sdmgycMM363VZ3FynLzN9BYTMgZHB1KAgpgQxhDffRdTxcXwDnxSJBQ6Qtq",
  "key11": "2hcJep8HYdbgGFQccMaMqzVQRKBNY6CHvNcABAT1cfCE63QecS8qDTaPS1YHb7TPHe1J1ttnyzMb41aHwnVTUFVY",
  "key12": "3xipCJ64465cY8A1ecH73T9mk5ufHUkzvEPRf1VeeFm6XvWHVB8kQovvbdLfF2Pagh1Qwv7Ak5z3oYV41w526EDB",
  "key13": "48ESi4iZVeVHMgrV2hMspGQgtVZwLqk95tJWCnC2es4SPds6y44Tk4Hy5dJgY89gTjbhy12Mr51gsqjzW7jGbEkK",
  "key14": "3tYME5YG4ySKnE6sej9oSDZ3Ew3nUat7o3qZWb74FXXzkHBknGSXDCmZye9Jk8obuXdCBLgkwuGrQr9yseU2Zoiv",
  "key15": "5GmNv4uqwxZRhbtaoWjBRvvDaqP9jTDPYjdoEAZNQ2abEEJ2rugCYAnpFnLe4gdmiHqTcm4LCbfNQdFfYDxJwMPG",
  "key16": "28B9BTiLmUpNLHYxUhtTC9FvErxH9vij2J1SpDPJGzw6no58jk49riVa7i6duggnEbk8VEY2DcdBgQHbS6YXQmiY",
  "key17": "vKq4RNxKt47DaHVaLzNvDnK7kPLTvHFqa6HM3LMd2ax4EEFX3Z7EEZNRGz7dBbgTn5kvxs86qkDoW9HTXiNfBfo",
  "key18": "2GpZP56HFHr8X3nc9xyCJQdiufQfxF5J1GYyYtbNR7uh9LwYPAVcrjQzs6sEFL6y1vgdV8Vj7mQdC5CRSVApY2vC",
  "key19": "5wVuFmQG5w1HEyFbQqgHgCJEbPMh1k9EBk9GTkk7Q91GNu3kBkZ83VyUo2m18k761wXwtMgkFjEEbRstSMTUQdGm",
  "key20": "5HAf53xe3UkFC3GKqtawRUtw5sKBCaeHZLNvgfCC75TVgmWuS3ciSakhhS5TA6G7xDN7TZWv3aFg8q6ruEPUFceN",
  "key21": "59yrTtzVHkrJBj5MngV83oFJWEKvUgDR7iDYXqQD1YNVGLT5zEHwnmNNcJtnKbREi4KUFG4cyBWyYPPQsigt7MWT",
  "key22": "29NAwpgeEYwHiCUYBr1quoo4nYZ9mars2TbrNPiqgojxxaHX7G89Dd57nwmEMqcqHin3uvqdafdWgd2nuNsDsJmG",
  "key23": "3dT9iDX69i4XZ9G8uJQXCBqiTMf8BLCLSZwhoBa9jTSv2LAXcRMcvU6cp11yFJAB23zS5gPio9JuKVgU6tyeTFzr",
  "key24": "5Ni3KG11qJ1bb5V9v8NehqCrunpfCErvMqtY9UWYrykLZXaEmUwmaz3dku3gYFc7bMZCVqHTc7TnwRuFvuUZk51w",
  "key25": "2returSSCwY1s6cmpLqmmTZ8cMs7PovLjx5JHMaKUJCAVPjdZYXgCiJBAHMeB55YES6rqrFPugeht8rDH5YdXKu1",
  "key26": "4jzQjon6xQxFgdMMFVZZsacP4SXd2wPXNpkRMetMSZ7h1tnzp3ChAAWRkmBee9tf1Thsb6uRKAzznv2WFvNbmnyz",
  "key27": "4JPpDuDZAYrccCYjCzQFmH2h5WpzDTZLsxFJMGLxTYo3Ctz3c7haPcm3qd2o5gUA94cwiRiDnxKkTgDzSu3Yh7iq",
  "key28": "5TVSHmhgdtuKVJ6AfzKDQ5FLBWJCn7QHUtpgdJ3KXsnUTRCfAyey3qDJaNhTHvQxegcSqJsQv8Uq64Xzki2EhjBo",
  "key29": "5YP9Lygume9WDU1DB9sReVY4m8WcAQY2mfebqeEWVoiWwHCe7E42xskpCXsoKTPRcUkxHhCFWHhsbH871P8pVRfv",
  "key30": "5waGYtgGQBSe5r11tZQgcwG4h46xgSYsRV9cVdXSXmm5ZdX4DshF5YUsmxq8XsbU4qDHaKQoPEzkidif3C2YDb42",
  "key31": "2Afh5kcioKNzWjafz53QNLoujSiJArAXjRz6Wk5c6P81WswvvaCzVVVVPmE7btKg48eWGY8sHuuuuxoVseSYkaoV",
  "key32": "3HQMvnQ7vkZpAs5eDxRBmwMwcGeSqxq6yLb1LZRJBpaoVRWPbuSDcBmd7wHa25K3SwCnxgp8hafpkRSr7cy667uG",
  "key33": "2XJnDaGBjvuzpVXnn19fWDgAtmkNjzxcy8neF6SxHn3EGayuYxqiP1VNmy1paQdsdazRXYkxteh55fqtTbZ5RpdE",
  "key34": "3Y6p5ZXzjUvQJYzYXaUQz3xZ5US9e5KpzzrXZ4iLqLV5hFcpDNcnHujZbG7bueu6iVHbWECAFjQMk2gXAoXPiuWt",
  "key35": "PKERmUK6rTbceCkxCkx9fFfMLBpdP1wTTEKTvQhEgVS5o6yM9S9EiAcx1P32uecg1h8ivzBdDRJT54qznVYfGY6",
  "key36": "dbJixYeeu7eeMnkGrSAohBDbygbNd9z4DL8tmC7qnpMTgJK56vEx3FWYeg5zzE1AaXtLhBEaCnPzfD12uLp9kXU",
  "key37": "3VHCEqFUMtL1A8YHjAa9ajzeycoThMK5otDtQ633G64ECMY8f8LrgAdZPmu5H8jkWvdPYXGMBiB9KC2Wp4Fvq1WG"
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
