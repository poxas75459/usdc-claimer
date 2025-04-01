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
    "33LxBd7m3U9jb7KhwtxNgeoybcEWB4LN8Z91Az5RLNKXUtVs6VcYMZ5rJWzqJorUkhAcSgepZRPNHRQiA8RRfKAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LCufjwK78YAejiPGUuEpAmw5MYzTejHw7P7GY2UsZLgezCKFEnyw3iGNSHM8Etx9dsdqx2hPkH9WsYw82UEbrtY",
  "key1": "2hk15McUcFFLHfcWLLV8ghVU9kSuBGjHcUysCNrW8kYUNoceVhq2AJ9M9ggo9y9XDD4No8KSU6YDhgpWRghj25wP",
  "key2": "2ZHc1vr9bDFiZGtMSrkPd5vSvhAUjCCdnKQ3ssF2teDiVynKEkf8K7NAeb6odRfzKCQFokqD52f9cKrtvi5Lv8Ch",
  "key3": "52Dd6BvKmzBXuteLGy6mb6YR4yrMBqvJFSbCtG7q1gmMvoQZ7UDWpeXVV8peiQX6cXvytkUC4fzaEUVUD9CbCCAD",
  "key4": "zRAiGH2dRg1RByhXmjS65aBqcwEYrkdN85oVYi9JTd4eQM75UEbUQMHG7J6GVQD2UtnDvEGquriLEoKYgyNf1Ug",
  "key5": "2SjNNPa3jtvgdfo3XEgBE9JbhmEdam3H4hACHJxzDcWxZ6SYymofT9mHFHzQzw2fyydM7LQcZoAgQWGVDMaNqJ8Y",
  "key6": "M4UerziRuXYjr8AkNWQfZzNrzmaQ7bbtAKa4PusU82LqkQZHzq7FedXK1TJdeQtNPkxio1vVXVzwS55kajQVPNs",
  "key7": "3e8WVd1T6Ws8ygfTCNaf8cGioeD8W2r6N7n9DoeShT5J93y751WwcAqHh9tKJnufwfQfLY8ViHZxHbaDd62QzHvs",
  "key8": "2p4R568Te6PzUKfXxrPhDsabq5xPmp8mLzfLNiwTJfiPEtCnw9nftFMYgi2KRV53fEjCF8trPfxJ5HhDJfywXyV8",
  "key9": "mgvuX7LpJknzeuX1Aeri6kDpXKcDZFJLj9nm9PrrTWWifpxSNSPQUUHjxnWQNpRWbTif5KSGHnXLEzYkkAZRiS1",
  "key10": "2HS3mLATU36A3xTTB4cJU1LXvtsWK8rEzTxTVWyiGnNnBZqn2rrPuuvZRmwshroqFViT8GwVo8TytP1hT4Ufj4uL",
  "key11": "Qu8vb3ANdhWZDKnPRNUMiCmpNYAoXSvLs4cKXwUTXLamTHwWCEXN88UYuaAiGyPXxCpSmM6ur96mc5WjF8ghWvn",
  "key12": "38p2xct5Tcnxm4Qw3wDGQtgkfrutQp6JzLTak6zGbZJtvLSfukKyQnoZARKvL5mKXf1auTYwz9TEHnZLV31rtX5o",
  "key13": "4CZRncertKghWKdNU9khYjxg2EGWyRyPpGY1DomGk1QGmJaCJzJ2Ka6QmmghdtR178V9hyUu3UmJoio5CGz5zode",
  "key14": "2rDZxa2tPgvAR2kjsqEfoGDqpdbBHmwVSA2jWiPjHN2SPQ9XMnucSShYXsJ1wfpHzUMzcdEKPF73CGFoWrmSoDSA",
  "key15": "iHMqJppP8YLfi6SEzWdjQDFk8aafo9zZKmqg4Qb2VuWhvxwZkTWr5e5sZSAgZw6LT3eyhsq8UVajFN8ym146Age",
  "key16": "ihpM95txA69yYASNdmt1TbRgE5RtuNXkukMKiYh5ZKf7g2UCm6QqsTcFe78tTsFZGypmfmocRh4mpr7WpUR7Zig",
  "key17": "4MYpCLjfFfDxxtmnYahwpUNxkwFNuwcD2tsz85HwGsdnsbR8NXRxdRcY9xfoogDdyCz68sphEF9ZojbcEZvW2Qrb",
  "key18": "62DtDQP4gdkKNGqtKybAuJKBPAVoXu16ddfRPRq29MWUEwmPywJ9hSYZh3F9E8AwThGvhapxo1mdiKKMHzPJcJhM",
  "key19": "5VpigJzWHKtQhmHUvjU2BbNpLrFNXbMN1VzAGhu7irevcjNyFJg5HnzauPAHwx2c6AH7Pyyse9U6oPh3QNYEmEQy",
  "key20": "2txjotrsupJ3zjpKXRu4pJcqHWtYZXfdZQsFiQumQLbkxcZG5kZSLjxiJ7i59gJNZHQKPm76khAZPCahpz8iJ2GN",
  "key21": "4sqZpcU16uWptcKAtLKBZugiKjce3gQd2aEQmC7SDiAaq5zqXFPAgToDTJKhqJgWzyRFugSCvojyJhtGYRWYEUYA",
  "key22": "3Ngvx6pxjKtggxmS7kdeXUYJ9XVKS13m2zPxAsVYNGM17zSkoMYFghixBE4Vy4SjvUry2SeXtZkU5X4U4w4ee89r",
  "key23": "2kEBaobeqzWSxxBKWHrcRJddtRSs9SWmNibhe73L8m1hJ4n6dpQzg1ip2nz4Gjm4UZy71eL9vGCc3LAgjPeAwccP",
  "key24": "gmYeqT757W6Zr9zteoW11FkwbL82NBGYSJHRaMgm8dbJSvQCnrLoEEz5HCGkN3xbfpAeHVRKY69MRadyax9A7A5",
  "key25": "aWPbYsrgL2fVkPjzAtSinteMPHS1g9WCFCnz35pNDz2u1ewxWAnVitypt5jwQvu1JhPy1QPj6mE4ZecuVjKGRg6",
  "key26": "HN3U54fzoqbfNcSMp38VNz8QnrVafWW1kN81TC1xjE2EvAmdVVZBYTDWQtqi4NM9Lquk5sqb7cpu6nw8u2Z7co7",
  "key27": "5mSXP3ifxCyE8TebiN5Hm72WWzVg9VHgzywbY8HwmZNB7DuLN876kutG3LppMEMLiCJHLnDKAVXPkS9V9CJTekCC"
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
