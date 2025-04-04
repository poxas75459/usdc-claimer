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
    "4SCpv969q97TmeZpJfcw26eXevbHxsEc6qnnxTzfC21e4KQiJAzvjU1VHFhxVEk83yg5uatVWJY6Hhsp4prrpXff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iGXfDMTeNVpCFhpA1XgZif3Hega811cvnW2DakKvj89AfG5kxp6HtKrFa9K7uWfptcGiCotvPnMPpzEJ4iseEsy",
  "key1": "sZtXJia667zfCiScoMt55hzboWnSRTBjTJ7NLT2oR8NHbpbyvhLULUCxn5JPYA5EH5ZpKqP48tR9i4ZND8eNPM5",
  "key2": "3Jr9DHzp2StXczJSH8HsqTi3vTCMFEfiMf8bmNGZ1HnuLD14yhcKo8HHzBevUqZu7xzgZNUKcwbQnaQ9as1stYFY",
  "key3": "2mcWaoCu1YsLbipLsh5KWYv8DJSpFnxjmgkjg1P1oRtwAr2QuDh7iK4ipKuNGptY78XZvPDytFp1adB7yuxcRRZN",
  "key4": "2u2uKy3gLJP5HhE2hZJoYh9untNmmhe3XVgi6uvanuokBeoadowAxcdqNBjZMf77yL4uZwa3Fkg91W6GS4M2S6WP",
  "key5": "4dFuWfNsSSCcGYXCfvGmjiyXwmjfj5DqZwMzmVRVwhGhDeRs7Jgiy48s5ZsFQ2wRyjNciFSvpPZkztbcCGxzvcNu",
  "key6": "3ZVXdakeXTeLYEFugDZH15GYgDQBHaxUzo2QBx3WV1EPBp44wXh4jBWZygq5jwvXdV1ZBMm25RCzDhmp6o26zYS6",
  "key7": "4ukcjMxoBX9eDQYo5niZpzhRzZERx9Y9tiv6CWGz372kN6BU6hAk74byoLRnvZc8AyJUd96WritKvNy6FgD6XhcH",
  "key8": "39fHJKqySJ61d9DXqK4Ua4yJrsceHPk2SfkuTttuyJogfm2Pe5YoZRESswwie8BCF7cMqWC3U1gH24TPjLWhcu1P",
  "key9": "fxvdU3yxG9neo9wVxW7WtPKTwELwyY8GuyEfrkjEVGW7y7KfYNCgUMycTDp8NT6pD7VLr8ZZ67hiRUcWPzSSdcs",
  "key10": "5Gt8tAFqXhrZErtehA3qZ1Swgtb6PTz2ZJt1JTQRJDzEC4dbnHCHQqFwDECN7KyJWZj9GmbnmYDrsw38SfEPBPxE",
  "key11": "3XktK7k9kNRYeF7Ah6zKbmewHsaJxgNSbacvsZqhjVfnga7xu12RJpYWVoTXWrVovo7wyVJHhxRhbvKEGiEfiDiR",
  "key12": "3iMkwWHdwjJLcj6aEx9Vu9R6N3E4Gmp5FnZ9aTz1EXAXQmyATswRqjqQy4yR9rMCxK2bHrKXw5SGEBgpF9QybQbs",
  "key13": "3BFSf9zPkhUtjNpiVgJaxYrK1sP9pZ4xEzeuzDaWixVKh33SGgium8jh8e5BdVYYaUVTv7czteoA1S2TTXfiJPbw",
  "key14": "2h1BQEBbXfp5PAXHLeayXHPZwNSk2kCZsM7dyvMkFN5Fsx8AC85Y4EahHVSFY6jtDNCbsftLF9oNSsFPFEKjoPy",
  "key15": "jxwF315XN4SYJ4VCQekvcxA4jUk4JMa66sqaauGyB4eadpfvecuLdYds8MRivXYuN2S1hwaVn3fNjBdBV1xzE3z",
  "key16": "jf99EgiHecHpWe1iywcoVkazHHECtZZTNtKiFodLTpm2hPnQDqrCCfWsbYxGwoTAadDzQbLu3uoDjjAnFb1ht34",
  "key17": "5MoAbecHurqX9sAQsC2YdocDansjbtxA9gDFX3L34XXgMvAj674H3uw816HR1SjptDRjJkkeuJoVCPkKCW6szPFg",
  "key18": "4R1XznroK3HZXfWX2CscEaKc9HE6Fqr6fCaLDTdn2DEtwGM59F3TKCoJ1NwcYmuPVL5kc7QVofzUvihKZ54b5Qm2",
  "key19": "khRr2QVBfYkx5UAt8qsCwBq5bK5DfrtQzFH44SALguaxWENugjHuyVaDedHRvSa4dac6Z76AAYac39L6dr7CZFr",
  "key20": "3jWJng1jHn5QPSLuzfUkrqE9stfxcyf2mtRSAYkBF1KFiiNtnXyCZEmKQkn36rmZ25DrGDrZFjDM5DvLVqtXJKyJ",
  "key21": "2KZ4hRopZRiHcEQZDFDoDvGzxZFWqQYkZhvYUqsFt5TQu5x3Abzu7hMn3sXjNzNQJR3GVHbJ5orcHrPK6LmxCzPJ",
  "key22": "4hNab7hV6TKDMwQP9FzY87MeKw64yshEkEu1qfmxcn7PHF35nUSfiFVD62S1LrD7P9Ysifiv6cR4JydgBTWJBdqK",
  "key23": "5nLHRNDRkMeABggBe9dcjRgD85S4p42JYtjdutkUEtpbAyMxfPy3KtLaMhhwRBpY8kLdb2tXsiDkyHTZ3GNuwSWq",
  "key24": "5MAwJcuLn1BRB6cCwbxnjvGEYDgbTgnNdtoYn4Sgt161kKGX9ATVETeRfdZYJcoK8dhfJnCDZw28Dkn6Ex6WNNXU",
  "key25": "3jxDPRc2dby3asVZnKQ6vjDjezMmYWLvPG4SAD3om9XLh7iTfDwGAwmsPH1hhgSVxB8brHfGibDY7Rz7SqtQn9uR",
  "key26": "5WhmvCJUCsHvPdrZ7bLjYtRai9cohdGqNN4ycrcmsc1rXY98C4N1bZ5uNEYPkhpqgyvYa3JNtSczg7fYMWZ4ENdn",
  "key27": "5KukFb4qV7273wKazsR3eZtuyWzADfUiLMjkc5evue2kLhS7FHqPi7MeKK1mmCvanu5MLSakyupELr3MtjzY9xoD",
  "key28": "5Gzd5AJYujr4hpXfewsB5UGNXE9nDqHu4PkNHw6Ca464NknVK5yRtUPcFVGRuwTtYAY4PLUyb1Qcyg83aUTPFkZ7",
  "key29": "YAxmEpWZwBEhQzzBfiTv89P1fufzA3XMtgykSRBeTKxdayDHrDto4hfQAV86DFL5AQdVBfhqMsqRJJdCYNEnBrg",
  "key30": "5TknqzAbhr3wiyoevcacPmBeXwoJY1kfSKWNW49UrVvLQxyiidDHRuhpz8x7ZMVioKAvKXK7gEbN3vnpXjED3Nbc",
  "key31": "35KPNvw8aEb4UhwTN9AfhMJMCXMBEq1ePuPe2cRXhWeaMvERF3wQ5GZ7DJJKcxUiJkivYid1i7NpCyeqPpPQXHEN",
  "key32": "48CYhPAf1THSUJCSReHUUjUC6VEsFdpELg3V8HBoR84qEgFvrvuZgfXTJ9Nk3B3d1ZgAY9vJCvS5GropABasEaft",
  "key33": "4CG22UThrm1HGnACdEwpwsD7aCzepB45N8oGwKXtdDARtPwLKHP35n42NcJP5L8nS3vtHkqfhokg8XdBvr7ccpx5",
  "key34": "47DuyHEamTMhFXoXMccsCwqZPhauMtbVEyzES17JZ3W7oscmY2mySMrT9zxYjqeKBzHpT1BNUaCYnWdfPaTTHmop",
  "key35": "4c7hMWhkudrJYtfe7gWmjwUid4PcneS6VCYQZKa5U349AJ1tNbvZnXy3Y1Ke6DpzUt8JTdxyb8zk8E3D39h8yNzc",
  "key36": "4wAEjLzCaY8Y8MS8TX2STGEs9EmVEWWPUjeLngi8bkmtAi7mBARzyRAge65cyfdSwcmhsYFUb4J1SQki4B6iKMvQ",
  "key37": "4DTL3XRtGu5HrnvjQrwYGTssh6mAK3NAmKPraJtWZfew8GHQG5q9tR31wY7u9PayzPGSUTxXo7K3fdTb53rhU8e4",
  "key38": "22r4ezxNkN5Dp8d2gmLKKnpJUqeh9Y27nQzVV3RHoqAvsjYkLnvnBcpdARgvBwMaQ3p7h3YkAezVPVKG9NbjVPbG",
  "key39": "21teVsosYq2kGgzTJwRvFVVjL4a4TNMrTu7B6YQQYMNBqtPFoXNHbWqamfxczu1E6S8EvFVWuh5YpphyByXwZpjf",
  "key40": "3xRSJYA7vozHg2Avhtyu9FRQk8AqARvX6PAPhzqtsEYxtWEmihDxyX6wRw7hQQaaV6g8k8cBJmbBZ2FBvuzoo6gy",
  "key41": "52zwmPabwnYDiHDuXcmwSHrXWsbY1Sxx7XSNhKWFUJoYWMnNS1Gyyj2wckJseWgTzDyFJH7zKHT3tjQKiH2iuGxE"
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
