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
    "47HuasuWEEmdsEZy1Cf7bt9Gpdh3D1LDSorGJaPV8M7q2AsAay4hCEATqdQFEUDfiWikNRxdEta1ro8ryGrihkm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ungizWcDizJNwdvmWZvybZcgpLiCTRJTXD4tQNppfvqjdMU9z3pM1ydMVTopLjV8bdzfSNbc7fZbA3Kc1t6WUzd",
  "key1": "3QmMZcyYe4U1ts9q8eg6XqTev6hFBXTxyLenQF7ec6f8XULwxLCijrCP4ZY4zfv1fkhTD3knv2bCWnMghkztFkHQ",
  "key2": "4ofrXFoTBENW3rCSscyCiWFCWp2hf64B7ExxocKW9L2zaRmoqi8MouffNG5R5K3fNFQU43rfvsv6BbjQP33Qehet",
  "key3": "5huXj4XnkmsGWrzGbtZoQ1rNoUcc83RYRYdDEvvQYz1DCHkELygkDxNnp1yzeYZ7mXEeQsSvbbMs4WNGkgrP898T",
  "key4": "3W8rFPgRmQM6yg7vSt8Lh6JHLLhucTjAcagikVif44dS2KCEnyvAaGF9HUGYJKkwXki6mPuFYobWavouvfirf3iU",
  "key5": "3dTtY6iEBiWJ4GGwZchFLQ1a78xgDiigcmbgRM3VYRCHim23QEogDfjRzrCXhSjHd6xPUTmeKvSAJ3UEY6KgdaEm",
  "key6": "2hJbVdprZSQ7xQM26ujbxAz8TG6Em61axLZqbzHBwU8HpuXeuAvwjgmxXuf5XiJhWgeJcPtR5Ejo5mmDZpnN9qq6",
  "key7": "45WNxPMrQqAMDQFRFxi7pHkoe9JMgnH4ksGR4UtRzc3QKJB8AFtrKAmKmkSAChAs7y7xaS9RnzVG3AChu7bmQoSt",
  "key8": "4GojUAmZN3U4TG3H2cvb5wQTWpKK8FRer9aAgLiAtoMEew7QMLUFNhMWr3HmAxmFrTc5xAoeta2GDEqyNnkt3dah",
  "key9": "V9m2Qtu2ZjoUYA3PthVmk2AHSUgpqWem3k3pmQyYVzhBE61yUFuFnzkhHPjEx7kUuHb4HxdWquuJQow3JdajweF",
  "key10": "K1XLjfUxaokmQtetVy5mvCkQKbJDmdwXMfhHVCMxnvdteVGAVMwmBZ9kuQG78i1HpwnoXQ3mNgjeYBrCW7dGNQg",
  "key11": "3NnvHrbB2758zimj8xKp49UumugwvEWqHhCvtsgbMMvFZdRTtD6orT7tu2WNmKpwuzSXWfc5vb5ruUgiky6SV6L5",
  "key12": "648oemiDvw42zaSPuh79MMeUnVsYbfaBbvVZ4P7wUn1WTiD2qe13NpXmVTLeGrDE3TbDEaQZqPcosqBKtZD5Uj49",
  "key13": "5RAji6dpGRAULQMAXuVt3rafSLTP4qZA1uoZdQgtFzwJcGheQGGWmSxH9NrGyjXZCLdNcibS2gL8F3kiMCHkXA3D",
  "key14": "32FdBhRZnYwhPE3aVivJGDXHb1CYcbdGAtUiSj2hvZ9ZPW2H5s9NBBByWmNvHfsvbaS7fqzJc5p6yQqLU1Z4XYZS",
  "key15": "5yStTS8wiNxmUf4iCxNvbSqPiw5NPt9wM2TFXHgAF18xgBd39b1GbkCpjcRsSWKYoYC9Yp6XpagLtfctwt5yX3dp",
  "key16": "55YskRxB7DCqRbgsAQhFNs4RVk15n7oA4roUrvoXc2G5kjtm9u6Y7qsabgp4agva8SxXz7CY8J6sMweh8hoPL1YW",
  "key17": "3hkJuFZ7AZ2Tvx7Y3ATKeTqffHZ2GdtAJvd57dXqbGcvvUrGXR6i3r8Za6HcjUPZMXRNzhy8QD647h8KBxGtpTcE",
  "key18": "4viNcvXcTe6Y7jMsG9HLsJcozEvykFzAdZzAuXTWiCiiTUrnyZ3BzP9utFAJbqB3jHDdnamR3wDw1tFRf4G9Rozm",
  "key19": "45yFevwj4DuoaSueLHdyMFL7c5HESqceUGC8VXmUv9ykZ7hY2QMYfeLGBWCFSLC2bdE7f1Tmjqv2MZzYKbsvEXZ4",
  "key20": "4u9932L6oVzxVbKxtJ7tZ71Pw875V9bSrX32fZESb8eVTNWrCd5ioATVvbWguaiwWdVyvQ3R6rjYnt9iznVS8Jyc",
  "key21": "5BrF1G7tDgEfJnGGfnfeMp4XXDufN7WA6KsqXMHkHDgJ1eZEZzkPSebbykLqBXHQt6xFdxpUERWhsRxBTGBw7X72",
  "key22": "44DfFR17Cxz6AttNnUc726HCHNtK92g6nbGL98UVUB7A7yuGnDf1PnExgwKgKwqrb1LFBTyny5wWKkHDM1BbvyGL",
  "key23": "2hnqLcHGQNu2R1Kiz55xMTzqoR21XzEYCmT71oP2yN9uaHXCsiGwDpheWh1K5wH9HmPzHJ9ii7nYjR5WK9vGzGcj",
  "key24": "3WS9UdtvbmMWgHQHtFoRBLk6jkPKpNRwEuhNohrvzs75ebbPZjU4cZkG9LySyEVqHKvw6onf6XdaRRPYc7yskNAF",
  "key25": "3KuNYAwPXh9aegvipRYinfcrFkk5wwUKdgVEiCvx4aVRUHTK8Ky9kY9Y6DCHcihx5tgXRAzDczt3RCdxrCiQwG62",
  "key26": "3jxCHPQJESgv84zMm4NKTJVxbWaNexasEteuq4mRxLqrPipWTRcpUs73KEPLBytsTb59mrbwVM6dntY9Kn4Cg3V5",
  "key27": "3mQK5fXAMAvJ6feYW66WiYk9JPPVsSkexCSqhnMac1RnpsKppuz5MrSxsUvvr81VvhDkDLVXP937CNpPYBiRg979"
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
