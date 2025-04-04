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
    "rcrC6KKuvnoPCCB3d2KczMbokL7Bwbj7NfAbhWDo3zmDt7osezQXNjC8fPZX6Fp5dgdb1ayjLznrH93pHvqMBbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hFPpWgstNniZ26JbAN8nQsKD7FhpDvqu9ecvJmYEgTNpZCo4gYx5BWJg3NjaN2dfnDit3Lt5UKxPg8kdQomCqH7",
  "key1": "5LwQyk4RN925EEWEUTFPWaaNecmScCGpdn6MCFmZvr4pXmwbTKkmn4vDqkjfxQqrQ6L4JtnS3wNecW7AEihutbCS",
  "key2": "2LaWWho4KgcwyS4VpkxqDBhTGzKt7z11w5VWjdZW1yHVffPjGE6myynoQVu4EVRgbbGpEhSTzuFY8gKPfypL2npJ",
  "key3": "4AVfBr8imCBg2QSGXKs8TtjpVHVkW9Featnyco9e3W6hzqZJnWofAvdyGGGXeyLTc9CSJEBRxNYxe3F7eqJm7BvZ",
  "key4": "3vbmYkDK2zNqY6BZmGnkLHnH8YqJdf5BDFgvLoYPHrYofR4pCLKrPbKzjkUZLSx4oHtwzpDtch6n13onGobYUBU5",
  "key5": "3Pg4MKs86TUM26DFtmE4yW4QWVPpHHXCuRSbmJwVAxuyq3dkQSsUJ9aRcGRme74db3MvxKqMhpQAEsp6rh1bsSs8",
  "key6": "586oo77TA8NrtrErGUSicJaAF8BuUDEsjXy1iM6Rk9q8HEQseYsHCzbwEDtEmayTbAm7rS9NTN3Bm1GK5LrXXMcL",
  "key7": "X4WotSxkuiQgitBXBV3ghisMbJogfb77FrUHuPFXkUvA3frGxXdJa87AotfcjDWAY1cufD5ddrqXUhNLnDULdoY",
  "key8": "3vVSLFQoToLKortkJzuePSoJwYtDDXabqosPdu1vGEG6gLM697F9gckzRcDLWTesZUncJzXpzY32F1hmDqGHxfNg",
  "key9": "3s58WMQvBfesbuPjmKAZcDbpZKfeHzhEKBP1rWafaZvZRcrKxWjxPVSEjXQoNjt8BaGyN5hUr9AdyqyXkyvwRPec",
  "key10": "2k8mywRjW3oEYayBCmEBiiGjzHvdF7y5hodYKMxZ1qhaK89vT6q9wLNz34cpf3dtu8sWiVet3fkn2LWAoCNYsdWf",
  "key11": "2nSGcXsUy7Z7uvDv8SKjKtadxHZ3YEFFddZ6sRZthD9fsLXasY7Pfutau9weJXds8HeL2tC6JtBgRsQLVTktZtP2",
  "key12": "3ANP2MYadmzHGo4G8m9yJPdxr2ZoRAyMPDMru7HqTKKTLNa3Fgoyzg4UUbHmYwQekW4ABa2QLwE4GqXyZuRcy6RU",
  "key13": "5HUU8vrSLWTZij7r5Q6RvDJDgTsrJi3Z6hNYirbdfLYQjNprtEhcZv3qNvJiM2Y1uafEb3HGV9aUk9cRb4NiTp1p",
  "key14": "3r74c5Ub2kDmm14TwSbrDjX5qb7Vamy7XHMv5okBRkNb5ryRsfsqdhYLemuZii7WzFMNfUmKBZXmQnvgVV478hDA",
  "key15": "G8747e7sXpgWF4xxkpEniUzaHVxG5VD4GnkZMj1bZyEpfAzYibwWq7az9PKtaV2w7gWbFTzY9ZBNhfjZcXLGp9Y",
  "key16": "4nEqsagaScWTqFAsrJPtC4icZHYBsmDkH6iq6i9DwsDdsL4mArdQESg3gKygHc9SJRVNnP3YiXp4wbabzZhdf3nh",
  "key17": "MQGntQws6Lri5R8o61XC9BUapHFDRVqSfJP4QtNSEiryZFaFJACQfJSpuYCPHzyzvPD2DJW5xR221PvJgErAAr9",
  "key18": "4XWZyZA6NwBSAQYCxwKdms1XFhrsUmywyicDYUVroha3PapD9mpZfbeg2b7AMS7ZTpnybdaRGrAyh95Gj6GiMEyP",
  "key19": "5w71VcDWZnvVrzje2w1WqSWMmopEnqDmNjff6171CPjwmCu8XH86NXJcJmSNttvVnT93iCUiv7Y3sWDuXr6nB7Nh",
  "key20": "2j6XR2zVUcrxzvAoeYPE68jMzxXByTP1bir9aSzwEWKPorui4CEaMkKnivagcnCEafsxFNkWwMLYCGMandpJTnyS",
  "key21": "XhDvtvgVa9m85TDaj8LwSvhTx2LpyNb7LQYGEeXhLPbnG4PtnPxyqjfuybFjYGhSGCfdX62qeM1Feop2wMenLee",
  "key22": "2kFa7AzUFfpZH2CeAfbsrg9qrUmjAxVp2Qg31c849nNJ67KhqYHMNghW7WYHmtJJdL1ht8CSwYn4dLQFXn99FV62",
  "key23": "4fUpHiPaS2shVbHG8WKisRmYhc7gTsJz3LTqZtmDc1KNEJtEjtkUWDf7YKt4tS9HWgz4CuUjaNnR5Aw1UtU21hVh",
  "key24": "5Rja2Xw75zTkzts3vcVLxTuhdfbTWiXEQAALUhRuGmfKivXzgLRVmhA4GcSKypF3dxnGGgW6EJ1brZLezsVnpiAZ",
  "key25": "3zpXZs7xCJzE9R4G2BhKSi5tfzCsXP2oK46m8GiW6FqVCspazscatETZXB5NSPsrBccKiAe3Vtc9ZUG2b4jNNM6K",
  "key26": "5fqb93YpQoJNvReKSNSomyfuTRa8qeLSJiURnqbVaCNaA6cYNPQgPxJid8iECruFzffAVU7r3cepWBRSGn6Hz2TM",
  "key27": "4QT1gnQz1Dzr6oDRKApRx18tkqSqSearaAJUJHuwUpyQ79QnNzjMfyJFAudztwvSvev1kz4vsiRxFd4i6ccTfFNu",
  "key28": "fuRdNvjmpaLxMuSgBcqsvmAmLE4NsTKfNYoqDokY7hiJSYqvgoNU4LkdPY2xmjiwNde4WWnvcJmhZXEYpwvfCvM",
  "key29": "3SKwmnsh2EDVWn2NRB7VSLC34ZpUoA4NGpGBmXraiEcHdcioAswAUbLRtzvy3gHQnRgJYz8NUKKNHNm6tMn4ngre",
  "key30": "41rhJvUxgc4jFirLDYz59ASXZECWd9nSvJ44tcT63Gev18f3Q8cVDz7ZAurhp4ou3Y5mtLDaQJf95MfmjaL6Te9t",
  "key31": "5iYeokdhcMzbx4RgTKM4SazBAk6WMZtArA1qwqgvoTwHL1kDLzTSWdSkgQpx1ubBtWaCA7yh5sujDW77TCBkd3Hj",
  "key32": "2EHdrZY5o7SZ8XQHriZ57NGz1YRej9A73gmNe1zmLiF3UkvimgK5Q7NNUgrZmJ1NiZfkS4ueyfmZDVdMQAmvH1nJ",
  "key33": "4npHdPZ3SkZ57UNEQQEJKmHBjYr1nUYT1dEqAWCvBfsjowTkXTeiFNrgrsnDSxVM6YEqxhc7g3yU5mPYyUubkD3z",
  "key34": "654KX6Djasq6UzP8eeqwsZQSqx3VT8nrcU5bbstiNBamJa92227RSMd8Sowo4s3hs3vqHPJQZbbr1SrT6dsDYGew",
  "key35": "28jTVb3ViFJo8P93oJpwZPtoDRS9hbUoQiD6K3Vqo2SCN693SuvBUmvtULBjkydoGL1KVyFU1sC82tR6Zf797ABB",
  "key36": "2s84dBgN9jjqv95Csu6XZFXP5ZdGQRdWHWiwPqgi8RZGXcH7ZNiRh7D93y51qfy4Cyax26arqoXrU2DKBCBwj8Ac",
  "key37": "xZis8ffyhpJWSfbYemrxqnHbzyXM4Qmx1Hsvmuwkuum23VkqjU7qh3LbxFKE4npngn74cAjq7imK8o1fnJPkch7",
  "key38": "5mgwYiQEY73q6YpBWhKVaJDBZQAquPyQXdEAS2HcYB9BmJ5HdeSNBQdxeoCDddNHbxzr6MCW9rRZ4obA3czM1Nf2",
  "key39": "46gPxsFtghwwoTiTsMnPy6tHbsoZ8E3tyJ34KyzQC5H1roXMH31pRB2v5ceYi8wH5FfShXXfaMQ7mQhAms5tis26",
  "key40": "2rqm3eeRjcpKCLP4Z5CFZronJ8vJXKrubWASRmr9r1tBrAdzfLAKsfA2xfofjLhRMDEDZAUx1coGwYogYe5xK4Zv",
  "key41": "5Zxm3ogSzbfAQSEvwtXLmYQYvj8aodYh7SR81rPUYr8xR39g12Jr3GSJMLx2kBibWbqQmgfVidC6SBspqeVX7quv",
  "key42": "2R6oqpdL914CTwpL2PfHRJU7SVvmZvS7V8ozB2pPraUFCfErMG3xyTHQvot5qoBr2dwMbajPAVnjQajaBBzeq71k"
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
