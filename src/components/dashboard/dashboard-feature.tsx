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
    "2XdZeExhV8wvmUtSWgsDhD5wSv988LwHmwbu5n3Vcxig5LGavRMwP2Wi77BF87rPPA7CbDb8qAUYCRMF8oXbqcUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45gbpjMcX5aTejdG75fZrcgRDeQbJcVxaZtBGNJoSdMf7J4GiEqzoggMn5aiJ8iABUPKERXbJ8MBiw76rWY4wsf8",
  "key1": "5P4RqjKcqhmCVrHr2xdWxSJ2HhE35TEayP2TaJkhMZXhtaWXKAzqfXVS436YMp3aR5YjnVJdpV55xjXqBkrcJVhU",
  "key2": "4vLkShcv2f5Y5X4218SQ39FD1wofJykiAmPPURnmrv3fGwCRfqBZ1hS85rY6vSGpqnh7rgSnCV6JpdnvLkgTw7bx",
  "key3": "21M38ivXVnawhf4QjaSpUR53soC2S2okFqF5fTLA1SizMkYukhRtxsnRvawq1CLjEs1Zg2PaKqdmdeuVWAAvCtkU",
  "key4": "QCknF1f4wwbL4Y3B3w4sKfzxNwtSabTRUfFXsqMANXJMAYDopU8v9RiJq5ErGzfGeAAYVaKa1ALGA9D8EDZsySC",
  "key5": "2TUmwr3twFWLR7WcZtFESrSRceZ3uzaBAkcknkftQzxSp7fTjoCUWRCtbpfP4W4ZnYQLXFWDC83pdeLnfUYN2CWW",
  "key6": "V59tinxLoMFsZb2qTqhqiP5fTFm4u9YQJgzZPZgw3teKrDcmdtNngjHDK2AdSVX4pHGnB3pZuFsG8fVTFR1FZM5",
  "key7": "UaBjUgBpMC8Rk693XzskuKzQNs5yaQxnSX8SkJWdzzuzc4H1VUasG6puMWBvz7uPfkRDMyMA1eNAjGiuso2TuVv",
  "key8": "4b143GobhQt9tUC6RoLBuBBWbZ9iK1waTmRYSicY3pTxd3yQpmDzWURSvY8EAHFetykhxFYjW1iaSyNj8h7xKesG",
  "key9": "3eX4r2vDpLt4vV6LSGoi1fywacmByrUWZzSSvzrYSZfGuuJjtDEqqhABHbNtvFKiwHHJp6uYgw3Fh4Rs7XbPuyH9",
  "key10": "azy5rezoak1ovweD5KwUj91qwkUKUNWHUYYYXQW8CuKiiWUKLex1iYABaW2DLgSirDniYCtjcX12bNsLw3U7ukf",
  "key11": "5yX1gRcvGo7BvDuZrw5cWZtG77umcHqxcqBTEmAzkHPCev5sLtLBbTfRXZzmiQXcuadtgPDgVMQnRqzm5fkHTxw3",
  "key12": "5PKdcqNHSWiZTwNP5Zms6m9f8PQk3j6aWWsdhrRfsn1aqb35zGps42yv9ots6eVopSmgjZhC6WtdiM9cBG9LE7vU",
  "key13": "4Jy8JNyTqNcSTBVUPQExRtSzUFZphA2Mk4ruZmgNfwMJGFVibMVa1zfty5QyfBpnaQ5ameZhyYNu2tZRNXKr7X1A",
  "key14": "248v9tr9NcZMpaHwgLFmxtfJKKwHPGhaixN59sTgM22phFkxotmBEB1KN8cvAT1EsAy34j1qXFudm3X3TWnBXavG",
  "key15": "UX2Ad5KhEBX4e3sJ2HbvA2zim69YYbs6Mt8oSgTBVWrvzs5CqakeKrjfpSZzfj7pkgZiG7VwxbGDw9FoVJURZAC",
  "key16": "2Qq56qhrBM5SNUHrBQGa4GApvYtyMC8GFnd1e4ypoFSX1my45f9JYfSemv83hLfo3Hu1ZszpAAr8st5vtgtiV1tZ",
  "key17": "3ch7RioG86K4GHtLEKTrTszPFoytkY1uAzYbtF49FpUzh8eGf4xfiWknFXrdzieUboR61GdSmiw14eYzBnPuJqsx",
  "key18": "3ZymTpQBhBuxFJZXLVCPkxPtLJdttQqbqucsfJZcBvZ5PbETV7C82AdCuSGyV5UaJpn9Yk4tVBrxS3T8j23gyPsK",
  "key19": "2GCv5v6pr8iWDco8vdhrJFzjf51KJsEbGjYxbk7dcX5Yr7U7eZoQ3DGby9kJGXAAuRhPrSdvPLpjitgMs45GLN3p",
  "key20": "3xtcrKNMijG9kxazqgHjnpJnxS1dqZJPjZALxav8J5uC3iXfu7GnAfUCDsAM9xdW2iftHSqoKK22wmiYEssYF76w",
  "key21": "pnFUsuiR1aCFihMwd7TA2Mz3Y7MND3vaDDsKHVEY8sABz4Hik816BHiykAuz8zVWExoqk2bKeK4rfYEHhYVfnAJ",
  "key22": "2h8EKjk8AwCGyq1sX9Ft47QL5bsuaEhPrLJaC9EFR2svYfTwXijFFpurf5hajbuPCTc1DGpzDbRUtzuGJFLc6BS",
  "key23": "2JH4iFrn9Pwe3knyRg4YeKREja6rrx1Fb6BubepRuv1131KJ3UrztycpfHZb39yXnHGeLQ2bQDL7efMK4E6EtsiU",
  "key24": "38nq3HoPG8QHnvHtEqTr5MPvLP4Fgt7gg8PYb5ErNLLzD9VnkcYEPWgRvEy1KFyYycFyT4c4Y2aXwf5QguZoRTMC",
  "key25": "5xgup1ja4d7vaAwCPfr2Qc4fcmqEhmXNqjfiTrhDQMSZDLz7PbZvTTRKATdpi9UiVRRow2YQJnFWKdZYj1EgAbZx",
  "key26": "4C2HhPh7Rcr35Vnch3BF71wgJq5rv12t8h58rK2TkAqmZd5sw7Z8dXmL3s5rARykCFEVjTUusZBpyd6p3vrUnYuP",
  "key27": "4S1r5kSRZeTWh8s8SRwkohyXUhd2uBQZXQgkZG1UqGaoy4cVR3UwkSdKaXTjyupfCNPxr7sV6LYwdbEXtxzmGAJU",
  "key28": "37a6qJE7c8HHD64krkqkkFyKWr6BqnJ745KPZpzEHRxyn7P4L7GzMqKt2GYgmQUN64KncjfXjm1vjEzxMvbr1MXw",
  "key29": "5rEUWsakNF9A18wdny8TFUzHCtP6oUyGNpitiPB4w5E3Dzz7HCiL6gxH2VwCFSi3ECPxqKLGGRKEJ41bUfUZ7xjS",
  "key30": "3piy9JuEPkZnaAJaD1FFcDzZkCaJPmi7Uio2nu3uSu26gm5LnDJcbVmSjbykeAZ5NwaQGseNi6sULarKW2h7uov5",
  "key31": "2nUku9sWtmsY69AbNzms1T6Rn3FCvtFpNHPmofbMBerYCpn6K6XVKZd8PArYSJpXaNfYFaXcFfUV6FBruMMT6EDA",
  "key32": "xXHscgnirYCZheKyQhQffzscqpHaN9jvGhEEiYeSms6YHFP9EM3LqAq5RhH1aLs7vzjaq2AwxJucvwmPg76zHRd",
  "key33": "3w9WNYoBD24QCGunMAEh8usgCNnzYw42VEWZce4Eazxxs5DUQV9fYJko9DPD9EBo5h4biEqveYRnhb7wfudTN2zu",
  "key34": "6PZjcefYDqdrnV7NAZ88mrHG9NjDoV4kLmHoHxuAtTcvLsms9f1PR9fQ6qhNU2NDX62dGLv9eBeNVTksoh6KeFC",
  "key35": "3qSdkWzyCJQEKUv26jka7Z6GRGtoS4624CMVkwZySCdRTTtQDfDepKYB29Sr3jpghibYQVoFVJZUAAG5nEzTWm3o",
  "key36": "5xDgceozR1vFkrEeXMkhqJrP89aq7EsaH7BPv1uuLRFEEfAireyrr1LHkKS1D24kFXrgKsBamxUWC6oqbsK9XPZy",
  "key37": "4ZeV83UQCxnZkr3uNm4VpTNSyLJFf4RFNEYNAXmmvutgEH7GJ91CpKscnZTuh1JtFzaRFNv1SnHssXzNcWrbcP3h",
  "key38": "5eGDumyMAZQ6mbN5EWxBQerm3MxXFQR1chgQ2CQ2GtjE95Wc52G4nnxacDJ76qcohhbqV84wqBFNGirVfkiR8wBN",
  "key39": "5zQmCNhvsNpjYvAVh9dwJ9N8bFqrD9Tc1ryg8yJr3PyqFipGH5msKgMAitoMfkpFayA2GfVC86pYuEHZoAkHTNq",
  "key40": "2UXRkHLC9iB2CRSQ4Poj9d8TnDVcZwnrSQiCwUtxKhfY1Sqn9ppv7Np5vfe1TyyAvvZzAKQFaCwR4VxBqXhGVunm"
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
