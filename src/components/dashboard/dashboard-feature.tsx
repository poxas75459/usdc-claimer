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
    "4dHfHwvmvP3xP92RKuVmf7Updmrf1p6fFjUZyYNkUKLFyK5aLMv8RyA8TnSHfM3gwLCsiS6rGuCwoVVyrVytX3bN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R2BeRHQRLpzmzrunLaNLTSwfyMGixo7KPmWekuyJxZuG1q9MfML7wxpcbUE2dVrvKKA4eiAK3FhuJsbqy4tVMJY",
  "key1": "65qy87NGfovvjcvpeuZXHbrnW6s2cApHiqBxVcisRZJyvZ6PnkwHBP7h5CLjtJ5utJNXA2SEk5q4dt78nZr2pmuZ",
  "key2": "67iP4vF2NbUnrnco9rHHdtSZKNJsc46TEmXZCxjQr7xummuFu2JG24WPsMBdypKqr7wZXMuhj7J6L7NTvgPhr7zy",
  "key3": "5BzNUunmnYResgBCx5YRRskt2cwVhoC1WQHnH2teMXh368DVwaaAEZnNkCRwLy36Camp6MMXkX8x42AP21woviL7",
  "key4": "47HUrfQEHgU22HpZTFx61wW8r1UQDrGZPJwAV4kkSgveB5MKVEjHbWMKReck2ngQPd3efdYncW51Jt1YzrhAmsxy",
  "key5": "23GjwbNyBdyH2R3kJmF5hjiq5Rp6pCYoe5JNvZr7vaSYvaxgMcaVExqm7sFV2dXp3jDKDegitXgo9RNuz9RyBkr3",
  "key6": "2FvGbctesBqLLrzs1fs6E5JXaZW3XN53vET8SzpPd1AEqRTbDjwzEG4kkH24ZCVc88mXJpBgQPafQRHhZJerUALs",
  "key7": "4FSj2m6sYwVNxEZf54eFU7H9CDRQmE3a2uiJA5iWBs5UqLhr7C7ea4vN9HQJUAMzWBQF8CjWXTDE2oFupU4rUFFa",
  "key8": "3cRR6TL8npGRjHcMjZf7a4hedCzcdfCq6wTGapEJDHqD1jdJZLGk2htzMQSwdeCBsPBeBNenEN5etyp4vmJU4XGK",
  "key9": "5twCH3zad6xBShdb7fF8xXcnzdHa9fTRejtkkLqp89K6rvFQ5Ea1tMHZijCL5UaZw2v3YhpsYURVrE6a8W7S1jLE",
  "key10": "4giQJKR2iywsvaHTPR5DttDRhLmEhfBfkcm2SkvGreXCZ9Ns1yWsNdJfVYSkQN7nAyovGNAuxBAoFTFnL6dF3cS4",
  "key11": "2fJngEYgJkdjA2NVbVfSUzEWUH8WQxVLmBLpfMsLLF7R3quWDFHp1W41Lzzc7R2cu9jHoA3YHJDStqzwyiriFdoK",
  "key12": "5wvmdYkgaoABTzWiNTB4LcCzJQYDF26R6qCwxS4UrzWoSAB6nUV2nQvRjsj28ayiwtvq6wVKez3QWR6eoSdDHAKd",
  "key13": "3DRj3wGq4qqDLnoy3u1NHHhfopt1pRX9Vi7EE173BLRFBHEEveLwLUV78maBwAkMW23vfqNTV5k4CugecfWH4zx7",
  "key14": "41xLp5b3EaDqetkEqbipojLHXMXPBvJw9aGLxvx43gZ7oriRTzzqBXMm5BGgnu4YiP517sSJkzLDgK6MpsyzzWWS",
  "key15": "nuEc3CpgJDtH72PYvJJFtjbwZNye7K1KVuxPRv8LWVN1HxXQFLqqDEzQoUSCktx3tfrMbNU1oZ1J6jHZUwZxcLr",
  "key16": "59QjWFdi6LPa5rPziyqG2Q3vb9CHHpd6ph5pm66SKV9jayGxCqs3A6UFE5uADGZiqJQSikZM4LHk7xYy38itac7B",
  "key17": "5Dxi1XhSwoTj9qtN3T1qv4TMTw23QLcN22z7Nvm5vfpK3ZAGq2JxpPzWx34shFoNvsMqgSusRwXAitcthz2zjybE",
  "key18": "5WugwyH8M97bNwwcJC1u8VEcLLLnBUFG3kcZk7WHt2uso117kGKpYGiyE6HqfG2nrgu8syZmDkcEeLE8zKQMJwiR",
  "key19": "4LxpptsutsfwEFvRwH77cD8bKhgbkgadAWvyvjyEsDcK3fu95iUPsryBLWieLZ8L95c6XcuKg9coGLGbwhfXxSMZ",
  "key20": "5p9WcaJrMhyWvvPHwsRc9TdvsCsLn9HJBA5bvk3prutVRHp8e2N6KoSYSpti3U3vQyXz42Rs33FCbaHBg6oVM53J",
  "key21": "4ptKoXwCL5sD62T7mcnUCgsULVNPytrvKsC45fnxrXErfTanaTDDv4rC2n4EvcxgXCysZyWbrSRKxZoWqYoJTTbk",
  "key22": "4Kov5R9v2vy4QDoFYd3pmq92HqpXcN9jfzzgZdaJT8wF3mLxVLn32cTKLk1bfCbEm8Dfsmsceidcch5rpthFR5N6",
  "key23": "5ka8dTviL3AeM8cKkVh4u9XAXd2Ny4w7goSmQ7XQPetADspfD6XAkSth5nDJ98niYM44NtHji3vpPKxoKcbLX2Bx",
  "key24": "5qznvXY9yUadEgFifSZFHoxpfgcCR5UfgBBP87JUB9MB9tdjZEC5HRqWAZLUBqxRvSwC1y7S7dx7eCERJbFagMxm",
  "key25": "481CnKTWkrgTs9QjhqNZnoUaRe3MnE5Tb2dFYkTbySPfobxqYkpFiK5KHdZH6A6UdMC8aHfzANmpwTWAsquiJLKM",
  "key26": "5ALvd1tvTG7bmxSCSW4JTFagLfeu3wKnm41ueTiAR9iScskZXGceghWRcYhNA7GEQB8n1XWRUsYCoXmH7E1L7sMA",
  "key27": "ANSPAzvzM8ZCDqD84zECE6T8wptbJiss12TuHoQoCBChY72wg2eEqUqP1hb6uq5anitsh3e1uiGnH2j6rdC9z5t",
  "key28": "5HiSMgnqknKHiyaWMxLsNdL5f2maw5vPppzUcnfZsJLkCHVyZvotboqc9QBnjTn3yzAHZMFLV3gyXetvkiDRQEJZ",
  "key29": "4wQgwS6gjaUJ2eZw6eoySvNZeH3G6Snn5cayB8JHq6sxdHsoXTwz7B4LRVaFMMA9gJreGdb5NXW25MmKUuQBngpa",
  "key30": "4KpsMyhLJjP4HL8NLfKa7J2tcrSxkAzT1yhW2CBeWuGetgGEfWAjFYznhFtLNLEp4hX4zfJ5qu9RQ7dK6GHc5Zw4"
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
