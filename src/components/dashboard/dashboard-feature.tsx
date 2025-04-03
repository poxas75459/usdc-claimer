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
    "3cH1YHMv1rP5SBBqZYrErbTf1PNfaPkmfVq2yuC2EXtFsU416bYjBu786CJgZHdiyW5yLibhHTn48Y4XsLkVTTqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "617FiYNwqi51YaTjtSm8DGdnMdYz9yDHqZQ82Ra4YRAt33SLpEoomhS2PQYCnby5dhDVkp58nmSTj1whWSRcpDCF",
  "key1": "5K82daVGL6j8XYJ9k6cMkaHprtDRZuRuzSi25XQdnnM3dJ8NFWJ6DwwmmpCKCXTDKEbLPWRYU2aCdza2qQWMpeS4",
  "key2": "et5miYKaXBz6Lic4FsacKostreAspvNPDFeev96Yq77KXFMA9zej7ZBg26c6djtMrePTqcR5sxeNvQnW5eMdRun",
  "key3": "2nrjdNxbftkgz6jCMxzH7Aiw7VqDZYSeBUuQbf22m6pgM4cPL8re14BhrQx2kbMYmG2NZhoKRzfnHo4X88RvVPjF",
  "key4": "4XjbckXFHen7cxmUE1WVqECoShUDEcihgzzpMtr76L1KfPydcsKtRhkctqFYvc4hVJw97xLyQk7EXq7Fb2fPxvAq",
  "key5": "XMaGneUk4Jdm2rni8e89hNsWYnw9YYbGij9EukerXBQa1iP8D97qXdFD5xcHNFMSPCf5AeRNL53DzoP2R6nWFni",
  "key6": "65yshc1eSwQzJV6WUshJrM1EXC5NhaZZCzHKy93qFS27ynX3XTVKXWEbFTTLGCUQR3fw62LK6ESFz9bV3dgomr7d",
  "key7": "3UoZKFcp7Y5vFsz6RVhuK3sEKSuWTN4nvReYtQrVf1Uta4k45Cxomw4AwTNs5Lw3dy17Gn2o1LtinHqCcbTvogeV",
  "key8": "2pjtS1jutbcHff3Ttae8a5c5x3qBLdXjjfKA4Xun5qZrLzMV8LDQuWwEREnF7KVvKeQ7Q3us7HD3PhL9UgnEE9yP",
  "key9": "5Yyr3rhfq3BvXoLpWmUptYZoUFjhoN4s9r43h8ASMFnuoUWLAshsj3pMQPZyuNQFPzjiuMyzp9ydQYecXnGnyg56",
  "key10": "323EbLR6ebrwDpxbvPdhQXNYmPD3kTHH7x8HWxDjwomusneEvtUq1p6aiUViPJSgcRtZQaedKmeXfa8nXDEky275",
  "key11": "5hWtkhT7hSuyq5mp2FbccFmWg3YcngBNazi79UhSMVaCXdic8YVoyAxfKbDiGQwVYoN6pLe6hXuxgLBm2xCfkeUv",
  "key12": "5xGE2BKEcgqbU5yru5GyNUZeUkntHbG1wmzAG6t3VUAfL3zY5epBA255ZbhZj1owgeKpQvcEo91pcJpr6f3coPeF",
  "key13": "2EBVz66AdWTuyusb2yDknu7GahxPGEyQJGhF6eywx3jiQqBwWDLwMujYEA1qUvHqYs7hws9sVW1cBEXpge6Z6DxN",
  "key14": "47AkeJW1XrNGY7oss6Kg7ypF98THcAP2RmNBDVQfwosswQ3GpGGKJYLHDNPcLVwRNnhUgh7EBVmJMbdPhewrapRX",
  "key15": "PGqQpPhDqYSpnzBfua688jh9bart769M16ZC3jUXdp4hADtALnPcNNqX7hvBzkCYirxJ42dREqawB5acgfZtHaX",
  "key16": "i2vCSXTZp8G7N8QYcXUaZkdy72w84sBf6qcXmtQqCk2mNwgwoC76AVZuchQXZuvNcKMHrxEwuo5JFsRbMGb6uFt",
  "key17": "3vxvUQrtbFmt5F7yetiy93taSGsTAfCTRvmCYL1ZebXG9jWtjGDG5Q1pfBAtNtL6iYoaJLtcTSprxArAVs3zVafg",
  "key18": "3CG4oi84mBMAWCTNwUyot2HzNYwZJbRwUuzAUEg3wrV6M6SQvfpMc36iHud8VacrCgCpFxWP83KG4xz5n3YypcHe",
  "key19": "4bhzxTNVA8aS2rhYf6Dbe9crSoc3GPrUbWxYaupyvc2f54Ki239U7dZXhE2niX1Af1v57fJqBLXCxA8B2d7B37Bc",
  "key20": "Q7HxobjXbsmpMcpKAdaaPytBzzPcBsbMx6GP8BEYsMMWpA6nLVqK4WCpf9daRUbYehcWeLgoHMJ93tnQxcNSAnw",
  "key21": "5oDfKrCBggeaU9sDySf9gbq7gEwobbRD6zVXD9dLAs8PsKXwxES3pLSS4tMczMzKtQeaMwXJT5YKfpQ8K3VmJLQP",
  "key22": "3nmqrgK9xDYfs6US1T2PnyZbbprX8zCxKy2RXwFouSTcRKnwAzCnEWRHKkfD1rTCfh71iftLQKRhLN154zKD9aj",
  "key23": "5xcgJ6KFnefFaekF78xvn3EWWUjhjWMcbkLEeTdff9qzSeZutpREL9W1dgjqjc5yiR7bTwUaxvTprz32xJ8fY12o",
  "key24": "2H9GXfMZnZque7DsvHxCsbkGgDkneozHysWKJp6TpLkmQqfc6MjePuEbVeBzGJZeEtY8CzRewDeobMbNbdz2wsgS",
  "key25": "5oPEYzoc6PjY1TSAnz1bFSs2R3byAw9Vj4wussPa3gUYdKWHQVdxraHuFBL5p4Vqe12bVgPRxMnuUnBowqShN7LT",
  "key26": "VCb2qNxxMbYF5B1GjU4e4J9kDAFpaEwqK64ziET8a25s9UnxX9usy6wiD8thgMFgbLcUJ3vHWdxxepBRGtKfPTA",
  "key27": "61P9Am8r9hNASx8wYwERLfgAn96jiBAbVqoLMp7FJREBwg3X9eHewYxCyLm75X5BMPdNq2vb5S5sLTwu7v4tfC3c",
  "key28": "4ztJ1rXuRHJtCRVEBLtpTw5GWsYX1RfVKqyD53u2DqzuHeTFKEAGMAKtACCx36FwE2H7GoncPf2kvBh9x6Da6Xbn",
  "key29": "3L9VTd2KNxFDZtkTrqXv5H67RY3iRN45sbpqhKLnvbuQ3ecrYtQKpu3TahfXJwzGGmXjjTQL5gBLNif3pMrsGGtP",
  "key30": "49K5dTckoreKoGML9dHGQ6mkv7iaU7bevmkFLFRPAve8MKxR73ScfvXxVvLXrabHMcxdrjCiW3mpBu3PJZsuhNoe",
  "key31": "5aDobMA3NKvG5zXaV66gej7vmfbSUxThxvgBo33tvMAVKXaZfSme3C6ZAUSKrgijSVFFKx9w9h6ErKMqrHS42Ch3",
  "key32": "4ZUT6Lra4nHq7dGkhshzpVQZeZVkge2ZgFjGanBc8vxvJRPhCkAZBcTxXNAWP9cat7kqAcmKv1QhTGQ7kFgJ5xPu",
  "key33": "3HHLcUQQoKyagUgWgWbmXFHjNmitgw33ENoUxJazMifmi3Ds16Cv89d6mS3BiX4nxwLLWgawozzKTB4DWpe6Fdow",
  "key34": "4TKWthwd8GGjRNs2bSPNrksAeuYvjt1TEcqgUbRqByDAFjx5kZtLfnDcFwSrZUFW5BXTUX7ujPrJkGE4YvXggkVJ",
  "key35": "ALD7u4gQemW4DY9ffYBH8Cwqd3uRfJXqAKNMWfmMLeaX5qLGYCX9FeJ4ubyLy4qsBEyVDP4KunUsAKh1XJe44rs",
  "key36": "3MF2XY5nMJ6QGZNw2Y4CcwFuTQjC1iefPWu4CqazVoqyvEPFbPV7oGwMmvV7u9JUKzD4NPJtLigb8gegjj9HGEpb",
  "key37": "5wpqgV9WaaguaQu1ornSD22Fdw7pqmP9rfobUCuc6WvokNFvkFDa9Fb8iqohiCt17W9y4cywzMwdZBMwsvWZHSxB",
  "key38": "4CsXkNitgVq2UWbZRcgqdKy6KyPhcT2h9Mwrf21ghK313stFam8kKgQXu7TH3TmXGiSz3Hk35ErMrCKcnwNZj6Ph",
  "key39": "4SaRKgN8KjfEwgaSsBtjzPppPkGS8BemdF8z12arbFTMfR6YThUm8iwjoLqbsbHqTpJHw9rSpb8cJVbS3TMmG3b7",
  "key40": "DjB6eisnrT1k22Uq7t1cmVmLkZoWpF72PTUNyoTePyxGFxxtzSLyxjjzp34jdzcpnFjJP3wPWrGwZUrh9eWJXkv",
  "key41": "3YqUquq7DQN33NKX3946oynfasXdjp11VSb7RK43jqxQxxfEgi2tmBP1BiZKYH2XXxqYDuQ7k4TdGTGi24z74nsk",
  "key42": "5ySVZUhvQVspAJDq1j8nGVd3BkxcUYyNGndJLsWBuApanTaD4QtAhD5MW38sQNe8zUkcxBUR2DbUcbh8dAK7aPUT",
  "key43": "5kAwmQrTxFVouBDwf6GJqyUigP8WqKaHaVWwyNf5nws5ZCLGFpYTZiozf1xVSzzieCcvmQ9KhFsRBHWxZ72aCS7V",
  "key44": "4chqJZesCQPVcZWZttmnKkTiRhxMRsgdbd7b1yQyu4gGW5w5zigr3Y2gPF1GM15W9MhsFJyZGGrDb3P3neiEMFsu",
  "key45": "5xkW4KgFwQMZJZ3dccqq3Buh9vNsN7szdX1GY54piJSdZYy1t1QndWie6RnKHwpWpbbgxGKXXqu3idi8qTP4yLf3",
  "key46": "64QQVPVV6DsMPi72QpknnizGHFVgpVVfmTmXCqFFCLNpmRRQz2DjEBhj9TfcSUpfBP5YFKdQqDziwZsZb3X168Wu",
  "key47": "4hbG7gJCEzY5bw518PJbsrvNmi4X9ssqzdiXcXj5JDvKGKrneV7QXYuz3GtN8akG1qbZMbS5wkvVnAM64n2Q98q3"
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
