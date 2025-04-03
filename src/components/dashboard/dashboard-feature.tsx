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
    "sittEKwK2odUrNGsLgN9VSQxLnegGL21pRYyWp6psQSQLcy9RQLTPDM2CPRHh6Y3f8dQ9XEBCzr8jJ6JrahCTZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GwqdrZuftDxzMrHAy4ruPwo3WjHVRw5UJhM9g25t32HWSdpvhLm4XyBYE9PF9omsZyQbUZ4y5TkMxRzZfbQcm2Z",
  "key1": "5DidLLB6RWaTVqVDSVKL22BZFETHQPpYuhB9Lhx7bbodo2LaQFpHi26C1SmebeZxnZ7RNvCaTV22LVaSYGkvjKLT",
  "key2": "4RuWsDqpgmtEVyBhApnMnvVr7gRtFzC3vm4zt6MGzRTJzh9chQjn66srJ6sLNmDtoQT7Aeqgp2dekx3b4RTcSyNK",
  "key3": "5QS49cjb9mpuAopgg1fgAWwnsNemGo9yfAXQLMujypCHx7KRQwAnE6sUj8ZLoNKVMdkZ5h3J6y4sBqzkXwJxN3NH",
  "key4": "5hhEauuXkxb4FQwhEKhAGYRgFvYTwoj5ZRAv5hDzkN2hbwi2Dhr8VcEak5GvVZkBqJt1nG3Z6pyUbzVEsMBUoLkS",
  "key5": "2FHgVJEhtgWhm4jomVaJxEvkGUW1eC6XutRPiBLfsXe7LYDc46371Tg4nnJHZnLbSUEAbcF56LiTfXjnQwnspq93",
  "key6": "gqiFVTbpkpQyhmUyDG1AVHXToWcMotia2gxdBLWptths5P22ZaS778yZyhe5p9nG3Hq2GK45jTvJWMxUvkdP5Bb",
  "key7": "3a8f8TqkLKhrw9M27XKWSCjUrPfAyRAmX5wa7BzhhZmYC3nz2Zn9Yf3Gszv2ziR8w3HqY9GZUbTMoxobB9fXq3Da",
  "key8": "3N2B1ZhE5Anf7DrUtNeGJ78zc9wyDrEAi78XcG98CFBUbTxsqnrZ2NF6Zw7uWXUnGGYmbUxi6PU6cpjxaySuwsoK",
  "key9": "4QhJn4HjU74bpPezLyY7D8B9K1eNSPFmjrSVckNMMPXZsqsM2ay4EoCc8nAEvjvZvUoTyQ8EhTBui7KByedsvxMn",
  "key10": "4uxELMLcYXW8cRv2RfB9iyeDqt76gYV7BCMDmKVCE7pWvXcvNPDyrUicrDZ6iih5Zanr8DPdmXcanJiW8223Gse5",
  "key11": "qUJMDbjHmotRcUELQbYUw2kCQSLEaE9LigvmbxsnmrNVMShABcTLiDEtxnBo88vHsdj6vKAJ2PqcxjaebLRTUAu",
  "key12": "5xj7irnKdYoVwGXB1X7Hgvoc7knTSbDSTBg2M4Urd5zzPxrvhXWKNguA3rvmXCK8pmPLduqgBzNp8M7uHBWRH6Yf",
  "key13": "2Ag6x5teJPUte9xcUXuKxt2jYudfEqjc6y15LZJR5VGqzRdM1SFidmzp34sinxsGgu4RbAiz6SoedAHagJebFW7u",
  "key14": "j66prqhraGqUXUKdAESNeevTD9FzaibfGbRUmEPhCLnnXjx51p8yiVPFDwMftmyUseJAEfdRuCXDjJobFizTtz9",
  "key15": "5pmUaptMpXwFvc4RgAUdYv6RGbkq1i1sEWKgM8EFprfxTV3FSYLNmgWvVMyLS9oFT4HaeUNPVZvz8WHJbvarHRxG",
  "key16": "2cgrXVigwC1vamDKK15gJCY6PsaWhMB1gngLrNdV1eVqayaCgjg6bgBE31VgUgHanVf8Z6iJsxwCxG1pjVqpC9he",
  "key17": "5G8VU2EgWuPfxFzRQyJjL8Wx8URVLtuARtSbTRvjszJ6iFVuemhBAqiQepwSJd8Z1ZaB9sGuf7ptDJAyeBVq18yT",
  "key18": "5A5zWYxWy9TYCrqp21Y9SAtkEPaqZr8gLPZYhdB5ssWQkodazVqvfGWsqvEsJSpyRVsrgZ5AwjRQRcnmRMUuuck",
  "key19": "3XV1SbLdYNEQ7ZEgpxF8LB7Jx6rRbQh8Nny9KR9sGKywiJAgnxVPd3wsNU4gEp5CeFofnCHL8FvXL4hcNz1E8c8B",
  "key20": "33DDviGomKxEZVxFFwwcayTNNHPJAGCett9rAFsH58QSAkVD8v2ZfCXDBGvreHKqYdJbifQmezeXGMqRJU2N6r8z",
  "key21": "2zBup5YLC3FiXEmWYwhd4y4EvPDzhy9nAnCtpBW3x7XUjT2nMhsaiNsBQUwtsacFbzkqsZVcznLSGpYivAoxnWn1",
  "key22": "5dSGmWbMUeADtUPG3wX5rSRWRv8J5MG1Xa4kQangaa2sLNgiBLj41tmY9ZMGrqJfZDszx25Noi2giyD1tn6VXDCp",
  "key23": "4YsYocMRxLMi8e9HUp4BoCARBR5pkjUT2GYKMcyRruBdpj7cQHZfyvLo2Q7SFhq94BjzFSBL7bneNNm2xwqb9hHN",
  "key24": "dni932kADBbvvxP8QohpNXYTcfUkdYVza8QKwpB8dfw3YxoHbbnDVFdH7nJTroXiS6pcBtoDtTdsUT9V5hhgfHV",
  "key25": "5NQkVomLNthhcvtaRhcWM7cL6MysQnzAQZwLCukHVRjvETA2qCMyj1bJRAz7QmSagUSH1hhkKwKH3N7MqKY58Azf",
  "key26": "3zJ6YCC1hJH776PkbjazwzeMCP6PLQuqqaytuTHf5tUgkAGhxJmuwGpcpdRWc6UvhWTim2c3RdzEtSWuJLxsEkpV",
  "key27": "3FJk8R1G9qtc67fLv5sCvhFZngiBdfs6EZxh2s7fch4rcM1MF7smK7TDpedLUYwxwDxzxDXk8ieogwUsq83uzEpR",
  "key28": "2du64euXFyDwdrPqrRfWmNCN5qGPu7d4bVGXfeKbwEjFxJjHbHfMDq9nKSC8R6Sdrop1qdsafsyDdTppdBM3QiH5",
  "key29": "5MtmHNXrrMfMpNvVwhGv9Bkb1ppagnTWqn19wQmdyw39Kvyzb1r99v2FgwbGe3y3QG5dQxoQTr6WPPf9hR5g7gmm",
  "key30": "3D4GLapTLkzNhrTwQvtcXZMiDv4Fgyt5tWBN8oqaDo6o9Jo85CRL9ton6xyf2MoZwAJ6wt2K75aeD78bKSNV4ucZ",
  "key31": "2VY398nZSVTeXpXUgEFz8TEhV4ZtgSChszp58tEUk3RtTDRPXLZ4Twoi8kg2jdaNywjz18nCYMaLAnGJ4vWt4h6v",
  "key32": "5B9onJgLxyqroTwvAwZivAL15fMt9Z69bF9Y9xzLKD3F2ZSrSLM6gkmR3XdUN5PsyXJTYG6EuuUToMZvKX5cGLpz",
  "key33": "3UGzHksm9om5QBXmX61WfJN7BYAtyjmeDfGk7G11j1UV3Wr5YyTBVT6BJKcB7av6nxVWDXahha1dae97pgFfYNyd",
  "key34": "27d1L6jixc7BSPDRpXuuXe2rSXQeL8VUpV7adQpMw68fNC6XW5Li1XWuYjhJdwGza7mJhxhdMmNaECmAsud93ZE5",
  "key35": "3PA4bRayeg4Z6bV8Q3Gre4Sk8HDSgv84xcLa7PvNXUtRgDGhArqoVJinCXqX9mKnofZZMVChdVRuRaqtkyhGgVQN",
  "key36": "2E7e7kJ5Lf5SEkwms7ENdzYnEkVAatsYogt64fezv8pGxNXD82hZqf2QmGCxiuTiXoRvXu4QSeKL1ihCQcexoPfa",
  "key37": "5LfX26X3dD9Mt3otJDUb2eHMkeCqLWryohe398QVkr3UXZMJcvAjr7gypMhuG6ekFCA1mk2ycyxdG7tenTntZu1C",
  "key38": "28gUe9dDUQxQvXB1EhukNC6rV2qiAXFVXQSAPFoMHAWCrrEiN7W3tLAhYzgRvLt7mrSPAVJjqPMi6Ui3Gk5mtUwS",
  "key39": "FA75mBJUjjXMEcrgbXiv2SNmpEiFnaASFkiPzMP9XYeN34eWV6BvuqPYuiFtHudAKNGypbjiugBtjmYPTUa4Zdm",
  "key40": "46wDXvf5pHKH1GhQYVA9G71CJUiCZFvBCTsHJHgvnr2czUuRficSJoBwknhFjGupPWv6EHHe4Jvs1pAAn4baGny6",
  "key41": "4td7HQVj6pvqkbhESpK7jiKBF1qApY9SUcNwEZSwVnowHYGp3zNK1P4gybLKeNqMZ4ajz9TMsYPXqLmHFmyjRvUK"
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
