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
    "327tPJ9gfveFFcFzmmsHhj3o1tNCsC4SnjwGaSKU8urFFZ6DckhJpzuqdsCRmoPAQkjzpYneYTY6RgumdaNuiNME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cuSSyvMDxdx1zD7Q87emEeuxDaiHVVZszasTjGjHDwPK5AgQF6mwoPAmTaCqS9MCsFwwkjid43FP1Xb12wPwcp9",
  "key1": "YNMFzbAqjq6vrhvPZgroYtihYCNNz9LD3u69a1NAaQ1rHBY7An18G8feB2ihjRg2ckdiRHZUNQWtXy3N64rbKbz",
  "key2": "2h2ckFuStdTa9VzUUs6sk1hpa3fdCswSHKsJT57iPueKa3fkcKHojP4r2dWhTb7qQs12Hs3bxeE8ZzEbG2pkBcwH",
  "key3": "4L98xtuWmcNnocw5KFMNDrpnFCRBcfhWN19wQT6bodZ3tcrnT3gMH6anCEwCaV6qtEujse2hVaH17HQq28qyd9eH",
  "key4": "4Xbu66BYRbPKiuuCF4Wjaz3mSAf93qkmjDeRVjhocRzE5tuKhCnCzvbiL3hwbUyuyv8GzGRd5tigrZCRLEGaymXE",
  "key5": "4JKYNUBpPbBsZURzCzgf5hVEW3wzJgHvcb6k6U51X7JcR5Ye4AZndrfYFgyCEvpFF7MquhCuZgWBXgJV2z3tPzaq",
  "key6": "3J7nM7VPjyFkifWavwtkuY3nLGVae7AfNJFXFYJsvKY9RpjDBrKNhuQNLaLgrLG1P7UbiWDztaPcb22g9p8L8SR9",
  "key7": "4vkg3kq9zGTR91U3nv7pTDMrDMeycTcHVSXhcn8r93hPPCsoGTXYWY71EZprg7z1VBedzVD23hpDsx6smQspJowP",
  "key8": "5Xz2kuntMQ65CWZGmWBU1ATGU67qe6FaM9EBuGLFufVwGzUScjJcLJThKEizKmzLS7yzk8SBdPG4y1T8EDTopZ5q",
  "key9": "quZG7s897UF2Qoe68uJ4tZAjqqYsZDgy9rzyK8Bv1faTzF2BdyT5xdo57ZT7Y6iL5gqvA9aG3VgRo3UDv7YfxW8",
  "key10": "7UtpA9FMaeyXY7xN9igtCyncoPeBKqQjF1meRFTP6VY5LMhGExVie7WBgUAhw9LCAywP4yNzjzGxFY1W4ZAF4av",
  "key11": "fJDnfS52zLJxjAYWSCSdip7ygHB6JyR8Lmt7LUc7LkpnhHNJkvaCywjRog37Vbt8FpogoDRUPgeBiowzqkn5XZG",
  "key12": "5PCv3tbXkEvyUg2G14e6WJaoeuJe1fPsNnCqtCjyj8KnyQ6JwcqJkX6ZaWhMnWgZ8i15X5C7Jf7A9kuzZ4oN7Jyg",
  "key13": "4zDbWh9xuEEUPWedSjs7Zn1gqnWgGd9oB9o7P7d9PcNmF2B35YPavBTdB31wiCos7kZdrsgKMEMaib9Siu7McP9n",
  "key14": "4Sr13j2hCVRLEZMxHpEriGfTSdc1pC6TgteV4bKm93tPFZFptejCbg3Nt1uDEiwYzxANsFm8xxJeqjKB6FvXiRUw",
  "key15": "53dPYp5wbvLs6auxhwMJE2UKCJ1cm66co8tztLNiX8fGpomJRCkyFDh3EFnScc476KSCXqttn5KyH8h418HjEQxM",
  "key16": "3HcZhYmACVyseor7vdvxgeW1A3Vk2BYdhdSLQHzKgSCry8wiPQpcs85We898iyHj3Skvd3HDZSNeDfQATJgdESBa",
  "key17": "66exNGwZ4Jn5G3f5423x9MoFKotMU86LREKo5d7oqszv1akupAQJNa95vJXKWKu9w5e2Q7bD7CyhVWHT6HbkuytM",
  "key18": "3qiRuW1Lie9VSeNLxbSJXB9QwhkezYJPQPo1386ZYvjMRLm26kbqsHp8X3yVxUDqKbqVeLxfTc7B78k2MGmEppS3",
  "key19": "1qwGR8S3vFPwaN412GJ7q3EBKt3xYWeJeGH7k5uk4weD2x62vA6yoZkGF56ySV3VS9S5nVapoXQZ8p81RfDmfm6",
  "key20": "vXNhvkTfnRbBP2wUpNsvUgLfKCe6zBcDpg4WPDPTVgf2VuiDWJKe6tRt3imcUt7DTufNDpzcw22KwUTJ4RiCN62",
  "key21": "2DdcGDAanMX6zyVC3CFpVF4nqaMJNubwxec7Yiy9yo9qfGrxzaedRMHhzcCvaULaB4BioNc6PtkVsDRRBUGXXLM2",
  "key22": "ghm5rKaU9WdCTDM9wx7DrjAr37bKFmM63eX27rEFMPRJz9dHPjPN2zB41mTcEMxLjpBe3adZ7Y3hkWf7xWCEm2X",
  "key23": "ECUBw3UUfyg3HZicNMbJ8XfzFGokq1CM86XNvzGZBtphDjPXLFZW4u5xBSRyPcSh9kkTg71WBDxM3PRTbCGeaGV",
  "key24": "5oq4fvHYPv2a5XYSeqXEzGjJV5U14q7qM8WpnmA9qtoqggUBsoJmKUKCNiAPr4sVdAdNwFsLXpZKZ6bNFLGSLEi9",
  "key25": "wEn5nwKLJ5VNoZFDXxmsfvK1i5JYLEfPBXuiRWnjwkoqVUQtxSR4WkucDp8YsSF9ZJJPt1igQPdzAMsX48esfm8",
  "key26": "5vivFnfEj2aZiewUiwk11zKN5T7v3tzYA6vMYne3gTTv7boNPo6cJR3WZ5sArXHAzCXq8HrAKo1yfmgsGXjunFFd",
  "key27": "3n95HNMsiak3B4qFJLxq6ePsfhCrzyfNVnDFBBRCRmvLtxaAkA21qxbf1tbiRBrkmdiSGYZHkTYNnqeV5WFyAw6W",
  "key28": "2Y33EonkoFY8W5M1je9uU8U3UXaEHF4bnxCwLZSEJPEL2e7iCW9DmvULUT29nXnWGeSdBPFeYENixu4sekKFx97a",
  "key29": "3qWQfuCBNJawRVJh9HZyiG6LqwPRYoUiW9h3eF3yonpaCeK328tfmY8YKJ1BY6jcnUXRB8jgSs9caRT5XH6U5jR8",
  "key30": "4C2EdmZFgKrPP2KbMG7VRp49F3ngFBPcmewvBGB5NEbC93EaFtGmK2uoN8eX7bynJmn9gvvWW7iT8MfTiQnYjawe",
  "key31": "32R2c6XNHh5WUL4cwP8vKmPfqecPgLgMoaR3tYw4s5ACZ1sGQTuaeH7wADXEozREDYbvHG57PApgJiBBwJHzBWE6",
  "key32": "3BF1fQ67k8dLwrnH962yuEEoJYCwCwjbTipcBn98ktbiCNY91DST5KJEeBTdre989ymYvo1ACpfFLhUd2t8JoL2n",
  "key33": "qsi15iEGoWxNjBAuxCVwCmBMAbuyW8yjsanMZJjZaCDZXnJv5MSdDPJUP1EhKLPtAk4zaxbYEuNmRc6EiqZHkpc",
  "key34": "5A4cSAwQrBXNofQGAtfv5DKDvPgq8m2uJgivtdD6r8Q8o3cuPtUKTGgNAcpakMPyEbFM3K6at87AN9e8fecxH3JG",
  "key35": "3nNgEwQ7TZ7BhHLty5QCjkTVgEzR7khCZEt4Ec65SBqAdt1S8zL1PFyqy9apRSeqXgRx8K1zSNjCSuCwRyqqMRCH",
  "key36": "4nU3unoHBr9CmTmnxzST88bPjb3SErJS4LmkaSp7SkeJycp9kDCSw3kXXosz7EesreUM18jGxgFh46Xpknuxn2hd",
  "key37": "5PbT39rmzCmJTRcwLBnMD61KdGWHGR4g1Ppv9mExRa4hj478Bkn4Rf8RZEAMoGnj8r5CieGd3KJjJyRkfzfAH2Hy",
  "key38": "41paaisVKwh7KaNxbvMpMeFsT7wChvZUWXLzeoG9EqBpiJ6C6Wrtq13Xkp3KiMH73eU7QTm8jvMtW6NGgTC1zz6h"
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
