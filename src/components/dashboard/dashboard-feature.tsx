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
    "4EJDJMxBiFNgXBfc86sJxVtqAiejpjGE3SQz1fJenFreCNrjyab5QzykXHzxDWvizSQiZHnTjaLbwy8NM7KnhR58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ULevbzH2cPSQ3m2UcZMthp52kJNbUMdFt9hLBX3GnSJ5KugQeDqqQ6Rx6ZnPwcejEhKvpFeiRhAViDTds839gQD",
  "key1": "3ZVgFsBPf28cesDCvwvkXkudhoX2DYGejHMpAgDFT2sLJMUX7s46UVKj79EV41hDNsEGmP6y28iAv9pqVqLPDr7Z",
  "key2": "2R9Z2cDPz9JsbpbXu2XRLnbGfFewdmwdBUpphCxVPps6gUcUVSzoj88VUYSWhYjNgvPE1DLmhxbkk3hM4MenxfF8",
  "key3": "5bGTcTo6VKGNgBe7otKVNpDjn9EhTvZDH2utXX5pFhy6Mj6449BpA6DoUeifKdMr83xG16CEPyBNEmVAdqLRXe7C",
  "key4": "4s45VydBf3rc89ikuTFNrdxR6w7R1c7BC7ZYoZ2UqMWkwtdFcCqzW1K7oG5j1cP2Kj3KqUMiMjBrr75mJYWk4ADU",
  "key5": "2xKcYhyMi1KMLv8Y8uujymcdh7ivZiLeJU6nQuW2egDtPr2R5sBNLWdAHCwqoMTSHZ2VuccLoffbp4WosP6BsFi1",
  "key6": "3jkzgEqq5jdseGB1e5K98kvK9PTxRr5w25zzY2cpc7FDCB5eG45Y7temBHEWm88KKH67pWRGMYA4GybjTNc1C8W9",
  "key7": "5mnKWCD26w8oHCqGoS2q83VkywcAZM44m1Z2eSDHusEz6jskqpcsxAw7rNtojX2cv785hVzQ9KCZETR57MvAbRR2",
  "key8": "8jRLQ7i7ET1P9orjAN58wYokdVHtiJjUzJ2snu6rG2fwB1imdxNShYsXH7qKxTnfpWagv6WTqF9zHcbeabLLBgg",
  "key9": "3GcMtUnsL9aog8RjcZNrK3uXchNFovMuhTjo2r8U52UZXRY7kzWPYCejvrRgRjuggXuufFV4yBPHfyMYt8W2NLMx",
  "key10": "5aLoVo39eJUkGEBbpHJ1mdVRDpT3g2M1EFG6KhL3oCTQu1e3ReXeeSp5rvPDtZodNhiBeSrybWHPfvu3RK6YNcJG",
  "key11": "2HWzFM7BHqF2bQzX9VV95pZPrToLctRzqD2zpuwvfSbxkSvjLSh9nz18ndHJEYbqpmS9Kf6WKityAM2uXdBwW3ja",
  "key12": "4d8f6rZLRQbJe26NnakD2MpZuqhhJj2k84ngZdBvCrUdR9wKoqGSHHeVduLuiKzUXYZfcuppCNRvCrKfhoX2DddY",
  "key13": "5BSHpGPznjY2acJ551bJpvNZLoatj6MP5C8PJgBnNKxtdMUgi9tppF7WzpHVrwYETghovctmUk25DuBQ1wE6zMe9",
  "key14": "5s2N47c8gz7kVynYsWurtCf9pUQpkGjdjsvBLb6AkesGnhLcoot5zNQm9dXUpSNfaY6X1sy1mQoyAAQVKLktweX1",
  "key15": "3HA9A6xF9eufcnNHALbZ2FE9FP3fX3fMa7prYofVxznTy2tRPajLoQKXLzMrekiRw62mLMievT4n85MpStmozAr5",
  "key16": "3JeTbhsXEUUJ2Zwtwm7xuFtDKoRYUqxsJxvmNHi5fsHDaHHmB8AHGMx1eAvk1QvmgjvQkGA37W9HNu6oiY9SNsrE",
  "key17": "32yH9ki4kFJx2vKWnMhw13jYApF1dbFhkTbaACPe5KAa2dq4DU1LnQXdA63sa8LekF59kmKJCZuLxBedabofreKw",
  "key18": "4NA2wHCnWLfKsbRUKREzCHQVRpBXb8UB6bxq28FDiRS6Jm3WbhWYkZJdkfSswxRJ3NP5nvq629rU219BowvmyyhB",
  "key19": "2ppo3sMXJMtinGodyNvvrwT7LDzX8zg18yVruVchhvNPDnDCrYPutcWYagicEAvCuFBDRbsHcxLNtNQQVrN9d3MP",
  "key20": "2UeHpqFuecRtJ9f9WyfBxQrzGrzoojb5RKD1Abu7kF3ia4zuMnUaUPML5obnm5fPoNR61SRmjwZHPJgJpuZxECaN",
  "key21": "2pHPPa6jLKftvNFy9pnpKfZvV99uyf8UHBEuSV6wVdb7kMjBuUvjHREY6SkNMcsbxzPx1o7EZvPoj7Re6XSEhDEV",
  "key22": "3NeJGaRKCspjHSN6bCJRejF8Vp1uA4xESNhw8pZ7tNscoAxVkUeJTCxtEsKQfr6wDM3T4BZ1nJ5vuiCfyQH7rDHD",
  "key23": "3RzJkoW3j5vMRPmTeN7Hrgd3Hu9Rk7i4NXcjvtscnDJrmrhY7bhYFbvUVCrpLhQyFjp6G56sHWp22gUA2Vv7oEJ3",
  "key24": "4vfHzBPhKGPhgYWxfMnayHqktm13LgFPYFXxmPNkX9fp5sMK3DAzRqptCvEApzcVuFKgJadSmQeTNTisxLpxN14M",
  "key25": "4zVovqUytfk6TqKogJLPyTsQqQ8NS4a399SXeCfqsdFmVR7xt13eXBqMMqQ4N3X2U2Pc6L64ge4ZcMArrCsn1uCe",
  "key26": "4Qy4r8EhknrvD1VhZAiVb2xtFhBf5hsTmmLC3gBo5ctRZYYUDR5HxACcNaR3BLZTVzrLtY6jd96JMXnAc4SLQ7vS",
  "key27": "47vpMHPEp9daNCeopvUxWg79ZTRVEyWMECyAkiFUtGmrSW2GmoccnYhMyhqX31imZemssLGSVB5dh9XDD4xBbptx",
  "key28": "3gBpFnWaAv6RF9C2zz7uRmiy8iM5LdiYtggF6YbuF7bX77996TBSnHuU4pQWWufFerGUw1HEdW7kQSiLbC6BT8AQ",
  "key29": "5RLbkChFGKQdBYY8T3cfxTQ5YL4BTL9dhK94b2k1jtrd8sqLLRtTTBqfSHUR64MTrGezd9USPD8hNEnpQXYGQbv4",
  "key30": "3RNkPJdZw9cY8ghbmmVrH4udhq2FC4qcGVs331UKKqKyL1QukqX2QSbXT8CP5LtysNA9W5A1XvaQzYjBzXx1MbhB",
  "key31": "5oHWyZSEqewmbpRYbQmE53f3CcceeJJ3XzgqBEYDAk5es78AtPyAkouhAV58nKHq3kERY7zeUvvM2D6bziha7rqL",
  "key32": "5cKpoQKP4VGtYwnYDkC5WwdxzPZ6kMHn72wjs6AR6SgcTBVMFQxDeNNzdasnE9k37p8b16MN2MNQjhQDauPGRjea",
  "key33": "4MvDdfkCBcUwgsNaUUViEgofWtkknLwvrTgGz3FwBdFw7BHPWoxLbar5FY3UcZFKMy5XDv1Wmi9Yfb93FWsHwCbk",
  "key34": "39cDXurUkNs2EEfEJjKFnEFmyiBSsCRnchadpXCaKQqpx3yG7tGEJFPSvMRP9RUd5XJNAUjumMfsAcx5p1JLRomR",
  "key35": "3WaELVMNEhvCVmvB7EMK12gSPCsjVYbLnh3gfny24TpgT9TVNzAyKV6iMQuRr3epjxoEaxykuKuJvWjMznbjMrPu",
  "key36": "5TS5SPLCnfKnP8dNxa6cJBBgtGXi3j6bsa7CdRg41WYewTxNxRHNizRd7GJsqxqzcTkJaKXPSeYLxSxDAjM5CeQC",
  "key37": "2nb9AmrFFFqkrzGq35kzQt9fw31fxaXz2Le3ad741ppa6GyATHZFfmSd8T4HT1ZhefEQ5LpoRKVp7aSywFxqHpnN",
  "key38": "56g6DcLs8LP2NoMru47cf7w1x847tgU8XyHmCmM9YWCRbtQfEMtTaUKMTtLFnN5phQp1ehHUnRmV89Ezru9ZnrZq",
  "key39": "3Cgqi4Q83BP9UnPiR8nm1YfUQxvdbigLnJnB5x1bAhkJhAtTWFv4CZ5mtfczdfDcCWEtMTyzdVo6xH6RU2gL6V3L",
  "key40": "4b7wKNJuPKFF8poCJDAJweLrfK4GNWkUuz41AFKw6vno48DPgg7DSFSknRgrFk8a5vvQCtiLey5qFWxUzYDSBxTg",
  "key41": "5RNp8nL1kk81QTcKHdBQaRWAQHAyo4hegYupBGPkKN3mQjvnVFxQqku3T2JAztxfXypZnRN8nbScy3WF7738doek",
  "key42": "61KWafMLNyYqMg6zKp4nNTBrnTD5qa4t71sRn2reW8RZN7GvebkPC8AtmYZzerTRw8o2gndx2do3w4PeyqFVH6KH",
  "key43": "4SMwU6zSvqptCuTW3oDd2bqUBr7XDHQ1ExNbq1y5AtD4LGvkakFDAQ7GCc7iPVCnf1vin8UNEmgucDBV87htcHt4"
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
