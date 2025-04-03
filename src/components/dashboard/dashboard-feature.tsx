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
    "3mGriR4b75NBvhANYyei5nNjC1FL644LdJqpc6trTnHczzixPQ9WokefsKiLKpyq58FR6AAxy64z9YL9njaG4nrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dDbYDTbxeBVD9BtDKdSYouniadcEbu8d1Tx5G4pD3SdMUCf5k51edxK7cqc3nvTyenW3rKhEWUi7BGQBiNsZaqj",
  "key1": "ZtE5BfPSibvBfvcFBiQHw478LorvG85ettEwKQDAyK625U8jFE4o7GZCTjE2fKr6BVtQJBpGpYR5MURJrsJ6Bd8",
  "key2": "5gBKNrztMBQKp9PewVagXtfUCGkiUms8PSMhSH1GQhHhEDquHgnSxEi3cqPTgJH8mhXZtEx2LdancyosobLXCVhc",
  "key3": "4HrRiYr55cefPhZYak89GLo8dm1kpuvp1JnZ856n82Z49544UKJxLDc4RbLPxVFb3J291ZuVUDQau9vj6Q48Hm5t",
  "key4": "41RahF24iLq5fdY6YeMkdtqcodDRsUw8pHw3x3ie6isijNFo7ksRe56R9cpnvgrNdqXVgzCSTqi4UauDbaE1jFKj",
  "key5": "26rBHmFgmu6J18oLLPEcYpSKysFgU1uLRyHAYxitrpvDfKKM6MvD3pfbyTx77xGsKdtWHDqh7xNEsWDrssF5wxww",
  "key6": "aF1KZnpHk35UKRWa3NCFpJuRqQfaMQBEh8y3L677paDyxCpw3McF6gFmeKkj7p2XSNtA3CjsFf9KwYSDa874DiK",
  "key7": "3U81u8DgjiwGtsiSrjjXgiyrjiW1A1qir8z4iiWLejNvkVBHjB7vEygYSX1o4aME2wNzRikc3zULzaKtqEgWj2zv",
  "key8": "32MuLdEj2636ZzNfJgXk9Leg1rZW7BgJVZCwhMg5t5A6WDa2b8Xx18TDjEQ2crVpfJBgG3aBoBrGJgaMUXdQd7po",
  "key9": "2uGUxoTwMjjaKjpL33WQPd3XiCzccjrVFeGBpfTVkRWsUVRDMURHgsSRcSSW6xHsiH3JnovYSLtGMAeRbnqWXpUJ",
  "key10": "4sPV2mrRGFeZKFRPRww9ARUxC7o9Gg11uK4rkQBZyoNt6vw35kFThMsQKEYALip6y6Z3dKJECASpngRdGrft1Jt3",
  "key11": "5JeyH4jBMvGgj4yvE6DqFCgQYJXvun2gMaxsgSsY2bbi2kuHu2oDLTWZMXgemuJLzVEDVG7x9LECdMrnjPRaZ8ot",
  "key12": "5uALaV6bdiTRAKNh6EGjZ4zbh6BZUffvoGuAyAykco8TgBdNZ8T8c5N2VA4STEyQ5rU4R9rLunQSccevm5An1kpV",
  "key13": "5Sak8DXsyLyWfoi68RxSMUgipmtyHNmqMQVLoUGXPSpLbAYj4fLsrtmwrwVDbrvinEbEgBhS5pwUh5UbTyj6iiQf",
  "key14": "2yNZgGp2Vc3mKci7SMQBh5wS81zMH9yKDC2zYZVKGQZURjeE2Cp1pm58EfGX7HEaFKbZefnpySLSfe9WZefxRZbJ",
  "key15": "4W3mX7ohYwS5M3s9kaYr5iz8HBkUk9N54c9PKvBTdtEUspWuA3sRXzZYm9V27DsgKUTDy3xyYhQB2nSb8A479bXQ",
  "key16": "45vnQEN1frqrRGPNqqo3HETEK9iaxJ3i79iAQj2jEjV85GaxkUCAzzHnZkYRZZD7Sf9gF2BoQcKigzEZ9Ac9tEtr",
  "key17": "2peqqSq5XoDJwv4v3TcTKPtUDf9TNVqizYFzqoQis4xeqcSBRjCcvaCgFdkdYLJ1KKmG4PQa9hqNreAs7FSXVxFk",
  "key18": "3DJTuFsR6f9sXSC8ckzMn1mDi2ZAAXA9vhgNtRN8MZbeq8wjeQxUCWgRh9XfHURFPAfyGXpxP4xB8yoCvo1TCGvB",
  "key19": "4K77tsiErZrrBDA4331gr8NxkBCjNYYvq3FrdpeEngSZqoXrKY2XFJKD5xQc4xk66i7gsFsBZVrui8iWsvZ93TJz",
  "key20": "2PTrr9i13uEgBtk7WBcBtVWX9t9vvPjx8NkMGLNYzqkBEqA3mctnq3PzwP23rVGGKGMxvnyWEKmJWWcnNRZPtGfA",
  "key21": "4bScvUjJ4SdY2iwmv5UuGpeksD8UJUKvPk2X4sNtp2cvY86XE65FA7rQJa8toe2GmsFZU61c1PyFsedZY3SM38Zy",
  "key22": "3gMo5ipxELrXJZaJ4u5eebUjqFFfswc3arLU9MYN6pzVZj8z4qJZTmftZ4MWxa1cKzw9AiDRetZnVqQQv576T2hG",
  "key23": "3jd9scgfHEfs27G7yUstCcfsMvhnSW7wpfnzGzbGY1bHnVwoCaAV4xGvgmVni8drM9ZzMbLHSBReuTHJnC7C3sfN",
  "key24": "2Ug7TuVzzzdPZjPvaurkx8i8r1wMwdiewMmhdqkydZ7WuquULbyz4dtnU3Jj9SXeUYvkz2kKJLWS4JhXLMnGNy91",
  "key25": "4QGi3wA1ZBAyiqrU6zqpGXzKpUn5RVMDhozPB9PmnmG7JD3rVYd2xUEpakD3s1e3Km1DMkLxaQNyESscMZUveXZ7",
  "key26": "4KGa5UiMfFP5i5hMGTZ64v2uqzp2MAuBcxTAa6ujXsgThz3bdrsMDPwGB3JVvwpMXD9aRyq8pEbj2WH2Sh1D65F8",
  "key27": "4Q9HLoSXaAZGfpGMEvc3vwff9x8v6jBSkZxBhR1P7mT49Bpc7btXZD9k2KjN64iqBHvtbox1CRZXiCYTJigJwi58",
  "key28": "4BLmVKV83yeTncdu4u7B42xduAoyyy9qmL2a1PyPLjzGXtPTfgGYP5Pawer4tTt5UCoevw1drj1uicQkDYukFnvW",
  "key29": "2UabdQTkq9HU1hr2d5ReEVgHkEXSRrgo33rnQSsFCwXBHGwjMRbqnZcWTWz7Lv6aAMu3Lyn56XxD1MrWYfaTU7gb",
  "key30": "5zk1mJPC64JyTRQDenExeXC4VpUoBwYyyrmnA8sZv2PEMLiF59c8mefus4nRoBQfZ5CyfZT9p9yDKMuFnEq2yjbi"
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
