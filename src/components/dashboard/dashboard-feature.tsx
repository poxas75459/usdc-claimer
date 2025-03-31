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
    "2mWBWAbAqXa3qTrLSd3y13TXGtQkHCdJHnLVjQE4GPkkNMSRwBGTEVYxnfdLU64bZWF8buTmBdgoiTjfRWAN6HwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bjDDjRfah8EnmN4KyBXnejaxma7CkoA2rgn6RUUpeVA5zKzFUTSpF1DozXYAJYayFSUnsktWW1DSDFXJEP6Km1U",
  "key1": "5SLEsNiabUwGpWird8rN5DXRK4cQMts3eYcUxHTUkTFqdzbJxDZxMam6mrxn6dFNBQXJYRCrW2iJw78GArmJ79Ez",
  "key2": "2SuUgTRWALrkNyKg7Y6bDJh4X8u9oiMYuBTencwQB5vdkNUDoxW4sBViCbd4M88SdymoRND7eAnz4B6wGyAB53NB",
  "key3": "2bk3tmisNtyMtxWEVFoyAe1Kn6aJbWiJeMozv175FYVJovPiFyo5hxDVPtk1y2diDJ1zSfxcyVifyhtZJdWEJKiz",
  "key4": "akHkgqy4PEXu4cKKfwaUJ2Nwk2VeScSTxXkxMhKNrwxdrLdecmjthen5gETfnKCdczjbpqmvS6Ckbs9LSTtsiTt",
  "key5": "BDCEG17p9w3NMdCKDREGyG5SLw2CJCrer1yL5nQAsyCzFLNJPsJfb3synPjiXEfC5gKYpu33YugVSf9b4zSx6pm",
  "key6": "4ptozm6AZbGKh8hqs7Q72V7UTWg8DZ39wB3esixPNM6J7HiEayS7YEZ7jFCA9iT8humzdQCxYFwu5dc4GZVCq12C",
  "key7": "2nSVRgqdVHZpUvkZjg6HZpGQeeHWiqfzVmXspV8DUBs1Q3QVfagvP1zQxRZuMK3vtHiBDVXFow9M7mvEyMRCZPQy",
  "key8": "4VJdkMNy2BLRx7rALVWx2SZ3qPP3rACboZfinQaQFocYXvfiAzUgxVCK2CRaqkjErNzzDgRDxZThMyxgRCsRx23X",
  "key9": "52p47d97kaMZS34HRcZfqz5N89iWoGfedpvuTdjyZ1ExAPL3a1aqmGK7DiqxcC45mSrGYMJtd5iXgWcM7XVYjR3A",
  "key10": "4WbvrAEf7dCVmnBwJxr1Ew6Ane31xr61XZZQoTkncVEUwGxbPkVo97dqhMyeYEfMPNEgMiYwxP1Ejfyp6QrbEky6",
  "key11": "3MVCJgXUQgEJgfNb1kyowAgo8BshfiDkSnpXjwm6RSULfihs3SeFzmrNofRhfwii3g37NqRjrjjFxDyJTzbT3TsX",
  "key12": "2gVGYcsoHjPrvqvFMwfWRUJST72cwifmcYF7gpRapfS2SFBEeajKKe4aukspuENqbbzDMtYKoz4xzvPgjdXc9Tiv",
  "key13": "63tVn6FUNFMnTywe8fgS3kgFLj5ATnuZx7eJYRQt8V5wjvdg6JAG79r43GKAyjTK4pCefFc38ig7Qom4kgTgsFTF",
  "key14": "8tHfYt2etZUrpBSBR7y2eUkkv6Xhe6aAweKVFKRz6oHFcs4iaWbKjSXdYwubzmZep8zrzaBFpYrtGa5M8zDnwZJ",
  "key15": "2q8TLg489oZAshrPLphUzRmJbXL87SKurWtqPNBpZFmmqTDBmQALj2gDWfUqB8Lkka52mrnvj9UrWiCb9Y7cBMzv",
  "key16": "2DXcoHtwGHJy7ecHLoKTcdU4Vs4PqvWjV1DuzNLVXbzVRjmehH8D2m1zuC3FWaDrYFcRNnP5ud2xsrXDcSW43hQt",
  "key17": "2yJiTscP42PuZyudqTypVwoC2LsGc8RjfX9zEdRJfarVhrJsnRW9WJtBMsFgZr6D2fhUkbYDWEHpSjFD9TMhxZbj",
  "key18": "39F9pwcKToHwbRTFgoWG7EwbGc6hRTA1Vf1oLtPoY8vS1AZZ4FuzJvL5jXBXzvdqANxM63tJgHibaEbY68YGgT3a",
  "key19": "3srdf16CGs6SFfGrQS3H73wKEDqmMvdc7gAN7TxDmd2iTChfSPZi12MyYojuwCW5syaWpHN2h3GAjUdAAZaPrpYK",
  "key20": "3ffMaB8QbmaPjKKCzd7GfmdoQkr6Ae3VysPZKWtMJuCsy7YcTsBDhHBMZif4xPccCA3WFjPAgxsd5xnb2k9CtL1n",
  "key21": "5zA9zDhitbm9KHHDM1bpDfJhyfSVXZ4aaY95wuASrEN7DkTzBeJj9eQyVJ4ACaz2VB6hBpReAzm63sRcUA2ePr3Y",
  "key22": "uL4FchBSafE1i9ZKjqUVghdwv18o1SJZDRGUdyxPMd6VfDiysAczWkTgSTxMfUxNGa9RM5epxFuZ2KnVLJKKBK7",
  "key23": "3TWg9iaopM65Yzi1N58Y2C5YMzvi6bFHYWFBENSiCh3iB9AvGCTEWrYkQKiC7fPS8v9mUpJcPe94JW9JXBhx4Vpa",
  "key24": "2jdUq9YGZ8EwhYe2N5ZkgNX1HM1a1h89gpSLhrRdhBYgXpGVctyxfJDAxhnziDrZNiRDCAn8sjjeMuroFhHUVigz",
  "key25": "2aecuHPq81nL9UFSGhGZGwLYHogofPAuccaH5XGuchxBSPA3LMGHYH5kWvpV7dB7HwaKEbhdRmYAPFRLWzUxi4dk",
  "key26": "2Jo1BSh59QpkrwB5uMkYqwwLvE26jkg8sqVrDLU7o9bSg4mJdtq4dKsDLhqBQvyuWokhjsmzJRWkHMj49h51MPyR",
  "key27": "5U1UZahTxqqguRPaLyab4KN86PDZuMpVbzDwAFcmSWmVfJKkvwV4F5wPc6jSBm4eWmcavdE5BJ8EvxK5hgc4vdXr",
  "key28": "2qdAQNJiozBtbUKShQDr9RqC7aLnp4cUk685YqUQ53NQgQb7RPGVxfCW6GgSVRtxcVvY87otz4i45a6cRbGZx5TX"
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
