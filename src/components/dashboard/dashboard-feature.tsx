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
    "3YNEDtaYkZD8cgFyxDXsPjSc6CAscCZGLG2KBe2r2aukkCv3kHAa4n84tMiCsgrNp3Fw3iTGGgUa6bPV1FcVzPc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LAsyABXLW9XVfMTt5ZmjqjUmo8YHcjhBMCr1c76MFKiaguzrLQfFUgUmNFugxZEvg7nLR3LNVraScrYYvTu6iCV",
  "key1": "2TA4uHRoimEbM347LcU9EZg9iQ1Mr425F6TgovjTsGdUni4hkaCftDhpYuLnphdErbAehrgPyLEuB9cTn95MpXJD",
  "key2": "2Hy83n9hPLPqGwauKLmphcbJo9hm18Hce1WH5DFgfdxdnCCLqSuZCyGHSCr95hoP87fs6iMraxpbpvk2gQCr9s5H",
  "key3": "4PTMcWpsehbd9351zom3jpjfks4Ug1pYvYRiLkikmaNobLEWAyhmnv6mkVYXHqnfcV8CC8voteSfcnfx95d4XZfU",
  "key4": "29Um6ezsCbUWtumcQJArEyFvzGibNpVS4e45yeKfq1KBjnVB8Ga5WjNuM7PqN4qh9ezCXsKEZLtxcSHZcJHhNbXK",
  "key5": "4qBqpZJs9sLtxVj2EQypCuwFU916JRzUYJqTSejSxieTB7oRHW18YGfPQnjipiq4GJY4DLuJPPiH94TWvkscfnaS",
  "key6": "3CfWz7BreH9BZKP8LLKaVUMwjBUrQd7mkK8yMjASpKfyCwMD54C576uLe8zkgbk4auRUfHS5pcjaLFu15975LTcX",
  "key7": "vAtuY5pu1AViQkECcFDw5DU18EfDNn8d2YrgeLz1cTJR1xANCEbmtUqnRi3gHTHbJfnRhKBLXCLmkAgk9eyEq33",
  "key8": "4KjQMhfvPqeoLTV9DNFrJQSNzJQRTmsNtaaPkjPjxvypQbjsbUpenFT71K5jcka8LNHincukovszgTvmGz2Rbyf6",
  "key9": "296HyyknTrEdQcCtrCbvLcMnMHXZNwvrJTYHZq2mLKCEwSnZy8YVYbhm9NWPGZa8dKijMSpr3crdBmRf5QhQtaqi",
  "key10": "54GL82T5ssqsf8EBsr14yB3zAa62DZBv6G4fB95dzrK86QKhJFHV2G7z2WSkcHjp52RJy5sZgA2Dn9xQXciGxDwn",
  "key11": "5NsE1Pg5DgBZqynxDg9cquXDDP3uGUuiqb2miiuR4YPk8DHBKBforUXSdvFoirWZcCpTzrijb25bMAGHQ7rZHiFE",
  "key12": "3g2a7LRK9bzS25CFkTWWDQmSbJoJxYMNS7winoSFyfRGffByd9Xhfsdr8rxPwajvq16BX4M2RFcNCR9wx6xp7MEx",
  "key13": "4FszaM65oLBctG9WkMBgbUPHH7YqSyjkK2oxMGxcnHWPW2eTnLixbnqU9gLamGSbRFfeRBNxd7p4M5QHfe5rU23H",
  "key14": "dcRN3rqkUubG5Ehief4ad27NdwLyGvq41t5EfcoNJ9wiB92QYVHrd2ftDBKxcEztKPgnHpEX6y8dM32TRDDTaaz",
  "key15": "ymtB36k7FGdwpzG2spXRKiNXbhfgKF3SNzzyGnUztdgwQZ2wLzPeTp86UQWFY8X7osDZVqrzoNWTQK6Y5BXMwKf",
  "key16": "z1q27ixV4SHcHjaL3gX7BDANn44EVovVe8b1giKppty8wdzzwDKt3EN3b6CmWJP7K3i3JWHN3DXPRgsew27kXER",
  "key17": "4Cc4EDBu8d1eMdHrgQ6QAkYf95scGYiCVdMQr3p43aHSmviWRKQxC66WmnyyDi88MyQ6TXRz1FW9yMHGB24xPt4Z",
  "key18": "27EesGeu6ptPVfP398KFQDQivyY85aqq56PjPMocZ6MEM1RgwGkhPZRy1L3WDG3YSyBfm6RHR1JBGHzbuLdfyqMv",
  "key19": "5QgjSZkRg1BSk3L4MqjLyzdDLcuWz33Q1eJnsocPEnjdAPxxR5pMMu8HUFMf4LX5BkVdPwqUAKdWgAh1dQLYuy3V",
  "key20": "4WUUjahMqSyxrTLgjdH9KQkxdxbf8sheXDpwncmLok3xnxzP4B24EKnRLZgPELnPz92LAThn34YkdYSf8iRviY2Q",
  "key21": "q7wDHS7NFhSHruHgo36tudjEc9SCTiYCBp8CsE38psQf6QzrjCJM8hYXMX7zY9ytnzGDcrmxPyeitUY1VFYpvYT",
  "key22": "2a6dk31rtHmVwrcr5YQvtNadUFuwMmSpXeAWoPEUpbLKYZeTJcdN3XBrU7M3kAwcATHMadf6DePLFZamBPUgzC1W",
  "key23": "3gLFzTernEbVw9EfPZS8JysrVBRjPGduk2r88LQxayMdqfeKPZDBUnpKJWNCTofkpUpSvzYG8k9ogaFwggMfRHS2",
  "key24": "JpbiKB9A4TF5gMqBMUz3fQ5zMvApwgziHniSnPLsxmMc1AVCjvBtRCMHCKi8hyudiYQet4F5M7RjANEUmsBh3aG",
  "key25": "2wbn6Ssce4WG29mFnqcbUYRroW2bGP1ZfqrEu2Lfq6Bqv3NMbaELcjqKRqUdxY4ecbEGMXGGFxbEe1cHg7tDYURA",
  "key26": "zsTggGJtjpNmABA4N4p1mPQ21BpbjMsgEQAGvAwESKKUyTYVUSroeqCjgfHXhUX8M577eZXkeLpDCwsbetw1Ebv",
  "key27": "5hXfuPWUS2PuLGMi37t47uPkA9DpRFpSv3R45WDBqtqzmBBbJjEzDhZKaWwv4vjaSKHjQbSTR7AfFBLCLdFCbbmR",
  "key28": "9fJGEZy9XS74MHZwYBBRca6K1yv1GWSYXt613tWgpske9SbmRuu6VJhhtebBHBtyxgkC4Zn1W1uMrYBtbCNuYrx",
  "key29": "2tj8uba3ZTuuDjgMkiTkdxXAryf4khEVjgxXSTczBViwsjNuPtzpcPAYreHguR9Hd7bNviaiVLRvfv1FacTvStUV",
  "key30": "33MPLCVXxp5a4wn1iHnktZZmzgKX4kyzRzXmmUKWmDKdu5MrUmd4RzshjiYxY9cvo2R95fmA12MQJdFUMGGmqWU6",
  "key31": "3azC1ggW4YcPxAKo9A8PcdjWdmwsCCFG1cPMwGZ7TCjUwXA7qd96LCeatcNm6J5bbnjiFjZcbqYvs23DFsgu8iST",
  "key32": "AMDRnxrnZYQrxyGMQNk3P3VNBALzvZWwJXdzsnwTz9ujRSrABXgZ5Arwsg6DuBAQf4sEWXp7sGyX8teCJmba4De",
  "key33": "4YrhzM1atsBtbXwXK9Zgsyp5if5m8ALMb6HuuqtvJkfifHS34KwbqbSj6EbU54kPnKsfaaY59WmFKRk6DYpuBtzH",
  "key34": "5DYgvXaNFzyJynCYoBhj7dwZsqCC9N5KYsPRLXozQmAKvaHLDv4TBXomg8BhA41eZcnC59eNQ49FpGRa9LyiqPCu",
  "key35": "59sLjNHjbbLREoKPGbZbDzUsM8XYCvxfGUXyJt1KLrf8RtwwUDd7PQy77ea8CAQsePHQvMrozz5zsjbcjnkLszfH",
  "key36": "5VEaSGReyjbCLNgMMPypdfxsRUtfswoQvkCezsBYFLPrvUJsfcPB9Li2pSWBeCo2e7rCgRzwyoNjxMmSwsrsR7C9",
  "key37": "2uKpKtw3nKR5UKu2wjd4dprwegb9MTBR3JRN4BMZPPjL12m3mmcy1v9j7ToW9TjQQtDmcSrd1aJ43FvAW2Ts6M5i",
  "key38": "2uqpGJpKbaRiLDNCyinNg2ZNLt2xf3m4dbanogdRdDj1qv9fEZ32rdnBGsmb2tUzbE7mP12BN2p5LZ7Xz59yS7n9",
  "key39": "53S2g8YMCAEUTchX4fcMp97QL4wSnfst2uonzWxbCLqywQe8HPECfKJibHNSADw44zu9Xx7CfZoNHmJ8jzKbepyQ",
  "key40": "2b8qWz25bzwwCjeboTpzkKoLq97vRtr92t5g72QFzuRDokn6Reav2Vi28x31nxNGuWh9fadnHVBo6hUeZzzLtKaR",
  "key41": "2HEj2WqMjd7xtnkw8KoWTh56NafW7BLiHFikrVkZW6CqC1CEC2Dzko5iMr85gPWVn7MBvSHZE4XkicBCoLizHyw2",
  "key42": "3c9Nn3xJNhnzk41hGnmNZiw5CTwN9XH5kft2dWrCThBf6TUUPf9QFiGkaufZdrWa2tYWU6LaTQpDdD8kCmnoD7NZ",
  "key43": "2Wt7AvmgM2LHHnn4Vq3anYQFVCukNTtH3ZPhxqqGk3XXFUjtLq4rwnoFqvB7nnd5m56San295mRPMJrgyGvh5aN8",
  "key44": "3PzDK1wfpDXYwBQox42uR7LKUSEdZwhDu43CkAxcCWf3eUKUnDiVK8YR43GLpjYTQVK4vkqBxQai8sLeuCtibXeP"
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
