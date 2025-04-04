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
    "5bUuv7SERoGNDWRN3PdnzrD7Edpi9LX9UGZmbu6ZX6tGiWvVqUtVcBBDSfHXb5ENJ4bkSMvZLDnPcj3jc6sBn15p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZcM7KTa85L44pxkzsuVGYAUgKL1jEayVHuPM2XpvMYaUCUNkxYDBVW5RS4AcoU3tkgqhudAKDa2fhSjycxyTUx",
  "key1": "3WeMYioZVHBGCp8wv66TXza2Yk1L7UbTue6SFUQn2JjQP552NNNZiK1rNkqpA7gYx3FjnzyF7fPsVFdYNEheJCHq",
  "key2": "2DBSvCjjDS2H1pMcZahiqTLdyGisEiCTkAM6pAS59vwyoYPfAVm7sZsg4SEZv78aXXwGZDJZkrsyrmc8fKAGnFEq",
  "key3": "4SYsqMyYfXYsosrqXGZWXGReV97Zy4wBfWQNCAofQggiTfwbzhYajpXHofExyHgjY6Le5m6uYYjU3hsRd6R6R7yg",
  "key4": "yQm3LUQtowj7tTaG1Tk6UTACSShMwRMHhWTxsovQr8CUGy4DTcdVX9YGuWfcEme4HcVZKP8L1k19kaVNmvAQiod",
  "key5": "3xfSpZ2PFG6Ces2sx2FmMvbTCrVtZVdGeWgwV8YUtkgsM2HKYqRrzHgnTtkPSVrqhvWoSd5FSbfMMmZ51hkhvTXf",
  "key6": "5PSy9tEPF2PduSWjAsYGyaLXXkQGx8cKSihm6Y9LDqsj2WtC8zQrXBgC7dxM7uFdyHFXoUCGxEWRtcjsRTommMn",
  "key7": "AfR4QRb1D3HVRQ8St4n9sVFeiNm95UVtprGW7AEpveWZvksaYETuPjV92Np8hsPsQaAKaK1FMPMkTuH5D2XZU6V",
  "key8": "mLsVDRKUsC1T1rtexaStt2ZHPENQsPTUQLp6ZampbwtAEbjBmxFRYn36mDD24iC3EADbFhQUJCQKZPiGfnpmgg1",
  "key9": "4a8D1AhSEr2UiuHaKo35XH34NtmcrrXwNPZm19sLnKiFMMSexjTPmTGBWKehrsjWrvTaamCVHmzn6fE64Q5gWCoZ",
  "key10": "5ko8aPAr1kEUEGPKXbDp4pbePeWDBbacXTaqzsPD9sRy5zeQd9Nyfhp8ZFjDyWabgFKRh3RN38tRm9rk8Pw57hpB",
  "key11": "5gvTLR9RGuM1dikoCxSrmJhJEM4JdMvdRahyhfWU9NGbC3hFqGS2puzgM5B1kzhk71WjTzETcr2mnGiynwefxY5a",
  "key12": "reTdcY8g4jyDLC8fkEsJHKTh3QBKJPCV9ZMTPdMAVajP1Pp3cjvfSjzN4tYRvK84rxc2QAP5W3TAukzH9F8vZqg",
  "key13": "3uDPChBQ6X6i9qsPNTqp7dpjJrjBDqpwgDWbBCyNsuYewkYLbMPeUDFFT5NjFqu5XMTzgykkgS6FvabhWYvXv2Fa",
  "key14": "65ikMtWtda8boFrZwfmSgtTgfARDMHb48PxWkpv2Ai6JgSQM1t2gboUfosamwUJU4LnpGobzNcHqZe8LgbD6o5Rj",
  "key15": "4fqgZaoRXYZXDjHiDf2MtLMxqcqkqJaUG15ajpq4L44wJrqaTpn2UgMM7vxWYUzT8R6eM8UAWd1QorNwf86n7uge",
  "key16": "2T2vuuXWM5RAcamirL6sdbD8T9ewcxUo8n6M5Zz99jpSUgHPhS6Ziu6cGL5CF3mWGjhJYKS8A5y1juhDBkSAB8M7",
  "key17": "49gp8dx41WFjHLgzCUaS326zgFQB27DX68wv8uLX8E5HtqYTNTkG6DjRDv87u5wCvmfJnt5EYbGypLbpqavRqthm",
  "key18": "3JMhme2prH3rtSEM3Bpcs5mmphe9amXbGK6Ab8ExXPUYL6ykoCeRFWqqsvgQbdfMpV3yraziXNkyTjXkywYBG3WW",
  "key19": "4gVDZFUo4kF4YJxiHw9b5j977GqhZ7NQCBC6VV79E9h2ypoR23e55dWJbzcD5ogc1rK7VSsMiLPRtZmQcb3k3sYh",
  "key20": "2bcx5zTcvyJvKDQkMmG7UkgeXVdCuS5ymYk1mJa4STycaGx36Fh4QDuwrCFTjr7YS5PwUJGXESfbeKf8fV3qAEby",
  "key21": "3Ga7H6U8nJzpbvWcYdU2bF7SJEmMmJTFhc9GZK4jmG8AAji4x7rKUaU5rNnSD2zgN2UB29M7T8GmzxHp39LNhYKY",
  "key22": "4DLbwgNyZ4Scp1ru59VyUdMnp3cKCChBj1WLostofzZXstLpGqriXUgyKTwmjW2J4zQ3U1esj8DvFcnkTVcg6FSW",
  "key23": "3GZudAC7SukwxPHHFsMibtBRJ59tDRsVwXpPr5J5yomfhEG7EULQykjeTWpTyZm4Em2wY3Kd8nijgehPXY3pFkhK",
  "key24": "2yehuFVXR4ET7L6VCtKspmXWE1XL6tDDJKcMst2WSXST9JNufVrBtcRryLNkSdnbweG6ghd2ussMxD8g4SfF18xn",
  "key25": "4TMJmDa4KbLWJmcWfPJfSEwYAh2EQsWoRMSGEEBbS6AMyEBeXNBG9qkcRaY2tJaMeyh5msQgxNduDqKYxNPXi622",
  "key26": "2jj6zabsSjSkenxtjRR2aNJHMcFoPHN2rWVDCbepzommDUgcpvYGo7NeWtC6bDSs8569KbjMm378UVX2AGT39UVk"
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
