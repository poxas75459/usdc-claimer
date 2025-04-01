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
    "SEEbWteZzsxzYe2uhUrG5b9TFZYDgUKUMSYePdzJKm39nEQNMWD27fNFLyFBfFD5GuuSURepcJGVW2buqNze6u2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TGQgHNUvtzvjUDi3iMSYuxN42TshYxtc7preQLGa6j5MKRbuSZiwyJhgCF3xeCL3rbJMVuXKCWf9EwGRgW4mynu",
  "key1": "3VjUZ3iUzaNW3b4UA9PaxMHk5JBPmn9Q2ieEk9Rb2jFujVhmwSeX5V6tmALKg2Pahp1jYfZU98ZbSCWm5ygG3wDx",
  "key2": "3j1Qkjj8ZYkpqcao5CmkPdtRo4eqayvuxyCVrCpChGU81SHVMoKdAJFyiwfreM49s9DKZybPSUm5egDStgmKCioz",
  "key3": "4Bp2cuC6CByu83zCQYpqCAat1TqHwVs7e33TuoXMw3HFZ4nDLeWfEno9yaJ4dGnXSTSH5FbP2CNu6ux5gu7VakAb",
  "key4": "5RXUhPgRgZSKAKtVC4mS7GZ8ckMhMmwir5woHVRi2qYYAJym8CDYNXkYjU7hExnwcsCot5oB1Z7fWt23Xswd5op9",
  "key5": "Xp5TRtyrCtxAwJ5v4o66g7PnFfGLxK4bkHLT4vrMfGAUEE6hkGfDN3MxfVtC6sA2PrNiEoo5TENDEMyN5bZWw12",
  "key6": "57FwQrYqoWgbfk8APzVMWcbw2fnoKe5eWdyAREv2cmKMuCrNxhUVNUq6getfMf2KCEhYRRb6zeZUa1yBcCdmGi43",
  "key7": "7KrxAq5KHM2kpGFrxVP1dUQajvY2abLe3fxZ6rxecGcZh1w8wf1AWFB7RzEiPRff8Ljby98PHhaE8YdSDQhvNFg",
  "key8": "5ffJ35DP4qPv6BoMLjMjxQxDFxx4unD4Wy3BpmBS1A9Y8HTe85bv14JJz7kSwD3tGNuw8m9SkqVfyahFeXMsjgib",
  "key9": "377Aft7y6LBU9sK3frSQn7WVoCXrvsBVrYBe7xcPZrnQQivBkDJyAoauUDNTCy9PZXinZtHkWHhEWYJ5tn5BKxtk",
  "key10": "3kjF7Drqp84U8w2C2nR5Ar9ZSQx4te1pz8BUtj3dvMMN3RV2Vb6jQvQaBWzNcUGafiNbt7xDgw2mnWPZttxB16h",
  "key11": "4d2p4Gt5YAKQgV2Hi1k8JCYoS8mXzq1UxHBC5cdXtJrX16eQ64hKfQzt8zHAyN7c2U2ZytksMAgahp7cAVrxJwU6",
  "key12": "25z47i5JBHqcTrdHwRAHsUJrdXNmvpgLZQcEyo3zbfevfpy64Gc8wZmfeZQPQ5VMyitvTNf8m4QGfDhGD9yR7Vnt",
  "key13": "51Vb5VZTf7Wm3czA7fd7BuzhQtNS4yvFSoGKvDMTbAr8Znh7TuURZqszZY13qFRAGyZaycMsfcCH6Tkepp8jbFND",
  "key14": "2ghTVea5Z3PhfscLVs1qPg4YYBmC17mJeNbzZCDv1wcctPEzg7yGbJvohNuLjPpwwzY8JS9zZzQ4wP1CUejXsbxs",
  "key15": "5tQUbQtttcbczjfcaz8xyZLczSZiezS3xfx3PzKSGzXpxK2DbidWAxBJf1ikeQ5BXSrRinSRho9iPAunmVhRNqrX",
  "key16": "3FWjqwHsb3LX4LXJpy5bhLeRTHY9ezd8Gcb1r9Lwi81FraCjiUC3JVFKdUwcGHaHWqAHN3WDCQTsTg7PFBJjoCTw",
  "key17": "5YzzLApa5LPy8GA2PE5qAJ2Ew3RxHWDe6Ht7jk7EWvFLRTAiZcgy4KbaSdvJLK4yYmJ26TDBwfGdB3oUCnyibSF2",
  "key18": "3J5NVdR32TFqghNp6DQ58p8H24EoGS8YnHAdF4hUpkh7pKStcgnEC59BFYfcCSs3dGgtkdbBJBNedEhovkowqEmH",
  "key19": "64gUwp8CeQG5a3saeuxigodtM5YqQaQDxZQXWdE1AiJdAq4AmShXShL23aXLN29G2Ktr8qZTSxgA1d6GxHREPYTC",
  "key20": "asJ1pBRAb2QrkVxzxE4kCHF6xAMMH3zZvsfeW9m6y9b7mNjLZD4cn9VaU67W9A6VrpPrKCT2ictYNdQ3jYPYz87",
  "key21": "2JrPMDWrA3FpQhf7VcHDcXPrafT25BFQDBgn6oPALtxBuQ3tKSa4NTk6RsYMDcGtp2XXPVyeKEuWyxo8cinTrDNc",
  "key22": "5xjELvzAN5KCE3UxNmWLaKzoVzWHwsauptLBMKnDf9W9AXFGZPFPieuhKLXLt2B4zd7QRALTr81fSVTZDH34D2yi",
  "key23": "yYPrFvyCdSMeEPmbDUzsB2Jjp8X33b7XuGcCLMiqZzHfSdrQVY9y7dnh7uj7fjiE1gmXBsD3cunWNzwBDx98Dct",
  "key24": "4A5Ta2z5XrtZaZQAgKjHHqmCm5dXknQft29xc2ugH7u7x2ii2P45DM6JnyUoBr1DVyy7Qq1TGrguAYqWXApReahJ",
  "key25": "TR4Eqr932fyqvg5TtYgCHZdD2bBH9TkfyuFBRihhHejykudjRyBn8CmCy2S3F7pndszzuimzKtKcgURiHYFnz4o"
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
