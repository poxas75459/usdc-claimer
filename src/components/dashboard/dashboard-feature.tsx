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
    "3T6rtYNzMo4wGutZdcLuT7hh7grHCrmd5DfgPZL9irR8ZsWtRjVzvB1A8QuK6sgRXrLqoQTpgSbZNrEcjVrHa45u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NeXgDopSKx3HagvL5ZmoBmkiNv6nRPYfGkjY7iJZEWVgpRTJ4kqvQyiEnb4JXQjTTia3Wv6aWBXpEvvj2zCk1Em",
  "key1": "2Ewg4Q98iiSDyH1LRXrqMYNhTJ2f5ncKe552jY64HSJRU5YQGR8D76BstjbRDCRFDVTWxAZSX1AJ4BbvaZtctG2L",
  "key2": "2uQVp4TPhVnA7dQmZAXPEcgQcs7hPfZxDsEzYhWJVwUUyALioSCSmnMeTSMjxFKteYpppW9TWtiCvdHeo1wp5sE4",
  "key3": "4wreFcsfYw94dCB1VoeDF2HwGShbMw8Cqcw9pDv97V5ugPtUtN3XfKYENKrvgG74HEtz4hqH2KFZnWs77WGDeDoy",
  "key4": "5yNQuXaFSKzfG4v9ySUhNCMJ1Xc7Lqh15x7yT93Q8Uzw6KaqtLTZz7eHtg2mWQxng1qWSTxkigmZjxWGejRvvmPE",
  "key5": "2rr47KGbVZcQUG6iRTkAGkfimyxXXZodgV6dZ3cqotUTRjCr7gK1y9cHKhHbsHvtEL1k5sA5dkSS6Kb9DtTgd5o4",
  "key6": "4n4bynaymvKBWTCRBcFKHeHYjajWs2ZsBKVabCR61XhP6i3giVqJzzGqK3pawMLA5SuWPJvxuvLvqKYgsPX76xEg",
  "key7": "2NdRAV2ZniNMf54XU14pNTEmBZR9A1xYiLrP6nwoCaLS5JxYUWno1mb9usnSAFspjYuDtrjXG75JoqyQ66rf6B6V",
  "key8": "3UBcc3qrNNh9MaBC9goFNenDZ1rKbbRtPSsWGBLhwbqVkD6pwmGLP9YDdadKpHM5Hw1t5byjjGhMrMNPZRYxiUoa",
  "key9": "2SPorsYx9rQ4LkKoTKUk2ALQxCxGsGYFUbUsBPx1SbjkYgGrMggLDeCxtfVpcSm7dEhvBdgy1EjeK6vXBAG6Nng8",
  "key10": "55HgSz6kh9ASQPyUowWM3BTCPUmxdDbbhjprweHQKi1ehivcB2eNsFFjcnwUtdFWsUdk1E86bD5ppmgV7GGu2VsQ",
  "key11": "5hn9WQEmQmyjwUNnj7NVg1SZ552vsq61xGueMhMeRFSRhGAHfttpkGZ8Xqjhx2LGsbczUY7VRDEpnmmZ9VEws7fv",
  "key12": "4ByCzzM4Mzukqnr1Ru1ZuhuuJxoGQcA3e86oriKUZWvZfCq8SwUhXcVsXss4cg6VqJfFQrwPoPpeTFZixCH42E2C",
  "key13": "3QiKRm4LYzMxzdS741zsEzvAyydii8ptT1CPNHre87CzqS1ggifzngFjXYfUDyerTY3u5fU2peFV71RpqBpmiR1D",
  "key14": "4UWCriYdHh5BBPu5TGJEmpSDt1W3QHSTXXqYy1H1RpVFG3iMqEMEVuLk6Vsb5P2m6pfsVBtQym9gLRXrW3CADAoP",
  "key15": "5bU9PzF3mZXZ5n83k5Yr8F27cJF2is9ai8L6Mfj5LErV4ct6tCqW6QssCFV9v4maC3RSgp5CBhPduYBLoNNBWHhQ",
  "key16": "2vYFjxBpRs5G8YcbnJyCfrewcMQJNZEA9mj6DYVgiSXuGnTjUh4Vd5sQYALfp8NeceDbBNmbLHA5DpD5yjAwZdeA",
  "key17": "26haoALHWSWG2xYXaaqAtthEr3KvRgCvHh4L9LfcMYhhFA1kSAcR34UFkCFWKHW2QNys38BZBwvrcsECjf2mnh56",
  "key18": "5RAEaiY43gsNTjq3Ynqjc3cLYathCxedKvuAwkKvoSQ72feSrNGmB2j59hFCAhgaAV5GRtHXhNNATRK3kwRSwsKx",
  "key19": "3NBQjHsfBJrD1muaPTeJVaSgjENyLnEbXz7RkPTPZybo5zHx7xMzLy9np2iR2A9x8cbRnpipCdxXFq2mVm3GMZiq",
  "key20": "5eSVWpeMRg5UZ8zw9WsZX2TgkXmkG7CC2qKVNSbjP3uE9kmrmXvQAU2L9Jk8AN7mdqH5o9zG9QD8ahtuXXy1mJGM",
  "key21": "61MyN6AeGM5yhtF9VzS5KiSbt62vsLpC5Dv9mB9kyoDuMgaFDrTzC1iJKMsQNLQvPcoeVGW5d8bvzsXiYCXqkYry",
  "key22": "611G68jiJAmR4HujSHrDHdfUegWVTSntGqjvXjvxYecHZHQMZstrxCkEkXXJPjYs48SDUZe8Tux61j3GuL194hJ6",
  "key23": "UN5a8a3rt5vGeWWu6KVJVrLKtifxV7zbUwqhLQfrYbw5Kw7sjka3dRnPc8yrKkMFDo98KQMDwCtPaAG4nLgfnyL",
  "key24": "3xbRFbv9qJgNuHcr6zMzn6nLcRKUE8s9AmiKbRub2kijFfBMs33oKmP5t8Mw5Qa8k6deU2LtVsxU5tm3xncabYR2",
  "key25": "2V6fEuYG1pKfTkxppYhUqGNDdtmXi63h8JoT7vRuugE1NCiBa6SHg7dQVuJHPKYkC1VQsDiVjSAwvF9Py6fcqLWE",
  "key26": "2PibhCRJAUMLiKoVqVJysHK5FyJaowCJjjHYVcrSPBWhdZ3GCYBMyGTa79mrdzi3QVySpcYaSr1ZHnAcY68QC924",
  "key27": "5NZqQYoEgWpY3Hv7dWgfQTq8f6NQ1U2xT39jV17rVdNguQznwyp7hawYDvoVzvbJfSEtBhVhGGEpSiwcUSQbiWkw",
  "key28": "ZrUJR5oJEp8vrq2FX1qYW1kvwWpAJNrKG7f3ARCZ6DGKjPetWrJfMxoEZ9iFMqiEULuu4Utw4JCtqPzM1FDySeF",
  "key29": "Bk2DeHpKb8vQbM7k33eh4TSZ5tSpsFXCqFfAsMSMHhrMZ9MLMw7wr18gxeLjWaiuFfZR6zyCmevc47TpwjLG7VT"
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
