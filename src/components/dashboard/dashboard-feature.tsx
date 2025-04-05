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
    "4DJ1x2zMRrCw9548XCf9bRrenPwJ1qWiqs68t3Di2LqRvtUTBfU5WC5CrrAu5ydyExPXtNtSRRGA8aCybn4fn2tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "19V3cTcNqsm1jXr86uEVXdCb3gUztd3eTPKcHbbjbAhgrE9CB5D21WxtwqRXnDU7Fmqi2ATeyGnP5sCZzGZtUAR",
  "key1": "2azSx7gpHkaTYjcVs85PmMVuipzK9ky6fUzEgtmubuToLRUPAvsA1P3ZQq1aZbGaxttzA3qXoxjN1nuSU8sTawBR",
  "key2": "GdTBV6sndz73FRz7cE7TxFYLmCHkj8a98A68v3ia8dWD97fNNGUErrjwoyxBpvZ1AAr3U4mHNRsKiiN8FdJh9EK",
  "key3": "48YwQ86BxHRPbV6VQj5Pe4YBBsu1tw2mWFqzyCGBKAjT5q2gV2oiD3FCpbgUqn2zhYYnAHrhhCvZ4U3yfUyaqtQW",
  "key4": "4MeRCKYcgSdcRdTgq4MUpuKcMDCsKhXfNVXkQxjLaE4C1ZQWpcVTSFnwDwjhB4wsCVqC63HaaoKS7at9we5sa63e",
  "key5": "3kiHUx28okjr8H8ZwLfjLELfcVDcvBWXwvL4oLzm2g3S6ChmPEcvRPgAET4AaL8vcbfFxCdKjnMBnzNv7GAKtPf7",
  "key6": "343yhxpkPH7kj39UWwXECuHDRWnqj7fHfdsCeBXPmm5t8122egsHB7vDjfHrmrE6PiXe1R57iqeMNKPDySp4z2n3",
  "key7": "51BhcoPShaxaxHN2Wsd3e7guruFoWi2znvct15b8WGBmB9LMYEYmw5aYA7VnGYJ17CA5VGQK9ud1oCQd8ouazagy",
  "key8": "2bDknRCkhP18DMr1aDCQGoHYdmHX3PZBqePZW9kBaKSsxYgjMRfyfpB1saeinpx3oZK3HLd8cS1mQBgwYVq4ipZe",
  "key9": "3eQwyBjvWxaBS3KAvmtJNSMuWqipHdAtatopkYoZjcqFqYknHLNB2Gr4Kusua61KF84TJZkfy7C7v8TkcFQ1m5k7",
  "key10": "3JYJcbwbrDVyYPah8EkaZ1oZtW9F5ozyB4zCZvs8X4gnHxEwvU6nMDuECn9WPnc93kqg9p52n5K1i1wh4991cH25",
  "key11": "28VSPNsR126C2nTE9Qr4K3bhZjEVBndKRiBgtjQb613DKELE73LWUMd2LuEjR5s9f5fefiK24zGu3vSGP6zeRDat",
  "key12": "5DLYaX75SuNLzRuAggRwoaem9YoH4fpb3gYXRFEcC4sWZcBQuoy5CxmG3wLf69HqZLsddTnk8dNuwrAW8KpiUcD7",
  "key13": "45hhe8eUZcGd9EA9AApfuBnxLSQoHkomiFHEkBWYUJSNNudc6WQWamFm8EoxdNvSPCsdHfxza2XfVCGB5jYQSuN4",
  "key14": "5XBGWapD6eve982en37k8g8pxQvLx3dRH5wj1S4241LWqzuC5jAUexgy8HUqnuzTu4HSLU5cNmbbrWrPGG8agbGb",
  "key15": "WbLdoh7GYudv8cD8YMwhQnj33TNKLahYmBin2JEFi6JEaaGu4GaT6qsWnkEP9k24pDGLN585GQu94GADzCRCQNv",
  "key16": "2Acmmgt5vt96899crtpDwShGYbKm1wsVQkC58Q3fXqsRUZ8fjdX4uBs7zmsufQKUUVMxRwgBRw5owxFnVizMYFWE",
  "key17": "63Gxy85Ua6vko2NnQPMhSwt21ynmQKAEW7bwzbbEysfXPxJ2u4tSV8Z63kS7Tm2ENRFG8vbuYAGXCHPGz2qZKVed",
  "key18": "4grVLjGAeDtMeFvmXPDG4EpzVy4oaeZhJh64NVQHnqoAXNa5hfpqmukhQx6qdxmc7oBEkAB7S15ekYWva3LGqdgM",
  "key19": "4h49TfJZY3Hh7bLoqEx84hpYDztVwBUwjCx1rQGZqSnMCbnN3hUqWnZ4ZEHFUoEJS2KpuwhsTbp97W851W8AFA8u",
  "key20": "5KavtRnYUM2wULqam8SANFJSwWdgfpXcDb4jN4Li3QyLGNQWGeMhGqq36qwG3BuJYGzYe8naTgAs28DP37wBJxHB",
  "key21": "4SDrY1HbSSrra1Lrs7A3KBzdnhzfgyoUn682oqwJMt7RmrAKvutG6ttGJgsFdqLXFWivSXudGAtgG2YsZRMMNfLX",
  "key22": "667YFcmnAazvhTyAmTcJtFi95e1cGoPA3hsgLuEPTTDXkNNjHskUWepddmmVT8UjqGj2JpzdWcQFD9urdMLe7XJ7",
  "key23": "26pZBcqd8KnJppNr1HEuVC7naTR4rk6WuE3vK97EdqBo9WiMeLoq6JeRyR3daMwntfkmjb3HxpH3Qj6EbfBTLAo1",
  "key24": "4C5HPbNQoRAVxNenox3DuioDgMUDAmNVjFBk8BYLGnPHzva4YPKftsjN4iCk3iRKuVcmvVx7wDM4GJF5Xic4uJmi",
  "key25": "3QJwX4GhDD17i7qvWfb3M5VNXTkMyQMmvXLpESDvb2JMm5s5uvt2BmjVnpwTNZKkBGWwcH8FbM6SpHYHRiRLLDe8",
  "key26": "5x23Y3nBWBnxjh4qy4McyWRdT7NdDpDFJxY3i9m3mh4ARNgrC87ufbayXAHX3fx2rPoYAYP1irpQo9SU7jK8ecMX"
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
