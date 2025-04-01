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
    "BpBCcnJxfSDPF9orjyJQtfdtUFxPVgdM194mNEXPzWuFi59vsViCVckWQu44CKbJGbSFXR4ffuMwczmnzabCvhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AqYYd3Ehuw3K4DadFjjH6m8v82fp7GL3U4BtYpSUWH6XQBGNabwB5cm1LGCyXCERrWLj7gfuXjdYAFXtqBdBvGe",
  "key1": "4qTkUP3pjnjEubn7R8pqDHXixhZPqXm4Lm5vRQXQgcrdY77cFJo1Wxbn8juhvVUpXTnKEj5rVgRd99sKbPXbfdM",
  "key2": "5ibrMCa5DkgSgQZdgoK4pJagd6PNuu4CAqcR1AuL3CXEM3MeP71U1XRZ13i5Dn7VR4S8YXrD4iPFDBgJ2629GQJ8",
  "key3": "3KoRAFk8RST7c94vddHAbze1jQnLqPtRPbE6YnKWUzas6GexYHB197P63GW97CnrCKt4SeuwqAH6Whj4boLXToee",
  "key4": "3kVU4fsufvFMTQJ83dF66j5BEwo7MDuGnyKQXg9tRaZ2Ef25yRji3dj4yihN4VvcfDqTqSDeXs7Czh882wqaY9mU",
  "key5": "4kKAeEn72itwNHJWUCh3PknN4WaZKHJnsLpLTtNHCRA2iE4CAGWzWCF7pWqsH2DK4f7Ja5RqzG9bFyi8LJeQMCy4",
  "key6": "5U8gEPXjontcKto5HBrJiHEf8raEXH1pEBJp6XF5RxSmjWiHkbBBK41FdeJSKJTCPYoXmC7fzhbqyv4Wp3L5kKqm",
  "key7": "3vcsNSVMt2Tkg9H3u2T9o4RCDQzGcMDFGLo5dHy8MSSUaUpY2vy13q3ziVd3hqa1u1E7njCrctFr5XpRwv3hKRRU",
  "key8": "3pxngYRgALijjud1aV32AHVhkVqM13gSWtvM9LBYxtPa37AzA9iry8Tteecf3zd22Pp7xePY3qL9KjR7HZTPkccd",
  "key9": "21LnKUQ4YpLBzwQDsoFuAPnU7EieM7MVxEndSvQtNDB6jW5yqiDCDXuEiZtmV2AJwBCF88QfdsyU3TgcNG3QYhnJ",
  "key10": "5SFRyHQjn5d3SYVWjr8Rj25yfoa3GQayNA4R9fPvgvfKNWKkZAdm4u1g1NbZdWEKSpjV8Mo4AsqgPhYVeVXppTon",
  "key11": "QnVcQEx7DfoaCw44Bz2DtXZL8BTyvuHhcEofcSmikbKWx3S8gwWepcTkv3vMEYNd7EU3chnN5PPe9C6ZRAMjqWd",
  "key12": "4HPhQQSfVMC53AZtYwbpdBG2KDkiWkQEcucfAXEqQU3VKH8obq6pEzx6S6bi7FAoFgZTbpLy32aS9vY1ErAHUMZ7",
  "key13": "5WBGAYZ1D8zwGPvJkYTsnAkpKPfkujM3ViGub4PmtXVvooD6vtan42BzC9r6xhPV7hnmQ4gTx9R6eHos1vNzWeqr",
  "key14": "LEy6MEXVFVXr83E8u6g4vJa8kyqK9JXsh8gBZx5E7srkA41m4yKEdCJC2ftXHeau4hmrrBQJMyp1M3rVEyZwMzB",
  "key15": "3tthpre5xQ9kyGQcDarA3BwMygawobQnWxRrjvmuPUK1wFTEPEheCLYhUDZAt6z68gmV8bPVDtbDb8SBaQzyBQ1n",
  "key16": "3vwRUXihX5A6wxyax5dmS67B2fV2sP1Ms1QXUXEJ1TG4S914qfwmSbhQnE9EnJ1wm4DDpoH7ukSqsvw6bxPgP3i8",
  "key17": "5evy8jjsQ8PwBg5m22SyVP2jqphbtLme8mFUuqr5YHa4yreoU7YMJtPMA3JoPK5kfkVVZay3bqZphD88UjGRBzBK",
  "key18": "3NQgrZjEYAVWi3fTy34X2sW6E8u39XH1sVYKsUe15NQsWGVXXnfZ9PHdDM1DE8wU4QyN51qWpwfmnP7AVZ3prUjh",
  "key19": "5LUadZTjnfPdGH46hh1GY6Gx9ic3HLaMm5RzbGvyqdky3HST5uwNFDUDYdW6FmCMquvjkurvkJwqueoKP1wbTC9W",
  "key20": "4fE4bJbDWA17mBvHL6Qq5kFQrg57BwfustsfLDp1N7Y52g44FCZQJS8NQ3MjL7niuhkbUbTYWfkWF8zFJLVBrump",
  "key21": "ApZL4XkUJmWzjqEGUSFK2gqKyf9vndk35GpqTuA667zftsbBAag8xNpmb2eN9p6vrmjTqdsHHtT47NngRXjoYFQ",
  "key22": "4N8oicxp32fHsaKJGkCMQkNkpjWWFYD226avs7AuEjkWTAjAssjPX6KixP3rNa82RgwAv4fLykekij7ru4kqFkjm",
  "key23": "5c8FDHnjKZ6sfjt4ZsDo9zJH8Q8Qs65pnuayXuTwmbY6LFP8RytjZoxgySk2nWaLhrrBZjrpaWYdCDNJQuHUraeS",
  "key24": "FxYgAgktMVWcW9PpNWWCFjs8xf2XwmXsc3WFzifBCSJEvN5ep7DQFGdLkB9D58QKbNEU798frx5zw17tLiutX6T",
  "key25": "5PdRgoYKdaD1q7x2VbpW8bLF7qr2ePKskaCgxxRiTkZo2D6LS56VvehAczFjP7t8vvGDdYuhb1rCCwtaQsvU4kkE",
  "key26": "3frCeeTCQWKzAGZHE4N2MwrnLAcDXYVKjN4N1kspaAowvYNgCT8TPyXqWXvHL6qW9HxDWvcsRh1P7wGtDfu5V1wa",
  "key27": "2SwYtqTRfFoCvHNahFgUe1JVpEvNeLDipzMPPZakkHgAemvjgHPdbctzDk2vFebkQi3U62LEEbNwcDbo5xi3ccyT",
  "key28": "3FVkPg45PZKo5rdGjXg5Pgaz9KmHDQu3SWHwd2Rtio5NG8xQ2xzVA1m3ptBdpmaEx4CdwCABp1EqR9BaiYtddNXG",
  "key29": "65RnpHGN5v3L6Rf8nU11RGxxog336KkQmzPztNfFHbKtyMjGsp7ppbgAmmfEWkPGmtmkfBzY982gJH2MPto7opLm",
  "key30": "4vLHr1F2pHuU9rb2ywvBRAvDevf47zydctSWdn8S4J2HyZCd9HX1PXzkb22KwxybzUxxeQ5xgct7UicxNpFF78LR",
  "key31": "33V8FmQRmZeU6mFEVR7rGRJetQgo1H7bS67wGuosTR43YxVUb2kdD9kRcQaHsLAL1fQ6MZzSuHtG9CN34a7s3XVk",
  "key32": "4ba74TLuzqwD9Ar1HLsZVCsLA77LBkSdFd3kKfodwAycJTtLHadwUA3tjZZqMAsB7xZrizL6Rkv5tYxCuKJgk2PX",
  "key33": "31BUcHneBekvmu1trCgXJE3e1kgnXFhxry6eLqKxz5vRJRC6G5r4HZQEijHV2CUfviA5TRGZAeWAgLP7Xc3UUqww",
  "key34": "4eMhNxvApSRvBHUtx5DGSuTkLkEKit28JgJkTX6mSXV1kBbD5PHjZV4794ztugBZqKcBr5qw9822bttswuTnBkhN",
  "key35": "2RJ3GsqGaAPYwSzV44h4HYsEfX7wkk5EYfhKGwBTRgQTDWRPwazm6XjMK3u7zjy2diDuZXLH4cgbS6JKYGYh7Rgx",
  "key36": "28CB2bTyU6c7c7AkK3VK4q1UwAxoNNpyAYUgam6J3jtTTUHwB4m6jKCqSYH5NHvA67BA8u5x7CWJK4M3CbJC5CmN",
  "key37": "5vF2tCkQZ3PA69xowVtYA4kDt4Yg1GEk14v2rsWNVLDRGPYLecihV9EJc7WEr4EvZML64JtmMCxUZqrAQgARPeR5"
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
