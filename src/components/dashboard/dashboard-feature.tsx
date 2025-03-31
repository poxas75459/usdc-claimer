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
    "3KeB7xcY6Twe8A5jx5Z45eZA4humSZH8FEzuSM3bSEWrLKRdGhaJSuM7mn1GX88MrxtTScAmNEYioBk5hqWCk9fZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XrkZtrNYTr7fHZ8YEpiEXBU847c6moGLy17wR2HJDTcdr3wnuJks66kRzwbiYn9c7RRTmCq8ERfwUZohbHEvzhN",
  "key1": "28pwf1JJEgQiGfJeHx1AH7WaN6uYTLw7N7ZHmXZWdMnZzSK2LhU3bfCePCSQ6tLpGYijJmq1f2ATuASGyKe7G8Qk",
  "key2": "3KZRH3w3poq6EBkH3qb2JqNBBV7zjAtW783QG7uaGwepRpUBRicCVujujHgqncWZGNob1V5WWG4yTbQpwAG1fR8L",
  "key3": "ig3rWUKEs2VxsASiPfatebr8VAdtpz8JtCwPyQs6BAPK7mb2tsYe8La48pDt8No5xqPnv1D1jzuq1Nw1znjn7Gv",
  "key4": "23BmUUbGVrYpwm4QJHHq6NnVm46PDWBXmCpntLkLC5fZAEcJQKaUFuri1X7b6ARUx3kAJQTvEseNJtjWoG5ZqGB5",
  "key5": "2q9usruvR38s3N6zdLXkc76mkJW6o1tZ4LhFEmdTRGiiZ8j1os2EUKTRSRQndQWMspck9Y4oBUGbR8ecbmGi7SFz",
  "key6": "4soyWuWgxNJRjRkqB3Hc2v8L5caLjwdheKCDXisNResBnyTkkBkyfApwWLaJbx4L6QqWu6JS73FDMmey5josG8DK",
  "key7": "2CdH3USBC6rriLcyxhDQ5DaFUYi2HsTiKRWgzrep3aLamDMZi91Vpfvh7YtBBV1qQeMKJzg6FSzioWnS7Dr6w7ym",
  "key8": "26d6JnTkRYrUs654U6ZFRhDT63QDtA3fxsKLPVAmGSMdvV2ajG5domLidHe9gmhF6G2jwp6YmEM25aMCZDXELYsK",
  "key9": "2zgvVXVMcgYdmiiuM32UkFnDV6FfipHRTsPqQzLkpFN6EmHY9Y2arSsoLaomypHPpnyV6LJzhcHQKxfZJYeoRprV",
  "key10": "2EigQNjpx5VXdkUoX1XZ1eA64GGdQJUJmfaFXrVji5tqqXQoohNnPHkMCEbimdgtHJULQWsSktRe58b1ZZfipNCB",
  "key11": "MRsR2DodYsaFooWZPzLdDADBWKrd1LeyhRzFAKY4JHojtQgc9xpDCLT738yAEMA2v88Ay5JD93yVxW1XNFgosvt",
  "key12": "3K7AH3Zcmbe7Djc2zyDtH9HiBwwSviQgsqezRBEQjcCG84LeWa5Rpe5obQysgqnmehtPQYihpVfJZiwtyXvGAZjh",
  "key13": "5VLWeUxs3jPLZF4Fh7y4bYj5E7HoorLRfYyicJvYBPUaUYiXtDHX87uj9C81Fy1mBwfPNDtu84DidiYUc6JppTNi",
  "key14": "2dPvPctPvgDb7qaPv5chrGxCYyvqsJabBeqM4G67WW1kv9QcBdbUWA2kYCQDLerah1Z58oZT4uBYcZzMccwzEuCZ",
  "key15": "3jGMNG7MApYDeon54yFmj5TiNBMV1Ed3toxc4LJzDMmxRwdEFKzPEcdK98C2EgbUQCBgQMasLi3NfjvCRu2nsMrk",
  "key16": "5hR4R9g4rXZXEPUT8kRxR5rHPWgtaWCYgAYytZ6Z5iYDFgWYbVZ3zGZrzfyQH1sGPBbUCZhgBrrR5TxqYMjGCYmp",
  "key17": "4M6RkhLssQKzA8CjWE85iDC2qHdgtyfgbG4DiAhGXbUVZrxAbidkoo29Xc9aDpDuHj7JrE7TAbAHhhRqYKBbDWkP",
  "key18": "5BJPk8fccMxdhKyvHCogBGgkEsYmGFg86tZgDSJAf6DL3X7bFksRkzgQbNEUBDJ5YjbBvozZMKg67iUMNcVnK3ER",
  "key19": "513LJgxbZJPnwC3i3wNcymrqroEmiRwZcCyRLUP6NyYDTqRYSVZGoiVYCSe4T38zu3Mcnpv2YC7aNoqk6uSbMKG1",
  "key20": "3njhbVuL6eQwc3xeZcrEEv5YDBk3HEpZGhJRhp4tXpPZtyVzfzjYxiqRec87vCvujzos9cCKtVB4YNv9kMqocNF8",
  "key21": "5oWKQrx1Sc9Pwypv4xuBwsrTe5rqCaVTcsuoA7qGSidHkEBNkwTBoKFLKBEwyF7CopzBz4DcWyZZxMq1GkusycKC",
  "key22": "5JAUveeBYWsC8hzdCkcrtcZVsTERHmQcdHiiNJsTcwoN74Gsp7j3FHcEHdzKrvg5T7rqdWksctR11btGU5z69bhx",
  "key23": "5U4MmpZooyBSvYGt4xzteFZbztYvPAVeTam8272nsKkvBnfb2qJ9mjyuqrCnM2RHmeARn8YUBLkUmKzswqKJBb4f",
  "key24": "2ULctNP895JkfZ4woU9K2aRWPRXvkB6qGAd8NWAokNrxfPG9wmQpqSyg7jQJETHfdqkpFhbLbXVC5W6qx3TUVr4D",
  "key25": "22JLhxjV22xwsVV1z4eCqUkVQQ6onDYM6WMAM6sgA4KpfR486ydeWCd66C1sjQw5yfR1Xsqs3B4zrkP1cG6sinQw",
  "key26": "4xKenh9jxSdMJKfwH7oK3aaoiYNEfaPBiu47dWeARUaVN5E27Sd5UjeXxpP9eguWTy5jbPVKGK35sYdFcfnVF2db",
  "key27": "5gqdRxdWHJGcmd9Gvbv1J2AsyXR4ELtsoYBxsnL5WNyViYAbX2fPYjobbi9Ff4XPJDZutAWBWtjTG6VmEYmk4Qo1"
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
