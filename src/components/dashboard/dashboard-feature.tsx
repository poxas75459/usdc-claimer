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
    "wyP75d7piS8EW1RPWS1oTYzo2b4hSUVaRPoZAAGkENKK5AiKoKKjGUX6QrNcSs4XKopiFJdQvKo9sWwTCjN5V1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srKV7drs6UWPyMrHwXmsUsTJsVXRgXc4mCwbzsxNZ3H2KJGXrsykhze6i3dVXsCWiMV46Wz5SYupp7hRhy9M6in",
  "key1": "2zRSDoipgk3KqCjh67rHM3w4EcbWHB1kuRFMeMoWDPqoq3dv7FFkSkUk5cdDSu9R4LmQtaPUs4PYfjbJ28sGG4pd",
  "key2": "2LowDrK3MpirmgBzxcwLVmpxjNEjA8HA5FLZkD9vMuZYRLyF97RhEx61WdUGfBYMBdRGDmNeCUAeVkiJCFM6co2m",
  "key3": "LWbbqhWrhz6LmDG26G3Y36qmRPPqYMX67QWEKT6xqLaCHGMtBz6u5EE6Y7z2yfpTcJF7NEZSU75xueKT716HnuH",
  "key4": "4kh3V7s7DmDCjSBm841cy3TgLaPbr8aagGyXECDzdEyVFjhoSHn9S7odgUYtQ2w7wHchDPtvtFGRvD4EhMC6Zz5D",
  "key5": "3ENkckri7ou3XprmAwYEzV16PCGCBPckw5Ctg9dkbSWro5qxoq2bjHdnLVUePyQ2tyRjawYfX3kbmtkTo5UGGtg6",
  "key6": "4wQRJjqQTpmzpR4HX8UrjC7h2VNsktkVEz4VdMJMSoTXcKoN7M2jKUPmQCM8CPmX2gKjmcBbsnwD732ZiNpVuTTA",
  "key7": "2JNUqHVnckLoXWGqYcG48ij1aU3QAdBSSoZTi8cyXpiMNFCmXhN68Su39yDvFaoPxhRh3HA7pTmi6T6jpd1FwkF1",
  "key8": "4vR8FSYadhpQ4kAFiWczK2fBDEDpBaiDtHVESjDQKnWe8qGQqBXLG5vaiVUs66kfywXLSTzSbQokSMpgAAGg7onN",
  "key9": "3JvAFWEg8ggDmf2n6gHx8BuBYcbhos3TEmQijw69AXdtfkdTMTu32mXQMss7373WtFBbnJJ9Lu3rjT2W9s1AbGy6",
  "key10": "3Ah3wDeV2kAbQZtaJaDiJsSJpqGCgXujzXYjD5xyjfrvQPALfau1V6WSyG5NGJ8zfsSHp3rC18m2EjrjELtRSvcZ",
  "key11": "4oe1ySxHr1qsbEh74q1D7exB4Nxh7r99AiCpsuRNaRrPrdcHk8XfPV7G6K1JfQmumUqHyEV9DmZMNTz9kUyAipn4",
  "key12": "4DgpbFwMX9fuZCmrbFn8SmxQ8KR6XtyPKkhzzQvuy3c9CVp2eDHesMV18ycYmK9ZSeaaH4zkxR5g7DWH4in3w7XH",
  "key13": "4oGHSMHHZBafhgGsRMRyFEgejungsNjAk3UzbHqrg57Vpt8cuJfZShENhaDV6LgHq1fbmWqTJ9suKEsLkv33kbXK",
  "key14": "3TCqLe7C7b22JHWL7pMJPHEynb85YWMMb1RhK4ihbvtaoKHwB1jSVMfgD81HNvwhnpYDCGFRHa9Vwcq94Mv68qwK",
  "key15": "VTot16snZd1g14TbkDE1PWyhAE8dRZkFPaDwJJEi5rkHLmZpjpyQJeXfwMk7kb3ShGBnr1fKVe6VRwiTXQUwfpz",
  "key16": "2afC3Wfd3QMLVSDCsmoY63hV49i5KV1W8e7vXuzKM6HjFPxsDKCNd3HB7kZFVod4fb1ZrvWWH7Y8RLKugYGUR24M",
  "key17": "2kNSkVoXobRLwPMFmHafqU5csgHS4X4ivjCtkYLEfQpvVAsQu5fbpRqaVup3PBHRmTPgpottEu1LNyoZGREUB86K",
  "key18": "C3nHoRNjzigdw9L8C98gdMFnrSFZJDUDqxFZ8LrVNa8Y4Ea8BaSVYhEYHT3UxuBztvbvNNDuWgqg2MbyGmiapBC",
  "key19": "3xyCKdy25vxcvrqUv34NJrzr1J3Lkzu7tWzmgEooLEL7pgWspE4NmriGTejmF74K2pa9WZxkw3eNCMUPYvPrQFkp",
  "key20": "3BQCBnW5AXLvzCX9MBxQcCwRrpMEFF9EEMwP83YUfoksJf4keWT4S9ZJwGYjNQE5wF6t4twpZh1RGYYMT7cqVsox",
  "key21": "5jAmTqkQgjU7r2PvxTM5UdPbD2K8hgfTxZdKkZjxj7EB1YQF1xvZtqPWX12cRj2uZMvWExbGcZmAKwfGigqZss2F",
  "key22": "NTr9ga4xCFHYxCxuQgpTCv24bFV7mqmP52JnsYaDaBKeM2W2ZcJFVNS7AddYNuiXqkRTKc6gd9EguesSBAX5KZA",
  "key23": "4awLw3CG3T75sMgttpXrLtkuzR38M2TswaDYpiZ2EKXbhAwoyg5p87K8TE5GpZdVXUt3KiJuodEZ2Nh831actPuD",
  "key24": "pkkG2FrbDuir7AvqJDt7R5XGa6nQToXrY51x6U3w6QwURh2u7Hw3BZvwn3tyALpmpHRg27YoAibqAHxSfQXMjkj",
  "key25": "3VM6ckSTubJfPJ9Xktn2qsG5nfMuHeRAZ7F3SBfrTCk4hYhjBmahxNpFfjFHbvJ6zv2JzJvTFo6HW66b598qAAa1",
  "key26": "4joxanJaNsXmPkjXEYCXBCK8vrrFrRCYwcD4mCr5M7uUqYPbbaYp7XV1Ym3zKsjhjKHCSentJjvSHMm88phUCJXS",
  "key27": "2e5VpeHVwVZnqTyUDiopYhjTRiWfG3KDPuMQDN8pHDALdQ7RJLhVbzUQ18QtLSuw8YSK7VnMg1ou6jtzgB3RhoKL",
  "key28": "4rpJqCGh9J3w2ky3LDrpjoQmVz1NbLemo5hY5drrcUhs9wQaEx4nrBkU6CMqKn8dzkR1RHBZpUyfzrDGuwDzMcfA",
  "key29": "31q3bejrbHJpNhVDMX1Vm6ZowLm2DAuhaHqGJNdJHJAXDDSovoUvubjBoe471PbxkdJVMuEbu1EcFpCeAcjtd2nN",
  "key30": "4T3sas8e5c1DiFYidcKJo1yi9Y1qvDHBiHN58uyhWTr6qDqDfMP7hmxR694z9cbovH1LNRLjf3p4KUawi5LPjJnw",
  "key31": "5QQ5KUHWM68FHmb5shkWkyuMSPRzHEhRh2HsnJzoz4C7SWdpaNcc1XLUTFbWd3VNRJqNnBrjUHbBeeiVgkZC6T3m",
  "key32": "AW64hQ61Ltbb86EdmjW6EyDMYXj2jf9J1KtScUYfp8MbRSYkFYRMdpT6JiM8ffxcCBBZ9XSh7fHtUW3tPsaYWrF",
  "key33": "4Ak7xoysWYUem1ckXXGWGMw78aXxcuHNoB5jmY1w4HJDFhTozsUvrWiNcvG1VC6mmZ8ZjHCHdLQ7ji1J89ZrjUwP",
  "key34": "3xwNge1y4LjQTeaPCpjq8n7VFawr6Xezd2SjgGUEhYZDdLAqTbphu6qaKgXiood6smU9VxpdFaq9963EQtSiVSnA",
  "key35": "bbmTxTiJBhecFy2DzuuGBiDv9BjuzFDY3ky1UonrFwxnboStDTgnSuSmMS1dQUn72Tv7zesq3bBcHAzcz3hHt4h",
  "key36": "4bn6GS1cQF5Pyhx5YL2M11VyoemUetGbdWBLxmAKi82rYSteCVUK5MYeoEdmsu13Q9mV46SHfZmikN6qnzVPS1mw",
  "key37": "5cV25XAm1hWexq4GLGBKrXD5KmsWB7PRE9UusWa6bgHfSZYxAaVtM99gtNcCuEN8TeVDimqDMDci28Up3bxZunSS",
  "key38": "2EPAUU8J2cw5RCUCpN1W7kXU7a4SLqD9izbWZeyY1ap7CQzmoGX5BKmQ1WGzi53T8ZJaCsxFiy6ho6UXW29x7TUq",
  "key39": "4hADdQTnEAXQS2y8PWxbNP9hCNeZShQGW2fpTDsVga8ujK6Nkzweh9PFbsuTZxYoHnkg9AhGQQhTRhgZAGrX7c1C",
  "key40": "3GNxFA9SWkE43VwCfDcPpuLcSarRDAMwipX7xwsETTvmFxPBDxkNKtYn4aMokmbxeM9xpQbkp82BCvN1EG3Bd1NG",
  "key41": "4BS222TGhPtvqLRuNPDz8a5nbo4yeYzuLsbXWpgMd25M2TN81aNbtGNED2wxMp17LrThjqDyrMgdgr4YbZLv8WzZ",
  "key42": "4Na139XJiHzUxkAS7emPybaK7H52banVroeM8kuudqoXZmpBTdXRN2H1xUT4Sen8NzUzw5iupU3jQwd9cQC2Bij1",
  "key43": "3CCY7VEBX7wHtw93fUWQC3X11x1pzTVSKPNY5qjH9DoSzNinW8bDcYxnn3Va7wSNTKjgLd3g9n9uxftqVwHtP7G6",
  "key44": "4DnjZZ1LgkXLN7JsCYmBhwi6JYw9hbAUuJgTUDiS1YjYMhQKdGoDp2e9EtT97HoSqm3sQ8C2TGA7K3mhwSCdWyQM",
  "key45": "5ZgBBhDtHSEYXs3iLMm4Q8UGv8Wiyrc9MKeGQyR72YxVqyNtVH5g4d8G431XJFaF67vNWWFdfVd28d9QsbvLeiFs"
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
