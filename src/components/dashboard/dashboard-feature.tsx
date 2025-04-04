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
    "4jDfjyox61XgGEhvYtF53r6RDgFmv3XKqvtshaRwnoZTmU4RfPWFjgMnP7gpRzvYaCr6GFHYppzQJiMQyapNi8q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ysTfsQYUAdqxLbh1nHgaGLqyDX4uWwHkj8BK8UuDXpU2FB1vvM7FNY1GfJoFjGHKZtTis1b19ucSmZPJ815aUNW",
  "key1": "4WwuJGknPc1qyZC4r2ajXG25Ln6dZqN2xfFFgmEnzBe6wc1TfDoZs7p21vmEZ5BKXPQnYt9nM8dHsH2wyG5yVecn",
  "key2": "24dVRs4iXZEjX5i6pHQXtoKztge3BVcacWS3B4EyLuzHDfdS9mWPHQ8FxSvTFzzyL3rc8WxURSKrYChZ9ZVgx3km",
  "key3": "5wVVSavHtZnuVCVJUbTmUWjCWB73DkQBoqn6Y3bSssrpGRqvFvwg2gT9KxeeJUFKBxjfaC2AmQD2jxn4RJEGF3um",
  "key4": "5Rs84RkZRCxFvYCxZ38GVxmeBhTeM2RwVgM3QbKFncWD29ZV8UNCdn7NADGQGEUXQr2p6RNCPw2rysRnE2FigLaq",
  "key5": "28E2E6qticGAV61KvDH2QdEPfGHwEu2Af6XTtrbfvKFV4o7DWbPT9LFeW3B333eAid1pHaTPdSPVHLRRTXzQmGPY",
  "key6": "21GDwfwbcPCiHY1FzbuWdmKpTBn76MxFned8i79viCmvuS5Gn1Vb6Zd18aojdFHYYQ9qKG1M1yT6gtt3gZG5vKsS",
  "key7": "pyHkNtN2gpjqzdHKye6SmwCyzxdtbY8o6swaod1CGMd81ZUZHNDiZ7HKK9Myo5TxuMmehsBpfpP4fCpsZ5xCTgv",
  "key8": "2pBhDJVHQRDhoCYWdWgaZktWyYAdZ3AN3e6h4jcPEoYiVNd1vCdjUtCAfU5YFsDJvzQkkgyBwecsgF2yRd7iSpJb",
  "key9": "46pAMzc1dnGV2f6V5VKUuLQDjZG8PvfxWUc2BPBuAPYCoE6zEQbfa3GgokaVoieyQeHZTkfr2uipX2Gi8LfX8vc9",
  "key10": "9qEL2YxSDYbFnb3SfE8EU2FJv3yt79dpaYnn7ssfzPfssMnHaHUZXwN4VpPghBbxrnMz21MvvnVUkWWuWSP8Nih",
  "key11": "9NXq5mZyWjFk42KhMm7DRboaU3Z5L3esdYiKkmsWHMm3TB2eJoKXYFm5Kb3ahpQJY9yzK9tgHLARJv1UAMvLbBX",
  "key12": "4ABbwvDkr7LjkZbe89a3tJhkgJcXX9GJN4NxSfA3rUqBWLAbp5D1zEWhJe3JWfNe6Uv1Du4f1C4P2VNeyqqYgxCd",
  "key13": "5LaYeqE1WR3Hrd1hnwDcc7TEThiitAk9kvczpkYvtxuycC9t65ydUYH7nvfJ8C7hJVWDaMgZS5yrYx69W5cpRfYt",
  "key14": "969qQwcpG8p6zUJbVvvFDqFf8BMwYu6QSDjk96HKB6vYiZzZu7zNagBg9vdzcMjSiTv3enFKyYLD5HZAxH7sRx6",
  "key15": "3kHC5tJVYKg53BS612jKYvMjHc6AyA4S8oiLrfGtWLfuxaemGACpPNWJ7vk9R7q4F1zrKRRtBGHsoh9DmSZjrb9u",
  "key16": "4EqBWgBF669sgxSpFpmjmZsnvAUVh7jWUnUg6oRqEv7d3E5rvjmhZg1vJ5Z8dBPaMGDnGc9qyEfnmZWNrDzAVjSp",
  "key17": "65RcAVkZaWqkGPjCTKGEFE3BAjssZsiTSpNkyqLqwsZnVFNiQRSgAUviyPsyAxf3RZEFhvFTwMbMhyJumYVASrgw",
  "key18": "2GQnpFWveBddo4ujWNtnthVDiiemksCfQgj9TsfZB8SUGD7H4v1CRLBydFkoEceMcFdrbJpdnvFpqfqjcvB7rRrx",
  "key19": "3bLE3CovwqwAVaRTd4Lv5b4zD1r1eFAhbQUbjwvjAJCfQb9A963JVQB9w5fPHarBQ5y22BsXmH9o6nmbJmooYu3q",
  "key20": "5EkAn7HF7BEKA9uTzAo4mD1MCL9ND93d2SzbLbo3HGJQ18rnczwUEDi1Ew1XvF4bWWvXXcu9cSWDPb4wE46aL7mH",
  "key21": "5aLUmFAdZcBnsWnd1q3ZoviR8K3VhfCwZU5aieSmyFuJNcN2tmYDXBJmLFyb28V1F9qh2i5rEBStdvYES5nHBRB2",
  "key22": "54ECL66tV1rdE2SomZ6LFWaXgskdAQENZc88ZknxHBYbypptiKbuHTJX5oehKumwcdLomvyPeD8q7kyZvePMXqGG",
  "key23": "5oYtjU16DL4wU4Avvm9aD5ssP43yah4rLWnSmw3RBxAyRQ7xY3LEyjQdHDSNfHDQqwmimFKzUUyZmVc3QUAkwFR1",
  "key24": "25hQ7XuYLPPuR3BhLDRbVBHSEYeJQf1cRVsSjXdTcPqp5x48rwiWh927aen873Qw25JNxFjFmkv4usxC8oqQmuGW",
  "key25": "5dZZXb2Rgbwcrh9MRVhx7MjFVbsJRtJvsDsreoUBDXEr8KkUpZojrm5iNKKvPc98bt4N6sTsifimW4khmdg7PqAH",
  "key26": "36Zqxgd9Gb2QpAPvXKPBVM2bipvvrMAvPbn6WDs4QEPw9zd6P8AJ9tMBSjQSjD5ZCuvBdFoyqob8kwukmTKKawRp",
  "key27": "2WGMkP7BGh5gMGmUa5YnfXdsoYbqjeprLUns38J1cjtLhAJVZ5oH5A4ZGKvsS6urUJvdAE4CWQ7TnGTS5YkdpeQE"
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
