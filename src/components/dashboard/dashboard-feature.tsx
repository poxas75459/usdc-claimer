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
    "apxEQQfBuJ1aD3AhpqArGbh42Y4JUVsEMQ9brMFxUW3LMQrZbSgTJvSxVHmqaj7HkeofXMxjmdFjJkzaxmiXJWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a9eMEYTSbtrGRZPcaKYDkiJhP6HWfFSQshrTSsvsn7PLhCDL28T14RDA9BhZChBwbbWjuDiCP35bGHQdwHF45yD",
  "key1": "2By4SsWxCXeLNdMZbJStAbnqpuDB1TJKnfeMAD6VfrH8SqvVfjtKNDdPVyhUeVbCAoa5nJyER2SaxPZ5QRabTgyE",
  "key2": "DU43s3bg9eyFFEPGMypmRPeo1XfDeu3PksMyB9JRt8UgPYQ2FdsnP8s2mZR1Utpvh2zaDgsFAaWJj9TDdK5KB2E",
  "key3": "2s4m6wto5nhP4y3Y4fcjTPZ1kwF8gJN2ZV4HLRXBsVZeUZW4Z9pPr634KkFXcNgWRXquhRy2cntQ2htg9VdPwV5v",
  "key4": "5r6ATTZMSdPMZfkhtKZejGhBF1n97UroRcyWPWCdBH8DJecZvrBNG9obCRsoJpZCQCzSEZ25bRtoyhpkioX7oKWU",
  "key5": "4rfsjEAHpgHrgshtvu6paBC48wTAQbwRGUkasgad54sQAoVACifadEzZasgTQm9ekeYytyrEticxTdqhCSrCc3WF",
  "key6": "4KE2gyCSqdF7hSMG9cBjXHn6Tc5hEnV6v9ZddpgGW49jXrHN7GR7EMWmq7VauVhf8GhdeQYT6HReRWwsjy77tMwT",
  "key7": "4jsf2PXKVZByCMfCWQf7DuvH1UPJu3N9DPb6Wp2x4SxH3uuEMyap8FQpFzTp3ke6QMefw7TUj4wHiupK3Jw7jGxm",
  "key8": "5dJBYVsRMLQfUvY7H5FWycb7vsFHvhfLxEJ2MA5rkM5PscyLpWpUpgF7qqRXrqHTe3CnTmPrbDZiNwMauBAdzkte",
  "key9": "3N6JaNVvskEhnZz8qHnyoNTw1KaECv2KHkuv866yW9Bb2BFeRHULm9pPoSWujvvTRUig8e6f6mSeaNGpVZHsZRcH",
  "key10": "3iF7RVAHYrSTh9YbVPtQUK2rMdysKLU5hcBvEdnc2L2tPoWy6DCtHgY9hzHAsJcqipPXfeH7pjH7hHfwhM3Cmyp1",
  "key11": "3L7jmYFx7YWBQCY3RbyJYj359uLFMe4W8q7ya1LjJKxcsgLAbFo2G2enmLiXmSvThoaDmGN8afdWFtStspC37nDp",
  "key12": "3WPpj7U66iRLXRFH4F3jKbvacD634EGjGBDNqPttEoR9k25agfoABhE1gQY9oaQKt9tLyTy4dwaGnbYFfUzYU8da",
  "key13": "2TTixHjnVpwPeGLs4H4qrgaPCxgcZtAR1KYt7kLijSdbYEJ99FezPQGhZwe5WbRKeYcJT3ZNjjkdmoQbFtYoWrxJ",
  "key14": "37td4aAri6ryFpTsntVH13ApbZXLzF6CdxjWjf9Dcd9Yz1wGnseR8xKc41Ay8se5hq2Le7xB5ZFjUuSybkB2PVjy",
  "key15": "4fvCNnrXkPeyeVNQUdjup3UsVJeaGQkCF4R3bW31uxRS2rRjDjHd4Qc1Ug5tVgpRTDTdfo6fdTcfWSKhJBz3TJW2",
  "key16": "3m7f2e3HkteUDVpMJLrYTBg5ye3SwrFXRpiAyH1URLncFkyhJnVVNo1gaPNdFo6iimiyVaTX5XaBdEVcy9Wm7Xwz",
  "key17": "EcK9Qtf29N2LUP3tFRLbWH5ECBPPGFJz3WtjYvpyuj2h1t57tznkMd1FNpmBUJDspvaKmQKPe28Q2B9uupwWkmM",
  "key18": "5XE21Gxzc9MFXSfTSneEFbhG1WhnzqLGxfhrbpyL6VGHnfjdjtHwcoFbvaCqsCjpM7Nv8tZGMuz1AbyFvAjyy8W3",
  "key19": "29iChFvcvMw97cbgFqXvwMJP5QsaUVNXDRjcLjUymYAwQhkW7FbeVhdMVzHTqeRawNAHZnSew6noJsuRkNh6xVK1",
  "key20": "24iSVBc7Q1fZADmi3fdySGummanz2BTU4rHiWkK3yJEXUdnps1UgMs6HUe6XMaztuCNkWrjXYv2dcjFqQXokaY8x",
  "key21": "eyTDEEhzitZbttQ22WPjNVMKam6ZUH8ASytxLN5ey1pMEcrp5WcH97dujGYQ9pPmMTyUFzFUxWJaGf2Bn21t9XH",
  "key22": "4SeVnY1G6KUzuwGmeD5H7YFkF4cyFepdzPB1GXfTjezDKjTuDmAkdygs9ZNSnyUPwv3B7DwAMHDGjkuKb7egTxMb",
  "key23": "5oiioK3uijWtmCgr5tAvEhe7YHtGi9nkXCjgWEHYz2cdPePbXaK1L7zpfPMcnubb751zkBeDwbbaLdxj8xhgfjZ3",
  "key24": "2etiS4ksG7qDHURuck25Pur5Cpja7KhCE5XSuFRc8kFhenuNvUpe3UP7Ni4fFVRE7zM3Wqnefi8qKVwhf3zXZXJJ",
  "key25": "46iybzqBU4CMYsFuoHEdXkbvJPeiydahUJxWAsvTXygXKy8XvdSWsg8qFMvzYWyjK3AGiBKePzmpmPBM8caahhKa",
  "key26": "2WGd2aH3nyrVeKMyab5vsheHG6e4qqiu6EeffpbpT39CvtbodYrEFPrsznNsmurBipkE1mkukfYmcfZSnJKd2XeX",
  "key27": "5d8hmDnxPiodfiB9GasuqigisYPm5U8fw7WoQ63vL6N9ciexXs6G8os2dHo9hNkWoZj9F9oKydokebxaHWbxhM9D",
  "key28": "2KgPspAUQrSAyvVpUKryffUM8kwztbBkV8sfAg8TCLUw3NCFetz45jpAyw7Uz446u5Rr3741DLxmRjHkJox3UXCC",
  "key29": "2sm5weaFsiQb4h9xMawSqynQtbrddeh9gMJciSeP3MpChr64PbueJNmLvYEZs9f4d37osmfCTFJhktvfVmtYoMjR",
  "key30": "3wFdGEotRWtr6R3ydkEBG6hUqwWxF19pQfpZEfKUEYnWRnFGkawBS5UtdxirkgKVe3DkrEkv3NAgchN84GDUjYfG",
  "key31": "4kUca9j4fGhjT5ydzdNwoUmrTkD6er19CqGdUdSH7ynLBMP1kkX5Go1TNfkuQEwBM2ETFaRUWMBoVCchY1L2PL8U",
  "key32": "65HH1agF285an1vt9K3EwhPPYX4uKQLgw6BuQUzamgzNtqUVeTYB5uM1yGqHaCwbR355te57CVZ5DyxMQkf5k8vM",
  "key33": "4Dwb8tmPMD1xBCYbhQGHKmK1r675WjkwY8bgVMm3JshKF1kZhttxoEwFVi3hgxVVH1Q3vraXTgq8yWTRNwVnZ1Qj",
  "key34": "5nXAbzw5D5cyLsbsZNpWRn55hF7Wo2YPJa5o7D6HApq8oEbSvCUH8No4sT97oXtXFiW49ZrH3teCuhTHNozP8gD4",
  "key35": "2Z6fh18pWuryQaWn7ywmUQ9iR9wAWR3mLgCD5oQjA9kT4bYVM1vUZNYinPwMpA1tgLNfvdvaFvywHCjeTfbnDNtt"
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
