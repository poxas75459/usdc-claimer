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
    "2mbWAGHMcpMXHAkVD3TktBN6e5PFjfJ4w7hfwrS2TqbvBETh9xnbrDBr7E491FrN5QwnBgkVwtcxznpi7eceAMja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BNRjkUZmcc7VpZamNWfEvqoLHYPV1ySP81W884mqPFaV4bBcKneayxFWHSsMK4zT75H87WptjYvfyZJWNcz2fjX",
  "key1": "Xhvgqazp84J8futf6CYfqLJnh8v8A1PC9tahkij1mQkcQYN1wjRm2KgNfhYJqxJE4EXThBP9dE6yxximY7XeREG",
  "key2": "3euy3F3jMUn934mfgAoL7V4YHPpBMFb2v3pPqABFdgjURqgrbL5x3PkDJDursXzovDFdmq1Psimk46gpG2ei9ibL",
  "key3": "4LcJN1ffU8E8bmstnVgc5fGy8xjQTimhU4wDhe5kAgGb9MRayw6GTxcRUXNygfuZJQXtKv8dbmUHBWmBTBNz2aNS",
  "key4": "4bH7svwm9hr4pUuogdREhtsL5oJcui5uWJbZ6bRMknwWwHrX2YkMQetdjJM65tyg7dzVnFqDcvnGAm71Sy2v8XkH",
  "key5": "5r1PUTDqTg2ruAn3NPJAif1Uk3AXfNmUVAmQ2u3uWZ9Zs9bP8tr1a64794b5b4Tt2iDfYiWVt76bTgovUgWJ9QvP",
  "key6": "2r7ovu6X52HwfT1hjbSnz4e9DZ3XjjsJST8erkUN8y4jp2k5S68W5Xsp28mpjkbWdDkJgneitBaibYpbe7eB44dR",
  "key7": "4PSr767Z7Q8MTCGUjhDRu3mickGfnJ8DMpJ7eDgPERZHT4Bwj1NoaSWFcBpsUq6a4pH3mgPCXr11qQJv6B12Gt2L",
  "key8": "3nECwxaBHFFpG6DN12CeK5Svq2S1teVGWiwHtf4LftQ6QwbNvTUyu3sD8WWd8rkZArchhwGRdLWmjC7oAGvub2kQ",
  "key9": "2VnTXTeEmsVW5fBLm3bdTtj2DuvUKdYvSVr9sH2cBCqbVDWofCpGu9uqFJrQ8jAFF3t5cZYMtTqfwcK19tKiizfY",
  "key10": "3sCaioKdCrrVWAtQY1qND4NnwPV2kSXyWQnSsfrDNAStboWH5LamDnqC39p5NnsLne7w9QsNot7TYMiB6SbwEMHk",
  "key11": "3PHYYLCY1btTpU9sfgWPjgMPVF8twDr9CfPPTDZNJaRGAJNq4B6BkRcteQQYxTBezcGvYh6J7SfvkMNSWNembPDe",
  "key12": "5ik7ThbSFcjrkGfKgzNq3B3ca4Yzc3Qv8GJFgmLwXeQr4Bdo5uLEnSBoHaJovX9Ted4yZ8UNvfRAP42SytHWfpYx",
  "key13": "HngAjXzsPyqDzZumWibyFr92s2DiQvKt779s9cVnbiKhnWgnRMgWnAgbuQT2mHsBwrQYS4cEhBpTn2rxaNJh618",
  "key14": "3oLcYhtr61dTGp2B64pEERQY7F1fYX1nLisxcSd653iXN7bSXN3CErZkXgefMo7iG9LDoGdQgDWzi4nqWe1dA22j",
  "key15": "2pKTHcWUBFJEtjwiXNy1qdte4tL6wp4Euzo29KkFaD6h3sC9j1233vL2bAYy4fWzfPuX7kiX6qaWF86jiZiwc6Au",
  "key16": "4xKEd3nBbUg6dp3k37Xv9aRExSPPeQiPp2XpwJt9PzyTHWRP9M6nWr3iCbVuh8SRVaXcrMTTvYf3TogB1mSFrBRC",
  "key17": "5GWB4e2VKy1X3uFxbsH2NHdWmLyhKYjVzm3i2vURLZnzrMyBnTcw96pJnNx2XwqCCP4MWmLRWRgg4PfbinSRYtup",
  "key18": "2AtkVBeTVkqQCqSMNGLXS1pzwh3qk4vB6jrBcZUCovmiqz8gaiF4XSkigFVy3yBQ34KHMop9qKVDUcFfb3zuVE15",
  "key19": "3EgDGTbCP391mgGn7Dz9APkjzj66JHBcwrmXJBt83iqVgiBmekGYUYq3VjoZs2XMuTuqFmBHnLVUBLHbpCsebw8P",
  "key20": "3sY1h8QNPvTK361ngPvBiBJ17vqaDGoPPhxpJJoQGV6LXtSB5bB7NQCNJXjdRy5jMwXBLif3qh5BiDYbWGQ4GEpR",
  "key21": "477HE8cBY1YxAQ4pKy2oAEvEgFnTjrdYKT8kedh9m96YboKbMdnF6LNVJ3PH4R2TXmzidCNmkMKget3LZZqbVeC3",
  "key22": "3KqDA2SCRhkyu3ZsNm51cdzfBVVzqaporeAD5goSfH1upPgFeq84ex7hg5zEiF7gW6BvLB95Hr5FbWsNvFxoM96D",
  "key23": "36nDo5vLcAifSyiPL4Wa75awKg7AwJTpjFA28LkkaqeeSQLeLvUvAMLdBnQ8EbsSECtrFWDN7GXyAFLMnff2hAAQ",
  "key24": "KoGJt9oJZxvfJvsKuH5ajxhEs5txCWsNmmCcjpCjTExiWRinZqv1rZKUs72szHc3hQjHi9NhFHgRZHRh2Rit5SR",
  "key25": "4rAgHHM2npHbtCbUodVkxVgm3n6LdBageFUsWuoUPDpLknsdtAtLTWPkNGksQfFgm1XRHrapHz6dDcfYxEPbHSCq"
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
