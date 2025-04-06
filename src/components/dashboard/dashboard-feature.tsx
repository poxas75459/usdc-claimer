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
    "2FyhMv59yNCLnBsLxuCv17XjzAY95szoAgJ7wPd8B9SuDFybeRG2cV9bnbkkwLaf1yRZpao6rhDG9rEu9cJLAjy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7WAGRWuEdNn4KGuLdn4HRAQsEPF9rva2xFrAKbGJhGLCVZ3xDkCqSwsNQ3LNRjMUTAdTteYJnbyLyq8otMcb4t9",
  "key1": "3RNZpU9jTQng5Lnck9YHWmEVwD2KXFYcKyPTCL3YWDH3NkZuS7KUij7DGJNatD7d2AyjiwFevk9bFH1WHQKX7BeG",
  "key2": "4Q1gdc3CKk4ifvsdxq5EZtSb9bcgvmLMqz4PvZfFryqX7PLdqVyHFnD8i1TEjtYV7jnTEmz2RdBYw63vAvYXJ6Mo",
  "key3": "2pvki7NRyHWGDr9gHi11RhVE5kiXoojzTVrPwr83K9feUSbwrkTQoZTDzVez3LJGoyjVDYsPUYACz4oTsTsvM5g",
  "key4": "46cmLQwaoWJGgoS2iD6EjZ7BoHqW3ARrUdtyxhQwvXC1vR4S3Bw3afTynkzwFfKgKBd9vi8GSH6RuPVjugnxRNDv",
  "key5": "NzwodEYxmoPF8VBcFKWmGm8oYgYHDuZU91M6Kyzp9n5jyXF1vbgAeLjctwQnSyafTEEFoE2wTHXroHi69XsLhYn",
  "key6": "3qSaSPXaT95L9uoNacGyUfsXSHhQbmtijZYyeeLAM1Cxf8ika3ZyEx5VXzE9RGCiHbKHSfAgXVgJ6Bf1foMWCnW1",
  "key7": "25XgmbtFnZvsiG5wEZ7mXmQxaQP4shE3kn99vso8rDDmWK8oLf31ZGbivBBVcd5uyLbW3htJf9fR99tMkThhXA5H",
  "key8": "2Sh8tpzht8AdPAhEcgztYYtHFidmwwvQzxz2Gr6tWFBaXwP6CtquQPNEaD31CTebWDxcrxN6Sk3CLQf18Vs5r3Px",
  "key9": "636Pk8QgMVpfc5MSdBDbUGqZ9j2u5Zin98jotPSNWxgP2rSKnqkkYfaPofSR4nmasYUSZ9UPjwZHXtCFLgLjbLWR",
  "key10": "2ziZpm4ZtusXFmoG4ZDAXpMzA6pkLeokg99AktZFhesWXTFC2SKSRJzkRK2LPGp4xxmTzRzSMjbXL3mBGXHmhQHc",
  "key11": "3wroDKuRBFJhxbBBTtVPRbi589zFNkrhx2Ddap1M9P1EXhPS8vaFL8i5Qc5yGMz31abssMUMcAmVjuCMuqfLAvhL",
  "key12": "5GnU9o6xhLSKpTaRX2t22txdzMWC6zdMBDs2Uh2VQrpuMMxwB9uFfMMjcYrAB8jWvW7wgjCxCGfurxC4DSq4G5w",
  "key13": "R9VtNqqhRm2GaD4SpP3m8YpZpPTxa27iw4NbvrizphYJvydkeBzZoujzhWKfJ5g8n9cJZRhRxFGs3q4G7wwU1bk",
  "key14": "2iomUsKn1e5v4xepuEoHjej7zXjEDT1rPkYGG65TtDfFgKzciDbD3PtFFNKZ4BpGs1EC3TfGVNCBDWrxtc9xypPL",
  "key15": "2TY7QSDuKC3hnkBG45pewsnwRUj6bW9TLga5mVm4Y2hFJdFoBGagfCWmT1AbZkNsMPukYdKyhSLDKkxpMWeAfAa1",
  "key16": "4YgHjycpmnzC6n64hmCTuTXwFrwBTTH9neKgVi3DMQPWBzzTNUrTeMe6ZGN6qxD58XkdP6zZTZhNT2Abtbyu1urp",
  "key17": "5fwcntcC3RzYoVtWy7MX8WG7T1yUJxg5qbvKcC9HoBDe1wU5zyVx5nTnCEcF8N29PkMnAuzv8Vmp9bjN7dVK42zC",
  "key18": "9GVjayhpJebCxADLN2HpvzdCvtDkSL2HGn2UvCpMcnUKx1kuMt2BGadtkRwAAEzo6axULGxaLEUk75JHBqXbcvW",
  "key19": "2w7cqu1xkokjzkPDQhgfAJnT7DU29uA2CTCesZHi7KUJMJSeXSxhJ3CK7zFAw9yJhEGABy1KG99Ph8kVHtrYGJpN",
  "key20": "4WQ3PXWLXBm8ZTNf8djd6VR4FT8SnwNggEEDCc3GTLVnrp3CYLWP5ZtLJjyih9Rsg5gyzowA9X5NF6wjM9gsPhG7",
  "key21": "FGqptowDqVUpongpVHJ9twv6UwC3wGgYeKDFj4vjT7e7hdPeae6BJTNXXJ7B51HTFi7BZszD68phxTuyiHPbfiD",
  "key22": "3orvAssjDqEqrASp6rZCZR18VKFKHGPZAWCcyZq8ctChumYWVXfTDYs4UJxyvk5AY7BW5vbWNeVgEfFfoeiTFNL8",
  "key23": "5rCJwrhxeddudox4oRK7movwY6RHRydVveGtDQnh3hBPfaB9y8Pfh5jzYCHyzy5jkTY2dDDRbvEcbhZ4hrAwySxE",
  "key24": "3syW18yVhDnkaskDvTLuAgkotBq5xZ2a37Db6DwMR4wcE6judwZAiaDLigTyCvVu7fFuCVnNrByTcTSpbTBEjVaW"
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
