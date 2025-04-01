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
    "45JgpfD84Wz4bZgYkqRyQsvvty9SLwVVWdw4b6KNVpMDVtR6ZuyzgEDvNGRn6rcPDaeKP85tZchJW6dtNTFHqsJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxQowq5yFKvGrsqvghahUoGbpShTtT7SXUxuWUDBY6Egfn3nnwHWr6gG5pPr4eDjwrwca1X4ECAabPeuCoUBd3f",
  "key1": "5Bib1Gid1Ao221oGtjnCvky9hHJKyWDP6vfpqPEg81TBtMM9oD7xaxjU3Xe6np66kLaa5kAEvZ6mkigakiYd5EqD",
  "key2": "31kcPsxbjdtPxV2BLjopt5K4VZ4g4DhsFbkVq9ZLfQJs2jrY7qC8ViuUFyxdbQA9F1GgT4hBVdHZbbWnenUv5yne",
  "key3": "4n8V4FEiWrDksWWLmrEAF9E39AwUuyvGxXhZE651L1kS8jnQWabReNpF3AiftYUqPfFibrLgbrHKpHkH72ttBgJ8",
  "key4": "4Up7QUstdpb2bYDNf4Uih6TCQRLgfQyZa6jGrya1iwPgtBHKyZwHr2ZNph1x65Pw2MW15s6b3gdXxscqkrWDuYU3",
  "key5": "23scpnvFYNetXvdTtRm5SrRC2ew8jtrmGcdWvTAATgXyAmbHea7K9S12PiNG61aNS5v3WW2PYXYyxKqgX7qKRBFV",
  "key6": "3W3H5JVqRXrvtF7rMSNxk53fXFwFYzPZguirAmF48ZcFxPeVbSC4LCoe6B9jvm1QF2uBLPRSVxL73Ctvk9dboRRA",
  "key7": "4r4mKuMGygXtr3oGsWAeRvyJrBdwaE5mrUEhrwKznBY8c2XFqsgPYXjnv1BSN9uxfFFHyHUo5vxz4YmWDe4yricD",
  "key8": "4MnXWEvjKf7MusHpz1vnjYBEeboczBVSwSv99TVhFmiz4jjGH5v8ii3zGXdi9M6JkeWjfXQc39TyKh9Cbr1V1tMj",
  "key9": "5trbh8GX2oruqXiDeKp6qfMPch29Z72b1cE1KrzVHc4mCgUaSeNy4W7WMYdh4a2jJH161cqqM4cH8oPAhEnjRRnp",
  "key10": "56NpZKvZao3zTqq8xz72dMBoarDgmNCvusGyZhGbhTvZ38jNuUK3yX5nuXCGG2UHBmBFWv8SBXK5qyEPPBQoLAF7",
  "key11": "5RK4M9jWGph7poFZLcBaymnpaxF916si14fBnKH41rDD2wHg2ZBaE4gpGMv5cECsLAmL6fSr8b43dH2QTNTD55Ch",
  "key12": "4N85yQ1mExUvUkEMDH3EqcLhGJqzzdxxZN7Rwv4Ag1ijx5Mt9BpNijysrL97v2r5LgghfftmZhXodk674S7ZMpvH",
  "key13": "UAaCNQmptSDNGTmzVJn7enudgrcqVcmUr3WCBroAi98HHHXmfeVrtQjkMaNmhA9ANt4Ubia9quv6Mmwa1jpgbd7",
  "key14": "4LbCbaUSRMGK5F7w9RSN4vbcSdqTFvnKSTXF7oEMgCZkWiqkxHrFFhbsUM7KD5uBqryaysUe7qaBBgjpRf3VtERX",
  "key15": "5Mo3vrf2T1FWWrrQhsDXVGmZrCTFv71H8wk9z4tBRtQ4LXedVQY8XM6jtGSXwdTAuNH1UfaSspyQ7bEyJA5BC2vB",
  "key16": "Hmz2afXkn2HeaboUvZsap7t4mLSb5AwQDkqAU5SBXXEy3tTcm56XrsiUjZ9U2yxtGtLCahcfyEMQj2UkqSwhtXr",
  "key17": "29WJEgX9J4fSw512NmBqkW4xbdjwdonJpV5VBis6tvmCdzeTrU4RiQ3NEVt8fV7ipUxZR9Sz1S7SvorLBWHn6BA8",
  "key18": "3XoJSE4zwcsBxsaSC89USDNE4JqBFbf2HSpMNaor7My6LbmXdH8yjFX3Twt4YYLtKipsL2zrBD144aCcyvSGeNkF",
  "key19": "4yaGNksJc9vXhfH5AaCP6cFtyYtCM1t5TSzH74UwcUSDcTDQ59ypEGxCEi9QxF5yT7v5Pccx2bRZSehjcRbvdEsz",
  "key20": "2thEC7aQmNCk5Z8CaoMKd5GnRhdUoYQJKhctXk8oinNpbu9ip1XpT4p8UdvDcvwRJ1zGyUj7JWfZC7umgpiWFkbB",
  "key21": "31kqgiGnciNS4D5PSGbekjSeGEKjGZNsdRKeGGmbNg9GDWXSxSmVXFizsvNNzMGiES8J9kqsMShLGn9Dps5Ngwpk",
  "key22": "5d76pZbYCEVNa1J2PuRttFrQxooKDHWiaumo1QTZqPL4D44vMs8EKAL6x7E596GJRyVXm3g4bFA8WRGHF6xMQPns",
  "key23": "3y3PvojysGjYTUj2JT3CE7QQCZJmnceVovFJyeRTov6ZiFaQEuwwjRwmMZUYRdf88VuWzV3mr6N1jDqujWjHC6Hw",
  "key24": "5sLNAr6VVRiWzAvACQw2Q2eJRU8xouVRQ8GcK2mwhTrqfmGHkG6RKvb8dsrePypn3vitJyARaHFrNJwUAoRwh91D",
  "key25": "5bVcwegknop2hirgxiE1xx1ihdH98vvdtN1QC68HSXG74WE1e1CuKQMFrZVFXyMFzwN7vMjkbEPDDuEqxMDJR66K",
  "key26": "3Ro17wXgYDqg4bKgb3yvxynuoEWPGqwKQSrbEPUuBsDPsMgBJjLcANr5TAMkLM84eS1nKLqC6xpYnm5YAio2bZoj",
  "key27": "2qanZJ6AzsLatXZ5WQ1gJrdnqZVFJRcGoV2r6stZoLZpmqvCrBvACDpDgQZ1hHkUrzWuBFp37giMnqdNYndpgrN1",
  "key28": "BVwQmCNKGYwaMaoww4UJjBWkMX1p6utrHojr5noa1KqBdLSQFPbvatjwMcZMeCmS1GgAoGK6N1rPQGtGRfUz7ZE",
  "key29": "5oyZdpWbc2W1HWoq7tvSbzfPFQQW3fX8FoKsPaxy257Zpd9WYnFcBGQ42wD1ArkxZow3LVenwmCi3T9zms8BYszz",
  "key30": "4rpg4ZBFynhgvfQhyLNjtLPMkDu3VM2HHFogcqMQRS2o3DCe7DtK1KF3NgYnjBnXkhvcWC3FncraNtweAc7QQDWu"
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
