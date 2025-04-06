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
    "2PAiFiNrNuenWX4oWj1FgU3deNud7E2KyhY1xdhqCaqfyCZef1eHYhsaDp7AB8Uwn8LwepEfK4BKYy8VwcHEtUKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PHu14nVEkQUMRhSbJhnoKHYZk9fRisAFyYFLiUWxuTHnLEgbw7jfi2Um6MbAxRX42Fat237jq6V5yXUC3UoEvWp",
  "key1": "3Nb42yhzCbzm6W5mkHCS5pNM5s2hLSGeawKfs3bWLPAjnHetmaVDif4e5yFVCMCQQLkxDjnrs3E3Hf7M6XwDCyWu",
  "key2": "52TeP39qGSsChS7HPh3Zt65htFuex7tWAkKrBLQnMMCoyJLHhdLjyZCkz5UVVFmrk2cNbC2hHjsB5zNd4xpHJuvr",
  "key3": "4YzkUbarBw25YVNEJoKbpfMNmwh8AtGVnowjCSuHYMHD7sag6Xe3SpttJkXcfxbXJ6id11ho1Yy33XdNnrLUFqmS",
  "key4": "XY1bfNqegqgZwkd4piA9ds5iWbg5NCAzWBoDvSATechvGiEiCNJz3p3AmHToi2DkVc7XdaHbu5R9T7N2kmhZfmB",
  "key5": "5iJXJKswFxhd6HL9sq8hAYyXRbhPkK1uxUXEwWmMWpk8fk7vWE9qFHCrf86Mf4JmHXBnuE32nBfWCGURu5RCXrXP",
  "key6": "V2v2ktj1M5q7qwQJXXwb4HcFiVkqVEkTje5c9amvMfkTEQRKPnbuieBNkdJMffaPdE4FMLrDUGL3vVXexcPcFBt",
  "key7": "5mKK3jFWn4sZvVBpVfqkp51TDWoqP479SS5e3JUBYhMY4Fgar8PRhqMdc7zaV8NaKAyCLafg4TpCkEJ42VMcbMNm",
  "key8": "5j7rKW1CX435H25SsdmaBgdRQMyhP16VjWcY8cycYbgKozFwTH4ufbwCG2vpcE3EE5rS6Caa4C84gYxW3p9XaJrQ",
  "key9": "5j8BdoVz4H7zxQB2zvQ9dExijWcrhhg56kK4CR11KCFu6DHFnGYG4k7nJ5bQ1YuKDCU9bmw5en1ufTiQGqGSPGGs",
  "key10": "4UcmTJZfYzc5jeADNFmGT7TXAxnc1YVyS1qJPe5jwD3KvPx2LWoCeqsCsFouGk1DerostjoYJ5ZL844dXx5ut46M",
  "key11": "2KPp6ud1Dntnk6ktn3gpXusoZ5hWB8dmZEzpG3hiTZTJStP3dhWELCq4rLLMzTjTwBY1evFtCyaAjHstS7Tqu7g9",
  "key12": "2CRCAD6ozpA4TNEys4CFqi3xvCd88iqdTsgqNqSETPhkeeo1CgmaYAPUcPWVvRSF5tWc8bAQLj7ezUPvViEduEbD",
  "key13": "T4rs9V6jp2ExNXCiwnGmqVCUS32mC674pgwyq1u69y4cY3AbL6sLwBqxgd3Yq1wVQnU16gizidCmUy3uXhyYfSw",
  "key14": "5xXq96MLvH7qGuG13BzyyBnXE33U6zxzahjFLafVv4tVeUYtxnc5ry6LuhDau5rxhJ4cQmwnZXdqR9azR7ks2759",
  "key15": "61kHYZncvRBMqFutKdYishK4hv8veXRM8SvhAnyQ1QeVksfsFNu7DfJ76yQ21Qz3T5ARccT4KfM4vfMvchYkWLaX",
  "key16": "o9kG92hJDQmPdUmXWTdf6UkVnxYEQJVXHXn6pmmemRFLxHS294EzZgpBHiDPYCVokAgGYKafwnb2g6wvbd38tuv",
  "key17": "3t7UHhHHPEwNCjvSWJxHakFrUEaAJYeHsW1ur7CxTRfsg4XwE4hxtAkGLZECqVb7mUr2etV91LZGnKghJRKs3TX1",
  "key18": "4yRHgiCGYmS3tLAQNdtWBJfERajadxbWWX41dxuP6E9ez3JgY8giwwZmpsHGNf7kxswji9GUjXFxq3HjsPgErT3b",
  "key19": "2oJww8yp8YsVGDY52r1tRomwnVzntfHLLjAwR3yLDF92TpE1fyo7zD1eQ8AqguL1tvADK5k6BodnkrcUJg2XKTNb",
  "key20": "3cuQZoTgpZUGSRs667n2ZgzpcLkcRigzQAuhgf5bM6ok3oP5vjTYBDi4TM7jn5iVME7q6zBwicSvAnxEPk8k3Kgp",
  "key21": "3NBrUffgGnxx36yk1PDTccjHvcsHwEJQZ7E86yqF9kmuUUSzSEuBXULQPZafyJjFEYHXGST1sbsy3LYfVXvXdt7b",
  "key22": "48pQZho6Cwo2oM9KngoFyuMqUaCtVSZK5Fvo32A3R1jA4RMFELGSKuxKHRMoCx5zsgqVsbVzba64SdWKCkMEJdVy",
  "key23": "2DZeLZCYeL2zF3ZvVGhxCdaZZGFyLYsstTXNs9MtepDe92eUPNGTV4n8FnxEWhR4BqC6nJtNKsn7wrhtRAore84E",
  "key24": "4D4en6NBGAgodiBvx9LwCHvcbSQf1xdH53pfn9JLAFy6dSvg3bDXCS6ubTVHoM78muBgW5CmL6eBvonz9C9AS8Nx",
  "key25": "4WXrwDGADqzq1oJ3UL4WPfEbpFXLTTCBNPHkU6Cn5q9zebD5tPf5nCbxx4chWd2NjJZCH1epWQNs61iyJkghmvZT",
  "key26": "4ZEQE2ySxQWGMXAuBYPNqzYUQYDfch9uXn3sgpSn5p1uYBtY5mKLfEZsjCfmwy8fhSnbjW3mW6NnrcdiAL68afQ9",
  "key27": "ZWCUfbYVx14JQstLmkBAmKzzF3LET9FPtXK5JBU4VyU6oVPb9K24t4u4PR3arvUke8bhnRFgwQKdgYfxVzy6sz8",
  "key28": "2CoYj8i5fGZmB2x2ScGGUPrECbqYtwSnoYzhbRT4cd4K8eausTp7b49W4d7TgZusxASJNDYxJys6v3eEJ5doG71m",
  "key29": "2HqU1Fatez1eiGq7p3ubdvLyeMDV8UX5o3QijawWdGY3iiVXNGJmnSNAAMX3MBsrhfFKvMA5TReaHHfLckHUFNFb",
  "key30": "3aoX5his7uGweg22Xk85PmYPhaCvcabArwGh9xRPXV1fLjipkNG1PeZmR4QF237Wz2si8R2apT4jgcwiV4fa6QM3",
  "key31": "6bBWUeJAKNasLiTC7HK3sPfU1djHpSCEdoAb4Xat7QtR5Hy7aFJPv5eB7HD1RHvnj9q9iQL3FjNvVX1BrVqMiyc",
  "key32": "2Ndf7zAkmKPvifPCVnFWYjnktMaPsMY5h36tpe5tVRdHc4ZYdhNkfHvDmiaDjtNb3PmAYN4AUpf4JnboWt3f6Wxw",
  "key33": "Tz6ncKgpyVjWy4WSMR7iyojLzboHZeqEu9mpybZfpehPus9Rxn7E52RmicX7Mx3doQcG1K9ca5ARBJrMGdku9Y1",
  "key34": "4kzUT7WC1bnoGwPnJDRBgxyzWqnXiB9u5chcDR4RFvdoxjrC8u29bY1nL51YodhRtroxm3uASXE1irgafYsLhs26",
  "key35": "2KdzFgi7Ug5HPJQL6k1rUBfeAafoTFhTaBnYKoqU9XDLwAdtRbbeveoAkQwCDxDs3tCg9HEfReLp9qBCrz5enWFD",
  "key36": "J4DanUBSsEsmHe6EyXVgMvSP22GSAA5ZreGR51B8vkpzAcXivWgUZYNdqs92SGNYCvq8KDHUY852hd7TaZeWnmC",
  "key37": "Hvkj4LDPSSM1v3UyyqMpu4mMbxmWVPY4Qhnj8YN12wnhduMS6xswP2pYmKsjczvebZvEFp8rfaubs9acBcAJExj",
  "key38": "5ppep1PpLvyNmCmt2siE421Vk8MDPQd9ZhXo4QryiC9w94TcozVwjexNAyvvuV6rBwuCBdk8QRXHiquQpGMjMR4m",
  "key39": "3zMnV6dAkRMSJHmF8rMaR5GvguxTZusG1d8iL9FmD7oHiw9CeU6wxxXNgiVUMGR38c9pTpUa37oSjijf4254bfWv",
  "key40": "5rx8aexTTvALuGMvBbbZrcVED7g6xgWvnJ8EyvN1Pnn2e9M3T9omzdacjQgHxcTYxftTYA4hV7kLDwBZ5ogouVBZ",
  "key41": "4pVPCBdTtgGtGeAgwdFC3Z377zM5r5ZaQwzhg9rQgKvYKDKe4Hep6sXsXMNh6rmMS55g2L1FNeSzGLCgVHjKjD2V",
  "key42": "2nEGyFQAtnM5EMhiKEt7SrLywBe3GDw4e6kpCoi6metfMdojP9f8ZRwgmsbD5RpoG1QBAekZFpAbDSVGm4wpRTRe",
  "key43": "25XG3ADfAQgoq3j5xwYsEJE9AFkG6icqPbomgF6NZDiBdpiLzUBfgNHo6vsZLX5qvj3hKxcndorVb5fKNbdnNKhg",
  "key44": "5HZFJKuk6ganbi78zag7esDjyncGZzdR4hZ3C25Wpso6EfXzKSThBLWNb29xggyFJicFCB74ZmEUUGiqBN2c87bz",
  "key45": "UJoExiMcMeQeKpJfoRKUtTFeDxb7aedktPUb6WdQExVBRAwTwttUwfRL6xsVM3BuX5umqjTzCxEyJ7mAgoVsu4W",
  "key46": "5ai4qmi3Ypw1L9qShMNZbu2NE36a8AKJ8VkXwzh2eXzLFgd5gqhgwNiJWawFtGWMZ8GqWAYDsmEcfthNAkoR5wKk"
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
