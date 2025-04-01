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
    "55DMnpcHV95S7TTm2JsvpF25UPZ8bXyDUn9gwPNb9Ae31cc7NZcCaDrvsieuyGyGYznoQp2PTas3EGxV1y7F61LM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c2GikWjp4zKrWpBLsCG7RyuddrjQn5EBHLHpD9Kwbi1FEqoYBKiVZCFHFa15wEWMjmG9FMhULBfyZg7QY7NhSA1",
  "key1": "4zNuyHJpPvZdNo9kpxk58tELTtVVSWEwwJvjYpiheEGLD4U2iVc6xbMq9nPfortnxJ1mPWbaXGGjbBDJWDzvBdea",
  "key2": "27zqwxtKkgYrSqhUrBEVwTA9kdFKyMxqtoZeSLAtx8N59o5sMnr87kW7ZfFdejJ9Sd3qe2T9jMVTjcmDJyHF6GxW",
  "key3": "2hjKLFdiZX26BkoEpEtQi3w5cJEL7nWpFaQkzybSjtZZB1KT4p2e1gjWrNfpYUqRo1xjWfnurqRsxukWNBpZiHG5",
  "key4": "2obEXPg7gE8KyvmjcCzzKrzRkc8DB4zrcVaibtc1Q4BxMzC4nticLyVNCLLeWU6xkDoaTPDnCCpxFmPQnakyt4zj",
  "key5": "xX5xoJFyCP9rcegMqTzf8iiUELwojzwHpgWeCungbMhMq27VzW2CA8pheVwvErVgpVjexXhkArwsUNaFc79TAjT",
  "key6": "4GBfTV9mdRUXeTpPH9HzoY3m6AsDnjAVwC3aaqpuoSuMtjXSD3bM99cqxRjGH7aXrG8J4KR7tXQ4gp5foJF98EZd",
  "key7": "66FU1HpocB3nKR2nu9eX8qYC3MZGFRQFucAZfWUyqmi3F4kEkfNTNTRs4W3LzfN9C2sxDmst21PhAWCsFW4zAoaT",
  "key8": "3mhY1SHYkbw52C1QDt4soU1cD4R5ef9jXhftdm8rjzQ3bYCrNpgbohDPHKjHadqaWWAbrEtC5AhTS9kBWuhTDncd",
  "key9": "4fiVP4sYFjDU34iP9bYEz4JxrbfqZSw2Nn5xN4Kt49dzykEWBDpSmj99v3K9UUPiESEYUVr4ayqU54hh1V4U61QM",
  "key10": "DehmXTDSSs8wknZt4xEad5w983X9D5sSSbAz5uU9QWiZeHfwBrWvuRGrScNfzZyAmcsp6U9fgBgRKLFKfvRQEW6",
  "key11": "9LM81jjzDKrR4y22y766KCp3DzTKHLVj6VWtHRTo6s8BntwGsjkbiYakm5EQWbtvrMoJYtPTAtmxdZEKRbTGqgG",
  "key12": "5Hp4BH9uDXT9jv4YzH1frQVT5NMA4BuUiyKLbo3bnrcZt2HENCQYpyNcVQHujtWAf2A9ksKCSXMDiy3U7eitq1vx",
  "key13": "1tUZ6CsJ2TVCQyGDkHCGLt98UYPqspfSx4NMRbgrCNeFXZS38u1u2xsnjqtRrQYPuadFZrz5dZ9PBmjxvYkZ971",
  "key14": "4F2oYaDtdh5QniX9t76UQxxpDH7zJoCJZp2oz75FcDX59wM7WkVM4Qtj9Nb1CkKWmX3rDg2g3qWrLH5xmY9qFiFY",
  "key15": "Vk6TsmmfX7KifEL9AU3611PpdyyPgsRCCB2NBs1MYWxL9sLtMM8xkkHg12FpyxSxv5D65iJSfDXQ5EWmHBmFkgp",
  "key16": "4vE3binYt8QpEGxkVjq8dY9N3g4oMSewUTUkYU5CX39uiPovaTKydRL6FpdeKLLDTNkVsWf8E4KnDgXSpjCE4uCZ",
  "key17": "49SyQHPRyfY579cvC5wXxnJxBe6NkUJCFJpi8NgXrAeKBHLsWnVi5cAwFe2g2wNyg3cQKL7fFWLvEuARya68VenS",
  "key18": "RgUedwqYiTXz7nxpQ7XTRd4cA5fyErgQKAvnfCuFHWXk77my4JPezWunjrEACrKBfdPTRg8p2fZ8Sp4EGeqrFdd",
  "key19": "1JH4DxiGN2WfJnesVG8ntmJHxjoR1LzVtUtN4dEUPtbSuA7y8Rq972yAwrKPN5uuE9neVohUx5qsopWuLCiZKaq",
  "key20": "2tFpXe34Zg2Ac72VpviEEUD8ahDDi6Mr4x3kbkjzLRNKLCUjLuQwbxp8pzsP9dGtSGVLciqD6k13NNTYxQWozDbB",
  "key21": "4B2zCTnuntPGCGin4SNi6y5nbJeUnUcYNeFD9wwbvTi3xpaBAs6PZxvZS55CeoDtW8N6mZSzuiHRuu2NmyxzNphj",
  "key22": "34VQBHhn3LcSBRm52TBtiMCd1vrimng4gacjSSiHJ6K4Q3pQzuH6YCzvpDxcxPa4MenV5tjrenfEp9LMjamoDnXL",
  "key23": "e6H7Cb4T5oHciHShJn8Whw4uyWxmcwnZCTWgoeuxBvesjTbvNseWuGfV5HxzE73nTZczh54RZ4UvxtbyfVHreeF",
  "key24": "59q2etRPrhbPYU6113AYyGBMBDKdhoB43J1NSzxwipQ2bxTHGmxJh8CC6LRKis6iipzr2YxDG6PSCNenaCFjwFcC",
  "key25": "G9QD6cC2cYPEnhZUT6FjXHzyMH7L1KNtoeuwbyS4xkYAFnk3p25pFbNtvB38Y9F8mPkArjr2o34jU3kUVdEpCJ5",
  "key26": "5w3VsavX6n15W9cEVRL7STaaeNroeGqLSNkYRYYVv5BHfuHoUxxbqnd2nnYYe6WmsC2A9FsVPoHfxXRxNwLs3mTg",
  "key27": "3B7zPp8WJEdfhnFYTdDmmMiAifbfzfxdes634zEahX1HpdcJD2PSat3AxMgSDZDywtyRfN2DMyd3hsaHdLkxJ7TR",
  "key28": "3bXyoo4weSypLh3uFWcf8yNUjdFG5KUPLHwZELke5XPZ84JAYgGoxjsfGDAre8WFbsvXE4pf9G8JsAd6sV7QYGYN",
  "key29": "5Lok4DQXNnDj1m1DnZvC4woVbUMyyXWcDmVrJxKp8tpu9vR39W1joPymjpAwY797jzMaick3PhGr3bNbs2iZdQ1p",
  "key30": "2jc3z8PJEqW4mSkwnobebA3BPFccogGR2ba1zJvReDzkAxwdpHg8VrAJGBboLisBVz11n6S3n9zaSBPoDXDzEuVU",
  "key31": "4x8kGP83SS5TbmYYCqFQhmEVTimcQJmjD3EXxa1Wc8Dis7z7TK15MKBGu7PbKXwvBwsp8qwz4S9hkvQSDzqVynSn",
  "key32": "TPyQEg2hVWiVVZraoGRrpX8itY24fVHhTWZWRD2wd4ySypBqbfQ9b6EB7meohcsWTU47dvFg3UWrKftPBdJZSCB",
  "key33": "5aWsmQGJtu7MPnKY8HZ5fFWdUk8KbS6L67zhhqVWSu9SPSx8UVqR181uW2hWtqgXZaNRDUJy2sBdsHVBwMBLWyhY",
  "key34": "2KJiV47R6memwxcC3Y8RFhKZT8rHUwfuZMu2nC9SVSuf4hkc1MH2UywSgKeHsmkSdDkAvUSQh2866qydmUvr74rA",
  "key35": "aa3SE5chciQukKrf7cen3CpwmGD4Yk9qkvrMmt36LWL3UsQ43mku58J1cveLZpdDu4VeQ4XQJPqeUye9zqZRDLp"
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
