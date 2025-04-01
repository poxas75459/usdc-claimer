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
    "2WufAVYsAsoAT8XsNZaqTDgQMtCPUbqsq6hPpYQLwWHKgtGrVtKCbtgnzMisWbwjXrf4iadAeWFFx9o1SkAGZ2aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vRNXkYh5ZD3NubGik7xUrW5habXWVN3Q83BEXxsm67WYauajVoEskFsgNQr3DdNwxizyQjsKQUynbAAUZ31wEND",
  "key1": "4XLbgg9tgTjGRjr2iDfs9MaQimivhKQJcKderCFDiUBCoat6p6jvm9Spyk8aYLySPPKwfGoee47dgYvj1G3U8VLj",
  "key2": "35S7Yx45qhEJgWVFpkGQy7jdJbfptj8B7LaBARMkfJuVYm8M9YywxcpJdnrgTxocaVQSVcUofNZ4mhZuwXiWto5u",
  "key3": "32KTWXRH9GXkzmmpzb6gYgL26UdeJ79hR51v4NSL9Dk9oyDP3YDBMsdMEdsZoTTB5aXbSp2Az7uoohnTBj2Xp1vr",
  "key4": "4zPJF5phVvabHDYmfQkwrCRwwHLFZzFRNQKSSBfqtRK9fNzqSAKguRdEo6bU9faPiYntJLo2NRzJSK7R8ESVTvgh",
  "key5": "5KN8Z7QvHngLxQFz2HJhhGzvCfsHunfH3g3cqy4bJLVTMDn1Tv1U2DUSoya6mdjfDCBFWToN5TPB5U9qeVEeqiBC",
  "key6": "5pUb5jF3rcb72CkF3pcWrcYkTMGNxkmw1sZsnUEJYpvyXRBdXougMN23fFJBmD9gqhEj8sh9p4w1PXUmAJXbTTEc",
  "key7": "45oscWEcQE3CDtPTddERH2wFDBWBDC35ajue4t7V1JQLKkBs8XmiDGKyXSgQT1trFNfer7i14gk3a7dhZFJQTGzj",
  "key8": "biErCUCEiSFAKqTENijxk753jSMibEpSyJy3VxjJkx6rUYLEXqf3LHsAvCPoE6SZR6RvL4ZUnEeQz8fiQ83WAQz",
  "key9": "3dMzER628eTE8yrUzcyze2rTPPEFrDPr817eMsHrruTQiDbsCZng6Q31Jfda4C6rgcDpZ5MTFH6bm39GTjwcND6x",
  "key10": "3DpCmF1KzAjhm1YPoxec42zNtdtLfG6r7ZC9JvWvzWNMLAzyVVtJdn3hfP57zFuGMYyWGUWRsnqmcW71pfZqpiGS",
  "key11": "2egWPvSDsYSKUvEYK27UToXZowK7ECHgMWFgVGVTytzaEzKKd6zvJDzJTPdv299gWegjVfH5h3W4S7eJf15Va3Pk",
  "key12": "49ma53WJECXvyYAi5PAtEqRDr71yHJcKCSdwhMJ4hxqoT6sihmuAxpghBuo539tXA5gPnZyi6fFFHj6YzLjATtVn",
  "key13": "4unkj8jGX5nGYfLQaDUKwtmnGhriYVvXcACbup9BErUAPsdoUubSU8nz1ED8T5BYJk6Va1XGjrspd7dEag7qz2yV",
  "key14": "3rJfFFbeMSZpy5Dc5KkF7ETr5txFLbNesrRjvZzYsiJoJwD75ZeBTjSAvkgQg69k2aGbu78PLcwhcXrFqUUMK8q",
  "key15": "4JzXZHjKLboR3omPXE6ALFn7TK9mVw5xvxac59xQpbAtvmZoM95x1mMWGNcppLhf4i5wwmYWPYK8HsEtAn6CfxHN",
  "key16": "4P483ynF6xXDfVjKsBj3yhQpYx4CoJWGyaqHHSGSfSjBkkfokmBkCDp5aqoFknduF6uhZm4qALaZwfy8pai2suqX",
  "key17": "3JUUY5Gicnho4fz8c1VURhddsrGxy4oekmoWGSAiYpnWNvsVc1HCTRWmVkjrGyE2JVmR9yrEhn3Ca2bXK9t473uo",
  "key18": "hDZddw9RVQvJYc8GKcAuc84Lhi3H8YgBXWhyqK2yiEwwHNPukjBBFx83iC65Y9C4HaWXNv62fM3Yvf6bjwbJtQY",
  "key19": "5z1qaNQZ64RrpAtvAKjCAst6CjfN8o2ekGrdPoDkey4Dim5mM2zhvUGsE5fTHDVD7mE18swQm3mqX2JMxomrSEH1",
  "key20": "2SDsjnuGxPioewhS88oaEqQfFpckMsnr8AgzKH4GFHF8whBfPYXUsvvqbejxUEax28cjRCUfoyGqHeQn4xrbES8P",
  "key21": "3bJNteP8RjAmaKMKZcT1aeNj5Jnoyp8nXmuohkMssDwfnGecAnpUhrKXam4CNkKmhogz6JMkJrnRbLz7jpZQqrNM",
  "key22": "2m2bWJY6H433YPBpHQrpK2QTuLL5kXSBKjsKpBeToKKDFmkSsfAZxbme1XpxeNmrhvQuKCg69Cs2dHS4d5bBbMXm",
  "key23": "HS44QjxVjWqg68hNn9Qq3k62oo3d2EoDWRPGEbB93fT4fY7XtghWh1z9MGSRovQftttnUXuEnVtr8P9pNfDNXHu",
  "key24": "2QxE8Tr3zCMDjoPENgTjecBeyP2YNVJijPBryVipVP7428X2E8NCgdecZn8BroU6Qt8Z5oPvGMiKe25uupsKhzwk",
  "key25": "5Kq46qcKx2SRrrM4QpMNaJSvTMxF9bwMrVCGmm94gpqHK4jiiiVULyif1H4KBB5aNM5izoLDDcDgRgpSXBM9gzH3",
  "key26": "4LKM3ZYMMVZ5t34zic15wGKsAXqLGNHraC6yQvMkf6EQdEj5RJKP67v1iGoWBUQbBShWSA6pSRt4spcmLcMbvTHR",
  "key27": "DuAi7MQ8f5kxkPqfXC5Wpi9sdiS1qLNJ1FeMzgwmxJqkopyByMk3nCFifsQEtN4joDdb7DkFiq3taZKTqinMNx3",
  "key28": "37B2LjK4dKb7P7LanPsMWD35hYU8sbb8bTdsVTak3xQDkPhU4NR9iadfCGpSAhEFom7pSxPM81PGAEZbwkVey42G",
  "key29": "BPpmZh1aBD6qXM6q4J9asJoP1gWkC1Esq81Qpb7XJdL17KEZmVMUuPJM1aR8YGrZA2L28TsacMaMRKCZm7YE8Cg",
  "key30": "nYiD6iC74HjdYszTcmWew6r7ohnkFuzMpQyaocCVTfMKZ6cmgJ8EqdaAgKCMATDfeAGf2tRmWLQxLiRnRPN3RRL",
  "key31": "45PbakrQVSvwxCApeFrSKF4tBoyYdEtrLSsHCAxAkWZaf5d7oZBaMmhzVQrLqPCrkKHKKKcEgAxVe4oRc35W8ruy",
  "key32": "VCuqg1UmBhrWJbsLyz9nAJNX9wLUoJuZ78VZPaKiwdXtQFzdJ4fPKy7B9WarkjijS1AAZXonrBfMcEZCPm6xq9c",
  "key33": "5kP5suiecXsz5oUtmh3HjjnHPK8Mpa69HRFUid86AQX1wdijb5MRt3JYdduNACGv9Fo8qZZnTVHTo1Z2AQqwWpny",
  "key34": "4KtfsrdCutHt2jya6kfdRd8YeaXnvaGpuPMpzyjLtERFapSHRPFgwZzEBMzK9rjcZhSWkqBzeFoqETzVXbcZ237Q",
  "key35": "2H9JSbLYsKmT7mGDKgJnCtE4Q3XKMPgE716VzWMV5ithk9RuaXnf5d5p1kwtaudrPF8zpLLXxtV7qGzyJexNEk9h",
  "key36": "25UF2TrmUz3dmTzxkSanNcHNA1dJJMa2vhRzq95pPrj9x7CuUgvoCkeRsp1ow7XBGpaGRRg6yCE2WnjZK62Ycn7H",
  "key37": "54VQV5Xzxj1fVH1YrBEuQ8wuERWdWCVkk5DR6UZUUK6EZW62VQ2YcT1kJkVF46D6S4V1BtmC3fnMEAbr7KfY7gzs",
  "key38": "4M6Nr7PxNgLzSVax8xWLmPxCYQq9FeWHVYRFtujbNTMR14sFwhmeWQfzG4HPN6psHid67SqGpvy2yp9oPcAT3hC4",
  "key39": "SPW4pzEBb9pWTnVexXTEQ8Hi8ZPYCNH9woPs3QU5mhs7ge9xvFfGqMAHQEnoTGRzaobhgv5BAWZXKNEAMUgZ4cS",
  "key40": "2kuT3PtLskKRQWRjU4U9VbctDWpfJR8BU53KX11NKBsKJtVcejjpNWQD4wwYF8tQNCm5RX3fAXMYJsrdoRmJMw3W",
  "key41": "2qQmLT4FwQcGW1k19R74G22ULSRp6fuTnWbjdDttTXbGGfKiJDr2iq6ERrrd5kqJwhGzAQh9jNS445bcsLXJ86pt",
  "key42": "2sUViqiusGi9wHY7doydXPWawuG8SJbnzB6t7fSB3Cf56SBcjV5mrwrLddnmF12QKvx84uCaseNB6vZ6e7zUNTtn"
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
