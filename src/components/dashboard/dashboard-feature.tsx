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
    "42CByLQeuM2orWuAhLhGb5QbDoPbVntiAddToirqUeradVmxNWzXFEiXRuRnC5uykYsNFeFDTcKDVitKR3cqMb7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J46B3tawXfDQhxysSYAYP8jPTozHfu6mK1YhSY97r7hstJRE8RLRhto1MEo8aczTUpaamrNcZFQi1VnUm9Sn98x",
  "key1": "jHWW4KKt1p9oX6hkYFiqGL23dBWbN3gfuqAp447mzjbjBR51PaPR1G3kyV8rzb6t5xZKG69KWB1pDo7KZLsTpiA",
  "key2": "3RgyMeLtVAP4ezQSXrR6Zq8ZHwzGXirMrWFBDHxvYDgXjg2dzgtWcHBUWFNq7Mhj5GAe5pg5xQ7KcWaxgpVD8NQy",
  "key3": "sk6NMP8i3wv97QJcCoDVLXSKBvTkc9dF9GkBZcuLcFVycbnFBABmKw2eYTvn37W5A54gCq56MxXpJMT53pfFBMc",
  "key4": "nSfefcA7p9LUmTSMX3eRj1KNDmvZagRcsFYYw46ARYafVLZhLkvVBTKekZhqrzEQLD1J5piwQsPpScyF6f9BjpE",
  "key5": "aWpXgTHWUi79wUoY1wuPVcxqEZoR6n8hk6yXSSDan4C8fHSfZRiRNjoLNYF88esnDXUjszmHdA5LF6u1L53Ls5Q",
  "key6": "3weW8735wuFWfwvFHWUYUw2qBwKoq3LZ5fAMokRUG9Rtppdt39zVobfbaZPfjftj6oRgnFBzfTBVM3TS4CL2NbK7",
  "key7": "217NXAq8RrVN4uWMdLw2xqyDKNaFisu73ZLDJQHbfioFWoJgiExAz2zHRLKH8ejtaTSjiWsa8W2gvsYYiUGq6PcS",
  "key8": "2UE2dorSSGoerQCbiLQXCoxXDiqqi9tY7EC3W91BZFYZR7LmjHQZuqEbJTmHQoCdwGfnizYWsCV1ziR98TayQ4Yb",
  "key9": "3wyRWaC51CWqAbVHcAFm1JQ1UHzrpSPAkfVYdR7C8aa7DSadoK1reBTaUu6BhBb3F7CrHDb7z9aBmwndC8qKREEh",
  "key10": "29UvXjc9fzwZi9Hr3S7nGaiHihXfuua5dzpHQa3AxFKVpu1hy9ZGnTs8fy9PhKPBQbGZXWTHzvS9RFcu8N4WKURM",
  "key11": "4fuPfCUt68KEpNVBXcQtdJSgGbnFvqavsVYEnY6iRhFxvXWzLvyjXgYy8mpevWeDhLdPHNJUAKzhGhNc7bZfQcYr",
  "key12": "2kVpuNPRYGPYn5T32m3vH6ATVfjLzxW3sNQL6Tjt8XTwuDfsA7fHLfQvPUCwnkqKeapreyQ8TD7gtduaA4xYebU5",
  "key13": "2g2ZVs4mrzivzyy9zY9JxWTfJaRheAM1pB9tvMDmj2WrzYtNVzkxb5nqSVzcfWPs6q9iP41LfE5j2FoYj7EcfT3Y",
  "key14": "2BV2wrQ9iSndf5brvPTHXE3dx8PFeFmrL2xLYu4HWerNp9GNmhv38gh7xmy467vYpSbv25ZYXa9cK3ni6h18hTG8",
  "key15": "3SEzppgpFDzCKoRaMd4Ym5rWAUxci182vu8ENMorPn3vBobGFXYCnacSrLkLCGxH9bZ68UzoRsqSdFtUQ2j6Yk3M",
  "key16": "7Xx24ywPAjZPuugNz4tbE2wfpzWCkNapcdDTVV9KWzThEa728saPD2Ns9tQFNLXx7n6FkHd2EncGHPXB4Jp3GWA",
  "key17": "tt7A2cL2MhasRH5RPGaQ5r1vp5mWkxxbkwJ1mymKgpFyDSVAgoeGjMGRByRZmamfniJZsb8e2NAe2jdyRkrXffn",
  "key18": "4mELXs7Jh8oQgxuzpizm1rbEeXToebPYByC2cu63YVtuK7HMKc4jzXqpSSFeHtNxtkG23Ug6cgykeuzStXWJpAJW",
  "key19": "2S6uKDxdechy3j3g3Vdtt4BqsXM5FvmimY8SzZA7pTPrAT5ciYjPJ3UGvtDT9Y3g87n7BgMccUFHAKNG1K4rCimD",
  "key20": "4T2cGMKeCiNzWmvk3Y6Yy2iHrvVGrQAw8Ybfg4WB9AEQQAqSNHDmRHQa3ekaRBuVVcrUbwXFnQ7DbZ48njLSWbTs",
  "key21": "3sMrP6q7gSnxaYvMLYi9KcBvfDgm5pbsmhzyoCLpVR3Dd2KFhWTeKezcDDwBf6bHpgY89vXyUDAnxj1WPGkxePeG",
  "key22": "2rimyQep1NGwASzzyqhFWk6fydvTHZSR33nhLACXgHY5NfooEm5sxCJXc1oohBXV6tsbgiS8kEj5DYvvcnHJ1R5C",
  "key23": "j6espDGBNnEHJ5MyTN4qomJcvhDbACY4V8uybctyUi1aBzXUvZXa2uX8eLPymHEC1gceMcFA2YZNha19rJjjgf5",
  "key24": "4QzUbZpJ1DUg4ebTtULmZf2Jjsjj61eZBe41Kz4VQE1SDTLQnVyUuWzNE18wErJEHgKye9YeSNMwLnkTvQhiggQs",
  "key25": "2N8pVZkC3Mh3yCfx4WmZcPKgs9uvJP4dnHZyKCakm4jtzEJLzZJhAYMxgipY8tfEXughnVVnoUYrEA6S6NVfGtXx"
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
