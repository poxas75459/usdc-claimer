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
    "5uNmgCke5k787xNo4RQovzmxSpineei45J6JfcUM64uQbWrapnUF161yVriNeBjCy1EwSPawPHrDitXoPRkZtrdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EzVPqiJpr5icuDucp9ugz9S27no1UFL4ua5dsGXWRDvCjmfV55WrtwDVrNoJMmgneczQKiPShpSTMyd7H7i1nXh",
  "key1": "48cWxS3ujffjLrDAG1eU7Ct4NNYDaRABcd2nd2hMz6PvEhKhzy18CWb9HGhmoLyFBjHNCZzXeyoU4H5scDXMyE7E",
  "key2": "47pS13BRfVWPfsMBzd31RwocG2FeQcYVdSWg44GnjTLkSHEfKFY4N3bPWc3WLjGCKDNMpWAJ7QM8Vuzv9krnn6q4",
  "key3": "2NNZM9qhtAVsJJBQ7ZbnsdErq4H9WXWLJBJvLZmfqMr3UCfCB4nTABQjQjYCjwfaUfXcdGKKkeQbdBMjdG9py1ey",
  "key4": "3wy3FauRT4cPMD38imDq5Rc4zt6HJmGnLpzcKfYBjxsWxjutngR1hV8CeMmzX7RzxenDudNuezQe1sSSHh6Enek4",
  "key5": "2eMGTupEMtzYbUa3MTrFG1CTNtTCyXKBk6hEZ2YaeT6RFxeyrR4YDhPWTTEL2jA9GEjw4bopigaFhd9VfufNgmdN",
  "key6": "5zT1umpsgjFRuFRLRBKTwbY6vyhi7aZoDU1JxVxVpbekHKKxMQGLVZy5PBjKkFGBaLDcCnKH8qjPvULq6w4opvNS",
  "key7": "2QKDtnNryWZKwvSHUE7eeuyVxa3GjTtmvQ2PcM3Mie6YfZsMMb1fLqXfzGWi92jZZMgZBcikK2fndmgrTjARcueL",
  "key8": "3HcNQCRxfAoVVrg7bgUxNdNpot5WPjUD9Q4fK1Av3cc9aavBv7Kbkc63ztMEd8mTiPoKWGJmLcr7kp5KdERMrcVg",
  "key9": "5wjrhji3EAozHtYuDhrngUmCjRbKZkB3F5xNyTE4pgr3LwVw495Lk27kuKpPVHrGUN6qvT4FRU3pXuJBdv5pDo9L",
  "key10": "7ZwYtE1674rq3BQxQ7Fxa5JUv4kfAgX55AtDZC1whq9x55doZf2QnijkbH6cA8UAfEG7o8SiATA7L775d3wMepf",
  "key11": "3M2AyCJqTbX4GXmHLLi6NPTTm3ntzLJiBSukL9WdyXVaJUVxpdFcDqNRtvJaW1h5zDE4Fsn9LEiJ596pGS7Us5oS",
  "key12": "4rPZHc4396oMDV72NPcUPyTiRBx5KTVRM66TPTQJvfpe37nmKYtzYb2g3fSdmc3KTS25tBfqNPaHvpbAJRM9qCVQ",
  "key13": "5NgxYzQVmkZoPrS7ysVmdJmipSJCC41gz3korovuRZyv668gPERoXyHaQWEqVqx3NotuamugDivy3VPs2m5Vh5V9",
  "key14": "4DsZptSie9wCMuQXT4h5MxunFBxj6mwvuLQ9sKF5s5MDpAW34xAQ6TZLjREcUxoafU5tNh9mvws9daqagFg4CsXr",
  "key15": "4ZoGZyXoTpm1NRHzuNYqxtJCrPGSiUn3ufRYXP5nP8fuyTWnULE5gTkXJfn9s5i9PXR6hxeFZzte6ZQ4hXXNcTRk",
  "key16": "5XvmwdjZJe64akt5WpQkoWPEm8exAkxGECVAae6JSeiVHPx7NpByaNPpGitFZD7re2C4GPWuu88SfEsBTgFAE5xM",
  "key17": "24z1EcaCDwbCd4MxgLU8en2dmKh52323Fp4rEsFAETfSbqGTzW1mvkoAFbM2YrJiGzMuG3RtpyBfVQNc1Fs6fHQS",
  "key18": "bk4jA1HPywwbRHDfZ8c1TPNzVQW4EjcKcs1ccPRkT753q4VbXADdAcHDbZwCqzwm2f9VQib6cV52ydSsNz4jtyg",
  "key19": "21uAXSVnHwQRHHry9FAhbgccr5qckSxvxgMYiCSk1WNEuiMdwoFHxRYWHGwx8T5k1eSK2RQVT54sgsWEydpu4e25",
  "key20": "2w5UZ5WCWPGdXJWMVQxY26FNAkjaAmRSLsXx82SDGa1HU8hDKK9KC6wsgmPPWazPt6YaKWZQmbg56roDXJptzZRQ",
  "key21": "2QRAuVnjazFJPmxt3VsidDokg6nezF26wEg3XL2ja95mEXhLPFxCJhBWvizuRZ8LaH2dxpUMAxWmwcAAo69pqiXt",
  "key22": "23eU1wK3gP7RpjmU62gKGNi1z41A3L2U8CDkPYu15deZcJtrWzGfUEvn5XfWGC93wj2n4KtPZSisDaSm8pq3EZMe",
  "key23": "61psiANNv1JBx522oy3zbRSTzwoJYpLLcXoRLKfsfXAUKrmRddV9QMv844uFhoPSZbYwvtpTMAS2P5Gg7wWV1nJB",
  "key24": "3mCPpDu5CEdFi66kEx4MNs8YJHnKCsVwwvacA3aLUpRoM7DQUx7jvk5a9vkFDdKoUf7fRLoVqdcFNfyyM8ZpQXQa",
  "key25": "4mPxS1ApWBF3z2TN342tDa6kcy2hNZ98DoCSu3QxCYPJnMrwx2ddciKEE1dQkxY3QosDDVtxKmcpgB1YtpFVSLN9",
  "key26": "3afcMfZ3wWk3ENAeSYovMLZ7xPobFuVVysMsPs8h5F2qay7KY3j9ycm2ysugTfK9FyYiDWrxArRxjtLqTmMnXjL5",
  "key27": "3X3rYC1f9NPp5tC273Az7k6ymNmUNGXUgCMZnXWYUnt9zE1VpuMVXWs9jb6qdoVaYt77PKBa1HNxXA1VdZ9TyAPQ"
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
