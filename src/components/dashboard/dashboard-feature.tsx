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
    "4WKjosDqaJaX8Xp65UbFzsDuyMaNkHVF8wuovct4aj1H2uY1RaC3eKSBZEBTpc62vH3dDJGj8jm9nFFqZwcFjkzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PpFVhba82q5Sd197bzrxB6X2MzDX24cA5hv796Uiiyda4aseaHEqtRoz9tSCuEmCcs74KxdmNHxYCmrMi5QP57g",
  "key1": "5YgPhA7iz7fMTLu1a22L44rieasTuZ9MPTCpsRAY9SNAyNW9qmfHBXnv3kYGdi1GsbRtvU1dUpYSAcGKUVUhoeyH",
  "key2": "2BLu431ZAi7LMAWguQ1GZJr3U2oyPcPp3xSYGt6kE9CT7USnphZvmbdGETN4dG8EhbQeS9XCL4gvcYFhSp8F6zge",
  "key3": "5sGuyT1UCbwk2rPELnDNJCAG8QwE4Aw567PRfiHkPLoKkNK8VhSPy35kLin4qKHT41C4wMJETrV3kuaR7edn9GNW",
  "key4": "4SHM51w9tRiAHRfdJdH8KtT5XQeDSCtcMnAUSAVSUKDX81aCkbN138VnqAun2d238eQPwLxzM2cPQDrHKZ9jNL7f",
  "key5": "3q3r8as7yn3MQXdfSErCpo1MHJHMpQ5AxLnmnrkMtYJkmrB4CrqgcYEaacPn62HscQ3gbZZW9MFdJfwGQKrEJ6EY",
  "key6": "3bjUcFfcx3UdbUw2dqdgBLaTx74b13D1gcoRZ9Wfcdq7dKGHk3nLWAZ1LDWwLt4DPcJW5aJS3BfRnFxuYrzbJ32x",
  "key7": "24dPGhoCpd6AYnfaNBcqhC1DAf9WmynNLwnVbcfV28p1ZZx35iqqqXnEe1iDFWGWkNVzbjqgCMYNAyenGPGyHLmU",
  "key8": "WNCNtmHTMXTvmG7xzbCak4PiqBAyZ9tKjet5KFHaedsqek2m7jZkhviGcBYqNSSTUZdAQQdYXQezepj1wPy7si6",
  "key9": "59H65F8m3WnjzY6nGx6xVot8636gh4EW6UVQWAd69Qt9YbkzR16tkRCgRzLc2RBqoTQyY9hiJ2pcABjwUZHCpMro",
  "key10": "2JxtbXV7ALWoyhWef3WH87Li5DkzKACFEk3mxnSo7zbD2i7tuXKd5qpACSb6KcygcLYSH4WRHUs7QNSGACZwwA5s",
  "key11": "unSo4jDFWyiEGUW2QYFD1TSg2qcNtFVM8oegJPDb5enZoEN7ALq95jR1Jf1BoJkCoJvbtY6hQo4gCiFuQcePT9g",
  "key12": "2Cnbhr6EkJ8yfia7y2tE8FJ1gz84PyHQK26sTENDxHvRFwGa8H7De9Rufu4LKMUL9t4NXCfei4mq5eMPYGEnpdQt",
  "key13": "5UebigPhKYdZ4RcGXMvDGTXMoZbUmJiervbB8CEBC7EFUwCQxRy2gm5XNoCJfZRQjXq6gZ6uzUBTpB3yXqCGmTCM",
  "key14": "52yEJYb1gycvSK9yaoa14qzqgoU2HtQSnty7Jwbt8a55PfCdc9pcrhgCqBsiu5qPoqydk62NxDwrr4qXNjzbbtVZ",
  "key15": "4ug9WMANkeuoXK8FKFhude9Z61Wz9LeW3qiWSx928rSEUUAQSkaqDSrFyh6m9PJgBFH2aHtWcdmMcpAt8LBLhq46",
  "key16": "4hALbBJWSwg7QuwufYagVHb6MTcs6JZLrzsie8a93vigd5FvSE31Pq7JyZbjHrzDSiuHddpqpT1EFPV4NXEDNoW8",
  "key17": "31zXSdKaS4pZykWcqMWKtoL8QkmUqe3H9MRZ4Ejbm26FhfLb2JgfVgq7ZiTFppY8ySciapLDsy5dCS2sS9GmjL98",
  "key18": "2HhX4FGxGd95k7gw6bWHYm9tqrBVLE18gRBBawpgrYfoqMsDtS4fVRuGPdPDhck5Kmx2SMfH7iNTEsiJusjzef2G",
  "key19": "BoVkCbofktSWaz32UbQcJCs4WMjsGcSehrhzATKmoQH2jwQZGWJvPEz4SWZk7PK7vM6WXFcaKWCBMm6DuQgmLsh",
  "key20": "LTrGvScuzn4iAYx7ijn8oaizXgSomZMPd6rpKPb7B9SyniQQRRJHPcSW2DwcFhYBi5it7RsTN9HzLpK1TrdgpnP",
  "key21": "3XmLhu6BDKW73Q4ijQGLs5kpdnyb2convC3mhBiyuroQSWEpaw79Kpm1zeKpHNm4PA8kNczz6UtSJdzGCXzGARYE",
  "key22": "2JyjzZGs9irA6nQuDKDSCjFvMkY5JVAgdKjbezDeRdaAnS1SfZTsVZeDcpUuonjeDfjLz1Jc4P5ncKYVg1L4bFSn",
  "key23": "qSAoKpj1hGYtUimwZJEi3n7YoL7dEbW14E4gbTZfMpMXMRzayGiMMWiDNVRiZonw4o8qBiThps4htPCNFzdq7Ks",
  "key24": "4XXKBK3WdpgdAeSrcbPmsRQjrmKmV3BcTGzfecpTNDNb6fUGRcmMd7jrvcEJyW4v5uY8byyUZaQRrPA9HZApjisC",
  "key25": "2MfPTig56fQKb6asRMqZqkdKqrTyQkRqZm8ZSRK49pNMFr7XXW6mZx9EGN51uEjpHEXQp9mSqkvLVH5Donv8U9QS",
  "key26": "56GanSWVnFFg5PwHB31n1HKuwjaf137xJi3bC2Ngdhxv7cvPaLaqiNb1UWAWvrBn1iKfv4LLZwYR6YD233BFZeFX",
  "key27": "3jepqkzdiCYbuDQc8FVvCTV4K8UuuSM7eonwsscrpsBEvyAF34HBGaa9CTB3wNdD6kTK15s1XF7hZ4wCnfFnssh5"
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
