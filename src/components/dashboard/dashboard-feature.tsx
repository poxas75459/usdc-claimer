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
    "4ot66T4HsHoHiSjYAV96CzBN51UBk6SZiSj5Hb7ccNT9u7ubuHwhQRfUt5KgDZgniqt46XKEU7z46XRgntEDzDTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TUMg1ueN3G2WasVjVRZhzvziWEaeeoixdhKNpJ59tRavatv8g3jg6MhNGtvF2ZvF7aQjVZdfYDsXW47jNJpYJH",
  "key1": "vGvZixtcUAaRfT3fqjnc3L8tJ4tJqfhJAorypkJiUSn7r6KGAjFr4pi839Gbbkcuaa87zPR5wpnAKdmbJEGJu24",
  "key2": "43QVNxKkAwL1fHr8CtASFY7PSMK5Eud1szHTBW5ZowrCLi1EXq4g6bKMx3HVCXodyyAnLwfifhw9SAdonRqTCYJ8",
  "key3": "2dbr1WSnokZGyVXd5Luctgegia9ibAPZCiaEWKYpZaB9bEatChJdbotVQDDynXVF1zvsLSUZxYHK6QaTCwMFY6Ns",
  "key4": "3DjAkPkUECyAG4qVPaA1N3UAH6E67kVwPD21gWdXMYzVKp1G7jFLawnThjQiKNB1C56mMYpb5s5o2b8g7g38HGZT",
  "key5": "3wi4itLwjUtqxaivqMVHazEeiW4QKgJbWxYUsX5JcTeJ3JbAwF91SjUJbfybmt8ouftAE57jaMf2x9fF3bBBSsg8",
  "key6": "MRYRqPxZwGX9DVa42Zjw9w4MVgjZVh57eJn82omRpKk9Uhgyhxpcg314mXqRzbD8jtwJ5UM3T2gX6gb5XHT9GEJ",
  "key7": "4RQ6zXHH2HWWpk1hWEV7vYUUD7ahjUwHedaTEg7GPQP342wHF2nk6gUN9dYnW2d9PHaV3788fgrCgpdZgcSCgEFj",
  "key8": "hEpB7T3Td78KJYQyHjwozppksAzdADWnqdVcEJcu9NKbjyPQB2RkiTG6NU7WehQhP68RXg2hK5G67u9AnhgB1Xc",
  "key9": "3hvFBUuZdn3amHF91KEkjFHELtSifXmKcvYUKTu4gmx4cX7AwPpmTgRJCUaddxKzn3ig5DfxpFaLSMC4MeuNy6sT",
  "key10": "3QTjy4y2Nr76jT7avS6kxebnc1ofUxEV3rhGGMEEAqRgVB6Lfybt3mKGxAR2o6ezYBJvSvNP9MeBXJVco7gU3Em2",
  "key11": "FV6bYQQcPYUoUE2xYVP1swqXesFHqZBrw1xiXRTLHm3GEAbKcSefm54KZ9iGj8AD3GUtET2VnpHC3KUfDgAk8E7",
  "key12": "2Kergex9Ckn8v9pMaXrabKgBQEpovHQT7XRuuMKXJLDSn4fZahQLMQZLadDAUXqPvCbAj2be8TWUkcjDHKBqtC9N",
  "key13": "3ubnLWN3KnNxXcbNrwE9FHDi3YqeDHwraDUotwdoBTRrL78cJskg8fWmx7uecKYbEYcRyfEmXgC2PCJBsUwB8uvH",
  "key14": "4b9RYuuXFKhfvZpELrGYCWbkVVKBTPbyqtTWH4vFGM1KgCmNgQqZLmfwHB2bDJCRkP5rsXfJJutzYwVSi7Jf935V",
  "key15": "3asxz2AywGqkpqX12jCc1sPCyTnyxRaThDqQn5TGg4Tjk8qgaJ2snaemH8ijLzCbA8UqMBv4RYmbPJeYeA9YRv5R",
  "key16": "4fGyk49WUzaj2iv1X23BzeA8ww5WuY2DcESr2mJ9dxWDSxJfFJ7srWuKegKut1GuFjuC2zTnvnnKAPFHWQNpRn9j",
  "key17": "2ydSopy1YwL3yhKYbPixFBxuR5u9QRRBTs74x9Mx2yMjxAs3xkrXvxsJVVnVBhB7REcCt6vvGs89bP1ePZqMRx93",
  "key18": "4xwM4QnjE3F38iEoZiLZjfxs79bQxpNwVohxEFBr6NaJswJX1Qn3SRNfp6kecKkkfnDd5bWoSYYf2BTwY4CfHtMw",
  "key19": "5QsjZtEvt3PVopwkzacceqxfWKamBi8LprDdj45VCXvqsBtCzNZzP5NRmUieTvRg7W6TX1GSNo3v4w7SbdoKsWgD",
  "key20": "5x1sCB6AwW6ygkBzdgtuhQwiQRNzoZNCN9aqZiYLoFZWd1P2DUN7HxdG1v8NvynhAH9oLcsDhxPjY49YMvF7ixyB",
  "key21": "5iFfMdDGjckLACzxxUa66MKdykQGcv4JjigU29P7tMsXtxYhDN9hHpGmYSiHcnZsEWSsemFZ3fKVtw1kuGHCrhmP",
  "key22": "5tNnjJLEz3VfbrjYCK4XFoQVxyMd1Ekp714s7oHTe5Ejzfk28KDG26BnphfhfqkB5mFSVwSGL4dU2hsuFDde9J6b",
  "key23": "5XYShY1HELQZGemhqvShGNbpRYToEvXy5zPjjxxX1SJBpTT7FhAor8F8xSXvPZPNyUinM6WipvbyV5M6j1TvBeUd",
  "key24": "2z79v23w5HtBxQsrndSEa4N1gdAyNjoH9e9YCquSYeqai488ya5uKbeFUs5R16qgZBi42n8stmhLpAC2YEBU5eCw",
  "key25": "48m5X1royxxjoNUJLSystPkMBA56UFw7De9Wu2mNhXAw2JYieQaPekp6sQdc1jNZLVb6rbKTwYTbT3bzDFiY3uJf",
  "key26": "3DTmWwkEGwp4MQtvHbozAwjfkmmFQQWHEvRdwx1NZeYjyw2F43MXy8aMrp3Jd97tLY6K82QHJJrMK16Dr2tFwarF",
  "key27": "31yqVe9BZGrME39EJmC22vxtPfK82VVs4FjMrsbZocudiVYoqyC7usU4QYjsLRmZxBApYG3Sfk8EVJYWagnFocz9",
  "key28": "GWCKbJz7mGPnUHeEAH7Johjy8Vux3odHNo8hMbf4CxH7mwVcE9uF2Rw3xDYwvtoWMkMYPNrE8id9t9sL7hJVpNo"
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
