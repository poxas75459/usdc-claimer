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
    "2jZJqcCYsNDTMfxwfFCgMs53kYw2pKtTEJxqNc8fZta1CcA2JRZKRgfdtdApv5CHqvqGVqAHQ23hRrLC4C87irNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqQZxVCKmjMK1cNhgTEUWNqpQmA4z2GQVkitNyWYNkm27xx54RYv1SGjKyp29pQtFC379kxEksyA622b48mFX7G",
  "key1": "26NrnLR2bUifshAnNim9YENukhNzWhAvXzJ2sSySfhF6JeVLt7mAcsTaXW8oUXQLw5fQ9e35Sz4j3jVJApj2CPDS",
  "key2": "4HF7MB7oyd3WgsX6JGUXaXWbuRj53DRtv9LcG5xuutc34bXBSbEUXeaUSMWEnsYFfqd5vS7GXsnx487hptBPfrfL",
  "key3": "55t4TaHqDuuAsLbHD3m4Df6YmfJPGPqgjzgiMddo5iqH4JEBd2HpgCjfmk8h2PMKVuLJoggaD4eTSMYeUXoqZtpw",
  "key4": "31Gb6V4gLZ9KQuzbytpRQVzHFAiSnmuGHbZS6NoozuCa5fSEK9AGHG9cKTx1pWQ5UyXm8xpZrfCNJedMzgF79Quv",
  "key5": "5nFdgJMNSNbhzuC3cpSayjyKHX8ytniy2ez4skSEmazCsAvLdqLGUdRALeweCSETWPVVfqe9FWydYu7cCe5LTnxV",
  "key6": "24eN4Wd8evEjz7193kDeCUn5YtYao2SgFgq6Xuw1iLJXxL2Mm9RcG4C5FE9A9omDtQsvHjwETu7LmtSsQUoSMYAu",
  "key7": "5BxNUpMaKNKwK1jojhzrMaa3CVzmmJgVP8xbyQxmX7JGH3xT7Mt9k7vpc3QS7B85r1csnCBkneL8N6FTchTaWHQy",
  "key8": "3ELEre88a5Fy7bCWHCUYn43CiZV9toaXtLsVqJCpbv5xXMTnT2vv6eFej4y8sWCpGSzoJPn2TkbKgqw5r8oV2Scn",
  "key9": "3Qjb281AwTdRYPAV758C6RDHKhUkyMhY6V2f74wdMjmU7Bh6EtMoRUkLUKG4prkrabz9QEaV1BSiPw6sfBdwnzmB",
  "key10": "cc7Rhm6UnpgYMHGBEaHkfmh2QKm3L3wFNw15BJUKgau8okZeoRMZHMaJbk9qdgcirUK7Zs85e8kT1e3xkY6SjRg",
  "key11": "4hucW7QwWKE9devWeUw7QCkN8GW3yBfDe6UbzybGT8xbDvCEPSucePC9jAFPx4o31SKgYrhBA2tTa9diqfTTFmMJ",
  "key12": "5hzzmfWhyqoqHVbNZmGru5h2kxqw5Vz4fRRbuTLUH7FAs8QtcJmptxk84zngGz8GNZFfB4hZAGmFoDwgU5e77YJs",
  "key13": "ycuWUWj9JhwmN9xck2XZZc2cyTmwm7uW6UmbPLAv8WVk49oLjvYcUNhA1rwjHxQdTHNvkA7e8dfuyv5tDxRyuoM",
  "key14": "3nBC8SXm86tSvwp1jwRmLCKDCv2rbfR7Ua5NCCuveFDtueUQMgQUWGu5mgA9tFT5NXzPhLFMkxrJX2H6666qVZCu",
  "key15": "37CcavwgjthcZFaLokiydCGNVwXjiPBKGdb7gDDZL8zuh4MUbPWczTfvmoLwcoGrRbLCL2ST1cZG1i5QMBARFTFg",
  "key16": "5gGfpTzsWRpSqo9TCRgEC9apTXiNmTTnp8C78mjKKroyJdY9Zm9MfexyuaFcizMmKnhGZSkpKQztNgHyCGKSBgcf",
  "key17": "4bBGZtdacBinmNs636Lfsmmqip7gLz9LnX4yc8i1BNCMSXYGPrumeq3XRdzm8TQx8doNgjemtbZu3N6nEnwEekLZ",
  "key18": "4ZpMA9BbxDVXuUXMzquWHag6QgYyU9MYAMPW6QWSPdw95VYa1hFU8fseEUbswtiJqP4AebQZyfLtWB5NDxNepQpB",
  "key19": "2HRrcWfYdCoz8bRrYyaVaYNPWVPTEygVEnwY1VnMVwUweYNubr1KwfqFhg13QEB5ZRtCwdphBLrmoAMBtjaMV5cN",
  "key20": "4Zwq8R45BT4RLrrNjPdD2CCbNXCwTfpEQLFLf3LP23pQQEPi9zQ1DBq6vq4bzSkYpoFk3xcr43RMDCGd6EkjZfV7",
  "key21": "2JG15zkMmsbSgtAF8Za8NRWC7aiQBz3DKMTyrvBMZ7iCU9kp89B8aoR6RNvobWaNcGHRtPEHLL8ec44d6tWReNbY",
  "key22": "4N33oGzvqRiVWzzhEWzm3YvTZxVQ8nzxUv7RN7VWodn64GimXacz8YKptoWMJk58SYuGoF5pip5VTYv5f6DSbRE",
  "key23": "5PQcKCHbpYhHjGRaqZH4UyL1x7QLERsThkfQR52MDQdcTJMtYZmtd9K88uV5VmLJY4oBv353VstmELnEjmJbaYY2",
  "key24": "2W17NcL16Nn8ozbGvwUb7MEVYT2vGNevtiqqWRbYnWo48eu3cFK3qaZtkaMPKrJhUyLXy1srdvdP2J8J6wcQnfhQ",
  "key25": "45yAnQUQ2vsP6rccqCNWV38A7VxPE18ASMTHXVQwTzJXQP53ThT2Buvwz3v3xaaFG5x5LfPVCCP1auPR2iLDngm9",
  "key26": "26tqiksZrBwfuiL5vZNP9XgtcAc1ax9ecKE7wP14358nYT2cFZCRVDxisWxfAEJUqTjXgfRb4SYs3iMmDpQHvK3B",
  "key27": "4r16WaisdzcD2LBnw7WsomKF3BCFkQnT81znScJ778F4BXHf9PwEdSp5Qh9acFdbtS1H2XwoZBhTtR6PHBhWfpef",
  "key28": "5vkZuPKhxQ3z2TpBWfkTkRCnE1R2ecQQWPDFkhDi5yXHGSTiUJVv3nyPzSMADzKbnD4svqEydDzJJSLiYKrvKhBb",
  "key29": "DXugSFrhjLmE22cXZ6W58eVhRmdiw9DwrZtgefxxdMnRcvky2meGetiUqeFmWBX1yRUcK3JCQ8ghRcgAcZVgXMY",
  "key30": "5HosN3BgFB4yyqnFAr9UbA26BKTMzqNSS4MAU1WQdPp6yEP3zv6xwLE9eEwF2AJ4qXvBrGZat6v3VAvY6xafBk2b",
  "key31": "3oPWE5afBkLZmgfLXyKKgmBmP8h4Lek541hfeaa4jhhw888vU3i29hYMGDeYPNGFsDF2MH5DZH3EVueaVdS1yKtY",
  "key32": "246C3LBC9xA1UD8VZ1oTbSx4F8fEJJh5z9eCN7LhePmDARgHmaVDJuy5ZLRbT7oDTLg1Ws8pGYuejzrruzUY9xwW",
  "key33": "32e9pzwiABYcA1KGp5whXobTXJ1vAHQW2NLk8DD5rNkjmu1Qfq8a1WzamfzAbFRfwGpzEkm4zjqM77eWNZaUW9zD"
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
