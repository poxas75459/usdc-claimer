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
    "5Lh68CLZ2TeYL419BLMPpBjvqiSmUL9jZSWX7Hm9AE5jEHRobaxcccC76JqhxBSWf57ZAePbqjXrDLoSBVyGSts5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ujdo4j9nB2saocXfMzMUwbvEmu5ti8TnjdXBJKNtFXdT4pz1VdwoNb7YCZxUQBWcqa8R6Ym7ftZ5XUzo3subRVc",
  "key1": "29DB7bvN4EnAAXcuRsE1PD284rTwa8t3N1yhb3uGRxpWQWBvTyzxmApfMaznUCSqg2zDJVPuVtfJ4bBYPH7MAp5V",
  "key2": "2YGdNCT4eFnqWarDw89Y8GDoXL94734LstDXRw4FNYoXxEepndS378CP8uV2Yrg6yho66vocRq2KGjKQMBj5h1PT",
  "key3": "3i9wxWkL11VmESxHKVy9psecUZXWmCJpSxNboRkdU7w77Q69EXbF7CibECAz7dprAVJ7MSLYux5swPNaA4XY8VYA",
  "key4": "5rzQhrHMy3XKHBqoVoTc9XSUsKwm9s6fTtUCFLRcPGFyW5K7AEHGo5bqhzrWXDGjMABsMhHPUSetsAtVLP8fKj1u",
  "key5": "3MgdmQDqgW6WRoWesr1YTVZWRXqErvwsD5KTvfQEK6cKPcQTXNB28y9VT19eHcTj6XSTCaQCnro2HWvnSRXNBu3p",
  "key6": "28qtuFjhArPQebhhDrbPNr1sbgJvmd5RRhMS9pcFD3CcthuUh5G2Lxab49r6WtsXAoxnmh71RCnEgfiaJHrFzNPV",
  "key7": "67VSP2fWRRuRJuhnhDLXQ5GANdpj6BSchDvBdQ6NhmkRDxoKNixMQnqqPAStbjNZdEfNpsxo6giuFJJN3iMEzM6k",
  "key8": "4c5Ejn63fpcpXHSLtxmLdshRb7p1E3J861KSEQBeVwru3G1vbv3fDZuVYeRgwdPmBDJYgRzvfM6TAVvPfnoVqvTg",
  "key9": "4Xf1zhrm6shZbj1dyFzwfH2zDT4UvcmQaKCs3nYVgqfE4y9sbdhW4CofgFoLZabVJdLKQNajGYQfJ1SjycSh6JuS",
  "key10": "3shmrr2njd5Rre8tnjYgsb1JHz5RxAefac3wNDZap1HBdfAPtT2xDZrXMGJhbnxtBKAo3mwBvsyFk8KzNiYUgksM",
  "key11": "2A3GVHu5c8GskcshSAwqkyvt32nqk98aYjpUZ1iXmFUU52PDXvL2EJjXhjh77H8AnbZvbd5exeHWKHpZHWGrCSif",
  "key12": "4139bkRdwz9sPnkpwge1YtNYMnEmb6FTwBMLuyzpawLA61tfacJXang33YdPagRTJjHD8JqJduNUvHjvfzKjnnEL",
  "key13": "2C7rHQCeMm5vtjxK3bxeynNzy4niDtwTAMLAaS3FdG9hUEYRnFRVFzFWsk2gZfTdJ3tB4vD93gUrrKzBuFfaj87m",
  "key14": "4Y1h821f9MNNEuF8iFSCJcu75EuBFGQJKziJpBgdpciVkAS7BdEWUqxX58EmW1gp2PddcXSp3YD6gonyTjTu2ZU3",
  "key15": "2TT5mrxoB7XYc5Dkk62x95dyP5tC7Z2EEKdTDFGTJPknms4BBUQ5besnQjf5bWcufzRum2uKUWywpvuxYV6soYtd",
  "key16": "2VatjPE53hqNZnWCAuenrkzApzCgi1hL6EwoDoufApSnqzXgMBdecsfdPkvibWQDSMspdQS3tbcPz5sLvGZaFWr9",
  "key17": "Su5YgmSKNCAtfAjYPQ6QwmjCwtnfUdFtnMtt6xzpvynw3K6RerqHUQSFxuMMwicGBMqss5q8XXYQ67TnZU6Jcvf",
  "key18": "3TY5JnbRawa2NTfvRDNEVErDcRRfoRwj4SsKqrw4ko36bHLTLNDz7mhPe8nh1kySydSevqKXGyBaVAtisByAWN5R",
  "key19": "3F87ij3CNPavctzttwU3yHWSPqp2ru4JRAHgecjut1oDoy5G3f9nBsSLDTCE7wag96GWyh228aP6pd4sDHfcWcKp",
  "key20": "5NCy11Nw8Bu345HR1dG2925R7p2Qpb4sgE7f7bswfBLipuDmdtsFLNkj52zZ47sQSe17KVcHDy6wfYyfEUjFmoUY",
  "key21": "3tyo5oEoEivLLXFpekRHeLDY14ueaKKNwmMCqLZ6W9cTVthoxVWoDeE8Cqq9Dw5W2sKJ5Wf7ZUroYqGhkjMP34yS",
  "key22": "C4GAeBwuLKHxScxWotEu332WfR8wfrY4PmnQA6P93SVnFnoxqcRi7tY3mDua2EdhEFzQNg9AFKeQkKJX7Ve7fx2",
  "key23": "344F8X5Sww8FRUY2aNMb73UMMqcqzjpi1xrTj6oQkViyPtgCgkoKNeeYP27R8RmvxHzThbBh26qYWTNC2yv76e8A",
  "key24": "4wjvA6nDvR3Z3z8yqwTPosfwjPfLQ2JzKigpXd1VHbbHjeGjjCQDcw7JErFdDbuq7bWG7fq5hEmYGSi6GZygWuPZ",
  "key25": "4r5qrw2dUxH6AEJHVdpktLnVcAqotzuxrDgy2hm4g2fHtdHetidC3rQ9mQY4cBruU58uEfycSJ3EVqWy2mHqfkmA",
  "key26": "4UDGkcjfH5boQobRMU2eBak6C7CMfW7d1VqTvTgoy5Po2KaZgx1imbnfGcU9Mh7KErFPddvRTgUxnvBVVDhbeZR5",
  "key27": "5yL9dBvLNb9GVhSRmsTtRVCSe6QoyfVSS3bExgXXhbQAChXiC8brFAy8xC8UmQHUF2SDoJdPmMLvhkRs2mLij48c",
  "key28": "5krGruD2NtfHkkVffpFAS7RKq9aNNwMco5gyg4vGs9CguXLURes6txhvky2Q844PkQQUarAnYXw2oaijeZQXBYR7",
  "key29": "39cdhR5oLw7LpdFwAmLHChB1wKcg71bus1BxVf9rJcLVjc5YzESpVHQvwpkvf3q5XPaFZ59sdkFqnFKnp4xrx6Sm",
  "key30": "3fX17JZhd7DfkqaHmpuTzb2r6KoKWXdqDkWtEc8npuVeP5vrdkqhzihzov6aMCfALzGoJDd8iKUM4eVuXuNUDxZ4",
  "key31": "uYtieUTy6NfeQaie24RKqBiJyJFuZD2okNKyTA4tbZBWEqTQbEETy5DyQmp2VahSBi9u7GxZwuVAPhWxrmbDuZN",
  "key32": "2xRrupnLAxxtGLwMEjEhWp44uNz66rg1sB9g9EJcSPXDmh6NX4SCyMZ96kwVXpXu6EgoXtrwpEzn9epLMYzZeVtQ"
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
