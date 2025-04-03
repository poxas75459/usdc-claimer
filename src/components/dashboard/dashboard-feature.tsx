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
    "4XTf1SfyUDxJU7hzMLge3EjBCHr8vyma3ZCDwV1EMheETZeY4TduWojCeCdeW2EuCZLRF1YyzHHxiUdsDJijKvtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "667GZoVaWHR3U4tV2uL6qRWvjdsWBhD7HTEUCRnF3HzNc2z8Geb8bnJhN5KoYccbvu3q3p7ExRNHXg7fRrNjGrFb",
  "key1": "19vuZ7Ptr3Wi3dviXX4BYjM86ComHfkCka32aUi1R4L4tCBgGBb4iFTBbwoTZNr7qzfe2h9ed1yY4cbhCeiBBfT",
  "key2": "5zFhEDedCNba4hwSMJGcaXbZE6obFVZoMetc2xa2WpAKoHWUJiFMfVgYhyrVP9UNqRtUWaGQojuHrpe6pT3eXB3q",
  "key3": "4fF8XNktU5LWx3uHf9FK2qe1vzTGjEpBDKkvi7KFLRfgNKjENqNYzs9zsh1U9GEH4HPD5fLXQwFnzHYur1gnAUVC",
  "key4": "2DbdTVHiXNwZDtisYuj3EccE5y92JFwkwihCu9CLh5wSFx8KvQrcfGFsbHgqibqKXc4Q848Hyp1QSDP9UUjzukWT",
  "key5": "5Rouch52LwmEpwyEgsshjr3BFRdKxysHff3vTNALnzFb3kr59E8wnnjrAQNbkry3on4TV1LN8dPDjtxNEkZPndMb",
  "key6": "yhrZ3eA9NhccvnSpQSzFN8W6MPBeEiFBWb2uubc3g1nQNi21pVVLeUoBPvbjNWucRVkJd6WM2YQmGfiUGC59PbB",
  "key7": "4Cjy6BnLktjGDxHpfYqhWzJuM8errGmsBgdRsgjjeQ91zu1VrztLreAeHcaspegcNbPEWRvDPp7Nvx5ddATPKcCg",
  "key8": "4m4SvPNGv5Ac3dHNo11VQCEYUauF28SMhSGhHuNq6DPUPq4tfp7o4UGK4G1pui5Am8ZvJsunBxWWUaJwmPymwMNZ",
  "key9": "5XMMqJZaczNqVZR8LdtrKevYS8yamtyp5SisYV4saMsu7kCoNhErnD2qyuyVYuUuFUFQxpwmvah9Sjm7ArU3h9NZ",
  "key10": "11Ak5PLZD7KEBDEzZEG1Eysc9FqSnTw3zdvoWy8c8yWd7Q9T8CmsDnTuf5jcQhSyizbz9NG4D3pPLKwjwFNUYax",
  "key11": "5EHT6P3J499JmYF6VTWWUtix3Bpy3ksY7HBfWXj33ReDVBLi2NnCEcES9rddxpKHsesxmo5nxU3WMcPzrnMxMSwJ",
  "key12": "59wZX3Ve6vnfKJqi8NGumqTE9URsCgNJyzejJtggwF5xMYLSm2V5Ge2goS3UDtYwGmqWG9xNyYFnA4w5qKa4qhJu",
  "key13": "3ckbczQ6Fym8niZ2tfqdt8SkkynqCzNjGB8n2U3qi3CoUueh3GV16hEZgB3nzSQC7Qz1BDy7CXyCTADYzdGzT82b",
  "key14": "5xrc4wJWnNG4ibJPZGtYK4eHRBQ7bib4FV46BeLZhjSmgmEvLJYTfPAiK5GNQcWsca9tmuPBMRpcR4JGJCcsKGMD",
  "key15": "2ag4CW6G9BxuRgAwueasDBCZi55GuVMtDtFs4HFtsW5y2dFfh1ExXeTpogLng8vi4LzrBAd69kYffqH3cCJHfzTG",
  "key16": "5yNkxs1MsPBLZpwVVcVoKT6jHeoWEsLMYBPAn5L2AXHaXkhTfM121tVuPPV1Q4Tu154LE9EGB5urVoMCtM8vWqef",
  "key17": "2U3F8kWkJAfxzKLZSN5xcg599Je9ndE88qSiM3PBXYvh25rTMKA7ZHtedsQZLhRYhGuUshFghFkHXnBVBPWH6acU",
  "key18": "3TAURghGLYuSaZmrcSk38j1yo5oYtzzCXpFzyv8ki4F1xrSMP8ggjJfeJx3R2dqFzbCz3UhJmS8BPyEVQ3BAUisC",
  "key19": "2k3AK9pe7jgdXjEZHuh8twhrkRf8HZT1G1T8kymrnCSsf38AssKf83895Z5nGHdRNofrKyuPcxhmqPzuvNS9f8pR",
  "key20": "4skaT82f58mTxhzdcnYcdhPDGG4w1cnSBv37aMBsm81NX8YkAxLSeAKfLvnRmBWNh2yMbc4jzSP8ppDqbZsfYa5Z",
  "key21": "4jZNgi3unRvu38JWwkyVLYhGxEGi7vryvqvMUaW9yNyFSJSvUPAQ68HnuwNgk5qE3YkoyBvt8jB7DV8286YoMwes",
  "key22": "45G77GMAiwfbgs37V1m5N763PDdsRN9qQtCnG64EpS5MH6opxMGLMreUJeyW8ZAF1svxKiMPFgBngzfDsT1t8cjV",
  "key23": "4f72niPhqQUQrAZVJJjWJG6vuzNy8fEBvEfdd8E6jef615JosZBHDA3u1V7pY9b1uzXsUXgkCXbo3xyVSwMqAGV1",
  "key24": "Fny6ZuFsdsitQC5wqW8Cr7SceuHQXzr2SDiNk3s8RmoW6Wpy5nUXyB2PM6kHRxPVzC3rvrce2U6wy9u4gNagd6N",
  "key25": "2kPAPkdKSYxTsWRXXgaWBw9sjJT33Piv4jrtHAyHMJGzznR4pJBFBXaseHSqUwSjkwFsPiKjzGYPzQSbLrXwyCNK",
  "key26": "5LtC7frK54C8cFj73UvLHjftejif1sZdrQ1LR3FCoLpzVZKRFwQafVcVhLwVLwy3oUpPJUnrd6fHvSun1M1ydXKn",
  "key27": "2pGWTjVXgxsNu7qNNHk5VfeCdwVZztjnvyQkr3mnTTJNvP3QAPonYrwFC9B5GGoMbAL89jJT1hkP54tN2e3fWf6t",
  "key28": "4DNnGgrUVzk6TY8sDERsfmKTU87upCEc5SoUQTBrUDQXotGq4DfxjBjdMThQyxtjNeBy1n6e2C6cci86ybsK8cXo",
  "key29": "5jw6XhZXkvzeTTaE6iH77X6gPCMHUFXg8MbZvFdUcCXCmhoTn73vixggcot2R2NukHT8hX2Uk1UkcZpvCFkq6cDn",
  "key30": "3zTTcCsSyxbbeJ9Hf6RNVr5sLWqom6RbD1btXwVMnq5BoiGxvY45QtP7XvqXrCxa3f8CAjpEPiFDTnV1Fs8vR6RN"
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
