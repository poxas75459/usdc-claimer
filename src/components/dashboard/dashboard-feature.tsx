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
    "8mUfEVCHJYxHtHXJNin2t64ei7nDSqWex8seG4FJvbrmszQSdjJioy5PiGEi8kzeG1bFmfNdj994YTUmvXTHJWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A7Sp1jFmsoRcHuojcYjDfFhcr1ooo83f7fRCJWdU6RCqX2q9jqUEAjKCP9yniSYt4t9Z8iZXit28KFrgrMGbZTn",
  "key1": "4rDyMokyh3nWBmHKD5izUiLhw9jyxqUpCsofk4EUJEVvuuBsXkGNpfoyUzxFqryFCKfjepeVbL3yvpL5NHykS6nB",
  "key2": "43UH8LtG919Mk4uJof1THj2xuQiyKCkhuYR5S5zF4QxP7Kv9F3mnkkSXWhmfFVQNJXT1zuCpebrFHDHqwbvsEv2K",
  "key3": "2XPNbPsRCjVnFga2aZaMYDxxKp2D8JccJ9C8C1tuPCGEag3j74yr2oMTxCjyh8X8dVPA8Ztff1LgPpKC8JMXaVaZ",
  "key4": "MyGJrm6ouD5r9gRTtaWK8GFgkrPENVSnoghtsbnA3iVe9hFMZ2AixcGXUcoHS7GEFyFGxoaP4EbNenToqvm4ykp",
  "key5": "5KjqyGG7AGoKxzh6tG7n4puoLkZsU8sbBWct54oFVnLjRCyVCE6CJbUWEiMwGqjYZt1p6eyrBWuqPoshwZ3WdnTY",
  "key6": "2LoodsYRLXKhoMxc7thFv432GDE5EsQhX93GwfvupVeRQfVp91GJq5Ku7PHcijF4eUAuVJCkWEBLSD3gmxhphhbp",
  "key7": "2y85fZ3MRxZwfzx1m1F2rUX1kd14xE35Gmi2GhHEnRwSyycUS1B3HSgys3WqwePVwv4wfLM7fM5N37Rm6mzzZEuJ",
  "key8": "5CNfs7zhbhUV9zaaVcv9awVB7khKzR54inyZ6PTF2nLtJYVDc1W1u9YDUUAKynmrmyuFyTQhjgVvxvvFst1SR7ww",
  "key9": "5emoRkgQ7bcT7bo21T5wnGNS1SN3E9vTB6gjsksjhJMFhKgrREFww3oCwo3tHPZfBWhmpKZgmMEfTvPxUMYzbvDp",
  "key10": "2y2Cxs67pFugpPJNBh27wbt6vo6Zn6U1P12ZDWhvK43P5at4Vt91FveE4M1sV9uzn92MABAyFe7kpY64RjvjSqMJ",
  "key11": "4sJJpVQwfoHQ491CWZepdcHVYSeYSWzwLMryfFqi28zcA1xV19WpH6sP54csMRGsZac7A41fWa4tNwYQ9xRPSW6n",
  "key12": "3moMmwU8aZikEjvCM9BTDxHbMMkSk8iGnVhg5i2YHUc1Wpi9X4XyTPNPjmTgovcFSCa6iqh5QEwiNFYs9H8B3SQi",
  "key13": "4zYVSDprewTceUKAM7X5hDEUCQhvKbTqwgd4UTB95ULUmd3MWaq53iCpXxefkD1WPZWbMUUEFGAEBeV5qffceAeh",
  "key14": "3Sd3SHwrfQbjmhBEzreiran5Tg69h4FZgEt4MjUUwnkSRuacN1jLJvYLQLjoRb15kftQfCqRRXgcrcSWUMPpsCoj",
  "key15": "2FYXpeo2CP8D67QzrccHr1bsPoSgusES6W2rtMMgvB87MZzEQ1Ea22SMhgLymD2qaNUzQB8AxYdxFamV8oFva1oB",
  "key16": "PFt68hqhWCKpSojRiusrdqVHjciMrtZV3EbNESuxtT1ADJMvvAJNR5pFFtuefdtdz4Vqgs6a4D3u93ByWTJ77Nx",
  "key17": "Kg89MA5kvHVs1fqYVAZ5E5mgBaBuj1ixhxpj5KwbaZfbYRQHcCMgBBupNaaGJXzpFMx5AmiMPRqW1HXZVWLCx6h",
  "key18": "4Gqg4e3vSc5DrHNDBd7iHzGsCn9is3GnCfaiAs89hyhX9CH7kHKM9dSnCAnPMrFkYS2rrygo1cLTt7jPn264KLfd",
  "key19": "3QnTpDRoKGkpx5Up3KBKLCrAqi5iBHC1boHmw87ModcGnqsJ7LGXr8KQKDjkpEBFMenRvCfcE1iwg64xnkMk85JK",
  "key20": "4MzeUhN89essnAWMc54Sbohidjt9TffCLFK6PfrcFcVER9ScQfWWZb4ni5AtmhRheuiuFMpqUEHGyNyoHpGp4te6",
  "key21": "WAEaVrab3S9cVSoG6qPtXNVjthfM7JScUc53MWqAeNvU1NJdchiJb4WA1UVkyoPGN3zEgx9dBezqGT7ezxbsMSk",
  "key22": "2rMjsmLqLtG7kH6H8u8EXabuY1g4MCL6dw1tMN8FtHiEvTWydciVEetgAwQok2oSddxgN6JUeth7Wkkcrrg72vsu",
  "key23": "35pPR3Q32DBnidhBfr7eedqTNM9r7CxGuCsLwUi14xRJVsd4vzGf3EgtuLZpVXCBUs5R5yEisWzk41GNKA7drGFx",
  "key24": "3KT7N8e2UjvPcmZJdvWzem7eVg3gUpSgTS5cM3wuiC7R2DW7nS9DbBcAsS5pz8icNXNfnpyPAtqeJd6qoT6jiNTF",
  "key25": "4e8S8GR1grpNhYMAtBUmoFTLXKV55Zep33Lk3m2KXAZdqz8APcmKfEKDaGi4BvtAQtZoTGP3kRHnkJ1qBYBQTrXc",
  "key26": "5e3LGM8t6Jsz4dFRRKjGAcxxSGXVhDEUApeXZdX7sBW6E5NiLmAH4TpVMcbQzn2cgU875weu7D8VpHFouamJbg5t",
  "key27": "3p38FQAZqvC4dGEzzxL24972cFkz2ddF7GePNM6Eqq5gUecDx62hKuwWBKCiWcMvqv4zXrj2Y6Aa8ia1WpDGaiZ5",
  "key28": "w4ibo9bJybQh4SKdp5HrfXx3Fwc7QLnMo13CD6psCbrUu1VcxmeaA4KHFoA1LzrXKF42GeEnrBFkRYcaBdqZ8kt"
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
