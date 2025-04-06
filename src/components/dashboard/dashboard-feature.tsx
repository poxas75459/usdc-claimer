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
    "2GaGTLAioZTAP2x48WbXEbbdmu4hdiVDvg6m1K3citZChF5rk9khCrDTPJrPsVJaB1xKQX1Afj5hW9RVM46HhXEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZN3h4UwdDmWNHJzZjhJ8wcNZpGnQvaY7193owMQtUkZsLkjiwdTLd8c4EvioxRY59NQB84EeJTamu1FctPbLsMU",
  "key1": "2ktS6QjH5G91DhFSfuiNqFLfMGm5SiMKF87hWA1YnSQ2PUwFG3QqBNTtusMoyrbFq9yMjQioSEP4mDcJVEAP8JiK",
  "key2": "5B3fD3n3uXju5f3JzWHk86MUxDqDpSP1m9y6baU8XHEmjc6gMFN7TixUffkhXVBr8iqgkaktBoNgkrgkmZsZKASQ",
  "key3": "mcFdxB9KvevZwfX3sxSPbpFzqzSsqYH5y8uXmHB7yDVowcqNKN5hjAoan396FSbLFmj4qP6ZFxUuyk6BQmikfKJ",
  "key4": "2HGqKjb3aWR84JrYJoAVYrSYqSZ8VuzzBWWVn3xznYhVQox8h5ck8KkypqxtqxdRtU1k8ZYLmimk1btTKVx72weo",
  "key5": "25G3UYbEkrVBtsgpwT9Afgnhztfa561BpGbU48bDPH1ru2nPU1MbLGEaJeqXEg6f7fJnywpVGBJGRgJvfSkDQ92s",
  "key6": "PgHcrbCSNe8wn98L4hcQpDEjRmvPBwpCJZGcgUFtoCK8sHgoPzBpLtKkoBXJZJxuQZpMMUn8mqVuL3vafPpbsBd",
  "key7": "2PBnjjs4SBgsZc83BBJ3Nin1AZ9PFsgKBrxHsS9UG9u9fd76CuiDcCK1CB7GbSsEDxi6MhkzmoayFnsfoi8Kd2Bw",
  "key8": "4wMRAKQVuxD3UKcmCg1x9QFtFYWJJcFdZTR4ct8Ma6XSkXx7Gf2PVyyC411pYdgMAmo6sLXYAaAq8zkCcA79XLWG",
  "key9": "Rv6kn4NhgAX4DFPqtVqXMRqMDjQwZAv1wfsDsSnkK1KRMN2XwveZhLUkwaqR8FPykMJZEhjoiXt4i9oqwBAun66",
  "key10": "2Z5hrRiGP2r1gy56m1yH2T2C3FetMbBup6oE3PZiYrLZPX8UBLWr62CXXNRyFRWUYBqH2hqAdkf2PBXtkwE4kJTq",
  "key11": "2gGExBWjaWD7TfRRmHWUtENEmpvFLAyrNw4H4R1P92iUbK3NwbvgZy2Nawn8GY2VXyPseS12R7h2tuVQ4h9ZE419",
  "key12": "65HSs9NFc5W7fezXRZnPfZ7SRCCv7TK8qGmRkLQi2E5Zfmh9b8eJZKJNyND9Cd6fRYpivV6iUN9YcM3rkJ2cqCsC",
  "key13": "4DBTqNQSHg3vkBWqE5gUn762nax1idcpPQXxjWEG9kXe6EUitJ1zz5gdyAyEXexgpc97z2yLiiq87nMJcPAnWumK",
  "key14": "5UwkmK1qxKhe8ZfGeTgc9tE9yh5rUYK7FuXiSQDJt1Su2joZxdpai1B1SsHssfYAEJCqkWbgcsHsWcCGHy56rnLi",
  "key15": "BvBUFG8fntka9AcRt23o4hbHP3dednSTCAh2CdUb7YYSoN8UV6fDQQbwtX5g5kotXWPjLSVHrrsow2TLKSEm6Z7",
  "key16": "33Vv4FH1mVZmMWM6otqkuzgVQGgqCKV5dEArkMwLtxTMJDuKP8QH3Ey1QwhuPhtswuVbKZkWQ9UkLXdHrpB44Nun",
  "key17": "3FYgtDLvcHVzxfFBjusmrrSNWT5HnZPxsWoAqfUf1MK5cS35nS1WWDyAECjn9xAz5ydtQ5uVwnnaNkSur2RnrEUW",
  "key18": "4uXQgRY6vU8TrXtQX7ZsRZvupccWiap8nxBeqM7wbU6kCJFuLZXYvbrgNr8BUuMPMixGUx2tPNDVZjLuy5jTNeTd",
  "key19": "2itnQhVVJW7LpegWoXP4w5689C1FMWZ2impSSjDT63UUqHdUaWiJj3pzNpDYXSDe9oEBPsCbEEYiWRupXs1SSye5",
  "key20": "566hZYbapFbpLthPJifHGiHb8JMnUnV3nZLdsAcbsfAdzdrYyncKQpx899A3evxwPAPczxFiZCDj6EvRG6r9DH9v",
  "key21": "qUAHgsKHBLA48USDqkPCVg1YsUQsvNLVqqbDcpwPjoYJmBANj1qy36gk9hGZMBduvqg2f7BjYbdP9jsBGASif2z",
  "key22": "5GHofYU9n2Jm5AbBJNNzHTX3nwtpo3zH7TFWNQ81E8djtZJmvgQ5Pj9yXCybuX2pRcyyoTSy3Wr8LMxRXGk9uhRS",
  "key23": "rGL1dtNZQxqKumFuBgGyAgivpA13QCTbEqwDxv2j7qCMtL36vL6FWzLp3We3jDVQS1HUF6s5Cu2sNcuuztNcecg",
  "key24": "5keXoSNjAwx8DHPgJRVFHUJsdhsWSQPwS2YaoSNnjadGUyDidEHfGcpFhZrdmV36aRhVRk3kjXtpvp1YyE1Dkcnz",
  "key25": "2nr95ZeFDaEAETzT4i8UTA5G12CYcAE4AUXGx4ygvxic5sDFgQcXT2gdmMfZQFTtxMh1kg21X41whEfrGfZgyrXW",
  "key26": "DBVioRWPSBnSFbeYrH3JAcFtRafqRQ49dx6AM9eCyRgRKH1LrYXLVnB4ffEVaRqtd6Xb9x6NeGdE24KaomELnKh",
  "key27": "JWfJ9VS3CeBjzcWPnDTUGm3MbWeSXPvGXRzkdofvjr1UfZY7m9L6HY5bdbLJbgPt4d45MFyjDd26Qn5KaAu1aUU",
  "key28": "3AyfDPpob5HtgbnPeafk3eSfLpiHxZedcXKAkuzv9q7vFtn87Y6joWGakD25CsUX7exqZW6E2R7peqiqEFQxVHbY",
  "key29": "2x1jnyBS9QHJ6WVoM6fJJVJjnW6frutvAaq4xRyz4mrrtCx8TnsTo2azLLQQA6NN99P2aVLBdeXSXrpcALQWVr8G",
  "key30": "5kEHDgdKunApec4t6YZSQnE9rTWLba7rCXXk86afNVNEoRZyrPKpqXsNhy2MMJjPkYMucxXEuf4jNavjp5xW6J7",
  "key31": "33qcMPpuhbwuzZfKtn6vBzRxJdbVdHDVBD9bfw6u5Wy6TfmJnavBfi4XhusYFgmzeFkDDRgvyCBJxg9EL7Jvyq9T",
  "key32": "5DKSy53z8jP23ATGMuxqomhXAG58KXGtDFZhLcHb7qw8SBakcPG2LSySKPLmw4P6w3or9FodfhwrPPaLL68u27X1",
  "key33": "21GsyAwhBLE9AZamDvBcVuSCbUTjaXD4ZhwEmhxk2pWXxeRwSt87MMquL8q3p9feFNaoDm3wmet7CfhCRJs2NVpN",
  "key34": "36kh1PmuY7XDXzZJLBxoARrngtycPBErrBYuyhNYBguxeFcigRG84uHzaWYDgsuTPU5z9SZgiJfwNUoW22wMpY4P",
  "key35": "2VCt525nzruPjJMMZkXobTuix4WZNU6sZDrQVZ9kxNdA7yQ9LWtUaPUhejRRF5oKLG2FFGp2TDut6CxPUsMTzz5Y",
  "key36": "3N8VNnE2EpBPyiq6DGYiVeCuT68hWb9GZYcZP8vFLkYBFVshHpNbNWxcAu93obQjvq5KduxF4MhUHREcGJJi5hgt",
  "key37": "5HVXFXeQ5H6UbimaSmRUogYuKhdsrTb7vLQ3wMMkjuFM85sJ71mi3A7HwpYFttqTcJjmisebd5fzS1frdo7sW7pd",
  "key38": "2ZcH2KvQfxvojFsTj6ABVd5Qk69YpXrkrpKGDPGya38t7vURSzJByPmSkgFo1XviBT8T6d3UxoT7HfabSCsV5gU6",
  "key39": "3NGwZtBgX1RJ4UEhQGSMr5yRf2HqbcJrECwT2uyrgqbFABZ5D6TbXacGVkaq3qc78k1RfS7xi9Xeg2bAkyEmDMCb",
  "key40": "5AqYQk6d8EbQn8nZywfNaJ1qqGRNEZhiAsZYeuP5ZxKdF4a6HdepBwLFd5vGEifErsAoLHB9cur5WCpsR3P3mVmX",
  "key41": "51hpKkGBdYGuTBcYVNZNya3d8S1D71gYjys5C2nX5WZfNuCuiX2gk1At2x58XvkHq7YShYTMhHY5pk6qLuWmveJE",
  "key42": "25L8A83kpJ3Xqvv4dzHjM1rzGW4fybeoHiRD5cPB7Rh56gQS5yfkmwDgBJDGY8peYjyzYjXWw269t69XwWYHT2Hw",
  "key43": "2ukVzh7NWk4j77jEPkek7kmVmU6A599Vum9Sx2FjBUAuZ6aEneqmvWbGonnZsMxx8yCUY2Cp4nKF3PsWPec2yG11",
  "key44": "5Z84BdTtRwLX4U4EoZPSMkNvqWDmGFEuDz3H8EQoSfYuNWAibhzKsVVg2HfseHNtG3vfnSXB16jHo9tccUZY2z8j",
  "key45": "4MYHaHJwvni2ZUjBJ457wnsiu48MT8ag6A7Gd6F5tfFMXRKjytskU8gVea6wePmNT1kxhDoKiDdDKQ8m61NV5XUU"
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
