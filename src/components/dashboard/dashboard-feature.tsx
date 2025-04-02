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
    "5y6peprLxTBarHLoBmAKwvUxnwcUmipJka86ASHTcgaUCoUzZ2HhPYKjko1GbryJ9eBSPFABu5u84UGsGujLgRS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rm4PXz4ExN7MhtPXgUgkdQ9dNagnwTYpg1smYJFLTC4uaj4mDQu4hu7fHoDR7UdM8x4TBhFAX4iV2GpAPhejEvT",
  "key1": "2Y3qKxPxMHb56Si3oHkhzufxieB55mUG6gDpBnokZFP1AWZ5H7zGhJLWgRduyrWBnY9ZSL7djtaqkBVmjyT3ProL",
  "key2": "2e1HeXbspbfVmahzu1JPLWQQqqwRiMsE6TEu4U13n6Ly7jUfqe4diK9QmVvxrteDetvcHN8Hr4P6DR3dkqXN356f",
  "key3": "4LR2mTxhiULNXXXAYVDgTpfBciUysgLyRDMgbQzn4nFDcM3HCtfFUptWxT26vCZ63EXACajTMWBE2qfkddLdhqNt",
  "key4": "2TimscJkSzGcShxab947NFtyfKKc7n4GxhmwruAeRC9fJ7FvhffE2HYXQN6WNhJXRYMJn5ttQ9yUW1ss8rHgSARM",
  "key5": "5S2xYitZqUCVuexP8nphBVLycv9q7kDFWg6uGLoQzQdYvfy4Noq9arUXCAVmvCMQYXuB8vuTzy1aCAxGEWZFfxFK",
  "key6": "ozLqobSH9A75M2c8AEr57vqtEMupUdGmN76Wi3FNiBgaPeASSnFpLkz6HEu8M9Ce59rgS6idjGwdwrNKdNjzHNW",
  "key7": "5qQgRKJWAb5Y7GnzWZLLR6KmEeQfbtXfWNeTmu7n5i1UQgTUgaP1DUd1aTgNzf4Eje5S2cdkTHA1c4KPub2nzDbi",
  "key8": "3S67pvCQ92Y89smpbzEy7QTEzHRY9yZCnatAi5jVEqFTFRQmUeLkYTLXAGGfCjA7AjuU86RAPFPtbQcCib3VwCQ2",
  "key9": "JQwtEfs5a87dxbrUoCu97rJfnja1nSyvNFgno5JWA9HLFifJPEkCY6sqkUDK8Xuyr4R4DGLhZZFbm92ftjsRCCa",
  "key10": "35H6TAXihbna41CJMcL8pSDGY9MnRF5ER3JEP52tFPdDPDAELqzhYYsT7DaTbyPkuJ7pTyc2rzmRS9Xuc2t7GTHg",
  "key11": "4WB2p2TW5aDBKw9xDHFfY5KhKm7CGcni2jsUu8o54hDuzA2fNuAfM9ZXhfGSoa4V2YY56HsKYY7cc9EGjUNU4MRZ",
  "key12": "5o3JPBWQiRFi3hhAwjDYT3o4psDTV2cKYnmmUxn3deW4iLTrxUQMt3ZnenRGc8vvV86CskQjoFvCtkZfQGq9Tjx6",
  "key13": "3n2QKT5ZTnZ55B4xRz1s8c73Ds51BTMFADJW1VFVDhum1iDXFTCj7VsA7t8DtE8L2tUW2zVrjNFgunHw2kqnQ5qJ",
  "key14": "NoP3SkDWf3ELPYi5j81fh5d9dST1YP3Ae8Qs4ZoEWtNSj9potu1yVSrMe8trmNXcqEavREhWpJw19tDFYvqq2RN",
  "key15": "h4AEQnh4zDFN1dutJ7ruR5VEVcahyXyKcZbpDQu3EjLyMvns79imNqmWNACcYeBBRiPiyTdRVB8YGrEDBytMd83",
  "key16": "3nDDiFiRqaxBgMyYeo12JRjGYzqsDtq3WoZKpomyBrY7WhVFwgfr9FoAcRj7uTYyQpDRNDBcqGGkYPs4eCRJir21",
  "key17": "2txf29Vw5mWNMKPUqLtReoQoV9t2SoB3ba8fCWYRUyedpQA7qTf8ZAwunLWktUisLSkC9U9LBNKSLxJagSTFVi8e",
  "key18": "pSkJV1PvpgyB13akke3EArLRMVLPWBGVg5H5tgY6MyszxfwVnyTgkMJFRLNqp2vGNFuiXfixdF1eaVaPCqaKJfa",
  "key19": "51gbK1WcS24eid6Bo2Mb4GwsN8frTLNK3dQcenx388HT6Tofz3KUhZaDi5zjQzFDhJx77dZLdkdaCfLQFqsb8fgi",
  "key20": "42K8bPvp52ud9d5TPsuz2yqCmQkxWXRAB7AFXePUqCgWgpJBZQVGSsZaCWB1LHYrQ24duNwjYqCJwjQq1ZmeAz5k",
  "key21": "4QUapipWVBvJYyXBSyQkEotPu8f3sZWmNa3bbGkiUL73gZQ6dV9KxbNJ5wGSv9XYuqfZWspeKhdK4V3vc9EmgJza",
  "key22": "mFZ1nzMY3x2iDwMn2L2AnwvJ3v911NDzBBaxyuf35DPu7ovGXiy8c4SpvvEaRyE3dAAGZyLj6rzKAndaFsZ4srZ",
  "key23": "4TYHT6bwzd91XLnF7RaL3ehWWafjveqGYfob1aJE1qMfgNDwPz9e6xt1ceg5uCrPTEyivhkS24DKZLMYeF5TKEJy",
  "key24": "2jYWyaWCdFWPHkXCx31w3fe5Mwh8qSP7iWLC4bnquxzQBRXkbCzW72grVhrLhHvSK8XeWyywYc57xQfgsyBTtEUR",
  "key25": "2HFtZqcfG6yJiyH5mULAynw1FVDeKeGfJoMb8BuGwRhZ3xUh8Q9Gnw9QLYoQzWMdUUXmVTXAcgDGXnjRckeTV81Y",
  "key26": "5ietSZPbt9u2YKS9619Jah4TeNsNUX31PPrpSvY7jDrXodE8ZGuiMVzvcZyzyDBGUoFMjDDo6UCi7RmKCp9afcK4",
  "key27": "566m7d6xP6Tz6z4XvnbR4X94n3riLNDEsKqa3xcT5mbKxwb9u6Gjx5vv5tKJMjnMeDxYDfKuF39jXPpu6U41H14p",
  "key28": "3XPr5xngPGcwHnRixD6jL9AkRz24wVWzMsQANktrNfXGsfESz87Fj16M9FFCwdzC7ebJobNwAivfTGybHJzsT81s",
  "key29": "32abctnA3eV9i69EkMR4FebFfYN21WNqHfJkahavWjWi2k6VxwMt4sgMR4xsequeeszomWxoSMWHYDD9qYPgRj6M",
  "key30": "37bto4kEmTopK9DXn2pjxehKUNcFZhBhzL8vVycDJf4LDybX7RWFQCP4STYGok3v6mK6U2HqrkAsUEf99kqWmTKt",
  "key31": "5hnT6NyShR3W9f2XQyT86C9FVks7aHb4wndpSXMQCaET7jyXei1XUMRvx2E6qCQhhJv9YasWfNHXRUvkthoNY8r8",
  "key32": "4CkkcyeU4CqRXKLaZue4KeBcyvuMGsTfkMFP6HThGfUfZDpvnv92yRqYAEeCkZaoHFjAMNiFewx9uv6cCpqjZURN",
  "key33": "kjeK3j6cg8veAGWbck4mrk6jq9mSTa1RZimTSUuDByDaV7V77pjXNxMrhvEZAXCHWtL5jiWD1VkCpnwrYyAzHDG",
  "key34": "3oFtWBZygLkk4E2N7uTuAoAFJmM2iZHY8TzhwCTqXXRM2Xpo87T6GfdHpAHcwBfRka4yRN8N3R1iZ4HUUzNp2XB5"
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
