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
    "4P1zGG7dfrXqkx2yefcbHHT34kZVPfPdveBHH3yGzzx36DYMsT4YR1b81MpdyLJ1RRPUEXpJNea2QkQDF2SqA17V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327tVhSnSpmopDfbSFrYyhZnropB1GZLhaL843ddcNbbMk3H9976uiFe6fTwQ765TKnAzUaSUEEtBq5De5wiLX4K",
  "key1": "MbKgNqcD7Z1BdkWPSAEu8me9JcwiSRiGD4QgWUqFKYSu5usWMoqvCHME4zf4Jdp4NvkuEUoJCNYbm8EaiDJpTER",
  "key2": "z3BNcPw88enFMPq13rXcFL2ChvgSv23aPFzwHU2qVJKvUwLk9uLJHfvD1eePeHYDUiYMfXfNV8hK8uwuBJo53HQ",
  "key3": "3th4oxY8rmA7yuiHzWUhJXBTT4nkMWhShixWFQ3YGmSs4BFqRciNbXXSKB2oN7kBV7su2R58djHvP188cux7x86f",
  "key4": "E2xE3hHCCNhsVeRnfGbA32Q34xkvhSjaDBZBWRX2wy9yJ6K112bCi8BjRFhFVJxkfxBQCSpaRqV4o9Pd1yaW72F",
  "key5": "5ZSwPActLz1AsWucJjbqqxTjvn8YhPU4YbcHgPFTypqyVzCBFQY1D2hUqG8H8p2pej7txKidLtjgejexZjbkHSRt",
  "key6": "vaG3z7nFnmdmS1fvSq47sgTM5TC8gJvFS5Xxp8v36R4EnBFpZoChTW4ZhdMXR1NgetyRrp66vYMRXXggQQkdLHV",
  "key7": "5nUSmnEKBfJNzEgYVNdmGLAJErcyxfM5GvAUGZEHoosYejEw3iFpaeLhgthm1FTeKYNDrPtN6RQusHgE4Nf8ceKG",
  "key8": "4XtKRKtx6XB357HH4vEssAD8U6RxyR4Q3qtFNoomedXQEzTX8Qtuc2Vu4DaoNFUtcNhk7ifuQXn9SBoB4bPrKrZe",
  "key9": "ddCKYB4QXG9nFxUpnmBrrAZoBDX8PRkVwnjQkmKB4NvSbw8DoyLLznYGaCkCCBp8syMXng8UthNyFByezv3owW3",
  "key10": "2urgLKn2qp4Q3u6o8ct4foGZCYF1gQjdjuMvUuSJpMDqsTspt1UKkXc7GxxetKXZAKtkzEX2qeU5mCToE6o4WuYv",
  "key11": "2EBqNxF87eCdLFL5TT2gfcHoKTco8SQuJBWaQdJ3qKoQdA8i5pBwzHT1gsuXXsQcRvuaR4E26hjuy58UYQhGa8wM",
  "key12": "4fNrfEf7GgzeuR7nnDALuHmjSXVitRLumHo7paUwmEAyKniLMRy2qNFcfGxbT5LWsuaxpDhDPsnP8P8hCS5rLUmY",
  "key13": "5CXFDHBpbzKkfFie9Tk77rRVToKoGjF3mrSx8srsvNH6ek7dqzkqswkDRZ8qJFCeUfAABL2ZaTgR9i39qr8o6M6K",
  "key14": "2T9TMbpWobUNiKWTcJSrczvMjiSBvH4b4kGZSFJsgDqXPmCL51uYM4b3x2iyC7sS21eiQx178tfMEdSXdJkXXGRG",
  "key15": "5mzPpQYQWj4pVHZcnzh6gK9NxjvuJa4thh9pvGdLpXJk5JMgFak6NDx8i3URYw2rHoGPQWnfux7bu6cYjVYcd7PS",
  "key16": "25vtNDkhWxYgMb39CeUk1UdkaRdPifseT9ENbXkmkaFMnk5AuKre4Fgn9s3VMw5Xw56TaGDTfR3gYe7vNnAB73zU",
  "key17": "4NwM4j222snDfCWD6X3ezuZMKVS5kwZ5tV4k15ikti6L8FW5NMjMNs7dXZLA3Un4djGgDvUX1KegPSmUVKeJFWR7",
  "key18": "TMX4NjtqrjsdXSKTSMV7Nxma6cyX4sBavaJuCrZGJY2ckVJqyWpDj5TrGYHiuspeY6on5GTL27rYGdeK6yg8o7M",
  "key19": "51oBDA2ApKyuySaWGX4aBQc2yCpJRh1tbexx7pr3HzkpqruSjTxB4JMPkHBGYxiJqwiEqEaeUZCrTGZ4upVPtYdC",
  "key20": "2YtWADkkKo8qd4bv3aKvZdEooVugEkuhQgonjYrmcGpj3ZyLxRFmKv9j5EMtKPQ26BwDD3HoPAF8CpLdHQ1Qcjqp",
  "key21": "K66Dfcku3yiPLKMTMepYjt5n4Mv48F9VpVb2dxhRagU9gZYfvXnumHSXNc4oUBAugXcJkNT7yW91WTc6Fedi5XL",
  "key22": "47YdsYXi2ap6gm9wc7VR6YApE6ghWPvgxQZyUP6SrKAngnDM7TLuWeTrtTkMMyFTtpidbNy7wUpRdPQ23KvYyMJs",
  "key23": "5Rwt2ScqwRxKMfSgkN6m7rC9PB4a1Np7RfnkzFr3BAVCaRUnoEXPuiWUHgq8Et3ZTVumWB3Nr2oz4CCmLVWYRBR6",
  "key24": "2m48qARwVLmgJkY9jrEGwhJ2aStTuHawqM1z4RiEDHNZQZuckQRs8r3qLJZVEDdm5DfaEDyzkZRi2kXKLF8dHuaB",
  "key25": "2FmKvuZkD2f7kcoAGeGqGMAyxNuogPYZ3HMVJSaYfzaQwz7gTjvN5LsCVt3MQhX4eSX27XSukTsg1BsHx33KYE7N",
  "key26": "2mmCJKHx4RGF8CrbVR7St9rxfvSp7zfD5KbSL3NpsgcTzYksjhuJdRzn57FZe1VHECjP9rDxU6UxavkdNac9BMUk",
  "key27": "2x6smVeVqUnq3SNMP2B2u5Z5W8sM8ChiXANXzQgv2WZVw5NHnqwJ2PRpHunQuV4C75fw81SuZ4uqSyRqwYsLaQLD",
  "key28": "3Cs7BLMxUhJ5SS8aeGrkKZz3FdM1MzCM1MttS6LDu9xjgKBpDxQmNqTJWkxYQSfxqZUUDPHmUgx4jbzjmaFEiUnY",
  "key29": "3wtW271Gfy6BDMUQRDu7CwtXKjGv6tRa7jVmb5N8zggcSMVXvyoKDfMyoZRCGczYvxtY3Ba3emRYtVHz4xc9A4c",
  "key30": "5cCzWwjUBtNAwxjWS9VvK88FzwkLXDj8tdviSo4DzvQH6huRHTQvadBASaemWvvWrcFvKR3JHMb1mWKkGrhpWCZG",
  "key31": "5RoQ95a5Sx4F5SxGR18QtRErk8tEJfiUBdpo57nsNTU5FUGYCZGcvCYE8w7BM4WwiipZVcSevAdsswHABAgZLmW5",
  "key32": "sKA1o7u6zFUY6LrMkhPKcbZXHqXUtPgdkZE41BUFzXNvH9y8tbc9A3QBFxRk95gXMEcZuq5fbguw6Nq4snhg49P"
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
