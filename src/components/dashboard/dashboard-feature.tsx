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
    "4R8CD3TErEDk7uithdaeMshtsVGV1jsRPS1paJgfyTZMRiCXax8kguTRJT7Td44KjvqdJDQTmyztqwGPgwMXxf94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ekVApiRRJMryoEJC87L2NMfioVzyXDWL9JAPyx5sJDmMDYj5LfVssHcuhyeFJNSfg5Q3DCz2p4m5skBcpi64rmc",
  "key1": "5VQyv4GG4YDmExL4uJkGpfoeV3FzWBP5yWED4bGtyf4N8HsjCsszvAARzzz2vC5pZ82Eex2Yxz2GJAguv4BpwGj7",
  "key2": "4HCuzr53kbMErmJLmmLqvzB4TZ91R75UpX5iByJj5KVzVCf2iBmjq36Wymqw7o2svdeDjxMdxqhhpwTHjGjuso5g",
  "key3": "UsbTFjb2amksxDmGxvfnw8RzJFnXAT8ccVJFSfqG9xrqNKVqCgqZNCXvyn9AdJAtEoQVov7u9tQRXeyCapno4CV",
  "key4": "2JdtDafEHQpZEkepJqTN9yJKbUFNhMFydv4yScVM4JFSiEMKDnV1UKBsLcK8fv2WgtVSvKo8pg7p1m7FkbREhhSx",
  "key5": "DhkmVve19RkvHbmenZa33p4F3rPm4LwTRBTschJPXFpCZ7Tcn5RdrEotCNu1TuGRuUx4oLe6Nf4nRKVshAJQaQa",
  "key6": "5djvhrjohDj1vdXFLyacBYkPiuAs9GBZHaFub2oiJfgJxfJMRhHbrM5wjC7n4xkerxHyHaQzQA3Rrgk4owFbGcwq",
  "key7": "3wpVMiXUsYvsEr5tAv6eyjAeWonrcWsrYAXq6feesEc54hEAoyLPUJTzStq6BBQ9K2WPXf15nfdtQqqW5sNpYHTJ",
  "key8": "gA578geXaWJwAPo94ZTK5o1BZbdisrTFWeggQ4aeg4DmJVXWZJmxwJ97LCH7iPCvoRkjNrSu9ZGzEU2mLnHwdBa",
  "key9": "CcbZ5BG6aN2nuwgfvAbjy1KQ1eNFYEFGakotk1ks6t449xQNvBTLetvAQXhA5CaxFX1WUnRtNfFAcD7iRtSKqBm",
  "key10": "2xWAMwG8NW9k1orsKd3HrkxxJbQ5YGY8jzz6wmZHNNypamCQDUdxyRu85wuNgFFyQRDK8UdDxfqWitjeDZvxfxPf",
  "key11": "5RTConfozaS79ha7j6X7NyVzkMD3YFQEQ1gvS3cjWH6tZjyWnb5og1NPAxkvNY567W8wGWXQ6D2EchZpzLbTeguT",
  "key12": "5GTozBMKrqigKJAZ4gHGbZu8K7F1KvyLRxkBeNWDbPf7gFe5AL2uTYWrNeZEpJaUiwan1h9HUmvh8US5LWBJzyGT",
  "key13": "2D4MMkTTtWjWByANso7C9boy4E3Sw11aVAkeG2Cawd1SnSTJaNThPfuY4ytr8W158b8o8UKGGNrPmZRPt5BbCLi6",
  "key14": "GnMxqVoxYgxeZNX4mqx2tu3ZenaCPAZNKjq5smRWvqYioQJXuUQW3LJYokhByHBVDrXEJTjiJ1AFjzw2EY5p95w",
  "key15": "2PuJw8J6QzgLhfEr4rus3pL9EsjzxvZtLoCPiGvXRTEAjouETcAb1FbqWAj6Lk954LYrxBBDDVG8sAEhybYSFTDw",
  "key16": "4TT5UpSP4StMj4GT6F9Sa2cXirAh9CxHjTorfKdYCNP8yGBhSxBVqyRsBxKdLwpPQ86SRDFV4ggukNwv9kxeEiCf",
  "key17": "35BAYdZPnQNnQXtWwoKWzWan4MC763ASduKzTV9qax5mj6bx1NMdxpqPtgobBkSVZb5Nk7uyEvpyqbYGJXUk8TVX",
  "key18": "ghcdpLicSouhFDGmHPVPYnDczkUFGhZf4gAxR2smgghT56UNtzvM6DCRNPQGGhvfWDfGGQX2k2KYQTT8dN8PYu2",
  "key19": "t2q9AckaF8oB2Q8wX31WydL6dWHKEYS4aHL6n9ZkUZutxeGpAWMGyoHVXFrurYhXvpaW9Nxkrqy8msUEMSNo6QZ",
  "key20": "4vMkEprPuRBuMvzfRJgWmWKpkKqeY2eUQk12zAErJK8hujgDMCbu8TGbv5VgSKHPHDqG6WXQNjfSrwiamjd5w1X6",
  "key21": "4SZhzn7WdZFcehDuPp5hJ11p1TGjMG3RYvgVmNdamZABiWvVCAXQCL3JuC1wShhyADKjWLR8dyZZbmQwPGp26rSs",
  "key22": "3LywKLTL89TqPcS8LVu4WpzVLdd39mPLQmQ7QMjAuYnB6PqEsrZexUpzYzStroTq9iVg3syKeLNibLYR9tSwGYL4",
  "key23": "3MtswSksAT2qUPrwsnT78Ey7hCRvDvdzX8SRVfv2szrhB9RpeEjkV67dNYtyVj7pdGMRWP23Au42wZXJZMqb8FWh",
  "key24": "FvsJpxs7TsevyEZ5zVWx5pTp6WVuHt1FxTyMYwp74sfF6s2rhpp3Xydw8AmucALUrqHRN85s5p1ZgZ3TRzXnNZ9",
  "key25": "51GGUxZjZap3zUZVQYn3YqkvHEKcpjpNEv87kJ4ovzkVijCJZguPSQ94yzDi1oFvLirQXgNZ9xojP1xrBxy6rm39",
  "key26": "2wZxuBVWjma4unjmrBYVknTYZwddGVmcm9QsHNUpphqcHBoegdhd9ttTwcuwcghupRR2Vq2NFHuBtXHCwekf7RED",
  "key27": "2CJc5fh3CeGZsH68AHFRtM1LjHXK7yu8Lu7cpRsZ4zoHY8ztTn1ZqCQce2vKZSQNLB6oYkhx8agGwLSwaD4K4Ue6",
  "key28": "53kopBFvwq4WAY7W69Tw7qm1cvLBm8tGwQuHGh2egQrmSsNzELbiTUe1VouYJKQXh1co1PB1gsqw95qfeu6LMCxH"
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
