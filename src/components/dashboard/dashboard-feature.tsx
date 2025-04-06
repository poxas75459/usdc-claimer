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
    "51JhPkaqEmB1Xt4htfN8Uj1YVnF6q4cnz76wThdRhNd59uunpWUJQyE9jqaJX5XnZpJf3YmP2mY2us6JXnhSfHSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dg2CtSQmZazCXL5H48MR271LmrFD8TUpCtyisCc1MJTdUdvfK84aGmP1qXiy1EarNXkjoKoPzfTwdPUBLap2AQs",
  "key1": "2JEuNVrGbyQ7D7Dj6xvHAWistLS9sYPLLnhBaMFX18NJkVoQtA2yV18omKs1mn2DP2BMfHTUSLZT2jSb3iTU72yj",
  "key2": "4aUG6ZQFSYrB3tN7sbyDeUkDydgT1s8CAoxMUT1LKyJkidwGcnc5mCVQKbWTyGnmFm9MH8EcrnpwLKMLnKFc2GAr",
  "key3": "f3vKjboeAGt421E3mdLsuCtjyiFH81jXVu9hrKD6fdFxYPSgoZ3GtYU8ndoh92dB6CtGyTBhVXUQxEradNFQjdD",
  "key4": "3uUXrnATciu1sfXhmy6BRvwQ9dUXaNjHxvPzEFpWAzLuWAwoshusp8y4PtserCDNvmGp5L3YJLbw3wEixJNCAVL1",
  "key5": "3eSjEutirjDU6r6JHoGKU9t8ZKhZHSR7grad3PQvGsmqWYmYJANVhE8J7kvt8UbjgGa2g9rVr2oQapSXhoqJ2m7x",
  "key6": "2QqAM5TRVLfe5wKbM3WDbDPrDbXqqs1VAMwEQLFaLdoHD3ifrbH9HxLBQeaFxTsYCa4LiuP8vtDsTdxQqF9XiphR",
  "key7": "5kdBYHV5CMggZk6aBdUnCoidQs559RY3ramJoUsUu1C8uXmKJBkvra39Y27pvDx4Jt4VqEvyRa9zBkx6yzqghrjT",
  "key8": "5KKZJZAtfzShyv2sMYS3iAj9gftSHV37kuJd3cXsgy6nUqJyU1nAppuLpbwhsWjXTmo2RMKYtKVqzVEw2xKkhzGW",
  "key9": "pRTzFSfEvJpVP2H6k4dK7upq9RKFRaHSmznnE8nF2r9RQ13NpMthtBH8yzMmSsSFUUxncto2FrHedv1nTvRPGFZ",
  "key10": "2rWCcYkS3vHzMvzDAKvoeZff75rhrQ5qPvw8eJMWthksk6vmP9dzDXYREEAENvS8gZGB589cdyEritJ2izHgLgdE",
  "key11": "3aeTpTmFqiFsqttxeBVJujy9C7TruuDkNpLme1Tu8u1DLhgepDtot5zLo3u2sahNRSXDrraopHQvo536jSGHMb55",
  "key12": "5aZRij8XAP4szTfPcZRNDF2GXfUacVkLoTGVUnU9jbu5jo7GkeEBqWCxwuMK6BidjLU3ZrCNJ7DnLGwS3jN3G9ZE",
  "key13": "5kpsGysTU8VvbGubQnFcqmwcYtGS77gsxjuEq3DiAf6DuNXBXJSghQyZSJSNMnX1T5bhKkgWuFNnLegcwVEwT5cX",
  "key14": "47xHFUeG2wo5zETAHRLjJrhkKVhPDbYgUhw8jCpFYWvCSM2Vgsr6GWtUdyReE8F7Xb8XcTmbhA3LrtcjU4MHdTdg",
  "key15": "5wH3Dp78REtrdpFaJDJN2WtYWdk2BTpttRfNZURyPrcTDfmHF8as6QmhT3Q1xrTCXAaAMP2kGJwYkmXeMGStYkWj",
  "key16": "3pQTykZeKKG8fSVdyv8so1gDah5FSGNopmP3yEDFgknnL1n5XSMJDukN2xBvemSwsntUvqaJh59mrqckLEytrP3P",
  "key17": "5fCj95jK8FH1AYEWrPPQnpmrKVgWdBSrqH2Hqgsj9YNGFzh3pru2iLqdMDZP65ZPxnxAmyHNE2nva4VpZ6j6WiaE",
  "key18": "2RXV3tQwUfG2WsT19zAqZcNaBQyHY8nMxRiFWK54iEaVMtzE1rfLGwgAu7ySKNBLkDUMyW8Ztk6Xb3Ny4B6kpKd5",
  "key19": "2KGBP7BHAa6sZihoDyK8tK85iX8Abf1KK96jWeRBYRxUSBoWxLZzkoD4Gjx7fqtUgUH8TKKjHqWXMmmxpSEpZnD8",
  "key20": "21pFZnuWjk7HD4nrH99nuWH1ewgDYoeZxLyq5cnxJNPiAmyKLgE4SgnUn5dQZHdBWv62CwfVm2WtW2iCbVxpQyAj",
  "key21": "3uAuQu4ktcTwHAmjPqYRn7BsYgbxof7d2nMWxwYGQDqYuTFyiiTim1GpzvmEfgYMct5XRdtebzXCRuTNTrhFppSK",
  "key22": "627fMgYZTJPTBCycWaFZpU1jVcUEbstqeaVUH3YRaP8VK6kD4tBZKUfeimfisEx5M7rhqQa13GmQvo16fru72BcR",
  "key23": "2DdvhCDQjhSn4vVwz4MYYDNTQFWoCWuF3MmuhgBPHpA94R7kppjNMSxGa9fnznW8SabJE8qWpoZo23abP7A7TRaj",
  "key24": "2iFfFqLKej8m7psYHfQXyYrCZWjjH468Tu7BsdrPtw4oP3pQM6ftWpVY4FipJprCHKvs4V2fY7PQyS4p566zUWCa",
  "key25": "4He6zo13gRHxbiWp1weSCpY5rraGEoZdX3fBhS1Hjb1zYvLKbod7sv7ZhnPpXU2k2y4hDw255kw7PTEpwSB3fWdk",
  "key26": "4qrfg9AAFkbLGZeUVqAVfqijqf63mWuw2p2qAse4UwjyN8eAHtfSajqrjvAatDgEXtTADgW2nNAk4X49XrVguDN4",
  "key27": "4dbPtSZpWUDsf8ZpkLPvWNSiw2idsPuVnDi9epAmR8RWsHR838bYj1q281pM9ft81jMyvoGWmvEEXwTbk9p91b2g"
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
