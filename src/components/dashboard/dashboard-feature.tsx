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
    "4hnDzQo8htYfx81NekYfdRnw75YBPQP8Uz4HmH2xzYtsJgqCY4mLUnytxW5HZiwSmB6aN8mwA6JYiFRAs67jo5m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ripc1LcyxdfByV51Uvt83eKa7tRAWrpD1YdzxnLCdsDhpw8ku98Npzygjbv9ZQjtMwMgtPEJXrmt2kNywNvyoe",
  "key1": "673dhWCsm3ZQvSnqsZ7Zz4BL9mJyQbFtoJXN7px9pseT345piNLLPDmPxumzSdPbXJ9uxi3KX9kdShs2qc3dCCtz",
  "key2": "4ZHUAyTy3dt6txiY39DpVw4QoNSn8EtNcKfkdnmkjPSchcT2fwrg4Gwtvi6kowfXdb1y8vjSf2Ncp5LyzCw25imR",
  "key3": "xXqhDaMdHo7MacFyRKRpvTPxJ9KzdCoAwc84GaLSw1B4yC9MhmneWGX4kQ9qSG2qgZmN1tZYjLkStX57diTtW6a",
  "key4": "3FpJfUhShjbHWATxiXVZs4y2j8KxRp6jXXK7Q5yTG1Z4ccHcMLSymy7cbgL9euU5UzSSfgv6JRtB4GEi61YUHJZn",
  "key5": "2JYauKftEBT7Df2368yop1vii9BTKNb9jaxP3BZCcssauYK1WcbKKGwkFYUwCaEnhNPQEmZwR3UmDLxr8QCGYGpB",
  "key6": "3zC6rHLQ4hHcq63g1yXSd1xrLvQDJYzoajm31aA9Q81uRF9jYzoEkgHaRcRj1s4cLQtgn6rd8uvr1UzLYqLonfEw",
  "key7": "4DkurKKNGRKGBkfyrmjbSAy7vLhUEQvZ1qy1En8zqyfEPz3D1fRgQevCXKWUt8swXwE9YSV9YfXzmALqc1PU4jva",
  "key8": "3xfJvA5HPnrLJ8YrS5LfasVjVruwiRWa6uYFHeStYzsi6NfSRBqDLAHqwEBmtvTjU2wEee6NCGvMdCYJyz3gCMor",
  "key9": "5y3DxWyojWE5UA3RD9jTqvtqtpjcA1VHcHX5VRmsjYranvsXKCDSUdjHC63K1DdkSfbHYQaj4DZGXPYbD8unpj3j",
  "key10": "2d5KyiCAtYTd3XNNzn4hSJ1nKU12TzHMZfwuE5DgqLFAdgakxyEhoMKeyEUtLrmgU1NL4i6mg7Gj1qgunubeNHkY",
  "key11": "5wd9M45cm5UT2j6GxboH4AHQqUCykNNyfiz7T8sSEXjh8Tj7fojKNNVN2r23qqgjcvvo3LXRx5kcNeRhATZT5wZb",
  "key12": "63hWizu3wRVVr2G5onhp8LRvCEGSSGgaZ4ZhgFnqC8y3yzUdKMHPbWeM39ChnAaYXKpXvTdLuynC9yrQUf7fcg7C",
  "key13": "4BCFkybX3bZxUzfC9EuUVDqMM5Nm7meupdh9KLjxkYSFHDfgztJBYa6FnDFbDUGCyGuFMD6Hc4fvFRNoY5o8unzJ",
  "key14": "3j4s7MaP9xr2p9vXKDCZjMJXAws9yExcWQdugf8PGCjJCo6YtDSTWsqUXQJBzyYYzUP2ARAMeoTr1xwiSS6xjqbQ",
  "key15": "tnuVEEqZWUBx9yQhDkgWkwLdQyevXSUMuNixHNSLRfirnR2SSXgHmaWkhkcHY5dijCqcUg3XaZ5fr7rCMqeAa3X",
  "key16": "2ZALK58iGveWwsxQSpRYHZmiJRaX1X1cMPa1vHFxBGKm1oppQsRkSBJZQc1Xrc3a36xRmBMH7XhrYyz7ZdkgnPUd",
  "key17": "3sLXkVepZ8A8Q3qM2LjbB2YfuzYGpS1K7L8cZWEurZnNVKAYYK1cXH9Y3PTzHCfGEU55CkS95xWpujkLMDaZs128",
  "key18": "5romZmEkJAuVRcEU6F4EdtLc3Hb9YgdVSijdtK8mzESYetbPHBhfapV5Ca34HyNAVeTNTY51g9os7WCtg99Ecd7h",
  "key19": "28VLwZtfACa3iF2jNoYPSS5FeoEhKayBfM9HTp8V1m8cm2pKWNt95vJHu7qH2LQXWY2bADNFL4bQVNe3EY7ebqbV",
  "key20": "4Ri1dsVL48v617nLqnPBaKaCfQeECAaNqecJWDwgTasky2GY5oodG4DNsARGRQcU8MgA1AVgM9qQnfyjqrJQHNbJ",
  "key21": "3535ehDZxvwS8iAFYxbtaQR1ZjVihMWtb1ffgD8n3LoJvyxjNeVphV7FpUTryGtcuK84Ln6M8Rtowe4KmRdVgQvZ",
  "key22": "5etm1f9mdAPUNu49vyosz9wd6RrkVQBXrk1YkT6wrz7rfQTNuSwqhACc2htTNGCi4XX3fJRRc4Y6a8jsFGvAcXsN",
  "key23": "2D6TYcGz5yg8e5L1v5i8oUi4mhFJmjBvcXD2KsEWHTchdfmPvD1VD215aN6oNbDwBhHGHM1RzgYjx9R6MEqktAbB",
  "key24": "c6hKcnEEyBptruQu14HBMML3xZXjYnYUq5m8X7GsvzXsMsu37GZx62GRxvbgVS2QDdNWFAhAbuzC4gmzPiZe8B2",
  "key25": "6cf5gz1MVj9R72wwCZDeadJVsGFcWxAJp2k6RnNThkzurtYgz4jqzGge4xgLZzYrjSVNLryeZqYJLKXHxRSW5Vw",
  "key26": "27X3Ytdu6BcxFJK8cuQyXaG34PFYj736aTaKPhbgbHfDmzpgdyi17FfuUN3irRoyvaHxyBJvCTvGkKo2oanbV5go",
  "key27": "2SuZqKR9DNLPGipSVeHUBGmu3jMqNq38WokLFjipv9SpHVBGVqbS2rQchour4CDdJLHuG5fEwKqtsfBNXTZvQsRo",
  "key28": "EZhwpb9H7Rpjjk1gcAhaVEnt1Bf2SM7LFDMzaJN8eFy8hjbCa87iC5PssYyN2gBPnjQB7pa9PjnjEQjTP2BCkb5",
  "key29": "2FiHARpoDFpBZZrim6TyTaMupGV77qfZxGsHia4TyEtPe7YvxW7MKcazw7VD7k1vUgEPmMHFEocJgBiPZE8eFdjA",
  "key30": "42kshtDGKWvSwTkoUh5JFfu6sG8rtvnmdy1EGTpnp7cpaZZvbg86nXCWvsjyo98kVzUme3x2TKYEPZM3wQV44inh",
  "key31": "5g43vpQzrLXmiwvsiabA9VJ2VXJpCTZj4rDropd63BoJAnRmHPEtTBuRyJBxbX4H3GPToVJFJndWdvgwYu3f4Vax",
  "key32": "4U7B1FDnipCCaacVxJe3qiGVjDGW7A9svqyTzA5KVTaKoXk1TeK3Vv84DXodLLei3R9FKBmptCpQFbkfxLXgJY5q",
  "key33": "2cMAFiKqjDtf3crkf6TAZ7Hk39zXadzMSZDw25DkQQ84vr6R4QtBSTUGunuzBtWrcBqku5cxJdL59RNZTYu1V9GP"
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
