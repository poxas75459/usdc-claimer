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
    "4oRxV2d77bdPfcAw4kiXPzW7aTUBwGbHP6uCWiFECXEFfYDMeACjHtzEwTUzCZ2yfU8bXyBfUvNVJSMfWqnNW21F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PeRdsT381k4RkMNb2seMtQNBxa8B58uAfUYJLhE6dHmw75vaHVcWwcKgzgU9gDn1zEtrAkybzXRPHBsEMa3NFwJ",
  "key1": "3ubxjBNuAfcKuBa9qsePTefv62F41daSz2dJpvHpwKKuZyuD2Yghbc43ZrW3rSBBXUkiJx1q2LuZmdrFymc2QCcU",
  "key2": "3wBjKDydjjr55ZWCVX6gxR1YrnHW5nNsC6rntBXf3R12yxaLh36AYjJFqru38HiT5yn4Xw9tCzzC7pjeRUAtDJfE",
  "key3": "263daNbbhH1kw8AnJj2hSU7gtX5TMaTtuP8feTkEzTa8cg964bNCYWZUCZnajn8oZPk4AF5uc8NM5r37LAHARHib",
  "key4": "UUtfmUhNMLzUvUMUd9hjfjRutMaQqHG7VSKwPa7KeG915FqStjQ2XhJ2Z1oNvKzvY6QEPrz3kuoAo4Q7vrBAs8K",
  "key5": "5LarnTw8xUgHnUbvoABcid7JyqSLuw2RhJcShSqN5VKNZR8kLDrMm9EzmmJVHcuiXtrEBtLuf2sLrtBThwHN5v7B",
  "key6": "76CmJai2X94zPARz7tSKXUVkHHYMHHTxaCVUBqYXXcdFynQhaziZDpXu84ubZ9s3e93e4gpqF4eMrSVearpYhWF",
  "key7": "55BFFQEMzMmk6QDFRZkrWsAGZZauY4uFsJXmE3V58DoW6pdgdAqxS4D4w4Qg8QY4BpXM7WThWEdpZsgEfwcGKCcS",
  "key8": "kbV2uSVx6ZBMiPRQtzHk2qSEFw6Bog2dGp9JPUywFEZWRwrb3SBfnyWs7cZbxeMMuFqRPsqh3WGWPmXVqnN8TF6",
  "key9": "2Xo1QK2Wqc5e4gD2VyVyii7FQZF5f8bBHAg1yQLtp4wYGi2SxcxG3bF5Nxi6ubTEN4pyDvWwMW9kD9YYXpRniMaN",
  "key10": "3FmaMH359LoJBRGWZ7w7Gm3nKfkTfv3adcJCdxTdwzguJMSrxvi1AWcnfdTc7Web9SuBWUSruJ9RL4SdVehbQeLe",
  "key11": "5TXUPHAMdtBem3xMCTMEeg5rnPHLUDKrmnvSHkayMxUw4cqsKkM8HYUcRVYMASWGaqXdizRZoztFXiMgcj2iWmWq",
  "key12": "bUZevWADHyo6D6rUzKaRLbWHRzuKTYGiH5re2NC24mGhwQTgYT3vZztERmdCh9suZjybS6NmthHvYfLnjvzAfDy",
  "key13": "2HDEua2kVL2qUa5rpSxVLBGFCcZeG9wJzFySNznK2qATt1xWGFRsKr5y52BqXxEku9Fzhs1V9SzFpcfg83ejBkTK",
  "key14": "2TnKqxrMJADAmDkiViKgnvZCcZsXvFygLuAGLVM8mSiaFmexVZ92K2JoFtH95JLzzfB2Z1fXXR5V1m4sH3QJWwpn",
  "key15": "2TEiJ3Hb9qaDeG2zEQsA4tEM4F8PtYwnTrgFKbpPMLM19fBgVT5sU48vkezf4CSNhEoxCLSmx9ecvs5MFZw9WESD",
  "key16": "3tQLK8WNRB1knCc6KD9ftWpsqD1T9L5baQw3FxRNeNkLX4WbwYWAk1UnSuHtxrHinpe1os4b1wJnRwcHAgVTuRNp",
  "key17": "3j7g37CFXAt7h7PvxiTRcHffc5znRSG1KHkeZwdCEoQ3zwWAarogV6ffqTWC2L8gKmEWnH9srHWYWWy1C5kS9NJC",
  "key18": "65CsErQGH9js8hhXpsBu6BxK1yx4CfQ4R5BEP5nDTibP2R2B86ikcUNSE4fCQEnyXvEgWVdXyS9jhAR2d6Ykq63i",
  "key19": "45tDjH7F5SEqPrdpVmSvs9o5U6SGokdsg9Fb8DZ7RMbcQqPjKKgj6hw1i31WEqiFVz6YqrxjcJAdupamUVASEgaX",
  "key20": "5jaZ4xRMxtRL8TGC9k97UUWyLuscwQX8adodMys7wp3d3YYjcupEJeSTCctBYKG1YmZU9R2sz11yov2gBgrfvfft",
  "key21": "3zi8MuYm8nsReJ53My2osxGxiRbo2Rd4aYD6yvGeHCoiSkyxFiqtjfdjYrKcCMcg7JTsncYiP7MV2YyS6QGaexs1",
  "key22": "3obpZBNRGVpVdQdxHd8rgCKWh4u7oxSj6rAQ42gm7SsP4e6ZHw6JFraeGdBSEiLDgwKbGxtgU1KUmsSnTT1WF4qz",
  "key23": "3iHbozof4ct2MxARgdgqSGeq4CqCRYvao3V1hwqdYysddrTisvKHPaKR6L3bqPyTzeTnyiGJH87YtDwySayZc9VY",
  "key24": "WRVwSS73ko3P7ZhYx7v7sxE8fZz6jrHceqVXDzHEZGsx6RoWLemtFtXSoZYAtVo4r63N7KH58gzJVwNLNmMk1pg",
  "key25": "3nT9j8YVrrMUgnuxzXZ4CDYVoKii7zvZxCrYNhJWEBKiSnoTE7wZ3KwWLuaWQhFgzdHM2j6RK2F63zuF3iDAJB4p",
  "key26": "3RUsntQZCt2Sxy9iR6MxsGPgRjrkR8iEpa93JH5xk43Pvp7KA12kjbDz6pCpDNEzDezAaMNztAFVrdgnyxd6Vm9f"
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
