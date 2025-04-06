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
    "5xKduEDxFRTBHfQzR91bXFP2Es7zSwdqmQzGPmqV4oH3BgX9yR6uR9yP4b2tWHid6GdLwdUPzcRG3ffik5Ghz8S7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzGFy9J28vZbmhtrNbRrB6EQhCSsLmCJfvhp3wPs3VV1vy76VJmVuLcQej9FcqDqNG5Pj56yRRu7sApzMu5qMxz",
  "key1": "TKsshWG2o425UsYjGQweEQEvRYk5WGUrLXj7nGEp1SPLN6b6iWJSoHAr5MahvPYA6bXf6PFA4RpnG5R26Dr8SdD",
  "key2": "3e8a5jNk1BxzMNFNroGaUqNLy2vUqTN28fCzGkhhscmqM7WNsSv5Au5LEn6sA4BXujJaGZNpMsSzijF6L8t1CsSw",
  "key3": "2uhSwtHcDmVudBYqpgspwTeZMDWr3UrmJpG2FpbNq7QXfzNhb428VCTa2AR4TNXNUEE9zxYPfUPKFwSLfDE6s3J5",
  "key4": "37zqBzKAf9iDZWP7cTUiuDWzAmqFicoCEAAfZUSHmVxexvRUkpLNmewk2wSxybWxktYXLUpgjztEHkZJcJn18PwT",
  "key5": "2CwGYBC2k14zAcF7ReZYzc4KcpuEpCvr2hPiddqDUuqFbYiMt4H5dnG1VT2FwF4CF9NS1gdfKHSAnVouimrmPu47",
  "key6": "5C2joVYKiMAQ1NXZPeDRZJXxUYamg5T46qhbGaA1X1SE7CXx1oMFXs1m7UsLG6Ny4eLyK9eh6Cgo3BxSLKQSCe7J",
  "key7": "BCW2jGsKLWUPtxJXHXrAHJJiZjfyYHT4h91g1CN5bzc4uWY2i67B8D5EsVG3pGdRoCSc61haYs58Z13byzbTKdo",
  "key8": "3a23q6nyVT8cyHPYY3aAbg2JFDrGbuLsg3CWLSHoFv3RyXBzSoafcMKmjagk6XqVL9NW5tdD256vWH39f8Mtk9kp",
  "key9": "2cirCynoQMvNQJUiT7hdix7U4zMoBKs7Sqj8Upu56oFEoZSGofDa12aK23ap3VtGgAHLSFLNbx5BNfC31YzCaQnZ",
  "key10": "4N6KknCiJdgVg6sRcN6x367bL8GpN95Rjmc7cAKsu8TTsK1MopB52vXzGeRYBUQRdCTN9LJoPmAYcSvpMbnBTuHS",
  "key11": "5A4hC4mUSGzZyFg6ZEpzfaj2NGmrGTt6QhD5YfSY2YExfZvQcZrRy6mNFmaMnWvXmwRsttmcaB8YxFgdyjiArx9N",
  "key12": "2YjVovYCNgZ41W3UjBWLPMGbXduUtXmJKL6PRthaGDLpVjLAsSCJNmtHiTSPXKiuQnQKQpsxixC6FVzwHj7UGdKk",
  "key13": "4XHtNxqHD1usHeyPxw4uts5ktNYzUs2UNNKStEBesL9vuw2B1tDWu7Q3CNu6oWCwHGfcWhJWoT5nqoCtDWXfzFQE",
  "key14": "3Ft9Z27knqEY4BoJjAVyR6Km7ExoFzpS6YYxGxgmxqzfMpPLs2q6Fve1dTMDGa7zTLzN8ThixcjPZZZUyVrFiPP1",
  "key15": "wLWKQZM1RzNYsgWCU92YhBQFnx9L9u6791eN8MMUYiecUMhjiAQfmjMYKjgbpVc6HcpbpfR2D7KoJGGs8pNA5GD",
  "key16": "5VurdRyD2hpS9cQ3p6WAfmKkoHvw3fzugtx6DigYA7kZRUQ5n88U8v1bXNb2UCLv6LE4Hcy31RwSZn6Fnowb5bzq",
  "key17": "3J7zgBwdgHaEdPb4U1oyGSAxQqN5zxBZyHtSrNmrocri8caczisbpf7WSEFsc1kMjjSBQd9vJTEp3wntHP3pD8qP",
  "key18": "2sw77maVQf4eJ5wHX8CTC1WQyMzcWySk4zgappQj18wNYsrJrJrj1BC7aNqSmo89De9hhBaKSZ4pzMLp6RQ3RBs4",
  "key19": "M4mNh4PMqLnB6amxYiwU5zMshZiYTTQebWz5GVWQVyY3d4bobeom6DU2b8NwMXjRKAhjiwkzGZQG6Ntg55KpQFE",
  "key20": "4JPn2xsRdAYVWS1d9TK1zutMpMMPbGwKhKXTzTs8e7AzdQJGxSKMM2695hdFoKxx7rpS2GRx2E2NecEomAyJ2VSB",
  "key21": "3ULzkRPitCBaWAooSKtwx4CYj469pmVfPPJNxsCKqucQy2GjqKgFoDeBv3ZAneSzkHMFgppYFh9GBhBW2EHo4MYh",
  "key22": "5mqCh8oND2ZXCbadMqCnsEeQBJFaV66NpdpQCu8bEXSF77nHm9EuMZjk5dFrX4W2EBUUgZ1U74Wzco2EDrQ18rTX",
  "key23": "2K4DExCTLqZza6SHVVxA71d5PmUmYXXe6siBEMLga3o5jHVf9SLo3pn7m173DP5PbSVXa9vuh1XHrDaB1eb1JEwk",
  "key24": "5DkLNFKYzHpYWT4GWSooe2qBUvS9kjDirNdJ5RnowU1GD8NcanYhJxBYsiUW3yWtW69g1d9f9ZQaoZJqGhvfA4ha",
  "key25": "eFFk65tfbZD5VGK45NUaTV55PqD1BU7hnEcUzA61zkyKo7s1QGP5prMbzyzXfYsYNNHuvVZrZsyibsZEdgx8NrX",
  "key26": "3yiYoTFKbFsYJ2QJ7cVCvNMmzNjcEqoo5Ka3sp5yofREZKuyMu91P1PoZPHp1gRjEriACHgYAuki5b5P5qfWnu6K",
  "key27": "2PiHMMeWEMDex7FLesWmVEjgUj3EJePVYJBFoT3o7qf4d5ZjwST7YGtLb9BVaiyuQS2CyBiMYoUJ34qf6si9sN9m",
  "key28": "5HnhTJTn8ruhaBRRYoxc6ufy2g7aMsVBhgFfZifrkPhuZ3DfqYeYWc3H2op2KNUVA9JzvEdCHYnZ6cfehzpGvUmt",
  "key29": "4y5CSYNUpz58KNxvVg62Y8fSWck8gF4qAENvaNXEwqmqNfhEUJyjQnvS84aMwav9DbrSzL7kEZZGTQ5MVzubo5km",
  "key30": "5Eu4v6b7zmfBPhRAUFZ81DyKc7WSKMCc6EXaK41veM9rwjJqBMvxXE4NhMKoVWyNmnWGf7zbekLARPR22A67EbX1",
  "key31": "3k5Wu2SbLh4sXUpDAyQric4xVP6kSW6fcSrg2a9fySE5r92ePSXne43kNPWjBhotCcCW2Y1wcaZgFoyQj36CeUph",
  "key32": "4qh6pgF1UjfDivFpaE2qWh2DLwd3Z97Hyan1Z1hQpWbV4892VtNemsruc7xoBc2Ann6Wh3vyUBQ2PVsSWJUSg646",
  "key33": "2AKGsUYsr99KTa4g96qEAp27CYcKKbbXnae5gf6BoAMMkvoFpRy78RwiEwPF8XovgAGdXZYctVU9x2f25qEFWzEB",
  "key34": "5uNcSMfHCCXt8ZvFGJnvSwkJ5onVUXZS9RGYSyatbGetorFBV15zM2YVTQK76SM4CY96HfjX9jkf66r6CPnmNnK7",
  "key35": "4TNgyvUu2keKtxet2UvrJJ1wv922jhy6fepWKd3eK4v3UZpEWQkcuEUq9cigapA8vZvVV44jc5bHnRUMFamXfRrN",
  "key36": "2nLNmKh5Sj22DSdcQYzMUWkbHXqgq6c4Bk2ZdoLCif4huB5QGbHy2WpWtRnWHcGb4Efztd3GGhVg3yRe2oEo5xUh"
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
