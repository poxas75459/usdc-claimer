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
    "pYg8FbQVaxKXScSU3yudSp9RsHsCRJndGDWrqZtTvXeCBgBtDKcLpDZTt2cUsBLC2iQDLr9nSJAw4usQdf8aE7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JS1X8idXe4LcWUFyDLkNsZ3CkaW2sXdXKxQyNAf18SgSJRxJHgkhkPkA8MqT4BUXFhbw41nfMnMFJnZEpr77nRy",
  "key1": "VVe6GWGHsPgPpggD7NsjQeDnLgd3oMRw8LZt1j4gPqojr5XGyY4r4ouPao6aCqLSuSqSwYRNNVJ8SHgVSBD7WJj",
  "key2": "ucdKGfstgFynGc9UUG4KpbMZJzuxqxXTKUwuPVg7PJUoMznPwUruS9Lk5BQwNgo9AKyCBF41up26bTLfWEBedjv",
  "key3": "GC77wzVvJiu5wkaYYXDEwbrXXaMRyAkriCUfG6aXeZB7dL3DsvWQbvmbeowfKJwdC4a3NY5vAS2dShwN5ZLdgNZ",
  "key4": "3uVos6Bztikgv5ALpJC8oD7FwUzCgxfsdbPRaa1Rx6eqFwikZcfLKC6AMr6xvZVHqRL3ZwSM8kcuNm44rRSymgsG",
  "key5": "4pmPbEP6HpPUZqTVq8QV1X8hGsJBub9hH98z49Q4XwHcaX3dTAwLzd1mTQ8Z1yfr4cB349re2X2fhYa82jT28SEh",
  "key6": "63nZEcxK1hgpQzPJLijZD3zWDnKPERJk1K7akCs4SN9GngfMKq25STYZDEon1j89kHAagk6QxwirmJXzHg3Gz9x6",
  "key7": "4QYcUaQ3XktxPNW6KHHnAyjbHdh59UBD5FENRDUVKh4Rn8iQSm5am8JwtE5ctArPTwLVjKGFh8b9dn4k6nPLDQYP",
  "key8": "2qZwyJ3tTNKi42MEJdDMVCe5nciEJpzqwBSwcNJRGmTeTiRz9EBZQU8uRkySkFxbiUPNEPXs9rYfc9ZxPx8gPr1b",
  "key9": "2Xaf9Lr9qj3gtpUAwp9Y3sMcXBGYLtUAm9PSFnEjSHTNdbS1yWFBu1bR1ddVvSCR8KU52yisJNFDxxLRfTZ5Nace",
  "key10": "4AFeWKFChwGetrMLzy4NsoSUXWmJA2jZY6Pvc3vSKpLDjiMSiZw5jSesE4igVvdBD35Rj1SStxBRwS6hkFitVKGh",
  "key11": "4QSH61LKJ7sqiacswYYyGgbHFv1AQP338yT3YgyF6mUvmC3ThmzUrBXK2h3Y9iLZQ88ioV3rw86oHMzLn5DnwYPT",
  "key12": "3KcCuPEz7NRfb6GiPcwdEbZpDtBVN81eYx9hCEJqQP5vM8VjJ7vuCpa7DNTnncMEs7m9Qp6azEfNCUVKKDa3iF9C",
  "key13": "5mUnZ8umBKPR2Bzwhc9Hkk1ubxUtSgBNR8vivpyx6dcoeot9YFm44ZHXgWDxXbwykrz6Wb1oNygSRUBTTbNYVptv",
  "key14": "67qLPo57nEVShezutPRYQ7qatYHtcR14X9JiVjdQNQZY52g2o8KVn4XF4GHu66Ce2Zd5QYFcvmZhgW59q8boRBev",
  "key15": "4A9fKttLLnbFhgapvCfuUEF6Fxq366mFi3GeiFSoPUfMYpUdCT98m9PF6EiRckKLN1WxgRTSirvMLx1TaSmvmN9X",
  "key16": "48E785UM5MYU4vvQ9TXefLmgAG8ZzVeCMF8Gztq5C6UNmCUiRebJ4TWZPoFKaA7MbL8RH38QPdNqSUm5G8Ek52bJ",
  "key17": "4yEAtZSZptquQeHk4fFtrVQvLT44SjyWxPuNwvp2dV7cDv2tcDQoG33W6UsGq9xgBkNAxq9XWNLRiCbHWvsFXTfq",
  "key18": "5m3cvjBGLRew2hguRg4Wt5BVTfVq6ntCxdCGTDiMudYhZh2TqK1y7G6QFgog5CXZ9PGCCiDW5TSTAvXi8ZgMSiQA",
  "key19": "2iv7QU8b32zaq17gnnLCHRBCYyoRYUhfmzwMarcn29U9Y4wr9QkJh981bx3Jx7mH1vosDcRMG8QNv6xeGvieC67f",
  "key20": "E64Duc9YWCxsUqKLa2yUhKREYLKJ3TUpKz55zbwdLZZn2BWQ6VLtgWG33pmQ6WV2oXiw1Q6pa21o1gqwcd9uRCA",
  "key21": "53Ms6w8kF1U4FYf1398WJs1DKTj2rsuWGiCRzPiRQMSNAx3MwCdw9TS382Q4GjDYqaLbNoVimCNFWaujqs2fwShM",
  "key22": "3jPVcXoLCofmsHXPybB6gXTPV8b1oiAFMdD756FwoDdinWYgXHg2X7hnuaRuPLfCJrTEE7n7qVsHDh89EnoKoCUS",
  "key23": "5rPL4tSGve3gcrkWZoE3hJ4bxgwVvepWqAf3um4TeWHLKmH2dRXCjs3srMCjb66HMdAAVt4urQadkqCVt4nt4bs3",
  "key24": "47uJuyZDd61Wawe3wu6CL1SpSnH1eimtsA1m2WeF6tUiheyYhcGLCGM4PCL3d2UGydwz8GXWHg3P5hQBXFoJmDjH",
  "key25": "1qisB5pJV1UvPuTQvByRFeCf7fLGckSuASTvjgvjHhe4g793h4Fi3CPSbia4wyY4otvyPyrhs9dxA8XYNVZztRx",
  "key26": "21S8htbiVZxgH8wgEVBRpnhexsgP3usEAeRvNoB7dYp627hXYXr8ZLwo9eMvrWafC56g4d4s18Fw8tF2ENkDE1Uf",
  "key27": "65acenAPoUMxpW7dmBQ8rx7sh8No3riqnh2aGxLGKec3rJEdcBVdp8CouhXZ1hk8171evakgSQrzHTdX9URjDPWM",
  "key28": "5gWUCi6Z1imj8zQQUy8Qmc1qxNEJmjcza9ZVCqLq3a3n4XATUVHdWVfEC28GYTqXpdzTYUk8ZyEVvNxx4PPnchsD",
  "key29": "zNHpCKdsNrsfbjHQCJ2hq13W6sUXRckgTTYdBjYzTim5zeaEFUEshQKdyrAojkTmYXXJXQrZNiAiYgBPZ6svQ3D",
  "key30": "f6i758wkntnZfQ2YMj5hbfR4xVo9bfkwyGas4NHisSsUUhvtiVDb27jjD1Pns416WXGjA7TQ6A7Hssoq1xQo4sP",
  "key31": "5V1WzEzZ8KWMqB9d5SWhnYyMiQAS3JJy7V2oqXQFksqKFTvvszevX87RaPB1c7VsF44EvTEnBpmb99zTkGaAZSsa",
  "key32": "5TrmgefCPeLGUFtQ7nXWuswkRWUKj1uWEC4VZmz1eXj2yXMHRamRTkz5sEuUJ6sL7fiP7pwmnkvVQLyqqW4SDuYm"
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
