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
    "4cYcj4vL4jqcZaK8KsCb1APGS4Wb6pzfGgvsxfazpckRkbgYZF22YkyW7YRc5toFZ3LYZKjkHZ5259rvotUsP2Na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21zeXe4eC1ZgAEbn4asJPah4ayykRwg19PGLVHpwyPii8eBEgSzoLxhKQnbMjQo8afMJ1HH4KcHxupbHTpFjjKSq",
  "key1": "2usioiBg2XJZJaCDKAYabEfczQo8YTB1YU4RopdCjpCXA2yEdf4bWXQMrWtYHuvTRNMtMWxQsCupfSFbJDrvTLv3",
  "key2": "2QEcX6uxu73pscpZyqrEDhBDuqymMgbAHiV2NNrD5h6KGnXydUuXX55hWSDRgB1YazZd7k5dPdGRvTsgxvmKMXM7",
  "key3": "22RQTAJCEiXbJsA2HSYHfe3odzXRFPKK5sKC61L9wUv4Z5xhqdwWkW91gYGqELJdrK6KWo5hhiuxVpg9cZCXxpp6",
  "key4": "4DMP3NdQv9nSDbmZJRftgvYMS48xmEaaETzPyscDDB7rBiAn1B8iJYeAtx4MCUVwvxA16AZZsyBczbgdXLDZXRHY",
  "key5": "58pjdTWMLM7Dt2fBTnuJYbgutPyBGVmYgy8ieNDjf5oKHfm18TpohhLYSjBfZerBSaNCe3QKLxuvNh4yakVec6PG",
  "key6": "2VAWrxASnXWipkuxJ31AvpL5sG1K5nmZCvmU6oNPBqeEMXejt7rvz6fUcTkY2wpc7hyC6prNxSJyHgDtmfKsKUMc",
  "key7": "5g14eqqcoWGhN1jZrJhspMZZq2tsxqSM8vq2TBiRBfJxVbLhu2aEmLJ4Kb4rh4b7ame5r3syzXsohnzFMw5k78h3",
  "key8": "2bqNzS8X3TcfkH7pP7TJPeWjAAX2jdrBCpAY9gsPSHWLUkPrrk4z11wHnu54v5NdZ5Q5Q248iNX7sT1j4J5e6Hi4",
  "key9": "5cCpFYcLb1Uy4u2681yF9gx69LFApcdv4sQEPEmFGzGa3X5YhGmGJmtrXvhfZx8tpkwDU4tvKwfh5rfsxW18WNoU",
  "key10": "4Yk1vRknppdkeoDxn7wnoVf3SoAWFTwa5aDYEwiTsEcLfGYzuPJSS9A588JyVVLTJkhxXKZHEAuvScdNAQTEjHaK",
  "key11": "cwAckTCazddYct6C3pNpbTYdAKBwRzKozGC28ZyaLD8rqzqBFDzAJFJrKW8jJ8mtpStoHkkt7Nme9K6QUHT1jWh",
  "key12": "2GPQvofVKpUZZW2RhuchLpZooiX8zyWQJJWd8q54k9qEmwAjgqSncnpfjTFB6E3W4qfiK3AJn3RVvuC8daaJjxDw",
  "key13": "5XeuR6iM3oBnvu18n6MwJBRGpKJppEoeWUUfr13GY8mpPczWzin4ctUCbsxSkWmm6XzYBcNAN2LW29fQhZe4aFS4",
  "key14": "3dWqkNCSqEKpe4A3aGwLJTzRLFm5rgk5uek6HwnBjMkjqXqsC7vZ8EcZgqHtUL8C5MCWeWDioMXWL514iHp7s7tE",
  "key15": "19AgBosLbLPy8W3arvmDwvpUxUKVEbhFg7qMhATkpUCzN98knNhj7p76hLxJQkdpnkAJZdbrNaDVJL4YtKoD8VQ",
  "key16": "3SR4FRf6LA5Rv7ReVqTjfMHb13YSP9gMwjwV5WHKhPsCiSHUH3kMBhbBbxywJ124ciEVN24oTQ2TTvBLBctAv4JG",
  "key17": "46akoacXSXKo5mnv4WGekUjdZP29Kp71HMqHEBVvM4xFjwAcURRXvf3Zpa54axCKLNXpGUWNCb41V9cpGBN5Dnb9",
  "key18": "3SSGxaHfr9KoegVkuZ7qopsygX1gjBCFYwnEdiCHsu8vDzcp74YEzGSTUzt2eCK4C41UPNZvVT5LZM2vDb9TR2jT",
  "key19": "2sBGALfQKxPnHPjavXhS24HEc8JUcQMvtkQKMFVAiusHWLCN3XAwjNMFRCtQbN31cbJPRnRKNfQYjQCbyczNSqhW",
  "key20": "5aFszu7gU9W7kpzH5kDttyoaqQkA4TXAuKvYk61DKrMSLieWKMAKZjCspsgmn3pXUGSJCMmro8RS3EPJKYWUvGYf",
  "key21": "4GkTz2Q7AxE496Wi5UEzuNbbYAVu1pYHY4pj74BYxNt6xUadbS7a49pzNw4XjXyniDbbaWQS4zaNN4bG9eT4burX",
  "key22": "4uJwypQ1btLcUfYAYFqbL9MiS1Q1atHfo6xxkMzMsc89QFY8ZSVXqPXWdeRg7zDPw96PVPhNdcjPPRwnBiGijJ11",
  "key23": "54XzovbZf5HGZ9bsEWQqu2zpRFRSk4VRCGcuQRCp3QnaR4QX4cuUkK4Fe9weFEEg8YPEZ4giSaxzJU687e4LFJvf",
  "key24": "2gfncyeSageXoKujN1KGpxYpH9eDK8uh5XQpKerfMSGmYLbRug3psnhCB6Ect1hzsGU8dXnSjQDdMkiC4EmN3aa8",
  "key25": "3W2YytdRRvnCs3E3zpyoazpnj39s8habhS2wjbqt4LPEuBcPt2czvfvwJvRZooaSPW9N4LhyxKvvbFerGUXNQbwL",
  "key26": "2nWyuVeFaAgzn8KdQYdpoDAEbqajnJMemfcCFq6hicvv6msy7PufWsW3ohqPE2z7ZnCg5z3bab2iLLsyECLNji8P",
  "key27": "4iF76NdfpRaBHCveShzpYgPXy3NSnedqkzXB52mwgReHpFpePeZGYDrXyAm4FQ2dVmm9szNASfVK5t38xNCyhbL9",
  "key28": "32kXiCh956T5h9E4iJyGw35ruiw9JxBXy2wHS6axh14Hk5uqBgNyrkiswFV2tTQSJQrspqUvyGbSwVTSGu2wGZZ",
  "key29": "TZYsiqz78MpjLvoXk24zGSn2pdCsTsCpP2j6Y56S6MoPGCcuVdyiyBSajfWY6AH6SBKZPtDWdyVLCDuigYTsVuR",
  "key30": "6mpzLgfxhqK7QuC8P8sXRRhncBsQh7wXbUknn7aLvsYRRgZi58bdAQkpA988fzbfDBFf774G4MhwitQThh65spV",
  "key31": "4qjwFniYtE4LTD71tK4hjLY51Pofkaiu6nJHY9f8WHiRsb6ASkEfiyA3Hm4RB7hGxPT8B5tfvBFuEF37qq6TmhA6",
  "key32": "5KRZ3K5MDN7TNgCAwXC2R43ZGa21zXwhS5GcFR8uFc5tf3dY2YFNMyJ8PfFEUUo8WtBNoANosRFpYKFoWyvLGdCJ",
  "key33": "66eNd1UHT5e7NE9y3MUgt1dhJmwQZbZ5vpFaPHaxbYWh9u2579DUMo9EMX7yASrTvv9Pb8DqpFYutxEebqXi4gEb",
  "key34": "in8eCghgbgCaXedPTmbcuNNM1gkeBx32QgUd9pbVpZLMaEiw8gxqYU5JyWYpqstpc9y6NQ8AtQNzZ87GSSS5fpA",
  "key35": "4YNdUj8xF5AURLX6nQJNJHZ8Fz7w5DjuRYmurGAd67ngsLHT73SkVj49JqBALLVPZsoTrxjogHvQVaREL2A8BAjC",
  "key36": "3ZAjqrqc6AYHJFEhLJpYRdtgky73yBqKQXxBhj4o5UaBPhWmatKP2ST24npQckjdkVujTJCFzLqkH3ShTNttAaKQ",
  "key37": "4rTsVCsH1F32UwofuNiCheuqYBfSjrkZMj8qieWkXrQpaxjt68EAmTqAEvygxTiCMcntRCNErVHxm3G6agHh2meF",
  "key38": "5mZaVdjXvnZQw1ArjMXYB4RM1pAz5DjvQ1Pe4WxZyVKt97Kctc6kFqn3Mx39Mcy7MuVPvjrnNDweAQwCDD4v2xNx"
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
