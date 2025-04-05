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
    "3jEhfF6Qa3K6xu6UeK4P5bJHJrMXo2ZwX1vR4eoYchtCsZPtDy2aMkHiRb64K14vDTFLqdukK8nkdZRNUELV9XBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4LPXd1ue2Wev3uZyh3wLcZgTojcrWKZWYcv3jHoodrRqNF5jPuWqhJpoFa1LggBAFLVXp9xZNhc3WoAb5oFTcb",
  "key1": "4PNdV3XyHiFcmVAqZUJWNyZ1SftXkz7JuKL66qaZ1j7Zc7yg9qjC5aCW59pGCohA5yENSVbr3Q5nGEwQ2eKD14oH",
  "key2": "ESTfrquz8bP1NQrDQHTERhw7GJZoDJJVjRwNKkDChVwKtzSP3mx4w2fxKagJLyJwgnsg5kfdnivLWuCmtn79GMK",
  "key3": "4Qj7mu9pSyQKUb9wMRU6TtsFB33dMNpGJ73JTN8gx4o6hPfL5wJPcQwMzdDRE5GX1nWs3EuXtQKGxPA2qBceo6bf",
  "key4": "W1aXBWKz4wiHDpSeGEPQPwVr4rqYyFbgpyoKtsbqh2sJRRhu4MbHWi9AaTQaZcPqqUMxNYY19AYvm4fwPsuoQVh",
  "key5": "9SsB1yXZQNTMta4DAzxsNfwThmkeeL9dqLGpw2S3rXpyi6dAU42q3hSKhprsFkVC12NhGLvRYZy8psMMzPxmuD2",
  "key6": "3FBaBMXsDcQCbrC54mUdTyQDyx1VpRnQxPDA3TdXQa87UJkgU8j89ZewswxVeEvavxHkUmvewxaNzN1or3Tyhwfz",
  "key7": "G1JiUo9GnvEebhfQ1JAMtwKSfGw1cBnuxzLbqJw6aULjcsAJdCKRVzTWsLcQC3oLRKYwHaeyjqd4yT1wX8yL9HK",
  "key8": "2mQ2uDeMKD8KaN4jGdw1d1qyki2Vj7HwXfYkZR9iM5RM6ms6Hz9GkCVW4kzJE66XxeEhaN1TQk2usknFtEUJZLgq",
  "key9": "vWRAH8Rm9QBExYoz8EfSSEJMz8H8YdxkRNwxj2ox3WeFwRiGTG5KodSaMpg2he4PoGLFH7f9vzuXAKJJc8gr3Cg",
  "key10": "23buRmFfBHytAXJQUTgUqzuiyheKHKKZeuJgE6JE13quDv91WhNqd6Udti62gjdiCB2o3xr3TKf7jAab35f74z6N",
  "key11": "5Rg48QmdSUbi5sUvLVpCJ97mPbw3uAkB9RwY3sqZJCaoN4E5488LdqXC9VX3hfugD6bveNzEj3d7cHApHUUPj4Kr",
  "key12": "3ED7icinwhCTYM6nG5uPzHsYkRjZdKht8LzHJwh7LJpSjxJU7mQxmtasMC4EkzGtWeDec66tetQym7LL4kMh6upJ",
  "key13": "2S9WGodkZuEuYuo6MuPkTk2SgEnCDfSMxrzM9kM7Bw92Ha7zzms23DfQStcCrbsRxZ74tvXuzYwYBz77rVhBMPqd",
  "key14": "3tFBg45Fd2rnwaBzq259mh9VfQ417XxfFpNpUEKY4XnihbLNGDwiEgukNLwHn5PNEuGPwwj3jEAbWZeUmyounVpV",
  "key15": "5NX9uFwsX6zy46i9ChLtJf1d5xNi7pRU9FJuPwV3mkzXVSyt2RLzEgvM67psMaZvmgCmoZpE5hrbJyphzAmJhX5U",
  "key16": "bf1JyU8y47WsjQ4cQs9tCVdBW68kBEwc6v8n5g2MibN7XfcEz6rBhyhcL5N4Nk85k6XrpQ6fdFwBy89S4rC7VeK",
  "key17": "5bWo8TdAEgXhm7bnWMnd8DCFrx3bX39yNXRU4mGDScg1MPpc5L2mQaV79jYXUMr7MymyCJS1XfHLmxu28pLEc1fk",
  "key18": "289cbN1QwgVqDv3uQGeVG5gtR1fdBSwJ8fA6vF8Tj3ohamGxXFo7oeY4YqgmEaDK3f5JdhUmwD123st7kgGjV8qy",
  "key19": "2GDhomBSpqMoYt5sAvBLPE9j12onuassbCjb5cyiTyfhyKJsDpE6G4dUyBdh4Mou1LVyWyhzjYS2MJwDzb7dKSqh",
  "key20": "3wXqC1RFm9fighRcygdgU3JTvQRWeGqzQg9xMAeva23JhXjhwkkaEzc8cxro7NZYWjwF1MoXZUr9mNYCESRr9wnb",
  "key21": "2872uKsNXJLFGbwnuruWDK5fr2bXKmsEEeqS2FpqLvgpLk18TfBYP8R3ZLHvGVAPputzVfijnZ2SzBZoATKSyhFc",
  "key22": "5oVGgN4nceUtGNNqJuB1QcchvSWV56fgp2f9pwioBYJZktR8G1uJ2v1ERQ1sBRpysV6ZXePE6F4E7bJot3gZttHV",
  "key23": "5k5KJezkiNbUBZ4EnQL3cSWXk3ybbvNr8meCKDEwDsbU1EVpeRyGyJtT4cE6mMDL3KdxaRbVWFMWtxH9UojgSPQM",
  "key24": "tD1UBvq3eQvton6nJYMi8VNAGrmep1dkBtBfTuKc6o8pgCJ5PdwzzitkhSE6jUujZvoM38kJ8Snp1jf7cnDafVx",
  "key25": "3SQ8hmGPZmBLvtqKerzH86yMzyTKKy3X5Wab3JMuDKhhNGGFTQ7YjE6Bc41LBQzwSsLFBdjdrPrQ6qpWyaiMwS1B",
  "key26": "2Li7P1KEV5CTePKe7g1XeyTGkGMcXw1iSfree7tqbCszC17ZoUBQr8u55MTNMFNReXd5DNWgLodh7KeycS8nRr8y",
  "key27": "GCZqiz1yuw8GsPtejyM8Z1AqdZy99y1MwqKtSnwLLjKUBHNgDitA2wTVnMbYchZtF6oHYG4NNTamq5zsp9t2ZBd",
  "key28": "3Y5MSo4Li7BQDuFenuiPncrBpexaBU3SB8LGXTDcKhytQFu6BxmsjpW9rdcX4tX8bvuFMReGrAb466eQeMGiuHzn",
  "key29": "adBuSQPm3LWGKurCnbPTpgTdsPDsYCQZgWfQUrhFykEmFpgorbHLfSxDerXXHmGNToYr8CcZfWWirmQj77s7MsP",
  "key30": "4HVsDrt5pHvEXGX6BCZ6F1NLBTsqANyMfr6ggL1xvj711rwtK5WtrEomG1WpRei79Y2fP9A7ghV2nCanfiPGPDBo"
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
