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
    "2tfW6qJxvu9Xk4TzQHpPrq8Dg2zk3XBpBJ4YPv4duxEuV7dMDftnk43MxLjKG7x1ibz6J9H3zAfUmACk8KfZqa5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SxCGffVX3TH3UoobAwKA8HEa4gzTiJPUFonqvo17nkpv9XaFQwfuBBiTcAJaKDP9mGtkksYVw19S53MRfB4kCGs",
  "key1": "UHkkx1iGemAdXD9e6wkTyxixudEgbrdqBNQQoSfgeMfzVJrFLfckLqpkZMqR4Dfa6kS3XNPecnCbSzf4ku29o6b",
  "key2": "2W1KTeqPHv5WnYk7LgCRSij97m5G6M6BXqUikkrpLR1aqFGKxjCYjsDcZisrChaJ5jMc59AeZwQTeQWAd7eWgDCB",
  "key3": "3qVbZMx6myF91SiHa9Tdg4WrqAJqZ8qwcgzbe8J28ipjc58T313kJoiF5WR4TL6hqVvRU4m55hLGPUwQYrWR5iJf",
  "key4": "4gCnug9mPJEys2jKa5CdPAKMcheEotA51ztpmCLm7iFHxPxeci6EVVw8PescgudQ5caqeuDX8yKi8M7GyLdWZozw",
  "key5": "4fXxc7BHy6ZjQrvVNsuw3DHnknovMXbguN4v5eCrKtcfSAqUVxAjZx8yf8M3zow2Kb5U7NSmfpJa7ukK4NKeCHpV",
  "key6": "2NNz31xmXtD3kCFZHnDGMTMg2Nr4KdsJV3L58uKmu8THT2cbt2nFs9DQK4s6oc7L32inptjCMJ8Xz16Z9fZTWpuQ",
  "key7": "ByVT5dbZ3UmUVS8oNvAAAHXNiP2vSQiFhqvpFZSHcpm11zKSDp8VdhEyqJLyQHWtfWNnfC5maoPSemdB2UfoJVr",
  "key8": "4T7xp5MZhbMhNQ9byQwj5JWRHgnW4eyMWHkZRiUChGnBwNn454fhn11mSNakYmtpZzQNxeA2r1sUtJHDUR4ng7N3",
  "key9": "i5cohA1vn2RA1bTDTXVy3hnmsfRHuf2bapkbmvYiitt6rAM4dX4QwtjeGAEsyE2r2GsNzQuQkWmyxj4GrwEQ5B3",
  "key10": "3pDSWCtDfNYqCUx8EicrqP7rXjsPeDB6Gm84Lb3ynrMSeFF2H7bytnmMEawp8h5HbLDui5Z55yMPhUUCKJSSuSRi",
  "key11": "4SmkF459E686XuntcdHr3h5XQF5PY7i6v5Wf94P1fKzztkW46nE4xrCr3S9VsPQAcJFRXYPhQFjz9nctZ5hYDdRr",
  "key12": "2p7cGrcrPJSrQioeqgPNjEbGz9Kajarc9GbrsAaoyfbTFa4AEndrW1QSeonGZyLtTAvjodzDZYAipVor1URrjCgQ",
  "key13": "2wxpzBB2d3JenYAsmikQ7AzwaQ4d2VyimoS1U4J35n82aTvkgKj4hyChdunt5UB19b4CYg1D44NEYs8WzGEZu7Et",
  "key14": "28GxEyeWnuwsfBLgiLAHp6AqLXoj5denRktAnVdE8GAkSCUoUQftGZQ4sTuNcMUmr1r1bAuc5URby2BbDjrkRaKz",
  "key15": "3LAAt3iRkNoqn74hecLARjbZ9NkrxtMmvT86VLKePyRdARZtYw1HVQwjbBkUg9Gengw45tpZz5rJzh7YRruk9QVS",
  "key16": "4ruHyqbCLySM8urjj7FoaGa6ZLRXnq7YR1TAwC5o21ktLtdKLzjEYGUeRVs7juWb9RjnYWRDrfa54iPUL1LwY773",
  "key17": "vq7bYTN8AjQyczL6CBw31khRZaDHrDSR4m3iKuWVhdiZJyWxZMdSYPdzb73n1tJ13UuNrdifrisLC2PbFZXcrAK",
  "key18": "ihyMAKTgAfkCVmwLTBtMdtxap4Ah8FitBrc3TD5SEu6baNeJokWhdBYTUFR1wp712hMWFDxHkzAAGendHq65vjR",
  "key19": "5t7FW89ir8WT4ZX4XAvbL7Gchu1Qf1HSiTHbgeZN1WcJT83e5rC4XvrYkHnGabqUfbXpxyDyUC8MoLuCZHeRSjiu",
  "key20": "Xs3giUZoAe4yBpgv53UdZPNMpaKN8ur6aDuhWcJSZUbyWZhAPgXtPhu1S7brzUc8vP7sMeFrtuk1pB3GAhUCk9E",
  "key21": "5ceJreS2YTyMB6fkRZx4YComQ1WRGcvpAtNJjZSuCHmFmHQE64mqzv1PSCjxzFC51Fs22MD4ht6PwHZhKiXAwuHi",
  "key22": "3qSHQCHXKCvBnNVxRLWaUjFSMtFDKb8tSvn4JVwWXFZscMSCrNT2PdEvDk12kvqJk7p7h2Ajk4m5HDTRnf7nDxf5",
  "key23": "3HLjAQsvBbSyTM1D3XyjHCetYmQFXGXv7HknPYx3KEKh2uSVbcYU2qkzkiFJA1QYNhC9ZtqSMsGdQAX3LZjDShMx",
  "key24": "3fEuC6t3hhVquffo6viuwrES8AFRQKBuWf2haT8WnELSGS4CytsfNRA6xjaNEpWfN9jo7Rp992wpi7KNyGEVSLhN",
  "key25": "35vUZVXXmURgSZG5tnJK8X4cYi6hvF4o67SdCHk69xqwSuVyLBw4133hb43qSuFimzKcf9yaTYL428iBDgCP8JZn",
  "key26": "2GPGLprj46wAuLZ8QLr3h6yFw8P7eBJdMuxz889cmtmNsnwf5NuGotVJAbcFwfNzFXVoPYtvxtvdoy6okjczA6NS",
  "key27": "uNBrv2QDVwyhqqVwjFjxyPR98cT7JJRhpWDohG32Faf9fGNtnoYkdbgXPrdzsBJtw1cXGGno43qidUfqkdCGuKV",
  "key28": "VT9dGbNrL2QjYw1EgNBP27nD7GwrnfkiE8XXZUcuchNGKRLGeMhNsrqwRYBTZpeWjQKRMiRrtbKPAMHxdCqZPKu",
  "key29": "4rcX6VrQ9qm1oS2nJi4TvTrHyKyNgGwhC4PTav7998477ziNxYqWCNFoj8P16LsXSNdDpAkf92PVDv9rGkbk3Mjb",
  "key30": "3ckUyTC4t9fmgdiNhrWfL32rqxfeeubMr86qHRfEDAXiFbchVVAqSxzSqKta5yh5oxcmAeuLQQMdAQjUMgeWvsdj",
  "key31": "2EpVWbYubwuQXc9iM2Wx8z67oeXHP7pEk9TBsZz97fgoNMpYRh1oaXt3DByfMTkufJma8NXsLS6g8UnD39LWCenf",
  "key32": "587DaSSbdb8tBY3tztosn2XiVdktw7g2xgHmWFQFJHLjeZeJPmw3HmnPJ6BBgfmiut6LfnPG1YwVwEZWMyUMJNLw",
  "key33": "2rKf3bBepNeT2NbAXSgYqREYNsvVvBVm1HzoGck1X9uSF2zSLr5FSkUtTUKfwGrU1ou4VqU33ZfNwUtVUNwgvEc4",
  "key34": "2TkcBshsWqLkQiYYtmmKKxWnYfyhPPxp6vJnhtLyXnP6CjQ4S3vgeDdgPN3T3sq9gjf1YpqNA61dhPw8ngLJNMef",
  "key35": "5F8VU6E7gZQdex59LcJHbfks4RGFZwFzMXzacNrgkBN8Lm2Zc8WDmsEfz1bAtvbbSgVdTtvfLaDRvKvzN31XyiVb",
  "key36": "qrfhcChxBB8BP5RvzfweT4vguBQCRuAhwmAN6M41Nj6yhMsQCE15QEjQFGZrJ3XPEpoZQjQqsnD4MiADT8CSFQG",
  "key37": "56kMMr18YMfoQjmKyCwyLz1zJSxPQrnEy7yDnBEtKYRQSMqv3VT8V16jsWQQaNuoZEYcHxZnYxywRixnDD6Kymwk",
  "key38": "5Ri2DRQkfH4NowhCj24n7g2MgyqNLx3GjWU624XT48JSbUfyxfNQme3qeHZnnHrRJNs9UMAgy6upKHFpMmiYvPjB",
  "key39": "ZQsBVvzZXX1TfxcCVBiZuEpaKTVUB3TE98E5w1ZyzuxterrftKA5VkinPvAhsaVm88zYtZ8ejTLPUuE2xDNHCj6",
  "key40": "9FoFFAcyXUnXuAmvxVYgtaPpawvq3xbDS1C4ogHTYpQX4xKqZkE3JPTUxhfLGmCZrsShCVSSV7uUMaNEMGd3uFq",
  "key41": "3Ta7ZyZqBa5biy4USQtBdXNSb3nwkGHK1TjJjAg7VHooxyKpJbbeRAYFYQ1AabWHe2eXCsvLhnAMQzzWGCPxGpUi",
  "key42": "65pF4LUW9Ho5PFx2kqZCNm82GWoJbgEUYvpGAewBG5nThZWasBfNsayri34oJRp3vJex2F6RiiXSffajwzsUZYXQ",
  "key43": "66m93H7oUvBKC8URfnktTqudNbJWz7gBPrWZYG9KvUJsPPtizGpXbRBqS51fawjFarABJpaQLpTXKiFMFH1z7hd9"
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
