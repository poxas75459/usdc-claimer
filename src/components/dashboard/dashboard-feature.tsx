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
    "5RvHJQJwWggknTrnfcd8NkcMrQgCugTYA3crZL6rfeSWYgbXd4Uj7CXxKGe8oKeFRytAn2a2zb7dGKeXTCm1M8WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52xQU4oiVJ2zfeikHAw8E9XDRkrhB5Q2XzdgWPtovBR27BfF9Krj6gdmVh7twuG5Qh6z7s2fJp9r5XNCaiGRoScV",
  "key1": "2sBjXVVh8qpPoRfQDmdex3Gs7QDyyAy4okaA4bwrtw3AAp6ci8gGB9Gp3VKAdLZsd5rYbGfyeMzeurk64zE5VJvu",
  "key2": "4WBTLRuk93iCvMXLd94cv71ukqKcnJY5ToHvHe9t1jg2U9LxYirY2M1ZtTNc2XnHqBmacpHHuL5pYv4pbksZuAMD",
  "key3": "5GH8Yt89U8GwEQd7QMJAHAguGyqMTnxz4R5aZbBsDe5np7tewL4ZF1X2LFPKCpbZwatYPaDfgg4jQGhfJyikss1Z",
  "key4": "4oxymMfVmtJ6jotq83m97wX21AvSTaTuqi77phuwx1i2vMqfpzhfq7svZWSbf7qC5BSriVLBZ5XcWiwupYcXs7SE",
  "key5": "4kAiVP8uBBdgyPKEguGmgTtKmKr7CYvuiNaUKeyALGEHuqJkxNuq1jwoXqYkdNVsLWMc9esw4NbmGssWAqCwHheo",
  "key6": "2hnQ6GWhBf9fs5uaWfSDwWzSrEYUhHNNXPHGcb2H2ECriR8rTYWEcyPoL9jCQESB4giVBsnFyCo6yphbuu5L2zpr",
  "key7": "3UutgqWHuP5NPjMzPEVWVukTjyESDy1ymCkWyaD7w6dLpETvmBLpM94j3MSiBF4VRqcFZkXK6Rms6ovXXkomKfG2",
  "key8": "hmoPh9ULAB6kH5pc4SHJPcEU8hQi6z5k4yUU1bN4oJLoP3bgsrvQRnvmSTpuygp4kqV5Afytu4GC6fPEVhisydJ",
  "key9": "2oinGv4h8GjLut2aUqHwyti6Ciz4146VyeUaYLAtw4o2BqcB1woAmcHRSDEWXH47n8kRAxZ9RFWZe3trQC7TNWBc",
  "key10": "3qxP2BEGhjd7TCLpFN9ZDbw39PMFF5wj6bE65Nog1JgrhpLXPM2epYYxCSWYzbS7CzY3rcZkAx99CvmEgJaRjGeM",
  "key11": "33fhafXJSJEmBhgNtNLg6cVtafrZ36j68Ptz2W7JjHb7REw39SQyi8CPgWuaiwnxfkEyrwzdEzxhDLdf8u1VyrfZ",
  "key12": "4oWWAJ8HtYHUqnAa5rtGgsiy69PD44zbNVaEj7cPybQRb6pat1u6Qtq4ogjF2WwT3hNmosc1CdJcQ6T6NwnnAqrr",
  "key13": "2Xeo5yKnLZUudoB3he3ahiMiVRorcK6qkbdYp4zb6Qe6oBK7m8D5TmAexEicwbe56NFW2Kmt6CUWt31m4PERVcRu",
  "key14": "GPsLKXoE91Q2nmkc2Bq5QysYjm4daniBqHcvvEi8ArCY8sLvAAhv5ptDmaJ1qaec2vKPyHCLFQEKnUMGP88qgtD",
  "key15": "5XWm6ACG3PwT5iN7C1KjCDpjPq8X8D3GFoFnjGnCh854cx9mgQgxEfZTn4TaUDZKD1Ey3YAq8873LZXCqoJwy1eM",
  "key16": "3HFCPUuRXBC6xz3rCUnwySvkGGzJzDhJ6WfEnLMhNgTb1K6gYMUzeBpfi1XToPqBbjeQWhT3vfup4qBNBkRZ65sC",
  "key17": "JMY56Jk1gR6ojGoZkmGkepzA7m5sS4XsKY2XSWGbVEK3ekjR1iCoaGhtqTZcMujBu9B1HjSPJpDjCNtPTr3aU8m",
  "key18": "51usCwk4TXLdmmpAAqov2cEo7DCCjbq7xecGQhzgTCo6mBCWXaUsWVkR6mAnvzuqxm22pYUHD1Nvg1t7pj2htvUN",
  "key19": "3BL6SvgzWn2ztWBFGSYqkQPGp6iqPGGAXSTajWnWt6EpDkvgnskWZB5LitmAKt6y8KkRwjXdMrwPVecfBHTGpe53",
  "key20": "2Wfo6fo2xM72tcwv1DRuzbw9WHRByFMrHnZJWmC9qYKMy6nfwKSQftn4bKSki448Y3p7pBdnKVbEWfRsoMdSSAvn",
  "key21": "4Q9VHseQDoHZNGfBCJdcNLiSceoDWbiNkgib5idksLhLxGzybkoU5pkGGg8BiqddRmZhdhZ35HBASRv1NdeTbyZC",
  "key22": "SPQMFFZHa5PRrreaCPG68L7yjBV2UAQhsohbAfBhQ5gVre3ZRGUjzUjjw9DX3yjoEZDtBoDZG5zhnZB24WawFfu",
  "key23": "5Jw9iVoJyorGvVMa91gtpc6m4LEgGEjHRbtBkheUxZ4NiYt2ZY2nesVzmsaTz49ju75PPCuHftCfM3T4V96ZvPUj",
  "key24": "5QQ2HGHF8kLbKn4qUHuMgwkyf7yzPeTgoXLnsdgi37Mjk69HxQf8UWpBJ7t9Xcs9xjxfwDuEJ9ZfUuwrkM4CYPo7",
  "key25": "dr2i6JJNJ865TCKvYN1CBzb251hptDyRAfn1uuBzFZG5bvoeFdsppVMFTHqkRvjVBiJgwjVjzMqMiXSEim2jXpX",
  "key26": "Uked8w9ReVVjARR9Ar4tywqjNc5MF92mvSZvmTmH5Gy9mscdRWxaZAjH6y92utpP3rsDNrqoM7w5UA38fVYQt8E",
  "key27": "3CeFj3tW99xqXvHKikZee2Jck1i52v5aWZQwW2yJFHb7kki658YFfavpWmRkP4x43Ec5tGhijwbgfXdtLVnGwGMA",
  "key28": "3iTyAu9SYPjczVL2x8hsZuhqzJ59i4r3CeP268MtpeotTmcmHVKBwPs1TkR8AGB2CX9PQYVAX8k9njVfV4pFTkgi",
  "key29": "4reg92fukAM1yp2rvQW9oyBn3AnCXPFSgQU7pJp9NjE9yuHDKqgtgpgpBB2psgXUGvgEp8AxVLcW7528zcPVo6Hb",
  "key30": "2PPTEnqjxqntwY21HKog76TBnXbzov8Jhky7w54oKzTPyLrP9vH3H2JbrEfoieVwEuvhEaad2LzuR33fSw5gCwVp"
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
