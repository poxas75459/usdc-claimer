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
    "ZQRm9cdxLvqD9xESyDCDNUmpvatPLh4DnGHfF3n1sjhAEWz8xe5Zrf51JM1E6N1KYvFRJEewpLx27Q1AkJnGCA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rcqaQeKXc7GgiURjh6C8nn84XASrh86j7Z1urqqeh7EqkR2yCsTC59URJw1DbmGeZ8sPEQTgfEEWSDQiHunstHo",
  "key1": "2qd8TqaUPL9GQfSdwFdsrRePrm8FdAxTkrRug3reT5BnPYMg5JaYrFBZk5MyJz3tSBaKZu5YVYJAW3TVjrf76ZSy",
  "key2": "35srT3FKARFePUhQkBydNwARJBa2V9nHtiPdyBfiUhKgsChD7FKKtVGhE94okJNwMdLdrR742MiGscwVKQse7hLa",
  "key3": "4hmyPEua4z5RLLLB4bce9guEAv2TXZ7G1cZ823rAow2P6EtHhon22upv2fohrpqG3jqHSDKiysEu7uPyXakDSpSx",
  "key4": "3SCVscnaM1d828eMKQV8XR9KErptcMVF6bvsaJJqAPyad7jYVqFzgyiDxBcKh9gSbSCP3gPCaffJuw4wNVNJjurZ",
  "key5": "4DDaeyVGntmeGZTmFxJXJDqQz1gJepwoExErjS7kxnMrTHH1CH86XgNuL5Wq6F9pZWJ44edLVWyrnWzS78VSfNvG",
  "key6": "2d7iXoGzbEZfb9q1odVQoCrH5JqSk778F5a82aYiUrP8oyvDHDGS6X6Shr6tg54Ttz596BJYe3EKhbjBsR9MLBSW",
  "key7": "4749juWRVBHPwaw6FfEDSUtb8NKXcwbmSJiY5XknLoCHqJx9XqqN7tdfhV1VXBeABeRHFxWk2G4QfuG8UeuwaeNf",
  "key8": "2EEvgktJqS9DsJEA3axVnTQPDW7Z7Vv9smVWo5LhUgAHgRQbmKHNavCNTLLyvNHFLyJEGUbVwZnMRjwykJjbHXHZ",
  "key9": "4Wg7NFJkYRTcrdEDUFBuuBMkby7HGZWVPteYo8Qt5o7cQmnD2utLRX2vRSBMA3yEScZ9yUk64gDDZ2wd1SuFi5MT",
  "key10": "5gnXMPsDckgq32qUx4h9UrUkEDGxBq66fLx3arTWT4GoUEYVQ3Uz5pAbWBHtTcU2DvgmEbMyKFocMbdobLZBn7rC",
  "key11": "3BD74xvGkLW2j2K3fE2ETuaj8iNZvEKWDrNguAJNCNm8uxXFJ8wUgP9QxqJK9k2PfC2MxM5567frgMScsyaSV7v4",
  "key12": "4uHpivL8ZQkPyv7JHNhWEgNwEpPhuQwBpkBk3Y8TNgWmp4cePniKMWdpSDzdaiaU7dZfKnFRAHiPB9Eg5D7KRxUu",
  "key13": "3WXQVuv2gDBHNgQZJeu1FGsiexypiDZQAbGLTX7qR2XhZVtsjZeXAZ9hATiYvfX6tt28nbzkv9hwh6hEsSYAn3Ua",
  "key14": "4jsRZxk5mFnRqqhaFq3Wk2BpoySqenrnqvxhhkbEKPpdwJA28ffd525Uo1UGP1eYJktvRU5rBcCwnV21z4trcMtz",
  "key15": "4bfhjEsJ4x8uEauqu3LGqC5udjk4h2Z8kKitqnrU4oshUtRWvV8hnUVNzrDLuUEhE2S6bQxHaAxveCfu35gckQXy",
  "key16": "5iCL4iXRhHfDjmWKyjDkqGZVzWaySUkMR3SPSXB5DHawFrGUb7ZyUdQM2Y9uBazpweT1aGBw6FrfY1QdN4oHyuwP",
  "key17": "36LDoG3ZXY6PZSSQmw3sxVwp1KefUng9c23pjDF5KpejKGxDchGmB7j1rzLKrGGHfiiX1XpwqzMkXfpSnCctqaK7",
  "key18": "4va2yn8dW6AAA5FVQL4hZanqDqUH86NLnBJykCSjo89reHrVUHHTj8tb8dWirNbLyadRSjRHwCL95xWCNF5Lzxj",
  "key19": "62UDkjFcJU6D2xSz1eDg9NVhMp7pd6fckkiSRJ58G65AegdqRrhnkvrNMUavqRaK3DKtK3sSAv623G8asMN4FgnW",
  "key20": "5chGzHXS91HyDGi3VaxFPVoiJ6CNdkW9Zkfr7MCi54nbLUWgkhwMnnRCoKTNfAwyWHU4ZH4F8qJYR6XomexcZqZS",
  "key21": "2Q5h1Uz1yPgkV1YBvWqXuHywTrz4SMFtdmBHEkKwCuM4tQsKimKY1Jc4S9MuxFjaZ95LeYxnLxYoncQCaieGMpMd",
  "key22": "KTymhjKUVPYYFo7xnbtFnsPdqvn16Z24wD2CxUsGdiLmhY6t4MrcZCqssunYRSxf7gZcjfPXA5bTmoRYexgycqh",
  "key23": "5tdyijjpe1h26zUR2mkfPioGPTg9XYAAxJzGKpWeRDdLgxpMXsq1BDDY1xkQP478aNM2SMJMUhDR2rHrXGTt1vnA",
  "key24": "i5chJZHwMhM5fbNZngwZStCLYLFhdWmh8FLumW4vfzKuhFH7ZAYXgyjbt94RiXCk7hTSTqxVpuC2f1Laf2xqfnj",
  "key25": "2EG5K4ucujQhbGVQpw7S9Em2XjqeTVGoGaKpHjdBWmTnmDwNLmWuaZPdZDgBJERTArFwsJpfmqSKKrqD1KZKe845",
  "key26": "3SAbt7uTN2oPhQRmFWG1UQLtQUzzWDGLFKeBV3ZCmUfaQeaqw7H6zkYeTF5xaTuKPkNPsEh9diJzs6g1x3jjuR1X",
  "key27": "skJ3Ux9ineevQtUHfSjDKfeUkCnxcuSRX4EmuZCxZcLS3uve8NuE5tFqoVXkDRoFSSn61Xffwzr4VpS9uAZGcr6",
  "key28": "34DCXhq32MyKTi7VvvphBsTPdgrDiaWhJgCJE9oSdTjuWNyuWfbMccDzMrmaGai9ZvBBq2GKvsqs127EwYgfCbGu",
  "key29": "4JJQGfbMGgZHpK66YwhzoQvYNPyCf59AvvXf63hsP3DRBV7yULnax6dgpwvRDhk5UYcCFQDWaBDepdJXrPyca59z",
  "key30": "3rN4Sdo2GJ62VsbdErz61ziCvg3NgmXurthKhFFSrSy7gp37aAFDxWUhn8LgUWFAYGDLGYZcnKa5UuKJuLWYe3Q9",
  "key31": "5t2M37nSwcJ6t4iANRkfp8mmxZNnE6H4MHTbjrcMHkGzbh4NjLEVvUDkbA4h3jbgjxtRJUBfTSdiq3xnK8hg2j4L",
  "key32": "58a9VPopW9iCKGQ2apd3DDWUQxX7o2hYhpr5k4kXqqRLandzUzqZcnUeweXfkkUwMgcZixLf2vudT7QvKjV2HwQ",
  "key33": "3SLmGqTdhMwLBeZsdp8eVkq3DT9CEUq3djxnvp9sr34YaXjc2uTdmJvi3Pkyssd19y66pjFFbYytc3hu25KiFubN"
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
