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
    "WWRU241so1YBCfwADdWbMyNseHuRdopiYGmCiuzenvacaFGt8XgcUo9GoqVo2HCYXR4eJbpxvTbaX8Rv32UjJTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YeVd5R1zGsbRgY6BpmPpBZTk1Mn4htGwtVD8mdfFE9X5iBuoEPXkMn38135GGgiEErsV9Ah1mjS7GnsWrpbrnJo",
  "key1": "3HHLFpxNmYMcgPMSmC4fuJ4hxex6phqNRXvCBtkwEAE4ZyZtNsUT1JmkMHKceUvgKHG7XTx9PrBuwK1KpkvkV96f",
  "key2": "5eCbMFC4Ese9A8Xfqk6sCQ9rfweEmwdBhJzhwF1YgQ4PneCLBPWF4UXPGaHKjrRD8XPCJcYwvoLYTAJGvhRABFW6",
  "key3": "55dcvBMUtWm6PGcw2y3bdiSXkwPWwbge4c2aR5ar1tY3skFYtHzt9ky9Vgn6cMB4VRbkkUZUk6eBQWEhvZ7kScD8",
  "key4": "5vZmLaotX5AHSX1ZNMH4PXxKnngKuLR9tpy2KteA2aLiFN51yZAyANKHkaazm4njdV4YVigPoLZMmWEdWaBUbD8U",
  "key5": "43hh2cw2s1KAVRSssDe8jDa9ia6F4Gq37GP9m7ShdtxCp4ApksC4cQWActMmrx9T8bhxhwvCVvZGbmMwf6wYUaoz",
  "key6": "gDgwcMtsQeVSJhwtdbXo6wzsVjgp7ixmF1wFeQD6vFpEhDJPpumNJ9HkiX9zN8AbH5bwee2bcyUx8eAbEdTtw1D",
  "key7": "VnSYRSeNztDej63WTKR9zgCKxXhchqr6adsjZRsVELf4R6YaCxam3QbpAnhQK22x9jjh7ndKdQLsvzuSsGyMmae",
  "key8": "4u76TNBRXnVxTz61qjdL33EgkDb6hft2HWDwdW6KAoih8aP9JdzBbnurkQN3Z2wEqAVngYdbhJbWyFjFyiFkzwc3",
  "key9": "52oKYrXiJffsvkQccSYrn9zb1rzfiQSCZYepfpxHqtqCAFPvPvygY48soLYvP6QciHwPkvDqsRCvEEk7xwKtGTJx",
  "key10": "3SYUcHEBELjRjs7SMKMy3pn3cLFu2tJk8Jpb7dU84vJGnDVPSf1jJEjZsnVVeDqwKcFJUCgvqBqtzjBA2WXVW1co",
  "key11": "67A3nQuPPMp3xb43WuYM9NxNTRZNkPhLDmBhnBpgjWakr37UQQGn4yoSK6L1QQARZ9syyFpVvo4vxqkB5CVjfYsn",
  "key12": "4xi2wfYCzhLPJFadNDvUsMjgzjDW4eZwsKzvTfD79C3HE7v2ZQVK8EcLGTMwAPo7SBZjxBZdHU2SHk2NfR2p5ao7",
  "key13": "3giZ8zXFvAmVVgDyYGo7Gs2ZuVoTF5M7u1MvR5t2LBkYaswoctVfSJtpkN4WZuL5bGLzePF5faEqzrdsbAyhpyPS",
  "key14": "3pjKiAuTRh5GcqLw9S9kNEnNgMvSHKT65gMhFwPFzQW9TCDQR6SJCkgZ87bho2oULnyo4UNpEC3wRAXZTdopFGSJ",
  "key15": "5aPLCWELnUFBhMpw9vXGeSowYYYEwnC6ku9s6CHdeAczBrCvEjqGUfGghBPHCkvzSXXeRLN4jDDiuVN2RnFFuwkF",
  "key16": "5yrR9e9YxnR3uhDPUsacxHbFSYkGjiPP9EwitEfafcuB5geWqqRd8UdyLMRxZEdkU2aHMytXToWL4WE1pGst7H3F",
  "key17": "46QVqGhyWG41KGq7pLiwuSV8MsB8e4ZjqPxwD7zTrTJtQif8WbwSiUiV2UpatTwyhAL5CZSskL2VQtSt5DgucfyA",
  "key18": "5M9UnWE1j63towwLvNf3axxfxTvJBx2dzi9UsJxz9Bip2LYJNxtWjQGR91EtbH8YjmE9g4gx7PNjFr4a38z88NkN",
  "key19": "5Zt8NubuYYvEgspvQM6dXpWmR7UmUzoFUg8QeV7gkWMaypRruSmCPLWmPqDxHLhVyHJHUgVAbijPPGPT3cpwPhUU",
  "key20": "26QGZy4WBToAzbPZXMsx9JcnCpNNQbpNoL38ZaX5q6xwzNsHPmpH6kpw9jQmo5V5k9RJaFdpxXbpKLhMRNSEB9A1",
  "key21": "2AgGkVGEqUhx7XLzMBsgnyxTsQacMG66hzAW6sf3qDmbQjo8JJszAmyXLsLhQRKU5PaFYebfy45fH4fe1pXnzEA6",
  "key22": "5AgNUykUjrAgD58y3hdZCYHdB7CeqJo7V91PYz5rugmkaQj4XmvuF12NXU5RoMSBgXesWXzTZq25TZFZLXuNXFXm",
  "key23": "rhpvVxAg3gzpYju7dTzfgh5RvhxCRZKZZN8fuzyr6yeHVTorzbJZsygMc4Qb9QJq4NW7xgChZ1j7agMA4RgRKpV",
  "key24": "341YGj1qzUe3FiF8u75ZNgPbmRkapdSoSfxj6LVvdvUqdXdGR4awgHocLsWzjcC6AzTV57nj1LntvAhnRgJkcBE1",
  "key25": "3uvDzgJuJs1qSiArrZUQjhTuufdEkdw8MvuwxRmUM6BNwhGMkV6FSVDN5wad2RJaX9MWwFstnyihGripcbKt3AYg",
  "key26": "3feDTcc4at6Z6DQ553vPFkPQUSTrZ36SRBLvNnQPfSfK628rAq9zos4uv5uFndAcFWRYUJbEEB7rDe1F8B5NbKNp",
  "key27": "42W4x53zUWZ3pFPp7C7Wcn2twchkfKWoR4aEh4BViBxmDGNmepsmN6vWNwu8YB9Ke1GVrNnjWUtECKn6XDhGYB6X",
  "key28": "3SKfew1erCF8crPdR5hdit4Xqa5GmQiEDAEhMYj4LELZV34gSW1rChTt8U1QY29HDxwYxszuJNvRAiY2skRa9uwJ",
  "key29": "3CfEWFNkr8D3da9tFx4Aw6hSYiQGyPhx1qNTjYoDpGBSYiYikZhUFEVevJ3KwnTrsG6dgNvUejFU7BAr3QXr6E8C",
  "key30": "3sx1eSP1rsrokB16Cv57Dx2jJiMGqEKk2GJ8ReKANhbDkWcqnw6aFReFjS6fRxc9aYex6NTGozGV2E6tEyLpgnKe",
  "key31": "cNeGRhMk1Ta6TfWtcs7sKqdCYzyQdHEYEdGHL37UFEyNxKrZ3uH1VdFhgsNiWNU431ur6LV8vyxUpCu8DfwHJDa",
  "key32": "368VW2ntMKdPMpVV1fPx88WZsAAMXPSshaTy7D1NYLPoY96BGktcxbMZBeVFfgap45oPU1bohiGH142mN2q3kE7S",
  "key33": "4bJVDtdftMGBtsHmD28VguEzdN8WYnEvZKSZZ1cddyJrrheXgdme85mr9L8sFdYy6XHHndrCwnzDwsiopYxw2xZ5",
  "key34": "pxMczMAQFrvwTE7kGVHR26zuozHki5wAXHS6UQ8nBtCVQc4QAJMDDRjQccW91FDqL6ukLjxqy1Vt69p8fD65YWs",
  "key35": "5TfQw9gEyuXqcxy2daZweSYYEvZbAxxWg2nVYhe44rXYAqJSnBMXjsSBdQEDdcRYoiapbrMwgGeN1d8qPAPE7Nmz",
  "key36": "3Rs6sw8AHL8FHo9ZJZeVcnaaoLH8b2yXcst9fNZFAfXGfD427MM56BMdn8XJnCTToS9DrpN6gP4izd3nUVHmcUQW",
  "key37": "GhSh6vbS2pNSfpbenGS8MScdPFzppTBMSdwkJVxiZz8VYWK58MBo6QowsB5y7qBJqRKZrJADgVUdX2tFH57yw6n",
  "key38": "2CXQKKrW1MfXr2zpyWBswNQpukQXp5kAK68HJgyjZGh5YjwX4QucePzatt14NzTE2UqbvAi1sup16S7pVswJaZiv",
  "key39": "5aSaMmvEtXtMZnQa4FEQ26uTj9HbrTt71JNM26AGG5dhBZGBJnJV1xkD7vnQj4ivkSqvxYrNnutQEmjso6jFTnvz",
  "key40": "skTGk4yC5WSotenH1oKddiXCbkdcqmaCFRH235QM6g457Di1faeC5VBr4zrhe9gyxVEwsAg7Qh22i6ofb8vVQdt",
  "key41": "43AnyUTgK7NtaZXUKFPystz1bVF6iGEEKtiAnra1PsbK1aKcn8BaVFHSu2GvZ7fMDRpBhuv5JVFCoazSWTs9wUmk",
  "key42": "4rt7dKtjPLouoy1qSu8qGtwMomFbxRwURhgs2ZU75QFuGrBSw8v3GAhsn4Wmj9s5wWXAqui8BVYpVK8bjx7KsVfu",
  "key43": "5McCGXQ87syF5Fqp6Hy8TyNseC9mQDFbtPyPodgRWo6QZYsabrPYzDYSq6KoEzBhkENEnkXiZ7tpdfmJmdHHMgQo",
  "key44": "vdBToj6xEsjzpx8piCq4wezmy1WJ98P3eifrT11gekPp4qpzyhCqj3EcrjZmrraaUjfoSokQrd6KwS33FYVndyG",
  "key45": "3tNYoad25UZv9AUvS1SKPLSZDgKpPVJFrLvsm8XmhXHTTw6phUaeRMn4M9uaTuvHqRnf2iPVr3nyg27R7aUSk1oW",
  "key46": "5p5rsftQJapoJhSuJqJrVS8geXwW1QVWuzTNfARkd1hXSPaWNTUHCkGAQfdXuAVYK4WdsebDcCw8tc98PtTHqgbc",
  "key47": "3mABsmmUpEjxyRZcgNHcqMZ8sMuCbdsDfsm5AjUUu3B4CmJUcwCPAvzf8GQtmhCHF2XoBiHAbAFfZdwrp435MnMm"
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
