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
    "42zY33zCjVCF7VNXhay4yT1uuJKyCq4YbdVtb8NKDZK81b11RQjjYc7g9DizazFxgrS89ZSmtz68A1be4zvTKBMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KBXFzwzNPsjAqwMMz9FYm9iDiMb8TQ9Ar43fU7B4opgXKpq2mBeC6gwamXvgw6R53HcKpCJuvfhchxwYjZWLGur",
  "key1": "3ghN839BSkuRJ3Daoc9KdKdtiJy3PEM35UhcerKvRgS8q7K4JHzuYMT925bu6ycgBZcWokFzMtUNS6S5niR1aq2Q",
  "key2": "3fjMJsURsXJz6rpopG4EQWhfwU3vg7WprCNi1WZBYhCJrpeq4XU4FiL39sgNkvUdG2xR8qwt15hnpNhBdfmmzYjm",
  "key3": "1hMkcjHDt7Ueb8FJCRpMwfnndh1rh9viBgrT2k8DVxP9j9bErMcdNk2HT1wL3BhcUzD9CovWKmgWx76t8LdBHu2",
  "key4": "5XkATcgmsrGKNLdFFiBCmVhCjjHi6UszDygqXXsWJCAcuQkhPDsmuhPqgE3LESv4c3CKprmN2JEigzXmpbPCn7Z2",
  "key5": "27x4hSPNuVpVNMJVGqFfEBbHPEVjJtqiq9k96Zc5wtKxyoZ3oVGtAkT1Qs63xSEkn7KUFi4WMh7mfdDhvf3dqMiY",
  "key6": "2ydg26HnfbufCN4wwJsz95HFdNUJWpaSJe6xC6c732NcWqbDeTWaSDmV8BBTKRkhBtbz2cEzQ7GDgkFx8m2LmMQx",
  "key7": "5b8McFFQ14ZNASMqFcRMdeLtvZWqPyCqCbFmWeeq4bCnBCg75pGpBmwBDNCfvt3kSgjqQhXzymBp2kG5Y4SoZRFA",
  "key8": "2zP6odzvFmBh9ufQvqEKekdxkRsXxC48aGaFPZXiwoQFx2smzedp1zruLn8idmZ1jUfknZejkuMgNVpzu2bkcNaH",
  "key9": "B9niy9E8Ar3tNMueiRec6EC6x8JJwt3ipFfeAHDmnofTZW1mJcQKYPZ4WwpsbRsJ2SQdgZcVVJfBXuTN7WBiBMN",
  "key10": "4Vy2kSWCvm2NgnPidm2r6tDaNFUAjaKbzXz36RzbdocPEJqYNJnVNCM9hCyr9VeTXv9SeUqJSZhiEJx22XHRkH9Q",
  "key11": "46Jt4EyX2xCMoxctbE6w22aEP9AAGKXBPHnWM6Qo6YxC2CqeVE6uRh1MZFGaM27t5xCh8F9w3KNVDCnfnkoEYMFc",
  "key12": "2bRo8qVFecZhhadJQrkoVgtKVPLvHjozZa87o5EpVqSoTLF6afXcG6TfbwddnvfUXFQbzxRnrcWwwSZSe1tFK9Mc",
  "key13": "2HgoA7UoKnSyjBN2QWVwkEs9N8C9WV3Kawwv4Z5ugX2234W2LrkrZcdakmseNdhRL8ysbE6kcoyDYxx2oXbumkBR",
  "key14": "cFS4MZZi6qieJqKvvvxGGGQFcLLof4fgydwPQ8S1xKuXENAdScgYjC25vgT5BANL3rK8XwL8X2hww7pYSwtqXCj",
  "key15": "24RwKUGMxWwzTfZNhNKRqmF5DtLyDsZys45pdT6GAW5hTxkXQzu7Q2iL4jCXzfZVq2pVViBbVzuCVpTgAg9iCc6x",
  "key16": "4LsmPdkeXUNSceNjCJP4prjdvNwhUs84uMcvUJbjCixpfc9Bd9Y2JVQ3g744Lh58StywrbARJ9wPrYxfDxfmABA8",
  "key17": "2EcnBcuyKSKkuzumXqJPBPZxAiEZHFoyFMHvxaeWXvpkiKHabwzG4XExjJdtEjFyTE8VAxnc6wBK6phEawx7pkAE",
  "key18": "3gFmpbnatJUQF2MzGEYhWLQ2pJnQstKHV2c241fQwx52bRVi59LT95rR9Ui5xQxjsikjUbXjtQnaJrp8ksAUZRsJ",
  "key19": "3F9An3kngt6tE8euqgqEF3QsfUexqQtfzQjUT3MD56zY1YgDxLyXn7uG8Vc5cnJo3THjJzo7FWK3ue2eEDfNDAXF",
  "key20": "3BhV8hA2riDAFV8yKG7uwvagFDCEZwb2KnCkWVExxpXFswhDapMUdSWWSaLcZi5m8wfE7d598f7ysB8UKuzMXemE",
  "key21": "5MBHQiv1agfepMhaWCFaDKZ8ZFAjPvtYhB4uhDrwgvGusQYtR8CkKDVEFaqkztcnjArFvA4BwbYNcVodSWeod1zR",
  "key22": "5hhH4KMX6LHyLwBVHsLwYA8HvgEiXZyM5XxDA3Dr6qzvaBnHB9npPmtV3UWP9k1TMHuXo5DBjW9dtKUv9Jm1EjCM",
  "key23": "5TAo9rvCRKQpj9xuJkgancC7QBc7ZSXT3v4VyB9FR8HNEu3PoorSQcs3PJjeA7ReHQNp3UFa67LVMXgaguxAgRAx",
  "key24": "61fK1J7w1n1snadEqsJbB8acG9XLuGhKuCsrBvcWzSB7TV45CsVXpDgXh6AcJqaVNXGFSCxRnFcszxHvxTwNcgsu",
  "key25": "2Zyzm5rYwFYM2kF8b4GdpQaQREvQzQC5CqYmWACkCsXMBDneEDTXLw5AyvmXLhmWeAUbUGSGY6PBXDPvrGxTJVCe",
  "key26": "4KNTDwDbvBzg5ZyByXrZfzoJqdx7dZ8nrKKy47wgAk5xe1X6XgQyL5hpEQGtsApe4doaRq11HydECUbkPApFcADi",
  "key27": "4ViiYAFczmEeq4JDp2u8A7wEHKnJeL2D4rvxzJZQefTR1K1CbuqVYugE2Ny21t2mSyFQJ28sys46Kgwdyw4M83pq",
  "key28": "5VhTbUr68rbZZhdUfyjWiqVXGknr39jyduM1VAcf5gLuugST84XeewakBPUjEqsoRKbfQvKXBueZkB8LKuFVoN4n",
  "key29": "GPDYFVwnLLVLXJeqf9AfEBPg2dTdLA5M7v2pAWktTL3xYbajHaFck2q3sPM8U5ipT7XHEPVyQwgptFormFi5g4W",
  "key30": "3oymgEqxPRvxUvPW1X9TckZgzQ28HjzgVqZ9VgG297kpX9pppHShdZ6G1G1Fvrwv4ncszGuqEzkgdCfr6La81WbU",
  "key31": "kQEQimKau8TBTePkgUtgfFVekXSevrw3NGykLXyyAjXWtUFabvTSYBuLTSAF9UxMGPsaNb8HBFq3zcJjdKELQB5",
  "key32": "5DzBrzbN2g4G9LmW49pzE4pL7n5EtsuifEzCvGaueFxAW9aanFDZGmFkpBcQftdj8iatm2oSVwHaPXceqDgNnbzy",
  "key33": "3yBs12EBzLUTGR7RYiP4SHx3GNyx5RDCDYfVeyLEyVnGxCwU76QgWQXNbZcUrryzzz7sWMtFyfGzA3WwNCUYyGvr",
  "key34": "4cmsGU2s7pE3jbSCw46BjcCoTu2JWsxey3UADgFRWNfqt6pZzzt3FPuPcTKEjKaxsWyYod7xESXCSqw6oEgdeRmH",
  "key35": "2YdTi3jVxgW5UNamcYRbsqXii6CSBirLydM3PvQCdkMCp9FAxmwcPafo3dKgpMx93dbYpxhkvRft9R6QUHtkkhN5",
  "key36": "4rpyHzbR4i39nG6aNWPRCC59d3psbwAfSMnXqxFKfuFP1sVTPySGYYfiz33AZxi58YfPxSGizYt9JS2dhTADJAYm",
  "key37": "hV1DT2QJCkr6rczYhmz6gfLpuoAX15SggGgcyWopJQUy7QmYZovp3QGB9tFrBxwyZhnUdSEYuyXmUN7NP26KgSE",
  "key38": "4GR6XnQtY9fWmX1bSkrGceCSYWUoKuUMyFS6Z7p664CdZ9AnFezD2qjd3RMULRPLQkXcQeYgEAU2Vwk8KoxUhT1B"
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
