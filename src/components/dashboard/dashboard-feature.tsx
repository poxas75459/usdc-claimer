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
    "64Z5RFbeWFbwu7XzrBDvH84HvEW4HtUZsWWjgYXbjczYYpAo6qqs8jvUaXYWgaZPwEWpaSGozFWTxUqQQiY1TUPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62opE1vRfnytVWUsSaqDuMFkgjWqpmEqqe4LrJ3rJugTjANTRDiTKaS85u92V28isdS1KBMfjLw7tuz7cjeTWjvN",
  "key1": "3vM7XowBhPjk7EtRtsJhbm8dcpwdeAg3V9V25nrWFBQXT7F4mWZoEJrhQ5puWZAb6rLQGwotFxnPatXfnPazKYrL",
  "key2": "3ABQSjJFqf5qTYnykWuqCoUDDChowXPbyPzjwBdy93GnUwPHaV1UornJp2dQUfVfpggUfPLT1DVoF8sS2d6b6fWx",
  "key3": "2ct4hbGcB8Fied2C2uWrMeanc7czfj7DWbn2efvFWG1mmu16qqVw4w1uop6Ezy8dBphaWu3zD2jLAguaTnD8b3j1",
  "key4": "wb6XY9hJTTTevCamA4EBvdV6XzdApwaSmPhVcJcspk2qA3A2rcqf1LvzfcvRok8FGcjGJYKpQuPwKuEiaDb14Pi",
  "key5": "3aSxNdBqaQUvHYzYijskthhwJYgsmeWtHLvWeBnM5ETYVXheNdCCEZ3EGvcpJLja1Gkb8uxMV8cwhM89pFHLbiSk",
  "key6": "T3EijedXz2fD3uRrNBishJEqriUFYHTM7j4AkNdnGSd124SLxdkTmJZMcrqkf9nEbUf7g9p9XNASGcgU63dtrQJ",
  "key7": "WuYbrF8799fSesqUePzyntEaAxgzbzWQzPp8aK3VbTsyS3Tj9MmYn8s2j72npcjURjAGJzVXSZs6qahA9TfsRUb",
  "key8": "3VyAPPDQYT2iMPtwTLeFvjwYPfsn1dfETeStrg8FvA3Nj179fR7ZY3LXQNvzoxd4fc5pgiuVBd6KU3kh7hqNpkJk",
  "key9": "37GdcJsD7ua9wfCsMRpXHuPEirpr4FNcjGVHuBoGJu79PbZ6Zwu9ixA4wBjGwss3fK3BWbgvwfKVXd2Wn2q4Sfx7",
  "key10": "3fMUz1tqREeodHXUgCkeh9L1exnt3AHtbh4pA7ekCi1WRkNqrMnBzF1bM5HWEQaKu2BBkfBB2ev3r8PdLx4AEcmX",
  "key11": "5fLTWZNb6cubpeSyf5SLjvAES3p5hvZUEcJFyFTCg8QAuACDDg4ZZhaPWCpyyXdVpQ9L4sqHzb3te4gUd7TQSqPF",
  "key12": "31nBxmDtStyRqdwtkrYUAT81ezSMNLbCtuzo21SWRifxFMp3wwLTHjTye6eA7YEkGXFHCxxTfp41yFQ7jHDHcMzZ",
  "key13": "4ZpsdtSU5G62JQ6EM777PwZBHKxPDsFAdzaxAkBx3An58tJvAWJhgYHDEKXwWHW2Br9PKZp3gPDHYh1czPRpjeXp",
  "key14": "EcuEgnT3zavqUnmNVw8HTLPVNt89La1ZiPmzrg9gGanAekJJUzCE59u9QiEvQWcHmXPmBPhJDZb3nd5G4TF85d3",
  "key15": "5jFKgDFd5tNJqjjAcoZkhNPdE4tPG5sSd21S4N2bKRe61bKwN5fLXo3kMNk7rbZ88LsTVcYQq6eXSBgj9kNmoKqM",
  "key16": "2RwDBihieQJuBwXKY62SLJWyGGK2T2pK9hAev5DFzaaYkMwHMWwzQ4vQAsiQ3uEC6j2PDe6TbPVPTeh5PaL7pwxY",
  "key17": "3Y9EeuLwhbr874zCcbNaEQd8nDgExpjKjYs2ad93fs2VkUx7h4k2ds1N6vK9EbxWQfvL5fmE2pvYLAuUP3XwT1NS",
  "key18": "5yEQtVpvn35GQNLqSvczBFzAnAwCYkobCz2QWkBCmKa7Nd5qZURsQL5mMSgojNmgjUbDhTsxdMVd7TmSB8tTigka",
  "key19": "SPqY9UYnrKQoNjZtn3rbMQQoNW3JSBpz4HkkfjYX5WjgVUHFEmcEzkRB5mcfqcvtMMVA1ZixT9JDV55H1cJEsnw",
  "key20": "2198JVS2nN8Vqr8SFXGDzndKZEDQsg833gQQME5WE1NLqJ261Eodu3yUAzcJ5d3gD1xRmXNqatjJceqsyHw7BPbx",
  "key21": "5jvZqQJciU8Fse4K6wnkhLBRmy4Djj5nxxJ1Uz6jnK2wM4TxBk8PEenCCPK2iTxXnSC5i5WaFZquTZqntJuVPbLz",
  "key22": "4eDvMS3rxqSVzpGuCFfVP4JB1ybC2SUyfFKkFWA1k54BkM6vJG7167jPNiwZXbomsb3HkDH7ptYdzk82iSaY8yx3",
  "key23": "3uDp1TBGE4ndLrNsNCEimZsp3okRruqpQ5DSihFLZNVTSfecASSZEZ9fNJuzTugMxJzeqpmorDur1emTGNYjViri",
  "key24": "39Q8fJ1FYuJ4CVZt9fcf5m4AKWaLSMJLZZEiGVGMiStr2T2xKLpgJZUjuocVQgQcKcGGvMtKZyzHDL6mZKavjurE",
  "key25": "4MUJ97KBzRhB44ZgXthwomGFRYrLY5HzLJeihcqEL18MvbrVTEaZKap1NCMH1fQZ4mGjPAjKoRVNXCeNuMRCPZDs",
  "key26": "3Jk1wuesbDScUJvesbkE6gKXVU5Lt9jaK7NzE8FSUJyCJ6WrpXRi8w1GcW1uacmtLdmqVm6EJPdgi4zoLbpyz3UZ",
  "key27": "3bf51ApYkAU5MxAqkkyd1tB4HBedByYhxbswbnqjWjSWQJVnRpphdQQavuo8kvrQAq2mHE1yNThjAGNpztT1iznN",
  "key28": "5P6D3ep51UmDTDtxqfSNSabP9vMJAs9kz32iC8VsujpeNPLDtbTz85AvqbZ3tvLWXK4SZpyRfUZhMbejGfQmyTUo",
  "key29": "ndqAVaWWTdC4dmT61crc4GuihPQLU6rmJ2Q6UoTsX5i8gE5YMzLMo86346twrC5jraQ4A78Xsaui8ZdCYWQqJn5",
  "key30": "5gzUk2Q9fKNgHKie8nnFpcrPpGiWY68NMFjc2ivbRr3iHKSKntTWcXYz1DaFSUDW5s2QjgLBT2hVaiSkHnqYhmPF",
  "key31": "3BE2sw25QZZ7DBmYZHwrJ8rBj4AvgwmAUXRea5MLQGDmCmocuHCEJym5bcrVWzTLmKxF5VNrHMKrJFAtVnCSmW3F",
  "key32": "4EySm56dh37TMY4b4KXD6jn7k6uHPNChQcAkS2YyiHjr8LVrJqgQdKofVqtD5a56jRocaG4vxZHk6U9R2BvxgpRF",
  "key33": "2d7eNsd99QswUxxn4WBbn5CK5BRMv37w9teARisQbDemHQ6H7mJETvbsjcRaKRdE79bfiiDq51A1W6htfbEWrdzd",
  "key34": "2mjsT6MUWAzEYJys8W1A5G6kybuZJ3KxTxd7FLfZLwx4iqhRqZnsNFBL7ytRyj7RzTWDPzFdqaWBDKwKVKU1fS95",
  "key35": "65qeHU4Y7dUyZkmK78zf1JMxmNKYXaNUGJ7SCVA61aau1iDCoTN3FhtBtbxH4Rhbsi2r7sJAc43Bf7Sb5JWYhEhv",
  "key36": "59RH9xzAf3RJXtNJGqCQ9dpWEjnX5hHJZxP8tgAc9TmJJF4UeWWiVj2FhspfxDH6FNZFgKGj3pDHSSBDM7U6XhRx",
  "key37": "FLiEMWaAMnzB3uhg9VpCFnC5HC2Tm8y4U45PVyVSMYoSXParttE85r9xyaWVm36LqyT4dzC3M1heKkmsXb9JbDz",
  "key38": "25HWUEx2zhevRFTnC3X6d2qxQqkcHXsMfVAJ5arQYJnJoUuBV3VR99Nzwdu4dcXmiaGvnAQbCzKEXEqtr5KnRj2R",
  "key39": "sbrhX8MWjkFNcWi6M5Mq8nGdyGPXJp7exb9RhDX3GRkAnkWxDwTGqPyoe8aizU5gtA1jviCdXcCGLDwr3cUuCoY"
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
