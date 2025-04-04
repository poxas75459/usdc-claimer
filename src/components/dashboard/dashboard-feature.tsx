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
    "V9fkmM5FQehKK9xswkjy5knmbkFwY2BugjejZJBaKqjk1GxrzDmG2xDkRZ3GGpcyS2sMqa1JcL7He7N7w5hNs35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34pm2bz7VPMvwR1CQw9EL2RrsPgN8NCHjsFz2R8uYgDUj3Y1SkvGQTagQMhaD4uANmBa1KiPniUKEAEewtdKsLRw",
  "key1": "26txzK1uHKm5fHsZWbHMc4puSeGJXSzqbnH8AfQncuWqWffKN3hxTnPRsWQtNRyGSfXaX795BVEtji3DBcfLrmkq",
  "key2": "3KnDiT2ALJx7ibFMbsZtqASukXDWaEsERvfkMMXe5t3Q73dCNsoQaJSxVnzGkn4LWa6Ea6iPTn7ZuD5ZVrZcGNJR",
  "key3": "3jhGH4bFZGFnrbsPcX4t46sTb5fsKjL553Fth6PTLH5A5QGyyd9V5QsyW28zxGEZab1xwreryZc4CvJDJPiGmPQE",
  "key4": "3ExEqAawFrBDZZsGyVTozNr9Cf9W9en5R8ZDs2UUPZYGisn2BRpnC9yb5XNzJUqUqTzzt6NRvnU48WdQK6Dk6AtP",
  "key5": "2SBy55MC8Z8V78LnTcFyYMWowBhB2tP5t4yW4ALnxU3WpSuB7GnaPMwjAxceKNaWdSrRXvq2sZ3DCcVae3EqbhGn",
  "key6": "f9kXNGPjDiztdeCD38tv8xUcjhnB11vX5QT3j871EXUHbEnezT5v63bDoY1kS9KnC5W4E5B2oiwcVt331XoC2xM",
  "key7": "44KkXJ2t1161qBtmhjw2bKhzSfZzq6cHtW4gPZJd1TnNiwKHq4tUNdwnmenkZMBwfbes5RoH7kFvAkdaUdErYWcg",
  "key8": "3gzW79GUnjSo7wiW15yKB3yNWEPGS6rTcbhSPbb8LD9pQoh7tkFEYRKg76ge8Z367W7PDPAfvaxCsCVMQrYXSE7M",
  "key9": "47db8c9vjvAFPVefLFuwv2LvUwXsrBFAGwHWY2a8bK7F6gGKPsNtXA6wVcG2Gu18HGpKqdhtcMqgwrBLskMi1g84",
  "key10": "2U1oaDXzFniLeGLXt8Tsd2Faj7KzopGkp6tUkmQWW4La4MF97DEZWtHdWZvaVzuTYkVNfRwKWZKrjN9eT2hv51PD",
  "key11": "3xWZSxi1c7SaNAt8XDxcZsT6V2F8N7YAF4dC9hfuB5oyx3zue753wCAn8aM39i18z1KG5svntD27ghs99uVtnC9a",
  "key12": "5pkhkuNDkSPtGMmPfgDqWcsep9HqBQXREg4Szgq6Ajz5gEU59yk56AQN8p3bL8TTr4ZBuPthujaK85dAntLjRhXF",
  "key13": "5pWY9H1EAC3R2fibKCJeh8BhTpaHqqCvHCTKXLmNeB4aexkCZxhMduL3wDXLw8FPkrKRZmpezWjerwXeiJxAYiAQ",
  "key14": "qkvJniXY9VwdG1YZsoe3doP3txFwCAP2N35HnHV5qk8aUxtvqYHJPGQoAFNP9riNyyXezwR4ZwnaK5dtdEXBmWN",
  "key15": "6oygfuwPjaPVrNaYaVSCCoqaZZiThWUp2MoT8wb6St3UhpXKNGrTMqvweo2PrVeeWXhyVbYXTcJF4kXUyUveHLv",
  "key16": "65GdFbQAqP11wsLFhfvovRw7taHERs3o2o5NrUpsWpVHEAE124zLzbRAt4Mu7p8iEtEMwLkY98wCqYgb2odufwkT",
  "key17": "3Pg6tUn8KiyadqEmniPPKet13yxFn26CDe1Wtu1skBheXWsbK2Gm5Fq77eubGPaJBahjMBFZEV1qgUuF2Spvifjb",
  "key18": "3ARGFRZNy7wmUwqPs8hbQ2EBD1YwTqoRwy2RZ47rwvEfE2C7VFxvX9RstBxbJ7KcgByrm8FVXtMzjnLKMzR9xaEw",
  "key19": "4RFSNGsuQMPyUnUYMbHpJvYuMK5xGKGBQKx1j13UBwXJtUZfHZzyp1oVCgqQNAi8DnnYatpFEGL2hjcJX1ScDgVP",
  "key20": "23pNvL3F9fypRR2gUjbdCn3iY6NcLqtRWom3vAUXNoRSEk2HQS5zFBmDB36g4ikNiSUo8LvifTMhjCeE42sMQkra",
  "key21": "SURuXC6FGDkKa4d7HMxs4RgvWFTJvgecWLtpyUSF8dN3qVJNJn7Ht4xunRTu5aRtwQcXzukuZFRXPBGBJHYhTSe",
  "key22": "57fVLhHnvK8zxCHbEs5dSmZmoF1bNZbCWRmkRJeRNnYP5uakJEkWtcVy1XVhAxvNVE73TH545KRkMQxS9BHsuLkr",
  "key23": "2DweoFqcJFS1VJQYzyNE7DeT7p68ar9ZLL3xwPKdUCk4uWVyCXZ5SdQgGaY6EDxueGdtDxugr86zAFUFpx2gGRLd",
  "key24": "3riVPPsmDjHSfDanLay7H3cuF4CSHscjTqAuThT6HfWXtr7ZZ66XDJ3g3BymXpERsfWwXSrReLAZAWJQ78vBxkZm",
  "key25": "5ck9RZPLxfUvQqovYytKYonbN5ZXAMFVvUhoriwSGsJRSbbqvXxq93hB5d2RsSbj2dDoPkNCEJvLspL6BydbzHnX",
  "key26": "ox66tB9nzXJirHb6a7iD2Gya1vpt4uNjCpwoC5CX3vcEh4zdJCjdCTAw3cMunyFL4pR6nWtQEo5fPAnrELhcbSh",
  "key27": "327nJdry36y2PdnSannwF3T7ZFoqhJ2PKJY54AM1EW3YGeWFdBJQB4uaYudDxaQVYBHgnwqnodcdL8BwC2ceXrRA",
  "key28": "4d8CmUDeKHnqs2xgy2qVBZSewEfr5ZZFraMDDUwA2Dte2gqrcFDdW5LtCka5AeUEV9Nj2WWDjXJ2scM6r94RjssT",
  "key29": "4Vxs7WunJuaoNo3afUK1c4VTrrnxWXjpyxANmdWELZv4xdoj7R9dbhKrFyWhbNuWweQ2ZxQ4nybuy5kVmMSE5Tsc",
  "key30": "4wQfpodAimAbZznJwsjjA1BXPXjVhh6vyeVxMBUQVkNYd8VTpT1jSvpRSWz4Zj6EkndPD1znZd8oBw9cFxfXKbMv",
  "key31": "4AFhL9hyZ4Z4vf9zMv4KeuP763UX7HcJkjmBGc8uRaVtrTTAN6xR6xojUAnh7RUJSHmC4RooXPSqv67vzesdwBDi",
  "key32": "39dsHXtcWHoKJSv7XTfhUhPKYVzkimTDJp17C9P9JULceSGWTj7CCGpTjEMcUK16bmdiCE4TT2ZVU2Q8ysPaDWU5"
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
