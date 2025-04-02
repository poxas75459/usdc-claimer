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
    "3th5hZ6VywhNUNhLqgiMkHsiGVj9ukrpPr3evtkijWVLpPArJi7Goi2sFXJL9Gxr37sTFnf7EsJrSsjDHr5tpner"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53gU1kmc69PoBcDU2BCwJMZpx7a88vNJneFqbeYCtayvRLcj6GRdvbbCJ2i5j4quZ6QjXHJbzrE8piYhDNo2wGy6",
  "key1": "46gWiYBdFZQaa5nMrrE2RgidHEs89iEdEbJDfXySULLhQchKDBy7TKDpmHL6isWZDQ6v59zD44gYG97v3pzjdsPc",
  "key2": "5cZCnF5Lfgjedjz1oLA6CSUZrS1sFKkVH8LMgYuUYLkWKfUNAEgsLgFi9cb7rMcR92A5fsjFkzdPKhWjZfwGttuE",
  "key3": "5g2KRdcHmHr8QdkcrDxdAYoXG8tpkixcQ9uydyPPGC7mdLQWpegWwwikQdDXfjcUDUaTZt73iCdLYgbuFSXAwg3r",
  "key4": "Z1ASgwTA8Fjn7oQu6HUvxwEzMeincEf6zQQ6bPs1XnSghJHf6WAewmiw4CTKJy8k5sKXtppP6Gt5SKbFZ4oHDJJ",
  "key5": "2tTqLZndRUZHRVbL3xAZ8Fh1fSu8ofeW7RTgBejDwM39d8fbd45iPdTJYWAspD72w5mVgDbEPX61NXYL8XLzNus7",
  "key6": "S1bsQDtGkMUYVVMoWq6VWdzwRbzARo7NsaVvuZ1VNkg1pNWubFeWNp9nvppqxoubqcYAjcfguBkJLZa7V6pw8ay",
  "key7": "3omtWro4ij6C46kWixZDNuoKNue8CYKvLexDBJZhH1dQWotEiG2rmLgXsztiKuACG49xzvc1GaofwDWC5tHYDHZ1",
  "key8": "5heCgUtZC42akWwJ7fqwF8EtGh2nJcNj2MnppRaMD9ccQDJXuQ6Np14yAN7LP3WoKPnaUWT4SSPWgDJa1FRdRM9y",
  "key9": "HTB5qYZCQxEifWuC6J88J1LPL8dbhxTEHtKomJUYbLyudyLm79RspWVKmSas3dtZf549RLmnvhVmvgmtPfiQioT",
  "key10": "5ZLLP5m8J5Dj1VjsFJo1z191nVdtmhA3Yx8QmhvUCN7fGiHqRQ2mq5wC55sHwBs4H4P7YThKyca12YggPcE3LSqW",
  "key11": "3RNtcPe2h3pEcPuQoMmerR78MQQx7bM71qV9rSjejpmWstD9DFvFK3tAjbJ8n61KwSP6at5EdLZqdFsEvuyYt923",
  "key12": "FbKFKiFiYqB6ptXKt3sBsa2CNpasK2mnx8rNsVvLthcMtqGQLHMVnTjVTEvyRHDde8NJVpJwMLxdB7mXr5V1f3j",
  "key13": "5nHEZCYQ6eM3xbRysN7P9ZEMM1AcrFB318x3QvCVuMtq7K8StN3tdd2jkES65TF5e9CAmBZADPKskprfv5PvLTRt",
  "key14": "vfT8b9htXf9zffuN5qdz6WkBUFqGgH9ninj8gceBAXbvL9kZgkdJZ7dZkjZL8xsCYYfBXsNafNoutAhkLFY9MTn",
  "key15": "4wLLs5xjz1huNtUbjSMsfnjSPgp6Mda2wfCgPuDVSTN6CE4Vvvg3jW2ahMXCr2aweL4Z47fdsRAx8vPemTzXTZhW",
  "key16": "63FJU3ZZzH72zH1SZcwzNpu6M7vTZ7Weij5wF5o5mFvwnrzpUMgmTuuTx1bk8zhwkdYqWnJbCHR2BX9CZbrxQ1UH",
  "key17": "27mRVj1wvyQddPanDh6YZnFt8bphzm9M7h4Dx8C2DRmiwrDCKAEorAdYFK1Cfp3DgRasuWXkDELfbpVFtMLdcQLD",
  "key18": "3NwyZymWBskyxuD5Y6BZenUjQxrCrFpBTy8V6oHeZgzpSeDid2DYDMNJsrbNjCF2kcRsaq53XB1vreiowEgRkRRe",
  "key19": "SUFqv63zcV8kdNehSbgGREgJUZAKksxcVHXBAFVnUP1UNtcrzy4xLorXvS9vaT1qvYFSP5TSuL8U3pkqHPUvYfX",
  "key20": "5GXtMkGjZ92nc8dWi94uLEDR12Gu3Z6TeWyT5xFbaKKJsK9coA4uR5DgPzjKRQrmPsjNG21kxSab5augvnKEzxXK",
  "key21": "wAd5rBJWyesWVBrFDzKGnkDBKiJQkaPCJ5GKfeKTGqmWRB12yiRZmX23KiFfJeM57mzRtLAsTjgaRa5mRmgwA1W",
  "key22": "3S5eRxLVMLz31tHEFKVN5scdQ36ARe9eTXk3mWvoAMK7aS6YQVwQqmQRtxVd53p8tqgLEH3FhfBqxNRUeQ7hmAv6",
  "key23": "2FcHPqgZTw7Wy9aGFYVVcuEdyAeue6eZ1jQr7JzzGtv1LRACMmg7c5S84LAw9Y7raWR34ecg9AExfpd9TA58Mcid",
  "key24": "5sNEBTDMSCXTUsWMiAtsHkxQQAqTxt2xJMLLWK1DT3hznDRhBhSLqikUpnsYffEsrhAzRoLMiDrgR4rMSf4biRBT",
  "key25": "XqFT8Z8CuGqpiZkDMXEZUrxrZtM4RgCEp2FLYy1Dfq8z74Deacp8CY7DTitDpRbSmpFCQAbHCHKUdSei9Vvjeot"
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
