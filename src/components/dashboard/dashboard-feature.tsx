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
    "2GGGmYN8LTQWiL6tPVcSNzjrnJdEFvrVu4CUT57PvzWeWGKJ77o7DvoZCLyiZ8qdNayVtpzJZEY5EWw4Grqn1D1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCwryYjYDPHWU4tXAtDMmbnr5MMFzSGZDdPHTfkwa2egq1tTkkWui3rqeAMknLmFdM6AYoSciaBFwxioZXyjd7G",
  "key1": "4ZGWKeorFm4mo1Y6ir9sAqSjSqjvXvv3J5rrsLcTGhySKi95G9ukHyew24xEjP66iWJ7Po8STKzK8CMuJ8NiL3CP",
  "key2": "5cUqDFag1zT9nUa4utyLvBz6yiG7WTMiuJyC62GgnrQZWpe7EhJHQ7eYwV5PYdPozwv5Qc6fnFaboX6SJZ37nhof",
  "key3": "5ceVb4VbwRNmX3d57vEiecrYKqZgJwME638ESFJ4VYXuTSVabh9zcDX9Akc1eDYkYZoEe4FzcrsdMt7L3P8duohE",
  "key4": "31RWGiAyi6aqBeDjPpMvMtzth2u76pPw2CFugTUpvAeVkXKyedfPWrnANa6cF552AdtyVsfq77qdcJr9rJofYwJC",
  "key5": "5YvHxaxiE6NTg4Rf4Rerj52jQCwPDtXPVA7GdSwzCaBv5EnsVdCc6sRbA9TZm73oADsNNw5MnGf766nirsrmfp5H",
  "key6": "5v7XN1nF3nuTHHKB6WvweE4qqnwQNy5UqDH1reozUkfMG7ZZSB4fwPgth86TwvPT6ZCE25RVBoFDR7kBFeyC1s6a",
  "key7": "UH73WnQ4cCBe9zRUtBWaH61XoAwuMxDsYqaFtX2qwkjv7x4xue1UiiGuqffKEz1HUH4N8uz9mvpMuKrhBdkisCr",
  "key8": "2i9YNbEbL82WkeYMuU4ZD6cJYJ8Lot6eJQkqKSrvFNW3p1VQEt3kG1k3US8ybqWb1Cp6fyxxDUsy7EV8F3btiWhr",
  "key9": "3AHgmPCZA9Ac38wj2XFAFvWCrLqHTs12wdsf7C4JxCRuP4sFdgzEPQZ7o2ixqyApatsbAjvQksgVK8mKEQCSpZbP",
  "key10": "vYL13Zrb7Y7ThvgU7XNRGoxbkQs2mQvQa3ARgJTcPEWuZRWimQJuddGFFHa58BG1sbMc39b8zYSEiUC3WCzjUWp",
  "key11": "5eV3HHNX9kgqmHJyi3e8Z3E3a327nYWyNNDh3arF6zc4WXFVq2RkFyinExjYsGLMMsRNwA4bgTCsVBEHF22v26sj",
  "key12": "3KGbAjwEvTRkxWY4xQZgGWKgboWjcQas5Skpe93jUAvLZkAbobenKEYybbVyfGs5cjQr7Kp8GJHksHq1f9EVv48k",
  "key13": "2PtKwoncTrPN2B4Af75EwTCgXHiDAmLkYLdtRXdhxrQTfQvi53VLRwSgayoZSPxABmn3EopKdpiQ4eKNVUdgeTCN",
  "key14": "2AT2uRARnswJj6vtuV1FMQG6ZorM4jY1X6EavM9oPLrRWyRitEfjkG4BcNVKaXjyL8SczV9kaeJwiNSgnNbZxDrY",
  "key15": "4Saqyv8RQqBNWPG7V6GbGXqM8jNEGX5aa8SdwUEVz2jx5VNgYqD3BcBRU7MYcSXkYM2dgGYATj2C7AXveRtXrLny",
  "key16": "G6FAihUJZdQL8DwV9EMoVJhFw5Khg9w7iFCAiKtKFoFvt7Upe9jkN1KrjTXtWaMP8HCPT2cyMCY8xWy6F5ag8ta",
  "key17": "4QtzrZjRpYBp6YQ9v9zmKMKcjru37QakPNPhScDh8BSHmaBe7oV855Ju4RZtfBoG8jebasbgSPp1qxzigrYZtBG",
  "key18": "DE7HpJscPibaX729cgPM15defVXJDdE8kQcC7o5TRFBA7AZ2a8RkpScoRRRcjF98Rpge5ZKKu7wBSHdEKcAkBB5",
  "key19": "5WZQ4tRaf6ajawLWTBa4g6jjWyFeoS8AmUkEzErzkxcEWnjerAhdW4KAQMURdXCKM6msPP2BfZAjRk8CCrS7mV5X",
  "key20": "3vBTc7wjAKL9b2tFPyiS6N4f46NEXsPqRrvGba4HqVK2Vncwpu7ZCz9hKUi2L1C8eqrrUaUWhdhCAKcq1gAgssuS",
  "key21": "5M3SX4Qsb8SX764rtSiEZL4egopJ2A51LaBXgWUvcinM9NHdQr2e5QYHgo3pwSWsFqBeztxQQJJguF7o4wsYCXR5",
  "key22": "45Wsa4ckEjxDCjmCtwHR5HqfL93TdpCzV3nCsjrfcTX2YoyDGHxPcJa4xWPuBFSkVqWumvJtWzCjg8UezfsbpNHU",
  "key23": "2R3jqzkW6i27WxqVpbVJzPZwLfviJJid4oBQE3RkJ8Q3bHiNwnyih5WRXkMsVEYCFTZvsbRqXodJatq3nfsrBtmh",
  "key24": "sYBJnzWF2e2oKHb9JJ2nEHohgiqrwybnFFPAVEtyUMeZMi9By9BPC2gMH69BXsopUseRPjudk8sxhaSwfHjkq2e",
  "key25": "5zRp5oUZxnyRyECWeCWuqPA2iiKNht8bqoEuVeZrD7RggSp3r5WFjidpQGLPV3VmgH4QCSswScKLYhBhUYuE9dQ5",
  "key26": "3DFZ76p9GVyfgLtJgnGwrK1VPUzzGpr4WUke3DA6xPuDMKbSAZQdpxAM4Km2m8BvJ3EgNSNFxdApQJNqcMuCovqE",
  "key27": "UWt1WznRWz3RY1f923tho7NUCxJrAHs7ZwydAjbhwB6reoq3fcNKANsE4EeBgfCodLvDSiqqTf7YKH6oUaaLgBt",
  "key28": "3Ym4wTNedqGd4q94o1LwfFMCDiqkrk628wjHLaYw4Vbn873592piJKqTmoZ3qD4vuH7XC2DKg1oo8652oCihFUnH",
  "key29": "2UjLWzwJ1oRcWm9ndtT9PP1WmDaWjHvLn9LJfoEyeADesu6ygRRjmzDWXjcSobo8CxFoGtnvJoyAc619TG5JBm95",
  "key30": "3AimJKZYmcp3RDRqkuQKLfFVVdkfnRoU9Uzs8hR3GqKwVJU9GkT4WXjhCQdWNvVQKr41Cd6Ka38nYezyW26GicuD",
  "key31": "2ji9YoBiR1dW6NdpyCRQHAFPa1JK3fTXYNiPWoAM416KNV4trx1q7fcPgcoKDRrLfJCebZG4P6TXgbUviNdoxPct",
  "key32": "3cvFhqgNPJxEfqJ3Sfen2ScW24AmfdvUA8dvED8Kq5EnhSJewnfbDCbwMtgd3VGtwVt9dhfxoJHn2rK1RQmTwgnJ",
  "key33": "2FaF3G7WRMpxTmjd6J4nRXSDgSLQeR98F1E1rWwPf2RUVEJoDoXRP1zkdkHqcYPifpRf4BwqMMbBGyrWMRNsPzHJ",
  "key34": "3mk4HcjV5iHfJuGYZ6hWebpkMPNYnZrZUoof6JppT7FUm7d1SqKZWu99juV7ybPshWNWW1Bf4pgYRupRdrqcCv3U",
  "key35": "3xqGVKDGcGLFWnJhG5asM4sLeZwTfeCxffchazWU6DAZhbspCdSBpvH93CDVVBRdMc1DxugpCtSeJ1CXWGgmhvMT",
  "key36": "1zrVaEZM8uBGy57924mTyXS2gfXLfHNMtaqQspevkrphuqYSokUKGtX9c7BGSMM33tR2QMYB4M6KjsidZeupm2B",
  "key37": "4gWMMDR3KiaPwJ4Ua43hJvtiJtVfRoqX86VQHYEV6zW7PVevZubsxmX5JvF9PkQSch3ySMDMYBitNqFpvU5fPFUy",
  "key38": "5ZYf831BLcAAsdjUu2MBZjnJTWNmfd5BjGUTJz7cPceZuGdXZSQoGiatLFjFmGfjL9LgA4qQKXBU4kwFuPnesVDk",
  "key39": "2D9oiHoC2qv46t1biY16ojKAmKEFoZSZed9NMJbF55AG7S1NMR1hoDknHSTuEoHoLREnFNdGrendBWVfSdmSMrRS",
  "key40": "3wvwCFQuBKQZymmDeA6kdRCpym38SHALFBub9sN68WAzdwz83MM8AS5TPut3sEFqQh9kmKGdyLPaiD32rH1PkC3",
  "key41": "4gFoSUWbiAshVG5KuCgRJpzan3hmyU1Q7YHmr1Cr8xB2ny4HkDv8D7jXrxL8XdF49EVgRquJaBoSwinodDwNzbVu",
  "key42": "4TbgGvLyDZUWYwKsJmVqrnzWQUnFf2rz75CPo2G7C576Z9Q3RTpYurBgmULpD64kDNikQuTy58nYY675qrZ7FFyf",
  "key43": "D5kxi244RdBxGY9qNUe6E5AJurkFuHEZEqf2XbgLWd9SNvz3xZGRvebv2yyX6feR5NbT4casshtdRvYWhQN1pZz",
  "key44": "3takDGV7G6HnM9KDvFKf3WGnGFdcjRG8VgPyW6AtK2oa2M6ubbrpHtjNQRUNaFuLySY38BXdidGDicqg73Kq38mC",
  "key45": "43DJvmMJXTsGHmhwWDzoEL1QtXDTdxp25j7kn5SNZwSzLrcXsjKqkEvXjyRr4pSpncqTKYJmdbLKAB9YFb9Fc3pg",
  "key46": "4sJ6URWEgC1dNSuhjYvCECsK8dTSvhqz96f5LCAbeTLbthM8Lf3XXXv96V9QeynD9PLrGx7eTSCu5rFVp4NhUkee",
  "key47": "4d7Vi4pjfF4gB8YcBYMftNueCxMG4n7YQyKwSvrfMdMsHK78TeuwGDBGununSTEis9TMT3pKTBvGq4BgeUMCa8S4",
  "key48": "2AxjX8PBMwuFDRz5QzTXnbG778nYNMjsfUYsKRrGmHssRNmefM4cDwDtjumaX22SK51SjVn9YC9wQnb2knrc3AzC",
  "key49": "43MPKtbUXG1mXF5JB7a9Tbrkq9eMfCWcu8hQcjtkovCuboa81gPsqbxaKSzm6v6Pgkwqyat77VNWS3Xn61Jm4oE8"
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
