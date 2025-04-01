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
    "33tz5tkpF91HD45Upu1nWiJvZetHKyc24qqPYAQ5gZhJ1FqRBu9c25xE49thviFmqkJj8Zmoq8oHSfLNAdUug96X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BrEj9pY1SA93oJBrVeVx31bxWTHR5o2EDUcYT4zQVesKcc1us1uRskFqwReHHqpT9dtt5mxxh8veT88FUPisgwy",
  "key1": "4a5A5xEzpEmCmuykVjG9tSexNHR4WaEmp6xMjH7sT8v8qHy2maFh4P2kg9pAiop3sv2KjeJvPyMtorEKh8AUSwFa",
  "key2": "5CNrr8Rh26j7uoLSEN7YYtJC7pd57a38PxCwG3e8gnDmhAkbknu8ZRc6kfowzLdvY3hPpKzuxqZCoZiBrCvd6E1j",
  "key3": "2JnDsxFSghvXMuni32aRWzZ9KuFLYG26bqJDbiWHN2SC8DjvqhzxrxiozkbLT7AESAY9UvsUu9QC85AiJWJw1XED",
  "key4": "Bujyy4SvvJrLaVWxquURoU6ou9Ha6fyam1G7tENN7aqVChb4jjpqBYPT8Qgezcu6Jpa61PaNd6MaxywKLrKYsgj",
  "key5": "2QCY9iKzbYsRiXHWYn98p1kDMYxSQuWe5UkjXvRfUnSsBcxgCzm9TYD2N1wdrKqbDVrM5kY5eVFZ6JAeZ1tuKkxp",
  "key6": "5NPrfZ7Yu3Muknoijd2rFmBWgjXqwUPsHXHqtmvG9r7c6JjzQNjuEib1PNivbLh1pe3xikXezbTmfT4PVQVeYZA7",
  "key7": "2tzrPb7FQTVNNQC35StVPPhuWfD29JSnrfGmnaUjonKcvsnhxjTZ2vEJ8U3FMM2cpWVPUkPHPuk7bqYn64pPNwV4",
  "key8": "5XagBTNd7AzV3FBM5zQbCPGT1LTMnFkqmfAhKWbYzDNmqQ4UNQz7VxcN9ctNQSa74YSsJZ7TyAJk4xQyXvgCtNxH",
  "key9": "2xPcdrN5joDZ5uacY2o5e3qmovJ7kxKtHjt34t7nruB7kUumLBL1r2evpZXycNiDmCaVnUcJnhN5cjwZLNpvymF1",
  "key10": "4JSmTdJGgFgeh1EUZ1sheJjTKtHVGcCGqLTBhFnmVDHa4sEvW3utjUgMvnwk6pNieMNVnuHoerkgUgUKfcTJaimV",
  "key11": "5iACFtbxLdenSgHYLKFopHmkqetVng3SiKKWT7mYPPNafExfYJMe6cFXPt47Xaz7BjFQhZ93ocSDkruz35b3rfnZ",
  "key12": "2hdR2PhrFzyoSnxrf3ePrdBZUEtP6Fhhbz11346NEqznjtZyZB4NqTwA1eCbMwDAsVeaKGH9btfXFA6iWQj2vs8D",
  "key13": "2DwrTqPVEPHX5nPh31akziTRM8dzGwbkdevzNDoeeicRXbVvf8jNdkw4zjZMEMnpebs13cj3eG74isg2tqAEu57f",
  "key14": "3DAUeKXW9e8EsjxBUqwc8LkPHxktJBu9BNEwA632cAfwYtwEaj4d2pM5BW8BKv1dZeVvqp45XbLzZYVcKMAtkvfU",
  "key15": "2NjWN9R93bTbTpdvC1odEKRaQ7F13YMMxTd3HR9Pfqz6iXtaw3yNJTBZscLpJyWGfEbDDqPdwsvpnGKMkTRXKvPy",
  "key16": "4eRyHLoi2WinrCZySwuXyXnWoPod8A6CCgbYa2gpkZf6yjjFdhkigwXaXMS152qMiwbdS6JU7zggcLPDRPjMeAws",
  "key17": "5NCgHnYyxEXVw4mMxG8rUreMubwp83ScW2yJ8Xf4Fhq1dPbsRxesDRW1Ef3uUPkdPPCBn3RfCkyH3162ndmnGd6b",
  "key18": "2He4VhvHq8Nt2C8XNja47TXuoaxeUHY9WVXksRreicKo2d7sRoBF4Rr5S5JGdwuLSTUFKawnhktRtjAFnSDDvth7",
  "key19": "3oMQ4AyWMoMYa5M69wNe8FgmphrzjqjGkDfqJ9ZA7eqvPGJLFPgcEotafAXESmh3ykvVqCJ3XshdVgSQzAEhRk2e",
  "key20": "3hzNq31yJAwu6JDcmcPWg3WsGG2WtYBhdPjFKgX9DhKhcNveZ7RZrtfZfEgJLwPcMBfKFsSbQqeYyEojBdX9cx6K",
  "key21": "2y4MivW8s8XVazwAzoKTLQFEc3MpfGuTLGzajLbVqnc9YNG19Gx91GCrtca3g8h9A3VoaZgiHFPuDu8SJ4Ebovj8",
  "key22": "2wYUp5dovxecr8KzgTbrcNZvAwffoMfYCpWDQK4RVTdYS7JYWTv2foXo8cXwdaCdkvTzJB4k1nuYC5BZin9v3pJz",
  "key23": "31JnRCXpgWJVj1Kjhh7mvQPa8cJSX8X7x6nVNigx6LYEtEPpQZYKTj2gRa34S9J8xuF95GCEstmK497ScXMTAhGp",
  "key24": "2j2eDZwHrj1ftFtwML7kauqMk2v2RPAqXJFCrNYVw5R4baC4HQNYb8vfVQzsJibcbVST6nhZaLLQ9DkpnRREohzp",
  "key25": "22okh4XGutWRBYaxea1tfBKsgBCJ1v3e9TNCa7FJD2enuzuaTNsHoBmXiF84AQzhKJogpyxeW5iiZVLGRJtGGkMo"
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
