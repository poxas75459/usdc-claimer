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
    "5tY2wueghv6F4rvrHbYCvMiBcM4FMAwjZpQXaKeHbAcJFTB8tr6eE2dQwkDzzVVND6J9M5HGQJLi8X7gX6PvFatm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31SwniEG4wvgNHRzc4qvU3hMHtbr6WZvybZnGvwHrxHfAeuzdvXb9vY41zBNQ6XUHeApdffMZCxuq5qSt3q2Z6yj",
  "key1": "3rBo9Lj7V6iUZ7UQrSp6CMhXWJ3JeCVfjpPCGwdS41Kq5WRmfuCHgBPN5TEeHfPH2ppKJm5Ptd1sAQZ6bHa38MKV",
  "key2": "2dihGf4wqitnDVtmBjcWiipC3vjZNw2oHuYUevSoqzWH8DfU9DHvthg9a6SDW5YgMw4L4MDenzXdzDYw52TvAeux",
  "key3": "3R9T8LxCKfKTh4aNVBvtWie8MJymSv4NdBnDBPrYe9FeNJyuxi75ArurkrkRgMwReu4A3U1MACgYafKAFTMUQgaF",
  "key4": "35HHN8jtNNnYidBgM5SZ2Q5fDbMZB9XttLFSyKN3qycmxjLyVGZJ6Mr1qqxEHf7PRCfskDYpRNSJkp6NphFgKZy2",
  "key5": "2oRnunQyBTWLn1EHJrhr6DzqRieACswpT9zZw8bus2E78UoGkcuLxNWQGgAiRXp96F3BKPCEyQuSca5Eo6sRjFRi",
  "key6": "tHkTgJtQE687iu3rLwB22NqubvN7txL21xrFnnp3dtDJ6gvkMaQyK81DEQEWSq1rMyeHnHXfxuvBdNCKg5rZYk4",
  "key7": "3spCgm955YcKvXW3jpxnGEYieiydGby2zNiWUAZyA5CCyydMRJd1rvQbUoyDA62xvSYKnBXKXukP9yqmBTs6nSnU",
  "key8": "5xsRkk9maWgS8ExoqANN4mXrLghfgM9MdV9yRsYK3M88n1ZwJ3DUDbHXAHnskWHHHu6ibAA9vnyrYMbbbJSXHfAb",
  "key9": "5BhsdisSZGffBuJMzNcjcWkToBKHq3vcgXaMccZcDvD5e2Fs1CtY2gL2NQesGJSpTvE99o8N8JVt28uxhhWfLFds",
  "key10": "5e1hVmbrxWqQk4Cn3MFV9aDSwyQLemGKLhwEQRgrPnoRBNP9AmLjSAthR4PsK3wTkN4NXXMEM9taa6dy4KDpAHCy",
  "key11": "2dPkBb17hrWA3p2FEbXgZYbUhXSBcVS2yQmdrpi9StV9VSxQhi1S3LrZtDTDtnUEeL7HYhUTRLzkgSoiDWYQTe4i",
  "key12": "3iRJy3JLkotAR81V8yvvWjHwCfijNwq5wh5QS882yoSXGoXU9c812eK7pWF8Gtd46aPhsXvEGyHrxgDqP7uN7cLE",
  "key13": "5ttsqZm7DQDXeuThjWgYvtaiFaT82wJjdEGBYGV2ZNbtFLw44jcmYGNCFo9i3uEgBp38SPivqBkxaLvCCRPQ5iPn",
  "key14": "4Wv8hj7pUX5mEVfVbDidsFFbiPWG7rCyLVZh2x9dJwknDY4ysUbeQStWupFa6HC3kByaRCjZxpKmFGzjX1CnSQWY",
  "key15": "5bg8Rwk5KGncymfwo7ERTeczpjYbDDqc3VSKfgfGt3YPkjhJP7TXCpYzgnJrjbxEkBhZFPseRLV5idvEr9aJ2d8S",
  "key16": "4xDx7V5GHchT6VuWY5crtv8R4X39TJVW1dDrmN1rfGfGySgoCFx6kC2yLkm2CWSotgaPA5Mf2FkU5eyC9C1622ga",
  "key17": "2vqN3vWi1HBsX4C5qJ52oMStCJCBQhdA2exbxdB1MypAgEQLxGQgitheLhR6jx76PGuqyg2Gv8YRMR5YbZKZ15Ga",
  "key18": "4FtzuEkBNhUHKkA2uB5Ci1F63NVKq7oak5H4HWwdoAc2srjWzZL2HEfQMcWhrWKXoTx4UnJaRf1ojYviStqaBRCo",
  "key19": "4To9VsZb1fj4gNwLToHNezmigpVM1epgPZzDXcz6EGG3XNWDsuSsKBYNLyGo5Q9HYPMktc5sXBrADZLmX9NPUkWA",
  "key20": "3ynEPjgct3tKNeQkKnjzcRjFnqRdJHYA6smPGi7aWzbod3feQgPnq9e8iirXoStjGYmw776WHgTwquEgKLDXkaDV",
  "key21": "3qm6CAeUjeMctCwEcrW87Vqd4ZtBhXFSw51jAKSibB8srbLFqJSookjrWzAJnn8MeDREqm2F4pA64mB1SfJV6jtT",
  "key22": "R9oUUttxxL3aewb4YCsrbAsm3Da2FxTYJiKWbxZxqrpqRJz6uUHAA29Xzk3UqvDULPSFkkF1RsWBiX57N4WycWu",
  "key23": "5mmqqxXuiagD4tD3C8g4ejcPooxJiokr8H3CXEHYdCVnw8izynfji1XtD1hzMvi4byCS4mZM2GVyhjH9UCMccoFC",
  "key24": "5EKnVxwfFLXmuGMw8eogtTuZWsdDF5UGmU5vKAYHaFT1bDjP9ry1KiZHPYEUwqAZoTLxEJd4RXi2XgjoNMBPrxZH",
  "key25": "4Dp9fHgs7Z8h5E3SzovGY49QJKXGHY6RCEstaCsbx8SwLwjUcnfUYseeCD1wDX2afn6fyJXfoCgU7cZAr4XgD7HV"
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
