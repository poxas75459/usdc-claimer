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
    "5p4DAAzj9zyGvqZEL27atopG7mQJQWuYnNcCgJLCwevwHAXwutH9ghMLTNa5mt558GxK4XKVcRmnpb9JDYXiVaN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qxkvVsfj8EAFJQS4mGk8aTzQM87zexWXXnoDJqx5E6PtqQeFPPjN7vnksHGGFJQTRv2LbbXtmnwEqSBBZ9p6Ui6",
  "key1": "mJEzU2snZSpYRrJrsvP8nMFzDVh4M3akweusnM3Azix976T2fvQTrAMPabyuqPFnXU56h6PnSjCp2CydNyXEuXZ",
  "key2": "38MX8zSQtSpWKUBfftgyVdRDkoAQdz1EMQ6Gmv5ESMcZDjoPneEMmMq3p2ewcCB1M8wYgrJLgnqkyAMnUbusGBhe",
  "key3": "2rtHdVAwzzAoyaRZUwUvHVtwritvC5jWCvRwyyxyhWMNz1tU2WgnvGe8BoFiwUhk9sk15WhTVcQXTy3yMXqKTxtf",
  "key4": "jacJs84rS7jwrdGe4pKQBdH9iSzt134GscGbHpaaLYMheJZ2rEXgYibpUnjFcjTZhaBFa56EyiAx1hgna1MS23N",
  "key5": "Pk4sfEa8b27FSpNxFGQZu5TftGdcRGDX5wcfYMh1GVzE1BX27Zy6Tc4u8Ji3fVZc711T5uZDwoc44z9cfKgM6b2",
  "key6": "514Xvx4m8qXjBEnb8S88yvUFRy36E4cHz1j7SsGWgRinrcXrjSDLtUQcRHXnRT4kmV6Ky86Cmp4XaQjVS2CaLrPT",
  "key7": "57XUZwfxESKdTyH8EmYJQXJokqDqLqv3ULv37LEescXBHY3wvG4RyrvBeMfV9gjfdMoCYS1E6qLu8VYNULmyHh2Z",
  "key8": "3iW1t8qML5hVpmW2bquvT2yCV5xwU1QDDnotp9E4aW112Upt8vnewwykAdrdkXDn9qBJANg3A6dQyMfYv6CHivYL",
  "key9": "5yvChQP6z6RMjzVXm69QiT9DEvWog6eNFNiEuyrVxXbFacU7GBS99xdn6o8zdwoc12WqTVxvST1SPLzvt7CSqGvH",
  "key10": "q2asMdnUukFZoxCTscNcM7HgGV7DTpXeCud4VcGLK5KdwVTG8MK67G9xfKMUAiijipFYY65catrJ4sHsVXPXYPc",
  "key11": "5YRBcPvJoENCb9uB9SqEbv8QYXPZ8Npm2HazWaJxHVXdeG5GASWPjkXYmw9uWGjxYpR5FC8h7Z3iDrubVUppFmp8",
  "key12": "5sfS7w4jgifBrSfJ14CM1o1G7rBXLokHHdTw3v4DHioc5hUM4VnJvRVQZhHAJGfPdu9S5AwYys8Zqehs1hBrxjoN",
  "key13": "2tFd284XFeYESBMUsH2HUa1QqsAZRk6LTx1vGcGbbCooBpAQhGSWKYp3ZjvFyPhS5md1MsCpafWcqU4n1gYJwvqQ",
  "key14": "4WiwSAeT5cEVGGfK7L4fc5VCnaP5yc7TRC5EyvGGMVqyDpb8UU4tiYdqmfez1X9ZdY6xTR2i79VmtSDyXsbbT8yL",
  "key15": "3vXRG8bKawqDWpD9iAAZ96kd5E4y3hrNfeNAvRw8Xgnts84Fq31xp3LH7rs9w4n4LgcxdDd6qh5cXwxvqSxMQBcv",
  "key16": "3AM3dBY8MBcARvYy3i82o14jPzegqm4JTakmpRHZzUjUjgQ5UNx4HoJ41RUnSZxhKyLoynReef4GEcLJA3NJYFD8",
  "key17": "4JeGQgnaHiuMxGpdFrJkSkcG1pmSAsoG567pRnkak9AUmb4jwscpyytrLKy9heJa7jG1Xw9SdpYX1rbywtk8mC3k",
  "key18": "tjJBkxVe92z1mZXKYXTAQiRBZCwEV3F63xQqkD2JYYbxWbMnyAuErPKRD44gm1tBxwy5qj2NDh65R11WH277weo",
  "key19": "4NFRoZah27M2vN2F9d4MEVCj6BJi8zd1F8zZGhtq9Y8Po1CpehnNigC1Jc71PxcpdDNABcJM2YZBuyPtjbRUfWdK",
  "key20": "29tA9ZF8Bbi38KGL4t9iCy48zRkCXgfX4ffSqSoE3JrZuPpqcxn192y8oENqX7wWpiBCX3VbDrsDiMiTncPTEDKw",
  "key21": "4wgHodfTVb4M6pT2eekKN5vZmLLRidxEb5qptAm9B1xY5Cj8FRQX2us6vcZW3QbGp7k1QhPEuCPDJT23Ms6TkCAR",
  "key22": "2THLsAmqBCHE5W3X3khCMcLM16oKmSZa8SCkQRwuQjEsbfUxvdAu8YzP7ughnJxERoMsbvwEbPRCyyX8vEPTVzPz",
  "key23": "513rSgkYPHd8iJkoYD7ggwnM7fh8XmdgrJ77XZvSAaEtweeT3kHPrfMdPjSdKGAziQU6cmUJuDwpx3YNu1EH7HkT",
  "key24": "2Qtqxp83CiESJB3w8u58SdSC2fj3GmNNFR145fPm7XsTb9NeScSxe4Dxng9Syv1EdQoYq7rTR29G43hFhdnJXuyD",
  "key25": "39UryuCtYB9xcBH2zeoXrR8VNUZj49XEMaQqD7ZvL1TwEDbsQyjXvysiYxsZRSJb2XqVbCou478h786fosb72QoH",
  "key26": "5tbxXgb2EuD7DmgoWMPs5ZAtU9BcZkPpYo1dzMpNnmBbsYDzawQ5HQd5frkJ8YhSDFuKpz5tsTDJSrBQA2btVP88",
  "key27": "2akZQum6prdNNQDqDDFWhGcsjh3m9LQVP5omhbqCGUdYcExjktmq1mNcUAXFSRTLvWC8hLHK2aTtAEwsKpntxxha",
  "key28": "4qsadBBZL6T2m2Lr6STvMKQHiw9aTMdkkHR641gnPho38Gz7gWYDh3gy6DCe7wukVMseEda3skkJQAKmz5NQa7Dt",
  "key29": "39EBb3DcP5mfPqZ6MnMShbbC2vNS3t4oDuFt322n68UNjuWJHZKrZpe9mPZxTXtEH3Lz9MSq6hWJdNM17cAKVNS3",
  "key30": "4QpGtbwZDyvwBtcKgCEipPhdnsUxCPYM6EHYS2UBR6wqbm43bz2tDHXBZPAyLwNW2kfow5HfcRS7NPadgU8MEXxJ",
  "key31": "5TFYxfvfGBXywJUFgAVzCmZZ67A4ErWy1fqihmvR9hDsm5zwmEZERBrKczWCE9BLhEf8Yb5Y9LvTrW4EjzPny8RA",
  "key32": "22oRfD9itp8bNnKGbYhtL4eWYTj3aApedVMQtnjMJNi6QxLDSLREFACU9cgnVx3SGso1uudxgdbTNLAQXQTcRNJ7"
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
