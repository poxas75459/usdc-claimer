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
    "23q6rFAVJguQCKtqZTu4CZKFWejwN8G2Z4ardVGHuuXMuhaPhogzB5f9us7V6bFs3vArCbVA8xnKRiWuzM7TonCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rhaGVnNzxgXdiwnJkHRixB3qtVYxemYK5prQ3wLJmGgHJzNbFSkQ2Z4wdjm2LYNnRaJ7Jc7HxhS5ibXp7wQaUfZ",
  "key1": "62iY2fb4hxzJiQdprvD2eM6nufQFDecvoNthxrGqJkUmux4riVxxYCq3BGWx6vWRxjckETSRoUYf1JvQR3fH9MKb",
  "key2": "2MFpQDb5XNC8ENLpHgmqiiq5qdbZwXGYvMJ6dW5QcKMxZcfip62nN4qJgqQ2Uf8t1TXTefXaVDr59bJ9AZ9qBHh8",
  "key3": "4vbAfa7zbY5cdS77GS6TCei5o1HxUQZ4o34HbyRf9pzuzfgeBP5Mv4imbHmqWcDUjaMssjReHs7o7HGcq42nEKJA",
  "key4": "5CRZjfF85cPHPSvz75z4FPdCGwAvGrFNLG5uCSJgMV8AqDu1SBgzLhNbnJzxTYaVLtPa23YBSoCgQHGFp58xdKmS",
  "key5": "vEsds9YtbxAQjgUfF7nz2w2SsCyJtAwnZLZj8DDJxfB1qCNAUSacekD7CaqHy7bjwUm28MrxisXYeDqHZMuwNZz",
  "key6": "3DBa5VTPim5pdK8TpyvhowW1rPiuDKofLCyU3XSFtsqgw65JZibDbQsntP7bPYTCkheD5qSpZjAxhiEWjE1CGFaM",
  "key7": "3TitTjM4KHmKfRrWAft72GwZNEkYk2HPNKKRZ6B4gToKCWaHuGWFLv5mHqPsn1HQAQtEFPQ6X5e3XQ6Lvr8trnWH",
  "key8": "4DWM1njZLpqpp3LYLDyev8QtTNUTusPNiGEeSwzAAoe1ZRdwDUYHhDhAX9ZangkY97vLTGyCGXncALddctu1C9Pf",
  "key9": "3KxW4tWgueNeEZqu2k9jE9J3GquJGedffoRPMzCM7BN479NwfDy49GfgD2HADT4PgkmjLnqGSvfrT669UdkF93bJ",
  "key10": "5PkPbXdgJKuk3EE9o9oWYDLHYb79hAxrpnaPpYwQif1uBEQGGGVVTx7QkLkg77SzasDMYej1yQ8sabZkVjrkpEXf",
  "key11": "5P1t6E9WzbHBzgqRm8NETFE8SyuESK4fAbsRSTLnjkbt8vD44pwpiZyLd3ghGxFKQRP5SV2AEnHvJE8ADkJHwUi",
  "key12": "4jHhSNwbZfNPfF8x7nRWxkyW5oYfzsRPS4XW4Xw4khsTeHB6P8gi5V4hEJioR5aqCiAK1ViqdopHhbCtYkjBNxL4",
  "key13": "24HB6sXdWtWedxXmhwDqLG1JsmAyuzS5bkNUGKfU9Hh9z7PzGVPrYfDGvUZbL4Ae1SRpYii2aHWsDEGrStSkiVnW",
  "key14": "2HzMsWi2E6vGFb4E1GmbY8aWysds2Xun3dVKvjieEmsH4jPirDbpRdWEQNzWz5c4JZYvFYTV3gb9wx6J32AivMJT",
  "key15": "yx7XPCzp1cE9sVx4rTqFbQvTq8uWLx5Gq3YsQd4c5UqxLpSBqE9S7Q3ScX5SZHrd5R7Cr8ASj6cZNbgqTkh9JSi",
  "key16": "tTPbT2izJHKNTqts7dPosNmArHnSXspUV4UKE5mYWh8VBo8xdABQ5UjzBMBjAGQK9xAqsrm8hCtaWoCx9Yhwm2D",
  "key17": "31ART7aisG4s6WVX7HftnBCXhJsp7H6hzkdDCTNo2YcJoyyP7ryUA8SYPeuocbNqhR4wkA6SvAhso2fNTN7rVGe2",
  "key18": "4B1PNgWV4TDq6mjqzghAUn8XHTARBa7bMHi5CNgVM7NSrfhfU53P4aJirEAD46T4s4J3WCawA1wtha6VMZZpRc3R",
  "key19": "ZFEFpMwpVRU8cxPnfDRBQX7dtnaQ44ANzq4wydTcjrAQ5St9jQUbg6sq9L6n5cESLQFcfjwSKUTkJRMsmbvmj1U",
  "key20": "4f4TX1A3RnfJcahWeERuHmvUQKwuoA8RsdQqWhUbYigh6ub1nnGrjfw2hAz9eUihCFejGQQ6xEVU2EN4NP6bMTPQ",
  "key21": "4BDNzurSpk2BMhcYKkLwWebvjtqsSQBB1DHszqD2QvEtHVaE4ichgqUFK3tYcxutcsqMR27YeXVAPFP91z478WvV",
  "key22": "5sJvt9yN4f1raq7DeFkEwCDCTyhN1vsnYWx4bVsfFJmLrW7TE4kKWezDPm3iowBLdZhzZyVfUYtGTgc1ApqRG7it",
  "key23": "56hhDA7wfaZeiZFPJpMLgon8N1vqLAY9P36N6cjBsmt88dhChhvMDewtUVqw5s5hqC6bLYv7oRsoFy5qbAsMJNxH",
  "key24": "5Daj8G9pfqPPraJHZGEnqZh5Ff4rh63FYAKa4yVBsefQzbfUM6YQAnFpK3ED4ojxiwkyoM1KL2D5SJVJqU16Bq8X",
  "key25": "hxG8Ejnc6FMpumheb4xQuDtPjuRohMRJRCZaHiinisdPmGii4LVKRgEF6GdEbuCfESXiWDoixDzLTM3zTnr5YLh"
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
