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
    "4et1LFBt8yN8buit8yCmjB6XFcBstm86K14LRXQzwapCV7zhRkuPnNyfycZV5YGbSRXm6XXnTzaV9DBUFTDcGL8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UK7cEDSJVNQFt5SZFkz4w4rveq2B1H7J93cjJUFbYbg55oAPuwJuudpAo9aUhwR8aidKovo8HeMWpHDCYgqkGoV",
  "key1": "48km3GnLpTnUfTEnu9X8HBLfr6Q242ygRq5JXboRXbHUCav2CKxfDj25GFxq3EcE8Zwx6jkhbFoxYWitb1oG1sM5",
  "key2": "2JJTcfUcYGLG1T9z83URBAdREQbXF33GnW4M2BqYBhtVTBzwM1RpSnjWMkWMhdLsHCMy5P5WJvK45i5srQgxPUh2",
  "key3": "5AxXSUYEitvUFxbbPVzDmnmDdpS98Ym3YJH2oan33THzRNAFEo9odj5DznPcyTwWt8sQYeRPvpUfSnAUtuhecAPu",
  "key4": "vKy9fzRiLqbw3FBWeUJcstXXS4SEa49Hb7xzURDFSPzfqqF6DL55UEPhEdSLB5YYsJ4u3cTGPnN5WKQLePxrNVx",
  "key5": "5KbH99gHL2LURisLQGHJeH6VPgB3FSWceXopZL8xYdLYKfg9BpvEwPzNExgPjbxiiYHh1XZWKXd1hth9Y8migzH5",
  "key6": "62bepX5ZtVCWzDrhyadDs7FcquZ7nSLssnYhgG2neLAM9mtzLtW6zbWMLhwzweBq8CPWCmAPd96mqM5wESwNJLLj",
  "key7": "4cHLzzunLuCNUpU6HrgA8noEpf5cZWfYetV3PER1AeAWPdwnkvuwZmtzjQmuXnVTF3zdW6meHFRe1Y4u6V7Gaujh",
  "key8": "2n6wtCfBkZhEVG82z8XsHHVyyRRMUuCXCuGxGFgDTBb4giVTT8bh4jetfqo1TZtM2Pf4X9M23TvG4fjSszcUHA8X",
  "key9": "KpM5hbvnkiqe3S9frf55UyfE5QyRKHto7xii2avzzu6aTp5SSiWz6gVA12sc7tngufqcs6FoPR4TkmxCSWC7bRE",
  "key10": "5irpBTbytWygCJYhRSQkZXUFD8aZizwnndsoLZhrQsMBVpZkvxdMHYmfy6kS13vimkEjss3Dgdb79qdjFNVy8XwR",
  "key11": "zVxmKrgbCQsJhWdqkmGL9RJBzogY4nDNhQhMYXzNoW9EbxWiawuLuZohapauLV2JLBJyh9Rogkr7RptbD8vEj8P",
  "key12": "cHGR5rao1QfgjCKRMqfBFanF8mfkCzrbbu8uvqWqNV1oZBdusPEMmZL4j1EmuTuicRAxkxZxYycv7XxMgnKGt41",
  "key13": "46GyxjzWK7zxpCADVDuzixzNWNNGce5JtwFYhDTh9gy2T1mgU7vq8LCGMX85eq9o7Ztk4Gfr5xfA5iyNpAqTBVf2",
  "key14": "iZmvjy2kZbfKzo5phUf7nLfZgYJLsqcJa9kZg5uzf11YPQ5iJb83aZvsu1U7L9GpfKaorJC7F5RbBodGvFkMLLQ",
  "key15": "5xjoBBHThLJARtMrvqHiPxpp53g36vhBNsjCqpUrAH1a7MpBujzxRS2Yb6B45nghtEUXyTcEADBDL8iJKmHHJ1v7",
  "key16": "aMMFFrriTFcfZeyDdb9Luzyo5ki53bTGTjt5fxYnKy7DkCx3pbhe8SzXpd1bAKwqGvFm1KbzJnqGA2SYFTYkAq8",
  "key17": "5ta52iHpnZ5Xc5kzhqiqxtRJ6Hjej1yxtF8c3tkN7mrYzTwaxhBombG35LHgSUrpgkocooYNc1mH3GsRmMuAavwr",
  "key18": "QjgGTbXAuePzWMmSpZKALwRNJrewFUVC1AJXQsotbTjsNP9jQWB7oR36gTcJzxFe1QjDwqoxATyCC9hjoicQKFF",
  "key19": "3hU34sXvzk3DZTFc5MFR1PxpRCLMXqZ589xRdSZbuEDNiJtYJ1ughKKjqo8kdidPpoNgsGCGTbPQXW7QwYJ2cB5j",
  "key20": "5wYXKvVaee9T6CfcJPF7BVKN8LJv74HNjqnqhxqN4zBZgWRhzhVjgXZpY8ZNLa8tJWnAyT5hXzak111SbBJNCxYY",
  "key21": "4RaKEWdSHZLn8LvLkr1CJte9uwupsXMEdwtj2VGWpf4PDAQ7KhnUti53Ae7pvQ3Ki7EMGzBxGEDCCUageiPmPftk",
  "key22": "5Kuwz2iXNarZXzKWrwPwS5yG3GrfrPoFkPpLfFcEycjkqJwpdgD1NFpVydXBcaksPtRT8ecRkzj1hmjqZinVtEwn",
  "key23": "63urWKJB1EUuFXarGD5FEen1tkYTyvVSshmpEGQYzDQe9rezn2zop4mStqFaGhGGhrfzeJeVFyjZBnueuzvDD7E5",
  "key24": "2sc4PvFSuVJhujLxu59yvt7CmpJsCyEDnJubKBvbyWZEGWT9Zw6sbSPUWt7ZoafCj2CnYeR1AXat5JAk8BYzn2bz",
  "key25": "2jWqya9o5GDmq4QhEYmrUgEUMnitEnmjfrf6LwBvTa5QA5V7o14hjY1Yz2JSUjV2XSECKY6DKCBWyUcr8BMZk28B",
  "key26": "3dzeFUXY473Z1MzgbehTZqt7XzesuSi7CV6R8xSSVFU2QCPoa4ao9f1k8oi5Tqsvda8JJV2Lm5pHGPHbzi2uMr37",
  "key27": "5PYBpy56MS6KXnvo8PwrQtL9Lsu1apaJeMYcSqauPKeEGjikozsxgFDzGnaPvtEKhkHwuHsb1e1s5zHSYSf97Twr",
  "key28": "34TE9DA58VMk6fPDorfBFR9Vj4TE6EsuxoZU7eFo1WHTrX1RSUjAxC5hQtP7pk7BpDT8VzDCXtxtfWxAw64GhQGP",
  "key29": "5HAwh9BCC67a5zKXsYNwgbKE5VQSJ5xfvuzGRLzH1F4qTsgRULSgKRuGpJk6Skewd2kxktWgYzZtHmYJ2H38mNT2"
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
