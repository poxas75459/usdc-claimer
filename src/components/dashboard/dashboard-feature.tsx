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
    "5sqAiGYCQBHffk6ruexmrG57E5yBLXbKRzYMcgvthj7JaJ7ecNugrcL5dTn5V1yBMkY9jeGSXXcgcxgravwP47dS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oytioBjdknixwMYS4w1yq8q9cT9AMYYkFcDmwWGL8Ny1YZjDvwZJzHY6oEcVtHVHkhBkpLqMTsR4NTQXyzaDhr9",
  "key1": "5xKTaxbLq9ahu1zchEsSnoRZiFPqmxtWr88FB5tgpnCmo1xi9NWUW1TAta6DUrHmNx3AetcGLa1PENxxTf1J1Miv",
  "key2": "d1BPcLQJQuKC7iuY7vWfADWkeDNaqB381ZUZmiQrwXeV3Lio7duYwvtx4MvibMJ7DYo84EXvKQQr9oWKqDWNCMV",
  "key3": "3hL3yBrgPvQF7Nxj9uwemGiaXm5m9TxjboJ2EfAUsJM47KxqiJudDgRf6vujDomudNoPLFRuRy6gEaqZSAzWko5B",
  "key4": "2ogzZ22vgHGtYnnH68KDfb2xgxfmgwHtjzGaBe7PnLhMhX5j4i5STPxXcbtMQgPyL1ZqRk3KyoU66mrHi4qMC35T",
  "key5": "2xAd4qhG7cWNckzTCUc9MNTt1dPfNBZxcDggPF4L3ZA8qJvMis74FSLSWyAcfaFeY67HubhzokKSaeJvkqNtwBDg",
  "key6": "Wm4L5k3qymFsxJyoCV9fgvQAhNgjcbeo1qt94u9pcTjbPLWF7dw6BMSKq45JUtUkcbvwrtAamhSkNhNH5uP8Eqb",
  "key7": "47JHmvA82WPkTm6hFtthvbRB9zknBDYHi5wKCNEqDSWSTH2R6jceZRMT9dGC4N4oghoZ5jMaFBcvSwussqrEDFfC",
  "key8": "bhoUNEGBfSYeNCxzLsLYG6DS3pixza3pw1iN9mHe9zxrCpQDNAFGr2gC4nmr1Uop2DudNrdFmoTPNom3uqELdGg",
  "key9": "2AT5aqNj33Kj71bSRKWxUSbDSrNgquwdRsUSd378ktCzmK95q2jFB2VQ4JmrMVheJBQP88HkkjWKqnVGaSHPLkFy",
  "key10": "2ZiY3YtpWBcooT9CCeo55EW8F8M3jbkTzxWgSCueHqyK6DEmCVDDepUhCuPwDwgtHEjQkhrAwPiSEGmtxYLsncFn",
  "key11": "59ZzEpnLsnPQGrxUr3SbKVQdqcb9NB3SiUwsmrugFXojF8r7roi8edULK1zaDRHF6Rjy85FHizzrXH4zzg22xhA8",
  "key12": "4qP5Z3nh2b9EAzSnB6qyQ6a9GtCh3RKNUpPwGcunrzgcJuNxgaQfL2YHHJuAJFHztcVVa3SHHu8rS5c5wa236ZX7",
  "key13": "2g43iyZGipaq2Vu23ToGAwz8stSqjuLqN2U51nxHF2ufWLxubYQFJNQuuesGFX6NfsGXH9brsxPXgv326J5eKAcL",
  "key14": "4PPy3YtRafYpqJNfjv925JC7H3LPuPfWuBSMsXCwynUQnRsZu2hbCtLXovT2dXCe3uTbEHov7jV9RqM37hDTW3Lv",
  "key15": "59nXHThoM4j2jrHjC7K4vyJymRmaQzeA8NxzsZFnXMiUFQBwxbhRvBhHvqRTKLUWVpGhrCATss4ex1sd1uCzt13e",
  "key16": "56A9NKTQMmT1fWXKPeMSqAGhM3ShdLkKSjRksKSvQuMcAc3rbwwsftMjfgseWELdQYRr8QRLHiTNaYi9qE7dWuQB",
  "key17": "3dLcYoSHVG2dDcq3P5qC3LuonBK5dJpYkuTPXTNQcs9ysnpyor3F1BKbJsucoQzSFDuVGzvsqBKkZVNCEZWKuPv4",
  "key18": "5TxZ1dzrtX41KsG4V9GtMTftNuH72oZeiBEGSD6bqbuQJjbZASmtfJTByMdZ4sEnz5ZNx16DrmgVoHtYS8YVogLK",
  "key19": "5cSDiHRW77eS3TMTyQ1nVGNnKDTuEUx1dRVxTopW7Ta4s1ZEnTgKuBzVmSUi9KzZauMdte1P6pkRvrxRNhHY1hYL",
  "key20": "2g8ehngc6HNpiT3UPSLYyEnwhZe6XLQxrjzssUDLq17WBv4Yaq2xMivebfQrF23RC3wzExNUdK2kCyY9xaFwvNX9",
  "key21": "AsTrd2xqZDckAn6H3zNu7ksF3UKxC5UCb6D6YkidZeY1Qk9SgJkW15t3ny63cwtbhoC7xjWLM2AJYatKbAu6oFJ",
  "key22": "4JQrJVZ29TDLr9ZFj5HUjTkdD81qHEAcLq4BWR4MkQAtPzssPZpLS75wu9gkFsE19jzkYDoXSJNjhEK5bRDomX1",
  "key23": "jEYBv8anqxfjceTYJwYDAQTFUoqN2HjJcSvGLaLM61kxTGgaGLh48e1oVdqezNVCkqxhbSMC51CjpMMs1hr9TKp",
  "key24": "3EFvTPo3RPA5XCyhHp5LBaDkrhc9Lp85wGQ7pk9wpXZGcHEg3ErQtpeBhBrQ8n8Z4tNdNUbeG9Wkm6KxMrngheND",
  "key25": "5wYRrfVddsWYGMsk3jUnM7wEHySU2E57fTwkP4WAx9k5WjhNSeri4CYzVNvSXWJMETEMcv4pZLPDRxLcJ2GsJiRe",
  "key26": "2ZLEa6q12zQYDwMVQyAEupVks4Bm9jhvzRyqVZhanKvwYPT8gXgftNpy4wgkpgUT96JSJTaY4JycSrbzvXckJCSD"
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
