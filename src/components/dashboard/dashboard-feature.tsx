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
    "3ZMQevu1uZ5s6jwoXUDLkr3YM5zxuvtCQzicYXeUYSrVyqFzRgBuaFszA1cKVBeQXoGuAGakRKE6eHdFza22dcb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F8YeezQGUNbP9VS6TydQWKWpA7joHNZbUv7aQAeV6fJpctuD6K5biZnxkkMFYazNsXzo5EQnLzsP6oX4my3mCwf",
  "key1": "4LyCFJpHrpWTnevnmrAPqo7wjqZW3hh4ArHH6JmxPLx7LKPFuhDqpLdjVNCwcQ5qWUy9WqgUYwxhYYJyjgMUZLX3",
  "key2": "y9suVvrF1Wzp3ADbj2uoyc59DbaxHYdpMNNzDWiVGMN5aWyptrUjpTi1e8GWTBfdq4vRsQMPzdqpJg8h32Lio9q",
  "key3": "5oAjUtz5ZoimXsPi4AnXtmKpTC8kj4up7qp32igG81C7vRKEkkzvYkFuFxWD6GY2trv7Sm1bBsN29z1MNywEfzfL",
  "key4": "vCVrUNoa53kciirKHfPkGRX5MVwDC8kavQKvAN9tiWsvGERyFzBAjgKsm1KC6qeEzzDyvZdaAfks8rUZ1euPeeT",
  "key5": "3p5nZPnbC3ZmBQnLoFUcNvR4LFpDz54zKCvK7JqUWXaAt1b7gdiYPL9ifCXC8RrLTaJkMxGFzYRQuiSYY2YGVExZ",
  "key6": "4FLgcfSQoJMHATM7Nr4NhqvRRpBWQbYM1gi9pf6E2P3ZF9BtYMjYtVGBscpA1TNLY9Yn2xgPoZxaCbobBK5hncDi",
  "key7": "52dKdMZYFqcDbVpfSSJF87bEL3Eg7NKheb7a1eoPzGqL3iG34RDKdqJP3isiArJCnGBRqPsG735Ym5YAHFyHGcb5",
  "key8": "5Hfwuc6ffpb3WVRdAwtoezXtcgKWVTkP7yj9vK6RqLRLoy5LP9gZF7BAZgvokaeMhHjwYLL5K9rrpiuNkJXadogw",
  "key9": "2zQ1mjSoBGWReiffurgQjSr1ZbzqsYzUyL4BV3Eqqge6hKryjGPeimyeFjy7qSnSkbNSkVTBU65TesCkp2Ta53z1",
  "key10": "21HxLXLLKSgWDpxZ1ZRUz86sXSUvgzmu9QixXJLgMs8rdincMH7gbwZMzmFmViXnPU1vzZpVSJ2XRRPLsMfh3o5c",
  "key11": "5sr31HU8pmWjhwvr1whoKomcFNJYgryr8kgd1TUZxvUsFeC6eewx1FscRWxtTKamKzrALR9NET7CfAfx35eDvuqD",
  "key12": "55P116Er5whKUbSWuETizy7waCjkuHaR2SBo6221MC9LvwABhNmS8RKE8QmvVmxW6yAHJw9RDKtTtUwrs8cbiqKB",
  "key13": "3rfgZ9Bu4gbufQMjA4kHhw2sem8fq8eBxtbysx7kkU7VB67GWk5Unmnw7qckJPdcPeYZrBE8FBgafpoJWTz2xXBS",
  "key14": "5Xeuu6Fm9hvE2LerRxaKgFYD478VoKEcJdVyqF7nDqHtNDYChmYePvpov58hEQ1Dr98nQvCf3A8LtbAN2Lnyk9gz",
  "key15": "U7hpYF9NiiQFPnDMUyHVmyind3iyvyFx6gqdVwaXcH19QgoCuhvvza2k2B1hncFAeQj6dL6iFERJhcoES83jL57",
  "key16": "4Mv2NEAoCkJAhwZSMnDsoKXMJ4w8bVSz35P1FNQt6UhGex1z5hyAtnQBJjgTtSEokaUxNUmys9fLgSnNDpv2SEfV",
  "key17": "3qXWK9idX6atNAkKbEcCT64j4PPfYRfW3WQszvDKxMUuZc6NAm56gCur7xz2EjBWBSbjsgscf4Ux3bwCHqcgahBv",
  "key18": "conDrnHRhitkzcpECfQMLw4NvbtF3GwtUnE95aMeLwiDfN2Xa8vjfF5rXHG8Sqytp7HMZCFJGkz28KLLqVB22sh",
  "key19": "c9M3HfCYyLynEPFwUBjsAdcy1UYAyuXqKDRjeT7D6rusov8nhj9auA1jj3KBUStNbC1FzUc32bVurDuY55FQZyK",
  "key20": "5iZUijYLjLstQWGf27evG9TNr7rVsTMmioBC77sLexqmwetHYoumiaD1ouFFWW2UinHYCirWBVNvamBR4UieQrFu",
  "key21": "2ZdU6wgfvABcpB65GLkcgeYqAbiLL5h5GjEGK9BSMezqBohMRLPBBa5YF2o2W3FS7LN4RvGUgKNKjcjdWZk2JsYF",
  "key22": "2HNnyo8WvGSj9jhpUy5AXAzpcP5ZZrC8b1rpETH73omGAX5YcEwDn3h79mJi6taDXKtvLvtH7JBMwtAxcqag8Nt5",
  "key23": "3krtPyAtsASJPNp7Q8ca1VVxiE8U3hSQinryToETLKwnbkP4zDPNnDnGyLVesUTRrMCaz1ubc3qX29zxrDy2VdQt",
  "key24": "AzDVuHuKY2CtGoMpGbmeboJBB4GTmFjvYCZxbRac2WbgwhnK7RoTYtydv7MgAAfeQGo94pCfBYNUh7JeEdWfQ89",
  "key25": "49TCz2NLhFppBWfuJeNFNMTREmQoTUHskaVTtpr8op9A2Rx7JhunqiF8DSJbgnu7v8Atd2tkGfuaqPWk529j8DqH",
  "key26": "4yhCLHpZLsCzi2fVQUSB6NxH4KrH7HfigXkvx9rHuu7dKVWHSrTB3gfA7ABHGZDbGxbNLJmSnNtJcHBX4iD478qf",
  "key27": "qGQinHgBmsVHc2vtfGnWAJUgMaMpiH2jk6nQ1KzyanwUaEtm8zYrdq4qcbjZ7qmzzBqQreMaw2jyDJeEGUccXRR",
  "key28": "2yaRTJ12cvYDZQ3XEqoyM2kjyyXdGxd8KCs998a63RAzQzxiB1Ds93yPr4g7Pkiqt8M6TsbxzYsNXES5yd6SxV1x"
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
