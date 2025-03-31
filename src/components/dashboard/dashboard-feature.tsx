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
    "Q3shZuQdYRNz3sKrvpWnuTkdWtaMJSGWQ9kZMy5bgLffKHrMVLYiv9Mf8WJLkiEXKau2BuiNyxTNfLjjTfY6gRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aaXkW27F6P5xU4vwzogUHH2ymvEQARW8DPkhpv5yRGJAJLGN7mmVX2XGmCbngV7gWaXCkVowjazUBMy3bPY24Lz",
  "key1": "2MheT4KFcp5AADTmXZctjjJYaKQmSEy86N5o7p837pe1thnNrStfwVNr1jmL5w43Zr8Pbb9FiV1QV1QKvXCvKhpQ",
  "key2": "53gtWxZaffraskd7n6i8GXSNfz5jPLLzXD4GoKgHZS2z91wVyWXn6jAQaxykfMq9gyrypwPnEGiSUM6rryKJrCQV",
  "key3": "ifBEyaR4ng5dAPn9dbhqs848jtmcmGBaqG5QnXMnkjdZ1bDKhm7gpKHQL5UH31nJQ3SiqjEYTS1MUymihWf9rVi",
  "key4": "3DVEeYKBSG3hAZuzmdK7RebMXzXNdr3AsmBStmNLTuKHhbTVmNCwHrVdZv9UjWxNKPq53WNJ6nvhrhGJRLB3k6pv",
  "key5": "64TjNnHuKZ2vSbVprxfN68azySQj86afyfwEVGAxMVc8rwCYbv4933A9E5ZbTaSgy8jR5jLMBHhir9sWcNs7w8t8",
  "key6": "5JQmqRy4Bvb4UVX3kpgz1MWnv2BHmP6VGVUosS3SCByWoJfq3Ux4se4n4NTXPUM9CUyEFjbj3hF4eueiQqoGGgqj",
  "key7": "5NJvx6iUHfLPYpBvA4R4yRk6qiCNfKn9mFkeU97Gm7Gjq7aR6wfnokkUBptG9FeFh8hNWtMfxia3CuVmwA8JMA9i",
  "key8": "34QvjXJUZQiYpg1jwbwxJmcKv2aEruYQBgZj5QxsCqWb3n39eWkeR4ZgX22tj96mRqa9cjToT6WqCuMTHpkbgwAj",
  "key9": "2L1KWPC6KaenodSWA8ei4waKuQxUXAN97UnAAtKhUnqFqL6p9iBSsvVixJ9BiQCGG3g1ZsioKYZDByNgMcHTeKA2",
  "key10": "3L8rPasgrVuFBWqXQPpW6CXgdWZaqjFS287R1Tnaex9oSDLKhg3iuwfn3L87NtRjz5ugNHo84csxwMDuKrPWhKox",
  "key11": "2jq6oAQVxTExS5h3yHHHhcfGtjdzzDsVKLCN9T1v3MB6aYM6ScgoaDvgHRmULmt3hYj5EMKGjgNXPATgMAvvLwBj",
  "key12": "46pLGwUPiosJXz2mzfVBD3rZWZi8Qgusb3YXkXNm5SKikh4nuEvZdmQMT7ubAVH12RKeAQjCt7udRPe9nS8izJVi",
  "key13": "4W5BbA2sEA6uYUy16nngxK9at65fmp4MhMcvLbqCz3VA6hbhsXdCiNcZ2CCnkZyjEqe7EUaDWbqawpxRtfvHzbjq",
  "key14": "32fwUdMj1Vxk68LCcRXiv8PZbgqUUhQdj5HHpragbuunR73U4TT4UnDPwyy3bqkA1hsu8FSE6LStswp4BhdWZNQ4",
  "key15": "2DzpgLLmdLfWmiNJcxggdkV8YPeTrFjBLpGhdpEE15Tje8wS65pd6zr21x1UVF3HmVa9HHX5dRkvYwWiEHTn3jB1",
  "key16": "5UNG4pww7tCzYBBZURrRNSafxYZG6B4sxYnhEe77W3h1Ec3knnQaB5QZea1T7zaDF9jnCMdNtvjM4fL2Pg7RzWH1",
  "key17": "44YvgvgyGHgXHcvfDG1Kje3FFJBSmb6Rv4FGTP1WpYjF2UhzcGNw9sRx6EsaMhuLsLHVb7FVuEgxaA62PoyUry7y",
  "key18": "nQQiNSbNhNecGsHMfP3ThwraoFLK8hXMg8A8Kx17iFEJKyBy2Ei1QDSXErMmoAo8WqFTUsGN32R64bJyPNrGF87",
  "key19": "3hhMmWhspseTABRkxnjMb5czi3qMsU56h72K7dRkRRv2qeLsur8zPg6S1o5UoyywiBhFcWQ7YVzSSBQ4KvxjXgYR",
  "key20": "3GEmvHoBnjFpSZSbGaLAqLM3P8JcUGshHpTswVLN3Qk2rGyRCUr2JUDtTPUXLhfRapqwKYQspfWRxCgXgq5dwrq",
  "key21": "MM968iLvYS1AWW5ZQJcvK7QX1VWAokKzSVxrDxh6Q7KxZzecmGXXDr8m7Gwm5QKyGZUNAK4kwuJ1K1qtsm8w11P",
  "key22": "2wocS5w5ALBbGfbv1TAfjcWCfgp5EGG4iAsM5tHUpBfVSZ76in8dAne5KEcoamvuxH3GptF8axmmYtnd5wcXwKDb",
  "key23": "36jgZvwN2wv8pxxBRtRqfzr1dcbR3nLsxbxcPxoEiE2ejbsp2tm1fxynr2Ry4Xx5K2RsyxwZeSgaaWZAotqbTiXL",
  "key24": "4EJtmJKa5MZgwHHsL7iTXNHf1pBER4Hzxn9bFe3usJ2jr6zeBSzFBHdsL5FeW63LVsC9X1DqqPzVcAxf3xvuZPnc",
  "key25": "5ZH9ojLiX93ibcG5pRL5NfSVnEiE1Ya6iyTy8NkuuG2ogmwcxNH986XknFdF7dVcbBh8d3mSf8qF7WFjAyH133C5",
  "key26": "RE4G84TMcL77brRqbMD6py4mheRrz6iER2GG6Cp7PCMNhxaRX5eJwmzUg9ASLXHAzMb6YL3hPqzzyT7E4uReBPS",
  "key27": "3VuTWSQRwgMipAY1ZYTiASAhYVDBw8pJxKmZ965XsUB7fVFBWFQqyoZp1zq3GKN1Mxjbiaz7n2kJTwyzLbkzewZ3",
  "key28": "49RexY9vWDirsyVFrD3vrpzbCd5LMa57hcUeVH5MApGJTcc3SH7CDv4uSyqr52ZZvwM3T59bWqdJtpZDA9aCAoB9",
  "key29": "5umPEAjH4pThK9FgwcYG174UqBWkwB6AawY7BrebHaEWLfBgJnx3L3wFuuF6jkirTu3D7BNtR56amUqxVLo3hPkC",
  "key30": "4B6kJRQKFPpgwANd4YVSH6zSpumbu2mjm4UK3KdKBD7rHBpU8qfhsK4syZk8DRZ47VT9u3S6TqjMTSn6omvyhHao",
  "key31": "3H74Wn7Jv7HALaUf6KKt6riowguagKfYNmBs8FVSeYKjemCo47af8KCegBksitdvBvwmCzBGEKEi4FoVzVGXK4rj",
  "key32": "5emPukujP7jhZL1bjh5Y3Wv7QeFNwZKrZkPFQNCJZMi5B1YHLz6w4Tdt6LaFcd4FP6C69M6NXhCGsJNNcfSG82fd",
  "key33": "4gUzyqubTnGLQGKNqxZ8TePnhaJk98W7XV7cyK5kWPNNjv2TVGWdASGrDvUTG84dzNMYia57KFnQ36L7Yf1f75yE",
  "key34": "4STHCkoZUfL9SvipfDyrYf9HVg9C2k7r6jz7uraz1iGw53KN7fARcuoSLAwdkjZTF7GtmTfGc82b8BYeTqnVhhBM",
  "key35": "4mGB5LzsKvzizbyYVSiNZ33X5psZq458qka1BSc2K5R3QG7sfd69h7c39syJe73HTZEkKmst9RFBiuC497FnDWPJ",
  "key36": "41yRTbqsVdsiDphQmuqTUp1yF5qAW3s76SeXu75yVtdBaST7dfg4Yu1EJZuLktK4W5jH1sPwsMHbZHGNPj6QYvzx",
  "key37": "4Kx7QDF2bkDNqKWWxxKrnpfnkczLV6KbQrx9YZxedHFaNPydwjzLDnGsn7nKSgK6k7fXmZKPkNAttaoQpUjUovMM",
  "key38": "53Zv87fdhaFyv5ynPZadqHo8hTe4FvqaNoS9K2o7y1DnanvF4uJP4eMKCT6JcRDQmnzr1ohuTjXNPStyUzwx16f",
  "key39": "4DdaPtYAGMbvzUr8q8yhTCdd7urBiE52W1s2xd6Fem9uj6sLR4n868V4W4N1G23DWmsGKJbvc5vauHWwuMVNeKgF",
  "key40": "2SCx55D4BvnumZ9ELFQVUKGmaGofToZKftqVsfE6wcbQ2JQo4UKav5e1AtgoS62V54s7E2n7WR56DCLjFX9nkV9w",
  "key41": "63UUSpagLxZKnkjoU68aH1jH5i2N5TYZ6Cf8YrLdKpDGuyKuEHPq4uY8jA9kmS2Cc6mD4Fesav7SUBedUHiBUPp9",
  "key42": "2kvidN8BeQ85YMLWaQLJQoGyi88Jtxxr8M7SW2tpQXHr3uZT7QvFg6bXvhqeDihBjTEWNBANRAgyK8cPqSW7pB8e"
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
