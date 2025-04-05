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
    "3bqxFgAAJeoDFV6kZx2RE8GMvsuLig5mWYytHjMa18nvXUXen3Jwzdp82jcfUBmztYG8r66SNjX1Y7X2AJCWVrhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VWZina1c7JpocMaPghBra2f4kW9QtRLN2sr6bo9NdcYs9mY9awS4Es1tmVakiDm6m8JeuiZtXJEDSP8cgWUQa1s",
  "key1": "2aYSvitdjVBrB6ryPHw7QtA9MYuYxW3MicjnUJefQ64CJQx5trmAn6jSqrVhnQzvUGUVEgya6wsKuk78gw38QJmu",
  "key2": "5m3zLAHWQYeYiz4x7nQKzoVFgNcHjM92iPNWv2zD1gQApQSz7onzooayZHT2mGG9S9PT11un2iJwTmbcc3bakiKV",
  "key3": "3vAQUh9DQpZV7oQYP1vjTcisnj3v5E12QVFDEYDqv2RU26iEEEk6AQFGTkj2cb8ydoaaRCcMcbd4CeY811cDPUbH",
  "key4": "LqSoFVjEBMVTrg821coMtmimdBDFWm7eojA3W36S9iGQYMDpgcNqJddntpqBZEcBRd9GWJ3jU97aX96yEz2b3AG",
  "key5": "3148baiNUvki66CYbbJUKENcQ9VhTZZD1dhgbBcDXZvSQsbz1rxTKg3tPGm41MEHcHE375v94ScdTAf6jXWEkbsy",
  "key6": "47LmnqnzaznL1817wW8qT4tdR5kMWHZhji81VjJzwYqBXNLoadZGtvPkXaaAL8KYf2WF9TgUrJ7tiZ4cxbGvqRW3",
  "key7": "3kjfm5E872CAt74ZNhRQjkhAcsjhnxfminjEzaNQFCitHYrbJKZS7nKsryCP5aKh8jtv7gUFjSw5gVW8HFEBmVT3",
  "key8": "8fQjwpCEJyUiZqVPe9H9PbxkdsG4J1gW5a65BuNtHyEi7WeWDEmiqpHxCey3vS5giw4L4Exa1p9qSUyqBHue3hR",
  "key9": "J5X2qutcmAm5KWuTy9Tw36r3U7iZDMB1qYTbET6pvwodmv8v1FRY7cZD8Dh6w5YXiZNFprcvLHG97rPunrMuTQm",
  "key10": "36wSaQouboigjzKFcZjmAgca86Zz7RcZNCRbVSoYg45oARS1mXA8hPBoZtyDyT7Z7BSuNG4ni2GNrfAD3fTvseBo",
  "key11": "3BeNrCw4RVME885tk6Qt8zBz66FxQwAZbZkkz9fJhCqCKmEGiK5aFK5BLhajqhJik23MR8EUuKq5JhGLHwvyAkEr",
  "key12": "ry7Q5DcoyQ5hLk8UhFGRZXTSUuic1cB86xVfty4w3Yz4MsYW8sTVr96iRAfmTEKThBCmhrokDZ6iWEcEFHusb1W",
  "key13": "49RqQtp34wvziWXm5u6EXqwSdgspWBkrKk9YpaATa1fESkpCXh2jGVSoYs4fTVVeaAUNhQgXwAAyNH7dYEnjWyeS",
  "key14": "5M9bA9Nv2R9M6aviirJbp7vHidWKNRzxsEEWgZBXM8ADoEshzi9c2bznZQAXfYnFNwFtqzMkWe8YM6qJVWaUbz2v",
  "key15": "3FyQyhMVyYfHwBNQvCauMBkFFPoNnL46KWcVJsDQN7iMAV9ZAwDDeWh23oAvKGtxAhfhDh9kraGo9wexaeY47W1W",
  "key16": "533nrAm9vRwXzfVBNZ66wDYqPuXsAW6A2zY7ZvyKN6mFmAD2fkvngtGi8e3a3roNzr4FBRBwqduSyXLQJx3YaVLU",
  "key17": "2Rh6MkGX2xuTEzWWeTMWizpgbdpAwM2Qrs6hzSuNZ8YbynjAxSF2mWaB1mKmxT6meuHN6bN83Eb7wUCR46Jo6K3L",
  "key18": "s9xvfjdLWZjvRW9GEErhxCdCFmrvRt5wg5WQVhfe4Turf6Xecvtw3BQWVKjazKb5AkvFcRJ1vi8b9VNLxgTXvrP",
  "key19": "5rKUiCt6Uuvw9xKAqm6Vbz8Sv1npx4F8eRJ2NEkmNNYg5d3FsFf6qwXdqPBEKCBbKfqmbWz8zbmaj2cV8GvKXCND",
  "key20": "5mktt9wyje2QQi34Jb8Dmdimup6K99jxRNmPT4J8Tw98xSuZKELwCHMc7TXNH9kJEe4UhG6n84MLQURahWdtSA4W",
  "key21": "4XkMWZsfmGCq1NpP83fs7xfdd23SYcoVbEyZXLNeuLvx2EeU7aXnUyzBpdfZyW2TPh9yUUn4Ub6uY7uodiZMafSE",
  "key22": "2rbBsj9ihcRjrtUzDKU94grD2a7MSZ7tnXTDhwhqUv9qGH8waKJFESoaJj6RReGjGYkXCcCDcJjHzR9SwV5N5AUz",
  "key23": "26rM7BtfwixH8BoLtJLx3QSGMzkUXjikj9rtpbXtk7Az2DDK23oj8omf9Zrywjsc4uuxDRR12J3sdWnHCQ9sR4ud",
  "key24": "34XoDcuweu2aSXtrLNnHvgGKkCSVAqztPq4YE9NhHELabjs7KbmvXi89kpRUdw3zisonqMJKJ5dgE3PCQ3gcZQwH",
  "key25": "Z6Go4TrMPx4R6xxT28eFCJgoDJAPTTapuBC2mBHdm6rfpPBkd7pvtisXPXL9vHbxSmU47GE5ps1qp15toiksMte",
  "key26": "5mB9r2MG9PGh4eCsATeBkqwezapoVWD1Pa5EscbbAGCh77FCQfMHzELPL1B884yw39v9Asa3QEwGPh45nvCu2sR",
  "key27": "43XP8AEBJnEPfYUTwt4EAfX111j5YXALac9tZcVywAuiaPAEGDHbvwxy1ZDLxN6zbM7WcL4Stmc2JPhDQTH2AcFU",
  "key28": "2B1RQdjyKzakhvwKy3fzEC6VwA6jmnN1wTqyeW2pWEMRPk5Ab477NLy1XYPfyjb1Y7EkcyKgnRdJvBYu8t1kFUC2",
  "key29": "53A6SWCXrfLWfahSJr4bRJzZVT4Rn61wRhVuZCTraqhAc6ouNukRGB1sHRL4e51u1mk6twuQJstThE9inimf8Lzq",
  "key30": "4v968A3hS4Kg8ndSoNn1gQ5dtBMJHTEs2H9wD5xo5Jz8z4jmfuh3vJDMuHeAHSinCkFF2x7GBju9PJZDKHkN6rSd",
  "key31": "2vuqkhvZHaaC8o2FchXmcx1VQF5HJUTBZ437nXoEe32LwN1PEWywRAGe8wBz6hvorxdbmtznpFY1SGMWnxTBaNVN"
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
