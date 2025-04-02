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
    "3Zp8wfaVL4F8A3hyVt8FgQZ5aEYqAWv7xv1Wqe2KMhcuGhWifgL7tHuW4zRPsAbeRXAoesAUv7jgSn9Vn4Yge4r7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ASjYTHywFfAjWzAALMVpp3Vzt8CPNERgPt9i9afbfRdfz96ZrppcGf7ztQABvqJPz9mtzuVFJJrVexsb1doETUY",
  "key1": "VcwmGm8CvXzC8vbzAN1PnpepfqGXuKmVdkmrhFdBEfKMC6LNFXruDUPxVSh4VA8EJsUiFbEzALKFA35wHgvYN2S",
  "key2": "tvZ6siWG6n3aBgDGwLkNJFPfCnuPUymzb3cWe6W7mK7W9dmBtNHcCfjZkJNvxTu6n4HdUx5o6QWfvaWrYspWsur",
  "key3": "2PV3YgHETjpaiRjuMFtAYjsa6cgbon1iA897sjHJuWygRU5rHYRf3HLZbND2JZDX3YzDYEDDhtUE8boqzW8K4fR9",
  "key4": "2Ss1euv7BQ4K26FFcqUryJwBd2SHJohZuY5DnoYfmfHxAn4JbjW4gDXmDkAN5CNhVA1qSBAsdaSAae8Vu6YHfjA9",
  "key5": "yTyEZKqZhtn7SbWeyAtzpyJejfWkzhAMB2NJmH5GTa8kQKU12izTR1o98huwdStXs6vawJqy5Rn6UVn1y958JRU",
  "key6": "5BhEbcoLYk8WqfcTEMYsww7dm1yQUn3Pnn2DjyQN3RfyaW9W5JhmFTu3p7rsLr2qr1rac7HZQfGs9KiRFF4wH1Mg",
  "key7": "XkdRevyF23uvbAbgTb8ow2MAQatLRasADKzaRRWaw1WMxXFpU3yrF6r3Qy21xRdaZePLBGzVNskp4sSkto7Q998",
  "key8": "4Q8hCryMYJATT7NZFez3MspvVcXgUEKtFU7gDwWeGA7VA2DjU4B8yhYiErhsZG1s1iJUvnQ6FmPaxHh3GUv9BiFG",
  "key9": "4QhEUWcSSzHaazbjW4ZbLiEPoq43rZmne1ifRDQGxW3FCZS2LZGXNfbTufX6Pukk6mMnTyLtdKjmGBrbFJKGa1um",
  "key10": "27JhSH9vfJ2DPCneT61mSD59rYWdT4xrGyCQneqtyRFwTa4Bu2HaHen8Q5kZwkP4Rf38ZvfKJTu6r1hWXCCcybRu",
  "key11": "3iHWEdEuc7Chi9tUp1v96q9HNY6JGnM5S28X3HL534Pnd5NwaVSwa1GnT6PMYFtuP9hHJytqdthQpQFSqf3meHxQ",
  "key12": "4zSDxKGFNcRpUWNvfvdAemTSxzdE7XdCaDkYZS7dNDYo6Lx6WvqnZn6YYNtw22yrfcHmLgKybyRL2bU8g1GnHTr1",
  "key13": "3hKPn4NbsVmY99ZDrAH6nG6MaKa15ddYvugWvvTcwPyqA4w9rMbV7CYCf5B8RaYy3K31nciCFkU87MPCjBrhEHXY",
  "key14": "4VocDPr9RapeNj3gaL8o2XsBt6rjUWF3qGwnwrfHRoU4kpG7zPz1qAXFdx8CkkGGAAhBTp94mGqxAZvkwQdq4fcv",
  "key15": "4nsfK9zgmbQ5y1YBK1VyEuKa96AhTTr79H7W6CLvbth95oyJVW8ahhuakS138cC2D6w71f2uAui88tNBXtN6ARMk",
  "key16": "3Qzii7vqVK1uRvMFoy58fLZJamev4gS99kURUPFHzAmMDj64ofax5RCbnYw2iZR4aoAwdP44S3RhjndE4N1RHm7o",
  "key17": "2wT2Gh5XUwbtHDJ2sC2oGrP4SJDqPScPeLzSsSU2iF9CBTSBPMriCUPUXy2CM8FdmmoRtssWM8SeZJ9vQ2TbwmgD",
  "key18": "5G5UQAHCMuAwNFVvZ3fzJNsfaGG2wGw8o5fccCkbauaehvDDUwM6kCNtBmk6c9L4e81a6BWcVWqJiMekLEat4E6F",
  "key19": "EPP35XY7vpGv3oCYi3TyWVZ3reMtStt8WGRWEU2AXtpZ1BWaYS1SpbyNbkMvyjbUZYgZVgVjSbCPN67qhLmXpLk",
  "key20": "4rNTWD8XRsAkbNNvFynBpc8GQSwo4onpjvwcUvAxiK9FWTgDfMzeUaRmuUuN9cFqrwfqyAJp4As3ELBmH82bNv5h",
  "key21": "izDWsLjua5LYVLdQo2SxAguxVJKT2rd3Ljdtjx3S2wYdDeMuqCXnTwiwuFf64uxLBKjeEnqWMawKhm6e2iPZ6ea",
  "key22": "YPDGXHXku8rMThnL1VEMjLcY8rHiqZh7XS2bWRJTuT7ZXBVahZbT47Y9avSe9kjFqgXFJHitAfdYjeB1CeV888K",
  "key23": "4zLJGkXTPNgz7HLBnjmRqct1QbfBz5Y7ZCmGrGVsC6mxAQ9qqiwMxBoGR6U345HkapmTP1jxiyRv6fWeFqbu89zh",
  "key24": "4aoFL8jCM5rUDhgLiXUPz8iKhiSe4BvssYLHmuXyhAPUZKEaEKYrM6yGbdoPBssG3Y7vH67kRV8v5sZcerB5phoJ",
  "key25": "4i9UMK2hTcN5QUr5x5v3LbJwEYkF1t1gwZFYe2Ecpz25wNoY6FSr1ZzUN4MVaThrY5hDfsXwTCiARCk9kxAad6AL",
  "key26": "ykhZZBvfUU855MjKLEi8Vp5ngXuM6XXxmjNyj5wTGJVZqn7xEa97zSGmQJ8UbXziX3w9UY7gALR3CtKyiGmkvc4",
  "key27": "FeBUucCnho7QQDmeJcLJNH1BDQz5ufA3xzjWn4sSY7LCGpiKRBXyi8hJRLEfTgxUesazKpA1EXqAsaV9esVmTg9",
  "key28": "nda9k1awspTgBaN3jhBbc5geNR2DTpeh1nF8dhA51MvWE1C9emFAYaSpm77z9vxrGip1yKVrcJYgktm3Z1gJug6",
  "key29": "2hdhfuNJaruL74BjwAVcrkZrhMxb7v2d9iSSeHbUG8BUbBj8kucKwEReYrsccq193PBbezLx9N4C4JFuwmWwETWW",
  "key30": "54cqzgZZrdochmS3n4hp3epWMPpM1QfGWSLndjqZoosK6jUTb6Wp5QJNHt3SzVQ5uAcktogvw1rVx5WGEJHz19Qs",
  "key31": "5sro7TjJsiqctBCLg49CrXzpyCn7o44Mdaaou7UJgQofmzk12f12xhkkubGHejSDtEdhWFe1PHSFfATFz8a9qEym"
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
