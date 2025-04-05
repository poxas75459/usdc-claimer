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
    "tkAEt6kaanCw2vmTVb6haGEsdeJkmCrrWnJ5Cr5Wc7AiVzeH5pzUk3MfsgAdTSwJmr4sBS5fkDF4yKFUU4izGki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PobgZxuCWh3zcAqidjbWD1tJHcTrV5j9ds3RgnUxevhyEsZVq7DZqP3scneKaZfEs2qvEdsQ66m4RFdE6y9JAUA",
  "key1": "2shdWwWSpZgCPYB6XL5y8t2tBYBaSaXfGgJK7ADP14rN5XhbwutcdwsgZCYJZSiTfyK46euA6K11vsVMUHmtFyjr",
  "key2": "29QJTV3sDR5nrosy32Hnb2PuwLMA93FUrUw83392QtjNEVUqqJDM8tMbhMi9iGWKX8aQFWaAZZKWDm2BTEdkSwCL",
  "key3": "3heijGBAwNpQMVBEACQJEZagQeEtYm1ftTuRMc5JDXJshwFVryRF8iLp6dRcrkZkmu7QgaKvxSJ7Dpz7m4rPmdPg",
  "key4": "2SbjeQDnBhLMQL48JMyNqqUhMgykTNLhknc4caUjxT16JDiVFDVhxXDJwfbDcEwArypwN6rM35iX11JfitbkzsP4",
  "key5": "217A7oxZeDHbZUhxCNtFnCtKu448uo3VHoV35Hmeuba6rsixDDC7pngiMJxQ2q1xHMozbvrp4YJD8gKVqUBLYEpx",
  "key6": "8FRMLw5QWneLMxQ3qpxp4tUaGgxgGTtw45ZqZXLAJnqKJ6LZkKCXZvcrKCmRCk3EuUrD4UpfWuQ34B4fq2QzAYZ",
  "key7": "296e9pkGBiuttJ9ddx6Fjknrorj4fq7ukeLtgJ3RuW2KCk96vUUdch8MpxdT9soWevMkVKhi4bMNoU2xVscG5Ya6",
  "key8": "5pHZbEqLm8iQDNRPraAQ5THZvhrZt3adJVE9dtbL7Xi87gkS574ozrGzruRyfLzeA8FQmXhsJ8C53ZawcmyRSrev",
  "key9": "GRbW4ta55FAsCVnUCqVZyLUSvumS1wVLNLZjN78jdVSyUUSVP3AToZtURimByiRfkkPL3KJ738K2gwoUp5BGvT7",
  "key10": "5sPXnPmVNEZM4W3wZHDZmLMkvczeR18KxecoHVy9deSQ8mBTbuAngKEYd2UyL6PCBYDA9DQL9t6Yj8UMsAicmjZN",
  "key11": "4H7mBi4PPAirTZdVJdnQGCEac31d6sPceUX3UC3jHupCdd6naQpU6jK6L1Xs5f12GvdrpcieZnrTKcZsWS2iyRSa",
  "key12": "5B9W8NstHHWxGiT2CcefnPTdeSG4bFSqmmNbzmSGfjiJ2eTrsQ2vvuiLTSWfmkELpeYiyFAPPPov5icJ2Tcp9AxU",
  "key13": "2AnjBBR9QgstwUuiY4MptNd48gXsGbr7oQacJJCvsezEaC8eTJsuoZzFoZCGLuMyDwEaU3TLgshB8bkiLgKjp6TW",
  "key14": "5AoGmjhoLDL5urgtzRPDeaWmwwgwj5YQHe5oTFCTmgfSEEEjpkmaZ8ZwynGLS2gmwRMFSioV5B45BHR2LuMvufks",
  "key15": "ZdZZ6qSxaPj77ujPFa32uY19XdawfqkPr7NsqAAh6xhygcupRP3NnsTYhXLRY78JunBz8KxoBAy2eSvVjZxrSVC",
  "key16": "2SPevcLvgkqtyEmH8JEHYK7aRUd2EKrUFAoWXSbphMwFBKoHbWcoJ3F1QsxwpY5iHJCyWiMEVhXRP8re6F49tkGT",
  "key17": "5QMqQme9ZfFPWvvgi25jnzGGwyNNYwJg3ywKHCgU2UdSeJHQ99yACnYQBwrrXXmh6Qpqtxb7YsmknimDLWwyj4wP",
  "key18": "55P4pLYWmNWjdkYPBE7ETMCrvjC2ANG7zAEJ7tjTXfuEwamWGB4nkj3vpL6TpBYbrMHLhsJ1MejPXTjMrKXWwwWz",
  "key19": "5dcvYGRnuGHzydKWPWPhjruKNqcasQojNkScxHYenjX8rX8tTjRrkUEVc3g3boZZVpJ59Dq7mzkoVkk5YDduBBzj",
  "key20": "2H1U8jZyApEyU6tKdrhQRiHSWYUrNheUq5EifPf54us3ygfXZTPSg12z2pNpm6bDYVwZtgyY2kugWfpF7b2XNS5K",
  "key21": "3wG6DfFinBHx9tX1pZZq6ZjU2NY1PeH9ubEgcpj9hYbhmYhqb8FMFJ8LLxmji6ukXaz5a42F2JG3i4SrnkCzCwmC",
  "key22": "3mGWEAjqxXhpTVEMjDaqys8S8uwVuwLPxc8Gg4AiVZczMaMYoWuhwfKDB9VL7zRBhFHDyg4fgktfoa28zk7i68sA",
  "key23": "5PyR2nsTarpdm6Vs1C3nX2m5YSE4x9LnpWpc7Dt6o4tozpiDYZLbFU7mP8KbQC3dAfa8d3b9ZP9bqtJKeXZRR26R",
  "key24": "44ctgajQxAuNFUFaDD93fq3swBVRx5ss1QWShtHo7MVH8AEENxyNvhoD77geWmhJoaCRJuQiaMCgF1JQt88zS5vh"
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
