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
    "5npXk63a54SVHqdhBXGtJpAaQSorLgsaJTsLk4U3eY6HgKumKLhqpTeqec4Gh2MUSHVdDZRcxU8YDHpjzzK8Dk4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XYfqA3FrTXzJP5Q5Fzi7H1tajeCnvD73jzD5c7Pyxe2SLKYTxDEUBo58m3JNcmEESN94CHfyoU8APF52x7s5w41",
  "key1": "cFxa7SUPGpfoH3rm97ce9e1Kd6tYh7gyB3quD96pppat3FXo65kQ64bcgVXKcohoY6dmAW8y56qmTZ6YupaGwVd",
  "key2": "3KxtG7RszMfgB8xErg8WceSbx71mVQHTzMJb4ZakSNGXN4vUtK5GibwRoy8jJfBeWYXxGnj7YrSKFEd84wAoewGM",
  "key3": "2ZAvTwp1FRFkseiBWuX3jTfekFnAPYGdLLnRRGGi16g7v5y81gcgVzF2NRUoUnRhCmyXHMCvQrh3Zvi83r31estv",
  "key4": "8SLT4i5g5kifA41Gjjx5w41wFMZuKnK32DUEEBteQgZg45jjUeFaEMjBNhw2Nv7WyL9YyNwvTvz7fDm6jzU2bQU",
  "key5": "4Mtk1ntgASVLZWgVWoda7GSY8yVPySAYoFn88MTgY6S9DJJJu7WEbknpr4vjeqcHaiHwv7CjtmWRnkJANjD889cQ",
  "key6": "4yeEX5f4RU93ujN1JVaksajaXgWfeSsBN2B8DgAh4qebXaBNncysyDCtvQyDwUeh9Bzdg1aqfFFsr3ceFe9JXatz",
  "key7": "4JeGAsLQK7AXwmatSeCNYrfmCQ3jbWrhDcFSditXstPeAG2m7eiq7oqbBr41EcErbfCA6jhbTgyijMbEpMmgQggk",
  "key8": "3mC2nnvmX9hzJHrFQQbYQEfZx2RngisLhSnrZF1r7PYGq9ttWKKx3dKaXH3Pd32MRzybdiK4N2mQxNB5pEQdrFZL",
  "key9": "2NLemJbzpDrC7aLqBXy5kVn27vMchgJfcZ1gkHbiaLf3Eg9GjEeZhRGafYRK7NSEqnwHQ6fDkvgpmHNUTFPrTUxg",
  "key10": "53xG7zSEvVr5gb7qDYSFquNDK4aE3JRDEEFqJhmdsUqTKZpJTEBifRevWSXn4e4BCxQnmYU8wrMQiq4GcTp631FA",
  "key11": "2ArE2rZefCwcc21ZpNrphp77JSqQLJ1Yvs5MMgNhth8ZnuBeNM7FjdqbXuyxE4ZQWUQa9gWs2w3qZ6aegQR1HAD3",
  "key12": "492PLbt51kGbpAFT8tKKFQsWPejiRXPi5LxpDUH9cRa313VuvJChao8AEufio6JWeCXVUsi4hAcNgcU7Ad2yNB7g",
  "key13": "2bf1h7gWbWMUhj4FGxPLUdtdNyQh7H5BGBMFQJFT4PhJVccFdsbhn6SJDSm6srSnpxGMZ3pLXbi2QEoBDVKf3cRV",
  "key14": "44MpPP6BNmWEGZEDpzBFQpvRQocEFcMw77FWtdvt35NtXTW3RCPSdqVjvXPey7F2sCVLyaVUorGZ38V3hgT6f4op",
  "key15": "5jGEAwagYUFxezkJwE1s9sMPxyP7wvvZTio1PNid3kUnrXqzftM6L12dLtw5FqFUyB2nUGN5Awjbx3GGt13NetFJ",
  "key16": "5w164FW99tW37YJHRmJNxywWmtzCHfrxMtiFRTsXsX92haCvAh8yB5c9w8CH4KJHQNMUThNAQddFQmiSd79Fj1K2",
  "key17": "5qeUXouWY3mVctZtb6AeMGjDFZowEnm7252tGYVSv8ZSmvNg9YtzRmUPuqFywxz1t1nJjKfeEUq6tt57ZV4TLerw",
  "key18": "UwehRMThq1aXz2Yi7maaYCG9Fh9BTmbjbHLn14nDMKAL4zxQJEJJC5ecjcnozAwp4fMaNw3NQgm41Siv1YhCGyo",
  "key19": "5yTsC6jrmzNF9UUD6dSzF4Xeb4MafuERJuhYgM7n2S8dXyAGkY5Vn2uwx2qjQBSF7zBGdYajvRradYHqeSBcSD6D",
  "key20": "3d7SrK5nXivN4PFSENWuguLtsjT8WuUfYmseAGXbDHQBiGA9Qx4EEszgEPVASqKDe2n69pgsU3nRha5CxYazV4zD",
  "key21": "Ntpxqef3E6Xv68YQwtsf5BYFj7szwJAiR8zQCEe7pN1G5bTdPL8HPdh5fegPogTRMP3k2KZtWTqYeFTkDpFm472",
  "key22": "5W4YzAphensXjh7BWypk2L9ZT8z41YsoKF2DNMBvnBJ8hwapste3chV8bHVQZUyLXtpt9ZuT7Tar8T4jZ7jnyWvQ",
  "key23": "4iQHJMwsCFZYsQUXaobXf11ixWysgJDYVky38rDJBkWmqXAKTZmfTMoAdXH3DjLJBJPDX5RPwhDHZJ1sugXjBb9A",
  "key24": "4hGag6iBrbMVJC7WFAVpzYR8uT5xHz1mBXcHpKPxMg5SG2NEmwFMDVaGD5bsvd22tR4D7Jxkdp6joThLTunv69Cq",
  "key25": "4UWBsBAMhNdWX25AWcb8aRqmJqvCqHpHvrnnZ2ammY1Cao4hkzPGHWJo69PjDh3BnTtE6vyVsTk7tvZwt9Pq1BoL",
  "key26": "LD97nkPVdy97A774dMHLLgEF82BAqCppRZd6iXcx4SPrHr9xJkYnFJxa9ABkpBByodDL5Nvq2f4c5X5WVk7gBh3",
  "key27": "2eJDtvX4ee7fkfnW7UmNjeoMkE2hEq7gdVbc1WypvBAEWiqRciknZQTJHouxhXdhmoSzXKHDYL3pg1eReK2LLCeE",
  "key28": "2U9NLucuvdvJiGdtBt4gFm7hc1k8HLkwmUxNcKMb1K6pe1QADZW7apzjc33HBR6G6o7Kyi2hkTGYWv8Grn5TuUzL",
  "key29": "SHrwtjPPXVayJ5CskrSBizqMjWqcFgQ3hQnJ9jDC5ssarjqaAzo7mLXGPX3NJiLZASwhLyzThLZDBjKngN8hvpu",
  "key30": "5chV2pN5i1Gsd23tUoYNJ9LjeepyhXRVZXYbQUCQtiQqqKxAZ76HciMS7dWpKVBqCv7hBJ4uBVAp2RyD3ntBntwS",
  "key31": "3Bb3DWgxSV9RWfsKFKiNGrqbCNvrHcj6pZBJoRMqEy3DDv8AMjUVxLkdMvXS5vd3B7cNJHRZryoVunsFiDAtquGf",
  "key32": "5GeaaFE2jdN2fVQEicuPE5fwXociE1D6G2mcxcWiN3xE7V52RfGtDeUBGSjhe4fHQXQTcePTL6x2YSESZYCuYuFX",
  "key33": "bdLKJBXmYVwq2dSY2j3iV9b2p5gfwAVPNLFkY8AKu8iTpAeAVY1ed9BiF3CtYZCff3S5SvS7CFemGCNV1tmWgm6"
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
