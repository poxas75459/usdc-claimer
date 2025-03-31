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
    "33zaJA6H79n9Vtsq94BpfcFKC15HnAkSGR7msWXKwFJESqwGeTQjtpBuVspYgrNx3KQ87WuGChPSszkPfGQtgWgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EUwhRKmQ6vUNPzUuVEZEwuVXmUYo9nggTFYutX6SjUNmh8yRnhKsgBYAQgseoCECXEm6MUdqdR8zzEi3TB3iCtS",
  "key1": "5LRKT7rk3f5FN5ukQfqwucsdnp4Ct168aKk6r2kMBgRQTcc9Z46QEW9CwUVZtVu9ZnQbcTAmZRMH8ZnwynFxh8cf",
  "key2": "3NU1yfDHVvK33X8zPjaw2CsTiabDpNsvKc1DXu4nHf34sthdoRQ6BR829j73B9mcZTqNXYvbCs4iu2Zrdj7fMXZs",
  "key3": "2Pyz3TnrtsYX3cxre9c2WWGM4rUxpT2zuSUhey6tn6S9mF7NwoDy2YZ3aCrefYGT559Nh8BF4n9Gxog6xZeHJNwT",
  "key4": "5xEKUdzcWfzUfnehocJSzzxgt92oY4NCgYmUCzZEJdP6QChtkLyvma5eshw9p6weHghnkYz9fkk4eRPVaN7muoJE",
  "key5": "4Z6xViZRSy5CpqJAgWsohkAgGJzkaQJabMyPb2F2s5uXkG59BNaXCgGwzo9D4jqP111UDTGtrJtZNTMQcRL1zqCm",
  "key6": "4yWwFcW4SCGZqdGkujE98hvYSsFPRCqMGtPDECdLKe8FUq6dW8Z4H8HEZ67HFbgncUf3sjnUDRTuau7kj4vR6euV",
  "key7": "5DFJq9aAwGFHPiFwc9Caz5MDfHVXpgmx3k7hTTuXWfFhs5KS4krnoQso3YfZPhrcpxHnCWSnHkTEiRZoTYBiBq3M",
  "key8": "5iZYNseUki2hi9LdimvEzYSCjMzgHjnpFEfeEoaqjpn4Sohob3KHmkX12ZywUGs8P6uVtUX2ocErGtzLVLXLE7xK",
  "key9": "5pewwupRXnYD7ecHyEh8hivbCX1L9LudUHh3TSjWcqMMwK67cxMXBFi1Sa26iS8szATWshaHjKo9EUX58py2vx1i",
  "key10": "4fVkFFbhSGqeX77vC5NwbVnABrvni6FYJSCJ7PBHfezBYnxP7KipfgegY6MfSfjr5x5bdSuEUuBJ5AYbfUckPb4J",
  "key11": "3AhSqQFgEi9g8TeczJKbPMpWWFHY8ZthyQp16oT5w15uJK917SULXEJaC6SYBV1V2i14ui7Wun6JNgWefuDnCSai",
  "key12": "tQYLxzPtHtH8TcHmePxuHats6aFPqEtJ2KdyjAvs4TRM8qGowfaf1Ggb6dM2ptZUuXcA1sJZBJuf1oFaX4BPq6H",
  "key13": "GoUWC2DsikazHqSN6t77S6cFPDtUexmQREWEQyFgzwhEn5zFaQ51GmL91CNPhMotKgYVsVaDY1F19AhP9GQFha9",
  "key14": "wEsaSdQ48uzvaKwk8g5EaQXYxEX7w5bRGWBMD7Vhc43uimXa412gPk1DgTkB12cZSoXdhEork5BBygZuXXHRyE6",
  "key15": "4AVVBRKbfa3WBCd2eSc4MMPTeuDC9ccPDR6Vj55Wh61yyqDHwjzoHNQpd8fM5vR1znq8sGaRupZnVt9fcaymoVYt",
  "key16": "2Qpdopt4bG1vzEmrNfCEyx72rYbCcgtC8WKeMJCwb9ysyTeB9rukERAWv2freDxyowwcgq5XjCaWAfVNR7CMVMPW",
  "key17": "PzbuPzqos8NvNm9jxfPUiAZM5KnGmFkVTejY5gFHfyyEANZnXxHVhaQJ9BY9sNwWS7zwacRjoQ1RmZyXH3hA2St",
  "key18": "QoCbU7WfLCDwYW51q2AfCPqcuqxf4q2uf9D4ZBMCMN1HVPLB6eCERzqCrXm8q4ScMNN4hdtDQkfNwBXadLWkd3G",
  "key19": "2ztqAwnutEa1wqeEgKgUEby7bLdb8ZPEsX23JJqQhiwJEbxd9RkAMAGJhc5RB2kKhv4TcMDpxBkRH2tLWiDyKcbV",
  "key20": "5wo2FhNTzBvWBhKE3NY6KHhTUSPfscfh2p4YYiV1tRK8Z5eYxKUbX5xEpngaLeAR3CUcUdu4Xhg7k7Tq3uS31JpN",
  "key21": "4poujNGZnrUwtqFBsVWMJfBuHoAD2arEcEbZeuCBD3XaKgzoASxHZRwpuSzG3q6HottxziyauQY1DpFthwSEF44",
  "key22": "3WJMPUxVwZREjhyNrN2CF6bn5VN2ikM9nXYxY5XU68k74nFgNEnazk8KNekp5Yw4yz1mGbMho6re33g99Xu9kg6L",
  "key23": "xhfiWxFATSosPtKZ2qRqLM6Y5V6u79A6unWW7phoKTFgoMvduiBFubArxUtPtqrgbRCbGzu5d8geoZs2DsQJPTZ",
  "key24": "47bf9PGEzx9gKrpgCj3mJKrK8h8Fpdshf97XVGhwD8wp5woruAx2cXdVT8MY1ZE8cMrwasZze1jMY8vTt3pFyTgZ"
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
