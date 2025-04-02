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
    "2XW4j3JzgGgdccg3GkCf6iVn6GXwdn23DXbX9tPVsme7QH7F6avRJogUPy9V8X8DkfbaEYhwNRXrbcVYfbYKkvS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542i11WdZzx4Lu2wddnyb2MpTCdUEhFzFzXKFFv3PeiTXy917aMBEknoRMeJdCF1W7hTj9T5KzJsDTunBe7Q55MC",
  "key1": "2cVDjmis84afwR6voA1K2znyaRoDYFUfrJy5b7vPBJC8FTm66LkoTKZeKy21N7Ma6LMP4JmapYUP1AKvpaZytJ5P",
  "key2": "jDrAcSMeSrdWsoypYuVcmoGdQEa9uA5pgKwzeNsbdNmfXytTww7K3XMcNZ4qmB7mGJBC6hzTZUUPxahTxQhTAWy",
  "key3": "54PoXgvz1CDVCvKVCWk3rkuRyk1VgeN6jrsYg6surtNuBwt7us2FwaVAa6NkSHBWaKh23V7R5QJnYMNdpu9yPC3D",
  "key4": "49WPv3EpHqBRobH36nvSF52LKn7R1BBcAJ8oKUkArXx3xS6nbMNFkMk2772LoKbQzB6f16WvUMSvNxNDtLKpzBhD",
  "key5": "3YoHTctjXE847sxsmTFZf7rHtBW4NE2nv5jvykj4UKG4Q2Ss48XY3t4qeUgFpe3GFT4soCDhx4N5dUbW5uRUTwvp",
  "key6": "3tSpuUEnEXsid2JRSz6nh67MkfyRPzWqJnXPLMVnG3cwPNdkTwoFozXGAK57nFp5QCkpRkF6pPLKDLxY5c9MvhEV",
  "key7": "VZg9xL2KSR8z1Kv5xvLYzbH9HQ5CyUq9kStvD2CTEnXuWxkXkRUKq3oGkL69ww5baiFq39Z2WyeuMqaupuxD8ZP",
  "key8": "3aDXUgmMcbgPDURWJuN2cim31NBx11XqAfFYk1Py9Z1iBhzDcSCKvzbSMoCBxLsGZofM2i93qXRinxxLZHpXUN5Y",
  "key9": "628d7RPLQ537yvUTDpHRjDuyFc7RdCJfdETPiRTXexTgsJn1vfSqAh5xxW5haPXPt7LxsSdFhgWyZna6hJsvmLap",
  "key10": "3wZwnwWixoNceY5AY28cyZFSDQ3dm54aVPtd65fvvoWvGUniPR1RUXMmTB6gek66x5g6tvkywG7DuzpKGtDdqAdu",
  "key11": "5BVQj39TYcHuu2C7PyJp7dSZjc1Qs5rayfCagdhCXt4kVtKEs3piqn8aDNzxnVytgypqUurYBS2Zqk3dh7LSZmFT",
  "key12": "5ucTpNXwsUxDFchqzrwt8Ut25AYFt3WhnS28WGbnjJyjbFSYHiMavhvj9zizcFbnQfkBPqZdzAH73Gc6KGdKdr6",
  "key13": "3i8N66Dk4a91SCUQVjkLeoSKNANxerZRiBGKyrgv3fHj6z1xjxchPovZMj5BNFUmWbyiycnmoSTVN6kb2SgmnwYZ",
  "key14": "47GjtDP9VpkpuoCD61fcPRV46GzdThpy6EBhwr6fHC4WgpJuptQ7CNJmctKnwrSSrRhvMdUbwuQTRmELnr9mvUk9",
  "key15": "4S2jRRBXyDD9VJXdNBzRXrLjUWYJqLSQHg3JcjDrDmpSUPNee4ua5MKTPkcKjP5ZhJYo4SxnhQh42jtWrDxKbUk9",
  "key16": "34H49y3U9Ps8VGj7xVb5csZGLu68SLshLnKjR3sa4gYkUTMxgmLgP21V6uoFb3jW6FTWawpDCssdijVuvUWfBHLA",
  "key17": "56Rtmj4B8AYX2hCtaEhkBaGqV9JNtbq9rTSpnzuEGhPBi452PqxSmZnH4Wuytkw5i5d8PXF8i4E8gSEPhDuRmoRC",
  "key18": "7seWYHRop2c7Qm49sFxdsYzppxMk3DThh1CxDGJmnjs8C7E5auuqfmJPKKVQR2DF51LmpaDd8mQvoThprUKku4y",
  "key19": "CAarEpwcNajSXdy4wRhd7dZnKXPCU7UfJk3mEsN9iaa4uw2UiMJoruMk1yhZnv5vQd3aMVq5Bom3YweA4nGJvZV",
  "key20": "5oezu1QZyWhmywBbkMthBLLy9VGv4Z5iLFveRh83J4EYNyTZeGT6RLWfXRvLcf9JcuYuNVGreSYmZ3ZtvjEvdWBg",
  "key21": "5EkymMRQYS3ZBgv3VUb7Zkd85XDRNMePW6qqg7A4nwcHY6xCZ56H2CWfGL3Zp74ET9Qc5wq4sWogVPvMxTKocLTj",
  "key22": "5eu1WF52VXETUbytuYKRsYG535kbDUJ9yPorw56PNxRz5YQFkehPg9HEZmKa2o7PpqSLKW7i4h8ajCCHb8Fd9Wyr",
  "key23": "3MbTq7YUznwy77uhUuYDmJJuRKMhz4z63pdx6oJTHy9E3D3zC5VftNY4bRxn2iovMpigXrJ8Xxz3SvVMbn39zqUM",
  "key24": "3e8uz6cLfH9p7SsYjMW9ynT5Smceur2B8HoeRWTbxnYt9EbL9YcwtPGtr4Hyt2zYK82B9GP2BCAwACzkSqQa52PT",
  "key25": "4Tw16FT12JPEURav61c8vYWXQsZAzK4Mh33pYioPo5WNpNhv4yUoVYmz7bvymQEWqnFws8pCur9cExWmLCkDTT54",
  "key26": "3zj2HcAgzV5GJPAA15gsNAosZTzgqJuf47DENCLxbmvRroFKQ6c7p4FmAWQbGaxZzCi2sq9ktHDkHgakGhXWXryj",
  "key27": "4QSS973T3U2Pa3CYhnvbS3QnWxrBC8PsrpxAmzM6XpKYWrwSEs2oCCWkKJWPZv49c8H1Nxey7Q1RYyX6jnJxG58M"
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
