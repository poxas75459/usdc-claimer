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
    "QLVk47rbRs5ErwuNFYToZt9Q83Lmuhy4QDVHQPKzh3TscNRbSLnAmA42iCRUtLDpvbJfuUkWujcnrRV9h11qEUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqkWCX4SnM7cVJL43Z4fCmH5s2zNRL5x8vktesAtC34ctX6RDxqQw4pJPzGeAvWtzTEtu3Rdd9AdN3rMXGZwyx7",
  "key1": "29RyujEReA5VZ1w45B2BxW55HSDUrmVXh6p9Vs7dn2CBec7jwDbDQUMNHUYVqhMfmvWfcMLXeShV54magqwMnyys",
  "key2": "3d6bPDhGHrrKufiUm6kyhcbW7VULY3qxfxmsQyoXBsWumjznPksgdn8qyv6j7c5e4pPY4S5s5HUt5yXBymyyPMGU",
  "key3": "4xa3rUPEQpsMVXpzuYU5zbKzDhszNYM5CTi4q9EJTnU8sbxAVpCnUupF3SX7qyXW3GpZ1eQA4Wpfbnt6ubSP8mBx",
  "key4": "2bbcHgsUbXi5ygLSYFKfnMSWXZtPDqN1hCacfXxQC4DBGHwdiHwXfJoLgjZGpiXe3wQuHFGZLvwb6wHVFDWQozyM",
  "key5": "dRdeYgskZnyJByAMD9j652KPo7jGakCJtjCJ64EnYVR6wRL8rwsEgSwx2B4fYs8U9e2bmF4in1wcPK3UqV5QZTp",
  "key6": "Af4urD7x3vMeU2oaWJipjAV2W6nB81YpksNG6qP41mtKtBCVeSWdktxnqA6UiGQ3ES53rwETyg6n2rf4ja9J9zj",
  "key7": "DoBUg2Gg9sc7R1RbNpVdc8YRZ1V7VL9fw8yxGFCkfHgdm1M7wtA9BvmzDvJHNMsfuBjsM6XqBPqCzq6ASqnKg4y",
  "key8": "24Sy3e5mHuBMxyuYaMXfxyVP2FN5ESt6rCdBzb2atG7LCABQEog4vpvT34B1dzErmhTmi742b1k1SGQ3KMjSd7MC",
  "key9": "2St1KXvNNGXvyELEBzYwmbqQmx12iRusMGoBz5dGPNbB2cvjRB1yix6fexsz2iVRzJB8dBAJT8M4cPXSXw4uEkd7",
  "key10": "5FSwjBqXpeJo4ipJh7GPKPPYaW3rZZ6zUPrFFcgnaoTW6bGs1C9T7LLBC1me79kR9ALX3JWuuDG16jcQ2W56Jk2F",
  "key11": "28nuzzfLDBnQJuJdMVJRmmAwk1e2hqAra6ruHeY9tfP68nPozxa2XaE33DFPqyVYurXHrtWpQNZuwprxQb8mNHj5",
  "key12": "4CP9HA2xuDja1xF5nUD1WdDi7H36tXTGBZVFS9s1PkdB9mCFkyKKxYonwCWakpmiy3DRQZAnZ31LbdyLoHsuxiUh",
  "key13": "31Mw4Y8W4yTTxQUGMtN24udaynki9CAroYxU5cXbNC4kucVrNmFuLrGxsZniRRcCoKiGGq6xYCUYm1qAPSTprHBZ",
  "key14": "32UqFwTLPgS3jPNgZAquiCeVKnRL1sA1927JB86SRsPV5tn28dseHfM9VerBZbaorAQV3QbVamPYmahFpzy2ZKjN",
  "key15": "5abKXizmWxCdTfsNaF8qgp47Nri7U4kxVSce2JCcUFbkWY8erSxqZKSXLXSRDM3CUWjAgCDxjqivNexzLcHF8CzA",
  "key16": "4etHhy5apYbzCdGMu3TM5RqzXyo4937fMTQXicDnBLKMGESwb4BbQdSMqU3v3p1sNrkfk7STXgBqKuGPcSts12Ep",
  "key17": "31nnCnfA2S4W8U84enyAgiX6p211ScT6si1idmjtawYhmNBvu6gjJMMt8PxpQJaaTwPvcFzV6reN6D3GytAGX4P9",
  "key18": "65ZfHHHa7qHxWdTvTeFVAM2mjGFL5SwR9esEsahLvrfraLf9x2tfZnJLevMzFcGGyyTEWj1ktNoESxtT5jioKj2W",
  "key19": "3i8PgTo9X6mD7BuvVGhD7JFuseQKLKyF4jKYEycbCXo5QcFHCvzPqaexSPggfvqbVdet43FGJVh7VHfje5L1oGjE",
  "key20": "5Z7wtZUA7xvjthueKvTneBUoMYcdHrBb7AR6tQsq8a1KrjTZLKdLTa5DbkcTxR7utP9gjf887x9FSQ5JAjXABP8",
  "key21": "4rJh6fb7Dx8StX377yLaEn7PnoGbURQPPYeVVPiro8A4498Vw9MvGALMiqoLKUqKteHWYc7b5KqSigvmL9gGefvT",
  "key22": "53XUNYoyxAemsje11TikU4wmFME1c6zDwNMUZTeYmUmsL7qjhiREkP7KyVZFUSt7tgWHtYk8PvhzXQeJLK3wB9oz",
  "key23": "63zjWDxLSUsjDioWZew3ETgoG26AdB6UiqGafR4DwPm52gQwyev9h71RecicRSo5Cpc9FTosEV4PvkuCYj34zKGa",
  "key24": "4vnCyB8fYmiWyLmUUiag2yLeS4ddTSYZKDoa9STLgFCi1KFJuccLAzLUCubwzzoC74CRYU47pxw6bVZfMm1nB7mQ",
  "key25": "3gmwoYE1dGsyKGCvAAJ7LmwqjcUd3f75iYabVcPZrVmLzkFRBxgsnVWKB3tDDuBRECBtpfum8miYxjTmgC8JHmHF",
  "key26": "4DQvKLxE7fttcF2TCkd17FypvFWK3nBkZwQa2GNcwdSHJmELzyyY4fZEtY7h5JrSw5YfJFxhmjhxVbr4363zYC2V",
  "key27": "3r7CLcstAHGjyzGiBaKgscS354583YwsArrW4Ut4xTnevw4FCnbTgVLVCc7sPts72towkap76eAeBWy4xpXL6rKz",
  "key28": "5TbMz1eo1KKWBotnBKhhGbJNJsRfSCZjgE2nQLBqAHNxo5buXyYfz52thwab5NVrD6wuApGTn2hNJia8cj6LAnaL",
  "key29": "4bKdjPqFBdYWWFCAx2iUcfcbbcsbUxV5jbaXtKEFNQRyTvgKzLm5jaaKVvW6mZL9ZuAjnFwqVCSKUHHfjtjnG3C",
  "key30": "3jorWVa97p7eAyZNFKnS51eUXmymVcMw8px8iqgvqv3J3YfDcYy3bCJEpx9RXJDSS77jhja3rHqz36PhpCuYXWAZ",
  "key31": "2ub3DwSAAivEmxMjpt91fXedgPBscMPVSuJRpgtoiZCXFxdr5JSEqbiwcV4i5wxkSACoWzaeGvYazgBL9eKojvcc",
  "key32": "2wG4d2ZkS6cLaM8RqdpyjRu923t2yWCWWbGnmLGU3cpxjTRp5knNxthf1sQERV8PMxsUbC89rEHneRU76JJemaUD",
  "key33": "mbsuTTBWPfWgcCvK6MNG4J6o3CoH1kAYH5YVB9MFZNk5d7EaJo3hRV68BUi6fKX33AmYso71XQtz7A8SYEvSYGb",
  "key34": "xsH4XxitAj9Ld8ocvV2iRfXYgJRKGBePuTqH9K4XLwWDYakvx2QzVKucENWfs93oxCjyHH1z7rZcs8CL1SRBTxB",
  "key35": "3VDXUQF7qou8gUNQd7MyoDzK3dgZ8QSp17k9dLAKGW7X7cnzjSpBqHDq7nHgHmEr7EKMitC4oM5T13pDHY43Ka9a",
  "key36": "2hPQqZbbPboaej3PhGbWVFTuA94yEw3zhz25aDKefhdS99tQ9qbmcyTdiDVnmPfzZiVFqP4uoPDjCFJTSTyyk7B7",
  "key37": "3cbbYnVwtDVzpdThLGkP11m3NzbUTStt5p1Er495jZzu6sbqYJ5UPpZtFqBF1g5azVFy3DzMmC2msVFe7T6YTxX8",
  "key38": "3KJsE9GNK3wyqPzBdsdSyRsz1a5iAJzazcXyE911V9eBfXtSXPBzP95tUyN89BpLZBudC5YjBinxzfRk6HGSaGXW",
  "key39": "4B2VK9AjB9d5M5rrSEBpyoZfASHz5mZLJ7scWMNRPcDJfwBnCffndTj2bFXDtmfB5mhem3wT6w6D41W5ESAhrtdW",
  "key40": "5bnrxNHpuuya24tHEYMhNi5UKmeZsCFjhCyJ9Eu98Qqrdi7mS98Bw4dvMLEXqzKtrez2NLLQsdJPgwA1hKXW811P",
  "key41": "QyGayaGhapkKiccEJCNuc4SmUXMKqM2ixfbhy2SXoaEFqb7kpGK613pM9CaENP35qhMi8hwdyRFgH8ErJdKPsWG",
  "key42": "2hxegVTc9F1E2eZ4XThoMkeiR9f9dQubwSWT34SNwYYeXandKEdC9TMtCeyfKqfDdZKjv83by5xsc9p1TAgARcvn",
  "key43": "vbf8BG3HRdncMrbEzik72NCpHEzE41oa2KtTKfBswFo9KYbYf5e1uE7LrCA5wctGorBsHiBAxtwq8Mh4RfLXKhd"
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
