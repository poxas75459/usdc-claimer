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
    "57Qb5dAeUNanj11kjQKCxceU4uzRiQAtV87WX6p7pNF9Au4jqCHmYR8dEgavFvhGfekBLrkL2VS4UFoCGEQifQGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UpNGvGoQ9Qz2YqS1FZSXuh3HWXvvGFtUvUUmfoNtMtCqPpqg3kJUDR1vu6BZ3Vr6x1J3hRmSWqLn9zRmNFFFRyP",
  "key1": "pwdwiUtcTui88QjACL4sByy5cxLz6pYhmk9H4d2d51Wkd4KZYCUHVYtwxcSMvkA6u2A6oq7HAdwN6LNK785aEha",
  "key2": "3fbULnANUh8drR1i88mhg1wArpGpCWURzJ5Z6awdgSLbPdqrs2Su7kSNt4dPdxwknkFzH85mZkLoYAn6hA61atss",
  "key3": "2HwDGwPwfAXqQYWoUh8MGByFnt5QpePiP1pQDqRRKeDSXKiSeMcgcVnVYymKkgskeJZwKBSzMG5nHrNNAAVaPcsb",
  "key4": "35g1s7BjQ6o7KpSPDTmMZWUEp7emNeJmJLZ6qYH6KhCa4ANfZnFv3WPrbw7ffzjEvfgDakxUjyKg5vXfSVQeAYNu",
  "key5": "4kjuAoHmhYxUJ4NJfkp3uMfTgxyDAngEpVaJwKfHJeZpM9PHnxga7sWfGp5yXD5FNByBCCuhQascY1bRZHX2QsCn",
  "key6": "42tVhLso2sEUNtpGwi67ujPfTpYp46dyDpyHAp1oR4YPr2Av2RwjuX91wpQBothNv6ErdTVXBsNTYTR6g7t76EYK",
  "key7": "2P7Tw1ViPr5Pxr7N35eUDWbECTU59vkXC1C9izutwuLFzsN96GBY175ay1wRu6vVgEPjU3emJgbY9DBeta8pDoCM",
  "key8": "5WFJz8MzezCzYEN6SxbokwLh7uhY1eFsFzMYLgoNLaFzovFe74CWf3kAF6smf6XteFE737DGAFVABuxmtvGMW5Jm",
  "key9": "2nRi3CaavZacYf8DuHiQmsKj9WC7zvTD7VfnYgmYR8irET9JsF3L7PbmdYU9yKyW1x8T5FNrsVTJ9qvHutyX2afn",
  "key10": "3eJZFF4F1CHW3m1CXH5q8nhedtLCuMa2PkJKMqodZZpatf4UuLzDsdT6DCKWDw2cfr9B7AmbLVYRMmnqKfYd2NX7",
  "key11": "3QgN7qUFm6dMSAZW3Msi5oPkca8KLz4Mpr4jLTni48FSrvMK9AyqXAKk9kHL2bFvqzJnBi8iSwsqnhS4hPj7SmpN",
  "key12": "2z8GR4y1yt4yWzC5z2FAvGod1mE6dEe1YeQ4XwNdorRPAic58nGPq35gQDSihSBsMX7qThqvcXokYerRf4438Umt",
  "key13": "5avsDzgor5WEukYXK2RfnHP2sVaa8Q4adU2XBd7fKJcXBHqAALuV6qTmmChEhFyVGVhKZwXooFJtMoLCDsYJwa1R",
  "key14": "5FYQjNkhF4gNUxT6ecA5UZxt1xAYXt79RCCH3VyVjHxx9xtxqHJ8aQdz9NLrY5deahZ5weTPdYbmB3f1rstmj7Ci",
  "key15": "65pXjH6rGoLjB6g1uLRpDrGW6NiBSafiZxj5mu2Ukt2KBXCbg8jELYzAqTHBseFo6Fdc8KQRQXoXUurR69M3z9tw",
  "key16": "65ZPE5nx5d3MNtrU5byXj4MoHJAzcsLMvR3yzYxTo9bRZTU6r8GeCw7Kuiw8nSPqwKKCmJQWVxLi5Jh5xuNKxQb",
  "key17": "4XFXvStXU2NmK1dab4A2ZAZL19GK7mLr1aQHrytJzz8LWzYfZ9F7N6dCud3wD6o1iWCpKyfoZmYGNjYBFg3fVZYj",
  "key18": "BkFVH2g2UuqfQEB2ub6v9Xo3HteogvtFmUrFZDHMFAR61VBRSXZHsmN798sjNdULgDk89vnkHTNQyNHUxUu3Bsf",
  "key19": "5n7rj9PVMeHBqX8ydE4GHqw3XigokgspQWKnoisBLVSy4nAAAAoCJc9SjUBKqLT7i1nVTsofqJWdJuAXTZEm73hC",
  "key20": "8pZh3PZ9k9WWQptcdo4uzCaeo5E5XbYktrD1trB34biBUyMc54o8Jq4VBosWvLYco3hZYYnukR5oqHt4F5a5DNo",
  "key21": "3ekRnpUBymZNPGjUeLmnpmsvpEf92j3ijHRauFkvhrrPvkbVWb8W6ZRUhtfQrEBtSUQaJWCnMEqZKpusDiGo6R4u",
  "key22": "22JgnFDueuYGv4viLPdEosNNpWciMKbYJ2JKyuWVmq8rVBDzDRCKw89ARQwGzWnWjUz43DnRWSCUs7FPNQY2HHC8",
  "key23": "51jLFCj92PMJfhFJ2dLRu9KrFxc7AsCmVUzvf5AeH9xz4zJ26hgwuYjaKKn4jvGYbw55Rq29tMtrYowqSqdtgH9D",
  "key24": "5s7TdpqPBqtshmm7LJFSaazTupXhx41TA6SemPQXuCgtiySrMgiXFRYTPGNzx7FFtUrLt5EVDaM93F1btNc6Ba1o",
  "key25": "3YoZMKnzA164DougyTagHf1wqZtRGpotA5xyPWAFBJQLRSRd67hEUoPBDPgmDjcY4w2sbvpbD8por9UPtTn85HSQ",
  "key26": "y5n6ESHCLk4PsgMtdAn2m2N2jgzNZnwwtNs7rak5Ka1kgKzvXeRrGwmpXshnTyRt4EDzioUZgDGGAsAptsCMkYL",
  "key27": "iiarzXgNTUgbSmc378cMoxQ6UReABC268rjX8M68TXWyFNNcLEDF6ZEGkCcWzdK55dwTDAs1WXNcMhWBWWmmBhL",
  "key28": "5wRrhp2RQAYzb7GXVNrvFhRpAj51ZX4e91LSKqZmkjyFKPnuDeoupHdEHb1Zf7MCToBywNrJmHn2qEn3EY2g1kbn",
  "key29": "3ZQxc2w2ZfknSQukU5Wqb8zAM5gmt8zHbbigUMAxsNYPXGWZCzNBTR1YNTSrLWx6oQdrhVvxYPUEiYb6wd1B8P9y",
  "key30": "3EHjXknpeuu9yzrZmcHdUyQFwbpe5md7MzfmfY6pDT72YwTdNe6j35XrXbHdzH1ceDcPLcN15pxtwW9zw9bUGwCz",
  "key31": "2GCy1e7cGzDDWhpe9MTUsRi1MghUtnWiJZ7C8gVk8KLySq1Mrjcu5gEcc9DHgWBdNXvtwqi1cGVkv2NoqZ7pkHmz",
  "key32": "2ozG9MCJ3o1CHVrkE9ZEtLXg8jFK9LZ1G9oyLfeiDRpd2JgYcLpU8gLwsbMvMShz5zqb7gK7DwcnA8ruTP4cW9Rt",
  "key33": "4pSvjH4C5JGBh773wBGDYky1c6EvmW6qKJ1vVMCfU1yPKhGR1r6Gm9GhxsC8q4rv1NYvR5aeucA1H7NgCUh1vXFS",
  "key34": "4qDTQjNcwZCdvXJ3ua67eXS3Z4QBnrt8uLsjgz272X5Xc7gJqmZ6moCS5cpRAG74muhGQb7onQd1TmB5w8KyUsgD",
  "key35": "3j9fPL7FgQUzYNvR6djuyi4pKcN4RZ1eArYPcd7oaCPAhs1bq7qj3UTbArmKdREHY2REAuZtzqUsdr7g6sGiZiR2",
  "key36": "66Q8AVSeH4ExzYSxRtNvgKYZvdBF6mG7zjf2pNHv5iikpsaoktjFGNuwmxRz4waNQKtgCfKVH5k38LeP8MZqZQhN",
  "key37": "47MUjbTs26QYXiJXXKPwN3kFzxrUBjmkB5RxF2cQ1uL2QjnhGKwQRepJXmvLx9ktnaANJ68d8YaqqJyUcK6rRcV4",
  "key38": "5T7eadWGdf8Wsu9MK36tpxsBTksmUjEBukBtcRgFK1iKX5CLFWffF1iqB6bPzJC5dYsKHFn3nZ1kMFH3Z22LxmPW",
  "key39": "2GmrV7Y9M1KQ4LVDHFhWXfzu4d1tQ1HbFSSHMVCAoe24PZhTj3GQUNeXnkCyzCF5kP7Vt7L1U3v4b4H9BMY25rkH",
  "key40": "zLbi6hA8PHYsBUJGfokYYuJAG5cVFBDKQbEWB9vTCVLJmMiENKo5Anw7fLFzSe9BpVFDDZ8AqoKPCL25AwX79oa",
  "key41": "4fc71XRhUsCHPNocdiQGtsVecto6rxfoZF3f7aHQSXiLsyiDnhLFenrypk39R6jCUg9MAr4pAP5hbz7QGG4ksq7a",
  "key42": "oiHLU6H6z4eVmV4apRaFBdxgUKBE4rzAPsJkG3yoeCE73KyK5zhKkShwyE7Bd1jNi8kiU8niN91rkvfBBd8xXRL",
  "key43": "4cejjNQRxP4McdgoEgegDrz91S1VCweFff28zbCPi7pneHWLoP1SNG7aVNrck5VuR1yfp1d9VNRniEZtRsUKGqj6",
  "key44": "UcsgRXjQSPaKQBzt9DTsayCKBmrJvM9tCWwpvrVooD3GPR9vauyDrzPpgubEo5w1zuR3g5rZxFe3EhUj1q9cnqQ",
  "key45": "3y1FvQj1CwtKHKeET1N8o3q6HTMxipnStbcJhxQTqXni3ekYC5CG5VgJjFnRUJ9c8AKfnBhc7k4bPAdbf5F5Payq",
  "key46": "5WrLLyKSyfrfyuhtTdFvCijxUASsF4f9CuNyqAJ6aG4WQyZr8fcb1SgiDAgFcEwpeyDhwY73cXcdESq6XWxYNfqv",
  "key47": "5o96QxThxmxNdTZeGtmLmtYNHNexG1dfF7GCo8NjAzoXSbx85JTMvFtbdTSoufHnfNsT1Hxnek59CTEQiqGRx58H",
  "key48": "5eHarZAwfZBwu22w7cLUUgfZgaWpgNXNbxBqEB9ZK4aLgYrWaVWzAVHNGFtR6bQ4yoVMSx3b2Bjm8m3qYk8DEjRE"
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
