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
    "aEJiz9bDT6H1DPpQANJ23D6QLhDzuAtS1U9L6d87Msat6UbNBY3qHLYYB6Mrviy4QJD3daYMyi378yrW615GMFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52AMteWmvQyibQH25xcP4qa6WsRSEtVP2P7g9SQcKZzGGRNpjUydGu9r8kHSqR1DpoXMe5TbsUAJP6phDbncMEYm",
  "key1": "MLZq7pKxzCsmJ1JnhwQEdNBoym6QJ5Jj3DAPMJTcqyxqmyoVACPSYqT6d8vSJQotgJgWH9cB6NMHFHpnsFb2umf",
  "key2": "39jepBhqMPJNZwtrmkXBxNwALfe9S1e6cY6vhB4MWkL2STa7qZtqAT9TMk2XhhSeEsR6D33MvokZtjFaEYssXigD",
  "key3": "3zk8FFHS9V3uaNnCCX7bkzyPmoqk1hVpSroU59zUtfdzvVXPLYT2A6YjfkPUmG5Ej9a9AmfTpBw62RuV4ofpvbv4",
  "key4": "56tX4HkZBKMjpgxF6vbJAPs3MupWCzY7Mb3KPApf8RZAmwbD92AFLJNEcyD7VkuZeJGadfAstZVDJg4tvhxpwqSn",
  "key5": "3PcCxKb4JtmGwpCkUVYbErKRjxa28RdMHL5JMJrBf8ZmNw8Q51UwXQJDFLhsDpWHLRWNBG1bBYk5xo6rG262bNEd",
  "key6": "4UBDeyD4wq5dpgj1bTKywt9nh7NMQUrsQuJsJ7TAz6QeidHHLKQmArqm8RE3x3NafjnbfuxGfw4eoaZadtRhunFW",
  "key7": "ikqhy6X3aAi91FwGg6Zfk1B2oTmKo2RGBzLMSxPKBr98kJeAN3hvnJEKHYB1bwMPzt3diQXwjMGr6rSy6NmiyWr",
  "key8": "48xtCLcDhFUBLy8yqnKbHmQDHffaSNH4uomzitoABhM9QEFGtWeHrSKsJLMrcvE76orbvqa6sSUYA5GSsMpwtAUn",
  "key9": "3f4LZer5hgTJ4hcA6norn6Bz65kZYUUcMpjbYPurY7LLtvAHVaFkGUyTRhTWT8GR3tWrPH9exHqjxQhsLDv8HD2h",
  "key10": "WbwAHfuLSmt8aSfJWP5stCKniZWUwsoBir4oiY4rWBghp5wRG4NWMFDXCy16xHqELR12ZfCdVGG8XTVfgRQpThC",
  "key11": "4cV2wQa3b3d6Pkv2HuZ2dpuauPP8fhgKib6t3Qyof17eH5UHmgayXjrRMFd8r7sfmu2wZNfTPe6KTZ9cAFC3dYEj",
  "key12": "57YoYxfjtcGt3uhcLyoNfBuVgVhV5FTFFrEaZWbVMZn6raKsizKg5tKeMbuJBJ9VfYAXhenw296CBS6PS9CQ5T9v",
  "key13": "57ngxbweyhPxyJ7TeDPTiLZPSA4nV2CKkJ6q52CaXMgRLAWUNFgFwu6P7HvawYJTGwcKCtch8ZLM9ZtBDB41tLLh",
  "key14": "N7kBXLc6dhuBJbAcoMS8en9cMdnYA8QtyimiwxaJvE7jn16QLbC18UTv69oX7EZztg8L4ee2NDSkwNLjJudXXWC",
  "key15": "2D3VJFXKK36WBbd5wcgFcLmi7WH2ZbdDd2ynKPprMFUxXkjDE6EiLhMqWztezrZbUZcH8ncKJbCooNpxxbgqpvHS",
  "key16": "2663nqM4pwPd9bCFLBWVwL2w9P34JUQyPi91sdbTyE1Kdj7Jkx9rDLNB5iQGmA8pr3E9xQFuvjsVCF7NZBZZgaoa",
  "key17": "vYgdbtFFuTdBNWhBgi6Yq5Z57ZHap9rrMCwtQTomMqobd1oSKwLSbDMrUNDP2uRWF2c8djzAdzfjNQGfihh5ihV",
  "key18": "Vt6uoXiP3rZL1P4YJgqZzUZzi7vSG5opE7ukv1B7WXaHXsMa3UupKyhh1AkwYSuTQp4mH5WbYNP9BX33Yx2Fowi",
  "key19": "3t6UNCd3uPhYYszxZPk4mxfQX1cZkWLS2TTnjRtuPRLycRz6jkYwfLvzuH3iZaTNPboZgYBvrdW6JeLf52s7juHc",
  "key20": "2nzJDfyK7fj59sUVxCdVFRv5P5BJXuxD81ZJsvu41ZFMjLLitMA1aHxHHfyWzDT9o1FNdVHvx75qe49jX2RPckJz",
  "key21": "5JGjysEp9BGtmJ4VkEaiumi3nxqFVqrJcwwuyASzjCAoPVppFWU2rU9qQGKhdY89SVkaN7pSZpdckzdVHCbab9qA",
  "key22": "iYJSaHNBokGk56esbdZEhz9rAuQtk48tdoBTVvrEWEMg49HrSCGm1xRNJmNvumvrDy6irXncCm7RN4qHEGuumTk",
  "key23": "2hH6s94kt7i4SdqCy7k27KQDZuUU5BLSWDfLHymSdCemGRu9FF8bpGEB9qW9YGBQCfTQmpckmsubdVR98oupVF2a",
  "key24": "5RQAmbwspDUhU8MTWYvnqtiC488DLSps7eJ3kAc7MLFFkW5D6HCvt71nFK3tVpdzCLQe8MRZ9Qfb3DYSpsKKNc4M",
  "key25": "4AkGwmRqSaDoPwRBg57kHj9FZz93dUxq6uqu8MHRiQNeMPYstoiFxpW9xJG6P5xtY65SczCrvYdgs2eLM9EHL6aL",
  "key26": "4Sr3q98qK5wftPQa4D8kVvULnFtmFTzSQTFs2xBYrJSnTG9SFGWMpQG8pMMoPfbMuHcXAr36BCvBTNUmYjM4nLMd",
  "key27": "3HKts92tjhQvLjruGbWNezZwGA3RFBsUFaXQvH2EuV8PNToj7ydbnwPHw8qiFLSHJbGMQtsjByfeihFxF6gxpdaJ",
  "key28": "4MLB6ZQNrc6JKnfwUPCKQtoZhgwHzyXacqrjVTRKj2PpfSZWiPKw1hP8kwPmVtptpS8GehMeUH6sU1YCwBEhiFcS",
  "key29": "5SkdC2oS3dcv3a2fPNmyZKLB9ZYC19pk6DYAM358eL1XX6EeUG2ztpHYnkBymsNmDvKt9FzDW4TqHTUdqVRJbAzs",
  "key30": "3q3uLf5GuFeNP2RLo6SzYXaQq2LJvNRi8AUwcwu4XWe6Jrntj36PVZetA6aLRYkLrxkLQsVZhwt7jHrTkyLj9rv4",
  "key31": "QfUpnhWb3hiNvNvMNfzxBf9TAUgxkWSGeWirXMZFeDmb1W5VezgtfengmByYRwrhmEEo3VwKxiNnHDg4FCLK5Pw"
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
