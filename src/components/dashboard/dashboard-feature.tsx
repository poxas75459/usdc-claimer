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
    "NGhYjDSwR3b2hkVUofJzhdFeozrN2FXo9JwQ6G2Yc33te8PFxDow3bjPrEBkeqLARkHHVVHardpL7uXMinHMCXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43dr5G6nRwRMqFAzBYNuk5JhXNA8uMaTrKyPfKPoMXfGtAfzyFdzWnghnUeCckC3UcncxEvMAGF8wseKaPDNaPHH",
  "key1": "LwwRUKMYAiWXRY85Lorv1vck3T96TDkcmL6mYnhv8eXKT9bibkepH1qdnTfY7suy1jqmfoEhddvhzJnWMyNiyez",
  "key2": "2D8nZJcShybKj4dWMS5QqoBtDMSjNxTqDJFTS11Uwg8sxwdMa9fmCsf5UHBNwXiU7zEbju5tmMvEfPtXfkMTJbb4",
  "key3": "3HVpGoWzV5wqi8b87psFEp3w4RBTbCVzDrZcSMbvv6Lcch1ys2iQAZxhRWSowAU4yBeGaxvsCNeJSC375avjk5jM",
  "key4": "3PeMLdwTDPkuF28571Qkm5ScQvKfkFAEzNzqrJtgcz4Gy3urKoePKDz42wH4fXXcexyrb3LGwPhU7CCfrA8mdQhi",
  "key5": "33xyjVvyQEHugXrixbeZKgwrDVgqxPJBLD4GyHsooBxU1K6Zxv9TYuhR9e4NbR6q4raYcDp1CzZd27MbuHevGNAB",
  "key6": "2kEEUiCwBrPqVBBj29jUUnFpngau1N1zaPKJgsx9uxE8cbE5Mk3NgQtme8JR9Netys1jRWaMMzKVQ12UmTvzy5ri",
  "key7": "4VzPJ3VZfnyqbzCJr18zZgRvXjW38XUUeJ8zNZ7cCGqQvoWZ2jsCgrBZAEoy8BYsHc7t9Rid5wPKVTc8L9H5dtxi",
  "key8": "4gpww9jup8d5PWUCfchNowoqTrGwEapAVqtNzufzB1GmeK8goTKy9XNyHqrVaLgGH57aNR4W22dXf7vvpJHKjGTC",
  "key9": "36N1WwBypnq86naGpJm7jDYu1hkwmdL8Fqwe9Eebw6jFJc5Q87WrMmqxCVspD8LWqZLj7FVe8TXEQQ66S7M9wz4n",
  "key10": "qWLCv1wyPqEZSwJPNL8XVsfeVzddyXXgsHywE4TzxrGHHHLV2nQnhYpBm8Bh3NrhQWpMch6hZNA7jcKpSMehsTt",
  "key11": "52TLjpu2d6vvCTxEiDGjXmyLei53nh5ugMVLtvP9QCo7Vy7T27ruypezZzwNyVsy2DsLYL257pNAg5XaT2GaY6oK",
  "key12": "5VTxm2rrEk9xqGRu6wNEPyJyDWAMta9w4kry3aGp4hFKZPb8wxBZBgurTGfPKE3eoTKHE529Vc7a5CzngnsSHnbE",
  "key13": "4ZEveFQ7EJuUoC4NK8AVxNEzRLz9VbiRbazxkR11PbpeUq9k4iRSPd1eaB4rZVQUnvX9Y7M7VadPYmAr74F71M69",
  "key14": "3UHHqgkKPVKmDX31xtccBJMYdkhXUfmxM69xJd7KkGnfNszmWtiMVMHj2B4mXGz16bbS6qkEpmwAVq9EB6xrh3LQ",
  "key15": "2yBwmU2gK2YR2k88JDn4vAmZ7xv5bGeBmKdnKWMS9iBLCSBYYe9MViLV28sEWFSEcbXzSTm9Tebbbuj1LE8yN9jG",
  "key16": "3MFjK3K6cDVGuSA9KrXHKhDQj9YXXEMySC7kB8qb5v9evU3XNA8PttERRexo6RYxFvggfdjxjSBDsgzkVbUKm2zK",
  "key17": "5PRLy3TicHvrbFP7z5BnutRE1H56KBccqn7kRmbbPNotbz6K4t6jQjWjLTjNFUKGn67wXKJR3qy4FYyP5GAnu7B4",
  "key18": "jRz2iMCbbJJirHoxix5Rngc334AA8uhCWcVr9pihfuS6k2suC7z3RY17vhWZsJwNS9grKbjADy1DB7zw9eM39xc",
  "key19": "gP2o7k8gyVg76mnDKFccfkuDAtvYnSegz9QbYoTwcKUcNWg1GPyJffZG4ggbhpSfPFQ8UYz3t5zPdCbPqNauLo1",
  "key20": "3aFZqVxerzVC2bc2a3X5mECoCiduASPud1h7Pit7EScdfAyAsRZm6zqMv1rz8pvvnZ9qmg4uGjSHiKa5ZvLc76fU",
  "key21": "2CJKLi2AyfCgcxSKDtJgR5XJFSrWvfnLsztnHtpnq1TPoE1VkbjNzisTYc3mg2uVssFQjSGqbKjrFjUykDwx7goZ",
  "key22": "vCnVZ5YeSEoSo8dpJSFEFY3XTyyt7h51nUApwa7d1eW6JcJHgGX3TT3PzfNAqfobdR6aCjmwjZFa48U9eATKnBs",
  "key23": "664woBMJAngpRzc6Z6jrKBSJdtZ5saQKAFBsF11fjW1vbPnMhwZPaLPZHNkVz8sJSoFYxnZKmJep97jKFfEweCBm",
  "key24": "Q2vQhVuP7jEhj9ck7KZvCkHNPGgQ2MyegrJaFHccHjAsk3KKAaQzrLoRKYkUSpb3Lcd9Q2AyU5Pqx6yDicMidVm",
  "key25": "2dxLWBgNEyW1P2fJdM7QFQeit5MUCnVxne4vo3y7Dy8LAWbJEQH9h4t8XGe69PZYukNq31BKVS22zQoKZk6ezduK",
  "key26": "3a8RavDVuFGRp4PqfD2Z755YKAxmiCLzSs6ELuyFEjFTGbVP4aaVkaMeaqp4pgh9WWTmm8KcpEpA31i9QHi7W5vn",
  "key27": "3xQABHqjoBgp2GPBB3m4N3XkMcBnaCJ28fAnpeSrxCkbf7AGCDFdSGUPB7Yd5TdCfF6R2Meo4hZb7sdXwegQELVy",
  "key28": "53He78tJmcckmQvM9oBaZdyECvqc6xBdegkMfL7kqut7Ww5yeddUzDfM4XjPYLhMmKTyjnjQWvQWRTBRhTnHBjFX",
  "key29": "3FV2u5NZayEcZrDUyQxNsuybeG1zsyAfFMeQsCk8cuCBGAuBRPSqtcR7T6VBQ2ddJrotuiW7ud25dmdUu3MKb2JS",
  "key30": "5kLkzTbo9QEcZrhjeGoHYeUbFq3XzH7S8t93Rz14EnefUaopu841v8sushkb7JALmDNE9J5cvKt3qEwMc8cZrG1p",
  "key31": "2yw9F6HEXcuvVzZ6aFevQgVanGxzzeoYxnssHJ6PAqg2UAbpfVJ2uf5PBHXetcjqTjoCgzy4LSYNSFjm1ktWycy",
  "key32": "27qZXbqSkgMsF2h1JFiKtmj1Amcat9SvLTuDTcsCkkjrJkpfMwehLH443RpwnJWzWjzy46C5cd73hwnQAAGnpHVB",
  "key33": "3DvmennRP2ktzD66NEuJ9cpwWw6Gs23Xy6C1Wi1bVQ8dqASuYbrkDHEKoieNkxKXpGNSWKNcaj5q1wdn33F1Dtc6"
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
