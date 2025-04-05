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
    "3pVqEfD7ecKkMQ3o9hjQnXy5oTLuTk5n3ZgjipKppuXwQpzCJdhd7hUqnoWpuLxvqX7B5iBisDm2ZDaBDDd1EeK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65pavLpecS4qR3yavQH2CFwVbZE4JxhEuKfFhmfBc7oXcxb8nvmC3PZ3GBYbdttFE9T15WPtTMambZ6hipa19zgp",
  "key1": "5sARtA3A2qF6RKEAyRNxvuWFFiJi89V3AqFbU8qhjyQPNduqHPchKRXWNJm547FWEgNYup7GfKAKQmQFUb15J7GK",
  "key2": "5MzMbyigmFZCPnihobBSCNbJSmYJanSVEiNFDMHa6n9jxPA4qt4cmdyheiJP9FmJu6tTZAbvV3sytEhPDYVhsGDs",
  "key3": "3cPLx9G4viny32xGUfT8UUH3BZVM9mjCi8mDa9wCS6m6T1Zmffk8b4Rt3V6ToB82aX9foK9aaykrbhUYKkyXDPeM",
  "key4": "4ogdcLZKQPBvoeKSe3Q7fd5mKrY1pLynsCRSkfc2nQkqKwLSzXgf8gFbpMJmW2eRiwDWH18vMZy9KqavLEZT5hxd",
  "key5": "VkT1enKHpzt2qCMJUqzy7jLCNM6JdDL2858z3PuDu66CgwzRRHXHkoMBqFa4wrbgcgMxMxYkQw5JwafEyhJrtuA",
  "key6": "MpkaeBRWUx14UxRzTs79uB8iCwTT3MsXGk8coSxNbeoekarfxDuVW2gZSP4s5afCUrMP7v3GGkPGxfyzptz5gNG",
  "key7": "3YKZKw9Vp4S5UJFRCzkkGuDUb4jCk2EMkttXiwShv7AxPLSKxz4p4ppK7axqmCa96QEBRUcmXMfNN83Fdqc33EXM",
  "key8": "37QuLpCPE3x7S1J7U2Y6Ant9ESYLef2HS6r7KhV56qXG4QruZMhxqiSnySTVAoJwPDBdPo3nPKB7UYWw4YkpYm23",
  "key9": "53zL9w73eS7kMDpqn7UCstRw2efoVtJ1WDCcx3RpBzHhCUQDNLeuXCFcDwFJvXEKbdurA4AsYnBdNqjcVrisFrYv",
  "key10": "3V87K7TBtiyRdSLb6hqC8Mq74NW2himkPDbt4fJtRgEnhZKaRAPzfJkGpfzNBLa2THnWdw613xUhbjbnbr6xisqi",
  "key11": "hVZFJLvNeaTmC1PsFksmau7Grh14ZKjN3vE79K8jUQg12UjmCCHK3XJWebxjiL27KVa3gY8VbeyYEYwevz556tF",
  "key12": "4VML1JSk3pDkfgUEbuJt9jPHgRXfXWMGHFkV8UaSNHc7qjX9eGLNFqm6uMBAWvkqmNgJmJNmro1JP9w31n6q8EM5",
  "key13": "RSFGrEUUETAJmoMsXfqAxM91nGJbdQUFR1WcfMi5SpwsWKbYfJQdVsborxXk3kmgnb9D2SWECMF6wz7re4BsJzR",
  "key14": "5BciEkKGP6fX5dobsH4iRW2KSXDnC5sCSjdjd3PvFCHS5UTQYZHzkWAe6PJyDFPgjUfNQMJ6f87ieXxb17qRtwCh",
  "key15": "29iZumuRZzaA3aWyjxccCrK8xejGM6e7i6wkg1LEXgt3LsoE9U8dTqzzzwkhp4biatkSZ9dTiUbm3aSVXt4RWQH9",
  "key16": "2znAq5LPMZdJEWrUhJRFZWZdXH5BBHu2HUxT7B7xq965mVCHm2j8Ws1vKGVzK3qL1X42GgX42uHjmyezHreHorrR",
  "key17": "3wWJAdp2h2mtnhXALCyPEpABRTnYjSS7MShzKcWQnnofVfuHDQ3c6GYR8XVXiQgYNXw3NmnXNoLV9RLJFePiqpRU",
  "key18": "2q34jHGBHDeVbHtCunmStYoQJ1RSodiUPwZPXNaLf5MWipp2DyexbGmvia5M7ATiQLQYiPrV6CtetYSfiRU5NLWe",
  "key19": "Buv7f4s7SpGpKd6EDFK7baz699qG3VSMGFGpo1LdJKZtRYd53kRWo6UyePrUwgMryrQ67HKHXqNpJo37oB3w5wL",
  "key20": "nGbTzoAnTJFL6k2gNoJhS4h5GWVqU6Dhv8247DLApkMBaSntLMB9YgQ5oFrnWEEAQwfMtYheDnQEtWcNNnCVYiK",
  "key21": "5jk52MH3Zw32LHVFU6LKtyWiGjTtC3oQQipAG1nSGTUszG2QU7XBhQuXdPLf8b4PRhtr451NaDRttsTnQdaBqg7b",
  "key22": "3yLFbGKxUmCovgtaa7SDZmrV9j5VyDdoAb3MsgszWSeFA5cR12YVi18EL2iUZHdQcxztmckfhaw2X1CUyC2eZJXq",
  "key23": "pVwLRUFYQhZoWDA8sQ8QJWSYK6XU6LmJEMp6PVo3CqcjYHmnHTJE2F7wAZHJq1fXfxmqPa3ntNc2HUeV5YJsovj",
  "key24": "2afhL4uM4RBAnW2jKRbg2BiF5yN9z35PzHqzVia2t5yTQZnTyKxw5QqJec5SfHuUkxYmrQytysctx2CtL4zVHE3V",
  "key25": "dTS3U5VfvHajACidAyYhUKFg7HnTuwZfZm2rDfdwHiW92KHq3peKpsk4SUq6q76E4jwcVQgM1PSVw1nu3qgE1gP",
  "key26": "56bCagqbkHtrKbTsDHGjek6NPwhnx5ZKNsMNxGCHyWf8cNTNJqcvbwXeT1sJobrLNubmZK5wzWBbpQ7uTqUYAtQG",
  "key27": "2H6iLYR4zxFyfH7C4AfdLZjqkpEAt56ibqPd98gELQQtLRxEaemvtqenXYGuHNKXDdhM2EQbxmbhnN46zfAvEeLT",
  "key28": "48rGkscJ38htgcR26z37dXgeFtySqHP4b2sPwRFSRZnLKE1JpL5pzQgp9qg5wKcNeKiEruf62ocunA29rUbPQfVf",
  "key29": "51dZwQmt1BEnmxLwztgy8TunsNAAkKwhtc5tBRKn78Xs9b4jeQtF5ec7N3xRHWUGN2V6nae35kSe1a8BSgs4XmGw",
  "key30": "2FayFJryT9kEUbchEmHzqTBVauUUeZEHBE1BW8qKGHo5f4CUce3YZJ98cU4FGjDfPUFjXZ9MmnaFAJBRziZbkPBf",
  "key31": "3wDK4KuXpzLUKNRNYfc2RuSwYnPFYpgEFUccd7hYc9yNUUwjwcmQsyBJPjhDbj7W9kpQCXNumyJ8wHh36oY7gxF1",
  "key32": "2G1ndUwoREyh2oJHarEtVQHSffqtJqUofE1aMMXATgjh9SXyvW8pFRMb6njh1HBjLo3KBbzynygfMqPxEMXgRNbF",
  "key33": "5BC8T2NhcE127sVpA7ST7njmwEnppFS96CrLXtq2LuFVccsAYcJmpNured2DZR5aTLZ5TAA9r7bB17SY7TTbzHDW",
  "key34": "62oARRzjTkFKKFo2mTfPh3swgav2aWuHPAb4Fc8JoAnVSRaEyxpam9rGhmEJjpZqqt3Jy7AJQmg2ktC9MTpm2sTM",
  "key35": "44kzH5ZBLYKSp2vhrNujRksN4xJWTr3QHYsrg7xMNoPs5HVcX4X7puwwxumkQvUVQY7kEprPe2jJzPM1PXXYTXQt",
  "key36": "51MJJccPFPRp2LwtxGWnbm5o5rfxgGspp6hXKca4Ei41w5NCmRrq8mEZ3KsNAUV229S9R2KeQ5AkdHH1ULdW3AGc",
  "key37": "3hs6fVdHU7UuxhyHhSpo9FwHgHn2vnbHuEkBA8TA9fPbp32bTiqNWdyqo574k8LBwr9E1qkQkx2tmsU5yUYWMQxX",
  "key38": "5iepAQkM3zEJdcxBxjfYzyXUu7YxdxcADHGqR4J3akkREakQWhWPQgzMNf4Gt6MPedWRVHLc85g1kU285jsUERjY",
  "key39": "4R49hxohsSrftYbpgpx8iVK1WcdqAQGk1AuVFhGMDGbKMpGC455TjWTQ8MDzPtkTVnWZ2USNWaeNPwyuToGRi6KC",
  "key40": "wBdjFJhwQc8fQNaoUHf6JtFP34av22pRsT7rqnv8MyNg2xKTXEty6kLcmmTisLqKktYwSEvceHyC3WeuqxkH7D3",
  "key41": "3K2GkPmjY25UPcWM6AhcHcG5HEkHJpoYG8Hdpj1y3ZQWbr8ULx1qji537RhkvtpjSExokqUk7q2YFRhuzaWd37TZ",
  "key42": "2pKzLiCKV28Lcqxo79CCFCikzVgqVT44ZoXeEeb54ZXojpqHBsXCaSadAn7qUcdqwpyq2rRf7d1BgCQEGmx3LL4j",
  "key43": "4MfBFJZiK3cWGoyDNSZjm84FHwVM5mGmkeLDGz2Fem5ViDxfPUo8pacSYZGHPSqF3zyS9m3XGzaZkH18V6qGGYX5",
  "key44": "9fyQN4GChdXTcpjdNR5eneytt2NWGryZetcbiEGscLqzgKmJdRgaGikUPRp1NdU4s7cAGPiNSMt497ed5f5EwW6",
  "key45": "2xVNaDZB5VsvE5zBYrzuK4h2Ekyt3SKrCLma5wVMH1wJYc76K8yQoT9drem2v6iHZUzTtewQSSyvwqa1xx8cBAKG",
  "key46": "32QJ1sYqaeqRURRicGj5xaNxWY5ijh5NSjS2Rk7f19vZQXwFSgLbddjCc3YYaeJ7EPUY17UiHZE9xc7NzSXM4qPa",
  "key47": "3G4s5QYYMf3MFB2nmYB7rUx1ThMcasvoUuBBFCGphEGw9wGvwTGAw38J1pQ5aMHNWcq3dJKhJ7WBwBgzpZJTBR7e",
  "key48": "3RHr7rihxAHVEv1xyFjPUt4v7Pe685cmk6EwfQzTP349QH7dx8xwkK2CJybyZZiS7KKuPskGxjjvUjW1gtawseYs"
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
