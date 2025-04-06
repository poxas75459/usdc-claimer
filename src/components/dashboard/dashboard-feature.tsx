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
    "2jPqVg5HpFynq1k4jtcwJtLfVJq7gbkt6T4pmQLsaUPQqerjcVJLyY9JUcDsQXrFECVV9AedkaV3AvQwZV5x82Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wQSGdkJmUcEBZDsLnDFgyGrVaaoJAAHm4zJJKfiPwc8TDTrh4tA77TR17XNYH3ew8VXhtRe6PRda3DrFRbiuAqe",
  "key1": "4CBgwtjv6QB3MhqboZiHrDonbmcrPxTdNtXX1yzZvhx9DPMFN6C6jaoHj4xJ5GP6t61fnJnxht6WmTaBkCGi2FJG",
  "key2": "Vz9oNkiBJJyJx4hF6orT9TKhRSFf5J3mseLcbAFDwyY4Zqq9tFLVB1ERP4qLbThXov9L7zRXjFUQgHSeHZ9b7yp",
  "key3": "4gKgXA7pH7MQA4cc2bDUs795UTDUZd9iUmqiFnjdaknuaqfF8K7qLJSSVeFXLomqf7rNX33gVrrVmafM4gkmCkT6",
  "key4": "4RnRVxiHBv9bwtnzbauQDkT4WzmXFLYSkxmet53cWFSwT7FqJCtMpiPNLvCKUuM2Fz6kR8Dnpma2RG614hUCTVFh",
  "key5": "5MKpFhUmuytRA1LfrEgUSbrNaMR9xNLN1hxYrrBtKeZZL5FPRRF6X1DGA2ea7wJ3MhjwGmCiTLEkASZX7rF1rUhr",
  "key6": "4MAJTdtbR1pSFKHrBVdQdbP2hjuwUHfbuasABj3EiJPUnyaDsFhyDqbevDBHR6EZ3JXnDGXEVPAsyoEhuxUjVZFA",
  "key7": "1kdBC4DeC89RMziYwRYHXkjaimYMDVoATqbnqVaGFqdHrkjHtsGgHRwquho2T8RoisacJhhM9HjaxJjibDkHRBX",
  "key8": "4KhnBHFgLrR1qwNrYTF4Eb5pRwmPdzZpCxRRcjtB355cbNxNfEhNSkjF8NJHPbZ5cyaEcAdHdcyoEGB6AVVYKU8x",
  "key9": "5cv8XMpkWDEvpcH5BGxd9KpZcNYoyy98izZXHeCGLBbks6wCBvrgd1wHX2ZaCnzPWCUn8KTvLLkrm95cLfagw4Wm",
  "key10": "2a28axLHhHSk3vakJBMpi8o2UAntuBZsUcy13kgv2XH3tdf5cnyCae8pB4CfwXWhao7HUhBNx4VPBiMmT1eyFJmF",
  "key11": "4LkhrVAPppjNkqXPBQzEgYhho3c68wHrswkPkQNqS6oQitKBpC2ZSApFA1VNvVXXb4HAp2KMvp7hJoxGXe4pbTgU",
  "key12": "5bAvJKVZeEwhRGFc65a8583afVYQ4aCHYdBYKyeCCLD2Fcn8h31gVhh5yQRRZvMNE86e3CoGoxxW7e6aVdMBucDx",
  "key13": "k3SxaQxrjGRYGKwQqauWA3xWXQ3GbcDRj5bgjxc2zjNbyeqQPZCfDEMR6YrGZHeButD9BNuR6tLhFMzXtTYCNzu",
  "key14": "39e1wGcR1M84cg1ewbpTfUeARNYqBiSLEoNHoL9JUX2jftFXSduNWYe5NvgNbJ9eQjFru1qxVkc78MuAVCsihuGW",
  "key15": "nyPZTFYc4MZ2X9v9UXk2jvLc2kXXm8prPm5vcqLKVRtnueFSufZ71hEwcK7NUvipA3YqkdLhH2CPxTqVFTm4sLz",
  "key16": "5uuUi2Mn8z2o7nm7JhdaLMcvUtKvAVeBqdf7kasd5FLCJbjzS2fNAe9UEmMK9XVsrfumBLW1r8E28X28LQm2bnkE",
  "key17": "2q1mNPxFXh4YzsxD6yvxUjtV1HSAeb9R7GY4qSvjKmeYAmfedo83dG9P4ud9MJ5hmJkfSiWzwZTYjxuU3GWuh3iN",
  "key18": "4T1j9iLQ8NGQDMXGt3MpdSyeNKw4bPVo3zzUwHiU2DpizjFJDARPvxN4eFv3Ek277YHazSPc7irCBvwZ1Sb7Ysyz",
  "key19": "3gpeegBn7wLAM7b7Q3dnyS1aqFaK2EYPNxrCia13GsaU47N4CaaK2QfXig8ttCCcwNmkHMVaVoPCp4PjkmNzsi9v",
  "key20": "HbYEDkiFLrL6X8v6PP3Emf2VE6TeVfEUrk3VtnDFf2UgC91unBkn7je4pqQWgpk9AFYg8KRfnWomcLvkSrbbuHF",
  "key21": "34Ekiqgu5f1X6CVvGRC3Z2cGkwt6eEwEEpkjc9CCtqfMeSTPb1Gw3E5Db787ApZrUu1F94jCeB9hxZrwLRzCmzzA",
  "key22": "2J7Spyt5uAHHNoGswtx67ApbJRcBe3MTqQ3SsFK733U7r7N4hMJ8BqGkTeoQhkF4bfYM7pUhBVb6G54LQzCbQ2bE",
  "key23": "3iwgreqkCimDs7AGQgePDasdKcLr2m2jojE9deKqSgeirLbJLH8GiKqg4qhxDPcV7Jneft2yFsPfkRemXF6BLJF6",
  "key24": "45cwtAwmbzYkVTFjvu1z2Yc4TqU9M1wcqbrQ7FsYufddqiwN1K1Tcb43cSP1FNzwquhBnGR2TvgSHkVoKbiHcW5H",
  "key25": "5sESFoqgLeoghZdxuH9s9PMuJmGHMSvdYpYYRqaG7FKJVFjLgRFcf8fQPryNdcTXGSrGBMgA4qHDKxDkkUC4XoaC",
  "key26": "4bS9axJs4ccC2iGBR4UnwgLn9gdL1Nr55JxqHNFhE6KZmoGr3PuJK9ZaF5RWZkYvadQSqAPAdVTRiQnvUsQ3VPBW",
  "key27": "4CEbmVgFnVBj2uDFNuiHkeVdVSSFgvtiXZxXt1iox4C8urPSg3Vi9NWQT94nqBDDuH47pq8eJ2mDEJrpUjp3fbH2",
  "key28": "4RAh4DmxdgXcCStW2CPPBJyBx8n8oMg83xK9m97AfVURtKBmyGZVB1ZA5ceEbfBc4mgvzsgftYkBNKe5W7pcxQGG",
  "key29": "FcJ1ZE2fcqTHDRSCwebi7JL9mAW4vEpcvWLPeAKXssvoHNDvfJpAucZRBRxZ1VquvmKPR9z9czsz8QqtExGp6mj",
  "key30": "L9vewLio1YGTaUqTMMJEgxkHC8hYjzzoRX13ussGZoPEvNgfN8trnG4z55fYxpwE7AUuLrJQhnHPRyyXQ619bVS",
  "key31": "5avWFBYKby4yQ4T5ufrVFpWTZfdcJgujVxCXFA5YdJx2bfR4KVgAF41TtVXtYfDZwneKkbgMsetg35vBbfvcuMSn",
  "key32": "UQV1Qxa4x7co88xwsVenNkeYi6bakrADvwAdFPgS4ZQSg1Lw4xTKD2Nk4exF8uBQyvC46iewsksLyG4pKWJwPN5",
  "key33": "3wJtob5CotVHPZHcbdpVc56fQaatQSu2EnPPHDeXeDLm7QgCsFEYPXguRuAZEdcCRGu9T1BnhombBKZ6hufcFGXz",
  "key34": "38empsGiJvQKfW4FERgnFJMXYvstupT2yhByjNpEKqdVwungh1y3fnnk4Ag8Uwfi7SovZMtZJ6SRLSdjq4AeU3cM",
  "key35": "34VbACGR94bA6pd2NeLY9YMWLk7bmYwvKeYVdWKmNR7WiKFoNwqiM17TUBtjt6LqtwhUJnMkyDwd8Mfoshbu5myN",
  "key36": "5k6jieocmpR3huFvQmU21bChs3nA7ocwkc9VarDuptLghxxEBksLJERhxbFFhzJKem8Xt4vYWKScmNmFAQ4c3Rjs",
  "key37": "55VFtcaagvMyNDLFNyGyYXzCm7uhZfwjBmC4uTS1LyxqNJL3m4KesWBLdD8216ptqHoEBN1Yqty3NJRFzKGvpu4D",
  "key38": "4JbcdBnC9MMauj3kaQDezzHgpndRmXAjVP2FUsCcVBvh54XUZkQjxvQdqWojX5KEQMgPwvfwYLjt74JsosKidJy3"
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
