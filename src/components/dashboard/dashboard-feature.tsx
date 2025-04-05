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
    "qr6sZMD86ri4XPucUvDhxNWSc4s4L2nD4KR2mcSZwJqjty62ceb4F6qP7i3GXPo9YUZDAtbLXMuwjhH6X1eXny5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59pSMnZD6Rgdz5wSHo8JSbMbWduoChAiDJFHGgd4cFGeCPZxgcfvFZJjrzCxyvC8rEq28bgnkbY4StMZMi8NCvQX",
  "key1": "3zBcdMbN97xfqjhAXWXprx499U1EnFoZQCZrabbNdXUoZQwNqrNLj9Fhfi5bfHSyxFpTJaLfsBuEHjrTdYJpfVky",
  "key2": "3Jaj45ssEHY8MSdVWm4o2JgUgyNS7HHp1rxf2MX4HsGoowcRZod9D3crC3QQhwG49o77YZirEj9rejT5sU7bebFk",
  "key3": "4VLvv9oo1GcEw3pakcB1cgFzrLgUqSzhGN2ZeyFg2E7p2eeQmTV5zxvUzBqYsZoPdA6ENfM5Yd4sLBkqnNBGXkqn",
  "key4": "5pB6t93y8cugtQngBacJQpSLGMwyN4e2gUSPybH7hyqg6Lvci9n9tYVTCvFFXhDPmvaym1DhYhPVHcFVBR8iRvVi",
  "key5": "GThhrJ3ppZSkCpfjUpSBnaH7cbGWRMcpKtYbPWFGJQBJBE4B8ZUqxshRsL1DpKGp9iR43wuYAuMz7Z4zF9UBHpc",
  "key6": "4T45bUZun8ABQCscKNV4AmKWBcwzJPZ8WQcdvoQwFx8UoAMdWKFnaXvBi3NbBimrWmzNRHk1yghEtY8KLn5bQLTd",
  "key7": "2woPKytZgoZYxTwn8Jpvm4cqvSS2gErvqgothRfeRoecwar157ncrfuVUxGv42TKSMWDKQv8zbyzBnfdovszj7u",
  "key8": "3fwM9PFcRy2FWkdhQxe8LvdXvb7Jbn9bB4dTfWR6dPi7EpDExRT7d7SiamP9kTQ5LA9D6fGydqsjtmir3yoimaY4",
  "key9": "26PQvc3WbtHHgzGJrbneFQKbuLS7BY8cSYnsKbE6dgcSwNfV81mhoPuHWtyxf9gSVHePMrGv6JoffoBHuRLCk8Hm",
  "key10": "3kCdnai1pH4wvTcnoqTid3QMHynpQxossdwYbbSvpyD3NAWJwDbYE9ay2XXuHxsZ8Hvqwq68Bc8igj8nfp28yi8B",
  "key11": "2G7H8EfbGRxLeoqDTEeP5eunBBzivFSefQMiBsFuCXDrPnB3ubgKMfbt7sDZmFwQW63EprGDL6x5fXVNLid89G19",
  "key12": "8CnzbdrSA8QrKh2BBtm52wpUBFp71xQdjuiaiKqy4sY893GQAqrY6DSC12dgBh83iiUXbPWgx5ooqgYDr5UqFnT",
  "key13": "4fkV94qeeHxkeeBoZwLvFdgTtUZLDSWNvDqoUBskXdbLkEHsqFULMQfBDdkMdxHf1dE9mcMFnM1BMtbkUEhFSEdM",
  "key14": "wEPz8zM462JuZsoaizeSthzeguJVNNMTsBzHZm646DBv8mwen8wwV6VeKvPAujtFBXBaSYX6HDaiBHS1RprGAwW",
  "key15": "pe953n1R2U3zAMuuzs2fyRhiqipKic6TdSmAoZymkSNfcyuzLgxVf3giZ4uawya2GPamyokEgpog88kMM4wYQpB",
  "key16": "2YH1XdfnqM3Sxerq3wq3qrpGsswpaF73h4wevKKr2Pci2ufsuXpmuixdQWJefTz9KssTemoZtH4iV2bLNcpR3h1B",
  "key17": "5GyFwf4WFkhkD7TAQzkXXuVnTJzQCwU9cVwgKqzKC1itkMZxG6BKCkd1bE1DpydHWwpMrtArv4ALwFsmGDbwxD7t",
  "key18": "2P3Xes1cucZMKKnsXHcTuGmzsME4vB45fdMAi6RS8DK3CmKYH2HT6Gdd4qLYMEAY5LGwySp72iQwHD9hGiuEetpF",
  "key19": "3JvBWgvGKQcB6PmGegFPQXZDaJzAAsK29ciSnU7icWDcCBtArAweph1rExVfKTYpimkwjezU1obX5DPTHPwV9251",
  "key20": "29hRhLu1dm5kj8qdjmJdc6bw8Jtqafv96oiJvbPBinKvGUwce7qmL9u4ne1UDvKHoh8ACPftSktnYvx5y7Vq9K8P",
  "key21": "2vRX1LSjH4EtR39bv8rfgFqdU9Te3EnGLk5f1rahxzGRDFdBpUxfErvSJvBM7KLkEqNhLxxzSNqLrQuc3xiYDkE3",
  "key22": "3XLXsA7m55Y1ToX5g8jz8M7B2YWmPmX4gZadLpgQZp4QMgXtn9LzcHWHgmAwkU1tLMzoyZGSUbnX92xCXknnkbE4",
  "key23": "4aVoVgjsq2LgUL4gWivCbj25t2kGa2LpKiKwzzX8dK3yx4xYb41NLHZo6wZRrXcnhouCe9qfqPJGc74tMBagHoMd",
  "key24": "25aYQUiF9VonMd8RHhMb12uNymmVajgiF2DrwF3DnqbE1KHhZArEKfQTDXfFGAFtZde3n9xHEATnSLg7RmNC5VUj",
  "key25": "3UWGKwhqpA5roNsYxkhKdnPfswh5sh4N4Pth2nuvf6uwujwWxiPWGoPGjQVWknh5WvjXYbrcjjtewttNRZ1Bze6e",
  "key26": "5PrtoY8K5JZ77SUkHBkmA24DS2wh7ENTYwnVd1pjmX8xTx3b3kwxxVYEhgxAduW8NKL5Qt6nk3EJdkWiPbikNM2o",
  "key27": "5ccPp4dkqk66YnoXtwyQL7qnaUmk56L6KYXewhcFBkWTN6EoswoeU6upwqrZD8pM4phbtbwtK9CrU2uMQ9rseEqh",
  "key28": "eHPP9TdnhWBuEYCz3bMafCAAtiX63NnWN3CKNV6z6UefcdiZ2RwdkXhvA2RKmbDi2oCeMk12UEro1HSBizZ9eRB",
  "key29": "3Ff8nfWsSgGci1QUgVWybE6ij9Ejzrc4T9TpCYG4WbWsmuR1xSQ8hx6eoeqpJQ8QzPwNKkEx5UXoCQm42fLdkxiG",
  "key30": "PvjXZ1M3Y5dnuipkhEtHLgGE1eQ38dmFfzmt8BgbdW8bTdU7XF6CRhvk5MZudwsaGPtioHUPB5SALtndWVN8dM1",
  "key31": "2o9RYku5EjYTfLgBuHaNiPfMGd1p2D33yJ23jbL4hkM6MANJMet169akaqzjvxzcQy5Z6yji61XQegR9YbG7xi8B",
  "key32": "3hpjyCV1PXYMRfwBjQLnJQygkpKmy8NFscMRTXpFfR2HCSuvy9AyW6Shb2TNgsRtxtmaWHg5K1mGEKNaBmwhxsoe",
  "key33": "39Azh3HcWsyjLRTSCtx96tz26Yw8jubiA3zDzH7YYxwpN6MpGTwVUhf5nhtJFsuEYvqYp7kYKnMorow8bWUQM9Rt",
  "key34": "2fw7CPQApjYbK6C6A1GPbGJ37BKazAPjVwYQPgprgb5KRZm7sFXPwrWbgpiKs6P8AWXWHwjFw8hcSxYnvnCdz1SC",
  "key35": "3qeQqdMTduFjwFyivn7NSvLay8Gsk3YYrJdH9qr78hkn8X3BLeFS6QryaUo8upHGKNNstn2UQ7vViMCWCMuU4RGi",
  "key36": "2G3gaA26zomHwzzF4FULb6TbJVbzfLgycfVSPDSVsVUh6c5pvWH3dKDvwLvaTzMLAyBcvVTiwSj6uB3iVrSnEFjM"
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
