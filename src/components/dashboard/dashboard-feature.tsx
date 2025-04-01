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
    "3bKPmLYWezjxu749wiAhheahepsy6nxknyQVEYUJbD79BvqLc4ekqTmEhGB35V2sPXArEbg5yFMB6CWkvB2AEN8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44184kMsJFWNyoPtaN7rfRmP9pGwmgsLu8xhZ2vECzFNnuK6Un3D1rpK2rwraHemJWajJcnHVTVaGSbzWQ8DaDQn",
  "key1": "4zpJZJHkd4d2BB5WSSYsbczkqXm86z6PMsHq4e7MGTFsBbU1bsARN3YKWL2VwDTm8GA1XKTcCm4CK5aCueoAqYqp",
  "key2": "5hhVPA5i2uAyfBsZoYj5byYDmHsr6zfE5ekMhrzc1mADumaShsPeTXQxvjZGDRocQTevEr8R53kwCgCoJbm4Y3Ge",
  "key3": "2wvGfgm4Mevdbhk4cviyJFq7HeSxNTH4d9VTSYwhDJeRiCgWZk1ERCcH159opBD3wUfKZBJrLX2sqELgYuCffzeu",
  "key4": "yyHqyatmg2kwfXSoUyzd3VPn588XLRNBEwRSsjq39NtbEkDUWfA6V6xa9SfT6eFMneikWkQTDfuJ6siC4BJSSWR",
  "key5": "4y8FVqLwrPhvooypY7qa2J1ERfsqGSRx2sfaTu46CE7DzSMXNL9ziiRB55NBzg2y9xeDH3cLiiJakcwV8HPpjYxQ",
  "key6": "5GNn2DvR38y7zFtZokUF1qZTFQY55mUAYncu5zcTXTvWCDrKQhTsSZjATScky59c9taxzYfhWB7GfVHE1KjydkBv",
  "key7": "5Jmo2sYG18d2PRqBQqj9dG3Le5JETHxtV5JwNtQeFRWQmN72vEE33xW8Pd2SjXYj5FhT63xJ9kk2LFsPB2dzB8cL",
  "key8": "28fY8Ak7K7pNfJo4RC5za8fAKhTcWbiKRtvRRBcCDDGJjspNPAiEnzvRUVFMEGUoKJ2PakAvFfS2XPPScXFVTD45",
  "key9": "qxPgTiVxZo52xqt4EpCTpYj7WozPcvsj7ELeYwYDPqcvEVPY9t34y1fQS2UgTBcbgUdNbu1rBs2PQTNEiGmFEBn",
  "key10": "62krPVAgGDuT5JULxK1bWFK3DojZsDjj33n11ZS7ojM4hZU6SADPSaVmS9J2zwGnfeEuAi3Eq4hJsEzDPTS1qmsb",
  "key11": "3SWjLoasg8TAU5H6XdTr9snuD7jQeTzyrmNSGZJXyoBftZtdD6p9ScPnQfNcew7rXmBCSh1nozw5t3MR3jJDHedi",
  "key12": "RTcG4giVZpe6W37stxv4Fdqq87UEeDRGuiVg1qEr1djtmRGQrGoF6VdKZQx9MfqogbSEyRDpwpwJvmCdXYngZLQ",
  "key13": "4SgefeCWxh5zLB5vnazoidQkq66TsY6Mszvw3QVxNM8TByKZaRrkNU9AgAfZPT5PqR2oG4iKorxZKF22agUakPEr",
  "key14": "5CUrNxX8SJZyH8Fg43V7EamS92Se3dzrQKiMKcADa9VuEcFEU6Qu5y6KrFDVnzgCqyCEg66b4NazE3N6uyNv8QHp",
  "key15": "2VTj19eRSLNUX79b2PaN6MSq6gLbjUex6yGWVrnkKa9L3KMNhuAXFdEVwgFdr2N1vnEWQS5uroRLUJEdAszejueT",
  "key16": "gtqVnYcdsf6QRpbcdK9NkBztTH1CP1HJ29U6xHFNyG89iE9SVpeKnrHk5tv8Yjrtzez4Cm4DXi4otgJ5UdXVuaU",
  "key17": "Dv39FTwfmLskcjx8XmATf7RKPN12LHKxbZt6XA9raMXLcBs9KH7VCcjBUpvF2cyhVrhUbtye3AMrauW5ZqqR5w8",
  "key18": "3Hq8ZbTDpoVuBstRUZXKzuvm8vXKWBVPv9mLqUo3udmEbxgq5qKp1GrCpurTZmphVgWV7PsewmcF292SJaN7F9Kn",
  "key19": "2jG76npDG9Vto7p8GZdLBXecSF9FrDt3NFp6pBoypkHtS1WH6ucBHFF9RPNqDtk1f2G2BymKAvcXuGfHHMqsEw3d",
  "key20": "2n3cug3ow8jEJEzevDpUdyo44CHcyVC4arpfn7xHkCrodBdghKkEyoWMrdT4tXNGx6aXunzYoXQ1fkuKFT3JuMAi",
  "key21": "2H2tLvK9jvWoKKpQbmVYtWzSiXNVG29dQtVtUpP8gE62UXZjnSTTQUWuxoHy4Z4N4zkXDzftkYbuN6wGtHgUZgyX",
  "key22": "2rk7Eh85aTdpYKkUBQcZue1h9frN1YNvah6oKwy72UvQVRHk7Se62DVyDgMu2291abJh3CdqK4CtXKnSoNDeogbJ",
  "key23": "3d4BnkreoTFBa4TPtfZXubkC4r8axxSVZHX4VM41nFThscKWEowSGT7mh449FyZmsPZHRUbjXRJNXeERA7fCYinX",
  "key24": "2bnWP7GTU2iCpfSMts9Yk6QRERLJ6xYGWSQCBq1thkcnwkHcJSWiNkGWopQr1N3MNgDYdyppxKVLCL6Y8CP7w2hD",
  "key25": "56bq7TuTiLNTPZ1w8fpb5YpuLQUUjbU75NV1WF1imu2Ay17E6uxjtcJW8yr5e2yFHbTb4r2qqxZDLyLxLeGU7yEu",
  "key26": "4FDgnj8yMT7FvXoxPrwuWRLcpbvmtxzT26wXdnuzSanqQCxBJfeZEnzxccaovv37jZ6GCG1D7uEJ5DrhKqPSeMLt",
  "key27": "3kcoXs17Rm4dcf7WNa8aKLC9EbE5thE39A3PiZuDxg7VAMaMajFZowwdsGXVwPhoKsnM6uJDDpLYLuPffqerrQhv",
  "key28": "39E1HMKzW23PVMvsbXAiZLKNUndYUDCKFEJwanuaAKKsd6tLakn1XrUs5WGK5sqoTdLQb8qiAdeLM1qgmB8YkT8T",
  "key29": "3deNmP1sZjRMDfwPXc629xwnKuAj72gMTzA3p99ST3mCd4XUbQCd4NHWVYfd38bPfNWpRur2a4JavVcFF8y8PUHA",
  "key30": "4Guj2xFLYyLR2FFXhmBRTo2d1BJhfggSYsbUVnomLR1qtBBigmqKw2dmPid3wj3mWrNjjDJxFtYof92yUtCZcx4z",
  "key31": "52Bic1i2Rj8wdhnh33N7ZtdWLwUEKao69tGSYd52SPdcr5Js5kayUQEk3gEkKfnkez3i7PSMDEScjGxYfxcP2d1g",
  "key32": "5fZELeUHBdLGCDkEqDSy8Qg99ZpU1k51qJR5mRFaeiokT1HwVjHkshAjgNGTeoaJFC5sWfDvfA3rTcbb8939EQSX",
  "key33": "xJTeNEUSUSfS1ETGMxk48jfSfpmYUiZ2shkCie9RJdAs1tNn96XRshD95gSkrxU1nTt1WYYod9butrG4ecpd8Hi",
  "key34": "3gwwkgXrYGBbr1Zu78DtuACdvUxzo2ioVjCpfhs2EJ8icWEnbxYYWDhjEJyR2hwP9fwkBtyuUP36d3Th31pEzjeu",
  "key35": "3fEfGfdgGtrqK294RFsRxLUQXxLHmQn2jGN3h2rGuheTVURCoBxHYgpAY36Dgk2BYu4WCEJLZVUQhAfPFKVs8NPb"
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
