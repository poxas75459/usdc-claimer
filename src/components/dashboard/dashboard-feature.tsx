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
    "5UsRyFsgorYREFNYUb52JEMJHgyr8XHsPMiCVruEg84xSymJVqUwk3SxdbGmRvaLKQMToGa1PYkMwnguQ3t2GUaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vnSUJn4cGEf3JxeTgn4zHEDyx4Dgvb6LXQpVgNBqujew9ffv4emKKvj3BgLAkLb3bEeTMukJbSzZcRdDEFzJbEa",
  "key1": "55CiKhFdYHWbEbpnSnjqLh1TfKdTW2NTbXfUKJEziBb1s7iQuEapQQMLS2ipH7RyQYNBdKjzwLfKJPFtKGByCUjx",
  "key2": "5QGdXXEBjZTZ6Nu9WKF2ZznwXfwQJtX4wbXkASzqhfArvhmQLB5vxe2E7cRE6KrxaivhccFSsm9iyqHx4GkCH4SW",
  "key3": "4zRczVoQ933y43kieuDdWRsuF1hToqB13p1wecCkYJvQfnJEidxbmqaMG45trwnDaUMSEhkANYsk2Prjvz1SyYqM",
  "key4": "5rMyhGrrLLEZ4oaV2hYKgzaNieTnsJk7oeRxWT9uPMjM1x2KbwsSrsbxnLd5eWiyrt4YT3XijZn3prhDJhscHPH",
  "key5": "4kVngRxKahbfk9BPNnWcdACYvkhLyJURtBEYz8hPA1bZLKsefGXicz2wMUG8tz2RLPVRsJQFKH85B19AESWbjhnM",
  "key6": "436Ck1FaZoAhxvPAsuHppKubhPYsLXqszN4D6MCbdyiPHrrT23cU54isy8k4b4U1ESDBCzPpwYRwbMzYCn9B5Fbc",
  "key7": "5opPtkfJAXDFwaHexFB4SNGqDragTGkh94VoTJvEm9ayt5ByQ91Ctk9mbJUvGH5QD3B1MTB7QJ35xXygngdr5NmH",
  "key8": "21bERqB7HndXbMFx1aQnGzGRk4xxPSfiBRFeDAVEzJXwKKssKuSVVwRDWF7YcP8bW96ZwfGymjr6p6harhj9Uw45",
  "key9": "328zvhVAb4PDMujHvE3joDU85mkCwuczyvzHWCc8rZufVFaHRjtL43TpZoDLYrkf5QaxA3qLMo4jvLRLQHfMBFc5",
  "key10": "4MDes4kyZc3VHDXCHNo8T97x8wKcGgzqFDWBvVqWTSA5TEUiYZdnYpZRAuLMH6rCQqYCcdsWF3TxZny9kEQHBvKZ",
  "key11": "5sRY894fLSDpxZeej3VyggBd4GDmgmT5LyWUrsSfpGS73w4aFz5DTusonRTALSeU1mZBQXH1h2zP5dWefMqe7nB2",
  "key12": "2KhM43TeXJ6y982uX3vW21wL3g7CzEJ8uXR9Hx4Dt3ca3vKU5SVTJRvVvhQpPPL36qxik3zrHAAV5gbHALTy4gpc",
  "key13": "5X7Du9GrsuziE8ZczVS618dJf2ACjeVJ35ydmuSCSwR2sxNX9UdZs6jxpqFsr8TouF8G8EZF2PW18U8y4F5u4n32",
  "key14": "56wNzaucvJQmAbmdWkLS5BjLNEE5cnsVwsPyc1StH7DBsR2t3c7hCvv4aFwAiUkdzUc74AbCq6sr7rSotEjnhnsd",
  "key15": "3D9UU4pwtbV5GaEWB8kdxzD66r1xZwCqhWvtUHYaTBq1eCTVKycU5E1yD1KXyXd4PsuTFRUJWZZeMbFsgVfFrPJC",
  "key16": "269YNaX5bkQYZ4NWMfeMsPwdJCRqccCwvJaa95XUJEEbAwTCo7kjoxcBY6CefMZHEPMPAbXcJdy81qZDFm4GqQht",
  "key17": "3fXkyX7eUsZJTWFNTH4ojDgAoTuiGcmFC5Dn7ECTzV5JXMxeuEjDdd257ur3dYp9jZuNwzVE4sz34oQGLfeTbWhH",
  "key18": "5ZGcXSH1g7eXbdVWoyqX8ofjwHpzHxft9tdfjcXUJT9eUwQk82iQJEpZ98hfBZu7VxGHKQuSws3Yf7smSonFk6nL",
  "key19": "KA1pQ699r8nygbJAinEo1xu5pimiMnMN6h4sqDnzvJHSsGRVDxVdfjwH7xyvn6RCKnoEsiC3NXBGZB3LfEXY3i6",
  "key20": "5FJD9J3ZcGiekQGmh8HYe1wfwMRiVPuv9X9jX3DVu2nW6TQJzJeoiwxnV9KvD4H6n49MnTHYGYK4wJjtUouCkkPt",
  "key21": "43ENAzxd4TCNPWdyPgvADMNRm79adGHbdFBiceUPenUZNCKxpwmD1JxXB5nkiWiT62QmfxQBvdYhomcHdmsPCCkf",
  "key22": "srg1Dn1iUz38bJQxhb2xfEnbLS53LMptBNR5T1TqjiJLUckpMMzRJUVyWeDKj77nE8VhXLmkRXLx7T69GcVuPbN",
  "key23": "3ZYfuFUSaJfy98vtHjDwdSPeiv3JF2bs2tPYZoy1Wz5384fbqvSTgPAD8ZVfVoi5yo9rV1aHEaZBxwgajAdVjjHb",
  "key24": "4iPpaW2ke5vixdUQz6teL4iYi46xZXaA7PZXJkATzWVUHZAQ35wWRiGpxfYsxHBYKqeWvuMTXmyAr8M2AFqyE29M",
  "key25": "PVbLrcyfLqLvUyDuM7yZcPzj9MwUQWrExsHha1o1fACwDzvd7RNUWCoaSubZaxvgUYdin5xeocduobid1bFqf1D",
  "key26": "37FtJ4gLSsb2rSSJLf4FPH33FZexNUGyAXSizx1K4kKg82K9WxN9CD3yAkmoRSHmMiFLWKXghzqDePWwtJxxY8kR",
  "key27": "5BFcC9RDtLX8cCcHQeExDe8Ak57zYzVutrkKdcd72xFtvfkF7uFZMrZpWf2uUMwkHAAgsw6rZudssbHiPNXMjpdL",
  "key28": "3NPNga6PzM2Lv7JG9JhKqZ81HZGnT1tDiEYq7CVJg5QMBYQsQwD84fywFKoJbTEEPMe9ywi2bGagGWXYsKggBxca",
  "key29": "4BNn55g8Qf3gLUwb6pFxUMqARGmg7oRJcKqj2CpLEpmcdCdphYubw2aaFGpg4Ax9Y7xeTaeXpHDcBm1HuMWwjoob",
  "key30": "5MpCzamtGPiEet1UiExbBQN8r7pSpd822RX5X66Z1ie6sHenwn8G6gZkBJDYnenbzkP1t87Sr436vLNg2iFJw9C7",
  "key31": "6hxJPzqtH1G5c6MDAT8nRa34RjwoSVH7DZFukQmD2H7E1B2zGTC4qvLRvjTym4off1uFziaExSQJ3VuUePP4RaB",
  "key32": "ZzXtrwPEtKn2i7vYNG5G7UD6P19QiocBUQzApan9FotczYPuuYg6tGsPahcq9ZtEj8aXJkLg7p49TZwS5aTwKYe",
  "key33": "4QgE8quBtoiwBiForMfuyWaeRwap92wUDvURecU5cysgVBCxtGf2ahHqtSh6A7zTvK4xgLExZWhVzK5fu9SKLARq",
  "key34": "2hTgte49QWpcatnZiHdueMCrFUqWWSxYSmobvoaWvcnrG7pSLoQDWpyf1dTxTGanWbUZ7VrSG8f3qAJYqybSuM6Y",
  "key35": "3BVsBDzBhaKohSBwBxy24d8XpR2zyUPwjqSchHGWVpmqEXrnToEEJC93WKZD5QbtnyCYbzXRYfsWzNCKQ5bV9Ecg",
  "key36": "3pNGTVX3ZRXSbDzWoBU5ucdwpQfvPW9JHzUqnzYrvt2gBq13XTkKzQcTGqCp5Dd5aVsCEo3stfs4sKH8d5TiD4w1",
  "key37": "iZKgmireSqJePbPqWPKsEGgfLdnbeXosRw8Ci7GmKDs9zS3daHTdUTfMygbLGVBvoDZyGAwLCUonz3WeuemaZtT",
  "key38": "2FT9LNcF7LNB3SZinfCxfpaTkqR9tH6NshcBfakSYdzne9rph1HRVZPV8syWhsQitV8ehF1doKtDCKMheBZ48Xe4",
  "key39": "24uACzrwLCTjYM61KM1bTeuQX3CRFf9gnsYWMw29GpQynkAeSC3MDZSe15V2QSeL476tasZuZAmzkCdFkUp1Dv49",
  "key40": "2d17LhZFDAuqFuJ51sdFTtiujdvnheGD3w74qYdf8AuyXDekG1neG6yQrbR9dP6gkQREXNKJDfWPGG3ksAw2zkEn",
  "key41": "2aqx82gS4WVWBpT4RKcaJDmBnppB97MaMszooYMbvPKQrThEA94scgWeKVvEYnUhjD4B3nzYC6rgYNu7qNj7FpqA",
  "key42": "5CMuW29HrMkvTJ7sbHwVZWKpKcjDZ92FDUNMZcEhCgMGDXbnQbj2ZYpfmn6JhjmHGgBYSL6zAXLWyFuR6t5G9HR9"
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
