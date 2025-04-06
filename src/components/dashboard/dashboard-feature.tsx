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
    "mcqxpWxV8EUrqmzbQR84zxwm3FaBGALksnqnkTWi1ZdUdWcQVfcWRzARH2pijb334pyYwBCouj4tdAXK3CboBgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PMnuXQg8uh5PRj41vA2MTzYZiZTjraftBwEAD55Ka6R6fqCCo7zFXRuZep7uEKXbPhtggcmgRJy7xsfBCBzgVMo",
  "key1": "UbNfCSzWtv3iVNRdE2eeQNJq8Bh1szQQXPASGVG9qXcyGPuLR5n7HbtoqPP9rVxWHv3PV8JenBDRPAJfiWgoDyr",
  "key2": "3CsKvZPHDDUPUhntufJ2LaDSThr7oTGtUR5mGZ9hqxoutP257MhmC3aXtsA6yU1siZesTRqDfETqUoN7i5QohJ8",
  "key3": "4NBhHV5w98KEDC2WSAePMiT4zh9GtWx1juLBBLAccFHPvYnPPyS7gDJbajDP877pW9ocnvLmKZfSUr5APtw99HRg",
  "key4": "57nEH3q6P5rS1HKs7vWGSrkMkxYHFuZkvKuX2sLcn2MwVVkzhicdbvucT5KuBFFbgYk8D4uezV99xsaJ5s4vFY4K",
  "key5": "2xwJTFfJBbWxudexi7csYNH4JYb1d6vezbyot1ompDBo2rGsAbETo8kXWCaQuNVtctDgDkAbqjW3R2EsjwB8ghRz",
  "key6": "hXbnzLmRuQtPafyVx1PiWyFjzngssSv3ax9bLeNGfyfqWnUb1gNRWWwtuMmpA7VvAEkhsG9bx9ETCYsDkuemeQe",
  "key7": "3yXBqeRrggjxBE8ZYWUy56R4mz1XfnJosqk3fMixjssiM7bfxvipnV35JpywwxaynTpFnyMzvaFpQ7VwCZue6Cuj",
  "key8": "5ZmcYrfyKjowsX6XgHkmgAMPLabFqNTqSXbb2pTCJM4DFHUXAaCsMbZix1F9B5BUCtawWVLddZSWjRismRYJgTJb",
  "key9": "2ytTvMxxFeGEbwMFw81Yqbj1wxkjykrjDuHzEjZYViBpxbXbYyj6jJp7tQgD6WmvF8dYeFzh8DRC1725BaRcBz2d",
  "key10": "4mnHHCZHFH1MJSbAfvmCNUc7HDnPD4GA1LA7Emgn6tyFgT24gaZ1yYHMPdxgZSDoqpvJHGzA2EsQXMya5KViXYgy",
  "key11": "4dGe2Yk4YFsLjAzXugPDtu52sUoaEQg3SQL3f7dWAf7ownJRTikUFXkRwF9rFhmLDVzaDeLW4rmkfBjYoVZWCYa6",
  "key12": "5LxZutJr3ZsSQ1RWX91niq72BXkmsABN1FJFTzcw6Jag5MEp9R8ihLepxMeusuBv6Se5Htc2xdfWTFeraArBjtqf",
  "key13": "4XsSSReqFP7Wnqn7rh2cREQcym54Z4UphwrGkb4HBL3tBZXAzsmwptjJLTQ9dXj384X4iL8wYSTPBJmRjeWqGbHZ",
  "key14": "2evC22ECFGcBKMrch2uV8QspWvzJMKKUk6QfU2WY2Mx86rhxDcKzskK9hV1KyT2MDR27bp8ZRs8LU4sDTcjTgfPi",
  "key15": "4PG2xYy4DFWyCNcFZXRpFBF3jpi74uM5r14eupksXzMHTuLkwYu2YfmLkkTisg7uZaMqxokaSwb3Tnq62becHRnz",
  "key16": "2rmN2EqgsBdKamY12dLN9gQqkFoYWJyxMwukH4oUYY5QJ71SecrLt2KUpwRWEg8qUTUsucTo2NkXVtA7hcEiM2zi",
  "key17": "2d5XY34USpjFxKMDCQoy7mF7sHifVo1QazciqerxmB2k4Be82dD9cLz2BPWqAtS2LxUnsRv1h3iHp6wb2EuWay5m",
  "key18": "3aX9W3cn7XB3Uhej2WTnYrs2J7MhDSijxdVcTtXfPXZTK3sBzDd9MHjggHznmjsLrmDtw5cQA6rDifka65bSxFP",
  "key19": "5eWwbys7TC16QY34j6RUPRTCwwMbf6i5gjR6TBkBe6Q6EKci5ZrPnHXwhg87V3Pmf35jBhTPig5rsms6mLk62jsz",
  "key20": "2q6grJcLDi8wDp6PHgDSbk2kXgjpzwfi97hmMvpX6FzrbpWRegbUXXHzAW3CTJCVToD4vcfM56sR4ZgeBJKaMo4N",
  "key21": "5ZxQBkjRQRQViyTWvcybhtjBy1TuXqMsY1SinA4yoZzArHQNCXASPVALQuq7EmDz5x2do2PYZUHnJk49MtZCPWr4",
  "key22": "2FapwbMW9y977fYTB42qVhii86JVAFmPgkSsUpyyxUJHERr88DAFSfyNjRe89ZHdViDPpj5P2VWSC5XaJ7W2vV2w",
  "key23": "Jr2FycU9ZjSrtYNDa251ZESMDqGdWpUE3hZxSK7xt5xCDbdVgnjpHWqH5zJJ6xPo8wFtrLzqhNkw2b1MoLisfCD",
  "key24": "5Wn2rz6z3cN5uZJg63QjMR1JYrRxYpznVYw6jtLR5JvwuYKfdKX1Jtpuiahaacea6MHPb2mbHs1q3fGBb6w7gW36",
  "key25": "5dM5T1CEDYq8xzSk4vHqnqwjCsMPkaKfNiDaaH69uxhLCuxzuzeaizyGA3aADPyWAvu85E6QVaDSFaoS2yeYJ6sx",
  "key26": "5MECs7LyxscPqYp1z97fxExF8ADXche6BAfwEWP4bDN9LJLdiUyqpp6ktMHt5zfWVBGcfmJqJ4ErKmFZ6NuSqkzN",
  "key27": "61P47TH1r5MNzc4KkojCd9oYSoSmg8ue37dSRX6SLUAQPSxcHkWiqdfCdymq7U52kzjBfBFUhqYxvLGVhFrpLxJg",
  "key28": "2t5YsgY31zUfA1yDQ5hVfjqtMpzayk6KGEvW8bvZmhx76UTZWHdvqqc7DvGaMLJ5Mkok7pT6MvP8npXYWtkE58nF",
  "key29": "3fp6hxL6ovoxbcS7v75aeLVT22feGHCW5MHEaXgrfheHHwi1XjxRZXt1SmHuPy2i1eiSSYh2q3G97VUbwvJyxi9D",
  "key30": "3djKr5SngXvQw2FFg6hih3bsnB3HbWUYBwghWrCzj57RNoito2bUoCrYoR6k4UppxCZKmUnE1mHN6u26UypQY2dr",
  "key31": "37H3isMQAsHpEGVfbsyvirfiLDCJmtWwj4ytk2JqL5YNTs3MErXpNkYQ75fDci7gQpAHHjmUZ4ns36WFrg88R8Bw",
  "key32": "5xVfVqqENFHuRhsEfbEGYYR8TA3bnVv1FfcP1H9tdkjyVoBj3rEpjnmNZ7pvwQgivHtyfh4aYZtyUQ8RcvsFqhUR",
  "key33": "UxT44rDhdosWYUPM14B9Bu6FeJ4XZy9wGtjrZUTksgDaR6FhxCAd1M7Rf8fsSU7DPR3r7hdRr8mnHd94GCc2v9t",
  "key34": "4wbVURZDt2RBWFmafqsdEQAVFcwVUeYJ2SrwC1Jmv8gxDe9cDZY44GHUs2EccTLQkNyK3yg7F9DSzZZXEB7UP5H5",
  "key35": "3UJBNpV4HcfYrtxbEtUGUrbLMjdQi59aNFrUFMy6JKo8238V83spQDJmciu4cKR1N2TSWsEd84uSa28vpLpg1Ehw",
  "key36": "AXBV3XE8w7fe5fsk6TSwvcjEkvkkGiVgoWWPGLh793x2sjDTfhMimtUtDD2HKCVs6LWu5z6oJdmosEJEi5qEGny",
  "key37": "6E32C8ErWfj3hhF76GG1eHdib7iCCXAYhcSFeGBNdmvKfrgRCtK5oeS7bptL54gG3REQt2nB8wvmaz5qkVXTFKF",
  "key38": "27GFCL2B9q6WQVfkqNsneCCxCYc4omRwUpi9QmzPiVfTzqMVGjJboj9NaVCoksNGULJAPDbBZgJ2iT3hLLcwJ76J",
  "key39": "61KVkpbcwT35axbqCRwW6t271xM2t698yQfWCbemGW31xEVtDHsKYLGGQWZJ783avrQHao7nxsvX5dh43R44eUmL",
  "key40": "36k1i41Pe9TCbSe8Zok4mGCLXDWAaYbJUvPLLMn8N5JqQiaAPqkN5KNq8RoqY3HDqtVbBtL3wbbGCdwwFyS5VpH4",
  "key41": "2Z39VzwQ4JG7gD5ugg6oFmWQY9DZ4MvgDxC2jHxPZzKiK8fqDRYYpKfKvHE4supUrXMYec4cjfPmKkZF1M2vF8yN",
  "key42": "4cNPtQfS9VFhS4pmo2p1BkYb3YagGjN4N65g23Yw8r2q2QJmpCzAt1WnA3V54MKVWRfvNSXb6vwS4PU5fRLVgupg",
  "key43": "3PPA8VMyqzgDELLmBH9ZCgTJJCJpsFm5M6Vb7aQfNLeGWYD3vk6podTMCi4pENMtKNWytqbHWuCXgy1ACWw573AH",
  "key44": "64Pz1S1cXYENTd45q3T5zFXxziFMhpTXionrj3Cd129yvMrFYShTxCTuuKvdanjaJLhzycuK5FyFHWBS4Vmos1Sd"
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
