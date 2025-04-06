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
    "2Mt9VerL7ebfnih1S3jqPgVevhJEKUJCu3UDeA2TPTnfVw7a3euHTtTJPQXM73doy6mfC1WWGDJ9QEEKKdnAWamN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QcWDd9dABFJ7z49XTLtP3m94LR2VxSRR6S6ag6K5aVgd3aYU9JQ4s8EQWmWmdQke86dtWbxxiwV2te6kpaRt7ZJ",
  "key1": "2wR3tpuNALDNhRoMcsUR64acicec4xpXWcSZedE3jMbqHKec3mH3iaYKYzb1aGZHqNXmTcdZEEut3FrAdXCrNfnv",
  "key2": "J2pZmS8SuWqBwTRci814oE4CVQfWcePqoMF3o1fiXrsGChyzsotP4zHBRPMgvUbS8Cgt6qMeCkBf2DXv4svrwm4",
  "key3": "2nSnHynF7HKWTPxica9CRndFvDY1vKcHKxFWa1iYLjGJzH59aXd6DeyXWMddeTM6wijDKaQaZDWxmxPUoCCHSkZL",
  "key4": "2JUpFw7eotHKtHm2VL682QtG1R3A1c45UKzwwCfzfwRQnDCiESCYHFNPs8kGUZeXU9XtTyXtB4gKjzr2mkTLXPuj",
  "key5": "2URN5vX5PHifg2E7BM1SWZWtwH1sFtTGBrEkesoZ1CN8AyLWTsqyUcjyZuTZfAXirr3D7YRrykV6R4y5JbuStXgL",
  "key6": "2gPKqKtjEKXN6SR3oyiw2DR5CRhEdd8r2WaBxepZuzr1ASMmeErDyg2wQwfVpj77EJqM6oati25VVwAFqxpKvTXB",
  "key7": "3Hp2dXiJy94uZkiuwCYnFimYUxFUGGEqzG3MpQeTLwjioM8SxB32Tb7UCotV3Wm4Si9ic4Zti1hVDBWp28GCeZa5",
  "key8": "479vXUTjZpHQA2b3KsQuUvGfBWLu9EkoV59TRpTYaWNYKJCcMcMRmizdFVeb5gbnN8pXnkHmX47y4u66TZjccEmb",
  "key9": "3PnTTLtmchBTiq39PirReseU6NtapX46UjCAQnf6TVtyhT51eUcNRRDoU6J6REKpz3zbAPhbu2b3dkqBy8xX3HxM",
  "key10": "2kR8Tc51Az5FDvzC9h8BvZ6sGqQWTiX89Tyo3TaoQt21ubh2GUKDyo5DQexCC3iZmDq1PcY7fZZbXKiCM3ybZeHK",
  "key11": "2EMoFaqBHgubumkUcifzhWM2FaiNWsvVcBfpexUGfRyR9Y6DyhrCVDdp3N3ZGEWsP3VoHvZyD2EfxGz9uniPi39e",
  "key12": "eyAKTUydrjLJfSwMNFWh2u9wJgW9r6e748G2iBxq54ZX9UjVN5mUQwU8n57ehTqyJW2kf18c8fvV1gRJgSMEMip",
  "key13": "5dzSJ3Qsqag7BFUjxzLrPp9eQvkFrhhzCP34uehWsfBFH8viqDvjWrq3xkHXLNpmnqsLD5SV32T8iykwu2bCg9AP",
  "key14": "3CazGwMH7adJg3LEwzASyVyRsNbGKVyaFVaYdyiLnEhndshYRBLNd8Y2igEVB6THFcCvqXjogVs2TD7UwXEicyba",
  "key15": "3mUEMXf2ZAZJQGuSLoJbnf4pwpnavAEi2XV9VXinMFmtyaFfLHvmEcS2qBAuyYQ3zJkUgD2iVJSZfy7HgwDG9Xso",
  "key16": "GdWjJkJ5hjkUwyCyaNvij8GAZQxkcCD1JejGNJjx9XkbpPrcvpWHTp7daK99FwXwH6UJoRCrcfRwbGFSF1dTAcf",
  "key17": "3ierxGBHZqUyaoY5s2XuTv7xjN9C5jcLZjMRnXVyZ8pZ5XZmLT98aa2C3ScKtvw8p1wFM4kvJmopJBZB2zxG44cb",
  "key18": "28KBCzc32zDRM8ZzBjQ6BL1VvxqjkdLkjb52Fk3PLRmDhmjk29nRHXYde2grH4AmiEmhtcGDp2aL2SuYYkEFhUzv",
  "key19": "57W5QQk6TegrD4JX8Bqji4cgbFPiRffnU3xAdNRBTc45C3eMFPswuM7f4ZNePRUrfaCvy1M7qjByH6nECnVw6fB3",
  "key20": "64MH3pP2e95EhFwKshBcehKanFpijCGUaCs8EKkcFQxRcMzvdymxnDC7WDrNRzsu6BJBTBP8anTMaB6o7PNVSKaL",
  "key21": "4xd41mz7bfW35HP1tVkBNefKC6hJKLMZr3DMYQpNzB9dGAHB6bnbjLnCZAcXyH3eDy9NSdv1WvSRZaYHzML56F8R",
  "key22": "3EyzTEgdg9zqLZxnSktoCR3TACHebcMRUjse9mDFvv17j9StdaU4o2o3ELWYdVVXjNpH95rXuhschfMm9qZyz3cm",
  "key23": "538YBHN4Xg8DAcwEPhYJUEqx8QYK1eMqe9VGDMMoDqT7aGxtCjXfYbzfkEusrKHqfieY6MrpvbpSPNHUcj4bM4D5",
  "key24": "4TKRz6f56qSQWo11x7ZSX97R171f6a9qwP3ApHQhCA187mR6urr5n52meuEPgfyFT2vpkVFeX6Tx4SauA5UY11Ls",
  "key25": "4aK5qvCQ6pJC6cSVAfDPFYAJaQQWSBBEhd6CaJaapQTF279jgDKMj7mNPUjorVDtwRhQeartNMUh6djsYmY4zrjY"
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
