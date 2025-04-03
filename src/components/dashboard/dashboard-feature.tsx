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
    "B6zwgrT8wExch2qst9g2VzSEQrgea93wpSoMfZme1D25329Bvgg4V4BXAiQBNTNiNUAYuDS6HePogF7hUy7cusA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZuAFLAP1xP9Z4J7UxayATsauzCrU5Y4kq9BE3GCPdCMxYe6DYWXLPFHsk5vxeQTnhenyEb3EvNUEbAfWtDTvxxy",
  "key1": "5m2DfUHqNWcCUPGThcXHxU5rBWFnSDd6cbnXCWQPqfUhn9GYRfG8ejfjNbThitG7EAnbnNsBnpbZEQfbq6PcUZiu",
  "key2": "2YoNrhfRPv1JTsgfbwC3onfW1yeyyiNAaBrqUzRcrDaNJ3MRZqEMx9y9c7oSw7xPwRnRFK9ybKLv6SxbuzTg9U9o",
  "key3": "5m9zNhYUmnaS5mTKQQBDEBo6A5CVCRjenQCnPk4hYYtSTQYusFuu1tiFj3un8dBBfAtT14xaFRGPfhyULi15KwfV",
  "key4": "4fETFcHTikPAAKZz7unFptHTPhSMWjD738LhxasWCUCVyzx5TM5cAXyUpZNnJ2BcG3khNp2nW3Ggrrn7pawaYzeE",
  "key5": "5GfLSeNxBEycwbDQFmjzBNcpWZQdtuekVrgyQsx2rmhhH11tz9QbkVJQkBkUHzUaDUdBGjaxWYxkbpHfsXLNvYQB",
  "key6": "5UCHQ11DngV8rdTSknSFML76WbXEKMwVF6qzJYWAN1fWzCwxFuexDjFFipo9Sghb7MtrtigD1RctH1RYeenWaxb9",
  "key7": "45y7kRiAqEzVY3iEVXrTbMR1S6aWWeHdHieapFAerf4sJ53R7evGCRLJ3ti9CtwbSd8HX3wtbPKcswKJmApqTfBU",
  "key8": "53C9MpaXAgT4JR71K3is65LYqHzoKR9SqVAZRGtiAtvc5fJkJNA6jjpMn68Lj6ZStZjt2ym6JiNsiJJFxXZLXEbU",
  "key9": "4MqFPDCegSBiPz5C6yCxfXWCewiC4uE767xp9XPitDXcrUbprRP5FfMS6QkN72uztvU5R4GwabYupyKiSVMrbeaq",
  "key10": "4uAEzhfB53ycc6fJTd8PVfi7uMu3t3oW6baky5q43GTvLZSqfSeaq9c83uGnZTHPy1fAgaAznSic6zNKWBr4h9in",
  "key11": "59mxzqy43PEqC89kiQB5Yjd5YrvaxnU4vcuAuHCskWhcPJ47BKMHb8UprN5yspfKUZYBpjuNQsyLUozcnC56crZB",
  "key12": "2k8PcemZUTbTjc21CeqfHzL9ZeJmuhxNynmkKx9quwDB9aHCzUT3Evu6v7iD19uRARY72LHY8qHXQUWra6TGwMMc",
  "key13": "5ZNNTkjpW2rnyxZJamko29R7AFKAxUuQ5rJtfZgujCKEyj9rxByRWetpioZoAHJShBZWXcZXwH7xQ6eVuZyBasAJ",
  "key14": "34dygM3AebzPqnujbXucX2PARRnDZTuPAqxdTVSrbobdp5KZfaTjCMnyWmuGpd3AWiktDdYVtkabDxFzscX7eS7t",
  "key15": "2PMHU4Mpduf4HhMhhx2i4cuJgsWVoRzgfkoVbTK43obwoXBvH4oK5sC8gzaV7D46utUfMdX3ian41NxDXnAdgbAm",
  "key16": "2fjzerv6LMKfyojgrYkoR7uPnvo39wd9gBroAperpswYu8fHFQQXQfTBjgQXoUeeDAYFBZcpE3ZLTeHJiMQvqoTa",
  "key17": "5Zn1RPN5Zn1Aw55EuqNjrh9C771S5yA1kfvnfVCsycGRax9XnrFqvVaFPfSgM845RYdpQjCCpBPEat2LCs6vyVpN",
  "key18": "3hqEzyvH1Tr5ABQbnJszTKzf4SD3hBRi4Jr5oPqJfHyFkGzzLZDiYcBaAo65QrphYHMG5cHUVjt8i56E5kLqMaZe",
  "key19": "4woHTyPPF3MuwiXJdHeVFSRLnqHMiXcAXCcbHCqzt3mmxtUTaSfWqMzkjGMtKnFNrsMyBMm8aRMGXg58qHE43VA8",
  "key20": "4XvuRaALsyu5V9KkDcYQttXrFfNTrJfsjdw8AXYQAFZfdwUk3ib6p1NVgDwtmG9pja9ufEWy73759QH6RZMmXFDz",
  "key21": "ojnhe57eeB3TATgA8cCWRGSAwzkdxUKw5pUgEGXxPhLFjmx1PfRYxw6zGRYQHcvXFyVMHLNuXfRvoQ3TpwPGMBL",
  "key22": "3bA94knKG2hMLbVsVsfdDAbc2g82bTT7bazZU7WRygqguoVMGpE4LXQH13nCJqU8NA2FZUjMLJDfknRQgxNqg7DG",
  "key23": "Pbfc7wQ9mBoRYyotSD2Fc5NZ5BMau7XHVtAAJ4RdK8z4XZ3mpyDjrEthkrC4wLvwZUXy1UXxdFyKBAB49Xdd1B8",
  "key24": "2pNdNJkiNm2wffUG3XxuqPmwKbAiCJRMgVQ5Vhrt7VTPvPpJKeWJdFnjkPNtVU9zujVh49WLJbubrkyEuecKBL36",
  "key25": "3ePvB4VM2YuYZggoPNWtrsEyY3ZJ81mmkDJNvJ9H5GvePgQapEtwfpgXAiBNjTjv688tp9379sZyN6A9sBDzUH6K",
  "key26": "3c2F4CimSKU4im9AjS4JJFfEgNE6VFuxpTYbFmq7dK1xGSLASj7YrhkJWyFBvQRP63XN3QG576JRxsxDEdqKnQF5",
  "key27": "5Vowrjzq67ap3MdAAsaY3nijJqK8Zkx4hunksQtTcaAcMK5MFecogtJow2zabWSu5YdCkuoycYdTxEGJMZkEzT3n",
  "key28": "5FDv69dTNRQcg8J9SAKVViKFtQ9GJxoGaEsHtCT9ZNPCRkGfTCGt6MUX9j3yq2KLnL8EEFa2U1Fz6oSkm4u3gv5z",
  "key29": "2EZoS6npsE4iwW86HGeuGN6yoqs3wQ41rQwWVcU1vbSYm7jdTQseR1psJiBqEvLBycCrgWMHv81XPp3eze1sYZBc",
  "key30": "2g7crehNG6Urc4zrctAmGy9ykuZVzYQ2bCvWHxykdQ13o9atoD2kH8hnTMWKe35FkxXQQHHUZ8tCD99KkS593HQ4",
  "key31": "3k9yuAKtVHmAg95S7PqavM1Qg5DXHNHj5gwmV8DT8GQjAsA5DPTGoz1ZrRw11psUbtv5srrXZLiLgpkf6ggPQ8Se",
  "key32": "5AfG49SHFDcVhu4pd6d8Dy4JBWv6CMULDQea4sKDiRfXhbcoRJqiZn4DcfZZn6bZZQXEzbjpBNbpWiB5E3FzcPRJ",
  "key33": "3RNGRokyhM3ksZr9zwHC84TU3C8mSMmPF5AbFdKzuCrKA5gJsrTXebwDgk9YK7qWzgxHQUCJcnD1V7KFQHi76Dc",
  "key34": "5dmxHETPWEJB3gh31zhWZyDf1gF4tSCxLJE4CV2R8t6MTZbX8KaBwj5cs6oXpbPAJyTdhFyL64G63dXHZWahzDSQ",
  "key35": "5ZbJ75jkKayZ1vFrNquBJDMBoD4uyJHUrBCNsYemTBSNCE3WQD6uhy2ebHnE6SR28KWJLdyRb51LW2v6bs131Kwm",
  "key36": "47zGZ6oxs1LSia7kvXA3S3o1cbYmHiGhsi8HKvvpFoUaRNsLTYBQD3wHyouA2nFP6XVBMzTiAUw9pY39vkuswHWt",
  "key37": "g2JkesHBx3wivZXMevoDTqJ1DT59fPwVDgs7eUewMdxFTrLyx4d95cxQSfoRWpWqR75DiVjHYbjGq1ieAfLjgtY",
  "key38": "3FsY49v2wz7gEX7KKdRum19shePBx48Fd1uwYzjYvmcGQVCQKZ1veh3EX6KvrBqJ8wbJ3aRipSBpiCGatprGWmg3"
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
