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
    "3FzKY9tJ39w3HVqpJ36apWWKMiT1fmCWw7CXZmpNVT4N2Q95Hu94uJ6PhYKYfgvgpWk5Tn8Y3ptNrbtGD8M1Cxcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sjkawafVRJsq686fqDofjrEiSGSfYXjndQHc9EFZw1yyoxdkTYv768YiGFjNvU9qjUr2UWTaBB2meM6Vzt88tNM",
  "key1": "8hDbZoKFrAcvYgJNd7XuMmafHtGdiKMXWKZiWZufkg1CkeTSaHxKY3ga5YC5QYW7qyfYxXXeiBo8QevTAqQ7yZA",
  "key2": "3NxDXHi5NyLw5iiyaiPHSUWu2ZmvpqfzAdwXcsPDrhmxWgq39n3zFZGE8QggSHooS5BdbhcuDhrQ5VSB2jd8BNpF",
  "key3": "zhZ8umD9S27Z4Bp3p8tDCgjCUXUU9A7yhuqtC9WGdsriTB8onmbJ6fMe5j2pNM5Ap5E7KQWxP3Y1EQoJeKAYLn2",
  "key4": "G6iAnPU6yZ8VFpLdmfgK1khXuosmzbZB26zz8MmqVPVqJKskruyn3K6oxJB71nmd7FAMSjukj1wGt5X3uxaAs9f",
  "key5": "3tiCm6g9SytmzWojEZw8Rre3MmQn4mUQj9mYW6AVTzKJM7Q5n2Ce4PLmH4srk3ztHuC7xCvvyJQXA798gspg46JH",
  "key6": "3dWbyrbD9R7xcraNfdUYB5RYKJMd4QM1SWkMAAdJkNPcYbmwtDMCvJWYkKD2PLfv8xXYFPcs4difYDEuwRFrC69k",
  "key7": "5qt1eHsvGSA4TTtdTp5upqwVz2AZ7uyHDS8hBRQkGG9aqhRC6Jh9RDnDqRwtdmCN5S58PVxqsUq1BMnb3Sx77tnS",
  "key8": "2ryf53RDvAQZChY9tmX161iNT7YSa4UJ18NeQ31if7aYQJWDB5iL9hHZquUbpJM288T8iJj33VAUNJMCAHAAnjTD",
  "key9": "HnTWFwAYr23zavdMpZByeB8gUqgo5tzkTKYxz1GJauFpy1U445jyGsGPGqaUAZdkfxz8TWQkc5ZPYex7jhvb4CZ",
  "key10": "5if8oUrSpMt5wkWStptUJxkG4B8kUXdKz5dkpGYuNpFeyuTJTfbjNWWUgnrekmRtWYEYFiVmHjkqLg9McV6fcFXZ",
  "key11": "4y3xhVr3NbTL9eCFbXLzjVVoSzeXLZhVQMEz34tRzjxDiqPEiqzpWUDi3pgNn3cSoCfg6t7kG1JscpPt4HcSqka",
  "key12": "35aGrJjXcYTFwW7JuTiWvCZ4G3n6Vk13jwJAM59bwQsqL46TvVYS8ZqULPAfHExz88KmYWK9GZ8bdLUa1ebBvuqi",
  "key13": "2cKoXz7xLwN1v8sXf7BUYnd2fwub6ZmWNQS488tPcCk37UeTVKgBJPd9vrRa4RexDgvu9iTvons1J1LDhH1nWRjp",
  "key14": "374KRsRv8NHqNf4iXYskfdL7WDNLjiqfasNHwwZw3Aa31BjHVdBVL2omuWjUZP4U7TAZGRPo1MRAKzuApayoJARf",
  "key15": "4xDtwX3fi2yCRj8QZZGMH3EU6oJLSSoqcr4SeWzueDD2XSBXV3aWftbTRmNMXgCc8Y32fNSPEEHkR3v7LadB1ark",
  "key16": "i7pg1ZpivgEH2W2sEKaEbLEz6FLVM6xhhMyFM3XFUx9nBNEtqdTPhS3yE1pbyrApE5rvmnMgWne38c7PkzTJgwH",
  "key17": "3TJGj4DQsHH9NDGyJbHjMXVaKGk8ojgNni9hRSMH2y1PEjWGUYjvjYsyTnNmiQBZvtyCDNB2XWzuEdGgWmGA6hXa",
  "key18": "QzHTyzjgGCN9vZMQxCH1aJ3ZMpKnnFtx9PwisRZh7NgJy7G6W9crxi7Xyi8Z6tGBVbusZ16dhLo8q39Uq5eXgyU",
  "key19": "4P1M36cMyzREgo5R7cho4cW7V3jNS64th2yPzN3YQvVcvrTihfJfVf1j63LaKRVP1LZTiY9D6pobkFjB2tgZ3kSM",
  "key20": "4xcc2gnBfrAor4n8zt5jWFdf4vQRDYLARzZLRYS1meBJj1vqRpwUNQpsk3WfDM9rd9MQs9EY75vRynkTwwHfwuNF",
  "key21": "34XHii8ksa1BBQqUxJehXGQHGvSzCdhKNPZV3c7g2vXNiaMswYNa7p8TK7S3JR4NEZvF4AvHMyEBwTVUqohXTPi7",
  "key22": "26wSNPtLRhTiCfwws1Dft65upKsPLUvec4LDEDZxxoTcrMifAXSpuCaFatERi7bzgSpYnM8wJECXLhwA7hMJnNsX",
  "key23": "5y5jpuUm8t1Zr774pBTaN7UbWwjuox9S7nYdz5rv95TyqA8iAdoGgq6WuAEWrhtUE7JdHZEFybn7Dg35xiJWufV5",
  "key24": "5evigCMYrVgnyLGMctxhBq3wyFntyW5ck1bbvieShNJbhqnxpJ7F1hvYZwF96YCq8ftS4bDgPYRxistA5ZTMQbET",
  "key25": "YzZpS2Rkkg35RitE14xyfjKpfCAvqGPjxuEwqxU5LkAW8afPR2ASGicJC3LzN3NRfZv6chgEepURdPFaaunm99f",
  "key26": "628XARwagw37Dbuori5g6bwDZXbNsEGHb1Cp6zSUL5Y2ZT4yyFvAnHezbgXosw8akoVwMARkkdwSAQCzzAxqCxrJ",
  "key27": "3Ys1Dw7KQpeLHBGQchBn6gpDzeruY3n1WukJhxvesr5ogacPde7EsL9f3SQHSZBJ5ds1kAPVEXpfWsQFeE77BvvX",
  "key28": "5RBGv6GfB9tVh4X6RzPZAhDkv6sVs6LxodUywnenjcr6n7WMpF3xVzWBkcHPbG7zc6Z6ka3tQWjFxUKzWrLwPzhG",
  "key29": "2ncpJcYnqeJYbWAAfZV1TayyAuBFMDnx5ySWC7YA62BVUnF5mMpjkt4v1fcAwgmMXFsj2JBgW2YWHp6VspbPZpDc",
  "key30": "5yQzZXvtbpUhkxcvuM63pGHA3VvPGAJnZtLG7qmtwGDh3cpHtReXX5FpCPiuLxmrvLEhudNRFwWWwrsYaXHQ5FoH",
  "key31": "5cx9czJsCPJMCRv7YXU2Y3Mjx8e1xMcbyF2fWYQAvRDQDES4BkT5aXKLvmbGiCVLituCfHZv6f4frvwxvrsSQV9S",
  "key32": "4EKz4jNC8PRrXS11EcnTjgqpg8R6uLRvbgewBibiXkgDPQ9J4WPbr92w2ajEEffM15DVayz8vkGJgGtFu7HGpHwt",
  "key33": "4YsQo2R5VXmVqs9FAe8tJ2SWMoUrUSaCaDd8j1K3fr8sNphD4UogA1Z8TCQGExcgTL1Kdn7VBiFgFsLuZLnGd5Zi",
  "key34": "5o3rVzS9WWAd3yp6iu7gNUg7siYuN4Abavk3hzvoUHed9ewqpo3JRrXpaZnBPYsRShbqhXhpdW8V9p96u5HzfdsA",
  "key35": "3V7eNZ6YMx23dvkesfp9izjz5gAwUSjLrus8kz17dZ67fntakcjSqJc3v8SmiewLQYBgqCAyxcPqsT5XTekF6pK8",
  "key36": "5Mde4inStXns2c5qCB1LFdbRJPn4hqXuvdg1Qq9GMFgANMu8gTRfJ6ZQfEKMZVodMHp6E3kRTVbpZ2mDnB25Nkw8",
  "key37": "2LZrv18WDPUFgQwgxX5cT19QtSJv4NYLjdPtn49NAb3hkcrDyZCfekskKKmVXd6vN85VMxd98AcK57FFUjubkpHi",
  "key38": "S1i71tMRJNtyNqvGwWXKMtZ6E6FYhbzKYC4PAdPsyiMPB9FeKU6im8TsExiJKiHngPmSHMUvwGeEaLCn2uMKrPs"
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
