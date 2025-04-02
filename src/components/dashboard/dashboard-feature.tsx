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
    "2qZxV4dQQFp4gYVqs3NZQHVenHt6KtJpdxFVWDZea4R1KE9eS7wgFDCWUHGzxnhSy9oimeuNhqYV5c7p94Fs8vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CjmnUEdf54sT81AceATGvziKpYvA1392s58UHq461Eo7KX52mRmeFHX8f7EcuTHBguaffZnNTKiyomgWvr5WdLh",
  "key1": "hwMWvknRxmmMg7tmnPvX62PnYKxdpUeTBVGWTiYoy2LAzUJzBoe3YKL1chg2bBRrkgtcgESoNXkkFPpPcFFPLLq",
  "key2": "5kXazBMWWPHDVh4EzSSm5qDHngrEiGEUEWJgJGCkcUSvV16UFaCT1kFrGAstyvCwoSMePKbF8z3B3SKwydNrBakK",
  "key3": "4mD6mPJHNLh3pZvy7rpJbbRVeLQ5zyiCkAsDm17q1htVFqygZkUjNQznjA5YAqSHuPmB13wuQbphytqwb67FCpLj",
  "key4": "5MMznmk2bXwhuRfwcn9Jcg1gvyTXMZuHxEYTEqBpKuuB9N2Q1XidV2rqdUeXKzBrRbBiAqee2HBcw5YfkiWM2ySm",
  "key5": "5WbzkZGPnvJk9k1XyTnu3CNBE94xZsXhiKQSzgzNwysuZ9jJGU9J8ThMVa8arXsPeai7qZ28VtT8WEyufcBdKeez",
  "key6": "pNc5cmpT9WLyKGfcmwjHX4HhZbsDXgkue4VqzKUQ1SNrjAii6s3JuD6LqmGYp4YA79f6kSpcD6siVXEmbwLWPgU",
  "key7": "KyQoMYfxg9FNeCHSXVAh8TNHw7BMMwSLMRJtLrX7swcSoMwJkhew7F7ZAfGLKeNjY1rVSorJxyEr6exGet1XjLX",
  "key8": "3TAcd6ojyPXALpjsY7p5Lyg2AsiDUspPscg9StPDfGHZuw34UXPBiLcjuE6Xe64XUjmdhJQcWt5qsuDEGY8sAYQp",
  "key9": "QRXMxCKT632umRszUwyTVQY2jBdkWnedaLcbrjwCiTAQZVvJwZCd9YiS1wLAhGkSFUdK5PxP5xzzD3Vj362DVyB",
  "key10": "5bjQ6mHxDwnUGvyZoUDXYmf8Xa6AH82zyqLFoyVwQvVMrjQPUVVuV6V1aHQzpbddFKyZHnjvezAqaHAXmdFULG3o",
  "key11": "3enXG9hEaRKvV3wTs44DfJ6yi5QXS9RDMbWqX6XoZtk7zBVx2wS3Mi8yWEFfCaLhMBXXaffMzeFVoe6hqRTUdjy",
  "key12": "4j2X5XVSfL374d5wR6Zou63qRmFMxr5XnWNyMtzGEsP2cuZY8K6bRCwpk6itiLAJePonB7AVa2vXpowQDXGyv7iS",
  "key13": "3KNVm1cf2E1drByYnoL1JbQFfUCytKvMtRSTBquDG4fUXh4c8iD6scXF2AmpimyPfLaN2PeS2vRWXkLzzvbT7tyj",
  "key14": "3EPpn56UvgAVghvpCuuJpzp8J7czBqK5zgxKAttQJebpy14hHNTw17BWsVhzHSaRqd1ZzmxgnTwkECDae5DGuwDU",
  "key15": "U1Hx4wiBg261pj8YcgYMDvUSFcoSySzhMcx5bRuUEQ3fWCcCBSoQ2J8sLvzHrVvBPbKeA7tB42c5Yh3WtmkeBy5",
  "key16": "2QgmKNtGro9XTUAE1Zj9YaDn8MHWAa2sopDbKis1MhzsLoqnvyscE8toeiJJFPEKZrbjSwXa37ecaazstmqRubC3",
  "key17": "65ktKC2swDwz1quEbVZ57ncXsX3EgAXRZ81cPmtiijG3wDiHuJqUfY6PziXvWtWr1iudvTNfRfrgbjESuZUbzRvu",
  "key18": "3md9nWna1Tw1yN6y6xF54egweE4Jkuf1PMMxtbAYvzk8y7PGaGJChujxkaYDVMxDttFxQgyN3vHk7Vrsic8Ei4mH",
  "key19": "17J3av6XZ3Eh8fLFV9rqCEEMDcGMFDiZ3HBQXfpuYS9tRXTDu5KJ5RWNsZCEgjo3CeF373MrQUyt1YGKcWQ2cbQ",
  "key20": "314mjxz9LB9xUiuTkvvTGdyxiSZxT3PdiiLGp2pDnkVjHwoYza6TNya2PSmDXuSAh18dNUv87NkDuBU6qBFXaLM8",
  "key21": "34b9v2gKe9dJy7ziv8uSj7AHQRdpjqck2imjq6FBqAhD9aGSFHMq9nyTHyStuXEFhLChPY1hGn8tNnXsCgQq36My",
  "key22": "4e8XYbTStmT87WMW8Jxvg8Fncngghhop3wfpr2J2CBiSyTnkj4c8WqT2g6Bb5oghMb5TbdrCwrdRdrRVFN1p6y6f",
  "key23": "3GRejoDpr1n5cyxVDgyxswChADgMvc5ts7EiGDrWPY94d65enrPQXHvTidL8dafMUxkVxFMNYNjzz7Geqn2VVKFJ",
  "key24": "2fygmswbt4BF86Xuv25NyJ9ayDXJgePYnMWexc8GmY5UKPD2ML7yHHdTff5AUCH9VP4CBBMUyAYWrYxtKy1s1nDc",
  "key25": "48PZ7hvw7tdt6MZJnbCF6PCFz6sx921RHbLoqu9EDQb7cawRzYUXwZavtVZn41sfrmbN76bMZMZ56pFryEHZTcUz",
  "key26": "jbKmAFy2FM63aTqmT5BKP92A9iVEi8GcaCe79ejvpXFeasreJWsmxHEzw14TjCRtwLqBw4TSK2eNZqFhqpBMKo1",
  "key27": "54Hu2CXwHxsh95BbQqkfecUHKavMyWHC1GLN5BiTfmnmHYvcb9mhQWxhsoV8kL2kFxbMPjyDE9jQ1aWyHGt9TXiR",
  "key28": "4ad3h7J4txWCBDaJW2n3QCoJzKDdfnNSgaVvadSRQDxfSbaRgakFZruU2VjwHggWaH9Ym1AWyN5HyQCHjFwgSWVe",
  "key29": "2p84EET7z4SxP4mRr7NXR4csh17YGibt3t9sVXRmxbARZBQaV6D68UdYeL11XhKoFWaMptUwczsKu8unRY1HvYyS",
  "key30": "31xzbLwLAUjkG44QxEuUV8LstTyFMZVFPCrzbevwtwRtPBv9meuCJ5sBCttyczWcHMnuAL18KRuG8JDhpJrUy83C",
  "key31": "4wGooCtpXD5s5eRGqud4XkMgcEe5vNA3w21TvwkUdBbTVou25FRQ36tSh2V68aTLBBsQV9UWD66tNLabxCXmtYPj",
  "key32": "GtrKAfgeSoSiF2YVJXhXGtazybDknatq9bjxn6UNbeY8uGq317dwaKcsJ8PZwuWLuxjUTWR7581SVMvW3AChvdz",
  "key33": "5gFHEgnFKWdxrAqLqrA9mkhbXAng2JJffFd64p8fa1oKXZEvCjSHTghTdvyKTAcjnB1fCUYkJbjn43Gr8Y7SRhmV",
  "key34": "32unxgGNuSDWqykff5oy9ePNHN3R22CLMKdwdrFwyzveJiyv7FiAgDsyc2Zc5qKdxN7rJjbTAQt49u7tHDFdvkWf",
  "key35": "2VgKsLT1tF8xYfgrNxUyRhHRjfjfVwTNK2rBcscXhJoWsDeJhWNWTf5Ju3w3cbpSVFKkCqTeJJjhi1LspjHbet6W",
  "key36": "59cJnHG6DYrx6shyDUJMQ4KJ9vNyywBfpaEJ7ETqoRFAPc4PRN5eCYZv23RGRdZkE93etFExnhPPGATq9kE6P66K"
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
