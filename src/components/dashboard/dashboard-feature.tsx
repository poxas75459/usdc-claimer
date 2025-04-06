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
    "4cpXmzXuNaTtFiavtequpBg8vXCys1KJPwWd52wd4rds37DEmASsfDDv7NiV1GypaEvWaLsNXdKS5WLtie2YKXxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jBHAYCmc8fDCieQvWmExLAkxR3KNKJg8K8x9PyBA6wD3KiTdU33FTHHhDQzk5UggiDW7sMxgjisNxqfPwVnfyt1",
  "key1": "4izkfgRp461YM2RFYunMtNrckBoqcp3hGCiaKpEqhzYusYnRs9jRzTHcEoHumLN54pzLsVpSEgrcVBxMXyQANYJU",
  "key2": "2i6fxp9kRa495wHeY2h9HeMkvyitTUmqnwKgzjAEF3PZhC2V3JNNphcbPeq63J8qn2u2XsnBbuRufxzsxDvBuJyQ",
  "key3": "3g8i1RwgGMuuzHmTpia2bF1vZ8pMjJAmHvteARSgvpJkTapbpLyv6kLvrZaGBE1C2pt3cNQLcjna44vGFgmDwoEA",
  "key4": "5fPEBETHhJM3cZp79nfEKVL2trAt4uLo3Yqq8SgT33jGdb1NUTozqYaZtYK81wEPAi2PvZgzRcYeGXMMX1Y8DRTD",
  "key5": "3ccUoKbeS88QZzfc3ADoA8d8nJvNHPimjd2DjcEFq212dAY6BaS3dkCpD44DABfXXBrR1c1xGZ6EGh44WXQH2b3r",
  "key6": "2uBf5wf4YXj3ZW9gggoD9Jj3yi7TPmdH69xmEA4ZqTzxnZBxxbrKLEx1w8XKg2NpxC8cHi6AQgjEVwRb49LgAG9v",
  "key7": "fYURSAjM3df1ezovVquWDCu1W3FTABdgEkwuxsSjF8FqZiUorE8syEjUtoVELqiabg4nfYUhLdx5LFABrtcbMAi",
  "key8": "5uAQWfaQFa8FXFDERA1DJ6oQnHmovd3mpezR2PTgNiyhJdqoXtinN87xSwVcvpchqsG936VidudFF3aAHRfu7Pq7",
  "key9": "2YyRu18P4Je8uneU319dM63XNxfbP5rGB8z5dGNe1qhnRkSwPx27F95h2XnkfW92ZUjrZzYzunXe4xxTscyctKgn",
  "key10": "ZxC2DsNymFqCDW4wc7riMMwWyh41mLoVC4Y1FWtdJtMStXwMZT8S5Y7fmhCMViL5t9prH9o61PYR1eAjCpmbQP5",
  "key11": "Dh69zgbkpJniM45BfELiqWZLCnJHmHUmgArhPmtJmsw1VLDkcGC9ko9DWy3AFXgH8YspiVhi5EnhY3nHYb9omY5",
  "key12": "2s8NHHGmEQigSV4VUQzDPziSNebTQ4EZsXQT3CqwABY4BhUSSziDGfV86pwdKp5HsFgJ2zu524q2pLW5p1PEZ6cb",
  "key13": "XQ5XfLKqgLwrQ1GQS2FjBMGprnLK88dLVTKZc1Vf357C5p6cJSr2DFvYK2yCR142SsP6Bn6eovLtTb5acF9Y78b",
  "key14": "aSWQEaDUBN4FYhoeyJ3jYqfKaG6p1apeCjygWP15cNohKpafed9TBf4q3ZDSivMBSCuLgtU9jMpPZQtYPBu5WU9",
  "key15": "3f99MSkmBbWN6vqfJF2HdCi6Baszyd3uoeyqrJfo8gfULQ2oRqpHgo6jVefqC526XPG2nffkgB2xPP7bpsXRBPJT",
  "key16": "xUKnoVrYcVFHgLYdoDEhH3VehxswsXhPQ1X5Bad7ku3hkwPiaNpp47rBckxstcwosykEN9iQ2y5i3Bb6bozvRkG",
  "key17": "4hXieMJ8aNeQUzirdMHMVhjeLy9YcKpapXfiLNgTYEQXHMBYo9zoB1kondQgMoeCoNbQQnK9pLvgcWSU9cAv3fTL",
  "key18": "3LqiJT7McS5Xc3zGbLesosnhsioY9PBmJZant4uL2xt2mcu8dBKJdB2F2YjM9RarypWS62F25Boz9xpRuV6hfrPC",
  "key19": "4fV9x1wtv4M6vCY1mwzWDjTnUJZH2X5S9vFXoHVj3h6f9b6eFiDuUMqczvM18PSxMfCwZkEtqDRY9PafuEqkk5kC",
  "key20": "3g142cLW1PbmrhSTXiAGxvb5yFV1gHWMnZtsc7r17ccYg87Mub8GTy6U2XbThyE6grYizLBHWfSjSDyYxadoEVqd",
  "key21": "5bKnZPKUxGW2zNmZRpSGUApqK8aPuT1DsxPjP9sRdU19QoawQTxm5otdghHv4kG4WVHLvwugMSmcB2kfN1pBMx4d",
  "key22": "24UrS5Lb8FfdpRUnE2uacEPfp2q6gpnobT7jAkCgxyQaznoUrc6qELfd38FUsbFVeqXsLcJCNAjabN6i8ZtN6do5",
  "key23": "2zxFs1Bzmo581wyozHxmnPJuuGSftKnm5L8T2Yz3RzBSbsjVmMxdn84qmB7xaHYZKqv1avKNPrAFoN5ZeGnFef6r",
  "key24": "rxm5qkbTtEaA98ZvnfdPqi59DwmqSNJCp3kfA6zpfzRrvJVbrjHmU2cfRTRLx1JVYhXFMKPn7hShjZN8h89PtKu",
  "key25": "3QMTM5HkkJMcagzunFh3HPXAufu9ux8EQuXn9WJFGRiGLGcmHyojt1ix5MLHmwQP6LthZ2T3V5hmN18A5AK2jt61",
  "key26": "2vB676yiCeq4d4FmCamEninjaotbE9rgBLN1XC8vVatNeWoBX8aGYaTi8jaxKZ6ZBQqWiWrc2CAZG6T8nxbED7Si",
  "key27": "y5Zpa3kKY4dYvRreRr3z8LNybhamC5UZvVfvYn65My43wCsoHjwpxzKHVVCVUMzqYtJ8Um1WfcHPy3kw7cicBix",
  "key28": "5KQeKn3QVHNtpYYkCJ5pn4Hr2CMPyqB3seaGvpxvcSsUwop74L6ojRFP81uDHo8Jb5rrvoLD6BmJ6fmHtZnzq3h7",
  "key29": "4yP67nJYJZdAVVSseePnysqPgYNG3we1448xzg7U9UprnG5xPiiEfRBhkScbGmZaNC4FPbLdRczuGjSrtKGuMp5D",
  "key30": "3cr3L7dqj7uCwAU9mUtwgAo4W3Eo8784JfkdZQUjBNQgeUWVgBvnVRMbGYysywAb14mDCfR9yrh6tfy6pZoZSZcw",
  "key31": "4pKSnVMwGmoiarW1L229WPhPBQ4FwhkhiiekajRkUFithb5cuezgjbmcw8jhXQoKpQ7qxGYuZRM9dBVS3CrVXxGS",
  "key32": "2jKkbg3zJk9GMa5UsyRQvgZ9WGLrX882e51rtfDnDpoR2wPt7DKfqsD8WwmAxiZreGC6QajPo2zWamUSqpa4PqUF",
  "key33": "3qDALjeNJuxn5HBZ1FGZCw59e5At1C4nZ1mPjZNZ9RrKztBttWRoxNybaL4MhgtysQtcZ83prmYTGhTShaoHqBZP",
  "key34": "3HiS9kCBEVw1n1356trkvBgDVMjewiG9wEx5V7rAcid3M2ZCM6iXU5g5YVmwZNoMr3FFeWxWJACmKwPLFQfaZqQs",
  "key35": "5HnovPXH3iSHRNJJmvKTPYNwrX9MoxBffozgcd7NndgsBAH2X41twUUnQqmDe5r4fR2tTWi9dmrArDmPaq6jqrfn",
  "key36": "TKoGwpxLBww7BB1mSBKT7RgCLHg8dzzrnNbXdof1tBsppR4LGAdkvv3H51C39jjXZhC2myjcsHSQLN2Go2cJTnz",
  "key37": "2sLVUfAR5zhYNLKJ3Xih4VN2Ae8iY4fnMvLM2PS5mZKTiUNdbQABCUPmYnFYFhy7ak5stcBDE8cZ6xpLMQE7rXJi",
  "key38": "4meuquHXDvsismdKHcAW8RhHeXQTU821EqQ9nJVwBfT6UAQR9ojmTjhu1vGm44Nx3T2QhXGmjkh4BPxNjvi6jYUB",
  "key39": "ez1mUWmwMjF3wcoFBJjbBxN8N9GuWdgwkbMv7WKT4ef6NbakqFcJfvthT6ZEg13gFiteyGssMAECcXb3jifaTKV",
  "key40": "4rRGZWdit7jtSBPy27YN1WhsLgSn6yJVSZXMo9AK22sgMVAc6zVumq1jC8zbj9b62NWnQzAugY8g2j5qscFqcF1w",
  "key41": "5npAz63fL63HWZ93NbLEkNJCs3T8cqNpAKt87AJo65sCTvDoyqxCBStrAFEtR9xa7ffv9D6kkKYiCo4xfG4iCYd4"
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
