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
    "pffWXrPbsCVrXLsvPeJzg78hMr4yuku2a2etTGBanP8c8FDkpVaPXN35V1Z9KnhJv5JaDVQNEd6pig9xApfput4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BudTXNWPBrkiCWCuL75PWaCKi2jVpoxffDaXLcj4yxjdHdpzL31WywHMXamBQHbGbc5pK7LdzMfmKbMEqMT5498",
  "key1": "3KG5DYSMVTjbyMCX7yhP6SxKbN72wjzdkhwovkdBTagnKXxkgsvsXMNJmPGpajxV8bF7WZpgfJWP15ZLaD1r9Kb9",
  "key2": "5gq2aS7Si6KTXkcipbpj7YJSCdXui51PrTGscEToqWNpygmLgvyo4qMdugNdVutTt17PkhRuW7WcQqZzDvkgcb9P",
  "key3": "63pBhVM2yaNcXXUsY2H4pnoxYL6kBgjuRVkrpbXxRA8MhMCxcsvFJbfMeNtuoRBfS3YexjuVhJd3oBFrF7WNTKYA",
  "key4": "64kzGW6SkQstQ9zpKJjzRXXVgdnXNSLvg1orxEL5ossRq29jpyoR1Eixrtxqkdo3qJF4kw7WaLSZbTYEeQRtVshC",
  "key5": "4Ba2j6R8BxRmA67U651c2wMBin4yZ1gNM2S8oTF8f7aKu1dbrY78ZwD6Y4vBxhKRWw9dypCKqeLuDNdD6RfXdKzH",
  "key6": "46iQS3gaWwbxdw1xJnzt5GbW68bjePyK6ULNH7MSYHjDECR4MT1xXp7DwBDt5tg5iB5zf8XFsEx9kFF5CkWGG6ns",
  "key7": "5qH3T7Vi19U6WcfC75bMpyyQygiLCPusUmbT5TY8RLTofAPDNcRF5saYH527REzSsmc79vbtn9g8zPsFwp18aPFV",
  "key8": "eUU7LQXh39NUkrhi8tdCFudri4VreNvT48vSY5ze1n7yLAPVYMYAy3QGRsuFpHLfQvXHrdQt15iHLZbQsPn5jJS",
  "key9": "2CXAyENBo5YpcHiYt2GSwbc3YNePXdzq52ZjKD54yxRrWabYjytyscs61RTV56YLoKBttt3wFqRuYYDzrjxPjoNV",
  "key10": "3VYux4edUkD2XKf32tAqZBSiEXft5dyNnWAbiXQQAzT1DrB5XaQvVk1m7Dg31mJLMvfj9G8bCE2gX8fAwLFmUtpx",
  "key11": "3pD5uKguGjJFuj71hawBrTf2n7EZXvdFMZMVMeaz5T5tfz9DXNvNqnF4xUcVncyRU4GroDKFN4uy7vgd7C4btitj",
  "key12": "hcGiNNjug44ZGpGmcTiPXorcCGi3e5xT6xpmaQ2tbHZyQUsFK1uRnGhNr2xBC5mvbG4i62qL6jFNo1ytSJM6FBa",
  "key13": "44i3yGiRSRHfVkFRAS7CWUaDeQR2TpV9K8fhK3oYnYz526FDaUneZ13Ep3dBTXQChLVBZ3t1MNtfLkzmjwK5sN5Z",
  "key14": "2oiX6kziMCLgcC1dukUGLJ2ArpQVGdmoSrEWE7iXH8U88R2SRd9KyoRBHZy4qjZkG24XQrrYKgeSCz9CLHHf9yYH",
  "key15": "3u7iukN7gFnStLyj3g9FohunMhFjjbHcXAnta7UVfLpMx124oiZ1MNkC49AaQCT3BiPdp7MvW9xUiaUjaVciaqXp",
  "key16": "5smUt2c4sNDiMqXocUiqDV6qgS3u4nSjX3D1yeN55rvBxKDfK8PqHMgfhsAFiEVmG1bUQGdkbeKQZqqw9uPFyTZH",
  "key17": "5cUVpB3r7e7YhCJ9NccQyxyzbhY2adymdZHmHRNKPNEz4rSYqgkyDPbuwGqtz79pBXDSCUQqSjbPgUWNT8PieZBQ",
  "key18": "2cL3dRd2W2VQRQSiUCRaHXCNsVSwHF7pFzGnAotvziVK1isnXqTnSqgNHhBfw243YLrFH6ikpF6vTBmpEcBKojvz",
  "key19": "4ZEpBgALbheSRJ6DwenKLKM5KL16sVQJyZKBrEkrJsuQ3aob2Xs2Q8qYTHP2EP7u1d9TBcew4iECDtqhnjv2mEda",
  "key20": "4499ckiYHVVnSzPwu1z4rmoN8NuXZWfZzM4e24kh2qGJe7z6GTuyDc6jxh7kaf7Z2Ssh6TEwGvN5Qz8LqH87uPQR",
  "key21": "5YdiYv4fuW8VhLvAfEZqDr9HesRcGvzTqb8FAKWyqGXRx6wJ1FRs1nE4meCZET4TX4D6DXhBqGkrZFhW6dwafA7H",
  "key22": "47bTr5PvSyY8e8wTAnLzge5tiT8q4z51fNguUhH6SRcXZCgmMxkY3ZmxnpbTwYCK9J4JMs5kfKogRt9WXibvD3Yt",
  "key23": "4M1Gja5Q2wANvzGkYF7zjGE4KfYSN3cUZ73Zfnj7b8us3tk1ATqP9mNugyMnhn9gaV2JDLvC3e11xfBMdEs7sRfE",
  "key24": "4sYjdSEfR21LmNCzaNtCZyxAinm2y4dcZUyWHipvyaiBQT7iUwNVya5LhbndexYA2J8AeiGXxtGC8v8B7rnDwZ8M",
  "key25": "4jWjVnRiv3v4MHjcMh3TCDqMvLmsPx9L8Newg7LMZ4mktLpp5dsyCDJ2dhjHbHZo2g9sVjxXzEn6xeZuBcK1VoPR",
  "key26": "HLwKtUADLgJA7nCSYg2xmfNNxEH6JpKhhktVFRpVgRgdLfBynW5rK5PtKbkyWE7rgnm4XASXZJeREepX2sAdeXD",
  "key27": "3tokFocvtsLivgyoyBCqMMc81HoXskQLv1qwsYnkE9Shino3YkzYHJtbyb34Naa9Ym7YhWtVvjUZaz2QK2sPKMmF",
  "key28": "2GTNHzYXFJq2hFRP9Ya5XUjdfYExJbVpNAfVB5TTBDdESuiGQkDbBxavFDcTeZbHFGs4PyuC3Q6qYJDgZnzP8zHY",
  "key29": "NreisbgF7wfx8aNYzAu3nUyDHMh9z9UuQFiFGqvvYJhP2EDzVvnbTPnm53zmyXK34ovEYhSBa1cxFVteMW2QKtj",
  "key30": "5xqRyYGp2CUTC7PxQ8qqJswD5xs6ZRQMPykiU8EPCGazVqCWv2UEBt9ZbULjnyZYWrPqLkK75vNkiqLHku2dZJaW",
  "key31": "5dE62vEdSJbiunH9NefVD6ZR72paUjeJ1dUazFbt2sgrRBY31xk9DgLsu6sqCPxjv4xYfUf9tfNjtKhkWBHtT7h",
  "key32": "58X3HQkGN3BjsUWSyRt2X7HpCDHsRBPv7jVNeN3w4rY7EYsJfZtTZg4KxqU67vcyVVfhT3v5hiZfUZyvBamDPS4x",
  "key33": "5Pq5WHY4TVuadft6n4B6kXBoyLgNzXLfoSiks7zjpXEoqNdjdUn8KL7HUbdfw8So4ogj7hXwZbqaPAJgVcKdgoPq",
  "key34": "2yvXu7EZLELKBNzyP29FnziiudXnFTDNpWkHfzrfZdtF5WGeS2P7zCDBLmXFxWqqczugrJmHyUZNCP2rP6uqW24",
  "key35": "4xCb37JbP5E33nb5EeqjEkpxyBHZHsykmFJJqSzoQpXSmWKXBTfP6DBrcRwLAbB3WvYiw9R7U58wHrZ1Hfno1Po4",
  "key36": "JWx1XJ8fsJRybZBLpJePMQRJnpv3p26TDApX7AqMuxG2yxwD5hAc4FsFBqG6eWdDUNHXbT6RTxTFDDrMEWGbFPx"
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
