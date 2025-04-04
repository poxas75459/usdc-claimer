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
    "aREADagpvyLNNTwctKav73gQuska3YpVLeWRZ5kFPW3Yzu3scBx8creTHZUcuCTfdiFp1LYyopNDSBv3od5nm29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWUWBcHgWdKkuEVX4vQpBEFkDimqpoyN2khA1gMWsc6uNvi7YJGwGxN66rxbaFjrk8BpPi64DPky667ZkmfWjWh",
  "key1": "NuvwRVqfegzaHCcJBH6GiksPu9mixEuuP8tejHwqnh5TMFg8a51WXugiTHxKT5n8dQqEJkpB9gcAhhU6o4WSYzc",
  "key2": "5abxueemRXjntK3KLzCZcviFYMe6Cky8LPecZE3gsxLVrYsyCb1NrBMarcZFxrnrcPCgSaFApSz8aH34ZwMAm5LT",
  "key3": "3Ds9Uh33DpyjX4serw1SQhgNL1AzCZ7nGGCxHfkEvH2QW2d2JzNxpRGRW3nHS1QSaLcQtvpGmaFxb8zHuvUe4TUW",
  "key4": "2Rh7grhchiZuRFKmx7jGUyZ8bX8vXNaZ9RSWYoht4Z9PDFjYazcCTuNhhYgLhApDwUYA2FNBx6UJtpkW4zQ6VbLH",
  "key5": "4tMAVrDFvZ4v25iuZeUH3PiyYtfWYYMWak7mCGVKE7Ntu2JXDGqcajtGQsWc5cFuPEbu4VXW4XoQMJGKJyteKBup",
  "key6": "2tJL4aNfYpbkFzj5KPxtoq4t86uRirnLQjuLbJq62HVJgCakLXtKoUitDVixwr5A6qrE8urh5xs9PBuH8c8J4cW",
  "key7": "2V6GrxBL8EXyd6WrWPTcECG7U8NP5zT4TtRJqRbCMpLpQdDFimxbhr3y6v28Djid5VE8FSSE7PrsBbbM1rjB7QCK",
  "key8": "5iNr6h972uzaM5ZecoSkXzpC5LuMoF8YttU7rosMLuCpaM5RwnEgViVwVir6U74Dsgguy3uM2reaBmJj8XXY43TG",
  "key9": "38nSb5DNKp4NmBmo9xjRFtEG9Ysht2fxVS3RcHCuMiwMh4DWSwN4rrmQ32wZaoPdSbdQwTXhiNd7hHLccx9GDT3M",
  "key10": "8nxRkUM6cNNg394EExh9Cn3EoqP2x3rBv1GnUsL9gVgC5cvb9iW29CAmCiozaPG7xg54JNkezxpf4bfjMWPH1rA",
  "key11": "3D7HKAFjRWVkKZuucJALgm2cSgLRUvbPdwXFe8NPNEeq8Gq7NRZ67DYXfmyZ3Zg3buGSiBiHbKbtThJoLPdHu5Ko",
  "key12": "3BxYh1yJHXf1FHQdtcPh2HbheJzcoG9yWG3icYPH6sgEEmEJc4zzSCv7XxKG9iLhKRF2Wc25WKPYpU7mTjD7mixY",
  "key13": "3t3PpV6W1LJ9LrTBNfsk5nxWfCDFbYvBBsmiGcAF8LBDvyTeRmXwZy8RTR18Eu7dR8hgwHip3QDiq1Ek4zzCMXFm",
  "key14": "e4F5xxWTMXJ5y2QZYnbtN93hB86qCwKdoYZ1iq7nKre8USGNXs3sKFpaM6Xp5t5RsRrrKSadi1NrBFzsE4pjATc",
  "key15": "4DeAmE2hjYmg1qe7aF7Kqv5v3Xzd3o8YoSJ8q4s4ip2DQNfi5TefWcrqDCW9o8ntqQfNFCP1di6Qw2coUcT7oTAG",
  "key16": "585evpCdY35DUxBp1dfDUvzDKpYK9RMtfU8NtPdHeJS5aK92atp6AH8hFb7TJUV24rRRntbyncga77F2CCCNUvQG",
  "key17": "QF1xVmrx4pRD9XRXHxZJWNqdxvwknhHWUbqfUwkThMHxKtticoHRtnLvGx68MNsGXKnFdKuGJyrk6Cj4ePqFMvs",
  "key18": "5MZPzUqsQt1Ao8cEG237HtEAEMWm7BVmfrFS8C3NXJCKPRuYS2xoT2Rh45xguWd6bYNbjXW17xtWNHUam6N7Q1NQ",
  "key19": "2sZDfL5BqmFsR92capyHz8fgro2nBxxd4oVYnrGmTBepU7EUZvL67bimNgEzsfiHtrLKDbN3CcnhKokeNZieNYVC",
  "key20": "3gAWXXKyuhRbWDmsgdfBR37mXE2VqSLF8YFtWYkVSUuzDvaDihfCjvD5gaTqP83RFtppQy4xJmaLMv3FbKJK5NUS",
  "key21": "3YhDzPDGmn1Bq1WpFjpYMm7JtZTXtVst8TwkymfrHo9k1TqijBbZmpPWngMExts1qTr2KChyv8aXbDA42x4FRBbR",
  "key22": "3dEteoTpK37wdPsANr3mgcH7j1MFgAxPgZza6MY6KgnUzs3s1e5fvdUgjQc3Ym4E7qrngR461d6UrnMSt6kB2iSE",
  "key23": "3uCNTCsUPMABEh9AFVLpcprotCcYf4QuSAZcucxg6pM5w7wSG8hUn58oE92d1YkPdwFDQVRCNnswoCVYYdV5MkEg",
  "key24": "5AP8PXoN3iRJPgyU2imHPWgJmEGJqGGb16a5epuetZLSHQBnbZjyc4wm7yTXrAWWX4XadqCHYcXbwmaobqwBxjuc",
  "key25": "4xQ2xs4YPMhahMdqVwsXHr4Bhzb93eASffxWi4hLFkYVbG1t2VxyMhVGc6tBKcR17Mkf2Dt9EzMZYFvbo8ZqPVko",
  "key26": "QAg7zHmukPU8gUnHFNBezvWzvDrTNRs7rnHBCk42aBvDpVDaCZZ1mUsrpNSrxmzjdy6FsetDMryEG1TeiqzJU8M",
  "key27": "BnpV7UGUbjP4Do4KCYhKhuHtVw5qbifHj13RKXsdHc33J7r5GVVf1i24JQhNXbEZejABMjZ2nhHhUcnhwpHZpt5",
  "key28": "Wpghr71wWK8HqdMVTW4V5SJ1DeiK3C52EmrLCQL3QJvgi4V1Emfi7cEo4kdJtrackifL4SVkYyJGZf8CrpWxmeW",
  "key29": "4EoWKpNUffroUkMZHhL5Uf9JAbRb4HmqMWNWhRvcjPehxE7JPqaFUfiT22V1wnCTB1oiEJRaFJXB2nWNbyyyGUyA",
  "key30": "24TDWLJLJ5yyXWrTThMyjhLLALAZfuNuU9pkru137W4qrEZdVbuiz45TJuKLGfpgTY35ZQ4T2xDF8bg8NsdZhSaP",
  "key31": "2v3wPM5nE9ygYEK61ejNcCdvtakiqirf8YcKFBJ4ur1sWBnmAKBdYc5DZNr7gPL2nZ6iRM4Q5QdDZ4T6XJP7k3pN",
  "key32": "39zpPgd3g84xa9j5aHjrE98XTahKZ6MKdx657AAfkYpYEPgzb8QopwtmT9iHp4iQV1e53yDwU3VSr5gNCs2uoZZw"
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
