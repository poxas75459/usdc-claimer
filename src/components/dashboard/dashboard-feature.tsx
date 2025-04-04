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
    "mDgCNTfXaanMRGoJwtF7Ceh5mh56Qd5c3xW5W9jpwSQXjaRWcSB61j8teG1n8z9Qc7mJ9v9hnvJT8VHHDBTJFty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VVpWqp3XNnt74CcVp6WVRnXahSm5YQtUKvWLtxp9xmGbTqNZnaLbPVjyGHDgCV6cjL4hcm8SoSScRcbcdCJhKdu",
  "key1": "UiqqQB6JtaZ7T7sgUdGtjicjzXgWHnstqrVAPduyCSZZxQjBTtfuJDkaoKYFwMMWA3nQgUcCqVYf6wbAftic6R8",
  "key2": "4hF3ecedCD2dU9kFYEKiZvpN7jQJcyKRTXT5RvTb4p4HP3882sGRsdgm6oR3BrsbG1nG5F34dKg5MFWW52ydLtkw",
  "key3": "28ah52qnZG71uiyXHjmbB35Tz9pge7t5YxfXYj5txySNtJtyW7pCv7e1n45JEyN6VPZzSA4BADgrrpto9tCBCvHu",
  "key4": "2pVrgpy7E8Mm5BctLRhSjfgykpYY6CqKP13o7SiLVMUYefYXV215Dw5TwNknkJ6BoTzub9darXb9mTRBGgFB4yAb",
  "key5": "3Phk1vZ3jDUA746LabiyE8YNWGD49GVckqm5gA9GRXiAc1uS9mTCL8zhPtyfcGFUgf2ayivKXMDUzQFGwxDjfv6q",
  "key6": "5YxsPfAmUeerwgL3e69gCctVvvgsdHuFhX9KAD7JAfkPZyzuK4PaKNQ2hGBMnUi4WrLp3afpvqKwFXjxuSim943B",
  "key7": "3Xsybaq87FKyh3zfiEYqZhGUjHgFLJWz49Uv8kzRwix4JjM7NFpLh2n46NJwWYM2yqvc9M8vdo8kkWiPuGREDSaZ",
  "key8": "5YyWeyd1QrCsTtYizqxQapeWpYYp7S6TH4cq7ANRjDBfGfJNebgmLh49W5jn2r579Ju6dp2Wz41Nej64D7Q7PcBr",
  "key9": "3jiEMxPNKfp2P1uAs67qkWznwnbCnV14wKjQ7rL2towEDoXSQqan57Fnp6Tfxai5QqaFfEdDtERifhgzrgURCSTQ",
  "key10": "SKyP5taCdZHSy53DFT4LKhf3pB1o6MJTXox6BnqdEbZnPJxSRw7s4ksXHX2HG4SAWN6gJZ46YJ8mpBeEMra3JVu",
  "key11": "2ba4aoRgxDFHfjDGAwK5EABT187LWtM2C3JSydAk6zSkd3hZKo22p9jR8PX89tpQrRpLkHaGMABWaqMcTjBSukAv",
  "key12": "37CXvZSe3mduyzgJhRcggi5QzQHfn4eqCFbg6f83dba72PYgE8kvRSk9dAXnDyT7dRVpgU85dKBSz8zshAtgaiMs",
  "key13": "5bQ3wZ6EdbpG1MZX5TBW4ubLxKTB1eYGt3ZtbP6boNKPL9V7o4HSKtFMDdTzqfkbkz5MA5FB2Qk9uUASw3mM7rrN",
  "key14": "5ygjc18SC1TC7ViCbH65KXoFagshRz1DW2kMCF8bVd3rfrThasEKq5n14SbM2d61meTM7Lbt6QxHzc2MR1Wa4RAF",
  "key15": "5mEh2SV6pa16dFeE7EnquiXH91TZRMsFc2yTHQNPKH81DYRJtXCCdy3BPo1PDkN4Rdme9Uqv8aEHZk45XMiSm5Du",
  "key16": "4WT9hS4qAiFaf34eDZAmggFMtFaWMy1Z7a4ekHDNjjK25ehmRFAwcJfAad7ChBu1wprxn6Q4bQk1KGEENvDGsA3D",
  "key17": "e795QoxXqfDhcq3T2CmRSLzyn7Tzzic44eV9RZ2RABxWUtmYJXmYMiPN6ByxdYzSCtJtNvFbJ4NykCDyPrrNd63",
  "key18": "3DfPMzg2wK1t8ywGLHHFBbr5bw5jTQb1HEoyJ3Ez56rSHcW1URj58LAHbXCJARyLbha7GNDtAzYJMggxGXekJ76B",
  "key19": "3vPNVLwCQbgcnmuXqn2hAgDBoNS8okhEPaY8tGZBgmNq1ZYWi2B1uqiogmp8YQGf2EkEbmZiYBwkqbS65FS8rXLk",
  "key20": "csof5d8y8U3edsV2rNFNrGRfj6jK1CuhRL49pXkPsCciLStnHGLfqoBSacJcupejyjD4Z6dE4qQh8iLLXdg22q3",
  "key21": "io1sFm89UR4R5vwdDQe6z7Zfhxtvq91wmVF82bbaTZPEwnkr29Re2tj4QTWgGU6vr8EPLQwDWfcdcyUCmXPhpwL",
  "key22": "4Gq7kbvWfBoUQKfAD3Dgj1xd6jJkCfD2bv5BD3eHVoD7qKopmEY4yqr5vLNTVbdbTfEUbqqZvYFnZy3uQH59FLsN",
  "key23": "4uWdokNwQ2t4pRZQZStcWX64qEgxLU1m2s7nSjwoB4yVSLGDzRu1ewoHw6WSoU1F9NZoktKZqj6oYSR7UGoHPsnq",
  "key24": "4TBF5AZSVgQS2NiWALsdNnktHnDJxPoAhc8SVBZhm9nXjtvC3FfQst8pEVXGhVDkG26tuyYrcByK8PwvYxnQ9Z8S",
  "key25": "5hEib8Gn6vKLBTqs2bVprL7uhVJPwepjN89wqGweH3RZTzjUksi6YvFUhmdDAMDnVHCnHa4yqRuyutEwRwYXuG39"
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
