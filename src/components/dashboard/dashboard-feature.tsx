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
    "5VLo2JgMPqgRJ1b7iQr2irsmYWpYLajWwDR8Dk7UhFWhPw9NPAMCVPK7bKbX9DdGTu8BLNeyuPBTzEx1RBqLHY7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48f9ciJsCfs7qSevsXrMRz3EUVxmwAZv5DCA8pRGZKEaS9igXctuqLmN19xqShYeTGZ1uw5vvh2sSrqfsGoAmaCc",
  "key1": "2CyQ9gd4DBRgCq5whvGRp8Rm8TZuFg8oB7SkGF71dDHWDBy5vdMUdy5mS8sBs5gHiCsqby6nJhmEaZReszMy6WVw",
  "key2": "3tayP5E52Ct6fNjgGm3Gfn21NbRQ8BfGJdB9BesDMGt6KqS393375FiPbDmFfHTwmDS9nWCKdGELaSN3QD8L5RuH",
  "key3": "1nt6QJ1KQTReSGjxypUsUonLkKTooMYK8NBY9nq9XbX6GcL68mzk9QjxjAcPHyWoHG71m3dBz9ZKuri842c9vw4",
  "key4": "2vfMfmsnQ6L9BzVKv9GcvEG76s4z8wAs58r3KavDjswFkHnFvvCH8rVL1zoLit3CcspQnWHQy2aUnaKrN4DyJt9w",
  "key5": "2WV7CGexTnXx1WuS7N8hG99Xvh63nE8eFVkYxgAEiBRuT9KYdfnNYjLJQQa7szPrc1V2fXEyQkv2r8kePmes2XjD",
  "key6": "3Sveoajqmo3EdtwexLY2M61wYBuQBhkumukBLZPuBAqz9WcaDEZnzHRKhBsGEjA5Jow1sbRtmSs7EdfgRUPJocCK",
  "key7": "41X2K3chJ7XJ8okRix8EgwYQ8faDzpub7J69RrsXWK2wW36asHCnQ6E18iHx38mPeYxCuWCMVsr718ZwqQfByhmw",
  "key8": "3rJNpLfzMXwTygCuXBBTKMTbczNctKb8j2tM8FKoxP6iJcNn2zAYF9u7mJFPJkVCu1cYKDXMghs93s1Bfe2dov6b",
  "key9": "mUDErGiWKBHMQDtCCxLNA4SCJt9afz7kR4Tb21PGQa7B37jEzyXMRHQFJefSCAWdxNaKV9vLbvxKmhqEPirVEwJ",
  "key10": "2WdyF2q57VjyV9BDLpiFskt1oX3qgM9gXZa6sqEUPGqRS4FE51or9WWqxNVoTebTdaHR6iDFR7h5KWBWBjAknFdi",
  "key11": "DdJzQGHQA1Yp6RwCQgZSy3VKEirB1xPuDDbMPPpfer84qwuKsi7NNHLrEmuCyakxD6kvz6asjKAznG7no6AB5WG",
  "key12": "2NvFjNXPckxFExfnAEMFaCyQPanC2xxgypdy58HwrJ3deSP9hg3dvXm5mdrWE6Ku6ykbu9pwc84BNCNfsDyH4SSC",
  "key13": "8kxNAoNJWpZuesggMdPPCvZRMtpwam9pmR3ea1h2aKHh54w1essL8fDNioqvANwMRwZJ1BP5oj7qk8rqNmxCugb",
  "key14": "5RTJzpcS7Hq68s8mnfVPJQiqNEpjKNGiiuKgrmzxwJynQAgfsdW3pUorBXrnzBQen2N3hWt65WqUAp7toLhSTRmS",
  "key15": "52REigFacvb2DoLW84ahnXQa9oQxHFJbCE5sTaTqFfsTVYtFzsuhjTSZC6pQdHY1gGeBSkeDNSC1EK7GFsyZNSJk",
  "key16": "4XMCxH55FMmtkBWpabeoVSHc1u8Uk3KoNLPmXUyQAiFJhVi6QrRJFwiHSLPbPDshtgedwXbQECXiyv845UQckBVt",
  "key17": "2novu6fLbXe6TdNgXCZiaboKoxzaBRENQefPqRfLYQUv1wgYVFZqq5iwagGWAN6oWNnkuRni9HoXQnakwAwC6WZ2",
  "key18": "NYdkmNd4gWrhjot51zhjxdvGvZAsnKKvqYuNm3ysvHx8La1mZw8ebCSD7gu21Nh6WNNrDw1xqVXvtgxepdTvabJ",
  "key19": "5iGm7WgNGf1ecpVXwFmamVEr7dPH4H8FAqkdJMCDynv9yFBbJ4jsYtCvjiNLyDNGbeWno2scBLfeW5bMK9VXbJJg",
  "key20": "iq59sw62NLugQhhs6QZuM8TKb1ZhQLbBayn24zfyqcPEuES3WSysZMoJPAgMbYm7osBu6avdXPbs9WLwwcnNRgp",
  "key21": "43ApWh5ycwrAW6aPQwMieh3hWmk2Nk9Kv4azDPTTuvqKbvsRsWQE6XM3qcMmNJAAUpVp6PMeaSLb6SBJREvJy1yh",
  "key22": "4iQQLaDJhDUZREACuwRRtLGajgnSTj34wYcg51mEaKnGYbcuvScXgiSKW6iaPUXmGKMHtNGpoAS8qJefzCXFZjUE",
  "key23": "2tgbYq7yMmNpg1jKHo6DdQPqVpPa38uaT18LP2nd6iEt9R5xAfnQqSN7iTRMKUSdSYiNhXSjw7PXNNUD55AULHa1",
  "key24": "2toBZ7azEUSHuQ7qJpGM6Qz1wr72cd3DHqaVu26E2dRBRj8nKnngrDk4gCXnf1oMpzcUw7zcGo7hJxpJhLvznGgP",
  "key25": "2un3amcHo56kLxHe6HVP9UtfvfxUpDqaN7FL7y5kAAr8Jesyu497mRk8Vw65XTgdskazhPvoDG9w2eXoaZJeLE1G",
  "key26": "2vpmBYQEjxzkaaFLrjy1gpCvnEXmVNGd8PrnbixMjizgQfiU1jd2DmeAuf8C6oF37GuXmRjbpxCYoY8XjQS2dL5b",
  "key27": "bLVD1MVJFXZns5rPjJmHUJBBSKsVqJCuCeTNqsRXoDoh81zuGdSau53dd1s2ik4sNMNS5MRjby2YhdCAPwTRPCK"
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
