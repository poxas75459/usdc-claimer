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
    "2TXcNWCrrpPvC4T3e3AcDEpxHwo4UK8MpU7iJ6uKa1NJtmoT9uzggJaUyfrD2Z15WMmsXTDsRABksNoyELENxjFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gWPdwqjMo2uscniZ5FR1VVQVjzP49akb9jM6kPw4rhLLZXsVixz2YdwfVfuLJQwRbzCGLcHmqUvxrR3yTfT2C76",
  "key1": "uoaDSx94Ab2jwotvgM2p8zZt1jMJ4JhsodYDrW9BFL8SjKCj49dUtf3Cg9yCn6wJuuQLMxhm1gjBgLaN2k4NdG5",
  "key2": "oruuPPHxNUHjoKj33tNSeZD3dBPsyMZuzYnLwNXCejVYJPLJauv7QSfDeywidjs8cmyxqE9EXWSzmoC9tTjWS6A",
  "key3": "3ywDGxp3B26eSSozWSwPnAne2iXdsqYewV5Lb8q7nPJvLttxsC5LEyXLXKA4eduD42LQJPhcU79XDRVr72KCqWUB",
  "key4": "55LQzkXBQDxsgPXQfPuzteEHw8EQn6tBt6jw8oUQNKLS6Yf18keUeUYn19ZuWrKm12HSpXA8q7iiUuomUA82ap69",
  "key5": "3EoViFeyeeki5eaDpY93ohpSuRRnxVW36uP9sTwfudrKgExbjN24hN3JWNjF2aPuM4L31cnWhhjwg6B3gUKxP3qX",
  "key6": "4mpmNiQjPj4ZWqwFrmFQ5gfd1pNVNiivXGzNd9TpXf9HKgLs4Q6jUtas739xZgRfbu6MPiLHe3uxCCcFjwBUREwH",
  "key7": "2gbyzrCHQsUrHd56hV8TSh88sZq1wFtJNKRiZ6jo4zfsDzHMAK56uweU7JkN7CwfVCWNaKxqXYfvnRBaZeAFUTHd",
  "key8": "4mowSnoUcniB24PLUzd13WLY3oJvwS9QoF3tAqAk32Z8m7uFhtPd4XucfF1f4CCKkUSt7gCb77ugbhgkMrEU1J8W",
  "key9": "CXbx6YKDzrHJMndnk9Cdmmnqt76F2YSLNWj9vFi5ioWJmxUWK48aX9MKPFxJ7bnut4yn8tbzDWjLnqY6egbmmrc",
  "key10": "LymHrJdQEjWxpjBYnQJYd7H5kiXpAFhN1yeBWjMY8SQeSaZG79pgwZ2eAonvtvT2vhW1xqHCDwCXwDvxmrMzpbV",
  "key11": "DcxZuoLcKS2ALYLsfwv3zhrXGHmVoA68Uen4DEDku3GSo3sJMBH2ESemoeyZuq36dfGSC4dYC1irSQwshNBTVtp",
  "key12": "85JwaNV2oKVZCXzWE1R7vrYALm9ppPp5vcFAvy7nXonxPtJXjMsNbKYbWNcpBKMiudB8139Jwt7Qpe7XzM6vAoy",
  "key13": "3CLyL8UdGd2dyHwJuRwZ4wfhoA9Yp4MGkTEKWYtwBYFJC5DgajcGSWALRhUKX7LjPnENgMXG4RCJwiwo9GwtQ44N",
  "key14": "5393XJyiqxNdtXsfznak3DE8zWTNY7BnABhvMBGPDJxCma2ba2ZZ292ZQAWJZGMP6bv3Xo1ixkRcqJU9BTRv1dEn",
  "key15": "4myjVWro7AxdFpi3NzGLzXHGW1VhXv5LmLCGmdnw92UzCYm9dnB3osHj1sQFamLiVkk77PceYpas1nc8JKea6xYP",
  "key16": "2pVvkoWKVmuK6ZaXo66bv9tP8UrmAvjCUKwjfnirsNryFhWq4SBUotmB7visvDLUAhEopJ6krU6bkn1cSGpkZEY6",
  "key17": "kfbgxWaDnDQDuDSoT27xeMCAuBWaVGEvpjnumqCugZ17EBZa6p2oy6U7rX88A8H6UAzbNBiL6H5vmZsVRDWV97K",
  "key18": "5SXsZ7xxR7r84CeQdq6L7MMUaZCRMkbuWwBSgNeMmtz3Y4eniKLMMe36caQvR2GLP46NsY53waj5vEUrEg8N38sH",
  "key19": "m2nmqqvTFcVGwtDvM3bU6CEHhDfJRxEPR4puizpyLYwnRXZXnVBtkvTotuf7UVbUfRrN1GwqT17j598EDjQDV4v",
  "key20": "azF94uNBJ3VaJPKrWLwV8S7DWaRTj3w2p6JwMKyvyMhvAKm9x3RrMhgU7zeYSsHaCkL8Q13ec1brhzsUhPDsyfm",
  "key21": "2vMo7ZPt1BuZuEZ4QER4WrPgugmjtjJ1sZXe2QAXfQniVjrH91eCD5nyEs16Yf3CiWh3zWTBrmWgvLAdoMQCgW6K",
  "key22": "3dQc6R8i3UY8Z15MbKGsPaJGkQfjq5gu9vZExgMbwrvN8ciU8cti4xM7szqoZs3pRZgs1NyG47oe4GqAkESzDCvD",
  "key23": "3y5e96wus1r8uhyPeZTWDidTBvJdNp1p8VPpC6WdkEmZt7EwGBXZGLFvzaWX77vxqnNjmZvrhCR65DXpX1SwEymT",
  "key24": "5EeAcAyGQrXGexVHBU2x14paSvrV8Q6LrMrpWzZTDjpTC8HdqX1RhCmoUDc25Y5djoRYSveydW64aojj2SEfVK9L",
  "key25": "4bPJJ6tEcFvSxR5TAMLLAFgW3gVm9rhmPjKxnqeoUAWjG3X9NxoRckG2DaDUaJaPbDEcd4HyuMmbX1XDPndkgpMw",
  "key26": "45JKibWeK5MhKjfs7oajJQHomqWU4Yy8XNbApuYyWzcTrLRDSAefkd1pMjMyzmUohcLebxYJ83YGbnxTMtTVwLxZ",
  "key27": "3znjXdEMLX2J7g7jeWm7zVpQKoStoomdjMppM9zLMuHSja6y9GGjX5Ey9ToJ9Mm36453d6AB4YrFxCszvSiyngEU",
  "key28": "4samEinnEM1akHBY8Yiw8nAtx7zDeoQGDaWgcmNpLt4yLTZCvmxj8z9VWWKCYEFhzWP3ZchEFByeWnB86GDDZqee",
  "key29": "ULbm9Egw7i9C59kwfCPsS2U7PZ9b5gnViPDpVgPtyRWPSqJBhMj2KgxUEnbVnPG4ba6vmANUTDBJFJaquAn56Fm",
  "key30": "58nqu4KjWH5AAUnS1q2XfnJT6ZQSrbXMCkRCMATkBr1r4fkB8SMtg2NopqmuvoesFkjKgq6dpjttjn2ChgU35o3v"
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
