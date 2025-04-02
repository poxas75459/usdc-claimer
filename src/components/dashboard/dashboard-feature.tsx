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
    "3CZMadWtaeE2bQmDDXJSk9p1zynmPR8NDHk15sbqpYZqVKbKC2TWspsJQ6iqRk5QV8vmhnqh33FZ2KVK77X9FQQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CFrJMXhNc3DvQQsYcsi8o9PXuBrT5rcUCNK6Ep6xbNtNbNaRyKn84iqx8LtYJsGMcLwBTtWD5X7DyTLoZGKnL4Y",
  "key1": "3GiwVmStMsfNw6rWqzQqXo1Yt5yE6BsdEUTudzAmosWg8cxsPQYq1mPi9JCsnE1ioBTRCcvsgwtih6KkX9xCGTGv",
  "key2": "MGnQT4Zxn9A18fdtPa6NpMfT43k3zK7YK8jBsgGnDZsEG8h41MRmJ52eK9XuBeT3pMRahd1YRRTpGeHxLobSArD",
  "key3": "5zVVSsmkN3GzC7dfmQ6YTNcQwyEtGgSvjeKuUqS29u12MXvaiVpWddbghm9z5Jrhb4ohvHgk3rAsgRsNCtrn5V9P",
  "key4": "59GNSDmcPAUTE2xNitsA5PfsfhPbHHDhg1KjEhPkAi8mULEF3bFRi9LBBfCFzgD7Zm9so3Rgdm8D7UhJdFeVHQGx",
  "key5": "9dh8S4Fg9xsbk3NJGq21teniUFardNZm3vDn8eEasnD4nd7Yf9LeqjyJumKWGmoyDMAHik9nhkwWKVuT1d5rS6K",
  "key6": "BoEN4AWdWZyJcSNcKaP8zYbP8v3dB6n2Kj7rd9LRRGDxDRYaZPxQGp6jVjR2U2Q54quyig7G2ZQP9bqjAm9tzhD",
  "key7": "4cJMGD8yF44cHrtYKA4FPDthG1f2Um21fAbgmx4hN6VjbQBGrBZPnQQfXistrXVoYweh1Bp3gh4Dn9d1qPKcX2gi",
  "key8": "3T3jGHqDSDMHUVx6m4KyHVGp9vAfeifNmySMoGmnWmi9T5Rf8VCC1SmK1tMswqpeeRywBrp5xS4tW2roQTtvL8Gm",
  "key9": "4j6z1DP6D4azfcnhGt6gZGvbrxurDGTGsaAxL9CL66p6QYck9qoTuMvjgz7cSujTAyJDveavh4sZQoSC6Aw4YJZZ",
  "key10": "5HdZRTaFAC4ncoPEEKaX9ccqNyoyS9P3hx5gLHDcRmgU3SUGvxBKL4D2DTboTnxn73jF53EUBphEzwBBuFXPuPh6",
  "key11": "WdSj4JeDEUF48aSxoHnXRnDEfwtnCJbmXiy57xakwxJhzAZuFdkHZf3Nam3cTisGytxBXT7X8wgq3yXtz5uWFSC",
  "key12": "4qRBuFAbz9L2ULYGTCX1b3PoKsbsPCaXRyKEwGyi2JFDH68xLMQcqabt7kNRgBRDoZP1thMG3dqnVm5xeGwau3xE",
  "key13": "5hyHNQmCpsFEzP1F5236uCxtCLcdbzfhKywLMAFR8m4xoPXGBrDAgPJqgjB1VCzqmn6pNAuNWHwoibAW12yLxC1q",
  "key14": "2QPD9L1NkF1UsFJcs1UKrDQa63bifXHWRNhMduNLP8ekrATbBCaj7mvBTWFFB2TdFz3M7JqjqWeYDuwqxJZ8CXGV",
  "key15": "3d4kCZpH6Xg6JhjyLUR9TjSh3fea7CzYheg3Zub48Bg5Vqrv4QjQ8aFBerbUnyP2i7kEfPpXsDSkgGCuyTiM81z1",
  "key16": "5RKLZcGbCmfw3yTBiLMrnfzPW83ia2pRKLSGu97xYyVhaqYrur5a5iZ6zbWb9hnQ135ZgKo7W3X15RTwkSEeWUNc",
  "key17": "2qJbvxB93zN1BjtNs8t4mwnSTXfarfBZmZmpgxb3d94Vys3qbtBCjNgGL7Va4qvHrzRxnGe5u78EmS6xQzxzi1fq",
  "key18": "PX31QsDAWqZCvQFiEFCb6eYc1CyH25gxxfZg1YDei721fqr27TZ1QxC2JsCyj6kREjq22Hf4B82qfceWyp3Mgvc",
  "key19": "4pqDmdKKDfpkHS33KD3cVXWYX6Npvj2p2QF2doEFp8P7fQa7FaQXv3UVKVkJnDNu9Sjz7cBGsAf36cAjvEL9E7M3",
  "key20": "5cZbuSBVEAmqDYaMzPeNPM9kJKSNNQC8UdvaCpzgNQ3f4iHf3f7TtbzYZdQ8MN9eDbMWDrq1PV62XuHZQh5tTinp",
  "key21": "33KCcBCLFqoqfaPCgJu3jAGwmMURqP9J1d596shntahvJv6L1Hiq1rHTUZPNXwExzcFYjwaKpGqtbu762MVyxWM4",
  "key22": "pAyAxVD5s2o47Wz9piWJnyuLXEQp3R5aC41jvYE3zuYUSpFnw5kUm7jbW1s9qWz86fT2qeJEZNSJXv9EXCkMN2X",
  "key23": "5GSF8BpwDfiJbz4cooennsyggmqBh5Td9XBSA2dSkVmzbCkowXrwxbvkrux8UVfmkbNqpWy1imBtCMeBZkvNWGfw",
  "key24": "4UfkCG5QjDUgrtuHkLShfRSmurhge5oHPEiswnEvQFEzvsfm2M8p77Ekxiaq1H5WQQBmz9E684HQyn58hjvpSRvQ",
  "key25": "5zWwZECSVMi8zuaQYzMt21UKN4KMNiPrJvn33D4HJfNJ5fsBsJErjskEvWqsGZ2uGPZZwHs67MD9dD31BghKCa6H",
  "key26": "4f5ifsF9DmiJJSZEZGxtcgRosQ6YFRAdxYb5vaUz1DeFdK3bAZo8v3MTfngJMyxiijb5uJv7idxo3fMx4D68dtFQ",
  "key27": "4TfH29rtyrciexUnMjSYJUEJuJtgNjREb62n5e96XRSrxMip78AY2vkW34Y8CP5NcWtZx7DjAoTcaboTZt73JttL",
  "key28": "2NphYjUy9hc1r7n5EcXv7UBggaa2LqcpuxWGEFnQfnaULQBTxH1gdkYrPkdpxiXaHAwPZdeNeho2d8bpNviijmnD",
  "key29": "TeFXwpMxWYcbgiaWJKrLu3ZZaUiDftpEZsEUtwps3VtcwPkYBY55VoBYntyXnsR3qaSoGy1VPS3Ajofqu1fv5oU",
  "key30": "3mHsQF2pfUDUFbhYZPSeU1wJhJpa9axyxf4XWzkVzoRES6pCeWiCh5bkhgpSxz6ub7bQMi46xzpsve9RLbY3CTJj",
  "key31": "3fTpsADoYMa4Epf3iGxe6FVTCE5HhKAkouwwj5NocQkgX6MVfRucjsttcXuRJYvpJLQnvfvn7CU8fM4Dv1hxeCEA",
  "key32": "3JoKurULd4oNg5qjWeSHCMUcVK8cGYWK8sFUZu4EhaLLQpfx3mvEta99c1dBUHH3iP8M4HpuESaCjGfVcELDmx1d",
  "key33": "t4cZbr9w59Tq4tc9FZUFtADQ1KS8jCizdtAVqUDPv2aUgxffiupqneP13reWK8rJRPJx1HYv8AfZ8uPkdL8AwA2",
  "key34": "XHSx6MPLJSdDpj1gNtfGPkJ7M6g5Ys1BeVEe7EnNAtVbQqsxQVwch26rMzD4v8ymVL9rbeY8GURSHJgsHp2DXPH",
  "key35": "vC2eJXBMks2KtRWG2TG8PSC89gBudyP5yseEuYkwaBeAfGdFVU2Tq6F92weQa5jL95bX2sQrjvpTC4KZPkcJrcS",
  "key36": "tDtoZN5zMtYiGkzLVzY6K5X8BkvJcfmnLPqBf3BoiyEJBFis6yqzbc3GpwC4GHLbTktmjwtu6irTu5ZG5EzEsVc",
  "key37": "3rBf2BTxBojWfBFJrCfXeZoySS6EHF3o5RyntM8gb2DbdsHbkPyYKz5xT4wpAkjqcivVz3bL5B5eQXC4cpxHRskM"
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
