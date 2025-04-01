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
    "4NUuwEYZ7H96AWto51KGgcVsKg863eCbZyguKxq1NAPFd8TFPUY6EgzxJ9iJR9G33KhUwhQcnVXAi1DZWhJNrjxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ftRvomJs1BZAm8fXnA9GBydNZRWdDtMceKX62dsCW3BQPtGiXFQXLRh4vrWFHKbmYLfyCq3W88tRvS1hSwXyPGv",
  "key1": "kszvUkuB1eejRxmJPhKi1AXbxcQ1RubC4Wodknabe6rvGcHaxVmfLE7shLyReXieZRATbayyzgHnPUxPW8RdfaS",
  "key2": "5TAN5M1wuWEDug7NcPYkTiRYPMfbKG3eXP7iyLRDrqc355GQwXGfzVFqVnkgerQ48RzWSDcJwNHRw53sgC5rFBXV",
  "key3": "3rPsP6Ehf1wGnJBmdCrHLrycvi3fPqUCSh9P1KTq5hzwophZP87GByTrv38aSf7HceP6PKUNPB9upvuMM2dCqNSm",
  "key4": "w9rjuffmLQxzxccCvsKDshuUWA8FPZx7yXSFnETVBYfuevF4hiuaVdnXabss4xkVeNRnvnVgpxoCUUekH22nQ7g",
  "key5": "4TQS2sHnxTGzuBiNPQgZ42sS76uMD9kZrWHkCFSpzApWjJ6Q2FJPws5Fm38x7LWt5usUBDRaiE1FQqKpLzZ4DJyE",
  "key6": "Mpv1VxHe2Qi6YSpXUoRm1HeFiWwWCEo5MFP1tUk9czjttWJ2Z4TuiTaQuqtZebx5vi6P41Z1v7ex2Ax3T4qGY6Z",
  "key7": "v9WHBSmVqvzGTrzHa5u2TFiCacRapBKmo5LnX2mpdZcdnDjNj1kuwyEwQmk7JrvTPiSiqUx4NY5bSvkwdXpUgdP",
  "key8": "4EW4FqtaDFTeV9E4hDb7UcR9XbHTDjCRbQizrX8cmacJ9uzYoqv24ZYzFyL7eNDNXvJM8c2SLb9oBgRqm3cLCCcs",
  "key9": "2rcQKQMrxcJZR3MeLpMgtcsTpHUCMD7icgqpZXcrvzzTs4memimP6KXkkjTLPoR72GdNe7B13bBQ6qVHUpUzwXke",
  "key10": "449Pwm17cn9EZDMU1cJYyNY5o1FDdhhJiW3x8Eo2zh9r3qWjNzcKkR6CrkmbQWcfUfvDQZT5TH1krEj951r6ccNn",
  "key11": "3Rii6pyzrEMpjoHhK6CAJPGySLrSR3BRGN14WTu3LyK8xs3WFWJUSrLQaofsJawRNEZ9VGLYQvwjnMN1Wg6etj99",
  "key12": "3kHagXiLayfHcGCLLQzSRj3EdwDfzSSYbavD5T5cA82dbjXPZq4UcXTw4DzBKnXzt133RoJngE2489PJyfNcC6yn",
  "key13": "2zaxvjMhaLqEWEncs1KwLpz4jXuAxxKiBJq2TCpYfTNYzMdAktA46qAN9cjmdzQMawERQwr4F8D6mNvoLtWG7fbx",
  "key14": "5fWJbzp5mWWPEXS2YTFGgSFB3eE1j9CXnD8CnPCqNZSkEXhpaVSyj4FFVPcXKwCRPXnTDdR1EfvWneuKeiohb8YH",
  "key15": "5ZsYRpb6Q9HprQjxegGZs7ajoVWCjdsSYkL6ctv4WKZLWXUXn8dCQxydSzzAzcfHpkqnbkeM5j6E5MEq2HMgVVLM",
  "key16": "3NjSe26wDjqaq6ubQv4nWLQDb3h9EbtoK8xduaGVAy9muwB2f3ofhAEwt6ghXemD7i9sxfj1CiTWicJdnYct9M62",
  "key17": "rRf16e3HoG8Mv5x2SefnB7ELqFUozdoun1x23avEuQeeuriPv1DFR5SxcgUrGr9H4DZimBioG2LCa5YQwyzWrTY",
  "key18": "4wfn7MeKUgVFXmSwth5MiL3Ew86Fiho3aWTNhgCXsjoRE4hP5b5CVWybmdS1Pub41kd8H5Yw5bX5eSfqzxrtBMkq",
  "key19": "3T5GyX1zBL7q3dtrvFLCxmca6ya5oBEJs827YTk6TkPch4jtaAU7rSL4NZUFE6WqWYfa15p7iEgVpL24rasi86WC",
  "key20": "CgRTXfbR1A1Qu239FF28MVypyw1922VNC9gY4ej9bbpCZzkGtDyDv2FXJDi4jnf38BANS11CBt8dQRfEBPd9uVd",
  "key21": "kpCehxXM64BbEV6BJBmJwqAUTWga7o1g1Z1wcnsVyQemfZjYiZX7EehBwr4BepkBsQt6zppm4iXB88MdXjiXfii",
  "key22": "N5mb8qcRWDPcYefX8FQn3oYLTjYaBYouCXuv8dF5anUJaiEn9GwgSUrFf4WGnyBfFZWpry8iFqmA6FfP5sMhuBz",
  "key23": "2rC5KqhQ8AqKf59EevgYWdqFdH6d4AE7tckYELD6Tac3ySZ6kzhr6dt5CvNSWUcfBEfCTEpqnDQnBz4ZisBvx1yA",
  "key24": "5Lv4i8E4usdcrK4LvGzyz5Nsik8zVj1Bw1eMoQuXrSUNnrPSQufLsvFLzaUVpzHgZTtMp5tSLAgRToAr81e8HxDi",
  "key25": "hqm5bC5PFcNWjsey1a8MQc4YF8hGhjREaSwvMKsoLVYVMKATefNVHAn7gqn8McTWh49UhYKTqn2voUNgwRgVe8T",
  "key26": "3pH2aVAv5cxRfZ9mfUQpda1fzcZ9tTPA5zAe7VeUB8jqw5Ji4ccoZMwXEHW16Lgqg9EGpTawcnbPnYoG8kL3Nm9d",
  "key27": "5Qi4cZ64ZNzZPyXcukNEe9MY8dob5btraVMYo51hXDfNchmmS5BwNCfGe21yPj7iPGyYDQxVf5gaTYtZzfEmeyFo",
  "key28": "2o8HCsST2ySzpZxbaLLPsaYB9i4FCjrw8vybhCmtiJ7yH2c3TiMifu26emzVnFXzDxCFMKq5KNHQSpoKquH3Debh",
  "key29": "22vnUQCaCveChcgroWoYRc6kTR13BGQgwSUG1a65bM1bAqJP6rU4kz3wKAbU5QrEWLeJSLPVzDvzdMcthAQKuD7j",
  "key30": "b5fjpEtphEfPfNvWFnQcNqN4j4J14GphA9xVeczyFWEM7khJXRAFqGkX7dZkwW1HapJM3DszyuZ4gfPGRJEfxxc",
  "key31": "47K63qyY4Utyq9EArjkvQMFi1CSX4VSiaAyCKB5vypjrqhY2x3Ct4fFv26Ja8x1DuLGPJkaQ39mcBPaa5YZEA3jy",
  "key32": "4LfmFvAQxzXWD56ppYxriyDmYNTn9rv5Nyu3dRpfwkQz4Znr4dSKEz4pYYcFM5HisEkbVKiS4NXbz1qTyZoqceSM",
  "key33": "3DKyeCkMxeTc4EktyM7VwD1imKVyDyQfZRDLge8XkqUC9gSL8eEWDp3LacgQWaSjrcZzogAtRo1M2gWDjKnzUza8",
  "key34": "4CqYwxZ6LrxJnRNPnK8ivfsy9wT7vVg2qE3UUmZJLTpmBX2Q8QWfXeDUhKLg9nkUHYssHfEEm12LAueqtUR2tjJ4",
  "key35": "2Ea6vMhGHeTjfNNkM6wa6wHkD67sTXHXny5DM5tAy6gjmN6bdCWU8Wk2McSxwzfKPUFMzMcrBdpmz3378WfKW365",
  "key36": "5uc4gusAupSjPKjDugoQerSQLXYKF2th2BEFCfMeTR5DspuKkY3xwQwVgLek6X65uDhHFN6hnDm8mG99fYRfoaFc",
  "key37": "2Mc6EGxWLH2KzwFtARbx2fLUXNUH65Yr82teyMUrxEwAp7fMncpRWbVhAH9WD4erJCpTWXjfsaVt3ZLYCp7D5xcc",
  "key38": "3MEesz8MC4KPdQXZChcfHmsLQ4FDPZUKLYxxgMGCutXEHhSs5zaodvZXXzu5sXAwJ3zsTazUnCzuPp3MvXdkVzEG",
  "key39": "3ym5uQBwB8EgBF9yrq1w7YzBwEfcFcmBJUCQG2nX14AZf7u1ecCeC9tkpCLjpeDWbWdDAwTzhFFYVkpans81Ecuf",
  "key40": "9HvMUNmQvHmQ6WfdQvfwKN635GqRKx7FMVDkNr6zfGe8fuzEsRwujSXuqE5MmYB2rLz2daGBSTwgaoSRsk2Ufh6",
  "key41": "64kDmhx5LRKEg4Ks3vugfoB1g9a9jbwo1rrWbw3yMaVYyBYDvj3UCRwF3hLivFk6NcP2CVhJhxjkAyDkroBiL2ZB",
  "key42": "3Jkvgjf51oFc4W7knBdHTEavYRAK1SPvbePedrnYQBRpmun8a3dJmz3N9XrhY4ANhnCB17qYFrNKkkf68T1piwZS",
  "key43": "2dX8KGH5a1GPY4w2QN3uH1oBxi2CETwmpDtUSBQPULCnj4F6VhddRZP691MwwmD9s1rNdYZBTrKqBnCcBUSHvhtR"
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
