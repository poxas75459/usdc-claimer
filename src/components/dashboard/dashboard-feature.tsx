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
    "XQofQeWujLZxBj7fTTrk3VESnk29yJNQKWHPgbVtvks3QBowMBVVFXn69mwa6AwsgwEcDdikZNqWxyePFG9J8zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkwnkNgttZdhSdtw1jjrqvAwFWMdNcaNtSMsKk4VvPSLdpfyin9QS24D1haqnUwoY6Ft2YFR5xBp3XnzGniG7Ca",
  "key1": "yoBGNhkK34G299FTw9EeNQ1RPkBSzthA4X9GA6erDrEZViNRJrajc45QtacfYAsM6CZcFy1pEHVamUGdbSvA2ZL",
  "key2": "4SjavRbDfUWWjRwL8NMa8tR7233cxnwwFBmFboiCDmGfExmQV2jqnw5fDyMXTHoGKP9NDxsvme2pqnXgddEKuScz",
  "key3": "5YoxQJvs7NHMuBC9vGJvhGTFSzMzqdCaoeS4iPNStAjjgedPh1eiu9pNJbg6goME1bb9jGhL5P2U1DixZk67G7i5",
  "key4": "65W1cKDtji4LK5e8v1SdBKXBc78UiWRqsSZpQ49dYA1ZCDDz6E9Kgf1m4aWohya44UP91D1Fcadbgw1aJ9Hb99MM",
  "key5": "4ivJBsPmJ2YiSzLQjUYvJ2FQw7L8mBiTcQZbm9uGzvSJswNM6iQoA14JHJw6BgnazC95UiKeePMhBATxxp9zNEV5",
  "key6": "5sXkpaa3GJMiynA2YiQBRYDn2BweprRdR53cJeDbkGVoDTZLHDRUEsoc1CimeimmGttn5aJbX3YmKkaXMJUohv2V",
  "key7": "aPBXdQmKQ8t7zsoWASct2o1Ee87dnfjdJGhniN6k9Cy7JLupJCMQLzUguix771gRB8xaXi3wdSX34mo37cx5aD7",
  "key8": "YrnbC4XExQus1XgMKHBEYwoJQTyKKLqCrdKb1tt9LF4r4nYiX6BTVb1izBiRop8yxV196Hq64nS6Muh6imuFDHZ",
  "key9": "46tUiuxJ9TNhSWu1faBEHdZ8dTQHpCmgFB3n9SP7xkXQT1cS71SUK8SQeDDRjTVyEL21ngYADjTWUHz3YK9FKq7C",
  "key10": "2yw9ArYinqBxkEG6XqBzFqaqRcq4E8rNDjZrGwjhGB1HjxsmKCroBbPhQ1RvmqrUkd3hDHw5jrGGvbsUuP1fQazf",
  "key11": "4eCdgRDhBbFE51JkKNBroLQCmD7VMm8LHmtRmskinG4JJRdPbeidCWFRgAceZbuVuYGgRbjT4pGsiaVjeNZrjQVy",
  "key12": "N9RUVhxMcoaYPBRiXYxitQNcoeqwPqU8vgGbg5aKAQA8djHDZaZaKQJ7AK97GSJs6jvEM41Y7MVA6wW379cNzNQ",
  "key13": "65yrHTfpCP4bLhTuJ84uUdQQsLu1AvwaUaaMMd7Je5iKs1LZPneXGWDerg1poSkStUrUSRoDu4B4wsT5ZF5cm3rg",
  "key14": "2fsZAff9t1PUdZLrXmeGc5v6QZ4Wt3zGPtrgUnDqb1e9zbNXviUvfaCcHsWi2Bsm1uER7MM7C2z3Ma78AST4aJZX",
  "key15": "tzxPZugaj8BcJxSeN4iTeU2pkin38TNNJMWG24xmgTyNZkZgxfzBxiwQkBLkYdGngmaT49ZzK6C6GnzZE7PFjth",
  "key16": "AdDEQ4MiNBngBLm7zptLJJvv1a8Hijs456hZ96mU5yCuakBvRERDVfWMY1244Zh98oi7r4jRtQzccxj21yDeQnJ",
  "key17": "G3r4sTwhJreHT5ep5AJzMG5GSQKJbA37VMLKhJMdEjASH1Hb9PYKtqcDZ16t247N2XjeMxWtcuApy7T6oRDmQxm",
  "key18": "EGttekiKPokcccKvYxnLCxWf4NhYhAWCRMXb6FyMcoTe617uA5bbbFbNaD5uVSrFGMnUypZunXek2NeYiz8QHyV",
  "key19": "5U66w5VUUfTs8NZDXBT7gvc2dzgesbMtQGs1zF27zHgupngFaWCVwtHYNnYyNiYwqTkZFtytCqg9LSzZnQm3ajRL",
  "key20": "3XynkNBGaWmBP4AdqKEDGkCkRW4RH88gSFduGvK9ijtGX3TiUxXS9seixaNPhn86gsmZ5D2SGrvrfJeXzS5r5gKT",
  "key21": "4YEzWdN64tvQU1a6t3CRqBEqhm6Xwc8PSLfThkuJpsh3Uus2RcsUef9FtdBeMcRNkxRjBP7CEKuQjLgzqqe7ibQS",
  "key22": "QCUoL63eKnSiR6YzpcN1h2gthRVPiUXkQqbgACWszmauEfHPGXBpDeTtBrWArnfyvp8zzEZUUv5c51XL1xZCPUv",
  "key23": "5hjt9EDDtGxfyV3DLUXNCSPGvvkPdj2kqrAwj4W2jvdVPJ6Ax13kuGhduaHMA7AF6xxTJ7W7eSDVRnhKLaKoiQr9",
  "key24": "42VKM24PjGgDigTDUnc6U64JsuRXL5Mr6nxc1VmEU8Cs8BXQRQCNMmujXtQWo5TkpnBTvAGVBiZk58Urey3MPaVX",
  "key25": "3ktQianfHXC3iJ1ij4vUht9tL5eSKxvDTtGsAReZyEKqzi4v9MMScCTWhhpBQ1AdLCWfsKQBR2UTd6pqModiXj4F",
  "key26": "bbzmmBNNjpfovqyd6d12fpMMzw5mEpEw9YAsrxdmgqUn9454RyXNJkcBhrzTB4FxRo2qYmDtQ2L4NyRAN3o2Bv6",
  "key27": "3kw89fgC3r4caBworywkBWQwDPH9X5ZLyFgETSAhgvhQtbCEJfVvLZxmi6BGyrJxzdLF3zkPVC2wRE9MGJeZpinQ",
  "key28": "67D3ZKRA4V4XiJy3ij3F1Z4rqApZhYk5MS3r9bhr5UnYbGW4HVN98yk3A4b63y9u7GTKFkbTbbVe9ULFeYPfMsWp"
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
