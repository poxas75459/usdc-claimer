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
    "3MsRqPXEaGQHQdLMq8gn9sSvR91vHRyJxoAqcnVvabxdyFwbLY8a5fFBbtLozuB7jmXVKsTCmVuqkXzcrcFpm8KX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W5o4Sd7Yvi59SDWGpFEAo9obCms7CNKGsDyjwRSc27EErZGRqSc7c8Muw5BAbAxQjXh62YxhN8rSiGgji5LpRqa",
  "key1": "3grGLGbPYrvKgiLaYjQyFDfoR6RDyMtDtr7jbfpmm1XT633Ep8UD4GajWZ2AXLrhd22UkcaH5ZsrG7LrLa8GBWMT",
  "key2": "3nSMyLbQAX4PEHM7nDieSQabnQGkBVqMc934TmTK8kRGvJWSkz466dqtnam6fUh6WfPCtZTu9UBJgFPQj9mbBVki",
  "key3": "ppr7EkRnmc7kf1YhRmq2yLit9fZGLwa62bYM3xDzvQFMi1xadyhkJc1j5K8Lxa3J5DJvp7Bmrvq1ZLsKH549LfD",
  "key4": "V6ZQB6vjiR7bTYaBRvENPqRdM8DJ1KvSqLR3F3KM2P5i13RiyFNsqaC7swBnAZwJRqTyppnM8EFqPea71QjzagE",
  "key5": "2TrvfagDs5wdryFmKEqA37XxVz9184mvsQZx6bsDVqHLmuv6R7KuFQMEzSTgVc6SrdvUpvWttxeRrep4kQvYdawn",
  "key6": "24NLnFV7Kf31x4igMCfE8UTDnpdsDQSLVr4MwqRH2nQdRcVYwxhw5agbiFJExk8HS95Gr3U5zp3PvmEEEbcCLRuQ",
  "key7": "3MdD2HE6oCbKDXDimMsmZJf4YFgqiv3WNeRqjTKcia2NUzWzu5CkRHXU4dnhxMKxNHktb7E3yBz4MuvngUmKc4RF",
  "key8": "399Mpt7ySTRPUtLUzvUDD2kNW2eTgrw66uAkzSAoyFq4ABcBbygn38qiHZBfke4KzGL5TZkY3UvaUPRa5ruJUChQ",
  "key9": "3eWW1c7Ljpo4mnkiqfQ9kS3pjzfEU1VwWPePjsQc34C9yZEbQCNDnWgGfxsDY3MjbwGK2GGFvfTMq48xCMHiziBx",
  "key10": "55kEx7xprXvYKAKaCp7rdDa2bhp1BQsp9PFLoDaaXMA2poj7WUHvHC745vPpQ615KWtkW4Qba5s3bGiCBbMAvF48",
  "key11": "5D3FbkPyD2kuj8wfri4oHfr2g8Uok1gccjG3tDApcnUqmifVo2gMvRnqxJaYYkXoh9J9ezXQR9q7wbKtCc9tukuE",
  "key12": "4UNmMoNLNofwDSe6HAUh2XCHA5XL9oq8EQeVGBAKFZcTKxnLYQEuG9n34CkKiirAg4NMrt8D6epGcehRC5eZMvim",
  "key13": "5trKJngENXZq31bQeULxmDb5NE3KGRPuJ26nebXmhEwwc9E7S8soXkpFWCDev61EuXKJcdYzbfWbXjHwvhnN9eup",
  "key14": "4TtXBR2Nh2fJvqHGpbnLeHsvJHkY66qd36sQzp4sjt5pF1PVd97YXjZPdXhhubw4qAzDJ1X1wYxW1UcxJ3MJRU8s",
  "key15": "3tVEPorspQuRVdiJ1wvbATcHKx667oPDJ6vsXSevmc3ZaVeHTb3ewMsMhmeo4J7PmndZxpx66qDZyUURS5ioPftY",
  "key16": "4geSZauvnGkyRr15zSFXD4iXYHvRyRzEbXJvgnwazQnJyUo7fS5QG5JvbtKrgo7DdAchA7tb2PgEb4wDF9t4e2Cg",
  "key17": "4yYYHSQ5SnhKQaSWeGMeRdUpbLiwNcFV2FVUr6bw8doPzRRp9hsb5aacDuYMPgXxUyupRcV7FB89iCj5c1nkFfme",
  "key18": "3SwLDbbA8zptGbyt76SmP4HBmW9A2KVZ6nJpgat22f9RnjTVbdD6J54FtyFJvR7HoyMCBSyo1J9WZWUAAoiWFuAv",
  "key19": "3hYft2iZZbZcy7MDktJ4iooajRsngDXEYULv9sdSEpcHsRYGooL1uY9DJMoaGpRtSmocv76Hsw1ZktdXrgy8SKHD",
  "key20": "2k1Fg9abPDkRKJVGDRFHXhrn5YA6UpcVjFXxfs99BxVbF4t8hyUMmNMpC8qENTJv7cZs4LXujcJ4ZKZBbiwXWocJ",
  "key21": "XvpvcpFd9e5ary1LfcBcwLG3zX3rUtx4KsPs29RfvHr89MewWJPTCCuYNfPW6SUxAjtEWed6u66Q6YTVCCkGX2P",
  "key22": "nYerHoMM1FJjKsaPRouKdYKNPrcDGa4zeMVCtZbPskaLz8P6z23yKMHsJyqjtCkUm1x3qBz7EsTgAiiG6mseEVD",
  "key23": "31WXfMT4Jsw2euECxfkjWGrVh4eZjFL5DtshVfGUg3GKPwd2sVtceNsViTF7R7AoxQJR17r3oC145sjbUtmqJM3b",
  "key24": "3wQq9398iMZXp6PNPtWUhVT6rz5hP7SfwApn9sGF7yUvcmzKXw2ywgEMkCofNAvVf52TwJy92qoQdnrLdjtUdfv"
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
