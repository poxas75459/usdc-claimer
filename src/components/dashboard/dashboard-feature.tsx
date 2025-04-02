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
    "2cPbngJKgmMUfVLTe2f3jAP8yC7oxXMGgFjmtS8uzkHSjbEoJaF83M5DMsfE1Xgsd7YoEX4fNbjvJXphckabjKQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3diFaqhKc9qQCHbdJYnjeP2RAtQvtrEWmbm1nT7nwMETeTcyDMfDqrudo2BJZiaaH1E5Dq2mftDMGn1VNf2hPL7E",
  "key1": "3tJx4rYUTsgE46tZkTQcYh2DUc8h6mViGd51cSFMVHBLTzcjR9Qt2914snBrCT4Qb8bHYpvaftGpYfuHJUn292At",
  "key2": "4fShRv29KG6AoP6CZ7N3mxgjPEJPC1J8NtH7M7BLE8YKZLX8y5URTpFzsTuknumunxY1d4Nw1vThTSCstMfZhHar",
  "key3": "4t7jQCLRpC1CdA7bVdMTiSQ3QokiaxkRGKB41mzkRQAfxvYr3rhYwVgyyaTwvS7HdS5be6bgto6jWw3SHScpKyq7",
  "key4": "5WidWVJpwN3yCFTMV1qmKzUGp53fVwwyHT23bYAyeGb78sikhKPiVPRpib4DukK7PYyUaG3chd5Fo1YUnFXpJ6AA",
  "key5": "DG3RsQ4y1gSmWbBc8s2isKWsJjQLB4NMtCaCVERd84qUj6vJXL39Q47rLr59o8weXSb6tYka7UdF9csxuEFefgD",
  "key6": "3fTVxUxEudFSuLTuQAyh6hANpptbZrVN2jbwhXuN5FihjcGgZt25XVipdRaM4aMBSdNmfWYJ5LojW6ioauewStS5",
  "key7": "449mxh74AXkq3RkRmsVE9ASxfojZqqQ8h83mGGE7Fs9LwwRVsaKY7qwvLmdhPvYjGNpvaa8N9tu6tsMn7tiSbZqc",
  "key8": "PCUPdB8EX3feHgEkexQTH4vjJs1omvZUjJeBBNKUQR8eCUSQGQA5fwT8YkYgSPr7Nw5w96rdMs7sRQrvxaNq9bM",
  "key9": "4cGCcFRpN6N8W6h35ePi6Z7bzukMkJVaAW7kN2jHaeiFTTQGWBrQwDBBcyGYwyAuS1XJ1YQmCcGvxbrG4Vd9Z5xu",
  "key10": "esnkZj1qtkPL1JVH3Ti1pphLxfUQoRXR9K3QvbTi71WTRdZYMUHsHiz37p7ExumuHqqvQCkJz6xLQrhjaVkTWHk",
  "key11": "226qmLAvAkHL1kFenWhGipPjxRbefZbGiCAEXAP5gahUxSVcmcehadP9xgTS1iWUFhA1vUTmND9sBW1eZfXPQJMs",
  "key12": "3BajmKVkzUYxcAEokSrYi8D9EHJcjxKcGZBd6CsqSp27ZdDBuhtbQYtbgAkZVHWDMxSzLLk7FQSS9Cwihenrn9Zx",
  "key13": "4b1A43hTLLSAuWjdGJgaASmddKXP9YuhoadNitVti8JHzbBi2e8sKvHeEaWyFUVLdxmiqv1UPG99crpBeFTnuNCJ",
  "key14": "mHQywBRzwEaHDkCFx6fnCUNndgPHkuevAVoCxghS3Yn52X78vVgVEL887VetLJ1Jpth6T9K2T7SFV47WDMKqwqg",
  "key15": "3brfDvSa1Rrhr3EpFfG8kczGjYeDkufV7Dk8Jw7pg2wGymFPeywQBwrwQT9r2jx5i57WQCZ6Ns7sRfWadEXHYWxd",
  "key16": "5cWmpykYpNfwAQ26u2TAjvSk53LTKNA4WHPVYhr4kmzeaYv3NY8QTuUJms83n6Ui4mE8ZcPo3K9xduFQikhWdibt",
  "key17": "5KpZBEJwZjHrKh4AtJxxqLDkhDvAwANgQVXLSbrdB1GqR83jZfG3mbcQLvzoY5fjaTDwEXHdDNCYJsMVNFaz9dnW",
  "key18": "66eBiPqwu4u21DmM8inzZMN3hc2YG2zhYNakLyt2M8HB6r3hHTcbxcLTT6kqWm2QjWkrdVFEK2pQrMpMU5N9Lhww",
  "key19": "5BA7B5QTYjRCcq1DoGLjpPdFKeWjFwBSy3MFtLSSGMZazag39ZfrKrUvRNUdPak4T4mCaYiz25uf8vXYwka5ZmnY",
  "key20": "4ECYZ9QXsu86ZCB5gQfeP1VM2imgMybtrHmA2oC8cboc7ErEucJJf58GYqYSqMqwWSe8eNMHG6C2Monw1RZGMSX",
  "key21": "37SYL6pz78ws5WRqFGPFatNA15kcci9b1JCJnzob541ijCUycYfAUuwuMXRzutMUHewM61Nh3oNQuLgEd5JZhUTY",
  "key22": "2emyhCKfDgLZ9Rpc2RehJxJZEk1iAXCRzzvkiHHtWuZuEGhNzkUnGKfpHiMSGwWpqcMxUBKCdSuMwQerwGMrVu1g",
  "key23": "yhLqauQ1U9Ep5oL2jJxhcXVZ39RUGs8gR9kKqKhYs5WdbsngZFbTtmLQsYHDeB5JpDZ3WwoW5FFES4ZKD81XCEm",
  "key24": "3XgsgrkuEwhsgtmjtm9Zh1pHC5KAyJzJpAWnpETqf2ChFbrXuqzbD9PFmhZcY1Aq6Muy3QJaxBhH7m6zPZus565k",
  "key25": "5gLZm5VanuBi53QGMJgUxgKKvCMGumcQXJUaKGZd8CHiM3f46KwovcxsW9U6fZMV45oZNZFy8H1Fim46zdty1LR5",
  "key26": "Z5gTAqTe6rtXA4EJNyiLy41pcTrtozxdAsQuni7niy3UWcoH3zve39J2h2bN6DkXdGeCw7QueZp2sjtrtJxPBkS"
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
