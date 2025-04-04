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
    "5hN1YTaGr3XFNgQhRZto8jXvFULUZvYvSuBC9r6nS266Fh8tSLzz7SHE9wZDjxN8tFFWDZz1tXsEwYBiwSdPebf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GWLjctHVQZ1DJzrYanBujKznUoHbXdaFnaSb3i49JVC74xhH2S5i25LSYK9UxzyxZryKvJDLE1omuoBpPnnbPuN",
  "key1": "3onBZRhb9mtB2rCVqVdSKexdJscVHJTdyFiA5Gwrg6mz94Dk1BC8zRs5snqNvnYpUZn7xxCdszzQNNaGWZ8Fikmk",
  "key2": "3A4fLWjsDoL5QvUQR3tGfk4ztPFPveySGEU1TSWZ9X2r8CmafB2UZ3Vsg1aVH7uL1a7NRvSJtoZberHnq9MhB55n",
  "key3": "5wPzKtq28U6Tg942QBmPt4TrY2eL4Dxqf3fHQy6kw52bPms54cfweBJmfUU9M2iVZQGcfE23LYa5tdWQr8vhT5FU",
  "key4": "2B4dnwgFh341gCoLa4GFcaQsdNZibVfMufLckTxuDJiTU8jEVRq74qksrg2WzFS5F7f57ma8NArjmmPcAriyY9XR",
  "key5": "3jh5fhkm9bi1wkLFa3KcKKvmuRmicHwPKH7Q7kcnTVTqkp7giVrCWAf9FFBBfTpnMzNjcNmJ1e67jDsFyUmkw5eN",
  "key6": "33axZDUoTQrqowcTFAV6d49TSzD8KnrpMX7PqKpXM7nWVABXcWVnMSJqKGcf6sfD81XG7jFrmGyfGUrYYgDVKDpe",
  "key7": "3xsNxuDHpakRtJDnr3289fHQJfthHLjX8u2d2iDZ5cEZyJJL6wHFB4f6zHpSfDwEw7YroQdyfwxkbEK6b9nUFfxH",
  "key8": "52cgNKPGjCjkTQWtBCpEWV5z1kS7uwjqZUjoVzNNzpeWhE3fbpaeDQnBL9CBbzd8Rv4DwUxY89UeSr61wH1TGLbF",
  "key9": "QrNJRvLgkQNnHVodWQhUxx2guDowwoefHC4B1vnMpPfq9oPEhcmuoq2mBmXFUJ6THzFxD9rpmMbDxvKYPQ3bxHi",
  "key10": "8um9m5zHsE2BREu6ZvZTkJV99auZMA1GbzgEcPeWC7bo6APudLdLkxRHcnpC67iWBs6BYDR9Hrj3Bm2dkjYsx7f",
  "key11": "2aJh3NT3HeojZskudQFKfzwKUYope2WofKbuFzJWx32nMQWZP2SinC6mX6JoLW7RJ8p1a1Maus8EdK1wzehzwCwZ",
  "key12": "4pFVp5S1o8UfRCrzqgXW1cZmbzk91nsJKpzozQvpoX135F35cetfuwaKFKb9gCSR2run6zFesbvwTKTnex5ycW5M",
  "key13": "4GQG3diCZCKFaKhXdsPZXQEBc2MQimm8ZXyigGjn4qaMQYskHSpfG7WKsqcWpnf4gTUWETe3PnGLk4xE51k7bnD3",
  "key14": "4pMCX9Sns8faXoa9AvPAszG2uwHiPiT4t7rpe26DVAJTG12pY5Upcnu3dVWpKgdifnL8rviWz4TiVGFDpDYbyFLZ",
  "key15": "2czaxxKnW6bUCwLayYdZV1CkhMLsFA79R2QYPirrXesDW9KUUAkEUyKgGbh8TCqVTh57dxSVH54RYxMa5yHUtNPW",
  "key16": "4eszZNsEtsTe44LGrHzZ3g3zXzVfpBWfqpcFLQuLRmRbC6xnbwreVGdNjQyaWbMqWhsuMyyhfWt6CKMp77hAWVqd",
  "key17": "5kbs1tAAN4W3N8uuGdFChB28c1acGrtCnop3whnPJjm5UdWMBduZNVEPW8wUZaUk9vxKNLbN5BgTsVzj3eCXwroE",
  "key18": "4qf9AQAmiXDKtEeByPRqXcioSPkHJLgwFY6GpJgFpCY3gXUN5qnxGPgKsvEDG5NyTTv1YEKf4HxpKTQXwp3FN9WU",
  "key19": "28R1Lk3QKujKLhvf6uLr4WZuqNqtsTi16WdmBwfLWGMXV7DFeuTkW4UzbFNG6G7Jv1dVvFz4xPqtUvuYL8mNLocw",
  "key20": "PTqobTSBPFkFdzUE2NSzekR1cZo8VSkK8eYPfVogJJ3MW1mrMa8LzkgWXibbRDqeyyFLx6rujGCgNA1p5unC1iZ",
  "key21": "5ab4vjFHvFrte9XLJczxXQAmqDGfmeoXjJYw1P5qobV7ntQZVnWLMzX87uhvyiF6uLgmbwHThcd6KASQW9JWdLBt",
  "key22": "3DwxeKXSGES8AiGd6bdorqDQhtXA9VoPwebUAQaqhonKAbCreg6ycz65Z2oLZ198uZGKEy7ZJmRm4dJfLq7d4pTj",
  "key23": "5QsxFCeCNHT4CD4rXePRVuuTDx3bLNJREb9JFoiL6r2cpFsutePCiuWV45jjPJL63AudVU1Lz6eCLFste6F616KR",
  "key24": "4Ab9UtQirPpdjfr99pAxDMhLhHqHwQy4MuFUTjSXSzCPk5R5VXBdPGw8osfVZZVQEmssi1QxMYuno4xTwGhwf4ns",
  "key25": "2JDTcpQndFfK1k3FJ8KULaN6vbGewxME5r6M53d4yRTQVPz4eeAypoJedAFaqPPi3bAg1QXyPbGgfYRUCfMa3Hny",
  "key26": "3a2CJJiMENET2QFUqgax8VDVwTFmf2zqtJe9QLpmcKFvNsE6kgdkQgHvTsZ4sdPvqgaXdVKTLoEzWv86mNeUXjif",
  "key27": "Lysmbv1GQYZHJNDbh3QzoitAoiKmTcBbUPmw7VQ94gbtXkrtd4zy4HMqcQ62UkMKEnkRR6oRxHjSiy2ddSwbCsH",
  "key28": "ciGochtwcUCAoKu8jTEkf5qjTZhha27qjwneNCZ36bg667qU4BVFbmo6kQv2C7G7D4YN4fWjrMx9W8fS4aqMwvY",
  "key29": "3Py8DGuKguS8wrMgxrn8uyLwJgrwqBCdrzXXrwpC3C5QSFPzRQgbqqQmF4DwLWixVNqAj3cazN5bSi7rKJ7WLssg",
  "key30": "3tH5GqXw9ny2hcwvnV1TaMsYtcsVbawGgwhWDU8r64jMGky95ZoSvSYNADAmyA13rjefWjNX2ndvUR37vtJiycxv",
  "key31": "3uxKMtqA37fkpQUDDJqLZvFSGUvjgk1GrXtGBW8PmdYJQP2Pm9mZRJLmA1ZYAxtStpE3tNUNkje3PqqSLXqsK9gj",
  "key32": "41Pip4kdCgHUX7yEBVVn2vvQYPigcHfpwLHuAwApNZ3zPLjQ3nfhp9tJKWLxEGhyEcHtwdksy54fFeDf8xGURE9Y",
  "key33": "3X5FeBD79K8afdDEjeqeYayQ4NH6rCVW4DZEVLsqDaHSEAFdQkgP3kT9mZC8tdCmVQLBW28apQRDXCFMN1AMsM9j",
  "key34": "3m74sUD3v7Ed2L1iTnCFP1isfhsDYqKLL9HkQx9QHJiwVgwDHypPQNeN7D5NDHuJt6zxM3j9fMerxit9Hfuqtavb",
  "key35": "5j5hdRc25Rsi1TMos5ZYCcQxfK6puNEu3Wf1c4Hzc5RdgE3aM9iUTRm8qUR4cryBY1jSK42bqWvmxsiHfcxsaD5A",
  "key36": "zFnSaBZZLjqDCAmeSyD55tVVx5Lf1oxY1Xumz5G564LZpDTBniGGSEAKSXheZAf3em7shY9ozgW8BwmqkASWedw",
  "key37": "2CX5RfQpzo8a8crXmDxT6WnEuDL5SqGyiCjm3DFvwmAAJnFZZkUqP11girHN2a38bvbYabBbDSvb2xQYbgCkHihj",
  "key38": "2dhna3gPo2o9vzVDPkn888hhRdqHGu75v97kiLtWWg8ZmGuJoTXDTrVwYDNsYF7t7ZCL1GkufeFhmToNieQsMfg",
  "key39": "rQ8PCYje9zzGWwiUVzHcupzQBkVVcxa3um4ZzkrFZmK9ut6RiUcNwhw2cQU7DDwAcArWT7qEkdUYT9KhMJ3NhpQ"
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
