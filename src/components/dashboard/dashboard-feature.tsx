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
    "65vEU27zXe21ymfL8JiwmdHb1GGJgm9ZgyQ3Qn2NJhgNs4b8HWk3JKXpt1noyAgpkBHCMpNzJ7pqxNqdmA4XouJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KqfRqXVJoQ8ZtRFoqFm5urPyq3m6KVWfzfZeAC57P2kcgps7mEEzmHhL1k7jM1VRHn6Ggjq1gz6ygQN1Ymk4AA3",
  "key1": "R6oWfDMsUXbFUpXkmYUoHjG4VVakCdLgG8BD3pA6jY5w7kze3EMSAwktL2JQV8Awaz4RMtpSYv89R5K9qJobNWg",
  "key2": "G86uZVMB5rh3tJfwpCh31Fn4AbDUMqHksRZD3CPFAxYPkc6CdjPrTRMRAmUZLjUGENo3vXedofUr9HEqrHsRUxi",
  "key3": "4WdRHigYkaoR8SK3Zyws7mgScZoNvgePLcdG1dK4At66EY637BYGjZFdiLdxjGoqXW5xiXTSc5gSG94oJ3v3hpNc",
  "key4": "2tW9nVm3mBAGHvSHyQMfq98N92HnCb583AD3DfJJFEufGNKMTGdWGYekXnFCERYgfoZMhaG7fY6a2MycA6skoJiz",
  "key5": "45zA7gALGzKfwJoD6JuEsbzYuHRw6xrxg8atj1cRdw1kdGaGKaoZjW1W2p3Jvz7JftuCKm8n7ja23xBupHuTzgpw",
  "key6": "2FWTxL2dRsFK9YHDDS3RpFFbopR39f2GYMc2gB3xGxzmTJry8vggkKLZ7MAQn45CGEeH293LVTRcdyRjyzZBegkM",
  "key7": "5jaKULsVmsXdJMpGU5t7Nv8WJMPuDdd345vdL2atn7xUqZBNHt4zDBTRneV3AKFrKWWuABLxUWVj2rSvuKVqy2fh",
  "key8": "49qPUKqPBHyfqcB7oV1r2M26BGz99XwXtXJvq897Qk6picj43og9StbjYeqeiLXeDQgWgzxoT9n4Nax8NNnGXy1m",
  "key9": "47tNC3wtS3LxFPR5H4m6A6Bc5Phw2nq4KzftkrjozWeVkVqFayQj5PaRMPESjrJs6pT2VV1snEeJvci9z2gDhEmE",
  "key10": "2K2XWW6PqqpZAfdivpuBwwoEbA55egYrUQx8qfVj44Xk4JUBbQXjTxyZme2Ei2ikhnV8bNr9fkhugdejsooF2XXt",
  "key11": "5gkASa1HUofgFDqLKNJmcfcNj5AA2qkMMakh7ZobFnDrxcNhJ25TZGon38mac29DdWLa2duQmVGQRoyAUoThnAGq",
  "key12": "2TdxdRdoXYKrTKDkivNfcMDEEnWysyu3u73zC72psGsWC4bQU6VBytPpvqFLE1y6BZo3bqkjBLwLzfbjyCf3CHAK",
  "key13": "5fjE2dyapWn9hXPpm8wj71euyQ5YjiWizGYykMpMbPECpiPuyAX55ZwyiAVFZ4yb4w2YxuLKKCZGTd2aekJ7CHLo",
  "key14": "3N3e1wP8DgukQZj9Dzbidny4dJqdAjbiyQotMsk8VLR8YVoXb2raJcnAwBKzVNC88YTFBVWZMouQ3H5fbC3R2H9d",
  "key15": "2fGvKaXRYTeY1tT7FU3R1DToUc4BmC1VrL7snuKkiy9UzegDvC2u66rnZQXc1HLEi7MxkGbnkKuiCnMwnuTmSvso",
  "key16": "33GvfeZWDALZyXtJSM5H6jYcNi1GNFUVUD9MGEacE1gbnommdkx5uUjyiiG25D1dzswSANmFRQMDdVboT8pwrjhx",
  "key17": "3nNWEQs4oS5rCpa8sXEdo1NxNAGzcUztgSnPacvtU2EpaZkxPLiQtE8t36jvstwwB3cMwJU3e6kwFhYCR5aHWrk3",
  "key18": "F97jHvrTYyop71LAz5komNCKXr8EvBpH54C9kq3umQzhk1A1tgc4V98KvgdwTLDqvu2AqGnCKtFhGwipgMFJSj9",
  "key19": "4UFC5VrMT6K8MzsxVBnD1NE5C8JTKbwf7rP8RRPwk5kMV8YEbkeg3rRasT4gB6g99a9TzhDokpLo5rJUCxDYgkpd",
  "key20": "4SeUb6bZzcbWrxpchxKeGAoUUas5xi4bGNVn24SbK494ueEHYGXggH9tPUdmUhtx9KL7qc76Vqv2v7r5Ry6JqSgc",
  "key21": "55pqUbfGn5j3TqAiZwsYKKpy8UP5NR23yZTFiwxgXae11KfhzvwEx1nv1uVZRkFqteNtM4pHMiRevVozCpB4wjk1",
  "key22": "2eFSJCP6hmRS5xiBCTyXms6bRpwS8YTd2mNMW6d7SUr4vRH5U9ANLzCfWnYzsy1hmykSQrufW7HVVTTqLFCVCimz",
  "key23": "3YsceT8JynAipQkexRUkXrt1yZ1ENc21KePh2zZ4RtoPzZQo6gZmV8Vn6mPRPPzVLDw3j72TC6K4hsJR4oCKY5eb",
  "key24": "64FDNdtRF1Hr7mSB8DCuwM84GZuafcA9vJHY2QyhmaGLJf8dicPyA9Jz8NSuXjmgUYJ9XAT1Uxvser5C67NGuYyv",
  "key25": "51Ki193ohnUh7Kw9HLqHcfihM751E3mUbhA762CsWT3cb6kNNay2yEMYpJV4iAr2KQ8fvHEXLCkgWz8T3abuhd1i",
  "key26": "MGCXa1LvDQouaRr2LHwEeUCWmLNgcCJMR9qafFk3f7ThcXS71tJdytPiiybBSu3mdQKQAtANmrfTodmeYxtXzW3"
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
