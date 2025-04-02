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
    "qKaKowkrMeo7PBiq6e1Cg4je2QxtPCxeVNSiHS9MzNmT3Dha34N1zPHLsvYur9NRnrSAN38jkekG9gEccEcAxWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yZ5Rs3RjAJRRxEjwM6M6NZpUQgwzgq9WYmtJy1erjymCPvkpF1YUUgbvgyXhr119SC4TrdJM1fp5sfq4N9xnThr",
  "key1": "4ph9LYXKvr3PgfB7taNyLyjC9dGzKPZk8LFrdoqKeUZnycHowkoLaZXsvUACLp1xqT2mKTCxoe2Q6oEaBCXshrRS",
  "key2": "JRKMkPYqztPJHAF2Fsj2JG8bfYffTH4xaoTG9n4SeNi1aC5ndz5uuMFi82u3ZceJ9gdd2vEqyAR8QhKtjGiJBu3",
  "key3": "4r3RTpSYeSVrRaoo6M7BurX71potyfqzLChMEumF9FuoYi8M1TWHqUR5jxzUhxmkoDjUpik4LZu6dZExQt7cUZ2T",
  "key4": "2zMJnJgHgu4PoDgjeLkAAfFHknNhVkuDfTLdRZyaNZ5g7sMZt8NoQkvJyNbAXQ9sJcSCF7KtPCbiW6KEkSYBB3i4",
  "key5": "5HqQGk5ZaocoPrvoiKyCsdZw7vQynoero9pfdQg7N45rLuptxLu5sRzWVzu5Le9y8K7CvH7W6RBbyHbbQ5nqXSHQ",
  "key6": "612CVgUuhL3xtt1WU68aVPgB4bXnUrKCyneb9vgKpXh9EGkvsYsRTSmCaTuHMvR47eHY99LDoZiMzWXSJ82A67Db",
  "key7": "4rB9urRr1SwozL71C8oMjnMFo6qrRf4BTDjMKn3Un8sKGS7jGi3Q9JeCx1DtVmAvuLby51ATm2AKcpQMT3JE4Trj",
  "key8": "f79aCYSCWYgycvsgmJh2i2fSBMhVR9UR3tg8CPMqrihccTBtMS8kzDunW1Vz5C6s6seKxoxBfEtxkrMpZYdwH5L",
  "key9": "2aR1Ag8Lk75rNRVPDkC6mV6WN8QJbgJ92vorJ8Ynrf4w6N8Y7SorbioiPo5cgeRD9iJrum94MPV5J6PaTvm3e91M",
  "key10": "KyuiEfLGumACnKCgcynQ9of6QDJ8RMRgWTjhkNzNBbNmXqeMYtqAWCTBFihLUU1fGNgnnGdUrthEhJ8iT4EhoyG",
  "key11": "oauXyvym8X6aCC2Y2icsdCfvfBFQjJwzUPbVyrJ1M2zB4MRMt8WLLiW3Mok4rVN5SH8PwYbqEYTPnY8WvWYTKq5",
  "key12": "59cKz2KrbUaeU1d8wyDMpbP3Ri3SF2a2ERDTB3NFbovAzsefWZjz1ckp5a3H2VXYCETh2BFs4BaESdCtb6oJDswE",
  "key13": "36SM9Do6FzhXs2YtESG9ZjpmEW3HQPFVoCK6Q1BY2tPFnhwhsBcWA2yQqnzYz1XkKoSjMwahyZVbTjMzh1KDxYdv",
  "key14": "5SYKcv1DPhYCbwvvECJsmYJ41ajjM8ePAP8cSbH2eFhC1DNrrKYMUTkBSgB5HSejbfjMDwqWErM9JKrdS4EqEWvV",
  "key15": "s5PnMw7cdhrwzDzp7UJCpfcsXYWSakBbxtBLhMo9F66fS4FR9ExHLn2S23WTUwfBsvHVJ5qjcGZG9wgDqQnsgi4",
  "key16": "2LZtxpVNr1TmsiHHUXEyBXYEpQfw8eAdy91t3nn4Uhrxn3LAsQy3oQZtFmH7HjGP3MTo4AebHSyRJwQBbFKcWHm8",
  "key17": "3DH6LxvaGHZQeAW6xGhh9rsk3QQxYjpa4arSQCKKmAApDHoTTz1gD3cMSVQFNoEyW7ApFcH4RZPPq5xczG1LgnJn",
  "key18": "3sRk3ebiYeJiaP7swsYt4gcuLAfVFeA6uBbj8GTxhRxtMKWRGoJHM5HivuwEYZgcT7KAP6mB9WZ3c1m2WrPrZzrq",
  "key19": "2UdunwXZoEzRWSTGAnvKqyaAraBN2Sgz3gtKAdQPCmoHZBaJSbp9HBzPLcpBgSBUVsGj5SKJxqsuhceey6Fa7zMx",
  "key20": "4mvwx85fUuk11EwukbtATzYywFtyHtAdSHnvZHhhTsmx2rqRyywJkaNgVwvVDcSxY61ZZrAv6rjTYGEFW9UPtn54",
  "key21": "67YPNorKswbhFTxKDqVG1jkjADQcTGNMwLM8GPrHysR7v8wqsoLG1sW1Dovx3c7e1XdxB7Bg5UTa35MS6zw98gHx",
  "key22": "2sUScv8DTUnG3DRuBYra3FBGB2GvaRJ5u2s6RsPn27cWHDLyEdpCGf7LnnbUuAHSF87CyLbduUoDMSR2M6RCc9iW",
  "key23": "2yUear6Ty3XRhUuhWtJmmmCst7cUcgB8z758cbWJk4Ho7nc49WancARvxfvpAkywxBxLjowdFhrFRVzmV4qxPCN6",
  "key24": "2yJu8AaYXkTdehvTNJZGq9bK6xXep7evcfZm5VMF2o8UhAqr4tf9r6J7vNzcPPbWLfnJjr3nykX4JquSgGGTxEsT",
  "key25": "2SMBVufDu75FN9aom8QWK3yaKa61KgyirJNgcAhEX5E7juKZTMpzZPzqp4VR3HATrKcf6NootB1gDQgHkHRREgvJ",
  "key26": "5y7ct4F6LnrQKxuB3RFV7fU3K2yDRSjwCEty1PrQLfqWbgA8Qku44uGGn5N9Jf59C6nqLYAxEEAsthDrzKnJuoBc",
  "key27": "3YS6Qna6KQ5jZ32wSDQQfkTbZ6qX8hgUG4VmuwgsrnNLA4w9jdutHPpXUvBCzSmVxWMufNyTn2WKsvkKCHrtmSYD",
  "key28": "3m8vXdgR9yAWY9QXLNtYU9hMAJmVL7Xf7DHT2ozZfKUyvg718YsvRQnY6m35uY1o53fLeqkXXsNBLAv9bHq1Abso",
  "key29": "2GBKPyePcwVtT3CQgmCmJ2LPXwA3qfyatybntniE3Mv1jJBZbTZo8iaWuC1trBb5iR7A76ZaZ7EcRnPF2PWVpkzs",
  "key30": "4nWHtKxdUd83AEDNCBomgV3a9huWuG4ZSuo6R1VM4UwkgLsuki7ptmyCSxo2gw1SEJfNKTcJeYp4VyuPUAKBBUSz",
  "key31": "et5o1zQPFpmWCSQPer54NEe6ABNkv6TD1H4ZThLtwQ29rdXGD5iF31cTJrQ9thrfwGjbPsDwryFXB2aFpZEny13",
  "key32": "4gNMmRULndnwopFaDesZUC8mG2WnZwuduwsu7BS9GKDEfT2eNxTcJXDLALD4GSgtfZL46yBeuLgwz7iYxzAsewXb",
  "key33": "3AgXaioc8ohSRocZcG47h8sEDFuc9DoRWbRE77aLDPdA3D4EZ1LVeMmcTKDmUztAorCWzYtNZoVL6d6diigwpFVR",
  "key34": "X1iSxPVqtvRsNwctnEF6VSswPx9uta11zKjbfM4pWGr9goAJzWjKcxBxjHrakTUaobebV9JSqpsG3MAffeHauBz",
  "key35": "6gRod5sbgTgzAVGrBbuxpvxxYyokPT3D4JzYrzTo4S4i8cyHg3pY1BNCXQe1PTGrBZN2EaDuLBiu6hgbcvZrhZ4",
  "key36": "AqBeCxFqWC7H8c2Joqrf6aiu6a7qVyA7mtTFSzZgLZtDcyhtsq9tZmjghfUFNwyQ8WXA72VUKWmd3ut5hux4BB7",
  "key37": "HtaQm4Bp2BGaJZy9cKsi2hrRJyxPU3nkvfkxRVtKYnrJT4gV8pLtRcUJ2Hkoy6Z5AoxZznxDVb1yGtENxDUjQDs"
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
