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
    "tjrUFPXyCk6GkXw8GVzDdhPwK8LxjMmjjH7trh7ME96ZHENRZKnZgphzgr1qfmR3DoFvrRmoBzHXftFaHDFR9xf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c4gb7gLEgSJAdcMEBcE9ZDyXT4sz4uBSAd4p2iAzLy9rXYNDWhmthTZ63shJAMVaKTDYxD1fTVEuE54BYUwsD8e",
  "key1": "3dRWkpeKXx1DM4vYDM9VduatK28XDNLGnMMMm9K6sjyXz4yY2oHYi6EiqdZS3sNnSYjNKVHCyHLSebazjbztdH2F",
  "key2": "4hMK5oFk8HkL8KkUTntSSnHMvBbAiJzagaiLVpLfVR1fbbaZRzPk5xwqw3CKWcqAEiEwsyauERSyWCWZRgxncJg7",
  "key3": "5cmJKL77i9M8ySfPuDwCqQgDdvRchuG5NhtB2BS6MTxzUeUKKGePT8JbL25wP5owwVbGMtndKuTFm2cvmNeRBbjW",
  "key4": "ZuMgbu3tBChbTo18nTcF9yFRJgfH8qdgsAasmmNmnpEgkEfR5HS9kNyHLWgRMUCxkoW9V9S4kzbAaJutf44PCB9",
  "key5": "bNacMzCKahM277TVQ4xA4NtY5gYhMSiNRLZ8UdhP2iwsscUG56j7sXy8N6UmYik4SVuQoMBY2hT4yzekkNQAud6",
  "key6": "4P319qEQfgrMAQ1j7991twjhjQPgAfdqhPSHs8jrA3jDDHp6PCvbZRRdRpcsEXqZgLnCnghaqYJuESzP9zYDywPa",
  "key7": "43CZsf7DxeK23XHkfEsBcfKUpsrZNPBb4LuWKrZrcodKX3YEEAfLTqYZYrM1B2q65WoDDPPYyWC6bn592inWH8dX",
  "key8": "2z9njywHrZHh5uAmBEFhTyGxZaENNTLFTbasYHMbcSVjLN2AqUmkxYkoCaWZNyXVVeRzkj88r4pzmXEygRigSVM5",
  "key9": "2EoQfLyGWFs1S9HfgZjka17ZuzSxwzQSgL1gz5LGPBbmbVeXUNkSfHGxnUsL6aFThZtLc7Crae7pchSRqHhD6nc4",
  "key10": "5LCeNu59ptYZrAGxRjV242htm2H17fF5d7pd5fRndH59sU6JTN3wnkXPTNAAJwi9V7HGzGF8kM2f4rU1Q3pJ7U3v",
  "key11": "61t5ME3jkY7odV1DHf7EFYzruuvuTg2NQk2XpbbLH1piZT3L2bKCCjsL2bgwRtgGRzGHkr3dLx7UoLFercweDR8D",
  "key12": "5JDuUhYMK3vjzaFq3c54VNdJ8c9ZTbk3VhMZBfLQaMReSkc6CXX9iHFwAR95k3bTpckhBMr5x8fnLQiCRR2ARHdw",
  "key13": "2FTKKRumak6ZXzaSTe5VV62Tue67HLvFcMUQighKYpFvtydrsFu9MYKXsANMMQ1CM1FzNQSwc5xD1QQJvCCQ1idX",
  "key14": "2rtf8QM3xKnPcrey1ZbDpjDheoDdk2foRcdkzcyb3Q8DZHcFj3Ugs66yg8Y9SmBwT4QuU6zXd3bTZJg5WReyjjbF",
  "key15": "2JNLLA94MyVdXzbKkrudmsig7Y5qZN8dwspuXMBKE2E2HtADbnfYfpcP9CgNaUTrYYXwcJ5sz9TpSsa9wFV9ae3C",
  "key16": "4P5r7G3gzmh9dHcnXfRSuCg9pYrkkHZXjxXeUjMLcxPdF1LPNTUx5QoLUkPBfKxn81H6s9PVoxUCs9dNv6qmTzfh",
  "key17": "ZBUzKgRQnydALKMbSh1ibpjLkG9emQw649xPMjyF4GXqQSw1w67whA88rpSFWWPm7LDQCJpnDXYDU5qGVaAEELb",
  "key18": "5DkNbGgfzHbdtjNRHhD3ANxVcKQYKb719EMnW8nLdbYgU4pmqhwJqoCaY7JZzN15nrhVKzQwCm7KS6GowzoG7Jtp",
  "key19": "35zrLZTLubnj336sqxhC2b8BgZtWNfdBcDYsfCKRJX4EPNYxYBci5FPenrGogBUkb9tK6Mo31eHztTtZpNG3YiC7",
  "key20": "8RppyqYrjDfGXBGj6VJmPpL61Utcb8YvgvVUnsPx2yKjP3Q9oNs1icxHHthSB7mFh5NZyphsbRUWH4jLjcdqqZT",
  "key21": "59Ch51NRNrF19Q41D3xqy76vvoyAnSxKbuXfDaY8AB3DjzmQmeFhAgWEtn5y2ytx2wkyEVhvj8G9HK4AF3vvnrZW",
  "key22": "2uMiuFaYdsZk2BWKvHh1YSnWaXkF9LAdcuRJvXvDVMEsFPozLH9om9ozbuy7uoKp6BfLtGXo1Br6NWkFF8WYLJrD",
  "key23": "uovcD9c4TD7oBF5o6Y4ee7xX5cMPn5WJhvYjCiobNVGGq948pP1kZPdKjMPAC1szZ98YLs5NVs67QPy7QZ7AuNJ",
  "key24": "5jV8x2RoHGtfFGZfxstsg2P5zhgxtQVqjwWJko6YDKzepA2ucGMgFEUMjgGcqMGFF7MafJCzkv5Wb4bHYS675y7z",
  "key25": "3HSQ5B92noEvhtXcJv67QUjrTbYDEUUTvGnLsReCrGUWru2G7ezGu1fLqP2W5jbVn3rGLTu5Fa2iTjqCKLpyQs7d",
  "key26": "3QWakt2DFYUwK7AmxXabifnuis7JSy6dBqymyH6ybJq8umsz1oemwcs2F2ZmK7Cg2H1hXA3ujWTd2K1TdEKiwHYq",
  "key27": "kiedai5TdWLSVxvKZJ34APQLhoQKWKuyaazXx6stWW9s9UpdLKd2TRjTojFTLesHY4W4NjTSGgRbC8U2MBWfNSx",
  "key28": "3LVpjXBqn3ijiWDhwimxtwsWnq1doJmY4JHwdTyggXGYGNLvzHeR1ze5owZjwCgP32vTRmcCZs2hjVtanF5mt4Cg",
  "key29": "3ZNMi2GXcd2DYJDdEpmnbmEbZXEDuzBgPNZ7g3ai1BM28nxXDkRqURQhtYhQ3kTuYsSdxUWiLufEBacqaAM2MBt8",
  "key30": "3m76PzX4CwNzNVMNVdrSZa1bRe69p1BwCKNjWmHVtBVMTWavdQTNzVMM2Nan848F9xDFnqyXfcPL5uBtub5UViF9",
  "key31": "5FE8g38S9p4hWyT2iEse8934YSk8egwQuTLRA4T8pRDU9Ry66sguK9DAZqLNHRk2S17e8UcC1QTiNiYDfhNterUk",
  "key32": "4QgPAMDrHZaeeeGAFFjZVKMPxNyVEoyNm6gercia1zyKhpNZhh3EKpQgbWCjzUuW1gdDXiEsXgQ2tRBJ34nXBPob",
  "key33": "39QN72e31WZBgPfoomGoCzffTG1Wb73N9QiwCGGAjJzGrhYmPRHXBBcdTow2C6VK3DK7DYxq1sHBV7Zv1G6QApiT",
  "key34": "5ppYoxgKni8cddkWxny9SqTdJgFVyF5nfRZowFfrhjWwZJPC383R67cTbFfXJtQH69jkyccQJdahsBxjZQMn6cGi",
  "key35": "5umzKEEUaPyXkimpQSprjVt1HnF5ccY9mtwmMtYRYES55pFjHCEQ8WgVJBtv1XWG2z4JgsNTqdy5x8n7hnh3phw5",
  "key36": "5gUQuNWoUppPRz4GKaUZ4PzTLrr34JAXY3b4C2MSHrMa5yM1fQZJzAbHWPmj5wNH3haLzG3bVNXiRCVQZsce1wWx",
  "key37": "67RBSK6iwygKzupeCoiCMLgbFPWeevmggiGHESxJCZFR2JXXWQtizva9dHmSNvKrS89rPWh38WFrCd5fWvrAWQ39",
  "key38": "3zaArag3x24iapmJEPUnHT89jpNva2ojWWhhLdU64Zhsm3EfCaY7Ee1ZakdDhUf4pFrCvUEG9WLYdsyzZqoVN7fa"
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
