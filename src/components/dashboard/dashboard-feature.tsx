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
    "5gjLf2J9qFAkjgvGVVMY1v98BCxErHkJ83Lh9PeSa1MtbSvASgh5drSb4RywaJCySJ2yER9bnjMMZQG7EWL8S1vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SBAUFQ1fU9WiHW9EWLaKgpRLc5aCLpCTgDdx6Gz1XwazWLnv8Y4X41Ufa8PEHXJXVeWui9NX4P6X6mBLbWGN4zY",
  "key1": "RdKK5JFW4Gg3vay2AZWRGQgdhy7hTXkkfu1rmCGSiDmsQtGB2rvA4ewHtZPVEf6tJ1TJ6UxTt84Rpyq2bwR9oxd",
  "key2": "4sfGc6oR1VfNhJ72sXkorcFY938UAWbb5LqifDukDuauWB25RdjZb3wpEdU85tZDywZs7q9Bp2SrFCHWib41Sytq",
  "key3": "3YTrNT3jM8dsDyfs19sG8Y3uFwDGjArtkVLRdcWahG3hK4NBJBikBUQsKD1KBLL3jQTztB2f72bsXNCddLmu25Qa",
  "key4": "3eUKo2Lff27rtBv899uGayD4PYrsfdUEWWX7GHqmfjzoE9Jaf8wt3ReJr7EJ21AqNDcBDV6qZ8sDr1nHSPTAV5ug",
  "key5": "3os3KCDGuzwpcgGxoSvrrrD13j8ZzKjGgHKgtga3E5QMwWKWSFE5yNvepYWSt6c5fhAkyVtQ6Tn98tJV1ix2qFkR",
  "key6": "2o3WT19tXvQACT7V7ZjW3FRVEYgFzMg66BZfGRKqVS99BwWnMbfwr8sTWZ5NToNPygDmy6QtHQ7dRmshLfAHiig8",
  "key7": "3eTWiudfpAMRYUtV8TmCeumTX9DJjScmAcDLkKCnpT7bSqyDMMbZvLizXHpc8JePf3RpdwRaVJ3APcq6zgiKVNi4",
  "key8": "5WojCMC2uEtcA296SxhafnkZzPkS3Ux9scz5XizKYM95sB4CMCuvLG7GXgggY1jnXMm5DTnNvDfhUPo1Cm2cTHKS",
  "key9": "3PM312GVvTf1bxR9LYHzm37g7uF2nvnaMCsWuVfS4dQyCf8JLHa4pVutRduewhsbwPY98z2aKwipGUMSnfLCDAsz",
  "key10": "5k6v3gA3MrA76kUBzZavcbMbB3dycTtFakrQZwqpw9GEiewHeikNK84xZ26gR3k2mbeXk9Sg9K9qtkVaiShrCStD",
  "key11": "64CySC1qt719a1KnC9mNc7qPW9YqbeqjjcrMoe6W5y1esTUhNA3345aKG2UxdUpngjdocxKZ9cLCHdF77dsDen8r",
  "key12": "2n8kFYNJftdmjuGamHES712EXiAG8sMBthwss1cFneGaq3MQZsh1hAyXkF1pvb7uYMBahcYNS587e9jo4vNWxWp5",
  "key13": "3ci8bdZbXD7u2fxPG23gaW5ifWmGkUFp2fmv8pFUjUZ7DBYbREdJeEbRsEHBpkRPRzU9WW7Ti33LNFmWZjPNcvnJ",
  "key14": "5D3yahNuBdyGh3eaiay6TbsXjYZpD9H29K7NewA6Kg3c9W9R66G8L292b3kGqNQQq7XLKk2TwaYX4445fAfDBqjU",
  "key15": "2Drmtam9XgtDdHdbRWMvV8xtKHHnsYJ5op2GLKzbLK9jPQfDQY9bQkymMcsLSdjsi7DMJj4ajRMuDuGQKX5Jyhtz",
  "key16": "LV2q7eqeMTmKiFyhEVNh31nWBi8jwCRg5GMSZL2g1cXRdDwd8m9xBE9gSRYLFSd2HEECDvdF86b8TzW18PZS43S",
  "key17": "2XVtTRwtmtMQxEujdTVcrxa6TD4PfjVxsefngz9xU3my7EfqWjTzqGnTvbWMWQks9uV47FKUY9bhpk1sun7Yd4L4",
  "key18": "4v66Na1z68v2zx4KsgdiovZ8zDmLLyx54hdpufTRvdtWhevUK2w1hKLyLUxviSR8nBXjVfkQ822BJXJwky4w69MY",
  "key19": "56pdLdUzM4KFXJNqLAghB9JX15whw4kUQ6L46tanqYuHJ3rPM2na6J9xquNqD4echMo3NdwdeLJZojbJ3s53LFeB",
  "key20": "5TLaD1JwEQFwvG2DuVY2vE9WiYed82r5djG9kb6ihbTbcDD7iJpGGCEd1mDR3LoQDihaBzHvpyJoNMY4uDVcJucX",
  "key21": "2bbjhoDiwWmzQhCtWfPhuutvysxLzHgdLtku3HqoLrcnP8mA2ogPjubxuQ1sjjqvopBRDDjJGfE6JzgTVWE6vmKS",
  "key22": "3heA1mxhLh5MEsk5tbf4n9V4tHbE1S52J3g1VhQXMmx4w6oCFe4AXC78UacVZwQEqZHKNBVGwhgZVCwR7wTWuXyq",
  "key23": "PfAo1uZmmTcUXJd5rByh29KbHmHi32HqUPrQfUvgoN89XLhYdVtSn3o3cUjhBr7D9dAEqkT8uYg92EH89dj14E4",
  "key24": "5s5FWMMaPGYspPVTvbv3jkykVscNmmaMW8RUMFeV3NaBe711rd8geKeWy4Q6BmvzuNAtMqGCixR2DvGFHHNQyRVM",
  "key25": "51BbiS2zYwYLU7PYwWFvF3RY1a6sUuR92e1fymh6zBk1yRXSGMZ4QPv8HSxgP2VEAZHftjpWALKRAyEkhZnArGp6",
  "key26": "4p8y6qAxqmyGS2TLSPjhKDPuZDFHHNRhsY74aHKJwHzHBdr9YVZV9W6Q7vwLBqoqLqjJkRcewFT6LGRtSZ66jkjd",
  "key27": "k2tSN8UC3pMTTJbHokgyJzuAw2p61gFLxNB5STRqTzxdjZUwRGWMAjW1Ev4wPvFovfYegLX9J7RACv1DNBRwY8s",
  "key28": "gwf8P35vVkiWuLDFeSqmGzSqhDy8yxTJAMy9gmoQzL8mpYsnWneXPJwWdVCheUPc9bbHfGmPQm75CdFRJQ8uyD4",
  "key29": "4CutuDSNHvLwE6YizdRDWsNws7npXL1KdTibGA8wkvbTjVBCqDbGFdEsDMG7SiPQz5g5tp3htkJuTXPRFUFFB6Wh",
  "key30": "4qxKMdgzGAxdzMY7Fv9Zi96parsEj7ieUKUM12czQ43pjMoBWd12tV7ABDYa3EspK8cWvc8AymRAZVQNBxBKmC9U",
  "key31": "F9yZBqzqHGRvNEcWpWcLW6aFN545DMxdUwUM7cNWRG4hN5LeTDNKeUV3iPaRrP2NHJj2GyoUSRvioNGCMsxqm5q",
  "key32": "3CKumS77fLnnFkgDDGEcYbL6Yz4BtUN32NDXrnjRrw2kQYDQCCHHssMXRbFwzTecqircWx5e9Md2u5AgwNLx5dWy",
  "key33": "2n6hsn4qDboL56Key6dtehtiKYUUKgaDwseDMmRnnV4jn61LJNvzp8b7wVYEQ9p7DT5oeC1po78auqKy54uJmG1N",
  "key34": "K6rLZKB3CBiu9ULB3fp3JRGjsGfEZQosPGDHWnp5ptKdmhaBR3jMUBsE59k1EHFkMobDVkq91s1qGmuEtqEL4E4",
  "key35": "2TtDN88mFfCyqYtFqB24Stbj9HsNCsshPiUPmJaJRGU7ZG6TBzizBmCZucQZzBWcq9h9NfGWuvjCFuenujpGxMsQ",
  "key36": "1jVYxRMXrqkKB8ZHhRrjr2PHbxPrdtfJe96JTYqU2rP2MqoXa6FzSXxgvF52TY5hAd31rKscoc2aM6ZRqTcrzgr",
  "key37": "ipfrov6Btgm4mygnQUN6mzomhdof2mu5q2U5tzRnLrWmkxZzR6xL2XT9mNZ7NU8yQkwY1GNnaqxGCjLnvPj7wHY",
  "key38": "45TYgAGN5QKSDkJHd9kEduthkcad38TXHaijAVR27HHhViaeeb2LaxmVYo7RTKzeNX4w4HHKHK1CeBR3beZhgcQM",
  "key39": "5cW5F82AuWTqJdBkt4HgTezsaMUPSxF2PhW9eES9QL341R8CHkwcMFM5UKpoU78cB9gcmuXa94KTRNr7VE2ZVaBq",
  "key40": "tXwz2oqoVjn1pWY8uzpPCkbXE46ZYcK8TBDpmTNvRrtLsZNkm6GX6iFD9iZAt5kbGrk553pCMzr1rMsKpdCPtSz",
  "key41": "3wqZT6qvDZLLm8XjMVXC83CRaB1KAn8aT6Exasz853jSnmEUBR6GB7DHJZJXEKZdZexK3CTrJg2oWn3FNbEQ1FjT",
  "key42": "2vBiGMNEAUotpvwcJxvbGPhRMm5CAZU4CJucw4uJDbDgCuv44whyGUGHmKKReYyaUbPV5TgLqA93ZqoRG5FjgHtB",
  "key43": "5N7bqiDJvJA6e2Fs5McQvajySxgCLRL9R17kP9SQ8ULtGfjUJGF61b6wGKC9EMhKMUxsQH7Pa75t2T4zxxHE1ZUe",
  "key44": "3Y5ezgQLQ2Qz2X7UMxNZKFHxbxXaeadzRFUfAWRGW1iRm1uJJTkyaK1YwcHQgvV6Ru7Rb8mV6M67QUggDSHmbZyG",
  "key45": "3kjkThzmvSVy7vkkCQE6WBem7msU1WoVzfhLVMhEd2QbW8zVigcanqN7MzT1ucEu3AkbhJsniUVTytMAXrvrpXJf"
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
