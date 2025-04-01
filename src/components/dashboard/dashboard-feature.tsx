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
    "26AyBb8DubTmQ9Nb7EMGRUNCAoYQft6ay9jwzpmXq7NXAiGzmdMndqYdLfVpGBgGeeoWHfQDaBu3VVCoYrKMDGAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sa76rCnvMernDZB5YQjxsryfG1BDBgewPYC1YZdco3BLgvKQDarF9iFPYXMBr4F1FWp2woFszWPk4bsxRBaKnxQ",
  "key1": "4MGAxCH2iQHSE953ErRxtTPkPkftB9P39tyrPmvqsorKA4Gzur7tJCV7vF65XzN3RgHCeyjmrZQAxP9jj4ssNkXk",
  "key2": "5DmzaP4pnvDWPDvzkhcmd77f9Bydgos87gEP9ECae4NGuHwe7LGQVRtUWPJGAVmBFCksRDRhvTzDvLfTZ2BYDrC7",
  "key3": "59cSgQjEBx4PxrucJNf35jqzPZBiFCeV9x2mB63rjLW4hGnidbyk7NmFBKPtGzumGiNbBubgDLU4CsfDgVyRT9wB",
  "key4": "2T7Lh81gVqsexbwTjVcHFNQkgzKay3WLoECRdZuHYtGoWuDNCYY6G2DgmXLqGWvfaouQNgL5fYToC6ZXTKuAyGm2",
  "key5": "3TW2JdiikJEtGAXs5DMecNGyh3hKx9EUyMK1wyevHo6EjfioKT7gv2FPPcDyx4HNsGeTZ3gTegHqaGsbuR2ru9ys",
  "key6": "2Y7yPQoviqRUexbGiVCnsXYKUNe37FMutqPHMSrtxYVeQ3EFyRGd5XS8VnDkR9xp1RP5SebuaQDUsV1BHHmr4G2K",
  "key7": "4wgv7HQLR3XywvMCWZWoiVoo7yhMKQJSSkeNaiKYAWJSdzDjfkHoJmKsrveRszh3NC3Yi5nNznauX2ESzny7Ubfu",
  "key8": "3nBkMmQPVYzWJRso9UBni1sRGpAy87d5JzgE7FMv5c9mRkKXW45irYyQ52TCdkF1Z95CQ7TiYiu7XdbMzF6wTJAh",
  "key9": "3puUpeN9qo8KNV2jsREZxfQgA2imT4Pzt1jKdfEW7nQjVNr2aTjKTUppfxPNRVvjcuGfpNV2Zwq9rX66CPHGBHH6",
  "key10": "iXsE1hayk117GLZNZCs29Txj5GuVHE64Yi7GBWWJA7ZN4r4VL17VxKE6HkizNALmxN4JpKAvYet4JLcFzJXiZa7",
  "key11": "QXNTxiCHKQtn3GpC5V7whmxagiLPDb9aQ7r6667JLL3Wi3jQLu1uzA57ahspJZmv67HzYX7FdnEUbvaLq8Ti86s",
  "key12": "2ztu7rqs4VTHDgY854Lwpc7Gz8THr4xk6BUX1Bvt7a6opMZxQwDR1HAF1iXrNLHzoW6aWeFDuWhYr2w76ZZUpeyE",
  "key13": "4SrQZMzaVmerqZBX9EBNxqthPDmZGEvEtPy9nPWzQob78KcvKCwz54qUz2ei5TPrrauPpqmW6X9EmW5EuGFhqdti",
  "key14": "3zXRZo1Aq19BCv22hQMEmE2SLwE4nmeoF7HJxfpobgpxg2BvvgPbGaG4UxsVjRyKsUHxPuJzb3PVTLUob6ADTUCt",
  "key15": "3yYR8MYnb1CKkBnV86XqNcEoMpYmqmVLRrxmivkKKYsf6jsYkrCRdWMe5qLKBK5eAMhCsJXuuKhuYqUA45F7gPu9",
  "key16": "2SPubbwd1QweG91L9XpnRKLuyNv5a3VAzsBzEgL5VV5rFcL9Ag6433qubWQQkXsyh6MhYMX6SntsTMLmoyXebsF5",
  "key17": "2v6aLdf8qev65vPbFSyobMFLGSykUFAMWYGDLSikzjjkELmRumZK6GKkhAtwtoigoBbBwmiFbjhFHDDegTrRc7kZ",
  "key18": "2QaaeexenSN6GFB7CRV6zuYjcWoDJ2R2LceaoVwYW8SupqmK65kDQZ7z7XAX5hzHcbXEAESVRUJcYgvnxvdKkSTR",
  "key19": "NPy4wmzwVNkjeofrarWZodR1bvjVxyaVjFtY5DkHdMvTrL8AFZK5Kh2ppaFkSKmfoNnC8SsEb82Eg7ep8eyLHUz",
  "key20": "3hyCA1d3C63V1SyQFQJjaECT62wzVrMQhmcqQydcfNFeyj8SaytByxZ8vK8y2rcsudBjhoThFutHpesjCSRDG7oa",
  "key21": "2EzdFCuNidWXGSxaRLVsCbGqkajmop3hy7w7xThRVCG5tU6VtFXBdJ3Ca7bcFp3d1GftqTBkN5pEbFNyKnCdnL9Z",
  "key22": "2aigsewW399h5cFcvmvb3a56FBxQraTc5EX4aGtQt8pL4ENMfnPCvKyEbjdyShrbcb7iXELNZN98vRUmQmMuVm9C",
  "key23": "2B7VG9BBbXTiaJ126uF2849sotNHHPYxRFm4VgaNUBNQpyJNWnd3mymfh9Ctm4f7QnD8ezTty7xae5LLKupFL373",
  "key24": "2Cfi2MbJUrWR7fmHznHz1BHXRQGgdwRgU9zfFJGL1Hm4fuHj9bmZpvL38wiMvJyrdY72sRs5V6w9c7XCU9Ji4jYJ",
  "key25": "2TQGqsStkdZys1mqeb9G5jL7UyNYR6PDBh3x2sUPqzQtsgYP3qVPuYgg8JAoX3ajrgrZsyXQZDTHBJf5Qp16hLjQ",
  "key26": "3FJinjSJJwQGEUidjvaP4UX7ueaQmc6sUfXQv9JiFfpHzUjUq4q1fCVpdThnzrebzDd5Ty4YcwRN1Lr8jphgakYD",
  "key27": "2om4w5Qn1zfjmWvttLf8dDg75mBj6eo4NFtHNdoBRUCZrtDUNwvGxfrnQHzyMAtGizphVBpCF6mbp5w8CWisXYxa",
  "key28": "4TmVb248CzzTKLudZCzTiXF6mREKS2AWjJVEMfvxcwkC3PX353hzxpgrzTYnnTVaeJuZCZRkzHhsA43CjtBT72Fq",
  "key29": "5CRajFLMqvaMf9yA9hP52SdTkcQQnCQk8fFGR5C1Xos4QhiowtAyGTxHfCphLU7y1g358YY3Z487tsMHHt3ou5pQ",
  "key30": "aDJKMk9nLMKKNDrpAX3v78bsDm4yryRt8jVX7ZJexJ2dfjfa6vLhsw3VFLbggJo9jBtPvPfvnzAWznMSQGLeo9y",
  "key31": "3fz7gh2D2WTntMx2hUDMcDmZxhY6mEbfL6bj5TqFh2AXt4dSNYAteJ9KvWy1WkiAkaQfj3xKQtqixFvKRj3iUNQk",
  "key32": "kgSVAt2FEvbA4bNWuDv9rC39CXvDLVN9Jek7F3oUS2c3GVgmie6fN422NDHrnNCibvqnCAiDheetuia3D1JdE2J",
  "key33": "qmWmLw1kH1Tk3BgHdZULJG5tfPDX3JiEAnZjeLctvyZmjXq1rjBXypA55vogrVhSBEDwRaXAEizc5qgGijZPEnx",
  "key34": "EdmqbgQb6BtHGDQQQEuoxm5iK8PcodbNSmKRKy5rwmuHQLrdPfcLceuhvKss5yDDYkVKrbU4UvQnponiu6dUTcc",
  "key35": "44VJ4X1DFudVH35zm3S7tTn9aWTsuLnpjbDrscGeXYF53JMicPBw6dkU5dVYB9ZX4cptSRhzUc8q7Smn2m7VbVbP",
  "key36": "4uWdBqFM94eB2KbEicTt8nSKVBehbPD79MVX83xKD6a8oLPNm5x8koh9Tm9cF68JnafbyP1jdeBXWjiJkou6BxFm",
  "key37": "2iCwbc2tKBawJaaKw2WvRgN7tfq74S2Zz7j8qpyZdLMhwRKb19YhKwQEmpF7c1FTnXg6yDMemoEgzmtyxNED4p9b",
  "key38": "WHgb3PRpC3UoJBDktQpm1VXCGjo1Kt9XwF5e1BrYK6wmD2TowAruT3HrXZ14vXp1eJ31djJ6WfhAJZznwM9mxRS",
  "key39": "HPkUqe6wJgnep3efwtKrzCHfS8FBS2ixaUyiWhpwsXTv1W5Vv2QLGWGL1LRSA1qdy5qcohsNunDivvenUkr25Ma",
  "key40": "66uxkPh66hhoqhQGs5cMCHF6DYUw2TGDC5H4ttD4D21tqeDgM82P81YqbEsjDhTdHT3qSBHNQVGwAYsVeekv5M45",
  "key41": "3GPef1cUgNN6kSCJ8R4EBypzsLo4cXsKuNYfVZUPqywWHyDVwdbUjKZVFZEVJhN8MUttKEqY6vz9dMKfVDxq6WPk",
  "key42": "65M7Nn73spaQywVEzwsbytBPTgCoY9Wqu14M4N7XptxaCwPFqR2rAiEEBCVqNSHAZW7hpgWaRdeEMPWbuJqYrg85",
  "key43": "TbJ5zkCLpA5wYVMAzq9vLCwmw47es5BhNT1S9UbYVmjoZMFRPdewJTisqVSQ84zoV1y2axovozwLtZN1uDPCocN",
  "key44": "31agBPLRJ2CWfGvnF8hhyAwxoYU8NBSk7kEEy6D1t27qA6y2y5FZDASYkutjrfTJv5iHxRrtcm57KtYWcb16rc2C",
  "key45": "5h51sdwH8CYaBAFjhDghZVMfQbZkzwY18T2wtx4jPFfHz9wTCRbqU2PYtpU1yXk8xTSnzpexuuqrFhTb998mUS8i",
  "key46": "4MfTzSnUZ91so1dkaCfzfhgdfRrowzF8W2nGeVrvSzr6AZ9kJDVQoTcM5peAtaCG7jkEc1WbEAYGJ6iuprKeUeTN"
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
