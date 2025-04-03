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
    "3v5jpdXW57t18wNDL7g5kWbMSNAsYxzjSZMjYnw3FhBDWSWTrxyhwxBkEeHK4PzAeMEL6sxYnakk9yrxzQjfmryw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26YSWFfV1b2JGtTQEsenUCnpz172FSJ3CfWkbHyBPFYWFTG9FqYEmSuQEB6n23hdAQsFrrGw1JMA3qZQHNB3DmJ7",
  "key1": "2GM1sBuXmJgoiopUogHNoNKzxuEaAHUHzjEW4Li3vxFpWWr5QDjzfLf1vjvaR8pTmETAXQYmknnSWr3NRHHkrje1",
  "key2": "2F3Bo9FoWAVtZLgqi1TMvZFXNGpr7hRvmiwRJhJ7cNBz5v6srQ8zJncnxA6fEZBQfJFG4tkPBZGdXVLcHxBrBJiX",
  "key3": "yq27PwxL4jxu6E2iypwnshYojS2VY9orWi3CyUq1pdciyJuBXMDXaUPg9iQuhdLv79UqqcEsvEoDxe4PHtny7gh",
  "key4": "6UnYvT28G9LeEgP9DzJbuwoVSNpngJeQdjBLeuFppP1GsK521pT6io9EU92XnnEmwiM4D442T6rDqopsFrjeqda",
  "key5": "NGgQANXoiNvbog9mHsF5Fr9HLmjwjt2zUZqU33hErci6utaoD4PzDah4cqHJbPowuFoZzrrvTkPhoHRSCAU2K3q",
  "key6": "29Jkf6CEyMtiXW9tGpXtVF1c7gT2G1VTuYCHQHPAH79R4uvy94Vjn2zmPp4tXFxTzLhy36vQM6cvyy7uHY9Tu1gi",
  "key7": "4xxbDMWtQsRDATyb42TFhAzWnqaCryUYyUriSjLdexSePv7p8TMTPTD4frUCxq5jwRNhw3grJAYzR5WXh3jes5vA",
  "key8": "LhMmQcrheZZskjaY8HR6h2VqEB2uaXmae62fPa6ymviEDcEgf2zT7YuAisyWFBw47RCB86Lsq526wPNs8VpNNXX",
  "key9": "2HgQZdfGDRhUtoYPusLUNFigVKtAMoove8KMeEhGcoaVEeoWddMXmrfDjApXpppQUBzvxD1spg9WLpNjJHMtwswm",
  "key10": "64HFCkcpkgNUaDmkPLhDuGy12xG3EXKkbzYFqpwfQ1B9L9FvUvTFHG8VhjLCAVENeKZspWg4egGFjb46hNyoJF7M",
  "key11": "5xZ537WXqgPob1hK1PK4seEbHbK1CqqbbWZZAtZRwRB1Qx52RyCwVvMqzwFK2qqVRW2mPF9KRAHuS7Qgp2v4n8LV",
  "key12": "2pHysn7qdTjfYCyFygVhiGHz736n9X6aM2AxXqCqZtd6c9j2FuqAnM1zjTxh6Yx1oxrHpuuqmGti5vA2bv7ph21t",
  "key13": "5vxJrKGaUr9557xq9xqMDmzAaKQeQtrFVYphGxFWeAkmJbCaUyZFkU2AU5fGWrF3zdYj9SUf3UVdcP21JeWn5MEu",
  "key14": "4CFEXAGzC15JuWiSv4pE9Vj9uK8qLwjBJiguBUZPMujJSVmT53PjHFggs21GuDHWjDunc5yG9D4oTcvrvTxxaMEZ",
  "key15": "3dunWbi6QoU8NNcydfosqegxHxiNXUN9yc8UHsAqTXGQicNuBUHJy434mQwvsboyCfXFfqxQAKrsbuXto8PCAFFt",
  "key16": "3UeF58cWMg5GzH9kvCFq5GJRH4vzDv9JFGE9MRVZJtuyfcmtuZgzJ7rxWjm8SyJQ9TrLAxwqk5HGDyYxjBz1ZSXi",
  "key17": "2uSuPe6ppHFLnV8g8oCscjsPN391VZ71Nhg3Avhxk6NmzYiuiKpdXBx9UWKqyuXiZbCF6tY6YEFispaAahneMZpa",
  "key18": "4Pwnh8PDa4C5oxHgmAFY4hRBtR1CEHWPtd57DKVDssYzExV6nW7Vh84urDsFDjcrfT9rLSocdGLSF8ibMrv2F8vj",
  "key19": "4RSPCjo8GbRH1cpYMMq6S19TiQw3c9x3RAPwkau9cmCESVq2LXnhRQA7qdK3AsJz5woXDPqY7Bpqs8yEwpR8QKhF",
  "key20": "4ysk4rkeqmWvrnkdqQJAX3TUsm1wxg7buQ9ZkBfRaD8E1qkfFqwNityKT53N6TZMN2E2iTeeSECJwzRi3X6PwS7D",
  "key21": "5zAVuxDyxw63XTj2pvR9Vf7rznfWBARscjLnjRQR5Mi2BMQqNmajNZnrVvfYUu2yWQUeH83n8xDL75cm3V1vfVnZ",
  "key22": "2FmHuWFv7xvZEgYiWjvxBJY7nmqycL6KZKYre5evdadCkEn6udUBNiJgyqZ7DcaFQp3ZistgeJ3TF1gAC3b9KkJ2",
  "key23": "3DkkrAs6JBcoXHPo2pbGwnmHcPuRES2XktMwAXNFEyfWFxon3egMWAESegGn4uSU5J9qdGAnoSKXCf639FVgJEii",
  "key24": "2JhCxKYsuwKAH7ythEGfQ7HnxRAVHzCvKHVPSjiy8kJP8vQuKKnrPPFAxL5vVZiRgeGzqJnpkuHNCWxaWMR4Evrk",
  "key25": "S9aVz7ABJFbQfHTXckAYEttCdr4M4jpMJJp3foxb4uJ3NuVfkAspBRxSsEr9UzmRKv2AyDpJYkGfsvew3vuyGUo",
  "key26": "65rEMNLcvE6pV7sNMteWiJFXkXVW7o9T42QVPfbtDLokALzcudFWEKN1jWdBa3wD9Wy83ixNat61pKY9o6MfQgBf"
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
