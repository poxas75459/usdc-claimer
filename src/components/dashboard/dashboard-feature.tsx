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
    "4KUQpmECAF7q6H9Dz1fVmnmDF2xD93zgQq7JkLrwKpxd5eag5TixWK5oyRskzUsfKDCaVDJvhKv9s8wGdZ9Woz4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ed15c5Ssc88XPXc4L99ERA2oJkoXKPgQezcKrQaU1uhDWZL9Rxymh6WeKKufvZ1uQMCXLQraMvXhkqfAVaeQ6yq",
  "key1": "2AAMNUmWuytaurHEWen1ChhjAX27MQ4NUExSFnA6bJnqzwM9WQb2oGTfWG7jJhTxRTeKepe5jVJuTooyGzS3ZyQ1",
  "key2": "3g5ak1soNUVgkrisjw26ixNRMuxjdyMwHpvXyzABbatgyRYM8jwQfsVNBtLacGSgdnoaY7anpCcrEMDE4USezXan",
  "key3": "44SFHjfwoTfANJdS3Eyq5jKGCmpeZR7x9HmDUi3cEAgExRoNB6hLdVxsbX4duhMGScEGSz73Lq438oNDUveZedLV",
  "key4": "2hergypXVtwunX4T4R5TQLxcYM7EqfsJkgcq3oXSAVun67EYpPsLLUMBepSW7Bod2dJ3SoipjjUAYMsiCt5GCGJG",
  "key5": "3YdgDMporYcfnxFNPU2pEKSyJ7p9mooKxJgVvew4xUwzipNGSJN3fHiqJuLUMKZT1v6VqfYuY1WSPtcWULG22cDu",
  "key6": "2ApmWdFnUt7WfLkoJR1pRP6JdQjYw86KHtN6vnWyTs2HbDhyR6FVzXPhop1QhHsnrPmff3rNpmjJWQ42uZ6QRvus",
  "key7": "5fgKWpnGujsBTm9afXNK8r3YZnZybvCfQiov6mxnBuoGLuz32irmk6p4y1tzKHiKz7bjfhfeudxBEftiZwTzAc51",
  "key8": "3Z7PEm7eFJz5QrJxjftkPzzgh3Ga9Yd1MvxXqV4GnAae1QuAbXwXhmRXZyXRBgH87WMmX2EryXmiChtTJNx7iupf",
  "key9": "eFFLyUGn5xsqxzST3JMfvKWrx4uddzoEknvS5c2dsBLYTZrFhBFW8AbNsDWn5EDggYGU9XWwQYC5Atetcg6raVC",
  "key10": "64Qd51iRDUZSBwWtf7DBFsF5rdCQYtk9iX6Cc7ZRtoZewjKmo1Sxd6EEsMxHUDxJa9sFzyb3688GQ7kHco5udjte",
  "key11": "skiAX6vyrG48EPJaDiVe5MqKBKHrvxKTfXZSg98CWvhkpYiqmxECgsHC9dW8nebjC1pT2CzK1NBwUHdgGT4H94b",
  "key12": "iud7fauCbG68HWukE1JuzTEwZegxu9yaww6UzmX5mcmHBiiyHpXtYCjYJY8Mz74s7RsfMicUmcTLj9FHpFrQKay",
  "key13": "D6opbAMiHRZfQjCboZtSRYbg3CNdFKXujGDPo4WCyJ7JitvygWuNokKqoF434v69NqzMhymUtVAVuD39og5B1Sw",
  "key14": "3foNoi2k5fFRpjHy5fGMv1wi2VYQ4kYGxxsPip8uajxBvwM9zq46y9ArKHBb4cRMthzPv7q37KhmCwixUpnLZLPv",
  "key15": "35Z7G73LS1nixuRiyVQMCRuZ9kpXqdAEmiQbFUd2DJFTDsNhf9UzoH89vL8NvbjHqAp8vp441HWSVLmTzZzEc3j2",
  "key16": "4KdAJDER8R2syP7FFBq41Zfa6xayT6mdBatk8jfAsQegWXWajDKtLkiVc9MSAJifF8aRvUXwsQR3dSuueT1ZvHiz",
  "key17": "2x7Sw93vBTLWF7vKna2VtkWrggxotuA7LMPCGrjkGa15tXq1KQyR9MuQcctJsfmAzf9PA3A8UncZokuHdJtftP3t",
  "key18": "66JsL6HL3py4VeTzUZb4fp4WKNmEVsbpcuUpf1UJpesWaDChnb2frHUxwCSnCurZnRUyWyXBkykYxF9VJLi6EHwG",
  "key19": "4t1KQK77QGsc3xXbBH5VSf1172nPHW74To6YMoDvJZQW2KFYnzcbHF93WQp1i2kxqobNXPYtkao29PuhqrFFfQ55",
  "key20": "4Zb6A7pdRr46Y9ZVoN55sn8afcm7XqhCTAMAJR18Fzekrrfiyt1Cfe1MHym4D5KYqNL5CH6VJbZQpTrdW31zB4W3",
  "key21": "dCEWzyidfeERXCPfVifTYWWi6qDe9TJuybBeEhShNPB1pi4bcmpGvsDjbe4HFr1GjbBUoVqr3Qfm5Zj6NHjZtDS",
  "key22": "VnJgMC55fxAe4LgM1Fox6n8Br3mbuTKdon73QCuBHWvoLdMWbWj2s7CHDUyZxNuaXVKScPAXz48qrzUoRSRCAGV",
  "key23": "2Za7Y2tApQrXwKQ4NyQQU5xkBZ92HkJE7yrGf1ejP14wQYv8R1wdhymAW7pAxWGYjJHs8wnMmK8n8sChALvjJbzr",
  "key24": "3ft1AzLVjd3qeatYBxHZhskXzaTKr8EsGU3PzVT8XRksYtqLN87LbnXwxkyQexfbSazoyjmB8esj2TsLJDpQY4st",
  "key25": "3imqThZJmbW1cmC4eYKdG52AMye5DWyeiF6u1CJJ2YUagyS23dmD1QkExTvHuUYQ2vbKcK9vp5FjDjSJL6HR3GLh",
  "key26": "4AhXApcUC2Vp9bxsTgnVVg6KqdirT5VG3Kn753t7WQo5qDH6X1RKWh2Kp7KAqm5xc9gYswJYuPVdN2E4aoLacL65",
  "key27": "519TYJziaRJLFaZeqUdyr1RnssRRH5AJAKRCkrBtqf7WPorc6ZjWbiWV84UQbW7gDhSP6oaX3Tc92wgopmskEspc",
  "key28": "5YphwHpdPba9AUAmQGMFxB7btnRWSMYJwKEFpB1BzGGKYiWiiGbgxHYqtLiuAG6DcRQJ9ziprnpPaSzJEes9bR34",
  "key29": "37saurSunvqccXoCawzF9ZJLiBQaVB9Sy9UhFHdzKWDLDpUGmoLg9E1umgDyvH9eykscXb6UZhutKFkip9esiBhr",
  "key30": "2WYYXZeMHQszbXF5yXrtHWSCn3i6HsecKsVN3QjQFau4Dski5gqrPbgPjCDBcGq7HBDqKeii8FaJKVmyWzHJ3GEG",
  "key31": "Leb6YKmy6ks8WgBnBw2FkpDVr4WSHznQ9i6N7sXMS5PQGoHJvmrZNxZJGf4R5eJ8PSeqMPmPdR6Sr6Qn8MVDZCD"
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
