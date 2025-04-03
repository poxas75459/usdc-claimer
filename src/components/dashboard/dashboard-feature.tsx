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
    "4YDaWYkf9AVGignaG1AQogjXBjeE37f3hggfueo5kNHNeKjA5AiaLTiSFqK9QiuBdAPFiAu7DZapKVMakrbPnAvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NT8iVQ9j85CzBxx1THstNA3QscnFa7goZz9NkWUfF74zYT2k1QpwLLZ4k1b3nEjztdrZDjcMt3Ea4zPy4F3XhZd",
  "key1": "5BDyANFaef6YUajHNsBFCsNFCyHpunsVM5iHvgiv9s1jnN6GBAReLW4dYZczGJdW4KoPiNSsjNsFtigcwkj5ZsDQ",
  "key2": "5YCudDYowV4j1F8N81SPysrrg19p6SKbmm6G5etDMp4pT3vk8P5rLroWprrEZ939yzTsd8fXZ8WnjZizskxqkZ7E",
  "key3": "mUgtv6P6d3vDACn3EF2UyssmyJCSiszMw7xxwNhkeSsab8CdrZai13AiVkWhwQN21mm6y8qNHW7sWBuPdUKQq2A",
  "key4": "3sc11vyHfqhxHvET9s5XAr76udxGdFcf813FhMPRpCmgUjctLtQfT3xz7y4NZWhcb7rM7VpBTrMsgfrtins7KN76",
  "key5": "2gSactDGWEFXvzVUAbHafbUjYifuzqyDDSztJdSrxcs7Fhx4XT5iQWBCUEsMx3qd7Q1R5DBZHu1RcEZB63cJaffk",
  "key6": "2QUqfQuc9swT2X14fwGA1L16dc2gQsM4cbWsMLUTHtxAuLC4hLKpo5PzJBdCi4HsZ834KWujBhqCaqcV2oSgRWHQ",
  "key7": "2syET3Wchu5Vap92ZcTD6RGQPPWBADFXew3ekTu3aoP3vVvhfiLK9yg4S3gUZ7Cu87BXD4Y2BYxZpHBo33mPXYRX",
  "key8": "5YHNEtGwffjqKpM1Fy2fJd1VVdTTSmex3TxhL9bFTssfdfuD9GYvzDCQF9bVr2o9hGbQPUyoKrUZP9nZU7Xgronr",
  "key9": "5QwK8hEaKfq3iXv5XBs6FetJrgv7et37YqUjbTgMufQy6zbQXpwdZC97doBvJPsrefDc1QaB3QhhqNpXRbeN8zct",
  "key10": "3rsktoBxmPPXXSqFvym1VbSDTmVmunphWBiWWWYyXQrfMA4v4qRL2khhiDB6fHTS9HjBGs4Epvq7U4PaMhCUDh3b",
  "key11": "4EVLRoWidKoDjQJgpzswXd9nD2eVBuzKVv6U4MaeZQ4qBSzcd9pMmEMixvgkj8SRDMepDQN9h83UFYS7zRGfmH96",
  "key12": "gEbHNrN6n7A3BH7hzzwGW7hmvtM31iBjkfCSA5cdTAAZSnkCBLnmYnq8CsoNYK8M4s7zfTNABMUy4AuzYR3HHUR",
  "key13": "BiL1FuZuTYByVEkWxdJXzPf3fccfXL8nZ1hfHGjhYwPEpNCNemTWZTaCuvUXFrKBUGYEdLHoYXzseGCoLUcEvcB",
  "key14": "2NXQ7ZAKafnSvjJzCEiJaUUosH9dj8JGc7eYQT3ycjXBKQWSCF2xWxr64jQkv6NWChWiquJ1mPu5GvGxdbAgYjTz",
  "key15": "4benEXii2JiFQXiM8U59xSfTVYAWuq9EtZtnw37eGPocBeemdAMSXWe8yTbvWK8xTcwzVUNTmcAroejj7MbwxrWS",
  "key16": "29KLJpch6UjqcSHYGTHguadg7iWoi5BUWk9vgHBsjTvsrm9he9X3pAfzfGn2MdUpXMZpbi8sh68soLwrWs5qHT8c",
  "key17": "VXokoH72KB7y6vY5QNgxjs7MJVSuqkks6M4wZFY8E5CPAE13ueyRKA9FBFbmkkqz3s1GNvWFgMMXETzPHSut39K",
  "key18": "3gZMvPRc9hohm9BLN338TQdVatyoKuyv2L6YjQ5xfdEKsWMbSpZP9Zsi6EiAEqL993fgPYpVkQTnFCvNvRcf1uZr",
  "key19": "5zs62VB3sY6geVXaXkoKhgWQsJY5c7E1gzBo1aUMZb1RvUjnPNdLqtvxaj5ECrZNb351BwhuZWDZJGVD44XPPAGX",
  "key20": "3DXbcGUYJHqw2ZeDra12B76GeUHDHuNZkRqVQgfk12QHLF8XVwSmJxSvKpMZ5dWtBkDqwuUiNCCVrH1osB6TPkLS",
  "key21": "3t5wBq3EC8523z1KqkfXwCk5w6Mc1t2ioBYofH4UPMNK2KGNbpqL4nBw24ADF6MvH8Wx22AWLy4u9z1fwAB9pTuQ",
  "key22": "37aQUPHRtgb66NNVNb7jEgjp98VAMn8v68GAvNJTJFs21hhVacnudcEx1o2UdXYqTgzhnhMKhQ5oQt7s4LbMUgDK",
  "key23": "22aqXBSPqyAJQkR7MZb6dz723PwB8on4vyhmZvsD9hk6VVRxPtUrLKgNJNAdojmqJUixW7UgFU6zpwiRi53gvXcs",
  "key24": "5yrWyUbDDEHTw2EwKEu81U2qzXdUwgtkQQgzLSzn5rVYNfukAdBzHPxhpaggqjFnJijofZ3XzqJjuf8ejVmtSWan",
  "key25": "3fPgiDhRbs7UkbopzNz37iRL2TV4wrmrxxSsB5x4RT28PdZZyQgDGaw2BU5U5Ep8SRbUCiLEunzVgpC8h7G4oo9g",
  "key26": "3mfTCLMJdESpNFBww8tUKEUsyfeyZGwSkJxmJBoEYLqt2G16JScitVhc53SkYC1pKBT2cVgzYXmtidvmJ9aD6bmL",
  "key27": "5XoCnyoYZgEj78UfJRzEKRfGxy5tzdMgX4a1Uds8cjxkemwyapE8ARracqkB6pREAcpALg9Md8Mr74cysnyjGKnA",
  "key28": "2AsSMknDnFXYyGsx9zaSX5Szuaydje8zuqN95M7z7W35jB3ns7YG2cHfpkyPkkNRhbbb5vDNfgpTRj8Pu7vBvqy1",
  "key29": "5yDoPeJ16bHi4DLibno87gLsft23E2GfJBpjwNBp77skZCQdfMSsTu6TnwkG8qnEGVAAccMZhDrfT9q7JgdSaV85",
  "key30": "36zSLfj9cSjutMe7yHGhpVZys98MmbDEZgoPKhNJJfJ9AuA9c5JBcTgiKF4nFgYUwXiavE1fYLvBpxb3ZHKF3XCw",
  "key31": "3WmTFNaZGYDA7pGEWutFEQCM7LeboZsuNT3iEKDxKERY2pEgY1S4TGfWyTHAKQ2b8f3U1krQnvFCSPaVvupQUfbU",
  "key32": "4b7Np5ex2SGvaMFvFTv6XWUXMWFe4h7fN2tGEdAQak2cbcsbsxaCpRSfXHu2X8b5ChJ8Z6169mqVbXAD1JXKSd8Y",
  "key33": "4NFLbZ2wjnfRzxUSKy16aj6vVajK1Np4mXyvzcvsGt8KL6vJVm974vMBetu724HiPyrXnuupiiUxrQ9DrFF7DBPJ",
  "key34": "467xZ3JaP6LjtYvFMZEzLEGh9MRroWhJ5jnLN83KPGmkYGRR5fzzDsYQ6H5UPZjCt6PKeicUUgxcwL993Kg77cjH",
  "key35": "66DPthydZ6bUwn949H4d6QBqtRgYZuoQLMe7TrPxZVmoyTDuLq7GYRKGyLcRztRwwZfW9akPdWKE5jb1C2bTZkhb",
  "key36": "3AsrnXxMwXNbMixwxkVM1aFNGZupQLvMQgGURYmQHUmAjmuBWDocAKHYFeHyYZ4rk4W2VaCNgkjsfcBWLq6V2y7v",
  "key37": "1xWnwZ8MrbH48dUoVoGiE4u6PJXs7y3G8oxDwAh2RexnNmZcufRyycFPWH14zR4jLnLJP2jx3MoVM8KqjaaBQZ",
  "key38": "3i8KcADMwLikzQKajMyzXLpi9zFcaGQuBHp7RzAeB8BSQXrWvWdUwk6kkR8bxvjyNLYWefYLqb5Dw896v7wnxTV",
  "key39": "67d2xbEYEWF2u5SnjRRf3MTKbnnooC57qsV4XYyMoUbW6Fyj87TucySBpvpQXnQFPs3RxqCFLSBS48c55ZqJHUyJ"
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
