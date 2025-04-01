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
    "ALUyRqMnb54TnYpcGn8mP9SL5BKeVZEFLAssRtZGgFvHxEKCfzpHq1572qBTTWww6yPSuwhnhNtVuhYMMMLVSQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34qYmZ4osckokKZ4XkFCrcedT11Bu1dPadZ4VZND2F5jPgQDGje14gzBuiGUhHGSaF9XYnwpxZXer2SzVsTUrfTp",
  "key1": "3XhdwoJvVfHwPyY37ey9JmUcKkLsV23qPyeX4kueZtKrFMSxquwk9iBw6nEMBGqEcgh3fsGLG58eKQwBaGy5uzJt",
  "key2": "73q1j6uEYPrgBhF2zYvNVLWnwFXaarn2gvTHHCNEQRqYzMZ8t6Z9aD4XnAYHaYGH6x7pjL5775JdwX7nvRvDLim",
  "key3": "MJfJExTouShwrakUTpcg8Jo7k2FH8oErhfPzR8vprDgQJCvnErBiUonqYfvtSQzUe55SU6t9uQAxKjza2mUcBdi",
  "key4": "3rRSdpUGy3m65MqRMDMBvKBk6gVzF1Gv66jfz8V3ijbgJMG5i64ZwiZ2qMGZmg6kGUpoBs6VeRHewovL59PQsCLn",
  "key5": "2bqX4NuuvgsBkP8TLt6XgT2np27H1vhDpRhT2njaFmhdTJvNJ3eymyCjU6W695Z9itATeYQVjh27iG7E9SEnHZmS",
  "key6": "2gnatTCXSBq1wrATCmFPQzhxY253MoHEyJjKwUbmcvVvv3sp9ToHTAQFhf4Qvv6gzuCkN4CMoWaZyVFyttbD5WD6",
  "key7": "4KaMEDAzLbok4b4A2otji1iuY5zvev1HZAR9ozGWWRKu5kJ2qW4G4FPkLE34aFDy3fMQBHFrGfFhuWqvQjbAB83x",
  "key8": "77fZdd76Nrnb4eiMBADx8kwAJMfYDUXcfFynBvfQfEq4T1sQnTYSrqC9Vg7Roa6J5cin68BgdLQu7K5xW3WwRV1",
  "key9": "3eHpdHvxgckr4upwMH2zebU2WuFNcUzC8Egv1ARCuemtisDchTRxSMrskUd2e3We6QHbYSpdBUozVwVS7zPpMvUW",
  "key10": "3Zxxe5xstz1SdpHh3Mvd9VCvzAUWRCF9KJ8jSdzJVJdwJvtgfQbwmP6XehGfc3HgVB4yGWJMx9J8voss2LQjYyUK",
  "key11": "5XKLeDwkGuTgAw6faPv7qArB6oq8h2rmarth49xDpEbeNhCucszyjpjwEye9dW2DYeeoEHucdgPXUhspewRNoZan",
  "key12": "4DGuCDLguiTTwkPbqXhs7PnEZpPooYtWvMEZdRoHYCEWtnxSGWyFcbyjiZHRLRdFB7sWTQP3oVyG1uReJePN328n",
  "key13": "5Q69d6YiQFTwUYVzB9rcGdeTvMt5XpsnLKB5asgign22gNhL4RQJRpJUT59T3WeGHhMQq3dtJydco77ZBcQzMogU",
  "key14": "41j9iXRi5y56sm2dEPdJuf2f6mCuBVtKsZzWDCrqdcnyPs2WXrg4spNym8pSrAvSMPiAN8H2B6XU1VAQDhonsUyQ",
  "key15": "2nkowVb9qLCRTVGwHm5NEBi2QJoP9vAKD4BtYKpbxUC6dqetvGspu1igzR2hrQS9zemFZDG7cXPnsAbroWvdn1ur",
  "key16": "3d4jX96qbnAyQtkH84LQoWdnsqPiroiK3dEEYYTKDAoSrQ1TemG5jkCjfjy9cm8vNyvujrGdiCkBCmTpLJ6sbhAY",
  "key17": "5gmEtPZTAfWa4pRtfkDPWqeyijJp3REFpBMhPGFZWUHXQVUgx1xLKhC73LvVAWPEQ4Fp5q8mM9H8hJFTvH6oHwjq",
  "key18": "5DsGsPKqx3KgsKDYJrni124SPnU3oRm1nAn8t4xmxawVMKisxUcu8wxMQ5HEfGviKqWu1Giux1DVoyu89WF5YzSG",
  "key19": "5pbaodivdweBFwRzKzZr71hvUrZGQHHiqPwwRxpnZDo5qoBbHnGMkPvbDMWPVP2irSb8WYJ8uS28KEsUDc2t2e1U",
  "key20": "3azHnBgo3e6hHMtz4JgpKN2BwwQjysbh8HXG4Nn2itjFHPXEhEWLCvvkxd8pJDDWYn17EgYgr4AuAxiesQ4SCAj8",
  "key21": "SL1aLPayZQcANNHPpCdPQADDrJ9DBctyFDcmPkEXT5QvrwAsoAozvRzSGCw9kYmMfYZoFKnGG1FRiBeVkBDkweq",
  "key22": "3Rwmwh3JBqHRy9Agkvh4ip1euTsQ2gdpZX3BuymBnRiuWKb2XQN5snKkhfYHKypuMWod6FxKmZmTzjPqRm1YZAfh",
  "key23": "42HFKrg34k38bC34TJM8zo7WppwmFTihhJfDnePjiXzvPRJt5PcpfFkfxiGSgE57A8QEGiRbvnY3d6z9mKpNC4D",
  "key24": "394q5vVjFESvmX4TUdfKLCjMisemGaAhiWD5SVPo2zUZDvQUV9nUwTJvgr4uX95xhcWCmFqD2295SpkWZrzR29et",
  "key25": "2PbbwVSdgEqfsM6jsh7fE31LYcKG6sbQJk4VrwdCcUouQuQhADu6781S3HXWq1DTq5DcRbPfogAqmsxqPy7nw3g3",
  "key26": "4gHvMyE1f3WQgcqYrfUuQrehFL6pLmXqaCk2D63woJqhhtapHhoEdXXAKvUzaQ2VZGtt8vCWz9HitnutZeqwXQba",
  "key27": "2GrAvA1Jnuz16w1WoJoJLyUTdXngBpP1HF3kpfjtj4mqpYoF94D6ADsTbPwykB2o7FscPF6b3kcKP1CWxysnRdcg",
  "key28": "2fatq69gD9yQQAGF9zsgKr9wt1jPcxwBJNqq5cvhgPHD1q2XvHv1A2dnpBfoh93iWo3g5qBFFNCLTAkmbuFsWzYw",
  "key29": "5jjk6kZdtf51ycEipV8QokZAsqaznPK3GAJWfqV9Vsfoi9mx3d7WZkgZ5qCvm12oaXBvuHsJDD758BJF2FLM2TEq",
  "key30": "4WXAh8PziJMypa71i7TmTDMgQi8W8goNU7UZspZP53syXnccUkUR6zgoAFqyi5Cj2nGK65tcAGfqmvMwm9Mf1hoJ",
  "key31": "5A31EFz8G7JwgrdEj6aPpUEkgjyMzgiJ3JnFuaxfndfhmg22BNHfJYY3JL1aVA24VYLv2cYqkyV5mLzWiHnynZwY",
  "key32": "CNRUbo4qs5M5PXSwjfvK2PmjFEGwgVMnGs2vxgRyLt3qu7GDyZkt1tYHwidfPbXMKU33D3QzsjgxwprAnHP8XJg",
  "key33": "iWaJiSQe4JH894aSv5gBwkSiFrxW9yxoWWu4HT4rhYHPrXVtSuteW6XJ2aKUTdQRhGCKdHge6UaP5mwEWxwRM9j",
  "key34": "pupptS6eZFmaaj3mfuwBuWr9osJLdGRopB4r8HZU3NrpeC77kZvEXv63nKZpYutx9Lf1frKixKu4XuKVmUfdsuT",
  "key35": "4akWL8LfrKsgAcjxccaUGwxg3pcGMYQiWDEPxJCx4RcvcEjM8Ym7StsGMib6MxS6PvYeaDDn353CDsxUCVjkFG1d",
  "key36": "3zL5T4jznPV3RPk7KXvxH8XE26azzQDqsiP6Gyu52s2M2oAG6JbAfHtBYHGcK44krpxhw9zWyVRoAHcRqjvTErRZ",
  "key37": "26SrBLcw6BPsuMSJw2HnvS6MLJDp9zT5A9XaY4AT62qsqv68zLry1HXjA22W8DzL3GDevBrK8vHSHokTWb2rB3Ye",
  "key38": "23LsL7rCWd5Rm1giCuEoQVmPPjxnCz9x4ku4Uu7qHq8zmeabn23zJxSHVUU8V5EXawfZGcGRSwVXghNyhUBp97sv",
  "key39": "3gFh6T2CaBSqMmpghmvRwm86DwBnxyJci9eYb2WEbQg5BVy3VzYrU1WTiEAcCRUdBJaBCH5mnTRd6bQrXxqb989o",
  "key40": "2WJDytW9e9zTwvS4rdix91DbfwgAuqA7aGDReK2kv1nq4gN83bBVHyzvz4HYkSr9FgDWfhrH58WNcrpnXhqauvU4",
  "key41": "3fCKf4r4D1EybuEFzq9TzQKuWLF4d1igX5QYiwAEwuHrXtfrx3ZnxSPKDpQVYFsNEzaNxjvgsXbjFhb9z4skqQmg"
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
