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
    "5FZHjPZqfEUwJB7hSvyn66nySFCDQTCZ7eDvD8Ga283nTvMjCt4uyvwX5PBiLxHr4yp4tCTAnjQA9fakbPCsF5HC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qxe8gUY38RTSJk5pLFeh9yr73tkX3rCVc8U1pYnr9R6SvoPpZFHose6u8bUqpx4Dv9AhT8UhvqpNaoNxR1SDuNN",
  "key1": "22BSg7VCBZ12ZNhaY8ShFu9VfFTmwBEfVA235H5ivSGoqKiiWdLwwt2KQHpbKqceYdFnMwksjv3Ah3NUz9DaFSBe",
  "key2": "2g1ChAAQEGGpn7V6EnamPfVCPnHA66d2sFYiEL1ESXxxKGDReSTX2u1K6EbUna9SoiVAafoL4abjgSDRHwmkdm3c",
  "key3": "51jNTivABMnZAKa7gN6Grqnb4YkFRDPTzVoAL2DdxekTm8cs5bes7sVNkMmYCUn24jFexpjwzgd6YtaBsSrmecH",
  "key4": "4zNQs9xZELzPZCMYEaQcURoo6yo4e2ZRdSwNzSP1pE8o3e8ZtJNbuAe6FWLLFZscN9QSbATytKu2DMRe3QrynoYv",
  "key5": "62oPLtYxKHvN1VkH1kv2wn7CUM2hncNECreZHSdQDxdqAQe7yNfdFSgLZmPDre4W6TmPmygmdVH6La5vFAQjBCFJ",
  "key6": "z2xbPBPnwkEJ8FfyQ13GSjzxH7QAP8UgRrJqihZN3eB3uCDkkQj6Xmpx9T3RLTADp1p5HcAHsUVFRM65ARXjetk",
  "key7": "qXhjZZKKFbAkRTzbeu5emGysNEah9mRtLjKyZNuvhbBFMR94ooT71Y4T7GBdUVe5uGc1AGv7auzToVu8agEu312",
  "key8": "uiWc6vuPUHfSoJdWemGqjkvJoC7o7tjJBoVeFwYZ2jxRzXNcYfh3sYHUDWV1a7eZNZQxoZWRnYMoqzbkGtbTqEc",
  "key9": "4xgsNvkuabPKDiFhET2u4wZ4VsHHoHtCakMDJeCYoxppK5gSHQYGiS7rJrebfvVvPU6G5gdgzYdMEDdJ7wmyS1xL",
  "key10": "2Bn2gka5iMzUYd1gspwr6pFq1FypnGDDxrxQpMp5wxida5Tkw2LWwqgsiDDj4sPtTDajmTh4Re5U698YGRihUUA6",
  "key11": "4fhsMQsMnGcKj4VY4xdVR8LoUNyjzJ6y8bEiVRUkdC2rwEvXxfeUmwzHbQvCGix63mYVFfdjBAx6NjbgrVTg9v6o",
  "key12": "4dLd2hUAGmPbwjnJ9idb3UowgXsC8qxUdxLZWhcBjFGeecJ9ToUQfz22YcqHNr4Wmahz1k83J78FjB8HRwLAyXGP",
  "key13": "pHSVrAd68noDK8qao3EQXiU6ZyssnV6SrKs743Sv97KaJRwb8796UGxgqWcZxQbj5LB2msv1A8sXXTFcWPmNNtD",
  "key14": "3K3Ww9dasHqXMKrQ22VDcgQyBfTToUeWZLB8W8vpzZXpFbqZPextFTPLqfKCd2AgwieZ3t8TeTTnwfvavENHRLGk",
  "key15": "3wkKgbewHEjWAPL2MjJGz5aN9fSuFM1KRLqiLSyBBQ7WTrSqmrFPLJAKTCyf3hTMBYwNL3i4sWC1GFr5jhf56RwN",
  "key16": "4mwdtFC4RuBEZC948ENfeENCkEN3tPzMWhc99ugd6jTuQSLofnrMmyfQC9eHXA1iQV463PLPFUqxvqAj98JR4MAL",
  "key17": "23WLyuTtHaLXkDTsNG5iM6ShbGkQ7KfkS7Jyf1AcGx1Em7hHmmN5iYP9CcBd9UoFBbxJWuwn5CgF5eQ5tdJMGw3p",
  "key18": "4DkzWKokvtLHcN8unZXpuaCjujJJ3ym26fyJZwq7Cc3YhdyKAfbAhjcX1tG9o7QdAQXi99mDcaAuB4i274SVvFNm",
  "key19": "41W5tyZZrrhyngkLH5bGxpU9D5kJpwo2QjBpwB2PmeKir8pgKAVvi6gsBrHmi8LjFnbZUzGDWAtPdYFCQz9LhFYv",
  "key20": "3dg5wAfZAzz8pdkRFRHrqpS9XHzYFqr7hsHdfVScxARiiRbWKjniWLyP6taM7591g8jymx5onqsiZdoe6BtGQhC5",
  "key21": "394izciQGkURccC4CgXUD3dwHy2h2Q2pL61w6nFodfhyUs8WmEBYqdNwSh27mb3s9Z4yD15Xvdr6fU81bnSZjwQb",
  "key22": "3NxxCyxy1NNsU7mWp1G59hrGA9iyMWCQarT6c3ekQB1FkzbBWqB1zvWjiwLKzVKJr3xtfYYjgwkGtpLy5txkiCJ",
  "key23": "3s2ccApxSfvuu86DLXyDu5shrESYy3eDENkk5zCUqLUvdsvsGLBU4WJiXkDAiaTT4ej5kq4unXxTqEtpzkJtbukG",
  "key24": "5pCtSx5s7ZyBj4fmGmCGNshU3jenZDWfMhjxCHUeeyMtKEJ8q5esSTqueR9aJwcYo2yygnAQB6wiHvtn2dbXLYkP",
  "key25": "4t2S3rVf96UACXQSkYRXGF4Lw2pJ2CcgqVApiPEhQNJQjE42avX9DsKLtv7PpVDYmkt4JNQMojryYzFu1PRMR5iQ",
  "key26": "4GVTzHMocG9NpVDtHmLYAsdeRADsKfc77uYKxydukfPyfG7jkqjYSycjtMBZLTC4NQ6mRoZKoyaw2zXADHpdm44Z",
  "key27": "2Am8VheXGj582ARasqFWp5sQjcYxMx4FXjvJb1agzaNmBFg5ak5iQZjBW5jPE3oSfJomfLxAxNEyVuxfdTzaB3MT",
  "key28": "4rdNAHzkhCf5rcokGdrioMpxmybFKxm2z8DfJFHTSnkTZeLsjGNJHQxjF6vvXTTzxYYNKMeBuNf4CGTnKZyZhwCu"
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
