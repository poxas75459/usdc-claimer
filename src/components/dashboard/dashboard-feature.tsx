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
    "3jjcTwxeh9oSMijzuTPZmwUqCn577HwEKYbpdVCa2h1udCTQA9M95FSU9nx4uAuqtfbj3sQM2CVaEvm9nAq4pt5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FFkeWnnVGgr4xZjtyCN6B5MBhdaVgLWcFpBDfYwCvRBUTFZKPi7YXtkUaaSUMZC31ByEiL1NoQ8MLZYhpczLZcK",
  "key1": "33Rj4iRjDLuhmDNPYSia6bx7rxEi5syrKNwA1D3FFomEYTfhXt4msDju4RRGDWSPur3yrXdfPWMRtFUsSv4euYj7",
  "key2": "4UJuAADjwMMvtMxuY49PNDPjkao6NCuF7VuX3H4kdPepUDNQVrFoHQq9oo2PjddBod7iwQeAbpbgikjw3qrPjRku",
  "key3": "4nbGZeGSbxa8trRi6f6yPTQbyzXN4N3MqN5RXBY5xaFAQVi5gd7UiGg7oMP2vr9igHFR3wUk44YKG2S8n7YDE6EU",
  "key4": "5Y5Jwrd5F5JCEve97HQuDA8EmSqhLbzaZWVgRvviovCndeQrmQvpw8wBFzrJmdUHz1xCVCa4uSuQHDhEZgDRriTu",
  "key5": "444iPx5V2sbShhY5WeP4eUFhoQoiTQMMWX2XM63V4J9CU99tpV6To1CRJAo1dZexJ8N9K8jyxHxNm6f3uat3QBDc",
  "key6": "61JqsDcTY9mnekaiquZVqZomzjgHsXpKSPq3szUtBuG8iJXc67YAgrgGTN6uTL6WLWcKFG9reaF6Dgnmk5K9SvJW",
  "key7": "oRnVfcFpdyCEkHtR5BGZGts2aDcH82NLigdzE4ob2RWJoSoYwCcKn2eLccqrm3WGzyZmD6DvkMjGA2LhT4GWSNN",
  "key8": "2z4Jnmwxj6sPzw2476MsdgE38uhjPdpPTibaTv31R1ShMqPPt2gqHdzbceomNHVvHepCgRT4C4722pgWSvJ6Yehe",
  "key9": "2EgKdUu3fUDTFjYAE2Wk5F3dpaNocmVVj7J24wAScBRu3tAgeWEdk66HHx9vfUhWYsiXTWuS4gSQCBTWHVQTYnoV",
  "key10": "2ia82RvYmwGQxECxUs5Mn4RUzwyjzvJBGhHAti95v9EiUN63XX3ACPz4Yb7fyYkkAii4HFq2kvTyx2oVfjZAuxVe",
  "key11": "4NuJgK8ga3hSLZMBgV3oN52LvdXeRiajNQyxJZtonFMby3XRSaV6cmMtHs6x6Z1vANbK2R4VNTWbTv34bNMgxQft",
  "key12": "2cskk1jKQzA6s6jRUUoYLEj8cQ1dTAKUyEps6jySHsMrFE3DhXCbHxbHjgtdKgpWDPrYwsrdxYNzJwAQzru93zbQ",
  "key13": "3BuvPrTKmPGFrrP1wZf1c2Jvh4nEXvM5atparqaKTN2edboX13purhxNE7rijxH5N7UJBZZTxSWZ73EJEUSLcWLg",
  "key14": "4NwpNdQuq8ceB6LjbsLKyy48sLenJeBKKXH2aUKu6iVSiKN2FFYEaQbxVoYBdPoeeArfFsLFe92HcQucJGWmwHmn",
  "key15": "5VEhBGzYjXuiviAjYcDZynJsH39TNwHUx1akjkyugNFspj6M1YH9pD59oC8kyigHwKTUSQoKcVrWy9MT62GAPEf6",
  "key16": "f7WqoUfhzANwMpWUyM44kmq2mFX8tyPJ7vvwt7V5wGSnTd1srzz8KY4gG8wdB1jpQSHMnA4UPE7gL5bkuAihrcd",
  "key17": "4N1Bf5d8VFiQaCnyLdA7yVez64YX3iAwrEGujoDozKtbThXJVScApgDm3wkAWRgxTw6ipCBPdTWRAbzQBMzbwvY1",
  "key18": "qSex1Kiw36s4T9X4EkV6qdGiA5owxQRXKvA4QsmPMMEgqknqrgfpRHPMvsPjoXMTJzKReaYH8SH1d7VkBjRGDHY",
  "key19": "32s45wSjf3hsk5vWtWFNf1ED3jK5ky6Rr88CvWnSHV55hmTXxtV9mtbQhTVVt7RfS642JxfCDMdzas7jEyuf622P",
  "key20": "39HsteAHdCCCdcD8167atz2BXPDxeFzKP96yRC4DBTugpikfru9T1AbRqTfB8oMaJmezgrpg9tHYgv42MjdTaoY",
  "key21": "3ipnAepGfzcsMLzPRwaKXMLmfsvxJ7jPG2AVs9hkApQfWeiwpjQKCKEFUqavVRwsp5b5bB4CH1TJGtBiBcuZMRJe",
  "key22": "264T2WvK4XAYJCDvN8SZbf5qVu3tjCt5AcNYtkZaV8YVMNmD3UzSgsAHm432kQMPztNJNY7gAwqJMV1WUw7bfKKd",
  "key23": "qdV3CoaLnKPF1kbQnD2r43h83FzrvkWZdb8BQCLJ6sr6Kb8ddn2WE8ypTqo7LfTa3PfEbcUxirgz2AbpWy1eiJh",
  "key24": "42XKsR4LiS3nhkSBBFo9e3mtRJdbuAB4ELbmyxwYhNey3zZ9LxRbxiPVdDychffb9zUvRcR5sWXDFqCLS2GLamQy",
  "key25": "5Ccbej8fHWhKCBiZDkHFxnznt5tWReN6GiLSYbKiYahWzszN1caseeX6SJCNE7KG2MK3hoFz1kCeNPCxNiDrpN4h",
  "key26": "QFcXi9h5rqdxM1pf6bcrPtcubm39s4oc2NMjmT5P4PSu4bu2UPvT4P1CCuBPifeGkggmoiNMxwj1iuFqjhYdAWr",
  "key27": "5kqyE2dSpcKndwVNTiQ3x9z4uJoG2roYLd62imUdR91SAq16BPCDEsjF6HRJMjmPX6gnwVdTz7zmgVi9H7aHjhct",
  "key28": "3uV3APbFY3fWnmvrxeUp92kQYJeJkwey72QmmFZbGjB6mKkBRZCyBe37mK6GmgC8uNFdiNnjye7MH6BZj2vkfcVW",
  "key29": "eCq2e7hTAqe4Lu5bibjpwq6C4dWFHbQhracKCQEM9deWYxLeA9QAXoYgffXe3CPH9ejg5ey4eWpBFMbQHaEYVTp",
  "key30": "3z1DFG8KWQzpyoxaA58aQK9fDwLXWbFrQmgrxnYX4f6r3vPRDuSeGWe8euhiykTVxTK2sjdDPt8FEKehDxi7dnXH",
  "key31": "3e1bGwM12qsD6h6YLSnUo9mka4coN1TY6BDpc3bcuWAYFJB4tVGSQZJPqZ1nCyJGLsHaQgm6kznSS69kjQri5oNv",
  "key32": "4ryFd96yWf71JWyCcfqSVReZDAR83GWf1wPDrbf2sfa8rpeTPsjmY5EuWqYoJzTaTZw88MCVuEHXyBmKssSLNvUy",
  "key33": "4nnvvwLiBq7WDJSr6JQUNv81u8kGyLLjh33oRmsUjAWQrT8RHm2SEfD8yYk3vgwV7C9nM1fr5pd5w3mBfqKu6yNw",
  "key34": "3NQSfqkhCTPhh7JAiqwVoTw5thpiyZozCsFhrCG568kFZ4wFbS2tKguXk1MvmWmnRe2ghzK6SwNcUfcQtHeB3ANW",
  "key35": "3EFbcdGm3doqvDTNvzeHyX6dxqisrbbYoYo2zPZV2i4Ry1US2XGWGPkSt5CA49ZMwRzeDW5QNTez6RymZU6Kk9DR",
  "key36": "3VjYdug9wVoEMpiVBa8UE8QUX4joRDGfK9fB2JfLk4h4e8oVt7HTFQ75hoCLwhqr2FsiAqXwzn6vdrNrewwV5BQx",
  "key37": "5JhuvWf3AcFubDNSbQztmrAqk89hVza7ejsVWZ9yY8B1XMgZxtVr63D8juZhzsiiGToBz39JeKU6SVnKy6yo8Rvi",
  "key38": "3kWXgd1aEhvZSQrFsBnx51DWPsHdRD93iwuLwPCyNBCfn25v6SUu11Q7EpxYnGFdZXmNU8QPPJc5fKhgyjGCeSVj",
  "key39": "45YjG3tLfac4c8ouPPENm7cwTSE1RgD638GtLoTr18W5U3WdJqjBJ8mpdJA9J3nBatFKEvV8isyp7q92PErLcW1o",
  "key40": "4rhC5anNSaZ85YKv7hNXKJSkYFo33JrtdAy6NdqCWSbun1DBUyx32EtngtssHChHqxCbQv5cDCBTZXMXxa6KSkPs",
  "key41": "4acDWRp6sApQPRWS22jcRz7aTD72DesKJhjLkQimGavUT8eAUvjeVXmN6v5kNxtP8gudwNVg9Bi5bx4aavGZxswA",
  "key42": "53k3TrZ2MPXk5Jzvs44YAnUZyGH5ExVsvtJed75xW9bmkd5z57P98Megsz9zM7utZQMMjqDxPYPvWT4BucSU3gxj",
  "key43": "5mYwzevEy1Mx1eVS4sBLUjDcZsHNurT4Hn1TNbYc3LcbXGuDcpTMPF7oHiRsihGLekD76PSCAk5ye8YKAu8ZZ8tr",
  "key44": "5BtNUcG6irmsyPMEmmWyAEWEjY3iyGYpD2q6DjEiZV5px9KgtkhDhfpC2pa4jtAox7ZNwPP7yztURB3cX6Zx12y3",
  "key45": "22azTUnZKy5zhJqi9k3fy5ra3c54A7nju1PsCtip8nMCqM7Wohzy67szFRs9HhQuj8pyRtgWwot74JYv85VjGwnJ",
  "key46": "3Vahu8STTV6DqCePMBjT8CQ8KfHgTzfqcd97uaWiQtfTjLMRsHAYSYnkAJ4Ude7B67kSeeBjS9tCejfqbGWZdPbC",
  "key47": "5uAsDmgt3b8KBD21HQ259RoZSkrW3JaJxC3Cx4FrVqAtw3aiiPgRAAapsptWbg9MaX8xrJN66P3BbTQetWxNkFSr",
  "key48": "4G2v4FXLVaCXR4YVot5Qpjvsu9wwKwUTraaWiWuKPbwm7qEzeHxbC2qicJyEfxnfuGozb9Sq1N4u4SmPXAvQJc4b",
  "key49": "8jvqXHp1ejXCJKNJtcaWaZ5cNR9qSWhMw6LNMFMGx194ZV42i6jzL8TiUh8c7cV2g5zUMeEVHXC6ack6u86Cxy3"
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
