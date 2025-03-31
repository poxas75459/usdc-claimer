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
    "5vtZhULxvNrZmURRjko96S6mHd7Kx9Gkq7j3ozQmJnQmiJM7FftBZdyMpTMQ1QCzQ2nSZ6K9ebBJ2j61gKcYpnTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ZFZhTWrpxc2ELeYoZaTmqisBsSXeXjH7z29k4wQQVuC5hdUiVdosGg5FEtrvnf8XWQzyuTC8bxieQi8q9KaJgx",
  "key1": "4zfsBtkRN8FPvWaCLC3urEhD8wAiUJcNx4U3HkxQGX8NstB3YWA71fJU6SnFUwFngC1DFNr92HKWLLifNjjDV7Tj",
  "key2": "5MkZ5953r7U5VC5GCQ6kBNckgMruBDuEpSRg1cyB1nZPPibonWuhqLr55pHz2yBvcNYR9HWCcs619KC1hR1eqnww",
  "key3": "53Ey8GeSnpbNEaifxWQ8LcRr2jaAp3KnCB4FTRLxGbsuyMpTX7qPGwhWwiZ7WagXxoSZX4N44pr5yMz48thMzZQx",
  "key4": "3xaCKBkYe6N8cekNhD8LQorCPvnFgfHCZBGhDao4xRWQ8bHzQrjQvaS8unL4nAmopqiPXgGj5SuYw5YekbaRRQvG",
  "key5": "5zXTw8u4H2pu1Htzdk1Kii5D4GGDJMQsMeACLa8mbyjzJqMAt2HFYXmtQEaj6Z8SsRiwFiQyFFX678A7vbP6TwqK",
  "key6": "nP8szWHZyqXvw4sNAH7RQkny6r2WdNrVwLbmgTBVcS7emWS7tE3nCvqXQMdJmm8Fm2Qzht3BDzE7LCJ8g3Cigfc",
  "key7": "4aDojWWnCKQxfsS5PEqaugn1DZEawsnf2RA1Cv97UHWtvgRnPJYkaEucNUqTDUQSNEN1gsJFzeGpdeZCZfNVDJJJ",
  "key8": "3QCMt8ZmVDDRXB9opoEL1Bhh1DheHhtLiXhfUbBLMTRzL9SvPDzxwwfPd9aEdKY44BD9beMRxfPeRPPBT74vTHzq",
  "key9": "gMLNRrvw5WQNPwmTKLjXv2putAvUxpucxYQ8RPfFao6FLeSuisgcucGBu91dSHdZUPrtSwf2veqY45gQF3wo5sn",
  "key10": "51irSBxLAf7rKq2hBGdnLGCgp4LDQ6cKaEwsRP7N45Y4bKaGi1NvM9ETQHDFte6eBwzc4fVmovUmxtn3byoSVMbm",
  "key11": "4VabTDDxCRtRqWysS5ju5nCwMQAnog3EmC6dt7NLYeSfeKfxzUpwY4fg7LtTBeZX3PCT3dyshMRVNNZ95H2kT5ki",
  "key12": "5kheKXWog93r7AifJPPLGcq2LkHak35zvZisQ2aLveugYL3e9SvY6muWkawqbETbHwVbQDyXKYuydK89y1zf3RKu",
  "key13": "LPVpBYYXGxh3poRu4kevxug4PA8duL9Ci4tqJ9SMy7Xm1duprWbUDRo7HZRPWCded9sr3erEZeamCQbXtG3CTVs",
  "key14": "5DkkWnvZ34Be8nFjAkBttskw2d2sVowhZrcK8SkYLj5ENBHgUs1CqhoPGXK3ZJUtVPVa3GGVXG8FVv9GPDkS8uaw",
  "key15": "4aSXvMWBG2karhrDoHbAfq6an9er9d3aQdTFo6LiB4Qokp96or8B7h1LjgL3X3vi957668VgLFuY3WtHAis7kdxp",
  "key16": "5kQeiGRKLJnNFWYpeVrSiSDdyVuwojJNFDsngRmvnS7qv9MC9aiSmijQfqk8fMu9NviztguB6HGqs2zQL2NNXZYs",
  "key17": "2PGRzaw5N99P675YdVuHDScw3iuYXmBZxWqsX5ofEB3ZwGygYz3qzVJxzxaTn5jhVfiYy4B1H2Z3ESwYCJHFVFdr",
  "key18": "PgYcrCViJtyx76LVTPoAGh7EcCTkGQ3iAhT737rhMKarEXXLnjHXP4vkgF8xFzYAYGKQ79oD4FBdd8Bnj6mPniG",
  "key19": "Xzzk6vM2Ve5b7qqbbJbXr85LSSFy5cc3fxzSqm5XgE3TLcs4his2NUB1A1bTtiAk13UYNkfFdwE2UjAqmdhkBmb",
  "key20": "2poFPhXTWw9o5LZawF8JS1T1Ywr6DoBJAX7agbi9aGPRjdVVobytzQ2ESgD29cpSEaPxCQeGejzyed3KxeRkekib",
  "key21": "5j46f3FbmqVQBUqEZreJEpv7UVr3P1wJQ6gJyKpbsAXWFs2UZs2w7f2FXxxAJL6RHfwVWinj7BDE7D1c4KSM818m",
  "key22": "2xxDgCUKWfCP6WUtj4mokwNkia1McUrshdCpWkGcgKikiPn7eJVy6yoPsHkcPEHbpjsvmtwHTfk9jLes37N27Qru",
  "key23": "3569Fz8jXaGm36uHXqZWsBHYKn9GydCytDrVx3RXB1UCMndDTgN5gxCvKeKYNcWWQ7SytEhayGn9F5sxv1gP6V8G",
  "key24": "xX38RLZCQxPde74oF2BfXvSCqsru25Gz2EBHBWRVV9v5Q5M4Tru4n7N9yALdFCKZg3115tp5LTJxGDiKTEjbD8s",
  "key25": "2FHf2FJ4VN3g5TuxaNu31ktR738iYidaLxZEec6hVHQL1Aa3ZcZa8AsYt21YZr4NcPR6jVGmppefTLAimRCasZGt",
  "key26": "4KxZt2Z9gHhzELxdfojXFsde3wuhjDU8ibbBhWAWNVtVpTYk25vNYWP8G5qxwRrAw9ceq4FaXkhsMDDrLRvPkNyg",
  "key27": "4sShP5SHp7P7tdyN3xvtVr2hvQb6m74VckizZ7Ac5asVKb3G7JifYBRJeCrGHewZUUUhPAALxvDvRou4yVcun9UC",
  "key28": "24NJa5AmEUG5DRhXXFLLiDMrnpJB6o3jESa3regjumHXFLwjQV2jQnEEAj9zkYaiVDvyjVpZBcAFenvJttXBFuHh",
  "key29": "2ukqDgMD3oUuGSN49Vfm97jYVLy4NCzT1yw2aH9Njcd7ne6DmhKxggEqGaAKMnjgrNNh7xEhKsxYoHQuhU2J6gp7",
  "key30": "4xwBQdh9mfm7cSncqCTwhKJXKwEMDviHAcb66k3fMQzw7Qoi2FmmekMzoC5fanJhc3tme4yuL7EWedEXZiXqjtVS",
  "key31": "5zKUY9vPP8tpZW9hUyxcazoXRQSnamoRUabBo91B2kuqh7fjRBBf4iEe9zU4XVsU6rKcZ4EvQvZaKUBtZGRtP2ro",
  "key32": "2BBXt28dTiUGb6utVFFS8aLzLYa3xmbA5H6bKUEqKFiRiEh1XsRqSjWwxzRSCvwPYDFfdaS655R8E57WmKWxwBf8",
  "key33": "3D8wAS8eA2FPsmQQQNrbz4GTXdLons9QXDNMNY26RHGJCyFpxEDQXwarXjBoFkyuYmDp2AtcPvLegF3znH638WhU",
  "key34": "2Hn3zcKvdo5mrbNf1szybMTKwN2P593MKiJgTWdgAN9yJmjNFCVpxGS17Kxg56EP9ioCF7YmrfgFZxKiBrSTzb2q",
  "key35": "5FfuZrB6Ko2rV8LdPj7vwXv5PtYMNk9G5PvYpws6eCF6Az7qWMiqS7NuVSKGh2SSGzXXmYWgNL4NbhWsFZCGAH2z",
  "key36": "D4Rz2BKCL3oAhbgNRujt7eb6gEVfacgjaNenUddUgN1rvHkznNwg833Z2Zoruamsx75NavMVGeffjQQzuuE4WN9",
  "key37": "rEXNTDUA4H3unZXSY3tJSsf5aATHKP48pGPqe2N5xwR1c9SEk58bYYuVd8gmyPKFcgHH4dmStCBN3iDSurom4dR",
  "key38": "54D5yD4ManXU34SqqBbnes7j9hzDDQd3jQ4FDRa4FfTnWugV9LqFPHGHQxNHVhxwFDb6woUnmH5ekPBAZ59CyNWR",
  "key39": "3zjLi1m94rxUANWXpbMdqEnqHGf2YaoJ6EAtZp6jbAKeC9hRQJuRtybVc771b45ar97GQH1UpLc9T1UHuFBkifCF",
  "key40": "4D6PHJxbW78ixUrUkvyfJPuEi9bAKck7gWgwRQG29nH8hEfouCrFTUn82JM2tZ5WxmdCqj4UpqgSfxrFQEuvBSM3",
  "key41": "5VLYYVgkCB3PWe8DJz48o3Kd1A8cFk1bWe22EKKHpHURe9SBwcC3s7vPVjkKqnExUCY5tYrScLTJ4NFbiGCfTFT2",
  "key42": "2joT6tteBioiDYWyv1o6GgCgCJ6RXye1nUPkE7pxrWsYMJ6h25qmLKmDLkWrSNhP6bp5kFxGF1iJhKypkcNxj8gL",
  "key43": "3JrfbdHZTLY6RKZPr4fMmFYJVnS4YRzNrW2DKf4SNkRba24MwbiAmRzzHvQYrHtUSu5nttdhaoAHtqsArf2PP7d",
  "key44": "4Bez4putXkN2pdNvzUjA91LzYdR5T4FAoxW5d11aow3ssZrq4xCM5g9WaYRmsYorhzuCD1DhUZZdpJjWU7uKcyHt",
  "key45": "659PXXq18y3t7nfLVPCtHHo7wJvo6bvVQY5HRaox36HR9U3o8dDrWSEUCDBA5R9PVybjjGozju4KszR5RgoCQ9SM",
  "key46": "2qidfiqjin3TqYhzeCrmBHJZ6tBgfxjyTnV3RZPGNivQYxs842WWYCpA3XLxYccJntDHcqng7suVwBS1PVh1NpfZ",
  "key47": "2nkRsDTQjSBH7WZbyLfbYcRt5veN5mL3azATWHjasQuDiaPaEkH8NQwDimHLrAfDRKR7sny9HmPK4GUCsMefUTX9",
  "key48": "22px8GH4czQs8T6Hakix7dtwaUVyzx3BNH6JhHe76NAFXmm9j3Mu4a12afAYLHDaTySZwypU2BdErXUJQh7AXaYA",
  "key49": "4Fmoovi4Jndra8RPuxQhKkZGLQdoEcBz4qTm3T3sd2HNPHPhAgeg8bqbbdE2pEFBXHBHoCbCTdvdSwvgcTPsd6v9"
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
