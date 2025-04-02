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
    "3ftq2EcTwCtxzTgMJwr5qsPN1BCzzwZUJE76kk6YZgijHpk5qDEnACNxXYuv7G4tVPqVhaNqnYj42z5yaYLe9461"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ndpMN8PmVVnLdmFaUVxRgdLsAGBxRM3eCYi17qVmJhyB5P7xnc6teEjNDEgYa4ua1NfET5jGg9tJiMctvUdXCuW",
  "key1": "5hCMau9aeF4H6BA6rbwABVkjfQnmsU58N6T7J7MDAYSa6PCPFZLU2ocZHE2z8KgQSNhsm9UfVfzSpcAauuhLALpG",
  "key2": "3FYm8NSaZEjju6HSGSMQjBss2a4KMAPMKmVkPEjswrYg8cKWkWpMEruSUXjR5gDx6cfWerSLvcpAzohC8eVAywYK",
  "key3": "4G4Dg2Bk8CEBAscDUqY8BTt5Nae76eZjEyTihx6Se71nYPjPpTnQMqtucoogoPsxyjwoMTpTUnSPfjtDTEyACKMG",
  "key4": "2JpwH18Yz1mQutZqgqU8A1UupyirShBirB7aKtbtA3gfmu5WJSPvdPnfZQZv6uANT6FMQcRS6APpG71TbdZXymx5",
  "key5": "2voqTTk1ZEh1zFc1R4NqY1GdD2YmqwS7GE3NoDSeL83Je17iiFNUVtPaTGDDtfHhuVHVSps7G9KbYaohSAeSkQAC",
  "key6": "39v6rJcPL7oGPeUSbTyYC9zucemvXVvofFj9nLRBRX4ghQy6H5sNh7rroAQW2JFBovDXUMECms4GHCBMdY4aCAez",
  "key7": "4ge1A2fEgpehTxgtkLhGH3C4d6goB5Y4F4JH328DRun319zGCLr6ezpjgN4NEfsUna4gYzdqaUpRcr6Zxoh7np5k",
  "key8": "QFVwQAEEo8xSJsc1nbAfyVQwsUpcPrbJWyE2grRn6AryXq9ea78bFEF6L2LztzT7jtK4YLpoe64kLNucWqkM6S6",
  "key9": "4GjKrDajukUe8K2s3zDb3HXR3rM3gtCc4vfna3MWP9HcCm4ctV8yUyZTv4DS76i7X3bUjez1y9UnzmBrSFu3nU6Y",
  "key10": "qMrXEjg7uMypW8RsGdSW25pTuMw9M3j1jr2ZCxSJccNuxp48Ftym6gYDZYsKcrPiMSRJGc5xvWVKdJJHkTrNZGf",
  "key11": "B52YxPYnZNRaxUaf8g8qFcxXyo21BRzK4KHq3wKHSPHZDVyh1fxE3LbYn51ifXfaS49Z77JpjLZ9vpp14vdFeih",
  "key12": "3CMRN658wBWf2ACD8t59wP5HSYHBp2fbXggZBaeV4oiP3LuuptxMvcK1rvmRNjCPtQJdBT9cPHhnBEWXPvCC1NT8",
  "key13": "3jvPhdKwAnbMvrs9PMEX4emz8Aju2wdQsjVDW9yZ4gCBLAuN1ppVMWFCFtk3LeDd4N9nTawoT6zXa12PTCt7ykKS",
  "key14": "5neehm7jsirU9iGvLpbGWumSaSU942b5MBUXtLom2a3EwbYCFhectnucAtAmyeqvrdedyz8uZDsnJ2hLi3nE74LY",
  "key15": "5moWDX19wXNsYo7io9wQ5qU1Fa8qBVJki5CwDrJVNCY1XA3mKcj2B7sZsN4DGTZXbiKg1RkLtaZEfKaLBUgJzcoL",
  "key16": "2bGaAsbEycs1tnzoDpjTjjpDAgtFFgYRBxQY6noxbJXursZcpt4v9Db2DmnwzRUjyQDAEFv9zSLpPEWMgi5acvys",
  "key17": "4gynbbXt8Z1Kp1g1McqT52fvojBsn5ekNQd4KqxY8C4s1sQYXANWfoNsRKmBGc1wVz5cQFuazXzPrMcAwXnsTH3D",
  "key18": "Y11g29crSpHsrA3aDNcoXX713cbQaqGXzxCfBsPfsKuXrJ8BXChmvvzbwhXuaD3fzEvY3ieMzyS2BcopggZz3p9",
  "key19": "4afPZsmp6D8WAgquFGd6RrEonrDuQ4ueSG5cKpVFR76HoQrQrm9ehd5TqrNhbS2rbzw6uxnekRkzwu8oeoeLuv2K",
  "key20": "2cKoP2e34pYWVLTHcMiuiSYvsfYNnYu7ydsVdTDstLzAkoYWeTkkfPgJPvELSoFRZJAGvG8DeN4MYY8ewC1EDG71",
  "key21": "4sZxpUtRpoPfSBpTF6bo2VCxqeW3DdqrL7eroqxpH89fk5K1W2HyeKSqnxy5d1qEBAu4iTdPmTYvQqJwyH3ay52q",
  "key22": "5vn3kt62wXsLUGEp4WMijfMyDknNEWx2VQuvdC4aNP2Nqz4j7iqrtNcPjYwGEu8zyXrg4Xk68VDWACFahaM2RtEA",
  "key23": "3ZmxbsUrrEbKtbgD5XpjQaCUnPLAhrR2NPG7ud4yTgnP5YL9PkUYVxfUmywpnv6iit6HH2cmbzjKC8xkeEVnXTHk",
  "key24": "3aqRr2YK8dRKqtWLSSGkWXypuMht17CuHm1WzQZU5wkDk8JuweErPBZBdZzCKF6M93uPehHstGSfUF4nLbdx2kZY",
  "key25": "dVZ8bCRngTdDcuQjr69sf192jc3uYC2qWS5Kshuu897gU5cSMKAqHywbV8r75ixNR3YvLQvDAHb3mG7ceECgZL2",
  "key26": "rC9b3A1BoCMfyxFKufCBZjqwMJbKwAjEtbbfEEWHQKw53ExjbisRbCt3ozRLShouKpdA8MyXsd8buBerrvetYJd",
  "key27": "4NH1EaQDT9KknNun4N6DCriAvDcU9MpeCVjX4ubhS6ykfGJymCwpR1h47sBzsHLswbATezMCS2FpogADVrbvh66f",
  "key28": "48X9uDF7VqBZjEohVZFVHbiUfLHKqxtwakD4efyPbQbqBTYjrpgMUcYQfZu52nemDhZHxombHqNLKFwpdJFAo1n7",
  "key29": "3w6A3ttZ8YaTMTGmnpdDHTuD1AWgVDqsPnRPhp6AFwpaRrcmWsgHrXC3xnppZQnKjZbNaG9A8YfU8XwTpSuUh37y",
  "key30": "4j7CPiZu7WuYdrMYBXfTCRYmxtzBziP3rVQVKMSYNWQ2QyWuGRr7CX3WFSTSw3ghAP4xds5QqS1VygPGSFbkY6rT",
  "key31": "44gf7xyvM1ArVYKfPDvJB8Mg6KsPYkACw8wACqsmQtjdNCLS8EXtVZZVmSwLbZP5w4KLeRrmNVE6T6t4YM6tERUN",
  "key32": "299nrs2Uji56pdRTL2VQyMz29PFtksZJ1yX8X5FpxL13WSWCvoxDXkFJxpCwbW1FgynmpqXNiuM89HqFZ6qcVXYc",
  "key33": "3npkPYS5eMJH8pQDwhWQBWwH3kPXzbSDa5Az9A14143TU6EytBj5xShUZ35j8FJ86dYmEVoKbzyFtaHEWNAf2ePs",
  "key34": "3GJGDy3gDYxe7cVdLZcaSor2C2YMTAXV9xkB6V2nvPjtVoE5pzhk4Dwbt7bayngPwydz3fyVwZvMsfEyU3iMusoE",
  "key35": "53uutRUtrRK3S9Xff88Mf7TNaNZsdEPGuumo2eF93E2ybsATMc3ukP1fjgVr1GejzyE73t3jGY9ht3Pt5KcjBW71",
  "key36": "5S5gGHxXohiMrYhKBZnj2Nibr4B24fVJNBXcTpSt5uwXuBvutAB5Cm4RuiCHaocWeFkcLxq6HdQ9PhxhdhhHHjyf",
  "key37": "24N8RFj39Evn7JdsEy4D1deDwxhhcbu2jW6yZZoFGvGuQ3iMDtuhjHZ1BetDSD4fUM6MobNgmTA58vmgP2EC9PfZ",
  "key38": "22GDev1DrxnqnQxzAPL6ixV1rLT5J1TQH1x3bpbMsuumcVXWBTorf8BQQJ7XTzJ3Au6pynhthx1myDxw3p216Dna",
  "key39": "b6uE9pMSyfCycpNuATr2AKcxf1uuY7FidfoqEQZSXBs5PYRwAbrjFE6T7BXc2zwiNwn7hoe9hwgR3S5Zc3pf1bV",
  "key40": "5xPBvS7A7AMdm2jebm38Wzc1SSn5x1fQKVy7L2EN7dKCuRLCJ7BJm87SZqJ7VFfGVY8KPv2p7F8DDrd9h2BVs7Mk",
  "key41": "cgNiLiASWVegSaBQWGsPuBodVB8g9EGnJpv3TndDTTc48enErdw3QvBLZEK3LV8CSfM6ptpgFgTVV3919gge23b",
  "key42": "4T57bJ1VRzMbc8DFtmL14dBBb3Cb2nhzbDYq22R3TmcAuRqvt4X17y8NaPincdjequYG3ncNmTbGrStBGMbg6t3B",
  "key43": "4xvA7goJW2mo2QG1gS1z7LwPeAgszbzp1eaiockUrewsy9UtMyE4pxvMtwe1BvaVCyZ1Afp2ubpQ8MYYdLAc4REU",
  "key44": "2A3K4p4svN7KuhhCtTbp2JNB5C2fwhjiZhivVeK6oCPB69DKovr8HLVPxZgmzJXRiyQP6K2d9sPMbLq2Zgkg9Mxn",
  "key45": "2EgxNumvJt31n2ybhFmVecwG4uBAzu5RMyiEDoPSn6rKKLzx1WCk8L62tHeLTkTx5msqaKVwSXRQUEMr3LQiXv6A",
  "key46": "2vZPeXRwhEVPBAtkTSgmEqDnEMmWjH7eVssZ9rxPAxE84Y54R5WkVbRr8ZqgGTQ2X1VpHHZEhnZD3kywJNJeLBrR",
  "key47": "2S6m95eywL6M5vU3hucaoNZ3rhFLVmXzAxi2QVGqkkD6dQiaxcd9k7iUJReGhJ3LNvrN6SM7KFvHNsdwL2K65Me7"
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
