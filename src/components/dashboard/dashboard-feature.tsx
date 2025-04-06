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
    "5HSwmTVZD4prDSUBpg4131GXJrZiktZVikrWEBtkiYs1DEGtgRoncpgUz5f563Dum3EihEpetoMQasCiQtG2Zyez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a4AcpF9NThiv1TaBQ52C71YUzWtK9Jt7qR7DRwA7ynwPdgR7MpDoUvUCKWe1LHQSWSVi4Ux35meg66dQcom1KeV",
  "key1": "3NBmi9AkEZnx9gao47soZ4hiw4v1AHVqJzjPWKf2qdM7LQBPbNfpwSauaQfoFS5CWPfJcNHLvojXr8XhGLyyPgr7",
  "key2": "2cY3k4A3ctRSbyFsgx9ikFiVkYitXyJA25qmBH5upqnw2pjUPSBSBYvgmmR66zdFfjkXevxnrXe18zPf9Ruvv1fG",
  "key3": "3D1Ay8pkCbQ1hSCkZARmojBgh5DMMuh3p13TWKU27L1KZTz4pABbQozyjsLzKrgNueHYiHKYEx36cKQuG8FdWBmZ",
  "key4": "4gKYZBsRQEre1WnXFYnv197FV3y7KyXf8y5japd9gGqjqTEbtnNsWkKF1jmAR2QwQTUaznKbd3k6FZQ8x6HFchGo",
  "key5": "2PrGZyWfdP6JY7oLqHj5cxWJ9hWzKoNmJTrANBB1X1HTiAhDq89pvNxyuwynv59rZjLGkqHAE1f6sVxfmSiiKoQ8",
  "key6": "vGqsEFBXXktj8mNt6mkegHyqgK4YovrxsizNAc2CCBNx2gTm7ZWHiBkGa15UvrggHU2aLNivoJ9cCqVEfAtPcja",
  "key7": "59QNqhL56B2EnGZZJFGxpQXnKskm32xjdgZgDriNKhe8kEetcTijWHDzFHREa5uLEVKQEFmcRd3gaMirXh3nskCE",
  "key8": "GaY1Hi8EbcDrQENXtDWL8VnGdCXBNVVWQA9E1gizEg3RQuvwXcFrmQR3hziGtGdGFTgUYV6taefBdvqAwvX5Q9a",
  "key9": "5Gz4YoZRVd1MtpaW9FzRrT6MEHWPtQst4Nz3sr5b5Hw5cAF4eXV83uf4xpRDnjoE8gzE34PobvWXdcZP2skyWauG",
  "key10": "28rEhBNFhXu4peVENLiv3zuEGpnL44t8TsHbZuzM7MkAJqi7DnmX783YVR7zAGCLWr2Kn1H9Km8AjHoEvF5eu3kj",
  "key11": "3uib69ETnUssGDwekQzbuDdZ9Lp4N7czdVQnnhguZiCUzLxrLgJp2NvYgTNsX8nR1dEe6MFSP2fLqPdSpEsSd2yb",
  "key12": "4geibeRiMFpUCCrXTiWvWdYBvDi7UqB7Nr1LCDa17Amd4Z7QbZEcwmDfPaDVuxuppK4Qq3G3KBxBrtxfisrR6LAV",
  "key13": "2xZ6qgGuQwio34Rkr4tb2CsELF4NbdkPP48figRn7hB1TaBLEEtFKvDhePShktrC9ou2T8tA3y4ZdxAsipzEYxf2",
  "key14": "4B5hmEQ92cQRFV6cHD6HMmnHYxuvxPKFKDEvFcFKp1b3kKC9Mjg1b1z6DcRcFof78gWpuJtPgP1kdic1cdEAbxj4",
  "key15": "xwaQJXCCJk4siVynHtVRPYYNKSQdVQoN3h6BT9JWput2t4hEWRNkcHccQ6YAhyDPUE2VnVjLPpJ13t6q5wQmWrT",
  "key16": "4e3ktMgspNX4ie62ivBX7JqUfTzCVrpeKUYzznRkPdUufBufS673r5jVbwUVK6KGqJ2P2M42eYCAaQ1QzQZuj4fk",
  "key17": "PgszabB2KTovVkx12AZsY14rJ1PyoZdgJFJipkQwFPxgPNHumKnmfa3GX4nZYMmZ6LuNtFyvWLcwQLKTMcb6uCP",
  "key18": "3Mfmb9qsSrQHAgywCpDag7NzMbuJ3DTNyDNkGVWa2WZLb1rJuqmjwQjn96iC1ezVnQpmEHfxADafDLWfqqH5sNSB",
  "key19": "3nA22xzdFUwah3xqPa5tUqA6rsqGipyD8oQ2GAStJ96c1YUL661QuSQ6gK5KML9jVho1vT6V8p4gHHmTnxnHS1B2",
  "key20": "47Rhc6BPF97TrTwuBHazzu9L1n5XxAZnAbkWki1trXaeCc6SxdNw8qAaeTLySPsL2Js5MKLmckjc6w3gJZCjut46",
  "key21": "2UkeGH7bpGk5RCWFzgz9GqWauYsCUXgXaH7rEgRHS8ZzNRtKFGps2vuDAGmqRWLA5GJutUWrTfLTa3j5VwMG1SAL",
  "key22": "42cFVYaDxqFU1taJGgnVGZ12kEabv1WRYEgVVGLoL8RSRRV5oUQeQfJY3LFUo6bcPz7bgsJmACsP6S1hy9oqwfqJ",
  "key23": "3iz9iK5JNFxRPKAcJ5V368qZkTCnTRYBHmyufKwRgZCpz9axaBieqLyYAb42Lhq7WHkAMgdYLHfjpJewy7zGWavh",
  "key24": "3p5YadRfVpFwCL6hdpCbNSh4bGB2RsEGDiJu6CEQ2937tbce8hDRi2Bx3WiHWCYyWPaSCBk8Zq67xsMNVLf5wTUX",
  "key25": "47Q1XM9L1X6y1Zebvhvf2YADepJBadPYLkkQ87zbXGBtzFLCAYCNiSDoiUt73orBKknDtq3ymXQ5VJNfowGCG1B9",
  "key26": "3BHaq97AkqrU43ryvh3D5VKJ5fN7kYa5BdjZxRY6LyhMHyUNYP3y1T2DXX9VEHExHkJBaiQDAtFQuaCYstX35bVf",
  "key27": "3c2bxxhKFHoT1oGgh2asr9iVnTgY6pHLafRtkqF3ezYsQ2PEJrBDQYi6enLXrMFMFyiGnQg1CAhR1tUrZusgEG8y",
  "key28": "mHV59SHGbiAYojcMdpVdeWA1oZNUwnMZ7rfM7REvNstJncauQLB1XRyPeXCtWnPpKyU1jtM83QKp3na5fhCoHWn",
  "key29": "2EuaLMSQFn9wmzKpTNBCwmjZqVdDTMTjWMV6wBbNKXzcctZXJDDEhjZ6uhrKhHixruzW1yfxCNz6wswCZNM1ayAz"
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
