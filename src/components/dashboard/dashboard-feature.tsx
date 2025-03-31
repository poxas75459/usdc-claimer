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
    "2sALwufekzCkujNVi96eusUqTMCbkUxU7AoVRazzTx2zyBsTqznacJnQoqKtG7MBySR4zL4ZMjDuZL6Bh8j38xC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xoq93p4ivG63mBsmVG37AnPUSt3URLzWu8SaQy2pERr4B7KEMgfQXvwTwJcipUEkdFUXYTTdDBLEZ88DWhTFggJ",
  "key1": "2GqBnGc2VaujKA16NmgbHyQQnuVYB2v7YhKvtoNqTZprAdvQC9G2s7WTQE79FghazdRHhGVRNd5NvPJhDqX94cDz",
  "key2": "5ZPdyWPYQbjv8QSVqbD9Kj9hAvQKqeiTMYNMFc5gVBwQGk5PSpCeZFPvSdPX9qndHCrTxrqDkWmVE7yjw9CiduHW",
  "key3": "3HytiC3wbEQpiG4YeU8dvcHodFwaoc6rUfbx8Rddjne2PixYsE12BKqpqBU57sVe2qAWKzGq1TX5fHyVkcgynnjg",
  "key4": "3xrAjAwHfxoVZ61VqXJFzNq5QRv4ykbKzuh1FKyC5brLVUS7DSUEidNbcEMVk3X3Zy8z9ZxWeyVtxkVFJsooSrxQ",
  "key5": "2U2hkLoH7FmzV5NhPnknsoTb44WT9Lk7kPgo8xoifKAjkMAoiQ7Gcpf1yUvyfaWDLUjNPo4UgKwX9224y18DKpSi",
  "key6": "SDdDWgHt7HkHa8xurs4azoW6RvAkMHL8TbfEHrNQCXPqCifiGgcAg7MwSVe679bdEfUV8yjMfXkfjRUqawab7Za",
  "key7": "ZRvFSnGNjtTfX19VG7ZfCZAePo9mW72kforfHPyLRs18fFbQFDcZBgn5AHTBePUmVVgaZExJ2tRER7WemcpGwPx",
  "key8": "GEwQU51qSmKvLSmogZSNM3uzfFb4EKMUnVDeZFf2CeZSS6X7rDTrBjz4JGPG7AcQX5LS2Mztdj3dw3ykHodt2Vo",
  "key9": "3xEqkeU13s3mfLxjxSgngoL7biWejjX2zq9GRyuD2mJQJ5cvdY65gCuGUzCUi86SShHRFAwvmnLJxQrXpJUvhCEM",
  "key10": "4ZqpGBbzXjLR8oh8Q7nVokySNKpmaRJNG6KzNG6GbxtYaNgkMSoSzoCm8MEcHWKco6GvG2BTijT55BszFxi4VAWv",
  "key11": "3QmPQadxfFC9FyaRx8jhuoh6DgguuigccwAtQprNfYK6uWiDAjnuhRbMrJK8gTvCF8usz9eo3oSTXy9YUuM664wa",
  "key12": "3N47iCiV9w3A6Bu1EYZtf4Yj8SGZj5MnbYULQBgpKRVco4BzrxrYSMrN1yVJBvJfNeFSTiLdRHk2wHA18oBYzyFo",
  "key13": "2boMfY7o7e35fk1nkaDgxcgtnEiPZXw24zaEwgQoUNXRoRvB5X62PRLXTg29jdRyDPrV6sKJY13LsHZ3krzDT2gN",
  "key14": "3ijwSo48evvCQZFMGzZK2A4Xzfe4kHMAe4cs9gwKEczs2kCkijoYcVtuFvuBvgkE6QE4nVRbT34sLCbA2brK93n",
  "key15": "4GSRKUTDkpNsM9rXVzNsgTi8A12vaWBGiXG4JLUQXXP7YLZ7xF8GCdo6swnocHShjsLiZgMhmcu82Ghf2ZNm5xvS",
  "key16": "3psKHtL7v4YmSfd7edfVVbWEvrANFb3bbCvqEYxvdnUSDaEj1jHHacq6V7HEvNmSdzs4cT5GSg2oK3H6HcWMtE7y",
  "key17": "57D4f8WoPNkTy4NHcx2yEy7FA8HPthPmsH7rjzWrV6dvH1a72HDNfDuvPusMpYj1r25jGQTxxaBk4myHReFmCRDN",
  "key18": "34b4vGz3LGwSJKA9mRQMw6dxdi4w7PqxSo78Nz513QF6nifyDuGjKh5Kn6FhicQi5ccNoSpirS5BS95TC4NRiKXB",
  "key19": "2F2QN4cVQNVi6t841miNaCRmrH8jcczEA8GmftJhfp1HdZbJVNpxKjaoth8vnDaJntfp36xDSQqGew8nQ6JUrbAw",
  "key20": "45cMrMKBRxi7EaPkLAG6ANsUUu6CkE9EkUQ6s9DE866etiK695L4TYBTfJHuSvqh6sjamBVvNNdGVB2UzampQWS2",
  "key21": "5vM7wkdGfEd41pzSSzzqTpqGteRANPV3YrTzqmaynZBeTdB79PKxUxf6Cyi7pSWhZ1BjUkYjSdzy1Vm2uKmMu72W",
  "key22": "2ZTwZgoUgdpeC5zdZc3bidtyztpmMDWnZd7hj7jjURD4dFGYhzc5Pfxk8o4g82Vz7FauxmsDx1zHzakF98XeT9Nm",
  "key23": "2R9DeT5mgCvLGUzdfYy4wHC3usYcVueuJ4X6xrPPim3a3yV7Pvgz7foi5DBmFPwSrRnuksWLDmodSqw7WSPRqByY",
  "key24": "4r7NMox8fnPZ5egZ7m7Z3e3u4QSGi6JscSGQtZBzeL3ZzqZ8ZZdMZS4fF6wuWtpn1WxU6ti19j34HG3UvmyD2JrY",
  "key25": "5ti2P1abFJvrBZC5ET8zBbFDm4v2prhtK6sfywRQYoNdb6Rjemnw3MdR3CAEHHvjtnUJ6vfTM3MUY5zUNsMTg3jV",
  "key26": "4aqQTTetE4oQsXEqcnCvMzndUm7BpUbs9z5MNqudFAGxq76o7qx9zzP7QzhDVtG5SoESnTtWNWnKZvY1wmfBPUCj",
  "key27": "53Ncgbmq1rZEE8iKi1AFzXQfS5VPJbmnNXbBKd2o45wYcTvELAnZw45rDQgw9t67NUUZoLmPDJyUjg1g96dbbNxo",
  "key28": "2pRfzNazvQhsiRffmjCtFxP8RmcEJiD2xEqxcCGyX19e4sE86ENV71Dab4JHn7yaYPkus64skVDCdjXYYRrtKPbf",
  "key29": "4Hh4VED85TVp5FpDRHt5gayRbQDUB5sihFDPepJdgqfZeEMgpNBX9kg6w9izsid1d2nUDfsoE8DB3uCSKtNwXf5C",
  "key30": "4VJpL3x3Y8nLYDo4FejKDD2Q49Ge3M2NWCj5eTjmRoxg7gs2NKzuen9EwHfM1Nsr6LMm3ESQcovBhn2fP71vWv1F",
  "key31": "4FdPdjaKFcErkT17xKGcxn7sGBx7TCq82W6hnfhTQZ7ZRkXsw4sUcvekiZprePfzm68YUekfdspuGFcq7grAUF8y",
  "key32": "3efvMyLQd4UzDDUjpnxTsCgF3PASEtrpM3WcVSqwpQa2nGEKRGTNcHpJykj35djrDkvtoVJx8p18b2N5mnbuXde",
  "key33": "4uzUWezKo9qfAhdoSuHr1PXS8VonFo3ppxH1dL9jpTLtUWszM1imQ71krQ6L2PenFBML5hkVEBWBEdVVbx2BYYBr",
  "key34": "4iaViwrwq2NAPekEVxBqDi9PPgBMSoeB2Urksn7Hj8srtg3nAGZpGqK74N7X76i1pWUgcxMcttJfpodV6QvSjvqM",
  "key35": "41L66dJxdVdB6ryDxM68aDp3z3G4Yoj6jRRrJYH81y8uSuwHPCQVdxyHLby3NA1irzQ3mjP38SANs8WyXefEQup5",
  "key36": "4h5s9SkrVgraDUALTdsDWQTZPg9NL5pWELwedV5M9Zakb9wz4rAf3w9jioT8JmnrmRydpXJxCypd6FnrVkT34kSn",
  "key37": "CNePMcHjWNXBmmVDkkJ1mcVxUA5vBi35YSLiF95L2WP2hLDsxJUmJ94VrgJE5AwSoCfyNWxt8Fj2faMCei9ajBk",
  "key38": "2Twq8NN5TTGXWseetAZbRvXg3cJw9hUvHVqJfz54vPKT7K4N59K1yfggR28ucCZPpTAVKZXLSp68WaKpXzyJZpTn",
  "key39": "4stWVyM8st42XyiDp8HVh3NLB6dJLWgEAAEMQGjwj3YeDXAW7BUH7wzbVoZaiESNbWg6J18yx4R4GpJiDjGMcJsd",
  "key40": "2tYf3BVFFKfQNpaQwvubEnY2pmmtbKp4rzWpaf1cf5SCZLYZ6A6MUPHUUDdtC8pxNVaajx7apC7mp1Q8DL9yt5N6",
  "key41": "5P39xS68p17RvGmtZnaLpZT2NdgRDhjf3rD2Zg1gy4LDnFs21j7V3aKeCk1sjad1RYTChBtHVn7pdxgDDnfNeT4z",
  "key42": "3yZjz1ZeFRmdBimirhSq4hd3qnQTG4hhJfMuDKvMuiHRqVh2Z3UfDFxd3sPkFP1TDPqht4odfVwiRvZRZG6XeyQs"
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
