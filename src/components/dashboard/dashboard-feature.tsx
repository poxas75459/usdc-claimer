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
    "5w6ozKTEoFEPS6dSi4vLLKVnFz6UHm1f7NdDKWv1eRquH3XHZEw69frawVmscwvnaXD2XLMrtoHhS8ERN17pHPaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tc3gLavKatN1WQEFyaZRvMReD3VUPGDKratpKg2QSGfakAiAKytX47bdf6MvhK8LaUbCX1ci26gX18LjjQsHhy7",
  "key1": "45Fq8NDHnPkYpqsnc9p5eucgY3AUC5dxychwZ8LEjhJAbTAj14QnZE8hmg84KycJtRkebUggwvDX2sBERMFwgBCP",
  "key2": "361gAjJxpabkxR4uTVkRF4AckiS1KzxmYAZCWUzveoKwyPH4epVkUCWRpjhvrdJnGQcwmG2UeHmwzBriH2EGEMEV",
  "key3": "26wPW3e6m9B1juNn2N37Sch8JQFiCbaNFAdX5hTna92MrBErXsKZXJ25gJBzkQ9BnRBnDzCKu5HhnfAjgMAzNbjC",
  "key4": "5agaanCxi5q7kcpNCu1Y2QfJy6jamgVLmgNJzUsoGLdZNFprfwXTaLzWTevLyyCdRNwmbijm6YYSQwncgH2xL5dM",
  "key5": "2JJXA3USkZhXhVwVYFLBwwnDRp2nscEzoRjNhiEVNYj15TVxapUa7hpFtWrqpXA6hGoyeWm4UWmqNBKEeydvn3Ez",
  "key6": "4B9ij6E4NpesAMZXj9CZBZNA2qdwFNAhXawZJ8iMhDFycwXDJMoLx2LVPz7j6QmXTpJLdwKnJCi7njE65zvegFG7",
  "key7": "2XkZ9pJpM5CB2kNADRyFna3uaiXQkk2EGYkn3NX4Y3QZV8hLTF1ikELRn9QcJEzmFrJd9Kysv5J7g1SsniFQ1DMU",
  "key8": "4VAHq7ggFp9bdVSxha8W73szxSWcjMhwttdxAKwN38LJdNejYYoGQANnPBndprg5XX5agK1vY3huA2JibF7ZHdwU",
  "key9": "WVMca5vMP9UpXjmgrvnhN5mezsHYQW2cuc96FUiFNVLFMEqwgkBxdDmU4118ff1E1AfuiCYx84GrXYktrKEqrHD",
  "key10": "4QKGBko3TrFgEEFpumr2WTKAL31Vd29iTNiqsB2E1ptfaoLTYbNAhq5Ejcko8yyfjm2xh2wx2aWdkJkCyNNSBgos",
  "key11": "5gEJ12EPctooQRvYvfwy5vuVH8Se2tVDAZm4SyTyFgQv3Bk2dfCqPR6wCcCx4cM3xU4ukpLxAGAUsWz62L1ZHQe2",
  "key12": "8Nq7PRts9VqnjtBtWMTB4WngcsHdztWcHzhLZQDSTCZreD7ChVqdi9S9SCp3uY6Yu4D5crrxsfEtWmkMe2LPQDB",
  "key13": "2BjDHGLjji8aXsgi5v5d5euEjxyUwY1YkqpuGxNPcDUeXG9WpsgPGN5BL3Hnf313bkViSBw8ieNWTRx5nTSe8C31",
  "key14": "ffaKQeWvkrBadqBGyNi9mmXqwpcJiuU2ZKoHk3KWG6FnVexqGJMpFB8SRV4HMuZsbpDhzS4y1brmvRUnbTzTJVZ",
  "key15": "JRuXXYpht5zxNRMmzts3rv3G2QAMqRBJN7Ukmr3JupB4tdct8zBboJwfq4x85Z8dFmRp82zxbEwnVy112Wqc14C",
  "key16": "5TrWFp4R9KraoVsURPhyBz5rFsS9m97D2YyfZKhrbKReiXUHXqiBLtN5g2gokpiCWdJW8g4zLYZ8MivKrRy4RU9B",
  "key17": "2S1L42dzQorADFn4xj8Y2S6rxc3P3tFcLKPFHyyqBjLthwnmXH2mmEYg2qSmXCiLWoukS9fP2i9w2foPFeyiqjck",
  "key18": "2mkrWpaUFL4DVavXW5fapbH8hhZVkHuMWpR8LtsCj288WMrtVoi193GnsTVwcEjkN5vfEJ6x9xVSYsX7By9YK2zz",
  "key19": "3sFEAvbaX5zApzcxzWCnVJRUQgJdjZL8WX8YvTT9GuWdPSvpFSGcbJ1zM5vVW269z1QWSimm8RqAVbPg1Eknj7Bx",
  "key20": "5QELsDgqsmQ1ous12QRBwCnzjav8cg9KR73ywjUpfCn8dZkQuhfZgJTE3uMHH51B7rRhhwLaqh2rZrN3GyHeQCH4",
  "key21": "2F53n26VgkgJv3dbUapiMW7p9xg8WbqtrNpeb7uvgGuHGRvNisGmbc5oRZcdKhv5qHe1iMxWmyMRTA6hCHQku67p",
  "key22": "33JNQqSSCoLLzv7LGa43yzvtynYGnVZffvq8KRXDav8gv963f3zEVmcgKQvYz7UazYjVyUk8yNZaTMJ6YaxMFDMq",
  "key23": "29cJi9zrQoHp5UJa1Pznq4VqocuJqQAAD7krxkhAyNsvyGkQhQpStdDz3SFHxGmQzbdFFWrQaARmFGs7fMgV8UJ6",
  "key24": "81C87JWkcg23jEsTGp2bVApcgTkBxWzQrAXGobQBV6rRJaXyxkU9Ryyp47zya4Li2jnAw9991TdHrvV97m2o9ep",
  "key25": "3MT3nVsfbnfc6PeRVnmozbES5hbCqbjyiMnf5HCAPofpBpwdxLeJo1P4uHnWUakxJYYx56zSuszZv7ujLR5JTqBc",
  "key26": "4DQYztf2pjXgi9hzFRfiNh22NCwePhmnkdzVX9J9Y6g7JG1kBq4mXi6kWz2PYBHGXC4ESTUip3L8C4ZY7pu8d9YK",
  "key27": "cPcKQYzKG2Xsqv8qPSin4zUq4SbzqSSCgfumS6ohAn6nDjKzSAXzCutjdS8Y9N43oRqorTYKyTFzHSjWtdj9By1",
  "key28": "676fM5f51VnDMZKwJCcWaddy58vxmZjFpGLcDgZQiJ1VjL8fBASgLMne4PaCwSM5tudvKfMGhEPgaqxsTQEN4Uxs",
  "key29": "4rsPCEjPY1bHxJeYmSBahXFXP4g6wpYA9Upf5i3hqRJa8Mzq4RvG9UsrYxi93D9p2JCER1xKPMmPWiyFsyDpwfnA",
  "key30": "MRM7TiNLn86sJkgwzngKSxg3qxz2YNtdi9QFGKewXrJkTRMpvHDUrsYS63QnV1PyDHLBgebVm8wP86PhF77H2fX",
  "key31": "2s69vhEuS8qWKiHzUwhuaPKG8bNcJuiQZpH67qrd8x9LVyTTaVwHhnpo8S7xAPAy2E4wfGimbdq72fAZrSaHbkkJ",
  "key32": "ZyBp8aXAnMHXkQfvMg8E1G6mZeAdGxgCVxTNhs6Wo2afrQsGdx7mELQnWpJc5FcsJ8Ebj54iNioouiKxgjvLHN1",
  "key33": "3cJg5zeeC2bgXNE3QePckhucZGKaD9KZzST8PZAXtJ8BtpeuEBngQW5CoSmd4zeSNtyEdPnmdmvrSfcozQsjG7UA",
  "key34": "3bnTq3aN2oRMG58PFjT5R7cJTs7RmwtZe14EBREkFHeAewEVNEnjkkgU642upGQ8nTNcQWP5Gun73y1avdRLPURE",
  "key35": "pNTDpAbZXmRoRt7F6NNrXRiV8MDNEqYAJ4UEz1vHmzjwNTdtiYdn7qNECp5AsU4nVbvJtqtanfGGp5fZZ4za72e",
  "key36": "4KqZCGtZdC5E7E16ihXfVP44g48A4627FXx3ryUtkWucyP1dQ5btSAhczuUj1818hcnqvrkHCWbjbSLZLTGiVmxM",
  "key37": "rkLMRgVeNrE9GL9qU9PGKXANZ8h98qSBu6JXWi2aMsn13hRAsymQugfkcpi6951QERp9gkw2uu7Lwa91nNDvkck",
  "key38": "2aJnpWMNeiEAF1MV8oeDyjq9Yndu9xZB17K7kJiKGCSh8rwrjRPF2vzeY4fEgJiMjPUyBZ5zGzmuyJ96PZ8dX1gE",
  "key39": "5x2W2x3bvYauyf8yPmKsJSwcG55eXisEPmrdRM1Dc17mW2TTgfGNDRNhdi3HWYE19q4mYZSrnVY2fjf51gmXbYvf"
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
