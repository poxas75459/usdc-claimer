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
    "29Hk5WK4eEs3wFnbXzW9Pps3FHE4L331yUuhL6r8WZXk2qvWtUZspadKwULhdZMcV1viBFzj9jZU2HAToqwYT3mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jDcE1aGHAVLkUJ8bcT6ogmTmJiTVgkAri1bkct87HQK6H8AgtXhBBmvRfx23dJXUU6r7bf8Ja4WXn1e3rCxgVy1",
  "key1": "3tT4G8SdEoU65zvWMESmjy64RLfQPbh9mmzGoQQocwEmMoQh9AAE1jiEoe7vgE9BqFdNediKPRiLUZZF3SfRnekt",
  "key2": "nkCTgJhH6smsA4owwxtgzksSDDcJdqhpNkmcqZwkZvpjGEnu4Ba3EBURQbpvHdUf6MM9ou6cwimWckDH54qBAua",
  "key3": "5uG5oLrCsDCtzaCqiDDFA7ooaCci76DyCU8SsXh8qeGq7JYivh2cdccGYyWUvwUd7NaeV7uAyhXaB7mqDHkGkYdL",
  "key4": "3zSBqscpWvSinkX7AJzShQdc3sH8NiH9WqyiRB2ZfWedTC6YP5owfp6BU8sF9Sp7eAjsCj9qBBvTW1bNhh2ik3qP",
  "key5": "21qwMvU24eQxsTpZFsfPxXsmh8Pt8oPybhajtJiwmS86YcpEHmtXzUjagZgWypVRLNko7KxDkjDUa2uUmy3ZZBeA",
  "key6": "2CpWBnPtL9EgvRFgVXXdpZQjWZ8MWPP3wDjbBVNFUbHppkpwaZZ6L1bdRuFcu7KmrXy438zuPpcPshA6xJ8yUZKk",
  "key7": "qXMjGWJpKftowiEvNt4j19XEPGxNvBmC8Khnj6s9W1PDSct4HMUn49s7XW8d4nNLUGmoCqsCrneWLeF2hFg46fC",
  "key8": "dvoAvoMRh2TgeMC3ezNwkF995SJB1hNhvTGd5gwMCrJUym5gf8YLNULci2neqATYAH5uivHqtZm6HZjEaHKh6Yp",
  "key9": "voNzDeCatQkwm45JeRMnV1NPgyXnSjC9wpKcPgnLyXoQNEkTnTs9n9D2FmgW7DJhETZghFSX4EnSSA91yLPjqa1",
  "key10": "2XEkwVfWfXujn1A5hLUmQDPoYeCjkT9V4Wr53CyeKNx9XjMEDxzZBQ8zwBRK6xMCSwYtHjqFpP4wfGuJWsxjrLgN",
  "key11": "41HxvXTzYUhHTG1yKfAPdDfxUdKfHAVvcaUYCy6vMwythyDvBiN1jHwTnNQubCdqrSLjfaKQ7EyuDw9B4tb3fj9o",
  "key12": "4X541PQWgbispNYT8XfSfseyjdSxs5ncfjdwrwEoiwk7n2gdcttw5n9FuAWLwYrtAAeAWoCHFkefU7Gz1uPLRu5g",
  "key13": "3S7Fm9UUZM6b7G58r1hizC2R95N1vrdk9b8fZHYHKQMPHZuvcLcUWUYFtFvGGRLHeGgtYBNM2DxfSqGZpo12A8t2",
  "key14": "569fbF2YAmgYcEvq7fiHkzX72A21VEJjbHEz6qwMv8QjazM2RdYDa6CAtfgqiuBUBNQvteti2TttEKg95HLdE7Uh",
  "key15": "3g5GoqcRyEKHL4HTwrJmotpMyBM3oJ9RbPGB4B7pSQyHjwp1WUVfoGEkpaA3rjLiRy4gGdMP6gsdmW4DfPbh4XSu",
  "key16": "4qdR5LYzzZFyMjZbUxRU6yoJhSVfNXVJs4kzRpyp82X63CKfJXALJK155Tqv6h5PEq6P7ELGAZjCvaNZbif165yi",
  "key17": "2wHTCFUNXLPLwyuBGeHoLPsURECAdM7U73nPQRksoDTHCGm4if6o5BACn925hyo9f2vsN6xABPtcHvnV1jwftiXd",
  "key18": "4kMS6bTCyx2Z6MWmZFdSQbtTn5tMEXQpLWVjJV7LXhi1tyirmQaWQZt1Y268T5t4c7yFoC2Zdj3eb9Cf36BGHbU8",
  "key19": "2JXt4fFBsNsSs5GWyyupRUjWCobp5RezGXEStnfMvWrAA3MBxUDQSeMLNeBXVKC4AJ8X9yti3w1776ocwuBNCvEi",
  "key20": "2JTFNqNYDonMe7njPdZkg7eKbmXR2EYaBW7HuHtcgEzDfHSFgE2otDoRX3qSRCTgF2Bhb5fi24xf2HSd5ouu97t7",
  "key21": "3DDrZbb32XnspziaFdzBwp2vUMEGhhLNrLs36Rss2kSDgtfoayaDUhf7rfq95W5h866ELMfC7hppAD7y56AtCRgc",
  "key22": "3wuzToR7GgAahkFBbgnSLZxJNb3TyATwxroX3dmScEpdXpDTnhpki2pWG2vD8N3Cg4P651zAoaRvuiBzvnFf7nKn",
  "key23": "xip9WyuoZ3YxuounEVwNombyixvfktyU7o3eEKcUmunDrUAh13J89f13D6mg4krEgvF2abfRXTGPvWVKdK3TTSo",
  "key24": "4fA8iUyP8pDXbXuJV6fsPZSWBzMfraJ9KtZ71TrWUmQS3iRw2AkGatSZT1UQKM2Vp7cg2yDaz3oiGDiJY3r7Nuda",
  "key25": "5AkPBg2UqvEJS3GnEN6ccdniaTB9QB8PdhcL4KrtZwdhUePmjvhwfz7ESRMGsfuXeoQWjRVmYuL5ACZ96hev1Smg",
  "key26": "3myge8jS3EErdwsPpBB1JLtMwN4z8BPctjQDnCuMBpCoQHzNN4nBNtgUj85mbD2DAyyS2NiKVipyHiXzVNcu64Qy",
  "key27": "34Dt6MEofZu8yR5Q4E7AVLVPqJwFfkmewfQ1vRu5PRSUXZZTZR5JpYV3gEcDuTz59V1PttkoDuMAuLNGfnDNypmw",
  "key28": "5KzT4EWgMdLhYZDJHTPod8ZxbdndNxpMUbNwxMikyJrCXAtPxfi8bAty5TmzrDrtcDpG149qibWsSfdHAk4yMmLx",
  "key29": "48UaJNq2tgKxNFH2z9rZinQyoL992xLKn1HNdUVKaVkjtZxEigL2J85zQTF3BNyFqrZtT9yuSVUHYUwPYewpYhyB",
  "key30": "2PA283o3rZDS1SKdruXMfnFLBBvfPckbnrtByUZvApkwVofF7KwxaxwGD4yXcB8HxVwtpXwBf25hCW7aL35LZmuU",
  "key31": "3J7pakzSmNz6LgMR8THMYFSLy5q3ArYkCpnRLeXfgEv3kgCv73YdubvC7zkXsLe2p35vSk51dz9e9htRXUhzga1",
  "key32": "BsyHjuT9XrxRqA9FRv3gerg19ZNe8MG6rHRSw7RcQtW8cfRJ8Wt8Veszwgn3HvHmP9pjVMKPw1k6uZcHbMjHrfR",
  "key33": "4srqhnaNnF1MpRSmzuMAnc2TCW2b2jN25REcHcTnpV8aRgNGrAWNXngjPjSkU2AvYyhrJx563nhD2u95gSRDghnT",
  "key34": "2UN6JtVRXgjnRPZQxz6Ter4d8RBFPd2m6XaCMHt3Tx1gESVmunRU36GDx4qwBRVhuLXRn4drbyK938dKe35XhwnE",
  "key35": "2TGvR3KMQvtKgkXWbo5xF2jNpzawMdB5HUvFUEQW1aUtNUo5QMxn6LSAarN4LeNBLMhV8j9zH7ks9ywwZy8o3mZq",
  "key36": "2TzwKTkc9dqLMccCtAZwsVBTKyYdf7tLgtzcdAwVKhyDrRwgoUTQWAc5xNJjzYrgaPtkpDxerfePJ4rK3aQJu3ns",
  "key37": "4huGoWV6UCPnSxc91NPMRHMpwNeM7hPVciAzjgMA1nnbZ3ijrUxM1DNfoCTeaE7Ur9FspvAyspA6keoEtUyjefUp",
  "key38": "4XNw6T97Qopdg2Uxy8Xf5H4xwTifH7MiYhyMnZyXFkhmFAQq1EvkU582BczvrPaWYttcWfvk9JRHEVPzyoNSeFsm",
  "key39": "2hTzZ1woyrbh4ybQVpr61QqBdAWhghveu1oU5TXiRRBhBLe3fWm3iWCMLMQe9j2op5pP3ZascdFedSAe9Zp7xcqJ",
  "key40": "3EH3acQ9HTndHM9txXG9Kn1kUBWSynvS9jAiPVJxMucS6LsM7WexPUCqcSxjsZRFBmZ5LaEcKAHQ3HQACfiUX6ET",
  "key41": "5nWUREzmGFAXj7qHypubvr89Qz6tMUTTFpvpAkT6fdsXTad1cpAoH5Er1iHU9R8pHRiAcPoX44LFL6weScw8ckTq",
  "key42": "4PnTkKUD4nMQvC4xeUTYrQQ3LC3G64fDJeJNCq5qx3xhWFNDJa4nSgipsTaiHy7MowUvq6GN3BjkvNM655PSCBiN",
  "key43": "38K8Rw6npkXQvHodqwP9WC9U2D8oiphdUHvroGwvgW3pqqydNBoPevw8YvDj6c4XjWos8DqBAXaBp3PdGRrbbRT8",
  "key44": "54kkHJu9EnWmgnmpBwYCE5avBhQEmNo71s1mwVjWm4dfmvZK1BcsBXkMyYCixeoR3iBD21G7fHwQJTs1sMc2TsbT"
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
