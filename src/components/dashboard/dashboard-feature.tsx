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
    "2Xdj1jdLbP993VPa5ccNmEk5wJSBCN3813YT4Fqb5oy4p56f44Ja74q3L4mPKiXGHGCkQS8FRgQXkisGSDcP9fNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ci1mVDyTMS8kj4KvnFByLBgugNRiqB8JZYe6WNMnmkTFUu6WRtUzH9ojZZneznQQQN5n9mtcD8j3bAwRJC7vYkt",
  "key1": "tyDwzRnDC29Yrftme4od3AGm8gzhQBijNrZ7nwA9VZ7YyUko43QheZP48MffkwLyPxnXB1Vvfchx75savUcdxGD",
  "key2": "DJTz3oXJqoakZGsd2Wzj5KcB5vS2wdxyhYScWxPgEaqVEZDN1szaMede3JqtraKc2WisCPmEoqqiPmn7Q6A2Puu",
  "key3": "4oZyJYmAR1c7xVDDxS7VZpC7YAJ256PbFv8wuWPqjAZsJ9E8txupQoPbWACskUtnniekADqUZBGzteXu2jGTkNbA",
  "key4": "4eSjZ5kb16ouWEK5W51WCqWmmY8iSuxt9TUnnx1bqzaBqQ5FU8dtMqwLKmgubdjf2vWTMYd6XJKKqWj1DN373HCu",
  "key5": "1BkrFy6FGNYmERVjVMZbHB7ZK9RpstL3Sfe852rGitdUKURenjVTPJ8D7szUDoXqcCvBkxpN9bC1ij9zVCu175F",
  "key6": "4SvHzEoJkMcy5SJs2ZohSHwGvUwTK6pNZSR4TyYFLjGf2GhUTzJ9DFc7CWe5ra1K91qp6gknkQqUrF5Yw6ZVc3pb",
  "key7": "5THL2fCPhwvAypqP51SYBRXaC5NZna62e9jhguUnQJ4wQMGjCzYmwaZhmEvbPTMtWDBWoTjMh35jasnQByz3eynY",
  "key8": "4sgLCBt1oHqM6KDBLMDdGMaQxrxg3vk51K9C5WVSxQjfK5N3UZbAeopLJ8198JZtejqUehanHd7ss8ZjkxWmK3i7",
  "key9": "3YAi7ZXQhdG4BckrkNBovJ8kLBsdLrGVWwrRPRSWnkZBG3VcAwhjSFGCU5BR7fzqB2Ks6AMPcaME9wgyKZ1sGxdf",
  "key10": "57BWNxtQiN26kiVbH43rqmCec2NXe1Lh48XnhxSuEDneKcuNYJbxW1yQ291b8wEpZairswd6qhyEp74t5ppnGcAg",
  "key11": "4pcW9HP16E1ZdKWrKt7EcrHcxxY4Kx1AxGJ4trcKdMv9ZVJEezditSi8Rsbu5sYL9cuJEvDkuiDRE2kfkBpmUmHe",
  "key12": "4SL5acur8RGDvHEXhbfVRYse5LJbjh2Zw7wcZijZkbLSoRsVkgNkbagyphvQzw5M2HrFmXgtFWEmDAa5p8S6XLon",
  "key13": "5ftdRUKyPBHbTrCntVg6WgKASq9tukAuKUZraf36izFajQe497txHktL1xi9L2e7egejNtiGSx4BwgERxtCuWLrE",
  "key14": "2skPRMiHn8g8oM2pZ83qPCfz9EwPJxZvu2S98BiiMt9znd1C9yD3e7hrrFsop4Gb2yEbHZrH8enSQR4Cqd44QD55",
  "key15": "5vMGMEjW3uQBJ7SMwmUkpiXAN2yTyupPBmq4Ro8YbCEXk8SHyfWPL5C7fU1smq4tWArHKm1yFMb2S6va2ARifmRh",
  "key16": "53kBqEQada8symatehNjpnXX3ymDmyic6NKht2vfpHzqo3m9j6TVoKohx3QMXJG26PeSvZNJYMZ5SNCxUH9Queip",
  "key17": "4bHAGgo4dMWgneGrnZNU1huwxpceD3EQ9w3XAMGQvjfP9RnA7jTd5TBKYcFCnFWebVxwUNhALEAzEbHr8wtjWPVs",
  "key18": "3JaFjVFWAKJN3Zje1t5RRWksG6PX7h51EtgMgn1n74886MxFihqHhdNa4Lak151T6L1oJDvyivKa6QBLik1we3Sb",
  "key19": "38ZX6VLwhYM8spkfWiigbJzSRWzTRF2UNSdzNkpQSNJumc52bkRqeMo1oWfwRgaJ3ZjuuzdHXYUtLtVoFkVoCssA",
  "key20": "3nYCJzHxjpf9jMpet8gohEhcu1KLv2mqPoncN8bdwnaWsgRR5ZGZATi1GTWbxGvjh93ijGAdnQQj6uqpGHLXWWKw",
  "key21": "3GELifC5Ew5fepgH8s7fZNB9np5HZKJSRiXGwNfCzokzE2fzahk8dgsgXNLXuc2jj7PvvtRWNHMaQdWaEsy6a8ij",
  "key22": "yaucQ8h3vxjfwafAhLasa6ViRJUiqBC9iNK2fRBPydLoKJN7pEBBZpuek6E4PrRP2PAKMVUWFSdXYwHmu3efS24",
  "key23": "4VUdmGUzLzMM4r2XD8R9z32N2rR3Ck6wrMtXBECqLPRt61ANyzeZqYqVseKs5JpYK6ZHG4H2VpuFFDetqN1J6Hyt",
  "key24": "3277K4pMYgAThDaAEsogpvkD43LFyxSuZjjfBpyU8gRp4AE79BQCsvLJkpAmDLyPnGtwMH3MAWe5iTY6CRujNHBu",
  "key25": "B2UkCNTzfKyEKiZz88tfJMu453w6txCmCwvKtgykZKEES5B8UuzNBgWD2f7CVJDvSR9gCF3BEdPD9bSkYfTSDaF",
  "key26": "28WzRd7HsgwufSmqXLMRaS5wJQng7tzRnPA9iynEuvMPXbUPHFhrNSsM8JnTub2A51aHrVd7WbCkQFsHPBY5moVt",
  "key27": "5zuQwQeShjURmHhQijnqzN8eETVNhLVJjadKyHbEYRDEKnQ5AaY4vF9VzTbokXo3p9xDEo6qhAz5J4GEMFDfAStv",
  "key28": "aa7zSHFmjSN6k2sZUF9hAq2dkrV1HeBmWLgd3e88L3WsR21m8eV1hRL7LHbbeNghbFJ5ABVFMcekwdjcS8pHYPH",
  "key29": "67WLh7K4yAgtKT7jY18aazhSNunWq9h2EGLzMo5s5Ajjdm83jYyNAM5SmwAEkhsypvS1XTX8hyAQpC6PHnj4vEZf",
  "key30": "3XXuFZMySe5WsdcGKTMs3wNCbeZJx58ujFJzuh45Sguzpf88vkn2fL5djfmco3Rhvt6Gq6LuxWCRHjxdZ2H94EDk",
  "key31": "5oQKznR4yQMq6r8p2GKc5aVM9UDV21GVmui9kthgUZAK3WYb4FJYnktzWLFAfgXoV9GBhYFZKJkrkKJuSXB8NGvW",
  "key32": "9U555sQJRgvLnvqoPGURV3JFhdiGopXsVwg7L4QYRZUCAH7hYPndjkzUSAewz88s728MvikY3DG4MA5seE2w22A"
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
