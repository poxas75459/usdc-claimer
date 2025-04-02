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
    "4VdFLf5XqxC1mYaD7jHs84xJYBH26TTi5bWQCqUhFrqENH1FQf8nebwodmBXrY9vPcGgwj4ZVu86YrHkAgNqt1X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44c8tw1K5o28GqxhKWKwx1N2T6Gx5hPEvdtMVTCUvcidC3EmDbAJTXCRUMYn1eVGjjG5yZQTrGE8WJ81iVHgbF19",
  "key1": "3kfrQhrp2PpKTfs9JYvUe4zBa1sh7svtSEAdyf5o7PjLNmE2X7LY3zzAgL2tquC1Tsu44VvJNx4zFVmzkp1REMDf",
  "key2": "8zLkWY7ALeoU6k4yvMhurTG2rggoo5GFyPSGSkB6Gehyiw2KR6vawvLA1cfvMN3qMRszNZwbbJdxwyQQFXsbcRb",
  "key3": "3TEkNu8N5NBe4PrPZcW97tkzckQwZ5e1gdixAffBbur8CsHRVEUKurhSzkGKqirtjrxUhUknzfjcoJZSHDUWEQXb",
  "key4": "2K754T2JPWguxC6HnaNSJ75HVkS7VLC4ydd3se7pXEbxX1mgnb8Kuz84XuNsGxU2PDAY89vGGSN67HfVdRtonKeb",
  "key5": "2vVTmR1QJQ9cNQefmAQcLszZaQd2HfmaiveskD21K9tY8qGHn53QjqhHpNVuNs6XhirUfwUri4adUveuR9paXVYa",
  "key6": "43YRm3bGix7XUzoMBdCyG4Jd2fARVFHcMZ7PfqQKKQCdDAuXzYPushqB1RMFQXLMk7ujhrUWwb4dwgSyDYofhGsx",
  "key7": "2nHEufsWbxySHTLfmR96muXDy2Bm668RaARiGSWqDi8N2eKUt46QGCzYEj9g3Z38iWprw4JXeuQjrGC1QsdPrHRc",
  "key8": "5q7V5DS1iB9k7KjwHEHWuTKeP2ma8rSPVKju5vpVZw47Ep9TnjvwrbF68fazmwfcYUfZmNWYRHEptxDSaaoqx1Nm",
  "key9": "Ucy17hNMQzjCD5EgbSy2hffGrbbsvnDSL6MhQXGruNNFNhesK7PPkdKiQ4cXutQbgmFYZBNDxF1X2SGJvw8oMEr",
  "key10": "2KKdt3vwmcqKR4WWwJgehQWnB2CU26tQnBjVfkGh921tBnoQwg8P5YNGwyS52rFVkhoCa7J3SgP1GPaj9xFXpS2w",
  "key11": "3jdrtEcht3b9M1xknJok6WdBcgAQ1zwXUoTh1qQZDCG5CmcGmMxKogq3THihpnnUX3Ex6Qrf67KkhYGTkkjL6xra",
  "key12": "s1x7JE1P3h4r2DDmbrERzc5X77DCEWf6whT7Nm9hD9mmkdMgLCk7EnP6ec4zm5tfXyxoxWn9do2FC3ap5VLG5s5",
  "key13": "28T1acdvgs3qKTbjTf14uqpL6gxePeZVi5TXU449tADF1KEuPDDEFuXDTqxiWS8iq8eqCyKY2MoQdy2y9mRPpvQQ",
  "key14": "3DnAXB9imdqPoN3jXvJEAcUbxsLMVqeBp9Y5jwrv9FeYqqxw3wgDv4J8r7PE4dyQ7pp4emE48i8fNaEsaAtBoeEJ",
  "key15": "oFSCuTpyFPTGMcKP59DUJMh8xpxhW7a8z9RBsN6UQyxpST1sVVwboixSVTdZv79CF1dEUxat4KuvgS2qqAVYuDU",
  "key16": "JfgWXu9GyxYzxPbxoSDnWFEsLLvn58WRXhYEea1ztYuFxZenXMjDifiEgEG7K1dMRXifD573bWZgXQxDGj1JdQZ",
  "key17": "HhWrgpujSLg2iE74XPT5xszdks1Vcn9VANtpTvyQrX9cyWWVrXkZywEm7vPezc8dMN3PFHT5uv5dcgrbPus5ZvT",
  "key18": "91mAa1PTVokJa1Q5DGL6NkPVEuHV59pNzKjDfqeBYYawxBghmiXytcxvHAEXEGV3b8QSjE9wL64ssyiPai2Y5dg",
  "key19": "3N1FmcPJB4d6t6gAN12uhyXkjU6bjxyVUjykyF6RkkYUBoRwV9mgzmMTR5dcosZn1T1JYZXny6d9PCEyoY77CAZ2",
  "key20": "2eLvHjthR3An42jhxndfconok3ZKR5Vc3RRpNsUScYwP49tCYa1pc7yQBjVLbuGbXgnjQg5w3sYvKA8AKQJQDN7P",
  "key21": "2oWEqzfNVaLtSDNHWxTgrn9DUzcy69SN95u7wEwXGG9y1Ba6hLdyEQ9NAkkrPov8wWSnif6j7HA8TZAwEn8v4XUU",
  "key22": "63PmrXvHkoRuH9XMznmEFBrTeCxE6pUBG5ajeFmFwsHGcSziSNnpnRNAFxeTEdbJFmQnBhuRtwvsCFT2iXLBh4XW",
  "key23": "2djuXYnSoX3RoHHVD2R3isomk2A611KyRtJ17sRYXgXr4T8C9ShsWRNPDt9RdMeAC7kA9TceDm5QoHV1aLNwonVg",
  "key24": "5hUSceCQrAFCKFzp1xBuZD8SmajYvkXgMpuWLFPzERrxjE5yLTxpDWkc1K3FXAh4jFdAnjg9FAhLhQUb8VwQn1Tr",
  "key25": "4ZpYCmuSQkJgtNdQKuMTvhjs3guSNfiYiyZSkpfNePTYZFen5K6vZykMBuJLqnq7bDQC2dLgqhnWWQZHP9umyCjv",
  "key26": "2GFR4seYvWUCiAxhfDPasTHeSpnWdmAhFACxAMDNrtrUv7p4z5kS7D625VcX9aErY74DtTTbrKFWscCUS9zjA2i2",
  "key27": "VCqZx2A4MwAQGWzrEVoNxczSYxaGoYfABXXZ4XfmQeKSbVtzYx8AvS2va5PjxkynNykDKrt9QEL3Y8i61srPYsZ",
  "key28": "2CLVZ5TfQrjv2EHe7KcAPvNZaAEXEA6PCryCZDdrZSApHoTU8WaBQGUETkp8mo3T5NV9pLrPMyQEsysCBuQHKk3g",
  "key29": "4QLk3R5XKCUvWvejeXgMPbPhRx9ZYHquWGGnND95FhKnm5J1dEWbUiQcV4RVhRKUYodZfi43LpaKvG11P8CQ9uB5"
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
