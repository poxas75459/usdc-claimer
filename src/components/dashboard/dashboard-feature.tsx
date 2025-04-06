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
    "5vRpBkjYG8jJZwBiwveJYQrKeJ22pfDkD3uZP8NA84ZCoufsy2XJESH4YhstvSc4RwVnUevHMqhhXF65MYH2ffoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ui9QstZJZJpYWW7btCdy6CkNoJSYnuG9CxfN9aZZcd9GNxp8mDFXR5jbP9TguiXXye1uw9uo3bB7nWiZbFd6iff",
  "key1": "5Zdm8993exHFXvBTVkss3g1zS8es5qfhXpbnYfhR6xwFNSDnVyKjjoBtoqR6suKBwvuWj2BcNgiqdg3f2CXQRkj3",
  "key2": "4vqnwF9bJu6DNuxpdQPuFrnp8omw6Pw8oLcuzakYvtnyAXfEMgSF4VjjuALUqhQduUGBG78dVtTbrQdLxcW6t5hf",
  "key3": "3MRNbSc3dEtJWxcwRtc9dUufVPMLeduEcc3Gdxvf1HYznLN4ZB47dxDSPAmgioRnzvXds17614B7PxgJMQw1yNgP",
  "key4": "HJxMZYwAwKizKWn5yoSYdoDhg5dG7Yt5TKMbZNs8jvZPXyqgiPrG7jaRRTYRGuZjASirUpSM2K4hFULdHcqpBMv",
  "key5": "5yK8D9f19WESgAYfLfYJoZdVzKJ1id14jMjDTuwsJEd5PJRj2XBjv58cDgXApkAtMXvzkEu7FWWEcyuimiZdtfDW",
  "key6": "5FD1repwYHkLVacS9uF1QpQuoTXt53tSiiCdvKtmBcVTEejTHi6j1H4QCEB5PaUV2LxrpzrCSb2cKXqM3qLeod9o",
  "key7": "2i2zw4pf2YuZCoTST31L7D6YYcVVbEzKnppAyUahxrbWhrTLYy4jvuDWsG7UT7N36VE94eYMxdrZjL2vM1JfY5Bs",
  "key8": "35fciiMeJKJwuu3C97hVDq772ouExSxXQTVUE8rDPpkY7jV5GY4HDrHiaJeucHew6fJaSpEVcAsALXyt6ZreuD2G",
  "key9": "SSUFEDmbqdspm3RahSM2qyJ7Afa9DEj8iFF1Fmthsii2DXMFeFza7yfaL9TtskfFJSogGX1vCLNCVZoGA3WhCHF",
  "key10": "3rAHEYKr8XJHpGo3uZLSPtDTzwqKVQNdg2rKXrVkN757yDNW28sZX51xcY8z5rR5d9tjMy2GBC5LHF5Q7EkfEgB3",
  "key11": "4PBFNzzaTTyv4oS2gKqPgYA1rj4eqULj1GTv5KMQ64eBX6paPxdmTzuv7Scr6zkrbwHMGv6eg2jiA8RyPMM2VYrL",
  "key12": "4a7G3WPN4cNKTVTcnjvZRzT63XA4iKPGkc6Af7zmzawyd3Wb4BUKqt5ZhLs41UJiNuEZTVXfoJd919euBTwtRfts",
  "key13": "4xWo6GFKmrGzBFm26jf6LxLdftfd9Pdi3L75FW1YRiZSZmvLuap5E7Foxy6Y5xeTjZp7Uth7RJBELXomHGUcKrUq",
  "key14": "2ZvgTY8wdy4EnYdRgrQmx6CFWfK6Lh5Zyo8jiTMoRtHhjBVeNV773hqMTe51UERKuEAcpJMakT7VuANYjcTpui8o",
  "key15": "2WFrnKmCj2TpjxCPEpzxLbrtNvhdTHHmFij3UiapYuyUoAMVAKozm1kMvLRk9Dd79h86yP4BmDNGLXPsgnRqSg9P",
  "key16": "2DR84YLcUkMcXVVQz83cHUCN6TRE2CE2SWw7hFqXyjUeSsn6HWwLwQy7xe6iTmGKJCNcmLdJNQPJnuMEQLA1cq2B",
  "key17": "64iREF42tN762BtbPtAwhW4sKRppeSKEtF7c3nYmovbxpGKqXWUvYGsn1U9kCMnYeMmnzozAuPKa1QemtY7aCu8q",
  "key18": "295gGTR5pUChRpCN4xp41fiVAa7n1kSt8n9uW9qRxATpRnLvbeKuvtDJDGCU1gBtKUsDw7HyypnE95guXCB2mmov",
  "key19": "5eYmVmiAVqhUCxSy88oPw8SJC2w7qTzFcP2wh5HfVH9qcH69brpm3KaaRgxLEimNDXzNaFZnzDVFct96UGvh8TTg",
  "key20": "4D8QjgC4G8vNmaGrYVtGyQw4stbWdqrwqczVPAgFc2dNL4AVfjRMvStMsKCbYTCwcsj7kspAV5Jn1NPzs5TMud8T",
  "key21": "2hsCjwjvHycZMv5aoTuXejHZznT4CsjtJUuR7VRCtiJPLtvUX5RKTpMf3YnYBZbpkh1WahUDG3DM9z4f2mVyRKun",
  "key22": "4QqqQvzukAr2U1ApqLPoDcVyXYnjDgisWxvK5Y6WA4HyDYz3R4v999FpCNj9Buc2ygW718VefHBMSPty7EBhhJh4",
  "key23": "3S4Rm8omki6JgD3aAu1azGB2uHfVrvSrWpkr3aV9iEEiVqcpdujEcvDPDGcJ9xvqxKQW57Na85s5qvMySFHNbSJR",
  "key24": "4rNWwRbtR7o6cLdzhe3cNYiB9QazXMPuEuaQ9mjn2S8n8gB9xFt9TteSspfdnHnFxLkSQYEubrGHbzRYHZUGGNAw",
  "key25": "5mhwLCdXrxnRMTV1WnDJSCmFNz9XqZqfTmopTysjSF6r8s9vwDvEYNZP9Q493gMWDRQpu3EA6dPsG44MGCsyCkFr",
  "key26": "5ZTrtP33G1ENuu9DXXBMMw4tCHGpr1fx6q4KbVzFRrUdB1Ytdod2xYE11raer58Uz8vQpA7LsgZZ76ESWZuJEzWi",
  "key27": "5eeDZYueeY3uRvW9QCAtMy1r4q5LxjKHJCY722fmfwpYXM36FVgs5bCM633KyqwURAURVbRGLrKD5QtRuL5wXR6n",
  "key28": "3YYHSmmrhi2poE1NX94ZPFbAj3qhZv4pw8P3FT4rt5byA8sT4ngnNqTvh7BtqUW8RJPPVah5LB8m1VtMRCGSF87c",
  "key29": "GqkH3qMhSdwChvjXX6ri7sVf8vwVq9eWAQfQH4ps2ACKov73Mb4qXqdd59mWJgmLqfKMGWPgkeKoGPW9BUFWP24",
  "key30": "38HwdnhLSvL3tQKuRQ3qj2VJxee3yE3Xg7yr6LjQRzeTu871jt8XLAseP4c2q4fRa7nEMPNGtpGnH6LtZkk1BCMQ",
  "key31": "4jGBgPT7vVnYCwcmNkp64MEku3w4KMZj9qZ9CwZrsbs3GNGGwzGiw1cuhY2FGNP9X4xGbjyML9NyV8pRsWcNJzWV",
  "key32": "2N9LGL7xfKsHEFiFKxYjpkeYQhoCzjaTd8yFezxyHuwHoQ26HtE2GLnRApK6in7VRy711AS41LqMecTagcfpNkxk",
  "key33": "3wuv5nGvhHdJJXhPk6APD1nfV2qq8mJYyYgy3hvi5e2XLTDoaT486BrYaaXAWRfSTrG68cVFxwbDDQH9SC16Z6wS",
  "key34": "5FL5N5tCFjdKkDf6i6C2tFpSMDZArL2t42n6kmXSETgtsWJqM5uH6k5MEc57Lqu6sbn4eXnqn2zUDajsT9dq1QK7",
  "key35": "52oJYrLpXTGNsjYXNUPMPf5KPcsYeV4Bun6fQbnWubJZEAhz5j99FpY1CEd8aNtE6NiaNAaQ5hdynwLopYumnmzz"
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
