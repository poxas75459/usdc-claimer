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
    "4jyvcPkDCfG2zgNQNW9iPSXWvSMLjJFeWwKG2UZ1CgFgEi9s8C9TJU4LD71zpnu5n1HLBiagA6T8rMbsWTyFDYMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3HXZdPH6D9hw4cbCXE9jZQRXDw6pBCMnsDPhtCpnuqzBKthLc1jrrW8a7bheS5hWrAVBsKomRpsHVn2orEintw",
  "key1": "5MC9aiQZDscipjW4kCxBEW2DukQVspu4qhpwbDszoHranmpsX1dJHcDoLfbdmJrqqcTz26nL2iCQvr6c4UVFGT2S",
  "key2": "434dd9zBq1484rqGvTEEFpnmXEMXzw7Tr4VUyBcmc4cUT9F52p1YptJF8AcrHGTkD4BtigiaRjVgdrUTDgohQoDG",
  "key3": "5jadYThXYhffVgV2SFsDS5BvagGCfpL5zjuoUdH5j1FHoutTAShYWmLxtoRQCY27HdwxKGZdjts6UxrZHqbRPpcw",
  "key4": "4wU3sSAGHWHBYLg2ARVNdK1DZ6KkY9uJ9VmVhUuFueJEUGuxRgRQewogYCcxuMPvAL87NVpFYprLqKT64hSyNtZq",
  "key5": "3YPW99DtKGNcMmCiLTY98CA326LYAXD7SBciVk5fYpcKh3R8zZY8QPzLdWxjc3VoxShQomAAQcPEjpMWaTWYeeFE",
  "key6": "2LEcRw96rqwRrhaFq4RFHcTKKFJyTPcoA8wfL4rNLaiDyhr2bP62gVZyEPetZpHkQw8mUZ9xeXyLt5iufnr218xA",
  "key7": "F8gvTpXBiwwqf5nXDJAVrxbj2BeHjg4Lyzg9JENqeMkt2FExFAd331eXHvmc2CVPvxoezQVrZdXvbmvwbWBUgTW",
  "key8": "2itKSeJQxkvB2R9svDPBXRrPZZQpVQjFVKyfHtFyshhaj6ARg9EThNw7UEPDUeSMZCogWx16HuBZvcXDb21ZZUjF",
  "key9": "2SxFE3muNjBbWpus41jY5zmUqv1ZbXv2uArsYTs6aM3JkyXJ6Gmkt3bWh2WQ5Kzv2QfSDE82VhdoVbfdSvvnLDuf",
  "key10": "5ZbssYgTuRM3r9W3VzExrC1Tv1nbwwasuZzMGM6sNHs7n4VYRHozXAoDnVoQNJ2CPFBm8hWz3Em9kv1QeSQqqvMa",
  "key11": "2Cz472ZkZjyBEUieFR9965grzKErYqhS1YB33N8qkVSYN6xoLatbZJoENYfHFZxfFYUjW3QiLstcGjCes2Frb9Mo",
  "key12": "5YQMmzSvJzewZkKjNDoZyD8mdWWYCtTuVAXTc1pmMZfSL5NZ4TgZ1iKbM13xKYt24MpcH8pKwKmy5pHBkGY72tHf",
  "key13": "9NKkyBu9WNN1BGhmeS5CbxbUikPnRisRn4bGYc2KzRGfbHuhtgcW96p8J6jBVfeBQjdRSauiwPyLbPrbwNthGYZ",
  "key14": "5981BXfSi79jp1hDnnAovKhCKSUBNFL1pY2oVRMDFrkJXeKYzdPmcHLKaNc8mcBAB6hhzSn7Gzb3KeY8xqidvg6n",
  "key15": "3mgq7QWRB4dtXnGpAV4eMsNsMGrBei9oFGzegp6EzhPK71jSgzCqtzGovAab1QnLeZk6gbR6sgUoEQM9VxZgqw1K",
  "key16": "NQHHXzdCzf83vrRxLYd1rVbNVF1qWXgwNXJuNoZYEo97Rt5wPUY9kJwK5M125LcJaURwWgUk7T6aZb6UEmqfRSu",
  "key17": "3TqLeKmeJJtyfEMteLeuWyowYeot4JXXhpUTZWMpXeMeE2LBJZHaXpVpJUeTadNauRu7ZckRB5H25U2d42uac2Ri",
  "key18": "5ej3faz4cPSNgXQZjZSHaotK863G4o9dAwsYcsuVRXZ1TkmLSKGhgjyXWiUZPom8BQMmaBcqWuqdRAyv26Lw2h7f",
  "key19": "2ap36LqFLig9PzLrP1hAcmb7ZmZkeQDCGMyeMKEFbWqyVK8vkpaPHb3VZeMzL73ZjDsH3s27Trf9hSxyBdrobiRy",
  "key20": "3t1tE5Ysda7npMSLXHuyu7HwpWW3YokZ11oReBuhasDy1x4fDGnCPG32P65PwQ5qNQKT9ZkWhf7vYP3pSaWa1z6g",
  "key21": "4KNt6oQrBuWrDtc9hbCnrNXipzC5BZr9uk2BHGNH4tkNCYcm81pBwMia3r4e2quAqtgs6Ngjf1tu7BT9V5gbByRU",
  "key22": "5hewDNaUyEfrsuha24VrJMLfjTkCMw97HmQ7jSQT69scBY3URfRdKYC8Z1HTPVuQtwjHBoWjMu5Qu27SkzpAXoJj",
  "key23": "2rsRke5NiVSyGjUYQgFezki2idz8UzrZQaivHqw1bVJKYSYxbFFsUg4GrjmPQGLTBs2sV4kJWGYxrv4Jhyi2Dnu",
  "key24": "66SShRnBrf2X2gfqnWRH6PbBrSfzzGRdX2XBiSjc67afpxFRUUarDr8XZLnow1nQxJsLgLBzT3Aean5dQoG6v4AL",
  "key25": "6YKoWYCvnpQDypoYAz7NoTZqD6BVrZoos8fP66WgzCLUytes5YmQR4YjhijidKdymZXZnTF9fHoxhBx9sm9qZFA",
  "key26": "37sXUcA5UHHJ9gXqR69JLqocaw65mpNZFpw2pYUDJV3wGQb9Fi71bJXLp12qzHxuzjbi6aT8R2YTsbsNV3AQKLa9",
  "key27": "3JJkXeZchsaChy5Mp25hwvMdWwuQxBRAoGWMmw44mpnk7bxxB7xmo3ULKXmV9bjBgUrp3ppjihMwtkv3FeELrYak",
  "key28": "3Hb9ymT5TDD5icFgSiBtdCqhGXAqwAmyjT1Esp3yhCQqX2Ekh3EVmRUay95Z96nHxADSW2DkFs53Yw3gFgYHZFpy",
  "key29": "XmSxdoKzZwg7B67ufur9cmt3v1LmJcXT3z4HLFEWbHpSvwycNayqGcU2p6S2AsV6z4HzJnvSuC7PMr3To9xzzJn",
  "key30": "3MS73SgJnxLJrDWJ4k4Qt5AqQY469UbkokEk2QXHiaWw3RPvE1Aec8T8eQdzRFTEE5L95iRuxLNPxrT6UsJ2Pdy6",
  "key31": "4dvmPQqcyBNctVFhkNLNwY8Pw97fmYJQ1pSsMTBaWkW59qvghqNBhgViFHm5YqatXdxaLW7utCWR2kGSRWTYvbPT",
  "key32": "x8zdnB6MzWwZu8tqzwTAuKXUh8zc1koXSV4CYiboxoQ3pB8cAhzFvP1PCxMrFcrz8x6oaHhQoVkx5DFzuznNELc",
  "key33": "BYsAYRaG66SBPjsvwLJ2aeTuVKrRvFCKCyzqKmE6tiy8uc5EQUHH9pbKHWBP5wnsS5ESnwqFQ4bR8u1NYoCq42h",
  "key34": "4QiTtZPJkdGC1m4aN2ai1NG3vTi4U1igSLHV6br3BYeW1yKJVc9vWCEisRpWtWXWofLmxq6HEoqoshBUDfVrriW6",
  "key35": "4z9KxiVFw7EZemQhg9J9HxMhcNVgbb94YLBnHNcNK81XVdQGrKjzxUppAp9jMeqYjjZBh49kCG4W2X69N4mLp2Kw",
  "key36": "3KhquYbH2Xhdxg12WHPnypwgRfno7ZLHea33f8VLgbJGxQpRosBp241KNhA8gF3J7NzQDJ4GhLG93fVXLmBMEQka",
  "key37": "2NWqwkYw9gjxg6QiL6RJ4o7e2HEFQQzqDAVRt3DPWYgkHhcFKhiqXyJ1W92Cugsb2zywYz4RXY4ip4FBqQCwajfb",
  "key38": "4Fosvrqixxudmgchh3VXtzggafaj2MTigCX5b4ZAWHsGJoDjBCaaT3ET5kAj8VVhZMfhfWVudcpgf3yEYCDAcYif",
  "key39": "4MsL3PGq5HC9G2bRUYGfZgDxGRj13TG2VDW5kwK2uRcnpwX71rmcaMfxvfaP3tNmYD2TUdwEaK2j7maSCTFgKdQz",
  "key40": "2nmVGqKE8e4qqqAVKMJj5bz4mkRb9qVtRo2dWgK895DcgWQpkGKkKpe48C4Z7aejsJ5rBA6m8HZyJ2JfQN4Sh1Ym",
  "key41": "4Y6XPen77no5KeKnveYjLE4cxjvheT8iAR3DPR7GkdzgZATMFkoRccJrhTAiaem3QUqpDjd9MGcUhL8qKk51dmJz",
  "key42": "3g8AzNSu2QrMisdDSno3fRVX8KeKpkpxGsqC2Mh3jHrcd2nmpDi2DdHJpb9YfYMkRK5bfh6fuPXqUHoMiXhRBbAd",
  "key43": "3ZHfPeCxXVt9b6DbYK8i1PydHTZRHZrxNe9JV7Y9gBy1H9RDLcCyXV2Psgk7TDzKQPYQ3Y1PE7nKriw8qMdBZrAb"
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
