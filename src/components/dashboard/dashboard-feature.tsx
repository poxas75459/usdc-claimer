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
    "cqB1LqH1LfVWMWPCBWDMFknYYH5EytaReXWCZG53BSNXH8mzCUAvzoLao2BKrGm7NPeHL2FQZrCWdKKGTMB5yAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6692gSBEiSpGRShkRAFutaaM7VsQELvyKaRkv62NbRFXf7dg52Jk5WyEPUWRMmwoSmeKHQz5eFyZKiRBfUxr5M2h",
  "key1": "2HWwug6unG1WA9TagVxaL7Mt7x6cxSp3L7czoKYNhpr1y8hYDGkibRpFT5mSDyq4Gw3hKArVdBM3EUXVwwdE2Uj9",
  "key2": "CUHMiRfGNy8XEJDdXkeA1Adm9VwQBeSQhRk2ThPST999UhJwuqBjbH3vd9s9ha8h6wufpFguqr22q7xKNPi4VXU",
  "key3": "eSuoXqZ2ni8SVnhhUscujsVxZuHb9BqLh2LPhXC24c6qv6QAKdzxdjHZnJ6u3ZWNicgnm9YeVGnjxj235nTmVRT",
  "key4": "4qUqvTzUxQ4CJC6uVvS6RMa8SrUZofFXWLtJfqaneRYwhSHxdbZXwL2toDZqJ94QdcQo6hiu3quB4dLFZDmmWRg5",
  "key5": "kPBc3wB39a91icrL8M7Y9yU2xXPiLh7rv8d8FzfoMnAKR2uCAYTLLscu2vtCqCdAtJy9xXiozKZcuAAiyWi3vfB",
  "key6": "5YnBE21JjF6HuEPeMN9APxBtR9ksnyZVNoaKD4xnTQD6QTp8f1TpFb1xDLoPzUCSMkDk2uzBFEETDsDbftAvdwfU",
  "key7": "47QXfBYa3vhRm9YtZ3GKgDjhQyb4AF6vr2xq5g2LoYQQbZcCQ5981i5YywENoi4yBKPPUEA8NsfMhiM3V67VuVwT",
  "key8": "4sZ7QAtMjdXbPAP7gGuazRBiQEiReNYzjQY864G4zF24fhdzifqvMwa3qSc4Mm9hNMHntkLy9LSpUSUUCifk343G",
  "key9": "3hwWH4UQ52KABT8Jo3Ej9XQiKFU13FJNdxogVepbZeBjxPmWARTNNMc366D4wfdfjU3D2MDnE8v6YZjNsLVXqXZh",
  "key10": "XvCTeVTvp12Dyaqmj3PgAsChf68pAJeRwKJpmVG7kTwywfnP8VT3KWTi6rQxKn6iVd4RwxEwbbuTzAofuCj5Pbk",
  "key11": "5qBNKrqDZfVSHK428Vz5nSzU7Hio14HoacWk8Gucm547rpZZDHftvVurNqBNPM8JUhsrhfFEbUaizmjdcNKKdwKJ",
  "key12": "2CzAXZK3nsNvmQuGezVBLSv2Ph2NZbwrZFiA8y1hHsycHVVcAwcBVXBWdVRgt2kg4WwPJnGC2wcr8db6mHtHK9LR",
  "key13": "3wMR9maL9BtyKkmuDXtWn9D9FMsjvSEUtfqXS3YCtiMhr2htN4tRjoD1DG6fcrJB4xL6eQT3dXxLBDvanwwAcB4z",
  "key14": "2V1BsV7p3j5eNFimExucaSvZz9N62yY1PN1RWDXLFyyZx8M9BfzQjppkXsVNuTYaVTu6HVbbK1DZ3o2YL1TAk7fR",
  "key15": "4TFsEoJpVjs8iXNFJajiFEF5h5FnBTeWhA5sZFbqJnt7qCcP22ngFWL79zQeUy8wwgL8WEapruWn4XAX6boWabYt",
  "key16": "2344RrEKc5g3ewvJGnUYqn2BapXyapfrrneEQQ26NXVc9NGtcMw6VMPaexR4p9UMLZVeEBFszKwmViL2NaMbwuGA",
  "key17": "aLWrh7JpsAAuDFjARwftrb1hUh4AACpmy3iJbCHWB2e3GDKTqaNjFyYQxhKeFsdzrXgFe8irz5hznh8r5fEXQXe",
  "key18": "2qrMtrqH9KaUWNQJNhM17v9xY6jRziCX2n63LB76oRqQbPwASpZT6GonzfagfqoGMD2iRpxcpJpKqMeNj9WPFy7a",
  "key19": "5J9u4njtGyFNDB5A3RfpXFcfpeDBSX8AcZjVamLAxXhi897YfvRDD4Ds1jukGupWsxkGReYXSZbxRBfBTdwXncLS",
  "key20": "baYXX2kLesr7DqTN63WjS61c2HANXs1ywpHPNKNxWJ59srjPf3F4877LTWrufnm7moXVxZd3J2vJP7c9gKT8cdc",
  "key21": "3BS1Gw7ggBHord3TnkxYC9jkUFbZgkegG9Lnkw5detjZL3wTsgPdJGHve1ifazaWTE5tXwP4ZjcAeHYQKD2oaXeo",
  "key22": "5Q7cSNHyonRKZa2G8bM5hHcRraRMpEC1x14wmfFBWWhCXNiGUVJjiJG7nHfUxgKQPfca1tDuuLgPCoXEfUCxaMUZ",
  "key23": "3vsSExGdqxC2WnDX4NoqqPcwFMLDkNa92ppuEnf5U78c7p41PDdAZMcuW71XGaz5GvJE8KdogGPRSjmxFL2SbokB",
  "key24": "5CKZru7UTogvhgYiXUokCRiLx2oTGBw3bhMBSZJ9QF4FzL4WVgtmmpGo6UsGqsdyHkJprhCPmdtXKCvSNQrTZmxA",
  "key25": "3SMZuyzcZqF6HTryHnthQPfVTxMxDKWLtBPL41c3oTn61d65VzNxDf3M52ufYFX5mwNRcqgUzcHWTE9BzNQiSqNq",
  "key26": "5j3hBXdPHa2fg6ALJWMhBC57MbWB5XWad7UKzQREqyYcvLnrTjrB3QtvDB9nRdU1MxYmNCZubfK2n9xsoainmw6m",
  "key27": "4ycwFLX8fhZNHbmxPHfJtdaW1e48ryAJhTMkVeDkYR2jvjLAGR2g5DWuYviXDBuRuTk3yCFVuvKfi3P3mGTHZC5w",
  "key28": "2viPLJz8ShwDDy2ukok9L7HxeP58meQtrYDZamK9AEibPCmqrCF1AkinndsewAXDPfChPPzUiAvL9bhN5e17caXQ"
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
