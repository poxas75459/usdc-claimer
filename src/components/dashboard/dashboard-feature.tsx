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
    "42yEgmcp8APbkNaSAJkbMGQ9dfmh9417ipexWV7YiV5pi1xakGXFnNSqAWRqsHnABvLytojcr6FLe1YZA2qZxStg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Tec4eMQ8pj3nG1K3RP94pWM8sghEdLnes4bBmywhL8KzypahYUbaUkud9GrWMnxcFukZWHPtCEtdGgtjhNzKPU",
  "key1": "4ZYYyQupX3CUCES6JuLrS1huZrNsnwaAVRkFgMwvXTVHwzEqWvuCJUWp6SneppM7wjAvawH2kkjCSEBH6Go9mE5w",
  "key2": "SSp7RihtHH7fmmFAYdnfqzEz3G6A3BBGh5vCLtzmm7nvtpM7Kouo85oKVkSYuCUMH9VLSBeUaQtiva6Hut4c3Bu",
  "key3": "5QkSNgrJRDaLTLeZZGcGZrvEeNNrg2h8NuhapUvU8rcFtPXiPHh2PFiVAqskx6c4edjqhdauQvo51iXGjR6BDJc8",
  "key4": "4DJ2EtVpSXkauJVHRyWyANHxmXFBUY6UGNfRLQR7uyti3vEQewapTUauWxpQSLe3qwHvus5uJywsEJKhSi8CD1DY",
  "key5": "3eFrYDBwDSR5Phv93f13LyjhgCqWn4khNdFSiD83hWsKHktqwgVcjeKMoLobUgktv8UsaKbdFZXMdDrzmSWc7JCK",
  "key6": "RCKGdbZbSnq1rJAvVi6NPkNAcWXJmoZpjggrPbjKU9Fkx5NWn7sk3oUMmB3KMS8pyMWXVmEHzn5KwVm1J6s6U5c",
  "key7": "4pkqMGNmEycFkpy1uC8S6i9imWp8oHsCNuttF4vnZ8LaqoRjCqVg1pjvJpeiQaWfs3SNiAz8vR1M2RweU5TYQKCT",
  "key8": "44T6wVUXRAJ5hK88K1LJuXvKy83tRUx7ury8R3C3n6xnKxek2dLbRgUVJBGKNXCfDwNvqPpS6Mti4kt82nxWZSvU",
  "key9": "2j5dd22FRArjfQjsBgDKzRXKW4yeupnRC89KkGCwakrJSEJxDsW9wnLwXh3AybWv6sAmKa9dPzLwHNbSUwUHBnWK",
  "key10": "5vypSXgmYMKQX6io2YkT3uYLeh8SZnBbBLc2NNvTPPP6SSxAN8bgrkiQGVDrRVifG8GuWH79y2G8LDqLVCru15tM",
  "key11": "2i9HHhSyTjggxQAdaEtad3xuGefAhe5J9UP8wXm3ce55oXHAvuNfL6F4xQtdDxHtkkw24C3jykr2SnUr97mHimmc",
  "key12": "XBFcvaWRvt6GyuCpuYZ8QdUEeGY1wvixA4eXyW7RtN71DvcRQcu4FVNVKe8sJoBAD3UYLCHmMgkwyCMfd3Pz9es",
  "key13": "65ToBWjW9woejwMgstyqYbcSx57cyjJyDwKtqaYLsAmbBo4BDxPvfWWkDs4R37hRFUa9N6Pf8XAghFTqpmrpeRNi",
  "key14": "37pxi31uetZG2VLqCbM9WPAmJgYzBd8r8aKLmGZVPeehLydhCbFBLJHRxoJsngaZfZRrRuVA8UKE2UGZ3T5FNJSQ",
  "key15": "2rxGKugqNKKrddkwkTN1miPZScNNDa4eLdrAjYezqYipZpWX9VfTw7NJ2qb44qXfKJH9TXTQqFi58MWyynGW7xfc",
  "key16": "55BaSPeVrexXXTfap3hshYrjqJzKoFRMieBuK5VygbVgJG45ms4Fhg2LYreHFouPzFKKpejk1SnW6o4rpYLWMADG",
  "key17": "y6dPdEJn4uqN7HdhBu8ToxPEoXASSxDNibnig5UnRBx4GXUfWgY5pcWHit1USQow4g7UemFym21ks1UCwfRzbSV",
  "key18": "4DxEKb1QyYykS2ZXoNvqkk41rerXeSqyRZfYKCc2UgPudzVHSFYeQgdxfRyKJREqLV3qs1AJVW83F8PSukmJzqwk",
  "key19": "4rChCcZA3t2NiSHGJrw9KAGDiuwthJvCSjDCSD78Sj9wsyzs7PofVyQM25BN5DSxWVEm19Xri2HGxNjLKavS7PrG",
  "key20": "41U4sLoER87og6m6fo59CACBhbCq9cPRUvoL2HGfTGFVj4Tgkqe91MUdPdpGceuhRkjdRYKS8cSnfQSbthBoZm3z",
  "key21": "5fHBfTv4C2PkrXhpuBJHWgthojAHxsG1uvhjFJSFR12rA5PcywmXrM5gGpTuEi5orV6RPHjEX2JqC2m9HmM7tG43",
  "key22": "564dYSdFtW5PqeMoairzjQgMwba5AXoPQF4ZJexEuJyuwo876TZHf9VX8ACsathXZjq26V3nQUdj9R9PkAmLRNWS",
  "key23": "5qAxsQiQRodEk7duZhcq3QwEsPkqHEuxH1FRTMA7mHAuXpvgkY4uUHnC9UqcrY76uhLa1Ed9gWYSyJxJniVQPUvy",
  "key24": "35SKde6nyCJwun1MVXgoQYdMCk8bPaDNv1izrPjbFKByNLQJGzdgArSTCFxjbsWmGhpvfQUSnqdyykffrCjvFUDB",
  "key25": "BXycMNbUyLCbXoSmxrsm1owaAAvD6Paes5mrev9a6z1xnHYsGW3Fbk57g7Jo4NexP9mZxcWShsPXBddAzEnRzUq",
  "key26": "5guXCe3cGJKsWzwRLGeyvJEt6JtrxEZUh7SKWUmtFzcgy8YcQTwKTrkv8s5ME46n8w2KbtBHwuLR5ZTuPnqtpvh3",
  "key27": "5NyLhRDHTDyuJZ7ZMZfyUQ8diJgo7f4KrxwWvrpsPA6MKfatsCcfNNhwkjM3EKBXR4qZ6tGHdR1Sckz9c2eMQLNB",
  "key28": "4txzT6ukT6p2Bm9CDNyHmpgzmwUjgotJsRQQiq4w22tiEsGJADDvZfBGVqXTx39nfV5vu1PbZCPzRDwL4oekgPgt",
  "key29": "3r3EYLmLi1tCr8C2uB2jSgB3hJS6sYZrn6invZ2vtyxYa8jCxUrrST3Wz1d7T7mt1eGs1ZYyS2R4D1WwdwwiKM8S",
  "key30": "31aV7DPiXkju9zk9Lnofz7VqL5pDfaHs9FFAXo8PPePDkPZspjsuXb8ixpxkcSZbGcuBALiH9AKeDTV4G2PDKMRA"
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
