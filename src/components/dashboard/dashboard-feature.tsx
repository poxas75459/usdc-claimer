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
    "44rCkki4mdaCdY7TZVuP6NQxxoPVvnXKSFpXNZYRwP22SLi2RQeLWyeSA5caSxgSV8ttCPMPiLHD5v5nTqkhMS7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XpZ1pEipg2pw6rR4rfxFYogm3DTjoeiRRmhni5N8Z7WkD1JrW8uhQ8CJKTtQJ7w768H8NARmKEDaaKYB4MNae3a",
  "key1": "2DPGanFYYVVbkzagKYJHv7ZgCE5LN7KHUX9guXzBXUqv5QXfqNuUomF8ExV7SDLa7uZctfm8wym6DCoCLaoUEFDE",
  "key2": "1UBMyQ4P2jHGmJiYxAoWYNDjWUWKqe25CXxjYwdcW6PeVvBMxErN8mSAgYXaxs2BP96vBXQYGHd6tzSYQfx5w2B",
  "key3": "4oR67QSpmPYRNk1ThwMLknw2qpHXaCo8ZwDVJ4o4QdUfSuJCL2LEwGyKawgGVe5nfkfdsMhQWDyAyewhwxfHFVXf",
  "key4": "5BEAfQL5NfnpXmBsE3n3NZNGhVxBZBk9WF9iqbMXS5YBkW9K2iu185e6vpxdmRN2bFCMJCh4ZvZis3nwifz1f6dk",
  "key5": "3zBFWXNyFYURqhnuuqAHpxPJ5P5M2DsqZ9FG1DEUVXNxp2Q34RrCP78rtsZqogTEdg97LnPS1YFpybYDV95HxZ8w",
  "key6": "2ftZxe8DhSxNfDDtiGZ7nEtsrfWfBQ9Vr83LpJ5c1jn4SkHZUHMNDY6EBPzGQH3vGNXY4q42vMFd5S72FWWX368V",
  "key7": "2f9MTdRRoyBPiHRjUiafxsV9Qo2aM8F84BNq3roBywSfAAzfdUxWTxQLgWk4MYKzqDDLZQnzGhjpMkkydXnYpXvt",
  "key8": "tPWzf2DLNb57uoANCfNpx6tT3A18LG76eDRyNfyLdJ9g3vDyDAQP6JBEckt5Ys9pTep3HNzZc76Tgou5qqECrVA",
  "key9": "2nKLqPLbnc5d7wEG8sjRgV4NzTqkEmgBCfH8KuxgxBJx22s9NBMN6U2u1BrQVBUDxn1nKbJaasKazhKPr7CXPizM",
  "key10": "3gppLwNrFpcDMLzaGK8c2rhTx56z1nrp9FcrXUSSUh2voCqdXocEYrVjfxwRQgppoAquCurwMMP3KLMsyrAX1fRm",
  "key11": "S13B9uVm1PLpK81vA7jCgaDYJnXFRMt6d9uvcPyKSho4qM4kVwMWhNkHFNSVhZwnfHuLStKfgkGpqD4pnjyGKT7",
  "key12": "21WPVqSmdJ4n8nU5QidpUyFsxnER3bWVYn4G5dt84dL9L1YHbJaBRGk6yn5dbEEjvvx5iqn9NCCcNChZ56Gaoua8",
  "key13": "4Q6suuWHsTGZ8tLxNq6m6W4a6E57ujBNYWDaNgiwieFG5v5FthEWcAkcLnXa71oLyBr8zaHFvtyniHD9q6iob8Bb",
  "key14": "4WrkUpZ38HmQaD6Pvv3u4DFvxCTydPy4Xpez5nR2RDhcJs1tupK2Dawy4ycmhtMmwZSSsVpx6MuyCNfwwPCF9rcG",
  "key15": "44w1Kd6y34oXueAPcrUfk8WUA83zDuXMrHVMQi2dtqEg3ygiKEP9ihFPQZU7tiy2pTTGkJCGRrb9zLm12Z2ewwZ4",
  "key16": "jGog7xv5fBUFqqoibTmNT3FeD1md2tyt6FQxswNFXoGGwpevN3DE9eDFxAKrwbqXkoTj2JNZtpsKCoxiE9aw8an",
  "key17": "eqAsJ1B3vLA8RhY1GQiCqtQxf52w3gBmt2AaWDHc6v5MMXwwZxMtYVcmx2AyJ2erDfthjis8N2F6iREN6hyxC2U",
  "key18": "Foebfdk1CbVpnaBTPBWrtQMhKJxiSFq7CamvjiEP5JVC2nU4f1RZULaowMfQ6qFy3C9XTBoh9p3pPuuaT8Mr3rT",
  "key19": "28tg7JBAS9y8DafKv6SRBAKgM9mTqaGZfLVoxZ7AqkQLhqV5RgEsiq5PJ2FRiMpTm3MCtWm86njtMZf9QrfSiGyq",
  "key20": "5fVmpn9hJ7YnFDd3dzkJGsopaFJTE7nX4bxU3sAy4c6y5HdxVgtFwTc5KM3vzXewTQpwaSVY9cFUEkKEbuFxnPy2",
  "key21": "4CL6bqXgMpAYzKuxVLoQsG5117BcA89effAXSEHNnjuKoX84GNzQtt5YCgysVeBPt2T9rVaJS9pwLyuNFRyFkg1F",
  "key22": "5GhcSvjr8dD61P7R5X65ENfsga5fsTrhXHAZDb9VVcEVoiErzjjwZUUp2KjuvmAn4guX2gdfDMczZL73gAp9qv31",
  "key23": "48jeX2Xh5LeDnjhSaWdkBACtw6FExvEy3YRdQr4L4ahmNqbeJoXm7rYyoBgAz8kzxWgKQy28C2jC44VEByJSaJCB",
  "key24": "5aDKw1mJz6TpXHVdt1C1EmckbuXKSFq9QvXM1wGSw9CJ5HsACdEiNnK1cj1J9uJHB7jtZwnByhZV9bE6S8t52w3W",
  "key25": "tvPKk5jVUH59bJmnCg7uoFiAXXjvgnYpxmbfJjbFjNR61CrWcCxw6NaYKXGREAY7s5FbEERuR6PSpTG81RYAVXz"
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
