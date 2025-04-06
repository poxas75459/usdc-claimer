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
    "2jrFQXMbPX1NbWDrAb8oF3NxVNHb3gpgF774rQ8kwduHuoHcXfowZcAgd46sFL82tGBBCooVD2w8WBDa8LWDZfKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z8TnM4hSMALnSHNexDvPkPZgYjpJVkWxoviiudJxFcPmXAWgoh8qFfHjNXC3pvHpuXDqCKwaDCFDCny7edsVggD",
  "key1": "5uPUwfnftixBR83pDwuvNKTxn3Kk3HUPjJ5HRocLoHif8XoYr1yGw9L4Hw29yDmvm8aggfteRtUbBQCCKiQfktUn",
  "key2": "5sJuanRw83MP1nSbpmpm6BP15zRij2ooCDwN3qjq96QyePD2APjJskdYyf7uc2eE298RtYVHAQYwKdDSurcjxmam",
  "key3": "MLE1SYkUmShijaqVXzcD8dbC84TMU6DJHGM1cYcvXT3qmQJnqawi6EKDVJHTEUir4h1nAfdUUfidwWm3DWsLY4m",
  "key4": "5nc2GEHvb2An2fkrQYmrq5QWnHjHha1oJ7sbBmsEPDiEZRnbutYDKBzpkbJnVekjkCMXVHZJrdh6MKZEoEp1SGHm",
  "key5": "4pJH92WyG1TFiqanQxWYHtnbCrKoQuYvhroh54jeFe64RbrSjshenKNpGRxqBhMmHfJGNDfRpPi52MSTaNFdtREB",
  "key6": "51x9siMwrhDQxdfV1TnxZQSfNobd1aau1FqiQT3KYCMg4Z5fGvquWh2FgTFUFkpNRUUKKKbwgZ54mZsDMNTKNAMg",
  "key7": "xFTjFDkh1ExHPfWN4HjFjk8yNGimd1TMsemJDjU6nDodux2t5SiSVnnML833EK6aUGWqAyBbqpPM5cXvWzwbGBz",
  "key8": "42NcuCsfKa6E7u3SaSY9pG66RWrVEZ49xrxAhxQuXVXKFch2VSjJd92yVBpWJ7JUTSVQ1xfQEGfeUXGT4hXsC7WM",
  "key9": "KmS8QnurbbkPdFSy1BSTFNmGMYLLBhhZGzF4a6arM5vS7rxg8LxLTaSuTrELUwwAELYeABYJnLFb55pFxt7s3iv",
  "key10": "f8k1Vqy3ZSaZaTC4HWNSqzQjUDLCjhf1HomctrFLbkNiXghQSihReqyjU2Mq3tvL8CFw2CRthmkMdsNcVCaB3y6",
  "key11": "2GdhjMhFKwXmfCpK38hK62FtvADPSdJmGKRQEk7P5B6yBQbKQYsAPdcRratq2HPyYzRas876xxK4bnPqkBoHXW4d",
  "key12": "3dPqvEr3iCNb58q4axnJPhnH5JwzJ8GyyKGnikmwU4B7RXaswRzqwjQpZdswgyzoiEtoPCfRVvLrch2DgmwGL3xp",
  "key13": "3uqL6fNDEBJMy4d63HFvws6Q9Yp2PPsA7Ndb45gxCw7uL76Ktgem2emLDJJaFP6bjtqCV2vAupHtB9d1eTMx21TP",
  "key14": "41fJqmyu537LEBxyC8Cnvu5A9hQiNe87CrhHfWxCnDBWwUvKhTAZPYEwyYnFCRekwrj7ARER4WsDvtExzUsVTptC",
  "key15": "XPP1K14QFcxytx4nv2aZzi4VmrdfUfB9yZfEF3rSNAYBkwEiNmKq6zUCZLzWfG4aAnVHyoK5xpmhMN7z7ZiD6xg",
  "key16": "4ZTYnX4Bqysk4bnzVmxBmvprwrPz5ZtnJhYqe187A7jBhTY87b9oqst58VVNGVqrUCtRyivKjcZnmsbv9Fa4YZwR",
  "key17": "3DYW54sDWJWy9mVRrBPqc6bXRaMxyVwAUwsuQgKYCmWUWZ1tnU7jKM8WbrFgHvJ5Q9pWQ13P1X6WkzZU6MxENAZZ",
  "key18": "4LME9rHJPDaXjuHQr6oVVTm38Q9gSUnLh78jHzXR48EkyPdHeFV6EZAgVtJM3qNoU3mSYTm9y7sEDYC7ijt7vkQ5",
  "key19": "5EcJ63ePQSqnqWbcLAkXrsropGdtkymUBMC4JjZhL7iJ4d2f5NjaRwdAbwHyVJbjPsCs3L9vAwsY9yeNqmWqevPq",
  "key20": "5bRExb9Z4QDLLegQCLXGJY2N8u9SkeayKhg4yaY9zWmqnXRMLivrbP7M3ZzhzzCy9VEAYiLnTTWQJ23sUbapPB56",
  "key21": "4M84P4EKFU5nhUpyDko8HUhcNsnLMygks29fZV4Bx2FnzU4EvSkEc3b6gtDwfiW2ZwqRemgXxXHCKZuVK8ECVBvy",
  "key22": "5ojovpCsiJRAzZ8ytD6LZ8wJPdSk8R7ReKVKejmViPdES94ZN1fEJPtotZgWLrPkcdsa74oE9MYR6JyJwrQ3hpJq",
  "key23": "25pVmK7BHKYriCNbPkXkDETUbRffiLDpx99CzKQZx6tu8T5CEChtQtzpFZXKDTc3tvkGL9F2Kx5aKHVYFZ92bcns",
  "key24": "2xRka1az5izmPr1HjaBt2TSjVpXtMjTB6uKB8a9J7VAFrfSn6X8Bx6QmWMEBiviAbPWA6h9i67rWub92x33EZv5i",
  "key25": "4MCNzdDqzYGioQNgJibaMqPRqKtrPGfAkjmT51TR4AYAvSYLDrxpkP3eoHPs2M8KbheMsAF5wSDPajoRbjN9dZoH",
  "key26": "2L3NvqTM7X7mdXckMTBfweZvCh2ERt3F4HFHGpBjB7HdzCT25MPqcZqrhDo2K35z5A4T3mEJzGcvL3qP9higtZxi",
  "key27": "3QCF3PABgsRrFcFZwFQHacNdjbfSQub5LEUhkXDSMGG4LKbgF7F3qiWAuMUkj9gK3ozX8bT17RGShW5ecYn6cQ5V",
  "key28": "Sn3UVxNewNJqfPZ793huHeA62H5HPNaVEr5t91RHoR887u1QfrhBjxS55qgudyMRGPtQjpVofGQcZAToVoSLzhJ",
  "key29": "5fat4XWHaCBWYUxSwtFjEAKVH4PSM35easYABDg2xho57b3AsUYzoFJJkwsr7FyGB3o35Yf7dV4LFTCAhWHyenbC",
  "key30": "5FD7n7eHtEDLaVpSeDJGDq7ai8AQrSQMNHdrBsk41rPxy18o329NYZkiRoBchWFWq1bPVPbAupnYeNAZFjezLqec",
  "key31": "5naMU8M2G9Jfa9hLnv3B6zf1T7G7VykjjnoJGxchmGq1jzcUpboNdun1DxJT9Uz62a8wXPNYtp16hzppTmA5JJG3",
  "key32": "4E5njYSEiypGDoZgJ9vaF2vLmdn3UuQsz4JTKKvNazrJJdvfX7sRsYXuSQjGoLzGQYs2GacnLA6qkRrXcWmKXzNz",
  "key33": "qgfVvCkGqAwQUyPCb3kE912ew1cpRujVcayd9a7ApNvLLXNFYUrMXQ1XDFM1QMwjdMQPujN2wEZoUGposvZBBu1"
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
