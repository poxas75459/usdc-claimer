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
    "4YFJ8bRip7kLpePpXjzFVzaT3avXviAYmREjzXJ8RRFe6gmL7szHLvpj1p7GcTECFfSkHhuTzkgoxZWgBb7pz3Yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uaw1dEXHHFU37KRKsuev6CugpRJNjZc8iHbp46KSXavQPFbkTaTVRv3nZyfA6ZMSyKTX454hU6ZVzcnfovcvcac",
  "key1": "2QPhGByExDf6ym2EiGvVNpmbC4WRnRL78EtH3D5a6wk34N5nfSGY7FxYVaMhcZ1Hsg4bT8JkYsVepxms1k427w2i",
  "key2": "3rVeBStE4XnPAr1DiqwZiHE9aRo4i1DodpFKQv8aR7PqpqKQEoDBQcY8QRWNc4oEMGSATV5hQNiqxYyrgL6jQwzW",
  "key3": "3P1XJyR79SLkqFonKohZZ8r1kDhzpB9dzKVSxpuRRa9XrkEW1GphqK2Y7ECz6ZnWeQ2Mn3zXcQe1KaEhfU7Ec4kh",
  "key4": "5FMhpQnUeWoswgUCP1RcyAzyg2FmyxEB3B47rKPk8M67CZFuyUtQXVjn7iybyi2QTrKEY8E72VkefndquDtSxBPz",
  "key5": "4cmaLdR6Py1ecMRMLBVfY9d9sZ9Wr5uqzgxy4CoGNsRfPtKEXXYJ7ySS5Ljhg3RsAUpesTNFrsekiKcKZ1kiCPz9",
  "key6": "4ihwu7TDRyEVQXBLEZEFh3u79D881wD2N7yYPWuz82V794YsNUiDaG2sUUQu6YraFCYGsduhXswXBPGanXzNVcTe",
  "key7": "3Saci335zqUcNw2fqLMXnDv9zzp7P6qXiytWXqwix6pLzG3X473rPwBGTH5xXxq79vd5iGey72NDjhN9bq86JCVn",
  "key8": "onBEsYtvmNx31d2336UsB63PbPWisSdnYs9ynSU7eBz6foaqn3zrJn82LxuEuF5x3qwzLMeBHo23QpLENPN2ErM",
  "key9": "2zGCraoN4RUX5Eksq4zesZsbQuyL2QMhMZvyZnEXxP2sBafQR1Wux5M3yUPWKPVKsv6shKkcfDcBy9cPkrHnWN1j",
  "key10": "4cuNYtRKxL3m5Fjpq1SYuBFBdTbWwaWB8XR2eRWYjtpw3W74J5sZN6Gmt7kZYWYNHJD7QTB875ELpAYziyQZTYef",
  "key11": "3wdERYjhBw9syTQGZ4AtofdoRggBDMQAcc4eQJKbcjoBawu2g6QBE3y5tMMiiyWSNMaEh8FFwwthYCWgodEVrWdt",
  "key12": "2yjsZS5pvyLqomZ9g2dH4ay7vNhmZtGwGDpMigrSKTLbCMJ3HYh8p2DifSHNL9ESyNAVyW82FmbQiW9aBEcGPMg3",
  "key13": "3MTbSsovfaQodyqDMNRpvLz8NLW1DKp53JiHo9MktGC6vPVhRJ15MAnS73oEmDLgbRrKbRTgVSGQ4wBYUMDM2Egt",
  "key14": "5E21ZK4oHkFfeYCUWC3ZMVmVGmndoYHaZV4tf5113AQZwTWtrAfZChQWLmfE8EpdffYUhqymg6YvPBqK1RDY1BDH",
  "key15": "43KbA79XmXm53X3Y89X6xbLbkymVYiuDnP9Ne36WDxNzLuS6JL3kLFoY48x6yUQKjBLC4LzhJgkoSf3RdUKZALTb",
  "key16": "3aZ8QUGt9za1sF4D9oKAykPeuT5y81ZR6oyu7tVdvKfb1mRUDcHTLvDnG34cjHmtmC98gAPHC3KVRjH8GK7GMKE4",
  "key17": "4U4DFNibvZmcYZoTSkD1NNsEwk6RrTcYWBXAJBCUiZLUbuFR7h9Yr5Ba35N1iKLD2JvLA6vXsNRqHVgQ7fmQk8ht",
  "key18": "5iJS9ezYsn2NLgJj3yFYs6zsv7FCxJQRgUycoqbsm5hbc6EoE8g7vvZd1EncdwTZiS1XdDXMERbrNadJPU9rZwJD",
  "key19": "497eTeyfDu1qf5k2i2zAHUw3wbwAk74qsgMMe6Q97jY7Z5GmDn35TtQWJaJuqZLycv8FmhXh1qboUSDmZNruPy5J",
  "key20": "48co8DGPGFM6vBFSvxvdKut1NnmDnZEtmpTdJALAyLgfRKPQz3DEpdLMaRBVGzSS3Z7bj7yDEYB7cDd6DiaH3jAz",
  "key21": "5xje3rXAvUeMQ5DJZoWVACRanpCNNAsdBkrdRyrrxpDuZK8GjkSFy82jrrn7QC1jpzwjiEin2m5UUFbZNmkYXVgJ",
  "key22": "SuVi623H9ABt7WU9RCpmkcA2DUJutW4tKWZUSzJMSeXkVz2e9T4HN11KdV1ubJjV49o6Xf6v1njzbGjShe4Gtuy",
  "key23": "5qknALAetoPs4dbTQxUVyEQkEFgtAyhsWTSErG7LYUxUbjEVW2RyyacooJcTsKS3LzkimKkMBkwpxWxvGjWL9XeU",
  "key24": "5Q9RkANyb9PwDDZfRBAxodNRS9ptQdqfjLa8KHWtJT8raDGBUHmoQ22ranaNYGGWVAL4QMWoFms3aEYxG6m23Mth",
  "key25": "3cpcxu1PC8aUr5fezy8ECJBmBypfaKsPttCHzxmADTsaUevc1zs4RGjmJ7V1GuhieTpzM2vbBYfSmMie1RCqSSrh",
  "key26": "4FUhUEmpzffroRFd13knyW2BiwvSBjCKgdjmsRpfbQcWGruHgVGqprFyiTaxBtvQwUxDbT3YeN7Zk7ZyZbQg7VHE",
  "key27": "3gh5ysPnngJZZQrL3GUd6nRBFgchvpB4oddY6CjwX3f8e4QJ1TqeWi8Gc1GDqKkjSdeMi8SK9caVgMzvuSto2mwW",
  "key28": "kgL2hXpnZf4hn4V7AwwiBXrxHUjsCd4Y9oquFTPh5tj8HQYcUjcShDaiFT526Nb9yjKRpD9JX7XV45h91Mupo9r",
  "key29": "5xeC4EkkF1jnUCzvrW1ipvEDJFz3fTbNRhN8X2Dm9SaN9tYMSCzoUebTx8f9GQYnPTLmC62MioDGrZFm98CeJdah",
  "key30": "4t9FqEZDmgHVCm6MGcM9Xr6XNEW8w64nrjMNv1d8JW9ceEQyg2Y8RRFGyNHMumHWD3ZRypBDxDG9HF1LjgmnE2Xw",
  "key31": "TJ5XFsJR7gd1qjhtLmBzSuC11A5mLZ3bkEtXhbwDbGKgUeToqpch3x3Y8TYK4E3bN61yVVW1tjRy3ktgqeAFaa4",
  "key32": "iDdGn73idhk4BBh5oPPEGYyDhvyEuX7rtziACvS3C3YkZCuzZvueS6HYmPPDRHtfDqqxz7dkxmQFQj7ERXQd1yb",
  "key33": "2vKYLYwad83i1uEEjHbr43NoohrDHytk5t6wbr9rsykmvG57iQrKxHqXkVmC5DbQKN9E1DGdfTyqeVscWD7XNKef",
  "key34": "36cJKbWia2DUoik1MN5bK2ZqhnLSBkpzyP265WBSgm8YV81WS8VWuv7nE2PNCcq64hESRZrfqq9Mzv8t6y9smBmz",
  "key35": "3ca4UV9BDE16WpFf8gfYEVhRwZWMpeMCKVqfBFi3GsD8RqHdGfGw7Dy2gsMz4jj5K1gD3a7fEStHFJcNBiwFxAEm",
  "key36": "4v9rmcM9R59AdLf4XKiiYvGKXGKWCeTFYVRK7vQFHxJx4UyrZWGMzcUGjbSxdt19b46TJqUebfMFyd4tN3ph3fsm",
  "key37": "CMUWk8EeGhhTxemBnPyiZCgxzFD7QwqiHQfMEymKrcv2rUHTG2h3mro59KMekJbXTeZgoxzLx3kkznJfTVB2Hu1",
  "key38": "5hLmq7Dc6rDRdAYMLi8afzYFwsUKNbQCqvTB9zUT6RhUVX3XHu6RBp8JbbToXQPjmoLsAtHvVAQGaDyqQUS6xs5d",
  "key39": "uevLtMf1zFHSBvMeQ2r6rbHFGwbqGzuw4hqPA422dz82XsGdZc4sZUVzHZhXaGM9iKACdede4osHU9WAjgV4Gcr",
  "key40": "4DrMJowjswZTUqTHgtkMK4Fj672iqfrtttj8DmDoUyg9HdYHrDXYMPZjr3MXN1GdBLnVckx5SN2gktHHoA7sc52H",
  "key41": "3GJEvVNavENav3x3BeYAfTjBr3AKys7ZmmLKqhiEMh9FHKdXsdNQxpn55pBaspo4u8KwVwVWEvCJy7obZEFG1t67",
  "key42": "2o4Y1SJzk2HjDEEy6qnBZF4qFa1BLFd7Wt5RXJZ7h1Hkx59bdiHLKHQNh4bugzsNMndjdW3cxApQURUBYDa3e9BA",
  "key43": "58kzH5XiKEm23PXZpsJWoWiDMwmc2o8CfuLA998iPCTShxZW5TuRrDfPSZnieggA2gtmNJKRCUuNwvun3HVzF9sx"
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
