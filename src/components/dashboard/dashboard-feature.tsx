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
    "5MYLxE5fDDAYqX3zjw6ToR1n5R269FRgCaoEUNpPByjNJy2JetkbtozKwzyvn1CA8USg96g257mvFgaBZV86KDcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2adHQKqqvDGgF4aTiJ9MuKyPYYGCJrzuTwkETgHS9rbX3wU9zehGDAgbXsFQKh64teGRoij2Tkb1dA6RjjdCxEqZ",
  "key1": "2ZxKmeoAtuARdFhRFQZ2qdH4m148YGL3kZHVAk19rzHj3EDsEG5F82hKFv93jS5BGYQE6ySHCNfWPz17kKdAeYkv",
  "key2": "2FzrG8HuvGyySSXFg4xb1caLYgcPn7keJ12XQJRwWbzwhz2jMSsCxrSBAyVBsknKcnFPPxLumF6rKFtqQzFPdAPj",
  "key3": "66j8ibTiVuCBV5AFVmmbWCcPqTX5oa79xcsa1EbvhrsQGFK7DjnBT5ZyTP7GpNXWSj9HydqsJ3zTpQpGmPVvq4qa",
  "key4": "2xyn7txxhWEcMM9keTWuDL2D3TtJpSZR2c7vG5ukPztSLVw7TQsnU2t56woqhTvpQ33E83nacp8qU4bpJJEw16tb",
  "key5": "2pzf2LyjeMRteHgFBkfoSu3Wec4TsirZRnAPKdB6cDftp937B9KSJ9FBjXa4rZPSSCPVrW2ZR1uzBtk8gDZaNWb8",
  "key6": "4HgZiK9eUQUmEjr4AvUvfBmqxbnzwHdMmSgFJd81RGiBehscmjbMhtJ4zc1tLmHWSdNMCCg7RngRfyNjBiTdVxbH",
  "key7": "28D1Kbd1HQTvKVSmqYYiXjLzMaTyeqbVRex34cCnNiMUjnmDWx8pfwFJijnVVwhmaAi2Q1beokLY2y2Qu8MnReba",
  "key8": "61cDnuVghpeowqtCa7LcJ9ZevQJyhZP6TnHHwLJg6r7Ukf8BPgVQfMcaLdYDHp2kgTMcAQ43ewv5yignmweuY3Vs",
  "key9": "39JYLG68w1rw9ZDPko65FJ4xYQUtUyWg4nhXVCXaNesyD8nTzqPegM9MbCSJ9GQ7Lgoe7S6PjHWKN5u2uCzuYpAg",
  "key10": "3gGqfyZcz1bYSk9ejbSaFKJYnxLgcVgJsH4ytJR4mUsawkbkuQCQrfF3zich4ZCD1zM3DgqyWKbRz8eSbkbvP82",
  "key11": "2nwJg8Gcwi51SumaUFVbFoYibnCpZEBEK2twRP8FUrRcHnqFx9DyJU27iGURKmNPkHVTKCyzG7istiysahjVtATA",
  "key12": "2boGgzwRpwP6dmMSk8XghYiRCgoX44JC63KQe31nddAwFx2aA26peYTzbsYkn42LVwHVBXE1VmbFEm3WvAysAwVY",
  "key13": "LsgBUR4qEZHcFaNesnV1dBDJ8XrX2PC41X3v8Uh8tKTEB1XV5uK3m2K6T88gdA6QSmj7prBtenJXXNTKciDw4tt",
  "key14": "6JYrruLjLN3H3oLw1vk6rtHtbwQQyqzfpqvd3rd9oNLhW1HtvGx9jk5yt2Q38BWdTL9PmUXDcKVhEAQkc71KrvV",
  "key15": "2CTxs3qRRpHza2yNSQv4qfDBnYax3c3bhSToY6i2mAJeuCFUCFGKrmhKoxnSUdCUXH9ENd7rU4VuaWAoryj72f7o",
  "key16": "34tbati6PNbLRX4Kd6xMATk5vG9DYJuXzGEFuyxANydD9BGmRAVW86sU4kESx637ayVAhmxVVfktoz5tARd896EG",
  "key17": "5b35ZKvsqXkfLU2R92CvrmukU8GEyaZ6brJSmiC74DFRTxvSjr7e2Da4eXcude6xsHeDUYAUQPPtpLTRp9nrYQ6o",
  "key18": "4Me2XktKBBZF4wHVrLRM5o1wQYkvwvLcv8k88Mi9Kicz5f8dvxSwzJpXZTjWS6EGmxrYopX8nPqcrRiZGA8wunNb",
  "key19": "5nfZ8DBXdeNfb6XmT31gZAXoXsQaXaMwZdrp6TcPZho1MN2g2VZoJ1AAAkwxGhxv8Tt7uBse1KZyQSS9cEFx2mnQ",
  "key20": "5wxYsxuS4r7vUG55bmUsxYDPiywDSM35Xg2DnpKCwRiXpjUNHLFEK89f5WWQSCS87iydaPtE2oTGuZqS6HuS7J5h",
  "key21": "5gNY3rRBpjLLJTJV1SdGhrjMDyRw1NSsYNjAYTRhJPU4GtPudtvmSeDxekcz1igfupHcEEGMbGeVS2oPygAGBhYh",
  "key22": "4WGduFLUhUJQFarLj57nrbqwNArf8kwxLGFBefzS8vo9GSNHJJvspRxwoEQJeAW3zNoiXjfSoFXfzW5RHqLCXUrH",
  "key23": "5Z4S94ufmWkvPCo7Gt7xKLvUpEjR6XHSq7BptXC5sGoUmdx362zd7VAP8K5T9kQ2YfRbkQb85vQpn1R5ZW2LwJwq",
  "key24": "4YU72Go3FPPm5AB8wbFHNka4TU44aFmMPKBz9t7H5TAjtMBPT2XtqM6h1TZta5kvA2oMbDqUMVnposp5TLzqkFwT",
  "key25": "2X9RHfFqwqnWvEhL7yuMCQNn22dfUEKFsxVg3vXUtD71k5FYHxfLn9C1W5LTPWqTW6QXStNpM47TDjqEub225KdC"
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
