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
    "4yQzmbJUS2eZrpNhCvvKvfE5MMUBmeHYj6CFwhugwhWGAVjpph56R6giXEnnzX3tLbDJ3n1J3U1hBatUFthL98im"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67UTWSyrFAy5BLiKHjEiXPhTxpohLgG1sy89ja7TYiZnih6AUEH7KyPRoguoTW6KESfqa1iowUDCajjYA1D4XJwB",
  "key1": "5CUvWCr9DcM6wQpNQSyNURP3NHC46uYsaoLRhgKPy4ZnzNLnQXHiXnTeAeuHLM9McGWVRBqpQek29AUYxacNER9t",
  "key2": "2VqUvzrZQ8ETA9M9CgbMVj4buQyZwpadHj4GJb8HjRPNYLqz67hoQpc6a1gvgZVqTn6VXLdJieYyncUxc4MGF3ba",
  "key3": "5DvV5e3pbe9aTTPkv5CZvMZN3k2wkAe2jufyhUA8D4t2TJFx3wexpe4d4mFrfGNQ5iKStchVrUQMtRmEzQ1ks8qE",
  "key4": "5we6BTUnppdCgFY1ndUph4wQTdQ8hBAY7xUHbLW5WbLRJZ8aUGZG1o7CzFyQ1EQg5oQWKSsp7wescQD76hT3rqFG",
  "key5": "5G2g9wLE2P6LnJoZyWENvBDH23NCdVjb8WGXivR55AqN9VGNySKZdrc1EzZP45CBi4RHVtT4GobyrKPJqAQto3sH",
  "key6": "4BnVpC3XWuiTXtBoecbatzkQG3T1JFkyMUaNbRU2vmvFhWQDuLYynE6Vvvuyg7vBShrFNkM9a4ZwRKCPtx68ott4",
  "key7": "5ZPM7FK4odfU6cdd9RcKyGLaP3USjWXZ2b956BS3ne1KhfCxdnrk1WG7TD8drumpctqXjHBFCkEEa4d4F7ScoSWD",
  "key8": "5o2dppu5sT6pBwjJXi8wQbxquU4JwA78eKhe3dkFEEwhnmweB3L17vQkA7qprFpPnauueCMZk8H8f98jvQ1YN72p",
  "key9": "5UJ4SkJ83XuZTLnjXey27Xh9wh76kLS2qgw15dYzDF7ZBGyc7baoNn5SVs7HPveti2ciQmfEP58QQ5chrg42usUK",
  "key10": "2fKFP5hPEqW9Je5PPQYydegV2Rcw8bd4inQMXsvmwYmqP574iSXY4b9NbiPjEg3Xfrr62Eyed4fxnEUTzGke3Ark",
  "key11": "38sxwrVtSbQQVANYE3n3wQQQLSJR4pgerk8RbLVTrerPunn1vvaKuJ9kSdjW1p1wADDwXA2MPRVmrxoBaktjmqnW",
  "key12": "4mQEWQ9p7XxJNLFx3nwbeabiaJrS5HfdaZWN5x6Cv9GMPnEYQHmsDkXt7SkypcT2YZ6FbKnwSAdMf2WY7RSBYTgS",
  "key13": "4baEwGXFMM6zzynBD6VjoSLe2irCBSvSCsH7w8fruf4rrBFAafLU1PrkvHbJ2uf8H9NVmKGM8csftz2TrSqHABqk",
  "key14": "3AP8MNRUJvufgzowb9JD5ojhALcvPRTBAH6deRW6ruBF5LnRuDWpuRioWAsUNfUX8jTJfUcRVceafSNV2SCGWop8",
  "key15": "2WSYhbuQ8dVKv9HGwFKviiQSA7X4rE2Xmnb9nqnouxM3d92U1DYRsA54MTWnXxiaJEBuNoh5PfHy6c8ggDesqtk7",
  "key16": "5UtzWiqECFbLPeuzsdjNXvhytVFPg38iujpaF9LCgowuKdpczExMmrWX9P9yS84NVt9pnPdbbVEFFXWi9XQsyVwf",
  "key17": "65YkFxC6NLq2RN1BBBXRUANGPmku8TWFP1c2Bb6bB7wdJUfrX8LtkRNZb8oqHqgVqi1EyyQMrJFLv4qDe18V2kwr",
  "key18": "4hkQ4onNFsPNXQQBwTuoPtFCMF5iSCMsu4H2v51nSm6sHEUBiwZfRSrhZQkwdFAPkzNEgVysrdN8KCzs7URB694w",
  "key19": "2Yre32atGZaJgXF4nHP5tzmZVRVh4FtPd5v5J1hdRmBESu7zsB57nVNAPXxktkCU1kypqgBxGoBByHYFhgyvfEMm",
  "key20": "3E6srsEYbKoR5yJcqJmur3fxwhrWjFoLkvLvji6rnep1vhsMKbBVSS32x35BVu5nUm7nFcvddSBF2SMz1fa4v5gE",
  "key21": "2P6TXkgu9tGtvAmTBczXJsbK5k9oHXZCFBgMuZ84vjDowuLXFdA19pt5HjBzVheaQDYJdjQbfYPd8PT1E5hXtjCa",
  "key22": "2E58pS9v76KAr1TzEe2HBBYWxKMoryQKbbLBwfCwsZfeU62W4pmd2prz3QnbqisMsfBqK8QDTo3FVnsBw4gJwPkv",
  "key23": "37ZbsQ5vskQv1Vpm2buk7icGJSBMCSuhPaqTsXNmVWFojqVBQzNRLffbvcnN8BWdAoY1RaSHdD82YVqDfdHJUiat",
  "key24": "4KfAzmSPAuFTR2DXYXVFPVyeUSdRg1chRuCHDdUaDXCKhZCzfAjY4Sa7R2TDVL3yAegmzpqbNJhrE5cHW1zwfPZj",
  "key25": "KmmUM8Hujk2fWg24H5qF2ioxjD3rueNkcryjgyeGVYygvGxQtVYqc9yG4wykjvQNo6rpg4PPvnLxXMreNT639qs",
  "key26": "3jwMzZgiyqEyXtctRZJbRAymNuCnKqyNXE5Bbz5W79gidt3mTWjbcQhnMKti5vE7wJdp8rxwXv3qrMZow4Ngyrgx",
  "key27": "299NGcuJJ3qZ9sxhbFMAd1ZPi8zgjcZPxvU7j33bjj9i2D3ydWHVcmppwirR8qyvvREKnk4vejWX4XVtHYcutSXu",
  "key28": "WXcGVC1vd5jjTEouNJjeogjSTUo6ojYmYstBvGEv35DkP3xAVW15kJtEvsSBiVSyHB3RACkUYgqfJrB12kr8vWM",
  "key29": "4863j8evhbzKLr4bQ2m5JR29dCB88CscVKtwANec2s7KRT9ePdpCuWknvacjoAow4JHKesF43qhojxP93S1hj8eg",
  "key30": "2GYM7LodYwe19kUnfDrUP1rcsPVRcvjJNvonS7C1dFdFdq9euhsywbbkUC38gVq8F1xX9UYmFV7kgp3ycPjufsQY",
  "key31": "xVGwJdB8xnACSeMrH1oPF7JrWx9bgGENZZnhBNRMzKeKvVW5V1cx9ZGQL1csFRGMvs3twoG5JtQVBLnAXanDLZh",
  "key32": "JCuwrwVFMEy5tq7VDzUAf3XJuV4eCZ9yCpdCggVATposz5w6AoareejitbSZsaweWUnPV3iUMeUZY1cxtg3Ba5A"
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
