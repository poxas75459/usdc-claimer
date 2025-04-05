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
    "5gjaDkkALSrrdQBqrtf4zkQozk98HQbbVvS5P1tH87r3zS2ZzPQFE9PaM4SL7vzfGXvtZ8k42mFq6puP1LAVA4bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvWN4bjj8rynDHpFrLD2EvNbp2LH8QCdUtPrfRVBz9Dj9xNipHkTyrUfQJrbnpQ8wzooD4gSZZR39e5wFXC91EC",
  "key1": "RDTVPhipzdiGmBAXepU63F3P4xVXDSmcSG21xH3n1PikoDKX9RuSPYT86FkDHcBwbQk2UANaUcGLj5AAwUSw62T",
  "key2": "5oPoiSjX1wQinv83zxNr9H9KWMQQVVCotzSkupbvH1XvtKct1LeD22FnHEpRvW3XWoD4atr83uKq1c8BoXawKh3K",
  "key3": "4Vhf8dW1Shpw6HePjYLenFm1Sorbpg1bhW6MZkXAXeQDo6gEwmeAbtqvnNidvj6iUAYXSTPndThtvRA313H3pg31",
  "key4": "5qa3mUBr7UZSu6A81KjrEcJtaP9ZmqsWKjRkCJuEm1YderGYtfuqrMTzbMUQcnJYQyciFnb8WCwgLeXK3dU3JAML",
  "key5": "5UXrhJQDxbJ8k4bwxdTW4mWazR7p1XBhEFV2n6JmaE9b9ePRNahXoBw2KFkzUniuNyVtXRdWgYaxg8sDYyLm9w6R",
  "key6": "SR9TBQAmP6q8US6zau6iYDQPziU6rT4Y8RZggZVfsxs9zg29B2jPVTuytw86svp8tRxy6vixsckcsEMqUCWWR9H",
  "key7": "2H38Axg9VacViYfyiB7cGP8wzxbX4mfERM1jjQxZ9Dec5ede7yxL7JSst7JVqigaqW3KsvXoBv1s5SpJd4MHirnc",
  "key8": "5hH157rh1ZeBRNc1JRMjJ45k2fFNS8KRqq5V9bG3E6k7oi6DXmxDWDacQmjNdwzyPsgKpm6MVQXdqHFatCzRhyUT",
  "key9": "5o75KtBX9SH2NmLjMzP2dj2LrYrDWeduD9E2meZXxqxKrpvt8VuAM9nMrSiXm5JbCH7gpJkyP8a6e8RdGWJhbKMj",
  "key10": "3ZBEUNqdAEHkjoGPpTiBmkWSNntXVs5t7fmW98ksXvGgiZvjy4N7n56bY5rmc62BhnTkqfX9UWayYEV4n8iEc28j",
  "key11": "z4oncZ5R7PJxs1ad7zXLfCn4ZPmWNuV6Fo9C74yKyia1BbCYgC4pjkrdptwyEqGY5jxPHUr4MdMZ9Vq9sa7Zp2Z",
  "key12": "2nTEZceXWw6bmHfQ9YFURXwSjQ9EwtqsAeSTysCy3MdX7yC8FUvsg72qRVj8foP5z7Q1woyB9Myx66aeuEYswEfh",
  "key13": "5mmx6YSbomHQvF5WqoMvFk3yTSorD82u463JAEapoZvL69io6vo38BnCTQ7diQ64xrxtFcG6XbFPecpsDye4ppsS",
  "key14": "48yDJkG2c86yLycH4RejoGWTDbtdTK2ASCM4PUMZFAuxbmgejjkovnJgx7NLQtHXME82cCGxuGXBHpRTv14wfQh3",
  "key15": "3c3KXkrg56SaSNTP9KiRmzbPLUPx1BrgJVnezodRBWsHMRs6Rcvn2b53xmDLjJotqxJ3PfwLFTeMxeKUA5X2vnR9",
  "key16": "2By7w3hoPY2kQtjE5a7TUtBT4CqzRaZk62zjoDpMs4PV3kmLuBrQqE9o74vFvrizMFd95zywpvvb9gUG9rRaENbd",
  "key17": "vWCW8HjHypEPQGRwabSoKRC1pdjcx6o2KvjEwwfbua8TUftiKQSMDS944c4UWES1paXXuBA6bcS1TiiY7KCX4PS",
  "key18": "28pSkhTAHX7SPGDkzRZ9GmWdsQXGQbE4Phptw7AFGxYt4nyFWHfyK8fAFyJhDi3vHQ1tHu8uc9rvFvKY2RfUFjMy",
  "key19": "4jZ7LpVZrQomRY1qNoNMGe46MyuAJmpu88dMU1qrZMJrqgiPYNPtcREcQfirrasEHQScmB25LkWxFuvMXG4VRLon",
  "key20": "4VoSFKyeCDZNBT3JLNS3WneMYFcVFcm8SVqtCn56Y7E5B6tTAwBmwxxzTbFGrdUEg7xVFvqDNMC8yAncLZU523MK",
  "key21": "31pbRdo5mcxeg19YURq61NefNfBjTrGKy6Y4zXgEhBRtMpYMPieXesP9b2DtPCYwZoJiVKDR6WUZRvEcetsmpETx",
  "key22": "3y8d3qeGHrUDU3BSKN3QexSccN5sJ9Ha3GV4mvmPPDAzhgvZUfjbGJimvcvKjznnZdE89Ad5r9xW7wuaLKHN6Ena",
  "key23": "3pxB7TkLrRzxKdtapp5AaVcotAADN2UdkGhem1UuV6AjNs6Ax5YnSri7jKTrwDghJfNvyJcpg5fuuSdgU4UH87gd",
  "key24": "5sRiX14c3bDX5MX9zBPAWdw6mMTpzwr6uy4i2g4YhsZGzCoXZrL78xd2q6MjN7gC6fqmbaytGrmiLFMXjKQPhoG6",
  "key25": "5MD33AruRaQ1rogqdUezTxEp3ag85YK61seBgJZvmaNVCULAYioEVSNduB5fCqQ8xav4BUPkeVTT52k4gkgnV9Lj",
  "key26": "4k15Jw3Wr1AkRuTw4S47myTn9b86ndn3Sc9bZeXp3VN4UBxXmHZD9qZQJsohPZWURNddEEEz4jiFJeQYvHqppLqM",
  "key27": "5MRxY1fpXN4ddVGX5h8nh9ri2CFnU6CsyuTd5AFoXGvvXfgR9rzhyPgKSyec7AvdagdSbdkGmB7TdT8y8DSsg6S2",
  "key28": "pFwWemQiixKJHcm8hPMrQAuBs7DdKGwsE56FbpZm8brfdKbC9GHMjSdnd5DAuWMoR5kxYAdgKWeafP6rdudrQyz"
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
