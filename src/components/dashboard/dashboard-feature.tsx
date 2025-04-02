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
    "5yZj6ReoAG3toFnrocDtouqeihYHzPaWZc9PYZNkyVokeeyrsvYBHmoaj9ykLmVypX8s8BsA4WSg3dAtrRJH6Gim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1AMAMXiEq7KrxDcvbhfAq2nsmwwZY3K1sTncah1Lz7CrbT7h4obNha1mJB73pP3QKhFCqELFPt6DW96iuSHjWB",
  "key1": "4wnkTXPp17UdojkT2Lh8xqxAh3MDn5mpjQVRzmAdwYerYeS1jBqgYdbXwPyvtb7bUxJ8N3ajPfyS9p7mUiFhZnAm",
  "key2": "5oRs441RZ19qFUyKQdfZ74hWodJxCFkmafeh6D61QiVQMiQC9FvaSSy8yUoyPM7h3xkXgJT1DNYWgU9HiDk45acw",
  "key3": "2dn9BSLUo3Mzes2wVut7m9GTer2YwUXH9jRtaU2eCASLwk6WG4N39ktkKbdmTPhtNU1UzRV3rjpeU57ZH4XpeXqR",
  "key4": "2nkvzqnniDSCNN5NJh3YjysAQs4ZCuqg34iCKaXabYhpSS19ecdXPBNRAgEBVhBvmd4FtajVYExmfLP4mqHcrhNb",
  "key5": "4UMsBVqhEtR2fDp2a2ccDdGZfwkKy5pPwPfYXkWQHnSjJSGFVkGUKWL8graNgd8KQwfsYK1HSChnVtZWivZBvWuo",
  "key6": "62xhzbiTZ7hMRyJTNZV2s7DLeE681jipWYNALwkHiAthhw7APXscERf93asNv6cHrtXkPGoP1D11wqvx6NFwCKbW",
  "key7": "A9XaBbqhMm4QfjSBedmz6GT7uXzkcRd1hz2Evc1787ueSUJj7aVU4GGU2sTter69raK84xXenRZJrH1i8YL9Yxe",
  "key8": "4AvJPaudAEAYcmie8bnR6mhEvKk1q51f6rGFNZWDm2UW5adspAGUudHo1C9NoisUj1dx3qE3aFrsvJCKdVYTP7Ku",
  "key9": "zeKf3aeW8TnzgAw8MUFUNkLATK9JEnzWvCadokrk8bPYVD6NR7i8JYoMneZv2F7Myb4xo8s15uh9PFudpMpHRBa",
  "key10": "41h3PoYU14nibAKqjYLMpb1eFeuuchi1oZoubJtCMf5TtDznpMqBw5U5iERmKm4WN42puCbsa7Y66kcLStpkZgua",
  "key11": "3pxDCC6tFurutpeWNri97p1ngn5UoVp1bV57GUvW4m4EKK5Z28dsPVs8yZkyEXJReY5uuFDjdHatNTLZKBNZ9qq4",
  "key12": "5Xq7pshcH2XN1xQAMZkcRVbTeGAbeRx4eQ5WxyGwydaFjsgzNNiixqf6sWdW1s9swdsxCvry79dpzBngkB23AnEY",
  "key13": "3Dt2RQWpB2otBr32Fx98XCJMNiQV2zph4g1P51LCB816QAkjbcSe1teBxFMJstZb3gYKEneYgVo6N8MWaBmz5n16",
  "key14": "Ut9DZjFNwzF61K4S3STgXjv7TsQaqS2DokVeEwY6LmJQTNzefL87y1oEQv2Vv8nMxyysPohd6G2gbG5KE46QN42",
  "key15": "4EsBm26cT4JpgyKKB4apRAB8VfFa4ZHeyGDPx3iXvGY5B3uEAr6VBNC2KSZDvmMJ5qnRcWDad2uEDaBNeknYPPtJ",
  "key16": "4GdevocpTpjtUXK3N6U194Q4c6cAFYxJZLFjizUc1s2Bo2rog9SsKEiukew1XxQg8ypRJi6ZCxY4RYGVcYheGzqT",
  "key17": "4CBQzrfpDUZ4qnK5BFxJTYAyTF3w7BUa9eoBniKGu7WY4EwKEEWyRa7eoxGTf8csjnBTdK7HXtLNCifsRqt4bkPa",
  "key18": "2gSgUZhZuvMcugdpB6KwkN5P4GSvx8M1MBonpDNDcTEeN2UpKSEgPcgUtuuXFdAy3KynKEFMBQGVzx5ifrfoBBaP",
  "key19": "oTZH1htK2kHmXM2KYhmwpNoAHarpVcoqqhx2M9YDPdpj8MMpXSGQZbkPtAqyKSRS6kxcjUDGJij8vV6XJ4u7HoE",
  "key20": "2LTMvwiUgQvzsndkKxA5vj37AscFFrLrHnTj5SPUuxtuBViCF5UzEYh3gt3T6f3WtnT8dHrBAYgv3sW3e2upyaok",
  "key21": "3jvTR5DyyxVSybsM9jPFJG9PcYhzonSiueegygRp5TMuTkY7upD7mMNuL3q8V6DXY1zyMv74NFPJR3F31XxW7tpR",
  "key22": "4g1WkXxiaK1BRy8tqevnAzGVJNus5qEdopp8dozurwkibnVk6cD85cMvEpHPHjipLMm51qZ1Twwinz7vdH5Yw7Qq",
  "key23": "PnrBXwT6rti21zMh8TsgSGkjd88okM3fBq1gM7RoGh4JXHTqLgDDSmUEzrDQCudHWB1Sa4zKYboZoRAAtGc2CQP",
  "key24": "gnDJXmoGrP7QxoLtHbyMQLMdnVcsLcQWn7uce3JzoXebsWdEK5uvESRU7SyC8vTkHZysrKot4uxq1BxVHoHsQLP",
  "key25": "3FBpGez1mfa9hmiGXsfTVQReZg41S9u5SLxDt51FBMMAES931YTYqfh1sr7biztbjzrCaPqRHuiFpHLJmXCF5omK",
  "key26": "4FQUDXAZsaLZYYdjxd4WqHdTxd2zjwhLeboMQADpFZEupCMaD8sUq2NzxzkcEjd6vkagHmvNexYXYd6jaVmhWXVW",
  "key27": "2DeJrq3mVFMNuY3cpp73DWbmSsNmX2iBCzCyJGAfN6YwsgLqt2TZCCpvxY9o4Fjk64Tze5JYTDWCLkkQtPvKGCfh",
  "key28": "q7NTNyL14GNMZTMpon73NMfDtDUw1jdK9WLfqc69njhNPdHCwcNT9qgPQGs27C3VfGDvejn8ZWjJ64MsevJQkga",
  "key29": "4yqN477NBk9bGL6za2RQ1CdaD1XjfxqEWAnfiUsWPVFgiX6JjpsoikjumY7ySnMHrFGNG4heTuQb93FJaf8G9Nj2",
  "key30": "4BjNztpM7yEniKohbb8GjRRYGT96pw4FMgNZ8y3iLMRXu1SnkLyyyBqao1EPd5LNLGxZmN88peaNV3GB3bmSn7ft"
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
