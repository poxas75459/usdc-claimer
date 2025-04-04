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
    "3pXjoEA6ozMTmHfbc6LuWBddRCb8i4JT8oNNkrCANPnDGDTTHgN4UBtopuLxCZNNANeKHUT9y2NRuNeDWPRGPp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yS7FHubBGEAeQUjn1ZfW3fwDYJDfN7DWJLGE38nrT5LRb7aVKzE52o4UQuVRRngSUrr9jroempGtxC5ZFX5ZFju",
  "key1": "MGDiejMGMw2BLabzmsJZ3wBFawxfucNjcz4ZbWVSwBMuPjFvzsVKTQDLqNGzHjzJ2947ei3ZipEie5V16o6yNjd",
  "key2": "5byPEBmj9pdxNyF1iVhw2EtSZruE3uoxmgUUGugsLGPYNnfabuZ8qzWSdjoyrDPQPwNhkEugqxVrpgQ6tyXJZPAD",
  "key3": "3N7ghFum6vwB6AWA1qocc8SixhfjXCYFHDtsGWHLPHbTtjp7uznwaRbJwHMjppiuDU6QcCxiDGX1oJqZdqd9ZXaT",
  "key4": "5mj8iWsAFHtFmjxub6GH784LMFTmpKSMavQ8WYii87WhZcmXrBmSc1bBkeF7z1HMHHTexaE5yXgYp5HTETR792fp",
  "key5": "2oCboJAaUupQ1kKf9iC2FoGfbkSh8wRMzRvNi4Sin1SurJd49Upn6kYedEZzYfTTwqEm2L2z4XUssGo1PpnAZcAw",
  "key6": "3LzwEGSMRvVnm4ZCyWEjuQQtVj2STNapSgg26FuzmmjL7v6TpFiGJ32wzqQyUh71sN89YAEgxttvcFSyDocFwTa4",
  "key7": "3F8QixEgnoGS2HpiAsbGeb9yScWDbZ42iujA8PuSJ1ATEKFmWJVwRUhkMjUeRGGFs1TauEy5Ynqw58DCPuTcGxAQ",
  "key8": "4X6uEmxUBZtDbFNZ1L4ZMxbkXbuFKeExkBfUXb949Kp7BBVK2JvZTbMXGiYSG7QFJzdkfGceboDG5biwtB1n4aGb",
  "key9": "2yHdu8TSCPMKSAmo7nTVq3bRRnjVHzM963hGLMdbS7ozJn1ADSkGMmcfpA5tBfgqNJYNZoyHfCqoNgEDucjxtPxj",
  "key10": "2o8nU57jxoW3EdsLDZcF1HDc8X6xDfDKtECUB3Nx46USnsvmPv3WNoQ64oYqqdv8jnLMQCxQDxDPSJo5ceCPQH3T",
  "key11": "4MFCdCQqFPoNDze3BFmLaf77zZ21awoDsc2GVHB2ZojskXHjNKQFXTzWoFM2FLQPiGsV6YhxLsv5Z1Po3W47Nx12",
  "key12": "4mfbW5b7Mm1PfaZN8SyHjkZSCrxrDjDGCz7WDFUDLGTYGApYwj7DRBBjYRhYXMqdPdWRc88kkC7mQWeSoTg4eABC",
  "key13": "5BfHYdoudhqrtnFB4yJQcLZ5SVFabkrNH652pFsB96eqZAErm5wmW7JcLmPdTvygU6kx6LsBZjqQQjdWNJAi8uUA",
  "key14": "i5rsCeXas6bznLwZhx94xVnBiCM3roeiZta6rvt2ZiQFzqi95E6UF6GMb9NzcHTA9DoFXFZ9RdvUb5SykD8i66M",
  "key15": "2N8Jg7pdkECSQzWBQJ4an7wmSpzRdoBMytHpEkdpk83Fr3fjsr1g6hmxu7pAs5axLzMxqYxUS8xnniBueMLNiG67",
  "key16": "3Aio8ZMFQPoJMVEQgyNapZZHbk9fr4ktMeVZHwUnjfsV6dVYnrMxpJbGcm7Zoh6KRyRPbx6Z9i1axzoTwScRhFJg",
  "key17": "skarLiz12FbXV4jddJbtBzUijU5bhgYVYruFJwV7oQgpGc1AU5ZpukbszhHfaj8MNf9bGquu1rcgxR8kdUKFHvP",
  "key18": "uwrx83MERrsxMKQ82G12CvADJ35ADDA49p7PPa6bbmWKgsULNkra1iZRajTKSs3ii3zha31pYHt4eWuqTVZCWfA",
  "key19": "4WBK7MXsnNDNZK5iCWY34oZXqyFnYyihjKZ1r6A4GyH2tSd4SHxXbJtcHsevYrBrCwopBpeVvrRTqgATDdXYmQwJ",
  "key20": "2UGLZG1VoVHEhSQXbnBvxjhYnoJU1Y7ZDqY2HiUDNXTME2UmM15RQ3WREybr9HmHaiMvmoj71A2SfcZs8a4UPZpo",
  "key21": "5AB5YePYzNbi7PiwZhanmQUyRwxKvGqKv5PVBMJuGULRGA2RvwtRPQ5GbTHJ65L319zt88qcB9DiQNfRX5cQwhYv",
  "key22": "2yKfiQufVNW1fEswFe52iUSnBb1PGpvNnqvxH7chppXakXu3Lc4SXwwYLcbvhwpzbSDC3VCa5q9o5TUtqhSwyAEU",
  "key23": "3hrmbXH2iM73aZD73Sd59kybS1M5A9aswK95jYe54n7PPqRzeh3MUkriTvC3VzMpeaqnSjX68yaFRY2sGqmm817U",
  "key24": "2fk3hDMDBWmEkjt2qDvLem7Nt4DowNoquYJSCVGFiPAPgFwUFf4TjyoLbYeLLE7xv48S44vdTdx6ETLqu9CQyxv2",
  "key25": "4xX4UXQnSTVhSDAjTZHbFmUqvgkjAYGv1nFtCLfdXGDuwUEgp3ZedUowhYX5uAduv6XjR84TPHEUhGKXx89aPv6",
  "key26": "4btPUX2uPHW5LrsRw1VUTtUhXXMtUeEpeNYrwgmWNzYxBWZadoYApaj1AD1KcCkKpJsxb5TSH9SmoxRfQYhuC3n6",
  "key27": "d51vqEbGXpVTi4og27ufUzPfEnRZ4j8F2tyXrRzgYnWh7JiY7SfdHWaWB64zARxxJ9QyTT6mzjUdHrkKn7RJRcC",
  "key28": "3Xd5GEzpdqE5GqpkBekRdszH6xtJpoQBQzQkag6k35dEPRLgfkiMt8SD7vLRako5Y4ohAJ8d7Gcho27wh2F1ocwR",
  "key29": "352Qu5GgQKBDfx1JDLbfqo5mKVE52vrTmZhxGYhvH5aJeEdtQJep8rw8p18aJaqrEEa8G9MQ15rgM39ezs8EoSfp",
  "key30": "33o4XFkbyu3tP2jDfQXfWphvurQRH8czAzMAGm5QRoW231Td1161C99EUFCrxF5caQKcH99CayTvL3zZK2zzWUPZ",
  "key31": "FLiJsg4AypFJz9xYpG872L3PP2YW9TAAEDdZ8AboD1JFcDgUNoXGYmrrRRtWNN2ffvWM7gD5znqsurcGauE5D6j",
  "key32": "4erLFQ51DWjpCAApFKLbWTZWtKJbBqG5k8AiUBLjr7B9bWcJeizoqdT439AqydeQbmCGns4Dk4YmEvhdTAXdqawh",
  "key33": "5fE5avYVNqXhuR27F2JM15szSpMNmGNVE4i8KDtfG2KHhS4Te5g8qNT99cEPKnxhMbp1ErHszd2wi7JSC6aDpVwE",
  "key34": "3HgKH7knCRXay9ULzS6kfscbMNSz8S9k5b77JLgVAurfN9RaogWWW4GNsVXT6uLzBCGesSyi5sSUBmysthzLS9t4",
  "key35": "4611XAfFXVC3depwV9T7Em2nFm6GehXo8gWFqevsLnCfdgsJggJGPf3QDBCQ1LtmiS7cwvvvoJPCmqL1JwNEVQ9N",
  "key36": "65YC12F77PZuKLEziiL7mH9q9753iDFJR91ko2n7LCMdgAtiN8zLocvtvdhM8X7JBU5fMtuWJCcnJj5MMRYPxcqf",
  "key37": "4obaewsPLcfXNKmbgCAzTACGAJXVAANNgEcn3QZ7m1Yh5PmfN693rJdsiLLD6LXPbLJG3bbSCS2iQpBQ8He3egmv",
  "key38": "3Dzsd2emnYrUHTicDQCzWu9cSQVuRA82Lgd5pgBhv4aRrKdJTX1HfbBTfFj4d1wW81A35cDePkwrfqnked841sdw",
  "key39": "25BAkrhLjYk8r7Fr61q4fyYeiQeaZdHyDurYcMnoXPEP7kMxq5JDfjhr5ByBrebeWpeMHe81FGRUNyzvbNeybdXD",
  "key40": "3pzknHNouCXvr26wNy74c96VCnvXJBZ6Aqq4e6oNxpmYKKybybmVw6oD5AGB1N43tUhr3YPfGvshJau9LWPWVzby",
  "key41": "4Fo6qmqHjZGeKeRZc152mjj7hwiPMk3GLXaaCjrWs87AdcouqgyRti7FD8Hdf1cg83wMBPR2RBuRwt23hjnzv4ba",
  "key42": "3ztyWw3yez2BWjwEkJnR8qtPBNfsNPKwga7AgvVx6TpXpHePkSMDtX3PfMT34rhSyNH75aewfGK5fHjVrjXUMbyY",
  "key43": "2gnVEDJ575mf711uNTUmM8MHS5GeG1RoU4CtbmSUMnhcBvHRP8FNrdFBeoBZRXMke1Fyme2KR5vEHajgvnU4srb7",
  "key44": "5kt9VGuJo1A1QbX3nu9YYJrmv9jjcpjyHVLmbkyq4Gs4xxKoc8DXCaqwghgUcDXURDSMi2VCfze2DzHEr24ANCKE"
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
