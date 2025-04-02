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
    "2gHLN3ogTfEFPCJKBZ3yDt9BUy5vSjDJpjnq6TsQtaMuvyvf1LZEz9G5VgFZwr7wzyuJES36uyMEPC6CAJDATBmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NW89DtmzJBHukQCnB9UEwV1B39UUNG7FyRGaQGU8sgCdAtCuhCWiXwjnu9MCFZoPLQYrQo9qaqGPo7iMu9PcvKF",
  "key1": "RNpZ9KAAf1Tjp42LsTj7QZnBQZq9aa1juHCa412JcSUjXMmddAAjzWSjGRVveppsimwqEixWVm1RDFQtjp9rUud",
  "key2": "4EpnvjDNrcuGQZ2WvcUbJMWrp2zZRLZouLt1ArW7b1PkhApG6qyqw39RwPAx21BnPDPDAj7eisud1UUtSyTteNCB",
  "key3": "4Ne3mbgky2E72h5YNWnpkHTaGFJK3PYyz6DeBc6mm3JpMTgJZkF3jwjXLTBoL5Goh4vFTG5UiMw521T1G83pn4dF",
  "key4": "65FDG7GbPYg93bJxcVyVeL9C3EKZBKPzCDLmGmjL1LacgAwUeW9m46v94zSBNsAHgQKzDmJnCE2zUCAPW8GXcS7K",
  "key5": "29DnbPvT8KanTNCk2ABbtxmrvbmqbYXMexgDTQpuCS8C6VwFF5wMswckYJ7KytxSB6J8YGGfKiYNn8SgGD9wVDVs",
  "key6": "5ag7CbAL5rH6VDeQERDY2GsiM3X9JJBdzYHJAcopof86KTzvjhgYxgduQKhDS2mEW3eeNFvRXGfg5ymgtDmoXgc7",
  "key7": "3hLZCnDpV6ZdicAU8NU33Tkg9ziXYPPKG56sQBHroDzqukNtJRy8K3SNgDqvY9BEi8L56gwowXEybHdPT8BvhQMe",
  "key8": "yWisy5fcT2LhAkoaA3LmKrkteM59anpqREtZHppK4Zdk7e4wAWeB3XXjYePP3uqKRpj4VFgrA4T4h7NaZCoGPSq",
  "key9": "3S7qWiNjJMF86ZyK3CQJ2fTrUzSFeWb34fFqvhAgd9ecGdGyNfiD3B51uzzri8PCndyCe3tydixChgXL8PDU9feW",
  "key10": "652BWFTYLxW1fvd8XEKwh7owr9GKHzZPHfBptADr1wtE7zsU7evKA77yxbaVmCGXQ6uP2A4S5ud8dNuGaPCCcT3b",
  "key11": "5WGXYq5r8d3LXYGsFtk3FeBB2Jr74gQ7fCLvJSpmzDANh686rwWRLXcTJorprXpkjr8c8MTmx77ubNUrnRMM66E3",
  "key12": "UGc7P61fmzgZeS4Sa4v6woZRGVoxEk9vWJZgJsjQtfYc1N9uTVcTESydCRYTibxcp9ASLunu4R4dJ7b3Z9yKiPF",
  "key13": "gzvKHLPjiia7vD6d8nxaXwLjU1UaFtLrjTd9RiYiTWsDDbutDipRbWndBfg27nBsXgxwGJTnwzp2sp5Lj5yRzqR",
  "key14": "5AZ1r2JgbFTh8DmeA1gAa6pizVXKGwhHNZmAjkgKkSbQdrxvaHA8CqYMWHysQpm5TPXfn2WhFQY5ukUMBwm5rzoE",
  "key15": "Vgx9RCJjQRANbeCC1F8aWnYSH3MYn4vvY9VyNkyrQ7fKBANLQfgGoA5AhMeFCvB6xq4FatPKTjM1q4wBJb8t2Wz",
  "key16": "2X5WmKeXhrapWP9jenedDKm6BwpdgwRut2egqiegivyC6jTipmz7AtivrWMEgZD5M8VPhWMEuL2dnkVXzs3F7aur",
  "key17": "XvtzyZBPRnBQUiJ4YAh6wB2wEYCRkRujJG3fX7wivzSgYnE231EctxfvjXsQEt2tpKhymRewrCndtJV9RrYjyAc",
  "key18": "3eKMfZ613NK4ooVVnqzwNKAQGXg1PwEdUbgEpCrrfDYnvy4GknrwELZBatkTSBdoLtdYXTmh2wwaaMNtm5dzoJ4R",
  "key19": "25rowUvAkr1NP5rrS52KiBByV1w3FMCBQX3DVwqdphejwKeypznT1TvdcKop9fToKihxo5VX75EP6wjvjHuMF7Gm",
  "key20": "ShbPuHQp9EqBnttE23idj3YkW3Vim43cjmYkfU4cnGF1UKrsgPwfrRB1UDTGGYoamSoecq2AGVdQZSPHCjmGuPg",
  "key21": "2Y3KJBiykJ75hqXu5Z9ieSivUTFXWin1oewc1Vo9DBFWtHv3A2Rb5mtEXdZcqDD9maqAT4G6kQBFSMvR23yEken4",
  "key22": "5yDBbLCrp4RPG5Us9eb2inEXTarnYeHYhaFUYXzV9qGYAj2ZhDSXpVtD3B2NvTQ58J1KgiKyJrGX6prHi9z3RtC7",
  "key23": "QQNhAVA2bFjSi2drkW9XgBS9a1Xr4p6yykJoabcM8dGaAmds5QSzWZm7ke4hx5rafn4pvf9LShESu4XiHcXsUCQ",
  "key24": "32qKuvjdJRfK4MFFwugbvdAkQy6q2nKJggynhu9ryDMxXPmJgifioimgZTTTCsvweAFFLm11sJaJzgXMncQFp9NK",
  "key25": "2zuqbBmxhnUbXvM3h4Xpy71eM1nHXmUKVAp5Bbn3RLz1trc6DJKN6wXLFt4b91qwYMpLqW1SpRsJg9kDH226ub7M"
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
