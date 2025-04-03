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
    "3CyjyNWW5pJXuPCA4R5DAkzwCHFh3MkKYziJqDFccHxYaP3m2iaVjDAGMoENgzxyfMy8aPycExC3ivUysh54MgKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zc51Qqgfdh2UMqYroq6Y3ijxBoNeBgc9HfL1ssbiEukEhhvECr8zvjNNBpDqxePEk1VvjmZWgjgyg7szFyoKqkf",
  "key1": "48RoAR8QwEwGx4RmbyDkyK2mVXNWFxSLKm5Hq9boqQ5w6aPC8UYriajUxwvyteBp5NszvfS7QDaTxY1kr5FUg6FN",
  "key2": "5V2UETwxPuouobGjLFUHh3yYp2QFiGAeq3t7mXKMq1J3bZsiqeTB5fKyYgJ3Kd41S8a51Z1BuWxS3L7i26nqpfoL",
  "key3": "3quesbPXeo631T5aGy3JRQTsYu8XkFbFPP6c1mjsn59wZbrfPq4qGepuvCxvdfvTi4cKXQQ9KhYPotbwrUBCu5A6",
  "key4": "3Zoy1BXao24CSLm773fXymqV9UoKKUoMpa4y5WFmMP5d5UfrA9zuG2UsxyJScdtE7TvSZz3ChKnQ4cJS4VTUErh2",
  "key5": "okp8ARVZG5PAZncAV6eqoxqhT67P19J9sAXSeHTDrQPZsLqdvbDhiDkp1C9mGsgnQpiLRCCpmS6VRWFa1WKTktt",
  "key6": "Jb2TmLoizyMvmgwSz5AZC91vjkQD3a7FM9KN9iaz65Nn9Mo8LyGmQRjRqyPsbvvrdmzFAYbQX9idm2iRjpByeZJ",
  "key7": "mGZ7sKbxSQCHBsC9afr5QAMWA3jeEXa1cfH9DbLQE6t1NdvR6jK9qy6rHecuo6cXKZfh5AYfxT3JjXRq6nda63m",
  "key8": "2QvpKfHET2DMpK7YUq5TPTPZ6Fv4Ga5YKUpNVgMPh5qNQbqn1MPxUjzZYyuxPPKrLhuXDeqbXGMwAQSXa7YNZztH",
  "key9": "47C2ieyXqqXh1RY5jcu8dg1JjdsaXTpn8DVrrzPH5CjVBFPKGdaxKeYNc6K93P9iZbG7Fc2u2G69j2zWNXPbGH15",
  "key10": "5YahWFW8pP5iyCo28PWYvC1y7X2S4nj7tLohZyo8UooKf1WncQAjbwAiwFqFpKwQw4fnFhHfKFJWajUrjXoPBRCc",
  "key11": "26mxoLKtipZnxkgfG8KhNZqQ4FPZkbTqsa3h7WjpXqpmN2rN3rh1QkHhwvLgAtdFvTwQeyxv3yFr9i6FiiG1kC5A",
  "key12": "55X3ToK6g1cy9oZpH1vzmMAqR8mHJRnEh7XR6b8zZKjZ7JGSc8F7gzRznmVWbX4XUkHjzsmVAtdNnPzvhquvDySg",
  "key13": "4gZrP9fouZeMwo3LaZJDX8b6GHqS7Uq62i1RU6PZxBu7apN14YD65FbZAFQYdhAzr4NRtuohbphhMyi8KcRQgBXr",
  "key14": "V7N5NUVwnLYUMGWbDFehthZ3chyXRS1e3jFJgBRqf1zXCKCDeAa77jwtgtZvCHB5d5y4wF9i5jv7PhGXStrrbgb",
  "key15": "2zydnV4uc1zTnsik5uCypXbZHgWZBcsm3puiiJKUvGjMVfpSwf9Bq6V2U8PKDvyQ8egfmwzGDf2BYpNTs8cnZVCp",
  "key16": "3HoJFfUQRhYYo5qpS41kKGHG7ZfkyvyFNN8z2qVo34w5Cjfyzu4ykjjVghD3YbDbTMVXFxprqJU5FWTv6sQfTuUQ",
  "key17": "4Z6ZtowwXhbscQJrajbXrcTSUpaSNR1YiMchEiKKeBv4kEwpXH3rvzoSBWRYexWKbFXU1zDuhrtTa4H615fYczJb",
  "key18": "2bRSz64uqFmjTJPEEaTT5WigRDJSHH6s4d7Y8Z5SnL1sdVjRDYMbirQro8DYoy8rrDc7koxe2m9d6ta42SWsHVv",
  "key19": "5kPrc6Mys74paFQUFy8MLtGiuYrW9nG4G3YkbNPkg2TBe9HoxKNpB619UY6hKntdEVFDKvoLpXR6K7rFGv1YfYRp",
  "key20": "4gCuxMt9ozobnx5421juoacWfuAxYbcnbpYCpnJB7Ynv8voXxWx3vtUabKaAE5JE8V38DeS4awLdhMmk2UNbK9r2",
  "key21": "26y3pMkUvLyJFvoFPwmgD3CAVm771qWx9G8XSmdAD7umdwCspqXHFgVvKswWV64PC532Wkd2NPiXzdfKkuMqvLwo",
  "key22": "3pQDuCVhTnwfWbFHw5TWGwLtw1ADLCDjr9onJZw65QSk2ZkfNYkdPbGBgaq8EP6S6U8Cim1zhsuBhTRJk4WqBQJq",
  "key23": "2FiLwB8RwDk1Cx48pADLUnjenEQZ2zmBMr39AyrbF4rRSNmvneZsqE5gmRk9Kbw1NDd2GNybQDZkundXAXaMLpRo",
  "key24": "4htMVRUpj6b1tZ5Xm4PcZwLivatkSNs5qN2PnxfsYX143MZQ1ghbTGJtDGP4o9aBR7wyTCzwhpqXpni8KnTTQD6q",
  "key25": "2XHD5wXY6pQ2NM6RNdP8fsspXnPW7qBhwzo38Yv7d2TPHfATu4jajVu3S1EmyRu9yeWdeJN6Waxc75zyoW9AZ2Fm",
  "key26": "2GRpnaFC2MgmHFZ4HyQGAstSNupYopaYCQ5cbrqcJnQaQgBSaXQ148d2JQi4BFKanv5WRPB5Tu1SiUARZeA2k8SQ",
  "key27": "4tUkqcZMJSN4Wmxb3UNKXd1yrnqjBkKSNnVnDU5btksmXeTExf2PBogNykqLZhSdxkJjvouKcDwaDVHgTvwFCPbY",
  "key28": "2agZ18HwGPstaF8Pif3bwitHhbWNN1euvPqBQ2rLwhST51rLWkfGEAJAm4xnu7mdXiawRMLTLt3tqCHXw7uFS5K2",
  "key29": "4L5edo5zx9FwCiq3JspXSizp5hjwKnpwK8vMQCrDQCaTgsQDsp6HFHfH53d9jgVnWZq8qZpzx6kEtqJ98HsGB5VQ",
  "key30": "5bAmrHMQmYSJkjmbksrUR8HS4cDpG3chAhLgCefh7MXvPZyt8xm4HYGucPC9y6rUzV4xMaz14URe7R44v1PDupr7",
  "key31": "5xKgPtw8LZxvQJjjAFY69DD9LAokfH7ivCKJwjVGS1ULn5gz7ysMRFaexq4fSehm5XgaPtDELUvebB6QjEQtHLj9",
  "key32": "fgAcij6WwiQDKSRErR9ygfdBTUuaAh62QiVgCqPDX3eFqM56cRhvvk4nMu98MXiCTHkEFHFCaUKTqqyHby4z7Ge",
  "key33": "5tukbs39W7FGKTfguHcb8wEes7EgpxKLMMc3RCm8kf6HnPvYjAxTKD4vxGUGmy4PKL4J3BzXZ2e7gXejTR57i7W5",
  "key34": "5Ts6MhyCu743oFVzhRcZKMrXRkbeXSEcUhV5vaY2iV5jm84penwRaFHK9hkQuZgoyf1YxGsmFaq5v93AU8y4SsCn",
  "key35": "2H32YjWMd2MXx9tWhcaZSgsQcamPx9pGENCw3Zhpkb2vdN6zsnmifxzoQYQebNRb9doEQS2etTkSN8TBsEQh6hPH",
  "key36": "dSZ1z6chuoLK1J8ZYdpeUA7qjN28wLrXLgxVpf8VMtV4h62XaVtHfZZzzKHHj6PF5LeH2hZyBbwsNdVLhR6Koa3",
  "key37": "2dGKBEvsvropmHBY7C1w51hdqVFdr67RvCG3Vq65G6bBJ6yDgCoLYTbdTo7QFMHs2P9KvvdJG8BJqji3phB1qn4x",
  "key38": "4BGTDTNt5u5FCQHWnDUAG74B3kivJgUDSMwttPT4CiKh5aWccTiJF813XPgnf9QDtucwDCpdqyPoCfKXoui71Wyy"
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
