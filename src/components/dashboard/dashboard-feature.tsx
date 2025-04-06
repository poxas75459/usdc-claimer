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
    "5FbdwyPn2E3Le6uGUb4xxCVEkqvQQHm5fXB9WPA1KejqAG4t3ZLQn3wVhuVmF6HeaUwQkJaGvnhKpcjcAuQ5jGeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rDkoWL1HPG67tqqBjkiQ5spE7737mfPSNTWBajLqru93LeKPxQH4yiqGCiyKvJ9NtbrwyHcTjVeBQrM9aFAhmp",
  "key1": "54yDT5XyTQzXZBrUoqiy9NJUcdGxqwAnuqobAtRKNZawVN2z3CJYqWXd8ibrF3sXkNPb1J9wjCmaWN9uRQzfh9nn",
  "key2": "5qoEi6UfiPHL4Exu5hBJsyReiRLWdKTLfaMs95JB76nR6SZ4vQETqALcenG9zuQGGMdE94V75PvPm9UzjBA4uM4B",
  "key3": "2JLr36uz7ERCM5UWY6pToHJCLDNQcJfZKCaLiuPU7AHs8BDUaFr3mTveC6a12k4Zic3AuKCdiWPXs1NGrnNdR4df",
  "key4": "569pq2b9K96eDak3yz8CaqHMt2ipvLTB3h3y1R4C3jV2E9ZZkQ9MAbwCBtKq3evxpNFnvoKBuMqH6HwK6EJgPcSy",
  "key5": "5Fc9EJF5jM5WTf4zrg32npCmBoMjUBkBj9SGQTNJN69nzbemmhpNa4AxLiebEiC2exEoAyj2HVR5AUzxKZvNZx4S",
  "key6": "EAQEKhhbojHGYynkaW7JKWyWuoXDQa624MiyiGSXJnHpwTFpcX31P5fkXC7ARwyFswMkcrR3mBSRvf4qmGom2aM",
  "key7": "5Cr8zHvVQYfEDr7ZSstVoFMAnJGV9YnwLBMZuj4s5CPBXrFk6emWL67KsH66QPrXUF8RwEW7B7aomWTBhn1tf3tb",
  "key8": "449qj9RfVbgdNmE36xxELF68BQNHiispAu9fuAHxQAQkwwbF1GETebJfitgCrgSuBPKdh6GWdQCSseFvnrBWaRcr",
  "key9": "xN2FSSYvSn7hjgWXhKv5Y9DWNmVgTp9DEcgqJ16E77SJjqWfb5stUAyrbkLSPdmt78eKvJoiS12einh488qoMZH",
  "key10": "s5Sk5eJZecv44PAtcT7uET4HeSKFNHDVcmCEgYdmrhcoE3CVQEqG5jDg9zezgShyaa3TgYa8jGhY5HcjKNVNAkB",
  "key11": "5eD8GrVDkvNP6XgkKnUx4ydyZ1FpZezZ8XsLzNt6nv43vdF9Z8YDd4CGgRMMcBQUvEcLWpUNbDqKh8tHreXr1FG7",
  "key12": "35nmgcdLTM9nc5GDSS54SRVgfAcrYnpZyKa2cCwVdoaLjRwp9PgCfhFQbhskL7oq7kwwdg8LmsVXyv5Y8dySmrvt",
  "key13": "3qoeTus221gv5y4ZQWghs3yznrsPp93Xy4fXSzjnVs2ooRFz4SfPGwiTExH3CjhrXAGpsBTi6YVkqYiAFk22NZtW",
  "key14": "6352pb9AWY4LeReQGJRAmnba8MoexS41cvfpkLNVJ7RmFDNbJg3gprRa4pj46WMz8ucpZeQrk7MZFqSooWNbq3Th",
  "key15": "2tvfepJNiiCSNSWyJ9FBbdA2J3XZ3WbhuxRJonJRB1HjF7TiYHRhe2uKcgeZq7dokt6TnDqLyJ1QJax4MCkZS69N",
  "key16": "2bpGS53HkJ6s2Ryr6y36AfGX86eEhYTf3GBQTeuLngjjZ38rVwvD967djQ7rrxiod9ZQZeP4RGnN27EodJLzpY4a",
  "key17": "23M9zjhmBDB5F36s5jtvSbLjjn6hTk4tce3ykKaJzgAps9bQrsagf2kcbiXr6ct826uJkTwVVpAifZEeF8wSermM",
  "key18": "3BU1hozshCEijoPeMmKH3tw9xsYTWeYZTipTcozKJUbvnMXXUTnoSBeaczse9KfruAuNdr6je4jGHgsxFM7E4pP3",
  "key19": "YBu9awVFyv7WZsAdRBg59VMDCrUV13FzkLdVuz8Cj6jZzRoVs2L7F3gqe8SUoZ348UWQqeadsLna2g4Je6V1KJC",
  "key20": "5mf1haSX9e38bv2dcavHw5VhFeoBJD7xnuhjTsuNTaVK17f8YB3ATo3eJNc6j1rw4poGJy2T8hB5r5DzYeBggbRZ",
  "key21": "4AENGx2M3SXZDFEb7FQZa7661Sits2qSVyCXU7hNDjfdQV1LzYrmgicn4ibUcGmiWbPMAGMsRWfjnvtKzZ6GJPY1",
  "key22": "5ksbgHN9AyJDvZymetmsrTxhY7DwGZuYDsth4iypJk1SkVqmPxvHzpDwJeSXfCwxqb1ax9uif9tGfgCwPgs25LKg",
  "key23": "5KuQiPo34SJMPNLAQGsyHuMbn5sQapDGUkn1mZKjK4zHQPLcBDxgcZLzbkLBNhrAWMD5fkv6c7K7zRoMJVTRaAVg",
  "key24": "3udzJcErJQQhUbGALkbvaeqbS9GEGAfArKZmJG5QJ2ZfWNPEMDv3d3VhSX5t7C24uzbmBxMtX9k35BubKpRDxJPN",
  "key25": "2pys6eWfKNhsN8avooye8iFiNA3DuQ3ZDoajyM8SEbtxTDr1srgcN9PYkLYKBinpNKjd2mQEXku6rKuTX7E78AmH",
  "key26": "2yqvCktaCJRRFSxe93WTkFFuCwgz8CXcYZS8M943MZPK9x3NUCaULeChJWnnHcLXts5R1iW3TWDg3pvt1mfv3biy",
  "key27": "YrRcQB91QLWuGpyg7jq857gPCDjj9FrGYHgE3jFi56YZRYRSWa48uQWiNy3mEY5ocf5xQ2mNnALZrMoEihhLPqY",
  "key28": "2yTT3orfT8LaTevKXi4cWH3BY8NFuNS4xA37zKrpWAQq1xRjwiJnKrQP5QLSLqWRSk4f7bv7Xv5JNk8hVo1LmtLj",
  "key29": "2S4cu3YWoRdPdGyDe9sMuaFjxnR4uFkiBqef5uUQK5hh5rkwQHcR7mZUsbC9Q7T8bhyw6mN3r9QXTTfWUL16oYU8",
  "key30": "nyqSTxVGemhaS5kyAy7bkgZNk9MeF9243QRuqkDibMdnMPUjHWEfQiBwPahQW9d1gG41kVRH74DoAVWPMuFbkT2",
  "key31": "3VTk4nffo3sAr91SdNaayj18uoKXDsC6AxyuG9xXchZesfALyb2MWiYHXcmTkrKn8WiWgHUtNZhZtrUBJfkaL2UQ",
  "key32": "3j4mcXmfFjZvDAyLWAYNuzGb7CxtS54sjwGrLLVKEEpxWZAF4KaWnBVnthNDcU7wjATfLX7ZRnfvH5MHbyYkSrDD",
  "key33": "3Dr7j7yikGd2keu5y3huftvVJ1F9ksdsALULnyYX9qwn1gKkwcPHY6iwLe7oiBAxtyqoMBcHPLeoAo3RyXZaPE6J"
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
