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
    "yR7Dfi69cMJpAo2JvHxVHMrqXUvrYwDv7qaY2zJLDSsEDbYTsh6uJ4YZXiDHJGNjCMiwaGtyiSSGreS2o7sBSof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLxTvgsAt66FZB2iWn7cxL7qtM9ze4EwfWaAXft5wA2PyoFHFjDD1G7cafsykfxKkWmC9MLaGiXeg5oSYoLEcfX",
  "key1": "4FidtYduFwdNYmGvxZeC5gQJk2CK7w5fKWSGjjmwoUnRXaGWyWkcwxgXSAt8psqzGCVMB6yL7jXnNabLPshEgxEq",
  "key2": "CeAKXbUat1u5GHvDirdbx7SpgHjwLKozVaShCbFL6dNF1RQMxaPXGXWXbGwcbAefL5UxZiLfvFHZTAscJUYHqsA",
  "key3": "3D6RDLVDUKvffe1NXRHf4JcwXtH1DhafbMj5yLcM6crktER1W2UonFSF9bxeocbXzgTCkXmArx1xeMxE7s7WWzQ5",
  "key4": "2mqjTWvYNY3vAztHQhKhKQVy63gYcbDVmRFNrafKVh5jACooKBd3acw6kj3BEYSCxe7vE37tXuoJETuJTmv9CsDJ",
  "key5": "3vRTornwXWW31KWZcyXQgLF3YhZkFGrPUJwt6dXGaZA8yFgxwdBMcSrkYJPWn9gNPeGPsSSGmv5y871jfaiRSJHN",
  "key6": "3tj9NfLcGx3q2gcQxu4MctjUURzxVENTqCyFQVvf9YNBbUcPXC6AW1Gz4mCQFpyNdxwVxBE7SMeAGJnkNibSWAk6",
  "key7": "41j5SSVziVignrYTxWsNv8s6nu9NxjfK3ZQwXssKscZaqwqrKPZibFvr78yJ1q9mMLh9WiQqA63QEsDCoLGjaZNf",
  "key8": "eaeruTwmyWZffbtXe94o8iyj45JdMKRnT9VjsnHkcV6XZfKi2ADUmtYRqS21PXzh913qkVjWGUneoqNSJzYtFSw",
  "key9": "4WSgeHx5vSmMJJ3DzA1ont8T5vh4KmkWxkbsSbfEV8tXgneqa1ASnQxDQ5Nchemd5gn15YUQkY3fk1XyiKa8JZjM",
  "key10": "b1nCX5eVxeLZW6ZbaVwm3TAgifxQFqR8jw7PSQr61TtzP5CfoMjVbhNcHaNpVJDxjKwaUNboNQFxfJ4uw7zxUtW",
  "key11": "2RV3z69FmiVv9vNJEFgD7YJfhWahhnbJpHrZBm8YSww4CVmA8n6wsr9dePCvWXMsRpGNtvWRoy8X6ehVtCwausma",
  "key12": "2zoRXt3iDJVhKNowt7wy2KNgygZHk7TFQHYQV1CkYRHdvpTqksK46WJ6eirdz31TJgCxYnkcjt62hwKPM4roVVt6",
  "key13": "4ic1ZGfuwAxzKqYMMJ4zeShU5wYt3f9AzxcUhhZ4uak74WhFPa6K96aeESfF6vehTN39Ns8Eu9je9T6wx91Sy8dj",
  "key14": "2Tkptnd11yq22A3ca4uCaXPySG7SmxLvxqNYLvPo4vWqd49enjLsqBxbmbfNuCwpeuzEBgJpWpGNyVPNpmsRwtX8",
  "key15": "ULRxSTuWQd98ttgEvf7xuPghwuL9qKajoDgDPt3Q9vpPpfGXX5wGgEBPXgEqVNhBEv3hrK9PLjEryg2Xx4Vvi3c",
  "key16": "3KS4PQ8xTFWt5wZ1XnQnAsYiSpc7FD4NxBzsw8XnCVZz2pPGxQyKoAkgh5CoFrCGsE32qexQCLYWT9U1ssTjoGnP",
  "key17": "2hS7qvJzsX5zc2pQRyQEpfJycwqNx9cZZMoDfHmjqfQfxATkZ1wQ8ahXcFrSDN3MALPEnhxF5zw9m4kaHkUng5qN",
  "key18": "5LvxweAMBqf7rfW3tFbwYK4JnPoZMCqStRBqiHbZWy4QoquG9aVFLUECFD3EwPAFkcf8m4SMUXaXLcK5WXqPvVAB",
  "key19": "3erygBF12hDw5miP4Tp1td2jDKhw4bR1kCsowMPMbnvKufztxWUvYfdHYXEGVcdmrfMYvRPJjh6MRRn5DEVgBSki",
  "key20": "3GjpsAHNchLCTft6hfTHZwzeFGPNk3UempvkkvZEJuuSav2r413NXzRczznqRNGf6oSiGNmcWewWcPxrc1NQkrHv",
  "key21": "3s573JnasG2HKo7chDCFfLwQSJAtzYQqmUvoRqPeNXgnrJQpmipGq2hoiSGkK33aixgdhM1xNhjsojp1WYKV15em",
  "key22": "48BweBXERLdyTfJgNHJ1YUWDj3gSXLdXxiczrWcSmaz3WXpG3HjykwimykGSrv8gd7qMajYQ7z5p4zRGeBGRuAjt",
  "key23": "67p7Hm8Wwn9VfuWjods3gCoFPr5sNRdofUopkCYpBjjcinCGATJXXLjUhg2WDzV35Fymgu5rfK26DCXVg65fk2MZ",
  "key24": "5RmwZQzKCUQm8jgiBsaJ6NZwZU6x4T4BEHkqDTM68dWBHauAydMjtxYnRSxwnJaJ4Ubn2AZAkVQUGLBDxi85ZuA9",
  "key25": "26JirBstEbDPCRowcsuzn6iaavqE7kxas6BsRsA2E2TeRjZ37CyQuvwfXVWkSSxynCUjQxWEpezBrQNig9KUaVax",
  "key26": "62ua7y9rW39RPnfHMfmavNwMUXzFN8BSTtvqebCk7wPQZLyJDgwHjnFkMfzp4AP6nAMeUwfAHAUfKBfofx7AsUev",
  "key27": "2RBx7ZcSNtyaf91NRg1BwGwLTRChP5ZR2ArwuAkSnDtXKyyQpFu7d7GmCnpw4v1oqEzMamUoteDmiTiumooyQyKe",
  "key28": "58pu2jp79LUDUmXJQnM3bUEAAKwVASd8kzmsH75Vg5jZh7818MxrLcaf6r2G7F1TbsFaUZzh14ReFNkZjpkE9GbP",
  "key29": "4LpVSdqBnF4VRB7vxdxNY5Gh8vxT3axuQ8tdkiiPQCbeNzpmRQ7DnEy2DDvbmZfeztkUuLzqCRSoH9CjwFnmNyYZ",
  "key30": "5FsgEtNtvcp4FF91WYAtSqUGGeCdUgzHbfqkLkBxMN2qrGcXoVDKbCYamp83ChcCE827hR4MnfEqtwvjvaX8srWd",
  "key31": "3gpo1vv4KgiN4JgnjKDnkNCE7fqCm9sKXG8RPsom26F3TWdktd7aDfpCH3WwnfpYG99VYvFibSLmFYRM2z8j2EaV",
  "key32": "3JUTqaahLeuTh7GN4h1ZK6jGwFuEQFq21EzvuVmUVsLyRDebgNkDQg2myM5i1wVksdk3jCHzHv7RyJfVo7tsEN1B",
  "key33": "2Des28JXGqZvn11J9hqTGz9zpct31gCjgRUoa13pGF54TRwL2Je1jDRD3GWU3sRSNsxA8Amk2FxoPTzpA3hg3Jeb",
  "key34": "3BDebzGhkeiixr3uKdiBn2SeLrWCwu13zTpNfG4dRUZ8T14dzuFZEhnYmW3dQ1V3FgXv1adjqxZXNQgx1DtpLeok",
  "key35": "5nJfyxLzzFUpZCP5h2LM2kwFzbfWwwEQ46woWMwfsuMPtHksEAeBj3iunodXT6Eak43QQRvc8pT9cprhkiQZv9TK",
  "key36": "67VifHAPC2PntVaFJdzYvwXEHsUESRnq2aiZsoLW4dmdtVMLdaiDtQ4KV1feBFgueQDWovDNYd8MmKxZWjARsw4x",
  "key37": "2D1NSSxnk53DVdhhF3H3ki64Kp4X7RtxEkBUPDbhrcUX4Cb68HCpUr9kYdv1Ypt4VvK8GhvbaNzfetstVjgsyaMU",
  "key38": "5QTYpJyd2EApq2bA1SxFg9FGF7qUC73JwXQXoLqaHW5KpbHASmbPNqqJkHbvevsLCuQy3BiPFZtagkQpjvrxAe8j"
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
