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
    "22WRxR85KLgGJVZaPdKrJhhfJbLKshmovqhksChduZuRB6tNyDFTpoVNCbmp5B5s7dev4p3N5Z6QdEDZgQ9axtnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ERXpNzHMqQoEmftFxRk8vmaT1N1FCq4gkqSAG6dHbuzLGALVLaddgZrcpdYUpv2Es3JoXYUkTLfiWThsUpnWeRr",
  "key1": "2idhwPg8qLiCfMV6A75sH9ad3e8m74LpATMfaTjK2T9JFevAb1YnuvabNDeNeutdsoyyfJcyLhiSnerwMfX7VeVK",
  "key2": "5vgiBxaLB4naQWNxxSmkQ2KbE8KFgGWJycFLhSQr18eNh785phCBKj4s6RHUgZPRc5MjSXaiz4Hk9JmC5btDah94",
  "key3": "3n15TmMyLMeykTtQmviZKdyLqErWDVuitjpJt3KPKjuZd9NSvnMFctsAD8GMCc8PtCySBMbHDpdpFeeb2aax8CAC",
  "key4": "3hsBy9ZEMJfVyqZ1h7ySMsULkVoqjezHJaA1GQPaEMJcdDtAHZKGHUEh6JGKpdMuoVga2Aa2XLEkaijZeCuYYKf4",
  "key5": "zWQ6cCHnWyU4DDqqaQh7q14hfntNXktSSsm585Y1SR5KkhZfcDnp28xJc5d6oW4r8tvcSomVixVfjyS5BBXeoN7",
  "key6": "3BM38iWc3EF559NSDuRry7TUZtzZy52STAZF2szR1VEEkyGHv7d4CpczJxX2roVQA1V9WZ4FdKir8M3qTveWU7YL",
  "key7": "3QgVoyqLjb9mbf5BK95fXUnFkSvAbo6yUw6myKSUsDxd6Z7VHxfDTLnhs421tfLgxgoSdBxCrtK1ECVHvrazUgwZ",
  "key8": "4byGYZFYaWJ6GACfqCW3JRtHVbG1t1Tgxdn2uzbWzyFUNLhG1ZHPzXraSgh18FjdKWZtsPeiVUsPTVAyZFBmkNWy",
  "key9": "3BMN9JHxJ2LsZsueovv99wZmQy1XaPhTG8vFHTCSxFXq2wCTFrKXM2f48MURGN9rfWrcPnudWQMaNs4VBT7QU1af",
  "key10": "Aoq4kvsWLRYzYcAadVHc61iXWA2uR3BjbVkGEDiJan7yYXrJFwDcf2w3D6npjGECicaai5KCVHxCFfLgVFkhsCu",
  "key11": "5Z2N2ZmxaegFqW1qHsRRRL4JcqEXXeK2onp2FGSxcpkVhqh9xqZYrjKM7bnoz9KxaqSr4LYHQgB7H6pi1VJBkpuo",
  "key12": "4qTrPUECLrsaH5N9wzWpMWi4cMapAn5riDrrAgoK1CNBNXUxxhunvLTyPzjSagFnNFC2qGFj41wUN29cXN5Rd65g",
  "key13": "3tCHNSCcfzXveDXG2jqBCp5M7BJbeiyjx5zGf4QyBnmaaYsFf2qVGY47Xga56wT4NLHPFtUCw9bwLMzkuGQuQe6n",
  "key14": "5R6qYjqvQhrgiGkkzfutv7cXftwYCUHKerPEDLuunikRkCNtCDNEUeUNvaYEK8of4SMY5SAV7nfVDYTkLkkZ7yVf",
  "key15": "Hb6C5B1C8XxCcn1GcVEfDWaTpFEh6zT147zC98rpKFwAkQbdfsiSRfq1o4yxjaHVm8eRZCExA8jMUbhzdW92N67",
  "key16": "2ktu2qxEe7bFAXRZ8GiN7J494aHzvezF5eaWdZZM4XDWpNvx5ySCbXQyZ15BBxDGvgDdJMhBZYsC8QdNimHoFLSr",
  "key17": "2ChPEx8RUwf3nCszSRfHyt9rYYN1A3oGj829DftL7sPpEGg8h7T32dFFKCuL7rZGUriHLx4gVqEYKXTMHpXKH3RS",
  "key18": "2958ndBwiPpgSQmsYpBSWmfokGUA6faraRmh96GNjmEZgY2ZD2PSrSkFsD9v2jtKBZ8yZj2c7HCHhfaDV5Cmgo4D",
  "key19": "5wC9qqaqSVnwuiJP8PaSrLJNxCTLLNEScAD1yB3XKFquTthaCNLLBLQ6YxTkwyDAwCeqXbz3vVji4421N74RtfFV",
  "key20": "2y4VebwYLga8os1soycoxaRMLprNUP1pT5JoVD3wie7Gf6yhekFtgAPMaZxkHtps1VkNb2QUgz6RpngayDkKgPtQ",
  "key21": "5LDs1ArFiDUkNCNNtjMwvrEbRwBASejaJYiFppiwNZqEUa1goV8J7B1xEX8DboAX8Kbnj6DWxsiqdDHPA2CEshGT",
  "key22": "3sR9Aw7AN9Dmk63JjhoNu5qYL4HneNLEiRcnuLrxAfjfdELB1hzeh5ShC7S8g884oigKCtuwkQGy9jwnFeT8uzQs",
  "key23": "4uhyCKMCudZ5nHp63PLNj4hfUBHJovJ4bf13KAwLXUAZYD7qMpwhhdH2aLdQL1EAh5Kjfk4drSZ26uMMDLXPhEPu",
  "key24": "5DcSbE6AcaqtLUXRjk7rQcecEa7wEtf8UuXoNPLA1vzvmoKP6BpBZhxyv2z3nBD8fa4cFAmUtGCcNFQVVsGN9QSc",
  "key25": "DKAqFJDtzzCkpM6ns9KgBPFdTaEDYkai4hghpDfTSjrSPdsqkRysMMhY1U2rGebfvHtkGagSWNFwDobW9XBRQQ2",
  "key26": "64nySewfeaXYq8Vuk1SmjAi9NoTjMPcS5fVnLVS82id3xTgJiEacqyWt7g94BXxBRpKwrxMZGwuDm4NARi48tEHY",
  "key27": "3vBwd3VmkSpzBQfw7T6UwU3ojVSHvhwc5hX1DET4CVghWX6u3ySjyYgoVgcPAMY9j9AdAYSjgQufvR5KcQgE4hMf",
  "key28": "se9f1st9XqCPhQei1a7rG9ryCqUeGFFt257fDbexe71xXt1x5ZdepYnR8t9aQGBZ9KELQP61Q9ZXWmGuuLQx9uZ",
  "key29": "5kAB8fcNoTjRBdhHahXMpLNkhaUkF1oTYDgJs9zGLsBeiuWPx5YJfH4ZgTsTmZvoeUmcKRNhDtvLCyTvjcTNvp6h",
  "key30": "HhGjuM2hH2uPvqLGjL3QBPvxUmzwu5bgTuY6iPdWwz1qA9RRwTMdLzSphepj61MYkWrLCW7ygGVopVHjmRkaJr7",
  "key31": "3jXetLdPVuv8Bid9fEGrrR7UQLhuzz7MmQ6m6kJkTT5uGWDFKz3Fn87hcWq21mQNoSShi4AkgfL1gWquM8c3Gj6e",
  "key32": "6RPXtFAgxoSCMB5Cteh3gwz1CEu1U75WS7hbSiuWjGHekSPcfxEy2jk73utxZXGeuMMzsuBecEGYqxVTDCqQvmr"
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
