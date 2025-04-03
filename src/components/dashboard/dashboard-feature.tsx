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
    "5qYCNRd9sgVHC2R5Vfbsa6KZoHJAc22GVjG1qHg1KmRWUb1GsCS5tCZawZ8Fd4pgMpCUbmvorRjxVKocD7EZYAXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YSoovFLMPciVTbUXrMeX56b15LUigorsWmg78HRvZXCeA7zE8jtJahAS4ig8bAeQiYUFWB4yi19uJRSR2xrrc4E",
  "key1": "2KVWhdEcyat6kDcc5U5KMRGxLXNZXuBBMam7S5ggPRfBzvwwpii5h1aWBSA4mMERETpw7ibHcb3ttc6zZAkZREfY",
  "key2": "3tJX2zMMtXdcsV5icxcR2G2jQX1gGM9RAKBJS8fWxV4bJrXwMRT4stgpzjRGRK7dRXbfJXzFikiQmUVXNVRB4o7f",
  "key3": "34C4Escap779g9LS9WhhUFWTXK8PTFs7bok5UvUb4EygTmnJtDaPBxyvJi3ur32XWqQfhQt1g1jLgWnE4cWAUyyY",
  "key4": "4HfAsQqfAVU1gV7gf7MhUkRzn8Q3mJh8K2Rst8NP5c6Ce6hLNgNsFtP9uuPePSPRS13ggDGjMJ4yimdqMM7eULdu",
  "key5": "5civsPJmWauixn6ivZbR46TvbxsXsHYKQ5KFzUyQ9yK5W15dPqMBb8w6bsLso6sb4meEmVuWbJDbeGSnAdiutyBt",
  "key6": "3oKDm3v4RpSDbw1dfC3Ft8roMveuEajwocDnvBEBFeZA39gKAA7CY81hhsvcYKZn4MijjKWXh4JywPKfrDmx7nyA",
  "key7": "5mjC8ux8vFUqafwrwCgzNTc6S54GUX42Uow9wq7pZg6Du9idnUVk35fmooQGUc29sMcU3ffnRTkqQCSMzY85o8KP",
  "key8": "2owFhQu2VcFJ52rKRbFFWsUbS4e3Ygs89w6Z6H7DUZYBXd66fXaA8L2NzhRD8hHDRJ26TRvwCqPQT7MWGA1mzDj6",
  "key9": "4JXAKi28j1LZkWtBS22L8ABkbkRDrEQkbTG9CrARC3XrACnDYCFxkJc9X74ApMRhE8cjXQ8VMM9i98z3a1QZ8sfT",
  "key10": "5vBHFuWD6eywdJXNVjnsjQDRspZK9yhKnmXh2tDjbAnj4bU6ZonUHiX9sa18ZJyuukBEWHEQEwZzQmbEHzpfnGWj",
  "key11": "3g7uMsxGusVSfxXAiuhRyhqxZjVyShYXZzvpyUCFTvYWKuXomJtee4uL1itYPiSYmUumFNxKvJ3hst1tK4zCRn4h",
  "key12": "4tmSA1dgG6DnGmQWhNshJJjk39DQ1BSo2otaJQ1vGXFK2rWpfTAiajfWoJTE5qY1KkFMrsQrxjzcrVr3oQxrBkY5",
  "key13": "3SaspGqK8gpeuqf2FQZThWj9GrcBnN3Ng1s3hiCdhqHAg23FPit3L1R6UohSPvqYgLThUuAkEGV1xmgzcui1ebFk",
  "key14": "v8HYzap6cLpMnum6Wj75pBTwF8RjBo7RfeVwX5KUtwPBdL1srfEfzBuD54aREZaugaTYccZEVvSAc9uDWtMoUnh",
  "key15": "45hNqj8tdokMf4zVaUCqk8QYLfXzpEiQChDfCZkbA5rhFFrLB79L8dTV3RmmKGSL9FLJucYHutSQstDm5cx6hnkZ",
  "key16": "EcKjuHr5uYEwMbujYrBKmRm56rDutFh1Px5cDWNTwnufFnChJnVh1rfYa7ixNgxziK2V2FBUZBhZABBSSXcDViG",
  "key17": "FYaG7vN2iojN6GQpDjS19JPohejvfQTBzZxeqWHoCucVvaido3pHtzrp9MykjEVAKKQWqwRYp2ZzMTewEaKskvR",
  "key18": "41q6RbQ6ZLfn52zUTnEjXQFTkD2Jw4ApABnCrgSVBtXnrsBuYdS64r67Gh3BbcD8Gzs2U1E6L7Wzdqemiir2bj3t",
  "key19": "EGGLWWdAjScPfEgTQM1pGq4GBsvNxyRqVmfZSo8taHHy3UwzzAFHzS8uVYiLnQShgwh6NSv2fajpj1v98fuTAxp",
  "key20": "2AcudxZtShgdxaJHLyyb3ecUQYEmvGi13UTMc9RvKti4DTtksVj5W8pwY4SqMmoXhJacSnpRwxaZtQ1pGKFyAjqG",
  "key21": "jefPdDPHBeTDXwd1uQdP8bZFVx2AafPxdrjVYiBSDRReWeey32Vsbfo8FweygaQntVAhVYMxpNQT33VS6uTPcqh",
  "key22": "UgU7eCC7qh9qjbdtQfcX4e2LkoAEh75R2tEsGqVDwyUeBygDeJckcBWLZRSADDQMjo1iQQdAJTNK2T9Lq9gLtD2",
  "key23": "3exLLcLZ1g1nVypnM8GDVJVcrsboGWpJAT1aGQgMnFRhXD92Y1kELHSj7uiJ7JfXb4W5SST5dwd5ojH3GpKQGpQc",
  "key24": "5NnAHqV2Mb3xgu8CYKdGrAuci4y7NcZKnGx45S5seuj7uHgFi3eVf2vW91ZfVNtnQgP9a9UUVcZXa1XHNo5oJqoX",
  "key25": "Fo4YAsjony4SkWUa73d68nRNfmjke3nomLpeRzLunwhgV1pNwayAUwog8fjYg2jf7tB3C9qQtvHYP9dJT63mFTM",
  "key26": "63YgijUfcuQNFz8UCy9SMR5fAErHKrthcwBKnvvsoKaxA6TY72ATyZpZZ7SusfGxqs8bo1vZ6LEzedW5NdqZbmX7",
  "key27": "2a2bh9oNoigM7s9GmANiri869wyCizQRTiG5dEyGth87kbjYiTBHuGw8yyMnnS4mtGcsTd9nrR8FitfjXo47B3Nd",
  "key28": "3QfQ2918M6PTf1QtLGThDdRVc9z924NXB5ohYGaY6nAobXboNnbxdNThKB7XDUdTZEWfjzGShM1BirmFya1cGyZG",
  "key29": "5vQYEi2RE2xSyZhyyH2THCgcrDjmDB75ivec1SvGuJGj4eXCZEzfwQAWGArhibFRomXm6t2BW4SxTWmGyoQcQ1iE",
  "key30": "o7Z2qfi5q3i2shEQnUNNjLXXW9pesmKhPUiiUcN87F8c78azvVtWkJKFRbrKkgRX24esQGdwNcyKTJhMkjJe3qD",
  "key31": "fv5M6EXM97CgDP2CN5aT7Motyzi9VLPAmwREmi5eCuJSquhtT6L8c8Ufax9SD3VStz8nE7VVg754S9oSd6t7wHE",
  "key32": "DoHGSfVPVZSKML97tFbEV3LkCWhqWgCyW6Ukq5SKzmA2v6SrL6KcQYwPVkF3JzNSjsKhThnCq7XheQpZbysLq2E",
  "key33": "3Hj36AgnxbT8AbdhxzL1gFwqGiyTBZgmnZvJtHajeBtthiYUhYqap3Eq5NpXEjSrDk7h1tisf8bkhko3LAB1RZcB",
  "key34": "4iwvTPsQiMXa6YvTAGwXsupzXMuZdCGuPikNDL8vUfNB4FVH7PnUJeVaFu3vv9SZStJPUn3vkpnRqmST2CpH9Gzq",
  "key35": "3JQA4n9VX4vx3VkPCxeDrTpbV34RtsT5DPdyGrs4mE2HJs8DjgEoPzTruDUjKSbCR4bdxY3pMd2T3x1QAscC4Aiq"
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
