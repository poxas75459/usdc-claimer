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
    "5cuizG2PXsrWsARZJprf7mDbYeysEpB5dDvBYbzrMoN7sCKyc1k2L9b9TehiuQDtEPUzn9LRHD5VD3phLvSGEXhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VvwhCPjouLutEfxuHVsq7yq5sw342hV34dBbqvuGCjS76tDnvi5dW5fkPgvsifbCZLpibHfxnLpKy2YSegee7B3",
  "key1": "4LtYJ4ohfmCFXzRLJmAUc1tbsc7hvr34VX2W5bXdZLaETByfUsjcn2LjGpsjqdZsvdNU1fi2YEWoRpZL2yVwqEkX",
  "key2": "51shero6258zzi7imGTroR4SUNFkCQT9d6i6TDAUALYMnULzRHqLTwWTmg4NzF3jVgjPVreT9HkDruAKAXuidRHB",
  "key3": "3nJQvjPv9VjwTEjb4r5WKtQUSrRqKk7qGSgrL1btnqrhRKYfcSPerZvCC1Sv5UDT4qigtFj8PwjUeeNgwZCAKQjT",
  "key4": "ApgKnpcMw8Bpb4QhhKprxdXNJknny4DfXkPHkAtAUcLxuLyjLy6tXPpuAH1SQuvJQbYEJBoc3ekXd9d6rKn2ntp",
  "key5": "4AjaF7SWa3f1RCoDqKaAXikJdRd3Fbz8h3Xv3WPDsuD7GHXbdfTE9e6jkZ73CiRVDtu6cKm9wHDt2c57acXfp2CN",
  "key6": "2QpdS6LGkbkf2XbbbQB6qtSa7MPcCbw7UgLfkBQdvPj3md6pUfee68ecrYb2DJQ93ExJY7aDiSZGa9Dr2VBf6eet",
  "key7": "2RVHVrx65PkiBj3ZKmbz3f1SgFGQeiDtBWu1gQXZZdDNfvJ4RtHaZY8U2TeDjo4Eem21JBfocusBvKwZKqctPYCB",
  "key8": "5DhGoeMvd7KVMumxiMhhprfvzkt16NbGf3Pwv43w2G1peV1Xbvd5euB4KBVQdmqBDV1kTb5zJqyDLACQGZDeFPvk",
  "key9": "4AXJydYtBn2LnT1x8Bevcgy6W1DnxtiTDFrzz46MHibxxSHx6ybXWCJ7u8oA3ubhpKx4PHXyocZQu6vegoXa6M8x",
  "key10": "f23CdXwyyiFMcpAFzthDhF1ievfnEMzYWGq8DuY97jqrnz38HHhMHoJWQ5kMSjZ1UdkqGz3WesAZ57vcSX1kjXJ",
  "key11": "5DmSKpvn8KfEnFy5HwGHxecVAEMmWarsVp9w7MQ9XhV33C4GRqyPi3SDd4gZY6FeYKKVviiAKN2JiMaxuq7dBRGB",
  "key12": "2FQWHxVxZvBL5y8jSoSNAQJQqgYr5BZU5sX1Chminu3CkS2XV5yYUiSjcSdMFkZem6ve5ADr8hJTyeMsELGoTaWd",
  "key13": "ZWiZdzVyAT6kGwwGkzZnGCFuswsECe9ps2SFnNZbfj8mbiscnkQJGnX6NjNf4CNiiVcUtnHkUynKSgoSsyTYCzK",
  "key14": "VxrPbLaojGJdC6XX42oDPJ1XGTgPnGfnBCZLAVNEnmUim6HFZ9xtMGQvbxSQRy2vc7igAnDRzWYN9RjP4kfUmem",
  "key15": "3dxfkVgpLXWmC8Fy1VMTjGyorDG7VqFL6pUQg8uo3kQkHuwfUkeLBYTZR1S7XN3CtyDMDaGyxWfEE6bCCBQaaQ5y",
  "key16": "4KccXi9cHYPEPRkHu4HhZEpWUSX29k6VJbPygWxVYCuiyJ1uxyAPPBcNNmhN1zdQjuUhb3m1B4E7GmcoyGwZLxoA",
  "key17": "5s42y6c9Z5Aphcsx4xF8DBeAUQZqTA5tBiwkHi7JJnBz1P2PJ49W9NM9a4VQRq4k2gVvUXxt65ZMSoVpFz5xv7qq",
  "key18": "4X7Fkvds5kNfKLEZ4qPspM8ruSC8z8ikFtX6BnR5YmzzhrUeW4jZkN4oLFQs3hgJg8kDpCdUMHZHCYEf5BPcAcWu",
  "key19": "5AyKnjBdLtAo3XdpwRaEVugbyPPKnVZTBZ1duDMkqp3n3Fv1jkPTGD4eEgSGKaBi9QnuWUXajVpAa4Vq2wUViyvv",
  "key20": "3YsPBPFZ7SsnXvGyPXBAjM61nfSEXVMD4UoQ8Roeu1tXx75mGjNDdeCiMkvmThT4FWoqwtQaiUZZ3y6BJngv7wvd",
  "key21": "5JiU4rZf36JgES5RUYVp4ptpoyKWe7c6woCAiPYUdgyNFar1YnV5s2XUpYq5hJMYK7gDhqZNba8mve4NYr7gCRab",
  "key22": "4cGqiV9sbWnJNiQwtTSCoPt3UDFja39Wpqx43ePN9NL3fRdkH8bCB4HSQTS9VertcJFarf8mXFytojxn9RWvFkb",
  "key23": "2tjgwV8yJTe5y6TazPyqjoMV8yMCEtWyk5o5YNXUW8qXSWKUsEczpAjVDGyoKLPk1HPFrxmtfMJUAewGDwpBec2w",
  "key24": "124hVn1jwH7j4rKWpAuaonfcxRX5naRk9hW2i12m844au6i1jdC6ru3owAcntZCBjfWyN3i3d9zwNt63XsNuBXpy",
  "key25": "4vka42YwLpT5rfqjANks6VQBXFUGPE2ZjyR6BFu9DxbYLhacHFXnDbHW7BvJ8PkcQmTghCaWc8pspnknWbhSmFes",
  "key26": "5FtXRULJ57rNqN1udhv2dWwFumekZurrhXqF91EkjFH1zkWrSWutC7JvgZRSPPzqamg4jYAjJfo1cPYhYKgikG5g",
  "key27": "5nd5caHYkmNX8Z8YPYczGAbeY5v6CxHJFkuWBRJR8cMTfY7s48geq5xd8KwMoKDhHLPCbdMQnGdngsmFjrh3bJpC",
  "key28": "3XrASoTb8Ut1GCi9tbZFmRL7QksKfTyBJasp9V2CXSnqyGq6do43dh5RbyDf6NkyGaQFWm4NuyJdEpHngGMnnqdj",
  "key29": "5EYMjcpMmHCbb3FJm9XJnyd1o8VNgDov93bkYHwEkTVcdZAtjg3XVb7NgcqQCdVSPHJfeAP9vqYpBDTLAUb89m9",
  "key30": "2hj3jwYT12nzUGGKMMfSGBC6tashKJJin6GgwfjAcEkQHvPcZHgKaJkALUdNpPNKRGkXw9oVggxxUWXQ9HLwtJT1",
  "key31": "3HADrYd9sM7ozcS26r8wSeXndxMoXR7PyzAv53BRys6jPSJsCaV4TX5aJD7ZAXLQAoQakC86d79vbuYJkku63U6p",
  "key32": "2XzzEiBcAmguUq3v6gRKizkhh1bA5mawdtmPZsQnusnVqvXDTbom7fznncBjQSiycFv32vKoCkvLXqDGqg3nozVv"
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
