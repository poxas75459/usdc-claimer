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
    "4Tn7AVj71ubMBQ91hctKFQY2BDDTXQD6HkfjfGAQSCuLH3e5bWqgep7ETTcyHwFvYZAUnPLJWGU58wPpsqeveUxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iVcHfSUGUS8iJPJFwLSZQQ6NoxkEqAe2t1y6JVvwVNYixgNARso21EgEBs17R1K5sDMYwBzPgX2cZc1cjDnwksd",
  "key1": "3pPs2NhGYxNrMC6tGYDyyTz57DRCvWjP7RB7MAoPcuQtsasSvZfqsjTRqV591QwhmhCQwyTr6VecQaxvcaFpBHEk",
  "key2": "5ueAyCmvsKEMPxNyWSmxLGvjrw5qcKyQ1AWG62XPZgJe99Fz6VsoqLigi7b3QgJhEcConzoB45zTV9xCA9wVKxqb",
  "key3": "2dbj3kEJyDqkV4qqZEivGCU2u7k6a33PARDdhnsPs4SypnLG5ybRPaRXx5oWHkfKj2meC5CtREM2dcJffxnGd45J",
  "key4": "2sR9rYMj7FgV8QhQC9Ym4G3mj58VCaVkbZ5rsnoUqSqCDCbvdHD762dQ4dodxUv4n2nTCMrAUc81xRZFcpfipTXG",
  "key5": "5hxQBbaKnKL4sda7foKdyNV9ACrqwo8GXtKoF2bKD8rjkh5zM37UqpJNZ95wK2m3ezE9YjYqnCc2Fcx2MCdTk2CL",
  "key6": "44gvgXdRujcC36HHneKmi2Wp9GHcH2eNaoPc1rbEkoEcTM7FXmTddJYwysbLL7X7JquAXzJJXz1UnD3JqjJDyrW6",
  "key7": "1utWFGtZ6orPUvTStLWDRE4muegNkQfzhtZjhA5MnTD6tCjLmCKJFq9DE7FWTwLy2Q3nJAywswHFKZ9m6KmtexB",
  "key8": "4vsjM29k1HqM3HyXUzvY76ELe1jVpspq9Fz9bsuPEMTEdzMHEv3STzy48WDXP8MDBCJApLyv4ya32mzgbT8caepd",
  "key9": "xYJyQSk2urjnUyvPLAco34c1FEh2xegAJUkb2mcgEWJBshxTrhTxt8kd3vhFJBGKBypRz85oRDvvzxczEBj3Tgh",
  "key10": "2HzYpbgpNA3EEbGzM8GccuoRox13VPizQRU48dqFD5MebWJPeydtEovCWcTUvru58vzLZ1AAPmQkj1LdiE5Y7hjX",
  "key11": "B5jeksEZAQCdwMwcxSDeP476oMg5mtJM51ve6va4gz4SvFQPN71PBvGqVX4jTB6ypERQXiD88pd24pRvV1B4REM",
  "key12": "4YWdsC5gr3aX6F2sG2E2fpBo7FH9CpWZrZ9jEcieUV4ccVoBQS6UUSVz4JXA7VxZxxRj5h2Q3kn1MkyjsJPxiaiy",
  "key13": "LU6JivVsGNZiwb4jur6vDKBwo8iQxEWT879v9S3dGk8aMqaSSzmDoreeozZC3Lq8QzG8MzK1Bto6cdMmDkxoFig",
  "key14": "3RbqV3faf3nta1cVs2CiiFpGa2f3bsToEqSR8ZXgFzsqc4fo9D14dcA3Lur5Szd2NAX8RGvquJF7A4S1KUPVJraY",
  "key15": "4z3SGcTVCWCPFQrgTTTuUkExGX9EyYLoDgkm5ZXdm8j67vytfXZmntdRd74mLLBwFvQQeHemAuiEBnUXZ4tcJySg",
  "key16": "5eVdHrUZCVvcDz2GyghUvqn32khumwhQQ4b263qF7TtwvG8U9i6hCHanmJaav9XRzyfpjYM6fnRxW76TJ9HbVjsG",
  "key17": "3WAtDD5wyoNCNsSkoKP4dYSNRGuEfRGZksWSBgb1sQKsiCeW86QMZf5na6hW1226cGBsum6cu19KegwqTkRxaDeP",
  "key18": "3Z8X3Yr6y9UWRwEFh8vEKD1kFakUjoGuVT1H1wjYQ3WPDiAX9FMacehmFnmUDdfiJsHZmJWVeQYoJA9JeZSo9yaQ",
  "key19": "5oHMTJ5E8C35zdTynJabUe68uWQjQ7mvooawNxrUhekwEiw931QPGX8K23c4Lrdx2ivuNDRAe84gKza9gQ9j7Pj9",
  "key20": "637YTbUnKhhhMRkBGrRuB4kgn3LD3xkFsYYz8d9Q9nsNDASczob2CKvFTa4iANmekdUmMEgE8EJpLMnXteSKGny5",
  "key21": "4sjVNqiv3jMjMJjTfMspHmGJcGyAZr4NXqccNWU2wP2qq3mh5s8YJ9daqcaQ5dQwrM47tKkE3zbjtZYcuhRDZAyb",
  "key22": "J2eZqo8RZSRSruYPVZaZPbvgMwv5sHpV6pgvv4NuBXWpqFGMLzZy1BX1AGPLNMs1fsKaxVXQKWVwb6mGkZjyE7k",
  "key23": "i2JFqMxMVMg4wNJuX7KM2iZdMsuJVuz8cXZDrFdeqxSSzVq92nYfvmm3dJZPTDRAuQuXsGxYXnWwb6P6zpmFFaZ",
  "key24": "4uvmskZ5Bx6JtSCcmN5D4jU4QFFWxqHJWNZrz4wCMSwhiqf84tyLrEzeoSWmaeUxcbfkoswYQMZsbiKmj2CBSxeY",
  "key25": "3smTeRc7bc86Q1hoy5L5amxyYD61a9t4jDciBffx6PueBr3DqaKjDyahHQ51RsgTFJG7Co7VLcGLwGEGnd4HjCFT",
  "key26": "38ZTWYbCFBCR3wPQdhZFQTLHAyERQiRzCJKULKXq8UQCT1Hurb3CwFdEh7FBHDzGNcWrVdmfmxATSaFY4xeBcNUC",
  "key27": "5UpkAA6p5GM78Jr2eqFx6VoTFmNy2EkqZx9Tk43bQNZJQUzN68h4dSKcpvFSiR66rHw3sUcLRESP7ugXhohVMAt5",
  "key28": "521piAZaVFxCBugxadLEXBwZp1ji5j5jNHuGhNA52MFTGkuZ4s7XEESYxqaMiUBXHNSpEFk5no7sED5CucY3NGZ5",
  "key29": "26oHeACxJs8MEUdZWGnoPtgk8CimffBDkad2fvPuApBKc6zkHrD38wXHbZHAjvLgYPv52BGiRXWdrg2MY164aH1Y",
  "key30": "3ST6GD1X7nw6acRS8Nkn9zAXnHdBWCMnm8xkd6mhMViDdjmipPALLZHgpp2sy7WKNgGo7iibzS9kidhXA3rrKNTn",
  "key31": "4ThWSzF6X4bcSUFT87rus3ZHNxh51rLnKeEhQ1xBit4YNVwCepP21Ft8bsYALLHCpiwazPNZcuy6HNAzj85Ww1Nj",
  "key32": "5tcsj5VayrizuW3ZaW1rE5uJiQMvasMoTi51mAQ8NcmW8giHr3kzFfksvrYsHKFG2LgDMJ3suigJfLNvThmEA3F7",
  "key33": "5GNML86aCLXyyqv9zArm9Rwie18iZwo1HxWoGfBZwa2CHgWZuPh6ZA9ovtYjMBDGDRxesFE2PSyG6PkjQxTxR5g4",
  "key34": "55Nag9NK9J3XowvvovDZCFonzMcHuiD7TuNKZtZKhHfrHCdmPof2Uep3vpKRjQMzRBBpewaYQByQUVybS55xpRei",
  "key35": "4ebK9w3SrhVLyfRZtiaZbKiGQUdfRgt6HxU3ufrapNV4f4BTKLurN5LP7Ptyx2RSKqkFwsiU8ocuVuddsAR7Hw38",
  "key36": "3yPGXaEJtmxjXDHpRm3SCdocqvbjagMyqGa7WiF7aVFsLvVLNNnmzwTyjcfMdWouQGwZermjdCvyE5cSJzmWzDBc",
  "key37": "5N4YK3AnFswUD1RYZP85pbZBw42e4GxvU4211HaAa9YPnqRdUnxwkBhGbamvVDDVW6C42rYRvF72R7xzqomxCHE2",
  "key38": "ss32n7omi2XqadruoumLVF4Lq24jewuHGmThMhfu7a7373vr1PsX4nqGNy3BwG5tvS3VTTgEvK227DyuKuUfQfs",
  "key39": "i8NGCc7gEMYLSiGNikg88Bp5Y4aVutjmBzLSyUtmrjCeHv9g8j4Tt9QqfGj27ddXairtuqa4rwGCAt2GCfyoPhj",
  "key40": "GV3BncX1urrsTgENxGeV1mzhqh8DWk6wSRJCPs85yPCHuvKW391T8VsdKsGdFsGzW9qwBYXXnKKQLtgp88CWkH7",
  "key41": "7abpELzue71BJ7oyTmG4JKCeuGa7HcDpma4GtZ9fCFVvFG2AyGLBsUVf4VBZ8fTNivDhYWfHRVkfx1Uq4MMYj1K",
  "key42": "37Ysc2hxw5tQECorK2oYHJuUJYHkZKAhon1sxSxkd4xPRtRXh5XTX1VWqvZaGWruqaddaMAKhQGv5sqLRXzQxhuj",
  "key43": "3cqTiXUMhKiXWgnL8zUyEXfmhBwW8RhrWuCwLfKLSPhc9oDTLcyzoCCr34vGrcCrrcc8ey6qJQrVyVvaEhN5LLrv"
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
