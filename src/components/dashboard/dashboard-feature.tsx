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
    "yV131o2GDYhVfMtzUk7mJUBTHa4xGCWFiWa7DLNz9jDvQNChHgveZ5M5HjUPRKiT7nHAJCN561pEFx6dGUWJNP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mFYKw74LBAjHEFSFfbAQEuNxn2CUEdYRuEuepX9YqCQKfP96DsVqkupX1ndbfkuaRbSPTBgQNtD1uD4Z4pF1cLL",
  "key1": "4CGXzykya9hLrA4Vf7pM8h7xFHaTKShxBMGc151EE1gqpsU3uUgKEfpW6GkHBaQ2go4N2fG8B1raqye9mCcS5Ldp",
  "key2": "RAJe2cRoAc2A7mi4mu574ji7jtLwXFgZ6BhK6fMCyYv2UocRzcN1AKkchTSvDC8P7SeCGpHcZbEky5U7x1igrmV",
  "key3": "2t84LhfLq2T7iihFWGGeNjbicvM5poZJei8nbfwpCEHQ66uWP9ZS27MBE1QdvkXD79pYCQ2fgrfJKFnkvTJcW5b2",
  "key4": "3yTT5AvkiTwnWMoBhwZMZWEvf5yGFJPHDUmmdCCFe2usqVnSKfYdJAgt9vpuBD9My7g5esKuSVcAjT9vU8Xbkkp4",
  "key5": "2b2Bm8Yo1jbQnQtpwcaTgC2gUNCfaagfekmwjgZTtkYg6aGSpxVeSWzymWV96t96VsJH6qThd1mxxVmw7dbnY1ab",
  "key6": "3PFcwd7gYv8eDQJQg2cdsPkZo9oPinjFSJd8SSJEMMFA4zJW2uWJLfLJYn1Pgp7o4QiThmLReuVjsp6oWiDaaqcJ",
  "key7": "4ik8Hef8cT5ZBgbtWvM4itQ91z6ygRqc5mKv3NwrNfVgN1JrGVaB8ts7EWCyqHFLrzK672YXsCBtn6h8iqqmLE8K",
  "key8": "vsc8cMiVTPkc8EZBPattvARsoNF1S1xubnWFEgpStxr2m1yRQNRsJtQmq6625kFUPKauetik5q71Q8F6VR44tiR",
  "key9": "2CdPsmpyEy5qrjSx75K33GVXdQXriyXojaXrq78YREsXgev5GtZMbVfERBLrQLdMcAmHuHemMJuvC2MLR2kkKwsR",
  "key10": "2eVQKSHhkQijXLBwmqNakJ6TNxAktdxHQi6V6QZZ5bcZ6q152krjfEQ5WriRWCSatkERy4rcrenHyma3pH9yzFcF",
  "key11": "bQ2Pho2BhCUNjkms5vmDz8NBDx3MwULFgfP2DwGssaBCRKEoRFzywzi567i8Zqh1wWvESQw8MGbREpuzZEWsQck",
  "key12": "yfcWhHrqJwyR42N26yiFf5SipePirABtrpiFSfkjXGFL2rWNsaCfqgxE7GhhuaXkAi6hBD4U7VzhPEuvp8k9wSW",
  "key13": "42zRfwzj76DGoijRajSXdFaXx3iGTqpDDM3jCNp5PGrwRyGDrqX31WpidgC2T7bJAUcTf8DswNxznq9s4quADodK",
  "key14": "2FvqMW183KLnaRxZata9ce6rMRyUvyCd22FCHMutTRzAk7goTAYQmZwZ91eX44UxJwJGW2BSDtkKJw92mFSPD4qQ",
  "key15": "28WvhzsVXfuYqHnHbFaoFWzrmhjRGuSibQXobkxABypTfjXVNfTSpVEqWuLG7BHBs6Q2Db3KWYRdBP2osE3Jad6e",
  "key16": "44X4T5VZ1KEvV755LTepU1DWfynq2haiunivPL8cqdEM2K2UZbGHyuX2WPSJLF5yPmtNAyTVCP6hvvzxADpDURSi",
  "key17": "41iSnMxJPACj5v3L82AynxEyfXAAxYMM94HuP7cmM9sgjiu9YyN4GAnP9UoruNpoYgY8hEDX7mmhvwrdNrqdjJ25",
  "key18": "51xxsyYkEhQMmoHTDDwCn2ptTQSfzeNXyW3RKq35kidf6vCUhWJ5Q4g3m7Gdezksp1ipyQ25q6PrsMw2hozpVDBR",
  "key19": "3qdV4PVtmgSzUUTkCxBChjnXVAqxWonkKfpibe89Uxr41NcA9y4BbCxgwATEjCrETS11qS7QZPv9ycX6h33yPPR7",
  "key20": "5g1XyjdR72giPSQaRGEERMbdQmzm1qLk75Ey1jFZ2nLn9Uc8SKq9uN19RxKYLCifHjjQp5f3v2rFrf8eyjyGShsP",
  "key21": "4NkcWhqNwvQsRba36JQX5mJRuCMfvgqLjTE3DzYPUyE6Qk79Mbq5gPujs1ZdWjyJZsGUhmAmQPfwUaYUcrSALma6",
  "key22": "434D8DijJzAXwhse9qYVVRuvHZmnKsQ3srfTXkXUgf9E8Yb5HZFvhGdELLjgzRvyLXwg4N6k25KNnvNFwV4TdA3T",
  "key23": "2fM6EBK64KeQKv2ndg7i4Yx21bFt2yZzS1W34UHDugSuEpKfFgoy6mgbtV5wowWJebi3SXiBcLvfzSZyvXDT4yVw",
  "key24": "35h7RMFYbhkd1FL2pnWXobYn4fc8N1SqaPeuGACuM7nyu7x4fzjpDgEXpYufaRwtATs9hc92fTPdx4zFEKdLASeD",
  "key25": "5XXDqtC7wxuSrGgRHQ3xrCbHpF77PZ8Mmpd9mWDADFsdAAYJatywgfdhPWUkmbKzAjo8SfN5YF5tcjUNbditN3Hz",
  "key26": "2ScaatVgoHGgrYgotpU6RjL14QCFb9rKoSfZUyqvTYJ4389R9uSB7Gxi7vh1HLW7QHpt1psNeob25FADN9u21qMe",
  "key27": "WRnX4qFZ4twusnhDkhV6GrCTfpYCU4ihu9uYBPowReowCNXYb4cZw7psiK389pcrr9hTLBgE2tpXc1xz2uAbt6e",
  "key28": "32isf7yQyh8cTvjRFvsugHWah7vNPqrb6za7pTCM1L2daTkiegM7EFhjuKAbnYUa92cPD1ZiTbThqkvWk89VPyHH",
  "key29": "2FMdf84gaQhxChLcfcZSoqmoYUxg4Nsn7aDfpna7sEuhcsweH59rSLMZPy49qBu5G4aNrXnXv858r3cfY2hoseA5",
  "key30": "3d2kATixnEzyA3r95eMLBpJZNLDGDpf3x4oKLk9Ue4ctCye3bs6rnWGyoifS9udsJa9QpzLH1szNKiypaP5EHC7v",
  "key31": "3DUH2NXmH26iLG6NQCFjPGXz38PtseGJYFB6wPcM5CHT52v4z47voLEt5rQy1Fos8YhG9EnUH9gFmuy8ze1HmnkV",
  "key32": "5D9W1wLC3bGFz3uDv1KyJuN91jiFdCub4GiaUWww177S7XEMdTzQFCZJzdAkQyhMyqrsLSEUMPi1ARiHLArXs3qK",
  "key33": "473nuZhW4UPsSjkKehgtdmNZoLF6fumLwn53PouVw6QN8wysMaPZe3WT3i18XBKzQ5brB83RrbaDK731P9RBBp5o",
  "key34": "5r6dbA7B1qGKoHGaRhQ96AkoU744CTjAEoPQjGCpWQT44TFh4xuKEf5wsKeoAxRfuUvVJN6Qaka8BRa3ivCSevR7",
  "key35": "5CFjmMFhZMakYezV4kGSQLgBW6VASot35RPg8RX3L4oAPM5QWS1TvuY6a4foNAZZ2coWeiiVtWMcfWRd77CfP671",
  "key36": "5s72bS4wczBVuggovDF7XV9kgnsRSEX5UdxzVJy8TycA9ePDn1J3qhCcfc6GwPCykceRy8Lf6aJuvd35zmfd9Bk9",
  "key37": "2TawHjfQwvsSyp1JRMYoG5rvE6E3tcN5eX19skSsHFLx312eEppQoU3bW6ezZsEhCLjv9Y2H6goc7jtc4AzxVN5K",
  "key38": "k9P3i9KzYz7YZ2eCGdcS2JrJtxgMXAYS6M9efdQfcRbyigehzZympXMHrrRLCvbcaeWEZMxSLLgA4RJQTn9EqTC",
  "key39": "3jWagMdmAxjQH19KjmsBxzKWpMhGKXpc277YnAsacTvXLT3jzLcjmgmutFhzoefj7ex7brq3sqhtiPu6VouzAifH",
  "key40": "2xKaEb5ZfVLoqQstJaABhi3f7dxfP4S9dRCkYibjnsf5qaNcKEMGZdbBHRms1a5oa7G5aBPHMvpUjMrpFAvjegZe",
  "key41": "34vw5QqpC74JmxdWLK5M7GdoAKrASaYWQikosGrWGUTRZZYQTKNaTSUkjNoMcPY635RjQt27yP4Gmq3htjiJh7sM",
  "key42": "3dvacaZNjeJwtZhLM2mhoyZpekTeJt5KY2ea4inDKha2j1uLPWYSg5UE3JeNCYkrqdQ6JMWK2WdFBUAEst37JeMz",
  "key43": "2qrNuW6tXvJARoiQyULiHTsuYJtM3ZZf4pz4mHztCjBb8MWoaf7pByz75ZB15xKLrozQuvcKUhZ3FHrJ4MvHdTqU",
  "key44": "5vJGNbz16RX6Hr1Arixss5C8FmpimfsVCjkFLuNQba5X6uu2qxrqUAEseQYZGtEhuCWEaQ7Akay5ntLZxcsWgRym",
  "key45": "5sobtwucKzh8KHrHT8VNmerd4fbBLHziSFUjEJiiqa47PRdJSBeeabxvophGnYPEYmB8HGT2Rnv6Qpof9g51vHMD"
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
