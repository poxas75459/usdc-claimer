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
    "3bYdqKf33PNJwqoNS3tmyrz6nb4U3M2zg9E3WNXXiUabXUoc2oG2yQWhhXgBb9xG4eDCk3c8REXvShEL1j9U5CmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63TMhm4wzUuuTze8GgyKWddWEv2VhpxRhSpRRLSUL6fGtdKKSDwdxCMxmtqgukZgN6vwxYkGejekbfQLAEX7nEhu",
  "key1": "2zHyugLhyZxBpQumuqkvCdA4FoVTmPGMJ1tRN5FoYkHHmqeTZDk13gNDjJKcMBWpfBxzZHkXWoKWWJC427cffsnZ",
  "key2": "5GE7fedig1qhZg32sMdBvEE7smSVxCmounBQM9P7ie3ik61TgXkpw2JSE5ANfkQRQEUB5fThk1es2fYNbPTCGcdz",
  "key3": "2mRYJez4kWZBqi1GChCDaEYZDvwWWK2NDtKss2JtdZhGwfo9zmB61Fpy6BNNx8vGidD7326ocfikwafBZng46u31",
  "key4": "DkMKkyiaHryPRqt9Qowckx33xdj1iBFYw6qza3MXurhja9NaqNCEFvqsWZc11N4QUuVcejttbLErUB5UMbYoSX4",
  "key5": "5AwTQup4BwP8zeEr2yAttbaFhp4L5zP5vPsZ8TMm13VMX5t99FpkpmdDi89pzPKaDJHk3fnUotXUzeRPTPgqzAJ",
  "key6": "4G3zBSMsKjLhDSNqpfAEoL54J8dKJdjMD85wZG7Ey4H3eaRtvCUxwhgjoAjiNTqMo31CxkE1bgwVoiTS9Ft9m1co",
  "key7": "2sPpXuAQycQeHVkCU5pbbZB9N2uLnZ7tSzeUbdHvb2c4wS9aGdvbZ3M4nKAx5vvs8CnbnEUigeeNVT64MeRsWCR5",
  "key8": "2vfJE8nmPbfF7k15w4Ewvg2RdU3oSdG8dwWCHnSrT6rK1EEjAcnrFrARG7kwExA6vRXGK8jTsDpJ6U7gQ83nWh7B",
  "key9": "5WhRtwLRcPNNJMQvWCrnj863JXUdNKYHBT92SxMyoAiM7whbfAHtnjTstnmQewugwVDbVN3UexxbDmXyneVDK5jh",
  "key10": "4NTtiWMoJt8kgzjAV5z3ENtJJFN3nacdZfaBsFVaRdvuVjz8t9rxYFQrDoSmwNPQ8EdSuC8HsGNAfLpr4zf8vnKv",
  "key11": "f4Grih45yCMg2sahutcMoZtVmbvgPEAGaqSgu2BatC3Gbps8bTJvACgQuMrf789LCDMTsJMip7pnCM5fp6RKTq1",
  "key12": "2wnRn8TAtwVMkCe15j3Q9zfuiGNP9mwUhpy8tjFsxo2eLYeSDtTMpwdvwuC5EijHmGx9NsEy4AHpvaUxxdy9eWGb",
  "key13": "2zDrk5z9wJPohTz3nhL8B1crA3HV1yZuVmcWAqv9HJmZi4C6qR554AhUPTq4MY3AvBJTKaS37omWtMBn2BQ8h8Rg",
  "key14": "5KQnGVU3uqo3bSVPHaDgAXHQLtAuxKeuZHyUdQ7phQ9oiWCBChxC7YP9LpxoD6w3U7R27sdfSLMdc714xR8nwuYV",
  "key15": "4ENCYBGJeBpbbmPz88MMpCcETLhfFNTXSAY6DsL9s911ZT5oBApqvcnj8yvHHUGkrwnpw1u7FpjqiU27s5kTUz4D",
  "key16": "4L2kWyY4jzZCAtmL86uRxLUCgAtGQ1y3rFm52cVQt4GuvvXqHhET6ESsYRzQVA1vVBgWucrMp7WjDraQCPNTZPKo",
  "key17": "61nL4VdJFj4wJgFyBRockwJyhcB9nRV3zq8ZZzXFXCeDYp3sStmr7FiQG3tPCFjJD7n1mvs25yze4QCDg6UX7P8",
  "key18": "3FuPG2Fi6ybCiw3CQpfZpLHMGtqQ8zuqcGXN3Et7g8UT9mfcMCDFoVnyYVfrUTkzYHt9NeFHeSh1yPFvt5PjBpaf",
  "key19": "5SpTCW9WbwRB58bvCJwKveZYtX4bBHoYjFGcNoT8xRGWbBELh7id14AYtmUqGBCUzodP9itym7NeBePr8B9HBhxg",
  "key20": "5YopDUGn99Eo3xseg8WgmSAcVrGPKdJv9u98X7naJh1GdRA5wGHMpMWfPSCu6EkKZaAEa2yQYhJ5cPutQELuDZ5q",
  "key21": "3evYfyLdRJP4vmBPU2XtbWBawMbRHwG81iHXUTNYtqnwmzRWU3qLkBDjYYgqxhuDhr3QUD8bHHyLuMfKgNabiVKk",
  "key22": "mJZpVVr61hZNwwczb1HXBqSkYy4GXiUuMLb8nwe88tzcMjBL4bhcE8dQR9mfYRGQsPhEW6cc7ivVk7U3Fhm7tYA",
  "key23": "TqNFBYK3sD5UkgLmuZyDj53wmVbC9FHAeVL8LdcQ3STymAUsAZcNnTytNfQomhcTMFtM2eT2DhS8Ay8CEywtZtT",
  "key24": "3JtU2qNBMkJ3LDEqBEuL8R7Z2YqxKZ61FDPWDynmiDHg7eKHXGyyGUnHL99V2aZteqCQxprGTLvDXJ5Pp5W4M414",
  "key25": "26eVBfswLMADrBpVSQwQoas91yUFQAqogdQfUgJ36DrutAMZS45DFHNQe1roRSvgNt4Jiijs7wMTiAKzpE2JMJAo",
  "key26": "5Hzj4y65ZmrPthajDNfBUnzuiS5A76dzQKepFqFGQeHqyokty2YqPcVYDGXsS1tD9V2YU9bHwJMErFPU3xR27JAM",
  "key27": "4JD1qcYvnYdTvVk9Zs1zF9rnUMJiiY4KNN8e932QcF7AXmsNbKQ5dCPBkrQFUonRmVMtK7rF8J5VuMkDEarvxeDu",
  "key28": "4fdghyzHyyVDrS3fAfQBwF8aTAQiprSsuyPQZXvQbW7fmXtFBr422C8hSRJvQ1ibmbVuFf5PsKyhtZwS4WwSb4tS",
  "key29": "3Zs1GtVQFGJ4ZEdfprWdtZjw7AxTwHuSELbGP3JtVihhofcEoE2F4oqSmyq5kHLGR64EYvJEXvMZVUrKJfpbpN5x",
  "key30": "2eVF22t8wWg2QX1EBSLxQqwxaAzRkJQ4YMS1Qpwh1ng8Zb9Dp4G25QmRKPjYKzXUwhEY2UTNmX446stEX4rVM8H3",
  "key31": "qNA5aqbZhsZypHeCnsX29RvEHQc7PmtcPB74UHakjV4hwMRegAUfom6K5kZe5cxtdhyZ1ecg3cGqncp1H9NKKst"
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
